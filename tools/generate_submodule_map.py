#!/usr/bin/env python3
"""Generate a visual comparison of Git submodules across two refs.

The script reads each ref's .gitmodules file and Git tree. It does not need
the submodules to be initialized, so it is safe and fast in Odoo.sh and GitHub
Actions checkouts.
"""

from __future__ import annotations

import argparse
import configparser
import html
import re
import subprocess
from dataclasses import dataclass
from pathlib import Path
from typing import Iterable


class GitCommandError(RuntimeError):
    """Raised when a required Git command fails."""


@dataclass(frozen=True)
class Submodule:
    name: str
    path: str
    url: str
    branch: str
    sha: str
    configured: bool = True

    @property
    def repository_url(self) -> str:
        return normalize_repository_url(self.url)


@dataclass(frozen=True)
class Environment:
    label: str
    ref: str
    head_sha: str
    submodules: tuple[Submodule, ...]


@dataclass(frozen=True)
class Comparison:
    path: str
    production: Submodule | None
    sandbox: Submodule | None
    status: str

    @property
    def module(self) -> Submodule:
        return self.sandbox or self.production  # type: ignore[return-value]


def run_git(*args: str, cwd: Path | None = None, required: bool = True) -> str:
    result = subprocess.run(
        ["git", *args],
        cwd=cwd,
        check=False,
        stdout=subprocess.PIPE,
        stderr=subprocess.PIPE,
        text=True,
    )
    if required and result.returncode:
        command = " ".join(("git", *args))
        message = result.stderr.strip() or result.stdout.strip()
        raise GitCommandError(f"{command} failed: {message}")
    return result.stdout


def normalize_repository_url(url: str) -> str:
    """Turn common GitHub clone URLs into browser URLs."""
    value = (url or "").strip()
    if not value:
        return ""

    scp_match = re.match(r"^git@([^:]+):(.+)$", value)
    if scp_match:
        value = f"https://{scp_match.group(1)}/{scp_match.group(2)}"
    elif value.startswith("ssh://git@"):
        value = "https://" + value[len("ssh://git@") :]
    elif value.startswith("git://"):
        value = "https://" + value[len("git://") :]

    if value.endswith(".git"):
        value = value[:-4]
    return value.rstrip("/")


def read_gitmodules(ref: str, cwd: Path | None = None) -> list[dict[str, str]]:
    content = run_git("show", f"{ref}:.gitmodules", cwd=cwd, required=False)
    if not content.strip():
        return []

    parser = configparser.ConfigParser(interpolation=None)
    parser.read_string(content)
    modules: list[dict[str, str]] = []
    for section in parser.sections():
        match = re.fullmatch(r'submodule "(.+)"', section)
        if not match:
            continue
        path = parser.get(section, "path", fallback="").strip()
        if not path:
            continue
        modules.append(
            {
                "name": match.group(1),
                "path": path,
                "url": parser.get(section, "url", fallback="").strip(),
                "branch": parser.get(section, "branch", fallback="").strip(),
            }
        )
    return modules


def read_gitlinks(ref: str, cwd: Path | None = None) -> dict[str, str]:
    output = run_git("ls-tree", "-r", "-z", ref, cwd=cwd)
    links: dict[str, str] = {}
    for record in output.split("\0"):
        if not record or "\t" not in record:
            continue
        metadata, path = record.split("\t", 1)
        parts = metadata.split()
        if len(parts) == 3 and (parts[0] == "160000" or parts[1] == "commit"):
            links[path] = parts[2]
    return links


def load_environment(
    ref: str, label: str, cwd: Path | None = None
) -> Environment:
    configured = read_gitmodules(ref, cwd=cwd)
    gitlinks = read_gitlinks(ref, cwd=cwd)
    submodules: list[Submodule] = []
    configured_paths: set[str] = set()

    for item in configured:
        path = item["path"]
        configured_paths.add(path)
        submodules.append(
            Submodule(
                name=item["name"],
                path=path,
                url=item["url"],
                branch=item["branch"],
                sha=gitlinks.get(path, ""),
            )
        )

    # Show orphaned gitlinks too. They are important configuration problems,
    # even though they are not represented in .gitmodules.
    for path, sha in gitlinks.items():
        if path not in configured_paths:
            submodules.append(
                Submodule(
                    name=path,
                    path=path,
                    url="",
                    branch="",
                    sha=sha,
                    configured=False,
                )
            )

    head_sha = run_git("rev-parse", ref, cwd=cwd).strip()
    return Environment(
        label=label,
        ref=ref,
        head_sha=head_sha,
        submodules=tuple(sorted(submodules, key=lambda module: module.path.lower())),
    )


def compare_environments(
    production: Environment, sandbox: Environment
) -> list[Comparison]:
    production_by_path = {module.path: module for module in production.submodules}
    sandbox_by_path = {module.path: module for module in sandbox.submodules}
    comparisons: list[Comparison] = []

    for path in sorted(set(production_by_path) | set(sandbox_by_path), key=str.lower):
        prod = production_by_path.get(path)
        sand = sandbox_by_path.get(path)
        if (prod and (not prod.configured or not prod.sha)) or (
            sand and (not sand.configured or not sand.sha)
        ):
            status = "Configuration problem"
        elif prod and sand and prod.repository_url != sand.repository_url:
            status = "Repository changed"
        elif prod and sand and prod.sha == sand.sha:
            status = "Same commit"
        elif prod and sand:
            status = "Different commit"
        elif prod:
            status = "Production only"
        else:
            status = "Sandbox only"
        comparisons.append(Comparison(path, prod, sand, status))
    return comparisons


def short_sha(sha: str) -> str:
    return sha[:7] if sha else "missing"


def display_ref(ref: str) -> str:
    for prefix in ("refs/remotes/origin/", "origin/", "refs/heads/"):
        if ref.startswith(prefix):
            return ref[len(prefix) :]
    return ref


def markdown_escape(value: str) -> str:
    return value.replace("|", "\\|").replace("\n", " ")


def mermaid_label(value: str) -> str:
    return value.replace('"', "'").replace("[", "(").replace("]", ")")


def commit_markdown(module: Submodule | None) -> str:
    if not module:
        return "—"
    label = short_sha(module.sha)
    if module.repository_url and module.sha:
        return f"[`{label}`]({module.repository_url}/commit/{module.sha})"
    return f"`{label}`"


def repository_markdown(module: Submodule) -> str:
    if not module.repository_url:
        return "Missing from `.gitmodules`"
    display = module.repository_url.removeprefix("https://github.com/")
    return f"[{markdown_escape(display)}]({module.repository_url})"


def count_status(comparisons: Iterable[Comparison], status: str) -> int:
    return sum(1 for comparison in comparisons if comparison.status == status)


def render_mermaid(
    production: Environment,
    sandbox: Environment,
    comparisons: list[Comparison],
) -> str:
    lines = [
        "flowchart LR",
        f'  production["{mermaid_label(production.label)} · {len(production.submodules)}"]',
        f'  sandbox["{mermaid_label(sandbox.label)} · {len(sandbox.submodules)}"]',
    ]

    for index, comparison in enumerate(comparisons):
        if comparison.production:
            label = mermaid_label(
                f"{comparison.production.name} · {short_sha(comparison.production.sha)}"
            )
            lines.append(f'  p{index}["{label}"]')
            lines.append(f"  production --> p{index}")
        if comparison.sandbox:
            label = mermaid_label(
                f"{comparison.sandbox.name} · {short_sha(comparison.sandbox.sha)}"
            )
            lines.append(f'  s{index}["{label}"]')
            lines.append(f"  sandbox --> s{index}")
        if comparison.production and comparison.sandbox:
            relationship = (
                "same commit"
                if comparison.status == "Same commit"
                else comparison.status.lower()
            )
            lines.append(f'  p{index} -. "{mermaid_label(relationship)}" .-> s{index}')
    return "\n".join(lines)


def render_markdown(
    repository_url: str,
    production: Environment,
    sandbox: Environment,
    comparisons: list[Comparison],
) -> str:
    summary = {
        "Same commit": count_status(comparisons, "Same commit"),
        "Different commit": count_status(comparisons, "Different commit"),
        "Sandbox only": count_status(comparisons, "Sandbox only"),
        "Production only": count_status(comparisons, "Production only"),
        "Configuration problem": count_status(comparisons, "Configuration problem"),
    }
    repository_url = repository_url.rstrip("/")
    lines = [
        "# Odoo Git submodule map",
        "",
        "> This file is generated by `tools/generate_submodule_map.py`. Do not edit it manually.",
        "",
        f"Repository: [{repository_url.removeprefix('https://github.com/')}]({repository_url})",
        "",
        "| Environment | Ref | Submodules |",
        "| --- | --- | ---: |",
        f"| Production | `{display_ref(production.ref)}` | {len(production.submodules)} |",
        f"| Sandbox | `{display_ref(sandbox.ref)}` | {len(sandbox.submodules)} |",
        "",
        "| Same commit | Different commit | Sandbox only | Production only | Configuration problems |",
        "| ---: | ---: | ---: | ---: | ---: |",
        f"| {summary['Same commit']} | {summary['Different commit']} | {summary['Sandbox only']} | {summary['Production only']} | {summary['Configuration problem']} |",
        "",
        "```mermaid",
        render_mermaid(production, sandbox, comparisons),
        "```",
        "",
        "## Exact comparison",
        "",
        "| Submodule path | Production commit | Sandbox commit | Status | Repository |",
        "| --- | --- | --- | --- | --- |",
    ]

    for comparison in comparisons:
        module = comparison.module
        lines.append(
            "| "
            + " | ".join(
                [
                    f"`{markdown_escape(comparison.path)}`",
                    commit_markdown(comparison.production),
                    commit_markdown(comparison.sandbox),
                    comparison.status,
                    repository_markdown(module),
                ]
            )
            + " |"
        )

    lines.extend(
        [
            "",
            "## Refresh locally",
            "",
            "```bash",
            "git fetch origin main sandbox",
            "python3 tools/generate_submodule_map.py \\",
            "  --production-ref origin/main \\",
            "  --sandbox-ref origin/sandbox \\",
            f"  --repository-url {repository_url}",
            "```",
            "",
        ]
    )
    return "\n".join(lines)


def pin_html(module: Submodule | None, environment: str) -> str:
    if not module:
        return (
            f'<div class="pin pin--missing"><span class="mobile-label">{environment}</span>'
            '<span>Not included</span></div>'
        )
    label = html.escape(short_sha(module.sha))
    branch = f" · branch {html.escape(module.branch)}" if module.branch else ""
    if module.repository_url and module.sha:
        commit = (
            f'<a href="{html.escape(module.repository_url)}/commit/{html.escape(module.sha)}">'
            f"{label}</a>"
        )
    else:
        commit = f"<span>{label}</span>"
    return (
        f'<div class="pin"><span class="mobile-label">{environment}</span>'
        f"<code>{commit}</code><small>{branch}</small></div>"
    )


def status_class(status: str) -> str:
    return {
        "Same commit": "same",
        "Different commit": "different",
        "Sandbox only": "sandbox-only",
        "Production only": "production-only",
        "Repository changed": "problem",
        "Configuration problem": "problem",
    }.get(status, "problem")


def render_html(
    repository_url: str,
    production: Environment,
    sandbox: Environment,
    comparisons: list[Comparison],
) -> str:
    repository_url = repository_url.rstrip("/")
    shared = count_status(comparisons, "Same commit")
    different = count_status(comparisons, "Different commit")
    sandbox_only = count_status(comparisons, "Sandbox only")
    rows: list[str] = []
    for comparison in comparisons:
        module = comparison.module
        module_name = html.escape(module.name)
        path = html.escape(comparison.path)
        repository = html.escape(module.repository_url)
        if repository:
            module_link = f'<a class="module-name" href="{repository}">{module_name}</a>'
        else:
            module_link = f'<span class="module-name">{module_name}</span>'
        rows.append(
            f'<article class="map-row status-{status_class(comparison.status)}">'
            f'{pin_html(comparison.production, "Production")}'
            '<div class="connector" aria-hidden="true"></div>'
            '<div class="module">'
            f'{module_link}<code>{path}</code>'
            f'<span class="status">{html.escape(comparison.status)}</span>'
            '</div>'
            '<div class="connector" aria-hidden="true"></div>'
            f'{pin_html(comparison.sandbox, "Sandbox")}'
            '</article>'
        )

    return f"""<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Odoo Git Submodule Map</title>
  <style>
    :root {{
      color-scheme: light dark;
      --background: #f7f8fa;
      --surface: #ffffff;
      --surface-subtle: #eef1f5;
      --text: #18202a;
      --muted: #5f6b7a;
      --border: #cbd2da;
      --production: #4f46e5;
      --sandbox: #0284c7;
      --same: #15803d;
      --different: #b45309;
      --problem: #b91c1c;
    }}
    @media (prefers-color-scheme: dark) {{
      :root {{
        --background: #101419;
        --surface: #171d24;
        --surface-subtle: #202832;
        --text: #edf1f5;
        --muted: #aab4c0;
        --border: #3b4653;
        --production: #a5b4fc;
        --sandbox: #7dd3fc;
        --same: #86efac;
        --different: #fcd34d;
        --problem: #fca5a5;
      }}
    }}
    * {{ box-sizing: border-box; }}
    body {{
      margin: 0;
      background: var(--background);
      color: var(--text);
      font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
    }}
    a {{ color: inherit; }}
    main {{ width: min(1180px, calc(100% - 32px)); margin: 0 auto; padding: 32px 0 48px; }}
    header {{ margin-bottom: 28px; }}
    h1 {{ margin: 0 0 6px; font-size: clamp(1.65rem, 3vw, 2.35rem); font-weight: 650; }}
    header p {{ margin: 0; color: var(--muted); }}
    .summary {{ display: flex; flex-wrap: wrap; gap: 10px 22px; margin-top: 18px; }}
    .summary div {{ display: grid; gap: 2px; }}
    .summary strong {{ font-size: 1.35rem; font-variant-numeric: tabular-nums; }}
    .summary span {{ color: var(--muted); font-size: .82rem; }}
    .environment-head {{
      display: grid;
      grid-template-columns: minmax(150px, 1fr) 44px minmax(240px, 1.5fr) 44px minmax(150px, 1fr);
      align-items: end;
      margin-bottom: 8px;
      color: var(--muted);
      font-size: .8rem;
      font-weight: 650;
      letter-spacing: .045em;
      text-transform: uppercase;
    }}
    .environment-head .production-head {{ grid-column: 1; }}
    .environment-head .module-head {{ grid-column: 3; text-align: center; }}
    .environment-head .sandbox-head {{ grid-column: 5; text-align: right; }}
    .branch-head {{ display: block; margin-top: 3px; font-size: .7rem; font-weight: 500; letter-spacing: 0; text-transform: none; }}
    .map {{ display: grid; gap: 10px; }}
    .map-row {{
      display: grid;
      grid-template-columns: minmax(150px, 1fr) 44px minmax(240px, 1.5fr) 44px minmax(150px, 1fr);
      align-items: stretch;
    }}
    .pin, .module {{
      min-width: 0;
      border: 1px solid var(--border);
      border-radius: 9px;
      background: var(--surface);
      padding: 12px 14px;
    }}
    .pin {{ display: flex; flex-direction: column; justify-content: center; gap: 4px; }}
    .pin:first-child {{ border-left: 4px solid var(--production); }}
    .pin:last-child {{ border-right: 4px solid var(--sandbox); text-align: right; }}
    .pin code {{ font-variant-numeric: tabular-nums; }}
    .pin a {{ text-decoration-thickness: 1px; text-underline-offset: 3px; }}
    .pin small {{ color: var(--muted); }}
    .pin--missing {{ color: var(--muted); border-style: dashed; }}
    .module {{
      position: relative;
      display: grid;
      justify-items: center;
      align-content: center;
      gap: 5px;
      text-align: center;
    }}
    .module-name {{ overflow-wrap: anywhere; font-weight: 650; text-underline-offset: 3px; }}
    .module code {{ color: var(--muted); font-size: .78rem; overflow-wrap: anywhere; }}
    .status {{ font-size: .75rem; font-weight: 650; }}
    .status-same .status {{ color: var(--same); }}
    .status-different .status,
    .status-sandbox-only .status,
    .status-production-only .status {{ color: var(--different); }}
    .status-problem .status {{ color: var(--problem); }}
    .connector {{ align-self: center; height: 2px; background: var(--border); }}
    .mobile-label {{ display: none; color: var(--muted); font-size: .72rem; font-weight: 650; text-transform: uppercase; }}
    footer {{ margin-top: 24px; color: var(--muted); font-size: .8rem; }}
    footer a {{ text-underline-offset: 3px; }}
    @media (max-width: 760px) {{
      main {{ width: min(100% - 24px, 620px); padding-top: 22px; }}
      .environment-head {{ display: none; }}
      .map-row {{ grid-template-columns: 1fr; gap: 7px; }}
      .connector {{ width: 2px; height: 13px; justify-self: center; }}
      .module {{ grid-row: 3; }}
      .pin:last-child {{ grid-row: 5; text-align: left; border-right-width: 1px; border-left: 4px solid var(--sandbox); }}
      .mobile-label {{ display: inline; }}
    }}
  </style>
</head>
<body>
  <main>
    <header>
      <h1>Odoo Git submodules</h1>
      <p><a href="{html.escape(repository_url)}">{html.escape(repository_url.removeprefix('https://github.com/'))}</a> · production compared with sandbox</p>
      <div class="summary" aria-label="Comparison summary">
        <div><strong>{len(production.submodules)}</strong><span>Production submodules</span></div>
        <div><strong>{len(sandbox.submodules)}</strong><span>Sandbox submodules</span></div>
        <div><strong>{shared}</strong><span>Same commit</span></div>
        <div><strong>{different}</strong><span>Different commit</span></div>
        <div><strong>{sandbox_only}</strong><span>Sandbox only</span></div>
      </div>
    </header>
    <section aria-label="Submodule relationship map">
      <div class="environment-head" aria-hidden="true">
        <span class="production-head">Production<span class="branch-head">{html.escape(display_ref(production.ref))}</span></span>
        <span class="module-head">Submodule repository</span>
        <span class="sandbox-head">Sandbox<span class="branch-head">{html.escape(display_ref(sandbox.ref))}</span></span>
      </div>
      <div class="map">
        {''.join(rows)}
      </div>
    </section>
    <footer>Generated from the exact Git tree pointers on <a href="{html.escape(repository_url)}/tree/{html.escape(display_ref(production.ref))}">{html.escape(display_ref(production.ref))}</a> and <a href="{html.escape(repository_url)}/tree/{html.escape(display_ref(sandbox.ref))}">{html.escape(display_ref(sandbox.ref))}</a>.</footer>
  </main>
</body>
</html>
"""


def write_output(path: Path, content: str) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(content, encoding="utf-8", newline="\n")


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--production-ref", default="origin/main")
    parser.add_argument("--sandbox-ref", default="origin/sandbox")
    parser.add_argument("--production-label", default="Production (main)")
    parser.add_argument("--sandbox-label", default="Sandbox (sandbox)")
    parser.add_argument(
        "--repository-url",
        default="https://github.com/RobertMiller-KR2/Insight",
    )
    parser.add_argument("--markdown-output", default="docs/submodule-map.md")
    parser.add_argument("--html-output", default="docs/submodule-map.html")
    return parser.parse_args()


def main() -> int:
    args = parse_args()
    production = load_environment(args.production_ref, args.production_label)
    sandbox = load_environment(args.sandbox_ref, args.sandbox_label)
    comparisons = compare_environments(production, sandbox)

    write_output(
        Path(args.markdown_output),
        render_markdown(args.repository_url, production, sandbox, comparisons),
    )
    write_output(
        Path(args.html_output),
        render_html(args.repository_url, production, sandbox, comparisons),
    )
    print(
        f"Generated {args.markdown_output} and {args.html_output}: "
        f"{len(production.submodules)} production, {len(sandbox.submodules)} sandbox"
    )
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
