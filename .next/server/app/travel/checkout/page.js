(()=>{var e={};e.id=839,e.ids=[839],e.modules={72934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},54580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},45869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},47352:(e,r,t)=>{"use strict";t.r(r),t.d(r,{GlobalError:()=>a.a,__next_app__:()=>p,originalPathname:()=>u,pages:()=>c,routeModule:()=>h,tree:()=>d}),t(45002),t(60010),t(41510),t(29372),t(54864);var n=t(23191),i=t(88716),s=t(37922),a=t.n(s),o=t(95231),l={};for(let e in o)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>o[e]);t.d(r,l);let d=["",{children:["travel",{children:["checkout",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(t.bind(t,45002)),"/home/dagi00/Documents/GitHub/site/src/app/travel/checkout/page.js"]}]},{layout:[()=>Promise.resolve().then(t.bind(t,60010)),"/home/dagi00/Documents/GitHub/site/src/app/travel/checkout/layout.js"]}]},{}]},{layout:[()=>Promise.resolve().then(t.bind(t,41510)),"/home/dagi00/Documents/GitHub/site/src/app/layout.js"],loading:[()=>Promise.resolve().then(t.bind(t,29372)),"/home/dagi00/Documents/GitHub/site/src/app/loading.js"],"not-found":[()=>Promise.resolve().then(t.bind(t,54864)),"/home/dagi00/Documents/GitHub/site/src/app/not-found.js"]}],c=["/home/dagi00/Documents/GitHub/site/src/app/travel/checkout/page.js"],u="/travel/checkout/page",p={require:t,loadChunk:()=>Promise.resolve()},h=new n.AppPageRouteModule({definition:{kind:i.x.APP_PAGE,page:"/travel/checkout/page",pathname:"/travel/checkout",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},91931:(e,r,t)=>{Promise.resolve().then(t.bind(t,56874))},13339:(e,r,t)=>{Promise.resolve().then(t.bind(t,88307))},42294:(e,r,t)=>{"use strict";t.d(r,{Z:()=>Z});var n=t(91367),i=t(45353),s=t(17577),a=t(54641),o=t(87816),l=t(88634),d=t(91703),c=t(54117),u=t(87700),p=t(65597),h=t(45417),m=t(10326);let x=["children","disabled","id","loading","loadingIndicator","loadingPosition","variant"],g=e=>{let{loading:r,loadingPosition:t,classes:n}=e,s={root:["root",r&&"loading"],startIcon:[r&&`startIconLoading${(0,a.Z)(t)}`],endIcon:[r&&`endIconLoading${(0,a.Z)(t)}`],loadingIndicator:["loadingIndicator",r&&`loadingIndicator${(0,a.Z)(t)}`]},o=(0,l.Z)(s,h._,n);return(0,i.Z)({},n,o)},v=e=>"ownerState"!==e&&"theme"!==e&&"sx"!==e&&"as"!==e&&"classes"!==e,f=(0,d.ZP)(u.Z,{shouldForwardProp:e=>v(e)||"classes"===e,name:"MuiLoadingButton",slot:"Root",overridesResolver:(e,r)=>[r.root,r.startIconLoadingStart&&{[`& .${h.Z.startIconLoadingStart}`]:r.startIconLoadingStart},r.endIconLoadingEnd&&{[`& .${h.Z.endIconLoadingEnd}`]:r.endIconLoadingEnd}]})(({ownerState:e,theme:r})=>(0,i.Z)({[`& .${h.Z.startIconLoadingStart}, & .${h.Z.endIconLoadingEnd}`]:{transition:r.transitions.create(["opacity"],{duration:r.transitions.duration.short}),opacity:0}},"center"===e.loadingPosition&&{transition:r.transitions.create(["background-color","box-shadow","border-color"],{duration:r.transitions.duration.short}),[`&.${h.Z.loading}`]:{color:"transparent"}},"start"===e.loadingPosition&&e.fullWidth&&{[`& .${h.Z.startIconLoadingStart}, & .${h.Z.endIconLoadingEnd}`]:{transition:r.transitions.create(["opacity"],{duration:r.transitions.duration.short}),opacity:0,marginRight:-8}},"end"===e.loadingPosition&&e.fullWidth&&{[`& .${h.Z.startIconLoadingStart}, & .${h.Z.endIconLoadingEnd}`]:{transition:r.transitions.create(["opacity"],{duration:r.transitions.duration.short}),opacity:0,marginLeft:-8}})),b=(0,d.ZP)("span",{name:"MuiLoadingButton",slot:"LoadingIndicator",overridesResolver:(e,r)=>{let{ownerState:t}=e;return[r.loadingIndicator,r[`loadingIndicator${(0,a.Z)(t.loadingPosition)}`]]}})(({theme:e,ownerState:r})=>(0,i.Z)({position:"absolute",visibility:"visible",display:"flex"},"start"===r.loadingPosition&&("outlined"===r.variant||"contained"===r.variant)&&{left:"small"===r.size?10:14},"start"===r.loadingPosition&&"text"===r.variant&&{left:6},"center"===r.loadingPosition&&{left:"50%",transform:"translate(-50%)",color:(e.vars||e).palette.action.disabled},"end"===r.loadingPosition&&("outlined"===r.variant||"contained"===r.variant)&&{right:"small"===r.size?10:14},"end"===r.loadingPosition&&"text"===r.variant&&{right:6},"start"===r.loadingPosition&&r.fullWidth&&{position:"relative",left:-10},"end"===r.loadingPosition&&r.fullWidth&&{position:"relative",right:-10})),Z=s.forwardRef(function(e,r){let t=(0,c.Z)({props:e,name:"MuiLoadingButton"}),{children:s,disabled:a=!1,id:l,loading:d=!1,loadingIndicator:u,loadingPosition:h="center",variant:v="text"}=t,Z=(0,n.Z)(t,x),y=(0,o.Z)(l),j=null!=u?u:(0,m.jsx)(p.Z,{"aria-labelledby":y,color:"inherit",size:16}),w=(0,i.Z)({},t,{disabled:a,loading:d,loadingIndicator:j,loadingPosition:h,variant:v}),k=g(w),P=d?(0,m.jsx)(b,{className:k.loadingIndicator,ownerState:w,children:j}):null;return(0,m.jsxs)(f,(0,i.Z)({disabled:a||d,id:y,ref:r},Z,{variant:v,classes:k,ownerState:w,children:["end"===w.loadingPosition?s:P,"end"===w.loadingPosition?P:s]}))})},33198:(e,r,t)=>{"use strict";t.d(r,{Z:()=>y});var n=t(91367),i=t(45353),s=t(17577),a=t(41135),o=t(88634),l=t(91703),d=t(54117),c=t(27522),u=t(10326);let p=(0,c.Z)((0,u.jsx)("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"Person");var h=t(71685),m=t(97898);function x(e){return(0,m.Z)("MuiAvatar",e)}(0,h.Z)("MuiAvatar",["root","colorDefault","circular","rounded","square","img","fallback"]);let g=["alt","children","className","component","imgProps","sizes","src","srcSet","variant"],v=e=>{let{classes:r,variant:t,colorDefault:n}=e;return(0,o.Z)({root:["root",t,n&&"colorDefault"],img:["img"],fallback:["fallback"]},x,r)},f=(0,l.ZP)("div",{name:"MuiAvatar",slot:"Root",overridesResolver:(e,r)=>{let{ownerState:t}=e;return[r.root,r[t.variant],t.colorDefault&&r.colorDefault]}})(({theme:e,ownerState:r})=>(0,i.Z)({position:"relative",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:40,height:40,fontFamily:e.typography.fontFamily,fontSize:e.typography.pxToRem(20),lineHeight:1,borderRadius:"50%",overflow:"hidden",userSelect:"none"},"rounded"===r.variant&&{borderRadius:(e.vars||e).shape.borderRadius},"square"===r.variant&&{borderRadius:0},r.colorDefault&&(0,i.Z)({color:(e.vars||e).palette.background.default},e.vars?{backgroundColor:e.vars.palette.Avatar.defaultBg}:{backgroundColor:"light"===e.palette.mode?e.palette.grey[400]:e.palette.grey[600]}))),b=(0,l.ZP)("img",{name:"MuiAvatar",slot:"Img",overridesResolver:(e,r)=>r.img})({width:"100%",height:"100%",textAlign:"center",objectFit:"cover",color:"transparent",textIndent:1e4}),Z=(0,l.ZP)(p,{name:"MuiAvatar",slot:"Fallback",overridesResolver:(e,r)=>r.fallback})({width:"75%",height:"75%"}),y=s.forwardRef(function(e,r){let t=(0,d.Z)({props:e,name:"MuiAvatar"}),{alt:o,children:l,className:c,component:p="div",imgProps:h,sizes:m,src:x,srcSet:y,variant:j="circular"}=t,w=(0,n.Z)(t,g),k=null,P=function({crossOrigin:e,referrerPolicy:r,src:t,srcSet:n}){let[i,a]=s.useState(!1);return s.useEffect(()=>{if(!t&&!n)return;a(!1);let i=!0,s=new Image;return s.onload=()=>{i&&a("loaded")},s.onerror=()=>{i&&a("error")},s.crossOrigin=e,s.referrerPolicy=r,s.src=t,n&&(s.srcset=n),()=>{i=!1}},[e,r,t,n]),i}((0,i.Z)({},h,{src:x,srcSet:y})),I=x||y,D=I&&"error"!==P,S=(0,i.Z)({},t,{colorDefault:!D,component:p,variant:j}),C=v(S);return k=D?(0,u.jsx)(b,(0,i.Z)({alt:o,srcSet:y,src:x,sizes:m,ownerState:S,className:C.img},h)):null!=l?l:I&&o?o[0]:(0,u.jsx)(Z,{ownerState:S,className:C.fallback}),(0,u.jsx)(f,(0,i.Z)({as:p,ownerState:S,className:(0,a.Z)(C.root,c),ref:r},w,{children:k}))})},34039:(e,r,t)=>{"use strict";t.d(r,{Z:()=>f});var n=t(45353),i=t(91367),s=t(17577),a=t(41135),o=t(88634),l=t(91703),d=t(54117),c=t(90313),u=t(71685),p=t(97898);function h(e){return(0,p.Z)("MuiCard",e)}(0,u.Z)("MuiCard",["root"]);var m=t(10326);let x=["className","raised"],g=e=>{let{classes:r}=e;return(0,o.Z)({root:["root"]},h,r)},v=(0,l.ZP)(c.Z,{name:"MuiCard",slot:"Root",overridesResolver:(e,r)=>r.root})(()=>({overflow:"hidden"})),f=s.forwardRef(function(e,r){let t=(0,d.Z)({props:e,name:"MuiCard"}),{className:s,raised:o=!1}=t,l=(0,i.Z)(t,x),c=(0,n.Z)({},t,{raised:o}),u=g(c);return(0,m.jsx)(v,(0,n.Z)({className:(0,a.Z)(u.root,s),elevation:o?8:void 0,ref:r,ownerState:c},l))})},65597:(e,r,t)=>{"use strict";t.d(r,{Z:()=>I});var n=t(91367),i=t(45353),s=t(17577),a=t(41135),o=t(88634),l=t(8106),d=t(54641),c=t(54117),u=t(91703),p=t(1282),h=t(10326);let m=["className","color","disableShrink","size","style","thickness","value","variant"],x=e=>e,g,v,f,b,Z=(0,l.F4)(g||(g=x`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`)),y=(0,l.F4)(v||(v=x`
  0% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: 0;
  }

  50% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -15px;
  }

  100% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -125px;
  }
`)),j=e=>{let{classes:r,variant:t,color:n,disableShrink:i}=e,s={root:["root",t,`color${(0,d.Z)(n)}`],svg:["svg"],circle:["circle",`circle${(0,d.Z)(t)}`,i&&"circleDisableShrink"]};return(0,o.Z)(s,p.C,r)},w=(0,u.ZP)("span",{name:"MuiCircularProgress",slot:"Root",overridesResolver:(e,r)=>{let{ownerState:t}=e;return[r.root,r[t.variant],r[`color${(0,d.Z)(t.color)}`]]}})(({ownerState:e,theme:r})=>(0,i.Z)({display:"inline-block"},"determinate"===e.variant&&{transition:r.transitions.create("transform")},"inherit"!==e.color&&{color:(r.vars||r).palette[e.color].main}),({ownerState:e})=>"indeterminate"===e.variant&&(0,l.iv)(f||(f=x`
      animation: ${0} 1.4s linear infinite;
    `),Z)),k=(0,u.ZP)("svg",{name:"MuiCircularProgress",slot:"Svg",overridesResolver:(e,r)=>r.svg})({display:"block"}),P=(0,u.ZP)("circle",{name:"MuiCircularProgress",slot:"Circle",overridesResolver:(e,r)=>{let{ownerState:t}=e;return[r.circle,r[`circle${(0,d.Z)(t.variant)}`],t.disableShrink&&r.circleDisableShrink]}})(({ownerState:e,theme:r})=>(0,i.Z)({stroke:"currentColor"},"determinate"===e.variant&&{transition:r.transitions.create("stroke-dashoffset")},"indeterminate"===e.variant&&{strokeDasharray:"80px, 200px",strokeDashoffset:0}),({ownerState:e})=>"indeterminate"===e.variant&&!e.disableShrink&&(0,l.iv)(b||(b=x`
      animation: ${0} 1.4s ease-in-out infinite;
    `),y)),I=s.forwardRef(function(e,r){let t=(0,c.Z)({props:e,name:"MuiCircularProgress"}),{className:s,color:o="primary",disableShrink:l=!1,size:d=40,style:u,thickness:p=3.6,value:x=0,variant:g="indeterminate"}=t,v=(0,n.Z)(t,m),f=(0,i.Z)({},t,{color:o,disableShrink:l,size:d,thickness:p,value:x,variant:g}),b=j(f),Z={},y={},I={};if("determinate"===g){let e=2*Math.PI*((44-p)/2);Z.strokeDasharray=e.toFixed(3),I["aria-valuenow"]=Math.round(x),Z.strokeDashoffset=`${((100-x)/100*e).toFixed(3)}px`,y.transform="rotate(-90deg)"}return(0,h.jsx)(w,(0,i.Z)({className:(0,a.Z)(b.root,s),style:(0,i.Z)({width:d,height:d},y,u),ownerState:f,ref:r,role:"progressbar"},I,v,{children:(0,h.jsx)(k,{className:b.svg,ownerState:f,viewBox:"22 22 44 44",children:(0,h.jsx)(P,{className:b.circle,style:Z,ownerState:f,cx:44,cy:44,r:(44-p)/2,fill:"none",strokeWidth:p})})}))})},56874:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>o});var n=t(10326),i=t(78439),s=t.n(i),a=t(49474);function o({children:e}){return n.jsx(a.Z,{children:e})}o.propTypes={children:s().node}},52868:(e,r,t)=>{"use strict";t.d(r,{Z:()=>p});var n=t(10326),i=t(78439),s=t.n(i),a=t(17577),o=t(52188),l=t(25609),d=t(23743),c=t(32247);let u=(0,a.forwardRef)(({asLink:e,variant:r="body1",line:t=2,persistent:i=!1,children:s,sx:a,...u},p)=>{let{lineHeight:h}=function(e){let r=(0,d.Z)(),t=(0,c.z)(),n=r.breakpoints.up("xl"===t?"lg":t),i=Math.round(16*parseFloat((("h1"===e||"h2"===e||"h3"===e||"h4"===e||"h5"===e||"h6"===e)&&r.typography[e][n]?r.typography[e][n]:r.typography[e]).fontSize)),s=Number(r.typography[e].lineHeight)*i,{fontWeight:a,letterSpacing:o}=r.typography[e];return{fontSize:i,lineHeight:s,fontWeight:a,letterSpacing:o}}(r),m={overflow:"hidden",textOverflow:"ellipsis",display:"-webkit-box",WebkitLineClamp:t,WebkitBoxOrient:"vertical",...i&&{height:h*t},...a};return e?n.jsx(o.Z,{color:"inherit",ref:p,variant:r,sx:{...m},...u,children:s}):n.jsx(l.Z,{ref:p,variant:r,sx:{...m},...u,children:s})});u.propTypes={asLink:s().bool,children:s().node,line:s().number,persistent:s().bool,sx:s().object,variant:s().oneOf(["body1","body2","button","caption","h1","h2","h3","h4","h5","h6","inherit","overline","subtitle1","subtitle2"])};let p=u},21791:(e,r,t)=>{"use strict";t.d(r,{Z:()=>v});var n=t(10326),i=t(78439),s=t.n(i),a=t(17577),o=t(17082),l=t(99207),d=t(9811),c=t(25609),u=t(22115),p=t(54527),h=t(69258),m=t(43055),x=t(82626),g=t(50775);function v({guests:e,onIncrementGuests:r,onDecreaseGuests:t,sx:i,...s}){let c=e.children+e.adults,[m,x]=(0,a.useState)(null),v=(0,a.useCallback)(e=>{x(e.currentTarget)},[]),b=(0,a.useCallback)(()=>{x(null)},[]);return(0,n.jsxs)(n.Fragment,{children:[n.jsx(p.ZP,{fullWidth:!0,value:c>0?`${c} Guests`:"",placeholder:"Guests",startAdornment:n.jsx(u.Z,{position:"start",children:n.jsx(g.Z,{width:24,icon:"carbon:events",sx:{mr:1,color:"text.disabled"}})}),onClick:v,sx:{height:52,[`& .${h.Z.input}`]:{typography:"subtitle1"},...i},...s}),n.jsx(d.ZP,{open:!!m,onClose:b,anchorEl:m,anchorOrigin:{vertical:"bottom",horizontal:"left"},transformOrigin:{vertical:"top",horizontal:"left"},slotProps:{paper:{sx:{width:360,p:3}}},children:(0,n.jsxs)(o.Z,{spacing:2.5,divider:n.jsx(l.Z,{sx:{borderStyle:"dashed"}}),children:[n.jsx(f,{title:"Adults",caption:"Ages 13 or above",total:e.adults,onDecrease:t,onIncrement:r}),n.jsx(f,{title:"Children",caption:"Ages 2 - 12",total:e.children,onDecrease:()=>t("children"),onIncrement:()=>r("children")})]})})]})}function f({title:e,caption:r,total:t,onDecrease:i,onIncrement:s}){return(0,n.jsxs)(o.Z,{direction:"row",children:[(0,n.jsxs)(o.Z,{spacing:.5,sx:{flexGrow:1},children:[n.jsx(c.Z,{variant:"subtitle1",children:e}),n.jsx(c.Z,{variant:"caption",sx:{color:"text.disabled"},children:r})]}),(0,n.jsxs)(o.Z,{direction:"row",alignItems:"center",justifyContent:"space-between",sx:{width:100,typography:"subtitle1"},children:[n.jsx(m.Z,{disabled:t<1,onClick:i,sx:{p:0,[`&.${x.Z.disabled}`]:{opacity:.72}},children:n.jsx(g.Z,{icon:"carbon:subtract-alt"})}),t,n.jsx(m.Z,{onClick:s,sx:{p:0},children:n.jsx(g.Z,{icon:"carbon:add-alt"})})]})]})}v.propTypes={guests:s().shape({adults:s().number,children:s().number}),onDecreaseGuests:s().func,onIncrementGuests:s().func,sx:s().object},f.propTypes={caption:s().string,onDecrease:s().func,onIncrement:s().func,title:s().string,total:s().number}},82348:(e,r,t)=>{"use strict";t.d(r,{Z:()=>c});var n=t(10326),i=t(78439),s=t.n(i),a=t(22115),o=t(69258),l=t(7678),d=t(50775);function c({departureDay:e,onChangeDepartureDay:r,sx:t}){return n.jsx(l.O,{value:e,onChange:r,slotProps:{textField:{fullWidth:!0,variant:"standard",InputProps:{disableUnderline:!0,startAdornment:n.jsx(a.Z,{position:"start",children:n.jsx(d.Z,{width:24,icon:"carbon:calendar",sx:{color:"text.disabled",mr:1}})})},sx:{[`& .${o.Z.input}`]:{py:0,height:52,typography:"subtitle1"},...t}}}})}c.propTypes={departureDay:s().instanceOf(Date),onChangeDepartureDay:s().func,sx:s().object}},88307:(e,r,t)=>{"use strict";t.d(r,{default:()=>U});var n=t(10326),i=t(10123),s=t(78439),a=t.n(s),o=t(74723),l=t(17577),d=t(1774),c=t(71728),u=t(17082),p=t(99207),h=t(75616),m=t(57570),x=t(25609),g=t(3479),v=t(35248),f=t(94621),b=t(35117),Z=t(63917),y=t(52188),j=t(34039),w=t(33198),k=t(42294),P=t(69258),I=t(46874),D=t(32247),S=t(40537),C=t(61929),A=t(50775),N=t(52868),M=t(82348),R=t(21791);function F({tour:e,guests:r,departureDay:t,isSubmitting:i,onDecreaseGuests:s,onIncrementGuests:a,onChangeDepartureDay:o}){let l=(0,D.F)("up","sm"),{coverUrl:d,slug:h,ratingNumber:m,totalReviews:g,price:v,tourGuide:f}=e;return(0,n.jsxs)(j.Z,{children:[(0,n.jsxs)(c.Z,{sx:{p:4,pb:0,gap:3,display:"grid",gridTemplateColumns:{xs:"repeat(1, 1fr)",sm:"repeat(2, 1fr)",md:"repeat(1, 1fr)",lg:"repeat(2, 1fr)"}},children:[n.jsx(C.Z,{alt:h,src:d,ratio:"1/1",sx:{borderRadius:2}}),(0,n.jsxs)(u.Z,{children:[n.jsx(N.Z,{variant:"h5",sx:{mb:2},children:h}),(0,n.jsxs)(u.Z,{spacing:.5,direction:"row",alignItems:"center",children:[n.jsx(A.Z,{icon:"carbon:star-filled",sx:{color:"warning.main"}}),n.jsx(c.Z,{sx:{typography:"h6"},children:Number.isInteger(m)?`${m}.0`:m}),g&&(0,n.jsxs)(y.Z,{variant:"body2",sx:{color:"text.secondary"},children:["(",(0,S.v1)(g)," reviews)"]})]}),n.jsx(p.Z,{sx:{borderStyle:"dashed",my:2.5}}),(0,n.jsxs)(u.Z,{direction:"row",alignItems:"center",spacing:1.5,children:[n.jsx(w.Z,{src:f.avatarUrl}),(0,n.jsxs)("div",{children:[n.jsx(x.Z,{variant:"body2",sx:{color:"text.disabled"},children:"Tour guide by"}),n.jsx(x.Z,{variant:"subtitle2",children:f.name})]})]})]})]}),(0,n.jsxs)(u.Z,{sx:{p:4,pb:3},children:[(0,n.jsxs)(u.Z,{spacing:2.5,direction:{xs:"column",sm:"row"},sx:{p:2.5,borderRadius:2,color:"text.disabled",bgcolor:"background.neutral"},children:[(0,n.jsxs)(u.Z,{direction:"row",spacing:1.5,sx:{width:1},children:[n.jsx(A.Z,{icon:"carbon:events",width:24}),(0,n.jsxs)(u.Z,{spacing:.5,children:[n.jsx(x.Z,{variant:"caption",children:"Departure day"}),n.jsx(M.Z,{departureDay:t,onChangeDepartureDay:o,sx:{[`& .${P.Z.input}`]:{typography:"subtitle1"},[`& .${I.Z.root}`]:{display:"none"}}})]})]}),l&&n.jsx(p.Z,{flexItem:!0,orientation:"vertical",sx:{borderStyle:"dashed"}}),(0,n.jsxs)(u.Z,{direction:"row",spacing:1.5,sx:{width:1},children:[n.jsx(A.Z,{icon:"carbon:calendar",width:24}),(0,n.jsxs)(u.Z,{spacing:.5,children:[n.jsx(x.Z,{variant:"caption",children:"Guests"}),n.jsx(R.Z,{startAdornment:null,guests:r,onDecreaseGuests:s,onIncrementGuests:a,sx:{height:"unset"}})]})]})]}),(0,n.jsxs)(u.Z,{spacing:1,direction:"row",alignItems:"center",justifyContent:"space-between",sx:{mt:3,mb:2},children:[n.jsx(x.Z,{variant:"body2",sx:{color:"text.disabled"},children:"Service charge"}),n.jsx(x.Z,{variant:"body2",children:(0,S.e_)(v)})]}),(0,n.jsxs)(u.Z,{spacing:1,direction:"row",alignItems:"center",justifyContent:"space-between",children:[n.jsx(x.Z,{variant:"body2",sx:{color:"text.disabled"},children:"Discount"}),n.jsx(x.Z,{variant:"body2",children:"-"})]})]}),n.jsx(p.Z,{sx:{borderStyle:"dashed"}}),(0,n.jsxs)(u.Z,{spacing:3,sx:{p:3},children:[(0,n.jsxs)(u.Z,{spacing:1,direction:"row",alignItems:"center",justifyContent:"space-between",children:[n.jsx(x.Z,{variant:"h5",children:"Total"}),n.jsx(x.Z,{variant:"h5",children:(0,S.e_)(v)})]}),n.jsx(k.Z,{type:"submit",size:"large",variant:"contained",color:"inherit",loading:i,children:"Complete Booking"})]})]})}F.propTypes={isSubmitting:a().bool,onDecreaseGuests:a().func,onIncrementGuests:a().func,onChangeDepartureDay:a().func,departureDay:a().instanceOf(Date),guests:a().shape({adults:a().number,children:a().number}),tour:a().shape({slug:a().string,price:a().number,coverUrl:a().string,ratingNumber:a().number,totalReviews:a().number,tourGuide:a().shape({name:a().string,avatarUrl:a().string})})};var $=t(21558),G=t(22553),L=t(36418),_=t(2980),T=t(51596);let X=[{label:"Paypal",value:"paypal",description:"You will be redirected to PayPal website to complete your purchase securely."},{label:"Credit / Debit",value:"creditcard",description:"We support Mastercard, Visa, Discover and Stripe."}];function E(){let{control:e}=(0,o.Gc)();return n.jsx(o.Qr,{name:"paymentMethods.methods",control:e,render:({field:e})=>n.jsx(L.Z,{...e,children:n.jsx(u.Z,{spacing:3,children:X.map((r,t)=>n.jsx(O,{option:r,selected:r.value===e.value,isCredit:"creditcard"===r.value&&r.value===e.value},t))})})})}function O({option:e,isCredit:r,selected:t}){let{value:i,label:s,description:a}=e,o=(0,n.jsxs)(u.Z,{direction:"row",alignItems:"center",children:[(0,n.jsxs)(u.Z,{spacing:.5,flexGrow:1,children:[n.jsx(c.Z,{component:"span",sx:{typography:"subtitle1"},children:s}),n.jsx(c.Z,{component:"span",sx:{typography:"caption",color:"text.secondary"},children:a})]}),n.jsx(u.Z,{spacing:1,direction:"row",alignItems:"center",children:"creditcard"===i?(0,n.jsxs)(n.Fragment,{children:[n.jsx(A.Z,{icon:"logos:mastercard",width:24}),n.jsx(A.Z,{icon:"logos:visa",width:24})]}):n.jsx(A.Z,{icon:"logos:paypal",width:24})})]});return(0,n.jsxs)(c.Z,{sx:{borderRadius:1,border:e=>`solid 1px ${(0,G.Fq)(e.palette.grey[500],.24)}`,...t&&{boxShadow:e=>`0 0 0 2px ${e.palette.text.primary}`}},children:[n.jsx(_.Z,{value:i,control:n.jsx($.Z,{disableRipple:!0,checkedIcon:n.jsx(A.Z,{icon:"carbon:checkmark-outline"}),sx:{mx:1}}),label:o,sx:{m:0,py:2,pr:2.5,width:1,[`& .${T.Z.label}`]:{width:1}}}),r&&n.jsx(q,{})]})}function q(){return(0,n.jsxs)(u.Z,{spacing:2.5,sx:{px:3,pb:3},children:[n.jsx(Z.au,{name:"paymentMethods.card.cardNumber",label:"Card Number",placeholder:"XXXX XXXX XXXX XXXX"}),n.jsx(Z.au,{name:"paymentMethods.card.cardHolder",label:"Card Holder",placeholder:"JOHN DOE"}),(0,n.jsxs)(u.Z,{spacing:2,direction:"row",children:[n.jsx(Z.au,{name:"paymentMethods.card.expirationDate",label:"Expiration Date",placeholder:"MM/YY"}),n.jsx(Z.au,{name:"paymentMethods.card.ccv",label:"CVV/CVC",placeholder:"***"})]}),(0,n.jsxs)(u.Z,{direction:"row",alignItems:"center",sx:{typography:"caption",color:"text.disabled"},children:[n.jsx(A.Z,{icon:"carbon:locked",sx:{mr:.5}}),"Your transaction is secured with SSL encryption"]})]})}O.propTypes={isCredit:a().bool,option:a().shape({label:a().string,value:a().string,description:a().string}),selected:a().bool};var H=t(21969),z=t(5041);function B({sameBilling:e,onChangeSameBilling:r}){return(0,n.jsxs)(u.Z,{spacing:5,children:[(0,n.jsxs)("div",{children:[n.jsx(x.Z,{variant:"overline",sx:{color:"text.secondary",mb:3,display:"block"},children:"Billing Address"}),(0,n.jsxs)(u.Z,{spacing:2.5,children:[(0,n.jsxs)(u.Z,{spacing:{xs:2.5,md:2},direction:{xs:"column",md:"row"},children:[n.jsx(Z.au,{name:"billingAddress.firstName",label:"First Name"}),n.jsx(Z.au,{name:"billingAddress.lastName",label:"Last Name"})]}),n.jsx(Z.au,{name:"billingAddress.fullAddress",label:"Full Address"}),n.jsx(Z.au,{name:"billingAddress.fullAddress2",label:"Full Address2"})]})]}),(0,n.jsxs)("div",{children:[(0,n.jsxs)(u.Z,{spacing:3,direction:{xs:"column",md:"row"},justifyContent:{md:"space-between"},alignItems:{xs:"flex-start",md:"center"},children:[n.jsx(x.Z,{variant:"overline",sx:{color:"text.secondary"},children:"Shipping Address"}),n.jsx(_.Z,{control:n.jsx(H.Z,{checked:e,onClick:r}),label:"Same as Billing Address",labelPlacement:"start"})]}),n.jsx(z.Z,{in:!e,unmountOnExit:!0,sx:{...!e&&{mt:3}},children:(0,n.jsxs)(u.Z,{spacing:2.5,children:[(0,n.jsxs)(u.Z,{spacing:{xs:2.5,md:2},direction:{xs:"column",md:"row"},children:[n.jsx(Z.au,{name:"shippingAddress.firstName",label:"First Name"}),n.jsx(Z.au,{name:"shippingAddress.lastName",label:"Last Name"})]}),n.jsx(Z.au,{name:"shippingAddress.fullAddress",label:"Full Address"}),n.jsx(Z.au,{name:"shippingAddress.fullAddress2",label:"Full Address2"})]})})]})]})}function U(){let e=(0,v.tv)(),r=(0,f.k)(),[t,s]=(0,l.useState)(new Date),[a,c]=(0,l.useState)({adults:2,children:1}),y=i.Ry().shape({billingAddress:i.Ry().shape({firstName:i.Z_().required("First name is required"),lastName:i.Z_().required("Last name is required"),fullAddress:i.Z_().required("Full address is required")})}),j=(0,o.cI)({resolver:(0,d.X)(y),defaultValues:{billingAddress:{firstName:"",lastName:"",fullAddress:"",fullAddress2:""},shippingAddress:{firstName:"",lastName:"",fullAddress:"",fullAddress2:""},paymentMethods:{methods:"paypal",card:{cardNumber:"",cardHolder:"",expirationDate:"",ccv:""}}}}),{reset:w,handleSubmit:k,formState:{isSubmitting:P}}=j,I=k(async r=>{try{await new Promise(e=>setTimeout(e,500)),w(),e.push(g.H.travel.orderCompleted),console.log("DATA",r)}catch(e){console.error(e)}}),D=(0,l.useCallback)(e=>{s(e)},[]),S=(0,l.useCallback)(e=>{"children"===e?c({...a,children:a.children+1}):c({...a,adults:a.adults+1})},[a]),C=(0,l.useCallback)(e=>{"children"===e?c({...a,children:a.children-1}):c({...a,adults:a.adults-1})},[a]);return(0,n.jsxs)(h.Z,{sx:{overflow:"hidden",pt:5,pb:{xs:8,md:15}},children:[n.jsx(x.Z,{variant:"h2",sx:{mb:5},children:"Confirm and Pay"}),n.jsx(Z.ZP,{methods:j,onSubmit:I,children:(0,n.jsxs)(m.Z,{container:!0,spacing:{xs:5,md:8},children:[n.jsx(m.Z,{xs:12,md:7,children:(0,n.jsxs)(u.Z,{children:[n.jsx(V,{title:"Shipping Information",step:"1"}),n.jsx(B,{sameBilling:r.value,onChangeSameBilling:r.onToggle}),n.jsx(p.Z,{sx:{my:5,borderStyle:"dashed"}}),n.jsx(V,{title:"Payment Methods",step:"2"}),n.jsx(E,{})]})}),n.jsx(m.Z,{xs:12,md:5,children:n.jsx(F,{guests:a,tour:b.as[0],departureDay:t,isSubmitting:P,onDecreaseGuests:C,onIncrementGuests:S,onChangeDepartureDay:D})})]})})]})}function V({step:e,title:r}){return(0,n.jsxs)(u.Z,{direction:"row",alignItems:"center",sx:{mb:3,typography:"h5"},children:[n.jsx(c.Z,{sx:{mr:1.5,width:28,height:28,flexShrink:0,display:"flex",typography:"h6",borderRadius:"50%",alignItems:"center",bgcolor:"primary.main",justifyContent:"center",color:"primary.contrastText"},children:e}),r]})}B.propTypes={onChangeSameBilling:a().func,sameBilling:a().bool},V.propTypes={step:a().string,title:a().string}},40537:(e,r,t)=>{"use strict";function n(){return{code:"en-US",currency:"USD"}}function i(e){let{code:r,currency:t}=n();if(!e)return"";let i=Number(e);return new Intl.NumberFormat(r,{style:"currency",currency:t,minimumFractionDigits:0,maximumFractionDigits:2}).format(i)}function s(e){let{code:r}=n();if(!e)return"";let t=Number(e)/100;return new Intl.NumberFormat(r,{style:"percent",minimumFractionDigits:0,maximumFractionDigits:1}).format(t)}function a(e){let{code:r}=n();if(!e)return"";let t=Number(e);return new Intl.NumberFormat(r,{notation:"compact",maximumFractionDigits:2}).format(t).replace(/[A-Z]/g,e=>e.toLowerCase())}t.d(r,{e_:()=>i,f2:()=>s,v1:()=>a})},60010:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>n});let n=(0,t(68570).createProxy)(String.raw`/home/dagi00/Documents/GitHub/site/src/app/travel/checkout/layout.js#default`)},45002:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>a,metadata:()=>s});var n=t(19510);let i=(0,t(68570).createProxy)(String.raw`/home/dagi00/Documents/GitHub/site/src/sections/_travel/view/travel-checkout-view.js#default`),s={title:"Travel: Checkout"};function a(){return n.jsx(i,{})}},1774:(e,r,t)=>{"use strict";t.d(r,{X:()=>d});var n=t(74723),i=function(e,r,t){if(e&&"reportValidity"in e){var i=(0,n.U2)(t,r);e.setCustomValidity(i&&i.message||""),e.reportValidity()}},s=function(e,r){var t=function(t){var n=r.fields[t];n&&n.ref&&"reportValidity"in n.ref?i(n.ref,t,e):n.refs&&n.refs.forEach(function(r){return i(r,t,e)})};for(var n in r.fields)t(n)},a=function(e,r){r.shouldUseNativeValidation&&s(e,r);var t={};for(var i in e){var a=(0,n.U2)(r.fields,i),d=Object.assign(e[i]||{},{ref:a&&a.ref});if(l(r.names||Object.keys(e),i)){var c=Object.assign({},o((0,n.U2)(t,i)));(0,n.t8)(c,"root",d),(0,n.t8)(t,i,c)}else(0,n.t8)(t,i,d)}return t},o=function(e){return Array.isArray(e)?e.filter(Boolean):[]},l=function(e,r){return e.some(function(e){return e.startsWith(r+".")})};function d(e,r,t){return void 0===r&&(r={}),void 0===t&&(t={}),function(i,o,l){try{return Promise.resolve(function(n,a){try{var d=(r.context,Promise.resolve(e["sync"===t.mode?"validateSync":"validate"](i,Object.assign({abortEarly:!1},r,{context:o}))).then(function(e){return l.shouldUseNativeValidation&&s({},l),{values:t.raw?i:e,errors:{}}}))}catch(e){return a(e)}return d&&d.then?d.then(void 0,a):d}(0,function(e){var r;if(!e.inner)throw e;return{values:{},errors:a((r=!l.shouldUseNativeValidation&&"all"===l.criteriaMode,(e.inner||[]).reduce(function(e,t){if(e[t.path]||(e[t.path]={message:t.message,type:t.type}),r){var i=e[t.path].types,s=i&&i[t.type];e[t.path]=(0,n.KN)(t.path,r,e,t.type,s?[].concat(s,t.message):t.message)}return e},{})),l)}}))}catch(e){return Promise.reject(e)}}}}};var r=require("../../../webpack-runtime.js");r.C(e);var t=e=>r(r.s=e),n=r.X(0,[8125,8e3,9163,6343,7508,4350,3405,4209,8623,4941,2960,7678,476,7042,5117,9474,3917],()=>t(47352));module.exports=n})();