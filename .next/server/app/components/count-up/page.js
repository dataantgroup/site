(()=>{var e={};e.id=4957,e.ids=[4957],e.modules={72934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},54580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},45869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},73046:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>a.a,__next_app__:()=>p,originalPathname:()=>d,pages:()=>u,routeModule:()=>m,tree:()=>c}),r(47480),r(96017),r(41510),r(29372),r(54864);var n=r(23191),o=r(88716),s=r(37922),a=r.n(s),i=r(95231),l={};for(let e in i)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>i[e]);r.d(t,l);let c=["",{children:["components",{children:["count-up",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,47480)),"/home/dagi00/Documents/GitHub/site/src/app/components/count-up/page.js"]}]},{layout:[()=>Promise.resolve().then(r.bind(r,96017)),"/home/dagi00/Documents/GitHub/site/src/app/components/count-up/layout.js"]}]},{}]},{layout:[()=>Promise.resolve().then(r.bind(r,41510)),"/home/dagi00/Documents/GitHub/site/src/app/layout.js"],loading:[()=>Promise.resolve().then(r.bind(r,29372)),"/home/dagi00/Documents/GitHub/site/src/app/loading.js"],"not-found":[()=>Promise.resolve().then(r.bind(r,54864)),"/home/dagi00/Documents/GitHub/site/src/app/not-found.js"]}],u=["/home/dagi00/Documents/GitHub/site/src/app/components/count-up/page.js"],d="/components/count-up/page",p={require:r,loadChunk:()=>Promise.resolve()},m=new n.AppPageRouteModule({definition:{kind:o.x.APP_PAGE,page:"/components/count-up/page",pathname:"/components/count-up",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},18623:(e,t,r)=>{Promise.resolve().then(r.bind(r,80926))},2085:(e,t,r)=>{Promise.resolve().then(r.bind(r,64895))},17306:(e,t,r)=>{"use strict";r.d(t,{Z:()=>D});var n=r(45353),o=r(91367),s=r(17577);r(16777);var a=r(41135),i=r(88634),l=r(69800),c=r(91703),u=r(2791),d=r(25609),p=r(11190),m=r(27522),h=r(10326);let g=(0,m.Z)((0,h.jsx)("path",{d:"M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),"MoreHoriz");var x=r(68280);let b=["slots","slotProps"],f=(0,c.ZP)(x.Z)(({theme:e})=>(0,n.Z)({display:"flex",marginLeft:`calc(${e.spacing(1)} * 0.5)`,marginRight:`calc(${e.spacing(1)} * 0.5)`},"light"===e.palette.mode?{backgroundColor:e.palette.grey[100],color:e.palette.grey[700]}:{backgroundColor:e.palette.grey[700],color:e.palette.grey[100]},{borderRadius:2,"&:hover, &:focus":(0,n.Z)({},"light"===e.palette.mode?{backgroundColor:e.palette.grey[200]}:{backgroundColor:e.palette.grey[600]}),"&:active":(0,n.Z)({boxShadow:e.shadows[0]},"light"===e.palette.mode?{backgroundColor:(0,p._4)(e.palette.grey[200],.12)}:{backgroundColor:(0,p._4)(e.palette.grey[600],.12)})})),j=(0,c.ZP)(g)({width:24,height:16}),y=function(e){let{slots:t={},slotProps:r={}}=e,s=(0,o.Z)(e,b);return(0,h.jsx)("li",{children:(0,h.jsx)(f,(0,n.Z)({focusRipple:!0},s,{ownerState:e,children:(0,h.jsx)(j,(0,n.Z)({as:t.CollapsedIcon,ownerState:e},r.collapsedIcon))}))})};var Z=r(71685),v=r(97898);function P(e){return(0,v.ZP)("MuiBreadcrumbs",e)}let w=(0,Z.Z)("MuiBreadcrumbs",["root","ol","li","separator"]),C=["children","className","component","slots","slotProps","expandText","itemsAfterCollapse","itemsBeforeCollapse","maxItems","separator"],k=e=>{let{classes:t}=e;return(0,i.Z)({root:["root"],li:["li"],ol:["ol"],separator:["separator"]},P,t)},S=(0,c.ZP)(d.Z,{name:"MuiBreadcrumbs",slot:"Root",overridesResolver:(e,t)=>[{[`& .${w.li}`]:t.li},t.root]})({}),_=(0,c.ZP)("ol",{name:"MuiBreadcrumbs",slot:"Ol",overridesResolver:(e,t)=>t.ol})({display:"flex",flexWrap:"wrap",alignItems:"center",padding:0,margin:0,listStyle:"none"}),I=(0,c.ZP)("li",{name:"MuiBreadcrumbs",slot:"Separator",overridesResolver:(e,t)=>t.separator})({display:"flex",userSelect:"none",marginLeft:8,marginRight:8}),D=s.forwardRef(function(e,t){var r,i;let c=(0,u.i)({props:e,name:"MuiBreadcrumbs"}),{children:d,className:p,component:m="nav",slots:g={},slotProps:x={},expandText:b="Show path",itemsAfterCollapse:f=1,itemsBeforeCollapse:j=1,maxItems:Z=8,separator:v="/"}=c,P=(0,o.Z)(c,C),[w,D]=s.useState(!1),G=(0,n.Z)({},c,{component:m,expanded:w,expandText:b,itemsAfterCollapse:f,itemsBeforeCollapse:j,maxItems:Z,separator:v}),R=k(G),F=(0,l.Z)({elementType:g.CollapsedIcon,externalSlotProps:x.collapsedIcon,ownerState:G}),H=s.useRef(null),M=s.Children.toArray(d).filter(e=>s.isValidElement(e)).map((e,t)=>(0,h.jsx)("li",{className:R.li,children:e},`child-${t}`));return(0,h.jsx)(S,(0,n.Z)({ref:t,component:m,color:"text.secondary",className:(0,a.Z)(R.root,p),ownerState:G},P,{children:(0,h.jsx)(_,{className:R.ol,ref:H,ownerState:G,children:(r=w||Z&&M.length<=Z?M:j+f>=M.length?M:[...M.slice(0,j),(0,h.jsx)(y,{"aria-label":b,slots:{CollapsedIcon:g.CollapsedIcon},slotProps:{collapsedIcon:F},onClick:()=>{D(!0);let e=H.current.querySelector("a[href],button,[tabindex]");e&&e.focus()}},"ellipsis"),...M.slice(M.length-f,M.length)],i=R.separator,r.reduce((e,t,n)=>(n<r.length-1?e=e.concat(t,(0,h.jsx)(I,{"aria-hidden":!0,className:i,ownerState:G,children:v},`separator-${n}`)):e.push(t),e),[]))})}))})},80926:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>i});var n=r(10326),o=r(78439),s=r.n(o),a=r(49474);function i({children:e}){return n.jsx(a.Z,{children:e})}i.propTypes={children:s().node}},172:(e,t,r)=>{"use strict";r.d(t,{Z:()=>u});var n=r(10326),o=r(17577),s=r(78439),a=r.n(s),i=r(10209),l=r(54025),c=r(71728);function u({sx:e,...t}){let r=(0,o.useRef)(null),s=(0,l.Y)(r,{once:!0});return n.jsx(c.Z,{component:"span",ref:r,sx:e,children:s&&n.jsx(i.ZP,{duration:1,...t})})}u.propTypes={sx:a().object}},46274:(e,t,r)=>{"use strict";r.d(t,{Z:()=>m});var n=r(10326),o=r(78439),s=r.n(o),a=r(71728),i=r(52188),l=r(17082),c=r(25609),u=r(17306),d=r(25899);function p({link:e,activeLast:t,disabled:r}){let o={typography:"body2",alignItems:"center",color:"text.primary",display:"inline-flex",...r&&!t&&{cursor:"default",pointerEvents:"none",color:"text.disabled"}},s=(0,n.jsxs)(n.Fragment,{children:[e.icon&&n.jsx(a.Z,{component:"span",sx:{mr:1,display:"inherit","& svg":{width:20,height:20}},children:e.icon}),e.name]});return e.href?n.jsx(i.Z,{component:d.r,href:e.href,sx:o,children:s}):(0,n.jsxs)(a.Z,{sx:o,children:[" ",s," "]})}function m({links:e,action:t,heading:r,moreLink:o,activeLast:s,sx:d,...m}){let g=e[e.length-1].name;return(0,n.jsxs)(a.Z,{sx:{...d},children:[(0,n.jsxs)(l.Z,{direction:"row",alignItems:"center",children:[(0,n.jsxs)(a.Z,{sx:{flexGrow:1},children:[r&&n.jsx(c.Z,{variant:"h4",gutterBottom:!0,children:r}),!!e.length&&n.jsx(u.Z,{separator:n.jsx(h,{}),...m,children:e.map(e=>n.jsx(p,{link:e,activeLast:s,disabled:e.name===g},e.name||""))})]}),t&&(0,n.jsxs)(a.Z,{sx:{flexShrink:0},children:[" ",t," "]})]}),!!o&&n.jsx(a.Z,{sx:{mt:2},children:o.map(e=>n.jsx(i.Z,{href:e,variant:"body2",target:"_blank",rel:"noopener",sx:{display:"table"},children:e},e))})]})}function h(){return n.jsx(a.Z,{component:"span",sx:{width:4,height:4,borderRadius:"50%",bgcolor:"text.disabled"}})}p.propTypes={activeLast:s().bool,disabled:s().bool,link:s().shape({href:s().string,icon:s().node,name:s().string})},m.propTypes={action:s().node,activeLast:s().bool,heading:s().string,links:s().array,moreLink:s().array,sx:s().object}},64895:(e,t,r)=>{"use strict";r.d(t,{default:()=>m});var n=r(10326),o=r(71728),s=r(17082),a=r(75616),i=r(25609),l=r(3479),c=r(40537),u=r(172),d=r(46274);let p=[{name:"Jobs",number:223e4},{name:"Successful Hiring",number:5e5},{name:"Partners",number:250},{name:"Employee",number:1560}];function m(){return(0,n.jsxs)(n.Fragment,{children:[n.jsx(o.Z,{sx:{py:5,bgcolor:e=>"light"===e.palette.mode?"grey.200":"grey.800"},children:n.jsx(a.Z,{children:n.jsx(d.Z,{heading:"CountUp",links:[{name:"Components",href:l.H.components.root},{name:"CountUp"}],moreLink:["https://www.npmjs.com/package/react-countup"]})})}),n.jsx(a.Z,{sx:{my:10},children:n.jsx(s.Z,{spacing:5,direction:"row",alignItems:"center",children:p.map(e=>(0,n.jsxs)("div",{children:[(0,n.jsxs)(i.Z,{variant:"h2",gutterBottom:!0,children:[n.jsx(u.Z,{start:e.number/5,end:e.number,formattingFn:e=>(0,c.v1)(e)}),n.jsx(i.Z,{variant:"h3",component:"span",sx:{verticalAlign:"top",ml:.5},children:"+"})]}),n.jsx(i.Z,{variant:"subtitle2",sx:{color:"text.secondary"},children:e.name})]},e.name))})})]})}},40537:(e,t,r)=>{"use strict";function n(){return{code:"en-US",currency:"USD"}}function o(e){let{code:t,currency:r}=n();if(!e)return"";let o=Number(e);return new Intl.NumberFormat(t,{style:"currency",currency:r,minimumFractionDigits:0,maximumFractionDigits:2}).format(o)}function s(e){let{code:t}=n();if(!e)return"";let r=Number(e)/100;return new Intl.NumberFormat(t,{style:"percent",minimumFractionDigits:0,maximumFractionDigits:1}).format(r)}function a(e){let{code:t}=n();if(!e)return"";let r=Number(e);return new Intl.NumberFormat(t,{notation:"compact",maximumFractionDigits:2}).format(r).replace(/[A-Z]/g,e=>e.toLowerCase())}r.d(t,{e_:()=>o,f2:()=>s,v1:()=>a})},96017:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>n});let n=(0,r(68570).createProxy)(String.raw`/home/dagi00/Documents/GitHub/site/src/app/components/count-up/layout.js#default`)},47480:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>a,metadata:()=>s});var n=r(19510);let o=(0,r(68570).createProxy)(String.raw`/home/dagi00/Documents/GitHub/site/src/sections/examples/count-up-view.js#default`),s={title:"Components: CountUp"};function a(){return n.jsx(o,{})}}};var t=require("../../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),n=t.X(0,[7576,2666,9163,2765,6635,476,7042,5117,9474],()=>r(73046));module.exports=n})();