(()=>{var e={};e.id=5376,e.ids=[5376],e.modules={72934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},54580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},45869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},79244:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>n.a,__next_app__:()=>p,originalPathname:()=>u,pages:()=>c,routeModule:()=>m,tree:()=>d}),r(55752),r(42644),r(41510),r(29372),r(54864);var o=r(23191),i=r(88716),a=r(37922),n=r.n(a),s=r(95231),l={};for(let e in s)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>s[e]);r.d(t,l);let d=["",{children:["components",{children:["form-validation",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,55752)),"/home/dagi00/Documents/GitHub/site/src/app/components/form-validation/page.js"]}]},{layout:[()=>Promise.resolve().then(r.bind(r,42644)),"/home/dagi00/Documents/GitHub/site/src/app/components/form-validation/layout.js"]}]},{}]},{layout:[()=>Promise.resolve().then(r.bind(r,41510)),"/home/dagi00/Documents/GitHub/site/src/app/layout.js"],loading:[()=>Promise.resolve().then(r.bind(r,29372)),"/home/dagi00/Documents/GitHub/site/src/app/loading.js"],"not-found":[()=>Promise.resolve().then(r.bind(r,54864)),"/home/dagi00/Documents/GitHub/site/src/app/not-found.js"]}],c=["/home/dagi00/Documents/GitHub/site/src/app/components/form-validation/page.js"],u="/components/form-validation/page",p={require:r,loadChunk:()=>Promise.resolve()},m=new o.AppPageRouteModule({definition:{kind:i.x.APP_PAGE,page:"/components/form-validation/page",pathname:"/components/form-validation",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},70461:(e,t,r)=>{Promise.resolve().then(r.bind(r,52117))},12327:(e,t,r)=>{Promise.resolve().then(r.bind(r,96172))},42294:(e,t,r)=>{"use strict";r.d(t,{Z:()=>j});var o=r(91367),i=r(45353),a=r(17577),n=r(54641),s=r(87816),l=r(88634),d=r(91703),c=r(54117),u=r(87700),p=r(65597),m=r(45417),h=r(10326);let x=["children","disabled","id","loading","loadingIndicator","loadingPosition","variant"],g=e=>{let{loading:t,loadingPosition:r,classes:o}=e,a={root:["root",t&&"loading"],startIcon:[t&&`startIconLoading${(0,n.Z)(r)}`],endIcon:[t&&`endIconLoading${(0,n.Z)(r)}`],loadingIndicator:["loadingIndicator",t&&`loadingIndicator${(0,n.Z)(r)}`]},s=(0,l.Z)(a,m._,o);return(0,i.Z)({},o,s)},f=e=>"ownerState"!==e&&"theme"!==e&&"sx"!==e&&"as"!==e&&"classes"!==e,v=(0,d.ZP)(u.Z,{shouldForwardProp:e=>f(e)||"classes"===e,name:"MuiLoadingButton",slot:"Root",overridesResolver:(e,t)=>[t.root,t.startIconLoadingStart&&{[`& .${m.Z.startIconLoadingStart}`]:t.startIconLoadingStart},t.endIconLoadingEnd&&{[`& .${m.Z.endIconLoadingEnd}`]:t.endIconLoadingEnd}]})(({ownerState:e,theme:t})=>(0,i.Z)({[`& .${m.Z.startIconLoadingStart}, & .${m.Z.endIconLoadingEnd}`]:{transition:t.transitions.create(["opacity"],{duration:t.transitions.duration.short}),opacity:0}},"center"===e.loadingPosition&&{transition:t.transitions.create(["background-color","box-shadow","border-color"],{duration:t.transitions.duration.short}),[`&.${m.Z.loading}`]:{color:"transparent"}},"start"===e.loadingPosition&&e.fullWidth&&{[`& .${m.Z.startIconLoadingStart}, & .${m.Z.endIconLoadingEnd}`]:{transition:t.transitions.create(["opacity"],{duration:t.transitions.duration.short}),opacity:0,marginRight:-8}},"end"===e.loadingPosition&&e.fullWidth&&{[`& .${m.Z.startIconLoadingStart}, & .${m.Z.endIconLoadingEnd}`]:{transition:t.transitions.create(["opacity"],{duration:t.transitions.duration.short}),opacity:0,marginLeft:-8}})),b=(0,d.ZP)("span",{name:"MuiLoadingButton",slot:"LoadingIndicator",overridesResolver:(e,t)=>{let{ownerState:r}=e;return[t.loadingIndicator,t[`loadingIndicator${(0,n.Z)(r.loadingPosition)}`]]}})(({theme:e,ownerState:t})=>(0,i.Z)({position:"absolute",visibility:"visible",display:"flex"},"start"===t.loadingPosition&&("outlined"===t.variant||"contained"===t.variant)&&{left:"small"===t.size?10:14},"start"===t.loadingPosition&&"text"===t.variant&&{left:6},"center"===t.loadingPosition&&{left:"50%",transform:"translate(-50%)",color:(e.vars||e).palette.action.disabled},"end"===t.loadingPosition&&("outlined"===t.variant||"contained"===t.variant)&&{right:"small"===t.size?10:14},"end"===t.loadingPosition&&"text"===t.variant&&{right:6},"start"===t.loadingPosition&&t.fullWidth&&{position:"relative",left:-10},"end"===t.loadingPosition&&t.fullWidth&&{position:"relative",right:-10})),j=a.forwardRef(function(e,t){let r=(0,c.Z)({props:e,name:"MuiLoadingButton"}),{children:a,disabled:n=!1,id:l,loading:d=!1,loadingIndicator:u,loadingPosition:m="center",variant:f="text"}=r,j=(0,o.Z)(r,x),Z=(0,s.Z)(l),y=null!=u?u:(0,h.jsx)(p.Z,{"aria-labelledby":Z,color:"inherit",size:16}),w=(0,i.Z)({},r,{disabled:n,loading:d,loadingIndicator:y,loadingPosition:m,variant:f}),P=g(w),k=d?(0,h.jsx)(b,{className:P.loadingIndicator,ownerState:w,children:y}):null;return(0,h.jsxs)(v,(0,i.Z)({disabled:n||d,id:Z,ref:t},j,{variant:f,classes:P,ownerState:w,children:["end"===w.loadingPosition?a:k,"end"===w.loadingPosition?k:a]}))})},17306:(e,t,r)=>{"use strict";r.d(t,{Z:()=>q});var o=r(45353),i=r(91367),a=r(17577);r(16777);var n=r(41135),s=r(88634),l=r(90535),d=r(91703),c=r(54117),u=r(25609),p=r(22553),m=r(27522),h=r(10326);let x=(0,m.Z)((0,h.jsx)("path",{d:"M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),"MoreHoriz");var g=r(68280);let f=["slots","slotProps"],v=(0,d.ZP)(g.Z)(({theme:e})=>(0,o.Z)({display:"flex",marginLeft:`calc(${e.spacing(1)} * 0.5)`,marginRight:`calc(${e.spacing(1)} * 0.5)`},"light"===e.palette.mode?{backgroundColor:e.palette.grey[100],color:e.palette.grey[700]}:{backgroundColor:e.palette.grey[700],color:e.palette.grey[100]},{borderRadius:2,"&:hover, &:focus":(0,o.Z)({},"light"===e.palette.mode?{backgroundColor:e.palette.grey[200]}:{backgroundColor:e.palette.grey[600]}),"&:active":(0,o.Z)({boxShadow:e.shadows[0]},"light"===e.palette.mode?{backgroundColor:(0,p._4)(e.palette.grey[200],.12)}:{backgroundColor:(0,p._4)(e.palette.grey[600],.12)})})),b=(0,d.ZP)(x)({width:24,height:16}),j=function(e){let{slots:t={},slotProps:r={}}=e,a=(0,i.Z)(e,f);return(0,h.jsx)("li",{children:(0,h.jsx)(v,(0,o.Z)({focusRipple:!0},a,{ownerState:e,children:(0,h.jsx)(b,(0,o.Z)({as:t.CollapsedIcon,ownerState:e},r.collapsedIcon))}))})};var Z=r(71685),y=r(97898);function w(e){return(0,y.Z)("MuiBreadcrumbs",e)}let P=(0,Z.Z)("MuiBreadcrumbs",["root","ol","li","separator"]),k=["children","className","component","slots","slotProps","expandText","itemsAfterCollapse","itemsBeforeCollapse","maxItems","separator"],S=e=>{let{classes:t}=e;return(0,s.Z)({root:["root"],li:["li"],ol:["ol"],separator:["separator"]},w,t)},I=(0,d.ZP)(u.Z,{name:"MuiBreadcrumbs",slot:"Root",overridesResolver:(e,t)=>[{[`& .${P.li}`]:t.li},t.root]})({}),C=(0,d.ZP)("ol",{name:"MuiBreadcrumbs",slot:"Ol",overridesResolver:(e,t)=>t.ol})({display:"flex",flexWrap:"wrap",alignItems:"center",padding:0,margin:0,listStyle:"none"}),R=(0,d.ZP)("li",{name:"MuiBreadcrumbs",slot:"Separator",overridesResolver:(e,t)=>t.separator})({display:"flex",userSelect:"none",marginLeft:8,marginRight:8}),q=a.forwardRef(function(e,t){var r,s;let d=(0,c.Z)({props:e,name:"MuiBreadcrumbs"}),{children:u,className:p,component:m="nav",slots:x={},slotProps:g={},expandText:f="Show path",itemsAfterCollapse:v=1,itemsBeforeCollapse:b=1,maxItems:Z=8,separator:y="/"}=d,w=(0,i.Z)(d,k),[P,q]=a.useState(!1),M=(0,o.Z)({},d,{component:m,expanded:P,expandText:f,itemsAfterCollapse:v,itemsBeforeCollapse:b,maxItems:Z,separator:y}),F=S(M),L=(0,l.y)({elementType:x.CollapsedIcon,externalSlotProps:g.collapsedIcon,ownerState:M}),_=a.useRef(null),O=a.Children.toArray(u).filter(e=>a.isValidElement(e)).map((e,t)=>(0,h.jsx)("li",{className:F.li,children:e},`child-${t}`));return(0,h.jsx)(I,(0,o.Z)({ref:t,component:m,color:"text.secondary",className:(0,n.Z)(F.root,p),ownerState:M},w,{children:(0,h.jsx)(C,{className:F.ol,ref:_,ownerState:M,children:(r=P||Z&&O.length<=Z?O:b+v>=O.length?O:[...O.slice(0,b),(0,h.jsx)(j,{"aria-label":f,slots:{CollapsedIcon:x.CollapsedIcon},slotProps:{collapsedIcon:L},onClick:()=>{q(!0);let e=_.current.querySelector("a[href],button,[tabindex]");e&&e.focus()}},"ellipsis"),...O.slice(O.length-v,O.length)],s=F.separator,r.reduce((e,t,o)=>(o<r.length-1?e=e.concat(t,(0,h.jsx)(R,{"aria-hidden":!0,className:s,ownerState:M,children:y},`separator-${o}`)):e.push(t),e),[]))})}))})},65597:(e,t,r)=>{"use strict";r.d(t,{Z:()=>S});var o=r(91367),i=r(45353),a=r(17577),n=r(41135),s=r(88634),l=r(8106),d=r(54641),c=r(54117),u=r(91703),p=r(1282),m=r(10326);let h=["className","color","disableShrink","size","style","thickness","value","variant"],x=e=>e,g,f,v,b,j=(0,l.F4)(g||(g=x`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`)),Z=(0,l.F4)(f||(f=x`
  0% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: 0;
  }

  50% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -15px;
  }

  100% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -125px;
  }
`)),y=e=>{let{classes:t,variant:r,color:o,disableShrink:i}=e,a={root:["root",r,`color${(0,d.Z)(o)}`],svg:["svg"],circle:["circle",`circle${(0,d.Z)(r)}`,i&&"circleDisableShrink"]};return(0,s.Z)(a,p.C,t)},w=(0,u.ZP)("span",{name:"MuiCircularProgress",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:r}=e;return[t.root,t[r.variant],t[`color${(0,d.Z)(r.color)}`]]}})(({ownerState:e,theme:t})=>(0,i.Z)({display:"inline-block"},"determinate"===e.variant&&{transition:t.transitions.create("transform")},"inherit"!==e.color&&{color:(t.vars||t).palette[e.color].main}),({ownerState:e})=>"indeterminate"===e.variant&&(0,l.iv)(v||(v=x`
      animation: ${0} 1.4s linear infinite;
    `),j)),P=(0,u.ZP)("svg",{name:"MuiCircularProgress",slot:"Svg",overridesResolver:(e,t)=>t.svg})({display:"block"}),k=(0,u.ZP)("circle",{name:"MuiCircularProgress",slot:"Circle",overridesResolver:(e,t)=>{let{ownerState:r}=e;return[t.circle,t[`circle${(0,d.Z)(r.variant)}`],r.disableShrink&&t.circleDisableShrink]}})(({ownerState:e,theme:t})=>(0,i.Z)({stroke:"currentColor"},"determinate"===e.variant&&{transition:t.transitions.create("stroke-dashoffset")},"indeterminate"===e.variant&&{strokeDasharray:"80px, 200px",strokeDashoffset:0}),({ownerState:e})=>"indeterminate"===e.variant&&!e.disableShrink&&(0,l.iv)(b||(b=x`
      animation: ${0} 1.4s ease-in-out infinite;
    `),Z)),S=a.forwardRef(function(e,t){let r=(0,c.Z)({props:e,name:"MuiCircularProgress"}),{className:a,color:s="primary",disableShrink:l=!1,size:d=40,style:u,thickness:p=3.6,value:x=0,variant:g="indeterminate"}=r,f=(0,o.Z)(r,h),v=(0,i.Z)({},r,{color:s,disableShrink:l,size:d,thickness:p,value:x,variant:g}),b=y(v),j={},Z={},S={};if("determinate"===g){let e=2*Math.PI*((44-p)/2);j.strokeDasharray=e.toFixed(3),S["aria-valuenow"]=Math.round(x),j.strokeDashoffset=`${((100-x)/100*e).toFixed(3)}px`,Z.transform="rotate(-90deg)"}return(0,m.jsx)(w,(0,i.Z)({className:(0,n.Z)(b.root,a),style:(0,i.Z)({width:d,height:d},Z,u),ownerState:v,ref:t,role:"progressbar"},S,f,{children:(0,m.jsx)(P,{className:b.svg,ownerState:v,viewBox:"22 22 44 44",children:(0,m.jsx)(k,{className:b.circle,style:j,ownerState:v,cx:44,cy:44,r:(44-p)/2,fill:"none",strokeWidth:p})})}))})},52117:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>s});var o=r(10326),i=r(78439),a=r.n(i),n=r(49474);function s({children:e}){return o.jsx(n.Z,{children:e})}s.propTypes={children:a().node}},46274:(e,t,r)=>{"use strict";r.d(t,{Z:()=>m});var o=r(10326),i=r(78439),a=r.n(i),n=r(71728),s=r(52188),l=r(17082),d=r(25609),c=r(17306),u=r(25899);function p({link:e,activeLast:t,disabled:r}){let i={typography:"body2",alignItems:"center",color:"text.primary",display:"inline-flex",...r&&!t&&{cursor:"default",pointerEvents:"none",color:"text.disabled"}},a=(0,o.jsxs)(o.Fragment,{children:[e.icon&&o.jsx(n.Z,{component:"span",sx:{mr:1,display:"inherit","& svg":{width:20,height:20}},children:e.icon}),e.name]});return e.href?o.jsx(s.Z,{component:u.r,href:e.href,sx:i,children:a}):(0,o.jsxs)(n.Z,{sx:i,children:[" ",a," "]})}function m({links:e,action:t,heading:r,moreLink:i,activeLast:a,sx:u,...m}){let x=e[e.length-1].name;return(0,o.jsxs)(n.Z,{sx:{...u},children:[(0,o.jsxs)(l.Z,{direction:"row",alignItems:"center",children:[(0,o.jsxs)(n.Z,{sx:{flexGrow:1},children:[r&&o.jsx(d.Z,{variant:"h4",gutterBottom:!0,children:r}),!!e.length&&o.jsx(c.Z,{separator:o.jsx(h,{}),...m,children:e.map(e=>o.jsx(p,{link:e,activeLast:a,disabled:e.name===x},e.name||""))})]}),t&&(0,o.jsxs)(n.Z,{sx:{flexShrink:0},children:[" ",t," "]})]}),!!i&&o.jsx(n.Z,{sx:{mt:2},children:i.map(e=>o.jsx(s.Z,{href:e,variant:"body2",target:"_blank",rel:"noopener",sx:{display:"table"},children:e},e))})]})}function h(){return o.jsx(n.Z,{component:"span",sx:{width:4,height:4,borderRadius:"50%",bgcolor:"text.disabled"}})}p.propTypes={activeLast:a().bool,disabled:a().bool,link:a().shape({href:a().string,icon:a().node,name:a().string})},m.propTypes={action:a().node,activeLast:a().bool,heading:a().string,links:a().array,moreLink:a().array,sx:a().object}},96172:(e,t,r)=>{"use strict";r.d(t,{default:()=>N});var o=r(10326),i=r(71728),a=r(17082),n=r(21969),s=r(99207),l=r(75616),d=r(25609),c=r(2980),u=r(3479),p=r(94621),m=r(46274),h=r(17577),x=r(78439),g=r.n(x),f=r(1774),v=r(74723),b=r(30725),j=r(7783),Z=r(57570),y=r(43055),w=r(42294),P=r(22115),k=r(50650),S=r(65597),I=r(50775),C=r(63917),R=r(10123);let q=R.Ry().shape({fullName:R.Z_().required("Full name is required").min(6,"Mininum 6 characters").max(32,"Maximum 32 characters"),email:R.Z_().required("Email is required").email("Email must be a valid email address"),age:R.Rx().required("Age is required").moreThan(18,"Age must be between 18 and 100").lessThan(100,"Age must be between 18 and 100"),startDate:R.nK().nullable().required("Start date is required"),endDate:R.nK().required("End date is required").test("date-min","End date must be later than start date",(e,{parent:t})=>e.getTime()>t.startDate.getTime()),password:R.Z_().required("Password is required").min(6,"Password should be of minimum 6 characters length"),confirmPassword:R.Z_().required("Confirm password is required").oneOf([R.iH("password")],"Password's not match"),slider:R.Rx().required("Slider is required").min(10,"Mininum value is >= 10"),sliderRange:R.nK().required("Slider range is is required").test("min","Range must be between 20 and 80",e=>e[0]>=20).test("max","Range must be between 20 and 80",e=>e[1]<=80),checkbox:R.O7().oneOf([!0],"Checkbox is required"),multiCheckbox:R.IX().min(1,"Choose at least one option"),singleSelect:R.Z_().required("Single select is required"),multiSelect:R.IX().min(2,"Must have at least 2 items"),switch:R.O7().oneOf([!0],"Switch is required"),radioGroup:R.Z_().required("Choose at least one option"),editor:R.Z_().required("Editor is required"),autocomplete:R.nK().nullable().required("Autocomplete is required")});var M=r(29756),F=r(23743),L=r(32247),_=r(45861);function O(){let e=(0,F.Z)(),t=(0,L.F)("up","md"),{watch:r,formState:{errors:i}}=(0,v.Gc)(),n=r();return t?o.jsx(M.h,{children:(0,o.jsxs)(a.Z,{sx:{p:3,top:0,right:0,height:1,width:280,position:"fixed",overflowX:"auto",color:"common.white",zIndex:e.zIndex.drawer,...(0,_.Ls)({color:e.palette.grey[900]})},children:[o.jsx(d.Z,{variant:"overline",sx:{mb:2,color:"success.light"},children:"Values"}),Object.keys(n).map(e=>(0,o.jsxs)(a.Z,{sx:{typography:"caption",mt:.5},children:[(0,o.jsxs)(d.Z,{variant:"body2",sx:{color:"warning.main"},children:[e," :"]}),JSON.stringify(n[e])||"---"]},e)),o.jsx(s.Z,{sx:{my:2}}),o.jsx(d.Z,{variant:"overline",sx:{mb:2,color:"error.light"},children:"Errors"}),o.jsx(d.Z,{variant:"caption",sx:{color:"error.light"},children:JSON.stringify(Object.keys(i),null,2)})]})}):null}let $=[{value:"option 1",label:"Option 1"},{value:"option 2",label:"Option 2"},{value:"option 3",label:"Option 3"},{value:"option 4",label:"Option 4"},{value:"option 5",label:"Option 5"},{value:"option 6",label:"Option 6"},{value:"option 7",label:"Option 7"},{value:"option 8",label:"Option 8"}],D={age:0,email:"",fullName:"",editor:"",switch:!1,radioGroup:"",autocomplete:null,password:"",confirmPassword:"",startDate:new Date,endDate:null,singleSelect:"",multiSelect:[],checkbox:!1,multiCheckbox:[],slider:8,sliderRange:[15,80]};function E({debug:e}){let t=(0,p.k)(),r=(0,v.cI)({resolver:(0,f.X)(q),defaultValues:D}),{reset:i,control:n,setValue:l,handleSubmit:d,formState:{isSubmitting:c}}=r,u=d(async e=>{await new Promise(e=>setTimeout(e,3e3)),console.log("DATA",e),i()});return(0,o.jsxs)(o.Fragment,{children:[c&&o.jsx(j.Z,{open:!0,sx:{zIndex:e=>e.zIndex.modal+1},children:o.jsx(S.Z,{color:"primary"})}),(0,o.jsxs)(C.ZP,{methods:r,onSubmit:u,children:[(0,o.jsxs)(Z.Z,{container:!0,spacing:5,children:[o.jsx(Z.Z,{xs:12,md:6,children:(0,o.jsxs)(a.Z,{spacing:2,children:[o.jsx(H,{children:o.jsx(C.au,{name:"fullName",label:"Full Name"})}),o.jsx(H,{children:o.jsx(C.au,{name:"email",label:"Email address"})}),o.jsx(H,{children:o.jsx(C.au,{name:"age",label:"Age",onChange:e=>l("age",Number(e.target.value),{shouldValidate:!0}),InputProps:{type:"number"}})}),(0,o.jsxs)(a.Z,{spacing:2,direction:{xs:"column",sm:"row"},children:[o.jsx(v.Qr,{name:"startDate",control:n,render:({field:e,fieldState:{error:t}})=>o.jsx(k.M,{...e,label:"Start date",format:"dd/MM/yyyy",slotProps:{textField:{fullWidth:!0,error:!!t,helperText:t?.message}}})}),o.jsx(v.Qr,{name:"endDate",control:n,render:({field:e,fieldState:{error:t}})=>o.jsx(k.M,{...e,label:"End date",format:"dd/MM/yyyy",slotProps:{textField:{fullWidth:!0,error:!!t,helperText:t?.message}}})})]}),(0,o.jsxs)(a.Z,{spacing:2,direction:{xs:"column",sm:"row"},children:[o.jsx(H,{children:o.jsx(C.au,{name:"password",label:"Password",type:t.value?"text":"password",InputProps:{endAdornment:o.jsx(P.Z,{position:"end",children:o.jsx(y.Z,{onClick:t.onToggle,edge:"end",children:o.jsx(I.Z,{icon:t.value?"eva:eye-fill":"eva:eye-off-fill"})})})}})}),o.jsx(H,{children:o.jsx(C.au,{name:"confirmPassword",label:"Confirm Password",type:t.value?"text":"password",InputProps:{endAdornment:o.jsx(P.Z,{position:"end",children:o.jsx(y.Z,{onClick:t.onToggle,edge:"end",children:o.jsx(I.Z,{icon:t.value?"eva:eye-fill":"eva:eye-off-fill"})})})}})})]}),o.jsx(H,{label:"RHFAutocomplete",children:o.jsx(C.Fl,{name:"autocomplete",label:"Autocomplete",options:$,getOptionLabel:e=>e.label,isOptionEqualToValue:(e,t)=>e.value===t.value,renderOption:(e,t)=>(0,h.createElement)("li",{...e,key:t.value},t.label)})}),o.jsx(H,{label:"RHFSelect",children:(0,o.jsxs)(C.Cc,{name:"singleSelect",label:"Single select",children:[o.jsx(b.Z,{value:"",children:"None"}),o.jsx(s.Z,{sx:{borderStyle:"dashed"}}),$.map(e=>o.jsx(b.Z,{value:e.label,children:e.label},e.value))]})}),o.jsx(H,{label:"RHFMultiSelect",children:o.jsx(C.vA,{chip:!0,checkbox:!0,name:"multiSelect",label:"Multi select",options:$})})]})}),o.jsx(Z.Z,{xs:12,md:6,children:(0,o.jsxs)(a.Z,{spacing:2,children:[o.jsx(C.jb,{name:"checkbox",label:"RHFCheckbox"}),o.jsx(C._e,{name:"switch",label:"RHFSwitch"}),o.jsx(C.km,{row:!0,name:"radioGroup",label:"RHFRadioGroup",spacing:4,options:[{value:"option 1",label:"Radio 1"},{value:"option 2",label:"Radio 2"},{value:"option 3",label:"Radio 3"}]}),o.jsx(C.s2,{row:!0,name:"multiCheckbox",label:"RHFMultiCheckbox",spacing:4,options:[{value:"option 1",label:"Checkbox 1"},{value:"option 2",label:"Checkbox 2"},{value:"option 3",label:"Checkbox 3"}]}),o.jsx(H,{label:"RHFSlider",children:o.jsx(C.kk,{name:"slider"})}),o.jsx(H,{label:"RHFSlider",children:o.jsx(C.kk,{name:"sliderRange"})}),o.jsx(w.Z,{fullWidth:!0,color:"inherit",size:"large",type:"submit",variant:"contained",loading:c,children:"Submit to check"})]})})]}),e&&o.jsx(O,{})]})]})}function H({label:e="RHFTextField",sx:t,children:r}){return(0,o.jsxs)(a.Z,{spacing:1,sx:{width:1,...t},children:[o.jsx(d.Z,{variant:"caption",sx:{textAlign:"right",fontStyle:"italic",color:"text.disabled"},children:e}),r]})}function N(){let e=(0,p.k)(!0);return(0,o.jsxs)(o.Fragment,{children:[o.jsx(i.Z,{sx:{py:5,bgcolor:e=>"light"===e.palette.mode?"grey.200":"grey.800"},children:o.jsx(l.Z,{children:o.jsx(m.Z,{heading:"Form Validation",links:[{name:"Components",href:u.H.components.root},{name:"Form Validation"}],moreLink:["https://react-hook-form.com/","https://github.com/jquense/yup"]})})}),(0,o.jsxs)(l.Z,{sx:{my:10},children:[(0,o.jsxs)(a.Z,{direction:"row",alignItems:"center",justifyContent:"space-between",children:[o.jsx(d.Z,{variant:"h4",children:" React Hook Form + Yup "}),o.jsx(c.Z,{control:o.jsx(n.Z,{checked:e.value,onClick:e.onToggle}),label:"Show Debug",labelPlacement:"start"})]}),o.jsx(s.Z,{sx:{my:5}}),o.jsx(E,{debug:e.value})]})]})}E.propTypes={debug:g().bool},H.propTypes={children:g().node,label:g().string,sx:g().object}},42644:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>o});let o=(0,r(68570).createProxy)(String.raw`/home/dagi00/Documents/GitHub/site/src/app/components/form-validation/layout.js#default`)},55752:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>n,metadata:()=>a});var o=r(19510);let i=(0,r(68570).createProxy)(String.raw`/home/dagi00/Documents/GitHub/site/src/sections/examples/form-validation-view/index.js#default`),a={title:"Components: Form Validation"};function n(){return o.jsx(i,{})}},1774:(e,t,r)=>{"use strict";r.d(t,{X:()=>d});var o=r(74723),i=function(e,t,r){if(e&&"reportValidity"in e){var i=(0,o.U2)(r,t);e.setCustomValidity(i&&i.message||""),e.reportValidity()}},a=function(e,t){var r=function(r){var o=t.fields[r];o&&o.ref&&"reportValidity"in o.ref?i(o.ref,r,e):o.refs&&o.refs.forEach(function(t){return i(t,r,e)})};for(var o in t.fields)r(o)},n=function(e,t){t.shouldUseNativeValidation&&a(e,t);var r={};for(var i in e){var n=(0,o.U2)(t.fields,i),d=Object.assign(e[i]||{},{ref:n&&n.ref});if(l(t.names||Object.keys(e),i)){var c=Object.assign({},s((0,o.U2)(r,i)));(0,o.t8)(c,"root",d),(0,o.t8)(r,i,c)}else(0,o.t8)(r,i,d)}return r},s=function(e){return Array.isArray(e)?e.filter(Boolean):[]},l=function(e,t){return e.some(function(e){return e.startsWith(t+".")})};function d(e,t,r){return void 0===t&&(t={}),void 0===r&&(r={}),function(i,s,l){try{return Promise.resolve(function(o,n){try{var d=(t.context,Promise.resolve(e["sync"===r.mode?"validateSync":"validate"](i,Object.assign({abortEarly:!1},t,{context:s}))).then(function(e){return l.shouldUseNativeValidation&&a({},l),{values:r.raw?i:e,errors:{}}}))}catch(e){return n(e)}return d&&d.then?d.then(void 0,n):d}(0,function(e){var t;if(!e.inner)throw e;return{values:{},errors:n((t=!l.shouldUseNativeValidation&&"all"===l.criteriaMode,(e.inner||[]).reduce(function(e,r){if(e[r.path]||(e[r.path]={message:r.message,type:r.type}),t){var i=e[r.path].types,a=i&&i[r.type];e[r.path]=(0,o.KN)(r.path,t,e,r.type,a?[].concat(a,r.message):r.message)}return e},{})),l)}}))}catch(e){return Promise.reject(e)}}}}};var t=require("../../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),o=t.X(0,[8125,8e3,9163,6343,7508,4350,3405,4209,8623,4941,2960,7678,650,476,7042,5117,9474,3917],()=>r(79244));module.exports=o})();