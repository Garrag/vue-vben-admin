var f=(l,d,s)=>new Promise((m,t)=>{var r=o=>{try{e(s.next(o))}catch(a){t(a)}},i=o=>{try{e(s.throw(o))}catch(a){t(a)}},e=o=>o.done?m(o.value):Promise.resolve(o.value).then(r,i);e((s=s.apply(l,d)).next())});import{R as _,l as k,aF as C,a_ as v,c as x}from"./entry/index-ByjMvxaB-1713297707789.js";import{P as b}from"./index-imXaIT9X.js";import{_ as g}from"./CurrentPermissionMode.vue_vue_type_script_setup_true_lang-8m_lmiYc.js";import{d as B,c as P,a7 as S,Z as A,a8 as M,a9 as c,k as n,u as p,$ as T,G as u}from"./vue-COhTiP8A.js";import{at as $,Y as w}from"./antd-5AEjVWAR.js";import"./useContentViewHeight-DWWgh95W.js";import"./useWindowSizeFn-DJs0Nefx.js";import"./onMountedOrActivated-GpUdBAv_.js";const y={class:"mt-4"},N=B({__name:"index",setup(l){const{refreshMenu:d}=_(),s=k(),m=C(),t=P(()=>m.getProjectConfig.permissionMode===v.BACK);function r(i){return f(this,null,function*(){const e="fakeToken"+i;s.setToken(e),s.getUserInfoAction(),d()})}return(i,e)=>{const o=S("a-button");return A(),M(p(b),{title:"后台权限示例",contentBackground:"",contentClass:"p-4",content:"目前mock了两组数据， id为1 和 2 具体返回的菜单可以在mock/sys/menu.ts内查看"},{default:c(()=>[n(g),n(p($),{class:"mt-4",type:"info",message:"点击后请查看左侧菜单变化","show-icon":""}),T("div",y,[u(" 权限切换(请先切换权限模式为后台权限模式): "),n(p(w),null,{default:c(()=>[n(o,{onClick:e[0]||(e[0]=a=>r(1)),disabled:!t.value},{default:c(()=>[u(" 获取用户id为1的菜单 ")]),_:1},8,["disabled"]),n(o,{onClick:e[1]||(e[1]=a=>r(2)),disabled:!t.value},{default:c(()=>[u(" 获取用户id为2的菜单 ")]),_:1},8,["disabled"])]),_:1})])]),_:1})}}}),R=x(N,[["__scopeId","data-v-176e63cc"]]);export{R as default};
