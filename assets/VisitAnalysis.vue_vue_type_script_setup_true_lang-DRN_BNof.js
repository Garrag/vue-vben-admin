var n=Object.defineProperty;var s=Object.getOwnPropertySymbols;var p=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable;var i=(a,e,t)=>e in a?n(a,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[e]=t,l=(a,e)=>{for(var t in e||(e={}))p.call(e,t)&&i(a,t,e[t]);if(s)for(var t of s(e))c.call(e,t)&&i(a,t,e[t]);return a};import{du as m}from"./useECharts-sI9x54ZM.js";import{b as y}from"./props-BGjQktHt.js";import{d as h,f,o as u,Z as d,_ as g,ag as b}from"./vue-COhTiP8A.js";const k=h({__name:"VisitAnalysis",props:l({},y),setup(a){const e=f(null),{setOptions:t}=m(e);return u(()=>{t({tooltip:{trigger:"axis",axisPointer:{lineStyle:{width:1,color:"#019680"}}},xAxis:{type:"category",boundaryGap:!1,data:[...new Array(18)].map((o,r)=>`${r+6}:00`),splitLine:{show:!0,lineStyle:{width:1,type:"solid",color:"rgba(226,226,226,0.5)"}},axisTick:{show:!1}},yAxis:[{type:"value",max:8e4,splitNumber:4,axisTick:{show:!1},splitArea:{show:!0,areaStyle:{color:["rgba(255,255,255,0.2)","rgba(226,226,226,0.2)"]}}}],grid:{left:"1%",right:"1%",top:"2  %",bottom:0,containLabel:!0},series:[{smooth:!0,data:[111,222,4e3,18e3,33333,55555,66666,33333,14e3,36e3,66666,44444,22222,11111,4e3,2e3,500,333,222,111],type:"line",areaStyle:{},itemStyle:{color:"#5ab1ef"}},{smooth:!0,data:[33,66,88,333,3333,5e3,18e3,3e3,1200,13e3,22e3,11e3,2221,1201,390,198,60,30,22,11],type:"line",areaStyle:{},itemStyle:{color:"#019680"}}]})}),(o,r)=>(d(),g("div",{ref_key:"chartRef",ref:e,style:b({height:o.height,width:o.width})},null,4))}});export{k as _};
