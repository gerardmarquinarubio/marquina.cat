var o=Object.defineProperty;var r=Object.getOwnPropertyDescriptor;var u=Object.getOwnPropertyNames;var a=Object.prototype.hasOwnProperty;var c=(s,e)=>{for(var n in e)o(s,n,{get:e[n],enumerable:!0})},i=(s,e,n,m)=>{if(e&&typeof e=="object"||typeof e=="function")for(let t of u(e))!a.call(s,t)&&t!==n&&o(s,t,{get:()=>e[t],enumerable:!(m=r(e,t))||m.enumerable});return s};var l=s=>i(o({},"__esModule",{value:!0}),s);var d={};c(d,{default:()=>b});module.exports=l(d);var p=async s=>new Promise(e=>setTimeout(e,s)),b=p;
