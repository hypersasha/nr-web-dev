(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{109:function(e,t,a){},110:function(e,t,a){},111:function(e,t,a){},112:function(e,t,a){},113:function(e,t,a){},114:function(e,t,a){e.exports=a.p+"assets/images/ipad-pro-mock.png"},115:function(e,t,a){e.exports=a.p+"assets/images/logo-letter.svg"},116:function(e,t,a){e.exports=a.p+"assets/images/ipad-ar-peview.jpg"},117:function(e,t,a){e.exports=a.p+"assets/images/preview-palletizing.jpg"},118:function(e,t,a){e.exports=a.p+"assets/images/preview-dispencing.jpg"},119:function(e,t,a){e.exports=a.p+"assets/images/preview-casefold.jpg"},120:function(e,t,a){e.exports=a.p+"assets/images/preview-tending.jpg"},121:function(e,t,a){e.exports=a.p+"assets/images/preview-plain.jpg"},122:function(e,t,a){e.exports=a.p+"assets/images/preview-screw.jpg"},123:function(e,t,a){e.exports=a.p+"assets/images/preview-ar.jpg"},124:function(e,t,a){e.exports=a.p+"assets/images/photo-view.jpg"},125:function(e,t,a){e.exports=a.p+"assets/images/photo-bluesun.jpg"},126:function(e,t,a){e.exports=a.p+"assets/images/photo-exhibit.jpg"},127:function(e,t,a){e.exports=a.p+"assets/images/outlook.jpg"},128:function(e,t,a){e.exports=a.p+"assets/images/robotend.mp4"},129:function(e,t,a){e.exports=a.p+"assets/images/vidpreview.jpg"},37:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),s=(a(109),a(110),e=>i.a.createElement("div",{onClick:e.onClick,className:"action-button"},e.label)),l=(a(111),e=>i.a.createElement("div",{className:"title"+(e.center?" centered":"")+(e.small?" small":"")},e.text)),o=(a(112),e=>i.a.createElement("div",{className:"app"},i.a.createElement("div",{className:"content"},i.a.createElement("div",{className:"app-title"},e.title),i.a.createElement("div",{className:"app-description"},e.description)),i.a.createElement("div",{className:"preview",style:{backgroundImage:"url("+e.previewUrl+")"}}))),r=(a(113),a(114)),c=a.n(r),m=e=>i.a.createElement("div",{className:"padview"},i.a.createElement("img",{className:"iPadMockMobile",src:c.a,title:"iPad."}),i.a.createElement("div",{className:"padview-image",style:{backgroundImage:"url("+e.image+")"}})),d=a(42),p=a.n(d),h=a(41),u=a(115),v=a(116),E=a(117),g=a(118),f=a(119),w=a(120),N=a(121),y=a(122),x=a(69),b=a(123),k=a(124),C=a(125),S=a(126),j=a(127),R=a(128),q=a(129);class P extends n.Component{constructor(e){super(e),this.state={name:"",mail:"",mailValid:!0,nameValid:!0,formSent:!1,isVideoPlaying:!1,isBadge:!1,headerLinks:[{id:"overview",label:"Overview"},{id:"why-omnifit",label:"Why OmniFit"},{id:"features",label:"Features"}]},this.sendRequest=this.sendRequest.bind(this),this.onChange=this.onChange.bind(this),this.navToSection=this.navToSection.bind(this),this.checkEmail=this.checkEmail.bind(this),this.checkName=this.checkName.bind(this),this.onPageScrolling=this.onPageScrolling.bind(this),this.videoRef=i.a.createRef(),this.videoPlaying=!1}componentDidMount(){document.querySelectorAll("html,body").forEach(e=>{e.style.background="#000000"}),window.scrollTo(0,0),p.a.get("https://nr-form-api-test.now.sh/allDemoRequests").then(e=>{console.log(e)}).catch(e=>{console.error(e)}),this.videoRef.current.pause(),window.addEventListener("scroll",this.onPageScrolling,{passive:!0})}componentWillUnmount(){window.removeEventListener("scroll",this.onPageScrolling)}onPageScrolling(){var e=this.videoRef.current.getBoundingClientRect();e.top<window.innerHeight&&e.bottom>=0&&!1===this.videoPlaying&&(this.videoPlaying=!0,this.videoRef.current.play())}onChange(e){var t=e.target.name,a=e.target.value;this.setState({[t]:a})}checkEmail(e){var t=this.state.mail;this.setState({mailValid:this.validateEmail(t)})}checkName(e){var t=this.state.name;this.setState({nameValid:t.trim().length>2})}validateEmail(e){return/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase())}navToSection(e){document.getElementById(e).scrollIntoView({block:"start"})}sendRequest(){if(this.checkEmail(),this.checkName(),!this.state.mailValid||!this.state.nameValid)return!1;if(0===this.state.name.trim().length||0===this.state.mail.trim().length)return!1;var e=this.state.name.trim(),t=this.state.mail.trim();console.log("Sending data: "+e+" - "+t),"Avo Cado"!==e&&p.a.post("https://nr-form-api-test.now.sh/requestDemo",{name:e,email:t}).then(e=>{console.log(e),this.setState({formSent:!0})}).catch(e=>{console.error(e)}),p.a.post("https://cado.starcat.now.sh/api/ofit",{name:e,email:t,product:"OmniFit"},{headers:{"content-type":"application/x-www-form-urlencoded"}}).then(e=>{200===e.status?console.log("Bot will send notifications"):console.error("Something went wrong on sending notifications.")})}render(){return i.a.createElement("div",{id:"omnifit-page"},this.state.isBadge&&i.a.createElement("div",{className:"omnipack-badge"},i.a.createElement("div",{className:"badge-container"},i.a.createElement("div",{className:"left-side"},i.a.createElement("div",{className:"logo"},i.a.createElement("svg",{width:"20",height:"24",viewBox:"0 0 20 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i.a.createElement("path",{d:"M8.64 10.0693H9.83395C10.0265 10.0693 10.2112 10.1462 10.3473 10.2831C10.4835 10.42 10.56 10.6057 10.56 10.7993V11.9998H8.64V10.0693Z",fill:"#ffffff"}),i.a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M5.24564 23.0999V6.06163H12.562C12.9323 6.0622 13.2872 6.20738 13.549 6.46533C13.8109 6.72329 13.9582 7.07299 13.9588 7.4378V15.271H10.6753L13.9544 23.0999H19.2V4.53255C19.2006 3.57007 18.8132 2.64675 18.1231 1.96556C17.433 1.28437 16.4965 0.90106 15.5196 0.899902H0V23.0999H5.24564Z",fill:"#ffffff"}))),i.a.createElement("div",{className:"title-desc"},i.a.createElement("div",{className:"badge-title"},"OmniPack"),i.a.createElement("div",{className:"description"},"Powerful palletizing tool."))),i.a.createElement("div",{className:"right-side"},i.a.createElement("div",{className:"description"},"Setup your palletizing stand in a few minutes."),i.a.createElement("div",{className:"action-button"},i.a.createElement("a",{href:"/omnipack"}),i.a.createElement("span",null,"Watch more"))))),i.a.createElement("section",{className:"intro divided"},i.a.createElement("div",{id:"overview",className:"container"},i.a.createElement("h3",{className:"product-name"},"OmniFit."),i.a.createElement(l,{center:!0,text:"Boost your sales with AR experience."}),i.a.createElement("p",{className:"section-text centered"},"We’ve created hyper-realistic AR models of all UR robots, additional hardware and even complete robotic cells. So you can showcase your solutions anytime and anywhere."),i.a.createElement("div",{className:"action-mobile"},i.a.createElement(s,{onClick:()=>{this.navToSection("form")},label:"Request Demo"})),i.a.createElement("div",{id:"ipad-ar-preview"},i.a.createElement("img",{src:v,alt:"OmniFit preview screenshot."})))),i.a.createElement("section",{className:"gallery"},i.a.createElement("div",{className:"container"},i.a.createElement(l,{small:!1,text:"Interactive simulations at your fingertips.",center:!0}),i.a.createElement("p",{className:"section-text centered"},"All these models are interactive and customizable already in the app, so you can find the solution, which is just for you."),i.a.createElement("div",{className:"gallery-tabs"},i.a.createElement("div",{className:"gallery-row"},i.a.createElement(o,{title:"Palletizing",previewUrl:E,description:"Fit your system on the customer factory floor and show how exactly the whole system will look like, how much space it takes, how it moves, and how fast it is."}),i.a.createElement(o,{title:"Machine Tending",previewUrl:w,description:"Maecenas sed nisi congue, convallis risus at, auctor eros. Quisque efficitur neque et elit elementum tristique. Ut et suscipit augue."}),i.a.createElement(o,{title:"Case Folding",previewUrl:f,description:"In sollicitudin commodo elit in aliquet. Maecenas malesuada eget erat vel elementum. Donec scelerisque elit dui, vitae posuere odio aliquet eget. Mauris nisi mi, sodales hendrerit lectus nec, molestie finibus ipsum."})),i.a.createElement("div",{className:"gallery-row"},i.a.createElement(o,{title:"Screwdriving",previewUrl:y,description:"Fit your system on the customer factory floor and show how exactly the whole system will look like, how much space it takes, how it moves, and how fast it is."}),i.a.createElement(o,{title:"Dispencing",previewUrl:g,description:"Fit your system on the customer factory floor and show how exactly the whole system will look like, how much space it takes, how it moves, and how fast it is."}),i.a.createElement(o,{title:"Plain Robot",previewUrl:N,description:"In sollicitudin commodo elit in aliquet. Maecenas malesuada eget erat vel elementum. Donec scelerisque elit dui, vitae posuere odio aliquet eget. Mauris nisi mi, sodales hendrerit lectus nec, molestie finibus ipsum."}))))),i.a.createElement("section",{id:"why-omnifit"},i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"padhor mirrored"},i.a.createElement("div",{className:"padhor-text"},i.a.createElement("div",{className:"padhor-text--title"},i.a.createElement(l,{small:!0,text:"Visualize instantly."}),i.a.createElement("p",{className:"section-text"},"Fit your system on the customer factory floor and show how exactly the whole system will look like, how much space it takes, how it moves, and how fast it is."))),i.a.createElement(m,{image:b})))),i.a.createElement("section",null,i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"padhor photo"},i.a.createElement("div",{className:"padhor-text"},i.a.createElement("div",{className:"padhor-text--title"},i.a.createElement(l,{small:!0,text:"Place the robot anywhere."}),i.a.createElement("p",{className:"section-text"},"Check robot reachability for various applications. You have a full range of UR robots at your fingertips, even if you brought only UR-3 with you."))),i.a.createElement(m,{image:k})))),i.a.createElement("section",null,i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"padhor mirrored photo"},i.a.createElement("div",{className:"padhor-text"},i.a.createElement("div",{className:"padhor-text--title"},i.a.createElement(l,{small:!0,text:"Attract attention."}),i.a.createElement("p",{className:"section-text"},"Show case your solutions to anyone and anywhere even in the conference room."),i.a.createElement("div",{className:"tabletop"}))),i.a.createElement("div",{className:"photo",style:{backgroundImage:"url("+C+")",zIndex:1,position:"relative"}})))),i.a.createElement("section",{className:"divided",id:"interactive"},i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"padhor"},i.a.createElement("div",{className:"padhor-text"},i.a.createElement("div",{className:"padhor-text--title"},i.a.createElement(l,{small:!0,text:"Make it interactive."}),i.a.createElement("p",{className:"section-text"},"Bring hands-on experience and show how easy it will be to set up the robot.",i.a.createElement("br",null),i.a.createElement("br",null),"We remove the fear of complexity and hidden operational costs on reconfiguration."),i.a.createElement("div",{className:"omnipack-link"},i.a.createElement("a",{href:"/omnipack",target:"_blank"}),i.a.createElement("p",null,"See OmniPack"),i.a.createElement("div",null,i.a.createElement("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i.a.createElement("path",{d:"M18 10.5V19.125C18 19.3712 17.9515 19.615 17.8573 19.8425C17.763 20.07 17.6249 20.2767 17.4508 20.4508C17.2767 20.6249 17.07 20.763 16.8425 20.8573C16.615 20.9515 16.3712 21 16.125 21H4.875C4.37772 21 3.90081 20.8025 3.54917 20.4508C3.19754 20.0992 3 19.6223 3 19.125V7.875C3 7.37772 3.19754 6.90081 3.54917 6.54917C3.90081 6.19754 4.37772 6 4.875 6H12.7256",stroke:"#969696",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),i.a.createElement("path",{d:"M15.75 3H21V8.25",stroke:"#969696",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),i.a.createElement("path",{d:"M10.5 13.5L20.625 3.375",stroke:"#969696",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})))))),i.a.createElement(m,{image:x})))),i.a.createElement("section",null,i.a.createElement("div",{className:"container"},i.a.createElement(l,{text:"Create AR demos right on the plant.",center:!0}),i.a.createElement("p",{className:"section-text centered"},"Customize the system according to technical requirements and record a video with AR simulations."),i.a.createElement("div",{style:{width:150,margin:"24px auto 0"}},i.a.createElement(s,{onClick:()=>{this.navToSection("form")},label:"Request Demo"})),i.a.createElement("div",{className:"iphone-video"},i.a.createElement("video",{preload:"metadata",poster:q,controls:!1,muted:!0,autoPlay:!0,loop:!0,playsInline:!0,ref:this.videoRef},i.a.createElement("source",{src:R,type:"video/mp4"})),i.a.createElement("div",{className:"device-border"})))),i.a.createElement("section",{className:"light",id:"features"},i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"padhor mirrored"},i.a.createElement("div",{className:"padhor-text margined"},i.a.createElement("div",{className:"padhor-text--title"},i.a.createElement(l,{small:!0,text:"Create catchy visualizations."}),i.a.createElement("p",{className:"section-text"},"Attach the illustrations to your commercial proposal."))),i.a.createElement("div",{className:"letter"},i.a.createElement("div",{className:"letter-content"},i.a.createElement("div",{className:"letter-logo",style:{height:24}},i.a.createElement("object",{data:u,type:"image/svg+xml"})),i.a.createElement("div",{className:"letter-text"},"Dear Luis,",i.a.createElement("br",null),i.a.createElement("br",null),"Thank you for your interest in our products. The below summarizes technical and commercial details of the system."),i.a.createElement("div",{className:"letter-photo"}),i.a.createElement("div",{className:"letter-photo--label"},"Figure 1. Rielic box folding station.")))))),i.a.createElement("section",{className:"light"},i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"padhor"},i.a.createElement("div",{className:"padhor-text leftMargined"},i.a.createElement("div",{className:"padhor-text--title"},i.a.createElement(l,{small:!0,text:"Make it personal."}),i.a.createElement("p",{className:"section-text"},"Personalize the note to your client and attach a video of the system operation."))),i.a.createElement("div",{className:"outlook"},i.a.createElement("img",{src:j}))))),i.a.createElement("section",{className:"light"},i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"padhor mirrored photo"},i.a.createElement("div",{className:"padhor-text"},i.a.createElement("div",{className:"padhor-text--title"},i.a.createElement(l,{small:!0,text:"Exhibit anywhere."}),i.a.createElement("p",{className:"section-text"},"Interactive and immersive content for any presentation. And up to 40m",i.a.createElement("sup",null,"2")," of free space!"))),i.a.createElement(m,{image:S})))),i.a.createElement(h.a,{demoUrl:"requestDemo",product:"OmniFit"}))}}t.default=P},41:function(e,t,a){"use strict";var n=a(0),i=a.n(n),s=a(42),l=a.n(s);a(43);function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e))&&"[object Arguments]"!==Object.prototype.toString.call(e))return;var a=[],n=!0,i=!1,s=void 0;try{for(var l,o=e[Symbol.iterator]();!(n=(l=o.next()).done)&&(a.push(l.value),!t||a.length!==t);n=!0);}catch(e){i=!0,s=e}finally{try{n||null==o.return||o.return()}finally{if(i)throw s}}return a}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}t.a=e=>{var t=o(Object(n.useState)(""),2),a=t[0],s=t[1],r=o(Object(n.useState)(""),2),c=r[0],m=r[1],d=o(Object(n.useState)(""),2),p=d[0],h=d[1],u=o(Object(n.useState)(!0),2),v=u[0],E=u[1],g=o(Object(n.useState)(!0),2),f=g[0],w=g[1],N=o(Object(n.useState)(!1),2),y=N[0],x=N[1],b=o(Object(n.useState)(!1),2),k=b[0],C=b[1];function S(e){return/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase())}return i.a.createElement("section",{className:"contact-form"+(k?" sent":"")},i.a.createElement("div",{className:"form-container",id:"form"},i.a.createElement("h1",{className:"form-title"},k?"Thank you.":e.title||"Free demo."),i.a.createElement("p",{className:"form-text"},k?"We will contact you as soon as possible.":"We will be happy to meet you online, showcase our solutions and perform remote demo even on your robot."),!k&&i.a.createElement("div",{className:"form-inputs"},i.a.createElement("div",{className:"input"+(v?"":" error")},i.a.createElement("span",null,"Name"),i.a.createElement("input",{type:"text",onBlur:()=>{E(a.trim().length>0)},name:"name",value:a,onChange:e=>s(e.target.value)})),i.a.createElement("div",{className:"input"+(f?"":" error")},i.a.createElement("span",null,"E-mail"),i.a.createElement("input",{type:"text",onBlur:()=>{w(S(c))},name:"mail",value:c,onChange:e=>m(e.target.value)})),i.a.createElement("div",{className:"input"},i.a.createElement("span",null,"Tell us about your company (optional)"),i.a.createElement("textarea",{name:"description",value:p,onChange:e=>h(e.target.value)}))),!k&&i.a.createElement("div",{className:"action-button-orange",onClick:function(){if(a.trim().length>0&&S(c)){x(!0);var t=a.trim(),n=p.trim();"Avo Cado"!==a&&l.a.post("https://nr-form-api-test.now.sh/"+e.demoUrl,{name:t,email:c,description:n}).then(e=>{console.log(e),x(!1),C(!0)}).catch(e=>{console.error(e),x(!1)}),l.a.post("https://cado.starcat.now.sh/api/ofit",{name:t,email:c,description:n,product:e.product},{headers:{"content-type":"application/x-www-form-urlencoded"}}).then(e=>{200===e.status?(console.log("Bot will send notificatoins"),console.log(e)):console.error("Something went wrong on sending notifications.")})}else E(a.trim().length>0),w(S(c))}},!y&&i.a.createElement("span",null,"Contact me"),y&&i.a.createElement("div",{className:"button-loader"},i.a.createElement("div",{className:"first"}),i.a.createElement("div",{className:"second"}),i.a.createElement("div",{className:"third"})))))}},43:function(e,t,a){},69:function(e,t,a){e.exports=a.p+"assets/images/pallet-screen.jpg"}}]);