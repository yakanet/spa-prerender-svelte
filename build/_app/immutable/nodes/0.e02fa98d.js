import{_ as v}from"../chunks/preload-helper.cf010ec4.js";import{l as D,a as E}from"../chunks/i18n-util.c37db97b.js";import{s as $,c as j,u as M,g as N,d as O,n as i}from"../chunks/scheduler.78622ee8.js";import{S as V,i as H,H as R,e as b,g as L,s as I,x as B,y as F,h as A,z,f as _,c as C,j as q,A as P,a as g,d as k,t as T,r as U,u as G,v as J,w as K}from"../chunks/index.369e9b81.js";import{h as Q,o as W}from"../chunks/navigation.2c9621ed.js";import{s as X}from"../chunks/i18n-svelte.eeefab73.js";const Y=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global,Z=t=>({}),x={en:()=>v(()=>import("../chunks/index.5827e914.js"),[]),fr:()=>v(()=>import("../chunks/index.bd11ad6b.js"),[])},tt=(t,e)=>E[t]={...E[t],...e},et=async t=>(await x[t]()).default,nt=async t=>{tt(t,await et(t)),at(t)},at=t=>void(D[t]=Z()),ot=!0,st="always",rt=async({data:t})=>(await nt(t.locale),{locale:t.locale}),wt=Object.freeze(Object.defineProperty({__proto__:null,load:rt,prerender:ot,trailingSlash:st},Symbol.toStringTag,{value:"Module"})),S={pwaInDevEnvironment:!1,webManifest:{href:"/manifest.webmanifest",useCredentials:!1,linkTag:'<link rel="manifest" href="/manifest.webmanifest">'}},{document:w}=Y;function lt(t){t[4]=t[5].default}function it(t){return{c:i,l:i,m:i,i,o:i,d:i}}function ct(t){lt(t);let e,s;return e=new t[4]({}),{c(){U(e.$$.fragment)},l(n){G(e.$$.fragment,n)},m(n,p){J(e,n,p),s=!0},i(n){s||(k(e.$$.fragment,n),s=!0)},o(n){T(e.$$.fragment,n),s=!1},d(n){K(e,n)}}}function mt(t){return{c:i,l:i,m:i,i,o:i,d:i}}function dt(t){let e,s,n,p=`const _mtm = (window._mtm = window._mtm || []);\r
    _mtm.push({ "mtm.startTime": new Date().getTime(), event: "mtm.Start" });\r
    (function () {\r
      var d = document,\r
        g = d.createElement("script"),\r
        s = d.getElementsByTagName("script")[0];\r
      g.async = true;\r
      g.src =\r
        "https://cdn.matomo.cloud/prerenderbroutindev.matomo.cloud/container_IUHbbhB5.js";\r
      s.parentNode.insertBefore(g, s);\r
    })();`,u,m,c,d,f;const y=t[3].default,r=j(y,t,t[2],null);let l={ctx:t,current:null,token:null,hasCatch:!1,pending:mt,then:ct,catch:it,value:5,blocks:[,,,]};return Q(v(()=>import("../chunks/ReloadPrompt.d3100287.js"),["_app/immutable/chunks/ReloadPrompt.d3100287.js","_app/immutable/chunks/scheduler.78622ee8.js","_app/immutable/chunks/index.369e9b81.js","_app/immutable/chunks/i18n-svelte.eeefab73.js","_app/immutable/chunks/index.a1f33fe4.js","_app/immutable/chunks/i18n-util.c37db97b.js","_app/immutable/chunks/index.62a9e66c.js","_app/immutable/chunks/preload-helper.cf010ec4.js","_app/immutable/assets/ReloadPrompt.0a0f577e.css"]),l),{c(){e=new R(!1),s=b(),n=L("script"),n.textContent=p,u=I(),m=L("main"),r&&r.c(),c=I(),d=b(),l.block.c(),this.h()},l(a){const o=B("svelte-1dlj91l",w.head);e=F(o,!1),s=b(),n=A(o,"SCRIPT",{"data-svelte-h":!0}),z(n)!=="svelte-n1m6o0"&&(n.textContent=p),o.forEach(_),u=C(a),m=A(a,"MAIN",{});var h=q(m);r&&r.l(h),h.forEach(_),c=C(a),d=b(),l.block.l(a),this.h()},h(){e.a=s},m(a,o){e.m(t[0],w.head),P(w.head,s),P(w.head,n),g(a,u,o),g(a,m,o),r&&r.m(m,null),g(a,c,o),g(a,d,o),l.block.m(a,l.anchor=o),l.mount=()=>d.parentNode,l.anchor=d,f=!0},p(a,[o]){t=a,(!f||o&1)&&e.p(t[0]),r&&r.p&&(!f||o&4)&&M(r,y,t,t[2],f?O(y,t[2],o,null):N(t[2]),null)},i(a){f||(k(r,a),k(l.block),f=!0)},o(a){T(r,a);for(let o=0;o<3;o+=1){const h=l.blocks[o];T(h)}f=!1},d(a){a&&(e.d(),_(u),_(m),_(c),_(d)),_(s),_(n),r&&r.d(a),l.block.d(a),l.token=null,l=null}}}function _t(t,e,s){let n,{$$slots:p={},$$scope:u}=e;W(c=>{if(document.startViewTransition)return new Promise(d=>{document.startViewTransition(async()=>{d(),await c.complete})})});let{data:m}=e;return X(m.locale),t.$$set=c=>{"data"in c&&s(1,m=c.data),"$$scope"in c&&s(2,u=c.$$scope)},s(0,n=S?S.webManifest.linkTag:""),[n,m,u,p]}class yt extends V{constructor(e){super(),H(this,e,_t,dt,$,{data:1})}}export{yt as component,wt as universal};
//# sourceMappingURL=0.e02fa98d.js.map
