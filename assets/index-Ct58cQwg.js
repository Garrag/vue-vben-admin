var d=(n,e,s)=>new Promise((t,o)=>{var r=c=>{try{i(s.next(c))}catch(a){o(a)}},u=c=>{try{i(s.throw(c))}catch(a){o(a)}},i=c=>c.done?t(c.value):Promise.resolve(c.value).then(r,u);i((s=s.apply(n,e)).next())});import{bn as l,f as p,bo as f,aa as y,e as g}from"./antd-5AEjVWAR.js";function A(n){if(n&&n.component){const e=f(`${v(n.component)}_`);return n.key=e,n.field=e,!0}return f("key_")}function F(n,e){let s=[];if(l(n)){if(y(e))s=n.splice(e,1);else{const t=n.findIndex(e);t!==-1&&(s=n.splice(t,1))}return s.shift()}}function v(n){return n.replace(/([A-Z])/g,"_$1").toLowerCase()}function h(n,e){if(!l(n))return;const s=t=>{t.forEach(o=>{var r;["Grid"].includes(o.component)?(r=o.columns)==null||r.forEach(u=>s(u.children)):e(o)})};s(n)}const b=(n,e)=>{let s;const t=o=>o.some(r=>{var i;const{component:u}=r;return["Grid"].includes(u)?(i=r.columns)==null?void 0:i.some(c=>t(c.children)):(e(r)&&(s=r),e(r))});return t(n),s},x=n=>{const e=p(n);return delete e.currentItem,delete e.activeKey,e.schemas&&h(e.schemas,s=>{delete s.icon,delete s.key}),e},E=n=>d(void 0,null,function*(){try{return g(n)?yield n():n}catch(e){return[]}}),_=n=>{h(n,e=>{"required"in e&&(!l(e.rules)&&(e.rules=[]),e.rules.push({required:!0,message:e.message}),delete e.required,delete e.message)})};export{_ as a,b,F as c,h as f,A as g,E as h,x as r};
