(()=>{var e={};e.id=9331,e.ids=[9331],e.modules={72934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},54580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},45869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},65632:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>s.a,__next_app__:()=>h,originalPathname:()=>p,pages:()=>c,routeModule:()=>u,tree:()=>d}),r(15780),r(13442),r(41510),r(29372),r(54864);var i=r(23191),n=r(88716),o=r(37922),s=r.n(o),a=r(95231),l={};for(let e in a)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>a[e]);r.d(t,l);let d=["",{children:["marketing",{children:["case-study",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,15780)),"/home/dagi00/Documents/GitHub/site/src/app/marketing/case-study/page.js"]}]},{layout:[()=>Promise.resolve().then(r.bind(r,13442)),"/home/dagi00/Documents/GitHub/site/src/app/marketing/case-study/layout.js"]}]},{}]},{layout:[()=>Promise.resolve().then(r.bind(r,41510)),"/home/dagi00/Documents/GitHub/site/src/app/layout.js"],loading:[()=>Promise.resolve().then(r.bind(r,29372)),"/home/dagi00/Documents/GitHub/site/src/app/loading.js"],"not-found":[()=>Promise.resolve().then(r.bind(r,54864)),"/home/dagi00/Documents/GitHub/site/src/app/not-found.js"]}],c=["/home/dagi00/Documents/GitHub/site/src/app/marketing/case-study/page.js"],p="/marketing/case-study/page",h={require:r,loadChunk:()=>Promise.resolve()},u=new i.AppPageRouteModule({definition:{kind:n.x.APP_PAGE,page:"/marketing/case-study/page",pathname:"/marketing/case-study",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},39065:(e,t,r)=>{Promise.resolve().then(r.bind(r,11380))},15124:(e,t,r)=>{Promise.resolve().then(r.bind(r,1016))},11380:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>a});var i=r(10326),n=r(78439),o=r.n(n),s=r(49474);function a({children:e}){return i.jsx(s.Z,{children:e})}a.propTypes={children:o().node}},46274:(e,t,r)=>{"use strict";r.d(t,{Z:()=>u});var i=r(10326),n=r(78439),o=r.n(n),s=r(71728),a=r(52188),l=r(17082),d=r(25609),c=r(17306),p=r(25899);function h({link:e,activeLast:t,disabled:r}){let n={typography:"body2",alignItems:"center",color:"text.primary",display:"inline-flex",...r&&!t&&{cursor:"default",pointerEvents:"none",color:"text.disabled"}},o=(0,i.jsxs)(i.Fragment,{children:[e.icon&&i.jsx(s.Z,{component:"span",sx:{mr:1,display:"inherit","& svg":{width:20,height:20}},children:e.icon}),e.name]});return e.href?i.jsx(a.Z,{component:p.r,href:e.href,sx:n,children:o}):(0,i.jsxs)(s.Z,{sx:n,children:[" ",o," "]})}function u({links:e,action:t,heading:r,moreLink:n,activeLast:o,sx:p,...u}){let m=e[e.length-1].name;return(0,i.jsxs)(s.Z,{sx:{...p},children:[(0,i.jsxs)(l.Z,{direction:"row",alignItems:"center",children:[(0,i.jsxs)(s.Z,{sx:{flexGrow:1},children:[r&&i.jsx(d.Z,{variant:"h4",gutterBottom:!0,children:r}),!!e.length&&i.jsx(c.Z,{separator:i.jsx(x,{}),...u,children:e.map(e=>i.jsx(h,{link:e,activeLast:o,disabled:e.name===m},e.name||""))})]}),t&&(0,i.jsxs)(s.Z,{sx:{flexShrink:0},children:[" ",t," "]})]}),!!n&&i.jsx(s.Z,{sx:{mt:2},children:n.map(e=>i.jsx(a.Z,{href:e,variant:"body2",target:"_blank",rel:"noopener",sx:{display:"table"},children:e},e))})]})}function x(){return i.jsx(s.Z,{component:"span",sx:{width:4,height:4,borderRadius:"50%",bgcolor:"text.disabled"}})}h.propTypes={activeLast:o().bool,disabled:o().bool,link:o().shape({href:o().string,icon:o().node,name:o().string})},u.propTypes={action:o().node,activeLast:o().bool,heading:o().string,links:o().array,moreLink:o().array,sx:o().object}},66647:(e,t,r)=>{"use strict";r.d(t,{ZP:()=>j,ev:()=>v});var i=r(10326),n=r(78439),o=r.n(n),s=r(49782),a=r(81062),l=r(27780),d=r(45700),c=r(74988),p=r(84966),h=r(4950),u=r(71728),x=r(50775),m=r(39667),g=r(23743),b=r(22553);function y(){let e=(0,g.Z)();return i.jsx(m.default,{styles:{".yarl__root":{"--yarl__thumbnails_thumbnail_padding":0,"--yarl__thumbnails_thumbnail_border":"transparent","--yarl__color_backdrop":(0,b.Fq)(e.palette.grey[900],.9),"--yarl__slide_captions_container_background":(0,b.Fq)(e.palette.grey[900],.48)},".yarl__slide_title":{fontSize:e.typography.h5.fontSize,fontWeight:e.typography.h5.fontWeight,lineHeight:e.typography.h5.lineHeight},".yarl__slide_description":{fontSize:e.typography.body2.fontSize,fontWeight:e.typography.body2.fontWeight,lineHeight:e.typography.body2.lineHeight},".yarl__button":{filter:"unset"},".yarl__thumbnails_thumbnail":{opacity:.48,"&.yarl__thumbnails_thumbnail_active":{opacity:1}},".yarl__thumbnails_vignette":{"--yarl__thumbnails_vignette_size":0},".yarl__video_container":{backgroundColor:e.palette.common.black}}})}function j({slides:e,disabledZoom:t,disabledVideo:r,disabledTotal:n,disabledCaptions:o,disabledSlideshow:u,disabledThumbnails:m,disabledFullscreen:g,onGetCurrentIndex:b,...j}){let Z=e?e.length:0;return(0,i.jsxs)(i.Fragment,{children:[i.jsx(y,{}),i.jsx(h.ZP,{slides:e,animation:{swipe:240},carousel:{finite:Z<5},controller:{closeOnBackdropClick:!0},plugins:function({disabledZoom:e,disabledVideo:t,disabledCaptions:r,disabledSlideshow:i,disabledThumbnails:n,disabledFullscreen:o}){let h=[l.Z,c.Z,d.Z,p.Z,a.Z,s.Z];return n&&(h=h.filter(e=>e!==p.Z)),r&&(h=h.filter(e=>e!==l.Z)),o&&(h=h.filter(e=>e!==c.Z)),i&&(h=h.filter(e=>e!==d.Z)),e&&(h=h.filter(e=>e!==s.Z)),t&&(h=h.filter(e=>e!==a.Z)),h}({disabledZoom:t,disabledVideo:r,disabledCaptions:o,disabledSlideshow:u,disabledThumbnails:m,disabledFullscreen:g}),on:{view:({index:e})=>{b&&b(e)}},toolbar:{buttons:[i.jsx(f,{totalItems:Z,disabledTotal:n},0),"close"]},render:{iconClose:()=>i.jsx(x.Z,{width:24,icon:"carbon:close"}),iconZoomIn:()=>i.jsx(x.Z,{width:24,icon:"carbon:zoom-in"}),iconZoomOut:()=>i.jsx(x.Z,{width:24,icon:"carbon:zoom-out"}),iconSlideshowPlay:()=>i.jsx(x.Z,{width:24,icon:"carbon:play"}),iconSlideshowPause:()=>i.jsx(x.Z,{width:24,icon:"carbon:pause"}),iconPrev:()=>i.jsx(x.Z,{width:32,icon:"carbon:chevron-left"}),iconNext:()=>i.jsx(x.Z,{width:32,icon:"carbon:chevron-right"}),iconExitFullscreen:()=>i.jsx(x.Z,{width:24,icon:"carbon:center-to-fit"}),iconEnterFullscreen:()=>i.jsx(x.Z,{width:24,icon:"carbon:fit-to-screen"})},...j})]})}function f({totalItems:e,disabledTotal:t}){let{currentIndex:r}=(0,h.oc)();return t?null:(0,i.jsxs)(u.Z,{component:"span",className:"yarl__button",sx:{typography:"body2",alignItems:"center",display:"inline-flex",justifyContent:"center"},children:[(0,i.jsxs)("strong",{children:[" ",r+1," "]})," / ",e]})}j.propTypes={disabledCaptions:o().bool,disabledFullscreen:o().bool,disabledSlideshow:o().bool,disabledThumbnails:o().bool,disabledTotal:o().bool,disabledVideo:o().bool,disabledZoom:o().bool,onGetCurrentIndex:o().func,slides:o().array},f.propTypes={disabledTotal:o().bool,totalItems:o().number};var Z=r(17577);function v(e){let[t,r]=(0,Z.useState)(-1);return{selected:t,open:t>=0,onOpen:(0,Z.useCallback)(t=>{r(e.findIndex(e=>"video"===e.type?e.poster===t:e.src===t))},[e]),onClose:(0,Z.useCallback)(()=>{r(-1)},[]),setSelected:r}}},23296:(e,t,r)=>{"use strict";r.d(t,{Z:()=>a});var i=r(10326),n=r(78439),o=r.n(n);let s=(0,r(91703).ZP)("div",{shouldForwardProp:e=>"firstLetter"!==e})(({firstLetter:e,theme:t})=>({h1:{margin:0,...t.typography.h1},h2:{margin:0,...t.typography.h2},h3:{margin:0,...t.typography.h3},h4:{margin:0,...t.typography.h4},h5:{margin:0,...t.typography.h5},h6:{margin:0,...t.typography.h6},p:{margin:0,...t.typography.body1},br:{display:"grid",content:'""',marginTop:"0.75em"},a:{color:t.palette.primary.main,textDecoration:"none","&:hover":{textDecoration:"underline"}},"& ul, & ol":{margin:0,"& li":{lineHeight:2}},hr:{margin:0,flexShrink:0,borderWidth:0,msFlexNegative:0,WebkitFlexShrink:0,borderStyle:"solid",borderBottomWidth:"thin",borderColor:t.palette.divider},"& blockquote":{lineHeight:1.5,fontSize:"1.5em",margin:"40px auto",position:"relative",fontFamily:"Georgia, serif",padding:t.spacing(3,3,3,8),color:t.palette.text.secondary,borderRadius:2*t.shape.borderRadius,backgroundColor:t.palette.background.neutral,[t.breakpoints.up("md")]:{width:"80%"},"& p, & span":{marginBottom:0,fontSize:"inherit",fontFamily:"inherit"},"&:before":{left:16,top:-8,display:"block",fontSize:"3em",content:'"\\201C"',position:"absolute",color:t.palette.text.disabled}},"& img":{borderRadius:t.spacing(1)},table:{width:"100%",borderCollapse:"collapse",border:`1px solid ${t.palette.divider}`,"th, td":{padding:t.spacing(1),border:`1px solid ${t.palette.divider}`},"tbody tr:nth-of-type(odd)":{backgroundColor:t.palette.background.neutral}},input:{"&[type=checkbox]":{position:"relative",cursor:"pointer","&:before":{content:'""',top:-2,left:-2,width:17,height:17,borderRadius:3,position:"absolute",backgroundColor:t.palette.grey["light"===t.palette.mode?300:700]},"&:checked":{"&:before":{backgroundColor:t.palette.primary.main},"&:after":{content:'""',top:1,left:5,width:4,height:9,position:"absolute",transform:"rotate(45deg)",msTransform:"rotate(45deg)",WebkitTransform:"rotate(45deg)",border:`solid ${t.palette.common.white}`,borderWidth:"0 2px 2px 0"}}}},...e&&{"& > p:first-of-type":{"&:first-letter":{float:"left",fontSize:80,lineHeight:1,paddingRight:t.spacing(2),fontWeight:t.typography.fontWeightBold}}}}));function a({content:e,firstLetter:t=!1,sx:r}){return i.jsx(s,{firstLetter:t,dangerouslySetInnerHTML:{__html:e},sx:r})}a.propTypes={content:o().string,firstLetter:o().bool,sx:o().object}},1016:(e,t,r)=>{"use strict";r.d(t,{default:()=>R});var i=r(10326),n=r(57570),o=r(75616),s=r(3479),a=r(35117),l=r(61929),d=r(23296),c=r(46274),p=r(21028),h=r(52955),u=r(73799),x=r(78439),m=r.n(x),g=r(71728),b=r(17082),y=r(46374),j=r(25609),f=r(25899),Z=r(32247),v=r(50775),_=r(70336);function k({caseStudies:e}){let t=(0,Z.F)("up","md"),r=i.jsx(y.Z,{component:f.r,href:s.H.marketing.caseStudies,color:"inherit",endIcon:i.jsx(v.Z,{icon:"carbon:chevron-right"}),children:"View All"});return(0,i.jsxs)(o.Z,{sx:{py:{xs:10,md:15}},children:[(0,i.jsxs)(b.Z,{direction:"row",alignItems:"center",justifyContent:{xs:"center",md:"space-between"},sx:{mb:{xs:8,md:10}},children:[i.jsx(j.Z,{variant:"h3",children:"You Might Like"}),t&&r]}),i.jsx(g.Z,{sx:{gap:4,display:"grid",gridTemplateColumns:{xs:"repeat(1, 1fr)",sm:"repeat(2, 1fr)",md:"repeat(3, 1fr)"}},children:e.map(e=>i.jsx(_.Z,{project:e},e.id))}),!t&&i.jsx(b.Z,{alignItems:"center",sx:{mt:8},children:r})]})}k.propTypes={caseStudies:m().array},r(17577);var w=r(29979),S=r(23743),P=r(53360),C=r(66647),T=r(39607);function H({images:e}){let t=(0,S.Z)(),r=e.map(e=>({src:e})),n=(0,C.ev)(r),o=(0,T.vr)({slidesToShow:3,slidesToScroll:1,centerMode:!0,responsive:[{breakpoint:t.breakpoints.values.md,settings:{slidesToShow:2}},{breakpoint:t.breakpoints.values.sm,settings:{slidesToShow:1}}]});return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(b.Z,{direction:"row",justifyContent:"space-between",sx:{mt:3,mb:5},children:[i.jsx(j.Z,{variant:"h4",children:"Gallery"}),i.jsx(T.i5,{spacing:2,onNext:o.onNext,onPrev:o.onPrev})]}),i.jsx(T.ZP,{ref:o.carouselRef,...o.carouselSettings,children:r.map(e=>i.jsx(g.Z,{component:w.m.div,whileHover:"hover",sx:{px:1},onClick:()=>n.onOpen(e.src),children:i.jsx(g.Z,{sx:{borderRadius:2,overflow:"hidden",cursor:"pointer"},children:i.jsx(w.m.div,{variants:(0,P.U6)(1.25),transition:(0,P.BN)(),children:i.jsx(l.Z,{alt:e.src,src:e.src,ratio:"4/3"})})})},e.src))}),i.jsx(C.ZP,{index:n.selected,slides:r,open:n.open,close:n.onClose,onGetCurrentIndex:e=>n.setSelected(e)})]})}H.propTypes={images:m().array};var G=r(52188),I=r(99207),D=r(43055),F=r(57957);function W({caseStudy:e}){let{title:t,description:r,category:n,website:o,createdAt:s}=e;return(0,i.jsxs)(b.Z,{spacing:3,sx:{p:5,borderRadius:2,bgcolor:"background.neutral"},children:[(0,i.jsxs)(b.Z,{spacing:2,children:[i.jsx(j.Z,{variant:"overline",sx:{color:"text.disabled"},children:"summary"}),i.jsx(j.Z,{variant:"h6",children:t}),i.jsx(j.Z,{variant:"body2",children:r})]}),i.jsx(I.Z,{sx:{borderStyle:"dashed"}}),(0,i.jsxs)(b.Z,{spacing:1,children:[i.jsx(j.Z,{variant:"overline",sx:{color:"text.disabled"},children:"Website"}),i.jsx(G.Z,{variant:"body2",color:"inherit",children:o}),i.jsx(j.Z,{variant:"overline",sx:{color:"text.disabled",pt:1},children:"Category"}),i.jsx(j.Z,{variant:"body2",sx:{pb:1},children:n}),i.jsx(j.Z,{variant:"overline",sx:{color:"text.disabled"},children:"Date"}),i.jsx(j.Z,{variant:"body2",children:(0,F.Mu)(s)})]}),i.jsx(I.Z,{sx:{borderStyle:"dashed"}}),(0,i.jsxs)(b.Z,{direction:"row",alignItems:"center",spacing:.5,children:[i.jsx(j.Z,{variant:"subtitle2",children:"Share:"}),i.jsx(b.Z,{direction:"row",children:a._I.map(e=>i.jsx(D.Z,{children:i.jsx(v.Z,{icon:e.icon,sx:{color:e.color}})},e.value))})]})]})}W.propTypes={caseStudy:m().shape({title:m().string,website:m().string,category:m().string,description:m().string,createdAt:m().instanceOf(Date)})};let z=a.WD[0];function R(){return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(o.Z,{sx:{overflow:"hidden",pt:5,pb:{xs:10,md:15}},children:[i.jsx(l.Z,{alt:"hero",src:z.heroUrl,ratio:"16/9",sx:{borderRadius:2}}),i.jsx(c.Z,{sx:{my:5},links:[{name:"Home",href:"/"},{name:"Case Studies",href:s.H.marketing.caseStudies},{name:z.title}]}),(0,i.jsxs)(n.Z,{container:!0,spacing:{xs:5,md:8},direction:{md:"row-reverse"},children:[i.jsx(n.Z,{xs:12,md:4,children:i.jsx(W,{caseStudy:a.WD[0]})}),(0,i.jsxs)(n.Z,{xs:12,md:8,children:[i.jsx(d.Z,{content:z.content}),i.jsx(H,{images:z.galleryImgs})]})]})]}),i.jsx(h.Z,{testimonials:a.H6}),i.jsx(k,{caseStudies:a.WD.slice(0,3)}),i.jsx(u.Z,{}),i.jsx(p.Z,{})]})}},13442:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>i});let i=(0,r(68570).createProxy)(String.raw`/home/dagi00/Documents/GitHub/site/src/app/marketing/case-study/layout.js#default`)},15780:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>s,metadata:()=>o});var i=r(19510);let n=(0,r(68570).createProxy)(String.raw`/home/dagi00/Documents/GitHub/site/src/sections/_marketing/view/marketing-case-study-view.js#default`),o={title:"Marketing: Case Study"};function s(){return i.jsx(n,{})}}};var t=require("../../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),i=t.X(0,[7576,2666,9163,2765,4350,7608,8833,476,7042,5117,9474,6520,1980],()=>r(65632));module.exports=i})();