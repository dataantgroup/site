(()=>{var e={};e.id=7385,e.ids=[7385],e.modules={72934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},54580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},45869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},48938:(e,t,s)=>{"use strict";s.r(t),s.d(t,{GlobalError:()=>a.a,__next_app__:()=>p,originalPathname:()=>u,pages:()=>d,routeModule:()=>m,tree:()=>c}),s(69209),s(20173),s(41510),s(29372),s(54864);var r=s(23191),i=s(88716),n=s(37922),a=s.n(n),o=s(95231),l={};for(let e in o)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>o[e]);s.d(t,l);let c=["",{children:["marketing",{children:["case-studies",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(s.bind(s,69209)),"/home/dagi00/Documents/GitHub/site/src/app/marketing/case-studies/page.js"]}]},{layout:[()=>Promise.resolve().then(s.bind(s,20173)),"/home/dagi00/Documents/GitHub/site/src/app/marketing/case-studies/layout.js"]}]},{}]},{layout:[()=>Promise.resolve().then(s.bind(s,41510)),"/home/dagi00/Documents/GitHub/site/src/app/layout.js"],loading:[()=>Promise.resolve().then(s.bind(s,29372)),"/home/dagi00/Documents/GitHub/site/src/app/loading.js"],"not-found":[()=>Promise.resolve().then(s.bind(s,54864)),"/home/dagi00/Documents/GitHub/site/src/app/not-found.js"]}],d=["/home/dagi00/Documents/GitHub/site/src/app/marketing/case-studies/page.js"],u="/marketing/case-studies/page",p={require:s,loadChunk:()=>Promise.resolve()},m=new r.AppPageRouteModule({definition:{kind:i.x.APP_PAGE,page:"/marketing/case-studies/page",pathname:"/marketing/case-studies",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},21533:(e,t,s)=>{Promise.resolve().then(s.bind(s,32613))},15478:(e,t,s)=>{Promise.resolve().then(s.bind(s,1600))},32613:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>o});var r=s(10326),i=s(78439),n=s.n(i),a=s(49474);function o({children:e}){return r.jsx(a.Z,{children:e})}o.propTypes={children:n().node}},1600:(e,t,s)=>{"use strict";s.d(t,{default:()=>y});var r=s(10326),i=s(17082),n=s(75616),a=s(25609),o=s(35117),l=s(21028),c=s(78439),d=s.n(c),u=s(17577),p=s(85563),m=s(71728),x=s(1450),h=s(7344),g=s(61007),j=s(70336);function v({caseStudies:e}){var t;let[s,i]=(0,u.useState)("All"),n=["All",...Array.from(new Set(e.map(e=>e.category)))],a=(t=e,"All"!==s&&(t=t.filter(e=>e.category===s)),t),o=(0,u.useCallback)((e,t)=>{i(t)},[]);return(0,r.jsxs)(r.Fragment,{children:[r.jsx(x.Z,{value:s,scrollButtons:"auto",variant:"scrollable",allowScrollButtonsMobile:!0,onChange:o,children:n.map(e=>r.jsx(p.Z,{value:e,label:e},e))}),r.jsx(m.Z,{sx:{pt:5,pb:10,gap:4,display:"grid",gridTemplateColumns:{xs:"repeat(1, 1fr)",sm:"repeat(2, 1fr)",md:"repeat(3, 1fr)"}},children:a.map(e=>r.jsx(j.Z,{project:e},e.id))}),r.jsx(h.Z,{count:10,color:"primary",sx:{pb:10,[`& .${g.Z.ul}`]:{justifyContent:"center"}}})]})}v.propTypes={caseStudies:d().array};var b=s(52955),f=s(73799),Z=s(26589);function y(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.Z,{children:[(0,r.jsxs)(i.Z,{spacing:3,sx:{py:5,textAlign:{xs:"center",md:"left"}},children:[r.jsx(a.Z,{variant:"h2",children:"Our Case Studies"}),(0,r.jsxs)(a.Z,{sx:{color:"text.secondary"},children:["Nullam tincidunt adipiscing enim.",r.jsx("br",{})," Mauris sollicitudin fermentum libero."]})]}),r.jsx(v,{caseStudies:o.WD})]}),r.jsx(b.Z,{testimonials:o.H6}),r.jsx(Z.Z,{posts:o._marketingPosts.slice(0,4)}),r.jsx(f.Z,{}),r.jsx(l.Z,{})]})}},50824:(e,t,s)=>{"use strict";s.d(t,{Z:()=>c});var r=s(10326),i=s(78439),n=s.n(i),a=s(71728),o=s(17082),l=s(57957);function c({createdAt:e,duration:t,sx:s,...i}){return(0,r.jsxs)(o.Z,{flexWrap:"wrap",direction:"row",alignItems:"center",sx:{typography:"caption",color:"text.disabled",...s},...i,children:[(0,l.Mu)(e),t&&(0,r.jsxs)(r.Fragment,{children:[r.jsx(a.Z,{component:"span",sx:{mx:1,width:4,height:4,borderRadius:"50%",backgroundColor:"currentColor"}}),t]})]})}c.propTypes={createdAt:n().string,duration:n().string,sx:n().object}},26589:(e,t,s)=>{"use strict";s.d(t,{Z:()=>_});var r=s(10326),i=s(78439),n=s.n(i),a=s(71728),o=s(17082),l=s(46374),c=s(75616),d=s(23743),u=s(25609),p=s(3479),m=s(25899),x=s(32247),h=s(50775),g=s(39607),j=s(29979),v=s(52188),b=s(33198),f=s(22553),Z=s(57957),y=s(61929),P=s(53360),k=s(50824);function w({post:e}){let t=(0,d.Z)();return(0,r.jsxs)(o.Z,{component:j.m.div,whileHover:"hover",sx:{borderRadius:2,overflow:"hidden",position:"relative",boxShadow:t.customShadows.z12},children:[r.jsx(j.m.div,{variants:(0,P.U6)(1.25),transition:(0,P.BN)(),children:r.jsx(y.Z,{src:e.coverUrl,alt:e.title,ratio:"3/4",overlay:`linear-gradient(to top, ${(0,f.Fq)(t.palette.common.black,0)} 0%, ${t.palette.common.black} 75%)`})}),(0,r.jsxs)(o.Z,{justifyContent:"space-between",sx:{p:5,width:1,height:1,zIndex:9,position:"absolute",color:"common.white"},children:[(0,r.jsxs)(o.Z,{spacing:2,children:[r.jsx(k.Z,{createdAt:(0,Z.Mu)(e.createdAt),duration:e.duration,sx:{color:"inherit",opacity:.72}}),r.jsx(v.Z,{component:m.r,href:p.H.marketing.post,variant:"h4",color:"inherit",underline:"none",children:e.title})]}),(0,r.jsxs)(o.Z,{direction:"row",alignItems:"center",sx:{typography:"body2"},children:[r.jsx(b.Z,{src:e.author.avatarUrl,sx:{mr:1}}),e.author.name]})]})]})}function _({posts:e}){let t=(0,d.Z)(),s=(0,x.F)("up","md"),i=(0,g.vr)({slidesToShow:3,slidesToScroll:1,...(0,g.A0)(),responsive:[{breakpoint:t.breakpoints.values.md,settings:{slidesToShow:2}},{breakpoint:t.breakpoints.values.sm,settings:{slidesToShow:1}}]}),n=r.jsx(l.Z,{component:m.r,href:p.H.marketing.posts,color:"inherit",endIcon:r.jsx(h.Z,{icon:"carbon:chevron-right"}),children:"View All"});return(0,r.jsxs)(c.Z,{sx:{py:{xs:8,md:15}},children:[(0,r.jsxs)(o.Z,{direction:"row",alignItems:"center",justifyContent:{xs:"center",md:"space-between"},children:[r.jsx(u.Z,{variant:"h3",children:"Latest Posts"}),s&&n]}),r.jsx(a.Z,{sx:{position:"relative"},children:r.jsx(g.i5,{onNext:i.onNext,onPrev:i.onPrev,leftButtonProps:{sx:{left:{xs:0,md:-40}}},rightButtonProps:{sx:{right:{xs:0,md:-40}}},children:r.jsx(g.ZP,{ref:i.carouselRef,...i.carouselSettings,children:e.map(e=>r.jsx(a.Z,{sx:{px:2,py:{xs:8,md:10}},children:r.jsx(w,{post:e})},e.id))})})}),!s&&r.jsx(o.Z,{alignItems:"center",sx:{mt:8},children:n})]})}w.propTypes={post:n().shape({title:n().string,coverUrl:n().string,duration:n().string,createdAt:n().instanceOf(Date),author:n().shape({avatarUrl:n().string,name:n().string})})},_.propTypes={posts:n().array}},20173:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>r});let r=(0,s(68570).createProxy)(String.raw`/home/dagi00/Documents/GitHub/site/src/app/marketing/case-studies/layout.js#default`)},69209:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>a,metadata:()=>n});var r=s(19510);let i=(0,s(68570).createProxy)(String.raw`/home/dagi00/Documents/GitHub/site/src/sections/_marketing/view/marketing-case-studies-view.js#default`),n={title:"Marketing: Case Studies"};function a(){return r.jsx(i,{})}}};var t=require("../../../webpack-runtime.js");t.C(e);var s=e=>t(t.s=e),r=t.X(0,[7576,2666,9163,9342,4350,7608,7344,6694,476,7042,5117,9474,6520,1980],()=>s(48938));module.exports=r})();