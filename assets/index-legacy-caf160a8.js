System.register(["./react-legacy-15be6997.js","./vendor-legacy-90ac8198.js"],(function(e,n){"use strict";var t,r,o,i,u,c,a,l,s,f,d,p;return{setters:[e=>{t=e.r,r=e.a,o=e.O,i=e.b,u=e.N,c=e.R,a=e.u,l=e.L,s=e.i},e=>{f=e.i,d=e.B,p=e.a}],execute:function(){var e=document.createElement("style");e.textContent=":root{--cursor-color: #fff}.App{text-align:center}.App-logo{height:40vmin;pointer-events:none}@media (prefers-reduced-motion: no-preference){.App-logo{animation:App-logo-spin infinite 20s linear}}.App-header{background-color:#282c34;min-height:100vh;display:flex;flex-direction:column;align-items:center;justify-content:center;font-size:calc(10px + 2vmin);color:#fff}.App-link{color:#61dafb}@keyframes App-logo-spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}button{font-size:calc(10px + 2vmin)}body{margin:0;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}code{font-family:source-code-pro,Menlo,Monaco,Consolas,Courier New,monospace}\n",document.head.appendChild(e);var n={exports:{}},y={},h=t,m=Symbol.for("react.element"),v=Symbol.for("react.fragment"),S=Object.prototype.hasOwnProperty,g=h.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,x={key:!0,ref:!0,__self:!0,__source:!0};function b(e,n,t){var r,o={},i=null,u=null;for(r in void 0!==t&&(i=""+t),void 0!==n.key&&(i=""+n.key),void 0!==n.ref&&(u=n.ref),n)S.call(n,r)&&!x.hasOwnProperty(r)&&(o[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===o[r]&&(o[r]=n[r]);return{$$typeof:m,type:e,key:i,ref:u,props:o,_owner:g.current}}y.Fragment=v,y.jsx=b,y.jsxs=b,n.exports=y;var j=n.exports,E={},k=r;E.createRoot=k.createRoot,E.hydrateRoot=k.hydrateRoot;var z=function(){return z=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var o in n=arguments[t])Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o]);return e},z.apply(this,arguments)};function w(e,n,r){var o=t.useRef(n);t.useEffect((function(){o.current=n})),t.useEffect((function(){var n=void 0===r?window:r,t=function(e){return o.current(e)};return null==n||n.addEventListener(e,t),function(){null==n||n.removeEventListener(e,t)}}),[e,r])}var A=function(){var e=t.useState({info:"",Android:function(){return null},BlackBerry:function(){return null},IEMobile:function(){return null},iOS:function(){return null},iPad:function(){return null},OperaMini:function(){return null},any:function(){return!1}}),n=e[0],r=e[1];return t.useEffect((function(){if("undefined"!=typeof navigator){var e=navigator.userAgent;r((function(n){return z(z({},n),{info:e,Android:function(){return e.match(/Android/i)},BlackBerry:function(){return e.match(/BlackBerry/i)},IEMobile:function(){return e.match(/IEMobile/i)},iOS:function(){return e.match(/iPhone|iPad|iPod/i)},iPad:function(){return!!(e.match(/Mac/)&&navigator.maxTouchPoints&&navigator.maxTouchPoints>2)},OperaMini:function(){return e.match(/Opera Mini/i)},any:function(){var e,t,r,o,i;return!!((null===(e=n.Android())||void 0===e?void 0:e.length)||(null===(t=n.BlackBerry())||void 0===t?void 0:t.length)||(null===(r=n.iOS())||void 0===r?void 0:r.length)||n.iPad()||(null===(o=n.OperaMini())||void 0===o?void 0:o.length)||(null===(i=n.IEMobile())||void 0===i?void 0:i.length))}})}))}}),[]),n};function O(e,n){for(var t=[],r=2;r<arguments.length;r++)t[r-2]=arguments[r];if("function"!=typeof n)throw new TypeError("callback must be a function");for(var o=Object(e),i=o.length>>>0,u=t[2],c=0;c<i;c++){var a=o[c];if(n.call(u,a,c,o))return a}}function C(e){var n=e.clickables,r=void 0===n?["a",'input[type="text"]','input[type="email"]','input[type="number"]','input[type="submit"]','input[type="image"]',"label[for]","select","textarea","button",".link"]:n,o=e.children,i=e.color,u=void 0===i?"220, 90, 90":i,c=e.innerScale,a=void 0===c?.6:c,l=e.innerSize,s=void 0===l?8:l,f=e.innerStyle,d=e.outerAlpha,p=void 0===d?.4:d,y=e.outerScale,h=void 0===y?6:y,m=e.outerSize,v=void 0===m?8:m,S=e.outerStyle,g=e.showSystemCursor,x=void 0!==g&&g,b=e.trailingSpeed,E=void 0===b?8:b,k=t.useMemo((function(){return{children:o,color:u,innerScale:a,innerSize:s,innerStyle:f,outerAlpha:p,outerScale:h,outerSize:v,outerStyle:S}}),[o,u,a,s,f,p,h,v,S]),A=t.useRef(null),C=t.useRef(null),R=t.useRef(null),L=t.useRef(null),_=t.useState({x:0,y:0}),I=_[0],M=_[1],P=t.useState(!1),B=P[0],F=P[1],N=t.useState(k),T=N[0],q=N[1],U=t.useState(!1),D=U[0],H=U[1],W=t.useState(!1),Y=W[0],$=W[1],V=t.useRef(0),X=t.useRef(0),G=t.useCallback((function(e){var n=e.clientX,t=e.clientY;M({x:n,y:t}),null!==C.current&&(C.current.style.top="".concat(t,"px"),C.current.style.left="".concat(n,"px")),V.current=n,X.current=t}),[]),J=t.useCallback((function(e){void 0!==L.current&&(I.x+=(V.current-I.x)/E,I.y+=(X.current-I.y)/E,null!==A.current&&(A.current.style.top="".concat(I.y,"px"),A.current.style.left="".concat(I.x,"px"))),L.current=e,R.current=requestAnimationFrame(J)}),[R]);t.useEffect((function(){return R.current=requestAnimationFrame(J),function(){null!==R.current&&cancelAnimationFrame(R.current)}}),[J]);var K=function(e,n){return"".concat(parseInt(String(e*n)),"px")},Q=t.useCallback((function(e,n,t){e&&(e.style.height=K(n,t),e.style.width=K(n,t))}),[]),Z=t.useCallback((function(){return H(!0)}),[]),ee=t.useCallback((function(){return H(!1)}),[]),ne=t.useCallback((function(){return F(!0)}),[]),te=t.useCallback((function(){return F(!1)}),[]);w("mousemove",G),w("mousedown",Z),w("mouseup",ee),w("mouseover",ne),w("mouseout",te),t.useEffect((function(){D?(Q(C.current,T.innerSize,T.innerScale),Q(A.current,T.outerSize,T.outerScale)):(Q(C.current,T.innerSize,1),Q(A.current,T.outerSize,1))}),[T.innerSize,T.innerScale,T.outerSize,T.outerScale,Q,D]),t.useEffect((function(){Y&&(Q(C.current,T.innerSize,1.2*T.innerScale),Q(A.current,T.outerSize,1.4*T.outerScale))}),[T.innerSize,T.innerScale,T.outerSize,T.outerScale,Q,Y]),t.useEffect((function(){null!=C.current&&null!=A.current&&(B?(C.current.style.opacity="1",A.current.style.opacity="1"):(C.current.style.opacity="0",A.current.style.opacity="0"))}),[B]),t.useEffect((function(){var e=document.querySelectorAll(r.map((function(e){return"object"==typeof e&&(null==e?void 0:e.target)?e.target:null!=e?e:""})).join(","));return e.forEach((function(e){x||(e.style.cursor="none");var n="object"==typeof r?O(r,(function(n){return"object"==typeof n&&e.matches(n.target)})):{},t=z(z({},k),n);e.addEventListener("mouseover",(function(){H(!0),q(t)})),e.addEventListener("click",(function(){H(!0),$(!1)})),e.addEventListener("mousedown",(function(){$(!0)})),e.addEventListener("mouseup",(function(){H(!0)})),e.addEventListener("mouseout",(function(){H(!1),$(!1),q(k)}))})),function(){e.forEach((function(e){var n="object"==typeof r?O(r,(function(n){return"object"==typeof n&&e.matches(n.target)})):{},t=z(z({},k),n);e.removeEventListener("mouseover",(function(){H(!0),q(t)})),e.removeEventListener("click",(function(){H(!0),$(!1)})),e.removeEventListener("mousedown",(function(){$(!0)})),e.removeEventListener("mouseup",(function(){H(!0)})),e.removeEventListener("mouseout",(function(){H(!1),$(!1),q(k)}))}))}}),[D,r,x,k]),t.useEffect((function(){"object"!=typeof window||x||(document.body.style.cursor="none")}),[x]);var re={zIndex:999,display:"flex",justifyContent:"center",alignItems:"center",position:"fixed",borderRadius:"50%",pointerEvents:"none",transform:"translate(-50%, -50%)",transition:"opacity 0.15s ease-in-out, height 0.2s ease-in-out, width 0.2s ease-in-out"},oe={cursorInner:z(z({width:T.children?"auto":T.innerSize,height:T.children?"auto":T.innerSize,backgroundColor:T.children?"transparent":"rgba(".concat(T.color,", 1)")},re),T.innerStyle&&T.innerStyle),cursorOuter:z(z({width:T.outerSize,height:T.outerSize,backgroundColor:"rgba(".concat(T.color,", ").concat(T.outerAlpha,")")},re),T.outerStyle&&T.outerStyle)};return j.jsxs(j.Fragment,{children:[j.jsx("div",{ref:A,style:oe.cursorOuter}),j.jsx("div",z({ref:C,style:oe.cursorInner},{children:j.jsx("div",z({style:{opacity:T.children?1:0,transition:"opacity 0.3s ease-in-out"}},{children:T.children}))}))]})}function R(e){var n=e.children,t=e.clickables,r=e.color,o=e.innerScale,i=e.innerSize,u=e.innerStyle,c=e.outerAlpha,a=e.outerScale,l=e.outerSize,s=e.outerStyle,f=e.showSystemCursor,d=e.trailingSpeed,p=A();return"undefined"!=typeof navigator&&p.any()?j.jsx(j.Fragment,{}):j.jsx(C,z({clickables:t,color:r,innerScale:o,innerSize:i,innerStyle:u,outerAlpha:c,outerScale:a,outerSize:l,outerStyle:s,showSystemCursor:f,trailingSpeed:d},{children:n}))}function L(e){return j.jsx(o,{})}const _=i([{path:"",element:j.jsx(M,{})},{element:j.jsx(L,{}),path:"dashboard",children:[{path:"overview",element:""},{path:"order",element:""},{path:"category",element:""},{path:"product",element:""},{path:"user",element:""},{path:"setting",element:""}]},{path:"about",element:j.jsx(P,{})},{path:"*",element:j.jsx(u,{to:""})}]);function I(){return j.jsxs(j.Fragment,{children:[j.jsx(c,{router:_}),j.jsx(R,{innerSize:8,outerSize:35,innerScale:1,outerScale:2,outerAlpha:0,showSystemCursor:!0,hasBlendMode:!0,outerStyle:{border:"3px solid var(--cursor-color)"},innerStyle:{backgroundColor:"var(--cursor-color)"}})]})}function M(){const{t:e}=a();return j.jsxs(j.Fragment,{children:[j.jsx("main",{children:j.jsx("h2",{children:e("title")})}),j.jsx("nav",{children:j.jsx(l,{to:"/about",children:"About"})})]})}function P(){return j.jsxs(j.Fragment,{children:[j.jsxs("main",{children:[j.jsx("h2",{children:"Who are we?"}),j.jsx("p",{children:"That feels like an existential question, dont you think?"})]}),j.jsx("nav",{children:j.jsx(l,{to:"/",children:"Home"})})]})}f.use(d).use(p).use(s).init({debug:!1,react:{useSuspense:!0},lng:"vi",fallbackLng:"vi",supportedLngs:["vi","en"],interpolation:{escapeValue:!1},defaultNS:"translation",ns:["translation"],backend:{loadPath:"/locales/{{lng}}/{{ns}}.json"}}),E.createRoot(document.getElementById("root")).render(j.jsx(I,{}))}}}));
