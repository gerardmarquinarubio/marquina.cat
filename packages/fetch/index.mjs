async function n(t,r){let e=await fetch(t,r);if(!e.ok)throw new Error("response was unsuccesful");return await e.json()}export{n as default};
