function i(e,f=t=>typeof t=="number"||typeof t=="string"||typeof t=="symbol"?t:JSON.stringify(t),u=[]){let t=u,o=new Set;for(let n of e){let s=f(n);o.has(s)||(t.push(n),o.add(s))}return t}export{i as default};
