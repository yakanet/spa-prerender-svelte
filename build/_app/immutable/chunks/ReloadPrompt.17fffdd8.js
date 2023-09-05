import{s as M,e as T,k as F}from"./scheduler.78622ee8.js";import{S as H,i as J,e as U,a as N,d as E,p as K,t as I,b as Q,f as g,g as R,m as S,s as D,h as k,j as b,n as W,c as V,k as y,z as h,G,o as L,I as A}from"./index.09225a63.js";import{L as X}from"./i18n-svelte.eeefab73.js";import{a as B}from"./index.62a9e66c.js";import{_ as Y}from"./preload-helper.cf010ec4.js";import{w as C}from"./index.a1f33fe4.js";function Z(n={}){const{immediate:t=!1,onNeedRefresh:e,onOfflineReady:s,onRegistered:o,onRegisteredSW:f,onRegisterError:r}=n;let i,c,u;const v=async(m=!0)=>{await c,await(u==null?void 0:u())};async function l(){if("serviceWorker"in navigator){const{Workbox:m}=await Y(()=>import("./workbox-window.prod.es5.a7b12eab.js"),[]);i=new m("/sw.js",{scope:"/",type:"classic"}),u=async()=>{await(i==null?void 0:i.messageSkipWaiting())};{let _=!1;const w=()=>{_=!0,i==null||i.addEventListener("controlling",a=>{a.isUpdate&&window.location.reload()}),e==null||e()};i.addEventListener("installed",a=>{typeof a.isUpdate>"u"?typeof a.isExternal<"u"?a.isExternal?w():!_&&(s==null||s()):a.isExternal?window.location.reload():!_&&(s==null||s()):a.isUpdate||s==null||s()}),i.addEventListener("waiting",w),i.addEventListener("externalwaiting",w)}i.register({immediate:t}).then(_=>{f?f("/sw.js",_):o==null||o(_)}).catch(_=>{r==null||r(_)})}}return c=l(),v}function $(n={}){const{immediate:t=!0,onNeedRefresh:e,onOfflineReady:s,onRegistered:o,onRegisteredSW:f,onRegisterError:r}=n,i=C(!1),c=C(!1),u=Z({immediate:t,onOfflineReady(){c.set(!0),s==null||s()},onNeedRefresh(){i.set(!0),e==null||e()},onRegistered:o,onRegisteredSW:f,onRegisterError:r});return{needRefresh:i,offlineReady:c,updateServiceWorker:u}}function q(n){let t,e,s,o=n[2].pwa_new_content()+"",f,r,i,c,u=n[2].pwa_close()+"",v,l,m,_,w,a=n[0]&&z(n);return{c(){t=R("div"),e=R("div"),s=R("span"),f=S(o),r=D(),a&&a.c(),i=D(),c=R("button"),v=S(u),this.h()},l(d){t=k(d,"DIV",{class:!0,role:!0});var p=b(t);e=k(p,"DIV",{class:!0});var P=b(e);s=k(P,"SPAN",{});var j=b(s);f=W(j,o),j.forEach(g),P.forEach(g),r=V(p),a&&a.l(p),i=V(p),c=k(p,"BUTTON",{class:!0});var O=b(c);v=W(O,u),O.forEach(g),p.forEach(g),this.h()},h(){y(e,"class","message svelte-1jkg08h"),y(c,"class","svelte-1jkg08h"),y(t,"class","pwa-toast svelte-1jkg08h"),y(t,"role","alert")},m(d,p){N(d,t,p),h(t,e),h(e,s),h(s,f),h(t,r),a&&a.m(t,null),h(t,i),h(t,c),h(c,v),m=!0,_||(w=G(c,"click",n[5]),_=!0)},p(d,p){(!m||p&4)&&o!==(o=d[2].pwa_new_content()+"")&&L(f,o),d[0]?a?a.p(d,p):(a=z(d),a.c(),a.m(t,i)):a&&(a.d(1),a=null),(!m||p&4)&&u!==(u=d[2].pwa_close()+"")&&L(v,u)},i(d){m||(d&&F(()=>{m&&(l||(l=A(t,B,{duration:1e3,y:200},!0)),l.run(1))}),m=!0)},o(d){d&&(l||(l=A(t,B,{duration:1e3,y:200},!1)),l.run(0)),m=!1},d(d){d&&g(t),a&&a.d(),d&&l&&l.end(),_=!1,w()}}}function z(n){let t,e=n[2].pwa_reload()+"",s,o,f;return{c(){t=R("button"),s=S(e),this.h()},l(r){t=k(r,"BUTTON",{class:!0});var i=b(t);s=W(i,e),i.forEach(g),this.h()},h(){y(t,"class","svelte-1jkg08h")},m(r,i){N(r,t,i),h(t,s),o||(f=G(t,"click",n[6]),o=!0)},p(r,i){i&4&&e!==(e=r[2].pwa_reload()+"")&&L(s,e)},d(r){r&&g(t),o=!1,f()}}}function x(n){let t,e=n[1]&&q(n);return{c(){e&&e.c(),t=U()},l(s){e&&e.l(s),t=U()},m(s,o){e&&e.m(s,o),N(s,t,o)},p(s,[o]){s[1]?e?(e.p(s,o),o&2&&E(e,1)):(e=q(s),e.c(),E(e,1),e.m(t.parentNode,t)):e&&(K(),I(e,1,1,()=>{e=null}),Q())},i(s){E(e)},o(s){I(e)},d(s){s&&g(t),e&&e.d(s)}}}function ee(n,t,e){let s,o,f;T(n,X,l=>e(2,f=l));const{needRefresh:r,updateServiceWorker:i,offlineReady:c}=$({onRegistered(l){console.log(`SW Registered: ${l}`)},onRegisterError(l){console.log("SW registration error",l)}});T(n,r,l=>e(0,o=l));const u=()=>{c.set(!1),r.set(!1)},v=()=>i(!0);return n.$$.update=()=>{n.$$.dirty&1&&e(1,s=o)},[o,s,f,r,i,u,v]}class re extends H{constructor(t){super(),J(this,t,ee,x,M,{})}}export{re as default};
//# sourceMappingURL=ReloadPrompt.17fffdd8.js.map
