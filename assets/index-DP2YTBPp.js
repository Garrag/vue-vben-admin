import{d as v,f as h,r as x,Z as a,a8 as p,a9 as c,$ as l,k as o,u as r,m as n,A as s,ab as u}from"./vue-COhTiP8A.js";import N from"./Step1-BozyALhf.js";import{_ as k}from"./Step2.vue_vue_type_script_setup_true_lang-BviSnxyV.js";import{_ as P}from"./Step3.vue_vue_type_script_setup_true_lang-D74acp5v.js";import{P as V}from"./index-imXaIT9X.js";import{bi as i}from"./antd-5AEjVWAR.js";import{c as b}from"./entry/index-ByjMvxaB-1713297707789.js";import"./BasicForm.vue_vue_type_script_setup_true_lang-B11n2pRw.js";import"./FormItem.vue_vue_type_script_lang-x5EmLH8f.js";import"./componentMap-C_-ZFoa7.js";import"./useFormItem-CieOCyoi.js";import"./RadioButtonGroup.vue_vue_type_script_setup_true_lang-BgAjDvt6.js";import"./index-Jhur9aId.js";import"./useWindowSizeFn-DJs0Nefx.js";import"./uuid-D0SLUWHI.js";import"./useSortable-Bc_V3DXD.js";import"./download-iEEs0dO4.js";import"./base64Conver-bBv-IO2K.js";import"./index-h5OxZudi.js";import"./IconPicker.vue_vue_type_script_setup_true_lang-CvAMzAFr.js";import"./copyTextToClipboard-D-nRS8bn.js";import"./index-6WZTVgk9.js";import"./index-B9Q3wSST.js";import"./helper-DG3OZyYQ.js";import"./BasicForm.vue_vue_type_style_index_0_lang-DFLZXyAX.js";import"./useForm-BDFaADfJ.js";import"./data-CaNweXRQ.js";import"./useContentViewHeight-DWWgh95W.js";import"./onMountedOrActivated-GpUdBAv_.js";const B={class:"step-form-form"},C={class:"mt-5"},g=v({name:"FormStepPage",__name:"index",setup(w){const t=h(0),e=x({initStep2:!1,initStep3:!1});function f(m){t.value++,e.initStep2=!0}function _(){t.value--}function d(m){t.value++,e.initStep3=!0}function S(){t.value=0,e.initStep2=!1,e.initStep3=!1}return(m,$)=>(a(),p(r(V),{title:"分步表单",contentBackground:"",content:" 将一个冗长或用户不熟悉的表单任务分成多个步骤，指导用户完成。",contentClass:"p-4"},{default:c(()=>[l("div",B,[o(r(i),{current:t.value},{default:c(()=>[o(r(i).Step,{title:"填写转账信息"}),o(r(i).Step,{title:"确认转账信息"}),o(r(i).Step,{title:"完成"})]),_:1},8,["current"])]),l("div",C,[n(o(N,{onNext:f},null,512),[[s,t.value===0]]),e.initStep2?n((a(),p(k,{key:0,onPrev:_,onNext:d},null,512)),[[s,t.value===1]]):u("",!0),e.initStep3?n((a(),p(P,{key:1,onRedo:S},null,512)),[[s,t.value===2]]):u("",!0)])]),_:1}))}}),at=b(g,[["__scopeId","data-v-778b6ab2"]]);export{at as default};
