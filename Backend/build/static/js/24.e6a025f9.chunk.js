"use strict";(self.webpackChunk_coreui_coreui_free_react_admin_template=self.webpackChunk_coreui_coreui_free_react_admin_template||[]).push([[24],{23024:(e,a,t)=>{t.r(a),t.d(a,{default:()=>v});var s=t(72791),r=t(2677),n=t(13855),l=t(16157),o=t(89743),i=t(57689),d=t(11947),c=t(29655),u=(t(5462),t(78983)),m=t(80184);const h=()=>{const[e,a]=(0,s.useState)(""),[t,h]=(0,s.useState)(""),v=(0,i.s0)(),[x,b]=(0,s.useState)(!1);return(0,m.jsxs)("div",{className:" min-vh-100 d-flex flex-row align-items-center",style:{background:"#015291"},children:[(0,m.jsx)(u.KB,{children:(0,m.jsx)(u.rb,{className:"justify-content-center",children:(0,m.jsxs)(u.b7,{md:4,children:[(0,m.jsx)("img",{className:"mb-2",src:d,style:{height:"90px"},alt:"..."}),(0,m.jsx)("br",{}),(0,m.jsx)(u.dL,{children:(0,m.jsx)(u.xH,{className:"p-4",children:(0,m.jsx)(u.sl,{children:(0,m.jsxs)(n.Z,{noValidate:!0,validated:x,children:[(0,m.jsx)("h4",{style:{color:"#015291",fontWeight:"normal",textAlign:"center"},children:"Anmeldung"}),(0,m.jsx)(o.Z,{className:"mb-3",children:(0,m.jsxs)(n.Z.Group,{as:r.Z,md:"12",controlId:"validationCustom01",children:[(0,m.jsx)(n.Z.Label,{children:"E-Mail Adresse"}),(0,m.jsx)(n.Z.Control,{value:e,onChange:e=>a(e.target.value),required:!0,type:"email",placeholder:"E-Mail Adresse"})]})}),(0,m.jsx)(o.Z,{className:"mb-3",children:(0,m.jsxs)(n.Z.Group,{as:r.Z,md:"12",controlId:"validationCustom01",children:[(0,m.jsx)(n.Z.Label,{children:"Passwort"}),(0,m.jsx)(n.Z.Control,{required:!0,value:t,onChange:e=>h(e.target.value),type:"password",placeholder:"password"})]})}),(0,m.jsxs)("div",{children:[(0,m.jsx)("br",{}),(0,m.jsx)(l.Z,{className:"form-control",style:{background:"#015291"},onClick:async a=>{!1===a.currentTarget.checkValidity()&&(a.preventDefault(),a.stopPropagation()),b(!0);try{if(!e||!t)return;const a={email:e,password:t},o=await fetch("".concat("http://95.217.77.208:4142","/user/login"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)}),i=await o.json();if(!0===i.success){var s,r,n;c.Am.success("User Login Successfully");const e=null===i||void 0===i||null===(s=i.user)||void 0===s||null===(r=s.tokens[0])||void 0===r?void 0:r.token;window.localStorage.setItem("token",e),window.localStorage.setItem("record_id",null===i||void 0===i||null===(n=i.user)||void 0===n?void 0:n._id),v("/dashboard"),window.location.reload()}else l="Invalid Credentials",(0,c.Am)(l)}catch(o){console.error("Error:",o),c.Am.error("Invalid Credentials")}var l},children:"Senden"}),(0,m.jsx)("p",{style:{textAlign:"center",color:"#015291"},color:"primary",onClick:()=>{v("/password-reset")},className:"mt-1 mx-3",tabIndex:-1,children:"Passwort vergessen ?"})]})]})})})})]})})}),(0,m.jsx)(c.Ix,{})]})},v=s.memo(h)},16157:(e,a,t)=>{t.d(a,{Z:()=>m});var s=t(81694),r=t.n(s),n=t(72791),l=t(80184);const o=["as","disabled"];function i(e){let{tagName:a,disabled:t,href:s,target:r,rel:n,role:l,onClick:o,tabIndex:i=0,type:d}=e;a||(a=null!=s||null!=r||null!=n?"a":"button");const c={tagName:a};if("button"===a)return[{type:d||"button",disabled:t},c];const u=e=>{(t||"a"===a&&function(e){return!e||"#"===e.trim()}(s))&&e.preventDefault(),t?e.stopPropagation():null==o||o(e)};return"a"===a&&(s||(s="#"),t&&(s=void 0)),[{role:null!=l?l:"button",disabled:void 0,tabIndex:t?void 0:i,href:s,target:"a"===a?r:void 0,"aria-disabled":t||void 0,rel:"a"===a?n:void 0,onClick:u,onKeyDown:e=>{" "===e.key&&(e.preventDefault(),u(e))}},c]}const d=n.forwardRef(((e,a)=>{let{as:t,disabled:s}=e,r=function(e,a){if(null==e)return{};var t,s,r={},n=Object.keys(e);for(s=0;s<n.length;s++)t=n[s],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,o);const[n,{tagName:d}]=i(Object.assign({tagName:t,disabled:s},r));return(0,l.jsx)(d,Object.assign({},r,n,{ref:a}))}));d.displayName="Button";var c=t(10162);const u=n.forwardRef(((e,a)=>{let{as:t,bsPrefix:s,variant:n="primary",size:o,active:d=!1,disabled:u=!1,className:m,...h}=e;const v=(0,c.vE)(s,"btn"),[x,{tagName:b}]=i({tagName:t,disabled:u,...h}),f=b;return(0,l.jsx)(f,{...x,...h,ref:a,disabled:u,className:r()(m,v,d&&"active",n&&"".concat(v,"-").concat(n),o&&"".concat(v,"-").concat(o),h.href&&u&&"disabled")})}));u.displayName="Button";const m=u}}]);
//# sourceMappingURL=24.e6a025f9.chunk.js.map