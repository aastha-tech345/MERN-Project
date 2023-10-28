/*! For license information please see 3024.ab967304.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunk_coreui_coreui_free_react_admin_template=self.webpackChunk_coreui_coreui_free_react_admin_template||[]).push([[3024],{23024:function(t,r,e){e.r(r);var n=e(74165),o=e(15861),i=e(29439),a=e(72791),c=e(11087),s=e(78983),u=e(24846),l=e(99161),h=e(93647),f=e(80184);r.default=function(){var t=(0,a.useState)(""),r=(0,i.Z)(t,2),e=r[0],p=r[1],d=(0,a.useState)(""),v=(0,i.Z)(d,2),y=v[0],m=v[1],g=function(){var t=(0,o.Z)((0,n.Z)().mark((function t(){var r,o,i,a,c;return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,r={username:e,password:y},e&&y){t.next=4;break}return t.abrupt("return");case 4:return t.next=6,fetch("".concat("http://localhost:4142","/user/login"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(r)});case 6:return o=t.sent,t.next=9,o.json();case 9:i=t.sent,console.log(i),a=i.student.tokens[0].token,c=i.student.role,window.localStorage.setItem("token",a),window.localStorage.setItem("role",c),t.next=21;break;case 17:t.prev=17,t.t0=t.catch(0),console.error("Error:",t.t0),alert("An error occurred. Please try again later.");case 21:case"end":return t.stop()}}),t,null,[[0,17]])})));return function(){return t.apply(this,arguments)}}();return(0,f.jsx)("div",{className:"bg-light min-vh-100 d-flex flex-row align-items-center",children:(0,f.jsx)(s.KB,{children:(0,f.jsx)(s.rb,{className:"justify-content-center",children:(0,f.jsx)(s.b7,{md:8,children:(0,f.jsxs)(s.dL,{children:[(0,f.jsx)(s.xH,{className:"p-4",children:(0,f.jsx)(s.sl,{children:(0,f.jsxs)(s.lx,{children:[(0,f.jsx)("h1",{children:"Login"}),(0,f.jsx)("p",{className:"text-medium-emphasis",children:"Sign In to your account"}),(0,f.jsxs)(s.YR,{className:"mb-3",children:[(0,f.jsx)(s.wV,{children:(0,f.jsx)(u.Z,{icon:l.E})}),(0,f.jsx)(s.jO,{placeholder:"Username",value:e,onChange:function(t){p(t.target.value)},autoComplete:"username"})]}),(0,f.jsxs)(s.YR,{className:"mb-4",children:[(0,f.jsx)(s.wV,{children:(0,f.jsx)(u.Z,{icon:h.U})}),(0,f.jsx)(s.jO,{type:"password",value:y,onChange:function(t){m(t.target.value)},placeholder:"Password",autoComplete:"current-password"})]}),(0,f.jsxs)(s.rb,{children:[(0,f.jsx)(s.b7,{xs:6,children:(0,f.jsx)(s.u5,{color:"primary",onClick:g,className:"px-4",children:"Login"})}),(0,f.jsx)(s.b7,{xs:6,className:"text-right",children:(0,f.jsx)(s.u5,{color:"link",onClick:g,className:"px-0",children:"Forgot password?"})})]})]})})}),(0,f.jsx)(s.xH,{className:"text-white bg-primary py-5",style:{width:"44%"},children:(0,f.jsx)(s.sl,{className:"text-center",children:(0,f.jsxs)("div",{children:[(0,f.jsx)("h2",{children:"Sign up"}),(0,f.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}),(0,f.jsx)(c.rU,{to:"/register",children:(0,f.jsx)(s.u5,{color:"primary",className:"mt-3",active:!0,tabIndex:-1,children:"Register Now!"})})]})})})]})})})})})}},93647:function(t,r,e){e.d(r,{U:function(){return n}});var n=["512 512","<path fill='var(--ci-primary-color, currentColor)' d='M384,200V144a128,128,0,0,0-256,0v56H88V328c0,92.635,75.364,168,168,168s168-75.365,168-168V200ZM160,144a96,96,0,0,1,192,0v56H160ZM392,328c0,74.99-61.01,136-136,136s-136-61.01-136-136V232H392Z' class='ci-primary'/>"]},99161:function(t,r,e){e.d(r,{E:function(){return n}});var n=["512 512","<path fill='var(--ci-primary-color, currentColor)' d='M411.6,343.656l-72.823-47.334,27.455-50.334A80.23,80.23,0,0,0,376,207.681V128a112,112,0,0,0-224,0v79.681a80.236,80.236,0,0,0,9.768,38.308l27.455,50.333L116.4,343.656A79.725,79.725,0,0,0,80,410.732V496H448V410.732A79.727,79.727,0,0,0,411.6,343.656ZM416,464H112V410.732a47.836,47.836,0,0,1,21.841-40.246l97.66-63.479-41.64-76.341A48.146,48.146,0,0,1,184,207.681V128a80,80,0,0,1,160,0v79.681a48.146,48.146,0,0,1-5.861,22.985L296.5,307.007l97.662,63.479h0A47.836,47.836,0,0,1,416,410.732Z' class='ci-primary'/>"]},15861:function(t,r,e){function n(t,r,e,n,o,i,a){try{var c=t[i](a),s=c.value}catch(u){return void e(u)}c.done?r(s):Promise.resolve(s).then(n,o)}function o(t){return function(){var r=this,e=arguments;return new Promise((function(o,i){var a=t.apply(r,e);function c(t){n(a,o,i,c,s,"next",t)}function s(t){n(a,o,i,c,s,"throw",t)}c(void 0)}))}}e.d(r,{Z:function(){return o}})},74165:function(t,r,e){e.d(r,{Z:function(){return o}});var n=e(71002);function o(){o=function(){return r};var t,r={},e=Object.prototype,i=e.hasOwnProperty,a=Object.defineProperty||function(t,r,e){t[r]=e.value},c="function"==typeof Symbol?Symbol:{},s=c.iterator||"@@iterator",u=c.asyncIterator||"@@asyncIterator",l=c.toStringTag||"@@toStringTag";function h(t,r,e){return Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[r]}try{h({},"")}catch(t){h=function(t,r,e){return t[r]=e}}function f(t,r,e,n){var o=r&&r.prototype instanceof x?r:x,i=Object.create(o.prototype),c=new C(n||[]);return a(i,"_invoke",{value:O(t,e,c)}),i}function p(t,r,e){try{return{type:"normal",arg:t.call(r,e)}}catch(t){return{type:"throw",arg:t}}}r.wrap=f;var d="suspendedStart",v="suspendedYield",y="executing",m="completed",g={};function x(){}function w(){}function j(){}var b={};h(b,s,(function(){return this}));var L=Object.getPrototypeOf,_=L&&L(L(V([])));_&&_!==e&&i.call(_,s)&&(b=_);var E=j.prototype=x.prototype=Object.create(b);function N(t){["next","throw","return"].forEach((function(r){h(t,r,(function(t){return this._invoke(r,t)}))}))}function k(t,r){function e(o,a,c,s){var u=p(t[o],t,a);if("throw"!==u.type){var l=u.arg,h=l.value;return h&&"object"==(0,n.Z)(h)&&i.call(h,"__await")?r.resolve(h.__await).then((function(t){e("next",t,c,s)}),(function(t){e("throw",t,c,s)})):r.resolve(h).then((function(t){l.value=t,c(l)}),(function(t){return e("throw",t,c,s)}))}s(u.arg)}var o;a(this,"_invoke",{value:function(t,n){function i(){return new r((function(r,o){e(t,n,r,o)}))}return o=o?o.then(i,i):i()}})}function O(r,e,n){var o=d;return function(i,a){if(o===y)throw new Error("Generator is already running");if(o===m){if("throw"===i)throw a;return{value:t,done:!0}}for(n.method=i,n.arg=a;;){var c=n.delegate;if(c){var s=Z(c,n);if(s){if(s===g)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===d)throw o=m,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=y;var u=p(r,e,n);if("normal"===u.type){if(o=n.done?m:v,u.arg===g)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(o=m,n.method="throw",n.arg=u.arg)}}}function Z(r,e){var n=e.method,o=r.iterator[n];if(o===t)return e.delegate=null,"throw"===n&&r.iterator.return&&(e.method="return",e.arg=t,Z(r,e),"throw"===e.method)||"return"!==n&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+n+"' method")),g;var i=p(o,r.iterator,e.arg);if("throw"===i.type)return e.method="throw",e.arg=i.arg,e.delegate=null,g;var a=i.arg;return a?a.done?(e[r.resultName]=a.value,e.next=r.nextLoc,"return"!==e.method&&(e.method="next",e.arg=t),e.delegate=null,g):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,g)}function S(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function P(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function C(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(S,this),this.reset(!0)}function V(r){if(r||""===r){var e=r[s];if(e)return e.call(r);if("function"==typeof r.next)return r;if(!isNaN(r.length)){var o=-1,a=function e(){for(;++o<r.length;)if(i.call(r,o))return e.value=r[o],e.done=!1,e;return e.value=t,e.done=!0,e};return a.next=a}}throw new TypeError((0,n.Z)(r)+" is not iterable")}return w.prototype=j,a(E,"constructor",{value:j,configurable:!0}),a(j,"constructor",{value:w,configurable:!0}),w.displayName=h(j,l,"GeneratorFunction"),r.isGeneratorFunction=function(t){var r="function"==typeof t&&t.constructor;return!!r&&(r===w||"GeneratorFunction"===(r.displayName||r.name))},r.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,j):(t.__proto__=j,h(t,l,"GeneratorFunction")),t.prototype=Object.create(E),t},r.awrap=function(t){return{__await:t}},N(k.prototype),h(k.prototype,u,(function(){return this})),r.AsyncIterator=k,r.async=function(t,e,n,o,i){void 0===i&&(i=Promise);var a=new k(f(t,e,n,o),i);return r.isGeneratorFunction(e)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},N(E),h(E,l,"Generator"),h(E,s,(function(){return this})),h(E,"toString",(function(){return"[object Generator]"})),r.keys=function(t){var r=Object(t),e=[];for(var n in r)e.push(n);return e.reverse(),function t(){for(;e.length;){var n=e.pop();if(n in r)return t.value=n,t.done=!1,t}return t.done=!0,t}},r.values=V,C.prototype={constructor:C,reset:function(r){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(P),!r)for(var e in this)"t"===e.charAt(0)&&i.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(r){if(this.done)throw r;var e=this;function n(n,o){return c.type="throw",c.arg=r,e.next=n,o&&(e.method="next",e.arg=t),!!o}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],c=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var s=i.call(a,"catchLoc"),u=i.call(a,"finallyLoc");if(s&&u){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(s){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,r){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc<=this.prev&&i.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=r&&r<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=r,o?(this.method="next",this.next=o.finallyLoc,g):this.complete(a)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),g},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),P(e),g}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc===t){var n=e.completion;if("throw"===n.type){var o=n.arg;P(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(r,e,n){return this.delegate={iterator:V(r),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=t),g}},r}}}]);
//# sourceMappingURL=3024.ab967304.chunk.js.map