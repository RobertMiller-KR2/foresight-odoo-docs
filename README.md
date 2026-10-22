# Foresight Odoo Documentation

Public, sanitized operational documentation for Foresight Packaging Solutions' Odoo 19 environment.

The GitHub Pages site includes:

- A searchable library of illustrated user and administrator manuals for 41 documented custom modules, including optional modules.
- A version register with links to each module's repository history.
- An illustrated SOP for standard and Program-project quotations.
- Illustrated daily guides and a process map for purchase orders, Barcode receiving and stocking, quotes, sales orders, Barcode picking, and shipping.
- A complete 170-to-Celestial stock-transfer guide with eleven sandbox screenshots, BOL and pick-ticket instructions, separate dispatch/receipt controls, connector reference matching and backorders.
- Clear production and sandbox operating conventions.

No credentials, customer records, internal Odoo URLs, or source code are published. Odoo Apps screenshots show module availability at capture time; installation status can change. Private module repository links require an authorized GitHub account.

The site is deployed from `docs/` through GitHub Actions.

Documentation audited 22 October 2026 against all 41 production and sandbox addon source pins. See `docs/assets/module-sources.json` for exact revisions and `docs/operations-reference.html` for current route, warehouse flag, recovery and release guidance. Source pins and documentation versions do not establish database installation state. Historical screenshots retain their original capture dates.

## Documentation maintenance

Run `node --check docs/assets/manuals.js` and `node tools/check-docs.cjs` before
publishing. These checks render every manual, compare its source versions with
the exact register, and verify local links, image paths and module links.
Review configuration views and current behavior when source versions change;
changing a version number alone does not establish workflow verification.

`tools/generate_submodule_map.py` runs from an Insight checkout after fetching
current production and sandbox refs. Generate its Markdown and HTML into docs,
and retain the note distinguishing embedded production addons from absent links.
Do not treat historical versioned download folders or old screenshots as the
current operating manual; preserve them as release history.
