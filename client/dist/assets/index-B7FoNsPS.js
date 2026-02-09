var Tr=Object.defineProperty;var Er=(e,t,i)=>t in e?Tr(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i;var B=(e,t,i)=>Er(e,typeof t!="symbol"?t+"":t,i);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))s(n);new MutationObserver(n=>{for(const a of n)if(a.type==="childList")for(const r of a.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function i(n){const a={};return n.integrity&&(a.integrity=n.integrity),n.referrerPolicy&&(a.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?a.credentials="include":n.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(n){if(n.ep)return;n.ep=!0;const a=i(n);fetch(n.href,a)}})();/*!
 * @kurkle/color v0.3.4
 * https://github.com/kurkle/color#readme
 * (c) 2024 Jukka Kurkela
 * Released under the MIT License
 */function Fe(e){return e+.5|0}const Pt=(e,t,i)=>Math.max(Math.min(e,i),t);function ze(e){return Pt(Fe(e*2.55),0,255)}function Ft(e){return Pt(Fe(e*255),0,255)}function Ct(e){return Pt(Fe(e/2.55)/100,0,1)}function Rs(e){return Pt(Fe(e*100),0,100)}const vt={0:0,1:1,2:2,3:3,4:4,5:5,6:6,7:7,8:8,9:9,A:10,B:11,C:12,D:13,E:14,F:15,a:10,b:11,c:12,d:13,e:14,f:15},Ki=[..."0123456789ABCDEF"],Mr=e=>Ki[e&15],Cr=e=>Ki[(e&240)>>4]+Ki[e&15],He=e=>(e&240)>>4===(e&15),Ar=e=>He(e.r)&&He(e.g)&&He(e.b)&&He(e.a);function Lr(e){var t=e.length,i;return e[0]==="#"&&(t===4||t===5?i={r:255&vt[e[1]]*17,g:255&vt[e[2]]*17,b:255&vt[e[3]]*17,a:t===5?vt[e[4]]*17:255}:(t===7||t===9)&&(i={r:vt[e[1]]<<4|vt[e[2]],g:vt[e[3]]<<4|vt[e[4]],b:vt[e[5]]<<4|vt[e[6]],a:t===9?vt[e[7]]<<4|vt[e[8]]:255})),i}const Br=(e,t)=>e<255?t(e):"";function Ir(e){var t=Ar(e)?Mr:Cr;return e?"#"+t(e.r)+t(e.g)+t(e.b)+Br(e.a,t):void 0}const jr=/^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/;function ga(e,t,i){const s=t*Math.min(i,1-i),n=(a,r=(a+e/30)%12)=>i-s*Math.max(Math.min(r-3,9-r,1),-1);return[n(0),n(8),n(4)]}function Pr(e,t,i){const s=(n,a=(n+e/60)%6)=>i-i*t*Math.max(Math.min(a,4-a,1),0);return[s(5),s(3),s(1)]}function Dr(e,t,i){const s=ga(e,1,.5);let n;for(t+i>1&&(n=1/(t+i),t*=n,i*=n),n=0;n<3;n++)s[n]*=1-t-i,s[n]+=t;return s}function Or(e,t,i,s,n){return e===n?(t-i)/s+(t<i?6:0):t===n?(i-e)/s+2:(e-t)/s+4}function ms(e){const i=e.r/255,s=e.g/255,n=e.b/255,a=Math.max(i,s,n),r=Math.min(i,s,n),o=(a+r)/2;let l,d,c;return a!==r&&(c=a-r,d=o>.5?c/(2-a-r):c/(a+r),l=Or(i,s,n,c,a),l=l*60+.5),[l|0,d||0,o]}function ps(e,t,i,s){return(Array.isArray(t)?e(t[0],t[1],t[2]):e(t,i,s)).map(Ft)}function fs(e,t,i){return ps(ga,e,t,i)}function qr(e,t,i){return ps(Dr,e,t,i)}function Rr(e,t,i){return ps(Pr,e,t,i)}function ma(e){return(e%360+360)%360}function Fr(e){const t=jr.exec(e);let i=255,s;if(!t)return;t[5]!==s&&(i=t[6]?ze(+t[5]):Ft(+t[5]));const n=ma(+t[2]),a=+t[3]/100,r=+t[4]/100;return t[1]==="hwb"?s=qr(n,a,r):t[1]==="hsv"?s=Rr(n,a,r):s=fs(n,a,r),{r:s[0],g:s[1],b:s[2],a:i}}function Nr(e,t){var i=ms(e);i[0]=ma(i[0]+t),i=fs(i),e.r=i[0],e.g=i[1],e.b=i[2]}function Hr(e){if(!e)return;const t=ms(e),i=t[0],s=Rs(t[1]),n=Rs(t[2]);return e.a<255?`hsla(${i}, ${s}%, ${n}%, ${Ct(e.a)})`:`hsl(${i}, ${s}%, ${n}%)`}const Fs={x:"dark",Z:"light",Y:"re",X:"blu",W:"gr",V:"medium",U:"slate",A:"ee",T:"ol",S:"or",B:"ra",C:"lateg",D:"ights",R:"in",Q:"turquois",E:"hi",P:"ro",O:"al",N:"le",M:"de",L:"yello",F:"en",K:"ch",G:"arks",H:"ea",I:"ightg",J:"wh"},Ns={OiceXe:"f0f8ff",antiquewEte:"faebd7",aqua:"ffff",aquamarRe:"7fffd4",azuY:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"0",blanKedOmond:"ffebcd",Xe:"ff",XeviTet:"8a2be2",bPwn:"a52a2a",burlywood:"deb887",caMtXe:"5f9ea0",KartYuse:"7fff00",KocTate:"d2691e",cSO:"ff7f50",cSnflowerXe:"6495ed",cSnsilk:"fff8dc",crimson:"dc143c",cyan:"ffff",xXe:"8b",xcyan:"8b8b",xgTMnPd:"b8860b",xWay:"a9a9a9",xgYF:"6400",xgYy:"a9a9a9",xkhaki:"bdb76b",xmagFta:"8b008b",xTivegYF:"556b2f",xSange:"ff8c00",xScEd:"9932cc",xYd:"8b0000",xsOmon:"e9967a",xsHgYF:"8fbc8f",xUXe:"483d8b",xUWay:"2f4f4f",xUgYy:"2f4f4f",xQe:"ced1",xviTet:"9400d3",dAppRk:"ff1493",dApskyXe:"bfff",dimWay:"696969",dimgYy:"696969",dodgerXe:"1e90ff",fiYbrick:"b22222",flSOwEte:"fffaf0",foYstWAn:"228b22",fuKsia:"ff00ff",gaRsbSo:"dcdcdc",ghostwEte:"f8f8ff",gTd:"ffd700",gTMnPd:"daa520",Way:"808080",gYF:"8000",gYFLw:"adff2f",gYy:"808080",honeyMw:"f0fff0",hotpRk:"ff69b4",RdianYd:"cd5c5c",Rdigo:"4b0082",ivSy:"fffff0",khaki:"f0e68c",lavFMr:"e6e6fa",lavFMrXsh:"fff0f5",lawngYF:"7cfc00",NmoncEffon:"fffacd",ZXe:"add8e6",ZcSO:"f08080",Zcyan:"e0ffff",ZgTMnPdLw:"fafad2",ZWay:"d3d3d3",ZgYF:"90ee90",ZgYy:"d3d3d3",ZpRk:"ffb6c1",ZsOmon:"ffa07a",ZsHgYF:"20b2aa",ZskyXe:"87cefa",ZUWay:"778899",ZUgYy:"778899",ZstAlXe:"b0c4de",ZLw:"ffffe0",lime:"ff00",limegYF:"32cd32",lRF:"faf0e6",magFta:"ff00ff",maPon:"800000",VaquamarRe:"66cdaa",VXe:"cd",VScEd:"ba55d3",VpurpN:"9370db",VsHgYF:"3cb371",VUXe:"7b68ee",VsprRggYF:"fa9a",VQe:"48d1cc",VviTetYd:"c71585",midnightXe:"191970",mRtcYam:"f5fffa",mistyPse:"ffe4e1",moccasR:"ffe4b5",navajowEte:"ffdead",navy:"80",Tdlace:"fdf5e6",Tive:"808000",TivedBb:"6b8e23",Sange:"ffa500",SangeYd:"ff4500",ScEd:"da70d6",pOegTMnPd:"eee8aa",pOegYF:"98fb98",pOeQe:"afeeee",pOeviTetYd:"db7093",papayawEp:"ffefd5",pHKpuff:"ffdab9",peru:"cd853f",pRk:"ffc0cb",plum:"dda0dd",powMrXe:"b0e0e6",purpN:"800080",YbeccapurpN:"663399",Yd:"ff0000",Psybrown:"bc8f8f",PyOXe:"4169e1",saddNbPwn:"8b4513",sOmon:"fa8072",sandybPwn:"f4a460",sHgYF:"2e8b57",sHshell:"fff5ee",siFna:"a0522d",silver:"c0c0c0",skyXe:"87ceeb",UXe:"6a5acd",UWay:"708090",UgYy:"708090",snow:"fffafa",sprRggYF:"ff7f",stAlXe:"4682b4",tan:"d2b48c",teO:"8080",tEstN:"d8bfd8",tomato:"ff6347",Qe:"40e0d0",viTet:"ee82ee",JHt:"f5deb3",wEte:"ffffff",wEtesmoke:"f5f5f5",Lw:"ffff00",LwgYF:"9acd32"};function Vr(){const e={},t=Object.keys(Ns),i=Object.keys(Fs);let s,n,a,r,o;for(s=0;s<t.length;s++){for(r=o=t[s],n=0;n<i.length;n++)a=i[n],o=o.replace(a,Fs[a]);a=parseInt(Ns[r],16),e[o]=[a>>16&255,a>>8&255,a&255]}return e}let Ve;function Wr(e){Ve||(Ve=Vr(),Ve.transparent=[0,0,0,0]);const t=Ve[e.toLowerCase()];return t&&{r:t[0],g:t[1],b:t[2],a:t.length===4?t[3]:255}}const Ur=/^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/;function Yr(e){const t=Ur.exec(e);let i=255,s,n,a;if(t){if(t[7]!==s){const r=+t[7];i=t[8]?ze(r):Pt(r*255,0,255)}return s=+t[1],n=+t[3],a=+t[5],s=255&(t[2]?ze(s):Pt(s,0,255)),n=255&(t[4]?ze(n):Pt(n,0,255)),a=255&(t[6]?ze(a):Pt(a,0,255)),{r:s,g:n,b:a,a:i}}}function Xr(e){return e&&(e.a<255?`rgba(${e.r}, ${e.g}, ${e.b}, ${Ct(e.a)})`:`rgb(${e.r}, ${e.g}, ${e.b})`)}const ji=e=>e<=.0031308?e*12.92:Math.pow(e,1/2.4)*1.055-.055,ce=e=>e<=.04045?e/12.92:Math.pow((e+.055)/1.055,2.4);function Qr(e,t,i){const s=ce(Ct(e.r)),n=ce(Ct(e.g)),a=ce(Ct(e.b));return{r:Ft(ji(s+i*(ce(Ct(t.r))-s))),g:Ft(ji(n+i*(ce(Ct(t.g))-n))),b:Ft(ji(a+i*(ce(Ct(t.b))-a))),a:e.a+i*(t.a-e.a)}}function We(e,t,i){if(e){let s=ms(e);s[t]=Math.max(0,Math.min(s[t]+s[t]*i,t===0?360:1)),s=fs(s),e.r=s[0],e.g=s[1],e.b=s[2]}}function pa(e,t){return e&&Object.assign(t||{},e)}function Hs(e){var t={r:0,g:0,b:0,a:255};return Array.isArray(e)?e.length>=3&&(t={r:e[0],g:e[1],b:e[2],a:255},e.length>3&&(t.a=Ft(e[3]))):(t=pa(e,{r:0,g:0,b:0,a:1}),t.a=Ft(t.a)),t}function Kr(e){return e.charAt(0)==="r"?Yr(e):Fr(e)}class Be{constructor(t){if(t instanceof Be)return t;const i=typeof t;let s;i==="object"?s=Hs(t):i==="string"&&(s=Lr(t)||Wr(t)||Kr(t)),this._rgb=s,this._valid=!!s}get valid(){return this._valid}get rgb(){var t=pa(this._rgb);return t&&(t.a=Ct(t.a)),t}set rgb(t){this._rgb=Hs(t)}rgbString(){return this._valid?Xr(this._rgb):void 0}hexString(){return this._valid?Ir(this._rgb):void 0}hslString(){return this._valid?Hr(this._rgb):void 0}mix(t,i){if(t){const s=this.rgb,n=t.rgb;let a;const r=i===a?.5:i,o=2*r-1,l=s.a-n.a,d=((o*l===-1?o:(o+l)/(1+o*l))+1)/2;a=1-d,s.r=255&d*s.r+a*n.r+.5,s.g=255&d*s.g+a*n.g+.5,s.b=255&d*s.b+a*n.b+.5,s.a=r*s.a+(1-r)*n.a,this.rgb=s}return this}interpolate(t,i){return t&&(this._rgb=Qr(this._rgb,t._rgb,i)),this}clone(){return new Be(this.rgb)}alpha(t){return this._rgb.a=Ft(t),this}clearer(t){const i=this._rgb;return i.a*=1-t,this}greyscale(){const t=this._rgb,i=Fe(t.r*.3+t.g*.59+t.b*.11);return t.r=t.g=t.b=i,this}opaquer(t){const i=this._rgb;return i.a*=1+t,this}negate(){const t=this._rgb;return t.r=255-t.r,t.g=255-t.g,t.b=255-t.b,this}lighten(t){return We(this._rgb,2,t),this}darken(t){return We(this._rgb,2,-t),this}saturate(t){return We(this._rgb,1,t),this}desaturate(t){return We(this._rgb,1,-t),this}rotate(t){return Nr(this._rgb,t),this}}/*!
 * Chart.js v4.5.1
 * https://www.chartjs.org
 * (c) 2025 Chart.js Contributors
 * Released under the MIT License
 */function Tt(){}const Jr=(()=>{let e=0;return()=>e++})();function F(e){return e==null}function J(e){if(Array.isArray&&Array.isArray(e))return!0;const t=Object.prototype.toString.call(e);return t.slice(0,7)==="[object"&&t.slice(-6)==="Array]"}function H(e){return e!==null&&Object.prototype.toString.call(e)==="[object Object]"}function tt(e){return(typeof e=="number"||e instanceof Number)&&isFinite(+e)}function bt(e,t){return tt(e)?e:t}function D(e,t){return typeof e>"u"?t:e}const Gr=(e,t)=>typeof e=="string"&&e.endsWith("%")?parseFloat(e)/100:+e/t,fa=(e,t)=>typeof e=="string"&&e.endsWith("%")?parseFloat(e)/100*t:+e;function Q(e,t,i){if(e&&typeof e.call=="function")return e.apply(i,t)}function X(e,t,i,s){let n,a,r;if(J(e))for(a=e.length,n=0;n<a;n++)t.call(i,e[n],n);else if(H(e))for(r=Object.keys(e),a=r.length,n=0;n<a;n++)t.call(i,e[r[n]],r[n])}function hi(e,t){let i,s,n,a;if(!e||!t||e.length!==t.length)return!1;for(i=0,s=e.length;i<s;++i)if(n=e[i],a=t[i],n.datasetIndex!==a.datasetIndex||n.index!==a.index)return!1;return!0}function gi(e){if(J(e))return e.map(gi);if(H(e)){const t=Object.create(null),i=Object.keys(e),s=i.length;let n=0;for(;n<s;++n)t[i[n]]=gi(e[i[n]]);return t}return e}function ba(e){return["__proto__","prototype","constructor"].indexOf(e)===-1}function Zr(e,t,i,s){if(!ba(e))return;const n=t[e],a=i[e];H(n)&&H(a)?Ie(n,a,s):t[e]=gi(a)}function Ie(e,t,i){const s=J(t)?t:[t],n=s.length;if(!H(e))return e;i=i||{};const a=i.merger||Zr;let r;for(let o=0;o<n;++o){if(r=s[o],!H(r))continue;const l=Object.keys(r);for(let d=0,c=l.length;d<c;++d)a(l[d],e,r,i)}return e}function Ee(e,t){return Ie(e,t,{merger:to})}function to(e,t,i){if(!ba(e))return;const s=t[e],n=i[e];H(s)&&H(n)?Ee(s,n):Object.prototype.hasOwnProperty.call(t,e)||(t[e]=gi(n))}const Vs={"":e=>e,x:e=>e.x,y:e=>e.y};function eo(e){const t=e.split("."),i=[];let s="";for(const n of t)s+=n,s.endsWith("\\")?s=s.slice(0,-1)+".":(i.push(s),s="");return i}function io(e){const t=eo(e);return i=>{for(const s of t){if(s==="")break;i=i&&i[s]}return i}}function Nt(e,t){return(Vs[t]||(Vs[t]=io(t)))(e)}function bs(e){return e.charAt(0).toUpperCase()+e.slice(1)}const je=e=>typeof e<"u",Ht=e=>typeof e=="function",Ws=(e,t)=>{if(e.size!==t.size)return!1;for(const i of e)if(!t.has(i))return!1;return!0};function so(e){return e.type==="mouseup"||e.type==="click"||e.type==="contextmenu"}const W=Math.PI,K=2*W,no=K+W,mi=Number.POSITIVE_INFINITY,ao=W/180,it=W/2,Yt=W/4,Us=W*2/3,Dt=Math.log10,St=Math.sign;function Me(e,t,i){return Math.abs(e-t)<i}function Ys(e){const t=Math.round(e);e=Me(e,t,e/1e3)?t:e;const i=Math.pow(10,Math.floor(Dt(e))),s=e/i;return(s<=1?1:s<=2?2:s<=5?5:10)*i}function ro(e){const t=[],i=Math.sqrt(e);let s;for(s=1;s<i;s++)e%s===0&&(t.push(s),t.push(e/s));return i===(i|0)&&t.push(i),t.sort((n,a)=>n-a).pop(),t}function oo(e){return typeof e=="symbol"||typeof e=="object"&&e!==null&&!(Symbol.toPrimitive in e||"toString"in e||"valueOf"in e)}function me(e){return!oo(e)&&!isNaN(parseFloat(e))&&isFinite(e)}function lo(e,t){const i=Math.round(e);return i-t<=e&&i+t>=e}function ya(e,t,i){let s,n,a;for(s=0,n=e.length;s<n;s++)a=e[s][i],isNaN(a)||(t.min=Math.min(t.min,a),t.max=Math.max(t.max,a))}function xt(e){return e*(W/180)}function ys(e){return e*(180/W)}function Xs(e){if(!tt(e))return;let t=1,i=0;for(;Math.round(e*t)/t!==e;)t*=10,i++;return i}function va(e,t){const i=t.x-e.x,s=t.y-e.y,n=Math.sqrt(i*i+s*s);let a=Math.atan2(s,i);return a<-.5*W&&(a+=K),{angle:a,distance:n}}function Ji(e,t){return Math.sqrt(Math.pow(t.x-e.x,2)+Math.pow(t.y-e.y,2))}function co(e,t){return(e-t+no)%K-W}function lt(e){return(e%K+K)%K}function Pe(e,t,i,s){const n=lt(e),a=lt(t),r=lt(i),o=lt(a-n),l=lt(r-n),d=lt(n-a),c=lt(n-r);return n===a||n===r||s&&a===r||o>l&&d<c}function at(e,t,i){return Math.max(t,Math.min(i,e))}function uo(e){return at(e,-32768,32767)}function At(e,t,i,s=1e-6){return e>=Math.min(t,i)-s&&e<=Math.max(t,i)+s}function vs(e,t,i){i=i||(r=>e[r]<t);let s=e.length-1,n=0,a;for(;s-n>1;)a=n+s>>1,i(a)?n=a:s=a;return{lo:n,hi:s}}const Lt=(e,t,i,s)=>vs(e,i,s?n=>{const a=e[n][t];return a<i||a===i&&e[n+1][t]===i}:n=>e[n][t]<i),ho=(e,t,i)=>vs(e,i,s=>e[s][t]>=i);function go(e,t,i){let s=0,n=e.length;for(;s<n&&e[s]<t;)s++;for(;n>s&&e[n-1]>i;)n--;return s>0||n<e.length?e.slice(s,n):e}const xa=["push","pop","shift","splice","unshift"];function mo(e,t){if(e._chartjs){e._chartjs.listeners.push(t);return}Object.defineProperty(e,"_chartjs",{configurable:!0,enumerable:!1,value:{listeners:[t]}}),xa.forEach(i=>{const s="_onData"+bs(i),n=e[i];Object.defineProperty(e,i,{configurable:!0,enumerable:!1,value(...a){const r=n.apply(this,a);return e._chartjs.listeners.forEach(o=>{typeof o[s]=="function"&&o[s](...a)}),r}})})}function Qs(e,t){const i=e._chartjs;if(!i)return;const s=i.listeners,n=s.indexOf(t);n!==-1&&s.splice(n,1),!(s.length>0)&&(xa.forEach(a=>{delete e[a]}),delete e._chartjs)}function wa(e){const t=new Set(e);return t.size===e.length?e:Array.from(t)}const za=function(){return typeof window>"u"?function(e){return e()}:window.requestAnimationFrame}();function ka(e,t){let i=[],s=!1;return function(...n){i=n,s||(s=!0,za.call(window,()=>{s=!1,e.apply(t,i)}))}}function po(e,t){let i;return function(...s){return t?(clearTimeout(i),i=setTimeout(e,t,s)):e.apply(this,s),t}}const xs=e=>e==="start"?"left":e==="end"?"right":"center",ot=(e,t,i)=>e==="start"?t:e==="end"?i:(t+i)/2,fo=(e,t,i,s)=>e===(s?"left":"right")?i:e==="center"?(t+i)/2:t;function $a(e,t,i){const s=t.length;let n=0,a=s;if(e._sorted){const{iScale:r,vScale:o,_parsed:l}=e,d=e.dataset&&e.dataset.options?e.dataset.options.spanGaps:null,c=r.axis,{min:u,max:h,minDefined:m,maxDefined:p}=r.getUserBounds();if(m){if(n=Math.min(Lt(l,c,u).lo,i?s:Lt(t,c,r.getPixelForValue(u)).lo),d){const g=l.slice(0,n+1).reverse().findIndex(f=>!F(f[o.axis]));n-=Math.max(0,g)}n=at(n,0,s-1)}if(p){let g=Math.max(Lt(l,r.axis,h,!0).hi+1,i?0:Lt(t,c,r.getPixelForValue(h),!0).hi+1);if(d){const f=l.slice(g-1).findIndex(y=>!F(y[o.axis]));g+=Math.max(0,f)}a=at(g,n,s)-n}else a=s-n}return{start:n,count:a}}function _a(e){const{xScale:t,yScale:i,_scaleRanges:s}=e,n={xmin:t.min,xmax:t.max,ymin:i.min,ymax:i.max};if(!s)return e._scaleRanges=n,!0;const a=s.xmin!==t.min||s.xmax!==t.max||s.ymin!==i.min||s.ymax!==i.max;return Object.assign(s,n),a}const Ue=e=>e===0||e===1,Ks=(e,t,i)=>-(Math.pow(2,10*(e-=1))*Math.sin((e-t)*K/i)),Js=(e,t,i)=>Math.pow(2,-10*e)*Math.sin((e-t)*K/i)+1,Ce={linear:e=>e,easeInQuad:e=>e*e,easeOutQuad:e=>-e*(e-2),easeInOutQuad:e=>(e/=.5)<1?.5*e*e:-.5*(--e*(e-2)-1),easeInCubic:e=>e*e*e,easeOutCubic:e=>(e-=1)*e*e+1,easeInOutCubic:e=>(e/=.5)<1?.5*e*e*e:.5*((e-=2)*e*e+2),easeInQuart:e=>e*e*e*e,easeOutQuart:e=>-((e-=1)*e*e*e-1),easeInOutQuart:e=>(e/=.5)<1?.5*e*e*e*e:-.5*((e-=2)*e*e*e-2),easeInQuint:e=>e*e*e*e*e,easeOutQuint:e=>(e-=1)*e*e*e*e+1,easeInOutQuint:e=>(e/=.5)<1?.5*e*e*e*e*e:.5*((e-=2)*e*e*e*e+2),easeInSine:e=>-Math.cos(e*it)+1,easeOutSine:e=>Math.sin(e*it),easeInOutSine:e=>-.5*(Math.cos(W*e)-1),easeInExpo:e=>e===0?0:Math.pow(2,10*(e-1)),easeOutExpo:e=>e===1?1:-Math.pow(2,-10*e)+1,easeInOutExpo:e=>Ue(e)?e:e<.5?.5*Math.pow(2,10*(e*2-1)):.5*(-Math.pow(2,-10*(e*2-1))+2),easeInCirc:e=>e>=1?e:-(Math.sqrt(1-e*e)-1),easeOutCirc:e=>Math.sqrt(1-(e-=1)*e),easeInOutCirc:e=>(e/=.5)<1?-.5*(Math.sqrt(1-e*e)-1):.5*(Math.sqrt(1-(e-=2)*e)+1),easeInElastic:e=>Ue(e)?e:Ks(e,.075,.3),easeOutElastic:e=>Ue(e)?e:Js(e,.075,.3),easeInOutElastic(e){return Ue(e)?e:e<.5?.5*Ks(e*2,.1125,.45):.5+.5*Js(e*2-1,.1125,.45)},easeInBack(e){return e*e*((1.70158+1)*e-1.70158)},easeOutBack(e){return(e-=1)*e*((1.70158+1)*e+1.70158)+1},easeInOutBack(e){let t=1.70158;return(e/=.5)<1?.5*(e*e*(((t*=1.525)+1)*e-t)):.5*((e-=2)*e*(((t*=1.525)+1)*e+t)+2)},easeInBounce:e=>1-Ce.easeOutBounce(1-e),easeOutBounce(e){return e<1/2.75?7.5625*e*e:e<2/2.75?7.5625*(e-=1.5/2.75)*e+.75:e<2.5/2.75?7.5625*(e-=2.25/2.75)*e+.9375:7.5625*(e-=2.625/2.75)*e+.984375},easeInOutBounce:e=>e<.5?Ce.easeInBounce(e*2)*.5:Ce.easeOutBounce(e*2-1)*.5+.5};function ws(e){if(e&&typeof e=="object"){const t=e.toString();return t==="[object CanvasPattern]"||t==="[object CanvasGradient]"}return!1}function Gs(e){return ws(e)?e:new Be(e)}function Pi(e){return ws(e)?e:new Be(e).saturate(.5).darken(.1).hexString()}const bo=["x","y","borderWidth","radius","tension"],yo=["color","borderColor","backgroundColor"];function vo(e){e.set("animation",{delay:void 0,duration:1e3,easing:"easeOutQuart",fn:void 0,from:void 0,loop:void 0,to:void 0,type:void 0}),e.describe("animation",{_fallback:!1,_indexable:!1,_scriptable:t=>t!=="onProgress"&&t!=="onComplete"&&t!=="fn"}),e.set("animations",{colors:{type:"color",properties:yo},numbers:{type:"number",properties:bo}}),e.describe("animations",{_fallback:"animation"}),e.set("transitions",{active:{animation:{duration:400}},resize:{animation:{duration:0}},show:{animations:{colors:{from:"transparent"},visible:{type:"boolean",duration:0}}},hide:{animations:{colors:{to:"transparent"},visible:{type:"boolean",easing:"linear",fn:t=>t|0}}}})}function xo(e){e.set("layout",{autoPadding:!0,padding:{top:0,right:0,bottom:0,left:0}})}const Zs=new Map;function wo(e,t){t=t||{};const i=e+JSON.stringify(t);let s=Zs.get(i);return s||(s=new Intl.NumberFormat(e,t),Zs.set(i,s)),s}function Ne(e,t,i){return wo(t,i).format(e)}const Sa={values(e){return J(e)?e:""+e},numeric(e,t,i){if(e===0)return"0";const s=this.chart.options.locale;let n,a=e;if(i.length>1){const d=Math.max(Math.abs(i[0].value),Math.abs(i[i.length-1].value));(d<1e-4||d>1e15)&&(n="scientific"),a=zo(e,i)}const r=Dt(Math.abs(a)),o=isNaN(r)?1:Math.max(Math.min(-1*Math.floor(r),20),0),l={notation:n,minimumFractionDigits:o,maximumFractionDigits:o};return Object.assign(l,this.options.ticks.format),Ne(e,s,l)},logarithmic(e,t,i){if(e===0)return"0";const s=i[t].significand||e/Math.pow(10,Math.floor(Dt(e)));return[1,2,3,5,10,15].includes(s)||t>.8*i.length?Sa.numeric.call(this,e,t,i):""}};function zo(e,t){let i=t.length>3?t[2].value-t[1].value:t[1].value-t[0].value;return Math.abs(i)>=1&&e!==Math.floor(e)&&(i=e-Math.floor(e)),i}var zi={formatters:Sa};function ko(e){e.set("scale",{display:!0,offset:!1,reverse:!1,beginAtZero:!1,bounds:"ticks",clip:!0,grace:0,grid:{display:!0,lineWidth:1,drawOnChartArea:!0,drawTicks:!0,tickLength:8,tickWidth:(t,i)=>i.lineWidth,tickColor:(t,i)=>i.color,offset:!1},border:{display:!0,dash:[],dashOffset:0,width:1},title:{display:!1,text:"",padding:{top:4,bottom:4}},ticks:{minRotation:0,maxRotation:50,mirror:!1,textStrokeWidth:0,textStrokeColor:"",padding:3,display:!0,autoSkip:!0,autoSkipPadding:3,labelOffset:0,callback:zi.formatters.values,minor:{},major:{},align:"center",crossAlign:"near",showLabelBackdrop:!1,backdropColor:"rgba(255, 255, 255, 0.75)",backdropPadding:2}}),e.route("scale.ticks","color","","color"),e.route("scale.grid","color","","borderColor"),e.route("scale.border","color","","borderColor"),e.route("scale.title","color","","color"),e.describe("scale",{_fallback:!1,_scriptable:t=>!t.startsWith("before")&&!t.startsWith("after")&&t!=="callback"&&t!=="parser",_indexable:t=>t!=="borderDash"&&t!=="tickBorderDash"&&t!=="dash"}),e.describe("scales",{_fallback:"scale"}),e.describe("scale.ticks",{_scriptable:t=>t!=="backdropPadding"&&t!=="callback",_indexable:t=>t!=="backdropPadding"})}const ae=Object.create(null),Gi=Object.create(null);function Ae(e,t){if(!t)return e;const i=t.split(".");for(let s=0,n=i.length;s<n;++s){const a=i[s];e=e[a]||(e[a]=Object.create(null))}return e}function Di(e,t,i){return typeof t=="string"?Ie(Ae(e,t),i):Ie(Ae(e,""),t)}class $o{constructor(t,i){this.animation=void 0,this.backgroundColor="rgba(0,0,0,0.1)",this.borderColor="rgba(0,0,0,0.1)",this.color="#666",this.datasets={},this.devicePixelRatio=s=>s.chart.platform.getDevicePixelRatio(),this.elements={},this.events=["mousemove","mouseout","click","touchstart","touchmove"],this.font={family:"'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",size:12,style:"normal",lineHeight:1.2,weight:null},this.hover={},this.hoverBackgroundColor=(s,n)=>Pi(n.backgroundColor),this.hoverBorderColor=(s,n)=>Pi(n.borderColor),this.hoverColor=(s,n)=>Pi(n.color),this.indexAxis="x",this.interaction={mode:"nearest",intersect:!0,includeInvisible:!1},this.maintainAspectRatio=!0,this.onHover=null,this.onClick=null,this.parsing=!0,this.plugins={},this.responsive=!0,this.scale=void 0,this.scales={},this.showLine=!0,this.drawActiveElementsOnTop=!0,this.describe(t),this.apply(i)}set(t,i){return Di(this,t,i)}get(t){return Ae(this,t)}describe(t,i){return Di(Gi,t,i)}override(t,i){return Di(ae,t,i)}route(t,i,s,n){const a=Ae(this,t),r=Ae(this,s),o="_"+i;Object.defineProperties(a,{[o]:{value:a[i],writable:!0},[i]:{enumerable:!0,get(){const l=this[o],d=r[n];return H(l)?Object.assign({},d,l):D(l,d)},set(l){this[o]=l}}})}apply(t){t.forEach(i=>i(this))}}var G=new $o({_scriptable:e=>!e.startsWith("on"),_indexable:e=>e!=="events",hover:{_fallback:"interaction"},interaction:{_scriptable:!1,_indexable:!1}},[vo,xo,ko]);function _o(e){return!e||F(e.size)||F(e.family)?null:(e.style?e.style+" ":"")+(e.weight?e.weight+" ":"")+e.size+"px "+e.family}function pi(e,t,i,s,n){let a=t[n];return a||(a=t[n]=e.measureText(n).width,i.push(n)),a>s&&(s=a),s}function So(e,t,i,s){s=s||{};let n=s.data=s.data||{},a=s.garbageCollect=s.garbageCollect||[];s.font!==t&&(n=s.data={},a=s.garbageCollect=[],s.font=t),e.save(),e.font=t;let r=0;const o=i.length;let l,d,c,u,h;for(l=0;l<o;l++)if(u=i[l],u!=null&&!J(u))r=pi(e,n,a,r,u);else if(J(u))for(d=0,c=u.length;d<c;d++)h=u[d],h!=null&&!J(h)&&(r=pi(e,n,a,r,h));e.restore();const m=a.length/2;if(m>i.length){for(l=0;l<m;l++)delete n[a[l]];a.splice(0,m)}return r}function Xt(e,t,i){const s=e.currentDevicePixelRatio,n=i!==0?Math.max(i/2,.5):0;return Math.round((t-n)*s)/s+n}function tn(e,t){!t&&!e||(t=t||e.getContext("2d"),t.save(),t.resetTransform(),t.clearRect(0,0,e.width,e.height),t.restore())}function Zi(e,t,i,s){Ta(e,t,i,s,null)}function Ta(e,t,i,s,n){let a,r,o,l,d,c,u,h;const m=t.pointStyle,p=t.rotation,g=t.radius;let f=(p||0)*ao;if(m&&typeof m=="object"&&(a=m.toString(),a==="[object HTMLImageElement]"||a==="[object HTMLCanvasElement]")){e.save(),e.translate(i,s),e.rotate(f),e.drawImage(m,-m.width/2,-m.height/2,m.width,m.height),e.restore();return}if(!(isNaN(g)||g<=0)){switch(e.beginPath(),m){default:n?e.ellipse(i,s,n/2,g,0,0,K):e.arc(i,s,g,0,K),e.closePath();break;case"triangle":c=n?n/2:g,e.moveTo(i+Math.sin(f)*c,s-Math.cos(f)*g),f+=Us,e.lineTo(i+Math.sin(f)*c,s-Math.cos(f)*g),f+=Us,e.lineTo(i+Math.sin(f)*c,s-Math.cos(f)*g),e.closePath();break;case"rectRounded":d=g*.516,l=g-d,r=Math.cos(f+Yt)*l,u=Math.cos(f+Yt)*(n?n/2-d:l),o=Math.sin(f+Yt)*l,h=Math.sin(f+Yt)*(n?n/2-d:l),e.arc(i-u,s-o,d,f-W,f-it),e.arc(i+h,s-r,d,f-it,f),e.arc(i+u,s+o,d,f,f+it),e.arc(i-h,s+r,d,f+it,f+W),e.closePath();break;case"rect":if(!p){l=Math.SQRT1_2*g,c=n?n/2:l,e.rect(i-c,s-l,2*c,2*l);break}f+=Yt;case"rectRot":u=Math.cos(f)*(n?n/2:g),r=Math.cos(f)*g,o=Math.sin(f)*g,h=Math.sin(f)*(n?n/2:g),e.moveTo(i-u,s-o),e.lineTo(i+h,s-r),e.lineTo(i+u,s+o),e.lineTo(i-h,s+r),e.closePath();break;case"crossRot":f+=Yt;case"cross":u=Math.cos(f)*(n?n/2:g),r=Math.cos(f)*g,o=Math.sin(f)*g,h=Math.sin(f)*(n?n/2:g),e.moveTo(i-u,s-o),e.lineTo(i+u,s+o),e.moveTo(i+h,s-r),e.lineTo(i-h,s+r);break;case"star":u=Math.cos(f)*(n?n/2:g),r=Math.cos(f)*g,o=Math.sin(f)*g,h=Math.sin(f)*(n?n/2:g),e.moveTo(i-u,s-o),e.lineTo(i+u,s+o),e.moveTo(i+h,s-r),e.lineTo(i-h,s+r),f+=Yt,u=Math.cos(f)*(n?n/2:g),r=Math.cos(f)*g,o=Math.sin(f)*g,h=Math.sin(f)*(n?n/2:g),e.moveTo(i-u,s-o),e.lineTo(i+u,s+o),e.moveTo(i+h,s-r),e.lineTo(i-h,s+r);break;case"line":r=n?n/2:Math.cos(f)*g,o=Math.sin(f)*g,e.moveTo(i-r,s-o),e.lineTo(i+r,s+o);break;case"dash":e.moveTo(i,s),e.lineTo(i+Math.cos(f)*(n?n/2:g),s+Math.sin(f)*g);break;case!1:e.closePath();break}e.fill(),t.borderWidth>0&&e.stroke()}}function Bt(e,t,i){return i=i||.5,!t||e&&e.x>t.left-i&&e.x<t.right+i&&e.y>t.top-i&&e.y<t.bottom+i}function ki(e,t){e.save(),e.beginPath(),e.rect(t.left,t.top,t.right-t.left,t.bottom-t.top),e.clip()}function $i(e){e.restore()}function To(e,t,i,s,n){if(!t)return e.lineTo(i.x,i.y);if(n==="middle"){const a=(t.x+i.x)/2;e.lineTo(a,t.y),e.lineTo(a,i.y)}else n==="after"!=!!s?e.lineTo(t.x,i.y):e.lineTo(i.x,t.y);e.lineTo(i.x,i.y)}function Eo(e,t,i,s){if(!t)return e.lineTo(i.x,i.y);e.bezierCurveTo(s?t.cp1x:t.cp2x,s?t.cp1y:t.cp2y,s?i.cp2x:i.cp1x,s?i.cp2y:i.cp1y,i.x,i.y)}function Mo(e,t){t.translation&&e.translate(t.translation[0],t.translation[1]),F(t.rotation)||e.rotate(t.rotation),t.color&&(e.fillStyle=t.color),t.textAlign&&(e.textAlign=t.textAlign),t.textBaseline&&(e.textBaseline=t.textBaseline)}function Co(e,t,i,s,n){if(n.strikethrough||n.underline){const a=e.measureText(s),r=t-a.actualBoundingBoxLeft,o=t+a.actualBoundingBoxRight,l=i-a.actualBoundingBoxAscent,d=i+a.actualBoundingBoxDescent,c=n.strikethrough?(l+d)/2:d;e.strokeStyle=e.fillStyle,e.beginPath(),e.lineWidth=n.decorationWidth||2,e.moveTo(r,c),e.lineTo(o,c),e.stroke()}}function Ao(e,t){const i=e.fillStyle;e.fillStyle=t.color,e.fillRect(t.left,t.top,t.width,t.height),e.fillStyle=i}function re(e,t,i,s,n,a={}){const r=J(t)?t:[t],o=a.strokeWidth>0&&a.strokeColor!=="";let l,d;for(e.save(),e.font=n.string,Mo(e,a),l=0;l<r.length;++l)d=r[l],a.backdrop&&Ao(e,a.backdrop),o&&(a.strokeColor&&(e.strokeStyle=a.strokeColor),F(a.strokeWidth)||(e.lineWidth=a.strokeWidth),e.strokeText(d,i,s,a.maxWidth)),e.fillText(d,i,s,a.maxWidth),Co(e,i,s,d,a),s+=Number(n.lineHeight);e.restore()}function De(e,t){const{x:i,y:s,w:n,h:a,radius:r}=t;e.arc(i+r.topLeft,s+r.topLeft,r.topLeft,1.5*W,W,!0),e.lineTo(i,s+a-r.bottomLeft),e.arc(i+r.bottomLeft,s+a-r.bottomLeft,r.bottomLeft,W,it,!0),e.lineTo(i+n-r.bottomRight,s+a),e.arc(i+n-r.bottomRight,s+a-r.bottomRight,r.bottomRight,it,0,!0),e.lineTo(i+n,s+r.topRight),e.arc(i+n-r.topRight,s+r.topRight,r.topRight,0,-it,!0),e.lineTo(i+r.topLeft,s)}const Lo=/^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/,Bo=/^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/;function Io(e,t){const i=(""+e).match(Lo);if(!i||i[1]==="normal")return t*1.2;switch(e=+i[2],i[3]){case"px":return e;case"%":e/=100;break}return t*e}const jo=e=>+e||0;function zs(e,t){const i={},s=H(t),n=s?Object.keys(t):t,a=H(e)?s?r=>D(e[r],e[t[r]]):r=>e[r]:()=>e;for(const r of n)i[r]=jo(a(r));return i}function Ea(e){return zs(e,{top:"y",right:"x",bottom:"y",left:"x"})}function ie(e){return zs(e,["topLeft","topRight","bottomLeft","bottomRight"])}function ct(e){const t=Ea(e);return t.width=t.left+t.right,t.height=t.top+t.bottom,t}function nt(e,t){e=e||{},t=t||G.font;let i=D(e.size,t.size);typeof i=="string"&&(i=parseInt(i,10));let s=D(e.style,t.style);s&&!(""+s).match(Bo)&&(console.warn('Invalid font style specified: "'+s+'"'),s=void 0);const n={family:D(e.family,t.family),lineHeight:Io(D(e.lineHeight,t.lineHeight),i),size:i,style:s,weight:D(e.weight,t.weight),string:""};return n.string=_o(n),n}function ke(e,t,i,s){let n,a,r;for(n=0,a=e.length;n<a;++n)if(r=e[n],r!==void 0&&r!==void 0)return r}function Po(e,t,i){const{min:s,max:n}=e,a=fa(t,(n-s)/2),r=(o,l)=>i&&o===0?0:o+l;return{min:r(s,-Math.abs(a)),max:r(n,a)}}function Wt(e,t){return Object.assign(Object.create(e),t)}function ks(e,t=[""],i,s,n=()=>e[0]){const a=i||e;typeof s>"u"&&(s=La("_fallback",e));const r={[Symbol.toStringTag]:"Object",_cacheable:!0,_scopes:e,_rootScopes:a,_fallback:s,_getTarget:n,override:o=>ks([o,...e],t,a,s)};return new Proxy(r,{deleteProperty(o,l){return delete o[l],delete o._keys,delete e[0][l],!0},get(o,l){return Ca(o,l,()=>Vo(l,t,e,o))},getOwnPropertyDescriptor(o,l){return Reflect.getOwnPropertyDescriptor(o._scopes[0],l)},getPrototypeOf(){return Reflect.getPrototypeOf(e[0])},has(o,l){return sn(o).includes(l)},ownKeys(o){return sn(o)},set(o,l,d){const c=o._storage||(o._storage=n());return o[l]=c[l]=d,delete o._keys,!0}})}function pe(e,t,i,s){const n={_cacheable:!1,_proxy:e,_context:t,_subProxy:i,_stack:new Set,_descriptors:Ma(e,s),setContext:a=>pe(e,a,i,s),override:a=>pe(e.override(a),t,i,s)};return new Proxy(n,{deleteProperty(a,r){return delete a[r],delete e[r],!0},get(a,r,o){return Ca(a,r,()=>Oo(a,r,o))},getOwnPropertyDescriptor(a,r){return a._descriptors.allKeys?Reflect.has(e,r)?{enumerable:!0,configurable:!0}:void 0:Reflect.getOwnPropertyDescriptor(e,r)},getPrototypeOf(){return Reflect.getPrototypeOf(e)},has(a,r){return Reflect.has(e,r)},ownKeys(){return Reflect.ownKeys(e)},set(a,r,o){return e[r]=o,delete a[r],!0}})}function Ma(e,t={scriptable:!0,indexable:!0}){const{_scriptable:i=t.scriptable,_indexable:s=t.indexable,_allKeys:n=t.allKeys}=e;return{allKeys:n,scriptable:i,indexable:s,isScriptable:Ht(i)?i:()=>i,isIndexable:Ht(s)?s:()=>s}}const Do=(e,t)=>e?e+bs(t):t,$s=(e,t)=>H(t)&&e!=="adapters"&&(Object.getPrototypeOf(t)===null||t.constructor===Object);function Ca(e,t,i){if(Object.prototype.hasOwnProperty.call(e,t)||t==="constructor")return e[t];const s=i();return e[t]=s,s}function Oo(e,t,i){const{_proxy:s,_context:n,_subProxy:a,_descriptors:r}=e;let o=s[t];return Ht(o)&&r.isScriptable(t)&&(o=qo(t,o,e,i)),J(o)&&o.length&&(o=Ro(t,o,e,r.isIndexable)),$s(t,o)&&(o=pe(o,n,a&&a[t],r)),o}function qo(e,t,i,s){const{_proxy:n,_context:a,_subProxy:r,_stack:o}=i;if(o.has(e))throw new Error("Recursion detected: "+Array.from(o).join("->")+"->"+e);o.add(e);let l=t(a,r||s);return o.delete(e),$s(e,l)&&(l=_s(n._scopes,n,e,l)),l}function Ro(e,t,i,s){const{_proxy:n,_context:a,_subProxy:r,_descriptors:o}=i;if(typeof a.index<"u"&&s(e))return t[a.index%t.length];if(H(t[0])){const l=t,d=n._scopes.filter(c=>c!==l);t=[];for(const c of l){const u=_s(d,n,e,c);t.push(pe(u,a,r&&r[e],o))}}return t}function Aa(e,t,i){return Ht(e)?e(t,i):e}const Fo=(e,t)=>e===!0?t:typeof e=="string"?Nt(t,e):void 0;function No(e,t,i,s,n){for(const a of t){const r=Fo(i,a);if(r){e.add(r);const o=Aa(r._fallback,i,n);if(typeof o<"u"&&o!==i&&o!==s)return o}else if(r===!1&&typeof s<"u"&&i!==s)return null}return!1}function _s(e,t,i,s){const n=t._rootScopes,a=Aa(t._fallback,i,s),r=[...e,...n],o=new Set;o.add(s);let l=en(o,r,i,a||i,s);return l===null||typeof a<"u"&&a!==i&&(l=en(o,r,a,l,s),l===null)?!1:ks(Array.from(o),[""],n,a,()=>Ho(t,i,s))}function en(e,t,i,s,n){for(;i;)i=No(e,t,i,s,n);return i}function Ho(e,t,i){const s=e._getTarget();t in s||(s[t]={});const n=s[t];return J(n)&&H(i)?i:n||{}}function Vo(e,t,i,s){let n;for(const a of t)if(n=La(Do(a,e),i),typeof n<"u")return $s(e,n)?_s(i,s,e,n):n}function La(e,t){for(const i of t){if(!i)continue;const s=i[e];if(typeof s<"u")return s}}function sn(e){let t=e._keys;return t||(t=e._keys=Wo(e._scopes)),t}function Wo(e){const t=new Set;for(const i of e)for(const s of Object.keys(i).filter(n=>!n.startsWith("_")))t.add(s);return Array.from(t)}function Ba(e,t,i,s){const{iScale:n}=e,{key:a="r"}=this._parsing,r=new Array(s);let o,l,d,c;for(o=0,l=s;o<l;++o)d=o+i,c=t[d],r[o]={r:n.parse(Nt(c,a),d)};return r}const Uo=Number.EPSILON||1e-14,fe=(e,t)=>t<e.length&&!e[t].skip&&e[t],Ia=e=>e==="x"?"y":"x";function Yo(e,t,i,s){const n=e.skip?t:e,a=t,r=i.skip?t:i,o=Ji(a,n),l=Ji(r,a);let d=o/(o+l),c=l/(o+l);d=isNaN(d)?0:d,c=isNaN(c)?0:c;const u=s*d,h=s*c;return{previous:{x:a.x-u*(r.x-n.x),y:a.y-u*(r.y-n.y)},next:{x:a.x+h*(r.x-n.x),y:a.y+h*(r.y-n.y)}}}function Xo(e,t,i){const s=e.length;let n,a,r,o,l,d=fe(e,0);for(let c=0;c<s-1;++c)if(l=d,d=fe(e,c+1),!(!l||!d)){if(Me(t[c],0,Uo)){i[c]=i[c+1]=0;continue}n=i[c]/t[c],a=i[c+1]/t[c],o=Math.pow(n,2)+Math.pow(a,2),!(o<=9)&&(r=3/Math.sqrt(o),i[c]=n*r*t[c],i[c+1]=a*r*t[c])}}function Qo(e,t,i="x"){const s=Ia(i),n=e.length;let a,r,o,l=fe(e,0);for(let d=0;d<n;++d){if(r=o,o=l,l=fe(e,d+1),!o)continue;const c=o[i],u=o[s];r&&(a=(c-r[i])/3,o[`cp1${i}`]=c-a,o[`cp1${s}`]=u-a*t[d]),l&&(a=(l[i]-c)/3,o[`cp2${i}`]=c+a,o[`cp2${s}`]=u+a*t[d])}}function Ko(e,t="x"){const i=Ia(t),s=e.length,n=Array(s).fill(0),a=Array(s);let r,o,l,d=fe(e,0);for(r=0;r<s;++r)if(o=l,l=d,d=fe(e,r+1),!!l){if(d){const c=d[t]-l[t];n[r]=c!==0?(d[i]-l[i])/c:0}a[r]=o?d?St(n[r-1])!==St(n[r])?0:(n[r-1]+n[r])/2:n[r-1]:n[r]}Xo(e,n,a),Qo(e,a,t)}function Ye(e,t,i){return Math.max(Math.min(e,i),t)}function Jo(e,t){let i,s,n,a,r,o=Bt(e[0],t);for(i=0,s=e.length;i<s;++i)r=a,a=o,o=i<s-1&&Bt(e[i+1],t),a&&(n=e[i],r&&(n.cp1x=Ye(n.cp1x,t.left,t.right),n.cp1y=Ye(n.cp1y,t.top,t.bottom)),o&&(n.cp2x=Ye(n.cp2x,t.left,t.right),n.cp2y=Ye(n.cp2y,t.top,t.bottom)))}function Go(e,t,i,s,n){let a,r,o,l;if(t.spanGaps&&(e=e.filter(d=>!d.skip)),t.cubicInterpolationMode==="monotone")Ko(e,n);else{let d=s?e[e.length-1]:e[0];for(a=0,r=e.length;a<r;++a)o=e[a],l=Yo(d,o,e[Math.min(a+1,r-(s?0:1))%r],t.tension),o.cp1x=l.previous.x,o.cp1y=l.previous.y,o.cp2x=l.next.x,o.cp2y=l.next.y,d=o}t.capBezierPoints&&Jo(e,i)}function Ss(){return typeof window<"u"&&typeof document<"u"}function Ts(e){let t=e.parentNode;return t&&t.toString()==="[object ShadowRoot]"&&(t=t.host),t}function fi(e,t,i){let s;return typeof e=="string"?(s=parseInt(e,10),e.indexOf("%")!==-1&&(s=s/100*t.parentNode[i])):s=e,s}const _i=e=>e.ownerDocument.defaultView.getComputedStyle(e,null);function Zo(e,t){return _i(e).getPropertyValue(t)}const tl=["top","right","bottom","left"];function se(e,t,i){const s={};i=i?"-"+i:"";for(let n=0;n<4;n++){const a=tl[n];s[a]=parseFloat(e[t+"-"+a+i])||0}return s.width=s.left+s.right,s.height=s.top+s.bottom,s}const el=(e,t,i)=>(e>0||t>0)&&(!i||!i.shadowRoot);function il(e,t){const i=e.touches,s=i&&i.length?i[0]:e,{offsetX:n,offsetY:a}=s;let r=!1,o,l;if(el(n,a,e.target))o=n,l=a;else{const d=t.getBoundingClientRect();o=s.clientX-d.left,l=s.clientY-d.top,r=!0}return{x:o,y:l,box:r}}function Jt(e,t){if("native"in e)return e;const{canvas:i,currentDevicePixelRatio:s}=t,n=_i(i),a=n.boxSizing==="border-box",r=se(n,"padding"),o=se(n,"border","width"),{x:l,y:d,box:c}=il(e,i),u=r.left+(c&&o.left),h=r.top+(c&&o.top);let{width:m,height:p}=t;return a&&(m-=r.width+o.width,p-=r.height+o.height),{x:Math.round((l-u)/m*i.width/s),y:Math.round((d-h)/p*i.height/s)}}function sl(e,t,i){let s,n;if(t===void 0||i===void 0){const a=e&&Ts(e);if(!a)t=e.clientWidth,i=e.clientHeight;else{const r=a.getBoundingClientRect(),o=_i(a),l=se(o,"border","width"),d=se(o,"padding");t=r.width-d.width-l.width,i=r.height-d.height-l.height,s=fi(o.maxWidth,a,"clientWidth"),n=fi(o.maxHeight,a,"clientHeight")}}return{width:t,height:i,maxWidth:s||mi,maxHeight:n||mi}}const Ot=e=>Math.round(e*10)/10;function nl(e,t,i,s){const n=_i(e),a=se(n,"margin"),r=fi(n.maxWidth,e,"clientWidth")||mi,o=fi(n.maxHeight,e,"clientHeight")||mi,l=sl(e,t,i);let{width:d,height:c}=l;if(n.boxSizing==="content-box"){const h=se(n,"border","width"),m=se(n,"padding");d-=m.width+h.width,c-=m.height+h.height}return d=Math.max(0,d-a.width),c=Math.max(0,s?d/s:c-a.height),d=Ot(Math.min(d,r,l.maxWidth)),c=Ot(Math.min(c,o,l.maxHeight)),d&&!c&&(c=Ot(d/2)),(t!==void 0||i!==void 0)&&s&&l.height&&c>l.height&&(c=l.height,d=Ot(Math.floor(c*s))),{width:d,height:c}}function nn(e,t,i){const s=t||1,n=Ot(e.height*s),a=Ot(e.width*s);e.height=Ot(e.height),e.width=Ot(e.width);const r=e.canvas;return r.style&&(i||!r.style.height&&!r.style.width)&&(r.style.height=`${e.height}px`,r.style.width=`${e.width}px`),e.currentDevicePixelRatio!==s||r.height!==n||r.width!==a?(e.currentDevicePixelRatio=s,r.height=n,r.width=a,e.ctx.setTransform(s,0,0,s,0,0),!0):!1}const al=function(){let e=!1;try{const t={get passive(){return e=!0,!1}};Ss()&&(window.addEventListener("test",null,t),window.removeEventListener("test",null,t))}catch{}return e}();function an(e,t){const i=Zo(e,t),s=i&&i.match(/^(\d+)(\.\d+)?px$/);return s?+s[1]:void 0}function Gt(e,t,i,s){return{x:e.x+i*(t.x-e.x),y:e.y+i*(t.y-e.y)}}function rl(e,t,i,s){return{x:e.x+i*(t.x-e.x),y:s==="middle"?i<.5?e.y:t.y:s==="after"?i<1?e.y:t.y:i>0?t.y:e.y}}function ol(e,t,i,s){const n={x:e.cp2x,y:e.cp2y},a={x:t.cp1x,y:t.cp1y},r=Gt(e,n,i),o=Gt(n,a,i),l=Gt(a,t,i),d=Gt(r,o,i),c=Gt(o,l,i);return Gt(d,c,i)}const ll=function(e,t){return{x(i){return e+e+t-i},setWidth(i){t=i},textAlign(i){return i==="center"?i:i==="right"?"left":"right"},xPlus(i,s){return i-s},leftForLtr(i,s){return i-s}}},dl=function(){return{x(e){return e},setWidth(e){},textAlign(e){return e},xPlus(e,t){return e+t},leftForLtr(e,t){return e}}};function he(e,t,i){return e?ll(t,i):dl()}function ja(e,t){let i,s;(t==="ltr"||t==="rtl")&&(i=e.canvas.style,s=[i.getPropertyValue("direction"),i.getPropertyPriority("direction")],i.setProperty("direction",t,"important"),e.prevTextDirection=s)}function Pa(e,t){t!==void 0&&(delete e.prevTextDirection,e.canvas.style.setProperty("direction",t[0],t[1]))}function Da(e){return e==="angle"?{between:Pe,compare:co,normalize:lt}:{between:At,compare:(t,i)=>t-i,normalize:t=>t}}function rn({start:e,end:t,count:i,loop:s,style:n}){return{start:e%i,end:t%i,loop:s&&(t-e+1)%i===0,style:n}}function cl(e,t,i){const{property:s,start:n,end:a}=i,{between:r,normalize:o}=Da(s),l=t.length;let{start:d,end:c,loop:u}=e,h,m;if(u){for(d+=l,c+=l,h=0,m=l;h<m&&r(o(t[d%l][s]),n,a);++h)d--,c--;d%=l,c%=l}return c<d&&(c+=l),{start:d,end:c,loop:u,style:e.style}}function Oa(e,t,i){if(!i)return[e];const{property:s,start:n,end:a}=i,r=t.length,{compare:o,between:l,normalize:d}=Da(s),{start:c,end:u,loop:h,style:m}=cl(e,t,i),p=[];let g=!1,f=null,y,b,x;const v=()=>l(n,x,y)&&o(n,x)!==0,w=()=>o(a,y)===0||l(a,x,y),z=()=>g||v(),E=()=>!g||w();for(let _=c,S=c;_<=u;++_)b=t[_%r],!b.skip&&(y=d(b[s]),y!==x&&(g=l(y,n,a),f===null&&z()&&(f=o(y,n)===0?_:S),f!==null&&E()&&(p.push(rn({start:f,end:_,loop:h,count:r,style:m})),f=null),S=_,x=y));return f!==null&&p.push(rn({start:f,end:u,loop:h,count:r,style:m})),p}function qa(e,t){const i=[],s=e.segments;for(let n=0;n<s.length;n++){const a=Oa(s[n],e.points,t);a.length&&i.push(...a)}return i}function ul(e,t,i,s){let n=0,a=t-1;if(i&&!s)for(;n<t&&!e[n].skip;)n++;for(;n<t&&e[n].skip;)n++;for(n%=t,i&&(a+=n);a>n&&e[a%t].skip;)a--;return a%=t,{start:n,end:a}}function hl(e,t,i,s){const n=e.length,a=[];let r=t,o=e[t],l;for(l=t+1;l<=i;++l){const d=e[l%n];d.skip||d.stop?o.skip||(s=!1,a.push({start:t%n,end:(l-1)%n,loop:s}),t=r=d.stop?l:null):(r=l,o.skip&&(t=l)),o=d}return r!==null&&a.push({start:t%n,end:r%n,loop:s}),a}function gl(e,t){const i=e.points,s=e.options.spanGaps,n=i.length;if(!n)return[];const a=!!e._loop,{start:r,end:o}=ul(i,n,a,s);if(s===!0)return on(e,[{start:r,end:o,loop:a}],i,t);const l=o<r?o+n:o,d=!!e._fullLoop&&r===0&&o===n-1;return on(e,hl(i,r,l,d),i,t)}function on(e,t,i,s){return!s||!s.setContext||!i?t:ml(e,t,i,s)}function ml(e,t,i,s){const n=e._chart.getContext(),a=ln(e.options),{_datasetIndex:r,options:{spanGaps:o}}=e,l=i.length,d=[];let c=a,u=t[0].start,h=u;function m(p,g,f,y){const b=o?-1:1;if(p!==g){for(p+=l;i[p%l].skip;)p-=b;for(;i[g%l].skip;)g+=b;p%l!==g%l&&(d.push({start:p%l,end:g%l,loop:f,style:y}),c=y,u=g%l)}}for(const p of t){u=o?u:p.start;let g=i[u%l],f;for(h=u+1;h<=p.end;h++){const y=i[h%l];f=ln(s.setContext(Wt(n,{type:"segment",p0:g,p1:y,p0DataIndex:(h-1)%l,p1DataIndex:h%l,datasetIndex:r}))),pl(f,c)&&m(u,h-1,p.loop,c),g=y,c=f}u<h-1&&m(u,h-1,p.loop,c)}return d}function ln(e){return{backgroundColor:e.backgroundColor,borderCapStyle:e.borderCapStyle,borderDash:e.borderDash,borderDashOffset:e.borderDashOffset,borderJoinStyle:e.borderJoinStyle,borderWidth:e.borderWidth,borderColor:e.borderColor}}function pl(e,t){if(!t)return!1;const i=[],s=function(n,a){return ws(a)?(i.includes(a)||i.push(a),i.indexOf(a)):a};return JSON.stringify(e,s)!==JSON.stringify(t,s)}function Xe(e,t,i){return e.options.clip?e[i]:t[i]}function fl(e,t){const{xScale:i,yScale:s}=e;return i&&s?{left:Xe(i,t,"left"),right:Xe(i,t,"right"),top:Xe(s,t,"top"),bottom:Xe(s,t,"bottom")}:t}function Ra(e,t){const i=t._clip;if(i.disabled)return!1;const s=fl(t,e.chartArea);return{left:i.left===!1?0:s.left-(i.left===!0?0:i.left),right:i.right===!1?e.width:s.right+(i.right===!0?0:i.right),top:i.top===!1?0:s.top-(i.top===!0?0:i.top),bottom:i.bottom===!1?e.height:s.bottom+(i.bottom===!0?0:i.bottom)}}/*!
 * Chart.js v4.5.1
 * https://www.chartjs.org
 * (c) 2025 Chart.js Contributors
 * Released under the MIT License
 */class bl{constructor(){this._request=null,this._charts=new Map,this._running=!1,this._lastDate=void 0}_notify(t,i,s,n){const a=i.listeners[n],r=i.duration;a.forEach(o=>o({chart:t,initial:i.initial,numSteps:r,currentStep:Math.min(s-i.start,r)}))}_refresh(){this._request||(this._running=!0,this._request=za.call(window,()=>{this._update(),this._request=null,this._running&&this._refresh()}))}_update(t=Date.now()){let i=0;this._charts.forEach((s,n)=>{if(!s.running||!s.items.length)return;const a=s.items;let r=a.length-1,o=!1,l;for(;r>=0;--r)l=a[r],l._active?(l._total>s.duration&&(s.duration=l._total),l.tick(t),o=!0):(a[r]=a[a.length-1],a.pop());o&&(n.draw(),this._notify(n,s,t,"progress")),a.length||(s.running=!1,this._notify(n,s,t,"complete"),s.initial=!1),i+=a.length}),this._lastDate=t,i===0&&(this._running=!1)}_getAnims(t){const i=this._charts;let s=i.get(t);return s||(s={running:!1,initial:!0,items:[],listeners:{complete:[],progress:[]}},i.set(t,s)),s}listen(t,i,s){this._getAnims(t).listeners[i].push(s)}add(t,i){!i||!i.length||this._getAnims(t).items.push(...i)}has(t){return this._getAnims(t).items.length>0}start(t){const i=this._charts.get(t);i&&(i.running=!0,i.start=Date.now(),i.duration=i.items.reduce((s,n)=>Math.max(s,n._duration),0),this._refresh())}running(t){if(!this._running)return!1;const i=this._charts.get(t);return!(!i||!i.running||!i.items.length)}stop(t){const i=this._charts.get(t);if(!i||!i.items.length)return;const s=i.items;let n=s.length-1;for(;n>=0;--n)s[n].cancel();i.items=[],this._notify(t,i,Date.now(),"complete")}remove(t){return this._charts.delete(t)}}var Et=new bl;const dn="transparent",yl={boolean(e,t,i){return i>.5?t:e},color(e,t,i){const s=Gs(e||dn),n=s.valid&&Gs(t||dn);return n&&n.valid?n.mix(s,i).hexString():t},number(e,t,i){return e+(t-e)*i}};class vl{constructor(t,i,s,n){const a=i[s];n=ke([t.to,n,a,t.from]);const r=ke([t.from,a,n]);this._active=!0,this._fn=t.fn||yl[t.type||typeof r],this._easing=Ce[t.easing]||Ce.linear,this._start=Math.floor(Date.now()+(t.delay||0)),this._duration=this._total=Math.floor(t.duration),this._loop=!!t.loop,this._target=i,this._prop=s,this._from=r,this._to=n,this._promises=void 0}active(){return this._active}update(t,i,s){if(this._active){this._notify(!1);const n=this._target[this._prop],a=s-this._start,r=this._duration-a;this._start=s,this._duration=Math.floor(Math.max(r,t.duration)),this._total+=a,this._loop=!!t.loop,this._to=ke([t.to,i,n,t.from]),this._from=ke([t.from,n,i])}}cancel(){this._active&&(this.tick(Date.now()),this._active=!1,this._notify(!1))}tick(t){const i=t-this._start,s=this._duration,n=this._prop,a=this._from,r=this._loop,o=this._to;let l;if(this._active=a!==o&&(r||i<s),!this._active){this._target[n]=o,this._notify(!0);return}if(i<0){this._target[n]=a;return}l=i/s%2,l=r&&l>1?2-l:l,l=this._easing(Math.min(1,Math.max(0,l))),this._target[n]=this._fn(a,o,l)}wait(){const t=this._promises||(this._promises=[]);return new Promise((i,s)=>{t.push({res:i,rej:s})})}_notify(t){const i=t?"res":"rej",s=this._promises||[];for(let n=0;n<s.length;n++)s[n][i]()}}class Fa{constructor(t,i){this._chart=t,this._properties=new Map,this.configure(i)}configure(t){if(!H(t))return;const i=Object.keys(G.animation),s=this._properties;Object.getOwnPropertyNames(t).forEach(n=>{const a=t[n];if(!H(a))return;const r={};for(const o of i)r[o]=a[o];(J(a.properties)&&a.properties||[n]).forEach(o=>{(o===n||!s.has(o))&&s.set(o,r)})})}_animateOptions(t,i){const s=i.options,n=wl(t,s);if(!n)return[];const a=this._createAnimations(n,s);return s.$shared&&xl(t.options.$animations,s).then(()=>{t.options=s},()=>{}),a}_createAnimations(t,i){const s=this._properties,n=[],a=t.$animations||(t.$animations={}),r=Object.keys(i),o=Date.now();let l;for(l=r.length-1;l>=0;--l){const d=r[l];if(d.charAt(0)==="$")continue;if(d==="options"){n.push(...this._animateOptions(t,i));continue}const c=i[d];let u=a[d];const h=s.get(d);if(u)if(h&&u.active()){u.update(h,c,o);continue}else u.cancel();if(!h||!h.duration){t[d]=c;continue}a[d]=u=new vl(h,t,d,c),n.push(u)}return n}update(t,i){if(this._properties.size===0){Object.assign(t,i);return}const s=this._createAnimations(t,i);if(s.length)return Et.add(this._chart,s),!0}}function xl(e,t){const i=[],s=Object.keys(t);for(let n=0;n<s.length;n++){const a=e[s[n]];a&&a.active()&&i.push(a.wait())}return Promise.all(i)}function wl(e,t){if(!t)return;let i=e.options;if(!i){e.options=t;return}return i.$shared&&(e.options=i=Object.assign({},i,{$shared:!1,$animations:{}})),i}function cn(e,t){const i=e&&e.options||{},s=i.reverse,n=i.min===void 0?t:0,a=i.max===void 0?t:0;return{start:s?a:n,end:s?n:a}}function zl(e,t,i){if(i===!1)return!1;const s=cn(e,i),n=cn(t,i);return{top:n.end,right:s.end,bottom:n.start,left:s.start}}function kl(e){let t,i,s,n;return H(e)?(t=e.top,i=e.right,s=e.bottom,n=e.left):t=i=s=n=e,{top:t,right:i,bottom:s,left:n,disabled:e===!1}}function Na(e,t){const i=[],s=e._getSortedDatasetMetas(t);let n,a;for(n=0,a=s.length;n<a;++n)i.push(s[n].index);return i}function un(e,t,i,s={}){const n=e.keys,a=s.mode==="single";let r,o,l,d;if(t===null)return;let c=!1;for(r=0,o=n.length;r<o;++r){if(l=+n[r],l===i){if(c=!0,s.all)continue;break}d=e.values[l],tt(d)&&(a||t===0||St(t)===St(d))&&(t+=d)}return!c&&!s.all?0:t}function $l(e,t){const{iScale:i,vScale:s}=t,n=i.axis==="x"?"x":"y",a=s.axis==="x"?"x":"y",r=Object.keys(e),o=new Array(r.length);let l,d,c;for(l=0,d=r.length;l<d;++l)c=r[l],o[l]={[n]:c,[a]:e[c]};return o}function Oi(e,t){const i=e&&e.options.stacked;return i||i===void 0&&t.stack!==void 0}function _l(e,t,i){return`${e.id}.${t.id}.${i.stack||i.type}`}function Sl(e){const{min:t,max:i,minDefined:s,maxDefined:n}=e.getUserBounds();return{min:s?t:Number.NEGATIVE_INFINITY,max:n?i:Number.POSITIVE_INFINITY}}function Tl(e,t,i){const s=e[t]||(e[t]={});return s[i]||(s[i]={})}function hn(e,t,i,s){for(const n of t.getMatchingVisibleMetas(s).reverse()){const a=e[n.index];if(i&&a>0||!i&&a<0)return n.index}return null}function gn(e,t){const{chart:i,_cachedMeta:s}=e,n=i._stacks||(i._stacks={}),{iScale:a,vScale:r,index:o}=s,l=a.axis,d=r.axis,c=_l(a,r,s),u=t.length;let h;for(let m=0;m<u;++m){const p=t[m],{[l]:g,[d]:f}=p,y=p._stacks||(p._stacks={});h=y[d]=Tl(n,c,g),h[o]=f,h._top=hn(h,r,!0,s.type),h._bottom=hn(h,r,!1,s.type);const b=h._visualValues||(h._visualValues={});b[o]=f}}function qi(e,t){const i=e.scales;return Object.keys(i).filter(s=>i[s].axis===t).shift()}function El(e,t){return Wt(e,{active:!1,dataset:void 0,datasetIndex:t,index:t,mode:"default",type:"dataset"})}function Ml(e,t,i){return Wt(e,{active:!1,dataIndex:t,parsed:void 0,raw:void 0,element:i,index:t,mode:"default",type:"data"})}function be(e,t){const i=e.controller.index,s=e.vScale&&e.vScale.axis;if(s){t=t||e._parsed;for(const n of t){const a=n._stacks;if(!a||a[s]===void 0||a[s][i]===void 0)return;delete a[s][i],a[s]._visualValues!==void 0&&a[s]._visualValues[i]!==void 0&&delete a[s]._visualValues[i]}}}const Ri=e=>e==="reset"||e==="none",mn=(e,t)=>t?e:Object.assign({},e),Cl=(e,t,i)=>e&&!t.hidden&&t._stacked&&{keys:Na(i,!0),values:null};class wt{constructor(t,i){this.chart=t,this._ctx=t.ctx,this.index=i,this._cachedDataOpts={},this._cachedMeta=this.getMeta(),this._type=this._cachedMeta.type,this.options=void 0,this._parsing=!1,this._data=void 0,this._objectData=void 0,this._sharedOptions=void 0,this._drawStart=void 0,this._drawCount=void 0,this.enableOptionSharing=!1,this.supportsDecimation=!1,this.$context=void 0,this._syncList=[],this.datasetElementType=new.target.datasetElementType,this.dataElementType=new.target.dataElementType,this.initialize()}initialize(){const t=this._cachedMeta;this.configure(),this.linkScales(),t._stacked=Oi(t.vScale,t),this.addElements(),this.options.fill&&!this.chart.isPluginEnabled("filler")&&console.warn("Tried to use the 'fill' option without the 'Filler' plugin enabled. Please import and register the 'Filler' plugin and make sure it is not disabled in the options")}updateIndex(t){this.index!==t&&be(this._cachedMeta),this.index=t}linkScales(){const t=this.chart,i=this._cachedMeta,s=this.getDataset(),n=(u,h,m,p)=>u==="x"?h:u==="r"?p:m,a=i.xAxisID=D(s.xAxisID,qi(t,"x")),r=i.yAxisID=D(s.yAxisID,qi(t,"y")),o=i.rAxisID=D(s.rAxisID,qi(t,"r")),l=i.indexAxis,d=i.iAxisID=n(l,a,r,o),c=i.vAxisID=n(l,r,a,o);i.xScale=this.getScaleForId(a),i.yScale=this.getScaleForId(r),i.rScale=this.getScaleForId(o),i.iScale=this.getScaleForId(d),i.vScale=this.getScaleForId(c)}getDataset(){return this.chart.data.datasets[this.index]}getMeta(){return this.chart.getDatasetMeta(this.index)}getScaleForId(t){return this.chart.scales[t]}_getOtherScale(t){const i=this._cachedMeta;return t===i.iScale?i.vScale:i.iScale}reset(){this._update("reset")}_destroy(){const t=this._cachedMeta;this._data&&Qs(this._data,this),t._stacked&&be(t)}_dataCheck(){const t=this.getDataset(),i=t.data||(t.data=[]),s=this._data;if(H(i)){const n=this._cachedMeta;this._data=$l(i,n)}else if(s!==i){if(s){Qs(s,this);const n=this._cachedMeta;be(n),n._parsed=[]}i&&Object.isExtensible(i)&&mo(i,this),this._syncList=[],this._data=i}}addElements(){const t=this._cachedMeta;this._dataCheck(),this.datasetElementType&&(t.dataset=new this.datasetElementType)}buildOrUpdateElements(t){const i=this._cachedMeta,s=this.getDataset();let n=!1;this._dataCheck();const a=i._stacked;i._stacked=Oi(i.vScale,i),i.stack!==s.stack&&(n=!0,be(i),i.stack=s.stack),this._resyncElements(t),(n||a!==i._stacked)&&(gn(this,i._parsed),i._stacked=Oi(i.vScale,i))}configure(){const t=this.chart.config,i=t.datasetScopeKeys(this._type),s=t.getOptionScopes(this.getDataset(),i,!0);this.options=t.createResolver(s,this.getContext()),this._parsing=this.options.parsing,this._cachedDataOpts={}}parse(t,i){const{_cachedMeta:s,_data:n}=this,{iScale:a,_stacked:r}=s,o=a.axis;let l=t===0&&i===n.length?!0:s._sorted,d=t>0&&s._parsed[t-1],c,u,h;if(this._parsing===!1)s._parsed=n,s._sorted=!0,h=n;else{J(n[t])?h=this.parseArrayData(s,n,t,i):H(n[t])?h=this.parseObjectData(s,n,t,i):h=this.parsePrimitiveData(s,n,t,i);const m=()=>u[o]===null||d&&u[o]<d[o];for(c=0;c<i;++c)s._parsed[c+t]=u=h[c],l&&(m()&&(l=!1),d=u);s._sorted=l}r&&gn(this,h)}parsePrimitiveData(t,i,s,n){const{iScale:a,vScale:r}=t,o=a.axis,l=r.axis,d=a.getLabels(),c=a===r,u=new Array(n);let h,m,p;for(h=0,m=n;h<m;++h)p=h+s,u[h]={[o]:c||a.parse(d[p],p),[l]:r.parse(i[p],p)};return u}parseArrayData(t,i,s,n){const{xScale:a,yScale:r}=t,o=new Array(n);let l,d,c,u;for(l=0,d=n;l<d;++l)c=l+s,u=i[c],o[l]={x:a.parse(u[0],c),y:r.parse(u[1],c)};return o}parseObjectData(t,i,s,n){const{xScale:a,yScale:r}=t,{xAxisKey:o="x",yAxisKey:l="y"}=this._parsing,d=new Array(n);let c,u,h,m;for(c=0,u=n;c<u;++c)h=c+s,m=i[h],d[c]={x:a.parse(Nt(m,o),h),y:r.parse(Nt(m,l),h)};return d}getParsed(t){return this._cachedMeta._parsed[t]}getDataElement(t){return this._cachedMeta.data[t]}applyStack(t,i,s){const n=this.chart,a=this._cachedMeta,r=i[t.axis],o={keys:Na(n,!0),values:i._stacks[t.axis]._visualValues};return un(o,r,a.index,{mode:s})}updateRangeFromParsed(t,i,s,n){const a=s[i.axis];let r=a===null?NaN:a;const o=n&&s._stacks[i.axis];n&&o&&(n.values=o,r=un(n,a,this._cachedMeta.index)),t.min=Math.min(t.min,r),t.max=Math.max(t.max,r)}getMinMax(t,i){const s=this._cachedMeta,n=s._parsed,a=s._sorted&&t===s.iScale,r=n.length,o=this._getOtherScale(t),l=Cl(i,s,this.chart),d={min:Number.POSITIVE_INFINITY,max:Number.NEGATIVE_INFINITY},{min:c,max:u}=Sl(o);let h,m;function p(){m=n[h];const g=m[o.axis];return!tt(m[t.axis])||c>g||u<g}for(h=0;h<r&&!(!p()&&(this.updateRangeFromParsed(d,t,m,l),a));++h);if(a){for(h=r-1;h>=0;--h)if(!p()){this.updateRangeFromParsed(d,t,m,l);break}}return d}getAllParsedValues(t){const i=this._cachedMeta._parsed,s=[];let n,a,r;for(n=0,a=i.length;n<a;++n)r=i[n][t.axis],tt(r)&&s.push(r);return s}getMaxOverflow(){return!1}getLabelAndValue(t){const i=this._cachedMeta,s=i.iScale,n=i.vScale,a=this.getParsed(t);return{label:s?""+s.getLabelForValue(a[s.axis]):"",value:n?""+n.getLabelForValue(a[n.axis]):""}}_update(t){const i=this._cachedMeta;this.update(t||"default"),i._clip=kl(D(this.options.clip,zl(i.xScale,i.yScale,this.getMaxOverflow())))}update(t){}draw(){const t=this._ctx,i=this.chart,s=this._cachedMeta,n=s.data||[],a=i.chartArea,r=[],o=this._drawStart||0,l=this._drawCount||n.length-o,d=this.options.drawActiveElementsOnTop;let c;for(s.dataset&&s.dataset.draw(t,a,o,l),c=o;c<o+l;++c){const u=n[c];u.hidden||(u.active&&d?r.push(u):u.draw(t,a))}for(c=0;c<r.length;++c)r[c].draw(t,a)}getStyle(t,i){const s=i?"active":"default";return t===void 0&&this._cachedMeta.dataset?this.resolveDatasetElementOptions(s):this.resolveDataElementOptions(t||0,s)}getContext(t,i,s){const n=this.getDataset();let a;if(t>=0&&t<this._cachedMeta.data.length){const r=this._cachedMeta.data[t];a=r.$context||(r.$context=Ml(this.getContext(),t,r)),a.parsed=this.getParsed(t),a.raw=n.data[t],a.index=a.dataIndex=t}else a=this.$context||(this.$context=El(this.chart.getContext(),this.index)),a.dataset=n,a.index=a.datasetIndex=this.index;return a.active=!!i,a.mode=s,a}resolveDatasetElementOptions(t){return this._resolveElementOptions(this.datasetElementType.id,t)}resolveDataElementOptions(t,i){return this._resolveElementOptions(this.dataElementType.id,i,t)}_resolveElementOptions(t,i="default",s){const n=i==="active",a=this._cachedDataOpts,r=t+"-"+i,o=a[r],l=this.enableOptionSharing&&je(s);if(o)return mn(o,l);const d=this.chart.config,c=d.datasetElementScopeKeys(this._type,t),u=n?[`${t}Hover`,"hover",t,""]:[t,""],h=d.getOptionScopes(this.getDataset(),c),m=Object.keys(G.elements[t]),p=()=>this.getContext(s,n,i),g=d.resolveNamedOptions(h,m,p,u);return g.$shared&&(g.$shared=l,a[r]=Object.freeze(mn(g,l))),g}_resolveAnimations(t,i,s){const n=this.chart,a=this._cachedDataOpts,r=`animation-${i}`,o=a[r];if(o)return o;let l;if(n.options.animation!==!1){const c=this.chart.config,u=c.datasetAnimationScopeKeys(this._type,i),h=c.getOptionScopes(this.getDataset(),u);l=c.createResolver(h,this.getContext(t,s,i))}const d=new Fa(n,l&&l.animations);return l&&l._cacheable&&(a[r]=Object.freeze(d)),d}getSharedOptions(t){if(t.$shared)return this._sharedOptions||(this._sharedOptions=Object.assign({},t))}includeOptions(t,i){return!i||Ri(t)||this.chart._animationsDisabled}_getSharedOptions(t,i){const s=this.resolveDataElementOptions(t,i),n=this._sharedOptions,a=this.getSharedOptions(s),r=this.includeOptions(i,a)||a!==n;return this.updateSharedOptions(a,i,s),{sharedOptions:a,includeOptions:r}}updateElement(t,i,s,n){Ri(n)?Object.assign(t,s):this._resolveAnimations(i,n).update(t,s)}updateSharedOptions(t,i,s){t&&!Ri(i)&&this._resolveAnimations(void 0,i).update(t,s)}_setStyle(t,i,s,n){t.active=n;const a=this.getStyle(i,n);this._resolveAnimations(i,s,n).update(t,{options:!n&&this.getSharedOptions(a)||a})}removeHoverStyle(t,i,s){this._setStyle(t,s,"active",!1)}setHoverStyle(t,i,s){this._setStyle(t,s,"active",!0)}_removeDatasetHoverStyle(){const t=this._cachedMeta.dataset;t&&this._setStyle(t,void 0,"active",!1)}_setDatasetHoverStyle(){const t=this._cachedMeta.dataset;t&&this._setStyle(t,void 0,"active",!0)}_resyncElements(t){const i=this._data,s=this._cachedMeta.data;for(const[o,l,d]of this._syncList)this[o](l,d);this._syncList=[];const n=s.length,a=i.length,r=Math.min(a,n);r&&this.parse(0,r),a>n?this._insertElements(n,a-n,t):a<n&&this._removeElements(a,n-a)}_insertElements(t,i,s=!0){const n=this._cachedMeta,a=n.data,r=t+i;let o;const l=d=>{for(d.length+=i,o=d.length-1;o>=r;o--)d[o]=d[o-i]};for(l(a),o=t;o<r;++o)a[o]=new this.dataElementType;this._parsing&&l(n._parsed),this.parse(t,i),s&&this.updateElements(a,t,i,"reset")}updateElements(t,i,s,n){}_removeElements(t,i){const s=this._cachedMeta;if(this._parsing){const n=s._parsed.splice(t,i);s._stacked&&be(s,n)}s.data.splice(t,i)}_sync(t){if(this._parsing)this._syncList.push(t);else{const[i,s,n]=t;this[i](s,n)}this.chart._dataChanges.push([this.index,...t])}_onDataPush(){const t=arguments.length;this._sync(["_insertElements",this.getDataset().data.length-t,t])}_onDataPop(){this._sync(["_removeElements",this._cachedMeta.data.length-1,1])}_onDataShift(){this._sync(["_removeElements",0,1])}_onDataSplice(t,i){i&&this._sync(["_removeElements",t,i]);const s=arguments.length-2;s&&this._sync(["_insertElements",t,s])}_onDataUnshift(){this._sync(["_insertElements",0,arguments.length])}}B(wt,"defaults",{}),B(wt,"datasetElementType",null),B(wt,"dataElementType",null);function Al(e,t){if(!e._cache.$bar){const i=e.getMatchingVisibleMetas(t);let s=[];for(let n=0,a=i.length;n<a;n++)s=s.concat(i[n].controller.getAllParsedValues(e));e._cache.$bar=wa(s.sort((n,a)=>n-a))}return e._cache.$bar}function Ll(e){const t=e.iScale,i=Al(t,e.type);let s=t._length,n,a,r,o;const l=()=>{r===32767||r===-32768||(je(o)&&(s=Math.min(s,Math.abs(r-o)||s)),o=r)};for(n=0,a=i.length;n<a;++n)r=t.getPixelForValue(i[n]),l();for(o=void 0,n=0,a=t.ticks.length;n<a;++n)r=t.getPixelForTick(n),l();return s}function Bl(e,t,i,s){const n=i.barThickness;let a,r;return F(n)?(a=t.min*i.categoryPercentage,r=i.barPercentage):(a=n*s,r=1),{chunk:a/s,ratio:r,start:t.pixels[e]-a/2}}function Il(e,t,i,s){const n=t.pixels,a=n[e];let r=e>0?n[e-1]:null,o=e<n.length-1?n[e+1]:null;const l=i.categoryPercentage;r===null&&(r=a-(o===null?t.end-t.start:o-a)),o===null&&(o=a+a-r);const d=a-(a-Math.min(r,o))/2*l;return{chunk:Math.abs(o-r)/2*l/s,ratio:i.barPercentage,start:d}}function jl(e,t,i,s){const n=i.parse(e[0],s),a=i.parse(e[1],s),r=Math.min(n,a),o=Math.max(n,a);let l=r,d=o;Math.abs(r)>Math.abs(o)&&(l=o,d=r),t[i.axis]=d,t._custom={barStart:l,barEnd:d,start:n,end:a,min:r,max:o}}function Ha(e,t,i,s){return J(e)?jl(e,t,i,s):t[i.axis]=i.parse(e,s),t}function pn(e,t,i,s){const n=e.iScale,a=e.vScale,r=n.getLabels(),o=n===a,l=[];let d,c,u,h;for(d=i,c=i+s;d<c;++d)h=t[d],u={},u[n.axis]=o||n.parse(r[d],d),l.push(Ha(h,u,a,d));return l}function Fi(e){return e&&e.barStart!==void 0&&e.barEnd!==void 0}function Pl(e,t,i){return e!==0?St(e):(t.isHorizontal()?1:-1)*(t.min>=i?1:-1)}function Dl(e){let t,i,s,n,a;return e.horizontal?(t=e.base>e.x,i="left",s="right"):(t=e.base<e.y,i="bottom",s="top"),t?(n="end",a="start"):(n="start",a="end"),{start:i,end:s,reverse:t,top:n,bottom:a}}function Ol(e,t,i,s){let n=t.borderSkipped;const a={};if(!n){e.borderSkipped=a;return}if(n===!0){e.borderSkipped={top:!0,right:!0,bottom:!0,left:!0};return}const{start:r,end:o,reverse:l,top:d,bottom:c}=Dl(e);n==="middle"&&i&&(e.enableBorderRadius=!0,(i._top||0)===s?n=d:(i._bottom||0)===s?n=c:(a[fn(c,r,o,l)]=!0,n=d)),a[fn(n,r,o,l)]=!0,e.borderSkipped=a}function fn(e,t,i,s){return s?(e=ql(e,t,i),e=bn(e,i,t)):e=bn(e,t,i),e}function ql(e,t,i){return e===t?i:e===i?t:e}function bn(e,t,i){return e==="start"?t:e==="end"?i:e}function Rl(e,{inflateAmount:t},i){e.inflateAmount=t==="auto"?i===1?.33:0:t}class si extends wt{parsePrimitiveData(t,i,s,n){return pn(t,i,s,n)}parseArrayData(t,i,s,n){return pn(t,i,s,n)}parseObjectData(t,i,s,n){const{iScale:a,vScale:r}=t,{xAxisKey:o="x",yAxisKey:l="y"}=this._parsing,d=a.axis==="x"?o:l,c=r.axis==="x"?o:l,u=[];let h,m,p,g;for(h=s,m=s+n;h<m;++h)g=i[h],p={},p[a.axis]=a.parse(Nt(g,d),h),u.push(Ha(Nt(g,c),p,r,h));return u}updateRangeFromParsed(t,i,s,n){super.updateRangeFromParsed(t,i,s,n);const a=s._custom;a&&i===this._cachedMeta.vScale&&(t.min=Math.min(t.min,a.min),t.max=Math.max(t.max,a.max))}getMaxOverflow(){return 0}getLabelAndValue(t){const i=this._cachedMeta,{iScale:s,vScale:n}=i,a=this.getParsed(t),r=a._custom,o=Fi(r)?"["+r.start+", "+r.end+"]":""+n.getLabelForValue(a[n.axis]);return{label:""+s.getLabelForValue(a[s.axis]),value:o}}initialize(){this.enableOptionSharing=!0,super.initialize();const t=this._cachedMeta;t.stack=this.getDataset().stack}update(t){const i=this._cachedMeta;this.updateElements(i.data,0,i.data.length,t)}updateElements(t,i,s,n){const a=n==="reset",{index:r,_cachedMeta:{vScale:o}}=this,l=o.getBasePixel(),d=o.isHorizontal(),c=this._getRuler(),{sharedOptions:u,includeOptions:h}=this._getSharedOptions(i,n);for(let m=i;m<i+s;m++){const p=this.getParsed(m),g=a||F(p[o.axis])?{base:l,head:l}:this._calculateBarValuePixels(m),f=this._calculateBarIndexPixels(m,c),y=(p._stacks||{})[o.axis],b={horizontal:d,base:g.base,enableBorderRadius:!y||Fi(p._custom)||r===y._top||r===y._bottom,x:d?g.head:f.center,y:d?f.center:g.head,height:d?f.size:Math.abs(g.size),width:d?Math.abs(g.size):f.size};h&&(b.options=u||this.resolveDataElementOptions(m,t[m].active?"active":n));const x=b.options||t[m].options;Ol(b,x,y,r),Rl(b,x,c.ratio),this.updateElement(t[m],m,b,n)}}_getStacks(t,i){const{iScale:s}=this._cachedMeta,n=s.getMatchingVisibleMetas(this._type).filter(c=>c.controller.options.grouped),a=s.options.stacked,r=[],o=this._cachedMeta.controller.getParsed(i),l=o&&o[s.axis],d=c=>{const u=c._parsed.find(m=>m[s.axis]===l),h=u&&u[c.vScale.axis];if(F(h)||isNaN(h))return!0};for(const c of n)if(!(i!==void 0&&d(c))&&((a===!1||r.indexOf(c.stack)===-1||a===void 0&&c.stack===void 0)&&r.push(c.stack),c.index===t))break;return r.length||r.push(void 0),r}_getStackCount(t){return this._getStacks(void 0,t).length}_getAxisCount(){return this._getAxis().length}getFirstScaleIdForIndexAxis(){const t=this.chart.scales,i=this.chart.options.indexAxis;return Object.keys(t).filter(s=>t[s].axis===i).shift()}_getAxis(){const t={},i=this.getFirstScaleIdForIndexAxis();for(const s of this.chart.data.datasets)t[D(this.chart.options.indexAxis==="x"?s.xAxisID:s.yAxisID,i)]=!0;return Object.keys(t)}_getStackIndex(t,i,s){const n=this._getStacks(t,s),a=i!==void 0?n.indexOf(i):-1;return a===-1?n.length-1:a}_getRuler(){const t=this.options,i=this._cachedMeta,s=i.iScale,n=[];let a,r;for(a=0,r=i.data.length;a<r;++a)n.push(s.getPixelForValue(this.getParsed(a)[s.axis],a));const o=t.barThickness;return{min:o||Ll(i),pixels:n,start:s._startPixel,end:s._endPixel,stackCount:this._getStackCount(),scale:s,grouped:t.grouped,ratio:o?1:t.categoryPercentage*t.barPercentage}}_calculateBarValuePixels(t){const{_cachedMeta:{vScale:i,_stacked:s,index:n},options:{base:a,minBarLength:r}}=this,o=a||0,l=this.getParsed(t),d=l._custom,c=Fi(d);let u=l[i.axis],h=0,m=s?this.applyStack(i,l,s):u,p,g;m!==u&&(h=m-u,m=u),c&&(u=d.barStart,m=d.barEnd-d.barStart,u!==0&&St(u)!==St(d.barEnd)&&(h=0),h+=u);const f=!F(a)&&!c?a:h;let y=i.getPixelForValue(f);if(this.chart.getDataVisibility(t)?p=i.getPixelForValue(h+m):p=y,g=p-y,Math.abs(g)<r){g=Pl(g,i,o)*r,u===o&&(y-=g/2);const b=i.getPixelForDecimal(0),x=i.getPixelForDecimal(1),v=Math.min(b,x),w=Math.max(b,x);y=Math.max(Math.min(y,w),v),p=y+g,s&&!c&&(l._stacks[i.axis]._visualValues[n]=i.getValueForPixel(p)-i.getValueForPixel(y))}if(y===i.getPixelForValue(o)){const b=St(g)*i.getLineWidthForValue(o)/2;y+=b,g-=b}return{size:g,base:y,head:p,center:p+g/2}}_calculateBarIndexPixels(t,i){const s=i.scale,n=this.options,a=n.skipNull,r=D(n.maxBarThickness,1/0);let o,l;const d=this._getAxisCount();if(i.grouped){const c=a?this._getStackCount(t):i.stackCount,u=n.barThickness==="flex"?Il(t,i,n,c*d):Bl(t,i,n,c*d),h=this.chart.options.indexAxis==="x"?this.getDataset().xAxisID:this.getDataset().yAxisID,m=this._getAxis().indexOf(D(h,this.getFirstScaleIdForIndexAxis())),p=this._getStackIndex(this.index,this._cachedMeta.stack,a?t:void 0)+m;o=u.start+u.chunk*p+u.chunk/2,l=Math.min(r,u.chunk*u.ratio)}else o=s.getPixelForValue(this.getParsed(t)[s.axis],t),l=Math.min(r,i.min*i.ratio);return{base:o-l/2,head:o+l/2,center:o,size:l}}draw(){const t=this._cachedMeta,i=t.vScale,s=t.data,n=s.length;let a=0;for(;a<n;++a)this.getParsed(a)[i.axis]!==null&&!s[a].hidden&&s[a].draw(this._ctx)}}B(si,"id","bar"),B(si,"defaults",{datasetElementType:!1,dataElementType:"bar",categoryPercentage:.8,barPercentage:.9,grouped:!0,animations:{numbers:{type:"number",properties:["x","y","base","width","height"]}}}),B(si,"overrides",{scales:{_index_:{type:"category",offset:!0,grid:{offset:!0}},_value_:{type:"linear",beginAtZero:!0}}});class ni extends wt{initialize(){this.enableOptionSharing=!0,super.initialize()}parsePrimitiveData(t,i,s,n){const a=super.parsePrimitiveData(t,i,s,n);for(let r=0;r<a.length;r++)a[r]._custom=this.resolveDataElementOptions(r+s).radius;return a}parseArrayData(t,i,s,n){const a=super.parseArrayData(t,i,s,n);for(let r=0;r<a.length;r++){const o=i[s+r];a[r]._custom=D(o[2],this.resolveDataElementOptions(r+s).radius)}return a}parseObjectData(t,i,s,n){const a=super.parseObjectData(t,i,s,n);for(let r=0;r<a.length;r++){const o=i[s+r];a[r]._custom=D(o&&o.r&&+o.r,this.resolveDataElementOptions(r+s).radius)}return a}getMaxOverflow(){const t=this._cachedMeta.data;let i=0;for(let s=t.length-1;s>=0;--s)i=Math.max(i,t[s].size(this.resolveDataElementOptions(s))/2);return i>0&&i}getLabelAndValue(t){const i=this._cachedMeta,s=this.chart.data.labels||[],{xScale:n,yScale:a}=i,r=this.getParsed(t),o=n.getLabelForValue(r.x),l=a.getLabelForValue(r.y),d=r._custom;return{label:s[t]||"",value:"("+o+", "+l+(d?", "+d:"")+")"}}update(t){const i=this._cachedMeta.data;this.updateElements(i,0,i.length,t)}updateElements(t,i,s,n){const a=n==="reset",{iScale:r,vScale:o}=this._cachedMeta,{sharedOptions:l,includeOptions:d}=this._getSharedOptions(i,n),c=r.axis,u=o.axis;for(let h=i;h<i+s;h++){const m=t[h],p=!a&&this.getParsed(h),g={},f=g[c]=a?r.getPixelForDecimal(.5):r.getPixelForValue(p[c]),y=g[u]=a?o.getBasePixel():o.getPixelForValue(p[u]);g.skip=isNaN(f)||isNaN(y),d&&(g.options=l||this.resolveDataElementOptions(h,m.active?"active":n),a&&(g.options.radius=0)),this.updateElement(m,h,g,n)}}resolveDataElementOptions(t,i){const s=this.getParsed(t);let n=super.resolveDataElementOptions(t,i);n.$shared&&(n=Object.assign({},n,{$shared:!1}));const a=n.radius;return i!=="active"&&(n.radius=0),n.radius+=D(s&&s._custom,a),n}}B(ni,"id","bubble"),B(ni,"defaults",{datasetElementType:!1,dataElementType:"point",animations:{numbers:{type:"number",properties:["x","y","borderWidth","radius"]}}}),B(ni,"overrides",{scales:{x:{type:"linear"},y:{type:"linear"}}});function Fl(e,t,i){let s=1,n=1,a=0,r=0;if(t<K){const o=e,l=o+t,d=Math.cos(o),c=Math.sin(o),u=Math.cos(l),h=Math.sin(l),m=(x,v,w)=>Pe(x,o,l,!0)?1:Math.max(v,v*i,w,w*i),p=(x,v,w)=>Pe(x,o,l,!0)?-1:Math.min(v,v*i,w,w*i),g=m(0,d,u),f=m(it,c,h),y=p(W,d,u),b=p(W+it,c,h);s=(g-y)/2,n=(f-b)/2,a=-(g+y)/2,r=-(f+b)/2}return{ratioX:s,ratioY:n,offsetX:a,offsetY:r}}class Zt extends wt{constructor(t,i){super(t,i),this.enableOptionSharing=!0,this.innerRadius=void 0,this.outerRadius=void 0,this.offsetX=void 0,this.offsetY=void 0}linkScales(){}parse(t,i){const s=this.getDataset().data,n=this._cachedMeta;if(this._parsing===!1)n._parsed=s;else{let a=l=>+s[l];if(H(s[t])){const{key:l="value"}=this._parsing;a=d=>+Nt(s[d],l)}let r,o;for(r=t,o=t+i;r<o;++r)n._parsed[r]=a(r)}}_getRotation(){return xt(this.options.rotation-90)}_getCircumference(){return xt(this.options.circumference)}_getRotationExtents(){let t=K,i=-K;for(let s=0;s<this.chart.data.datasets.length;++s)if(this.chart.isDatasetVisible(s)&&this.chart.getDatasetMeta(s).type===this._type){const n=this.chart.getDatasetMeta(s).controller,a=n._getRotation(),r=n._getCircumference();t=Math.min(t,a),i=Math.max(i,a+r)}return{rotation:t,circumference:i-t}}update(t){const i=this.chart,{chartArea:s}=i,n=this._cachedMeta,a=n.data,r=this.getMaxBorderWidth()+this.getMaxOffset(a)+this.options.spacing,o=Math.max((Math.min(s.width,s.height)-r)/2,0),l=Math.min(Gr(this.options.cutout,o),1),d=this._getRingWeight(this.index),{circumference:c,rotation:u}=this._getRotationExtents(),{ratioX:h,ratioY:m,offsetX:p,offsetY:g}=Fl(u,c,l),f=(s.width-r)/h,y=(s.height-r)/m,b=Math.max(Math.min(f,y)/2,0),x=fa(this.options.radius,b),v=Math.max(x*l,0),w=(x-v)/this._getVisibleDatasetWeightTotal();this.offsetX=p*x,this.offsetY=g*x,n.total=this.calculateTotal(),this.outerRadius=x-w*this._getRingWeightOffset(this.index),this.innerRadius=Math.max(this.outerRadius-w*d,0),this.updateElements(a,0,a.length,t)}_circumference(t,i){const s=this.options,n=this._cachedMeta,a=this._getCircumference();return i&&s.animation.animateRotate||!this.chart.getDataVisibility(t)||n._parsed[t]===null||n.data[t].hidden?0:this.calculateCircumference(n._parsed[t]*a/K)}updateElements(t,i,s,n){const a=n==="reset",r=this.chart,o=r.chartArea,d=r.options.animation,c=(o.left+o.right)/2,u=(o.top+o.bottom)/2,h=a&&d.animateScale,m=h?0:this.innerRadius,p=h?0:this.outerRadius,{sharedOptions:g,includeOptions:f}=this._getSharedOptions(i,n);let y=this._getRotation(),b;for(b=0;b<i;++b)y+=this._circumference(b,a);for(b=i;b<i+s;++b){const x=this._circumference(b,a),v=t[b],w={x:c+this.offsetX,y:u+this.offsetY,startAngle:y,endAngle:y+x,circumference:x,outerRadius:p,innerRadius:m};f&&(w.options=g||this.resolveDataElementOptions(b,v.active?"active":n)),y+=x,this.updateElement(v,b,w,n)}}calculateTotal(){const t=this._cachedMeta,i=t.data;let s=0,n;for(n=0;n<i.length;n++){const a=t._parsed[n];a!==null&&!isNaN(a)&&this.chart.getDataVisibility(n)&&!i[n].hidden&&(s+=Math.abs(a))}return s}calculateCircumference(t){const i=this._cachedMeta.total;return i>0&&!isNaN(t)?K*(Math.abs(t)/i):0}getLabelAndValue(t){const i=this._cachedMeta,s=this.chart,n=s.data.labels||[],a=Ne(i._parsed[t],s.options.locale);return{label:n[t]||"",value:a}}getMaxBorderWidth(t){let i=0;const s=this.chart;let n,a,r,o,l;if(!t){for(n=0,a=s.data.datasets.length;n<a;++n)if(s.isDatasetVisible(n)){r=s.getDatasetMeta(n),t=r.data,o=r.controller;break}}if(!t)return 0;for(n=0,a=t.length;n<a;++n)l=o.resolveDataElementOptions(n),l.borderAlign!=="inner"&&(i=Math.max(i,l.borderWidth||0,l.hoverBorderWidth||0));return i}getMaxOffset(t){let i=0;for(let s=0,n=t.length;s<n;++s){const a=this.resolveDataElementOptions(s);i=Math.max(i,a.offset||0,a.hoverOffset||0)}return i}_getRingWeightOffset(t){let i=0;for(let s=0;s<t;++s)this.chart.isDatasetVisible(s)&&(i+=this._getRingWeight(s));return i}_getRingWeight(t){return Math.max(D(this.chart.data.datasets[t].weight,1),0)}_getVisibleDatasetWeightTotal(){return this._getRingWeightOffset(this.chart.data.datasets.length)||1}}B(Zt,"id","doughnut"),B(Zt,"defaults",{datasetElementType:!1,dataElementType:"arc",animation:{animateRotate:!0,animateScale:!1},animations:{numbers:{type:"number",properties:["circumference","endAngle","innerRadius","outerRadius","startAngle","x","y","offset","borderWidth","spacing"]}},cutout:"50%",rotation:0,circumference:360,radius:"100%",spacing:0,indexAxis:"r"}),B(Zt,"descriptors",{_scriptable:t=>t!=="spacing",_indexable:t=>t!=="spacing"&&!t.startsWith("borderDash")&&!t.startsWith("hoverBorderDash")}),B(Zt,"overrides",{aspectRatio:1,plugins:{legend:{labels:{generateLabels(t){const i=t.data,{labels:{pointStyle:s,textAlign:n,color:a,useBorderRadius:r,borderRadius:o}}=t.legend.options;return i.labels.length&&i.datasets.length?i.labels.map((l,d)=>{const u=t.getDatasetMeta(0).controller.getStyle(d);return{text:l,fillStyle:u.backgroundColor,fontColor:a,hidden:!t.getDataVisibility(d),lineDash:u.borderDash,lineDashOffset:u.borderDashOffset,lineJoin:u.borderJoinStyle,lineWidth:u.borderWidth,strokeStyle:u.borderColor,textAlign:n,pointStyle:s,borderRadius:r&&(o||u.borderRadius),index:d}}):[]}},onClick(t,i,s){s.chart.toggleDataVisibility(i.index),s.chart.update()}}}});class ai extends wt{initialize(){this.enableOptionSharing=!0,this.supportsDecimation=!0,super.initialize()}update(t){const i=this._cachedMeta,{dataset:s,data:n=[],_dataset:a}=i,r=this.chart._animationsDisabled;let{start:o,count:l}=$a(i,n,r);this._drawStart=o,this._drawCount=l,_a(i)&&(o=0,l=n.length),s._chart=this.chart,s._datasetIndex=this.index,s._decimated=!!a._decimated,s.points=n;const d=this.resolveDatasetElementOptions(t);this.options.showLine||(d.borderWidth=0),d.segment=this.options.segment,this.updateElement(s,void 0,{animated:!r,options:d},t),this.updateElements(n,o,l,t)}updateElements(t,i,s,n){const a=n==="reset",{iScale:r,vScale:o,_stacked:l,_dataset:d}=this._cachedMeta,{sharedOptions:c,includeOptions:u}=this._getSharedOptions(i,n),h=r.axis,m=o.axis,{spanGaps:p,segment:g}=this.options,f=me(p)?p:Number.POSITIVE_INFINITY,y=this.chart._animationsDisabled||a||n==="none",b=i+s,x=t.length;let v=i>0&&this.getParsed(i-1);for(let w=0;w<x;++w){const z=t[w],E=y?z:{};if(w<i||w>=b){E.skip=!0;continue}const _=this.getParsed(w),S=F(_[m]),T=E[h]=r.getPixelForValue(_[h],w),M=E[m]=a||S?o.getBasePixel():o.getPixelForValue(l?this.applyStack(o,_,l):_[m],w);E.skip=isNaN(T)||isNaN(M)||S,E.stop=w>0&&Math.abs(_[h]-v[h])>f,g&&(E.parsed=_,E.raw=d.data[w]),u&&(E.options=c||this.resolveDataElementOptions(w,z.active?"active":n)),y||this.updateElement(z,w,E,n),v=_}}getMaxOverflow(){const t=this._cachedMeta,i=t.dataset,s=i.options&&i.options.borderWidth||0,n=t.data||[];if(!n.length)return s;const a=n[0].size(this.resolveDataElementOptions(0)),r=n[n.length-1].size(this.resolveDataElementOptions(n.length-1));return Math.max(s,a,r)/2}draw(){const t=this._cachedMeta;t.dataset.updateControlPoints(this.chart.chartArea,t.iScale.axis),super.draw()}}B(ai,"id","line"),B(ai,"defaults",{datasetElementType:"line",dataElementType:"point",showLine:!0,spanGaps:!1}),B(ai,"overrides",{scales:{_index_:{type:"category"},_value_:{type:"linear"}}});class Le extends wt{constructor(t,i){super(t,i),this.innerRadius=void 0,this.outerRadius=void 0}getLabelAndValue(t){const i=this._cachedMeta,s=this.chart,n=s.data.labels||[],a=Ne(i._parsed[t].r,s.options.locale);return{label:n[t]||"",value:a}}parseObjectData(t,i,s,n){return Ba.bind(this)(t,i,s,n)}update(t){const i=this._cachedMeta.data;this._updateRadius(),this.updateElements(i,0,i.length,t)}getMinMax(){const t=this._cachedMeta,i={min:Number.POSITIVE_INFINITY,max:Number.NEGATIVE_INFINITY};return t.data.forEach((s,n)=>{const a=this.getParsed(n).r;!isNaN(a)&&this.chart.getDataVisibility(n)&&(a<i.min&&(i.min=a),a>i.max&&(i.max=a))}),i}_updateRadius(){const t=this.chart,i=t.chartArea,s=t.options,n=Math.min(i.right-i.left,i.bottom-i.top),a=Math.max(n/2,0),r=Math.max(s.cutoutPercentage?a/100*s.cutoutPercentage:1,0),o=(a-r)/t.getVisibleDatasetCount();this.outerRadius=a-o*this.index,this.innerRadius=this.outerRadius-o}updateElements(t,i,s,n){const a=n==="reset",r=this.chart,l=r.options.animation,d=this._cachedMeta.rScale,c=d.xCenter,u=d.yCenter,h=d.getIndexAngle(0)-.5*W;let m=h,p;const g=360/this.countVisibleElements();for(p=0;p<i;++p)m+=this._computeAngle(p,n,g);for(p=i;p<i+s;p++){const f=t[p];let y=m,b=m+this._computeAngle(p,n,g),x=r.getDataVisibility(p)?d.getDistanceFromCenterForValue(this.getParsed(p).r):0;m=b,a&&(l.animateScale&&(x=0),l.animateRotate&&(y=b=h));const v={x:c,y:u,innerRadius:0,outerRadius:x,startAngle:y,endAngle:b,options:this.resolveDataElementOptions(p,f.active?"active":n)};this.updateElement(f,p,v,n)}}countVisibleElements(){const t=this._cachedMeta;let i=0;return t.data.forEach((s,n)=>{!isNaN(this.getParsed(n).r)&&this.chart.getDataVisibility(n)&&i++}),i}_computeAngle(t,i,s){return this.chart.getDataVisibility(t)?xt(this.resolveDataElementOptions(t,i).angle||s):0}}B(Le,"id","polarArea"),B(Le,"defaults",{dataElementType:"arc",animation:{animateRotate:!0,animateScale:!0},animations:{numbers:{type:"number",properties:["x","y","startAngle","endAngle","innerRadius","outerRadius"]}},indexAxis:"r",startAngle:0}),B(Le,"overrides",{aspectRatio:1,plugins:{legend:{labels:{generateLabels(t){const i=t.data;if(i.labels.length&&i.datasets.length){const{labels:{pointStyle:s,color:n}}=t.legend.options;return i.labels.map((a,r)=>{const l=t.getDatasetMeta(0).controller.getStyle(r);return{text:a,fillStyle:l.backgroundColor,strokeStyle:l.borderColor,fontColor:n,lineWidth:l.borderWidth,pointStyle:s,hidden:!t.getDataVisibility(r),index:r}})}return[]}},onClick(t,i,s){s.chart.toggleDataVisibility(i.index),s.chart.update()}}},scales:{r:{type:"radialLinear",angleLines:{display:!1},beginAtZero:!0,grid:{circular:!0},pointLabels:{display:!1},startAngle:0}}});class ts extends Zt{}B(ts,"id","pie"),B(ts,"defaults",{cutout:0,rotation:0,circumference:360,radius:"100%"});class ri extends wt{getLabelAndValue(t){const i=this._cachedMeta.vScale,s=this.getParsed(t);return{label:i.getLabels()[t],value:""+i.getLabelForValue(s[i.axis])}}parseObjectData(t,i,s,n){return Ba.bind(this)(t,i,s,n)}update(t){const i=this._cachedMeta,s=i.dataset,n=i.data||[],a=i.iScale.getLabels();if(s.points=n,t!=="resize"){const r=this.resolveDatasetElementOptions(t);this.options.showLine||(r.borderWidth=0);const o={_loop:!0,_fullLoop:a.length===n.length,options:r};this.updateElement(s,void 0,o,t)}this.updateElements(n,0,n.length,t)}updateElements(t,i,s,n){const a=this._cachedMeta.rScale,r=n==="reset";for(let o=i;o<i+s;o++){const l=t[o],d=this.resolveDataElementOptions(o,l.active?"active":n),c=a.getPointPositionForValue(o,this.getParsed(o).r),u=r?a.xCenter:c.x,h=r?a.yCenter:c.y,m={x:u,y:h,angle:c.angle,skip:isNaN(u)||isNaN(h),options:d};this.updateElement(l,o,m,n)}}}B(ri,"id","radar"),B(ri,"defaults",{datasetElementType:"line",dataElementType:"point",indexAxis:"r",showLine:!0,elements:{line:{fill:"start"}}}),B(ri,"overrides",{aspectRatio:1,scales:{r:{type:"radialLinear"}}});class oi extends wt{getLabelAndValue(t){const i=this._cachedMeta,s=this.chart.data.labels||[],{xScale:n,yScale:a}=i,r=this.getParsed(t),o=n.getLabelForValue(r.x),l=a.getLabelForValue(r.y);return{label:s[t]||"",value:"("+o+", "+l+")"}}update(t){const i=this._cachedMeta,{data:s=[]}=i,n=this.chart._animationsDisabled;let{start:a,count:r}=$a(i,s,n);if(this._drawStart=a,this._drawCount=r,_a(i)&&(a=0,r=s.length),this.options.showLine){this.datasetElementType||this.addElements();const{dataset:o,_dataset:l}=i;o._chart=this.chart,o._datasetIndex=this.index,o._decimated=!!l._decimated,o.points=s;const d=this.resolveDatasetElementOptions(t);d.segment=this.options.segment,this.updateElement(o,void 0,{animated:!n,options:d},t)}else this.datasetElementType&&(delete i.dataset,this.datasetElementType=!1);this.updateElements(s,a,r,t)}addElements(){const{showLine:t}=this.options;!this.datasetElementType&&t&&(this.datasetElementType=this.chart.registry.getElement("line")),super.addElements()}updateElements(t,i,s,n){const a=n==="reset",{iScale:r,vScale:o,_stacked:l,_dataset:d}=this._cachedMeta,c=this.resolveDataElementOptions(i,n),u=this.getSharedOptions(c),h=this.includeOptions(n,u),m=r.axis,p=o.axis,{spanGaps:g,segment:f}=this.options,y=me(g)?g:Number.POSITIVE_INFINITY,b=this.chart._animationsDisabled||a||n==="none";let x=i>0&&this.getParsed(i-1);for(let v=i;v<i+s;++v){const w=t[v],z=this.getParsed(v),E=b?w:{},_=F(z[p]),S=E[m]=r.getPixelForValue(z[m],v),T=E[p]=a||_?o.getBasePixel():o.getPixelForValue(l?this.applyStack(o,z,l):z[p],v);E.skip=isNaN(S)||isNaN(T)||_,E.stop=v>0&&Math.abs(z[m]-x[m])>y,f&&(E.parsed=z,E.raw=d.data[v]),h&&(E.options=u||this.resolveDataElementOptions(v,w.active?"active":n)),b||this.updateElement(w,v,E,n),x=z}this.updateSharedOptions(u,n,c)}getMaxOverflow(){const t=this._cachedMeta,i=t.data||[];if(!this.options.showLine){let o=0;for(let l=i.length-1;l>=0;--l)o=Math.max(o,i[l].size(this.resolveDataElementOptions(l))/2);return o>0&&o}const s=t.dataset,n=s.options&&s.options.borderWidth||0;if(!i.length)return n;const a=i[0].size(this.resolveDataElementOptions(0)),r=i[i.length-1].size(this.resolveDataElementOptions(i.length-1));return Math.max(n,a,r)/2}}B(oi,"id","scatter"),B(oi,"defaults",{datasetElementType:!1,dataElementType:"point",showLine:!1,fill:!1}),B(oi,"overrides",{interaction:{mode:"point"},scales:{x:{type:"linear"},y:{type:"linear"}}});var Nl=Object.freeze({__proto__:null,BarController:si,BubbleController:ni,DoughnutController:Zt,LineController:ai,PieController:ts,PolarAreaController:Le,RadarController:ri,ScatterController:oi});function Qt(){throw new Error("This method is not implemented: Check that a complete date adapter is provided.")}class Es{constructor(t){B(this,"options");this.options=t||{}}static override(t){Object.assign(Es.prototype,t)}init(){}formats(){return Qt()}parse(){return Qt()}format(){return Qt()}add(){return Qt()}diff(){return Qt()}startOf(){return Qt()}endOf(){return Qt()}}var Hl={_date:Es};function Vl(e,t,i,s){const{controller:n,data:a,_sorted:r}=e,o=n._cachedMeta.iScale,l=e.dataset&&e.dataset.options?e.dataset.options.spanGaps:null;if(o&&t===o.axis&&t!=="r"&&r&&a.length){const d=o._reversePixels?ho:Lt;if(s){if(n._sharedOptions){const c=a[0],u=typeof c.getRange=="function"&&c.getRange(t);if(u){const h=d(a,t,i-u),m=d(a,t,i+u);return{lo:h.lo,hi:m.hi}}}}else{const c=d(a,t,i);if(l){const{vScale:u}=n._cachedMeta,{_parsed:h}=e,m=h.slice(0,c.lo+1).reverse().findIndex(g=>!F(g[u.axis]));c.lo-=Math.max(0,m);const p=h.slice(c.hi).findIndex(g=>!F(g[u.axis]));c.hi+=Math.max(0,p)}return c}}return{lo:0,hi:a.length-1}}function Si(e,t,i,s,n){const a=e.getSortedVisibleDatasetMetas(),r=i[t];for(let o=0,l=a.length;o<l;++o){const{index:d,data:c}=a[o],{lo:u,hi:h}=Vl(a[o],t,r,n);for(let m=u;m<=h;++m){const p=c[m];p.skip||s(p,d,m)}}}function Wl(e){const t=e.indexOf("x")!==-1,i=e.indexOf("y")!==-1;return function(s,n){const a=t?Math.abs(s.x-n.x):0,r=i?Math.abs(s.y-n.y):0;return Math.sqrt(Math.pow(a,2)+Math.pow(r,2))}}function Ni(e,t,i,s,n){const a=[];return!n&&!e.isPointInArea(t)||Si(e,i,t,function(o,l,d){!n&&!Bt(o,e.chartArea,0)||o.inRange(t.x,t.y,s)&&a.push({element:o,datasetIndex:l,index:d})},!0),a}function Ul(e,t,i,s){let n=[];function a(r,o,l){const{startAngle:d,endAngle:c}=r.getProps(["startAngle","endAngle"],s),{angle:u}=va(r,{x:t.x,y:t.y});Pe(u,d,c)&&n.push({element:r,datasetIndex:o,index:l})}return Si(e,i,t,a),n}function Yl(e,t,i,s,n,a){let r=[];const o=Wl(i);let l=Number.POSITIVE_INFINITY;function d(c,u,h){const m=c.inRange(t.x,t.y,n);if(s&&!m)return;const p=c.getCenterPoint(n);if(!(!!a||e.isPointInArea(p))&&!m)return;const f=o(t,p);f<l?(r=[{element:c,datasetIndex:u,index:h}],l=f):f===l&&r.push({element:c,datasetIndex:u,index:h})}return Si(e,i,t,d),r}function Hi(e,t,i,s,n,a){return!a&&!e.isPointInArea(t)?[]:i==="r"&&!s?Ul(e,t,i,n):Yl(e,t,i,s,n,a)}function yn(e,t,i,s,n){const a=[],r=i==="x"?"inXRange":"inYRange";let o=!1;return Si(e,i,t,(l,d,c)=>{l[r]&&l[r](t[i],n)&&(a.push({element:l,datasetIndex:d,index:c}),o=o||l.inRange(t.x,t.y,n))}),s&&!o?[]:a}var Xl={modes:{index(e,t,i,s){const n=Jt(t,e),a=i.axis||"x",r=i.includeInvisible||!1,o=i.intersect?Ni(e,n,a,s,r):Hi(e,n,a,!1,s,r),l=[];return o.length?(e.getSortedVisibleDatasetMetas().forEach(d=>{const c=o[0].index,u=d.data[c];u&&!u.skip&&l.push({element:u,datasetIndex:d.index,index:c})}),l):[]},dataset(e,t,i,s){const n=Jt(t,e),a=i.axis||"xy",r=i.includeInvisible||!1;let o=i.intersect?Ni(e,n,a,s,r):Hi(e,n,a,!1,s,r);if(o.length>0){const l=o[0].datasetIndex,d=e.getDatasetMeta(l).data;o=[];for(let c=0;c<d.length;++c)o.push({element:d[c],datasetIndex:l,index:c})}return o},point(e,t,i,s){const n=Jt(t,e),a=i.axis||"xy",r=i.includeInvisible||!1;return Ni(e,n,a,s,r)},nearest(e,t,i,s){const n=Jt(t,e),a=i.axis||"xy",r=i.includeInvisible||!1;return Hi(e,n,a,i.intersect,s,r)},x(e,t,i,s){const n=Jt(t,e);return yn(e,n,"x",i.intersect,s)},y(e,t,i,s){const n=Jt(t,e);return yn(e,n,"y",i.intersect,s)}}};const Va=["left","top","right","bottom"];function ye(e,t){return e.filter(i=>i.pos===t)}function vn(e,t){return e.filter(i=>Va.indexOf(i.pos)===-1&&i.box.axis===t)}function ve(e,t){return e.sort((i,s)=>{const n=t?s:i,a=t?i:s;return n.weight===a.weight?n.index-a.index:n.weight-a.weight})}function Ql(e){const t=[];let i,s,n,a,r,o;for(i=0,s=(e||[]).length;i<s;++i)n=e[i],{position:a,options:{stack:r,stackWeight:o=1}}=n,t.push({index:i,box:n,pos:a,horizontal:n.isHorizontal(),weight:n.weight,stack:r&&a+r,stackWeight:o});return t}function Kl(e){const t={};for(const i of e){const{stack:s,pos:n,stackWeight:a}=i;if(!s||!Va.includes(n))continue;const r=t[s]||(t[s]={count:0,placed:0,weight:0,size:0});r.count++,r.weight+=a}return t}function Jl(e,t){const i=Kl(e),{vBoxMaxWidth:s,hBoxMaxHeight:n}=t;let a,r,o;for(a=0,r=e.length;a<r;++a){o=e[a];const{fullSize:l}=o.box,d=i[o.stack],c=d&&o.stackWeight/d.weight;o.horizontal?(o.width=c?c*s:l&&t.availableWidth,o.height=n):(o.width=s,o.height=c?c*n:l&&t.availableHeight)}return i}function Gl(e){const t=Ql(e),i=ve(t.filter(d=>d.box.fullSize),!0),s=ve(ye(t,"left"),!0),n=ve(ye(t,"right")),a=ve(ye(t,"top"),!0),r=ve(ye(t,"bottom")),o=vn(t,"x"),l=vn(t,"y");return{fullSize:i,leftAndTop:s.concat(a),rightAndBottom:n.concat(l).concat(r).concat(o),chartArea:ye(t,"chartArea"),vertical:s.concat(n).concat(l),horizontal:a.concat(r).concat(o)}}function xn(e,t,i,s){return Math.max(e[i],t[i])+Math.max(e[s],t[s])}function Wa(e,t){e.top=Math.max(e.top,t.top),e.left=Math.max(e.left,t.left),e.bottom=Math.max(e.bottom,t.bottom),e.right=Math.max(e.right,t.right)}function Zl(e,t,i,s){const{pos:n,box:a}=i,r=e.maxPadding;if(!H(n)){i.size&&(e[n]-=i.size);const u=s[i.stack]||{size:0,count:1};u.size=Math.max(u.size,i.horizontal?a.height:a.width),i.size=u.size/u.count,e[n]+=i.size}a.getPadding&&Wa(r,a.getPadding());const o=Math.max(0,t.outerWidth-xn(r,e,"left","right")),l=Math.max(0,t.outerHeight-xn(r,e,"top","bottom")),d=o!==e.w,c=l!==e.h;return e.w=o,e.h=l,i.horizontal?{same:d,other:c}:{same:c,other:d}}function td(e){const t=e.maxPadding;function i(s){const n=Math.max(t[s]-e[s],0);return e[s]+=n,n}e.y+=i("top"),e.x+=i("left"),i("right"),i("bottom")}function ed(e,t){const i=t.maxPadding;function s(n){const a={left:0,top:0,right:0,bottom:0};return n.forEach(r=>{a[r]=Math.max(t[r],i[r])}),a}return s(e?["left","right"]:["top","bottom"])}function $e(e,t,i,s){const n=[];let a,r,o,l,d,c;for(a=0,r=e.length,d=0;a<r;++a){o=e[a],l=o.box,l.update(o.width||t.w,o.height||t.h,ed(o.horizontal,t));const{same:u,other:h}=Zl(t,i,o,s);d|=u&&n.length,c=c||h,l.fullSize||n.push(o)}return d&&$e(n,t,i,s)||c}function Qe(e,t,i,s,n){e.top=i,e.left=t,e.right=t+s,e.bottom=i+n,e.width=s,e.height=n}function wn(e,t,i,s){const n=i.padding;let{x:a,y:r}=t;for(const o of e){const l=o.box,d=s[o.stack]||{placed:0,weight:1},c=o.stackWeight/d.weight||1;if(o.horizontal){const u=t.w*c,h=d.size||l.height;je(d.start)&&(r=d.start),l.fullSize?Qe(l,n.left,r,i.outerWidth-n.right-n.left,h):Qe(l,t.left+d.placed,r,u,h),d.start=r,d.placed+=u,r=l.bottom}else{const u=t.h*c,h=d.size||l.width;je(d.start)&&(a=d.start),l.fullSize?Qe(l,a,n.top,h,i.outerHeight-n.bottom-n.top):Qe(l,a,t.top+d.placed,h,u),d.start=a,d.placed+=u,a=l.right}}t.x=a,t.y=r}var dt={addBox(e,t){e.boxes||(e.boxes=[]),t.fullSize=t.fullSize||!1,t.position=t.position||"top",t.weight=t.weight||0,t._layers=t._layers||function(){return[{z:0,draw(i){t.draw(i)}}]},e.boxes.push(t)},removeBox(e,t){const i=e.boxes?e.boxes.indexOf(t):-1;i!==-1&&e.boxes.splice(i,1)},configure(e,t,i){t.fullSize=i.fullSize,t.position=i.position,t.weight=i.weight},update(e,t,i,s){if(!e)return;const n=ct(e.options.layout.padding),a=Math.max(t-n.width,0),r=Math.max(i-n.height,0),o=Gl(e.boxes),l=o.vertical,d=o.horizontal;X(e.boxes,g=>{typeof g.beforeLayout=="function"&&g.beforeLayout()});const c=l.reduce((g,f)=>f.box.options&&f.box.options.display===!1?g:g+1,0)||1,u=Object.freeze({outerWidth:t,outerHeight:i,padding:n,availableWidth:a,availableHeight:r,vBoxMaxWidth:a/2/c,hBoxMaxHeight:r/2}),h=Object.assign({},n);Wa(h,ct(s));const m=Object.assign({maxPadding:h,w:a,h:r,x:n.left,y:n.top},n),p=Jl(l.concat(d),u);$e(o.fullSize,m,u,p),$e(l,m,u,p),$e(d,m,u,p)&&$e(l,m,u,p),td(m),wn(o.leftAndTop,m,u,p),m.x+=m.w,m.y+=m.h,wn(o.rightAndBottom,m,u,p),e.chartArea={left:m.left,top:m.top,right:m.left+m.w,bottom:m.top+m.h,height:m.h,width:m.w},X(o.chartArea,g=>{const f=g.box;Object.assign(f,e.chartArea),f.update(m.w,m.h,{left:0,top:0,right:0,bottom:0})})}};class Ua{acquireContext(t,i){}releaseContext(t){return!1}addEventListener(t,i,s){}removeEventListener(t,i,s){}getDevicePixelRatio(){return 1}getMaximumSize(t,i,s,n){return i=Math.max(0,i||t.width),s=s||t.height,{width:i,height:Math.max(0,n?Math.floor(i/n):s)}}isAttached(t){return!0}updateConfig(t){}}class id extends Ua{acquireContext(t){return t&&t.getContext&&t.getContext("2d")||null}updateConfig(t){t.options.animation=!1}}const li="$chartjs",sd={touchstart:"mousedown",touchmove:"mousemove",touchend:"mouseup",pointerenter:"mouseenter",pointerdown:"mousedown",pointermove:"mousemove",pointerup:"mouseup",pointerleave:"mouseout",pointerout:"mouseout"},zn=e=>e===null||e==="";function nd(e,t){const i=e.style,s=e.getAttribute("height"),n=e.getAttribute("width");if(e[li]={initial:{height:s,width:n,style:{display:i.display,height:i.height,width:i.width}}},i.display=i.display||"block",i.boxSizing=i.boxSizing||"border-box",zn(n)){const a=an(e,"width");a!==void 0&&(e.width=a)}if(zn(s))if(e.style.height==="")e.height=e.width/(t||2);else{const a=an(e,"height");a!==void 0&&(e.height=a)}return e}const Ya=al?{passive:!0}:!1;function ad(e,t,i){e&&e.addEventListener(t,i,Ya)}function rd(e,t,i){e&&e.canvas&&e.canvas.removeEventListener(t,i,Ya)}function od(e,t){const i=sd[e.type]||e.type,{x:s,y:n}=Jt(e,t);return{type:i,chart:t,native:e,x:s!==void 0?s:null,y:n!==void 0?n:null}}function bi(e,t){for(const i of e)if(i===t||i.contains(t))return!0}function ld(e,t,i){const s=e.canvas,n=new MutationObserver(a=>{let r=!1;for(const o of a)r=r||bi(o.addedNodes,s),r=r&&!bi(o.removedNodes,s);r&&i()});return n.observe(document,{childList:!0,subtree:!0}),n}function dd(e,t,i){const s=e.canvas,n=new MutationObserver(a=>{let r=!1;for(const o of a)r=r||bi(o.removedNodes,s),r=r&&!bi(o.addedNodes,s);r&&i()});return n.observe(document,{childList:!0,subtree:!0}),n}const Oe=new Map;let kn=0;function Xa(){const e=window.devicePixelRatio;e!==kn&&(kn=e,Oe.forEach((t,i)=>{i.currentDevicePixelRatio!==e&&t()}))}function cd(e,t){Oe.size||window.addEventListener("resize",Xa),Oe.set(e,t)}function ud(e){Oe.delete(e),Oe.size||window.removeEventListener("resize",Xa)}function hd(e,t,i){const s=e.canvas,n=s&&Ts(s);if(!n)return;const a=ka((o,l)=>{const d=n.clientWidth;i(o,l),d<n.clientWidth&&i()},window),r=new ResizeObserver(o=>{const l=o[0],d=l.contentRect.width,c=l.contentRect.height;d===0&&c===0||a(d,c)});return r.observe(n),cd(e,a),r}function Vi(e,t,i){i&&i.disconnect(),t==="resize"&&ud(e)}function gd(e,t,i){const s=e.canvas,n=ka(a=>{e.ctx!==null&&i(od(a,e))},e);return ad(s,t,n),n}class md extends Ua{acquireContext(t,i){const s=t&&t.getContext&&t.getContext("2d");return s&&s.canvas===t?(nd(t,i),s):null}releaseContext(t){const i=t.canvas;if(!i[li])return!1;const s=i[li].initial;["height","width"].forEach(a=>{const r=s[a];F(r)?i.removeAttribute(a):i.setAttribute(a,r)});const n=s.style||{};return Object.keys(n).forEach(a=>{i.style[a]=n[a]}),i.width=i.width,delete i[li],!0}addEventListener(t,i,s){this.removeEventListener(t,i);const n=t.$proxies||(t.$proxies={}),r={attach:ld,detach:dd,resize:hd}[i]||gd;n[i]=r(t,i,s)}removeEventListener(t,i){const s=t.$proxies||(t.$proxies={}),n=s[i];if(!n)return;({attach:Vi,detach:Vi,resize:Vi}[i]||rd)(t,i,n),s[i]=void 0}getDevicePixelRatio(){return window.devicePixelRatio}getMaximumSize(t,i,s,n){return nl(t,i,s,n)}isAttached(t){const i=t&&Ts(t);return!!(i&&i.isConnected)}}function pd(e){return!Ss()||typeof OffscreenCanvas<"u"&&e instanceof OffscreenCanvas?id:md}class zt{constructor(){B(this,"x");B(this,"y");B(this,"active",!1);B(this,"options");B(this,"$animations")}tooltipPosition(t){const{x:i,y:s}=this.getProps(["x","y"],t);return{x:i,y:s}}hasValue(){return me(this.x)&&me(this.y)}getProps(t,i){const s=this.$animations;if(!i||!s)return this;const n={};return t.forEach(a=>{n[a]=s[a]&&s[a].active()?s[a]._to:this[a]}),n}}B(zt,"defaults",{}),B(zt,"defaultRoutes");function fd(e,t){const i=e.options.ticks,s=bd(e),n=Math.min(i.maxTicksLimit||s,s),a=i.major.enabled?vd(t):[],r=a.length,o=a[0],l=a[r-1],d=[];if(r>n)return xd(t,d,a,r/n),d;const c=yd(a,t,n);if(r>0){let u,h;const m=r>1?Math.round((l-o)/(r-1)):null;for(Ke(t,d,c,F(m)?0:o-m,o),u=0,h=r-1;u<h;u++)Ke(t,d,c,a[u],a[u+1]);return Ke(t,d,c,l,F(m)?t.length:l+m),d}return Ke(t,d,c),d}function bd(e){const t=e.options.offset,i=e._tickSize(),s=e._length/i+(t?0:1),n=e._maxLength/i;return Math.floor(Math.min(s,n))}function yd(e,t,i){const s=wd(e),n=t.length/i;if(!s)return Math.max(n,1);const a=ro(s);for(let r=0,o=a.length-1;r<o;r++){const l=a[r];if(l>n)return l}return Math.max(n,1)}function vd(e){const t=[];let i,s;for(i=0,s=e.length;i<s;i++)e[i].major&&t.push(i);return t}function xd(e,t,i,s){let n=0,a=i[0],r;for(s=Math.ceil(s),r=0;r<e.length;r++)r===a&&(t.push(e[r]),n++,a=i[n*s])}function Ke(e,t,i,s,n){const a=D(s,0),r=Math.min(D(n,e.length),e.length);let o=0,l,d,c;for(i=Math.ceil(i),n&&(l=n-s,i=l/Math.floor(l/i)),c=a;c<0;)o++,c=Math.round(a+o*i);for(d=Math.max(a,0);d<r;d++)d===c&&(t.push(e[d]),o++,c=Math.round(a+o*i))}function wd(e){const t=e.length;let i,s;if(t<2)return!1;for(s=e[0],i=1;i<t;++i)if(e[i]-e[i-1]!==s)return!1;return s}const zd=e=>e==="left"?"right":e==="right"?"left":e,$n=(e,t,i)=>t==="top"||t==="left"?e[t]+i:e[t]-i,_n=(e,t)=>Math.min(t||e,e);function Sn(e,t){const i=[],s=e.length/t,n=e.length;let a=0;for(;a<n;a+=s)i.push(e[Math.floor(a)]);return i}function kd(e,t,i){const s=e.ticks.length,n=Math.min(t,s-1),a=e._startPixel,r=e._endPixel,o=1e-6;let l=e.getPixelForTick(n),d;if(!(i&&(s===1?d=Math.max(l-a,r-l):t===0?d=(e.getPixelForTick(1)-l)/2:d=(l-e.getPixelForTick(n-1))/2,l+=n<t?d:-d,l<a-o||l>r+o)))return l}function $d(e,t){X(e,i=>{const s=i.gc,n=s.length/2;let a;if(n>t){for(a=0;a<n;++a)delete i.data[s[a]];s.splice(0,n)}})}function xe(e){return e.drawTicks?e.tickLength:0}function Tn(e,t){if(!e.display)return 0;const i=nt(e.font,t),s=ct(e.padding);return(J(e.text)?e.text.length:1)*i.lineHeight+s.height}function _d(e,t){return Wt(e,{scale:t,type:"scale"})}function Sd(e,t,i){return Wt(e,{tick:i,index:t,type:"tick"})}function Td(e,t,i){let s=xs(e);return(i&&t!=="right"||!i&&t==="right")&&(s=zd(s)),s}function Ed(e,t,i,s){const{top:n,left:a,bottom:r,right:o,chart:l}=e,{chartArea:d,scales:c}=l;let u=0,h,m,p;const g=r-n,f=o-a;if(e.isHorizontal()){if(m=ot(s,a,o),H(i)){const y=Object.keys(i)[0],b=i[y];p=c[y].getPixelForValue(b)+g-t}else i==="center"?p=(d.bottom+d.top)/2+g-t:p=$n(e,i,t);h=o-a}else{if(H(i)){const y=Object.keys(i)[0],b=i[y];m=c[y].getPixelForValue(b)-f+t}else i==="center"?m=(d.left+d.right)/2-f+t:m=$n(e,i,t);p=ot(s,r,n),u=i==="left"?-it:it}return{titleX:m,titleY:p,maxWidth:h,rotation:u}}class oe extends zt{constructor(t){super(),this.id=t.id,this.type=t.type,this.options=void 0,this.ctx=t.ctx,this.chart=t.chart,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.width=void 0,this.height=void 0,this._margins={left:0,right:0,top:0,bottom:0},this.maxWidth=void 0,this.maxHeight=void 0,this.paddingTop=void 0,this.paddingBottom=void 0,this.paddingLeft=void 0,this.paddingRight=void 0,this.axis=void 0,this.labelRotation=void 0,this.min=void 0,this.max=void 0,this._range=void 0,this.ticks=[],this._gridLineItems=null,this._labelItems=null,this._labelSizes=null,this._length=0,this._maxLength=0,this._longestTextCache={},this._startPixel=void 0,this._endPixel=void 0,this._reversePixels=!1,this._userMax=void 0,this._userMin=void 0,this._suggestedMax=void 0,this._suggestedMin=void 0,this._ticksLength=0,this._borderValue=0,this._cache={},this._dataLimitsCached=!1,this.$context=void 0}init(t){this.options=t.setContext(this.getContext()),this.axis=t.axis,this._userMin=this.parse(t.min),this._userMax=this.parse(t.max),this._suggestedMin=this.parse(t.suggestedMin),this._suggestedMax=this.parse(t.suggestedMax)}parse(t,i){return t}getUserBounds(){let{_userMin:t,_userMax:i,_suggestedMin:s,_suggestedMax:n}=this;return t=bt(t,Number.POSITIVE_INFINITY),i=bt(i,Number.NEGATIVE_INFINITY),s=bt(s,Number.POSITIVE_INFINITY),n=bt(n,Number.NEGATIVE_INFINITY),{min:bt(t,s),max:bt(i,n),minDefined:tt(t),maxDefined:tt(i)}}getMinMax(t){let{min:i,max:s,minDefined:n,maxDefined:a}=this.getUserBounds(),r;if(n&&a)return{min:i,max:s};const o=this.getMatchingVisibleMetas();for(let l=0,d=o.length;l<d;++l)r=o[l].controller.getMinMax(this,t),n||(i=Math.min(i,r.min)),a||(s=Math.max(s,r.max));return i=a&&i>s?s:i,s=n&&i>s?i:s,{min:bt(i,bt(s,i)),max:bt(s,bt(i,s))}}getPadding(){return{left:this.paddingLeft||0,top:this.paddingTop||0,right:this.paddingRight||0,bottom:this.paddingBottom||0}}getTicks(){return this.ticks}getLabels(){const t=this.chart.data;return this.options.labels||(this.isHorizontal()?t.xLabels:t.yLabels)||t.labels||[]}getLabelItems(t=this.chart.chartArea){return this._labelItems||(this._labelItems=this._computeLabelItems(t))}beforeLayout(){this._cache={},this._dataLimitsCached=!1}beforeUpdate(){Q(this.options.beforeUpdate,[this])}update(t,i,s){const{beginAtZero:n,grace:a,ticks:r}=this.options,o=r.sampleSize;this.beforeUpdate(),this.maxWidth=t,this.maxHeight=i,this._margins=s=Object.assign({left:0,right:0,top:0,bottom:0},s),this.ticks=null,this._labelSizes=null,this._gridLineItems=null,this._labelItems=null,this.beforeSetDimensions(),this.setDimensions(),this.afterSetDimensions(),this._maxLength=this.isHorizontal()?this.width+s.left+s.right:this.height+s.top+s.bottom,this._dataLimitsCached||(this.beforeDataLimits(),this.determineDataLimits(),this.afterDataLimits(),this._range=Po(this,a,n),this._dataLimitsCached=!0),this.beforeBuildTicks(),this.ticks=this.buildTicks()||[],this.afterBuildTicks();const l=o<this.ticks.length;this._convertTicksToLabels(l?Sn(this.ticks,o):this.ticks),this.configure(),this.beforeCalculateLabelRotation(),this.calculateLabelRotation(),this.afterCalculateLabelRotation(),r.display&&(r.autoSkip||r.source==="auto")&&(this.ticks=fd(this,this.ticks),this._labelSizes=null,this.afterAutoSkip()),l&&this._convertTicksToLabels(this.ticks),this.beforeFit(),this.fit(),this.afterFit(),this.afterUpdate()}configure(){let t=this.options.reverse,i,s;this.isHorizontal()?(i=this.left,s=this.right):(i=this.top,s=this.bottom,t=!t),this._startPixel=i,this._endPixel=s,this._reversePixels=t,this._length=s-i,this._alignToPixels=this.options.alignToPixels}afterUpdate(){Q(this.options.afterUpdate,[this])}beforeSetDimensions(){Q(this.options.beforeSetDimensions,[this])}setDimensions(){this.isHorizontal()?(this.width=this.maxWidth,this.left=0,this.right=this.width):(this.height=this.maxHeight,this.top=0,this.bottom=this.height),this.paddingLeft=0,this.paddingTop=0,this.paddingRight=0,this.paddingBottom=0}afterSetDimensions(){Q(this.options.afterSetDimensions,[this])}_callHooks(t){this.chart.notifyPlugins(t,this.getContext()),Q(this.options[t],[this])}beforeDataLimits(){this._callHooks("beforeDataLimits")}determineDataLimits(){}afterDataLimits(){this._callHooks("afterDataLimits")}beforeBuildTicks(){this._callHooks("beforeBuildTicks")}buildTicks(){return[]}afterBuildTicks(){this._callHooks("afterBuildTicks")}beforeTickToLabelConversion(){Q(this.options.beforeTickToLabelConversion,[this])}generateTickLabels(t){const i=this.options.ticks;let s,n,a;for(s=0,n=t.length;s<n;s++)a=t[s],a.label=Q(i.callback,[a.value,s,t],this)}afterTickToLabelConversion(){Q(this.options.afterTickToLabelConversion,[this])}beforeCalculateLabelRotation(){Q(this.options.beforeCalculateLabelRotation,[this])}calculateLabelRotation(){const t=this.options,i=t.ticks,s=_n(this.ticks.length,t.ticks.maxTicksLimit),n=i.minRotation||0,a=i.maxRotation;let r=n,o,l,d;if(!this._isVisible()||!i.display||n>=a||s<=1||!this.isHorizontal()){this.labelRotation=n;return}const c=this._getLabelSizes(),u=c.widest.width,h=c.highest.height,m=at(this.chart.width-u,0,this.maxWidth);o=t.offset?this.maxWidth/s:m/(s-1),u+6>o&&(o=m/(s-(t.offset?.5:1)),l=this.maxHeight-xe(t.grid)-i.padding-Tn(t.title,this.chart.options.font),d=Math.sqrt(u*u+h*h),r=ys(Math.min(Math.asin(at((c.highest.height+6)/o,-1,1)),Math.asin(at(l/d,-1,1))-Math.asin(at(h/d,-1,1)))),r=Math.max(n,Math.min(a,r))),this.labelRotation=r}afterCalculateLabelRotation(){Q(this.options.afterCalculateLabelRotation,[this])}afterAutoSkip(){}beforeFit(){Q(this.options.beforeFit,[this])}fit(){const t={width:0,height:0},{chart:i,options:{ticks:s,title:n,grid:a}}=this,r=this._isVisible(),o=this.isHorizontal();if(r){const l=Tn(n,i.options.font);if(o?(t.width=this.maxWidth,t.height=xe(a)+l):(t.height=this.maxHeight,t.width=xe(a)+l),s.display&&this.ticks.length){const{first:d,last:c,widest:u,highest:h}=this._getLabelSizes(),m=s.padding*2,p=xt(this.labelRotation),g=Math.cos(p),f=Math.sin(p);if(o){const y=s.mirror?0:f*u.width+g*h.height;t.height=Math.min(this.maxHeight,t.height+y+m)}else{const y=s.mirror?0:g*u.width+f*h.height;t.width=Math.min(this.maxWidth,t.width+y+m)}this._calculatePadding(d,c,f,g)}}this._handleMargins(),o?(this.width=this._length=i.width-this._margins.left-this._margins.right,this.height=t.height):(this.width=t.width,this.height=this._length=i.height-this._margins.top-this._margins.bottom)}_calculatePadding(t,i,s,n){const{ticks:{align:a,padding:r},position:o}=this.options,l=this.labelRotation!==0,d=o!=="top"&&this.axis==="x";if(this.isHorizontal()){const c=this.getPixelForTick(0)-this.left,u=this.right-this.getPixelForTick(this.ticks.length-1);let h=0,m=0;l?d?(h=n*t.width,m=s*i.height):(h=s*t.height,m=n*i.width):a==="start"?m=i.width:a==="end"?h=t.width:a!=="inner"&&(h=t.width/2,m=i.width/2),this.paddingLeft=Math.max((h-c+r)*this.width/(this.width-c),0),this.paddingRight=Math.max((m-u+r)*this.width/(this.width-u),0)}else{let c=i.height/2,u=t.height/2;a==="start"?(c=0,u=t.height):a==="end"&&(c=i.height,u=0),this.paddingTop=c+r,this.paddingBottom=u+r}}_handleMargins(){this._margins&&(this._margins.left=Math.max(this.paddingLeft,this._margins.left),this._margins.top=Math.max(this.paddingTop,this._margins.top),this._margins.right=Math.max(this.paddingRight,this._margins.right),this._margins.bottom=Math.max(this.paddingBottom,this._margins.bottom))}afterFit(){Q(this.options.afterFit,[this])}isHorizontal(){const{axis:t,position:i}=this.options;return i==="top"||i==="bottom"||t==="x"}isFullSize(){return this.options.fullSize}_convertTicksToLabels(t){this.beforeTickToLabelConversion(),this.generateTickLabels(t);let i,s;for(i=0,s=t.length;i<s;i++)F(t[i].label)&&(t.splice(i,1),s--,i--);this.afterTickToLabelConversion()}_getLabelSizes(){let t=this._labelSizes;if(!t){const i=this.options.ticks.sampleSize;let s=this.ticks;i<s.length&&(s=Sn(s,i)),this._labelSizes=t=this._computeLabelSizes(s,s.length,this.options.ticks.maxTicksLimit)}return t}_computeLabelSizes(t,i,s){const{ctx:n,_longestTextCache:a}=this,r=[],o=[],l=Math.floor(i/_n(i,s));let d=0,c=0,u,h,m,p,g,f,y,b,x,v,w;for(u=0;u<i;u+=l){if(p=t[u].label,g=this._resolveTickFontOptions(u),n.font=f=g.string,y=a[f]=a[f]||{data:{},gc:[]},b=g.lineHeight,x=v=0,!F(p)&&!J(p))x=pi(n,y.data,y.gc,x,p),v=b;else if(J(p))for(h=0,m=p.length;h<m;++h)w=p[h],!F(w)&&!J(w)&&(x=pi(n,y.data,y.gc,x,w),v+=b);r.push(x),o.push(v),d=Math.max(x,d),c=Math.max(v,c)}$d(a,i);const z=r.indexOf(d),E=o.indexOf(c),_=S=>({width:r[S]||0,height:o[S]||0});return{first:_(0),last:_(i-1),widest:_(z),highest:_(E),widths:r,heights:o}}getLabelForValue(t){return t}getPixelForValue(t,i){return NaN}getValueForPixel(t){}getPixelForTick(t){const i=this.ticks;return t<0||t>i.length-1?null:this.getPixelForValue(i[t].value)}getPixelForDecimal(t){this._reversePixels&&(t=1-t);const i=this._startPixel+t*this._length;return uo(this._alignToPixels?Xt(this.chart,i,0):i)}getDecimalForPixel(t){const i=(t-this._startPixel)/this._length;return this._reversePixels?1-i:i}getBasePixel(){return this.getPixelForValue(this.getBaseValue())}getBaseValue(){const{min:t,max:i}=this;return t<0&&i<0?i:t>0&&i>0?t:0}getContext(t){const i=this.ticks||[];if(t>=0&&t<i.length){const s=i[t];return s.$context||(s.$context=Sd(this.getContext(),t,s))}return this.$context||(this.$context=_d(this.chart.getContext(),this))}_tickSize(){const t=this.options.ticks,i=xt(this.labelRotation),s=Math.abs(Math.cos(i)),n=Math.abs(Math.sin(i)),a=this._getLabelSizes(),r=t.autoSkipPadding||0,o=a?a.widest.width+r:0,l=a?a.highest.height+r:0;return this.isHorizontal()?l*s>o*n?o/s:l/n:l*n<o*s?l/s:o/n}_isVisible(){const t=this.options.display;return t!=="auto"?!!t:this.getMatchingVisibleMetas().length>0}_computeGridLineItems(t){const i=this.axis,s=this.chart,n=this.options,{grid:a,position:r,border:o}=n,l=a.offset,d=this.isHorizontal(),u=this.ticks.length+(l?1:0),h=xe(a),m=[],p=o.setContext(this.getContext()),g=p.display?p.width:0,f=g/2,y=function(A){return Xt(s,A,g)};let b,x,v,w,z,E,_,S,T,M,j,V;if(r==="top")b=y(this.bottom),E=this.bottom-h,S=b-f,M=y(t.top)+f,V=t.bottom;else if(r==="bottom")b=y(this.top),M=t.top,V=y(t.bottom)-f,E=b+f,S=this.top+h;else if(r==="left")b=y(this.right),z=this.right-h,_=b-f,T=y(t.left)+f,j=t.right;else if(r==="right")b=y(this.left),T=t.left,j=y(t.right)-f,z=b+f,_=this.left+h;else if(i==="x"){if(r==="center")b=y((t.top+t.bottom)/2+.5);else if(H(r)){const A=Object.keys(r)[0],P=r[A];b=y(this.chart.scales[A].getPixelForValue(P))}M=t.top,V=t.bottom,E=b+f,S=E+h}else if(i==="y"){if(r==="center")b=y((t.left+t.right)/2);else if(H(r)){const A=Object.keys(r)[0],P=r[A];b=y(this.chart.scales[A].getPixelForValue(P))}z=b-f,_=z-h,T=t.left,j=t.right}const Z=D(n.ticks.maxTicksLimit,u),q=Math.max(1,Math.ceil(u/Z));for(x=0;x<u;x+=q){const A=this.getContext(x),P=a.setContext(A),N=o.setContext(A),R=P.lineWidth,et=P.color,pt=N.dash||[],st=N.dashOffset,U=P.tickWidth,rt=P.tickColor,ut=P.tickBorderDash||[],ft=P.tickBorderDashOffset;v=kd(this,x,l),v!==void 0&&(w=Xt(s,v,R),d?z=_=T=j=w:E=S=M=V=w,m.push({tx1:z,ty1:E,tx2:_,ty2:S,x1:T,y1:M,x2:j,y2:V,width:R,color:et,borderDash:pt,borderDashOffset:st,tickWidth:U,tickColor:rt,tickBorderDash:ut,tickBorderDashOffset:ft}))}return this._ticksLength=u,this._borderValue=b,m}_computeLabelItems(t){const i=this.axis,s=this.options,{position:n,ticks:a}=s,r=this.isHorizontal(),o=this.ticks,{align:l,crossAlign:d,padding:c,mirror:u}=a,h=xe(s.grid),m=h+c,p=u?-c:m,g=-xt(this.labelRotation),f=[];let y,b,x,v,w,z,E,_,S,T,M,j,V="middle";if(n==="top")z=this.bottom-p,E=this._getXAxisLabelAlignment();else if(n==="bottom")z=this.top+p,E=this._getXAxisLabelAlignment();else if(n==="left"){const q=this._getYAxisLabelAlignment(h);E=q.textAlign,w=q.x}else if(n==="right"){const q=this._getYAxisLabelAlignment(h);E=q.textAlign,w=q.x}else if(i==="x"){if(n==="center")z=(t.top+t.bottom)/2+m;else if(H(n)){const q=Object.keys(n)[0],A=n[q];z=this.chart.scales[q].getPixelForValue(A)+m}E=this._getXAxisLabelAlignment()}else if(i==="y"){if(n==="center")w=(t.left+t.right)/2-m;else if(H(n)){const q=Object.keys(n)[0],A=n[q];w=this.chart.scales[q].getPixelForValue(A)}E=this._getYAxisLabelAlignment(h).textAlign}i==="y"&&(l==="start"?V="top":l==="end"&&(V="bottom"));const Z=this._getLabelSizes();for(y=0,b=o.length;y<b;++y){x=o[y],v=x.label;const q=a.setContext(this.getContext(y));_=this.getPixelForTick(y)+a.labelOffset,S=this._resolveTickFontOptions(y),T=S.lineHeight,M=J(v)?v.length:1;const A=M/2,P=q.color,N=q.textStrokeColor,R=q.textStrokeWidth;let et=E;r?(w=_,E==="inner"&&(y===b-1?et=this.options.reverse?"left":"right":y===0?et=this.options.reverse?"right":"left":et="center"),n==="top"?d==="near"||g!==0?j=-M*T+T/2:d==="center"?j=-Z.highest.height/2-A*T+T:j=-Z.highest.height+T/2:d==="near"||g!==0?j=T/2:d==="center"?j=Z.highest.height/2-A*T:j=Z.highest.height-M*T,u&&(j*=-1),g!==0&&!q.showLabelBackdrop&&(w+=T/2*Math.sin(g))):(z=_,j=(1-M)*T/2);let pt;if(q.showLabelBackdrop){const st=ct(q.backdropPadding),U=Z.heights[y],rt=Z.widths[y];let ut=j-st.top,ft=0-st.left;switch(V){case"middle":ut-=U/2;break;case"bottom":ut-=U;break}switch(E){case"center":ft-=rt/2;break;case"right":ft-=rt;break;case"inner":y===b-1?ft-=rt:y>0&&(ft-=rt/2);break}pt={left:ft,top:ut,width:rt+st.width,height:U+st.height,color:q.backdropColor}}f.push({label:v,font:S,textOffset:j,options:{rotation:g,color:P,strokeColor:N,strokeWidth:R,textAlign:et,textBaseline:V,translation:[w,z],backdrop:pt}})}return f}_getXAxisLabelAlignment(){const{position:t,ticks:i}=this.options;if(-xt(this.labelRotation))return t==="top"?"left":"right";let n="center";return i.align==="start"?n="left":i.align==="end"?n="right":i.align==="inner"&&(n="inner"),n}_getYAxisLabelAlignment(t){const{position:i,ticks:{crossAlign:s,mirror:n,padding:a}}=this.options,r=this._getLabelSizes(),o=t+a,l=r.widest.width;let d,c;return i==="left"?n?(c=this.right+a,s==="near"?d="left":s==="center"?(d="center",c+=l/2):(d="right",c+=l)):(c=this.right-o,s==="near"?d="right":s==="center"?(d="center",c-=l/2):(d="left",c=this.left)):i==="right"?n?(c=this.left+a,s==="near"?d="right":s==="center"?(d="center",c-=l/2):(d="left",c-=l)):(c=this.left+o,s==="near"?d="left":s==="center"?(d="center",c+=l/2):(d="right",c=this.right)):d="right",{textAlign:d,x:c}}_computeLabelArea(){if(this.options.ticks.mirror)return;const t=this.chart,i=this.options.position;if(i==="left"||i==="right")return{top:0,left:this.left,bottom:t.height,right:this.right};if(i==="top"||i==="bottom")return{top:this.top,left:0,bottom:this.bottom,right:t.width}}drawBackground(){const{ctx:t,options:{backgroundColor:i},left:s,top:n,width:a,height:r}=this;i&&(t.save(),t.fillStyle=i,t.fillRect(s,n,a,r),t.restore())}getLineWidthForValue(t){const i=this.options.grid;if(!this._isVisible()||!i.display)return 0;const n=this.ticks.findIndex(a=>a.value===t);return n>=0?i.setContext(this.getContext(n)).lineWidth:0}drawGrid(t){const i=this.options.grid,s=this.ctx,n=this._gridLineItems||(this._gridLineItems=this._computeGridLineItems(t));let a,r;const o=(l,d,c)=>{!c.width||!c.color||(s.save(),s.lineWidth=c.width,s.strokeStyle=c.color,s.setLineDash(c.borderDash||[]),s.lineDashOffset=c.borderDashOffset,s.beginPath(),s.moveTo(l.x,l.y),s.lineTo(d.x,d.y),s.stroke(),s.restore())};if(i.display)for(a=0,r=n.length;a<r;++a){const l=n[a];i.drawOnChartArea&&o({x:l.x1,y:l.y1},{x:l.x2,y:l.y2},l),i.drawTicks&&o({x:l.tx1,y:l.ty1},{x:l.tx2,y:l.ty2},{color:l.tickColor,width:l.tickWidth,borderDash:l.tickBorderDash,borderDashOffset:l.tickBorderDashOffset})}}drawBorder(){const{chart:t,ctx:i,options:{border:s,grid:n}}=this,a=s.setContext(this.getContext()),r=s.display?a.width:0;if(!r)return;const o=n.setContext(this.getContext(0)).lineWidth,l=this._borderValue;let d,c,u,h;this.isHorizontal()?(d=Xt(t,this.left,r)-r/2,c=Xt(t,this.right,o)+o/2,u=h=l):(u=Xt(t,this.top,r)-r/2,h=Xt(t,this.bottom,o)+o/2,d=c=l),i.save(),i.lineWidth=a.width,i.strokeStyle=a.color,i.beginPath(),i.moveTo(d,u),i.lineTo(c,h),i.stroke(),i.restore()}drawLabels(t){if(!this.options.ticks.display)return;const s=this.ctx,n=this._computeLabelArea();n&&ki(s,n);const a=this.getLabelItems(t);for(const r of a){const o=r.options,l=r.font,d=r.label,c=r.textOffset;re(s,d,0,c,l,o)}n&&$i(s)}drawTitle(){const{ctx:t,options:{position:i,title:s,reverse:n}}=this;if(!s.display)return;const a=nt(s.font),r=ct(s.padding),o=s.align;let l=a.lineHeight/2;i==="bottom"||i==="center"||H(i)?(l+=r.bottom,J(s.text)&&(l+=a.lineHeight*(s.text.length-1))):l+=r.top;const{titleX:d,titleY:c,maxWidth:u,rotation:h}=Ed(this,l,i,o);re(t,s.text,0,0,a,{color:s.color,maxWidth:u,rotation:h,textAlign:Td(o,i,n),textBaseline:"middle",translation:[d,c]})}draw(t){this._isVisible()&&(this.drawBackground(),this.drawGrid(t),this.drawBorder(),this.drawTitle(),this.drawLabels(t))}_layers(){const t=this.options,i=t.ticks&&t.ticks.z||0,s=D(t.grid&&t.grid.z,-1),n=D(t.border&&t.border.z,0);return!this._isVisible()||this.draw!==oe.prototype.draw?[{z:i,draw:a=>{this.draw(a)}}]:[{z:s,draw:a=>{this.drawBackground(),this.drawGrid(a),this.drawTitle()}},{z:n,draw:()=>{this.drawBorder()}},{z:i,draw:a=>{this.drawLabels(a)}}]}getMatchingVisibleMetas(t){const i=this.chart.getSortedVisibleDatasetMetas(),s=this.axis+"AxisID",n=[];let a,r;for(a=0,r=i.length;a<r;++a){const o=i[a];o[s]===this.id&&(!t||o.type===t)&&n.push(o)}return n}_resolveTickFontOptions(t){const i=this.options.ticks.setContext(this.getContext(t));return nt(i.font)}_maxDigits(){const t=this._resolveTickFontOptions(0).lineHeight;return(this.isHorizontal()?this.width:this.height)/t}}class Je{constructor(t,i,s){this.type=t,this.scope=i,this.override=s,this.items=Object.create(null)}isForType(t){return Object.prototype.isPrototypeOf.call(this.type.prototype,t.prototype)}register(t){const i=Object.getPrototypeOf(t);let s;Ad(i)&&(s=this.register(i));const n=this.items,a=t.id,r=this.scope+"."+a;if(!a)throw new Error("class does not have id: "+t);return a in n||(n[a]=t,Md(t,r,s),this.override&&G.override(t.id,t.overrides)),r}get(t){return this.items[t]}unregister(t){const i=this.items,s=t.id,n=this.scope;s in i&&delete i[s],n&&s in G[n]&&(delete G[n][s],this.override&&delete ae[s])}}function Md(e,t,i){const s=Ie(Object.create(null),[i?G.get(i):{},G.get(t),e.defaults]);G.set(t,s),e.defaultRoutes&&Cd(t,e.defaultRoutes),e.descriptors&&G.describe(t,e.descriptors)}function Cd(e,t){Object.keys(t).forEach(i=>{const s=i.split("."),n=s.pop(),a=[e].concat(s).join("."),r=t[i].split("."),o=r.pop(),l=r.join(".");G.route(a,n,l,o)})}function Ad(e){return"id"in e&&"defaults"in e}class Ld{constructor(){this.controllers=new Je(wt,"datasets",!0),this.elements=new Je(zt,"elements"),this.plugins=new Je(Object,"plugins"),this.scales=new Je(oe,"scales"),this._typedRegistries=[this.controllers,this.scales,this.elements]}add(...t){this._each("register",t)}remove(...t){this._each("unregister",t)}addControllers(...t){this._each("register",t,this.controllers)}addElements(...t){this._each("register",t,this.elements)}addPlugins(...t){this._each("register",t,this.plugins)}addScales(...t){this._each("register",t,this.scales)}getController(t){return this._get(t,this.controllers,"controller")}getElement(t){return this._get(t,this.elements,"element")}getPlugin(t){return this._get(t,this.plugins,"plugin")}getScale(t){return this._get(t,this.scales,"scale")}removeControllers(...t){this._each("unregister",t,this.controllers)}removeElements(...t){this._each("unregister",t,this.elements)}removePlugins(...t){this._each("unregister",t,this.plugins)}removeScales(...t){this._each("unregister",t,this.scales)}_each(t,i,s){[...i].forEach(n=>{const a=s||this._getRegistryForType(n);s||a.isForType(n)||a===this.plugins&&n.id?this._exec(t,a,n):X(n,r=>{const o=s||this._getRegistryForType(r);this._exec(t,o,r)})})}_exec(t,i,s){const n=bs(t);Q(s["before"+n],[],s),i[t](s),Q(s["after"+n],[],s)}_getRegistryForType(t){for(let i=0;i<this._typedRegistries.length;i++){const s=this._typedRegistries[i];if(s.isForType(t))return s}return this.plugins}_get(t,i,s){const n=i.get(t);if(n===void 0)throw new Error('"'+t+'" is not a registered '+s+".");return n}}var _t=new Ld;class Bd{constructor(){this._init=void 0}notify(t,i,s,n){if(i==="beforeInit"&&(this._init=this._createDescriptors(t,!0),this._notify(this._init,t,"install")),this._init===void 0)return;const a=n?this._descriptors(t).filter(n):this._descriptors(t),r=this._notify(a,t,i,s);return i==="afterDestroy"&&(this._notify(a,t,"stop"),this._notify(this._init,t,"uninstall"),this._init=void 0),r}_notify(t,i,s,n){n=n||{};for(const a of t){const r=a.plugin,o=r[s],l=[i,n,a.options];if(Q(o,l,r)===!1&&n.cancelable)return!1}return!0}invalidate(){F(this._cache)||(this._oldCache=this._cache,this._cache=void 0)}_descriptors(t){if(this._cache)return this._cache;const i=this._cache=this._createDescriptors(t);return this._notifyStateChanges(t),i}_createDescriptors(t,i){const s=t&&t.config,n=D(s.options&&s.options.plugins,{}),a=Id(s);return n===!1&&!i?[]:Pd(t,a,n,i)}_notifyStateChanges(t){const i=this._oldCache||[],s=this._cache,n=(a,r)=>a.filter(o=>!r.some(l=>o.plugin.id===l.plugin.id));this._notify(n(i,s),t,"stop"),this._notify(n(s,i),t,"start")}}function Id(e){const t={},i=[],s=Object.keys(_t.plugins.items);for(let a=0;a<s.length;a++)i.push(_t.getPlugin(s[a]));const n=e.plugins||[];for(let a=0;a<n.length;a++){const r=n[a];i.indexOf(r)===-1&&(i.push(r),t[r.id]=!0)}return{plugins:i,localIds:t}}function jd(e,t){return!t&&e===!1?null:e===!0?{}:e}function Pd(e,{plugins:t,localIds:i},s,n){const a=[],r=e.getContext();for(const o of t){const l=o.id,d=jd(s[l],n);d!==null&&a.push({plugin:o,options:Dd(e.config,{plugin:o,local:i[l]},d,r)})}return a}function Dd(e,{plugin:t,local:i},s,n){const a=e.pluginScopeKeys(t),r=e.getOptionScopes(s,a);return i&&t.defaults&&r.push(t.defaults),e.createResolver(r,n,[""],{scriptable:!1,indexable:!1,allKeys:!0})}function es(e,t){const i=G.datasets[e]||{};return((t.datasets||{})[e]||{}).indexAxis||t.indexAxis||i.indexAxis||"x"}function Od(e,t){let i=e;return e==="_index_"?i=t:e==="_value_"&&(i=t==="x"?"y":"x"),i}function qd(e,t){return e===t?"_index_":"_value_"}function En(e){if(e==="x"||e==="y"||e==="r")return e}function Rd(e){if(e==="top"||e==="bottom")return"x";if(e==="left"||e==="right")return"y"}function is(e,...t){if(En(e))return e;for(const i of t){const s=i.axis||Rd(i.position)||e.length>1&&En(e[0].toLowerCase());if(s)return s}throw new Error(`Cannot determine type of '${e}' axis. Please provide 'axis' or 'position' option.`)}function Mn(e,t,i){if(i[t+"AxisID"]===e)return{axis:t}}function Fd(e,t){if(t.data&&t.data.datasets){const i=t.data.datasets.filter(s=>s.xAxisID===e||s.yAxisID===e);if(i.length)return Mn(e,"x",i[0])||Mn(e,"y",i[0])}return{}}function Nd(e,t){const i=ae[e.type]||{scales:{}},s=t.scales||{},n=es(e.type,t),a=Object.create(null);return Object.keys(s).forEach(r=>{const o=s[r];if(!H(o))return console.error(`Invalid scale configuration for scale: ${r}`);if(o._proxy)return console.warn(`Ignoring resolver passed as options for scale: ${r}`);const l=is(r,o,Fd(r,e),G.scales[o.type]),d=qd(l,n),c=i.scales||{};a[r]=Ee(Object.create(null),[{axis:l},o,c[l],c[d]])}),e.data.datasets.forEach(r=>{const o=r.type||e.type,l=r.indexAxis||es(o,t),c=(ae[o]||{}).scales||{};Object.keys(c).forEach(u=>{const h=Od(u,l),m=r[h+"AxisID"]||h;a[m]=a[m]||Object.create(null),Ee(a[m],[{axis:h},s[m],c[u]])})}),Object.keys(a).forEach(r=>{const o=a[r];Ee(o,[G.scales[o.type],G.scale])}),a}function Qa(e){const t=e.options||(e.options={});t.plugins=D(t.plugins,{}),t.scales=Nd(e,t)}function Ka(e){return e=e||{},e.datasets=e.datasets||[],e.labels=e.labels||[],e}function Hd(e){return e=e||{},e.data=Ka(e.data),Qa(e),e}const Cn=new Map,Ja=new Set;function Ge(e,t){let i=Cn.get(e);return i||(i=t(),Cn.set(e,i),Ja.add(i)),i}const we=(e,t,i)=>{const s=Nt(t,i);s!==void 0&&e.add(s)};class Vd{constructor(t){this._config=Hd(t),this._scopeCache=new Map,this._resolverCache=new Map}get platform(){return this._config.platform}get type(){return this._config.type}set type(t){this._config.type=t}get data(){return this._config.data}set data(t){this._config.data=Ka(t)}get options(){return this._config.options}set options(t){this._config.options=t}get plugins(){return this._config.plugins}update(){const t=this._config;this.clearCache(),Qa(t)}clearCache(){this._scopeCache.clear(),this._resolverCache.clear()}datasetScopeKeys(t){return Ge(t,()=>[[`datasets.${t}`,""]])}datasetAnimationScopeKeys(t,i){return Ge(`${t}.transition.${i}`,()=>[[`datasets.${t}.transitions.${i}`,`transitions.${i}`],[`datasets.${t}`,""]])}datasetElementScopeKeys(t,i){return Ge(`${t}-${i}`,()=>[[`datasets.${t}.elements.${i}`,`datasets.${t}`,`elements.${i}`,""]])}pluginScopeKeys(t){const i=t.id,s=this.type;return Ge(`${s}-plugin-${i}`,()=>[[`plugins.${i}`,...t.additionalOptionScopes||[]]])}_cachedScopes(t,i){const s=this._scopeCache;let n=s.get(t);return(!n||i)&&(n=new Map,s.set(t,n)),n}getOptionScopes(t,i,s){const{options:n,type:a}=this,r=this._cachedScopes(t,s),o=r.get(i);if(o)return o;const l=new Set;i.forEach(c=>{t&&(l.add(t),c.forEach(u=>we(l,t,u))),c.forEach(u=>we(l,n,u)),c.forEach(u=>we(l,ae[a]||{},u)),c.forEach(u=>we(l,G,u)),c.forEach(u=>we(l,Gi,u))});const d=Array.from(l);return d.length===0&&d.push(Object.create(null)),Ja.has(i)&&r.set(i,d),d}chartOptionScopes(){const{options:t,type:i}=this;return[t,ae[i]||{},G.datasets[i]||{},{type:i},G,Gi]}resolveNamedOptions(t,i,s,n=[""]){const a={$shared:!0},{resolver:r,subPrefixes:o}=An(this._resolverCache,t,n);let l=r;if(Ud(r,i)){a.$shared=!1,s=Ht(s)?s():s;const d=this.createResolver(t,s,o);l=pe(r,s,d)}for(const d of i)a[d]=l[d];return a}createResolver(t,i,s=[""],n){const{resolver:a}=An(this._resolverCache,t,s);return H(i)?pe(a,i,void 0,n):a}}function An(e,t,i){let s=e.get(t);s||(s=new Map,e.set(t,s));const n=i.join();let a=s.get(n);return a||(a={resolver:ks(t,i),subPrefixes:i.filter(o=>!o.toLowerCase().includes("hover"))},s.set(n,a)),a}const Wd=e=>H(e)&&Object.getOwnPropertyNames(e).some(t=>Ht(e[t]));function Ud(e,t){const{isScriptable:i,isIndexable:s}=Ma(e);for(const n of t){const a=i(n),r=s(n),o=(r||a)&&e[n];if(a&&(Ht(o)||Wd(o))||r&&J(o))return!0}return!1}var Yd="4.5.1";const Xd=["top","bottom","left","right","chartArea"];function Ln(e,t){return e==="top"||e==="bottom"||Xd.indexOf(e)===-1&&t==="x"}function Bn(e,t){return function(i,s){return i[e]===s[e]?i[t]-s[t]:i[e]-s[e]}}function In(e){const t=e.chart,i=t.options.animation;t.notifyPlugins("afterRender"),Q(i&&i.onComplete,[e],t)}function Qd(e){const t=e.chart,i=t.options.animation;Q(i&&i.onProgress,[e],t)}function Ga(e){return Ss()&&typeof e=="string"?e=document.getElementById(e):e&&e.length&&(e=e[0]),e&&e.canvas&&(e=e.canvas),e}const di={},jn=e=>{const t=Ga(e);return Object.values(di).filter(i=>i.canvas===t).pop()};function Kd(e,t,i){const s=Object.keys(e);for(const n of s){const a=+n;if(a>=t){const r=e[n];delete e[n],(i>0||a>t)&&(e[a+i]=r)}}}function Jd(e,t,i,s){return!i||e.type==="mouseout"?null:s?t:e}class yt{static register(...t){_t.add(...t),Pn()}static unregister(...t){_t.remove(...t),Pn()}constructor(t,i){const s=this.config=new Vd(i),n=Ga(t),a=jn(n);if(a)throw new Error("Canvas is already in use. Chart with ID '"+a.id+"' must be destroyed before the canvas with ID '"+a.canvas.id+"' can be reused.");const r=s.createResolver(s.chartOptionScopes(),this.getContext());this.platform=new(s.platform||pd(n)),this.platform.updateConfig(s);const o=this.platform.acquireContext(n,r.aspectRatio),l=o&&o.canvas,d=l&&l.height,c=l&&l.width;if(this.id=Jr(),this.ctx=o,this.canvas=l,this.width=c,this.height=d,this._options=r,this._aspectRatio=this.aspectRatio,this._layers=[],this._metasets=[],this._stacks=void 0,this.boxes=[],this.currentDevicePixelRatio=void 0,this.chartArea=void 0,this._active=[],this._lastEvent=void 0,this._listeners={},this._responsiveListeners=void 0,this._sortedMetasets=[],this.scales={},this._plugins=new Bd,this.$proxies={},this._hiddenIndices={},this.attached=!1,this._animationsDisabled=void 0,this.$context=void 0,this._doResize=po(u=>this.update(u),r.resizeDelay||0),this._dataChanges=[],di[this.id]=this,!o||!l){console.error("Failed to create chart: can't acquire context from the given item");return}Et.listen(this,"complete",In),Et.listen(this,"progress",Qd),this._initialize(),this.attached&&this.update()}get aspectRatio(){const{options:{aspectRatio:t,maintainAspectRatio:i},width:s,height:n,_aspectRatio:a}=this;return F(t)?i&&a?a:n?s/n:null:t}get data(){return this.config.data}set data(t){this.config.data=t}get options(){return this._options}set options(t){this.config.options=t}get registry(){return _t}_initialize(){return this.notifyPlugins("beforeInit"),this.options.responsive?this.resize():nn(this,this.options.devicePixelRatio),this.bindEvents(),this.notifyPlugins("afterInit"),this}clear(){return tn(this.canvas,this.ctx),this}stop(){return Et.stop(this),this}resize(t,i){Et.running(this)?this._resizeBeforeDraw={width:t,height:i}:this._resize(t,i)}_resize(t,i){const s=this.options,n=this.canvas,a=s.maintainAspectRatio&&this.aspectRatio,r=this.platform.getMaximumSize(n,t,i,a),o=s.devicePixelRatio||this.platform.getDevicePixelRatio(),l=this.width?"resize":"attach";this.width=r.width,this.height=r.height,this._aspectRatio=this.aspectRatio,nn(this,o,!0)&&(this.notifyPlugins("resize",{size:r}),Q(s.onResize,[this,r],this),this.attached&&this._doResize(l)&&this.render())}ensureScalesHaveIDs(){const i=this.options.scales||{};X(i,(s,n)=>{s.id=n})}buildOrUpdateScales(){const t=this.options,i=t.scales,s=this.scales,n=Object.keys(s).reduce((r,o)=>(r[o]=!1,r),{});let a=[];i&&(a=a.concat(Object.keys(i).map(r=>{const o=i[r],l=is(r,o),d=l==="r",c=l==="x";return{options:o,dposition:d?"chartArea":c?"bottom":"left",dtype:d?"radialLinear":c?"category":"linear"}}))),X(a,r=>{const o=r.options,l=o.id,d=is(l,o),c=D(o.type,r.dtype);(o.position===void 0||Ln(o.position,d)!==Ln(r.dposition))&&(o.position=r.dposition),n[l]=!0;let u=null;if(l in s&&s[l].type===c)u=s[l];else{const h=_t.getScale(c);u=new h({id:l,type:c,ctx:this.ctx,chart:this}),s[u.id]=u}u.init(o,t)}),X(n,(r,o)=>{r||delete s[o]}),X(s,r=>{dt.configure(this,r,r.options),dt.addBox(this,r)})}_updateMetasets(){const t=this._metasets,i=this.data.datasets.length,s=t.length;if(t.sort((n,a)=>n.index-a.index),s>i){for(let n=i;n<s;++n)this._destroyDatasetMeta(n);t.splice(i,s-i)}this._sortedMetasets=t.slice(0).sort(Bn("order","index"))}_removeUnreferencedMetasets(){const{_metasets:t,data:{datasets:i}}=this;t.length>i.length&&delete this._stacks,t.forEach((s,n)=>{i.filter(a=>a===s._dataset).length===0&&this._destroyDatasetMeta(n)})}buildOrUpdateControllers(){const t=[],i=this.data.datasets;let s,n;for(this._removeUnreferencedMetasets(),s=0,n=i.length;s<n;s++){const a=i[s];let r=this.getDatasetMeta(s);const o=a.type||this.config.type;if(r.type&&r.type!==o&&(this._destroyDatasetMeta(s),r=this.getDatasetMeta(s)),r.type=o,r.indexAxis=a.indexAxis||es(o,this.options),r.order=a.order||0,r.index=s,r.label=""+a.label,r.visible=this.isDatasetVisible(s),r.controller)r.controller.updateIndex(s),r.controller.linkScales();else{const l=_t.getController(o),{datasetElementType:d,dataElementType:c}=G.datasets[o];Object.assign(l,{dataElementType:_t.getElement(c),datasetElementType:d&&_t.getElement(d)}),r.controller=new l(this,s),t.push(r.controller)}}return this._updateMetasets(),t}_resetElements(){X(this.data.datasets,(t,i)=>{this.getDatasetMeta(i).controller.reset()},this)}reset(){this._resetElements(),this.notifyPlugins("reset")}update(t){const i=this.config;i.update();const s=this._options=i.createResolver(i.chartOptionScopes(),this.getContext()),n=this._animationsDisabled=!s.animation;if(this._updateScales(),this._checkEventBindings(),this._updateHiddenIndices(),this._plugins.invalidate(),this.notifyPlugins("beforeUpdate",{mode:t,cancelable:!0})===!1)return;const a=this.buildOrUpdateControllers();this.notifyPlugins("beforeElementsUpdate");let r=0;for(let d=0,c=this.data.datasets.length;d<c;d++){const{controller:u}=this.getDatasetMeta(d),h=!n&&a.indexOf(u)===-1;u.buildOrUpdateElements(h),r=Math.max(+u.getMaxOverflow(),r)}r=this._minPadding=s.layout.autoPadding?r:0,this._updateLayout(r),n||X(a,d=>{d.reset()}),this._updateDatasets(t),this.notifyPlugins("afterUpdate",{mode:t}),this._layers.sort(Bn("z","_idx"));const{_active:o,_lastEvent:l}=this;l?this._eventHandler(l,!0):o.length&&this._updateHoverStyles(o,o,!0),this.render()}_updateScales(){X(this.scales,t=>{dt.removeBox(this,t)}),this.ensureScalesHaveIDs(),this.buildOrUpdateScales()}_checkEventBindings(){const t=this.options,i=new Set(Object.keys(this._listeners)),s=new Set(t.events);(!Ws(i,s)||!!this._responsiveListeners!==t.responsive)&&(this.unbindEvents(),this.bindEvents())}_updateHiddenIndices(){const{_hiddenIndices:t}=this,i=this._getUniformDataChanges()||[];for(const{method:s,start:n,count:a}of i){const r=s==="_removeElements"?-a:a;Kd(t,n,r)}}_getUniformDataChanges(){const t=this._dataChanges;if(!t||!t.length)return;this._dataChanges=[];const i=this.data.datasets.length,s=a=>new Set(t.filter(r=>r[0]===a).map((r,o)=>o+","+r.splice(1).join(","))),n=s(0);for(let a=1;a<i;a++)if(!Ws(n,s(a)))return;return Array.from(n).map(a=>a.split(",")).map(a=>({method:a[1],start:+a[2],count:+a[3]}))}_updateLayout(t){if(this.notifyPlugins("beforeLayout",{cancelable:!0})===!1)return;dt.update(this,this.width,this.height,t);const i=this.chartArea,s=i.width<=0||i.height<=0;this._layers=[],X(this.boxes,n=>{s&&n.position==="chartArea"||(n.configure&&n.configure(),this._layers.push(...n._layers()))},this),this._layers.forEach((n,a)=>{n._idx=a}),this.notifyPlugins("afterLayout")}_updateDatasets(t){if(this.notifyPlugins("beforeDatasetsUpdate",{mode:t,cancelable:!0})!==!1){for(let i=0,s=this.data.datasets.length;i<s;++i)this.getDatasetMeta(i).controller.configure();for(let i=0,s=this.data.datasets.length;i<s;++i)this._updateDataset(i,Ht(t)?t({datasetIndex:i}):t);this.notifyPlugins("afterDatasetsUpdate",{mode:t})}}_updateDataset(t,i){const s=this.getDatasetMeta(t),n={meta:s,index:t,mode:i,cancelable:!0};this.notifyPlugins("beforeDatasetUpdate",n)!==!1&&(s.controller._update(i),n.cancelable=!1,this.notifyPlugins("afterDatasetUpdate",n))}render(){this.notifyPlugins("beforeRender",{cancelable:!0})!==!1&&(Et.has(this)?this.attached&&!Et.running(this)&&Et.start(this):(this.draw(),In({chart:this})))}draw(){let t;if(this._resizeBeforeDraw){const{width:s,height:n}=this._resizeBeforeDraw;this._resizeBeforeDraw=null,this._resize(s,n)}if(this.clear(),this.width<=0||this.height<=0||this.notifyPlugins("beforeDraw",{cancelable:!0})===!1)return;const i=this._layers;for(t=0;t<i.length&&i[t].z<=0;++t)i[t].draw(this.chartArea);for(this._drawDatasets();t<i.length;++t)i[t].draw(this.chartArea);this.notifyPlugins("afterDraw")}_getSortedDatasetMetas(t){const i=this._sortedMetasets,s=[];let n,a;for(n=0,a=i.length;n<a;++n){const r=i[n];(!t||r.visible)&&s.push(r)}return s}getSortedVisibleDatasetMetas(){return this._getSortedDatasetMetas(!0)}_drawDatasets(){if(this.notifyPlugins("beforeDatasetsDraw",{cancelable:!0})===!1)return;const t=this.getSortedVisibleDatasetMetas();for(let i=t.length-1;i>=0;--i)this._drawDataset(t[i]);this.notifyPlugins("afterDatasetsDraw")}_drawDataset(t){const i=this.ctx,s={meta:t,index:t.index,cancelable:!0},n=Ra(this,t);this.notifyPlugins("beforeDatasetDraw",s)!==!1&&(n&&ki(i,n),t.controller.draw(),n&&$i(i),s.cancelable=!1,this.notifyPlugins("afterDatasetDraw",s))}isPointInArea(t){return Bt(t,this.chartArea,this._minPadding)}getElementsAtEventForMode(t,i,s,n){const a=Xl.modes[i];return typeof a=="function"?a(this,t,s,n):[]}getDatasetMeta(t){const i=this.data.datasets[t],s=this._metasets;let n=s.filter(a=>a&&a._dataset===i).pop();return n||(n={type:null,data:[],dataset:null,controller:null,hidden:null,xAxisID:null,yAxisID:null,order:i&&i.order||0,index:t,_dataset:i,_parsed:[],_sorted:!1},s.push(n)),n}getContext(){return this.$context||(this.$context=Wt(null,{chart:this,type:"chart"}))}getVisibleDatasetCount(){return this.getSortedVisibleDatasetMetas().length}isDatasetVisible(t){const i=this.data.datasets[t];if(!i)return!1;const s=this.getDatasetMeta(t);return typeof s.hidden=="boolean"?!s.hidden:!i.hidden}setDatasetVisibility(t,i){const s=this.getDatasetMeta(t);s.hidden=!i}toggleDataVisibility(t){this._hiddenIndices[t]=!this._hiddenIndices[t]}getDataVisibility(t){return!this._hiddenIndices[t]}_updateVisibility(t,i,s){const n=s?"show":"hide",a=this.getDatasetMeta(t),r=a.controller._resolveAnimations(void 0,n);je(i)?(a.data[i].hidden=!s,this.update()):(this.setDatasetVisibility(t,s),r.update(a,{visible:s}),this.update(o=>o.datasetIndex===t?n:void 0))}hide(t,i){this._updateVisibility(t,i,!1)}show(t,i){this._updateVisibility(t,i,!0)}_destroyDatasetMeta(t){const i=this._metasets[t];i&&i.controller&&i.controller._destroy(),delete this._metasets[t]}_stop(){let t,i;for(this.stop(),Et.remove(this),t=0,i=this.data.datasets.length;t<i;++t)this._destroyDatasetMeta(t)}destroy(){this.notifyPlugins("beforeDestroy");const{canvas:t,ctx:i}=this;this._stop(),this.config.clearCache(),t&&(this.unbindEvents(),tn(t,i),this.platform.releaseContext(i),this.canvas=null,this.ctx=null),delete di[this.id],this.notifyPlugins("afterDestroy")}toBase64Image(...t){return this.canvas.toDataURL(...t)}bindEvents(){this.bindUserEvents(),this.options.responsive?this.bindResponsiveEvents():this.attached=!0}bindUserEvents(){const t=this._listeners,i=this.platform,s=(a,r)=>{i.addEventListener(this,a,r),t[a]=r},n=(a,r,o)=>{a.offsetX=r,a.offsetY=o,this._eventHandler(a)};X(this.options.events,a=>s(a,n))}bindResponsiveEvents(){this._responsiveListeners||(this._responsiveListeners={});const t=this._responsiveListeners,i=this.platform,s=(l,d)=>{i.addEventListener(this,l,d),t[l]=d},n=(l,d)=>{t[l]&&(i.removeEventListener(this,l,d),delete t[l])},a=(l,d)=>{this.canvas&&this.resize(l,d)};let r;const o=()=>{n("attach",o),this.attached=!0,this.resize(),s("resize",a),s("detach",r)};r=()=>{this.attached=!1,n("resize",a),this._stop(),this._resize(0,0),s("attach",o)},i.isAttached(this.canvas)?o():r()}unbindEvents(){X(this._listeners,(t,i)=>{this.platform.removeEventListener(this,i,t)}),this._listeners={},X(this._responsiveListeners,(t,i)=>{this.platform.removeEventListener(this,i,t)}),this._responsiveListeners=void 0}updateHoverStyle(t,i,s){const n=s?"set":"remove";let a,r,o,l;for(i==="dataset"&&(a=this.getDatasetMeta(t[0].datasetIndex),a.controller["_"+n+"DatasetHoverStyle"]()),o=0,l=t.length;o<l;++o){r=t[o];const d=r&&this.getDatasetMeta(r.datasetIndex).controller;d&&d[n+"HoverStyle"](r.element,r.datasetIndex,r.index)}}getActiveElements(){return this._active||[]}setActiveElements(t){const i=this._active||[],s=t.map(({datasetIndex:a,index:r})=>{const o=this.getDatasetMeta(a);if(!o)throw new Error("No dataset found at index "+a);return{datasetIndex:a,element:o.data[r],index:r}});!hi(s,i)&&(this._active=s,this._lastEvent=null,this._updateHoverStyles(s,i))}notifyPlugins(t,i,s){return this._plugins.notify(this,t,i,s)}isPluginEnabled(t){return this._plugins._cache.filter(i=>i.plugin.id===t).length===1}_updateHoverStyles(t,i,s){const n=this.options.hover,a=(l,d)=>l.filter(c=>!d.some(u=>c.datasetIndex===u.datasetIndex&&c.index===u.index)),r=a(i,t),o=s?t:a(t,i);r.length&&this.updateHoverStyle(r,n.mode,!1),o.length&&n.mode&&this.updateHoverStyle(o,n.mode,!0)}_eventHandler(t,i){const s={event:t,replay:i,cancelable:!0,inChartArea:this.isPointInArea(t)},n=r=>(r.options.events||this.options.events).includes(t.native.type);if(this.notifyPlugins("beforeEvent",s,n)===!1)return;const a=this._handleEvent(t,i,s.inChartArea);return s.cancelable=!1,this.notifyPlugins("afterEvent",s,n),(a||s.changed)&&this.render(),this}_handleEvent(t,i,s){const{_active:n=[],options:a}=this,r=i,o=this._getActiveElements(t,n,s,r),l=so(t),d=Jd(t,this._lastEvent,s,l);s&&(this._lastEvent=null,Q(a.onHover,[t,o,this],this),l&&Q(a.onClick,[t,o,this],this));const c=!hi(o,n);return(c||i)&&(this._active=o,this._updateHoverStyles(o,n,i)),this._lastEvent=d,c}_getActiveElements(t,i,s,n){if(t.type==="mouseout")return[];if(!s)return i;const a=this.options.hover;return this.getElementsAtEventForMode(t,a.mode,a,n)}}B(yt,"defaults",G),B(yt,"instances",di),B(yt,"overrides",ae),B(yt,"registry",_t),B(yt,"version",Yd),B(yt,"getChart",jn);function Pn(){return X(yt.instances,e=>e._plugins.invalidate())}function Gd(e,t,i){const{startAngle:s,x:n,y:a,outerRadius:r,innerRadius:o,options:l}=t,{borderWidth:d,borderJoinStyle:c}=l,u=Math.min(d/r,lt(s-i));if(e.beginPath(),e.arc(n,a,r-d/2,s+u/2,i-u/2),o>0){const h=Math.min(d/o,lt(s-i));e.arc(n,a,o+d/2,i-h/2,s+h/2,!0)}else{const h=Math.min(d/2,r*lt(s-i));if(c==="round")e.arc(n,a,h,i-W/2,s+W/2,!0);else if(c==="bevel"){const m=2*h*h,p=-m*Math.cos(i+W/2)+n,g=-m*Math.sin(i+W/2)+a,f=m*Math.cos(s+W/2)+n,y=m*Math.sin(s+W/2)+a;e.lineTo(p,g),e.lineTo(f,y)}}e.closePath(),e.moveTo(0,0),e.rect(0,0,e.canvas.width,e.canvas.height),e.clip("evenodd")}function Zd(e,t,i){const{startAngle:s,pixelMargin:n,x:a,y:r,outerRadius:o,innerRadius:l}=t;let d=n/o;e.beginPath(),e.arc(a,r,o,s-d,i+d),l>n?(d=n/l,e.arc(a,r,l,i+d,s-d,!0)):e.arc(a,r,n,i+it,s-it),e.closePath(),e.clip()}function tc(e){return zs(e,["outerStart","outerEnd","innerStart","innerEnd"])}function ec(e,t,i,s){const n=tc(e.options.borderRadius),a=(i-t)/2,r=Math.min(a,s*t/2),o=l=>{const d=(i-Math.min(a,l))*s/2;return at(l,0,Math.min(a,d))};return{outerStart:o(n.outerStart),outerEnd:o(n.outerEnd),innerStart:at(n.innerStart,0,r),innerEnd:at(n.innerEnd,0,r)}}function ue(e,t,i,s){return{x:i+e*Math.cos(t),y:s+e*Math.sin(t)}}function yi(e,t,i,s,n,a){const{x:r,y:o,startAngle:l,pixelMargin:d,innerRadius:c}=t,u=Math.max(t.outerRadius+s+i-d,0),h=c>0?c+s+i+d:0;let m=0;const p=n-l;if(s){const q=c>0?c-s:0,A=u>0?u-s:0,P=(q+A)/2,N=P!==0?p*P/(P+s):p;m=(p-N)/2}const g=Math.max(.001,p*u-i/W)/u,f=(p-g)/2,y=l+f+m,b=n-f-m,{outerStart:x,outerEnd:v,innerStart:w,innerEnd:z}=ec(t,h,u,b-y),E=u-x,_=u-v,S=y+x/E,T=b-v/_,M=h+w,j=h+z,V=y+w/M,Z=b-z/j;if(e.beginPath(),a){const q=(S+T)/2;if(e.arc(r,o,u,S,q),e.arc(r,o,u,q,T),v>0){const R=ue(_,T,r,o);e.arc(R.x,R.y,v,T,b+it)}const A=ue(j,b,r,o);if(e.lineTo(A.x,A.y),z>0){const R=ue(j,Z,r,o);e.arc(R.x,R.y,z,b+it,Z+Math.PI)}const P=(b-z/h+(y+w/h))/2;if(e.arc(r,o,h,b-z/h,P,!0),e.arc(r,o,h,P,y+w/h,!0),w>0){const R=ue(M,V,r,o);e.arc(R.x,R.y,w,V+Math.PI,y-it)}const N=ue(E,y,r,o);if(e.lineTo(N.x,N.y),x>0){const R=ue(E,S,r,o);e.arc(R.x,R.y,x,y-it,S)}}else{e.moveTo(r,o);const q=Math.cos(S)*u+r,A=Math.sin(S)*u+o;e.lineTo(q,A);const P=Math.cos(T)*u+r,N=Math.sin(T)*u+o;e.lineTo(P,N)}e.closePath()}function ic(e,t,i,s,n){const{fullCircles:a,startAngle:r,circumference:o}=t;let l=t.endAngle;if(a){yi(e,t,i,s,l,n);for(let d=0;d<a;++d)e.fill();isNaN(o)||(l=r+(o%K||K))}return yi(e,t,i,s,l,n),e.fill(),l}function sc(e,t,i,s,n){const{fullCircles:a,startAngle:r,circumference:o,options:l}=t,{borderWidth:d,borderJoinStyle:c,borderDash:u,borderDashOffset:h,borderRadius:m}=l,p=l.borderAlign==="inner";if(!d)return;e.setLineDash(u||[]),e.lineDashOffset=h,p?(e.lineWidth=d*2,e.lineJoin=c||"round"):(e.lineWidth=d,e.lineJoin=c||"bevel");let g=t.endAngle;if(a){yi(e,t,i,s,g,n);for(let f=0;f<a;++f)e.stroke();isNaN(o)||(g=r+(o%K||K))}p&&Zd(e,t,g),l.selfJoin&&g-r>=W&&m===0&&c!=="miter"&&Gd(e,t,g),a||(yi(e,t,i,s,g,n),e.stroke())}class _e extends zt{constructor(i){super();B(this,"circumference");B(this,"endAngle");B(this,"fullCircles");B(this,"innerRadius");B(this,"outerRadius");B(this,"pixelMargin");B(this,"startAngle");this.options=void 0,this.circumference=void 0,this.startAngle=void 0,this.endAngle=void 0,this.innerRadius=void 0,this.outerRadius=void 0,this.pixelMargin=0,this.fullCircles=0,i&&Object.assign(this,i)}inRange(i,s,n){const a=this.getProps(["x","y"],n),{angle:r,distance:o}=va(a,{x:i,y:s}),{startAngle:l,endAngle:d,innerRadius:c,outerRadius:u,circumference:h}=this.getProps(["startAngle","endAngle","innerRadius","outerRadius","circumference"],n),m=(this.options.spacing+this.options.borderWidth)/2,p=D(h,d-l),g=Pe(r,l,d)&&l!==d,f=p>=K||g,y=At(o,c+m,u+m);return f&&y}getCenterPoint(i){const{x:s,y:n,startAngle:a,endAngle:r,innerRadius:o,outerRadius:l}=this.getProps(["x","y","startAngle","endAngle","innerRadius","outerRadius"],i),{offset:d,spacing:c}=this.options,u=(a+r)/2,h=(o+l+c+d)/2;return{x:s+Math.cos(u)*h,y:n+Math.sin(u)*h}}tooltipPosition(i){return this.getCenterPoint(i)}draw(i){const{options:s,circumference:n}=this,a=(s.offset||0)/4,r=(s.spacing||0)/2,o=s.circular;if(this.pixelMargin=s.borderAlign==="inner"?.33:0,this.fullCircles=n>K?Math.floor(n/K):0,n===0||this.innerRadius<0||this.outerRadius<0)return;i.save();const l=(this.startAngle+this.endAngle)/2;i.translate(Math.cos(l)*a,Math.sin(l)*a);const d=1-Math.sin(Math.min(W,n||0)),c=a*d;i.fillStyle=s.backgroundColor,i.strokeStyle=s.borderColor,ic(i,this,c,r,o),sc(i,this,c,r,o),i.restore()}}B(_e,"id","arc"),B(_e,"defaults",{borderAlign:"center",borderColor:"#fff",borderDash:[],borderDashOffset:0,borderJoinStyle:void 0,borderRadius:0,borderWidth:2,offset:0,spacing:0,angle:void 0,circular:!0,selfJoin:!1}),B(_e,"defaultRoutes",{backgroundColor:"backgroundColor"}),B(_e,"descriptors",{_scriptable:!0,_indexable:i=>i!=="borderDash"});function Za(e,t,i=t){e.lineCap=D(i.borderCapStyle,t.borderCapStyle),e.setLineDash(D(i.borderDash,t.borderDash)),e.lineDashOffset=D(i.borderDashOffset,t.borderDashOffset),e.lineJoin=D(i.borderJoinStyle,t.borderJoinStyle),e.lineWidth=D(i.borderWidth,t.borderWidth),e.strokeStyle=D(i.borderColor,t.borderColor)}function nc(e,t,i){e.lineTo(i.x,i.y)}function ac(e){return e.stepped?To:e.tension||e.cubicInterpolationMode==="monotone"?Eo:nc}function tr(e,t,i={}){const s=e.length,{start:n=0,end:a=s-1}=i,{start:r,end:o}=t,l=Math.max(n,r),d=Math.min(a,o),c=n<r&&a<r||n>o&&a>o;return{count:s,start:l,loop:t.loop,ilen:d<l&&!c?s+d-l:d-l}}function rc(e,t,i,s){const{points:n,options:a}=t,{count:r,start:o,loop:l,ilen:d}=tr(n,i,s),c=ac(a);let{move:u=!0,reverse:h}=s||{},m,p,g;for(m=0;m<=d;++m)p=n[(o+(h?d-m:m))%r],!p.skip&&(u?(e.moveTo(p.x,p.y),u=!1):c(e,g,p,h,a.stepped),g=p);return l&&(p=n[(o+(h?d:0))%r],c(e,g,p,h,a.stepped)),!!l}function oc(e,t,i,s){const n=t.points,{count:a,start:r,ilen:o}=tr(n,i,s),{move:l=!0,reverse:d}=s||{};let c=0,u=0,h,m,p,g,f,y;const b=v=>(r+(d?o-v:v))%a,x=()=>{g!==f&&(e.lineTo(c,f),e.lineTo(c,g),e.lineTo(c,y))};for(l&&(m=n[b(0)],e.moveTo(m.x,m.y)),h=0;h<=o;++h){if(m=n[b(h)],m.skip)continue;const v=m.x,w=m.y,z=v|0;z===p?(w<g?g=w:w>f&&(f=w),c=(u*c+v)/++u):(x(),e.lineTo(v,w),p=z,u=0,g=f=w),y=w}x()}function ss(e){const t=e.options,i=t.borderDash&&t.borderDash.length;return!e._decimated&&!e._loop&&!t.tension&&t.cubicInterpolationMode!=="monotone"&&!t.stepped&&!i?oc:rc}function lc(e){return e.stepped?rl:e.tension||e.cubicInterpolationMode==="monotone"?ol:Gt}function dc(e,t,i,s){let n=t._path;n||(n=t._path=new Path2D,t.path(n,i,s)&&n.closePath()),Za(e,t.options),e.stroke(n)}function cc(e,t,i,s){const{segments:n,options:a}=t,r=ss(t);for(const o of n)Za(e,a,o.style),e.beginPath(),r(e,t,o,{start:i,end:i+s-1})&&e.closePath(),e.stroke()}const uc=typeof Path2D=="function";function hc(e,t,i,s){uc&&!t.options.segment?dc(e,t,i,s):cc(e,t,i,s)}class qt extends zt{constructor(t){super(),this.animated=!0,this.options=void 0,this._chart=void 0,this._loop=void 0,this._fullLoop=void 0,this._path=void 0,this._points=void 0,this._segments=void 0,this._decimated=!1,this._pointsUpdated=!1,this._datasetIndex=void 0,t&&Object.assign(this,t)}updateControlPoints(t,i){const s=this.options;if((s.tension||s.cubicInterpolationMode==="monotone")&&!s.stepped&&!this._pointsUpdated){const n=s.spanGaps?this._loop:this._fullLoop;Go(this._points,s,t,n,i),this._pointsUpdated=!0}}set points(t){this._points=t,delete this._segments,delete this._path,this._pointsUpdated=!1}get points(){return this._points}get segments(){return this._segments||(this._segments=gl(this,this.options.segment))}first(){const t=this.segments,i=this.points;return t.length&&i[t[0].start]}last(){const t=this.segments,i=this.points,s=t.length;return s&&i[t[s-1].end]}interpolate(t,i){const s=this.options,n=t[i],a=this.points,r=qa(this,{property:i,start:n,end:n});if(!r.length)return;const o=[],l=lc(s);let d,c;for(d=0,c=r.length;d<c;++d){const{start:u,end:h}=r[d],m=a[u],p=a[h];if(m===p){o.push(m);continue}const g=Math.abs((n-m[i])/(p[i]-m[i])),f=l(m,p,g,s.stepped);f[i]=t[i],o.push(f)}return o.length===1?o[0]:o}pathSegment(t,i,s){return ss(this)(t,this,i,s)}path(t,i,s){const n=this.segments,a=ss(this);let r=this._loop;i=i||0,s=s||this.points.length-i;for(const o of n)r&=a(t,this,o,{start:i,end:i+s-1});return!!r}draw(t,i,s,n){const a=this.options||{};(this.points||[]).length&&a.borderWidth&&(t.save(),hc(t,this,s,n),t.restore()),this.animated&&(this._pointsUpdated=!1,this._path=void 0)}}B(qt,"id","line"),B(qt,"defaults",{borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",borderWidth:3,capBezierPoints:!0,cubicInterpolationMode:"default",fill:!1,spanGaps:!1,stepped:!1,tension:0}),B(qt,"defaultRoutes",{backgroundColor:"backgroundColor",borderColor:"borderColor"}),B(qt,"descriptors",{_scriptable:!0,_indexable:t=>t!=="borderDash"&&t!=="fill"});function Dn(e,t,i,s){const n=e.options,{[i]:a}=e.getProps([i],s);return Math.abs(t-a)<n.radius+n.hitRadius}class ci extends zt{constructor(i){super();B(this,"parsed");B(this,"skip");B(this,"stop");this.options=void 0,this.parsed=void 0,this.skip=void 0,this.stop=void 0,i&&Object.assign(this,i)}inRange(i,s,n){const a=this.options,{x:r,y:o}=this.getProps(["x","y"],n);return Math.pow(i-r,2)+Math.pow(s-o,2)<Math.pow(a.hitRadius+a.radius,2)}inXRange(i,s){return Dn(this,i,"x",s)}inYRange(i,s){return Dn(this,i,"y",s)}getCenterPoint(i){const{x:s,y:n}=this.getProps(["x","y"],i);return{x:s,y:n}}size(i){i=i||this.options||{};let s=i.radius||0;s=Math.max(s,s&&i.hoverRadius||0);const n=s&&i.borderWidth||0;return(s+n)*2}draw(i,s){const n=this.options;this.skip||n.radius<.1||!Bt(this,s,this.size(n)/2)||(i.strokeStyle=n.borderColor,i.lineWidth=n.borderWidth,i.fillStyle=n.backgroundColor,Zi(i,n,this.x,this.y))}getRange(){const i=this.options||{};return i.radius+i.hitRadius}}B(ci,"id","point"),B(ci,"defaults",{borderWidth:1,hitRadius:1,hoverBorderWidth:1,hoverRadius:4,pointStyle:"circle",radius:3,rotation:0}),B(ci,"defaultRoutes",{backgroundColor:"backgroundColor",borderColor:"borderColor"});function er(e,t){const{x:i,y:s,base:n,width:a,height:r}=e.getProps(["x","y","base","width","height"],t);let o,l,d,c,u;return e.horizontal?(u=r/2,o=Math.min(i,n),l=Math.max(i,n),d=s-u,c=s+u):(u=a/2,o=i-u,l=i+u,d=Math.min(s,n),c=Math.max(s,n)),{left:o,top:d,right:l,bottom:c}}function Rt(e,t,i,s){return e?0:at(t,i,s)}function gc(e,t,i){const s=e.options.borderWidth,n=e.borderSkipped,a=Ea(s);return{t:Rt(n.top,a.top,0,i),r:Rt(n.right,a.right,0,t),b:Rt(n.bottom,a.bottom,0,i),l:Rt(n.left,a.left,0,t)}}function mc(e,t,i){const{enableBorderRadius:s}=e.getProps(["enableBorderRadius"]),n=e.options.borderRadius,a=ie(n),r=Math.min(t,i),o=e.borderSkipped,l=s||H(n);return{topLeft:Rt(!l||o.top||o.left,a.topLeft,0,r),topRight:Rt(!l||o.top||o.right,a.topRight,0,r),bottomLeft:Rt(!l||o.bottom||o.left,a.bottomLeft,0,r),bottomRight:Rt(!l||o.bottom||o.right,a.bottomRight,0,r)}}function pc(e){const t=er(e),i=t.right-t.left,s=t.bottom-t.top,n=gc(e,i/2,s/2),a=mc(e,i/2,s/2);return{outer:{x:t.left,y:t.top,w:i,h:s,radius:a},inner:{x:t.left+n.l,y:t.top+n.t,w:i-n.l-n.r,h:s-n.t-n.b,radius:{topLeft:Math.max(0,a.topLeft-Math.max(n.t,n.l)),topRight:Math.max(0,a.topRight-Math.max(n.t,n.r)),bottomLeft:Math.max(0,a.bottomLeft-Math.max(n.b,n.l)),bottomRight:Math.max(0,a.bottomRight-Math.max(n.b,n.r))}}}}function Wi(e,t,i,s){const n=t===null,a=i===null,o=e&&!(n&&a)&&er(e,s);return o&&(n||At(t,o.left,o.right))&&(a||At(i,o.top,o.bottom))}function fc(e){return e.topLeft||e.topRight||e.bottomLeft||e.bottomRight}function bc(e,t){e.rect(t.x,t.y,t.w,t.h)}function Ui(e,t,i={}){const s=e.x!==i.x?-t:0,n=e.y!==i.y?-t:0,a=(e.x+e.w!==i.x+i.w?t:0)-s,r=(e.y+e.h!==i.y+i.h?t:0)-n;return{x:e.x+s,y:e.y+n,w:e.w+a,h:e.h+r,radius:e.radius}}class ui extends zt{constructor(t){super(),this.options=void 0,this.horizontal=void 0,this.base=void 0,this.width=void 0,this.height=void 0,this.inflateAmount=void 0,t&&Object.assign(this,t)}draw(t){const{inflateAmount:i,options:{borderColor:s,backgroundColor:n}}=this,{inner:a,outer:r}=pc(this),o=fc(r.radius)?De:bc;t.save(),(r.w!==a.w||r.h!==a.h)&&(t.beginPath(),o(t,Ui(r,i,a)),t.clip(),o(t,Ui(a,-i,r)),t.fillStyle=s,t.fill("evenodd")),t.beginPath(),o(t,Ui(a,i)),t.fillStyle=n,t.fill(),t.restore()}inRange(t,i,s){return Wi(this,t,i,s)}inXRange(t,i){return Wi(this,t,null,i)}inYRange(t,i){return Wi(this,null,t,i)}getCenterPoint(t){const{x:i,y:s,base:n,horizontal:a}=this.getProps(["x","y","base","horizontal"],t);return{x:a?(i+n)/2:i,y:a?s:(s+n)/2}}getRange(t){return t==="x"?this.width/2:this.height/2}}B(ui,"id","bar"),B(ui,"defaults",{borderSkipped:"start",borderWidth:0,borderRadius:0,inflateAmount:"auto",pointStyle:void 0}),B(ui,"defaultRoutes",{backgroundColor:"backgroundColor",borderColor:"borderColor"});var yc=Object.freeze({__proto__:null,ArcElement:_e,BarElement:ui,LineElement:qt,PointElement:ci});const ns=["rgb(54, 162, 235)","rgb(255, 99, 132)","rgb(255, 159, 64)","rgb(255, 205, 86)","rgb(75, 192, 192)","rgb(153, 102, 255)","rgb(201, 203, 207)"],On=ns.map(e=>e.replace("rgb(","rgba(").replace(")",", 0.5)"));function ir(e){return ns[e%ns.length]}function sr(e){return On[e%On.length]}function vc(e,t){return e.borderColor=ir(t),e.backgroundColor=sr(t),++t}function xc(e,t){return e.backgroundColor=e.data.map(()=>ir(t++)),t}function wc(e,t){return e.backgroundColor=e.data.map(()=>sr(t++)),t}function zc(e){let t=0;return(i,s)=>{const n=e.getDatasetMeta(s).controller;n instanceof Zt?t=xc(i,t):n instanceof Le?t=wc(i,t):n&&(t=vc(i,t))}}function qn(e){let t;for(t in e)if(e[t].borderColor||e[t].backgroundColor)return!0;return!1}function kc(e){return e&&(e.borderColor||e.backgroundColor)}function $c(){return G.borderColor!=="rgba(0,0,0,0.1)"||G.backgroundColor!=="rgba(0,0,0,0.1)"}var _c={id:"colors",defaults:{enabled:!0,forceOverride:!1},beforeLayout(e,t,i){if(!i.enabled)return;const{data:{datasets:s},options:n}=e.config,{elements:a}=n,r=qn(s)||kc(n)||a&&qn(a)||$c();if(!i.forceOverride&&r)return;const o=zc(e);s.forEach(o)}};function Sc(e,t,i,s,n){const a=n.samples||s;if(a>=i)return e.slice(t,t+i);const r=[],o=(i-2)/(a-2);let l=0;const d=t+i-1;let c=t,u,h,m,p,g;for(r[l++]=e[c],u=0;u<a-2;u++){let f=0,y=0,b;const x=Math.floor((u+1)*o)+1+t,v=Math.min(Math.floor((u+2)*o)+1,i)+t,w=v-x;for(b=x;b<v;b++)f+=e[b].x,y+=e[b].y;f/=w,y/=w;const z=Math.floor(u*o)+1+t,E=Math.min(Math.floor((u+1)*o)+1,i)+t,{x:_,y:S}=e[c];for(m=p=-1,b=z;b<E;b++)p=.5*Math.abs((_-f)*(e[b].y-S)-(_-e[b].x)*(y-S)),p>m&&(m=p,h=e[b],g=b);r[l++]=h,c=g}return r[l++]=e[d],r}function Tc(e,t,i,s){let n=0,a=0,r,o,l,d,c,u,h,m,p,g;const f=[],y=t+i-1,b=e[t].x,v=e[y].x-b;for(r=t;r<t+i;++r){o=e[r],l=(o.x-b)/v*s,d=o.y;const w=l|0;if(w===c)d<p?(p=d,u=r):d>g&&(g=d,h=r),n=(a*n+o.x)/++a;else{const z=r-1;if(!F(u)&&!F(h)){const E=Math.min(u,h),_=Math.max(u,h);E!==m&&E!==z&&f.push({...e[E],x:n}),_!==m&&_!==z&&f.push({...e[_],x:n})}r>0&&z!==m&&f.push(e[z]),f.push(o),c=w,a=0,p=g=d,u=h=m=r}}return f}function nr(e){if(e._decimated){const t=e._data;delete e._decimated,delete e._data,Object.defineProperty(e,"data",{configurable:!0,enumerable:!0,writable:!0,value:t})}}function Rn(e){e.data.datasets.forEach(t=>{nr(t)})}function Ec(e,t){const i=t.length;let s=0,n;const{iScale:a}=e,{min:r,max:o,minDefined:l,maxDefined:d}=a.getUserBounds();return l&&(s=at(Lt(t,a.axis,r).lo,0,i-1)),d?n=at(Lt(t,a.axis,o).hi+1,s,i)-s:n=i-s,{start:s,count:n}}var Mc={id:"decimation",defaults:{algorithm:"min-max",enabled:!1},beforeElementsUpdate:(e,t,i)=>{if(!i.enabled){Rn(e);return}const s=e.width;e.data.datasets.forEach((n,a)=>{const{_data:r,indexAxis:o}=n,l=e.getDatasetMeta(a),d=r||n.data;if(ke([o,e.options.indexAxis])==="y"||!l.controller.supportsDecimation)return;const c=e.scales[l.xAxisID];if(c.type!=="linear"&&c.type!=="time"||e.options.parsing)return;let{start:u,count:h}=Ec(l,d);const m=i.threshold||4*s;if(h<=m){nr(n);return}F(r)&&(n._data=d,delete n.data,Object.defineProperty(n,"data",{configurable:!0,enumerable:!0,get:function(){return this._decimated},set:function(g){this._data=g}}));let p;switch(i.algorithm){case"lttb":p=Sc(d,u,h,s,i);break;case"min-max":p=Tc(d,u,h,s);break;default:throw new Error(`Unsupported decimation algorithm '${i.algorithm}'`)}n._decimated=p})},destroy(e){Rn(e)}};function Cc(e,t,i){const s=e.segments,n=e.points,a=t.points,r=[];for(const o of s){let{start:l,end:d}=o;d=Ti(l,d,n);const c=as(i,n[l],n[d],o.loop);if(!t.segments){r.push({source:o,target:c,start:n[l],end:n[d]});continue}const u=qa(t,c);for(const h of u){const m=as(i,a[h.start],a[h.end],h.loop),p=Oa(o,n,m);for(const g of p)r.push({source:g,target:h,start:{[i]:Fn(c,m,"start",Math.max)},end:{[i]:Fn(c,m,"end",Math.min)}})}}return r}function as(e,t,i,s){if(s)return;let n=t[e],a=i[e];return e==="angle"&&(n=lt(n),a=lt(a)),{property:e,start:n,end:a}}function Ac(e,t){const{x:i=null,y:s=null}=e||{},n=t.points,a=[];return t.segments.forEach(({start:r,end:o})=>{o=Ti(r,o,n);const l=n[r],d=n[o];s!==null?(a.push({x:l.x,y:s}),a.push({x:d.x,y:s})):i!==null&&(a.push({x:i,y:l.y}),a.push({x:i,y:d.y}))}),a}function Ti(e,t,i){for(;t>e;t--){const s=i[t];if(!isNaN(s.x)&&!isNaN(s.y))break}return t}function Fn(e,t,i,s){return e&&t?s(e[i],t[i]):e?e[i]:t?t[i]:0}function ar(e,t){let i=[],s=!1;return J(e)?(s=!0,i=e):i=Ac(e,t),i.length?new qt({points:i,options:{tension:0},_loop:s,_fullLoop:s}):null}function Nn(e){return e&&e.fill!==!1}function Lc(e,t,i){let n=e[t].fill;const a=[t];let r;if(!i)return n;for(;n!==!1&&a.indexOf(n)===-1;){if(!tt(n))return n;if(r=e[n],!r)return!1;if(r.visible)return n;a.push(n),n=r.fill}return!1}function Bc(e,t,i){const s=Dc(e);if(H(s))return isNaN(s.value)?!1:s;let n=parseFloat(s);return tt(n)&&Math.floor(n)===n?Ic(s[0],t,n,i):["origin","start","end","stack","shape"].indexOf(s)>=0&&s}function Ic(e,t,i,s){return(e==="-"||e==="+")&&(i=t+i),i===t||i<0||i>=s?!1:i}function jc(e,t){let i=null;return e==="start"?i=t.bottom:e==="end"?i=t.top:H(e)?i=t.getPixelForValue(e.value):t.getBasePixel&&(i=t.getBasePixel()),i}function Pc(e,t,i){let s;return e==="start"?s=i:e==="end"?s=t.options.reverse?t.min:t.max:H(e)?s=e.value:s=t.getBaseValue(),s}function Dc(e){const t=e.options,i=t.fill;let s=D(i&&i.target,i);return s===void 0&&(s=!!t.backgroundColor),s===!1||s===null?!1:s===!0?"origin":s}function Oc(e){const{scale:t,index:i,line:s}=e,n=[],a=s.segments,r=s.points,o=qc(t,i);o.push(ar({x:null,y:t.bottom},s));for(let l=0;l<a.length;l++){const d=a[l];for(let c=d.start;c<=d.end;c++)Rc(n,r[c],o)}return new qt({points:n,options:{}})}function qc(e,t){const i=[],s=e.getMatchingVisibleMetas("line");for(let n=0;n<s.length;n++){const a=s[n];if(a.index===t)break;a.hidden||i.unshift(a.dataset)}return i}function Rc(e,t,i){const s=[];for(let n=0;n<i.length;n++){const a=i[n],{first:r,last:o,point:l}=Fc(a,t,"x");if(!(!l||r&&o)){if(r)s.unshift(l);else if(e.push(l),!o)break}}e.push(...s)}function Fc(e,t,i){const s=e.interpolate(t,i);if(!s)return{};const n=s[i],a=e.segments,r=e.points;let o=!1,l=!1;for(let d=0;d<a.length;d++){const c=a[d],u=r[c.start][i],h=r[c.end][i];if(At(n,u,h)){o=n===u,l=n===h;break}}return{first:o,last:l,point:s}}class rr{constructor(t){this.x=t.x,this.y=t.y,this.radius=t.radius}pathSegment(t,i,s){const{x:n,y:a,radius:r}=this;return i=i||{start:0,end:K},t.arc(n,a,r,i.end,i.start,!0),!s.bounds}interpolate(t){const{x:i,y:s,radius:n}=this,a=t.angle;return{x:i+Math.cos(a)*n,y:s+Math.sin(a)*n,angle:a}}}function Nc(e){const{chart:t,fill:i,line:s}=e;if(tt(i))return Hc(t,i);if(i==="stack")return Oc(e);if(i==="shape")return!0;const n=Vc(e);return n instanceof rr?n:ar(n,s)}function Hc(e,t){const i=e.getDatasetMeta(t);return i&&e.isDatasetVisible(t)?i.dataset:null}function Vc(e){return(e.scale||{}).getPointPositionForValue?Uc(e):Wc(e)}function Wc(e){const{scale:t={},fill:i}=e,s=jc(i,t);if(tt(s)){const n=t.isHorizontal();return{x:n?s:null,y:n?null:s}}return null}function Uc(e){const{scale:t,fill:i}=e,s=t.options,n=t.getLabels().length,a=s.reverse?t.max:t.min,r=Pc(i,t,a),o=[];if(s.grid.circular){const l=t.getPointPositionForValue(0,a);return new rr({x:l.x,y:l.y,radius:t.getDistanceFromCenterForValue(r)})}for(let l=0;l<n;++l)o.push(t.getPointPositionForValue(l,r));return o}function Yi(e,t,i){const s=Nc(t),{chart:n,index:a,line:r,scale:o,axis:l}=t,d=r.options,c=d.fill,u=d.backgroundColor,{above:h=u,below:m=u}=c||{},p=n.getDatasetMeta(a),g=Ra(n,p);s&&r.points.length&&(ki(e,i),Yc(e,{line:r,target:s,above:h,below:m,area:i,scale:o,axis:l,clip:g}),$i(e))}function Yc(e,t){const{line:i,target:s,above:n,below:a,area:r,scale:o,clip:l}=t,d=i._loop?"angle":t.axis;e.save();let c=a;a!==n&&(d==="x"?(Hn(e,s,r.top),Xi(e,{line:i,target:s,color:n,scale:o,property:d,clip:l}),e.restore(),e.save(),Hn(e,s,r.bottom)):d==="y"&&(Vn(e,s,r.left),Xi(e,{line:i,target:s,color:a,scale:o,property:d,clip:l}),e.restore(),e.save(),Vn(e,s,r.right),c=n)),Xi(e,{line:i,target:s,color:c,scale:o,property:d,clip:l}),e.restore()}function Hn(e,t,i){const{segments:s,points:n}=t;let a=!0,r=!1;e.beginPath();for(const o of s){const{start:l,end:d}=o,c=n[l],u=n[Ti(l,d,n)];a?(e.moveTo(c.x,c.y),a=!1):(e.lineTo(c.x,i),e.lineTo(c.x,c.y)),r=!!t.pathSegment(e,o,{move:r}),r?e.closePath():e.lineTo(u.x,i)}e.lineTo(t.first().x,i),e.closePath(),e.clip()}function Vn(e,t,i){const{segments:s,points:n}=t;let a=!0,r=!1;e.beginPath();for(const o of s){const{start:l,end:d}=o,c=n[l],u=n[Ti(l,d,n)];a?(e.moveTo(c.x,c.y),a=!1):(e.lineTo(i,c.y),e.lineTo(c.x,c.y)),r=!!t.pathSegment(e,o,{move:r}),r?e.closePath():e.lineTo(i,u.y)}e.lineTo(i,t.first().y),e.closePath(),e.clip()}function Xi(e,t){const{line:i,target:s,property:n,color:a,scale:r,clip:o}=t,l=Cc(i,s,n);for(const{source:d,target:c,start:u,end:h}of l){const{style:{backgroundColor:m=a}={}}=d,p=s!==!0;e.save(),e.fillStyle=m,Xc(e,r,o,p&&as(n,u,h)),e.beginPath();const g=!!i.pathSegment(e,d);let f;if(p){g?e.closePath():Wn(e,s,h,n);const y=!!s.pathSegment(e,c,{move:g,reverse:!0});f=g&&y,f||Wn(e,s,u,n)}e.closePath(),e.fill(f?"evenodd":"nonzero"),e.restore()}}function Xc(e,t,i,s){const n=t.chart.chartArea,{property:a,start:r,end:o}=s||{};if(a==="x"||a==="y"){let l,d,c,u;a==="x"?(l=r,d=n.top,c=o,u=n.bottom):(l=n.left,d=r,c=n.right,u=o),e.beginPath(),i&&(l=Math.max(l,i.left),c=Math.min(c,i.right),d=Math.max(d,i.top),u=Math.min(u,i.bottom)),e.rect(l,d,c-l,u-d),e.clip()}}function Wn(e,t,i,s){const n=t.interpolate(i,s);n&&e.lineTo(n.x,n.y)}var Qc={id:"filler",afterDatasetsUpdate(e,t,i){const s=(e.data.datasets||[]).length,n=[];let a,r,o,l;for(r=0;r<s;++r)a=e.getDatasetMeta(r),o=a.dataset,l=null,o&&o.options&&o instanceof qt&&(l={visible:e.isDatasetVisible(r),index:r,fill:Bc(o,r,s),chart:e,axis:a.controller.options.indexAxis,scale:a.vScale,line:o}),a.$filler=l,n.push(l);for(r=0;r<s;++r)l=n[r],!(!l||l.fill===!1)&&(l.fill=Lc(n,r,i.propagate))},beforeDraw(e,t,i){const s=i.drawTime==="beforeDraw",n=e.getSortedVisibleDatasetMetas(),a=e.chartArea;for(let r=n.length-1;r>=0;--r){const o=n[r].$filler;o&&(o.line.updateControlPoints(a,o.axis),s&&o.fill&&Yi(e.ctx,o,a))}},beforeDatasetsDraw(e,t,i){if(i.drawTime!=="beforeDatasetsDraw")return;const s=e.getSortedVisibleDatasetMetas();for(let n=s.length-1;n>=0;--n){const a=s[n].$filler;Nn(a)&&Yi(e.ctx,a,e.chartArea)}},beforeDatasetDraw(e,t,i){const s=t.meta.$filler;!Nn(s)||i.drawTime!=="beforeDatasetDraw"||Yi(e.ctx,s,e.chartArea)},defaults:{propagate:!0,drawTime:"beforeDatasetDraw"}};const Un=(e,t)=>{let{boxHeight:i=t,boxWidth:s=t}=e;return e.usePointStyle&&(i=Math.min(i,t),s=e.pointStyleWidth||Math.min(s,t)),{boxWidth:s,boxHeight:i,itemHeight:Math.max(t,i)}},Kc=(e,t)=>e!==null&&t!==null&&e.datasetIndex===t.datasetIndex&&e.index===t.index;class Yn extends zt{constructor(t){super(),this._added=!1,this.legendHitBoxes=[],this._hoveredItem=null,this.doughnutMode=!1,this.chart=t.chart,this.options=t.options,this.ctx=t.ctx,this.legendItems=void 0,this.columnSizes=void 0,this.lineWidths=void 0,this.maxHeight=void 0,this.maxWidth=void 0,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.height=void 0,this.width=void 0,this._margins=void 0,this.position=void 0,this.weight=void 0,this.fullSize=void 0}update(t,i,s){this.maxWidth=t,this.maxHeight=i,this._margins=s,this.setDimensions(),this.buildLabels(),this.fit()}setDimensions(){this.isHorizontal()?(this.width=this.maxWidth,this.left=this._margins.left,this.right=this.width):(this.height=this.maxHeight,this.top=this._margins.top,this.bottom=this.height)}buildLabels(){const t=this.options.labels||{};let i=Q(t.generateLabels,[this.chart],this)||[];t.filter&&(i=i.filter(s=>t.filter(s,this.chart.data))),t.sort&&(i=i.sort((s,n)=>t.sort(s,n,this.chart.data))),this.options.reverse&&i.reverse(),this.legendItems=i}fit(){const{options:t,ctx:i}=this;if(!t.display){this.width=this.height=0;return}const s=t.labels,n=nt(s.font),a=n.size,r=this._computeTitleHeight(),{boxWidth:o,itemHeight:l}=Un(s,a);let d,c;i.font=n.string,this.isHorizontal()?(d=this.maxWidth,c=this._fitRows(r,a,o,l)+10):(c=this.maxHeight,d=this._fitCols(r,n,o,l)+10),this.width=Math.min(d,t.maxWidth||this.maxWidth),this.height=Math.min(c,t.maxHeight||this.maxHeight)}_fitRows(t,i,s,n){const{ctx:a,maxWidth:r,options:{labels:{padding:o}}}=this,l=this.legendHitBoxes=[],d=this.lineWidths=[0],c=n+o;let u=t;a.textAlign="left",a.textBaseline="middle";let h=-1,m=-c;return this.legendItems.forEach((p,g)=>{const f=s+i/2+a.measureText(p.text).width;(g===0||d[d.length-1]+f+2*o>r)&&(u+=c,d[d.length-(g>0?0:1)]=0,m+=c,h++),l[g]={left:0,top:m,row:h,width:f,height:n},d[d.length-1]+=f+o}),u}_fitCols(t,i,s,n){const{ctx:a,maxHeight:r,options:{labels:{padding:o}}}=this,l=this.legendHitBoxes=[],d=this.columnSizes=[],c=r-t;let u=o,h=0,m=0,p=0,g=0;return this.legendItems.forEach((f,y)=>{const{itemWidth:b,itemHeight:x}=Jc(s,i,a,f,n);y>0&&m+x+2*o>c&&(u+=h+o,d.push({width:h,height:m}),p+=h+o,g++,h=m=0),l[y]={left:p,top:m,col:g,width:b,height:x},h=Math.max(h,b),m+=x+o}),u+=h,d.push({width:h,height:m}),u}adjustHitBoxes(){if(!this.options.display)return;const t=this._computeTitleHeight(),{legendHitBoxes:i,options:{align:s,labels:{padding:n},rtl:a}}=this,r=he(a,this.left,this.width);if(this.isHorizontal()){let o=0,l=ot(s,this.left+n,this.right-this.lineWidths[o]);for(const d of i)o!==d.row&&(o=d.row,l=ot(s,this.left+n,this.right-this.lineWidths[o])),d.top+=this.top+t+n,d.left=r.leftForLtr(r.x(l),d.width),l+=d.width+n}else{let o=0,l=ot(s,this.top+t+n,this.bottom-this.columnSizes[o].height);for(const d of i)d.col!==o&&(o=d.col,l=ot(s,this.top+t+n,this.bottom-this.columnSizes[o].height)),d.top=l,d.left+=this.left+n,d.left=r.leftForLtr(r.x(d.left),d.width),l+=d.height+n}}isHorizontal(){return this.options.position==="top"||this.options.position==="bottom"}draw(){if(this.options.display){const t=this.ctx;ki(t,this),this._draw(),$i(t)}}_draw(){const{options:t,columnSizes:i,lineWidths:s,ctx:n}=this,{align:a,labels:r}=t,o=G.color,l=he(t.rtl,this.left,this.width),d=nt(r.font),{padding:c}=r,u=d.size,h=u/2;let m;this.drawTitle(),n.textAlign=l.textAlign("left"),n.textBaseline="middle",n.lineWidth=.5,n.font=d.string;const{boxWidth:p,boxHeight:g,itemHeight:f}=Un(r,u),y=function(z,E,_){if(isNaN(p)||p<=0||isNaN(g)||g<0)return;n.save();const S=D(_.lineWidth,1);if(n.fillStyle=D(_.fillStyle,o),n.lineCap=D(_.lineCap,"butt"),n.lineDashOffset=D(_.lineDashOffset,0),n.lineJoin=D(_.lineJoin,"miter"),n.lineWidth=S,n.strokeStyle=D(_.strokeStyle,o),n.setLineDash(D(_.lineDash,[])),r.usePointStyle){const T={radius:g*Math.SQRT2/2,pointStyle:_.pointStyle,rotation:_.rotation,borderWidth:S},M=l.xPlus(z,p/2),j=E+h;Ta(n,T,M,j,r.pointStyleWidth&&p)}else{const T=E+Math.max((u-g)/2,0),M=l.leftForLtr(z,p),j=ie(_.borderRadius);n.beginPath(),Object.values(j).some(V=>V!==0)?De(n,{x:M,y:T,w:p,h:g,radius:j}):n.rect(M,T,p,g),n.fill(),S!==0&&n.stroke()}n.restore()},b=function(z,E,_){re(n,_.text,z,E+f/2,d,{strikethrough:_.hidden,textAlign:l.textAlign(_.textAlign)})},x=this.isHorizontal(),v=this._computeTitleHeight();x?m={x:ot(a,this.left+c,this.right-s[0]),y:this.top+c+v,line:0}:m={x:this.left+c,y:ot(a,this.top+v+c,this.bottom-i[0].height),line:0},ja(this.ctx,t.textDirection);const w=f+c;this.legendItems.forEach((z,E)=>{n.strokeStyle=z.fontColor,n.fillStyle=z.fontColor;const _=n.measureText(z.text).width,S=l.textAlign(z.textAlign||(z.textAlign=r.textAlign)),T=p+h+_;let M=m.x,j=m.y;l.setWidth(this.width),x?E>0&&M+T+c>this.right&&(j=m.y+=w,m.line++,M=m.x=ot(a,this.left+c,this.right-s[m.line])):E>0&&j+w>this.bottom&&(M=m.x=M+i[m.line].width+c,m.line++,j=m.y=ot(a,this.top+v+c,this.bottom-i[m.line].height));const V=l.x(M);if(y(V,j,z),M=fo(S,M+p+h,x?M+T:this.right,t.rtl),b(l.x(M),j,z),x)m.x+=T+c;else if(typeof z.text!="string"){const Z=d.lineHeight;m.y+=or(z,Z)+c}else m.y+=w}),Pa(this.ctx,t.textDirection)}drawTitle(){const t=this.options,i=t.title,s=nt(i.font),n=ct(i.padding);if(!i.display)return;const a=he(t.rtl,this.left,this.width),r=this.ctx,o=i.position,l=s.size/2,d=n.top+l;let c,u=this.left,h=this.width;if(this.isHorizontal())h=Math.max(...this.lineWidths),c=this.top+d,u=ot(t.align,u,this.right-h);else{const p=this.columnSizes.reduce((g,f)=>Math.max(g,f.height),0);c=d+ot(t.align,this.top,this.bottom-p-t.labels.padding-this._computeTitleHeight())}const m=ot(o,u,u+h);r.textAlign=a.textAlign(xs(o)),r.textBaseline="middle",r.strokeStyle=i.color,r.fillStyle=i.color,r.font=s.string,re(r,i.text,m,c,s)}_computeTitleHeight(){const t=this.options.title,i=nt(t.font),s=ct(t.padding);return t.display?i.lineHeight+s.height:0}_getLegendItemAt(t,i){let s,n,a;if(At(t,this.left,this.right)&&At(i,this.top,this.bottom)){for(a=this.legendHitBoxes,s=0;s<a.length;++s)if(n=a[s],At(t,n.left,n.left+n.width)&&At(i,n.top,n.top+n.height))return this.legendItems[s]}return null}handleEvent(t){const i=this.options;if(!tu(t.type,i))return;const s=this._getLegendItemAt(t.x,t.y);if(t.type==="mousemove"||t.type==="mouseout"){const n=this._hoveredItem,a=Kc(n,s);n&&!a&&Q(i.onLeave,[t,n,this],this),this._hoveredItem=s,s&&!a&&Q(i.onHover,[t,s,this],this)}else s&&Q(i.onClick,[t,s,this],this)}}function Jc(e,t,i,s,n){const a=Gc(s,e,t,i),r=Zc(n,s,t.lineHeight);return{itemWidth:a,itemHeight:r}}function Gc(e,t,i,s){let n=e.text;return n&&typeof n!="string"&&(n=n.reduce((a,r)=>a.length>r.length?a:r)),t+i.size/2+s.measureText(n).width}function Zc(e,t,i){let s=e;return typeof t.text!="string"&&(s=or(t,i)),s}function or(e,t){const i=e.text?e.text.length:0;return t*i}function tu(e,t){return!!((e==="mousemove"||e==="mouseout")&&(t.onHover||t.onLeave)||t.onClick&&(e==="click"||e==="mouseup"))}var eu={id:"legend",_element:Yn,start(e,t,i){const s=e.legend=new Yn({ctx:e.ctx,options:i,chart:e});dt.configure(e,s,i),dt.addBox(e,s)},stop(e){dt.removeBox(e,e.legend),delete e.legend},beforeUpdate(e,t,i){const s=e.legend;dt.configure(e,s,i),s.options=i},afterUpdate(e){const t=e.legend;t.buildLabels(),t.adjustHitBoxes()},afterEvent(e,t){t.replay||e.legend.handleEvent(t.event)},defaults:{display:!0,position:"top",align:"center",fullSize:!0,reverse:!1,weight:1e3,onClick(e,t,i){const s=t.datasetIndex,n=i.chart;n.isDatasetVisible(s)?(n.hide(s),t.hidden=!0):(n.show(s),t.hidden=!1)},onHover:null,onLeave:null,labels:{color:e=>e.chart.options.color,boxWidth:40,padding:10,generateLabels(e){const t=e.data.datasets,{labels:{usePointStyle:i,pointStyle:s,textAlign:n,color:a,useBorderRadius:r,borderRadius:o}}=e.legend.options;return e._getSortedDatasetMetas().map(l=>{const d=l.controller.getStyle(i?0:void 0),c=ct(d.borderWidth);return{text:t[l.index].label,fillStyle:d.backgroundColor,fontColor:a,hidden:!l.visible,lineCap:d.borderCapStyle,lineDash:d.borderDash,lineDashOffset:d.borderDashOffset,lineJoin:d.borderJoinStyle,lineWidth:(c.width+c.height)/4,strokeStyle:d.borderColor,pointStyle:s||d.pointStyle,rotation:d.rotation,textAlign:n||d.textAlign,borderRadius:r&&(o||d.borderRadius),datasetIndex:l.index}},this)}},title:{color:e=>e.chart.options.color,display:!1,position:"center",text:""}},descriptors:{_scriptable:e=>!e.startsWith("on"),labels:{_scriptable:e=>!["generateLabels","filter","sort"].includes(e)}}};class Ms extends zt{constructor(t){super(),this.chart=t.chart,this.options=t.options,this.ctx=t.ctx,this._padding=void 0,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.width=void 0,this.height=void 0,this.position=void 0,this.weight=void 0,this.fullSize=void 0}update(t,i){const s=this.options;if(this.left=0,this.top=0,!s.display){this.width=this.height=this.right=this.bottom=0;return}this.width=this.right=t,this.height=this.bottom=i;const n=J(s.text)?s.text.length:1;this._padding=ct(s.padding);const a=n*nt(s.font).lineHeight+this._padding.height;this.isHorizontal()?this.height=a:this.width=a}isHorizontal(){const t=this.options.position;return t==="top"||t==="bottom"}_drawArgs(t){const{top:i,left:s,bottom:n,right:a,options:r}=this,o=r.align;let l=0,d,c,u;return this.isHorizontal()?(c=ot(o,s,a),u=i+t,d=a-s):(r.position==="left"?(c=s+t,u=ot(o,n,i),l=W*-.5):(c=a-t,u=ot(o,i,n),l=W*.5),d=n-i),{titleX:c,titleY:u,maxWidth:d,rotation:l}}draw(){const t=this.ctx,i=this.options;if(!i.display)return;const s=nt(i.font),a=s.lineHeight/2+this._padding.top,{titleX:r,titleY:o,maxWidth:l,rotation:d}=this._drawArgs(a);re(t,i.text,0,0,s,{color:i.color,maxWidth:l,rotation:d,textAlign:xs(i.align),textBaseline:"middle",translation:[r,o]})}}function iu(e,t){const i=new Ms({ctx:e.ctx,options:t,chart:e});dt.configure(e,i,t),dt.addBox(e,i),e.titleBlock=i}var su={id:"title",_element:Ms,start(e,t,i){iu(e,i)},stop(e){const t=e.titleBlock;dt.removeBox(e,t),delete e.titleBlock},beforeUpdate(e,t,i){const s=e.titleBlock;dt.configure(e,s,i),s.options=i},defaults:{align:"center",display:!1,font:{weight:"bold"},fullSize:!0,padding:10,position:"top",text:"",weight:2e3},defaultRoutes:{color:"color"},descriptors:{_scriptable:!0,_indexable:!1}};const Ze=new WeakMap;var nu={id:"subtitle",start(e,t,i){const s=new Ms({ctx:e.ctx,options:i,chart:e});dt.configure(e,s,i),dt.addBox(e,s),Ze.set(e,s)},stop(e){dt.removeBox(e,Ze.get(e)),Ze.delete(e)},beforeUpdate(e,t,i){const s=Ze.get(e);dt.configure(e,s,i),s.options=i},defaults:{align:"center",display:!1,font:{weight:"normal"},fullSize:!0,padding:0,position:"top",text:"",weight:1500},defaultRoutes:{color:"color"},descriptors:{_scriptable:!0,_indexable:!1}};const Se={average(e){if(!e.length)return!1;let t,i,s=new Set,n=0,a=0;for(t=0,i=e.length;t<i;++t){const o=e[t].element;if(o&&o.hasValue()){const l=o.tooltipPosition();s.add(l.x),n+=l.y,++a}}return a===0||s.size===0?!1:{x:[...s].reduce((o,l)=>o+l)/s.size,y:n/a}},nearest(e,t){if(!e.length)return!1;let i=t.x,s=t.y,n=Number.POSITIVE_INFINITY,a,r,o;for(a=0,r=e.length;a<r;++a){const l=e[a].element;if(l&&l.hasValue()){const d=l.getCenterPoint(),c=Ji(t,d);c<n&&(n=c,o=l)}}if(o){const l=o.tooltipPosition();i=l.x,s=l.y}return{x:i,y:s}}};function $t(e,t){return t&&(J(t)?Array.prototype.push.apply(e,t):e.push(t)),e}function Mt(e){return(typeof e=="string"||e instanceof String)&&e.indexOf(`
`)>-1?e.split(`
`):e}function au(e,t){const{element:i,datasetIndex:s,index:n}=t,a=e.getDatasetMeta(s).controller,{label:r,value:o}=a.getLabelAndValue(n);return{chart:e,label:r,parsed:a.getParsed(n),raw:e.data.datasets[s].data[n],formattedValue:o,dataset:a.getDataset(),dataIndex:n,datasetIndex:s,element:i}}function Xn(e,t){const i=e.chart.ctx,{body:s,footer:n,title:a}=e,{boxWidth:r,boxHeight:o}=t,l=nt(t.bodyFont),d=nt(t.titleFont),c=nt(t.footerFont),u=a.length,h=n.length,m=s.length,p=ct(t.padding);let g=p.height,f=0,y=s.reduce((v,w)=>v+w.before.length+w.lines.length+w.after.length,0);if(y+=e.beforeBody.length+e.afterBody.length,u&&(g+=u*d.lineHeight+(u-1)*t.titleSpacing+t.titleMarginBottom),y){const v=t.displayColors?Math.max(o,l.lineHeight):l.lineHeight;g+=m*v+(y-m)*l.lineHeight+(y-1)*t.bodySpacing}h&&(g+=t.footerMarginTop+h*c.lineHeight+(h-1)*t.footerSpacing);let b=0;const x=function(v){f=Math.max(f,i.measureText(v).width+b)};return i.save(),i.font=d.string,X(e.title,x),i.font=l.string,X(e.beforeBody.concat(e.afterBody),x),b=t.displayColors?r+2+t.boxPadding:0,X(s,v=>{X(v.before,x),X(v.lines,x),X(v.after,x)}),b=0,i.font=c.string,X(e.footer,x),i.restore(),f+=p.width,{width:f,height:g}}function ru(e,t){const{y:i,height:s}=t;return i<s/2?"top":i>e.height-s/2?"bottom":"center"}function ou(e,t,i,s){const{x:n,width:a}=s,r=i.caretSize+i.caretPadding;if(e==="left"&&n+a+r>t.width||e==="right"&&n-a-r<0)return!0}function lu(e,t,i,s){const{x:n,width:a}=i,{width:r,chartArea:{left:o,right:l}}=e;let d="center";return s==="center"?d=n<=(o+l)/2?"left":"right":n<=a/2?d="left":n>=r-a/2&&(d="right"),ou(d,e,t,i)&&(d="center"),d}function Qn(e,t,i){const s=i.yAlign||t.yAlign||ru(e,i);return{xAlign:i.xAlign||t.xAlign||lu(e,t,i,s),yAlign:s}}function du(e,t){let{x:i,width:s}=e;return t==="right"?i-=s:t==="center"&&(i-=s/2),i}function cu(e,t,i){let{y:s,height:n}=e;return t==="top"?s+=i:t==="bottom"?s-=n+i:s-=n/2,s}function Kn(e,t,i,s){const{caretSize:n,caretPadding:a,cornerRadius:r}=e,{xAlign:o,yAlign:l}=i,d=n+a,{topLeft:c,topRight:u,bottomLeft:h,bottomRight:m}=ie(r);let p=du(t,o);const g=cu(t,l,d);return l==="center"?o==="left"?p+=d:o==="right"&&(p-=d):o==="left"?p-=Math.max(c,h)+n:o==="right"&&(p+=Math.max(u,m)+n),{x:at(p,0,s.width-t.width),y:at(g,0,s.height-t.height)}}function ti(e,t,i){const s=ct(i.padding);return t==="center"?e.x+e.width/2:t==="right"?e.x+e.width-s.right:e.x+s.left}function Jn(e){return $t([],Mt(e))}function uu(e,t,i){return Wt(e,{tooltip:t,tooltipItems:i,type:"tooltip"})}function Gn(e,t){const i=t&&t.dataset&&t.dataset.tooltip&&t.dataset.tooltip.callbacks;return i?e.override(i):e}const lr={beforeTitle:Tt,title(e){if(e.length>0){const t=e[0],i=t.chart.data.labels,s=i?i.length:0;if(this&&this.options&&this.options.mode==="dataset")return t.dataset.label||"";if(t.label)return t.label;if(s>0&&t.dataIndex<s)return i[t.dataIndex]}return""},afterTitle:Tt,beforeBody:Tt,beforeLabel:Tt,label(e){if(this&&this.options&&this.options.mode==="dataset")return e.label+": "+e.formattedValue||e.formattedValue;let t=e.dataset.label||"";t&&(t+=": ");const i=e.formattedValue;return F(i)||(t+=i),t},labelColor(e){const i=e.chart.getDatasetMeta(e.datasetIndex).controller.getStyle(e.dataIndex);return{borderColor:i.borderColor,backgroundColor:i.backgroundColor,borderWidth:i.borderWidth,borderDash:i.borderDash,borderDashOffset:i.borderDashOffset,borderRadius:0}},labelTextColor(){return this.options.bodyColor},labelPointStyle(e){const i=e.chart.getDatasetMeta(e.datasetIndex).controller.getStyle(e.dataIndex);return{pointStyle:i.pointStyle,rotation:i.rotation}},afterLabel:Tt,afterBody:Tt,beforeFooter:Tt,footer:Tt,afterFooter:Tt};function gt(e,t,i,s){const n=e[t].call(i,s);return typeof n>"u"?lr[t].call(i,s):n}class rs extends zt{constructor(t){super(),this.opacity=0,this._active=[],this._eventPosition=void 0,this._size=void 0,this._cachedAnimations=void 0,this._tooltipItems=[],this.$animations=void 0,this.$context=void 0,this.chart=t.chart,this.options=t.options,this.dataPoints=void 0,this.title=void 0,this.beforeBody=void 0,this.body=void 0,this.afterBody=void 0,this.footer=void 0,this.xAlign=void 0,this.yAlign=void 0,this.x=void 0,this.y=void 0,this.height=void 0,this.width=void 0,this.caretX=void 0,this.caretY=void 0,this.labelColors=void 0,this.labelPointStyles=void 0,this.labelTextColors=void 0}initialize(t){this.options=t,this._cachedAnimations=void 0,this.$context=void 0}_resolveAnimations(){const t=this._cachedAnimations;if(t)return t;const i=this.chart,s=this.options.setContext(this.getContext()),n=s.enabled&&i.options.animation&&s.animations,a=new Fa(this.chart,n);return n._cacheable&&(this._cachedAnimations=Object.freeze(a)),a}getContext(){return this.$context||(this.$context=uu(this.chart.getContext(),this,this._tooltipItems))}getTitle(t,i){const{callbacks:s}=i,n=gt(s,"beforeTitle",this,t),a=gt(s,"title",this,t),r=gt(s,"afterTitle",this,t);let o=[];return o=$t(o,Mt(n)),o=$t(o,Mt(a)),o=$t(o,Mt(r)),o}getBeforeBody(t,i){return Jn(gt(i.callbacks,"beforeBody",this,t))}getBody(t,i){const{callbacks:s}=i,n=[];return X(t,a=>{const r={before:[],lines:[],after:[]},o=Gn(s,a);$t(r.before,Mt(gt(o,"beforeLabel",this,a))),$t(r.lines,gt(o,"label",this,a)),$t(r.after,Mt(gt(o,"afterLabel",this,a))),n.push(r)}),n}getAfterBody(t,i){return Jn(gt(i.callbacks,"afterBody",this,t))}getFooter(t,i){const{callbacks:s}=i,n=gt(s,"beforeFooter",this,t),a=gt(s,"footer",this,t),r=gt(s,"afterFooter",this,t);let o=[];return o=$t(o,Mt(n)),o=$t(o,Mt(a)),o=$t(o,Mt(r)),o}_createItems(t){const i=this._active,s=this.chart.data,n=[],a=[],r=[];let o=[],l,d;for(l=0,d=i.length;l<d;++l)o.push(au(this.chart,i[l]));return t.filter&&(o=o.filter((c,u,h)=>t.filter(c,u,h,s))),t.itemSort&&(o=o.sort((c,u)=>t.itemSort(c,u,s))),X(o,c=>{const u=Gn(t.callbacks,c);n.push(gt(u,"labelColor",this,c)),a.push(gt(u,"labelPointStyle",this,c)),r.push(gt(u,"labelTextColor",this,c))}),this.labelColors=n,this.labelPointStyles=a,this.labelTextColors=r,this.dataPoints=o,o}update(t,i){const s=this.options.setContext(this.getContext()),n=this._active;let a,r=[];if(!n.length)this.opacity!==0&&(a={opacity:0});else{const o=Se[s.position].call(this,n,this._eventPosition);r=this._createItems(s),this.title=this.getTitle(r,s),this.beforeBody=this.getBeforeBody(r,s),this.body=this.getBody(r,s),this.afterBody=this.getAfterBody(r,s),this.footer=this.getFooter(r,s);const l=this._size=Xn(this,s),d=Object.assign({},o,l),c=Qn(this.chart,s,d),u=Kn(s,d,c,this.chart);this.xAlign=c.xAlign,this.yAlign=c.yAlign,a={opacity:1,x:u.x,y:u.y,width:l.width,height:l.height,caretX:o.x,caretY:o.y}}this._tooltipItems=r,this.$context=void 0,a&&this._resolveAnimations().update(this,a),t&&s.external&&s.external.call(this,{chart:this.chart,tooltip:this,replay:i})}drawCaret(t,i,s,n){const a=this.getCaretPosition(t,s,n);i.lineTo(a.x1,a.y1),i.lineTo(a.x2,a.y2),i.lineTo(a.x3,a.y3)}getCaretPosition(t,i,s){const{xAlign:n,yAlign:a}=this,{caretSize:r,cornerRadius:o}=s,{topLeft:l,topRight:d,bottomLeft:c,bottomRight:u}=ie(o),{x:h,y:m}=t,{width:p,height:g}=i;let f,y,b,x,v,w;return a==="center"?(v=m+g/2,n==="left"?(f=h,y=f-r,x=v+r,w=v-r):(f=h+p,y=f+r,x=v-r,w=v+r),b=f):(n==="left"?y=h+Math.max(l,c)+r:n==="right"?y=h+p-Math.max(d,u)-r:y=this.caretX,a==="top"?(x=m,v=x-r,f=y-r,b=y+r):(x=m+g,v=x+r,f=y+r,b=y-r),w=x),{x1:f,x2:y,x3:b,y1:x,y2:v,y3:w}}drawTitle(t,i,s){const n=this.title,a=n.length;let r,o,l;if(a){const d=he(s.rtl,this.x,this.width);for(t.x=ti(this,s.titleAlign,s),i.textAlign=d.textAlign(s.titleAlign),i.textBaseline="middle",r=nt(s.titleFont),o=s.titleSpacing,i.fillStyle=s.titleColor,i.font=r.string,l=0;l<a;++l)i.fillText(n[l],d.x(t.x),t.y+r.lineHeight/2),t.y+=r.lineHeight+o,l+1===a&&(t.y+=s.titleMarginBottom-o)}}_drawColorBox(t,i,s,n,a){const r=this.labelColors[s],o=this.labelPointStyles[s],{boxHeight:l,boxWidth:d}=a,c=nt(a.bodyFont),u=ti(this,"left",a),h=n.x(u),m=l<c.lineHeight?(c.lineHeight-l)/2:0,p=i.y+m;if(a.usePointStyle){const g={radius:Math.min(d,l)/2,pointStyle:o.pointStyle,rotation:o.rotation,borderWidth:1},f=n.leftForLtr(h,d)+d/2,y=p+l/2;t.strokeStyle=a.multiKeyBackground,t.fillStyle=a.multiKeyBackground,Zi(t,g,f,y),t.strokeStyle=r.borderColor,t.fillStyle=r.backgroundColor,Zi(t,g,f,y)}else{t.lineWidth=H(r.borderWidth)?Math.max(...Object.values(r.borderWidth)):r.borderWidth||1,t.strokeStyle=r.borderColor,t.setLineDash(r.borderDash||[]),t.lineDashOffset=r.borderDashOffset||0;const g=n.leftForLtr(h,d),f=n.leftForLtr(n.xPlus(h,1),d-2),y=ie(r.borderRadius);Object.values(y).some(b=>b!==0)?(t.beginPath(),t.fillStyle=a.multiKeyBackground,De(t,{x:g,y:p,w:d,h:l,radius:y}),t.fill(),t.stroke(),t.fillStyle=r.backgroundColor,t.beginPath(),De(t,{x:f,y:p+1,w:d-2,h:l-2,radius:y}),t.fill()):(t.fillStyle=a.multiKeyBackground,t.fillRect(g,p,d,l),t.strokeRect(g,p,d,l),t.fillStyle=r.backgroundColor,t.fillRect(f,p+1,d-2,l-2))}t.fillStyle=this.labelTextColors[s]}drawBody(t,i,s){const{body:n}=this,{bodySpacing:a,bodyAlign:r,displayColors:o,boxHeight:l,boxWidth:d,boxPadding:c}=s,u=nt(s.bodyFont);let h=u.lineHeight,m=0;const p=he(s.rtl,this.x,this.width),g=function(_){i.fillText(_,p.x(t.x+m),t.y+h/2),t.y+=h+a},f=p.textAlign(r);let y,b,x,v,w,z,E;for(i.textAlign=r,i.textBaseline="middle",i.font=u.string,t.x=ti(this,f,s),i.fillStyle=s.bodyColor,X(this.beforeBody,g),m=o&&f!=="right"?r==="center"?d/2+c:d+2+c:0,v=0,z=n.length;v<z;++v){for(y=n[v],b=this.labelTextColors[v],i.fillStyle=b,X(y.before,g),x=y.lines,o&&x.length&&(this._drawColorBox(i,t,v,p,s),h=Math.max(u.lineHeight,l)),w=0,E=x.length;w<E;++w)g(x[w]),h=u.lineHeight;X(y.after,g)}m=0,h=u.lineHeight,X(this.afterBody,g),t.y-=a}drawFooter(t,i,s){const n=this.footer,a=n.length;let r,o;if(a){const l=he(s.rtl,this.x,this.width);for(t.x=ti(this,s.footerAlign,s),t.y+=s.footerMarginTop,i.textAlign=l.textAlign(s.footerAlign),i.textBaseline="middle",r=nt(s.footerFont),i.fillStyle=s.footerColor,i.font=r.string,o=0;o<a;++o)i.fillText(n[o],l.x(t.x),t.y+r.lineHeight/2),t.y+=r.lineHeight+s.footerSpacing}}drawBackground(t,i,s,n){const{xAlign:a,yAlign:r}=this,{x:o,y:l}=t,{width:d,height:c}=s,{topLeft:u,topRight:h,bottomLeft:m,bottomRight:p}=ie(n.cornerRadius);i.fillStyle=n.backgroundColor,i.strokeStyle=n.borderColor,i.lineWidth=n.borderWidth,i.beginPath(),i.moveTo(o+u,l),r==="top"&&this.drawCaret(t,i,s,n),i.lineTo(o+d-h,l),i.quadraticCurveTo(o+d,l,o+d,l+h),r==="center"&&a==="right"&&this.drawCaret(t,i,s,n),i.lineTo(o+d,l+c-p),i.quadraticCurveTo(o+d,l+c,o+d-p,l+c),r==="bottom"&&this.drawCaret(t,i,s,n),i.lineTo(o+m,l+c),i.quadraticCurveTo(o,l+c,o,l+c-m),r==="center"&&a==="left"&&this.drawCaret(t,i,s,n),i.lineTo(o,l+u),i.quadraticCurveTo(o,l,o+u,l),i.closePath(),i.fill(),n.borderWidth>0&&i.stroke()}_updateAnimationTarget(t){const i=this.chart,s=this.$animations,n=s&&s.x,a=s&&s.y;if(n||a){const r=Se[t.position].call(this,this._active,this._eventPosition);if(!r)return;const o=this._size=Xn(this,t),l=Object.assign({},r,this._size),d=Qn(i,t,l),c=Kn(t,l,d,i);(n._to!==c.x||a._to!==c.y)&&(this.xAlign=d.xAlign,this.yAlign=d.yAlign,this.width=o.width,this.height=o.height,this.caretX=r.x,this.caretY=r.y,this._resolveAnimations().update(this,c))}}_willRender(){return!!this.opacity}draw(t){const i=this.options.setContext(this.getContext());let s=this.opacity;if(!s)return;this._updateAnimationTarget(i);const n={width:this.width,height:this.height},a={x:this.x,y:this.y};s=Math.abs(s)<.001?0:s;const r=ct(i.padding),o=this.title.length||this.beforeBody.length||this.body.length||this.afterBody.length||this.footer.length;i.enabled&&o&&(t.save(),t.globalAlpha=s,this.drawBackground(a,t,n,i),ja(t,i.textDirection),a.y+=r.top,this.drawTitle(a,t,i),this.drawBody(a,t,i),this.drawFooter(a,t,i),Pa(t,i.textDirection),t.restore())}getActiveElements(){return this._active||[]}setActiveElements(t,i){const s=this._active,n=t.map(({datasetIndex:o,index:l})=>{const d=this.chart.getDatasetMeta(o);if(!d)throw new Error("Cannot find a dataset at index "+o);return{datasetIndex:o,element:d.data[l],index:l}}),a=!hi(s,n),r=this._positionChanged(n,i);(a||r)&&(this._active=n,this._eventPosition=i,this._ignoreReplayEvents=!0,this.update(!0))}handleEvent(t,i,s=!0){if(i&&this._ignoreReplayEvents)return!1;this._ignoreReplayEvents=!1;const n=this.options,a=this._active||[],r=this._getActiveElements(t,a,i,s),o=this._positionChanged(r,t),l=i||!hi(r,a)||o;return l&&(this._active=r,(n.enabled||n.external)&&(this._eventPosition={x:t.x,y:t.y},this.update(!0,i))),l}_getActiveElements(t,i,s,n){const a=this.options;if(t.type==="mouseout")return[];if(!n)return i.filter(o=>this.chart.data.datasets[o.datasetIndex]&&this.chart.getDatasetMeta(o.datasetIndex).controller.getParsed(o.index)!==void 0);const r=this.chart.getElementsAtEventForMode(t,a.mode,a,s);return a.reverse&&r.reverse(),r}_positionChanged(t,i){const{caretX:s,caretY:n,options:a}=this,r=Se[a.position].call(this,t,i);return r!==!1&&(s!==r.x||n!==r.y)}}B(rs,"positioners",Se);var hu={id:"tooltip",_element:rs,positioners:Se,afterInit(e,t,i){i&&(e.tooltip=new rs({chart:e,options:i}))},beforeUpdate(e,t,i){e.tooltip&&e.tooltip.initialize(i)},reset(e,t,i){e.tooltip&&e.tooltip.initialize(i)},afterDraw(e){const t=e.tooltip;if(t&&t._willRender()){const i={tooltip:t};if(e.notifyPlugins("beforeTooltipDraw",{...i,cancelable:!0})===!1)return;t.draw(e.ctx),e.notifyPlugins("afterTooltipDraw",i)}},afterEvent(e,t){if(e.tooltip){const i=t.replay;e.tooltip.handleEvent(t.event,i,t.inChartArea)&&(t.changed=!0)}},defaults:{enabled:!0,external:null,position:"average",backgroundColor:"rgba(0,0,0,0.8)",titleColor:"#fff",titleFont:{weight:"bold"},titleSpacing:2,titleMarginBottom:6,titleAlign:"left",bodyColor:"#fff",bodySpacing:2,bodyFont:{},bodyAlign:"left",footerColor:"#fff",footerSpacing:2,footerMarginTop:6,footerFont:{weight:"bold"},footerAlign:"left",padding:6,caretPadding:2,caretSize:5,cornerRadius:6,boxHeight:(e,t)=>t.bodyFont.size,boxWidth:(e,t)=>t.bodyFont.size,multiKeyBackground:"#fff",displayColors:!0,boxPadding:0,borderColor:"rgba(0,0,0,0)",borderWidth:0,animation:{duration:400,easing:"easeOutQuart"},animations:{numbers:{type:"number",properties:["x","y","width","height","caretX","caretY"]},opacity:{easing:"linear",duration:200}},callbacks:lr},defaultRoutes:{bodyFont:"font",footerFont:"font",titleFont:"font"},descriptors:{_scriptable:e=>e!=="filter"&&e!=="itemSort"&&e!=="external",_indexable:!1,callbacks:{_scriptable:!1,_indexable:!1},animation:{_fallback:!1},animations:{_fallback:"animation"}},additionalOptionScopes:["interaction"]},gu=Object.freeze({__proto__:null,Colors:_c,Decimation:Mc,Filler:Qc,Legend:eu,SubTitle:nu,Title:su,Tooltip:hu});const mu=(e,t,i,s)=>(typeof t=="string"?(i=e.push(t)-1,s.unshift({index:i,label:t})):isNaN(t)&&(i=null),i);function pu(e,t,i,s){const n=e.indexOf(t);if(n===-1)return mu(e,t,i,s);const a=e.lastIndexOf(t);return n!==a?i:n}const fu=(e,t)=>e===null?null:at(Math.round(e),0,t);function Zn(e){const t=this.getLabels();return e>=0&&e<t.length?t[e]:e}class os extends oe{constructor(t){super(t),this._startValue=void 0,this._valueRange=0,this._addedLabels=[]}init(t){const i=this._addedLabels;if(i.length){const s=this.getLabels();for(const{index:n,label:a}of i)s[n]===a&&s.splice(n,1);this._addedLabels=[]}super.init(t)}parse(t,i){if(F(t))return null;const s=this.getLabels();return i=isFinite(i)&&s[i]===t?i:pu(s,t,D(i,t),this._addedLabels),fu(i,s.length-1)}determineDataLimits(){const{minDefined:t,maxDefined:i}=this.getUserBounds();let{min:s,max:n}=this.getMinMax(!0);this.options.bounds==="ticks"&&(t||(s=0),i||(n=this.getLabels().length-1)),this.min=s,this.max=n}buildTicks(){const t=this.min,i=this.max,s=this.options.offset,n=[];let a=this.getLabels();a=t===0&&i===a.length-1?a:a.slice(t,i+1),this._valueRange=Math.max(a.length-(s?0:1),1),this._startValue=this.min-(s?.5:0);for(let r=t;r<=i;r++)n.push({value:r});return n}getLabelForValue(t){return Zn.call(this,t)}configure(){super.configure(),this.isHorizontal()||(this._reversePixels=!this._reversePixels)}getPixelForValue(t){return typeof t!="number"&&(t=this.parse(t)),t===null?NaN:this.getPixelForDecimal((t-this._startValue)/this._valueRange)}getPixelForTick(t){const i=this.ticks;return t<0||t>i.length-1?null:this.getPixelForValue(i[t].value)}getValueForPixel(t){return Math.round(this._startValue+this.getDecimalForPixel(t)*this._valueRange)}getBasePixel(){return this.bottom}}B(os,"id","category"),B(os,"defaults",{ticks:{callback:Zn}});function bu(e,t){const i=[],{bounds:n,step:a,min:r,max:o,precision:l,count:d,maxTicks:c,maxDigits:u,includeBounds:h}=e,m=a||1,p=c-1,{min:g,max:f}=t,y=!F(r),b=!F(o),x=!F(d),v=(f-g)/(u+1);let w=Ys((f-g)/p/m)*m,z,E,_,S;if(w<1e-14&&!y&&!b)return[{value:g},{value:f}];S=Math.ceil(f/w)-Math.floor(g/w),S>p&&(w=Ys(S*w/p/m)*m),F(l)||(z=Math.pow(10,l),w=Math.ceil(w*z)/z),n==="ticks"?(E=Math.floor(g/w)*w,_=Math.ceil(f/w)*w):(E=g,_=f),y&&b&&a&&lo((o-r)/a,w/1e3)?(S=Math.round(Math.min((o-r)/w,c)),w=(o-r)/S,E=r,_=o):x?(E=y?r:E,_=b?o:_,S=d-1,w=(_-E)/S):(S=(_-E)/w,Me(S,Math.round(S),w/1e3)?S=Math.round(S):S=Math.ceil(S));const T=Math.max(Xs(w),Xs(E));z=Math.pow(10,F(l)?T:l),E=Math.round(E*z)/z,_=Math.round(_*z)/z;let M=0;for(y&&(h&&E!==r?(i.push({value:r}),E<r&&M++,Me(Math.round((E+M*w)*z)/z,r,ta(r,v,e))&&M++):E<r&&M++);M<S;++M){const j=Math.round((E+M*w)*z)/z;if(b&&j>o)break;i.push({value:j})}return b&&h&&_!==o?i.length&&Me(i[i.length-1].value,o,ta(o,v,e))?i[i.length-1].value=o:i.push({value:o}):(!b||_===o)&&i.push({value:_}),i}function ta(e,t,{horizontal:i,minRotation:s}){const n=xt(s),a=(i?Math.sin(n):Math.cos(n))||.001,r=.75*t*(""+e).length;return Math.min(t/a,r)}class vi extends oe{constructor(t){super(t),this.start=void 0,this.end=void 0,this._startValue=void 0,this._endValue=void 0,this._valueRange=0}parse(t,i){return F(t)||(typeof t=="number"||t instanceof Number)&&!isFinite(+t)?null:+t}handleTickRangeOptions(){const{beginAtZero:t}=this.options,{minDefined:i,maxDefined:s}=this.getUserBounds();let{min:n,max:a}=this;const r=l=>n=i?n:l,o=l=>a=s?a:l;if(t){const l=St(n),d=St(a);l<0&&d<0?o(0):l>0&&d>0&&r(0)}if(n===a){let l=a===0?1:Math.abs(a*.05);o(a+l),t||r(n-l)}this.min=n,this.max=a}getTickLimit(){const t=this.options.ticks;let{maxTicksLimit:i,stepSize:s}=t,n;return s?(n=Math.ceil(this.max/s)-Math.floor(this.min/s)+1,n>1e3&&(console.warn(`scales.${this.id}.ticks.stepSize: ${s} would result generating up to ${n} ticks. Limiting to 1000.`),n=1e3)):(n=this.computeTickLimit(),i=i||11),i&&(n=Math.min(i,n)),n}computeTickLimit(){return Number.POSITIVE_INFINITY}buildTicks(){const t=this.options,i=t.ticks;let s=this.getTickLimit();s=Math.max(2,s);const n={maxTicks:s,bounds:t.bounds,min:t.min,max:t.max,precision:i.precision,step:i.stepSize,count:i.count,maxDigits:this._maxDigits(),horizontal:this.isHorizontal(),minRotation:i.minRotation||0,includeBounds:i.includeBounds!==!1},a=this._range||this,r=bu(n,a);return t.bounds==="ticks"&&ya(r,this,"value"),t.reverse?(r.reverse(),this.start=this.max,this.end=this.min):(this.start=this.min,this.end=this.max),r}configure(){const t=this.ticks;let i=this.min,s=this.max;if(super.configure(),this.options.offset&&t.length){const n=(s-i)/Math.max(t.length-1,1)/2;i-=n,s+=n}this._startValue=i,this._endValue=s,this._valueRange=s-i}getLabelForValue(t){return Ne(t,this.chart.options.locale,this.options.ticks.format)}}class ls extends vi{determineDataLimits(){const{min:t,max:i}=this.getMinMax(!0);this.min=tt(t)?t:0,this.max=tt(i)?i:1,this.handleTickRangeOptions()}computeTickLimit(){const t=this.isHorizontal(),i=t?this.width:this.height,s=xt(this.options.ticks.minRotation),n=(t?Math.sin(s):Math.cos(s))||.001,a=this._resolveTickFontOptions(0);return Math.ceil(i/Math.min(40,a.lineHeight/n))}getPixelForValue(t){return t===null?NaN:this.getPixelForDecimal((t-this._startValue)/this._valueRange)}getValueForPixel(t){return this._startValue+this.getDecimalForPixel(t)*this._valueRange}}B(ls,"id","linear"),B(ls,"defaults",{ticks:{callback:zi.formatters.numeric}});const qe=e=>Math.floor(Dt(e)),Kt=(e,t)=>Math.pow(10,qe(e)+t);function ea(e){return e/Math.pow(10,qe(e))===1}function ia(e,t,i){const s=Math.pow(10,i),n=Math.floor(e/s);return Math.ceil(t/s)-n}function yu(e,t){const i=t-e;let s=qe(i);for(;ia(e,t,s)>10;)s++;for(;ia(e,t,s)<10;)s--;return Math.min(s,qe(e))}function vu(e,{min:t,max:i}){t=bt(e.min,t);const s=[],n=qe(t);let a=yu(t,i),r=a<0?Math.pow(10,Math.abs(a)):1;const o=Math.pow(10,a),l=n>a?Math.pow(10,n):0,d=Math.round((t-l)*r)/r,c=Math.floor((t-l)/o/10)*o*10;let u=Math.floor((d-c)/Math.pow(10,a)),h=bt(e.min,Math.round((l+c+u*Math.pow(10,a))*r)/r);for(;h<i;)s.push({value:h,major:ea(h),significand:u}),u>=10?u=u<15?15:20:u++,u>=20&&(a++,u=2,r=a>=0?1:r),h=Math.round((l+c+u*Math.pow(10,a))*r)/r;const m=bt(e.max,h);return s.push({value:m,major:ea(m),significand:u}),s}class ds extends oe{constructor(t){super(t),this.start=void 0,this.end=void 0,this._startValue=void 0,this._valueRange=0}parse(t,i){const s=vi.prototype.parse.apply(this,[t,i]);if(s===0){this._zero=!0;return}return tt(s)&&s>0?s:null}determineDataLimits(){const{min:t,max:i}=this.getMinMax(!0);this.min=tt(t)?Math.max(0,t):null,this.max=tt(i)?Math.max(0,i):null,this.options.beginAtZero&&(this._zero=!0),this._zero&&this.min!==this._suggestedMin&&!tt(this._userMin)&&(this.min=t===Kt(this.min,0)?Kt(this.min,-1):Kt(this.min,0)),this.handleTickRangeOptions()}handleTickRangeOptions(){const{minDefined:t,maxDefined:i}=this.getUserBounds();let s=this.min,n=this.max;const a=o=>s=t?s:o,r=o=>n=i?n:o;s===n&&(s<=0?(a(1),r(10)):(a(Kt(s,-1)),r(Kt(n,1)))),s<=0&&a(Kt(n,-1)),n<=0&&r(Kt(s,1)),this.min=s,this.max=n}buildTicks(){const t=this.options,i={min:this._userMin,max:this._userMax},s=vu(i,this);return t.bounds==="ticks"&&ya(s,this,"value"),t.reverse?(s.reverse(),this.start=this.max,this.end=this.min):(this.start=this.min,this.end=this.max),s}getLabelForValue(t){return t===void 0?"0":Ne(t,this.chart.options.locale,this.options.ticks.format)}configure(){const t=this.min;super.configure(),this._startValue=Dt(t),this._valueRange=Dt(this.max)-Dt(t)}getPixelForValue(t){return(t===void 0||t===0)&&(t=this.min),t===null||isNaN(t)?NaN:this.getPixelForDecimal(t===this.min?0:(Dt(t)-this._startValue)/this._valueRange)}getValueForPixel(t){const i=this.getDecimalForPixel(t);return Math.pow(10,this._startValue+i*this._valueRange)}}B(ds,"id","logarithmic"),B(ds,"defaults",{ticks:{callback:zi.formatters.logarithmic,major:{enabled:!0}}});function cs(e){const t=e.ticks;if(t.display&&e.display){const i=ct(t.backdropPadding);return D(t.font&&t.font.size,G.font.size)+i.height}return 0}function xu(e,t,i){return i=J(i)?i:[i],{w:So(e,t.string,i),h:i.length*t.lineHeight}}function sa(e,t,i,s,n){return e===s||e===n?{start:t-i/2,end:t+i/2}:e<s||e>n?{start:t-i,end:t}:{start:t,end:t+i}}function wu(e){const t={l:e.left+e._padding.left,r:e.right-e._padding.right,t:e.top+e._padding.top,b:e.bottom-e._padding.bottom},i=Object.assign({},t),s=[],n=[],a=e._pointLabels.length,r=e.options.pointLabels,o=r.centerPointLabels?W/a:0;for(let l=0;l<a;l++){const d=r.setContext(e.getPointLabelContext(l));n[l]=d.padding;const c=e.getPointPosition(l,e.drawingArea+n[l],o),u=nt(d.font),h=xu(e.ctx,u,e._pointLabels[l]);s[l]=h;const m=lt(e.getIndexAngle(l)+o),p=Math.round(ys(m)),g=sa(p,c.x,h.w,0,180),f=sa(p,c.y,h.h,90,270);zu(i,t,m,g,f)}e.setCenterPoint(t.l-i.l,i.r-t.r,t.t-i.t,i.b-t.b),e._pointLabelItems=_u(e,s,n)}function zu(e,t,i,s,n){const a=Math.abs(Math.sin(i)),r=Math.abs(Math.cos(i));let o=0,l=0;s.start<t.l?(o=(t.l-s.start)/a,e.l=Math.min(e.l,t.l-o)):s.end>t.r&&(o=(s.end-t.r)/a,e.r=Math.max(e.r,t.r+o)),n.start<t.t?(l=(t.t-n.start)/r,e.t=Math.min(e.t,t.t-l)):n.end>t.b&&(l=(n.end-t.b)/r,e.b=Math.max(e.b,t.b+l))}function ku(e,t,i){const s=e.drawingArea,{extra:n,additionalAngle:a,padding:r,size:o}=i,l=e.getPointPosition(t,s+n+r,a),d=Math.round(ys(lt(l.angle+it))),c=Eu(l.y,o.h,d),u=Su(d),h=Tu(l.x,o.w,u);return{visible:!0,x:l.x,y:c,textAlign:u,left:h,top:c,right:h+o.w,bottom:c+o.h}}function $u(e,t){if(!t)return!0;const{left:i,top:s,right:n,bottom:a}=e;return!(Bt({x:i,y:s},t)||Bt({x:i,y:a},t)||Bt({x:n,y:s},t)||Bt({x:n,y:a},t))}function _u(e,t,i){const s=[],n=e._pointLabels.length,a=e.options,{centerPointLabels:r,display:o}=a.pointLabels,l={extra:cs(a)/2,additionalAngle:r?W/n:0};let d;for(let c=0;c<n;c++){l.padding=i[c],l.size=t[c];const u=ku(e,c,l);s.push(u),o==="auto"&&(u.visible=$u(u,d),u.visible&&(d=u))}return s}function Su(e){return e===0||e===180?"center":e<180?"left":"right"}function Tu(e,t,i){return i==="right"?e-=t:i==="center"&&(e-=t/2),e}function Eu(e,t,i){return i===90||i===270?e-=t/2:(i>270||i<90)&&(e-=t),e}function Mu(e,t,i){const{left:s,top:n,right:a,bottom:r}=i,{backdropColor:o}=t;if(!F(o)){const l=ie(t.borderRadius),d=ct(t.backdropPadding);e.fillStyle=o;const c=s-d.left,u=n-d.top,h=a-s+d.width,m=r-n+d.height;Object.values(l).some(p=>p!==0)?(e.beginPath(),De(e,{x:c,y:u,w:h,h:m,radius:l}),e.fill()):e.fillRect(c,u,h,m)}}function Cu(e,t){const{ctx:i,options:{pointLabels:s}}=e;for(let n=t-1;n>=0;n--){const a=e._pointLabelItems[n];if(!a.visible)continue;const r=s.setContext(e.getPointLabelContext(n));Mu(i,r,a);const o=nt(r.font),{x:l,y:d,textAlign:c}=a;re(i,e._pointLabels[n],l,d+o.lineHeight/2,o,{color:r.color,textAlign:c,textBaseline:"middle"})}}function dr(e,t,i,s){const{ctx:n}=e;if(i)n.arc(e.xCenter,e.yCenter,t,0,K);else{let a=e.getPointPosition(0,t);n.moveTo(a.x,a.y);for(let r=1;r<s;r++)a=e.getPointPosition(r,t),n.lineTo(a.x,a.y)}}function Au(e,t,i,s,n){const a=e.ctx,r=t.circular,{color:o,lineWidth:l}=t;!r&&!s||!o||!l||i<0||(a.save(),a.strokeStyle=o,a.lineWidth=l,a.setLineDash(n.dash||[]),a.lineDashOffset=n.dashOffset,a.beginPath(),dr(e,i,r,s),a.closePath(),a.stroke(),a.restore())}function Lu(e,t,i){return Wt(e,{label:i,index:t,type:"pointLabel"})}class Te extends vi{constructor(t){super(t),this.xCenter=void 0,this.yCenter=void 0,this.drawingArea=void 0,this._pointLabels=[],this._pointLabelItems=[]}setDimensions(){const t=this._padding=ct(cs(this.options)/2),i=this.width=this.maxWidth-t.width,s=this.height=this.maxHeight-t.height;this.xCenter=Math.floor(this.left+i/2+t.left),this.yCenter=Math.floor(this.top+s/2+t.top),this.drawingArea=Math.floor(Math.min(i,s)/2)}determineDataLimits(){const{min:t,max:i}=this.getMinMax(!1);this.min=tt(t)&&!isNaN(t)?t:0,this.max=tt(i)&&!isNaN(i)?i:0,this.handleTickRangeOptions()}computeTickLimit(){return Math.ceil(this.drawingArea/cs(this.options))}generateTickLabels(t){vi.prototype.generateTickLabels.call(this,t),this._pointLabels=this.getLabels().map((i,s)=>{const n=Q(this.options.pointLabels.callback,[i,s],this);return n||n===0?n:""}).filter((i,s)=>this.chart.getDataVisibility(s))}fit(){const t=this.options;t.display&&t.pointLabels.display?wu(this):this.setCenterPoint(0,0,0,0)}setCenterPoint(t,i,s,n){this.xCenter+=Math.floor((t-i)/2),this.yCenter+=Math.floor((s-n)/2),this.drawingArea-=Math.min(this.drawingArea/2,Math.max(t,i,s,n))}getIndexAngle(t){const i=K/(this._pointLabels.length||1),s=this.options.startAngle||0;return lt(t*i+xt(s))}getDistanceFromCenterForValue(t){if(F(t))return NaN;const i=this.drawingArea/(this.max-this.min);return this.options.reverse?(this.max-t)*i:(t-this.min)*i}getValueForDistanceFromCenter(t){if(F(t))return NaN;const i=t/(this.drawingArea/(this.max-this.min));return this.options.reverse?this.max-i:this.min+i}getPointLabelContext(t){const i=this._pointLabels||[];if(t>=0&&t<i.length){const s=i[t];return Lu(this.getContext(),t,s)}}getPointPosition(t,i,s=0){const n=this.getIndexAngle(t)-it+s;return{x:Math.cos(n)*i+this.xCenter,y:Math.sin(n)*i+this.yCenter,angle:n}}getPointPositionForValue(t,i){return this.getPointPosition(t,this.getDistanceFromCenterForValue(i))}getBasePosition(t){return this.getPointPositionForValue(t||0,this.getBaseValue())}getPointLabelPosition(t){const{left:i,top:s,right:n,bottom:a}=this._pointLabelItems[t];return{left:i,top:s,right:n,bottom:a}}drawBackground(){const{backgroundColor:t,grid:{circular:i}}=this.options;if(t){const s=this.ctx;s.save(),s.beginPath(),dr(this,this.getDistanceFromCenterForValue(this._endValue),i,this._pointLabels.length),s.closePath(),s.fillStyle=t,s.fill(),s.restore()}}drawGrid(){const t=this.ctx,i=this.options,{angleLines:s,grid:n,border:a}=i,r=this._pointLabels.length;let o,l,d;if(i.pointLabels.display&&Cu(this,r),n.display&&this.ticks.forEach((c,u)=>{if(u!==0||u===0&&this.min<0){l=this.getDistanceFromCenterForValue(c.value);const h=this.getContext(u),m=n.setContext(h),p=a.setContext(h);Au(this,m,l,r,p)}}),s.display){for(t.save(),o=r-1;o>=0;o--){const c=s.setContext(this.getPointLabelContext(o)),{color:u,lineWidth:h}=c;!h||!u||(t.lineWidth=h,t.strokeStyle=u,t.setLineDash(c.borderDash),t.lineDashOffset=c.borderDashOffset,l=this.getDistanceFromCenterForValue(i.reverse?this.min:this.max),d=this.getPointPosition(o,l),t.beginPath(),t.moveTo(this.xCenter,this.yCenter),t.lineTo(d.x,d.y),t.stroke())}t.restore()}}drawBorder(){}drawLabels(){const t=this.ctx,i=this.options,s=i.ticks;if(!s.display)return;const n=this.getIndexAngle(0);let a,r;t.save(),t.translate(this.xCenter,this.yCenter),t.rotate(n),t.textAlign="center",t.textBaseline="middle",this.ticks.forEach((o,l)=>{if(l===0&&this.min>=0&&!i.reverse)return;const d=s.setContext(this.getContext(l)),c=nt(d.font);if(a=this.getDistanceFromCenterForValue(this.ticks[l].value),d.showLabelBackdrop){t.font=c.string,r=t.measureText(o.label).width,t.fillStyle=d.backdropColor;const u=ct(d.backdropPadding);t.fillRect(-r/2-u.left,-a-c.size/2-u.top,r+u.width,c.size+u.height)}re(t,o.label,0,-a,c,{color:d.color,strokeColor:d.textStrokeColor,strokeWidth:d.textStrokeWidth})}),t.restore()}drawTitle(){}}B(Te,"id","radialLinear"),B(Te,"defaults",{display:!0,animate:!0,position:"chartArea",angleLines:{display:!0,lineWidth:1,borderDash:[],borderDashOffset:0},grid:{circular:!1},startAngle:0,ticks:{showLabelBackdrop:!0,callback:zi.formatters.numeric},pointLabels:{backdropColor:void 0,backdropPadding:2,display:!0,font:{size:10},callback(t){return t},padding:5,centerPointLabels:!1}}),B(Te,"defaultRoutes",{"angleLines.color":"borderColor","pointLabels.color":"color","ticks.color":"color"}),B(Te,"descriptors",{angleLines:{_fallback:"grid"}});const Ei={millisecond:{common:!0,size:1,steps:1e3},second:{common:!0,size:1e3,steps:60},minute:{common:!0,size:6e4,steps:60},hour:{common:!0,size:36e5,steps:24},day:{common:!0,size:864e5,steps:30},week:{common:!1,size:6048e5,steps:4},month:{common:!0,size:2628e6,steps:12},quarter:{common:!1,size:7884e6,steps:4},year:{common:!0,size:3154e7}},mt=Object.keys(Ei);function na(e,t){return e-t}function aa(e,t){if(F(t))return null;const i=e._adapter,{parser:s,round:n,isoWeekday:a}=e._parseOpts;let r=t;return typeof s=="function"&&(r=s(r)),tt(r)||(r=typeof s=="string"?i.parse(r,s):i.parse(r)),r===null?null:(n&&(r=n==="week"&&(me(a)||a===!0)?i.startOf(r,"isoWeek",a):i.startOf(r,n)),+r)}function ra(e,t,i,s){const n=mt.length;for(let a=mt.indexOf(e);a<n-1;++a){const r=Ei[mt[a]],o=r.steps?r.steps:Number.MAX_SAFE_INTEGER;if(r.common&&Math.ceil((i-t)/(o*r.size))<=s)return mt[a]}return mt[n-1]}function Bu(e,t,i,s,n){for(let a=mt.length-1;a>=mt.indexOf(i);a--){const r=mt[a];if(Ei[r].common&&e._adapter.diff(n,s,r)>=t-1)return r}return mt[i?mt.indexOf(i):0]}function Iu(e){for(let t=mt.indexOf(e)+1,i=mt.length;t<i;++t)if(Ei[mt[t]].common)return mt[t]}function oa(e,t,i){if(!i)e[t]=!0;else if(i.length){const{lo:s,hi:n}=vs(i,t),a=i[s]>=t?i[s]:i[n];e[a]=!0}}function ju(e,t,i,s){const n=e._adapter,a=+n.startOf(t[0].value,s),r=t[t.length-1].value;let o,l;for(o=a;o<=r;o=+n.add(o,1,s))l=i[o],l>=0&&(t[l].major=!0);return t}function la(e,t,i){const s=[],n={},a=t.length;let r,o;for(r=0;r<a;++r)o=t[r],n[o]=r,s.push({value:o,major:!1});return a===0||!i?s:ju(e,s,n,i)}class Re extends oe{constructor(t){super(t),this._cache={data:[],labels:[],all:[]},this._unit="day",this._majorUnit=void 0,this._offsets={},this._normalized=!1,this._parseOpts=void 0}init(t,i={}){const s=t.time||(t.time={}),n=this._adapter=new Hl._date(t.adapters.date);n.init(i),Ee(s.displayFormats,n.formats()),this._parseOpts={parser:s.parser,round:s.round,isoWeekday:s.isoWeekday},super.init(t),this._normalized=i.normalized}parse(t,i){return t===void 0?null:aa(this,t)}beforeLayout(){super.beforeLayout(),this._cache={data:[],labels:[],all:[]}}determineDataLimits(){const t=this.options,i=this._adapter,s=t.time.unit||"day";let{min:n,max:a,minDefined:r,maxDefined:o}=this.getUserBounds();function l(d){!r&&!isNaN(d.min)&&(n=Math.min(n,d.min)),!o&&!isNaN(d.max)&&(a=Math.max(a,d.max))}(!r||!o)&&(l(this._getLabelBounds()),(t.bounds!=="ticks"||t.ticks.source!=="labels")&&l(this.getMinMax(!1))),n=tt(n)&&!isNaN(n)?n:+i.startOf(Date.now(),s),a=tt(a)&&!isNaN(a)?a:+i.endOf(Date.now(),s)+1,this.min=Math.min(n,a-1),this.max=Math.max(n+1,a)}_getLabelBounds(){const t=this.getLabelTimestamps();let i=Number.POSITIVE_INFINITY,s=Number.NEGATIVE_INFINITY;return t.length&&(i=t[0],s=t[t.length-1]),{min:i,max:s}}buildTicks(){const t=this.options,i=t.time,s=t.ticks,n=s.source==="labels"?this.getLabelTimestamps():this._generate();t.bounds==="ticks"&&n.length&&(this.min=this._userMin||n[0],this.max=this._userMax||n[n.length-1]);const a=this.min,r=this.max,o=go(n,a,r);return this._unit=i.unit||(s.autoSkip?ra(i.minUnit,this.min,this.max,this._getLabelCapacity(a)):Bu(this,o.length,i.minUnit,this.min,this.max)),this._majorUnit=!s.major.enabled||this._unit==="year"?void 0:Iu(this._unit),this.initOffsets(n),t.reverse&&o.reverse(),la(this,o,this._majorUnit)}afterAutoSkip(){this.options.offsetAfterAutoskip&&this.initOffsets(this.ticks.map(t=>+t.value))}initOffsets(t=[]){let i=0,s=0,n,a;this.options.offset&&t.length&&(n=this.getDecimalForValue(t[0]),t.length===1?i=1-n:i=(this.getDecimalForValue(t[1])-n)/2,a=this.getDecimalForValue(t[t.length-1]),t.length===1?s=a:s=(a-this.getDecimalForValue(t[t.length-2]))/2);const r=t.length<3?.5:.25;i=at(i,0,r),s=at(s,0,r),this._offsets={start:i,end:s,factor:1/(i+1+s)}}_generate(){const t=this._adapter,i=this.min,s=this.max,n=this.options,a=n.time,r=a.unit||ra(a.minUnit,i,s,this._getLabelCapacity(i)),o=D(n.ticks.stepSize,1),l=r==="week"?a.isoWeekday:!1,d=me(l)||l===!0,c={};let u=i,h,m;if(d&&(u=+t.startOf(u,"isoWeek",l)),u=+t.startOf(u,d?"day":r),t.diff(s,i,r)>1e5*o)throw new Error(i+" and "+s+" are too far apart with stepSize of "+o+" "+r);const p=n.ticks.source==="data"&&this.getDataTimestamps();for(h=u,m=0;h<s;h=+t.add(h,o,r),m++)oa(c,h,p);return(h===s||n.bounds==="ticks"||m===1)&&oa(c,h,p),Object.keys(c).sort(na).map(g=>+g)}getLabelForValue(t){const i=this._adapter,s=this.options.time;return s.tooltipFormat?i.format(t,s.tooltipFormat):i.format(t,s.displayFormats.datetime)}format(t,i){const n=this.options.time.displayFormats,a=this._unit,r=i||n[a];return this._adapter.format(t,r)}_tickFormatFunction(t,i,s,n){const a=this.options,r=a.ticks.callback;if(r)return Q(r,[t,i,s],this);const o=a.time.displayFormats,l=this._unit,d=this._majorUnit,c=l&&o[l],u=d&&o[d],h=s[i],m=d&&u&&h&&h.major;return this._adapter.format(t,n||(m?u:c))}generateTickLabels(t){let i,s,n;for(i=0,s=t.length;i<s;++i)n=t[i],n.label=this._tickFormatFunction(n.value,i,t)}getDecimalForValue(t){return t===null?NaN:(t-this.min)/(this.max-this.min)}getPixelForValue(t){const i=this._offsets,s=this.getDecimalForValue(t);return this.getPixelForDecimal((i.start+s)*i.factor)}getValueForPixel(t){const i=this._offsets,s=this.getDecimalForPixel(t)/i.factor-i.end;return this.min+s*(this.max-this.min)}_getLabelSize(t){const i=this.options.ticks,s=this.ctx.measureText(t).width,n=xt(this.isHorizontal()?i.maxRotation:i.minRotation),a=Math.cos(n),r=Math.sin(n),o=this._resolveTickFontOptions(0).size;return{w:s*a+o*r,h:s*r+o*a}}_getLabelCapacity(t){const i=this.options.time,s=i.displayFormats,n=s[i.unit]||s.millisecond,a=this._tickFormatFunction(t,0,la(this,[t],this._majorUnit),n),r=this._getLabelSize(a),o=Math.floor(this.isHorizontal()?this.width/r.w:this.height/r.h)-1;return o>0?o:1}getDataTimestamps(){let t=this._cache.data||[],i,s;if(t.length)return t;const n=this.getMatchingVisibleMetas();if(this._normalized&&n.length)return this._cache.data=n[0].controller.getAllParsedValues(this);for(i=0,s=n.length;i<s;++i)t=t.concat(n[i].controller.getAllParsedValues(this));return this._cache.data=this.normalize(t)}getLabelTimestamps(){const t=this._cache.labels||[];let i,s;if(t.length)return t;const n=this.getLabels();for(i=0,s=n.length;i<s;++i)t.push(aa(this,n[i]));return this._cache.labels=this._normalized?t:this.normalize(t)}normalize(t){return wa(t.sort(na))}}B(Re,"id","time"),B(Re,"defaults",{bounds:"data",adapters:{},time:{parser:!1,unit:!1,round:!1,isoWeekday:!1,minUnit:"millisecond",displayFormats:{}},ticks:{source:"auto",callback:!1,major:{enabled:!1}}});function ei(e,t,i){let s=0,n=e.length-1,a,r,o,l;i?(t>=e[s].pos&&t<=e[n].pos&&({lo:s,hi:n}=Lt(e,"pos",t)),{pos:a,time:o}=e[s],{pos:r,time:l}=e[n]):(t>=e[s].time&&t<=e[n].time&&({lo:s,hi:n}=Lt(e,"time",t)),{time:a,pos:o}=e[s],{time:r,pos:l}=e[n]);const d=r-a;return d?o+(l-o)*(t-a)/d:o}class us extends Re{constructor(t){super(t),this._table=[],this._minPos=void 0,this._tableRange=void 0}initOffsets(){const t=this._getTimestampsForTable(),i=this._table=this.buildLookupTable(t);this._minPos=ei(i,this.min),this._tableRange=ei(i,this.max)-this._minPos,super.initOffsets(t)}buildLookupTable(t){const{min:i,max:s}=this,n=[],a=[];let r,o,l,d,c;for(r=0,o=t.length;r<o;++r)d=t[r],d>=i&&d<=s&&n.push(d);if(n.length<2)return[{time:i,pos:0},{time:s,pos:1}];for(r=0,o=n.length;r<o;++r)c=n[r+1],l=n[r-1],d=n[r],Math.round((c+l)/2)!==d&&a.push({time:d,pos:r/(o-1)});return a}_generate(){const t=this.min,i=this.max;let s=super.getDataTimestamps();return(!s.includes(t)||!s.length)&&s.splice(0,0,t),(!s.includes(i)||s.length===1)&&s.push(i),s.sort((n,a)=>n-a)}_getTimestampsForTable(){let t=this._cache.all||[];if(t.length)return t;const i=this.getDataTimestamps(),s=this.getLabelTimestamps();return i.length&&s.length?t=this.normalize(i.concat(s)):t=i.length?i:s,t=this._cache.all=t,t}getDecimalForValue(t){return(ei(this._table,t)-this._minPos)/this._tableRange}getValueForPixel(t){const i=this._offsets,s=this.getDecimalForPixel(t)/i.factor-i.end;return ei(this._table,s*this._tableRange+this._minPos,!0)}}B(us,"id","timeseries"),B(us,"defaults",Re.defaults);var Pu=Object.freeze({__proto__:null,CategoryScale:os,LinearScale:ls,LogarithmicScale:ds,RadialLinearScale:Te,TimeScale:Re,TimeSeriesScale:us});const Du=[Nl,yc,gu,Pu];yt.register(...Du);console.log=()=>{};console.log("🚀 App initialized");const Ou={ru:{login:"Вход",logout:"Выйти",save:"Сохранить",cancel:"Отмена",delete:"Удалить",edit:"Редактировать",add:"Добавить",back:"Назад",next:"Далее",submit:"Отправить",loading:"Загрузка...",error:"Ошибка",success:"Успешно",selectRole:"Выберите роль",loginAsStudent:"Войти как Ученик",loginAsTeacher:"Войти как Учитель",loginAsAdmin:"Войти как Администратор",username:"Логин",password:"Пароль",changePassword:"Сменить пароль",currentPassword:"Текущий пароль",newPassword:"Новый пароль",confirmPassword:"Подтвердите пароль",mustChangePassword:"Вы должны сменить временный пароль",student:"Ученик",dashboard:"Главная",subjects:"Предметы",subjectTests:"Тесты по предметам",interestTest:"Тест на определение интересов",myProfile:"Мой профиль",firstName:"Имя",lastName:"Фамилия",grade:"Класс",interests:"Интересы",welcome:"Добро пожаловать",teacher:"Учитель",classes:"Классы",manageTests:"Управление тестами",modules:"Модули",module:"Модуль",createModule:"Создать модуль",moduleName:"Название модуля",moduleDescription:"Описание модуля",tests:"Тесты",test:"Тест",createTest:"Создать тест",testName:"Название теста",testDuration:"Время на прохождение (минуты)",maxScore:"Максимальный балл",questions:"Вопросы",question:"Вопрос",addQuestion:"Добавить вопрос",questionText:"Текст вопроса",questionType:"Тип вопроса",singleChoice:"Один правильный ответ",multipleChoice:"Несколько правильных ответов",answers:"Варианты ответов",correctAnswer:"Правильный ответ",addAnswer:"Добавить вариант",publish:"Опубликовать",draft:"Черновик",published:"Опубликован",status:"Статус",notStarted:"Не начат",inProgress:"В процессе",completed:"Завершён",result:"Результат",score:"Баллы",percentage:"Процент",attempts:"Попытки",startTest:"Начать тест",continueTest:"Продолжить тест",submitTest:"Завершить тест",viewResults:"Посмотреть результаты",analytics:"Аналитика",averageScore:"Средний балл",completionRate:"Процент выполнения",controlTests:"Контрольные работы",controlTest:"Контрольная работа",noControlTests:"Контрольные работы не назначены",admin:"Администратор",adminPanel:"Админ Панель",adminManagement:"Управление системой и контроль",userManagement:"Управление пользователями",users:"Пользователи",addUser:"Добавить пользователя",role:"Роль",actions:"Действия",analytics:"Аналитика",analyticsDesc:"Статистика и метрики системы",classes:"Классы",classesManagement:"Управление классами и группами",teacherTests:"Тесты учителей",teacherTestsDesc:"Тесты для оценки компетенций",newUser:"Новый пользователь",newUserDesc:"Добавить ученика или учителя",passwords:"Пароли",passwordsManagement:"Управление паролями пользователей",students:"Ученики",teachers:"Учителя",classFilter:"Фильтр по классу",allClasses:"Все классы",noStudents:"Учеников не найдено",noTeachers:"Учителей не найдено",subjectsManagement:"Управление предметами",subjectsManagementDesc:"Добавляйте и редактируйте школьные предметы",addSubject:"Добавить предмет",editSubject:"Редактировать предмет",noSubjects:"Предметы не найдены"},uz:{login:"Kirish",logout:"Chiqish",save:"Saqlash",cancel:"Bekor qilish",delete:"O'chirish",edit:"Tahrirlash",add:"Qo'shish",back:"Orqaga",next:"Keyingi",submit:"Yuborish",loading:"Yuklanmoqda...",error:"Xato",success:"Muvaffaqiyatli",selectRole:"Rolni tanlang",loginAsStudent:"O'quvchi sifatida kirish",loginAsTeacher:"O'qituvchi sifatida kirish",loginAsAdmin:"Administrator sifatida kirish",username:"Login",password:"Parol",changePassword:"Parolni o'zgartirish",currentPassword:"Joriy parol",newPassword:"Yangi parol",confirmPassword:"Parolni tasdiqlang",mustChangePassword:"Vaqtinchalik parolingizni o'zgartirishingiz kerak",student:"O'quvchi",dashboard:"Bosh sahifa",subjects:"Fanlar",subjectTests:"Fan testlari",interestTest:"Qiziqishlarni aniqlash testi",myProfile:"Mening profilim",firstName:"Ism",lastName:"Familiya",grade:"Sinf",interests:"Qiziqishlar",welcome:"Xush kelibsiz",teacher:"O'qituvchi",classes:"Sinflar",manageTests:"Testlarni boshqarish",modules:"Modullar",module:"Modul",createModule:"Modul yaratish",moduleName:"Modul nomi",moduleDescription:"Modul tavsifi",tests:"Testlar",test:"Test",createTest:"Test yaratish",testName:"Test nomi",testDuration:"Test vaqti (daqiqalar)",maxScore:"Maksimal ball",questions:"Savollar",question:"Savol",addQuestion:"Savol qo'shish",questionText:"Savol matni",questionType:"Savol turi",singleChoice:"Bitta to'g'ri javob",multipleChoice:"Bir nechta to'g'ri javob",answers:"Javob variantlari",correctAnswer:"To'g'ri javob",addAnswer:"Variant qo'shish",publish:"Nashr qilish",draft:"Qoralama",published:"Nashr qilingan",status:"Holat",notStarted:"Boshlanmagan",inProgress:"Jarayonda",completed:"Tugallangan",result:"Natija",score:"Ballar",percentage:"Foiz",attempts:"Urinishlar",startTest:"Testni boshlash",continueTest:"Testni davom ettirish",submitTest:"Testni yakunlash",viewResults:"Natijalarni ko'rish",analytics:"Analitika",averageScore:"O'rtacha ball",completionRate:"Bajarilish foizi",controlTests:"Nazorat isbotlari",controlTest:"Nazorat isbo'ti",noControlTests:"Nazorat isbotlari tayinlanmagan",admin:"Administrator",adminPanel:"Admin Panel",adminManagement:"Tizimni boshqarish va nazorat",userManagement:"Foydalanuvchilarni boshqarish",users:"Foydalanuvchilar",addUser:"Foydalanuvchi qo'shish",role:"Rol",actions:"Harakatlar",analytics:"Analitika",analyticsDesc:"Statistika va tizim metrikalari",classes:"Sinflar",classesManagement:"Sinflar va guruhlarni boshqarish",teacherTests:"O'qituvchi testlari",teacherTestsDesc:"Kompetensiyalarni baholash testlari",newUser:"Yangi foydalanuvchi",newUserDesc:"O'quvchi yoki o'qituvchi qo'shish",passwords:"Parollar",passwordsManagement:"Foydalanuvchi parollarini boshqarish",students:"O'quvchilar",teachers:"O'qituvchilar",classFilter:"Sinf bo'yicha filtrlash",allClasses:"Barcha sinflar",noStudents:"O'quvchilar topilmadi",noTeachers:"O'qituvchilar topilmadi",subjectsManagement:"Fanlarni boshqarish",subjectsManagementDesc:"Fanlarni qo'shing va tahrirlang",addSubject:"Fan qo'shish",editSubject:"Fanni tahrirlash",noSubjects:"Fanlar topilmadi"}};class qu{constructor(){this.state=this.loadState(),this.listeners=[]}loadState(){var t;try{const i=localStorage.getItem("auth-storage");if(i){const s=JSON.parse(i);return s.token?(this.setAuthHeader(s.token),console.log("🔑 Token loaded from localStorage"),s.refreshToken?(console.log("🔄 Starting token refresh timer..."),this.startTokenRefreshTimer(s.refreshToken),setTimeout(()=>this.checkAndRefreshToken(s.token,s.refreshToken),100)):console.warn("⚠️ No refresh token found - cannot auto-refresh")):console.log("⚠️ No token in localStorage"),console.log("📦 State loaded:",{isAuthenticated:s.isAuthenticated,user:(t=s.user)==null?void 0:t.username,hasToken:!!s.token,hasRefreshToken:!!s.refreshToken}),s}else console.log("📦 No saved state in localStorage")}catch(i){console.error("Error loading state:",i)}return{user:null,token:null,refreshToken:null,isAuthenticated:!1,language:"ru"}}saveState(){try{localStorage.setItem("auth-storage",JSON.stringify(this.state))}catch(t){console.error("Error saving state:",t)}}setState(t){this.state={...this.state,...t},this.saveState(),this.notify()}getState(){return this.state}subscribe(t){return this.listeners.push(t),()=>{this.listeners=this.listeners.filter(i=>i!==t)}}notify(){this.listeners.forEach(t=>t(this.state))}setAuthHeader(t){this.authToken=t}async login(t,i,s){try{const n=await fetch(`${Y}/api/auth/login`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:t,password:i,role:s})});let a;try{a=await n.json()}catch{const o=await n.text();return console.error("Server returned non-JSON response:",o),{success:!1,error:"Server error: "+o.substring(0,100)}}return n.ok?(this.setAuthHeader(a.accessToken),this.setState({refreshToken:a.refreshToken}),a.forcePasswordChange?(this.setState({user:a.user,token:a.accessToken,isAuthenticated:!0,forcePasswordChange:!0}),{success:!0,user:a.user,forcePasswordChange:!0,requirePasswordChange:!0}):(this.setState({user:a.user,token:a.accessToken,isAuthenticated:!0}),this.startTokenRefreshTimer(a.refreshToken),{success:!0,user:a.user,forcePasswordChange:!1,requirePasswordChange:a.requirePasswordChange||a.user.isTemporaryPassword||!1})):{success:!1,error:a.message||"Login failed"}}catch(n){return console.error("Login error:",n),{success:!1,error:"Network error"}}}async refreshAccessToken(t){if(this._refreshing)return console.log("⏳ Token refresh already in progress..."),new Promise(i=>{const s=setInterval(()=>{this._refreshing||(clearInterval(s),i({success:!!this.getState().token}))},100)});this._refreshing=!0;try{const i=t||this.getState().refreshToken;if(!i)return console.warn("🔄 No refresh token available"),this._refreshing=!1,{success:!1};const s=await fetch(`${Y}/api/auth/refresh`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({refreshToken:i})}),n=await s.json();return s.ok?(this.setAuthHeader(n.accessToken),this.setState({token:n.accessToken}),console.log("✅ Access token refreshed"),this._refreshing=!1,{success:!0}):(console.warn("🔄 Refresh token invalid, logging out"),this._refreshing=!1,this.logout(),{success:!1})}catch(i){return console.error("Token refresh error:",i),this._refreshing=!1,{success:!1}}}async checkAndRefreshToken(t,i){if(t)try{const s=t.split(".");if(s.length!==3)return;const a=JSON.parse(atob(s[1])).exp*1e3,r=Date.now(),o=a-r;console.log(`⏰ Token expires in ${Math.round(o/1e3/60)} minutes`),o<2*60*1e3&&(console.log("🔄 Token expiring soon, refreshing now..."),await this.refreshAccessToken(i))}catch(s){console.warn("Could not check token expiry:",s)}}startTokenRefreshTimer(t){this.tokenRefreshInterval&&clearInterval(this.tokenRefreshInterval),this.tokenRefreshInterval=setInterval(()=>{console.log("🔄 Auto-refreshing access token..."),this.refreshAccessToken(t)},14*60*1e3),console.log("⏱️ Token refresh timer started (14 minutes)")}async changePassword(t,i){try{const s=await fetch(`${Y}/api/auth/change-password`,{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${this.state.token}`},body:JSON.stringify({currentPassword:t,newPassword:i})}),n=await s.json();if(!s.ok)return{success:!1,error:n.message||"Password change failed"};const a={...this.state.user,isTemporaryPassword:!1};return this.setState({user:a}),{success:!0}}catch(s){return console.error("Change password error:",s),{success:!1,error:"Network error"}}}logout(){console.log("🔐 Logging out..."),this.state.refreshToken&&fetch(`${Y}/api/auth/logout`,{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${this.state.token}`},body:JSON.stringify({refreshToken:this.state.refreshToken})}).catch(t=>console.error("Error revoking token:",t)),this.tokenRefreshInterval&&clearInterval(this.tokenRefreshInterval),this.setState({user:null,token:null,refreshToken:null,isAuthenticated:!1}),this.authToken=null,localStorage.removeItem("auth-storage"),console.log("✅ Logout complete, localStorage cleared")}setLanguage(t){this.setState({language:t})}}const k=new qu,Y=window.location.origin;async function C(e,t="GET",i=null){const s=k.getState().token;console.log("🔑 API Request to:",e,"| Token exists:",!!s);let n;typeof t=="string"?n={method:t,...i&&{body:JSON.stringify(i)}}:n=t||{};const a={"Content-Type":"application/json",...s&&{Authorization:`Bearer ${s}`},...n.headers};try{const r=e.startsWith("http")?e:`${Y}${e}`,o=await fetch(r,{...n,headers:a}),l=await o.text();let d=null;if(l)try{d=JSON.parse(l)}catch(c){if(console.error("❌ API JSON parse error:",c),o.ok)return{success:!1,error:"Invalid JSON response"}}if(!o.ok){if(console.error("❌ API Error:",o.status,d),o.status===401){console.warn("🔄 Access token expired, trying to refresh...");const c=k.getState().refreshToken;if(c&&e!==`${Y}/api/auth/refresh`&&(await k.refreshAccessToken(c)).success){console.log("✅ Token refreshed, retrying request..."),n.headers.Authorization=`Bearer ${k.getState().token}`;const h=await fetch(e,n),m=await h.json();if(h.ok)return m.success!==void 0?m:{success:!0,data:m}}console.error("🚫 Cannot refresh token, logging out..."),k.logout(),window.location.pathname!=="/login"&&$.navigate("/login")}throw o.status===403&&(console.error("🚫 Access forbidden. Token:",k.getState().token?"exists":"missing"),k.logout(),window.location.pathname!=="/login"&&$.navigate("/login")),new Error((d==null?void 0:d.message)||(d==null?void 0:d.error)||"Request failed")}return d==null?{success:!0,data:null}:d.success!==void 0?d:{success:!0,data:d}}catch(r){return console.error("API Error:",r),{success:!1,error:r.message}}}window.copyToClipboard=function(e,t){var s;const i=((s=k.getState().user)==null?void 0:s.language)||"ru";try{navigator.clipboard&&navigator.clipboard.writeText?navigator.clipboard.writeText(e).then(()=>{const n=t.innerHTML;t.innerHTML="✅ "+(i==="uz"?"Nusxa olindi!":"Скопировано!"),t.style.background="#10b981",setTimeout(()=>{t.innerHTML=n,t.style.background="linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)"},2e3)}).catch(()=>window.fallbackCopy(e,t)):window.fallbackCopy(e,t)}catch{window.fallbackCopy(e,t)}};window.fallbackCopy=function(e,t){var n;const i=((n=k.getState().user)==null?void 0:n.language)||"ru",s=document.createElement("textarea");s.value=e,s.style.position="fixed",s.style.opacity="0",document.body.appendChild(s),s.select();try{document.execCommand("copy");const a=t.innerHTML;t.innerHTML="✅ "+(i==="uz"?"Nusxa olindi!":"Скопировано!"),t.style.background="#10b981",setTimeout(()=>{t.innerHTML=a,t.style.background="linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)"},2e3)}catch{alert(i==="uz"?"Nusxa olish muvaffaq bo'lmadi":"Ошибка при копировании")}document.body.removeChild(s)};function I(e,t="info",i=4e3){var n;if(i>0){const a="toastContainer";let r=document.getElementById(a);r||(r=document.createElement("div"),r.id=a,r.className="toast-container",document.body.appendChild(r));const o=document.createElement("div");o.id="modernAlert-"+Date.now(),o.className=`alert-notification alert-${t}`;const l={success:"✅",error:"❌",warning:"⚠️",info:"ℹ️"};return o.innerHTML=`
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
        `,document.body.appendChild(a),setTimeout(()=>a.classList.add("show"),10);const l=()=>{a.classList.remove("show"),setTimeout(()=>a.remove(),300)};return document.getElementById("alertOkBtn").addEventListener("click",l),new Promise(d=>{document.getElementById("alertOkBtn").addEventListener("click",()=>d(!0))})}}function Vt(e,t=""){const i=k.getState().language,s=document.createElement("div");return s.className="modal modal--centered add-user-modal",s.innerHTML=`
        <div class="modal-content" style="max-width: 450px;">
            ${t?`<h2 style="margin: 0 0 1rem 0;">${t}</h2>`:""}
            <p style="color: var(--text-secondary); margin: 0 0 2rem 0; font-size: 1.05rem;">${e}</p>
            <div style="display: flex; gap: 1rem; justify-content: flex-end;">
                <button class="button button-secondary" id="confirmNoBtn">${i==="uz"?"Yo'q":"Нет"}</button>
                <button class="button button-primary" id="confirmYesBtn">${i==="uz"?"Ha":"Да"}</button>
            </div>
        </div>
    `,document.body.appendChild(s),setTimeout(()=>s.classList.add("show"),10),new Promise(n=>{const a=r=>{s.classList.remove("show"),setTimeout(()=>s.remove(),300),n(r)};document.getElementById("confirmYesBtn").addEventListener("click",()=>a(!0)),document.getElementById("confirmNoBtn").addEventListener("click",()=>a(!1))})}function L(e){var i;const t=k.getState().language;return((i=Ou[t])==null?void 0:i[e])||e}const ii=["#3B82F6","#10B981","#F59E0B","#8B5CF6","#EC4899","#06B6D4","#F97316"],Ru=[{id:"1",name:"Алгебра"},{id:"2",name:"Геометрия"},{id:"3",name:"Физика"},{id:"4",name:"Химия"},{id:"5",name:"Биология"},{id:"6",name:"История"},{id:"7",name:"Литература"},{id:"8",name:"География"},{id:"9",name:"Английский язык"},{id:"10",name:"Информатика"}],Fu=[{ru:"Алгебра",uz:"Algebra",en:"Algebra"},{ru:"Геометрия",uz:"Geometriya",en:"Geometry"},{ru:"Физика",uz:"Fizika",en:"Physics"},{ru:"Химия",uz:"Kimyo",en:"Chemistry"},{ru:"Биология",uz:"Biologiya",en:"Biology"},{ru:"История",uz:"Tarix",en:"History"},{ru:"Литература",uz:"Adabiyot",en:"Literature"},{ru:"География",uz:"Geografiya",en:"Geography"},{ru:"Английский язык",uz:"Ingliz tili",en:"English"},{ru:"Информатика",uz:"Informatika",en:"Informatics"},{ru:"Математика",uz:"Matematika",en:"Mathematics"}];function Nu(e){if(!e)return[];const t=String(e).toLowerCase(),i=new Set([t]);return Fu.forEach(s=>{const n=[s.ru,s.uz,s.en].filter(Boolean).map(a=>String(a).toLowerCase());n.includes(t)&&n.forEach(a=>i.add(a))}),Array.from(i)}function Mi(){return document.documentElement.classList.contains("light-theme")?"#000000":"#FFFFFF"}function Cs(){return Mi()+"33"}function As(){return Mi()}function da(e=[]){const t=(Array.isArray(e)?e:[]).map(a=>{const r=(a==null?void 0:a._id)||(a==null?void 0:a.id)||(a==null?void 0:a.subjectId)||(a==null?void 0:a.name)||(a==null?void 0:a.label)||(a==null?void 0:a.subjectName);return{id:r?String(r):"",name:(a==null?void 0:a.name)||(a==null?void 0:a.subjectName)||(a==null?void 0:a.label)||""}}).filter(a=>a.id||a.name),i=new Map(t.map(a=>[a.id,a])),s=new Map(t.map(a=>[(a.name||"").toLowerCase(),a])),n=Ru.map(a=>{const r=i.get(a.id)||s.get(a.name.toLowerCase());return r?{...a,...r}:a});return t.forEach(a=>{n.some(o=>{const l=o.id&&a.id&&o.id===a.id,d=(o.name||"").toLowerCase()===(a.name||"").toLowerCase();return l||d})||n.push(a)}),n}function Ls(e,t,i={}){var d;const{subjectList:s=[],includeAllSubjects:n=!1}=i;if(k.getState().language,!((d=e==null?void 0:e.series)!=null&&d.length)){if(!n)return{labels:[],series:[]};const u=da(s).map(h=>h.name);return{labels:u,series:[{label:t,data:u.map(()=>null)}]}}const a=new Map;if(e.series.forEach(c=>{const u=(c.data||[]).filter(p=>typeof p=="number"),h=u.length?Math.round(u.reduce((p,g)=>p+g,0)/u.length*10)/10:null;c.subjectId&&a.set(String(c.subjectId),h);const m=(c.subjectName||c.label||"").toLowerCase();m&&a.set(m,h)}),!n){const c=[],u=[];return e.series.forEach(h=>{const m=(h.data||[]).filter(g=>typeof g=="number"),p=m.length?Math.round(m.reduce((g,f)=>g+f,0)/m.length*10)/10:null;c.push(h.subjectName||h.label||""),u.push(p)}),{labels:c,series:[{label:t,data:u}]}}const r=da(s),o=r.map(c=>c.name),l=r.map(c=>{const u=c.id?String(c.id):"";if(u&&a.has(u))return a.get(u);const h=(c.name||"").toLowerCase();if(h&&a.has(h))return a.get(h);const m=Nu(c.name);for(const p of m)if(a.has(p))return a.get(p);return null});return{labels:o,series:[{label:t,data:l}]}}function hs(e,t,i,s=[]){var c;const n=document.getElementById(e),a=document.getElementById(t);if(!n)return;const r=Cs(),o=As();if((c=window._chartInstances)!=null&&c[e]&&window._chartInstances[e].destroy(),!i||!i.labels||i.labels.length===0){n&&(n.style.display="none"),a&&(a.style.display="block");return}a&&(a.style.display="none"),n.style.display="block";const l=i.series.map((u,h)=>({label:u.label||u.subjectName,data:u.data,backgroundColor:ii[h%ii.length]+"CC",borderColor:ii[h%ii.length],borderWidth:1,borderRadius:8,maxBarThickness:48}));s.forEach(u=>{l.push({label:u.label,data:u.data,backgroundColor:(u.color||"#64748B")+"66",borderColor:u.color||"#64748B",borderWidth:1,borderRadius:8,maxBarThickness:48})});const d=new yt(n,{type:"bar",data:{labels:i.labels,datasets:l},options:{responsive:!0,maintainAspectRatio:!1,plugins:{legend:{display:!0,labels:{color:o}}},scales:{y:{beginAtZero:!0,max:100,grid:{color:r},ticks:{color:o}},x:{grid:{display:!1},ticks:{color:o}}}}});window._chartInstances=window._chartInstances||{},window._chartInstances[e]=d}function te(e,t,i,s=[]){var u;const n=document.getElementById(e),a=document.getElementById(t);if(!n)return;const r=Mi(),o=Cs(),l=As();if((u=window._chartInstances)!=null&&u[e]&&window._chartInstances[e].destroy(),!i||!i.labels||i.labels.length===0){n&&(n.style.display="none"),a&&(a.style.display="block");return}a&&(a.style.display="none"),n.style.display="block";const d=i.series.map((h,m)=>({label:h.subjectName||h.label,data:h.data,borderColor:r,backgroundColor:r+"22",borderWidth:2,fill:!1,tension:.35,pointRadius:3,pointHoverRadius:5}));s.forEach((h,m)=>{d.push({label:h.label,data:h.data,borderColor:r,backgroundColor:"transparent",borderWidth:2,borderDash:h.dash||[6,4],fill:!1,tension:.35,pointRadius:2,pointHoverRadius:4})});const c=new yt(n,{type:"line",data:{labels:i.labels,datasets:d},options:{responsive:!0,maintainAspectRatio:!1,plugins:{legend:{display:!0,labels:{color:l,usePointStyle:!0}}},scales:{y:{beginAtZero:!0,max:100,grid:{color:o},ticks:{color:l}},x:{grid:{color:o},ticks:{color:l}}}}});window._chartInstances=window._chartInstances||{},window._chartInstances[e]=c}function Hu(){document.querySelectorAll(".admin-modal-overlay, .custom-modal-overlay, .modal").forEach(e=>e.remove())}class Vu{constructor(){this.routes={},this.currentRoute=null,window.addEventListener("popstate",()=>{this.navigate(window.location.pathname,!1)})}register(t,i){this.routes[t]=i}navigate(t,i=!0){console.log("🔍 Router.navigate called:",t),window._testTimerInterval&&(clearInterval(window._testTimerInterval),window._testTimerInterval=null,console.log("🧹 Timer cleared on navigation")),Hu(),i&&window.history.pushState({},"",t),this.currentRoute=t;const s=this.routes[t];if(s){console.log("✅ Found exact route match for:",t),s(),gs();return}for(const[a,r]of Object.entries(this.routes))if(a.includes(":")){const o=[],l=new RegExp("^"+a.replace(/:([^\/]+)/g,(c,u)=>(o.push(u),"([^/]+)"))+"$"),d=t.match(l);if(console.log(`🔍 Checking route pattern: ${a} against ${t}`,d?"✅ MATCH":"❌ NO MATCH"),d){console.log("✅ Found dynamic route match:",a),this.currentParams={},o.forEach((c,u)=>{this.currentParams[c]=d[u+1]}),console.log("📝 Route params:",this.currentParams),r(this.currentParams),gs();return}}console.log("❌ No route found for:",t);const n=this.routes["/"];n&&n()}}function ne(){const e=k.getState(),t=e.language;console.log("🔧 renderLanguageSwitch called, current language:",t);const i=document.getElementById("langBtn");if(i){const l=document.getElementById("languageSwitch");e.isAuthenticated&&l?l.style.display="none":l&&(l.style.display="block"),t==="ru"?i.innerHTML='<span style="color: white; font-weight: 900;">RU</span> | <span style="opacity: 0.5;">UZ</span>':i.innerHTML='<span style="opacity: 0.5;">RU</span> | <span style="color: white; font-weight: 900;">UZ</span>',i.removeEventListener("click",i._switchLangHandler),i._switchLangHandler=()=>{const d=t==="ru"?"uz":"ru";console.log("🌍 Switching language to:",d),k.setLanguage(d),ne(),Qi()},i.addEventListener("click",i._switchLangHandler)}const s=document.getElementById("sidebarLangBtn"),n=document.getElementById("sidebarLangText");console.log("🔧 Sidebar language button check:",{found:!!s,sidebarLangBtn:s,sidebarLangText:n}),s&&n&&(t==="ru"?n.innerHTML='<span style="font-weight: 900;">RU</span> | <span style="opacity: 0.6;">UZ</span>':n.innerHTML='<span style="opacity: 0.6;">RU</span> | <span style="font-weight: 900;">UZ</span>',s.removeEventListener("click",s._switchLangHandler),s._switchLangHandler=()=>{const l=t==="ru"?"uz":"ru";console.log("🌍 Switching language to:",l),k.setLanguage(l),ne(),Qi()},s.addEventListener("click",s._switchLangHandler));const a=document.querySelector('[data-nav="language"]'),r=document.getElementById("bottomLangText");r&&(r.textContent=t==="ru"?"RU":"UZ"),a&&(a.removeEventListener("click",a._switchLangHandler),a._switchLangHandler=l=>{l.preventDefault(),l.stopPropagation();const d=t==="ru"?"uz":"ru";console.log("🌍 Switching language to:",d),k.setLanguage(d),ne(),Qi()},a.addEventListener("click",a._switchLangHandler,!0));const o=document.getElementById("bottomProfileText");o&&(o.textContent=t==="ru"?"Профиль":"Profil")}function Qi(){const e=window.location.pathname;console.log("🔄 Refreshing page with new language:",e),$.navigate(e==="/"?"/":e,!1)}function cr(){const e=document.getElementById("themeBtn"),t=document.getElementById("topbarThemeBtn");if(!e&&!t)return;const i=localStorage.getItem("theme")||"dark",s=a=>{const r=a==="light";r?document.documentElement.classList.add("light-theme"):document.documentElement.classList.remove("light-theme");const o=r?"☀️":"🌙",l=r?"Switch to Dark Mode":"Switch to Light Mode";e&&(e.innerHTML=o,e.title=l),t&&(t.innerHTML=o,t.title=l)};s(i);const n=()=>{if(e!=null&&e._ignoreNextClick){e._ignoreNextClick=!1;return}const r=(localStorage.getItem("theme")||"dark")==="dark"?"light":"dark";localStorage.setItem("theme",r),s(r);const o=Mi(),l=Cs(),d=As();Object.values(window._chartInstances||{}).forEach(c=>{var u,h,m,p,g,f,y,b,x,v,w,z,E,_,S,T;c&&((m=(h=(u=c.options)==null?void 0:u.scales)==null?void 0:h.x)!=null&&m.grid&&(c.options.scales.x.grid.color=l),(f=(g=(p=c.options)==null?void 0:p.scales)==null?void 0:g.y)!=null&&f.grid&&(c.options.scales.y.grid.color=l),(x=(b=(y=c.options)==null?void 0:y.scales)==null?void 0:b.x)!=null&&x.ticks&&(c.options.scales.x.ticks.color=d),(z=(w=(v=c.options)==null?void 0:v.scales)==null?void 0:w.y)!=null&&z.ticks&&(c.options.scales.y.ticks.color=d),(S=(_=(E=c.options)==null?void 0:E.plugins)==null?void 0:_.legend)!=null&&S.labels&&(c.options.plugins.legend.labels.color=d),((T=c.config)==null?void 0:T.type)==="line"&&c.data.datasets.forEach(M=>{M.borderColor=o,M.backgroundColor=o+"22"}),c.update())})};e&&(e.removeEventListener("click",e._toggleHandler),e._toggleHandler=n,e.addEventListener("click",e._toggleHandler)),t&&(t.removeEventListener("click",t._toggleHandler),t._toggleHandler=n,t.addEventListener("click",t._toggleHandler)),Wu()}function Wu(){const e=document.getElementById("themeBtn");if(!e)return;const t=()=>window.matchMedia("(max-width: 768px)").matches,i=16,s=(d,c,u)=>Math.min(Math.max(d,c),u),n=(d,c)=>{const u=e.getBoundingClientRect(),h=window.innerWidth-u.width-i,m=window.innerHeight-u.height-i,p=s(d,i,h),g=s(c,i,m);e.style.left=`${p}px`,e.style.top=`${g}px`,e.style.right="auto",e.style.bottom="auto"},a=()=>{const d=e.getBoundingClientRect(),c=[{left:i,top:i},{left:window.innerWidth-d.width-i,top:i},{left:i,top:window.innerHeight-d.height-i},{left:window.innerWidth-d.width-i,top:window.innerHeight-d.height-i}],u=d.left+d.width/2,h=d.top+d.height/2;let m=c[0],p=1/0;c.forEach(g=>{const f=u-(g.left+d.width/2),y=h-(g.top+d.height/2),b=Math.hypot(f,y);b<p&&(p=b,m=g)}),n(m.left,m.top)},r=()=>{if(e._dragEnabled)return;e._dragEnabled=!0,e.classList.add("theme-toggle-draggable");const d=e.getBoundingClientRect();!e.style.left&&!e.style.top?n(window.innerWidth-d.width-i,i):a();let c=!1,u=!1,h=0,m=0;e._dragPointerDown=p=>{var b;if(!t()||p.button!==void 0&&p.button!==0)return;c=!0,u=!1;const g=e.getBoundingClientRect();h=p.clientX-g.left,m=p.clientY-g.top,e.classList.add("dragging"),(b=e.setPointerCapture)==null||b.call(e,p.pointerId);const f=x=>{if(!c)return;const v=x.clientX-h,w=x.clientY-m;n(v,w),u||(u=Math.abs(x.clientX-p.clientX)>4||Math.abs(x.clientY-p.clientY)>4)},y=()=>{c=!1,e.classList.remove("dragging"),a(),u&&(e._ignoreNextClick=!0),window.removeEventListener("pointermove",f),window.removeEventListener("pointerup",y),window.removeEventListener("pointercancel",y)};window.addEventListener("pointermove",f),window.addEventListener("pointerup",y),window.addEventListener("pointercancel",y)},e.addEventListener("pointerdown",e._dragPointerDown)},o=()=>{e._dragEnabled&&(e._dragEnabled=!1,e.classList.remove("theme-toggle-draggable","dragging"),e.removeEventListener("pointerdown",e._dragPointerDown),e.style.left="",e.style.top="",e.style.right="",e.style.bottom="")},l=()=>{t()?r():o()};l(),e._dragResizeHandler&&window.removeEventListener("resize",e._dragResizeHandler),e._dragResizeHandler=()=>{l(),e._dragEnabled&&a()},window.addEventListener("resize",e._dragResizeHandler)}function gs(){const e=document.getElementById("bottomNav"),t=document.getElementById("themeBtn"),i=document.querySelector(".language-switch"),s=k.getState();if(!e)return;const n=document.getElementById("app");if(n&&n.innerHTML.includes("login-page")){e.style.display="none",t&&(t.parentElement.style.display="none"),i&&(i.style.display="none");return}e.style.display="",t&&(t.parentElement.style.display=""),i&&(i.style.display=""),s.isAuthenticated?(e.classList.add("active"),e.querySelectorAll(".bottom-nav-item").forEach(o=>{var d,c;const l=o.getAttribute("data-nav");l!=="language"&&(((d=s.user)==null?void 0:d.role)==="admin"&&(l==="statistics"||l==="history")||((c=s.user)==null?void 0:c.role)==="teacher"&&l==="history"?o.style.display="none":o.style.display="flex",o._navHandler&&o.removeEventListener("click",o._navHandler),o._navHandler=()=>{var h,m,p,g;const u=o.getAttribute("data-nav");u==="home"?((h=s.user)==null?void 0:h.role)==="admin"?$.navigate("/admin/dashboard"):$.navigate("/"):u==="statistics"?((m=s.user)==null?void 0:m.role)==="student"?$.navigate("/student/profile"):((p=s.user)==null?void 0:p.role)==="teacher"&&$.navigate("/teacher/profile"):u==="history"?((g=s.user)==null?void 0:g.role)==="student"&&$.navigate("/student/test-history"):u==="profile"?$.navigate("/"):u==="settings"&&hr()},o.addEventListener("click",o._navHandler))}),ne()):e.classList.remove("active")}function Bs(){console.log("📄 renderLoginPage called");const e=document.getElementById("app");if(!e){console.error("❌ app element not found!");return}const t=document.getElementById("bottomNav"),i=document.getElementById("themeBtn"),s=document.querySelector(".language-switch");t&&(t.style.display="none"),i&&(i.parentElement.style.display="none"),s&&(s.style.display="none"),e.innerHTML=`
        <div class="login-page">
            <div class="login-container fade-in" id="loginContainer">
                <!-- Content will be inserted here -->
            </div>
        </div>
    `,console.log("📝 Calling renderRoleSelection"),Ci()}function Ci(){console.log("🔐 renderRoleSelection called");const e=document.getElementById("loginContainer");if(!e){console.error("❌ loginContainer not found!");return}const t=k.getState().language;e.innerHTML=`
        <div class="login-card">
            <div class="login-header">
                <div class="brand-mark">
                    <img src="/assets/zedly_logo_bg.png" alt="ZEDLY" class="brand-logo" />
                    <div class="brand-name">ZEDLY</div>
                </div>
                <h2>${L("selectRole")}</h2>
                <p>${t==="uz"?"Rolni tanlang":"Выберите свою роль"}</p>
            </div>
            
            <div class="role-cards">
                <div class="role-card" data-role="student">
                    <span>👨‍🎓</span>
                    <div class="role-card-text">
                        <h3>${L("loginAsStudent")}</h3>
                        <p>${t==="uz"?"O'quvchi paneli":"Панель ученика"}</p>
                    </div>
                </div>
                
                <div class="role-card" data-role="teacher">
                    <span>👨‍🏫</span>
                    <div class="role-card-text">
                        <h3>${L("loginAsTeacher")}</h3>
                        <p>${t==="uz"?"O'qituvchi paneli":"Панель учителя"}</p>
                    </div>
                </div>
                
                <div class="role-card" data-role="admin">
                    <span>👨‍💼</span>
                    <div class="role-card-text">
                        <h3>${L("loginAsAdmin")}</h3>
                        <p>${t==="uz"?"Administrator paneli":"Панель администратора"}</p>
                    </div>
                </div>
            </div>
        </div>
    `,console.log("📍 Adding event listeners to role cards"),document.querySelectorAll(".role-card").forEach(i=>{i.addEventListener("click",function(){const s=this.getAttribute("data-role");console.log("🖱️ Role card clicked:",s),Uu(s)})}),console.log("✅ renderRoleSelection complete")}function Uu(e){console.log("🔐 selectRole called with role:",e);const t=document.getElementById("loginContainer"),i=k.getState().language,s={student:"👨‍🎓",teacher:"👨‍🏫",admin:"👨‍💼"},n={student:L("loginAsStudent"),teacher:L("loginAsTeacher"),admin:L("loginAsAdmin")};t.innerHTML=`
        <div class="login-card">
            <button class="back-button" id="backBtn">
                <span>←</span>
                <span>${L("back")}</span>
            </button>
            
            <div class="login-header">
                <div class="role-badge">${s[e]}</div>
                <h2>${n[e]}</h2>
                <p>${i==="uz"?"Kirish ma'lumotlaringizni kiriting":"Введите данные для входа"}</p>
            </div>
            
            <form class="login-form" id="loginForm">
                <div id="errorContainer"></div>
                
                <div class="form-group">
                    <label>${L("username")}</label>
                    <input type="text" id="username" placeholder="${L("username")}" required />
                </div>
                
                <div class="form-group">
                    <label>${L("password")}</label>
                    <input type="password" id="password" placeholder="${L("password")}" required />
                </div>
                
                <button type="submit" class="btn-primary" id="loginBtn">
                    ${L("login")}
                </button>
            </form>
        </div>
    `,console.log("📍 Adding event listener to back button"),document.getElementById("backBtn").addEventListener("click",function(a){a.preventDefault(),console.log("⬅️ Back button clicked"),Ci()}),console.log("📍 Adding event listener to login form"),document.getElementById("loginForm").addEventListener("submit",async a=>{a.preventDefault(),console.log("📝 Login form submitted");const r=document.getElementById("username").value,o=document.getElementById("password").value,l=document.getElementById("loginBtn"),d=document.getElementById("errorContainer");console.log("👤 Attempting login with username:",r,"role:",e),l.disabled=!0,l.textContent=L("loading"),d.innerHTML="";const c=await k.login(r,o,e);console.log("📊 Login result:",c),c.success?(console.log("✅ Login successful"),c.forcePasswordChange?(console.log("🔄 Navigating to /change-password (FORCE)"),$.navigate("/change-password")):c.requirePasswordChange||c.user.isTemporaryPassword?(console.log("🔄 Navigating to /change-password"),$.navigate("/change-password")):(console.log("🔄 Navigating to /"),$.navigate("/"))):(console.log("❌ Login failed:",c.error),d.innerHTML=`<div class="error-message">${c.error}</div>`,l.disabled=!1,l.textContent=L("login"))})}function ur(){const e=document.getElementById("app"),t=document.getElementById("bottomNav"),i=document.getElementById("themeBtn"),s=document.querySelector(".language-switch");t&&(t.style.display="none"),i&&(i.parentElement.style.display="none"),s&&(s.style.display="none"),e.innerHTML=`
        <div class="login-page">
            <div class="login-container fade-in">
                <div class="login-header">
                    <h2>${L("changePassword")}</h2>
                    <p>${L("mustChangePassword")}</p>
                </div>
                
                <form class="login-form" id="changePasswordForm">
                    <div id="messageContainer"></div>
                    
                    <div class="form-group">
                        <label>${L("currentPassword")}</label>
                        <input type="password" id="currentPassword" required />
                    </div>
                    
                    <div class="form-group">
                        <label>${L("newPassword")}</label>
                        <input type="password" id="newPassword" required />
                    </div>
                    
                    <div class="form-group">
                        <label>${L("confirmPassword")}</label>
                        <input type="password" id="confirmPassword" required />
                    </div>
                    
                    <button type="submit" class="btn-primary" id="changeBtn">
                        ${L("changePassword")}
                    </button>
                </form>
            </div>
        </div>
    `,document.getElementById("changePasswordForm").onsubmit=async n=>{n.preventDefault();const a=document.getElementById("currentPassword").value,r=document.getElementById("newPassword").value,o=document.getElementById("confirmPassword").value,l=document.getElementById("changeBtn"),d=document.getElementById("messageContainer");if(d.innerHTML="",r!==o){d.innerHTML='<div class="error-message">Passwords do not match</div>';return}if(r.length<8){d.innerHTML='<div class="error-message">Password must be at least 8 characters</div>';return}l.disabled=!0,l.textContent=L("loading");try{const c=await fetch(`${Y}/api/auth/set-new-password`,{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${k.getState().token}`},body:JSON.stringify({currentPassword:a,newPassword:r,confirmPassword:o})}),u=await c.json();if(c.ok&&u.success){d.innerHTML='<div class="success-message">Password changed successfully!</div>';const h=k.getState();k.setState({...h,forcePasswordChange:!1}),setTimeout(()=>$.navigate("/"),1500)}else d.innerHTML=`<div class="error-message">${u.error||"Password change failed"}</div>`,l.disabled=!1,l.textContent=L("changePassword")}catch(c){console.error("Password change error:",c),d.innerHTML='<div class="error-message">Network error</div>',l.disabled=!1,l.textContent=L("changePassword")}}}function O(e,t){var a;k.getState().user;const i=document.getElementById("app"),s=Yu(t);i.innerHTML=`
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
                    ${L("logout")}
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
    `;const n=document.getElementById("themeBtn");n!=null&&n.parentElement&&(n.parentElement.style.display="none"),console.log("📍 Adding event listeners to navigation items"),document.querySelectorAll(".nav-item").forEach(r=>{r.addEventListener("click",function(o){o.preventDefault();const l=this.getAttribute("data-nav-path");console.log("🔗 Navigation clicked:",l),$.navigate(l)})}),console.log("📍 Adding event listener to logout button"),(a=document.getElementById("logoutBtn"))==null||a.addEventListener("click",function(r){r.preventDefault(),console.log("🚪 Logout button clicked"),hr()}),ne(),cr()}function Yu(e){return{student:[{path:"/student/dashboard",label:L("dashboard"),icon:'<i class="fas fa-home"></i>'},{path:"/student/subjects",label:L("subjectTests"),icon:'<i class="fas fa-book-open"></i>'},{path:"/student/profile",label:k.getState().language==="uz"?"Profil":"Профиль",icon:'<i class="fas fa-user-graduate"></i>'},{path:"/student/test-history",label:k.getState().language==="uz"?"Testlar tarixi":"История тестов",icon:'<i class="fas fa-history"></i>'},{path:"/student/interest-test",label:L("interestTest"),icon:'<i class="fas fa-compass"></i>'}],teacher:[{path:"/teacher/profile",label:k.getState().language==="uz"?"Profil":"Профиль",icon:'<i class="fas fa-user-tie"></i>'},{path:"/teacher/subject-analytics",label:k.getState().language==="uz"?"Mavzu analitikasi":"Аналитика по темам",icon:'<i class="fas fa-chart-line"></i>'},{path:"/teacher/classes",label:L("classes"),icon:'<i class="fas fa-chalkboard-user"></i>'}],admin:[{path:"/admin/dashboard",label:L("adminPanel"),icon:'<i class="fas fa-crown"></i>'},{path:"/admin/analytics",label:L("analytics"),icon:'<i class="fas fa-chart-bar"></i>'},{path:"/admin/classes",label:L("classes"),icon:'<i class="fas fa-school"></i>'},{path:"/admin/subjects",label:L("subjects"),icon:'<i class="fas fa-book"></i>'},{path:"/admin/teacher-tests",label:k.getState().language==="uz"?"O'qituvchilar testlari":"Тесты для учителей",icon:'<i class="fas fa-user-check"></i>'}]}[e]||[]}function hr(){console.log("🚪 handleLogout called");const e=k.getState().language;Xu(e==="uz"?"Chiqish":"Выход",e==="uz"?"Chiqishni xohlaysizmi?":"Вы уверены, что хотите выйти?",()=>{console.log("✅ User confirmed logout"),console.log("📊 State before logout:",k.getState()),k.logout(),console.log("📊 State after logout:",k.getState()),console.log("🔄 Navigating to /login"),setTimeout(()=>{$.navigate("/login")},100)})}function Xu(e,t,i){const s=k.getState().language,n=`
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
    `;document.body.insertAdjacentHTML("beforeend",n);const a=document.getElementById("customModal"),r=document.getElementById("modalCancelBtn"),o=document.getElementById("modalConfirmBtn"),l=()=>{a.classList.add("fade-out"),setTimeout(()=>a.remove(),300)};r.addEventListener("click",l),a.addEventListener("click",d=>{d.target===a&&l()}),o.addEventListener("click",()=>{l(),i&&i()}),setTimeout(()=>a.classList.add("show"),10)}async function gr(){var n,a;const e=k.getState().language;if(!k.getState().user){$.navigate("/login");return}O(`
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
    `,"student"),(n=document.getElementById("btnBackFromProfile"))==null||n.addEventListener("click",()=>{$.navigate("/student/dashboard")});const s=document.getElementById("profileContainer");try{const r=await C("/api/users/me"),o=await C("/api/subjects"),l=await C("/api/test-results"),d=await C("/api/tests"),c=await C("/api/interest-results");if(!r.success)throw new Error("Failed to load profile");const u=r.data,h=o.success?o.data:[],m=l.success?l.data:[],p=d.success?d.data:[],g=new Map(p.map(A=>[A._id,A])),f=c.success?c.data:null,y=(u==null?void 0:u.interestTestResults)||null,b=A=>A?Array.isArray(A)?[...A].filter(P=>P&&P.categories).sort((P,N)=>new Date(N.completedAt||0)-new Date(P.completedAt||0))[0]||null:A.categories?A:null:null,x=b(f)||b(y),v={};for(const A of m){const P=A.subjectId||"unknown";v[P]||(v[P]=[]),v[P].push(A)}console.log("📊 Results by subject:",v),console.log("📚 Available subjects:",h),console.log("📝 All test results:",m),console.log("🧭 Interest test results:",x),console.log("🧭 Interest results response:",c);const w={math:{subjects:[{name:"Математика",icon:"🔢",reason:"Ваши логические способности и интерес к числам делают математику идеальным выбором"},{name:"Физика",icon:"⚛️",reason:"Физика требует сильных математических навыков и логического мышления"}]},science:{subjects:[{name:"Биология",icon:"🧬",reason:"Ваш интерес к природе и живым организмам идеально подходит для биологии"},{name:"Химия",icon:"🧪",reason:"Химия откроет вам мир научных экспериментов и исследований"}]},tech:{subjects:[{name:"Информатика",icon:"💻",reason:"Ваши технические навыки прекрасно подходят для программирования"},{name:"Физика",icon:"⚛️",reason:"Физика - основа всех современных технологий"}]},art:{subjects:[{name:"Изобразительное искусство",icon:"🎨",reason:"Развивайте свой творческий потенциал через искусство"},{name:"Музыка",icon:"🎵",reason:"Музыка поможет выразить вашу креативность"}]},social:{subjects:[{name:"История",icon:"📜",reason:"История поможет понять общество и человеческие отношения"},{name:"Обществознание",icon:"👥",reason:"Идеально для развития социальных и коммуникативных навыков"}]},language:{subjects:[{name:"Литература",icon:"📚",reason:"Литература развивает языковые навыки и культурное понимание"},{name:"Иностранный язык",icon:"🌍",reason:"Откройте новые возможности через изучение языков"}]}},z=m.length,E=z>0?Math.round(m.reduce((A,P)=>A+P.score,0)/z):0,_=z>0?Math.max(...m.map(A=>A.score)):0;let S="",T="";try{const A=await C("/api/classes"),P=A.success?A.data||[]:[],N=u.classId;if(N&&P.length){const R=P.find(et=>(et._id||et.id)===N);if(R){const et=R._id||R.id;T=`${R.grade||""}${R.name||""}`;const pt=await C(`/api/classes/${et}/students`),st=pt.success?pt.data||[]:[];if(st.length){const U=[...st].sort((le,Ii)=>(Ii.averageScore||0)-(le.averageScore||0)),rt=U.findIndex(le=>(le._id||le.id)===(u._id||u.id)),ut=rt>=0?rt+1:null,ft=U.length,It=rt>=0?U[rt]:null,kt=(It==null?void 0:It.averageScore)??E;ut&&(S=`
                                <div class="card" style="text-align: center; background: linear-gradient(135deg, #10b981 0%, #06b6d4 100%); color: white;">
                                    <div style="font-size: 2.5rem; margin-bottom: 0.5rem;">🏅</div>
                                    <div style="font-size: 1.8rem; font-weight: bold; margin-bottom: 0.25rem;">${ut}/${ft}</div>
                                    <div style="opacity: 0.9;">${e==="uz"?"Sinfdagi o‘rin":"Место в классе"}</div>
                                    <div style="font-size: 0.85rem; opacity: 0.9; margin-top: 0.35rem;">
                                        ${T||""} • ${e==="uz"?"O‘rtacha":"Средний"}: ${kt}%
                                    </div>
                                </div>
                            `)}}}}catch(A){console.warn("Class ranking unavailable:",A)}s.innerHTML=`
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
                        <div style="font-size: 2rem; font-weight: bold; margin-bottom: 0.25rem;">${E}%</div>
                        <div style="opacity: 0.9;">${e==="uz"?"O'rtacha ball":"Средний балл"}</div>
                    </div>
                    
                    <div class="card" style="text-align: center; background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%); color: white;">
                        <div style="font-size: 2.5rem; margin-bottom: 0.5rem;">🏆</div>
                        <div style="font-size: 2rem; font-weight: bold; margin-bottom: 0.25rem;">${_}%</div>
                        <div style="opacity: 0.9;">${e==="uz"?"Eng yaxshi natija":"Лучший результат"}</div>
                    </div>
                    ${S}
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
                ${x?`
                <div class="card" style="background: linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.05) 100%); border: 2px solid rgba(102, 126, 234, 0.3); border-radius: 16px; overflow: hidden;">
                    <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 1rem;">
                        <h3 style="margin: 0; display: flex; align-items: center; gap: 0.75rem;">
                            <span style="font-size: 1.8rem;">🧭</span>
                            <span>${e==="uz"?"Qiziqishlaringiz profili":"Профиль интересов"}</span>
                        </h3>
                        ${x.completedAt?`
                            <div style="font-size: 0.85rem; color: var(--text-muted); text-align: right;">
                                <div>${e==="uz"?"Oxirgi test":"Последний тест"}:</div>
                                <div style="font-weight: 600;">${new Date(x.completedAt).toLocaleDateString("ru-RU",{day:"numeric",month:"short",year:"numeric"})}</div>
                            </div>
                        `:""}
                    </div>
                    <p style="color: var(--text-muted); margin-bottom: 1.5rem; font-size: 0.95rem;">
                        ${e==="uz"?"Test natijalariga asoslangan qiziqishlaringiz tahlili":"Анализ ваших интересов на основе результатов теста"}
                    </p>
                    
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem; margin-bottom: 1.5rem;">
                        ${Object.entries(x.categories).sort((A,P)=>P[1]-A[1]).slice(0,3).map(([A,P])=>{const R={math:{uz:"Matematika",ru:"Математика",icon:"🔢"},science:{uz:"Fan",ru:"Наука",icon:"🔬"},tech:{uz:"Texnologiya",ru:"Технологии",icon:"💻"},art:{uz:"San'at",ru:"Искусство",icon:"🎨"},social:{uz:"Ijtimoiy",ru:"Социальные",icon:"👥"},language:{uz:"Til",ru:"Языки",icon:"📚"}}[A]||{uz:A,ru:A,icon:"📊"},et=Math.round(P);return`
                                <div class="card" style="text-align: center; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; border: 2px solid rgba(102, 126, 234, 0.5); position: relative; overflow: hidden;">
                                    <div style="position: absolute; top: 8px; right: 8px; font-size: 1.2rem;">⭐</div>
                                    <div style="font-size: 2.5rem; margin-bottom: 0.5rem;">${R.icon}</div>
                                    <div style="font-size: 1.5rem; font-weight: bold; margin-bottom: 0.25rem;">${et}%</div>
                                    <div style="opacity: 0.95; font-size: 0.9rem;">${e==="uz"?R.uz:R.ru}</div>
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
                        ${Object.entries(x.categories).sort((A,P)=>P[1]-A[1]).slice(0,3).flatMap(([A,P])=>{const N=w[A];return N?N.subjects.map(R=>({subject:R,score:P,category:A})):[]}).slice(0,3).map(({subject:A,score:P})=>`
                            <div class="subject-recommendation-card" style="background: var(--bg-secondary); border: 2px solid rgba(102, 126, 234, 0.2); border-radius: 12px; padding: 1.5rem; transition: all 0.3s ease;">
                                <div style="display: flex; align-items: center; gap: 1rem; margin-bottom: 1rem;">
                                    <div style="font-size: 2.5rem; width: 60px; height: 60px; display: flex; align-items: center; justify-content: center; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); border-radius: 12px;">
                                        ${A.icon}
                                    </div>
                                    <div style="flex: 1;">
                                        <h3 style="margin: 0 0 0.25rem 0; font-size: 1.1rem;">${A.name}</h3>
                                        <div style="color: var(--primary); font-weight: bold;">${Math.round(P)}% ${e==="uz"?"mos":"соответствие"}</div>
                                    </div>
                                </div>
                                <p style="color: var(--text-muted); margin: 0; font-size: 0.9rem; line-height: 1.5;">
                                    ${A.reason}
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
                        ${h.filter(A=>v[A._id||A.id]).map(A=>`
                            <option value="${A._id||A.id}">${A.name} (${v[A._id||A.id].length} ${e==="uz"?"ta test":"тестов"})</option>
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
        `;const M=Object.keys(v).map(A=>{const P=h.find(N=>(N._id||N.id)===A);return{subjectId:A,subjectName:(P==null?void 0:P.name)||A,data:(v[A]||[]).map(N=>N.score)}}),j=Ls({series:M},e==="uz"?"O'rtacha ball":"Средний балл",{subjectList:h,includeAllSubjects:!0});if(te("studentSubjectTrendChart","studentSubjectTrendEmpty",j),z>0){const A=async N=>{var qs;const R=document.getElementById("subjectStats");if(!N||N===""){R.style.display="none";return}const et=v[N]||[];if(et.length===0){R.style.display="block",R.innerHTML=`
                        <div class="card" style="text-align: center; padding: 2rem;">
                            <p style="color: var(--text-muted);">${e==="uz"?"Bu fan bo'yicha natijalar yo'q":"Нет результатов по этому предмету"}</p>
                        </div>
                    `;return}const pt=et.length,st=Math.round(et.reduce((ht,Ut)=>ht+Ut.score,0)/pt),U=h.find(ht=>ht._id===N),rt=U?U.name:"",ut=await C(`/api/subjects/${N}/modules`),ft=ut.success?((qs=ut.data)==null?void 0:qs.data)||ut.data||[]:[],It=new Map(ft.map(ht=>[ht._id,ht.name])),kt={};et.forEach(ht=>{const Ut=g.get(ht.testId),de=(Ut==null?void 0:Ut.moduleId)||"unknown";kt[de]||(kt[de]={scores:[],label:It.get(de)||(e==="uz"?"Mavzu":"Тема")}),kt[de].scores.push(ht.score)});const le=Object.values(kt).map(ht=>ht.label),Ii=Object.values(kt).map(ht=>{const Ut=ht.scores.reduce((de,Sr)=>de+Sr,0)/ht.scores.length;return Math.round(Ut*10)/10});R.style.display="block",R.innerHTML=`
                    <div class="card" style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; margin-bottom: 1rem;">
                        <h2 style="margin: 0; font-size: 1.5rem; display: flex; align-items: center; gap: 0.75rem;">
                            <span style="font-size: 2rem;">📖</span>
                            <span>${rt}</span>
                        </h2>
                    </div>
                    
                    <div style="display: grid; gap: 1rem; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); margin-bottom: 1.5rem;">
                        <div class="card" style="text-align: center; background: linear-gradient(135deg, #10b981 0%, #059669 100%); color: white;">
                            <div style="font-size: 2rem; margin-bottom: 0.5rem;">📝</div>
                            <div style="font-size: 1.75rem; font-weight: bold; margin-bottom: 0.25rem;">${pt}</div>
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
                `,hs("subjectModuleChart",null,{labels:le,series:[{label:e==="uz"?"O'rtacha ball":"Средний балл",data:Ii}]})},P=document.getElementById("subjectSelector");P&&P.addEventListener("change",async N=>{await A(N.target.value)})}else{const A=document.getElementById("btnGoToSubjects");A&&A.addEventListener("click",()=>{$.navigate("/student/subjects")})}const V=document.getElementById("btnViewInterestTest");V&&V.addEventListener("click",()=>{$.navigate("/student/interest-test")});const Z=document.getElementById("btnRetakeInterestTest");Z&&Z.addEventListener("click",()=>{$.navigate("/student/interest-test")});const q=document.getElementById("btnStartInterestTest");q&&q.addEventListener("click",()=>{$.navigate("/student/interest-test")})}catch(r){console.error("❌ Error loading profile:",r),console.error("Error details:",r.message,r.stack),s.innerHTML=`
            <div class="card" style="text-align: center; padding: 3rem;">
                <p style="color: #ef4444;">${e==="uz"?"Profilni yuklashda xato":"Ошибка при загрузке профиля"}</p>
                <p style="color: var(--text-muted); font-size: 0.9rem; margin-top: 0.5rem;">${r.message||""}</p>
                <button class="button button-secondary" id="btnBackToDashboard" style="margin-top: 1rem;">
                    ${e==="uz"?"Orqaga":"Назад"}
                </button>
            </div>
        `,(a=document.getElementById("btnBackToDashboard"))==null||a.addEventListener("click",()=>{$.navigate("/student/dashboard")})}}function Is(){var i,s,n,a;const e=k.getState().user;if(!e){$.navigate("/login");return}const t=`
        <div class="student-dashboard">
            <header class="page-header">
                <h1>${L("dashboard")}</h1>
                <p>${e.firstName} ${e.lastName} ${e.grade?"• "+e.grade+" "+L("grade"):""}</p>
            </header>

            <div class="info-section" style="margin-bottom: 3rem;">
                <div class="card">
                    <h3>👤 ${L("myProfile")}</h3>
                    <div class="info-grid">
                        <div class="info-item">
                            <span class="info-label">${L("firstName")}</span>
                            <span class="info-value">${e.firstName}</span>
                        </div>
                        <div class="info-item">
                            <span class="info-label">${L("lastName")}</span>
                            <span class="info-value">${e.lastName}</span>
                        </div>
                        <div class="info-item">
                            <span class="info-label">${L("grade")}</span>
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
                        <h3>${L("subjectTests")}</h3>
                        <p>${k.getState().language==="uz"?"Fanlar bo'yicha bilimingizni tekshiring":"Проверьте свои знания по предметам"}</p>
                    </div>
                    <div class="card-arrow">→</div>
                </div>

                <div class="dashboard-card card-secondary" id="btnInterestTest">
                    <div class="card-icon">🎯</div>
                    <div class="card-content">
                        <h3>${L("interestTest")}</h3>
                        <p>${k.getState().language==="uz"?"O'z qobiliyatingizni aniqlang":"Определите свои способности"}</p>
                    </div>
                    <div class="card-arrow">→</div>
                </div>

                <div class="dashboard-card card-tertiary" id="btnControlTests">
                    <div class="card-icon">✏️</div>
                    <div class="card-content">
                        <h3>${L("controlTests")}</h3>
                        <p>${k.getState().language==="uz"?"O'qituvchining nazorat isbotlarini bajaring":"Выполните контрольные работы"}</p>
                    </div>
                    <div class="card-arrow">→</div>
                </div>
            </div>
        </div>
    `;O(t,"student"),console.log("📍 Adding event listeners to dashboard cards"),(i=document.getElementById("btnSubjectTests"))==null||i.addEventListener("click",()=>{console.log("📚 Subject Tests button clicked"),$.navigate("/student/subjects")}),(s=document.getElementById("btnInterestTest"))==null||s.addEventListener("click",()=>{console.log("🎯 Interest Test button clicked"),$.navigate("/student/interest-test")}),(n=document.getElementById("btnControlTests"))==null||n.addEventListener("click",()=>{console.log("✏️ Control Tests button clicked"),$.navigate("/student/control-tests")}),(a=document.getElementById("btnStudentProfile"))==null||a.addEventListener("click",()=>{console.log("📊 Student Profile button clicked"),$.navigate("/student/profile")})}async function Qu(){var s;const e=k.getState().language,t=`
        <div class="page-header">
            <div class="page-header-title">
                <h1>${L("subjectTests")}</h1>
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
    `;O(t,"student"),(s=document.getElementById("btnBackFromSubjects"))==null||s.addEventListener("click",()=>{$.navigate("/student/dashboard")});const i=await C("/api/subjects");if(i.success&&i.data&&i.data.length>0){const n=document.getElementById("subjectsContainer"),a=i.data,o=(await Promise.all(a.map(async l=>{var p;const d=(l==null?void 0:l.id)||(l==null?void 0:l._id);if(!d)return null;const c=await C(`/api/subjects/${d}/modules`),u=c.success?((p=c.data)==null?void 0:p.data)||c.data||[]:[],h=u.map(g=>(g==null?void 0:g.id)||(g==null?void 0:g._id)).filter(Boolean);let m=0;return h.length>0&&(await Promise.all(h.map(f=>C(`/api/modules/${f}/tests`)))).forEach(f=>{var b;const y=f.success?((b=f.data)==null?void 0:b.data)||f.data||[]:[];m+=Array.isArray(y)?y.length:0}),{subject:l,subjectId:d,modulesCount:u.length,testsCount:m}}))).filter(Boolean).filter(l=>l.modulesCount>0||l.testsCount>0);if(o.length===0){n.innerHTML=`<p style="text-align: center; color: var(--text-muted);">${k.getState().language==="uz"?"Fanlar topilmadi":"Предметы не найдены"}</p>`;return}n.innerHTML=`
            <div class="subjects-grid">
                ${o.map(({subject:l,subjectId:d,modulesCount:c,testsCount:u})=>`
                    <div class="subject-card" data-subject-id="${d}">
                        <div class="subject-header">
                            <div class="subject-icon">${mr(l.name)}</div>
                            <h3>${l.name}</h3>
                        </div>
                        <div class="subject-info">
                            <p>${k.getState().language==="uz"?"Modullar":"Модули"}: ${c}</p>
                            <p>${k.getState().language==="uz"?"Testlar":"Тестов"}: ${u}</p>
                        </div>
                        <button class="btn-secondary btn-start-test" data-subject-id="${d}">
                            ${k.getState().language==="uz"?"Testni boshlash":"Начать тест"}
                        </button>
                    </div>
                `).join("")}
            </div>
        `,console.log("📍 Adding event listeners to start test buttons"),document.querySelectorAll(".btn-start-test").forEach(l=>{l.addEventListener("click",function(){const d=this.getAttribute("data-subject-id");console.log("📚 Start test button clicked for subject:",d),Ku(d)})})}else{const n=document.getElementById("subjectsContainer");n.innerHTML=`<p style="text-align: center; color: var(--text-muted);">${k.getState().language==="uz"?"Fanlar topilmadi":"Предметы не найдены"}</p>`}}function mr(e){return{Mathematics:"🔢",Matematika:"🔢",Математика:"🔢",Physics:"⚛️",Fizika:"⚛️",Физика:"⚛️",Chemistry:"🧪",Kimyo:"🧪",Химия:"🧪",Biology:"🧬",Biologiya:"🧬",Биология:"🧬",History:"📜",Tarix:"📜",История:"📜",Literature:"📚",Adabiyot:"📚",Литература:"📚",English:"🔤","Ingliz tili":"🔤",Английский:"🔤",Geography:"🌍",Geografiya:"🌍",География:"🌍"}[e]||"📖"}async function Ku(e){$.navigate(`/student/subject-modules/${e}`)}async function Ju(){var r,o;const e=window.location.pathname.split("/").pop(),t=k.getState().language;console.log("📖 renderStudentSubjectModules called with subjectId:",e),O(`
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
    `,"student"),console.log("📍 Adding event listener to back button"),(r=document.getElementById("btnBackToSubjects"))==null||r.addEventListener("click",()=>{console.log("⬅️ Back to subjects button clicked"),$.navigate("/student/subjects")});const s=await C("/api/subjects");if(s.success){const l=s.data.find(d=>d._id===e);l&&(document.getElementById("subjectName").textContent=l.name)}console.log("📦 Loading modules for subject:",e);const n=await C(`/api/subjects/${e}/modules`);console.log("📦 Modules result:",n),console.log("📦 Data:",n.data),console.log("📦 Data length:",n.data?n.data.length:"undefined"),console.log("📦 Success:",n.success);const a=n.success?((o=n.data)==null?void 0:o.data)||n.data||[]:[];if(a.length>0){const l=document.getElementById("modulesContainer"),d=await C("/api/test-results"),c=d.success?d.data:[];console.log("======================"),console.log("📊 ЗАГРУЖЕННЫЕ РЕЗУЛЬТАТЫ:"),console.log("📊 Всего результатов:",c.length),c.forEach((p,g)=>{console.log(`  ${g+1}. TestId: ${p.testId}, Score: ${p.score}%, Correct: ${p.correctCount}/${p.totalCount}, Date: ${p.completedAt}`)}),console.log("======================");const u={};c.forEach(p=>{const g=p.testId,f=new Date(p.completedAt).getTime();if(!u[g])u[g]=p,console.log(`✨ First result for test ${g}: ${p.correctCount}/${p.totalCount} (${p.score}%) - ${p.completedAt}`);else{const y=new Date(u[g].completedAt).getTime();console.log(`🔍 Comparing for test ${g}:`),console.log(`   Existing: ${u[g].correctCount}/${u[g].totalCount} (${u[g].score}%) - ${u[g].completedAt}`),console.log(`   New: ${p.correctCount}/${p.totalCount} (${p.score}%) - ${p.completedAt}`),f>y?(console.log("   ✅ New result is NEWER - using it!"),u[g]=p):console.log("   ❌ Existing result is newer - keeping it")}}),console.log("📊 ПОСЛЕДНИЕ РЕЗУЛЬТАТЫ ПО ТЕСТАМ:"),Object.keys(u).forEach(p=>{const g=u[p];console.log(`  TestId: ${p} → ${g.correctCount}/${g.totalCount} (${g.score}%) - Date: ${g.completedAt}`)}),console.log("======================");const h=a.map(p=>({...p,id:(p==null?void 0:p.id)||(p==null?void 0:p._id),name:(p==null?void 0:p.name)||(p==null?void 0:p.title)||"",description:(p==null?void 0:p.description)||(p==null?void 0:p.summary)||""})),m=await Promise.all(h.map(async p=>{var x;if(!p.id)return{...p,tests:[]};const g=await C(`/api/modules/${p.id}/tests`),b=(g.success?((x=g.data)==null?void 0:x.data)||g.data||[]:[]).filter(v=>!v.status||v.status==="published").map(v=>({...v,id:(v==null?void 0:v.id)||(v==null?void 0:v._id)||(v==null?void 0:v.testId)||(v==null?void 0:v.test_id),name:(v==null?void 0:v.title)||(v==null?void 0:v.name)||"",duration:(v==null?void 0:v.duration)||(v==null?void 0:v.duration_minutes)||(v==null?void 0:v.durationMinutes)||null,questionsCount:(v==null?void 0:v.questionsCount)||(v==null?void 0:v.questions_count)||(Array.isArray(v==null?void 0:v.questions)?v.questions.length:0)}));return{...p,tests:b}}));l.innerHTML=m.map(p=>`
            <div class="card" style="margin-bottom: 2rem;">
                <h3 style="margin-bottom: 0.5rem;">${p.name}</h3>
                <p style="color: var(--text-muted); margin-bottom: 1.5rem;">${p.description}</p>
                
                ${p.tests.length>0?`
                    <div style="display: grid; gap: 1rem;">
                        ${p.tests.map(g=>{const f=(g==null?void 0:g.id)||(g==null?void 0:g._id),y=f?u[f]:null;if(!(y!=null))return`
                                    <div class="card" style="background: var(--bg-tertiary); transition: all 0.3s ease;">
                                        <h4 style="margin-bottom: 0.5rem;">${g.name}</h4>
                                        <div style="display: flex; gap: 1rem; margin-bottom: 1rem; font-size: 0.875rem; color: var(--text-muted);">
                                            ${g.duration?`<span>⏱️ ${g.duration} ${t==="uz"?"daqiqa":"мин"}</span>`:""}
                                            <span>📝 ${g.questionsCount||0} ${t==="uz"?"savol":"вопросов"}</span>
                                        </div>
                                        <button class="button button-primary btn-start-student-test" data-test-id="${f||""}" style="width: 100%;">
                                            ${t==="uz"?"▶️ Boshlash":"▶️ Начать тест"}
                                        </button>
                                    </div>
                                `;const x=y.correctCount||0,v=y.totalCount||g.questionsCount||0,w=y.score||0;let z,E,_,S;return w>=80?(z="#10b981",E=t==="uz"?"A'lo":"Отлично",_="⭐",S="linear-gradient(135deg, #10b981, #059669)"):w>=50?(z="#f59e0b",E=t==="uz"?"Yaxshi":"Хорошо",_="👍",S="linear-gradient(135deg, #f59e0b, #d97706)"):(z="#ef4444",E=t==="uz"?"Qayta urining":"Попробуйте ещё",_="💪",S="linear-gradient(135deg, #ef4444, #dc2626)"),`
                                <div class="card" style="
                                    background: var(--bg-tertiary); 
                                    border-left: 5px solid ${z};
                                    position: relative;
                                    transition: all 0.3s ease;
                                ">
                                    <!-- Бейдж результата -->
                                    <div style="
                                        position: absolute;
                                        top: 1rem;
                                        right: 1rem;
                                        background: ${S};
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
                                        <span>${_}</span>
                                        <span>${E}</span>
                                    </div>
                                    
                                    <!-- Название теста -->
                                    <h4 style="margin-bottom: 0.5rem; padding-right: 130px;">
                                        ${g.name}
                                    </h4>
                                    
                                    <!-- Метаданные теста -->
                                    <div style="display: flex; gap: 1rem; margin-bottom: 1rem; font-size: 0.875rem; color: var(--text-muted);">
                                        ${g.duration?`<span>⏱️ ${g.duration} ${t==="uz"?"daqiqa":"мин"}</span>`:""}
                                        <span>📝 ${g.questionsCount||0} ${t==="uz"?"savol":"вопросов"}</span>
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
                                                color: ${z};
                                                line-height: 1;
                                            ">
                                                ${x}/${v}
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
                                                color: ${z};
                                                line-height: 1;
                                            ">
                                                ${w}%
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <!-- Кнопка повторного прохождения -->
                                    <button class="button button-secondary btn-start-student-test" data-test-id="${g._id}" style="width: 100%;">
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
        `).join(""),console.log("📍 Adding event listeners to start test buttons"),document.querySelectorAll(".btn-start-student-test").forEach(p=>{p.addEventListener("click",function(){const g=this.getAttribute("data-test-id");console.log("📝 Start test button clicked:",g),$.navigate(`/student/take-test/${g}`)})})}else console.log("❌ No modules found or error. Success:",n.success,"Data:",n.data),document.getElementById("modulesContainer").innerHTML=`
            <div class="card">
                <p style="text-align: center; color: var(--text-muted);">
                    ${t==="uz"?"Bu fanda hali modullar mavjud emas":"В этом предмете пока нет модулей"}
                </p>
            </div>
        `}async function Gu(){var a,r;const e=window.location.pathname.split("/").pop(),t=k.getState().language;console.log("📖 renderTestTaker called with testId:",e),O(`
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
    `,"student");const s=document.getElementById("testContainer");(a=document.getElementById("btnBackToModules"))==null||a.addEventListener("click",()=>{console.log("⬅️ Back to modules button clicked"),window._testTimerInterval&&(clearInterval(window._testTimerInterval),window._testTimerInterval=null,console.log("🧹 Timer cleared")),history.back()}),console.log("📚 Starting test:",e);const n=await C(`/api/tests/${e}/start`);if(console.log("📝 Test start result:",n),n.success&&n.data){const o=n.data,l=o.sessionId;document.getElementById("testName").textContent=o.title||o.name||"";const d=(o.questions||[]).map(y=>({...y,text:y.text||y.questionUz||y.questionRu||"",options:(y.options||y.answers||[]).map(b=>({...b,text:b.text||b.textUz||b.textRu||""}))}));console.log("📊 Test has",d.length,"questions");const c=o.durationMinutes||o.timeLimit||15;let u=c*60,h=Date.now();const m=localStorage.getItem(`test-${e}-progress`);if(m){const y=JSON.parse(m),b=Math.floor((Date.now()-y.startedAt)/1e3);u=Math.max(0,y.timeLimit*60-b),h=y.startedAt,console.log("⏱️ Resumed test from saved progress. Time left:",u,"seconds")}else localStorage.setItem(`test-${e}-progress`,JSON.stringify({testId:e,startedAt:h,timeLimit:c})),console.log("⏱️ Started new test");const p=document.getElementById("timerDisplay"),g=document.getElementById("testTimer");if(p&&g){g.style.display="block";const y=setInterval(()=>{var v;u--;const b=Math.floor(u/60);localStorage.setItem(`test-${e}-progress`,JSON.stringify({testId:e,startedAt:h,timeLimit:c}));const x=u%60;p.textContent=`${String(b).padStart(2,"0")}:${String(x).padStart(2,"0")}`,u<=300&&u>60&&(g.style.background="linear-gradient(135deg, #f59e0b, #d97706)",p.style.color="white",p.style.animation="none"),u<=60&&(g.style.background="linear-gradient(135deg, #dc2626, #991b1b)",p.style.color="white",p.style.animation="pulse 1s ease-in-out infinite"),u<=0&&(clearInterval(y),console.log("⏰ Time is up!"),(v=document.getElementById("testForm"))==null||v.dispatchEvent(new Event("submit")))},1e3);window._testTimerInterval=y}let f=`
            <div class="card" style="margin-bottom: 2rem;">
                <div style="display: flex; gap: 1.5rem; font-size: 0.875rem; color: var(--text-muted); margin-bottom: 2rem; flex-wrap: wrap;">
                    ${`<span>⏱️ ${c} ${t==="uz"?"min":"мин"}</span>`}
                    <span>📝 ${d.length} ${t==="uz"?"savol":"вопросов"}</span>
                    ${o.maxScore?`<span>🎯 ${o.maxScore} ${t==="uz"?"ball":"баллов"}</span>`:""}
                </div>
                
                <form id="testForm" style="display: grid; gap: 2rem;">
        `;d.forEach((y,b)=>{const x=y.text||"",v=y.options||[];f+=`
                <div style="padding: 1.5rem; background: var(--bg-primary); border-radius: 10px; border: 2px solid var(--border-color);">
                    <h3 style="margin-top: 0; color: var(--text-primary); margin-bottom: 1rem;">
                        ${b+1}. ${x}
                    </h3>
                    
                    <div style="display: grid; gap: 1rem;">
            `,v.forEach((w,z)=>{const E=w.text||"",_=`q${b}_a${z}`;f+=`
                    <label style="display: flex; align-items: center; gap: 0.75rem; padding: 0.75rem; background: var(--bg-secondary); border-radius: 8px; cursor: pointer; transition: all 0.2s;">
                        <input type="radio" id="${_}" name="question_${b}" value="${w.id}" data-question-idx="${b}" style="cursor: pointer; width: 18px; height: 18px;">
                        <span style="flex: 1; color: var(--text-primary);">${E}</span>
                    </label>
                `}),f+=`
                    </div>
                </div>
            `}),f+=`
                    <button type="submit" class="button button-primary" style="width: 100%; padding: 1rem; font-size: 1rem;">
                        ${t==="uz"?"Testni tugatish":"Завершить тест"}
                    </button>
                </form>
            </div>
        `,s.innerHTML=f,(r=document.getElementById("testForm"))==null||r.addEventListener("submit",async y=>{y.preventDefault(),window._testTimerInterval&&clearInterval(window._testTimerInterval),localStorage.removeItem(`test-${e}-progress`),console.log("✅ Test form submitted");const b={};d.forEach((w,z)=>{const E=document.querySelector(`input[name="question_${z}"]:checked`);if(E){const _=E.value;b[w.id]=_,console.log(`Q${z}: selected option ${_}`)}});const x=Math.round((Date.now()-h)/1e3);console.log("📊 Collected answers object:",b),console.log("⏱️ Time taken:",x,"seconds"),console.log("📤 Submitting to API...");const v=await C(`/api/tests/${e}/submit`,{method:"POST",body:JSON.stringify({sessionId:l,answers:b,timeTaken:x})});if(console.log("📥 API Response:",v),v.success&&v.data){const w=v.data;console.log("🎯 Test result received:",w),console.log("🔍 Result keys:",Object.keys(w)),console.log("🔍 questionResults exists?",w.questionResults!==void 0),console.log("🔍 questionResults:",w.questionResults),pr(w)}else console.error("❌ Submit failed:",v),s.innerHTML=`
                    <div class="card">
                        <p style="text-align: center; color: #ef4444;">
                            ${t==="uz"?"Natijani saqlashda xato":"Ошибка при сохранении результата"}
                        </p>
                        <p style="text-align: center; color: #ef4444; font-size: 0.9rem;">
                            ${v.error||(t==="uz"?"Kutilmagan xato":"Неожиданная ошибка")}
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
        `}function pr(e){var p;const t=k.getState().language,i=document.getElementById("testContainer");console.log("🎨 renderTestResults called with:",e);const s=e.data||e;s.score;const n=s.passed||!1,a=s.earnedPoints||0,r=s.totalPoints||0,o=s.correctCount||0,l=s.totalCount||0,d=s.timeTaken||0,c=n?"success":"error",u=n?"linear-gradient(135deg, #10b981, #059669)":"linear-gradient(135deg, #ef4444, #dc2626)",h=l?Math.round(o/l*100):0;let m=`
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
        
        <div class="result-card" style="text-align: center; padding: 3rem 2rem; margin-bottom: 2rem; background: ${u}; border-radius: 16px; color: white; box-shadow: 0 20px 60px rgba(0,0,0,0.3);">
            <h2 style="margin-top: 0; font-size: 2rem; text-transform: uppercase; letter-spacing: 1px;">
                ${c==="success"?"🎉 ":c==="warning"?"👍 ":"💪 "}
                ${t==="uz"?"Test tugatildi!":"Тест завершён!"}
            </h2>
            <div class="score-circle" style="font-size: 4.5rem; font-weight: 900; margin: 2rem 0; text-shadow: 0 4px 8px rgba(0,0,0,0.2);">
                ${o}/${l}
            </div>
            <p style="font-size: 1.8rem; font-weight: 700; margin: 1rem 0; text-shadow: 0 2px 4px rgba(0,0,0,0.2);">
                ${h}%
            </p>
            <div style="display: flex; gap: 2rem; justify-content: center; margin-top: 2rem; flex-wrap: wrap;">
                <div style="background: rgba(255,255,255,0.2); padding: 1rem 2rem; border-radius: 12px; backdrop-filter: blur(10px);">
                    <div style="font-size: 0.9rem; opacity: 0.9;">⏱️ ${t==="uz"?"Vaqt":"Время"}</div>
                    <div style="font-size: 1.5rem; font-weight: bold;">
                        ${Math.floor(d/60)}:${String(d%60).padStart(2,"0")}
                    </div>
                </div>
                <div style="background: rgba(255,255,255,0.2); padding: 1rem 2rem; border-radius: 12px; backdrop-filter: blur(10px);">
                    <div style="font-size: 0.9rem; opacity: 0.9;">📊 ${t==="uz"?"Baho":"Оценка"}</div>
                    <div style="font-size: 1.5rem; font-weight: bold;">
                        ${c==="success"?"⭐⭐⭐":c==="warning"?"⭐⭐":"⭐"}
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
        ${Array.isArray(e.questionResults)?e.questionResults.map((g,f)=>{const y=g.isCorrect?"#10b981":"#ef4444";return`
                <div style="padding: 1.5rem; background: rgba(255,255,255,0.7); border-left: 4px solid ${y}; border-radius: 8px; margin-bottom: 1rem;">
                    <div style="display: flex; align-items: center; gap: 1rem; margin-bottom: 1rem;">
                        <span style="font-size: 1.5rem; color: ${y}; font-weight: bold;">${g.isCorrect?"✓":"✗"}</span>
                        <div style="flex: 1;">
                            <p style="margin: 0; color: var(--text-primary); font-weight: 500;">
                                ${f+1}. ${t==="uz"?g.questionUz:g.questionRu}
                            </p>
                        </div>
                    </div>
                    <div style="margin-left: 2.5rem; color: var(--text-muted); font-size: 0.9rem;">
                        <p style="margin: 0.5rem 0;">
                            <strong>${t==="uz"?"Sizning javobingiz":"Ваш ответ"}:</strong> 
                            <span style="color: ${y};">
                                ${g.userAnswerText?t==="uz"?g.userAnswerText.textUz:g.userAnswerText.textRu:t==="uz"?"Javob yo'q":"Нет ответа"}
                            </span>
                        </p>
                    </div>
                </div>
            `}).join(""):""}
        <div style="display: flex; gap: 1rem; margin-top: 2rem;">
            <button class="button button-primary" id="btnBackFromResults" style="flex: 1;">
                ${t==="uz"?"Modulga qaytish":"Вернуться к модулю"}
            </button>
        </div>
    `;i.innerHTML=m,(p=document.getElementById("btnBackFromResults"))==null||p.addEventListener("click",()=>{e.subjectId?$.navigate(`/student/subject-modules/${e.subjectId}`):$.navigate("/student/subjects")})}async function Zu(){var a;const e=window.location.pathname.split("/").pop(),t=k.getState().language;O(`
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
    `,"student"),(a=document.getElementById("btnBackToHistory"))==null||a.addEventListener("click",()=>{$.navigate("/student/test-history")});const s=document.getElementById("resultContainer"),n=await C(`/api/test-results/${e}`);if(n.success&&n.data){const r=n.data;pr(r)}else s.innerHTML=`
            <div class="card">
                <p style="text-align: center; color: #ef4444;">
                    ${t==="uz"?"Natija topilmadi":"Результат не найден"}
                </p>
            </div>
        `}async function th(){var n,a;const e=k.getState().language;O(`
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
    `,"student"),(n=document.getElementById("btnBackFromHistory"))==null||n.addEventListener("click",()=>{$.navigate("/student/dashboard")});const i=document.getElementById("historyContainer"),s=await C("/api/test-results");if(s.success&&s.data&&s.data.length>0){const r=s.data;let o='<div style="display: grid; gap: 1rem;">';const l={};window.testsList&&Array.isArray(window.testsList)&&window.testsList.forEach(u=>{l[u.id||u._id||u.testId||u.test_id]=u.title||u.name||u.testName||""});const d=async u=>{try{const h=await C(`/api/tests/${u}`);if(h&&h.success&&h.data)return h.data.title||h.data.name||h.data.testName||u}catch{}return u},c=await Promise.all(r.map(async(u,h)=>{const m=u.test_id||u.testId,p=await d(m),g=u.correctCount||u.correct_count||0,f=u.totalCount||u.total_count||0,y=u.timeTaken||u.time_taken||0,b=u.completedAt||u.completed_at?new Date(u.completedAt||u.completed_at):null,x=b&&!isNaN(b)?b.toLocaleDateString(e==="uz"?"uz":"ru"):e==="uz"?"Nomaʼlum sana":"Неизвестная дата",v=b&&!isNaN(b)?b.toLocaleTimeString(e==="uz"?"uz":"ru"):"",w=f?Math.round(g/f*100):0,z=w>=70?"#10b981":w>=50?"#f59e0b":"#ef4444";return`
                <div class="card" style="display: flex; justify-content: space-between; align-items: center; padding: 1.5rem;">
                    <div>
                        <h3 style="margin: 0 0 0.5rem 0; color: var(--text-primary);">
                            ${p}
                        </h3>
                        <p style="margin: 0.25rem 0; color: var(--text-muted); font-size: 0.9rem;">
                            📅 ${x} ${v}
                        </p>
                        <p style="margin: 0.25rem 0; color: var(--text-muted); font-size: 0.9rem;">
                            ⏱️ ${e==="uz"?"Vaqt":"Время"}: ${Math.floor(y/60)} ${e==="uz"?"daqiqa":"мин"}
                        </p>
                    </div>
                    <div style="text-align: right; display: flex; gap: 2rem; align-items: center;">
                        <div>
                            <div style="font-size: 1.5rem; font-weight: bold; color: ${z};">
                                ${g}/${f}
                            </div>
                            <div style="font-size: 0.9rem; color: ${z}; font-weight: 600;">
                                ${w}%
                            </div>
                        </div>
                        <button class="button button-secondary view-details-btn" data-result-id="${u._id||u.id}" data-index="${h}">
                            ${e==="uz"?"Batafsil":"Подробно"}
                        </button>
                    </div>
                </div>
            `}));o+=c.join(""),o+="</div>",i.innerHTML=o,document.querySelectorAll(".view-details-btn").forEach(u=>{u.addEventListener("click",function(){const h=this.getAttribute("data-result-id");console.log("📊 Viewing result details:",h),$.navigate(`/student/test-results/${h}`)})})}else i.innerHTML=`
            <div class="card" style="text-align: center; padding: 3rem;">
                <p style="color: var(--text-muted); font-size: 1.1rem;">
                    ${e==="uz"?"Hali testlar topilmadi":"Тесты еще не найдены"}
                </p>
                <button class="button button-primary" id="btnStartTest" style="margin-top: 1rem;">
                    ${e==="uz"?"Testni boshlash":"Пройти тест"}
                </button>
            </div>
        `,(a=document.getElementById("btnStartTest"))==null||a.addEventListener("click",()=>{$.navigate("/student/subjects")})}async function ge(){const e=k.getState(),t=e.language,i=e.user;if(console.log("🔍 [renderAdminDashboard] Debug Info:"),console.log("  - state:",e),console.log("  - isAuthenticated:",e.isAuthenticated),console.log("  - user:",i),console.log("  - user.role:",i==null?void 0:i.role),console.log("  - lang:",t),!e.isAuthenticated||!i||i.role!=="admin"){console.log("❌ Unauthorized access to admin dashboard"),$.navigate("/login");return}console.log("✅ Admin dashboard rendering..."),console.log("  - user.firstName:",i.firstName),console.log("  - user.lastName:",i.lastName),console.log("  - user.name:",i.name),console.log("  - user.email:",i.email),console.log("  - user.username:",i.username);try{const s=`
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
                <!-- Admin Profile Card -->
                <div style="background: linear-gradient(135deg, rgba(99, 102, 241, 0.1) 0%, rgba(139, 92, 246, 0.05) 100%); border: 2px solid rgba(99, 102, 241, 0.3); border-radius: 16px; padding: 1.5rem; margin-bottom: 2rem; display: flex; align-items: center; gap: 1.5rem; flex-wrap: wrap;">
                    <div style="width: 64px; height: 64px; background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%); border-radius: 12px; display: flex; align-items: center; justify-content: center; color: white; font-size: 1.75rem; flex-shrink: 0; box-shadow: 0 8px 20px rgba(99, 102, 241, 0.4);">
                        <i class="fas fa-user-shield"></i>
                    </div>
                    <div style="flex: 1; min-width: 200px;">
                        <div style="font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.5px; color: var(--text-secondary); margin-bottom: 0.25rem; font-weight: 600;">${t==="uz"?"Administrator":"Администратор"}</div>
                        <h2 style="margin: 0; font-size: 1.5rem; font-weight: 700; color: var(--text-primary);">${i.firstName||i.name||""} ${i.lastName||""}</h2>
                        <div style="display: flex; gap: 1rem; margin-top: 0.5rem; flex-wrap: wrap;">
                            <div style="display: flex; align-items: center; gap: 0.5rem; color: var(--text-secondary); font-size: 0.9rem;">
                                <i class="fas fa-envelope" style="color: #6366f1;"></i>
                                <span>${i.email||i.username}</span>
                            </div>
                            <div style="display: flex; align-items: center; gap: 0.5rem; color: var(--text-secondary); font-size: 0.9rem;">
                                <i class="fas fa-user-tag" style="color: #8b5cf6;"></i>
                                <span>@${i.username}</span>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Header -->
                <div id="adminHeader" style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 2.5rem;">
                    <div>
                        <h1 style="margin: 0; font-size: 2.25rem; font-weight: 700; color: var(--text-primary);">${L("adminPanel")}</h1>
                        <p style="margin: 0.5rem 0 0 0; color: var(--text-secondary); font-size: 0.95rem;">${L("adminManagement")}</p>
                    </div>
                </div>

                <!-- Action Cards -->
                <div class="admin-actions" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(290px, 1fr)); gap: 1.5rem; margin-bottom: 2.5rem;">
                    <!-- Analytics -->
                    <div onclick="window.router.navigate('/admin/analytics')" style="cursor: pointer; background: linear-gradient(135deg, rgba(59, 130, 246, 0.08) 0%, rgba(59, 130, 246, 0.02) 100%); border: 2px solid #3B82F6; border-radius: 16px; padding: 1.75rem; transition: all 0.3s; display: flex; gap: 1rem; align-items: flex-start;" onmouseover="this.style.transform='translateY(-6px)'; this.style.boxShadow='0 16px 32px rgba(59, 130, 246, 0.2)'" onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='none'">
                        <div style="width: 56px; height: 56px; background: linear-gradient(135deg, #3B82F6 0%, #2563EB 100%); border-radius: 12px; display: flex; align-items: center; justify-content: center; color: white; font-size: 1.5rem; flex-shrink: 0; box-shadow: 0 8px 16px rgba(59, 130, 246, 0.3);"><i class="fas fa-chart-bar"></i></div>
                        <div style="flex: 1;">
                            <h3 style="margin: 0 0 0.4rem 0; font-size: 1.1rem; font-weight: 700; color: var(--text-primary);">${L("analytics")}</h3>
                            <p style="margin: 0; font-size: 0.85rem; color: var(--text-secondary); line-height: 1.4;">${L("analyticsDesc")}</p>
                        </div>
                        <div style="color: #3B82F6; font-size: 1.5rem; font-weight: 600; flex-shrink: 0;"><i class="fas fa-arrow-right"></i></div>
                    </div>

                    <!-- Classes -->
                    <div onclick="window.router.navigate('/admin/classes')" style="cursor: pointer; background: linear-gradient(135deg, rgba(16, 185, 129, 0.08) 0%, rgba(16, 185, 129, 0.02) 100%); border: 2px solid #10b981; border-radius: 16px; padding: 1.75rem; transition: all 0.3s; display: flex; gap: 1rem; align-items: flex-start;" onmouseover="this.style.transform='translateY(-6px)'; this.style.boxShadow='0 16px 32px rgba(16, 185, 129, 0.2)'" onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='none'">
                        <div style="width: 56px; height: 56px; background: linear-gradient(135deg, #10b981 0%, #059669 100%); border-radius: 12px; display: flex; align-items: center; justify-content: center; color: white; font-size: 1.5rem; flex-shrink: 0; box-shadow: 0 8px 16px rgba(16, 185, 129, 0.3);"><i class="fas fa-school"></i></div>
                        <div style="flex: 1;">
                            <h3 style="margin: 0 0 0.4rem 0; font-size: 1.1rem; font-weight: 700; color: var(--text-primary);">${L("classes")}</h3>
                            <p style="margin: 0; font-size: 0.85rem; color: var(--text-secondary); line-height: 1.4;">${L("classesManagement")}</p>
                        </div>
                        <div style="color: #10b981; font-size: 1.5rem; font-weight: 600; flex-shrink: 0;"><i class="fas fa-arrow-right"></i></div>
                    </div>

                    <!-- Teacher Tests -->
                    <div onclick="window.router.navigate('/admin/teacher-tests')" style="cursor: pointer; background: linear-gradient(135deg, rgba(245, 158, 11, 0.08) 0%, rgba(245, 158, 11, 0.02) 100%); border: 2px solid #f59e0b; border-radius: 16px; padding: 1.75rem; transition: all 0.3s; display: flex; gap: 1rem; align-items: flex-start;" onmouseover="this.style.transform='translateY(-6px)'; this.style.boxShadow='0 16px 32px rgba(245, 158, 11, 0.2)'" onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='none'">
                        <div style="width: 56px; height: 56px; background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%); border-radius: 12px; display: flex; align-items: center; justify-content: center; color: white; font-size: 1.5rem; flex-shrink: 0; box-shadow: 0 8px 16px rgba(245, 158, 11, 0.3);"><i class="fas fa-clipboard-list"></i></div>
                        <div style="flex: 1;">
                            <h3 style="margin: 0 0 0.4rem 0; font-size: 1.1rem; font-weight: 700; color: var(--text-primary);">${L("teacherTests")}</h3>
                            <p style="margin: 0; font-size: 0.85rem; color: var(--text-secondary); line-height: 1.4;">${L("teacherTestsDesc")}</p>
                        </div>
                        <div style="color: #f59e0b; font-size: 1.5rem; font-weight: 600; flex-shrink: 0;"><i class="fas fa-arrow-right"></i></div>
                    </div>

                    <!-- Subjects Management -->
                    <div onclick="window.router.navigate('/admin/subjects')" style="cursor: pointer; background: linear-gradient(135deg, rgba(124, 58, 237, 0.08) 0%, rgba(124, 58, 237, 0.02) 100%); border: 2px solid #7c3aed; border-radius: 16px; padding: 1.75rem; transition: all 0.3s; display: flex; gap: 1rem; align-items: flex-start;" onmouseover="this.style.transform='translateY(-6px)'; this.style.boxShadow='0 16px 32px rgba(124, 58, 237, 0.2)'" onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='none'">
                        <div style="width: 56px; height: 56px; background: linear-gradient(135deg, #7c3aed 0%, #5b21b6 100%); border-radius: 12px; display: flex; align-items: center; justify-content: center; color: white; font-size: 1.5rem; flex-shrink: 0; box-shadow: 0 8px 16px rgba(124, 58, 237, 0.3);"><i class="fas fa-book"></i></div>
                        <div style="flex: 1;">
                            <h3 style="margin: 0 0 0.4rem 0; font-size: 1.1rem; font-weight: 700; color: var(--text-primary);">${L("subjectsManagement")}</h3>
                            <p style="margin: 0; font-size: 0.85rem; color: var(--text-secondary); line-height: 1.4;">${L("subjectsManagementDesc")}</p>
                        </div>
                        <div style="color: #7c3aed; font-size: 1.5rem; font-weight: 600; flex-shrink: 0;"><i class="fas fa-arrow-right"></i></div>
                    </div>

                    <!-- Teachers -->
                    <div onclick="window.router.navigate('/admin/teachers')" style="cursor: pointer; background: linear-gradient(135deg, rgba(139, 92, 246, 0.08) 0%, rgba(139, 92, 246, 0.02) 100%); border: 2px solid #8b5cf6; border-radius: 16px; padding: 1.75rem; transition: all 0.3s; display: flex; gap: 1rem; align-items: flex-start;" onmouseover="this.style.transform='translateY(-6px)'; this.style.boxShadow='0 16px 32px rgba(139, 92, 246, 0.2)'" onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='none'">
                        <div style="width: 56px; height: 56px; background: linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%); border-radius: 12px; display: flex; align-items: center; justify-content: center; color: white; font-size: 1.5rem; flex-shrink: 0; box-shadow: 0 8px 16px rgba(139, 92, 246, 0.3);"><i class="fas fa-chalkboard-user"></i></div>
                        <div style="flex: 1;">
                            <h3 style="margin: 0 0 0.4rem 0; font-size: 1.1rem; font-weight: 700; color: var(--text-primary);">${L("teachers")}</h3>
                            <p style="margin: 0; font-size: 0.85rem; color: var(--text-secondary); line-height: 1.4;">${t==="uz"?"O'qituvchilarni boshqarish":"Управление учителями"}</p>
                        </div>
                        <div style="color: #8b5cf6; font-size: 1.5rem; font-weight: 600; flex-shrink: 0;"><i class="fas fa-arrow-right"></i></div>
                    </div>

                    <!-- Add User -->
                    <div onclick="showAddUserModal()" style="cursor: pointer; background: linear-gradient(135deg, rgba(34, 197, 94, 0.08) 0%, rgba(34, 197, 94, 0.02) 100%); border: 2px solid #22c55e; border-radius: 16px; padding: 1.75rem; transition: all 0.3s; display: flex; gap: 1rem; align-items: flex-start;" onmouseover="this.style.transform='translateY(-6px)'; this.style.boxShadow='0 16px 32px rgba(34, 197, 94, 0.2)'" onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='none'">
                        <div style="width: 56px; height: 56px; background: linear-gradient(135deg, #22c55e 0%, #16a34a 100%); border-radius: 12px; display: flex; align-items: center; justify-content: center; color: white; font-size: 1.5rem; flex-shrink: 0; box-shadow: 0 8px 16px rgba(34, 197, 94, 0.3);"><i class="fas fa-user-plus"></i></div>
                        <div style="flex: 1;">
                            <h3 style="margin: 0 0 0.4rem 0; font-size: 1.1rem; font-weight: 700; color: var(--text-primary);">${L("newUser")}</h3>
                            <p style="margin: 0; font-size: 0.85rem; color: var(--text-secondary); line-height: 1.4;">${L("newUserDesc")}</p>
                        </div>
                        <div style="color: #22c55e; font-size: 1.5rem; font-weight: 600; flex-shrink: 0;"><i class="fas fa-arrow-right"></i></div>
                    </div>


                </div>
        `;O(s,"admin"),ne()}catch(s){console.error("Error loading admin dashboard:",s),I("Ошибка при загрузке панели","error")}}async function eh(){var i;const e=k.getState(),t=e.language;if(!e.isAuthenticated||!e.user||e.user.role!=="admin"){$.navigate("/login");return}try{const s=await C("/api/users"),n=s.success?(s.data||[]).filter(o=>o.role==="teacher"):[],a=`
            <style>
                .teachers-hero {
                    background: linear-gradient(135deg, rgba(139, 92, 246, 0.18) 0%, rgba(16, 185, 129, 0.12) 100%);
                    border: 1px solid rgba(139, 92, 246, 0.28);
                    border-radius: 18px;
                    padding: 1.5rem;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    gap: 1rem;
                    flex-wrap: wrap;
                }
                .teachers-hero__title {
                    margin: 0;
                    font-size: 2.1rem;
                    font-weight: 800;
                    color: var(--text-primary);
                }
                .teachers-hero__desc {
                    margin: 0.5rem 0 0 0;
                    color: var(--text-secondary);
                    font-size: 0.95rem;
                }
                .teachers-hero__meta {
                    display: flex;
                    gap: 0.75rem;
                    flex-wrap: wrap;
                    align-items: center;
                }
                .teachers-pill {
                    padding: 0.45rem 0.9rem;
                    border-radius: 999px;
                    background: rgba(139, 92, 246, 0.16);
                    color: #c4b5fd;
                    border: 1px solid rgba(139, 92, 246, 0.4);
                    font-weight: 600;
                    font-size: 0.8rem;
                }
                .teachers-panel {
                    background: var(--bg-secondary);
                    border: 1px solid var(--border-color);
                    border-radius: 16px;
                    padding: 1.25rem;
                    display: grid;
                    gap: 1rem;
                }
                .teachers-search {
                    display: flex;
                    align-items: center;
                    gap: 0.6rem;
                    padding: 0.65rem 0.9rem;
                    background: var(--bg-tertiary);
                    border: 1px solid var(--border-color);
                    border-radius: 12px;
                }
                .teachers-search input {
                    background: transparent;
                    border: none;
                    outline: none;
                    color: var(--text-primary);
                    width: 100%;
                    font-size: 0.95rem;
                }
                @media(max-width: 768px) {
                    .teachers-hero { padding: 1.25rem; }
                    .teachers-hero__title { font-size: 1.75rem; }
                }
                @media(max-width: 420px) {
                    .teachers-hero { padding: 1rem; border-radius: 14px; }
                    .teachers-hero__title { font-size: 1.5rem; }
                    .teachers-hero__desc { font-size: 0.85rem; }
                    .teachers-panel { padding: 1rem; }
                }
            </style>
            <div style="background: var(--bg-primary); min-height: 100vh; padding: 2rem 1.5rem;">
                <div style="max-width: 1200px; margin: 0 auto; display: grid; gap: 1.5rem;">
                    <div class="teachers-hero">
                        <div>
                            <h1 class="teachers-hero__title">${t==="uz"?"O'qituvchilar":"Учителя"}</h1>
                            <p class="teachers-hero__desc">${t==="uz"?"O'qituvchilarni boshqarish va ko'rish":"Управление и просмотр учителей"}</p>
                        </div>
                        <div class="teachers-hero__meta">
                            <button id="btnTeachersBack" class="btn-secondary" style="padding: 0.7rem 1.2rem; font-size: 0.9rem; border: 1px solid var(--border-color);">← ${L("back")}</button>
                            <span class="teachers-pill">${n.length} ${t==="uz"?"o'qituvchi":"учителей"}</span>
                        </div>
                    </div>

                    <div class="teachers-panel">
                        <div style="display: flex; justify-content: space-between; align-items: center; gap: 1rem; flex-wrap: wrap;">
                            <div class="teachers-search" style="flex: 1; min-width: 250px;">
                                <i class="fas fa-search" style="color: var(--text-muted);"></i>
                                <input id="teachersSearch" type="text" placeholder="${t==="uz"?"O'qituvchini qidiring...":"Найти учителя..."}">
                            </div>
                            <button onclick="showAddUserModal()" class="btn-primary" style="padding: 0.7rem 1.2rem; font-size: 0.9rem;">
                                <i class="fas fa-plus"></i> ${t==="uz"?"Yangi o'qituvchi":"Новый учитель"}
                            </button>
                        </div>

                        <div id="teachersListContainer">
                            ${n.length===0?`
                                <div style="background: var(--bg-tertiary); border: 1px dashed var(--border-color); border-radius: 12px; padding: 2.5rem; text-align: center; color: var(--text-secondary);">
                                    <div style="font-size: 2rem; margin-bottom: 0.5rem;">👨‍🏫</div>
                                    <div style="font-weight: 600; margin-bottom: 0.35rem;">${t==="uz"?"O'qituvchilar topilmadi":"Учителей не найдено"}</div>
                                    <div style="font-size: 0.9rem;">${t==="uz"?"Yangi o'qituvchi qo'shing":"Добавьте нового учителя"}</div>
                                </div>
                            `:`
                                <div id="teachersGrid" style="display: grid; gap: 1rem;">
                                    ${n.map(o=>`
                                        <div style="background: linear-gradient(135deg, rgba(16, 185, 129, 0.08) 0%, rgba(16, 185, 129, 0.02) 100%); border: 2px solid #10b981; border-radius: 12px; padding: 1.25rem; cursor: pointer; transition: all 0.3s; display: flex; gap: 1rem; align-items: center;" 
                                             onclick="window.router.navigate('/admin/teacher/${o.id||o._id}')"
                                             onmouseover="this.style.transform='translateY(-4px)'; this.style.boxShadow='0 12px 24px rgba(16, 185, 129, 0.15)'" 
                                             onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='none'"
                                             data-teacher-search="${(o.firstName+" "+o.lastName+" "+o.username).toLowerCase()}">
                                            <div style="width: 48px; height: 48px; background: linear-gradient(135deg, #10b981, #059669); border-radius: 10px; display: flex; align-items: center; justify-content: center; color: white; font-size: 1.25rem; flex-shrink: 0;">
                                                <i class="fas fa-chalkboard-user"></i>
                                            </div>
                                            <div style="flex: 1; min-width: 0;">
                                                <div style="font-weight: 600; color: var(--text-primary); font-size: 0.95rem;">${o.firstName||o.name||"Без имени"} ${o.lastName||""}</div>
                                                <div style="font-size: 0.8rem; color: var(--text-secondary);">@${o.username}</div>
                                                <div style="font-size: 0.75rem; color: #10b981; margin-top: 0.25rem; font-weight: 500;">${L("teacher")}</div>
                                            </div>
                                        </div>
                                    `).join("")}
                                </div>
                            `}
                        </div>
                    </div>
                </div>
            </div>
        `;O(a,"admin"),(i=document.getElementById("btnTeachersBack"))==null||i.addEventListener("click",()=>{$.navigate("/admin/dashboard")});const r=document.getElementById("teachersSearch");r==null||r.addEventListener("input",o=>{const l=o.target.value.toLowerCase();document.querySelectorAll("[data-teacher-search]").forEach(c=>{c.getAttribute("data-teacher-search").includes(l)?c.style.display="flex":c.style.display="none"})})}catch(s){console.error("Error loading teachers:",s),I("Ошибка при загрузке учителей","error")}}async function Ai(){var i,s;const e=k.getState(),t=e.language;if(!e.isAuthenticated||!e.user||e.user.role!=="admin"){console.log("❌ Unauthorized access to subjects"),$.navigate("/login");return}try{const n=await C("/api/subjects"),a=n.success?n.data:[],r=`
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
                            <h1 class="subjects-hero__title">${L("subjectsManagement")}</h1>
                            <p class="subjects-hero__desc">${L("subjectsManagementDesc")}</p>
                        </div>
                        <div class="subjects-hero__meta">
                            <button id="btnSubjectsBack" class="btn-secondary" style="padding: 0.7rem 1.2rem; font-size: 0.9rem; white-space: nowrap; border: 1px solid var(--border-color);">← ${L("back")}</button>
                            <span class="subjects-pill">${a.length} ${t==="uz"?"fan":"предметов"}</span>
                            <button id="btnAddSubject" class="btn-primary" style="padding: 0.75rem 1.5rem; font-size: 0.9rem; white-space: nowrap;">+ ${L("addSubject")}</button>
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
                                <div style="font-weight: 600; margin-bottom: 0.35rem;">${L("noSubjects")}</div>
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
                                                <button class="subject-edit-btn" data-id="${c}" style="padding: 0.5rem 0.9rem; font-size: 0.82rem; background: transparent; border: 1px solid var(--border-color); border-radius: 8px; color: var(--text-primary); cursor: pointer; font-weight: 600;">${L("edit")}</button>
                                                <button class="subject-delete-btn" data-id="${c}" style="padding: 0.5rem 0.9rem; font-size: 0.82rem; background: transparent; border: 1px solid #ef4444; border-radius: 8px; color: #ef4444; cursor: pointer; font-weight: 600;">${L("delete")}</button>
                                            </div>
                                        </div>
                                    `}).join("")}
                            </div>
                        `}
                    </div>
                </div>
            </div>
        `;O(r,"admin");const o=new Map(a.map(d=>[d._id||d.id,d]));(i=document.getElementById("btnAddSubject"))==null||i.addEventListener("click",()=>ih()),(s=document.getElementById("btnSubjectsBack"))==null||s.addEventListener("click",()=>{$.navigate("/admin/dashboard")});const l=document.getElementById("subjectsSearch");l&&l.addEventListener("input",d=>{const c=d.target.value.trim().toLowerCase();document.querySelectorAll("#subjectsGrid .subjects-card").forEach(u=>{const h=u.getAttribute("data-name-ru")||"",m=u.getAttribute("data-name-uz")||"",p=h.includes(c)||m.includes(c);u.style.display=p?"grid":"none"})}),document.querySelectorAll(".subject-edit-btn").forEach(d=>{d.addEventListener("click",()=>{const c=d.getAttribute("data-id"),u=o.get(c);u&&sh(u)})}),document.querySelectorAll(".subject-delete-btn").forEach(d=>{d.addEventListener("click",async()=>{const c=d.getAttribute("data-id");await Vt(t==="uz"?"Fanni o'chirishni xohlaysizmi?":"Удалить предмет?",t==="uz"?"Tasdiqlash":"Подтверждение")&&await nh(c)})})}catch(n){console.error("Error loading subjects:",n),I(t==="uz"?"Fanlarni yuklashda xatolik":"Ошибка при загрузке предметов","error"),$.navigate("/admin/dashboard")}}function ih(){var t,i;k.getState().language;const e=document.createElement("div");e.className="modal modal--centered",e.innerHTML=`
        <div class="modal-content" style="max-width: 520px;">
            <h2 style="margin: 0 0 0.5rem 0; font-size: 1.4rem;">${L("addSubject")}</h2>
            <p style="margin: 0 0 1.5rem 0; color: var(--text-secondary); font-size: 0.9rem;">${L("subjectsManagementDesc")}</p>
            <form id="subjectForm" style="display: grid; gap: 1rem;">
                <div>
                    <label style="display: block; font-weight: 600; margin-bottom: 0.4rem;">Название предмета</label>
                    <input id="subjectName" type="text" placeholder="Например: Математика" style="width: 100%; padding: 0.75rem; border: 2px solid var(--border-color); border-radius: 8px; background: var(--bg-secondary); color: var(--text-primary);" required>
                </div>
                <div style="display: flex; gap: 1rem; margin-top: 0.5rem;">
                    <button type="button" id="closeSubjectModal" class="button button-secondary" style="flex: 1;">${L("cancel")}</button>
                    <button type="submit" class="button button-primary" style="flex: 1; background: #7c3aed;">${L("save")}</button>
                </div>
            </form>
        </div>
    `,e.addEventListener("click",s=>{s.target===e&&e.remove()}),document.body.appendChild(e),setTimeout(()=>e.classList.add("show"),10),(t=document.getElementById("closeSubjectModal"))==null||t.addEventListener("click",()=>e.remove()),(i=document.getElementById("subjectForm"))==null||i.addEventListener("submit",async s=>{s.preventDefault();const n=document.getElementById("subjectName").value.trim();if(!n){I("Заполните название предмета","warning");return}const r=await C("/api/subjects","POST",{name:n});r.success?(I("Предмет добавлен","success"),e.remove(),Ai()):I(r.error||"Произошла ошибка","error")})}function sh(e){var s,n;const t=k.getState().language,i=document.createElement("div");i.className="modal modal--centered",i.innerHTML=`
        <div class="modal-content" style="max-width: 520px;">
            <h2 style="margin: 0 0 0.5rem 0; font-size: 1.4rem;">${L("editSubject")}</h2>
            <p style="margin: 0 0 1.5rem 0; color: var(--text-secondary); font-size: 0.9rem;">${L("subjectsManagementDesc")}</p>
            <form id="subjectEditForm" style="display: grid; gap: 1rem;">
                <div>
                    <label style="display: block; font-weight: 600; margin-bottom: 0.4rem;">Название предмета</label>
                    <input id="subjectEditName" type="text" value="${e.name||""}" style="width: 100%; padding: 0.75rem; border: 2px solid var(--border-color); border-radius: 8px; background: var(--bg-secondary); color: var(--text-primary);" required>
                </div>
                <div style="display: flex; gap: 1rem; margin-top: 0.5rem;">
                    <button type="button" id="closeSubjectEditModal" class="button button-secondary" style="flex: 1;">${L("cancel")}</button>
                    <button type="submit" class="button button-primary" style="flex: 1; background: #7c3aed;">${L("save")}</button>
                </div>
            </form>
        </div>
    `,i.addEventListener("click",a=>{a.target===i&&i.remove()}),document.body.appendChild(i),setTimeout(()=>i.classList.add("show"),10),(s=document.getElementById("closeSubjectEditModal"))==null||s.addEventListener("click",()=>i.remove()),(n=document.getElementById("subjectEditForm"))==null||n.addEventListener("submit",async a=>{a.preventDefault();const r=document.getElementById("subjectEditName").value.trim();if(!r){I(t==="uz"?"Barcha maydonlarni to'ldiring":"Заполните все обязательные поля","warning");return}const o={name:r},l=e._id||e.id,d=await C(`/api/subjects/${l}`,"PUT",o);d.success?(I(t==="uz"?"Fan yangilandi":"Предмет обновлен","success"),i.remove(),Ai()):I(d.error||(t==="uz"?"Xatolik yuz berdi":"Произошла ошибка"),"error")})}async function nh(e){const t=k.getState().language,i=await C(`/api/subjects/${e}`,"DELETE");i.success?(I(t==="uz"?"Fan o'chirildi":"Предмет удален","success"),Ai()):I(i.error||(t==="uz"?"Xatolik yuz berdi":"Произошла ошибка"),"error")}async function fr(){console.log("🔧 showAddUserModal called");const e=k.getState().language,t=document.createElement("div");t.className="modal",t.innerHTML=`
        <div class="modal-content" style="max-width: 550px;">
            <div style="background: linear-gradient(135deg, rgba(139, 92, 246, 0.2) 0%, rgba(124, 58, 237, 0.15) 100%); border: 1px solid rgba(139, 92, 246, 0.35); color: var(--text-primary); padding: 1.25rem; border-radius: 14px; margin-bottom: 1.25rem;">
                <div style="font-size: 0.85rem; color: var(--text-secondary); margin-bottom: 0.4rem;">${e==="uz"?"Admin paneli":"Админ панель"}</div>
                <h2 style="margin: 0; font-size: 1.35rem; font-weight: 800;">${e==="uz"?"O'qituvchi qo'shish":"Добавить учителя"}</h2>
                <p style="margin: 0.4rem 0 0 0; color: var(--text-secondary); font-size: 0.9rem;">${e==="uz"?"Yangi o'qituvchi yaratish":"Создать нового учителя"}</p>
            </div>
            
            <form id="addUserForm" class="add-user-form" style="display: flex; flex-direction: column; gap: 1rem;">
                <div id="addUserAlert" class="inline-alert" style="display: none;"></div>
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
                
                <div class="add-user-row" style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
                    <div>
                        <label style="display: block; font-weight: 600; margin-bottom: 0.4rem; font-size: 0.9rem;">
                            Email <span style="color: #ef4444;">*</span>
                        </label>
                        <input id="userEmail" type="email" placeholder="user@example.com" style="width: 100%; padding: 0.75rem; border: 2px solid var(--border-color); border-radius: 8px; background: var(--bg-secondary); color: var(--text-primary);" required>
                    </div>
                    <div>
                        <label style="display: block; font-weight: 600; margin-bottom: 0.4rem; font-size: 0.9rem;">
                            ${e==="uz"?"Telefon":"Телефон"}
                        </label>
                        <input id="userPhone" type="tel" placeholder="+998901234567" style="width: 100%; padding: 0.75rem; border: 2px solid var(--border-color); border-radius: 8px; background: var(--bg-secondary); color: var(--text-primary);">
                    </div>
                </div>
                
                <div style="background: rgba(59, 130, 246, 0.1); border: 1px solid rgba(59, 130, 246, 0.3); padding: 0.9rem; border-radius: 8px; font-size: 0.85rem; color: #3b82f6;">
                    ${e==="uz"?"✨ Логин автоматически генерируется системой. Временный пароль будет отправлен на указанный email.":"✨ Логин автоматически создается системой. Временный пароль будет отправлен на указанный email."}
                </div>
                
                <div style="background: rgba(239, 68, 68, 0.1); border: 1px solid rgba(239, 68, 68, 0.3); padding: 0.9rem; border-radius: 8px; font-size: 0.85rem; color: #ef4444;">
                    ${e==="uz"?"⚠️ Email kiritish majburiy!":"⚠️ Email обязателен!"}
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
    `,document.body.appendChild(t),setTimeout(()=>t.classList.add("show"),10);const i=document.getElementById("addUserAlert"),s=(n,a="info")=>{if(!i)return;const r={success:"✅",error:"❌",warning:"⚠️",info:"ℹ️"};i.className=`inline-alert inline-alert--${a}`,i.innerHTML=`
            <span style="font-size: 1.1rem;">${r[a]||r.info}</span>
            <span>${n}</span>
        `,i.style.display="flex"};document.getElementById("closeAddUserBtn").addEventListener("click",()=>{t.classList.remove("show"),setTimeout(()=>t.remove(),300)}),document.getElementById("addUserForm").addEventListener("submit",async n=>{n.preventDefault();const a=document.getElementById("userFirstName").value.trim(),r=document.getElementById("userLastName").value.trim(),o=document.getElementById("userEmail").value.trim(),l=document.getElementById("userPhone").value.trim();if(!a||!r){s(e==="uz"?"Barcha maydonlarni to'ldiring":"Заполните все обязательные поля","warning");return}if(!o){s(e==="uz"?"Email majburiy":"Email обязателен","warning");return}const d={role:"teacher",firstName:a,lastName:r,email:o,phone:l||null};try{const c=await C("/api/users/register",{method:"POST",body:JSON.stringify(d)});if(c.success){const u=document.createElement("div");u.className="modal show",u.style.zIndex="10001";const h=c.data.emailSent,m=c.data.username,p=c.data.email;u.innerHTML=`
                    <div class="modal-content" style="max-width: 500px; background: linear-gradient(135deg, #10b981 0%, #059669 100%); color: white;">
                        <div style="text-align: center; padding: 2rem;">
                            <div style="font-size: 3rem; margin-bottom: 1rem;">${h?"✅":"⚠️"}</div>
                            <h2 style="margin: 0 0 1rem 0; font-size: 1.5rem;">
                                ${e==="uz"?"Foydalanuvchi yaratildi":"Пользователь создан"}
                            </h2>
                            
                            <div style="background: rgba(255,255,255,0.15); border-radius: 12px; padding: 1.5rem; margin-bottom: 1rem; backdrop-filter: blur(10px);">
                                <div style="margin-bottom: 1rem;">
                                    <div style="font-size: 0.85rem; opacity: 0.8; margin-bottom: 0.3rem;">
                                        ${e==="uz"?"Login":"Логин"}:
                                    </div>
                                    <div style="font-size: 1.3rem; font-weight: 700; font-family: monospace; letter-spacing: 1px;">${m}</div>
                                </div>
                                <div>
                                    <div style="font-size: 0.85rem; opacity: 0.8; margin-bottom: 0.3rem;">Email:</div>
                                    <div style="font-size: 1.1rem; font-weight: 600;">${p}</div>
                                </div>
                            </div>
                            
                            ${h?`
                                <div style="background: rgba(255,255,255,0.1); border-radius: 8px; padding: 1rem; margin-bottom: 1.5rem; font-size: 0.85rem; text-align: left;">
                                    <div style="font-weight: 600; margin-bottom: 0.5rem;">📧 ${e==="uz"?"Email yuborildi":"Email отправлен"}</div>
                                    <ul style="margin: 0; padding-left: 1.2rem; line-height: 1.6;">
                                        <li>${e==="uz"?"Temporary parol yuborildi":"Временный пароль отправлен на email"}</li>
                                        <li>${e==="uz"?"Foydalanuvchi emailini tekshirishi kerak":"Пользователь должен проверить email"}</li>
                                        <li>${e==="uz"?"Birinchi kirishda parolni o'zgartirishi kerak":"При первом входе нужно сменить пароль"}</li>
                                    </ul>
                                </div>
                            `:`
                                <div style="background: rgba(239, 68, 68, 0.2); border-radius: 8px; padding: 1rem; margin-bottom: 1rem; font-size: 0.85rem;">
                                    <div style="font-weight: 600; margin-bottom: 0.5rem;">⚠️ ${e==="uz"?"Email yuborilmadi":"Email не отправлен"}</div>
                                    <p style="margin: 0;">
                                        ${e==="uz"?"Parolni qo'lda berish kerak. Server loglarini tekshiring.":"Необходимо передать пароль вручную. Проверьте логи сервера."}
                                    </p>
                                    ${c.data.otp?`
                                        <div style="margin-top: 1rem;">
                                            <div style="font-size: 0.85rem; opacity: 0.8; margin-bottom: 0.3rem;">
                                                ${e==="uz"?"Bir martalik parol (OTP)":"Одноразовый пароль (OTP)"}:
                                            </div>
                                            <div style="font-size: 1.5rem; font-weight: 700; font-family: monospace; letter-spacing: 3px; background: rgba(255,255,255,0.2); padding: 0.7rem; border-radius: 8px;">
                                                ${c.data.otp}
                                            </div>
                                        </div>
                                    `:""}
                                </div>
                            `}
                            
                            <button onclick="this.closest('.modal').remove()" style="width: 100%; padding: 0.9rem; background: white; color: #059669; border: none; border-radius: 8px; font-weight: 700; font-size: 1rem; cursor: pointer; transition: all 0.2s;">
                                ${e==="uz"?"Yopish":"Закрыть"}
                            </button>
                        </div>
                    </div>
                `,document.body.appendChild(u),I(e==="uz"?"Foydalanuvchi muvaffaqiyatli qo'shildi":"Пользователь успешно добавлен","success"),t.classList.remove("show"),setTimeout(()=>{t.remove(),ge()},300)}else s(c.error||(e==="uz"?"Xatolik yuz berdi":"Произошла ошибка"),"error")}catch(c){console.error("Error creating user:",c),s(e==="uz"?"Xatolik yuz berdi":"Произошла ошибка","error")}})}async function ah(){const e=k.getState().language,t=document.createElement("div");t.className="admin-modal-overlay",t.innerHTML=`
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
    `,document.body.appendChild(t),setTimeout(()=>t.classList.add("show"),10),t.addEventListener("click",i=>{i.target===t&&(t.classList.remove("show"),setTimeout(()=>t.remove(),300))});try{const i=await C("/api/users"),s=i.success?i.data.filter(a=>a.role==="teacher"):[],n=document.getElementById("classTeacher");s.forEach(a=>{const r=document.createElement("option");r.value=a._id,r.textContent=`${a.firstName} ${a.lastName}`,n.appendChild(r)})}catch(i){console.error("Error loading teachers:",i)}document.getElementById("closeAddClassBtn").addEventListener("click",()=>{t.classList.remove("show"),setTimeout(()=>t.remove(),300)}),document.getElementById("addClassForm").addEventListener("submit",async i=>{i.preventDefault();const s=document.getElementById("classGrade").value.trim(),n=document.getElementById("className").value.trim(),a=document.getElementById("classTeacher").value;if(!s||!n){I(e==="uz"?"Barcha maydonlarni to'ldiring":"Заполните все обязательные поля","warning");return}try{const r=await C("/api/classes",{method:"POST",body:JSON.stringify({grade:s,name:n,teacherId:a||null})});r.success?(I(e==="uz"?"Sinf muvaffaqiyatli yaratildi":"Класс успешно создан","success"),t.classList.remove("show"),setTimeout(()=>{t.remove(),ge()},300)):I(r.error||(e==="uz"?"Xatolik yuz berdi":"Произошла ошибка"),"error")}catch(r){console.error("Error creating class:",r),I(e==="uz"?"Xatolik yuz berdi":"Произошла ошибка","error")}})}window.showAddUserModal=fr;window.showAddClassModal=ah;window.viewTeacherTestResults=mh;window.assignTestToTeachers=ph;window.deleteTeacherTest=fh;window.editTeacherTest=hh;window.startTeacherTest=vh;window.retakeTeacherTest=xr;window.viewMyTestResult=xh;async function br(e){var s;const t=k.getState().language;O(`
        <div class="page-header">
            <button class="button button-secondary" id="btnBackToAdminDashboard" style="margin-bottom: 1rem;">
                ← ${t==="uz"?"Orqaga":"Назад"}
            </button>
            <h1>${t==="uz"?"O'quvchi ma'lumotlari":"Информация об ученике"}</h1>
        </div>
        
        <div id="studentDetailContainer">
            <div class="loading"><div class="spinner"></div></div>
        </div>
    `,"admin"),(s=document.getElementById("btnBackToAdminDashboard"))==null||s.addEventListener("click",()=>{$.navigate("/admin/dashboard")}),await rh(e)}async function rh(e){var y;const t=k.getState().language,[i,s,n]=await Promise.all([C(`/api/users/${e}`).catch(b=>({success:!1,error:b})),C("/api/subjects").catch(b=>({success:!1,data:[]})),C("/api/classes").catch(b=>({success:!1,data:[]}))]);if(console.log("📊 Student data loaded:",{userRes:i,student:i==null?void 0:i.data}),!i.success){document.getElementById("studentDetailContainer").innerHTML=`
            <div class="card" style="text-align: center; padding: 3rem;">
                <p style="color: #ef4444;">${t==="uz"?"O'quvchi topilmadi":"Ученик не найден"}</p>
            </div>
        `;return}const a=i.data;s.success&&s.data;const r=n.success?n.data||[]:[];console.log("👤 Full Student Object:",a),console.log("👤 Student info:",{first_name:a.first_name,last_name:a.last_name,name:a.name,grade:a.grade,homeroom_id:a.homeroom_id,class_id:a.class_id,username:a.username,email:a.email,allKeys:Object.keys(a)});const o=r.find(b=>b.id===a.homeroom_id||b._id===a.homeroom_id),l=o?o.name?`${o.grade||""}${o.name}`:o.grade||"—":a.grade||"—";console.log("📚 Class info:",{studentClass:o,classLabel:l});const d=[],c=[],u=0,h=0,m=0,p=`${a.first_name||""} ${a.last_name||""}`.trim()||a.name||"Без имени";console.log("📝 Full name resolved:",p);const g=((y=a.interestTestResults)==null?void 0:y.categories)||{};Object.entries(g).sort((b,x)=>x[1]-b[1]).slice(0,3).map(([b,x])=>({name:b,score:x}));let f=`
        <style>
            @keyframes slideInUp {
                from { opacity: 0; transform: translateY(20px); }
                to { opacity: 1; transform: translateY(0); }
            }
            .profile-section { animation: slideInUp 0.5s ease-out; }
            .profile-tab {
                padding: 0.75rem 1.5rem;
                background: transparent;
                border: none;
                color: var(--text-secondary);
                font-weight: 600;
                cursor: pointer;
                border-bottom: 3px solid transparent;
                transition: all 0.3s;
            }
            .profile-tab.active {
                color: var(--text-primary);
                border-bottom-color: #667eea;
            }
            .profile-tab:hover {
                color: var(--text-primary);
                background: var(--bg-tertiary);
            }
            .tab-content {
                display: none;
            }
            .tab-content.active {
                display: block;
            }
            .action-button {
                padding: 0.7rem 1.2rem;
                border-radius: 8px;
                border: 1px solid var(--border-color);
                background: var(--bg-secondary);
                color: var(--text-primary);
                font-weight: 600;
                cursor: pointer;
                transition: all 0.2s;
                display: flex;
                align-items: center;
                gap: 0.5rem;
                font-size: 0.9rem;
            }
            .action-button:hover {
                transform: translateY(-2px);
                box-shadow: 0 4px 12px rgba(0,0,0,0.1);
                border-color: #667eea;
            }
            .action-button.danger:hover {
                border-color: #ef4444;
                color: #ef4444;
            }
        </style>
        
        <!-- Breadcrumbs -->
        <nav style="margin-bottom: 1.5rem; display: flex; align-items: center; gap: 0.5rem; font-size: 0.9rem; color: var(--text-secondary);">
            <a href="#" onclick="event.preventDefault(); window.router.navigate('/admin/dashboard');" style="color: #3B82F6; text-decoration: none;">
                ${t==="uz"?"Bosh sahifa":"Главная"}
            </a>
            <span>›</span>
            <a href="#" onclick="event.preventDefault(); window.router.navigate('/admin/classes');" style="color: #3B82F6; text-decoration: none;">
                ${t==="uz"?"Sinflar":"Классы"}
            </a>
            <span>›</span>
            ${o?`
                <a href="#" onclick="event.preventDefault(); window.viewClassStudents('${a.homeroom_id}');" style="color: #3B82F6; text-decoration: none;">
                    ${l}
                </a>
                <span>›</span>
            `:""}
            <span style="color: var(--text-primary); font-weight: 600;">${p}</span>
        </nav>
        
        <!-- Profile Header -->
        <div class="card profile-section" style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 2rem; text-align: center; margin-bottom: 2rem; border-radius: 20px;">
            <div style="width: 100px; height: 100px; border-radius: 50%; background: rgba(255,255,255,0.2); display: flex; align-items: center; justify-content: center; margin: 0 auto 1rem; border: 3px solid rgba(255,255,255,0.4); font-size: 3rem;">
                ${p.charAt(0).toUpperCase()}
            </div>
            <h1 style="margin: 0 0 0.5rem 0; font-size: 1.8rem; font-weight: 800;">${p}</h1>
            <div style="display: flex; align-items: center; justify-content: center; gap: 0.75rem; margin-top: 0.5rem;">
                <span style="padding: 0.35rem 0.9rem; background: rgba(255,255,255,0.2); border-radius: 999px; font-size: 0.85rem; font-weight: 600;">
                    ${a.status==="active"?"✓ ":""}${t==="uz"?"Aktiv":"Активен"}
                </span>
            </div>
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(120px, 1fr)); gap: 1.5rem; margin-top: 1.5rem; padding-top: 1.5rem; border-top: 1px solid rgba(255,255,255,0.2);">
                <div>
                    <div style="font-size: 0.85rem; opacity: 0.9;">${t==="uz"?"Sinf":"Класс"}</div>
                    <div style="font-size: 1.5rem; font-weight: bold; margin-top: 0.25rem;">${l}</div>
                </div>
                <div>
                    <div style="font-size: 0.85rem; opacity: 0.9;">ID</div>
                    <div style="font-size: 1rem; font-weight: 600; margin-top: 0.25rem; font-family: monospace;">${a.username||"—"}</div>
                </div>
                <div>
                    <div style="font-size: 0.85rem; opacity: 0.9;">Email</div>
                    <div style="font-size: 0.9rem; font-weight: 600; margin-top: 0.25rem;">${a.email||"—"}</div>
                </div>
            </div>
        </div>
        
        <!-- Quick Actions -->
        <div class="card" style="margin-bottom: 2rem; padding: 1.5rem;">
            <h3 style="margin: 0 0 1rem 0; font-size: 1.1rem; font-weight: 700;">${t==="uz"?"Tez amallar":"Быстрые действия"}</h3>
            <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
                <button class="action-button" onclick="window.resetStudentPassword('${a.id}')">
                    <span>🔑</span>
                    ${t==="uz"?"Parolni tiklash":"Сбросить пароль"}
                </button>
                <button class="action-button" onclick="window.editStudent('${a.id}')">
                    <span>✏️</span>
                    ${t==="uz"?"Tahrirlash":"Редактировать"}
                </button>
                <button class="action-button" onclick="window.sendNotificationToStudent('${a.id}')">
                    <span>📧</span>
                    ${t==="uz"?"Xabar yuborish":"Отправить уведомление"}
                </button>
                <button class="action-button" onclick="window.exportStudentData('${a.id}', \`${p}\`)">
                    <span>📊</span>
                    ${t==="uz"?"Eksport qilish":"Экспорт данных"}
                </button>
                <button class="action-button danger" onclick="window.deleteStudent('${a.id}', \`${p}\`)">
                    <span>🗑️</span>
                    ${t==="uz"?"O'chirish":"Удалить"}
                </button>
            </div>
        </div>
        
        <!-- Tabs -->
        <div class="card" style="margin-bottom: 0; padding: 0; overflow: hidden;">
            <div style="display: flex; border-bottom: 1px solid var(--border-color); background: var(--bg-secondary);">
                <button class="profile-tab active" onclick="window.switchProfileTab('overview')">
                    ${t==="uz"?"Umumiy":"Обзор"}
                </button>
                <button class="profile-tab" onclick="window.switchProfileTab('subjects')">
                    ${t==="uz"?"Fanlar":"Предметы"}
                </button>
                <button class="profile-tab" onclick="window.switchProfileTab('tests')">
                    ${t==="uz"?"Testlar":"Тесты"}
                </button>
                <button class="profile-tab" onclick="window.switchProfileTab('settings')">
                    ${t==="uz"?"Sozlamalar":"Настройки"}
                </button>
            </div>
            
            <!-- Tab: Overview -->
            <div id="tab-overview" class="tab-content active" style="padding: 2rem;">
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 1.5rem; margin-bottom: 2rem;">
                    <!-- Class Info -->
                    ${o?`
                        <div style="padding: 1rem; background: var(--bg-secondary); border-radius: 12px; border: 1px solid var(--border-color);">
                            <h4 style="margin: 0 0 0.75rem 0; font-size: 0.95rem; font-weight: 700; display: flex; align-items: center; gap: 0.5rem;">
                                <span>🎓</span>
                                ${t==="uz"?"Sinf ma'lumotlari":"Информация о классе"}
                            </h4>
                            <div style="display: flex; flex-direction: column; gap: 0.75rem;">
                                <div style="display: flex; justify-content: space-between;">
                                    <span style="color: var(--text-secondary);">${t==="uz"?"Sinf":"Класс"}:</span>
                                    <strong>${l}</strong>
                                </div>
                                ${o.teacher_name?`
                                    <div style="display: flex; justify-content: space-between;">
                                        <span style="color: var(--text-secondary);">${t==="uz"?"Sinf rahbari":"Классный руководитель"}:</span>
                                        <strong>${o.teacher_name}</strong>
                                    </div>
                                `:""}
                            </div>
                        </div>
                    `:""}
                    
                    <!-- Contact Info -->
                    <div style="padding: 1rem; background: var(--bg-secondary); border-radius: 12px; border: 1px solid var(--border-color);">
                        <h4 style="margin: 0 0 0.75rem 0; font-size: 0.95rem; font-weight: 700; display: flex; align-items: center; gap: 0.5rem;">
                            <span>📞</span>
                            ${t==="uz"?"Kontakt ma'lumotlari":"Контактная информация"}
                        </h4>
                        <div style="display: flex; flex-direction: column; gap: 0.75rem;">
                            <div style="display: flex; justify-content: space-between;">
                                <span style="color: var(--text-secondary);">Email:</span>
                                <strong>${a.email||"—"}</strong>
                            </div>
                            ${a.phone?`
                                <div style="display: flex; justify-content: space-between;">
                                    <span style="color: var(--text-secondary);">${t==="uz"?"Telefon":"Телефон"}:</span>
                                    <strong>${a.phone}</strong>
                                </div>
                            `:""}
                            <div style="display: flex; justify-content: space-between;">
                                <span style="color: var(--text-secondary);">${t==="uz"?"Foydalanuvchi nomi":"Имя пользователя"}:</span>
                                <strong>${a.username||"—"}</strong>
                            </div>
                            ${a.created_at?`
                                <div style="display: flex; justify-content: space-between;">
                                    <span style="color: var(--text-secondary);">${t==="uz"?"Ro'yxatdan o'tish":"Дата регистрации"}:</span>
                                    <strong>${new Date(a.created_at).toLocaleDateString(t==="uz"?"uz-UZ":"ru-RU")}</strong>
                                </div>
                            `:""}
                        </div>
                    </div>
                </div>
        
        <!-- Statistics -->
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(160px, 1fr)); gap: 1rem; margin-bottom: 2rem;">
            <div class="card profile-section" style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 1.5rem; border-radius: 16px; text-align: center;">
                <div style="font-size: 2.5rem; font-weight: bold; margin-bottom: 0.5rem;">${u}%</div>
                <div style="font-size: 0.85rem; opacity: 0.9;">${t==="uz"?"O'rtacha ball":"Средний балл"}</div>
            </div>
            <div class="card profile-section" style="background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%); color: white; padding: 1.5rem; border-radius: 16px; text-align: center;">
                <div style="font-size: 2.5rem; font-weight: bold; margin-bottom: 0.5rem;">${d.length}</div>
                <div style="font-size: 0.85rem; opacity: 0.9;">${t==="uz"?"Testlar topshirdi":"Пройдено тестов"}</div>
            </div>
            <div class="card profile-section" style="background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%); color: white; padding: 1.5rem; border-radius: 16px; text-align: center;">
                <div style="font-size: 2.5rem; font-weight: bold; margin-bottom: 0.5rem;">${h}%</div>
                <div style="font-size: 0.85rem; opacity: 0.9;">${t==="uz"?"Eng yuqori ball":"Лучший результат"}</div>
            </div>
            <div class="card profile-section" style="background: linear-gradient(135deg, #43e97b 0%, #38f9d7 100%); color: white; padding: 1.5rem; border-radius: 16px; text-align: center;">
                <div style="font-size: 2.5rem; font-weight: bold; margin-bottom: 0.5rem;">${m}</div>
                <div style="font-size: 0.85rem; opacity: 0.9;">${t==="uz"?"O'tkazdi":"Успешно"}</div>
            </div>
        </div>
            </div>
            
            <!-- Tab: Subjects -->
            <div id="tab-subjects" class="tab-content" style="padding: 2rem;">
                <h4 style="margin: 0 0 1.5rem 0; font-size: 1.1rem; font-weight: 700;">
                    ${t==="uz"?"O'qiladigan fanlar":"Изучаемые предметы"}
                </h4>
                <div id="subjects-list" style="display: grid; gap: 1rem;">
                    <div style="text-align: center; padding: 2rem; color: var(--text-secondary);">
                        ${t==="uz"?"Fanlar yuklanmoqda...":"Загрузка предметов..."}
                    </div>
                </div>
            </div>
            
            <!-- Tab: Tests -->
            <div id="tab-tests" class="tab-content" style="padding: 2rem;">
                <h4 style="margin: 0 0 1.5rem 0; font-size: 1.1rem; font-weight: 700;">
                    ${t==="uz"?"Test natijalari":"Результаты тестов"}
                </h4>
                <div style="text-align: center; padding: 2rem; color: var(--text-secondary);">
                    ${t==="uz"?"Test natijalari topilmadi":"Результаты тестов отсутствуют"}
                </div>
            </div>
            
            <!-- Tab: Settings -->
            <div id="tab-settings" class="tab-content" style="padding: 2rem;">
                <h4 style="margin: 0 0 1.5rem 0; font-size: 1.1rem; font-weight: 700;">
                    ${t==="uz"?"O'quvchi sozlamalari":"Настройки ученика"}
                </h4>
                <form onsubmit="window.updateStudent(event, '${a.id}')">
                    <div style="display: grid; gap: 1.5rem; max-width: 600px;">
                        <div>
                            <label style="display: block; margin-bottom: 0.5rem; font-weight: 600;">${t==="uz"?"Ism":"Имя"}:</label>
                            <input type="text" name="first_name" value="${a.first_name||""}" class="form-input" required>
                        </div>
                        <div>
                            <label style="display: block; margin-bottom: 0.5rem; font-weight: 600;">${t==="uz"?"Familiya":"Фамилия"}:</label>
                            <input type="text" name="last_name" value="${a.last_name||""}" class="form-input" required>
                        </div>
                        <div>
                            <label style="display: block; margin-bottom: 0.5rem; font-weight: 600;">Email:</label>
                            <input type="email" name="email" value="${a.email||""}" class="form-input" required>
                        </div>
                        <div>
                            <label style="display: block; margin-bottom: 0.5rem; font-weight: 600;">${t==="uz"?"Telefon":"Телефон"}:</label>
                            <input type="tel" name="phone" value="${a.phone||""}" class="form-input">
                        </div>
                        <div>
                            <label style="display: block; margin-bottom: 0.5rem; font-weight: 600;">${t==="uz"?"Holat":"Статус"}:</label>
                            <select name="status" class="form-input" required>
                                <option value="active" ${a.status==="active"?"selected":""}>${t==="uz"?"Aktiv":"Активен"}</option>
                                <option value="inactive" ${a.status==="inactive"?"selected":""}>${t==="uz"?"Nofaol":"Неактивен"}</option>
                            </select>
                        </div>
                        <button type="submit" class="btn btn-primary" style="margin-top: 0.5rem;">
                            ${t==="uz"?"Saqlash":"Сохранить изменения"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    `;a.interestTestResults&&Object.keys(g).length>0&&(f+=`
            <div class="card profile-section" style="padding: 1.5rem; margin-bottom: 2rem;">
                <h2 style="margin-top: 0; display: flex; align-items: center; gap: 0.5rem;">
                    🎯 ${t==="uz"?"Tavsiya etilgan fanlar":"Рекомендуемые предметы"}
                </h2>
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 1rem;">
                    ${Object.entries(g).map(([b,x])=>{const w={math:{bg:"#667eea",text:"Математика/Matematika"},science:{bg:"#f093fb",text:"Наука/Fanlar"},tech:{bg:"#4facfe",text:"Технология/Texnologiya"},art:{bg:"#43e97b",text:"Искусство/San'at"},social:{bg:"#f5576c",text:"Социология/Jamiyat"},language:{bg:"#ffa502",text:"Язык/Til"}}[b]||{bg:"#667eea"},z=t==="uz"?b==="math"?"Matematika":b==="science"?"Fanlar":b==="tech"?"Texnologiya":b==="art"?"San'art":b==="social"?"Jamiyat":"Til":b==="math"?"Математика":b==="science"?"Наука":b==="tech"?"Технология":b==="art"?"Искусство":b==="social"?"Социология":"Язык";return`
                            <div style="background: linear-gradient(135deg, ${w.bg} 0%, ${w.bg}dd 100%); color: white; padding: 1.25rem; border-radius: 12px; text-align: center;">
                                <div style="font-size: 1.8rem; margin-bottom: 0.5rem;">
                                    ${b==="math"?"📐":b==="science"?"🧪":b==="tech"?"💻":b==="art"?"🎨":b==="social"?"👥":"📚"}
                                </div>
                                <div style="font-weight: 600; margin-bottom: 0.5rem;">${z}</div>
                                <div style="font-size: 1.3rem; font-weight: bold;">${Math.round(x)}%</div>
                            </div>
                        `}).join("")}
                </div>
            </div>
        `,f+=`
            <div class="card profile-section" style="padding: 1.5rem; margin-bottom: 2rem;">
                <h2 style="margin-top: 0; display: flex; align-items: center; gap: 0.5rem;">
                    📌 ${t==="uz"?"Qiziqish profili":"Профиль интересов"}
                </h2>
                <div style="display: grid; gap: 0.75rem;">
                    ${Object.entries(g).map(([b,x])=>`
                            <div style="display: grid; gap: 0.4rem;">
                                <div style="display: flex; justify-content: space-between; font-weight: 600; color: var(--text-primary);">
                                    <span>${{math:t==="uz"?"Matematika":"Математика",science:t==="uz"?"Fanlar":"Наука",tech:t==="uz"?"Texnologiya":"Технология",art:t==="uz"?"San'at":"Искусство",social:t==="uz"?"Jamiyat":"Социум",language:t==="uz"?"Til":"Язык"}[b]||b}</span>
                                    <span>${x}%</span>
                                </div>
                                <div style="height: 8px; background: var(--bg-tertiary); border-radius: 999px; overflow: hidden;">
                                    <div style="height: 100%; width: ${Math.min(Math.max(x,0),100)}%; background: linear-gradient(90deg, #3B82F6, #8B5CF6);"></div>
                                </div>
                            </div>
                        `).join("")}
                </div>
            </div>
        `),f+=`
        <div class="card profile-section" style="padding: 1.5rem; margin-bottom: 2rem;">
            <h2 style="margin-top: 0; display: flex; align-items: center; gap: 0.5rem;">
                📈 ${t==="uz"?"Fanlar bo'yicha dinamika":"Динамика по предметам"}
            </h2>
            <div style="position: relative; min-height: 280px;">
                <div id="adminStudentAnalyticsEmpty" class="card" style="padding: 1rem; text-align: center; color: var(--text-secondary);">${t==="uz"?"Ma'lumotlar mavjud emas":"Нет данных"}</div>
                <canvas id="adminStudentAnalyticsChart" style="max-height: 320px; width: 100%; display: none;"></canvas>
            </div>
        </div>
    `,c.length>0&&(f+=`
            <div class="card profile-section" style="padding: 1.5rem; margin-bottom: 2rem;">
                <h2 style="margin-top: 0; display: flex; align-items: center; gap: 0.5rem;">
                    📊 ${t==="uz"?"So'nggi natijalar":"Последние результаты"} (${t==="uz"?"Top 5":"Топ 5"})
                </h2>
                <div style="display: grid; gap: 0.75rem;">
                    ${c.map(b=>{const x=Math.round(b.correctCount/b.totalCount*100),v=x>=80?"#10b981":x>=50?"#f59e0b":"#ef4444",z=new Date(b.completedAt).toLocaleDateString(t==="uz"?"uz-UZ":"ru-RU");return`
                            <div style="display: flex; align-items: center; justify-content: space-between; padding: 1rem; background: var(--bg-secondary); border-radius: 10px; border-left: 4px solid ${v};">
                                <div style="flex: 1;">
                                    <div style="font-weight: 600; color: var(--text-primary); margin-bottom: 0.25rem;">${b.testName}</div>
                                    <div style="font-size: 0.85rem; color: var(--text-muted);">📅 ${z}</div>
                                </div>
                                <div style="text-align: right; margin-left: 1rem;">
                                    <div style="font-size: 1.5rem; font-weight: bold; color: ${v};">${x}%</div>
                                    <div style="font-size: 0.8rem; color: var(--text-muted);">${b.correctCount}/${b.totalCount}</div>
                                </div>
                            </div>
                        `}).join("")}
                </div>
            </div>
        `),d.length>0&&(f+=`
            <div class="card profile-section" style="padding: 1.5rem;">
                <h2 style="margin-top: 0; display: flex; align-items: center; gap: 0.5rem;">
                    📋 ${t==="uz"?"Barcha test natijalari":"История всех тестов"} (${d.length} ${t==="uz"?"test":"тестов"})
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
                            ${d.map((b,x)=>{const v=Math.round(b.correctCount/b.totalCount*100),w=v>=80?"#10b981":v>=50?"#f59e0b":"#ef4444",E=new Date(b.completedAt).toLocaleDateString(t==="uz"?"uz-UZ":"ru-RU",{month:"short",day:"numeric"});return`
                                    <tr style="border-bottom: 1px solid var(--border); transition: background 0.2s;" onmouseover="this.style.background='var(--bg-tertiary)'" onmouseout="this.style.background='transparent'">
                                        <td style="padding: 0.75rem; color: var(--text-primary);">${b.testName}</td>
                                        <td style="padding: 0.75rem; text-align: center;">
                                            <span style="color: ${w}; font-weight: bold; font-size: 1.1rem;">${v}%</span>
                                        </td>
                                        <td style="padding: 0.75rem; text-align: center; color: var(--text-muted);">${b.totalCount}</td>
                                        <td style="padding: 0.75rem; text-align: center;">
                                            <span style="color: #10b981; font-weight: 600;">${b.correctCount}</span>
                                        </td>
                                        <td style="padding: 0.75rem; text-align: right; color: var(--text-muted); font-size: 0.9rem;">${E}</td>
                                    </tr>
                                `}).join("")}
                        </tbody>
                    </table>
                </div>
            </div>
        `),document.getElementById("studentDetailContainer").innerHTML=f}async function oh(e){var s;const i=`
        <div style="margin-bottom: 1rem;">
            <button class="button button-secondary" id="btnBackToAdminDashboard2">
                ← ${k.getState().language==="uz"?"Orqaga":"Назад"}
            </button>
        </div>
        
        <div id="teacherDetailContainer">
            <div class="loading"><div class="spinner"></div></div>
        </div>
    `;O(i,"admin"),(s=document.getElementById("btnBackToAdminDashboard2"))==null||s.addEventListener("click",()=>{$.navigate("/admin/dashboard")}),await yr(e)}async function yr(e){var g;const t=k.getState().language,[i,s,n,a]=await Promise.all([C(`/api/users/${e}`),C("/api/tests"),C(`/api/analytics/teachers/${e}/subjects`),C("/api/classes")]);if(!i.success){document.getElementById("teacherDetailContainer").innerHTML=`
            <div class="card" style="text-align: center; padding: 3rem;">
                <p style="color: #ef4444;">${t==="uz"?"O'qituvchi topilmadi":"Учитель не найден"}</p>
            </div>
        `;return}const r=i.data,o=n.success?n.data:[],l=s.data||[],d=a.success?a.data:[],c=l.filter(f=>f.createdBy===e),u=`${r.firstName} ${r.lastName}`,h=Array.isArray(r.subjects)?r.subjects:[],m=d.filter(f=>f.teacherId===e);let p=`
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
    `;h.length>0?p+=`
            <div class="card profile-section" style="padding: 1.5rem; margin-bottom: 2rem;">
                <div style="display: flex; justify-content: space-between; align-items: center; gap: 1rem; flex-wrap: wrap;">
                    <h2 style="margin-top: 0; display: flex; align-items: center; gap: 0.5rem;">
                        📚 ${t==="uz"?"O'qitadigan fanlar":"Преподаваемые предметы"}
                    </h2>
                    <button class="button button-secondary" id="btnEditTeacherAssignments" style="padding: 0.5rem 1rem;">
                        ${t==="uz"?"Tayinlash":"Назначения"}
                    </button>
                </div>
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 1rem;">
                    ${h.map((f,y)=>{const b=["#667eea","#f093fb","#4facfe","#43e97b","#f5576c","#ffa502"],x=b[y%b.length],v=f.name||f,w=["📐","🔬","⚗️","🧬","📜","📖"],z=w[y%w.length];return`
                            <div style="background: linear-gradient(135deg, ${x} 0%, ${x}dd 100%); color: white; padding: 1.5rem; border-radius: 12px; text-align: center;">
                                <div style="font-size: 2rem; margin-bottom: 0.75rem;">${z}</div>
                                <div style="font-weight: 600;">${typeof f=="string"?f:v}</div>
                            </div>
                        `}).join("")}
                </div>
            </div>
        `:p+=`
            <div class="card profile-section" style="padding: 1.5rem; margin-bottom: 2rem;">
                <div style="display: flex; justify-content: space-between; align-items: center; gap: 1rem; flex-wrap: wrap;">
                    <h2 style="margin-top: 0; display: flex; align-items: center; gap: 0.5rem;">
                        📚 ${t==="uz"?"O'qitadigan fanlar":"Преподаваемые предметы"}
                    </h2>
                    <button class="button button-secondary" id="btnEditTeacherAssignments" style="padding: 0.5rem 1rem;">
                        ${t==="uz"?"Tayinlash":"Назначения"}
                    </button>
                </div>
                <div style="color: var(--text-muted); text-align: center; padding: 1.5rem;">
                    ${t==="uz"?"Hozircha fanlar tayinlanmagan":"Предметы не назначены"}
                </div>
            </div>
        `,m.length>0&&(p+=`
            <div class="card profile-section" style="padding: 1.5rem; margin-bottom: 2rem;">
                <h2 style="margin-top: 0; display: flex; align-items: center; gap: 0.5rem;">
                    🏫 ${t==="uz"?"Biriktirilgan sinflar":"Закрепленные классы"}
                </h2>
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(140px, 1fr)); gap: 0.75rem;">
                    ${m.map(f=>{var x;const y=f.name?`${f.grade||""}${f.name}`:(x=f.sections)!=null&&x.length?`${f.grade||""} (${f.sections.join(", ")})`:f.grade||"—",b=f.studentCount??0;return`
                            <div style="padding: 0.9rem; border-radius: 12px; border: 1px solid var(--border-color); background: var(--bg-secondary); display: grid; gap: 0.25rem;">
                                <div style="font-weight: 700; color: var(--text-primary);">${y}</div>
                                <div style="font-size: 0.85rem; color: var(--text-muted);">${b} ${t==="uz"?"o'quvchi":"учеников"}</div>
                            </div>
                        `}).join("")}
                </div>
            </div>
        `),o.length>0&&(p+=`
            <div class="card profile-section" style="padding: 1.5rem; margin-bottom: 2rem;">
                <h2 style="margin-top: 0; display: flex; align-items: center; gap: 0.5rem;">
                    📊 ${t==="uz"?"Fanlar bo'yicha natijalar":"Результаты по предметам"}
                </h2>
                <div style="display: grid; gap: 0.75rem;">
                    ${o.map(f=>`
                        <div style="display: flex; justify-content: space-between; align-items: center; padding: 0.9rem; background: var(--bg-secondary); border-radius: 10px; border-left: 4px solid #3B82F6;">
                            <div style="font-weight: 600; color: var(--text-primary);">${f.subjectName}</div>
                            <div style="text-align: right;">
                                <div style="font-weight: 700; color: #3B82F6;">${f.averageScore}%</div>
                                <div style="font-size: 0.8rem; color: var(--text-muted);">${f.testsCompleted} ${t==="uz"?"natija":"результатов"}</div>
                            </div>
                        </div>
                    `).join("")}
                </div>
            </div>
        `),c.length>0&&(p+=`
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
                            ${c.map((f,y)=>{var z;const x=new Date(f.createdAt||f.updatedAt).toLocaleDateString(t==="uz"?"uz-UZ":"ru-RU",{month:"short",day:"numeric",year:"2-digit"}),v=f.testType||(t==="uz"?"Standart":"Стандарт");return`
                                    <tr style="border-bottom: 1px solid var(--border); transition: background 0.2s;" onmouseover="this.style.background='var(--bg-tertiary)'" onmouseout="this.style.background='transparent'">
                                        <td style="padding: 0.75rem; color: var(--text-primary);">${f.name||f.testName||(t==="uz"?"Номи келмаган тест":"Тест без названия")}</td>
                                        <td style="padding: 0.75rem; text-align: center;">
                                            <span style="background: var(--bg-tertiary); padding: 0.25rem 0.75rem; border-radius: 8px; font-weight: 600; color: #667eea;">${((z=f.questions)==null?void 0:z.length)||f.questionCount||0}</span>
                                        </td>
                                        <td style="padding: 0.75rem; text-align: center; color: var(--text-muted);">${v}</td>
                                        <td style="padding: 0.75rem; text-align: right; color: var(--text-muted); font-size: 0.9rem;">${x}</td>
                                    </tr>
                                `}).join("")}
                        </tbody>
                    </table>
                </div>
            </div>
        `),document.getElementById("teacherDetailContainer").innerHTML=p,(g=document.getElementById("btnEditTeacherAssignments"))==null||g.addEventListener("click",()=>{lh(e)})}async function lh(e){var g,f,y;const t=k.getState().language,[i,s,n]=await Promise.all([C("/api/subjects"),C("/api/classes"),C(`/api/teachers/${e}/assignments`)]);if(!i.success||!s.success){await I(t==="uz"?"Ma'lumotlarni yuklashda xatolik":"Ошибка загрузки данных","error");return}const a=i.data||[],r=s.data||[],o=n.success?n.data:[],l=new Map;o.forEach(b=>{const x=b.subjectId||b.subject_id,v=b.classId||b.class_id;!x||!v||(l.has(x)||l.set(x,new Set),l.get(x).add(v))});const d=document.createElement("div");d.className="modal",d.innerHTML=`
        <div class="modal-content" style="max-width: 900px; max-height: 90vh; overflow-y: auto;">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.5rem;">
                <h2 style="margin: 0;">${t==="uz"?"Fan va sinflarni tayinlash":"Назначение предметов и классов"}</h2>
                <button class="modal-close" id="closeAssignmentsModal">✕</button>
            </div>
            <form id="teacherAssignmentsForm" style="display: grid; gap: 1rem;">
                <div class="inline-alert" id="assignmentsAlert" style="display: none;"></div>
                <div style="display: grid; gap: 0.75rem; max-height: 420px; overflow-y: auto; padding: 0.5rem;">
                    ${a.map((b,x)=>{const v=(b==null?void 0:b.id)||(b==null?void 0:b._id)||`undefined-${x}`,w=(b==null?void 0:b.name)||`undefined-${x}`,z=l.get(v)||new Set,E=r.map(S=>{const T=(S==null?void 0:S.id)||(S==null?void 0:S._id),M=S!=null&&S.section?`${S.grade||""}${S.section}`:S!=null&&S.grade&&(S!=null&&S.name)?`${S.grade}${S.name}`:(S==null?void 0:S.name)||(S==null?void 0:S.grade)||"—",j=T&&z.has(T);return`
                                <label data-subject-id="${v}" data-class-id="${T}" style="display: flex; align-items: center; gap: 0.6rem; padding: 0.4rem 0.6rem; border-radius: 8px; cursor: pointer;">
                                    <input type="checkbox" class="teacherSubjectClass" data-subject-id="${v}" value="${T}" ${j?"checked":""} style="width: 16px; height: 16px; accent-color: #8b5cf6;">
                                    <span style="font-size: 0.9rem; color: var(--text-primary);">${M}</span>
                                </label>
                            `}).join(""),_=z.size>0;return`
                            <div style="border: 2px solid transparent; border-radius: 10px; background: var(--bg-secondary);">
                                <label class="teacher-subject-item" style="display: flex; align-items: center; gap: 0.7rem; padding: 0.75rem 0.9rem; cursor: pointer; border-radius: 8px; transition: all 0.2s ease;">
                                    <input type="checkbox" class="teacherSubject" value="${v}" data-name="${w}" ${_?"checked":""} style="width: 20px; height: 20px; cursor: pointer; accent-color: #8b5cf6; border-radius: 4px;">
                                    <span style="flex: 1; font-size: 0.95rem; font-weight: 500; color: var(--text-primary);">${w}</span>
                                </label>
                                <div class="teacher-subject-classes" data-subject-id="${v}" style="display: ${_?"block":"none"}; padding: 0.5rem 0.9rem 0.9rem 2.2rem; border-top: 1px solid var(--border-color);">
                                    <div style="font-size: 0.8rem; color: var(--text-muted); margin-bottom: 0.4rem;">${t==="uz"?"Sinflar":"Классы"}</div>
                                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(120px, 1fr)); gap: 0.35rem;">
                                        ${E}
                                    </div>
                                </div>
                            </div>
                        `}).join("")}
                </div>
                <div style="display: flex; gap: 1rem; justify-content: flex-end; margin-top: 1rem;">
                    <button type="button" class="button button-secondary" id="btnCancelAssignments">${t==="uz"?"Bekor qilish":"Отмена"}</button>
                    <button type="submit" class="button button-primary">${t==="uz"?"Saqlash":"Сохранить"}</button>
                </div>
            </form>
        </div>
    `,document.body.appendChild(d),setTimeout(()=>d.classList.add("show"),10);const c=()=>{d.classList.remove("show"),setTimeout(()=>d.remove(),300)};(g=document.getElementById("closeAssignmentsModal"))==null||g.addEventListener("click",c),(f=document.getElementById("btnCancelAssignments"))==null||f.addEventListener("click",c),d.querySelectorAll(".teacherSubject").forEach(b=>{b.addEventListener("change",x=>{const v=x.target.value,w=d.querySelector(`.teacher-subject-classes[data-subject-id="${v}"]`);w&&(w.style.display=x.target.checked?"block":"none")})});const u=b=>{const x=document.getElementById("assignmentsAlert");x&&(x.className="inline-alert inline-alert--warning",x.style.display="flex",x.innerHTML=`
            <span style="font-size: 1.1rem;">⚠️</span>
            <span>${b}</span>
        `)},h=()=>{d.querySelectorAll("label[data-subject-id][data-class-id]").forEach(b=>{b.style.background="",b.style.border="",b.style.boxShadow=""})},m=b=>{h(),!(!Array.isArray(b)||b.length===0)&&b.forEach(x=>{const v=x.subjectId||x.subject_id,w=x.classId||x.class_id;if(!v||!w)return;const z=d.querySelector(`label[data-subject-id="${v}"][data-class-id="${w}"]`);z&&(z.style.background="rgba(239, 68, 68, 0.12)",z.style.border="1px solid rgba(239, 68, 68, 0.6)",z.style.boxShadow="0 0 0 2px rgba(239, 68, 68, 0.08)");const E=d.querySelector(`.teacherSubject[value="${v}"]`),_=d.querySelector(`.teacher-subject-classes[data-subject-id="${v}"]`);E&&_&&(E.checked=!0,_.style.display="block")})},p=b=>{if(!Array.isArray(b)||b.length===0)return"";const x=b.map(v=>{const w=v.section?`${v.grade||""}${v.section}`:v.grade&&v.className?`${v.grade}${v.className}`:v.className||v.grade||"—",z=`${v.first_name||""} ${v.last_name||""}`.trim();return`${v.subjectName||(t==="uz"?"Fan":"Предмет")} — ${w}${z?` (${z})`:""}`}).join(", ");return t==="uz"?`Bu fan-sinf juftligi allaqachon boshqa o'qituvchiga biriktirilgan: ${x}`:`Эта пара «предмет + класс» уже назначена другому учителю: ${x}`};(y=document.getElementById("teacherAssignmentsForm"))==null||y.addEventListener("submit",async b=>{b.preventDefault();const x=Array.from(d.querySelectorAll(".teacherSubject:checked")),v=[];let w=!1;if(x.forEach(E=>{const _=E.value,S=E.dataset.name,T=Array.from(d.querySelectorAll(`.teacherSubjectClass[data-subject-id="${_}"]:checked`)).map(M=>M.value).filter(Boolean);T.length===0&&(w=!0),v.push({subjectId:_,subjectName:S,classIds:T})}),v.length===0){u(t==="uz"?"Kamida bitta predmet tanlang":"Выберите хотя бы один предмет");return}if(w){u(t==="uz"?"Har bir fan uchun kamida bitta sinf tanlang":"Выберите хотя бы один класс для каждого предмета");return}const z=await C(`/api/teachers/${e}/assignments`,{method:"PUT",body:JSON.stringify({subjectAssignments:v})});if(z.success)c(),await yr(e);else{const E=p(z==null?void 0:z.conflicts);m(z==null?void 0:z.conflicts),u(E||z.error||L("error"))}})}async function dh(){var i,s;const e=k.getState().language,t=`
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
                    <button class="btn-secondary" id="btnBackToAdmin" style="padding: 0.7rem 1.2rem; font-size: 0.9rem; border: 1px solid var(--border-color);">← ${L("back")}</button>
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
    `;O(t,"admin"),(i=document.getElementById("btnBackToAdmin"))==null||i.addEventListener("click",()=>{window.router.navigate("/admin/dashboard")}),(s=document.getElementById("btnCreateTeacherTest"))==null||s.addEventListener("click",()=>{ch()}),await js()}async function js(){const e=k.getState().language,t=document.getElementById("teacherTestsList");if(!t){console.error("teacherTestsList container not found");return}try{console.log("Loading teacher tests...");const i=await C("/api/teacher-tests");if(console.log("Teacher tests response:",i),!i.success||!i.data||i.data.length===0){t.innerHTML=`
                <div style="text-align: center; padding: 3rem; color: var(--text-muted);">
                    <div style="font-size: 4rem; margin-bottom: 1rem; opacity: 0.3;">📝</div>
                    <p>${e==="uz"?"Hali testlar yaratilmagan":"Тесты еще не созданы"}</p>
                </div>
            `;return}const s=i.data;console.log("Rendering",s.length,"tests");const n=r=>(r==null?void 0:r._id)||(r==null?void 0:r.id)||(r==null?void 0:r.testId)||(r==null?void 0:r.test_id),a=r=>(r==null?void 0:r.createdAt)||(r==null?void 0:r.created_at)||(r==null?void 0:r.updatedAt)||(r==null?void 0:r.updated_at);t.innerHTML=s.map(r=>{const o=n(r),l=a(r),d=l?new Date(l).toLocaleDateString("ru-RU"):"-",c=(r==null?void 0:r.title)||"",u=(r==null?void 0:r.description)||"",h=o?`
                <button class="button button-primary button-inline" onclick="editTeacherTest('${o}')" style="padding: 0.5rem 1rem;">
                    <span>✏️</span>
                    <span>${e==="uz"?"Tahrirlash":"Редактировать"}</span>
                </button>
                <button class="button button-secondary button-inline" onclick="viewTeacherTestResults('${o}')" style="padding: 0.5rem 1rem;">
                    <span>📊</span>
                    <span>${e==="uz"?"Natijalar":"Результаты"}</span>
                </button>
                <button class="button button-primary button-inline" onclick="assignTestToTeachers('${o}')" style="padding: 0.5rem 1rem;">
                    <span>👥</span>
                    <span>${e==="uz"?"Tayinlash":"Назначить"}</span>
                </button>
                <button class="button button-inline" onclick="deleteTeacherTest('${o}')" style="padding: 0.5rem 1rem; background: #ef4444; color: white; display: inline-flex; align-items: center; gap: 0.5rem;">
                    <span>🗑️</span>
                    <span class="delete-text">${e==="uz"?"O'chirish":"Удалить"}</span>
                </button>
            `:`
                <span style="color: var(--text-muted); font-size: 0.9rem;">${e==="uz"?"ID topilmadi":"ID не найден"}</span>
            `;return`
            <div class="card" style="margin-bottom: 1rem; border-left: 4px solid var(--primary); overflow: hidden;">
                <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: 1rem;">
                    <div style="flex: 1;">
                        <h3 style="margin: 0 0 0.5rem 0;">${c}</h3>
                        <p style="color: var(--text-muted); margin: 0 0 0.5rem 0;">${u}</p>
                        <div style="display: flex; gap: 1rem; font-size: 0.9rem; color: var(--text-muted);">
                            <span>📝 ${r.questionsCount||0} ${e==="uz"?"ta savol":"вопросов"}</span>
                            <span>⏱️ ${r.duration||30} ${e==="uz"?"daqiqa":"минут"}</span>
                            <span>📅 ${d}</span>
                        </div>
                    </div>
                    <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
                        ${h}
                    </div>
                </div>
            </div>
        `}).join("")}catch(i){console.error("Error loading teacher tests:",i),t.innerHTML=`
            <div style="text-align: center; padding: 2rem; color: #ef4444;">
                <p>${e==="uz"?"Xatolik yuz berdi":"Произошла ошибка"}</p>
            </div>
        `}}function ch(){const e=k.getState().language,t=document.createElement("div");t.className="modal",t.innerHTML=`
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

                <div class="info-message" style="padding: 0.75rem 1rem;">
                    ${e==="uz"?"Savollar test yaratilgandan keyin alohida sahifada qo'shiladi.":"Вопросы добавляются после создания теста на отдельной странице."}
                </div>
                
                <div style="display: flex; gap: 1rem; justify-content: flex-end; margin-top: 1rem;">
                    <button type="button" class="button button-secondary" id="btnCancelCreate">${e==="uz"?"Bekor qilish":"Отмена"}</button>
                    <button type="submit" class="button button-primary">${e==="uz"?"Saqlash":"Сохранить"}</button>
                </div>
            </form>
        </div>
    `,document.body.appendChild(t),setTimeout(()=>t.classList.add("show"),10),document.getElementById("closeModal").addEventListener("click",()=>{t.classList.remove("show"),setTimeout(()=>t.remove(),300)}),document.getElementById("btnCancelCreate").addEventListener("click",()=>{t.classList.remove("show"),setTimeout(()=>t.remove(),300)}),document.getElementById("createTeacherTestForm").addEventListener("submit",async i=>{i.preventDefault(),await uh(new FormData(i.target),t)})}async function uh(e,t){var s,n;const i=k.getState().language;console.log("Creating teacher test...");try{const a={title:e.get("title"),description:e.get("description"),duration:parseInt(e.get("duration")),passingScore:parseInt(e.get("passingScore")),questions:[]};console.log("Test data basic:",a);const r=await C("/api/teacher-tests","POST",a);if(console.log("Create test response:",r),r.success){t.classList.remove("show"),setTimeout(()=>t.remove(),300);const o=((s=r.data)==null?void 0:s._id)||((n=r.data)==null?void 0:n.id);await I(i==="uz"?"Test muvaffaqiyatli yaratildi":"Тест успешно создан","success"),o?$.navigate(`/admin/teacher-tests/${o}`):await js()}else throw new Error(r.error)}catch(a){console.error("Error creating teacher test:",a),await I(i==="uz"?"Xatolik yuz berdi":"Произошла ошибка","error")}}function hh(e){if(!e||e==="undefined"||e==="null"){I(k.getState().language==="uz"?"Test ID topilmadi":"ID теста не найден","warning");return}$.navigate(`/admin/teacher-tests/${e}`)}async function gh({testId:e}){var l,d,c,u;const t=k.getState().language,i=e||((l=$.currentParams)==null?void 0:l.testId)||window.location.pathname.split("/").pop();if(!i){await I(t==="uz"?"Test topilmadi":"Тест не найден","warning"),$.navigate("/admin/teacher-tests");return}const s=await C(`/api/teacher-tests/${i}`);if(!s.success||!s.data){await I(t==="uz"?"Test topilmadi":"Тест не найден","warning"),$.navigate("/admin/teacher-tests");return}const n=s.data,a=Array.isArray(n.questions)?n.questions:[],r=`
        <div class="page-header" style="margin-bottom: 2rem;">
            <div style="display: flex; justify-content: space-between; align-items: center; gap: 1rem;">
                <div>
                    <h1 style="margin-bottom: 0.5rem;">${t==="uz"?"Testni tahrirlash":"Редактирование теста"}</h1>
                    <p style="color: var(--text-muted); margin: 0;">${n.title||""}</p>
                </div>
                <button class="button button-secondary" id="btnBackToTeacherTests" style="display: flex; align-items: center; gap: 0.5rem;">
                    <span>←</span>
                    <span>${t==="uz"?"Testlar ro'yxati":"Список тестов"}</span>
                </button>
            </div>
        </div>

        <div class="card" style="margin-bottom: 2rem;">
            <h3 style="margin-top: 0;">${t==="uz"?"Test ma'lumotlari":"Данные теста"}</h3>
            <div style="display: grid; gap: 1rem;">
                <div>
                    <label class="form-label">Название теста</label>
                    <input type="text" class="form-input" id="teacherTestTitle" value="${n.title||""}">
                </div>
                <div>
                    <label class="form-label">Описание</label>
                    <textarea class="form-input" id="teacherTestDescription" rows="3">${n.description||""}</textarea>
                </div>
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
                    <div>
                        <label class="form-label">${t==="uz"?"Davomiyligi (daqiqa)":"Длительность (минуты)"}</label>
                        <input type="number" class="form-input" id="teacherTestDuration" value="${n.duration||30}" min="5" max="180">
                    </div>
                    <div>
                        <label class="form-label">${t==="uz"?"O'tish bali (%)":"Проходной балл (%)"}</label>
                        <input type="number" class="form-input" id="teacherTestPassingScore" value="${n.passingScore||n.passing_score||70}" min="0" max="100">
                    </div>
                </div>
            </div>
        </div>

        <div class="card">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.5rem;">
                <h3 style="margin: 0;">${t==="uz"?"Savollar":"Вопросы"}</h3>
                <button class="button button-secondary" id="btnAddTeacherQuestion" style="display: flex; align-items: center; gap: 0.5rem;">
                    <span>➕</span>
                    <span>${t==="uz"?"Savol qo'shish":"Добавить вопрос"}</span>
                </button>
            </div>
            <div id="teacherTestQuestions" style="display: grid; gap: 1.5rem;"></div>
        </div>

        <div style="display: flex; justify-content: flex-end; margin-top: 2rem;">
            <button class="button button-primary" id="btnSaveTeacherTest" style="padding: 0.9rem 1.5rem;">
                <span>💾</span>
                <span>${t==="uz"?"Saqlash":"Сохранить"}</span>
            </button>
        </div>
    `;O(r,"admin"),(d=document.getElementById("btnBackToTeacherTests"))==null||d.addEventListener("click",()=>{$.navigate("/admin/teacher-tests")});const o=document.getElementById("teacherTestQuestions");a.forEach(h=>{xi(o,h)}),a.length===0&&(o.innerHTML=`
            <div class="card" style="text-align: center; padding: 2rem; color: var(--text-muted);">
                <div style="font-size: 3rem; margin-bottom: 0.75rem; opacity: 0.4;">❓</div>
                <p>${t==="uz"?"Hozircha savollar yo'q":"Вопросов пока нет"}</p>
            </div>
        `),(c=document.getElementById("btnAddTeacherQuestion"))==null||c.addEventListener("click",()=>{var h,m;(m=(h=o.querySelector(".card"))==null?void 0:h.textContent)!=null&&m.includes(t==="uz"?"Hozircha savollar":"Вопросов пока нет")&&(o.innerHTML=""),xi(o)}),(u=document.getElementById("btnSaveTeacherTest"))==null||u.addEventListener("click",async()=>{const h=document.getElementById("teacherTestTitle").value.trim(),m=document.getElementById("teacherTestDescription").value.trim(),p=parseInt(document.getElementById("teacherTestDuration").value),g=parseInt(document.getElementById("teacherTestPassingScore").value);if(!h){await I(t==="uz"?"Test nomini kiriting":"Введите название теста","warning");return}const f=vr();if(!f.success){await I(f.error,"warning");return}const y=await C(`/api/teacher-tests/${i}`,"PUT",{title:h,description:m,duration:p,passingScore:g,questions:f.questions});y.success?(await I(t==="uz"?"Test muvaffaqiyatli saqlandi":"Тест успешно сохранен","success"),$.navigate("/admin/teacher-tests")):await I(y.error||(t==="uz"?"Xatolik yuz berdi":"Произошла ошибка"),"error")})}function ee(e){const t=String(e||"").toLowerCase();return t.includes("multiple")?"multiple":t.includes("text")?"text":"single"}function xi(e,t={}){const i=k.getState().language,s=e.querySelectorAll(".teacher-test-question").length,n=ee(t.type),a=Array.isArray(t.options)?t.options:[],r=Array.isArray(t.correctAnswers)?t.correctAnswers.map(Number):[],o=Number.isInteger(t.correctAnswer)?t.correctAnswer:t.correctAnswer!==void 0&&t.correctAnswer!==null?Number(t.correctAnswer):null,l=document.createElement("div");l.className="card teacher-test-question",l.setAttribute("data-question-index",s),l.style.borderLeft="4px solid var(--primary)",l.innerHTML=`
        <div style="display: flex; justify-content: space-between; align-items: center; gap: 1rem; margin-bottom: 1rem;">
            <h4 style="margin: 0;">${i==="uz"?"Savol":"Вопрос"} ${s+1}</h4>
            <button type="button" class="button button-danger btn-delete-question" style="padding: 0.4rem 0.8rem;">${i==="uz"?"O'chirish":"Удалить"}</button>
        </div>
        <div class="form-group" style="margin-bottom: 1rem;">
            <label class="form-label">${i==="uz"?"Savol matni":"Текст вопроса"}</label>
            <input type="text" class="form-input question-text" value="${t.text||""}" placeholder="${i==="uz"?"Savol matnini kiriting":"Введите текст вопроса"}">
        </div>
        <div class="form-group" style="margin-bottom: 1rem;">
            <label class="form-label">${i==="uz"?"Savol turi":"Тип вопроса"}</label>
            <select class="form-input question-type">
                <option value="single">${i==="uz"?"Bitta to'g'ri javob":"Один правильный ответ"}</option>
                <option value="multiple">${i==="uz"?"Bir nechta to'g'ri javob":"Несколько правильных ответов"}</option>
                <option value="text">${i==="uz"?"Matnli javob":"Текстовый ответ"}</option>
            </select>
        </div>
        <div class="question-options" style="display: grid; gap: 0.75rem; margin-bottom: 1rem;">
            <div class="options-list" style="display: grid; gap: 0.75rem;"></div>
            <button type="button" class="button button-secondary btn-add-option" style="justify-self: start; padding: 0.4rem 0.8rem;">
                <span>➕</span>
                <span>${i==="uz"?"Variant":"Вариант"}</span>
            </button>
        </div>
        <div class="question-text-answer" style="display: none;">
            <label class="form-label">${i==="uz"?"To'g'ri javob (matn)":"Правильный ответ (текст)"}</label>
            <input type="text" class="form-input question-text-correct" value="${t.correctText||""}" placeholder="${i==="uz"?"To'g'ri javobni kiriting":"Введите правильный ответ"}">
        </div>
    `,e.appendChild(l);const d=l.querySelector(".question-type"),c=l.querySelector(".question-options"),u=l.querySelector(".options-list"),h=l.querySelector(".question-text-answer"),m=l.querySelector(".question-text-correct"),p=()=>{const b=[];return u.querySelectorAll(".option-item").forEach((x,v)=>{const w=x.querySelector(".option-text").value.trim(),z=x.querySelector(".option-correct");b.push({text:w,isCorrect:(z==null?void 0:z.checked)||!1,index:v})}),b},g=(b,x)=>{u.innerHTML="";const v=b==="single";let w=!1;x.forEach((z,E)=>{const _=document.createElement("div");_.className="option-item",_.style.cssText="display: grid; grid-template-columns: 1fr auto auto; gap: 0.75rem; align-items: center;";const S=v?!w&&z.isCorrect:z.isCorrect;S&&v&&(w=!0),_.innerHTML=`
                <input type="text" class="form-input option-text" value="${z.text||""}" placeholder="${i==="uz"?"Variant matni":"Текст варианта"}">
                <label style="display: flex; align-items: center; gap: 0.5rem;">
                    <input type="${v?"radio":"checkbox"}" class="option-correct" name="teacher-question-${s}-correct" ${S?"checked":""}>
                    <span style="font-size: 0.85rem; color: var(--text-muted);">${i==="uz"?"To'g'ri":"Верно"}</span>
                </label>
                <button type="button" class="button button-danger btn-delete-option" style="padding: 0.3rem 0.6rem;">🗑️</button>
            `,_.querySelector(".btn-delete-option").addEventListener("click",()=>{_.remove()}),u.appendChild(_)})},f=()=>{const b=p();if(b.length>=2)return b;const x=b.length?b:[];for(;x.length<2;)x.push({text:"",isCorrect:!1});return x},y=b=>{if(b==="text")c.style.display="none",h.style.display="grid";else{c.style.display="grid",h.style.display="none";const x=p(),v=x.length?x:f();g(b,v)}};if(l.querySelector(".btn-delete-question").addEventListener("click",()=>{l.remove()}),l.querySelector(".btn-add-option").addEventListener("click",()=>{const b=p();b.push({text:"",isCorrect:!1}),g(d.value,b)}),d.value=n,n==="text")!m.value&&t.correctAnswerText&&(m.value=t.correctAnswerText),c.style.display="none",h.style.display="grid";else{const b=a.length?a.map((x,v)=>({text:x,isCorrect:n==="multiple"?r.includes(v):o===v})):f();g(n,b)}d.addEventListener("change",()=>{y(d.value)})}function vr(){const e=k.getState().language,t=[],i=document.querySelectorAll(".teacher-test-question");for(const s of i){const n=s.querySelector(".question-text").value.trim(),a=s.querySelector(".question-type").value;if(!n)return{success:!1,error:e==="uz"?"Savol matnini kiriting":"Введите текст вопроса"};if(a==="text"){const c=s.querySelector(".question-text-correct").value.trim();if(!c)return{success:!1,error:e==="uz"?"To'g'ri javob matnini kiriting":"Введите правильный ответ"};t.push({type:"text",text:n,correctText:c});continue}const r=[...s.querySelectorAll(".option-item")],o=[],l=[];let d=null;if(r.forEach((c,u)=>{var p;const h=c.querySelector(".option-text").value.trim();if(!h)return;o.push(h),(((p=c.querySelector(".option-correct"))==null?void 0:p.checked)||!1)&&(l.push(o.length-1),d===null&&(d=o.length-1))}),o.length<2)return{success:!1,error:e==="uz"?"Kamida ikkita variant kiriting":"Добавьте минимум два варианта"};if(a==="single"){if(d===null)return{success:!1,error:e==="uz"?"To'g'ri javobni belgilang":"Выберите правильный ответ"};t.push({type:"single",text:n,options:o,correctAnswer:d})}else{if(l.length===0)return{success:!1,error:e==="uz"?"To'g'ri javoblarni belgilang":"Выберите правильные ответы"};t.push({type:"multiple",text:n,options:o,correctAnswers:l})}}return t.length===0?{success:!1,error:e==="uz"?"Kamida bitta savol qo'shing":"Добавьте хотя бы один вопрос"}:{success:!0,questions:t}}async function mh(e){var i,s;const t=k.getState().language;try{if(!e||e==="undefined"||e==="null"){await I(t==="uz"?"Test ID topilmadi":"ID теста не найден","warning");return}const n=await C(`/api/teacher-tests/${e}`);if(!n.success||!n.data){await I(t==="uz"?"Test topilmadi":"Тест не найден","warning");return}const a=n.data,o=(await C(`/api/teacher-test-results/${e}`)).data||[],l=document.createElement("div");l.className="modal",l.innerHTML=`
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
                                    ${o.sort((d,c)=>c.score-d.score).map((d,c)=>{var u,h,m;return`
                                        <tr style="border-bottom: 1px solid var(--border-color);">
                                            <td style="padding: 1rem;">${c+1}</td>
                                            <td style="padding: 1rem;">
                                                <div style="font-weight: 600;">${((u=d.teacher)==null?void 0:u.firstName)||""} ${((h=d.teacher)==null?void 0:h.lastName)||""}</div>
                                                <div style="font-size: 0.85rem; color: var(--text-muted);">${((m=d.teacher)==null?void 0:m.username)||""}</div>
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
        `,document.body.appendChild(l),setTimeout(()=>l.classList.add("show"),10),(i=document.getElementById("closeResultsModal"))==null||i.addEventListener("click",()=>{l.classList.remove("show"),setTimeout(()=>l.remove(),300)}),(s=document.getElementById("btnCloseResults"))==null||s.addEventListener("click",()=>{l.classList.remove("show"),setTimeout(()=>l.remove(),300)})}catch(n){console.error("Error viewing results:",n),await I(t==="uz"?"Xatolik yuz berdi":"Произошла ошибка","error")}}async function ph(e){var i,s,n;const t=k.getState().language;try{if(!e||e==="undefined"||e==="null"){await I(t==="uz"?"Test ID topilmadi":"ID теста не найден","warning");return}const a=await C("/api/users");if(!a.success)throw new Error("Failed to load teachers");const r=a.data.filter(u=>u.role==="teacher");if(r.length===0){await I(t==="uz"?"O'qituvchilar topilmadi":"Учителя не найдены","warning");return}const l=(await C(`/api/teacher-tests/${e}`)).data,d=l.assignedTo||l.assigned_to||[],c=document.createElement("div");c.className="modal",c.innerHTML=`
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
                            ${r.map(u=>{const h=u._id||u.id||u.userId;return`
                                <label style="display: flex; align-items: center; gap: 0.75rem; padding: 0.75rem; border-radius: 6px; cursor: pointer; transition: background 0.2s;" class="teacher-checkbox-label">
                                    <input type="checkbox" name="teachers" value="${h||""}" ${h&&d.includes(h)?"checked":""} style="width: 18px; height: 18px; accent-color: var(--primary);">
                                    <div style="flex: 1;">
                                        <div style="font-weight: 600;">${u.firstName} ${u.lastName}</div>
                                        <div style="font-size: 0.85rem; color: var(--text-muted);">${u.username}</div>
                                    </div>
                                </label>
                            `}).join("")}
                        </div>
                    </div>
                    
                    <div style="display: flex; gap: 1rem; justify-content: flex-end; margin-top: 1rem;">
                        <button type="button" class="button button-secondary" id="btnCancelAssign">${t==="uz"?"Bekor qilish":"Отмена"}</button>
                        <button type="submit" class="button button-primary">${t==="uz"?"Tayinlash":"Назначить"}</button>
                    </div>
                </form>
            </div>
        `,document.body.appendChild(c),setTimeout(()=>c.classList.add("show"),10),c.querySelectorAll(".teacher-checkbox-label").forEach(u=>{u.addEventListener("mouseenter",()=>{u.style.background="var(--bg-secondary)"}),u.addEventListener("mouseleave",()=>{u.style.background="transparent"})}),(i=document.getElementById("closeAssignModal"))==null||i.addEventListener("click",()=>{c.classList.remove("show"),setTimeout(()=>c.remove(),300)}),(s=document.getElementById("btnCancelAssign"))==null||s.addEventListener("click",()=>{c.classList.remove("show"),setTimeout(()=>c.remove(),300)}),(n=document.getElementById("assignTestForm"))==null||n.addEventListener("submit",async u=>{u.preventDefault();const m=new FormData(u.target).getAll("teachers").filter(p=>p&&p!=="undefined"&&p!=="null");if(m.length===0){await I(t==="uz"?"Kamida bitta o'qituvchi tanlang":"Выберите хотя бы одного учителя","warning");return}try{const p=await C(`/api/teacher-tests/${e}/assign`,"POST",{teacherIds:m});if(p.success)c.classList.remove("show"),setTimeout(()=>c.remove(),300),await I(t==="uz"?"Test muvaffaqiyatli tayinlandi":"Тест успешно назначен","success");else throw new Error(p.error)}catch(p){console.error("Error assigning test:",p),await I(t==="uz"?"Xatolik yuz berdi":"Произошла ошибка","error")}})}catch(a){console.error("Error loading teachers:",a),await I(t==="uz"?"Xatolik yuz berdi":"Произошла ошибка","error")}}async function fh(e){const t=k.getState().language;if(!e||e==="undefined"||e==="null"){await I(t==="uz"?"Test ID topilmadi":"ID теста не найден","warning");return}if(await Vt(t==="uz"?"Testni o'chirmoqchimisiz?":"Удалить тест?",t==="uz"?"O'chirish":"Удаление"))try{const s=await C(`/api/teacher-tests/${e}`,"DELETE");if(s.success)await js(),await I(t==="uz"?"Test o'chirildi":"Тест удален","success");else throw new Error(s.error)}catch(s){console.error("Error deleting test:",s),await I(t==="uz"?"Xatolik yuz berdi":"Произошла ошибка","error")}}async function bh(){var s;const e=k.getState().user,t=k.getState().language;if(!e){$.navigate("/login");return}O(`
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
    `,"teacher"),(s=document.getElementById("btnBackToTeacher"))==null||s.addEventListener("click",()=>{$.navigate("/teacher/subjects")}),await yh()}async function yh(){const e=k.getState().user,t=k.getState().language,i=document.getElementById("teacherMyTestsList");console.log("👤 Current user:",e);const s=(e==null?void 0:e._id)||(e==null?void 0:e.id)||(e==null?void 0:e.userId);if(console.log("🆔 User ID:",s),!s){console.error("❌ User ID not found in user object:",e),await I(t==="uz"?"Foydalanuvchi ma'lumotlari topilmadi":"Информация о пользователе не найдена","error"),$.navigate("/login");return}try{const n=await C(`/api/teacher-tests/assigned/${s}`),a=await C(`/api/teacher-test-results/teacher/${s}`),o=(a.success?a.data:[]).reduce((d,c)=>{const u=c.testId||c.test_id;if(!u)return d;const h=d[u];return(!h||new Date(c.completedAt)>new Date(h.completedAt))&&(d[u]=c),d},{});if(!n.success||!n.data||n.data.length===0){i.innerHTML=`
                <div style="text-align: center; padding: 3rem; color: var(--text-muted);">
                    <div style="font-size: 4rem; margin-bottom: 1rem; opacity: 0.3;">📝</div>
                    <p>${t==="uz"?"Sizga hali testlar tayinlanmagan":"Вам еще не назначены тесты"}</p>
                </div>
            `;return}const l=n.data;i.innerHTML=l.map(d=>{var p;const c=d._id||d.id||d.testId||d.test_id,u=o[c],h=u==null?void 0:u.passed,m=(u==null?void 0:u.score)||0;return`
                <div class="card" style="margin-bottom: 1rem; border-left: 4px solid ${h?"#10b981":u?"#ef4444":"var(--primary)"};">
                    <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: 1rem;">
                        <div style="flex: 1;">
                            <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.5rem;">
                                <h3 style="margin: 0;">${d.title}</h3>
                                ${u?`
                                    <span style="padding: 0.25rem 0.75rem; border-radius: 12px; font-size: 0.85rem; font-weight: 600; background: ${h?"#10b981":"#ef4444"}; color: white;">
                                        ${h?t==="uz"?"O'tdi":"Сдан":t==="uz"?"O'tmadi":"Не сдан"}
                                    </span>
                                `:""}
                            </div>
                            <p style="color: var(--text-muted); margin: 0 0 0.5rem 0;">${d.description}</p>
                            <div style="display: flex; gap: 1rem; font-size: 0.9rem; color: var(--text-muted);">
                                <span>📝 ${d.questionsCount||((p=d.questions)==null?void 0:p.length)||0} ${t==="uz"?"ta savol":"вопросов"}</span>
                                <span>⏱️ ${d.duration||30} ${t==="uz"?"daqiqa":"минут"}</span>
                                <span>📊 ${t==="uz"?"O'tish bali":"Проходной балл"}: ${d.passingScore||d.passing_score||70}%</span>
                                ${u?`<span>✅ ${t==="uz"?"Ball":"Результат"}: ${m}%</span>`:""}
                            </div>
                        </div>
                        <div style="display: flex; gap: 0.5rem;">
                            ${u?`
                                <button class="button button-secondary" onclick="viewMyTestResult('${c}')" style="padding: 0.5rem 1rem;">
                                    <span>📊</span>
                                    <span>${t==="uz"?"Natija":"Результат"}</span>
                                </button>
                                <button class="button button-primary" onclick="retakeTeacherTest('${c}')" style="padding: 0.5rem 1rem;">
                                    <span>🔄</span>
                                    <span>${t==="uz"?"Qayta topshirish":"Пересдать"}</span>
                                </button>
                            `:`
                                <button class="button button-primary" onclick="startTeacherTest('${c}')" style="padding: 0.5rem 1rem;">
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
        `}}async function vh(e){$.navigate(`/teacher/test/${e}`)}async function xr(e){const t=k.getState().language;await Vt(t==="uz"?"Testni qayta topshirishni xohlaysizmi?":"Хотите пересдать тест?",t==="uz"?"Test qayta boshlanadi":"Тест будет начат заново")&&$.navigate(`/teacher/test/${e}`)}async function xh(e){var n,a,r,o;const t=k.getState().language,i=k.getState().user,s=(i==null?void 0:i._id)||(i==null?void 0:i.id)||(i==null?void 0:i.userId);try{if(!s){await I(t==="uz"?"Foydalanuvchi topilmadi":"Пользователь не найден","error");return}const c=((await C(`/api/teacher-test-results/teacher/${s}`)).data||[]).filter(p=>(p.testId||p.test_id)===e).sort((p,g)=>new Date(g.completedAt||g.completed_at)-new Date(p.completedAt||p.completed_at))[0];if(!c){await I(t==="uz"?"Natija topilmadi":"Результат не найден","warning");return}const h=(await C(`/api/teacher-tests/${e}`)).data;if(!h){await I(t==="uz"?"Test topilmadi":"Тест не найден","warning");return}const m=document.createElement("div");m.className="modal",m.innerHTML=`
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
                        ${new Date(c.completedAt||c.completed_at).toLocaleString("ru-RU")}
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
                            <strong>${h.passingScore||h.passing_score||70}%</strong>
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
        `,document.body.appendChild(m),setTimeout(()=>m.classList.add("show"),10),(a=document.getElementById("closeResultModal"))==null||a.addEventListener("click",()=>{m.classList.remove("show"),setTimeout(()=>m.remove(),300)}),(r=document.getElementById("btnCloseResult"))==null||r.addEventListener("click",()=>{m.classList.remove("show"),setTimeout(()=>m.remove(),300)}),(o=document.getElementById("btnRetakeTest"))==null||o.addEventListener("click",()=>{m.classList.remove("show"),setTimeout(()=>m.remove(),300),xr(e)})}catch(l){console.error("Error viewing result:",l),await I(t==="uz"?"Xatolik yuz berdi":"Произошла ошибка","error")}}async function wh(){const e=k.getState().user,t=k.getState().language,i=$.currentParams.id;if(!e||!i){$.navigate("/teacher/tests");return}try{const s=await C(`/api/teacher-tests/${i}`);if(!s.success||!s.data){I(t==="uz"?"Test topilmadi":"Тест не найден","warning"),$.navigate("/teacher/tests");return}const n=s.data,a=n.questions||[],r=n.passingScore??n.passing_score??70;if(n.passingScore=r,!Array.isArray(a)||a.length===0){await I(t==="uz"?"Testda savollar yo'q":"В тесте нет вопросов","warning"),$.navigate("/teacher/tests");return}const o=`
            <div class="page-header" style="background: linear-gradient(135deg, var(--primary), var(--accent)); color: white; padding: 2rem; margin: -2rem -2rem 2rem -2rem; border-radius: 0 0 20px 20px;">
                <h1 style="margin: 0 0 0.5rem 0; color: white;">📋 ${n.title}</h1>
                <p style="margin: 0 0 1rem 0; opacity: 0.9;">${n.description}</p>
                <div style="display: flex; gap: 2rem; font-size: 0.95rem; opacity: 0.95;">
                    <span>⏱️ ${n.duration} ${t==="uz"?"daqiqa":"минут"}</span>
                    <span>📝 ${a.length} ${t==="uz"?"ta savol":"вопросов"}</span>
                    <span>📊 ${t==="uz"?"O'tish":"Проходной балл"}: ${r}%</span>
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
                        ${a.map((l,d)=>`
                            <button class="question-nav-btn ${d===0?"active":""}" data-question="${d}" style="width: 40px; height: 40px; border-radius: 8px; border: 2px solid var(--border-color); background: var(--bg-secondary); cursor: pointer; font-weight: 600; transition: all 0.2s;">
                                ${d+1}
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
        `;O(o,"teacher"),zh(n)}catch(s){console.error("Error loading test:",s),I(t==="uz"?"Xatolik yuz berdi":"Произошла ошибка","error"),$.navigate("/teacher/tests")}}function zh(e){var h,m,p;const t=k.getState().language,i=e.questions||[];let s=0;const n=i.map(g=>ee(g==null?void 0:g.type)==="multiple"?[]:null);let a=e.duration*60;const r=document.getElementById("timer"),o=setInterval(()=>{a--;const g=Math.floor(a/60),f=a%60;r.textContent=`${g}:${f.toString().padStart(2,"0")}`,a<=0&&(clearInterval(o),ca(e._id||e.id,n,e))},1e3),l=(g,f)=>f==="multiple"?Array.isArray(g)&&g.length>0:f==="text"?typeof g=="string"&&g.trim().length>0:g!=null;function d(g){const f=i[g],y=document.getElementById("questionContainer"),b=ee(f.type),x=Array.isArray(f.options)?f.options:[];let v="";if(b==="text"){const w=typeof n[g]=="string"?n[g]:"";v=`
                <div style="display: grid; gap: 0.75rem;">
                    <textarea id="textAnswer" rows="4" style="width: 100%; background: var(--bg-secondary); border: 2px solid var(--border-color); border-radius: 12px; padding: 14px; color: var(--text-primary); font-size: 1rem; resize: vertical; font-family: inherit;" placeholder="${t==="uz"?"Javobni yozing":"Введите ответ"}">${w}</textarea>
                </div>
            `}else{const w=b==="multiple",z=n[g];v=`
                <div style="display: grid; gap: 1rem;">
                    ${x.map((E,_)=>{const S=w?Array.isArray(z)&&z.includes(_):z===_;return`
                            <label class="test-option ${S?"selected":""}" style="display: flex; align-items: center; gap: 1rem; padding: 1.25rem; background: var(--bg-secondary); border: 2px solid ${S?"var(--primary)":"var(--border-color)"}; border-radius: 12px; cursor: pointer; transition: all 0.2s;">
                                <input type="${w?"checkbox":"radio"}" name="question_${g}" value="${_}" ${S?"checked":""} style="width: 20px; height: 20px; accent-color: var(--primary);">
                                <span style="flex: 1; font-size: 1.05rem;">${String.fromCharCode(65+_)}. ${E}</span>
                            </label>
                        `}).join("")}
                </div>
            `}y.innerHTML=`
            <div style="margin-bottom: 2rem;">
                <h3 style="font-size: 1.25rem; line-height: 1.6; margin-bottom: 1.5rem;">${f.text}</h3>
                ${v}
            </div>
        `,b==="text"?document.getElementById("textAnswer").addEventListener("input",z=>{n[g]=z.target.value,u()}):b==="multiple"?y.querySelectorAll('input[type="checkbox"]').forEach(w=>{w.addEventListener("change",z=>{const E=parseInt(z.target.value),_=Array.isArray(n[g])?n[g]:[];if(z.target.checked)_.includes(E)||_.push(E);else{const S=_.indexOf(E);S!==-1&&_.splice(S,1)}n[g]=_,u(),d(g)})}):y.querySelectorAll('input[type="radio"]').forEach(w=>{w.addEventListener("change",z=>{n[g]=parseInt(z.target.value),u(),d(g)})}),document.getElementById("currentQuestion").textContent=g+1,c(),u()}function c(){document.getElementById("btnPrevQuestion").disabled=s===0;const g=document.getElementById("btnNextQuestion");s===i.length-1?g.style.display="none":g.style.display="flex"}function u(){document.querySelectorAll(".question-nav-btn").forEach((g,f)=>{var b;const y=ee((b=i[f])==null?void 0:b.type);g.classList.remove("active"),f===s?(g.classList.add("active"),g.style.background="var(--primary)",g.style.color="white",g.style.borderColor="var(--primary)"):l(n[f],y)?(g.style.background="#10b981",g.style.color="white",g.style.borderColor="#10b981"):(g.style.background="var(--bg-secondary)",g.style.color="var(--text-primary)",g.style.borderColor="var(--border-color)")})}(h=document.getElementById("btnPrevQuestion"))==null||h.addEventListener("click",()=>{s>0&&(s--,d(s))}),(m=document.getElementById("btnNextQuestion"))==null||m.addEventListener("click",()=>{s<i.length-1&&(s++,d(s))}),document.querySelectorAll(".question-nav-btn").forEach(g=>{g.addEventListener("click",()=>{s=parseInt(g.dataset.question),d(s)})}),(p=document.getElementById("btnFinishTest"))==null||p.addEventListener("click",()=>{const g=n.filter((f,y)=>{var b;return!l(f,ee((b=i[y])==null?void 0:b.type))}).length;g>0&&!confirm(`${t==="uz"?`${g} ta savolga javob berilmagan. Testni yakunlashni xohlaysizmi?`:`Не отвечено ${g} вопросов. Завершить тест?`}`)||(clearInterval(o),ca(e._id||e.id,n,e))}),d(0)}async function ca(e,t,i){var r;const s=k.getState().language,n=k.getState().user;if(!e||e==="undefined"||e==="null"){await I(s==="uz"?"Test ID topilmadi":"ID теста не найден","warning");return}console.log("📤 Submitting teacher test:",{testId:e,user:n});const a=(n==null?void 0:n._id)||(n==null?void 0:n.id)||(n==null?void 0:n.userId);if(console.log("🆔 Teacher ID:",a),!a){console.error("❌ User ID not found"),await I(s==="uz"?"Foydalanuvchi ma'lumotlari topilmadi":"Информация о пользователе не найдена","error");return}try{let o=0;i.questions.forEach((u,h)=>{const m=ee(u.type);if(m==="multiple"){const p=Array.isArray(u.correctAnswers)?u.correctAnswers.map(Number):Array.isArray(u.correctAnswer)?u.correctAnswer.map(Number):Number.isInteger(u.correctAnswer)?[u.correctAnswer]:[],g=Array.isArray(t[h])?t[h].map(Number):[],f=new Set(p),y=new Set(g);f.size>0&&f.size===y.size&&[...f].every(x=>y.has(x))&&o++}else if(m==="text"){const p=String(u.correctText||u.correctAnswerText||u.correctAnswer||"").trim().toLowerCase(),g=String(t[h]||"").trim().toLowerCase();p&&p===g&&o++}else{const p=Number.isInteger(u.correctAnswer)?u.correctAnswer:Array.isArray(u.correctAnswers)?u.correctAnswers[0]:null;p!==null&&t[h]===p&&o++}});const l=Math.round(o/i.questions.length*100),d=l>=i.passingScore;console.log("📊 Test results:",{score:l,passed:d,correctAnswers:o,total:i.questions.length});const c=await C("/api/teacher-test-results","POST",{testId:e,teacherId:a,answers:t,score:l,passed:d});if(console.log("📤 Submit response:",c),c.success){const u=document.createElement("div");u.className="modal show",u.innerHTML=`
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
            `,document.body.appendChild(u),(r=document.getElementById("btnBackToTests"))==null||r.addEventListener("click",()=>{u.remove(),$.navigate("/teacher/tests")})}else throw new Error(c.error)}catch(o){console.error("Error submitting test:",o),I(s==="uz"?"Xatolik yuz berdi":"Произошла ошибка","error")}}async function kh(){const e=k.getState().language,t=[{uz:"Men matematika va hisob-kitoblarni yaxshi ko'raman",ru:"Мне нравится математика и вычисления",category:"math"},{uz:"Men mantiqiy muammolarni hal qilishni yaxshi ko'raman",ru:"Мне нравится решать логические задачи",category:"math"},{uz:"Men sonlar va formulalar bilan ishlashni yaxshi ko'raman",ru:"Мне нравится работать с числами и формулами",category:"math"},{uz:"Men murakkab masalalarni bosqichma-bosqich yechishni yoqtiraman",ru:"Мне нравится решать сложные задачи шаг за шагом",category:"math"},{uz:"Men mantiqiy fikrlashni talab qiladigan o'yinlarni yoqtiraman",ru:"Мне нравятся игры, требующие логического мышления",category:"math"},{uz:"Men tabiatni o'rganishni yaxshi ko'raman",ru:"Мне нравится изучать природу",category:"science"},{uz:"Men fizika va kimyo tajribalarini yaxshi ko'raman",ru:"Мне нравятся физические и химические эксперименты",category:"science"},{uz:"Men hayotni va tirik mavjudotlarni o'rganishni yaxshi ko'raman",ru:"Мне нравится изучать жизнь и живые существа",category:"science"},{uz:"Men tabiat hodisalarining sabablarini bilishni istayman",ru:"Мне интересно узнавать причины природных явлений",category:"science"},{uz:"Men ilmiy faktlar va kashfiyotlar haqida o'qishni yoqtiraman",ru:"Мне нравится читать о научных фактах и открытиях",category:"science"},{uz:"Men kompyuterlar va texnologiyalar bilan ishlashni yaxshi ko'raman",ru:"Мне нравится работать с компьютерами и технологиями",category:"tech"},{uz:"Men dasturlash va kodlashni o'rganishni xohlayman",ru:"Я хочу изучать программирование и кодирование",category:"tech"},{uz:"Men texnik qurilmalarni yaratish va ta'mirlashni yaxshi ko'raman",ru:"Мне нравится создавать и чинить технические устройства",category:"tech"},{uz:"Men yangi ilovalar va texnik yechimlarni sinab ko'raman",ru:"Мне интересно пробовать новые приложения и технические решения",category:"tech"},{uz:"Men robotlar yoki mexanizmlar qanday ishlashini bilishni xohlayman",ru:"Мне интересно, как работают роботы и механизмы",category:"tech"},{uz:"Men rasmchilik va ijodiy ishlarni yaxshi ko'raman",ru:"Мне нравится рисование и творческая работа",category:"art"},{uz:"Men musiqa va san'atni yaxshi ko'raman",ru:"Мне нравится музыка и искусство",category:"art"},{uz:"Men o'zimning g'oyalarimni ijodiy usulda ifodalashni yaxshi ko'raman",ru:"Мне нравится творчески выражать свои идеи",category:"art"},{uz:"Men dizayn va bezaklar bilan ishlashni yoqtiraman",ru:"Мне нравится работать с дизайном и оформлением",category:"art"},{uz:"Men yangi g'oyalar yaratishdan zavqlanaman",ru:"Мне нравится придумывать новые идеи",category:"art"},{uz:"Men odamlar bilan muloqot qilishni yaxshi ko'raman",ru:"Мне нравится общаться с людьми",category:"social"},{uz:"Men boshqalarga yordam berishni va ularni qo'llab-quvvatlashni yaxshi ko'raman",ru:"Мне нравится помогать другим и поддерживать их",category:"social"},{uz:"Men jamoa bilan ishlashni va hamkorlikni yaxshi ko'raman",ru:"Мне нравится работать в команде и сотрудничать",category:"social"},{uz:"Men jamoada yetakchi bo'lishni yoqtiraman",ru:"Мне нравится быть лидером в команде",category:"social"},{uz:"Men odamlarning fikrlarini tinglash va murosaga kelishni yoqtiraman",ru:"Мне нравится слушать людей и находить компромисс",category:"social"},{uz:"Men kitob o'qishni va yozishni yaxshi ko'raman",ru:"Мне нравится читать и писать",category:"language"},{uz:"Men tillarni o'rganishni qiziqarli deb bilaman",ru:"Я нахожу изучение языков интересным",category:"language"},{uz:"Men hikoyalar yaratishni va she'rlar yozishni yaxshi ko'raman",ru:"Мне нравится сочинять истории и писать стихи",category:"language"},{uz:"Men so'z boyligimni oshirishni istayman",ru:"Мне интересно расширять словарный запас",category:"language"},{uz:"Men matnlarni tahlil qilish va tushunishni yoqtiraman",ru:"Мне нравится анализировать и понимать тексты",category:"language"}],i=`
        <div class="page-header">
            <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 1rem;">
                <div>
                    <h1>${L("interestTest")}</h1>
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
    `;O(i,"student");const s=document.getElementById("btnBackFromInterestTest");s&&s.addEventListener("click",()=>$.navigate("/student/dashboard"));try{const n=await C("/api/interest-results");if(n.success&&n.data&&n.data.categories){wr(n.data.categories);return}}catch(n){console.error("Error loading saved interest test results:",n)}$h(t)}function $h(e){k.getState().language;let t=0;const i={},s=document.getElementById("btnStartInterestTest");s&&s.addEventListener("click",()=>{document.getElementById("testIntro").style.display="none",document.getElementById("testQuestions").style.display="block",n()}),document.querySelectorAll(".radio-option").forEach(r=>{r.addEventListener("click",function(){const o=this.querySelector('input[type="radio"]'),l=this.closest(".question-item"),d=parseInt(l.dataset.question);l.querySelectorAll(".radio-option").forEach(h=>{h.style.borderColor="transparent",h.style.background="var(--bg-primary)"}),this.style.borderColor="#667eea",this.style.background="rgba(102, 126, 234, 0.1)",i[`q${d}`]={value:parseInt(o.value),category:o.dataset.category};const c=l.querySelector(".next-question"),u=document.getElementById("btnSubmitInterestTest");c&&(c.disabled=!1),u&&(u.disabled=!1),n()})}),document.querySelectorAll(".next-question").forEach(r=>{r.addEventListener("click",()=>{const o=document.querySelector(`.question-item[data-question="${t}"]`);o.style.display="none",t++;const l=document.querySelector(`.question-item[data-question="${t}"]`);l.style.display="block",n()})}),document.querySelectorAll(".prev-question").forEach(r=>{r.addEventListener("click",()=>{const o=document.querySelector(`.question-item[data-question="${t}"]`);o.style.display="none",t--;const l=document.querySelector(`.question-item[data-question="${t}"]`);l.style.display="block",n()})});function n(){const r=Object.keys(i).length,o=Math.round(r/e.length*100);document.getElementById("currentQuestion").textContent=t+1,document.getElementById("progressPercentage").textContent=o+"%",document.getElementById("progressBar").style.width=o+"%"}const a=document.getElementById("interestTestForm");a&&a.addEventListener("submit",async r=>{r.preventDefault();const o={};Object.values(i).forEach(d=>{o[d.category]||(o[d.category]={total:0,count:0}),o[d.category].total+=d.value,o[d.category].count++});const l={};Object.keys(o).forEach(d=>{l[d]=Math.round(o[d].total/o[d].count*20)});try{(await C("/api/interest-results",{method:"POST",body:JSON.stringify({results:i,categories:l})})).success&&console.log("✅ Interest test results saved successfully")}catch(d){console.error("Error saving interest test results:",d)}wr(l)})}function wr(e){const t=k.getState().language;document.getElementById("testQuestions").style.display="none",document.getElementById("testResults").style.display="block";const i={math:{subjects:[{name:"Математика",icon:"🔢",reason:"Ваши логические способности и интерес к числам делают математику идеальным выбором"},{name:"Физика",icon:"⚛️",reason:"Физика требует сильных математических навыков и логического мышления"}]},science:{subjects:[{name:"Биология",icon:"🧬",reason:"Ваш интерес к природе и живым организмам идеально подходит для биологии"},{name:"Химия",icon:"🧪",reason:"Химия откроет вам мир научных экспериментов и исследований"}]},tech:{subjects:[{name:"Информатика",icon:"💻",reason:"Ваши технические навыки прекрасно подходят для программирования"},{name:"Физика",icon:"⚛️",reason:"Физика - основа всех современных технологий"}]},art:{subjects:[{name:"Изобразительное искусство",icon:"🎨",reason:"Развивайте свой творческий потенциал через искусство"},{name:"Музыка",icon:"🎵",reason:"Музыка поможет выразить вашу креативность"}]},social:{subjects:[{name:"История",icon:"📜",reason:"История поможет понять общество и человеческие отношения"},{name:"Обществознание",icon:"👥",reason:"Идеально для развития социальных и коммуникативных навыков"}]},language:{subjects:[{name:"Литература",icon:"📚",reason:"Литература развивает языковые навыки и воображение"},{name:"Иностранные языки",icon:"🌍",reason:"Ваша способность к языкам откроет новые возможности"},{reasonUz:"Tillar haqidagi qobiliyatingiz yangi imkoniyatlarni ochadi"}]}},s={math:{uz:{name:"Matematika va Mantiq",desc:"Sizda matematika va mantiqiy fikrlash qobiliyati kuchli"},ru:{name:"Математика и Логика",desc:"У вас сильные способности к математике и логическому мышлению"}},science:{uz:{name:"Fan va Tabiat",desc:"Sizda tabiatni o'rganish va ilmiy tadqiqotlarga qiziqish yuqori"},ru:{name:"Наука и Природа",desc:"У вас высокий интерес к изучению природы и научным исследованиям"}},tech:{uz:{name:"Texnologiya va Injinering",desc:"Sizda texnik soha va texnologiyalarga qiziqish kuchli"},ru:{name:"Технологии и Инженерия",desc:"У вас сильный интерес к технической сфере и технологиям"}},art:{uz:{name:"San'at va Ijod",desc:"Sizda ijodiy fikrlash va san'atga iste'dod bor"},ru:{name:"Искусство и Творчество",desc:"У вас есть талант к творческому мышлению и искусству"}},social:{uz:{name:"Ijtimoiy va Kommunikatsiya",desc:"Sizda odamlar bilan ishlash va muloqot qilish qobiliyati yuqori"},ru:{name:"Социальная сфера и Коммуникация",desc:"У вас высокие способности к работе с людьми и коммуникации"}},language:{uz:{name:"Til va Adabiyot",desc:"Sizda tillar va adabiyot sohasida qiziqish yuqori"},ru:{name:"Языки и Литература",desc:"У вас высокий интерес к языкам и литературе"}}},n=Object.keys(e).map(c=>s[c]?s[c][t].name:c),a=Object.values(e),r=document.getElementById("interestRadarChart");if(r){r.style.background="#1F2937",r.style.borderRadius="12px",r.style.width="100%",r.style.height="100%";const c=r.getContext("2d").createLinearGradient(0,0,0,400);c.addColorStop(0,"rgba(102, 126, 234, 0.4)"),c.addColorStop(.5,"rgba(118, 75, 162, 0.3)"),c.addColorStop(1,"rgba(102, 126, 234, 0.2)");const u=h=>{if(!h||h.length<=14)return h;const m=h.split(" ");if(m.length<2)return h;const p=Math.ceil(m.length/2);return[m.slice(0,p).join(" "),m.slice(p).join(" ")]};new yt(r,{type:"radar",data:{labels:n,datasets:[{label:t==="uz"?"Sizning natijangiz":"Ваш результат",data:a,backgroundColor:c,borderColor:"#667eea",borderWidth:3,pointBackgroundColor:"#667eea",pointBorderColor:"#fff",pointBorderWidth:3,pointHoverBackgroundColor:"#764ba2",pointHoverBorderColor:"#fff",pointHoverBorderWidth:4,pointRadius:6,pointHoverRadius:9,pointStyle:"circle"}]},options:{responsive:!0,maintainAspectRatio:!1,layout:{padding:{top:10,bottom:10,left:10,right:10}},scales:{r:{beginAtZero:!0,max:100,min:0,ticks:{stepSize:20,callback:function(h){return h+"%"},color:"#111827",font:{size:11,weight:"500"}},pointLabels:{color:"#FFFFFF",callback:u,font:{size:window.innerWidth<420?9:window.innerWidth<768?10:12,weight:"600",family:"system-ui, -apple-system, sans-serif"},padding:window.innerWidth<420?4:window.innerWidth<768?6:10},grid:{color:"#FFF",circular:!0},angleLines:{color:"#FFFF",lineWidth:2}}},plugins:{legend:{display:!0,position:"top",labels:{color:"#FFFFFF",font:{size:window.innerWidth<420?11:13,weight:"600"},padding:20,usePointStyle:!0,pointStyle:"circle"}},tooltip:{backgroundColor:"#FFFFFF",titleColor:"#fff",bodyColor:"#fff",titleFont:{size:14,weight:"bold"},bodyFont:{size:13},padding:12,cornerRadius:8,displayColors:!1,callbacks:{label:function(h){return h.parsed.r+"%"}}}}}})}const o=document.getElementById("categoryDescriptions");if(o){const c=Object.entries(e).sort((u,h)=>h[1]-u[1]);o.innerHTML=`
            <div style="margin-bottom: 1.5rem;">
                <h3 style="font-size: 1.25rem; color: var(--text-primary); margin-bottom: 1rem; text-align: center;">
                    ${t==="uz"?"📊 Batafsil natijalar":"📊 Детальные результаты"}
                </h3>
            </div>
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.25rem;">
                ${c.map(([u,h],m)=>{const p=s[u]?s[u][t]:{name:u,desc:""},g=h>=70?"#10b981":h>=50?"#f59e0b":"#6b7280",f=m===0?"🏆":m===1?"🥈":m===2?"🥉":"📌";return`
                        <div style="
                            padding: 1.25rem; 
                            background: ${h>=70?"linear-gradient(135deg, rgba(16, 185, 129, 0.1) 0%, rgba(16, 185, 129, 0.05) 100%)":h>=50?"linear-gradient(135deg, rgba(245, 158, 11, 0.1) 0%, rgba(245, 158, 11, 0.05) 100%)":"linear-gradient(135deg, rgba(107, 114, 128, 0.1) 0%, rgba(107, 114, 128, 0.05) 100%)"}; 
                            border-radius: 12px; 
                            border-left: 5px solid ${g};
                            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
                            transition: transform 0.2s, box-shadow 0.2s;
                        " class="category-card">
                            <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 0.75rem; gap: 0.5rem;">
                                <div style="display: flex; align-items: center; gap: 0.5rem; flex: 1;">
                                    <span style="font-size: 1.5rem;">${f}</span>
                                    <h4 style="margin: 0; font-size: 1rem; font-weight: 600; color: var(--text-primary); line-height: 1.3;">${p.name}</h4>
                                </div>
                                <div style="
                                    background: ${g}; 
                                    color: white; 
                                    padding: 0.35rem 0.75rem; 
                                    border-radius: 20px; 
                                    font-size: 1rem; 
                                    font-weight: 700;
                                    white-space: nowrap;
                                ">${h}%</div>
                            </div>
                            <p style="margin: 0; font-size: 0.875rem; color: var(--text-secondary); line-height: 1.5;">${p.desc}</p>
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
                                    background: ${g}; 
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
                    ${c.slice(0,3).map(([u,h])=>{const m=i[u];return m?m.subjects.map(p=>`
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
                                    ">${p.icon}</div>
                                    <div>
                                        <h3 style="margin: 0; font-size: 1.25rem; color: var(--text-primary); font-weight: 700;">
                                            ${p.name}
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
                                ">${p.reason}</p>
                            </div>
                        `).join(""):""}).join("")}
                </div>
                
                <div style="text-align: center; margin-top: 2rem; padding-top: 2rem; border-top: 1px solid rgba(102, 126, 234, 0.2);">
                    <p style="color: var(--text-secondary); font-size: 0.9rem; margin-bottom: 1rem;">
                        ${t==="uz"?"💡 Maslahat: Har bir fanni sinab ko'ring va o'zingizga eng mos keladiganini tanlang!":"💡 Совет: Попробуйте каждый предмет и выберите то, что вам больше всего подходит!"}
                    </p>
                </div>
            </div>
        `}const l=document.getElementById("btnRetakeTest");l&&l.addEventListener("click",()=>{$.navigate("/student/interest-test")});const d=document.getElementById("btnBackToDashboard");d&&d.addEventListener("click",()=>{$.navigate("/student/dashboard")})}async function _h(){var i,s;const e=k.getState().language;k.getState().user;const t=k.getState().token;try{const n=await fetch(`${Y}/api/tests`,{headers:{Authorization:`Bearer ${t}`}});if(!n.ok)throw new Error("Failed to fetch control tests");const a=await n.json(),r=a.data||a||[],o=!Array.isArray(r)||r.length===0,l=`
            <div class="page-header">
                <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 1rem;">
                    <div>
                        <h1>${L("controlTests")}</h1>
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
                        <p style="color: var(--text-secondary); font-size: 1.1rem;">${L("noControlTests")}</p>
                    </div>
                `:`
                    <div class="tests-grid">
                        ${Array.isArray(r)?r.map(d=>{var f;const c=`control-test-completed-${d._id}`,u=JSON.parse(localStorage.getItem(c)||"null"),h=!!u;let m="",p="",g="";if(h){const y=u.percentage;y>=70?(m="#10B981",p="✅",g=e==="uz"?"Ajoyib!":"Отлично!"):y>=50?(m="#F59E0B",p="⚠️",g=e==="uz"?"Yaxshi":"Хорошо"):(m="#EF4444",p="❌",g=e==="uz"?"Qayta harakat":"Попробуйте")}return`
                            <div class="test-card" data-test-id="${d._id}">
                                <div class="test-header">
                                    <h3>${d.name}</h3>
                                    ${h?`
                                        <div style="margin-top: 0.5rem; padding: 0.5rem 1rem; background: ${m}20; border: 2px solid ${m}; border-radius: 8px; text-align: center;">
                                            <div style="font-size: 1.5rem; margin-bottom: 0.25rem;">${p}</div>
                                            <div style="font-size: 0.85rem; font-weight: 700; color: ${m};">${g}</div>
                                            <div style="font-size: 0.75rem; color: ${m}; margin-top: 0.25rem;">
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
        `;O(l,"student"),(i=document.getElementById("btnBackFromControlTests"))==null||i.addEventListener("click",()=>{$.navigate("/student/dashboard")}),document.querySelectorAll(".btn-start-test").forEach(d=>{d.addEventListener("click",c=>{const u=c.target.dataset.testId;$.navigate(`/student/take-control-test/${u}`)})})}catch(n){console.error("❌ Error loading control tests:",n);const a=`
            <div class="page-header">
                <div style="display: flex; justify-content: space-between; align-items: center;">
                    <h1>${L("controlTests")}</h1>
                    <button class="back-button" id="btnBackFromControlTests">
                        <span>←</span>
                        <span>${e==="uz"?"Orqaga":"Назад"}</span>
                    </button>
                </div>
            </div>
            <div class="card error-message">
                <p>${e==="uz"?"Xatolik yuz berdi. Qayta urinib ko'ring.":"Произошла ошибка. Попробуйте еще раз."}</p>
            </div>
        `;O(a,"student"),(s=document.getElementById("btnBackFromControlTests"))==null||s.addEventListener("click",()=>{$.navigate("/student/dashboard")})}}async function Sh({testId:e}){var s,n,a,r,o;const t=k.getState().language;k.getState().user;const i=k.getState().token;try{let l=function(){const _=Object.keys(b.answers).filter(j=>b.answers[j]!==void 0).length,S=document.getElementById("answeredCount"),T=document.getElementById("currentQuestion");S&&(S.textContent=_);const M=document.getElementById("progressBar");if(M){const j=_/g.length*100;M.style.width=j+"%"}};const d=`control-test-completed-${e}`,c=JSON.parse(localStorage.getItem(d)||"null");if(c){const _=c.percentage,S=_>=70,T=_>=50;let M="",j="",V="";S?(M="#10B981",j="✅",V=t==="uz"?"Ajoyib!":"Отлично!"):T?(M="#F59E0B",j="⚠️",V=t==="uz"?"Yaxshi":"Хорошо"):(M="#EF4444",j="❌",V=t==="uz"?"Qayta harakat":"Попробуйте");const Z=`
                <div style="background: var(--bg-primary); min-height: 100vh; display: flex; align-items: center; justify-content: center; padding: 2rem 1.5rem;">
                    <div style="max-width: 600px; width: 100%;">
                        <div style="background: var(--bg-secondary); border-radius: 16px; padding: 3rem 2rem; box-shadow: 0 10px 40px rgba(0,0,0,0.2); border: 2px solid var(--border-color); text-align: center;">
                            <div style="font-size: 4rem; margin-bottom: 1rem; color: ${M};">${j}</div>
                            <h1 style="margin: 0 0 0.5rem 0; font-size: 2rem; font-weight: 800; color: var(--text-primary);">
                                ${V}
                            </h1>
                            <p style="margin: 0 0 2rem 0; color: var(--text-secondary); font-size: 1rem;">
                                ${t==="uz"?"Bu test allaqachon yakunlangan!":"Этот тест уже завершен!"}
                            </p>

                            <div style="background: linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(139, 92, 246, 0.1) 100%); border: 2px solid var(--primary); border-radius: 14px; padding: 2rem; margin-bottom: 2rem;">
                                <div style="font-size: 0.9rem; color: var(--text-muted); font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 0.5rem;">
                                    📊 ${t==="uz"?"Ballangiz":"Ваш балл"}
                                </div>
                                <div style="font-size: 2.5rem; font-weight: 800; color: ${M}; margin-bottom: 1rem;">
                                    ${c.score} / ${c.maxScore}
                                </div>
                                <div style="font-size: 1.5rem; font-weight: 700; color: ${M};">
                                    ${_}%
                                </div>
                            </div>

                            <button class="button button-primary" id="btnBackToTests" style="width: 100%; padding: 1rem;">
                                ← ${t==="uz"?"Testlarga qaytish":"Вернуться к тестам"}
                            </button>
                        </div>
                    </div>
                </div>
            `;O(Z,"student"),(s=document.getElementById("btnBackToTests"))==null||s.addEventListener("click",()=>{$.navigate("/student/control-tests")});return}const u=await fetch(`${Y}/api/tests/${e}/start`,{headers:{Authorization:`Bearer ${i}`}});if(!u.ok)throw new Error("Failed to start test");const h=await u.json(),m=h.data||h,p=m.sessionId,g=m.questions||[];if(!g||g.length===0)throw new Error("Test has no questions");const f=m.durationMinutes||60,y=`test-${e}-progress`;let b=JSON.parse(localStorage.getItem(y))||{testId:e,sessionId:p,answers:{},startTime:Date.now(),timeRemaining:f*60*1e3};localStorage.getItem(y)||localStorage.setItem(y,JSON.stringify(b));const x=`
            <div style="background: var(--bg-primary); min-height: 100vh;">
                <!-- Header with Timer -->
                <div class="test-header-modern" style="position: sticky; top: 0; z-index: 100; background: linear-gradient(135deg, var(--bg-secondary) 0%, var(--bg-tertiary) 100%); border-bottom: 2px solid var(--primary); padding: 1.5rem; box-shadow: 0 4px 12px rgba(0,0,0,0.2);">
                    <div style="max-width: 1200px; margin: 0 auto; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 2rem;">
                        <div style="flex: 1; min-width: 250px;">
                            <h1 style="margin: 0 0 0.5rem 0; font-size: 1.8rem; font-weight: 800; color: var(--text-primary);">
                                ${m.title}
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
                                ${t==="uz"?"Savol":"Вопрос"} <span id="currentQuestion" style="color: var(--primary); font-weight: 800;">1</span> / <span style="color: var(--text-muted);">${g.length}</span>
                            </span>
                            <span style="color: var(--text-muted); font-size: 0.9rem;">
                                ${t==="uz"?"Javoblar":"Ответов"}: <span id="answeredCount" style="color: var(--primary); font-weight: 800;">0</span>/${g.length}
                            </span>
                        </div>
                        <div style="height: 8px; background: var(--bg-tertiary); border-radius: 4px; overflow: hidden;">
                            <div id="progressBar" style="height: 100%; background: linear-gradient(90deg, var(--primary) 0%, var(--accent) 100%); width: 0%; transition: width 0.3s ease; border-radius: 4px;"></div>
                        </div>
                    </div>

                    <!-- Questions Container -->
                    <div id="questionsContainer">
                        ${g.map((_,S)=>`
                            <div class="question-card-modern" data-question-index="${S}" style="background: var(--bg-secondary); border: 2px solid var(--border-color); border-radius: 14px; padding: 2rem; margin-bottom: 2rem; transition: all 0.3s ease;">
                                <!-- Question Number Badge -->
                                <div style="display: flex; align-items: center; gap: 1rem; margin-bottom: 1.5rem;">
                                    <div style="background: linear-gradient(135deg, var(--primary) 0%, var(--accent) 100%); color: white; width: 40px; height: 40px; border-radius: 10px; display: flex; align-items: center; justify-content: center; font-weight: 800; font-size: 1.1rem;">
                                        ${S+1}
                                    </div>
                                    <div style="flex: 1;">
                                        <h3 style="margin: 0 0 0.25rem 0; color: var(--text-primary); font-size: 1.2rem; font-weight: 700;">
                                            ${t==="uz"?_.questionUz:_.questionRu}
                                        </h3>
                                        <div style="color: var(--text-muted); font-size: 0.85rem;">
                                            ${t==="uz"?"Bitta javobni tanlang":"Выберите один ответ"}
                                        </div>
                                    </div>
                                </div>

                                <!-- Answer Options -->
                                <div class="answers-list-modern" style="display: flex; flex-direction: column; gap: 0.75rem;">
                                    ${_.answers.map((T,M)=>`
                                        <label class="answer-option-modern" style="cursor: pointer; display: flex; align-items: center; padding: 1rem; background: var(--bg-tertiary); border: 2px solid var(--border-color); border-radius: 10px; transition: all 0.3s ease; position: relative; overflow: hidden;">
                                            <div style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.1), transparent); pointer-events: none;"></div>
                                            
                                            <input type="radio" 
                                                name="question_${S}" 
                                                value="${M}"
                                                data-question-index="${S}"
                                                ${b.answers[S]==M?"checked":""}
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
        `;O(x,"student");let v=b.timeRemaining;const w=document.getElementById("timer"),z=setInterval(()=>{if(v-=1e3,b.timeRemaining=v,w){const _=Math.floor(v/6e4),S=Math.floor(v%6e4/1e3);w.textContent=`${_}:${S.toString().padStart(2,"0")}`,v<=0&&(clearInterval(z),E())}localStorage.setItem(y,JSON.stringify(b))},1e3);document.querySelectorAll(".answer-input").forEach(_=>{_.addEventListener("change",S=>{const T=parseInt(S.target.dataset.questionIndex),M=parseInt(S.target.value);b.answers[T]=M,localStorage.setItem(y,JSON.stringify(b)),l()})}),l(),(n=document.getElementById("btnSaveProgress"))==null||n.addEventListener("click",()=>{localStorage.setItem(y,JSON.stringify(b)),I(t==="uz"?"✅ Saqlandi!":"✅ Сохранено!","success")}),(a=document.getElementById("btnExitTest"))==null||a.addEventListener("click",async()=>{clearInterval(z),await Vt(t==="uz"?"Testdan chiqishni xohlaysizmi? Tayyorlangan javoblar saqlanadi.":"Вы уверены? Ваши ответы будут сохранены.",t==="uz"?"Testdan chiqish":"Выход из теста")&&$.navigate("/student/control-tests")}),(r=document.getElementById("btnSubmitTest"))==null||r.addEventListener("click",async()=>{if(clearInterval(z),await Vt(t==="uz"?"Testni yakunlaysizmi?":"Завершить тест?",t==="uz"?"Testni yakunlash":"Завершить тест")){const S=Math.round((Date.now()-b.startTime)/1e3/60);await ua(e,b.answers,b.sessionId,S)}});async function E(){console.log("⏰ Time's up, auto-submitting...");const _=Math.round((Date.now()-b.startTime)/1e3/60);await ua(e,b.answers,b.sessionId,_)}}catch(l){console.error("❌ Error loading control test:",l),O(`
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
        `,"student"),(o=document.getElementById("btnBackToControlTests"))==null||o.addEventListener("click",()=>{$.navigate("/student/control-tests")})}}async function ua(e,t,i,s){var r;const n=k.getState().language,a=k.getState().token;try{const o=await fetch(`${Y}/api/tests/${e}/submit`,{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${a}`},body:JSON.stringify({sessionId:i,answers:t,timeTaken:s})});if(!o.ok){const b=await o.json();throw new Error(b.message||"Submission failed")}const l=await o.json();localStorage.removeItem(`test-${e}-progress`);const d=l.data||l,c=d.score||0,u=d.passed||!1,h=d.earnedPoints||0,m=d.totalPoints||0,p=`test-completed-${e}`;localStorage.setItem(p,JSON.stringify({testId:e,score:c,maxScore,percentage,completedAt:new Date().toISOString(),correctCount,totalQuestions}));const g=percentage>=70,f=percentage>=50,y=`
            <div style="background: var(--bg-primary); min-height: 100vh; display: flex; align-items: center; justify-content: center; padding: 2rem 1.5rem;">
                <div style="max-width: 600px; width: 100%;">
                    <!-- Results Card -->
                    <div style="background: var(--bg-secondary); border-radius: 16px; padding: 3rem 2rem; box-shadow: 0 10px 40px rgba(0,0,0,0.2); border: 2px solid var(--border-color); text-align: center;">
                        
                        <!-- Result Emoji/Icon -->
                        <div style="font-size: 5rem; margin-bottom: 1.5rem; animation: bounce 0.6s ease;">
                            ${g?"🎉":f?"👍":"📚"}
                        </div>

                        <!-- Title -->
                        <h1 style="margin: 0 0 0.5rem 0; font-size: 2rem; font-weight: 800; color: var(--text-primary);">
                            ${n==="uz"?g?"🌟 Ajoyib!":f?"Yaxshi!":"Qayta harakat qiling":g?"🌟 Отлично!":f?"Хорошо!":"Попробуйте снова"}
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
                                <div style="height: 100%; background: linear-gradient(90deg, ${g?"#10B981":f?"#F59E0B":"#EF4444"} 0%, ${g?"#34D399":f?"#FBBF24":"#F87171"} 100%); width: ${percentage}%; border-radius: 5px; transition: width 0.6s ease;"></div>
                            </div>

                            <div style="display: flex; justify-content: space-around; gap: 1rem; flex-wrap: wrap;">
                                <div>
                                    <div style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 0.25rem;">
                                        ${n==="uz"?"Foizda":"Процент"}
                                    </div>
                                    <div style="font-size: 1.5rem; font-weight: 700; color: ${g?"#10B981":f?"#F59E0B":"#EF4444"};">
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
                        <div style="background: ${g?"rgba(16, 185, 129, 0.1); border: 2px solid #10B981":f?"rgba(245, 158, 11, 0.1); border: 2px solid #F59E0B":"rgba(239, 68, 68, 0.1); border: 2px solid #EF4444"}; border-radius: 10px; padding: 1rem; margin-bottom: 2rem;">
                            <p style="margin: 0; color: ${g?"#10B981":f?"#F59E0B":"#EF4444"}; font-weight: 700;">
                                ${g?n==="uz"?"✅ Siz o'tkazib kittingiz!":"✅ Вы прошли тест!":f?n==="uz"?"⚠️ Davom ettiring":"⚠️ Улучшайтесь":n==="uz"?"❌ Qayta harakat qiling":"❌ Попробуйте снова"}
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
                            ${g?n==="uz"?"🌟 Tabriklaysiz! Siz yaxshi natijavga erishdingiz.":"🌟 Поздравляем! Вы отлично справились.":f?n==="uz"?"💪 Yana biroz harakat qiling va oʻtkazib ketasiz!":"💪 Еще немного усилий и вы справитесь!":n==="uz"?"📚 Materialni qayta oʻrganing va qayta harakat qiling.":"📚 Повторите материал и попробуйте еще раз."}
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
        `;O(y,"student"),(r=document.getElementById("btnBackToDashboard"))==null||r.addEventListener("click",()=>{$.navigate("/student/dashboard")})}catch(o){console.error("❌ Error submitting control test:",o),I(n==="uz"?"Xatolik yuz berdi: "+o.message:"Ошибка: "+o.message,"error",6e3)}}function ha(){if(!k.getState().user){$.navigate("/login");return}$.navigate("/teacher/subjects")}async function Th(){var r,o,l,d,c;const e=k.getState().user,t=k.getState().language;if(!e){$.navigate("/login");return}const i=`
        <div class="page-header">
            <h1>${t==="uz"?"Mening fanlarim":"Мои предметы"}</h1>
            <p>${e.firstName} ${e.lastName} • ${L("teacher")}</p>
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
    `;O(i,"teacher"),(r=document.getElementById("btnTeacherProfile"))==null||r.addEventListener("click",()=>{$.navigate("/teacher/profile")}),(o=document.getElementById("btnTeacherTests"))==null||o.addEventListener("click",()=>{$.navigate("/teacher/tests")}),(l=document.getElementById("btnTeacherModuleAnalytics"))==null||l.addEventListener("click",()=>{$.navigate("/teacher/subject-analytics")}),(d=document.getElementById("btnTeacherControlTests"))==null||d.addEventListener("click",()=>{$.navigate("/teacher/control-tests")}),(c=document.getElementById("btnTeacherClasses"))==null||c.addEventListener("click",()=>{$.navigate("/teacher/classes")});const s=await C("/api/teacher/subjects"),n=document.getElementById("teacherSubjects");if(!n)return;const a=s.success&&Array.isArray(s.data)?s.data:[];if(!a.length){n.innerHTML=`
            <div class="alert" style="padding: 1.5rem; text-align: center;">
                ${t==="uz"?"Sizga fanlar biriktirilmagan":"У вас нет назначенных предметов"}
            </div>
        `;return}n.innerHTML=`
        <div class="subjects-grid">
            ${a.map(u=>{const h=u.id||u._id;return`
                    <div class="subject-card" data-subject-id="${h}" style="background: linear-gradient(135deg, var(--bg-secondary) 0%, var(--bg-tertiary) 100%); border: 1px solid var(--border-color); transition: all 0.3s ease; cursor: pointer;">
                        <div class="subject-header" style="pointer-events: none;">
                            <div class="subject-icon" style="width: 64px; height: 64px; background: linear-gradient(135deg, var(--primary), var(--accent)); border-radius: 16px; display: flex; align-items: center; justify-content: center; font-size: 2rem; box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);">${mr(u.name)}</div>
                            <h3 style="margin: 1rem 0 0.5rem 0; font-size: 1.25rem;">${u.name}</h3>
                        </div>
                        <div class="subject-info" style="margin: 0.75rem 0; pointer-events: none;">
                            <p id="subject-${h}-stats" style="color: var(--text-muted); font-size: 0.875rem; display: flex; align-items: center; justify-content: center; gap: 0.5rem;">
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
                `}).join("")}
        </div>
    `,document.querySelectorAll(".subject-card").forEach(u=>{u.addEventListener("click",()=>{const h=u.getAttribute("data-subject-id");h&&$.navigate(`/teacher/subject/${h}`)})}),a.forEach(async u=>{const h=u.id||u._id;if(!h)return;const m=await C(`/api/subjects/${h}/modules`),p=document.getElementById(`subject-${h}-stats`);if(p)if(m.success){const g=Array.isArray(m.data)?m.data.length:0;p.textContent=`${g} ${t==="uz"?"ta modul":g===1?"модуль":"модулей"}`}else p.textContent=`0 ${t==="uz"?"ta modul":"модулей"}`})}async function Eh(){const e=window.location.pathname.split("/").pop(),t=k.getState().language,i=k.getState().user;console.log("🔍 renderTeacherSubjectManagement called with subjectId:",e),console.log("📍 Current path:",window.location.pathname),O(`
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
    `,"teacher");const n=await C("/api/subjects");if(n.success){const a=n.data.find(r=>r._id===e);if((i==null?void 0:i.role)==="teacher"){const r=Array.isArray(i.subjects)?i.subjects:[],o=new Set(r.map(l=>(l==null?void 0:l.id)||(l==null?void 0:l._id)||(l==null?void 0:l.subjectId)||l).filter(Boolean));if(o.size&&!o.has(e)){I(t==="uz"?"Bu fan sizga biriktirilmagan":"Этот предмет вам не назначен","error"),$.navigate("/teacher/subjects");return}}if(a){const r=t==="uz"?a.nameUz||a.name||a.nameRu:a.nameRu||a.name||a.nameUz;document.getElementById("subjectName").textContent=r||(t==="uz"?"Fan":"Предмет"),window.currentSubject=a}}await wi(e),document.getElementById("btnBackToSubjects").addEventListener("click",()=>{$.navigate("/teacher/subjects")}),document.getElementById("createModuleForm").addEventListener("submit",async a=>{a.preventDefault();const r=document.getElementById("moduleName").value,o=document.getElementById("moduleDesc").value,l=await C(`/api/subjects/${e}/modules`,{method:"POST",body:JSON.stringify({name:r,description:o})}),d=document.getElementById("moduleMessage");l.success?(d.innerHTML=`<div class="success-message">${t==="uz"?"✓ Modul muvaffaqiyatli yaratildi!":"✓ Модуль успешно создан!"}</div>`,document.getElementById("createModuleForm").reset(),await wi(e),setTimeout(()=>{d.innerHTML=""},3e3)):d.innerHTML=`<div class="error-message">${l.error||L("error")}</div>`})}async function wi(e){var a;const t=k.getState().language,i=document.getElementById("modulesList");console.log("🔍 loadSubjectModules called with subjectId:",e),i.innerHTML=`
        <div class="loading">
            <div class="spinner"></div>
            <p>${t==="uz"?"Yuklanmoqda...":"Загрузка..."}</p>
        </div>
    `;const s=await C(`/api/subjects/${e}/modules`);console.log("📦 Modules API response:",s),console.log("📊 result.success:",s.success),console.log("📊 result.data:",s.data);const n=((a=s.data)==null?void 0:a.data)||s.data||[];if(console.log("📊 modulesData:",n),console.log("📊 modulesData.length:",n.length),console.log("📊 Is array?",Array.isArray(n)),s.success&&n&&n.length>0){const r=n.map(l=>{const d=(l==null?void 0:l._id)||(l==null?void 0:l.id);return{...l,id:d,_id:d,nameRu:(l==null?void 0:l.nameRu)||(l==null?void 0:l.name)||"",nameUz:(l==null?void 0:l.nameUz)||(l==null?void 0:l.name)||"",descriptionRu:(l==null?void 0:l.descriptionRu)||(l==null?void 0:l.description)||"",descriptionUz:(l==null?void 0:l.descriptionUz)||(l==null?void 0:l.description)||"",createdAt:(l==null?void 0:l.createdAt)||(l==null?void 0:l.created_at)||(l==null?void 0:l.createdAt)}});window.currentModules=r,console.log("✅ Found",r.length,"modules");const o=await Promise.all(r.map(async l=>{var u;const d=await C(`/api/modules/${l.id}/tests`),c=((u=d.data)==null?void 0:u.data)||d.data||[];return{...l,testCount:Array.isArray(c)?c.length:0}}));console.log("✅ Modules with test counts:",o),i.innerHTML=o.map(l=>`
            <div class="card module-item" data-module-id="${l._id}" style="margin-bottom: 1.5rem; background: linear-gradient(135deg, var(--bg-secondary) 0%, var(--bg-tertiary) 100%); border: 1px solid var(--border-color); border-left: 4px solid var(--accent); transition: all 0.3s ease; box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08); position: relative; overflow: hidden;">
                <div style="position: absolute; top: 0; right: 0; width: 100px; height: 100px; background: linear-gradient(135deg, var(--accent) 0%, transparent 50%); opacity: 0.1; pointer-events: none;"></div>
                <div style="display: flex; justify-content: space-between; align-items: flex-start; gap: 2rem; position: relative;">
                    <div style="flex: 1;">
                        <div style="display: flex; align-items: flex-start; gap: 1.25rem; margin-bottom: 1.25rem;">
                            <div style="width: 56px; height: 56px; background: linear-gradient(135deg, var(--accent), #06b6d4); border-radius: 14px; display: flex; align-items: center; justify-content: center; font-size: 1.75rem; flex-shrink: 0; box-shadow: 0 4px 12px rgba(59, 130, 246, 0.25);">
                                📦
                            </div>
                            <div style="flex: 1; padding-top: 0.25rem;">
                                <h4 style="margin: 0 0 0.5rem 0; font-size: 1.25rem; font-weight: 600; color: var(--text-primary);">${t==="uz"?l.nameUz||l.nameRu:l.nameRu||l.nameUz}</h4>
                                <p style="color: var(--text-muted); margin: 0; font-size: 0.9rem; line-height: 1.5;">
                                    ${t==="uz"?l.descriptionUz||l.descriptionRu:l.descriptionRu||l.descriptionUz}
                                </p>
                            </div>
                        </div>
                        <div style="display: flex; gap: 2.5rem; font-size: 0.875rem; padding: 1rem; background: var(--bg-primary); border-radius: 10px; margin-left: 72px;">
                            <div style="display: flex; align-items: center; gap: 0.75rem;">
                                <div style="width: 32px; height: 32px; background: linear-gradient(135deg, var(--primary), var(--accent)); border-radius: 8px; display: flex; align-items: center; justify-content: center; font-size: 1rem;">📝</div>
                                <div>
                                    <div style="color: var(--text-muted); font-size: 0.75rem; margin-bottom: 0.125rem;">${t==="uz"?"Testlar":"Тесты"}</div>
                                    <div style="font-weight: 600; color: var(--text-primary);">${l.testCount}</div>
                                </div>
                            </div>
                            <div style="display: flex; align-items: center; gap: 0.75rem;">
                                <div style="width: 32px; height: 32px; background: linear-gradient(135deg, #10b981, #059669); border-radius: 8px; display: flex; align-items: center; justify-content: center; font-size: 1rem;">📅</div>
                                <div>
                                    <div style="color: var(--text-muted); font-size: 0.75rem; margin-bottom: 0.125rem;">${t==="uz"?"Yaratilgan":"Создано"}</div>
                                    <div style="font-weight: 600; color: var(--text-primary);">${l.createdAt?new Date(l.createdAt).toLocaleDateString():"-"}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div style="display: flex; flex-direction: column; gap: 0.75rem; min-width: 160px;">
                        <button class="btn-module-tests button button-primary" data-module-id="${l._id}" style="width: 100%; padding: 12px 18px; font-size: 0.9rem; font-weight: 600; background: linear-gradient(135deg, var(--primary), var(--accent)); border: none; border-radius: 10px; box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3); transition: all 0.3s ease; display: flex; align-items: center; justify-content: center; gap: 0.5rem;">
                            <span>📝</span>
                            <span>${t==="uz"?"Testlar":"Тесты"}</span>
                        </button>
                        <button class="btn-module-edit button button-secondary" data-module-id="${l._id}" style="width: 100%; padding: 12px 18px; font-size: 0.9rem; font-weight: 600; border-radius: 10px; transition: all 0.3s ease; display: flex; align-items: center; justify-content: center; gap: 0.5rem;">
                            <span>✏️</span>
                            <span>${t==="uz"?"Tahrirlash":"Редактировать"}</span>
                        </button>
                        <button class="btn-module-delete button button-danger" data-module-id="${l._id}" data-subject-id="${e}" style="width: 100%; padding: 12px 18px; font-size: 0.9rem; font-weight: 600; border-radius: 10px; transition: all 0.3s ease; display: flex; align-items: center; justify-content: center; gap: 0.5rem;">
                            <span>🗑️</span>
                            <span>${t==="uz"?"O'chirish":"Удалить"}</span>
                        </button>
                    </div>
                </div>
            </div>
        `).join(""),document.querySelectorAll(".btn-module-tests").forEach(l=>{l.addEventListener("click",()=>{const d=l.getAttribute("data-module-id");$.navigate(`/teacher/module/${d}/tests`)})}),document.querySelectorAll(".btn-module-edit").forEach(l=>{l.addEventListener("click",()=>{const d=l.getAttribute("data-module-id");Mh(d)})}),document.querySelectorAll(".btn-module-delete").forEach(l=>{l.addEventListener("click",()=>{const d=l.getAttribute("data-module-id"),c=l.getAttribute("data-subject-id");Ah(d,c)})}),console.log("✅ Event listeners attached to",document.querySelectorAll(".btn-module-tests").length,"buttons")}else s.success?(console.log("⚠️ No modules found - showing empty state"),i.innerHTML=`
            <div class="card" style="text-align: center; padding: 4rem 2rem; background: linear-gradient(135deg, var(--bg-secondary) 0%, var(--bg-tertiary) 100%); border: 2px dashed var(--border-color);">
                <div style="font-size: 4rem; margin-bottom: 1rem; opacity: 0.5;">📦</div>
                <p style="color: var(--text-muted); font-size: 1.125rem; font-weight: 500; margin-bottom: 0.5rem;">
                    ${t==="uz"?"Hali modullar yaratilmagan":"Модули еще не созданы"}
                </p>
                <p style="color: var(--text-muted); margin-top: 0.5rem; font-size: 0.875rem;">
                    ${t==="uz"?"Yuqorida yangi modul yarating":"Создайте новый модуль выше"}
                </p>
            </div>
        `):i.innerHTML=`<div class="error-message">${s.error||L("error")}</div>`}function Mh(e){var o;const t=k.getState().language,i=(o=window.currentModules)==null?void 0:o.find(l=>l._id===e);if(!i){alert(t==="uz"?"Modul topilmadi":"Модуль не найден");return}const s=prompt(t==="uz"?"Modul nomi (Ruscha):":"Название модуля (RU):",i.nameRu);if(!s)return;const n=prompt(t==="uz"?"Modul nomi (O'zbekcha):":"Название модуля (UZ):",i.nameUz);if(!n)return;const a=prompt(t==="uz"?"Tavsif (Ruscha):":"Описание (RU):",i.descriptionRu);if(!a)return;const r=prompt(t==="uz"?"Tavsif (O'zbekcha):":"Описание (UZ):",i.descriptionUz);r&&Ch(e,s,n,a,r)}async function Ch(e,t,i,s,n){const a=k.getState().language,r=t||i,o=s||n,l=await C(`/api/modules/${e}`,{method:"PUT",body:JSON.stringify({name:r,description:o})});if(l.success){alert(a==="uz"?"Modul muvaffaqiyatli yangilandi!":"Модуль успешно обновлен!");const d=window.location.pathname.split("/")[3];await wi(d)}else alert(l.error||(a==="uz"?"Xato":"Ошибка"))}async function Ah(e,t){const i=k.getState().language;if(!confirm(i==="uz"?"Modulni o'chirishga ishonchingiz komilmi? Modul ichidagi barcha testlar ham o'chadi!":"Вы уверены, что хотите удалить модуль? Все тесты внутри модуля также будут удалены!"))return;const s=await C(`/api/modules/${e}`,{method:"DELETE"});s.success?await wi(t):alert(s.error||L("error"))}async function Lh(e){var s;const t=k.getState().language,i=k.getState().token;try{const n=await fetch(`${Y}/api/teacher/test-results`,{headers:{Authorization:`Bearer ${i}`}});if(!n.ok)throw new Error("Failed to fetch results");const o=((await n.json()).data||[]).filter(d=>d.test_id===e),l=`
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
        `;O(l,"teacher"),(s=document.getElementById("btnBackFromResults"))==null||s.addEventListener("click",()=>{$.navigate("/teacher/control-tests")})}catch(n){console.error("❌ Error loading results:",n),I(t==="uz"?"Natijalarni yuklashda xatolik":"Ошибка при загрузке результатов","error"),$.navigate("/teacher/control-tests")}}async function Bh(e){var s;const t=k.getState().language,i=k.getState().token;try{const n=await fetch(`${Y}/api/tests/${e}`,{headers:{Authorization:`Bearer ${i}`}});if(!n.ok)throw new Error("Failed to fetch test");const a=await n.json(),r=a.data||a,o=r.questions||[],l=`
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
        `;O(l,"teacher"),(s=document.getElementById("btnBackFromPreview"))==null||s.addEventListener("click",()=>{$.navigate("/teacher/control-tests")})}catch(n){console.error("❌ Error loading test:",n),I(t==="uz"?"Testni yuklashda xatolik":"Ошибка при загрузке теста","error"),$.navigate("/teacher/control-tests")}}async function Ih(e,t,i){var a,r,o;const s=k.getState().language,n=k.getState().token;try{const l=await fetch(`${Y}/api/tests/${e}`,{headers:{Authorization:`Bearer ${n}`}});if(!l.ok)throw new Error("Failed to fetch test");const d=await l.json(),c=d.data||d,u=`
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
        `;O(u,"teacher"),(a=document.getElementById("btnBackFromEdit"))==null||a.addEventListener("click",()=>{$.navigate("/teacher/control-tests")}),(r=document.getElementById("btnCancelEdit"))==null||r.addEventListener("click",()=>{$.navigate("/teacher/control-tests")}),(o=document.getElementById("btnSaveEdit"))==null||o.addEventListener("click",async()=>{const h=document.getElementById("editNameRu").value.trim(),m=document.getElementById("editNameUz").value.trim(),p=parseInt(document.getElementById("editDuration").value),g=parseInt(document.getElementById("editMaxScore").value);if(!h||!m||!p||!g){I(s==="uz"?"Barcha maydonlarni to'ldiring":"Заполните все поля","error");return}try{if(!(await fetch(`${Y}/api/tests/${e}`,{method:"PUT",headers:{"Content-Type":"application/json",Authorization:`Bearer ${n}`},body:JSON.stringify({title:h,durationMinutes:p,passPercent:g})})).ok)throw new Error("Update failed");I(s==="uz"?"✅ Saqlandi!":"✅ Сохранено!","success"),$.navigate("/teacher/control-tests")}catch(f){console.error("❌ Error updating test:",f),I(s==="uz"?"Xatolik yuz berdi":"Произошла ошибка","error")}})}catch(l){console.error("❌ Error loading test:",l),I(s==="uz"?"Testni yuklashda xatolik":"Ошибка при загрузке теста","error"),$.navigate("/teacher/control-tests")}}async function jh(){var i;const e=k.getState().language;k.getState().user;const t=k.getState().token;try{const a=(await(await fetch(`${Y}/api/classes`,{headers:{Authorization:`Bearer ${t}`}})).json()).data||[],l=(await(await fetch(`${Y}/api/tests`,{headers:{Authorization:`Bearer ${t}`}})).json()).data||[],d=`
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
        `;O(d,"teacher"),(i=document.getElementById("btnBackFromControlTests"))==null||i.addEventListener("click",()=>{$.navigate("/teacher/dashboard")}),Ph(a),document.querySelectorAll(".btn-edit").forEach(c=>{c.addEventListener("click",u=>{u.stopPropagation();const h=c.dataset.testId;Ih(h,l,a)})}),document.querySelectorAll(".btn-delete").forEach(c=>{c.addEventListener("click",u=>{u.stopPropagation();const h=c.dataset.testId;confirm(e==="uz"?"Ishonchingiz komilmi?":"Вы уверены?")&&Dh(h)})}),document.querySelectorAll(".btn-view-results").forEach(c=>{c.addEventListener("click",u=>{u.stopPropagation();const h=c.dataset.testId;Lh(h)})}),document.querySelectorAll(".btn-preview").forEach(c=>{c.addEventListener("click",u=>{u.stopPropagation();const h=c.dataset.testId;Bh(h)})})}catch(s){console.error("❌ Error loading control tests:",s),O(`
            <div class="page-header">
                <h1>${e==="uz"?"Nazorat isbotlari":"Контрольные работы"}</h1>
            </div>
            <div class="card error-message">
                <p>${e==="uz"?"Xatolik yuz berdi":"Произошла ошибка"}</p>
            </div>
        `,"teacher")}}function Ph(e){const t=k.getState().language,i=k.getState().token;let s=0;const n=document.getElementById("controlTestFormModal"),a=document.getElementById("controlTestForm"),r=document.getElementById("btnCreateControlTest"),o=document.getElementById("btnCloseForm"),l=document.getElementById("btnCancelForm"),d=document.getElementById("btnAddQuestion"),c=document.getElementById("questionsContainer");r==null||r.addEventListener("click",()=>{n.style.display="flex",s=0,c.innerHTML="",h()});const u=()=>{n.style.display="none",a.reset()};o==null||o.addEventListener("click",u),l==null||l.addEventListener("click",u);function h(){var y,b;const m=s++,p=document.createElement("div");p.className="question-item",p.setAttribute("data-question-index",m),p.style.cssText="background: var(--bg-secondary); padding: 1.5rem; border-radius: 12px; border: 2px solid var(--border-color); box-shadow: 0 4px 12px rgba(0,0,0,0.05);",p.innerHTML=`
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.5rem; padding-bottom: 1rem; border-bottom: 2px solid var(--border-color);">
                <div style="display: flex; align-items: center; gap: 0.75rem;">
                    <span style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; width: 36px; height: 36px; border-radius: 8px; display: flex; align-items: center; justify-content: center; font-weight: 600; font-size: 0.9rem;">❓ ${m+1}</span>
                    <h4 style="margin: 0; font-size: 1rem;">${t==="uz"?"Savol":"Вопрос"}</h4>
                </div>
                <button type="button" class="btn-remove-question" data-index="${m}" style="background: #fee2e2; border: none; color: #dc2626; cursor: pointer; font-size: 1.5rem; width: 40px; height: 40px; border-radius: 8px; transition: all 0.2s; display: flex; align-items: center; justify-content: center;">🗑️</button>
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
                    <button type="button" class="btn-add-answer" data-index="${m}" style="padding: 0.5rem 1rem; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; border: none; border-radius: 6px; cursor: pointer; font-weight: 600; font-size: 0.85rem; transition: all 0.2s;">
                        ➕ ${t==="uz"?"Qo'sh":"Добавить"}
                    </button>
                </div>
                <div class="answers-container" style="display: grid; gap: 0.75rem; background: var(--bg-primary); padding: 1rem; border-radius: 8px; border: 1px solid var(--border-color);"></div>
            </div>
        `,c.appendChild(p);const g=p.querySelector(".answers-container"),f=()=>{const x=document.createElement("div");x.style.cssText="display: grid; grid-template-columns: 1fr 1fr 50px auto; gap: 0.75rem; align-items: start; padding: 0.75rem; background: var(--bg-secondary); border-radius: 8px; border: 1px solid var(--border-color);",x.innerHTML=`
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
            `,x.querySelector("button").addEventListener("click",v=>{v.preventDefault(),x.remove()}),g.appendChild(x)};f(),f(),(y=p.querySelector(".btn-add-answer"))==null||y.addEventListener("click",x=>{x.preventDefault(),f()}),(b=p.querySelector(".btn-remove-question"))==null||b.addEventListener("click",x=>{x.preventDefault(),p.remove()})}d==null||d.addEventListener("click",m=>{m.preventDefault(),h()}),a==null||a.addEventListener("submit",async m=>{m.preventDefault();const p=document.getElementById("testNameRu").value;document.getElementById("testNameUz").value,document.getElementById("testDescRu").value,document.getElementById("testDescUz").value;const g=parseInt(document.getElementById("testDuration").value);parseInt(document.getElementById("testMaxScore").value);const f=document.getElementById("testClass").value,y=[];if(document.querySelectorAll(".question-item").forEach(b=>{const x=b.querySelector(".question-text-ru").value,v=b.querySelector(".question-text-uz").value,w=[];b.querySelectorAll(".answers-container > div").forEach(z=>{const E=z.querySelector(".answer-text-ru").value,_=z.querySelector(".answer-text-uz").value,S=z.querySelector(".answer-correct").checked;w.push({textRu:E,textUz:_,isCorrect:S})}),y.push({questionRu:x,questionUz:v,answers:w})}),y.length===0){alert(t==="uz"?"Hech bo'lmaganda bitta savol qo'shish kerak":"Добавьте хотя бы один вопрос");return}try{const b=await fetch(`${Y}/api/tests`,{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${i}`},body:JSON.stringify({title:p,durationMinutes:g,passPercent:60,targetRole:f||"9",questions:y.map(v=>({type:v.type||"multiple_choice",text:v.questionRu,points:v.points||1,options:v.answers.map(w=>({text:w.textRu,isCorrect:w.isCorrect}))}))})});if(!b.ok){const v=await b.json();throw new Error(v.error||"Creation failed")}const x=await b.json();console.log("✅ Control test created:",x),u(),$.navigate("/teacher/control-tests")}catch(b){console.error("❌ Error creating control test:",b),alert(t==="uz"?"Xatolik: "+b.message:"Ошибка: "+b.message)}})}async function Dh(e){const t=k.getState().language,i=k.getState().token;try{if(!(await fetch(`${Y}/api/tests/${e}`,{method:"DELETE",headers:{Authorization:`Bearer ${i}`}})).ok)throw new Error("Delete failed");console.log("✅ Control test deleted"),$.navigate("/teacher/control-tests")}catch(s){console.error("❌ Error deleting control test:",s),alert(t==="uz"?"O'chirishda xatolik yuz berdi":"Ошибка при удалении")}}async function Oh(){var p;const e=k.getState().language;if(!k.getState().user){$.navigate("/login");return}O(`
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
    `,"teacher"),(p=document.getElementById("btnBackFromModuleAnalytics"))==null||p.addEventListener("click",()=>{$.navigate("/teacher/subjects")});const s=document.getElementById("teacherModuleSubjectSelect"),n=document.getElementById("teacherModuleClassSelect"),a=document.getElementById("teacherModuleAnalyticsSummary"),r=document.getElementById("teacherModuleAnalyticsEmpty"),o=g=>{r&&(r.textContent=g),hs("teacherModuleAnalyticsChart","teacherModuleAnalyticsEmpty",{labels:[],series:[]}),a&&(a.innerHTML="")},l=await C("/api/teacher/analytics/subject-modules/options");if(!l.success){I(l.error||(e==="uz"?"Ma'lumotlarni yuklashda xatolik":"Ошибка при загрузке данных"),"error"),o(e==="uz"?"Ma'lumotlarni yuklashda xatolik":"Ошибка при загрузке данных");return}const{subjects:d=[],classes:c=[],grades:u=[]}=l.data||{};if(s&&(d.length?s.innerHTML=`
                <option value="">${e==="uz"?"Tanlang":"Выберите"}</option>
                ${d.map(g=>`
                    <option value="${g.id}">${g.name}</option>
                `).join("")}
            `:(s.innerHTML=`<option value="">${e==="uz"?"Fanlar topilmadi":"Предметы не найдены"}</option>`,s.disabled=!0)),n)if(!c.length)n.innerHTML=`<option value="">${e==="uz"?"Sinflar topilmadi":"Классы не найдены"}</option>`,n.disabled=!0;else{const g=new Map;c.forEach(b=>{const x=String(b.grade||"").trim();if(!x)return;g.has(x)||g.set(x,new Set);const v=g.get(x);Array.isArray(b.sections)&&b.sections.length?b.sections.forEach(w=>v.add(w)):b.name&&v.add(b.name)});const y=(u.length?u:Array.from(g.keys())).map(b=>{const x=Array.from(g.get(String(b))||[]).sort(),v=e==="uz"?`${b}-sinflar`:`${b}-е классы`,w=`<option value="grade|${b}">${v}</option>`,z=x.map(E=>`<option value="section|${b}|${E}">${b}${E}</option>`).join("");return w+z}).join("");n.innerHTML=`
                <option value="">${e==="uz"?"Tanlang":"Выберите"}</option>
                ${y}
            `}const h=g=>{if(!g)return null;const f=g.split("|");return f[0]==="grade"&&f[1]?{grade:f[1],section:null}:f[0]==="section"&&f[1]?{grade:f[1],section:f[2]||null}:null},m=async()=>{var _,S;const g=s==null?void 0:s.value,f=n==null?void 0:n.value,y=h(f);if(!g||!(y!=null&&y.grade)){o(e==="uz"?"Fan va sinfni tanlang":"Выберите предмет и класс");return}const b=new URLSearchParams({subjectId:g,grade:y.grade});y.section&&b.set("section",y.section);const x=await C(`/api/teacher/analytics/subject-modules?${b.toString()}`);if(!x.success){o(x.error||(e==="uz"?"Ma'lumotlar mavjud emas":"Нет данных"));return}const v=((_=x.data)==null?void 0:_.modules)||[],w=v.map(T=>e==="uz"?T.nameUz||T.nameRu:T.nameRu||T.nameUz),z=v.map(T=>typeof T.averageScore=="number"?T.averageScore:null);if(z.some(T=>typeof T=="number")?hs("teacherModuleAnalyticsChart","teacherModuleAnalyticsEmpty",{labels:w,series:[{label:e==="uz"?"O'rtacha natija":"Средний результат",data:z}]}):o(e==="uz"?"Ma'lumotlar mavjud emas":"Нет данных"),a){const T=((S=x.data)==null?void 0:S.studentCount)??0,M=v.reduce((j,V)=>j+(V.attempts||0),0);a.innerHTML=`
                <div class="teacher-module-analytics__summary-card">
                    <div class="teacher-module-analytics__summary-label">${e==="uz"?"O'quvchilar":"Ученики"}</div>
                    <div class="teacher-module-analytics__summary-value">${T}</div>
                </div>
                <div class="teacher-module-analytics__summary-card">
                    <div class="teacher-module-analytics__summary-label">${e==="uz"?"Urinishlar":"Попытки"}</div>
                    <div class="teacher-module-analytics__summary-value">${M}</div>
                </div>
                <div class="teacher-module-analytics__summary-card">
                    <div class="teacher-module-analytics__summary-label">${e==="uz"?"Mavzular":"Темы"}</div>
                    <div class="teacher-module-analytics__summary-value">${v.length}</div>
                </div>
            `}};s==null||s.addEventListener("change",m),n==null||n.addEventListener("change",m)}async function qh(){var t;const e=k.getState().language;k.getState().user,k.getState().token;try{const i=await C("/api/teacher/classes"),s=i.success?i.data||[]:[],n=s.reduce((g,f)=>g+(f.studentCount||0),0),a=`
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
                            <div class="teacher-classes__summary-value">${s.length}</div>
                        </div>
                    </div>
                    <div class="teacher-classes__summary-card">
                        <div class="teacher-classes__summary-icon">👥</div>
                        <div>
                            <div class="teacher-classes__summary-label">${e==="uz"?"O'quvchilar":"Учеников"}</div>
                            <div class="teacher-classes__summary-value">${n}</div>
                        </div>
                    </div>
                </div>

                ${s.length>0?`
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
                                    ${s.flatMap(g=>{var y;if((y=g.sections)!=null&&y.length&&!g.name)return g.sections.map(b=>{const x=`${g.grade||""}${b}`;return`<option value="${g._id||g.id}::${b}">${x}</option>`});const f=g.name?`${g.grade||""}${g.name}`:g.grade||"";return[`<option value="${g._id||g.id}::${g.name||""}">${f}</option>`]}).join("")}
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

                ${s.length===0?`
                    <div class="teacher-classes__empty">
                        <div class="teacher-classes__empty-icon">👥</div>
                        <h3>${e==="uz"?"Sizga sinf biriktirilmagan":"Класс не назначен"}</h3>
                        <p>${e==="uz"?"Admin bilan bog'laning":"Обратитесь к администратору"}</p>
                    </div>
                `:`
                    <div class="teacher-classes__grid">
                        ${s.map(g=>{var b;const f=g.name?`${g.grade}${g.name}`:g.grade||"",y=(b=g.sections)!=null&&b.length?g.sections.join(", "):"";return`
                                <div class="teacher-classes__card">
                                    <div class="teacher-classes__card-header">
                                        <div>
                                            <div class="teacher-classes__card-title">${f}</div>
                                            <div class="teacher-classes__card-subtitle">${y?e==="uz"?`Seksiyalar: ${y}`:`Секции: ${y}`:e==="uz"?"Sinf":"Класс"}</div>
                                        </div>
                                        <div class="teacher-classes__card-badge">${g.studentCount||0}</div>
                                    </div>
                                    <div class="teacher-classes__card-body">
                                        <div class="teacher-classes__metric">
                                            <span>👨‍🎓 ${e==="uz"?"O'quvchilar":"Ученики"}</span>
                                            <strong>${g.studentCount||0}</strong>
                                        </div>
                                        <div class="teacher-classes__metric">
                                            <span>📌 ${e==="uz"?"Sinf kodi":"Код класса"}</span>
                                            <strong>${f||"—"}</strong>
                                        </div>
                                    </div>
                                </div>
                            `}).join("")}
                    </div>
                `}
            </div>
        `;O(a,"teacher"),(t=document.getElementById("btnBackFromClasses"))==null||t.addEventListener("click",()=>{$.navigate("/teacher/subjects")});const r=document.getElementById("teacherClassSelect"),o=document.getElementById("teacherClassAnalyticsEmpty"),l=document.getElementById("teacherClassStudentsEmpty"),d=document.getElementById("teacherClassStudentsTable"),c=document.getElementById("teacherClassStudentsBody"),u=document.getElementById("teacherClassStudentsCards"),h=g=>{l&&(l.textContent=g,l.style.display="block"),d&&(d.style.display="none"),u&&(u.innerHTML="")},m=(g,f)=>{const y=g.filter(x=>typeof x=="number");if(!y.length)return null;const b=Math.round(y.reduce((x,v)=>x+v,0)/y.length*10)/10;return{label:f,data:g.map(()=>b),dash:[6,4]}},p=async g=>{var b,x;if(!g){o&&(o.textContent=e==="uz"?"Ma'lumotlar mavjud emas":"Нет данных"),te("teacherClassAnalyticsChart","teacherClassAnalyticsEmpty",{labels:[],series:[]}),h(e==="uz"?"Sinf tanlang":"Выберите класс");return}const[f,y]=g.split("::");try{const v=await C(`/api/analytics/classes/${f}/timeline${y?`?section=${encodeURIComponent(y)}`:""}`);if(v.success){const T=Ls(v.data,e==="uz"?"O'rtacha ball":"Средний балл",{includeAllSubjects:!0}),M=m(((x=(b=T.series)==null?void 0:b[0])==null?void 0:x.data)||[],e==="uz"?"Umumiy":"Общий");te("teacherClassAnalyticsChart","teacherClassAnalyticsEmpty",T,M?[M]:[])}else o&&(o.textContent=v.error||(e==="uz"?"Ma'lumotlar mavjud emas":"Нет данных")),te("teacherClassAnalyticsChart","teacherClassAnalyticsEmpty",{labels:[],series:[]});const w=await C(`/api/classes/${f}/students${y?`?section=${encodeURIComponent(y)}`:""}`);if(!w.success){h(w.error||(e==="uz"?"O'quvchilar topilmadi":"Ученики не найдены"));return}const z=w.data||[];if(!z.length){h(e==="uz"?"O'quvchilar topilmadi":"Ученики не найдены");return}const E=[...z].sort((T,M)=>(M.averageScore||0)-(T.averageScore||0)),_=new Map(E.map((T,M)=>[T._id||T.id,M+1])),S=[...z].sort((T,M)=>{const j=`${T.lastName||""} ${T.firstName||""}`.trim(),V=`${M.lastName||""} ${M.firstName||""}`.trim();return j.localeCompare(V,"ru")});l&&(l.style.display="none"),d&&(d.style.display="block"),c&&(c.innerHTML=S.map(T=>{const M=T._id||T.id,j=_.get(M)||"-";return`
                            <tr style="border-bottom: 1px solid var(--border-color);">
                                <td style="padding: 0.85rem; color: var(--text-primary); font-weight: 500;">${T.firstName} ${T.lastName}</td>
                                <td style="padding: 0.85rem; color: var(--text-secondary); font-family: monospace;">@${T.username}</td>
                                <td style="padding: 0.85rem; text-align: right; color: var(--text-primary); font-weight: 600;">${j}</td>
                                <td style="padding: 0.85rem; text-align: right;">
                                    <button class="button button-secondary" data-student-id="${M}">${e==="uz"?"Profilni ko'rish":"Просмотр профиля"}</button>
                                </td>
                            </tr>
                        `}).join("")),u&&(u.innerHTML=S.map(T=>{const M=T._id||T.id,j=_.get(M)||"-";return`
                            <div class="card teacher-classes__student-card">
                                <div style="display: flex; justify-content: space-between; gap: 1rem; align-items: center;">
                                    <div>
                                        <div style="font-weight: 600; color: var(--text-primary);">${T.firstName} ${T.lastName}</div>
                                        <div style="color: var(--text-secondary); font-size: 0.85rem;">@${T.username}</div>
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
                        `}).join("")),document.querySelectorAll("[data-student-id]").forEach(T=>{T.addEventListener("click",()=>{const M=T.getAttribute("data-student-id");$.navigate(`/teacher/student/${M}`)})})}catch(v){console.error("Error loading class analytics:",v),h(e==="uz"?"Xatolik yuz berdi":"Произошла ошибка"),te("teacherClassAnalyticsChart","teacherClassAnalyticsEmpty",{labels:[],series:[]})}};r&&r.addEventListener("change",g=>p(g.target.value))}catch(i){console.error("❌ Error loading classes:",i),O(`
            <div class="page-header">
                <h1>${e==="uz"?"Sinflar":"Классы"}</h1>
            </div>
            <div class="card error-message">
                <p>${e==="uz"?"Xatolik yuz berdi":"Произошла ошибка"}</p>
            </div>
        `,"teacher")}}async function Rh({studentId:e}){var a;const t=k.getState().language;if(!k.getState().user){$.navigate("/login");return}O(`
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
    `,"teacher"),(a=document.getElementById("btnBackFromStudentProfile"))==null||a.addEventListener("click",()=>{$.navigate("/teacher/classes")});const n=document.getElementById("teacherStudentProfileContainer");try{const[r,o]=await Promise.all([C(`/api/teachers/students/${e}`),C(`/api/analytics/students/${e}/timeline`)]);if(!r.success||!r.data)throw new Error(r.error||"Не удалось загрузить профиль");const l=r.data||{},d={...l,firstName:l.firstName||l.first_name||"",lastName:l.lastName||l.last_name||"",username:l.username||l.login||"",grade:l.grade||l.class_grade||l.classGrade||"",className:l.className||l.class_name||l.section||""},u=(h=>h?Array.isArray(h)?[...h].filter(m=>m&&m.categories).sort((m,p)=>new Date(p.completedAt||0)-new Date(m.completedAt||0))[0]||null:h.categories?h:null:null)(d.interestTestResults);if(n.innerHTML=`
            <div class="profile-grid" style="display: grid; gap: 1.5rem;">
                <div class="card" style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white;">
                    <div style="display: flex; align-items: center; gap: 1.5rem;">
                        <div style="width: 70px; height: 70px; border-radius: 50%; background: white; display: flex; align-items: center; justify-content: center; font-size: 2rem;">
                            👤
                        </div>
                        <div>
                            <h2 style="margin: 0 0 0.4rem 0; color: white;">${d.firstName||"—"} ${d.lastName||""}</h2>
                            <div style="display: flex; gap: 1rem; flex-wrap: wrap; font-size: 0.9rem; opacity: 0.9;">
                                <span>📚 ${d.grade?`${d.grade}${d.className||""}`:"—"} ${t==="uz"?"sinf":"класс"}</span>
                                <span>👨‍🎓 @${d.username||"—"}</span>
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

                ${u?`
                    <div class="card">
                        <h3 style="margin: 0 0 1rem 0;">${t==="uz"?"Qiziqishlar profili":"Профиль интересов"}</h3>
                        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 1rem;">
                            ${Object.entries(u.categories||{}).sort((h,m)=>m[1]-h[1]).map(([h,m])=>{const g={math:{uz:"Matematika",ru:"Математика",icon:"🔢"},science:{uz:"Fan",ru:"Наука",icon:"🔬"},tech:{uz:"Texnologiya",ru:"Технологии",icon:"💻"},art:{uz:"San'at",ru:"Искусство",icon:"🎨"},social:{uz:"Ijtimoiy",ru:"Социальные",icon:"👥"},language:{uz:"Til",ru:"Языки",icon:"📚"}}[h]||{uz:h,ru:h,icon:"📊"};return`
                                    <div class="card" style="text-align: center; background: var(--bg-secondary); border: 1px solid var(--border-color);">
                                        <div style="font-size: 2rem; margin-bottom: 0.35rem;">${g.icon}</div>
                                        <div style="font-size: 1.4rem; font-weight: 700; color: var(--text-primary);">${Math.round(m)}%</div>
                                        <div style="color: var(--text-secondary); font-size: 0.9rem;">${t==="uz"?g.uz:g.ru}</div>
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
        `,o.success){const h=Ls(o.data,t==="uz"?"Natija":"Результат",{includeAllSubjects:!0});te("teacherStudentSubjectChart","teacherStudentSubjectEmpty",h)}else te("teacherStudentSubjectChart","teacherStudentSubjectEmpty",{labels:[],series:[]})}catch(r){console.error("Error loading student profile:",r),n&&(n.innerHTML=`
                <div class="card" style="text-align: center; color: var(--text-secondary);">
                    ${t==="uz"?"Ma'lumotlarni yuklashda xatolik":"Ошибка при загрузке данных"}
                </div>
            `)}}async function Fh(){var d;const e=k.getState().user,t=k.getState().language;if(!e){$.navigate("/login");return}const i=`
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
    `;O(i,"teacher"),(d=document.getElementById("btnBackFromTeacherProfile"))==null||d.addEventListener("click",()=>{$.navigate("/teacher/dashboard")});const s=await C("/api/teacher/analytics");document.getElementById("analyticsLoading").style.display="none";const n=document.getElementById("analyticsContent");if(n.style.display="block",!s.success||!s.data){n.innerHTML=`
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
    `:"";if(n.innerHTML=r+o+l,a.statsByClass&&a.statsByClass.length>0){const c=document.getElementById("classByClassChart");new yt(c,{type:"bar",data:{labels:a.statsByClass.map(u=>u.grade+(t==="uz"?"-sinf":" класс")),datasets:[{label:t==="uz"?"Bajarilgan testlar":"Пройдено тестов",data:a.statsByClass.map(u=>u.completedTests),backgroundColor:"rgba(102, 126, 234, 0.8)",borderRadius:8},{label:t==="uz"?"O'rtacha ball":"Средний балл",data:a.statsByClass.map(u=>u.averageScore),backgroundColor:"rgba(245, 158, 11, 0.8)",borderRadius:8}]},options:{responsive:!0,maintainAspectRatio:!0,plugins:{legend:{position:"bottom"}},scales:{y:{beginAtZero:!0}}}})}if(a.statsBySubject&&a.statsBySubject.length>0){const c=document.getElementById("subjectScoresChart");new yt(c,{type:"doughnut",data:{labels:a.statsBySubject.map(u=>u.subject),datasets:[{data:a.statsBySubject.map(u=>u.averageScore),backgroundColor:["rgba(102, 126, 234, 0.8)","rgba(245, 158, 11, 0.8)","rgba(239, 68, 68, 0.8)","rgba(16, 185, 129, 0.8)","rgba(99, 102, 241, 0.8)","rgba(236, 72, 153, 0.8)"],borderWidth:0}]},options:{responsive:!0,maintainAspectRatio:!0,plugins:{legend:{position:"bottom"}}}})}}async function Nh(){var a;const e=window.location.pathname.split("/"),t=e[e.length-2],i=k.getState().language;console.log("🔍 renderModuleTests called"),console.log("📍 moduleId extracted:",t),console.log("📍 Full path:",window.location.pathname),O(`
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
                    <p>${i==="uz"?"Testni yaratish va tahrirlash":"Создание и редактирование тестов"}</p>
                </div>
            </div>
            <div class="test-create__actions">
                <button type="button" class="button button-primary" id="btnCreateModuleTest">
                    <span>➕</span>
                    <span>${i==="uz"?"Test yaratish":"Создать тест"}</span>
                </button>
            </div>
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
    `,"teacher"),document.getElementById("btnBackToSubject").addEventListener("click",()=>{$.navigate("/teacher/subjects")});const n=await C(`/api/modules/${t}`);if(console.log("📦 Module API response:",n),n.success){const r=n.data;document.getElementById("moduleName").textContent=i==="uz"?r.nameUz:r.nameRu,window.currentModule=r,console.log("✅ Module loaded:",r)}else console.error("❌ Failed to load module:",n.error);console.log("⏳ Loading tests for module:",t),await Ps(t),(a=document.getElementById("btnCreateModuleTest"))==null||a.addEventListener("click",()=>{Hh(t)})}function Hh(e){var n,a,r;const t=k.getState().language,i=document.createElement("div");i.className="modal",i.innerHTML=`
        <div class="modal-content" style="max-width: 800px; max-height: 90vh; overflow-y: auto;">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.5rem;">
                <h2 style="margin: 0;">${t==="uz"?"Yangi test yaratish":"Создать новый тест"}</h2>
                <button class="modal-close" id="closeModuleTestModal">✕</button>
            </div>
            
            <form id="createModuleTestForm" style="display: grid; gap: 1rem;">
                <div>
                    <label class="form-label">${t==="uz"?"Test nomi":"Название теста"}</label>
                    <input type="text" name="title" class="form-input" required placeholder="${t==="uz"?"Test nomini kiriting":"Введите название теста"}">
                </div>
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
                    <div>
                        <label class="form-label">${t==="uz"?"Davomiyligi (daqiqa)":"Длительность (минуты)"}</label>
                        <input type="number" name="duration" class="form-input" value="30" min="5" max="180">
                    </div>
                    <div>
                        <label class="form-label">${t==="uz"?"O'tish bali (%)":"Проходной балл (%)"}</label>
                        <input type="number" name="passPercent" class="form-input" value="70" min="0" max="100">
                    </div>
                </div>

                <div class="info-message" style="padding: 0.75rem 1rem;">
                    ${t==="uz"?"Savollar test yaratilgandan keyin alohida sahifada qo'shiladi.":"Вопросы добавляются после создания теста на отдельной странице."}
                </div>
                
                <div style="display: flex; gap: 1rem; justify-content: flex-end; margin-top: 1rem;">
                    <button type="button" class="button button-secondary" id="btnCancelModuleTest">${t==="uz"?"Bekor qilish":"Отмена"}</button>
                    <button type="submit" class="button button-primary">${t==="uz"?"Saqlash":"Сохранить"}</button>
                </div>
            </form>
        </div>
    `,document.body.appendChild(i),setTimeout(()=>i.classList.add("show"),10);const s=()=>{i.classList.remove("show"),setTimeout(()=>i.remove(),300)};(n=document.getElementById("closeModuleTestModal"))==null||n.addEventListener("click",s),(a=document.getElementById("btnCancelModuleTest"))==null||a.addEventListener("click",s),(r=document.getElementById("createModuleTestForm"))==null||r.addEventListener("submit",async o=>{o.preventDefault();const l=new FormData(o.target),d=String(l.get("title")||"").trim(),c=parseInt(l.get("duration"),10),u=parseInt(l.get("passPercent"),10);if(!d)return;const h=await C(`/api/modules/${e}/tests`,{method:"POST",body:JSON.stringify({nameRu:d,nameUz:d,duration:Number.isFinite(c)?c:30,passPercent:Number.isFinite(u)?u:70,status:"published"})});h.success?(s(),await Ps(e)):await I(h.error||L("error"),"error")})}async function Ps(e){var a;const t=k.getState().language,i=document.getElementById("testsList");console.log("🔍 loadModuleTests called for moduleId:",e),i.innerHTML='<div class="loading"><div class="spinner"></div></div>';const s=await C(`/api/modules/${e}/tests`);console.log("📦 Tests API response:",s),console.log("📊 result.success:",s.success),console.log("📊 result.data:",s.data);const n=((a=s.data)==null?void 0:a.data)||s.data||[];console.log("📊 testsData:",n),console.log("📊 testsData type:",typeof n),console.log("📊 Is array?",Array.isArray(n)),console.log("📊 testsData length:",n.length),s.success&&Array.isArray(n)&&n.length>0?(console.log("✅ Found",n.length,"tests"),n.forEach(r=>{console.log(`  Test "${r.nameRu}" (ID: ${r._id}): ${r.questionsCount||0} questions`)}),i.innerHTML=n.map(r=>`
            <div class="card test-card" data-test-id="${r._id}" style="margin-bottom: 1.5rem; background: linear-gradient(135deg, var(--bg-secondary) 0%, var(--bg-tertiary) 100%); border: 1px solid var(--border-color); border-left: 4px solid var(--primary); transition: all 0.3s ease; box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);">
                <div style="display: flex; justify-content: space-between; align-items: flex-start; gap: 2rem;">
                    <div style="flex: 1;">
                        <div style="display: flex; align-items: flex-start; gap: 1rem; margin-bottom: 1rem;">
                            <div style="width: 48px; height: 48px; background: linear-gradient(135deg, var(--primary), var(--accent)); border-radius: 12px; display: flex; align-items: center; justify-content: center; font-size: 1.5rem; flex-shrink: 0;">
                                📝
                            </div>
                            <div style="flex: 1;">
                                <h4 style="margin: 0 0 0.5rem 0; font-size: 1.1rem; font-weight: 600;">${t==="uz"?r.nameUz:r.nameRu}</h4>
                                <p style="color: var(--text-muted); margin: 0; font-size: 0.9rem;">
                                    <span style="display: inline-block; margin-right: 1.5rem;">📝 ${r.questionsCount||0} ${t==="uz"?"savol":"вопросов"}</span>
                                    <span style="display: inline-block; margin-right: 1.5rem;">⏱️ ${r.duration} мин</span>
                                    <span style="display: inline-block;">🎯 ${r.maxScore} баллов</span>
                                </p>
                            </div>
                        </div>
                        <div style="display: flex; gap: 0.5rem; margin-top: 1rem;">
                            <span style="display: inline-block; padding: 6px 12px; background: ${r.status==="published"?"rgba(16, 185, 129, 0.15)":"rgba(245, 158, 11, 0.15)"}; color: ${r.status==="published"?"var(--success)":"var(--warning)"}; border-radius: 6px; font-size: 0.8rem; font-weight: 600;">
                                ${r.status==="published"?"✓ ":"◉ "}${t==="uz"?r.status==="published"?"Nashr qilingan":"Qoralama":r.status==="published"?"Опубликовано":"Черновик"}
                            </span>
                        </div>
                    </div>
                    <div style="display: flex; flex-direction: column; gap: 0.75rem; min-width: 140px;">
                        <button class="btn-edit-test button button-primary" data-test-id="${r._id}" style="width: 100%; padding: 12px 18px; font-size: 0.9rem; font-weight: 600; background: linear-gradient(135deg, var(--primary), var(--accent)); border: none; border-radius: 10px; box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3); transition: all 0.3s ease; display: flex; align-items: center; justify-content: center; gap: 0.5rem; color: white; cursor: pointer;">
                            <span>✏️</span>
                            <span>${t==="uz"?"Tahrirlash":"Редактировать"}</span>
                        </button>
                        <button class="btn-delete-test button button-danger" data-test-id="${r._id}" data-module-id="${e}" style="width: 100%; padding: 12px 18px; font-size: 0.9rem; font-weight: 600; border: none; border-radius: 10px; background: rgba(239, 68, 68, 0.2); color: var(--danger); transition: all 0.3s ease; display: flex; align-items: center; justify-content: center; gap: 0.5rem; cursor: pointer;">
                            <span>🗑️</span>
                            <span>${t==="uz"?"O'chirish":"Удалить"}</span>
                        </button>
                    </div>
                </div>
            </div>
        `).join(""),document.querySelectorAll(".btn-edit-test").forEach(r=>{r.addEventListener("click",async()=>{const o=r.getAttribute("data-test-id");console.log("🖱️ Edit button clicked for test:",o),await zr(o,e)})}),document.querySelectorAll(".btn-delete-test").forEach(r=>{r.addEventListener("click",async()=>{const o=r.getAttribute("data-test-id"),l=r.getAttribute("data-module-id");confirm(t==="uz"?"Testni o'chirishga ishonchingiz komilmi?":"Вы уверены, что хотите удалить тест?")&&(await C(`/api/tests/${o}`,{method:"DELETE"})).success&&await Ps(l)})})):(console.log("❌ No tests found or empty result. Success:",s.success,"Array?",Array.isArray(n),"Length:",n.length),i.innerHTML=`
            <div class="card" style="text-align: center; padding: 4rem 2rem; background: linear-gradient(135deg, var(--bg-secondary) 0%, var(--bg-tertiary) 100%); border: 2px dashed var(--border-color); border-radius: 12px;">
                <div style="font-size: 4rem; margin-bottom: 1rem; opacity: 0.5;">📝</div>
                <p style="color: var(--text-muted); font-size: 1.125rem; font-weight: 500; margin-bottom: 0.5rem;">
                    ${t==="uz"?"Hali testlar yaratilmagan":"Тесты еще не созданы"}
                </p>
            </div>
        `)}async function zr(e,t){const i=k.getState().language,s=document.getElementById("app");console.log("🔍 renderTestEditor called with testId:",e,"moduleId:",t),window.currentTestId=e,window.currentModuleId=t;const n=await C(`/api/tests/${e}`);console.log("📦 Test fetch result:",n);const a=n.data;console.log("📝 Test data:",a),console.log("❓ Test questions:",a==null?void 0:a.questions),s.innerHTML=`
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
                    <p>${(a==null?void 0:a.title)||""}</p>
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
    `;const r=document.getElementById("editorContainer");Array.isArray(a.questions)&&a.questions.length>0?a.questions.map(l=>{const d=ee(l.question_type||l.type),c=Array.isArray(l.options)?l.options.map(h=>h.text||h.value||""):[],u=Array.isArray(l.options)?l.options.map((h,m)=>h.is_correct||h.isCorrect?m:null).filter(h=>h!==null):[];return{type:d,text:l.text||"",options:c,correctAnswer:u.length?u[0]:null,correctAnswers:u}}).forEach(l=>{xi(r,l)}):r.innerHTML=`
            <div class="card" style="text-align: center; padding: 2rem; color: var(--text-muted);">
                <div style="font-size: 3rem; margin-bottom: 0.75rem; opacity: 0.4;">❓</div>
                <p>${i==="uz"?"Hozircha savollar yo'q":"Вопросов пока нет"}</p>
            </div>
        `,document.getElementById("addQuestionBtn").addEventListener("click",()=>{var o,l;(l=(o=r.querySelector(".card"))==null?void 0:o.textContent)!=null&&l.includes(i==="uz"?"Hozircha savollar":"Вопросов пока нет")&&(r.innerHTML=""),xi(r)}),document.getElementById("saveTestBtn").addEventListener("click",window.saveTestEditor=async()=>{console.log("💾 Save button clicked");const o=vr();if(!o.success){alert(o.error||(i==="uz"?"Xato":"Ошибка"));return}if(o.questions.some(c=>c.type==="text")){alert(i==="uz"?"Matnli savollar hozircha qo'llab-quvvatlanmaydi":"Текстовые вопросы пока не поддерживаются");return}const l=o.questions.map(c=>{const u=(c.options||[]).map((h,m)=>({text:h,isCorrect:c.type==="multiple"?(c.correctAnswers||[]).includes(m):c.correctAnswer===m}));return{type:c.type,text:c.text,points:1,options:u}});console.log("📤 Sending PUT request to /api/tests/"+window.currentTestId);const d=await C(`/api/tests/${window.currentTestId}`,{method:"PUT",body:JSON.stringify({questions:l})});console.log("📥 Update result:",d),d.success?(console.log("✅ Test saved successfully"),alert(i==="uz"?"Test muvaffaqiyatli saqlandi!":"Тест успешно сохранен!"),console.log("🔄 Navigating to /teacher/module/"+window.currentModuleId+"/tests"),$.navigate(`/teacher/module/${window.currentModuleId}/tests`)):alert(i==="uz"?"Xato: "+d.error:"Ошибка: "+d.error)})}window.deleteQuestion=function(e,t){e.closest(".question-editor").remove()};const $=new Vu;window.router=$;$.register("/",()=>{var t,i,s;const e=k.getState();e.isAuthenticated?((t=e.user)==null?void 0:t.role)==="student"?Is():((i=e.user)==null?void 0:i.role)==="teacher"?ha():((s=e.user)==null?void 0:s.role)==="admin"&&(ge!=null&&ge()||ha()):Bs()});async function Vh(){const e=k.getState(),t=e.language,i=e.token;if(!e.isAuthenticated||!e.user||e.user.role!=="admin"){console.log("❌ Unauthorized access to analytics"),$.navigate("/login");return}try{const[s,n,a]=await Promise.all([fetch(`${Y}/api/users`,{headers:{Authorization:`Bearer ${i}`}}),fetch(`${Y}/api/classes`,{headers:{Authorization:`Bearer ${i}`}}),fetch(`${Y}/api/tests`,{headers:{Authorization:`Bearer ${i}`}})]),r=await s.json(),o=await n.json(),l=await a.json(),d=r.data||[],c=o.data||[],u=l.data||[],h=d.filter(T=>T.role==="student")||[],m=d.filter(T=>T.role==="teacher")||[],p=h.length,g=m.length,f=c.length,y=u.length,b=f>0?Math.round(p/f):0,x=g>0?(p/g).toFixed(1):0,v=4;let w="",z="",E="";const _=`
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
                            <button onclick="window.router.navigate('/admin/dashboard')" class="btn-secondary" style="padding: 0.7rem 1.2rem; font-size: 0.9rem; border: 1px solid var(--border-color);">← ${L("back")}</button>
                            <span class="analytics-pill">${p} ${t==="uz"?"o'quvchi":"учеников"}</span>
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
                            <div class="stat-number" style="font-size: 2rem; font-weight: 800; color: var(--text-primary); margin-bottom: 0.5rem;">${p}</div>
                            <div style="font-size: 0.8rem; color: var(--text-secondary);">активных в системе</div>
                        </div>

                        <div class="stat-metric" style="background: var(--bg-secondary); border: 1px solid var(--border-color); border-radius: 12px; padding: 1.5rem; transition: all 0.3s;">
                            <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 1rem;">
                                <div>
                                    <p style="margin: 0; font-size: 0.85rem; color: var(--text-secondary); font-weight: 500; letter-spacing: 0.5px; text-transform: uppercase;">Учителей</p>
                                </div>
                                <div style="width: 40px; height: 40px; background: var(--bg-tertiary); border-radius: 10px; display: flex; align-items: center; justify-content: center; color: #10b981; font-size: 1.3rem;">👥</div>
                            </div>
                            <div class="stat-number" style="font-size: 2rem; font-weight: 800; color: var(--text-primary); margin-bottom: 0.5rem;">${g}</div>
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
                            <div class="stat-number" style="font-size: 2rem; font-weight: 800; color: var(--text-primary); margin-bottom: 0.5rem;">${y}</div>
                            <div style="font-size: 0.8rem; color: var(--text-secondary);">доступно</div>
                        </div>

                        <div class="stat-metric" style="background: var(--bg-secondary); border: 1px solid var(--border-color); border-radius: 12px; padding: 1.5rem; transition: all 0.3s;">
                            <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 1rem;">
                                <div>
                                    <p style="margin: 0; font-size: 0.85rem; color: var(--text-secondary); font-weight: 500; letter-spacing: 0.5px; text-transform: uppercase;">Соотношение</p>
                                </div>
                                <div style="width: 40px; height: 40px; background: var(--bg-tertiary); border-radius: 10px; display: flex; align-items: center; justify-content: center; color: #ec4899; font-size: 1.3rem;">≈</div>
                            </div>
                            <div class="stat-number" style="font-size: 2rem; font-weight: 800; color: var(--text-primary); margin-bottom: 0.5rem;">${x}</div>
                            <div style="font-size: 0.8rem; color: var(--text-secondary);">уч. на одного учит.</div>
                        </div>

                        <div class="stat-metric" style="background: var(--bg-secondary); border: 1px solid var(--border-color); border-radius: 12px; padding: 1.5rem; transition: all 0.3s;">
                            <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 1rem;">
                                <div>
                                    <p style="margin: 0; font-size: 0.85rem; color: var(--text-secondary); font-weight: 500; letter-spacing: 0.5px; text-transform: uppercase;">Среднее</p>
                                </div>
                                <div style="width: 40px; height: 40px; background: var(--bg-tertiary); border-radius: 10px; display: flex; align-items: center; justify-content: center; color: #06b6d4; font-size: 1.3rem;">∅</div>
                            </div>
                            <div class="stat-number" style="font-size: 2rem; font-weight: 800; color: var(--text-primary); margin-bottom: 0.5rem;">${b}</div>
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
                                            ${c.slice(0,v).map((T,M)=>{var q,A;const j=T.studentCount??((q=T.students)==null?void 0:q.length)??0,V=T.name?`${T.grade||""}${T.name}`:(A=T.sections)!=null&&A.length?`${T.grade||""} (${T.sections.join(", ")})`:T.grade||"—",Z=p>0?Math.round(j/p*100):0;return`<tr style="border-bottom: 1px solid var(--border-color);">
                                                    <td style="padding: 0.8rem; color: var(--text-primary); font-weight: 500;">${V}</td>
                                                    <td style="padding: 0.8rem; text-align: right; color: #3B82F6; font-weight: 600;">${j}</td>
                                                    <td style="padding: 0.8rem; text-align: right; color: var(--text-secondary);">${Z}%</td>
                                                </tr>`}).join("")}
                                        </tbody>
                                    </table>
                                    ${c.length>v?`<div style="text-align: center; padding: 1rem 0; border-top: 1px solid var(--border-color);">
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
                                ${g===0?'<div style="text-align: center; padding: 2rem; color: var(--text-secondary);">Нет данных</div>':`
                                    <table class="data-table" style="width: 100%; border-collapse: collapse;">
                                        <thead>
                                            <tr style="background: var(--bg-tertiary);">
                                                <th style="padding: 0.8rem; text-align: left; font-weight: 600; font-size: 0.8rem; color: var(--text-secondary); text-transform: uppercase; letter-spacing: 0.5px;">ФИО</th>
                                                <th style="padding: 0.8rem; text-align: left; font-weight: 600; font-size: 0.8rem; color: var(--text-secondary); text-transform: uppercase; letter-spacing: 0.5px;">Логин</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            ${m.slice(0,v).map(T=>`<tr style="border-bottom: 1px solid var(--border-color);">
                                                <td style="padding: 0.8rem; color: var(--text-primary); font-weight: 500;">${T.firstName} ${T.lastName}</td>
                                                <td style="padding: 0.8rem; color: var(--text-secondary); font-family: monospace; font-size: 0.85rem;">@${T.username}</td>
                                            </tr>`).join("")}
                                        </tbody>
                                    </table>
                                    ${m.length>v?`<div style="text-align: center; padding: 1rem 0; border-top: 1px solid var(--border-color);">
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
                                ${p===0?'<div style="text-align: center; padding: 2rem; color: var(--text-secondary);">Нет данных</div>':`
                                    <table class="data-table" style="width: 100%; border-collapse: collapse;">
                                        <thead>
                                            <tr style="background: var(--bg-tertiary);">
                                                <th style="padding: 0.8rem; text-align: left; font-weight: 600; font-size: 0.8rem; color: var(--text-secondary); text-transform: uppercase; letter-spacing: 0.5px;">ФИО</th>
                                                <th style="padding: 0.8rem; text-align: left; font-weight: 600; font-size: 0.8rem; color: var(--text-secondary); text-transform: uppercase; letter-spacing: 0.5px;">Класс</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            ${h.slice(0,v).map(T=>`<tr style="border-bottom: 1px solid var(--border-color);">
                                                <td style="padding: 0.8rem; color: var(--text-primary); font-weight: 500;">${T.firstName} ${T.lastName}</td>
                                                <td style="padding: 0.8rem; color: var(--text-secondary);">${T.grade||"—"}</td>
                                            </tr>`).join("")}
                                        </tbody>
                                    </table>
                                    ${h.length>v?`<div style="text-align: center; padding: 1rem 0; border-top: 1px solid var(--border-color);">
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
                                    <span style="font-weight: 700; color: #10b981; font-size: 1.1rem;">${d.length>0?Math.round(p/d.length*100):0}%</span>
                                </div>
                                <div style="display: flex; justify-content: space-between; align-items: center; padding: 1rem; background: var(--bg-tertiary); border-radius: 8px; border-left: 3px solid #f59e0b;">
                                    <span style="color: var(--text-secondary); font-size: 0.9rem;">Учителей</span>
                                    <span style="font-weight: 700; color: #f59e0b; font-size: 1.1rem;">${d.length>0?Math.round(g/d.length*100):0}%</span>
                                </div>
                                <div style="display: flex; justify-content: space-between; align-items: center; padding: 1rem; background: var(--bg-tertiary); border-radius: 8px; border-left: 3px solid #8b5cf6;">
                                    <span style="color: var(--text-secondary); font-size: 0.9rem;">Тесты на учителя</span>
                                    <span style="font-weight: 700; color: #8b5cf6; font-size: 1.1rem;">${g>0?Math.round(y/g):0}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;O(_,"admin");const S=T=>{var j,V,Z,q,A,P,N,R,et,pt;if(T==="classes"){const st=(Z=(V=(j=document.querySelector('[data-expand-table="classes"]'))==null?void 0:j.closest("div"))==null?void 0:V.previousElementSibling)==null?void 0:Z.querySelector("tbody");if(!st)return;st.innerHTML=c.map(U=>{var It,kt;const rt=U.studentCount??((It=U.students)==null?void 0:It.length)??0,ut=U.name?`${U.grade||""}${U.name}`:(kt=U.sections)!=null&&kt.length?`${U.grade||""} (${U.sections.join(", ")})`:U.grade||"—",ft=p>0?Math.round(rt/p*100):0;return`<tr style="border-bottom: 1px solid var(--border-color);">
                        <td style="padding: 0.8rem; color: var(--text-primary); font-weight: 500;">${ut}</td>
                        <td style="padding: 0.8rem; text-align: right; color: #3B82F6; font-weight: 600;">${rt}</td>
                        <td style="padding: 0.8rem; text-align: right; color: var(--text-secondary);">${ft}%</td>
                    </tr>`}).join("")}if(T==="teachers"){const st=(P=(A=(q=document.querySelector('[data-expand-table="teachers"]'))==null?void 0:q.closest("div"))==null?void 0:A.previousElementSibling)==null?void 0:P.querySelector("tbody");if(!st)return;st.innerHTML=m.map(U=>`<tr style="border-bottom: 1px solid var(--border-color);">
                    <td style="padding: 0.8rem; color: var(--text-primary); font-weight: 500;">${U.firstName} ${U.lastName}</td>
                    <td style="padding: 0.8rem; color: var(--text-secondary); font-family: monospace; font-size: 0.85rem;">@${U.username}</td>
                </tr>`).join("")}if(T==="students"){const st=(et=(R=(N=document.querySelector('[data-expand-table="students"]'))==null?void 0:N.closest("div"))==null?void 0:R.previousElementSibling)==null?void 0:et.querySelector("tbody");if(!st)return;st.innerHTML=h.map(U=>`<tr style="border-bottom: 1px solid var(--border-color);">
                    <td style="padding: 0.8rem; color: var(--text-primary); font-weight: 500;">${U.firstName} ${U.lastName}</td>
                    <td style="padding: 0.8rem; color: var(--text-secondary);">${U.grade||"—"}</td>
                </tr>`).join("")}const M=document.querySelector(`[data-expand-table="${T}"]`);(pt=M==null?void 0:M.closest("div"))==null||pt.remove()};document.querySelectorAll("[data-expand-table]").forEach(T=>{T.addEventListener("click",()=>{const M=T.getAttribute("data-expand-table");S(M)})})}catch(s){console.error("Error loading analytics:",s),I("Ошибка при загрузке аналитики","error"),$.navigate("/admin/dashboard")}}async function Li(e){var s;console.log("👁️ viewClassStudents called with ID:",e);const t=k.getState().language,i=k.getState().token;try{console.log("👁️ Fetching class details for:",e);const n=await fetch(`${Y}/api/classes/${e}`,{headers:{Authorization:`Bearer ${i}`}});if(console.log("👁️ Response status:",n.status),!n.ok)throw new Error("Failed to fetch class");const a=await n.json();console.log("👁️ Class data received:",a);const r=a.data||a,o=r.name?`${r.grade||""}${r.name}`:(s=r.sections)!=null&&s.length?`${r.grade||""} (${r.sections.join(", ")})`:r.grade||"Класс",l=r.students||[];console.log("👁️ Students count:",l.length);const d=`
            <style>
                .breadcrumbs {
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                    margin-bottom: 1.5rem;
                    font-size: 0.9rem;
                    color: var(--text-secondary);
                }
                .breadcrumb-link {
                    color: #3B82F6;
                    text-decoration: none;
                    transition: color 0.2s;
                }
                .breadcrumb-link:hover {
                    color: #2563EB;
                }
                .breadcrumb-separator {
                    color: var(--text-secondary);
                }
                .breadcrumb-current {
                    color: var(--text-primary);
                    font-weight: 600;
                }
                .class-details-hero {
                    background: linear-gradient(135deg, rgba(16, 185, 129, 0.16) 0%, rgba(59, 130, 246, 0.12) 100%);
                    border: 1px solid rgba(16, 185, 129, 0.28);
                    border-radius: 18px;
                    padding: 1.5rem;
                    margin-bottom: 2rem;
                }
                .class-actions-bar {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    gap: 1rem;
                    margin-bottom: 1.5rem;
                    flex-wrap: wrap;
                }
                @media (max-width: 768px) {
                    .class-actions-bar {
                        flex-direction: column;
                        align-items: stretch;
                    }
                }
            </style>
            <div style="background: var(--bg-primary); min-height: 100vh; padding: 2rem 1.5rem;">
                <div style="max-width: 1200px; margin: 0 auto;">
                    <!-- Breadcrumbs -->
                    <nav class="breadcrumbs">
                        <a href="#" onclick="event.preventDefault(); window.router.navigate('/admin/dashboard');" class="breadcrumb-link">${t==="uz"?"Bosh sahifa":"Главная"}</a>
                        <span class="breadcrumb-separator">›</span>
                        <a href="#" onclick="event.preventDefault(); window.router.navigate('/admin/classes');" class="breadcrumb-link">${t==="uz"?"Sinflar":"Классы"}</a>
                        <span class="breadcrumb-separator">›</span>
                        <span class="breadcrumb-current">${o}</span>
                    </nav>

                    <!-- Class Info Hero -->
                    <div class="class-details-hero">
                        <div style="display: flex; justify-content: space-between; align-items: flex-start; flex-wrap: wrap; gap: 1rem;">
                            <div>
                                <h1 style="margin: 0; font-size: 2.25rem; font-weight: 800; color: var(--text-primary);">${o}</h1>
                                <p style="margin: 0.5rem 0 0 0; color: var(--text-secondary); font-size: 0.95rem;">
                                    ${l.length} ${t==="uz"?"o'quvchi":"учен"}${l.length===1?t==="uz"?"":"ик":t==="uz"?"":"иков"} ${t==="uz"?"sinfda":"в классе"}
                                </p>
                            </div>
                            <button onclick="window.router.navigate('/admin/classes')" class="btn-secondary" style="padding: 0.7rem 1.2rem; font-size: 0.9rem; border: 1px solid var(--border-color);">
                                ← ${t==="uz"?"Ortga":"Назад"}
                            </button>
                        </div>
                    </div>

                    <!-- Actions Bar -->
                    <div class="class-actions-bar">
                        <div style="display: flex; gap: 0.75rem; flex-wrap: wrap; align-items: center; flex: 1;">
                            <button onclick="showAddStudentToClassModal('${e}', '${o}')" class="btn-primary" style="padding: 0.75rem 1.5rem; font-size: 0.9rem; display: flex; align-items: center; gap: 0.5rem;">
                                <span style="font-size: 1.2rem;">+</span>
                                <span>${t==="uz"?"O'quvchi qo'shish":"Добавить ученика"}</span>
                            </button>
                            
                            <!-- Search Bar -->
                            <div style="position: relative; flex: 1; min-width: 250px; max-width: 400px;">
                                <input 
                                    type="text" 
                                    id="studentSearchInput"
                                    placeholder="${t==="uz"?"Qidirish (FIO, email, login)...":"Поиск (ФИО, email, логин)..."}"
                                    style="width: 100%; padding: 0.75rem 1rem 0.75rem 2.5rem; border: 2px solid var(--border-color); border-radius: 8px; background: var(--bg-secondary); color: var(--text-primary); font-size: 0.9rem; transition: all 0.2s;"
                                    onfocus="this.style.borderColor='#3B82F6'; this.style.boxShadow='0 0 0 3px rgba(59,130,246,0.1)';"
                                    onblur="this.style.borderColor='var(--border-color)'; this.style.boxShadow='none';"
                                    oninput="filterStudents()"
                                >
                                <span style="position: absolute; left: 0.75rem; top: 50%; transform: translateY(-50%); color: var(--text-secondary); font-size: 1.1rem;">🔍</span>
                            </div>
                        </div>
                        <div style="color: var(--text-secondary); font-size: 0.9rem; white-space: nowrap;">
                            <span id="filteredCount">${l.length}</span> / <strong style="color: var(--text-primary);">${l.length}</strong>
                        </div>
                    </div>

                    <!-- Students Table -->
                    ${l.length===0?`
                        <div style="background: var(--bg-secondary); border: 1px solid var(--border-color); border-radius: 12px; padding: 3rem; text-align: center;">
                            <div style="font-size: 3rem; margin-bottom: 1rem;">📚</div>
                            <p style="color: var(--text-secondary); font-size: 1rem; margin: 0 0 1rem 0;">
                                ${t==="uz"?"Bu sinfda hali o'quvchilar yo'q":"В этом классе пока нет учеников"}
                            </p>
                            <button onclick="showAddStudentToClassModal('${e}', '${o}')" class="btn-primary" style="padding: 0.75rem 1.5rem; font-size: 0.9rem;">
                                + ${t==="uz"?"Birinchi o'quvchini qo'shish":"Добавить первого ученика"}
                            </button>
                        </div>
                    `:`
                        <div style="background: var(--bg-secondary); border-radius: 12px; border: 1px solid var(--border-color); overflow: hidden;">
                            <!-- Bulk Actions Panel (hidden by default) -->
                            <div id="bulkActionsPanel" style="display: none; background: linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(16, 185, 129, 0.1) 100%); border-bottom: 2px solid rgba(59, 130, 246, 0.3); padding: 1rem 1.5rem; align-items: center; justify-content: space-between; gap: 1rem; flex-wrap: wrap;">
                                <div style="display: flex; align-items: center; gap: 1rem;">
                                    <span style="font-weight: 600; color: var(--text-primary);">
                                        ${t==="uz"?"Tanlangan":"Выбрано"}: <span id="selectedCount" style="color: #3B82F6;">0</span>
                                    </span>
                                    <button onclick="clearSelection()" style="padding: 0.5rem 1rem; font-size: 0.85rem; background: transparent; border: 1px solid var(--border-color); border-radius: 6px; color: var(--text-primary); cursor: pointer; transition: all 0.2s; font-weight: 500;">
                                        ${t==="uz"?"Tozalash":"Снять выделение"}
                                    </button>
                                </div>
                                <div style="display: flex; gap: 0.5rem;">
                                    <button onclick="bulkRemoveStudents('${e}')" style="padding: 0.6rem 1.2rem; font-size: 0.85rem; background: #ef4444; border: none; border-radius: 6px; color: white; cursor: pointer; transition: all 0.2s; font-weight: 600; display: flex; align-items: center; gap: 0.5rem;">
                                        <span>🗑️</span>
                                        <span>${t==="uz"?"O'chirish":"Удалить выбранных"}</span>
                                    </button>
                                    <button onclick="exportSelectedToExcel()" style="padding: 0.6rem 1.2rem; font-size: 0.85rem; background: #10b981; border: none; border-radius: 6px; color: white; cursor: pointer; transition: all 0.2s; font-weight: 600; display: flex; align-items: center; gap: 0.5rem;">
                                        <span>📥</span>
                                        <span>Excel</span>
                                    </button>
                                </div>
                            </div>

                            <table style="width: 100%; border-collapse: collapse;">
                                <thead>
                                    <tr style="background: var(--bg-tertiary);">
                                        <th style="padding: 1rem; text-align: center; width: 50px;">
                                            <input type="checkbox" id="selectAllCheckbox" onchange="toggleSelectAll()" style="width: 18px; height: 18px; cursor: pointer; accent-color: #3B82F6;">
                                        </th>
                                        <th style="padding: 1rem; text-align: left; font-weight: 600; font-size: 0.85rem; color: var(--text-secondary); text-transform: uppercase; letter-spacing: 0.5px;">${t==="uz"?"F.I.SH":"ФИО"}</th>
                                        <th style="padding: 1rem; text-align: left; font-weight: 600; font-size: 0.85rem; color: var(--text-secondary); text-transform: uppercase; letter-spacing: 0.5px;">Email</th>
                                        <th style="padding: 1rem; text-align: left; font-weight: 600; font-size: 0.85rem; color: var(--text-secondary); text-transform: uppercase; letter-spacing: 0.5px;">${t==="uz"?"Login":"Логин"}</th>
                                        <th style="padding: 1rem; text-align: right; font-weight: 600; font-size: 0.85rem; color: var(--text-secondary); text-transform: uppercase; letter-spacing: 0.5px;">${t==="uz"?"Harakatlar":"Действия"}</th>
                                    </tr>
                                </thead>
                                <tbody id="studentsTableBody">
                                    ${l.map(c=>{const u=c.id||c._id,h=`${c.firstName} ${c.lastName} ${c.email||""} ${c.username||""}`.toLowerCase();return`
                                        <tr class="student-row" data-student-id="${u}" data-search="${h}" style="border-bottom: 1px solid var(--border-color); transition: background 0.2s;" onmouseenter="this.style.background='var(--bg-tertiary)'" onmouseleave="this.style.background='transparent'">
                                            <td style="padding: 1rem; text-align: center;">
                                                <input type="checkbox" class="student-checkbox" data-student-id="${u}" onchange="updateBulkPanel()" style="width: 18px; height: 18px; cursor: pointer; accent-color: #3B82F6;">
                                            </td>
                                            <td style="padding: 1rem;">
                                                <a href="#" onclick="event.preventDefault(); window.router.navigate('/admin/student/${u}');" style="font-weight: 600; color: #3B82F6; text-decoration: none; transition: color 0.2s; cursor: pointer;" onmouseenter="this.style.color='#2563EB'; this.style.textDecoration='underline';" onmouseleave="this.style.color='#3B82F6'; this.style.textDecoration='none';">
                                                    ${c.firstName} ${c.lastName}
                                                </a>
                                            </td>
                                            <td style="padding: 1rem; color: var(--text-secondary); font-size: 0.9rem;">${c.email||"—"}</td>
                                            <td style="padding: 1rem; color: var(--text-secondary); font-family: monospace; font-size: 0.85rem;">@${c.username||"—"}</td>
                                            <td style="padding: 1rem; text-align: right;">
                                                <button onclick="removeStudentFromClass('${e}', '${u}', '${c.firstName} ${c.lastName}')" 
                                                    style="padding: 0.5rem 0.9rem; font-size: 0.8rem; background: transparent; border: 1px solid #ef4444; border-radius: 6px; color: #ef4444; cursor: pointer; transition: all 0.2s; font-weight: 500;"
                                                    onmouseenter="this.style.background='#ef4444'; this.style.color='white';"
                                                    onmouseleave="this.style.background='transparent'; this.style.color='#ef4444';">
                                                    ${t==="uz"?"O'chirish":"Удалить"}
                                                </button>
                                            </td>
                                        </tr>
                                    `}).join("")}
                                </tbody>
                            </table>
                        </div>
                    `}
                </div>
            </div>
        `;O(d,"admin")}catch(n){console.error("Error loading class:",n),I(t==="uz"?"Sinf yuklashda xatolik":"Ошибка при загрузке класса","error")}}function Wh(){const e=document.getElementById("studentSearchInput"),t=document.getElementById("filteredCount"),i=document.querySelectorAll(".student-row");if(!e||!t||!i.length)return;const s=e.value.toLowerCase().trim();let n=0;i.forEach(o=>{const d=(o.getAttribute("data-search")||"").includes(s);o.style.display=d?"":"none",d&&n++}),t.textContent=n;const a=document.getElementById("studentsTableBody"),r=a==null?void 0:a.querySelector(".no-results-row");if(n===0&&s){if(!r){const o=k.getState().language,l=document.createElement("tr");l.className="no-results-row",l.innerHTML=`
                <td colspan="5" style="padding: 3rem; text-align: center;">
                    <div style="font-size: 3rem; margin-bottom: 1rem;">🔍</div>
                    <p style="color: var(--text-secondary); font-size: 1rem; margin: 0;">
                        ${o==="uz"?"Hech narsa topilmadi":"Ничего не найдено"}
                    </p>
                </td>
            `,a==null||a.appendChild(l)}}else r&&r.remove()}function Uh(){const e=document.getElementById("selectAllCheckbox"),t=document.querySelectorAll(".student-checkbox");if(!e)return;const i=e.checked;t.forEach(s=>{const n=s.closest(".student-row");n&&n.style.display!=="none"&&(s.checked=i)}),Ds()}function Ds(){const e=document.getElementById("bulkActionsPanel"),t=document.getElementById("selectedCount"),i=document.getElementById("selectAllCheckbox"),s=document.querySelectorAll(".student-checkbox:checked"),n=Array.from(document.querySelectorAll(".student-checkbox")).filter(r=>{const o=r.closest(".student-row");return o&&o.style.display!=="none"});if(!e||!t)return;const a=s.length;if(a>0?(e.style.display="flex",t.textContent=a):e.style.display="none",i){const r=n.length>0&&n.every(o=>o.checked);i.checked=r,i.indeterminate=a>0&&!r}}function Yh(){document.querySelectorAll(".student-checkbox, #selectAllCheckbox").forEach(t=>t.checked=!1),Ds()}async function Xh(e){const t=k.getState().language,i=k.getState().token,s=document.querySelectorAll(".student-checkbox:checked"),n=Array.from(s).map(r=>r.getAttribute("data-student-id"));if(n.length===0){I(t==="uz"?"Hech narsa tanlanmagan":"Ничего не выбрано","warning");return}if(await Vt(t==="uz"?`${n.length} ta o'quvchini o'chirish?`:`Удалить ${n.length} учеников из класса?`,t==="uz"?"Ushbu harakat qaytarilmaydi":"Это действие необратимо"))try{let r=0,o=0;for(const l of n)try{(await fetch(`${Y}/api/classes/${e}/students/${l}`,{method:"DELETE",headers:{Authorization:`Bearer ${i}`}})).ok?r++:o++}catch(d){console.error("Error removing student:",l,d),o++}r>0&&I(t==="uz"?`${r} ta o'quvchi o'chirildi`:`Удалено учеников: ${r}`,"success"),o>0&&I(t==="uz"?`${o} ta xatolik`:`Ошибок: ${o}`,"error"),Li(e)}catch(r){console.error("Error in bulk remove:",r),I(t==="uz"?"Xatolik yuz berdi":"Произошла ошибка","error")}}function Qh(){const e=k.getState().language,t=document.querySelectorAll(".student-checkbox:checked");if(t.length===0){I(e==="uz"?"Hech narsa tanlanmagan":"Ничего не выбрано","warning");return}const i=[];t.forEach(l=>{var c,u,h;const d=l.closest("tr");if(d){const m=d.querySelectorAll("td");i.push({name:((c=m[1])==null?void 0:c.textContent.trim())||"",email:((u=m[2])==null?void 0:u.textContent.trim())||"",username:((h=m[3])==null?void 0:h.textContent.trim())||""})}});let n=(e==="uz"?["F.I.SH","Email","Login"]:["ФИО","Email","Логин"]).join(",")+`
`;i.forEach(l=>{n+=`"${l.name}","${l.email}","${l.username}"
`});const a=new Blob(["\uFEFF"+n],{type:"text/csv;charset=utf-8;"}),r=document.createElement("a"),o=URL.createObjectURL(a);r.setAttribute("href",o),r.setAttribute("download",`students_${new Date().getTime()}.csv`),r.style.visibility="hidden",document.body.appendChild(r),r.click(),document.body.removeChild(r),I(e==="uz"?"Export qilindi":"Экспортировано успешно","success")}async function Kh(e){console.log("✏️ editClass called with ID:",e),k.getState().language;const t=k.getState().token;try{console.log("✏️ Fetching class details for:",e);const[i,s]=await Promise.all([fetch(`${Y}/api/classes/${e}`,{headers:{Authorization:`Bearer ${t}`}}),C("/api/users?role=teacher")]);if(console.log("✏️ Response status:",i.status),!i.ok)throw new Error("Failed to fetch class");const n=await i.json();console.log("✏️ Class data received:",n);const a=n.data||n,r=[],o=new Set;(s.success?s.data:[]).forEach(g=>{const f=g._id||g.id;o.has(f)||(o.add(f),r.push(g))});const l=r,d=Array.isArray(a.sections)&&a.sections.length>0&&!a.name,c=a.name||(d?a.sections[0]:""),u=`
            <div class="admin-modal-overlay">
                <div class="admin-modal-content" style="background: var(--bg-primary); border-radius: 14px; padding: 2rem; max-width: 720px; width: 100%; max-height: 90vh; overflow-y: auto; box-shadow: 0 25px 50px rgba(0,0,0,0.2); border: 1px solid var(--border-color);">
                    <h2 style="margin: 0 0 0.5rem 0; font-size: 1.5rem; font-weight: 700; color: var(--text-primary);">Редактировать класс</h2>
                    <p style="margin: 0 0 1.5rem 0; color: var(--text-secondary); font-size: 0.9rem;">Измените параметры класса и классного руководителя</p>
                    <input type="hidden" id="editClassGrade" value="${a.grade||""}">
                    <input type="hidden" id="editClassOriginalName" value="${a.name||""}">

                    ${d?`
                        <div style="margin-bottom: 1.5rem;">
                            <label style="display: block; font-weight: 600; margin-bottom: 0.6rem; color: var(--text-primary); font-size: 0.9rem;">Секция</label>
                            <select id="editClassSection">
                                ${a.sections.map(g=>`
                                    <option value="${g}" ${g===c?"selected":""}>${a.grade}${g}</option>
                                `).join("")}
                            </select>
                        </div>
                    `:`
                        <div style="margin-bottom: 1.5rem;">
                            <label style="display: block; font-weight: 600; margin-bottom: 0.6rem; color: var(--text-primary); font-size: 0.9rem;">Название</label>
                            <input type="text" id="editClassName" value="${a.name||""}" style="width: 100%; padding: 0.8rem; border: 1px solid var(--border-color); border-radius: 8px; background: var(--bg-secondary); color: var(--text-primary); font-size: 0.95rem; box-sizing: border-box; transition: all 0.2s;" onfocus="this.style.borderColor='#3B82F6'; this.style.boxShadow='0 0 0 3px rgba(59,130,246,0.1)';" onblur="this.style.borderColor='var(--border-color)'; this.style.boxShadow='none';">
                        </div>
                    `}

                    <div style="margin-bottom: 1.5rem;">
                        <label style="display: block; font-weight: 600; margin-bottom: 0.6rem; color: var(--text-primary); font-size: 0.9rem;">Классный руководитель</label>
                        <select id="editClassTeacher">
                            <option value="">-- Не выбран --</option>
                            ${l.map(g=>`<option value="${g._id||g.id}" ${a.teacherId===(g._id||g.id)?"selected":""}>${g.firstName} ${g.lastName}</option>`).join("")}
                        </select>
                    </div>

                    <div style="display: flex; gap: 0.8rem; justify-content: flex-end;">
                        <button onclick="closeModal()" style="padding: 0.75rem 1.5rem; border: 1px solid var(--border-color); background: transparent; color: var(--text-primary); border-radius: 8px; cursor: pointer; font-weight: 600; font-size: 0.9rem; transition: all 0.2s;">Отмена</button>
                        <button onclick="saveClassEdit('${e}')" style="padding: 0.75rem 1.5rem; background: #3B82F6; color: white; border: none; border-radius: 8px; cursor: pointer; font-weight: 600; font-size: 0.9rem; transition: all 0.2s;">Сохранить</button>
                    </div>
                </div>
            </div>
        `;document.body.insertAdjacentHTML("beforeend",u);const h=document.getElementById("editClassSection"),m=document.getElementById("editClassStudents"),p=()=>(h==null?void 0:h.value)||a.name||""}catch(i){console.error("Error loading class:",i),I("Ошибка при загрузке класса","error")}}async function Jh(e){var a;const t=k.getState().token,i=document.getElementById("editClassName"),s=i?i.value.trim():"",n=((a=document.getElementById("editClassTeacher"))==null?void 0:a.value)||null;try{const r={};if(s&&(r.name=s),n!==null&&(r.teacherId=n||null),!(await fetch(`${Y}/api/classes/${e}`,{method:"PUT",headers:{"Content-Type":"application/json",Authorization:`Bearer ${t}`},body:JSON.stringify(r)})).ok)throw new Error("Failed to update class");I("Класс успешно обновлен","success"),Bi(),Os()}catch(r){console.error("Error updating class:",r),I("Ошибка при обновлении класса","error")}}async function Gh(e){console.log("📚 deleteClass called with ID:",e,"Type:",typeof e);const t=k.getState().token;if(await Vt("Удалить класс?","Это действие необратимо"))try{const s=`${Y}/api/classes/${e}`;if(console.log("📚 DELETE request to:",s),!(await fetch(s,{method:"DELETE",headers:{Authorization:`Bearer ${t}`}})).ok)throw new Error("Failed to delete class");I("Класс удален","success"),Os()}catch(s){console.error("Error deleting class:",s),I("Ошибка при удалении класса","error")}}async function Zh(e,t){console.log("🎓 showAddStudentToClassModal called with classId:",e,"classLabel:",t);const i=k.getState().language,s=document.createElement("div");s.className="modal",s.innerHTML=`
        <div class="modal-content" style="max-width: 500px;">
            <div style="background: linear-gradient(135deg, rgba(16, 185, 129, 0.2) 0%, rgba(59, 130, 246, 0.15) 100%); border: 1px solid rgba(16, 185, 129, 0.35); color: var(--text-primary); padding: 1.25rem; border-radius: 14px; margin-bottom: 1.25rem;">
                <div style="font-size: 0.85rem; color: var(--text-secondary); margin-bottom: 0.4rem;">${t}</div>
                <h2 style="margin: 0; font-size: 1.35rem; font-weight: 800;">${i==="uz"?"O'quvchi qo'shish":"Добавить ученика"}</h2>
                <p style="margin: 0.4rem 0 0 0; color: var(--text-secondary); font-size: 0.9rem;">${i==="uz"?"Yangi o'quvchi yaratish":"Создать нового ученика в этом классе"}</p>
            </div>
            
            <form id="addStudentToClassForm" class="add-user-form" style="display: flex; flex-direction: column; gap: 1rem;">
                <div id="addStudentAlert" class="inline-alert" style="display: none;"></div>
                
                <div class="add-user-row" style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
                    <div>
                        <label style="display: block; font-weight: 600; margin-bottom: 0.4rem; font-size: 0.9rem;">
                            ${i==="uz"?"Ism":"Имя"} <span style="color: #ef4444;">*</span>
                        </label>
                        <input id="studentFirstName" type="text" placeholder="${i==="uz"?"Ism":"Имя"}" style="width: 100%; padding: 0.75rem; border: 2px solid var(--border-color); border-radius: 8px; background: var(--bg-secondary); color: var(--text-primary);" required>
                    </div>
                    <div>
                        <label style="display: block; font-weight: 600; margin-bottom: 0.4rem; font-size: 0.9rem;">
                            ${i==="uz"?"Familiya":"Фамилия"} <span style="color: #ef4444;">*</span>
                        </label>
                        <input id="studentLastName" type="text" placeholder="${i==="uz"?"Familiya":"Фамилия"}" style="width: 100%; padding: 0.75rem; border: 2px solid var(--border-color); border-radius: 8px; background: var(--bg-secondary); color: var(--text-primary);" required>
                    </div>
                </div>
                
                <div>
                    <label style="display: block; font-weight: 600; margin-bottom: 0.4rem; font-size: 0.9rem;">
                        Email <span style="color: #ef4444;">*</span>
                    </label>
                    <input id="studentEmail" type="email" placeholder="student@example.com" style="width: 100%; padding: 0.75rem; border: 2px solid var(--border-color); border-radius: 8px; background: var(--bg-secondary); color: var(--text-primary);" required>
                </div>
                
                <div>
                    <label style="display: block; font-weight: 600; margin-bottom: 0.4rem; font-size: 0.9rem;">
                        ${i==="uz"?"Telefon":"Телефон"}
                    </label>
                    <input id="studentPhone" type="tel" placeholder="+998901234567" style="width: 100%; padding: 0.75rem; border: 2px solid var(--border-color); border-radius: 8px; background: var(--bg-secondary); color: var(--text-primary);">
                </div>
                
                <div style="background: rgba(16, 185, 129, 0.1); border: 1px solid rgba(16, 185, 129, 0.3); padding: 0.9rem; border-radius: 8px; font-size: 0.85rem; color: #10b981;">
                    ✅ ${i==="uz"?`Ushbu o'quvchi avtomatik ravishda ${t} sinfiga qo'shiladi`:`Ученик будет автоматически добавлен в класс ${t}`}
                </div>
                
                <div style="background: rgba(59, 130, 246, 0.1); border: 1px solid rgba(59, 130, 246, 0.3); padding: 0.9rem; border-radius: 8px; font-size: 0.85rem; color: #3b82f6;">
                    ${i==="uz"?"✨ Login avtomatik yaratiladi. Vaqtinchalik parol emailga yuboriladi.":"✨ Логин создается автоматически. Временный пароль будет отправлен на email."}
                </div>
                
                <div style="display: flex; gap: 1rem; margin-top: 1rem;">
                    <button type="button" class="button button-secondary" id="closeAddStudentBtn" style="flex: 1;">
                        ${i==="uz"?"Bekor qilish":"Отмена"}
                    </button>
                    <button type="submit" class="button button-primary" style="flex: 1; background: #10b981;">
                        ✅ ${i==="uz"?"Qo'shish":"Добавить"}
                    </button>
                </div>
            </form>
        </div>
    `,document.body.appendChild(s),setTimeout(()=>s.classList.add("show"),10);const n=document.getElementById("addStudentAlert"),a=(r,o="info")=>{if(!n)return;const l={success:"✅",error:"❌",warning:"⚠️",info:"ℹ️"};n.className=`inline-alert inline-alert--${o}`,n.innerHTML=`
            <span style="font-size: 1.1rem;">${l[o]||l.info}</span>
            <span>${r}</span>
        `,n.style.display="flex"};document.getElementById("closeAddStudentBtn").addEventListener("click",()=>{s.classList.remove("show"),setTimeout(()=>s.remove(),300)}),document.getElementById("addStudentToClassForm").addEventListener("submit",async r=>{r.preventDefault();const o=document.getElementById("studentFirstName").value.trim(),l=document.getElementById("studentLastName").value.trim(),d=document.getElementById("studentEmail").value.trim(),c=document.getElementById("studentPhone").value.trim();if(!o||!l||!d){a(i==="uz"?"Barcha majburiy maydonlarni to'ldiring":"Заполните все обязательные поля","warning");return}const u={role:"student",firstName:o,lastName:l,email:d,phone:c||null,classId:e};try{const h=await C("/api/users/register",{method:"POST",body:JSON.stringify(u)});if(h.success){const m=document.createElement("div");m.className="modal show",m.style.zIndex="10001";const p=h.data.emailSent,g=h.data.username,f=h.data.email;m.innerHTML=`
                    <div class="modal-content" style="max-width: 500px; background: linear-gradient(135deg, #10b981 0%, #059669 100%); color: white;">
                        <div style="text-align: center; padding: 2rem;">
                            <div style="font-size: 3rem; margin-bottom: 1rem;">${p?"✅":"⚠️"}</div>
                            <h2 style="margin: 0 0 1rem 0; font-size: 1.5rem;">
                                ${i==="uz"?"O'quvchi qo'shildi":"Ученик добавлен"}
                            </h2>
                            
                            <div style="background: rgba(255,255,255,0.15); border-radius: 12px; padding: 1.5rem; margin-bottom: 1rem; backdrop-filter: blur(10px);">
                                <div style="margin-bottom: 1rem;">
                                    <div style="font-size: 0.85rem; opacity: 0.8; margin-bottom: 0.3rem;">
                                        ${i==="uz"?"Sinf":"Класс"}:
                                    </div>
                                    <div style="font-size: 1.3rem; font-weight: 700;">${t}</div>
                                </div>
                                <div style="margin-bottom: 1rem;">
                                    <div style="font-size: 0.85rem; opacity: 0.8; margin-bottom: 0.3rem;">
                                        ${i==="uz"?"Login":"Логин"}:
                                    </div>
                                    <div style="font-size: 1.1rem; font-weight: 600; font-family: monospace;">${g}</div>
                                </div>
                                <div>
                                    <div style="font-size: 0.85rem; opacity: 0.8; margin-bottom: 0.3rem;">Email:</div>
                                    <div style="font-size: 1rem; font-weight: 500;">${f}</div>
                                </div>
                            </div>
                            
                            ${p?`
                                <div style="background: rgba(255,255,255,0.1); border-radius: 8px; padding: 1rem; margin-bottom: 1.5rem; font-size: 0.85rem; text-align: left;">
                                    <div style="font-weight: 600; margin-bottom: 0.5rem;">📧 ${i==="uz"?"Email yuborildi":"Email отправлен"}</div>
                                    <p style="margin: 0; line-height: 1.6;">
                                        ${i==="uz"?"Vaqtinchalik parol emailga yuborildi":"Временный пароль отправлен на email"}
                                    </p>
                                </div>
                            `:`
                                <div style="background: rgba(239, 68, 68, 0.2); border-radius: 8px; padding: 1rem; margin-bottom: 1rem; font-size: 0.85rem;">
                                    <div style="font-weight: 600; margin-bottom: 0.5rem;">⚠️ ${i==="uz"?"Email yuborilmadi":"Email не отправлен"}</div>
                                    ${h.data.otp?`
                                        <div style="margin-top: 0.5rem;">
                                            <div style="font-size: 0.85rem; opacity: 0.8; margin-bottom: 0.3rem;">OTP:</div>
                                            <div style="font-size: 1.3rem; font-weight: 700; font-family: monospace; letter-spacing: 2px; background: rgba(255,255,255,0.2); padding: 0.5rem; border-radius: 6px;">
                                                ${h.data.otp}
                                            </div>
                                        </div>
                                    `:""}
                                </div>
                            `}
                            
                            <button onclick="this.closest('.modal').remove(); window.viewClassStudents('${e}')" style="width: 100%; padding: 0.9rem; background: white; color: #059669; border: none; border-radius: 8px; font-weight: 700; font-size: 1rem; cursor: pointer; transition: all 0.2s;">
                                ${i==="uz"?"Yopish":"Закрыть"}
                            </button>
                        </div>
                    </div>
                `,document.body.appendChild(m),s.classList.remove("show"),setTimeout(()=>{s.remove(),Li(e)},300)}else a(h.error||(i==="uz"?"Xatolik yuz berdi":"Произошла ошибка"),"error")}catch(h){console.error("Error creating student:",h),a(i==="uz"?"Xatolik yuz berdi":"Произошла ошибка","error")}})}async function tg(e,t,i){const s=k.getState().language,n=k.getState().token;if(await Vt(s==="uz"?"O'quvchini o'chirish?":"Удалить ученика из класса?",`${i}`))try{const r=await fetch(`${Y}/api/classes/${e}/students/${t}`,{method:"DELETE",headers:{Authorization:`Bearer ${n}`}});if(!r.ok){const o=await r.json();throw new Error(o.error||"Failed to remove student")}I(s==="uz"?"O'quvchi o'chirildi":"Ученик удален из класса","success"),Li(e)}catch(r){console.error("Error removing student from class:",r),I(s==="uz"?"Xatolik yuz berdi":"Ошибка при удалении ученика","error")}}async function Os(){var s;const e=k.getState(),t=e.language,i=e.token;if(!e.isAuthenticated||!e.user||e.user.role!=="admin"){console.log("❌ Unauthorized access to classes"),$.navigate("/login");return}try{const n=await fetch(`${Y}/api/classes`,{headers:{Authorization:`Bearer ${i}`}});if(!n.ok)throw new Error("Failed to fetch classes");const r=(await n.json()).data||[];console.log("📚 Classes from API:",r),r.length>0&&console.log("📚 First class structure:",r[0]);const o=`
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
                            <button onclick="window.router.navigate('/admin/dashboard')" class="btn-secondary" style="padding: 0.7rem 1.2rem; font-size: 0.9rem; border: 1px solid var(--border-color);">← ${L("back")}</button>
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
                                    ${r.map(l=>{var p,g,f,y;const d=l.studentCount??((p=l.students)==null?void 0:p.length)??0,c=l.createdAt?new Date(l.createdAt).toLocaleDateString("ru-RU",{year:"numeric",month:"short",day:"numeric"}):"—",u=l._id||l.id,h=l.name?`${l.grade||""}${l.name}`:(g=l.sections)!=null&&g.length?`${l.grade||""} (${l.sections.join(", ")})`:l.grade||"—";let m="—";return l.teacher&&l.teacher.fullName?m=l.teacher.fullName.trim():(f=l.teacher)!=null&&f.firstName&&((y=l.teacher)!=null&&y.lastName)?m=`${l.teacher.firstName} ${l.teacher.lastName}`.trim():l.teacherFirstName&&l.teacherLastName&&(m=`${l.teacherFirstName} ${l.teacherLastName}`.trim()),`
                                        <tr style="border-bottom: 1px solid var(--border-color); transition: background 0.2s;">
                                            <td style="padding: 1rem; font-weight: 600; color: var(--text-primary);">${h}</td>
                                            <td style="padding: 1rem; text-align: center; color: #3B82F6; font-weight: 600;">${d}</td>
                                            <td style="padding: 1rem; text-align: center; color: var(--text-secondary); font-size: 0.9rem; font-weight: 500;">${m}</td>
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
        `;O(o,"admin"),(s=document.getElementById("btnAddClass"))==null||s.addEventListener("click",kr)}catch(n){console.error("Error loading classes:",n),I("Ошибка при загрузке классов","error"),$.navigate("/admin/dashboard")}}function kr(){const e=k.getState().language,t=k.getState().token,i=document.createElement("div");i.className="admin-modal-overlay",i.innerHTML=`
        <div class="admin-modal-content" style="background: var(--bg-primary); border-radius: 14px; padding: 2rem; max-width: 500px; width: 100%; box-shadow: 0 25px 50px rgba(0,0,0,0.2); border: 1px solid var(--border-color);">
            <h2 style="margin: 0 0 0.5rem 0; font-size: 1.5rem; font-weight: 700; color: var(--text-primary);">
                ${e==="uz"?"Yangi sinf":"Новый класс"}
            </h2>
            <p style="margin: 0 0 1.5rem 0; color: var(--text-secondary); font-size: 0.9rem;">
                ${e==="uz"?"Tizimda yangi sinf yarating":"Создайте новый класс в системе"}
            </p>
            
            <!-- Validation Alert -->
            <div id="classValidationAlert" style="display: none; padding: 0.75rem 1rem; border-radius: 8px; margin-bottom: 1rem; font-size: 0.9rem; font-weight: 500;"></div>
            
            <div style="margin-bottom: 1.5rem;">
                <label style="display: block; font-weight: 600; margin-bottom: 0.6rem; color: var(--text-primary); font-size: 0.9rem;">
                    📚 ${e==="uz"?"Sinf raqami":"Номер класса"} <span style="color: #ef4444;">*</span>
                </label>
                <input 
                    type="text" 
                    id="newClassGrade" 
                    placeholder="1, 2, 3, 4..." 
                    style="width: 100%; padding: 0.8rem; border: 2px solid var(--border-color); border-radius: 8px; background: var(--bg-secondary); color: var(--text-primary); font-size: 0.95rem; box-sizing: border-box; transition: all 0.2s;" 
                    onfocus="this.style.borderColor='#3B82F6'; this.style.boxShadow='0 0 0 3px rgba(59,130,246,0.1)'; hideValidationError();" 
                    onblur="this.style.borderColor='var(--border-color)'; this.style.boxShadow='none';"
                    oninput="validateClassGrade(this)">
                <div class="input-hint" style="margin-top: 0.4rem; font-size: 0.8rem; color: var(--text-secondary); display: flex; align-items: center; gap: 0.3rem;">
                    💡 ${e==="uz"?"Faqat raqam kiriting (1-11)":"Только цифры (1-11)"}
                </div>
            </div>

            <div style="margin-bottom: 1.5rem;">
                <label style="display: block; font-weight: 600; margin-bottom: 0.6rem; color: var(--text-primary); font-size: 0.9rem;">
                    🔤 ${e==="uz"?"Sinf harfi":"Буква класса"} <span style="color: #ef4444;">*</span>
                </label>
                <input 
                    type="text" 
                    id="newClassName" 
                    placeholder="${e==="uz"?"A, B, V, G...":"А, Б, В, Г..."}" 
                    maxlength="1"
                    style="width: 100%; padding: 0.8rem; border: 2px solid var(--border-color); border-radius: 8px; background: var(--bg-secondary); color: var(--text-primary); font-size: 0.95rem; box-sizing: border-box; transition: all 0.2s;" 
                    onfocus="this.style.borderColor='#3B82F6'; this.style.boxShadow='0 0 0 3px rgba(59,130,246,0.1)'; hideValidationError();" 
                    onblur="this.style.borderColor='var(--border-color)'; this.style.boxShadow='none';"
                    oninput="validateClassName(this)">
                <div class="input-hint" style="margin-top: 0.4rem; font-size: 0.8rem; color: var(--text-secondary); display: flex; align-items: center; gap: 0.3rem;">
                    💡 ${e==="uz"?"Bitta harf (A, B, V)":"Одна буква (А, Б, В)"}
                </div>
            </div>

            <div style="margin-bottom: 1.5rem;">
                <label style="display: block; font-weight: 600; margin-bottom: 0.6rem; color: var(--text-primary); font-size: 0.9rem;">
                    👨‍🏫 ${e==="uz"?"Sinf rahbari (ixtiyoriy)":"Классный руководитель (опционально)"}
                </label>
                <select id="newClassTeacher" style="width: 100%; padding: 0.8rem; border: 2px solid var(--border-color); border-radius: 8px; background: var(--bg-secondary); color: var(--text-primary); font-size: 0.95rem; box-sizing: border-box; transition: all 0.2s;">
                    <option value="">⏳ ${e==="uz"?"O'qituvchilar yuklanmoqda...":"Загрузка учителей..."}</option>
                </select>
                <div class="input-hint" style="margin-top: 0.4rem; font-size: 0.8rem; color: var(--text-secondary); display: flex; align-items: center; gap: 0.3rem;">
                    ℹ️ ${e==="uz"?"Keyinroq tayinlashingiz mumkin":"Можно назначить позже"}
                </div>
            </div>

            <div style="display: flex; gap: 0.8rem; justify-content: flex-end; margin-top: 2rem;">
                <button onclick="closeModal()" style="padding: 0.75rem 1.5rem; border: 1px solid var(--border-color); background: transparent; color: var(--text-primary); border-radius: 8px; cursor: pointer; font-weight: 600; font-size: 0.9rem; transition: all 0.2s;">
                    ${e==="uz"?"Bekor qilish":"Отмена"}
                </button>
                <button id="createClassBtn" onclick="createClass()" style="padding: 0.75rem 1.5rem; background: #3B82F6; color: white; border: none; border-radius: 8px; cursor: pointer; font-weight: 600; font-size: 0.9rem; transition: all 0.2s; display: flex; align-items: center; gap: 0.5rem;">
                    <span>✨</span>
                    <span>${e==="uz"?"Yaratish":"Создать"}</span>
                </button>
            </div>
        </div>
    `,i.addEventListener("click",s=>{s.target===i&&Bi()}),document.body.appendChild(i),ng(t)}function eg(e){const t=e.value.trim();e.value=t.replace(/[^0-9]/g,"");const i=parseInt(e.value);e.value&&(i<1||i>11)?(jt("Номер класса должен быть от 1 до 11","warning"),e.style.borderColor="#f59e0b"):e.value&&(e.style.borderColor="#10b981")}function ig(e){const i=e.value.trim().toUpperCase().replace(/[^A-ZА-Я]/g,"");e.value=i.substring(0,1),e.value&&(e.style.borderColor="#10b981")}function jt(e,t="error"){const i=document.getElementById("classValidationAlert");if(!i)return;const s={error:{bg:"rgba(239, 68, 68, 0.1)",border:"#ef4444",text:"#ef4444",icon:"❌"},warning:{bg:"rgba(245, 158, 11, 0.1)",border:"#f59e0b",text:"#f59e0b",icon:"⚠️"},success:{bg:"rgba(16, 185, 129, 0.1)",border:"#10b981",text:"#10b981",icon:"✅"}},n=s[t]||s.error;i.style.display="flex",i.style.alignItems="center",i.style.gap="0.5rem",i.style.background=n.bg,i.style.border=`1px solid ${n.border}`,i.style.color=n.text,i.innerHTML=`
        <span style="font-size: 1.1rem;">${n.icon}</span>
        <span>${e}</span>
    `}function sg(){const e=document.getElementById("classValidationAlert");e&&(e.style.display="none")}async function ng(e){try{console.log("📚 Loading teachers for modal...");const t=await fetch(`${Y}/api/users?role=teacher`,{headers:{Authorization:`Bearer ${e}`}});let i=[];t.ok?(i=(await t.json()).data||[],console.log("📚 Teachers loaded:",i.length)):console.error("Failed to load teachers:",t.status);const s=document.getElementById("newClassTeacher");s&&(s.innerHTML='<option value="">-- Не выбран --</option>',i.forEach(n=>{const a=document.createElement("option");a.value=n._id||n.id,a.textContent=`${n.firstName} ${n.lastName}`,s.appendChild(a)}))}catch(t){console.error("Error loading teachers:",t);const i=document.getElementById("newClassTeacher");i&&(i.innerHTML='<option value="">-- Ошибка загрузки --</option>')}}async function ag(){var c,u;console.log("📚 Creating class...");const e=k.getState().language,t=k.getState().token,i=document.getElementById("newClassGrade").value.trim(),s=document.getElementById("newClassName").value.trim();let n=i,a=s;const r=document.getElementById("newClassTeacher").value.trim(),o=document.getElementById("createClassBtn");if(o&&(o.disabled=!0),!i&&!s){jt(e==="uz"?"Sinf raqami va harfini kiriting":"Укажите номер класса и букву","error"),o&&(o.disabled=!1);return}const l=!a&&i.match(/^(\d+)\s*([A-Za-zА-Яа-я])$/);if(l&&(n=l[1],a=l[2]),n=n.replace(/[^0-9]/g,""),a=a.replace(/\s+/g,"").toUpperCase(),!n){jt(e==="uz"?"Sinf raqamini kiriting":"Укажите номер класса","error"),document.getElementById("newClassGrade").focus(),o&&(o.disabled=!1);return}if(!a){jt(e==="uz"?"Sinf harfini kiriting":"Укажите букву класса","error"),document.getElementById("newClassName").focus(),o&&(o.disabled=!1);return}const d=parseInt(n);if(d<1||d>11){jt(e==="uz"?"Sinf raqami 1 dan 11 gacha bo'lishi kerak":"Номер класса должен быть от 1 до 11","error"),document.getElementById("newClassGrade").focus(),o&&(o.disabled=!1);return}if(!/^[A-ZА-Я]$/.test(a)){jt(e==="uz"?"Sinf harfi faqat bitta harf bo'lishi kerak":"Буква класса должна быть одной буквой","error"),document.getElementById("newClassName").focus(),o&&(o.disabled=!1);return}try{const h={grade:n,name:a};r&&(h.teacherId=r),console.log("📚 Sending class data:",h),o&&(o.innerHTML="<span>⏳</span><span>"+(e==="uz"?"Yaratilmoqda...":"Создание...")+"</span>");const m=await fetch(`${Y}/api/classes`,{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${t}`},body:JSON.stringify(h)});console.log("📚 Response status:",m.status);const p=await m.json();if(console.log("📚 Response data:",p),!m.ok)throw new Error(p.error||"Failed to create class");console.log("✅ Class created successfully");const g=((c=p.data)==null?void 0:c.id)||((u=p.data)==null?void 0:u._id),f=`${n}${a}`;Bi(),$r(g,f)}catch(h){console.error("❌ Error creating class:",h),jt(e==="uz"?"Xatolik: "+h.message:"Ошибка: "+h.message,"error")}finally{o&&(o.disabled=!1,o.innerHTML="<span>✨</span><span>"+(e==="uz"?"Yaratish":"Создать")+"</span>")}}function $r(e,t){const i=k.getState().language,s=document.createElement("div");s.className="modal show",s.style.zIndex="10001",s.innerHTML=`
        <div class="modal-content" style="max-width: 550px; background: linear-gradient(135deg, #10b981 0%, #059669 100%); color: white;">
            <div style="text-align: center; padding: 2.5rem 2rem;">
                <div style="font-size: 4rem; margin-bottom: 1rem; animation: bounceIn 0.6s;">🎉</div>
                <h2 style="margin: 0 0 0.5rem 0; font-size: 1.75rem; font-weight: 800;">
                    ${i==="uz"?"Sinf yaratildi!":"Класс создан!"}
                </h2>
                <div style="background: rgba(255,255,255,0.2); border-radius: 12px; padding: 1rem; margin: 1rem 0 1.5rem 0; backdrop-filter: blur(10px);">
                    <div style="font-size: 2rem; font-weight: 700; letter-spacing: 1px;">${t}</div>
                </div>
                
                <p style="margin: 0 0 2rem 0; font-size: 1rem; line-height: 1.6; opacity: 0.95;">
                    ${i==="uz"?"Endi siz darhol o'quvchilarni qo'shishingiz yoki keyinroq qilishingiz mumkin":"Теперь вы можете сразу добавить учеников или сделать это позже"}
                </p>
                
                <div style="display: flex; flex-direction: column; gap: 0.75rem;">
                    <button 
                        onclick="window.closeModal(); window.showAddStudentToClassModal('${e}', '${t}')"
                        style="width: 100%; padding: 1rem 1.5rem; background: white; color: #059669; border: none; border-radius: 10px; font-weight: 700; font-size: 1rem; cursor: pointer; transition: all 0.2s; display: flex; align-items: center; justify-content: center; gap: 0.75rem; box-shadow: 0 4px 12px rgba(0,0,0,0.15);"
                        onmouseover="this.style.transform='translateY(-2px)'; this.style.boxShadow='0 6px 16px rgba(0,0,0,0.2)'"
                        onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 4px 12px rgba(0,0,0,0.15)'">
                        <span style="font-size: 1.3rem;">👨‍🎓</span>
                        <span>${i==="uz"?"O'quvchi qo'shish":"Добавить учеников"}</span>
                    </button>
                    
                    <button 
                        onclick="window.closeModal(); window.viewClassStudents('${e}')"
                        style="width: 100%; padding: 1rem 1.5rem; background: rgba(255,255,255,0.15); color: white; border: 2px solid rgba(255,255,255,0.3); border-radius: 10px; font-weight: 600; font-size: 0.95rem; cursor: pointer; transition: all 0.2s; backdrop-filter: blur(10px);"
                        onmouseover="this.style.background='rgba(255,255,255,0.25)'"
                        onmouseout="this.style.background='rgba(255,255,255,0.15)'">
                        ${i==="uz"?"Sinfga o'tish":"Перейти к классу"}
                    </button>
                    
                    <button 
                        onclick="window.closeModal(); window.renderAdminClasses()"
                        style="width: 100%; padding: 0.9rem 1.5rem; background: transparent; color: white; border: 1px solid rgba(255,255,255,0.3); border-radius: 10px; font-weight: 500; font-size: 0.9rem; cursor: pointer; transition: all 0.2s;"
                        onmouseover="this.style.background='rgba(255,255,255,0.1)'"
                        onmouseout="this.style.background='transparent'">
                        ${i==="uz"?"Keyinroq":"Позже"}
                    </button>
                </div>
            </div>
        </div>
    `,document.body.appendChild(s);const n=document.createElement("style");n.textContent=`
        @keyframes bounceIn {
            0% { transform: scale(0.3); opacity: 0; }
            50% { transform: scale(1.05); }
            70% { transform: scale(0.9); }
            100% { transform: scale(1); opacity: 1; }
        }
    `,document.head.appendChild(n)}function Bi(){console.log("🚪 closeModal called");const e=document.querySelectorAll(".admin-modal-overlay, .custom-modal-overlay, .modal");console.log("🚪 Modal elements found:",e.length),e.forEach(t=>t.remove())}$.register("/login",Bs);$.register("/role-selection",Ci);$.register("/change-password",ur);$.register("/student/dashboard",Is);$.register("/student/profile",gr);$.register("/login",Bs);$.register("/role-selection",Ci);$.register("/change-password",ur);$.register("/student/dashboard",Is);$.register("/student/profile",gr);$.register("/student/subjects",Qu);$.register("/student/subject-modules/:subjectId",Ju);$.register("/student/take-test/:testId",Gu);$.register("/student/test-results/:resultId",Zu);$.register("/student/test-history",th);$.register("/student/interest-test",kh);$.register("/student/control-tests",_h);$.register("/student/take-control-test/:testId",({testId:e})=>Sh({testId:e}));$.register("/teacher/subjects",Th);$.register("/teacher/control-tests",jh);$.register("/teacher/classes",qh);$.register("/teacher/profile",Fh);$.register("/teacher/subject-analytics",Oh);$.register("/teacher/tests",bh);$.register("/teacher/test/:id",wh);$.register("/teacher/student/:studentId",({studentId:e})=>Rh({studentId:e}));$.register("/teacher/subject/:subjectId",Eh);$.register("/teacher/module/:moduleId/tests",Nh);$.register("/teacher/module/:moduleId/edit-test/:testId",zr);$.register("/admin/dashboard",ge);$.register("/admin/analytics",Vh);$.register("/admin/classes",Os);$.register("/admin/teachers",eh);$.register("/admin/subjects",Ai);$.register("/admin/teacher-tests",dh);$.register("/admin/teacher-tests/:testId",({testId:e})=>gh({testId:e}));$.register("/admin/student/:studentId",({studentId:e})=>br(e));$.register("/admin/teacher/:teacherId",({teacherId:e})=>oh(e));function rg(e){document.querySelectorAll(".profile-tab").forEach(t=>t.classList.remove("active")),document.querySelectorAll(".tab-content").forEach(t=>t.classList.remove("active")),event.target.classList.add("active"),document.getElementById(`tab-${e}`).classList.add("active"),e==="subjects"&&og()}async function og(){var i;window.location.pathname.split("/").pop();const e=document.getElementById("subjects-list"),t=((i=k.getState().user)==null?void 0:i.language)||"ru";try{const s=await C("/api/subjects");if(!s||s.length===0){e.innerHTML=`
                <div style="text-align: center; padding: 2rem; color: var(--text-secondary);">
                    ${t==="uz"?"Fanlar topilmadi":"Предметы не найдены"}
                </div>
            `;return}e.innerHTML=s.map(n=>`
            <div style="padding: 1.25rem; background: var(--bg-secondary); border-radius: 10px; border: 1px solid var(--border-color); display: flex; justify-content: space-between; align-items: center;">
                <div>
                    <h5 style="margin: 0 0 0.5rem 0; font-weight: 700; font-size: 1rem;">${n.name}</h5>
                    ${n.teacher_name?`<div style="color: var(--text-secondary); font-size: 0.85rem;">👨‍🏫 ${n.teacher_name}</div>`:""}
                </div>
                <div style="text-align: right;">
                    <div style="color: var(--text-secondary); font-size: 0.75rem;">${t==="uz"?"O'rtacha":"Средний балл"}</div>
                    <div style="font-size: 1.5rem; font-weight: 700; color: #667eea;">—</div>
                </div>
            </div>
        `).join("")}catch(s){console.error("Error loading subjects:",s),e.innerHTML=`
            <div style="text-align: center; padding: 2rem; color: #ef4444;">
                ${t==="uz"?"Xatolik yuz berdi":"Произошла ошибка"}
            </div>
        `}}async function lg(e){var a;const t=((a=k.getState().user)==null?void 0:a.language)||"ru";let i="",s="";try{const r=await C(`/api/users/${e}`);i=`${r.first_name||""} ${r.last_name||""}`.trim(),s=r.email||""}catch(r){console.error("Error loading student:",r)}const n=`
        <div class="admin-modal-overlay" style="position: fixed; inset: 0; background: rgba(0, 0, 0, 0.6); backdrop-filter: blur(4px); display: flex; align-items: center; justify-content: center; z-index: 9999;" onclick="if(event.target === this) window.closeModal()">
            <div class="admin-modal" style="max-width: 500px; background: var(--bg-primary); border-radius: 16px; box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3); animation: slideUp 0.3s ease-out;">
                <div class="admin-modal-header" style="padding: 2rem; border-bottom: 1px solid var(--border-color); display: flex; justify-content: space-between; align-items: flex-start;">
                    <div>
                        <h2 style="margin: 0; font-size: 1.6rem; font-weight: 800; background: linear-gradient(135deg, #667eea, #764ba2); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;">
                            🔐 ${t==="uz"?"Parolni tiklash":"Сброс пароля"}
                        </h2>
                        <p style="margin: 0.5rem 0 0 0; color: var(--text-secondary); font-size: 0.95rem;">
                            ${t==="uz"?"Yangi xavfsiz parol yaratish":"Создать новый безопасный пароль"}
                        </p>
                    </div>
                    <button onclick="window.closeModal()" style="background: none; border: none; font-size: 1.8rem; cursor: pointer; color: var(--text-secondary); opacity: 0.6; transition: opacity 0.2s; hover: opacity: 1; padding: 0; width: 32px; height: 32px; display: flex; align-items: center; justify-content: center;">&times;</button>
                </div>
                <div class="admin-modal-body" style="padding: 2rem;">
                    ${i?`
                        <div style="padding: 1.25rem; background: linear-gradient(135deg, #667eea15, #764ba215); border: 1px solid #667eea30; border-radius: 12px; margin-bottom: 1.5rem;">
                            <div style="font-size: 0.8rem; color: var(--text-secondary); margin-bottom: 0.5rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">
                                👤 ${t==="uz"?"O'quvchi":"Ученик"}
                            </div>
                            <div style="font-weight: 700; font-size: 1.15rem; color: var(--text-primary);">${i}</div>
                            ${s?`<div style="font-size: 0.9rem; color: var(--text-secondary); margin-top: 0.5rem;">📧 ${s}</div>`:""}
                        </div>
                    `:""}
                    <div style="padding: 1.25rem; background: linear-gradient(135deg, #fef3c7, #fef08a); border: 2px solid #fcd34d; border-radius: 12px; margin-bottom: 2rem;">
                        <div style="color: #78350f; font-size: 1rem; line-height: 1.8; font-weight: 500;">
                            ${t==="uz"?`<div style="margin-bottom: 0.75rem;">✓ <strong>Avtomatik parol</strong> - Tizim xavfsiz parol yaratadi</div><div style="margin-bottom: 0.75rem;">✓ <strong>Email yuborish</strong> - Parol emailga yuboriladi</div><div>✓ <strong>Yangi parol o'rnatish</strong> - O'quvchi kirgach o'zini parol tanladi</div>`:'<div style="margin-bottom: 0.75rem;">✓ <strong>Автоматический пароль</strong> - Система создаст безопасный пароль</div><div style="margin-bottom: 0.75rem;">✓ <strong>Отправка по email</strong> - Пароль будет отправлен на email</div><div>✓ <strong>Установка нового</strong> - При входе ученик установит свой пароль</div>'}
                        </div>
                    </div>
                    <div style="display: flex; gap: 1rem; justify-content: flex-end;">
                        <button onclick="window.closeModal()" class="btn" style="padding: 0.75rem 1.5rem; background: var(--bg-secondary); color: var(--text-primary); border: 1px solid var(--border-color); border-radius: 8px; font-weight: 600; cursor: pointer; transition: all 0.2s;">
                            ${t==="uz"?"Bekor qilish":"Отмена"}
                        </button>
                        <button onclick="window.confirmResetStudentPassword('${e}')" class="btn btn-primary" style="padding: 0.75rem 1.5rem; background: linear-gradient(135deg, #f59e0b, #f97316); border: none; color: white; border-radius: 8px; font-weight: 700; cursor: pointer; transition: all 0.2s; box-shadow: 0 4px 15px rgba(249, 115, 22, 0.3);">
                            🔑 ${t==="uz"?"Parolni tiklash":"Сбросить пароль"}
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <style>
            @keyframes slideUp {
                from {
                    opacity: 0;
                    transform: translateY(20px);
                }
                to {
                    opacity: 1;
                    transform: translateY(0);
                }
            }
        </style>
    `;document.body.insertAdjacentHTML("beforeend",n)}async function _r(e){var i;const t=((i=k.getState().user)==null?void 0:i.language)||"ru";try{const s=await C(`/api/users/${e}/reset-password`,{method:"POST",body:JSON.stringify({})}),n=s.password||s.newPassword||"";window.closeModal();const a=`
            <div class="admin-modal-overlay" style="
                position: fixed;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                background: rgba(0, 0, 0, 0.6);
                backdrop-filter: blur(4px);
                display: flex;
                align-items: center;
                justify-content: center;
                z-index: 10000;
                animation: fadeIn 0.3s ease-out;
            " onclick="if(event.target === this) window.closeModal()">
                <style>
                    @keyframes fadeIn {
                        from {
                            opacity: 0;
                        }
                        to {
                            opacity: 1;
                        }
                    }
                    @keyframes slideUp {
                        from {
                            opacity: 0;
                            transform: translateY(20px);
                        }
                        to {
                            opacity: 1;
                            transform: translateY(0);
                        }
                    }
                </style>
                <div style="
                    background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%);
                    border-radius: 16px;
                    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
                    max-width: 500px;
                    width: 90%;
                    overflow: hidden;
                    animation: slideUp 0.3s ease-out;
                " onclick="event.stopPropagation()">
                    <div style="
                        padding: 2rem;
                        border-bottom: 1px solid rgba(255, 255, 255, 0.1);
                    ">
                        <div style="display: flex; justify-content: space-between; align-items: flex-start;">
                            <div>
                                <h2 style="
                                    margin: 0;
                                    font-size: 1.75rem;
                                    font-weight: 800;
                                    background: linear-gradient(135deg, #10b981 0%, #059669 100%);
                                    -webkit-background-clip: text;
                                    -webkit-text-fill-color: transparent;
                                    background-clip: text;
                                ">
                                    ✅ ${t==="uz"?"Muvaffaqiyatli!":"Успешно!"}
                                </h2>
                            </div>
                            <button onclick="window.closeModal()" style="
                                background: none;
                                border: none;
                                font-size: 2rem;
                                cursor: pointer;
                                color: rgba(255, 255, 255, 0.5);
                                padding: 0;
                                width: 40px;
                                height: 40px;
                                display: flex;
                                align-items: center;
                                justify-content: center;
                                border-radius: 8px;
                                transition: all 0.2s ease;
                            " onmouseover="this.style.background = 'rgba(255, 255, 255, 0.1); this.style.color = 'rgba(255, 255, 255, 0.8)'" onmouseout="this.style.background = 'none'; this.style.color = 'rgba(255, 255, 255, 0.5)'">&times;</button>
                        </div>
                    </div>

                    <div style="padding: 2rem;">
                        <div style="
                            padding: 1.25rem;
                            background: linear-gradient(135deg, rgba(16, 185, 129, 0.1) 0%, rgba(5, 150, 105, 0.05) 100%);
                            border: 1px solid rgba(16, 185, 129, 0.3);
                            border-left: 4px solid #10b981;
                            border-radius: 12px;
                            margin-bottom: 2rem;
                        ">
                            <div style="font-size: 1rem; color: #10b981; margin-bottom: 0.75rem; font-weight: 700;">
                                ✓ ${t==="uz"?"Parol emailga yuborildi":"✓ Пароль отправлен на email"}
                            </div>
                            <div style="font-size: 0.95rem; color: rgba(255, 255, 255, 0.8); line-height: 1.6;">
                                ${t==="uz"?"• O'quvchi email orqali yangi parol oladi<br>• Parol bilan kirgach, yangi parol o'rnatishi kerak bo'ladi<br>• Elektron pochta: Email xabar va parol bilan yuboriladi":"• Ученик получит пароль по email<br>• При входе потребуется установить новый пароль<br>• Информация о сбросе и админ указаны в письме"}
                            </div>
                        </div>
                        
                        ${n?`
                            <div style="margin-bottom: 2rem;">
                                <div style="font-size: 0.85rem; color: rgba(255, 255, 255, 0.6); margin-bottom: 0.75rem; text-transform: uppercase; letter-spacing: 0.05em; font-weight: 600;">
                                    ${t==="uz"?"Vaqtinchalik parol (faqat admin uchun)":"Временный пароль (только для админа)"}
                                </div>
                                <div style="
                                    padding: 1rem;
                                    background: linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(249, 250, 251, 0.95) 100%);
                                    border-radius: 12px;
                                    text-align: center;
                                    border: 1px solid rgba(255, 255, 255, 0.2);
                                    box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.2);
                                ">
                                    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; font-size: 1.3rem; font-weight: 700; color: #059669; letter-spacing: 0.05em; word-break: break-all;">
                                        ${n}
                                    </div>
                                </div>
                                <button 
                                    onclick="window.copyToClipboard('${n}', this)" 
                                    style="
                                        margin-top: 1rem;
                                        width: 100%;
                                        padding: 0.875rem;
                                        background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%);
                                        color: white;
                                        border: none;
                                        border-radius: 10px;
                                        cursor: pointer;
                                        font-weight: 700;
                                        font-size: 1rem;
                                        transition: all 0.2s ease;
                                        box-shadow: 0 4px 15px -3px rgba(59, 130, 246, 0.4);
                                    "
                                    onmouseover="this.style.transform = 'translateY(-2px)'; this.style.boxShadow = '0 6px 20px -3px rgba(59, 130, 246, 0.6)'"
                                    onmouseout="this.style.transform = 'translateY(0)'; this.style.boxShadow = '0 4px 15px -3px rgba(59, 130, 246, 0.4)'"
                                >
                                    📋 ${t==="uz"?"Nusxa olish":"Копировать"}
                                </button>
                            </div>
                        `:""}
                        
                        <button onclick="window.closeModal()" style="
                            width: 100%;
                            padding: 0.875rem;
                            background: linear-gradient(135deg, #06b6d4 0%, #0891b2 100%);
                            color: white;
                            border: none;
                            border-radius: 10px;
                            cursor: pointer;
                            font-weight: 700;
                            font-size: 1rem;
                            transition: all 0.2s ease;
                            box-shadow: 0 4px 15px -3px rgba(6, 182, 212, 0.4);
                        "
                        onmouseover="this.style.transform = 'translateY(-2px)'; this.style.boxShadow = '0 6px 20px -3px rgba(6, 182, 212, 0.6)'"
                        onmouseout="this.style.transform = 'translateY(0)'; this.style.boxShadow = '0 4px 15px -3px rgba(6, 182, 212, 0.4)'"
                        >
                            ${t==="uz"?"Yopish":"Закрыть"}
                        </button>
                    </div>
                </div>
            </div>
        `;document.body.insertAdjacentHTML("beforeend",a)}catch(s){console.error("Error resetting password:",s),window.closeModal(),alert(t==="uz"?`Xatolik yuz berdi: ${s.message}`:`Произошла ошибка: ${s.message}`)}}async function dg(e,t){await _r(t)}function cg(e){const t=document.querySelector(".profile-tab:nth-child(4)");t&&t.click()}async function ug(e,t){var a;e.preventDefault();const i=new FormData(e.target),s=((a=k.getState().user)==null?void 0:a.language)||"ru",n={first_name:i.get("first_name"),last_name:i.get("last_name"),email:i.get("email"),phone:i.get("phone"),status:i.get("status")};try{await C(`/api/users/${t}`,{method:"PUT",body:JSON.stringify(n)}),alert(s==="uz"?"O'zgarishlar saqlandi!":"Изменения сохранены!"),await br(t)}catch(r){console.error("Error updating student:",r),alert(s==="uz"?"Xatolik yuz berdi!":"Произошла ошибка!")}}async function hg(e){var s;const t=((s=k.getState().user)==null?void 0:s.language)||"ru",i=prompt(t==="uz"?"Xabar matni:":"Текст уведомления:");if(i)try{await C(`/api/users/${e}/notify`,{method:"POST",body:JSON.stringify({message:i})}),alert(t==="uz"?"Xabar yuborildi!":"Уведомление отправлено!")}catch(n){console.error("Error sending notification:",n),alert(t==="uz"?"Xatolik yuz berdi!":"Произошла ошибка!")}}async function gg(e,t){var s;const i=((s=k.getState().user)==null?void 0:s.language)||"ru";try{const n=await C(`/api/users/${e}`),a=JSON.stringify(n,null,2),r=new Blob([a],{type:"application/json"}),o=URL.createObjectURL(r),l=document.createElement("a");l.href=o,l.download=`student_${e}_${t}.json`,document.body.appendChild(l),l.click(),document.body.removeChild(l),URL.revokeObjectURL(o),alert(i==="uz"?"Ma'lumotlar yuklandi!":"Данные экспортированы!")}catch(n){console.error("Error exporting data:",n),alert(i==="uz"?"Xatolik yuz berdi!":"Произошла ошибка!")}}async function mg(e,t){var n;const i=((n=k.getState().user)==null?void 0:n.language)||"ru",s=i==="uz"?`${t}ni o'chirishni xohlaysizmi? Bu amalni qaytarib bo'lmaydi!`:`Вы уверены, что хотите удалить ${t}? Это действие необратимо!`;if(confirm(s)&&confirm(i==="uz"?"Rostdan ham o'chirishni xohlaysizmi?":"Вы действительно уверены?"))try{await C(`/api/users/${e}`,{method:"DELETE"}),alert(i==="uz"?"O'quvchi o'chirildi!":"Ученик удален!"),window.router.navigate("/admin/classes")}catch(a){console.error("Error deleting student:",a),alert(i==="uz"?"Xatolik yuz berdi!":"Произошла ошибка!")}}document.addEventListener("DOMContentLoaded",()=>{window.deleteClass=Gh,window.editClass=Kh,window.viewClassStudents=Li,window.filterStudents=Wh,window.toggleSelectAll=Uh,window.updateBulkPanel=Ds,window.clearSelection=Yh,window.bulkRemoveStudents=Xh,window.exportSelectedToExcel=Qh,window.saveClassEdit=Jh,window.showCreateClassModal=kr,window.showClassCreatedWizardStep2=$r,window.validateClassGrade=eg,window.validateClassName=ig,window.showValidationError=jt,window.hideValidationError=sg,window.createClass=ag,window.closeModal=Bi,window.showAddUserModal=fr,window.showAddStudentToClassModal=Zh,window.removeStudentFromClass=tg,window.switchProfileTab=rg,window.resetStudentPassword=lg,window.confirmResetStudentPassword=_r,window.submitResetPassword=dg,window.editStudent=cg,window.updateStudent=ug,window.sendNotificationToStudent=hg,window.exportStudentData=gg,window.deleteStudent=mg,cr(),ne(),gs();const e=window.location.pathname;$.navigate(e==="/"?"/":e,!1)});
