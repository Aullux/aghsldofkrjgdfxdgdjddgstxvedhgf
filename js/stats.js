(()=>{var g=(r,e,t)=>new Promise((o,i)=>{var s=n=>{try{a(t.next(n))}catch(u){i(u)}},m=n=>{try{a(t.throw(n))}catch(u){i(u)}},a=n=>n.done?o(n.value):Promise.resolve(n.value).then(s,m);a((t=t.apply(r,e)).next())});var l="https://raw.githubusercontent.com/";function c(r,e,t){return l+r+"/"+(t||"HEAD")+"/"+e}g(void 0,null,function*(){let r=c("eighred/Eighred-releases","community-plugins.json"),e=c("eighred/Eighred-releases","community-css-themes.json"),t=o=>g(void 0,null,function*(){let i=yield ajaxPromise({url:o}),s=JSON.parse(i);if(!Array.isArray(s))throw new Error("Failed to parse community plugins.");return s.length});fish(".community-plugin-count").setText(String(yield t(r))),fish(".community-theme-count").setText(String(yield t(e)))});})();
