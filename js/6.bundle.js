(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{154:function(e,t,a){},155:function(e,t,a){e.exports=a.p+"assets/images/intro-940-trim.mp4"},156:function(e,t,a){e.exports=a.p+"assets/images/motion-planning.mp4"},157:function(e,t,a){e.exports=a.p+"assets/images/intro-end-frame.jpg"},158:function(e,t,a){e.exports=a.p+"assets/images/setup_pic_1.jpg"},159:function(e,t,a){e.exports=a.p+"assets/images/setup_pic_2.jpg"},160:function(e,t,a){e.exports=a.p+"assets/images/setup_pic_3.jpg"},161:function(e,t,a){},40:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return f}));var n=a(0),l=a.n(n),r=a(4);a(154);function i(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e))&&"[object Arguments]"!==Object.prototype.toString.call(e))return;var a=[],n=!0,l=!1,r=void 0;try{for(var i,c=e[Symbol.iterator]();!(n=(i=c.next()).done)&&(a.push(i.value),!t||a.length!==t);n=!0);}catch(e){l=!0,r=e}finally{try{n||null==c.return||c.return()}finally{if(l)throw r}}return a}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function c(){var e=i(Object(n.useState)(!1),2),t=e[0],a=e[1],c=i(Object(n.useState)(0),2),s=c[0],o=c[1],m=Object(n.useRef)(null),d=i(Object(n.useState)(80),2),p=d[0],u=d[1];function E(){var e=window.scrollY;if(window.scrollY>=0){var t=m.current.style.top||0;m.current.style.top=Math.min(Math.max(parseInt(t)+(s-e),0),p)+"px",o(e)}}return Object(n.useEffect)(()=>{u(document.getElementsByTagName("header")[0].clientHeight)},[p,u]),Object(n.useEffect)(()=>(window.addEventListener("scroll",E,{passive:!0}),()=>{window.removeEventListener("scroll",E)}),[s,t,a,o]),l.a.createElement("div",{style:{top:p},ref:m,className:"page-nav"+(t?" hidden":"")},l.a.createElement("div",{className:"page-nav--container"},l.a.createElement("div",{className:"page-nav-left"},l.a.createElement("div",{className:"product-name"},l.a.createElement(r.b,{to:"/#"},l.a.createElement("h1",{className:"product-name"},"OmniPack"))),l.a.createElement("div",{className:"nav-tabs"},l.a.createElement("div",{className:"tab active"},l.a.createElement(r.b,{to:"#overview"}),l.a.createElement("p",{className:"tab-label"},"Overview")),l.a.createElement("div",{className:"tab ="},l.a.createElement(r.b,{to:"#installation"}),l.a.createElement("p",{className:"tab-label"},"Installation")),l.a.createElement("div",{className:"tab"},l.a.createElement(r.b,{to:"#distributors"}),l.a.createElement("p",{className:"tab-label "},"Distributors")))),l.a.createElement("div",{className:"page-nav-right"},l.a.createElement("div",{className:"demo-button"},"Free demo"))))}a(161);function s(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e))&&"[object Arguments]"!==Object.prototype.toString.call(e))return;var a=[],n=!0,l=!1,r=void 0;try{for(var i,c=e[Symbol.iterator]();!(n=(i=c.next()).done)&&(a.push(i.value),!t||a.length!==t);n=!0);}catch(e){l=!0,r=e}finally{try{n||null==c.return||c.return()}finally{if(l)throw r}}return a}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var o=a(155),m=(a(156),a(78)),d=a(157),p=a(158),u=a(159),E=a(160);function f(){var e=Object(n.useRef)(null),t=s(Object(n.useState)(!1),2),a=t[0],r=t[1],i=s(Object(n.useState)(!1),2),f=i[0],h=i[1],v=s(Object(n.useState)(null),2),g=v[0],w=v[1];function b(){r(!0)}function N(e){w(g===e?null:e)}return Object(n.useEffect)(()=>(e.current.addEventListener("ended",b),document.querySelectorAll("html,body").forEach(e=>{e.style.background="#FFFFFF"}),()=>{e.current.removeEventListener("ended",b)}),[]),l.a.createElement("div",{className:"page-container"},l.a.createElement(c,null),f&&l.a.createElement("div",{className:"presentation"},l.a.createElement("div",{className:"video-frame"},l.a.createElement("div",{className:"close-video",onClick:()=>h(!1)},l.a.createElement("svg",{width:"24",height:"24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},l.a.createElement("path",{d:"M18.36 16.78L13.58 12l4.78-4.78c.44-.43.44-1.15 0-1.58a1.12 1.12 0 00-1.58 0L12 10.42 7.22 5.64a1.12 1.12 0 00-1.91.79c0 .29.1.57.33.8L10.42 12l-4.78 4.78a1.12 1.12 0 000 1.58c.43.44 1.15.44 1.58 0L12 13.58l4.78 4.78c.43.44 1.15.44 1.58 0 .44-.43.44-1.14 0-1.58z",fill:"#8e8e83"}))),l.a.createElement("div",null,l.a.createElement("iframe",{width:"720",height:"415",src:"https://www.youtube.com/embed/tLvODPdzW_8?controls=1&autoplay=0&iv_load_policy=3&modestbranding=1&rel=0&showinfo=0&color=white",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})))),l.a.createElement("section",{className:"opack-intro"},l.a.createElement("div",{className:"video-wrapper"+(a?" end":"")},l.a.createElement("video",{muted:!0,playsInline:!0,preload:"none",ref:e,autoPlay:!0},l.a.createElement("source",{src:o,type:"video/mp4"})),l.a.createElement("img",{src:d,onClick:()=>{e.current.play()}})),l.a.createElement("div",{className:"omnipack-intro-content"},l.a.createElement("h1",{className:"omnipack-main-title"},"Palletize like a Pro."),l.a.createElement("p",{className:"omnipack-main-description"},"Configure your robotic palletizer in 10 minutes. No specific knowledge required. Quickly input new box parameters. Save and switch between more than 100 layouts. Seamlessly connect with other equipment and more."),l.a.createElement("div",{className:"presentation-buttons"},l.a.createElement("div",{className:"youtube-button",onClick:()=>h(!0)},l.a.createElement("div",{className:"svg-icon"},l.a.createElement("svg",{width:"42",height:"42",fill:"none",xmlns:"http://www.w3.org/2000/svg"},l.a.createElement("path",{d:"M27.134 21.763l-9.389 5.672a.885.885 0 01-1.339-.764V15.329a.885.885 0 011.339-.763l9.389 5.671a.893.893 0 010 1.526z",fill:"#8E8E93"}),l.a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M21 4.25C11.752 4.25 4.25 11.752 4.25 21c0 9.248 7.502 16.75 16.75 16.75 9.248 0 16.75-7.502 16.75-16.75 0-9.248-7.502-16.75-16.75-16.75zM6.25 21c0-8.143 6.607-14.75 14.75-14.75S35.75 12.857 35.75 21 29.143 35.75 21 35.75 6.25 29.143 6.25 21z",fill:"#8E8E93"}))),"Watch presentation"),l.a.createElement("div",{className:"buttons-separator"},"|"),l.a.createElement("div",{className:"try-button"},"Try for free")))),l.a.createElement("section",{id:"easy",className:"omnipack-bordered"},l.a.createElement("div",{className:"content"},l.a.createElement("div",{className:"content-text"},l.a.createElement("h2",null,"Easy and intuitive,",l.a.createElement("br",null),"just like you wanted."),l.a.createElement("p",null,"No code. No hustle. Zero knowledge required. Setup box parameters, select pallet type and drag-n-drop boxes onto the pallet. You can control all of this with a touch of your finger.")),l.a.createElement("div",{className:"content-image"}))),l.a.createElement("section",{id:"runup",className:"omnipack-noborders"},l.a.createElement("div",{className:"content"},l.a.createElement("div",{className:"content-text"},l.a.createElement("h2",null,"Little run-up.",l.a.createElement("br",null),"Huge performance."),l.a.createElement("p",null,"Advanced trajectory planning algorithm makes the robot work 20% faster and 30% smoother. Don’t take our word for it. Let’s compare."),l.a.createElement("div",{className:"compare-table"},l.a.createElement("table",{cellSpacing:"0",frame:"void",width:"100%"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Motion planning algorithm"),l.a.createElement("th",null,"On"),l.a.createElement("th",null,"Off"))),l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null,"Time required to complete the first layer."),l.a.createElement("td",{width:"120"},"1 min 20 sec"),l.a.createElement("td",{width:"120"},"1 min 46 sec")),l.a.createElement("tr",null,l.a.createElement("td",null,"Time required to complete 2 meter pallet using Ewellix column."),l.a.createElement("td",null,"17 min"),l.a.createElement("td",null,"20 min")),l.a.createElement("tr",null,l.a.createElement("td",null,"Distance traveled by the robot’s TCP. 1 min 46 sec"),l.a.createElement("td",null,"TBD"),l.a.createElement("td",null,"TBD")))))),l.a.createElement("div",{className:"motion-planning-video"},l.a.createElement("img",{src:m})),l.a.createElement("div",{className:"compare-info-rows"},l.a.createElement("div",{className:"inforow-title"},"Motion planning algorithm (On / Off)"),l.a.createElement("div",{className:"inforow"},l.a.createElement("h2",{className:"inforow-label"},"Time required to complete the first layer"),l.a.createElement("p",{className:"inforow-value"},"1 min 20 sec / 1 min 46 sec")),l.a.createElement("div",{className:"inforow"},l.a.createElement("h2",{className:"inforow-label"},"Time required to complete 2 meter pallet using Ewellix column"),l.a.createElement("p",{className:"inforow-value"},"17 min / 20 min")),l.a.createElement("div",{className:"inforow"},l.a.createElement("h2",{className:"inforow-label"},"Time required to complete the first layer"),l.a.createElement("p",{className:"inforow-value"},"TBD / TBD"))))),l.a.createElement("section",{id:"protected",className:"omnipack-bordered"},l.a.createElement("div",{className:"content"},l.a.createElement("div",{className:"content-text"},l.a.createElement("h2",null,"Nothing will stop your production."),l.a.createElement("p",null,"No code. No hustle. Zero knowledge required. Setup box parameters, select pallet type and drag-n-drop boxes onto the pallet. You can control all of this with a touch of your finger.")),l.a.createElement("div",{className:"content-image protection"}))),l.a.createElement("section",{id:"one-app",className:"omnipack-fullscreen-title"},l.a.createElement("div",{className:"image-cover"}),l.a.createElement("div",{className:"dark-cover"},l.a.createElement("h1",null,"Lite app.",l.a.createElement("br",null),"Tons of benefits."))),l.a.createElement("section",{className:"percent"},l.a.createElement("div",{className:"percentage-description"},l.a.createElement("h1",{className:"percentage"},"50%"),l.a.createElement("h2",{className:"description"},"Cost reduction on maintenance and reprogramming."),l.a.createElement("div",{className:"see-calcs"},l.a.createElement("span",null,"See our calculations"),l.a.createElement("div",{className:"icon-download"},l.a.createElement("svg",{width:"42",height:"42",fill:"none",xmlns:"http://www.w3.org/2000/svg"},l.a.createElement("path",{d:"M22 13.95a1 1 0 10-2 0v11.7l-4.86-4.82a1 1 0 00-1.4 1.42l6.56 6.51a1 1 0 001.4 0l6.57-6.5a1 1 0 10-1.41-1.43L22 25.65v-11.7z",fill:"#8e8e83"}),l.a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M21 4.25a16.75 16.75 0 100 33.5 16.75 16.75 0 000-33.5zM6.25 21a14.75 14.75 0 1129.5 0 14.75 14.75 0 01-29.5 0z",fill:"#8e8e83"}))))),l.a.createElement("div",{className:"benefits"},l.a.createElement("div",{className:"benefit"},l.a.createElement("div",{className:"benefit-item"},l.a.createElement("div",{className:"benefit-icon"},l.a.createElement("svg",{width:"48",height:"42",fill:"none",xmlns:"http://www.w3.org/2000/svg"},l.a.createElement("g",{filter:"url(#filter0_d)"},l.a.createElement("path",{d:"M41.35 20.41c-1.5-6.82-3.75-11.17-7.34-12.23a7.5 7.5 0 00-2.13-.3c-2.21 0-3.95 1.3-7.88 1.3-3.93 0-5.67-1.3-7.88-1.3-.75 0-1.5.1-2.23.3-3.59 1.06-5.8 5.41-7.34 12.23C5 27.38 5.28 32.88 8.32 33.94c2.14.74 4.04-.8 5.85-3.04 2.05-2.56 4.58-3.34 9.83-3.34s7.68.78 9.73 3.34c1.8 2.25 3.79 3.76 5.86 3.05 3.37-1.15 3.32-6.5 1.76-13.54z",stroke:"url(#paint0_linear)",strokeWidth:"2",strokeMiterlimit:"10"}),l.a.createElement("path",{d:"M32.2 14.77a1.64 1.64 0 11-3.28 0 1.64 1.64 0 013.28 0z",fill:"url(#paint1_linear)"}),l.a.createElement("path",{d:"M26.95 20.02a1.64 1.64 0 100-3.29 1.64 1.64 0 000 3.29z",fill:"url(#paint2_linear)"}),l.a.createElement("path",{d:"M29.65 23.35a1.64 1.64 0 101.82-2.73 1.64 1.64 0 00-1.82 2.73z",fill:"url(#paint3_linear)"}),l.a.createElement("path",{d:"M34.17 20.02a1.64 1.64 0 100-3.29 1.64 1.64 0 000 3.29z",fill:"url(#paint4_linear)"}),l.a.createElement("path",{d:"M17.13 14.44a1 1 0 10-2 0v2.94h-2.94a1 1 0 100 2h2.94v2.93a1 1 0 102 0v-2.93h2.93a1 1 0 100-2h-2.93v-2.94z",fill:"url(#paint5_linear)"})),l.a.createElement("defs",null,l.a.createElement("linearGradient",{id:"paint0_linear",x1:"8.5",y1:"8",x2:"41.5",y2:"34.5",gradientUnits:"userSpaceOnUse"},l.a.createElement("stop",{stopColor:"#FF820F"}),l.a.createElement("stop",{offset:"1",stopColor:"#FFA217"})),l.a.createElement("linearGradient",{id:"paint1_linear",x1:"13.5",y1:"7",x2:"40.5",y2:"34",gradientUnits:"userSpaceOnUse"},l.a.createElement("stop",{stopColor:"#FF820F"}),l.a.createElement("stop",{offset:"1",stopColor:"#FFA217"})),l.a.createElement("linearGradient",{id:"paint2_linear",x1:"13.5",y1:"7",x2:"40.5",y2:"34",gradientUnits:"userSpaceOnUse"},l.a.createElement("stop",{stopColor:"#FF820F"}),l.a.createElement("stop",{offset:"1",stopColor:"#FFA217"})),l.a.createElement("linearGradient",{id:"paint3_linear",x1:"13.5",y1:"7",x2:"40.5",y2:"34",gradientUnits:"userSpaceOnUse"},l.a.createElement("stop",{stopColor:"#FF820F"}),l.a.createElement("stop",{offset:"1",stopColor:"#FFA217"})),l.a.createElement("linearGradient",{id:"paint4_linear",x1:"13.5",y1:"7",x2:"40.5",y2:"34",gradientUnits:"userSpaceOnUse"},l.a.createElement("stop",{stopColor:"#FF820F"}),l.a.createElement("stop",{offset:"1",stopColor:"#FFA217"})),l.a.createElement("linearGradient",{id:"paint5_linear",x1:"13.5",y1:"7",x2:"40.5",y2:"34",gradientUnits:"userSpaceOnUse"},l.a.createElement("stop",{stopColor:"#FF820F"}),l.a.createElement("stop",{offset:"1",stopColor:"#FFA217"})),l.a.createElement("filter",{id:"filter0_d",x:"-1",y:"-3",width:"50",height:"50",filterUnits:"userSpaceOnUse",colorInterpolationFilters:"sRGB"},l.a.createElement("feFlood",{floodOpacity:"0",result:"BackgroundImageFix"}),l.a.createElement("feColorMatrix",{in:"SourceAlpha",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"}),l.a.createElement("feOffset",{dy:"1"}),l.a.createElement("feGaussianBlur",{stdDeviation:"2"}),l.a.createElement("feColorMatrix",{values:"0 0 0 0 1 0 0 0 0 0.584314 0 0 0 0 0 0 0 0 0.12 0"}),l.a.createElement("feBlend",{in2:"BackgroundImageFix",result:"effect1_dropShadow"}),l.a.createElement("feBlend",{in:"SourceGraphic",in2:"effect1_dropShadow",result:"shape"}))))),l.a.createElement("p",{className:"benefit-text"},"System set-up in 10 minutes.")),l.a.createElement("div",{className:"benefit-item"},l.a.createElement("div",{className:"benefit-icon"},l.a.createElement("svg",{width:"42",height:"42",fill:"none",xmlns:"http://www.w3.org/2000/svg"},l.a.createElement("path",{d:"M34.4 15.66a2.02 2.02 0 01-2.83 0L29.9 14a2.02 2.02 0 010-2.85l3.78-3.77a.06.06 0 00.01-.06.06.06 0 00-.03-.05 7.1 7.1 0 00-7.6 1.48c-1.93 1.91-2.04 4.77-1.34 7.28a2 2 0 01-.56 2.01L11.32 29.97a3.03 3.03 0 104.27 4.27l12.03-12.86a2 2 0 011.99-.57c2.48.66 5.3.54 7.2-1.33 2.04-2.01 2.48-5.56 1.5-7.6a.06.06 0 00-.1-.01l-3.8 3.8z",stroke:"url(#paint0_linear)",strokeWidth:"2",strokeMiterlimit:"10"}),l.a.createElement("path",{d:"M25.53 23.62c3.04 2.83 6.73 6.18 8.17 7.38a1 1 0 01.07 1.48l-2.48 2.47a1.04 1.04 0 01-1.5-.05 288.11 288.11 0 00-7.37-7.95m-3.8-3.87l-2.3-2.25a1.35 1.35 0 01.02-1.93l1.16-1.13a1.34 1.34 0 011.9-.02l2.48 2.41-3.25 2.92z",stroke:"url(#paint1_linear)",strokeWidth:"2",strokeMiterlimit:"10"}),l.a.createElement("path",{d:"M3.29 16.36l2.18-2.13a.35.35 0 01.25-.1c.1 0 .19.03.26.1v0a.73.73 0 00.6.2c.29-.03.6-.11.79-.3.44-.43-.07-1.28.32-1.82.45-.6.94-1.16 1.47-1.68a16.1 16.1 0 015.19-3.3 7.97 7.97 0 012.99-.58c1.68 0 2.97.74 3.43 1.16.28.27.54.56.77.87a5.1 5.1 0 00-2.17-.3c-1 .08-2.19.54-2.82 1.04-1.03.81-1.48 1.9-1.55 3.32-.05 1.04.2 1.64 2.68 4.11a.49.49 0 01-.02.68l-1.36 1.34a.51.51 0 01-.7 0 19.64 19.64 0 00-3.34-2.83 3.42 3.42 0 00-1.36-.5c-.47-.05-.95.05-1.36.28a.85.85 0 00-.2.15 1.05 1.05 0 00.04 1.5l.12.11a.34.34 0 010 .5L7.32 20.3a.35.35 0 01-.25.1.36.36 0 01-.25-.1l-3.53-3.44a.36.36 0 010-.5v0z",stroke:"url(#paint2_linear)",strokeWidth:"2",strokeMiterlimit:"10"}),l.a.createElement("defs",null,l.a.createElement("linearGradient",{id:"paint0_linear",x1:"7",y1:"7",x2:"45.41",y2:"26.15",gradientUnits:"userSpaceOnUse"},l.a.createElement("stop",{stopColor:"#FF820F"}),l.a.createElement("stop",{offset:"1",stopColor:"#FFA217"})),l.a.createElement("linearGradient",{id:"paint1_linear",x1:"6.5",y1:"7",x2:"39.38",y2:"24.97",gradientUnits:"userSpaceOnUse"},l.a.createElement("stop",{stopColor:"#FF820F"}),l.a.createElement("stop",{offset:"1",stopColor:"#FFA217"})),l.a.createElement("linearGradient",{id:"paint2_linear",x1:"4.62",y1:"6.82",x2:"36.16",y2:"35.73",gradientUnits:"userSpaceOnUse"},l.a.createElement("stop",{stopColor:"#FF820F"}),l.a.createElement("stop",{offset:"1",stopColor:"#FFA217"}))))),l.a.createElement("p",{className:"benefit-text"},"Reconfiguration in 2 minutes."))),l.a.createElement("div",{className:"benefit"},l.a.createElement("div",{className:"benefit-item"},l.a.createElement("div",{className:"benefit-icon"},l.a.createElement("svg",{width:"42",height:"42",fill:"none",xmlns:"http://www.w3.org/2000/svg"},l.a.createElement("path",{d:"M25.45 4.08L9 24.64h9.6L16.24 37.8a.18.18 0 00.1.2.17.17 0 00.21-.06L33 17.36h-9.6L25.77 4.2a.19.19 0 00-.04-.15.18.18 0 00-.14-.06.18.18 0 00-.14.08z",stroke:"url(#green_paint)",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),l.a.createElement("defs",null,l.a.createElement("linearGradient",{id:"green_paint",x1:"9.11",y1:"4.35",x2:"33.26",y2:"37.38",gradientUnits:"userSpaceOnUse"},l.a.createElement("stop",{stopColor:"#34C759"}),l.a.createElement("stop",{offset:".09",stopColor:"#3ACC5F"}),l.a.createElement("stop",{offset:"1",stopColor:"#75FF98"}))))),l.a.createElement("p",{className:"benefit-text green"},"20% speed increase.")),l.a.createElement("div",{className:"benefit-item"},l.a.createElement("div",{className:"benefit-icon"},l.a.createElement("svg",{width:"42",height:"42",fill:"none",xmlns:"http://www.w3.org/2000/svg"},l.a.createElement("path",{d:"M3.94 21h9.19l3.93-7.88L21 26.26l3.94-7.88 2.62 5.25h10.5M28.95 6.57c-5.32 0-7.95 5.25-7.95 5.25s-2.63-5.25-7.95-5.25a7.93 7.93 0 00-7.8 7.94c-.09 8.97 7.11 15.35 15.01 20.71a1.31 1.31 0 001.48 0c7.9-5.36 15.1-11.74 15.01-20.7a7.93 7.93 0 00-7.8-7.95z",stroke:"url(#green_paint)",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}))),l.a.createElement("p",{className:"benefit-text green"},"Up to 30% robot life-time increase."))),l.a.createElement("div",{className:"benefit"},l.a.createElement("div",{className:"benefit-item"},l.a.createElement("div",{className:"benefit-icon"},l.a.createElement("svg",{width:"42",height:"42",fill:"none",xmlns:"http://www.w3.org/2000/svg"},l.a.createElement("path",{d:"M30.95 16.23a2.31 2.31 0 01-3.27 0l-1.91-1.91a2.31 2.31 0 010-3.26l4.33-4.34a.07.07 0 00.02-.07.07.07 0 00-.04-.05 8.15 8.15 0 00-8.73 1.7c-2.2 2.19-2.33 5.48-1.52 8.35a2.3 2.3 0 01-.65 2.31L7.17 29.93a3.47 3.47 0 104.9 4.9L23.16 22.8a2.3 2.3 0 012.28-.65c2.85.76 6.1.62 8.27-1.53 2.34-2.3 2.84-6.39 1.7-8.72a.07.07 0 00-.08-.04.07.07 0 00-.03.02l-4.35 4.36z",stroke:"url(#blue_gradient)",strokeWidth:"2",strokeMiterlimit:"10",strokeLinecap:"round"}),l.a.createElement("defs",null,l.a.createElement("linearGradient",{id:"blue_gradient",x1:"6.07",y1:"6.05",x2:"35.95",y2:"35.93",gradientUnits:"userSpaceOnUse"},l.a.createElement("stop",{stopColor:"#00C2FF"}),l.a.createElement("stop",{offset:"1",stopColor:"#A0E8FF"}))))),l.a.createElement("p",{className:"benefit-text blue"},"20% speed increase.")),l.a.createElement("div",{className:"benefit-item"},l.a.createElement("div",{className:"benefit-icon"},l.a.createElement("svg",{width:"42",height:"42",fill:"none",xmlns:"http://www.w3.org/2000/svg"},l.a.createElement("path",{d:"M27.48 15.77a.89.89 0 00-1.34-1.16l-7.43 8.59-2.9-2.85a.89.89 0 10-1.24 1.27l3.57 3.5a.89.89 0 001.3-.05l8.04-9.3z",fill:"url(#blue_gradient)"}),l.a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M21.36 5.08a.89.89 0 00-.72 0C14.84 7.7 12.22 8.54 5.8 9.69c-.4.07-.7.41-.73.82a26.18 26.18 0 0015.6 26.43c.21.08.45.08.66 0a26.18 26.18 0 0015.6-26.43.89.89 0 00-.73-.82c-6.42-1.15-9.04-2-14.84-4.61zM21 35.15A24.37 24.37 0 016.8 11.31c5.95-1.1 8.73-2 14.2-4.45a51.44 51.44 0 0014.2 4.45A24.37 24.37 0 0121 35.15z",fill:"url(#blue_gradient)"}))),l.a.createElement("p",{className:"benefit-text blue"},"Up to 30% robot life-time increase."))))),l.a.createElement("section",{id:"installation",className:"omnipack-installation"},l.a.createElement("div",{className:"installation-container"},l.a.createElement("div",{className:"left-side"},l.a.createElement("div",null,l.a.createElement("h2",{className:"subhead"},"Installation"),l.a.createElement("div",{className:"description-content"},l.a.createElement("h1",null,"Plug and play."),l.a.createElement("p",{className:"min-description"},"To get everything running we use a FullHD touchscreen and super fast Intel NUC with OmniPack onboard."),l.a.createElement("div",{className:"accordion"},l.a.createElement("div",{className:"accordion-section"+(1===g?" active":"")},l.a.createElement("div",{className:"accordion-section--item",onClick:()=>N(1)},l.a.createElement("p",null,"Full HD touchscreen"),l.a.createElement("div",{className:"arrow-icon"},l.a.createElement("svg",{width:"24",height:"24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},l.a.createElement("path",{d:"M12 14.2L6.64 9.73a1 1 0 00-1.28 1.54l6 5a1 1 0 001.28 0l6-5a1 1 0 10-1.28-1.54L12 14.2z",fill:"#8E8E93"})))),l.a.createElement("div",{className:"accordion-section--content"},l.a.createElement("p",null,"Usually our partners use 15 inch FullHD touchscreen with IP protection connected to our Intel NUC via HDMI. You are also welcome to use your screen. Intuitive interface, crisp animations and exceptional user-experience is included from our side."))),l.a.createElement("div",{className:"accordion-section"+(2===g?" active":"")},l.a.createElement("div",{className:"accordion-section--item",onClick:()=>N(2)},l.a.createElement("p",null,"Intel NUC with OmniPack"),l.a.createElement("div",{className:"arrow-icon"},l.a.createElement("svg",{width:"24",height:"24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},l.a.createElement("path",{d:"M12 14.2L6.64 9.73a1 1 0 00-1.28 1.54l6 5a1 1 0 001.28 0l6-5a1 1 0 10-1.28-1.54L12 14.2z",fill:"#8E8E93"})))),l.a.createElement("div",{className:"accordion-section--content"},l.a.createElement("p",null,"OmniPack lives on a powerful Intel NUC computer. This beast has top processor inside, 128GB+ SSD for all of your different layouts and 16GB+ RAM to ensure the best performance. Intel NUC is connected directedly to the robot via Ethernet. We use TCP/IP communication for close to real-time robot control.")))))),l.a.createElement("div",{className:"begin-section"},l.a.createElement("div",{className:"begin-button"},"Begin for free"),l.a.createElement("p",null,"Demo unit is free for the 1st month."))),l.a.createElement("div",{className:"right-side"},l.a.createElement("div",{className:"image-container"},l.a.createElement("img",{src:p,alt:"OmniPack setup image. 1 of 3",className:null===g?" active":""}),l.a.createElement("img",{src:u,alt:"OmniPack setup image. 2 of 3",className:1===g?" active":""}),l.a.createElement("img",{src:E,alt:"OmniPack setup image. 3 of 3",className:2===g?" active":""})))),l.a.createElement("div",{className:"begin-section--mobile"},l.a.createElement("div",{className:"begin-button"},"Begin for free"),l.a.createElement("p",null,"Demo unit is free for the 1st month."))),l.a.createElement("section",{id:"trusted",className:"omnipack-trusted"},l.a.createElement("div",{className:"omnipack-trusted--container"},l.a.createElement("div",{className:"trusted-tab ur-plus"},l.a.createElement("h2",{className:"trusted-tab-subhead"},"Universal Robots+"),l.a.createElement("div",{className:"trusted-content"},l.a.createElement("h1",{className:"trusted-content--title"},"Trusted."),l.a.createElement("p",null,"OmniPack software is certified by the leading producer of collaborative robots. Our software recognized by the distributors and integrators all over the world."),l.a.createElement("figure",{className:"ur-plus-image"}),l.a.createElement("div",{className:"ur-link"},l.a.createElement("a",{href:"#"},"Read more on universal-robots.com"),l.a.createElement("div",{className:"link-icon"},l.a.createElement("svg",{width:"24",height:"24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},l.a.createElement("path",{d:"M14.75 3a1 1 0 011-1H21a1 1 0 011 1v5.25a1 1 0 11-2 0V5.41l-8.8 8.8a1 1 0 01-1.4-1.42L18.58 4h-2.84a1 1 0 01-1-1z",fill:"#2A475B"}),l.a.createElement("path",{d:"M4.88 7a.88.88 0 00-.88.88v11.25a.87.87 0 00.88.87h11.25a.87.87 0 00.87-.88V10.5a1 1 0 112 0v8.63A2.88 2.88 0 0116.12 22H4.88A2.87 2.87 0 012 19.12V7.88A2.87 2.87 0 014.88 5h7.85a1 1 0 110 2H4.87z",fill:"#2A475B"})))))),l.a.createElement("div",{className:"trusted-tab third-parties gray"},l.a.createElement("h2",{className:"trusted-tab-subhead"},"Third party products support"),l.a.createElement("div",{className:"trusted-content"},l.a.createElement("h1",{className:"trusted-content--title"},"Work the way you like."),l.a.createElement("p",{className:"gray"},"OmniPack has advanced settings and callback functionality, supports Modbus TCP and Ethernet IP protocols as well as Omron and Siemens PLC communication. We can include your custom hardware as well."),l.a.createElement("figure",{className:"third-parties-image"}))))))}},78:function(e,t,a){e.exports=a.p+"assets/images/trajectories.jpg"}}]);