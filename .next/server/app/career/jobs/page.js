(()=>{var e={};e.id=1231,e.ids=[1231],e.modules={72934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},54580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},45869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},74155:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>s.a,__next_app__:()=>u,originalPathname:()=>p,pages:()=>c,routeModule:()=>h,tree:()=>d}),r(36821),r(36239),r(41510),r(29372),r(54864);var n=r(23191),i=r(88716),a=r(37922),s=r.n(a),o=r(95231),l={};for(let e in o)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>o[e]);r.d(t,l);let d=["",{children:["career",{children:["jobs",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,36821)),"/home/dagi00/Documents/GitHub/site/src/app/career/jobs/page.js"]}]},{layout:[()=>Promise.resolve().then(r.bind(r,36239)),"/home/dagi00/Documents/GitHub/site/src/app/career/jobs/layout.js"]}]},{}]},{layout:[()=>Promise.resolve().then(r.bind(r,41510)),"/home/dagi00/Documents/GitHub/site/src/app/layout.js"],loading:[()=>Promise.resolve().then(r.bind(r,29372)),"/home/dagi00/Documents/GitHub/site/src/app/loading.js"],"not-found":[()=>Promise.resolve().then(r.bind(r,54864)),"/home/dagi00/Documents/GitHub/site/src/app/not-found.js"]}],c=["/home/dagi00/Documents/GitHub/site/src/app/career/jobs/page.js"],p="/career/jobs/page",u={require:r,loadChunk:()=>Promise.resolve()},h=new n.AppPageRouteModule({definition:{kind:i.x.APP_PAGE,page:"/career/jobs/page",pathname:"/career/jobs",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},65281:(e,t,r)=>{Promise.resolve().then(r.bind(r,58230))},75563:(e,t,r)=>{Promise.resolve().then(r.bind(r,32164))},55976:(e,t,r)=>{"use strict";r.d(t,{Z:()=>L});var n=r(91367),i=r(45353),a=r(17577),s=r(41135),o=r(8106),l=r(88634),d=r(19452),c=r(22553),p=r(91703),u=r(2791),h=r(71685),m=r(97898);function x(e){return(0,m.ZP)("MuiSkeleton",e)}(0,h.Z)("MuiSkeleton",["root","text","rectangular","rounded","circular","pulse","wave","withChildren","fitContent","heightAuto"]);var g=r(10326);let b=["animation","className","component","height","style","variant","width"],f=e=>e,j,v,y,Z,C=e=>{let{classes:t,variant:r,animation:n,hasChildren:i,width:a,height:s}=e;return(0,l.Z)({root:["root",r,n,i&&"withChildren",i&&!a&&"fitContent",i&&!s&&"heightAuto"]},x,t)},w=(0,o.F4)(j||(j=f`
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0.4;
  }

  100% {
    opacity: 1;
  }
`)),k=(0,o.F4)(v||(v=f`
  0% {
    transform: translateX(-100%);
  }

  50% {
    /* +0.5s of delay between each loop */
    transform: translateX(100%);
  }

  100% {
    transform: translateX(100%);
  }
`)),P=(0,p.ZP)("span",{name:"MuiSkeleton",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:r}=e;return[t.root,t[r.variant],!1!==r.animation&&t[r.animation],r.hasChildren&&t.withChildren,r.hasChildren&&!r.width&&t.fitContent,r.hasChildren&&!r.height&&t.heightAuto]}})(({theme:e,ownerState:t})=>{let r=(0,d.Wy)(e.shape.borderRadius)||"px",n=(0,d.YL)(e.shape.borderRadius);return(0,i.Z)({display:"block",backgroundColor:e.vars?e.vars.palette.Skeleton.bg:(0,c.Fq)(e.palette.text.primary,"light"===e.palette.mode?.11:.13),height:"1.2em"},"text"===t.variant&&{marginTop:0,marginBottom:0,height:"auto",transformOrigin:"0 55%",transform:"scale(1, 0.60)",borderRadius:`${n}${r}/${Math.round(n/.6*10)/10}${r}`,"&:empty:before":{content:'"\\00a0"'}},"circular"===t.variant&&{borderRadius:"50%"},"rounded"===t.variant&&{borderRadius:(e.vars||e).shape.borderRadius},t.hasChildren&&{"& > *":{visibility:"hidden"}},t.hasChildren&&!t.width&&{maxWidth:"fit-content"},t.hasChildren&&!t.height&&{height:"auto"})},({ownerState:e})=>"pulse"===e.animation&&(0,o.iv)(y||(y=f`
      animation: ${0} 2s ease-in-out 0.5s infinite;
    `),w),({ownerState:e,theme:t})=>"wave"===e.animation&&(0,o.iv)(Z||(Z=f`
      position: relative;
      overflow: hidden;

      /* Fix bug in Safari https://bugs.webkit.org/show_bug.cgi?id=68196 */
      -webkit-mask-image: -webkit-radial-gradient(white, black);

      &::after {
        animation: ${0} 2s linear 0.5s infinite;
        background: linear-gradient(
          90deg,
          transparent,
          ${0},
          transparent
        );
        content: '';
        position: absolute;
        transform: translateX(-100%); /* Avoid flash during server-side hydration */
        bottom: 0;
        left: 0;
        right: 0;
        top: 0;
      }
    `),k,(t.vars||t).palette.action.hover)),L=a.forwardRef(function(e,t){let r=(0,u.i)({props:e,name:"MuiSkeleton"}),{animation:a="pulse",className:o,component:l="span",height:d,style:c,variant:p="text",width:h}=r,m=(0,n.Z)(r,b),x=(0,i.Z)({},r,{animation:a,component:l,variant:p,hasChildren:!!m.children}),f=C(x);return(0,g.jsx)(P,(0,i.Z)({as:l,ref:t,className:(0,s.Z)(f.root,o),ownerState:x},m,{style:(0,i.Z)({width:h,height:d},c)}))})},58230:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>o});var n=r(10326),i=r(78439),a=r.n(i),s=r(49474);function o({children:e}){return n.jsx(s.Z,{children:e})}o.propTypes={children:a().node}},69373:(e,t,r)=>{"use strict";r.d(t,{Z:()=>m});var n=r(10326),i=r(17577),a=r(78439),s=r.n(a),o=r(13405),l=r(14350),d=r(81103),c=r(22115),p=r(50729),u=r(7042),h=r(50775);function m({label:e,error:t,helperText:r,hiddenLabel:a,placeholder:s,...u}){let{multiple:m}=u;return n.jsx(d.Z,{autoHighlight:!m,disableCloseOnSelect:m,renderOption:(e,t)=>{let r=x(t);return r.label?(0,i.createElement)("li",{...e,key:r.label,children:[n.jsx(h.Z,{icon:`circle-flags:${r.code?.toLowerCase()}`,sx:{mr:1}},r.label),r.label," (",r.code,") +",r.phone]}):null},renderInput:i=>{let o=x(i.inputProps.value),d={...i,label:e,placeholder:s,error:!!t,helperText:r,hiddenLabel:a,inputProps:{...i.inputProps,autoComplete:"new-password"}};return m?n.jsx(l.Z,{...d}):n.jsx(l.Z,{...d,InputProps:{...i.InputProps,startAdornment:n.jsx(c.Z,{position:"start",sx:{...!o.code&&{display:"none"}},children:n.jsx(h.Z,{icon:`circle-flags:${o.code?.toLowerCase()}`,sx:{mr:-.5,ml:.5}})})},sx:{...!a&&{[`& .${p.Z.root}`]:{"& .component-iconify":{mt:-2}}}}})},renderTags:(e,t)=>e.map((e,r)=>{let a=x(e);return(0,i.createElement)(o.Z,{...t({index:r}),key:a.label,label:a.label,icon:n.jsx(h.Z,{icon:`circle-flags:${a.code?.toLowerCase()}`}),size:"small",variant:"soft"})}),...u})}function x(e){return{...u.h.filter(t=>t.label===e)[0]}}m.propTypes={error:s().bool,label:s().string,helperText:s().node,hiddenLabel:s().bool,placeholder:s().string}},89465:(e,t,r)=>{"use strict";r.d(t,{Z:()=>u});var n=r(10326),i=r(17577),a=r(78439),s=r.n(a),o=r(14350),l=r(81103),d=r(22115),c=r(35117),p=r(50775);function u({filterKeyword:e,onChangeKeyword:t,sx:r}){return n.jsx(l.Z,{sx:{width:1},options:c.dr,getOptionLabel:e=>e,value:e,onChange:(e,r)=>t(r),renderInput:e=>n.jsx(o.Z,{...e,hiddenLabel:!0,placeholder:"Job title, keywords...",InputProps:{...e.InputProps,autoComplete:"search",startAdornment:n.jsx(d.Z,{position:"start",children:n.jsx(p.Z,{width:24,icon:"carbon:search",sx:{color:"text.disabled",mr:1}})}),sx:{pb:1,...r}}}),renderOption:(e,t)=>(0,i.createElement)("li",{...e,key:t},t)})}u.propTypes={filterKeyword:s().string,onChangeKeyword:s().func,sx:s().object}},58029:(e,t,r)=>{"use strict";r.d(t,{Z:()=>l});var n=r(10326),i=r(78439),a=r.n(i),s=r(7042),o=r(69373);function l({filterLocation:e,onChangeLocation:t,sx:r}){return n.jsx(o.Z,{fullWidth:!0,hiddenLabel:!0,placeholder:"Locations",value:e,onChange:(e,r)=>t(r),options:s.h.map(e=>e.label),getOptionLabel:e=>e,sx:r})}l.propTypes={filterLocation:a().string,onChangeLocation:a().func,sx:a().object}},32164:(e,t,r)=>{"use strict";r.d(t,{default:()=>V});var n=r(10326),i=r(17577),a=r(75616),s=r(94621),o=r(35117),l=r(78439),d=r.n(l),c=r(71728),p=r(7344),u=r(61007),h=r(98543),m=r(34039),x=r(17082),g=r(99207),b=r(55976);function f({...e}){return(0,n.jsxs)(m.Z,{...e,children:[(0,n.jsxs)(x.Z,{spacing:2,sx:{p:3},children:[n.jsx(b.Z,{variant:"circular",width:48,height:48}),[void 0,void 0,void 0,void 0].map((e,t)=>n.jsx(b.Z,{variant:"text",sx:{height:20-2*t,width:(5-t)*50}},t))]}),n.jsx(g.Z,{sx:{borderStyle:"dashed"}}),n.jsx(c.Z,{sx:{p:3,gap:3,display:"grid",gridTemplateColumns:"repeat(2, 1fr)"},children:[void 0,void 0,void 0,void 0].map((e,t)=>n.jsx(b.Z,{variant:"rectangular",sx:{width:1,height:20,borderRadius:.5}},t))})]})}function j({jobs:e,loading:t}){return(0,n.jsxs)(n.Fragment,{children:[n.jsx(c.Z,{sx:{columnGap:4,display:"grid",rowGap:{xs:4,md:5},gridTemplateColumns:{xs:"repeat(1, 1fr)",sm:"repeat(2, 1fr)",md:"repeat(3, 1fr)"}},children:(t?[...Array(9)]:e).map((e,t)=>e?n.jsx(h.Z,{job:e},e.id):n.jsx(f,{},t))}),n.jsx(p.Z,{count:10,color:"primary",sx:{my:10,[`& .${u.Z.ul}`]:{justifyContent:"center"}}})]})}j.propTypes={jobs:d().array,loading:d().bool};var v=r(99305),y=r(75407),Z=r(46374),C=r(32247),w=r(50775),k=r(29302),P=r(30725),L=r(25609),T=r(76554),S=r(86391),F=r(56385);let $=["Part time","Full time","Freelance"];function _({filterType:e,onChangeJobType:t}){let r=(0,C.F)("up","md");return n.jsx(T.Z,{fullWidth:!0,hiddenLabel:!0,size:r?"small":"medium",sx:{maxWidth:{md:180}},children:n.jsx(k.Z,{multiple:!0,displayEmpty:!0,value:e,onChange:t,renderValue:e=>e.length?n.jsx(L.Z,{variant:"subtitle2",component:"span",children:e.join(", ")}):n.jsx(L.Z,{variant:"body2",sx:{color:"text.disabled"},children:"Job type"}),children:$.map(t=>(0,n.jsxs)(P.Z,{value:t,children:[n.jsx(S.Z,{size:"small",checked:e.includes(t),sx:{[`&.${F.Z.root}`]:{p:0,mr:1}}}),t]},t))})})}_.propTypes={filterType:d().arrayOf(d().string),onChangeJobType:d().func};let O=["Manager","Intern/Student","No experience","Senior","Supervisor","Director"];function A({filterLevel:e,onChangeJobType:t}){let r=(0,C.F)("up","md");return n.jsx(T.Z,{fullWidth:!0,hiddenLabel:!0,size:r?"small":"medium",sx:{maxWidth:{md:180}},children:n.jsx(k.Z,{multiple:!0,displayEmpty:!0,value:e,onChange:t,renderValue:e=>e.length?n.jsx(L.Z,{variant:"subtitle2",component:"span",children:e.join(", ")}):n.jsx(L.Z,{variant:"body2",sx:{color:"text.disabled"},children:"All levels"}),children:O.map(t=>(0,n.jsxs)(P.Z,{value:t,children:[n.jsx(S.Z,{size:"small",checked:e.includes(t),sx:{[`&.${F.Z.root}`]:{p:0,mr:1}}}),t]},t))})})}A.propTypes={filterLevel:d().arrayOf(d().string),onChangeJobType:d().func};var G=r(9835),I=r(9811),E=r(40537);function W({filterSalary:e,onChangeSalary:t}){let r=(0,C.F)("up","md"),[a,s]=(0,i.useState)(null),o=(0,i.useCallback)(e=>{s(e.currentTarget)},[]),l=(0,i.useCallback)(()=>{s(null)},[]),d=e[0],c=e[1];return(0,n.jsxs)(n.Fragment,{children:[n.jsx(T.Z,{fullWidth:!0,hiddenLabel:!0,onClick:o,size:r?"small":"medium",sx:{maxWidth:{md:180}},children:n.jsx(k.Z,{open:!1,displayEmpty:!0,value:"",renderValue:()=>0===d&&2e4===c?n.jsx(L.Z,{variant:"body2",sx:{color:"text.disabled"},children:"All salary ranges"}):n.jsx(L.Z,{variant:"subtitle2",component:"span",children:`${(0,E.e_)(d)} - ${(0,E.e_)(c)}`})})}),(0,n.jsxs)(I.ZP,{open:!!a,onClose:l,anchorEl:a,anchorOrigin:{vertical:"center",horizontal:"center"},transformOrigin:{vertical:"center",horizontal:"center"},slotProps:{paper:{sx:{pt:3,pb:1,px:5,width:1,maxWidth:360,overflow:"unset"}}},children:[n.jsx(L.Z,{variant:"overline",sx:{mb:8,display:"block",color:"text.disabled"},children:"Value based on 1 month"}),n.jsx(G.ZP,{marks:!0,step:1e3,min:0,max:2e4,valueLabelDisplay:"on",valueLabelFormat:e=>`$${e}`,value:e,onChange:t})]})]})}W.propTypes={filterSalary:d().array,onChangeSalary:d().func};var z=r(89465);function R({filterBenefits:e,onChangeJobBenefits:t}){let r=(0,C.F)("up","md");return n.jsx(T.Z,{fullWidth:!0,hiddenLabel:!0,size:r?"small":"medium",sx:{maxWidth:{md:180}},children:n.jsx(k.Z,{multiple:!0,displayEmpty:!0,value:e,onChange:t,renderValue:e=>e.length?n.jsx(L.Z,{variant:"subtitle2",component:"span",children:e.join(", ")}):n.jsx(L.Z,{variant:"body2",sx:{color:"text.disabled"},children:"Benefits"}),children:o.jK.map(t=>(0,n.jsxs)(P.Z,{value:t.value,children:[n.jsx(S.Z,{size:"small",checked:e.includes(t.value),sx:{[`&.${F.Z.root}`]:{p:0,mr:1}}}),t.label]},t.value))})})}R.propTypes={filterBenefits:d().arrayOf(d().string),onChangeJobBenefits:d().func};var D=r(58029),J=r(14350),B=r(81103),H=r(22115);function M({filterCategories:e,onChangeCategory:t}){return n.jsx(B.Z,{sx:{width:1},options:o.Qw,getOptionLabel:e=>e,value:e,onChange:(e,r)=>t(r),renderInput:e=>n.jsx(J.Z,{...e,hiddenLabel:!0,placeholder:"Categories",InputProps:{...e.InputProps,autoComplete:"search",startAdornment:n.jsx(H.Z,{position:"start",children:n.jsx(w.Z,{width:24,icon:"carbon:inventory-management",sx:{color:"text.disabled",mr:1}})}),sx:{pb:1}}}),renderOption:(e,t)=>(0,i.createElement)("li",{...e,key:t},t)})}M.propTypes={filterCategories:d().string,onChangeCategory:d().func};let q={filterKeyword:null,filterCategories:null,filterLocation:null,filterType:[],filterLevel:[],filterBenefits:[],filterSalary:[0,2e4]};function K(){let e=(0,C.F)("up","md"),t=(0,s.k)(),[r,a]=(0,i.useState)(q),o=(0,i.useCallback)(e=>{a({...r,filterKeyword:e})},[r]),l=(0,i.useCallback)(e=>{a({...r,filterCategories:e})},[r]),d=(0,i.useCallback)(e=>{a({...r,filterLocation:e})},[r]),p=(0,i.useCallback)(e=>{let{target:{value:t}}=e;a({...r,filterType:"string"==typeof t?t.split(","):t})},[r]),u=(0,i.useCallback)(e=>{let{target:{value:t}}=e;a({...r,filterLevel:"string"==typeof t?t.split(","):t})},[r]),h=(0,i.useCallback)(e=>{let{target:{value:t}}=e;a({...r,filterBenefits:"string"==typeof t?t.split(","):t})},[r]),m=(0,i.useCallback)((e,t)=>{a({...r,filterSalary:t})},[r]),g=(0,i.useCallback)(()=>{a(q)},[]),b=async()=>{await new Promise(e=>setTimeout(e,500)),alert(JSON.stringify(r,null,2)),g()},f=(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(x.Z,{spacing:2.5,direction:{xs:"column",md:"row"},alignItems:"center",children:[n.jsx(z.Z,{filterKeyword:r.filterKeyword,onChangeKeyword:o}),n.jsx(M,{filterCategories:r.filterCategories,onChangeCategory:l}),n.jsx(D.Z,{filterLocation:r.filterLocation,onChangeLocation:d}),e&&n.jsx(Z.Z,{size:"large",variant:"contained",color:"primary",onClick:b,sx:{px:0,minWidth:{md:48}},children:n.jsx(w.Z,{icon:"carbon:search",width:24})})]}),(0,n.jsxs)(x.Z,{direction:{xs:"column",md:"row"},spacing:{xs:2.5,md:1},sx:{mt:2.5},children:[n.jsx(_,{filterType:r.filterType,onChangeJobType:p}),n.jsx(A,{filterLevel:r.filterLevel,onChangeJobType:u}),n.jsx(W,{filterSalary:r.filterSalary,onChangeSalary:m}),n.jsx(R,{filterBenefits:r.filterBenefits,onChangeJobBenefits:h})]}),!e&&n.jsx(Z.Z,{size:"large",variant:"contained",color:"primary",startIcon:n.jsx(w.Z,{icon:"carbon:search"}),sx:{mt:2.5},children:"Search"})]});return e?n.jsx(c.Z,{sx:{py:5},children:f}):(0,n.jsxs)(n.Fragment,{children:[n.jsx(x.Z,{alignItems:"flex-end",sx:{py:3},children:n.jsx(Z.Z,{color:"inherit",variant:"contained",startIcon:n.jsx(w.Z,{icon:"carbon:filter",width:18}),onClick:t.onTrue,children:"Filters"})}),n.jsx(y.ZP,{anchor:"right",open:t.value,onClose:t.onFalse,PaperProps:{sx:{pt:5,px:3,width:280}},children:f})]})}function V(){let e=(0,s.k)(!0);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(a.Z,{children:[n.jsx(K,{}),n.jsx(j,{jobs:o.nb,loading:e.value})]}),n.jsx(v.Z,{})]})}},36239:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>n});let n=(0,r(68570).createProxy)(String.raw`/home/dagi00/Documents/GitHub/site/src/app/career/jobs/layout.js#default`)},36821:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>s,metadata:()=>a});var n=r(19510);let i=(0,r(68570).createProxy)(String.raw`/home/dagi00/Documents/GitHub/site/src/sections/_career/view/career-jobs-view.js#default`),a={title:"Career: Jobs"};function s(){return n.jsx(i,{})}}};var t=require("../../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),n=t.X(0,[7576,2666,9163,2765,4350,3405,7700,3826,7344,476,7042,5117,9474,6496],()=>r(74155));module.exports=n})();