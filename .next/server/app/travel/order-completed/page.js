(()=>{var e={};e.id=9777,e.ids=[9777],e.modules={72934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},54580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},45869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},77473:(e,r,t)=>{"use strict";t.r(r),t.d(r,{GlobalError:()=>s.a,__next_app__:()=>p,originalPathname:()=>u,pages:()=>d,routeModule:()=>m,tree:()=>c}),t(38396),t(35415),t(41510),t(29372),t(54864);var o=t(23191),a=t(88716),n=t(37922),s=t.n(n),i=t(95231),l={};for(let e in i)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>i[e]);t.d(r,l);let c=["",{children:["travel",{children:["order-completed",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(t.bind(t,38396)),"/home/dagi00/Documents/GitHub/site/src/app/travel/order-completed/page.js"]}]},{layout:[()=>Promise.resolve().then(t.bind(t,35415)),"/home/dagi00/Documents/GitHub/site/src/app/travel/order-completed/layout.js"]}]},{}]},{layout:[()=>Promise.resolve().then(t.bind(t,41510)),"/home/dagi00/Documents/GitHub/site/src/app/layout.js"],loading:[()=>Promise.resolve().then(t.bind(t,29372)),"/home/dagi00/Documents/GitHub/site/src/app/loading.js"],"not-found":[()=>Promise.resolve().then(t.bind(t,54864)),"/home/dagi00/Documents/GitHub/site/src/app/not-found.js"]}],d=["/home/dagi00/Documents/GitHub/site/src/app/travel/order-completed/page.js"],u="/travel/order-completed/page",p={require:t,loadChunk:()=>Promise.resolve()},m=new o.AppPageRouteModule({definition:{kind:a.x.APP_PAGE,page:"/travel/order-completed/page",pathname:"/travel/order-completed",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},55552:(e,r,t)=>{Promise.resolve().then(t.bind(t,71042))},57915:(e,r,t)=>{Promise.resolve().then(t.bind(t,69556))},33198:(e,r,t)=>{"use strict";t.d(r,{Z:()=>Z});var o=t(91367),a=t(45353),n=t(17577),s=t(41135),i=t(88634),l=t(91703),c=t(2791),d=t(27522),u=t(10326);let p=(0,d.Z)((0,u.jsx)("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"Person");var m=t(71685),g=t(97898);function v(e){return(0,g.ZP)("MuiAvatar",e)}(0,m.Z)("MuiAvatar",["root","colorDefault","circular","rounded","square","img","fallback"]);var x=t(31121);let h=["alt","children","className","component","slots","slotProps","imgProps","sizes","src","srcSet","variant"],b=e=>{let{classes:r,variant:t,colorDefault:o}=e;return(0,i.Z)({root:["root",t,o&&"colorDefault"],img:["img"],fallback:["fallback"]},v,r)},f=(0,l.ZP)("div",{name:"MuiAvatar",slot:"Root",overridesResolver:(e,r)=>{let{ownerState:t}=e;return[r.root,r[t.variant],t.colorDefault&&r.colorDefault]}})(({theme:e})=>({position:"relative",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:40,height:40,fontFamily:e.typography.fontFamily,fontSize:e.typography.pxToRem(20),lineHeight:1,borderRadius:"50%",overflow:"hidden",userSelect:"none",variants:[{props:{variant:"rounded"},style:{borderRadius:(e.vars||e).shape.borderRadius}},{props:{variant:"square"},style:{borderRadius:0}},{props:{colorDefault:!0},style:(0,a.Z)({color:(e.vars||e).palette.background.default},e.vars?{backgroundColor:e.vars.palette.Avatar.defaultBg}:(0,a.Z)({backgroundColor:e.palette.grey[400]},e.applyStyles("dark",{backgroundColor:e.palette.grey[600]})))}]})),y=(0,l.ZP)("img",{name:"MuiAvatar",slot:"Img",overridesResolver:(e,r)=>r.img})({width:"100%",height:"100%",textAlign:"center",objectFit:"cover",color:"transparent",textIndent:1e4}),j=(0,l.ZP)(p,{name:"MuiAvatar",slot:"Fallback",overridesResolver:(e,r)=>r.fallback})({width:"75%",height:"75%"}),Z=n.forwardRef(function(e,r){let t=(0,c.i)({props:e,name:"MuiAvatar"}),{alt:i,children:l,className:d,component:p="div",slots:m={},slotProps:g={},imgProps:v,sizes:Z,src:w,srcSet:P,variant:D="circular"}=t,k=(0,o.Z)(t,h),_=null,F=function({crossOrigin:e,referrerPolicy:r,src:t,srcSet:o}){let[a,s]=n.useState(!1);return n.useEffect(()=>{if(!t&&!o)return;s(!1);let a=!0,n=new Image;return n.onload=()=>{a&&s("loaded")},n.onerror=()=>{a&&s("error")},n.crossOrigin=e,n.referrerPolicy=r,n.src=t,o&&(n.srcset=o),()=>{a=!1}},[e,r,t,o]),a}((0,a.Z)({},v,{src:w,srcSet:P})),S=w||P,M=S&&"error"!==F,G=(0,a.Z)({},t,{colorDefault:!M,component:p,variant:D}),I=b(G),[A,R]=(0,x.Z)("img",{className:I.img,elementType:y,externalForwardedProps:{slots:m,slotProps:{img:(0,a.Z)({},v,g.img)}},additionalProps:{alt:i,src:w,srcSet:P,sizes:Z},ownerState:G});return _=M?(0,u.jsx)(A,(0,a.Z)({},R)):l||0===l?l:S&&i?i[0]:(0,u.jsx)(j,{ownerState:G,className:I.fallback}),(0,u.jsx)(f,(0,a.Z)({as:p,ownerState:G,className:(0,s.Z)(I.root,d),ref:r},k,{children:_}))})},31121:(e,r,t)=>{"use strict";t.d(r,{Z:()=>p});var o=t(45353),a=t(91367),n=t(72823),s=t(18349),i=t(32782),l=t(28606);let c=["className","elementType","ownerState","externalForwardedProps","getSlotOwnerState","internalForwardedProps"],d=["component","slots","slotProps"],u=["component"];function p(e,r){let{className:t,elementType:p,ownerState:m,externalForwardedProps:g,getSlotOwnerState:v,internalForwardedProps:x}=r,h=(0,a.Z)(r,c),{component:b,slots:f={[e]:void 0},slotProps:y={[e]:void 0}}=g,j=(0,a.Z)(g,d),Z=f[e]||p,w=(0,i.Z)(y[e],m),P=(0,l.Z)((0,o.Z)({className:t},h,{externalForwardedProps:"root"===e?j:void 0,externalSlotProps:w})),{props:{component:D},internalRef:k}=P,_=(0,a.Z)(P.props,u),F=(0,n.Z)(k,null==w?void 0:w.ref,r.ref),S=v?v(_):{},M=(0,o.Z)({},m,S),G="root"===e?D||b:D,I=(0,s.Z)(Z,(0,o.Z)({},"root"===e&&!b&&!f[e]&&x,"root"!==e&&!f[e]&&x,_,G&&{as:G},{ref:F}),M);return Object.keys(S).forEach(e=>{delete I[e]}),[Z,I]}},71042:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>i});var o=t(10326),a=t(78439),n=t.n(a),s=t(49474);function i({children:e}){return o.jsx(s.Z,{children:e})}i.propTypes={children:n().node}},69556:(e,r,t)=>{"use strict";t.d(r,{default:()=>D});var o=t(10326),a=t(17082),n=t(46374),s=t(75616),i=t(25609),l=t(25899),c=t(32247),d=t(35117),u=t(61929),p=t(50775),m=t(78439),g=t.n(m),v=t(71728),x=t(52188),h=t(33198),b=t(40537);function f({tour:e}){let{slug:r,ratingNumber:t,totalReviews:n,tourGuide:s}=e;return(0,o.jsxs)(a.Z,{spacing:2,direction:{xs:"column",md:"row"},justifyContent:{md:"space-between"},children:[(0,o.jsxs)(a.Z,{spacing:2,children:[o.jsx(i.Z,{variant:"h5",children:r}),(0,o.jsxs)(a.Z,{spacing:.5,direction:"row",alignItems:"center",children:[o.jsx(p.Z,{icon:"carbon:star-filled",sx:{color:"warning.main"}}),o.jsx(v.Z,{sx:{typography:"h6"},children:Number.isInteger(t)?`${t}.0`:t}),n&&(0,o.jsxs)(x.Z,{variant:"body2",sx:{color:"text.secondary"},children:["(",(0,b.v1)(n)," reviews)"]})]})]}),(0,o.jsxs)(a.Z,{direction:"row",alignItems:"center",spacing:1.5,children:[o.jsx(h.Z,{src:s?.avatarUrl}),(0,o.jsxs)("div",{children:[o.jsx(i.Z,{variant:"body2",sx:{color:"text.disabled"},children:"Tour guide by"}),o.jsx(i.Z,{variant:"subtitle2",children:s?.name})]})]})]})}f.propTypes={tour:g().shape({slug:g().string,ratingNumber:g().number,totalReviews:g().number,tourGuide:g().shape({avatarUrl:g().string,name:g().string})})};var y=t(99207),j=t(57957);function Z(){return(0,o.jsxs)(a.Z,{spacing:3,sx:{p:5,borderRadius:2,border:e=>`dashed 1px ${e.palette.divider}`},children:[o.jsx(i.Z,{variant:"h5",children:"Booking Details"}),o.jsx(w,{icon:"carbon:calendar",label:"Departure day",value:(0,j.Mu)(new Date)}),o.jsx(w,{icon:"carbon:events",label:"Guests",value:"2 guest"}),o.jsx(y.Z,{sx:{borderStyle:"dashed"}}),o.jsx(w,{icon:"carbon:cube",label:"Booking code",value:"KU_H8SDM"}),o.jsx(w,{icon:"carbon:calendar",label:"Booking day",value:(0,j.Mu)(new Date)}),o.jsx(w,{icon:"carbon:receipt",label:"Total",value:(0,b.e_)(1112)}),o.jsx(w,{icon:"carbon:purchase",label:"Payment method",value:"Paypal"})]})}function w({icon:e,label:r,value:t}){return(0,o.jsxs)(a.Z,{direction:"row",alignItems:"center",sx:{typography:"body2",color:"text.secondary"},children:[o.jsx(p.Z,{icon:e,width:24,sx:{mr:1}})," ",r,o.jsx(i.Z,{variant:"subtitle2",sx:{color:"text.primary",flexGrow:1,textAlign:"right"},children:t})]})}w.propTypes={icon:g().oneOfType([g().string,g().element]),label:g().string,value:g().string};let P=d.as[1];function D(){let e=(0,c.F)("up","md");return(0,o.jsxs)(s.Z,{sx:{pt:5,pb:{xs:8,md:15},gap:10,display:"grid",alignItems:"flex-start",gridTemplateColumns:{md:"repeat(2, 1fr)"}},children:[e&&o.jsx(u.Z,{alt:"cover",src:P.coverUrl,ratio:"3/4",sx:{borderRadius:2}}),(0,o.jsxs)(a.Z,{spacing:5,children:[o.jsx(i.Z,{variant:"h2",children:"Completed \uD83C\uDF89"}),o.jsx(f,{tour:P}),o.jsx(Z,{}),(0,o.jsxs)(a.Z,{spacing:2.5,direction:{xs:"column",md:"row"},justifyContent:"center",children:[o.jsx(n.Z,{component:l.r,href:"/",variant:"outlined",size:"large",color:"inherit",startIcon:o.jsx(p.Z,{icon:"carbon:chevron-left"}),children:"Back Home"}),o.jsx(n.Z,{variant:"contained",size:"large",color:"inherit",startIcon:o.jsx(p.Z,{icon:"carbon:package"}),children:"Download Invoice"})]})]})]})}},40537:(e,r,t)=>{"use strict";function o(){return{code:"en-US",currency:"USD"}}function a(e){let{code:r,currency:t}=o();if(!e)return"";let a=Number(e);return new Intl.NumberFormat(r,{style:"currency",currency:t,minimumFractionDigits:0,maximumFractionDigits:2}).format(a)}function n(e){let{code:r}=o();if(!e)return"";let t=Number(e)/100;return new Intl.NumberFormat(r,{style:"percent",minimumFractionDigits:0,maximumFractionDigits:1}).format(t)}function s(e){let{code:r}=o();if(!e)return"";let t=Number(e);return new Intl.NumberFormat(r,{notation:"compact",maximumFractionDigits:2}).format(t).replace(/[A-Z]/g,e=>e.toLowerCase())}t.d(r,{e_:()=>a,f2:()=>n,v1:()=>s})},57957:(e,r,t)=>{"use strict";t.d(r,{Mu:()=>a});var o=t(24487);function a(e,r){return e?(0,o.Z)(new Date(e),r||"dd MMM yyyy"):""}},35415:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>o});let o=(0,t(68570).createProxy)(String.raw`/home/dagi00/Documents/GitHub/site/src/app/travel/order-completed/layout.js#default`)},38396:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>s,metadata:()=>n});var o=t(19510);let a=(0,t(68570).createProxy)(String.raw`/home/dagi00/Documents/GitHub/site/src/sections/_travel/view/travel-order-completed-view.js#default`),n={title:"Travel: Order Completed"};function s(){return o.jsx(a,{})}}};var r=require("../../../webpack-runtime.js");r.C(e);var t=e=>r(r.s=e),o=r.X(0,[7576,2666,9163,2765,476,7042,5117,9474],()=>t(77473));module.exports=o})();