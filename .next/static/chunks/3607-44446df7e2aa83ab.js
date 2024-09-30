"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3607],{88929:function(e,t,r){r.d(t,{Z:function(){return _}});var n=r(23950),o=r(22988),i=r(2265),s=r(44839),l=r(72491),a=r(70587),u=r(76990),c=r(96154),p=r(48762),f=r(40261),m=r(26350),y=r(11939),d=r(3351),v=r(57437);let Z=["component","direction","spacing","divider","children","className","useFlexGap"],h=(0,m.Z)(),k=(0,c.Z)("div",{name:"MuiStack",slot:"Root",overridesResolver:(e,t)=>t.root});function g(e){return(0,p.Z)({props:e,name:"MuiStack",defaultTheme:h})}let b=e=>({row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"})[e],w=({ownerState:e,theme:t})=>{let r=(0,o.Z)({display:"flex",flexDirection:"column"},(0,y.k9)({theme:t},(0,y.P$)({values:e.direction,breakpoints:t.breakpoints.values}),e=>({flexDirection:e})));if(e.spacing){let n=(0,d.hB)(t),o=Object.keys(t.breakpoints.values).reduce((t,r)=>(("object"==typeof e.spacing&&null!=e.spacing[r]||"object"==typeof e.direction&&null!=e.direction[r])&&(t[r]=!0),t),{}),i=(0,y.P$)({values:e.direction,base:o}),s=(0,y.P$)({values:e.spacing,base:o});"object"==typeof i&&Object.keys(i).forEach((e,t,r)=>{if(!i[e]){let n=t>0?i[r[t-1]]:"column";i[e]=n}}),r=(0,l.Z)(r,(0,y.k9)({theme:t},s,(t,r)=>e.useFlexGap?{gap:(0,d.NA)(n,t)}:{"& > :not(style):not(style)":{margin:0},"& > :not(style) ~ :not(style)":{[`margin${b(r?i[r]:e.direction)}`]:(0,d.NA)(n,t)}}))}return(0,y.dt)(t.breakpoints,r)};var A=r(48024),S=r(95885),_=function(e={}){let{createStyledComponent:t=k,useThemeProps:r=g,componentName:l="MuiStack"}=e,c=()=>(0,u.Z)({root:["root"]},e=>(0,a.ZP)(l,e),{}),p=t(w);return i.forwardRef(function(e,t){let l=r(e),a=(0,f.Z)(l),{component:u="div",direction:m="column",spacing:y=0,divider:d,children:h,className:k,useFlexGap:g=!1}=a,b=(0,n.Z)(a,Z),w=c();return(0,v.jsx)(p,(0,o.Z)({as:u,ownerState:{direction:m,spacing:y,useFlexGap:g},ref:t,className:(0,s.Z)(w.root,k)},b,{children:d?function(e,t){let r=i.Children.toArray(e).filter(Boolean);return r.reduce((e,n,o)=>(e.push(n),o<r.length-1&&e.push(i.cloneElement(t,{key:`separator-${o}`})),e),[])}(h,d):h}))})}({createStyledComponent:(0,A.ZP)("div",{name:"MuiStack",slot:"Root",overridesResolver:(e,t)=>t.root}),useThemeProps:e=>(0,S.i)({props:e,name:"MuiStack"})})},96154:function(e,t,r){r.d(t,{Z:function(){return Z}});var n=r(22988),o=r(23950),i=r(73992),s=r(72491),l=r(26350),a=r(47267);let u=["ownerState"],c=["variants"],p=["name","slot","skipVariantsResolver","skipSx","overridesResolver"];function f(e){return"ownerState"!==e&&"theme"!==e&&"sx"!==e&&"as"!==e}let m=(0,l.Z)(),y=e=>e?e.charAt(0).toLowerCase()+e.slice(1):e;function d({defaultTheme:e,theme:t,themeId:r}){return 0===Object.keys(t).length?e:t[r]||t}function v(e,t){let{ownerState:r}=t,i=(0,o.Z)(t,u),s="function"==typeof e?e((0,n.Z)({ownerState:r},i)):e;if(Array.isArray(s))return s.flatMap(e=>v(e,(0,n.Z)({ownerState:r},i)));if(s&&"object"==typeof s&&Array.isArray(s.variants)){let{variants:e=[]}=s,t=(0,o.Z)(s,c);return e.forEach(e=>{let o=!0;"function"==typeof e.props?o=e.props((0,n.Z)({ownerState:r},i,r)):Object.keys(e.props).forEach(t=>{(null==r?void 0:r[t])!==e.props[t]&&i[t]!==e.props[t]&&(o=!1)}),o&&(Array.isArray(t)||(t=[t]),t.push("function"==typeof e.style?e.style((0,n.Z)({ownerState:r},i,r)):e.style))}),t}return s}var Z=function(e={}){let{themeId:t,defaultTheme:r=m,rootShouldForwardProp:l=f,slotShouldForwardProp:u=f}=e,c=e=>(0,a.Z)((0,n.Z)({},e,{theme:d((0,n.Z)({},e,{defaultTheme:r,themeId:t}))}));return c.__mui_systemSx=!0,(e,a={})=>{var m;let Z;(0,i.internal_processStyles)(e,e=>e.filter(e=>!(null!=e&&e.__mui_systemSx)));let{name:h,slot:k,skipVariantsResolver:g,skipSx:b,overridesResolver:w=(m=y(k))?(e,t)=>t[m]:null}=a,A=(0,o.Z)(a,p),S=void 0!==g?g:k&&"Root"!==k&&"root"!==k||!1,_=b||!1,x=f;"Root"===k||"root"===k?x=l:k?x=u:"string"==typeof e&&e.charCodeAt(0)>96&&(x=void 0);let R=(0,i.default)(e,(0,n.Z)({shouldForwardProp:x,label:Z},A)),j=e=>"function"==typeof e&&e.__emotion_real!==e||(0,s.P)(e)?o=>v(e,(0,n.Z)({},o,{theme:d({theme:o.theme,defaultTheme:r,themeId:t})})):e,C=(o,...i)=>{let s=j(o),l=i?i.map(j):[];h&&w&&l.push(e=>{let o=d((0,n.Z)({},e,{defaultTheme:r,themeId:t}));if(!o.components||!o.components[h]||!o.components[h].styleOverrides)return null;let i=o.components[h].styleOverrides,s={};return Object.entries(i).forEach(([t,r])=>{s[t]=v(r,(0,n.Z)({},e,{theme:o}))}),w(e,s)}),h&&!S&&l.push(e=>{var o;let i=d((0,n.Z)({},e,{defaultTheme:r,themeId:t}));return v({variants:null==i||null==(o=i.components)||null==(o=o[h])?void 0:o.variants},(0,n.Z)({},e,{theme:i}))}),_||l.push(c);let a=l.length-i.length;if(Array.isArray(o)&&a>0){let e=Array(a).fill("");(s=[...o,...e]).raw=[...o.raw,...e]}let u=R(s,...l);return e.muiName&&(u.muiName=e.muiName),u};return R.withConfig&&(C.withConfig=R.withConfig),C}}()},48762:function(e,t,r){r.d(t,{Z:function(){return i}});var n=r(69430),o=r(14874);function i(e){let{props:t,name:r,defaultTheme:i,themeId:s}=e,l=(0,o.Z)(i);return s&&(l=l[s]||l),(0,n.Z)({theme:l,name:r,props:t})}},11438:function(e,t){t.Z=function(e){return"string"==typeof e}}}]);