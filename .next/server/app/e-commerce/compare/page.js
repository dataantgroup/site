(()=>{var e={};e.id=9603,e.ids=[9603],e.modules={72934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},54580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},45869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},86400:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>n.a,__next_app__:()=>p,originalPathname:()=>h,pages:()=>d,routeModule:()=>m,tree:()=>l}),r(32281),r(19654),r(41510),r(29372),r(54864);var i=r(23191),a=r(88716),o=r(37922),n=r.n(o),s=r(95231),c={};for(let e in s)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(c[e]=()=>s[e]);r.d(t,c);let l=["",{children:["e-commerce",{children:["compare",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,32281)),"/home/dagi00/Documents/GitHub/site/src/app/e-commerce/compare/page.js"]}]},{}]},{layout:[()=>Promise.resolve().then(r.bind(r,19654)),"/home/dagi00/Documents/GitHub/site/src/app/e-commerce/layout.js"]}]},{layout:[()=>Promise.resolve().then(r.bind(r,41510)),"/home/dagi00/Documents/GitHub/site/src/app/layout.js"],loading:[()=>Promise.resolve().then(r.bind(r,29372)),"/home/dagi00/Documents/GitHub/site/src/app/loading.js"],"not-found":[()=>Promise.resolve().then(r.bind(r,54864)),"/home/dagi00/Documents/GitHub/site/src/app/not-found.js"]}],d=["/home/dagi00/Documents/GitHub/site/src/app/e-commerce/compare/page.js"],h="/e-commerce/compare/page",p={require:r,loadChunk:()=>Promise.resolve()},m=new i.AppPageRouteModule({definition:{kind:a.x.APP_PAGE,page:"/e-commerce/compare/page",pathname:"/e-commerce/compare",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:l}})},52538:(e,t,r)=>{Promise.resolve().then(r.bind(r,37630))},19928:(e,t,r)=>{Promise.resolve().then(r.bind(r,33421))},21969:(e,t,r)=>{"use strict";r.d(t,{Z:()=>y});var i=r(91367),a=r(45353),o=r(17577),n=r(41135),s=r(88634),c=r(22553),l=r(54641),d=r(33662),h=r(54117),p=r(91703),m=r(28973),u=r(10326);let g=["className","color","edge","size","sx"],x=e=>{let{classes:t,edge:r,size:i,color:o,checked:n,disabled:c}=e,d={root:["root",r&&`edge${(0,l.Z)(r)}`,`size${(0,l.Z)(i)}`],switchBase:["switchBase",`color${(0,l.Z)(o)}`,n&&"checked",c&&"disabled"],thumb:["thumb"],track:["track"],input:["input"]},h=(0,s.Z)(d,m.H,t);return(0,a.Z)({},t,h)},b=(0,p.ZP)("span",{name:"MuiSwitch",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:r}=e;return[t.root,r.edge&&t[`edge${(0,l.Z)(r.edge)}`],t[`size${(0,l.Z)(r.size)}`]]}})(({ownerState:e})=>(0,a.Z)({display:"inline-flex",width:58,height:38,overflow:"hidden",padding:12,boxSizing:"border-box",position:"relative",flexShrink:0,zIndex:0,verticalAlign:"middle","@media print":{colorAdjust:"exact"}},"start"===e.edge&&{marginLeft:-8},"end"===e.edge&&{marginRight:-8},"small"===e.size&&{width:40,height:24,padding:7,[`& .${m.Z.thumb}`]:{width:16,height:16},[`& .${m.Z.switchBase}`]:{padding:4,[`&.${m.Z.checked}`]:{transform:"translateX(16px)"}}})),v=(0,p.ZP)(d.Z,{name:"MuiSwitch",slot:"SwitchBase",overridesResolver:(e,t)=>{let{ownerState:r}=e;return[t.switchBase,{[`& .${m.Z.input}`]:t.input},"default"!==r.color&&t[`color${(0,l.Z)(r.color)}`]]}})(({theme:e})=>({position:"absolute",top:0,left:0,zIndex:1,color:e.vars?e.vars.palette.Switch.defaultColor:`${"light"===e.palette.mode?e.palette.common.white:e.palette.grey[300]}`,transition:e.transitions.create(["left","transform"],{duration:e.transitions.duration.shortest}),[`&.${m.Z.checked}`]:{transform:"translateX(20px)"},[`&.${m.Z.disabled}`]:{color:e.vars?e.vars.palette.Switch.defaultDisabledColor:`${"light"===e.palette.mode?e.palette.grey[100]:e.palette.grey[600]}`},[`&.${m.Z.checked} + .${m.Z.track}`]:{opacity:.5},[`&.${m.Z.disabled} + .${m.Z.track}`]:{opacity:e.vars?e.vars.opacity.switchTrackDisabled:`${"light"===e.palette.mode?.12:.2}`},[`& .${m.Z.input}`]:{left:"-100%",width:"300%"}}),({theme:e,ownerState:t})=>(0,a.Z)({"&:hover":{backgroundColor:e.vars?`rgba(${e.vars.palette.action.activeChannel} / ${e.vars.palette.action.hoverOpacity})`:(0,c.Fq)(e.palette.action.active,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"default"!==t.color&&{[`&.${m.Z.checked}`]:{color:(e.vars||e).palette[t.color].main,"&:hover":{backgroundColor:e.vars?`rgba(${e.vars.palette[t.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})`:(0,c.Fq)(e.palette[t.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${m.Z.disabled}`]:{color:e.vars?e.vars.palette.Switch[`${t.color}DisabledColor`]:`${"light"===e.palette.mode?(0,c.$n)(e.palette[t.color].main,.62):(0,c._j)(e.palette[t.color].main,.55)}`}},[`&.${m.Z.checked} + .${m.Z.track}`]:{backgroundColor:(e.vars||e).palette[t.color].main}})),Z=(0,p.ZP)("span",{name:"MuiSwitch",slot:"Track",overridesResolver:(e,t)=>t.track})(({theme:e})=>({height:"100%",width:"100%",borderRadius:7,zIndex:-1,transition:e.transitions.create(["opacity","background-color"],{duration:e.transitions.duration.shortest}),backgroundColor:e.vars?e.vars.palette.common.onBackground:`${"light"===e.palette.mode?e.palette.common.black:e.palette.common.white}`,opacity:e.vars?e.vars.opacity.switchTrack:`${"light"===e.palette.mode?.38:.3}`})),f=(0,p.ZP)("span",{name:"MuiSwitch",slot:"Thumb",overridesResolver:(e,t)=>t.thumb})(({theme:e})=>({boxShadow:(e.vars||e).shadows[1],backgroundColor:"currentColor",width:20,height:20,borderRadius:"50%"})),y=o.forwardRef(function(e,t){let r=(0,h.Z)({props:e,name:"MuiSwitch"}),{className:o,color:s="primary",edge:c=!1,size:l="medium",sx:d}=r,p=(0,i.Z)(r,g),m=(0,a.Z)({},r,{color:s,edge:c,size:l}),y=x(m),j=(0,u.jsx)(f,{className:y.thumb,ownerState:m});return(0,u.jsxs)(b,{className:(0,n.Z)(y.root,o),sx:d,ownerState:m,children:[(0,u.jsx)(v,(0,a.Z)({type:"checkbox",icon:j,checkedIcon:j,ref:t,ownerState:m},p,{classes:(0,a.Z)({},y,{root:y.switchBase})})),(0,u.jsx)(Z,{className:y.track,ownerState:m})]})})},42888:(e,t,r)=>{"use strict";r.d(t,{Z:()=>i});let i={border:0,clip:"rect(0 0 0 0)",height:"1px",margin:-1,overflow:"hidden",padding:0,position:"absolute",whiteSpace:"nowrap",width:"1px"}},37630:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>P});var i=r(10326),a=r(78439),o=r.n(a),n=r(49474),s=r(71728),c=r(40966),l=r(17082),d=r(87700),h=r(75407),p=r(75616),m=r(43055),u=r(23743),g=r(22553),x=r(3479),b=r(25899),v=r(94621),Z=r(32247),f=r(45861),y=r(50775),j=r(91063),w=r(35117);let M=[{path:"#",title:"Categories",icon:i.jsx(y.Z,{icon:"carbon:menu",sx:{width:1,height:1}}),products:[...Array(10)].map((e,t)=>({name:w.QJ.productName(t),coverUrl:w.QJ.image.product(t),path:"#"})),moreLink:{title:"More Categories",path:"#"},tags:[{title:"Paper Cup",path:"#"},{title:"Lotion Pump",path:"#"},{title:"Brush Cutter",path:"#"},{title:"Display Rack",path:"#"},{title:"Glass Bottle",path:"#"}],children:[{subheader:"Other Machinery & Parts",items:[{title:"Metallic Processing Machinery",path:"#"},{title:"Machinery for Food, Beverage & Cereal",path:"#"},{title:"Laser Equipment",path:"#"},{title:"Mould",path:"#"},{title:"Textile Machinery & Parts",path:"#"},{title:"Cutting & Fold-bend Machine",path:"#"},{title:"Paper Machinery",path:"#"},{title:"Rubber Machinery",path:"#"},{title:"Chemical Equipment & Machinery",path:"#"},{title:"Mixing Equipment",path:"#"},{title:"Machinery for Garment, Shoes & Accessories",path:"#"},{title:"Crushing & Culling Machine",path:"#"}]},{subheader:"Plastic & Woodworking",items:[{title:"Plastic Machinery",path:"#"},{title:"Woodworking Machinery",path:"#"},{title:"Blow Molding Machine",path:"#"},{title:"Plastic Recycling Machine",path:"#"},{title:"Injection Molding Machine",path:"#"}]},{subheader:"Construction Machinery",items:[{title:"Building Material Making Machinery",path:"#"},{title:"Lifting Equipment",path:"#"},{title:"Excavator",path:"#"},{title:"Concrete Machinery",path:"#"},{title:"Stone Processing Machinery",path:"#"}]},{subheader:"Agriculture Machinery",items:[{title:"Agriculture Machinery",path:"#"},{title:"Livestock MachineryFeed",path:"#"},{title:"Feed Processing Machinery",path:"#"},{title:"Tiller",path:"#"},{title:"Harvesting Machine",path:"#"}]},{subheader:"Machine Tools",items:[{title:"CNC Machine Tools",path:"#"},{title:"Lathe",path:"#"},{title:"Grinding Machine ",path:"#"},{title:"Drilling Machine ",path:"#"},{title:"Milling Machine ",path:"#"}]}]}];function k(){let e=(0,u.Z)(),t=(0,Z.F)("up","md"),r=(0,v.k)();return i.jsx(s.Z,{sx:{...(0,f.v3)({color:(0,g.Fq)(e.palette.background.default,.9),imgUrl:"/assets/background/overlay_1.jpg"})},children:(0,i.jsxs)(p.Z,{sx:{display:"flex",alignItems:"center",position:"relative",height:{xs:64,md:72}},children:[t?i.jsx(j.zT,{data:M}):(0,i.jsxs)(i.Fragment,{children:[i.jsx(d.Z,{color:"inherit",onClick:r.onTrue,startIcon:i.jsx(y.Z,{icon:"carbon:menu"}),children:"Categories"}),i.jsx(h.ZP,{open:r.value,onClose:r.onFalse,PaperProps:{sx:{pb:5,width:260}},children:i.jsx(j.py,{data:M})})]}),(0,i.jsxs)(l.Z,{spacing:3,direction:"row",alignItems:"center",flexGrow:1,justifyContent:"flex-end",children:[!t&&i.jsx(m.Z,{size:"small",color:"inherit",sx:{p:0},children:i.jsx(y.Z,{icon:"carbon:search",width:24})}),i.jsx(c.Z,{badgeContent:2,color:"info",children:i.jsx(m.Z,{component:b.r,href:x.H.eCommerce.wishlist,size:"small",color:"inherit",sx:{p:0},children:i.jsx(y.Z,{icon:"carbon:favorite",width:24})})}),i.jsx(c.Z,{badgeContent:4,color:"error",children:i.jsx(m.Z,{component:b.r,href:x.H.eCommerce.cart,size:"small",color:"inherit",sx:{p:0},children:i.jsx(y.Z,{icon:"carbon:shopping-cart",width:24})})}),i.jsx(m.Z,{component:b.r,href:x.H.eCommerce.account.personal,size:"small",color:"inherit",sx:{p:0},children:i.jsx(y.Z,{icon:"carbon:user",width:24})})]})]})})}function C({children:e}){return(0,i.jsxs)(i.Fragment,{children:[i.jsx(k,{}),e]})}function P({children:e}){return i.jsx(n.Z,{children:i.jsx(C,{children:e})})}C.propTypes={children:o().node},P.propTypes={children:o().node}},33421:(e,t,r)=>{"use strict";r.d(t,{default:()=>j});var i=r(10326),a=r(17082),o=r(21969),n=r(75616),s=r(25609),c=r(2980),l=r(35117),d=r(78439),h=r.n(d),p=r(99207),m=r(87700),u=r(9858),g=r(67913),x=r(3479),b=r(25899),v=r(40537),Z=r(61929);function f({product:e}){return(0,i.jsxs)(a.Z,{spacing:3,alignItems:"center",sx:{textAlign:"center"},children:[i.jsx(Z.Z,{src:e.coverUrl,sx:{flexShrink:0,borderRadius:1.5,bgcolor:"background.neutral"}}),(0,i.jsxs)(a.Z,{alignItems:"center",spacing:1,children:[(0,i.jsxs)(s.Z,{variant:"subtitle2",children:[" ",e.name," "]}),(0,i.jsxs)(s.Z,{variant:"h6",children:[" ",(0,v.e_)(e.price)," "]}),i.jsx(u.Z,{size:"small",readOnly:!0,value:e.ratingNumber,precision:.5,sx:{[`&.${g.Z.root}`]:{"& svg":{width:{xs:12,md:20},height:{xs:12,md:20}}}}})]}),i.jsx(m.Z,{component:b.r,href:x.H.eCommerce.cart,fullWidth:!0,size:"large",color:"inherit",variant:"contained",sx:{px:0},children:"Buy Now"}),e.details.map((e,t)=>i.jsx(s.Z,{sx:{typography:{xs:"caption",md:"body2"}},children:e||"-"},t))]})}function y({products:e}){return i.jsx(a.Z,{direction:"row",spacing:{xs:1,md:3},divider:i.jsx(p.Z,{orientation:"vertical",flexItem:!0,sx:{borderStyle:"dashed"}}),children:e.map(e=>i.jsx(f,{product:e},e.id))})}function j(){return(0,i.jsxs)(n.Z,{sx:{overflow:"hidden",pt:5,pb:{xs:5,md:10}},children:[(0,i.jsxs)(a.Z,{spacing:2,alignItems:"flex-start",sx:{mb:5},children:[i.jsx(s.Z,{variant:"h3",children:"Compare"}),i.jsx(c.Z,{control:i.jsx(o.Z,{color:"success",defaultChecked:!0}),label:"Only view the difference"})]}),i.jsx(y,{products:l.hz})]})}f.propTypes={product:h().shape({coverUrl:h().string,details:h().array,name:h().string,price:h().number,ratingNumber:h().number})},y.propTypes={products:h().array}},40537:(e,t,r)=>{"use strict";function i(){return{code:"en-US",currency:"USD"}}function a(e){let{code:t,currency:r}=i();if(!e)return"";let a=Number(e);return new Intl.NumberFormat(t,{style:"currency",currency:r,minimumFractionDigits:0,maximumFractionDigits:2}).format(a)}function o(e){let{code:t}=i();if(!e)return"";let r=Number(e)/100;return new Intl.NumberFormat(t,{style:"percent",minimumFractionDigits:0,maximumFractionDigits:1}).format(r)}function n(e){let{code:t}=i();if(!e)return"";let r=Number(e);return new Intl.NumberFormat(t,{notation:"compact",maximumFractionDigits:2}).format(r).replace(/[A-Z]/g,e=>e.toLowerCase())}r.d(t,{e_:()=>a,f2:()=>o,v1:()=>n})},32281:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>n,metadata:()=>o});var i=r(19510);let a=(0,r(68570).createProxy)(String.raw`/home/dagi00/Documents/GitHub/site/src/sections/_ecommerce/view/ecommerce-compare-view.js#default`),o={title:"E-commerce: Compare"};function n(){return i.jsx(a,{})}},19654:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>i});let i=(0,r(68570).createProxy)(String.raw`/home/dagi00/Documents/GitHub/site/src/app/e-commerce/layout.js#default`)}};var t=require("../../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),i=t.X(0,[8125,8e3,9163,6343,7608,9858,476,7042,5117,9474,1063],()=>r(86400));module.exports=i})();