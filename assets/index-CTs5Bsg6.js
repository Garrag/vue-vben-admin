var u=(s,a,e)=>new Promise((m,i)=>{var o=r=>{try{t(e.next(r))}catch(c){i(c)}},p=r=>{try{t(e.throw(r))}catch(c){i(c)}},t=r=>r.done?m(r.value):Promise.resolve(r.value).then(o,p);t((e=e.apply(s,a)).next())});import{P as w}from"./index-imXaIT9X.js";import{_ as h}from"./BasicForm.vue_vue_type_script_setup_true_lang-B11n2pRw.js";import"./BasicForm.vue_vue_type_style_index_0_lang-DFLZXyAX.js";import"./componentMap-C_-ZFoa7.js";import{u as P}from"./useForm-BDFaADfJ.js";import{d as b,a7 as g,Z as x,a8 as y,a9 as l,$ as f,k as d,u as n,G as _}from"./vue-COhTiP8A.js";import"./entry/index-ByjMvxaB-1713297707789.js";import"./antd-5AEjVWAR.js";import"./useContentViewHeight-DWWgh95W.js";import"./useWindowSizeFn-DJs0Nefx.js";import"./onMountedOrActivated-GpUdBAv_.js";import"./FormItem.vue_vue_type_script_lang-x5EmLH8f.js";import"./helper-DG3OZyYQ.js";import"./index-Jhur9aId.js";import"./useFormItem-CieOCyoi.js";import"./RadioButtonGroup.vue_vue_type_script_setup_true_lang-BgAjDvt6.js";import"./uuid-D0SLUWHI.js";import"./useSortable-Bc_V3DXD.js";import"./download-iEEs0dO4.js";import"./base64Conver-bBv-IO2K.js";import"./index-h5OxZudi.js";import"./IconPicker.vue_vue_type_script_setup_true_lang-CvAMzAFr.js";import"./copyTextToClipboard-D-nRS8bn.js";import"./index-6WZTVgk9.js";import"./index-B9Q3wSST.js";const C=[{field:"passwordOld",label:"当前密码",component:"InputPassword",required:!0},{field:"passwordNew",label:"新密码",component:"StrengthMeter",componentProps:{placeholder:"新密码"},rules:[{required:!0,message:"请输入新密码"}]},{field:"confirmPassword",label:"确认密码",component:"InputPassword",dynamicRules:({values:s})=>[{required:!0,validator:(a,e)=>e?e!==s.passwordNew?Promise.reject("两次输入的密码不一致!"):Promise.resolve():Promise.reject("密码不能为空")}]}],k={class:"py-8 bg-white flex flex-col justify-center items-center"},v={class:"flex justify-center"},X=b({name:"ChangePassword",__name:"index",setup(s){const[a,{validate:e,resetFields:m}]=P({size:"large",baseColProps:{span:24},labelWidth:100,showActionButtonGroup:!1,schemas:C});function i(){return u(this,null,function*(){try{const o=yield e(),{passwordOld:p,passwordNew:t}=o}catch(o){}})}return(o,p)=>{const t=g("a-button");return x(),y(n(w),{title:"修改当前用户密码",content:"修改成功后会自动退出当前登录！"},{default:l(()=>[f("div",k,[d(n(h),{onRegister:n(a)},null,8,["onRegister"]),f("div",v,[d(t,{onClick:n(m)},{default:l(()=>[_(" 重置 ")]),_:1},8,["onClick"]),d(t,{class:"!ml-4",type:"primary",onClick:i},{default:l(()=>[_(" 确认 ")]),_:1})])])]),_:1})}}});export{X as default};
