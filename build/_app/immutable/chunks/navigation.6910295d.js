import{m as b,p as m,q as u,v as g}from"./scheduler.10a3e5d2.js";import{p as v,t as x,b as w,d as j}from"./index.dfc04267.js";import{j as p}from"./singletons.dba8a53e.js";function N(e,t){const n=t.token={};function c(r,s,_,d){if(t.token!==n)return;t.resolved=d;let l=t.ctx;_!==void 0&&(l=l.slice(),l[_]=d);const a=r&&(t.current=r)(l);let k=!1;t.block&&(t.blocks?t.blocks.forEach((o,h)=>{h!==s&&o&&(v(),x(o,1,1,()=>{t.blocks[h]===o&&(t.blocks[h]=null)}),w())}):t.block.d(1),a.c(),j(a,1),a.m(t.mount(),t.anchor),k=!0),t.block=a,t.blocks&&(t.blocks[s]=a),k&&g()}if(b(e)){const r=m();if(e.then(s=>{u(r),c(t.then,1,t.value,s),u(null)},s=>{if(u(r),c(t.catch,2,t.error,s),u(null),!t.hasCatch)throw s}),t.current!==t.pending)return c(t.pending,0),!0}else{if(t.current!==t.then)return c(t.then,1,t.value,e),!0;t.resolved=e}}function z(e,t,n){const c=t.slice(),{resolved:r}=e;e.current===e.then&&(c[e.value]=r),e.current===e.catch&&(c[e.error]=r),e.block.p(c,n)}const A=p("goto"),B=p("on_navigate");export{A as g,N as h,B as o,z as u};
//# sourceMappingURL=navigation.6910295d.js.map