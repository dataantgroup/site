(()=>{var e={};e.id=3181,e.ids=[3181],e.modules={72934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},54580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},45869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},10550:(e,r,o)=>{"use strict";o.r(r),o.d(r,{GlobalError:()=>l.a,__next_app__:()=>u,originalPathname:()=>p,pages:()=>d,routeModule:()=>m,tree:()=>c}),o(81443),o(88554),o(41510),o(29372),o(54864);var t=o(23191),a=o(88716),i=o(37922),l=o.n(i),n=o(95231),s={};for(let e in n)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(s[e]=()=>n[e]);o.d(r,s);let c=["",{children:["components",{children:["player",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(o.bind(o,81443)),"/home/dagi00/Documents/GitHub/site/src/app/components/player/page.js"]}]},{layout:[()=>Promise.resolve().then(o.bind(o,88554)),"/home/dagi00/Documents/GitHub/site/src/app/components/player/layout.js"]}]},{}]},{layout:[()=>Promise.resolve().then(o.bind(o,41510)),"/home/dagi00/Documents/GitHub/site/src/app/layout.js"],loading:[()=>Promise.resolve().then(o.bind(o,29372)),"/home/dagi00/Documents/GitHub/site/src/app/loading.js"],"not-found":[()=>Promise.resolve().then(o.bind(o,54864)),"/home/dagi00/Documents/GitHub/site/src/app/not-found.js"]}],d=["/home/dagi00/Documents/GitHub/site/src/app/components/player/page.js"],p="/components/player/page",u={require:o,loadChunk:()=>Promise.resolve()},m=new t.AppPageRouteModule({definition:{kind:a.x.APP_PAGE,page:"/components/player/page",pathname:"/components/player",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},50311:(e,r,o)=>{Promise.resolve().then(o.bind(o,27251))},25699:(e,r,o)=>{Promise.resolve().then(o.bind(o,24839))},17306:(e,r,o)=>{"use strict";o.d(r,{Z:()=>M});var t=o(45353),a=o(91367),i=o(17577);o(16777);var l=o(41135),n=o(88634),s=o(90535),c=o(91703),d=o(54117),p=o(25609),u=o(22553),m=o(27522),h=o(10326);let x=(0,m.Z)((0,h.jsx)("path",{d:"M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),"MoreHoriz");var g=o(68280);let b=["slots","slotProps"],f=(0,c.ZP)(g.Z)(({theme:e})=>(0,t.Z)({display:"flex",marginLeft:`calc(${e.spacing(1)} * 0.5)`,marginRight:`calc(${e.spacing(1)} * 0.5)`},"light"===e.palette.mode?{backgroundColor:e.palette.grey[100],color:e.palette.grey[700]}:{backgroundColor:e.palette.grey[700],color:e.palette.grey[100]},{borderRadius:2,"&:hover, &:focus":(0,t.Z)({},"light"===e.palette.mode?{backgroundColor:e.palette.grey[200]}:{backgroundColor:e.palette.grey[600]}),"&:active":(0,t.Z)({boxShadow:e.shadows[0]},"light"===e.palette.mode?{backgroundColor:(0,u._4)(e.palette.grey[200],.12)}:{backgroundColor:(0,u._4)(e.palette.grey[600],.12)})})),v=(0,c.ZP)(x)({width:24,height:16}),Z=function(e){let{slots:r={},slotProps:o={}}=e,i=(0,a.Z)(e,b);return(0,h.jsx)("li",{children:(0,h.jsx)(f,(0,t.Z)({focusRipple:!0},i,{ownerState:e,children:(0,h.jsx)(v,(0,t.Z)({as:r.CollapsedIcon,ownerState:e},o.collapsedIcon))}))})};var y=o(71685),j=o(97898);function w(e){return(0,j.Z)("MuiBreadcrumbs",e)}let S=(0,y.Z)("MuiBreadcrumbs",["root","ol","li","separator"]),k=["children","className","component","slots","slotProps","expandText","itemsAfterCollapse","itemsBeforeCollapse","maxItems","separator"],P=e=>{let{classes:r}=e;return(0,n.Z)({root:["root"],li:["li"],ol:["ol"],separator:["separator"]},w,r)},C=(0,c.ZP)(p.Z,{name:"MuiBreadcrumbs",slot:"Root",overridesResolver:(e,r)=>[{[`& .${S.li}`]:r.li},r.root]})({}),W=(0,c.ZP)("ol",{name:"MuiBreadcrumbs",slot:"Ol",overridesResolver:(e,r)=>r.ol})({display:"flex",flexWrap:"wrap",alignItems:"center",padding:0,margin:0,listStyle:"none"}),R=(0,c.ZP)("li",{name:"MuiBreadcrumbs",slot:"Separator",overridesResolver:(e,r)=>r.separator})({display:"flex",userSelect:"none",marginLeft:8,marginRight:8}),M=i.forwardRef(function(e,r){var o,n;let c=(0,d.Z)({props:e,name:"MuiBreadcrumbs"}),{children:p,className:u,component:m="nav",slots:x={},slotProps:g={},expandText:b="Show path",itemsAfterCollapse:f=1,itemsBeforeCollapse:v=1,maxItems:y=8,separator:j="/"}=c,w=(0,a.Z)(c,k),[S,M]=i.useState(!1),D=(0,t.Z)({},c,{component:m,expanded:S,expandText:b,itemsAfterCollapse:f,itemsBeforeCollapse:v,maxItems:y,separator:j}),$=P(D),_=(0,s.y)({elementType:x.CollapsedIcon,externalSlotProps:g.collapsedIcon,ownerState:D}),F=i.useRef(null),I=i.Children.toArray(p).filter(e=>i.isValidElement(e)).map((e,r)=>(0,h.jsx)("li",{className:$.li,children:e},`child-${r}`));return(0,h.jsx)(C,(0,t.Z)({ref:r,component:m,color:"text.secondary",className:(0,l.Z)($.root,u),ownerState:D},w,{children:(0,h.jsx)(W,{className:$.ol,ref:F,ownerState:D,children:(o=S||y&&I.length<=y?I:v+f>=I.length?I:[...I.slice(0,v),(0,h.jsx)(Z,{"aria-label":b,slots:{CollapsedIcon:x.CollapsedIcon},slotProps:{collapsedIcon:_},onClick:()=>{M(!0);let e=F.current.querySelector("a[href],button,[tabindex]");e&&e.focus()}},"ellipsis"),...I.slice(I.length-f,I.length)],n=$.separator,o.reduce((e,r,t)=>(t<o.length-1?e=e.concat(r,(0,h.jsx)(R,{"aria-hidden":!0,className:n,ownerState:D,children:j},`separator-${t}`)):e.push(r),e),[]))})}))})},43659:(e,r,o)=>{"use strict";o.d(r,{Z:()=>P});var t=o(91367),a=o(45353),i=o(17577),l=o(41135),n=o(88634),s=o(34018),c=o(54641),d=o(72069),p=o(48467),u=o(90313),m=o(54117),h=o(91703),x=o(17251),g=o(55733),b=o(7783),f=o(23743),v=o(10326);let Z=["aria-describedby","aria-labelledby","BackdropComponent","BackdropProps","children","className","disableEscapeKeyDown","fullScreen","fullWidth","maxWidth","onBackdropClick","onClose","open","PaperComponent","PaperProps","scroll","TransitionComponent","transitionDuration","TransitionProps"],y=(0,h.ZP)(b.Z,{name:"MuiDialog",slot:"Backdrop",overrides:(e,r)=>r.backdrop})({zIndex:-1}),j=e=>{let{classes:r,scroll:o,maxWidth:t,fullWidth:a,fullScreen:i}=e,l={root:["root"],container:["container",`scroll${(0,c.Z)(o)}`],paper:["paper",`paperScroll${(0,c.Z)(o)}`,`paperWidth${(0,c.Z)(String(t))}`,a&&"paperFullWidth",i&&"paperFullScreen"]};return(0,n.Z)(l,x.D,r)},w=(0,h.ZP)(d.Z,{name:"MuiDialog",slot:"Root",overridesResolver:(e,r)=>r.root})({"@media print":{position:"absolute !important"}}),S=(0,h.ZP)("div",{name:"MuiDialog",slot:"Container",overridesResolver:(e,r)=>{let{ownerState:o}=e;return[r.container,r[`scroll${(0,c.Z)(o.scroll)}`]]}})(({ownerState:e})=>(0,a.Z)({height:"100%","@media print":{height:"auto"},outline:0},"paper"===e.scroll&&{display:"flex",justifyContent:"center",alignItems:"center"},"body"===e.scroll&&{overflowY:"auto",overflowX:"hidden",textAlign:"center","&:after":{content:'""',display:"inline-block",verticalAlign:"middle",height:"100%",width:"0"}})),k=(0,h.ZP)(u.Z,{name:"MuiDialog",slot:"Paper",overridesResolver:(e,r)=>{let{ownerState:o}=e;return[r.paper,r[`scrollPaper${(0,c.Z)(o.scroll)}`],r[`paperWidth${(0,c.Z)(String(o.maxWidth))}`],o.fullWidth&&r.paperFullWidth,o.fullScreen&&r.paperFullScreen]}})(({theme:e,ownerState:r})=>(0,a.Z)({margin:32,position:"relative",overflowY:"auto","@media print":{overflowY:"visible",boxShadow:"none"}},"paper"===r.scroll&&{display:"flex",flexDirection:"column",maxHeight:"calc(100% - 64px)"},"body"===r.scroll&&{display:"inline-block",verticalAlign:"middle",textAlign:"left"},!r.maxWidth&&{maxWidth:"calc(100% - 64px)"},"xs"===r.maxWidth&&{maxWidth:"px"===e.breakpoints.unit?Math.max(e.breakpoints.values.xs,444):`max(${e.breakpoints.values.xs}${e.breakpoints.unit}, 444px)`,[`&.${x.Z.paperScrollBody}`]:{[e.breakpoints.down(Math.max(e.breakpoints.values.xs,444)+64)]:{maxWidth:"calc(100% - 64px)"}}},r.maxWidth&&"xs"!==r.maxWidth&&{maxWidth:`${e.breakpoints.values[r.maxWidth]}${e.breakpoints.unit}`,[`&.${x.Z.paperScrollBody}`]:{[e.breakpoints.down(e.breakpoints.values[r.maxWidth]+64)]:{maxWidth:"calc(100% - 64px)"}}},r.fullWidth&&{width:"calc(100% - 64px)"},r.fullScreen&&{margin:0,width:"100%",maxWidth:"100%",height:"100%",maxHeight:"none",borderRadius:0,[`&.${x.Z.paperScrollBody}`]:{margin:0,maxWidth:"100%"}})),P=i.forwardRef(function(e,r){let o=(0,m.Z)({props:e,name:"MuiDialog"}),n=(0,f.Z)(),c={enter:n.transitions.duration.enteringScreen,exit:n.transitions.duration.leavingScreen},{"aria-describedby":d,"aria-labelledby":h,BackdropComponent:x,BackdropProps:b,children:P,className:C,disableEscapeKeyDown:W=!1,fullScreen:R=!1,fullWidth:M=!1,maxWidth:D="sm",onBackdropClick:$,onClose:_,open:F,PaperComponent:I=u.Z,PaperProps:z={},scroll:B="paper",TransitionComponent:N=p.Z,transitionDuration:T=c,TransitionProps:H}=o,G=(0,t.Z)(o,Z),A=(0,a.Z)({},o,{disableEscapeKeyDown:W,fullScreen:R,fullWidth:M,maxWidth:D,scroll:B}),q=j(A),E=i.useRef(),L=(0,s.Z)(h),V=i.useMemo(()=>({titleId:L}),[L]);return(0,v.jsx)(w,(0,a.Z)({className:(0,l.Z)(q.root,C),closeAfterTransition:!0,components:{Backdrop:y},componentsProps:{backdrop:(0,a.Z)({transitionDuration:T,as:x},b)},disableEscapeKeyDown:W,onClose:_,open:F,ref:r,onClick:e=>{E.current&&(E.current=null,$&&$(e),_&&_(e,"backdropClick"))},ownerState:A},G,{children:(0,v.jsx)(N,(0,a.Z)({appear:!0,in:F,timeout:T,role:"presentation"},H,{children:(0,v.jsx)(S,{className:(0,l.Z)(q.container),onMouseDown:e=>{E.current=e.target===e.currentTarget},ownerState:A,children:(0,v.jsx)(k,(0,a.Z)({as:I,elevation:24,role:"dialog","aria-describedby":d,"aria-labelledby":L},z,{className:(0,l.Z)(q.paper,z.className),ownerState:A,children:(0,v.jsx)(g.Z.Provider,{value:V,children:P})}))})}))}))})},55733:(e,r,o)=>{"use strict";o.d(r,{Z:()=>t});let t=o(17577).createContext({})},17251:(e,r,o)=>{"use strict";o.d(r,{D:()=>i,Z:()=>l});var t=o(71685),a=o(97898);function i(e){return(0,a.Z)("MuiDialog",e)}let l=(0,t.Z)("MuiDialog",["root","scrollPaper","scrollBody","container","paper","paperScrollPaper","paperScrollBody","paperWidthFalse","paperWidthXs","paperWidthSm","paperWidthMd","paperWidthLg","paperWidthXl","paperFullWidth","paperFullScreen"])},66343:(e,r,o)=>{"use strict";o.d(r,{Z:()=>b});var t=o(91367),a=o(45353),i=o(17577),l=o(41135),n=o(88634),s=o(68280),c=o(54641),d=o(54117),p=o(39492),u=o(91703),m=o(10326);let h=["children","className","color","component","disabled","disableFocusRipple","focusVisibleClassName","size","variant"],x=e=>{let{color:r,variant:o,classes:t,size:i}=e,l={root:["root",o,`size${(0,c.Z)(i)}`,"inherit"===r?"colorInherit":r]},s=(0,n.Z)(l,p.N,t);return(0,a.Z)({},t,s)},g=(0,u.ZP)(s.Z,{name:"MuiFab",slot:"Root",shouldForwardProp:e=>(0,u.FO)(e)||"classes"===e,overridesResolver:(e,r)=>{let{ownerState:o}=e;return[r.root,r[o.variant],r[`size${(0,c.Z)(o.size)}`],"inherit"===o.color&&r.colorInherit,r[(0,c.Z)(o.size)],r[o.color]]}})(({theme:e,ownerState:r})=>{var o,t;return(0,a.Z)({},e.typography.button,{minHeight:36,transition:e.transitions.create(["background-color","box-shadow","border-color"],{duration:e.transitions.duration.short}),borderRadius:"50%",padding:0,minWidth:0,width:56,height:56,zIndex:(e.vars||e).zIndex.fab,boxShadow:(e.vars||e).shadows[6],"&:active":{boxShadow:(e.vars||e).shadows[12]},color:e.vars?e.vars.palette.text.primary:null==(o=(t=e.palette).getContrastText)?void 0:o.call(t,e.palette.grey[300]),backgroundColor:(e.vars||e).palette.grey[300],"&:hover":{backgroundColor:(e.vars||e).palette.grey.A100,"@media (hover: none)":{backgroundColor:(e.vars||e).palette.grey[300]},textDecoration:"none"},[`&.${p.Z.focusVisible}`]:{boxShadow:(e.vars||e).shadows[6]}},"small"===r.size&&{width:40,height:40},"medium"===r.size&&{width:48,height:48},"extended"===r.variant&&{borderRadius:24,padding:"0 16px",width:"auto",minHeight:"auto",minWidth:48,height:48},"extended"===r.variant&&"small"===r.size&&{width:"auto",padding:"0 8px",borderRadius:17,minWidth:34,height:34},"extended"===r.variant&&"medium"===r.size&&{width:"auto",padding:"0 16px",borderRadius:20,minWidth:40,height:40},"inherit"===r.color&&{color:"inherit"})},({theme:e,ownerState:r})=>(0,a.Z)({},"inherit"!==r.color&&"default"!==r.color&&null!=(e.vars||e).palette[r.color]&&{color:(e.vars||e).palette[r.color].contrastText,backgroundColor:(e.vars||e).palette[r.color].main,"&:hover":{backgroundColor:(e.vars||e).palette[r.color].dark,"@media (hover: none)":{backgroundColor:(e.vars||e).palette[r.color].main}}}),({theme:e})=>({[`&.${p.Z.disabled}`]:{color:(e.vars||e).palette.action.disabled,boxShadow:(e.vars||e).shadows[0],backgroundColor:(e.vars||e).palette.action.disabledBackground}})),b=i.forwardRef(function(e,r){let o=(0,d.Z)({props:e,name:"MuiFab"}),{children:i,className:n,color:s="default",component:c="button",disabled:p=!1,disableFocusRipple:u=!1,focusVisibleClassName:b,size:f="large",variant:v="circular"}=o,Z=(0,t.Z)(o,h),y=(0,a.Z)({},o,{color:s,component:c,disabled:p,disableFocusRipple:u,size:f,variant:v}),j=x(y);return(0,m.jsx)(g,(0,a.Z)({className:(0,l.Z)(j.root,n),component:c,disabled:p,focusRipple:!u,focusVisibleClassName:(0,l.Z)(j.focusVisible,b),ownerState:y,ref:r},Z,{classes:j,children:i}))})},20745:(e,r)=>{"use strict";Symbol.for("react.element"),Symbol.for("react.portal"),Symbol.for("react.fragment"),Symbol.for("react.strict_mode"),Symbol.for("react.profiler"),Symbol.for("react.provider"),Symbol.for("react.context"),Symbol.for("react.server_context"),Symbol.for("react.forward_ref"),Symbol.for("react.suspense"),Symbol.for("react.suspense_list"),Symbol.for("react.memo"),Symbol.for("react.lazy"),Symbol.for("react.offscreen"),Symbol.for("react.module.reference")},16777:(e,r,o)=>{"use strict";o(20745)},27251:(e,r,o)=>{"use strict";o.r(r),o.d(r,{default:()=>n});var t=o(10326),a=o(78439),i=o.n(a),l=o(49474);function n({children:e}){return t.jsx(l.Z,{children:e})}n.propTypes={children:i().node}},46274:(e,r,o)=>{"use strict";o.d(r,{Z:()=>m});var t=o(10326),a=o(78439),i=o.n(a),l=o(71728),n=o(52188),s=o(17082),c=o(25609),d=o(17306),p=o(25899);function u({link:e,activeLast:r,disabled:o}){let a={typography:"body2",alignItems:"center",color:"text.primary",display:"inline-flex",...o&&!r&&{cursor:"default",pointerEvents:"none",color:"text.disabled"}},i=(0,t.jsxs)(t.Fragment,{children:[e.icon&&t.jsx(l.Z,{component:"span",sx:{mr:1,display:"inherit","& svg":{width:20,height:20}},children:e.icon}),e.name]});return e.href?t.jsx(n.Z,{component:p.r,href:e.href,sx:a,children:i}):(0,t.jsxs)(l.Z,{sx:a,children:[" ",i," "]})}function m({links:e,action:r,heading:o,moreLink:a,activeLast:i,sx:p,...m}){let x=e[e.length-1].name;return(0,t.jsxs)(l.Z,{sx:{...p},children:[(0,t.jsxs)(s.Z,{direction:"row",alignItems:"center",children:[(0,t.jsxs)(l.Z,{sx:{flexGrow:1},children:[o&&t.jsx(c.Z,{variant:"h4",gutterBottom:!0,children:o}),!!e.length&&t.jsx(d.Z,{separator:t.jsx(h,{}),...m,children:e.map(e=>t.jsx(u,{link:e,activeLast:i,disabled:e.name===x},e.name||""))})]}),r&&(0,t.jsxs)(l.Z,{sx:{flexShrink:0},children:[" ",r," "]})]}),!!a&&t.jsx(l.Z,{sx:{mt:2},children:a.map(e=>t.jsx(n.Z,{href:e,variant:"body2",target:"_blank",rel:"noopener",sx:{display:"table"},children:e},e))})]})}function h(){return t.jsx(l.Z,{component:"span",sx:{width:4,height:4,borderRadius:"50%",bgcolor:"text.disabled"}})}u.propTypes={activeLast:i().bool,disabled:i().bool,link:i().shape({href:i().string,icon:i().node,name:i().string})},m.propTypes={action:i().node,activeLast:i().bool,heading:i().string,links:i().array,moreLink:i().array,sx:i().object}},39028:(e,r,o)=>{"use strict";o.d(r,{x:()=>x,Z:()=>l});var t=o(10326),a=o(84554);let i=(0,o(91703).ZP)(a.Z)({width:"100% !important",height:"100% !important","& video":{objectFit:"cover"}});function l({...e}){return t.jsx(i,{...e})}var n=o(78439),s=o.n(n),c=o(43659),d=o(22553),p=o(43055),u=o(65597),m=o(94621),h=o(50775);function x({videoPath:e,open:r,onClose:o,...a}){let l=(0,m.k)(!0);return(0,t.jsxs)(c.Z,{fullScreen:!0,open:r,PaperProps:{sx:{bgcolor:"unset"}},children:[t.jsx(p.Z,{size:"large",onClick:o,sx:{top:24,right:24,zIndex:9,position:"fixed",color:e=>(0,d.Fq)(e.palette.common.white,.72),bgcolor:e=>(0,d.Fq)(e.palette.common.white,.08),"&:hover":{bgcolor:e=>(0,d.Fq)(e.palette.common.white,.16)}},children:t.jsx(h.Z,{icon:"carbon:close",width:24})}),l.value&&t.jsx(u.Z,{sx:{top:0,left:0,right:0,bottom:0,m:"auto",position:"absolute"}}),t.jsx(i,{url:e,playing:!l.value,onReady:l.onFalse,...a})]})}x.propTypes={onClose:s().func,open:s().bool,videoPath:s().string}},24839:(e,r,o)=>{"use strict";o.d(r,{default:()=>h});var t=o(10326),a=o(66343),i=o(71728),l=o(17082),n=o(75616),s=o(3479),c=o(94621),d=o(35117),p=o(50775),u=o(39028),m=o(46274);function h(){let e=(0,c.k)();return(0,t.jsxs)(t.Fragment,{children:[t.jsx(i.Z,{sx:{py:5,bgcolor:e=>"light"===e.palette.mode?"grey.200":"grey.800"},children:t.jsx(n.Z,{children:t.jsx(m.Z,{heading:"Player",links:[{name:"Components",href:s.H.components.root},{name:"Player"}],moreLink:["https://www.npmjs.com/package/react-player"]})})}),t.jsx(n.Z,{sx:{my:10},children:(0,t.jsxs)(i.Z,{gap:3,display:"grid",gridTemplateColumns:"repeat(2, 1fr)",children:[t.jsx(u.Z,{controls:!0,url:d.QJ.video(0)}),t.jsx(l.Z,{alignItems:"center",justifyContent:"center",children:(0,t.jsxs)(a.Z,{color:"primary",variant:"extended",onClick:e.onTrue,children:[t.jsx(p.Z,{icon:"carbon:play",width:24}),"Open with Dialog"]})})]})}),t.jsx(u.x,{open:e.value,onClose:e.onFalse,videoPath:d.QJ.video(0)})]})}},88554:(e,r,o)=>{"use strict";o.r(r),o.d(r,{default:()=>t});let t=(0,o(68570).createProxy)(String.raw`/home/dagi00/Documents/GitHub/site/src/app/components/player/layout.js#default`)},81443:(e,r,o)=>{"use strict";o.r(r),o.d(r,{default:()=>l,metadata:()=>i});var t=o(19510);let a=(0,o(68570).createProxy)(String.raw`/home/dagi00/Documents/GitHub/site/src/sections/examples/player-view.js#default`),i={title:"Components: Player"};function l(){return t.jsx(a,{})}}};var r=require("../../../webpack-runtime.js");r.C(e);var o=e=>r(r.s=e),t=r.X(0,[8125,8e3,9163,6343,1132,476,7042,5117,9474],()=>o(10550));module.exports=t})();