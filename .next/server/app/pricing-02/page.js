(()=>{var e={};e.id=3669,e.ids=[3669],e.modules={72934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},54580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},45869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},5830:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>s.a,__next_app__:()=>u,originalPathname:()=>p,pages:()=>d,routeModule:()=>x,tree:()=>c}),r(28972),r(59541),r(41510),r(29372),r(54864);var n=r(23191),i=r(88716),o=r(37922),s=r.n(o),a=r(95231),l={};for(let e in a)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>a[e]);r.d(t,l);let c=["",{children:["pricing-02",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,28972)),"/home/dagi00/Documents/GitHub/site/src/app/pricing-02/page.js"]}]},{layout:[()=>Promise.resolve().then(r.bind(r,59541)),"/home/dagi00/Documents/GitHub/site/src/app/pricing-02/layout.js"]}]},{layout:[()=>Promise.resolve().then(r.bind(r,41510)),"/home/dagi00/Documents/GitHub/site/src/app/layout.js"],loading:[()=>Promise.resolve().then(r.bind(r,29372)),"/home/dagi00/Documents/GitHub/site/src/app/loading.js"],"not-found":[()=>Promise.resolve().then(r.bind(r,54864)),"/home/dagi00/Documents/GitHub/site/src/app/not-found.js"]}],d=["/home/dagi00/Documents/GitHub/site/src/app/pricing-02/page.js"],p="/pricing-02/page",u={require:r,loadChunk:()=>Promise.resolve()},x=new n.AppPageRouteModule({definition:{kind:i.x.APP_PAGE,page:"/pricing-02/page",pathname:"/pricing-02",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},55484:(e,t,r)=>{Promise.resolve().then(r.bind(r,76225))},36100:(e,t,r)=>{Promise.resolve().then(r.bind(r,10656))},47688:(e,t,r)=>{"use strict";r.d(t,{Z:()=>i});var n=r(17577);function i(e,t){var r,i;return n.isValidElement(e)&&-1!==t.indexOf(null!=(r=e.type.muiName)?r:null==(i=e.type)||null==(i=i._payload)||null==(i=i.value)?void 0:i.muiName)}},76225:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>a});var n=r(10326),i=r(78439),o=r.n(i),s=r(94531);function a({children:e}){return n.jsx(s.Z,{children:e})}a.propTypes={children:o().node}},95133:(e,t,r)=>{"use strict";r.d(t,{Z:()=>x});var n=r(10326),i=r(78439),o=r.n(i),s=r(17577),a=r(71728),l=r(23743),c=r(91703),d=r(22553);let p=(0,c.ZP)(a.Z)(({theme:e,ownerState:t})=>{let r="light"===e.palette.mode,n="filled"===t.variant,i="outlined"===t.variant,o="soft"===t.variant,s={..."default"===t.color&&{...n&&{color:r?e.palette.common.white:e.palette.grey[800],backgroundColor:e.palette.text.primary},...i&&{backgroundColor:"transparent",color:e.palette.text.primary,border:`2px solid ${e.palette.text.primary}`},...o&&{color:e.palette.text.secondary,backgroundColor:(0,d.Fq)(e.palette.grey[500],.16)}}},a={..."default"!==t.color&&{...n&&{color:e.palette[t.color].contrastText,backgroundColor:e.palette[t.color].main},...i&&{backgroundColor:"transparent",color:e.palette[t.color].main,border:`2px solid ${e.palette[t.color].main}`},...o&&{color:e.palette[t.color][r?"dark":"light"],backgroundColor:(0,d.Fq)(e.palette[t.color].main,.16)}}};return{height:24,minWidth:24,lineHeight:0,borderRadius:6,cursor:"default",alignItems:"center",whiteSpace:"nowrap",display:"inline-flex",justifyContent:"center",textTransform:"capitalize",padding:e.spacing(0,.75),fontSize:e.typography.pxToRem(12),fontWeight:e.typography.fontWeightBold,transition:e.transitions.create("all",{duration:e.transitions.duration.shorter}),...s,...a}}),u=(0,s.forwardRef)(({children:e,color:t="default",variant:r="soft",startIcon:i,endIcon:o,sx:s,...c},d)=>{let u=(0,l.Z)(),x={width:16,height:16,"& svg, img":{width:1,height:1,objectFit:"cover"}};return(0,n.jsxs)(p,{ref:d,component:"span",ownerState:{color:t,variant:r},sx:{...i&&{pl:.75},...o&&{pr:.75},...s},theme:u,...c,children:[i&&(0,n.jsxs)(a.Z,{sx:{mr:.75,...x},children:[" ",i," "]}),e,o&&(0,n.jsxs)(a.Z,{sx:{ml:.75,...x},children:[" ",o," "]})]})});u.propTypes={children:o().node,color:o().oneOf(["default","primary","secondary","info","success","warning","error"]),endIcon:o().object,startIcon:o().object,sx:o().object,variant:o().oneOf(["filled","outlined","ghost","soft"])};let x=u},94621:(e,t,r)=>{"use strict";r.d(t,{k:()=>i});var n=r(17577);function i(e){let[t,r]=(0,n.useState)(!!e);return{value:t,onTrue:(0,n.useCallback)(()=>{r(!0)},[]),onFalse:(0,n.useCallback)(()=>{r(!1)},[]),onToggle:(0,n.useCallback)(()=>{r(e=>!e)},[]),setValue:r}}},94531:(e,t,r)=>{"use strict";r.d(t,{Z:()=>a});var n=r(10326),i=r(78439),o=r.n(i),s=r(22524);function a({children:e}){return(0,n.jsxs)(n.Fragment,{children:[n.jsx(s.Z,{}),e]})}a.propTypes={children:o().node}},10656:(e,t,r)=>{"use strict";r.d(t,{default:()=>w});var n=r(10326),i=r(17082),o=r(83708),s=r(75616),a=r(57570),l=r(25609),c=r(32247),d=r(35117),p=r(50775),u=r(78439),x=r.n(u),m=r(95133),h=r(61929);function g({plan:e}){let t="Start"===e.license,r="Pro"===e.license;return(0,n.jsxs)(i.Z,{spacing:2,alignItems:{xs:"flex-start",md:"center"},sx:{px:3,py:5,position:"relative",...r&&{bgcolor:{md:"background.neutral"},borderRadius:"16px 16px 0 0"}},children:[r&&n.jsx(m.Z,{color:"info",sx:{position:"absolute",top:16,right:16},children:"POPULAR"}),n.jsx(l.Z,{variant:"overline",sx:{color:"text.secondary"},children:e.license}),(0,n.jsxs)(i.Z,{direction:"row",alignItems:"center",justifyContent:"center",spacing:.5,sx:{...r&&{color:{md:"primary.main"}}},children:[!t&&n.jsx(l.Z,{variant:"h4",component:"span",children:"$"}),n.jsx(l.Z,{variant:"h3",component:"span",children:e.price}),!t&&n.jsx(l.Z,{variant:"subtitle2",component:"span",children:"/mo"})]}),n.jsx(h.Z,{alt:e.icon,src:e.icon,sx:{width:80,height:80}}),n.jsx(l.Z,{variant:"body2",sx:{color:"text.secondary"},children:e.caption})]})}g.propTypes={plan:x().shape({caption:x().string,icon:x().oneOfType([x().string,x().element]),license:x().string,price:x().string})};var b=r(52188),j=r(46374),v=r(5041),f=r(94621);function y({plan:e}){let t=(0,f.k)(),r="Start"===e.license,o="Pro"===e.license,s="Business"===e.license;return(0,n.jsxs)(i.Z,{spacing:5,sx:{px:3,pb:5},children:[(0,n.jsxs)("div",{children:[(0,n.jsxs)(b.Z,{variant:"subtitle2",color:t.value?"primary":"inherit",onClick:t.onToggle,sx:{display:"flex",alignItems:"center",cursor:"pointer"},children:[t.value?"Hide":"Show"," all feature",n.jsx(p.Z,{icon:t.value?"carbon:chevron-up":"carbon:chevron-down",sx:{ml:1}})]}),n.jsx(v.Z,{unmountOnExit:!0,in:t.value,children:n.jsx(i.Z,{spacing:2,sx:{pt:3},children:e.options.map(e=>(0,n.jsxs)(i.Z,{direction:"row",alignItems:"center",justifyContent:"space-between",children:[n.jsx(l.Z,{variant:"body2",sx:{...e.disabled&&{color:"text.disabled"}},children:e.title}),n.jsx(p.Z,{icon:e.disabled?"carbon:close-outline":"carbon:checkmark",sx:{color:"primary.main",...e.disabled&&{color:"text.disabled"}}})]},e.title))})})]}),(0,n.jsxs)(j.Z,{fullWidth:!0,size:"large",variant:o?"contained":"outlined",color:"inherit",children:[r&&"Start Free Trial",o&&"Choose Pro",s&&"Contact Sale"]})]})}y.propTypes={plan:x().shape({license:x().string,options:x().array})};var Z=r(71728);function P({plan:e}){let t="Start"===e.license,r="Pro"===e.license,o="Business"===e.license;return(0,n.jsxs)(Z.Z,{children:[e.options.map(e=>n.jsx(i.Z,{alignItems:"center",justifyContent:"center",sx:{height:72,color:"text.secondary",borderBottom:e=>`solid 1px ${e.palette.divider}`,...r&&{bgcolor:"background.neutral"}},children:e.disabled?"-":n.jsx(p.Z,{icon:"carbon:checkmark",sx:{width:24,height:24,color:"primary.main"}})},e.title)),n.jsx(i.Z,{sx:{py:5,...r&&{bgcolor:"background.neutral",borderRadius:"0 0 16px 16px"}},children:(0,n.jsxs)(j.Z,{size:"large",variant:r?"contained":"outlined",color:"inherit",sx:{mx:"auto"},children:[t&&"Start Free Trial",r&&"Choose Pro",o&&"Contact Sale"]})})]})}function w(){let e=(0,c.F)("up","md");return(0,n.jsxs)(s.Z,{sx:{minHeight:1,pt:{xs:13,md:16},pb:{xs:10,md:15}},children:[(0,n.jsxs)(l.Z,{variant:"h3",align:"center",paragraph:!0,children:["Flexible plans for your",n.jsx("br",{})," community's size and needs"]}),n.jsx(l.Z,{align:"center",sx:{mb:{xs:5,md:8},color:"text.secondary"},children:"Choose your plan and make modern online conversation magic"}),(0,n.jsxs)(a.Z,{container:!0,alignItems:"flex-end",children:[e&&n.jsx(a.Z,{xs:12,md:3,sx:{pb:5},children:n.jsx(l.Z,{variant:"overline",sx:{color:"primary.main"},children:"Feature"})}),d.Kj.map(t=>(0,n.jsxs)(a.Z,{xs:12,md:3,sx:{mb:{xs:4,md:0},borderRadius:{xs:2,md:0},boxShadow:e=>({xs:e.customShadows.z16,md:0})},children:[n.jsx(g,{plan:t}),!e&&n.jsx(y,{plan:t})]},t.license))]}),e&&(0,n.jsxs)(a.Z,{container:!0,children:[n.jsx(a.Z,{xs:12,md:3,sx:{borderTop:e=>`solid 1px ${e.palette.divider}`},children:d.Kj[0].options.map(e=>(0,n.jsxs)(i.Z,{direction:"row",alignItems:"center",justifyContent:"space-between",sx:{height:72,borderBottom:e=>`solid 1px ${e.palette.divider}`},children:[n.jsx(l.Z,{variant:"subtitle2",children:e.title}),n.jsx(o.Z,{title:e.tootip,placement:"right",arrow:!0,children:n.jsx("div",{children:n.jsx(p.Z,{icon:"carbon:information",sx:{color:"text.secondary"}})})})]},e.title))}),d.Kj.map(e=>n.jsx(a.Z,{xs:12,md:3,sx:{borderTop:e=>({md:`solid 1px ${e.palette.divider}`})},children:n.jsx(P,{plan:e})},e.license))]})]})}P.propTypes={plan:x().shape({license:x().string,options:x().array})}},59541:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>n});let n=(0,r(68570).createProxy)(String.raw`/home/dagi00/Documents/GitHub/site/src/app/pricing-02/layout.js#default`)},28972:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>s,metadata:()=>o});var n=r(19510);let i=(0,r(68570).createProxy)(String.raw`/home/dagi00/Documents/GitHub/site/src/sections/pricing/view/pricing-02-view.js#default`),o={title:"Pricing 02"};function s(){return n.jsx(i,{})}}};var t=require("../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),n=t.X(0,[7576,9163,476,7042,5117],()=>r(5830));module.exports=n})();