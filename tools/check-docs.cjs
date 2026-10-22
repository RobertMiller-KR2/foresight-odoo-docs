const fs=require('node:fs'),path=require('node:path'),vm=require('node:vm');
const root=path.resolve(__dirname,'../docs');
const source=fs.readFileSync(path.join(root,'assets/manuals.js'),'utf8');
let errors=[];const outputs=[];let target={innerHTML:''};
const context={document:{addEventListener(){},querySelector(sel){return sel==='[data-manual]'||sel==='[data-change-table]'?target:null;}},URLSearchParams};
vm.createContext(context);vm.runInContext(source+';this.catalog=MODULES;',context);
const modules=context.catalog;
const register=JSON.parse(fs.readFileSync(path.join(root,'assets/module-sources.json'),'utf8'));

if(new Set(modules.map(m=>m.module)).size!==Object.keys(register.modules).length) errors.push('Duplicate module');
for(const item of modules){
  if(item.productionSourceVersion!==register.modules[item.module].productionVersion)errors.push(`Production source mismatch ${item.module}`);
  if(item.sandboxSourceVersion!==register.modules[item.module].sandboxVersion)errors.push(`Sandbox source mismatch ${item.module}`);
  if(!item.setup.length||!item.use.length||!item.troubleshoot.length)errors.push(`Incomplete manual ${item.module}`);
  vm.runInContext(`renderManual(${JSON.stringify(item.slug)});`,context);
  outputs.push({name:`manual.html?module=${item.slug}`,html:target.innerHTML});
}
vm.runInContext('renderChanges();',context);outputs.push({name:'changes table',html:target.innerHTML});
for(const file of fs.readdirSync(root).filter(f=>f.endsWith('.html')))outputs.push({name:file,html:fs.readFileSync(path.join(root,file),'utf8')});
for(const out of outputs){
  for(const match of out.html.matchAll(/(?:src|href)=["']([^"']+)["']/g)){
    const url=match[1];if(/^(?:https?:|#|mailto:|data:)/.test(url))continue;
    const [file,fragment]=url.split('#');const pathname=file.split('?')[0];
    const dest=path.resolve(root,pathname);
    if(!fs.existsSync(dest)){errors.push(`${out.name}: missing ${url}`);continue;}
    if(pathname==='manual.html'&&file.includes('?module=')){
      const slug=new URLSearchParams(file.split('?')[1]).get('module');
      if(!modules.some(m=>m.slug===slug))errors.push(`${out.name}: missing module ${slug}`);
    }
    if(fragment&&pathname.endsWith('.html')&&!fs.readFileSync(dest,'utf8').includes(`id="${fragment}"`))errors.push(`${out.name}: missing anchor ${url}`);
  }
  if(/foresightpackagingsolutions(?:\.odoo|[^\s"']*\.dev\.odoo)|S00224|Aeroflex|PRIVATE KEY|github_pat_|ghp_/.test(out.html))errors.push(`${out.name}: sensitive environment or customer content`);
}
const result={manuals:modules.length,renderedPages:outputs.length,errors};
console.log(JSON.stringify(result,null,2));if(errors.length)process.exitCode=1;
