"use strict";exports.id=2975,exports.ids=[2975],exports.modules={66343:(e,t,r)=>{r.d(t,{Z:()=>g});var o=r(91367),i=r(45353),n=r(17577),a=r(41135),s=r(88634),l=r(68280),d=r(54641),c=r(2791),u=r(39492),h=r(91703),m=r(27080),x=r(10326);let p=["children","className","color","component","disabled","disableFocusRipple","focusVisibleClassName","size","variant"],b=e=>{let{color:t,variant:r,classes:o,size:n}=e,a={root:["root",r,`size${(0,d.Z)(n)}`,"inherit"===t?"colorInherit":t]},l=(0,s.Z)(a,u.N,o);return(0,i.Z)({},o,l)},v=(0,h.ZP)(l.Z,{name:"MuiFab",slot:"Root",shouldForwardProp:e=>(0,m.Z)(e)||"classes"===e,overridesResolver:(e,t)=>{let{ownerState:r}=e;return[t.root,t[r.variant],t[`size${(0,d.Z)(r.size)}`],"inherit"===r.color&&t.colorInherit,t[(0,d.Z)(r.size)],t[r.color]]}})(({theme:e,ownerState:t})=>{var r,o;return(0,i.Z)({},e.typography.button,{minHeight:36,transition:e.transitions.create(["background-color","box-shadow","border-color"],{duration:e.transitions.duration.short}),borderRadius:"50%",padding:0,minWidth:0,width:56,height:56,zIndex:(e.vars||e).zIndex.fab,boxShadow:(e.vars||e).shadows[6],"&:active":{boxShadow:(e.vars||e).shadows[12]},color:e.vars?e.vars.palette.text.primary:null==(r=(o=e.palette).getContrastText)?void 0:r.call(o,e.palette.grey[300]),backgroundColor:(e.vars||e).palette.grey[300],"&:hover":{backgroundColor:(e.vars||e).palette.grey.A100,"@media (hover: none)":{backgroundColor:(e.vars||e).palette.grey[300]},textDecoration:"none"},[`&.${u.Z.focusVisible}`]:{boxShadow:(e.vars||e).shadows[6]}},"small"===t.size&&{width:40,height:40},"medium"===t.size&&{width:48,height:48},"extended"===t.variant&&{borderRadius:24,padding:"0 16px",width:"auto",minHeight:"auto",minWidth:48,height:48},"extended"===t.variant&&"small"===t.size&&{width:"auto",padding:"0 8px",borderRadius:17,minWidth:34,height:34},"extended"===t.variant&&"medium"===t.size&&{width:"auto",padding:"0 16px",borderRadius:20,minWidth:40,height:40},"inherit"===t.color&&{color:"inherit"})},({theme:e,ownerState:t})=>(0,i.Z)({},"inherit"!==t.color&&"default"!==t.color&&null!=(e.vars||e).palette[t.color]&&{color:(e.vars||e).palette[t.color].contrastText,backgroundColor:(e.vars||e).palette[t.color].main,"&:hover":{backgroundColor:(e.vars||e).palette[t.color].dark,"@media (hover: none)":{backgroundColor:(e.vars||e).palette[t.color].main}}}),({theme:e})=>({[`&.${u.Z.disabled}`]:{color:(e.vars||e).palette.action.disabled,boxShadow:(e.vars||e).shadows[0],backgroundColor:(e.vars||e).palette.action.disabledBackground}})),g=n.forwardRef(function(e,t){let r=(0,c.i)({props:e,name:"MuiFab"}),{children:n,className:s,color:l="default",component:d="button",disabled:u=!1,disableFocusRipple:h=!1,focusVisibleClassName:m,size:g="large",variant:Z="circular"}=r,f=(0,o.Z)(r,p),w=(0,i.Z)({},r,{color:l,component:d,disabled:u,disableFocusRipple:h,size:g,variant:Z}),j=b(w);return(0,x.jsx)(v,(0,i.Z)({className:(0,a.Z)(j.root,s),component:d,disabled:u,focusRipple:!h,focusVisibleClassName:(0,a.Z)(j.focusVisible,m),ownerState:w,ref:t},f,{classes:j,children:n}))})},76797:(e,t,r)=>{r.d(t,{Z:()=>v});var o=r(10326),i=r(17577),n=r(17082),a=r(10352),s=r(75616),l=r(57570),d=r(25609),c=r(50295),u=r(82901),h=r(81550),m=r(32247),x=r(35117),p=r(61929),b=r(50775);function v(){let e=(0,m.F)("up","md"),[t,r]=(0,i.useState)(!1),v=(0,i.useCallback)(e=>(t,o)=>{r(!!o&&e)},[]);return o.jsx(s.Z,{sx:{pt:{xs:5,md:10},pb:{xs:10,md:15}},children:(0,o.jsxs)(l.Z,{container:!0,spacing:3,justifyContent:"space-between",alignItems:"center",children:[(0,o.jsxs)(l.Z,{xs:12,md:6,lg:6,children:[(0,o.jsxs)(n.Z,{spacing:2,sx:{mb:5,textAlign:{xs:"center",md:"left"}},children:[o.jsx(d.Z,{variant:"overline",color:"text.disabled",children:"FAQS"}),o.jsx(d.Z,{variant:"h2",children:"Frequently Asked Questions"})]}),x.c_.map(e=>(0,o.jsxs)(a.Z,{expanded:t===e.question,onChange:v(e.question),children:[(0,o.jsxs)(u.Z,{sx:{minHeight:64,[`& .${h.Z.content}`]:{p:0,m:0},[`&.${h.Z.expanded}`]:{bgcolor:"action.selected"}},children:[o.jsx(d.Z,{variant:"h6",sx:{flexGrow:1},children:e.question}),o.jsx(b.Z,{width:24,icon:t===e.question?"carbon:subtract":"carbon:add"})]}),o.jsx(c.Z,{children:e.answer})]},e.id))]}),e&&o.jsx(l.Z,{xs:12,md:6,lg:5,children:o.jsx(p.Z,{alt:"faqs",src:"/assets/illustrations/illustration_faqs.svg"})})]})})}},52512:(e,t,r)=>{r.d(t,{Z:()=>Z});var o=r(10326),i=r(29979),n=r(78439),a=r.n(n),s=r(71728),l=r(17082),d=r(25609),c=r(43055),u=r(91703),h=r(22553),m=r(35117),x=r(45861),p=r(61929),b=r(50775),v=r(53360);let g=(0,u.ZP)("div")(({theme:e})=>({...(0,x.v3)({startColor:`${(0,h.Fq)(e.palette.common.black,0)} 0%`,endColor:`${e.palette.common.black} 75%`}),top:0,left:0,zIndex:8,opacity:0,width:"100%",height:"100%",position:"absolute",transition:e.transitions.create("opacity",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.short}),"&:hover":{opacity:1}}));function Z({member:e,...t}){let{name:r,role:n,photo:a}=e;return(0,o.jsxs)(l.Z,{...t,children:[(0,o.jsxs)(s.Z,{component:i.m.div,whileHover:"hover",variants:(0,v.U6)(.95),transition:(0,v.BN)(),sx:{position:"relative",borderRadius:2,overflow:"hidden"},children:[o.jsx(g,{children:o.jsx(l.Z,{direction:"row",justifyContent:"center",sx:{width:1,zIndex:9,bottom:24,position:"absolute"},children:m._I.map(e=>o.jsx(c.Z,{color:"primary",children:o.jsx(b.Z,{icon:e.icon})},e.value))})}),o.jsx(i.m.div,{variants:(0,v.U6)(1.15),transition:(0,v.BN)(),children:o.jsx(p.Z,{src:a,alt:r,ratio:"3/4"})})]}),(0,o.jsxs)(l.Z,{spacing:.5,sx:{mt:2.5,textAlign:"center"},children:[o.jsx(d.Z,{variant:"h6",children:r}),o.jsx(d.Z,{variant:"body2",sx:{color:"text.disabled"},children:n})]})]})}Z.propTypes={member:a().shape({name:a().string,photo:a().string,role:a().string})}},40537:(e,t,r)=>{function o(){return{code:"en-US",currency:"USD"}}function i(e){let{code:t,currency:r}=o();if(!e)return"";let i=Number(e);return new Intl.NumberFormat(t,{style:"currency",currency:r,minimumFractionDigits:0,maximumFractionDigits:2}).format(i)}function n(e){let{code:t}=o();if(!e)return"";let r=Number(e)/100;return new Intl.NumberFormat(t,{style:"percent",minimumFractionDigits:0,maximumFractionDigits:1}).format(r)}function a(e){let{code:t}=o();if(!e)return"";let r=Number(e);return new Intl.NumberFormat(t,{notation:"compact",maximumFractionDigits:2}).format(r).replace(/[A-Z]/g,e=>e.toLowerCase())}r.d(t,{e_:()=>i,f2:()=>n,v1:()=>a})}};