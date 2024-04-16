import{_ as a}from"./BasicForm.vue_vue_type_script_setup_true_lang-B11n2pRw.js";import"./BasicForm.vue_vue_type_style_index_0_lang-DFLZXyAX.js";import"./componentMap-C_-ZFoa7.js";import{u as r}from"./useForm-BDFaADfJ.js";import{C as i}from"./entry/index-ByjMvxaB-1713297707789.js";import{P as f}from"./index-imXaIT9X.js";import{d as u,Z as b,a8 as h,a9 as n,k as t,u as o}from"./vue-COhTiP8A.js";import"./FormItem.vue_vue_type_script_lang-x5EmLH8f.js";import"./helper-DG3OZyYQ.js";import"./antd-5AEjVWAR.js";import"./index-Jhur9aId.js";import"./useWindowSizeFn-DJs0Nefx.js";import"./useFormItem-CieOCyoi.js";import"./RadioButtonGroup.vue_vue_type_script_setup_true_lang-BgAjDvt6.js";import"./uuid-D0SLUWHI.js";import"./useSortable-Bc_V3DXD.js";import"./download-iEEs0dO4.js";import"./base64Conver-bBv-IO2K.js";import"./index-h5OxZudi.js";import"./IconPicker.vue_vue_type_script_setup_true_lang-CvAMzAFr.js";import"./copyTextToClipboard-D-nRS8bn.js";import"./index-6WZTVgk9.js";import"./index-B9Q3wSST.js";import"./useContentViewHeight-DWWgh95W.js";import"./onMountedOrActivated-GpUdBAv_.js";const E=u({__name:"AdvancedForm",setup(P){const l=()=>[{field:"field1",component:"Input",label:"字段1",colProps:{span:8},componentProps:{placeholder:"自定义placeholder",onChange:e=>{}}},{field:"field2",component:"Input",label:"字段2",colProps:{span:8}},{field:"field3",component:"DatePicker",label:"字段3",colProps:{span:8}},{field:"field4",component:"Select",label:"字段4",colProps:{span:8},componentProps:{options:[{label:"选项1",value:"1",key:"1"},{label:"选项2",value:"2",key:"2"}]}},{field:"field5",component:"CheckboxGroup",label:"字段5",colProps:{span:8},componentProps:{options:[{label:"选项1",value:"1"},{label:"选项2",value:"2"}]}}];function s(){return[{field:"field10",component:"Input",label:"字段10",colProps:{span:8}},{field:"field11",component:"Input",label:"字段11",colProps:{span:8}},{field:"field12",component:"Input",label:"字段12",colProps:{span:8}},{field:"field13",component:"Input",label:"字段13",colProps:{span:8}}]}const[c]=r({labelWidth:120,schemas:l(),actionColOptions:{span:24},compact:!0,showAdvancedButton:!0}),p=[];for(let e=14;e<30;e++)p.push({field:"field"+e,component:"Input",label:"字段"+e,colProps:{span:8}});const[m]=r({labelWidth:120,schemas:[...l(),...s(),{field:"",component:"Divider",label:"更多字段"},...p],actionColOptions:{span:24},compact:!0,showAdvancedButton:!0,alwaysShowLines:2});function d(e){}return(e,_)=>(b(),h(o(f),{title:"可折叠表单示例"},{default:n(()=>[t(o(i),{title:"基础收缩示例"},{default:n(()=>[t(o(a),{onRegister:o(c)},null,8,["onRegister"])]),_:1}),t(o(i),{title:"超过3行自动收起，折叠时保留2行",class:"mt-4"},{default:n(()=>[t(o(a),{onRegister:o(m),onAdvancedChange:d},null,8,["onRegister"])]),_:1})]),_:1}))}});export{E as default};
