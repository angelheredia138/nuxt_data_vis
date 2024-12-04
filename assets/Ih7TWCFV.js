import{s as V}from"./h9uNC4DN.js";import{s as h}from"./CQEiDZtN.js";import{_ as X,r as f,a as J,o as q,N as F,x as b,y as D,z as Y,J as C,v as A}from"./B302-g3c.js";import{l as G,r as K}from"./BrdkUO9V.js";import{c as O}from"./Du6F06X2.js";import"./Gi6I4Gst.js";const Q={class:"chart-container-transparent"},W={class:"last-played"},Z={key:0,class:"error-message"},tt={key:1,class:"loading-spinner"},et={__name:"timeline",setup(at){const y=f([]),M=f(!1),m=f(null),k=f(null),$=new Map;f(null);let N;const{$axios:B}=J(),H=async()=>{try{M.value=!0,m.value=null;const n=localStorage.getItem("spotify_access_token");if(!n){m.value="No Spotify access token found in localStorage.",M.value=!1;return}const o={Authorization:`Bearer ${n}`},r=await B.get("/recently-played/",{headers:o});if(y.value=r.data.items||[],y.value.length>0){const c=y.value[0].track,a=c.artists.map(s=>s.name).join(", ");k.value=`${c.name} by ${a} at ${new Date(y.value[0].played_at).toLocaleTimeString()}`}else k.value="No track played";T(y.value)}catch(n){m.value="Error fetching data.",console.error(n)}finally{M.value=!1}},j=()=>{const n=O.filter(o=>o!=="gray");return n[Math.floor(Math.random()*n.length)]},T=n=>{const o=h("#d3-clock-timeline-chart").attr("preserveAspectRatio","xMinYMin meet").attr("viewBox","0 0 400 500").classed("svg-content-responsive",!0).style("background-color","transparent");o.selectAll("*").remove();const r=400,c=500,a=Math.min(r,c)/2-20,s=o.append("g").attr("transform",`translate(${r/2},${c/2})`);s.append("circle").attr("r",a).attr("fill","#f0f0f0").attr("stroke","#000").attr("stroke-width",2);const g=G().domain([0,24]).range([0,2*Math.PI]),E=K(0,24);s.selectAll(".hour-label").data(E).enter().append("text").attr("class","hour-label").attr("x",t=>Math.cos(g(t)-Math.PI/2)*(a-30)).attr("y",t=>Math.sin(g(t)-Math.PI/2)*(a-30)).attr("text-anchor","middle").attr("alignment-baseline","middle").style("font-size","13px").style("font-family","'Inter', sans-serif").style("font-weight","bold").text(t=>{const e=t%12||12,d=t<12||t===24?"AM":"PM";return`${e}${d}`});const v=h("body").append("div").attr("class","tooltip").style("position","absolute").style("background","#fff").style("padding","10px").style("border-radius","5px").style("pointer-events","none").style("display","none");let i=null;const U=new Date,_=new Date(U.setHours(0,0,0,0)),S=s.selectAll(".node").data(n,t=>t.track.id);S.exit().remove(),S.enter().append("circle").attr("class","node").attr("r",5).attr("cx",t=>{const e=new Date(t.played_at),u=(e.getHours()+e.getMinutes()/60)/24*2*Math.PI;return Math.cos(u-Math.PI/2)*(a-10)}).attr("cy",t=>{const e=new Date(t.played_at),u=(e.getHours()+e.getMinutes()/60)/24*2*Math.PI;return Math.sin(u-Math.PI/2)*(a-10)}).style("fill",t=>new Date(t.played_at)<_?"gray":($.has(t.track.id)||$.set(t.track.id,j()),$.get(t.track.id))).style("opacity",.8).on("mouseover",function(t,e){if(i!==this){const d=new Date(e.played_at),u=L(d),l=30,x=e.track.name.length>l?`${e.track.name.substring(0,l)}...`:e.track.name,p=e.track.artists.map(w=>w.name).join(", "),I=p.length>l?`${p.substring(0,l)}...`:p,P=new Date(e.played_at)<_;v.style("display","block").html(`<strong>${x}</strong><br/>Played at: ${u}<br/>Artist: ${I}<br/>${P?"Yesterday":"Today"}`).style("top",t.pageY-10+"px").style("left",t.pageX+10+"px"),h(this).style("stroke","#000").style("stroke-width","2px")}}).on("mouseout",function(){i!==this&&(v.style("display","none"),h(this).style("stroke","none"))}).on("click",function(t,e){if(i===this)v.style("display","none"),h(this).style("stroke","none").attr("r",5),i=null;else{i&&h(i).style("stroke","none").attr("r",5),i=this;const d=new Date(e.played_at),u=L(d),l=30,x=e.track.name.length>l?`${e.track.name.substring(0,l)}...`:e.track.name,p=e.track.artists.map(w=>w.name).join(", "),I=p.length>l?`${p.substring(0,l)}...`:p,P=new Date(e.played_at)<_;v.style("display","block").html(`<strong>${x}</strong><br/>Played at: ${u}<br/>Artist: ${I}<br/>${P?"Yesterday":"Today"}`).style("top",`${t.pageY-10}px`).style("left",`${t.pageX+10}px`),h(this).style("stroke","#000").attr("r",6)}}),z(s,a)},z=(n,o)=>{const r=new Date,a=(r.getHours()+r.getMinutes()/60)/24*2*Math.PI,s=o-60,g=15;n.append("line").attr("class","clock-hand").attr("x1",0).attr("y1",0).attr("x2",Math.cos(a-Math.PI/2)*s).attr("y2",Math.sin(a-Math.PI/2)*s).attr("stroke","red").attr("stroke-width",4),n.append("polygon").attr("points",`
        ${Math.cos(a-Math.PI/2)*(s+g)},${Math.sin(a-Math.PI/2)*(s+g)}
        ${Math.cos(a-Math.PI/2+Math.PI/24)*s},${Math.sin(a-Math.PI/2+Math.PI/24)*s}
        ${Math.cos(a-Math.PI/2-Math.PI/24)*s},${Math.sin(a-Math.PI/2-Math.PI/24)*s}
      `).attr("fill","red")},R=()=>{H(),T(y.value)};q(()=>{H(),N=V(R,6e4)}),F(()=>{clearInterval(N)});const L=n=>{const o=n.getHours(),r=n.getMinutes(),c=o>=12?"PM":"AM",a=o%12||12,s=r<10?`0${r}`:r;return`${a}:${s} ${c}`};return(n,o)=>(A(),b("div",Q,[o[0]||(o[0]=D("div",{class:"last-played"},"Last played:",-1)),D("div",W,Y(k.value||"No track played yet"),1),o[1]||(o[1]=D("svg",{id:"d3-clock-timeline-chart"},null,-1)),m.value?(A(),b("div",Z,Y(m.value),1)):C("",!0),M.value?(A(),b("div",tt,"Loading...")):C("",!0)]))}},it=X(et,[["__scopeId","data-v-b6dc2a06"]]);export{it as default};
