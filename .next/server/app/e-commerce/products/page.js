(()=>{var e={};e.id=190,e.ids=[190],e.modules={72934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},54580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},45869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},19674:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>o.a,__next_app__:()=>h,originalPathname:()=>p,pages:()=>d,routeModule:()=>u,tree:()=>c}),r(19148),r(19654),r(41510),r(29372),r(54864);var i=r(23191),a=r(88716),n=r(37922),o=r.n(n),s=r(95231),l={};for(let e in s)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>s[e]);r.d(t,l);let c=["",{children:["e-commerce",{children:["products",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,19148)),"/home/dagi00/Documents/GitHub/site/src/app/e-commerce/products/page.js"]}]},{}]},{layout:[()=>Promise.resolve().then(r.bind(r,19654)),"/home/dagi00/Documents/GitHub/site/src/app/e-commerce/layout.js"]}]},{layout:[()=>Promise.resolve().then(r.bind(r,41510)),"/home/dagi00/Documents/GitHub/site/src/app/layout.js"],loading:[()=>Promise.resolve().then(r.bind(r,29372)),"/home/dagi00/Documents/GitHub/site/src/app/loading.js"],"not-found":[()=>Promise.resolve().then(r.bind(r,54864)),"/home/dagi00/Documents/GitHub/site/src/app/not-found.js"]}],d=["/home/dagi00/Documents/GitHub/site/src/app/e-commerce/products/page.js"],p="/e-commerce/products/page",h={require:r,loadChunk:()=>Promise.resolve()},u=new i.AppPageRouteModule({definition:{kind:a.x.APP_PAGE,page:"/e-commerce/products/page",pathname:"/e-commerce/products",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},52538:(e,t,r)=>{Promise.resolve().then(r.bind(r,37630))},17662:(e,t,r)=>{Promise.resolve().then(r.bind(r,89799))},86391:(e,t,r)=>{"use strict";r.d(t,{Z:()=>S});var i=r(91367),a=r(45353),n=r(17577),o=r(41135),s=r(88634),l=r(11190),c=r(33662),d=r(27522),p=r(10326);let h=(0,d.Z)((0,p.jsx)("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank"),u=(0,d.Z)((0,p.jsx)("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox"),m=(0,d.Z)((0,p.jsx)("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),"IndeterminateCheckBox");var g=r(54641),x=r(2791),b=r(91703),v=r(27080),Z=r(56385);let f=["checkedIcon","color","icon","indeterminate","indeterminateIcon","inputProps","size","className"],j=e=>{let{classes:t,indeterminate:r,color:i,size:n}=e,o={root:["root",r&&"indeterminate",`color${(0,g.Z)(i)}`,`size${(0,g.Z)(n)}`]},l=(0,s.Z)(o,Z.y,t);return(0,a.Z)({},t,l)},y=(0,b.ZP)(c.Z,{shouldForwardProp:e=>(0,v.Z)(e)||"classes"===e,name:"MuiCheckbox",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:r}=e;return[t.root,r.indeterminate&&t.indeterminate,t[`size${(0,g.Z)(r.size)}`],"default"!==r.color&&t[`color${(0,g.Z)(r.color)}`]]}})(({theme:e,ownerState:t})=>(0,a.Z)({color:(e.vars||e).palette.text.secondary},!t.disableRipple&&{"&:hover":{backgroundColor:e.vars?`rgba(${"default"===t.color?e.vars.palette.action.activeChannel:e.vars.palette[t.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})`:(0,l.Fq)("default"===t.color?e.palette.action.active:e.palette[t.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"default"!==t.color&&{[`&.${Z.Z.checked}, &.${Z.Z.indeterminate}`]:{color:(e.vars||e).palette[t.color].main},[`&.${Z.Z.disabled}`]:{color:(e.vars||e).palette.action.disabled}})),C=(0,p.jsx)(u,{}),w=(0,p.jsx)(h,{}),k=(0,p.jsx)(m,{}),S=n.forwardRef(function(e,t){var r,s;let l=(0,x.i)({props:e,name:"MuiCheckbox"}),{checkedIcon:c=C,color:d="primary",icon:h=w,indeterminate:u=!1,indeterminateIcon:m=k,inputProps:g,size:b="medium",className:v}=l,Z=(0,i.Z)(l,f),S=u?m:h,$=u?m:c,M=(0,a.Z)({},l,{color:d,indeterminate:u,size:b}),P=j(M);return(0,p.jsx)(y,(0,a.Z)({type:"checkbox",inputProps:(0,a.Z)({"data-indeterminate":u},g),icon:n.cloneElement(S,{fontSize:null!=(r=S.props.fontSize)?r:b}),checkedIcon:n.cloneElement($,{fontSize:null!=(s=$.props.fontSize)?s:b}),ownerState:M,ref:t,className:(0,o.Z)(P.root,v)},Z,{classes:P}))})},66343:(e,t,r)=>{"use strict";r.d(t,{Z:()=>v});var i=r(91367),a=r(45353),n=r(17577),o=r(41135),s=r(88634),l=r(68280),c=r(54641),d=r(2791),p=r(39492),h=r(91703),u=r(27080),m=r(10326);let g=["children","className","color","component","disabled","disableFocusRipple","focusVisibleClassName","size","variant"],x=e=>{let{color:t,variant:r,classes:i,size:n}=e,o={root:["root",r,`size${(0,c.Z)(n)}`,"inherit"===t?"colorInherit":t]},l=(0,s.Z)(o,p.N,i);return(0,a.Z)({},i,l)},b=(0,h.ZP)(l.Z,{name:"MuiFab",slot:"Root",shouldForwardProp:e=>(0,u.Z)(e)||"classes"===e,overridesResolver:(e,t)=>{let{ownerState:r}=e;return[t.root,t[r.variant],t[`size${(0,c.Z)(r.size)}`],"inherit"===r.color&&t.colorInherit,t[(0,c.Z)(r.size)],t[r.color]]}})(({theme:e,ownerState:t})=>{var r,i;return(0,a.Z)({},e.typography.button,{minHeight:36,transition:e.transitions.create(["background-color","box-shadow","border-color"],{duration:e.transitions.duration.short}),borderRadius:"50%",padding:0,minWidth:0,width:56,height:56,zIndex:(e.vars||e).zIndex.fab,boxShadow:(e.vars||e).shadows[6],"&:active":{boxShadow:(e.vars||e).shadows[12]},color:e.vars?e.vars.palette.text.primary:null==(r=(i=e.palette).getContrastText)?void 0:r.call(i,e.palette.grey[300]),backgroundColor:(e.vars||e).palette.grey[300],"&:hover":{backgroundColor:(e.vars||e).palette.grey.A100,"@media (hover: none)":{backgroundColor:(e.vars||e).palette.grey[300]},textDecoration:"none"},[`&.${p.Z.focusVisible}`]:{boxShadow:(e.vars||e).shadows[6]}},"small"===t.size&&{width:40,height:40},"medium"===t.size&&{width:48,height:48},"extended"===t.variant&&{borderRadius:24,padding:"0 16px",width:"auto",minHeight:"auto",minWidth:48,height:48},"extended"===t.variant&&"small"===t.size&&{width:"auto",padding:"0 8px",borderRadius:17,minWidth:34,height:34},"extended"===t.variant&&"medium"===t.size&&{width:"auto",padding:"0 16px",borderRadius:20,minWidth:40,height:40},"inherit"===t.color&&{color:"inherit"})},({theme:e,ownerState:t})=>(0,a.Z)({},"inherit"!==t.color&&"default"!==t.color&&null!=(e.vars||e).palette[t.color]&&{color:(e.vars||e).palette[t.color].contrastText,backgroundColor:(e.vars||e).palette[t.color].main,"&:hover":{backgroundColor:(e.vars||e).palette[t.color].dark,"@media (hover: none)":{backgroundColor:(e.vars||e).palette[t.color].main}}}),({theme:e})=>({[`&.${p.Z.disabled}`]:{color:(e.vars||e).palette.action.disabled,boxShadow:(e.vars||e).shadows[0],backgroundColor:(e.vars||e).palette.action.disabledBackground}})),v=n.forwardRef(function(e,t){let r=(0,d.i)({props:e,name:"MuiFab"}),{children:n,className:s,color:l="default",component:c="button",disabled:p=!1,disableFocusRipple:h=!1,focusVisibleClassName:u,size:v="large",variant:Z="circular"}=r,f=(0,i.Z)(r,g),j=(0,a.Z)({},r,{color:l,component:c,disabled:p,disableFocusRipple:h,size:v,variant:Z}),y=x(j);return(0,m.jsx)(b,(0,a.Z)({className:(0,o.Z)(y.root,s),component:c,disabled:p,focusRipple:!h,focusVisibleClassName:(0,o.Z)(y.focusVisible,u),ownerState:j,ref:t},f,{classes:y,children:n}))})},25310:(e,t,r)=>{"use strict";r.d(t,{L:()=>n,Z:()=>o});var i=r(71685),a=r(97898);function n(e){return(0,a.ZP)("MuiListItemText",e)}let o=(0,i.Z)("MuiListItemText",["root","multiline","dense","inset","primary","secondary"])},30725:(e,t,r)=>{"use strict";r.d(t,{Z:()=>w});var i=r(91367),a=r(45353),n=r(17577),o=r(41135),s=r(88634),l=r(11190),c=r(91703),d=r(27080),p=r(2791),h=r(92992),u=r(68280),m=r(69408),g=r(37382),x=r(73025),b=r(41598),v=r(25310),Z=r(50031),f=r(10326);let j=["autoFocus","component","dense","divider","disableGutters","focusVisibleClassName","role","tabIndex","className"],y=e=>{let{disabled:t,dense:r,divider:i,disableGutters:n,selected:o,classes:l}=e,c=(0,s.Z)({root:["root",r&&"dense",t&&"disabled",!n&&"gutters",i&&"divider",o&&"selected"]},Z.K,l);return(0,a.Z)({},l,c)},C=(0,c.ZP)(u.Z,{shouldForwardProp:e=>(0,d.Z)(e)||"classes"===e,name:"MuiMenuItem",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:r}=e;return[t.root,r.dense&&t.dense,r.divider&&t.divider,!r.disableGutters&&t.gutters]}})(({theme:e,ownerState:t})=>(0,a.Z)({},e.typography.body1,{display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",minHeight:48,paddingTop:6,paddingBottom:6,boxSizing:"border-box",whiteSpace:"nowrap"},!t.disableGutters&&{paddingLeft:16,paddingRight:16},t.divider&&{borderBottom:`1px solid ${(e.vars||e).palette.divider}`,backgroundClip:"padding-box"},{"&:hover":{textDecoration:"none",backgroundColor:(e.vars||e).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${Z.Z.selected}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:(0,l.Fq)(e.palette.primary.main,e.palette.action.selectedOpacity),[`&.${Z.Z.focusVisible}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))`:(0,l.Fq)(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.focusOpacity)}},[`&.${Z.Z.selected}:hover`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))`:(0,l.Fq)(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:(0,l.Fq)(e.palette.primary.main,e.palette.action.selectedOpacity)}},[`&.${Z.Z.focusVisible}`]:{backgroundColor:(e.vars||e).palette.action.focus},[`&.${Z.Z.disabled}`]:{opacity:(e.vars||e).palette.action.disabledOpacity},[`& + .${x.Z.root}`]:{marginTop:e.spacing(1),marginBottom:e.spacing(1)},[`& + .${x.Z.inset}`]:{marginLeft:52},[`& .${v.Z.root}`]:{marginTop:0,marginBottom:0},[`& .${v.Z.inset}`]:{paddingLeft:36},[`& .${b.Z.root}`]:{minWidth:36}},!t.dense&&{[e.breakpoints.up("sm")]:{minHeight:"auto"}},t.dense&&(0,a.Z)({minHeight:32,paddingTop:4,paddingBottom:4},e.typography.body2,{[`& .${b.Z.root} svg`]:{fontSize:"1.25rem"}}))),w=n.forwardRef(function(e,t){let r;let s=(0,p.i)({props:e,name:"MuiMenuItem"}),{autoFocus:l=!1,component:c="li",dense:d=!1,divider:u=!1,disableGutters:x=!1,focusVisibleClassName:b,role:v="menuitem",tabIndex:Z,className:w}=s,k=(0,i.Z)(s,j),S=n.useContext(h.Z),$=n.useMemo(()=>({dense:d||S.dense||!1,disableGutters:x}),[S.dense,d,x]),M=n.useRef(null);(0,m.Z)(()=>{l&&M.current&&M.current.focus()},[l]);let P=(0,a.Z)({},s,{dense:$.dense,divider:u,disableGutters:x}),z=y(s),R=(0,g.Z)(M,t);return s.disabled||(r=void 0!==Z?Z:-1),(0,f.jsx)(h.Z.Provider,{value:$,children:(0,f.jsx)(C,(0,a.Z)({ref:R,role:v,tabIndex:r,component:c,focusVisibleClassName:(0,o.Z)(z.focusVisible,b),className:(0,o.Z)(z.root,w)},k,{ownerState:P,classes:z}))})})},55976:(e,t,r)=>{"use strict";r.d(t,{Z:()=>$});var i=r(91367),a=r(45353),n=r(17577),o=r(41135),s=r(8106),l=r(88634),c=r(19452),d=r(22553),p=r(91703),h=r(2791),u=r(71685),m=r(97898);function g(e){return(0,m.ZP)("MuiSkeleton",e)}(0,u.Z)("MuiSkeleton",["root","text","rectangular","rounded","circular","pulse","wave","withChildren","fitContent","heightAuto"]);var x=r(10326);let b=["animation","className","component","height","style","variant","width"],v=e=>e,Z,f,j,y,C=e=>{let{classes:t,variant:r,animation:i,hasChildren:a,width:n,height:o}=e;return(0,l.Z)({root:["root",r,i,a&&"withChildren",a&&!n&&"fitContent",a&&!o&&"heightAuto"]},g,t)},w=(0,s.F4)(Z||(Z=v`
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0.4;
  }

  100% {
    opacity: 1;
  }
`)),k=(0,s.F4)(f||(f=v`
  0% {
    transform: translateX(-100%);
  }

  50% {
    /* +0.5s of delay between each loop */
    transform: translateX(100%);
  }

  100% {
    transform: translateX(100%);
  }
`)),S=(0,p.ZP)("span",{name:"MuiSkeleton",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:r}=e;return[t.root,t[r.variant],!1!==r.animation&&t[r.animation],r.hasChildren&&t.withChildren,r.hasChildren&&!r.width&&t.fitContent,r.hasChildren&&!r.height&&t.heightAuto]}})(({theme:e,ownerState:t})=>{let r=(0,c.Wy)(e.shape.borderRadius)||"px",i=(0,c.YL)(e.shape.borderRadius);return(0,a.Z)({display:"block",backgroundColor:e.vars?e.vars.palette.Skeleton.bg:(0,d.Fq)(e.palette.text.primary,"light"===e.palette.mode?.11:.13),height:"1.2em"},"text"===t.variant&&{marginTop:0,marginBottom:0,height:"auto",transformOrigin:"0 55%",transform:"scale(1, 0.60)",borderRadius:`${i}${r}/${Math.round(i/.6*10)/10}${r}`,"&:empty:before":{content:'"\\00a0"'}},"circular"===t.variant&&{borderRadius:"50%"},"rounded"===t.variant&&{borderRadius:(e.vars||e).shape.borderRadius},t.hasChildren&&{"& > *":{visibility:"hidden"}},t.hasChildren&&!t.width&&{maxWidth:"fit-content"},t.hasChildren&&!t.height&&{height:"auto"})},({ownerState:e})=>"pulse"===e.animation&&(0,s.iv)(j||(j=v`
      animation: ${0} 2s ease-in-out 0.5s infinite;
    `),w),({ownerState:e,theme:t})=>"wave"===e.animation&&(0,s.iv)(y||(y=v`
      position: relative;
      overflow: hidden;

      /* Fix bug in Safari https://bugs.webkit.org/show_bug.cgi?id=68196 */
      -webkit-mask-image: -webkit-radial-gradient(white, black);

      &::after {
        animation: ${0} 2s linear 0.5s infinite;
        background: linear-gradient(
          90deg,
          transparent,
          ${0},
          transparent
        );
        content: '';
        position: absolute;
        transform: translateX(-100%); /* Avoid flash during server-side hydration */
        bottom: 0;
        left: 0;
        right: 0;
        top: 0;
      }
    `),k,(t.vars||t).palette.action.hover)),$=n.forwardRef(function(e,t){let r=(0,h.i)({props:e,name:"MuiSkeleton"}),{animation:n="pulse",className:s,component:l="span",height:c,style:d,variant:p="text",width:u}=r,m=(0,i.Z)(r,b),g=(0,a.Z)({},r,{animation:n,component:l,variant:p,hasChildren:!!m.children}),v=C(g);return(0,x.jsx)(S,(0,a.Z)({as:l,ref:t,className:(0,o.Z)(v.root,s),ownerState:g},m,{style:(0,a.Z)({width:u,height:c},d)}))})},21969:(e,t,r)=>{"use strict";r.d(t,{Z:()=>j});var i=r(91367),a=r(45353),n=r(17577),o=r(41135),s=r(88634),l=r(11190),c=r(54641),d=r(33662),p=r(91703),h=r(2791),u=r(28973),m=r(10326);let g=["className","color","edge","size","sx"],x=e=>{let{classes:t,edge:r,size:i,color:n,checked:o,disabled:l}=e,d={root:["root",r&&`edge${(0,c.Z)(r)}`,`size${(0,c.Z)(i)}`],switchBase:["switchBase",`color${(0,c.Z)(n)}`,o&&"checked",l&&"disabled"],thumb:["thumb"],track:["track"],input:["input"]},p=(0,s.Z)(d,u.H,t);return(0,a.Z)({},t,p)},b=(0,p.ZP)("span",{name:"MuiSwitch",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:r}=e;return[t.root,r.edge&&t[`edge${(0,c.Z)(r.edge)}`],t[`size${(0,c.Z)(r.size)}`]]}})({display:"inline-flex",width:58,height:38,overflow:"hidden",padding:12,boxSizing:"border-box",position:"relative",flexShrink:0,zIndex:0,verticalAlign:"middle","@media print":{colorAdjust:"exact"},variants:[{props:{edge:"start"},style:{marginLeft:-8}},{props:{edge:"end"},style:{marginRight:-8}},{props:{size:"small"},style:{width:40,height:24,padding:7,[`& .${u.Z.thumb}`]:{width:16,height:16},[`& .${u.Z.switchBase}`]:{padding:4,[`&.${u.Z.checked}`]:{transform:"translateX(16px)"}}}}]}),v=(0,p.ZP)(d.Z,{name:"MuiSwitch",slot:"SwitchBase",overridesResolver:(e,t)=>{let{ownerState:r}=e;return[t.switchBase,{[`& .${u.Z.input}`]:t.input},"default"!==r.color&&t[`color${(0,c.Z)(r.color)}`]]}})(({theme:e})=>({position:"absolute",top:0,left:0,zIndex:1,color:e.vars?e.vars.palette.Switch.defaultColor:`${"light"===e.palette.mode?e.palette.common.white:e.palette.grey[300]}`,transition:e.transitions.create(["left","transform"],{duration:e.transitions.duration.shortest}),[`&.${u.Z.checked}`]:{transform:"translateX(20px)"},[`&.${u.Z.disabled}`]:{color:e.vars?e.vars.palette.Switch.defaultDisabledColor:`${"light"===e.palette.mode?e.palette.grey[100]:e.palette.grey[600]}`},[`&.${u.Z.checked} + .${u.Z.track}`]:{opacity:.5},[`&.${u.Z.disabled} + .${u.Z.track}`]:{opacity:e.vars?e.vars.opacity.switchTrackDisabled:`${"light"===e.palette.mode?.12:.2}`},[`& .${u.Z.input}`]:{left:"-100%",width:"300%"}}),({theme:e})=>({"&:hover":{backgroundColor:e.vars?`rgba(${e.vars.palette.action.activeChannel} / ${e.vars.palette.action.hoverOpacity})`:(0,l.Fq)(e.palette.action.active,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},variants:[...Object.entries(e.palette).filter(([,e])=>e.main&&e.light).map(([t])=>({props:{color:t},style:{[`&.${u.Z.checked}`]:{color:(e.vars||e).palette[t].main,"&:hover":{backgroundColor:e.vars?`rgba(${e.vars.palette[t].mainChannel} / ${e.vars.palette.action.hoverOpacity})`:(0,l.Fq)(e.palette[t].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${u.Z.disabled}`]:{color:e.vars?e.vars.palette.Switch[`${t}DisabledColor`]:`${"light"===e.palette.mode?(0,l.$n)(e.palette[t].main,.62):(0,l._j)(e.palette[t].main,.55)}`}},[`&.${u.Z.checked} + .${u.Z.track}`]:{backgroundColor:(e.vars||e).palette[t].main}}}))]})),Z=(0,p.ZP)("span",{name:"MuiSwitch",slot:"Track",overridesResolver:(e,t)=>t.track})(({theme:e})=>({height:"100%",width:"100%",borderRadius:7,zIndex:-1,transition:e.transitions.create(["opacity","background-color"],{duration:e.transitions.duration.shortest}),backgroundColor:e.vars?e.vars.palette.common.onBackground:`${"light"===e.palette.mode?e.palette.common.black:e.palette.common.white}`,opacity:e.vars?e.vars.opacity.switchTrack:`${"light"===e.palette.mode?.38:.3}`})),f=(0,p.ZP)("span",{name:"MuiSwitch",slot:"Thumb",overridesResolver:(e,t)=>t.thumb})(({theme:e})=>({boxShadow:(e.vars||e).shadows[1],backgroundColor:"currentColor",width:20,height:20,borderRadius:"50%"})),j=n.forwardRef(function(e,t){let r=(0,h.i)({props:e,name:"MuiSwitch"}),{className:n,color:s="primary",edge:l=!1,size:c="medium",sx:d}=r,p=(0,i.Z)(r,g),u=(0,a.Z)({},r,{color:s,edge:l,size:c}),j=x(u),y=(0,m.jsx)(f,{className:j.thumb,ownerState:u});return(0,m.jsxs)(b,{className:(0,o.Z)(j.root,n),sx:d,ownerState:u,children:[(0,m.jsx)(v,(0,a.Z)({type:"checkbox",icon:y,checkedIcon:y,ref:t,ownerState:u},p,{classes:(0,a.Z)({},j,{root:j.switchBase})})),(0,m.jsx)(Z,{className:j.track,ownerState:u})]})})},67526:(e,t,r)=>{"use strict";r.d(t,{Z:()=>i});let i={border:0,clip:"rect(0 0 0 0)",height:"1px",margin:"-1px",overflow:"hidden",padding:0,position:"absolute",whiteSpace:"nowrap",width:"1px"}},37630:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>$});var i=r(10326),a=r(78439),n=r.n(a),o=r(49474),s=r(71728),l=r(71243),c=r(17082),d=r(46374),p=r(75407),h=r(75616),u=r(43055),m=r(23743),g=r(22553),x=r(3479),b=r(25899),v=r(94621),Z=r(32247),f=r(45861),j=r(50775),y=r(91063),C=r(35117);let w=[{path:"#",title:"Categories",icon:i.jsx(j.Z,{icon:"carbon:menu",sx:{width:1,height:1}}),products:[...Array(10)].map((e,t)=>({name:C.QJ.productName(t),coverUrl:C.QJ.image.product(t),path:"#"})),moreLink:{title:"More Categories",path:"#"},tags:[{title:"Paper Cup",path:"#"},{title:"Lotion Pump",path:"#"},{title:"Brush Cutter",path:"#"},{title:"Display Rack",path:"#"},{title:"Glass Bottle",path:"#"}],children:[{subheader:"Other Machinery & Parts",items:[{title:"Metallic Processing Machinery",path:"#"},{title:"Machinery for Food, Beverage & Cereal",path:"#"},{title:"Laser Equipment",path:"#"},{title:"Mould",path:"#"},{title:"Textile Machinery & Parts",path:"#"},{title:"Cutting & Fold-bend Machine",path:"#"},{title:"Paper Machinery",path:"#"},{title:"Rubber Machinery",path:"#"},{title:"Chemical Equipment & Machinery",path:"#"},{title:"Mixing Equipment",path:"#"},{title:"Machinery for Garment, Shoes & Accessories",path:"#"},{title:"Crushing & Culling Machine",path:"#"}]},{subheader:"Plastic & Woodworking",items:[{title:"Plastic Machinery",path:"#"},{title:"Woodworking Machinery",path:"#"},{title:"Blow Molding Machine",path:"#"},{title:"Plastic Recycling Machine",path:"#"},{title:"Injection Molding Machine",path:"#"}]},{subheader:"Construction Machinery",items:[{title:"Building Material Making Machinery",path:"#"},{title:"Lifting Equipment",path:"#"},{title:"Excavator",path:"#"},{title:"Concrete Machinery",path:"#"},{title:"Stone Processing Machinery",path:"#"}]},{subheader:"Agriculture Machinery",items:[{title:"Agriculture Machinery",path:"#"},{title:"Livestock MachineryFeed",path:"#"},{title:"Feed Processing Machinery",path:"#"},{title:"Tiller",path:"#"},{title:"Harvesting Machine",path:"#"}]},{subheader:"Machine Tools",items:[{title:"CNC Machine Tools",path:"#"},{title:"Lathe",path:"#"},{title:"Grinding Machine ",path:"#"},{title:"Drilling Machine ",path:"#"},{title:"Milling Machine ",path:"#"}]}]}];function k(){let e=(0,m.Z)(),t=(0,Z.F)("up","md"),r=(0,v.k)();return i.jsx(s.Z,{sx:{...(0,f.v3)({color:(0,g.Fq)(e.palette.background.default,.9),imgUrl:"/assets/background/overlay_1.jpg"})},children:(0,i.jsxs)(h.Z,{sx:{display:"flex",alignItems:"center",position:"relative",height:{xs:64,md:72}},children:[t?i.jsx(y.zT,{data:w}):(0,i.jsxs)(i.Fragment,{children:[i.jsx(d.Z,{color:"inherit",onClick:r.onTrue,startIcon:i.jsx(j.Z,{icon:"carbon:menu"}),children:"Categories"}),i.jsx(p.ZP,{open:r.value,onClose:r.onFalse,PaperProps:{sx:{pb:5,width:260}},children:i.jsx(y.py,{data:w})})]}),(0,i.jsxs)(c.Z,{spacing:3,direction:"row",alignItems:"center",flexGrow:1,justifyContent:"flex-end",children:[!t&&i.jsx(u.Z,{size:"small",color:"inherit",sx:{p:0},children:i.jsx(j.Z,{icon:"carbon:search",width:24})}),i.jsx(l.Z,{badgeContent:2,color:"info",children:i.jsx(u.Z,{component:b.r,href:x.H.eCommerce.wishlist,size:"small",color:"inherit",sx:{p:0},children:i.jsx(j.Z,{icon:"carbon:favorite",width:24})})}),i.jsx(l.Z,{badgeContent:4,color:"error",children:i.jsx(u.Z,{component:b.r,href:x.H.eCommerce.cart,size:"small",color:"inherit",sx:{p:0},children:i.jsx(j.Z,{icon:"carbon:shopping-cart",width:24})})}),i.jsx(u.Z,{component:b.r,href:x.H.eCommerce.account.personal,size:"small",color:"inherit",sx:{p:0},children:i.jsx(j.Z,{icon:"carbon:user",width:24})})]})]})})}function S({children:e}){return(0,i.jsxs)(i.Fragment,{children:[i.jsx(k,{}),e]})}function $({children:e}){return i.jsx(o.Z,{children:i.jsx(S,{children:e})})}S.propTypes={children:n().node},$.propTypes={children:n().node}},74633:(e,t,r)=>{"use strict";r.d(t,{Z:()=>c});var i=r(10326),a=r(78439),n=r.n(a),o=r(71728),s=r(17082),l=r(40537);function c({price:e,priceSale:t=0,sx:r,...a}){return(0,i.jsxs)(s.Z,{direction:"row",sx:{typography:"subtitle2",...r},...a,children:[(0,l.e_)(e),i.jsx(o.Z,{component:"span",sx:{ml:.5,color:"text.disabled",textDecoration:"line-through",fontWeight:"fontWeightMedium"},children:t>0&&(0,l.e_)(t)})]})}c.propTypes={price:n().number,priceSale:n().number,sx:n().object}},80756:(e,t,r)=>{"use strict";r.d(t,{Z:()=>d});var i=r(10326),a=r(78439),n=r.n(a),o=r(17082),s=r(25609),l=r(9858),c=r(67913);function d({ratingNumber:e,label:t,...r}){return(0,i.jsxs)(o.Z,{spacing:.5,direction:"row",alignItems:"center",...r,children:[i.jsx(l.Z,{size:"small",value:e,readOnly:!0,precision:.5,sx:{[`&.${c.Z.root}`]:{"& svg":{height:12,width:12}}}}),t&&i.jsx(s.Z,{variant:"caption",sx:{color:"text.disabled"},children:t})]})}d.propTypes={label:n().string,ratingNumber:n().number}},57825:(e,t,r)=>{"use strict";r.d(t,{Z:()=>m});var i=r(10326),a=r(78439),n=r.n(a),o=r(52188),s=r(17082),l=r(3479),c=r(25899),d=r(61929),p=r(52868),h=r(74633),u=r(80756);function m({product:e,...t}){return i.jsx(o.Z,{component:c.r,href:l.H.eCommerce.product,color:"inherit",underline:"none",children:(0,i.jsxs)(s.Z,{spacing:2,direction:"row",sx:{transition:e=>e.transitions.create("opacity",{easing:e.transitions.easing.easeIn,duration:e.transitions.duration.shortest}),"&:hover":{opacity:.72}},...t,children:[i.jsx(d.Z,{src:e.coverUrl,sx:{width:80,height:80,flexShrink:0,borderRadius:1.5,bgcolor:"background.neutral"}}),(0,i.jsxs)(s.Z,{spacing:.5,children:[i.jsx(p.Z,{variant:"body2",line:1,sx:{fontWeight:"fontWeightMedium"},children:e.name}),i.jsx(u.Z,{ratingNumber:e.ratingNumber,label:`${e.sold} sold`}),i.jsx(h.Z,{price:e.price,priceSale:e.priceSale})]})]})})}m.propTypes={product:n().shape({coverUrl:n().string,name:n().string,price:n().number,priceSale:n().number,sold:n().number,ratingNumber:n().number})}},89799:(e,t,r)=>{"use strict";r.d(t,{default:()=>eg});var i=r(10326),a=r(17577),n=r(71728),o=r(17082),s=r(29302),l=r(46374),c=r(99207),d=r(30725),p=r(75616),h=r(25609),u=r(76554),m=r(65446),g=r(55977),x=r(94621),b=r(35117),v=r(50775),Z=r(78439),f=r.n(Z),j=r(75407),y=r(5041),C=r(32247),w=r(13405);function k({options:e,filterTag:t,onChangeTag:r,...a}){return i.jsx(o.Z,{direction:"row",flexWrap:"wrap",spacing:1,...a,children:e.map(e=>{let a=t.includes(e);return i.jsx(w.Z,{size:"small",label:e,variant:"outlined",onClick:()=>r(e),sx:{...a&&{bgcolor:"action.selected",fontWeight:"fontWeightBold"}}},e)})})}k.propTypes={filterTag:f().arrayOf(f().string),onChangeTag:f().func,options:f().array};var S=r(86391),$=r(2980);function M({options:e,filterBrand:t,onChangeBrand:r,...a}){return i.jsx(o.Z,{...a,children:e.map(e=>i.jsx($.Z,{control:i.jsx(S.Z,{size:"small",value:e,checked:t.includes(e),onChange:()=>r(e)}),label:e},e))})}M.propTypes={filterBrand:f().arrayOf(f().string),onChangeBrand:f().func,options:f().array};var P=r(14350);function z({filterPrice:e,onChangeStartPrice:t,onChangeEndPrice:r,...a}){return(0,i.jsxs)(o.Z,{spacing:2,direction:"row",alignItems:"center",divider:i.jsx("div",{children:" - "}),...a,children:[i.jsx(P.Z,{size:"small",label:"$ Min",type:"number",value:0===e.start?"":e.start,onChange:t}),i.jsx(P.Z,{size:"small",label:"$ Max",type:"number",value:0===e.end?"":e.end,onChange:r})]})}z.propTypes={filterPrice:f().shape({end:f().number,start:f().number}),onChangeEndPrice:f().func,onChangeStartPrice:f().func};var R=r(21969),I=r(51596);function T({filterStock:e,onChangeStock:t}){return i.jsx($.Z,{control:i.jsx(R.Z,{color:"success",checked:e,onChange:t}),labelPlacement:"start",label:"Only in Stock",sx:{m:0,[`& .${I.Z.label}`]:{typography:"h6"}}})}T.propTypes={filterStock:f().bool,onChangeStock:f().func};var F=r(21558),N=r(9858),B=r(68775);let O=["up_4_stars","up_3_stars","up_2_stars"];function H({filterRating:e,onChangeRating:t,...r}){return i.jsx(o.Z,{...r,children:i.jsx(B.Z,{value:e,onChange:t,children:i.jsx(o.Z,{spacing:2,alignItems:"flex-start",children:O.map(t=>i.jsx($.Z,{value:t,control:i.jsx(F.Z,{sx:{display:"none"}}),label:(0,i.jsxs)(o.Z,{direction:"row",alignItems:"center",sx:{...e===t&&{fontWeight:"fontWeightSemiBold"}},children:[i.jsx(N.Z,{size:"small",value:3,readOnly:!0,sx:{mr:1,...e===t&&{opacity:.48}}}),"& Up"]}),sx:{m:0,"&:hover":{opacity:.48}}},t))})})})}function _({options:e,filterCategories:t,onChangeCategories:r,...a}){return i.jsx(o.Z,{spacing:1,alignItems:"flex-start",...a,children:e.map(e=>(0,i.jsxs)(o.Z,{direction:"row",alignItems:"center",onClick:()=>r(e),sx:{typography:"body2",cursor:"pointer",...t===e&&{fontWeight:"fontWeightBold"}},children:[i.jsx(v.Z,{icon:"carbon:chevron-right",width:12,sx:{mr:1}}),e]},e))})}function A({options:e,filterShipping:t,onChangeShipping:r,...a}){return i.jsx(o.Z,{...a,children:e.map(e=>i.jsx($.Z,{control:i.jsx(S.Z,{size:"small",value:e,checked:t.includes(e),onChange:()=>r(e)}),label:e},e))})}H.propTypes={filterRating:f().string,onChangeRating:f().func},_.propTypes={filterCategories:f().string,onChangeCategories:f().func,options:f().array},A.propTypes={filterShipping:f().arrayOf(f().string),onChangeShipping:f().func,options:f().array};let W=["Apple","Samsung","Xiaomi","Honor"],G=["Apple iPhone","Samsung Galaxy","Nike Air Max","Adidas Ultraboost","Sony PlayStation"],D=["Fast","Saving","Free"],L=["Books and Media","Pet","Electronics","Food","Automotive and Industrial"],q={filterBrand:[W[1]],filterCategories:"",filterRating:null,filterStock:!1,filterShipping:[],filterTag:[],filterPrice:{start:0,end:0}};function E({open:e,onClose:t}){let r=(0,C.F)("up","md"),[n,s]=(0,a.useState)(q),c=(e,t)=>e.includes(t)?e.filter(e=>e!==t):[...e,t],d=(0,a.useCallback)(e=>{s({...n,filterCategories:e})},[n]),p=(0,a.useCallback)(e=>{s({...n,filterBrand:c(n.filterBrand,e)})},[n]),h=(0,a.useCallback)(e=>{s({...n,filterShipping:c(n.filterShipping,e)})},[n]),u=(0,a.useCallback)(e=>{s({...n,filterTag:c(n.filterTag,e)})},[n]),m=(0,a.useCallback)(e=>{s({...n,filterRating:e.target.value})},[n]),g=(0,a.useCallback)(e=>{s({...n,filterPrice:{...n.filterPrice,start:Number(e.target.value)}})},[n]),x=(0,a.useCallback)(e=>{s({...n,filterPrice:{...n.filterPrice,end:Number(e.target.value)}})},[n]),b=(0,a.useCallback)(e=>{s({...n,filterStock:e.target.checked})},[n]),Z=(0,a.useCallback)(()=>{s(q)},[]),f=(0,i.jsxs)(o.Z,{spacing:3,alignItems:"flex-start",sx:{flexShrink:0,width:{xs:1,md:280}},children:[i.jsx(V,{title:"Category",children:i.jsx(_,{filterCategories:n.filterCategories,onChangeCategories:d,options:G,sx:{mt:2}})}),i.jsx(V,{title:"Brand",children:i.jsx(M,{filterBrand:n.filterBrand,onChangeBrand:p,options:W,sx:{mt:1}})}),i.jsx(V,{title:"Price",children:i.jsx(z,{filterPrice:n.filterPrice,onChangeStartPrice:g,onChangeEndPrice:x,sx:{mt:2}})}),i.jsx(V,{title:"Shipping",children:i.jsx(A,{filterShipping:n.filterShipping,onChangeShipping:h,options:D,sx:{mt:1}})}),i.jsx(V,{title:"Ratings",children:i.jsx(H,{filterRating:n.filterRating,onChangeRating:m,sx:{mt:2}})}),i.jsx(T,{filterStock:n.filterStock,onChangeStock:b}),i.jsx(V,{title:"Tags",children:i.jsx(k,{filterTag:n.filterTag,onChangeTag:u,options:L,sx:{mt:2}})}),i.jsx(l.Z,{fullWidth:!0,color:"inherit",size:"large",variant:"contained",startIcon:i.jsx(v.Z,{icon:"carbon:trash-can"}),onClick:Z,children:"Clear All"})]});return i.jsx(i.Fragment,{children:r?f:i.jsx(j.ZP,{anchor:"right",open:e,onClose:t,PaperProps:{sx:{pt:3,px:3,width:280}},children:f})})}function V({title:e,children:t,...r}){let a=(0,x.k)(!0);return(0,i.jsxs)(o.Z,{alignItems:"flex-start",sx:{width:1},...r,children:[(0,i.jsxs)(o.Z,{direction:"row",alignItems:"center",justifyContent:"space-between",onClick:a.onToggle,sx:{width:1,cursor:"pointer"},children:[i.jsx(h.Z,{variant:"h6",children:e}),i.jsx(v.Z,{icon:a.value?"carbon:subtract":"carbon:add",sx:{color:"text.secondary"}})]}),i.jsx(y.Z,{unmountOnExit:!0,in:a.value,sx:{px:.5},children:t})]})}E.propTypes={onClose:f().func,open:f().bool},V.propTypes={children:f().node,title:f().string};var U=r(7344),X=r(61007),Q=r(66343),J=r(52188),K=r(3479),Y=r(25899),ee=r(61929),et=r(95133),er=r(52868),ei=r(74633),ea=r(80756);function en({product:e,...t}){return(0,i.jsxs)(o.Z,{direction:"row",sx:{position:"relative","&:hover .add-to-cart":{opacity:1}},...t,children:["new"===e.label&&i.jsx(et.Z,{color:"info",sx:{position:"absolute",m:1,top:0,left:0,zIndex:9},children:"NEW"}),"sale"===e.label&&i.jsx(et.Z,{color:"error",sx:{position:"absolute",m:1,top:0,left:0,zIndex:9},children:"SALE"}),i.jsx(Q.Z,{component:Y.r,href:K.H.eCommerce.product,className:"add-to-cart",color:"primary",size:"small",sx:{right:8,zIndex:9,top:8,opacity:0,position:"absolute",transition:e=>e.transitions.create("opacity",{easing:e.transitions.easing.easeIn,duration:e.transitions.duration.shortest})},children:i.jsx(v.Z,{icon:"carbon:shopping-cart-plus"})}),i.jsx(ee.Z,{src:e.coverUrl,sx:{mr:2,width:160,flexShrink:0,borderRadius:1.5,bgcolor:"background.neutral"}}),(0,i.jsxs)(o.Z,{spacing:1,children:[(0,i.jsxs)(o.Z,{spacing:.5,children:[i.jsx(er.Z,{variant:"caption",line:1,sx:{color:"text.disabled"},children:e.category}),i.jsx(J.Z,{component:Y.r,href:K.H.eCommerce.product,color:"inherit",children:i.jsx(er.Z,{variant:"h6",line:1,children:e.name})})]}),i.jsx(ea.Z,{ratingNumber:e.ratingNumber,label:`${e.sold} sold`}),i.jsx(er.Z,{variant:"body2",line:1,sx:{color:"text.secondary"},children:e.caption}),i.jsx(ei.Z,{price:e.price,priceSale:e.priceSale,sx:{typography:"h6"}})]})]})}function eo({product:e,sx:t,...r}){return(0,i.jsxs)(o.Z,{sx:{position:"relative","&:hover .add-to-cart":{opacity:1},...t},...r,children:["new"===e.label&&i.jsx(et.Z,{color:"info",sx:{position:"absolute",m:1,top:0,right:0,zIndex:9},children:"NEW"}),"sale"===e.label&&i.jsx(et.Z,{color:"error",sx:{position:"absolute",m:1,top:0,right:0,zIndex:9},children:"SALE"}),(0,i.jsxs)(n.Z,{sx:{position:"relative",mb:2},children:[i.jsx(Q.Z,{component:Y.r,href:K.H.eCommerce.product,className:"add-to-cart",color:"primary",size:"small",sx:{right:8,zIndex:9,bottom:8,opacity:0,position:"absolute",transition:e=>e.transitions.create("opacity",{easing:e.transitions.easing.easeIn,duration:e.transitions.duration.shortest})},children:i.jsx(v.Z,{icon:"carbon:shopping-cart-plus"})}),i.jsx(ee.Z,{src:e.coverUrl,sx:{flexShrink:0,borderRadius:1.5,bgcolor:"background.neutral"}})]}),(0,i.jsxs)(o.Z,{spacing:.5,children:[i.jsx(er.Z,{variant:"caption",line:1,sx:{color:"text.disabled"},children:e.category}),i.jsx(J.Z,{component:Y.r,href:K.H.eCommerce.product,color:"inherit",children:i.jsx(er.Z,{variant:"body2",line:1,sx:{fontWeight:"fontWeightMedium"},children:e.name})}),i.jsx(ei.Z,{price:e.price,priceSale:e.priceSale}),i.jsx(ea.Z,{ratingNumber:e.ratingNumber,label:`${e.sold} sold`})]})]})}en.propTypes={product:f().shape({caption:f().string,category:f().string,coverUrl:f().string,label:f().string,name:f().string,price:f().number,priceSale:f().number,sold:f().number,ratingNumber:f().number})},eo.propTypes={product:f().shape({name:f().string,sold:f().number,label:f().string,price:f().number,category:f().string,coverUrl:f().string,priceSale:f().number,ratingNumber:f().number}),sx:f().object};var es=r(55976);function el(){return(0,i.jsxs)(o.Z,{spacing:2,direction:"row",children:[i.jsx(es.Z,{variant:"rounded",width:160,height:160,sx:{flexShrink:0,borderRadius:2}}),(0,i.jsxs)(o.Z,{flexGrow:1.5,spacing:1,children:[i.jsx(es.Z,{variant:"rounded",height:16,width:"90%"}),i.jsx(es.Z,{variant:"rounded",height:16,width:"80%"}),i.jsx(es.Z,{variant:"rounded",height:16,width:"70%"}),i.jsx(es.Z,{variant:"rounded",height:16,width:"60%"}),i.jsx(es.Z,{variant:"rounded",height:16,width:"50%"})]})]})}function ec(){return(0,i.jsxs)(o.Z,{spacing:2,children:[i.jsx(n.Z,{sx:{pt:"100%",flexShrink:0,borderRadius:2,position:"relative"},children:i.jsx(es.Z,{variant:"rounded",width:"100%",height:"100%",sx:{position:"absolute",top:0,left:0}})}),(0,i.jsxs)(o.Z,{spacing:1,children:[i.jsx(es.Z,{variant:"rounded",height:16,width:"90%"}),i.jsx(es.Z,{variant:"rounded",height:16,width:"70%"}),i.jsx(es.Z,{variant:"rounded",height:16,width:"50%"})]})]})}function ed({loading:e,viewMode:t,products:r}){return(0,i.jsxs)(i.Fragment,{children:["grid"===t?i.jsx(n.Z,{rowGap:4,columnGap:3,display:"grid",gridTemplateColumns:{xs:"repeat(2, 1fr)",sm:"repeat(3, 1fr)",md:"repeat(4, 1fr)"},children:(e?[...Array(16)]:r).map((e,t)=>e?i.jsx(eo,{product:e},e.id):i.jsx(ec,{},t))}):i.jsx(o.Z,{spacing:4,children:(e?[...Array(16)]:r).map((e,t)=>e?i.jsx(en,{product:e},e.id):i.jsx(el,{},t))}),i.jsx(U.Z,{count:10,color:"primary",sx:{mt:10,mb:5,[`& .${X.Z.ul}`]:{justifyContent:"center"}}})]})}ed.propTypes={loading:f().bool,products:f().array,viewMode:f().string};var ep=r(57825);function eh({products:e}){return(0,i.jsxs)(o.Z,{spacing:3,children:[i.jsx(h.Z,{variant:"h6",children:"Best Sellers"}),e.slice(0,8).map(e=>i.jsx(ep.Z,{product:e},e.id))]})}eh.propTypes={products:f().array};let eu=[{value:"list",icon:i.jsx(v.Z,{icon:"carbon:list-boxes"})},{value:"grid",icon:i.jsx(v.Z,{icon:"carbon:grid"})}],em=[{value:"latest",label:"Latest"},{value:"oldest",label:"Oldest"},{value:"popular",label:"Popular"}];function eg(){let e=(0,x.k)(),[t,r]=(0,a.useState)("latest"),Z=(0,x.k)(!0),[f,j]=(0,a.useState)("grid"),y=(0,a.useCallback)((e,t)=>{null!==t&&j(t)},[]),C=(0,a.useCallback)(e=>{r(e.target.value)},[]);return(0,i.jsxs)(p.Z,{children:[(0,i.jsxs)(o.Z,{direction:"row",alignItems:"center",justifyContent:"space-between",sx:{py:5},children:[i.jsx(h.Z,{variant:"h3",children:"Catalog"}),i.jsx(l.Z,{color:"inherit",variant:"contained",startIcon:i.jsx(v.Z,{icon:"carbon:filter",width:18}),onClick:e.onTrue,sx:{display:{md:"none"}},children:"Filters"})]}),(0,i.jsxs)(o.Z,{direction:{xs:"column-reverse",md:"row"},sx:{mb:{xs:8,md:10}},children:[(0,i.jsxs)(o.Z,{spacing:5,divider:i.jsx(c.Z,{sx:{borderStyle:"dashed"}}),children:[i.jsx(E,{open:e.value,onClose:e.onFalse}),i.jsx(eh,{products:b.MQ.slice(0,3)})]}),(0,i.jsxs)(n.Z,{sx:{flexGrow:1,pl:{md:8},width:{md:"calc(100% - 280px)"}},children:[(0,i.jsxs)(o.Z,{direction:"row",alignItems:"center",justifyContent:"space-between",sx:{mb:5},children:[i.jsx(g.Z,{exclusive:!0,size:"small",value:f,onChange:y,sx:{borderColor:"transparent"},children:eu.map(e=>i.jsx(m.Z,{value:e.value,children:e.icon},e.value))}),i.jsx(u.Z,{size:"small",hiddenLabel:!0,sx:{width:120},children:i.jsx(s.Z,{value:t,onChange:C,children:em.map(e=>i.jsx(d.Z,{value:e.value,children:e.label},e.value))})})]}),i.jsx(ed,{loading:Z.value,viewMode:f,products:b.MQ.slice(0,16)})]})]})]})}},40537:(e,t,r)=>{"use strict";function i(){return{code:"en-US",currency:"USD"}}function a(e){let{code:t,currency:r}=i();if(!e)return"";let a=Number(e);return new Intl.NumberFormat(t,{style:"currency",currency:r,minimumFractionDigits:0,maximumFractionDigits:2}).format(a)}function n(e){let{code:t}=i();if(!e)return"";let r=Number(e)/100;return new Intl.NumberFormat(t,{style:"percent",minimumFractionDigits:0,maximumFractionDigits:1}).format(r)}function o(e){let{code:t}=i();if(!e)return"";let r=Number(e);return new Intl.NumberFormat(t,{notation:"compact",maximumFractionDigits:2}).format(r).replace(/[A-Z]/g,e=>e.toLowerCase())}r.d(t,{e_:()=>a,f2:()=>n,v1:()=>o})},19654:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>i});let i=(0,r(68570).createProxy)(String.raw`/home/dagi00/Documents/GitHub/site/src/app/e-commerce/layout.js#default`)},19148:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>o,metadata:()=>n});var i=r(19510);let a=(0,r(68570).createProxy)(String.raw`/home/dagi00/Documents/GitHub/site/src/sections/_ecommerce/view/ecommerce-products-view.js#default`),n={title:"E-commerce: Products"};function o(){return i.jsx(a,{})}}};var t=require("../../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),i=t.X(0,[7576,2666,9163,2765,4350,3405,7608,7344,9858,7016,476,7042,5117,9474,1063],()=>r(19674));module.exports=i})();