(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6181],{59055:function(e,t,n){Promise.resolve().then(n.bind(n,81154))},28056:function(e,t,n){"use strict";n.d(t,{Z:function(){return d}});var r=n(57437),o=n(41448),i=n.n(o),s=n(2265),a=n(19355),l=n(91326);let c=(0,s.forwardRef)((e,t)=>{let{icon:n,width:o=20,sx:i,...s}=e;return(0,r.jsx)(l.Z,{ref:t,component:a.JO,className:"component-iconify",icon:n,sx:{width:o,height:o,...i},...s})});c.propTypes={icon:i().oneOfType([i().string,i().element]),sx:i().object,width:i().number};var d=c},15628:function(e,t,n){"use strict";n.d(t,{Z:function(){return u}});var r=n(57437),o=n(41448),i=n.n(o),s=n(2265),a=n(6195),l=n(91326),c=n(22960),d=n(22305);let p=(0,s.forwardRef)((e,t)=>{let{ratio:n,overlay:o,disabledEffect:i=!1,alt:s,src:p,afterLoad:u,delayTime:x,threshold:h,beforeLoad:m,delayMethod:b,placeholder:f,wrapperProps:g,scrollPosition:j,effect:v="blur",visibleByDefault:y,wrapperClassName:Z,useIntersectionObserver:w,sx:k,...C}=e,T=(0,c.Z)(),S=!!o&&{"&:before":{content:"''",top:0,left:0,width:1,height:1,zIndex:1,position:"absolute",background:o||(0,d.Fq)(T.palette.grey[900],.48)}},I=(0,r.jsx)(l.Z,{component:a.LazyLoadImage,alt:s,src:p,afterLoad:u,delayTime:x,threshold:h,beforeLoad:m,delayMethod:b,placeholder:f,wrapperProps:g,scrollPosition:j,visibleByDefault:y,effect:i?void 0:v,useIntersectionObserver:w,wrapperClassName:Z||"component-image-wrapper",placeholderSrc:i?"/assets/transparent.png":"/assets/placeholder.svg",sx:{width:1,height:1,objectFit:"cover",verticalAlign:"bottom",...!!n&&{top:0,left:0,position:"absolute"}}});return(0,r.jsx)(l.Z,{ref:t,component:"span",className:"component-image",sx:{overflow:"hidden",position:"relative",verticalAlign:"bottom",display:"inline-block",...!!n&&{width:1},"& span.component-image-wrapper":{width:1,height:1,verticalAlign:"bottom",backgroundSize:"cover !important",...!!n&&{pt:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"1/1";return({"4/3":"calc(100% / 4 * 3)","3/4":"calc(100% / 3 * 4)","6/4":"calc(100% / 6 * 4)","4/6":"calc(100% / 4 * 6)","16/9":"calc(100% / 16 * 9)","9/16":"calc(100% / 9 * 16)","21/9":"calc(100% / 21 * 9)","9/21":"calc(100% / 9 * 21)","1/1":"100%"})[e]}(n)}},...S,...k},...C,children:I})});p.propTypes={afterLoad:i().func,alt:i().string,beforeLoad:i().func,delayMethod:i().string,delayTime:i().number,disabledEffect:i().bool,effect:i().string,overlay:i().string,placeholder:i().element,ratio:i().oneOf(["4/3","3/4","6/4","4/6","16/9","9/16","21/9","9/21","1/1"]),scrollPosition:i().object,src:i().string,sx:i().object,threshold:i().number,useIntersectionObserver:i().bool,visibleByDefault:i().bool,wrapperClassName:i().string,wrapperProps:i().object};var u=p},57718:function(e,t,n){"use strict";n.d(t,{Z:function(){return x}});var r=n(57437),o=n(41448),i=n.n(o),s=n(2265),a=n(91326),l=n(22960),c=n(48024),d=n(22305);let p=(0,c.ZP)(a.Z)(e=>{let{theme:t,ownerState:n}=e,r="light"===t.palette.mode,o="filled"===n.variant,i="outlined"===n.variant,s="soft"===n.variant,a={..."default"===n.color&&{...o&&{color:r?t.palette.common.white:t.palette.grey[800],backgroundColor:t.palette.text.primary},...i&&{backgroundColor:"transparent",color:t.palette.text.primary,border:"2px solid ".concat(t.palette.text.primary)},...s&&{color:t.palette.text.secondary,backgroundColor:(0,d.Fq)(t.palette.grey[500],.16)}}},l={..."default"!==n.color&&{...o&&{color:t.palette[n.color].contrastText,backgroundColor:t.palette[n.color].main},...i&&{backgroundColor:"transparent",color:t.palette[n.color].main,border:"2px solid ".concat(t.palette[n.color].main)},...s&&{color:t.palette[n.color][r?"dark":"light"],backgroundColor:(0,d.Fq)(t.palette[n.color].main,.16)}}};return{height:24,minWidth:24,lineHeight:0,borderRadius:6,cursor:"default",alignItems:"center",whiteSpace:"nowrap",display:"inline-flex",justifyContent:"center",textTransform:"capitalize",padding:t.spacing(0,.75),fontSize:t.typography.pxToRem(12),fontWeight:t.typography.fontWeightBold,transition:t.transitions.create("all",{duration:t.transitions.duration.shorter}),...a,...l}}),u=(0,s.forwardRef)((e,t)=>{let{children:n,color:o="default",variant:i="soft",startIcon:s,endIcon:c,sx:d,...u}=e,x=(0,l.Z)(),h={width:16,height:16,"& svg, img":{width:1,height:1,objectFit:"cover"}};return(0,r.jsxs)(p,{ref:t,component:"span",ownerState:{color:o,variant:i},sx:{...s&&{pl:.75},...c&&{pr:.75},...d},theme:x,...u,children:[s&&(0,r.jsxs)(a.Z,{sx:{mr:.75,...h},children:[" ",s," "]}),n,c&&(0,r.jsxs)(a.Z,{sx:{ml:.75,...h},children:[" ",c," "]})]})});u.propTypes={children:i().node,color:i().oneOf(["default","primary","secondary","info","success","warning","error"]),endIcon:i().object,startIcon:i().object,sx:i().object,variant:i().oneOf(["filled","outlined","ghost","soft"])};var x=u},36892:function(e,t,n){"use strict";n.d(t,{k:function(){return o}});var r=n(2265);function o(e){let[t,n]=(0,r.useState)(!!e);return{value:t,onTrue:(0,r.useCallback)(()=>{n(!0)},[]),onFalse:(0,r.useCallback)(()=>{n(!1)},[]),onToggle:(0,r.useCallback)(()=>{n(e=>!e)},[]),setValue:n}}},94038:function(e,t,n){"use strict";n.d(t,{F:function(){return i},z:function(){return s}});var r=n(22960),o=n(51365);function i(e,t,n){let i=(0,r.Z)(),s=(0,o.Z)(i.breakpoints.up(t)),a=(0,o.Z)(i.breakpoints.down(t)),l=(0,o.Z)(i.breakpoints.between(t,n)),c=(0,o.Z)(i.breakpoints.only(t));return"up"===e?s:"down"===e?a:"between"===e?l:c}function s(){let e=(0,r.Z)();return[...e.breakpoints.keys].reverse().reduce((t,n)=>{let r=(0,o.Z)(e.breakpoints.up(n));return!t&&r?n:t},null)||"xs"}},81154:function(e,t,n){"use strict";n.d(t,{default:function(){return k}});var r=n(57437),o=n(88929),i=n(31655),s=n(62197),a=n(12834),l=n(83719),c=n(94038),d=n(18802),p=n(28056),u=n(41448),x=n.n(u),h=n(57718),m=n(15628);function b(e){let{plan:t}=e,n="Start"===t.license,i="Pro"===t.license;return(0,r.jsxs)(o.Z,{spacing:2,alignItems:{xs:"flex-start",md:"center"},sx:{px:3,py:5,position:"relative",...i&&{bgcolor:{md:"background.neutral"},borderRadius:"16px 16px 0 0"}},children:[i&&(0,r.jsx)(h.Z,{color:"info",sx:{position:"absolute",top:16,right:16},children:"POPULAR"}),(0,r.jsx)(l.Z,{variant:"overline",sx:{color:"text.secondary"},children:t.license}),(0,r.jsxs)(o.Z,{direction:"row",alignItems:"center",justifyContent:"center",spacing:.5,sx:{...i&&{color:{md:"primary.main"}}},children:[!n&&(0,r.jsx)(l.Z,{variant:"h4",component:"span",children:"$"}),(0,r.jsx)(l.Z,{variant:"h3",component:"span",children:t.price}),!n&&(0,r.jsx)(l.Z,{variant:"subtitle2",component:"span",children:"/mo"})]}),(0,r.jsx)(m.Z,{alt:t.icon,src:t.icon,sx:{width:80,height:80}}),(0,r.jsx)(l.Z,{variant:"body2",sx:{color:"text.secondary"},children:t.caption})]})}b.propTypes={plan:x().shape({caption:x().string,icon:x().oneOfType([x().string,x().element]),license:x().string,price:x().string})};var f=n(41665),g=n(75519),j=n(19216),v=n(36892);function y(e){let{plan:t}=e,n=(0,v.k)(),i="Start"===t.license,s="Pro"===t.license,a="Business"===t.license;return(0,r.jsxs)(o.Z,{spacing:5,sx:{px:3,pb:5},children:[(0,r.jsxs)("div",{children:[(0,r.jsxs)(f.Z,{variant:"subtitle2",color:n.value?"primary":"inherit",onClick:n.onToggle,sx:{display:"flex",alignItems:"center",cursor:"pointer"},children:[n.value?"Hide":"Show"," all feature",(0,r.jsx)(p.Z,{icon:n.value?"carbon:chevron-up":"carbon:chevron-down",sx:{ml:1}})]}),(0,r.jsx)(j.Z,{unmountOnExit:!0,in:n.value,children:(0,r.jsx)(o.Z,{spacing:2,sx:{pt:3},children:t.options.map(e=>(0,r.jsxs)(o.Z,{direction:"row",alignItems:"center",justifyContent:"space-between",children:[(0,r.jsx)(l.Z,{variant:"body2",sx:{...e.disabled&&{color:"text.disabled"}},children:e.title}),(0,r.jsx)(p.Z,{icon:e.disabled?"carbon:close-outline":"carbon:checkmark",sx:{color:"primary.main",...e.disabled&&{color:"text.disabled"}}})]},e.title))})})]}),(0,r.jsxs)(g.Z,{fullWidth:!0,size:"large",variant:s?"contained":"outlined",color:"inherit",children:[i&&"Start Free Trial",s&&"Choose Pro",a&&"Contact Sale"]})]})}y.propTypes={plan:x().shape({license:x().string,options:x().array})};var Z=n(91326);function w(e){let{plan:t}=e,n="Start"===t.license,i="Pro"===t.license,s="Business"===t.license;return(0,r.jsxs)(Z.Z,{children:[t.options.map(e=>(0,r.jsx)(o.Z,{alignItems:"center",justifyContent:"center",sx:{height:72,color:"text.secondary",borderBottom:e=>"solid 1px ".concat(e.palette.divider),...i&&{bgcolor:"background.neutral"}},children:e.disabled?"-":(0,r.jsx)(p.Z,{icon:"carbon:checkmark",sx:{width:24,height:24,color:"primary.main"}})},e.title)),(0,r.jsx)(o.Z,{sx:{py:5,...i&&{bgcolor:"background.neutral",borderRadius:"0 0 16px 16px"}},children:(0,r.jsxs)(g.Z,{size:"large",variant:i?"contained":"outlined",color:"inherit",sx:{mx:"auto"},children:[n&&"Start Free Trial",i&&"Choose Pro",s&&"Contact Sale"]})})]})}function k(){let e=(0,c.F)("up","md");return(0,r.jsxs)(s.Z,{sx:{minHeight:1,pt:{xs:13,md:16},pb:{xs:10,md:15}},children:[(0,r.jsxs)(l.Z,{variant:"h3",align:"center",paragraph:!0,children:["Flexible plans for your",(0,r.jsx)("br",{})," community's size and needs"]}),(0,r.jsx)(l.Z,{align:"center",sx:{mb:{xs:5,md:8},color:"text.secondary"},children:"Choose your plan and make modern online conversation magic"}),(0,r.jsxs)(a.Z,{container:!0,alignItems:"flex-end",children:[e&&(0,r.jsx)(a.Z,{xs:12,md:3,sx:{pb:5},children:(0,r.jsx)(l.Z,{variant:"overline",sx:{color:"primary.main"},children:"Feature"})}),d.Kj.map(t=>(0,r.jsxs)(a.Z,{xs:12,md:3,sx:{mb:{xs:4,md:0},borderRadius:{xs:2,md:0},boxShadow:e=>({xs:e.customShadows.z16,md:0})},children:[(0,r.jsx)(b,{plan:t}),!e&&(0,r.jsx)(y,{plan:t})]},t.license))]}),e&&(0,r.jsxs)(a.Z,{container:!0,children:[(0,r.jsx)(a.Z,{xs:12,md:3,sx:{borderTop:e=>"solid 1px ".concat(e.palette.divider)},children:d.Kj[0].options.map(e=>(0,r.jsxs)(o.Z,{direction:"row",alignItems:"center",justifyContent:"space-between",sx:{height:72,borderBottom:e=>"solid 1px ".concat(e.palette.divider)},children:[(0,r.jsx)(l.Z,{variant:"subtitle2",children:e.title}),(0,r.jsx)(i.Z,{title:e.tootip,placement:"right",arrow:!0,children:(0,r.jsx)("div",{children:(0,r.jsx)(p.Z,{icon:"carbon:information",sx:{color:"text.secondary"}})})})]},e.title))}),d.Kj.map(e=>(0,r.jsx)(a.Z,{xs:12,md:3,sx:{borderTop:e=>({md:"solid 1px ".concat(e.palette.divider)})},children:(0,r.jsx)(w,{plan:e})},e.license))]})]})}w.propTypes={plan:x().shape({license:x().string,options:x().array})}}},function(e){e.O(0,[1417,10,7866,3700,6195,458,4372,1655,9505,8802,7478,7023,1744],function(){return e(e.s=59055)}),_N_E=e.O()}]);