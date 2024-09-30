(()=>{var e={};e.id=743,e.ids=[743],e.modules={72934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},54580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},45869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},89093:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>i.a,__next_app__:()=>h,originalPathname:()=>c,pages:()=>p,routeModule:()=>u,tree:()=>d}),r(12736),r(66761),r(41510),r(29372),r(54864);var o=r(23191),a=r(88716),n=r(37922),i=r.n(n),s=r(95231),l={};for(let e in s)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>s[e]);r.d(t,l);let d=["",{children:["components",{children:["markdown",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,12736)),"/home/dagi00/Documents/GitHub/site/src/app/components/markdown/page.js"]}]},{layout:[()=>Promise.resolve().then(r.bind(r,66761)),"/home/dagi00/Documents/GitHub/site/src/app/components/markdown/layout.js"]}]},{}]},{layout:[()=>Promise.resolve().then(r.bind(r,41510)),"/home/dagi00/Documents/GitHub/site/src/app/layout.js"],loading:[()=>Promise.resolve().then(r.bind(r,29372)),"/home/dagi00/Documents/GitHub/site/src/app/loading.js"],"not-found":[()=>Promise.resolve().then(r.bind(r,54864)),"/home/dagi00/Documents/GitHub/site/src/app/not-found.js"]}],p=["/home/dagi00/Documents/GitHub/site/src/app/components/markdown/page.js"],c="/components/markdown/page",h={require:r,loadChunk:()=>Promise.resolve()},u=new o.AppPageRouteModule({definition:{kind:a.x.APP_PAGE,page:"/components/markdown/page",pathname:"/components/markdown",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},61066:(e,t,r)=>{Promise.resolve().then(r.bind(r,59084))},23544:(e,t,r)=>{Promise.resolve().then(r.bind(r,13412))},17306:(e,t,r)=>{"use strict";r.d(t,{Z:()=>_});var o=r(45353),a=r(91367),n=r(17577);r(16777);var i=r(41135),s=r(88634),l=r(69800),d=r(91703),p=r(2791),c=r(25609),h=r(11190),u=r(27522),m=r(10326);let g=(0,u.Z)((0,m.jsx)("path",{d:"M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),"MoreHoriz");var b=r(68280);let x=["slots","slotProps"],f=(0,d.ZP)(b.Z)(({theme:e})=>(0,o.Z)({display:"flex",marginLeft:`calc(${e.spacing(1)} * 0.5)`,marginRight:`calc(${e.spacing(1)} * 0.5)`},"light"===e.palette.mode?{backgroundColor:e.palette.grey[100],color:e.palette.grey[700]}:{backgroundColor:e.palette.grey[700],color:e.palette.grey[100]},{borderRadius:2,"&:hover, &:focus":(0,o.Z)({},"light"===e.palette.mode?{backgroundColor:e.palette.grey[200]}:{backgroundColor:e.palette.grey[600]}),"&:active":(0,o.Z)({boxShadow:e.shadows[0]},"light"===e.palette.mode?{backgroundColor:(0,h._4)(e.palette.grey[200],.12)}:{backgroundColor:(0,h._4)(e.palette.grey[600],.12)})})),y=(0,d.ZP)(g)({width:24,height:16}),v=function(e){let{slots:t={},slotProps:r={}}=e,n=(0,a.Z)(e,x);return(0,m.jsx)("li",{children:(0,m.jsx)(f,(0,o.Z)({focusRipple:!0},n,{ownerState:e,children:(0,m.jsx)(y,(0,o.Z)({as:t.CollapsedIcon,ownerState:e},r.collapsedIcon))}))})};var Z=r(71685),j=r(97898);function k(e){return(0,j.ZP)("MuiBreadcrumbs",e)}let w=(0,Z.Z)("MuiBreadcrumbs",["root","ol","li","separator"]),C=["children","className","component","slots","slotProps","expandText","itemsAfterCollapse","itemsBeforeCollapse","maxItems","separator"],P=e=>{let{classes:t}=e;return(0,s.Z)({root:["root"],li:["li"],ol:["ol"],separator:["separator"]},k,t)},S=(0,d.ZP)(c.Z,{name:"MuiBreadcrumbs",slot:"Root",overridesResolver:(e,t)=>[{[`& .${w.li}`]:t.li},t.root]})({}),R=(0,d.ZP)("ol",{name:"MuiBreadcrumbs",slot:"Ol",overridesResolver:(e,t)=>t.ol})({display:"flex",flexWrap:"wrap",alignItems:"center",padding:0,margin:0,listStyle:"none"}),M=(0,d.ZP)("li",{name:"MuiBreadcrumbs",slot:"Separator",overridesResolver:(e,t)=>t.separator})({display:"flex",userSelect:"none",marginLeft:8,marginRight:8}),_=n.forwardRef(function(e,t){var r,s;let d=(0,p.i)({props:e,name:"MuiBreadcrumbs"}),{children:c,className:h,component:u="nav",slots:g={},slotProps:b={},expandText:x="Show path",itemsAfterCollapse:f=1,itemsBeforeCollapse:y=1,maxItems:Z=8,separator:j="/"}=d,k=(0,a.Z)(d,C),[w,_]=n.useState(!1),H=(0,o.Z)({},d,{component:u,expanded:w,expandText:x,itemsAfterCollapse:f,itemsBeforeCollapse:y,maxItems:Z,separator:j}),T=P(H),G=(0,l.Z)({elementType:g.CollapsedIcon,externalSlotProps:b.collapsedIcon,ownerState:H}),L=n.useRef(null),q=n.Children.toArray(c).filter(e=>n.isValidElement(e)).map((e,t)=>(0,m.jsx)("li",{className:T.li,children:e},`child-${t}`));return(0,m.jsx)(S,(0,o.Z)({ref:t,component:u,color:"text.secondary",className:(0,i.Z)(T.root,h),ownerState:H},k,{children:(0,m.jsx)(R,{className:T.ol,ref:L,ownerState:H,children:(r=w||Z&&q.length<=Z?q:y+f>=q.length?q:[...q.slice(0,y),(0,m.jsx)(v,{"aria-label":x,slots:{CollapsedIcon:g.CollapsedIcon},slotProps:{collapsedIcon:G},onClick:()=>{_(!0);let e=L.current.querySelector("a[href],button,[tabindex]");e&&e.focus()}},"ellipsis"),...q.slice(q.length-f,q.length)],s=T.separator,r.reduce((e,t,o)=>(o<r.length-1?e=e.concat(t,(0,m.jsx)(M,{"aria-hidden":!0,className:s,ownerState:H,children:j},`separator-${o}`)):e.push(t),e),[]))})}))})},34039:(e,t,r)=>{"use strict";r.d(t,{Z:()=>f});var o=r(45353),a=r(91367),n=r(17577),i=r(41135),s=r(88634),l=r(91703),d=r(2791),p=r(90313),c=r(71685),h=r(97898);function u(e){return(0,h.ZP)("MuiCard",e)}(0,c.Z)("MuiCard",["root"]);var m=r(10326);let g=["className","raised"],b=e=>{let{classes:t}=e;return(0,s.Z)({root:["root"]},u,t)},x=(0,l.ZP)(p.Z,{name:"MuiCard",slot:"Root",overridesResolver:(e,t)=>t.root})(()=>({overflow:"hidden"})),f=n.forwardRef(function(e,t){let r=(0,d.i)({props:e,name:"MuiCard"}),{className:n,raised:s=!1}=r,l=(0,a.Z)(r,g),p=(0,o.Z)({},r,{raised:s}),c=b(p);return(0,m.jsx)(x,(0,o.Z)({className:(0,i.Z)(c.root,n),elevation:s?8:void 0,ref:t,ownerState:p},l))})},4766:(e,t,r)=>{"use strict";r.d(t,{Z:()=>x});var o=r(45353),a=r(91367),n=r(17577),i=r(41135),s=r(88634),l=r(91703),d=r(2791),p=r(71685),c=r(97898);function h(e){return(0,c.ZP)("MuiCardContent",e)}(0,p.Z)("MuiCardContent",["root"]);var u=r(10326);let m=["className","component"],g=e=>{let{classes:t}=e;return(0,s.Z)({root:["root"]},h,t)},b=(0,l.ZP)("div",{name:"MuiCardContent",slot:"Root",overridesResolver:(e,t)=>t.root})(()=>({padding:16,"&:last-child":{paddingBottom:24}})),x=n.forwardRef(function(e,t){let r=(0,d.i)({props:e,name:"MuiCardContent"}),{className:n,component:s="div"}=r,l=(0,a.Z)(r,m),p=(0,o.Z)({},r,{component:s}),c=g(p);return(0,u.jsx)(b,(0,o.Z)({as:s,className:(0,i.Z)(c.root,n),ownerState:p,ref:t},l))})},59084:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>s});var o=r(10326),a=r(78439),n=r.n(a),i=r(49474);function s({children:e}){return o.jsx(i.Z,{children:e})}s.propTypes={children:n().node}},46274:(e,t,r)=>{"use strict";r.d(t,{Z:()=>u});var o=r(10326),a=r(78439),n=r.n(a),i=r(71728),s=r(52188),l=r(17082),d=r(25609),p=r(17306),c=r(25899);function h({link:e,activeLast:t,disabled:r}){let a={typography:"body2",alignItems:"center",color:"text.primary",display:"inline-flex",...r&&!t&&{cursor:"default",pointerEvents:"none",color:"text.disabled"}},n=(0,o.jsxs)(o.Fragment,{children:[e.icon&&o.jsx(i.Z,{component:"span",sx:{mr:1,display:"inherit","& svg":{width:20,height:20}},children:e.icon}),e.name]});return e.href?o.jsx(s.Z,{component:c.r,href:e.href,sx:a,children:n}):(0,o.jsxs)(i.Z,{sx:a,children:[" ",n," "]})}function u({links:e,action:t,heading:r,moreLink:a,activeLast:n,sx:c,...u}){let g=e[e.length-1].name;return(0,o.jsxs)(i.Z,{sx:{...c},children:[(0,o.jsxs)(l.Z,{direction:"row",alignItems:"center",children:[(0,o.jsxs)(i.Z,{sx:{flexGrow:1},children:[r&&o.jsx(d.Z,{variant:"h4",gutterBottom:!0,children:r}),!!e.length&&o.jsx(p.Z,{separator:o.jsx(m,{}),...u,children:e.map(e=>o.jsx(h,{link:e,activeLast:n,disabled:e.name===g},e.name||""))})]}),t&&(0,o.jsxs)(i.Z,{sx:{flexShrink:0},children:[" ",t," "]})]}),!!a&&o.jsx(i.Z,{sx:{mt:2},children:a.map(e=>o.jsx(s.Z,{href:e,variant:"body2",target:"_blank",rel:"noopener",sx:{display:"table"},children:e},e))})]})}function m(){return o.jsx(i.Z,{component:"span",sx:{width:4,height:4,borderRadius:"50%",bgcolor:"text.disabled"}})}h.propTypes={activeLast:n().bool,disabled:n().bool,link:n().shape({href:n().string,icon:n().node,name:n().string})},u.propTypes={action:n().node,activeLast:n().bool,heading:n().string,links:n().array,moreLink:n().array,sx:n().object}},23296:(e,t,r)=>{"use strict";r.d(t,{Z:()=>s});var o=r(10326),a=r(78439),n=r.n(a);let i=(0,r(91703).ZP)("div",{shouldForwardProp:e=>"firstLetter"!==e})(({firstLetter:e,theme:t})=>({h1:{margin:0,...t.typography.h1},h2:{margin:0,...t.typography.h2},h3:{margin:0,...t.typography.h3},h4:{margin:0,...t.typography.h4},h5:{margin:0,...t.typography.h5},h6:{margin:0,...t.typography.h6},p:{margin:0,...t.typography.body1},br:{display:"grid",content:'""',marginTop:"0.75em"},a:{color:t.palette.primary.main,textDecoration:"none","&:hover":{textDecoration:"underline"}},"& ul, & ol":{margin:0,"& li":{lineHeight:2}},hr:{margin:0,flexShrink:0,borderWidth:0,msFlexNegative:0,WebkitFlexShrink:0,borderStyle:"solid",borderBottomWidth:"thin",borderColor:t.palette.divider},"& blockquote":{lineHeight:1.5,fontSize:"1.5em",margin:"40px auto",position:"relative",fontFamily:"Georgia, serif",padding:t.spacing(3,3,3,8),color:t.palette.text.secondary,borderRadius:2*t.shape.borderRadius,backgroundColor:t.palette.background.neutral,[t.breakpoints.up("md")]:{width:"80%"},"& p, & span":{marginBottom:0,fontSize:"inherit",fontFamily:"inherit"},"&:before":{left:16,top:-8,display:"block",fontSize:"3em",content:'"\\201C"',position:"absolute",color:t.palette.text.disabled}},"& img":{borderRadius:t.spacing(1)},table:{width:"100%",borderCollapse:"collapse",border:`1px solid ${t.palette.divider}`,"th, td":{padding:t.spacing(1),border:`1px solid ${t.palette.divider}`},"tbody tr:nth-of-type(odd)":{backgroundColor:t.palette.background.neutral}},input:{"&[type=checkbox]":{position:"relative",cursor:"pointer","&:before":{content:'""',top:-2,left:-2,width:17,height:17,borderRadius:3,position:"absolute",backgroundColor:t.palette.grey["light"===t.palette.mode?300:700]},"&:checked":{"&:before":{backgroundColor:t.palette.primary.main},"&:after":{content:'""',top:1,left:5,width:4,height:9,position:"absolute",transform:"rotate(45deg)",msTransform:"rotate(45deg)",WebkitTransform:"rotate(45deg)",border:`solid ${t.palette.common.white}`,borderWidth:"0 2px 2px 0"}}}},...e&&{"& > p:first-of-type":{"&:first-letter":{float:"left",fontSize:80,lineHeight:1,paddingRight:t.spacing(2),fontWeight:t.typography.fontWeightBold}}}}));function s({content:e,firstLetter:t=!1,sx:r}){return o.jsx(i,{firstLetter:t,dangerouslySetInnerHTML:{__html:e},sx:r})}s.propTypes={content:n().string,firstLetter:n().bool,sx:n().object}},13412:(e,t,r)=>{"use strict";r.d(t,{default:()=>h});var o=r(10326),a=r(71728),n=r(34039),i=r(75616),s=r(4766),l=r(3479),d=r(23296),p=r(46274);let c=`
<h1>h1</h1>
<br/>

<h2>h2</h2>
<br/>

<p> <strong>Paragraph</strong> Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups</p>
<br/>

<p>
  <a href='https://www.google.com/'>Link (https://www.google.com/)</a>
</p>
<br/>

<h6>Lists</h6>
<br/>

<ul>
  <li>
    <input type="checkbox" disabled="" checked=""> Write the press release
  </li>
  <li>
    <input type="checkbox" disabled=""> Update the website
  </li>
  <li>
    <input type="checkbox" disabled=""> Contact the media
  </li>
</ul>

<br/>
<br/>
<hr/>
<br/>
<br/>

<h6>A table:</h6>
<br/>
<table>
  <thead>
    <tr>
      <th style="text-align: left;">Syntax</th>
      <th style="text-align: center;">Description</th>
      <th style="text-align: right;">Test Text</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="text-align: left;">Header</td>
      <td style="text-align: center;">Title</td>
      <td style="text-align: right;">Here's this</td>
    </tr>
    <tr>
      <td style="text-align: left;">Paragraph</td>
      <td style="text-align: center;">Text</td>
      <td style="text-align: right;">And more</td>
    </tr>
  </tbody>
</table>

<br/>
<br/>
<br/>
<img alt='cover' src='/assets/images/travel/travel_post_01.jpg'>
<br/>
<br/>
<br/>

<blockquote> <p>A block quote with <s>strikethrough</s> and a URL: <a href='https://reactjs.org'>https://reactjs.org</a>.</p> </blockquote>
`;function h(){return(0,o.jsxs)(o.Fragment,{children:[o.jsx(a.Z,{sx:{py:5,bgcolor:e=>"light"===e.palette.mode?"grey.200":"grey.800"},children:o.jsx(i.Z,{children:o.jsx(p.Z,{heading:"Markdown",links:[{name:"Components",href:l.H.components.root},{name:"Markdown"}]})})}),o.jsx(i.Z,{sx:{my:10},children:o.jsx(n.Z,{children:o.jsx(s.Z,{children:o.jsx(d.Z,{content:c})})})})]})}},66761:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>o});let o=(0,r(68570).createProxy)(String.raw`/home/dagi00/Documents/GitHub/site/src/app/components/markdown/layout.js#default`)},12736:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>i,metadata:()=>n});var o=r(19510);let a=(0,r(68570).createProxy)(String.raw`/home/dagi00/Documents/GitHub/site/src/sections/examples/markdown-view.js#default`),n={title:"Components: Markdown"};function i(){return o.jsx(a,{})}}};var t=require("../../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),o=t.X(0,[7576,2666,9163,2765,476,7042,5117,9474],()=>r(89093));module.exports=o})();