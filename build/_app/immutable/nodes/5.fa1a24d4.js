import{s as j,n as J,e as q}from"../chunks/scheduler.32f487cd.js";import{S as x,i as A,g as d,m as v,s as N,h as E,j as S,n as k,f as l,c as O,k as P,a as c,x as b,o as g}from"../chunks/index.6c161935.js";import{l as C}from"../chunks/i18n-svelte.729f2bb0.js";function H(i){let s,r=i[0].restaurant.name+"",o,f,t,m=JSON.stringify(i[0].restaurant,null,2)+"",u,h,n,p,_;return{c(){s=d("h1"),o=v(r),f=N(),t=d("pre"),u=v(m),h=N(),n=d("a"),p=v("Back"),this.h()},l(a){s=E(a,"H1",{});var e=S(s);o=k(e,r),e.forEach(l),f=O(a),t=E(a,"PRE",{});var y=S(t);u=k(y,m),y.forEach(l),h=O(a),n=E(a,"A",{href:!0});var B=S(n);p=k(B,"Back"),B.forEach(l),this.h()},h(){P(n,"href",_="/"+i[1])},m(a,e){c(a,s,e),b(s,o),c(a,f,e),c(a,t,e),b(t,u),c(a,h,e),c(a,n,e),b(n,p)},p(a,[e]){e&1&&r!==(r=a[0].restaurant.name+"")&&g(o,r),e&1&&m!==(m=JSON.stringify(a[0].restaurant,null,2)+"")&&g(u,m),e&2&&_!==(_="/"+a[1])&&P(n,"href",_)},i:J,o:J,d(a){a&&(l(s),l(f),l(t),l(h),l(n))}}}function R(i,s,r){let o;q(i,C,t=>r(1,o=t));let{data:f}=s;return i.$$set=t=>{"data"in t&&r(0,f=t.data)},[f,o]}class F extends x{constructor(s){super(),A(this,s,R,H,j,{data:0})}}export{F as component};
//# sourceMappingURL=5.fa1a24d4.js.map
