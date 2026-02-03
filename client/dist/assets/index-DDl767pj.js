var zr=Object.defineProperty;var kr=(e,t,i)=>t in e?zr(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i;var L=(e,t,i)=>kr(e,typeof t!="symbol"?t+"":t,i);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))s(n);new MutationObserver(n=>{for(const a of n)if(a.type==="childList")for(const r of a.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function i(n){const a={};return n.integrity&&(a.integrity=n.integrity),n.referrerPolicy&&(a.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?a.credentials="include":n.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(n){if(n.ep)return;n.ep=!0;const a=i(n);fetch(n.href,a)}})();/*!
 * @kurkle/color v0.3.4
 * https://github.com/kurkle/color#readme
 * (c) 2024 Jukka Kurkela
 * Released under the MIT License
 */function qe(e){return e+.5|0}const Pt=(e,t,i)=>Math.max(Math.min(e,i),t);function we(e){return Pt(qe(e*2.55),0,255)}function Ft(e){return Pt(qe(e*255),0,255)}function Lt(e){return Pt(qe(e/2.55)/100,0,1)}function Ds(e){return Pt(qe(e*100),0,100)}const xt={0:0,1:1,2:2,3:3,4:4,5:5,6:6,7:7,8:8,9:9,A:10,B:11,C:12,D:13,E:14,F:15,a:10,b:11,c:12,d:13,e:14,f:15},Ji=[..."0123456789ABCDEF"],_r=e=>Ji[e&15],$r=e=>Ji[(e&240)>>4]+Ji[e&15],He=e=>(e&240)>>4===(e&15),Sr=e=>He(e.r)&&He(e.g)&&He(e.b)&&He(e.a);function Tr(e){var t=e.length,i;return e[0]==="#"&&(t===4||t===5?i={r:255&xt[e[1]]*17,g:255&xt[e[2]]*17,b:255&xt[e[3]]*17,a:t===5?xt[e[4]]*17:255}:(t===7||t===9)&&(i={r:xt[e[1]]<<4|xt[e[2]],g:xt[e[3]]<<4|xt[e[4]],b:xt[e[5]]<<4|xt[e[6]],a:t===9?xt[e[7]]<<4|xt[e[8]]:255})),i}const Mr=(e,t)=>e<255?t(e):"";function Er(e){var t=Sr(e)?_r:$r;return e?"#"+t(e.r)+t(e.g)+t(e.b)+Mr(e.a,t):void 0}const Cr=/^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/;function ua(e,t,i){const s=t*Math.min(i,1-i),n=(a,r=(a+e/30)%12)=>i-s*Math.max(Math.min(r-3,9-r,1),-1);return[n(0),n(8),n(4)]}function Lr(e,t,i){const s=(n,a=(n+e/60)%6)=>i-i*t*Math.max(Math.min(a,4-a,1),0);return[s(5),s(3),s(1)]}function Ar(e,t,i){const s=ua(e,1,.5);let n;for(t+i>1&&(n=1/(t+i),t*=n,i*=n),n=0;n<3;n++)s[n]*=1-t-i,s[n]+=t;return s}function Br(e,t,i,s,n){return e===n?(t-i)/s+(t<i?6:0):t===n?(i-e)/s+2:(e-t)/s+4}function ps(e){const i=e.r/255,s=e.g/255,n=e.b/255,a=Math.max(i,s,n),r=Math.min(i,s,n),o=(a+r)/2;let l,d,c;return a!==r&&(c=a-r,d=o>.5?c/(2-a-r):c/(a+r),l=Br(i,s,n,c,a),l=l*60+.5),[l|0,d||0,o]}function fs(e,t,i,s){return(Array.isArray(t)?e(t[0],t[1],t[2]):e(t,i,s)).map(Ft)}function bs(e,t,i){return fs(ua,e,t,i)}function Ir(e,t,i){return fs(Ar,e,t,i)}function jr(e,t,i){return fs(Lr,e,t,i)}function ha(e){return(e%360+360)%360}function Pr(e){const t=Cr.exec(e);let i=255,s;if(!t)return;t[5]!==s&&(i=t[6]?we(+t[5]):Ft(+t[5]));const n=ha(+t[2]),a=+t[3]/100,r=+t[4]/100;return t[1]==="hwb"?s=Ir(n,a,r):t[1]==="hsv"?s=jr(n,a,r):s=bs(n,a,r),{r:s[0],g:s[1],b:s[2],a:i}}function Dr(e,t){var i=ps(e);i[0]=ha(i[0]+t),i=bs(i),e.r=i[0],e.g=i[1],e.b=i[2]}function Or(e){if(!e)return;const t=ps(e),i=t[0],s=Ds(t[1]),n=Ds(t[2]);return e.a<255?`hsla(${i}, ${s}%, ${n}%, ${Lt(e.a)})`:`hsl(${i}, ${s}%, ${n}%)`}const Os={x:"dark",Z:"light",Y:"re",X:"blu",W:"gr",V:"medium",U:"slate",A:"ee",T:"ol",S:"or",B:"ra",C:"lateg",D:"ights",R:"in",Q:"turquois",E:"hi",P:"ro",O:"al",N:"le",M:"de",L:"yello",F:"en",K:"ch",G:"arks",H:"ea",I:"ightg",J:"wh"},Rs={OiceXe:"f0f8ff",antiquewEte:"faebd7",aqua:"ffff",aquamarRe:"7fffd4",azuY:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"0",blanKedOmond:"ffebcd",Xe:"ff",XeviTet:"8a2be2",bPwn:"a52a2a",burlywood:"deb887",caMtXe:"5f9ea0",KartYuse:"7fff00",KocTate:"d2691e",cSO:"ff7f50",cSnflowerXe:"6495ed",cSnsilk:"fff8dc",crimson:"dc143c",cyan:"ffff",xXe:"8b",xcyan:"8b8b",xgTMnPd:"b8860b",xWay:"a9a9a9",xgYF:"6400",xgYy:"a9a9a9",xkhaki:"bdb76b",xmagFta:"8b008b",xTivegYF:"556b2f",xSange:"ff8c00",xScEd:"9932cc",xYd:"8b0000",xsOmon:"e9967a",xsHgYF:"8fbc8f",xUXe:"483d8b",xUWay:"2f4f4f",xUgYy:"2f4f4f",xQe:"ced1",xviTet:"9400d3",dAppRk:"ff1493",dApskyXe:"bfff",dimWay:"696969",dimgYy:"696969",dodgerXe:"1e90ff",fiYbrick:"b22222",flSOwEte:"fffaf0",foYstWAn:"228b22",fuKsia:"ff00ff",gaRsbSo:"dcdcdc",ghostwEte:"f8f8ff",gTd:"ffd700",gTMnPd:"daa520",Way:"808080",gYF:"8000",gYFLw:"adff2f",gYy:"808080",honeyMw:"f0fff0",hotpRk:"ff69b4",RdianYd:"cd5c5c",Rdigo:"4b0082",ivSy:"fffff0",khaki:"f0e68c",lavFMr:"e6e6fa",lavFMrXsh:"fff0f5",lawngYF:"7cfc00",NmoncEffon:"fffacd",ZXe:"add8e6",ZcSO:"f08080",Zcyan:"e0ffff",ZgTMnPdLw:"fafad2",ZWay:"d3d3d3",ZgYF:"90ee90",ZgYy:"d3d3d3",ZpRk:"ffb6c1",ZsOmon:"ffa07a",ZsHgYF:"20b2aa",ZskyXe:"87cefa",ZUWay:"778899",ZUgYy:"778899",ZstAlXe:"b0c4de",ZLw:"ffffe0",lime:"ff00",limegYF:"32cd32",lRF:"faf0e6",magFta:"ff00ff",maPon:"800000",VaquamarRe:"66cdaa",VXe:"cd",VScEd:"ba55d3",VpurpN:"9370db",VsHgYF:"3cb371",VUXe:"7b68ee",VsprRggYF:"fa9a",VQe:"48d1cc",VviTetYd:"c71585",midnightXe:"191970",mRtcYam:"f5fffa",mistyPse:"ffe4e1",moccasR:"ffe4b5",navajowEte:"ffdead",navy:"80",Tdlace:"fdf5e6",Tive:"808000",TivedBb:"6b8e23",Sange:"ffa500",SangeYd:"ff4500",ScEd:"da70d6",pOegTMnPd:"eee8aa",pOegYF:"98fb98",pOeQe:"afeeee",pOeviTetYd:"db7093",papayawEp:"ffefd5",pHKpuff:"ffdab9",peru:"cd853f",pRk:"ffc0cb",plum:"dda0dd",powMrXe:"b0e0e6",purpN:"800080",YbeccapurpN:"663399",Yd:"ff0000",Psybrown:"bc8f8f",PyOXe:"4169e1",saddNbPwn:"8b4513",sOmon:"fa8072",sandybPwn:"f4a460",sHgYF:"2e8b57",sHshell:"fff5ee",siFna:"a0522d",silver:"c0c0c0",skyXe:"87ceeb",UXe:"6a5acd",UWay:"708090",UgYy:"708090",snow:"fffafa",sprRggYF:"ff7f",stAlXe:"4682b4",tan:"d2b48c",teO:"8080",tEstN:"d8bfd8",tomato:"ff6347",Qe:"40e0d0",viTet:"ee82ee",JHt:"f5deb3",wEte:"ffffff",wEtesmoke:"f5f5f5",Lw:"ffff00",LwgYF:"9acd32"};function Rr(){const e={},t=Object.keys(Rs),i=Object.keys(Os);let s,n,a,r,o;for(s=0;s<t.length;s++){for(r=o=t[s],n=0;n<i.length;n++)a=i[n],o=o.replace(a,Os[a]);a=parseInt(Rs[r],16),e[o]=[a>>16&255,a>>8&255,a&255]}return e}let Ve;function Fr(e){Ve||(Ve=Rr(),Ve.transparent=[0,0,0,0]);const t=Ve[e.toLowerCase()];return t&&{r:t[0],g:t[1],b:t[2],a:t.length===4?t[3]:255}}const Nr=/^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/;function Hr(e){const t=Nr.exec(e);let i=255,s,n,a;if(t){if(t[7]!==s){const r=+t[7];i=t[8]?we(r):Pt(r*255,0,255)}return s=+t[1],n=+t[3],a=+t[5],s=255&(t[2]?we(s):Pt(s,0,255)),n=255&(t[4]?we(n):Pt(n,0,255)),a=255&(t[6]?we(a):Pt(a,0,255)),{r:s,g:n,b:a,a:i}}}function Vr(e){return e&&(e.a<255?`rgba(${e.r}, ${e.g}, ${e.b}, ${Lt(e.a)})`:`rgb(${e.r}, ${e.g}, ${e.b})`)}const Pi=e=>e<=.0031308?e*12.92:Math.pow(e,1/2.4)*1.055-.055,le=e=>e<=.04045?e/12.92:Math.pow((e+.055)/1.055,2.4);function Wr(e,t,i){const s=le(Lt(e.r)),n=le(Lt(e.g)),a=le(Lt(e.b));return{r:Ft(Pi(s+i*(le(Lt(t.r))-s))),g:Ft(Pi(n+i*(le(Lt(t.g))-n))),b:Ft(Pi(a+i*(le(Lt(t.b))-a))),a:e.a+i*(t.a-e.a)}}function We(e,t,i){if(e){let s=ps(e);s[t]=Math.max(0,Math.min(s[t]+s[t]*i,t===0?360:1)),s=bs(s),e.r=s[0],e.g=s[1],e.b=s[2]}}function ga(e,t){return e&&Object.assign(t||{},e)}function qs(e){var t={r:0,g:0,b:0,a:255};return Array.isArray(e)?e.length>=3&&(t={r:e[0],g:e[1],b:e[2],a:255},e.length>3&&(t.a=Ft(e[3]))):(t=ga(e,{r:0,g:0,b:0,a:1}),t.a=Ft(t.a)),t}function Ur(e){return e.charAt(0)==="r"?Hr(e):Pr(e)}class Ae{constructor(t){if(t instanceof Ae)return t;const i=typeof t;let s;i==="object"?s=qs(t):i==="string"&&(s=Tr(t)||Fr(t)||Ur(t)),this._rgb=s,this._valid=!!s}get valid(){return this._valid}get rgb(){var t=ga(this._rgb);return t&&(t.a=Lt(t.a)),t}set rgb(t){this._rgb=qs(t)}rgbString(){return this._valid?Vr(this._rgb):void 0}hexString(){return this._valid?Er(this._rgb):void 0}hslString(){return this._valid?Or(this._rgb):void 0}mix(t,i){if(t){const s=this.rgb,n=t.rgb;let a;const r=i===a?.5:i,o=2*r-1,l=s.a-n.a,d=((o*l===-1?o:(o+l)/(1+o*l))+1)/2;a=1-d,s.r=255&d*s.r+a*n.r+.5,s.g=255&d*s.g+a*n.g+.5,s.b=255&d*s.b+a*n.b+.5,s.a=r*s.a+(1-r)*n.a,this.rgb=s}return this}interpolate(t,i){return t&&(this._rgb=Wr(this._rgb,t._rgb,i)),this}clone(){return new Ae(this.rgb)}alpha(t){return this._rgb.a=Ft(t),this}clearer(t){const i=this._rgb;return i.a*=1-t,this}greyscale(){const t=this._rgb,i=qe(t.r*.3+t.g*.59+t.b*.11);return t.r=t.g=t.b=i,this}opaquer(t){const i=this._rgb;return i.a*=1+t,this}negate(){const t=this._rgb;return t.r=255-t.r,t.g=255-t.g,t.b=255-t.b,this}lighten(t){return We(this._rgb,2,t),this}darken(t){return We(this._rgb,2,-t),this}saturate(t){return We(this._rgb,1,t),this}desaturate(t){return We(this._rgb,1,-t),this}rotate(t){return Dr(this._rgb,t),this}}/*!
 * Chart.js v4.5.1
 * https://www.chartjs.org
 * (c) 2025 Chart.js Contributors
 * Released under the MIT License
 */function Mt(){}const Yr=(()=>{let e=0;return()=>e++})();function H(e){return e==null}function G(e){if(Array.isArray&&Array.isArray(e))return!0;const t=Object.prototype.toString.call(e);return t.slice(0,7)==="[object"&&t.slice(-6)==="Array]"}function V(e){return e!==null&&Object.prototype.toString.call(e)==="[object Object]"}function tt(e){return(typeof e=="number"||e instanceof Number)&&isFinite(+e)}function yt(e,t){return tt(e)?e:t}function O(e,t){return typeof e>"u"?t:e}const Xr=(e,t)=>typeof e=="string"&&e.endsWith("%")?parseFloat(e)/100:+e/t,ma=(e,t)=>typeof e=="string"&&e.endsWith("%")?parseFloat(e)/100*t:+e;function K(e,t,i){if(e&&typeof e.call=="function")return e.apply(i,t)}function X(e,t,i,s){let n,a,r;if(G(e))for(a=e.length,n=0;n<a;n++)t.call(i,e[n],n);else if(V(e))for(r=Object.keys(e),a=r.length,n=0;n<a;n++)t.call(i,e[r[n]],r[n])}function mi(e,t){let i,s,n,a;if(!e||!t||e.length!==t.length)return!1;for(i=0,s=e.length;i<s;++i)if(n=e[i],a=t[i],n.datasetIndex!==a.datasetIndex||n.index!==a.index)return!1;return!0}function pi(e){if(G(e))return e.map(pi);if(V(e)){const t=Object.create(null),i=Object.keys(e),s=i.length;let n=0;for(;n<s;++n)t[i[n]]=pi(e[i[n]]);return t}return e}function pa(e){return["__proto__","prototype","constructor"].indexOf(e)===-1}function Qr(e,t,i,s){if(!pa(e))return;const n=t[e],a=i[e];V(n)&&V(a)?Be(n,a,s):t[e]=pi(a)}function Be(e,t,i){const s=G(t)?t:[t],n=s.length;if(!V(e))return e;i=i||{};const a=i.merger||Qr;let r;for(let o=0;o<n;++o){if(r=s[o],!V(r))continue;const l=Object.keys(r);for(let d=0,c=l.length;d<c;++d)a(l[d],e,r,i)}return e}function Te(e,t){return Be(e,t,{merger:Kr})}function Kr(e,t,i){if(!pa(e))return;const s=t[e],n=i[e];V(s)&&V(n)?Te(s,n):Object.prototype.hasOwnProperty.call(t,e)||(t[e]=pi(n))}const Fs={"":e=>e,x:e=>e.x,y:e=>e.y};function Jr(e){const t=e.split("."),i=[];let s="";for(const n of t)s+=n,s.endsWith("\\")?s=s.slice(0,-1)+".":(i.push(s),s="");return i}function Gr(e){const t=Jr(e);return i=>{for(const s of t){if(s==="")break;i=i&&i[s]}return i}}function Nt(e,t){return(Fs[t]||(Fs[t]=Gr(t)))(e)}function ys(e){return e.charAt(0).toUpperCase()+e.slice(1)}const Ie=e=>typeof e<"u",Ht=e=>typeof e=="function",Ns=(e,t)=>{if(e.size!==t.size)return!1;for(const i of e)if(!t.has(i))return!1;return!0};function Zr(e){return e.type==="mouseup"||e.type==="click"||e.type==="contextmenu"}const W=Math.PI,J=2*W,to=J+W,fi=Number.POSITIVE_INFINITY,eo=W/180,it=W/2,Ut=W/4,Hs=W*2/3,Dt=Math.log10,Tt=Math.sign;function Me(e,t,i){return Math.abs(e-t)<i}function Vs(e){const t=Math.round(e);e=Me(e,t,e/1e3)?t:e;const i=Math.pow(10,Math.floor(Dt(e))),s=e/i;return(s<=1?1:s<=2?2:s<=5?5:10)*i}function io(e){const t=[],i=Math.sqrt(e);let s;for(s=1;s<i;s++)e%s===0&&(t.push(s),t.push(e/s));return i===(i|0)&&t.push(i),t.sort((n,a)=>n-a).pop(),t}function so(e){return typeof e=="symbol"||typeof e=="object"&&e!==null&&!(Symbol.toPrimitive in e||"toString"in e||"valueOf"in e)}function he(e){return!so(e)&&!isNaN(parseFloat(e))&&isFinite(e)}function no(e,t){const i=Math.round(e);return i-t<=e&&i+t>=e}function fa(e,t,i){let s,n,a;for(s=0,n=e.length;s<n;s++)a=e[s][i],isNaN(a)||(t.min=Math.min(t.min,a),t.max=Math.max(t.max,a))}function wt(e){return e*(W/180)}function vs(e){return e*(180/W)}function Ws(e){if(!tt(e))return;let t=1,i=0;for(;Math.round(e*t)/t!==e;)t*=10,i++;return i}function ba(e,t){const i=t.x-e.x,s=t.y-e.y,n=Math.sqrt(i*i+s*s);let a=Math.atan2(s,i);return a<-.5*W&&(a+=J),{angle:a,distance:n}}function Gi(e,t){return Math.sqrt(Math.pow(t.x-e.x,2)+Math.pow(t.y-e.y,2))}function ao(e,t){return(e-t+to)%J-W}function lt(e){return(e%J+J)%J}function je(e,t,i,s){const n=lt(e),a=lt(t),r=lt(i),o=lt(a-n),l=lt(r-n),d=lt(n-a),c=lt(n-r);return n===a||n===r||s&&a===r||o>l&&d<c}function at(e,t,i){return Math.max(t,Math.min(i,e))}function ro(e){return at(e,-32768,32767)}function At(e,t,i,s=1e-6){return e>=Math.min(t,i)-s&&e<=Math.max(t,i)+s}function xs(e,t,i){i=i||(r=>e[r]<t);let s=e.length-1,n=0,a;for(;s-n>1;)a=n+s>>1,i(a)?n=a:s=a;return{lo:n,hi:s}}const Bt=(e,t,i,s)=>xs(e,i,s?n=>{const a=e[n][t];return a<i||a===i&&e[n+1][t]===i}:n=>e[n][t]<i),oo=(e,t,i)=>xs(e,i,s=>e[s][t]>=i);function lo(e,t,i){let s=0,n=e.length;for(;s<n&&e[s]<t;)s++;for(;n>s&&e[n-1]>i;)n--;return s>0||n<e.length?e.slice(s,n):e}const ya=["push","pop","shift","splice","unshift"];function co(e,t){if(e._chartjs){e._chartjs.listeners.push(t);return}Object.defineProperty(e,"_chartjs",{configurable:!0,enumerable:!1,value:{listeners:[t]}}),ya.forEach(i=>{const s="_onData"+ys(i),n=e[i];Object.defineProperty(e,i,{configurable:!0,enumerable:!1,value(...a){const r=n.apply(this,a);return e._chartjs.listeners.forEach(o=>{typeof o[s]=="function"&&o[s](...a)}),r}})})}function Us(e,t){const i=e._chartjs;if(!i)return;const s=i.listeners,n=s.indexOf(t);n!==-1&&s.splice(n,1),!(s.length>0)&&(ya.forEach(a=>{delete e[a]}),delete e._chartjs)}function va(e){const t=new Set(e);return t.size===e.length?e:Array.from(t)}const xa=function(){return typeof window>"u"?function(e){return e()}:window.requestAnimationFrame}();function wa(e,t){let i=[],s=!1;return function(...n){i=n,s||(s=!0,xa.call(window,()=>{s=!1,e.apply(t,i)}))}}function uo(e,t){let i;return function(...s){return t?(clearTimeout(i),i=setTimeout(e,t,s)):e.apply(this,s),t}}const ws=e=>e==="start"?"left":e==="end"?"right":"center",ot=(e,t,i)=>e==="start"?t:e==="end"?i:(t+i)/2,ho=(e,t,i,s)=>e===(s?"left":"right")?i:e==="center"?(t+i)/2:t;function za(e,t,i){const s=t.length;let n=0,a=s;if(e._sorted){const{iScale:r,vScale:o,_parsed:l}=e,d=e.dataset&&e.dataset.options?e.dataset.options.spanGaps:null,c=r.axis,{min:u,max:h,minDefined:g,maxDefined:m}=r.getUserBounds();if(g){if(n=Math.min(Bt(l,c,u).lo,i?s:Bt(t,c,r.getPixelForValue(u)).lo),d){const p=l.slice(0,n+1).reverse().findIndex(f=>!H(f[o.axis]));n-=Math.max(0,p)}n=at(n,0,s-1)}if(m){let p=Math.max(Bt(l,r.axis,h,!0).hi+1,i?0:Bt(t,c,r.getPixelForValue(h),!0).hi+1);if(d){const f=l.slice(p-1).findIndex(b=>!H(b[o.axis]));p+=Math.max(0,f)}a=at(p,n,s)-n}else a=s-n}return{start:n,count:a}}function ka(e){const{xScale:t,yScale:i,_scaleRanges:s}=e,n={xmin:t.min,xmax:t.max,ymin:i.min,ymax:i.max};if(!s)return e._scaleRanges=n,!0;const a=s.xmin!==t.min||s.xmax!==t.max||s.ymin!==i.min||s.ymax!==i.max;return Object.assign(s,n),a}const Ue=e=>e===0||e===1,Ys=(e,t,i)=>-(Math.pow(2,10*(e-=1))*Math.sin((e-t)*J/i)),Xs=(e,t,i)=>Math.pow(2,-10*e)*Math.sin((e-t)*J/i)+1,Ee={linear:e=>e,easeInQuad:e=>e*e,easeOutQuad:e=>-e*(e-2),easeInOutQuad:e=>(e/=.5)<1?.5*e*e:-.5*(--e*(e-2)-1),easeInCubic:e=>e*e*e,easeOutCubic:e=>(e-=1)*e*e+1,easeInOutCubic:e=>(e/=.5)<1?.5*e*e*e:.5*((e-=2)*e*e+2),easeInQuart:e=>e*e*e*e,easeOutQuart:e=>-((e-=1)*e*e*e-1),easeInOutQuart:e=>(e/=.5)<1?.5*e*e*e*e:-.5*((e-=2)*e*e*e-2),easeInQuint:e=>e*e*e*e*e,easeOutQuint:e=>(e-=1)*e*e*e*e+1,easeInOutQuint:e=>(e/=.5)<1?.5*e*e*e*e*e:.5*((e-=2)*e*e*e*e+2),easeInSine:e=>-Math.cos(e*it)+1,easeOutSine:e=>Math.sin(e*it),easeInOutSine:e=>-.5*(Math.cos(W*e)-1),easeInExpo:e=>e===0?0:Math.pow(2,10*(e-1)),easeOutExpo:e=>e===1?1:-Math.pow(2,-10*e)+1,easeInOutExpo:e=>Ue(e)?e:e<.5?.5*Math.pow(2,10*(e*2-1)):.5*(-Math.pow(2,-10*(e*2-1))+2),easeInCirc:e=>e>=1?e:-(Math.sqrt(1-e*e)-1),easeOutCirc:e=>Math.sqrt(1-(e-=1)*e),easeInOutCirc:e=>(e/=.5)<1?-.5*(Math.sqrt(1-e*e)-1):.5*(Math.sqrt(1-(e-=2)*e)+1),easeInElastic:e=>Ue(e)?e:Ys(e,.075,.3),easeOutElastic:e=>Ue(e)?e:Xs(e,.075,.3),easeInOutElastic(e){return Ue(e)?e:e<.5?.5*Ys(e*2,.1125,.45):.5+.5*Xs(e*2-1,.1125,.45)},easeInBack(e){return e*e*((1.70158+1)*e-1.70158)},easeOutBack(e){return(e-=1)*e*((1.70158+1)*e+1.70158)+1},easeInOutBack(e){let t=1.70158;return(e/=.5)<1?.5*(e*e*(((t*=1.525)+1)*e-t)):.5*((e-=2)*e*(((t*=1.525)+1)*e+t)+2)},easeInBounce:e=>1-Ee.easeOutBounce(1-e),easeOutBounce(e){return e<1/2.75?7.5625*e*e:e<2/2.75?7.5625*(e-=1.5/2.75)*e+.75:e<2.5/2.75?7.5625*(e-=2.25/2.75)*e+.9375:7.5625*(e-=2.625/2.75)*e+.984375},easeInOutBounce:e=>e<.5?Ee.easeInBounce(e*2)*.5:Ee.easeOutBounce(e*2-1)*.5+.5};function zs(e){if(e&&typeof e=="object"){const t=e.toString();return t==="[object CanvasPattern]"||t==="[object CanvasGradient]"}return!1}function Qs(e){return zs(e)?e:new Ae(e)}function Di(e){return zs(e)?e:new Ae(e).saturate(.5).darken(.1).hexString()}const go=["x","y","borderWidth","radius","tension"],mo=["color","borderColor","backgroundColor"];function po(e){e.set("animation",{delay:void 0,duration:1e3,easing:"easeOutQuart",fn:void 0,from:void 0,loop:void 0,to:void 0,type:void 0}),e.describe("animation",{_fallback:!1,_indexable:!1,_scriptable:t=>t!=="onProgress"&&t!=="onComplete"&&t!=="fn"}),e.set("animations",{colors:{type:"color",properties:mo},numbers:{type:"number",properties:go}}),e.describe("animations",{_fallback:"animation"}),e.set("transitions",{active:{animation:{duration:400}},resize:{animation:{duration:0}},show:{animations:{colors:{from:"transparent"},visible:{type:"boolean",duration:0}}},hide:{animations:{colors:{to:"transparent"},visible:{type:"boolean",easing:"linear",fn:t=>t|0}}}})}function fo(e){e.set("layout",{autoPadding:!0,padding:{top:0,right:0,bottom:0,left:0}})}const Ks=new Map;function bo(e,t){t=t||{};const i=e+JSON.stringify(t);let s=Ks.get(i);return s||(s=new Intl.NumberFormat(e,t),Ks.set(i,s)),s}function Fe(e,t,i){return bo(t,i).format(e)}const _a={values(e){return G(e)?e:""+e},numeric(e,t,i){if(e===0)return"0";const s=this.chart.options.locale;let n,a=e;if(i.length>1){const d=Math.max(Math.abs(i[0].value),Math.abs(i[i.length-1].value));(d<1e-4||d>1e15)&&(n="scientific"),a=yo(e,i)}const r=Dt(Math.abs(a)),o=isNaN(r)?1:Math.max(Math.min(-1*Math.floor(r),20),0),l={notation:n,minimumFractionDigits:o,maximumFractionDigits:o};return Object.assign(l,this.options.ticks.format),Fe(e,s,l)},logarithmic(e,t,i){if(e===0)return"0";const s=i[t].significand||e/Math.pow(10,Math.floor(Dt(e)));return[1,2,3,5,10,15].includes(s)||t>.8*i.length?_a.numeric.call(this,e,t,i):""}};function yo(e,t){let i=t.length>3?t[2].value-t[1].value:t[1].value-t[0].value;return Math.abs(i)>=1&&e!==Math.floor(e)&&(i=e-Math.floor(e)),i}var _i={formatters:_a};function vo(e){e.set("scale",{display:!0,offset:!1,reverse:!1,beginAtZero:!1,bounds:"ticks",clip:!0,grace:0,grid:{display:!0,lineWidth:1,drawOnChartArea:!0,drawTicks:!0,tickLength:8,tickWidth:(t,i)=>i.lineWidth,tickColor:(t,i)=>i.color,offset:!1},border:{display:!0,dash:[],dashOffset:0,width:1},title:{display:!1,text:"",padding:{top:4,bottom:4}},ticks:{minRotation:0,maxRotation:50,mirror:!1,textStrokeWidth:0,textStrokeColor:"",padding:3,display:!0,autoSkip:!0,autoSkipPadding:3,labelOffset:0,callback:_i.formatters.values,minor:{},major:{},align:"center",crossAlign:"near",showLabelBackdrop:!1,backdropColor:"rgba(255, 255, 255, 0.75)",backdropPadding:2}}),e.route("scale.ticks","color","","color"),e.route("scale.grid","color","","borderColor"),e.route("scale.border","color","","borderColor"),e.route("scale.title","color","","color"),e.describe("scale",{_fallback:!1,_scriptable:t=>!t.startsWith("before")&&!t.startsWith("after")&&t!=="callback"&&t!=="parser",_indexable:t=>t!=="borderDash"&&t!=="tickBorderDash"&&t!=="dash"}),e.describe("scales",{_fallback:"scale"}),e.describe("scale.ticks",{_scriptable:t=>t!=="backdropPadding"&&t!=="callback",_indexable:t=>t!=="backdropPadding"})}const se=Object.create(null),Zi=Object.create(null);function Ce(e,t){if(!t)return e;const i=t.split(".");for(let s=0,n=i.length;s<n;++s){const a=i[s];e=e[a]||(e[a]=Object.create(null))}return e}function Oi(e,t,i){return typeof t=="string"?Be(Ce(e,t),i):Be(Ce(e,""),t)}class xo{constructor(t,i){this.animation=void 0,this.backgroundColor="rgba(0,0,0,0.1)",this.borderColor="rgba(0,0,0,0.1)",this.color="#666",this.datasets={},this.devicePixelRatio=s=>s.chart.platform.getDevicePixelRatio(),this.elements={},this.events=["mousemove","mouseout","click","touchstart","touchmove"],this.font={family:"'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",size:12,style:"normal",lineHeight:1.2,weight:null},this.hover={},this.hoverBackgroundColor=(s,n)=>Di(n.backgroundColor),this.hoverBorderColor=(s,n)=>Di(n.borderColor),this.hoverColor=(s,n)=>Di(n.color),this.indexAxis="x",this.interaction={mode:"nearest",intersect:!0,includeInvisible:!1},this.maintainAspectRatio=!0,this.onHover=null,this.onClick=null,this.parsing=!0,this.plugins={},this.responsive=!0,this.scale=void 0,this.scales={},this.showLine=!0,this.drawActiveElementsOnTop=!0,this.describe(t),this.apply(i)}set(t,i){return Oi(this,t,i)}get(t){return Ce(this,t)}describe(t,i){return Oi(Zi,t,i)}override(t,i){return Oi(se,t,i)}route(t,i,s,n){const a=Ce(this,t),r=Ce(this,s),o="_"+i;Object.defineProperties(a,{[o]:{value:a[i],writable:!0},[i]:{enumerable:!0,get(){const l=this[o],d=r[n];return V(l)?Object.assign({},d,l):O(l,d)},set(l){this[o]=l}}})}apply(t){t.forEach(i=>i(this))}}var Z=new xo({_scriptable:e=>!e.startsWith("on"),_indexable:e=>e!=="events",hover:{_fallback:"interaction"},interaction:{_scriptable:!1,_indexable:!1}},[po,fo,vo]);function wo(e){return!e||H(e.size)||H(e.family)?null:(e.style?e.style+" ":"")+(e.weight?e.weight+" ":"")+e.size+"px "+e.family}function bi(e,t,i,s,n){let a=t[n];return a||(a=t[n]=e.measureText(n).width,i.push(n)),a>s&&(s=a),s}function zo(e,t,i,s){s=s||{};let n=s.data=s.data||{},a=s.garbageCollect=s.garbageCollect||[];s.font!==t&&(n=s.data={},a=s.garbageCollect=[],s.font=t),e.save(),e.font=t;let r=0;const o=i.length;let l,d,c,u,h;for(l=0;l<o;l++)if(u=i[l],u!=null&&!G(u))r=bi(e,n,a,r,u);else if(G(u))for(d=0,c=u.length;d<c;d++)h=u[d],h!=null&&!G(h)&&(r=bi(e,n,a,r,h));e.restore();const g=a.length/2;if(g>i.length){for(l=0;l<g;l++)delete n[a[l]];a.splice(0,g)}return r}function Yt(e,t,i){const s=e.currentDevicePixelRatio,n=i!==0?Math.max(i/2,.5):0;return Math.round((t-n)*s)/s+n}function Js(e,t){!t&&!e||(t=t||e.getContext("2d"),t.save(),t.resetTransform(),t.clearRect(0,0,e.width,e.height),t.restore())}function ts(e,t,i,s){$a(e,t,i,s,null)}function $a(e,t,i,s,n){let a,r,o,l,d,c,u,h;const g=t.pointStyle,m=t.rotation,p=t.radius;let f=(m||0)*eo;if(g&&typeof g=="object"&&(a=g.toString(),a==="[object HTMLImageElement]"||a==="[object HTMLCanvasElement]")){e.save(),e.translate(i,s),e.rotate(f),e.drawImage(g,-g.width/2,-g.height/2,g.width,g.height),e.restore();return}if(!(isNaN(p)||p<=0)){switch(e.beginPath(),g){default:n?e.ellipse(i,s,n/2,p,0,0,J):e.arc(i,s,p,0,J),e.closePath();break;case"triangle":c=n?n/2:p,e.moveTo(i+Math.sin(f)*c,s-Math.cos(f)*p),f+=Hs,e.lineTo(i+Math.sin(f)*c,s-Math.cos(f)*p),f+=Hs,e.lineTo(i+Math.sin(f)*c,s-Math.cos(f)*p),e.closePath();break;case"rectRounded":d=p*.516,l=p-d,r=Math.cos(f+Ut)*l,u=Math.cos(f+Ut)*(n?n/2-d:l),o=Math.sin(f+Ut)*l,h=Math.sin(f+Ut)*(n?n/2-d:l),e.arc(i-u,s-o,d,f-W,f-it),e.arc(i+h,s-r,d,f-it,f),e.arc(i+u,s+o,d,f,f+it),e.arc(i-h,s+r,d,f+it,f+W),e.closePath();break;case"rect":if(!m){l=Math.SQRT1_2*p,c=n?n/2:l,e.rect(i-c,s-l,2*c,2*l);break}f+=Ut;case"rectRot":u=Math.cos(f)*(n?n/2:p),r=Math.cos(f)*p,o=Math.sin(f)*p,h=Math.sin(f)*(n?n/2:p),e.moveTo(i-u,s-o),e.lineTo(i+h,s-r),e.lineTo(i+u,s+o),e.lineTo(i-h,s+r),e.closePath();break;case"crossRot":f+=Ut;case"cross":u=Math.cos(f)*(n?n/2:p),r=Math.cos(f)*p,o=Math.sin(f)*p,h=Math.sin(f)*(n?n/2:p),e.moveTo(i-u,s-o),e.lineTo(i+u,s+o),e.moveTo(i+h,s-r),e.lineTo(i-h,s+r);break;case"star":u=Math.cos(f)*(n?n/2:p),r=Math.cos(f)*p,o=Math.sin(f)*p,h=Math.sin(f)*(n?n/2:p),e.moveTo(i-u,s-o),e.lineTo(i+u,s+o),e.moveTo(i+h,s-r),e.lineTo(i-h,s+r),f+=Ut,u=Math.cos(f)*(n?n/2:p),r=Math.cos(f)*p,o=Math.sin(f)*p,h=Math.sin(f)*(n?n/2:p),e.moveTo(i-u,s-o),e.lineTo(i+u,s+o),e.moveTo(i+h,s-r),e.lineTo(i-h,s+r);break;case"line":r=n?n/2:Math.cos(f)*p,o=Math.sin(f)*p,e.moveTo(i-r,s-o),e.lineTo(i+r,s+o);break;case"dash":e.moveTo(i,s),e.lineTo(i+Math.cos(f)*(n?n/2:p),s+Math.sin(f)*p);break;case!1:e.closePath();break}e.fill(),t.borderWidth>0&&e.stroke()}}function It(e,t,i){return i=i||.5,!t||e&&e.x>t.left-i&&e.x<t.right+i&&e.y>t.top-i&&e.y<t.bottom+i}function $i(e,t){e.save(),e.beginPath(),e.rect(t.left,t.top,t.right-t.left,t.bottom-t.top),e.clip()}function Si(e){e.restore()}function ko(e,t,i,s,n){if(!t)return e.lineTo(i.x,i.y);if(n==="middle"){const a=(t.x+i.x)/2;e.lineTo(a,t.y),e.lineTo(a,i.y)}else n==="after"!=!!s?e.lineTo(t.x,i.y):e.lineTo(i.x,t.y);e.lineTo(i.x,i.y)}function _o(e,t,i,s){if(!t)return e.lineTo(i.x,i.y);e.bezierCurveTo(s?t.cp1x:t.cp2x,s?t.cp1y:t.cp2y,s?i.cp2x:i.cp1x,s?i.cp2y:i.cp1y,i.x,i.y)}function $o(e,t){t.translation&&e.translate(t.translation[0],t.translation[1]),H(t.rotation)||e.rotate(t.rotation),t.color&&(e.fillStyle=t.color),t.textAlign&&(e.textAlign=t.textAlign),t.textBaseline&&(e.textBaseline=t.textBaseline)}function So(e,t,i,s,n){if(n.strikethrough||n.underline){const a=e.measureText(s),r=t-a.actualBoundingBoxLeft,o=t+a.actualBoundingBoxRight,l=i-a.actualBoundingBoxAscent,d=i+a.actualBoundingBoxDescent,c=n.strikethrough?(l+d)/2:d;e.strokeStyle=e.fillStyle,e.beginPath(),e.lineWidth=n.decorationWidth||2,e.moveTo(r,c),e.lineTo(o,c),e.stroke()}}function To(e,t){const i=e.fillStyle;e.fillStyle=t.color,e.fillRect(t.left,t.top,t.width,t.height),e.fillStyle=i}function ne(e,t,i,s,n,a={}){const r=G(t)?t:[t],o=a.strokeWidth>0&&a.strokeColor!=="";let l,d;for(e.save(),e.font=n.string,$o(e,a),l=0;l<r.length;++l)d=r[l],a.backdrop&&To(e,a.backdrop),o&&(a.strokeColor&&(e.strokeStyle=a.strokeColor),H(a.strokeWidth)||(e.lineWidth=a.strokeWidth),e.strokeText(d,i,s,a.maxWidth)),e.fillText(d,i,s,a.maxWidth),So(e,i,s,d,a),s+=Number(n.lineHeight);e.restore()}function Pe(e,t){const{x:i,y:s,w:n,h:a,radius:r}=t;e.arc(i+r.topLeft,s+r.topLeft,r.topLeft,1.5*W,W,!0),e.lineTo(i,s+a-r.bottomLeft),e.arc(i+r.bottomLeft,s+a-r.bottomLeft,r.bottomLeft,W,it,!0),e.lineTo(i+n-r.bottomRight,s+a),e.arc(i+n-r.bottomRight,s+a-r.bottomRight,r.bottomRight,it,0,!0),e.lineTo(i+n,s+r.topRight),e.arc(i+n-r.topRight,s+r.topRight,r.topRight,0,-it,!0),e.lineTo(i+r.topLeft,s)}const Mo=/^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/,Eo=/^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/;function Co(e,t){const i=(""+e).match(Mo);if(!i||i[1]==="normal")return t*1.2;switch(e=+i[2],i[3]){case"px":return e;case"%":e/=100;break}return t*e}const Lo=e=>+e||0;function ks(e,t){const i={},s=V(t),n=s?Object.keys(t):t,a=V(e)?s?r=>O(e[r],e[t[r]]):r=>e[r]:()=>e;for(const r of n)i[r]=Lo(a(r));return i}function Sa(e){return ks(e,{top:"y",right:"x",bottom:"y",left:"x"})}function te(e){return ks(e,["topLeft","topRight","bottomLeft","bottomRight"])}function ct(e){const t=Sa(e);return t.width=t.left+t.right,t.height=t.top+t.bottom,t}function nt(e,t){e=e||{},t=t||Z.font;let i=O(e.size,t.size);typeof i=="string"&&(i=parseInt(i,10));let s=O(e.style,t.style);s&&!(""+s).match(Eo)&&(console.warn('Invalid font style specified: "'+s+'"'),s=void 0);const n={family:O(e.family,t.family),lineHeight:Co(O(e.lineHeight,t.lineHeight),i),size:i,style:s,weight:O(e.weight,t.weight),string:""};return n.string=wo(n),n}function ze(e,t,i,s){let n,a,r;for(n=0,a=e.length;n<a;++n)if(r=e[n],r!==void 0&&r!==void 0)return r}function Ao(e,t,i){const{min:s,max:n}=e,a=ma(t,(n-s)/2),r=(o,l)=>i&&o===0?0:o+l;return{min:r(s,-Math.abs(a)),max:r(n,a)}}function Vt(e,t){return Object.assign(Object.create(e),t)}function _s(e,t=[""],i,s,n=()=>e[0]){const a=i||e;typeof s>"u"&&(s=Ca("_fallback",e));const r={[Symbol.toStringTag]:"Object",_cacheable:!0,_scopes:e,_rootScopes:a,_fallback:s,_getTarget:n,override:o=>_s([o,...e],t,a,s)};return new Proxy(r,{deleteProperty(o,l){return delete o[l],delete o._keys,delete e[0][l],!0},get(o,l){return Ma(o,l,()=>qo(l,t,e,o))},getOwnPropertyDescriptor(o,l){return Reflect.getOwnPropertyDescriptor(o._scopes[0],l)},getPrototypeOf(){return Reflect.getPrototypeOf(e[0])},has(o,l){return Zs(o).includes(l)},ownKeys(o){return Zs(o)},set(o,l,d){const c=o._storage||(o._storage=n());return o[l]=c[l]=d,delete o._keys,!0}})}function ge(e,t,i,s){const n={_cacheable:!1,_proxy:e,_context:t,_subProxy:i,_stack:new Set,_descriptors:Ta(e,s),setContext:a=>ge(e,a,i,s),override:a=>ge(e.override(a),t,i,s)};return new Proxy(n,{deleteProperty(a,r){return delete a[r],delete e[r],!0},get(a,r,o){return Ma(a,r,()=>Io(a,r,o))},getOwnPropertyDescriptor(a,r){return a._descriptors.allKeys?Reflect.has(e,r)?{enumerable:!0,configurable:!0}:void 0:Reflect.getOwnPropertyDescriptor(e,r)},getPrototypeOf(){return Reflect.getPrototypeOf(e)},has(a,r){return Reflect.has(e,r)},ownKeys(){return Reflect.ownKeys(e)},set(a,r,o){return e[r]=o,delete a[r],!0}})}function Ta(e,t={scriptable:!0,indexable:!0}){const{_scriptable:i=t.scriptable,_indexable:s=t.indexable,_allKeys:n=t.allKeys}=e;return{allKeys:n,scriptable:i,indexable:s,isScriptable:Ht(i)?i:()=>i,isIndexable:Ht(s)?s:()=>s}}const Bo=(e,t)=>e?e+ys(t):t,$s=(e,t)=>V(t)&&e!=="adapters"&&(Object.getPrototypeOf(t)===null||t.constructor===Object);function Ma(e,t,i){if(Object.prototype.hasOwnProperty.call(e,t)||t==="constructor")return e[t];const s=i();return e[t]=s,s}function Io(e,t,i){const{_proxy:s,_context:n,_subProxy:a,_descriptors:r}=e;let o=s[t];return Ht(o)&&r.isScriptable(t)&&(o=jo(t,o,e,i)),G(o)&&o.length&&(o=Po(t,o,e,r.isIndexable)),$s(t,o)&&(o=ge(o,n,a&&a[t],r)),o}function jo(e,t,i,s){const{_proxy:n,_context:a,_subProxy:r,_stack:o}=i;if(o.has(e))throw new Error("Recursion detected: "+Array.from(o).join("->")+"->"+e);o.add(e);let l=t(a,r||s);return o.delete(e),$s(e,l)&&(l=Ss(n._scopes,n,e,l)),l}function Po(e,t,i,s){const{_proxy:n,_context:a,_subProxy:r,_descriptors:o}=i;if(typeof a.index<"u"&&s(e))return t[a.index%t.length];if(V(t[0])){const l=t,d=n._scopes.filter(c=>c!==l);t=[];for(const c of l){const u=Ss(d,n,e,c);t.push(ge(u,a,r&&r[e],o))}}return t}function Ea(e,t,i){return Ht(e)?e(t,i):e}const Do=(e,t)=>e===!0?t:typeof e=="string"?Nt(t,e):void 0;function Oo(e,t,i,s,n){for(const a of t){const r=Do(i,a);if(r){e.add(r);const o=Ea(r._fallback,i,n);if(typeof o<"u"&&o!==i&&o!==s)return o}else if(r===!1&&typeof s<"u"&&i!==s)return null}return!1}function Ss(e,t,i,s){const n=t._rootScopes,a=Ea(t._fallback,i,s),r=[...e,...n],o=new Set;o.add(s);let l=Gs(o,r,i,a||i,s);return l===null||typeof a<"u"&&a!==i&&(l=Gs(o,r,a,l,s),l===null)?!1:_s(Array.from(o),[""],n,a,()=>Ro(t,i,s))}function Gs(e,t,i,s,n){for(;i;)i=Oo(e,t,i,s,n);return i}function Ro(e,t,i){const s=e._getTarget();t in s||(s[t]={});const n=s[t];return G(n)&&V(i)?i:n||{}}function qo(e,t,i,s){let n;for(const a of t)if(n=Ca(Bo(a,e),i),typeof n<"u")return $s(e,n)?Ss(i,s,e,n):n}function Ca(e,t){for(const i of t){if(!i)continue;const s=i[e];if(typeof s<"u")return s}}function Zs(e){let t=e._keys;return t||(t=e._keys=Fo(e._scopes)),t}function Fo(e){const t=new Set;for(const i of e)for(const s of Object.keys(i).filter(n=>!n.startsWith("_")))t.add(s);return Array.from(t)}function La(e,t,i,s){const{iScale:n}=e,{key:a="r"}=this._parsing,r=new Array(s);let o,l,d,c;for(o=0,l=s;o<l;++o)d=o+i,c=t[d],r[o]={r:n.parse(Nt(c,a),d)};return r}const No=Number.EPSILON||1e-14,me=(e,t)=>t<e.length&&!e[t].skip&&e[t],Aa=e=>e==="x"?"y":"x";function Ho(e,t,i,s){const n=e.skip?t:e,a=t,r=i.skip?t:i,o=Gi(a,n),l=Gi(r,a);let d=o/(o+l),c=l/(o+l);d=isNaN(d)?0:d,c=isNaN(c)?0:c;const u=s*d,h=s*c;return{previous:{x:a.x-u*(r.x-n.x),y:a.y-u*(r.y-n.y)},next:{x:a.x+h*(r.x-n.x),y:a.y+h*(r.y-n.y)}}}function Vo(e,t,i){const s=e.length;let n,a,r,o,l,d=me(e,0);for(let c=0;c<s-1;++c)if(l=d,d=me(e,c+1),!(!l||!d)){if(Me(t[c],0,No)){i[c]=i[c+1]=0;continue}n=i[c]/t[c],a=i[c+1]/t[c],o=Math.pow(n,2)+Math.pow(a,2),!(o<=9)&&(r=3/Math.sqrt(o),i[c]=n*r*t[c],i[c+1]=a*r*t[c])}}function Wo(e,t,i="x"){const s=Aa(i),n=e.length;let a,r,o,l=me(e,0);for(let d=0;d<n;++d){if(r=o,o=l,l=me(e,d+1),!o)continue;const c=o[i],u=o[s];r&&(a=(c-r[i])/3,o[`cp1${i}`]=c-a,o[`cp1${s}`]=u-a*t[d]),l&&(a=(l[i]-c)/3,o[`cp2${i}`]=c+a,o[`cp2${s}`]=u+a*t[d])}}function Uo(e,t="x"){const i=Aa(t),s=e.length,n=Array(s).fill(0),a=Array(s);let r,o,l,d=me(e,0);for(r=0;r<s;++r)if(o=l,l=d,d=me(e,r+1),!!l){if(d){const c=d[t]-l[t];n[r]=c!==0?(d[i]-l[i])/c:0}a[r]=o?d?Tt(n[r-1])!==Tt(n[r])?0:(n[r-1]+n[r])/2:n[r-1]:n[r]}Vo(e,n,a),Wo(e,a,t)}function Ye(e,t,i){return Math.max(Math.min(e,i),t)}function Yo(e,t){let i,s,n,a,r,o=It(e[0],t);for(i=0,s=e.length;i<s;++i)r=a,a=o,o=i<s-1&&It(e[i+1],t),a&&(n=e[i],r&&(n.cp1x=Ye(n.cp1x,t.left,t.right),n.cp1y=Ye(n.cp1y,t.top,t.bottom)),o&&(n.cp2x=Ye(n.cp2x,t.left,t.right),n.cp2y=Ye(n.cp2y,t.top,t.bottom)))}function Xo(e,t,i,s,n){let a,r,o,l;if(t.spanGaps&&(e=e.filter(d=>!d.skip)),t.cubicInterpolationMode==="monotone")Uo(e,n);else{let d=s?e[e.length-1]:e[0];for(a=0,r=e.length;a<r;++a)o=e[a],l=Ho(d,o,e[Math.min(a+1,r-(s?0:1))%r],t.tension),o.cp1x=l.previous.x,o.cp1y=l.previous.y,o.cp2x=l.next.x,o.cp2y=l.next.y,d=o}t.capBezierPoints&&Yo(e,i)}function Ts(){return typeof window<"u"&&typeof document<"u"}function Ms(e){let t=e.parentNode;return t&&t.toString()==="[object ShadowRoot]"&&(t=t.host),t}function yi(e,t,i){let s;return typeof e=="string"?(s=parseInt(e,10),e.indexOf("%")!==-1&&(s=s/100*t.parentNode[i])):s=e,s}const Ti=e=>e.ownerDocument.defaultView.getComputedStyle(e,null);function Qo(e,t){return Ti(e).getPropertyValue(t)}const Ko=["top","right","bottom","left"];function ee(e,t,i){const s={};i=i?"-"+i:"";for(let n=0;n<4;n++){const a=Ko[n];s[a]=parseFloat(e[t+"-"+a+i])||0}return s.width=s.left+s.right,s.height=s.top+s.bottom,s}const Jo=(e,t,i)=>(e>0||t>0)&&(!i||!i.shadowRoot);function Go(e,t){const i=e.touches,s=i&&i.length?i[0]:e,{offsetX:n,offsetY:a}=s;let r=!1,o,l;if(Jo(n,a,e.target))o=n,l=a;else{const d=t.getBoundingClientRect();o=s.clientX-d.left,l=s.clientY-d.top,r=!0}return{x:o,y:l,box:r}}function Kt(e,t){if("native"in e)return e;const{canvas:i,currentDevicePixelRatio:s}=t,n=Ti(i),a=n.boxSizing==="border-box",r=ee(n,"padding"),o=ee(n,"border","width"),{x:l,y:d,box:c}=Go(e,i),u=r.left+(c&&o.left),h=r.top+(c&&o.top);let{width:g,height:m}=t;return a&&(g-=r.width+o.width,m-=r.height+o.height),{x:Math.round((l-u)/g*i.width/s),y:Math.round((d-h)/m*i.height/s)}}function Zo(e,t,i){let s,n;if(t===void 0||i===void 0){const a=e&&Ms(e);if(!a)t=e.clientWidth,i=e.clientHeight;else{const r=a.getBoundingClientRect(),o=Ti(a),l=ee(o,"border","width"),d=ee(o,"padding");t=r.width-d.width-l.width,i=r.height-d.height-l.height,s=yi(o.maxWidth,a,"clientWidth"),n=yi(o.maxHeight,a,"clientHeight")}}return{width:t,height:i,maxWidth:s||fi,maxHeight:n||fi}}const Ot=e=>Math.round(e*10)/10;function tl(e,t,i,s){const n=Ti(e),a=ee(n,"margin"),r=yi(n.maxWidth,e,"clientWidth")||fi,o=yi(n.maxHeight,e,"clientHeight")||fi,l=Zo(e,t,i);let{width:d,height:c}=l;if(n.boxSizing==="content-box"){const h=ee(n,"border","width"),g=ee(n,"padding");d-=g.width+h.width,c-=g.height+h.height}return d=Math.max(0,d-a.width),c=Math.max(0,s?d/s:c-a.height),d=Ot(Math.min(d,r,l.maxWidth)),c=Ot(Math.min(c,o,l.maxHeight)),d&&!c&&(c=Ot(d/2)),(t!==void 0||i!==void 0)&&s&&l.height&&c>l.height&&(c=l.height,d=Ot(Math.floor(c*s))),{width:d,height:c}}function tn(e,t,i){const s=t||1,n=Ot(e.height*s),a=Ot(e.width*s);e.height=Ot(e.height),e.width=Ot(e.width);const r=e.canvas;return r.style&&(i||!r.style.height&&!r.style.width)&&(r.style.height=`${e.height}px`,r.style.width=`${e.width}px`),e.currentDevicePixelRatio!==s||r.height!==n||r.width!==a?(e.currentDevicePixelRatio=s,r.height=n,r.width=a,e.ctx.setTransform(s,0,0,s,0,0),!0):!1}const el=function(){let e=!1;try{const t={get passive(){return e=!0,!1}};Ts()&&(window.addEventListener("test",null,t),window.removeEventListener("test",null,t))}catch{}return e}();function en(e,t){const i=Qo(e,t),s=i&&i.match(/^(\d+)(\.\d+)?px$/);return s?+s[1]:void 0}function Jt(e,t,i,s){return{x:e.x+i*(t.x-e.x),y:e.y+i*(t.y-e.y)}}function il(e,t,i,s){return{x:e.x+i*(t.x-e.x),y:s==="middle"?i<.5?e.y:t.y:s==="after"?i<1?e.y:t.y:i>0?t.y:e.y}}function sl(e,t,i,s){const n={x:e.cp2x,y:e.cp2y},a={x:t.cp1x,y:t.cp1y},r=Jt(e,n,i),o=Jt(n,a,i),l=Jt(a,t,i),d=Jt(r,o,i),c=Jt(o,l,i);return Jt(d,c,i)}const nl=function(e,t){return{x(i){return e+e+t-i},setWidth(i){t=i},textAlign(i){return i==="center"?i:i==="right"?"left":"right"},xPlus(i,s){return i-s},leftForLtr(i,s){return i-s}}},al=function(){return{x(e){return e},setWidth(e){},textAlign(e){return e},xPlus(e,t){return e+t},leftForLtr(e,t){return e}}};function ce(e,t,i){return e?nl(t,i):al()}function Ba(e,t){let i,s;(t==="ltr"||t==="rtl")&&(i=e.canvas.style,s=[i.getPropertyValue("direction"),i.getPropertyPriority("direction")],i.setProperty("direction",t,"important"),e.prevTextDirection=s)}function Ia(e,t){t!==void 0&&(delete e.prevTextDirection,e.canvas.style.setProperty("direction",t[0],t[1]))}function ja(e){return e==="angle"?{between:je,compare:ao,normalize:lt}:{between:At,compare:(t,i)=>t-i,normalize:t=>t}}function sn({start:e,end:t,count:i,loop:s,style:n}){return{start:e%i,end:t%i,loop:s&&(t-e+1)%i===0,style:n}}function rl(e,t,i){const{property:s,start:n,end:a}=i,{between:r,normalize:o}=ja(s),l=t.length;let{start:d,end:c,loop:u}=e,h,g;if(u){for(d+=l,c+=l,h=0,g=l;h<g&&r(o(t[d%l][s]),n,a);++h)d--,c--;d%=l,c%=l}return c<d&&(c+=l),{start:d,end:c,loop:u,style:e.style}}function Pa(e,t,i){if(!i)return[e];const{property:s,start:n,end:a}=i,r=t.length,{compare:o,between:l,normalize:d}=ja(s),{start:c,end:u,loop:h,style:g}=rl(e,t,i),m=[];let p=!1,f=null,b,v,w;const y=()=>l(n,w,b)&&o(n,w)!==0,x=()=>o(a,b)===0||l(a,w,b),z=()=>p||y(),S=()=>!p||x();for(let $=c,C=c;$<=u;++$)v=t[$%r],!v.skip&&(b=d(v[s]),b!==w&&(p=l(b,n,a),f===null&&z()&&(f=o(b,n)===0?$:C),f!==null&&S()&&(m.push(sn({start:f,end:$,loop:h,count:r,style:g})),f=null),C=$,w=b));return f!==null&&m.push(sn({start:f,end:u,loop:h,count:r,style:g})),m}function Da(e,t){const i=[],s=e.segments;for(let n=0;n<s.length;n++){const a=Pa(s[n],e.points,t);a.length&&i.push(...a)}return i}function ol(e,t,i,s){let n=0,a=t-1;if(i&&!s)for(;n<t&&!e[n].skip;)n++;for(;n<t&&e[n].skip;)n++;for(n%=t,i&&(a+=n);a>n&&e[a%t].skip;)a--;return a%=t,{start:n,end:a}}function ll(e,t,i,s){const n=e.length,a=[];let r=t,o=e[t],l;for(l=t+1;l<=i;++l){const d=e[l%n];d.skip||d.stop?o.skip||(s=!1,a.push({start:t%n,end:(l-1)%n,loop:s}),t=r=d.stop?l:null):(r=l,o.skip&&(t=l)),o=d}return r!==null&&a.push({start:t%n,end:r%n,loop:s}),a}function dl(e,t){const i=e.points,s=e.options.spanGaps,n=i.length;if(!n)return[];const a=!!e._loop,{start:r,end:o}=ol(i,n,a,s);if(s===!0)return nn(e,[{start:r,end:o,loop:a}],i,t);const l=o<r?o+n:o,d=!!e._fullLoop&&r===0&&o===n-1;return nn(e,ll(i,r,l,d),i,t)}function nn(e,t,i,s){return!s||!s.setContext||!i?t:cl(e,t,i,s)}function cl(e,t,i,s){const n=e._chart.getContext(),a=an(e.options),{_datasetIndex:r,options:{spanGaps:o}}=e,l=i.length,d=[];let c=a,u=t[0].start,h=u;function g(m,p,f,b){const v=o?-1:1;if(m!==p){for(m+=l;i[m%l].skip;)m-=v;for(;i[p%l].skip;)p+=v;m%l!==p%l&&(d.push({start:m%l,end:p%l,loop:f,style:b}),c=b,u=p%l)}}for(const m of t){u=o?u:m.start;let p=i[u%l],f;for(h=u+1;h<=m.end;h++){const b=i[h%l];f=an(s.setContext(Vt(n,{type:"segment",p0:p,p1:b,p0DataIndex:(h-1)%l,p1DataIndex:h%l,datasetIndex:r}))),ul(f,c)&&g(u,h-1,m.loop,c),p=b,c=f}u<h-1&&g(u,h-1,m.loop,c)}return d}function an(e){return{backgroundColor:e.backgroundColor,borderCapStyle:e.borderCapStyle,borderDash:e.borderDash,borderDashOffset:e.borderDashOffset,borderJoinStyle:e.borderJoinStyle,borderWidth:e.borderWidth,borderColor:e.borderColor}}function ul(e,t){if(!t)return!1;const i=[],s=function(n,a){return zs(a)?(i.includes(a)||i.push(a),i.indexOf(a)):a};return JSON.stringify(e,s)!==JSON.stringify(t,s)}function Xe(e,t,i){return e.options.clip?e[i]:t[i]}function hl(e,t){const{xScale:i,yScale:s}=e;return i&&s?{left:Xe(i,t,"left"),right:Xe(i,t,"right"),top:Xe(s,t,"top"),bottom:Xe(s,t,"bottom")}:t}function Oa(e,t){const i=t._clip;if(i.disabled)return!1;const s=hl(t,e.chartArea);return{left:i.left===!1?0:s.left-(i.left===!0?0:i.left),right:i.right===!1?e.width:s.right+(i.right===!0?0:i.right),top:i.top===!1?0:s.top-(i.top===!0?0:i.top),bottom:i.bottom===!1?e.height:s.bottom+(i.bottom===!0?0:i.bottom)}}/*!
 * Chart.js v4.5.1
 * https://www.chartjs.org
 * (c) 2025 Chart.js Contributors
 * Released under the MIT License
 */class gl{constructor(){this._request=null,this._charts=new Map,this._running=!1,this._lastDate=void 0}_notify(t,i,s,n){const a=i.listeners[n],r=i.duration;a.forEach(o=>o({chart:t,initial:i.initial,numSteps:r,currentStep:Math.min(s-i.start,r)}))}_refresh(){this._request||(this._running=!0,this._request=xa.call(window,()=>{this._update(),this._request=null,this._running&&this._refresh()}))}_update(t=Date.now()){let i=0;this._charts.forEach((s,n)=>{if(!s.running||!s.items.length)return;const a=s.items;let r=a.length-1,o=!1,l;for(;r>=0;--r)l=a[r],l._active?(l._total>s.duration&&(s.duration=l._total),l.tick(t),o=!0):(a[r]=a[a.length-1],a.pop());o&&(n.draw(),this._notify(n,s,t,"progress")),a.length||(s.running=!1,this._notify(n,s,t,"complete"),s.initial=!1),i+=a.length}),this._lastDate=t,i===0&&(this._running=!1)}_getAnims(t){const i=this._charts;let s=i.get(t);return s||(s={running:!1,initial:!0,items:[],listeners:{complete:[],progress:[]}},i.set(t,s)),s}listen(t,i,s){this._getAnims(t).listeners[i].push(s)}add(t,i){!i||!i.length||this._getAnims(t).items.push(...i)}has(t){return this._getAnims(t).items.length>0}start(t){const i=this._charts.get(t);i&&(i.running=!0,i.start=Date.now(),i.duration=i.items.reduce((s,n)=>Math.max(s,n._duration),0),this._refresh())}running(t){if(!this._running)return!1;const i=this._charts.get(t);return!(!i||!i.running||!i.items.length)}stop(t){const i=this._charts.get(t);if(!i||!i.items.length)return;const s=i.items;let n=s.length-1;for(;n>=0;--n)s[n].cancel();i.items=[],this._notify(t,i,Date.now(),"complete")}remove(t){return this._charts.delete(t)}}var Et=new gl;const rn="transparent",ml={boolean(e,t,i){return i>.5?t:e},color(e,t,i){const s=Qs(e||rn),n=s.valid&&Qs(t||rn);return n&&n.valid?n.mix(s,i).hexString():t},number(e,t,i){return e+(t-e)*i}};class pl{constructor(t,i,s,n){const a=i[s];n=ze([t.to,n,a,t.from]);const r=ze([t.from,a,n]);this._active=!0,this._fn=t.fn||ml[t.type||typeof r],this._easing=Ee[t.easing]||Ee.linear,this._start=Math.floor(Date.now()+(t.delay||0)),this._duration=this._total=Math.floor(t.duration),this._loop=!!t.loop,this._target=i,this._prop=s,this._from=r,this._to=n,this._promises=void 0}active(){return this._active}update(t,i,s){if(this._active){this._notify(!1);const n=this._target[this._prop],a=s-this._start,r=this._duration-a;this._start=s,this._duration=Math.floor(Math.max(r,t.duration)),this._total+=a,this._loop=!!t.loop,this._to=ze([t.to,i,n,t.from]),this._from=ze([t.from,n,i])}}cancel(){this._active&&(this.tick(Date.now()),this._active=!1,this._notify(!1))}tick(t){const i=t-this._start,s=this._duration,n=this._prop,a=this._from,r=this._loop,o=this._to;let l;if(this._active=a!==o&&(r||i<s),!this._active){this._target[n]=o,this._notify(!0);return}if(i<0){this._target[n]=a;return}l=i/s%2,l=r&&l>1?2-l:l,l=this._easing(Math.min(1,Math.max(0,l))),this._target[n]=this._fn(a,o,l)}wait(){const t=this._promises||(this._promises=[]);return new Promise((i,s)=>{t.push({res:i,rej:s})})}_notify(t){const i=t?"res":"rej",s=this._promises||[];for(let n=0;n<s.length;n++)s[n][i]()}}class Ra{constructor(t,i){this._chart=t,this._properties=new Map,this.configure(i)}configure(t){if(!V(t))return;const i=Object.keys(Z.animation),s=this._properties;Object.getOwnPropertyNames(t).forEach(n=>{const a=t[n];if(!V(a))return;const r={};for(const o of i)r[o]=a[o];(G(a.properties)&&a.properties||[n]).forEach(o=>{(o===n||!s.has(o))&&s.set(o,r)})})}_animateOptions(t,i){const s=i.options,n=bl(t,s);if(!n)return[];const a=this._createAnimations(n,s);return s.$shared&&fl(t.options.$animations,s).then(()=>{t.options=s},()=>{}),a}_createAnimations(t,i){const s=this._properties,n=[],a=t.$animations||(t.$animations={}),r=Object.keys(i),o=Date.now();let l;for(l=r.length-1;l>=0;--l){const d=r[l];if(d.charAt(0)==="$")continue;if(d==="options"){n.push(...this._animateOptions(t,i));continue}const c=i[d];let u=a[d];const h=s.get(d);if(u)if(h&&u.active()){u.update(h,c,o);continue}else u.cancel();if(!h||!h.duration){t[d]=c;continue}a[d]=u=new pl(h,t,d,c),n.push(u)}return n}update(t,i){if(this._properties.size===0){Object.assign(t,i);return}const s=this._createAnimations(t,i);if(s.length)return Et.add(this._chart,s),!0}}function fl(e,t){const i=[],s=Object.keys(t);for(let n=0;n<s.length;n++){const a=e[s[n]];a&&a.active()&&i.push(a.wait())}return Promise.all(i)}function bl(e,t){if(!t)return;let i=e.options;if(!i){e.options=t;return}return i.$shared&&(e.options=i=Object.assign({},i,{$shared:!1,$animations:{}})),i}function on(e,t){const i=e&&e.options||{},s=i.reverse,n=i.min===void 0?t:0,a=i.max===void 0?t:0;return{start:s?a:n,end:s?n:a}}function yl(e,t,i){if(i===!1)return!1;const s=on(e,i),n=on(t,i);return{top:n.end,right:s.end,bottom:n.start,left:s.start}}function vl(e){let t,i,s,n;return V(e)?(t=e.top,i=e.right,s=e.bottom,n=e.left):t=i=s=n=e,{top:t,right:i,bottom:s,left:n,disabled:e===!1}}function qa(e,t){const i=[],s=e._getSortedDatasetMetas(t);let n,a;for(n=0,a=s.length;n<a;++n)i.push(s[n].index);return i}function ln(e,t,i,s={}){const n=e.keys,a=s.mode==="single";let r,o,l,d;if(t===null)return;let c=!1;for(r=0,o=n.length;r<o;++r){if(l=+n[r],l===i){if(c=!0,s.all)continue;break}d=e.values[l],tt(d)&&(a||t===0||Tt(t)===Tt(d))&&(t+=d)}return!c&&!s.all?0:t}function xl(e,t){const{iScale:i,vScale:s}=t,n=i.axis==="x"?"x":"y",a=s.axis==="x"?"x":"y",r=Object.keys(e),o=new Array(r.length);let l,d,c;for(l=0,d=r.length;l<d;++l)c=r[l],o[l]={[n]:c,[a]:e[c]};return o}function Ri(e,t){const i=e&&e.options.stacked;return i||i===void 0&&t.stack!==void 0}function wl(e,t,i){return`${e.id}.${t.id}.${i.stack||i.type}`}function zl(e){const{min:t,max:i,minDefined:s,maxDefined:n}=e.getUserBounds();return{min:s?t:Number.NEGATIVE_INFINITY,max:n?i:Number.POSITIVE_INFINITY}}function kl(e,t,i){const s=e[t]||(e[t]={});return s[i]||(s[i]={})}function dn(e,t,i,s){for(const n of t.getMatchingVisibleMetas(s).reverse()){const a=e[n.index];if(i&&a>0||!i&&a<0)return n.index}return null}function cn(e,t){const{chart:i,_cachedMeta:s}=e,n=i._stacks||(i._stacks={}),{iScale:a,vScale:r,index:o}=s,l=a.axis,d=r.axis,c=wl(a,r,s),u=t.length;let h;for(let g=0;g<u;++g){const m=t[g],{[l]:p,[d]:f}=m,b=m._stacks||(m._stacks={});h=b[d]=kl(n,c,p),h[o]=f,h._top=dn(h,r,!0,s.type),h._bottom=dn(h,r,!1,s.type);const v=h._visualValues||(h._visualValues={});v[o]=f}}function qi(e,t){const i=e.scales;return Object.keys(i).filter(s=>i[s].axis===t).shift()}function _l(e,t){return Vt(e,{active:!1,dataset:void 0,datasetIndex:t,index:t,mode:"default",type:"dataset"})}function $l(e,t,i){return Vt(e,{active:!1,dataIndex:t,parsed:void 0,raw:void 0,element:i,index:t,mode:"default",type:"data"})}function fe(e,t){const i=e.controller.index,s=e.vScale&&e.vScale.axis;if(s){t=t||e._parsed;for(const n of t){const a=n._stacks;if(!a||a[s]===void 0||a[s][i]===void 0)return;delete a[s][i],a[s]._visualValues!==void 0&&a[s]._visualValues[i]!==void 0&&delete a[s]._visualValues[i]}}}const Fi=e=>e==="reset"||e==="none",un=(e,t)=>t?e:Object.assign({},e),Sl=(e,t,i)=>e&&!t.hidden&&t._stacked&&{keys:qa(i,!0),values:null};class zt{constructor(t,i){this.chart=t,this._ctx=t.ctx,this.index=i,this._cachedDataOpts={},this._cachedMeta=this.getMeta(),this._type=this._cachedMeta.type,this.options=void 0,this._parsing=!1,this._data=void 0,this._objectData=void 0,this._sharedOptions=void 0,this._drawStart=void 0,this._drawCount=void 0,this.enableOptionSharing=!1,this.supportsDecimation=!1,this.$context=void 0,this._syncList=[],this.datasetElementType=new.target.datasetElementType,this.dataElementType=new.target.dataElementType,this.initialize()}initialize(){const t=this._cachedMeta;this.configure(),this.linkScales(),t._stacked=Ri(t.vScale,t),this.addElements(),this.options.fill&&!this.chart.isPluginEnabled("filler")&&console.warn("Tried to use the 'fill' option without the 'Filler' plugin enabled. Please import and register the 'Filler' plugin and make sure it is not disabled in the options")}updateIndex(t){this.index!==t&&fe(this._cachedMeta),this.index=t}linkScales(){const t=this.chart,i=this._cachedMeta,s=this.getDataset(),n=(u,h,g,m)=>u==="x"?h:u==="r"?m:g,a=i.xAxisID=O(s.xAxisID,qi(t,"x")),r=i.yAxisID=O(s.yAxisID,qi(t,"y")),o=i.rAxisID=O(s.rAxisID,qi(t,"r")),l=i.indexAxis,d=i.iAxisID=n(l,a,r,o),c=i.vAxisID=n(l,r,a,o);i.xScale=this.getScaleForId(a),i.yScale=this.getScaleForId(r),i.rScale=this.getScaleForId(o),i.iScale=this.getScaleForId(d),i.vScale=this.getScaleForId(c)}getDataset(){return this.chart.data.datasets[this.index]}getMeta(){return this.chart.getDatasetMeta(this.index)}getScaleForId(t){return this.chart.scales[t]}_getOtherScale(t){const i=this._cachedMeta;return t===i.iScale?i.vScale:i.iScale}reset(){this._update("reset")}_destroy(){const t=this._cachedMeta;this._data&&Us(this._data,this),t._stacked&&fe(t)}_dataCheck(){const t=this.getDataset(),i=t.data||(t.data=[]),s=this._data;if(V(i)){const n=this._cachedMeta;this._data=xl(i,n)}else if(s!==i){if(s){Us(s,this);const n=this._cachedMeta;fe(n),n._parsed=[]}i&&Object.isExtensible(i)&&co(i,this),this._syncList=[],this._data=i}}addElements(){const t=this._cachedMeta;this._dataCheck(),this.datasetElementType&&(t.dataset=new this.datasetElementType)}buildOrUpdateElements(t){const i=this._cachedMeta,s=this.getDataset();let n=!1;this._dataCheck();const a=i._stacked;i._stacked=Ri(i.vScale,i),i.stack!==s.stack&&(n=!0,fe(i),i.stack=s.stack),this._resyncElements(t),(n||a!==i._stacked)&&(cn(this,i._parsed),i._stacked=Ri(i.vScale,i))}configure(){const t=this.chart.config,i=t.datasetScopeKeys(this._type),s=t.getOptionScopes(this.getDataset(),i,!0);this.options=t.createResolver(s,this.getContext()),this._parsing=this.options.parsing,this._cachedDataOpts={}}parse(t,i){const{_cachedMeta:s,_data:n}=this,{iScale:a,_stacked:r}=s,o=a.axis;let l=t===0&&i===n.length?!0:s._sorted,d=t>0&&s._parsed[t-1],c,u,h;if(this._parsing===!1)s._parsed=n,s._sorted=!0,h=n;else{G(n[t])?h=this.parseArrayData(s,n,t,i):V(n[t])?h=this.parseObjectData(s,n,t,i):h=this.parsePrimitiveData(s,n,t,i);const g=()=>u[o]===null||d&&u[o]<d[o];for(c=0;c<i;++c)s._parsed[c+t]=u=h[c],l&&(g()&&(l=!1),d=u);s._sorted=l}r&&cn(this,h)}parsePrimitiveData(t,i,s,n){const{iScale:a,vScale:r}=t,o=a.axis,l=r.axis,d=a.getLabels(),c=a===r,u=new Array(n);let h,g,m;for(h=0,g=n;h<g;++h)m=h+s,u[h]={[o]:c||a.parse(d[m],m),[l]:r.parse(i[m],m)};return u}parseArrayData(t,i,s,n){const{xScale:a,yScale:r}=t,o=new Array(n);let l,d,c,u;for(l=0,d=n;l<d;++l)c=l+s,u=i[c],o[l]={x:a.parse(u[0],c),y:r.parse(u[1],c)};return o}parseObjectData(t,i,s,n){const{xScale:a,yScale:r}=t,{xAxisKey:o="x",yAxisKey:l="y"}=this._parsing,d=new Array(n);let c,u,h,g;for(c=0,u=n;c<u;++c)h=c+s,g=i[h],d[c]={x:a.parse(Nt(g,o),h),y:r.parse(Nt(g,l),h)};return d}getParsed(t){return this._cachedMeta._parsed[t]}getDataElement(t){return this._cachedMeta.data[t]}applyStack(t,i,s){const n=this.chart,a=this._cachedMeta,r=i[t.axis],o={keys:qa(n,!0),values:i._stacks[t.axis]._visualValues};return ln(o,r,a.index,{mode:s})}updateRangeFromParsed(t,i,s,n){const a=s[i.axis];let r=a===null?NaN:a;const o=n&&s._stacks[i.axis];n&&o&&(n.values=o,r=ln(n,a,this._cachedMeta.index)),t.min=Math.min(t.min,r),t.max=Math.max(t.max,r)}getMinMax(t,i){const s=this._cachedMeta,n=s._parsed,a=s._sorted&&t===s.iScale,r=n.length,o=this._getOtherScale(t),l=Sl(i,s,this.chart),d={min:Number.POSITIVE_INFINITY,max:Number.NEGATIVE_INFINITY},{min:c,max:u}=zl(o);let h,g;function m(){g=n[h];const p=g[o.axis];return!tt(g[t.axis])||c>p||u<p}for(h=0;h<r&&!(!m()&&(this.updateRangeFromParsed(d,t,g,l),a));++h);if(a){for(h=r-1;h>=0;--h)if(!m()){this.updateRangeFromParsed(d,t,g,l);break}}return d}getAllParsedValues(t){const i=this._cachedMeta._parsed,s=[];let n,a,r;for(n=0,a=i.length;n<a;++n)r=i[n][t.axis],tt(r)&&s.push(r);return s}getMaxOverflow(){return!1}getLabelAndValue(t){const i=this._cachedMeta,s=i.iScale,n=i.vScale,a=this.getParsed(t);return{label:s?""+s.getLabelForValue(a[s.axis]):"",value:n?""+n.getLabelForValue(a[n.axis]):""}}_update(t){const i=this._cachedMeta;this.update(t||"default"),i._clip=vl(O(this.options.clip,yl(i.xScale,i.yScale,this.getMaxOverflow())))}update(t){}draw(){const t=this._ctx,i=this.chart,s=this._cachedMeta,n=s.data||[],a=i.chartArea,r=[],o=this._drawStart||0,l=this._drawCount||n.length-o,d=this.options.drawActiveElementsOnTop;let c;for(s.dataset&&s.dataset.draw(t,a,o,l),c=o;c<o+l;++c){const u=n[c];u.hidden||(u.active&&d?r.push(u):u.draw(t,a))}for(c=0;c<r.length;++c)r[c].draw(t,a)}getStyle(t,i){const s=i?"active":"default";return t===void 0&&this._cachedMeta.dataset?this.resolveDatasetElementOptions(s):this.resolveDataElementOptions(t||0,s)}getContext(t,i,s){const n=this.getDataset();let a;if(t>=0&&t<this._cachedMeta.data.length){const r=this._cachedMeta.data[t];a=r.$context||(r.$context=$l(this.getContext(),t,r)),a.parsed=this.getParsed(t),a.raw=n.data[t],a.index=a.dataIndex=t}else a=this.$context||(this.$context=_l(this.chart.getContext(),this.index)),a.dataset=n,a.index=a.datasetIndex=this.index;return a.active=!!i,a.mode=s,a}resolveDatasetElementOptions(t){return this._resolveElementOptions(this.datasetElementType.id,t)}resolveDataElementOptions(t,i){return this._resolveElementOptions(this.dataElementType.id,i,t)}_resolveElementOptions(t,i="default",s){const n=i==="active",a=this._cachedDataOpts,r=t+"-"+i,o=a[r],l=this.enableOptionSharing&&Ie(s);if(o)return un(o,l);const d=this.chart.config,c=d.datasetElementScopeKeys(this._type,t),u=n?[`${t}Hover`,"hover",t,""]:[t,""],h=d.getOptionScopes(this.getDataset(),c),g=Object.keys(Z.elements[t]),m=()=>this.getContext(s,n,i),p=d.resolveNamedOptions(h,g,m,u);return p.$shared&&(p.$shared=l,a[r]=Object.freeze(un(p,l))),p}_resolveAnimations(t,i,s){const n=this.chart,a=this._cachedDataOpts,r=`animation-${i}`,o=a[r];if(o)return o;let l;if(n.options.animation!==!1){const c=this.chart.config,u=c.datasetAnimationScopeKeys(this._type,i),h=c.getOptionScopes(this.getDataset(),u);l=c.createResolver(h,this.getContext(t,s,i))}const d=new Ra(n,l&&l.animations);return l&&l._cacheable&&(a[r]=Object.freeze(d)),d}getSharedOptions(t){if(t.$shared)return this._sharedOptions||(this._sharedOptions=Object.assign({},t))}includeOptions(t,i){return!i||Fi(t)||this.chart._animationsDisabled}_getSharedOptions(t,i){const s=this.resolveDataElementOptions(t,i),n=this._sharedOptions,a=this.getSharedOptions(s),r=this.includeOptions(i,a)||a!==n;return this.updateSharedOptions(a,i,s),{sharedOptions:a,includeOptions:r}}updateElement(t,i,s,n){Fi(n)?Object.assign(t,s):this._resolveAnimations(i,n).update(t,s)}updateSharedOptions(t,i,s){t&&!Fi(i)&&this._resolveAnimations(void 0,i).update(t,s)}_setStyle(t,i,s,n){t.active=n;const a=this.getStyle(i,n);this._resolveAnimations(i,s,n).update(t,{options:!n&&this.getSharedOptions(a)||a})}removeHoverStyle(t,i,s){this._setStyle(t,s,"active",!1)}setHoverStyle(t,i,s){this._setStyle(t,s,"active",!0)}_removeDatasetHoverStyle(){const t=this._cachedMeta.dataset;t&&this._setStyle(t,void 0,"active",!1)}_setDatasetHoverStyle(){const t=this._cachedMeta.dataset;t&&this._setStyle(t,void 0,"active",!0)}_resyncElements(t){const i=this._data,s=this._cachedMeta.data;for(const[o,l,d]of this._syncList)this[o](l,d);this._syncList=[];const n=s.length,a=i.length,r=Math.min(a,n);r&&this.parse(0,r),a>n?this._insertElements(n,a-n,t):a<n&&this._removeElements(a,n-a)}_insertElements(t,i,s=!0){const n=this._cachedMeta,a=n.data,r=t+i;let o;const l=d=>{for(d.length+=i,o=d.length-1;o>=r;o--)d[o]=d[o-i]};for(l(a),o=t;o<r;++o)a[o]=new this.dataElementType;this._parsing&&l(n._parsed),this.parse(t,i),s&&this.updateElements(a,t,i,"reset")}updateElements(t,i,s,n){}_removeElements(t,i){const s=this._cachedMeta;if(this._parsing){const n=s._parsed.splice(t,i);s._stacked&&fe(s,n)}s.data.splice(t,i)}_sync(t){if(this._parsing)this._syncList.push(t);else{const[i,s,n]=t;this[i](s,n)}this.chart._dataChanges.push([this.index,...t])}_onDataPush(){const t=arguments.length;this._sync(["_insertElements",this.getDataset().data.length-t,t])}_onDataPop(){this._sync(["_removeElements",this._cachedMeta.data.length-1,1])}_onDataShift(){this._sync(["_removeElements",0,1])}_onDataSplice(t,i){i&&this._sync(["_removeElements",t,i]);const s=arguments.length-2;s&&this._sync(["_insertElements",t,s])}_onDataUnshift(){this._sync(["_insertElements",0,arguments.length])}}L(zt,"defaults",{}),L(zt,"datasetElementType",null),L(zt,"dataElementType",null);function Tl(e,t){if(!e._cache.$bar){const i=e.getMatchingVisibleMetas(t);let s=[];for(let n=0,a=i.length;n<a;n++)s=s.concat(i[n].controller.getAllParsedValues(e));e._cache.$bar=va(s.sort((n,a)=>n-a))}return e._cache.$bar}function Ml(e){const t=e.iScale,i=Tl(t,e.type);let s=t._length,n,a,r,o;const l=()=>{r===32767||r===-32768||(Ie(o)&&(s=Math.min(s,Math.abs(r-o)||s)),o=r)};for(n=0,a=i.length;n<a;++n)r=t.getPixelForValue(i[n]),l();for(o=void 0,n=0,a=t.ticks.length;n<a;++n)r=t.getPixelForTick(n),l();return s}function El(e,t,i,s){const n=i.barThickness;let a,r;return H(n)?(a=t.min*i.categoryPercentage,r=i.barPercentage):(a=n*s,r=1),{chunk:a/s,ratio:r,start:t.pixels[e]-a/2}}function Cl(e,t,i,s){const n=t.pixels,a=n[e];let r=e>0?n[e-1]:null,o=e<n.length-1?n[e+1]:null;const l=i.categoryPercentage;r===null&&(r=a-(o===null?t.end-t.start:o-a)),o===null&&(o=a+a-r);const d=a-(a-Math.min(r,o))/2*l;return{chunk:Math.abs(o-r)/2*l/s,ratio:i.barPercentage,start:d}}function Ll(e,t,i,s){const n=i.parse(e[0],s),a=i.parse(e[1],s),r=Math.min(n,a),o=Math.max(n,a);let l=r,d=o;Math.abs(r)>Math.abs(o)&&(l=o,d=r),t[i.axis]=d,t._custom={barStart:l,barEnd:d,start:n,end:a,min:r,max:o}}function Fa(e,t,i,s){return G(e)?Ll(e,t,i,s):t[i.axis]=i.parse(e,s),t}function hn(e,t,i,s){const n=e.iScale,a=e.vScale,r=n.getLabels(),o=n===a,l=[];let d,c,u,h;for(d=i,c=i+s;d<c;++d)h=t[d],u={},u[n.axis]=o||n.parse(r[d],d),l.push(Fa(h,u,a,d));return l}function Ni(e){return e&&e.barStart!==void 0&&e.barEnd!==void 0}function Al(e,t,i){return e!==0?Tt(e):(t.isHorizontal()?1:-1)*(t.min>=i?1:-1)}function Bl(e){let t,i,s,n,a;return e.horizontal?(t=e.base>e.x,i="left",s="right"):(t=e.base<e.y,i="bottom",s="top"),t?(n="end",a="start"):(n="start",a="end"),{start:i,end:s,reverse:t,top:n,bottom:a}}function Il(e,t,i,s){let n=t.borderSkipped;const a={};if(!n){e.borderSkipped=a;return}if(n===!0){e.borderSkipped={top:!0,right:!0,bottom:!0,left:!0};return}const{start:r,end:o,reverse:l,top:d,bottom:c}=Bl(e);n==="middle"&&i&&(e.enableBorderRadius=!0,(i._top||0)===s?n=d:(i._bottom||0)===s?n=c:(a[gn(c,r,o,l)]=!0,n=d)),a[gn(n,r,o,l)]=!0,e.borderSkipped=a}function gn(e,t,i,s){return s?(e=jl(e,t,i),e=mn(e,i,t)):e=mn(e,t,i),e}function jl(e,t,i){return e===t?i:e===i?t:e}function mn(e,t,i){return e==="start"?t:e==="end"?i:e}function Pl(e,{inflateAmount:t},i){e.inflateAmount=t==="auto"?i===1?.33:0:t}class ni extends zt{parsePrimitiveData(t,i,s,n){return hn(t,i,s,n)}parseArrayData(t,i,s,n){return hn(t,i,s,n)}parseObjectData(t,i,s,n){const{iScale:a,vScale:r}=t,{xAxisKey:o="x",yAxisKey:l="y"}=this._parsing,d=a.axis==="x"?o:l,c=r.axis==="x"?o:l,u=[];let h,g,m,p;for(h=s,g=s+n;h<g;++h)p=i[h],m={},m[a.axis]=a.parse(Nt(p,d),h),u.push(Fa(Nt(p,c),m,r,h));return u}updateRangeFromParsed(t,i,s,n){super.updateRangeFromParsed(t,i,s,n);const a=s._custom;a&&i===this._cachedMeta.vScale&&(t.min=Math.min(t.min,a.min),t.max=Math.max(t.max,a.max))}getMaxOverflow(){return 0}getLabelAndValue(t){const i=this._cachedMeta,{iScale:s,vScale:n}=i,a=this.getParsed(t),r=a._custom,o=Ni(r)?"["+r.start+", "+r.end+"]":""+n.getLabelForValue(a[n.axis]);return{label:""+s.getLabelForValue(a[s.axis]),value:o}}initialize(){this.enableOptionSharing=!0,super.initialize();const t=this._cachedMeta;t.stack=this.getDataset().stack}update(t){const i=this._cachedMeta;this.updateElements(i.data,0,i.data.length,t)}updateElements(t,i,s,n){const a=n==="reset",{index:r,_cachedMeta:{vScale:o}}=this,l=o.getBasePixel(),d=o.isHorizontal(),c=this._getRuler(),{sharedOptions:u,includeOptions:h}=this._getSharedOptions(i,n);for(let g=i;g<i+s;g++){const m=this.getParsed(g),p=a||H(m[o.axis])?{base:l,head:l}:this._calculateBarValuePixels(g),f=this._calculateBarIndexPixels(g,c),b=(m._stacks||{})[o.axis],v={horizontal:d,base:p.base,enableBorderRadius:!b||Ni(m._custom)||r===b._top||r===b._bottom,x:d?p.head:f.center,y:d?f.center:p.head,height:d?f.size:Math.abs(p.size),width:d?Math.abs(p.size):f.size};h&&(v.options=u||this.resolveDataElementOptions(g,t[g].active?"active":n));const w=v.options||t[g].options;Il(v,w,b,r),Pl(v,w,c.ratio),this.updateElement(t[g],g,v,n)}}_getStacks(t,i){const{iScale:s}=this._cachedMeta,n=s.getMatchingVisibleMetas(this._type).filter(c=>c.controller.options.grouped),a=s.options.stacked,r=[],o=this._cachedMeta.controller.getParsed(i),l=o&&o[s.axis],d=c=>{const u=c._parsed.find(g=>g[s.axis]===l),h=u&&u[c.vScale.axis];if(H(h)||isNaN(h))return!0};for(const c of n)if(!(i!==void 0&&d(c))&&((a===!1||r.indexOf(c.stack)===-1||a===void 0&&c.stack===void 0)&&r.push(c.stack),c.index===t))break;return r.length||r.push(void 0),r}_getStackCount(t){return this._getStacks(void 0,t).length}_getAxisCount(){return this._getAxis().length}getFirstScaleIdForIndexAxis(){const t=this.chart.scales,i=this.chart.options.indexAxis;return Object.keys(t).filter(s=>t[s].axis===i).shift()}_getAxis(){const t={},i=this.getFirstScaleIdForIndexAxis();for(const s of this.chart.data.datasets)t[O(this.chart.options.indexAxis==="x"?s.xAxisID:s.yAxisID,i)]=!0;return Object.keys(t)}_getStackIndex(t,i,s){const n=this._getStacks(t,s),a=i!==void 0?n.indexOf(i):-1;return a===-1?n.length-1:a}_getRuler(){const t=this.options,i=this._cachedMeta,s=i.iScale,n=[];let a,r;for(a=0,r=i.data.length;a<r;++a)n.push(s.getPixelForValue(this.getParsed(a)[s.axis],a));const o=t.barThickness;return{min:o||Ml(i),pixels:n,start:s._startPixel,end:s._endPixel,stackCount:this._getStackCount(),scale:s,grouped:t.grouped,ratio:o?1:t.categoryPercentage*t.barPercentage}}_calculateBarValuePixels(t){const{_cachedMeta:{vScale:i,_stacked:s,index:n},options:{base:a,minBarLength:r}}=this,o=a||0,l=this.getParsed(t),d=l._custom,c=Ni(d);let u=l[i.axis],h=0,g=s?this.applyStack(i,l,s):u,m,p;g!==u&&(h=g-u,g=u),c&&(u=d.barStart,g=d.barEnd-d.barStart,u!==0&&Tt(u)!==Tt(d.barEnd)&&(h=0),h+=u);const f=!H(a)&&!c?a:h;let b=i.getPixelForValue(f);if(this.chart.getDataVisibility(t)?m=i.getPixelForValue(h+g):m=b,p=m-b,Math.abs(p)<r){p=Al(p,i,o)*r,u===o&&(b-=p/2);const v=i.getPixelForDecimal(0),w=i.getPixelForDecimal(1),y=Math.min(v,w),x=Math.max(v,w);b=Math.max(Math.min(b,x),y),m=b+p,s&&!c&&(l._stacks[i.axis]._visualValues[n]=i.getValueForPixel(m)-i.getValueForPixel(b))}if(b===i.getPixelForValue(o)){const v=Tt(p)*i.getLineWidthForValue(o)/2;b+=v,p-=v}return{size:p,base:b,head:m,center:m+p/2}}_calculateBarIndexPixels(t,i){const s=i.scale,n=this.options,a=n.skipNull,r=O(n.maxBarThickness,1/0);let o,l;const d=this._getAxisCount();if(i.grouped){const c=a?this._getStackCount(t):i.stackCount,u=n.barThickness==="flex"?Cl(t,i,n,c*d):El(t,i,n,c*d),h=this.chart.options.indexAxis==="x"?this.getDataset().xAxisID:this.getDataset().yAxisID,g=this._getAxis().indexOf(O(h,this.getFirstScaleIdForIndexAxis())),m=this._getStackIndex(this.index,this._cachedMeta.stack,a?t:void 0)+g;o=u.start+u.chunk*m+u.chunk/2,l=Math.min(r,u.chunk*u.ratio)}else o=s.getPixelForValue(this.getParsed(t)[s.axis],t),l=Math.min(r,i.min*i.ratio);return{base:o-l/2,head:o+l/2,center:o,size:l}}draw(){const t=this._cachedMeta,i=t.vScale,s=t.data,n=s.length;let a=0;for(;a<n;++a)this.getParsed(a)[i.axis]!==null&&!s[a].hidden&&s[a].draw(this._ctx)}}L(ni,"id","bar"),L(ni,"defaults",{datasetElementType:!1,dataElementType:"bar",categoryPercentage:.8,barPercentage:.9,grouped:!0,animations:{numbers:{type:"number",properties:["x","y","base","width","height"]}}}),L(ni,"overrides",{scales:{_index_:{type:"category",offset:!0,grid:{offset:!0}},_value_:{type:"linear",beginAtZero:!0}}});class ai extends zt{initialize(){this.enableOptionSharing=!0,super.initialize()}parsePrimitiveData(t,i,s,n){const a=super.parsePrimitiveData(t,i,s,n);for(let r=0;r<a.length;r++)a[r]._custom=this.resolveDataElementOptions(r+s).radius;return a}parseArrayData(t,i,s,n){const a=super.parseArrayData(t,i,s,n);for(let r=0;r<a.length;r++){const o=i[s+r];a[r]._custom=O(o[2],this.resolveDataElementOptions(r+s).radius)}return a}parseObjectData(t,i,s,n){const a=super.parseObjectData(t,i,s,n);for(let r=0;r<a.length;r++){const o=i[s+r];a[r]._custom=O(o&&o.r&&+o.r,this.resolveDataElementOptions(r+s).radius)}return a}getMaxOverflow(){const t=this._cachedMeta.data;let i=0;for(let s=t.length-1;s>=0;--s)i=Math.max(i,t[s].size(this.resolveDataElementOptions(s))/2);return i>0&&i}getLabelAndValue(t){const i=this._cachedMeta,s=this.chart.data.labels||[],{xScale:n,yScale:a}=i,r=this.getParsed(t),o=n.getLabelForValue(r.x),l=a.getLabelForValue(r.y),d=r._custom;return{label:s[t]||"",value:"("+o+", "+l+(d?", "+d:"")+")"}}update(t){const i=this._cachedMeta.data;this.updateElements(i,0,i.length,t)}updateElements(t,i,s,n){const a=n==="reset",{iScale:r,vScale:o}=this._cachedMeta,{sharedOptions:l,includeOptions:d}=this._getSharedOptions(i,n),c=r.axis,u=o.axis;for(let h=i;h<i+s;h++){const g=t[h],m=!a&&this.getParsed(h),p={},f=p[c]=a?r.getPixelForDecimal(.5):r.getPixelForValue(m[c]),b=p[u]=a?o.getBasePixel():o.getPixelForValue(m[u]);p.skip=isNaN(f)||isNaN(b),d&&(p.options=l||this.resolveDataElementOptions(h,g.active?"active":n),a&&(p.options.radius=0)),this.updateElement(g,h,p,n)}}resolveDataElementOptions(t,i){const s=this.getParsed(t);let n=super.resolveDataElementOptions(t,i);n.$shared&&(n=Object.assign({},n,{$shared:!1}));const a=n.radius;return i!=="active"&&(n.radius=0),n.radius+=O(s&&s._custom,a),n}}L(ai,"id","bubble"),L(ai,"defaults",{datasetElementType:!1,dataElementType:"point",animations:{numbers:{type:"number",properties:["x","y","borderWidth","radius"]}}}),L(ai,"overrides",{scales:{x:{type:"linear"},y:{type:"linear"}}});function Dl(e,t,i){let s=1,n=1,a=0,r=0;if(t<J){const o=e,l=o+t,d=Math.cos(o),c=Math.sin(o),u=Math.cos(l),h=Math.sin(l),g=(w,y,x)=>je(w,o,l,!0)?1:Math.max(y,y*i,x,x*i),m=(w,y,x)=>je(w,o,l,!0)?-1:Math.min(y,y*i,x,x*i),p=g(0,d,u),f=g(it,c,h),b=m(W,d,u),v=m(W+it,c,h);s=(p-b)/2,n=(f-v)/2,a=-(p+b)/2,r=-(f+v)/2}return{ratioX:s,ratioY:n,offsetX:a,offsetY:r}}class Gt extends zt{constructor(t,i){super(t,i),this.enableOptionSharing=!0,this.innerRadius=void 0,this.outerRadius=void 0,this.offsetX=void 0,this.offsetY=void 0}linkScales(){}parse(t,i){const s=this.getDataset().data,n=this._cachedMeta;if(this._parsing===!1)n._parsed=s;else{let a=l=>+s[l];if(V(s[t])){const{key:l="value"}=this._parsing;a=d=>+Nt(s[d],l)}let r,o;for(r=t,o=t+i;r<o;++r)n._parsed[r]=a(r)}}_getRotation(){return wt(this.options.rotation-90)}_getCircumference(){return wt(this.options.circumference)}_getRotationExtents(){let t=J,i=-J;for(let s=0;s<this.chart.data.datasets.length;++s)if(this.chart.isDatasetVisible(s)&&this.chart.getDatasetMeta(s).type===this._type){const n=this.chart.getDatasetMeta(s).controller,a=n._getRotation(),r=n._getCircumference();t=Math.min(t,a),i=Math.max(i,a+r)}return{rotation:t,circumference:i-t}}update(t){const i=this.chart,{chartArea:s}=i,n=this._cachedMeta,a=n.data,r=this.getMaxBorderWidth()+this.getMaxOffset(a)+this.options.spacing,o=Math.max((Math.min(s.width,s.height)-r)/2,0),l=Math.min(Xr(this.options.cutout,o),1),d=this._getRingWeight(this.index),{circumference:c,rotation:u}=this._getRotationExtents(),{ratioX:h,ratioY:g,offsetX:m,offsetY:p}=Dl(u,c,l),f=(s.width-r)/h,b=(s.height-r)/g,v=Math.max(Math.min(f,b)/2,0),w=ma(this.options.radius,v),y=Math.max(w*l,0),x=(w-y)/this._getVisibleDatasetWeightTotal();this.offsetX=m*w,this.offsetY=p*w,n.total=this.calculateTotal(),this.outerRadius=w-x*this._getRingWeightOffset(this.index),this.innerRadius=Math.max(this.outerRadius-x*d,0),this.updateElements(a,0,a.length,t)}_circumference(t,i){const s=this.options,n=this._cachedMeta,a=this._getCircumference();return i&&s.animation.animateRotate||!this.chart.getDataVisibility(t)||n._parsed[t]===null||n.data[t].hidden?0:this.calculateCircumference(n._parsed[t]*a/J)}updateElements(t,i,s,n){const a=n==="reset",r=this.chart,o=r.chartArea,d=r.options.animation,c=(o.left+o.right)/2,u=(o.top+o.bottom)/2,h=a&&d.animateScale,g=h?0:this.innerRadius,m=h?0:this.outerRadius,{sharedOptions:p,includeOptions:f}=this._getSharedOptions(i,n);let b=this._getRotation(),v;for(v=0;v<i;++v)b+=this._circumference(v,a);for(v=i;v<i+s;++v){const w=this._circumference(v,a),y=t[v],x={x:c+this.offsetX,y:u+this.offsetY,startAngle:b,endAngle:b+w,circumference:w,outerRadius:m,innerRadius:g};f&&(x.options=p||this.resolveDataElementOptions(v,y.active?"active":n)),b+=w,this.updateElement(y,v,x,n)}}calculateTotal(){const t=this._cachedMeta,i=t.data;let s=0,n;for(n=0;n<i.length;n++){const a=t._parsed[n];a!==null&&!isNaN(a)&&this.chart.getDataVisibility(n)&&!i[n].hidden&&(s+=Math.abs(a))}return s}calculateCircumference(t){const i=this._cachedMeta.total;return i>0&&!isNaN(t)?J*(Math.abs(t)/i):0}getLabelAndValue(t){const i=this._cachedMeta,s=this.chart,n=s.data.labels||[],a=Fe(i._parsed[t],s.options.locale);return{label:n[t]||"",value:a}}getMaxBorderWidth(t){let i=0;const s=this.chart;let n,a,r,o,l;if(!t){for(n=0,a=s.data.datasets.length;n<a;++n)if(s.isDatasetVisible(n)){r=s.getDatasetMeta(n),t=r.data,o=r.controller;break}}if(!t)return 0;for(n=0,a=t.length;n<a;++n)l=o.resolveDataElementOptions(n),l.borderAlign!=="inner"&&(i=Math.max(i,l.borderWidth||0,l.hoverBorderWidth||0));return i}getMaxOffset(t){let i=0;for(let s=0,n=t.length;s<n;++s){const a=this.resolveDataElementOptions(s);i=Math.max(i,a.offset||0,a.hoverOffset||0)}return i}_getRingWeightOffset(t){let i=0;for(let s=0;s<t;++s)this.chart.isDatasetVisible(s)&&(i+=this._getRingWeight(s));return i}_getRingWeight(t){return Math.max(O(this.chart.data.datasets[t].weight,1),0)}_getVisibleDatasetWeightTotal(){return this._getRingWeightOffset(this.chart.data.datasets.length)||1}}L(Gt,"id","doughnut"),L(Gt,"defaults",{datasetElementType:!1,dataElementType:"arc",animation:{animateRotate:!0,animateScale:!1},animations:{numbers:{type:"number",properties:["circumference","endAngle","innerRadius","outerRadius","startAngle","x","y","offset","borderWidth","spacing"]}},cutout:"50%",rotation:0,circumference:360,radius:"100%",spacing:0,indexAxis:"r"}),L(Gt,"descriptors",{_scriptable:t=>t!=="spacing",_indexable:t=>t!=="spacing"&&!t.startsWith("borderDash")&&!t.startsWith("hoverBorderDash")}),L(Gt,"overrides",{aspectRatio:1,plugins:{legend:{labels:{generateLabels(t){const i=t.data,{labels:{pointStyle:s,textAlign:n,color:a,useBorderRadius:r,borderRadius:o}}=t.legend.options;return i.labels.length&&i.datasets.length?i.labels.map((l,d)=>{const u=t.getDatasetMeta(0).controller.getStyle(d);return{text:l,fillStyle:u.backgroundColor,fontColor:a,hidden:!t.getDataVisibility(d),lineDash:u.borderDash,lineDashOffset:u.borderDashOffset,lineJoin:u.borderJoinStyle,lineWidth:u.borderWidth,strokeStyle:u.borderColor,textAlign:n,pointStyle:s,borderRadius:r&&(o||u.borderRadius),index:d}}):[]}},onClick(t,i,s){s.chart.toggleDataVisibility(i.index),s.chart.update()}}}});class ri extends zt{initialize(){this.enableOptionSharing=!0,this.supportsDecimation=!0,super.initialize()}update(t){const i=this._cachedMeta,{dataset:s,data:n=[],_dataset:a}=i,r=this.chart._animationsDisabled;let{start:o,count:l}=za(i,n,r);this._drawStart=o,this._drawCount=l,ka(i)&&(o=0,l=n.length),s._chart=this.chart,s._datasetIndex=this.index,s._decimated=!!a._decimated,s.points=n;const d=this.resolveDatasetElementOptions(t);this.options.showLine||(d.borderWidth=0),d.segment=this.options.segment,this.updateElement(s,void 0,{animated:!r,options:d},t),this.updateElements(n,o,l,t)}updateElements(t,i,s,n){const a=n==="reset",{iScale:r,vScale:o,_stacked:l,_dataset:d}=this._cachedMeta,{sharedOptions:c,includeOptions:u}=this._getSharedOptions(i,n),h=r.axis,g=o.axis,{spanGaps:m,segment:p}=this.options,f=he(m)?m:Number.POSITIVE_INFINITY,b=this.chart._animationsDisabled||a||n==="none",v=i+s,w=t.length;let y=i>0&&this.getParsed(i-1);for(let x=0;x<w;++x){const z=t[x],S=b?z:{};if(x<i||x>=v){S.skip=!0;continue}const $=this.getParsed(x),C=H($[g]),T=S[h]=r.getPixelForValue($[h],x),B=S[g]=a||C?o.getBasePixel():o.getPixelForValue(l?this.applyStack(o,$,l):$[g],x);S.skip=isNaN(T)||isNaN(B)||C,S.stop=x>0&&Math.abs($[h]-y[h])>f,p&&(S.parsed=$,S.raw=d.data[x]),u&&(S.options=c||this.resolveDataElementOptions(x,z.active?"active":n)),b||this.updateElement(z,x,S,n),y=$}}getMaxOverflow(){const t=this._cachedMeta,i=t.dataset,s=i.options&&i.options.borderWidth||0,n=t.data||[];if(!n.length)return s;const a=n[0].size(this.resolveDataElementOptions(0)),r=n[n.length-1].size(this.resolveDataElementOptions(n.length-1));return Math.max(s,a,r)/2}draw(){const t=this._cachedMeta;t.dataset.updateControlPoints(this.chart.chartArea,t.iScale.axis),super.draw()}}L(ri,"id","line"),L(ri,"defaults",{datasetElementType:"line",dataElementType:"point",showLine:!0,spanGaps:!1}),L(ri,"overrides",{scales:{_index_:{type:"category"},_value_:{type:"linear"}}});class Le extends zt{constructor(t,i){super(t,i),this.innerRadius=void 0,this.outerRadius=void 0}getLabelAndValue(t){const i=this._cachedMeta,s=this.chart,n=s.data.labels||[],a=Fe(i._parsed[t].r,s.options.locale);return{label:n[t]||"",value:a}}parseObjectData(t,i,s,n){return La.bind(this)(t,i,s,n)}update(t){const i=this._cachedMeta.data;this._updateRadius(),this.updateElements(i,0,i.length,t)}getMinMax(){const t=this._cachedMeta,i={min:Number.POSITIVE_INFINITY,max:Number.NEGATIVE_INFINITY};return t.data.forEach((s,n)=>{const a=this.getParsed(n).r;!isNaN(a)&&this.chart.getDataVisibility(n)&&(a<i.min&&(i.min=a),a>i.max&&(i.max=a))}),i}_updateRadius(){const t=this.chart,i=t.chartArea,s=t.options,n=Math.min(i.right-i.left,i.bottom-i.top),a=Math.max(n/2,0),r=Math.max(s.cutoutPercentage?a/100*s.cutoutPercentage:1,0),o=(a-r)/t.getVisibleDatasetCount();this.outerRadius=a-o*this.index,this.innerRadius=this.outerRadius-o}updateElements(t,i,s,n){const a=n==="reset",r=this.chart,l=r.options.animation,d=this._cachedMeta.rScale,c=d.xCenter,u=d.yCenter,h=d.getIndexAngle(0)-.5*W;let g=h,m;const p=360/this.countVisibleElements();for(m=0;m<i;++m)g+=this._computeAngle(m,n,p);for(m=i;m<i+s;m++){const f=t[m];let b=g,v=g+this._computeAngle(m,n,p),w=r.getDataVisibility(m)?d.getDistanceFromCenterForValue(this.getParsed(m).r):0;g=v,a&&(l.animateScale&&(w=0),l.animateRotate&&(b=v=h));const y={x:c,y:u,innerRadius:0,outerRadius:w,startAngle:b,endAngle:v,options:this.resolveDataElementOptions(m,f.active?"active":n)};this.updateElement(f,m,y,n)}}countVisibleElements(){const t=this._cachedMeta;let i=0;return t.data.forEach((s,n)=>{!isNaN(this.getParsed(n).r)&&this.chart.getDataVisibility(n)&&i++}),i}_computeAngle(t,i,s){return this.chart.getDataVisibility(t)?wt(this.resolveDataElementOptions(t,i).angle||s):0}}L(Le,"id","polarArea"),L(Le,"defaults",{dataElementType:"arc",animation:{animateRotate:!0,animateScale:!0},animations:{numbers:{type:"number",properties:["x","y","startAngle","endAngle","innerRadius","outerRadius"]}},indexAxis:"r",startAngle:0}),L(Le,"overrides",{aspectRatio:1,plugins:{legend:{labels:{generateLabels(t){const i=t.data;if(i.labels.length&&i.datasets.length){const{labels:{pointStyle:s,color:n}}=t.legend.options;return i.labels.map((a,r)=>{const l=t.getDatasetMeta(0).controller.getStyle(r);return{text:a,fillStyle:l.backgroundColor,strokeStyle:l.borderColor,fontColor:n,lineWidth:l.borderWidth,pointStyle:s,hidden:!t.getDataVisibility(r),index:r}})}return[]}},onClick(t,i,s){s.chart.toggleDataVisibility(i.index),s.chart.update()}}},scales:{r:{type:"radialLinear",angleLines:{display:!1},beginAtZero:!0,grid:{circular:!0},pointLabels:{display:!1},startAngle:0}}});class es extends Gt{}L(es,"id","pie"),L(es,"defaults",{cutout:0,rotation:0,circumference:360,radius:"100%"});class oi extends zt{getLabelAndValue(t){const i=this._cachedMeta.vScale,s=this.getParsed(t);return{label:i.getLabels()[t],value:""+i.getLabelForValue(s[i.axis])}}parseObjectData(t,i,s,n){return La.bind(this)(t,i,s,n)}update(t){const i=this._cachedMeta,s=i.dataset,n=i.data||[],a=i.iScale.getLabels();if(s.points=n,t!=="resize"){const r=this.resolveDatasetElementOptions(t);this.options.showLine||(r.borderWidth=0);const o={_loop:!0,_fullLoop:a.length===n.length,options:r};this.updateElement(s,void 0,o,t)}this.updateElements(n,0,n.length,t)}updateElements(t,i,s,n){const a=this._cachedMeta.rScale,r=n==="reset";for(let o=i;o<i+s;o++){const l=t[o],d=this.resolveDataElementOptions(o,l.active?"active":n),c=a.getPointPositionForValue(o,this.getParsed(o).r),u=r?a.xCenter:c.x,h=r?a.yCenter:c.y,g={x:u,y:h,angle:c.angle,skip:isNaN(u)||isNaN(h),options:d};this.updateElement(l,o,g,n)}}}L(oi,"id","radar"),L(oi,"defaults",{datasetElementType:"line",dataElementType:"point",indexAxis:"r",showLine:!0,elements:{line:{fill:"start"}}}),L(oi,"overrides",{aspectRatio:1,scales:{r:{type:"radialLinear"}}});class li extends zt{getLabelAndValue(t){const i=this._cachedMeta,s=this.chart.data.labels||[],{xScale:n,yScale:a}=i,r=this.getParsed(t),o=n.getLabelForValue(r.x),l=a.getLabelForValue(r.y);return{label:s[t]||"",value:"("+o+", "+l+")"}}update(t){const i=this._cachedMeta,{data:s=[]}=i,n=this.chart._animationsDisabled;let{start:a,count:r}=za(i,s,n);if(this._drawStart=a,this._drawCount=r,ka(i)&&(a=0,r=s.length),this.options.showLine){this.datasetElementType||this.addElements();const{dataset:o,_dataset:l}=i;o._chart=this.chart,o._datasetIndex=this.index,o._decimated=!!l._decimated,o.points=s;const d=this.resolveDatasetElementOptions(t);d.segment=this.options.segment,this.updateElement(o,void 0,{animated:!n,options:d},t)}else this.datasetElementType&&(delete i.dataset,this.datasetElementType=!1);this.updateElements(s,a,r,t)}addElements(){const{showLine:t}=this.options;!this.datasetElementType&&t&&(this.datasetElementType=this.chart.registry.getElement("line")),super.addElements()}updateElements(t,i,s,n){const a=n==="reset",{iScale:r,vScale:o,_stacked:l,_dataset:d}=this._cachedMeta,c=this.resolveDataElementOptions(i,n),u=this.getSharedOptions(c),h=this.includeOptions(n,u),g=r.axis,m=o.axis,{spanGaps:p,segment:f}=this.options,b=he(p)?p:Number.POSITIVE_INFINITY,v=this.chart._animationsDisabled||a||n==="none";let w=i>0&&this.getParsed(i-1);for(let y=i;y<i+s;++y){const x=t[y],z=this.getParsed(y),S=v?x:{},$=H(z[m]),C=S[g]=r.getPixelForValue(z[g],y),T=S[m]=a||$?o.getBasePixel():o.getPixelForValue(l?this.applyStack(o,z,l):z[m],y);S.skip=isNaN(C)||isNaN(T)||$,S.stop=y>0&&Math.abs(z[g]-w[g])>b,f&&(S.parsed=z,S.raw=d.data[y]),h&&(S.options=u||this.resolveDataElementOptions(y,x.active?"active":n)),v||this.updateElement(x,y,S,n),w=z}this.updateSharedOptions(u,n,c)}getMaxOverflow(){const t=this._cachedMeta,i=t.data||[];if(!this.options.showLine){let o=0;for(let l=i.length-1;l>=0;--l)o=Math.max(o,i[l].size(this.resolveDataElementOptions(l))/2);return o>0&&o}const s=t.dataset,n=s.options&&s.options.borderWidth||0;if(!i.length)return n;const a=i[0].size(this.resolveDataElementOptions(0)),r=i[i.length-1].size(this.resolveDataElementOptions(i.length-1));return Math.max(n,a,r)/2}}L(li,"id","scatter"),L(li,"defaults",{datasetElementType:!1,dataElementType:"point",showLine:!1,fill:!1}),L(li,"overrides",{interaction:{mode:"point"},scales:{x:{type:"linear"},y:{type:"linear"}}});var Ol=Object.freeze({__proto__:null,BarController:ni,BubbleController:ai,DoughnutController:Gt,LineController:ri,PieController:es,PolarAreaController:Le,RadarController:oi,ScatterController:li});function Xt(){throw new Error("This method is not implemented: Check that a complete date adapter is provided.")}class Es{constructor(t){L(this,"options");this.options=t||{}}static override(t){Object.assign(Es.prototype,t)}init(){}formats(){return Xt()}parse(){return Xt()}format(){return Xt()}add(){return Xt()}diff(){return Xt()}startOf(){return Xt()}endOf(){return Xt()}}var Rl={_date:Es};function ql(e,t,i,s){const{controller:n,data:a,_sorted:r}=e,o=n._cachedMeta.iScale,l=e.dataset&&e.dataset.options?e.dataset.options.spanGaps:null;if(o&&t===o.axis&&t!=="r"&&r&&a.length){const d=o._reversePixels?oo:Bt;if(s){if(n._sharedOptions){const c=a[0],u=typeof c.getRange=="function"&&c.getRange(t);if(u){const h=d(a,t,i-u),g=d(a,t,i+u);return{lo:h.lo,hi:g.hi}}}}else{const c=d(a,t,i);if(l){const{vScale:u}=n._cachedMeta,{_parsed:h}=e,g=h.slice(0,c.lo+1).reverse().findIndex(p=>!H(p[u.axis]));c.lo-=Math.max(0,g);const m=h.slice(c.hi).findIndex(p=>!H(p[u.axis]));c.hi+=Math.max(0,m)}return c}}return{lo:0,hi:a.length-1}}function Mi(e,t,i,s,n){const a=e.getSortedVisibleDatasetMetas(),r=i[t];for(let o=0,l=a.length;o<l;++o){const{index:d,data:c}=a[o],{lo:u,hi:h}=ql(a[o],t,r,n);for(let g=u;g<=h;++g){const m=c[g];m.skip||s(m,d,g)}}}function Fl(e){const t=e.indexOf("x")!==-1,i=e.indexOf("y")!==-1;return function(s,n){const a=t?Math.abs(s.x-n.x):0,r=i?Math.abs(s.y-n.y):0;return Math.sqrt(Math.pow(a,2)+Math.pow(r,2))}}function Hi(e,t,i,s,n){const a=[];return!n&&!e.isPointInArea(t)||Mi(e,i,t,function(o,l,d){!n&&!It(o,e.chartArea,0)||o.inRange(t.x,t.y,s)&&a.push({element:o,datasetIndex:l,index:d})},!0),a}function Nl(e,t,i,s){let n=[];function a(r,o,l){const{startAngle:d,endAngle:c}=r.getProps(["startAngle","endAngle"],s),{angle:u}=ba(r,{x:t.x,y:t.y});je(u,d,c)&&n.push({element:r,datasetIndex:o,index:l})}return Mi(e,i,t,a),n}function Hl(e,t,i,s,n,a){let r=[];const o=Fl(i);let l=Number.POSITIVE_INFINITY;function d(c,u,h){const g=c.inRange(t.x,t.y,n);if(s&&!g)return;const m=c.getCenterPoint(n);if(!(!!a||e.isPointInArea(m))&&!g)return;const f=o(t,m);f<l?(r=[{element:c,datasetIndex:u,index:h}],l=f):f===l&&r.push({element:c,datasetIndex:u,index:h})}return Mi(e,i,t,d),r}function Vi(e,t,i,s,n,a){return!a&&!e.isPointInArea(t)?[]:i==="r"&&!s?Nl(e,t,i,n):Hl(e,t,i,s,n,a)}function pn(e,t,i,s,n){const a=[],r=i==="x"?"inXRange":"inYRange";let o=!1;return Mi(e,i,t,(l,d,c)=>{l[r]&&l[r](t[i],n)&&(a.push({element:l,datasetIndex:d,index:c}),o=o||l.inRange(t.x,t.y,n))}),s&&!o?[]:a}var Vl={modes:{index(e,t,i,s){const n=Kt(t,e),a=i.axis||"x",r=i.includeInvisible||!1,o=i.intersect?Hi(e,n,a,s,r):Vi(e,n,a,!1,s,r),l=[];return o.length?(e.getSortedVisibleDatasetMetas().forEach(d=>{const c=o[0].index,u=d.data[c];u&&!u.skip&&l.push({element:u,datasetIndex:d.index,index:c})}),l):[]},dataset(e,t,i,s){const n=Kt(t,e),a=i.axis||"xy",r=i.includeInvisible||!1;let o=i.intersect?Hi(e,n,a,s,r):Vi(e,n,a,!1,s,r);if(o.length>0){const l=o[0].datasetIndex,d=e.getDatasetMeta(l).data;o=[];for(let c=0;c<d.length;++c)o.push({element:d[c],datasetIndex:l,index:c})}return o},point(e,t,i,s){const n=Kt(t,e),a=i.axis||"xy",r=i.includeInvisible||!1;return Hi(e,n,a,s,r)},nearest(e,t,i,s){const n=Kt(t,e),a=i.axis||"xy",r=i.includeInvisible||!1;return Vi(e,n,a,i.intersect,s,r)},x(e,t,i,s){const n=Kt(t,e);return pn(e,n,"x",i.intersect,s)},y(e,t,i,s){const n=Kt(t,e);return pn(e,n,"y",i.intersect,s)}}};const Na=["left","top","right","bottom"];function be(e,t){return e.filter(i=>i.pos===t)}function fn(e,t){return e.filter(i=>Na.indexOf(i.pos)===-1&&i.box.axis===t)}function ye(e,t){return e.sort((i,s)=>{const n=t?s:i,a=t?i:s;return n.weight===a.weight?n.index-a.index:n.weight-a.weight})}function Wl(e){const t=[];let i,s,n,a,r,o;for(i=0,s=(e||[]).length;i<s;++i)n=e[i],{position:a,options:{stack:r,stackWeight:o=1}}=n,t.push({index:i,box:n,pos:a,horizontal:n.isHorizontal(),weight:n.weight,stack:r&&a+r,stackWeight:o});return t}function Ul(e){const t={};for(const i of e){const{stack:s,pos:n,stackWeight:a}=i;if(!s||!Na.includes(n))continue;const r=t[s]||(t[s]={count:0,placed:0,weight:0,size:0});r.count++,r.weight+=a}return t}function Yl(e,t){const i=Ul(e),{vBoxMaxWidth:s,hBoxMaxHeight:n}=t;let a,r,o;for(a=0,r=e.length;a<r;++a){o=e[a];const{fullSize:l}=o.box,d=i[o.stack],c=d&&o.stackWeight/d.weight;o.horizontal?(o.width=c?c*s:l&&t.availableWidth,o.height=n):(o.width=s,o.height=c?c*n:l&&t.availableHeight)}return i}function Xl(e){const t=Wl(e),i=ye(t.filter(d=>d.box.fullSize),!0),s=ye(be(t,"left"),!0),n=ye(be(t,"right")),a=ye(be(t,"top"),!0),r=ye(be(t,"bottom")),o=fn(t,"x"),l=fn(t,"y");return{fullSize:i,leftAndTop:s.concat(a),rightAndBottom:n.concat(l).concat(r).concat(o),chartArea:be(t,"chartArea"),vertical:s.concat(n).concat(l),horizontal:a.concat(r).concat(o)}}function bn(e,t,i,s){return Math.max(e[i],t[i])+Math.max(e[s],t[s])}function Ha(e,t){e.top=Math.max(e.top,t.top),e.left=Math.max(e.left,t.left),e.bottom=Math.max(e.bottom,t.bottom),e.right=Math.max(e.right,t.right)}function Ql(e,t,i,s){const{pos:n,box:a}=i,r=e.maxPadding;if(!V(n)){i.size&&(e[n]-=i.size);const u=s[i.stack]||{size:0,count:1};u.size=Math.max(u.size,i.horizontal?a.height:a.width),i.size=u.size/u.count,e[n]+=i.size}a.getPadding&&Ha(r,a.getPadding());const o=Math.max(0,t.outerWidth-bn(r,e,"left","right")),l=Math.max(0,t.outerHeight-bn(r,e,"top","bottom")),d=o!==e.w,c=l!==e.h;return e.w=o,e.h=l,i.horizontal?{same:d,other:c}:{same:c,other:d}}function Kl(e){const t=e.maxPadding;function i(s){const n=Math.max(t[s]-e[s],0);return e[s]+=n,n}e.y+=i("top"),e.x+=i("left"),i("right"),i("bottom")}function Jl(e,t){const i=t.maxPadding;function s(n){const a={left:0,top:0,right:0,bottom:0};return n.forEach(r=>{a[r]=Math.max(t[r],i[r])}),a}return s(e?["left","right"]:["top","bottom"])}function ke(e,t,i,s){const n=[];let a,r,o,l,d,c;for(a=0,r=e.length,d=0;a<r;++a){o=e[a],l=o.box,l.update(o.width||t.w,o.height||t.h,Jl(o.horizontal,t));const{same:u,other:h}=Ql(t,i,o,s);d|=u&&n.length,c=c||h,l.fullSize||n.push(o)}return d&&ke(n,t,i,s)||c}function Qe(e,t,i,s,n){e.top=i,e.left=t,e.right=t+s,e.bottom=i+n,e.width=s,e.height=n}function yn(e,t,i,s){const n=i.padding;let{x:a,y:r}=t;for(const o of e){const l=o.box,d=s[o.stack]||{placed:0,weight:1},c=o.stackWeight/d.weight||1;if(o.horizontal){const u=t.w*c,h=d.size||l.height;Ie(d.start)&&(r=d.start),l.fullSize?Qe(l,n.left,r,i.outerWidth-n.right-n.left,h):Qe(l,t.left+d.placed,r,u,h),d.start=r,d.placed+=u,r=l.bottom}else{const u=t.h*c,h=d.size||l.width;Ie(d.start)&&(a=d.start),l.fullSize?Qe(l,a,n.top,h,i.outerHeight-n.bottom-n.top):Qe(l,a,t.top+d.placed,h,u),d.start=a,d.placed+=u,a=l.right}}t.x=a,t.y=r}var dt={addBox(e,t){e.boxes||(e.boxes=[]),t.fullSize=t.fullSize||!1,t.position=t.position||"top",t.weight=t.weight||0,t._layers=t._layers||function(){return[{z:0,draw(i){t.draw(i)}}]},e.boxes.push(t)},removeBox(e,t){const i=e.boxes?e.boxes.indexOf(t):-1;i!==-1&&e.boxes.splice(i,1)},configure(e,t,i){t.fullSize=i.fullSize,t.position=i.position,t.weight=i.weight},update(e,t,i,s){if(!e)return;const n=ct(e.options.layout.padding),a=Math.max(t-n.width,0),r=Math.max(i-n.height,0),o=Xl(e.boxes),l=o.vertical,d=o.horizontal;X(e.boxes,p=>{typeof p.beforeLayout=="function"&&p.beforeLayout()});const c=l.reduce((p,f)=>f.box.options&&f.box.options.display===!1?p:p+1,0)||1,u=Object.freeze({outerWidth:t,outerHeight:i,padding:n,availableWidth:a,availableHeight:r,vBoxMaxWidth:a/2/c,hBoxMaxHeight:r/2}),h=Object.assign({},n);Ha(h,ct(s));const g=Object.assign({maxPadding:h,w:a,h:r,x:n.left,y:n.top},n),m=Yl(l.concat(d),u);ke(o.fullSize,g,u,m),ke(l,g,u,m),ke(d,g,u,m)&&ke(l,g,u,m),Kl(g),yn(o.leftAndTop,g,u,m),g.x+=g.w,g.y+=g.h,yn(o.rightAndBottom,g,u,m),e.chartArea={left:g.left,top:g.top,right:g.left+g.w,bottom:g.top+g.h,height:g.h,width:g.w},X(o.chartArea,p=>{const f=p.box;Object.assign(f,e.chartArea),f.update(g.w,g.h,{left:0,top:0,right:0,bottom:0})})}};class Va{acquireContext(t,i){}releaseContext(t){return!1}addEventListener(t,i,s){}removeEventListener(t,i,s){}getDevicePixelRatio(){return 1}getMaximumSize(t,i,s,n){return i=Math.max(0,i||t.width),s=s||t.height,{width:i,height:Math.max(0,n?Math.floor(i/n):s)}}isAttached(t){return!0}updateConfig(t){}}class Gl extends Va{acquireContext(t){return t&&t.getContext&&t.getContext("2d")||null}updateConfig(t){t.options.animation=!1}}const di="$chartjs",Zl={touchstart:"mousedown",touchmove:"mousemove",touchend:"mouseup",pointerenter:"mouseenter",pointerdown:"mousedown",pointermove:"mousemove",pointerup:"mouseup",pointerleave:"mouseout",pointerout:"mouseout"},vn=e=>e===null||e==="";function td(e,t){const i=e.style,s=e.getAttribute("height"),n=e.getAttribute("width");if(e[di]={initial:{height:s,width:n,style:{display:i.display,height:i.height,width:i.width}}},i.display=i.display||"block",i.boxSizing=i.boxSizing||"border-box",vn(n)){const a=en(e,"width");a!==void 0&&(e.width=a)}if(vn(s))if(e.style.height==="")e.height=e.width/(t||2);else{const a=en(e,"height");a!==void 0&&(e.height=a)}return e}const Wa=el?{passive:!0}:!1;function ed(e,t,i){e&&e.addEventListener(t,i,Wa)}function id(e,t,i){e&&e.canvas&&e.canvas.removeEventListener(t,i,Wa)}function sd(e,t){const i=Zl[e.type]||e.type,{x:s,y:n}=Kt(e,t);return{type:i,chart:t,native:e,x:s!==void 0?s:null,y:n!==void 0?n:null}}function vi(e,t){for(const i of e)if(i===t||i.contains(t))return!0}function nd(e,t,i){const s=e.canvas,n=new MutationObserver(a=>{let r=!1;for(const o of a)r=r||vi(o.addedNodes,s),r=r&&!vi(o.removedNodes,s);r&&i()});return n.observe(document,{childList:!0,subtree:!0}),n}function ad(e,t,i){const s=e.canvas,n=new MutationObserver(a=>{let r=!1;for(const o of a)r=r||vi(o.removedNodes,s),r=r&&!vi(o.addedNodes,s);r&&i()});return n.observe(document,{childList:!0,subtree:!0}),n}const De=new Map;let xn=0;function Ua(){const e=window.devicePixelRatio;e!==xn&&(xn=e,De.forEach((t,i)=>{i.currentDevicePixelRatio!==e&&t()}))}function rd(e,t){De.size||window.addEventListener("resize",Ua),De.set(e,t)}function od(e){De.delete(e),De.size||window.removeEventListener("resize",Ua)}function ld(e,t,i){const s=e.canvas,n=s&&Ms(s);if(!n)return;const a=wa((o,l)=>{const d=n.clientWidth;i(o,l),d<n.clientWidth&&i()},window),r=new ResizeObserver(o=>{const l=o[0],d=l.contentRect.width,c=l.contentRect.height;d===0&&c===0||a(d,c)});return r.observe(n),rd(e,a),r}function Wi(e,t,i){i&&i.disconnect(),t==="resize"&&od(e)}function dd(e,t,i){const s=e.canvas,n=wa(a=>{e.ctx!==null&&i(sd(a,e))},e);return ed(s,t,n),n}class cd extends Va{acquireContext(t,i){const s=t&&t.getContext&&t.getContext("2d");return s&&s.canvas===t?(td(t,i),s):null}releaseContext(t){const i=t.canvas;if(!i[di])return!1;const s=i[di].initial;["height","width"].forEach(a=>{const r=s[a];H(r)?i.removeAttribute(a):i.setAttribute(a,r)});const n=s.style||{};return Object.keys(n).forEach(a=>{i.style[a]=n[a]}),i.width=i.width,delete i[di],!0}addEventListener(t,i,s){this.removeEventListener(t,i);const n=t.$proxies||(t.$proxies={}),r={attach:nd,detach:ad,resize:ld}[i]||dd;n[i]=r(t,i,s)}removeEventListener(t,i){const s=t.$proxies||(t.$proxies={}),n=s[i];if(!n)return;({attach:Wi,detach:Wi,resize:Wi}[i]||id)(t,i,n),s[i]=void 0}getDevicePixelRatio(){return window.devicePixelRatio}getMaximumSize(t,i,s,n){return tl(t,i,s,n)}isAttached(t){const i=t&&Ms(t);return!!(i&&i.isConnected)}}function ud(e){return!Ts()||typeof OffscreenCanvas<"u"&&e instanceof OffscreenCanvas?Gl:cd}class kt{constructor(){L(this,"x");L(this,"y");L(this,"active",!1);L(this,"options");L(this,"$animations")}tooltipPosition(t){const{x:i,y:s}=this.getProps(["x","y"],t);return{x:i,y:s}}hasValue(){return he(this.x)&&he(this.y)}getProps(t,i){const s=this.$animations;if(!i||!s)return this;const n={};return t.forEach(a=>{n[a]=s[a]&&s[a].active()?s[a]._to:this[a]}),n}}L(kt,"defaults",{}),L(kt,"defaultRoutes");function hd(e,t){const i=e.options.ticks,s=gd(e),n=Math.min(i.maxTicksLimit||s,s),a=i.major.enabled?pd(t):[],r=a.length,o=a[0],l=a[r-1],d=[];if(r>n)return fd(t,d,a,r/n),d;const c=md(a,t,n);if(r>0){let u,h;const g=r>1?Math.round((l-o)/(r-1)):null;for(Ke(t,d,c,H(g)?0:o-g,o),u=0,h=r-1;u<h;u++)Ke(t,d,c,a[u],a[u+1]);return Ke(t,d,c,l,H(g)?t.length:l+g),d}return Ke(t,d,c),d}function gd(e){const t=e.options.offset,i=e._tickSize(),s=e._length/i+(t?0:1),n=e._maxLength/i;return Math.floor(Math.min(s,n))}function md(e,t,i){const s=bd(e),n=t.length/i;if(!s)return Math.max(n,1);const a=io(s);for(let r=0,o=a.length-1;r<o;r++){const l=a[r];if(l>n)return l}return Math.max(n,1)}function pd(e){const t=[];let i,s;for(i=0,s=e.length;i<s;i++)e[i].major&&t.push(i);return t}function fd(e,t,i,s){let n=0,a=i[0],r;for(s=Math.ceil(s),r=0;r<e.length;r++)r===a&&(t.push(e[r]),n++,a=i[n*s])}function Ke(e,t,i,s,n){const a=O(s,0),r=Math.min(O(n,e.length),e.length);let o=0,l,d,c;for(i=Math.ceil(i),n&&(l=n-s,i=l/Math.floor(l/i)),c=a;c<0;)o++,c=Math.round(a+o*i);for(d=Math.max(a,0);d<r;d++)d===c&&(t.push(e[d]),o++,c=Math.round(a+o*i))}function bd(e){const t=e.length;let i,s;if(t<2)return!1;for(s=e[0],i=1;i<t;++i)if(e[i]-e[i-1]!==s)return!1;return s}const yd=e=>e==="left"?"right":e==="right"?"left":e,wn=(e,t,i)=>t==="top"||t==="left"?e[t]+i:e[t]-i,zn=(e,t)=>Math.min(t||e,e);function kn(e,t){const i=[],s=e.length/t,n=e.length;let a=0;for(;a<n;a+=s)i.push(e[Math.floor(a)]);return i}function vd(e,t,i){const s=e.ticks.length,n=Math.min(t,s-1),a=e._startPixel,r=e._endPixel,o=1e-6;let l=e.getPixelForTick(n),d;if(!(i&&(s===1?d=Math.max(l-a,r-l):t===0?d=(e.getPixelForTick(1)-l)/2:d=(l-e.getPixelForTick(n-1))/2,l+=n<t?d:-d,l<a-o||l>r+o)))return l}function xd(e,t){X(e,i=>{const s=i.gc,n=s.length/2;let a;if(n>t){for(a=0;a<n;++a)delete i.data[s[a]];s.splice(0,n)}})}function ve(e){return e.drawTicks?e.tickLength:0}function _n(e,t){if(!e.display)return 0;const i=nt(e.font,t),s=ct(e.padding);return(G(e.text)?e.text.length:1)*i.lineHeight+s.height}function wd(e,t){return Vt(e,{scale:t,type:"scale"})}function zd(e,t,i){return Vt(e,{tick:i,index:t,type:"tick"})}function kd(e,t,i){let s=ws(e);return(i&&t!=="right"||!i&&t==="right")&&(s=yd(s)),s}function _d(e,t,i,s){const{top:n,left:a,bottom:r,right:o,chart:l}=e,{chartArea:d,scales:c}=l;let u=0,h,g,m;const p=r-n,f=o-a;if(e.isHorizontal()){if(g=ot(s,a,o),V(i)){const b=Object.keys(i)[0],v=i[b];m=c[b].getPixelForValue(v)+p-t}else i==="center"?m=(d.bottom+d.top)/2+p-t:m=wn(e,i,t);h=o-a}else{if(V(i)){const b=Object.keys(i)[0],v=i[b];g=c[b].getPixelForValue(v)-f+t}else i==="center"?g=(d.left+d.right)/2-f+t:g=wn(e,i,t);m=ot(s,r,n),u=i==="left"?-it:it}return{titleX:g,titleY:m,maxWidth:h,rotation:u}}class ae extends kt{constructor(t){super(),this.id=t.id,this.type=t.type,this.options=void 0,this.ctx=t.ctx,this.chart=t.chart,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.width=void 0,this.height=void 0,this._margins={left:0,right:0,top:0,bottom:0},this.maxWidth=void 0,this.maxHeight=void 0,this.paddingTop=void 0,this.paddingBottom=void 0,this.paddingLeft=void 0,this.paddingRight=void 0,this.axis=void 0,this.labelRotation=void 0,this.min=void 0,this.max=void 0,this._range=void 0,this.ticks=[],this._gridLineItems=null,this._labelItems=null,this._labelSizes=null,this._length=0,this._maxLength=0,this._longestTextCache={},this._startPixel=void 0,this._endPixel=void 0,this._reversePixels=!1,this._userMax=void 0,this._userMin=void 0,this._suggestedMax=void 0,this._suggestedMin=void 0,this._ticksLength=0,this._borderValue=0,this._cache={},this._dataLimitsCached=!1,this.$context=void 0}init(t){this.options=t.setContext(this.getContext()),this.axis=t.axis,this._userMin=this.parse(t.min),this._userMax=this.parse(t.max),this._suggestedMin=this.parse(t.suggestedMin),this._suggestedMax=this.parse(t.suggestedMax)}parse(t,i){return t}getUserBounds(){let{_userMin:t,_userMax:i,_suggestedMin:s,_suggestedMax:n}=this;return t=yt(t,Number.POSITIVE_INFINITY),i=yt(i,Number.NEGATIVE_INFINITY),s=yt(s,Number.POSITIVE_INFINITY),n=yt(n,Number.NEGATIVE_INFINITY),{min:yt(t,s),max:yt(i,n),minDefined:tt(t),maxDefined:tt(i)}}getMinMax(t){let{min:i,max:s,minDefined:n,maxDefined:a}=this.getUserBounds(),r;if(n&&a)return{min:i,max:s};const o=this.getMatchingVisibleMetas();for(let l=0,d=o.length;l<d;++l)r=o[l].controller.getMinMax(this,t),n||(i=Math.min(i,r.min)),a||(s=Math.max(s,r.max));return i=a&&i>s?s:i,s=n&&i>s?i:s,{min:yt(i,yt(s,i)),max:yt(s,yt(i,s))}}getPadding(){return{left:this.paddingLeft||0,top:this.paddingTop||0,right:this.paddingRight||0,bottom:this.paddingBottom||0}}getTicks(){return this.ticks}getLabels(){const t=this.chart.data;return this.options.labels||(this.isHorizontal()?t.xLabels:t.yLabels)||t.labels||[]}getLabelItems(t=this.chart.chartArea){return this._labelItems||(this._labelItems=this._computeLabelItems(t))}beforeLayout(){this._cache={},this._dataLimitsCached=!1}beforeUpdate(){K(this.options.beforeUpdate,[this])}update(t,i,s){const{beginAtZero:n,grace:a,ticks:r}=this.options,o=r.sampleSize;this.beforeUpdate(),this.maxWidth=t,this.maxHeight=i,this._margins=s=Object.assign({left:0,right:0,top:0,bottom:0},s),this.ticks=null,this._labelSizes=null,this._gridLineItems=null,this._labelItems=null,this.beforeSetDimensions(),this.setDimensions(),this.afterSetDimensions(),this._maxLength=this.isHorizontal()?this.width+s.left+s.right:this.height+s.top+s.bottom,this._dataLimitsCached||(this.beforeDataLimits(),this.determineDataLimits(),this.afterDataLimits(),this._range=Ao(this,a,n),this._dataLimitsCached=!0),this.beforeBuildTicks(),this.ticks=this.buildTicks()||[],this.afterBuildTicks();const l=o<this.ticks.length;this._convertTicksToLabels(l?kn(this.ticks,o):this.ticks),this.configure(),this.beforeCalculateLabelRotation(),this.calculateLabelRotation(),this.afterCalculateLabelRotation(),r.display&&(r.autoSkip||r.source==="auto")&&(this.ticks=hd(this,this.ticks),this._labelSizes=null,this.afterAutoSkip()),l&&this._convertTicksToLabels(this.ticks),this.beforeFit(),this.fit(),this.afterFit(),this.afterUpdate()}configure(){let t=this.options.reverse,i,s;this.isHorizontal()?(i=this.left,s=this.right):(i=this.top,s=this.bottom,t=!t),this._startPixel=i,this._endPixel=s,this._reversePixels=t,this._length=s-i,this._alignToPixels=this.options.alignToPixels}afterUpdate(){K(this.options.afterUpdate,[this])}beforeSetDimensions(){K(this.options.beforeSetDimensions,[this])}setDimensions(){this.isHorizontal()?(this.width=this.maxWidth,this.left=0,this.right=this.width):(this.height=this.maxHeight,this.top=0,this.bottom=this.height),this.paddingLeft=0,this.paddingTop=0,this.paddingRight=0,this.paddingBottom=0}afterSetDimensions(){K(this.options.afterSetDimensions,[this])}_callHooks(t){this.chart.notifyPlugins(t,this.getContext()),K(this.options[t],[this])}beforeDataLimits(){this._callHooks("beforeDataLimits")}determineDataLimits(){}afterDataLimits(){this._callHooks("afterDataLimits")}beforeBuildTicks(){this._callHooks("beforeBuildTicks")}buildTicks(){return[]}afterBuildTicks(){this._callHooks("afterBuildTicks")}beforeTickToLabelConversion(){K(this.options.beforeTickToLabelConversion,[this])}generateTickLabels(t){const i=this.options.ticks;let s,n,a;for(s=0,n=t.length;s<n;s++)a=t[s],a.label=K(i.callback,[a.value,s,t],this)}afterTickToLabelConversion(){K(this.options.afterTickToLabelConversion,[this])}beforeCalculateLabelRotation(){K(this.options.beforeCalculateLabelRotation,[this])}calculateLabelRotation(){const t=this.options,i=t.ticks,s=zn(this.ticks.length,t.ticks.maxTicksLimit),n=i.minRotation||0,a=i.maxRotation;let r=n,o,l,d;if(!this._isVisible()||!i.display||n>=a||s<=1||!this.isHorizontal()){this.labelRotation=n;return}const c=this._getLabelSizes(),u=c.widest.width,h=c.highest.height,g=at(this.chart.width-u,0,this.maxWidth);o=t.offset?this.maxWidth/s:g/(s-1),u+6>o&&(o=g/(s-(t.offset?.5:1)),l=this.maxHeight-ve(t.grid)-i.padding-_n(t.title,this.chart.options.font),d=Math.sqrt(u*u+h*h),r=vs(Math.min(Math.asin(at((c.highest.height+6)/o,-1,1)),Math.asin(at(l/d,-1,1))-Math.asin(at(h/d,-1,1)))),r=Math.max(n,Math.min(a,r))),this.labelRotation=r}afterCalculateLabelRotation(){K(this.options.afterCalculateLabelRotation,[this])}afterAutoSkip(){}beforeFit(){K(this.options.beforeFit,[this])}fit(){const t={width:0,height:0},{chart:i,options:{ticks:s,title:n,grid:a}}=this,r=this._isVisible(),o=this.isHorizontal();if(r){const l=_n(n,i.options.font);if(o?(t.width=this.maxWidth,t.height=ve(a)+l):(t.height=this.maxHeight,t.width=ve(a)+l),s.display&&this.ticks.length){const{first:d,last:c,widest:u,highest:h}=this._getLabelSizes(),g=s.padding*2,m=wt(this.labelRotation),p=Math.cos(m),f=Math.sin(m);if(o){const b=s.mirror?0:f*u.width+p*h.height;t.height=Math.min(this.maxHeight,t.height+b+g)}else{const b=s.mirror?0:p*u.width+f*h.height;t.width=Math.min(this.maxWidth,t.width+b+g)}this._calculatePadding(d,c,f,p)}}this._handleMargins(),o?(this.width=this._length=i.width-this._margins.left-this._margins.right,this.height=t.height):(this.width=t.width,this.height=this._length=i.height-this._margins.top-this._margins.bottom)}_calculatePadding(t,i,s,n){const{ticks:{align:a,padding:r},position:o}=this.options,l=this.labelRotation!==0,d=o!=="top"&&this.axis==="x";if(this.isHorizontal()){const c=this.getPixelForTick(0)-this.left,u=this.right-this.getPixelForTick(this.ticks.length-1);let h=0,g=0;l?d?(h=n*t.width,g=s*i.height):(h=s*t.height,g=n*i.width):a==="start"?g=i.width:a==="end"?h=t.width:a!=="inner"&&(h=t.width/2,g=i.width/2),this.paddingLeft=Math.max((h-c+r)*this.width/(this.width-c),0),this.paddingRight=Math.max((g-u+r)*this.width/(this.width-u),0)}else{let c=i.height/2,u=t.height/2;a==="start"?(c=0,u=t.height):a==="end"&&(c=i.height,u=0),this.paddingTop=c+r,this.paddingBottom=u+r}}_handleMargins(){this._margins&&(this._margins.left=Math.max(this.paddingLeft,this._margins.left),this._margins.top=Math.max(this.paddingTop,this._margins.top),this._margins.right=Math.max(this.paddingRight,this._margins.right),this._margins.bottom=Math.max(this.paddingBottom,this._margins.bottom))}afterFit(){K(this.options.afterFit,[this])}isHorizontal(){const{axis:t,position:i}=this.options;return i==="top"||i==="bottom"||t==="x"}isFullSize(){return this.options.fullSize}_convertTicksToLabels(t){this.beforeTickToLabelConversion(),this.generateTickLabels(t);let i,s;for(i=0,s=t.length;i<s;i++)H(t[i].label)&&(t.splice(i,1),s--,i--);this.afterTickToLabelConversion()}_getLabelSizes(){let t=this._labelSizes;if(!t){const i=this.options.ticks.sampleSize;let s=this.ticks;i<s.length&&(s=kn(s,i)),this._labelSizes=t=this._computeLabelSizes(s,s.length,this.options.ticks.maxTicksLimit)}return t}_computeLabelSizes(t,i,s){const{ctx:n,_longestTextCache:a}=this,r=[],o=[],l=Math.floor(i/zn(i,s));let d=0,c=0,u,h,g,m,p,f,b,v,w,y,x;for(u=0;u<i;u+=l){if(m=t[u].label,p=this._resolveTickFontOptions(u),n.font=f=p.string,b=a[f]=a[f]||{data:{},gc:[]},v=p.lineHeight,w=y=0,!H(m)&&!G(m))w=bi(n,b.data,b.gc,w,m),y=v;else if(G(m))for(h=0,g=m.length;h<g;++h)x=m[h],!H(x)&&!G(x)&&(w=bi(n,b.data,b.gc,w,x),y+=v);r.push(w),o.push(y),d=Math.max(w,d),c=Math.max(y,c)}xd(a,i);const z=r.indexOf(d),S=o.indexOf(c),$=C=>({width:r[C]||0,height:o[C]||0});return{first:$(0),last:$(i-1),widest:$(z),highest:$(S),widths:r,heights:o}}getLabelForValue(t){return t}getPixelForValue(t,i){return NaN}getValueForPixel(t){}getPixelForTick(t){const i=this.ticks;return t<0||t>i.length-1?null:this.getPixelForValue(i[t].value)}getPixelForDecimal(t){this._reversePixels&&(t=1-t);const i=this._startPixel+t*this._length;return ro(this._alignToPixels?Yt(this.chart,i,0):i)}getDecimalForPixel(t){const i=(t-this._startPixel)/this._length;return this._reversePixels?1-i:i}getBasePixel(){return this.getPixelForValue(this.getBaseValue())}getBaseValue(){const{min:t,max:i}=this;return t<0&&i<0?i:t>0&&i>0?t:0}getContext(t){const i=this.ticks||[];if(t>=0&&t<i.length){const s=i[t];return s.$context||(s.$context=zd(this.getContext(),t,s))}return this.$context||(this.$context=wd(this.chart.getContext(),this))}_tickSize(){const t=this.options.ticks,i=wt(this.labelRotation),s=Math.abs(Math.cos(i)),n=Math.abs(Math.sin(i)),a=this._getLabelSizes(),r=t.autoSkipPadding||0,o=a?a.widest.width+r:0,l=a?a.highest.height+r:0;return this.isHorizontal()?l*s>o*n?o/s:l/n:l*n<o*s?l/s:o/n}_isVisible(){const t=this.options.display;return t!=="auto"?!!t:this.getMatchingVisibleMetas().length>0}_computeGridLineItems(t){const i=this.axis,s=this.chart,n=this.options,{grid:a,position:r,border:o}=n,l=a.offset,d=this.isHorizontal(),u=this.ticks.length+(l?1:0),h=ve(a),g=[],m=o.setContext(this.getContext()),p=m.display?m.width:0,f=p/2,b=function(M){return Yt(s,M,p)};let v,w,y,x,z,S,$,C,T,B,P,R;if(r==="top")v=b(this.bottom),S=this.bottom-h,C=v-f,B=b(t.top)+f,R=t.bottom;else if(r==="bottom")v=b(this.top),B=t.top,R=b(t.bottom)-f,S=v+f,C=this.top+h;else if(r==="left")v=b(this.right),z=this.right-h,$=v-f,T=b(t.left)+f,P=t.right;else if(r==="right")v=b(this.left),T=t.left,P=b(t.right)-f,z=v+f,$=this.left+h;else if(i==="x"){if(r==="center")v=b((t.top+t.bottom)/2+.5);else if(V(r)){const M=Object.keys(r)[0],j=r[M];v=b(this.chart.scales[M].getPixelForValue(j))}B=t.top,R=t.bottom,S=v+f,C=S+h}else if(i==="y"){if(r==="center")v=b((t.left+t.right)/2);else if(V(r)){const M=Object.keys(r)[0],j=r[M];v=b(this.chart.scales[M].getPixelForValue(j))}z=v-f,$=z-h,T=t.left,P=t.right}const U=O(n.ticks.maxTicksLimit,u),I=Math.max(1,Math.ceil(u/U));for(w=0;w<u;w+=I){const M=this.getContext(w),j=a.setContext(M),q=o.setContext(M),N=j.lineWidth,et=j.color,ft=q.dash||[],st=q.dashOffset,Y=j.tickWidth,rt=j.tickColor,ut=j.tickBorderDash||[],bt=j.tickBorderDashOffset;y=vd(this,w,l),y!==void 0&&(x=Yt(s,y,N),d?z=$=T=P=x:S=C=B=R=x,g.push({tx1:z,ty1:S,tx2:$,ty2:C,x1:T,y1:B,x2:P,y2:R,width:N,color:et,borderDash:ft,borderDashOffset:st,tickWidth:Y,tickColor:rt,tickBorderDash:ut,tickBorderDashOffset:bt}))}return this._ticksLength=u,this._borderValue=v,g}_computeLabelItems(t){const i=this.axis,s=this.options,{position:n,ticks:a}=s,r=this.isHorizontal(),o=this.ticks,{align:l,crossAlign:d,padding:c,mirror:u}=a,h=ve(s.grid),g=h+c,m=u?-c:g,p=-wt(this.labelRotation),f=[];let b,v,w,y,x,z,S,$,C,T,B,P,R="middle";if(n==="top")z=this.bottom-m,S=this._getXAxisLabelAlignment();else if(n==="bottom")z=this.top+m,S=this._getXAxisLabelAlignment();else if(n==="left"){const I=this._getYAxisLabelAlignment(h);S=I.textAlign,x=I.x}else if(n==="right"){const I=this._getYAxisLabelAlignment(h);S=I.textAlign,x=I.x}else if(i==="x"){if(n==="center")z=(t.top+t.bottom)/2+g;else if(V(n)){const I=Object.keys(n)[0],M=n[I];z=this.chart.scales[I].getPixelForValue(M)+g}S=this._getXAxisLabelAlignment()}else if(i==="y"){if(n==="center")x=(t.left+t.right)/2-g;else if(V(n)){const I=Object.keys(n)[0],M=n[I];x=this.chart.scales[I].getPixelForValue(M)}S=this._getYAxisLabelAlignment(h).textAlign}i==="y"&&(l==="start"?R="top":l==="end"&&(R="bottom"));const U=this._getLabelSizes();for(b=0,v=o.length;b<v;++b){w=o[b],y=w.label;const I=a.setContext(this.getContext(b));$=this.getPixelForTick(b)+a.labelOffset,C=this._resolveTickFontOptions(b),T=C.lineHeight,B=G(y)?y.length:1;const M=B/2,j=I.color,q=I.textStrokeColor,N=I.textStrokeWidth;let et=S;r?(x=$,S==="inner"&&(b===v-1?et=this.options.reverse?"left":"right":b===0?et=this.options.reverse?"right":"left":et="center"),n==="top"?d==="near"||p!==0?P=-B*T+T/2:d==="center"?P=-U.highest.height/2-M*T+T:P=-U.highest.height+T/2:d==="near"||p!==0?P=T/2:d==="center"?P=U.highest.height/2-M*T:P=U.highest.height-B*T,u&&(P*=-1),p!==0&&!I.showLabelBackdrop&&(x+=T/2*Math.sin(p))):(z=$,P=(1-B)*T/2);let ft;if(I.showLabelBackdrop){const st=ct(I.backdropPadding),Y=U.heights[b],rt=U.widths[b];let ut=P-st.top,bt=0-st.left;switch(R){case"middle":ut-=Y/2;break;case"bottom":ut-=Y;break}switch(S){case"center":bt-=rt/2;break;case"right":bt-=rt;break;case"inner":b===v-1?bt-=rt:b>0&&(bt-=rt/2);break}ft={left:bt,top:ut,width:rt+st.width,height:Y+st.height,color:I.backdropColor}}f.push({label:y,font:C,textOffset:P,options:{rotation:p,color:j,strokeColor:q,strokeWidth:N,textAlign:et,textBaseline:R,translation:[x,z],backdrop:ft}})}return f}_getXAxisLabelAlignment(){const{position:t,ticks:i}=this.options;if(-wt(this.labelRotation))return t==="top"?"left":"right";let n="center";return i.align==="start"?n="left":i.align==="end"?n="right":i.align==="inner"&&(n="inner"),n}_getYAxisLabelAlignment(t){const{position:i,ticks:{crossAlign:s,mirror:n,padding:a}}=this.options,r=this._getLabelSizes(),o=t+a,l=r.widest.width;let d,c;return i==="left"?n?(c=this.right+a,s==="near"?d="left":s==="center"?(d="center",c+=l/2):(d="right",c+=l)):(c=this.right-o,s==="near"?d="right":s==="center"?(d="center",c-=l/2):(d="left",c=this.left)):i==="right"?n?(c=this.left+a,s==="near"?d="right":s==="center"?(d="center",c-=l/2):(d="left",c-=l)):(c=this.left+o,s==="near"?d="left":s==="center"?(d="center",c+=l/2):(d="right",c=this.right)):d="right",{textAlign:d,x:c}}_computeLabelArea(){if(this.options.ticks.mirror)return;const t=this.chart,i=this.options.position;if(i==="left"||i==="right")return{top:0,left:this.left,bottom:t.height,right:this.right};if(i==="top"||i==="bottom")return{top:this.top,left:0,bottom:this.bottom,right:t.width}}drawBackground(){const{ctx:t,options:{backgroundColor:i},left:s,top:n,width:a,height:r}=this;i&&(t.save(),t.fillStyle=i,t.fillRect(s,n,a,r),t.restore())}getLineWidthForValue(t){const i=this.options.grid;if(!this._isVisible()||!i.display)return 0;const n=this.ticks.findIndex(a=>a.value===t);return n>=0?i.setContext(this.getContext(n)).lineWidth:0}drawGrid(t){const i=this.options.grid,s=this.ctx,n=this._gridLineItems||(this._gridLineItems=this._computeGridLineItems(t));let a,r;const o=(l,d,c)=>{!c.width||!c.color||(s.save(),s.lineWidth=c.width,s.strokeStyle=c.color,s.setLineDash(c.borderDash||[]),s.lineDashOffset=c.borderDashOffset,s.beginPath(),s.moveTo(l.x,l.y),s.lineTo(d.x,d.y),s.stroke(),s.restore())};if(i.display)for(a=0,r=n.length;a<r;++a){const l=n[a];i.drawOnChartArea&&o({x:l.x1,y:l.y1},{x:l.x2,y:l.y2},l),i.drawTicks&&o({x:l.tx1,y:l.ty1},{x:l.tx2,y:l.ty2},{color:l.tickColor,width:l.tickWidth,borderDash:l.tickBorderDash,borderDashOffset:l.tickBorderDashOffset})}}drawBorder(){const{chart:t,ctx:i,options:{border:s,grid:n}}=this,a=s.setContext(this.getContext()),r=s.display?a.width:0;if(!r)return;const o=n.setContext(this.getContext(0)).lineWidth,l=this._borderValue;let d,c,u,h;this.isHorizontal()?(d=Yt(t,this.left,r)-r/2,c=Yt(t,this.right,o)+o/2,u=h=l):(u=Yt(t,this.top,r)-r/2,h=Yt(t,this.bottom,o)+o/2,d=c=l),i.save(),i.lineWidth=a.width,i.strokeStyle=a.color,i.beginPath(),i.moveTo(d,u),i.lineTo(c,h),i.stroke(),i.restore()}drawLabels(t){if(!this.options.ticks.display)return;const s=this.ctx,n=this._computeLabelArea();n&&$i(s,n);const a=this.getLabelItems(t);for(const r of a){const o=r.options,l=r.font,d=r.label,c=r.textOffset;ne(s,d,0,c,l,o)}n&&Si(s)}drawTitle(){const{ctx:t,options:{position:i,title:s,reverse:n}}=this;if(!s.display)return;const a=nt(s.font),r=ct(s.padding),o=s.align;let l=a.lineHeight/2;i==="bottom"||i==="center"||V(i)?(l+=r.bottom,G(s.text)&&(l+=a.lineHeight*(s.text.length-1))):l+=r.top;const{titleX:d,titleY:c,maxWidth:u,rotation:h}=_d(this,l,i,o);ne(t,s.text,0,0,a,{color:s.color,maxWidth:u,rotation:h,textAlign:kd(o,i,n),textBaseline:"middle",translation:[d,c]})}draw(t){this._isVisible()&&(this.drawBackground(),this.drawGrid(t),this.drawBorder(),this.drawTitle(),this.drawLabels(t))}_layers(){const t=this.options,i=t.ticks&&t.ticks.z||0,s=O(t.grid&&t.grid.z,-1),n=O(t.border&&t.border.z,0);return!this._isVisible()||this.draw!==ae.prototype.draw?[{z:i,draw:a=>{this.draw(a)}}]:[{z:s,draw:a=>{this.drawBackground(),this.drawGrid(a),this.drawTitle()}},{z:n,draw:()=>{this.drawBorder()}},{z:i,draw:a=>{this.drawLabels(a)}}]}getMatchingVisibleMetas(t){const i=this.chart.getSortedVisibleDatasetMetas(),s=this.axis+"AxisID",n=[];let a,r;for(a=0,r=i.length;a<r;++a){const o=i[a];o[s]===this.id&&(!t||o.type===t)&&n.push(o)}return n}_resolveTickFontOptions(t){const i=this.options.ticks.setContext(this.getContext(t));return nt(i.font)}_maxDigits(){const t=this._resolveTickFontOptions(0).lineHeight;return(this.isHorizontal()?this.width:this.height)/t}}class Je{constructor(t,i,s){this.type=t,this.scope=i,this.override=s,this.items=Object.create(null)}isForType(t){return Object.prototype.isPrototypeOf.call(this.type.prototype,t.prototype)}register(t){const i=Object.getPrototypeOf(t);let s;Td(i)&&(s=this.register(i));const n=this.items,a=t.id,r=this.scope+"."+a;if(!a)throw new Error("class does not have id: "+t);return a in n||(n[a]=t,$d(t,r,s),this.override&&Z.override(t.id,t.overrides)),r}get(t){return this.items[t]}unregister(t){const i=this.items,s=t.id,n=this.scope;s in i&&delete i[s],n&&s in Z[n]&&(delete Z[n][s],this.override&&delete se[s])}}function $d(e,t,i){const s=Be(Object.create(null),[i?Z.get(i):{},Z.get(t),e.defaults]);Z.set(t,s),e.defaultRoutes&&Sd(t,e.defaultRoutes),e.descriptors&&Z.describe(t,e.descriptors)}function Sd(e,t){Object.keys(t).forEach(i=>{const s=i.split("."),n=s.pop(),a=[e].concat(s).join("."),r=t[i].split("."),o=r.pop(),l=r.join(".");Z.route(a,n,l,o)})}function Td(e){return"id"in e&&"defaults"in e}class Md{constructor(){this.controllers=new Je(zt,"datasets",!0),this.elements=new Je(kt,"elements"),this.plugins=new Je(Object,"plugins"),this.scales=new Je(ae,"scales"),this._typedRegistries=[this.controllers,this.scales,this.elements]}add(...t){this._each("register",t)}remove(...t){this._each("unregister",t)}addControllers(...t){this._each("register",t,this.controllers)}addElements(...t){this._each("register",t,this.elements)}addPlugins(...t){this._each("register",t,this.plugins)}addScales(...t){this._each("register",t,this.scales)}getController(t){return this._get(t,this.controllers,"controller")}getElement(t){return this._get(t,this.elements,"element")}getPlugin(t){return this._get(t,this.plugins,"plugin")}getScale(t){return this._get(t,this.scales,"scale")}removeControllers(...t){this._each("unregister",t,this.controllers)}removeElements(...t){this._each("unregister",t,this.elements)}removePlugins(...t){this._each("unregister",t,this.plugins)}removeScales(...t){this._each("unregister",t,this.scales)}_each(t,i,s){[...i].forEach(n=>{const a=s||this._getRegistryForType(n);s||a.isForType(n)||a===this.plugins&&n.id?this._exec(t,a,n):X(n,r=>{const o=s||this._getRegistryForType(r);this._exec(t,o,r)})})}_exec(t,i,s){const n=ys(t);K(s["before"+n],[],s),i[t](s),K(s["after"+n],[],s)}_getRegistryForType(t){for(let i=0;i<this._typedRegistries.length;i++){const s=this._typedRegistries[i];if(s.isForType(t))return s}return this.plugins}_get(t,i,s){const n=i.get(t);if(n===void 0)throw new Error('"'+t+'" is not a registered '+s+".");return n}}var St=new Md;class Ed{constructor(){this._init=void 0}notify(t,i,s,n){if(i==="beforeInit"&&(this._init=this._createDescriptors(t,!0),this._notify(this._init,t,"install")),this._init===void 0)return;const a=n?this._descriptors(t).filter(n):this._descriptors(t),r=this._notify(a,t,i,s);return i==="afterDestroy"&&(this._notify(a,t,"stop"),this._notify(this._init,t,"uninstall"),this._init=void 0),r}_notify(t,i,s,n){n=n||{};for(const a of t){const r=a.plugin,o=r[s],l=[i,n,a.options];if(K(o,l,r)===!1&&n.cancelable)return!1}return!0}invalidate(){H(this._cache)||(this._oldCache=this._cache,this._cache=void 0)}_descriptors(t){if(this._cache)return this._cache;const i=this._cache=this._createDescriptors(t);return this._notifyStateChanges(t),i}_createDescriptors(t,i){const s=t&&t.config,n=O(s.options&&s.options.plugins,{}),a=Cd(s);return n===!1&&!i?[]:Ad(t,a,n,i)}_notifyStateChanges(t){const i=this._oldCache||[],s=this._cache,n=(a,r)=>a.filter(o=>!r.some(l=>o.plugin.id===l.plugin.id));this._notify(n(i,s),t,"stop"),this._notify(n(s,i),t,"start")}}function Cd(e){const t={},i=[],s=Object.keys(St.plugins.items);for(let a=0;a<s.length;a++)i.push(St.getPlugin(s[a]));const n=e.plugins||[];for(let a=0;a<n.length;a++){const r=n[a];i.indexOf(r)===-1&&(i.push(r),t[r.id]=!0)}return{plugins:i,localIds:t}}function Ld(e,t){return!t&&e===!1?null:e===!0?{}:e}function Ad(e,{plugins:t,localIds:i},s,n){const a=[],r=e.getContext();for(const o of t){const l=o.id,d=Ld(s[l],n);d!==null&&a.push({plugin:o,options:Bd(e.config,{plugin:o,local:i[l]},d,r)})}return a}function Bd(e,{plugin:t,local:i},s,n){const a=e.pluginScopeKeys(t),r=e.getOptionScopes(s,a);return i&&t.defaults&&r.push(t.defaults),e.createResolver(r,n,[""],{scriptable:!1,indexable:!1,allKeys:!0})}function is(e,t){const i=Z.datasets[e]||{};return((t.datasets||{})[e]||{}).indexAxis||t.indexAxis||i.indexAxis||"x"}function Id(e,t){let i=e;return e==="_index_"?i=t:e==="_value_"&&(i=t==="x"?"y":"x"),i}function jd(e,t){return e===t?"_index_":"_value_"}function $n(e){if(e==="x"||e==="y"||e==="r")return e}function Pd(e){if(e==="top"||e==="bottom")return"x";if(e==="left"||e==="right")return"y"}function ss(e,...t){if($n(e))return e;for(const i of t){const s=i.axis||Pd(i.position)||e.length>1&&$n(e[0].toLowerCase());if(s)return s}throw new Error(`Cannot determine type of '${e}' axis. Please provide 'axis' or 'position' option.`)}function Sn(e,t,i){if(i[t+"AxisID"]===e)return{axis:t}}function Dd(e,t){if(t.data&&t.data.datasets){const i=t.data.datasets.filter(s=>s.xAxisID===e||s.yAxisID===e);if(i.length)return Sn(e,"x",i[0])||Sn(e,"y",i[0])}return{}}function Od(e,t){const i=se[e.type]||{scales:{}},s=t.scales||{},n=is(e.type,t),a=Object.create(null);return Object.keys(s).forEach(r=>{const o=s[r];if(!V(o))return console.error(`Invalid scale configuration for scale: ${r}`);if(o._proxy)return console.warn(`Ignoring resolver passed as options for scale: ${r}`);const l=ss(r,o,Dd(r,e),Z.scales[o.type]),d=jd(l,n),c=i.scales||{};a[r]=Te(Object.create(null),[{axis:l},o,c[l],c[d]])}),e.data.datasets.forEach(r=>{const o=r.type||e.type,l=r.indexAxis||is(o,t),c=(se[o]||{}).scales||{};Object.keys(c).forEach(u=>{const h=Id(u,l),g=r[h+"AxisID"]||h;a[g]=a[g]||Object.create(null),Te(a[g],[{axis:h},s[g],c[u]])})}),Object.keys(a).forEach(r=>{const o=a[r];Te(o,[Z.scales[o.type],Z.scale])}),a}function Ya(e){const t=e.options||(e.options={});t.plugins=O(t.plugins,{}),t.scales=Od(e,t)}function Xa(e){return e=e||{},e.datasets=e.datasets||[],e.labels=e.labels||[],e}function Rd(e){return e=e||{},e.data=Xa(e.data),Ya(e),e}const Tn=new Map,Qa=new Set;function Ge(e,t){let i=Tn.get(e);return i||(i=t(),Tn.set(e,i),Qa.add(i)),i}const xe=(e,t,i)=>{const s=Nt(t,i);s!==void 0&&e.add(s)};class qd{constructor(t){this._config=Rd(t),this._scopeCache=new Map,this._resolverCache=new Map}get platform(){return this._config.platform}get type(){return this._config.type}set type(t){this._config.type=t}get data(){return this._config.data}set data(t){this._config.data=Xa(t)}get options(){return this._config.options}set options(t){this._config.options=t}get plugins(){return this._config.plugins}update(){const t=this._config;this.clearCache(),Ya(t)}clearCache(){this._scopeCache.clear(),this._resolverCache.clear()}datasetScopeKeys(t){return Ge(t,()=>[[`datasets.${t}`,""]])}datasetAnimationScopeKeys(t,i){return Ge(`${t}.transition.${i}`,()=>[[`datasets.${t}.transitions.${i}`,`transitions.${i}`],[`datasets.${t}`,""]])}datasetElementScopeKeys(t,i){return Ge(`${t}-${i}`,()=>[[`datasets.${t}.elements.${i}`,`datasets.${t}`,`elements.${i}`,""]])}pluginScopeKeys(t){const i=t.id,s=this.type;return Ge(`${s}-plugin-${i}`,()=>[[`plugins.${i}`,...t.additionalOptionScopes||[]]])}_cachedScopes(t,i){const s=this._scopeCache;let n=s.get(t);return(!n||i)&&(n=new Map,s.set(t,n)),n}getOptionScopes(t,i,s){const{options:n,type:a}=this,r=this._cachedScopes(t,s),o=r.get(i);if(o)return o;const l=new Set;i.forEach(c=>{t&&(l.add(t),c.forEach(u=>xe(l,t,u))),c.forEach(u=>xe(l,n,u)),c.forEach(u=>xe(l,se[a]||{},u)),c.forEach(u=>xe(l,Z,u)),c.forEach(u=>xe(l,Zi,u))});const d=Array.from(l);return d.length===0&&d.push(Object.create(null)),Qa.has(i)&&r.set(i,d),d}chartOptionScopes(){const{options:t,type:i}=this;return[t,se[i]||{},Z.datasets[i]||{},{type:i},Z,Zi]}resolveNamedOptions(t,i,s,n=[""]){const a={$shared:!0},{resolver:r,subPrefixes:o}=Mn(this._resolverCache,t,n);let l=r;if(Nd(r,i)){a.$shared=!1,s=Ht(s)?s():s;const d=this.createResolver(t,s,o);l=ge(r,s,d)}for(const d of i)a[d]=l[d];return a}createResolver(t,i,s=[""],n){const{resolver:a}=Mn(this._resolverCache,t,s);return V(i)?ge(a,i,void 0,n):a}}function Mn(e,t,i){let s=e.get(t);s||(s=new Map,e.set(t,s));const n=i.join();let a=s.get(n);return a||(a={resolver:_s(t,i),subPrefixes:i.filter(o=>!o.toLowerCase().includes("hover"))},s.set(n,a)),a}const Fd=e=>V(e)&&Object.getOwnPropertyNames(e).some(t=>Ht(e[t]));function Nd(e,t){const{isScriptable:i,isIndexable:s}=Ta(e);for(const n of t){const a=i(n),r=s(n),o=(r||a)&&e[n];if(a&&(Ht(o)||Fd(o))||r&&G(o))return!0}return!1}var Hd="4.5.1";const Vd=["top","bottom","left","right","chartArea"];function En(e,t){return e==="top"||e==="bottom"||Vd.indexOf(e)===-1&&t==="x"}function Cn(e,t){return function(i,s){return i[e]===s[e]?i[t]-s[t]:i[e]-s[e]}}function Ln(e){const t=e.chart,i=t.options.animation;t.notifyPlugins("afterRender"),K(i&&i.onComplete,[e],t)}function Wd(e){const t=e.chart,i=t.options.animation;K(i&&i.onProgress,[e],t)}function Ka(e){return Ts()&&typeof e=="string"?e=document.getElementById(e):e&&e.length&&(e=e[0]),e&&e.canvas&&(e=e.canvas),e}const ci={},An=e=>{const t=Ka(e);return Object.values(ci).filter(i=>i.canvas===t).pop()};function Ud(e,t,i){const s=Object.keys(e);for(const n of s){const a=+n;if(a>=t){const r=e[n];delete e[n],(i>0||a>t)&&(e[a+i]=r)}}}function Yd(e,t,i,s){return!i||e.type==="mouseout"?null:s?t:e}class vt{static register(...t){St.add(...t),Bn()}static unregister(...t){St.remove(...t),Bn()}constructor(t,i){const s=this.config=new qd(i),n=Ka(t),a=An(n);if(a)throw new Error("Canvas is already in use. Chart with ID '"+a.id+"' must be destroyed before the canvas with ID '"+a.canvas.id+"' can be reused.");const r=s.createResolver(s.chartOptionScopes(),this.getContext());this.platform=new(s.platform||ud(n)),this.platform.updateConfig(s);const o=this.platform.acquireContext(n,r.aspectRatio),l=o&&o.canvas,d=l&&l.height,c=l&&l.width;if(this.id=Yr(),this.ctx=o,this.canvas=l,this.width=c,this.height=d,this._options=r,this._aspectRatio=this.aspectRatio,this._layers=[],this._metasets=[],this._stacks=void 0,this.boxes=[],this.currentDevicePixelRatio=void 0,this.chartArea=void 0,this._active=[],this._lastEvent=void 0,this._listeners={},this._responsiveListeners=void 0,this._sortedMetasets=[],this.scales={},this._plugins=new Ed,this.$proxies={},this._hiddenIndices={},this.attached=!1,this._animationsDisabled=void 0,this.$context=void 0,this._doResize=uo(u=>this.update(u),r.resizeDelay||0),this._dataChanges=[],ci[this.id]=this,!o||!l){console.error("Failed to create chart: can't acquire context from the given item");return}Et.listen(this,"complete",Ln),Et.listen(this,"progress",Wd),this._initialize(),this.attached&&this.update()}get aspectRatio(){const{options:{aspectRatio:t,maintainAspectRatio:i},width:s,height:n,_aspectRatio:a}=this;return H(t)?i&&a?a:n?s/n:null:t}get data(){return this.config.data}set data(t){this.config.data=t}get options(){return this._options}set options(t){this.config.options=t}get registry(){return St}_initialize(){return this.notifyPlugins("beforeInit"),this.options.responsive?this.resize():tn(this,this.options.devicePixelRatio),this.bindEvents(),this.notifyPlugins("afterInit"),this}clear(){return Js(this.canvas,this.ctx),this}stop(){return Et.stop(this),this}resize(t,i){Et.running(this)?this._resizeBeforeDraw={width:t,height:i}:this._resize(t,i)}_resize(t,i){const s=this.options,n=this.canvas,a=s.maintainAspectRatio&&this.aspectRatio,r=this.platform.getMaximumSize(n,t,i,a),o=s.devicePixelRatio||this.platform.getDevicePixelRatio(),l=this.width?"resize":"attach";this.width=r.width,this.height=r.height,this._aspectRatio=this.aspectRatio,tn(this,o,!0)&&(this.notifyPlugins("resize",{size:r}),K(s.onResize,[this,r],this),this.attached&&this._doResize(l)&&this.render())}ensureScalesHaveIDs(){const i=this.options.scales||{};X(i,(s,n)=>{s.id=n})}buildOrUpdateScales(){const t=this.options,i=t.scales,s=this.scales,n=Object.keys(s).reduce((r,o)=>(r[o]=!1,r),{});let a=[];i&&(a=a.concat(Object.keys(i).map(r=>{const o=i[r],l=ss(r,o),d=l==="r",c=l==="x";return{options:o,dposition:d?"chartArea":c?"bottom":"left",dtype:d?"radialLinear":c?"category":"linear"}}))),X(a,r=>{const o=r.options,l=o.id,d=ss(l,o),c=O(o.type,r.dtype);(o.position===void 0||En(o.position,d)!==En(r.dposition))&&(o.position=r.dposition),n[l]=!0;let u=null;if(l in s&&s[l].type===c)u=s[l];else{const h=St.getScale(c);u=new h({id:l,type:c,ctx:this.ctx,chart:this}),s[u.id]=u}u.init(o,t)}),X(n,(r,o)=>{r||delete s[o]}),X(s,r=>{dt.configure(this,r,r.options),dt.addBox(this,r)})}_updateMetasets(){const t=this._metasets,i=this.data.datasets.length,s=t.length;if(t.sort((n,a)=>n.index-a.index),s>i){for(let n=i;n<s;++n)this._destroyDatasetMeta(n);t.splice(i,s-i)}this._sortedMetasets=t.slice(0).sort(Cn("order","index"))}_removeUnreferencedMetasets(){const{_metasets:t,data:{datasets:i}}=this;t.length>i.length&&delete this._stacks,t.forEach((s,n)=>{i.filter(a=>a===s._dataset).length===0&&this._destroyDatasetMeta(n)})}buildOrUpdateControllers(){const t=[],i=this.data.datasets;let s,n;for(this._removeUnreferencedMetasets(),s=0,n=i.length;s<n;s++){const a=i[s];let r=this.getDatasetMeta(s);const o=a.type||this.config.type;if(r.type&&r.type!==o&&(this._destroyDatasetMeta(s),r=this.getDatasetMeta(s)),r.type=o,r.indexAxis=a.indexAxis||is(o,this.options),r.order=a.order||0,r.index=s,r.label=""+a.label,r.visible=this.isDatasetVisible(s),r.controller)r.controller.updateIndex(s),r.controller.linkScales();else{const l=St.getController(o),{datasetElementType:d,dataElementType:c}=Z.datasets[o];Object.assign(l,{dataElementType:St.getElement(c),datasetElementType:d&&St.getElement(d)}),r.controller=new l(this,s),t.push(r.controller)}}return this._updateMetasets(),t}_resetElements(){X(this.data.datasets,(t,i)=>{this.getDatasetMeta(i).controller.reset()},this)}reset(){this._resetElements(),this.notifyPlugins("reset")}update(t){const i=this.config;i.update();const s=this._options=i.createResolver(i.chartOptionScopes(),this.getContext()),n=this._animationsDisabled=!s.animation;if(this._updateScales(),this._checkEventBindings(),this._updateHiddenIndices(),this._plugins.invalidate(),this.notifyPlugins("beforeUpdate",{mode:t,cancelable:!0})===!1)return;const a=this.buildOrUpdateControllers();this.notifyPlugins("beforeElementsUpdate");let r=0;for(let d=0,c=this.data.datasets.length;d<c;d++){const{controller:u}=this.getDatasetMeta(d),h=!n&&a.indexOf(u)===-1;u.buildOrUpdateElements(h),r=Math.max(+u.getMaxOverflow(),r)}r=this._minPadding=s.layout.autoPadding?r:0,this._updateLayout(r),n||X(a,d=>{d.reset()}),this._updateDatasets(t),this.notifyPlugins("afterUpdate",{mode:t}),this._layers.sort(Cn("z","_idx"));const{_active:o,_lastEvent:l}=this;l?this._eventHandler(l,!0):o.length&&this._updateHoverStyles(o,o,!0),this.render()}_updateScales(){X(this.scales,t=>{dt.removeBox(this,t)}),this.ensureScalesHaveIDs(),this.buildOrUpdateScales()}_checkEventBindings(){const t=this.options,i=new Set(Object.keys(this._listeners)),s=new Set(t.events);(!Ns(i,s)||!!this._responsiveListeners!==t.responsive)&&(this.unbindEvents(),this.bindEvents())}_updateHiddenIndices(){const{_hiddenIndices:t}=this,i=this._getUniformDataChanges()||[];for(const{method:s,start:n,count:a}of i){const r=s==="_removeElements"?-a:a;Ud(t,n,r)}}_getUniformDataChanges(){const t=this._dataChanges;if(!t||!t.length)return;this._dataChanges=[];const i=this.data.datasets.length,s=a=>new Set(t.filter(r=>r[0]===a).map((r,o)=>o+","+r.splice(1).join(","))),n=s(0);for(let a=1;a<i;a++)if(!Ns(n,s(a)))return;return Array.from(n).map(a=>a.split(",")).map(a=>({method:a[1],start:+a[2],count:+a[3]}))}_updateLayout(t){if(this.notifyPlugins("beforeLayout",{cancelable:!0})===!1)return;dt.update(this,this.width,this.height,t);const i=this.chartArea,s=i.width<=0||i.height<=0;this._layers=[],X(this.boxes,n=>{s&&n.position==="chartArea"||(n.configure&&n.configure(),this._layers.push(...n._layers()))},this),this._layers.forEach((n,a)=>{n._idx=a}),this.notifyPlugins("afterLayout")}_updateDatasets(t){if(this.notifyPlugins("beforeDatasetsUpdate",{mode:t,cancelable:!0})!==!1){for(let i=0,s=this.data.datasets.length;i<s;++i)this.getDatasetMeta(i).controller.configure();for(let i=0,s=this.data.datasets.length;i<s;++i)this._updateDataset(i,Ht(t)?t({datasetIndex:i}):t);this.notifyPlugins("afterDatasetsUpdate",{mode:t})}}_updateDataset(t,i){const s=this.getDatasetMeta(t),n={meta:s,index:t,mode:i,cancelable:!0};this.notifyPlugins("beforeDatasetUpdate",n)!==!1&&(s.controller._update(i),n.cancelable=!1,this.notifyPlugins("afterDatasetUpdate",n))}render(){this.notifyPlugins("beforeRender",{cancelable:!0})!==!1&&(Et.has(this)?this.attached&&!Et.running(this)&&Et.start(this):(this.draw(),Ln({chart:this})))}draw(){let t;if(this._resizeBeforeDraw){const{width:s,height:n}=this._resizeBeforeDraw;this._resizeBeforeDraw=null,this._resize(s,n)}if(this.clear(),this.width<=0||this.height<=0||this.notifyPlugins("beforeDraw",{cancelable:!0})===!1)return;const i=this._layers;for(t=0;t<i.length&&i[t].z<=0;++t)i[t].draw(this.chartArea);for(this._drawDatasets();t<i.length;++t)i[t].draw(this.chartArea);this.notifyPlugins("afterDraw")}_getSortedDatasetMetas(t){const i=this._sortedMetasets,s=[];let n,a;for(n=0,a=i.length;n<a;++n){const r=i[n];(!t||r.visible)&&s.push(r)}return s}getSortedVisibleDatasetMetas(){return this._getSortedDatasetMetas(!0)}_drawDatasets(){if(this.notifyPlugins("beforeDatasetsDraw",{cancelable:!0})===!1)return;const t=this.getSortedVisibleDatasetMetas();for(let i=t.length-1;i>=0;--i)this._drawDataset(t[i]);this.notifyPlugins("afterDatasetsDraw")}_drawDataset(t){const i=this.ctx,s={meta:t,index:t.index,cancelable:!0},n=Oa(this,t);this.notifyPlugins("beforeDatasetDraw",s)!==!1&&(n&&$i(i,n),t.controller.draw(),n&&Si(i),s.cancelable=!1,this.notifyPlugins("afterDatasetDraw",s))}isPointInArea(t){return It(t,this.chartArea,this._minPadding)}getElementsAtEventForMode(t,i,s,n){const a=Vl.modes[i];return typeof a=="function"?a(this,t,s,n):[]}getDatasetMeta(t){const i=this.data.datasets[t],s=this._metasets;let n=s.filter(a=>a&&a._dataset===i).pop();return n||(n={type:null,data:[],dataset:null,controller:null,hidden:null,xAxisID:null,yAxisID:null,order:i&&i.order||0,index:t,_dataset:i,_parsed:[],_sorted:!1},s.push(n)),n}getContext(){return this.$context||(this.$context=Vt(null,{chart:this,type:"chart"}))}getVisibleDatasetCount(){return this.getSortedVisibleDatasetMetas().length}isDatasetVisible(t){const i=this.data.datasets[t];if(!i)return!1;const s=this.getDatasetMeta(t);return typeof s.hidden=="boolean"?!s.hidden:!i.hidden}setDatasetVisibility(t,i){const s=this.getDatasetMeta(t);s.hidden=!i}toggleDataVisibility(t){this._hiddenIndices[t]=!this._hiddenIndices[t]}getDataVisibility(t){return!this._hiddenIndices[t]}_updateVisibility(t,i,s){const n=s?"show":"hide",a=this.getDatasetMeta(t),r=a.controller._resolveAnimations(void 0,n);Ie(i)?(a.data[i].hidden=!s,this.update()):(this.setDatasetVisibility(t,s),r.update(a,{visible:s}),this.update(o=>o.datasetIndex===t?n:void 0))}hide(t,i){this._updateVisibility(t,i,!1)}show(t,i){this._updateVisibility(t,i,!0)}_destroyDatasetMeta(t){const i=this._metasets[t];i&&i.controller&&i.controller._destroy(),delete this._metasets[t]}_stop(){let t,i;for(this.stop(),Et.remove(this),t=0,i=this.data.datasets.length;t<i;++t)this._destroyDatasetMeta(t)}destroy(){this.notifyPlugins("beforeDestroy");const{canvas:t,ctx:i}=this;this._stop(),this.config.clearCache(),t&&(this.unbindEvents(),Js(t,i),this.platform.releaseContext(i),this.canvas=null,this.ctx=null),delete ci[this.id],this.notifyPlugins("afterDestroy")}toBase64Image(...t){return this.canvas.toDataURL(...t)}bindEvents(){this.bindUserEvents(),this.options.responsive?this.bindResponsiveEvents():this.attached=!0}bindUserEvents(){const t=this._listeners,i=this.platform,s=(a,r)=>{i.addEventListener(this,a,r),t[a]=r},n=(a,r,o)=>{a.offsetX=r,a.offsetY=o,this._eventHandler(a)};X(this.options.events,a=>s(a,n))}bindResponsiveEvents(){this._responsiveListeners||(this._responsiveListeners={});const t=this._responsiveListeners,i=this.platform,s=(l,d)=>{i.addEventListener(this,l,d),t[l]=d},n=(l,d)=>{t[l]&&(i.removeEventListener(this,l,d),delete t[l])},a=(l,d)=>{this.canvas&&this.resize(l,d)};let r;const o=()=>{n("attach",o),this.attached=!0,this.resize(),s("resize",a),s("detach",r)};r=()=>{this.attached=!1,n("resize",a),this._stop(),this._resize(0,0),s("attach",o)},i.isAttached(this.canvas)?o():r()}unbindEvents(){X(this._listeners,(t,i)=>{this.platform.removeEventListener(this,i,t)}),this._listeners={},X(this._responsiveListeners,(t,i)=>{this.platform.removeEventListener(this,i,t)}),this._responsiveListeners=void 0}updateHoverStyle(t,i,s){const n=s?"set":"remove";let a,r,o,l;for(i==="dataset"&&(a=this.getDatasetMeta(t[0].datasetIndex),a.controller["_"+n+"DatasetHoverStyle"]()),o=0,l=t.length;o<l;++o){r=t[o];const d=r&&this.getDatasetMeta(r.datasetIndex).controller;d&&d[n+"HoverStyle"](r.element,r.datasetIndex,r.index)}}getActiveElements(){return this._active||[]}setActiveElements(t){const i=this._active||[],s=t.map(({datasetIndex:a,index:r})=>{const o=this.getDatasetMeta(a);if(!o)throw new Error("No dataset found at index "+a);return{datasetIndex:a,element:o.data[r],index:r}});!mi(s,i)&&(this._active=s,this._lastEvent=null,this._updateHoverStyles(s,i))}notifyPlugins(t,i,s){return this._plugins.notify(this,t,i,s)}isPluginEnabled(t){return this._plugins._cache.filter(i=>i.plugin.id===t).length===1}_updateHoverStyles(t,i,s){const n=this.options.hover,a=(l,d)=>l.filter(c=>!d.some(u=>c.datasetIndex===u.datasetIndex&&c.index===u.index)),r=a(i,t),o=s?t:a(t,i);r.length&&this.updateHoverStyle(r,n.mode,!1),o.length&&n.mode&&this.updateHoverStyle(o,n.mode,!0)}_eventHandler(t,i){const s={event:t,replay:i,cancelable:!0,inChartArea:this.isPointInArea(t)},n=r=>(r.options.events||this.options.events).includes(t.native.type);if(this.notifyPlugins("beforeEvent",s,n)===!1)return;const a=this._handleEvent(t,i,s.inChartArea);return s.cancelable=!1,this.notifyPlugins("afterEvent",s,n),(a||s.changed)&&this.render(),this}_handleEvent(t,i,s){const{_active:n=[],options:a}=this,r=i,o=this._getActiveElements(t,n,s,r),l=Zr(t),d=Yd(t,this._lastEvent,s,l);s&&(this._lastEvent=null,K(a.onHover,[t,o,this],this),l&&K(a.onClick,[t,o,this],this));const c=!mi(o,n);return(c||i)&&(this._active=o,this._updateHoverStyles(o,n,i)),this._lastEvent=d,c}_getActiveElements(t,i,s,n){if(t.type==="mouseout")return[];if(!s)return i;const a=this.options.hover;return this.getElementsAtEventForMode(t,a.mode,a,n)}}L(vt,"defaults",Z),L(vt,"instances",ci),L(vt,"overrides",se),L(vt,"registry",St),L(vt,"version",Hd),L(vt,"getChart",An);function Bn(){return X(vt.instances,e=>e._plugins.invalidate())}function Xd(e,t,i){const{startAngle:s,x:n,y:a,outerRadius:r,innerRadius:o,options:l}=t,{borderWidth:d,borderJoinStyle:c}=l,u=Math.min(d/r,lt(s-i));if(e.beginPath(),e.arc(n,a,r-d/2,s+u/2,i-u/2),o>0){const h=Math.min(d/o,lt(s-i));e.arc(n,a,o+d/2,i-h/2,s+h/2,!0)}else{const h=Math.min(d/2,r*lt(s-i));if(c==="round")e.arc(n,a,h,i-W/2,s+W/2,!0);else if(c==="bevel"){const g=2*h*h,m=-g*Math.cos(i+W/2)+n,p=-g*Math.sin(i+W/2)+a,f=g*Math.cos(s+W/2)+n,b=g*Math.sin(s+W/2)+a;e.lineTo(m,p),e.lineTo(f,b)}}e.closePath(),e.moveTo(0,0),e.rect(0,0,e.canvas.width,e.canvas.height),e.clip("evenodd")}function Qd(e,t,i){const{startAngle:s,pixelMargin:n,x:a,y:r,outerRadius:o,innerRadius:l}=t;let d=n/o;e.beginPath(),e.arc(a,r,o,s-d,i+d),l>n?(d=n/l,e.arc(a,r,l,i+d,s-d,!0)):e.arc(a,r,n,i+it,s-it),e.closePath(),e.clip()}function Kd(e){return ks(e,["outerStart","outerEnd","innerStart","innerEnd"])}function Jd(e,t,i,s){const n=Kd(e.options.borderRadius),a=(i-t)/2,r=Math.min(a,s*t/2),o=l=>{const d=(i-Math.min(a,l))*s/2;return at(l,0,Math.min(a,d))};return{outerStart:o(n.outerStart),outerEnd:o(n.outerEnd),innerStart:at(n.innerStart,0,r),innerEnd:at(n.innerEnd,0,r)}}function de(e,t,i,s){return{x:i+e*Math.cos(t),y:s+e*Math.sin(t)}}function xi(e,t,i,s,n,a){const{x:r,y:o,startAngle:l,pixelMargin:d,innerRadius:c}=t,u=Math.max(t.outerRadius+s+i-d,0),h=c>0?c+s+i+d:0;let g=0;const m=n-l;if(s){const I=c>0?c-s:0,M=u>0?u-s:0,j=(I+M)/2,q=j!==0?m*j/(j+s):m;g=(m-q)/2}const p=Math.max(.001,m*u-i/W)/u,f=(m-p)/2,b=l+f+g,v=n-f-g,{outerStart:w,outerEnd:y,innerStart:x,innerEnd:z}=Jd(t,h,u,v-b),S=u-w,$=u-y,C=b+w/S,T=v-y/$,B=h+x,P=h+z,R=b+x/B,U=v-z/P;if(e.beginPath(),a){const I=(C+T)/2;if(e.arc(r,o,u,C,I),e.arc(r,o,u,I,T),y>0){const N=de($,T,r,o);e.arc(N.x,N.y,y,T,v+it)}const M=de(P,v,r,o);if(e.lineTo(M.x,M.y),z>0){const N=de(P,U,r,o);e.arc(N.x,N.y,z,v+it,U+Math.PI)}const j=(v-z/h+(b+x/h))/2;if(e.arc(r,o,h,v-z/h,j,!0),e.arc(r,o,h,j,b+x/h,!0),x>0){const N=de(B,R,r,o);e.arc(N.x,N.y,x,R+Math.PI,b-it)}const q=de(S,b,r,o);if(e.lineTo(q.x,q.y),w>0){const N=de(S,C,r,o);e.arc(N.x,N.y,w,b-it,C)}}else{e.moveTo(r,o);const I=Math.cos(C)*u+r,M=Math.sin(C)*u+o;e.lineTo(I,M);const j=Math.cos(T)*u+r,q=Math.sin(T)*u+o;e.lineTo(j,q)}e.closePath()}function Gd(e,t,i,s,n){const{fullCircles:a,startAngle:r,circumference:o}=t;let l=t.endAngle;if(a){xi(e,t,i,s,l,n);for(let d=0;d<a;++d)e.fill();isNaN(o)||(l=r+(o%J||J))}return xi(e,t,i,s,l,n),e.fill(),l}function Zd(e,t,i,s,n){const{fullCircles:a,startAngle:r,circumference:o,options:l}=t,{borderWidth:d,borderJoinStyle:c,borderDash:u,borderDashOffset:h,borderRadius:g}=l,m=l.borderAlign==="inner";if(!d)return;e.setLineDash(u||[]),e.lineDashOffset=h,m?(e.lineWidth=d*2,e.lineJoin=c||"round"):(e.lineWidth=d,e.lineJoin=c||"bevel");let p=t.endAngle;if(a){xi(e,t,i,s,p,n);for(let f=0;f<a;++f)e.stroke();isNaN(o)||(p=r+(o%J||J))}m&&Qd(e,t,p),l.selfJoin&&p-r>=W&&g===0&&c!=="miter"&&Xd(e,t,p),a||(xi(e,t,i,s,p,n),e.stroke())}class _e extends kt{constructor(i){super();L(this,"circumference");L(this,"endAngle");L(this,"fullCircles");L(this,"innerRadius");L(this,"outerRadius");L(this,"pixelMargin");L(this,"startAngle");this.options=void 0,this.circumference=void 0,this.startAngle=void 0,this.endAngle=void 0,this.innerRadius=void 0,this.outerRadius=void 0,this.pixelMargin=0,this.fullCircles=0,i&&Object.assign(this,i)}inRange(i,s,n){const a=this.getProps(["x","y"],n),{angle:r,distance:o}=ba(a,{x:i,y:s}),{startAngle:l,endAngle:d,innerRadius:c,outerRadius:u,circumference:h}=this.getProps(["startAngle","endAngle","innerRadius","outerRadius","circumference"],n),g=(this.options.spacing+this.options.borderWidth)/2,m=O(h,d-l),p=je(r,l,d)&&l!==d,f=m>=J||p,b=At(o,c+g,u+g);return f&&b}getCenterPoint(i){const{x:s,y:n,startAngle:a,endAngle:r,innerRadius:o,outerRadius:l}=this.getProps(["x","y","startAngle","endAngle","innerRadius","outerRadius"],i),{offset:d,spacing:c}=this.options,u=(a+r)/2,h=(o+l+c+d)/2;return{x:s+Math.cos(u)*h,y:n+Math.sin(u)*h}}tooltipPosition(i){return this.getCenterPoint(i)}draw(i){const{options:s,circumference:n}=this,a=(s.offset||0)/4,r=(s.spacing||0)/2,o=s.circular;if(this.pixelMargin=s.borderAlign==="inner"?.33:0,this.fullCircles=n>J?Math.floor(n/J):0,n===0||this.innerRadius<0||this.outerRadius<0)return;i.save();const l=(this.startAngle+this.endAngle)/2;i.translate(Math.cos(l)*a,Math.sin(l)*a);const d=1-Math.sin(Math.min(W,n||0)),c=a*d;i.fillStyle=s.backgroundColor,i.strokeStyle=s.borderColor,Gd(i,this,c,r,o),Zd(i,this,c,r,o),i.restore()}}L(_e,"id","arc"),L(_e,"defaults",{borderAlign:"center",borderColor:"#fff",borderDash:[],borderDashOffset:0,borderJoinStyle:void 0,borderRadius:0,borderWidth:2,offset:0,spacing:0,angle:void 0,circular:!0,selfJoin:!1}),L(_e,"defaultRoutes",{backgroundColor:"backgroundColor"}),L(_e,"descriptors",{_scriptable:!0,_indexable:i=>i!=="borderDash"});function Ja(e,t,i=t){e.lineCap=O(i.borderCapStyle,t.borderCapStyle),e.setLineDash(O(i.borderDash,t.borderDash)),e.lineDashOffset=O(i.borderDashOffset,t.borderDashOffset),e.lineJoin=O(i.borderJoinStyle,t.borderJoinStyle),e.lineWidth=O(i.borderWidth,t.borderWidth),e.strokeStyle=O(i.borderColor,t.borderColor)}function tc(e,t,i){e.lineTo(i.x,i.y)}function ec(e){return e.stepped?ko:e.tension||e.cubicInterpolationMode==="monotone"?_o:tc}function Ga(e,t,i={}){const s=e.length,{start:n=0,end:a=s-1}=i,{start:r,end:o}=t,l=Math.max(n,r),d=Math.min(a,o),c=n<r&&a<r||n>o&&a>o;return{count:s,start:l,loop:t.loop,ilen:d<l&&!c?s+d-l:d-l}}function ic(e,t,i,s){const{points:n,options:a}=t,{count:r,start:o,loop:l,ilen:d}=Ga(n,i,s),c=ec(a);let{move:u=!0,reverse:h}=s||{},g,m,p;for(g=0;g<=d;++g)m=n[(o+(h?d-g:g))%r],!m.skip&&(u?(e.moveTo(m.x,m.y),u=!1):c(e,p,m,h,a.stepped),p=m);return l&&(m=n[(o+(h?d:0))%r],c(e,p,m,h,a.stepped)),!!l}function sc(e,t,i,s){const n=t.points,{count:a,start:r,ilen:o}=Ga(n,i,s),{move:l=!0,reverse:d}=s||{};let c=0,u=0,h,g,m,p,f,b;const v=y=>(r+(d?o-y:y))%a,w=()=>{p!==f&&(e.lineTo(c,f),e.lineTo(c,p),e.lineTo(c,b))};for(l&&(g=n[v(0)],e.moveTo(g.x,g.y)),h=0;h<=o;++h){if(g=n[v(h)],g.skip)continue;const y=g.x,x=g.y,z=y|0;z===m?(x<p?p=x:x>f&&(f=x),c=(u*c+y)/++u):(w(),e.lineTo(y,x),m=z,u=0,p=f=x),b=x}w()}function ns(e){const t=e.options,i=t.borderDash&&t.borderDash.length;return!e._decimated&&!e._loop&&!t.tension&&t.cubicInterpolationMode!=="monotone"&&!t.stepped&&!i?sc:ic}function nc(e){return e.stepped?il:e.tension||e.cubicInterpolationMode==="monotone"?sl:Jt}function ac(e,t,i,s){let n=t._path;n||(n=t._path=new Path2D,t.path(n,i,s)&&n.closePath()),Ja(e,t.options),e.stroke(n)}function rc(e,t,i,s){const{segments:n,options:a}=t,r=ns(t);for(const o of n)Ja(e,a,o.style),e.beginPath(),r(e,t,o,{start:i,end:i+s-1})&&e.closePath(),e.stroke()}const oc=typeof Path2D=="function";function lc(e,t,i,s){oc&&!t.options.segment?ac(e,t,i,s):rc(e,t,i,s)}class Rt extends kt{constructor(t){super(),this.animated=!0,this.options=void 0,this._chart=void 0,this._loop=void 0,this._fullLoop=void 0,this._path=void 0,this._points=void 0,this._segments=void 0,this._decimated=!1,this._pointsUpdated=!1,this._datasetIndex=void 0,t&&Object.assign(this,t)}updateControlPoints(t,i){const s=this.options;if((s.tension||s.cubicInterpolationMode==="monotone")&&!s.stepped&&!this._pointsUpdated){const n=s.spanGaps?this._loop:this._fullLoop;Xo(this._points,s,t,n,i),this._pointsUpdated=!0}}set points(t){this._points=t,delete this._segments,delete this._path,this._pointsUpdated=!1}get points(){return this._points}get segments(){return this._segments||(this._segments=dl(this,this.options.segment))}first(){const t=this.segments,i=this.points;return t.length&&i[t[0].start]}last(){const t=this.segments,i=this.points,s=t.length;return s&&i[t[s-1].end]}interpolate(t,i){const s=this.options,n=t[i],a=this.points,r=Da(this,{property:i,start:n,end:n});if(!r.length)return;const o=[],l=nc(s);let d,c;for(d=0,c=r.length;d<c;++d){const{start:u,end:h}=r[d],g=a[u],m=a[h];if(g===m){o.push(g);continue}const p=Math.abs((n-g[i])/(m[i]-g[i])),f=l(g,m,p,s.stepped);f[i]=t[i],o.push(f)}return o.length===1?o[0]:o}pathSegment(t,i,s){return ns(this)(t,this,i,s)}path(t,i,s){const n=this.segments,a=ns(this);let r=this._loop;i=i||0,s=s||this.points.length-i;for(const o of n)r&=a(t,this,o,{start:i,end:i+s-1});return!!r}draw(t,i,s,n){const a=this.options||{};(this.points||[]).length&&a.borderWidth&&(t.save(),lc(t,this,s,n),t.restore()),this.animated&&(this._pointsUpdated=!1,this._path=void 0)}}L(Rt,"id","line"),L(Rt,"defaults",{borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",borderWidth:3,capBezierPoints:!0,cubicInterpolationMode:"default",fill:!1,spanGaps:!1,stepped:!1,tension:0}),L(Rt,"defaultRoutes",{backgroundColor:"backgroundColor",borderColor:"borderColor"}),L(Rt,"descriptors",{_scriptable:!0,_indexable:t=>t!=="borderDash"&&t!=="fill"});function In(e,t,i,s){const n=e.options,{[i]:a}=e.getProps([i],s);return Math.abs(t-a)<n.radius+n.hitRadius}class ui extends kt{constructor(i){super();L(this,"parsed");L(this,"skip");L(this,"stop");this.options=void 0,this.parsed=void 0,this.skip=void 0,this.stop=void 0,i&&Object.assign(this,i)}inRange(i,s,n){const a=this.options,{x:r,y:o}=this.getProps(["x","y"],n);return Math.pow(i-r,2)+Math.pow(s-o,2)<Math.pow(a.hitRadius+a.radius,2)}inXRange(i,s){return In(this,i,"x",s)}inYRange(i,s){return In(this,i,"y",s)}getCenterPoint(i){const{x:s,y:n}=this.getProps(["x","y"],i);return{x:s,y:n}}size(i){i=i||this.options||{};let s=i.radius||0;s=Math.max(s,s&&i.hoverRadius||0);const n=s&&i.borderWidth||0;return(s+n)*2}draw(i,s){const n=this.options;this.skip||n.radius<.1||!It(this,s,this.size(n)/2)||(i.strokeStyle=n.borderColor,i.lineWidth=n.borderWidth,i.fillStyle=n.backgroundColor,ts(i,n,this.x,this.y))}getRange(){const i=this.options||{};return i.radius+i.hitRadius}}L(ui,"id","point"),L(ui,"defaults",{borderWidth:1,hitRadius:1,hoverBorderWidth:1,hoverRadius:4,pointStyle:"circle",radius:3,rotation:0}),L(ui,"defaultRoutes",{backgroundColor:"backgroundColor",borderColor:"borderColor"});function Za(e,t){const{x:i,y:s,base:n,width:a,height:r}=e.getProps(["x","y","base","width","height"],t);let o,l,d,c,u;return e.horizontal?(u=r/2,o=Math.min(i,n),l=Math.max(i,n),d=s-u,c=s+u):(u=a/2,o=i-u,l=i+u,d=Math.min(s,n),c=Math.max(s,n)),{left:o,top:d,right:l,bottom:c}}function qt(e,t,i,s){return e?0:at(t,i,s)}function dc(e,t,i){const s=e.options.borderWidth,n=e.borderSkipped,a=Sa(s);return{t:qt(n.top,a.top,0,i),r:qt(n.right,a.right,0,t),b:qt(n.bottom,a.bottom,0,i),l:qt(n.left,a.left,0,t)}}function cc(e,t,i){const{enableBorderRadius:s}=e.getProps(["enableBorderRadius"]),n=e.options.borderRadius,a=te(n),r=Math.min(t,i),o=e.borderSkipped,l=s||V(n);return{topLeft:qt(!l||o.top||o.left,a.topLeft,0,r),topRight:qt(!l||o.top||o.right,a.topRight,0,r),bottomLeft:qt(!l||o.bottom||o.left,a.bottomLeft,0,r),bottomRight:qt(!l||o.bottom||o.right,a.bottomRight,0,r)}}function uc(e){const t=Za(e),i=t.right-t.left,s=t.bottom-t.top,n=dc(e,i/2,s/2),a=cc(e,i/2,s/2);return{outer:{x:t.left,y:t.top,w:i,h:s,radius:a},inner:{x:t.left+n.l,y:t.top+n.t,w:i-n.l-n.r,h:s-n.t-n.b,radius:{topLeft:Math.max(0,a.topLeft-Math.max(n.t,n.l)),topRight:Math.max(0,a.topRight-Math.max(n.t,n.r)),bottomLeft:Math.max(0,a.bottomLeft-Math.max(n.b,n.l)),bottomRight:Math.max(0,a.bottomRight-Math.max(n.b,n.r))}}}}function Ui(e,t,i,s){const n=t===null,a=i===null,o=e&&!(n&&a)&&Za(e,s);return o&&(n||At(t,o.left,o.right))&&(a||At(i,o.top,o.bottom))}function hc(e){return e.topLeft||e.topRight||e.bottomLeft||e.bottomRight}function gc(e,t){e.rect(t.x,t.y,t.w,t.h)}function Yi(e,t,i={}){const s=e.x!==i.x?-t:0,n=e.y!==i.y?-t:0,a=(e.x+e.w!==i.x+i.w?t:0)-s,r=(e.y+e.h!==i.y+i.h?t:0)-n;return{x:e.x+s,y:e.y+n,w:e.w+a,h:e.h+r,radius:e.radius}}class hi extends kt{constructor(t){super(),this.options=void 0,this.horizontal=void 0,this.base=void 0,this.width=void 0,this.height=void 0,this.inflateAmount=void 0,t&&Object.assign(this,t)}draw(t){const{inflateAmount:i,options:{borderColor:s,backgroundColor:n}}=this,{inner:a,outer:r}=uc(this),o=hc(r.radius)?Pe:gc;t.save(),(r.w!==a.w||r.h!==a.h)&&(t.beginPath(),o(t,Yi(r,i,a)),t.clip(),o(t,Yi(a,-i,r)),t.fillStyle=s,t.fill("evenodd")),t.beginPath(),o(t,Yi(a,i)),t.fillStyle=n,t.fill(),t.restore()}inRange(t,i,s){return Ui(this,t,i,s)}inXRange(t,i){return Ui(this,t,null,i)}inYRange(t,i){return Ui(this,null,t,i)}getCenterPoint(t){const{x:i,y:s,base:n,horizontal:a}=this.getProps(["x","y","base","horizontal"],t);return{x:a?(i+n)/2:i,y:a?s:(s+n)/2}}getRange(t){return t==="x"?this.width/2:this.height/2}}L(hi,"id","bar"),L(hi,"defaults",{borderSkipped:"start",borderWidth:0,borderRadius:0,inflateAmount:"auto",pointStyle:void 0}),L(hi,"defaultRoutes",{backgroundColor:"backgroundColor",borderColor:"borderColor"});var mc=Object.freeze({__proto__:null,ArcElement:_e,BarElement:hi,LineElement:Rt,PointElement:ui});const as=["rgb(54, 162, 235)","rgb(255, 99, 132)","rgb(255, 159, 64)","rgb(255, 205, 86)","rgb(75, 192, 192)","rgb(153, 102, 255)","rgb(201, 203, 207)"],jn=as.map(e=>e.replace("rgb(","rgba(").replace(")",", 0.5)"));function tr(e){return as[e%as.length]}function er(e){return jn[e%jn.length]}function pc(e,t){return e.borderColor=tr(t),e.backgroundColor=er(t),++t}function fc(e,t){return e.backgroundColor=e.data.map(()=>tr(t++)),t}function bc(e,t){return e.backgroundColor=e.data.map(()=>er(t++)),t}function yc(e){let t=0;return(i,s)=>{const n=e.getDatasetMeta(s).controller;n instanceof Gt?t=fc(i,t):n instanceof Le?t=bc(i,t):n&&(t=pc(i,t))}}function Pn(e){let t;for(t in e)if(e[t].borderColor||e[t].backgroundColor)return!0;return!1}function vc(e){return e&&(e.borderColor||e.backgroundColor)}function xc(){return Z.borderColor!=="rgba(0,0,0,0.1)"||Z.backgroundColor!=="rgba(0,0,0,0.1)"}var wc={id:"colors",defaults:{enabled:!0,forceOverride:!1},beforeLayout(e,t,i){if(!i.enabled)return;const{data:{datasets:s},options:n}=e.config,{elements:a}=n,r=Pn(s)||vc(n)||a&&Pn(a)||xc();if(!i.forceOverride&&r)return;const o=yc(e);s.forEach(o)}};function zc(e,t,i,s,n){const a=n.samples||s;if(a>=i)return e.slice(t,t+i);const r=[],o=(i-2)/(a-2);let l=0;const d=t+i-1;let c=t,u,h,g,m,p;for(r[l++]=e[c],u=0;u<a-2;u++){let f=0,b=0,v;const w=Math.floor((u+1)*o)+1+t,y=Math.min(Math.floor((u+2)*o)+1,i)+t,x=y-w;for(v=w;v<y;v++)f+=e[v].x,b+=e[v].y;f/=x,b/=x;const z=Math.floor(u*o)+1+t,S=Math.min(Math.floor((u+1)*o)+1,i)+t,{x:$,y:C}=e[c];for(g=m=-1,v=z;v<S;v++)m=.5*Math.abs(($-f)*(e[v].y-C)-($-e[v].x)*(b-C)),m>g&&(g=m,h=e[v],p=v);r[l++]=h,c=p}return r[l++]=e[d],r}function kc(e,t,i,s){let n=0,a=0,r,o,l,d,c,u,h,g,m,p;const f=[],b=t+i-1,v=e[t].x,y=e[b].x-v;for(r=t;r<t+i;++r){o=e[r],l=(o.x-v)/y*s,d=o.y;const x=l|0;if(x===c)d<m?(m=d,u=r):d>p&&(p=d,h=r),n=(a*n+o.x)/++a;else{const z=r-1;if(!H(u)&&!H(h)){const S=Math.min(u,h),$=Math.max(u,h);S!==g&&S!==z&&f.push({...e[S],x:n}),$!==g&&$!==z&&f.push({...e[$],x:n})}r>0&&z!==g&&f.push(e[z]),f.push(o),c=x,a=0,m=p=d,u=h=g=r}}return f}function ir(e){if(e._decimated){const t=e._data;delete e._decimated,delete e._data,Object.defineProperty(e,"data",{configurable:!0,enumerable:!0,writable:!0,value:t})}}function Dn(e){e.data.datasets.forEach(t=>{ir(t)})}function _c(e,t){const i=t.length;let s=0,n;const{iScale:a}=e,{min:r,max:o,minDefined:l,maxDefined:d}=a.getUserBounds();return l&&(s=at(Bt(t,a.axis,r).lo,0,i-1)),d?n=at(Bt(t,a.axis,o).hi+1,s,i)-s:n=i-s,{start:s,count:n}}var $c={id:"decimation",defaults:{algorithm:"min-max",enabled:!1},beforeElementsUpdate:(e,t,i)=>{if(!i.enabled){Dn(e);return}const s=e.width;e.data.datasets.forEach((n,a)=>{const{_data:r,indexAxis:o}=n,l=e.getDatasetMeta(a),d=r||n.data;if(ze([o,e.options.indexAxis])==="y"||!l.controller.supportsDecimation)return;const c=e.scales[l.xAxisID];if(c.type!=="linear"&&c.type!=="time"||e.options.parsing)return;let{start:u,count:h}=_c(l,d);const g=i.threshold||4*s;if(h<=g){ir(n);return}H(r)&&(n._data=d,delete n.data,Object.defineProperty(n,"data",{configurable:!0,enumerable:!0,get:function(){return this._decimated},set:function(p){this._data=p}}));let m;switch(i.algorithm){case"lttb":m=zc(d,u,h,s,i);break;case"min-max":m=kc(d,u,h,s);break;default:throw new Error(`Unsupported decimation algorithm '${i.algorithm}'`)}n._decimated=m})},destroy(e){Dn(e)}};function Sc(e,t,i){const s=e.segments,n=e.points,a=t.points,r=[];for(const o of s){let{start:l,end:d}=o;d=Ei(l,d,n);const c=rs(i,n[l],n[d],o.loop);if(!t.segments){r.push({source:o,target:c,start:n[l],end:n[d]});continue}const u=Da(t,c);for(const h of u){const g=rs(i,a[h.start],a[h.end],h.loop),m=Pa(o,n,g);for(const p of m)r.push({source:p,target:h,start:{[i]:On(c,g,"start",Math.max)},end:{[i]:On(c,g,"end",Math.min)}})}}return r}function rs(e,t,i,s){if(s)return;let n=t[e],a=i[e];return e==="angle"&&(n=lt(n),a=lt(a)),{property:e,start:n,end:a}}function Tc(e,t){const{x:i=null,y:s=null}=e||{},n=t.points,a=[];return t.segments.forEach(({start:r,end:o})=>{o=Ei(r,o,n);const l=n[r],d=n[o];s!==null?(a.push({x:l.x,y:s}),a.push({x:d.x,y:s})):i!==null&&(a.push({x:i,y:l.y}),a.push({x:i,y:d.y}))}),a}function Ei(e,t,i){for(;t>e;t--){const s=i[t];if(!isNaN(s.x)&&!isNaN(s.y))break}return t}function On(e,t,i,s){return e&&t?s(e[i],t[i]):e?e[i]:t?t[i]:0}function sr(e,t){let i=[],s=!1;return G(e)?(s=!0,i=e):i=Tc(e,t),i.length?new Rt({points:i,options:{tension:0},_loop:s,_fullLoop:s}):null}function Rn(e){return e&&e.fill!==!1}function Mc(e,t,i){let n=e[t].fill;const a=[t];let r;if(!i)return n;for(;n!==!1&&a.indexOf(n)===-1;){if(!tt(n))return n;if(r=e[n],!r)return!1;if(r.visible)return n;a.push(n),n=r.fill}return!1}function Ec(e,t,i){const s=Bc(e);if(V(s))return isNaN(s.value)?!1:s;let n=parseFloat(s);return tt(n)&&Math.floor(n)===n?Cc(s[0],t,n,i):["origin","start","end","stack","shape"].indexOf(s)>=0&&s}function Cc(e,t,i,s){return(e==="-"||e==="+")&&(i=t+i),i===t||i<0||i>=s?!1:i}function Lc(e,t){let i=null;return e==="start"?i=t.bottom:e==="end"?i=t.top:V(e)?i=t.getPixelForValue(e.value):t.getBasePixel&&(i=t.getBasePixel()),i}function Ac(e,t,i){let s;return e==="start"?s=i:e==="end"?s=t.options.reverse?t.min:t.max:V(e)?s=e.value:s=t.getBaseValue(),s}function Bc(e){const t=e.options,i=t.fill;let s=O(i&&i.target,i);return s===void 0&&(s=!!t.backgroundColor),s===!1||s===null?!1:s===!0?"origin":s}function Ic(e){const{scale:t,index:i,line:s}=e,n=[],a=s.segments,r=s.points,o=jc(t,i);o.push(sr({x:null,y:t.bottom},s));for(let l=0;l<a.length;l++){const d=a[l];for(let c=d.start;c<=d.end;c++)Pc(n,r[c],o)}return new Rt({points:n,options:{}})}function jc(e,t){const i=[],s=e.getMatchingVisibleMetas("line");for(let n=0;n<s.length;n++){const a=s[n];if(a.index===t)break;a.hidden||i.unshift(a.dataset)}return i}function Pc(e,t,i){const s=[];for(let n=0;n<i.length;n++){const a=i[n],{first:r,last:o,point:l}=Dc(a,t,"x");if(!(!l||r&&o)){if(r)s.unshift(l);else if(e.push(l),!o)break}}e.push(...s)}function Dc(e,t,i){const s=e.interpolate(t,i);if(!s)return{};const n=s[i],a=e.segments,r=e.points;let o=!1,l=!1;for(let d=0;d<a.length;d++){const c=a[d],u=r[c.start][i],h=r[c.end][i];if(At(n,u,h)){o=n===u,l=n===h;break}}return{first:o,last:l,point:s}}class nr{constructor(t){this.x=t.x,this.y=t.y,this.radius=t.radius}pathSegment(t,i,s){const{x:n,y:a,radius:r}=this;return i=i||{start:0,end:J},t.arc(n,a,r,i.end,i.start,!0),!s.bounds}interpolate(t){const{x:i,y:s,radius:n}=this,a=t.angle;return{x:i+Math.cos(a)*n,y:s+Math.sin(a)*n,angle:a}}}function Oc(e){const{chart:t,fill:i,line:s}=e;if(tt(i))return Rc(t,i);if(i==="stack")return Ic(e);if(i==="shape")return!0;const n=qc(e);return n instanceof nr?n:sr(n,s)}function Rc(e,t){const i=e.getDatasetMeta(t);return i&&e.isDatasetVisible(t)?i.dataset:null}function qc(e){return(e.scale||{}).getPointPositionForValue?Nc(e):Fc(e)}function Fc(e){const{scale:t={},fill:i}=e,s=Lc(i,t);if(tt(s)){const n=t.isHorizontal();return{x:n?s:null,y:n?null:s}}return null}function Nc(e){const{scale:t,fill:i}=e,s=t.options,n=t.getLabels().length,a=s.reverse?t.max:t.min,r=Ac(i,t,a),o=[];if(s.grid.circular){const l=t.getPointPositionForValue(0,a);return new nr({x:l.x,y:l.y,radius:t.getDistanceFromCenterForValue(r)})}for(let l=0;l<n;++l)o.push(t.getPointPositionForValue(l,r));return o}function Xi(e,t,i){const s=Oc(t),{chart:n,index:a,line:r,scale:o,axis:l}=t,d=r.options,c=d.fill,u=d.backgroundColor,{above:h=u,below:g=u}=c||{},m=n.getDatasetMeta(a),p=Oa(n,m);s&&r.points.length&&($i(e,i),Hc(e,{line:r,target:s,above:h,below:g,area:i,scale:o,axis:l,clip:p}),Si(e))}function Hc(e,t){const{line:i,target:s,above:n,below:a,area:r,scale:o,clip:l}=t,d=i._loop?"angle":t.axis;e.save();let c=a;a!==n&&(d==="x"?(qn(e,s,r.top),Qi(e,{line:i,target:s,color:n,scale:o,property:d,clip:l}),e.restore(),e.save(),qn(e,s,r.bottom)):d==="y"&&(Fn(e,s,r.left),Qi(e,{line:i,target:s,color:a,scale:o,property:d,clip:l}),e.restore(),e.save(),Fn(e,s,r.right),c=n)),Qi(e,{line:i,target:s,color:c,scale:o,property:d,clip:l}),e.restore()}function qn(e,t,i){const{segments:s,points:n}=t;let a=!0,r=!1;e.beginPath();for(const o of s){const{start:l,end:d}=o,c=n[l],u=n[Ei(l,d,n)];a?(e.moveTo(c.x,c.y),a=!1):(e.lineTo(c.x,i),e.lineTo(c.x,c.y)),r=!!t.pathSegment(e,o,{move:r}),r?e.closePath():e.lineTo(u.x,i)}e.lineTo(t.first().x,i),e.closePath(),e.clip()}function Fn(e,t,i){const{segments:s,points:n}=t;let a=!0,r=!1;e.beginPath();for(const o of s){const{start:l,end:d}=o,c=n[l],u=n[Ei(l,d,n)];a?(e.moveTo(c.x,c.y),a=!1):(e.lineTo(i,c.y),e.lineTo(c.x,c.y)),r=!!t.pathSegment(e,o,{move:r}),r?e.closePath():e.lineTo(i,u.y)}e.lineTo(i,t.first().y),e.closePath(),e.clip()}function Qi(e,t){const{line:i,target:s,property:n,color:a,scale:r,clip:o}=t,l=Sc(i,s,n);for(const{source:d,target:c,start:u,end:h}of l){const{style:{backgroundColor:g=a}={}}=d,m=s!==!0;e.save(),e.fillStyle=g,Vc(e,r,o,m&&rs(n,u,h)),e.beginPath();const p=!!i.pathSegment(e,d);let f;if(m){p?e.closePath():Nn(e,s,h,n);const b=!!s.pathSegment(e,c,{move:p,reverse:!0});f=p&&b,f||Nn(e,s,u,n)}e.closePath(),e.fill(f?"evenodd":"nonzero"),e.restore()}}function Vc(e,t,i,s){const n=t.chart.chartArea,{property:a,start:r,end:o}=s||{};if(a==="x"||a==="y"){let l,d,c,u;a==="x"?(l=r,d=n.top,c=o,u=n.bottom):(l=n.left,d=r,c=n.right,u=o),e.beginPath(),i&&(l=Math.max(l,i.left),c=Math.min(c,i.right),d=Math.max(d,i.top),u=Math.min(u,i.bottom)),e.rect(l,d,c-l,u-d),e.clip()}}function Nn(e,t,i,s){const n=t.interpolate(i,s);n&&e.lineTo(n.x,n.y)}var Wc={id:"filler",afterDatasetsUpdate(e,t,i){const s=(e.data.datasets||[]).length,n=[];let a,r,o,l;for(r=0;r<s;++r)a=e.getDatasetMeta(r),o=a.dataset,l=null,o&&o.options&&o instanceof Rt&&(l={visible:e.isDatasetVisible(r),index:r,fill:Ec(o,r,s),chart:e,axis:a.controller.options.indexAxis,scale:a.vScale,line:o}),a.$filler=l,n.push(l);for(r=0;r<s;++r)l=n[r],!(!l||l.fill===!1)&&(l.fill=Mc(n,r,i.propagate))},beforeDraw(e,t,i){const s=i.drawTime==="beforeDraw",n=e.getSortedVisibleDatasetMetas(),a=e.chartArea;for(let r=n.length-1;r>=0;--r){const o=n[r].$filler;o&&(o.line.updateControlPoints(a,o.axis),s&&o.fill&&Xi(e.ctx,o,a))}},beforeDatasetsDraw(e,t,i){if(i.drawTime!=="beforeDatasetsDraw")return;const s=e.getSortedVisibleDatasetMetas();for(let n=s.length-1;n>=0;--n){const a=s[n].$filler;Rn(a)&&Xi(e.ctx,a,e.chartArea)}},beforeDatasetDraw(e,t,i){const s=t.meta.$filler;!Rn(s)||i.drawTime!=="beforeDatasetDraw"||Xi(e.ctx,s,e.chartArea)},defaults:{propagate:!0,drawTime:"beforeDatasetDraw"}};const Hn=(e,t)=>{let{boxHeight:i=t,boxWidth:s=t}=e;return e.usePointStyle&&(i=Math.min(i,t),s=e.pointStyleWidth||Math.min(s,t)),{boxWidth:s,boxHeight:i,itemHeight:Math.max(t,i)}},Uc=(e,t)=>e!==null&&t!==null&&e.datasetIndex===t.datasetIndex&&e.index===t.index;class Vn extends kt{constructor(t){super(),this._added=!1,this.legendHitBoxes=[],this._hoveredItem=null,this.doughnutMode=!1,this.chart=t.chart,this.options=t.options,this.ctx=t.ctx,this.legendItems=void 0,this.columnSizes=void 0,this.lineWidths=void 0,this.maxHeight=void 0,this.maxWidth=void 0,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.height=void 0,this.width=void 0,this._margins=void 0,this.position=void 0,this.weight=void 0,this.fullSize=void 0}update(t,i,s){this.maxWidth=t,this.maxHeight=i,this._margins=s,this.setDimensions(),this.buildLabels(),this.fit()}setDimensions(){this.isHorizontal()?(this.width=this.maxWidth,this.left=this._margins.left,this.right=this.width):(this.height=this.maxHeight,this.top=this._margins.top,this.bottom=this.height)}buildLabels(){const t=this.options.labels||{};let i=K(t.generateLabels,[this.chart],this)||[];t.filter&&(i=i.filter(s=>t.filter(s,this.chart.data))),t.sort&&(i=i.sort((s,n)=>t.sort(s,n,this.chart.data))),this.options.reverse&&i.reverse(),this.legendItems=i}fit(){const{options:t,ctx:i}=this;if(!t.display){this.width=this.height=0;return}const s=t.labels,n=nt(s.font),a=n.size,r=this._computeTitleHeight(),{boxWidth:o,itemHeight:l}=Hn(s,a);let d,c;i.font=n.string,this.isHorizontal()?(d=this.maxWidth,c=this._fitRows(r,a,o,l)+10):(c=this.maxHeight,d=this._fitCols(r,n,o,l)+10),this.width=Math.min(d,t.maxWidth||this.maxWidth),this.height=Math.min(c,t.maxHeight||this.maxHeight)}_fitRows(t,i,s,n){const{ctx:a,maxWidth:r,options:{labels:{padding:o}}}=this,l=this.legendHitBoxes=[],d=this.lineWidths=[0],c=n+o;let u=t;a.textAlign="left",a.textBaseline="middle";let h=-1,g=-c;return this.legendItems.forEach((m,p)=>{const f=s+i/2+a.measureText(m.text).width;(p===0||d[d.length-1]+f+2*o>r)&&(u+=c,d[d.length-(p>0?0:1)]=0,g+=c,h++),l[p]={left:0,top:g,row:h,width:f,height:n},d[d.length-1]+=f+o}),u}_fitCols(t,i,s,n){const{ctx:a,maxHeight:r,options:{labels:{padding:o}}}=this,l=this.legendHitBoxes=[],d=this.columnSizes=[],c=r-t;let u=o,h=0,g=0,m=0,p=0;return this.legendItems.forEach((f,b)=>{const{itemWidth:v,itemHeight:w}=Yc(s,i,a,f,n);b>0&&g+w+2*o>c&&(u+=h+o,d.push({width:h,height:g}),m+=h+o,p++,h=g=0),l[b]={left:m,top:g,col:p,width:v,height:w},h=Math.max(h,v),g+=w+o}),u+=h,d.push({width:h,height:g}),u}adjustHitBoxes(){if(!this.options.display)return;const t=this._computeTitleHeight(),{legendHitBoxes:i,options:{align:s,labels:{padding:n},rtl:a}}=this,r=ce(a,this.left,this.width);if(this.isHorizontal()){let o=0,l=ot(s,this.left+n,this.right-this.lineWidths[o]);for(const d of i)o!==d.row&&(o=d.row,l=ot(s,this.left+n,this.right-this.lineWidths[o])),d.top+=this.top+t+n,d.left=r.leftForLtr(r.x(l),d.width),l+=d.width+n}else{let o=0,l=ot(s,this.top+t+n,this.bottom-this.columnSizes[o].height);for(const d of i)d.col!==o&&(o=d.col,l=ot(s,this.top+t+n,this.bottom-this.columnSizes[o].height)),d.top=l,d.left+=this.left+n,d.left=r.leftForLtr(r.x(d.left),d.width),l+=d.height+n}}isHorizontal(){return this.options.position==="top"||this.options.position==="bottom"}draw(){if(this.options.display){const t=this.ctx;$i(t,this),this._draw(),Si(t)}}_draw(){const{options:t,columnSizes:i,lineWidths:s,ctx:n}=this,{align:a,labels:r}=t,o=Z.color,l=ce(t.rtl,this.left,this.width),d=nt(r.font),{padding:c}=r,u=d.size,h=u/2;let g;this.drawTitle(),n.textAlign=l.textAlign("left"),n.textBaseline="middle",n.lineWidth=.5,n.font=d.string;const{boxWidth:m,boxHeight:p,itemHeight:f}=Hn(r,u),b=function(z,S,$){if(isNaN(m)||m<=0||isNaN(p)||p<0)return;n.save();const C=O($.lineWidth,1);if(n.fillStyle=O($.fillStyle,o),n.lineCap=O($.lineCap,"butt"),n.lineDashOffset=O($.lineDashOffset,0),n.lineJoin=O($.lineJoin,"miter"),n.lineWidth=C,n.strokeStyle=O($.strokeStyle,o),n.setLineDash(O($.lineDash,[])),r.usePointStyle){const T={radius:p*Math.SQRT2/2,pointStyle:$.pointStyle,rotation:$.rotation,borderWidth:C},B=l.xPlus(z,m/2),P=S+h;$a(n,T,B,P,r.pointStyleWidth&&m)}else{const T=S+Math.max((u-p)/2,0),B=l.leftForLtr(z,m),P=te($.borderRadius);n.beginPath(),Object.values(P).some(R=>R!==0)?Pe(n,{x:B,y:T,w:m,h:p,radius:P}):n.rect(B,T,m,p),n.fill(),C!==0&&n.stroke()}n.restore()},v=function(z,S,$){ne(n,$.text,z,S+f/2,d,{strikethrough:$.hidden,textAlign:l.textAlign($.textAlign)})},w=this.isHorizontal(),y=this._computeTitleHeight();w?g={x:ot(a,this.left+c,this.right-s[0]),y:this.top+c+y,line:0}:g={x:this.left+c,y:ot(a,this.top+y+c,this.bottom-i[0].height),line:0},Ba(this.ctx,t.textDirection);const x=f+c;this.legendItems.forEach((z,S)=>{n.strokeStyle=z.fontColor,n.fillStyle=z.fontColor;const $=n.measureText(z.text).width,C=l.textAlign(z.textAlign||(z.textAlign=r.textAlign)),T=m+h+$;let B=g.x,P=g.y;l.setWidth(this.width),w?S>0&&B+T+c>this.right&&(P=g.y+=x,g.line++,B=g.x=ot(a,this.left+c,this.right-s[g.line])):S>0&&P+x>this.bottom&&(B=g.x=B+i[g.line].width+c,g.line++,P=g.y=ot(a,this.top+y+c,this.bottom-i[g.line].height));const R=l.x(B);if(b(R,P,z),B=ho(C,B+m+h,w?B+T:this.right,t.rtl),v(l.x(B),P,z),w)g.x+=T+c;else if(typeof z.text!="string"){const U=d.lineHeight;g.y+=ar(z,U)+c}else g.y+=x}),Ia(this.ctx,t.textDirection)}drawTitle(){const t=this.options,i=t.title,s=nt(i.font),n=ct(i.padding);if(!i.display)return;const a=ce(t.rtl,this.left,this.width),r=this.ctx,o=i.position,l=s.size/2,d=n.top+l;let c,u=this.left,h=this.width;if(this.isHorizontal())h=Math.max(...this.lineWidths),c=this.top+d,u=ot(t.align,u,this.right-h);else{const m=this.columnSizes.reduce((p,f)=>Math.max(p,f.height),0);c=d+ot(t.align,this.top,this.bottom-m-t.labels.padding-this._computeTitleHeight())}const g=ot(o,u,u+h);r.textAlign=a.textAlign(ws(o)),r.textBaseline="middle",r.strokeStyle=i.color,r.fillStyle=i.color,r.font=s.string,ne(r,i.text,g,c,s)}_computeTitleHeight(){const t=this.options.title,i=nt(t.font),s=ct(t.padding);return t.display?i.lineHeight+s.height:0}_getLegendItemAt(t,i){let s,n,a;if(At(t,this.left,this.right)&&At(i,this.top,this.bottom)){for(a=this.legendHitBoxes,s=0;s<a.length;++s)if(n=a[s],At(t,n.left,n.left+n.width)&&At(i,n.top,n.top+n.height))return this.legendItems[s]}return null}handleEvent(t){const i=this.options;if(!Kc(t.type,i))return;const s=this._getLegendItemAt(t.x,t.y);if(t.type==="mousemove"||t.type==="mouseout"){const n=this._hoveredItem,a=Uc(n,s);n&&!a&&K(i.onLeave,[t,n,this],this),this._hoveredItem=s,s&&!a&&K(i.onHover,[t,s,this],this)}else s&&K(i.onClick,[t,s,this],this)}}function Yc(e,t,i,s,n){const a=Xc(s,e,t,i),r=Qc(n,s,t.lineHeight);return{itemWidth:a,itemHeight:r}}function Xc(e,t,i,s){let n=e.text;return n&&typeof n!="string"&&(n=n.reduce((a,r)=>a.length>r.length?a:r)),t+i.size/2+s.measureText(n).width}function Qc(e,t,i){let s=e;return typeof t.text!="string"&&(s=ar(t,i)),s}function ar(e,t){const i=e.text?e.text.length:0;return t*i}function Kc(e,t){return!!((e==="mousemove"||e==="mouseout")&&(t.onHover||t.onLeave)||t.onClick&&(e==="click"||e==="mouseup"))}var Jc={id:"legend",_element:Vn,start(e,t,i){const s=e.legend=new Vn({ctx:e.ctx,options:i,chart:e});dt.configure(e,s,i),dt.addBox(e,s)},stop(e){dt.removeBox(e,e.legend),delete e.legend},beforeUpdate(e,t,i){const s=e.legend;dt.configure(e,s,i),s.options=i},afterUpdate(e){const t=e.legend;t.buildLabels(),t.adjustHitBoxes()},afterEvent(e,t){t.replay||e.legend.handleEvent(t.event)},defaults:{display:!0,position:"top",align:"center",fullSize:!0,reverse:!1,weight:1e3,onClick(e,t,i){const s=t.datasetIndex,n=i.chart;n.isDatasetVisible(s)?(n.hide(s),t.hidden=!0):(n.show(s),t.hidden=!1)},onHover:null,onLeave:null,labels:{color:e=>e.chart.options.color,boxWidth:40,padding:10,generateLabels(e){const t=e.data.datasets,{labels:{usePointStyle:i,pointStyle:s,textAlign:n,color:a,useBorderRadius:r,borderRadius:o}}=e.legend.options;return e._getSortedDatasetMetas().map(l=>{const d=l.controller.getStyle(i?0:void 0),c=ct(d.borderWidth);return{text:t[l.index].label,fillStyle:d.backgroundColor,fontColor:a,hidden:!l.visible,lineCap:d.borderCapStyle,lineDash:d.borderDash,lineDashOffset:d.borderDashOffset,lineJoin:d.borderJoinStyle,lineWidth:(c.width+c.height)/4,strokeStyle:d.borderColor,pointStyle:s||d.pointStyle,rotation:d.rotation,textAlign:n||d.textAlign,borderRadius:r&&(o||d.borderRadius),datasetIndex:l.index}},this)}},title:{color:e=>e.chart.options.color,display:!1,position:"center",text:""}},descriptors:{_scriptable:e=>!e.startsWith("on"),labels:{_scriptable:e=>!["generateLabels","filter","sort"].includes(e)}}};class Cs extends kt{constructor(t){super(),this.chart=t.chart,this.options=t.options,this.ctx=t.ctx,this._padding=void 0,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.width=void 0,this.height=void 0,this.position=void 0,this.weight=void 0,this.fullSize=void 0}update(t,i){const s=this.options;if(this.left=0,this.top=0,!s.display){this.width=this.height=this.right=this.bottom=0;return}this.width=this.right=t,this.height=this.bottom=i;const n=G(s.text)?s.text.length:1;this._padding=ct(s.padding);const a=n*nt(s.font).lineHeight+this._padding.height;this.isHorizontal()?this.height=a:this.width=a}isHorizontal(){const t=this.options.position;return t==="top"||t==="bottom"}_drawArgs(t){const{top:i,left:s,bottom:n,right:a,options:r}=this,o=r.align;let l=0,d,c,u;return this.isHorizontal()?(c=ot(o,s,a),u=i+t,d=a-s):(r.position==="left"?(c=s+t,u=ot(o,n,i),l=W*-.5):(c=a-t,u=ot(o,i,n),l=W*.5),d=n-i),{titleX:c,titleY:u,maxWidth:d,rotation:l}}draw(){const t=this.ctx,i=this.options;if(!i.display)return;const s=nt(i.font),a=s.lineHeight/2+this._padding.top,{titleX:r,titleY:o,maxWidth:l,rotation:d}=this._drawArgs(a);ne(t,i.text,0,0,s,{color:i.color,maxWidth:l,rotation:d,textAlign:ws(i.align),textBaseline:"middle",translation:[r,o]})}}function Gc(e,t){const i=new Cs({ctx:e.ctx,options:t,chart:e});dt.configure(e,i,t),dt.addBox(e,i),e.titleBlock=i}var Zc={id:"title",_element:Cs,start(e,t,i){Gc(e,i)},stop(e){const t=e.titleBlock;dt.removeBox(e,t),delete e.titleBlock},beforeUpdate(e,t,i){const s=e.titleBlock;dt.configure(e,s,i),s.options=i},defaults:{align:"center",display:!1,font:{weight:"bold"},fullSize:!0,padding:10,position:"top",text:"",weight:2e3},defaultRoutes:{color:"color"},descriptors:{_scriptable:!0,_indexable:!1}};const Ze=new WeakMap;var tu={id:"subtitle",start(e,t,i){const s=new Cs({ctx:e.ctx,options:i,chart:e});dt.configure(e,s,i),dt.addBox(e,s),Ze.set(e,s)},stop(e){dt.removeBox(e,Ze.get(e)),Ze.delete(e)},beforeUpdate(e,t,i){const s=Ze.get(e);dt.configure(e,s,i),s.options=i},defaults:{align:"center",display:!1,font:{weight:"normal"},fullSize:!0,padding:0,position:"top",text:"",weight:1500},defaultRoutes:{color:"color"},descriptors:{_scriptable:!0,_indexable:!1}};const $e={average(e){if(!e.length)return!1;let t,i,s=new Set,n=0,a=0;for(t=0,i=e.length;t<i;++t){const o=e[t].element;if(o&&o.hasValue()){const l=o.tooltipPosition();s.add(l.x),n+=l.y,++a}}return a===0||s.size===0?!1:{x:[...s].reduce((o,l)=>o+l)/s.size,y:n/a}},nearest(e,t){if(!e.length)return!1;let i=t.x,s=t.y,n=Number.POSITIVE_INFINITY,a,r,o;for(a=0,r=e.length;a<r;++a){const l=e[a].element;if(l&&l.hasValue()){const d=l.getCenterPoint(),c=Gi(t,d);c<n&&(n=c,o=l)}}if(o){const l=o.tooltipPosition();i=l.x,s=l.y}return{x:i,y:s}}};function $t(e,t){return t&&(G(t)?Array.prototype.push.apply(e,t):e.push(t)),e}function Ct(e){return(typeof e=="string"||e instanceof String)&&e.indexOf(`
`)>-1?e.split(`
`):e}function eu(e,t){const{element:i,datasetIndex:s,index:n}=t,a=e.getDatasetMeta(s).controller,{label:r,value:o}=a.getLabelAndValue(n);return{chart:e,label:r,parsed:a.getParsed(n),raw:e.data.datasets[s].data[n],formattedValue:o,dataset:a.getDataset(),dataIndex:n,datasetIndex:s,element:i}}function Wn(e,t){const i=e.chart.ctx,{body:s,footer:n,title:a}=e,{boxWidth:r,boxHeight:o}=t,l=nt(t.bodyFont),d=nt(t.titleFont),c=nt(t.footerFont),u=a.length,h=n.length,g=s.length,m=ct(t.padding);let p=m.height,f=0,b=s.reduce((y,x)=>y+x.before.length+x.lines.length+x.after.length,0);if(b+=e.beforeBody.length+e.afterBody.length,u&&(p+=u*d.lineHeight+(u-1)*t.titleSpacing+t.titleMarginBottom),b){const y=t.displayColors?Math.max(o,l.lineHeight):l.lineHeight;p+=g*y+(b-g)*l.lineHeight+(b-1)*t.bodySpacing}h&&(p+=t.footerMarginTop+h*c.lineHeight+(h-1)*t.footerSpacing);let v=0;const w=function(y){f=Math.max(f,i.measureText(y).width+v)};return i.save(),i.font=d.string,X(e.title,w),i.font=l.string,X(e.beforeBody.concat(e.afterBody),w),v=t.displayColors?r+2+t.boxPadding:0,X(s,y=>{X(y.before,w),X(y.lines,w),X(y.after,w)}),v=0,i.font=c.string,X(e.footer,w),i.restore(),f+=m.width,{width:f,height:p}}function iu(e,t){const{y:i,height:s}=t;return i<s/2?"top":i>e.height-s/2?"bottom":"center"}function su(e,t,i,s){const{x:n,width:a}=s,r=i.caretSize+i.caretPadding;if(e==="left"&&n+a+r>t.width||e==="right"&&n-a-r<0)return!0}function nu(e,t,i,s){const{x:n,width:a}=i,{width:r,chartArea:{left:o,right:l}}=e;let d="center";return s==="center"?d=n<=(o+l)/2?"left":"right":n<=a/2?d="left":n>=r-a/2&&(d="right"),su(d,e,t,i)&&(d="center"),d}function Un(e,t,i){const s=i.yAlign||t.yAlign||iu(e,i);return{xAlign:i.xAlign||t.xAlign||nu(e,t,i,s),yAlign:s}}function au(e,t){let{x:i,width:s}=e;return t==="right"?i-=s:t==="center"&&(i-=s/2),i}function ru(e,t,i){let{y:s,height:n}=e;return t==="top"?s+=i:t==="bottom"?s-=n+i:s-=n/2,s}function Yn(e,t,i,s){const{caretSize:n,caretPadding:a,cornerRadius:r}=e,{xAlign:o,yAlign:l}=i,d=n+a,{topLeft:c,topRight:u,bottomLeft:h,bottomRight:g}=te(r);let m=au(t,o);const p=ru(t,l,d);return l==="center"?o==="left"?m+=d:o==="right"&&(m-=d):o==="left"?m-=Math.max(c,h)+n:o==="right"&&(m+=Math.max(u,g)+n),{x:at(m,0,s.width-t.width),y:at(p,0,s.height-t.height)}}function ti(e,t,i){const s=ct(i.padding);return t==="center"?e.x+e.width/2:t==="right"?e.x+e.width-s.right:e.x+s.left}function Xn(e){return $t([],Ct(e))}function ou(e,t,i){return Vt(e,{tooltip:t,tooltipItems:i,type:"tooltip"})}function Qn(e,t){const i=t&&t.dataset&&t.dataset.tooltip&&t.dataset.tooltip.callbacks;return i?e.override(i):e}const rr={beforeTitle:Mt,title(e){if(e.length>0){const t=e[0],i=t.chart.data.labels,s=i?i.length:0;if(this&&this.options&&this.options.mode==="dataset")return t.dataset.label||"";if(t.label)return t.label;if(s>0&&t.dataIndex<s)return i[t.dataIndex]}return""},afterTitle:Mt,beforeBody:Mt,beforeLabel:Mt,label(e){if(this&&this.options&&this.options.mode==="dataset")return e.label+": "+e.formattedValue||e.formattedValue;let t=e.dataset.label||"";t&&(t+=": ");const i=e.formattedValue;return H(i)||(t+=i),t},labelColor(e){const i=e.chart.getDatasetMeta(e.datasetIndex).controller.getStyle(e.dataIndex);return{borderColor:i.borderColor,backgroundColor:i.backgroundColor,borderWidth:i.borderWidth,borderDash:i.borderDash,borderDashOffset:i.borderDashOffset,borderRadius:0}},labelTextColor(){return this.options.bodyColor},labelPointStyle(e){const i=e.chart.getDatasetMeta(e.datasetIndex).controller.getStyle(e.dataIndex);return{pointStyle:i.pointStyle,rotation:i.rotation}},afterLabel:Mt,afterBody:Mt,beforeFooter:Mt,footer:Mt,afterFooter:Mt};function gt(e,t,i,s){const n=e[t].call(i,s);return typeof n>"u"?rr[t].call(i,s):n}class os extends kt{constructor(t){super(),this.opacity=0,this._active=[],this._eventPosition=void 0,this._size=void 0,this._cachedAnimations=void 0,this._tooltipItems=[],this.$animations=void 0,this.$context=void 0,this.chart=t.chart,this.options=t.options,this.dataPoints=void 0,this.title=void 0,this.beforeBody=void 0,this.body=void 0,this.afterBody=void 0,this.footer=void 0,this.xAlign=void 0,this.yAlign=void 0,this.x=void 0,this.y=void 0,this.height=void 0,this.width=void 0,this.caretX=void 0,this.caretY=void 0,this.labelColors=void 0,this.labelPointStyles=void 0,this.labelTextColors=void 0}initialize(t){this.options=t,this._cachedAnimations=void 0,this.$context=void 0}_resolveAnimations(){const t=this._cachedAnimations;if(t)return t;const i=this.chart,s=this.options.setContext(this.getContext()),n=s.enabled&&i.options.animation&&s.animations,a=new Ra(this.chart,n);return n._cacheable&&(this._cachedAnimations=Object.freeze(a)),a}getContext(){return this.$context||(this.$context=ou(this.chart.getContext(),this,this._tooltipItems))}getTitle(t,i){const{callbacks:s}=i,n=gt(s,"beforeTitle",this,t),a=gt(s,"title",this,t),r=gt(s,"afterTitle",this,t);let o=[];return o=$t(o,Ct(n)),o=$t(o,Ct(a)),o=$t(o,Ct(r)),o}getBeforeBody(t,i){return Xn(gt(i.callbacks,"beforeBody",this,t))}getBody(t,i){const{callbacks:s}=i,n=[];return X(t,a=>{const r={before:[],lines:[],after:[]},o=Qn(s,a);$t(r.before,Ct(gt(o,"beforeLabel",this,a))),$t(r.lines,gt(o,"label",this,a)),$t(r.after,Ct(gt(o,"afterLabel",this,a))),n.push(r)}),n}getAfterBody(t,i){return Xn(gt(i.callbacks,"afterBody",this,t))}getFooter(t,i){const{callbacks:s}=i,n=gt(s,"beforeFooter",this,t),a=gt(s,"footer",this,t),r=gt(s,"afterFooter",this,t);let o=[];return o=$t(o,Ct(n)),o=$t(o,Ct(a)),o=$t(o,Ct(r)),o}_createItems(t){const i=this._active,s=this.chart.data,n=[],a=[],r=[];let o=[],l,d;for(l=0,d=i.length;l<d;++l)o.push(eu(this.chart,i[l]));return t.filter&&(o=o.filter((c,u,h)=>t.filter(c,u,h,s))),t.itemSort&&(o=o.sort((c,u)=>t.itemSort(c,u,s))),X(o,c=>{const u=Qn(t.callbacks,c);n.push(gt(u,"labelColor",this,c)),a.push(gt(u,"labelPointStyle",this,c)),r.push(gt(u,"labelTextColor",this,c))}),this.labelColors=n,this.labelPointStyles=a,this.labelTextColors=r,this.dataPoints=o,o}update(t,i){const s=this.options.setContext(this.getContext()),n=this._active;let a,r=[];if(!n.length)this.opacity!==0&&(a={opacity:0});else{const o=$e[s.position].call(this,n,this._eventPosition);r=this._createItems(s),this.title=this.getTitle(r,s),this.beforeBody=this.getBeforeBody(r,s),this.body=this.getBody(r,s),this.afterBody=this.getAfterBody(r,s),this.footer=this.getFooter(r,s);const l=this._size=Wn(this,s),d=Object.assign({},o,l),c=Un(this.chart,s,d),u=Yn(s,d,c,this.chart);this.xAlign=c.xAlign,this.yAlign=c.yAlign,a={opacity:1,x:u.x,y:u.y,width:l.width,height:l.height,caretX:o.x,caretY:o.y}}this._tooltipItems=r,this.$context=void 0,a&&this._resolveAnimations().update(this,a),t&&s.external&&s.external.call(this,{chart:this.chart,tooltip:this,replay:i})}drawCaret(t,i,s,n){const a=this.getCaretPosition(t,s,n);i.lineTo(a.x1,a.y1),i.lineTo(a.x2,a.y2),i.lineTo(a.x3,a.y3)}getCaretPosition(t,i,s){const{xAlign:n,yAlign:a}=this,{caretSize:r,cornerRadius:o}=s,{topLeft:l,topRight:d,bottomLeft:c,bottomRight:u}=te(o),{x:h,y:g}=t,{width:m,height:p}=i;let f,b,v,w,y,x;return a==="center"?(y=g+p/2,n==="left"?(f=h,b=f-r,w=y+r,x=y-r):(f=h+m,b=f+r,w=y-r,x=y+r),v=f):(n==="left"?b=h+Math.max(l,c)+r:n==="right"?b=h+m-Math.max(d,u)-r:b=this.caretX,a==="top"?(w=g,y=w-r,f=b-r,v=b+r):(w=g+p,y=w+r,f=b+r,v=b-r),x=w),{x1:f,x2:b,x3:v,y1:w,y2:y,y3:x}}drawTitle(t,i,s){const n=this.title,a=n.length;let r,o,l;if(a){const d=ce(s.rtl,this.x,this.width);for(t.x=ti(this,s.titleAlign,s),i.textAlign=d.textAlign(s.titleAlign),i.textBaseline="middle",r=nt(s.titleFont),o=s.titleSpacing,i.fillStyle=s.titleColor,i.font=r.string,l=0;l<a;++l)i.fillText(n[l],d.x(t.x),t.y+r.lineHeight/2),t.y+=r.lineHeight+o,l+1===a&&(t.y+=s.titleMarginBottom-o)}}_drawColorBox(t,i,s,n,a){const r=this.labelColors[s],o=this.labelPointStyles[s],{boxHeight:l,boxWidth:d}=a,c=nt(a.bodyFont),u=ti(this,"left",a),h=n.x(u),g=l<c.lineHeight?(c.lineHeight-l)/2:0,m=i.y+g;if(a.usePointStyle){const p={radius:Math.min(d,l)/2,pointStyle:o.pointStyle,rotation:o.rotation,borderWidth:1},f=n.leftForLtr(h,d)+d/2,b=m+l/2;t.strokeStyle=a.multiKeyBackground,t.fillStyle=a.multiKeyBackground,ts(t,p,f,b),t.strokeStyle=r.borderColor,t.fillStyle=r.backgroundColor,ts(t,p,f,b)}else{t.lineWidth=V(r.borderWidth)?Math.max(...Object.values(r.borderWidth)):r.borderWidth||1,t.strokeStyle=r.borderColor,t.setLineDash(r.borderDash||[]),t.lineDashOffset=r.borderDashOffset||0;const p=n.leftForLtr(h,d),f=n.leftForLtr(n.xPlus(h,1),d-2),b=te(r.borderRadius);Object.values(b).some(v=>v!==0)?(t.beginPath(),t.fillStyle=a.multiKeyBackground,Pe(t,{x:p,y:m,w:d,h:l,radius:b}),t.fill(),t.stroke(),t.fillStyle=r.backgroundColor,t.beginPath(),Pe(t,{x:f,y:m+1,w:d-2,h:l-2,radius:b}),t.fill()):(t.fillStyle=a.multiKeyBackground,t.fillRect(p,m,d,l),t.strokeRect(p,m,d,l),t.fillStyle=r.backgroundColor,t.fillRect(f,m+1,d-2,l-2))}t.fillStyle=this.labelTextColors[s]}drawBody(t,i,s){const{body:n}=this,{bodySpacing:a,bodyAlign:r,displayColors:o,boxHeight:l,boxWidth:d,boxPadding:c}=s,u=nt(s.bodyFont);let h=u.lineHeight,g=0;const m=ce(s.rtl,this.x,this.width),p=function($){i.fillText($,m.x(t.x+g),t.y+h/2),t.y+=h+a},f=m.textAlign(r);let b,v,w,y,x,z,S;for(i.textAlign=r,i.textBaseline="middle",i.font=u.string,t.x=ti(this,f,s),i.fillStyle=s.bodyColor,X(this.beforeBody,p),g=o&&f!=="right"?r==="center"?d/2+c:d+2+c:0,y=0,z=n.length;y<z;++y){for(b=n[y],v=this.labelTextColors[y],i.fillStyle=v,X(b.before,p),w=b.lines,o&&w.length&&(this._drawColorBox(i,t,y,m,s),h=Math.max(u.lineHeight,l)),x=0,S=w.length;x<S;++x)p(w[x]),h=u.lineHeight;X(b.after,p)}g=0,h=u.lineHeight,X(this.afterBody,p),t.y-=a}drawFooter(t,i,s){const n=this.footer,a=n.length;let r,o;if(a){const l=ce(s.rtl,this.x,this.width);for(t.x=ti(this,s.footerAlign,s),t.y+=s.footerMarginTop,i.textAlign=l.textAlign(s.footerAlign),i.textBaseline="middle",r=nt(s.footerFont),i.fillStyle=s.footerColor,i.font=r.string,o=0;o<a;++o)i.fillText(n[o],l.x(t.x),t.y+r.lineHeight/2),t.y+=r.lineHeight+s.footerSpacing}}drawBackground(t,i,s,n){const{xAlign:a,yAlign:r}=this,{x:o,y:l}=t,{width:d,height:c}=s,{topLeft:u,topRight:h,bottomLeft:g,bottomRight:m}=te(n.cornerRadius);i.fillStyle=n.backgroundColor,i.strokeStyle=n.borderColor,i.lineWidth=n.borderWidth,i.beginPath(),i.moveTo(o+u,l),r==="top"&&this.drawCaret(t,i,s,n),i.lineTo(o+d-h,l),i.quadraticCurveTo(o+d,l,o+d,l+h),r==="center"&&a==="right"&&this.drawCaret(t,i,s,n),i.lineTo(o+d,l+c-m),i.quadraticCurveTo(o+d,l+c,o+d-m,l+c),r==="bottom"&&this.drawCaret(t,i,s,n),i.lineTo(o+g,l+c),i.quadraticCurveTo(o,l+c,o,l+c-g),r==="center"&&a==="left"&&this.drawCaret(t,i,s,n),i.lineTo(o,l+u),i.quadraticCurveTo(o,l,o+u,l),i.closePath(),i.fill(),n.borderWidth>0&&i.stroke()}_updateAnimationTarget(t){const i=this.chart,s=this.$animations,n=s&&s.x,a=s&&s.y;if(n||a){const r=$e[t.position].call(this,this._active,this._eventPosition);if(!r)return;const o=this._size=Wn(this,t),l=Object.assign({},r,this._size),d=Un(i,t,l),c=Yn(t,l,d,i);(n._to!==c.x||a._to!==c.y)&&(this.xAlign=d.xAlign,this.yAlign=d.yAlign,this.width=o.width,this.height=o.height,this.caretX=r.x,this.caretY=r.y,this._resolveAnimations().update(this,c))}}_willRender(){return!!this.opacity}draw(t){const i=this.options.setContext(this.getContext());let s=this.opacity;if(!s)return;this._updateAnimationTarget(i);const n={width:this.width,height:this.height},a={x:this.x,y:this.y};s=Math.abs(s)<.001?0:s;const r=ct(i.padding),o=this.title.length||this.beforeBody.length||this.body.length||this.afterBody.length||this.footer.length;i.enabled&&o&&(t.save(),t.globalAlpha=s,this.drawBackground(a,t,n,i),Ba(t,i.textDirection),a.y+=r.top,this.drawTitle(a,t,i),this.drawBody(a,t,i),this.drawFooter(a,t,i),Ia(t,i.textDirection),t.restore())}getActiveElements(){return this._active||[]}setActiveElements(t,i){const s=this._active,n=t.map(({datasetIndex:o,index:l})=>{const d=this.chart.getDatasetMeta(o);if(!d)throw new Error("Cannot find a dataset at index "+o);return{datasetIndex:o,element:d.data[l],index:l}}),a=!mi(s,n),r=this._positionChanged(n,i);(a||r)&&(this._active=n,this._eventPosition=i,this._ignoreReplayEvents=!0,this.update(!0))}handleEvent(t,i,s=!0){if(i&&this._ignoreReplayEvents)return!1;this._ignoreReplayEvents=!1;const n=this.options,a=this._active||[],r=this._getActiveElements(t,a,i,s),o=this._positionChanged(r,t),l=i||!mi(r,a)||o;return l&&(this._active=r,(n.enabled||n.external)&&(this._eventPosition={x:t.x,y:t.y},this.update(!0,i))),l}_getActiveElements(t,i,s,n){const a=this.options;if(t.type==="mouseout")return[];if(!n)return i.filter(o=>this.chart.data.datasets[o.datasetIndex]&&this.chart.getDatasetMeta(o.datasetIndex).controller.getParsed(o.index)!==void 0);const r=this.chart.getElementsAtEventForMode(t,a.mode,a,s);return a.reverse&&r.reverse(),r}_positionChanged(t,i){const{caretX:s,caretY:n,options:a}=this,r=$e[a.position].call(this,t,i);return r!==!1&&(s!==r.x||n!==r.y)}}L(os,"positioners",$e);var lu={id:"tooltip",_element:os,positioners:$e,afterInit(e,t,i){i&&(e.tooltip=new os({chart:e,options:i}))},beforeUpdate(e,t,i){e.tooltip&&e.tooltip.initialize(i)},reset(e,t,i){e.tooltip&&e.tooltip.initialize(i)},afterDraw(e){const t=e.tooltip;if(t&&t._willRender()){const i={tooltip:t};if(e.notifyPlugins("beforeTooltipDraw",{...i,cancelable:!0})===!1)return;t.draw(e.ctx),e.notifyPlugins("afterTooltipDraw",i)}},afterEvent(e,t){if(e.tooltip){const i=t.replay;e.tooltip.handleEvent(t.event,i,t.inChartArea)&&(t.changed=!0)}},defaults:{enabled:!0,external:null,position:"average",backgroundColor:"rgba(0,0,0,0.8)",titleColor:"#fff",titleFont:{weight:"bold"},titleSpacing:2,titleMarginBottom:6,titleAlign:"left",bodyColor:"#fff",bodySpacing:2,bodyFont:{},bodyAlign:"left",footerColor:"#fff",footerSpacing:2,footerMarginTop:6,footerFont:{weight:"bold"},footerAlign:"left",padding:6,caretPadding:2,caretSize:5,cornerRadius:6,boxHeight:(e,t)=>t.bodyFont.size,boxWidth:(e,t)=>t.bodyFont.size,multiKeyBackground:"#fff",displayColors:!0,boxPadding:0,borderColor:"rgba(0,0,0,0)",borderWidth:0,animation:{duration:400,easing:"easeOutQuart"},animations:{numbers:{type:"number",properties:["x","y","width","height","caretX","caretY"]},opacity:{easing:"linear",duration:200}},callbacks:rr},defaultRoutes:{bodyFont:"font",footerFont:"font",titleFont:"font"},descriptors:{_scriptable:e=>e!=="filter"&&e!=="itemSort"&&e!=="external",_indexable:!1,callbacks:{_scriptable:!1,_indexable:!1},animation:{_fallback:!1},animations:{_fallback:"animation"}},additionalOptionScopes:["interaction"]},du=Object.freeze({__proto__:null,Colors:wc,Decimation:$c,Filler:Wc,Legend:Jc,SubTitle:tu,Title:Zc,Tooltip:lu});const cu=(e,t,i,s)=>(typeof t=="string"?(i=e.push(t)-1,s.unshift({index:i,label:t})):isNaN(t)&&(i=null),i);function uu(e,t,i,s){const n=e.indexOf(t);if(n===-1)return cu(e,t,i,s);const a=e.lastIndexOf(t);return n!==a?i:n}const hu=(e,t)=>e===null?null:at(Math.round(e),0,t);function Kn(e){const t=this.getLabels();return e>=0&&e<t.length?t[e]:e}class ls extends ae{constructor(t){super(t),this._startValue=void 0,this._valueRange=0,this._addedLabels=[]}init(t){const i=this._addedLabels;if(i.length){const s=this.getLabels();for(const{index:n,label:a}of i)s[n]===a&&s.splice(n,1);this._addedLabels=[]}super.init(t)}parse(t,i){if(H(t))return null;const s=this.getLabels();return i=isFinite(i)&&s[i]===t?i:uu(s,t,O(i,t),this._addedLabels),hu(i,s.length-1)}determineDataLimits(){const{minDefined:t,maxDefined:i}=this.getUserBounds();let{min:s,max:n}=this.getMinMax(!0);this.options.bounds==="ticks"&&(t||(s=0),i||(n=this.getLabels().length-1)),this.min=s,this.max=n}buildTicks(){const t=this.min,i=this.max,s=this.options.offset,n=[];let a=this.getLabels();a=t===0&&i===a.length-1?a:a.slice(t,i+1),this._valueRange=Math.max(a.length-(s?0:1),1),this._startValue=this.min-(s?.5:0);for(let r=t;r<=i;r++)n.push({value:r});return n}getLabelForValue(t){return Kn.call(this,t)}configure(){super.configure(),this.isHorizontal()||(this._reversePixels=!this._reversePixels)}getPixelForValue(t){return typeof t!="number"&&(t=this.parse(t)),t===null?NaN:this.getPixelForDecimal((t-this._startValue)/this._valueRange)}getPixelForTick(t){const i=this.ticks;return t<0||t>i.length-1?null:this.getPixelForValue(i[t].value)}getValueForPixel(t){return Math.round(this._startValue+this.getDecimalForPixel(t)*this._valueRange)}getBasePixel(){return this.bottom}}L(ls,"id","category"),L(ls,"defaults",{ticks:{callback:Kn}});function gu(e,t){const i=[],{bounds:n,step:a,min:r,max:o,precision:l,count:d,maxTicks:c,maxDigits:u,includeBounds:h}=e,g=a||1,m=c-1,{min:p,max:f}=t,b=!H(r),v=!H(o),w=!H(d),y=(f-p)/(u+1);let x=Vs((f-p)/m/g)*g,z,S,$,C;if(x<1e-14&&!b&&!v)return[{value:p},{value:f}];C=Math.ceil(f/x)-Math.floor(p/x),C>m&&(x=Vs(C*x/m/g)*g),H(l)||(z=Math.pow(10,l),x=Math.ceil(x*z)/z),n==="ticks"?(S=Math.floor(p/x)*x,$=Math.ceil(f/x)*x):(S=p,$=f),b&&v&&a&&no((o-r)/a,x/1e3)?(C=Math.round(Math.min((o-r)/x,c)),x=(o-r)/C,S=r,$=o):w?(S=b?r:S,$=v?o:$,C=d-1,x=($-S)/C):(C=($-S)/x,Me(C,Math.round(C),x/1e3)?C=Math.round(C):C=Math.ceil(C));const T=Math.max(Ws(x),Ws(S));z=Math.pow(10,H(l)?T:l),S=Math.round(S*z)/z,$=Math.round($*z)/z;let B=0;for(b&&(h&&S!==r?(i.push({value:r}),S<r&&B++,Me(Math.round((S+B*x)*z)/z,r,Jn(r,y,e))&&B++):S<r&&B++);B<C;++B){const P=Math.round((S+B*x)*z)/z;if(v&&P>o)break;i.push({value:P})}return v&&h&&$!==o?i.length&&Me(i[i.length-1].value,o,Jn(o,y,e))?i[i.length-1].value=o:i.push({value:o}):(!v||$===o)&&i.push({value:$}),i}function Jn(e,t,{horizontal:i,minRotation:s}){const n=wt(s),a=(i?Math.sin(n):Math.cos(n))||.001,r=.75*t*(""+e).length;return Math.min(t/a,r)}class wi extends ae{constructor(t){super(t),this.start=void 0,this.end=void 0,this._startValue=void 0,this._endValue=void 0,this._valueRange=0}parse(t,i){return H(t)||(typeof t=="number"||t instanceof Number)&&!isFinite(+t)?null:+t}handleTickRangeOptions(){const{beginAtZero:t}=this.options,{minDefined:i,maxDefined:s}=this.getUserBounds();let{min:n,max:a}=this;const r=l=>n=i?n:l,o=l=>a=s?a:l;if(t){const l=Tt(n),d=Tt(a);l<0&&d<0?o(0):l>0&&d>0&&r(0)}if(n===a){let l=a===0?1:Math.abs(a*.05);o(a+l),t||r(n-l)}this.min=n,this.max=a}getTickLimit(){const t=this.options.ticks;let{maxTicksLimit:i,stepSize:s}=t,n;return s?(n=Math.ceil(this.max/s)-Math.floor(this.min/s)+1,n>1e3&&(console.warn(`scales.${this.id}.ticks.stepSize: ${s} would result generating up to ${n} ticks. Limiting to 1000.`),n=1e3)):(n=this.computeTickLimit(),i=i||11),i&&(n=Math.min(i,n)),n}computeTickLimit(){return Number.POSITIVE_INFINITY}buildTicks(){const t=this.options,i=t.ticks;let s=this.getTickLimit();s=Math.max(2,s);const n={maxTicks:s,bounds:t.bounds,min:t.min,max:t.max,precision:i.precision,step:i.stepSize,count:i.count,maxDigits:this._maxDigits(),horizontal:this.isHorizontal(),minRotation:i.minRotation||0,includeBounds:i.includeBounds!==!1},a=this._range||this,r=gu(n,a);return t.bounds==="ticks"&&fa(r,this,"value"),t.reverse?(r.reverse(),this.start=this.max,this.end=this.min):(this.start=this.min,this.end=this.max),r}configure(){const t=this.ticks;let i=this.min,s=this.max;if(super.configure(),this.options.offset&&t.length){const n=(s-i)/Math.max(t.length-1,1)/2;i-=n,s+=n}this._startValue=i,this._endValue=s,this._valueRange=s-i}getLabelForValue(t){return Fe(t,this.chart.options.locale,this.options.ticks.format)}}class ds extends wi{determineDataLimits(){const{min:t,max:i}=this.getMinMax(!0);this.min=tt(t)?t:0,this.max=tt(i)?i:1,this.handleTickRangeOptions()}computeTickLimit(){const t=this.isHorizontal(),i=t?this.width:this.height,s=wt(this.options.ticks.minRotation),n=(t?Math.sin(s):Math.cos(s))||.001,a=this._resolveTickFontOptions(0);return Math.ceil(i/Math.min(40,a.lineHeight/n))}getPixelForValue(t){return t===null?NaN:this.getPixelForDecimal((t-this._startValue)/this._valueRange)}getValueForPixel(t){return this._startValue+this.getDecimalForPixel(t)*this._valueRange}}L(ds,"id","linear"),L(ds,"defaults",{ticks:{callback:_i.formatters.numeric}});const Oe=e=>Math.floor(Dt(e)),Qt=(e,t)=>Math.pow(10,Oe(e)+t);function Gn(e){return e/Math.pow(10,Oe(e))===1}function Zn(e,t,i){const s=Math.pow(10,i),n=Math.floor(e/s);return Math.ceil(t/s)-n}function mu(e,t){const i=t-e;let s=Oe(i);for(;Zn(e,t,s)>10;)s++;for(;Zn(e,t,s)<10;)s--;return Math.min(s,Oe(e))}function pu(e,{min:t,max:i}){t=yt(e.min,t);const s=[],n=Oe(t);let a=mu(t,i),r=a<0?Math.pow(10,Math.abs(a)):1;const o=Math.pow(10,a),l=n>a?Math.pow(10,n):0,d=Math.round((t-l)*r)/r,c=Math.floor((t-l)/o/10)*o*10;let u=Math.floor((d-c)/Math.pow(10,a)),h=yt(e.min,Math.round((l+c+u*Math.pow(10,a))*r)/r);for(;h<i;)s.push({value:h,major:Gn(h),significand:u}),u>=10?u=u<15?15:20:u++,u>=20&&(a++,u=2,r=a>=0?1:r),h=Math.round((l+c+u*Math.pow(10,a))*r)/r;const g=yt(e.max,h);return s.push({value:g,major:Gn(g),significand:u}),s}class cs extends ae{constructor(t){super(t),this.start=void 0,this.end=void 0,this._startValue=void 0,this._valueRange=0}parse(t,i){const s=wi.prototype.parse.apply(this,[t,i]);if(s===0){this._zero=!0;return}return tt(s)&&s>0?s:null}determineDataLimits(){const{min:t,max:i}=this.getMinMax(!0);this.min=tt(t)?Math.max(0,t):null,this.max=tt(i)?Math.max(0,i):null,this.options.beginAtZero&&(this._zero=!0),this._zero&&this.min!==this._suggestedMin&&!tt(this._userMin)&&(this.min=t===Qt(this.min,0)?Qt(this.min,-1):Qt(this.min,0)),this.handleTickRangeOptions()}handleTickRangeOptions(){const{minDefined:t,maxDefined:i}=this.getUserBounds();let s=this.min,n=this.max;const a=o=>s=t?s:o,r=o=>n=i?n:o;s===n&&(s<=0?(a(1),r(10)):(a(Qt(s,-1)),r(Qt(n,1)))),s<=0&&a(Qt(n,-1)),n<=0&&r(Qt(s,1)),this.min=s,this.max=n}buildTicks(){const t=this.options,i={min:this._userMin,max:this._userMax},s=pu(i,this);return t.bounds==="ticks"&&fa(s,this,"value"),t.reverse?(s.reverse(),this.start=this.max,this.end=this.min):(this.start=this.min,this.end=this.max),s}getLabelForValue(t){return t===void 0?"0":Fe(t,this.chart.options.locale,this.options.ticks.format)}configure(){const t=this.min;super.configure(),this._startValue=Dt(t),this._valueRange=Dt(this.max)-Dt(t)}getPixelForValue(t){return(t===void 0||t===0)&&(t=this.min),t===null||isNaN(t)?NaN:this.getPixelForDecimal(t===this.min?0:(Dt(t)-this._startValue)/this._valueRange)}getValueForPixel(t){const i=this.getDecimalForPixel(t);return Math.pow(10,this._startValue+i*this._valueRange)}}L(cs,"id","logarithmic"),L(cs,"defaults",{ticks:{callback:_i.formatters.logarithmic,major:{enabled:!0}}});function us(e){const t=e.ticks;if(t.display&&e.display){const i=ct(t.backdropPadding);return O(t.font&&t.font.size,Z.font.size)+i.height}return 0}function fu(e,t,i){return i=G(i)?i:[i],{w:zo(e,t.string,i),h:i.length*t.lineHeight}}function ta(e,t,i,s,n){return e===s||e===n?{start:t-i/2,end:t+i/2}:e<s||e>n?{start:t-i,end:t}:{start:t,end:t+i}}function bu(e){const t={l:e.left+e._padding.left,r:e.right-e._padding.right,t:e.top+e._padding.top,b:e.bottom-e._padding.bottom},i=Object.assign({},t),s=[],n=[],a=e._pointLabels.length,r=e.options.pointLabels,o=r.centerPointLabels?W/a:0;for(let l=0;l<a;l++){const d=r.setContext(e.getPointLabelContext(l));n[l]=d.padding;const c=e.getPointPosition(l,e.drawingArea+n[l],o),u=nt(d.font),h=fu(e.ctx,u,e._pointLabels[l]);s[l]=h;const g=lt(e.getIndexAngle(l)+o),m=Math.round(vs(g)),p=ta(m,c.x,h.w,0,180),f=ta(m,c.y,h.h,90,270);yu(i,t,g,p,f)}e.setCenterPoint(t.l-i.l,i.r-t.r,t.t-i.t,i.b-t.b),e._pointLabelItems=wu(e,s,n)}function yu(e,t,i,s,n){const a=Math.abs(Math.sin(i)),r=Math.abs(Math.cos(i));let o=0,l=0;s.start<t.l?(o=(t.l-s.start)/a,e.l=Math.min(e.l,t.l-o)):s.end>t.r&&(o=(s.end-t.r)/a,e.r=Math.max(e.r,t.r+o)),n.start<t.t?(l=(t.t-n.start)/r,e.t=Math.min(e.t,t.t-l)):n.end>t.b&&(l=(n.end-t.b)/r,e.b=Math.max(e.b,t.b+l))}function vu(e,t,i){const s=e.drawingArea,{extra:n,additionalAngle:a,padding:r,size:o}=i,l=e.getPointPosition(t,s+n+r,a),d=Math.round(vs(lt(l.angle+it))),c=_u(l.y,o.h,d),u=zu(d),h=ku(l.x,o.w,u);return{visible:!0,x:l.x,y:c,textAlign:u,left:h,top:c,right:h+o.w,bottom:c+o.h}}function xu(e,t){if(!t)return!0;const{left:i,top:s,right:n,bottom:a}=e;return!(It({x:i,y:s},t)||It({x:i,y:a},t)||It({x:n,y:s},t)||It({x:n,y:a},t))}function wu(e,t,i){const s=[],n=e._pointLabels.length,a=e.options,{centerPointLabels:r,display:o}=a.pointLabels,l={extra:us(a)/2,additionalAngle:r?W/n:0};let d;for(let c=0;c<n;c++){l.padding=i[c],l.size=t[c];const u=vu(e,c,l);s.push(u),o==="auto"&&(u.visible=xu(u,d),u.visible&&(d=u))}return s}function zu(e){return e===0||e===180?"center":e<180?"left":"right"}function ku(e,t,i){return i==="right"?e-=t:i==="center"&&(e-=t/2),e}function _u(e,t,i){return i===90||i===270?e-=t/2:(i>270||i<90)&&(e-=t),e}function $u(e,t,i){const{left:s,top:n,right:a,bottom:r}=i,{backdropColor:o}=t;if(!H(o)){const l=te(t.borderRadius),d=ct(t.backdropPadding);e.fillStyle=o;const c=s-d.left,u=n-d.top,h=a-s+d.width,g=r-n+d.height;Object.values(l).some(m=>m!==0)?(e.beginPath(),Pe(e,{x:c,y:u,w:h,h:g,radius:l}),e.fill()):e.fillRect(c,u,h,g)}}function Su(e,t){const{ctx:i,options:{pointLabels:s}}=e;for(let n=t-1;n>=0;n--){const a=e._pointLabelItems[n];if(!a.visible)continue;const r=s.setContext(e.getPointLabelContext(n));$u(i,r,a);const o=nt(r.font),{x:l,y:d,textAlign:c}=a;ne(i,e._pointLabels[n],l,d+o.lineHeight/2,o,{color:r.color,textAlign:c,textBaseline:"middle"})}}function or(e,t,i,s){const{ctx:n}=e;if(i)n.arc(e.xCenter,e.yCenter,t,0,J);else{let a=e.getPointPosition(0,t);n.moveTo(a.x,a.y);for(let r=1;r<s;r++)a=e.getPointPosition(r,t),n.lineTo(a.x,a.y)}}function Tu(e,t,i,s,n){const a=e.ctx,r=t.circular,{color:o,lineWidth:l}=t;!r&&!s||!o||!l||i<0||(a.save(),a.strokeStyle=o,a.lineWidth=l,a.setLineDash(n.dash||[]),a.lineDashOffset=n.dashOffset,a.beginPath(),or(e,i,r,s),a.closePath(),a.stroke(),a.restore())}function Mu(e,t,i){return Vt(e,{label:i,index:t,type:"pointLabel"})}class Se extends wi{constructor(t){super(t),this.xCenter=void 0,this.yCenter=void 0,this.drawingArea=void 0,this._pointLabels=[],this._pointLabelItems=[]}setDimensions(){const t=this._padding=ct(us(this.options)/2),i=this.width=this.maxWidth-t.width,s=this.height=this.maxHeight-t.height;this.xCenter=Math.floor(this.left+i/2+t.left),this.yCenter=Math.floor(this.top+s/2+t.top),this.drawingArea=Math.floor(Math.min(i,s)/2)}determineDataLimits(){const{min:t,max:i}=this.getMinMax(!1);this.min=tt(t)&&!isNaN(t)?t:0,this.max=tt(i)&&!isNaN(i)?i:0,this.handleTickRangeOptions()}computeTickLimit(){return Math.ceil(this.drawingArea/us(this.options))}generateTickLabels(t){wi.prototype.generateTickLabels.call(this,t),this._pointLabels=this.getLabels().map((i,s)=>{const n=K(this.options.pointLabels.callback,[i,s],this);return n||n===0?n:""}).filter((i,s)=>this.chart.getDataVisibility(s))}fit(){const t=this.options;t.display&&t.pointLabels.display?bu(this):this.setCenterPoint(0,0,0,0)}setCenterPoint(t,i,s,n){this.xCenter+=Math.floor((t-i)/2),this.yCenter+=Math.floor((s-n)/2),this.drawingArea-=Math.min(this.drawingArea/2,Math.max(t,i,s,n))}getIndexAngle(t){const i=J/(this._pointLabels.length||1),s=this.options.startAngle||0;return lt(t*i+wt(s))}getDistanceFromCenterForValue(t){if(H(t))return NaN;const i=this.drawingArea/(this.max-this.min);return this.options.reverse?(this.max-t)*i:(t-this.min)*i}getValueForDistanceFromCenter(t){if(H(t))return NaN;const i=t/(this.drawingArea/(this.max-this.min));return this.options.reverse?this.max-i:this.min+i}getPointLabelContext(t){const i=this._pointLabels||[];if(t>=0&&t<i.length){const s=i[t];return Mu(this.getContext(),t,s)}}getPointPosition(t,i,s=0){const n=this.getIndexAngle(t)-it+s;return{x:Math.cos(n)*i+this.xCenter,y:Math.sin(n)*i+this.yCenter,angle:n}}getPointPositionForValue(t,i){return this.getPointPosition(t,this.getDistanceFromCenterForValue(i))}getBasePosition(t){return this.getPointPositionForValue(t||0,this.getBaseValue())}getPointLabelPosition(t){const{left:i,top:s,right:n,bottom:a}=this._pointLabelItems[t];return{left:i,top:s,right:n,bottom:a}}drawBackground(){const{backgroundColor:t,grid:{circular:i}}=this.options;if(t){const s=this.ctx;s.save(),s.beginPath(),or(this,this.getDistanceFromCenterForValue(this._endValue),i,this._pointLabels.length),s.closePath(),s.fillStyle=t,s.fill(),s.restore()}}drawGrid(){const t=this.ctx,i=this.options,{angleLines:s,grid:n,border:a}=i,r=this._pointLabels.length;let o,l,d;if(i.pointLabels.display&&Su(this,r),n.display&&this.ticks.forEach((c,u)=>{if(u!==0||u===0&&this.min<0){l=this.getDistanceFromCenterForValue(c.value);const h=this.getContext(u),g=n.setContext(h),m=a.setContext(h);Tu(this,g,l,r,m)}}),s.display){for(t.save(),o=r-1;o>=0;o--){const c=s.setContext(this.getPointLabelContext(o)),{color:u,lineWidth:h}=c;!h||!u||(t.lineWidth=h,t.strokeStyle=u,t.setLineDash(c.borderDash),t.lineDashOffset=c.borderDashOffset,l=this.getDistanceFromCenterForValue(i.reverse?this.min:this.max),d=this.getPointPosition(o,l),t.beginPath(),t.moveTo(this.xCenter,this.yCenter),t.lineTo(d.x,d.y),t.stroke())}t.restore()}}drawBorder(){}drawLabels(){const t=this.ctx,i=this.options,s=i.ticks;if(!s.display)return;const n=this.getIndexAngle(0);let a,r;t.save(),t.translate(this.xCenter,this.yCenter),t.rotate(n),t.textAlign="center",t.textBaseline="middle",this.ticks.forEach((o,l)=>{if(l===0&&this.min>=0&&!i.reverse)return;const d=s.setContext(this.getContext(l)),c=nt(d.font);if(a=this.getDistanceFromCenterForValue(this.ticks[l].value),d.showLabelBackdrop){t.font=c.string,r=t.measureText(o.label).width,t.fillStyle=d.backdropColor;const u=ct(d.backdropPadding);t.fillRect(-r/2-u.left,-a-c.size/2-u.top,r+u.width,c.size+u.height)}ne(t,o.label,0,-a,c,{color:d.color,strokeColor:d.textStrokeColor,strokeWidth:d.textStrokeWidth})}),t.restore()}drawTitle(){}}L(Se,"id","radialLinear"),L(Se,"defaults",{display:!0,animate:!0,position:"chartArea",angleLines:{display:!0,lineWidth:1,borderDash:[],borderDashOffset:0},grid:{circular:!1},startAngle:0,ticks:{showLabelBackdrop:!0,callback:_i.formatters.numeric},pointLabels:{backdropColor:void 0,backdropPadding:2,display:!0,font:{size:10},callback(t){return t},padding:5,centerPointLabels:!1}}),L(Se,"defaultRoutes",{"angleLines.color":"borderColor","pointLabels.color":"color","ticks.color":"color"}),L(Se,"descriptors",{angleLines:{_fallback:"grid"}});const Ci={millisecond:{common:!0,size:1,steps:1e3},second:{common:!0,size:1e3,steps:60},minute:{common:!0,size:6e4,steps:60},hour:{common:!0,size:36e5,steps:24},day:{common:!0,size:864e5,steps:30},week:{common:!1,size:6048e5,steps:4},month:{common:!0,size:2628e6,steps:12},quarter:{common:!1,size:7884e6,steps:4},year:{common:!0,size:3154e7}},pt=Object.keys(Ci);function ea(e,t){return e-t}function ia(e,t){if(H(t))return null;const i=e._adapter,{parser:s,round:n,isoWeekday:a}=e._parseOpts;let r=t;return typeof s=="function"&&(r=s(r)),tt(r)||(r=typeof s=="string"?i.parse(r,s):i.parse(r)),r===null?null:(n&&(r=n==="week"&&(he(a)||a===!0)?i.startOf(r,"isoWeek",a):i.startOf(r,n)),+r)}function sa(e,t,i,s){const n=pt.length;for(let a=pt.indexOf(e);a<n-1;++a){const r=Ci[pt[a]],o=r.steps?r.steps:Number.MAX_SAFE_INTEGER;if(r.common&&Math.ceil((i-t)/(o*r.size))<=s)return pt[a]}return pt[n-1]}function Eu(e,t,i,s,n){for(let a=pt.length-1;a>=pt.indexOf(i);a--){const r=pt[a];if(Ci[r].common&&e._adapter.diff(n,s,r)>=t-1)return r}return pt[i?pt.indexOf(i):0]}function Cu(e){for(let t=pt.indexOf(e)+1,i=pt.length;t<i;++t)if(Ci[pt[t]].common)return pt[t]}function na(e,t,i){if(!i)e[t]=!0;else if(i.length){const{lo:s,hi:n}=xs(i,t),a=i[s]>=t?i[s]:i[n];e[a]=!0}}function Lu(e,t,i,s){const n=e._adapter,a=+n.startOf(t[0].value,s),r=t[t.length-1].value;let o,l;for(o=a;o<=r;o=+n.add(o,1,s))l=i[o],l>=0&&(t[l].major=!0);return t}function aa(e,t,i){const s=[],n={},a=t.length;let r,o;for(r=0;r<a;++r)o=t[r],n[o]=r,s.push({value:o,major:!1});return a===0||!i?s:Lu(e,s,n,i)}class Re extends ae{constructor(t){super(t),this._cache={data:[],labels:[],all:[]},this._unit="day",this._majorUnit=void 0,this._offsets={},this._normalized=!1,this._parseOpts=void 0}init(t,i={}){const s=t.time||(t.time={}),n=this._adapter=new Rl._date(t.adapters.date);n.init(i),Te(s.displayFormats,n.formats()),this._parseOpts={parser:s.parser,round:s.round,isoWeekday:s.isoWeekday},super.init(t),this._normalized=i.normalized}parse(t,i){return t===void 0?null:ia(this,t)}beforeLayout(){super.beforeLayout(),this._cache={data:[],labels:[],all:[]}}determineDataLimits(){const t=this.options,i=this._adapter,s=t.time.unit||"day";let{min:n,max:a,minDefined:r,maxDefined:o}=this.getUserBounds();function l(d){!r&&!isNaN(d.min)&&(n=Math.min(n,d.min)),!o&&!isNaN(d.max)&&(a=Math.max(a,d.max))}(!r||!o)&&(l(this._getLabelBounds()),(t.bounds!=="ticks"||t.ticks.source!=="labels")&&l(this.getMinMax(!1))),n=tt(n)&&!isNaN(n)?n:+i.startOf(Date.now(),s),a=tt(a)&&!isNaN(a)?a:+i.endOf(Date.now(),s)+1,this.min=Math.min(n,a-1),this.max=Math.max(n+1,a)}_getLabelBounds(){const t=this.getLabelTimestamps();let i=Number.POSITIVE_INFINITY,s=Number.NEGATIVE_INFINITY;return t.length&&(i=t[0],s=t[t.length-1]),{min:i,max:s}}buildTicks(){const t=this.options,i=t.time,s=t.ticks,n=s.source==="labels"?this.getLabelTimestamps():this._generate();t.bounds==="ticks"&&n.length&&(this.min=this._userMin||n[0],this.max=this._userMax||n[n.length-1]);const a=this.min,r=this.max,o=lo(n,a,r);return this._unit=i.unit||(s.autoSkip?sa(i.minUnit,this.min,this.max,this._getLabelCapacity(a)):Eu(this,o.length,i.minUnit,this.min,this.max)),this._majorUnit=!s.major.enabled||this._unit==="year"?void 0:Cu(this._unit),this.initOffsets(n),t.reverse&&o.reverse(),aa(this,o,this._majorUnit)}afterAutoSkip(){this.options.offsetAfterAutoskip&&this.initOffsets(this.ticks.map(t=>+t.value))}initOffsets(t=[]){let i=0,s=0,n,a;this.options.offset&&t.length&&(n=this.getDecimalForValue(t[0]),t.length===1?i=1-n:i=(this.getDecimalForValue(t[1])-n)/2,a=this.getDecimalForValue(t[t.length-1]),t.length===1?s=a:s=(a-this.getDecimalForValue(t[t.length-2]))/2);const r=t.length<3?.5:.25;i=at(i,0,r),s=at(s,0,r),this._offsets={start:i,end:s,factor:1/(i+1+s)}}_generate(){const t=this._adapter,i=this.min,s=this.max,n=this.options,a=n.time,r=a.unit||sa(a.minUnit,i,s,this._getLabelCapacity(i)),o=O(n.ticks.stepSize,1),l=r==="week"?a.isoWeekday:!1,d=he(l)||l===!0,c={};let u=i,h,g;if(d&&(u=+t.startOf(u,"isoWeek",l)),u=+t.startOf(u,d?"day":r),t.diff(s,i,r)>1e5*o)throw new Error(i+" and "+s+" are too far apart with stepSize of "+o+" "+r);const m=n.ticks.source==="data"&&this.getDataTimestamps();for(h=u,g=0;h<s;h=+t.add(h,o,r),g++)na(c,h,m);return(h===s||n.bounds==="ticks"||g===1)&&na(c,h,m),Object.keys(c).sort(ea).map(p=>+p)}getLabelForValue(t){const i=this._adapter,s=this.options.time;return s.tooltipFormat?i.format(t,s.tooltipFormat):i.format(t,s.displayFormats.datetime)}format(t,i){const n=this.options.time.displayFormats,a=this._unit,r=i||n[a];return this._adapter.format(t,r)}_tickFormatFunction(t,i,s,n){const a=this.options,r=a.ticks.callback;if(r)return K(r,[t,i,s],this);const o=a.time.displayFormats,l=this._unit,d=this._majorUnit,c=l&&o[l],u=d&&o[d],h=s[i],g=d&&u&&h&&h.major;return this._adapter.format(t,n||(g?u:c))}generateTickLabels(t){let i,s,n;for(i=0,s=t.length;i<s;++i)n=t[i],n.label=this._tickFormatFunction(n.value,i,t)}getDecimalForValue(t){return t===null?NaN:(t-this.min)/(this.max-this.min)}getPixelForValue(t){const i=this._offsets,s=this.getDecimalForValue(t);return this.getPixelForDecimal((i.start+s)*i.factor)}getValueForPixel(t){const i=this._offsets,s=this.getDecimalForPixel(t)/i.factor-i.end;return this.min+s*(this.max-this.min)}_getLabelSize(t){const i=this.options.ticks,s=this.ctx.measureText(t).width,n=wt(this.isHorizontal()?i.maxRotation:i.minRotation),a=Math.cos(n),r=Math.sin(n),o=this._resolveTickFontOptions(0).size;return{w:s*a+o*r,h:s*r+o*a}}_getLabelCapacity(t){const i=this.options.time,s=i.displayFormats,n=s[i.unit]||s.millisecond,a=this._tickFormatFunction(t,0,aa(this,[t],this._majorUnit),n),r=this._getLabelSize(a),o=Math.floor(this.isHorizontal()?this.width/r.w:this.height/r.h)-1;return o>0?o:1}getDataTimestamps(){let t=this._cache.data||[],i,s;if(t.length)return t;const n=this.getMatchingVisibleMetas();if(this._normalized&&n.length)return this._cache.data=n[0].controller.getAllParsedValues(this);for(i=0,s=n.length;i<s;++i)t=t.concat(n[i].controller.getAllParsedValues(this));return this._cache.data=this.normalize(t)}getLabelTimestamps(){const t=this._cache.labels||[];let i,s;if(t.length)return t;const n=this.getLabels();for(i=0,s=n.length;i<s;++i)t.push(ia(this,n[i]));return this._cache.labels=this._normalized?t:this.normalize(t)}normalize(t){return va(t.sort(ea))}}L(Re,"id","time"),L(Re,"defaults",{bounds:"data",adapters:{},time:{parser:!1,unit:!1,round:!1,isoWeekday:!1,minUnit:"millisecond",displayFormats:{}},ticks:{source:"auto",callback:!1,major:{enabled:!1}}});function ei(e,t,i){let s=0,n=e.length-1,a,r,o,l;i?(t>=e[s].pos&&t<=e[n].pos&&({lo:s,hi:n}=Bt(e,"pos",t)),{pos:a,time:o}=e[s],{pos:r,time:l}=e[n]):(t>=e[s].time&&t<=e[n].time&&({lo:s,hi:n}=Bt(e,"time",t)),{time:a,pos:o}=e[s],{time:r,pos:l}=e[n]);const d=r-a;return d?o+(l-o)*(t-a)/d:o}class hs extends Re{constructor(t){super(t),this._table=[],this._minPos=void 0,this._tableRange=void 0}initOffsets(){const t=this._getTimestampsForTable(),i=this._table=this.buildLookupTable(t);this._minPos=ei(i,this.min),this._tableRange=ei(i,this.max)-this._minPos,super.initOffsets(t)}buildLookupTable(t){const{min:i,max:s}=this,n=[],a=[];let r,o,l,d,c;for(r=0,o=t.length;r<o;++r)d=t[r],d>=i&&d<=s&&n.push(d);if(n.length<2)return[{time:i,pos:0},{time:s,pos:1}];for(r=0,o=n.length;r<o;++r)c=n[r+1],l=n[r-1],d=n[r],Math.round((c+l)/2)!==d&&a.push({time:d,pos:r/(o-1)});return a}_generate(){const t=this.min,i=this.max;let s=super.getDataTimestamps();return(!s.includes(t)||!s.length)&&s.splice(0,0,t),(!s.includes(i)||s.length===1)&&s.push(i),s.sort((n,a)=>n-a)}_getTimestampsForTable(){let t=this._cache.all||[];if(t.length)return t;const i=this.getDataTimestamps(),s=this.getLabelTimestamps();return i.length&&s.length?t=this.normalize(i.concat(s)):t=i.length?i:s,t=this._cache.all=t,t}getDecimalForValue(t){return(ei(this._table,t)-this._minPos)/this._tableRange}getValueForPixel(t){const i=this._offsets,s=this.getDecimalForPixel(t)/i.factor-i.end;return ei(this._table,s*this._tableRange+this._minPos,!0)}}L(hs,"id","timeseries"),L(hs,"defaults",Re.defaults);var Au=Object.freeze({__proto__:null,CategoryScale:ls,LinearScale:ds,LogarithmicScale:cs,RadialLinearScale:Se,TimeScale:Re,TimeSeriesScale:hs});const Bu=[Ol,mc,du,Au];vt.register(...Bu);console.log=()=>{};console.log("🚀 App initialized");const Iu={ru:{login:"Вход",logout:"Выйти",save:"Сохранить",cancel:"Отмена",delete:"Удалить",edit:"Редактировать",add:"Добавить",back:"Назад",next:"Далее",submit:"Отправить",loading:"Загрузка...",error:"Ошибка",success:"Успешно",selectRole:"Выберите роль",loginAsStudent:"Войти как Ученик",loginAsTeacher:"Войти как Учитель",loginAsAdmin:"Войти как Администратор",username:"Логин",password:"Пароль",changePassword:"Сменить пароль",currentPassword:"Текущий пароль",newPassword:"Новый пароль",confirmPassword:"Подтвердите пароль",mustChangePassword:"Вы должны сменить временный пароль",student:"Ученик",dashboard:"Главная",subjects:"Предметы",subjectTests:"Тесты по предметам",interestTest:"Тест на определение интересов",myProfile:"Мой профиль",firstName:"Имя",lastName:"Фамилия",grade:"Класс",interests:"Интересы",welcome:"Добро пожаловать",teacher:"Учитель",classes:"Классы",manageTests:"Управление тестами",modules:"Модули",module:"Модуль",createModule:"Создать модуль",moduleName:"Название модуля",moduleDescription:"Описание модуля",tests:"Тесты",test:"Тест",createTest:"Создать тест",testName:"Название теста",testDuration:"Время на прохождение (минуты)",maxScore:"Максимальный балл",questions:"Вопросы",question:"Вопрос",addQuestion:"Добавить вопрос",questionText:"Текст вопроса",questionType:"Тип вопроса",singleChoice:"Один правильный ответ",multipleChoice:"Несколько правильных ответов",answers:"Варианты ответов",correctAnswer:"Правильный ответ",addAnswer:"Добавить вариант",publish:"Опубликовать",draft:"Черновик",published:"Опубликован",status:"Статус",notStarted:"Не начат",inProgress:"В процессе",completed:"Завершён",result:"Результат",score:"Баллы",percentage:"Процент",attempts:"Попытки",startTest:"Начать тест",continueTest:"Продолжить тест",submitTest:"Завершить тест",viewResults:"Посмотреть результаты",analytics:"Аналитика",averageScore:"Средний балл",completionRate:"Процент выполнения",controlTests:"Контрольные работы",controlTest:"Контрольная работа",noControlTests:"Контрольные работы не назначены",admin:"Администратор",adminPanel:"Админ Панель",adminManagement:"Управление системой и контроль",userManagement:"Управление пользователями",users:"Пользователи",addUser:"Добавить пользователя",role:"Роль",actions:"Действия",analytics:"Аналитика",analyticsDesc:"Статистика и метрики системы",classes:"Классы",classesManagement:"Управление классами и группами",teacherTests:"Тесты учителей",teacherTestsDesc:"Тесты для оценки компетенций",newUser:"Новый пользователь",newUserDesc:"Добавить ученика или учителя",passwords:"Пароли",passwordsManagement:"Управление паролями пользователей",students:"Ученики",teachers:"Учителя",classFilter:"Фильтр по классу",allClasses:"Все классы",noStudents:"Учеников не найдено",noTeachers:"Учителей не найдено",subjectsManagement:"Управление предметами",subjectsManagementDesc:"Добавляйте и редактируйте школьные предметы",addSubject:"Добавить предмет",editSubject:"Редактировать предмет",noSubjects:"Предметы не найдены"},uz:{login:"Kirish",logout:"Chiqish",save:"Saqlash",cancel:"Bekor qilish",delete:"O'chirish",edit:"Tahrirlash",add:"Qo'shish",back:"Orqaga",next:"Keyingi",submit:"Yuborish",loading:"Yuklanmoqda...",error:"Xato",success:"Muvaffaqiyatli",selectRole:"Rolni tanlang",loginAsStudent:"O'quvchi sifatida kirish",loginAsTeacher:"O'qituvchi sifatida kirish",loginAsAdmin:"Administrator sifatida kirish",username:"Login",password:"Parol",changePassword:"Parolni o'zgartirish",currentPassword:"Joriy parol",newPassword:"Yangi parol",confirmPassword:"Parolni tasdiqlang",mustChangePassword:"Vaqtinchalik parolingizni o'zgartirishingiz kerak",student:"O'quvchi",dashboard:"Bosh sahifa",subjects:"Fanlar",subjectTests:"Fan testlari",interestTest:"Qiziqishlarni aniqlash testi",myProfile:"Mening profilim",firstName:"Ism",lastName:"Familiya",grade:"Sinf",interests:"Qiziqishlar",welcome:"Xush kelibsiz",teacher:"O'qituvchi",classes:"Sinflar",manageTests:"Testlarni boshqarish",modules:"Modullar",module:"Modul",createModule:"Modul yaratish",moduleName:"Modul nomi",moduleDescription:"Modul tavsifi",tests:"Testlar",test:"Test",createTest:"Test yaratish",testName:"Test nomi",testDuration:"Test vaqti (daqiqalar)",maxScore:"Maksimal ball",questions:"Savollar",question:"Savol",addQuestion:"Savol qo'shish",questionText:"Savol matni",questionType:"Savol turi",singleChoice:"Bitta to'g'ri javob",multipleChoice:"Bir nechta to'g'ri javob",answers:"Javob variantlari",correctAnswer:"To'g'ri javob",addAnswer:"Variant qo'shish",publish:"Nashr qilish",draft:"Qoralama",published:"Nashr qilingan",status:"Holat",notStarted:"Boshlanmagan",inProgress:"Jarayonda",completed:"Tugallangan",result:"Natija",score:"Ballar",percentage:"Foiz",attempts:"Urinishlar",startTest:"Testni boshlash",continueTest:"Testni davom ettirish",submitTest:"Testni yakunlash",viewResults:"Natijalarni ko'rish",analytics:"Analitika",averageScore:"O'rtacha ball",completionRate:"Bajarilish foizi",controlTests:"Nazorat isbotlari",controlTest:"Nazorat isbo'ti",noControlTests:"Nazorat isbotlari tayinlanmagan",admin:"Administrator",adminPanel:"Admin Panel",adminManagement:"Tizimni boshqarish va nazorat",userManagement:"Foydalanuvchilarni boshqarish",users:"Foydalanuvchilar",addUser:"Foydalanuvchi qo'shish",role:"Rol",actions:"Harakatlar",analytics:"Analitika",analyticsDesc:"Statistika va tizim metrikalari",classes:"Sinflar",classesManagement:"Sinflar va guruhlarni boshqarish",teacherTests:"O'qituvchi testlari",teacherTestsDesc:"Kompetensiyalarni baholash testlari",newUser:"Yangi foydalanuvchi",newUserDesc:"O'quvchi yoki o'qituvchi qo'shish",passwords:"Parollar",passwordsManagement:"Foydalanuvchi parollarini boshqarish",students:"O'quvchilar",teachers:"O'qituvchilar",classFilter:"Sinf bo'yicha filtrlash",allClasses:"Barcha sinflar",noStudents:"O'quvchilar topilmadi",noTeachers:"O'qituvchilar topilmadi",subjectsManagement:"Fanlarni boshqarish",subjectsManagementDesc:"Fanlarni qo'shing va tahrirlang",addSubject:"Fan qo'shish",editSubject:"Fanni tahrirlash",noSubjects:"Fanlar topilmadi"}};class ju{constructor(){this.state=this.loadState(),this.listeners=[]}loadState(){var t;try{const i=localStorage.getItem("auth-storage");if(i){const s=JSON.parse(i);return s.token?(this.setAuthHeader(s.token),console.log("🔑 Token loaded from localStorage")):console.log("⚠️ No token in localStorage"),console.log("📦 State loaded:",{isAuthenticated:s.isAuthenticated,user:(t=s.user)==null?void 0:t.username,hasToken:!!s.token}),s}else console.log("📦 No saved state in localStorage")}catch(i){console.error("Error loading state:",i)}return{user:null,token:null,isAuthenticated:!1,language:"ru"}}saveState(){try{localStorage.setItem("auth-storage",JSON.stringify(this.state))}catch(t){console.error("Error saving state:",t)}}setState(t){this.state={...this.state,...t},this.saveState(),this.notify()}getState(){return this.state}subscribe(t){return this.listeners.push(t),()=>{this.listeners=this.listeners.filter(i=>i!==t)}}notify(){this.listeners.forEach(t=>t(this.state))}setAuthHeader(t){this.authToken=t}async login(t,i,s){try{const n=await fetch(`${Q}/api/auth/login`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:t,password:i,role:s})});let a;try{a=await n.json()}catch{const o=await n.text();return console.error("Server returned non-JSON response:",o),{success:!1,error:"Server error: "+o.substring(0,100)}}return n.ok?(this.setAuthHeader(a.token),this.setState({user:a.user,token:a.token,isAuthenticated:!0}),{success:!0,user:a.user,requirePasswordChange:a.requirePasswordChange||a.user.isTemporaryPassword||!1}):{success:!1,error:a.message||"Login failed"}}catch(n){return console.error("Login error:",n),{success:!1,error:"Network error"}}}async changePassword(t,i){try{const s=await fetch(`${Q}/api/auth/change-password`,{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${this.state.token}`},body:JSON.stringify({currentPassword:t,newPassword:i})}),n=await s.json();if(!s.ok)return{success:!1,error:n.message||"Password change failed"};const a={...this.state.user,isTemporaryPassword:!1};return this.setState({user:a}),{success:!0}}catch(s){return console.error("Change password error:",s),{success:!1,error:"Network error"}}}logout(){console.log("🔐 Logging out..."),this.setState({user:null,token:null,isAuthenticated:!1}),this.authToken=null,localStorage.removeItem("auth-storage"),console.log("✅ Logout complete, localStorage cleared")}setLanguage(t){this.setState({language:t})}}const k=new ju,Q=window.location.origin;async function A(e,t="GET",i=null){const s=k.getState().token;console.log("🔑 API Request to:",e,"| Token exists:",!!s);let n;typeof t=="string"?n={method:t,...i&&{body:JSON.stringify(i)}}:n=t||{};const a={"Content-Type":"application/json",...s&&{Authorization:`Bearer ${s}`},...n.headers};try{const r=e.startsWith("http")?e:`${Q}${e}`,o=await fetch(r,{...n,headers:a}),l=await o.text();let d=null;if(l)try{d=JSON.parse(l)}catch(c){if(console.error("❌ API JSON parse error:",c),o.ok)return{success:!1,error:"Invalid JSON response"}}if(!o.ok)throw console.error("❌ API Error:",o.status,d),(o.status===401||o.status===403)&&(console.error("🚫 Authorization failed. Token:",k.getState().token?"exists":"missing"),k.logout(),window.location.pathname!=="/login"&&_.navigate("/login")),new Error((d==null?void 0:d.message)||(d==null?void 0:d.error)||"Request failed");return d==null?{success:!0,data:null}:d.success!==void 0?d:{success:!0,data:d}}catch(r){return console.error("API Error:",r),{success:!1,error:r.message}}}function D(e,t="info",i=4e3){var n;if(i>0){const a="toastContainer";let r=document.getElementById(a);r||(r=document.createElement("div"),r.id=a,r.className="toast-container",document.body.appendChild(r));const o=document.createElement("div");o.id="modernAlert-"+Date.now(),o.className=`alert-notification alert-${t}`;const l={success:"✅",error:"❌",warning:"⚠️",info:"ℹ️"};return o.innerHTML=`
            <span style="font-size: 1.5rem; flex-shrink: 0;">${l[t]||l.info}</span>
            <span>${e}</span>
            <button class="closeAlert" aria-label="Close">✕</button>
        `,r.appendChild(o),(n=o.querySelector(".closeAlert"))==null||n.addEventListener("click",()=>{o.remove()}),i>0&&setTimeout(()=>{document.body.contains(o)&&(o.style.animation="fadeOut 0.3s ease-out",setTimeout(()=>o.remove(),300))},i),Promise.resolve(!0)}else{const a=document.createElement("div");a.className="modal";const r={success:"✅",error:"❌",warning:"⚠️",info:"ℹ️"},o={success:"linear-gradient(135deg, #10b981 0%, #059669 100%)",error:"linear-gradient(135deg, #ef4444 0%, #dc2626 100%)",warning:"linear-gradient(135deg, #f59e0b 0%, #d97706 100%)",info:"linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)"};a.innerHTML=`
            <div class="modal-content" style="max-width: 400px; text-align: center;">
                <div style="background: ${o[t]}; color: white; padding: 2rem; border-radius: 12px 12px 0 0; margin: -1.5rem -1.5rem 1.5rem -1.5rem;">
                    <div style="font-size: 3rem; margin-bottom: 0.5rem;">${r[t]}</div>
                    <p style="margin: 0; font-size: 1.1rem; font-weight: 500;">${e}</p>
                </div>
                <button class="button button-primary" id="alertOkBtn" style="width: 100%; padding: 0.75rem;">OK</button>
            </div>
        `,document.body.appendChild(a),setTimeout(()=>a.classList.add("show"),10);const l=()=>{a.classList.remove("show"),setTimeout(()=>a.remove(),300)};return document.getElementById("alertOkBtn").addEventListener("click",l),new Promise(d=>{document.getElementById("alertOkBtn").addEventListener("click",()=>d(!0))})}}function pe(e,t=""){const i=k.getState().language,s=document.createElement("div");return s.className="modal modal--centered add-user-modal",s.innerHTML=`
        <div class="modal-content" style="max-width: 450px;">
            ${t?`<h2 style="margin: 0 0 1rem 0;">${t}</h2>`:""}
            <p style="color: var(--text-secondary); margin: 0 0 2rem 0; font-size: 1.05rem;">${e}</p>
            <div style="display: flex; gap: 1rem; justify-content: flex-end;">
                <button class="button button-secondary" id="confirmNoBtn">${i==="uz"?"Yo'q":"Нет"}</button>
                <button class="button button-primary" id="confirmYesBtn">${i==="uz"?"Ha":"Да"}</button>
            </div>
        </div>
    `,document.body.appendChild(s),setTimeout(()=>s.classList.add("show"),10),function(){const a=document.getElementById("studentClass");if(!a)return;a.innerHTML="";const r=document.createElement("option");if(r.value="",r.textContent=i==="uz"?"Sinfni tanlang":"Выберите класс",a.appendChild(r),Array.isArray(classesList)&&classesList.length>0)classesList.forEach(o=>{const l=document.createElement("option");l.value=o.id||o._id||"";const d=o.grade||"",c=o.name||"",u=i==="uz"?"sinf":"класс";l.textContent=`${d}${c} ${u}`,a.appendChild(l)});else{const o=document.createElement("option");o.value="",o.disabled=!0,o.textContent=i==="uz"?"Sinf mavjud emas":"Классы не найдены",a.appendChild(o)}}(),new Promise(n=>{const a=r=>{s.classList.remove("show"),setTimeout(()=>s.remove(),300),n(r)};document.getElementById("confirmYesBtn").addEventListener("click",()=>a(!0)),document.getElementById("confirmNoBtn").addEventListener("click",()=>a(!1))})}function E(e){var i;const t=k.getState().language;return((i=Iu[t])==null?void 0:i[e])||e}const ii=["#3B82F6","#10B981","#F59E0B","#8B5CF6","#EC4899","#06B6D4","#F97316"],Pu=[{id:"1",name:"Алгебра"},{id:"2",name:"Геометрия"},{id:"3",name:"Физика"},{id:"4",name:"Химия"},{id:"5",name:"Биология"},{id:"6",name:"История"},{id:"7",name:"Литература"},{id:"8",name:"География"},{id:"9",name:"Английский язык"},{id:"10",name:"Информатика"}];function Li(){return document.documentElement.classList.contains("light-theme")?"#000000":"#FFFFFF"}function Ls(){return Li()+"33"}function As(){return Li()}function ra(e=[]){const t=(Array.isArray(e)?e:[]).map(a=>{const r=(a==null?void 0:a._id)||(a==null?void 0:a.id)||(a==null?void 0:a.subjectId)||(a==null?void 0:a.name)||(a==null?void 0:a.label)||(a==null?void 0:a.subjectName);return{id:r?String(r):"",name:(a==null?void 0:a.name)||(a==null?void 0:a.subjectName)||(a==null?void 0:a.label)||""}}).filter(a=>a.id||a.name),i=new Map(t.map(a=>[a.id,a])),s=new Map(t.map(a=>[(a.name||"").toLowerCase(),a])),n=Pu.map(a=>{const r=i.get(a.id)||s.get(a.name.toLowerCase());return r?{...a,...r}:a});return t.forEach(a=>{n.some(o=>{const l=o.id&&a.id&&o.id===a.id,d=(o.name||"").toLowerCase()===(a.name||"").toLowerCase();return l||d})||n.push(a)}),n}function Ai(e,t,i={}){var d;const{subjectList:s=[],includeAllSubjects:n=!1}=i;if(k.getState().language,!((d=e==null?void 0:e.series)!=null&&d.length)){if(!n)return{labels:[],series:[]};const u=ra(s).map(h=>h.name);return{labels:u,series:[{label:t,data:u.map(()=>null)}]}}const a=new Map;if(e.series.forEach(c=>{const u=(c.data||[]).filter(m=>typeof m=="number"),h=u.length?Math.round(u.reduce((m,p)=>m+p,0)/u.length*10)/10:null;c.subjectId&&a.set(String(c.subjectId),h);const g=(c.subjectName||c.label||"").toLowerCase();g&&a.set(g,h)}),!n){const c=[],u=[];return e.series.forEach(h=>{const g=(h.data||[]).filter(p=>typeof p=="number"),m=g.length?Math.round(g.reduce((p,f)=>p+f,0)/g.length*10)/10:null;c.push(h.subjectName||h.label||""),u.push(m)}),{labels:c,series:[{label:t,data:u}]}}const r=ra(s),o=r.map(c=>c.name),l=r.map(c=>{const u=c.id?String(c.id):"";if(u&&a.has(u))return a.get(u);const h=(c.name||"").toLowerCase();return h&&a.has(h)?a.get(h):uzKey&&a.has(uzKey)?a.get(uzKey):null});return{labels:o,series:[{label:t,data:l}]}}function zi(e,t,i,s=[]){var c;const n=document.getElementById(e),a=document.getElementById(t);if(!n)return;const r=Ls(),o=As();if((c=window._chartInstances)!=null&&c[e]&&window._chartInstances[e].destroy(),!i||!i.labels||i.labels.length===0){n&&(n.style.display="none"),a&&(a.style.display="block");return}a&&(a.style.display="none"),n.style.display="block";const l=i.series.map((u,h)=>({label:u.label||u.subjectName,data:u.data,backgroundColor:ii[h%ii.length]+"CC",borderColor:ii[h%ii.length],borderWidth:1,borderRadius:8,maxBarThickness:48}));s.forEach(u=>{l.push({label:u.label,data:u.data,backgroundColor:(u.color||"#64748B")+"66",borderColor:u.color||"#64748B",borderWidth:1,borderRadius:8,maxBarThickness:48})});const d=new vt(n,{type:"bar",data:{labels:i.labels,datasets:l},options:{responsive:!0,maintainAspectRatio:!1,plugins:{legend:{display:!0,labels:{color:o}}},scales:{y:{beginAtZero:!0,max:100,grid:{color:r},ticks:{color:o}},x:{grid:{display:!1},ticks:{color:o}}}}});window._chartInstances=window._chartInstances||{},window._chartInstances[e]=d}function Zt(e,t,i,s=[]){var u;const n=document.getElementById(e),a=document.getElementById(t);if(!n)return;const r=Li(),o=Ls(),l=As();if((u=window._chartInstances)!=null&&u[e]&&window._chartInstances[e].destroy(),!i||!i.labels||i.labels.length===0){n&&(n.style.display="none"),a&&(a.style.display="block");return}a&&(a.style.display="none"),n.style.display="block";const d=i.series.map((h,g)=>({label:h.subjectName||h.label,data:h.data,borderColor:r,backgroundColor:r+"22",borderWidth:2,fill:!1,tension:.35,pointRadius:3,pointHoverRadius:5}));s.forEach((h,g)=>{d.push({label:h.label,data:h.data,borderColor:r,backgroundColor:"transparent",borderWidth:2,borderDash:h.dash||[6,4],fill:!1,tension:.35,pointRadius:2,pointHoverRadius:4})});const c=new vt(n,{type:"line",data:{labels:i.labels,datasets:d},options:{responsive:!0,maintainAspectRatio:!1,plugins:{legend:{display:!0,labels:{color:l,usePointStyle:!0}}},scales:{y:{beginAtZero:!0,max:100,grid:{color:o},ticks:{color:l}},x:{grid:{color:o},ticks:{color:l}}}}});window._chartInstances=window._chartInstances||{},window._chartInstances[e]=c}function Du(){document.querySelectorAll(".admin-modal-overlay, .custom-modal-overlay, .modal").forEach(e=>e.remove())}class Ou{constructor(){this.routes={},this.currentRoute=null,window.addEventListener("popstate",()=>{this.navigate(window.location.pathname,!1)})}register(t,i){this.routes[t]=i}navigate(t,i=!0){console.log("🔍 Router.navigate called:",t),window._testTimerInterval&&(clearInterval(window._testTimerInterval),window._testTimerInterval=null,console.log("🧹 Timer cleared on navigation")),Du(),i&&window.history.pushState({},"",t),this.currentRoute=t;const s=this.routes[t];if(s){console.log("✅ Found exact route match for:",t),s(),gs();return}for(const[a,r]of Object.entries(this.routes))if(a.includes(":")){const o=[],l=new RegExp("^"+a.replace(/:([^\/]+)/g,(c,u)=>(o.push(u),"([^/]+)"))+"$"),d=t.match(l);if(console.log(`🔍 Checking route pattern: ${a} against ${t}`,d?"✅ MATCH":"❌ NO MATCH"),d){console.log("✅ Found dynamic route match:",a),this.currentParams={},o.forEach((c,u)=>{this.currentParams[c]=d[u+1]}),console.log("📝 Route params:",this.currentParams),r(this.currentParams),gs();return}}console.log("❌ No route found for:",t);const n=this.routes["/"];n&&n()}}function ie(){const e=k.getState(),t=e.language;console.log("🔧 renderLanguageSwitch called, current language:",t);const i=document.getElementById("langBtn");if(i){const l=document.getElementById("languageSwitch");e.isAuthenticated&&l?l.style.display="none":l&&(l.style.display="block"),t==="ru"?i.innerHTML='<span style="color: white; font-weight: 900;">RU</span> | <span style="opacity: 0.5;">UZ</span>':i.innerHTML='<span style="opacity: 0.5;">RU</span> | <span style="color: white; font-weight: 900;">UZ</span>',i.removeEventListener("click",i._switchLangHandler),i._switchLangHandler=()=>{const d=t==="ru"?"uz":"ru";console.log("🌍 Switching language to:",d),k.setLanguage(d),ie(),Ki()},i.addEventListener("click",i._switchLangHandler)}const s=document.getElementById("sidebarLangBtn"),n=document.getElementById("sidebarLangText");console.log("🔧 Sidebar language button check:",{found:!!s,sidebarLangBtn:s,sidebarLangText:n}),s&&n&&(t==="ru"?n.innerHTML='<span style="font-weight: 900;">RU</span> | <span style="opacity: 0.6;">UZ</span>':n.innerHTML='<span style="opacity: 0.6;">RU</span> | <span style="font-weight: 900;">UZ</span>',s.removeEventListener("click",s._switchLangHandler),s._switchLangHandler=()=>{const l=t==="ru"?"uz":"ru";console.log("🌍 Switching language to:",l),k.setLanguage(l),ie(),Ki()},s.addEventListener("click",s._switchLangHandler));const a=document.querySelector('[data-nav="language"]'),r=document.getElementById("bottomLangText");r&&(r.textContent=t==="ru"?"RU":"UZ"),a&&(a.removeEventListener("click",a._switchLangHandler),a._switchLangHandler=l=>{l.preventDefault(),l.stopPropagation();const d=t==="ru"?"uz":"ru";console.log("🌍 Switching language to:",d),k.setLanguage(d),ie(),Ki()},a.addEventListener("click",a._switchLangHandler,!0));const o=document.getElementById("bottomProfileText");o&&(o.textContent=t==="ru"?"Профиль":"Profil")}function Ki(){const e=window.location.pathname;console.log("🔄 Refreshing page with new language:",e),_.navigate(e==="/"?"/":e,!1)}function lr(){const e=document.getElementById("themeBtn"),t=document.getElementById("topbarThemeBtn");if(!e&&!t)return;const i=localStorage.getItem("theme")||"dark",s=a=>{const r=a==="light";r?document.documentElement.classList.add("light-theme"):document.documentElement.classList.remove("light-theme");const o=r?"☀️":"🌙",l=r?"Switch to Dark Mode":"Switch to Light Mode";e&&(e.innerHTML=o,e.title=l),t&&(t.innerHTML=o,t.title=l)};s(i);const n=()=>{if(e!=null&&e._ignoreNextClick){e._ignoreNextClick=!1;return}const r=(localStorage.getItem("theme")||"dark")==="dark"?"light":"dark";localStorage.setItem("theme",r),s(r);const o=Li(),l=Ls(),d=As();Object.values(window._chartInstances||{}).forEach(c=>{var u,h,g,m,p,f,b,v,w,y,x,z,S,$,C,T;c&&((g=(h=(u=c.options)==null?void 0:u.scales)==null?void 0:h.x)!=null&&g.grid&&(c.options.scales.x.grid.color=l),(f=(p=(m=c.options)==null?void 0:m.scales)==null?void 0:p.y)!=null&&f.grid&&(c.options.scales.y.grid.color=l),(w=(v=(b=c.options)==null?void 0:b.scales)==null?void 0:v.x)!=null&&w.ticks&&(c.options.scales.x.ticks.color=d),(z=(x=(y=c.options)==null?void 0:y.scales)==null?void 0:x.y)!=null&&z.ticks&&(c.options.scales.y.ticks.color=d),(C=($=(S=c.options)==null?void 0:S.plugins)==null?void 0:$.legend)!=null&&C.labels&&(c.options.plugins.legend.labels.color=d),((T=c.config)==null?void 0:T.type)==="line"&&c.data.datasets.forEach(B=>{B.borderColor=o,B.backgroundColor=o+"22"}),c.update())})};e&&(e.removeEventListener("click",e._toggleHandler),e._toggleHandler=n,e.addEventListener("click",e._toggleHandler)),t&&(t.removeEventListener("click",t._toggleHandler),t._toggleHandler=n,t.addEventListener("click",t._toggleHandler)),Ru()}function Ru(){const e=document.getElementById("themeBtn");if(!e)return;const t=()=>window.matchMedia("(max-width: 768px)").matches,i=16,s=(d,c,u)=>Math.min(Math.max(d,c),u),n=(d,c)=>{const u=e.getBoundingClientRect(),h=window.innerWidth-u.width-i,g=window.innerHeight-u.height-i,m=s(d,i,h),p=s(c,i,g);e.style.left=`${m}px`,e.style.top=`${p}px`,e.style.right="auto",e.style.bottom="auto"},a=()=>{const d=e.getBoundingClientRect(),c=[{left:i,top:i},{left:window.innerWidth-d.width-i,top:i},{left:i,top:window.innerHeight-d.height-i},{left:window.innerWidth-d.width-i,top:window.innerHeight-d.height-i}],u=d.left+d.width/2,h=d.top+d.height/2;let g=c[0],m=1/0;c.forEach(p=>{const f=u-(p.left+d.width/2),b=h-(p.top+d.height/2),v=Math.hypot(f,b);v<m&&(m=v,g=p)}),n(g.left,g.top)},r=()=>{if(e._dragEnabled)return;e._dragEnabled=!0,e.classList.add("theme-toggle-draggable");const d=e.getBoundingClientRect();!e.style.left&&!e.style.top?n(window.innerWidth-d.width-i,i):a();let c=!1,u=!1,h=0,g=0;e._dragPointerDown=m=>{var v;if(!t()||m.button!==void 0&&m.button!==0)return;c=!0,u=!1;const p=e.getBoundingClientRect();h=m.clientX-p.left,g=m.clientY-p.top,e.classList.add("dragging"),(v=e.setPointerCapture)==null||v.call(e,m.pointerId);const f=w=>{if(!c)return;const y=w.clientX-h,x=w.clientY-g;n(y,x),u||(u=Math.abs(w.clientX-m.clientX)>4||Math.abs(w.clientY-m.clientY)>4)},b=()=>{c=!1,e.classList.remove("dragging"),a(),u&&(e._ignoreNextClick=!0),window.removeEventListener("pointermove",f),window.removeEventListener("pointerup",b),window.removeEventListener("pointercancel",b)};window.addEventListener("pointermove",f),window.addEventListener("pointerup",b),window.addEventListener("pointercancel",b)},e.addEventListener("pointerdown",e._dragPointerDown)},o=()=>{e._dragEnabled&&(e._dragEnabled=!1,e.classList.remove("theme-toggle-draggable","dragging"),e.removeEventListener("pointerdown",e._dragPointerDown),e.style.left="",e.style.top="",e.style.right="",e.style.bottom="")},l=()=>{t()?r():o()};l(),e._dragResizeHandler&&window.removeEventListener("resize",e._dragResizeHandler),e._dragResizeHandler=()=>{l(),e._dragEnabled&&a()},window.addEventListener("resize",e._dragResizeHandler)}function gs(){const e=document.getElementById("bottomNav"),t=document.getElementById("themeBtn"),i=document.querySelector(".language-switch"),s=k.getState();if(!e)return;const n=document.getElementById("app");if(n&&n.innerHTML.includes("login-page")){e.style.display="none",t&&(t.parentElement.style.display="none"),i&&(i.style.display="none");return}e.style.display="",t&&(t.parentElement.style.display=""),i&&(i.style.display=""),s.isAuthenticated?(e.classList.add("active"),e.querySelectorAll(".bottom-nav-item").forEach(o=>{var d,c;const l=o.getAttribute("data-nav");l!=="language"&&(((d=s.user)==null?void 0:d.role)==="admin"&&(l==="statistics"||l==="history")||((c=s.user)==null?void 0:c.role)==="teacher"&&l==="history"?o.style.display="none":o.style.display="flex",o._navHandler&&o.removeEventListener("click",o._navHandler),o._navHandler=()=>{var h,g,m,p;const u=o.getAttribute("data-nav");u==="home"?((h=s.user)==null?void 0:h.role)==="admin"?_.navigate("/admin/dashboard"):_.navigate("/"):u==="statistics"?((g=s.user)==null?void 0:g.role)==="student"?_.navigate("/student/profile"):((m=s.user)==null?void 0:m.role)==="teacher"&&_.navigate("/teacher/profile"):u==="history"?((p=s.user)==null?void 0:p.role)==="student"&&_.navigate("/student/test-history"):u==="profile"?_.navigate("/"):u==="settings"&&cr()},o.addEventListener("click",o._navHandler))}),ie()):e.classList.remove("active")}function dr(){console.log("📄 renderLoginPage called");const e=document.getElementById("app");if(!e){console.error("❌ app element not found!");return}const t=document.getElementById("bottomNav"),i=document.getElementById("themeBtn"),s=document.querySelector(".language-switch");t&&(t.style.display="none"),i&&(i.parentElement.style.display="none"),s&&(s.style.display="none"),e.innerHTML=`
        <div class="login-page">
            <div class="login-container fade-in" id="loginContainer">
                <!-- Content will be inserted here -->
            </div>
        </div>
    `,console.log("📝 Calling renderRoleSelection"),Bs()}function Bs(){console.log("🔐 renderRoleSelection called");const e=document.getElementById("loginContainer");if(!e){console.error("❌ loginContainer not found!");return}const t=k.getState().language;e.innerHTML=`
        <div class="login-card">
            <div class="login-header">
                <div class="brand-mark">
                    <img src="/assets/zedly_logo_bg.png" alt="ZEDLY" class="brand-logo" />
                    <div class="brand-name">ZEDLY</div>
                </div>
                <h2>${E("selectRole")}</h2>
                <p>${t==="uz"?"Rolni tanlang":"Выберите свою роль"}</p>
            </div>
            
            <div class="role-cards">
                <div class="role-card" data-role="student">
                    <span>👨‍🎓</span>
                    <div class="role-card-text">
                        <h3>${E("loginAsStudent")}</h3>
                        <p>${t==="uz"?"O'quvchi paneli":"Панель ученика"}</p>
                    </div>
                </div>
                
                <div class="role-card" data-role="teacher">
                    <span>👨‍🏫</span>
                    <div class="role-card-text">
                        <h3>${E("loginAsTeacher")}</h3>
                        <p>${t==="uz"?"O'qituvchi paneli":"Панель учителя"}</p>
                    </div>
                </div>
                
                <div class="role-card" data-role="admin">
                    <span>👨‍💼</span>
                    <div class="role-card-text">
                        <h3>${E("loginAsAdmin")}</h3>
                        <p>${t==="uz"?"Administrator paneli":"Панель администратора"}</p>
                    </div>
                </div>
            </div>
        </div>
    `,console.log("📍 Adding event listeners to role cards"),document.querySelectorAll(".role-card").forEach(i=>{i.addEventListener("click",function(){const s=this.getAttribute("data-role");console.log("🖱️ Role card clicked:",s),qu(s)})}),console.log("✅ renderRoleSelection complete")}function qu(e){console.log("🔐 selectRole called with role:",e);const t=document.getElementById("loginContainer"),i=k.getState().language,s={student:"👨‍🎓",teacher:"👨‍🏫",admin:"👨‍💼"},n={student:E("loginAsStudent"),teacher:E("loginAsTeacher"),admin:E("loginAsAdmin")};t.innerHTML=`
        <div class="login-card">
            <button class="back-button" id="backBtn">
                <span>←</span>
                <span>${E("back")}</span>
            </button>
            
            <div class="login-header">
                <div class="role-badge">${s[e]}</div>
                <h2>${n[e]}</h2>
                <p>${i==="uz"?"Kirish ma'lumotlaringizni kiriting":"Введите данные для входа"}</p>
            </div>
            
            <form class="login-form" id="loginForm">
                <div id="errorContainer"></div>
                
                <div class="form-group">
                    <label>${E("username")}</label>
                    <input type="text" id="username" placeholder="${E("username")}" required />
                </div>
                
                <div class="form-group">
                    <label>${E("password")}</label>
                    <input type="password" id="password" placeholder="${E("password")}" required />
                </div>
                
                <button type="submit" class="btn-primary" id="loginBtn">
                    ${E("login")}
                </button>
            </form>
        </div>
    `,console.log("📍 Adding event listener to back button"),document.getElementById("backBtn").addEventListener("click",function(a){a.preventDefault(),console.log("⬅️ Back button clicked"),Bs()}),console.log("📍 Adding event listener to login form"),document.getElementById("loginForm").addEventListener("submit",async a=>{a.preventDefault(),console.log("📝 Login form submitted");const r=document.getElementById("username").value,o=document.getElementById("password").value,l=document.getElementById("loginBtn"),d=document.getElementById("errorContainer");console.log("👤 Attempting login with username:",r,"role:",e),l.disabled=!0,l.textContent=E("loading"),d.innerHTML="";const c=await k.login(r,o,e);console.log("📊 Login result:",c),c.success?(console.log("✅ Login successful"),c.requirePasswordChange||c.user.isTemporaryPassword?(console.log("🔄 Navigating to /change-password"),_.navigate("/change-password")):(console.log("🔄 Navigating to /"),_.navigate("/"))):(console.log("❌ Login failed:",c.error),d.innerHTML=`<div class="error-message">${c.error}</div>`,l.disabled=!1,l.textContent=E("login"))})}function Fu(){const e=document.getElementById("app"),t=document.getElementById("bottomNav"),i=document.getElementById("themeBtn"),s=document.querySelector(".language-switch");t&&(t.style.display="none"),i&&(i.parentElement.style.display="none"),s&&(s.style.display="none"),e.innerHTML=`
        <div class="login-page">
            <div class="login-container fade-in">
                <div class="login-header">
                    <h2>${E("changePassword")}</h2>
                    <p>${E("mustChangePassword")}</p>
                </div>
                
                <form class="login-form" id="changePasswordForm">
                    <div id="messageContainer"></div>
                    
                    <div class="form-group">
                        <label>${E("currentPassword")}</label>
                        <input type="password" id="currentPassword" required />
                    </div>
                    
                    <div class="form-group">
                        <label>${E("newPassword")}</label>
                        <input type="password" id="newPassword" required />
                    </div>
                    
                    <div class="form-group">
                        <label>${E("confirmPassword")}</label>
                        <input type="password" id="confirmPassword" required />
                    </div>
                    
                    <button type="submit" class="btn-primary" id="changeBtn">
                        ${E("changePassword")}
                    </button>
                </form>
            </div>
        </div>
    `,document.getElementById("changePasswordForm").onsubmit=async n=>{n.preventDefault();const a=document.getElementById("currentPassword").value,r=document.getElementById("newPassword").value,o=document.getElementById("confirmPassword").value,l=document.getElementById("changeBtn"),d=document.getElementById("messageContainer");if(d.innerHTML="",r!==o){d.innerHTML='<div class="error-message">Passwords do not match</div>';return}l.disabled=!0,l.textContent=E("loading");const c=await k.changePassword(a,r);c.success?(d.innerHTML='<div class="success-message">Password changed successfully!</div>',setTimeout(()=>_.navigate("/"),1500)):(d.innerHTML=`<div class="error-message">${c.error}</div>`,l.disabled=!1,l.textContent=E("changePassword"))}}function F(e,t){var a;k.getState().user;const i=document.getElementById("app"),s=Nu(t);i.innerHTML=`
        <div class="layout">
            <aside class="sidebar" id="sidebar">
                <div class="sidebar-header">
                    <img src="/assets/zedly_logo_bg.png" alt="ZEDLY" class="brand-logo" />
                    <span class="brand-name">ZEDLY</span>
                </div>
                
                <ul class="nav-menu" id="navMenu">
                    ${s.map((r,o)=>`
                        <li class="nav-item" data-nav-index="${o}" data-nav-path="${r.path}">
                            <span>${r.icon}</span>
                            <span>${r.label}</span>
                        </li>
                    `).join("")}
                </ul>
                
                <div class="sidebar-language" style="padding: 1rem; border-top: 1px solid var(--border);">
                    <button id="sidebarLangBtn" class="lang-switch-btn" style="width: 100%; padding: 12px; background: var(--bg-secondary); border: 1px solid var(--border); border-radius: 8px; color: var(--text-primary); font-weight: 600; cursor: pointer; transition: all 0.3s ease; display: flex; align-items: center; justify-content: center; gap: 0.5rem;">
                        <span>🌐</span>
                        <span id="sidebarLangText">RU | UZ</span>
                    </button>
                </div>
                
                <button class="logout-btn" id="logoutBtn">
                    ${E("logout")}
                </button>
            </aside>
            
            <main class="main-content" id="mainContent">
                <div class="app-topbar">
                    <div class="app-topbar__side"></div>
                    <div class="app-topbar__center">
                        <img src="/assets/zedly_logo_bg.png" alt="ZEDLY" class="app-topbar__logo" />
                        <span class="app-topbar__name">ZEDLY</span>
                    </div>
                    <div class="app-topbar__side app-topbar__right">
                        <button id="topbarThemeBtn" class="topbar-theme-btn" title="Toggle Dark/Light Mode">🌙</button>
                    </div>
                </div>
                <div class="app-content">
                    ${e}
                </div>
            </main>
        </div>
    `;const n=document.getElementById("themeBtn");n!=null&&n.parentElement&&(n.parentElement.style.display="none"),console.log("📍 Adding event listeners to navigation items"),document.querySelectorAll(".nav-item").forEach(r=>{r.addEventListener("click",function(o){o.preventDefault();const l=this.getAttribute("data-nav-path");console.log("🔗 Navigation clicked:",l),_.navigate(l)})}),console.log("📍 Adding event listener to logout button"),(a=document.getElementById("logoutBtn"))==null||a.addEventListener("click",function(r){r.preventDefault(),console.log("🚪 Logout button clicked"),cr()}),ie(),lr()}function Nu(e){return{student:[{path:"/student/dashboard",label:E("dashboard"),icon:'<i class="fas fa-home"></i>'},{path:"/student/subjects",label:E("subjectTests"),icon:'<i class="fas fa-book-open"></i>'},{path:"/student/profile",label:k.getState().language==="uz"?"Profil":"Профиль",icon:'<i class="fas fa-user-graduate"></i>'},{path:"/student/test-history",label:k.getState().language==="uz"?"Testlar tarixi":"История тестов",icon:'<i class="fas fa-history"></i>'},{path:"/student/interest-test",label:E("interestTest"),icon:'<i class="fas fa-compass"></i>'}],teacher:[{path:"/teacher/profile",label:k.getState().language==="uz"?"Profil":"Профиль",icon:'<i class="fas fa-user-tie"></i>'},{path:"/teacher/subject-analytics",label:k.getState().language==="uz"?"Mavzu analitikasi":"Аналитика по темам",icon:'<i class="fas fa-chart-line"></i>'},{path:"/teacher/classes",label:E("classes"),icon:'<i class="fas fa-chalkboard-user"></i>'}],admin:[{path:"/admin/dashboard",label:E("adminPanel"),icon:'<i class="fas fa-crown"></i>'},{path:"/admin/analytics",label:E("analytics"),icon:'<i class="fas fa-chart-bar"></i>'},{path:"/admin/classes",label:E("classes"),icon:'<i class="fas fa-school"></i>'},{path:"/admin/subjects",label:E("subjects"),icon:'<i class="fas fa-book"></i>'},{path:"/admin/passwords",label:E("passwords"),icon:'<i class="fas fa-key"></i>'},{path:"/admin/teacher-tests",label:k.getState().language==="uz"?"O'qituvchilar testlari":"Тесты для учителей",icon:'<i class="fas fa-user-check"></i>'}]}[e]||[]}function cr(){console.log("🚪 handleLogout called");const e=k.getState().language;Hu(e==="uz"?"Chiqish":"Выход",e==="uz"?"Chiqishni xohlaysizmi?":"Вы уверены, что хотите выйти?",()=>{console.log("✅ User confirmed logout"),console.log("📊 State before logout:",k.getState()),k.logout(),console.log("📊 State after logout:",k.getState()),console.log("🔄 Navigating to /login"),setTimeout(()=>{_.navigate("/login")},100)})}function Hu(e,t,i){const s=k.getState().language,n=`
        <div class="custom-modal-overlay" id="customModal">
            <div class="custom-modal">
                <div class="custom-modal-header">
                    <h3>${e}</h3>
                </div>
                <div class="custom-modal-body">
                    <p>${t}</p>
                </div>
                <div class="custom-modal-footer">
                    <button class="btn-cancel" id="modalCancelBtn">
                        ${s==="uz"?"Bekor qilish":"Отмена"}
                    </button>
                    <button class="btn-confirm" id="modalConfirmBtn">
                        ${s==="uz"?"Ha":"Да"}
                    </button>
                </div>
            </div>
        </div>
    `;document.body.insertAdjacentHTML("beforeend",n);const a=document.getElementById("customModal"),r=document.getElementById("modalCancelBtn"),o=document.getElementById("modalConfirmBtn"),l=()=>{a.classList.add("fade-out"),setTimeout(()=>a.remove(),300)};r.addEventListener("click",l),a.addEventListener("click",d=>{d.target===a&&l()}),o.addEventListener("click",()=>{l(),i&&i()}),setTimeout(()=>a.classList.add("show"),10)}async function Vu(){var n,a;const e=k.getState().language;if(!k.getState().user){_.navigate("/login");return}F(`
        <div class="page-header">
            <div class="page-header-title">
                <h1>${e==="uz"?"Mening Profilim":"Мой Профиль"}</h1>
                <p class="page-header-subtitle">${e==="uz"?"Shaxsiy ma'lumotlar va statistika":"Личная информация и статистика"}</p>
            </div>
            <div class="page-header-actions">
                <button class="back-button back-button--compact" id="btnBackFromProfile">
                    <span>←</span>
                    <span>${e==="uz"?"Orqaga":"Назад"}</span>
                </button>
            </div>
        </div>
        
        <div id="profileContainer">
            <div class="loading">
                <div class="spinner"></div>
            </div>
        </div>
    `,"student"),(n=document.getElementById("btnBackFromProfile"))==null||n.addEventListener("click",()=>{_.navigate("/student/dashboard")});const s=document.getElementById("profileContainer");try{const r=await A("/api/users/me"),o=await A("/api/subjects"),l=await A("/api/test-results"),d=await A("/api/tests"),c=await A("/api/interest-results");if(!r.success)throw new Error("Failed to load profile");const u=r.data,h=o.success?o.data:[],g=l.success?l.data:[],m=d.success?d.data:[],p=new Map(m.map(M=>[M._id,M])),f=c.success?c.data:null,b=(u==null?void 0:u.interestTestResults)||null,v=M=>M?Array.isArray(M)?[...M].filter(j=>j&&j.categories).sort((j,q)=>new Date(q.completedAt||0)-new Date(j.completedAt||0))[0]||null:M.categories?M:null:null,w=v(f)||v(b),y={};for(const M of g){const j=M.subjectId||"unknown";y[j]||(y[j]=[]),y[j].push(M)}console.log("📊 Results by subject:",y),console.log("📚 Available subjects:",h),console.log("📝 All test results:",g),console.log("🧭 Interest test results:",w),console.log("🧭 Interest results response:",c);const x={math:{subjects:[{name:"Математика",icon:"🔢",reason:"Ваши логические способности и интерес к числам делают математику идеальным выбором"},{name:"Физика",icon:"⚛️",reason:"Физика требует сильных математических навыков и логического мышления"}]},science:{subjects:[{name:"Биология",icon:"🧬",reason:"Ваш интерес к природе и живым организмам идеально подходит для биологии"},{name:"Химия",icon:"🧪",reason:"Химия откроет вам мир научных экспериментов и исследований"}]},tech:{subjects:[{name:"Информатика",icon:"💻",reason:"Ваши технические навыки прекрасно подходят для программирования"},{name:"Физика",icon:"⚛️",reason:"Физика - основа всех современных технологий"}]},art:{subjects:[{name:"Изобразительное искусство",icon:"🎨",reason:"Развивайте свой творческий потенциал через искусство"},{name:"Музыка",icon:"🎵",reason:"Музыка поможет выразить вашу креативность"}]},social:{subjects:[{name:"История",icon:"📜",reason:"История поможет понять общество и человеческие отношения"},{name:"Обществознание",icon:"👥",reason:"Идеально для развития социальных и коммуникативных навыков"}]},language:{subjects:[{name:"Литература",icon:"📚",reason:"Литература развивает языковые навыки и культурное понимание"},{name:"Иностранный язык",icon:"🌍",reason:"Откройте новые возможности через изучение языков"}]}},z=g.length,S=z>0?Math.round(g.reduce((M,j)=>M+j.score,0)/z):0,$=z>0?Math.max(...g.map(M=>M.score)):0;let C="",T="";try{const M=await A("/api/classes"),j=M.success?M.data||[]:[],q=u.classId;if(q&&j.length){const N=j.find(et=>(et._id||et.id)===q);if(N){const et=N._id||N.id;T=`${N.grade||""}${N.name||""}`;const ft=await A(`/api/classes/${et}/students`),st=ft.success?ft.data||[]:[];if(st.length){const Y=[...st].sort((re,ji)=>(ji.averageScore||0)-(re.averageScore||0)),rt=Y.findIndex(re=>(re._id||re.id)===(u._id||u.id)),ut=rt>=0?rt+1:null,bt=Y.length,jt=rt>=0?Y[rt]:null,_t=(jt==null?void 0:jt.averageScore)??S;ut&&(C=`
                                <div class="card" style="text-align: center; background: linear-gradient(135deg, #10b981 0%, #06b6d4 100%); color: white;">
                                    <div style="font-size: 2.5rem; margin-bottom: 0.5rem;">🏅</div>
                                    <div style="font-size: 1.8rem; font-weight: bold; margin-bottom: 0.25rem;">${ut}/${bt}</div>
                                    <div style="opacity: 0.9;">${e==="uz"?"Sinfdagi o‘rin":"Место в классе"}</div>
                                    <div style="font-size: 0.85rem; opacity: 0.9; margin-top: 0.35rem;">
                                        ${T||""} • ${e==="uz"?"O‘rtacha":"Средний"}: ${_t}%
                                    </div>
                                </div>
                            `)}}}}catch(M){console.warn("Class ranking unavailable:",M)}s.innerHTML=`
            <div class="profile-grid" style="display: grid; gap: 1.5rem;">
                <!-- Profile Info Card -->
                <div class="card" style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white;">
                    <div style="display: flex; align-items: center; gap: 1.5rem;">
                        <div style="width: 80px; height: 80px; border-radius: 50%; background: white; display: flex; align-items: center; justify-content: center; font-size: 2.5rem;">
                            👤
                        </div>
                        <div style="flex: 1;">
                            <h2 style="margin: 0 0 0.5rem 0; color: white;">${u.firstName} ${u.lastName}</h2>
                            <div style="display: flex; gap: 1.5rem; flex-wrap: wrap; font-size: 0.9rem; opacity: 0.95;">
                                <span>📚 ${u.grade?`${u.grade}${u.className||""}`:"N/A"} ${e==="uz"?"sinf":"класс"}</span>
                                <span>👨‍🎓 ${u.username}</span>
                            </div>
                        </div>
                    </div>
                </div>
                
                <!-- Overall Statistics Cards -->
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem;">
                    <div class="card" style="text-align: center; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white;">
                        <div style="font-size: 2.5rem; margin-bottom: 0.5rem;">📝</div>
                        <div style="font-size: 2rem; font-weight: bold; margin-bottom: 0.25rem;">${z}</div>
                        <div style="opacity: 0.9;">${e==="uz"?"Jami testlar":"Всего тестов"}</div>
                    </div>
                    
                    <div class="card" style="text-align: center; background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%); color: white;">
                        <div style="font-size: 2.5rem; margin-bottom: 0.5rem;">📊</div>
                        <div style="font-size: 2rem; font-weight: bold; margin-bottom: 0.25rem;">${S}%</div>
                        <div style="opacity: 0.9;">${e==="uz"?"O'rtacha ball":"Средний балл"}</div>
                    </div>
                    
                    <div class="card" style="text-align: center; background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%); color: white;">
                        <div style="font-size: 2.5rem; margin-bottom: 0.5rem;">🏆</div>
                        <div style="font-size: 2rem; font-weight: bold; margin-bottom: 0.25rem;">${$}%</div>
                        <div style="opacity: 0.9;">${e==="uz"?"Eng yaxshi natija":"Лучший результат"}</div>
                    </div>
                    ${C}
                </div>

                <div class="card" style="margin-top: 0.25rem;">
                    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem;">
                        <h3 style="margin: 0;">${e==="uz"?"Fanlar bo'yicha o'rtacha natijalar":"Средние результаты по предметам"}</h3>
                    </div>
                    <div style="position: relative; min-height: 260px;">
                        <div id="studentSubjectTrendEmpty" class="card" style="padding: 1rem; text-align: center; color: var(--text-secondary);">
                            ${e==="uz"?"Ma'lumotlar mavjud emas":"Нет данных"}
                        </div>
                        <canvas id="studentSubjectTrendChart" style="max-height: 300px; width: 100%; display: none;"></canvas>
                    </div>
                </div>
                
                <!-- Interest Test Results Section -->
                ${w?`
                <div class="card" style="background: linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.05) 100%); border: 2px solid rgba(102, 126, 234, 0.3); border-radius: 16px; overflow: hidden;">
                    <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 1rem;">
                        <h3 style="margin: 0; display: flex; align-items: center; gap: 0.75rem;">
                            <span style="font-size: 1.8rem;">🧭</span>
                            <span>${e==="uz"?"Qiziqishlaringiz profili":"Профиль интересов"}</span>
                        </h3>
                        ${w.completedAt?`
                            <div style="font-size: 0.85rem; color: var(--text-muted); text-align: right;">
                                <div>${e==="uz"?"Oxirgi test":"Последний тест"}:</div>
                                <div style="font-weight: 600;">${new Date(w.completedAt).toLocaleDateString("ru-RU",{day:"numeric",month:"short",year:"numeric"})}</div>
                            </div>
                        `:""}
                    </div>
                    <p style="color: var(--text-muted); margin-bottom: 1.5rem; font-size: 0.95rem;">
                        ${e==="uz"?"Test natijalariga asoslangan qiziqishlaringiz tahlili":"Анализ ваших интересов на основе результатов теста"}
                    </p>
                    
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem; margin-bottom: 1.5rem;">
                        ${Object.entries(w.categories).sort((M,j)=>j[1]-M[1]).slice(0,3).map(([M,j])=>{const N={math:{uz:"Matematika",ru:"Математика",icon:"🔢"},science:{uz:"Fan",ru:"Наука",icon:"🔬"},tech:{uz:"Texnologiya",ru:"Технологии",icon:"💻"},art:{uz:"San'at",ru:"Искусство",icon:"🎨"},social:{uz:"Ijtimoiy",ru:"Социальные",icon:"👥"},language:{uz:"Til",ru:"Языки",icon:"📚"}}[M]||{uz:M,ru:M,icon:"📊"},et=Math.round(j);return`
                                <div class="card" style="text-align: center; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; border: 2px solid rgba(102, 126, 234, 0.5); position: relative; overflow: hidden;">
                                    <div style="position: absolute; top: 8px; right: 8px; font-size: 1.2rem;">⭐</div>
                                    <div style="font-size: 2.5rem; margin-bottom: 0.5rem;">${N.icon}</div>
                                    <div style="font-size: 1.5rem; font-weight: bold; margin-bottom: 0.25rem;">${et}%</div>
                                    <div style="opacity: 0.95; font-size: 0.9rem;">${e==="uz"?N.uz:N.ru}</div>
                                </div>
                            `}).join("")}
                    </div>
                    
                    <div style="display: flex; justify-content: center; gap: 1rem; flex-wrap: wrap;">
                        <button class="button button-secondary" id="btnViewInterestTest" style="display: inline-flex; align-items: center; gap: 0.5rem;">
                            <span>📊</span>
                            <span>${e==="uz"?"Batafsil natijalarni ko'rish":"Посмотреть подробные результаты"}</span>
                        </button>
                        <button class="button button-primary" id="btnRetakeInterestTest" style="display: inline-flex; align-items: center; gap: 0.5rem;">
                            <span>🔄</span>
                            <span>${e==="uz"?"Testni qayta topshirish":"Пройти тест заново"}</span>
                        </button>
                    </div>
                </div>
                
                <!-- Subject Recommendations based on interests -->
                <div class="card" style="background: linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.05) 100%); border: 2px solid rgba(102, 126, 234, 0.3); border-radius: 16px; overflow: hidden;">
                    <h2 style="margin-bottom: 1rem; display: flex; align-items: center; gap: 0.75rem;">
                        <span style="font-size: 2rem;">🎓</span>
                        <span>${e==="uz"?"Tavsiya etiladigan fanlar":"Рекомендуемые предметы"}</span>
                    </h2>
                    <p style="color: var(--text-muted); margin-bottom: 1.5rem; font-size: 0.95rem;">
                        ${e==="uz"?"Sizning qiziqishlaringizga mos keladigan fanlar":"Предметы, соответствующие вашим интересам"}
                    </p>
                    
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 1rem;">
                        ${Object.entries(w.categories).sort((M,j)=>j[1]-M[1]).slice(0,3).flatMap(([M,j])=>{const q=x[M];return q?q.subjects.map(N=>({subject:N,score:j,category:M})):[]}).slice(0,3).map(({subject:M,score:j})=>`
                            <div class="subject-recommendation-card" style="background: var(--bg-secondary); border: 2px solid rgba(102, 126, 234, 0.2); border-radius: 12px; padding: 1.5rem; transition: all 0.3s ease;">
                                <div style="display: flex; align-items: center; gap: 1rem; margin-bottom: 1rem;">
                                    <div style="font-size: 2.5rem; width: 60px; height: 60px; display: flex; align-items: center; justify-content: center; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); border-radius: 12px;">
                                        ${M.icon}
                                    </div>
                                    <div style="flex: 1;">
                                        <h3 style="margin: 0 0 0.25rem 0; font-size: 1.1rem;">${M.name}</h3>
                                        <div style="color: var(--primary); font-weight: bold;">${Math.round(j)}% ${e==="uz"?"mos":"соответствие"}</div>
                                    </div>
                                </div>
                                <p style="color: var(--text-muted); margin: 0; font-size: 0.9rem; line-height: 1.5;">
                                    ${M.reason}
                                </p>
                            </div>
                        `).join("")}
                    </div>
                </div>
                `:`
                <div class="card" style="background: linear-gradient(135deg, rgba(102, 126, 234, 0.05) 0%, rgba(118, 75, 162, 0.03) 100%); border: 2px dashed rgba(102, 126, 234, 0.3); text-align: center; padding: 2rem;">
                    <div style="font-size: 3rem; margin-bottom: 1rem; opacity: 0.4;">🧭</div>
                    <h3 style="margin-bottom: 0.75rem;">${e==="uz"?"Qiziqishlaringizni aniqlang":"Определите ваши интересы"}</h3>
                    <p style="color: var(--text-muted); margin-bottom: 1.5rem; font-size: 0.95rem;">
                        ${e==="uz"?"Test sizning qiziqishlaringizni aniqlash va mos fanlarni tavsiya qilishga yordam beradi":"Тест поможет определить ваши интересы и порекомендует подходящие предметы"}
                    </p>
                    <button class="button button-primary" id="btnStartInterestTest" style="display: inline-flex; align-items: center; gap: 0.5rem;">
                        <span>🚀</span>
                        <span>${e==="uz"?"Testni boshlash":"Начать тест"}</span>
                    </button>
                </div>
                `}
                
                ${z>0?`
                <!-- Subject Selector -->
                <div class="card">
                    <h3 style="margin-bottom: 1rem;">
                        <span style="font-size: 1.5rem; margin-right: 0.5rem;">📚</span>
                        ${e==="uz"?"Fan bo'yicha natijalarni ko'rish":"Просмотр результатов по предмету"}
                    </h3>
                    <p style="color: var(--text-muted); margin-bottom: 1rem; font-size: 0.9rem;">
                        ${e==="uz"?"Quyidagi ro'yxatdan fanni tanlab, o'sha fan bo'yicha batafsil natijalaringizni ko'ring":"Выберите предмет из списка ниже, чтобы увидеть подробные результаты по нему"}
                    </p>
                    <select id="subjectSelector" class="form-input">
                        <option value="" selected disabled>${e==="uz"?"Fanni tanlang...":"Выберите предмет..."}</option>
                        ${h.filter(M=>y[M._id||M.id]).map(M=>`
                            <option value="${M._id||M.id}">${M.name} (${y[M._id||M.id].length} ${e==="uz"?"ta test":"тестов"})</option>
                        `).join("")}
                    </select>
                </div>
                
                <!-- Statistics for Selected Subject -->
                <div id="subjectStats" style="display: none;">
                </div>
                `:`
                <div class="card" style="text-align: center; padding: 3rem;">
                    <div style="font-size: 4rem; margin-bottom: 1rem; opacity: 0.3;">📊</div>
                    <h3 style="color: var(--text-muted);">${e==="uz"?"Hali testlar topshirilmagan":"Тесты еще не пройдены"}</h3>
                    <p style="color: var(--text-muted); margin-top: 0.5rem;">${e==="uz"?"Testlarni boshlang va natijalaringizni bu yerda ko'ring":"Пройдите тесты и увидите свои результаты здесь"}</p>
                    <button class="button button-primary" id="btnGoToSubjects" style="margin-top: 1rem;">
                        ${e==="uz"?"Testlarni boshlash":"Начать тесты"}
                    </button>
                </div>
                `}
            </div>
        `;const B=Object.keys(y).map(M=>{const j=h.find(q=>(q._id||q.id)===M);return{subjectId:M,subjectName:(j==null?void 0:j.name)||M,data:(y[M]||[]).map(q=>q.score)}}),P=Ai({series:B},e==="uz"?"O'rtacha ball":"Средний балл",{subjectList:h,includeAllSubjects:!0});if(Zt("studentSubjectTrendChart","studentSubjectTrendEmpty",P),z>0){const M=async q=>{var Ps;const N=document.getElementById("subjectStats");if(!q||q===""){N.style.display="none";return}const et=y[q]||[];if(et.length===0){N.style.display="block",N.innerHTML=`
                        <div class="card" style="text-align: center; padding: 2rem;">
                            <p style="color: var(--text-muted);">${e==="uz"?"Bu fan bo'yicha natijalar yo'q":"Нет результатов по этому предмету"}</p>
                        </div>
                    `;return}const ft=et.length,st=Math.round(et.reduce((ht,Wt)=>ht+Wt.score,0)/ft),Y=h.find(ht=>ht._id===q),rt=Y?Y.name:"",ut=await A(`/api/subjects/${q}/modules`),bt=ut.success?((Ps=ut.data)==null?void 0:Ps.data)||ut.data||[]:[],jt=new Map(bt.map(ht=>[ht._id,ht.name])),_t={};et.forEach(ht=>{const Wt=p.get(ht.testId),oe=(Wt==null?void 0:Wt.moduleId)||"unknown";_t[oe]||(_t[oe]={scores:[],label:jt.get(oe)||(e==="uz"?"Mavzu":"Тема")}),_t[oe].scores.push(ht.score)});const re=Object.values(_t).map(ht=>ht.label),ji=Object.values(_t).map(ht=>{const Wt=ht.scores.reduce((oe,wr)=>oe+wr,0)/ht.scores.length;return Math.round(Wt*10)/10});N.style.display="block",N.innerHTML=`
                    <div class="card" style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; margin-bottom: 1rem;">
                        <h2 style="margin: 0; font-size: 1.5rem; display: flex; align-items: center; gap: 0.75rem;">
                            <span style="font-size: 2rem;">📖</span>
                            <span>${rt}</span>
                        </h2>
                    </div>
                    
                    <div style="display: grid; gap: 1rem; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); margin-bottom: 1.5rem;">
                        <div class="card" style="text-align: center; background: linear-gradient(135deg, #10b981 0%, #059669 100%); color: white;">
                            <div style="font-size: 2rem; margin-bottom: 0.5rem;">📝</div>
                            <div style="font-size: 1.75rem; font-weight: bold; margin-bottom: 0.25rem;">${ft}</div>
                            <div style="opacity: 0.9; font-size: 0.9rem;">${e==="uz"?"Topshirilgan":"Пройдено"}</div>
                        </div>
                        
                        <div class="card" style="text-align: center; background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%); color: white;">
                            <div style="font-size: 2rem; margin-bottom: 0.5rem;">📊</div>
                            <div style="font-size: 1.75rem; font-weight: bold; margin-bottom: 0.25rem;">${st}%</div>
                            <div style="opacity: 0.9; font-size: 0.9rem;">${e==="uz"?"O'rtacha":"Средний"}</div>
                        </div>
                        
                    </div>
                    
                    <div class="card">
                        <h3 style="margin-bottom: 1rem;">
                            <span style="font-size: 1.25rem; margin-right: 0.5rem;">📈</span>
                            ${e==="uz"?"Modullar bo'yicha natijalar":"Результаты по модулям"}
                        </h3>
                        <div style="position: relative; min-height: 260px;">
                            <canvas id="subjectModuleChart" style="max-height: 300px; width: 100%;"></canvas>
                        </div>
                    </div>
                `,zi("subjectModuleChart",null,{labels:re,series:[{label:e==="uz"?"O'rtacha ball":"Средний балл",data:ji}]})},j=document.getElementById("subjectSelector");j&&j.addEventListener("change",async q=>{await M(q.target.value)})}else{const M=document.getElementById("btnGoToSubjects");M&&M.addEventListener("click",()=>{_.navigate("/student/subjects")})}const R=document.getElementById("btnViewInterestTest");R&&R.addEventListener("click",()=>{_.navigate("/student/interest-test")});const U=document.getElementById("btnRetakeInterestTest");U&&U.addEventListener("click",()=>{_.navigate("/student/interest-test")});const I=document.getElementById("btnStartInterestTest");I&&I.addEventListener("click",()=>{_.navigate("/student/interest-test")})}catch(r){console.error("❌ Error loading profile:",r),console.error("Error details:",r.message,r.stack),s.innerHTML=`
            <div class="card" style="text-align: center; padding: 3rem;">
                <p style="color: #ef4444;">${e==="uz"?"Profilni yuklashda xato":"Ошибка при загрузке профиля"}</p>
                <p style="color: var(--text-muted); font-size: 0.9rem; margin-top: 0.5rem;">${r.message||""}</p>
                <button class="button button-secondary" id="btnBackToDashboard" style="margin-top: 1rem;">
                    ${e==="uz"?"Orqaga":"Назад"}
                </button>
            </div>
        `,(a=document.getElementById("btnBackToDashboard"))==null||a.addEventListener("click",()=>{_.navigate("/student/dashboard")})}}function ur(){var i,s,n,a;const e=k.getState().user;if(!e){_.navigate("/login");return}const t=`
        <div class="student-dashboard">
            <header class="page-header">
                <h1>${E("dashboard")}</h1>
                <p>${e.firstName} ${e.lastName} ${e.grade?"• "+e.grade+" "+E("grade"):""}</p>
            </header>

            <div class="info-section" style="margin-bottom: 3rem;">
                <div class="card">
                    <h3>👤 ${E("myProfile")}</h3>
                    <div class="info-grid">
                        <div class="info-item">
                            <span class="info-label">${E("firstName")}</span>
                            <span class="info-value">${e.firstName}</span>
                        </div>
                        <div class="info-item">
                            <span class="info-label">${E("lastName")}</span>
                            <span class="info-value">${e.lastName}</span>
                        </div>
                        <div class="info-item">
                            <span class="info-label">${E("grade")}</span>
                            <span class="info-value" style="color: var(--text-primary); font-weight: 700; font-size: 1.1rem;">${e.grade||"N/A"}</span>
                        </div>
                    </div>
                </div>
            </div>

            <div style="margin-bottom: 1.5rem;">
                <h2 style="color: var(--text-primary); font-size: 1.5rem; font-weight: 600; margin: 0;">
                    ${k.getState().language==="uz"?"📝 Mavjud testlar":"📝 Доступные тесты"}
                </h2>
            </div>

            <div class="dashboard-cards">
                <div class="dashboard-card" style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);" id="btnStudentProfile">
                    <div class="card-icon">📊</div>
                    <div class="card-content">
                        <h3>${k.getState().language==="uz"?"Profil va Statistika":"Профиль и Статистика"}</h3>
                        <p>${k.getState().language==="uz"?"Natijalaringizni ko'ring":"Посмотрите свои результаты"}</p>
                    </div>
                    <div class="card-arrow">→</div>
                </div>

                <div class="dashboard-card card-primary" id="btnSubjectTests">
                    <div class="card-icon">📚</div>
                    <div class="card-content">
                        <h3>${E("subjectTests")}</h3>
                        <p>${k.getState().language==="uz"?"Fanlar bo'yicha bilimingizni tekshiring":"Проверьте свои знания по предметам"}</p>
                    </div>
                    <div class="card-arrow">→</div>
                </div>

                <div class="dashboard-card card-secondary" id="btnInterestTest">
                    <div class="card-icon">🎯</div>
                    <div class="card-content">
                        <h3>${E("interestTest")}</h3>
                        <p>${k.getState().language==="uz"?"O'z qobiliyatingizni aniqlang":"Определите свои способности"}</p>
                    </div>
                    <div class="card-arrow">→</div>
                </div>

                <div class="dashboard-card card-tertiary" id="btnControlTests">
                    <div class="card-icon">✏️</div>
                    <div class="card-content">
                        <h3>${E("controlTests")}</h3>
                        <p>${k.getState().language==="uz"?"O'qituvchining nazorat isbotlarini bajaring":"Выполните контрольные работы"}</p>
                    </div>
                    <div class="card-arrow">→</div>
                </div>
            </div>
        </div>
    `;F(t,"student"),console.log("📍 Adding event listeners to dashboard cards"),(i=document.getElementById("btnSubjectTests"))==null||i.addEventListener("click",()=>{console.log("📚 Subject Tests button clicked"),_.navigate("/student/subjects")}),(s=document.getElementById("btnInterestTest"))==null||s.addEventListener("click",()=>{console.log("🎯 Interest Test button clicked"),_.navigate("/student/interest-test")}),(n=document.getElementById("btnControlTests"))==null||n.addEventListener("click",()=>{console.log("✏️ Control Tests button clicked"),_.navigate("/student/control-tests")}),(a=document.getElementById("btnStudentProfile"))==null||a.addEventListener("click",()=>{console.log("📊 Student Profile button clicked"),_.navigate("/student/profile")})}async function Wu(){var s;const e=k.getState().language,t=`
        <div class="page-header">
            <div class="page-header-title">
                <h1>${E("subjectTests")}</h1>
                <p class="page-header-subtitle">${e==="uz"?"Bilimingizni sinab ko'ring":"Проверьте свои знания"}</p>
            </div>
            <div class="page-header-actions">
                <button class="back-button back-button--compact" id="btnBackFromSubjects">
                    <span>←</span>
                    <span>${e==="uz"?"Orqaga":"Назад"}</span>
                </button>
            </div>
        </div>
        
        <div id="subjectsContainer">
            <div class="loading">
                <div class="spinner"></div>
            </div>
        </div>
    `;F(t,"student"),(s=document.getElementById("btnBackFromSubjects"))==null||s.addEventListener("click",()=>{_.navigate("/student/dashboard")});const i=await A("/api/subjects");if(i.success&&i.data&&i.data.length>0){const n=document.getElementById("subjectsContainer");n.innerHTML=`
            <div class="subjects-grid">
                ${i.data.map(a=>`
                    <div class="subject-card" data-subject-id="${a.id}">
                        <div class="subject-header">
                            <div class="subject-icon">${hr(a.name)}</div>
                            <h3>${a.name}</h3>
                        </div>
                        <div class="subject-info">
                            <p>${k.getState().language==="uz"?"Savollar":"Вопросов"}: ${a.questionsCount||10}</p>
                            <p>${k.getState().language==="uz"?"Vaqt":"Время"}: 30 ${k.getState().language==="uz"?"daqiqa":"минут"}</p>
                        </div>
                        <button class="btn-secondary btn-start-test" data-subject-id="${a.id}">
                            ${k.getState().language==="uz"?"Testni boshlash":"Начать тест"}
                        </button>
                    </div>
                `).join("")}
            </div>
        `,console.log("📍 Adding event listeners to start test buttons"),document.querySelectorAll(".btn-start-test").forEach(a=>{a.addEventListener("click",function(){const r=this.getAttribute("data-subject-id");console.log("📚 Start test button clicked for subject:",r),Uu(r)})})}else{const n=document.getElementById("subjectsContainer");n.innerHTML=`<p style="text-align: center; color: var(--text-muted);">${k.getState().language==="uz"?"Fanlar topilmadi":"Предметы не найдены"}</p>`}}function hr(e){return{Mathematics:"🔢",Matematika:"🔢",Математика:"🔢",Physics:"⚛️",Fizika:"⚛️",Физика:"⚛️",Chemistry:"🧪",Kimyo:"🧪",Химия:"🧪",Biology:"🧬",Biologiya:"🧬",Биология:"🧬",History:"📜",Tarix:"📜",История:"📜",Literature:"📚",Adabiyot:"📚",Литература:"📚",English:"🔤","Ingliz tili":"🔤",Английский:"🔤",Geography:"🌍",Geografiya:"🌍",География:"🌍"}[e]||"📖"}async function Uu(e){_.navigate(`/student/subject-modules/${e}`)}async function Yu(){var a;const e=window.location.pathname.split("/").pop(),t=k.getState().language;console.log("📖 renderStudentSubjectModules called with subjectId:",e),F(`
        <div class="page-header">
            <div style="display: flex; justify-content: space-between; align-items: center;">
                <div>
                    <h1 id="subjectName">${t==="uz"?"Yuklanmoqda...":"Загрузка..."}</h1>
                    <p>${t==="uz"?"Modullar va testlar":"Модули и тесты"}</p>
                </div>
                <button class="button button-secondary" id="btnBackToSubjects">
                    ${t==="uz"?"← Orqaga":"← Назад"}
                </button>
            </div>
        </div>
        
        <div id="modulesContainer">
            <div class="loading">
                <div class="spinner"></div>
            </div>
        </div>
    `,"student"),console.log("📍 Adding event listener to back button"),(a=document.getElementById("btnBackToSubjects"))==null||a.addEventListener("click",()=>{console.log("⬅️ Back to subjects button clicked"),_.navigate("/student/subjects")});const s=await A("/api/subjects");if(s.success){const r=s.data.find(o=>o._id===e);r&&(document.getElementById("subjectName").textContent=r.name)}console.log("📦 Loading modules for subject:",e);const n=await A(`/api/subjects/${e}/modules`);if(console.log("📦 Modules result:",n),console.log("📦 Data:",n.data),console.log("📦 Data length:",n.data?n.data.length:"undefined"),console.log("📦 Success:",n.success),n.success&&n.data&&n.data.length>0){const r=document.getElementById("modulesContainer"),o=await A("/api/test-results"),l=o.success?o.data:[];console.log("======================"),console.log("📊 ЗАГРУЖЕННЫЕ РЕЗУЛЬТАТЫ:"),console.log("📊 Всего результатов:",l.length),l.forEach((u,h)=>{console.log(`  ${h+1}. TestId: ${u.testId}, Score: ${u.score}%, Correct: ${u.correctCount}/${u.totalCount}, Date: ${u.completedAt}`)}),console.log("======================");const d={};l.forEach(u=>{const h=u.testId,g=new Date(u.completedAt).getTime();if(!d[h])d[h]=u,console.log(`✨ First result for test ${h}: ${u.correctCount}/${u.totalCount} (${u.score}%) - ${u.completedAt}`);else{const m=new Date(d[h].completedAt).getTime();console.log(`🔍 Comparing for test ${h}:`),console.log(`   Existing: ${d[h].correctCount}/${d[h].totalCount} (${d[h].score}%) - ${d[h].completedAt}`),console.log(`   New: ${u.correctCount}/${u.totalCount} (${u.score}%) - ${u.completedAt}`),g>m?(console.log("   ✅ New result is NEWER - using it!"),d[h]=u):console.log("   ❌ Existing result is newer - keeping it")}}),console.log("📊 ПОСЛЕДНИЕ РЕЗУЛЬТАТЫ ПО ТЕСТАМ:"),Object.keys(d).forEach(u=>{const h=d[u];console.log(`  TestId: ${u} → ${h.correctCount}/${h.totalCount} (${h.score}%) - Date: ${h.completedAt}`)}),console.log("======================");const c=await Promise.all(n.data.map(async u=>{const h=await A(`/api/modules/${u._id}/tests`),g=h.success?h.data.filter(m=>m.status==="published"):[];return{...u,tests:g}}));r.innerHTML=c.map(u=>`
            <div class="card" style="margin-bottom: 2rem;">
                <h3 style="margin-bottom: 0.5rem;">${u.name}</h3>
                <p style="color: var(--text-muted); margin-bottom: 1.5rem;">${u.description}</p>
                
                ${u.tests.length>0?`
                    <div style="display: grid; gap: 1rem;">
                        ${u.tests.map(h=>{const g=d[h._id];if(!(g!=null))return`
                                    <div class="card" style="background: var(--bg-tertiary); transition: all 0.3s ease;">
                                        <h4 style="margin-bottom: 0.5rem;">${h.name}</h4>
                                        <div style="display: flex; gap: 1rem; margin-bottom: 1rem; font-size: 0.875rem; color: var(--text-muted);">
                                            ${h.duration?`<span>⏱️ ${h.duration} ${t==="uz"?"daqiqa":"мин"}</span>`:""}
                                            <span>📝 ${h.questionsCount||0} ${t==="uz"?"savol":"вопросов"}</span>
                                        </div>
                                        <button class="button button-primary btn-start-student-test" data-test-id="${h._id}" style="width: 100%;">
                                            ${t==="uz"?"▶️ Boshlash":"▶️ Начать тест"}
                                        </button>
                                    </div>
                                `;const p=g.correctCount||0,f=g.totalCount||h.questionsCount||0,b=g.score||0;let v,w,y,x;return b>=80?(v="#10b981",w=t==="uz"?"A'lo":"Отлично",y="⭐",x="linear-gradient(135deg, #10b981, #059669)"):b>=50?(v="#f59e0b",w=t==="uz"?"Yaxshi":"Хорошо",y="👍",x="linear-gradient(135deg, #f59e0b, #d97706)"):(v="#ef4444",w=t==="uz"?"Qayta urining":"Попробуйте ещё",y="💪",x="linear-gradient(135deg, #ef4444, #dc2626)"),`
                                <div class="card" style="
                                    background: var(--bg-tertiary); 
                                    border-left: 5px solid ${v};
                                    position: relative;
                                    transition: all 0.3s ease;
                                ">
                                    <!-- Бейдж результата -->
                                    <div style="
                                        position: absolute;
                                        top: 1rem;
                                        right: 1rem;
                                        background: ${x};
                                        color: white;
                                        padding: 0.4rem 0.9rem;
                                        border-radius: 20px;
                                        font-size: 0.8rem;
                                        font-weight: 600;
                                        display: flex;
                                        align-items: center;
                                        gap: 0.4rem;
                                        box-shadow: 0 2px 8px rgba(0,0,0,0.15);
                                    ">
                                        <span>${y}</span>
                                        <span>${w}</span>
                                    </div>
                                    
                                    <!-- Название теста -->
                                    <h4 style="margin-bottom: 0.5rem; padding-right: 130px;">
                                        ${h.name}
                                    </h4>
                                    
                                    <!-- Метаданные теста -->
                                    <div style="display: flex; gap: 1rem; margin-bottom: 1rem; font-size: 0.875rem; color: var(--text-muted);">
                                        ${h.duration?`<span>⏱️ ${h.duration} ${t==="uz"?"daqiqa":"мин"}</span>`:""}
                                        <span>📝 ${h.questionsCount||0} ${t==="uz"?"savol":"вопросов"}</span>
                                    </div>
                                    
                                    <!-- Результаты -->
                                    <div style="
                                        background: rgba(0,0,0,0.2);
                                        border-radius: 10px;
                                        padding: 1rem;
                                        margin-bottom: 1rem;
                                        display: flex;
                                        justify-content: space-around;
                                        align-items: center;
                                        gap: 1rem;
                                        flex-wrap: wrap;
                                    ">
                                        <!-- Правильные ответы -->
                                        <div style="text-align: center; flex: 1; min-width: 100px;">
                                            <div style="
                                                font-size: 0.7rem;
                                                text-transform: uppercase;
                                                letter-spacing: 0.5px;
                                                color: var(--text-muted);
                                                margin-bottom: 0.3rem;
                                            ">
                                                ${t==="uz"?"Natija":"Результат"}
                                            </div>
                                            <div style="
                                                font-size: 1.6rem;
                                                font-weight: 700;
                                                color: ${v};
                                                line-height: 1;
                                            ">
                                                ${p}/${f}
                                            </div>
                                        </div>
                                        
                                        <!-- Разделитель -->
                                        <div style="
                                            width: 2px;
                                            height: 45px;
                                            background: rgba(255,255,255,0.1);
                                        "></div>
                                        
                                        <!-- Процент -->
                                        <div style="text-align: center; flex: 1; min-width: 100px;">
                                            <div style="
                                                font-size: 0.7rem;
                                                text-transform: uppercase;
                                                letter-spacing: 0.5px;
                                                color: var(--text-muted);
                                                margin-bottom: 0.3rem;
                                            ">
                                                ${t==="uz"?"Foiz":"Процент"}
                                            </div>
                                            <div style="
                                                font-size: 1.6rem;
                                                font-weight: 700;
                                                color: ${v};
                                                line-height: 1;
                                            ">
                                                ${b}%
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <!-- Кнопка повторного прохождения -->
                                    <button class="button button-secondary btn-start-student-test" data-test-id="${h._id}" style="width: 100%;">
                                        ${t==="uz"?"🔄 Qayta topshirish":"🔄 Пройти снова"}
                                    </button>
                                </div>
                            `}).join("")}
                    </div>
                `:`
                    <p style="text-align: center; color: var(--text-muted); padding: 2rem;">
                        ${t==="uz"?"Bu modulda hali testlar mavjud emas":"В этом модуле пока нет тестов"}
                    </p>
                `}
            </div>
        `).join(""),console.log("📍 Adding event listeners to start test buttons"),document.querySelectorAll(".btn-start-student-test").forEach(u=>{u.addEventListener("click",function(){const h=this.getAttribute("data-test-id");console.log("📝 Start test button clicked:",h),_.navigate(`/student/take-test/${h}`)})})}else console.log("❌ No modules found or error. Success:",n.success,"Data:",n.data),document.getElementById("modulesContainer").innerHTML=`
            <div class="card">
                <p style="text-align: center; color: var(--text-muted);">
                    ${t==="uz"?"Bu fanda hali modullar mavjud emas":"В этом предмете пока нет модулей"}
                </p>
            </div>
        `}async function Xu(){var a,r;const e=window.location.pathname.split("/").pop(),t=k.getState().language;console.log("📖 renderTestTaker called with testId:",e),F(`
        <div class="page-header">
            <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 1rem;">
                <div>
                    <h1 id="testName">${t==="uz"?"Yuklanmoqda...":"Загрузка..."}</h1>
                    <p id="testInfo">${t==="uz"?"Test vaqti":"Время прохождения теста"}</p>
                </div>
                <button class="button button-secondary" id="btnBackToModules">
                    ${t==="uz"?"← Orqaga":"← Назад"}
                </button>
            </div>
        </div>
        
        <div id="testTimer" style="display: none; position: sticky; top: 0; z-index: 100; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 1rem; margin: -2rem -2rem 2rem -2rem; text-align: center; box-shadow: 0 4px 20px rgba(102, 126, 234, 0.3);">
            <div style="display: flex; align-items: center; justify-content: center; gap: 1rem;">
                <div style="font-size: 0.9rem; color: rgba(255,255,255,0.9); font-weight: 600; letter-spacing: 1px;">⏱️ ${t==="uz"?"QOLGAN VAQT":"ОСТАЛОСЬ"}</div>
                <div id="timerDisplay" style="font-size: 2.5rem; font-weight: bold; color: white; font-family: 'Courier New', monospace; letter-spacing: 4px; min-width: 120px; text-shadow: 0 2px 8px rgba(0,0,0,0.3);">00:00</div>
            </div>
        </div>
        
        <div id="testContainer">
            <div class="loading">
                <div class="spinner"></div>
            </div>
        </div>
    `,"student");const s=document.getElementById("testContainer");(a=document.getElementById("btnBackToModules"))==null||a.addEventListener("click",()=>{console.log("⬅️ Back to modules button clicked"),window._testTimerInterval&&(clearInterval(window._testTimerInterval),window._testTimerInterval=null,console.log("🧹 Timer cleared")),history.back()}),console.log("📚 Loading test:",e);const n=await A(`/api/tests/${e}`);if(console.log("📝 Test result:",n),n.success&&n.data){const o=n.data;document.getElementById("testName").textContent=o.name;const l=o.questions||[];console.log("📊 Test has",l.length,"questions");const d=Qu(l);console.log("🔀 Shuffled questions:",d.length);let c=(o.timeLimit||15)*60,u=Date.now();const h=localStorage.getItem(`test-${e}-progress`);if(h){const f=JSON.parse(h),b=Math.floor((Date.now()-f.startedAt)/1e3);c=Math.max(0,f.timeLimit*60-b),u=f.startedAt,console.log("⏱️ Resumed test from saved progress. Time left:",c,"seconds")}else localStorage.setItem(`test-${e}-progress`,JSON.stringify({testId:e,startedAt:u,timeLimit:o.timeLimit||15})),console.log("⏱️ Started new test");const g=document.getElementById("timerDisplay"),m=document.getElementById("testTimer");if(g&&m){m.style.display="block";const f=setInterval(()=>{var w;c--;const b=Math.floor(c/60);localStorage.setItem(`test-${e}-progress`,JSON.stringify({testId:e,startedAt:u,timeLimit:o.timeLimit||15}));const v=c%60;g.textContent=`${String(b).padStart(2,"0")}:${String(v).padStart(2,"0")}`,c<=300&&c>60&&(m.style.background="linear-gradient(135deg, #f59e0b, #d97706)",g.style.color="white",g.style.animation="none"),c<=60&&(m.style.background="linear-gradient(135deg, #dc2626, #991b1b)",g.style.color="white",g.style.animation="pulse 1s ease-in-out infinite"),c<=0&&(clearInterval(f),console.log("⏰ Time is up!"),(w=document.getElementById("testForm"))==null||w.dispatchEvent(new Event("submit")))},1e3);window._testTimerInterval=f}let p=`
            <div class="card" style="margin-bottom: 2rem;">
                <div style="display: flex; gap: 1.5rem; font-size: 0.875rem; color: var(--text-muted); margin-bottom: 2rem; flex-wrap: wrap;">
                    ${o.timeLimit?`<span>⏱️ ${o.timeLimit} ${t==="uz"?"min":"мин"}</span>`:""}
                    <span>📝 ${l.length} ${t==="uz"?"savol":"вопросов"}</span>
                    <span>🎯 ${o.maxScore} ${t==="uz"?"ball":"баллов"}</span>
                </div>
                
                <form id="testForm" style="display: grid; gap: 2rem;">
        `;d.forEach((f,b)=>{const v=t==="uz"?f.questionUz:f.questionRu,w=f.answers||[];p+=`
                <div style="padding: 1.5rem; background: var(--bg-primary); border-radius: 10px; border: 2px solid var(--border-color);">
                    <h3 style="margin-top: 0; color: var(--text-primary); margin-bottom: 1rem;">
                        ${b+1}. ${v}
                    </h3>
                    
                    <div style="display: grid; gap: 1rem;">
            `,w.forEach((y,x)=>{const z=t==="uz"?y.textUz:y.textRu,S=`q${b}_a${x}`;p+=`
                    <label style="display: flex; align-items: center; gap: 0.75rem; padding: 0.75rem; background: var(--bg-secondary); border-radius: 8px; cursor: pointer; transition: all 0.2s;">
                        <input type="radio" id="${S}" name="question_${b}" value="${y.originalIndex}" data-question-idx="${b}" style="cursor: pointer; width: 18px; height: 18px;">
                        <span style="flex: 1; color: var(--text-primary);">${z}</span>
                    </label>
                `}),p+=`
                    </div>
                </div>
            `}),p+=`
                    <button type="submit" class="button button-primary" style="width: 100%; padding: 1rem; font-size: 1rem;">
                        ${t==="uz"?"Testni tugatish":"Завершить тест"}
                    </button>
                </form>
            </div>
        `,s.innerHTML=p,(r=document.getElementById("testForm"))==null||r.addEventListener("submit",async f=>{f.preventDefault(),window._testTimerInterval&&clearInterval(window._testTimerInterval),localStorage.removeItem(`test-${e}-progress`),console.log("✅ Test form submitted");const b={};d.forEach((x,z)=>{const S=document.querySelector(`input[name="question_${z}"]:checked`);if(S){const $=parseInt(S.value);b[z]=$,console.log(`Q${z}: selected answer ${$}`)}});const v=Math.round((Date.now()-u)/1e3);console.log("📊 Collected answers object:",b),console.log("⏱️ Time taken:",v,"seconds");const w=d.map((x,z)=>b[z]!==void 0?b[z]:null);console.log("📊 Converted to array:",w),console.log("📤 Submitting to API...");const y=await A(`/api/tests/${e}/submit`,{method:"POST",body:JSON.stringify({answers:w,timeTaken:v})});if(console.log("📥 API Response:",y),y.success&&y.data){const x=y.data;console.log("🎯 Test result received:",x),console.log("🔍 Result keys:",Object.keys(x)),console.log("🔍 questionResults exists?",x.questionResults!==void 0),console.log("🔍 questionResults:",x.questionResults),gr(x)}else console.error("❌ Submit failed:",y),s.innerHTML=`
                    <div class="card">
                        <p style="text-align: center; color: #ef4444;">
                            ${t==="uz"?"Natijani saqlashda xato":"Ошибка при сохранении результата"}
                        </p>
                        <p style="text-align: center; color: #ef4444; font-size: 0.9rem;">
                            ${y.error||(t==="uz"?"Kutilmagan xato":"Неожиданная ошибка")}
                        </p>
                    </div>
                `})}else console.error("❌ Failed to load test:",n),s.innerHTML=`
            <div class="card">
                <p style="text-align: center; color: var(--text-muted);">
                    ${t==="uz"?"Test topilmadi":"Тест не найден"}
                </p>
                <p style="text-align: center; color: #ef4444; font-size: 0.9rem;">
                    ${n.error||"API Error"}
                </p>
            </div>
        `}function Qu(e){return e.map(t=>{const i=t.answers.map((s,n)=>({...s,originalIndex:n}));for(let s=i.length-1;s>0;s--){const n=Math.floor(Math.random()*(s+1));[i[s],i[n]]=[i[n],i[s]]}return{...t,answers:i}})}function gr(e){var c;const t=k.getState().language,i=document.getElementById("testContainer");console.log("🎨 renderTestResults called with:",e);const s=e.data||e;s.score;const n=s.passed||!1,a=s.earnedPoints||0,r=s.totalPoints||0,o=n?"success":"error";let d=`
        <style>
            @keyframes slideIn {
                from { opacity: 0; transform: translateY(20px); }
                to { opacity: 1; transform: translateY(0); }
            }
            @keyframes pulse {
                0%, 100% { transform: scale(1); }
                50% { transform: scale(1.05); }
            }
            .result-card { animation: slideIn 0.6s ease-out; }
            .score-circle { animation: pulse 0.8s ease-in-out infinite; }
        </style>
        
        <div class="result-card" style="text-align: center; padding: 3rem 2rem; margin-bottom: 2rem; background: ${n?"linear-gradient(135deg, #10b981, #059669)":"linear-gradient(135deg, #ef4444, #dc2626)"}; border-radius: 16px; color: white; box-shadow: 0 20px 60px rgba(0,0,0,0.3);">
            <h2 style="margin-top: 0; font-size: 2rem; text-transform: uppercase; letter-spacing: 1px;">
                ${o==="success"?"🎉 ":o==="warning"?"👍 ":"💪 "}
                ${t==="uz"?"Test tugatildi!":"Тест завершён!"}
            </h2>
            <div class="score-circle" style="font-size: 4.5rem; font-weight: 900; margin: 2rem 0; text-shadow: 0 4px 8px rgba(0,0,0,0.2);">
                ${e.correctCount}/${e.totalCount}
            </div>
            <p style="font-size: 1.8rem; font-weight: 700; margin: 1rem 0; text-shadow: 0 2px 4px rgba(0,0,0,0.2);">
                ${percentage}%
            </p>
            <div style="display: flex; gap: 2rem; justify-content: center; margin-top: 2rem; flex-wrap: wrap;">
                <div style="background: rgba(255,255,255,0.2); padding: 1rem 2rem; border-radius: 12px; backdrop-filter: blur(10px);">
                    <div style="font-size: 0.9rem; opacity: 0.9;">⏱️ ${t==="uz"?"Vaqt":"Время"}</div>
                    <div style="font-size: 1.5rem; font-weight: bold;">
                        ${Math.floor(e.timeTaken/60)}:${String(e.timeTaken%60).padStart(2,"0")}
                    </div>
                </div>
                <div style="background: rgba(255,255,255,0.2); padding: 1rem 2rem; border-radius: 12px; backdrop-filter: blur(10px);">
                    <div style="font-size: 0.9rem; opacity: 0.9;">📊 ${t==="uz"?"Baho":"Оценка"}</div>
                    <div style="font-size: 1.5rem; font-weight: bold;">
                        ${o==="success"?"⭐⭐⭐":o==="warning"?"⭐⭐":"⭐"}
                    </div>
                </div>
            </div>
        </div>
        
        <div class="card">
            <h3 style="margin-top: 0; color: var(--text-primary); display: flex; align-items: center; gap: 0.5rem;">
                📋 ${t==="uz"?"Batafsil natija":"Подробные результаты"}
            </h3>
            <div style="display: grid; gap: 1.2rem;">
                <div style="padding: 1.5rem; background: rgba(16, 185, 129, 0.1); border-left: 4px solid #10b981; border-radius: 8px;">
                    <div style="display: flex; align-items: center; gap: 1rem; margin-bottom: 1rem;">
                        <span style="font-size: 1.5rem; color: #10b981; font-weight: bold;">✓</span>
                        <div style="flex: 1;">
                            <p style="margin: 0; color: var(--text-primary); font-weight: 500;">
                                ${t==="uz"?"To'plangan ballar":"Набранные баллы"}: ${a} / ${r}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
                            ${index+1}. ${t==="uz"?qr.questionUz:qr.questionRu}
                        </p>
                    </div>
                </div>
                
                <div style="margin-left: 2.5rem; color: var(--text-muted); font-size: 0.9rem;">
                    <p style="margin: 0.5rem 0;">
                        <strong>${t==="uz"?"Sizning javobingiz":"Ваш ответ"}:</strong> 
                        <span style="color: ${borderColor};">
                            ${qr.userAnswerText?t==="uz"?qr.userAnswerText.textUz:qr.userAnswerText.textRu:t==="uz"?"Javob yo'q":"Нет ответа"}
                        </span>
                    </p>
                </div>
            </div>
        </div>
        
        <div style="display: flex; gap: 1rem; margin-top: 2rem;">
            <button class="button button-primary" id="btnBackFromResults" style="flex: 1;">
                ${t==="uz"?"Modulga qaytish":"Вернуться к модулю"}
            </button>
        </div>
    `;i.innerHTML=d,(c=document.getElementById("btnBackFromResults"))==null||c.addEventListener("click",()=>{e.subjectId?_.navigate(`/student/subject-modules/${e.subjectId}`):_.navigate("/student/subjects")})}async function Ku(){var a;const e=window.location.pathname.split("/").pop(),t=k.getState().language;F(`
        <div class="page-header">
            <div style="display: flex; justify-content: space-between; align-items: center;">
                <h1>${t==="uz"?"Test natijalari":"Результаты теста"}</h1>
                <button class="button button-secondary" id="btnBackToHistory">
                    ${t==="uz"?"← Orqaga":"← Назад"}
                </button>
            </div>
        </div>
        
        <div id="resultContainer">
            <div class="loading">
                <div class="spinner"></div>
            </div>
        </div>
    `,"student"),(a=document.getElementById("btnBackToHistory"))==null||a.addEventListener("click",()=>{_.navigate("/student/test-history")});const s=document.getElementById("resultContainer"),n=await A(`/api/test-results/${e}`);if(n.success&&n.data){const r=n.data;gr(r)}else s.innerHTML=`
            <div class="card">
                <p style="text-align: center; color: #ef4444;">
                    ${t==="uz"?"Natija topilmadi":"Результат не найден"}
                </p>
            </div>
        `}async function Ju(){var n,a;const e=k.getState().language;F(`
        <div class="page-header">
            <div class="page-header-title">
                <h1>${e==="uz"?"Testlar tarixi":"История тестов"}</h1>
                <p class="page-header-subtitle">${e==="uz"?"Barcha tugatilgan testlarning ro'yxati":"Список всех пройденных тестов"}</p>
            </div>
            <div class="page-header-actions">
                <button class="back-button back-button--compact" id="btnBackFromHistory">
                    <span>←</span>
                    <span>${e==="uz"?"Orqaga":"Назад"}</span>
                </button>
            </div>
        </div>
        
        <div id="historyContainer">
            <div class="loading">
                <div class="spinner"></div>
            </div>
        </div>
    `,"student"),(n=document.getElementById("btnBackFromHistory"))==null||n.addEventListener("click",()=>{_.navigate("/student/dashboard")});const i=document.getElementById("historyContainer"),s=await A("/api/test-results");if(s.success&&s.data&&s.data.length>0){const r=s.data;let o='<div style="display: grid; gap: 1rem;">';r.forEach((l,d)=>{const c=new Date(l.completedAt),u=c.toLocaleDateString(e==="uz"?"uz":"ru"),h=c.toLocaleTimeString(e==="uz"?"uz":"ru"),g=Math.round(l.correctCount/l.totalCount*100),m=g>=70?"#10b981":g>=50?"#f59e0b":"#ef4444";o+=`
                <div class="card" style="display: flex; justify-content: space-between; align-items: center; padding: 1.5rem;">
                    <div>
                        <h3 style="margin: 0 0 0.5rem 0; color: var(--text-primary);">
                            ${l.testName}
                        </h3>
                        <p style="margin: 0.25rem 0; color: var(--text-muted); font-size: 0.9rem;">
                            📅 ${u} ${h}
                        </p>
                        <p style="margin: 0.25rem 0; color: var(--text-muted); font-size: 0.9rem;">
                            ⏱️ ${e==="uz"?"Vaqt":"Время"}: ${Math.floor(l.timeTaken/60)} ${e==="uz"?"daqiqa":"мин"}
                        </p>
                    </div>
                    <div style="text-align: right; display: flex; gap: 2rem; align-items: center;">
                        <div>
                            <div style="font-size: 1.5rem; font-weight: bold; color: ${m};">
                                ${l.correctCount}/${l.totalCount}
                            </div>
                            <div style="font-size: 0.9rem; color: ${m}; font-weight: 600;">
                                ${g}%
                            </div>
                        </div>
                        <button class="button button-secondary view-details-btn" data-result-id="${l._id}" data-index="${d}">
                            ${e==="uz"?"Batafsil":"Подробно"}
                        </button>
                    </div>
                </div>
            `}),o+="</div>",i.innerHTML=o,document.querySelectorAll(".view-details-btn").forEach(l=>{l.addEventListener("click",function(){const d=this.getAttribute("data-result-id");console.log("📊 Viewing result details:",d),_.navigate(`/student/test-results/${d}`)})})}else i.innerHTML=`
            <div class="card" style="text-align: center; padding: 3rem;">
                <p style="color: var(--text-muted); font-size: 1.1rem;">
                    ${e==="uz"?"Hali testlar topilmadi":"Тесты еще не найдены"}
                </p>
                <button class="button button-primary" id="btnStartTest" style="margin-top: 1rem;">
                    ${e==="uz"?"Testni boshlash":"Пройти тест"}
                </button>
            </div>
        `,(a=document.getElementById("btnStartTest"))==null||a.addEventListener("click",()=>{_.navigate("/student/subjects")})}async function ue(){const e=k.getState();if(e.language,!e.isAuthenticated||!e.user||e.user.role!=="admin"){console.log("❌ Unauthorized access to admin dashboard"),_.navigate("/login");return}try{const t=`
        <style>
            @media (max-width: 768px) {
                #adminHeader { flex-direction: column; align-items: flex-start; gap: 1rem; }
                #adminHeader h1 { font-size: 1.75rem; }
                .admin-actions { grid-template-columns: 1fr !important; gap: 1rem !important; }
            }
            @media (max-width: 480px) {
                #adminHeader { padding: 0; }
                #adminHeader h1 { font-size: 1.4rem; margin-bottom: 0.25rem; }
                #adminHeader p { font-size: 0.75rem; }
                .admin-actions { grid-template-columns: 1fr !important; }
            }
        </style>
        <div style="background: var(--bg-primary); min-height: 100vh; padding: 2rem 1.5rem;">
            <div style="max-width: 1400px; margin: 0 auto;">
                <!-- Header -->
                <div id="adminHeader" style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 2.5rem;">
                    <div>
                        <h1 style="margin: 0; font-size: 2.25rem; font-weight: 700; color: var(--text-primary);">${E("adminPanel")}</h1>
                        <p style="margin: 0.5rem 0 0 0; color: var(--text-secondary); font-size: 0.95rem;">${E("adminManagement")}</p>
                    </div>
                </div>

                <!-- Action Cards -->
                <div class="admin-actions" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(290px, 1fr)); gap: 1.5rem; margin-bottom: 2.5rem;">
                    <!-- Analytics -->
                    <div onclick="window.router.navigate('/admin/analytics')" style="cursor: pointer; background: linear-gradient(135deg, rgba(59, 130, 246, 0.08) 0%, rgba(59, 130, 246, 0.02) 100%); border: 2px solid #3B82F6; border-radius: 16px; padding: 1.75rem; transition: all 0.3s; display: flex; gap: 1rem; align-items: flex-start;" onmouseover="this.style.transform='translateY(-6px)'; this.style.boxShadow='0 16px 32px rgba(59, 130, 246, 0.2)'" onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='none'">
                        <div style="width: 56px; height: 56px; background: linear-gradient(135deg, #3B82F6 0%, #2563EB 100%); border-radius: 12px; display: flex; align-items: center; justify-content: center; color: white; font-size: 1.5rem; flex-shrink: 0; box-shadow: 0 8px 16px rgba(59, 130, 246, 0.3);"><i class="fas fa-chart-bar"></i></div>
                        <div style="flex: 1;">
                            <h3 style="margin: 0 0 0.4rem 0; font-size: 1.1rem; font-weight: 700; color: var(--text-primary);">${E("analytics")}</h3>
                            <p style="margin: 0; font-size: 0.85rem; color: var(--text-secondary); line-height: 1.4;">${E("analyticsDesc")}</p>
                        </div>
                        <div style="color: #3B82F6; font-size: 1.5rem; font-weight: 600; flex-shrink: 0;"><i class="fas fa-arrow-right"></i></div>
                    </div>

                    <!-- Classes -->
                    <div onclick="window.router.navigate('/admin/classes')" style="cursor: pointer; background: linear-gradient(135deg, rgba(16, 185, 129, 0.08) 0%, rgba(16, 185, 129, 0.02) 100%); border: 2px solid #10b981; border-radius: 16px; padding: 1.75rem; transition: all 0.3s; display: flex; gap: 1rem; align-items: flex-start;" onmouseover="this.style.transform='translateY(-6px)'; this.style.boxShadow='0 16px 32px rgba(16, 185, 129, 0.2)'" onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='none'">
                        <div style="width: 56px; height: 56px; background: linear-gradient(135deg, #10b981 0%, #059669 100%); border-radius: 12px; display: flex; align-items: center; justify-content: center; color: white; font-size: 1.5rem; flex-shrink: 0; box-shadow: 0 8px 16px rgba(16, 185, 129, 0.3);"><i class="fas fa-school"></i></div>
                        <div style="flex: 1;">
                            <h3 style="margin: 0 0 0.4rem 0; font-size: 1.1rem; font-weight: 700; color: var(--text-primary);">${E("classes")}</h3>
                            <p style="margin: 0; font-size: 0.85rem; color: var(--text-secondary); line-height: 1.4;">${E("classesManagement")}</p>
                        </div>
                        <div style="color: #10b981; font-size: 1.5rem; font-weight: 600; flex-shrink: 0;"><i class="fas fa-arrow-right"></i></div>
                    </div>

                    <!-- Teacher Tests -->
                    <div onclick="window.router.navigate('/admin/teacher-tests')" style="cursor: pointer; background: linear-gradient(135deg, rgba(245, 158, 11, 0.08) 0%, rgba(245, 158, 11, 0.02) 100%); border: 2px solid #f59e0b; border-radius: 16px; padding: 1.75rem; transition: all 0.3s; display: flex; gap: 1rem; align-items: flex-start;" onmouseover="this.style.transform='translateY(-6px)'; this.style.boxShadow='0 16px 32px rgba(245, 158, 11, 0.2)'" onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='none'">
                        <div style="width: 56px; height: 56px; background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%); border-radius: 12px; display: flex; align-items: center; justify-content: center; color: white; font-size: 1.5rem; flex-shrink: 0; box-shadow: 0 8px 16px rgba(245, 158, 11, 0.3);"><i class="fas fa-clipboard-list"></i></div>
                        <div style="flex: 1;">
                            <h3 style="margin: 0 0 0.4rem 0; font-size: 1.1rem; font-weight: 700; color: var(--text-primary);">${E("teacherTests")}</h3>
                            <p style="margin: 0; font-size: 0.85rem; color: var(--text-secondary); line-height: 1.4;">${E("teacherTestsDesc")}</p>
                        </div>
                        <div style="color: #f59e0b; font-size: 1.5rem; font-weight: 600; flex-shrink: 0;"><i class="fas fa-arrow-right"></i></div>
                    </div>

                    <!-- Subjects Management -->
                    <div onclick="window.router.navigate('/admin/subjects')" style="cursor: pointer; background: linear-gradient(135deg, rgba(124, 58, 237, 0.08) 0%, rgba(124, 58, 237, 0.02) 100%); border: 2px solid #7c3aed; border-radius: 16px; padding: 1.75rem; transition: all 0.3s; display: flex; gap: 1rem; align-items: flex-start;" onmouseover="this.style.transform='translateY(-6px)'; this.style.boxShadow='0 16px 32px rgba(124, 58, 237, 0.2)'" onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='none'">
                        <div style="width: 56px; height: 56px; background: linear-gradient(135deg, #7c3aed 0%, #5b21b6 100%); border-radius: 12px; display: flex; align-items: center; justify-content: center; color: white; font-size: 1.5rem; flex-shrink: 0; box-shadow: 0 8px 16px rgba(124, 58, 237, 0.3);"><i class="fas fa-book"></i></div>
                        <div style="flex: 1;">
                            <h3 style="margin: 0 0 0.4rem 0; font-size: 1.1rem; font-weight: 700; color: var(--text-primary);">${E("subjectsManagement")}</h3>
                            <p style="margin: 0; font-size: 0.85rem; color: var(--text-secondary); line-height: 1.4;">${E("subjectsManagementDesc")}</p>
                        </div>
                        <div style="color: #7c3aed; font-size: 1.5rem; font-weight: 600; flex-shrink: 0;"><i class="fas fa-arrow-right"></i></div>
                    </div>

                    <!-- Add User -->
                    <div onclick="showAddUserModal()" style="cursor: pointer; background: linear-gradient(135deg, rgba(34, 197, 94, 0.08) 0%, rgba(34, 197, 94, 0.02) 100%); border: 2px solid #22c55e; border-radius: 16px; padding: 1.75rem; transition: all 0.3s; display: flex; gap: 1rem; align-items: flex-start;" onmouseover="this.style.transform='translateY(-6px)'; this.style.boxShadow='0 16px 32px rgba(34, 197, 94, 0.2)'" onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='none'">
                        <div style="width: 56px; height: 56px; background: linear-gradient(135deg, #22c55e 0%, #16a34a 100%); border-radius: 12px; display: flex; align-items: center; justify-content: center; color: white; font-size: 1.5rem; flex-shrink: 0; box-shadow: 0 8px 16px rgba(34, 197, 94, 0.3);"><i class="fas fa-user-plus"></i></div>
                        <div style="flex: 1;">
                            <h3 style="margin: 0 0 0.4rem 0; font-size: 1.1rem; font-weight: 700; color: var(--text-primary);">${E("newUser")}</h3>
                            <p style="margin: 0; font-size: 0.85rem; color: var(--text-secondary); line-height: 1.4;">${E("newUserDesc")}</p>
                        </div>
                        <div style="color: #22c55e; font-size: 1.5rem; font-weight: 600; flex-shrink: 0;"><i class="fas fa-arrow-right"></i></div>
                    </div>

                    <!-- Passwords -->
                    <div onclick="window.router.navigate('/admin/passwords')" style="cursor: pointer; background: linear-gradient(135deg, rgba(239, 68, 68, 0.08) 0%, rgba(239, 68, 68, 0.02) 100%); border: 2px solid #ef4444; border-radius: 16px; padding: 1.75rem; transition: all 0.3s; display: flex; gap: 1rem; align-items: flex-start;" onmouseover="this.style.transform='translateY(-6px)'; this.style.boxShadow='0 16px 32px rgba(239, 68, 68, 0.2)'" onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='none'">
                        <div style="width: 56px; height: 56px; background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%); border-radius: 12px; display: flex; align-items: center; justify-content: center; color: white; font-size: 1.5rem; flex-shrink: 0; box-shadow: 0 8px 16px rgba(239, 68, 68, 0.3);"><i class="fas fa-key"></i></div>
                        <div style="flex: 1;">
                            <h3 style="margin: 0 0 0.4rem 0; font-size: 1.1rem; font-weight: 700; color: var(--text-primary);">${E("passwords")}</h3>
                            <p style="margin: 0; font-size: 0.85rem; color: var(--text-secondary); line-height: 1.4;">${E("passwordsManagement")}</p>
                        </div>
                        <div style="color: #ef4444; font-size: 1.5rem; font-weight: 600; flex-shrink: 0;"><i class="fas fa-arrow-right"></i></div>
                    </div>
                </div>
                
                <!-- Tabs for Users -->
                <div style="background: var(--bg-secondary); border: 1px solid var(--border-color); border-radius: 12px; overflow: hidden;">
                    <div class="admin-tabs" style="display: flex; border-bottom: 2px solid var(--border-color); background: var(--bg-tertiary);">
                        <button class="admin-tab active" data-tab="students" style="flex: 1; padding: 1rem; background: transparent; border: none; color: var(--text-primary); font-weight: 600; font-size: 0.95rem; cursor: pointer; transition: all 0.3s; border-bottom: 3px solid #3B82F6; margin-bottom: -2px;">
                            ${E("students")}
                        </button>
                        <button class="admin-tab" data-tab="teachers" style="flex: 1; padding: 1rem; background: transparent; border: none; color: var(--text-secondary); font-weight: 600; font-size: 0.95rem; cursor: pointer; transition: all 0.3s; border-bottom: 3px solid transparent; margin-bottom: -2px;">
                            ${E("teachers")}
                        </button>
                    </div>
                    
                    <!-- Students Tab Content -->
                    <div class="admin-tab-content" data-content="students" style="padding: 1.5rem;">
                        <div style="margin-bottom: 1.5rem;">
                            <label style="display: block; font-size: 0.8rem; font-weight: 600; color: var(--text-secondary); margin-bottom: 0.5rem; text-transform: uppercase; letter-spacing: 0.5px;">${E("classFilter")}</label>
                            <select id="adminClassFilter">
                                <option value="">${E("allClasses")}</option>
                            </select>
                        </div>
                        <div id="studentsList" style="color: var(--text-secondary); text-align: center; padding: 2rem;">${E("loading")}</div>
                    </div>

                    <!-- Teachers Tab Content -->
                    <div class="admin-tab-content" data-content="teachers" style="padding: 1.5rem; display: none;">
                        <div id="teachersList" style="color: var(--text-secondary); text-align: center; padding: 2rem;">${E("loading")}</div>
                    </div>
        `;F(t,"admin"),await eh(),ih(),ah(),ie()}catch(t){console.error("Error loading admin dashboard:",t),D("Ошибка при загрузке панели","error")}}async function Bi(){var i,s;const e=k.getState(),t=e.language;if(!e.isAuthenticated||!e.user||e.user.role!=="admin"){console.log("❌ Unauthorized access to subjects"),_.navigate("/login");return}try{const n=await A("/api/subjects"),a=n.success?n.data:[],r=`
            <style>
                .subjects-hero {
                    background: linear-gradient(135deg, rgba(124, 58, 237, 0.18) 0%, rgba(59, 130, 246, 0.12) 100%);
                    border: 1px solid rgba(124, 58, 237, 0.25);
                    border-radius: 18px;
                    padding: 1.5rem;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    gap: 1rem;
                    flex-wrap: wrap;
                }
                .subjects-hero__title {
                    margin: 0;
                    font-size: 2.1rem;
                    font-weight: 800;
                    color: var(--text-primary);
                }
                .subjects-hero__desc {
                    margin: 0.5rem 0 0 0;
                    color: var(--text-secondary);
                    font-size: 0.95rem;
                }
                .subjects-hero__meta {
                    display: flex;
                    gap: 0.75rem;
                    flex-wrap: wrap;
                    align-items: center;
                }
                .subjects-pill {
                    padding: 0.45rem 0.9rem;
                    border-radius: 999px;
                    background: rgba(124, 58, 237, 0.16);
                    color: #c4b5fd;
                    border: 1px solid rgba(124, 58, 237, 0.4);
                    font-weight: 600;
                    font-size: 0.8rem;
                }
                .subjects-panel {
                    background: var(--bg-secondary);
                    border: 1px solid var(--border-color);
                    border-radius: 16px;
                    padding: 1.25rem;
                    display: grid;
                    gap: 1rem;
                }
                .subjects-toolbar {
                    display: grid;
                    grid-template-columns: 1fr auto;
                    gap: 1rem;
                    align-items: center;
                }
                .subjects-search {
                    display: flex;
                    align-items: center;
                    gap: 0.6rem;
                    padding: 0.65rem 0.9rem;
                    background: var(--bg-tertiary);
                    border: 1px solid var(--border-color);
                    border-radius: 12px;
                }
                .subjects-search input {
                    background: transparent;
                    border: none;
                    outline: none;
                    color: var(--text-primary);
                    width: 100%;
                    font-size: 0.95rem;
                }
                .subjects-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
                    gap: 1rem;
                }
                .subjects-card {
                    background: var(--bg-primary);
                    border: 1px solid var(--border-color);
                    border-radius: 16px;
                    padding: 1rem;
                    display: grid;
                    gap: 0.75rem;
                    transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;
                }
                .subjects-card:hover {
                    transform: translateY(-4px);
                    border-color: rgba(124, 58, 237, 0.6);
                    box-shadow: 0 16px 32px rgba(15, 23, 42, 0.15);
                }
                .subjects-card__header {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    gap: 0.75rem;
                }
                .subjects-card__title {
                    font-size: 1.05rem;
                    font-weight: 700;
                    color: var(--text-primary);
                }
                .subjects-card__subtitle {
                    font-size: 0.85rem;
                    color: var(--text-secondary);
                }
                .subjects-badge {
                    padding: 0.3rem 0.7rem;
                    border-radius: 10px;
                    background: rgba(59, 130, 246, 0.16);
                    color: #93c5fd;
                    font-size: 0.75rem;
                    font-weight: 600;
                }
                .subjects-card__actions {
                    display: flex;
                    gap: 0.5rem;
                    flex-wrap: wrap;
                }
                @media (max-width: 768px) {
                    .subjects-hero { padding: 1.25rem; }
                    .subjects-hero__title { font-size: 1.75rem; }
                    .subjects-toolbar { grid-template-columns: 1fr; }
                }
                @media (max-width: 420px) {
                    .subjects-hero { padding: 1rem; border-radius: 14px; }
                    .subjects-hero__title { font-size: 1.5rem; }
                    .subjects-hero__desc { font-size: 0.85rem; }
                    .subjects-panel { padding: 1rem; }
                    .subjects-grid { grid-template-columns: 1fr; }
                    .subjects-card { padding: 0.85rem; }
                    .subjects-card__actions button { width: 100%; }
                }
            </style>
            <div style="background: var(--bg-primary); min-height: 100vh; padding: 2rem 1.5rem;">
                <div style="max-width: 1100px; margin: 0 auto; display: grid; gap: 1.5rem;">
                    <div class="subjects-hero">
                        <div>
                            <h1 class="subjects-hero__title">${E("subjectsManagement")}</h1>
                            <p class="subjects-hero__desc">${E("subjectsManagementDesc")}</p>
                        </div>
                        <div class="subjects-hero__meta">
                            <button id="btnSubjectsBack" class="btn-secondary" style="padding: 0.7rem 1.2rem; font-size: 0.9rem; white-space: nowrap; border: 1px solid var(--border-color);">← ${E("back")}</button>
                            <span class="subjects-pill">${a.length} ${t==="uz"?"fan":"предметов"}</span>
                            <button id="btnAddSubject" class="btn-primary" style="padding: 0.75rem 1.5rem; font-size: 0.9rem; white-space: nowrap;">+ ${E("addSubject")}</button>
                        </div>
                    </div>

                    <div class="subjects-panel">
                        <div class="subjects-toolbar">
                            <div class="subjects-search">
                                <i class="fas fa-search" style="color: var(--text-muted);"></i>
                                <input id="subjectsSearch" type="text" placeholder="${t==="uz"?"Fanlarni qidiring...":"Найти предмет..."}">
                            </div>
                            <div style="display: flex; gap: 0.5rem; align-items: center; color: var(--text-secondary); font-size: 0.85rem;">
                                <i class="fas fa-filter"></i>
                                <span>${t==="uz"?"Qidiruv bo'yicha filtr":"Фильтр по поиску"}</span>
                            </div>
                        </div>

                        ${a.length===0?`
                            <div style="background: var(--bg-tertiary); border: 1px dashed var(--border-color); border-radius: 12px; padding: 2.5rem; text-align: center; color: var(--text-secondary);">
                                <div style="font-size: 2rem; margin-bottom: 0.5rem;">📚</div>
                                <div style="font-weight: 600; margin-bottom: 0.35rem;">${E("noSubjects")}</div>
                                <div style="font-size: 0.9rem;">${t==="uz"?"Yangi fanni qo'shing":"Добавьте первый предмет"}</div>
                            </div>
                        `:`
                            <div id="subjectsGrid" class="subjects-grid">
                                ${a.map(d=>{const c=d._id||d.id||"";return`
                                        <div class="subjects-card" data-name="${(d.name||"").toLowerCase()}">
                                            <div class="subjects-card__header">
                                                <div>
                                                    <div class="subjects-card__title">${d.name||"—"}</div>
                                                </div>
                                                <span class="subjects-badge">${t==="uz"?"Fan":"Subject"}</span>
                                            </div>
                                            <div class="subjects-card__actions">
                                                <button class="subject-edit-btn" data-id="${c}" style="padding: 0.5rem 0.9rem; font-size: 0.82rem; background: transparent; border: 1px solid var(--border-color); border-radius: 8px; color: var(--text-primary); cursor: pointer; font-weight: 600;">${E("edit")}</button>
                                                <button class="subject-delete-btn" data-id="${c}" style="padding: 0.5rem 0.9rem; font-size: 0.82rem; background: transparent; border: 1px solid #ef4444; border-radius: 8px; color: #ef4444; cursor: pointer; font-weight: 600;">${E("delete")}</button>
                                            </div>
                                        </div>
                                    `}).join("")}
                            </div>
                        `}
                    </div>
                </div>
            </div>
        `;F(r,"admin");const o=new Map(a.map(d=>[d._id||d.id,d]));(i=document.getElementById("btnAddSubject"))==null||i.addEventListener("click",()=>Gu()),(s=document.getElementById("btnSubjectsBack"))==null||s.addEventListener("click",()=>{_.navigate("/admin/dashboard")});const l=document.getElementById("subjectsSearch");l&&l.addEventListener("input",d=>{const c=d.target.value.trim().toLowerCase();document.querySelectorAll("#subjectsGrid .subjects-card").forEach(u=>{const h=u.getAttribute("data-name-ru")||"",g=u.getAttribute("data-name-uz")||"",m=h.includes(c)||g.includes(c);u.style.display=m?"grid":"none"})}),document.querySelectorAll(".subject-edit-btn").forEach(d=>{d.addEventListener("click",()=>{const c=d.getAttribute("data-id"),u=o.get(c);u&&Zu(u)})}),document.querySelectorAll(".subject-delete-btn").forEach(d=>{d.addEventListener("click",async()=>{const c=d.getAttribute("data-id");await pe(t==="uz"?"Fanni o'chirishni xohlaysizmi?":"Удалить предмет?",t==="uz"?"Tasdiqlash":"Подтверждение")&&await th(c)})})}catch(n){console.error("Error loading subjects:",n),D(t==="uz"?"Fanlarni yuklashda xatolik":"Ошибка при загрузке предметов","error"),_.navigate("/admin/dashboard")}}function Gu(){var t,i;k.getState().language;const e=document.createElement("div");e.className="modal modal--centered",e.innerHTML=`
        <div class="modal-content" style="max-width: 520px;">
            <h2 style="margin: 0 0 0.5rem 0; font-size: 1.4rem;">${E("addSubject")}</h2>
            <p style="margin: 0 0 1.5rem 0; color: var(--text-secondary); font-size: 0.9rem;">${E("subjectsManagementDesc")}</p>
            <form id="subjectForm" style="display: grid; gap: 1rem;">
                <div>
                    <label style="display: block; font-weight: 600; margin-bottom: 0.4rem;">Название предмета</label>
                    <input id="subjectName" type="text" placeholder="Например: Математика" style="width: 100%; padding: 0.75rem; border: 2px solid var(--border-color); border-radius: 8px; background: var(--bg-secondary); color: var(--text-primary);" required>
                </div>
                <div style="display: flex; gap: 1rem; margin-top: 0.5rem;">
                    <button type="button" id="closeSubjectModal" class="button button-secondary" style="flex: 1;">${E("cancel")}</button>
                    <button type="submit" class="button button-primary" style="flex: 1; background: #7c3aed;">${E("save")}</button>
                </div>
            </form>
        </div>
    `,e.addEventListener("click",s=>{s.target===e&&e.remove()}),document.body.appendChild(e),setTimeout(()=>e.classList.add("show"),10),(t=document.getElementById("closeSubjectModal"))==null||t.addEventListener("click",()=>e.remove()),(i=document.getElementById("subjectForm"))==null||i.addEventListener("submit",async s=>{s.preventDefault();const n=document.getElementById("subjectName").value.trim();if(!n){D("Заполните название предмета","warning");return}const r=await A("/api/subjects","POST",{name:n});r.success?(D("Предмет добавлен","success"),e.remove(),Bi()):D(r.error||"Произошла ошибка","error")})}function Zu(e){var s,n;const t=k.getState().language,i=document.createElement("div");i.className="modal modal--centered",i.innerHTML=`
        <div class="modal-content" style="max-width: 520px;">
            <h2 style="margin: 0 0 0.5rem 0; font-size: 1.4rem;">${E("editSubject")}</h2>
            <p style="margin: 0 0 1.5rem 0; color: var(--text-secondary); font-size: 0.9rem;">${E("subjectsManagementDesc")}</p>
            <form id="subjectEditForm" style="display: grid; gap: 1rem;">
                <div>
                    <label style="display: block; font-weight: 600; margin-bottom: 0.4rem;">Название предмета</label>
                    <input id="subjectEditName" type="text" value="${e.name||""}" style="width: 100%; padding: 0.75rem; border: 2px solid var(--border-color); border-radius: 8px; background: var(--bg-secondary); color: var(--text-primary);" required>
                </div>
                <div style="display: flex; gap: 1rem; margin-top: 0.5rem;">
                    <button type="button" id="closeSubjectEditModal" class="button button-secondary" style="flex: 1;">${E("cancel")}</button>
                    <button type="submit" class="button button-primary" style="flex: 1; background: #7c3aed;">${E("save")}</button>
                </div>
            </form>
        </div>
    `,i.addEventListener("click",a=>{a.target===i&&i.remove()}),document.body.appendChild(i),setTimeout(()=>i.classList.add("show"),10),(s=document.getElementById("closeSubjectEditModal"))==null||s.addEventListener("click",()=>i.remove()),(n=document.getElementById("subjectEditForm"))==null||n.addEventListener("submit",async a=>{a.preventDefault();const r=document.getElementById("subjectEditName").value.trim();if(!r){D(t==="uz"?"Barcha maydonlarni to'ldiring":"Заполните все обязательные поля","warning");return}const o={name:r},l=e._id||e.id,d=await A(`/api/subjects/${l}`,"PUT",o);d.success?(D(t==="uz"?"Fan yangilandi":"Предмет обновлен","success"),i.remove(),Bi()):D(d.error||(t==="uz"?"Xatolik yuz berdi":"Произошла ошибка"),"error")})}async function th(e){const t=k.getState().language,i=await A(`/api/subjects/${e}`,"DELETE");i.success?(D(t==="uz"?"Fan o'chirildi":"Предмет удален","success"),Bi()):D(i.error||(t==="uz"?"Xatolik yuz berdi":"Произошла ошибка"),"error")}async function eh(){try{const[e,t,i]=await Promise.all([A("/api/users"),A("/api/classes"),A("/api/tests")]);if(!e.success){console.error("Failed to load admin data");return}const s=e.data||[],n=t.data||[],a=i.data||[],r=s.filter(d=>d.role==="student"),o=s.filter(d=>d.role==="teacher");si("totalStudents",r.length),si("totalTeachers",o.length),si("totalTests",a.length),si("totalClasses",n.length);const l=document.getElementById("adminClassFilter");l&&n.forEach(d=>{var h;const c=document.createElement("option"),u=d.name?`${d.grade||""}${d.name}`:(h=d.sections)!=null&&h.length?`${d.grade||""} (${d.sections.join(", ")})`:d.grade||"—";c.value=d.grade||"",c.textContent=u,l.appendChild(c)}),window.adminData={students:r,teachers:o,classes:n},mr(r,n),sh(o)}catch(e){console.error("Error loading admin data:",e)}}function ih(){const e=document.querySelectorAll(".admin-tab"),t=document.querySelectorAll(".admin-tab-content");e.forEach(i=>{i.addEventListener("click",()=>{const s=i.getAttribute("data-tab");e.forEach(n=>{n.classList.remove("active"),n.style.color="var(--text-secondary)",n.style.borderBottomColor="transparent",n.style.background="transparent"}),i.classList.add("active"),i.style.color="var(--text-primary)",i.style.borderBottomColor="#3B82F6",i.style.background="var(--bg-tertiary)",t.forEach(n=>{n.getAttribute("data-content")===s?n.style.display="block":n.style.display="none"})})})}function si(e,t){const i=document.getElementById(e);if(!i)return;let s=0;const n=t/30,a=setInterval(()=>{s+=n,s>=t?(i.textContent=t,clearInterval(a)):i.textContent=Math.floor(s)},30)}function mr(e,t){const i=document.getElementById("studentsList");if(!i)return;if(e.length===0){i.innerHTML=`<div style="text-align: center; color: var(--text-secondary); padding: 2rem;">${E("noStudents")}</div>`;return}let s='<div style="display: grid; gap: 1rem;">';e.forEach(n=>{const a=t.find(o=>o.id===n.classId||o._id===n.classId),r=a?`${a.grade||""}${a.name||""}`:n.grade?`${n.grade||""}${n.className||""}`:"—";s+=`
            <div style="background: linear-gradient(135deg, rgba(59, 130, 246, 0.08) 0%, rgba(59, 130, 246, 0.02) 100%); border: 2px solid #3B82F6; border-radius: 12px; padding: 1.25rem; cursor: pointer; transition: all 0.3s; display: flex; gap: 1rem; align-items: center;" 
                 onclick="window.router.navigate('/admin/student/${n.id||n._id}')"
                 onmouseover="this.style.transform='translateY(-4px)'; this.style.boxShadow='0 12px 24px rgba(59, 130, 246, 0.15)'" 
                 onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='none'">
                <div style="width: 48px; height: 48px; background: linear-gradient(135deg, #3B82F6, #1e40af); border-radius: 10px; display: flex; align-items: center; justify-content: center; color: white; font-size: 1.25rem; flex-shrink: 0;">
                    <i class="fas fa-user"></i>
                </div>
                <div style="flex: 1; min-width: 0;">
                    <div style="font-weight: 600; color: var(--text-primary); font-size: 0.95rem;">${n.name||n.firstName}</div>
                    <div style="font-size: 0.8rem; color: var(--text-secondary);">${n.username}</div>
                    <div style="font-size: 0.8rem; color: #3B82F6; margin-top: 0.25rem;">${r||"—"}</div>
                </div>
            </div>
        `}),s+="</div>",i.innerHTML=s}function sh(e){const t=document.getElementById("teachersList");if(!t)return;if(e.length===0){t.innerHTML=`<div style="text-align: center; color: var(--text-secondary); padding: 2rem;">${E("noTeachers")}</div>`;return}let i='<div style="display: grid; gap: 1rem;">';e.forEach(s=>{i+=`
            <div style="background: linear-gradient(135deg, rgba(16, 185, 129, 0.08) 0%, rgba(16, 185, 129, 0.02) 100%); border: 2px solid #10b981; border-radius: 12px; padding: 1.25rem; cursor: pointer; transition: all 0.3s; display: flex; gap: 1rem; align-items: center;" 
                 onclick="window.router.navigate('/admin/teacher/${s.id||s._id}')"
                 onmouseover="this.style.transform='translateY(-4px)'; this.style.boxShadow='0 12px 24px rgba(16, 185, 129, 0.15)'" 
                 onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='none'">
                <div style="width: 48px; height: 48px; background: linear-gradient(135deg, #10b981, #059669); border-radius: 10px; display: flex; align-items: center; justify-content: center; color: white; font-size: 1.25rem; flex-shrink: 0;">
                    <i class="fas fa-chalkboard-user"></i>
                </div>
                <div style="flex: 1; min-width: 0;">
                    <div style="font-weight: 600; color: var(--text-primary); font-size: 0.95rem;">${s.name||s.firstName}</div>
                    <div style="font-size: 0.8rem; color: var(--text-secondary);">${s.username}</div>
                    <div style="font-size: 0.75rem; color: #10b981; margin-top: 0.25rem; font-weight: 500;">${E("teacher")}</div>
                </div>
            </div>
        `}),i+="</div>",t.innerHTML=i}async function pr(){console.log("🔧 showAddUserModal called");const e=k.getState().language;let t=[];try{const u=await A("/api/subjects");console.log("📚 Raw API response:",u),u.success?(t=u.data||[],console.log("📚 Загружено предметов:",t.length),console.log("📚 Данные предметов:",t.slice(0,3)),console.log("📚 Типы данных:",t.length>0?typeof t[0].id+", "+typeof t[0].name:"no data")):console.error("❌ Ошибка загрузки предметов:",u)}catch(u){console.error("❌ Ошибка при загрузке предметов:",u)}let i=[];try{const u=await A("/api/users");u.success?(i=u.data.filter(h=>h.role==="teacher")||[],console.log("👨‍🏫 Загружено учителей:",i.length)):console.error("❌ Ошибка загрузки учителей:",u)}catch(u){console.error("❌ Ошибка при загрузке учителей:",u)}let s=[];try{const u=await A("/api/classes");u.success?(s=u.data||[],console.log("🏫 Загружено классов:",s.length,s)):console.error("❌ Ошибка загрузки классов:",u)}catch(u){console.error("❌ Ошибка при загрузке классов:",u),setTimeout(()=>{alert(e==="uz"?"Sinf ma'lumotlari yuklanmadi. Iltimos, sahifani yangilang.":"Данные классов не загружены. Пожалуйста, обновите страницу.")},1e3)}try{window.classesList=s}catch(u){console.warn("Unable to set window.classesList:",u)}const n=document.createElement("div");n.className="modal",n.innerHTML=`
        <div class="modal-content" style="max-width: 550px;">
            <div style="background: linear-gradient(135deg, rgba(16, 185, 129, 0.2) 0%, rgba(59, 130, 246, 0.15) 100%); border: 1px solid rgba(16, 185, 129, 0.35); color: var(--text-primary); padding: 1.25rem; border-radius: 14px; margin-bottom: 1.25rem;">
                <div style="font-size: 0.85rem; color: var(--text-secondary); margin-bottom: 0.4rem;">${e==="uz"?"Admin paneli":"Админ панель"}</div>
                <h2 style="margin: 0; font-size: 1.35rem; font-weight: 800;">${e==="uz"?"Foydalanuvchi qo'shish":"Добавить пользователя"}</h2>
                <p style="margin: 0.4rem 0 0 0; color: var(--text-secondary); font-size: 0.9rem;">${e==="uz"?"O'quvchi yoki o'qituvchi yaratish":"Создайте ученика или учителя"}</p>
            </div>
            
            <form id="addUserForm" class="add-user-form" style="display: flex; flex-direction: column; gap: 1rem;">
                <div id="addUserAlert" class="inline-alert" style="display: none;"></div>
                <div>
                    <label style="display: block; font-weight: 600; margin-bottom: 0.4rem; font-size: 0.9rem;">
                        ${e==="uz"?"Rol":"Роль"}
                    </label>
                    <select id="userRole">
                        <option value="student">${e==="uz"?"O'quvchi":"Ученик"}</option>
                        <option value="teacher">${e==="uz"?"O'qituvchi":"Учитель"}</option>
                    </select>
                </div>
                
                <div class="add-user-row" style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
                    <div>
                        <label style="display: block; font-weight: 600; margin-bottom: 0.4rem; font-size: 0.9rem;">
                            ${e==="uz"?"Ism":"Имя"}
                        </label>
                        <input id="userFirstName" type="text" placeholder="${e==="uz"?"Ism":"Имя"}" style="width: 100%; padding: 0.75rem; border: 2px solid var(--border-color); border-radius: 8px; background: var(--bg-secondary); color: var(--text-primary);" required>
                    </div>
                    <div>
                        <label style="display: block; font-weight: 600; margin-bottom: 0.4rem; font-size: 0.9rem;">
                            ${e==="uz"?"Familiya":"Фамилия"}
                        </label>
                        <input id="userLastName" type="text" placeholder="${e==="uz"?"Familiya":"Фамилия"}" style="width: 100%; padding: 0.75rem; border: 2px solid var(--border-color); border-radius: 8px; background: var(--bg-secondary); color: var(--text-primary);" required>
                    </div>
                </div>
                
                <div>
                    <label style="display: block; font-weight: 600; margin-bottom: 0.4rem; font-size: 0.9rem;">
                        ${e==="uz"?"Foydalanuvchi nomi":"Имя пользователя"}
                    </label>
                    <input id="userUsername" type="text" placeholder="username" style="width: 100%; padding: 0.75rem; border: 2px solid var(--border-color); border-radius: 8px; background: var(--bg-secondary); color: var(--text-primary);" required>
                </div>
                
                <div class="add-user-row" style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
                    <div>
                        <label style="display: block; font-weight: 600; margin-bottom: 0.4rem; font-size: 0.9rem;">
                            Email
                        </label>
                        <input id="userEmail" type="email" placeholder="user@example.com" style="width: 100%; padding: 0.75rem; border: 2px solid var(--border-color); border-radius: 8px; background: var(--bg-secondary); color: var(--text-primary);">
                        <script>console.log('EMAIL FIELD RENDERED');<\/script>
                    </div>
                    <div>
                        <label style="display: block; font-weight: 600; margin-bottom: 0.4rem; font-size: 0.9rem;">
                            ${e==="uz"?"Telefon":"Телефон"}
                        </label>
                        <input id="userPhone" type="tel" placeholder="+998901234567" style="width: 100%; padding: 0.75rem; border: 2px solid var(--border-color); border-radius: 8px; background: var(--bg-secondary); color: var(--text-primary);">
                        <script>console.log('PHONE FIELD RENDERED');<\/script>
                    </div>
                </div>
                
                <div style="background: rgba(239, 68, 68, 0.1); border: 1px solid rgba(239, 68, 68, 0.3); padding: 0.9rem; border-radius: 8px; font-size: 0.85rem; color: #ef4444;">
                    ${e==="uz"?"⚠️ Email yoki telefon raqamini kiritish majburiy!":"⚠️ Обязательно укажите email или телефон!"}
                </div>
                
                <!-- STUDENT FIELDS -->
                <div id="studentFields" style="display: none; border: 2px solid rgba(16, 185, 129, 0.3); padding: 1rem; border-radius: 8px;">
                    <div>
                        <label style="display: block; font-weight: 600; margin-bottom: 0.4rem; font-size: 0.9rem;">
                            ${e==="uz"?"Sinf":"Класс"}
                        </label>
                        <select id="studentClass" style="width: 100%; padding: 0.75rem; border: 2px solid var(--border-color); border-radius: 8px; background: var(--bg-secondary); color: var(--text-primary);">
                            <option value="">${e==="uz"?"Sinfni tanlang":"Выберите класс"}</option>
                            ${s.length>0?s.map(u=>`<option value="${u.id}">${u.grade}${u.name} ${e==="uz"?"sinf":"класс"}</option>`).join(""):`<option value="" disabled>${e==="uz"?"Sinf mavjud emas":"Классы не найдены"}</option>`}
                        </select>
                    </div>
                    
                    <div style="margin-top: 1rem;">
                        <label style="display: block; font-weight: 600; margin-bottom: 0.4rem; font-size: 0.9rem;">
                            ${e==="uz"?"Sinf o'qituvchisi":"Классная руководительница"}
                        </label>
                        <select id="studentClassTeacher">
                            <option value="">${e==="uz"?"Tanlang":"Выберите"}</option>
                            ${i.map(u=>`<option value="${u._id}">${u.firstName} ${u.lastName}</option>`).join("")}
                        </select>
                    </div>
                </div>
                
                <!-- TEACHER FIELDS -->
                <div id="teacherFields" class="teacher-fields" style="display: none; border: 2px solid rgba(139, 92, 246, 0.3); padding: 1rem; border-radius: 8px; overflow: auto;">
                    ${console.log("📚 subjectsList перед рендерингом teacher fields:",t)}
                    <label style="display: block; font-weight: 600; margin-bottom: 0.6rem; font-size: 0.9rem;">
                        ${e==="uz"?"Predmetlar":"Предметы"}
                    </label>
                    <div class="teacher-subjects-list" style="display: flex; flex-direction: column; gap: 0.5rem; max-height: 200px; overflow-y: auto;">
                        
                    ${t&&t.length>0?t.map((u,h)=>`
                            <label class="teacher-subject-item" style="display: flex; align-items: center; gap: 0.5rem; padding: 0.5rem; cursor: pointer; border-radius: 6px; transition: background 0.2s;" onmouseover="this.style.background='rgba(139, 92, 246, 0.1)'" onmouseout="this.style.background='transparent'">
                                <input type="checkbox" class="teacherSubject" value="${u&&u.id?u.id:"undefined-"+h}" data-name="${u&&u.name?u.name:"undefined-"+h}" style="width: 18px; height: 18px; cursor: pointer;">
                                <span style="flex: 1; font-size: 0.95rem;">${u&&u.name?u.name:"undefined-"+h}</span>
                            </label>
                        `).join(""):'<p style="color: var(--text-muted); text-align: center;">Предметы не загружены или пустой список</p>'}
                    </div>
                </div>
                
                <div style="display: flex; gap: 1rem; margin-top: 1rem;">
                    <button type="button" class="button button-secondary" id="closeAddUserBtn" style="flex: 1;">
                        ${e==="uz"?"Bekor qilish":"Отмена"}
                    </button>
                    <button type="submit" class="button button-primary" style="flex: 1; background: #10b981;">
                        ✅ ${e==="uz"?"Qo'shish":"Добавить"}
                    </button>
                </div>
            </form>
        </div>
    `,document.body.appendChild(n),setTimeout(()=>n.classList.add("show"),10);const a=document.getElementById("userRole"),r=document.getElementById("studentFields"),o=document.getElementById("teacherFields"),l=document.getElementById("addUserAlert"),d=(u,h="info")=>{if(!l)return;const g={success:"✅",error:"❌",warning:"⚠️",info:"ℹ️"};l.className=`inline-alert inline-alert--${h}`,l.innerHTML=`
            <span style="font-size: 1.1rem;">${g[h]||g.info}</span>
            <span>${u}</span>
        `,l.style.display="flex"},c=u=>{const h=u==="student";r.style.display=h?"block":"none",o.style.display=h?"none":"block"};c(a.value),a.addEventListener("change",u=>{c(u.target.value)}),document.getElementById("closeAddUserBtn").addEventListener("click",()=>{n.classList.remove("show"),setTimeout(()=>n.remove(),300)}),document.getElementById("addUserForm").addEventListener("submit",async u=>{var w;u.preventDefault();const h=document.getElementById("userRole").value,g=document.getElementById("userFirstName").value.trim(),m=document.getElementById("userLastName").value.trim(),p=document.getElementById("userUsername").value.trim(),f=document.getElementById("userEmail").value.trim(),b=document.getElementById("userPhone").value.trim();if(!g||!m||!p){d(e==="uz"?"Barcha maydonlarni to'ldiring":"Заполните все обязательные поля","warning");return}if(!f&&!b){d(e==="uz"?"Email yoki telefon raqamini kiriting":"Укажите email или телефон","warning");return}const v={username:p,role:h,firstName:g,lastName:m,email:f||null,phone:b||null};if(h==="student"){const y=document.getElementById("studentClass").value.trim(),x=((w=document.getElementById("studentClassTeacher"))==null?void 0:w.value)||"";if(console.log("🎓 Создание ученика:",{classId:y,classTeacherId:x}),!y){d(e==="uz"?"Sinfni tanlang":"Выберите класс","warning");return}v.classId=y,x&&(v.classTeacherId=x)}else if(h==="teacher"){const y=Array.from(document.querySelectorAll(".teacherSubject:checked")).map(x=>({id:x.value,name:x.dataset.name}));if(y.length===0){d(e==="uz"?"Kamida bitta predmet tanlang":"Выберите хотя бы один предмет","warning");return}v.subjects=y}try{const y=await A("/api/users/register",{method:"POST",body:JSON.stringify(v)});if(y.success){if(y.data.otp){const x=document.createElement("div");x.className="modal show",x.style.zIndex="10001",x.innerHTML=`
                        <div class="modal-content" style="max-width: 500px; background: linear-gradient(135deg, #3b82f6 0%, #1e40af 100%); color: white;">
                            <div style="text-align: center; padding: 2rem;">
                                <div style="font-size: 3rem; margin-bottom: 1rem;">🔑</div>
                                <h2 style="margin: 0 0 1rem 0; font-size: 1.5rem;">${e==="uz"?"OTP Parol Yaratildi":"OTP Пароль Создан"}</h2>
                                <p style="margin: 0 0 1.5rem 0; opacity: 0.9;">
                                    ${e==="uz"?"Foydalanuvchiga quyidagi ma'lumotlarni bering:":"Передайте пользователю следующие данные:"}
                                </p>
                                
                                <div style="background: rgba(255,255,255,0.15); border-radius: 12px; padding: 1.5rem; margin-bottom: 1rem; backdrop-filter: blur(10px);">
                                    <div style="margin-bottom: 1rem;">
                                        <div style="font-size: 0.85rem; opacity: 0.8; margin-bottom: 0.3rem;">${e==="uz"?"Login":"Логин"}:</div>
                                        <div style="font-size: 1.3rem; font-weight: 700; font-family: monospace; letter-spacing: 1px;">${y.data.username}</div>
                                    </div>
                                    <div>
                                        <div style="font-size: 0.85rem; opacity: 0.8; margin-bottom: 0.3rem;">${e==="uz"?"Bir martalik parol (OTP)":"Одноразовый пароль (OTP)"}:</div>
                                        <div style="font-size: 1.8rem; font-weight: 700; font-family: monospace; letter-spacing: 3px; background: rgba(255,255,255,0.2); padding: 0.7rem; border-radius: 8px;">${y.data.otp}</div>
                                    </div>
                                </div>
                                
                                <div style="background: rgba(255,255,255,0.1); border-radius: 8px; padding: 1rem; margin-bottom: 1.5rem; font-size: 0.85rem; text-align: left;">
                                    <div style="font-weight: 600; margin-bottom: 0.5rem;">⚠️ ${e==="uz"?"Muhim":"Важно"}:</div>
                                    <ul style="margin: 0; padding-left: 1.2rem; line-height: 1.6;">
                                        <li>${e==="uz"?"Parol faqat bir marta ishlatiladi":"Пароль используется только один раз"}</li>
                                        <li>${e==="uz"?`Amal qilish muddati: ${new Date(y.data.otpExpiresAt).toLocaleString("uz-UZ")}`:`Срок действия: ${new Date(y.data.otpExpiresAt).toLocaleString("ru-RU")}`}</li>
                                        <li>${e==="uz"?"Foydalanuvchi birinchi kirishda parolni o'zgartirishi kerak":"При первом входе пользователь должен сменить пароль"}</li>
                                    </ul>
                                </div>
                                
                                <button onclick="this.closest('.modal').remove()" style="width: 100%; padding: 0.9rem; background: white; color: #1e40af; border: none; border-radius: 8px; font-weight: 700; font-size: 1rem; cursor: pointer; transition: all 0.2s;">
                                    ${e==="uz"?"Yopish":"Закрыть"}
                                </button>
                            </div>
                        </div>
                    `,document.body.appendChild(x)}D(e==="uz"?"Foydalanuvchi muvaffaqiyatli qo'shildi":"Пользователь успешно добавлен","success"),n.classList.remove("show"),setTimeout(()=>{n.remove(),ue()},300)}else d(y.error||(e==="uz"?"Xatolik yuz berdi":"Произошла ошибка"),"error")}catch(y){console.error("Error creating user:",y),d(e==="uz"?"Xatolik yuz berdi":"Произошла ошибка","error")}})}async function nh(){const e=k.getState().language,t=document.createElement("div");t.className="admin-modal-overlay",t.innerHTML=`
        <div class="admin-modal-content modal-content" style="max-width: 450px;">
            <div style="background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%); color: white; padding: 1.5rem; border-radius: 12px 12px 0 0; margin: -1.5rem -1.5rem 1.5rem -1.5rem;">
                <h2 style="margin: 0; font-size: 1.3rem;">🏫 ${e==="uz"?"Sinf qo'shish":"Добавить класс"}</h2>
            </div>
            
            <form id="addClassForm" style="display: flex; flex-direction: column; gap: 1rem;">
                <div>
                    <label style="display: block; font-weight: 600; margin-bottom: 0.4rem; font-size: 0.9rem;">
                        ${e==="uz"?"Sinf raqami":"Номер класса"}
                    </label>
                    <input id="classGrade" type="text" placeholder="9" style="width: 100%; padding: 0.75rem; border: 2px solid var(--border-color); border-radius: 8px; background: var(--bg-secondary); color: var(--text-primary);" required>
                </div>
                
                <div>
                    <label style="display: block; font-weight: 600; margin-bottom: 0.4rem; font-size: 0.9rem;">
                        ${e==="uz"?"Sinf nomi":"Название класса"}
                    </label>
                    <input id="className" type="text" placeholder="${e==="uz"?"A, B, V":"А, Б, В"}" style="width: 100%; padding: 0.75rem; border: 2px solid var(--border-color); border-radius: 8px; background: var(--bg-secondary); color: var(--text-primary);" required>
                </div>
                
                <div>
                    <label style="display: block; font-weight: 600; margin-bottom: 0.4rem; font-size: 0.9rem;">
                        ${e==="uz"?"Sinf o'qituvchisi":"Классный руководитель"}
                    </label>
                    <select id="classTeacher">
                        <option value="">${e==="uz"?"Tanlang":"Выберите"}</option>
                    </select>
                </div>
                
                <div style="display: flex; gap: 1rem; margin-top: 1rem;">
                    <button type="button" class="button button-secondary" id="closeAddClassBtn" style="flex: 1;">
                        ${e==="uz"?"Bekor qilish":"Отмена"}
                    </button>
                    <button type="submit" class="button button-primary" style="flex: 1; background: #f59e0b;">
                        ✅ ${e==="uz"?"Yaratish":"Создать"}
                    </button>
                </div>
            </form>
        </div>
    `,document.body.appendChild(t),setTimeout(()=>t.classList.add("show"),10),t.addEventListener("click",i=>{i.target===t&&(t.classList.remove("show"),setTimeout(()=>t.remove(),300))});try{const i=await A("/api/users"),s=i.success?i.data.filter(a=>a.role==="teacher"):[],n=document.getElementById("classTeacher");s.forEach(a=>{const r=document.createElement("option");r.value=a._id,r.textContent=`${a.firstName} ${a.lastName}`,n.appendChild(r)})}catch(i){console.error("Error loading teachers:",i)}document.getElementById("closeAddClassBtn").addEventListener("click",()=>{t.classList.remove("show"),setTimeout(()=>t.remove(),300)}),document.getElementById("addClassForm").addEventListener("submit",async i=>{i.preventDefault();const s=document.getElementById("classGrade").value.trim(),n=document.getElementById("className").value.trim(),a=document.getElementById("classTeacher").value;if(!s||!n){D(e==="uz"?"Barcha maydonlarni to'ldiring":"Заполните все обязательные поля","warning");return}try{const r=await A("/api/classes",{method:"POST",body:JSON.stringify({grade:s,name:n,teacherId:a||null})});r.success?(D(e==="uz"?"Sinf muvaffaqiyatli yaratildi":"Класс успешно создан","success"),t.classList.remove("show"),setTimeout(()=>{t.remove(),ue()},300)):D(r.error||(e==="uz"?"Xatolik yuz berdi":"Произошла ошибка"),"error")}catch(r){console.error("Error creating class:",r),D(e==="uz"?"Xatolik yuz berdi":"Произошла ошибка","error")}})}window.showAddUserModal=pr;window.showAddClassModal=nh;window.viewTeacherTestResults=gh;window.assignTestToTeachers=mh;window.deleteTeacherTest=ph;window.startTeacherTest=yh;window.retakeTeacherTest=fr;window.viewMyTestResult=vh;function ah(){const e=document.getElementById("adminClassFilter"),t=document.getElementById("adminSearchInput");if(!e||!t)return;const i=()=>{if(!window.adminData)return;const s=e.value,n=t.value.toLowerCase();let a=window.adminData.students;s&&(a=a.filter(r=>r.grade===s)),n&&(a=a.filter(r=>(r.firstName+" "+r.lastName).toLowerCase().includes(n)||r.username.toLowerCase().includes(n))),mr(a,window.adminData.classes,window.adminData.results)};e.addEventListener("change",i),t.addEventListener("input",i)}async function rh(e){var s;const t=k.getState().language;F(`
        <div class="page-header">
            <button class="button button-secondary" id="btnBackToAdminDashboard" style="margin-bottom: 1rem;">
                ← ${t==="uz"?"Orqaga":"Назад"}
            </button>
            <h1>${t==="uz"?"O'quvchi ma'lumotlari":"Информация об ученике"}</h1>
        </div>
        
        <div id="studentDetailContainer">
            <div class="loading"><div class="spinner"></div></div>
        </div>
    `,"admin"),(s=document.getElementById("btnBackToAdminDashboard"))==null||s.addEventListener("click",()=>{_.navigate("/admin/dashboard")}),await oh(e)}async function oh(e){var f;const t=k.getState().language,[i,s,n,a]=await Promise.all([A(`/api/users/${e}`),A("/api/test-results"),A("/api/subjects"),A(`/api/analytics/students/${e}/timeline`)]);if(!i.success){document.getElementById("studentDetailContainer").innerHTML=`
            <div class="card" style="text-align: center; padding: 3rem;">
                <p style="color: #ef4444;">${t==="uz"?"O'quvchi topilmadi":"Ученик не найден"}</p>
            </div>
        `;return}const r=i.data,o=s.data||[];n.data;const l=o.filter(b=>b.userId===e).sort((b,v)=>new Date(v.completedAt)-new Date(b.completedAt)),d=l.slice(0,5),c=l.length>0?Math.round(l.reduce((b,v)=>b+v.correctCount/v.totalCount*100,0)/l.length):0,u=l.length>0?Math.max(...l.map(b=>Math.round(b.correctCount/b.totalCount*100))):0,h=l.filter(b=>Math.round(b.correctCount/b.totalCount*100)>=70).length,g=`${r.firstName} ${r.lastName}`,m=((f=r.interestTestResults)==null?void 0:f.categories)||{};Object.entries(m).sort((b,v)=>v[1]-b[1]).slice(0,3).map(([b,v])=>({name:b,score:v}));let p=`
        <style>
            @keyframes slideInUp {
                from { opacity: 0; transform: translateY(20px); }
                to { opacity: 1; transform: translateY(0); }
            }
            .profile-section { animation: slideInUp 0.5s ease-out; }
        </style>
        
        <!-- Profile Header -->
        <div class="card profile-section" style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 2rem; text-align: center; margin-bottom: 2rem; border-radius: 20px;">
            <div style="width: 100px; height: 100px; border-radius: 50%; background: rgba(255,255,255,0.2); display: flex; align-items: center; justify-content: center; margin: 0 auto 1rem; border: 3px solid rgba(255,255,255,0.4); font-size: 3rem;">
                ${g.charAt(0).toUpperCase()}
            </div>
            <h1 style="margin: 0 0 0.5rem 0; font-size: 1.8rem; font-weight: 800;">${g}</h1>
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(120px, 1fr)); gap: 1.5rem; margin-top: 1.5rem; padding-top: 1.5rem; border-top: 1px solid rgba(255,255,255,0.2);">
                <div>
                    <div style="font-size: 0.85rem; opacity: 0.9;">${t==="uz"?"Sinf":"Класс"}</div>
                    <div style="font-size: 1.5rem; font-weight: bold; margin-top: 0.25rem;">${r.grade?`${r.grade}${r.className||""}`:"—"}</div>
                </div>
                <div>
                    <div style="font-size: 0.85rem; opacity: 0.9;">ID</div>
                    <div style="font-size: 1rem; font-weight: 600; margin-top: 0.25rem; font-family: monospace;">${r.username}</div>
                </div>
            </div>
        </div>
        
        <!-- Statistics -->
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(160px, 1fr)); gap: 1rem; margin-bottom: 2rem;">
            <div class="card profile-section" style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 1.5rem; border-radius: 16px; text-align: center;">
                <div style="font-size: 2.5rem; font-weight: bold; margin-bottom: 0.5rem;">${c}%</div>
                <div style="font-size: 0.85rem; opacity: 0.9;">${t==="uz"?"O'rtacha ball":"Средний балл"}</div>
            </div>
            <div class="card profile-section" style="background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%); color: white; padding: 1.5rem; border-radius: 16px; text-align: center;">
                <div style="font-size: 2.5rem; font-weight: bold; margin-bottom: 0.5rem;">${l.length}</div>
                <div style="font-size: 0.85rem; opacity: 0.9;">${t==="uz"?"Testlar topshirdi":"Пройдено тестов"}</div>
            </div>
            <div class="card profile-section" style="background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%); color: white; padding: 1.5rem; border-radius: 16px; text-align: center;">
                <div style="font-size: 2.5rem; font-weight: bold; margin-bottom: 0.5rem;">${u}%</div>
                <div style="font-size: 0.85rem; opacity: 0.9;">${t==="uz"?"Eng yuqori ball":"Лучший результат"}</div>
            </div>
            <div class="card profile-section" style="background: linear-gradient(135deg, #43e97b 0%, #38f9d7 100%); color: white; padding: 1.5rem; border-radius: 16px; text-align: center;">
                <div style="font-size: 2.5rem; font-weight: bold; margin-bottom: 0.5rem;">${h}</div>
                <div style="font-size: 0.85rem; opacity: 0.9;">${t==="uz"?"O'tkazdi":"Успешно"}</div>
            </div>
        </div>
    `;if(r.interestTestResults&&Object.keys(m).length>0&&(p+=`
            <div class="card profile-section" style="padding: 1.5rem; margin-bottom: 2rem;">
                <h2 style="margin-top: 0; display: flex; align-items: center; gap: 0.5rem;">
                    🎯 ${t==="uz"?"Tavsiya etilgan fanlar":"Рекомендуемые предметы"}
                </h2>
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 1rem;">
                    ${Object.entries(m).map(([b,v])=>{const y={math:{bg:"#667eea",text:"Математика/Matematika"},science:{bg:"#f093fb",text:"Наука/Fanlar"},tech:{bg:"#4facfe",text:"Технология/Texnologiya"},art:{bg:"#43e97b",text:"Искусство/San'at"},social:{bg:"#f5576c",text:"Социология/Jamiyat"},language:{bg:"#ffa502",text:"Язык/Til"}}[b]||{bg:"#667eea"},x=t==="uz"?b==="math"?"Matematika":b==="science"?"Fanlar":b==="tech"?"Texnologiya":b==="art"?"San'art":b==="social"?"Jamiyat":"Til":b==="math"?"Математика":b==="science"?"Наука":b==="tech"?"Технология":b==="art"?"Искусство":b==="social"?"Социология":"Язык";return`
                            <div style="background: linear-gradient(135deg, ${y.bg} 0%, ${y.bg}dd 100%); color: white; padding: 1.25rem; border-radius: 12px; text-align: center;">
                                <div style="font-size: 1.8rem; margin-bottom: 0.5rem;">
                                    ${b==="math"?"📐":b==="science"?"🧪":b==="tech"?"💻":b==="art"?"🎨":b==="social"?"👥":"📚"}
                                </div>
                                <div style="font-weight: 600; margin-bottom: 0.5rem;">${x}</div>
                                <div style="font-size: 1.3rem; font-weight: bold;">${Math.round(v)}%</div>
                            </div>
                        `}).join("")}
                </div>
            </div>
        `,p+=`
            <div class="card profile-section" style="padding: 1.5rem; margin-bottom: 2rem;">
                <h2 style="margin-top: 0; display: flex; align-items: center; gap: 0.5rem;">
                    📌 ${t==="uz"?"Qiziqish profili":"Профиль интересов"}
                </h2>
                <div style="display: grid; gap: 0.75rem;">
                    ${Object.entries(m).map(([b,v])=>`
                            <div style="display: grid; gap: 0.4rem;">
                                <div style="display: flex; justify-content: space-between; font-weight: 600; color: var(--text-primary);">
                                    <span>${{math:t==="uz"?"Matematika":"Математика",science:t==="uz"?"Fanlar":"Наука",tech:t==="uz"?"Texnologiya":"Технология",art:t==="uz"?"San'at":"Искусство",social:t==="uz"?"Jamiyat":"Социум",language:t==="uz"?"Til":"Язык"}[b]||b}</span>
                                    <span>${v}%</span>
                                </div>
                                <div style="height: 8px; background: var(--bg-tertiary); border-radius: 999px; overflow: hidden;">
                                    <div style="height: 100%; width: ${Math.min(Math.max(v,0),100)}%; background: linear-gradient(90deg, #3B82F6, #8B5CF6);"></div>
                                </div>
                            </div>
                        `).join("")}
                </div>
            </div>
        `),p+=`
        <div class="card profile-section" style="padding: 1.5rem; margin-bottom: 2rem;">
            <h2 style="margin-top: 0; display: flex; align-items: center; gap: 0.5rem;">
                📈 ${t==="uz"?"Fanlar bo'yicha dinamika":"Динамика по предметам"}
            </h2>
            <div style="position: relative; min-height: 280px;">
                <div id="adminStudentAnalyticsEmpty" class="card" style="padding: 1rem; text-align: center; color: var(--text-secondary);">${t==="uz"?"Ma'lumotlar mavjud emas":"Нет данных"}</div>
                <canvas id="adminStudentAnalyticsChart" style="max-height: 320px; width: 100%; display: none;"></canvas>
            </div>
        </div>
    `,d.length>0&&(p+=`
            <div class="card profile-section" style="padding: 1.5rem; margin-bottom: 2rem;">
                <h2 style="margin-top: 0; display: flex; align-items: center; gap: 0.5rem;">
                    📊 ${t==="uz"?"So'nggi natijalar":"Последние результаты"} (${t==="uz"?"Top 5":"Топ 5"})
                </h2>
                <div style="display: grid; gap: 0.75rem;">
                    ${d.map(b=>{const v=Math.round(b.correctCount/b.totalCount*100),w=v>=80?"#10b981":v>=50?"#f59e0b":"#ef4444",x=new Date(b.completedAt).toLocaleDateString(t==="uz"?"uz-UZ":"ru-RU");return`
                            <div style="display: flex; align-items: center; justify-content: space-between; padding: 1rem; background: var(--bg-secondary); border-radius: 10px; border-left: 4px solid ${w};">
                                <div style="flex: 1;">
                                    <div style="font-weight: 600; color: var(--text-primary); margin-bottom: 0.25rem;">${b.testName}</div>
                                    <div style="font-size: 0.85rem; color: var(--text-muted);">📅 ${x}</div>
                                </div>
                                <div style="text-align: right; margin-left: 1rem;">
                                    <div style="font-size: 1.5rem; font-weight: bold; color: ${w};">${v}%</div>
                                    <div style="font-size: 0.8rem; color: var(--text-muted);">${b.correctCount}/${b.totalCount}</div>
                                </div>
                            </div>
                        `}).join("")}
                </div>
            </div>
        `),l.length>0&&(p+=`
            <div class="card profile-section" style="padding: 1.5rem;">
                <h2 style="margin-top: 0; display: flex; align-items: center; gap: 0.5rem;">
                    📋 ${t==="uz"?"Barcha test natijalari":"История всех тестов"} (${l.length} ${t==="uz"?"test":"тестов"})
                </h2>
                <div style="overflow-x: auto;">
                    <table style="width: 100%; border-collapse: collapse; font-size: 0.95rem;">
                        <thead>
                            <tr style="background: var(--bg-tertiary); border-bottom: 2px solid var(--border);">
                                <th style="padding: 0.75rem; text-align: left; font-weight: 600;">${t==="uz"?"Test nomi":"Название теста"}</th>
                                <th style="padding: 0.75rem; text-align: center; font-weight: 600;">${t==="uz"?"Ball":"Балл"}</th>
                                <th style="padding: 0.75rem; text-align: center; font-weight: 600;">${t==="uz"?"Savol":"Вопросов"}</th>
                                <th style="padding: 0.75rem; text-align: center; font-weight: 600;">${t==="uz"?"To'g'ri":"Верно"}</th>
                                <th style="padding: 0.75rem; text-align: right; font-weight: 600;">${t==="uz"?"Sana":"Дата"}</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${l.map((b,v)=>{const w=Math.round(b.correctCount/b.totalCount*100),y=w>=80?"#10b981":w>=50?"#f59e0b":"#ef4444",z=new Date(b.completedAt).toLocaleDateString(t==="uz"?"uz-UZ":"ru-RU",{month:"short",day:"numeric"});return`
                                    <tr style="border-bottom: 1px solid var(--border); transition: background 0.2s;" onmouseover="this.style.background='var(--bg-tertiary)'" onmouseout="this.style.background='transparent'">
                                        <td style="padding: 0.75rem; color: var(--text-primary);">${b.testName}</td>
                                        <td style="padding: 0.75rem; text-align: center;">
                                            <span style="color: ${y}; font-weight: bold; font-size: 1.1rem;">${w}%</span>
                                        </td>
                                        <td style="padding: 0.75rem; text-align: center; color: var(--text-muted);">${b.totalCount}</td>
                                        <td style="padding: 0.75rem; text-align: center;">
                                            <span style="color: #10b981; font-weight: 600;">${b.correctCount}</span>
                                        </td>
                                        <td style="padding: 0.75rem; text-align: right; color: var(--text-muted); font-size: 0.9rem;">${z}</td>
                                    </tr>
                                `}).join("")}
                        </tbody>
                    </table>
                </div>
            </div>
        `),document.getElementById("studentDetailContainer").innerHTML=p,a.success){const b=Ai(a.data,t==="uz"?"O'rtacha ball":"Средний балл");zi("adminStudentAnalyticsChart","adminStudentAnalyticsEmpty",b)}}async function lh(e){var s;const i=`
        <div style="margin-bottom: 1rem;">
            <button class="button button-secondary" id="btnBackToAdminDashboard2">
                ← ${k.getState().language==="uz"?"Orqaga":"Назад"}
            </button>
        </div>
        
        <div id="teacherDetailContainer">
            <div class="loading"><div class="spinner"></div></div>
        </div>
    `;F(i,"admin"),(s=document.getElementById("btnBackToAdminDashboard2"))==null||s.addEventListener("click",()=>{_.navigate("/admin/dashboard")}),await dh(e)}async function dh(e){const t=k.getState().language,[i,s,n,a]=await Promise.all([A(`/api/users/${e}`),A("/api/tests"),A(`/api/analytics/teachers/${e}/subjects`),A("/api/classes")]);if(!i.success){document.getElementById("teacherDetailContainer").innerHTML=`
            <div class="card" style="text-align: center; padding: 3rem;">
                <p style="color: #ef4444;">${t==="uz"?"O'qituvchi topilmadi":"Учитель не найден"}</p>
            </div>
        `;return}const r=i.data,o=n.success?n.data:[],l=s.data||[],d=a.success?a.data:[],c=l.filter(p=>p.createdBy===e),u=`${r.firstName} ${r.lastName}`,h=Array.isArray(r.subjects)?r.subjects:[],g=d.filter(p=>p.teacherId===e);let m=`
        <style>
            @keyframes slideInUp {
                from { opacity: 0; transform: translateY(20px); }
                to { opacity: 1; transform: translateY(0); }
            }
            .profile-section { animation: slideInUp 0.5s ease-out; }
        </style>
        
        <!-- Profile Header -->
        <div class="card profile-section" style="background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%); color: white; padding: 2rem; text-align: center; margin-bottom: 2rem; border-radius: 20px;">
            <div style="width: 100px; height: 100px; border-radius: 50%; background: rgba(255,255,255,0.2); display: flex; align-items: center; justify-content: center; margin: 0 auto 1rem; border: 3px solid rgba(255,255,255,0.4); font-size: 3rem;">
                ${u.charAt(0).toUpperCase()}
            </div>
            <h1 style="margin: 0 0 0.5rem 0; font-size: 1.8rem; font-weight: 800;">${u}</h1>
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(120px, 1fr)); gap: 1.5rem; margin-top: 1.5rem; padding-top: 1.5rem; border-top: 1px solid rgba(255,255,255,0.2);">
                <div>
                    <div style="font-size: 0.85rem; opacity: 0.9;">ID</div>
                    <div style="font-size: 1rem; font-weight: 600; margin-top: 0.25rem; font-family: monospace;">${r.username}</div>
                </div>
                <div>
                    <div style="font-size: 0.85rem; opacity: 0.9;">👨‍🏫</div>
                    <div style="font-size: 1rem; font-weight: 600; margin-top: 0.25rem;">${t==="uz"?"O'qituvchi":"Учитель"}</div>
                </div>
            </div>
        </div>
        
        <!-- Statistics -->
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(160px, 1fr)); gap: 1rem; margin-bottom: 2rem;">
            <div class="card profile-section" style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 1.5rem; border-radius: 16px; text-align: center;">
                <div style="font-size: 2.5rem; font-weight: bold; margin-bottom: 0.5rem;">${h.length}</div>
                <div style="font-size: 0.85rem; opacity: 0.9;">${t==="uz"?"Fanlar":"Предметы"}</div>
            </div>
            <div class="card profile-section" style="background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%); color: white; padding: 1.5rem; border-radius: 16px; text-align: center;">
                <div style="font-size: 2.5rem; font-weight: bold; margin-bottom: 0.5rem;">${c.length}</div>
                <div style="font-size: 0.85rem; opacity: 0.9;">${t==="uz"?"Testlar tuzildi":"Создано тестов"}</div>
            </div>
        </div>
    `;h.length>0&&(m+=`
            <div class="card profile-section" style="padding: 1.5rem; margin-bottom: 2rem;">
                <h2 style="margin-top: 0; display: flex; align-items: center; gap: 0.5rem;">
                    📚 ${t==="uz"?"O'qitadigan fanlar":"Преподаваемые предметы"}
                </h2>
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 1rem;">
                    ${h.map((p,f)=>{const b=["#667eea","#f093fb","#4facfe","#43e97b","#f5576c","#ffa502"],v=b[f%b.length],w=p.name||p,y=["📐","🔬","⚗️","🧬","📜","📖"],x=y[f%y.length];return`
                            <div style="background: linear-gradient(135deg, ${v} 0%, ${v}dd 100%); color: white; padding: 1.5rem; border-radius: 12px; text-align: center;">
                                <div style="font-size: 2rem; margin-bottom: 0.75rem;">${x}</div>
                                <div style="font-weight: 600;">${typeof p=="string"?p:w}</div>
                            </div>
                        `}).join("")}
                </div>
            </div>
        `),g.length>0&&(m+=`
            <div class="card profile-section" style="padding: 1.5rem; margin-bottom: 2rem;">
                <h2 style="margin-top: 0; display: flex; align-items: center; gap: 0.5rem;">
                    🏫 ${t==="uz"?"Biriktirilgan sinflar":"Закрепленные классы"}
                </h2>
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(140px, 1fr)); gap: 0.75rem;">
                    ${g.map(p=>{var v;const f=p.name?`${p.grade||""}${p.name}`:(v=p.sections)!=null&&v.length?`${p.grade||""} (${p.sections.join(", ")})`:p.grade||"—",b=p.studentCount??0;return`
                            <div style="padding: 0.9rem; border-radius: 12px; border: 1px solid var(--border-color); background: var(--bg-secondary); display: grid; gap: 0.25rem;">
                                <div style="font-weight: 700; color: var(--text-primary);">${f}</div>
                                <div style="font-size: 0.85rem; color: var(--text-muted);">${b} ${t==="uz"?"o'quvchi":"учеников"}</div>
                            </div>
                        `}).join("")}
                </div>
            </div>
        `),o.length>0&&(m+=`
            <div class="card profile-section" style="padding: 1.5rem; margin-bottom: 2rem;">
                <h2 style="margin-top: 0; display: flex; align-items: center; gap: 0.5rem;">
                    📊 ${t==="uz"?"Fanlar bo'yicha natijalar":"Результаты по предметам"}
                </h2>
                <div style="display: grid; gap: 0.75rem;">
                    ${o.map(p=>`
                        <div style="display: flex; justify-content: space-between; align-items: center; padding: 0.9rem; background: var(--bg-secondary); border-radius: 10px; border-left: 4px solid #3B82F6;">
                            <div style="font-weight: 600; color: var(--text-primary);">${p.subjectName}</div>
                            <div style="text-align: right;">
                                <div style="font-weight: 700; color: #3B82F6;">${p.averageScore}%</div>
                                <div style="font-size: 0.8rem; color: var(--text-muted);">${p.testsCompleted} ${t==="uz"?"natija":"результатов"}</div>
                            </div>
                        </div>
                    `).join("")}
                </div>
            </div>
        `),c.length>0&&(m+=`
            <div class="card profile-section" style="padding: 1.5rem;">
                <h2 style="margin-top: 0; display: flex; align-items: center; gap: 0.5rem;">
                    📚 ${t==="uz"?"Barcha tuzilgan testlar":"История всех созданных тестов"} (${c.length} ${t==="uz"?"test":"тестов"})
                </h2>
                <div style="overflow-x: auto;">
                    <table style="width: 100%; border-collapse: collapse; font-size: 0.95rem;">
                        <thead>
                            <tr style="background: var(--bg-tertiary); border-bottom: 2px solid var(--border);">
                                <th style="padding: 0.75rem; text-align: left; font-weight: 600;">${t==="uz"?"Test nomi":"Название теста"}</th>
                                <th style="padding: 0.75rem; text-align: center; font-weight: 600;">${t==="uz"?"Savollar":"Вопросы"}</th>
                                <th style="padding: 0.75rem; text-align: center; font-weight: 600;">${t==="uz"?"Turi":"Тип"}</th>
                                <th style="padding: 0.75rem; text-align: right; font-weight: 600;">${t==="uz"?"Sana":"Дата"}</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${c.map((p,f)=>{var x;const v=new Date(p.createdAt||p.updatedAt).toLocaleDateString(t==="uz"?"uz-UZ":"ru-RU",{month:"short",day:"numeric",year:"2-digit"}),w=p.testType||(t==="uz"?"Standart":"Стандарт");return`
                                    <tr style="border-bottom: 1px solid var(--border); transition: background 0.2s;" onmouseover="this.style.background='var(--bg-tertiary)'" onmouseout="this.style.background='transparent'">
                                        <td style="padding: 0.75rem; color: var(--text-primary);">${p.name||p.testName||(t==="uz"?"Номи келмаган тест":"Тест без названия")}</td>
                                        <td style="padding: 0.75rem; text-align: center;">
                                            <span style="background: var(--bg-tertiary); padding: 0.25rem 0.75rem; border-radius: 8px; font-weight: 600; color: #667eea;">${((x=p.questions)==null?void 0:x.length)||p.questionCount||0}</span>
                                        </td>
                                        <td style="padding: 0.75rem; text-align: center; color: var(--text-muted);">${w}</td>
                                        <td style="padding: 0.75rem; text-align: right; color: var(--text-muted); font-size: 0.9rem;">${v}</td>
                                    </tr>
                                `}).join("")}
                        </tbody>
                    </table>
                </div>
            </div>
        `),document.getElementById("teacherDetailContainer").innerHTML=m}async function ch(){var i,s;const e=k.getState().language,t=`
        <style>
            .teacher-tests-hero {
                background: linear-gradient(135deg, rgba(245, 158, 11, 0.16) 0%, rgba(124, 58, 237, 0.12) 100%);
                border: 1px solid rgba(245, 158, 11, 0.28);
                border-radius: 18px;
                padding: 1.5rem;
                display: flex;
                justify-content: space-between;
                align-items: center;
                gap: 1rem;
                flex-wrap: wrap;
            }
            .teacher-tests-hero__title {
                margin: 0;
                font-size: 2.1rem;
                font-weight: 800;
                color: var(--text-primary);
            }
            .teacher-tests-hero__desc {
                margin: 0.5rem 0 0 0;
                color: var(--text-secondary);
                font-size: 0.95rem;
            }
            .teacher-tests-hero__meta {
                display: flex;
                gap: 0.75rem;
                flex-wrap: wrap;
                align-items: center;
            }
            .teacher-tests-pill {
                padding: 0.45rem 0.9rem;
                border-radius: 999px;
                background: rgba(245, 158, 11, 0.16);
                color: #fde68a;
                border: 1px solid rgba(245, 158, 11, 0.4);
                font-weight: 600;
                font-size: 0.8rem;
            }
            .teacher-tests-panel {
                background: var(--bg-secondary);
                border: 1px solid var(--border-color);
                border-radius: 16px;
                padding: 1.25rem;
                display: grid;
                gap: 1rem;
            }
            @media (max-width: 768px) {
                .teacher-tests-hero { padding: 1.25rem; }
                .teacher-tests-hero__title { font-size: 1.75rem; }
            }
            @media (max-width: 420px) {
                .teacher-tests-hero { padding: 1rem; border-radius: 14px; }
                .teacher-tests-hero__title { font-size: 1.5rem; }
                .teacher-tests-hero__desc { font-size: 0.85rem; }
            }
        </style>
        <div style="display: grid; gap: 1.5rem;">
            <div class="teacher-tests-hero">
                <div>
                    <h1 class="teacher-tests-hero__title">${e==="uz"?"O'qituvchilar uchun testlar":"Тесты для учителей"}</h1>
                    <p class="teacher-tests-hero__desc">${e==="uz"?"O'qituvchilarning malakasini baholash uchun testlar yaratish va boshqarish":"Создание и управление тестами для оценки компетенций учителей"}</p>
                </div>
                <div class="teacher-tests-hero__meta">
                    <button class="btn-secondary" id="btnBackToAdmin" style="padding: 0.7rem 1.2rem; font-size: 0.9rem; border: 1px solid var(--border-color);">← ${E("back")}</button>
                    <span class="teacher-tests-pill">${e==="uz"?"Testlar":"Тесты"}</span>
                </div>
            </div>

            <div class="teacher-tests-panel">
                <button class="button button-primary" id="btnCreateTeacherTest" style="width: 100%;">
                    <span>➕</span>
                    <span>${e==="uz"?"Yangi test yaratish":"Создать новый тест"}</span>
                </button>
            </div>

            <div class="teacher-tests-panel" style="overflow: hidden;">
                <h2 style="margin: 0 0 1.25rem 0;">${e==="uz"?"Mavjud testlar":"Существующие тесты"}</h2>
                <div id="teacherTestsList">
                    <div class="loading"><div class="spinner"></div></div>
                </div>
            </div>
        </div>
    `;F(t,"admin"),(i=document.getElementById("btnBackToAdmin"))==null||i.addEventListener("click",()=>{window.router.navigate("/admin/dashboard")}),(s=document.getElementById("btnCreateTeacherTest"))==null||s.addEventListener("click",()=>{uh()}),await Is()}async function Is(){const e=k.getState().language,t=document.getElementById("teacherTestsList");if(!t){console.error("teacherTestsList container not found");return}try{console.log("Loading teacher tests...");const i=await A("/api/teacher-tests");if(console.log("Teacher tests response:",i),!i.success||!i.data||i.data.length===0){t.innerHTML=`
                <div style="text-align: center; padding: 3rem; color: var(--text-muted);">
                    <div style="font-size: 4rem; margin-bottom: 1rem; opacity: 0.3;">📝</div>
                    <p>${e==="uz"?"Hali testlar yaratilmagan":"Тесты еще не созданы"}</p>
                </div>
            `;return}const s=i.data;console.log("Rendering",s.length,"tests"),t.innerHTML=s.map(n=>`
            <div class="card" style="margin-bottom: 1rem; border-left: 4px solid var(--primary); overflow: hidden;">
                <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: 1rem;">
                    <div style="flex: 1;">
                        <h3 style="margin: 0 0 0.5rem 0;">${n.title}</h3>
                        <p style="color: var(--text-muted); margin: 0 0 0.5rem 0;">${n.description}</p>
                        <div style="display: flex; gap: 1rem; font-size: 0.9rem; color: var(--text-muted);">
                            <span>📝 ${n.questionsCount||0} ${e==="uz"?"ta savol":"вопросов"}</span>
                            <span>⏱️ ${n.duration||30} ${e==="uz"?"daqiqa":"минут"}</span>
                            <span>📅 ${new Date(n.createdAt).toLocaleDateString("ru-RU")}</span>
                        </div>
                    </div>
                    <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
                        <button class="button button-secondary button-inline" onclick="viewTeacherTestResults('${n._id}')" style="padding: 0.5rem 1rem;">
                            <span>📊</span>
                            <span>${e==="uz"?"Natijalar":"Результаты"}</span>
                        </button>
                        <button class="button button-primary button-inline" onclick="assignTestToTeachers('${n._id}')" style="padding: 0.5rem 1rem;">
                            <span>👥</span>
                            <span>${e==="uz"?"Tayinlash":"Назначить"}</span>
                        </button>
                        <button class="button button-inline" onclick="deleteTeacherTest('${n._id}')" style="padding: 0.5rem 1rem; background: #ef4444; color: white; display: inline-flex; align-items: center; gap: 0.5rem;">
                            <span>🗑️</span>
                            <span class="delete-text">${e==="uz"?"O'chirish":"Удалить"}</span>
                        </button>
                    </div>
                </div>
            </div>
        `).join("")}catch(i){console.error("Error loading teacher tests:",i),t.innerHTML=`
            <div style="text-align: center; padding: 2rem; color: #ef4444;">
                <p>${e==="uz"?"Xatolik yuz berdi":"Произошла ошибка"}</p>
            </div>
        `}}function uh(){const e=k.getState().language,t=document.createElement("div");t.className="modal",t.innerHTML=`
        <div class="modal-content" style="max-width: 800px; max-height: 90vh; overflow-y: auto;">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.5rem;">
                <h2 style="margin: 0;">${e==="uz"?"Yangi test yaratish":"Создать новый тест"}</h2>
                <button class="modal-close" id="closeModal">✕</button>
            </div>
            
            <form id="createTeacherTestForm" style="display: grid; gap: 1rem;">
                <div>
                    <label class="form-label">${e==="uz"?"Test nomi":"Название теста"}</label>
                    <input type="text" name="title" class="form-input" required placeholder="${e==="uz"?"Test nomini kiriting":"Введите название теста"}">
                </div>
                
                <div>
                    <label class="form-label">${e==="uz"?"Ta'rif":"Описание"}</label>
                    <textarea name="description" class="form-input" rows="3" placeholder="${e==="uz"?"Test haqida qisqacha ma'lumot":"Краткое описание теста"}"></textarea>
                </div>
                
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
                    <div>
                        <label class="form-label">${e==="uz"?"Davomiyligi (daqiqa)":"Длительность (минуты)"}</label>
                        <input type="number" name="duration" class="form-input" value="30" min="5" max="180">
                    </div>
                    <div>
                        <label class="form-label">${e==="uz"?"O'tish bali (%)":"Проходной балл (%)"}</label>
                        <input type="number" name="passingScore" class="form-input" value="70" min="0" max="100">
                    </div>
                </div>
                
                <div>
                    <label class="form-label">${e==="uz"?"Savollar":"Вопросы"}</label>
                    <div id="questionsContainer" style="display: grid; gap: 1rem;">
                        <!-- Questions will be added here -->
                    </div>
                    <button type="button" class="button button-secondary" id="btnAddQuestion" style="margin-top: 0.5rem;">
                        <span>➕</span>
                        <span>${e==="uz"?"Savol qo'shish":"Добавить вопрос"}</span>
                    </button>
                </div>
                
                <div style="display: flex; gap: 1rem; justify-content: flex-end; margin-top: 1rem;">
                    <button type="button" class="button button-secondary" id="btnCancelCreate">${e==="uz"?"Bekor qilish":"Отмена"}</button>
                    <button type="submit" class="button button-primary">${e==="uz"?"Saqlash":"Сохранить"}</button>
                </div>
            </form>
        </div>
    `,document.body.appendChild(t),setTimeout(()=>t.classList.add("show"),10),mt=0,oa(),document.getElementById("btnAddQuestion").addEventListener("click",oa),document.getElementById("closeModal").addEventListener("click",()=>{t.classList.remove("show"),setTimeout(()=>t.remove(),300)}),document.getElementById("btnCancelCreate").addEventListener("click",()=>{t.classList.remove("show"),setTimeout(()=>t.remove(),300)}),document.getElementById("createTeacherTestForm").addEventListener("submit",async i=>{i.preventDefault(),await hh(new FormData(i.target),t)})}let mt=0;function oa(){const e=k.getState().language,t=document.getElementById("questionsContainer");mt++;const i=document.createElement("div");i.className="card",i.style.background="var(--bg-secondary)",i.innerHTML=`
        <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: 1rem; gap: 0.5rem;">
            <h4 style="margin: 0;">${e==="uz"?"Savol":"Вопрос"} ${mt}</h4>
            <button type="button" onclick="this.closest('.card').remove()" style="padding: 0.5rem 0.75rem; background: #ef4444; color: white; border-radius: 8px; display: inline-flex; align-items: center; gap: 0.5rem; font-size: 0.9rem; border: none; cursor: pointer; transition: all 0.3s; width: auto; min-width: 0; flex: 0 0 auto;" onmouseover="this.style.background='#dc2626'" onmouseout="this.style.background='#ef4444'" aria-label="Удалить вопрос">
                <span>🗑️</span>
            </button>
        </div>
        
        <div style="display: grid; gap: 0.75rem;">
            <input type="text" name="question_${mt}_text" class="form-input" required placeholder="${e==="uz"?"Savol matni":"Текст вопроса"}">
            
            <div style="display: grid; gap: 0.5rem;">
                <div style="display: flex; gap: 0.5rem; align-items: center;">
                    <input type="radio" name="question_${mt}_correct" value="0" required>
                    <input type="text" name="question_${mt}_option_0" class="form-input" required placeholder="${e==="uz"?"Variant A":"Вариант A"}" style="flex: 1;">
                </div>
                <div style="display: flex; gap: 0.5rem; align-items: center;">
                    <input type="radio" name="question_${mt}_correct" value="1" required>
                    <input type="text" name="question_${mt}_option_1" class="form-input" required placeholder="${e==="uz"?"Variant B":"Вариант B"}" style="flex: 1;">
                </div>
                <div style="display: flex; gap: 0.5rem; align-items: center;">
                    <input type="radio" name="question_${mt}_correct" value="2" required>
                    <input type="text" name="question_${mt}_option_2" class="form-input" required placeholder="${e==="uz"?"Variant C":"Вариант C"}" style="flex: 1;">
                </div>
                <div style="display: flex; gap: 0.5rem; align-items: center;">
                    <input type="radio" name="question_${mt}_correct" value="3" required>
                    <input type="text" name="question_${mt}_option_3" class="form-input" required placeholder="${e==="uz"?"Variant D":"Вариант D"}" style="flex: 1;">
                </div>
            </div>
            <p style="margin: 0; font-size: 0.85rem; color: var(--text-muted);">
                ${e==="uz"?"To'g'ri javobni belgilang":"Отметьте правильный ответ"}
            </p>
        </div>
    `,t.appendChild(i)}async function hh(e,t){const i=k.getState().language;console.log("Creating teacher test..."),console.log("questionCounter:",mt);try{const s={title:e.get("title"),description:e.get("description"),duration:parseInt(e.get("duration")),passingScore:parseInt(e.get("passingScore")),questions:[]};console.log("Test data basic:",s);for(let a=1;a<=mt;a++){const r=e.get(`question_${a}_text`);if(console.log(`Question ${a}:`,r),r){const o={text:r,options:[e.get(`question_${a}_option_0`),e.get(`question_${a}_option_1`),e.get(`question_${a}_option_2`),e.get(`question_${a}_option_3`)],correctAnswer:parseInt(e.get(`question_${a}_correct`))};console.log(`Parsed question ${a}:`,o),s.questions.push(o)}}if(console.log("Total questions parsed:",s.questions.length),console.log("Full testData:",s),s.questions.length===0){await D(i==="uz"?"Kamida bitta savol qo'shing":"Добавьте хотя бы один вопрос","warning");return}const n=await A("/api/teacher-tests","POST",s);if(console.log("Create test response:",n),n.success)t.classList.remove("show"),setTimeout(()=>t.remove(),300),console.log("Test created successfully, reloading list..."),await Is(),await D(i==="uz"?"Test muvaffaqiyatli yaratildi":"Тест успешно создан","success");else throw new Error(n.error)}catch(s){console.error("Error creating teacher test:",s),await D(i==="uz"?"Xatolik yuz berdi":"Произошла ошибка","error")}}async function gh(e){var i,s;const t=k.getState().language;try{const a=(await A(`/api/teacher-tests/${e}`)).data,o=(await A(`/api/teacher-test-results/${e}`)).data||[],l=document.createElement("div");l.className="modal",l.innerHTML=`
            <div class="modal-content" style="max-width: 900px; max-height: 90vh; overflow-y: auto;">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.5rem; position: sticky; top: 0; background: var(--bg-primary); padding-bottom: 1rem; border-bottom: 2px solid var(--border-color); z-index: 10;">
                    <div>
                        <h2 style="margin: 0 0 0.5rem 0;">${t==="uz"?"Test natijalari":"Результаты теста"}</h2>
                        <h4 style="margin: 0; color: var(--text-muted); font-weight: normal;">${a.title}</h4>
                    </div>
                    <button class="modal-close" id="closeResultsModal">✕</button>
                </div>
                
                ${o.length===0?`
                    <div style="text-align: center; padding: 3rem; color: var(--text-muted);">
                        <div style="font-size: 4rem; margin-bottom: 1rem; opacity: 0.3;">📊</div>
                        <p>${t==="uz"?"Hali natijalar yo'q":"Результаты еще не доступны"}</p>
                    </div>
                `:`
                    <!-- Statistics -->
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem; margin-bottom: 2rem;">
                        <div class="card" style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; text-align: center; padding: 1.5rem;">
                            <div style="font-size: 2.5rem; font-weight: bold; margin-bottom: 0.5rem;">${o.length}</div>
                            <div style="opacity: 0.9;">${t==="uz"?"Jami ishtirokchilar":"Всего участников"}</div>
                        </div>
                        <div class="card" style="background: linear-gradient(135deg, #10b981 0%, #059669 100%); color: white; text-align: center; padding: 1.5rem;">
                            <div style="font-size: 2.5rem; font-weight: bold; margin-bottom: 0.5rem;">${o.filter(d=>d.passed).length}</div>
                            <div style="opacity: 0.9;">${t==="uz"?"O'tdi":"Сдали"}</div>
                        </div>
                        <div class="card" style="background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%); color: white; text-align: center; padding: 1.5rem;">
                            <div style="font-size: 2.5rem; font-weight: bold; margin-bottom: 0.5rem;">${o.filter(d=>!d.passed).length}</div>
                            <div style="opacity: 0.9;">${t==="uz"?"O'tmadi":"Не сдали"}</div>
                        </div>
                        <div class="card" style="background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%); color: white; text-align: center; padding: 1.5rem;">
                            <div style="font-size: 2.5rem; font-weight: bold; margin-bottom: 0.5rem;">
                                ${o.length>0?Math.round(o.reduce((d,c)=>d+c.score,0)/o.length):0}%
                            </div>
                            <div style="opacity: 0.9;">${t==="uz"?"O'rtacha ball":"Средний балл"}</div>
                        </div>
                    </div>
                    
                    <!-- Results Table -->
                    <div class="card">
                        <h3 style="margin: 0 0 1rem 0;">${t==="uz"?"Batafsil natijalar":"Детальные результаты"}</h3>
                        <div style="overflow-x: auto;">
                            <table style="width: 100%; border-collapse: collapse;">
                                <thead>
                                    <tr style="background: var(--bg-secondary); text-align: left;">
                                        <th style="padding: 1rem; border-bottom: 2px solid var(--border-color);">#</th>
                                        <th style="padding: 1rem; border-bottom: 2px solid var(--border-color);">${t==="uz"?"O'qituvchi":"Учитель"}</th>
                                        <th style="padding: 1rem; border-bottom: 2px solid var(--border-color);">${t==="uz"?"Ball":"Балл"}</th>
                                        <th style="padding: 1rem; border-bottom: 2px solid var(--border-color);">${t==="uz"?"Holat":"Статус"}</th>
                                        <th style="padding: 1rem; border-bottom: 2px solid var(--border-color);">${t==="uz"?"Sana":"Дата"}</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    ${o.sort((d,c)=>c.score-d.score).map((d,c)=>{var u,h,g;return`
                                        <tr style="border-bottom: 1px solid var(--border-color);">
                                            <td style="padding: 1rem;">${c+1}</td>
                                            <td style="padding: 1rem;">
                                                <div style="font-weight: 600;">${((u=d.teacher)==null?void 0:u.firstName)||""} ${((h=d.teacher)==null?void 0:h.lastName)||""}</div>
                                                <div style="font-size: 0.85rem; color: var(--text-muted);">${((g=d.teacher)==null?void 0:g.username)||""}</div>
                                            </td>
                                            <td style="padding: 1rem;">
                                                <div style="display: flex; align-items: center; gap: 0.5rem;">
                                                    <div style="flex: 1; max-width: 100px; height: 8px; background: var(--bg-secondary); border-radius: 4px; overflow: hidden;">
                                                        <div style="height: 100%; background: ${d.passed?"#10b981":"#ef4444"}; width: ${d.score}%;"></div>
                                                    </div>
                                                    <span style="font-weight: 600; min-width: 50px;">${d.score}%</span>
                                                </div>
                                            </td>
                                            <td style="padding: 1rem;">
                                                <span style="padding: 0.25rem 0.75rem; border-radius: 12px; font-size: 0.85rem; font-weight: 600; background: ${d.passed?"#10b981":"#ef4444"}; color: white;">
                                                    ${d.passed?t==="uz"?"O'tdi":"Сдан":t==="uz"?"O'tmadi":"Не сдан"}
                                                </span>
                                            </td>
                                            <td style="padding: 1rem; color: var(--text-muted); font-size: 0.9rem;">
                                                ${new Date(d.completedAt).toLocaleDateString("ru-RU")}
                                                <br>
                                                ${new Date(d.completedAt).toLocaleTimeString("ru-RU",{hour:"2-digit",minute:"2-digit"})}
                                            </td>
                                        </tr>
                                    `}).join("")}
                                </tbody>
                            </table>
                        </div>
                    </div>
                `}
                
                <div style="display: flex; justify-content: flex-end; margin-top: 1.5rem;">
                    <button class="button button-secondary" id="btnCloseResults">${t==="uz"?"Yopish":"Закрыть"}</button>
                </div>
            </div>
        `,document.body.appendChild(l),setTimeout(()=>l.classList.add("show"),10),(i=document.getElementById("closeResultsModal"))==null||i.addEventListener("click",()=>{l.classList.remove("show"),setTimeout(()=>l.remove(),300)}),(s=document.getElementById("btnCloseResults"))==null||s.addEventListener("click",()=>{l.classList.remove("show"),setTimeout(()=>l.remove(),300)})}catch(n){console.error("Error viewing results:",n),await D(t==="uz"?"Xatolik yuz berdi":"Произошла ошибка","error")}}async function mh(e){var i,s,n;const t=k.getState().language;try{const a=await A("/api/users");if(!a.success)throw new Error("Failed to load teachers");const r=a.data.filter(u=>u.role==="teacher");if(r.length===0){await D(t==="uz"?"O'qituvchilar topilmadi":"Учителя не найдены","warning");return}const l=(await A(`/api/teacher-tests/${e}`)).data,d=l.assignedTo||[],c=document.createElement("div");c.className="modal",c.innerHTML=`
            <div class="modal-content" style="max-width: 600px;">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.5rem;">
                    <h2 style="margin: 0;">${t==="uz"?"Testni tayinlash":"Назначить тест"}</h2>
                    <button class="modal-close" id="closeAssignModal">✕</button>
                </div>
                
                <div style="margin-bottom: 1.5rem;">
                    <h4 style="margin: 0 0 0.5rem 0;">${l.title}</h4>
                    <p style="color: var(--text-muted); margin: 0; font-size: 0.9rem;">${l.description}</p>
                </div>
                
                <form id="assignTestForm" style="display: grid; gap: 1rem;">
                    <div>
                        <label class="form-label">${t==="uz"?"O'qituvchilarni tanlang":"Выберите учителей"}</label>
                        <div style="max-height: 300px; overflow-y: auto; border: 1px solid var(--border-color); border-radius: 8px; padding: 1rem;">
                            ${r.map(u=>`
                                <label style="display: flex; align-items: center; gap: 0.75rem; padding: 0.75rem; border-radius: 6px; cursor: pointer; transition: background 0.2s;" class="teacher-checkbox-label">
                                    <input type="checkbox" name="teachers" value="${u._id}" ${d.includes(u._id)?"checked":""} style="width: 18px; height: 18px; accent-color: var(--primary);">
                                    <div style="flex: 1;">
                                        <div style="font-weight: 600;">${u.firstName} ${u.lastName}</div>
                                        <div style="font-size: 0.85rem; color: var(--text-muted);">${u.username}</div>
                                    </div>
                                </label>
                            `).join("")}
                        </div>
                    </div>
                    
                    <div style="display: flex; gap: 1rem; justify-content: flex-end; margin-top: 1rem;">
                        <button type="button" class="button button-secondary" id="btnCancelAssign">${t==="uz"?"Bekor qilish":"Отмена"}</button>
                        <button type="submit" class="button button-primary">${t==="uz"?"Tayinlash":"Назначить"}</button>
                    </div>
                </form>
            </div>
        `,document.body.appendChild(c),setTimeout(()=>c.classList.add("show"),10),c.querySelectorAll(".teacher-checkbox-label").forEach(u=>{u.addEventListener("mouseenter",()=>{u.style.background="var(--bg-secondary)"}),u.addEventListener("mouseleave",()=>{u.style.background="transparent"})}),(i=document.getElementById("closeAssignModal"))==null||i.addEventListener("click",()=>{c.classList.remove("show"),setTimeout(()=>c.remove(),300)}),(s=document.getElementById("btnCancelAssign"))==null||s.addEventListener("click",()=>{c.classList.remove("show"),setTimeout(()=>c.remove(),300)}),(n=document.getElementById("assignTestForm"))==null||n.addEventListener("submit",async u=>{u.preventDefault();const g=new FormData(u.target).getAll("teachers");if(g.length===0){await D(t==="uz"?"Kamida bitta o'qituvchi tanlang":"Выберите хотя бы одного учителя","warning");return}try{const m=await A(`/api/teacher-tests/${e}/assign`,"POST",{teacherIds:g});if(m.success)c.classList.remove("show"),setTimeout(()=>c.remove(),300),await D(t==="uz"?"Test muvaffaqiyatli tayinlandi":"Тест успешно назначен","success");else throw new Error(m.error)}catch(m){console.error("Error assigning test:",m),await D(t==="uz"?"Xatolik yuz berdi":"Произошла ошибка","error")}})}catch(a){console.error("Error loading teachers:",a),await D(t==="uz"?"Xatolik yuz berdi":"Произошла ошибка","error")}}async function ph(e){const t=k.getState().language;if(await pe(t==="uz"?"Testni o'chirmoqchimisiz?":"Удалить тест?",t==="uz"?"O'chirish":"Удаление"))try{const s=await A(`/api/teacher-tests/${e}`,"DELETE");if(s.success)await Is(),await D(t==="uz"?"Test o'chirildi":"Тест удален","success");else throw new Error(s.error)}catch(s){console.error("Error deleting test:",s),await D(t==="uz"?"Xatolik yuz berdi":"Произошла ошибка","error")}}async function fh(){var s;const e=k.getState().user,t=k.getState().language;if(!e){_.navigate("/login");return}F(`
        <div class="page-header">
            <div class="page-header-title">
                <h1>📋 ${t==="uz"?"Mening testlarim":"Мои тесты"}</h1>
                <p class="page-header-subtitle">${t==="uz"?"Sizga tayinlangan malaka baholash testlari":"Назначенные вам тесты на оценку компетенций"}</p>
            </div>
            <div class="page-header-actions">
                <button class="back-button back-button--compact" id="btnBackToTeacher">
                    <span>←</span>
                    <span>${t==="uz"?"Orqaga":"Назад"}</span>
                </button>
            </div>
        </div>
        
        <div class="card">
            <div id="teacherMyTestsList">
                <div class="loading"><div class="spinner"></div></div>
            </div>
        </div>
    `,"teacher"),(s=document.getElementById("btnBackToTeacher"))==null||s.addEventListener("click",()=>{_.navigate("/teacher/subjects")}),await bh()}async function bh(){const e=k.getState().user,t=k.getState().language,i=document.getElementById("teacherMyTestsList");console.log("👤 Current user:",e);const s=(e==null?void 0:e._id)||(e==null?void 0:e.id)||(e==null?void 0:e.userId);if(console.log("🆔 User ID:",s),!s){console.error("❌ User ID not found in user object:",e),await D(t==="uz"?"Foydalanuvchi ma'lumotlari topilmadi":"Информация о пользователе не найдена","error"),_.navigate("/login");return}try{const n=await A(`/api/teacher-tests/assigned/${s}`),a=await A(`/api/teacher-test-results/teacher/${s}`),o=(a.success?a.data:[]).reduce((d,c)=>{const u=d[c.testId];return(!u||new Date(c.completedAt)>new Date(u.completedAt))&&(d[c.testId]=c),d},{});if(!n.success||!n.data||n.data.length===0){i.innerHTML=`
                <div style="text-align: center; padding: 3rem; color: var(--text-muted);">
                    <div style="font-size: 4rem; margin-bottom: 1rem; opacity: 0.3;">📝</div>
                    <p>${t==="uz"?"Sizga hali testlar tayinlanmagan":"Вам еще не назначены тесты"}</p>
                </div>
            `;return}const l=n.data;i.innerHTML=l.map(d=>{var g;const c=o[d._id],u=c==null?void 0:c.passed,h=(c==null?void 0:c.score)||0;return`
                <div class="card" style="margin-bottom: 1rem; border-left: 4px solid ${u?"#10b981":c?"#ef4444":"var(--primary)"};">
                    <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: 1rem;">
                        <div style="flex: 1;">
                            <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.5rem;">
                                <h3 style="margin: 0;">${d.title}</h3>
                                ${c?`
                                    <span style="padding: 0.25rem 0.75rem; border-radius: 12px; font-size: 0.85rem; font-weight: 600; background: ${u?"#10b981":"#ef4444"}; color: white;">
                                        ${u?t==="uz"?"O'tdi":"Сдан":t==="uz"?"O'tmadi":"Не сдан"}
                                    </span>
                                `:""}
                            </div>
                            <p style="color: var(--text-muted); margin: 0 0 0.5rem 0;">${d.description}</p>
                            <div style="display: flex; gap: 1rem; font-size: 0.9rem; color: var(--text-muted);">
                                <span>📝 ${d.questionsCount||((g=d.questions)==null?void 0:g.length)||0} ${t==="uz"?"ta savol":"вопросов"}</span>
                                <span>⏱️ ${d.duration||30} ${t==="uz"?"daqiqa":"минут"}</span>
                                <span>📊 ${t==="uz"?"O'tish bali":"Проходной балл"}: ${d.passingScore||70}%</span>
                                ${c?`<span>✅ ${t==="uz"?"Ball":"Результат"}: ${h}%</span>`:""}
                            </div>
                        </div>
                        <div style="display: flex; gap: 0.5rem;">
                            ${c?`
                                <button class="button button-secondary" onclick="viewMyTestResult('${d._id}')" style="padding: 0.5rem 1rem;">
                                    <span>📊</span>
                                    <span>${t==="uz"?"Natija":"Результат"}</span>
                                </button>
                                <button class="button button-primary" onclick="retakeTeacherTest('${d._id}')" style="padding: 0.5rem 1rem;">
                                    <span>🔄</span>
                                    <span>${t==="uz"?"Qayta topshirish":"Пересдать"}</span>
                                </button>
                            `:`
                                <button class="button button-primary" onclick="startTeacherTest('${d._id}')" style="padding: 0.5rem 1rem;">
                                    <span>▶️</span>
                                    <span>${t==="uz"?"Boshlash":"Начать тест"}</span>
                                </button>
                            `}
                        </div>
                    </div>
                </div>
            `}).join("")}catch(n){console.error("Error loading teacher tests:",n),i.innerHTML=`
            <div style="text-align: center; padding: 2rem; color: #ef4444;">
                <p>${t==="uz"?"Xatolik yuz berdi":"Произошла ошибка"}</p>
            </div>
        `}}async function yh(e){_.navigate(`/teacher/test/${e}`)}async function fr(e){const t=k.getState().language;await pe(t==="uz"?"Testni qayta topshirishni xohlaysizmi?":"Хотите пересдать тест?",t==="uz"?"Test qayta boshlanadi":"Тест будет начат заново")&&_.navigate(`/teacher/test/${e}`)}async function vh(e){var n,a,r,o;const t=k.getState().language,i=k.getState().user,s=(i==null?void 0:i._id)||(i==null?void 0:i.id)||(i==null?void 0:i.userId);try{if(!s){await D(t==="uz"?"Foydalanuvchi topilmadi":"Пользователь не найден","error");return}const c=((await A(`/api/teacher-test-results/teacher/${s}`)).data||[]).filter(m=>m.testId===e).sort((m,p)=>new Date(p.completedAt)-new Date(m.completedAt))[0];if(!c){await D(t==="uz"?"Natija topilmadi":"Результат не найден","warning");return}const h=(await A(`/api/teacher-tests/${e}`)).data;if(!h){await D(t==="uz"?"Test topilmadi":"Тест не найден","warning");return}const g=document.createElement("div");g.className="modal",g.innerHTML=`
            <div class="modal-content" style="max-width: 700px;">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.5rem;">
                    <h2 style="margin: 0;">${t==="uz"?"Test natijasi":"Результат теста"}</h2>
                    <button class="modal-close" id="closeResultModal">✕</button>
                </div>
                
                <div style="text-align: center; padding: 2rem; background: ${c.passed?"linear-gradient(135deg, #10b981 0%, #059669 100%)":"linear-gradient(135deg, #ef4444 0%, #dc2626 100%)"}; color: white; border-radius: 12px; margin-bottom: 1.5rem;">
                    <div style="font-size: 4rem; margin-bottom: 1rem;">${c.passed?"✅":"❌"}</div>
                    <h3 style="margin: 0 0 0.5rem 0; color: white;">${h.title}</h3>
                    <div style="font-size: 3rem; font-weight: bold; margin: 1rem 0;">${c.score}%</div>
                    <p style="margin: 0; opacity: 0.9;">
                        ${c.passed?t==="uz"?"Tabriklaymiz! Test muvaffaqiyatli topshirildi":"Поздравляем! Тест успешно сдан":t==="uz"?`O'tish bali: ${h.passingScore}%`:`Проходной балл: ${h.passingScore}%`}
                    </p>
                    <p style="margin: 0.5rem 0 0 0; font-size: 0.9rem; opacity: 0.8;">
                        ${new Date(c.completedAt).toLocaleString("ru-RU")}
                    </p>
                </div>
                
                <div style="background: var(--bg-secondary); padding: 1.5rem; border-radius: 12px;">
                    <h4 style="margin: 0 0 1rem 0;">${t==="uz"?"Batafsil ma'lumot":"Детальная информация"}</h4>
                    <div style="display: grid; gap: 0.75rem;">
                        <div style="display: flex; justify-content: space-between;">
                            <span>${t==="uz"?"Jami savollar":"Всего вопросов"}:</span>
                            <strong>${((n=h.questions)==null?void 0:n.length)||0}</strong>
                        </div>
                        <div style="display: flex; justify-content: space-between;">
                            <span>${t==="uz"?"To'g'ri javoblar":"Правильных ответов"}:</span>
                            <strong style="color: #10b981;">${Math.round(c.score/100*h.questions.length)}</strong>
                        </div>
                        <div style="display: flex; justify-content: space-between;">
                            <span>${t==="uz"?"Noto'g'ri javoblar":"Неправильных ответов"}:</span>
                            <strong style="color: #ef4444;">${h.questions.length-Math.round(c.score/100*h.questions.length)}</strong>
                        </div>
                        <div style="display: flex; justify-content: space-between;">
                            <span>${t==="uz"?"O'tish bali":"Проходной балл"}:</span>
                            <strong>${h.passingScore}%</strong>
                        </div>
                    </div>
                </div>
                
                <div style="display: flex; gap: 1rem; justify-content: flex-end; margin-top: 1.5rem;">
                    ${c.passed?"":`
                        <button class="button button-primary" id="btnRetakeTest">
                            <span>🔄</span>
                            <span>${t==="uz"?"Qayta topshirish":"Пересдать"}</span>
                        </button>
                    `}
                    <button class="button button-secondary" id="btnCloseResult">${t==="uz"?"Yopish":"Закрыть"}</button>
                </div>
            </div>
        `,document.body.appendChild(g),setTimeout(()=>g.classList.add("show"),10),(a=document.getElementById("closeResultModal"))==null||a.addEventListener("click",()=>{g.classList.remove("show"),setTimeout(()=>g.remove(),300)}),(r=document.getElementById("btnCloseResult"))==null||r.addEventListener("click",()=>{g.classList.remove("show"),setTimeout(()=>g.remove(),300)}),(o=document.getElementById("btnRetakeTest"))==null||o.addEventListener("click",()=>{g.classList.remove("show"),setTimeout(()=>g.remove(),300),fr(e)})}catch(l){console.error("Error viewing result:",l),await D(t==="uz"?"Xatolik yuz berdi":"Произошла ошибка","error")}}async function xh(){const e=k.getState().user,t=k.getState().language,i=_.currentParams.id;if(!e||!i){_.navigate("/teacher/tests");return}try{const s=await A(`/api/teacher-tests/${i}`);if(!s.success||!s.data){D(t==="uz"?"Test topilmadi":"Тест не найден","warning"),_.navigate("/teacher/tests");return}const n=s.data,a=n.questions||[],r=`
            <div class="page-header" style="background: linear-gradient(135deg, var(--primary), var(--accent)); color: white; padding: 2rem; margin: -2rem -2rem 2rem -2rem; border-radius: 0 0 20px 20px;">
                <h1 style="margin: 0 0 0.5rem 0; color: white;">📋 ${n.title}</h1>
                <p style="margin: 0 0 1rem 0; opacity: 0.9;">${n.description}</p>
                <div style="display: flex; gap: 2rem; font-size: 0.95rem; opacity: 0.95;">
                    <span>⏱️ ${n.duration} ${t==="uz"?"daqiqa":"минут"}</span>
                    <span>📝 ${a.length} ${t==="uz"?"ta savol":"вопросов"}</span>
                    <span>📊 ${t==="uz"?"O'tish":"Проходной балл"}: ${n.passingScore}%</span>
                </div>
            </div>
            
            <div class="card" style="margin-bottom: 2rem;">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.5rem; padding-bottom: 1rem; border-bottom: 2px solid var(--border-color);">
                    <div>
                        <h3 style="margin: 0;">${t==="uz"?"Savol":"Вопрос"} <span id="currentQuestion">1</span> / ${a.length}</h3>
                    </div>
                    <div style="display: flex; align-items: center; gap: 1rem;">
                        <div style="font-size: 1.5rem; font-weight: bold; color: var(--primary);" id="timer">
                            ${n.duration}:00
                        </div>
                    </div>
                </div>
                
                <div id="questionContainer">
                    <!-- Questions will be rendered here -->
                </div>
                
                <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 2rem; padding-top: 1.5rem; border-top: 2px solid var(--border-color);">
                    <button class="button button-secondary" id="btnPrevQuestion" disabled>
                        <span>←</span>
                        <span>${t==="uz"?"Oldingi":"Назад"}</span>
                    </button>
                    
                    <div style="display: flex; gap: 0.5rem; flex-wrap: wrap; justify-content: center;">
                        ${a.map((o,l)=>`
                            <button class="question-nav-btn ${l===0?"active":""}" data-question="${l}" style="width: 40px; height: 40px; border-radius: 8px; border: 2px solid var(--border-color); background: var(--bg-secondary); cursor: pointer; font-weight: 600; transition: all 0.2s;">
                                ${l+1}
                            </button>
                        `).join("")}
                    </div>
                    
                    <button class="button button-primary" id="btnNextQuestion">
                        <span>${t==="uz"?"Keyingi":"Далее"}</span>
                        <span>→</span>
                    </button>
                </div>
            </div>
            
            <div style="text-align: center;">
                <button class="button" id="btnFinishTest" style="background: #10b981; color: white; padding: 1rem 2rem; font-size: 1.1rem;">
                    <span>✅</span>
                    <span>${t==="uz"?"Testni yakunlash":"Завершить тест"}</span>
                </button>
            </div>
        `;F(r,"teacher"),wh(n)}catch(s){console.error("Error loading test:",s),D(t==="uz"?"Xatolik yuz berdi":"Произошла ошибка","error"),_.navigate("/teacher/tests")}}function wh(e){var u,h,g;const t=k.getState().language,i=e.questions||[];let s=0;const n=new Array(i.length).fill(null);let a=e.duration*60;const r=document.getElementById("timer"),o=setInterval(()=>{a--;const m=Math.floor(a/60),p=a%60;r.textContent=`${m}:${p.toString().padStart(2,"0")}`,a<=0&&(clearInterval(o),la(e._id,n,e))},1e3);function l(m){const p=i[m],f=document.getElementById("questionContainer");f.innerHTML=`
            <div style="margin-bottom: 2rem;">
                <h3 style="font-size: 1.25rem; line-height: 1.6; margin-bottom: 1.5rem;">${p.text}</h3>
                <div style="display: grid; gap: 1rem;">
                    ${p.options.map((b,v)=>`
                        <label class="test-option ${n[m]===v?"selected":""}" style="display: flex; align-items: center; gap: 1rem; padding: 1.25rem; background: var(--bg-secondary); border: 2px solid ${n[m]===v?"var(--primary)":"var(--border-color)"}; border-radius: 12px; cursor: pointer; transition: all 0.2s;">
                            <input type="radio" name="question_${m}" value="${v}" ${n[m]===v?"checked":""} style="width: 20px; height: 20px; accent-color: var(--primary);">
                            <span style="flex: 1; font-size: 1.05rem;">${String.fromCharCode(65+v)}. ${b}</span>
                        </label>
                    `).join("")}
                </div>
            </div>
        `,f.querySelectorAll('input[type="radio"]').forEach(b=>{b.addEventListener("change",v=>{n[m]=parseInt(v.target.value),c(),l(m)})}),document.getElementById("currentQuestion").textContent=m+1,d(),c()}function d(){document.getElementById("btnPrevQuestion").disabled=s===0;const m=document.getElementById("btnNextQuestion");s===i.length-1?m.style.display="none":m.style.display="flex"}function c(){document.querySelectorAll(".question-nav-btn").forEach((m,p)=>{m.classList.remove("active"),p===s?(m.classList.add("active"),m.style.background="var(--primary)",m.style.color="white",m.style.borderColor="var(--primary)"):n[p]!==null?(m.style.background="#10b981",m.style.color="white",m.style.borderColor="#10b981"):(m.style.background="var(--bg-secondary)",m.style.color="var(--text-primary)",m.style.borderColor="var(--border-color)")})}(u=document.getElementById("btnPrevQuestion"))==null||u.addEventListener("click",()=>{s>0&&(s--,l(s))}),(h=document.getElementById("btnNextQuestion"))==null||h.addEventListener("click",()=>{s<i.length-1&&(s++,l(s))}),document.querySelectorAll(".question-nav-btn").forEach(m=>{m.addEventListener("click",()=>{s=parseInt(m.dataset.question),l(s)})}),(g=document.getElementById("btnFinishTest"))==null||g.addEventListener("click",()=>{const m=n.filter(p=>p===null).length;m>0&&!confirm(`${t==="uz"?`${m} ta savolga javob berilmagan. Testni yakunlashni xohlaysizmi?`:`Не отвечено ${m} вопросов. Завершить тест?`}`)||(clearInterval(o),la(e._id,n,e))}),l(0)}async function la(e,t,i){var r;const s=k.getState().language,n=k.getState().user;console.log("📤 Submitting teacher test:",{testId:e,user:n});const a=(n==null?void 0:n._id)||(n==null?void 0:n.id)||(n==null?void 0:n.userId);if(console.log("🆔 Teacher ID:",a),!a){console.error("❌ User ID not found"),await D(s==="uz"?"Foydalanuvchi ma'lumotlari topilmadi":"Информация о пользователе не найдена","error");return}try{let o=0;i.questions.forEach((u,h)=>{t[h]===u.correctAnswer&&o++});const l=Math.round(o/i.questions.length*100),d=l>=i.passingScore;console.log("📊 Test results:",{score:l,passed:d,correctAnswers:o,total:i.questions.length});const c=await A("/api/teacher-test-results","POST",{testId:e,teacherId:a,answers:t,score:l,passed:d});if(console.log("📤 Submit response:",c),c.success){const u=document.createElement("div");u.className="modal show",u.innerHTML=`
                <div class="modal-content" style="max-width: 600px;">
                    <div style="text-align: center; padding: 2rem;">
                        <div style="font-size: 5rem; margin-bottom: 1rem;">${d?"🎉":"😔"}</div>
                        <h2 style="margin: 0 0 1rem 0; color: ${d?"#10b981":"#ef4444"};">
                            ${d?s==="uz"?"Tabriklaymiz!":"Поздравляем!":s==="uz"?"Afsuski...":"К сожалению..."}
                        </h2>
                        <div style="font-size: 3rem; font-weight: bold; margin: 1rem 0; color: ${d?"#10b981":"#ef4444"};">
                            ${l}%
                        </div>
                        <p style="font-size: 1.1rem; color: var(--text-muted); margin-bottom: 2rem;">
                            ${d?s==="uz"?"Test muvaffaqiyatli topshirildi!":"Тест успешно сдан!":s==="uz"?`O'tish bali: ${i.passingScore}%`:`Проходной балл: ${i.passingScore}%`}
                        </p>
                        <button class="button button-primary" id="btnBackToTests" style="padding: 1rem 2rem; font-size: 1.1rem;">
                            <span>${s==="uz"?"Testlarga qaytish":"Вернуться к тестам"}</span>
                        </button>
                    </div>
                </div>
            `,document.body.appendChild(u),(r=document.getElementById("btnBackToTests"))==null||r.addEventListener("click",()=>{u.remove(),_.navigate("/teacher/tests")})}else throw new Error(c.error)}catch(o){console.error("Error submitting test:",o),D(s==="uz"?"Xatolik yuz berdi":"Произошла ошибка","error")}}async function zh(){const e=k.getState().language,t=[{uz:"Men matematika va hisob-kitoblarni yaxshi ko'raman",ru:"Мне нравится математика и вычисления",category:"math"},{uz:"Men mantiqiy muammolarni hal qilishni yaxshi ko'raman",ru:"Мне нравится решать логические задачи",category:"math"},{uz:"Men sonlar va formulalar bilan ishlashni yaxshi ko'raman",ru:"Мне нравится работать с числами и формулами",category:"math"},{uz:"Men murakkab masalalarni bosqichma-bosqich yechishni yoqtiraman",ru:"Мне нравится решать сложные задачи шаг за шагом",category:"math"},{uz:"Men mantiqiy fikrlashni talab qiladigan o'yinlarni yoqtiraman",ru:"Мне нравятся игры, требующие логического мышления",category:"math"},{uz:"Men tabiatni o'rganishni yaxshi ko'raman",ru:"Мне нравится изучать природу",category:"science"},{uz:"Men fizika va kimyo tajribalarini yaxshi ko'raman",ru:"Мне нравятся физические и химические эксперименты",category:"science"},{uz:"Men hayotni va tirik mavjudotlarni o'rganishni yaxshi ko'raman",ru:"Мне нравится изучать жизнь и живые существа",category:"science"},{uz:"Men tabiat hodisalarining sabablarini bilishni istayman",ru:"Мне интересно узнавать причины природных явлений",category:"science"},{uz:"Men ilmiy faktlar va kashfiyotlar haqida o'qishni yoqtiraman",ru:"Мне нравится читать о научных фактах и открытиях",category:"science"},{uz:"Men kompyuterlar va texnologiyalar bilan ishlashni yaxshi ko'raman",ru:"Мне нравится работать с компьютерами и технологиями",category:"tech"},{uz:"Men dasturlash va kodlashni o'rganishni xohlayman",ru:"Я хочу изучать программирование и кодирование",category:"tech"},{uz:"Men texnik qurilmalarni yaratish va ta'mirlashni yaxshi ko'raman",ru:"Мне нравится создавать и чинить технические устройства",category:"tech"},{uz:"Men yangi ilovalar va texnik yechimlarni sinab ko'raman",ru:"Мне интересно пробовать новые приложения и технические решения",category:"tech"},{uz:"Men robotlar yoki mexanizmlar qanday ishlashini bilishni xohlayman",ru:"Мне интересно, как работают роботы и механизмы",category:"tech"},{uz:"Men rasmchilik va ijodiy ishlarni yaxshi ko'raman",ru:"Мне нравится рисование и творческая работа",category:"art"},{uz:"Men musiqa va san'atni yaxshi ko'raman",ru:"Мне нравится музыка и искусство",category:"art"},{uz:"Men o'zimning g'oyalarimni ijodiy usulda ifodalashni yaxshi ko'raman",ru:"Мне нравится творчески выражать свои идеи",category:"art"},{uz:"Men dizayn va bezaklar bilan ishlashni yoqtiraman",ru:"Мне нравится работать с дизайном и оформлением",category:"art"},{uz:"Men yangi g'oyalar yaratishdan zavqlanaman",ru:"Мне нравится придумывать новые идеи",category:"art"},{uz:"Men odamlar bilan muloqot qilishni yaxshi ko'raman",ru:"Мне нравится общаться с людьми",category:"social"},{uz:"Men boshqalarga yordam berishni va ularni qo'llab-quvvatlashni yaxshi ko'raman",ru:"Мне нравится помогать другим и поддерживать их",category:"social"},{uz:"Men jamoa bilan ishlashni va hamkorlikni yaxshi ko'raman",ru:"Мне нравится работать в команде и сотрудничать",category:"social"},{uz:"Men jamoada yetakchi bo'lishni yoqtiraman",ru:"Мне нравится быть лидером в команде",category:"social"},{uz:"Men odamlarning fikrlarini tinglash va murosaga kelishni yoqtiraman",ru:"Мне нравится слушать людей и находить компромисс",category:"social"},{uz:"Men kitob o'qishni va yozishni yaxshi ko'raman",ru:"Мне нравится читать и писать",category:"language"},{uz:"Men tillarni o'rganishni qiziqarli deb bilaman",ru:"Я нахожу изучение языков интересным",category:"language"},{uz:"Men hikoyalar yaratishni va she'rlar yozishni yaxshi ko'raman",ru:"Мне нравится сочинять истории и писать стихи",category:"language"},{uz:"Men so'z boyligimni oshirishni istayman",ru:"Мне интересно расширять словарный запас",category:"language"},{uz:"Men matnlarni tahlil qilish va tushunishni yoqtiraman",ru:"Мне нравится анализировать и понимать тексты",category:"language"}],i=`
        <div class="page-header">
            <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 1rem;">
                <div>
                    <h1>${E("interestTest")}</h1>
                    <p>${e==="uz"?"Qobiliyat va qiziqishlaringizni aniqlang":"Определите свои способности и интересы"}</p>
                </div>
                <button class="back-button" id="btnBackFromInterestTest">
                    <span>←</span>
                    <span>${e==="uz"?"Orqaga":"Назад"}</span>
                </button>
            </div>
        </div>
        
        <div class="card" id="interestTestContainer">
            <div id="testIntro">
                <h3>${e==="uz"?"Testni boshlash":"Начать тест"}</h3>
                <p style="margin-bottom: 1rem;">${e==="uz"?"Ushbu test sizning qiziqishlaringiz va qobiliyatlaringizni aniqlashga yordam beradi. Har bir savolga 1 dan 5 gacha baho bering:":"Этот тест поможет определить ваши интересы и способности. Оцените каждый вопрос от 1 до 5:"}</p>
                <ul style="margin-bottom: 1.5rem; margin-left: 1.5rem;">
                    <li><strong>1</strong> - ${e==="uz"?"Umuman qiziqtirmaydi":"Совсем не интересует"}</li>
                    <li><strong>2</strong> - ${e==="uz"?"Kam qiziqtiradi":"Мало интересует"}</li>
                    <li><strong>3</strong> - ${e==="uz"?"O'rtacha":"Средне"}</li>
                    <li><strong>4</strong> - ${e==="uz"?"Qiziqtiradi":"Интересует"}</li>
                    <li><strong>5</strong> - ${e==="uz"?"Juda qiziqtiradi":"Очень интересует"}</li>
                </ul>
                <button id="btnStartInterestTest" class="button button-primary">
                    ${e==="uz"?"Testni boshlash":"Начать тест"}
                </button>
            </div>
            <div id="testQuestions" style="display: none;">
                <div style="background: var(--bg-tertiary); padding: 1rem; border-radius: 8px; margin-bottom: 2rem;">
                    <div style="display: flex; justify-content: space-between; align-items: center;">
                        <span>${e==="uz"?"Savol:":"Вопрос:"} <strong id="currentQuestion">1</strong> / ${t.length}</span>
                        <span id="progressPercentage">0%</span>
                    </div>
                    <div style="background: var(--bg-primary); height: 8px; border-radius: 4px; margin-top: 0.5rem; overflow: hidden;">
                        <div id="progressBar" style="height: 100%; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); width: 0%; transition: width 0.3s;"></div>
                    </div>
                </div>
                <form id="interestTestForm">
                    ${t.map((n,a)=>`
                        <div class="question-item" data-question="${a}" style="display: ${a===0?"block":"none"}; margin-bottom: 2rem; padding: 1rem; background: var(--bg-tertiary); border-radius: 8px;">
                            <p style="margin-bottom: 1.5rem; font-weight: 500; font-size: 1rem; line-height: 1.5;">${a+1}. ${e==="uz"?n.uz:n.ru}</p>
                            <div style="display: flex; gap: 0.5rem; justify-content: center; flex-wrap: wrap;">
                                ${[1,2,3,4,5].map(r=>`
                                    <label style="cursor: pointer; padding: 0.75rem 0.5rem; background: var(--bg-primary); border-radius: 8px; border: 2px solid transparent; transition: all 0.2s; min-width: 50px; flex: 1; max-width: 80px; text-align: center;" class="radio-option">
                                        <input type="radio" name="q${a}" value="${r}" data-category="${n.category}" required style="display: none;" />
                                        <div style="font-size: 1.25rem; font-weight: 600;">${r}</div>
                                        <div style="font-size: 0.7rem; margin-top: 0.25rem; color: var(--text-secondary);">
                                            ${r===1?e==="uz"?"Yo'q":"Нет":r===3?e==="uz"?"O'rtacha":"Средне":r===5?e==="uz"?"Ha":"Да":""}
                                        </div>
                                    </label>
                                `).join("")}
                            </div>
                            <div style="display: flex; gap: 0.75rem; margin-top: 2rem; flex-wrap: wrap;">
                                ${a>0?`<button type="button" class="button button-secondary prev-question" style="flex: 1; min-width: 120px;">${e==="uz"?"Orqaga":"Назад"}</button>`:""}
                                ${a<t.length-1?`<button type="button" class="button button-primary next-question" style="flex: 1; min-width: 120px;" disabled>${e==="uz"?"Keyingi":"Далее"}</button>`:`<button type="submit" class="button button-primary" id="btnSubmitInterestTest" style="flex: 1; min-width: 120px;" disabled>${e==="uz"?"Natijalarni ko'rish":"Посмотреть результаты"}</button>`}
                            </div>
                        </div>
                    `).join("")}
                </form>
            </div>
            <div id="testResults" style="display: none;">
                <div style="text-align: center; margin-bottom: 2rem;">
                    <h2 style="color: var(--text-primary); margin-bottom: 0.5rem; margin-top: 5rem; font-size: 1.75rem;">
                        ${e==="uz"?"🎉 Test natijalari":"🎉 Результаты теста"}
                    </h2>
                    <p style="color: var(--text-secondary); font-size: 1rem;">
                        ${e==="uz"?"Sizning qiziqishlaringiz va qobiliyatlaringiz profili":"Профиль ваших интересов и способностей"}
                    </p>
                </div>
                
                <div class="radar-chart-wrap" style="max-width: 700px; margin: 0 auto 2rem; padding: 1.5rem; background: var(--bg-tertiary); border-radius: 16px; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);">
                    <canvas id="interestRadarChart"></canvas>
                </div>
                <div id="categoryDescriptions"></div>
                <div style="margin-top: 2rem; text-align: center; display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap;">
                    <button id="btnRetakeTest" class="button button-secondary" style="min-width: 150px;">
                        ${e==="uz"?"Qayta topshirish":"Пройти снова"}
                    </button>
                    <button id="btnBackToDashboard" class="button button-primary" style="min-width: 150px;">
                        ${e==="uz"?"Bosh sahifaga":"На главную"}
                    </button>
                </div>
            </div>
        </div>
    `;F(i,"student");const s=document.getElementById("btnBackFromInterestTest");s&&s.addEventListener("click",()=>_.navigate("/student/dashboard"));try{const n=await A("/api/interest-results");if(n.success&&n.data&&n.data.categories){br(n.data.categories);return}}catch(n){console.error("Error loading saved interest test results:",n)}kh(t)}function kh(e){k.getState().language;let t=0;const i={},s=document.getElementById("btnStartInterestTest");s&&s.addEventListener("click",()=>{document.getElementById("testIntro").style.display="none",document.getElementById("testQuestions").style.display="block",n()}),document.querySelectorAll(".radio-option").forEach(r=>{r.addEventListener("click",function(){const o=this.querySelector('input[type="radio"]'),l=this.closest(".question-item"),d=parseInt(l.dataset.question);l.querySelectorAll(".radio-option").forEach(h=>{h.style.borderColor="transparent",h.style.background="var(--bg-primary)"}),this.style.borderColor="#667eea",this.style.background="rgba(102, 126, 234, 0.1)",i[`q${d}`]={value:parseInt(o.value),category:o.dataset.category};const c=l.querySelector(".next-question"),u=document.getElementById("btnSubmitInterestTest");c&&(c.disabled=!1),u&&(u.disabled=!1),n()})}),document.querySelectorAll(".next-question").forEach(r=>{r.addEventListener("click",()=>{const o=document.querySelector(`.question-item[data-question="${t}"]`);o.style.display="none",t++;const l=document.querySelector(`.question-item[data-question="${t}"]`);l.style.display="block",n()})}),document.querySelectorAll(".prev-question").forEach(r=>{r.addEventListener("click",()=>{const o=document.querySelector(`.question-item[data-question="${t}"]`);o.style.display="none",t--;const l=document.querySelector(`.question-item[data-question="${t}"]`);l.style.display="block",n()})});function n(){const r=Object.keys(i).length,o=Math.round(r/e.length*100);document.getElementById("currentQuestion").textContent=t+1,document.getElementById("progressPercentage").textContent=o+"%",document.getElementById("progressBar").style.width=o+"%"}const a=document.getElementById("interestTestForm");a&&a.addEventListener("submit",async r=>{r.preventDefault();const o={};Object.values(i).forEach(d=>{o[d.category]||(o[d.category]={total:0,count:0}),o[d.category].total+=d.value,o[d.category].count++});const l={};Object.keys(o).forEach(d=>{l[d]=Math.round(o[d].total/o[d].count*20)});try{(await A("/api/interest-results",{method:"POST",body:JSON.stringify({results:i,categories:l})})).success&&console.log("✅ Interest test results saved successfully")}catch(d){console.error("Error saving interest test results:",d)}br(l)})}function br(e){const t=k.getState().language;document.getElementById("testQuestions").style.display="none",document.getElementById("testResults").style.display="block";const i={math:{subjects:[{name:"Математика",icon:"🔢",reason:"Ваши логические способности и интерес к числам делают математику идеальным выбором"},{name:"Физика",icon:"⚛️",reason:"Физика требует сильных математических навыков и логического мышления"}]},science:{subjects:[{name:"Биология",icon:"🧬",reason:"Ваш интерес к природе и живым организмам идеально подходит для биологии"},{name:"Химия",icon:"🧪",reason:"Химия откроет вам мир научных экспериментов и исследований"}]},tech:{subjects:[{name:"Информатика",icon:"💻",reason:"Ваши технические навыки прекрасно подходят для программирования"},{name:"Физика",icon:"⚛️",reason:"Физика - основа всех современных технологий"}]},art:{subjects:[{name:"Изобразительное искусство",icon:"🎨",reason:"Развивайте свой творческий потенциал через искусство"},{name:"Музыка",icon:"🎵",reason:"Музыка поможет выразить вашу креативность"}]},social:{subjects:[{name:"История",icon:"📜",reason:"История поможет понять общество и человеческие отношения"},{name:"Обществознание",icon:"👥",reason:"Идеально для развития социальных и коммуникативных навыков"}]},language:{subjects:[{name:"Литература",icon:"📚",reason:"Литература развивает языковые навыки и воображение"},{name:"Иностранные языки",icon:"🌍",reason:"Ваша способность к языкам откроет новые возможности"},{reasonUz:"Tillar haqidagi qobiliyatingiz yangi imkoniyatlarni ochadi"}]}},s={math:{uz:{name:"Matematika va Mantiq",desc:"Sizda matematika va mantiqiy fikrlash qobiliyati kuchli"},ru:{name:"Математика и Логика",desc:"У вас сильные способности к математике и логическому мышлению"}},science:{uz:{name:"Fan va Tabiat",desc:"Sizda tabiatni o'rganish va ilmiy tadqiqotlarga qiziqish yuqori"},ru:{name:"Наука и Природа",desc:"У вас высокий интерес к изучению природы и научным исследованиям"}},tech:{uz:{name:"Texnologiya va Injinering",desc:"Sizda texnik soha va texnologiyalarga qiziqish kuchli"},ru:{name:"Технологии и Инженерия",desc:"У вас сильный интерес к технической сфере и технологиям"}},art:{uz:{name:"San'at va Ijod",desc:"Sizda ijodiy fikrlash va san'atga iste'dod bor"},ru:{name:"Искусство и Творчество",desc:"У вас есть талант к творческому мышлению и искусству"}},social:{uz:{name:"Ijtimoiy va Kommunikatsiya",desc:"Sizda odamlar bilan ishlash va muloqot qilish qobiliyati yuqori"},ru:{name:"Социальная сфера и Коммуникация",desc:"У вас высокие способности к работе с людьми и коммуникации"}},language:{uz:{name:"Til va Adabiyot",desc:"Sizda tillar va adabiyot sohasida qiziqish yuqori"},ru:{name:"Языки и Литература",desc:"У вас высокий интерес к языкам и литературе"}}},n=Object.keys(e).map(c=>s[c]?s[c][t].name:c),a=Object.values(e),r=document.getElementById("interestRadarChart");if(r){r.style.background="#1F2937",r.style.borderRadius="12px",r.style.width="100%",r.style.height="100%";const c=r.getContext("2d").createLinearGradient(0,0,0,400);c.addColorStop(0,"rgba(102, 126, 234, 0.4)"),c.addColorStop(.5,"rgba(118, 75, 162, 0.3)"),c.addColorStop(1,"rgba(102, 126, 234, 0.2)");const u=h=>{if(!h||h.length<=14)return h;const g=h.split(" ");if(g.length<2)return h;const m=Math.ceil(g.length/2);return[g.slice(0,m).join(" "),g.slice(m).join(" ")]};new vt(r,{type:"radar",data:{labels:n,datasets:[{label:t==="uz"?"Sizning natijangiz":"Ваш результат",data:a,backgroundColor:c,borderColor:"#667eea",borderWidth:3,pointBackgroundColor:"#667eea",pointBorderColor:"#fff",pointBorderWidth:3,pointHoverBackgroundColor:"#764ba2",pointHoverBorderColor:"#fff",pointHoverBorderWidth:4,pointRadius:6,pointHoverRadius:9,pointStyle:"circle"}]},options:{responsive:!0,maintainAspectRatio:!1,layout:{padding:{top:10,bottom:10,left:10,right:10}},scales:{r:{beginAtZero:!0,max:100,min:0,ticks:{stepSize:20,callback:function(h){return h+"%"},color:"#111827",font:{size:11,weight:"500"}},pointLabels:{color:"#FFFFFF",callback:u,font:{size:window.innerWidth<420?9:window.innerWidth<768?10:12,weight:"600",family:"system-ui, -apple-system, sans-serif"},padding:window.innerWidth<420?4:window.innerWidth<768?6:10},grid:{color:"#FFF",circular:!0},angleLines:{color:"#FFFF",lineWidth:2}}},plugins:{legend:{display:!0,position:"top",labels:{color:"#FFFFFF",font:{size:window.innerWidth<420?11:13,weight:"600"},padding:20,usePointStyle:!0,pointStyle:"circle"}},tooltip:{backgroundColor:"#FFFFFF",titleColor:"#fff",bodyColor:"#fff",titleFont:{size:14,weight:"bold"},bodyFont:{size:13},padding:12,cornerRadius:8,displayColors:!1,callbacks:{label:function(h){return h.parsed.r+"%"}}}}}})}const o=document.getElementById("categoryDescriptions");if(o){const c=Object.entries(e).sort((u,h)=>h[1]-u[1]);o.innerHTML=`
            <div style="margin-bottom: 1.5rem;">
                <h3 style="font-size: 1.25rem; color: var(--text-primary); margin-bottom: 1rem; text-align: center;">
                    ${t==="uz"?"📊 Batafsil natijalar":"📊 Детальные результаты"}
                </h3>
            </div>
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.25rem;">
                ${c.map(([u,h],g)=>{const m=s[u]?s[u][t]:{name:u,desc:""},p=h>=70?"#10b981":h>=50?"#f59e0b":"#6b7280",f=g===0?"🏆":g===1?"🥈":g===2?"🥉":"📌";return`
                        <div style="
                            padding: 1.25rem; 
                            background: ${h>=70?"linear-gradient(135deg, rgba(16, 185, 129, 0.1) 0%, rgba(16, 185, 129, 0.05) 100%)":h>=50?"linear-gradient(135deg, rgba(245, 158, 11, 0.1) 0%, rgba(245, 158, 11, 0.05) 100%)":"linear-gradient(135deg, rgba(107, 114, 128, 0.1) 0%, rgba(107, 114, 128, 0.05) 100%)"}; 
                            border-radius: 12px; 
                            border-left: 5px solid ${p};
                            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
                            transition: transform 0.2s, box-shadow 0.2s;
                        " class="category-card">
                            <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 0.75rem; gap: 0.5rem;">
                                <div style="display: flex; align-items: center; gap: 0.5rem; flex: 1;">
                                    <span style="font-size: 1.5rem;">${f}</span>
                                    <h4 style="margin: 0; font-size: 1rem; font-weight: 600; color: var(--text-primary); line-height: 1.3;">${m.name}</h4>
                                </div>
                                <div style="
                                    background: ${p}; 
                                    color: white; 
                                    padding: 0.35rem 0.75rem; 
                                    border-radius: 20px; 
                                    font-size: 1rem; 
                                    font-weight: 700;
                                    white-space: nowrap;
                                ">${h}%</div>
                            </div>
                            <p style="margin: 0; font-size: 0.875rem; color: var(--text-secondary); line-height: 1.5;">${m.desc}</p>
                            <div style="
                                margin-top: 0.75rem; 
                                height: 6px; 
                                background: rgba(0,0,0,0.1); 
                                border-radius: 3px; 
                                overflow: hidden;
                            ">
                                <div style="
                                    height: 100%; 
                                    width: ${h}%; 
                                    background: ${p}; 
                                    border-radius: 3px;
                                    transition: width 0.6s ease;
                                "></div>
                            </div>
                        </div>
                    `}).join("")}
            </div>
            
            <!-- Subject Recommendations Section -->
            <div style="margin-top: 3rem; padding: 2rem; background: linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%); border-radius: 16px; border: 2px solid rgba(102, 126, 234, 0.3);">
                <div style="text-align: center; margin-bottom: 2rem;">
                    <h2 style="font-size: 1.75rem; color: var(--text-primary); margin-bottom: 0.75rem; display: flex; align-items: center; justify-content: center; gap: 0.5rem;">
                        <span style="font-size: 2rem;">🎓</span>
                        <span>${t==="uz"?"Tavsiya etiladigan fanlar":"Рекомендуемые предметы"}</span>
                    </h2>
                    <p style="color: var(--text-secondary); font-size: 1rem; max-width: 600px; margin: 0 auto;">
                        ${t==="uz"?"Sizning qiziqishlaringiz asosida ushbu fanlarni o'rganishni tavsiya qilamiz":"На основе ваших интересов мы рекомендуем изучать следующие предметы"}
                    </p>
                </div>
                
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 1.5rem;">
                    ${c.slice(0,3).map(([u,h])=>{const g=i[u];return g?g.subjects.map(m=>`
                            <div style="
                                background: var(--bg-tertiary); 
                                padding: 1.5rem; 
                                border-radius: 12px;
                                border: 2px solid rgba(102, 126, 234, 0.2);
                                transition: all 0.3s ease;
                                cursor: pointer;
                            " class="subject-recommendation-card">
                                <div style="display: flex; align-items: center; gap: 1rem; margin-bottom: 1rem;">
                                    <div style="
                                        font-size: 2.5rem;
                                        width: 60px;
                                        height: 60px;
                                        display: flex;
                                        align-items: center;
                                        justify-content: center;
                                        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                                        border-radius: 12px;
                                    ">${m.icon}</div>
                                    <div>
                                        <h3 style="margin: 0; font-size: 1.25rem; color: var(--text-primary); font-weight: 700;">
                                            ${m.name}
                                        </h3>
                                        <div style="
                                            display: inline-block;
                                            background: rgba(102, 126, 234, 0.2);
                                            color: #667eea;
                                            padding: 0.25rem 0.75rem;
                                            border-radius: 12px;
                                            font-size: 0.75rem;
                                            font-weight: 600;
                                            margin-top: 0.25rem;
                                        ">${h}% ${t==="uz"?"mos":"соответствие"}</div>
                                    </div>
                                </div>
                                <p style="
                                    margin: 0; 
                                    color: var(--text-secondary); 
                                    font-size: 0.9rem; 
                                    line-height: 1.6;
                                    padding-left: 0.5rem;
                                    border-left: 3px solid #667eea;
                                ">${m.reason}</p>
                            </div>
                        `).join(""):""}).join("")}
                </div>
                
                <div style="text-align: center; margin-top: 2rem; padding-top: 2rem; border-top: 1px solid rgba(102, 126, 234, 0.2);">
                    <p style="color: var(--text-secondary); font-size: 0.9rem; margin-bottom: 1rem;">
                        ${t==="uz"?"💡 Maslahat: Har bir fanni sinab ko'ring va o'zingizga eng mos keladiganini tanlang!":"💡 Совет: Попробуйте каждый предмет и выберите то, что вам больше всего подходит!"}
                    </p>
                </div>
            </div>
        `}const l=document.getElementById("btnRetakeTest");l&&l.addEventListener("click",()=>{_.navigate("/student/interest-test")});const d=document.getElementById("btnBackToDashboard");d&&d.addEventListener("click",()=>{_.navigate("/student/dashboard")})}async function _h(){var i,s;const e=k.getState().language;k.getState().user;const t=k.getState().token;try{const n=await fetch(`${Q}/api/tests`,{headers:{Authorization:`Bearer ${t}`}});if(!n.ok)throw new Error("Failed to fetch control tests");const a=await n.json(),r=a.data||a||[],o=!Array.isArray(r)||r.length===0,l=`
            <div class="page-header">
                <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 1rem;">
                    <div>
                        <h1>${E("controlTests")}</h1>
                        <p>${e==="uz"?"Öqituvchining nazorat isbotlarini bajaring":"Выполните контрольные работы"}</p>
                    </div>
                    <button class="back-button" id="btnBackFromControlTests">
                        <span>←</span>
                        <span>${e==="uz"?"Orqaga":"Назад"}</span>
                    </button>
                </div>
            </div>

            <div class="content-wrapper">
                ${o?`
                    <div class="card" style="text-align: center; padding: 2rem;">
                        <p style="color: var(--text-secondary); font-size: 1.1rem;">${E("noControlTests")}</p>
                    </div>
                `:`
                    <div class="tests-grid">
                        ${Array.isArray(r)?r.map(d=>{var f;const c=`control-test-completed-${d._id}`,u=JSON.parse(localStorage.getItem(c)||"null"),h=!!u;let g="",m="",p="";if(h){const b=u.percentage;b>=70?(g="#10B981",m="✅",p=e==="uz"?"Ajoyib!":"Отлично!"):b>=50?(g="#F59E0B",m="⚠️",p=e==="uz"?"Yaxshi":"Хорошо"):(g="#EF4444",m="❌",p=e==="uz"?"Qayta harakat":"Попробуйте")}return`
                            <div class="test-card" data-test-id="${d._id}">
                                <div class="test-header">
                                    <h3>${d.name}</h3>
                                    ${h?`
                                        <div style="margin-top: 0.5rem; padding: 0.5rem 1rem; background: ${g}20; border: 2px solid ${g}; border-radius: 8px; text-align: center;">
                                            <div style="font-size: 1.5rem; margin-bottom: 0.25rem;">${m}</div>
                                            <div style="font-size: 0.85rem; font-weight: 700; color: ${g};">${p}</div>
                                            <div style="font-size: 0.75rem; color: ${g}; margin-top: 0.25rem;">
                                                ${u.score} / ${u.maxScore} (${u.percentage}%)
                                            </div>
                                        </div>
                                    `:""}
                                </div>
                                <div class="test-details" style="margin: 1rem 0; color: var(--text-secondary);">
                                    <div style="display: flex; justify-content: space-between; margin-bottom: 0.5rem;">
                                        <span>⏱️ ${e==="uz"?"Vaqt":"Время"}:</span>
                                        <strong>${d.duration||60} ${e==="uz"?"daqiqa":"минут"}</strong>
                                    </div>
                                    <div style="display: flex; justify-content: space-between; margin-bottom: 0.5rem;">
                                        <span>⭐ ${e==="uz"?"Maksimal ball":"Макс. баллов"}:</span>
                                        <strong>${d.maxScore||100}</strong>
                                    </div>
                                    <div style="display: flex; justify-content: space-between;">
                                        <span>❓ ${e==="uz"?"Savollar":"Вопросы"}:</span>
                                        <strong>${((f=d.questions)==null?void 0:f.length)||0}</strong>
                                    </div>
                                </div>
                                <div class="test-description" style="margin-bottom: 1rem; color: var(--text-secondary); font-size: 0.95rem;">
                                    ${e==="uz"?d.descriptionUz:d.descriptionRu}
                                </div>
                                ${h?`
                                    <button class="btn-secondary" style="width: 100%; cursor: not-allowed; opacity: 0.6;" disabled>
                                        ${e==="uz"?"✅ Yakunlandi":"✅ Завершено"}
                                    </button>
                                `:`
                                    <button class="btn-primary btn-start-test" data-test-id="${d._id}">
                                        ${e==="uz"?"Boshlash":"Начать"}
                                    </button>
                                `}
                            </div>
                        `}).join(""):'<div style="text-align: center;"><p>Нет контрольных работ</p></div>'}
                    </div>
                `}
            </div>
        `;F(l,"student"),(i=document.getElementById("btnBackFromControlTests"))==null||i.addEventListener("click",()=>{_.navigate("/student/dashboard")}),document.querySelectorAll(".btn-start-test").forEach(d=>{d.addEventListener("click",c=>{const u=c.target.dataset.testId;_.navigate(`/student/take-control-test/${u}`)})})}catch(n){console.error("❌ Error loading control tests:",n);const a=`
            <div class="page-header">
                <div style="display: flex; justify-content: space-between; align-items: center;">
                    <h1>${E("controlTests")}</h1>
                    <button class="back-button" id="btnBackFromControlTests">
                        <span>←</span>
                        <span>${e==="uz"?"Orqaga":"Назад"}</span>
                    </button>
                </div>
            </div>
            <div class="card error-message">
                <p>${e==="uz"?"Xatolik yuz berdi. Qayta urinib ko'ring.":"Произошла ошибка. Попробуйте еще раз."}</p>
            </div>
        `;F(a,"student"),(s=document.getElementById("btnBackFromControlTests"))==null||s.addEventListener("click",()=>{_.navigate("/student/dashboard")})}}async function $h({testId:e}){var s,n,a,r,o;const t=k.getState().language;k.getState().user;const i=k.getState().token;try{let l=function(){const $=Object.keys(v.answers).filter(P=>v.answers[P]!==void 0).length,C=document.getElementById("answeredCount"),T=document.getElementById("currentQuestion");C&&(C.textContent=$);const B=document.getElementById("progressBar");if(B){const P=$/p.length*100;B.style.width=P+"%"}};const d=`control-test-completed-${e}`,c=JSON.parse(localStorage.getItem(d)||"null");if(c){const $=c.percentage,C=$>=70,T=$>=50;let B="",P="",R="";C?(B="#10B981",P="✅",R=t==="uz"?"Ajoyib!":"Отлично!"):T?(B="#F59E0B",P="⚠️",R=t==="uz"?"Yaxshi":"Хорошо"):(B="#EF4444",P="❌",R=t==="uz"?"Qayta harakat":"Попробуйте");const U=`
                <div style="background: var(--bg-primary); min-height: 100vh; display: flex; align-items: center; justify-content: center; padding: 2rem 1.5rem;">
                    <div style="max-width: 600px; width: 100%;">
                        <div style="background: var(--bg-secondary); border-radius: 16px; padding: 3rem 2rem; box-shadow: 0 10px 40px rgba(0,0,0,0.2); border: 2px solid var(--border-color); text-align: center;">
                            <div style="font-size: 4rem; margin-bottom: 1rem; color: ${B};">${P}</div>
                            <h1 style="margin: 0 0 0.5rem 0; font-size: 2rem; font-weight: 800; color: var(--text-primary);">
                                ${R}
                            </h1>
                            <p style="margin: 0 0 2rem 0; color: var(--text-secondary); font-size: 1rem;">
                                ${t==="uz"?"Bu test allaqachon yakunlangan!":"Этот тест уже завершен!"}
                            </p>

                            <div style="background: linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(139, 92, 246, 0.1) 100%); border: 2px solid var(--primary); border-radius: 14px; padding: 2rem; margin-bottom: 2rem;">
                                <div style="font-size: 0.9rem; color: var(--text-muted); font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 0.5rem;">
                                    📊 ${t==="uz"?"Ballangiz":"Ваш балл"}
                                </div>
                                <div style="font-size: 2.5rem; font-weight: 800; color: ${B}; margin-bottom: 1rem;">
                                    ${c.score} / ${c.maxScore}
                                </div>
                                <div style="font-size: 1.5rem; font-weight: 700; color: ${B};">
                                    ${$}%
                                </div>
                            </div>

                            <button class="button button-primary" id="btnBackToTests" style="width: 100%; padding: 1rem;">
                                ← ${t==="uz"?"Testlarga qaytish":"Вернуться к тестам"}
                            </button>
                        </div>
                    </div>
                </div>
            `;F(U,"student"),(s=document.getElementById("btnBackToTests"))==null||s.addEventListener("click",()=>{_.navigate("/student/control-tests")});return}const u=await fetch(`${Q}/api/tests/${e}/start`,{headers:{Authorization:`Bearer ${i}`}});if(!u.ok)throw new Error("Failed to start test");const h=await u.json(),g=h.data||h,m=g.sessionId,p=g.questions||[];if(!p||p.length===0)throw new Error("Test has no questions");const f=g.durationMinutes||60,b=`test-${e}-progress`;let v=JSON.parse(localStorage.getItem(b))||{testId:e,sessionId:m,answers:{},startTime:Date.now(),timeRemaining:f*60*1e3};localStorage.getItem(b)||localStorage.setItem(b,JSON.stringify(v));const w=`
            <div style="background: var(--bg-primary); min-height: 100vh;">
                <!-- Header with Timer -->
                <div class="test-header-modern" style="position: sticky; top: 0; z-index: 100; background: linear-gradient(135deg, var(--bg-secondary) 0%, var(--bg-tertiary) 100%); border-bottom: 2px solid var(--primary); padding: 1.5rem; box-shadow: 0 4px 12px rgba(0,0,0,0.2);">
                    <div style="max-width: 1200px; margin: 0 auto; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 2rem;">
                        <div style="flex: 1; min-width: 250px;">
                            <h1 style="margin: 0 0 0.5rem 0; font-size: 1.8rem; font-weight: 800; color: var(--text-primary);">
                                ${g.title}
                            </h1>
                            <p style="margin: 0; color: var(--text-secondary); font-size: 0.95rem;">
                                ${t==="uz"?"Test savollarini javob bering":"Ответьте на вопросы теста"}
                            </p>
                        </div>
                        
                        <!-- Timer Display -->
                        <div style="background: linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(139, 92, 246, 0.1) 100%); border: 2px solid var(--primary); border-radius: 12px; padding: 1rem 1.5rem; text-align: center; min-width: 150px;">
                            <div style="font-size: 0.85rem; color: var(--text-muted); font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 0.5rem;">
                                ⏱️ ${t==="uz"?"Qolgan vaqt":"Осталось"}
                            </div>
                            <div id="timer" style="font-size: 2rem; font-weight: 800; color: var(--primary); font-family: 'Courier New', monospace;">
                                ${f}:00
                            </div>
                        </div>

                        <!-- Action Buttons -->
                        <div style="display: flex; gap: 0.75rem; flex-wrap: wrap;">
                            <button class="button button-secondary" id="btnSaveProgress" style="padding: 0.75rem 1rem; font-size: 0.9rem; display: flex; align-items: center; gap: 0.5rem;">
                                💾 <span>${t==="uz"?"Saqlash":"Сохранить"}</span>
                            </button>
                            <button class="button button-secondary" id="btnExitTest" style="padding: 0.75rem 1rem; font-size: 0.9rem; display: flex; align-items: center; gap: 0.5rem;">
                                ← <span>${t==="uz"?"Chiqish":"Назад"}</span>
                            </button>
                        </div>
                    </div>
                </div>

                <!-- Main Content -->
                <div style="max-width: 900px; margin: 0 auto; padding: 2rem 1.5rem;">
                    <!-- Progress Bar -->
                    <div style="background: var(--bg-secondary); border-radius: 12px; padding: 1.5rem; margin-bottom: 2rem; border: 1px solid var(--border-color);">
                        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem;">
                            <span style="color: var(--text-secondary); font-weight: 600;">
                                ${t==="uz"?"Savol":"Вопрос"} <span id="currentQuestion" style="color: var(--primary); font-weight: 800;">1</span> / <span style="color: var(--text-muted);">${p.length}</span>
                            </span>
                            <span style="color: var(--text-muted); font-size: 0.9rem;">
                                ${t==="uz"?"Javoblar":"Ответов"}: <span id="answeredCount" style="color: var(--primary); font-weight: 800;">0</span>/${p.length}
                            </span>
                        </div>
                        <div style="height: 8px; background: var(--bg-tertiary); border-radius: 4px; overflow: hidden;">
                            <div id="progressBar" style="height: 100%; background: linear-gradient(90deg, var(--primary) 0%, var(--accent) 100%); width: 0%; transition: width 0.3s ease; border-radius: 4px;"></div>
                        </div>
                    </div>

                    <!-- Questions Container -->
                    <div id="questionsContainer">
                        ${p.map(($,C)=>`
                            <div class="question-card-modern" data-question-index="${C}" style="background: var(--bg-secondary); border: 2px solid var(--border-color); border-radius: 14px; padding: 2rem; margin-bottom: 2rem; transition: all 0.3s ease;">
                                <!-- Question Number Badge -->
                                <div style="display: flex; align-items: center; gap: 1rem; margin-bottom: 1.5rem;">
                                    <div style="background: linear-gradient(135deg, var(--primary) 0%, var(--accent) 100%); color: white; width: 40px; height: 40px; border-radius: 10px; display: flex; align-items: center; justify-content: center; font-weight: 800; font-size: 1.1rem;">
                                        ${C+1}
                                    </div>
                                    <div style="flex: 1;">
                                        <h3 style="margin: 0 0 0.25rem 0; color: var(--text-primary); font-size: 1.2rem; font-weight: 700;">
                                            ${t==="uz"?$.questionUz:$.questionRu}
                                        </h3>
                                        <div style="color: var(--text-muted); font-size: 0.85rem;">
                                            ${t==="uz"?"Bitta javobni tanlang":"Выберите один ответ"}
                                        </div>
                                    </div>
                                </div>

                                <!-- Answer Options -->
                                <div class="answers-list-modern" style="display: flex; flex-direction: column; gap: 0.75rem;">
                                    ${$.answers.map((T,B)=>`
                                        <label class="answer-option-modern" style="cursor: pointer; display: flex; align-items: center; padding: 1rem; background: var(--bg-tertiary); border: 2px solid var(--border-color); border-radius: 10px; transition: all 0.3s ease; position: relative; overflow: hidden;">
                                            <div style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.1), transparent); pointer-events: none;"></div>
                                            
                                            <input type="radio" 
                                                name="question_${C}" 
                                                value="${B}"
                                                data-question-index="${C}"
                                                ${v.answers[C]==B?"checked":""}
                                                class="answer-input" 
                                                style="width: 20px; height: 20px; cursor: pointer; accent-color: var(--primary); flex-shrink: 0; margin-right: 1rem;">
                                            
                                            <span style="color: var(--text-secondary); font-weight: 500; flex: 1; position: relative; z-index: 1;">
                                                ${t==="uz"?T.textUz:T.textRu}
                                            </span>
                                        </label>
                                    `).join("")}
                                </div>
                            </div>
                        `).join("")}
                    </div>

                    <!-- Submit Button -->
                    <div style="display: flex; gap: 1rem; margin-top: 2rem; margin-bottom: 2rem;">
                        <button class="button button-primary" id="btnSubmitTest" style="flex: 1; padding: 1rem; font-size: 1rem; font-weight: 700; display: flex; align-items: center; justify-content: center; gap: 0.5rem;">
                            ✅ ${t==="uz"?"Testni yakunlash":"Завершить тест"}
                        </button>
                    </div>
                </div>
            </div>
        `;F(w,"student");let y=v.timeRemaining;const x=document.getElementById("timer"),z=setInterval(()=>{if(y-=1e3,v.timeRemaining=y,x){const $=Math.floor(y/6e4),C=Math.floor(y%6e4/1e3);x.textContent=`${$}:${C.toString().padStart(2,"0")}`,y<=0&&(clearInterval(z),S())}localStorage.setItem(b,JSON.stringify(v))},1e3);document.querySelectorAll(".answer-input").forEach($=>{$.addEventListener("change",C=>{const T=parseInt(C.target.dataset.questionIndex),B=parseInt(C.target.value);v.answers[T]=B,localStorage.setItem(b,JSON.stringify(v)),l()})}),l(),(n=document.getElementById("btnSaveProgress"))==null||n.addEventListener("click",()=>{localStorage.setItem(b,JSON.stringify(v)),D(t==="uz"?"✅ Saqlandi!":"✅ Сохранено!","success")}),(a=document.getElementById("btnExitTest"))==null||a.addEventListener("click",async()=>{clearInterval(z),await pe(t==="uz"?"Testdan chiqishni xohlaysizmi? Tayyorlangan javoblar saqlanadi.":"Вы уверены? Ваши ответы будут сохранены.",t==="uz"?"Testdan chiqish":"Выход из теста")&&_.navigate("/student/control-tests")}),(r=document.getElementById("btnSubmitTest"))==null||r.addEventListener("click",async()=>{if(clearInterval(z),await pe(t==="uz"?"Testni yakunlaysizmi?":"Завершить тест?",t==="uz"?"Testni yakunlash":"Завершить тест")){const C=Math.round((Date.now()-v.startTime)/1e3/60);await da(e,v.answers,v.sessionId,C)}});async function S(){console.log("⏰ Time's up, auto-submitting...");const $=Math.round((Date.now()-v.startTime)/1e3/60);await da(e,v.answers,v.sessionId,$)}}catch(l){console.error("❌ Error loading control test:",l),F(`
            <div class="page-header">
                <h1>${t==="uz"?"Xatolik":"Ошибка"}</h1>
            </div>
            <div style="max-width: 600px; margin: 2rem auto;">
                <div class="alert alert-error">
                    <div style="display: flex; align-items: center; gap: 1rem;">
                        <span style="font-size: 1.5rem;">⚠️</span>
                        <div>
                            <strong style="display: block; margin-bottom: 0.25rem;">${t==="uz"?"Xatolik":"Ошибка загрузки"}</strong>
                            <span>${t==="uz"?"Testni yuklashda xatolik yuz berdi":"Ошибка при загрузке теста"}</span>
                        </div>
                    </div>
                    <button class="btn-primary" id="btnBackToControlTests" style="margin-top: 1rem; width: 100%; padding: 0.75rem;">
                        ${t==="uz"?"Orqaga qaytish":"Вернуться"}
                    </button>
                </div>
            </div>
        `,"student"),(o=document.getElementById("btnBackToControlTests"))==null||o.addEventListener("click",()=>{_.navigate("/student/control-tests")})}}async function da(e,t,i,s){var r;const n=k.getState().language,a=k.getState().token;try{const o=await fetch(`${Q}/api/tests/${e}/submit`,{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${a}`},body:JSON.stringify({sessionId:i,answers:t,timeTaken:s})});if(!o.ok){const v=await o.json();throw new Error(v.message||"Submission failed")}const l=await o.json();localStorage.removeItem(`test-${e}-progress`);const d=l.data||l,c=d.score||0,u=d.passed||!1,h=d.earnedPoints||0,g=d.totalPoints||0,m=`test-completed-${e}`;localStorage.setItem(m,JSON.stringify({testId:e,score:c,maxScore,percentage,completedAt:new Date().toISOString(),correctCount,totalQuestions}));const p=percentage>=70,f=percentage>=50,b=`
            <div style="background: var(--bg-primary); min-height: 100vh; display: flex; align-items: center; justify-content: center; padding: 2rem 1.5rem;">
                <div style="max-width: 600px; width: 100%;">
                    <!-- Results Card -->
                    <div style="background: var(--bg-secondary); border-radius: 16px; padding: 3rem 2rem; box-shadow: 0 10px 40px rgba(0,0,0,0.2); border: 2px solid var(--border-color); text-align: center;">
                        
                        <!-- Result Emoji/Icon -->
                        <div style="font-size: 5rem; margin-bottom: 1.5rem; animation: bounce 0.6s ease;">
                            ${p?"🎉":f?"👍":"📚"}
                        </div>

                        <!-- Title -->
                        <h1 style="margin: 0 0 0.5rem 0; font-size: 2rem; font-weight: 800; color: var(--text-primary);">
                            ${n==="uz"?p?"🌟 Ajoyib!":f?"Yaxshi!":"Qayta harakat qiling":p?"🌟 Отлично!":f?"Хорошо!":"Попробуйте снова"}
                        </h1>

                        <p style="margin: 0 0 2rem 0; color: var(--text-secondary); font-size: 1rem;">
                            ${n==="uz"?"Siz testni yakunladingiz!":"Вы завершили тест!"}
                        </p>

                        <!-- Score Display -->
                        <div style="background: linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(139, 92, 246, 0.1) 100%); border: 2px solid var(--primary); border-radius: 14px; padding: 2rem; margin-bottom: 2rem;">
                            <div style="font-size: 0.9rem; color: var(--text-muted); font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 0.5rem;">
                                📊 ${n==="uz"?"Ballangiz":"Ваш балл"}
                            </div>
                            <div style="font-size: 3rem; font-weight: 800; color: var(--primary); margin-bottom: 1rem;">
                                ${c} / ${maxScore}
                            </div>
                            
                            <!-- Score Bar -->
                            <div style="height: 10px; background: var(--bg-tertiary); border-radius: 5px; overflow: hidden; margin-bottom: 1rem;">
                                <div style="height: 100%; background: linear-gradient(90deg, ${p?"#10B981":f?"#F59E0B":"#EF4444"} 0%, ${p?"#34D399":f?"#FBBF24":"#F87171"} 100%); width: ${percentage}%; border-radius: 5px; transition: width 0.6s ease;"></div>
                            </div>

                            <div style="display: flex; justify-content: space-around; gap: 1rem; flex-wrap: wrap;">
                                <div>
                                    <div style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 0.25rem;">
                                        ${n==="uz"?"Foizda":"Процент"}
                                    </div>
                                    <div style="font-size: 1.5rem; font-weight: 700; color: ${p?"#10B981":f?"#F59E0B":"#EF4444"};">
                                        ${percentage}%
                                    </div>
                                </div>
                                <div>
                                    <div style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 0.25rem;">
                                        ✅ ${n==="uz"?"To'g'ri":"Правильно"}
                                    </div>
                                    <div style="font-size: 1.5rem; font-weight: 700; color: #10B981;">
                                        ${correctCount}/${totalQuestions}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Status Badge -->
                        <div style="background: ${p?"rgba(16, 185, 129, 0.1); border: 2px solid #10B981":f?"rgba(245, 158, 11, 0.1); border: 2px solid #F59E0B":"rgba(239, 68, 68, 0.1); border: 2px solid #EF4444"}; border-radius: 10px; padding: 1rem; margin-bottom: 2rem;">
                            <p style="margin: 0; color: ${p?"#10B981":f?"#F59E0B":"#EF4444"}; font-weight: 700;">
                                ${p?n==="uz"?"✅ Siz o'tkazib kittingiz!":"✅ Вы прошли тест!":f?n==="uz"?"⚠️ Davom ettiring":"⚠️ Улучшайтесь":n==="uz"?"❌ Qayta harakat qiling":"❌ Попробуйте снова"}
                            </p>
                        </div>

                        <!-- Details -->
                        <div style="background: var(--bg-tertiary); border-radius: 10px; padding: 1.5rem; margin-bottom: 2rem; text-align: left; border: 1px solid var(--border-color);">
                            <h3 style="margin: 0 0 1rem 0; color: var(--text-primary); font-size: 1rem; font-weight: 700;">
                                ${n==="uz"?"📈 Natijalar":"📈 Результаты"}
                            </h3>
                            <div style="display: flex; flex-direction: column; gap: 0.75rem;">
                                <div style="display: flex; justify-content: space-between; align-items: center; padding-bottom: 0.75rem; border-bottom: 1px solid var(--border-color);">
                                    <span style="color: var(--text-secondary);">${n==="uz"?"Jami savollar":"Всего вопросов"}:</span>
                                    <span style="font-weight: 700; color: var(--primary);">${totalQuestions}</span>
                                </div>
                                <div style="display: flex; justify-content: space-between; align-items: center; padding-bottom: 0.75rem; border-bottom: 1px solid var(--border-color);">
                                    <span style="color: var(--text-secondary);">✅ ${n==="uz"?"To'g'ri javoblar":"Правильно"}:</span>
                                    <span style="font-weight: 700; color: #10B981;">${correctCount}</span>
                                </div>
                                <div style="display: flex; justify-content: space-between; align-items: center;">
                                    <span style="color: var(--text-secondary);">❌ ${n==="uz"?"Noto'g'ri javoblar":"Неправильно"}:</span>
                                    <span style="font-weight: 700; color: #EF4444;">${totalQuestions-correctCount}</span>
                                </div>
                            </div>
                        </div>

                        <!-- Action Button -->
                        <button class="button button-primary" id="btnBackToDashboard" style="width: 100%; padding: 1rem; font-size: 1rem; font-weight: 700; display: flex; align-items: center; justify-content: center; gap: 0.5rem;">
                            ← ${n==="uz"?"Bosh sahifaga":"На главную"}
                        </button>
                    </div>

                    <!-- Motivation Message -->
                    <div style="text-align: center; margin-top: 2rem; padding: 1.5rem; background: var(--bg-secondary); border-radius: 10px; border: 1px dashed var(--border-color);">
                        <p style="margin: 0; color: var(--text-secondary); font-size: 0.95rem;">
                            ${p?n==="uz"?"🌟 Tabriklaysiz! Siz yaxshi natijavga erishdingiz.":"🌟 Поздравляем! Вы отлично справились.":f?n==="uz"?"💪 Yana biroz harakat qiling va oʻtkazib ketasiz!":"💪 Еще немного усилий и вы справитесь!":n==="uz"?"📚 Materialni qayta oʻrganing va qayta harakat qiling.":"📚 Повторите материал и попробуйте еще раз."}
                        </p>
                    </div>
                </div>
            </div>

            <style>
                @keyframes bounce {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-20px); }
                }
            </style>
        `;F(b,"student"),(r=document.getElementById("btnBackToDashboard"))==null||r.addEventListener("click",()=>{_.navigate("/student/dashboard")})}catch(o){console.error("❌ Error submitting control test:",o),D(n==="uz"?"Xatolik yuz berdi: "+o.message:"Ошибка: "+o.message,"error",6e3)}}function ca(){if(!k.getState().user){_.navigate("/login");return}_.navigate("/teacher/subjects")}async function Sh(){var n,a,r,o,l;const e=k.getState().user,t=k.getState().language;if(!e){_.navigate("/login");return}const i=`
        <div class="page-header">
            <h1>${t==="uz"?"Mening fanlarim":"Мои предметы"}</h1>
            <p>${e.firstName} ${e.lastName} • ${E("teacher")}</p>
        </div>

        <div class="dashboard-cards" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.5rem; margin-bottom: 2rem;">
            <div class="dashboard-card" style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); cursor: pointer;" id="btnTeacherProfile">
                <div class="card-icon">📊</div>
                <div class="card-content">
                    <h3 style="color: white;">${t==="uz"?"Profil va Statistika":"Профиль и Статистика"}</h3>
                    <p style="color: white;">${t==="uz"?"Analitika va natijalar":"Аналитика и результаты"}</p>
                </div>
                <div class="card-arrow">→</div>
            </div>

            <div class="dashboard-card" style="background: linear-gradient(135deg, #0ea5e9 0%, #38bdf8 100%); cursor: pointer;" id="btnTeacherModuleAnalytics">
                <div class="card-icon">📈</div>
                <div class="card-content">
                    <h3 style="color: white;">${t==="uz"?"Mavzu analitikasi":"Аналитика по темам"}</h3>
                    <p style="color: white;">${t==="uz"?"Sinf va fan kesimida":"По классам и предметам"}</p>
                </div>
                <div class="card-arrow">→</div>
            </div>
            
            <div class="dashboard-card" style="background: linear-gradient(135deg, #6366f1 0%, #a855f7 100%); cursor: pointer;" id="btnTeacherTests">
                <div class="card-icon">📋</div>
                <div class="card-content">
                    <h3 style="color: white;">${t==="uz"?"Mening testlarim":"Мои тесты"}</h3>
                    <p style="color: white;">${t==="uz"?"Malaka baholash testlari":"Тесты на оценку компетенций"}</p>
                </div>
                <div class="card-arrow">→</div>
            </div>

            <div class="dashboard-card" style="background: linear-gradient(135deg, #ec4899 0%, #f97316 100%); cursor: pointer;" id="btnTeacherControlTests">
                <div class="card-icon">✏️</div>
                <div class="card-content">
                    <h3 style="color: white;">${t==="uz"?"Nazorat isbotlari":"Контрольные работы"}</h3>
                    <p style="color: white;">${t==="uz"?"Sinov va tahlil":"Создание и оценка"}</p>
                </div>
                <div class="card-arrow">→</div>
            </div>

            <div class="dashboard-card" style="background: linear-gradient(135deg, #14b8a6 0%, #06b6d4 100%); cursor: pointer;" id="btnTeacherClasses">
                <div class="card-icon">👥</div>
                <div class="card-content">
                    <h3 style="color: white;">${t==="uz"?"Mening sinflarim":"Мои классы"}</h3>
                    <p style="color: white;">${t==="uz"?"Oqituvchi va analitika":"Ученики и аналитика"}</p>
                </div>
                <div class="card-arrow">→</div>
            </div>
        </div>
        
        <div class="card" style="margin-bottom: 2rem;">
            <h3>${t==="uz"?"Tanlangan fanlar":"Выбранные предметы"}</h3>
            <p style="color: var(--text-muted); margin-bottom: 1.5rem;">
                ${t==="uz"?"Quyidagi fanlarni o'qitasiz. Har bir fan uchun modullar va testlar yaratishingiz mumkin.":"Вы преподаете следующие предметы. Вы можете создавать модули и тесты для каждого предмета."}
            </p>
            <div id="teacherSubjects">
                <div class="loading">
                    <div class="spinner"></div>
                </div>
            </div>
        </div>
    `;F(i,"teacher"),(n=document.getElementById("btnTeacherProfile"))==null||n.addEventListener("click",()=>{_.navigate("/teacher/profile")}),(a=document.getElementById("btnTeacherTests"))==null||a.addEventListener("click",()=>{_.navigate("/teacher/tests")}),(r=document.getElementById("btnTeacherModuleAnalytics"))==null||r.addEventListener("click",()=>{_.navigate("/teacher/subject-analytics")}),(o=document.getElementById("btnTeacherControlTests"))==null||o.addEventListener("click",()=>{_.navigate("/teacher/control-tests")}),(l=document.getElementById("btnTeacherClasses"))==null||l.addEventListener("click",()=>{_.navigate("/teacher/classes")});const s=await A("/api/subjects");if(s.success&&s.data){const d=s.data,c=Array.isArray(e.subjects)?e.subjects:[],u=new Set(c.map(m=>(m==null?void 0:m.id)||(m==null?void 0:m._id)||(m==null?void 0:m.subjectId)||m).filter(Boolean)),h=u.size?d.filter(m=>u.has(m._id||m.id)):d,g=document.getElementById("teacherSubjects");g.innerHTML=`
            <div class="subjects-grid">
                ${h.map(m=>`
                    <div class="subject-card" data-subject-id="${m.id}" style="background: linear-gradient(135deg, var(--bg-secondary) 0%, var(--bg-tertiary) 100%); border: 1px solid var(--border-color); transition: all 0.3s ease; cursor: pointer;">
                        <div class="subject-header" style="pointer-events: none;">
                            <div class="subject-icon" style="width: 64px; height: 64px; background: linear-gradient(135deg, var(--primary), var(--accent)); border-radius: 16px; display: flex; align-items: center; justify-content: center; font-size: 2rem; box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);">${hr(m.name)}</div>
                            <h3 style="margin: 1rem 0 0.5rem 0; font-size: 1.25rem;">${m.name}</h3>
                        </div>
                        <div class="subject-info" style="margin: 0.75rem 0; pointer-events: none;">
                            <p id="subject-${m.id}-stats" style="color: var(--text-muted); font-size: 0.875rem; display: flex; align-items: center; justify-content: center; gap: 0.5rem;">
                                <span style="font-size: 1.125rem;">📦</span>
                                ${t==="uz"?"Yuklanmoqda...":"Загрузка..."}
                            </p>
                        </div>
                        <button class="button button-primary" style="width: 100%; padding: 12px 20px; font-size: 15px; font-weight: 600; background: linear-gradient(135deg, var(--primary), var(--accent)); border: none; border-radius: 10px; display: flex; align-items: center; justify-content: center; gap: 0.5rem; box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3); transition: all 0.3s ease; pointer-events: none;">
                            <span>⚡</span>
                            <span>${t==="uz"?"Boshqarish":"Управление"}</span>
                            <span>→</span>
                        </button>
                    </div>
                `).join("")}
            </div>
        `,document.querySelectorAll(".subject-card").forEach(m=>{m.addEventListener("click",p=>{const f=m.getAttribute("data-subject-id");f&&_.navigate(`/teacher/subject/${f}`)})}),console.log("📊 Loading module counts for subjects..."),h.forEach(async m=>{console.log("📦 Loading modules for subject:",m.id);const p=await A(`/api/subjects/${m.id}/modules`);console.log("📦 Modules result for subject "+m.id+":",p);const f=document.getElementById(`subject-${m.id}-stats`);if(f&&p.success){const b=p.data.length;console.log("✅ Module count for subject "+m.id+":",b),f.textContent=`${b} ${t==="uz"?"ta modul":b===1?"модуль":"модулей"}`}else console.error("❌ Failed to load modules for subject "+m.id+":",p)})}}async function Th(){const e=window.location.pathname.split("/").pop(),t=k.getState().language,i=k.getState().user;console.log("🔍 renderTeacherSubjectManagement called with subjectId:",e),console.log("📍 Current path:",window.location.pathname),F(`
        <div class="page-header" style="margin-bottom: 2rem;">
            <div style="display: flex; justify-content: space-between; align-items: center;">
                <div>
                    <h1 id="subjectName" style="background: linear-gradient(135deg, var(--primary), var(--accent)); -webkit-background-clip: text; -webkit-text-fill-color: transparent; margin-bottom: 0.5rem;">${t==="uz"?"Yuklanmoqda...":"Загрузка..."}</h1>
                    <p style="color: var(--text-muted); margin: 0;">${t==="uz"?"Modullar va testlarni boshqarish":"Управление модулями и тестами"}</p>
                </div>
                <button class="button button-secondary" id="btnBackToSubjects" style="display: flex; align-items: center; gap: 0.5rem; padding: 12px 20px; border-radius: 10px; transition: all 0.3s ease;">
                    <span>←</span>
                    <span>${t==="uz"?"Fanlar ro'yxati":"Список предметов"}</span>
                </button>
            </div>
        </div>
        
        <!-- Create Module Section -->
        <div class="card create-module-card" style="background: linear-gradient(135deg, var(--bg-secondary) 0%, var(--bg-tertiary) 100%); border: 1px solid var(--border-color); margin-bottom: 2rem; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);">
            <div class="card-header-flex">
                <div style="width: 48px; height: 48px; background: linear-gradient(135deg, var(--accent), #06b6d4); border-radius: 12px; display: flex; align-items: center; justify-content: center; font-size: 1.75rem; box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3); flex-shrink: 0;">
                    ➕
                </div>
                <div>
                    <h3 style="margin: 0; font-size: 1.25rem;">${t==="uz"?"Yangi modul yaratish":"Создать новый модуль"}</h3>
                    <p style="margin: 0.25rem 0 0 0; color: var(--text-muted); font-size: 0.875rem;">${t==="uz"?"Fan uchun yangi modul qo'shing":"Добавьте новый модуль для предмета"}</p>
                </div>
            </div>
            <form id="createModuleForm" class="module-form">
                <div class="form-group">
                    <label class="form-label">
                        <span style="font-size: 1.25rem;">📚</span>
                        ${t==="uz"?"Modul nomi":"Название модуля"}
                    </label>
                    <input type="text" class="form-input" id="moduleName" placeholder="${t==="uz"?"Masalan: Algebra asoslari":"Например: Основы алгебры"}" required />
                </div>
                <div class="form-group">
                    <label class="form-label">
                        <span style="font-size: 1.25rem;">📝</span>
                        ${t==="uz"?"Tavsif":"Описание"}
                    </label>
                    <textarea class="form-textarea" id="moduleDesc" rows="3" placeholder="${t==="uz"?"Modul haqida qisqacha ma'lumot":"Краткая информация о модуле"}"></textarea>
                </div>
                <button type="submit" class="button button-primary submit-btn">
                    <span style="font-size: 1.25rem;">✨</span>
                    <span>${t==="uz"?"Modulni yaratish":"Создать модуль"}</span>
                </button>
            </form>
            <div id="moduleMessage" style="margin-top: 1rem;"></div>
        </div>
        
        <!-- Modules List -->
        <div class="card" style="border: 1px solid var(--border-color); box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);">
            <div style="display: flex; align-items: center; gap: 1rem; margin-bottom: 2rem; padding-bottom: 1.5rem; border-bottom: 1px solid var(--border-color);">
                <div style="width: 48px; height: 48px; background: linear-gradient(135deg, var(--primary), var(--accent)); border-radius: 12px; display: flex; align-items: center; justify-content: center; font-size: 1.75rem; box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);">
                    📦
                </div>
                <div>
                    <h3 style="margin: 0; font-size: 1.25rem;">${t==="uz"?"Mavjud modullar":"Существующие модули"}</h3>
                    <p style="margin: 0.25rem 0 0 0; color: var(--text-muted); font-size: 0.875rem;">${t==="uz"?"Barcha yaratilgan modullar":"Все созданные модули"}</p>
                </div>
            </div>
            <div id="modulesList">
                <div class="loading">
                    <div class="spinner"></div>
                </div>
            </div>
        </div>
    `,"teacher");const n=await A("/api/subjects");if(n.success){const a=n.data.find(r=>r._id===e);if((i==null?void 0:i.role)==="teacher"){const r=Array.isArray(i.subjects)?i.subjects:[],o=new Set(r.map(l=>(l==null?void 0:l.id)||(l==null?void 0:l._id)||(l==null?void 0:l.subjectId)||l).filter(Boolean));if(o.size&&!o.has(e)){D(t==="uz"?"Bu fan sizga biriktirilmagan":"Этот предмет вам не назначен","error"),_.navigate("/teacher/subjects");return}}a&&(document.getElementById("subjectName").textContent=t==="uz"?a.nameUz:a.nameRu,window.currentSubject=a)}await ki(e),document.getElementById("btnBackToSubjects").addEventListener("click",()=>{_.navigate("/teacher/subjects")}),document.getElementById("createModuleForm").addEventListener("submit",async a=>{var c;a.preventDefault();const r=document.getElementById("moduleName").value,o=document.getElementById("moduleDesc").value,l=await A(`/api/subjects/${e}/modules`,{method:"POST",body:JSON.stringify({name:r,description:o})}),d=document.getElementById("moduleMessage");if(l.success){if(d.innerHTML=`<div class="success-message">${t==="uz"?"✓ Modul muvaffaqiyatli yaratildi!":"✓ Модуль успешно создан!"}</div>`,document.getElementById("createModuleForm").reset(),await ki(e),(c=l.data)!=null&&c._id){await A(`/api/modules/${l.data._id}/tests`,{method:"POST",body:JSON.stringify({name:t==="uz"?"Test":"Тест",duration:30,maxScore:100,status:"published",questions:[]})}),_.navigate(`/teacher/module/${l.data._id}/tests`);return}setTimeout(()=>{d.innerHTML=""},3e3)}else d.innerHTML=`<div class="error-message">${l.error||E("error")}</div>`})}async function ki(e){var a;const t=k.getState().language,i=document.getElementById("modulesList");console.log("🔍 loadSubjectModules called with subjectId:",e),i.innerHTML=`
        <div class="loading">
            <div class="spinner"></div>
            <p>${t==="uz"?"Yuklanmoqda...":"Загрузка..."}</p>
        </div>
    `;const s=await A(`/api/subjects/${e}/modules`);console.log("📦 Modules API response:",s),console.log("📊 result.success:",s.success),console.log("📊 result.data:",s.data);const n=((a=s.data)==null?void 0:a.data)||s.data||[];if(console.log("📊 modulesData:",n),console.log("📊 modulesData.length:",n.length),console.log("📊 Is array?",Array.isArray(n)),s.success&&n&&n.length>0){console.log("✅ Found",n.length,"modules");const r=await Promise.all(n.map(async o=>{var c;const l=await A(`/api/modules/${o._id}/tests`),d=((c=l.data)==null?void 0:c.data)||l.data||[];return{...o,testCount:Array.isArray(d)?d.length:0}}));console.log("✅ Modules with test counts:",r),i.innerHTML=r.map(o=>`
            <div class="card module-item" data-module-id="${o._id}" style="margin-bottom: 1.5rem; background: linear-gradient(135deg, var(--bg-secondary) 0%, var(--bg-tertiary) 100%); border: 1px solid var(--border-color); border-left: 4px solid var(--accent); transition: all 0.3s ease; box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08); position: relative; overflow: hidden;">
                <div style="position: absolute; top: 0; right: 0; width: 100px; height: 100px; background: linear-gradient(135deg, var(--accent) 0%, transparent 50%); opacity: 0.1; pointer-events: none;"></div>
                <div style="display: flex; justify-content: space-between; align-items: flex-start; gap: 2rem; position: relative;">
                    <div style="flex: 1;">
                        <div style="display: flex; align-items: flex-start; gap: 1.25rem; margin-bottom: 1.25rem;">
                            <div style="width: 56px; height: 56px; background: linear-gradient(135deg, var(--accent), #06b6d4); border-radius: 14px; display: flex; align-items: center; justify-content: center; font-size: 1.75rem; flex-shrink: 0; box-shadow: 0 4px 12px rgba(59, 130, 246, 0.25);">
                                📦
                            </div>
                            <div style="flex: 1; padding-top: 0.25rem;">
                                <h4 style="margin: 0 0 0.5rem 0; font-size: 1.25rem; font-weight: 600; color: var(--text-primary);">${t==="uz"?o.nameUz:o.nameRu}</h4>
                                <p style="color: var(--text-muted); margin: 0; font-size: 0.9rem; line-height: 1.5;">
                                    ${t==="uz"?o.descriptionUz:o.descriptionRu}
                                </p>
                            </div>
                        </div>
                        <div style="display: flex; gap: 2.5rem; font-size: 0.875rem; padding: 1rem; background: var(--bg-primary); border-radius: 10px; margin-left: 72px;">
                            <div style="display: flex; align-items: center; gap: 0.75rem;">
                                <div style="width: 32px; height: 32px; background: linear-gradient(135deg, var(--primary), var(--accent)); border-radius: 8px; display: flex; align-items: center; justify-content: center; font-size: 1rem;">📝</div>
                                <div>
                                    <div style="color: var(--text-muted); font-size: 0.75rem; margin-bottom: 0.125rem;">${t==="uz"?"Testlar":"Тесты"}</div>
                                    <div style="font-weight: 600; color: var(--text-primary);">${o.testCount}</div>
                                </div>
                            </div>
                            <div style="display: flex; align-items: center; gap: 0.75rem;">
                                <div style="width: 32px; height: 32px; background: linear-gradient(135deg, #10b981, #059669); border-radius: 8px; display: flex; align-items: center; justify-content: center; font-size: 1rem;">📅</div>
                                <div>
                                    <div style="color: var(--text-muted); font-size: 0.75rem; margin-bottom: 0.125rem;">${t==="uz"?"Yaratilgan":"Создано"}</div>
                                    <div style="font-weight: 600; color: var(--text-primary);">${new Date(o.createdAt).toLocaleDateString()}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div style="display: flex; flex-direction: column; gap: 0.75rem; min-width: 160px;">
                        <button class="btn-module-tests button button-primary" data-module-id="${o._id}" style="width: 100%; padding: 12px 18px; font-size: 0.9rem; font-weight: 600; background: linear-gradient(135deg, var(--primary), var(--accent)); border: none; border-radius: 10px; box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3); transition: all 0.3s ease; display: flex; align-items: center; justify-content: center; gap: 0.5rem;">
                            <span>📝</span>
                            <span>${t==="uz"?"Testlar":"Тесты"}</span>
                        </button>
                        <button class="btn-module-edit button button-secondary" data-module-id="${o._id}" style="width: 100%; padding: 12px 18px; font-size: 0.9rem; font-weight: 600; border-radius: 10px; transition: all 0.3s ease; display: flex; align-items: center; justify-content: center; gap: 0.5rem;">
                            <span>✏️</span>
                            <span>${t==="uz"?"Tahrirlash":"Редактировать"}</span>
                        </button>
                        <button class="btn-module-delete button button-danger" data-module-id="${o._id}" data-subject-id="${e}" style="width: 100%; padding: 12px 18px; font-size: 0.9rem; font-weight: 600; border-radius: 10px; transition: all 0.3s ease; display: flex; align-items: center; justify-content: center; gap: 0.5rem;">
                            <span>🗑️</span>
                            <span>${t==="uz"?"O'chirish":"Удалить"}</span>
                        </button>
                    </div>
                </div>
            </div>
        `).join(""),document.querySelectorAll(".btn-module-tests").forEach(o=>{o.addEventListener("click",()=>{const l=o.getAttribute("data-module-id");_.navigate(`/teacher/module/${l}/tests`)})}),document.querySelectorAll(".btn-module-edit").forEach(o=>{o.addEventListener("click",()=>{const l=o.getAttribute("data-module-id");Mh(l)})}),document.querySelectorAll(".btn-module-delete").forEach(o=>{o.addEventListener("click",()=>{const l=o.getAttribute("data-module-id"),d=o.getAttribute("data-subject-id");Ch(l,d)})}),console.log("✅ Event listeners attached to",document.querySelectorAll(".btn-module-tests").length,"buttons")}else s.success?(console.log("⚠️ No modules found - showing empty state"),i.innerHTML=`
            <div class="card" style="text-align: center; padding: 4rem 2rem; background: linear-gradient(135deg, var(--bg-secondary) 0%, var(--bg-tertiary) 100%); border: 2px dashed var(--border-color);">
                <div style="font-size: 4rem; margin-bottom: 1rem; opacity: 0.5;">📦</div>
                <p style="color: var(--text-muted); font-size: 1.125rem; font-weight: 500; margin-bottom: 0.5rem;">
                    ${t==="uz"?"Hali modullar yaratilmagan":"Модули еще не созданы"}
                </p>
                <p style="color: var(--text-muted); margin-top: 0.5rem; font-size: 0.875rem;">
                    ${t==="uz"?"Yuqorida yangi modul yarating":"Создайте новый модуль выше"}
                </p>
            </div>
        `):i.innerHTML=`<div class="error-message">${s.error||E("error")}</div>`}function Mh(e){var o;const t=k.getState().language,i=(o=window.currentModules)==null?void 0:o.find(l=>l._id===e);if(!i){alert(t==="uz"?"Modul topilmadi":"Модуль не найден");return}const s=prompt(t==="uz"?"Modul nomi (Ruscha):":"Название модуля (RU):",i.nameRu);if(!s)return;const n=prompt(t==="uz"?"Modul nomi (O'zbekcha):":"Название модуля (UZ):",i.nameUz);if(!n)return;const a=prompt(t==="uz"?"Tavsif (Ruscha):":"Описание (RU):",i.descriptionRu);if(!a)return;const r=prompt(t==="uz"?"Tavsif (O'zbekcha):":"Описание (UZ):",i.descriptionUz);r&&Eh(e,s,n,a,r)}async function Eh(e,t,i,s,n){const a=k.getState().language,r=await A(`/api/modules/${e}`,{method:"PUT",body:JSON.stringify({nameRu:t,nameUz:i,descriptionRu:s,descriptionUz:n})});if(r.success){alert(a==="uz"?"Modul muvaffaqiyatli yangilandi!":"Модуль успешно обновлен!");const o=window.location.pathname.split("/")[3];await ki(o)}else alert(r.error||(a==="uz"?"Xato":"Ошибка"))}async function Ch(e,t){const i=k.getState().language;if(!confirm(i==="uz"?"Modulni o'chirishga ishonchingiz komilmi? Modul ichidagi barcha testlar ham o'chadi!":"Вы уверены, что хотите удалить модуль? Все тесты внутри модуля также будут удалены!"))return;const s=await A(`/api/modules/${e}`,{method:"DELETE"});s.success?await ki(t):alert(s.error||E("error"))}async function Lh(e){var s;const t=k.getState().language,i=k.getState().token;try{const n=await fetch(`${Q}/api/teacher/test-results`,{headers:{Authorization:`Bearer ${i}`}});if(!n.ok)throw new Error("Failed to fetch results");const o=((await n.json()).data||[]).filter(d=>d.test_id===e),l=`
            <style>
                @media (max-width: 768px) {
                    #resultsHeader { flex-direction: column; align-items: flex-start; gap: 1rem; }
                    #btnBackFromResults { width: 100%; }
                    .results-table { font-size: 0.9rem; }
                    .results-table th, .results-table td { padding: 0.75rem 0.5rem !important; }
                    .student-name { font-size: 0.9rem; }
                    .student-id { font-size: 0.75rem; }
                }
                @media (max-width: 480px) {
                    #resultsHeader { padding: 0; }
                    #resultsHeader h1 { font-size: 1.5rem; }
                    #resultsHeader p { font-size: 0.85rem; }
                    #btnBackFromResults { padding: 0.6rem 1rem; font-size: 0.85rem; }
                    .results-table { font-size: 0.8rem; }
                    .results-table th, .results-table td { padding: 0.5rem 0.25rem !important; }
                    .student-name { font-size: 0.8rem; }
                    .student-id { display: none; }
                    .results-table th:nth-child(4), .results-table td:nth-child(4) { display: none; }
                }
            </style>
            <div style="background: var(--bg-primary); min-height: 100vh; padding: 2rem 1.5rem;">
                <div style="max-width: 1200px; margin: 0 auto;">
                    <!-- Header -->
                    <div id="resultsHeader" style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 2rem;">
                        <div>
                            <h1 style="margin: 0; font-size: 2rem;">${t==="uz"?"📊 Natijalar":"📊 Результаты"}</h1>
                            <p style="margin: 0.5rem 0 0 0; color: var(--text-secondary);">
                                ${o.length} ${t==="uz"?"ta natija":"результатов"}
                            </p>
                        </div>
                        <button class="btn-secondary" id="btnBackFromResults" style="padding: 0.75rem 1.5rem;">
                            ← ${t==="uz"?"Orqaga":"Назад"}
                        </button>
                    </div>

                    <!-- Results Table -->
                    ${o.length===0?`
                        <div class="card" style="text-align: center; padding: 3rem;">
                            <p style="color: var(--text-secondary); font-size: 1.1rem;">
                                ${t==="uz"?"Hali natija yo'q":"Результатов нет"}
                            </p>
                        </div>
                    `:`
                        <div style="background: var(--bg-secondary); border-radius: 12px; border: 1px solid var(--border-color); overflow-x: auto;">
                            <table class="results-table" style="width: 100%; border-collapse: collapse;">
                                <thead>
                                    <tr style="background: var(--bg-tertiary); border-bottom: 2px solid var(--border-color);">
                                        <th style="padding: 1rem; text-align: left; font-weight: 700;">${t==="uz"?"Talaba":"Студент"}</th>
                                        <th style="padding: 1rem; text-align: center; font-weight: 700;">✅ ${t==="uz"?"To'g'ri":"Правильно"}</th>
                                        <th style="padding: 1rem; text-align: center; font-weight: 700;">📊 ${t==="uz"?"Ball":"Балл"}</th>
                                        <th style="padding: 1rem; text-align: center; font-weight: 700;">📈 ${t==="uz"?"Foiz":"Процент"}</th>
                                        <th style="padding: 1rem; text-align: center; font-weight: 700;">📅 ${t==="uz"?"Vaqt":"Время"}</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    ${o.map(d=>{const c=d.totalCount>0?Math.round(d.correctCount/d.totalCount*100):0,u=new Date(d.completedAt).toLocaleDateString();return`
                                        <tr style="border-bottom: 1px solid var(--border-color); hover: background: var(--bg-tertiary);">
                                            <td style="padding: 1rem;">
                                                <div class="student-name" style="font-weight: 600;">${d.userName||"Неизвестный"}</div>
                                                <div class="student-id" style="font-size: 0.85rem; color: var(--text-secondary);">${d.userId||""}</div>
                                            </td>
                                            <td style="padding: 1rem; text-align: center;">
                                                <span style="font-weight: 700; color: #10B981;">${d.correctCount}/${d.totalCount}</span>
                                            </td>
                                            <td style="padding: 1rem; text-align: center;">
                                                <span style="font-weight: 700;">${d.score}</span>
                                            </td>
                                            <td style="padding: 1rem; text-align: center;">
                                                <span style="font-weight: 700; color: ${c>=70?"#10B981":c>=50?"#F59E0B":"#EF4444"};">
                                                    ${c}%
                                                </span>
                                            </td>
                                            <td style="padding: 1rem; text-align: center;">
                                                <span style="color: var(--text-secondary);">${u}</span>
                                            </td>
                                        </tr>
                                        `}).join("")}
                                </tbody>
                            </table>
                        </div>
                    `}
                </div>
            </div>
        `;F(l,"teacher"),(s=document.getElementById("btnBackFromResults"))==null||s.addEventListener("click",()=>{_.navigate("/teacher/control-tests")})}catch(n){console.error("❌ Error loading results:",n),D(t==="uz"?"Natijalarni yuklashda xatolik":"Ошибка при загрузке результатов","error"),_.navigate("/teacher/control-tests")}}async function Ah(e){var s;const t=k.getState().language,i=k.getState().token;try{const n=await fetch(`${Q}/api/tests/${e}`,{headers:{Authorization:`Bearer ${i}`}});if(!n.ok)throw new Error("Failed to fetch test");const a=await n.json(),r=a.data||a,o=r.questions||[],l=`
            <style>
                @media (max-width: 768px) {
                    #previewHeader { flex-direction: column; align-items: flex-start; gap: 1rem; }
                    #previewHeader h1 { font-size: 1.5rem; }
                    #btnBackFromPreview { width: 100%; }
                    .test-info-grid { grid-template-columns: 1fr !important; }
                    .question-card { padding: 1.25rem !important; }
                    .question-badge { width: 36px; height: 36px; font-size: 0.9rem; }
                    .answer-option { padding: 0.75rem !important; gap: 0.5rem !important; }
                }
                @media (max-width: 480px) {
                    #previewHeader { padding: 0; }
                    #previewHeader h1 { font-size: 1.3rem; }
                    #previewHeader p { font-size: 0.85rem; line-height: 1.4; }
                    #btnBackFromPreview { padding: 0.6rem 1rem; font-size: 0.85rem; }
                    .test-info-grid { grid-template-columns: 1fr !important; }
                    .test-info-box { padding: 1rem !important; }
                    .test-info-box-value { font-size: 1.3rem !important; }
                    .question-card { padding: 1rem !important; margin-bottom: 1rem !important; }
                    .question-badge { width: 32px; height: 32px; font-size: 0.85rem; margin-right: 0.5rem; }
                    .question-text { font-size: 1rem; }
                    .answer-option { padding: 0.65rem !important; font-size: 0.9rem; }
                    .answer-option input { width: 16px; height: 16px; }
                }
            </style>
            <div style="background: var(--bg-primary); min-height: 100vh; padding: 2rem 1.5rem;">
                <div style="max-width: 900px; margin: 0 auto;">
                    <!-- Header -->
                    <div id="previewHeader" style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 2rem;">
                        <div>
                            <h1 style="margin: 0; font-size: 2rem;">${r.title}</h1>
                            <p style="margin: 0.5rem 0 0 0; color: var(--text-secondary);">
                                ${t==="uz"?r.descriptionUz:r.descriptionRu}
                            </p>
                        </div>
                        <button class="btn-secondary" id="btnBackFromPreview" style="padding: 0.75rem 1.5rem;">
                            ← ${t==="uz"?"Orqaga":"Назад"}
                        </button>
                    </div>

                    <!-- Test Info -->
                    <div style="background: linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(139, 92, 246, 0.1) 100%); border: 2px solid var(--primary); border-radius: 12px; padding: 1.5rem; margin-bottom: 2rem;">
                        <div class="test-info-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem;">
                            <div class="test-info-box" style="padding: 1rem;">
                                <div style="font-size: 0.9rem; color: var(--text-secondary); font-weight: 600;">⏱️ ${t==="uz"?"Vaqt":"Время"}</div>
                                <div class="test-info-box-value" style="font-size: 1.5rem; font-weight: 800;">${r.duration_minutes||60} ${t==="uz"?"min":"мин"}</div>
                            </div>
                            <div class="test-info-box" style="padding: 1rem;">
                                <div style="font-size: 0.9rem; color: var(--text-secondary); font-weight: 600;">⭐ ${t==="uz"?"O'tish balli":"Проходной балл"}</div>
                                <div class="test-info-box-value" style="font-size: 1.5rem; font-weight: 800;">${r.pass_percent||60}%</div>
                            </div>
                            <div class="test-info-box" style="padding: 1rem;">
                                <div style="font-size: 0.9rem; color: var(--text-secondary); font-weight: 600;">❓ ${t==="uz"?"Savollar":"Вопросы"}</div>
                                <div class="test-info-box-value" style="font-size: 1.5rem; font-weight: 800;">${o.length}</div>
                            </div>
                        </div>
                    </div>

                    <!-- Questions -->
                    <div>
                        ${o.map((d,c)=>`
                            <div class="question-card" style="background: var(--bg-secondary); border: 2px solid var(--border-color); border-radius: 12px; padding: 1.5rem; margin-bottom: 1.5rem;">
                                <div style="display: flex; align-items: center; gap: 1rem; margin-bottom: 1rem;">
                                    <div class="question-badge" style="background: linear-gradient(135deg, var(--primary) 0%, var(--accent) 100%); color: white; width: 40px; height: 40px; border-radius: 8px; display: flex; align-items: center; justify-content: center; font-weight: 800;">
                                        ${c+1}
                                    </div>
                                    <h3 class="question-text" style="margin: 0; font-size: 1.1rem;">${d.text}</h3>
                                </div>
                                
                                <div style="margin-left: 56px; display: flex; flex-direction: column; gap: 0.75rem;">
                                    ${d.options.map((u,h)=>`
                                        <div class="answer-option" style="padding: 0.75rem 1rem; background: var(--bg-tertiary); border: 2px solid var(--border-color); border-radius: 8px; display: flex; align-items: center; gap: 0.75rem;">
                                            <input type="radio" disabled style="cursor: not-allowed;">
                                            <span>${u.text}</span>
                                        </div>
                                    `).join("")}
                                </div>
                            </div>
                        `).join("")}
                    </div>
                </div>
            </div>
        `;F(l,"teacher"),(s=document.getElementById("btnBackFromPreview"))==null||s.addEventListener("click",()=>{_.navigate("/teacher/control-tests")})}catch(n){console.error("❌ Error loading test:",n),D(t==="uz"?"Testni yuklashda xatolik":"Ошибка при загрузке теста","error"),_.navigate("/teacher/control-tests")}}async function Bh(e,t,i){var a,r,o;const s=k.getState().language,n=k.getState().token;try{const l=await fetch(`${Q}/api/tests/${e}`,{headers:{Authorization:`Bearer ${n}`}});if(!l.ok)throw new Error("Failed to fetch test");const d=await l.json(),c=d.data||d,u=`
            <style>
                @media (max-width: 768px) {
                    #editHeader { flex-direction: column; align-items: flex-start; gap: 1rem; }
                    #editHeader h1 { font-size: 1.5rem; }
                    #btnBackFromEdit { width: 100%; }
                    #editTestForm { padding: 1.5rem; }
                    .edit-input { font-size: 1rem; }
                    .edit-buttons { flex-direction: column; }
                    .edit-buttons button { width: 100%; }
                }
                @media (max-width: 480px) {
                    #editHeader { padding: 0; }
                    #editHeader h1 { font-size: 1.3rem; }
                    #btnBackFromEdit { padding: 0.6rem 1rem; font-size: 0.85rem; }
                    #editTestForm { padding: 1.25rem; }
                    .form-section h3 { font-size: 1rem; }
                    .form-group label { font-size: 0.9rem; }
                    .edit-input { padding: 0.65rem; font-size: 0.9rem; }
                    .edit-buttons { gap: 0.5rem; }
                    .edit-buttons button { padding: 0.6rem !important; font-size: 0.85rem; }
                }
            </style>
            <div style="background: var(--bg-primary); min-height: 100vh; padding: 2rem 1.5rem;">
                <div style="max-width: 1000px; margin: 0 auto;">
                    <!-- Header -->
                    <div id="editHeader" style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 2rem;">
                        <div>
                            <h1 style="margin: 0; font-size: 2rem;">✏️ ${s==="uz"?"Testni tahrirlash":"Редактировать тест"}</h1>
                        </div>
                        <button class="btn-secondary" id="btnBackFromEdit" style="padding: 0.75rem 1.5rem;">
                            ← ${s==="uz"?"Orqaga":"Назад"}
                        </button>
                    </div>

                    <!-- Edit Form -->
                    <form id="editTestForm" style="background: var(--bg-secondary); border-radius: 12px; padding: 2rem; border: 1px solid var(--border-color);">
                        <!-- Basic Info -->
                        <div class="form-section" style="margin-bottom: 2rem;">
                            <h3 style="margin: 0 0 1rem 0; font-size: 1.1rem;">${s==="uz"?"Asosiy ma'lumot":"Основная информация"}</h3>
                            
                            <div class="form-group" style="margin-bottom: 1rem;">
                                <label style="display: block; margin-bottom: 0.5rem; font-weight: 600;">
                                    ${s==="uz"?"Nomi (Rus)":"Название (Рус)"}
                                </label>
                                <input type="text" id="editNameRu" value="${c.nameRu||""}" class="edit-input" style="width: 100%; padding: 0.75rem; border: 1px solid var(--border-color); border-radius: 8px; background: var(--bg-tertiary); color: var(--text-primary); font-size: 1rem;">
                            </div>

                            <div class="form-group" style="margin-bottom: 1rem;">
                                <label style="display: block; margin-bottom: 0.5rem; font-weight: 600;">
                                    ${s==="uz"?"Nomi (Uzbek)":"Название (Узб)"}
                                </label>
                                <input type="text" id="editNameUz" value="${c.nameUz||""}" class="edit-input" style="width: 100%; padding: 0.75rem; border: 1px solid var(--border-color); border-radius: 8px; background: var(--bg-tertiary); color: var(--text-primary); font-size: 1rem;">
                            </div>

                            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
                                <div class="form-group">
                                    <label style="display: block; margin-bottom: 0.5rem; font-weight: 600;">
                                        ⏱️ ${s==="uz"?"Vaqt (daqiqa)":"Время (минут)"}
                                    </label>
                                    <input type="number" id="editDuration" value="${c.duration||60}" min="1" class="edit-input" style="width: 100%; padding: 0.75rem; border: 1px solid var(--border-color); border-radius: 8px; background: var(--bg-tertiary); color: var(--text-primary);">
                                </div>
                                <div class="form-group">
                                    <label style="display: block; margin-bottom: 0.5rem; font-weight: 600;">
                                        ⭐ ${s==="uz"?"Maksimal ball":"Макс. баллов"}
                                    </label>
                                    <input type="number" id="editMaxScore" value="${c.maxScore||100}" min="1" class="edit-input" style="width: 100%; padding: 0.75rem; border: 1px solid var(--border-color); border-radius: 8px; background: var(--bg-tertiary); color: var(--text-primary);">>
                                </div>
                            </div>
                        </div>

                        <!-- Action Buttons -->
                        <div class="edit-buttons" style="display: flex; gap: 1rem; justify-content: flex-end;">
                            <button type="button" class="btn-secondary" id="btnCancelEdit" style="padding: 0.75rem 1.5rem;">
                                ${s==="uz"?"Bekor qilish":"Отмена"}
                            </button>
                            <button type="button" class="btn-primary" id="btnSaveEdit" style="padding: 0.75rem 1.5rem;">
                                ✅ ${s==="uz"?"Saqlash":"Сохранить"}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        `;F(u,"teacher"),(a=document.getElementById("btnBackFromEdit"))==null||a.addEventListener("click",()=>{_.navigate("/teacher/control-tests")}),(r=document.getElementById("btnCancelEdit"))==null||r.addEventListener("click",()=>{_.navigate("/teacher/control-tests")}),(o=document.getElementById("btnSaveEdit"))==null||o.addEventListener("click",async()=>{const h=document.getElementById("editNameRu").value.trim(),g=document.getElementById("editNameUz").value.trim(),m=parseInt(document.getElementById("editDuration").value),p=parseInt(document.getElementById("editMaxScore").value);if(!h||!g||!m||!p){D(s==="uz"?"Barcha maydonlarni to'ldiring":"Заполните все поля","error");return}try{if(!(await fetch(`${Q}/api/tests/${e}`,{method:"PUT",headers:{"Content-Type":"application/json",Authorization:`Bearer ${n}`},body:JSON.stringify({title:h,durationMinutes:m,passPercent:p})})).ok)throw new Error("Update failed");D(s==="uz"?"✅ Saqlandi!":"✅ Сохранено!","success"),_.navigate("/teacher/control-tests")}catch(f){console.error("❌ Error updating test:",f),D(s==="uz"?"Xatolik yuz berdi":"Произошла ошибка","error")}})}catch(l){console.error("❌ Error loading test:",l),D(s==="uz"?"Testni yuklashda xatolik":"Ошибка при загрузке теста","error"),_.navigate("/teacher/control-tests")}}async function Ih(){var i;const e=k.getState().language;k.getState().user;const t=k.getState().token;try{const a=(await(await fetch(`${Q}/api/classes`,{headers:{Authorization:`Bearer ${t}`}})).json()).data||[],l=(await(await fetch(`${Q}/api/tests`,{headers:{Authorization:`Bearer ${t}`}})).json()).data||[],d=`
            <div class="page-header">
                <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 1rem;">
                    <div>
                        <h1>${e==="uz"?"Nazorat isbotlari":"Контрольные работы"}</h1>
                        <p>${e==="uz"?"Isbotlarni yaratish va boshqarish":"Создание и управление тестами"}</p>
                    </div>
                    <div style="display: flex; gap: 0.75rem; align-items: center;">
                        <button class="button button-secondary" id="btnBackFromControlTests">
                            ← ${e==="uz"?"Orqaga":"Назад"}
                        </button>
                        <button class="btn-primary" id="btnCreateControlTest">
                            <span>➕</span>
                            <span>${e==="uz"?"Yangi isbot":"Создать"}</span>
                        </button>
                    </div>
                </div>
            </div>

            <div id="controlTestsContainer" style="margin-top: 2rem;">
                ${l.length===0?`
                    <div class="card" style="text-align: center; padding: 3rem;">
                        <div style="font-size: 3rem; margin-bottom: 1rem;">✏️</div>
                        <h3>${e==="uz"?"Hali nazorat isboti mavjud emas":"Контрольные работы не созданы"}</h3>
                        <p style="color: var(--text-secondary); margin: 1rem 0;">${e==="uz"?"Birinchi nazorat isbotini yaratish uchun tugmani bosing":"Нажмите кнопку выше, чтобы создать первую контрольную работу"}</p>
                    </div>
                `:`
                    <div class="tests-grid" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 1.5rem;">
                        ${l.map(c=>`
                            <div class="card" data-test-id="${c.id}">
                                <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: 1rem;">
                                    <div>
                                        <h3 style="margin: 0; font-size: 1.1rem;">${c.title}</h3>
                                        <p style="margin: 0.5rem 0 0 0; color: var(--text-secondary); font-size: 0.9rem;">
                                            ${e==="uz"?`Sinf: ${c.target_role}`:`Класс: ${c.target_role}`}
                                        </p>
                                    </div>
                                    <div style="display: flex; gap: 0.5rem;">
                                        <button class="btn-icon btn-edit" data-test-id="${c.id}" style="padding: 0.5rem; background: var(--bg-secondary); border: none; border-radius: 6px; cursor: pointer;">✏️</button>
                                        <button class="btn-icon btn-delete" data-test-id="${c.id}" style="padding: 0.5rem; background: #fee2e2; border: none; border-radius: 6px; cursor: pointer; color: #dc2626;">🗑️</button>
                                    </div>
                                </div>
                                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-bottom: 1rem;">
                                    <div style="background: var(--bg-secondary); padding: 0.75rem; border-radius: 8px;">
                                        <div style="font-size: 0.8rem; color: var(--text-secondary);">⏱️ ${e==="uz"?"Vaqt":"Время"}</div>
                                        <div style="font-weight: bold; font-size: 1.1rem;">${c.duration_minutes||60} мин</div>
                                    </div>
                                    <div style="background: var(--bg-secondary); padding: 0.75rem; border-radius: 8px;">
                                        <div style="font-size: 0.8rem; color: var(--text-secondary);">⭐ ${e==="uz"?"O'tish balli":"Проходной балл"}</div>
                                        <div style="font-weight: bold; font-size: 1.1rem;">${c.pass_percent||60}%</div>
                                    </div>
                                </div>
                                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
                                    <button class="btn-secondary btn-view-results" data-test-id="${c.id}" style="padding: 0.75rem; border: 1px solid var(--border-color); border-radius: 6px; cursor: pointer;">
                                        ${e==="uz"?"📊 Natijalar":"📊 Результаты"}
                                    </button>
                                    <button class="btn-secondary btn-preview" data-test-id="${c.id}" style="padding: 0.75rem; border: 1px solid var(--border-color); border-radius: 6px; cursor: pointer;">
                                        ${e==="uz"?"👁️ Ko'rish":"👁️ Просмотр"}
                                    </button>
                                </div>
                            </div>
                        `).join("")}
                    </div>
                `}
            </div>

            <div id="controlTestFormModal" style="display: none; position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.7); z-index: 1000; align-items: center; justify-content: center; padding: 1rem;">
                <div style="width: 100%; max-width: 1000px; max-height: 95vh; overflow-y: auto; background: var(--bg-primary); border-radius: 16px; box-shadow: 0 20px 60px rgba(0,0,0,0.3);">
                    <!-- Header -->
                    <div style="background: linear-gradient(135deg, #ec4899 0%, #f97316 100%); padding: 2rem; border-radius: 16px 16px 0 0; display: flex; justify-content: space-between; align-items: center; position: sticky; top: 0; z-index: 10;">
                        <div>
                            <h2 style="margin: 0; color: white; font-size: 1.75rem;">✏️ ${e==="uz"?"Yangi nazorat isbot":"Создать контрольную работу"}</h2>
                            <p style="margin: 0.5rem 0 0 0; color: rgba(255,255,255,0.9); font-size: 0.95rem;">${e==="uz"?"Savollar va javob variantlarini qo'shing":"Добавьте вопросы и варианты ответов"}</p>
                        </div>
                        <button id="btnCloseForm" style="background: rgba(255,255,255,0.2); border: none; color: white; font-size: 2rem; cursor: pointer; width: 50px; height: 50px; border-radius: 50%; transition: all 0.2s; display: flex; align-items: center; justify-content: center;">✕</button>
                    </div>

                    <form id="controlTestForm" style="padding: 2rem;">
                        <!-- Titles Section -->
                        <div style="margin-bottom: 2rem; background: var(--bg-secondary); padding: 1.5rem; border-radius: 12px; border: 1px solid var(--border-color);">
                            <div style="display: flex; align-items: center; margin-bottom: 1rem;">
                                <span style="font-size: 1.5rem; margin-right: 0.75rem;">📝</span>
                                <h3 style="margin: 0; font-size: 1.1rem;">${e==="uz"?"Sarlavha":"Название тестов"}</h3>
                            </div>
                            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
                                <div>
                                    <label style="display: block; margin-bottom: 0.5rem; font-size: 0.9rem; font-weight: 500;">🇷🇺 ${e==="uz"?"Rus tili":"Русский"}</label>
                                    <input type="text" id="testNameRu" placeholder="Контрольная работа №1" style="padding: 0.75rem; border: 2px solid var(--border-color); border-radius: 8px; background: var(--bg-primary); color: var(--text-primary); width: 100%; font-size: 0.95rem; transition: all 0.2s;" required />
                                </div>
                                <div>
                                    <label style="display: block; margin-bottom: 0.5rem; font-size: 0.9rem; font-weight: 500;">🇺🇿 O'zbek</label>
                                    <input type="text" id="testNameUz" placeholder="Nazorat isbo'ti №1" style="padding: 0.75rem; border: 2px solid var(--border-color); border-radius: 8px; background: var(--bg-primary); color: var(--text-primary); width: 100%; font-size: 0.95rem; transition: all 0.2s;" required />
                                </div>
                            </div>
                        </div>

                        <!-- Description Section -->
                        <div style="margin-bottom: 2rem; background: var(--bg-secondary); padding: 1.5rem; border-radius: 12px; border: 1px solid var(--border-color);">
                            <div style="display: flex; align-items: center; margin-bottom: 1rem;">
                                <span style="font-size: 1.5rem; margin-right: 0.75rem;">💬</span>
                                <h3 style="margin: 0; font-size: 1.1rem;">${e==="uz"?"Tavsif":"Описание"}</h3>
                            </div>
                            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
                                <div>
                                    <textarea id="testDescRu" placeholder="Опишите тест..." rows="3" style="padding: 0.75rem; border: 2px solid var(--border-color); border-radius: 8px; background: var(--bg-primary); color: var(--text-primary); width: 100%; font-size: 0.95rem; resize: none; font-family: inherit; transition: all 0.2s;"></textarea>
                                </div>
                                <div>
                                    <textarea id="testDescUz" placeholder="Testni tavsiflab bering..." rows="3" style="padding: 0.75rem; border: 2px solid var(--border-color); border-radius: 8px; background: var(--bg-primary); color: var(--text-primary); width: 100%; font-size: 0.95rem; resize: none; font-family: inherit; transition: all 0.2s;"></textarea>
                                </div>
                            </div>
                        </div>

                        <!-- Settings Section -->
                        <div style="margin-bottom: 2rem; background: var(--bg-secondary); padding: 1.5rem; border-radius: 12px; border: 1px solid var(--border-color);">
                            <div style="display: flex; align-items: center; margin-bottom: 1rem;">
                                <span style="font-size: 1.5rem; margin-right: 0.75rem;">⚙️</span>
                                <h3 style="margin: 0; font-size: 1.1rem;">${e==="uz"?"Sozlamalar":"Параметры"}</h3>
                            </div>
                            <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 1rem;">
                                <div>
                                    <label style="display: block; margin-bottom: 0.5rem; font-size: 0.9rem; font-weight: 500;">⏱️ ${e==="uz"?"Vaqt (daqiqa)":"Время (минуты)"}</label>
                                    <input type="number" id="testDuration" min="5" max="360" value="60" style="padding: 0.75rem; border: 2px solid var(--border-color); border-radius: 8px; background: var(--bg-primary); color: var(--text-primary); width: 100%; font-size: 0.95rem; font-weight: 600; transition: all 0.2s;" required />
                                </div>
                                <div>
                                    <label style="display: block; margin-bottom: 0.5rem; font-size: 0.9rem; font-weight: 500;">⭐ ${e==="uz"?"Maksimal ball":"Макс. баллы"}</label>
                                    <input type="number" id="testMaxScore" min="10" max="1000" value="100" style="padding: 0.75rem; border: 2px solid var(--border-color); border-radius: 8px; background: var(--bg-primary); color: var(--text-primary); width: 100%; font-size: 0.95rem; font-weight: 600; transition: all 0.2s;" required />
                                </div>
                                <div>
                                    <label style="display: block; margin-bottom: 0.5rem; font-size: 0.9rem; font-weight: 500;">📦 ${e==="uz"?"Sinf":"Класс"}</label>
                                    <select id="testClass">
                                        <option value="">-- ${e==="uz"?"Tanlash":"Выбрать"} --</option>
                                        ${a.map(c=>`<option value="${c.grade}${c.section||""}">${c.grade}${c.section||""}</option>`).join("")}
                                    </select>
                                </div>
                            </div>
                        </div>

                        <!-- Questions Section -->
                        <div style="margin-bottom: 2rem;">
                            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.5rem;">
                                <div style="display: flex; align-items: center;">
                                    <span style="font-size: 1.5rem; margin-right: 0.75rem;">❓</span>
                                    <h3 style="margin: 0; font-size: 1.1rem;">${e==="uz"?"Savollar":"Вопросы"}</h3>
                                </div>
                                <button type="button" id="btnAddQuestion" style="padding: 0.75rem 1.25rem; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; border: none; border-radius: 8px; cursor: pointer; font-weight: 600; font-size: 0.95rem; transition: all 0.2s; box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);">
                                    ➕ ${e==="uz"?"Savol qo'shish":"Добавить вопрос"}
                                </button>
                            </div>
                            <div id="questionsContainer" style="display: grid; gap: 1.5rem;"></div>
                        </div>

                        <!-- Form Actions -->
                        <div style="display: flex; gap: 1rem; justify-content: flex-end; margin-top: 2rem; padding-top: 2rem; border-top: 1px solid var(--border-color);">
                            <button type="button" id="btnCancelForm" style="padding: 0.75rem 2rem; background: var(--bg-secondary); color: var(--text-primary); border: 2px solid var(--border-color); border-radius: 8px; cursor: pointer; font-weight: 600; font-size: 0.95rem; transition: all 0.2s;">
                                ${e==="uz"?"Bekor qilish":"Отмена"}
                            </button>
                            <button type="submit" style="padding: 0.75rem 2rem; background: linear-gradient(135deg, #ec4899 0%, #f97316 100%); color: white; border: none; border-radius: 8px; cursor: pointer; font-weight: 600; font-size: 0.95rem; transition: all 0.2s; box-shadow: 0 4px 12px rgba(236, 72, 153, 0.3);">
                                💾 ${e==="uz"?"Saqlash":"Сохранить"}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        `;F(d,"teacher"),(i=document.getElementById("btnBackFromControlTests"))==null||i.addEventListener("click",()=>{_.navigate("/teacher/dashboard")}),jh(a),document.querySelectorAll(".btn-edit").forEach(c=>{c.addEventListener("click",u=>{u.stopPropagation();const h=c.dataset.testId;Bh(h,l,a)})}),document.querySelectorAll(".btn-delete").forEach(c=>{c.addEventListener("click",u=>{u.stopPropagation();const h=c.dataset.testId;confirm(e==="uz"?"Ishonchingiz komilmi?":"Вы уверены?")&&Ph(h)})}),document.querySelectorAll(".btn-view-results").forEach(c=>{c.addEventListener("click",u=>{u.stopPropagation();const h=c.dataset.testId;Lh(h)})}),document.querySelectorAll(".btn-preview").forEach(c=>{c.addEventListener("click",u=>{u.stopPropagation();const h=c.dataset.testId;Ah(h)})})}catch(s){console.error("❌ Error loading control tests:",s),F(`
            <div class="page-header">
                <h1>${e==="uz"?"Nazorat isbotlari":"Контрольные работы"}</h1>
            </div>
            <div class="card error-message">
                <p>${e==="uz"?"Xatolik yuz berdi":"Произошла ошибка"}</p>
            </div>
        `,"teacher")}}function jh(e){const t=k.getState().language,i=k.getState().token;let s=0;const n=document.getElementById("controlTestFormModal"),a=document.getElementById("controlTestForm"),r=document.getElementById("btnCreateControlTest"),o=document.getElementById("btnCloseForm"),l=document.getElementById("btnCancelForm"),d=document.getElementById("btnAddQuestion"),c=document.getElementById("questionsContainer");r==null||r.addEventListener("click",()=>{n.style.display="flex",s=0,c.innerHTML="",h()});const u=()=>{n.style.display="none",a.reset()};o==null||o.addEventListener("click",u),l==null||l.addEventListener("click",u);function h(){var b,v;const g=s++,m=document.createElement("div");m.className="question-item",m.setAttribute("data-question-index",g),m.style.cssText="background: var(--bg-secondary); padding: 1.5rem; border-radius: 12px; border: 2px solid var(--border-color); box-shadow: 0 4px 12px rgba(0,0,0,0.05);",m.innerHTML=`
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.5rem; padding-bottom: 1rem; border-bottom: 2px solid var(--border-color);">
                <div style="display: flex; align-items: center; gap: 0.75rem;">
                    <span style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; width: 36px; height: 36px; border-radius: 8px; display: flex; align-items: center; justify-content: center; font-weight: 600; font-size: 0.9rem;">❓ ${g+1}</span>
                    <h4 style="margin: 0; font-size: 1rem;">${t==="uz"?"Savol":"Вопрос"}</h4>
                </div>
                <button type="button" class="btn-remove-question" data-index="${g}" style="background: #fee2e2; border: none; color: #dc2626; cursor: pointer; font-size: 1.5rem; width: 40px; height: 40px; border-radius: 8px; transition: all 0.2s; display: flex; align-items: center; justify-content: center;">🗑️</button>
            </div>

            <div style="margin-bottom: 1.5rem;">
                <label style="display: block; margin-bottom: 0.75rem; font-size: 0.95rem; font-weight: 600; color: var(--text-primary);">📄 ${t==="uz"?"Savol matni":"Текст вопроса"}</label>
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
                    <div>
                        <div style="font-size: 0.8rem; color: var(--text-secondary); margin-bottom: 0.5rem;">🇷🇺 Русский</div>
                        <input type="text" class="question-text-ru" placeholder="Какой правильный ответ?" style="padding: 0.75rem; border: 2px solid var(--border-color); border-radius: 8px; background: var(--bg-primary); color: var(--text-primary); width: 100%; font-size: 0.95rem; transition: all 0.2s;" required />
                    </div>
                    <div>
                        <div style="font-size: 0.8rem; color: var(--text-secondary); margin-bottom: 0.5rem;">🇺🇿 O'zbek</div>
                        <input type="text" class="question-text-uz" placeholder="To'g'ri javob qaysi?" style="padding: 0.75rem; border: 2px solid var(--border-color); border-radius: 8px; background: var(--bg-primary); color: var(--text-primary); width: 100%; font-size: 0.95rem; transition: all 0.2s;" required />
                    </div>
                </div>
            </div>

            <div style="margin-bottom: 1rem;">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem;">
                    <label style="font-size: 0.95rem; font-weight: 600; color: var(--text-primary);">📋 ${t==="uz"?"Javob variantlari":"Варианты ответов"}</label>
                    <button type="button" class="btn-add-answer" data-index="${g}" style="padding: 0.5rem 1rem; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; border: none; border-radius: 6px; cursor: pointer; font-weight: 600; font-size: 0.85rem; transition: all 0.2s;">
                        ➕ ${t==="uz"?"Qo'sh":"Добавить"}
                    </button>
                </div>
                <div class="answers-container" style="display: grid; gap: 0.75rem; background: var(--bg-primary); padding: 1rem; border-radius: 8px; border: 1px solid var(--border-color);"></div>
            </div>
        `,c.appendChild(m);const p=m.querySelector(".answers-container"),f=()=>{const w=document.createElement("div");w.style.cssText="display: grid; grid-template-columns: 1fr 1fr 50px auto; gap: 0.75rem; align-items: start; padding: 0.75rem; background: var(--bg-secondary); border-radius: 8px; border: 1px solid var(--border-color);",w.innerHTML=`
                <div>
                    <div style="font-size: 0.75rem; color: var(--text-secondary); margin-bottom: 0.25rem;">🇷🇺</div>
                    <input type="text" class="answer-text-ru" placeholder="Вариант 1..." style="padding: 0.5rem; border: 1px solid var(--border-color); border-radius: 6px; background: var(--bg-primary); color: var(--text-primary); width: 100%; font-size: 0.9rem; transition: all 0.2s;" required />
                </div>
                <div>
                    <div style="font-size: 0.75rem; color: var(--text-secondary); margin-bottom: 0.25rem;">🇺🇿</div>
                    <input type="text" class="answer-text-uz" placeholder="Variant 1..." style="padding: 0.5rem; border: 1px solid var(--border-color); border-radius: 6px; background: var(--bg-primary); color: var(--text-primary); width: 100%; font-size: 0.9rem; transition: all 0.2s;" required />
                </div>
                <label style="display: flex; align-items: center; justify-content: center; gap: 0.5rem; cursor: pointer; background: var(--bg-primary); padding: 0.5rem; border-radius: 6px; border: 2px solid var(--border-color); transition: all 0.2s; min-height: 40px;">
                    <input type="checkbox" class="answer-correct" style="cursor: pointer; width: 18px; height: 18px;" />
                    <span style="font-size: 0.85rem; font-weight: 600;">✓</span>
                </label>
                <button type="button" style="background: #fee2e2; border: none; color: #dc2626; cursor: pointer; width: 40px; height: 40px; border-radius: 6px; transition: all 0.2s; display: flex; align-items: center; justify-content: center; font-size: 1.2rem;">🗑️</button>
            `,w.querySelector("button").addEventListener("click",y=>{y.preventDefault(),w.remove()}),p.appendChild(w)};f(),f(),(b=m.querySelector(".btn-add-answer"))==null||b.addEventListener("click",w=>{w.preventDefault(),f()}),(v=m.querySelector(".btn-remove-question"))==null||v.addEventListener("click",w=>{w.preventDefault(),m.remove()})}d==null||d.addEventListener("click",g=>{g.preventDefault(),h()}),a==null||a.addEventListener("submit",async g=>{g.preventDefault();const m=document.getElementById("testNameRu").value;document.getElementById("testNameUz").value,document.getElementById("testDescRu").value,document.getElementById("testDescUz").value;const p=parseInt(document.getElementById("testDuration").value);parseInt(document.getElementById("testMaxScore").value);const f=document.getElementById("testClass").value,b=[];if(document.querySelectorAll(".question-item").forEach(v=>{const w=v.querySelector(".question-text-ru").value,y=v.querySelector(".question-text-uz").value,x=[];v.querySelectorAll(".answers-container > div").forEach(z=>{const S=z.querySelector(".answer-text-ru").value,$=z.querySelector(".answer-text-uz").value,C=z.querySelector(".answer-correct").checked;x.push({textRu:S,textUz:$,isCorrect:C})}),b.push({questionRu:w,questionUz:y,answers:x})}),b.length===0){alert(t==="uz"?"Hech bo'lmaganda bitta savol qo'shish kerak":"Добавьте хотя бы один вопрос");return}try{const v=await fetch(`${Q}/api/tests`,{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${i}`},body:JSON.stringify({title:m,durationMinutes:p,passPercent:60,targetRole:f||"9",questions:b.map(y=>({type:y.type||"multiple_choice",text:y.questionRu,points:y.points||1,options:y.answers.map(x=>({text:x.textRu,isCorrect:x.isCorrect}))}))})});if(!v.ok){const y=await v.json();throw new Error(y.error||"Creation failed")}const w=await v.json();console.log("✅ Control test created:",w),u(),_.navigate("/teacher/control-tests")}catch(v){console.error("❌ Error creating control test:",v),alert(t==="uz"?"Xatolik: "+v.message:"Ошибка: "+v.message)}})}async function Ph(e){const t=k.getState().language,i=k.getState().token;try{if(!(await fetch(`${Q}/api/tests/${e}`,{method:"DELETE",headers:{Authorization:`Bearer ${i}`}})).ok)throw new Error("Delete failed");console.log("✅ Control test deleted"),_.navigate("/teacher/control-tests")}catch(s){console.error("❌ Error deleting control test:",s),alert(t==="uz"?"O'chirishda xatolik yuz berdi":"Ошибка при удалении")}}async function Dh(){var m;const e=k.getState().language;if(!k.getState().user){_.navigate("/login");return}F(`
        <div class="teacher-module-analytics">
            <div class="page-header">
                <div class="page-header-title">
                    <h1>${e==="uz"?"Mavzular bo'yicha analitika":"Аналитика по темам"}</h1>
                    <p class="page-header-subtitle">${e==="uz"?"Fan va sinfni tanlang":"Выберите предмет и класс"}</p>
                </div>
                <div class="page-header-actions">
                    <button class="back-button back-button--compact" id="btnBackFromModuleAnalytics">
                        <span>←</span>
                        <span>${e==="uz"?"Orqaga":"Назад"}</span>
                    </button>
                </div>
            </div>

            <div class="card teacher-module-analytics__controls">
                <div class="teacher-module-analytics__control">
                    <label for="teacherModuleSubjectSelect">${e==="uz"?"Fan":"Предмет"}</label>
                    <select id="teacherModuleSubjectSelect">
                        <option value="">${e==="uz"?"Tanlang":"Выберите"}</option>
                    </select>
                </div>
                <div class="teacher-module-analytics__control">
                    <label for="teacherModuleClassSelect">${e==="uz"?"Sinf yoki parallel":"Класс или параллель"}</label>
                    <select id="teacherModuleClassSelect">
                        <option value="">${e==="uz"?"Tanlang":"Выберите"}</option>
                    </select>
                </div>
            </div>

            <div class="teacher-module-analytics__chart">
                <div id="teacherModuleAnalyticsEmpty" class="card" style="padding: 1rem; text-align: center; color: var(--text-secondary);">
                    ${e==="uz"?"Ma'lumotlarni ko'rish uchun fan va sinfni tanlang":"Выберите предмет и класс для просмотра данных"}
                </div>
                <canvas id="teacherModuleAnalyticsChart" style="max-height: 360px; width: 100%; display: none;"></canvas>
            </div>

            <div id="teacherModuleAnalyticsSummary" class="teacher-module-analytics__summary"></div>
        </div>
    `,"teacher"),(m=document.getElementById("btnBackFromModuleAnalytics"))==null||m.addEventListener("click",()=>{_.navigate("/teacher/subjects")});const s=document.getElementById("teacherModuleSubjectSelect"),n=document.getElementById("teacherModuleClassSelect"),a=document.getElementById("teacherModuleAnalyticsSummary"),r=document.getElementById("teacherModuleAnalyticsEmpty"),o=p=>{r&&(r.textContent=p),zi("teacherModuleAnalyticsChart","teacherModuleAnalyticsEmpty",{labels:[],series:[]}),a&&(a.innerHTML="")},l=await A("/api/teacher/analytics/subject-modules/options");if(!l.success){D(l.error||(e==="uz"?"Ma'lumotlarni yuklashda xatolik":"Ошибка при загрузке данных"),"error"),o(e==="uz"?"Ma'lumotlarni yuklashda xatolik":"Ошибка при загрузке данных");return}const{subjects:d=[],classes:c=[],grades:u=[]}=l.data||{};if(s&&(d.length?s.innerHTML=`
                <option value="">${e==="uz"?"Tanlang":"Выберите"}</option>
                ${d.map(p=>`
                    <option value="${p.id}">${p.name}</option>
                `).join("")}
            `:(s.innerHTML=`<option value="">${e==="uz"?"Fanlar topilmadi":"Предметы не найдены"}</option>`,s.disabled=!0)),n)if(!c.length)n.innerHTML=`<option value="">${e==="uz"?"Sinflar topilmadi":"Классы не найдены"}</option>`,n.disabled=!0;else{const p=new Map;c.forEach(v=>{const w=String(v.grade||"").trim();if(!w)return;p.has(w)||p.set(w,new Set);const y=p.get(w);Array.isArray(v.sections)&&v.sections.length?v.sections.forEach(x=>y.add(x)):v.name&&y.add(v.name)});const b=(u.length?u:Array.from(p.keys())).map(v=>{const w=Array.from(p.get(String(v))||[]).sort(),y=e==="uz"?`${v}-sinflar`:`${v}-е классы`,x=`<option value="grade|${v}">${y}</option>`,z=w.map(S=>`<option value="section|${v}|${S}">${v}${S}</option>`).join("");return x+z}).join("");n.innerHTML=`
                <option value="">${e==="uz"?"Tanlang":"Выберите"}</option>
                ${b}
            `}const h=p=>{if(!p)return null;const f=p.split("|");return f[0]==="grade"&&f[1]?{grade:f[1],section:null}:f[0]==="section"&&f[1]?{grade:f[1],section:f[2]||null}:null},g=async()=>{var $,C;const p=s==null?void 0:s.value,f=n==null?void 0:n.value,b=h(f);if(!p||!(b!=null&&b.grade)){o(e==="uz"?"Fan va sinfni tanlang":"Выберите предмет и класс");return}const v=new URLSearchParams({subjectId:p,grade:b.grade});b.section&&v.set("section",b.section);const w=await A(`/api/teacher/analytics/subject-modules?${v.toString()}`);if(!w.success){o(w.error||(e==="uz"?"Ma'lumotlar mavjud emas":"Нет данных"));return}const y=(($=w.data)==null?void 0:$.modules)||[],x=y.map(T=>e==="uz"?T.nameUz||T.nameRu:T.nameRu||T.nameUz),z=y.map(T=>typeof T.averageScore=="number"?T.averageScore:null);if(z.some(T=>typeof T=="number")?zi("teacherModuleAnalyticsChart","teacherModuleAnalyticsEmpty",{labels:x,series:[{label:e==="uz"?"O'rtacha natija":"Средний результат",data:z}]}):o(e==="uz"?"Ma'lumotlar mavjud emas":"Нет данных"),a){const T=((C=w.data)==null?void 0:C.studentCount)??0,B=y.reduce((P,R)=>P+(R.attempts||0),0);a.innerHTML=`
                <div class="teacher-module-analytics__summary-card">
                    <div class="teacher-module-analytics__summary-label">${e==="uz"?"O'quvchilar":"Ученики"}</div>
                    <div class="teacher-module-analytics__summary-value">${T}</div>
                </div>
                <div class="teacher-module-analytics__summary-card">
                    <div class="teacher-module-analytics__summary-label">${e==="uz"?"Urinishlar":"Попытки"}</div>
                    <div class="teacher-module-analytics__summary-value">${B}</div>
                </div>
                <div class="teacher-module-analytics__summary-card">
                    <div class="teacher-module-analytics__summary-label">${e==="uz"?"Mavzular":"Темы"}</div>
                    <div class="teacher-module-analytics__summary-value">${y.length}</div>
                </div>
            `}};s==null||s.addEventListener("change",g),n==null||n.addEventListener("change",g)}async function Oh(){var s;const e=k.getState().language,t=k.getState().user,i=k.getState().token;try{const r=(await(await fetch(`${Q}/api/classes`,{headers:{Authorization:`Bearer ${i}`}})).json()).data||[],o=(t==null?void 0:t.id)||(t==null?void 0:t._id),l=r.filter(y=>y.teacherId===o),d=l.reduce((y,x)=>y+(x.studentCount||0),0),c=`
            <div class="teacher-classes-page">
                <div class="page-header">
                    <div class="page-header-title">
                        <h1>${e==="uz"?"Mening sinflarim":"Мои классы"}</h1>
                        <p class="page-header-subtitle">${e==="uz"?"O'quvchilar va natijalarni boshqarish":"Управление учениками и результатами"}</p>
                    </div>
                    <div class="page-header-actions">
                        <button class="back-button back-button--compact" id="btnBackFromClasses">
                            <span>←</span>
                            <span>${e==="uz"?"Orqaga":"Назад"}</span>
                        </button>
                    </div>
                </div>

                <div class="teacher-classes__summary">
                    <div class="teacher-classes__summary-card">
                        <div class="teacher-classes__summary-icon">🏫</div>
                        <div>
                            <div class="teacher-classes__summary-label">${e==="uz"?"Sinf":"Классов"}</div>
                            <div class="teacher-classes__summary-value">${l.length}</div>
                        </div>
                    </div>
                    <div class="teacher-classes__summary-card">
                        <div class="teacher-classes__summary-icon">👥</div>
                        <div>
                            <div class="teacher-classes__summary-label">${e==="uz"?"O'quvchilar":"Учеников"}</div>
                            <div class="teacher-classes__summary-value">${d}</div>
                        </div>
                    </div>
                </div>

                ${l.length>0?`
                    <div class="card teacher-classes__analytics">
                        <div class="teacher-classes__analytics-header">
                            <div>
                                <h2 style="margin: 0;">${e==="uz"?"Sinf analitikasi":"Аналитика класса"}</h2>
                                <p style="margin: 0.35rem 0 0; color: var(--text-secondary); font-size: 0.95rem;">
                                    ${e==="uz"?"Sinfni tanlab, natijalarni ko'ring":"Выберите класс для просмотра результатов"}
                                </p>
                            </div>
                            <div class="teacher-classes__select">
                                <label>${e==="uz"?"Sinfni tanlang":"Выберите класс"}</label>
                                <select id="teacherClassSelect">
                                    <option value="">${e==="uz"?"Tanlang":"Выберите"}</option>
                                    ${l.flatMap(y=>{var z;if((z=y.sections)!=null&&z.length&&!y.name)return y.sections.map(S=>{const $=`${y.grade||""}${S}`;return`<option value="${y._id||y.id}::${S}">${$}</option>`});const x=y.name?`${y.grade||""}${y.name}`:y.grade||"";return[`<option value="${y._id||y.id}::${y.name||""}">${x}</option>`]}).join("")}
                                </select>
                            </div>
                        </div>

                        <div class="teacher-classes__analytics-chart">
                            <div id="teacherClassAnalyticsEmpty" class="card" style="padding: 1rem; text-align: center; color: var(--text-secondary);">
                                ${e==="uz"?"Ma'lumotlar mavjud emas":"Нет данных"}
                            </div>
                            <canvas id="teacherClassAnalyticsChart" style="max-height: 320px; width: 100%; display: none;"></canvas>
                        </div>

                        <div class="teacher-classes__students">
                            <div class="teacher-classes__students-header">
                                <h3 style="margin: 0;">${e==="uz"?"Sinf o'quvchilari":"Ученики класса"}</h3>
                                <p style="margin: 0.35rem 0 0; color: var(--text-secondary); font-size: 0.9rem;">
                                    ${e==="uz"?"O'quvchilar ro'yxati va reytingi":"Список учеников и рейтинг"}
                                </p>
                            </div>
                            <div id="teacherClassStudentsEmpty" class="card" style="padding: 1rem; text-align: center; color: var(--text-secondary);">
                                ${e==="uz"?"Sinf tanlang":"Выберите класс"}
                            </div>
                            <div id="teacherClassStudentsTable" class="teacher-classes__students-table" style="display: none;">
                                <div class="table-scroll">
                                    <table class="data-table" style="width: 100%; border-collapse: collapse;">
                                        <thead>
                                            <tr style="background: var(--bg-tertiary);">
                                                <th style="padding: 0.85rem; text-align: left; font-weight: 600; font-size: 0.8rem; color: var(--text-secondary); text-transform: uppercase; letter-spacing: 0.5px;">${e==="uz"?"Ism va familiya":"Имя и фамилия"}</th>
                                                <th style="padding: 0.85rem; text-align: left; font-weight: 600; font-size: 0.8rem; color: var(--text-secondary); text-transform: uppercase; letter-spacing: 0.5px;">${e==="uz"?"Login":"Логин"}</th>
                                                <th style="padding: 0.85rem; text-align: right; font-weight: 600; font-size: 0.8rem; color: var(--text-secondary); text-transform: uppercase; letter-spacing: 0.5px;">${e==="uz"?"O'rin":"Место"}</th>
                                                <th style="padding: 0.85rem; text-align: right; font-weight: 600; font-size: 0.8rem; color: var(--text-secondary); text-transform: uppercase; letter-spacing: 0.5px;">${e==="uz"?"Profil":"Профиль"}</th>
                                            </tr>
                                        </thead>
                                        <tbody id="teacherClassStudentsBody"></tbody>
                                    </table>
                                </div>
                            </div>
                            <div id="teacherClassStudentsCards" class="teacher-classes__students-cards"></div>
                        </div>
                    </div>
                `:""}

                ${l.length===0?`
                    <div class="teacher-classes__empty">
                        <div class="teacher-classes__empty-icon">👥</div>
                        <h3>${e==="uz"?"Sizga sinf biriktirilmagan":"Класс не назначен"}</h3>
                        <p>${e==="uz"?"Admin bilan bog'laning":"Обратитесь к администратору"}</p>
                    </div>
                `:`
                    <div class="teacher-classes__grid">
                        ${l.map(y=>{var S;const x=y.name?`${y.grade}${y.name}`:y.grade||"",z=(S=y.sections)!=null&&S.length?y.sections.join(", "):"";return`
                                <div class="teacher-classes__card">
                                    <div class="teacher-classes__card-header">
                                        <div>
                                            <div class="teacher-classes__card-title">${x}</div>
                                            <div class="teacher-classes__card-subtitle">${z?e==="uz"?`Seksiyalar: ${z}`:`Секции: ${z}`:e==="uz"?"Sinf":"Класс"}</div>
                                        </div>
                                        <div class="teacher-classes__card-badge">${y.studentCount||0}</div>
                                    </div>
                                    <div class="teacher-classes__card-body">
                                        <div class="teacher-classes__metric">
                                            <span>👨‍🎓 ${e==="uz"?"O'quvchilar":"Ученики"}</span>
                                            <strong>${y.studentCount||0}</strong>
                                        </div>
                                        <div class="teacher-classes__metric">
                                            <span>📌 ${e==="uz"?"Sinf kodi":"Код класса"}</span>
                                            <strong>${x||"—"}</strong>
                                        </div>
                                    </div>
                                </div>
                            `}).join("")}
                    </div>
                `}
            </div>
        `;F(c,"teacher"),(s=document.getElementById("btnBackFromClasses"))==null||s.addEventListener("click",()=>{_.navigate("/teacher/subjects")});const u=document.getElementById("teacherClassSelect"),h=document.getElementById("teacherClassAnalyticsEmpty"),g=document.getElementById("teacherClassStudentsEmpty"),m=document.getElementById("teacherClassStudentsTable"),p=document.getElementById("teacherClassStudentsBody"),f=document.getElementById("teacherClassStudentsCards"),b=y=>{g&&(g.textContent=y,g.style.display="block"),m&&(m.style.display="none"),f&&(f.innerHTML="")},v=(y,x)=>{const z=y.filter($=>typeof $=="number");if(!z.length)return null;const S=Math.round(z.reduce(($,C)=>$+C,0)/z.length*10)/10;return{label:x,data:y.map(()=>S),dash:[6,4]}},w=async y=>{var S,$;if(!y){h&&(h.textContent=e==="uz"?"Ma'lumotlar mavjud emas":"Нет данных"),Zt("teacherClassAnalyticsChart","teacherClassAnalyticsEmpty",{labels:[],series:[]}),b(e==="uz"?"Sinf tanlang":"Выберите класс");return}const[x,z]=y.split("::");try{const C=await A(`/api/analytics/classes/${x}/timeline${z?`?section=${encodeURIComponent(z)}`:""}`);if(C.success){const I=Ai(C.data,e==="uz"?"O'rtacha ball":"Средний балл",{includeAllSubjects:!0}),M=v((($=(S=I.series)==null?void 0:S[0])==null?void 0:$.data)||[],e==="uz"?"Umumiy":"Общий");Zt("teacherClassAnalyticsChart","teacherClassAnalyticsEmpty",I,M?[M]:[])}else h&&(h.textContent=C.error||(e==="uz"?"Ma'lumotlar mavjud emas":"Нет данных")),Zt("teacherClassAnalyticsChart","teacherClassAnalyticsEmpty",{labels:[],series:[]});const T=await A(`/api/classes/${x}/students${z?`?section=${encodeURIComponent(z)}`:""}`);if(!T.success){b(T.error||(e==="uz"?"O'quvchilar topilmadi":"Ученики не найдены"));return}const B=T.data||[];if(!B.length){b(e==="uz"?"O'quvchilar topilmadi":"Ученики не найдены");return}const P=[...B].sort((I,M)=>(M.averageScore||0)-(I.averageScore||0)),R=new Map(P.map((I,M)=>[I._id||I.id,M+1])),U=[...B].sort((I,M)=>{const j=`${I.lastName||""} ${I.firstName||""}`.trim(),q=`${M.lastName||""} ${M.firstName||""}`.trim();return j.localeCompare(q,"ru")});g&&(g.style.display="none"),m&&(m.style.display="block"),p&&(p.innerHTML=U.map(I=>{const M=I._id||I.id,j=R.get(M)||"-";return`
                            <tr style="border-bottom: 1px solid var(--border-color);">
                                <td style="padding: 0.85rem; color: var(--text-primary); font-weight: 500;">${I.firstName} ${I.lastName}</td>
                                <td style="padding: 0.85rem; color: var(--text-secondary); font-family: monospace;">@${I.username}</td>
                                <td style="padding: 0.85rem; text-align: right; color: var(--text-primary); font-weight: 600;">${j}</td>
                                <td style="padding: 0.85rem; text-align: right;">
                                    <button class="button button-secondary" data-student-id="${M}">${e==="uz"?"Profilni ko'rish":"Просмотр профиля"}</button>
                                </td>
                            </tr>
                        `}).join("")),f&&(f.innerHTML=U.map(I=>{const M=I._id||I.id,j=R.get(M)||"-";return`
                            <div class="card teacher-classes__student-card">
                                <div style="display: flex; justify-content: space-between; gap: 1rem; align-items: center;">
                                    <div>
                                        <div style="font-weight: 600; color: var(--text-primary);">${I.firstName} ${I.lastName}</div>
                                        <div style="color: var(--text-secondary); font-size: 0.85rem;">@${I.username}</div>
                                    </div>
                                    <div style="text-align: right;">
                                        <div style="font-size: 0.75rem; color: var(--text-muted);">${e==="uz"?"O'rin":"Место"}</div>
                                        <div style="font-weight: 700; color: var(--text-primary);">${j}</div>
                                    </div>
                                </div>
                                <div style="margin-top: 0.75rem;">
                                    <button class="button button-secondary" data-student-id="${M}">${e==="uz"?"Profilni ko'rish":"Просмотр профиля"}</button>
                                </div>
                            </div>
                        `}).join("")),document.querySelectorAll("[data-student-id]").forEach(I=>{I.addEventListener("click",()=>{const M=I.getAttribute("data-student-id");_.navigate(`/teacher/student/${M}`)})})}catch(C){console.error("Error loading class analytics:",C),b(e==="uz"?"Xatolik yuz berdi":"Произошла ошибка"),Zt("teacherClassAnalyticsChart","teacherClassAnalyticsEmpty",{labels:[],series:[]})}};u&&u.addEventListener("change",y=>w(y.target.value))}catch(n){console.error("❌ Error loading classes:",n),F(`
            <div class="page-header">
                <h1>${e==="uz"?"Sinflar":"Классы"}</h1>
            </div>
            <div class="card error-message">
                <p>${e==="uz"?"Xatolik yuz berdi":"Произошла ошибка"}</p>
            </div>
        `,"teacher")}}async function Rh({studentId:e}){var a;const t=k.getState().language;if(!k.getState().user){_.navigate("/login");return}F(`
        <div class="page-header">
            <div class="page-header-title">
                <h1>${t==="uz"?"O'quvchi profili":"Профиль ученика"}</h1>
                <p class="page-header-subtitle">${t==="uz"?"Analitika va qiziqishlar":"Аналитика и интересы"}</p>
            </div>
            <div class="page-header-actions">
                <button class="back-button back-button--compact" id="btnBackFromStudentProfile">
                    <span>←</span>
                    <span>${t==="uz"?"Orqaga":"Назад"}</span>
                </button>
            </div>
        </div>
        <div id="teacherStudentProfileContainer">
            <div class="loading">
                <div class="spinner"></div>
            </div>
        </div>
    `,"teacher"),(a=document.getElementById("btnBackFromStudentProfile"))==null||a.addEventListener("click",()=>{_.navigate("/teacher/classes")});const n=document.getElementById("teacherStudentProfileContainer");try{const[r,o]=await Promise.all([A(`/api/teachers/students/${e}`),A(`/api/analytics/students/${e}/timeline`)]);if(!r.success||!r.data)throw new Error(r.error||"Не удалось загрузить профиль");const l=r.data,c=(u=>u?Array.isArray(u)?[...u].filter(h=>h&&h.categories).sort((h,g)=>new Date(g.completedAt||0)-new Date(h.completedAt||0))[0]||null:u.categories?u:null:null)(l.interestTestResults);if(n.innerHTML=`
            <div class="profile-grid" style="display: grid; gap: 1.5rem;">
                <div class="card" style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white;">
                    <div style="display: flex; align-items: center; gap: 1.5rem;">
                        <div style="width: 70px; height: 70px; border-radius: 50%; background: white; display: flex; align-items: center; justify-content: center; font-size: 2rem;">
                            👤
                        </div>
                        <div>
                            <h2 style="margin: 0 0 0.4rem 0; color: white;">${l.firstName} ${l.lastName}</h2>
                            <div style="display: flex; gap: 1rem; flex-wrap: wrap; font-size: 0.9rem; opacity: 0.9;">
                                <span>📚 ${l.grade?`${l.grade}${l.className||""}`:"—"} ${t==="uz"?"sinf":"класс"}</span>
                                <span>👨‍🎓 @${l.username}</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="card">
                    <h3 style="margin: 0 0 1rem 0;">${t==="uz"?"Fanlar bo'yicha natijalar":"Результаты по предметам"}</h3>
                    <div style="position: relative; min-height: 260px;">
                        <div id="teacherStudentSubjectEmpty" class="card" style="padding: 1rem; text-align: center; color: var(--text-secondary);">
                            ${t==="uz"?"Ma'lumotlar mavjud emas":"Нет данных"}
                        </div>
                        <canvas id="teacherStudentSubjectChart" style="max-height: 300px; width: 100%; display: none;"></canvas>
                    </div>
                </div>

                ${c?`
                    <div class="card">
                        <h3 style="margin: 0 0 1rem 0;">${t==="uz"?"Qiziqishlar profili":"Профиль интересов"}</h3>
                        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 1rem;">
                            ${Object.entries(c.categories||{}).sort((u,h)=>h[1]-u[1]).map(([u,h])=>{const m={math:{uz:"Matematika",ru:"Математика",icon:"🔢"},science:{uz:"Fan",ru:"Наука",icon:"🔬"},tech:{uz:"Texnologiya",ru:"Технологии",icon:"💻"},art:{uz:"San'at",ru:"Искусство",icon:"🎨"},social:{uz:"Ijtimoiy",ru:"Социальные",icon:"👥"},language:{uz:"Til",ru:"Языки",icon:"📚"}}[u]||{uz:u,ru:u,icon:"📊"};return`
                                    <div class="card" style="text-align: center; background: var(--bg-secondary); border: 1px solid var(--border-color);">
                                        <div style="font-size: 2rem; margin-bottom: 0.35rem;">${m.icon}</div>
                                        <div style="font-size: 1.4rem; font-weight: 700; color: var(--text-primary);">${Math.round(h)}%</div>
                                        <div style="color: var(--text-secondary); font-size: 0.9rem;">${t==="uz"?m.uz:m.ru}</div>
                                    </div>
                                `}).join("")}
                        </div>
                    </div>
                `:`
                    <div class="card" style="text-align: center; color: var(--text-secondary);">
                        ${t==="uz"?"Qiziqishlar testi topshirilmagan":"Тест интересов не пройден"}
                    </div>
                `}
            </div>
        `,o.success){const u=Ai(o.data,t==="uz"?"Natija":"Результат",{includeAllSubjects:!0});Zt("teacherStudentSubjectChart","teacherStudentSubjectEmpty",u)}else Zt("teacherStudentSubjectChart","teacherStudentSubjectEmpty",{labels:[],series:[]})}catch(r){console.error("Error loading student profile:",r),n&&(n.innerHTML=`
                <div class="card" style="text-align: center; color: var(--text-secondary);">
                    ${t==="uz"?"Ma'lumotlarni yuklashda xatolik":"Ошибка при загрузке данных"}
                </div>
            `)}}async function qh(){var d;const e=k.getState().user,t=k.getState().language;if(!e){_.navigate("/login");return}const i=`
        <div class="profile-container">
            <div style="margin-bottom: 1rem;">
                <button class="button button-secondary" id="btnBackFromTeacherProfile">
                    ← ${t==="uz"?"Orqaga":"Назад"}
                </button>
            </div>
            <div class="profile-header" style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 2rem; border-radius: 12px; margin-bottom: 2rem;">
                <div style="display: flex; align-items: center; gap: 1.5rem;">
                    <div class="profile-avatar" style="width: 80px; height: 80px; background: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 2.5rem;">
                        👨‍🏫
                    </div>
                    <div>
                        <h1 style="margin: 0; font-size: 1.8rem;">${e.firstName} ${e.lastName}</h1>
                        <p style="margin: 0.5rem 0 0 0; opacity: 0.9;">${t==="uz"?"O'qituvchi":"Учитель"}</p>
                    </div>
                </div>
            </div>

            <div id="analyticsLoading" class="loading" style="text-align: center; padding: 3rem;">
                <div class="spinner"></div>
                <p style="margin-top: 1rem; color: var(--text-muted);">${t==="uz"?"Statistika yuklanmoqda...":"Загрузка статистики..."}</p>
            </div>

            <div id="analyticsContent" style="display: none;"></div>
        </div>
    `;F(i,"teacher"),(d=document.getElementById("btnBackFromTeacherProfile"))==null||d.addEventListener("click",()=>{_.navigate("/teacher/dashboard")});const s=await A("/api/teacher/analytics");document.getElementById("analyticsLoading").style.display="none";const n=document.getElementById("analyticsContent");if(n.style.display="block",!s.success||!s.data){n.innerHTML=`
            <div class="card">
                <p style="text-align: center; color: var(--text-muted);">
                    ${t==="uz"?"Statistika yuklanmadi":"Не удалось загрузить статистику"}
                </p>
            </div>
        `;return}const a=s.data,r=`
        <div class="stats-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1.5rem; margin-bottom: 2rem;">
            <div class="stat-card" style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 1.5rem; border-radius: 12px;">
                <div style="font-size: 2rem; margin-bottom: 0.5rem;">📚</div>
                <div style="font-size: 2rem; font-weight: bold; margin-bottom: 0.25rem;">${a.totalTests}</div>
                <div style="opacity: 0.9;">${t==="uz"?"Testlar":"Тестов создано"}</div>
            </div>
            <div class="stat-card" style="background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%); color: white; padding: 1.5rem; border-radius: 12px;">
                <div style="font-size: 2rem; margin-bottom: 0.5rem;">✅</div>
                <div style="font-size: 2rem; font-weight: bold; margin-bottom: 0.25rem;">${a.totalCompletions}</div>
                <div style="opacity: 0.9;">${t==="uz"?"Bajarilgan":"Прохождений"}</div>
            </div>
            <div class="stat-card" style="background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%); color: white; padding: 1.5rem; border-radius: 12px;">
                <div style="font-size: 2rem; margin-bottom: 0.5rem;">📊</div>
                <div style="font-size: 2rem; font-weight: bold; margin-bottom: 0.25rem;">${a.averageScore}%</div>
                <div style="opacity: 0.9;">${t==="uz"?"O'rtacha ball":"Средний балл"}</div>
            </div>
            <div class="stat-card" style="background: linear-gradient(135deg, #43e97b 0%, #38f9d7 100%); color: white; padding: 1.5rem; border-radius: 12px;">
                <div style="font-size: 2rem; margin-bottom: 0.5rem;">📝</div>
                <div style="font-size: 2rem; font-weight: bold; margin-bottom: 0.25rem;">${a.totalModules}</div>
                <div style="opacity: 0.9;">${t==="uz"?"Modullar":"Модулей"}</div>
            </div>
        </div>
    `,o=`
        <div class="charts-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(400px, 1fr)); gap: 1.5rem; margin-bottom: 2rem;">
            <div class="card">
                <h3 style="margin-bottom: 1.5rem;">${t==="uz"?"Sinflar bo'yicha statistika":"Статистика по классам"}</h3>
                <canvas id="classByClassChart"></canvas>
            </div>
            <div class="card">
                <h3 style="margin-bottom: 1.5rem;">${t==="uz"?"Fanlar bo'yicha o'rtacha ball":"Средний балл по предметам"}</h3>
                <canvas id="subjectScoresChart"></canvas>
            </div>
        </div>
    `,l=a.recentCompletions&&a.recentCompletions.length>0?`
        <div class="card">
            <h3 style="margin-bottom: 1.5rem;">${t==="uz"?"So'nggi natijalar":"Последние результаты"}</h3>
            <div style="max-height: 400px; overflow-y: auto;">
                ${a.recentCompletions.map(c=>`
                    <div style="padding: 1rem; border-bottom: 1px solid var(--border); display: flex; justify-content: space-between; align-items: center;">
                        <div>
                            <div style="font-weight: 500; margin-bottom: 0.25rem;">${c.studentName} (${c.studentGrade}${t==="uz"?"-sinf":" класс"})</div>
                            <div style="color: var(--text-muted); font-size: 0.9rem;">${c.subjectName} • ${c.testName}</div>
                            <div style="color: var(--text-muted); font-size: 0.85rem; margin-top: 0.25rem;">${new Date(c.submittedAt).toLocaleString()}</div>
                        </div>
                        <div>
                            <span style="background: ${c.score>=80?"#10b981":c.score>=60?"#f59e0b":"#ef4444"}; color: white; padding: 0.5rem 1rem; border-radius: 12px; font-weight: 600; font-size: 1.1rem;">
                                ${c.score}%
                            </span>
                        </div>
                    </div>
                `).join("")}
            </div>
        </div>
    `:"";if(n.innerHTML=r+o+l,a.statsByClass&&a.statsByClass.length>0){const c=document.getElementById("classByClassChart");new vt(c,{type:"bar",data:{labels:a.statsByClass.map(u=>u.grade+(t==="uz"?"-sinf":" класс")),datasets:[{label:t==="uz"?"Bajarilgan testlar":"Пройдено тестов",data:a.statsByClass.map(u=>u.completedTests),backgroundColor:"rgba(102, 126, 234, 0.8)",borderRadius:8},{label:t==="uz"?"O'rtacha ball":"Средний балл",data:a.statsByClass.map(u=>u.averageScore),backgroundColor:"rgba(245, 158, 11, 0.8)",borderRadius:8}]},options:{responsive:!0,maintainAspectRatio:!0,plugins:{legend:{position:"bottom"}},scales:{y:{beginAtZero:!0}}}})}if(a.statsBySubject&&a.statsBySubject.length>0){const c=document.getElementById("subjectScoresChart");new vt(c,{type:"doughnut",data:{labels:a.statsBySubject.map(u=>u.subject),datasets:[{data:a.statsBySubject.map(u=>u.averageScore),backgroundColor:["rgba(102, 126, 234, 0.8)","rgba(245, 158, 11, 0.8)","rgba(239, 68, 68, 0.8)","rgba(16, 185, 129, 0.8)","rgba(99, 102, 241, 0.8)","rgba(236, 72, 153, 0.8)"],borderWidth:0}]},options:{responsive:!0,maintainAspectRatio:!0,plugins:{legend:{position:"bottom"}}}})}}async function Fh(){const e=window.location.pathname.split("/"),t=e[e.length-2],i=k.getState().language;console.log("🔍 renderModuleTests called"),console.log("📍 moduleId extracted:",t),console.log("📍 Full path:",window.location.pathname),F(`
        <div class="page-header" style="margin-bottom: 2rem;">
            <div style="display: flex; justify-content: space-between; align-items: center;">
                <div>
                    <h1 id="moduleName" style="background: linear-gradient(135deg, var(--primary), var(--accent)); -webkit-background-clip: text; -webkit-text-fill-color: transparent; margin-bottom: 0.5rem;">${i==="uz"?"Yuklanmoqda...":"Загрузка..."}</h1>
                    <p style="color: var(--text-muted); margin: 0;">${i==="uz"?"Testlarni yarating va tahrirlang":"Создание и редактирование тестов"}</p>
                </div>
                <button class="button button-secondary" id="btnBackToSubject" style="display: flex; align-items: center; gap: 0.5rem; padding: 12px 20px; border-radius: 10px; transition: all 0.3s ease;">
                    <span>←</span>
                    <span>${i==="uz"?"Modulga qaytish":"Вернуться к модулю"}</span>
                </button>
            </div>
        </div>
        
        <!-- Create Test Section -->
        <div class="card test-create">
            <div class="test-create__header">
                <div class="test-create__icon">🧩</div>
                <div>
                    <h3>${i==="uz"?"Yangi test":"Новый тест"}</h3>
                    <p>${i==="uz"?"Test darhol e’lon qilinadi":"Тест сразу публикуется"}</p>
                </div>
            </div>

            <form id="createTestForm" class="test-create__form">
                <div class="test-create__grid">
                    <div class="form-group">
                        <label class="form-label">
                            <span>🇷🇺</span>
                            ${i==="uz"?"Test nomi (Ruscha)":"Название теста (RU)"}
                        </label>
                        <input type="text" class="form-input" id="testNameRu" placeholder="${i==="uz"?"Masalan: Algebra testi":"Например: Тест по алгебре"}" required />
                    </div>
                    <div class="form-group">
                        <label class="form-label">
                            <span>🇺🇿</span>
                            ${i==="uz"?"Test nomi (O'zbekcha)":"Название теста (UZ)"}
                        </label>
                        <input type="text" class="form-input" id="testNameUz" placeholder="${i==="uz"?"Masalan: Algebra testi":"Например: Тест по алгебре"}" required />
                    </div>
                    <div class="form-group">
                        <label class="form-label">
                            <span>⏱️</span>
                            ${i==="uz"?"Vaqt (daqiqa)":"Время (мин)"}
                        </label>
                        <input type="number" class="form-input" id="testDuration" value="30" min="5" max="180" required />
                    </div>
                    <div class="form-group">
                        <label class="form-label">
                            <span>🎯</span>
                            ${i==="uz"?"Maks. ball":"Макс. баллов"}
                        </label>
                        <input type="number" class="form-input" id="testMaxScore" value="100" min="10" max="1000" required />
                    </div>
                </div>

                <div class="test-create__actions">
                    <div class="test-create__note">
                        ${i==="uz"?"⚡ Test avtomatik nashr qilinadi":"⚡ Тест будет опубликован автоматически"}
                    </div>
                    <button type="submit" class="button button-primary test-create__submit">
                        <span>✅</span>
                        <span>${i==="uz"?"Testni yaratish":"Создать тест"}</span>
                    </button>
                </div>
            </form>
            <div id="createTestMessage" style="margin-top: 1rem;"></div>
        </div>
        
        <!-- Questions Builder -->
        <div id="questionsBuilder" style="display: none;">
            <!-- Dynamically populated -->
        </div>
        
        <!-- Tests List -->
        <div class="card" style="border: 1px solid var(--border-color); box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);">
            <div style="display: flex; align-items: center; gap: 1rem; margin-bottom: 2rem; padding-bottom: 1.5rem; border-bottom: 1px solid var(--border-color);">
                <div style="width: 48px; height: 48px; background: linear-gradient(135deg, var(--accent), #06b6d4); border-radius: 12px; display: flex; align-items: center; justify-content: center; font-size: 1.75rem; box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);">
                    📋
                </div>
                <div>
                    <h3 style="margin: 0; font-size: 1.25rem;">${i==="uz"?"Mavjud testlar":"Существующие тесты"}</h3>
                    <p style="margin: 0.25rem 0 0 0; color: var(--text-muted); font-size: 0.875rem;">${i==="uz"?"Modulning barcha testlari":"Все тесты модуля"}</p>
                </div>
            </div>
            <div id="testsList">
                <div class="loading">
                    <div class="spinner"></div>
                </div>
            </div>
        </div>
    `,"teacher"),document.getElementById("btnBackToSubject").addEventListener("click",()=>{_.navigate("/teacher/subjects")});const n=await A(`/api/modules/${t}`);if(console.log("📦 Module API response:",n),n.success){const r=n.data;document.getElementById("moduleName").textContent=i==="uz"?r.nameUz:r.nameRu,window.currentModule=r,console.log("✅ Module loaded:",r)}else console.error("❌ Failed to load module:",n.error);console.log("⏳ Loading tests for module:",t),await ms(t);const a=document.getElementById("createTestForm");console.log("📋 Create test form found:",!!a),a?a.addEventListener("submit",async r=>{r.preventDefault(),console.log("📝 Create test form submitted!");const o=document.getElementById("testNameRu").value,l=document.getElementById("testNameUz").value,d=parseInt(document.getElementById("testDuration").value),c=parseInt(document.getElementById("testMaxScore").value),u="published";console.log("📋 Test data:",{nameRu:o,nameUz:l,duration:d,maxScore:c,status:u});const h=await A(`/api/modules/${t}/tests`,{method:"POST",body:JSON.stringify({nameRu:o,nameUz:l,duration:d,maxScore:c,status:u,questions:[]})});console.log("📦 Create test result:",h);const g=document.getElementById("createTestMessage");h.success?(g.innerHTML=`<div class="success-message">${i==="uz"?"✓ Test muvaffaqiyatli yaratildi!":"✓ Тест успешно создан!"}</div>`,document.getElementById("createTestForm").reset(),await ms(t),setTimeout(()=>g.innerHTML="",3e3)):g.innerHTML=`<div class="error-message">${h.error||E("error")}</div>`}):console.error("❌ Create test form not found!")}async function ms(e){var a,r,o;const t=k.getState().language,i=document.getElementById("testsList");console.log("🔍 loadModuleTests called for moduleId:",e),i.innerHTML='<div class="loading"><div class="spinner"></div></div>';const s=await A(`/api/modules/${e}/tests`);console.log("📦 Tests API response:",s),console.log("📊 result.success:",s.success),console.log("📊 result.data:",s.data);const n=((a=s.data)==null?void 0:a.data)||s.data||[];if(console.log("📊 testsData:",n),console.log("📊 testsData type:",typeof n),console.log("📊 Is array?",Array.isArray(n)),console.log("📊 testsData length:",n.length),s.success&&Array.isArray(n)&&n.length>0){const l=(r=document.querySelector("#createTestForm"))==null?void 0:r.closest(".card");l&&(l.style.display="none"),console.log("✅ Found",n.length,"tests"),n.forEach(d=>{console.log(`  Test "${d.nameRu}" (ID: ${d._id}): ${d.questionsCount||0} questions`)}),i.innerHTML=n.map(d=>`
            <div class="card test-card" data-test-id="${d._id}" style="margin-bottom: 1.5rem; background: linear-gradient(135deg, var(--bg-secondary) 0%, var(--bg-tertiary) 100%); border: 1px solid var(--border-color); border-left: 4px solid var(--primary); transition: all 0.3s ease; box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);">
                <div style="display: flex; justify-content: space-between; align-items: flex-start; gap: 2rem;">
                    <div style="flex: 1;">
                        <div style="display: flex; align-items: flex-start; gap: 1rem; margin-bottom: 1rem;">
                            <div style="width: 48px; height: 48px; background: linear-gradient(135deg, var(--primary), var(--accent)); border-radius: 12px; display: flex; align-items: center; justify-content: center; font-size: 1.5rem; flex-shrink: 0;">
                                📝
                            </div>
                            <div style="flex: 1;">
                                <h4 style="margin: 0 0 0.5rem 0; font-size: 1.1rem; font-weight: 600;">${t==="uz"?d.nameUz:d.nameRu}</h4>
                                <p style="color: var(--text-muted); margin: 0; font-size: 0.9rem;">
                                    <span style="display: inline-block; margin-right: 1.5rem;">📝 ${d.questionsCount||0} ${t==="uz"?"savol":"вопросов"}</span>
                                    <span style="display: inline-block; margin-right: 1.5rem;">⏱️ ${d.duration} мин</span>
                                    <span style="display: inline-block;">🎯 ${d.maxScore} баллов</span>
                                </p>
                            </div>
                        </div>
                        <div style="display: flex; gap: 0.5rem; margin-top: 1rem;">
                            <span style="display: inline-block; padding: 6px 12px; background: ${d.status==="published"?"rgba(16, 185, 129, 0.15)":"rgba(245, 158, 11, 0.15)"}; color: ${d.status==="published"?"var(--success)":"var(--warning)"}; border-radius: 6px; font-size: 0.8rem; font-weight: 600;">
                                ${d.status==="published"?"✓ ":"◉ "}${t==="uz"?d.status==="published"?"Nashr qilingan":"Qoralama":d.status==="published"?"Опубликовано":"Черновик"}
                            </span>
                        </div>
                    </div>
                    <div style="display: flex; flex-direction: column; gap: 0.75rem; min-width: 140px;">
                        <button class="btn-edit-test button button-primary" data-test-id="${d._id}" style="width: 100%; padding: 12px 18px; font-size: 0.9rem; font-weight: 600; background: linear-gradient(135deg, var(--primary), var(--accent)); border: none; border-radius: 10px; box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3); transition: all 0.3s ease; display: flex; align-items: center; justify-content: center; gap: 0.5rem; color: white; cursor: pointer;">
                            <span>✏️</span>
                            <span>${t==="uz"?"Tahrirlash":"Редактировать"}</span>
                        </button>
                        <button class="btn-delete-test button button-danger" data-test-id="${d._id}" data-module-id="${e}" style="width: 100%; padding: 12px 18px; font-size: 0.9rem; font-weight: 600; border: none; border-radius: 10px; background: rgba(239, 68, 68, 0.2); color: var(--danger); transition: all 0.3s ease; display: flex; align-items: center; justify-content: center; gap: 0.5rem; cursor: pointer;">
                            <span>🗑️</span>
                            <span>${t==="uz"?"O'chirish":"Удалить"}</span>
                        </button>
                    </div>
                </div>
            </div>
        `).join(""),document.querySelectorAll(".btn-edit-test").forEach(d=>{d.addEventListener("click",async()=>{const c=d.getAttribute("data-test-id");console.log("🖱️ Edit button clicked for test:",c),await yr(c,e)})}),document.querySelectorAll(".btn-delete-test").forEach(d=>{d.addEventListener("click",async()=>{const c=d.getAttribute("data-test-id"),u=d.getAttribute("data-module-id");confirm(t==="uz"?"Testni o'chirishga ishonchingiz komilmi?":"Вы уверены, что хотите удалить тест?")&&(await A(`/api/tests/${c}`,{method:"DELETE"})).success&&await ms(u)})})}else{const l=(o=document.querySelector("#createTestForm"))==null?void 0:o.closest(".card");l&&(l.style.display="block"),console.log("❌ No tests found or empty result. Success:",s.success,"Array?",Array.isArray(n),"Length:",n.length),i.innerHTML=`
            <div class="card" style="text-align: center; padding: 4rem 2rem; background: linear-gradient(135deg, var(--bg-secondary) 0%, var(--bg-tertiary) 100%); border: 2px dashed var(--border-color); border-radius: 12px;">
                <div style="font-size: 4rem; margin-bottom: 1rem; opacity: 0.5;">📝</div>
                <p style="color: var(--text-muted); font-size: 1.125rem; font-weight: 500; margin-bottom: 0.5rem;">
                    ${t==="uz"?"Hali testlar yaratilmagan":"Тесты еще не созданы"}
                </p>
            </div>
        `}}async function yr(e,t){const i=k.getState().language,s=document.getElementById("app");console.log("🔍 renderTestEditor called with testId:",e,"moduleId:",t),window.currentTestId=e,window.currentModuleId=t;const n=await A(`/api/tests/${e}`);console.log("📦 Test fetch result:",n);const a=n.data;console.log("📝 Test data:",a),console.log("❓ Test questions:",a==null?void 0:a.questions),s.innerHTML=`
        <div class="layout">
            <aside class="sidebar">
                <div class="sidebar-header">
                    <h2>🎓</h2>
                </div>
                <ul class="nav-menu">
                    <li class="nav-item" onclick="history.back()">
                        <span>←</span>
                        <span>${i==="uz"?"Orqaga":"Назад"}</span>
                    </li>
                </ul>
            </aside>
            
            <main class="main-content">
                <div class="page-header" style="margin-bottom: 2rem;">
                    <h1>${i==="uz"?"Savollarni tahrirlash":"Редактирование вопросов"}</h1>
                    <p>${i==="uz"?a.nameUz:a.nameRu}</p>
                </div>
                
                <div id="editorContainer" style="display: grid; gap: 2rem;">
                    <!-- Questions will be populated here -->
                </div>
                
                <div style="display: flex; gap: 1rem; margin-top: 2rem;">
                    <button id="addQuestionBtn" class="button button-secondary" style="padding: 16px 24px; font-size: 16px; font-weight: 600; border: 2px solid var(--border-color); border-radius: 12px; display: flex; align-items: center; gap: 0.5rem;">
                        <span>➕</span>
                        <span>${i==="uz"?"Savol qo'shish":"Добавить вопрос"}</span>
                    </button>
                    <button id="saveTestBtn" class="button button-primary" style="padding: 16px 24px; font-size: 16px; font-weight: 600; background: linear-gradient(135deg, var(--success), #059669); border: none; border-radius: 12px; display: flex; align-items: center; gap: 0.5rem; flex: 1;">
                        <span>💾</span>
                        <span>${i==="uz"?"Saqlash":"Сохранить"}</span>
                    </button>
                </div>
            </main>
        </div>
    `;const r=document.getElementById("editorContainer");a.questions&&a.questions.length>0&&(r.innerHTML=a.questions.map((o,l)=>`
            <div class="card question-editor" data-question-index="${l}" style="border-left: 4px solid var(--primary);">
                <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 1.5rem;">
                    <h3 style="margin: 0; color: var(--text-primary);">
                        ${i==="uz"?"Savol":"Вопрос"} ${l+1}
                    </h3>
                    <button class="button button-danger" onclick="deleteQuestion(this, ${l})" style="padding: 8px 16px; font-size: 0.9rem;">
                        ${i==="uz"?"O'chirish":"Удалить"}
                    </button>
                </div>
                
                <div class="form-group" style="margin-bottom: 1.5rem;">
                    <label style="display: flex; gap: 0.5rem; margin-bottom: 0.75rem; font-weight: 600;">
                        <span>🇷🇺</span>
                        ${i==="uz"?"Savol matni (Ruscha)":"Текст вопроса (RU)"}
                    </label>
                    <textarea class="question-text-ru" rows="3" style="width: 100%; background: var(--bg-primary); border: 2px solid var(--border-color); border-radius: 10px; padding: 14px; color: var(--text-primary); font-size: 0.95rem; resize: vertical; font-family: inherit;">${o.questionRu||""}</textarea>
                </div>
                
                <div class="form-group" style="margin-bottom: 1.5rem;">
                    <label style="display: flex; gap: 0.5rem; margin-bottom: 0.75rem; font-weight: 600;">
                        <span>🇺🇿</span>
                        ${i==="uz"?"Savol matni (O'zbekcha)":"Текст вопроса (UZ)"}
                    </label>
                    <textarea class="question-text-uz" rows="3" style="width: 100%; background: var(--bg-primary); border: 2px solid var(--border-color); border-radius: 10px; padding: 14px; color: var(--text-primary); font-size: 0.95rem; resize: vertical; font-family: inherit;">${o.questionUz||""}</textarea>
                </div>
                
                <div style="margin-bottom: 1.5rem;">
                    <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 1rem;">
                        <h4 style="margin: 0; color: var(--text-primary);">
                            ${i==="uz"?"Javob variantlari":"Варианты ответов"} 
                            <span style="color: var(--text-muted); font-size: 0.8rem;">(минимум 2)</span>
                        </h4>
                        <button class="button button-secondary add-answer-btn" data-question-index="${l}" style="padding: 8px 16px; font-size: 0.9rem; display: flex; gap: 0.5rem;">
                            <span>➕</span>
                            <span>${i==="uz"?"Variant":"Вариант"}</span>
                        </button>
                    </div>
                    
                    <div class="answers-container" style="display: grid; gap: 1rem;">
                        ${(o.answers||[]).map((d,c)=>`
                            <div class="answer-item" style="display: grid; grid-template-columns: 1fr auto auto; gap: 1rem; align-items: center; padding: 1rem; background: var(--bg-primary); border: 2px solid var(--border-color); border-radius: 10px; transition: all 0.3s ease;">
                                <div style="display: grid; gap: 0.75rem;">
                                    <textarea class="answer-text-ru" rows="2" placeholder="${i==="uz"?"Javob (Ruscha)":"Ответ (RU)"}" style="width: 100%; background: var(--bg-secondary); border: 1px solid var(--border-color); border-radius: 8px; padding: 10px; color: var(--text-primary); font-size: 0.9rem; resize: vertical; font-family: inherit;">${d.textRu||""}</textarea>
                                    <textarea class="answer-text-uz" rows="2" placeholder="${i==="uz"?"Javob (O'zbekcha)":"Ответ (UZ)"}" style="width: 100%; background: var(--bg-secondary); border: 1px solid var(--border-color); border-radius: 8px; padding: 10px; color: var(--text-primary); font-size: 0.9rem; resize: vertical; font-family: inherit;">${d.textUz||""}</textarea>
                                </div>
                                <div style="display: flex; flex-direction: column; gap: 0.5rem;">
                                    <label style="display: flex; align-items: center; gap: 0.5rem; cursor: pointer; padding: 8px 12px; background: ${d.isCorrect?"rgba(16, 185, 129, 0.2)":"transparent"}; border-radius: 8px; transition: all 0.3s ease;">
                                        <input type="radio" name="correct-${l}" class="is-correct" ${d.isCorrect?"checked":""} style="cursor: pointer;" />
                                        <span style="color: ${d.isCorrect?"var(--success)":"var(--text-muted)"}; font-size: 0.85rem; font-weight: 500;">
                                            ${i==="uz"?"✓ To'g'ri":"✓ Верно"}
                                        </span>
                                    </label>
                                    <button type="button" class="button button-danger delete-answer-btn" data-answer-index="${c}" style="padding: 6px 12px; font-size: 0.8rem;">
                                        🗑️
                                    </button>
                                </div>
                            </div>
                        `).join("")}
                    </div>
                </div>
            </div>
        `).join("")),document.querySelectorAll(".add-answer-btn").forEach(o=>{o.addEventListener("click",()=>gi(o.getAttribute("data-question-index")))}),document.querySelectorAll(".delete-answer-btn").forEach(o=>{o.addEventListener("click",function(){this.closest(".answer-item").remove()})}),document.getElementById("addQuestionBtn").addEventListener("click",()=>{Nh(r)}),document.getElementById("saveTestBtn").addEventListener("click",window.saveTestEditor=async()=>{console.log("💾 Save button clicked");const o=[];if(document.querySelectorAll(".question-editor").forEach((d,c)=>{const u=d.querySelector(".question-text-ru").value,h=d.querySelector(".question-text-uz").value,g=[];d.querySelectorAll(".answer-item").forEach(m=>{const p=m.querySelector(".answer-text-ru").value,f=m.querySelector(".answer-text-uz").value,b=m.querySelector(".is-correct").checked;p&&f&&g.push({textRu:p,textUz:f,isCorrect:b})}),u&&h&&g.length>=2&&o.push({questionRu:u,questionUz:h,answers:g})}),console.log("📝 Collected questions:",o),console.log("🔢 Questions count:",o.length),o.length===0){alert(i==="uz"?"Kamida bitta to'g'ri savolni kiriting":"Введите хотя бы один вопрос");return}console.log("📤 Sending PUT request to /api/tests/"+window.currentTestId);const l=await A(`/api/tests/${window.currentTestId}`,{method:"PUT",body:JSON.stringify({questions:o})});console.log("📥 Update result:",l),l.success?(console.log("✅ Test saved successfully"),alert(i==="uz"?"Test muvaffaqiyatli saqlandi!":"Тест успешно сохранен!"),console.log("🔄 Navigating to /teacher/module/"+window.currentModuleId+"/tests"),_.navigate(`/teacher/module/${window.currentModuleId}/tests`)):alert(i==="uz"?"Xato: "+l.error:"Ошибка: "+l.error)})}function gi(e){const t=document.querySelectorAll(".question-editor")[e].querySelector(".answers-container"),i=k.getState().language,s=document.createElement("div");s.className="answer-item",s.style.cssText="display: grid; grid-template-columns: 1fr auto auto; gap: 1rem; align-items: center; padding: 1rem; background: var(--bg-primary); border: 2px solid var(--border-color); border-radius: 10px; transition: all 0.3s ease;",s.innerHTML=`
        <div style="display: grid; gap: 0.75rem;">
            <textarea class="answer-text-ru" rows="2" placeholder="${i==="uz"?"Javob (Ruscha)":"Ответ (RU)"}" style="width: 100%; background: var(--bg-secondary); border: 1px solid var(--border-color); border-radius: 8px; padding: 10px; color: var(--text-primary); font-size: 0.9rem; resize: vertical; font-family: inherit;"></textarea>
            <textarea class="answer-text-uz" rows="2" placeholder="${i==="uz"?"Javob (O'zbekcha)":"Ответ (UZ)"}" style="width: 100%; background: var(--bg-secondary); border: 1px solid var(--border-color); border-radius: 8px; padding: 10px; color: var(--text-primary); font-size: 0.9rem; resize: vertical; font-family: inherit;"></textarea>
        </div>
        <div style="display: flex; flex-direction: column; gap: 0.5rem;">
            <label style="display: flex; align-items: center; gap: 0.5rem; cursor: pointer; padding: 8px 12px; background: transparent; border-radius: 8px; transition: all 0.3s ease;">
                <input type="radio" name="correct-${e}" class="is-correct" style="cursor: pointer;" />
                <span style="color: var(--text-muted); font-size: 0.85rem; font-weight: 500;">
                    ${i==="uz"?"✓ To'g'ri":"✓ Верно"}
                </span>
            </label>
            <button type="button" class="button button-danger delete-answer-btn" style="padding: 6px 12px; font-size: 0.8rem;">
                🗑️
            </button>
        </div>
    `,t.appendChild(s),s.querySelector(".delete-answer-btn").addEventListener("click",function(){this.closest(".answer-item").remove()})}function Nh(e){const t=k.getState().language,i=document.querySelectorAll(".question-editor").length,s=document.createElement("div");s.className="card question-editor",s.setAttribute("data-question-index",i),s.style.cssText="border-left: 4px solid var(--primary);",s.innerHTML=`
        <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 1.5rem;">
            <h3 style="margin: 0; color: var(--text-primary);">
                ${t==="uz"?"Savol":"Вопрос"} ${i+1}
            </h3>
            <button class="button button-danger" onclick="this.closest('.question-editor').remove()" style="padding: 8px 16px; font-size: 0.9rem;">
                ${t==="uz"?"O'chirish":"Удалить"}
            </button>
        </div>
        
        <div class="form-group" style="margin-bottom: 1.5rem;">
            <label style="display: flex; gap: 0.5rem; margin-bottom: 0.75rem; font-weight: 600;">
                <span>🇷🇺</span>
                ${t==="uz"?"Savol matni (Ruscha)":"Текст вопроса (RU)"}
            </label>
            <textarea class="question-text-ru" rows="3" style="width: 100%; background: var(--bg-primary); border: 2px solid var(--border-color); border-radius: 10px; padding: 14px; color: var(--text-primary); font-size: 0.95rem; resize: vertical; font-family: inherit;"></textarea>
        </div>
        
        <div class="form-group" style="margin-bottom: 1.5rem;">
            <label style="display: flex; gap: 0.5rem; margin-bottom: 0.75rem; font-weight: 600;">
                <span>🇺🇿</span>
                ${t==="uz"?"Savol matni (O'zbekcha)":"Текст вопроса (UZ)"}
            </label>
            <textarea class="question-text-uz" rows="3" style="width: 100%; background: var(--bg-primary); border: 2px solid var(--border-color); border-radius: 10px; padding: 14px; color: var(--text-primary); font-size: 0.95rem; resize: vertical; font-family: inherit;"></textarea>
        </div>
        
        <div style="margin-bottom: 1.5rem;">
            <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 1rem;">
                <h4 style="margin: 0; color: var(--text-primary);">
                    ${t==="uz"?"Javob variantlari":"Варианты ответов"} 
                    <span style="color: var(--text-muted); font-size: 0.8rem;">(минимум 2)</span>
                </h4>
                <button class="button button-secondary add-answer-btn" data-question-index="${i}" style="padding: 8px 16px; font-size: 0.9rem; display: flex; gap: 0.5rem;">
                    <span>➕</span>
                    <span>${t==="uz"?"Variant":"Вариант"}</span>
                </button>
            </div>
            
            <div class="answers-container" style="display: grid; gap: 1rem;">
                <!-- Answers will be added here -->
            </div>
        </div>
    `,e.appendChild(s),s.querySelector(".add-answer-btn").addEventListener("click",()=>{gi(i)}),gi(i),gi(i)}window.deleteQuestion=function(e,t){e.closest(".question-editor").remove()};const _=new Ou;window.router=_;_.register("/",()=>{var t,i,s;const e=k.getState();e.isAuthenticated?((t=e.user)==null?void 0:t.role)==="student"?ur():((i=e.user)==null?void 0:i.role)==="teacher"?ca():((s=e.user)==null?void 0:s.role)==="admin"&&(ue!=null&&ue()||ca()):dr()});async function Hh(){const e=k.getState(),t=e.language,i=e.token;if(!e.isAuthenticated||!e.user||e.user.role!=="admin"){console.log("❌ Unauthorized access to analytics"),_.navigate("/login");return}try{const[s,n,a]=await Promise.all([fetch(`${Q}/api/users`,{headers:{Authorization:`Bearer ${i}`}}),fetch(`${Q}/api/classes`,{headers:{Authorization:`Bearer ${i}`}}),fetch(`${Q}/api/tests`,{headers:{Authorization:`Bearer ${i}`}})]),r=await s.json(),o=await n.json(),l=await a.json(),d=r.data||[],c=o.data||[],u=l.data||[],h=d.filter(T=>T.role==="student")||[],g=d.filter(T=>T.role==="teacher")||[],m=h.length,p=g.length,f=c.length,b=u.length,v=f>0?Math.round(m/f):0,w=p>0?(m/p).toFixed(1):0,y=4;let x="",z="",S="";const $=`
            <style>
                .analytics-hero {
                    background: linear-gradient(135deg, rgba(59, 130, 246, 0.16) 0%, rgba(14, 116, 144, 0.12) 100%);
                    border: 1px solid rgba(59, 130, 246, 0.28);
                    border-radius: 18px;
                    padding: 1.5rem;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    gap: 1rem;
                    flex-wrap: wrap;
                }
                .analytics-hero__title {
                    margin: 0;
                    font-size: 2.1rem;
                    font-weight: 800;
                    color: var(--text-primary);
                }
                .analytics-hero__desc {
                    margin: 0.5rem 0 0 0;
                    color: var(--text-secondary);
                    font-size: 0.95rem;
                }
                .analytics-hero__meta {
                    display: flex;
                    gap: 0.75rem;
                    flex-wrap: wrap;
                    align-items: center;
                }
                .analytics-pill {
                    padding: 0.45rem 0.9rem;
                    border-radius: 999px;
                    background: rgba(59, 130, 246, 0.16);
                    color: #bfdbfe;
                    border: 1px solid rgba(59, 130, 246, 0.4);
                    font-weight: 600;
                    font-size: 0.8rem;
                }
                @media (max-width: 768px) {
                    .analytics-hero { padding: 1.25rem; }
                    .analytics-hero__title { font-size: 1.75rem; }
                    .stats-grid { grid-template-columns: 1fr 1fr !important; }
                    .analytics-container { grid-template-columns: 1fr !important; }
                    .stat-metric { padding: 1.25rem !important; }
                    .stat-number { font-size: 1.75rem !important; }
                }
                @media (max-width: 420px) {
                    .analytics-hero { padding: 1rem; border-radius: 14px; }
                    .analytics-hero__title { font-size: 1.5rem; }
                    .analytics-hero__desc { font-size: 0.85rem; }
                    .stats-grid { grid-template-columns: 1fr !important; gap: 0.5rem !important; }
                    .analytics-container { grid-template-columns: 1fr !important; gap: 1rem !important; }
                    .stat-metric { padding: 0.75rem !important; margin-bottom: 0; }
                    .stat-number { font-size: 1.4rem !important; margin-bottom: 0.25rem !important; }
                    .data-table { font-size: 0.75rem; }
                    .data-table th, .data-table td { padding: 0.5rem !important; font-size: 0.7rem !important; }
                }
            </style>
            <div style="background: var(--bg-primary); min-height: 100vh; padding: 2rem 1.5rem;">
                <div style="max-width: 1400px; margin: 0 auto;">
                    <div class="analytics-hero">
                        <div>
                            <h1 class="analytics-hero__title">${t==="uz"?"Analitika":"Аналитика"}</h1>
                            <p class="analytics-hero__desc">${t==="uz"?"Tizim ko'rsatkichlari va metrikalari":"Система показателей и метрик"}</p>
                        </div>
                        <div class="analytics-hero__meta">
                            <button onclick="window.router.navigate('/admin/dashboard')" class="btn-secondary" style="padding: 0.7rem 1.2rem; font-size: 0.9rem; border: 1px solid var(--border-color);">← ${E("back")}</button>
                            <span class="analytics-pill">${m} ${t==="uz"?"o'quvchi":"учеников"}</span>
                        </div>
                    </div>

                    <!-- Key Metrics Grid -->
                    <div class="stats-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 1.2rem; margin-bottom: 2.5rem;">
                        <div class="stat-metric" style="background: var(--bg-secondary); border: 1px solid var(--border-color); border-radius: 12px; padding: 1.5rem; transition: all 0.3s;">
                            <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 1rem;">
                                <div>
                                    <p style="margin: 0; font-size: 0.85rem; color: var(--text-secondary); font-weight: 500; letter-spacing: 0.5px; text-transform: uppercase;">Учеников</p>
                                </div>
                                <div style="width: 40px; height: 40px; background: var(--bg-tertiary); border-radius: 10px; display: flex; align-items: center; justify-content: center; color: #3B82F6; font-size: 1.3rem;">👤</div>
                            </div>
                            <div class="stat-number" style="font-size: 2rem; font-weight: 800; color: var(--text-primary); margin-bottom: 0.5rem;">${m}</div>
                            <div style="font-size: 0.8rem; color: var(--text-secondary);">активных в системе</div>
                        </div>

                        <div class="stat-metric" style="background: var(--bg-secondary); border: 1px solid var(--border-color); border-radius: 12px; padding: 1.5rem; transition: all 0.3s;">
                            <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 1rem;">
                                <div>
                                    <p style="margin: 0; font-size: 0.85rem; color: var(--text-secondary); font-weight: 500; letter-spacing: 0.5px; text-transform: uppercase;">Учителей</p>
                                </div>
                                <div style="width: 40px; height: 40px; background: var(--bg-tertiary); border-radius: 10px; display: flex; align-items: center; justify-content: center; color: #10b981; font-size: 1.3rem;">👥</div>
                            </div>
                            <div class="stat-number" style="font-size: 2rem; font-weight: 800; color: var(--text-primary); margin-bottom: 0.5rem;">${p}</div>
                            <div style="font-size: 0.8rem; color: var(--text-secondary);">преподавателей</div>
                        </div>

                        <div class="stat-metric" style="background: var(--bg-secondary); border: 1px solid var(--border-color); border-radius: 12px; padding: 1.5rem; transition: all 0.3s;">
                            <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 1rem;">
                                <div>
                                    <p style="margin: 0; font-size: 0.85rem; color: var(--text-secondary); font-weight: 500; letter-spacing: 0.5px; text-transform: uppercase;">Классов</p>
                                </div>
                                <div style="width: 40px; height: 40px; background: var(--bg-tertiary); border-radius: 10px; display: flex; align-items: center; justify-content: center; color: #f59e0b; font-size: 1.3rem;">📋</div>
                            </div>
                            <div class="stat-number" style="font-size: 2rem; font-weight: 800; color: var(--text-primary); margin-bottom: 0.5rem;">${f}</div>
                            <div style="font-size: 0.8rem; color: var(--text-secondary);">всего в системе</div>
                        </div>

                        <div class="stat-metric" style="background: var(--bg-secondary); border: 1px solid var(--border-color); border-radius: 12px; padding: 1.5rem; transition: all 0.3s;">
                            <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 1rem;">
                                <div>
                                    <p style="margin: 0; font-size: 0.85rem; color: var(--text-secondary); font-weight: 500; letter-spacing: 0.5px; text-transform: uppercase;">Тестов</p>
                                </div>
                                <div style="width: 40px; height: 40px; background: var(--bg-tertiary); border-radius: 10px; display: flex; align-items: center; justify-content: center; color: #8b5cf6; font-size: 1.3rem;">✓</div>
                            </div>
                            <div class="stat-number" style="font-size: 2rem; font-weight: 800; color: var(--text-primary); margin-bottom: 0.5rem;">${b}</div>
                            <div style="font-size: 0.8rem; color: var(--text-secondary);">доступно</div>
                        </div>

                        <div class="stat-metric" style="background: var(--bg-secondary); border: 1px solid var(--border-color); border-radius: 12px; padding: 1.5rem; transition: all 0.3s;">
                            <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 1rem;">
                                <div>
                                    <p style="margin: 0; font-size: 0.85rem; color: var(--text-secondary); font-weight: 500; letter-spacing: 0.5px; text-transform: uppercase;">Соотношение</p>
                                </div>
                                <div style="width: 40px; height: 40px; background: var(--bg-tertiary); border-radius: 10px; display: flex; align-items: center; justify-content: center; color: #ec4899; font-size: 1.3rem;">≈</div>
                            </div>
                            <div class="stat-number" style="font-size: 2rem; font-weight: 800; color: var(--text-primary); margin-bottom: 0.5rem;">${w}</div>
                            <div style="font-size: 0.8rem; color: var(--text-secondary);">уч. на одного учит.</div>
                        </div>

                        <div class="stat-metric" style="background: var(--bg-secondary); border: 1px solid var(--border-color); border-radius: 12px; padding: 1.5rem; transition: all 0.3s;">
                            <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 1rem;">
                                <div>
                                    <p style="margin: 0; font-size: 0.85rem; color: var(--text-secondary); font-weight: 500; letter-spacing: 0.5px; text-transform: uppercase;">Среднее</p>
                                </div>
                                <div style="width: 40px; height: 40px; background: var(--bg-tertiary); border-radius: 10px; display: flex; align-items: center; justify-content: center; color: #06b6d4; font-size: 1.3rem;">∅</div>
                            </div>
                            <div class="stat-number" style="font-size: 2rem; font-weight: 800; color: var(--text-primary); margin-bottom: 0.5rem;">${v}</div>
                            <div style="font-size: 0.8rem; color: var(--text-secondary);">учеников в классе</div>
                        </div>
                    </div>

                    <!-- Detailed Tables -->
                    <div class="analytics-container" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(580px, 1fr)); gap: 1.5rem;">
                        <!-- Classes Table -->
                        <div style="background: var(--bg-secondary); border: 1px solid var(--border-color); border-radius: 12px; overflow: hidden;">
                            <div style="padding: 1.5rem; border-bottom: 1px solid var(--border-color);">
                                <h3 style="margin: 0; font-size: 1rem; font-weight: 700; color: var(--text-primary);">Классы</h3>
                            </div>
                            <div style="padding: 1.5rem;">
                                ${f===0?'<div style="text-align: center; padding: 2rem; color: var(--text-secondary);">Нет данных</div>':`
                                    <table class="data-table" style="width: 100%; border-collapse: collapse;">
                                        <thead>
                                            <tr style="background: var(--bg-tertiary);">
                                                <th style="padding: 0.8rem; text-align: left; font-weight: 600; font-size: 0.8rem; color: var(--text-secondary); text-transform: uppercase; letter-spacing: 0.5px;">Название</th>
                                                <th style="padding: 0.8rem; text-align: right; font-weight: 600; font-size: 0.8rem; color: var(--text-secondary); text-transform: uppercase; letter-spacing: 0.5px;">Уч.</th>
                                                <th style="padding: 0.8rem; text-align: right; font-weight: 600; font-size: 0.8rem; color: var(--text-secondary); text-transform: uppercase; letter-spacing: 0.5px;">%</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            ${c.slice(0,y).map((T,B)=>{var I,M;const P=T.studentCount??((I=T.students)==null?void 0:I.length)??0,R=T.name?`${T.grade||""}${T.name}`:(M=T.sections)!=null&&M.length?`${T.grade||""} (${T.sections.join(", ")})`:T.grade||"—",U=m>0?Math.round(P/m*100):0;return`<tr style="border-bottom: 1px solid var(--border-color);">
                                                    <td style="padding: 0.8rem; color: var(--text-primary); font-weight: 500;">${R}</td>
                                                    <td style="padding: 0.8rem; text-align: right; color: #3B82F6; font-weight: 600;">${P}</td>
                                                    <td style="padding: 0.8rem; text-align: right; color: var(--text-secondary);">${U}%</td>
                                                </tr>`}).join("")}
                                        </tbody>
                                    </table>
                                    ${c.length>y?`<div style="text-align: center; padding: 1rem 0; border-top: 1px solid var(--border-color);">
                                        <button class="button button-secondary" data-expand-table="classes">${t==="uz"?"Ko'proq ko'rsatish":"Показать ещё"}</button>
                                    </div>`:""}
                                `}
                            </div>
                        </div>

                        <!-- Teachers Table -->
                        <div style="background: var(--bg-secondary); border: 1px solid var(--border-color); border-radius: 12px; overflow: hidden;">
                            <div style="padding: 1.5rem; border-bottom: 1px solid var(--border-color);">
                                <h3 style="margin: 0; font-size: 1rem; font-weight: 700; color: var(--text-primary);">Преподаватели</h3>
                            </div>
                            <div style="padding: 1.5rem;">
                                ${p===0?'<div style="text-align: center; padding: 2rem; color: var(--text-secondary);">Нет данных</div>':`
                                    <table class="data-table" style="width: 100%; border-collapse: collapse;">
                                        <thead>
                                            <tr style="background: var(--bg-tertiary);">
                                                <th style="padding: 0.8rem; text-align: left; font-weight: 600; font-size: 0.8rem; color: var(--text-secondary); text-transform: uppercase; letter-spacing: 0.5px;">ФИО</th>
                                                <th style="padding: 0.8rem; text-align: left; font-weight: 600; font-size: 0.8rem; color: var(--text-secondary); text-transform: uppercase; letter-spacing: 0.5px;">Логин</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            ${g.slice(0,y).map(T=>`<tr style="border-bottom: 1px solid var(--border-color);">
                                                <td style="padding: 0.8rem; color: var(--text-primary); font-weight: 500;">${T.firstName} ${T.lastName}</td>
                                                <td style="padding: 0.8rem; color: var(--text-secondary); font-family: monospace; font-size: 0.85rem;">@${T.username}</td>
                                            </tr>`).join("")}
                                        </tbody>
                                    </table>
                                    ${g.length>y?`<div style="text-align: center; padding: 1rem 0; border-top: 1px solid var(--border-color);">
                                        <button class="button button-secondary" data-expand-table="teachers">${t==="uz"?"Ko'proq ko'rsatish":"Показать ещё"}</button>
                                    </div>`:""}
                                `}
                            </div>
                        </div>

                        <!-- Students Table -->
                        <div style="background: var(--bg-secondary); border: 1px solid var(--border-color); border-radius: 12px; overflow: hidden;">
                            <div style="padding: 1.5rem; border-bottom: 1px solid var(--border-color);">
                                <h3 style="margin: 0; font-size: 1rem; font-weight: 700; color: var(--text-primary);">Ученики</h3>
                            </div>
                            <div style="padding: 1.5rem;">
                                ${m===0?'<div style="text-align: center; padding: 2rem; color: var(--text-secondary);">Нет данных</div>':`
                                    <table class="data-table" style="width: 100%; border-collapse: collapse;">
                                        <thead>
                                            <tr style="background: var(--bg-tertiary);">
                                                <th style="padding: 0.8rem; text-align: left; font-weight: 600; font-size: 0.8rem; color: var(--text-secondary); text-transform: uppercase; letter-spacing: 0.5px;">ФИО</th>
                                                <th style="padding: 0.8rem; text-align: left; font-weight: 600; font-size: 0.8rem; color: var(--text-secondary); text-transform: uppercase; letter-spacing: 0.5px;">Класс</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            ${h.slice(0,y).map(T=>`<tr style="border-bottom: 1px solid var(--border-color);">
                                                <td style="padding: 0.8rem; color: var(--text-primary); font-weight: 500;">${T.firstName} ${T.lastName}</td>
                                                <td style="padding: 0.8rem; color: var(--text-secondary);">${T.grade||"—"}</td>
                                            </tr>`).join("")}
                                        </tbody>
                                    </table>
                                    ${h.length>y?`<div style="text-align: center; padding: 1rem 0; border-top: 1px solid var(--border-color);">
                                        <button class="button button-secondary" data-expand-table="students">${t==="uz"?"Ko'proq ko'rsatish":"Показать ещё"}</button>
                                    </div>`:""}
                                `}
                            </div>
                        </div>

                        <!-- System Summary -->
                        <div style="background: var(--bg-secondary); border: 1px solid var(--border-color); border-radius: 12px; overflow: hidden;">
                            <div style="padding: 1.5rem; border-bottom: 1px solid var(--border-color);">
                                <h3 style="margin: 0; font-size: 1rem; font-weight: 700; color: var(--text-primary);">Сводка системы</h3>
                            </div>
                            <div style="padding: 1.5rem; display: grid; gap: 1rem;">
                                <div style="display: flex; justify-content: space-between; align-items: center; padding: 1rem; background: var(--bg-tertiary); border-radius: 8px; border-left: 3px solid #3B82F6;">
                                    <span style="color: var(--text-secondary); font-size: 0.9rem;">Всего пользователей</span>
                                    <span style="font-weight: 700; color: #3B82F6; font-size: 1.1rem;">${d.length}</span>
                                </div>
                                <div style="display: flex; justify-content: space-between; align-items: center; padding: 1rem; background: var(--bg-tertiary); border-radius: 8px; border-left: 3px solid #10b981;">
                                    <span style="color: var(--text-secondary); font-size: 0.9rem;">Учеников</span>
                                    <span style="font-weight: 700; color: #10b981; font-size: 1.1rem;">${d.length>0?Math.round(m/d.length*100):0}%</span>
                                </div>
                                <div style="display: flex; justify-content: space-between; align-items: center; padding: 1rem; background: var(--bg-tertiary); border-radius: 8px; border-left: 3px solid #f59e0b;">
                                    <span style="color: var(--text-secondary); font-size: 0.9rem;">Учителей</span>
                                    <span style="font-weight: 700; color: #f59e0b; font-size: 1.1rem;">${d.length>0?Math.round(p/d.length*100):0}%</span>
                                </div>
                                <div style="display: flex; justify-content: space-between; align-items: center; padding: 1rem; background: var(--bg-tertiary); border-radius: 8px; border-left: 3px solid #8b5cf6;">
                                    <span style="color: var(--text-secondary); font-size: 0.9rem;">Тесты на учителя</span>
                                    <span style="font-weight: 700; color: #8b5cf6; font-size: 1.1rem;">${p>0?Math.round(b/p):0}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;F($,"admin");const C=T=>{var P,R,U,I,M,j,q,N,et,ft;if(T==="classes"){const st=(U=(R=(P=document.querySelector('[data-expand-table="classes"]'))==null?void 0:P.closest("div"))==null?void 0:R.previousElementSibling)==null?void 0:U.querySelector("tbody");if(!st)return;st.innerHTML=c.map(Y=>{var jt,_t;const rt=Y.studentCount??((jt=Y.students)==null?void 0:jt.length)??0,ut=Y.name?`${Y.grade||""}${Y.name}`:(_t=Y.sections)!=null&&_t.length?`${Y.grade||""} (${Y.sections.join(", ")})`:Y.grade||"—",bt=m>0?Math.round(rt/m*100):0;return`<tr style="border-bottom: 1px solid var(--border-color);">
                        <td style="padding: 0.8rem; color: var(--text-primary); font-weight: 500;">${ut}</td>
                        <td style="padding: 0.8rem; text-align: right; color: #3B82F6; font-weight: 600;">${rt}</td>
                        <td style="padding: 0.8rem; text-align: right; color: var(--text-secondary);">${bt}%</td>
                    </tr>`}).join("")}if(T==="teachers"){const st=(j=(M=(I=document.querySelector('[data-expand-table="teachers"]'))==null?void 0:I.closest("div"))==null?void 0:M.previousElementSibling)==null?void 0:j.querySelector("tbody");if(!st)return;st.innerHTML=g.map(Y=>`<tr style="border-bottom: 1px solid var(--border-color);">
                    <td style="padding: 0.8rem; color: var(--text-primary); font-weight: 500;">${Y.firstName} ${Y.lastName}</td>
                    <td style="padding: 0.8rem; color: var(--text-secondary); font-family: monospace; font-size: 0.85rem;">@${Y.username}</td>
                </tr>`).join("")}if(T==="students"){const st=(et=(N=(q=document.querySelector('[data-expand-table="students"]'))==null?void 0:q.closest("div"))==null?void 0:N.previousElementSibling)==null?void 0:et.querySelector("tbody");if(!st)return;st.innerHTML=h.map(Y=>`<tr style="border-bottom: 1px solid var(--border-color);">
                    <td style="padding: 0.8rem; color: var(--text-primary); font-weight: 500;">${Y.firstName} ${Y.lastName}</td>
                    <td style="padding: 0.8rem; color: var(--text-secondary);">${Y.grade||"—"}</td>
                </tr>`).join("")}const B=document.querySelector(`[data-expand-table="${T}"]`);(ft=B==null?void 0:B.closest("div"))==null||ft.remove()};document.querySelectorAll("[data-expand-table]").forEach(T=>{T.addEventListener("click",()=>{const B=T.getAttribute("data-expand-table");C(B)})})}catch(s){console.error("Error loading analytics:",s),D("Ошибка при загрузке аналитики","error"),_.navigate("/admin/dashboard")}}async function Vh(e){var i;console.log("👁️ viewClassStudents called with ID:",e),k.getState().language;const t=k.getState().token;try{console.log("👁️ Fetching class details for:",e);const s=await fetch(`${Q}/api/classes/${e}`,{headers:{Authorization:`Bearer ${t}`}});if(console.log("👁️ Response status:",s.status),!s.ok)throw new Error("Failed to fetch class");const n=await s.json();console.log("👁️ Class data received:",n);const a=n.data||n,r=a.name?`${a.grade||""}${a.name}`:(i=a.sections)!=null&&i.length?`${a.grade||""} (${a.sections.join(", ")})`:a.grade||"Класс",o=a.students||[];console.log("👁️ Students count:",o.length);const l=`
            <div style="background: var(--bg-primary); min-height: 100vh; padding: 2rem 1.5rem;">
                <div style="max-width: 1000px; margin: 0 auto;">
                    <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 2.5rem;">
                        <div>
                            <h1 style="margin: 0; font-size: 2.25rem; font-weight: 700; color: var(--text-primary);">${r}</h1>
                            <p style="margin: 0.5rem 0 0 0; color: var(--text-secondary); font-size: 0.95rem;">
                                ${o.length} учен${o.length===1?"ик":"иков"} в классе
                            </p>
                        </div>
                        <button onclick="window.router.navigate('/admin/classes')" style="padding: 0.75rem 1.5rem; border: 1px solid var(--border-color); background: transparent; color: var(--text-primary); border-radius: 8px; cursor: pointer; font-weight: 600; font-size: 0.9rem;">← Назад</button>
                    </div>

                    ${o.length===0?`
                        <div style="background: var(--bg-secondary); border: 1px solid var(--border-color); border-radius: 12px; padding: 3rem; text-align: center;">
                            <p style="color: var(--text-secondary); font-size: 1rem; margin: 0;">В этом классе пока нет учеников</p>
                        </div>
                    `:`
                        <div style="background: var(--bg-secondary); border-radius: 12px; border: 1px solid var(--border-color); overflow-x: auto;">
                            <table style="width: 100%; border-collapse: collapse;">
                                <thead>
                                    <tr style="background: var(--bg-tertiary);">
                                        <th style="padding: 1rem; text-align: left; font-weight: 600; font-size: 0.85rem; color: var(--text-secondary); text-transform: uppercase; letter-spacing: 0.5px;">ФИО</th>
                                        <th style="padding: 1rem; text-align: left; font-weight: 600; font-size: 0.85rem; color: var(--text-secondary); text-transform: uppercase; letter-spacing: 0.5px;">Email</th>
                                        <th style="padding: 1rem; text-align: left; font-weight: 600; font-size: 0.85rem; color: var(--text-secondary); text-transform: uppercase; letter-spacing: 0.5px;">Логин</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    ${o.map(d=>`
                                        <tr style="border-bottom: 1px solid var(--border-color);">
                                            <td style="padding: 1rem; font-weight: 600; color: var(--text-primary);">${d.firstName} ${d.lastName}</td>
                                            <td style="padding: 1rem; color: var(--text-secondary); font-size: 0.9rem;">${d.email||"—"}</td>
                                            <td style="padding: 1rem; color: var(--text-secondary); font-family: monospace; font-size: 0.85rem;">@${d.username||"—"}</td>
                                        </tr>
                                    `).join("")}
                                </tbody>
                            </table>
                        </div>
                    `}
                </div>
            </div>
        `;F(l,"admin")}catch(s){console.error("Error loading class:",s),D("Ошибка при загрузке класса","error")}}async function Wh(e){console.log("✏️ editClass called with ID:",e),k.getState().language;const t=k.getState().token;try{console.log("✏️ Fetching class details for:",e);const[i,s,n]=await Promise.all([fetch(`${Q}/api/classes/${e}`,{headers:{Authorization:`Bearer ${t}`}}),A("/api/users?role=teacher"),A("/api/users?role=student")]);if(console.log("✏️ Response status:",i.status),!i.ok)throw new Error("Failed to fetch class");const a=await i.json();console.log("✏️ Class data received:",a);const r=a.data||a,o=s.success?s.data:[],l=n.success?n.data:[],d=Array.isArray(r.sections)&&r.sections.length>0&&!r.name,c=r.name||(d?r.sections[0]:""),u=`
            <div class="admin-modal-overlay">
                <div class="admin-modal-content" style="background: var(--bg-primary); border-radius: 14px; padding: 2rem; max-width: 720px; width: 100%; max-height: 90vh; overflow-y: auto; box-shadow: 0 25px 50px rgba(0,0,0,0.2); border: 1px solid var(--border-color);">
                    <h2 style="margin: 0 0 0.5rem 0; font-size: 1.5rem; font-weight: 700; color: var(--text-primary);">Редактировать класс</h2>
                    <p style="margin: 0 0 1.5rem 0; color: var(--text-secondary); font-size: 0.9rem;">Измените параметры класса, руководителя и состав учеников</p>
                    <input type="hidden" id="editClassGrade" value="${r.grade||""}">
                    <input type="hidden" id="editClassOriginalName" value="${r.name||""}">

                    ${d?`
                        <div style="margin-bottom: 1.5rem;">
                            <label style="display: block; font-weight: 600; margin-bottom: 0.6rem; color: var(--text-primary); font-size: 0.9rem;">Секция</label>
                            <select id="editClassSection">
                                ${r.sections.map(f=>`
                                    <option value="${f}" ${f===c?"selected":""}>${r.grade}${f}</option>
                                `).join("")}
                            </select>
                        </div>
                    `:`
                        <div style="margin-bottom: 1.5rem;">
                            <label style="display: block; font-weight: 600; margin-bottom: 0.6rem; color: var(--text-primary); font-size: 0.9rem;">Название</label>
                            <input type="text" id="editClassName" value="${r.name||""}" style="width: 100%; padding: 0.8rem; border: 1px solid var(--border-color); border-radius: 8px; background: var(--bg-secondary); color: var(--text-primary); font-size: 0.95rem; box-sizing: border-box; transition: all 0.2s;" onfocus="this.style.borderColor='#3B82F6'; this.style.boxShadow='0 0 0 3px rgba(59,130,246,0.1)';" onblur="this.style.borderColor='var(--border-color)'; this.style.boxShadow='none';">
                        </div>
                    `}

                    <div style="margin-bottom: 1.5rem;">
                        <label style="display: block; font-weight: 600; margin-bottom: 0.6rem; color: var(--text-primary); font-size: 0.9rem;">Классный руководитель</label>
                        <select id="editClassTeacher">
                            <option value="">-- Не выбран --</option>
                            ${o.map(f=>`<option value="${f._id||f.id}" ${r.teacherId===(f._id||f.id)?"selected":""}>${f.firstName} ${f.lastName}</option>`).join("")}
                        </select>
                    </div>

                    <div style="margin-bottom: 1.5rem;">
                        <label style="display: block; font-weight: 600; margin-bottom: 0.6rem; color: var(--text-primary); font-size: 0.9rem;">Ученики класса</label>
                        <div style="font-size: 0.85rem; color: var(--text-secondary); margin-bottom: 0.75rem;">Выберите учеников, которые будут относиться к этому классу</div>
                        <div id="editClassStudents" style="max-height: 280px; overflow-y: auto; border: 1px solid var(--border-color); border-radius: 8px; padding: 0.75rem; background: var(--bg-secondary);"></div>
                    </div>

                    <div style="display: flex; gap: 0.8rem; justify-content: flex-end;">
                        <button onclick="closeModal()" style="padding: 0.75rem 1.5rem; border: 1px solid var(--border-color); background: transparent; color: var(--text-primary); border-radius: 8px; cursor: pointer; font-weight: 600; font-size: 0.9rem; transition: all 0.2s;">Отмена</button>
                        <button onclick="saveClassEdit('${e}')" style="padding: 0.75rem 1.5rem; background: #3B82F6; color: white; border: none; border-radius: 8px; cursor: pointer; font-weight: 600; font-size: 0.9rem; transition: all 0.2s;">Сохранить</button>
                    </div>
                </div>
            </div>
        `;document.body.insertAdjacentHTML("beforeend",u);const h=document.getElementById("editClassSection"),g=document.getElementById("editClassStudents"),m=()=>(h==null?void 0:h.value)||r.name||"",p=()=>{const f=m(),b=`${r.grade||""}${f||r.name||""}`.trim();g.innerHTML=l.map(v=>{const w=v.classId===r.id,y=v.grade?`${v.grade}${v.className||""}`:"—";return`
                    <label style="display: flex; align-items: flex-start; gap: 0.75rem; padding: 0.6rem 0.5rem; border-radius: 8px; cursor: pointer; transition: background 0.2s;">
                        <input type="checkbox" name="editClassStudent" value="${v.id}" ${w?"checked":""} style="width: 18px; height: 18px; accent-color: var(--primary); margin-top: 0.15rem;">
                        <div style="flex: 1;">
                            <div style="font-weight: 600; color: var(--text-primary);">${v.firstName} ${v.lastName}</div>
                            <div style="font-size: 0.8rem; color: var(--text-muted);">@${v.username} • текущий класс: ${y}</div>
                        </div>
                        <span style="font-size: 0.75rem; color: var(--text-secondary);">${b?`→ ${b}`:""}</span>
                    </label>
                `}).join("")};p(),h==null||h.addEventListener("change",p)}catch(i){console.error("Error loading class:",i),D("Ошибка при загрузке класса","error")}}async function Uh(e){var o,l,d;const t=k.getState().token,i=document.getElementById("editClassName"),s=i?i.value.trim():"",n=((o=document.getElementById("editClassTeacher"))==null?void 0:o.value)||null,a=((l=document.getElementById("editClassSection"))==null?void 0:l.value)||((d=document.getElementById("editClassOriginalName"))==null?void 0:d.value)||"",r=Array.from(document.querySelectorAll('input[name="editClassStudent"]:checked')).map(c=>c.value);try{const c={};if(s&&(c.name=s),n!==null&&(c.teacherId=n||null),!(await fetch(`${Q}/api/classes/${e}`,{method:"PUT",headers:{"Content-Type":"application/json",Authorization:`Bearer ${t}`},body:JSON.stringify(c)})).ok)throw new Error("Failed to update class");const h=await fetch(`${Q}/api/classes/${e}/students`,{method:"PUT",headers:{"Content-Type":"application/json",Authorization:`Bearer ${t}`},body:JSON.stringify({studentIds:r,section:a})});if(!h.ok){const g=await h.json();throw new Error(g.error||"Failed to update class students")}D("Класс успешно обновлен","success"),Ne(),Ii()}catch(c){console.error("Error updating class:",c),D("Ошибка при обновлении класса","error")}}async function Yh(e){console.log("📚 deleteClass called with ID:",e,"Type:",typeof e);const t=k.getState().token;if(await pe("Удалить класс?","Это действие необратимо"))try{const s=`${Q}/api/classes/${e}`;if(console.log("📚 DELETE request to:",s),!(await fetch(s,{method:"DELETE",headers:{Authorization:`Bearer ${t}`}})).ok)throw new Error("Failed to delete class");D("Класс удален","success"),Ii()}catch(s){console.error("Error deleting class:",s),D("Ошибка при удалении класса","error")}}async function Ii(){var s;const e=k.getState(),t=e.language,i=e.token;if(!e.isAuthenticated||!e.user||e.user.role!=="admin"){console.log("❌ Unauthorized access to classes"),_.navigate("/login");return}try{const n=await fetch(`${Q}/api/classes`,{headers:{Authorization:`Bearer ${i}`}});if(!n.ok)throw new Error("Failed to fetch classes");const r=(await n.json()).data||[];console.log("📚 Classes from API:",r),r.length>0&&console.log("📚 First class structure:",r[0]);const o=`
            <style>
                .classes-hero {
                    background: linear-gradient(135deg, rgba(16, 185, 129, 0.16) 0%, rgba(59, 130, 246, 0.12) 100%);
                    border: 1px solid rgba(16, 185, 129, 0.28);
                    border-radius: 18px;
                    padding: 1.5rem;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    gap: 1rem;
                    flex-wrap: wrap;
                }
                .classes-hero__title {
                    margin: 0;
                    font-size: 2.1rem;
                    font-weight: 800;
                    color: var(--text-primary);
                }
                .classes-hero__desc {
                    margin: 0.5rem 0 0 0;
                    color: var(--text-secondary);
                    font-size: 0.95rem;
                }
                .classes-hero__meta {
                    display: flex;
                    gap: 0.75rem;
                    flex-wrap: wrap;
                    align-items: center;
                }
                .classes-pill {
                    padding: 0.45rem 0.9rem;
                    border-radius: 999px;
                    background: rgba(16, 185, 129, 0.16);
                    color: #a7f3d0;
                    border: 1px solid rgba(16, 185, 129, 0.4);
                    font-weight: 600;
                    font-size: 0.8rem;
                }
                @media (max-width: 768px) {
                    .classes-hero { padding: 1.25rem; }
                    .classes-hero__title { font-size: 1.75rem; }
                    #classesTable th, #classesTable td { padding: 0.6rem 0.4rem !important; }
                    .class-actions { flex-direction: column; gap: 0.3rem; }
                    .class-actions button { width: 100%; font-size: 0.7rem; padding: 0.35rem 0.5rem !important; }
                }
                @media (max-width: 420px) {
                    .classes-hero { padding: 1rem; border-radius: 14px; }
                    .classes-hero__title { font-size: 1.5rem; }
                    .classes-hero__desc { font-size: 0.85rem; }
                    #classesTable { font-size: 0.7rem; }
                    #classesTable th, #classesTable td { padding: 0.4rem 0.25rem !important; font-size: 0.65rem !important; }
                }
            </style>
            <div style="background: var(--bg-primary); min-height: 100vh; padding: 2rem 1.5rem;">
                <div style="max-width: 1200px; margin: 0 auto; display: grid; gap: 1.5rem;">
                    <div class="classes-hero">
                        <div>
                            <h1 class="classes-hero__title">${t==="uz"?"Sinflarni boshqarish":"Управление классами"}</h1>
                            <p class="classes-hero__desc">${r.length} ${t==="uz"?"sinf":"класс"}${r.length===1||t==="uz"?"":"ов"} ${t==="uz"?"tizimda":"в системе"}</p>
                        </div>
                        <div class="classes-hero__meta">
                            <button onclick="window.router.navigate('/admin/dashboard')" class="btn-secondary" style="padding: 0.7rem 1.2rem; font-size: 0.9rem; border: 1px solid var(--border-color);">← ${E("back")}</button>
                            <span class="classes-pill">${r.length}</span>
                            <button id="btnAddClass" class="btn-primary" style="padding: 0.75rem 1.5rem; font-size: 0.9rem; white-space: nowrap;">+ ${t==="uz"?"Yangi sinf":"Новый класс"}</button>
                        </div>
                    </div>

                    <!-- Classes Table -->
                    ${r.length===0?`
                        <div style="background: var(--bg-secondary); border: 1px solid var(--border-color); border-radius: 12px; padding: 3rem; text-align: center;">
                            <p style="color: var(--text-secondary); font-size: 1rem; margin: 0;">Классов пока нет. Создайте первый класс.</p>
                        </div>
                    `:`
                        <div style="background: var(--bg-secondary); border-radius: 12px; border: 1px solid var(--border-color); overflow: hidden;">
                            <table id="classesTable" style="width: 100%; border-collapse: collapse;">
                                <thead>
                                    <tr style="background: var(--bg-tertiary);">
                                        <th style="padding: 1rem; text-align: left; font-weight: 600; font-size: 0.85rem; color: var(--text-secondary); text-transform: uppercase; letter-spacing: 0.5px;">Класс</th>
                                        <th style="padding: 1rem; text-align: center; font-weight: 600; font-size: 0.85rem; color: var(--text-secondary); text-transform: uppercase; letter-spacing: 0.5px;">Учеников</th>
                                        <th style="padding: 1rem; text-align: center; font-weight: 600; font-size: 0.85rem; color: var(--text-secondary); text-transform: uppercase; letter-spacing: 0.5px;">Учитель</th>
                                        <th style="padding: 1rem; text-align: center; font-weight: 600; font-size: 0.85rem; color: var(--text-secondary); text-transform: uppercase; letter-spacing: 0.5px;">Создано</th>
                                        <th style="padding: 1rem; text-align: right; font-weight: 600; font-size: 0.85rem; color: var(--text-secondary); text-transform: uppercase; letter-spacing: 0.5px;">Действия</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    ${r.map(l=>{var m,p;const d=l.studentCount??((m=l.students)==null?void 0:m.length)??0,c=l.createdAt?new Date(l.createdAt).toLocaleDateString("ru-RU",{year:"numeric",month:"short",day:"numeric"}):"—",u=l._id||l.id,h=l.name?`${l.grade||""}${l.name}`:(p=l.sections)!=null&&p.length?`${l.grade||""} (${l.sections.join(", ")})`:l.grade||"—",g=l.teacherFirstName&&l.teacherLastName?`${l.teacherFirstName} ${l.teacherLastName}`:"—";return`
                                        <tr style="border-bottom: 1px solid var(--border-color); transition: background 0.2s;">
                                            <td style="padding: 1rem; font-weight: 600; color: var(--text-primary);">${h}</td>
                                            <td style="padding: 1rem; text-align: center; color: #3B82F6; font-weight: 600;">${d}</td>
                                            <td style="padding: 1rem; text-align: center; color: var(--text-secondary); font-size: 0.9rem;">${g}</td>
                                            <td style="padding: 1rem; text-align: center; color: var(--text-secondary); font-size: 0.9rem;">${c}</td>
                                            <td style="padding: 1rem; text-align: right;">
                                                <div class="class-actions" style="display: flex; gap: 0.4rem; justify-content: flex-end;">
                                                    <button onclick="viewClassStudents('${u}')" style="padding: 0.5rem 0.9rem; font-size: 0.8rem; background: transparent; border: 1px solid var(--border-color); border-radius: 6px; color: var(--text-primary); cursor: pointer; transition: all 0.2s; font-weight: 500;">Просмотр</button>
                                                    <button onclick="editClass('${u}')" style="padding: 0.5rem 0.9rem; font-size: 0.8rem; background: transparent; border: 1px solid var(--border-color); border-radius: 6px; color: var(--text-primary); cursor: pointer; transition: all 0.2s; font-weight: 500;">Редакт.</button>
                                                    <button onclick="deleteClass('${u}')" style="padding: 0.5rem 0.9rem; font-size: 0.8rem; background: transparent; border: 1px solid #ef4444; border-radius: 6px; color: #ef4444; cursor: pointer; transition: all 0.2s; font-weight: 500;">Удалить</button>
                                                </div>
                                            </td>
                                        </tr>
                                        `}).join("")}
                                </tbody>
                            </table>
                        </div>
                    `}
                </div>
            </div>
        `;F(o,"admin"),(s=document.getElementById("btnAddClass"))==null||s.addEventListener("click",vr)}catch(n){console.error("Error loading classes:",n),D("Ошибка при загрузке классов","error"),_.navigate("/admin/dashboard")}}function vr(){k.getState().language;const e=k.getState().token,t=document.createElement("div");t.className="admin-modal-overlay",t.innerHTML=`
        <div class="admin-modal-content" style="background: var(--bg-primary); border-radius: 14px; padding: 2rem; max-width: 500px; width: 100%; box-shadow: 0 25px 50px rgba(0,0,0,0.2); border: 1px solid var(--border-color);">
            <h2 style="margin: 0 0 0.5rem 0; font-size: 1.5rem; font-weight: 700; color: var(--text-primary);">Новый класс</h2>
            <p style="margin: 0 0 1.5rem 0; color: var(--text-secondary); font-size: 0.9rem;">Создайте новый класс в системе</p>
            
            <div style="margin-bottom: 1.5rem;">
                <label style="display: block; font-weight: 600; margin-bottom: 0.6rem; color: var(--text-primary); font-size: 0.9rem;">📚 Номер класса</label>
                <input type="text" id="newClassGrade" placeholder="1, 2, 3, 4..." style="width: 100%; padding: 0.8rem; border: 1px solid var(--border-color); border-radius: 8px; background: var(--bg-secondary); color: var(--text-primary); font-size: 0.95rem; box-sizing: border-box; transition: all 0.2s;" onfocus="this.style.borderColor='#3B82F6'; this.style.boxShadow='0 0 0 3px rgba(59,130,246,0.1)';" onblur="this.style.borderColor='var(--border-color)'; this.style.boxShadow='none';">
            </div>

            <div style="margin-bottom: 1.5rem;">
                <label style="display: block; font-weight: 600; margin-bottom: 0.6rem; color: var(--text-primary); font-size: 0.9rem;">🔤 Буква класса</label>
                <input type="text" id="newClassName" placeholder="А, Б, В, Г..." style="width: 100%; padding: 0.8rem; border: 1px solid var(--border-color); border-radius: 8px; background: var(--bg-secondary); color: var(--text-primary); font-size: 0.95rem; box-sizing: border-box; transition: all 0.2s;" onfocus="this.style.borderColor='#3B82F6'; this.style.boxShadow='0 0 0 3px rgba(59,130,246,0.1)';" onblur="this.style.borderColor='var(--border-color)'; this.style.boxShadow='none';">
            </div>

            <div style="margin-bottom: 1.5rem;">
                <label style="display: block; font-weight: 600; margin-bottom: 0.6rem; color: var(--text-primary); font-size: 0.9rem;">👨‍🏫 Классный руководитель (опционально)</label>
                <select id="newClassTeacher">
                    <option value="">⏳ Загрузка учителей...</option>
                </select>
            </div>

            <div style="display: flex; gap: 0.8rem; justify-content: flex-end;">
                <button onclick="closeModal()" style="padding: 0.75rem 1.5rem; border: 1px solid var(--border-color); background: transparent; color: var(--text-primary); border-radius: 8px; cursor: pointer; font-weight: 600; font-size: 0.9rem; transition: all 0.2s;">Отмена</button>
                <button id="createClassBtn" onclick="createClass()" style="padding: 0.75rem 1.5rem; background: #3B82F6; color: white; border: none; border-radius: 8px; cursor: pointer; font-weight: 600; font-size: 0.9rem; transition: all 0.2s;">Создать</button>
            </div>
        </div>
    `,t.addEventListener("click",i=>{i.target===t&&Ne()}),document.body.appendChild(t),Xh(e)}async function Xh(e){try{console.log("📚 Loading teachers for modal...");const t=await fetch(`${Q}/api/users?role=teacher`,{headers:{Authorization:`Bearer ${e}`}});let i=[];t.ok?(i=(await t.json()).data||[],console.log("📚 Teachers loaded:",i.length)):console.error("Failed to load teachers:",t.status);const s=document.getElementById("newClassTeacher");s&&(s.innerHTML='<option value="">-- Не выбран --</option>',i.forEach(n=>{const a=document.createElement("option");a.value=n._id||n.id,a.textContent=`${n.firstName} ${n.lastName}`,s.appendChild(a)}))}catch(t){console.error("Error loading teachers:",t);const i=document.getElementById("newClassTeacher");i&&(i.innerHTML='<option value="">-- Ошибка загрузки --</option>')}}async function Qh(){console.log("📚 Creating class...");const e=k.getState().token,t=document.getElementById("newClassGrade").value.trim(),i=document.getElementById("newClassName").value.trim();let s=t,n=i;const a=document.getElementById("newClassTeacher").value.trim(),r=document.getElementById("createClassBtn");r&&(r.disabled=!0);const o=!n&&t.match(/^(\d+)\s*([A-Za-zА-Яа-я])$/);if(o&&(s=o[1],n=o[2]),s=s.replace(/[^0-9]/g,""),n=n.replace(/\s+/g,"").toUpperCase(),!s||!n){D("Укажите номер класса и букву","error"),r&&(r.disabled=!1);return}try{const l={grade:s,name:n};a&&(l.teacherId=a),console.log("📚 Sending class data:",l);const d=await fetch(`${Q}/api/classes`,{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${e}`},body:JSON.stringify(l)});console.log("📚 Response status:",d.status);const c=await d.json();if(console.log("📚 Response data:",c),!d.ok)throw new Error(c.error||"Failed to create class");console.log("✅ Class created successfully, closing modal..."),D("Класс создан успешно","success"),Ne(),console.log("✅ Modal closed, refreshing class list..."),Ii()}catch(l){console.error("❌ Error creating class:",l),D("Ошибка при создании класса: "+l.message,"error")}finally{r&&(r.disabled=!1)}}function Ne(){console.log("🚪 closeModal called");const e=document.querySelectorAll(".admin-modal-overlay, .custom-modal-overlay, .modal");console.log("🚪 Modal elements found:",e.length),e.forEach(t=>t.remove())}async function js(){var s;const e=k.getState(),t=e.token,i=e.language;if(!e.isAuthenticated||!e.user||e.user.role!=="admin"){console.log("❌ Unauthorized access to passwords"),_.navigate("/login");return}try{const[n,a]=await Promise.all([fetch(`${Q}/api/users`,{headers:{Authorization:`Bearer ${t}`}}),fetch(`${Q}/api/classes`,{headers:{Authorization:`Bearer ${t}`}})]),r=await n.json(),o=await a.json(),l=r.data||[],d=o.data||[];let c=`<option value="">${E("allClasses")}</option>`;d.forEach(y=>{var z;const x=y.name?`${y.grade||""}${y.name}`:(z=y.sections)!=null&&z.length?`${y.grade||""} (${y.sections.join(", ")})`:y.grade||"—";c+=`<option value="${y._id||y.id||x}">${x}</option>`});const u=y=>String(y??"").replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;");let h="",g="";l.forEach(y=>{const x=y.id||y._id,z=y.name||`${y.firstName} ${y.lastName}`,S=y.role==="student"&&`${y.grade||""}${y.gradeSection||""}`.trim()||"—",$=y.role==="student"?E("student"):y.role==="teacher"?E("teacher"):E("admin"),C=y.role==="student"?`<span style="background: #dbeafe; color: #1e40af; padding: 0.25rem 0.75rem; border-radius: 8px; font-size: 0.8rem; font-weight: 600;">${E("student")}</span>`:y.role==="teacher"?`<span style="background: #fef3c7; color: #92400e; padding: 0.25rem 0.75rem; border-radius: 8px; font-size: 0.8rem; font-weight: 600;">${E("teacher")}</span>`:`<span style="background: #f3e8ff; color: #6b21a8; padding: 0.25rem 0.75rem; border-radius: 8px; font-size: 0.8rem; font-weight: 600;">${E("admin")}</span>`,T=`${z} ${y.username}`.toLowerCase();h+=`
            <tr style="border-top: 1px solid var(--border-color);" data-role="${y.role}" data-class="${S}" data-search="${u(T)}">
                <td data-label="" style="padding: 1rem; color: var(--text-primary); font-size: 0.9rem;">
                    <div style="font-weight: 600;">${z}</div>
                    <div style="color: var(--text-secondary); font-size: 0.8rem; font-family: monospace;">${y.username}</div>
                </td>
                <td data-label="" style="padding: 1rem; text-align: center; color: var(--text-primary); font-size: 0.9rem; font-weight: 500;">
                    ${C}
                </td>
                <td data-label="" style="padding: 1rem; text-align: center; color: var(--text-primary); font-size: 0.9rem;">
                    ${S}
                </td>
                <td data-label="" style="padding: 1rem; text-align: center;">
                    <button class="btn-primary reset-user-btn" data-user-id="${u(x)}" data-user-name="${u(z)}" data-username="${u(y.username)}" style="padding: 0.5rem 1rem; font-size: 0.85rem; white-space: nowrap;">Сбросить</button>
                </td>
            </tr>
            `,g+=`
                <div class="passwords-card" data-role="${y.role}" data-class="${S}" data-search="${u(T)}">
                    <div class="passwords-card__header">
                        <div>
                            <div class="passwords-card__name">${z}</div>
                            <div class="passwords-card__username">@${y.username}</div>
                        </div>
                        ${C}
                    </div>
                    <div class="passwords-card__meta">
                        <span>${i==="uz"?"Sinf":"Класс"}:</span>
                        <strong>${S}</strong>
                    </div>
                    <button class="btn-primary reset-user-btn" data-user-id="${u(x)}" data-user-name="${u(z)}" data-username="${u(y.username)}" style="padding: 0.6rem 1rem; font-size: 0.85rem;">${i==="uz"?"Parolni tiklash":"Сбросить пароль"}</button>
                </div>
            `});const m=`
            <style>
                .passwords-hero {
                    background: linear-gradient(135deg, rgba(239, 68, 68, 0.14) 0%, rgba(59, 130, 246, 0.12) 100%);
                    border: 1px solid rgba(239, 68, 68, 0.25);
                    border-radius: 18px;
                    padding: 1.5rem;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    gap: 1rem;
                    flex-wrap: wrap;
                }
                .passwords-hero__title {
                    margin: 0;
                    font-size: 2.1rem;
                    font-weight: 800;
                    color: var(--text-primary);
                }
                .passwords-hero__desc {
                    margin: 0.5rem 0 0 0;
                    color: var(--text-secondary);
                    font-size: 0.95rem;
                }
                .passwords-hero__meta {
                    display: flex;
                    gap: 0.75rem;
                    flex-wrap: wrap;
                    align-items: center;
                }
                .passwords-pill {
                    padding: 0.45rem 0.9rem;
                    border-radius: 999px;
                    background: rgba(239, 68, 68, 0.16);
                    color: #fecaca;
                    border: 1px solid rgba(239, 68, 68, 0.4);
                    font-weight: 600;
                    font-size: 0.8rem;
                }
                .passwords-panel {
                    background: var(--bg-secondary);
                    border: 1px solid var(--border-color);
                    border-radius: 16px;
                    padding: 1.25rem;
                    display: grid;
                    gap: 1rem;
                }
                .passwords-toolbar {
                    display: grid;
                    grid-template-columns: 1fr auto;
                    gap: 1rem;
                    align-items: center;
                }
                .passwords-search {
                    display: flex;
                    align-items: center;
                    gap: 0.6rem;
                    padding: 0.65rem 0.9rem;
                    background: var(--bg-tertiary);
                    border: 1px solid var(--border-color);
                    border-radius: 12px;
                }
                .passwords-search input {
                    background: transparent;
                    border: none;
                    outline: none;
                    color: var(--text-primary);
                    width: 100%;
                    font-size: 0.95rem;
                }
                .passwords-filters {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
                    gap: 1rem;
                }
                .passwords-table-wrap {
                    background: var(--bg-secondary);
                    border-radius: 12px;
                    border: 1px solid var(--border-color);
                    overflow: hidden;
                }
                .passwords-cards {
                    display: none;
                    gap: 0.8rem;
                }
                .passwords-card {
                    background: var(--bg-primary);
                    border: 1px solid var(--border-color);
                    border-radius: 16px;
                    padding: 1rem;
                    display: grid;
                    gap: 0.75rem;
                }
                .passwords-card__header {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    gap: 0.75rem;
                    flex-wrap: wrap;
                }
                .passwords-card__name {
                    font-weight: 700;
                    color: var(--text-primary);
                }
                .passwords-card__username {
                    color: var(--text-secondary);
                    font-size: 0.8rem;
                    font-family: monospace;
                }
                .passwords-card__meta {
                    color: var(--text-secondary);
                    font-size: 0.85rem;
                    display: flex;
                    gap: 0.4rem;
                    align-items: center;
                }
                @media (max-width: 768px) {
                    .passwords-hero { padding: 1.25rem; }
                    .passwords-hero__title { font-size: 1.75rem; }
                    .passwords-toolbar { grid-template-columns: 1fr; }
                }
                @media (max-width: 420px) {
                    .passwords-hero { padding: 1rem; border-radius: 14px; }
                    .passwords-hero__title { font-size: 1.5rem; }
                    .passwords-hero__desc { font-size: 0.85rem; }
                    .passwords-panel { padding: 1rem; }
                    .passwords-table-wrap { display: none; }
                    .passwords-cards { display: grid; }
                    .passwords-card button { width: 100%; }
                }
            </style>
            <div style="background: var(--bg-primary); min-height: 100vh; padding: 2rem 1.5rem;">
                <div style="max-width: 1200px; margin: 0 auto; display: grid; gap: 1.5rem;">
                    <div class="passwords-hero">
                        <div>
                            <h1 class="passwords-hero__title">${i==="uz"?"Parollarni tiklash":"Сброс паролей"}</h1>
                            <p class="passwords-hero__desc">${i==="uz"?"Foydalanuvchi parollarini boshqarish va tiklash":"Управление и сброс паролей пользователей"}</p>
                        </div>
                        <div class="passwords-hero__meta">
                            <button id="btnPasswordsBack" class="btn-secondary" style="padding: 0.7rem 1.2rem; font-size: 0.9rem; border: 1px solid var(--border-color);">← ${E("back")}</button>
                            <span class="passwords-pill">${l.length} ${i==="uz"?"foydalanuvchi":"пользователей"}</span>
                        </div>
                    </div>

                    <div class="passwords-panel">
                        <div class="passwords-toolbar">
                            <div class="passwords-search">
                                <i class="fas fa-search" style="color: var(--text-muted);"></i>
                                <input id="passwordsSearch" type="text" placeholder="${i==="uz"?"Foydalanuvchini qidiring...":"Найти пользователя..."}">
                            </div>
                            <div style="display: flex; gap: 0.5rem; align-items: center; color: var(--text-secondary); font-size: 0.85rem;">
                                <i class="fas fa-filter"></i>
                                <span>${i==="uz"?"Filtrlar":"Фильтры"}</span>
                            </div>
                        </div>

                        <div class="passwords-filters">
                            <div>
                                <label style="display: block; font-size: 0.8rem; font-weight: 600; color: var(--text-secondary); margin-bottom: 0.5rem; text-transform: uppercase; letter-spacing: 0.5px;">${i==="uz"?"Sinf":"Класс"}</label>
                                <select id="passwordClassFilter">
                                    ${c}
                                </select>
                            </div>
                            <div>
                                <label style="display: block; font-size: 0.8rem; font-weight: 600; color: var(--text-secondary); margin-bottom: 0.5rem; text-transform: uppercase; letter-spacing: 0.5px;">${i==="uz"?"Rol":"Роль"}</label>
                                <select id="passwordRoleFilter">
                                    <option value="">${i==="uz"?"Barcha rollar":"Все роли"}</option>
                                    <option value="student">${E("student")}</option>
                                    <option value="teacher">${E("teacher")}</option>
                                    <option value="admin">${E("admin")}</option>
                                </select>
                            </div>
                        </div>

                        ${l.length===0?`
                            <div style="background: var(--bg-tertiary); border: 1px dashed var(--border-color); border-radius: 12px; padding: 2.5rem; text-align: center; color: var(--text-secondary);">
                                <div style="font-size: 2rem; margin-bottom: 0.5rem;">🔐</div>
                                <div style="font-weight: 600; margin-bottom: 0.35rem;">${i==="uz"?"Foydalanuvchilar topilmadi":"Пользователей не найдено"}</div>
                                <div style="font-size: 0.9rem;">${i==="uz"?"Filtrlarni tozalang":"Сбросьте фильтры"}</div>
                            </div>
                        `:`
                            <div class="passwords-table-wrap">
                                <table id="passwordTable" style="width: 100%; border-collapse: collapse;">
                                    <thead>
                                        <tr style="background: var(--bg-tertiary);">
                                            <th style="padding: 1rem; text-align: left; font-weight: 600; font-size: 0.85rem; color: var(--text-secondary); text-transform: uppercase; letter-spacing: 0.5px;">${i==="uz"?"Foydalanuvchi":"Пользователь"}</th>
                                            <th style="padding: 1rem; text-align: center; font-weight: 600; font-size: 0.85rem; color: var(--text-secondary); text-transform: uppercase; letter-spacing: 0.5px;">${i==="uz"?"Rol":"Роль"}</th>
                                            <th style="padding: 1rem; text-align: center; font-weight: 600; font-size: 0.85rem; color: var(--text-secondary); text-transform: uppercase; letter-spacing: 0.5px;">${i==="uz"?"Sinf":"Класс"}</th>
                                            <th style="padding: 1rem; text-align: center; font-weight: 600; font-size: 0.85rem; color: var(--text-secondary); text-transform: uppercase; letter-spacing: 0.5px;"></th>
                                        </tr>
                                    </thead>
                                    <tbody id="passwordTableBody">
                                        ${h}
                                    </tbody>
                                </table>
                            </div>
                            <div class="passwords-cards">
                                ${g}
                            </div>
                        `}
                    </div>
                </div>
            </div>
        `;F(m,"admin");const p=document.getElementById("passwordClassFilter"),f=document.getElementById("passwordRoleFilter"),b=document.getElementById("passwordsSearch"),v=document.getElementById("passwordTableBody"),w=()=>{if(!v)return;const y=(p==null?void 0:p.value)||"",x=(f==null?void 0:f.value)||"",z=((b==null?void 0:b.value)||"").trim().toLowerCase();(v?Array.from(v.querySelectorAll("tr")):[]).forEach($=>{const C=$.getAttribute("data-role")||"",T=$.getAttribute("data-class")||"",B=$.getAttribute("data-search")||"",P=!x||C===x,R=!y||T===y,U=!z||B.includes(z);$.style.display=P&&R&&U?"":"none"}),document.querySelectorAll(".passwords-card").forEach($=>{const C=$.getAttribute("data-role")||"",T=$.getAttribute("data-class")||"",B=$.getAttribute("data-search")||"",P=!x||C===x,R=!y||T===y,U=!z||B.includes(z);$.style.display=P&&R&&U?"grid":"none"})};p==null||p.addEventListener("change",w),f==null||f.addEventListener("change",w),b==null||b.addEventListener("input",w),w(),(s=document.getElementById("btnPasswordsBack"))==null||s.addEventListener("click",()=>{_.navigate("/admin/dashboard")}),document.querySelectorAll(".reset-user-btn").forEach(y=>{y.addEventListener("click",()=>{const{userId:x,userName:z,username:S}=y.dataset;xr(x,z,S)})})}catch(n){console.error("Error loading passwords page:",n),D("Ошибка при загрузке страницы","error")}}function xr(e,t,i){const s=`
        <div class="admin-modal-overlay">
            <div class="admin-modal-content" style="background: var(--bg-secondary); border: 1px solid var(--border-color); border-radius: 16px; padding: 2rem; width: 90%; max-width: 450px; box-shadow: 0 20px 60px rgba(0,0,0,0.3);">
                <h2 style="margin: 0 0 1rem 0; font-size: 1.5rem; color: var(--text-primary);">Сброс пароля</h2>
                <p style="color: var(--text-secondary); margin: 0 0 1.5rem 0; font-size: 0.95rem;">
                    Подтвердите сброс пароля для <strong>${t}</strong> (${i})
                </p>
                
                <div style="background: var(--bg-primary); border: 1px solid var(--border-color); border-radius: 8px; padding: 1.25rem; margin-bottom: 1.5rem;">
                    <p style="margin: 0; font-size: 0.9rem; color: var(--text-secondary);">
                        <strong>Внимание:</strong> Пароль будет сброшен на стандартный. Пользователь сможет установить новый пароль при входе.
                    </p>
                </div>

                <div style="display: flex; gap: 1rem; justify-content: flex-end;">
                    <button onclick="closeModal()" class="btn-secondary" style="padding: 0.75rem 1.5rem; font-size: 0.9rem; border: 1px solid var(--border-color); flex: 1; min-width: 140px;">Отмена</button>
                    <button onclick="resetUserPassword('${e}')" class="btn-primary" style="padding: 0.75rem 1.5rem; font-size: 0.9rem; flex: 1; min-width: 140px;">Сбросить пароль</button>
                </div>
            </div>
        </div>
    `;document.body.insertAdjacentHTML("beforeend",s)}async function Kh(e){const t=k.getState().token;try{const i=await fetch(`${Q}/api/users/${e}/reset-password`,{method:"POST",headers:{Authorization:`Bearer ${t}`,"Content-Type":"application/json"}});if(!i.ok)throw new Error("Failed to reset password");const s=await i.json();if(Ne(),s.otp){const n=`
                <div class="admin-modal-overlay">
                    <div class="admin-modal-content" style="background: var(--bg-secondary); border: 1px solid var(--border-color); border-radius: 16px; padding: 2rem; width: 90%; max-width: 500px; box-shadow: 0 20px 60px rgba(0,0,0,0.3);">
                        <div style="text-align: center; margin-bottom: 1.5rem;">
                            <div style="width: 64px; height: 64px; background: linear-gradient(135deg, #10b981 0%, #059669 100%); border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 1rem; color: white; font-size: 2rem;">
                                ✓
                            </div>
                            <h2 style="margin: 0 0 0.5rem 0; font-size: 1.5rem; color: var(--text-primary);">Пароль сброшен!</h2>
                            <p style="margin: 0; color: var(--text-secondary); font-size: 0.95rem;">Временный пароль для входа:</p>
                        </div>
                        
                        <div style="background: var(--bg-primary); border: 2px dashed #10b981; border-radius: 12px; padding: 1.5rem; margin-bottom: 1.5rem; text-align: center;">
                            <div style="font-family: 'Courier New', monospace; font-size: 1.75rem; font-weight: 700; color: #10b981; letter-spacing: 0.25rem; margin-bottom: 0.5rem;">${s.otp}</div>
                            <button onclick="navigator.clipboard.writeText('${s.otp}'); this.innerHTML='<span style=\\'color: #10b981;\\'>✓ Скопировано!</span>'" style="padding: 0.5rem 1rem; font-size: 0.85rem; background: var(--bg-secondary); border: 1px solid var(--border-color); border-radius: 6px; cursor: pointer; color: var(--text-primary); transition: all 0.2s;">
                                📋 Копировать
                            </button>
                        </div>
                        
                        <div style="background: linear-gradient(135deg, rgba(16, 185, 129, 0.1) 0%, rgba(5, 150, 105, 0.05) 100%); border: 1px solid rgba(16, 185, 129, 0.2); border-radius: 8px; padding: 1rem; margin-bottom: 1.5rem;">
                            <p style="margin: 0; font-size: 0.85rem; color: var(--text-secondary); line-height: 1.6;">
                                <strong style="color: var(--text-primary);">🔐 Использование:</strong> Одноразовый<br>
                                <strong style="color: var(--text-primary);">📝 При входе:</strong> Потребуется смена пароля
                            </p>
                        </div>
                        
                        <button onclick="window.closeModal(); window.renderAdminPasswords()" class="btn-primary" style="width: 100%; padding: 0.875rem; font-size: 0.95rem; font-weight: 600;">
                            Закрыть
                        </button>
                    </div>
                </div>
            `;document.body.insertAdjacentHTML("beforeend",n)}else D("Пароль успешно сброшен","success"),js()}catch(i){console.error("Error resetting password:",i),D("Ошибка при сбросе пароля","error")}}_.register("/login",dr);_.register("/role-selection",Bs);_.register("/change-password",Fu);_.register("/student/dashboard",ur);_.register("/student/profile",Vu);_.register("/student/subjects",Wu);_.register("/student/subject-modules/:subjectId",Yu);_.register("/student/take-test/:testId",Xu);_.register("/student/test-results/:resultId",Ku);_.register("/student/test-history",Ju);_.register("/student/interest-test",zh);_.register("/student/control-tests",_h);_.register("/student/take-control-test/:testId",({testId:e})=>$h({testId:e}));_.register("/teacher/subjects",Sh);_.register("/teacher/control-tests",Ih);_.register("/teacher/classes",Oh);_.register("/teacher/profile",qh);_.register("/teacher/subject-analytics",Dh);_.register("/teacher/tests",fh);_.register("/teacher/test/:id",xh);_.register("/teacher/student/:studentId",({studentId:e})=>Rh({studentId:e}));_.register("/teacher/subject/:subjectId",Th);_.register("/teacher/module/:moduleId/tests",Fh);_.register("/teacher/module/:moduleId/edit-test/:testId",yr);_.register("/admin/dashboard",ue);_.register("/admin/analytics",Hh);_.register("/admin/classes",Ii);_.register("/admin/subjects",Bi);_.register("/admin/passwords",js);_.register("/admin/teacher-tests",ch);_.register("/admin/student/:studentId",({studentId:e})=>rh(e));_.register("/admin/teacher/:teacherId",({teacherId:e})=>lh(e));document.addEventListener("DOMContentLoaded",()=>{window.deleteClass=Yh,window.editClass=Wh,window.viewClassStudents=Vh,window.saveClassEdit=Uh,window.showCreateClassModal=vr,window.createClass=Qh,window.closeModal=Ne,window.showAddUserModal=pr,window.showResetPasswordModal=xr,window.resetUserPassword=Kh,window.renderAdminPasswords=js,lr(),ie(),gs();const e=window.location.pathname;_.navigate(e==="/"?"/":e,!1)});
