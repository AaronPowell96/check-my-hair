parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"K1T5":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.getFriendlyErrorMessage=s,exports.errorMessages=void 0;const e=[{name:"NotFoundError",message:"Looks like we cant access your webcam"},{name:"DevicesNotFoundError",message:"Looks like we cant access your webcam"},{name:"NotReadableError",message:"Looks like we cant access your webcam"},{name:"TrackStartError",message:"Looks like we cant access your webcam"},{name:"OverconstrainedError",message:"Looks like we cant access your webcam"},{name:"ConstraintNotSatisfiedError",message:"Looks like we cant access your webcam"},{name:"NotAllowedError",message:"Looks like we cant access your webcam"},{name:"PermissionDeniedError",message:"Looks like we cant access your webcam"}];function s(s){const o=e.find(e=>e.name===s.name);return o?o.message:"Oops - something went wrong!"}exports.errorMessages=e;
},{}],"JGqJ":[function(require,module,exports) {
"use strict";var e=require("./errorMessages"),t=function(e,t,n,i){return new(n||(n=Promise))(function(o,r){function c(e){try{d(i.next(e))}catch(t){r(t)}}function a(e){try{d(i.throw(e))}catch(t){r(t)}}function d(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n(function(e){e(t)})).then(c,a)}d((i=i.apply(e,t||[])).next())})};const n=document.querySelector("video.video1"),i=document.querySelector("video.video2"),o=document.querySelector(".video"),r=document.querySelector(".text"),c=document.querySelector(".start-camera");function a(t){r.textContent=(0,e.getFriendlyErrorMessage)(t)}function d(){return t(this,void 0,void 0,function*(){const e=yield navigator.mediaDevices.getUserMedia({audio:!1,video:{width:{ideal:3840},height:{ideal:2160}}}).catch(a);return console.log("returning stream"),yield getDevices(),e})}function u(){return t(this,void 0,void 0,function*(){return(yield navigator.mediaDevices.enumerateDevices()).filter(e=>"videoinput"===e.kind)})}function s(e){const t=`\n    <div class="camera">\n      <video autoplay></video>\n      <p>${e.label}</p>\n    </div>\n  `;return document.createRange().createContextualFragment(t)}function l(){return t(this,void 0,void 0,function*(){yield navigator.mediaDevices.getUserMedia({audio:!1,video:!0});console.log("initial stream");const e=yield u();console.table(e);const t=e.map(function(e){return navigator.mediaDevices.getUserMedia({audio:!1,video:{deviceId:{exact:e.deviceId}}})}),n=yield Promise.all(t).catch(console.error);console.log({streams:n}),e.map(s).forEach(e=>o.append(e)),o.querySelectorAll("video").forEach((e,t)=>{e.srcObject=n[t]})})}function v(){return t(this,void 0,void 0,function*(){const e=yield d();n&&e&&(n.srcObject=e)})}c.addEventListener("click",l);
},{"./errorMessages":"K1T5"}]},{},["JGqJ"], null)
//# sourceMappingURL=/scripts.79387aa5.js.map