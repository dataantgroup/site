(()=>{var e={};e.id=4295,e.ids=[4295],e.modules={72934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},54580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},45869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},5693:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>a.a,__next_app__:()=>u,originalPathname:()=>p,pages:()=>d,routeModule:()=>m,tree:()=>c}),r(68511),r(37039),r(41510),r(29372),r(54864);var s=r(23191),i=r(88716),n=r(37922),a=r.n(n),l=r(95231),o={};for(let e in l)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(o[e]=()=>l[e]);r.d(t,o);let c=["",{children:["e-learning",{children:["contact",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,68511)),"/home/dagi00/Documents/GitHub/site/src/app/e-learning/contact/page.js"]}]},{layout:[()=>Promise.resolve().then(r.bind(r,37039)),"/home/dagi00/Documents/GitHub/site/src/app/e-learning/contact/layout.js"]}]},{}]},{layout:[()=>Promise.resolve().then(r.bind(r,41510)),"/home/dagi00/Documents/GitHub/site/src/app/layout.js"],loading:[()=>Promise.resolve().then(r.bind(r,29372)),"/home/dagi00/Documents/GitHub/site/src/app/loading.js"],"not-found":[()=>Promise.resolve().then(r.bind(r,54864)),"/home/dagi00/Documents/GitHub/site/src/app/not-found.js"]}],d=["/home/dagi00/Documents/GitHub/site/src/app/e-learning/contact/page.js"],p="/e-learning/contact/page",u={require:r,loadChunk:()=>Promise.resolve()},m=new s.AppPageRouteModule({definition:{kind:i.x.APP_PAGE,page:"/e-learning/contact/page",pathname:"/e-learning/contact",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},51919:(e,t,r)=>{Promise.resolve().then(r.bind(r,49870))},43809:(e,t,r)=>{Promise.resolve().then(r.bind(r,91979))},49870:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>l});var s=r(10326),i=r(78439),n=r.n(i),a=r(49474);function l({children:e}){return s.jsx(a.Z,{children:e})}l.propTypes={children:n().node}},79967:(e,t,r)=>{"use strict";r.d(t,{Z:()=>j});var s=r(10326),i=r(78439),n=r.n(i),a=r(25707),l=r(17577),o=r(71728);let c=process.env.NEXT_PUBLIC_MAP_API;var d=r(90313),p=r(17082),u=r(43055),m=r(25609),h=r(61929),x=r(50775);function y({office:e,onClose:t,lat:r,lng:i}){let n=(0,l.useCallback)(e=>{e.stopPropagation(),t(),console.log("lat-lng",r,i)},[r,i,t]);return(0,s.jsxs)(d.Z,{sx:{width:220,overflow:"hidden",borderRadius:1.5,mt:2,ml:2,position:"relative"},children:[s.jsx(o.Z,{sx:{position:"absolute",right:4,top:4,zIndex:9},children:s.jsx(u.Z,{size:"small",onClick:n,children:s.jsx(x.Z,{icon:"carbon:close-filled",sx:{opacity:.48,color:"common.white","&:hover":{opacity:1},...!e.photo&&{color:"text.disabled"}}})})}),e.photo&&s.jsx(h.Z,{alt:"photo",src:e.photo,ratio:"4/3"}),(0,s.jsxs)(p.Z,{spacing:1,sx:{p:1.5,wordBreak:"break-all",...!e.photo&&{p:2,pr:3.5}},children:[e.country&&s.jsx(m.Z,{variant:"subtitle2",children:e.country}),e.address&&s.jsx(m.Z,{component:"p",variant:"caption",children:e.address}),e.email&&(0,s.jsxs)(p.Z,{direction:"row",alignItems:"flex-start",sx:{typography:"caption"},children:[s.jsx(x.Z,{icon:"carbon:email",width:18,sx:{mr:.5}}),e.email]}),e.phoneNumber&&(0,s.jsxs)(p.Z,{direction:"row",alignItems:"flex-start",sx:{typography:"caption"},children:[s.jsx(x.Z,{icon:"carbon:phone",width:18,sx:{mr:.5}}),e.phoneNumber]})]})]})}y.propTypes={lat:n().number,lng:n().number,office:n().shape({address:n().string,country:n().string,email:n().string,phoneNumber:n().string,photo:n().string}),onClose:n().func};let g=[{featureType:"administrative",elementType:"labels.text.fill",stylers:[{color:"#6195a0"}]},{featureType:"administrative.province",elementType:"geometry.stroke",stylers:[{visibility:"off"}]},{featureType:"landscape",elementType:"geometry",stylers:[{lightness:"0"},{saturation:"0"},{color:"#f5f5f2"},{gamma:"1"}]},{featureType:"landscape.man_made",elementType:"all",stylers:[{lightness:"-3"},{gamma:"1.00"}]},{featureType:"landscape.natural.terrain",elementType:"all",stylers:[{visibility:"off"}]},{featureType:"poi",elementType:"all",stylers:[{visibility:"off"}]},{featureType:"poi.park",elementType:"geometry.fill",stylers:[{color:"#bae5ce"},{visibility:"on"}]},{featureType:"road",elementType:"all",stylers:[{saturation:-100},{lightness:45},{visibility:"simplified"}]},{featureType:"road.highway",elementType:"all",stylers:[{visibility:"simplified"}]},{featureType:"road.highway",elementType:"geometry.fill",stylers:[{color:"#fac9a9"},{visibility:"simplified"}]},{featureType:"road.highway",elementType:"labels.text",stylers:[{color:"#4e4e4e"}]},{featureType:"road.arterial",elementType:"labels.text.fill",stylers:[{color:"#787878"}]},{featureType:"road.arterial",elementType:"labels.icon",stylers:[{visibility:"off"}]},{featureType:"transit",elementType:"all",stylers:[{visibility:"simplified"}]},{featureType:"transit.station.airport",elementType:"labels.icon",stylers:[{hue:"#0a00ff"},{saturation:"-77"},{gamma:"0.57"},{lightness:"0"}]},{featureType:"transit.station.rail",elementType:"labels.text.fill",stylers:[{color:"#43321e"}]},{featureType:"transit.station.rail",elementType:"labels.icon",stylers:[{hue:"#ff6c00"},{lightness:"4"},{gamma:"0.75"},{saturation:"-68"}]},{featureType:"water",elementType:"all",stylers:[{color:"#eaf6f8"},{visibility:"on"}]},{featureType:"water",elementType:"geometry.fill",stylers:[{color:"#c7eced"}]},{featureType:"water",elementType:"labels.text.fill",stylers:[{lightness:"-49"},{saturation:"-53"},{gamma:"0.79"}]}];var f=r(50676);function b({onOpen:e,lat:t,lng:r}){let i=(0,l.useCallback)(t=>{t.stopPropagation(),e()},[e]);return s.jsx(o.Z,{onClick:i,children:s.jsx(f.Z,{sx:{color:"error.main",cursor:"pointer"},children:s.jsx("path",{d:"M20.2,15.7L20.2,15.7c1.1-1.6,1.8-3.6,1.8-5.7c0-5.6-4.5-10-10-10S2,4.5,2,10c0,2,0.6,3.9,1.6,5.4c0,0.1,0.1,0.2,0.2,0.3 c0,0,0.1,0.1,0.1,0.2c0.2,0.3,0.4,0.6,0.7,0.9c2.6,3.1,7.4,7.6,7.4,7.6s4.8-4.5,7.4-7.5c0.2-0.3,0.5-0.6,0.7-0.9 C20.1,15.8,20.2,15.8,20.2,15.7z"})})})}function j({offices:e,sx:t,...r}){let[i,n]=(0,l.useState)(null),[d,p]=(0,l.useState)({lat:e[0].latlng[0],lng:e[0].latlng[1]}),u=(0,l.useCallback)((e,t,r)=>{p({...d,lat:e-32,lng:t}),n(r)},[d]);return s.jsx(o.Z,{sx:{height:480,overflow:"hidden",...t},...r,children:(0,s.jsxs)(a.ZP,{bootstrapURLKeys:{key:c},center:d,zoom:2,options:{styles:g,disableDefaultUI:!0},children:[e.map((e,t)=>s.jsx(b,{lat:e.latlng[0],lng:e.latlng[1],onOpen:()=>u(e.latlng[0],e.latlng[1],e)},t)),i&&s.jsx(y,{lat:i.latlng[0],lng:i.latlng[1],office:i,onClose:()=>n(null)})]})})}b.propTypes={lat:n().number,lng:n().number,onOpen:n().func},j.propTypes={offices:n().array,sx:n().object}},30001:(e,t,r)=>{"use strict";r.d(t,{Z:()=>m});var s=r(10326),i=r(71728),n=r(46374),a=r(57570),l=r(75616),o=r(25609),c=r(22115),d=r(15897),p=r(69258),u=r(61929);function m(){return s.jsx(i.Z,{sx:{py:{xs:10,md:15},overflow:"hidden",bgcolor:"primary.lighter"},children:s.jsx(l.Z,{children:(0,s.jsxs)(a.Z,{container:!0,spacing:{xs:5,md:3},alignItems:{md:"center"},justifyContent:{md:"space-between"},direction:{xs:"column-reverse",md:"row"},children:[(0,s.jsxs)(a.Z,{xs:12,md:5,sx:{textAlign:"center",color:"grey.800"},children:[s.jsx(o.Z,{variant:"h3",children:"Register Now Forget 20% Discount Every Courses"}),s.jsx(o.Z,{sx:{mt:2.5,mb:5},children:"Nam ipsum risus, rutrum vitae, vestibulum eu, molestie vel, lacus. Sed magna purus, fermentum eu"}),s.jsx(d.ZP,{fullWidth:!0,placeholder:"Enter your email",endAdornment:s.jsx(c.Z,{position:"end",children:s.jsx(n.Z,{color:"primary",size:"large",variant:"contained",children:"Register"})}),sx:{pr:.5,pl:1.5,height:56,maxWidth:560,borderRadius:1,bgcolor:"common.white",transition:e=>e.transitions.create(["box-shadow"]),[`&.${p.Z.focused}`]:{boxShadow:e=>e.customShadows.z4}}})]}),s.jsx(a.Z,{xs:12,md:5,children:s.jsx(u.Z,{alt:"newsletter",src:"/assets/illustrations/illustration_newsletter.svg",sx:{maxWidth:366,mx:"auto"}})})]})})})}},91979:(e,t,r)=>{"use strict";r.d(t,{default:()=>h});var s=r(10326);r(30001);var i=r(52188),n=r(17082),a=r(99207),l=r(57570),o=r(75616),c=r(43055),d=r(25609),p=r(35117);r(79967);var u=r(50775);function m(){return s.jsx(o.Z,{sx:{pt:{xs:5,md:5},pb:{xs:10,md:15}},children:s.jsx(l.Z,{container:!0,spacing:3,justifyContent:{md:"space-between"},children:(0,s.jsxs)(l.Z,{xs:12,md:6,lg:4,children:[s.jsx(d.Z,{variant:"h2",sx:{mb:5,textAlign:{xs:"center",md:"left"}},children:"Get In Touch"}),(0,s.jsxs)(n.Z,{spacing:3,alignItems:{xs:"center",md:"flex-start"},children:[(0,s.jsxs)(n.Z,{spacing:1,children:[(0,s.jsxs)(n.Z,{direction:"row",alignItems:"center",sx:{typography:"subtitle2"},children:[s.jsx(u.Z,{icon:"carbon:email",width:24,sx:{mr:1}})," Email"]}),s.jsx(i.Z,{color:"inherit",variant:"body2",href:"mailto:plau312465@gmail.com",children:"plau312465@gmail.com"})]}),(0,s.jsxs)(n.Z,{spacing:1,children:[(0,s.jsxs)(n.Z,{direction:"row",alignItems:"center",sx:{typography:"subtitle2"},children:[s.jsx(u.Z,{icon:"carbon:mobile",width:24,sx:{mr:1}})," Phone"]}),s.jsx(d.Z,{variant:"body2",children:"(852) 6747-3938"})]}),(0,s.jsxs)(n.Z,{spacing:1,children:[(0,s.jsxs)(n.Z,{direction:"row",alignItems:"center",sx:{typography:"subtitle2"},children:[s.jsx(u.Z,{icon:"carbon:location",width:24,sx:{mr:1}})," Address"]}),s.jsx(d.Z,{variant:"body2",children:"Suite 2104, 248 Des Voeus Road, Central, Hong Kong"})]}),s.jsx(a.Z,{sx:{borderStyle:"dashed",width:1}}),(0,s.jsxs)(n.Z,{spacing:1,alignItems:{xs:"center",md:"flex-start"},children:[s.jsx(d.Z,{variant:"overline",children:"Follow Us"}),s.jsx(n.Z,{direction:"row",children:p._I.map(e=>s.jsx(c.Z,{color:"inherit",children:s.jsx(u.Z,{icon:e.icon})},e.value))})]})]})]})})})}function h(){return s.jsx(s.Fragment,{children:s.jsx(m,{})})}r(10123),r(61929),r(63917)},37039:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>s});let s=(0,r(68570).createProxy)(String.raw`/home/dagi00/Documents/GitHub/site/src/app/e-learning/contact/layout.js#default`)},68511:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>a,metadata:()=>n});var s=r(19510);let i=(0,r(68570).createProxy)(String.raw`/home/dagi00/Documents/GitHub/site/src/sections/_elearning/view/elearning-contact-view.js#default`),n={title:"e-learning: Contact us"};function a(){return s.jsx(i,{})}}};var t=require("../../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),s=t.X(0,[7576,2666,9163,9342,4350,3405,7700,3826,4941,5707,476,7042,5117,9474,3917],()=>r(5693));module.exports=s})();