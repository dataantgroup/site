(()=>{var e={};e.id=9614,e.ids=[9614],e.modules={72934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},54580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},45869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},21061:(e,r,t)=>{"use strict";t.r(r),t.d(r,{GlobalError:()=>a.a,__next_app__:()=>u,originalPathname:()=>p,pages:()=>d,routeModule:()=>h,tree:()=>c}),t(97021),t(19654),t(41510),t(29372),t(54864);var n=t(23191),i=t(88716),o=t(37922),a=t.n(o),s=t(95231),l={};for(let e in s)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>s[e]);t.d(r,l);let c=["",{children:["e-commerce",{children:["product",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(t.bind(t,97021)),"/home/dagi00/Documents/GitHub/site/src/app/e-commerce/product/page.js"]}]},{}]},{layout:[()=>Promise.resolve().then(t.bind(t,19654)),"/home/dagi00/Documents/GitHub/site/src/app/e-commerce/layout.js"]}]},{layout:[()=>Promise.resolve().then(t.bind(t,41510)),"/home/dagi00/Documents/GitHub/site/src/app/layout.js"],loading:[()=>Promise.resolve().then(t.bind(t,29372)),"/home/dagi00/Documents/GitHub/site/src/app/loading.js"],"not-found":[()=>Promise.resolve().then(t.bind(t,54864)),"/home/dagi00/Documents/GitHub/site/src/app/not-found.js"]}],d=["/home/dagi00/Documents/GitHub/site/src/app/e-commerce/product/page.js"],p="/e-commerce/product/page",u={require:t,loadChunk:()=>Promise.resolve()},h=new n.AppPageRouteModule({definition:{kind:i.x.APP_PAGE,page:"/e-commerce/product/page",pathname:"/e-commerce/product",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},2978:(e,r,t)=>{Promise.resolve().then(t.bind(t,76242))},33198:(e,r,t)=>{"use strict";t.d(r,{Z:()=>f});var n=t(91367),i=t(45353),o=t(17577),a=t(41135),s=t(88634),l=t(91703),c=t(2791),d=t(27522),p=t(10326);let u=(0,d.Z)((0,p.jsx)("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"Person");var h=t(71685),m=t(97898);function x(e){return(0,m.ZP)("MuiAvatar",e)}(0,h.Z)("MuiAvatar",["root","colorDefault","circular","rounded","square","img","fallback"]);var g=t(31121);let b=["alt","children","className","component","slots","slotProps","imgProps","sizes","src","srcSet","variant"],v=e=>{let{classes:r,variant:t,colorDefault:n}=e;return(0,s.Z)({root:["root",t,n&&"colorDefault"],img:["img"],fallback:["fallback"]},x,r)},Z=(0,l.ZP)("div",{name:"MuiAvatar",slot:"Root",overridesResolver:(e,r)=>{let{ownerState:t}=e;return[r.root,r[t.variant],t.colorDefault&&r.colorDefault]}})(({theme:e})=>({position:"relative",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:40,height:40,fontFamily:e.typography.fontFamily,fontSize:e.typography.pxToRem(20),lineHeight:1,borderRadius:"50%",overflow:"hidden",userSelect:"none",variants:[{props:{variant:"rounded"},style:{borderRadius:(e.vars||e).shape.borderRadius}},{props:{variant:"square"},style:{borderRadius:0}},{props:{colorDefault:!0},style:(0,i.Z)({color:(e.vars||e).palette.background.default},e.vars?{backgroundColor:e.vars.palette.Avatar.defaultBg}:(0,i.Z)({backgroundColor:e.palette.grey[400]},e.applyStyles("dark",{backgroundColor:e.palette.grey[600]})))}]})),j=(0,l.ZP)("img",{name:"MuiAvatar",slot:"Img",overridesResolver:(e,r)=>r.img})({width:"100%",height:"100%",textAlign:"center",objectFit:"cover",color:"transparent",textIndent:1e4}),y=(0,l.ZP)(u,{name:"MuiAvatar",slot:"Fallback",overridesResolver:(e,r)=>r.fallback})({width:"75%",height:"75%"}),f=o.forwardRef(function(e,r){let t=(0,c.i)({props:e,name:"MuiAvatar"}),{alt:s,children:l,className:d,component:u="div",slots:h={},slotProps:m={},imgProps:x,sizes:f,src:w,srcSet:_,variant:k="circular"}=t,P=(0,n.Z)(t,b),S=null,C=function({crossOrigin:e,referrerPolicy:r,src:t,srcSet:n}){let[i,a]=o.useState(!1);return o.useEffect(()=>{if(!t&&!n)return;a(!1);let i=!0,o=new Image;return o.onload=()=>{i&&a("loaded")},o.onerror=()=>{i&&a("error")},o.crossOrigin=e,o.referrerPolicy=r,o.src=t,n&&(o.srcset=n),()=>{i=!1}},[e,r,t,n]),i}((0,i.Z)({},x,{src:w,srcSet:_})),F=w||_,R=F&&"error"!==C,T=(0,i.Z)({},t,{colorDefault:!R,component:u,variant:k}),I=v(T),[N,W]=(0,g.Z)("img",{className:I.img,elementType:j,externalForwardedProps:{slots:h,slotProps:{img:(0,i.Z)({},x,m.img)}},additionalProps:{alt:s,src:w,srcSet:_,sizes:f},ownerState:T});return S=R?(0,p.jsx)(N,(0,i.Z)({},W)):l||0===l?l:F&&s?s[0]:(0,p.jsx)(y,{ownerState:T,className:I.fallback}),(0,p.jsx)(Z,(0,i.Z)({as:u,ownerState:T,className:(0,a.Z)(I.root,d),ref:r},P,{children:S}))})},98117:(e,r,t)=>{"use strict";t.d(r,{Z:()=>b});var n=t(45353),i=t(91367),o=t(17577),a=t(41135),s=t(88634),l=t(25609),c=t(91703),d=t(2791),p=t(64650),u=t(55733),h=t(10326);let m=["className","id"],x=e=>{let{classes:r}=e;return(0,s.Z)({root:["root"]},p.a,r)},g=(0,c.ZP)(l.Z,{name:"MuiDialogTitle",slot:"Root",overridesResolver:(e,r)=>r.root})({padding:"16px 24px",flex:"0 0 auto"}),b=o.forwardRef(function(e,r){let t=(0,d.i)({props:e,name:"MuiDialogTitle"}),{className:s,id:l}=t,c=(0,i.Z)(t,m),p=x(t),{titleId:b=l}=o.useContext(u.Z);return(0,h.jsx)(g,(0,n.Z)({component:"h2",className:(0,a.Z)(p.root,s),ownerState:t,ref:r,variant:"h6",id:null!=l?l:b},c))})},31121:(e,r,t)=>{"use strict";t.d(r,{Z:()=>u});var n=t(45353),i=t(91367),o=t(72823),a=t(18349),s=t(32782),l=t(28606);let c=["className","elementType","ownerState","externalForwardedProps","getSlotOwnerState","internalForwardedProps"],d=["component","slots","slotProps"],p=["component"];function u(e,r){let{className:t,elementType:u,ownerState:h,externalForwardedProps:m,getSlotOwnerState:x,internalForwardedProps:g}=r,b=(0,i.Z)(r,c),{component:v,slots:Z={[e]:void 0},slotProps:j={[e]:void 0}}=m,y=(0,i.Z)(m,d),f=Z[e]||u,w=(0,s.Z)(j[e],h),_=(0,l.Z)((0,n.Z)({className:t},b,{externalForwardedProps:"root"===e?y:void 0,externalSlotProps:w})),{props:{component:k},internalRef:P}=_,S=(0,i.Z)(_.props,p),C=(0,o.Z)(P,null==w?void 0:w.ref,r.ref),F=x?x(S):{},R=(0,n.Z)({},h,F),T="root"===e?k||v:k,I=(0,a.Z)(f,(0,n.Z)({},"root"===e&&!v&&!Z[e]&&g,"root"!==e&&!Z[e]&&g,S,T&&{as:T},{ref:C}),R);return Object.keys(F).forEach(e=>{delete I[e]}),[f,I]}},46274:(e,r,t)=>{"use strict";t.d(r,{Z:()=>h});var n=t(10326),i=t(78439),o=t.n(i),a=t(71728),s=t(52188),l=t(17082),c=t(25609),d=t(17306),p=t(25899);function u({link:e,activeLast:r,disabled:t}){let i={typography:"body2",alignItems:"center",color:"text.primary",display:"inline-flex",...t&&!r&&{cursor:"default",pointerEvents:"none",color:"text.disabled"}},o=(0,n.jsxs)(n.Fragment,{children:[e.icon&&n.jsx(a.Z,{component:"span",sx:{mr:1,display:"inherit","& svg":{width:20,height:20}},children:e.icon}),e.name]});return e.href?n.jsx(s.Z,{component:p.r,href:e.href,sx:i,children:o}):(0,n.jsxs)(a.Z,{sx:i,children:[" ",o," "]})}function h({links:e,action:r,heading:t,moreLink:i,activeLast:o,sx:p,...h}){let x=e[e.length-1].name;return(0,n.jsxs)(a.Z,{sx:{...p},children:[(0,n.jsxs)(l.Z,{direction:"row",alignItems:"center",children:[(0,n.jsxs)(a.Z,{sx:{flexGrow:1},children:[t&&n.jsx(c.Z,{variant:"h4",gutterBottom:!0,children:t}),!!e.length&&n.jsx(d.Z,{separator:n.jsx(m,{}),...h,children:e.map(e=>n.jsx(u,{link:e,activeLast:o,disabled:e.name===x},e.name||""))})]}),r&&(0,n.jsxs)(a.Z,{sx:{flexShrink:0},children:[" ",r," "]})]}),!!i&&n.jsx(a.Z,{sx:{mt:2},children:i.map(e=>n.jsx(s.Z,{href:e,variant:"body2",target:"_blank",rel:"noopener",sx:{display:"table"},children:e},e))})]})}function m(){return n.jsx(a.Z,{component:"span",sx:{width:4,height:4,borderRadius:"50%",bgcolor:"text.disabled"}})}u.propTypes={activeLast:o().bool,disabled:o().bool,link:o().shape({href:o().string,icon:o().node,name:o().string})},h.propTypes={action:o().node,activeLast:o().bool,heading:o().string,links:o().array,moreLink:o().array,sx:o().object}},66647:(e,r,t)=>{"use strict";t.d(r,{ZP:()=>Z,ev:()=>f});var n=t(10326),i=t(78439),o=t.n(i),a=t(49782),s=t(81062),l=t(27780),c=t(45700),d=t(74988),p=t(84966),u=t(4950),h=t(71728),m=t(50775),x=t(39667),g=t(23743),b=t(22553);function v(){let e=(0,g.Z)();return n.jsx(x.default,{styles:{".yarl__root":{"--yarl__thumbnails_thumbnail_padding":0,"--yarl__thumbnails_thumbnail_border":"transparent","--yarl__color_backdrop":(0,b.Fq)(e.palette.grey[900],.9),"--yarl__slide_captions_container_background":(0,b.Fq)(e.palette.grey[900],.48)},".yarl__slide_title":{fontSize:e.typography.h5.fontSize,fontWeight:e.typography.h5.fontWeight,lineHeight:e.typography.h5.lineHeight},".yarl__slide_description":{fontSize:e.typography.body2.fontSize,fontWeight:e.typography.body2.fontWeight,lineHeight:e.typography.body2.lineHeight},".yarl__button":{filter:"unset"},".yarl__thumbnails_thumbnail":{opacity:.48,"&.yarl__thumbnails_thumbnail_active":{opacity:1}},".yarl__thumbnails_vignette":{"--yarl__thumbnails_vignette_size":0},".yarl__video_container":{backgroundColor:e.palette.common.black}}})}function Z({slides:e,disabledZoom:r,disabledVideo:t,disabledTotal:i,disabledCaptions:o,disabledSlideshow:h,disabledThumbnails:x,disabledFullscreen:g,onGetCurrentIndex:b,...Z}){let y=e?e.length:0;return(0,n.jsxs)(n.Fragment,{children:[n.jsx(v,{}),n.jsx(u.ZP,{slides:e,animation:{swipe:240},carousel:{finite:y<5},controller:{closeOnBackdropClick:!0},plugins:function({disabledZoom:e,disabledVideo:r,disabledCaptions:t,disabledSlideshow:n,disabledThumbnails:i,disabledFullscreen:o}){let u=[l.Z,d.Z,c.Z,p.Z,s.Z,a.Z];return i&&(u=u.filter(e=>e!==p.Z)),t&&(u=u.filter(e=>e!==l.Z)),o&&(u=u.filter(e=>e!==d.Z)),n&&(u=u.filter(e=>e!==c.Z)),e&&(u=u.filter(e=>e!==a.Z)),r&&(u=u.filter(e=>e!==s.Z)),u}({disabledZoom:r,disabledVideo:t,disabledCaptions:o,disabledSlideshow:h,disabledThumbnails:x,disabledFullscreen:g}),on:{view:({index:e})=>{b&&b(e)}},toolbar:{buttons:[n.jsx(j,{totalItems:y,disabledTotal:i},0),"close"]},render:{iconClose:()=>n.jsx(m.Z,{width:24,icon:"carbon:close"}),iconZoomIn:()=>n.jsx(m.Z,{width:24,icon:"carbon:zoom-in"}),iconZoomOut:()=>n.jsx(m.Z,{width:24,icon:"carbon:zoom-out"}),iconSlideshowPlay:()=>n.jsx(m.Z,{width:24,icon:"carbon:play"}),iconSlideshowPause:()=>n.jsx(m.Z,{width:24,icon:"carbon:pause"}),iconPrev:()=>n.jsx(m.Z,{width:32,icon:"carbon:chevron-left"}),iconNext:()=>n.jsx(m.Z,{width:32,icon:"carbon:chevron-right"}),iconExitFullscreen:()=>n.jsx(m.Z,{width:24,icon:"carbon:center-to-fit"}),iconEnterFullscreen:()=>n.jsx(m.Z,{width:24,icon:"carbon:fit-to-screen"})},...Z})]})}function j({totalItems:e,disabledTotal:r}){let{currentIndex:t}=(0,u.oc)();return r?null:(0,n.jsxs)(h.Z,{component:"span",className:"yarl__button",sx:{typography:"body2",alignItems:"center",display:"inline-flex",justifyContent:"center"},children:[(0,n.jsxs)("strong",{children:[" ",t+1," "]})," / ",e]})}Z.propTypes={disabledCaptions:o().bool,disabledFullscreen:o().bool,disabledSlideshow:o().bool,disabledThumbnails:o().bool,disabledTotal:o().bool,disabledVideo:o().bool,disabledZoom:o().bool,onGetCurrentIndex:o().func,slides:o().array},j.propTypes={disabledTotal:o().bool,totalItems:o().number};var y=t(17577);function f(e){let[r,t]=(0,y.useState)(-1);return{selected:r,open:r>=0,onOpen:(0,y.useCallback)(r=>{t(e.findIndex(e=>"video"===e.type?e.poster===r:e.src===r))},[e]),onClose:(0,y.useCallback)(()=>{t(-1)},[]),setSelected:t}}},23296:(e,r,t)=>{"use strict";t.d(r,{Z:()=>s});var n=t(10326),i=t(78439),o=t.n(i);let a=(0,t(91703).ZP)("div",{shouldForwardProp:e=>"firstLetter"!==e})(({firstLetter:e,theme:r})=>({h1:{margin:0,...r.typography.h1},h2:{margin:0,...r.typography.h2},h3:{margin:0,...r.typography.h3},h4:{margin:0,...r.typography.h4},h5:{margin:0,...r.typography.h5},h6:{margin:0,...r.typography.h6},p:{margin:0,...r.typography.body1},br:{display:"grid",content:'""',marginTop:"0.75em"},a:{color:r.palette.primary.main,textDecoration:"none","&:hover":{textDecoration:"underline"}},"& ul, & ol":{margin:0,"& li":{lineHeight:2}},hr:{margin:0,flexShrink:0,borderWidth:0,msFlexNegative:0,WebkitFlexShrink:0,borderStyle:"solid",borderBottomWidth:"thin",borderColor:r.palette.divider},"& blockquote":{lineHeight:1.5,fontSize:"1.5em",margin:"40px auto",position:"relative",fontFamily:"Georgia, serif",padding:r.spacing(3,3,3,8),color:r.palette.text.secondary,borderRadius:2*r.shape.borderRadius,backgroundColor:r.palette.background.neutral,[r.breakpoints.up("md")]:{width:"80%"},"& p, & span":{marginBottom:0,fontSize:"inherit",fontFamily:"inherit"},"&:before":{left:16,top:-8,display:"block",fontSize:"3em",content:'"\\201C"',position:"absolute",color:r.palette.text.disabled}},"& img":{borderRadius:r.spacing(1)},table:{width:"100%",borderCollapse:"collapse",border:`1px solid ${r.palette.divider}`,"th, td":{padding:r.spacing(1),border:`1px solid ${r.palette.divider}`},"tbody tr:nth-of-type(odd)":{backgroundColor:r.palette.background.neutral}},input:{"&[type=checkbox]":{position:"relative",cursor:"pointer","&:before":{content:'""',top:-2,left:-2,width:17,height:17,borderRadius:3,position:"absolute",backgroundColor:r.palette.grey["light"===r.palette.mode?300:700]},"&:checked":{"&:before":{backgroundColor:r.palette.primary.main},"&:after":{content:'""',top:1,left:5,width:4,height:9,position:"absolute",transform:"rotate(45deg)",msTransform:"rotate(45deg)",WebkitTransform:"rotate(45deg)",border:`solid ${r.palette.common.white}`,borderWidth:"0 2px 2px 0"}}}},...e&&{"& > p:first-of-type":{"&:first-letter":{float:"left",fontSize:80,lineHeight:1,paddingRight:r.spacing(2),fontWeight:r.typography.fontWeightBold}}}}));function s({content:e,firstLetter:r=!1,sx:t}){return n.jsx(a,{firstLetter:r,dangerouslySetInnerHTML:{__html:e},sx:t})}s.propTypes={content:o().string,firstLetter:o().bool,sx:o().object}},76242:(e,r,t)=>{"use strict";t.d(r,{default:()=>ee});var n=t(10326),i=t(17577),o=t(57570),a=t(75616),s=t(94621),l=t(35117),c=t(55511),d=t(46274),p=t(78439),u=t.n(p),h=t(71728),m=t(7344),x=t(61007),g=t(17082),b=t(46374),v=t(33198),Z=t(9858),j=t(25609),y=t(57957),f=t(50775);function w({name:e,rating:r,message:t,createdAt:i,avatarUrl:o}){return(0,n.jsxs)(g.Z,{direction:"row",sx:{py:4,borderBottom:e=>`solid 1px ${e.palette.divider}`},children:[n.jsx(v.Z,{alt:e,src:o,sx:{width:64,height:64,mr:2.5}}),(0,n.jsxs)(g.Z,{spacing:1,children:[n.jsx(Z.Z,{size:"small",value:r,precision:.5,readOnly:!0,sx:{"& svg":{color:"text.primary"}}}),n.jsx(j.Z,{variant:"subtitle1",children:e}),i&&n.jsx(j.Z,{variant:"caption",sx:{color:"text.disabled"},children:(0,y.Mu)(i)}),n.jsx(j.Z,{variant:"body2",children:t}),(0,n.jsxs)(g.Z,{spacing:1,direction:{xs:"column",sm:"row"},alignItems:{sm:"center"},children:[n.jsx(j.Z,{variant:"subtitle2",children:"Was this review helpful?"}),(0,n.jsxs)(g.Z,{direction:"row",alignItems:"center",spacing:1,children:[n.jsx(b.Z,{size:"small",color:"inherit",startIcon:n.jsx(f.Z,{icon:"carbon:thumbs-up"}),children:"Yes"}),n.jsx(b.Z,{size:"small",color:"inherit",startIcon:n.jsx(f.Z,{icon:"carbon:thumbs-up",sx:{transform:"scale(-1, -1)"}}),children:"No"})]})]})]})]})}function _({reviews:e}){return(0,n.jsxs)(h.Z,{sx:{pt:5},children:[e.map(e=>n.jsx(w,{name:e.name,avatarUrl:e.avatarUrl,createdAt:e.createdAt,message:e.message,rating:e.rating,helpful:e.helpful},e.id)),n.jsx(m.Z,{count:10,color:"primary",sx:{mt:5,mb:10,[`& .${x.Z.ul}`]:{justifyContent:"center"}}})]})}w.propTypes={name:u().string,rating:u().number,message:u().string,avatarUrl:u().string,createdAt:u().instanceOf(Date)},_.propTypes={reviews:u().array};var k=t(40537),P=t(93197);function S({reviewNumber:e,ratingNumber:r,onOpenForm:t}){return n.jsx(h.Z,{sx:{overflow:"hidden",bgcolor:"background.neutral",py:{xs:8,md:10}},children:n.jsx(a.Z,{children:(0,n.jsxs)(o.Z,{container:!0,spacing:{xs:5,md:8},children:[(0,n.jsxs)(o.Z,{xs:12,md:4,children:[n.jsx(j.Z,{variant:"h3",children:"Reviews"}),(0,n.jsxs)(g.Z,{spacing:2,direction:"row",alignItems:"center",sx:{my:3},children:[(0,n.jsxs)(j.Z,{variant:"h2",children:[" ",r]}),(0,n.jsxs)(g.Z,{spacing:.5,children:[n.jsx(Z.Z,{value:r,readOnly:!0,precision:.1,sx:{"& svg":{color:"text.primary"}}}),(0,n.jsxs)(j.Z,{variant:"body2",children:[(0,k.v1)(e)," reviews"]})]})]}),n.jsx(b.Z,{size:"large",color:"inherit",variant:"contained",startIcon:n.jsx(f.Z,{icon:"carbon:edit"}),onClick:t,children:"Write a Review"})]}),n.jsx(o.Z,{xs:12,md:4,children:n.jsx(P.Z,{})})]})})})}S.propTypes={onOpenForm:u().func,ratingNumber:u().number,reviewNumber:u().number};var C=t(22299);function F(){let e=(0,s.k)();return(0,n.jsxs)(n.Fragment,{children:[n.jsx(S,{ratingNumber:4.1,reviewNumber:123456,onOpenForm:e.onTrue}),n.jsx(a.Z,{children:n.jsx(_,{reviews:l.nc})}),n.jsx(C.Z,{open:e.value,onClose:e.onFalse})]})}var R=t(99207),T=t(14350),I=t(3479),N=t(25899),W=t(32247),z=t(95133),A=t(74633),q=t(37541),D=t(58688);let H=[{label:"#FA541C",value:"red"},{label:"#754FFE",value:"violet"},{label:"#00B8D9",value:"cyan"},{label:"#36B37E",value:"green"}],M=[{label:"128GB",value:"128gb"},{label:"256GB",value:"256gb"},{label:"512GB",value:"512gb"},{label:"1TB",value:"1tb"}];function G({name:e,price:r,ratingNumber:t,totalReviews:o,priceSale:a,caption:s}){let l=(0,W.F)("up","md"),[c,d]=(0,i.useState)("red"),[p,u]=(0,i.useState)("128gb"),h=(0,i.useCallback)(e=>{d(e.target.value)},[]),m=(0,i.useCallback)(e=>{u(e.target.value)},[]);return(0,n.jsxs)(n.Fragment,{children:[n.jsx(z.Z,{color:"success",sx:{mb:3},children:"In Stock"}),(0,n.jsxs)(g.Z,{spacing:1,sx:{mb:2},children:[(0,n.jsxs)(j.Z,{variant:"h4",children:[" ",e," "]}),(0,n.jsxs)(g.Z,{spacing:.5,direction:"row",alignItems:"center",children:[n.jsx(Z.Z,{size:"small",value:t,readOnly:!0,precision:.5}),(0,n.jsxs)(j.Z,{variant:"caption",sx:{color:"text.disabled"},children:["(",o," reviews)"]})]})]}),(0,n.jsxs)(g.Z,{spacing:2,children:[n.jsx(A.Z,{price:r,priceSale:a,sx:{typography:"h5"}}),n.jsx(j.Z,{variant:"body2",sx:{color:"text.secondary"},children:s})]}),(0,n.jsxs)(g.Z,{spacing:3,sx:{my:5},children:[(0,n.jsxs)(g.Z,{spacing:2,children:[n.jsx(j.Z,{variant:"subtitle2",children:"Color"}),n.jsx(q.Z,{value:c,onChange:h,options:H})]}),(0,n.jsxs)(g.Z,{spacing:2,children:[n.jsx(j.Z,{variant:"subtitle2",children:"Memory"}),n.jsx(D.Z,{value:p,onChange:m,options:M})]})]}),(0,n.jsxs)(g.Z,{spacing:2,direction:{xs:"column",md:"row"},alignItems:{md:"center"},children:[n.jsx(T.Z,{select:!0,hiddenLabel:!0,SelectProps:{native:!0},sx:{minWidth:100},children:[1,2,3,4,5,6,7,8,9,10].map(e=>n.jsx("option",{value:e,children:e},e))}),(0,n.jsxs)(g.Z,{direction:"row",spacing:2,children:[n.jsx(b.Z,{component:N.r,href:I.H.eCommerce.cart,fullWidth:!l,size:"large",color:"inherit",variant:"contained",startIcon:n.jsx(f.Z,{icon:"carbon:shopping-cart-plus"}),children:"Add to Cart"}),n.jsx(b.Z,{component:N.r,href:I.H.eCommerce.cart,fullWidth:!l,size:"large",color:"primary",variant:"contained",children:"Buy Now"})]})]}),n.jsx(R.Z,{sx:{borderStyle:"dashed",my:3}}),(0,n.jsxs)(g.Z,{spacing:3,direction:"row",justifyContent:{xs:"center",md:"unset"},children:[(0,n.jsxs)(g.Z,{direction:"row",alignItems:"center",sx:{typography:"subtitle2"},children:[n.jsx(f.Z,{icon:"carbon:add-alt",sx:{mr:1}})," Compare"]}),(0,n.jsxs)(g.Z,{direction:"row",alignItems:"center",sx:{typography:"subtitle2"},children:[n.jsx(f.Z,{icon:"carbon:favorite",sx:{mr:1}})," Compare"]}),(0,n.jsxs)(g.Z,{direction:"row",alignItems:"center",sx:{typography:"subtitle2"},children:[n.jsx(f.Z,{icon:"carbon:share",sx:{mr:1}})," Compare"]})]})]})}G.propTypes={caption:u().string,name:u().string,price:u().number,priceSale:u().number,ratingNumber:u().number,totalReviews:u().number};var B=t(91703),O=t(22553),E=t(23743),L=t(45861),$=t(61929),U=t(66647),X=t(39607);let Q=(0,B.ZP)("div")(({length:e,theme:r})=>({position:"relative",margin:r.spacing(0,"auto"),"& .slick-slide":{lineHeight:0},...1===e&&{maxWidth:80},...2===e&&{maxWidth:160},...(3===e||4===e)&&{maxWidth:240},...e>=5&&{maxWidth:384},...e>3&&{"&:before, &:after":{...(0,L.v3)({direction:"to left",startColor:`${(0,O.Fq)(r.palette.background.default,0)} 0%`,endColor:`${r.palette.background.default} 100%`}),top:0,zIndex:9,content:"''",height:"100%",position:"absolute",width:128/3},"&:after":{right:0,transform:"scaleX(-1)"}}}));function V({images:e}){let r=(0,E.Z)(),t=e.map(e=>({src:e})),i=(0,U.ev)(t),o=(0,X.vr)({rtl:!1,draggable:!1,adaptiveHeight:!0}),a=(0,X.vr)({rtl:!1,centerMode:!0,swipeToSlide:!0,focusOnSelect:!0,variableWidth:!0,centerPadding:"0px",slidesToShow:t.length>3?3:t.length}),s=n.jsx(h.Z,{sx:{mb:3,borderRadius:2,overflow:"hidden",position:"relative",bgcolor:"background.neutral"},children:n.jsx(X.i5,{onNext:a.onNext,onPrev:a.onPrev,children:n.jsx(X.ZP,{...o.carouselSettings,asNavFor:a.nav,ref:o.carouselRef,children:t.map(e=>n.jsx($.Z,{alt:"product",src:e.src,ratio:"1/1",onClick:()=>i.onOpen(e.src),sx:{cursor:"zoom-in"}},e.src))})})}),l=n.jsx(Q,{length:t.length,children:n.jsx(X.ZP,{...a.carouselSettings,asNavFor:o.nav,ref:a.carouselRef,children:t.map((e,t)=>n.jsx(h.Z,{sx:{px:1},children:n.jsx(v.Z,{alt:e.src,src:e.src,variant:"rounded",sx:{width:64,height:64,opacity:.48,cursor:"pointer",...o.currentIndex===t&&{opacity:1,border:`solid 2.5px ${r.palette.primary.main}`}}},e.src)},e.src))})});return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(h.Z,{sx:{"& .slick-slide":{float:"rtl"===r.direction?"right":"left"}},children:[s,l]}),n.jsx(U.ZP,{index:i.selected,slides:t,open:i.open,close:i.onClose,onGetCurrentIndex:e=>i.setSelected(e)})]})}V.propTypes={images:u().array};var Y=t(23296);function J({description:e,specifications:r}){return(0,n.jsxs)(g.Z,{spacing:4,sx:{py:{xs:5,md:10}},children:[(0,n.jsxs)(g.Z,{spacing:2,children:[n.jsx(j.Z,{variant:"h6",children:" Specifications "}),r.map(e=>(0,n.jsxs)(g.Z,{spacing:.5,direction:{xs:"column",sm:"row"},alignItems:{sm:"center"},sx:{typography:"body2"},children:[n.jsx(h.Z,{component:"span",sx:{width:160,color:"text.secondary"},children:e.label}),n.jsx(h.Z,{component:"span",children:e.value})]},e.label))]}),(0,n.jsxs)(g.Z,{spacing:2,children:[n.jsx(j.Z,{variant:"h6",children:" Description "}),n.jsx(Y.Z,{content:e})]})]})}J.propTypes={description:u().string,specifications:u().array};let K=l.MQ[0];function ee(){return(0,s.k)(!0).value?n.jsx(c.c,{}):(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(a.Z,{sx:{overflow:"hidden"},children:[n.jsx(d.Z,{links:[{name:"Home"},{name:"Mobile Phones"},{name:"Apple iPhone 14"}],sx:{my:5}}),(0,n.jsxs)(o.Z,{container:!0,spacing:{xs:5,md:8},children:[n.jsx(o.Z,{xs:12,md:6,lg:7,children:n.jsx(V,{images:K.images})}),n.jsx(o.Z,{xs:12,md:6,lg:5,children:n.jsx(G,{name:K.name,price:K.price,caption:K.caption,priceSale:K.priceSale,ratingNumber:K.ratingNumber,totalReviews:K.totalReviews})})]}),n.jsx(o.Z,{container:!0,columnSpacing:{md:8},children:n.jsx(o.Z,{xs:12,md:6,lg:7,children:n.jsx(J,{description:K.description,specifications:[{label:"Category",value:"Mobile"},{label:"Manufacturer",value:"Apple"},{label:"Warranty",value:"12 Months"},{label:"Serial number",value:"358607726380311"},{label:"Ships From",value:"United States"}]})})})]}),n.jsx(F,{})]})}},22299:(e,r,t)=>{"use strict";t.d(r,{Z:()=>j});var n=t(10326),i=t(10123),o=t(78439),a=t.n(o),s=t(74723),l=t(1774),c=t(17082),d=t(46374),p=t(43659),u=t(9858),h=t(25609),m=t(42294),x=t(98117),g=t(10163),b=t(28591),v=t(36238),Z=t(63917);function j({onClose:e,...r}){let t=i.Ry().shape({name:i.Z_().required("Name is required"),rating:i.Rx().min(1,"Rating must be greater than or equal to 1"),review:i.Z_().required("Review is required"),email:i.Z_().required("Email is required").email("That is not an email")}),o=(0,s.cI)({resolver:(0,l.X)(t),defaultValues:{rating:0,review:"",name:"",email:""}}),{reset:a,control:j,handleSubmit:y,formState:{errors:f,isSubmitting:w}}=o,_=y(async r=>{try{await new Promise(e=>setTimeout(e,500)),a(),e(),console.log("DATA",r)}catch(e){console.error(e)}});return n.jsx(p.Z,{fullWidth:!0,maxWidth:"sm",onClose:e,...r,children:(0,n.jsxs)(Z.ZP,{methods:o,onSubmit:_,children:[n.jsx(x.Z,{sx:{typography:"h3",pb:3},children:"Review"}),n.jsx(b.Z,{sx:{py:0},children:(0,n.jsxs)(c.Z,{spacing:2.5,children:[(0,n.jsxs)("div",{children:[n.jsx(h.Z,{variant:"subtitle2",gutterBottom:!0,children:"Your rating:"}),n.jsx(s.Qr,{name:"rating",control:j,render:({field:e})=>n.jsx(u.Z,{...e,value:Number(e.value),onChange:(r,t)=>{e.onChange(t)}})}),!!f.rating&&(0,n.jsxs)(v.Z,{error:!0,children:[" ",f.rating?.message]})]}),n.jsx(Z.au,{multiline:!0,rows:3,name:"review",label:"Review *"}),n.jsx(Z.au,{name:"name",label:"Name *"}),n.jsx(Z.au,{name:"email",label:"Email address *"})]})}),(0,n.jsxs)(g.Z,{children:[n.jsx(d.Z,{variant:"outlined",onClick:e,color:"inherit",children:"Cancel"}),n.jsx(m.Z,{color:"inherit",type:"submit",variant:"contained",loading:w,children:"Post Review"})]})]})})}j.propTypes={onClose:a().func}},93197:(e,r,t)=>{"use strict";t.d(r,{Z:()=>Z});var n=t(10326),i=t(17082),o=t(68775),a=t(78439),s=t.n(a),l=t(71728),c=t(21558),d=t(22553),p=t(25609),u=t(86527),h=t(2980),m=t(51596),x=t(40537),g=t(50775);function b({rating:e,totals:r,index:t}){return n.jsx(h.Z,{value:e.value,control:n.jsx(c.Z,{sx:{display:"none"}}),label:(0,n.jsxs)(i.Z,{alignItems:"center",direction:"row",children:[(0,n.jsxs)(i.Z,{direction:"row",alignItems:"center",children:[n.jsx(l.Z,{sx:{width:12,typography:"subtitle1",textAlign:"center",mr:.5},children:5-t}),n.jsx(g.Z,{width:16,icon:"carbon:star"})]}),n.jsx(u.Z,{color:"inherit",variant:"determinate",value:e.number/r*100,sx:{mx:2,width:1,height:6,"&:before":{opacity:1,bgcolor:e=>(0,d.Fq)(e.palette.grey[500],.12)}}}),n.jsx(p.Z,{variant:"body2",sx:{minWidth:40,color:"text.disabled"},children:(0,x.v1)(e.number)})]}),sx:{mx:0,"&:hover":{opacity:.48},[`& .${m.Z.label}`]:{width:1}}})}b.propTypes={index:s().number,rating:s().shape({number:s().number,value:s().string}),totals:s().number};let v=[{value:"5start",number:5212},{value:"4start",number:2442},{value:"3start",number:523},{value:"2start",number:423},{value:"1start",number:80}];function Z({...e}){let r=v.map(e=>e.number).reduce((e,r)=>e+r);return n.jsx(o.Z,{children:n.jsx(i.Z,{spacing:2,...e,children:v.map((e,t)=>n.jsx(b,{rating:e,index:t,totals:r},e.value))})})}},97021:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>a,metadata:()=>o});var n=t(19510);let i=(0,t(68570).createProxy)(String.raw`/home/dagi00/Documents/GitHub/site/src/sections/_ecommerce/view/ecommerce-product-view.js#default`),o={title:"E-commerce: Product"};function a(){return n.jsx(i,{})}}};var r=require("../../../webpack-runtime.js");r.C(e);var t=e=>r(r.s=e),n=r.X(0,[7576,2666,9163,9342,4350,3405,7608,7700,3826,4941,9159,7344,2960,9858,8833,9598,476,7042,5117,9474,3917,1063,8245],()=>t(21061));module.exports=n})();