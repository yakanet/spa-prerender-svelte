if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,l)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(s[r])return;let a={};const u=e=>i(e,r),o={module:{uri:r},exports:a,require:u};s[r]=Promise.all(n.map((e=>o[e]||u(e)))).then((e=>(l(...e),a)))}}define(["./workbox-4de3aa5f"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"_app/immutable/assets/_page.69ee3af6.css",revision:null},{url:"_app/immutable/assets/_page.c28268fd.css",revision:null},{url:"_app/immutable/assets/3.c28268fd.css",revision:null},{url:"_app/immutable/assets/4.69ee3af6.css",revision:null},{url:"_app/immutable/assets/ReloadPrompt.0a0f577e.css",revision:null},{url:"_app/immutable/chunks/control.f5b05b5f.js",revision:null},{url:"_app/immutable/chunks/i18n-svelte.eeefab73.js",revision:null},{url:"_app/immutable/chunks/i18n-util.c37db97b.js",revision:null},{url:"_app/immutable/chunks/index.09225a63.js",revision:null},{url:"_app/immutable/chunks/index.5827e914.js",revision:null},{url:"_app/immutable/chunks/index.62a9e66c.js",revision:null},{url:"_app/immutable/chunks/index.a1f33fe4.js",revision:null},{url:"_app/immutable/chunks/index.bd11ad6b.js",revision:null},{url:"_app/immutable/chunks/navigation.27c9c271.js",revision:null},{url:"_app/immutable/chunks/preload-helper.cf010ec4.js",revision:null},{url:"_app/immutable/chunks/ReloadPrompt.17fffdd8.js",revision:null},{url:"_app/immutable/chunks/restaurants.1bca6b8a.js",revision:null},{url:"_app/immutable/chunks/scheduler.78622ee8.js",revision:null},{url:"_app/immutable/chunks/singletons.d2ab8be3.js",revision:null},{url:"_app/immutable/chunks/workbox-window.prod.es5.a7b12eab.js",revision:null},{url:"_app/immutable/entry/app.60284cb7.js",revision:null},{url:"_app/immutable/entry/start.f2141f51.js",revision:null},{url:"_app/immutable/nodes/0.3f575205.js",revision:null},{url:"_app/immutable/nodes/1.317f6e31.js",revision:null},{url:"_app/immutable/nodes/2.96455e1b.js",revision:null},{url:"_app/immutable/nodes/3.ae19b2b4.js",revision:null},{url:"_app/immutable/nodes/4.d4a7dfb6.js",revision:null},{url:"favicon.png",revision:"3a387408ecc6cc283f724b39ca5fffb4"},{url:"icons/icon-192x192.png",revision:"47d86c419005da608823c5431df52efa"},{url:"icons/icon-256x256.png",revision:"a5c16130358c09e3f60c45974e26c8d1"},{url:"icons/icon-384x384.png",revision:"c47506e7b9b56bcddffe5131cf87b3e8"},{url:"icons/icon-512x512.png",revision:"cd212c7def2a1d9dd8ba3682878e6657"},{url:"en/",revision:"13e4f68778d77ed44cc57d32661652f8"},{url:"en/restaurants/1/",revision:"6ba7f9be0b9e85f6306e59f6937b3b7a"},{url:"en/restaurants/2/",revision:"629befbdbf922d1ed8759a325da21da4"},{url:"en/restaurants/3/",revision:"eedf68f42315f5299ab3c2de01ce5b8d"},{url:"en/restaurants/4/",revision:"60d30779da7cd3a3c638350e820ba06c"},{url:"fr/",revision:"561c631b50bbe52f291243371d684d96"},{url:"fr/restaurants/1/",revision:"8630cadc30f985ca1e1da42c9f9260f0"},{url:"fr/restaurants/2/",revision:"457e32e77fa20e1e2f62264ad93d58d1"},{url:"fr/restaurants/3/",revision:"64470506f06367a6ef73acc4de3b9413"},{url:"fr/restaurants/4/",revision:"b2bc5741ae6083552d886ffe69a0fb99"},{url:"/",revision:"6a707e937f7c7c1e1ac279bce9d6a5f2"},{url:"manifest.webmanifest",revision:"1bd19984995f537ce26aaaed395e3bb9"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("/")))}));
//# sourceMappingURL=sw.js.map
