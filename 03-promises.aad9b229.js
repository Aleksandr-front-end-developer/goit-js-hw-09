var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},n=e.parcelRequired7c6;null==n&&((n=function(e){if(e in t)return t[e].exports;if(e in o){var n=o[e];delete o[e];var r={id:e,exports:{}};return t[e]=r,n.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){o[e]=t},e.parcelRequired7c6=n);var r=n("iQIUW");const i=document.querySelector(".form");i.addEventListener("submit",(function(e){e.preventDefault();let t=Number(i.querySelector('[name="delay"]').value);const o=Number(i.querySelector('[name="step"]').value),n=Number(i.querySelector('[name="amount"]').value);for(let e=1;e<=n;e+=1)setTimeout((()=>{var n,i;(n=e,i=t,new Promise(((e,t)=>{setTimeout((()=>{const o=Math.random()>.3;o?e({position:n,delay:i}):t({position:n,delay:i})}),i)}))).then((({position:e,delay:t})=>{r.Notify.success(`✅ Fulfilled promise ${e} in ${t}ms`,{timeout:3e3})})).catch((({position:e,delay:t})=>{r.Notify.failure(`❌ Rejected promise ${e} in ${t}ms`,{timeout:3e3})})),t+=o}),t)}));
//# sourceMappingURL=03-promises.aad9b229.js.map
