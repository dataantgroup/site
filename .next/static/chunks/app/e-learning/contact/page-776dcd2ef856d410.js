(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4295],{79029:function(e,t,r){Promise.resolve().then(r.bind(r,8083))},14595:function(e,t,r){"use strict";var i=r(23950),n=r(22988),o=r(2265),l=r(44839),a=r(76990),s=r(10317),c=r(48024),d=r(95885),p=r(68525),u=r(57437);let h=["absolute","children","className","component","flexItem","light","orientation","role","textAlign","variant"],f=e=>{let{absolute:t,children:r,classes:i,flexItem:n,light:o,orientation:l,textAlign:s,variant:c}=e;return(0,a.Z)({root:["root",t&&"absolute",c,o&&"light","vertical"===l&&"vertical",n&&"flexItem",r&&"withChildren",r&&"vertical"===l&&"withChildrenVertical","right"===s&&"vertical"!==l&&"textAlignRight","left"===s&&"vertical"!==l&&"textAlignLeft"],wrapper:["wrapper","vertical"===l&&"wrapperVertical"]},p.V,i)},m=(0,c.ZP)("div",{name:"MuiDivider",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:r}=e;return[t.root,r.absolute&&t.absolute,t[r.variant],r.light&&t.light,"vertical"===r.orientation&&t.vertical,r.flexItem&&t.flexItem,r.children&&t.withChildren,r.children&&"vertical"===r.orientation&&t.withChildrenVertical,"right"===r.textAlign&&"vertical"!==r.orientation&&t.textAlignRight,"left"===r.textAlign&&"vertical"!==r.orientation&&t.textAlignLeft]}})(e=>{let{theme:t,ownerState:r}=e;return(0,n.Z)({margin:0,flexShrink:0,borderWidth:0,borderStyle:"solid",borderColor:(t.vars||t).palette.divider,borderBottomWidth:"thin"},r.absolute&&{position:"absolute",bottom:0,left:0,width:"100%"},r.light&&{borderColor:t.vars?"rgba(".concat(t.vars.palette.dividerChannel," / 0.08)"):(0,s.Fq)(t.palette.divider,.08)},"inset"===r.variant&&{marginLeft:72},"middle"===r.variant&&"horizontal"===r.orientation&&{marginLeft:t.spacing(2),marginRight:t.spacing(2)},"middle"===r.variant&&"vertical"===r.orientation&&{marginTop:t.spacing(1),marginBottom:t.spacing(1)},"vertical"===r.orientation&&{height:"100%",borderBottomWidth:0,borderRightWidth:"thin"},r.flexItem&&{alignSelf:"stretch",height:"auto"})},e=>{let{ownerState:t}=e;return(0,n.Z)({},t.children&&{display:"flex",whiteSpace:"nowrap",textAlign:"center",border:0,borderTopStyle:"solid",borderLeftStyle:"solid","&::before, &::after":{content:'""',alignSelf:"center"}})},e=>{let{theme:t,ownerState:r}=e;return(0,n.Z)({},r.children&&"vertical"!==r.orientation&&{"&::before, &::after":{width:"100%",borderTop:"thin solid ".concat((t.vars||t).palette.divider),borderTopStyle:"inherit"}})},e=>{let{theme:t,ownerState:r}=e;return(0,n.Z)({},r.children&&"vertical"===r.orientation&&{flexDirection:"column","&::before, &::after":{height:"100%",borderLeft:"thin solid ".concat((t.vars||t).palette.divider),borderLeftStyle:"inherit"}})},e=>{let{ownerState:t}=e;return(0,n.Z)({},"right"===t.textAlign&&"vertical"!==t.orientation&&{"&::before":{width:"90%"},"&::after":{width:"10%"}},"left"===t.textAlign&&"vertical"!==t.orientation&&{"&::before":{width:"10%"},"&::after":{width:"90%"}})}),g=(0,c.ZP)("span",{name:"MuiDivider",slot:"Wrapper",overridesResolver:(e,t)=>{let{ownerState:r}=e;return[t.wrapper,"vertical"===r.orientation&&t.wrapperVertical]}})(e=>{let{theme:t,ownerState:r}=e;return(0,n.Z)({display:"inline-block",paddingLeft:"calc(".concat(t.spacing(1)," * 1.2)"),paddingRight:"calc(".concat(t.spacing(1)," * 1.2)")},"vertical"===r.orientation&&{paddingTop:"calc(".concat(t.spacing(1)," * 1.2)"),paddingBottom:"calc(".concat(t.spacing(1)," * 1.2)")})}),y=o.forwardRef(function(e,t){let r=(0,d.i)({props:e,name:"MuiDivider"}),{absolute:o=!1,children:a,className:s,component:c=a?"div":"hr",flexItem:p=!1,light:y=!1,orientation:b="horizontal",role:x="hr"!==c?"separator":void 0,textAlign:v="center",variant:Z="fullWidth"}=r,w=(0,i.Z)(r,h),j=(0,n.Z)({},r,{absolute:o,component:c,flexItem:p,light:y,orientation:b,role:x,textAlign:v,variant:Z}),T=f(j);return(0,u.jsx)(m,(0,n.Z)({as:c,className:(0,l.Z)(T.root,s),role:x,ref:t,ownerState:j},w,{children:a?(0,u.jsx)(g,{className:T.wrapper,ownerState:j,children:a}):null}))});y.muiSkipListHighlight=!0,t.Z=y},73331:function(e,t,r){"use strict";var i=r(2265);t.Z=e=>{let t=i.useRef({});return i.useEffect(()=>{t.current=e}),t.current}},37289:function(e,t,r){"use strict";function i(e,t){if(t.length<e)throw TypeError(e+" argument"+(e>1?"s":"")+" required, but only "+t.length+" present")}r.d(t,{Z:function(){return i}})},41907:function(e,t,r){"use strict";function i(e){if(null===e||!0===e||!1===e)return NaN;var t=Number(e);return isNaN(t)?t:t<0?Math.ceil(t):Math.floor(t)}r.d(t,{Z:function(){return i}})},50508:function(e,t,r){"use strict";r.d(t,{Z:function(){return l}});var i=r(41907),n=r(36523),o=r(37289);function l(e,t){(0,o.Z)(2,arguments);var r=(0,n.Z)(e),l=(0,i.Z)(t);return isNaN(l)?new Date(NaN):(l&&r.setDate(r.getDate()+l),r)}},19738:function(e,t,r){"use strict";r.d(t,{Z:function(){return l}});var i=r(41907),n=r(36523),o=r(37289);function l(e,t){(0,o.Z)(2,arguments);var r=(0,n.Z)(e),l=(0,i.Z)(t);if(isNaN(l))return new Date(NaN);if(!l)return r;var a=r.getDate(),s=new Date(r.getTime());return(s.setMonth(r.getMonth()+l+1,0),a>=s.getDate())?s:(r.setFullYear(s.getFullYear(),s.getMonth(),a),r)}},36523:function(e,t,r){"use strict";r.d(t,{Z:function(){return o}});var i=r(8620),n=r(37289);function o(e){(0,n.Z)(1,arguments);var t=Object.prototype.toString.call(e);return e instanceof Date||"object"===(0,i.Z)(e)&&"[object Date]"===t?new Date(e.getTime()):"number"==typeof e||"[object Number]"===t?new Date(e):(("string"==typeof e||"[object String]"===t)&&"undefined"!=typeof console&&(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn(Error().stack)),new Date(NaN))}},15628:function(e,t,r){"use strict";r.d(t,{Z:function(){return u}});var i=r(57437),n=r(41448),o=r.n(n),l=r(2265),a=r(6195),s=r(91326),c=r(22960),d=r(22305);let p=(0,l.forwardRef)((e,t)=>{let{ratio:r,overlay:n,disabledEffect:o=!1,alt:l,src:p,afterLoad:u,delayTime:h,threshold:f,beforeLoad:m,delayMethod:g,placeholder:y,wrapperProps:b,scrollPosition:x,effect:v="blur",visibleByDefault:Z,wrapperClassName:w,useIntersectionObserver:j,sx:T,...S}=e,N=(0,c.Z)(),C=!!n&&{"&:before":{content:"''",top:0,left:0,width:1,height:1,zIndex:1,position:"absolute",background:n||(0,d.Fq)(N.palette.grey[900],.48)}},I=(0,i.jsx)(s.Z,{component:a.LazyLoadImage,alt:l,src:p,afterLoad:u,delayTime:h,threshold:f,beforeLoad:m,delayMethod:g,placeholder:y,wrapperProps:b,scrollPosition:x,visibleByDefault:Z,effect:o?void 0:v,useIntersectionObserver:j,wrapperClassName:w||"component-image-wrapper",placeholderSrc:o?"/assets/transparent.png":"/assets/placeholder.svg",sx:{width:1,height:1,objectFit:"cover",verticalAlign:"bottom",...!!r&&{top:0,left:0,position:"absolute"}}});return(0,i.jsx)(s.Z,{ref:t,component:"span",className:"component-image",sx:{overflow:"hidden",position:"relative",verticalAlign:"bottom",display:"inline-block",...!!r&&{width:1},"& span.component-image-wrapper":{width:1,height:1,verticalAlign:"bottom",backgroundSize:"cover !important",...!!r&&{pt:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"1/1";return({"4/3":"calc(100% / 4 * 3)","3/4":"calc(100% / 3 * 4)","6/4":"calc(100% / 6 * 4)","4/6":"calc(100% / 4 * 6)","16/9":"calc(100% / 16 * 9)","9/16":"calc(100% / 9 * 16)","21/9":"calc(100% / 21 * 9)","9/21":"calc(100% / 9 * 21)","1/1":"100%"})[e]}(r)}},...C,...T},...S,children:I})});p.propTypes={afterLoad:o().func,alt:o().string,beforeLoad:o().func,delayMethod:o().string,delayTime:o().number,disabledEffect:o().bool,effect:o().string,overlay:o().string,placeholder:o().element,ratio:o().oneOf(["4/3","3/4","6/4","4/6","16/9","9/16","21/9","9/21","1/1"]),scrollPosition:o().object,src:o().string,sx:o().object,threshold:o().number,useIntersectionObserver:o().bool,visibleByDefault:o().bool,wrapperClassName:o().string,wrapperProps:o().object};var u=p},84710:function(e,t,r){"use strict";r.d(t,{Z:function(){return v}});var i=r(57437),n=r(41448),o=r.n(n),l=r(2329),a=r(2265),s=r(91326);let c=r(20357).env.NEXT_PUBLIC_MAP_API;var d=r(48563),p=r(88929),u=r(94614),h=r(83719),f=r(15628),m=r(28056);function g(e){let{office:t,onClose:r,lat:n,lng:o}=e,l=(0,a.useCallback)(e=>{e.stopPropagation(),r(),console.log("lat-lng",n,o)},[n,o,r]);return(0,i.jsxs)(d.Z,{sx:{width:220,overflow:"hidden",borderRadius:1.5,mt:2,ml:2,position:"relative"},children:[(0,i.jsx)(s.Z,{sx:{position:"absolute",right:4,top:4,zIndex:9},children:(0,i.jsx)(u.Z,{size:"small",onClick:l,children:(0,i.jsx)(m.Z,{icon:"carbon:close-filled",sx:{opacity:.48,color:"common.white","&:hover":{opacity:1},...!t.photo&&{color:"text.disabled"}}})})}),t.photo&&(0,i.jsx)(f.Z,{alt:"photo",src:t.photo,ratio:"4/3"}),(0,i.jsxs)(p.Z,{spacing:1,sx:{p:1.5,wordBreak:"break-all",...!t.photo&&{p:2,pr:3.5}},children:[t.country&&(0,i.jsx)(h.Z,{variant:"subtitle2",children:t.country}),t.address&&(0,i.jsx)(h.Z,{component:"p",variant:"caption",children:t.address}),t.email&&(0,i.jsxs)(p.Z,{direction:"row",alignItems:"flex-start",sx:{typography:"caption"},children:[(0,i.jsx)(m.Z,{icon:"carbon:email",width:18,sx:{mr:.5}}),t.email]}),t.phoneNumber&&(0,i.jsxs)(p.Z,{direction:"row",alignItems:"flex-start",sx:{typography:"caption"},children:[(0,i.jsx)(m.Z,{icon:"carbon:phone",width:18,sx:{mr:.5}}),t.phoneNumber]})]})]})}g.propTypes={lat:o().number,lng:o().number,office:o().shape({address:o().string,country:o().string,email:o().string,phoneNumber:o().string,photo:o().string}),onClose:o().func};let y=[{featureType:"administrative",elementType:"labels.text.fill",stylers:[{color:"#6195a0"}]},{featureType:"administrative.province",elementType:"geometry.stroke",stylers:[{visibility:"off"}]},{featureType:"landscape",elementType:"geometry",stylers:[{lightness:"0"},{saturation:"0"},{color:"#f5f5f2"},{gamma:"1"}]},{featureType:"landscape.man_made",elementType:"all",stylers:[{lightness:"-3"},{gamma:"1.00"}]},{featureType:"landscape.natural.terrain",elementType:"all",stylers:[{visibility:"off"}]},{featureType:"poi",elementType:"all",stylers:[{visibility:"off"}]},{featureType:"poi.park",elementType:"geometry.fill",stylers:[{color:"#bae5ce"},{visibility:"on"}]},{featureType:"road",elementType:"all",stylers:[{saturation:-100},{lightness:45},{visibility:"simplified"}]},{featureType:"road.highway",elementType:"all",stylers:[{visibility:"simplified"}]},{featureType:"road.highway",elementType:"geometry.fill",stylers:[{color:"#fac9a9"},{visibility:"simplified"}]},{featureType:"road.highway",elementType:"labels.text",stylers:[{color:"#4e4e4e"}]},{featureType:"road.arterial",elementType:"labels.text.fill",stylers:[{color:"#787878"}]},{featureType:"road.arterial",elementType:"labels.icon",stylers:[{visibility:"off"}]},{featureType:"transit",elementType:"all",stylers:[{visibility:"simplified"}]},{featureType:"transit.station.airport",elementType:"labels.icon",stylers:[{hue:"#0a00ff"},{saturation:"-77"},{gamma:"0.57"},{lightness:"0"}]},{featureType:"transit.station.rail",elementType:"labels.text.fill",stylers:[{color:"#43321e"}]},{featureType:"transit.station.rail",elementType:"labels.icon",stylers:[{hue:"#ff6c00"},{lightness:"4"},{gamma:"0.75"},{saturation:"-68"}]},{featureType:"water",elementType:"all",stylers:[{color:"#eaf6f8"},{visibility:"on"}]},{featureType:"water",elementType:"geometry.fill",stylers:[{color:"#c7eced"}]},{featureType:"water",elementType:"labels.text.fill",stylers:[{lightness:"-49"},{saturation:"-53"},{gamma:"0.79"}]}];var b=r(4609);function x(e){let{onOpen:t,lat:r,lng:n}=e,o=(0,a.useCallback)(e=>{e.stopPropagation(),t()},[t]);return(0,i.jsx)(s.Z,{onClick:o,children:(0,i.jsx)(b.Z,{sx:{color:"error.main",cursor:"pointer"},children:(0,i.jsx)("path",{d:"M20.2,15.7L20.2,15.7c1.1-1.6,1.8-3.6,1.8-5.7c0-5.6-4.5-10-10-10S2,4.5,2,10c0,2,0.6,3.9,1.6,5.4c0,0.1,0.1,0.2,0.2,0.3 c0,0,0.1,0.1,0.1,0.2c0.2,0.3,0.4,0.6,0.7,0.9c2.6,3.1,7.4,7.6,7.4,7.6s4.8-4.5,7.4-7.5c0.2-0.3,0.5-0.6,0.7-0.9 C20.1,15.8,20.2,15.8,20.2,15.7z"})})})}function v(e){let{offices:t,sx:r,...n}=e,[o,d]=(0,a.useState)(null),[p,u]=(0,a.useState)({lat:t[0].latlng[0],lng:t[0].latlng[1]}),h=(0,a.useCallback)((e,t,r)=>{u({...p,lat:e-32,lng:t}),d(r)},[p]);return(0,i.jsx)(s.Z,{sx:{height:480,overflow:"hidden",...r},...n,children:(0,i.jsxs)(l.ZP,{bootstrapURLKeys:{key:c},center:p,zoom:2,options:{styles:y,disableDefaultUI:!0},children:[t.map((e,t)=>(0,i.jsx)(x,{lat:e.latlng[0],lng:e.latlng[1],onOpen:()=>h(e.latlng[0],e.latlng[1],e)},t)),o&&(0,i.jsx)(g,{lat:o.latlng[0],lng:o.latlng[1],office:o,onClose:()=>d(null)})]})})}x.propTypes={lat:o().number,lng:o().number,onOpen:o().func},v.propTypes={offices:o().array,sx:o().object}},33814:function(e,t,r){"use strict";r.d(t,{Z:function(){return h}});var i=r(57437),n=r(91326),o=r(15667),l=r(12834),a=r(62197),s=r(83719),c=r(81133),d=r(74275),p=r(92510),u=r(15628);function h(){return(0,i.jsx)(n.Z,{sx:{py:{xs:10,md:15},overflow:"hidden",bgcolor:"primary.lighter"},children:(0,i.jsx)(a.Z,{children:(0,i.jsxs)(l.Z,{container:!0,spacing:{xs:5,md:3},alignItems:{md:"center"},justifyContent:{md:"space-between"},direction:{xs:"column-reverse",md:"row"},children:[(0,i.jsxs)(l.Z,{xs:12,md:5,sx:{textAlign:"center",color:"grey.800"},children:[(0,i.jsx)(s.Z,{variant:"h3",children:"Register Now Forget 20% Discount Every Courses"}),(0,i.jsx)(s.Z,{sx:{mt:2.5,mb:5},children:"Nam ipsum risus, rutrum vitae, vestibulum eu, molestie vel, lacus. Sed magna purus, fermentum eu"}),(0,i.jsx)(d.ZP,{fullWidth:!0,placeholder:"Enter your email",endAdornment:(0,i.jsx)(c.Z,{position:"end",children:(0,i.jsx)(o.Z,{color:"primary",size:"large",variant:"contained",children:"Register"})}),sx:{pr:.5,pl:1.5,height:56,maxWidth:560,borderRadius:1,bgcolor:"common.white",transition:e=>e.transitions.create(["box-shadow"]),["&.".concat(p.Z.focused)]:{boxShadow:e=>e.customShadows.z4}}})]}),(0,i.jsx)(l.Z,{xs:12,md:5,children:(0,i.jsx)(u.Z,{alt:"newsletter",src:"/assets/illustrations/illustration_newsletter.svg",sx:{maxWidth:366,mx:"auto"}})})]})})})}},8083:function(e,t,r){"use strict";r.d(t,{default:function(){return f}});var i=r(57437);r(33814);var n=r(41665),o=r(88929),l=r(14595),a=r(12834),s=r(62197),c=r(94614),d=r(83719),p=r(18802);r(84710);var u=r(28056);function h(){return(0,i.jsx)(s.Z,{sx:{pt:{xs:5,md:5},pb:{xs:10,md:15}},children:(0,i.jsx)(a.Z,{container:!0,spacing:3,justifyContent:{md:"space-between"},children:(0,i.jsxs)(a.Z,{xs:12,md:6,lg:4,children:[(0,i.jsx)(d.Z,{variant:"h2",sx:{mb:5,textAlign:{xs:"center",md:"left"}},children:"Get In Touch"}),(0,i.jsxs)(o.Z,{spacing:3,alignItems:{xs:"center",md:"flex-start"},children:[(0,i.jsxs)(o.Z,{spacing:1,children:[(0,i.jsxs)(o.Z,{direction:"row",alignItems:"center",sx:{typography:"subtitle2"},children:[(0,i.jsx)(u.Z,{icon:"carbon:email",width:24,sx:{mr:1}})," Email"]}),(0,i.jsx)(n.Z,{color:"inherit",variant:"body2",href:"mailto:plau312465@gmail.com",children:"plau312465@gmail.com"})]}),(0,i.jsxs)(o.Z,{spacing:1,children:[(0,i.jsxs)(o.Z,{direction:"row",alignItems:"center",sx:{typography:"subtitle2"},children:[(0,i.jsx)(u.Z,{icon:"carbon:mobile",width:24,sx:{mr:1}})," Phone"]}),(0,i.jsx)(d.Z,{variant:"body2",children:"(852) 6747-3938"})]}),(0,i.jsxs)(o.Z,{spacing:1,children:[(0,i.jsxs)(o.Z,{direction:"row",alignItems:"center",sx:{typography:"subtitle2"},children:[(0,i.jsx)(u.Z,{icon:"carbon:location",width:24,sx:{mr:1}})," Address"]}),(0,i.jsx)(d.Z,{variant:"body2",children:"Suite 2104, 248 Des Voeus Road, Central, Hong Kong"})]}),(0,i.jsx)(l.Z,{sx:{borderStyle:"dashed",width:1}}),(0,i.jsxs)(o.Z,{spacing:1,alignItems:{xs:"center",md:"flex-start"},children:[(0,i.jsx)(d.Z,{variant:"overline",children:"Follow Us"}),(0,i.jsx)(o.Z,{direction:"row",children:p._I.map(e=>(0,i.jsx)(c.Z,{color:"inherit",children:(0,i.jsx)(u.Z,{icon:e.icon})},e.value))})]})]})]})})})}function f(){return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(h,{})})}r(14245),r(15628),r(75574)},8620:function(e,t,r){"use strict";function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}r.d(t,{Z:function(){return i}})}},function(e){e.O(0,[1417,6907,3607,5931,2482,2717,4423,1738,309,5156,7316,4372,4402,6858,2013,9585,9910,2023,2476,8802,5574,7478,7023,1744],function(){return e(e.s=79029)}),_N_E=e.O()}]);