import{_ as o,D as t,o as c,E as n,v as r}from"./D7mx3JYG.js";import _ from"./DczCiMOA.js";const m={__name:"callback",setup(i){const e=t();return c(async()=>{const s=new URLSearchParams(window.location.hash.substring(1)).get("access_token");s?(localStorage.setItem("spotify_access_token",s),setTimeout(()=>{e.push("/main")},1500)):setTimeout(()=>{e.push("/")},1500)}),(a,s)=>(r(),n(_,{message:"Redirecting..."}))}},l=o(m,[["__scopeId","data-v-135fa42b"]]);export{l as default};