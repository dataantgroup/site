(()=>{var e={};e.id=5178,e.ids=[5178],e.modules={72934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},54580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},45869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},87983:(e,t,i)=>{"use strict";i.r(t),i.d(t,{GlobalError:()=>a.a,__next_app__:()=>m,originalPathname:()=>u,pages:()=>d,routeModule:()=>x,tree:()=>c}),i(77335),i(59732),i(41510),i(29372),i(54864);var r=i(23191),s=i(88716),n=i(37922),a=i.n(n),o=i(95231),l={};for(let e in o)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>o[e]);i.d(t,l);let c=["",{children:["marketing",{children:["about",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(i.bind(i,77335)),"/home/dagi00/Documents/GitHub/site/src/app/marketing/about/page.js"]}]},{layout:[()=>Promise.resolve().then(i.bind(i,59732)),"/home/dagi00/Documents/GitHub/site/src/app/marketing/about/layout.js"]}]},{}]},{layout:[()=>Promise.resolve().then(i.bind(i,41510)),"/home/dagi00/Documents/GitHub/site/src/app/layout.js"],loading:[()=>Promise.resolve().then(i.bind(i,29372)),"/home/dagi00/Documents/GitHub/site/src/app/loading.js"],"not-found":[()=>Promise.resolve().then(i.bind(i,54864)),"/home/dagi00/Documents/GitHub/site/src/app/not-found.js"]}],d=["/home/dagi00/Documents/GitHub/site/src/app/marketing/about/page.js"],u="/marketing/about/page",m={require:i,loadChunk:()=>Promise.resolve()},x=new r.AppPageRouteModule({definition:{kind:s.x.APP_PAGE,page:"/marketing/about/page",pathname:"/marketing/about",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},36832:(e,t,i)=>{Promise.resolve().then(i.bind(i,71842))},26081:(e,t,i)=>{Promise.resolve().then(i.bind(i,8660))},71842:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>o});var r=i(10326),s=i(78439),n=i.n(s),a=i(49474);function o({children:e}){return r.jsx(a.Z,{children:e})}o.propTypes={children:n().node}},172:(e,t,i)=>{"use strict";i.d(t,{Z:()=>d});var r=i(10326),s=i(17577),n=i(78439),a=i.n(n),o=i(10209),l=i(54025),c=i(71728);function d({sx:e,...t}){let i=(0,s.useRef)(null),n=(0,l.Y)(i,{once:!0});return r.jsx(c.Z,{component:"span",ref:i,sx:e,children:n&&r.jsx(o.ZP,{duration:1,...t})})}d.propTypes={sx:a().object}},8660:(e,t,i)=>{"use strict";i.d(t,{default:()=>K});var r=i(10326),s=i(35117),n=i(71728),a=i(87700),o=i(75616),l=i(57570),c=i(25609),d=i(91703),u=i(22553),m=i(32247),x=i(40537),p=i(61929),h=i(50775),g=i(172);let j=["primary","secondary","warning","success"],b=[{title:"Years of experience",total:12,icon:"carbon:increase-level"},{title:"Awards",total:20,icon:"carbon:trophy"},{title:"Projects",total:150,icon:"carbon:data-vis-4"},{title:"Happy clients",total:32e3,icon:"carbon:user-certification"}],v=(0,d.ZP)("div",{shouldForwardProp:e=>"color"!==e})(({color:e,theme:t})=>({width:160,height:160,margin:"auto",display:"flex",borderRadius:"50%",alignItems:"center",position:"relative",justifyContent:"center",color:t.palette[e].darker,border:`dashed 2px ${(0,u.Fq)(t.palette[e].main,.24)}`,"&:before":{zIndex:8,content:'""',borderRadius:"50%",position:"absolute",width:"calc(100% - 48px)",height:"calc(100% - 48px)",background:`conic-gradient(from 0deg at 50% 50%, ${t.palette[e].main} 0deg, ${t.palette[e].light} 360deg)`},"& svg":{zIndex:9}}));function y(){let e=(0,m.F)("up","md");return(0,r.jsxs)(o.Z,{sx:{pt:{xs:5,md:10},pb:10},children:[(0,r.jsxs)(l.Z,{container:!0,spacing:3,justifyContent:"space-between",alignItems:"center",children:[e&&r.jsx(l.Z,{xs:12,md:6,lg:5,children:r.jsx(p.Z,{alt:"teams",src:"/assets/illustrations/illustration_teams.svg"})}),(0,r.jsxs)(l.Z,{xs:12,md:6,lg:6,sx:{textAlign:{xs:"center",md:"left"}},children:[r.jsx(c.Z,{variant:"h2",children:"Who We Are?"}),(0,r.jsxs)(c.Z,{sx:{mt:3,mb:5,color:"text.secondary"},children:["Vivamus consectetuer hendrerit lacus. Curabitur a felis in nunc fringilla tristique. Nulla neque dolor, sagittis eget, iaculis quis, molestie non, velit.",r.jsx("br",{}),r.jsx("br",{}),"Nam pretium turpis et arcu. Praesent porttitor, nulla vitae posuere iaculis, arcu nisl dignissim dolor, a pretium mi sem ut ipsum. Praesent venenatis metus at tortor pulvinar varius."]}),r.jsx(a.Z,{variant:"outlined",color:"inherit",size:"large",endIcon:r.jsx(h.Z,{icon:"carbon:chevron-right"}),children:"Check Our Work"})]})]}),r.jsx(n.Z,{sx:{mt:10,textAlign:"center",display:"grid",gap:{xs:5,md:8},gridTemplateColumns:{xs:"repeat(1, 1fr)",sm:"repeat(2, 1fr)",md:"repeat(4, 1fr)"}},children:b.map((e,t)=>(0,r.jsxs)("div",{children:[r.jsx(v,{color:j[t],children:r.jsx(h.Z,{icon:e.icon,width:48})}),r.jsx(c.Z,{variant:"h2",sx:{mt:2,mb:1},children:r.jsx(g.Z,{start:e.total/5,end:e.total,formattingFn:e=>(0,x.v1)(e)})}),r.jsx(c.Z,{sx:{color:"text.secondary"},children:e.title})]},e.title))})]})}var Z=i(21028),f=i(78439),P=i.n(f),w=i(52512);function k({members:e}){return(0,r.jsxs)(o.Z,{sx:{py:{xs:10,md:15}},children:[r.jsx(c.Z,{variant:"h2",sx:{textAlign:"center"},children:"Great Team Is The Key"}),r.jsx(c.Z,{sx:{mt:3,mx:"auto",maxWidth:480,textAlign:"center",mb:{xs:8,md:10},color:"text.secondary"},children:"Since wire-frame renderings are relatively simple and fast to calculate, they are often used in cases"}),r.jsx(n.Z,{sx:{columnGap:3,display:"grid",rowGap:{xs:4,md:5},gridTemplateColumns:{xs:"repeat(1, 1fr)",sm:"repeat(2, 1fr)",md:"repeat(4, 1fr)"}},children:e.map(e=>r.jsx(w.Z,{member:e},e.id))})]})}k.propTypes={members:P().array};var _=i(17082),C=i(87164),q=i(36925),A=i(75888),G=i(8273),D=i(22869),I=i(36246);let T=[{year:"2021",title:"Customer Satisfaction",description:"Curabitur ullamcorper ultricies nisi. Praesent nonummy mi in odio. Donec mollis hendrerit risus."},{year:"2020",title:"Transparency",description:"Curabitur ullamcorper ultricies nisi. Praesent nonummy mi in odio. Donec mollis hendrerit risus."},{year:"2019",title:"Reputation",description:"Curabitur ullamcorper ultricies nisi. Praesent nonummy mi in odio. Donec mollis hendrerit risus."},{year:"2018",title:"Cooperation",description:"Curabitur ullamcorper ultricies nisi. Praesent nonummy mi in odio. Donec mollis hendrerit risus."}],H=["primary","secondary","warning","success"];function W(){let e=(0,m.F)("up","md");return r.jsx(n.Z,{sx:{bgcolor:"background.neutral",py:{xs:10,md:15}},children:(0,r.jsxs)(o.Z,{children:[(0,r.jsxs)(_.Z,{spacing:3,sx:{maxWidth:480,mx:"auto",textAlign:"center",mb:{xs:8,md:10}},children:[r.jsx(c.Z,{variant:"h2",children:"Our Story"}),r.jsx(c.Z,{sx:{color:"text.secondary"},children:"Nunc nonummy metus. Donec elit libero, sodales nec, volutpat a, suscipit non, turpis."})]}),r.jsx(C.Z,{position:e?"alternate":"right",children:T.map((t,i)=>(0,r.jsxs)(A.Z,{sx:{"&:before":{...!e&&{display:"none"}}},children:[(0,r.jsxs)(I.Z,{children:[r.jsx(q.Z,{color:H[i]}),r.jsx(D.Z,{})]}),(0,r.jsxs)(G.Z,{sx:{pb:{xs:3,md:5}},children:[r.jsx(c.Z,{variant:"overline",sx:{color:`${H[i]}.main`},children:t.year}),r.jsx(c.Z,{variant:"h6",sx:{mt:.5,mb:1},children:t.title}),r.jsx(c.Z,{variant:"body2",sx:{color:"text.secondary",maxWidth:{md:360},...i%2&&{ml:"auto"}},children:t.description})]})]},t.title))})]})})}var F=i(76797);function O({brands:e}){return r.jsx(o.Z,{sx:{pb:{xs:7,md:11}},children:(0,r.jsxs)(_.Z,{alignItems:"center",spacing:5,children:[r.jsx(c.Z,{variant:"h2",children:"Our Clients"}),r.jsx(_.Z,{direction:"row",flexWrap:"wrap",justifyContent:"center",sx:{maxWidth:680,overflow:"hidden"},children:e.slice(0,8).map(e=>r.jsx(n.Z,{children:r.jsx(p.Z,{alt:e.name,src:e.image,sx:{height:32,mx:{xs:2,md:4},my:{xs:2.5,md:4}}})},e.id))})]})})}O.propTypes={brands:P().array};var R=i(52955),z=i(66343),S=i(23743);let $=(0,d.ZP)(c.Z)(({theme:e})=>({maxWidth:564,margin:"auto",textAlign:"center",[e.breakpoints.up("md")]:{left:0,right:0,zIndex:9,position:"absolute",color:e.palette.common.white}}));function E(){let e=(0,S.Z)();return r.jsx(o.Z,{children:(0,r.jsxs)(_.Z,{alignItems:"center",justifyContent:"center",sx:{position:"relative"},children:[r.jsx(c.Z,{variant:"h2",sx:{mb:5,textAlign:"center",top:{md:80},left:{md:0},right:{md:0},zIndex:{md:9},position:{md:"absolute"},color:{md:"common.white"}},children:"Our Vision"}),(0,r.jsxs)(_.Z,{alignItems:"center",justifyContent:"center",sx:{position:"relative",width:1,borderRadius:2,overflow:"hidden"},children:[r.jsx(z.Z,{color:"primary",sx:{zIndex:9,position:"absolute"},children:r.jsx(h.Z,{icon:"carbon:play",width:24})}),r.jsx(p.Z,{alt:"hero",src:"/assets/images/marketing/marketing_post_01.jpg",ratio:"16/9",overlay:`linear-gradient(to bottom, ${(0,u.Fq)(e.palette.common.black,0)} 0%, ${e.palette.common.black} 100%)`})]}),r.jsx($,{variant:"h5",sx:{mt:5,bottom:{md:80},opacity:{md:.72}},children:"Our vision offering the best product nulla vehicula tortor scelerisque ultrices malesuada."})]})})}var M=i(73799),N=i(62643);let V=[{title:"Customer Satisfaction",description:"Aenean urna dictum adipiscing nec, cras quisque.",icon:"/assets/icons/ic_agreement.svg"},{title:"Transparency",description:"Aenean urna dictum adipiscing nec, cras quisque.",icon:"/assets/icons/ic_transparency.svg"},{title:"Reputation",description:"Aenean urna dictum adipiscing nec, cras quisque.",icon:"/assets/icons/ic_reputation.svg"},{title:"Cooperation",description:"Aenean urna dictum adipiscing nec, cras quisque.",icon:"/assets/icons/ic_popularity.svg"}];function Y(){return(0,r.jsxs)(o.Z,{sx:{textAlign:"center",pt:{xs:5,md:10},pb:{xs:5,md:15}},children:[r.jsx(c.Z,{variant:"h2",sx:{mb:{xs:8,md:10}},children:"Our Core Values"}),r.jsx(n.Z,{sx:{display:"grid",gap:8,gridTemplateColumns:{xs:"repeat(1, 1fr)",sm:"repeat(2, 1fr)",md:"repeat(4, 1fr)"}},children:V.map(e=>(0,r.jsxs)(n.Z,{children:[r.jsx(N.Z,{src:e.icon,sx:{width:64,height:64,mx:"auto",color:"primary.main"}}),r.jsx(c.Z,{variant:"h5",sx:{mt:5,mb:2},children:e.title}),(0,r.jsxs)(c.Z,{sx:{color:"text.secondary"},children:[" ",e.description," "]})]},e.title))})]})}function K(){return(0,r.jsxs)(r.Fragment,{children:[r.jsx(y,{}),r.jsx(E,{}),r.jsx(Y,{}),r.jsx(W,{}),r.jsx(k,{members:s.Lg}),r.jsx(O,{brands:s.EQ}),r.jsx(R.Z,{testimonials:s.H6}),r.jsx(F.Z,{}),r.jsx(M.Z,{}),r.jsx(Z.Z,{})]})}},59732:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>r});let r=(0,i(68570).createProxy)(String.raw`/home/dagi00/Documents/GitHub/site/src/app/marketing/about/layout.js#default`)},77335:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>a,metadata:()=>n});var r=i(19510);let s=(0,i(68570).createProxy)(String.raw`/home/dagi00/Documents/GitHub/site/src/sections/_marketing/view/marketing-about-view.js#default`),n={title:"Marketing: About us"};function a(){return r.jsx(s,{})}}};var t=require("../../../webpack-runtime.js");t.C(e);var i=e=>t(t.s=e),r=t.X(0,[8125,8e3,9163,6343,7508,4350,7608,6635,5497,363,476,7042,5117,9474,6520,2975],()=>i(87983));module.exports=r})();