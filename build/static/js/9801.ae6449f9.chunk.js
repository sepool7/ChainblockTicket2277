"use strict";(self.webpackChunkxchain=self.webpackChunkxchain||[]).push([[9801],{12784:(e,t,n)=>{n.d(t,{A:()=>a});var i=n(22654),r=n(65246),s=n(70579);const a=e=>{let{children:t,index:n=1,className:a,type:o="slide",delay:c,...l}=e;const[d,u]=(0,r.Wx)({threshold:.2,triggerOnce:!0}),f={config:{duration:300,mass:1,tension:300,friction:30},delay:l.delay?l.delay:100*n},m={slide:(0,i.zh)({from:{transform:"translateY(40px)",opacity:0},to:{transform:u?"translateY(0px)":"translateY(40px)",opacity:u?1:0},...f,...l}),fade:(0,i.zh)({from:{opacity:0},to:{opacity:u?1:0},...f,...l}),grow:(0,i.zh)({from:{transform:"scale(0.4)"},to:{transform:u?"scale(1)":"scale(0.4)"},...f,...l})};return(0,s.jsx)(i.CS.div,{className:a||"",style:m[o],ref:d,children:t})}},78042:(e,t,n)=>{n.r(t),n.d(t,{default:()=>q});var i=n(65043),r=n(60429),s=n(64421);const a="style_container__C6P0q",o="style_media__Uz5VA",c="style_media_img__ObIzb",l="style_media_wrapper__Nv8p6",d="style_wave__RSctH",u="style_ring__OUVBX",f="style_ball__nKeCm",m="style_main__t-SXl",h="style_wrapper__jB01l",y="style_main_img__6gePx",p="style_main_emoji__RYxBd",v="style_main_text__qzJjr",b="style_main_divider__jlwjS";var _=n(3550),g=n(12784),w=n(15077);const x=n.p+"static/media/about_main.1f067d1dc7e6f1f51da3.webp",j=n.p+"static/media/about_secondary.50fcde63090fcb5afc86.webp",A=n.p+"static/media/ball.4222f1c09fd03589a890.webp",N=n.p+"static/media/ring.20cb37b4f52d12060981.webp",z=n.p+"static/media/wave.a9508b11c0a63468916a.webp";var V=n(70579);const k=()=>{const{width:e}=(0,w.A)();return(0,V.jsx)("section",{children:(0,V.jsxs)("div",{className:"".concat(a," container"),children:[(0,V.jsxs)("div",{className:o,children:[(0,V.jsx)(_.A,{className:"".concat(c," border-10"),src:x,alt:"media"}),e>=1024&&(0,V.jsxs)("div",{className:l,children:[(0,V.jsx)("div",{children:(0,V.jsx)(_.A,{className:d,src:z,alt:"wave",effect:"opacity"})}),(0,V.jsx)("div",{children:(0,V.jsx)(_.A,{className:f,src:A,alt:"ball",effect:"opacity"})}),(0,V.jsx)("div",{children:(0,V.jsx)(_.A,{className:u,src:N,alt:"ring",effect:"opacity"})})]})]}),(0,V.jsxs)("div",{className:m,children:[(0,V.jsx)(_.A,{className:"".concat(y," border-10"),src:j,alt:"media"}),(0,V.jsxs)(g.A,{className:h,delay:300,children:[(0,V.jsx)("span",{className:"".concat(p," h3"),children:"\ud83d\udd25\ud83d\udd25\ud83d\udd25"}),(0,V.jsx)("h3",{children:"Who we are?"}),(0,V.jsx)("p",{className:v,children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."}),(0,V.jsx)("span",{className:b})]})]})]})})},R=(0,i.lazy)((()=>Promise.all([n.e(2119),n.e(6260)]).then(n.bind(n,86260)))),C=(0,i.lazy)((()=>n.e(8643).then(n.bind(n,21024)))),S=(0,i.lazy)((()=>Promise.all([n.e(2119),n.e(4939),n.e(9535),n.e(8501)]).then(n.bind(n,18447)))),E=(0,i.lazy)((()=>n.e(5215).then(n.bind(n,71847)))),O=(0,i.lazy)((()=>n.e(2480).then(n.bind(n,96664)))),I=(0,i.lazy)((()=>n.e(7432).then(n.bind(n,39348)))),q=()=>(0,V.jsxs)(V.Fragment,{children:[(0,V.jsx)(r.A,{title:"About Us"}),(0,V.jsx)(s.A,{title:"About Us"}),(0,V.jsxs)("main",{children:[(0,V.jsx)(k,{}),(0,V.jsx)(R,{}),(0,V.jsx)(C,{}),(0,V.jsx)(S,{}),(0,V.jsx)(E,{}),(0,V.jsx)(O,{}),(0,V.jsx)(I,{})]})]})},15077:(e,t,n)=>{n.d(t,{A:()=>c});var i=n(65043);const r=function(e){(0,i.useEffect)(e,[])};const s=function(e){var t=(0,i.useRef)(e);t.current=e,r((function(){return function(){return t.current()}}))};const a=function(e){var t=(0,i.useRef)(0),n=(0,i.useState)(e),r=n[0],a=n[1],o=(0,i.useCallback)((function(e){cancelAnimationFrame(t.current),t.current=requestAnimationFrame((function(){a(e)}))}),[]);return s((function(){cancelAnimationFrame(t.current)})),[r,o]};var o="undefined"!==typeof window;const c=function(e,t){void 0===e&&(e=1/0),void 0===t&&(t=1/0);var n=a({width:o?window.innerWidth:e,height:o?window.innerHeight:t}),r=n[0],s=n[1];return(0,i.useEffect)((function(){if(o){var e=function(){s({width:window.innerWidth,height:window.innerHeight})};return function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];e&&e.addEventListener&&e.addEventListener.apply(e,t)}(window,"resize",e),function(){!function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];e&&e.removeEventListener&&e.removeEventListener.apply(e,t)}(window,"resize",e)}}}),[]),r}},65246:(e,t,n)=>{n.d(t,{Wx:()=>f});var i=n(65043),r=Object.defineProperty,s=(e,t,n)=>(((e,t,n)=>{t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n})(e,"symbol"!==typeof t?t+"":t,n),n),a=new Map,o=new WeakMap,c=0,l=void 0;function d(e){return Object.keys(e).sort().filter((t=>void 0!==e[t])).map((t=>{return"".concat(t,"_").concat("root"===t?(n=e.root)?(o.has(n)||(c+=1,o.set(n,c.toString())),o.get(n)):"0":e[t]);var n})).toString()}function u(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:l;if("undefined"===typeof window.IntersectionObserver&&void 0!==i){const r=e.getBoundingClientRect();return t(i,{isIntersecting:i,target:e,intersectionRatio:"number"===typeof n.threshold?n.threshold:0,time:0,boundingClientRect:r,intersectionRect:r,rootBounds:r}),()=>{}}const{id:r,observer:s,elements:o}=function(e){const t=d(e);let n=a.get(t);if(!n){const i=new Map;let r;const s=new IntersectionObserver((t=>{t.forEach((t=>{var n;const s=t.isIntersecting&&r.some((e=>t.intersectionRatio>=e));e.trackVisibility&&"undefined"===typeof t.isVisible&&(t.isVisible=s),null==(n=i.get(t.target))||n.forEach((e=>{e(s,t)}))}))}),e);r=s.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),n={id:t,observer:s,elements:i},a.set(t,n)}return n}(n),c=o.get(e)||[];return o.has(e)||o.set(e,c),c.push(t),s.observe(e),function(){c.splice(c.indexOf(t),1),0===c.length&&(o.delete(e),s.unobserve(e)),0===o.size&&(s.disconnect(),a.delete(r))}}i.Component;function f(){let{threshold:e,delay:t,trackVisibility:n,rootMargin:r,root:s,triggerOnce:a,skip:o,initialInView:c,fallbackInView:l,onChange:d}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};var f;const[m,h]=i.useState(null),y=i.useRef(),[p,v]=i.useState({inView:!!c,entry:void 0});y.current=d,i.useEffect((()=>{if(o||!m)return;let i;return i=u(m,((e,t)=>{v({inView:e,entry:t}),y.current&&y.current(e,t),t.isIntersecting&&a&&i&&(i(),i=void 0)}),{root:s,rootMargin:r,threshold:e,trackVisibility:n,delay:t},l),()=>{i&&i()}}),[Array.isArray(e)?e.toString():e,m,s,r,a,o,n,l,t]);const b=null==(f=p.entry)?void 0:f.target,_=i.useRef();m||!b||a||o||_.current===b||(_.current=b,v({inView:!!c,entry:void 0}));const g=[h,p.inView,p.entry];return g.ref=g[0],g.inView=g[1],g.entry=g[2],g}}}]);
//# sourceMappingURL=9801.ae6449f9.chunk.js.map