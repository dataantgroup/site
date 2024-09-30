(()=>{var e={};e.id=7937,e.ids=[7937],e.modules={72934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},54580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},45869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},31954:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>a.a,__next_app__:()=>h,originalPathname:()=>u,pages:()=>c,routeModule:()=>m,tree:()=>l}),r(97026),r(42914),r(41510),r(29372),r(54864);var i=r(23191),s=r(88716),n=r(37922),a=r.n(n),o=r(95231),d={};for(let e in o)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(d[e]=()=>o[e]);r.d(t,d);let l=["",{children:["auth",{children:["verify",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,97026)),"/home/dagi00/Documents/GitHub/site/src/app/auth/verify/page.js"]}]},{layout:[()=>Promise.resolve().then(r.bind(r,42914)),"/home/dagi00/Documents/GitHub/site/src/app/auth/verify/layout.js"]}]},{}]},{layout:[()=>Promise.resolve().then(r.bind(r,41510)),"/home/dagi00/Documents/GitHub/site/src/app/layout.js"],loading:[()=>Promise.resolve().then(r.bind(r,29372)),"/home/dagi00/Documents/GitHub/site/src/app/loading.js"],"not-found":[()=>Promise.resolve().then(r.bind(r,54864)),"/home/dagi00/Documents/GitHub/site/src/app/not-found.js"]}],c=["/home/dagi00/Documents/GitHub/site/src/app/auth/verify/page.js"],u="/auth/verify/page",h={require:r,loadChunk:()=>Promise.resolve()},m=new i.AppPageRouteModule({definition:{kind:s.x.APP_PAGE,page:"/auth/verify/page",pathname:"/auth/verify",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:l}})},53220:(e,t,r)=>{Promise.resolve().then(r.bind(r,62451))},27630:(e,t,r)=>{Promise.resolve().then(r.bind(r,63065))},62451:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>o});var i=r(10326),s=r(78439),n=r.n(s),a=r(60926);function o({children:e}){return i.jsx(a.Z,{children:e})}o.propTypes={children:n().node}},60926:(e,t,r)=>{"use strict";r.d(t,{Z:()=>u});var i=r(10326),s=r(78439),n=r.n(s),a=r(17082),o=r(23743),d=r(22553),l=r(45861),c=r(22524);function u({children:e}){let t=(0,o.Z)();return(0,i.jsxs)(i.Fragment,{children:[i.jsx(c.Z,{}),i.jsx(a.Z,{alignItems:"center",justifyContent:"center",sx:{...(0,l.v3)({color:(0,d.Fq)(t.palette.background.default,.9),imgUrl:"/assets/background/overlay_1.jpg"}),px:2,py:12,minHeight:"100vh"},children:i.jsx(a.Z,{spacing:4,sx:{p:4,width:1,mx:"auto",flexShrink:0,maxWidth:400,borderRadius:2,bgcolor:"background.default",boxShadow:t.customShadows.z24,textAlign:{xs:"center",md:"left"}},children:e})})]})}u.propTypes={children:n().node}},63065:(e,t,r)=>{"use strict";r.d(t,{default:()=>g});var i=r(10326),s=r(10123),n=r(74723),a=r(1774),o=r(52188),d=r(17082),l=r(25609),c=r(42294),u=r(3479),h=r(25899),m=r(61929),p=r(50775),x=r(63917);function g(){let e=s.Ry().shape({code:s.Z_().min(6,"Code must be at least 6 characters").required("Code is required")}),t=(0,n.cI)({mode:"onChange",resolver:(0,a.X)(e),defaultValues:{code:""}}),{handleSubmit:r,formState:{isSubmitting:g}}=t,v=r(async e=>{try{await new Promise(e=>setTimeout(e,500)),console.log("DATA",e)}catch(e){console.error(e)}});return(0,i.jsxs)(d.Z,{sx:{textAlign:"center"},children:[i.jsx(m.Z,{alt:"email inbox",src:"/assets/icons/ic_email_inbox.svg",sx:{mb:5,width:96,height:96,mx:"auto"}}),i.jsx(l.Z,{variant:"h3",children:"Check Your Email"}),i.jsx(l.Z,{variant:"body2",sx:{mt:2,mb:5,color:"text.secondary"},children:"We have emailed a 6-digit confirmation code to acb@domain, please enter the code in below box to verify your email."}),(0,i.jsxs)(x.ZP,{methods:t,onSubmit:v,children:[i.jsx(x.Re,{name:"code"}),i.jsx(c.Z,{fullWidth:!0,size:"large",color:"inherit",type:"submit",variant:"contained",loading:g,sx:{mt:3},children:"Verify"})]}),(0,i.jsxs)(l.Z,{variant:"body2",align:"center",sx:{mt:3},children:[`Don’t have a code? `,i.jsx(o.Z,{variant:"subtitle2",underline:"none",children:"Resend code"})]}),(0,i.jsxs)(o.Z,{component:h.r,href:u.H.loginCover,color:"inherit",variant:"subtitle2",sx:{mt:3,mx:"auto",alignItems:"center",display:"inline-flex"},children:[i.jsx(p.Z,{icon:"carbon:chevron-left",width:16,sx:{mr:1}}),"Return to sign in"]})]})}},42914:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>i});let i=(0,r(68570).createProxy)(String.raw`/home/dagi00/Documents/GitHub/site/src/app/auth/verify/layout.js#default`)},97026:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>a,metadata:()=>n});var i=r(19510);let s=(0,r(68570).createProxy)(String.raw`/home/dagi00/Documents/GitHub/site/src/sections/auth/verify-view.js#default`),n={title:"Verify"};function a(){return i.jsx(s,{})}}};var t=require("../../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),i=t.X(0,[8125,8e3,7508,4350,3405,4209,8623,4941,2329,476,7042,3917],()=>r(31954));module.exports=i})();