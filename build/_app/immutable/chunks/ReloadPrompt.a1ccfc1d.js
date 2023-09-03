import{s as T,n as w,e as S}from"./scheduler.32f487cd.js";import{S as U,i as j,e as C,a as k,f as v,g as h,s as E,h as g,j as W,c as x,E as b,k as R,x as y,F as L}from"./index.6c161935.js";import{_ as A}from"./preload-helper.cf010ec4.js";import{w as N}from"./index.921c05df.js";function q(l={}){const{immediate:e=!1,onNeedRefresh:n,onOfflineReady:t,onRegistered:i,onRegisteredSW:s,onRegisterError:c}=l;let r,u,p;const m=async(d=!0)=>{await u,await(p==null?void 0:p())};async function a(){if("serviceWorker"in navigator){const{Workbox:d}=await A(()=>import("./workbox-window.prod.es5.a7b12eab.js"),[]);r=new d("/sw.js",{scope:"/",type:"classic"}),p=async()=>{await(r==null?void 0:r.messageSkipWaiting())};{let o=!1;const f=()=>{o=!0,r==null||r.addEventListener("controlling",_=>{_.isUpdate&&window.location.reload()}),n==null||n()};r.addEventListener("installed",_=>{typeof _.isUpdate>"u"?typeof _.isExternal<"u"?_.isExternal?f():!o&&(t==null||t()):_.isExternal?window.location.reload():!o&&(t==null||t()):_.isUpdate||t==null||t()}),r.addEventListener("waiting",f),r.addEventListener("externalwaiting",f)}r.register({immediate:e}).then(o=>{s?s("/sw.js",o):i==null||i(o)}).catch(o=>{c==null||c(o)})}}return u=a(),m}function D(l={}){const{immediate:e=!0,onNeedRefresh:n,onOfflineReady:t,onRegistered:i,onRegisteredSW:s,onRegisterError:c}=l,r=N(!1),u=N(!1),p=q({immediate:e,onOfflineReady(){u.set(!0),t==null||t()},onNeedRefresh(){r.set(!0),n==null||n()},onRegistered:i,onRegisteredSW:s,onRegisterError:c});return{needRefresh:r,offlineReady:u,updateServiceWorker:p}}function P(l){let e,n,t,i,s,c="Close",r,u;function p(o,f){return o[1]?V:I}let m=p(l),a=m(l),d=l[0]&&O(l);return{c(){e=h("div"),n=h("div"),a.c(),t=E(),d&&d.c(),i=E(),s=h("button"),s.textContent=c,this.h()},l(o){e=g(o,"DIV",{class:!0,role:!0});var f=W(e);n=g(f,"DIV",{class:!0});var _=W(n);a.l(_),_.forEach(v),t=x(f),d&&d.l(f),i=x(f),s=g(f,"BUTTON",{class:!0,"data-svelte-h":!0}),b(s)!=="svelte-1ff2ewa"&&(s.textContent=c),f.forEach(v),this.h()},h(){R(n,"class","message svelte-17i0im4"),R(s,"class","svelte-17i0im4"),R(e,"class","pwa-toast svelte-17i0im4"),R(e,"role","alert")},m(o,f){k(o,e,f),y(e,n),a.m(n,null),y(e,t),d&&d.m(e,null),y(e,i),y(e,s),r||(u=L(s,"click",l[6]),r=!0)},p(o,f){m!==(m=p(o))&&(a.d(1),a=m(o),a&&(a.c(),a.m(n,null))),o[0]?d?d.p(o,f):(d=O(o),d.c(),d.m(e,i)):d&&(d.d(1),d=null)},d(o){o&&v(e),a.d(),d&&d.d(),r=!1,u()}}}function I(l){let e,n="New content available, click on reload button to update.";return{c(){e=h("span"),e.textContent=n},l(t){e=g(t,"SPAN",{"data-svelte-h":!0}),b(e)!=="svelte-1f14aq8"&&(e.textContent=n)},m(t,i){k(t,e,i)},d(t){t&&v(e)}}}function V(l){let e,n="App ready to work offline";return{c(){e=h("span"),e.textContent=n},l(t){e=g(t,"SPAN",{"data-svelte-h":!0}),b(e)!=="svelte-1uzusaj"&&(e.textContent=n)},m(t,i){k(t,e,i)},d(t){t&&v(e)}}}function O(l){let e,n="Reload",t,i;return{c(){e=h("button"),e.textContent=n,this.h()},l(s){e=g(s,"BUTTON",{class:!0,"data-svelte-h":!0}),b(e)!=="svelte-8ag32q"&&(e.textContent=n),this.h()},h(){R(e,"class","svelte-17i0im4")},m(s,c){k(s,e,c),t||(i=L(e,"click",l[7]),t=!0)},p:w,d(s){s&&v(e),t=!1,i()}}}function B(l){let e,n=l[2]&&P(l);return{c(){n&&n.c(),e=C()},l(t){n&&n.l(t),e=C()},m(t,i){n&&n.m(t,i),k(t,e,i)},p(t,[i]){t[2]?n?n.p(t,i):(n=P(t),n.c(),n.m(e.parentNode,e)):n&&(n.d(1),n=null)},i:w,o:w,d(t){t&&v(e),n&&n.d(t)}}}function z(l,e,n){let t,i,s;const{needRefresh:c,updateServiceWorker:r,offlineReady:u}=D({onRegistered(a){console.log(`SW Registered: ${a}`)},onRegisterError(a){console.log("SW registration error",a)}});S(l,c,a=>n(0,i=a)),S(l,u,a=>n(1,s=a));const p=()=>{u.set(!1),c.set(!1)},m=()=>r(!0);return l.$$.update=()=>{l.$$.dirty&3&&n(2,t=s||i)},[i,s,t,c,r,u,p,m]}class J extends U{constructor(e){super(),j(this,e,z,B,T,{})}}export{J as default};
//# sourceMappingURL=ReloadPrompt.a1ccfc1d.js.map
