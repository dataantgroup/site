(()=>{var e={};e.id=5451,e.ids=[5451],e.modules={72934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},54580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},45869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},82853:(e,t,s)=>{"use strict";s.r(t),s.d(t,{GlobalError:()=>i.a,__next_app__:()=>u,originalPathname:()=>p,pages:()=>d,routeModule:()=>x,tree:()=>l}),s(65166),s(4233),s(41510),s(29372),s(54864);var n=s(23191),r=s(88716),o=s(37922),i=s.n(o),a=s(95231),c={};for(let e in a)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(c[e]=()=>a[e]);s.d(t,c);let l=["",{children:["support",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(s.bind(s,65166)),"/home/dagi00/Documents/GitHub/site/src/app/support/page.js"]}]},{layout:[()=>Promise.resolve().then(s.bind(s,4233)),"/home/dagi00/Documents/GitHub/site/src/app/support/layout.js"]}]},{layout:[()=>Promise.resolve().then(s.bind(s,41510)),"/home/dagi00/Documents/GitHub/site/src/app/layout.js"],loading:[()=>Promise.resolve().then(s.bind(s,29372)),"/home/dagi00/Documents/GitHub/site/src/app/loading.js"],"not-found":[()=>Promise.resolve().then(s.bind(s,54864)),"/home/dagi00/Documents/GitHub/site/src/app/not-found.js"]}],d=["/home/dagi00/Documents/GitHub/site/src/app/support/page.js"],p="/support/page",u={require:s,loadChunk:()=>Promise.resolve()},x=new n.AppPageRouteModule({definition:{kind:r.x.APP_PAGE,page:"/support/page",pathname:"/support",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:l}})},29952:(e,t,s)=>{Promise.resolve().then(s.bind(s,94256))},3093:(e,t,s)=>{Promise.resolve().then(s.bind(s,88631))},31121:(e,t,s)=>{"use strict";s.d(t,{Z:()=>u});var n=s(45353),r=s(91367),o=s(72823),i=s(18349),a=s(32782),c=s(28606);let l=["className","elementType","ownerState","externalForwardedProps","getSlotOwnerState","internalForwardedProps"],d=["component","slots","slotProps"],p=["component"];function u(e,t){let{className:s,elementType:u,ownerState:x,externalForwardedProps:h,getSlotOwnerState:m,internalForwardedProps:j}=t,g=(0,r.Z)(t,l),{component:b,slots:Z={[e]:void 0},slotProps:v={[e]:void 0}}=h,y=(0,r.Z)(h,d),f=Z[e]||u,P=(0,a.Z)(v[e],x),w=(0,c.Z)((0,n.Z)({className:s},g,{externalForwardedProps:"root"===e?y:void 0,externalSlotProps:P})),{props:{component:_},internalRef:q}=w,C=(0,r.Z)(w.props,p),G=(0,o.Z)(q,null==P?void 0:P.ref,t.ref),k=m?m(C):{},S=(0,n.Z)({},x,k),A="root"===e?_||b:_,D=(0,i.Z)(f,(0,n.Z)({},"root"===e&&!b&&!Z[e]&&j,"root"!==e&&!Z[e]&&j,C,A&&{as:A},{ref:G}),S);return Object.keys(k).forEach(e=>{delete D[e]}),[f,D]}},94256:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>a});var n=s(10326),r=s(78439),o=s.n(r),i=s(49474);function a({children:e}){return n.jsx(i.Z,{children:e})}a.propTypes={children:o().node}},88631:(e,t,s)=>{"use strict";s.d(t,{default:()=>$});var n=s(10326),r=s(17577),o=s(17082),i=s(75616),a=s(25609),c=s(43055),l=s(94621),d=s(35117),p=s(50775),u=s(78439),x=s.n(u),h=s(71728),m=s(1450),j=s(75407),g=s(91703),b=s(85563),Z=s(16105),v=s(64276),y=s(32247),f=s(61929),P=s(69417);let w=(0,g.ZP)(e=>n.jsx(v.Z,{sx:{borderRadius:1},children:n.jsx(o.Z,{direction:"row",alignItems:"center",spacing:2,...e})}))(({theme:e})=>({...e.typography.subtitle2,padding:e.spacing(2),borderRadius:e.shape.borderRadius,border:`solid 1px ${e.palette.divider}`}));function _({topic:e,data:t,onChangeTopic:s,open:r,onClose:i}){let c=(0,y.F)("up","md"),l=(0,n.jsxs)(P.Z,{sx:{py:{xs:3,md:0}},children:[n.jsx(m.Z,{value:e,onChange:s,orientation:"vertical",sx:{pl:{xs:2.5,md:0}},children:t.map(e=>n.jsx(b.Z,{value:e.title,label:e.title,icon:n.jsx(f.Z,{disabledEffect:!0,alt:e.icon,src:e.icon,sx:{width:28,height:28,mr:"20px !important"}}),sx:{height:56,typography:"body2",justifyContent:"flex-start",[`& .${Z.Z.selected}`]:{typography:"subtitle2"}}},e.title))}),(0,n.jsxs)(h.Z,{sx:{mt:{xs:2.5,md:5},pl:{xs:2.5,md:0},pr:{xs:2.5,md:5}},children:[n.jsx(a.Z,{variant:"h4",paragraph:!0,children:"Do you still need help?"}),n.jsx(a.Z,{variant:"body2",sx:{color:"text.secondary",mb:4},children:"Always support whenever you need (24/7)."}),(0,n.jsxs)(o.Z,{spacing:2,children:[(0,n.jsxs)(w,{children:[n.jsx(p.Z,{icon:"carbon:email",width:24}),n.jsx(a.Z,{variant:"subtitle2",children:"Email"})]}),(0,n.jsxs)(w,{children:[n.jsx(p.Z,{icon:"carbon:chat",width:24}),n.jsx(a.Z,{variant:"subtitle2",children:"Chat Now"})]}),(0,n.jsxs)(w,{children:[n.jsx(p.Z,{icon:"carbon:mobile",width:24}),(0,n.jsxs)(a.Z,{variant:"subtitle2",children:["Call ",n.jsx(h.Z,{component:"span",sx:{color:"primary.main"},children:"552-917-1454"})]})]})]})]})]});return c?n.jsx(j.ZP,{variant:"permanent",PaperProps:{sx:{width:280,position:"unset",bgcolor:"background.default"}},children:l}):n.jsx(j.ZP,{open:r,onClose:i,PaperProps:{sx:{width:280}},children:l})}_.propTypes={data:x().array,onChangeTopic:x().func,onClose:x().func,open:x().bool,topic:x().string};var q=s(14350),C=s(23743),G=s(22553),k=s(22115),S=s(45861);function A(){let e=(0,C.Z)();return(0,n.jsxs)(o.Z,{sx:{...(0,S.v3)({color:(0,G.Fq)(e.palette.grey[900],.8),imgUrl:"/assets/background/overlay_2.jpg"}),py:15,px:2.5,alignItems:"center"},children:[(0,n.jsxs)(a.Z,{variant:"h2",sx:{textAlign:"center",color:"common.white",mb:5},children:["Welcome to ",n.jsx("br",{}),n.jsx(h.Z,{component:"span",sx:{color:"primary.main"},children:"ZONE "}),"Support"]}),n.jsx(q.Z,{fullWidth:!0,hiddenLabel:!0,placeholder:"Search...",InputProps:{startAdornment:n.jsx(k.Z,{position:"start",children:n.jsx(p.Z,{icon:"carbon:search",width:24,sx:{color:"text.disabled"}})}),sx:{color:"common.white"}},sx:{maxWidth:366}})]})}var D=s(10352),H=s(50295),T=s(82901),E=s(81550);function F({contents:e}){let[t,s]=(0,r.useState)(!1),o=(0,r.useCallback)(e=>(t,n)=>{s(!!n&&e)},[]);return n.jsx(h.Z,{sx:{pl:{md:10}},children:e.map(e=>(0,n.jsxs)(D.Z,{expanded:t===e.question,onChange:o(e.question),children:[(0,n.jsxs)(T.Z,{sx:{py:2,minHeight:64,[`& .${E.Z.content}`]:{p:0,m:0},[`&.${E.Z.expanded}`]:{bgcolor:"action.selected"}},children:[n.jsx(a.Z,{variant:"subtitle1",sx:{flexGrow:1},children:e.question}),n.jsx(p.Z,{icon:t===e.question?"carbon:chevron-down":"carbon:chevron-right"})]}),n.jsx(H.Z,{sx:{color:"text.secondary"},children:e.answer})]},e.id))})}F.propTypes={contents:x().array};let R=[{title:"Account",icon:"/assets/icons/faq/ic_faq_account.svg",content:n.jsx(F,{contents:d.PP})},{title:"Payment",icon:"/assets/icons/faq/ic_faq_payment.svg",content:n.jsx(F,{contents:d.PP})},{title:"Delivery",icon:"/assets/icons/faq/ic_faq_delivery.svg",content:n.jsx(F,{contents:d.PP})},{title:"Product",icon:"/assets/icons/faq/ic_faq_package.svg",content:n.jsx(F,{contents:d.PP})},{title:"Return & Refund",icon:"/assets/icons/faq/ic_faq_refund.svg",content:n.jsx(F,{contents:d.PP})},{title:"Assurances",icon:"/assets/icons/faq/ic_faq_assurances.svg",content:n.jsx(F,{contents:d.PP})}];function $(){let[e,t]=(0,r.useState)("Payment"),s=(0,l.k)(),d=(0,r.useCallback)((e,s)=>{t(s)},[]);return(0,n.jsxs)(n.Fragment,{children:[n.jsx(A,{}),n.jsx(o.Z,{alignItems:"flex-end",sx:{py:1.5,px:2.5,display:{md:"none"},borderBottom:e=>`solid 1px ${e.palette.divider}`},children:n.jsx(c.Z,{onClick:s.onTrue,children:n.jsx(p.Z,{icon:"carbon:menu"})})}),(0,n.jsxs)(i.Z,{children:[n.jsx(a.Z,{variant:"h3",sx:{py:{xs:3,md:10}},children:"Frequently Asked Questions"}),(0,n.jsxs)(o.Z,{direction:"row",sx:{pb:{xs:10,md:15}},children:[n.jsx(_,{data:R,topic:e,open:s.value,onChangeTopic:d,onClose:s.onFalse}),R.map(t=>t.title===e&&n.jsx("div",{children:t.content},t.title))]})]})]})}},4233:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>n});let n=(0,s(68570).createProxy)(String.raw`/home/dagi00/Documents/GitHub/site/src/app/support/layout.js#default`)},65166:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>i,metadata:()=>o});var n=s(19510);let r=(0,s(68570).createProxy)(String.raw`/home/dagi00/Documents/GitHub/site/src/sections/support/view/support-view.js#default`),o={title:"Support"};function i(){return n.jsx(r,{})}}};var t=require("../../webpack-runtime.js");t.C(e);var s=e=>t(t.s=e),n=t.X(0,[7576,2666,9163,9342,4350,6694,5497,476,7042,5117,9474],()=>s(82853));module.exports=n})();