import{r as b,a as De,c as se,g as fe,O as we,b as Ye,N as be,R as Oe,u as Le,L as pe,i as Te,I as je}from"./react-f093a1c7.js";import{i as ye,B as ze,a as Ee}from"./vendor-8522aeb5.js";function Qe(){import.meta.url,import("_").catch(()=>1);async function*c(){}}(function(){const $=document.createElement("link").relList;if($&&$.supports&&$.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))u(s);new MutationObserver(s=>{for(const l of s)if(l.type==="childList")for(const f of l.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&u(f)}).observe(document,{childList:!0,subtree:!0});function p(s){const l={};return s.integrity&&(l.integrity=s.integrity),s.referrerPolicy&&(l.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?l.credentials="include":s.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function u(s){if(s.ep)return;s.ep=!0;const l=p(s);fetch(s.href,l)}})();var ge={exports:{}},ue={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ke=b,Ae=Symbol.for("react.element"),Ce=Symbol.for("react.fragment"),He=Object.prototype.hasOwnProperty,Ie=ke.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Re={key:!0,ref:!0,__self:!0,__source:!0};function Se(c,$,p){var u,s={},l=null,f=null;p!==void 0&&(l=""+p),$.key!==void 0&&(l=""+$.key),$.ref!==void 0&&(f=$.ref);for(u in $)He.call($,u)&&!Re.hasOwnProperty(u)&&(s[u]=$[u]);if(c&&c.defaultProps)for(u in $=c.defaultProps,$)s[u]===void 0&&(s[u]=$[u]);return{$$typeof:Ae,type:c,key:l,ref:f,props:s,_owner:Ie.current}}ue.Fragment=Ce;ue.jsx=Se;ue.jsxs=Se;ge.exports=ue;var w=ge.exports,le={},me=De;le.createRoot=me.createRoot,le.hydrateRoot=me.hydrateRoot;var Me={exports:{}};(function(c,$){(function(p,u){c.exports=u()})(se,function(){var p=1e3,u=6e4,s=36e5,l="millisecond",f="second",_="minute",A="hour",g="day",U="week",C="month",Y="quarter",T="year",j="date",i="Invalid Date",h=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,S=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,v={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(a){var n=["th","st","nd","rd"],t=a%100;return"["+a+(n[(t-20)%10]||n[t]||n[0])+"]"}},z=function(a,n,t){var r=String(a);return!r||r.length>=n?a:""+Array(n+1-r.length).join(t)+a},P={s:z,z:function(a){var n=-a.utcOffset(),t=Math.abs(n),r=Math.floor(t/60),e=t%60;return(n<=0?"+":"-")+z(r,2,"0")+":"+z(e,2,"0")},m:function a(n,t){if(n.date()<t.date())return-a(t,n);var r=12*(t.year()-n.year())+(t.month()-n.month()),e=n.clone().add(r,C),o=t-e<0,d=n.clone().add(r+(o?-1:1),C);return+(-(r+(t-e)/(o?e-d:d-e))||0)},a:function(a){return a<0?Math.ceil(a)||0:Math.floor(a)},p:function(a){return{M:C,y:T,w:U,d:g,D:j,h:A,m:_,s:f,ms:l,Q:Y}[a]||String(a||"").toLowerCase().replace(/s$/,"")},u:function(a){return a===void 0}},k="en",E={};E[k]=v;var O="$isDayjsObject",L=function(a){return a instanceof I||!(!a||!a[O])},H=function a(n,t,r){var e;if(!n)return k;if(typeof n=="string"){var o=n.toLowerCase();E[o]&&(e=o),t&&(E[o]=t,e=o);var d=n.split("-");if(!e&&d.length>1)return a(d[0])}else{var M=n.name;E[M]=n,e=M}return!r&&e&&(k=e),e||!r&&k},y=function(a,n){if(L(a))return a.clone();var t=typeof n=="object"?n:{};return t.date=a,t.args=arguments,new I(t)},m=P;m.l=H,m.i=L,m.w=function(a,n){return y(a,{locale:n.$L,utc:n.$u,x:n.$x,$offset:n.$offset})};var I=function(){function a(t){this.$L=H(t.locale,null,!0),this.parse(t),this.$x=this.$x||t.x||{},this[O]=!0}var n=a.prototype;return n.parse=function(t){this.$d=function(r){var e=r.date,o=r.utc;if(e===null)return new Date(NaN);if(m.u(e))return new Date;if(e instanceof Date)return new Date(e);if(typeof e=="string"&&!/Z$/i.test(e)){var d=e.match(h);if(d){var M=d[2]-1||0,x=(d[7]||"0").substring(0,3);return o?new Date(Date.UTC(d[1],M,d[3]||1,d[4]||0,d[5]||0,d[6]||0,x)):new Date(d[1],M,d[3]||1,d[4]||0,d[5]||0,d[6]||0,x)}}return new Date(e)}(t),this.init()},n.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},n.$utils=function(){return m},n.isValid=function(){return this.$d.toString()!==i},n.isSame=function(t,r){var e=y(t);return this.startOf(r)<=e&&e<=this.endOf(r)},n.isAfter=function(t,r){return y(t)<this.startOf(r)},n.isBefore=function(t,r){return this.endOf(r)<y(t)},n.$g=function(t,r,e){return m.u(t)?this[r]:this.set(e,t)},n.unix=function(){return Math.floor(this.valueOf()/1e3)},n.valueOf=function(){return this.$d.getTime()},n.startOf=function(t,r){var e=this,o=!!m.u(r)||r,d=m.p(t),M=function(W,Z){var F=m.w(e.$u?Date.UTC(e.$y,Z,W):new Date(e.$y,Z,W),e);return o?F:F.endOf(g)},x=function(W,Z){return m.w(e.toDate()[W].apply(e.toDate("s"),(o?[0,0,0,0]:[23,59,59,999]).slice(Z)),e)},R=this.$W,N=this.$M,B=this.$D,G="set"+(this.$u?"UTC":"");switch(d){case T:return o?M(1,0):M(31,11);case C:return o?M(1,N):M(0,N+1);case U:var J=this.$locale().weekStart||0,K=(R<J?R+7:R)-J;return M(o?B-K:B+(6-K),N);case g:case j:return x(G+"Hours",0);case A:return x(G+"Minutes",1);case _:return x(G+"Seconds",2);case f:return x(G+"Milliseconds",3);default:return this.clone()}},n.endOf=function(t){return this.startOf(t,!1)},n.$set=function(t,r){var e,o=m.p(t),d="set"+(this.$u?"UTC":""),M=(e={},e[g]=d+"Date",e[j]=d+"Date",e[C]=d+"Month",e[T]=d+"FullYear",e[A]=d+"Hours",e[_]=d+"Minutes",e[f]=d+"Seconds",e[l]=d+"Milliseconds",e)[o],x=o===g?this.$D+(r-this.$W):r;if(o===C||o===T){var R=this.clone().set(j,1);R.$d[M](x),R.init(),this.$d=R.set(j,Math.min(this.$D,R.daysInMonth())).$d}else M&&this.$d[M](x);return this.init(),this},n.set=function(t,r){return this.clone().$set(t,r)},n.get=function(t){return this[m.p(t)]()},n.add=function(t,r){var e,o=this;t=Number(t);var d=m.p(r),M=function(N){var B=y(o);return m.w(B.date(B.date()+Math.round(N*t)),o)};if(d===C)return this.set(C,this.$M+t);if(d===T)return this.set(T,this.$y+t);if(d===g)return M(1);if(d===U)return M(7);var x=(e={},e[_]=u,e[A]=s,e[f]=p,e)[d]||1,R=this.$d.getTime()+t*x;return m.w(R,this)},n.subtract=function(t,r){return this.add(-1*t,r)},n.format=function(t){var r=this,e=this.$locale();if(!this.isValid())return e.invalidDate||i;var o=t||"YYYY-MM-DDTHH:mm:ssZ",d=m.z(this),M=this.$H,x=this.$m,R=this.$M,N=e.weekdays,B=e.months,G=e.meridiem,J=function(Z,F,Q,ee){return Z&&(Z[F]||Z(r,o))||Q[F].slice(0,ee)},K=function(Z){return m.s(M%12||12,Z,"0")},W=G||function(Z,F,Q){var ee=Z<12?"AM":"PM";return Q?ee.toLowerCase():ee};return o.replace(S,function(Z,F){return F||function(Q){switch(Q){case"YY":return String(r.$y).slice(-2);case"YYYY":return m.s(r.$y,4,"0");case"M":return R+1;case"MM":return m.s(R+1,2,"0");case"MMM":return J(e.monthsShort,R,B,3);case"MMMM":return J(B,R);case"D":return r.$D;case"DD":return m.s(r.$D,2,"0");case"d":return String(r.$W);case"dd":return J(e.weekdaysMin,r.$W,N,2);case"ddd":return J(e.weekdaysShort,r.$W,N,3);case"dddd":return N[r.$W];case"H":return String(M);case"HH":return m.s(M,2,"0");case"h":return K(1);case"hh":return K(2);case"a":return W(M,x,!0);case"A":return W(M,x,!1);case"m":return String(x);case"mm":return m.s(x,2,"0");case"s":return String(r.$s);case"ss":return m.s(r.$s,2,"0");case"SSS":return m.s(r.$ms,3,"0");case"Z":return d}return null}(Z)||d.replace(":","")})},n.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},n.diff=function(t,r,e){var o,d=this,M=m.p(r),x=y(t),R=(x.utcOffset()-this.utcOffset())*u,N=this-x,B=function(){return m.m(d,x)};switch(M){case T:o=B()/12;break;case C:o=B();break;case Y:o=B()/3;break;case U:o=(N-R)/6048e5;break;case g:o=(N-R)/864e5;break;case A:o=N/s;break;case _:o=N/u;break;case f:o=N/p;break;default:o=N}return e?o:m.a(o)},n.daysInMonth=function(){return this.endOf(C).$D},n.$locale=function(){return E[this.$L]},n.locale=function(t,r){if(!t)return this.$L;var e=this.clone(),o=H(t,r,!0);return o&&(e.$L=o),e},n.clone=function(){return m.w(this.$d,this)},n.toDate=function(){return new Date(this.valueOf())},n.toJSON=function(){return this.isValid()?this.toISOString():null},n.toISOString=function(){return this.$d.toISOString()},n.toString=function(){return this.$d.toUTCString()},a}(),V=I.prototype;return y.prototype=V,[["$ms",l],["$s",f],["$m",_],["$H",A],["$W",g],["$M",C],["$y",T],["$D",j]].forEach(function(a){V[a[1]]=function(n){return this.$g(n,a[0],a[1])}}),y.extend=function(a,n){return a.$i||(a(n,I,y),a.$i=!0),y},y.locale=H,y.isDayjs=L,y.unix=function(a){return y(1e3*a)},y.en=E[k],y.Ls=E,y.p={},y})})(Me);var $e=Me.exports;const de=fe($e);var xe={exports:{}};(function(c,$){(function(p,u){c.exports=u()})(se,function(){var p={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},u=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,s=/\d\d/,l=/\d\d?/,f=/\d*[^-_:/,()\s\d]+/,_={},A=function(i){return(i=+i)+(i>68?1900:2e3)},g=function(i){return function(h){this[i]=+h}},U=[/[+-]\d\d:?(\d\d)?|Z/,function(i){(this.zone||(this.zone={})).offset=function(h){if(!h||h==="Z")return 0;var S=h.match(/([+-]|\d\d)/g),v=60*S[1]+(+S[2]||0);return v===0?0:S[0]==="+"?-v:v}(i)}],C=function(i){var h=_[i];return h&&(h.indexOf?h:h.s.concat(h.f))},Y=function(i,h){var S,v=_.meridiem;if(v){for(var z=1;z<=24;z+=1)if(i.indexOf(v(z,0,h))>-1){S=z>12;break}}else S=i===(h?"pm":"PM");return S},T={A:[f,function(i){this.afternoon=Y(i,!1)}],a:[f,function(i){this.afternoon=Y(i,!0)}],S:[/\d/,function(i){this.milliseconds=100*+i}],SS:[s,function(i){this.milliseconds=10*+i}],SSS:[/\d{3}/,function(i){this.milliseconds=+i}],s:[l,g("seconds")],ss:[l,g("seconds")],m:[l,g("minutes")],mm:[l,g("minutes")],H:[l,g("hours")],h:[l,g("hours")],HH:[l,g("hours")],hh:[l,g("hours")],D:[l,g("day")],DD:[s,g("day")],Do:[f,function(i){var h=_.ordinal,S=i.match(/\d+/);if(this.day=S[0],h)for(var v=1;v<=31;v+=1)h(v).replace(/\[|\]/g,"")===i&&(this.day=v)}],M:[l,g("month")],MM:[s,g("month")],MMM:[f,function(i){var h=C("months"),S=(C("monthsShort")||h.map(function(v){return v.slice(0,3)})).indexOf(i)+1;if(S<1)throw new Error;this.month=S%12||S}],MMMM:[f,function(i){var h=C("months").indexOf(i)+1;if(h<1)throw new Error;this.month=h%12||h}],Y:[/[+-]?\d+/,g("year")],YY:[s,function(i){this.year=A(i)}],YYYY:[/\d{4}/,g("year")],Z:U,ZZ:U};function j(i){var h,S;h=i,S=_&&_.formats;for(var v=(i=h.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,function(H,y,m){var I=m&&m.toUpperCase();return y||S[m]||p[m]||S[I].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,function(V,a,n){return a||n.slice(1)})})).match(u),z=v.length,P=0;P<z;P+=1){var k=v[P],E=T[k],O=E&&E[0],L=E&&E[1];v[P]=L?{regex:O,parser:L}:k.replace(/^\[|\]$/g,"")}return function(H){for(var y={},m=0,I=0;m<z;m+=1){var V=v[m];if(typeof V=="string")I+=V.length;else{var a=V.regex,n=V.parser,t=H.slice(I),r=a.exec(t)[0];n.call(y,r),H=H.replace(r,"")}}return function(e){var o=e.afternoon;if(o!==void 0){var d=e.hours;o?d<12&&(e.hours+=12):d===12&&(e.hours=0),delete e.afternoon}}(y),y}}return function(i,h,S){S.p.customParseFormat=!0,i&&i.parseTwoDigitYear&&(A=i.parseTwoDigitYear);var v=h.prototype,z=v.parse;v.parse=function(P){var k=P.date,E=P.utc,O=P.args;this.$u=E;var L=O[1];if(typeof L=="string"){var H=O[2]===!0,y=O[3]===!0,m=H||y,I=O[2];y&&(I=O[2]),_=this.$locale(),!H&&I&&(_=S.Ls[I]),this.$d=function(t,r,e){try{if(["x","X"].indexOf(r)>-1)return new Date((r==="X"?1e3:1)*t);var o=j(r)(t),d=o.year,M=o.month,x=o.day,R=o.hours,N=o.minutes,B=o.seconds,G=o.milliseconds,J=o.zone,K=new Date,W=x||(d||M?1:K.getDate()),Z=d||K.getFullYear(),F=0;d&&!M||(F=M>0?M-1:K.getMonth());var Q=R||0,ee=N||0,ne=B||0,re=G||0;return J?new Date(Date.UTC(Z,F,W,Q,ee,ne,re+60*J.offset*1e3)):e?new Date(Date.UTC(Z,F,W,Q,ee,ne,re)):new Date(Z,F,W,Q,ee,ne,re)}catch(ae){return new Date("")}}(k,L,E),this.init(),I&&I!==!0&&(this.$L=this.locale(I).$L),m&&k!=this.format(L)&&(this.$d=new Date("")),_={}}else if(L instanceof Array)for(var V=L.length,a=1;a<=V;a+=1){O[1]=L[a-1];var n=S.apply(this,O);if(n.isValid()){this.$d=n.$d,this.$L=n.$L,this.init();break}a===V&&(this.$d=new Date(""))}else z.call(this,P)}}})})(xe);var Pe=xe.exports;const Fe=fe(Pe);var q=function(){return q=Object.assign||function($){for(var p,u=1,s=arguments.length;u<s;u++){p=arguments[u];for(var l in p)Object.prototype.hasOwnProperty.call(p,l)&&($[l]=p[l])}return $},q.apply(this,arguments)};function oe(c,$,p){var u=b.useRef($);b.useEffect(function(){u.current=$}),b.useEffect(function(){var s=p===void 0?window:p,l=function(f){return u.current(f)};return s==null||s.addEventListener(c,l),function(){s==null||s.removeEventListener(c,l)}},[c,p])}var Ne=function(){var c=b.useState({info:"",Android:function(){return null},BlackBerry:function(){return null},IEMobile:function(){return null},iOS:function(){return null},iPad:function(){return null},OperaMini:function(){return null},any:function(){return!1}}),$=c[0],p=c[1];return b.useEffect(function(){if(typeof navigator<"u"){var u=navigator.userAgent;p(function(s){return q(q({},s),{info:u,Android:function(){return u.match(/Android/i)},BlackBerry:function(){return u.match(/BlackBerry/i)},IEMobile:function(){return u.match(/IEMobile/i)},iOS:function(){return u.match(/iPhone|iPad|iPod/i)},iPad:function(){return!!(u.match(/Mac/)&&navigator.maxTouchPoints&&navigator.maxTouchPoints>2)},OperaMini:function(){return u.match(/Opera Mini/i)},any:function(){var l,f,_,A,g;return!!(!((l=s.Android())===null||l===void 0)&&l.length||!((f=s.BlackBerry())===null||f===void 0)&&f.length||!((_=s.iOS())===null||_===void 0)&&_.length||s.iPad()||!((A=s.OperaMini())===null||A===void 0)&&A.length||!((g=s.IEMobile())===null||g===void 0)&&g.length)}})})}},[]),$};function ve(c,$){for(var p=[],u=2;u<arguments.length;u++)p[u-2]=arguments[u];if(typeof $!="function")throw new TypeError("callback must be a function");for(var s=Object(c),l=s.length>>>0,f=p[2],_=0;_<l;_++){var A=s[_];if($.call(f,A,_,s))return A}}function Be(c){var $=c.clickables,p=$===void 0?["a",'input[type="text"]','input[type="email"]','input[type="number"]','input[type="submit"]','input[type="image"]',"label[for]","select","textarea","button",".link"]:$,u=c.children,s=c.color,l=s===void 0?"220, 90, 90":s,f=c.innerScale,_=f===void 0?.6:f,A=c.innerSize,g=A===void 0?8:A,U=c.innerStyle,C=c.outerAlpha,Y=C===void 0?.4:C,T=c.outerScale,j=T===void 0?6:T,i=c.outerSize,h=i===void 0?8:i,S=c.outerStyle,v=c.showSystemCursor,z=v===void 0?!1:v,P=c.trailingSpeed,k=P===void 0?8:P,E=b.useMemo(function(){return{children:u,color:l,innerScale:_,innerSize:g,innerStyle:U,outerAlpha:Y,outerScale:j,outerSize:h,outerStyle:S}},[u,l,_,g,U,Y,j,h,S]),O=b.useRef(null),L=b.useRef(null),H=b.useRef(null),y=b.useRef(null),m=b.useState({x:0,y:0}),I=m[0],V=m[1],a=b.useState(!1),n=a[0],t=a[1],r=b.useState(E),e=r[0],o=r[1],d=b.useState(!1),M=d[0],x=d[1],R=b.useState(!1),N=R[0],B=R[1],G=b.useRef(0),J=b.useRef(0),K=b.useCallback(function(X){var D=X.clientX,te=X.clientY;V({x:D,y:te}),L.current!==null&&(L.current.style.top="".concat(te,"px"),L.current.style.left="".concat(D,"px")),G.current=D,J.current=te},[]),W=b.useCallback(function(X){y.current!==void 0&&(I.x+=(G.current-I.x)/k,I.y+=(J.current-I.y)/k,O.current!==null&&(O.current.style.top="".concat(I.y,"px"),O.current.style.left="".concat(I.x,"px"))),y.current=X,H.current=requestAnimationFrame(W)},[H]);b.useEffect(function(){return H.current=requestAnimationFrame(W),function(){H.current!==null&&cancelAnimationFrame(H.current)}},[W]);var Z=function(X,D){return"".concat(parseInt(String(X*D)),"px")},F=b.useCallback(function(X,D,te){X&&(X.style.height=Z(D,te),X.style.width=Z(D,te))},[]),Q=b.useCallback(function(){return x(!0)},[]),ee=b.useCallback(function(){return x(!1)},[]),ne=b.useCallback(function(){return t(!0)},[]),re=b.useCallback(function(){return t(!1)},[]);oe("mousemove",K),oe("mousedown",Q),oe("mouseup",ee),oe("mouseover",ne),oe("mouseout",re),b.useEffect(function(){M?(F(L.current,e.innerSize,e.innerScale),F(O.current,e.outerSize,e.outerScale)):(F(L.current,e.innerSize,1),F(O.current,e.outerSize,1))},[e.innerSize,e.innerScale,e.outerSize,e.outerScale,F,M]),b.useEffect(function(){N&&(F(L.current,e.innerSize,e.innerScale*1.2),F(O.current,e.outerSize,e.outerScale*1.4))},[e.innerSize,e.innerScale,e.outerSize,e.outerScale,F,N]),b.useEffect(function(){L.current==null||O.current==null||(n?(L.current.style.opacity="1",O.current.style.opacity="1"):(L.current.style.opacity="0",O.current.style.opacity="0"))},[n]),b.useEffect(function(){var X=document.querySelectorAll(p.map(function(D){return typeof D=="object"&&(D!=null&&D.target)?D.target:D!=null?D:""}).join(","));return X.forEach(function(D){z||(D.style.cursor="none");var te=typeof p=="object"?ve(p,function(ie){return typeof ie=="object"&&D.matches(ie.target)}):{},ce=q(q({},E),te);D.addEventListener("mouseover",function(){x(!0),o(ce)}),D.addEventListener("click",function(){x(!0),B(!1)}),D.addEventListener("mousedown",function(){B(!0)}),D.addEventListener("mouseup",function(){x(!0)}),D.addEventListener("mouseout",function(){x(!1),B(!1),o(E)})}),function(){X.forEach(function(D){var te=typeof p=="object"?ve(p,function(ie){return typeof ie=="object"&&D.matches(ie.target)}):{},ce=q(q({},E),te);D.removeEventListener("mouseover",function(){x(!0),o(ce)}),D.removeEventListener("click",function(){x(!0),B(!1)}),D.removeEventListener("mousedown",function(){B(!0)}),D.removeEventListener("mouseup",function(){x(!0)}),D.removeEventListener("mouseout",function(){x(!1),B(!1),o(E)})})}},[M,p,z,E]),b.useEffect(function(){typeof window=="object"&&!z&&(document.body.style.cursor="none")},[z]);var ae={zIndex:999,display:"flex",justifyContent:"center",alignItems:"center",position:"fixed",borderRadius:"50%",pointerEvents:"none",transform:"translate(-50%, -50%)",transition:"opacity 0.15s ease-in-out, height 0.2s ease-in-out, width 0.2s ease-in-out"},he={cursorInner:q(q({width:e.children?"auto":e.innerSize,height:e.children?"auto":e.innerSize,backgroundColor:e.children?"transparent":"rgba(".concat(e.color,", 1)")},ae),e.innerStyle&&e.innerStyle),cursorOuter:q(q({width:e.outerSize,height:e.outerSize,backgroundColor:"rgba(".concat(e.color,", ").concat(e.outerAlpha,")")},ae),e.outerStyle&&e.outerStyle)};return w.jsxs(w.Fragment,{children:[w.jsx("div",{ref:O,style:he.cursorOuter}),w.jsx("div",q({ref:L,style:he.cursorInner},{children:w.jsx("div",q({style:{opacity:e.children?1:0,transition:"opacity 0.3s ease-in-out"}},{children:e.children}))}))]})}function Ze(c){var $=c.children,p=c.clickables,u=c.color,s=c.innerScale,l=c.innerSize,f=c.innerStyle,_=c.outerAlpha,A=c.outerScale,g=c.outerSize,U=c.outerStyle,C=c.showSystemCursor,Y=c.trailingSpeed,T=Ne();return typeof navigator<"u"&&T.any()?w.jsx(w.Fragment,{}):w.jsx(Be,q({clickables:p,color:u,innerScale:s,innerSize:l,innerStyle:f,outerAlpha:_,outerScale:A,outerSize:g,outerStyle:U,showSystemCursor:C,trailingSpeed:Y},{children:$}))}var _e={exports:{}};(function(c,$){(function(p,u){c.exports=u()})(se,function(){var p={year:0,month:1,day:2,hour:3,minute:4,second:5},u={};return function(s,l,f){var _,A=function(Y,T,j){j===void 0&&(j={});var i=new Date(Y),h=function(S,v){v===void 0&&(v={});var z=v.timeZoneName||"short",P=S+"|"+z,k=u[P];return k||(k=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:S,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",timeZoneName:z}),u[P]=k),k}(T,j);return h.formatToParts(i)},g=function(Y,T){for(var j=A(Y,T),i=[],h=0;h<j.length;h+=1){var S=j[h],v=S.type,z=S.value,P=p[v];P>=0&&(i[P]=parseInt(z,10))}var k=i[3],E=k===24?0:k,O=i[0]+"-"+i[1]+"-"+i[2]+" "+E+":"+i[4]+":"+i[5]+":000",L=+Y;return(f.utc(O).valueOf()-(L-=L%1e3))/6e4},U=l.prototype;U.tz=function(Y,T){Y===void 0&&(Y=_);var j=this.utcOffset(),i=this.toDate(),h=i.toLocaleString("en-US",{timeZone:Y}),S=Math.round((i-new Date(h))/1e3/60),v=f(h,{locale:this.$L}).$set("millisecond",this.$ms).utcOffset(15*-Math.round(i.getTimezoneOffset()/15)-S,!0);if(T){var z=v.utcOffset();v=v.add(j-z,"minute")}return v.$x.$timezone=Y,v},U.offsetName=function(Y){var T=this.$x.$timezone||f.tz.guess(),j=A(this.valueOf(),T,{timeZoneName:Y}).find(function(i){return i.type.toLowerCase()==="timezonename"});return j&&j.value};var C=U.startOf;U.startOf=function(Y,T){if(!this.$x||!this.$x.$timezone)return C.call(this,Y,T);var j=f(this.format("YYYY-MM-DD HH:mm:ss:SSS"),{locale:this.$L});return C.call(j,Y,T).tz(this.$x.$timezone,!0)},f.tz=function(Y,T,j){var i=j&&T,h=j||T||_,S=g(+f(),h);if(typeof Y!="string")return f(Y).tz(h);var v=function(E,O,L){var H=E-60*O*1e3,y=g(H,L);if(O===y)return[H,O];var m=g(H-=60*(y-O)*1e3,L);return y===m?[H,y]:[E-60*Math.min(y,m)*1e3,Math.max(y,m)]}(f.utc(Y,i).valueOf(),S,h),z=v[0],P=v[1],k=f(z).utcOffset(P);return k.$x.$timezone=h,k},f.tz.guess=function(){return Intl.DateTimeFormat().resolvedOptions().timeZone},f.tz.setDefault=function(Y){_=Y}}})})(_e);var Ue=_e.exports;const We=fe(Ue);function qe(c){return w.jsx(we,{})}var Ve={exports:{}};(function(c,$){(function(p,u){c.exports=u($e)})(se,function(p){function u(f){return f&&typeof f=="object"&&"default"in f?f:{default:f}}var s=u(p),l={name:"vi",weekdays:"chủ nhật_thứ hai_thứ ba_thứ tư_thứ năm_thứ sáu_thứ bảy".split("_"),months:"tháng 1_tháng 2_tháng 3_tháng 4_tháng 5_tháng 6_tháng 7_tháng 8_tháng 9_tháng 10_tháng 11_tháng 12".split("_"),weekStart:1,weekdaysShort:"CN_T2_T3_T4_T5_T6_T7".split("_"),monthsShort:"Th01_Th02_Th03_Th04_Th05_Th06_Th07_Th08_Th09_Th10_Th11_Th12".split("_"),weekdaysMin:"CN_T2_T3_T4_T5_T6_T7".split("_"),ordinal:function(f){return f},formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM [năm] YYYY",LLL:"D MMMM [năm] YYYY HH:mm",LLLL:"dddd, D MMMM [năm] YYYY HH:mm",l:"DD/M/YYYY",ll:"D MMM YYYY",lll:"D MMM YYYY HH:mm",llll:"ddd, D MMM YYYY HH:mm"},relativeTime:{future:"%s tới",past:"%s trước",s:"vài giây",m:"một phút",mm:"%d phút",h:"một giờ",hh:"%d giờ",d:"một ngày",dd:"%d ngày",M:"một tháng",MM:"%d tháng",y:"một năm",yy:"%d năm"}};return s.default.locale(l,null,!0),l})})(Ve);de.extend(We);de.tz.setDefault("Asia/Ho_Chi_Minh");const Je=Ye([{path:"",element:w.jsx(Ge,{})},{element:w.jsx(qe,{}),path:"dashboard",children:[{path:"overview",element:""},{path:"order",element:""},{path:"category",element:""},{path:"product",element:""},{path:"user",element:""},{path:"setting",element:""}]},{path:"about",element:w.jsx(Ke,{})},{path:"*",element:w.jsx(be,{to:""})}]);function Xe(){return w.jsxs(w.Fragment,{children:[w.jsx(Oe,{router:Je}),w.jsx(Ze,{innerSize:8,outerSize:35,innerScale:1,outerScale:2,outerAlpha:0,showSystemCursor:!0,hasBlendMode:!0,outerStyle:{border:"3px solid var(--cursor-color)"},innerStyle:{backgroundColor:"var(--cursor-color)"}})]})}function Ge(){const{t:c}=Le();return w.jsxs(w.Fragment,{children:[w.jsx("main",{children:w.jsx("h2",{children:c("title")})}),w.jsx("nav",{children:w.jsx(pe,{to:"/about",children:"About"})})]})}function Ke(){return w.jsxs(w.Fragment,{children:[w.jsxs("main",{children:[w.jsx("h2",{children:"Who are we?"}),w.jsx("p",{children:"That feels like an existential question, dont you think?"})]}),w.jsx("nav",{children:w.jsx(pe,{to:"/",children:"Home"})})]})}ye.use(ze).use(Ee).use(Te).init({debug:!1,react:{useSuspense:!0},lng:"vi",fallbackLng:"vi",supportedLngs:["vi","en"],interpolation:{escapeValue:!1},defaultNS:"translation",ns:["translation"],backend:{loadPath:"/locales/{{lng}}/{{ns}}.json"}});de.extend(Fe);le.createRoot(document.getElementById("root")).render(w.jsx(je,{i18n:ye,children:w.jsx(Xe,{})}));export{Qe as __vite_legacy_guard};
