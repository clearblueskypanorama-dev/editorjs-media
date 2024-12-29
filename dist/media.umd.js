(function(){"use strict";try{if(typeof document<"u"){var o=document.createElement("style");o.appendChild(document.createTextNode('.media-tool{--bg-color: #cdd1e0;--front-color: #388ae5;--border-color: #e8e8eb}.media-tool__media{border-radius:3px;overflow:hidden;margin-bottom:10px}.media-tool__media-picture{max-width:100%;vertical-align:bottom;display:block}.media-tool__media-preloader{width:50px;height:50px;border-radius:50%;background-size:cover;margin:auto;position:relative;background-color:var(--bg-color);background-position:center center}.media-tool__media-preloader:after{content:"";position:absolute;z-index:3;width:60px;height:60px;border-radius:50%;border:2px solid var(--bg-color);border-top-color:var(--front-color);left:50%;top:50%;margin-top:-30px;margin-left:-30px;animation:media-preloader-spin 2s infinite linear;box-sizing:border-box}.media-tool__caption[contentEditable=true][data-placeholder]:before{position:absolute!important;content:attr(data-placeholder);color:#707684;font-weight:400;display:none}.media-tool__caption[contentEditable=true][data-placeholder]:empty:before{display:block}.media-tool__caption[contentEditable=true][data-placeholder]:empty:focus:before{display:none}.media-tool--empty .media-tool__media,.media-tool--empty .media-tool__caption,.media-tool--loading .media-tool__caption{display:none}.media-tool .cdx-button{display:flex;align-items:center;justify-content:center}.media-tool .cdx-button svg{height:auto;margin:0 6px 0 0}.media-tool--filled .cdx-button,.media-tool--filled .media-tool__media-preloader{display:none}.media-tool--loading .media-tool__media{min-height:200px;display:flex;border:1px solid var(--border-color);background-color:#fff}.media-tool--loading .media-tool__media-picture,.media-tool--loading .cdx-button{display:none}.media-tool--withBorder .media-tool__media{border:1px solid var(--border-color)}.media-tool--withBackground .media-tool__media{padding:15px;background:var(--bg-color)}.media-tool--withBackground .media-tool__media-picture{max-width:60%;margin:0 auto}.media-tool--stretched .media-tool__media-picture{width:100%}@keyframes media-preloader-spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}')),document.head.appendChild(o)}}catch(e){console.error("vite-plugin-css-injected-by-js",e)}})();
(function(_,F){typeof exports=="object"&&typeof module<"u"?module.exports=F():typeof define=="function"&&define.amd?define(F):(_=typeof globalThis<"u"?globalThis:_||self,_.MediaTool=F())})(this,function(){"use strict";const _="",F='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 19V19C9.13623 19 8.20435 19 7.46927 18.6955C6.48915 18.2895 5.71046 17.5108 5.30448 16.5307C5 15.7956 5 14.8638 5 13V12C5 9.19108 5 7.78661 5.67412 6.77772C5.96596 6.34096 6.34096 5.96596 6.77772 5.67412C7.78661 5 9.19108 5 12 5H13.5C14.8956 5 15.5933 5 16.1611 5.17224C17.4395 5.56004 18.44 6.56046 18.8278 7.83886C19 8.40666 19 9.10444 19 10.5V10.5"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M16 13V16M16 19V16M19 16H16M16 16H13"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6.5 17.5L17.5 6.5"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.9919 10.5H19.0015"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.9919 19H11.0015"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13L13 5"/></svg>',N='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.9919 9.5H19.0015"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.5 5H14.5096"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M14.625 5H15C17.2091 5 19 6.79086 19 9V9.375"/><path stroke="currentColor" stroke-width="2" d="M9.375 5L9 5C6.79086 5 5 6.79086 5 9V9.375"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.3725 5H9.38207"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 9.5H5.00957"/><path stroke="currentColor" stroke-width="2" d="M9.375 19H9C6.79086 19 5 17.2091 5 15V14.625"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.3725 19H9.38207"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 14.55H5.00957"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M16 13V16M16 19V16M19 16H16M16 16H13"/></svg>',D='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><rect width="14" height="14" x="5" y="5" stroke="currentColor" stroke-width="2" rx="4"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.13968 15.32L8.69058 11.5661C9.02934 11.2036 9.48873 11 9.96774 11C10.4467 11 10.9061 11.2036 11.2449 11.5661L15.3871 16M13.5806 14.0664L15.0132 12.533C15.3519 12.1705 15.8113 11.9668 16.2903 11.9668C16.7693 11.9668 17.2287 12.1705 17.5675 12.533L18.841 13.9634"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.7778 9.33331H13.7867"/></svg>',q='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 9L20 12L17 15"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 12H20"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 9L4 12L7 15"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 12H10"/></svg>';function M(E,o=null,n={}){const c=document.createElement(E);Array.isArray(o)?c.classList.add(...o):o&&c.classList.add(o);for(const i in n)c[i]=n[i];return c}const x=new Set(["apng","avif","gif","jpg","jpeg","jfif","pjpeg","pjp","png","svg","webp"]),U=new Set(["m4a","m4b","mp4a","mpga","mp2","mp2a","mp3","m2a","m3a","wav","weba","aac","oga","spx","flac","opus"]),A=new Set(["mp4","ogg","ogv","webm","mov","m4v","mkv","3gp","avi","mpeg"]),V=new RegExp(`https?:\\/\\/\\S+\\.(${[...x,...U,...A].join("|")})(\\?[a-z0-9=]*)?$`,"i");function L(E){const o=E.split(".").pop();if(x.has(o))return"IMG";if(U.has(o))return"AUDIO";if(A.has(o))return"VIDEO"}class T{constructor({api:o,config:n,onSelectFile:c,readOnly:i}){this.api=o,this.config=n,this.onSelectFile=c,this.readOnly=i,this.nodes={wrapper:M("div",[this.CSS.baseClass,this.CSS.wrapper]),mediaContainer:M("div",[this.CSS.mediaContainer]),fileButton:this.createFileButton(),mediaEl:void 0,mediaPreloader:M("div",this.CSS.mediaPreloader),caption:M("div",[this.CSS.input,this.CSS.caption],{contentEditable:!this.readOnly})},this.nodes.caption.dataset.placeholder=this.config.captionPlaceholder,this.nodes.mediaContainer.appendChild(this.nodes.mediaPreloader),this.nodes.wrapper.appendChild(this.nodes.mediaContainer),this.nodes.wrapper.appendChild(this.nodes.caption),this.nodes.wrapper.appendChild(this.nodes.fileButton)}get CSS(){return{baseClass:this.api.styles.block,loading:this.api.styles.loader,input:this.api.styles.input,button:this.api.styles.button,wrapper:"media-tool",mediaContainer:"media-tool__media",mediaPreloader:"media-tool__media-preloader",mediaEl:"media-tool__media-picture",caption:"media-tool__caption"}}static get status(){return{EMPTY:"empty",UPLOADING:"loading",FILLED:"filled"}}render(o){return!o.file||Object.keys(o.file).length===0?this.toggleStatus(T.status.EMPTY):this.toggleStatus(T.status.UPLOADING),this.nodes.wrapper}createFileButton(){const o=M("div",[this.CSS.button]);return o.innerHTML=this.config.buttonContent||`${D} ${this.api.i18n.t("Select a media file")}`,o.addEventListener("click",()=>{this.onSelectFile()}),o}showPreloader(o){this.nodes.mediaPreloader.style.backgroundImage=`url(${o})`,this.toggleStatus(T.status.UPLOADING)}hidePreloader(){this.nodes.mediaPreloader.style.backgroundImage="",this.toggleStatus(T.status.EMPTY)}fillMedia(o,n=L(new URL(o).pathname)||"IMG"){const c={src:o};let i="load";(n==="VIDEO"||n==="AUDIO")&&(c.muted=!0,c.playsinline=!0,c.controls=!0,n==="AUDIO"&&(c.style="width: 100%;"),i="loadedmetadata"),this.nodes.mediaEl=M(n,this.CSS.mediaEl,c),this.nodes.mediaEl.addEventListener(i,()=>{console.debug("mount"),this.toggleStatus(T.status.FILLED),this.nodes.mediaPreloader&&(this.nodes.mediaPreloader.style.backgroundImage="")}),this.nodes.mediaContainer.appendChild(this.nodes.mediaEl),console.debug(this.nodes.mediaEl)}fillCaption(o){this.nodes.caption&&(this.nodes.caption.innerHTML=o)}toggleStatus(o){for(const n in T.status)Object.prototype.hasOwnProperty.call(T.status,n)&&this.nodes.wrapper.classList.toggle(`${this.CSS.wrapper}--${T.status[n]}`,o===T.status[n])}applyTune(o,n){this.nodes.wrapper.classList.toggle(`${this.CSS.wrapper}--${o}`,n)}}function $(E){return E&&E.__esModule&&Object.prototype.hasOwnProperty.call(E,"default")?E.default:E}var B={exports:{}};(function(E,o){(function(n,c){E.exports=c()})(window,function(){return function(n){var c={};function i(a){if(c[a])return c[a].exports;var r=c[a]={i:a,l:!1,exports:{}};return n[a].call(r.exports,r,r.exports,i),r.l=!0,r.exports}return i.m=n,i.c=c,i.d=function(a,r,d){i.o(a,r)||Object.defineProperty(a,r,{enumerable:!0,get:d})},i.r=function(a){typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(a,"__esModule",{value:!0})},i.t=function(a,r){if(1&r&&(a=i(a)),8&r||4&r&&typeof a=="object"&&a&&a.__esModule)return a;var d=Object.create(null);if(i.r(d),Object.defineProperty(d,"default",{enumerable:!0,value:a}),2&r&&typeof a!="string")for(var b in a)i.d(d,b,(function(l){return a[l]}).bind(null,b));return d},i.n=function(a){var r=a&&a.__esModule?function(){return a.default}:function(){return a};return i.d(r,"a",r),r},i.o=function(a,r){return Object.prototype.hasOwnProperty.call(a,r)},i.p="",i(i.s=3)}([function(n,c){var i;i=function(){return this}();try{i=i||new Function("return this")()}catch{typeof window=="object"&&(i=window)}n.exports=i},function(n,c,i){(function(a){var r=i(2),d=setTimeout;function b(){}function l(e){if(!(this instanceof l))throw new TypeError("Promises must be constructed via new");if(typeof e!="function")throw new TypeError("not a function");this._state=0,this._handled=!1,this._value=void 0,this._deferreds=[],t(e,this)}function f(e,u){for(;e._state===3;)e=e._value;e._state!==0?(e._handled=!0,l._immediateFn(function(){var s=e._state===1?u.onFulfilled:u.onRejected;if(s!==null){var g;try{g=s(e._value)}catch(m){return void y(u.promise,m)}p(u.promise,g)}else(e._state===1?p:y)(u.promise,e._value)})):e._deferreds.push(u)}function p(e,u){try{if(u===e)throw new TypeError("A promise cannot be resolved with itself.");if(u&&(typeof u=="object"||typeof u=="function")){var s=u.then;if(u instanceof l)return e._state=3,e._value=u,void w(e);if(typeof s=="function")return void t((g=s,m=u,function(){g.apply(m,arguments)}),e)}e._state=1,e._value=u,w(e)}catch(h){y(e,h)}var g,m}function y(e,u){e._state=2,e._value=u,w(e)}function w(e){e._state===2&&e._deferreds.length===0&&l._immediateFn(function(){e._handled||l._unhandledRejectionFn(e._value)});for(var u=0,s=e._deferreds.length;u<s;u++)f(e,e._deferreds[u]);e._deferreds=null}function v(e,u,s){this.onFulfilled=typeof e=="function"?e:null,this.onRejected=typeof u=="function"?u:null,this.promise=s}function t(e,u){var s=!1;try{e(function(g){s||(s=!0,p(u,g))},function(g){s||(s=!0,y(u,g))})}catch(g){if(s)return;s=!0,y(u,g)}}l.prototype.catch=function(e){return this.then(null,e)},l.prototype.then=function(e,u){var s=new this.constructor(b);return f(this,new v(e,u,s)),s},l.prototype.finally=r.a,l.all=function(e){return new l(function(u,s){if(!e||e.length===void 0)throw new TypeError("Promise.all accepts an array");var g=Array.prototype.slice.call(e);if(g.length===0)return u([]);var m=g.length;function h(j,C){try{if(C&&(typeof C=="object"||typeof C=="function")){var S=C.then;if(typeof S=="function")return void S.call(C,function(R){h(j,R)},s)}g[j]=C,--m==0&&u(g)}catch(R){s(R)}}for(var k=0;k<g.length;k++)h(k,g[k])})},l.resolve=function(e){return e&&typeof e=="object"&&e.constructor===l?e:new l(function(u){u(e)})},l.reject=function(e){return new l(function(u,s){s(e)})},l.race=function(e){return new l(function(u,s){for(var g=0,m=e.length;g<m;g++)e[g].then(u,s)})},l._immediateFn=typeof a=="function"&&function(e){a(e)}||function(e){d(e,0)},l._unhandledRejectionFn=function(e){typeof console<"u"&&console&&console.warn("Possible Unhandled Promise Rejection:",e)},c.a=l}).call(this,i(5).setImmediate)},function(n,c,i){c.a=function(a){var r=this.constructor;return this.then(function(d){return r.resolve(a()).then(function(){return d})},function(d){return r.resolve(a()).then(function(){return r.reject(d)})})}},function(n,c,i){function a(t){return(a=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(t)}i(4);var r,d,b,l,f,p,y,w=i(8),v=(d=function(t){return new Promise(function(e,u){t=l(t),(t=f(t)).beforeSend&&t.beforeSend();var s=window.XMLHttpRequest?new window.XMLHttpRequest:new window.ActiveXObject("Microsoft.XMLHTTP");s.open(t.method,t.url),s.setRequestHeader("X-Requested-With","XMLHttpRequest"),Object.keys(t.headers).forEach(function(m){var h=t.headers[m];s.setRequestHeader(m,h)});var g=t.ratio;s.upload.addEventListener("progress",function(m){var h=Math.round(m.loaded/m.total*100),k=Math.ceil(h*g/100);t.progress(Math.min(k,100))},!1),s.addEventListener("progress",function(m){var h=Math.round(m.loaded/m.total*100),k=Math.ceil(h*(100-g)/100)+g;t.progress(Math.min(k,100))},!1),s.onreadystatechange=function(){if(s.readyState===4){var m=s.response;try{m=JSON.parse(m)}catch{}var h=w.parseHeaders(s.getAllResponseHeaders()),k={body:m,code:s.status,headers:h};y(s.status)?e(k):u(k)}},s.send(t.data)})},b=function(t){return t.method="POST",d(t)},l=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};if(t.url&&typeof t.url!="string")throw new Error("Url must be a string");if(t.url=t.url||"",t.method&&typeof t.method!="string")throw new Error("`method` must be a string or null");if(t.method=t.method?t.method.toUpperCase():"GET",t.headers&&a(t.headers)!=="object")throw new Error("`headers` must be an object or null");if(t.headers=t.headers||{},t.type&&(typeof t.type!="string"||!Object.values(r).includes(t.type)))throw new Error("`type` must be taken from module's «contentType» library");if(t.progress&&typeof t.progress!="function")throw new Error("`progress` must be a function or null");if(t.progress=t.progress||function(e){},t.beforeSend=t.beforeSend||function(e){},t.ratio&&typeof t.ratio!="number")throw new Error("`ratio` must be a number");if(t.ratio<0||t.ratio>100)throw new Error("`ratio` must be in a 0-100 interval");if(t.ratio=t.ratio||90,t.accept&&typeof t.accept!="string")throw new Error("`accept` must be a string with a list of allowed mime-types");if(t.accept=t.accept||"*/*",t.multiple&&typeof t.multiple!="boolean")throw new Error("`multiple` must be a true or false");if(t.multiple=t.multiple||!1,t.fieldName&&typeof t.fieldName!="string")throw new Error("`fieldName` must be a string");return t.fieldName=t.fieldName||"files",t},f=function(t){switch(t.method){case"GET":var e=p(t.data,r.URLENCODED);delete t.data,t.url=/\?/.test(t.url)?t.url+"&"+e:t.url+"?"+e;break;case"POST":case"PUT":case"DELETE":case"UPDATE":var u=function(){return(arguments.length>0&&arguments[0]!==void 0?arguments[0]:{}).type||r.JSON}(t);(w.isFormData(t.data)||w.isFormElement(t.data))&&(u=r.FORM),t.data=p(t.data,u),u!==v.contentType.FORM&&(t.headers["content-type"]=u)}return t},p=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};switch(arguments.length>1?arguments[1]:void 0){case r.URLENCODED:return w.urlEncode(t);case r.JSON:return w.jsonEncode(t);case r.FORM:return w.formEncode(t);default:return t}},y=function(t){return t>=200&&t<300},{contentType:r={URLENCODED:"application/x-www-form-urlencoded; charset=utf-8",FORM:"multipart/form-data",JSON:"application/json; charset=utf-8"},request:d,get:function(t){return t.method="GET",d(t)},post:b,transport:function(t){return t=l(t),w.selectFiles(t).then(function(e){for(var u=new FormData,s=0;s<e.length;s++)u.append(t.fieldName,e[s],e[s].name);w.isObject(t.data)&&Object.keys(t.data).forEach(function(m){var h=t.data[m];u.append(m,h)});var g=t.beforeSend;return t.beforeSend=function(){return g(e)},t.data=u,b(t)})},selectFiles:function(t){return delete(t=l(t)).beforeSend,w.selectFiles(t)}});n.exports=v},function(n,c,i){i.r(c);var a=i(1);window.Promise=window.Promise||a.a},function(n,c,i){(function(a){var r=a!==void 0&&a||typeof self<"u"&&self||window,d=Function.prototype.apply;function b(l,f){this._id=l,this._clearFn=f}c.setTimeout=function(){return new b(d.call(setTimeout,r,arguments),clearTimeout)},c.setInterval=function(){return new b(d.call(setInterval,r,arguments),clearInterval)},c.clearTimeout=c.clearInterval=function(l){l&&l.close()},b.prototype.unref=b.prototype.ref=function(){},b.prototype.close=function(){this._clearFn.call(r,this._id)},c.enroll=function(l,f){clearTimeout(l._idleTimeoutId),l._idleTimeout=f},c.unenroll=function(l){clearTimeout(l._idleTimeoutId),l._idleTimeout=-1},c._unrefActive=c.active=function(l){clearTimeout(l._idleTimeoutId);var f=l._idleTimeout;f>=0&&(l._idleTimeoutId=setTimeout(function(){l._onTimeout&&l._onTimeout()},f))},i(6),c.setImmediate=typeof self<"u"&&self.setImmediate||a!==void 0&&a.setImmediate||this&&this.setImmediate,c.clearImmediate=typeof self<"u"&&self.clearImmediate||a!==void 0&&a.clearImmediate||this&&this.clearImmediate}).call(this,i(0))},function(n,c,i){(function(a,r){(function(d,b){if(!d.setImmediate){var l,f,p,y,w,v=1,t={},e=!1,u=d.document,s=Object.getPrototypeOf&&Object.getPrototypeOf(d);s=s&&s.setTimeout?s:d,{}.toString.call(d.process)==="[object process]"?l=function(h){r.nextTick(function(){m(h)})}:function(){if(d.postMessage&&!d.importScripts){var h=!0,k=d.onmessage;return d.onmessage=function(){h=!1},d.postMessage("","*"),d.onmessage=k,h}}()?(y="setImmediate$"+Math.random()+"$",w=function(h){h.source===d&&typeof h.data=="string"&&h.data.indexOf(y)===0&&m(+h.data.slice(y.length))},d.addEventListener?d.addEventListener("message",w,!1):d.attachEvent("onmessage",w),l=function(h){d.postMessage(y+h,"*")}):d.MessageChannel?((p=new MessageChannel).port1.onmessage=function(h){m(h.data)},l=function(h){p.port2.postMessage(h)}):u&&"onreadystatechange"in u.createElement("script")?(f=u.documentElement,l=function(h){var k=u.createElement("script");k.onreadystatechange=function(){m(h),k.onreadystatechange=null,f.removeChild(k),k=null},f.appendChild(k)}):l=function(h){setTimeout(m,0,h)},s.setImmediate=function(h){typeof h!="function"&&(h=new Function(""+h));for(var k=new Array(arguments.length-1),j=0;j<k.length;j++)k[j]=arguments[j+1];var C={callback:h,args:k};return t[v]=C,l(v),v++},s.clearImmediate=g}function g(h){delete t[h]}function m(h){if(e)setTimeout(m,0,h);else{var k=t[h];if(k){e=!0;try{(function(j){var C=j.callback,S=j.args;switch(S.length){case 0:C();break;case 1:C(S[0]);break;case 2:C(S[0],S[1]);break;case 3:C(S[0],S[1],S[2]);break;default:C.apply(b,S)}})(k)}finally{g(h),e=!1}}}}})(typeof self>"u"?a===void 0?this:a:self)}).call(this,i(0),i(7))},function(n,c){var i,a,r=n.exports={};function d(){throw new Error("setTimeout has not been defined")}function b(){throw new Error("clearTimeout has not been defined")}function l(s){if(i===setTimeout)return setTimeout(s,0);if((i===d||!i)&&setTimeout)return i=setTimeout,setTimeout(s,0);try{return i(s,0)}catch{try{return i.call(null,s,0)}catch{return i.call(this,s,0)}}}(function(){try{i=typeof setTimeout=="function"?setTimeout:d}catch{i=d}try{a=typeof clearTimeout=="function"?clearTimeout:b}catch{a=b}})();var f,p=[],y=!1,w=-1;function v(){y&&f&&(y=!1,f.length?p=f.concat(p):w=-1,p.length&&t())}function t(){if(!y){var s=l(v);y=!0;for(var g=p.length;g;){for(f=p,p=[];++w<g;)f&&f[w].run();w=-1,g=p.length}f=null,y=!1,function(m){if(a===clearTimeout)return clearTimeout(m);if((a===b||!a)&&clearTimeout)return a=clearTimeout,clearTimeout(m);try{a(m)}catch{try{return a.call(null,m)}catch{return a.call(this,m)}}}(s)}}function e(s,g){this.fun=s,this.array=g}function u(){}r.nextTick=function(s){var g=new Array(arguments.length-1);if(arguments.length>1)for(var m=1;m<arguments.length;m++)g[m-1]=arguments[m];p.push(new e(s,g)),p.length!==1||y||l(t)},e.prototype.run=function(){this.fun.apply(null,this.array)},r.title="browser",r.browser=!0,r.env={},r.argv=[],r.version="",r.versions={},r.on=u,r.addListener=u,r.once=u,r.off=u,r.removeListener=u,r.removeAllListeners=u,r.emit=u,r.prependListener=u,r.prependOnceListener=u,r.listeners=function(s){return[]},r.binding=function(s){throw new Error("process.binding is not supported")},r.cwd=function(){return"/"},r.chdir=function(s){throw new Error("process.chdir is not supported")},r.umask=function(){return 0}},function(n,c,i){function a(d,b){for(var l=0;l<b.length;l++){var f=b[l];f.enumerable=f.enumerable||!1,f.configurable=!0,"value"in f&&(f.writable=!0),Object.defineProperty(d,f.key,f)}}var r=i(9);n.exports=function(){function d(){(function(p,y){if(!(p instanceof y))throw new TypeError("Cannot call a class as a function")})(this,d)}var b,l,f;return b=d,f=[{key:"urlEncode",value:function(p){return r(p)}},{key:"jsonEncode",value:function(p){return JSON.stringify(p)}},{key:"formEncode",value:function(p){if(this.isFormData(p))return p;if(this.isFormElement(p))return new FormData(p);if(this.isObject(p)){var y=new FormData;return Object.keys(p).forEach(function(w){var v=p[w];y.append(w,v)}),y}throw new Error("`data` must be an instance of Object, FormData or <FORM> HTMLElement")}},{key:"isObject",value:function(p){return Object.prototype.toString.call(p)==="[object Object]"}},{key:"isFormData",value:function(p){return p instanceof FormData}},{key:"isFormElement",value:function(p){return p instanceof HTMLFormElement}},{key:"selectFiles",value:function(){var p=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return new Promise(function(y,w){var v=document.createElement("INPUT");v.type="file",p.multiple&&v.setAttribute("multiple","multiple"),p.accept&&v.setAttribute("accept",p.accept),v.style.display="none",document.body.appendChild(v),v.addEventListener("change",function(t){var e=t.target.files;y(e),document.body.removeChild(v)},!1),v.click()})}},{key:"parseHeaders",value:function(p){var y=p.trim().split(/[\r\n]+/),w={};return y.forEach(function(v){var t=v.split(": "),e=t.shift(),u=t.join(": ");e&&(w[e]=u)}),w}}],(l=null)&&a(b.prototype,l),f&&a(b,f),d}()},function(n,c){var i=function(r){return encodeURIComponent(r).replace(/[!'()*]/g,escape).replace(/%20/g,"+")},a=function(r,d,b,l){return d=d||null,b=b||"&",l=l||null,r?function(f){for(var p=new Array,y=0;y<f.length;y++)f[y]&&p.push(f[y]);return p}(Object.keys(r).map(function(f){var p,y,w=f;if(l&&(w=l+"["+w+"]"),typeof r[f]=="object"&&r[f]!==null)p=a(r[f],null,b,w);else{d&&(y=w,w=!isNaN(parseFloat(y))&&isFinite(y)?d+Number(w):w);var v=r[f];v=(v=(v=(v=v===!0?"1":v)===!1?"0":v)===0?"0":v)||"",p=i(w)+"="+i(v)}return p})).join(b).replace(/[!'()*]/g,""):""};n.exports=a}])})})(B);var G=B.exports;const O=$(G);async function I(E,o){return""}function H(E){return E.type?E.type.split("/")[0].toUpperCase():L(E.name)}class J{constructor({config:o,onUpload:n,onError:c}){this.config=o,this.onUpload=n,this.onError=c}async uploadSelectedFile({onPreview:o}){try{let n;if(this.config.uploader&&typeof this.config.uploader.uploadByFile=="function"){const i=(await O.selectFiles({accept:this.config.types}))[0],a=H(i);I(i,a).then(o),n={tag:a,...await this.config.uploader.uploadByFile(i)}}else n=await O.transport({url:this.config.endpoints.byFile,data:this.config.additionalRequestData,accept:this.config.types,headers:this.config.additionalRequestHeaders,beforeSend:c=>{preparePreview(c[0]);const i=c[0],a=H(i);I(i,a).then(o)},fieldName:this.config.field}).then(c=>c.body);this.onUpload(n)}catch(n){this.onError(n)}}async uploadByUrl(o){try{let n;this.config.uploader&&typeof this.config.uploader.uploadByUrl=="function"?n={tag:L(o),...await this.config.uploader.uploadByUrl(o)}:n=await O.post({url:this.config.endpoints.byUrl,data:Object.assign({url:o},this.config.additionalRequestData),type:O.contentType.JSON,headers:this.config.additionalRequestHeaders}).then(c=>c.body),this.onUpload(n)}catch(n){this.onError(n)}}async uploadByFile(o,{onPreview:n}){const c=H(o);I().then(n);try{let i;if(this.config.uploader&&typeof this.config.uploader.uploadByFile=="function")i={tag:c,...await this.config.uploader.uploadByFile(o)};else{const a=new FormData;a.append(this.config.field,o),this.config.additionalRequestData&&Object.keys(this.config.additionalRequestData).length&&Object.entries(this.config.additionalRequestData).forEach(([r,d])=>{a.append(r,d)}),i=O.post({url:this.config.endpoints.byFile,data:a,type:O.contentType.JSON,headers:this.config.additionalRequestHeaders}).then(r=>r.body)}this.onUpload(i)}catch(i){this.onError(i)}}}/**
 * Image Tool for the Editor.js
 *
 * @author CodeX <team@codex.so>
 * @license MIT
 * @see {@link https://github.com/editor-js/image}
 *
 * To developers.
 * To simplify Tool structure, we split it to 4 parts:
 *  1) index.js — main Tool's interface, public API and methods for working with data
 *  2) uploader.js — module that has methods for sending files via AJAX: from device, by URL or File pasting
 *  3) ui.js — module for UI manipulations: render, showing preloader, etc
 *  4) tunes.js — working with Block Tunes: render buttons, handle clicks
 *
 * For debug purposes there is a testing server
 * that can save uploaded files and return a Response {@link UploadResponseFormat}
 *
 *       $ node dev/server.js
 *
 * It will expose 8008 port, so you can pass http://localhost:8008 with the Tools config:
 *
 * media: {
 *   class: MediaTool,
 *   config: {
 *     endpoints: {
 *       byFile: 'http://localhost:8008/uploadFile',
 *       byUrl: 'http://localhost:8008/fetchUrl',
 *     }
 *   },
 * },
 */class P{static get isReadOnlySupported(){return!0}static get toolbox(){return{icon:D,title:"Media"}}static get tunes(){return[{name:"withBorder",icon:N,title:"With border",toggle:!0},{name:"stretched",icon:q,title:"Stretch media",toggle:!0},{name:"withBackground",icon:F,title:"With background",toggle:!0}]}constructor({data:o,config:n,api:c,readOnly:i,block:a}){this.api=c,this.readOnly=i,this.block=a,this.config={endpoints:n.endpoints||"",additionalRequestData:n.additionalRequestData||{},additionalRequestHeaders:n.additionalRequestHeaders||{},field:n.field||"media",types:n.types||"image/*,audio/*,video/*",captionPlaceholder:this.api.i18n.t(n.captionPlaceholder||"Caption"),buttonContent:n.buttonContent||"",uploader:n.uploader||void 0,actions:n.actions||[]},this.uploader=new J({config:this.config,onUpload:r=>this.onUpload(r),onError:r=>this.uploadingFailed(r)}),this.ui=new T({api:c,config:this.config,onSelectFile:()=>{this.uploader.uploadSelectedFile({onPreview:r=>{this.ui.showPreloader(r)}})},readOnly:i}),this._data={},this.data=o}render(){return this.ui.render(this.data)}validate(o){return o.file&&o.file.url}save(){const o=this.ui.nodes.caption;return this._data.caption=o.innerHTML,this.data}renderSettings(){return P.tunes.concat(this.config.actions).map(n=>({icon:n.icon,label:this.api.i18n.t(n.title),name:n.name,toggle:n.toggle,isActive:this.data[n.name],onActivate:()=>{if(typeof n.action=="function"){n.action(n.name);return}this.tuneToggled(n.name)}}))}appendCallback(){this.ui.nodes.fileButton.click()}static get pasteConfig(){return{tags:[{img:{src:!0}}],patterns:{media:V},files:{mimeTypes:["image/*","audio/*","video/*"]}}}async onPaste(o){switch(o.type){case"tag":{const n=o.detail.data;if(/^blob:/.test(n.src)){const i=await(await fetch(n.src)).blob();this.uploadFile(i);break}this.uploadUrl(n.src);break}case"pattern":{const n=o.detail.data;this.uploadUrl(n);break}case"file":{const n=o.detail.file;this.uploadFile(n);break}}}set data(o){this.media=o.file,this._data.caption=o.caption||"",this.ui.fillCaption(this._data.caption),P.tunes.forEach(({name:n})=>{const c=typeof o[n]<"u"?o[n]===!0||o[n]==="true":!1;this.setTune(n,c)})}get data(){return this._data}set media(o){this._data.file=o||{},o&&o.url&&this.ui.fillMedia(o.url,o.tag)}onUpload(o){o.success&&o.file?this.media=o.file:this.uploadingFailed("incorrect response: "+JSON.stringify(o))}uploadingFailed(o){console.log("Media Tool: uploading failed because of",o),this.api.notifier.show({message:this.api.i18n.t("Couldn’t upload medium. Please try another."),style:"error"}),this.ui.hidePreloader()}tuneToggled(o){this.setTune(o,!this._data[o])}setTune(o,n){this._data[o]=n,this.ui.applyTune(o,n),o==="stretched"&&Promise.resolve().then(()=>{this.block.stretched=n}).catch(c=>{console.error(c)})}uploadFile(o){this.uploader.uploadByFile(o,{onPreview:n=>{this.ui.showPreloader(n)}})}uploadUrl(o){this.ui.showPreloader(o),this.uploader.uploadByUrl(o)}}return P});
