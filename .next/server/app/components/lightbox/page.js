(()=>{var e={};e.id=3906,e.ids=[3906],e.modules={72934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},54580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},45869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},31232:(e,t,o)=>{"use strict";o.r(t),o.d(t,{GlobalError:()=>s.a,__next_app__:()=>h,originalPathname:()=>p,pages:()=>c,routeModule:()=>u,tree:()=>d}),o(72211),o(87174),o(41510),o(29372),o(54864);var r=o(23191),i=o(88716),a=o(37922),s=o.n(a),n=o(95231),l={};for(let e in n)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>n[e]);o.d(t,l);let d=["",{children:["components",{children:["lightbox",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(o.bind(o,72211)),"/home/dagi00/Documents/GitHub/site/src/app/components/lightbox/page.js"]}]},{layout:[()=>Promise.resolve().then(o.bind(o,87174)),"/home/dagi00/Documents/GitHub/site/src/app/components/lightbox/layout.js"]}]},{}]},{layout:[()=>Promise.resolve().then(o.bind(o,41510)),"/home/dagi00/Documents/GitHub/site/src/app/layout.js"],loading:[()=>Promise.resolve().then(o.bind(o,29372)),"/home/dagi00/Documents/GitHub/site/src/app/loading.js"],"not-found":[()=>Promise.resolve().then(o.bind(o,54864)),"/home/dagi00/Documents/GitHub/site/src/app/not-found.js"]}],c=["/home/dagi00/Documents/GitHub/site/src/app/components/lightbox/page.js"],p="/components/lightbox/page",h={require:o,loadChunk:()=>Promise.resolve()},u=new r.AppPageRouteModule({definition:{kind:i.x.APP_PAGE,page:"/components/lightbox/page",pathname:"/components/lightbox",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},23968:(e,t,o)=>{Promise.resolve().then(o.bind(o,52216))},69358:(e,t,o)=>{Promise.resolve().then(o.bind(o,82855))},34039:(e,t,o)=>{"use strict";o.d(t,{Z:()=>x});var r=o(45353),i=o(91367),a=o(17577),s=o(41135),n=o(88634),l=o(91703),d=o(2791),c=o(90313),p=o(71685),h=o(97898);function u(e){return(0,h.ZP)("MuiCard",e)}(0,p.Z)("MuiCard",["root"]);var m=o(10326);let b=["className","raised"],g=e=>{let{classes:t}=e;return(0,n.Z)({root:["root"]},u,t)},Z=(0,l.ZP)(c.Z,{name:"MuiCard",slot:"Root",overridesResolver:(e,t)=>t.root})(()=>({overflow:"hidden"})),x=a.forwardRef(function(e,t){let o=(0,d.i)({props:e,name:"MuiCard"}),{className:a,raised:n=!1}=o,l=(0,i.Z)(o,b),c=(0,r.Z)({},o,{raised:n}),p=g(c);return(0,m.jsx)(Z,(0,r.Z)({className:(0,s.Z)(p.root,a),elevation:n?8:void 0,ref:t,ownerState:c},l))})},76554:(e,t,o)=>{"use strict";o.d(t,{Z:()=>v});var r=o(91367),i=o(45353),a=o(17577),s=o(41135),n=o(88634),l=o(2791),d=o(91703),c=o(38898),p=o(54641),h=o(64228),u=o(45011),m=o(1382),b=o(10326);let g=["children","className","color","component","disabled","error","focused","fullWidth","hiddenLabel","margin","required","size","variant"],Z=e=>{let{classes:t,margin:o,fullWidth:r}=e,i={root:["root","none"!==o&&`margin${(0,p.Z)(o)}`,r&&"fullWidth"]};return(0,n.Z)(i,m.e,t)},x=(0,d.ZP)("div",{name:"MuiFormControl",slot:"Root",overridesResolver:({ownerState:e},t)=>(0,i.Z)({},t.root,t[`margin${(0,p.Z)(e.margin)}`],e.fullWidth&&t.fullWidth)})(({ownerState:e})=>(0,i.Z)({display:"inline-flex",flexDirection:"column",position:"relative",minWidth:0,padding:0,margin:0,border:0,verticalAlign:"top"},"normal"===e.margin&&{marginTop:16,marginBottom:8},"dense"===e.margin&&{marginTop:8,marginBottom:4},e.fullWidth&&{width:"100%"})),v=a.forwardRef(function(e,t){let o;let n=(0,l.i)({props:e,name:"MuiFormControl"}),{children:d,className:p,color:m="primary",component:v="div",disabled:f=!1,error:y=!1,focused:j,fullWidth:w=!1,hiddenLabel:k=!1,margin:_="none",required:C=!1,size:S="medium",variant:$="outlined"}=n,P=(0,r.Z)(n,g),T=(0,i.Z)({},n,{color:m,component:v,disabled:f,error:y,fullWidth:w,hiddenLabel:k,margin:_,required:C,size:S,variant:$}),z=Z(T),[F,M]=a.useState(()=>{let e=!1;return d&&a.Children.forEach(d,t=>{if(!(0,h.Z)(t,["Input","Select"]))return;let o=(0,h.Z)(t,["Select"])?t.props.input:t;o&&(0,c.B7)(o.props)&&(e=!0)}),e}),[R,D]=a.useState(()=>{let e=!1;return d&&a.Children.forEach(d,t=>{(0,h.Z)(t,["Input","Select"])&&((0,c.vd)(t.props,!0)||(0,c.vd)(t.props.inputProps,!0))&&(e=!0)}),e}),[q,B]=a.useState(!1);f&&q&&B(!1);let H=void 0===j||f?q:j,L=a.useMemo(()=>({adornedStart:F,setAdornedStart:M,color:m,disabled:f,error:y,filled:R,focused:H,fullWidth:w,hiddenLabel:k,size:S,onBlur:()=>{B(!1)},onEmpty:()=>{D(!1)},onFilled:()=>{D(!0)},onFocus:()=>{B(!0)},registerEffect:o,required:C,variant:$}),[F,m,f,y,R,H,w,k,o,C,S,$]);return(0,b.jsx)(u.Z.Provider,{value:L,children:(0,b.jsx)(x,(0,i.Z)({as:v,ownerState:T,className:(0,s.Z)(z.root,p),ref:t},P,{children:d}))})})},90943:(e,t,o)=>{"use strict";o.d(t,{Z:()=>v});var r=o(91367),i=o(45353),a=o(17577),s=o(41135),n=o(88634),l=o(39914),d=o(65656),c=o(54641),p=o(2791),h=o(91703),u=o(6379),m=o(10326);let b=["children","className","color","component","disabled","error","filled","focused","required"],g=e=>{let{classes:t,color:o,focused:r,disabled:i,error:a,filled:s,required:l}=e,d={root:["root",`color${(0,c.Z)(o)}`,i&&"disabled",a&&"error",s&&"filled",r&&"focused",l&&"required"],asterisk:["asterisk",a&&"error"]};return(0,n.Z)(d,u.M,t)},Z=(0,h.ZP)("label",{name:"MuiFormLabel",slot:"Root",overridesResolver:({ownerState:e},t)=>(0,i.Z)({},t.root,"secondary"===e.color&&t.colorSecondary,e.filled&&t.filled)})(({theme:e,ownerState:t})=>(0,i.Z)({color:(e.vars||e).palette.text.secondary},e.typography.body1,{lineHeight:"1.4375em",padding:0,position:"relative",[`&.${u.Z.focused}`]:{color:(e.vars||e).palette[t.color].main},[`&.${u.Z.disabled}`]:{color:(e.vars||e).palette.text.disabled},[`&.${u.Z.error}`]:{color:(e.vars||e).palette.error.main}})),x=(0,h.ZP)("span",{name:"MuiFormLabel",slot:"Asterisk",overridesResolver:(e,t)=>t.asterisk})(({theme:e})=>({[`&.${u.Z.error}`]:{color:(e.vars||e).palette.error.main}})),v=a.forwardRef(function(e,t){let o=(0,p.i)({props:e,name:"MuiFormLabel"}),{children:a,className:n,component:c="label"}=o,h=(0,r.Z)(o,b),u=(0,d.Z)(),v=(0,l.Z)({props:o,muiFormControl:u,states:["color","required","focused","disabled","error","filled"]}),f=(0,i.Z)({},o,{color:v.color||"primary",component:c,disabled:v.disabled,error:v.error,filled:v.filled,focused:v.focused,required:v.required}),y=g(f);return(0,m.jsxs)(Z,(0,i.Z)({as:c,ownerState:f,className:(0,s.Z)(y.root,n),ref:t},h,{children:[a,v.required&&(0,m.jsxs)(x,{ownerState:f,"aria-hidden":!0,className:y.asterisk,children:[" ","*"]})]}))})},6379:(e,t,o)=>{"use strict";o.d(t,{M:()=>a,Z:()=>s});var r=o(71685),i=o(97898);function a(e){return(0,i.ZP)("MuiFormLabel",e)}let s=(0,r.Z)("MuiFormLabel",["root","colorSecondary","focused","disabled","error","filled","required","asterisk"])},21969:(e,t,o)=>{"use strict";o.d(t,{Z:()=>y});var r=o(91367),i=o(45353),a=o(17577),s=o(41135),n=o(88634),l=o(11190),d=o(54641),c=o(33662),p=o(91703),h=o(2791),u=o(28973),m=o(10326);let b=["className","color","edge","size","sx"],g=e=>{let{classes:t,edge:o,size:r,color:a,checked:s,disabled:l}=e,c={root:["root",o&&`edge${(0,d.Z)(o)}`,`size${(0,d.Z)(r)}`],switchBase:["switchBase",`color${(0,d.Z)(a)}`,s&&"checked",l&&"disabled"],thumb:["thumb"],track:["track"],input:["input"]},p=(0,n.Z)(c,u.H,t);return(0,i.Z)({},t,p)},Z=(0,p.ZP)("span",{name:"MuiSwitch",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:o}=e;return[t.root,o.edge&&t[`edge${(0,d.Z)(o.edge)}`],t[`size${(0,d.Z)(o.size)}`]]}})({display:"inline-flex",width:58,height:38,overflow:"hidden",padding:12,boxSizing:"border-box",position:"relative",flexShrink:0,zIndex:0,verticalAlign:"middle","@media print":{colorAdjust:"exact"},variants:[{props:{edge:"start"},style:{marginLeft:-8}},{props:{edge:"end"},style:{marginRight:-8}},{props:{size:"small"},style:{width:40,height:24,padding:7,[`& .${u.Z.thumb}`]:{width:16,height:16},[`& .${u.Z.switchBase}`]:{padding:4,[`&.${u.Z.checked}`]:{transform:"translateX(16px)"}}}}]}),x=(0,p.ZP)(c.Z,{name:"MuiSwitch",slot:"SwitchBase",overridesResolver:(e,t)=>{let{ownerState:o}=e;return[t.switchBase,{[`& .${u.Z.input}`]:t.input},"default"!==o.color&&t[`color${(0,d.Z)(o.color)}`]]}})(({theme:e})=>({position:"absolute",top:0,left:0,zIndex:1,color:e.vars?e.vars.palette.Switch.defaultColor:`${"light"===e.palette.mode?e.palette.common.white:e.palette.grey[300]}`,transition:e.transitions.create(["left","transform"],{duration:e.transitions.duration.shortest}),[`&.${u.Z.checked}`]:{transform:"translateX(20px)"},[`&.${u.Z.disabled}`]:{color:e.vars?e.vars.palette.Switch.defaultDisabledColor:`${"light"===e.palette.mode?e.palette.grey[100]:e.palette.grey[600]}`},[`&.${u.Z.checked} + .${u.Z.track}`]:{opacity:.5},[`&.${u.Z.disabled} + .${u.Z.track}`]:{opacity:e.vars?e.vars.opacity.switchTrackDisabled:`${"light"===e.palette.mode?.12:.2}`},[`& .${u.Z.input}`]:{left:"-100%",width:"300%"}}),({theme:e})=>({"&:hover":{backgroundColor:e.vars?`rgba(${e.vars.palette.action.activeChannel} / ${e.vars.palette.action.hoverOpacity})`:(0,l.Fq)(e.palette.action.active,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},variants:[...Object.entries(e.palette).filter(([,e])=>e.main&&e.light).map(([t])=>({props:{color:t},style:{[`&.${u.Z.checked}`]:{color:(e.vars||e).palette[t].main,"&:hover":{backgroundColor:e.vars?`rgba(${e.vars.palette[t].mainChannel} / ${e.vars.palette.action.hoverOpacity})`:(0,l.Fq)(e.palette[t].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${u.Z.disabled}`]:{color:e.vars?e.vars.palette.Switch[`${t}DisabledColor`]:`${"light"===e.palette.mode?(0,l.$n)(e.palette[t].main,.62):(0,l._j)(e.palette[t].main,.55)}`}},[`&.${u.Z.checked} + .${u.Z.track}`]:{backgroundColor:(e.vars||e).palette[t].main}}}))]})),v=(0,p.ZP)("span",{name:"MuiSwitch",slot:"Track",overridesResolver:(e,t)=>t.track})(({theme:e})=>({height:"100%",width:"100%",borderRadius:7,zIndex:-1,transition:e.transitions.create(["opacity","background-color"],{duration:e.transitions.duration.shortest}),backgroundColor:e.vars?e.vars.palette.common.onBackground:`${"light"===e.palette.mode?e.palette.common.black:e.palette.common.white}`,opacity:e.vars?e.vars.opacity.switchTrack:`${"light"===e.palette.mode?.38:.3}`})),f=(0,p.ZP)("span",{name:"MuiSwitch",slot:"Thumb",overridesResolver:(e,t)=>t.thumb})(({theme:e})=>({boxShadow:(e.vars||e).shadows[1],backgroundColor:"currentColor",width:20,height:20,borderRadius:"50%"})),y=a.forwardRef(function(e,t){let o=(0,h.i)({props:e,name:"MuiSwitch"}),{className:a,color:n="primary",edge:l=!1,size:d="medium",sx:c}=o,p=(0,r.Z)(o,b),u=(0,i.Z)({},o,{color:n,edge:l,size:d}),y=g(u),j=(0,m.jsx)(f,{className:y.thumb,ownerState:u});return(0,m.jsxs)(Z,{className:(0,s.Z)(y.root,a),sx:c,ownerState:u,children:[(0,m.jsx)(x,(0,i.Z)({type:"checkbox",icon:j,checkedIcon:j,ref:t,ownerState:u},p,{classes:(0,i.Z)({},y,{root:y.switchBase})})),(0,m.jsx)(v,{className:y.track,ownerState:u})]})})},64228:(e,t,o)=>{"use strict";o.d(t,{Z:()=>r});let r=o(47688).Z},52216:(e,t,o)=>{"use strict";o.r(t),o.d(t,{default:()=>n});var r=o(10326),i=o(78439),a=o.n(i),s=o(49474);function n({children:e}){return r.jsx(s.Z,{children:e})}n.propTypes={children:a().node}},46274:(e,t,o)=>{"use strict";o.d(t,{Z:()=>u});var r=o(10326),i=o(78439),a=o.n(i),s=o(71728),n=o(52188),l=o(17082),d=o(25609),c=o(17306),p=o(25899);function h({link:e,activeLast:t,disabled:o}){let i={typography:"body2",alignItems:"center",color:"text.primary",display:"inline-flex",...o&&!t&&{cursor:"default",pointerEvents:"none",color:"text.disabled"}},a=(0,r.jsxs)(r.Fragment,{children:[e.icon&&r.jsx(s.Z,{component:"span",sx:{mr:1,display:"inherit","& svg":{width:20,height:20}},children:e.icon}),e.name]});return e.href?r.jsx(n.Z,{component:p.r,href:e.href,sx:i,children:a}):(0,r.jsxs)(s.Z,{sx:i,children:[" ",a," "]})}function u({links:e,action:t,heading:o,moreLink:i,activeLast:a,sx:p,...u}){let b=e[e.length-1].name;return(0,r.jsxs)(s.Z,{sx:{...p},children:[(0,r.jsxs)(l.Z,{direction:"row",alignItems:"center",children:[(0,r.jsxs)(s.Z,{sx:{flexGrow:1},children:[o&&r.jsx(d.Z,{variant:"h4",gutterBottom:!0,children:o}),!!e.length&&r.jsx(c.Z,{separator:r.jsx(m,{}),...u,children:e.map(e=>r.jsx(h,{link:e,activeLast:a,disabled:e.name===b},e.name||""))})]}),t&&(0,r.jsxs)(s.Z,{sx:{flexShrink:0},children:[" ",t," "]})]}),!!i&&r.jsx(s.Z,{sx:{mt:2},children:i.map(e=>r.jsx(n.Z,{href:e,variant:"body2",target:"_blank",rel:"noopener",sx:{display:"table"},children:e},e))})]})}function m(){return r.jsx(s.Z,{component:"span",sx:{width:4,height:4,borderRadius:"50%",bgcolor:"text.disabled"}})}h.propTypes={activeLast:a().bool,disabled:a().bool,link:a().shape({href:a().string,icon:a().node,name:a().string})},u.propTypes={action:a().node,activeLast:a().bool,heading:a().string,links:a().array,moreLink:a().array,sx:a().object}},66647:(e,t,o)=>{"use strict";o.d(t,{ZP:()=>v,ev:()=>j});var r=o(10326),i=o(78439),a=o.n(i),s=o(49782),n=o(81062),l=o(27780),d=o(45700),c=o(74988),p=o(84966),h=o(4950),u=o(71728),m=o(50775),b=o(39667),g=o(23743),Z=o(22553);function x(){let e=(0,g.Z)();return r.jsx(b.default,{styles:{".yarl__root":{"--yarl__thumbnails_thumbnail_padding":0,"--yarl__thumbnails_thumbnail_border":"transparent","--yarl__color_backdrop":(0,Z.Fq)(e.palette.grey[900],.9),"--yarl__slide_captions_container_background":(0,Z.Fq)(e.palette.grey[900],.48)},".yarl__slide_title":{fontSize:e.typography.h5.fontSize,fontWeight:e.typography.h5.fontWeight,lineHeight:e.typography.h5.lineHeight},".yarl__slide_description":{fontSize:e.typography.body2.fontSize,fontWeight:e.typography.body2.fontWeight,lineHeight:e.typography.body2.lineHeight},".yarl__button":{filter:"unset"},".yarl__thumbnails_thumbnail":{opacity:.48,"&.yarl__thumbnails_thumbnail_active":{opacity:1}},".yarl__thumbnails_vignette":{"--yarl__thumbnails_vignette_size":0},".yarl__video_container":{backgroundColor:e.palette.common.black}}})}function v({slides:e,disabledZoom:t,disabledVideo:o,disabledTotal:i,disabledCaptions:a,disabledSlideshow:u,disabledThumbnails:b,disabledFullscreen:g,onGetCurrentIndex:Z,...v}){let y=e?e.length:0;return(0,r.jsxs)(r.Fragment,{children:[r.jsx(x,{}),r.jsx(h.ZP,{slides:e,animation:{swipe:240},carousel:{finite:y<5},controller:{closeOnBackdropClick:!0},plugins:function({disabledZoom:e,disabledVideo:t,disabledCaptions:o,disabledSlideshow:r,disabledThumbnails:i,disabledFullscreen:a}){let h=[l.Z,c.Z,d.Z,p.Z,n.Z,s.Z];return i&&(h=h.filter(e=>e!==p.Z)),o&&(h=h.filter(e=>e!==l.Z)),a&&(h=h.filter(e=>e!==c.Z)),r&&(h=h.filter(e=>e!==d.Z)),e&&(h=h.filter(e=>e!==s.Z)),t&&(h=h.filter(e=>e!==n.Z)),h}({disabledZoom:t,disabledVideo:o,disabledCaptions:a,disabledSlideshow:u,disabledThumbnails:b,disabledFullscreen:g}),on:{view:({index:e})=>{Z&&Z(e)}},toolbar:{buttons:[r.jsx(f,{totalItems:y,disabledTotal:i},0),"close"]},render:{iconClose:()=>r.jsx(m.Z,{width:24,icon:"carbon:close"}),iconZoomIn:()=>r.jsx(m.Z,{width:24,icon:"carbon:zoom-in"}),iconZoomOut:()=>r.jsx(m.Z,{width:24,icon:"carbon:zoom-out"}),iconSlideshowPlay:()=>r.jsx(m.Z,{width:24,icon:"carbon:play"}),iconSlideshowPause:()=>r.jsx(m.Z,{width:24,icon:"carbon:pause"}),iconPrev:()=>r.jsx(m.Z,{width:32,icon:"carbon:chevron-left"}),iconNext:()=>r.jsx(m.Z,{width:32,icon:"carbon:chevron-right"}),iconExitFullscreen:()=>r.jsx(m.Z,{width:24,icon:"carbon:center-to-fit"}),iconEnterFullscreen:()=>r.jsx(m.Z,{width:24,icon:"carbon:fit-to-screen"})},...v})]})}function f({totalItems:e,disabledTotal:t}){let{currentIndex:o}=(0,h.oc)();return t?null:(0,r.jsxs)(u.Z,{component:"span",className:"yarl__button",sx:{typography:"body2",alignItems:"center",display:"inline-flex",justifyContent:"center"},children:[(0,r.jsxs)("strong",{children:[" ",o+1," "]})," / ",e]})}v.propTypes={disabledCaptions:a().bool,disabledFullscreen:a().bool,disabledSlideshow:a().bool,disabledThumbnails:a().bool,disabledTotal:a().bool,disabledVideo:a().bool,disabledZoom:a().bool,onGetCurrentIndex:a().func,slides:a().array},f.propTypes={disabledTotal:a().bool,totalItems:a().number};var y=o(17577);function j(e){let[t,o]=(0,y.useState)(-1);return{selected:t,open:t>=0,onOpen:(0,y.useCallback)(t=>{o(e.findIndex(e=>"video"===e.type?e.poster===t:e.src===t))},[e]),onClose:(0,y.useCallback)(()=>{o(-1)},[]),setSelected:o}}},82855:(e,t,o)=>{"use strict";o.d(t,{default:()=>y});var r=o(10326),i=o(17577),a=o(71728),s=o(34039),n=o(17082),l=o(90313),d=o(21969),c=o(75616),p=o(57570),h=o(90943),u=o(76554),m=o(2980),b=o(3479),g=o(35117),Z=o(61929),x=o(66647),v=o(46274);let f=[...[void 0,void 0,void 0,void 0].map((e,t)=>({src:g.QJ.image.cover(t+1),title:"Flamingo",description:"Vicko Mozara \n Veliki zali, Dubravica, Croatia"})),{type:"video",width:1280,height:720,poster:"https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg",sources:[{src:"https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",type:"video/mp4"}]}];function y(){let e=(0,x.ev)(f),[t,o]=(0,i.useState)({disabledZoom:!1,disabledVideo:!1,disabledTotal:!1,disabledCaptions:!1,disabledSlideshow:!1,disabledThumbnails:!1,disabledFullscreen:!1}),g=(0,i.useCallback)(e=>{o({...t,[e.target.name]:e.target.checked})},[t]);return(0,r.jsxs)(r.Fragment,{children:[r.jsx(a.Z,{sx:{py:5,bgcolor:e=>"light"===e.palette.mode?"grey.200":"grey.800"},children:r.jsx(c.Z,{children:r.jsx(v.Z,{heading:"Lightbox",links:[{name:"Components",href:b.H.components.root},{name:"Lightbox"}],moreLink:["https://www.npmjs.com/package/yet-another-react-lightbox"]})})}),r.jsx(c.Z,{sx:{my:10},children:r.jsx(s.Z,{sx:{p:3},children:(0,r.jsxs)(p.Z,{container:!0,spacing:3,children:[r.jsx(p.Z,{xs:12,md:9,children:r.jsx(a.Z,{gap:1,display:"grid",gridTemplateColumns:{xs:"repeat(2, 1fr)",sm:"repeat(3, 1fr)",md:"repeat(4, 1fr)"},children:f.map(t=>{let o="video"===t.type?t.poster:t.src;return r.jsx(Z.Z,{alt:o,src:o,ratio:"1/1",onClick:()=>e.onOpen(`${o}`),sx:{borderRadius:1,cursor:"pointer"}},o)})})}),r.jsx(p.Z,{xs:12,md:3,children:r.jsx(l.Z,{sx:{p:3,bgcolor:"background.neutral",borderRadius:2},children:r.jsx(u.Z,{component:"fieldset",variant:"standard",children:(0,r.jsxs)(n.Z,{spacing:2,children:[r.jsx(h.Z,{component:"legend",sx:{typography:"body2"},children:"Controls"}),r.jsx(m.Z,{control:r.jsx(d.Z,{size:"small",name:"disabledZoom",checked:t.disabledZoom,onChange:g}),label:"Disabled Zoom"}),r.jsx(m.Z,{control:r.jsx(d.Z,{size:"small",name:"disabledTotal",checked:t.disabledTotal,onChange:g}),label:"Disabled Total"}),r.jsx(m.Z,{control:r.jsx(d.Z,{size:"small",name:"disabledVideo",checked:t.disabledVideo,onChange:g}),label:"Disabled Video"}),r.jsx(m.Z,{control:r.jsx(d.Z,{size:"small",name:"disabledCaptions",checked:t.disabledCaptions,onChange:g}),label:"Disabled Captions"}),r.jsx(m.Z,{control:r.jsx(d.Z,{size:"small",name:"disabledSlideshow",checked:t.disabledSlideshow,onChange:g}),label:"Disabled Slideshow"}),r.jsx(m.Z,{control:r.jsx(d.Z,{size:"small",name:"disabledThumbnails",checked:t.disabledThumbnails,onChange:g}),label:"Disabled Thumbnails"}),r.jsx(m.Z,{control:r.jsx(d.Z,{size:"small",name:"disabledFullscreen",checked:t.disabledFullscreen,onChange:g}),label:"Disabled Fullscreen"})]})})})})]})})}),r.jsx(x.ZP,{open:e.open,close:e.onClose,slides:f,index:e.selected,disabledZoom:t.disabledZoom,disabledTotal:t.disabledTotal,disabledVideo:t.disabledVideo,disabledCaptions:t.disabledCaptions,disabledSlideshow:t.disabledSlideshow,disabledThumbnails:t.disabledThumbnails,disabledFullscreen:t.disabledFullscreen})]})}},87174:(e,t,o)=>{"use strict";o.r(t),o.d(t,{default:()=>r});let r=(0,o(68570).createProxy)(String.raw`/home/dagi00/Documents/GitHub/site/src/app/components/lightbox/layout.js#default`)},72211:(e,t,o)=>{"use strict";o.r(t),o.d(t,{default:()=>s,metadata:()=>a});var r=o(19510);let i=(0,o(68570).createProxy)(String.raw`/home/dagi00/Documents/GitHub/site/src/sections/examples/lightbox-view.js#default`),a={title:"Components: Lightbox"};function s(){return r.jsx(i,{})}}};var t=require("../../../webpack-runtime.js");t.C(e);var o=e=>t(t.s=e),r=t.X(0,[7576,2666,9163,2765,8833,476,7042,5117,9474],()=>o(31232));module.exports=r})();