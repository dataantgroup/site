"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1421],{65908:function(t,e,n){n.d(e,{M:function(){return r}});let r="data-"+(0,n(51580).D)("framerAppearId")},64572:function(t,e,n){n.d(e,{H:function(){return r}});function r(t){return null!==t&&"object"==typeof t&&"function"==typeof t.start}},66925:function(t,e,n){n.d(e,{C:function(){return r}});let r=t=>Array.isArray(t)},5050:function(t,e,n){n.d(e,{p:function(){return r}});let r=(0,n(2265).createContext)({})},36539:function(t,e,n){n.d(e,{u:function(){return r}});let r=(0,n(2265).createContext)({strict:!1})},29791:function(t,e,n){n.d(e,{_:function(){return r}});let r=(0,n(2265).createContext)({transformPagePoint:t=>t,isStatic:!1,reducedMotion:"never"})},67797:function(t,e,n){n.d(e,{O:function(){return r}});let r=(0,n(2265).createContext)(null)},86094:function(t,e,n){n.d(e,{g:function(){return r}});let r=(0,n(2265).createContext)({})},39630:function(t,e,n){n.d(e,{Pn:function(){return u},Wi:function(){return a},frameData:function(){return s},S6:function(){return l}});var r=n(69276);class o{constructor(){this.order=[],this.scheduled=new Set}add(t){if(!this.scheduled.has(t))return this.scheduled.add(t),this.order.push(t),!0}remove(t){let e=this.order.indexOf(t);-1!==e&&(this.order.splice(e,1),this.scheduled.delete(t))}clear(){this.order.length=0,this.scheduled.clear()}}let i=["prepare","read","update","preRender","render","postRender"],{schedule:a,cancel:u,state:s,steps:l}=function(t,e){let n=!1,r=!0,a={delta:0,timestamp:0,isProcessing:!1},u=i.reduce((t,e)=>(t[e]=function(t){let e=new o,n=new o,r=0,i=!1,a=!1,u=new WeakSet,s={schedule:(t,o=!1,a=!1)=>{let s=a&&i,l=s?e:n;return o&&u.add(t),l.add(t)&&s&&i&&(r=e.order.length),t},cancel:t=>{n.remove(t),u.delete(t)},process:o=>{if(i){a=!0;return}if(i=!0,[e,n]=[n,e],n.clear(),r=e.order.length)for(let n=0;n<r;n++){let r=e.order[n];r(o),u.has(r)&&(s.schedule(r),t())}i=!1,a&&(a=!1,s.process(o))}};return s}(()=>n=!0),t),{}),s=t=>u[t].process(a),l=()=>{let o=performance.now();n=!1,a.delta=r?1e3/60:Math.max(Math.min(o-a.timestamp,40),1),a.timestamp=o,a.isProcessing=!0,i.forEach(s),a.isProcessing=!1,n&&e&&(r=!1,t(l))},f=()=>{n=!0,r=!0,a.isProcessing||t(l)};return{schedule:i.reduce((t,e)=>{let r=u[e];return t[e]=(t,e=!1,o=!1)=>(n||f(),r.schedule(t,e,o)),t},{}),cancel:t=>i.forEach(e=>u[e].cancel(t)),state:a,steps:u}}("undefined"!=typeof requestAnimationFrame?requestAnimationFrame:r.Z,!0)},96317:function(t,e,n){n.d(e,{A:function(){return o}});let r={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},o={};for(let t in r)o[t]={isEnabled:e=>r[t].some(t=>!!e[t])}},344:function(t,e,n){n.d(e,{K:function(){return o}});var r=n(96317);function o(t){for(let e in t)r.A[e]={...r.A[e],...t[e]}}},42020:function(t,e,n){n.d(e,{j:function(){return i}});var r=n(57290),o=n(26019);function i(t,{layout:e,layoutId:n}){return o.G.has(t)||t.startsWith("origin")||(e||void 0!==n)&&(!!r.P[t]||"opacity"===t)}},57290:function(t,e,n){n.d(e,{B:function(){return o},P:function(){return r}});let r={};function o(t){Object.assign(r,t)}},1421:function(t,e,n){n.d(e,{m:function(){return X}});var r,o=n(2265),i=n(29791);let a=(0,o.createContext)({});var u=n(67797),s=n(9033),l=n(36539),f=n(65908),c=n(17576),d=n(56859),p=n(83795);function m(t){return Array.isArray(t)?t.join(" "):t}var h=n(344),g=n(77282),v=n(5050),x=n(86094);let y=Symbol.for("motionComponentSymbol");var w=n(42860),b=n(42020),C=n(77599),A=n(14651);let S=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function W(t,e,n){for(let r in e)(0,C.i)(e[r])||(0,b.j)(r,n)||(t[r]=e[r])}let E=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","transformValues","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function R(t){return t.startsWith("while")||t.startsWith("drag")&&"draggable"!==t||t.startsWith("layout")||t.startsWith("onTap")||t.startsWith("onPan")||t.startsWith("onLayout")||E.has(t)}let k=t=>!R(t);try{(r=require("@emotion/is-prop-valid").default)&&(k=t=>t.startsWith("on")?!R(t):r(t))}catch(t){}var P=n(92622);let T=()=>({...S(),attrs:{}});var M=n(75969),V=n(70545),$=n(875),j=n(64572),L=n(28595),O=n(30458),H=n(32404);let D=t=>(e,n)=>{let r=(0,o.useContext)(a),i=(0,o.useContext)(u.O),s=()=>(function({scrapeMotionValuesFromProps:t,createRenderState:e,onMount:n},r,o,i){let a={latestValues:function(t,e,n,r){let o={},i=r(t,{});for(let t in i)o[t]=(0,H.b)(i[t]);let{initial:a,animate:u}=t,s=(0,p.G)(t),l=(0,p.M)(t);e&&l&&!s&&!1!==t.inherit&&(void 0===a&&(a=e.initial),void 0===u&&(u=e.animate));let f=!!n&&!1===n.initial,c=(f=f||!1===a)?u:a;return c&&"boolean"!=typeof c&&!(0,j.H)(c)&&(Array.isArray(c)?c:[c]).forEach(e=>{let n=(0,L.o)(t,e);if(!n)return;let{transitionEnd:r,transition:i,...a}=n;for(let t in a){let e=a[t];if(Array.isArray(e)){let t=f?e.length-1:0;e=e[t]}null!==e&&(o[t]=e)}for(let t in r)o[t]=r[t]}),o}(r,o,i,t),renderState:e()};return n&&(a.mount=t=>n(r,t,a)),a})(t,e,r,i);return n?s():(0,O.h)(s)};var B=n(39630);let F={useVisualState:D({scrapeMotionValuesFromProps:$.U,createRenderState:T,onMount:(t,e,{renderState:n,latestValues:r})=>{B.Wi.read(()=>{try{n.dimensions="function"==typeof e.getBBox?e.getBBox():e.getBoundingClientRect()}catch(t){n.dimensions={x:0,y:0,width:0,height:0}}}),B.Wi.render(()=>{(0,P.i)(n,r,{enableHardwareAcceleration:!1},(0,M.a)(e.tagName),t.transformTemplate),(0,V.K)(e,n)})}})},I={useVisualState:D({scrapeMotionValuesFromProps:n(11315).U,createRenderState:S})},X=function(t){function e(e,n={}){return function({preloadedFeatures:t,createVisualElement:e,useRender:n,useVisualState:r,Component:w}){t&&(0,h.K)(t);let b=(0,o.forwardRef)(function(h,y){var b;let C;let A={...(0,o.useContext)(i._),...h,layoutId:function({layoutId:t}){let e=(0,o.useContext)(v.p).id;return e&&void 0!==t?e+"-"+t:t}(h)},{isStatic:S}=A,W=function(t){let{initial:e,animate:n}=function(t,e){if((0,p.G)(t)){let{initial:e,animate:n}=t;return{initial:!1===e||(0,d.$)(e)?e:void 0,animate:(0,d.$)(n)?n:void 0}}return!1!==t.inherit?e:{}}(t,(0,o.useContext)(a));return(0,o.useMemo)(()=>({initial:e,animate:n}),[m(e),m(n)])}(h),E=r(h,S);if(!S&&g.j){W.visualElement=function(t,e,n,r){let{visualElement:c}=(0,o.useContext)(a),d=(0,o.useContext)(l.u),p=(0,o.useContext)(u.O),m=(0,o.useContext)(i._).reducedMotion,h=(0,o.useRef)();r=r||d.renderer,!h.current&&r&&(h.current=r(t,{visualState:e,parent:c,props:n,presenceContext:p,blockInitialAnimation:!!p&&!1===p.initial,reducedMotionConfig:m}));let g=h.current;(0,o.useInsertionEffect)(()=>{g&&g.update(n,p)});let v=(0,o.useRef)(!!(n[f.M]&&!window.HandoffComplete));return(0,s.L)(()=>{g&&(g.render(),v.current&&g.animationState&&g.animationState.animateChanges())}),(0,o.useEffect)(()=>{g&&(g.updateFeatures(),!v.current&&g.animationState&&g.animationState.animateChanges(),v.current&&(v.current=!1,window.HandoffComplete=!0))}),g}(w,E,A,e);let n=(0,o.useContext)(x.g),r=(0,o.useContext)(l.u).strict;W.visualElement&&(C=W.visualElement.loadFeatures(A,r,t,n))}return o.createElement(a.Provider,{value:W},C&&W.visualElement?o.createElement(C,{visualElement:W.visualElement,...A}):null,n(w,h,(b=W.visualElement,(0,o.useCallback)(t=>{t&&E.mount&&E.mount(t),b&&(t?b.mount(t):b.unmount()),y&&("function"==typeof y?y(t):(0,c.I)(y)&&(y.current=t))},[b])),E,S,W.visualElement))});return b[y]=w,b}(t(e,n))}if("undefined"==typeof Proxy)return e;let n=new Map;return new Proxy(e,{get:(t,r)=>(n.has(r)||n.set(r,e(r)),n.get(r))})}(function(t,{forwardMotionProps:e=!1},n,r){return{...(0,w.q)(t)?F:I,preloadedFeatures:n,useRender:function(t=!1){return(e,n,r,{latestValues:i},a)=>{let u=((0,w.q)(e)?function(t,e,n,r){let i=(0,o.useMemo)(()=>{let n=T();return(0,P.i)(n,e,{enableHardwareAcceleration:!1},(0,M.a)(r),t.transformTemplate),{...n.attrs,style:{...n.style}}},[e]);if(t.style){let e={};W(e,t.style,t),i.style={...e,...i.style}}return i}:function(t,e,n){let r={},i=function(t,e,n){let r=t.style||{},i={};return W(i,r,t),Object.assign(i,function({transformTemplate:t},e,n){return(0,o.useMemo)(()=>{let r=S();return(0,A.r)(r,e,{enableHardwareAcceleration:!n},t),Object.assign({},r.vars,r.style)},[e])}(t,e,n)),t.transformValues?t.transformValues(i):i}(t,e,n);return t.drag&&!1!==t.dragListener&&(r.draggable=!1,i.userSelect=i.WebkitUserSelect=i.WebkitTouchCallout="none",i.touchAction=!0===t.drag?"none":`pan-${"x"===t.drag?"y":"x"}`),void 0===t.tabIndex&&(t.onTap||t.onTapStart||t.whileTap)&&(r.tabIndex=0),r.style=i,r})(n,i,a,e),s={...function(t,e,n){let r={};for(let o in t)("values"!==o||"object"!=typeof t.values)&&(k(o)||!0===n&&R(o)||!e&&!R(o)||t.draggable&&o.startsWith("onDrag"))&&(r[o]=t[o]);return r}(n,"string"==typeof e,t),...u,ref:r},{children:l}=n,f=(0,o.useMemo)(()=>(0,C.i)(l)?l.get():l,[l]);return(0,o.createElement)(e,{...s,children:f})}}(e),createVisualElement:r,Component:t}})},51580:function(t,e,n){n.d(e,{D:function(){return r}});let r=t=>t.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()},61534:function(t,e,n){n.d(e,{Xp:function(){return a},f9:function(){return o},tm:function(){return i}});let r=t=>e=>"string"==typeof e&&e.startsWith(t),o=r("--"),i=r("var(--"),a=/var\s*\(\s*--[\w-]+(\s*,\s*(?:(?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)+)?\s*\)/g},42860:function(t,e,n){n.d(e,{q:function(){return o}});let r=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function o(t){if("string"!=typeof t||t.includes("-"));else if(r.indexOf(t)>-1||/[A-Z]/.test(t))return!0;return!1}},37755:function(t,e,n){n.d(e,{j:function(){return a}});var r=n(40783),o=n(75480);let i={...r.Rx,transform:Math.round},a={borderWidth:o.px,borderTopWidth:o.px,borderRightWidth:o.px,borderBottomWidth:o.px,borderLeftWidth:o.px,borderRadius:o.px,radius:o.px,borderTopLeftRadius:o.px,borderTopRightRadius:o.px,borderBottomRightRadius:o.px,borderBottomLeftRadius:o.px,width:o.px,maxWidth:o.px,height:o.px,maxHeight:o.px,size:o.px,top:o.px,right:o.px,bottom:o.px,left:o.px,padding:o.px,paddingTop:o.px,paddingRight:o.px,paddingBottom:o.px,paddingLeft:o.px,margin:o.px,marginTop:o.px,marginRight:o.px,marginBottom:o.px,marginLeft:o.px,rotate:o.RW,rotateX:o.RW,rotateY:o.RW,rotateZ:o.RW,scale:r.bA,scaleX:r.bA,scaleY:r.bA,scaleZ:r.bA,skew:o.RW,skewX:o.RW,skewY:o.RW,distance:o.px,translateX:o.px,translateY:o.px,translateZ:o.px,x:o.px,y:o.px,z:o.px,perspective:o.px,transformPerspective:o.px,opacity:r.Fq,originX:o.$C,originY:o.$C,originZ:o.px,zIndex:i,fillOpacity:r.Fq,strokeOpacity:r.Fq,numOctaves:i}},14651:function(t,e,n){n.d(e,{r:function(){return l}});var r=n(26019);let o={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},i=r._.length;var a=n(61534);let u=(t,e)=>e&&"number"==typeof t?e.transform(t):t;var s=n(37755);function l(t,e,n,l){let{style:f,vars:c,transform:d,transformOrigin:p}=t,m=!1,h=!1,g=!0;for(let t in e){let n=e[t];if((0,a.f9)(t)){c[t]=n;continue}let o=s.j[t],i=u(n,o);if(r.G.has(t)){if(m=!0,d[t]=i,!g)continue;n!==(o.default||0)&&(g=!1)}else t.startsWith("origin")?(h=!0,p[t]=i):f[t]=i}if(!e.transform&&(m||l?f.transform=function(t,{enableHardwareAcceleration:e=!0,allowTransformNone:n=!0},a,u){let s="";for(let e=0;e<i;e++){let n=r._[e];if(void 0!==t[n]){let e=o[n]||n;s+=`${e}(${t[n]}) `}}return e&&!t.z&&(s+="translateZ(0)"),s=s.trim(),u?s=u(t,a?"":s):n&&a&&(s="none"),s}(t.transform,n,g,l):f.transform&&(f.transform="none")),h){let{originX:t="50%",originY:e="50%",originZ:n=0}=p;f.transformOrigin=`${t} ${e} ${n}`}}},39979:function(t,e,n){n.d(e,{N:function(){return r}});function r(t,{style:e,vars:n},r,o){for(let i in Object.assign(t.style,e,o&&o.getProjectionStyles(r)),n)t.style.setProperty(i,n[i])}},11315:function(t,e,n){n.d(e,{U:function(){return i}});var r=n(42020),o=n(77599);function i(t,e){let{style:n}=t,i={};for(let a in n)((0,o.i)(n[a])||e.style&&(0,o.i)(e.style[a])||(0,r.j)(a,t))&&(i[a]=n[a]);return i}},26019:function(t,e,n){n.d(e,{G:function(){return o},_:function(){return r}});let r=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],o=new Set(r)},92622:function(t,e,n){n.d(e,{i:function(){return s}});var r=n(14651),o=n(75480);function i(t,e,n){return"string"==typeof t?t:o.px.transform(e+n*t)}let a={offset:"stroke-dashoffset",array:"stroke-dasharray"},u={offset:"strokeDashoffset",array:"strokeDasharray"};function s(t,{attrX:e,attrY:n,attrScale:s,originX:l,originY:f,pathLength:c,pathSpacing:d=1,pathOffset:p=0,...m},h,g,v){if((0,r.r)(t,m,h,v),g){t.style.viewBox&&(t.attrs.viewBox=t.style.viewBox);return}t.attrs=t.style,t.style={};let{attrs:x,style:y,dimensions:w}=t;x.transform&&(w&&(y.transform=x.transform),delete x.transform),w&&(void 0!==l||void 0!==f||y.transform)&&(y.transformOrigin=function(t,e,n){let r=i(e,t.x,t.width),o=i(n,t.y,t.height);return`${r} ${o}`}(w,void 0!==l?l:.5,void 0!==f?f:.5)),void 0!==e&&(x.x=e),void 0!==n&&(x.y=n),void 0!==s&&(x.scale=s),void 0!==c&&function(t,e,n=1,r=0,i=!0){t.pathLength=1;let s=i?a:u;t[s.offset]=o.px.transform(-r);let l=o.px.transform(e),f=o.px.transform(n);t[s.array]=`${l} ${f}`}(x,c,d,p,!1)}},82394:function(t,e,n){n.d(e,{s:function(){return r}});let r=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"])},75969:function(t,e,n){n.d(e,{a:function(){return r}});let r=t=>"string"==typeof t&&"svg"===t.toLowerCase()},70545:function(t,e,n){n.d(e,{K:function(){return a}});var r=n(51580),o=n(39979),i=n(82394);function a(t,e,n,a){for(let n in(0,o.N)(t,e,void 0,a),e.attrs)t.setAttribute(i.s.has(n)?n:(0,r.D)(n),e.attrs[n])}},875:function(t,e,n){n.d(e,{U:function(){return a}});var r=n(77599),o=n(11315),i=n(26019);function a(t,e){let n=(0,o.U)(t,e);for(let o in t)((0,r.i)(t[o])||(0,r.i)(e[o]))&&(n[-1!==i._.indexOf(o)?"attr"+o.charAt(0).toUpperCase()+o.substring(1):o]=t[o]);return n}},83795:function(t,e,n){n.d(e,{G:function(){return a},M:function(){return u}});var r=n(64572),o=n(56859),i=n(53552);function a(t){return(0,r.H)(t.animate)||i.V.some(e=>(0,o.$)(t[e]))}function u(t){return!!(a(t)||t.variants)}},56859:function(t,e,n){n.d(e,{$:function(){return r}});function r(t){return"string"==typeof t||Array.isArray(t)}},28595:function(t,e,n){n.d(e,{o:function(){return r}});function r(t,e,n,r={},o={}){return"function"==typeof e&&(e=e(void 0!==n?n:t.custom,r,o)),"string"==typeof e&&(e=t.variants&&t.variants[e]),"function"==typeof e&&(e=e(void 0!==n?n:t.custom,r,o)),e}},53552:function(t,e,n){n.d(e,{V:function(){return o},e:function(){return r}});let r=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],o=["initial",...r]},51506:function(t,e,n){n.d(e,{u:function(){return r}});let r=(t,e,n)=>Math.min(Math.max(n,t),e)},77282:function(t,e,n){n.d(e,{j:function(){return r}});let r="undefined"!=typeof document},17576:function(t,e,n){n.d(e,{I:function(){return r}});function r(t){return t&&"object"==typeof t&&Object.prototype.hasOwnProperty.call(t,"current")}},69276:function(t,e,n){n.d(e,{Z:function(){return r}});let r=t=>t},99155:function(t,e,n){n.d(e,{Y:function(){return i},p:function(){return o}});var r=n(66925);let o=t=>!!(t&&"object"==typeof t&&t.mix&&t.toValue),i=t=>(0,r.C)(t)?t[t.length-1]||0:t},30458:function(t,e,n){n.d(e,{h:function(){return o}});var r=n(2265);function o(t){let e=(0,r.useRef)(null);return null===e.current&&(e.current=t()),e.current}},9033:function(t,e,n){n.d(e,{L:function(){return o}});var r=n(2265);let o=n(77282).j?r.useLayoutEffect:r.useEffect},40783:function(t,e,n){n.d(e,{Fq:function(){return i},Rx:function(){return o},bA:function(){return a}});var r=n(51506);let o={test:t=>"number"==typeof t,parse:parseFloat,transform:t=>t},i={...o,transform:t=>(0,r.u)(0,1,t)},a={...o,default:1}},75480:function(t,e,n){n.d(e,{$C:function(){return f},RW:function(){return i},aQ:function(){return a},px:function(){return u},vh:function(){return s},vw:function(){return l}});var r=n(47292);let o=t=>({test:e=>(0,r.HD)(e)&&e.endsWith(t)&&1===e.split(" ").length,parse:parseFloat,transform:e=>`${e}${t}`}),i=o("deg"),a=o("%"),u=o("px"),s=o("vh"),l=o("vw"),f={...a,parse:t=>a.parse(t)/100,transform:t=>a.transform(100*t)}},47292:function(t,e,n){n.d(e,{HD:function(){return u},KP:function(){return o},Nw:function(){return r},dA:function(){return i},mj:function(){return a}});let r=t=>Math.round(1e5*t)/1e5,o=/(-)?([\d]*\.?[\d])+/g,i=/(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,a=/^(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;function u(t){return"string"==typeof t}},77599:function(t,e,n){n.d(e,{i:function(){return r}});let r=t=>!!(t&&t.getVelocity)},32404:function(t,e,n){n.d(e,{b:function(){return i}});var r=n(99155),o=n(77599);function i(t){let e=(0,o.i)(t)?t.get():t;return(0,r.p)(e)?e.toValue():e}}}]);