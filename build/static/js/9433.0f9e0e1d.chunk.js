/*! For license information please see 9433.0f9e0e1d.chunk.js.LICENSE.txt */
(self.webpackChunkxchain=self.webpackChunkxchain||[]).push([[9433],{34838:(e,a,t)=>{"use strict";t.d(a,{A:()=>h});const i="style_grid__7YjmM",s={wrapper:"style_wrapper__LfVr1",media:"style_media__yMHq8",main_price:"style_main_price__Z7Q1y",main_btn:"style_main_btn__6t6F4"};var r=t(3550),c=t(35475),d=t(88102),o=t(23372),l=t(25264),n=t(12784),p=t(60446),m=t.n(p),u=t(83642),f=t(70579);const b=e=>{let{item:a,isPrivate:t,index:i}=e;const{title:p,price:b,image:v,author:h,qty:y,available:x,hot:g,likes:w,isLiked:k}=a,{openBidModal:j}=(0,u.pZ)();return(0,f.jsx)(n.A,{index:i,children:(0,f.jsxs)("div",{className:"".concat(s.wrapper," border-hover bg-primary"),children:[(0,f.jsxs)("div",{className:"author d-flex align-items-center g-10",children:[(0,f.jsx)(o.A,{src:h.avatar,alt:h.nickname,size:"xs",isVerified:h.isVerified}),(0,f.jsxs)(c.k2,{className:"text-sm text-bold text-light link-hover link-hover--invert",to:"/author",style:{pointerEvents:t?"none":"auto"},children:["@",h.nickname]})]}),(0,f.jsx)("div",{className:"".concat(s.media," square border-10"),children:(0,f.jsx)(r.A,{src:v,alt:p})}),(0,f.jsxs)("div",{className:s.main,children:[(0,f.jsxs)("div",{className:"d-flex align-items-center justify-content-between g-10",children:[(0,f.jsx)(c.k2,{className:"h6 text-overflow link-hover",to:"/explore/item",children:p}),(0,f.jsx)("button",{"aria-label":"Menu",children:(0,f.jsx)("i",{className:"icon icon-ellipsis"})})]}),(0,f.jsxs)("div",{className:"".concat(s.main_price," text-sm text-bold"),children:[(0,f.jsxs)("div",{className:"d-flex g-10",children:[(0,f.jsxs)("span",{children:[b," ETH"]}),(0,f.jsxs)("span",{className:"text-light",children:[x,"/",y]})]}),!t&&(0,f.jsx)(d.Ay,{date:m()(g).valueOf(),renderer:e=>{let{days:a,hours:t,minutes:i}=e;return(0,f.jsxs)("span",{className:"text-sm text-light",children:["\ud83d\udd25 ",a,"d ",t,"h ",i,"m"]})}})]}),(0,f.jsxs)("div",{className:"d-flex justify-content-between",children:[(0,f.jsx)("button",{className:"".concat(s.main_btn," text-accent text-sm link-hover link-hover--invert"),onClick:j,children:t?"Buy now":"Place a bid"}),(0,f.jsx)(l.A,{count:w,isLiked:k})]})]})]})})};var v=t(11285);const h=e=>{let{variant:a,items:t=v.A,isPrivate:s=!1,className:r}=e;const c="preview"===a?t.slice(0,8):t;return(0,f.jsx)("div",{className:"".concat(i," ").concat(r||""," items-grid"),id:"items",children:c.map(((e,a)=>(0,f.jsx)(b,{item:e,index:a,isPrivate:s},e.id)))})}},3550:(e,a,t)=>{"use strict";t.d(a,{A:()=>r});var i=t(9634),s=(t(60608),t(81580),t(70579));const r=e=>{let{src:a,alt:t,effect:r="blur",className:c,...d}=e;return(0,s.jsx)(i.LazyLoadImage,{src:a,alt:t,effect:r,wrapperClassName:"".concat(c||""," lazy-image"),...d})}},29041:(e,a,t)=>{"use strict";t.d(a,{A:()=>r});const i="style_header__tGZyl";var s=t(70579);const r=e=>{let{title:a,children:t}=e;return(0,s.jsxs)("div",{className:i,children:[(0,s.jsx)("h3",{children:a}),t]})}},12784:(e,a,t)=>{"use strict";t.d(a,{A:()=>c});var i=t(22654),s=t(65246),r=t(70579);const c=e=>{let{children:a,index:t=1,className:c,type:d="slide",delay:o,...l}=e;const[n,p]=(0,s.Wx)({threshold:.2,triggerOnce:!0}),m={config:{duration:300,mass:1,tension:300,friction:30},delay:l.delay?l.delay:100*t},u={slide:(0,i.zh)({from:{transform:"translateY(40px)",opacity:0},to:{transform:p?"translateY(0px)":"translateY(40px)",opacity:p?1:0},...m,...l}),fade:(0,i.zh)({from:{opacity:0},to:{opacity:p?1:0},...m,...l}),grow:(0,i.zh)({from:{transform:"scale(0.4)"},to:{transform:p?"scale(1)":"scale(0.4)"},...m,...l})};return(0,r.jsx)(i.CS.div,{className:c||"",style:u[d],ref:n,children:a})}},11285:(e,a,t)=>{"use strict";t.d(a,{A:()=>$});var i=t(60446),s=t.n(i),r=t(19702),c=t(28951),d=t(87092),o=t(13285),l=t(92186),n=t(71707),p=t(28888),m=t(26441),u=t(56718),f=t(58),b=t(21157),v=t(36760),h=t(26293),y=t(33864),x=t(73771),g=t(16006),w=t(30849),k=t(10212),j=t(63911),N=t(47362),V=t(2925),q=t(42923),_=t(8680),A=t(43637);const z=t.p+"static/media/avatar1.90d71b0d2c8add95299e.webp",C=t.p+"static/media/avatar2.77605600a6df37ea19b0.webp",L=t.p+"static/media/avatar3.e0e398041b4256b949e9.webp",S=t.p+"static/media/avatar4.e0a2cc4231271d0a003d.webp",P=t.p+"static/media/avatar5.7aabd1378c18cf4e1cf1.webp",O=t.p+"static/media/avatar6.471f8c4c161f24c296b4.webp",E=t.p+"static/media/avatar7.9c55250117e7fd75f2a1.webp",M=t.p+"static/media/avatar8.4f2a10529ff2cf8c8009.webp",T=t.p+"static/media/avatar9.81b2ed8ddab197018fcd.webp",G=t.p+"static/media/avatar10.a658264fc78022d1e388.webp",Y=t.p+"static/media/avatar11.0f5e6a90df8425fea92b.webp",Z=t.p+"static/media/avatar12.b2b0da0a041ab9fbfa89.webp",B=t.p+"static/media/avatar13.95fa01991a9a720afbff.webp",D=t.p+"static/media/avatar14.5975a6dac1d42bb72a5b.webp",I=t.p+"static/media/avatar15.1eb0960972ebbb9255a8.webp",H=t.p+"static/media/avatar16.5c0f917199f1540ff485.webp",U=t.p+"static/media/avatar17.0b47b2a00745c148efbe.webp",W=t.p+"static/media/avatar18.c320c79914f2d04a23c9.webp",F=t.p+"static/media/avatar19.a0ffa2a236feaa4d8516.webp",Q=t.p+"static/media/avatar20.e89102012a50e6e2921c.webp",R=t.p+"static/media/avatar21.fff3f3b56b170cd71bc8.webp",J=t.p+"static/media/avatar22.a0c506a08c3bf8242ad6.webp",K=t.p+"static/media/avatar23.285074975b7167978f58.webp",X=t.p+"static/media/avatar24.e634811b107680f6c363.webp",$=[{id:"item-1",author:{nickname:"narandro",avatar:z,isVerified:!0},image:r,title:"Colorful 3D object",price:.08,qty:1,available:1,likes:220,hot:s()().add(1,"days"),categories:["art","domain","collectibles"],statuses:["offer","auction"],type:"video"},{id:"item-2",author:{nickname:"navekita",avatar:C,isVerified:!0},image:c,title:"Infinite figure",price:1.1,qty:1,available:1,likes:34,hot:s()().add({days:1,hours:12}),categories:["music","sports","collectibles"],statuses:["new"],type:"img"},{id:"item-3",author:{nickname:"gayoren",avatar:L,isVerified:!1},image:d,title:"Pixel art",price:.114,qty:1,available:1,likes:1124,hot:s()().add(12,"days"),categories:["photo"],statuses:["new","now"],type:"img"},{id:"item-4",author:{nickname:"emarwi",avatar:S,isVerified:!0},image:o,title:"The image of a man",price:19.9,qty:2,available:1,likes:2358,hot:s()().add(26,"days"),categories:["photo","utility"],statuses:["offer","auction"],type:"3d"},{id:"item-5",author:{nickname:"zikez",avatar:P,isVerified:!1},image:l,title:"Bananaaa",price:1.88,qty:3,available:1,likes:168,hot:s()().add({days:20,hours:10}),categories:["trading","virtual","art"],statuses:["offer","auction"],type:"img"},{id:"item-6",author:{nickname:"yokoooo",avatar:O,isVerified:!0},image:n,title:"Pixel art",price:1.489,qty:1,available:1,likes:380,hot:s()().add({days:7,hours:3}),categories:["domain","sports","art"],statuses:["new","now"],type:"3d"},{id:"item-7",author:{nickname:"judadz",avatar:E,isVerified:!0},image:p,title:"Colorful 3D object",price:.08,qty:1,available:1,likes:220,hot:s()().add({days:28,hours:12,minutes:30}),categories:["art","domain","collectibles"],statuses:["offer","auction","new"],type:"video"},{id:"item-8",author:{nickname:"poldommmyrol",avatar:M,isVerified:!1},image:m,title:"Infinite figure",price:1.1,qty:1,available:1,likes:34,hot:s()().add({days:1,hours:12}),categories:["music","sports","virtual"],statuses:["new"],type:"img"},{id:"item-9",author:{nickname:"hollywood",avatar:T,isVerified:!0},image:u,title:"Outta space",price:.114,qty:1,available:1,likes:1124,hot:s()().add(12,"days"),categories:["domain"],statuses:["new","now"],type:"3d"},{id:"item-10",author:{nickname:"voltage220",avatar:G,isVerified:!0},image:f,title:"Responsibility",price:19.9,qty:2,available:1,likes:2358,hot:s()().add(26,"days"),categories:["photo","utility"],statuses:["offer","auction"],type:"img"},{id:"item-11",author:{nickname:"soulhunter",avatar:Y,isVerified:!1},image:b,title:"Mother Earth",price:1.88,qty:3,available:1,likes:777,hot:s()().add({days:20,hours:10}),categories:["music","virtual","art"],statuses:["offer","auction"],type:"video"},{id:"item-12",author:{nickname:"layla",avatar:Z,isVerified:!1},image:v,title:"Daydreamin",price:1.489,qty:1,available:1,likes:380,hot:s()().add({days:7,hours:3}),categories:["domain","sports","art"],statuses:["offer","now"],type:"3d"},{id:"item-13",author:{nickname:"peek-a-boo",avatar:B,isVerified:!0},image:h,title:"Think pink",price:1.49,qty:1,available:1,likes:921,hot:s()().add({days:28,hours:12,minutes:30}),categories:["virtual","domain","music"],statuses:["offer","auction","new"],type:"img"},{id:"item-14",author:{nickname:"cervezachille",avatar:D,isVerified:!1},image:y,title:"Alien blood",price:1.1,qty:1,available:1,likes:9784,hot:s()().add({days:1,hours:12}),categories:["music","sports","domain"],statuses:["now"],type:"3d"},{id:"item-15",author:{nickname:"bigfoot",avatar:I,isVerified:!0},image:x,title:"Underwater",price:.35,qty:1,available:1,likes:3784,hot:s()().add(12,"days"),categories:["music"],statuses:["offer"],type:"img"},{id:"item-16",author:{nickname:"sk8erboi",avatar:H,isVerified:!0},image:g,title:"Golden Age",price:7.04,qty:2,available:1,likes:201,hot:s()().add(2,"days"),categories:["sports","collectibles","art"],statuses:["new","auction"],type:"video"},{id:"item-17",author:{nickname:"diamondhead",avatar:U,isVerified:!1},image:w,title:"Prismatic",price:10.1,qty:1,available:1,likes:310,hot:s()().add({days:5,hours:8}),categories:["sports","virtual"],statuses:["offer","auction"],type:"3d"},{id:"item-18",author:{nickname:"wellington",avatar:W,isVerified:!1},image:k,title:"Tranquility",price:.1,qty:1,available:1,likes:791,hot:s()().add({days:1,hours:12}),categories:["art"],statuses:["now","auction"],type:"img"},{id:"item-19",author:{nickname:"iamwhoiam",avatar:F,isVerified:!0},image:j,title:"Labyrinth",price:1.82,qty:1,available:1,likes:347,hot:s()().add(12,"days"),categories:["music","photo"],statuses:["new","auction"],type:"3d"},{id:"item-20",author:{nickname:"tellmemore",avatar:Q,isVerified:!1},image:N,title:"Octopus Garden",price:.1,qty:1,available:1,likes:123,hot:s()().add(26,"days"),categories:["music","virtual","collectibles"],statuses:["offer","new"],type:"video"},{id:"item-21",author:{nickname:"savage",avatar:R,isVerified:!1},image:V,title:"Cooldown",price:10.11,qty:1,available:1,likes:5912,hot:s()().add(1,"days"),categories:["music","sports","art"],statuses:["now"],type:"img"},{id:"item-22",author:{nickname:"hippieeesoul",avatar:J,isVerified:!0},image:q,title:"Crystal Waterfall",price:2.84,qty:4,available:2,likes:98710,hot:s()().add(17,"days"),categories:["collectibles","virtual","art"],statuses:["offer","auction"],type:"video"},{id:"item-23",author:{nickname:"crybaby",avatar:K,isVerified:!0},image:_,title:"Sahara",price:7.18,qty:1,available:1,likes:1468,hot:s()().add(3,"days"),categories:["sports","photo"],statuses:["new","auction"],type:"3d"},{id:"item-24",author:{nickname:"tripplethreat",avatar:X,isVerified:!0},image:A,title:"The Great Escape",price:.1,qty:1,available:1,likes:666,hot:s()().add(10,"hours"),categories:["music","sports","photo"],statuses:["offer","auction"],type:"img"}]},10629:(e,a,t)=>{"use strict";t.r(a),t.d(a,{default:()=>d});var i=t(29041),s=t(74158),r=t(34838),c=t(70579);const d=()=>(0,c.jsx)("section",{children:(0,c.jsxs)("div",{className:"container",children:[(0,c.jsx)(i.A,{title:"Live auctions \ud83d\udca5",children:(0,c.jsx)(s.A,{href:"/explore",text:"Explore more"})}),(0,c.jsx)(r.A,{variant:"preview"})]})})},23372:(e,a,t)=>{"use strict";t.d(a,{A:()=>n});var i=t(3550),s=t(98139),r=t.n(s),c=t(65043);const d=t.p+"static/media/verified.d712db63e7c4123b870c80f47dbeaf91.svg";var o=t(70579);const l=e=>{let{src:a,alt:t,size:s,isVerified:c,className:l}=e;return(0,o.jsxs)("div",{className:r()("avatar-wrapper",s,l),children:[(0,o.jsx)(i.A,{className:"avatar",src:a,alt:t}),c&&(0,o.jsx)(i.A,{className:"verified",src:d,alt:"verified",effect:"opacity"})]})},n=(0,c.memo)(l)},25264:(e,a,t)=>{"use strict";t.d(a,{A:()=>l});var i=t(65043),s=t(98139),r=t.n(s),c=t(76047),d=t(70579);const o=e=>{let{count:a,...t}=e;const[s,o]=(0,i.useState)(t.isLiked),[l,n]=(0,i.useState)(a);return(0,d.jsxs)("button",{className:"like-button ".concat(t.className||""),onClick:()=>{o(!s),n(s?l-1:l+1)},"aria-label":s?"Unlike":"Like",children:[(0,d.jsxs)("span",{className:"wrapper",children:[(0,d.jsx)("i",{className:"icon icon-heart-o"}),(0,d.jsx)("i",{className:r()("icon icon-heart",{visible:s})})]}),(0,c.ZV)(l)]})},l=(0,i.memo)(o)},74158:(e,a,t)=>{"use strict";t.d(a,{A:()=>d});var i=t(35475),s=t(65043),r=t(70579);const c=e=>{let{href:a,text:t}=e;return(0,r.jsxs)(i.k2,{className:"link-arrow",to:a,children:[t," ",(0,r.jsx)("i",{className:"icon icon-arrow-right text-accent"})]})},d=(0,s.memo)(c)},26293:(e,a,t)=>{"use strict";e.exports=t.p+"static/media/1.6e5fa1a2c034ae5e5e95.webp"},42923:(e,a,t)=>{"use strict";e.exports=t.p+"static/media/10.f9b0afeb6a0b0a0aa4aa.webp"},8680:(e,a,t)=>{"use strict";e.exports=t.p+"static/media/11.bb024787d9559601e65d.webp"},43637:(e,a,t)=>{"use strict";e.exports=t.p+"static/media/12.e520a6491ca96bb264a4.webp"},33864:(e,a,t)=>{"use strict";e.exports=t.p+"static/media/2.3d4a24322ae8509c215e.webp"},73771:(e,a,t)=>{"use strict";e.exports=t.p+"static/media/3.e34ab90c407c6ef0f965.webp"},16006:(e,a,t)=>{"use strict";e.exports=t.p+"static/media/4.8ddd5fabef93a2d8f5e9.webp"},30849:(e,a,t)=>{"use strict";e.exports=t.p+"static/media/5.01ccbd21dd987861d84a.webp"},10212:(e,a,t)=>{"use strict";e.exports=t.p+"static/media/6.5b6cd91324e930c0344f.webp"},63911:(e,a,t)=>{"use strict";e.exports=t.p+"static/media/7.1e560ebdc6ae47e4caa7.webp"},47362:(e,a,t)=>{"use strict";e.exports=t.p+"static/media/8.c1b5e289ac98cfa24112.webp"},2925:(e,a,t)=>{"use strict";e.exports=t.p+"static/media/9.4dc1eaf11c370897a99e.webp"},19702:(e,a,t)=>{"use strict";e.exports=t.p+"static/media/1.07f8fb56d7e9262d6751.webp"},58:(e,a,t)=>{"use strict";e.exports=t.p+"static/media/10.dde8f071e1fbd0a58929.webp"},21157:(e,a,t)=>{"use strict";e.exports=t.p+"static/media/11.e7f16c21c28ed28c6d2c.webp"},36760:(e,a,t)=>{"use strict";e.exports=t.p+"static/media/12.54609e286e5e1dccd4ec.webp"},28951:(e,a,t)=>{"use strict";e.exports=t.p+"static/media/2.c5ceedb196823c3f55a5.webp"},87092:(e,a,t)=>{"use strict";e.exports=t.p+"static/media/3.b9e115881c9a74102987.webp"},13285:(e,a,t)=>{"use strict";e.exports=t.p+"static/media/4.60f8ea08ee30f66b57b7.webp"},92186:(e,a,t)=>{"use strict";e.exports=t.p+"static/media/5.a39afd7db8497fda3c16.webp"},71707:(e,a,t)=>{"use strict";e.exports=t.p+"static/media/6.f3da9ed720bda8deed80.webp"},28888:(e,a,t)=>{"use strict";e.exports=t.p+"static/media/7.b57466b9955f41146ebb.webp"},26441:(e,a,t)=>{"use strict";e.exports=t.p+"static/media/8.0fcd1ab048910cbe288a.webp"},56718:(e,a,t)=>{"use strict";e.exports=t.p+"static/media/9.826dbd1dd34bfcf2be66.webp"},98139:(e,a)=>{var t;!function(){"use strict";var i={}.hasOwnProperty;function s(){for(var e="",a=0;a<arguments.length;a++){var t=arguments[a];t&&(e=c(e,r(t)))}return e}function r(e){if("string"===typeof e||"number"===typeof e)return e;if("object"!==typeof e)return"";if(Array.isArray(e))return s.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var a="";for(var t in e)i.call(e,t)&&e[t]&&(a=c(a,t));return a}function c(e,a){return a?e?e+" "+a:e+a:e}e.exports?(s.default=s,e.exports=s):void 0===(t=function(){return s}.apply(a,[]))||(e.exports=t)}()}}]);
//# sourceMappingURL=9433.0f9e0e1d.chunk.js.map