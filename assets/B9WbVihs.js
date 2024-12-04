import{_ as u,r as v,F as w,D as g,o as f,e as _,g as o,E as y,v as x,B as r,G as C,H as T,y as e,A as i,C as l}from"./B302-g3c.js";import k from"./CvglrfgW.js";import"./CQEiDZtN.js";import"./Du6F06X2.js";const B={class:"loading-overlay"},b={class:"header-container"},S={class:"graphs-container"},z={class:"graph-item"},E={class:"graph-content"},H={__name:"christmas",setup(L){const n=v(!0),s=w({width:0,height:0,isSmall:!1}),a=()=>{typeof window<"u"&&(s.width=window.innerWidth,s.height=window.innerHeight,s.isSmall=s.width<768)},d=g(),c=()=>{d.push("/main")};return f(()=>{typeof window<"u"&&(window.addEventListener("resize",a),a()),setTimeout(()=>{n.value=!1},2e3)}),_(()=>{typeof window<"u"&&window.removeEventListener("resize",a)}),(D,t)=>{const h=o("v-progress-circular"),p=o("v-btn"),m=o("v-container");return x(),y(m,{fluid:"",class:"animated-background"},{default:r(()=>[C(e("div",B,[i(h,{size:80,width:8,indeterminate:"",color:"white",class:"loading-spinner"}),t[0]||(t[0]=e("div",{class:"loading-message"},"Loading...",-1))],512),[[T,n.value]]),e("div",null,[e("div",b,[t[2]||(t[2]=e("h1",{class:"page-title"},"Christmas Chart",-1)),i(p,{color:"primary",class:"back-button",onClick:c},{default:r(()=>t[1]||(t[1]=[l(" Back to Home ")])),_:1})]),t[4]||(t[4]=e("div",{class:"explanation-section",style:{"max-width":"800px"}},[e("h2",{class:"subtitle"},"Chart Explanation"),e("p",{class:"explanation-text"},[e("strong",null,"Christmas Tree Chart:"),l(" This chart displays your top 20 artists of all time, represented as ornaments on a Christmas tree. Hovering over each ornament will show you the artist name and image. The top ornament is your highest artist, then from left to right is 2-20. Enjoy exploring your musical tastes in a festive way! ")]),e("p",{class:"explanation-text"},"This chart is created using D3.js.")],-1)),e("div",S,[e("div",z,[t[3]||(t[3]=e("h3",{class:"graph-title"},"Christmas Tree Chart",-1)),e("div",E,[i(k)])])])])]),_:1})}}},F=u(H,[["__scopeId","data-v-2a8749ce"]]);export{F as default};
