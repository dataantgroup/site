(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[438],{40608:function(e,t,o){Promise.resolve().then(o.bind(o,64954))},15628:function(e,t,o){"use strict";o.d(t,{Z:function(){return h}});var r=o(57437),n=o(41448),a=o.n(n),i=o(2265),l=o(6195),s=o(91326),c=o(22960),d=o(22305);let p=(0,i.forwardRef)((e,t)=>{let{ratio:o,overlay:n,disabledEffect:a=!1,alt:i,src:p,afterLoad:h,delayTime:u,threshold:m,beforeLoad:g,delayMethod:x,placeholder:f,wrapperProps:b,scrollPosition:y,effect:v="blur",visibleByDefault:j,wrapperClassName:Z,useIntersectionObserver:w,sx:C,...k}=e,S=(0,c.Z)(),P=!!n&&{"&:before":{content:"''",top:0,left:0,width:1,height:1,zIndex:1,position:"absolute",background:n||(0,d.Fq)(S.palette.grey[900],.48)}},T=(0,r.jsx)(s.Z,{component:l.LazyLoadImage,alt:i,src:p,afterLoad:h,delayTime:u,threshold:m,beforeLoad:g,delayMethod:x,placeholder:f,wrapperProps:b,scrollPosition:y,visibleByDefault:j,effect:a?void 0:v,useIntersectionObserver:w,wrapperClassName:Z||"component-image-wrapper",placeholderSrc:a?"/assets/transparent.png":"/assets/placeholder.svg",sx:{width:1,height:1,objectFit:"cover",verticalAlign:"bottom",...!!o&&{top:0,left:0,position:"absolute"}}});return(0,r.jsx)(s.Z,{ref:t,component:"span",className:"component-image",sx:{overflow:"hidden",position:"relative",verticalAlign:"bottom",display:"inline-block",...!!o&&{width:1},"& span.component-image-wrapper":{width:1,height:1,verticalAlign:"bottom",backgroundSize:"cover !important",...!!o&&{pt:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"1/1";return({"4/3":"calc(100% / 4 * 3)","3/4":"calc(100% / 3 * 4)","6/4":"calc(100% / 6 * 4)","4/6":"calc(100% / 4 * 6)","16/9":"calc(100% / 16 * 9)","9/16":"calc(100% / 9 * 16)","21/9":"calc(100% / 21 * 9)","9/21":"calc(100% / 9 * 21)","1/1":"100%"})[e]}(o)}},...P,...C},...k,children:T})});p.propTypes={afterLoad:a().func,alt:a().string,beforeLoad:a().func,delayMethod:a().string,delayTime:a().number,disabledEffect:a().bool,effect:a().string,overlay:a().string,placeholder:a().element,ratio:a().oneOf(["4/3","3/4","6/4","4/6","16/9","9/16","21/9","9/21","1/1"]),scrollPosition:a().object,src:a().string,sx:a().object,threshold:a().number,useIntersectionObserver:a().bool,visibleByDefault:a().bool,wrapperClassName:a().string,wrapperProps:a().object};var h=p},57718:function(e,t,o){"use strict";o.d(t,{Z:function(){return u}});var r=o(57437),n=o(41448),a=o.n(n),i=o(2265),l=o(91326),s=o(22960),c=o(48024),d=o(22305);let p=(0,c.ZP)(l.Z)(e=>{let{theme:t,ownerState:o}=e,r="light"===t.palette.mode,n="filled"===o.variant,a="outlined"===o.variant,i="soft"===o.variant,l={..."default"===o.color&&{...n&&{color:r?t.palette.common.white:t.palette.grey[800],backgroundColor:t.palette.text.primary},...a&&{backgroundColor:"transparent",color:t.palette.text.primary,border:"2px solid ".concat(t.palette.text.primary)},...i&&{color:t.palette.text.secondary,backgroundColor:(0,d.Fq)(t.palette.grey[500],.16)}}},s={..."default"!==o.color&&{...n&&{color:t.palette[o.color].contrastText,backgroundColor:t.palette[o.color].main},...a&&{backgroundColor:"transparent",color:t.palette[o.color].main,border:"2px solid ".concat(t.palette[o.color].main)},...i&&{color:t.palette[o.color][r?"dark":"light"],backgroundColor:(0,d.Fq)(t.palette[o.color].main,.16)}}};return{height:24,minWidth:24,lineHeight:0,borderRadius:6,cursor:"default",alignItems:"center",whiteSpace:"nowrap",display:"inline-flex",justifyContent:"center",textTransform:"capitalize",padding:t.spacing(0,.75),fontSize:t.typography.pxToRem(12),fontWeight:t.typography.fontWeightBold,transition:t.transitions.create("all",{duration:t.transitions.duration.shorter}),...l,...s}}),h=(0,i.forwardRef)((e,t)=>{let{children:o,color:n="default",variant:a="soft",startIcon:i,endIcon:c,sx:d,...h}=e,u=(0,s.Z)(),m={width:16,height:16,"& svg, img":{width:1,height:1,objectFit:"cover"}};return(0,r.jsxs)(p,{ref:t,component:"span",ownerState:{color:n,variant:a},sx:{...i&&{pl:.75},...c&&{pr:.75},...d},theme:u,...h,children:[i&&(0,r.jsxs)(l.Z,{sx:{mr:.75,...m},children:[" ",i," "]}),o,c&&(0,r.jsxs)(l.Z,{sx:{ml:.75,...m},children:[" ",c," "]})]})});h.propTypes={children:a().node,color:a().oneOf(["default","primary","secondary","info","success","warning","error"]),endIcon:a().object,startIcon:a().object,sx:a().object,variant:a().oneOf(["filled","outlined","ghost","soft"])};var u=h},64954:function(e,t,o){"use strict";o.d(t,{default:function(){return j}});var r=o(57437),n=o(2265),a=o(91326),i=o(88929),l=o(22305),s=o(62197),c=o(83719),d=o(74120),p=o(50919),h=o(57549),u=o(18802),m=o(41448),g=o.n(m),x=o(70270),f=o(75519),b=o(57718),y=o(15628);function v(e){let{plan:t}=e,o="Basic"===t.license,n="Starter"===t.license,a="Premium"===t.license;return(0,r.jsxs)(x.Z,{sx:{p:5,textAlign:"center",boxShadow:e=>e.customShadows.z8,...n&&{py:8,boxShadow:e=>e.customShadows.z24}},children:[n&&(0,r.jsx)(b.Z,{color:"info",sx:{position:"absolute",top:16,right:16},children:"POPULAR"}),(0,r.jsxs)(i.Z,{spacing:5,alignItems:"center",children:[(0,r.jsx)(c.Z,{variant:"overline",component:"div",sx:{color:"text.secondary"},children:t.license}),(0,r.jsx)(y.Z,{alt:t.icon,src:t.icon,sx:{width:80,height:80}}),(0,r.jsxs)(i.Z,{direction:"row",alignItems:"center",justifyContent:"center",spacing:.5,children:[!o&&(0,r.jsx)(c.Z,{variant:"h4",component:"span",children:"$"}),(0,r.jsx)(c.Z,{variant:"h3",component:"span",children:t.price}),!o&&(0,r.jsx)(c.Z,{variant:"subtitle2",component:"span",children:"/mo"})]}),(0,r.jsx)(i.Z,{spacing:1,sx:{textAlign:"center"},children:t.options.map(e=>(0,r.jsx)(c.Z,{variant:e.disabled?"body2":"subtitle2",sx:{...e.disabled&&{color:"text.disabled",textDecoration:"line-through"}},children:e.title},e.title))}),(0,r.jsxs)(f.Z,{fullWidth:!0,disabled:o,size:"large",variant:o?"outlined":"contained",color:a?"primary":"inherit",children:[o&&"Current Plan",n&&"Choose Starter",a&&"Choose Premium"]})]})]})}function j(){let[e,t]=(0,n.useState)("monthly"),o=(0,n.useCallback)((e,o)=>{null!==o&&t(o)},[]);return(0,r.jsxs)(s.Z,{sx:{minHeight:1,pt:{xs:13,md:16},pb:{xs:10,md:15}},children:[(0,r.jsxs)(c.Z,{variant:"h3",align:"center",paragraph:!0,children:["Flexible plans for your",(0,r.jsx)("br",{})," community's size and needs"]}),(0,r.jsx)(c.Z,{align:"center",sx:{color:"text.secondary"},children:"Choose your plan and make modern online conversation magic"}),(0,r.jsx)(i.Z,{sx:{my:{xs:5,md:8}},children:(0,r.jsxs)(d.Z,{exclusive:!0,color:"standard",value:e,onChange:o,sx:{mx:"auto",border:0,bgcolor:e=>(0,l.Fq)(e.palette.grey[500],.08),["& .".concat(p.Z.root)]:{m:0,typography:"overline",color:"text.secondary","&:hover":{bgcolor:"transparent"},["&.".concat(p.Z.selected)]:{bgcolor:"text.primary",color:e=>"light"===e.palette.mode?"common.white":"grey.800","&:hover":{bgcolor:"text.primary"}}}},children:[(0,r.jsx)(h.Z,{value:"monthly",children:"MONTHLY"}),(0,r.jsx)(h.Z,{value:"yearly",children:"YEARLY (save 10%)"})]})}),(0,r.jsx)(a.Z,{sx:{gap:4,display:"grid",alignItems:"center",gridTemplateColumns:{xs:"repeat(1, 1fr)",md:"repeat(3, 1fr)"}},children:u.Xs.map(e=>(0,r.jsx)(v,{plan:e},e.license))})]})}v.propTypes={plan:g().shape({icon:g().oneOfType([g().string,g().element]),license:g().string,options:g().array,price:g().string})}}},function(e){e.O(0,[1417,10,6195,1678,1632,8802,7478,7023,1744],function(){return e(e.s=40608)}),_N_E=e.O()}]);