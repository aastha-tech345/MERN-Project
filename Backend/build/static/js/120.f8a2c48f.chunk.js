"use strict";(self.webpackChunk_coreui_coreui_free_react_admin_template=self.webpackChunk_coreui_coreui_free_react_admin_template||[]).push([[120,29],{50839:(e,t,n)=>{n.d(t,{Z:()=>o});n(72791);var s=n(13239),l=n(1582),a=n(80184);const o=()=>(0,a.jsx)(l.Z,{sx:{color:"grey.500"},spacing:2,direction:"row",children:(0,a.jsx)(s.Z,{color:"success",size:20})})},94029:(e,t,n)=>{n.r(t),n.d(t,{default:()=>i});var s=n(72791),l=n(59513),a=n.n(l),o=(n(68639),n(80184));const i=e=>{let{onChange:t,selected:n}=e;return(0,s.useEffect)((()=>{}),[]),(0,o.jsx)(a(),{className:"form-control",placeholderText:"Geburtsdatum",selected:n,onChange:t})}},64120:(e,t,n)=>{n.r(t),n.d(t,{default:()=>N});var s=n(72791),l=n(48096),a=n(23090),o=n(16856),i=n(8544),r=n(57689),d=n(11087),c=n(29655),u=(n(5462),n(99355)),m=n(50839),h=n(13855),p=n(80184);const x=e=>{let{setHide:t,getDetails:n}=e;let l=localStorage.getItem("CustomerRecord"),a=JSON.parse(l);const[o,i]=(0,s.useState)({fname:null===a||void 0===a?void 0:a.fname,lname:null===a||void 0===a?void 0:a.lname,street:null===a||void 0===a?void 0:a.street,dob:null===a||void 0===a?void 0:a.dob,phone:null===a||void 0===a?void 0:a.phone,plz:null===a||void 0===a?void 0:a.plz,city:null===a||void 0===a?void 0:a.city,land:null===a||void 0===a?void 0:a.land,group:a.group}),[r,d]=(0,s.useState)(null===a||void 0===a?void 0:a.email),[x,v]=(0,s.useState)(!1),[g,j]=(0,s.useState)(!1),C=e=>{const{name:t,value:n}=e.target;i({...o,[t]:n})},f=()=>{t(!1)},b={...o,email:r};return setTimeout((()=>{j(!1)}),5e3),(0,p.jsxs)("div",{className:"modal modal-form edit-modal-form",tabIndex:-1,style:{display:"block",backgroundColor:"rgba(0,0,0,0.7)",maxHeight:"100%",color:"black"},children:[(0,p.jsx)("div",{className:"modal-dialog modal-dialog-centered",children:(0,p.jsxs)("div",{className:"modal-content",children:[(0,p.jsxs)("div",{className:"modal-header",children:[(0,p.jsx)("h4",{className:"modal-title",children:"Kunden Aktualisieren"}),(0,p.jsx)("button",{type:"button",className:"btn-close","data-bs-dismiss":"modal","aria-label":"Close",onClick:f})]}),(0,p.jsx)("div",{className:"modal-body",children:(0,p.jsxs)(h.Z,{noValidate:!0,validated:x,children:[(0,p.jsxs)("div",{className:"row",children:[(0,p.jsx)("div",{className:"col-sm-6",children:(0,p.jsx)("input",{type:"text",placeholder:"Vornamen",className:"form-control",id:"inputPassword",name:"fname",value:o.fname,onChange:C,required:!0})}),(0,p.jsx)("div",{className:"col-sm-6",children:(0,p.jsx)("input",{type:"text",placeholder:"Nachname",className:"form-control",id:"inputPassword",name:"lname",value:o.lname,onChange:C,required:!0})})]}),(0,p.jsx)("div",{className:"row",children:(0,p.jsx)("div",{className:"col-sm-12",children:(0,p.jsx)("input",{type:"text",placeholder:"Stra\u03b2e + Hnr",className:"form-control",id:"inputPassword",name:"street",value:o.street,onChange:C})})}),(0,p.jsxs)("div",{className:"row",children:[(0,p.jsx)("div",{className:"col-sm-6",children:(0,p.jsx)("input",{type:"email",name:"email",value:r,onChange:e=>{const t=e.target.value;/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(t.toLowerCase())?d(t):d("")},placeholder:"jo@gmail.com",className:"form-control",id:"inputPassword",required:!0})}),(0,p.jsx)("div",{className:"col-sm-6",children:(0,p.jsx)("input",{value:o.phone,onChange:e=>{const t=e.target.value.replace(/[^0-9]/g,"");C({target:{name:"phone",value:t}})},type:"tel",placeholder:"Telefon",className:"form-control",id:"inputTelephone",maxLength:10,minLength:3})})]}),(0,p.jsxs)("div",{className:"row",children:[(0,p.jsx)("div",{className:"col-sm-6",children:(0,p.jsx)("input",{type:"tel",value:o.plz,onChange:e=>{const t=e.target.value.replace(/[^0-9]/g,"");i({...o,plz:t})},placeholder:"PLZ",className:"form-control",id:"inputPassword",maxLength:6,minLength:3,required:!0})}),(0,p.jsx)("div",{className:"col-sm-6",children:(0,p.jsx)("input",{type:"text",placeholder:"Stadt",className:"form-control",id:"inputPassword",name:"city",value:o.city,onChange:C,required:!0})})]}),(0,p.jsxs)("div",{className:"row",children:[(0,p.jsx)("div",{className:"col-sm-6",children:(0,p.jsx)("input",{value:o.dob,name:"dob",onChange:C,type:"text",placeholder:"Geburtsdatum",className:"form-control",id:"inputTelephone"})}),(0,p.jsx)("div",{className:"col-sm-6",children:(0,p.jsx)("input",{type:"text",name:"land",value:o.land,onChange:C,placeholder:"Land",className:"form-control",id:"inputPassword"})})]})]})}),(0,p.jsx)("div",{className:"modal-footer",children:(0,p.jsxs)("div",{className:"btn-wrap",children:[(0,p.jsx)("button",{type:"button",className:"btn btn-cancel","data-bs-dismiss":"modal",onClick:f,children:"Abbrechen"}),(0,p.jsx)("button",{type:"button",className:"btn  btn-save ms-3",onClick:async e=>{if(!1===e.currentTarget.checkValidity()&&(e.preventDefault(),e.stopPropagation()),v(!0),!o.fname||!o.lname)return c.Am.warning("Bitte geben Sie Fname und Lname ein");if(!r)return c.Am.warning("Ung\xfcltige E-Mail");e.preventDefault();try{j(!0);!0===(await(0,u.yu)("".concat("http://95.217.77.208:4142","/customer/get_record/edit/").concat(null===a||void 0===a?void 0:a._id),b)).data.success?(j(!1),i({fname:"",lname:"",street:"",phone:"",plz:"",city:"",land:"",group:"",dob:""}),d(""),c.Am.success("Kundendatensatz erfolgreich aktualisiert"),f(),n()):c.Am.error("Etwas ist schief gelaufen")}catch(t){console.log(t)}},children:g?(0,p.jsx)(m.Z,{}):(0,p.jsx)("div",{children:" Speichern"})})]})})]})}),(0,p.jsx)(c.Ix,{})]})};var v=n(44818),g=n(1582),j=n(61522);const C=e=>{var t;let{setPrint:n,getDetails:l}=e;let a=localStorage.getItem("CustomerRecord"),o=JSON.parse(a);console.log("aastha",o.email);const[i,r]=(0,s.useState)({fname:null===o||void 0===o?void 0:o.fname,lname:null===o||void 0===o?void 0:o.lname,phone:null===o||void 0===o?void 0:o.phone,statu:null===o||void 0===o?void 0:o.statu,gender:null===o||void 0===o?void 0:o.gender,email:null===o||void 0===o?void 0:o.email}),d=()=>{n(!1)},[u,m]=(0,s.useState)([]),[h,x]=(0,s.useState)(1);(0,s.useEffect)((()=>{(async()=>{try{var e;const t=await fetch("".concat("http://95.217.77.208:4142","/print/get_print?page=").concat(h)),n=await t.json(),s=null===n||void 0===n||null===(e=n.result)||void 0===e?void 0:e.filter((e=>"active"===e.is_deleted));m(s)}catch(t){console.error("Error fetching print details:",t)}})()}),[h]);const v=u.filter((e=>"customer"===(null===e||void 0===e?void 0:e.designation))),g=v.length>0&&(null===(t=v[0])||void 0===t?void 0:t.content)||"";console.log("template",v),console.log("peirnt",g);const j=g.replace("{fname}",null===o||void 0===o?void 0:o.fname).replace("{email}",null===o||void 0===o?void 0:o.email).replace("{id}",null===o||void 0===o?void 0:o.id).replace("{phone}",null===o||void 0===o?void 0:o.phone).replace("{group}",null===o||void 0===o?void 0:o.group).replace("{startDate}",null===o||void 0===o?void 0:o.dob).replace("{street}",null===o||void 0===o?void 0:o.street);let C="\n  <html>\n    <head>\n    </head>\n    <body>\n      ".concat(j,"\n    </body>\n  </html>\n");return(0,p.jsxs)("div",{id:"body",className:"modal modal-form edit-modal-form",tabIndex:-1,style:{display:"block",backgroundColor:"rgba(0,0,0,0.8)",color:"black"},children:[(0,p.jsx)("div",{className:"modal-dialog modal-lg modal-dialog-centered ",children:(0,p.jsxs)("div",{className:"modal-content",children:[(0,p.jsx)("div",{className:"modal-header",children:(0,p.jsx)("button",{type:"button",className:"btn-close","data-bs-dismiss":"modal","aria-label":"Close",onClick:d})}),(0,p.jsx)("div",{className:"p-2",children:(0,p.jsx)("div",{id:"data",style:{overflowY:"scroll",height:"680px"},dangerouslySetInnerHTML:{__html:C}})}),(0,p.jsx)("div",{className:"modal-footer",style:{display:"flex",justifyItems:"end"},children:(0,p.jsxs)("div",{className:"mx-auto ",children:[(0,p.jsx)("button",{type:"button",className:"btn btn mx-2","data-bs-dismiss":"modal",onClick:d,style:{background:"#d04545",border:"#d04545",color:"white"},children:"Abbrechen"}),(0,p.jsx)("button",{type:"button",className:"btn",onClick:()=>{var e=document.getElementById("body").innerHTML,t=document.getElementById("data").innerHTML,n=document.createElement("iframe");n.style.display="none",document.body.appendChild(n);var s=n.contentDocument.createElement("style");s.innerHTML="\n      @page {\n        size: A4;\n        margin: 0;\n        padding: 0;\n      }\n      body {\n        margin: 0;\n        padding: 0;\n        background: none;\n      }\n    ",n.contentDocument.head.appendChild(s),n.contentDocument.body.innerHTML=t,n.contentWindow.print(),document.body.removeChild(n),document.getElementById("body").innerHTML=e,window.location.reload()},style:{background:"#015291",color:"white"},children:"Spenchern"})]})})]})}),(0,p.jsx)(c.Ix,{})]})};n(68639);var f=n(94029),b=n(28782);const w=()=>{var e;let t=localStorage.getItem("record"),n=JSON.parse(t);const u="http://95.217.77.208:4142",[m,w]=(0,s.useState)([]),[N,y]=(0,s.useState)([]),[k,L]=(0,s.useState)(),[S,_]=(0,s.useState)(),[I,Z]=(0,s.useState)(),[P,F]=(0,s.useState)(null),[A,M]=(0,s.useState)(),[D,T]=(0,s.useState)(),[E,H]=(0,s.useState)(),[V,z]=(0,s.useState)(),[R,B]=(0,s.useState)(),[K]=(0,s.useState)(null===n||void 0===n||null===(e=n.user)||void 0===e?void 0:e._id),[W,O]=(0,s.useState)(!1),[q,J]=(0,s.useState)(!1),[U,Y]=(0,s.useState)(!1),[G,$]=(0,s.useState)(1),[Q,X]=(0,s.useState)(1),[ee,te]=(0,s.useState)(""),ne=(0,r.s0)(),[se]=(0,s.useState)("HVD"+Math.floor(1e3+9e3*Math.random())),[le,ae]=(0,s.useState)(""),oe=((0,s.useRef)(null),()=>J(!1)),ie=(0,s.useRef)(),[re,de]=(0,s.useState)(null),[ce,ue]=(0,s.useState)(!1);let me=localStorage.getItem("tabId")||"customer_info";const he=()=>{ne("/customer/customer_info")},pe=[{title:"KLIENTINNEN",dataIndex:"fname",width:"20%",render:(e,t)=>(0,p.jsx)(d.rU,{style:{textDecoration:"none",color:"black"},to:"/customer/".concat(me),onClick:()=>Ce(e,t),children:e.slice(0,1).toUpperCase()+e.slice(1).toLowerCase()})},{title:"KLIENTINNEN-ID",dataIndex:"id"},{title:"E-MAIL",dataIndex:"email",width:"20%"},{title:"TELEFON",dataIndex:"phone"},{title:"STATUS",dataIndex:"group",render:(e,t)=>(0,p.jsx)("div",{className:"dm-badge",style:{background:""===e?"#C20F0F":"HVD-PV"===e?"#4EB772":"transparent",border:""===e?"1px solid transparent":"HVD-PV"===e?"1px solid rgba(78, 183, 114, 0.50)":""},children:""===e?(0,p.jsx)("span",{children:"PV-ALT"}):(0,p.jsx)("b",{children:e})})},{title:"AKTION",dataIndex:"action",render:(e,t)=>{var s,l,a,i;return(0,p.jsxs)(p.Fragment,{children:[(null===n||void 0===n||null===(s=n.user)||void 0===s?void 0:s._id)===t.created_by&&(0,j.Mt)().includes("owned")||(0,j.Mt)().includes("yes")||"true"===(null===n||void 0===n||null===(l=n.user)||void 0===l?void 0:l.isAdminFullRights)?(0,p.jsx)(p.Fragment,{children:(0,p.jsxs)("button",{style:{background:"none",border:"none"},onClick:he,children:[(0,p.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:[(0,p.jsxs)("g",{clipPath:"url(#clip0_476_24741)",children:[(0,p.jsx)("path",{d:"M4 20.0003H8L18.5 9.5003C19.0304 8.96987 19.3284 8.25045 19.3284 7.5003C19.3284 6.75016 19.0304 6.03074 18.5 5.5003C17.9696 4.96987 17.2501 4.67188 16.5 4.67188C15.7499 4.67187 15.0304 4.96987 14.5 5.5003L4 16.0003V20.0003Z",stroke:"#005291",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),(0,p.jsx)("path",{d:"M13.5 6.5L17.5 10.5",stroke:"#005291",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]}),(0,p.jsx)("defs",{children:(0,p.jsx)("clipPath",{id:"clip0_476_24741",children:(0,p.jsx)("rect",{width:"24",height:"24",fill:"white"})})})]}),(0,p.jsx)("span",{children:"Bearbeiten"})]})}):"",(null===n||void 0===n||null===(a=n.user)||void 0===a?void 0:a._id)===t.created_by&&(0,j.fK)().includes("owned")||(0,j.fK)().includes("yes")||"true"===(null===n||void 0===n||null===(i=n.user)||void 0===i?void 0:i.isAdminFullRights)?(0,p.jsxs)("button",{style:{background:"none",border:"none"},onClick:()=>xe(t._id),children:[(0,p.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:[(0,p.jsxs)("g",{clipPath:"url(#clip0_431_1048)",children:[(0,p.jsx)("path",{d:"M5 8H19",stroke:"#C20F0F",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),(0,p.jsx)("path",{d:"M10 11V16",stroke:"#C20F0F",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),(0,p.jsx)("path",{d:"M14 11V16",stroke:"#C20F0F",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),(0,p.jsx)("path",{d:"M6 8L6.85714 18.2857C6.85714 18.7404 7.03775 19.1764 7.35925 19.4979C7.68074 19.8194 8.11677 20 8.57143 20H15.4286C15.8832 20 16.3193 19.8194 16.6408 19.4979C16.9622 19.1764 17.1429 18.7404 17.1429 18.2857L18 8",stroke:"#C20F0F",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),(0,p.jsx)("path",{d:"M9 8V5C9 4.73478 9.10536 4.48043 9.29289 4.29289C9.48043 4.10536 9.73478 4 10 4H14C14.2652 4 14.5196 4.10536 14.7071 4.29289C14.8946 4.48043 15 4.73478 15 5V8",stroke:"#C20F0F",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]}),(0,p.jsx)("defs",{children:(0,p.jsx)("clipPath",{id:"clip0_431_1048",children:(0,p.jsx)("rect",{width:"24",height:"24",fill:"white"})})})]}),(0,p.jsx)("span",{children:" L\xf6schen"})]}):"",(0,p.jsxs)("button",{style:{background:"none",border:"none"},onClick:()=>_e(t),children:[" ",(0,p.jsx)(o.zR_,{className:"fs-5",style:{color:"#615e55"}}),"\xa0Drucke"]})]})}}],xe=e=>{de(e),O(!0)},ve=()=>{O(!1)},ge=async()=>{try{var e;const t=await fetch("".concat(u,"/customer/get_record?page=").concat(G,"&resultPerPage=").concat(ee)),n=await t.json();X(null===n||void 0===n?void 0:n.pageCount);const s=null===n||void 0===n||null===(e=n.result)||void 0===e?void 0:e.filter((e=>"active"===e.status));w(s)}catch(t){console.error("Error fetching customer record:",t)}};let je=m;const Ce=(e,t)=>{let n=JSON.stringify(t);localStorage.setItem("customerDatat",n)},[fe,be]=(0,s.useState)(!1),[we,Ne]=(0,s.useState)([]),ye={onChange:e=>{Ne(e)},getCheckboxProps:e=>({disabled:"Disabled User"===e.name,name:e.name})},[ke,Le]=(0,s.useState)("");localStorage.getItem("CustomerRecord");const Se=[];null===N||void 0===N||N.map((e=>("customer"===(null===e||void 0===e?void 0:e.designation)&&(null===Se||void 0===Se||Se.push(e)),null)));const _e=e=>{let t=JSON.stringify(e);localStorage.setItem("CustomerRecord",t),ue(!0)};(0,s.useEffect)((()=>{ge(),(async()=>{try{var e;const t=await fetch("".concat(u,"/print/get_print?page=").concat(G)),n=await t.json(),s=null===n||void 0===n||null===(e=n.result)||void 0===e?void 0:e.filter((e=>"active"===e.is_deleted));y(s)}catch(t){c.Am.error("Fehler beim Abrufen des Kundendatensatzes:")}})()}),[G,ee]),(0,s.useEffect)((()=>{}),[]),(0,s.useEffect)((()=>{F(null)}),[]);return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsxs)("div",{children:[fe?(0,p.jsx)(x,{setHide:be,getDetails:ge}):"",ce?(0,p.jsx)(C,{setPrint:ue,getDetails:ge}):"",(0,p.jsx)("div",{className:"page-title",children:(0,p.jsx)("h2",{children:"KlientInnen-Listen"})}),(0,p.jsx)("div",{className:"search-filter-row",style:{background:"white",borderRadius:"5px"},children:(0,p.jsxs)("div",{className:"container-fluid",children:[(0,p.jsxs)("div",{className:"row",children:[(0,p.jsx)("div",{className:"col-md-7 mb-md-0 mb-3",children:(0,p.jsxs)("div",{className:"d-flex align-items-center",children:[(0,p.jsx)("input",{ref:ie,name:"search",value:ke,onChange:e=>Le(e.target.value),type:"search",id:"form1",placeholder:"Ihre Suche eingeben",className:"form-control form-search-control"}),(0,p.jsxs)("button",{onClick:async()=>{try{if(""===ke)return ge();const e=await fetch("".concat(u,"/customer/search/").concat(ke)),t=await e.json(),n=t.filter((e=>"active"===e.status));n.length>0?w(n):(ge(),w(t))}catch(e){console.error("Error searching data:",e.message)}},className:"filter-btn",children:[(0,p.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",children:(0,p.jsx)("path",{d:"M17.2837 3.19758L17.2819 3.19982L11.4249 10.3893L11.3125 10.5272V10.7051V15.7395C11.3125 16.0891 11.0266 16.375 10.677 16.375C10.538 16.375 10.4145 16.3294 10.3142 16.2343L10.2972 16.2182L10.2788 16.2037L7.02898 13.6566C6.81324 13.4832 6.6875 13.2225 6.6875 12.948V10.7051V10.5272L6.57512 10.3892L0.717141 3.19979L0.716307 3.19877C0.5768 3.02847 0.5 2.81363 0.5 2.59102C0.5 2.05751 0.932509 1.625 1.46602 1.625H16.534C17.0667 1.625 17.5 2.05774 17.5 2.59102C17.5 2.81391 17.4234 3.02809 17.2837 3.19758ZM1.93219 2.3125H0.879712L1.54459 3.12837L7.29738 10.1875C7.29744 10.1876 7.2975 10.1877 7.29756 10.1877C7.34744 10.2491 7.375 10.3272 7.375 10.4062V12.8109V13.0524L7.56415 13.2026L9.81415 14.9885L10.625 15.6321V14.5969V10.4062C10.625 10.3272 10.6526 10.2491 10.7025 10.1877C10.7025 10.1876 10.7026 10.1876 10.7026 10.1875L16.454 3.12832L17.1187 2.3125H16.0664H1.93219Z",fill:"#1C1D21",stroke:"white"})}),(0,p.jsx)("span",{children:"Filter"})]})]})}),(0,p.jsx)("div",{className:"col-md-5 text-end",children:(0,p.jsxs)("div",{className:"d-flex align-items-center justify-content-between justify-content-md-end text-md-end flex-md-row flex-column",children:[(0,p.jsxs)("p",{className:"mb-0 me-3",children:[(0,p.jsx)("strong",{children:we.length})," Ausgew\xe4hlte"]}),(0,p.jsxs)("button",{className:"primary-btn",style:{border:"none"},onClick:()=>J(!0),children:[(0,p.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:[(0,p.jsxs)("g",{clipPath:"url(#clip0_437_8819)",children:[(0,p.jsx)("path",{d:"M12 5V19",stroke:"white",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),(0,p.jsx)("path",{d:"M5 12H19",stroke:"white",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]}),(0,p.jsx)("defs",{children:(0,p.jsx)("clipPath",{id:"clip0_437_8819",children:(0,p.jsx)("rect",{width:"24",height:"24",fill:"white"})})})]}),(0,p.jsx)("span",{children:" Neue KlientInnen anlegen"})]})]})})]}),(0,p.jsxs)(l.Z,{show:q,onHide:oe,centered:!0,className:"modal-form",children:[(0,p.jsx)(l.Z.Header,{closeButton:!0,children:(0,p.jsx)(l.Z.Title,{children:"Neue KlientInnen anlegen"})}),(0,p.jsx)(l.Z.Body,{children:(0,p.jsxs)(h.Z,{noValidate:!0,validated:U,children:[(0,p.jsxs)("div",{className:"row",children:[(0,p.jsx)("div",{className:"col-sm-6",children:(0,p.jsx)("input",{value:k,onChange:e=>{L(e.target.value)},type:"text",placeholder:"Vornamen",className:"form-control",id:"inputPassword",required:!0})}),(0,p.jsx)("div",{className:"col-sm-6",children:(0,p.jsx)("input",{type:"text",value:S,onChange:e=>{_(e.target.value)},placeholder:"Nachname",className:"form-control",id:"inputPassword",required:!0})})]}),(0,p.jsx)("div",{className:"row",children:(0,p.jsx)("div",{className:"col-sm-12",children:(0,p.jsx)("input",{value:V,onChange:e=>{z(e.target.value)},type:"text",placeholder:"Stra\xdfe + Hausnummer",className:"form-control",id:"inputPassword"})})}),(0,p.jsxs)("div",{className:"row",children:[(0,p.jsx)("div",{className:"col-sm-6",children:(0,p.jsx)("input",{type:"email",name:"email",onChange:e=>{const t=e.target.value;/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(t.toLowerCase())?ae(t):ae("")},placeholder:"E-Mail",className:"form-control",id:"inputPassword"})}),(0,p.jsx)("div",{className:"col-sm-6",children:(0,p.jsx)("input",{value:I,onChange:e=>{const t=e.target.value.replace(/[^0-9]/g,"");Z(t)},type:"tel",placeholder:"Telefon",className:"form-control",id:"inputTelephone",maxLength:30,minLength:3})})]}),(0,p.jsxs)("div",{className:"row",children:[(0,p.jsx)("div",{className:"col-sm-6",children:(0,p.jsx)("input",{type:"text",value:D,onChange:e=>{const t=e.target.value.replace(/[^0-9]/g,"");T(t)},placeholder:"PLZ",className:"form-control",id:"inputPassword",maxLength:6,minLength:3})}),(0,p.jsx)("div",{className:"col-sm-6",children:(0,p.jsx)("input",{type:"text",value:E,onChange:e=>{const t=e.target.value.replace(/[^a-zA-Z\s'-]/g,"");H(t)},placeholder:"Stadt",className:"form-control",id:"inputPassword"})})]}),(0,p.jsxs)("div",{className:"row",children:[(0,p.jsx)("div",{className:"col-sm-6",children:(0,p.jsx)(f.default,{selected:P,onChange:e=>{let t=(new Date).getFullYear();e.getFullYear()>t&&c.Am.warning("Das Datum sollte das aktuelle Jahr nicht \xfcberschreiten"),F(e)}})}),(0,p.jsx)("div",{className:"col-sm-6",children:(0,p.jsx)("input",{type:"text",value:A,onChange:e=>{const t=e.target.value.replace(/[^a-zA-Z\s'-]/g,"");M(t)},placeholder:"Land",className:"form-control",id:"inputPassword"})})]})]})}),(0,p.jsx)(l.Z.Footer,{children:(0,p.jsxs)("div",{className:"btn-wrapper d-flex w-100 m-0 justify-content-end",children:[(0,p.jsxs)("button",{className:"btn btn-cancel",onClick:oe,children:[" ","Abbrechen"]}),(0,p.jsx)("button",{className:"btn btn-save ms-3",onClick:async e=>{!1===e.currentTarget.checkValidity()&&(e.preventDefault(),e.stopPropagation()),Y(!0);let t={fname:k,lname:S,street:V,city:E,phone:I,startDate:P,plz:D,email:le,land:A,group:R,id:se,created_by:K};if(!le)return(e=>(0,c.Am)(e))("Invalid Email");if(!k||!S||!le)return(0,b.ZP)("F\xfcllen Sie den Datensatz");try{let e=await fetch("".concat(u,"/customer/create"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});if(!e.ok)throw new Error("HTTP error! Status: ".concat(e.status));let n=await e.json();console.log("result",n),c.Am.success("Kundendatensatz erfolgreich gespeichert"),L(""),M(""),_(""),ae(""),T(""),z(""),B(""),Z(""),H(""),F(""),Y(!1),oe(),ge()}catch(n){c.Am.error("E-Mail-ID existiert bereits")}},children:"Speichern"})]})})]})]})}),(0,p.jsx)(i.Z,{rowKey:"_id",rowSelection:ye,responsive:!0,columns:pe,dataSource:je,pagination:!1}),(0,p.jsx)("div",{className:"container-fluid pagination-row",children:(0,p.jsxs)("div",{className:"row",children:[(0,p.jsx)("div",{className:"col-md-10 ps-md-0 text-center text-md-start",children:(0,p.jsx)(g.Z,{spacing:2,children:(0,p.jsx)(v.Z,{count:Q,variant:"outlined",shape:"rounded",page:G,onChange:(e,t)=>{$(t)},renderItem:e=>(0,p.jsx)(a.Z,{...e,text:"previous"===e.type?"Previous":"next"===e.type?"Next":e.page})})})}),(0,p.jsx)("div",{className:"col-md-2 pe-md-0 mt-3 mt-md-0 text-md-end",children:(0,p.jsxs)("select",{className:"form-control form-select",value:ee,onChange:e=>{te(parseInt(e.target.value,10)),$(1)},children:[(0,p.jsx)("option",{value:10,children:"10 pro Seite"}),(0,p.jsx)("option",{value:20,children:"20 pro Seite"}),(0,p.jsx)("option",{value:50,children:"50 pro Seite"}),(0,p.jsx)("option",{value:100,children:"100 pro Seite"})]})})]})}),(0,p.jsxs)(l.Z,{show:W,onHide:ve,centered:!0,className:"modal-delete custom-modal",children:[(0,p.jsxs)(l.Z.Title,{className:"text-center",children:[(0,p.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"44",height:"53",viewBox:"0 0 44 53",fill:"none",children:[(0,p.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M15.9195 0C19.9917 0 24.0638 0 28.136 0C28.1981 0.0248302 28.2601 0.0620762 28.3222 0.0744913C30.5197 0.397284 32.295 2.30921 32.3943 4.50668C32.4316 5.13985 32.4564 5.77302 32.4813 6.44343C32.7171 6.44343 32.9282 6.44343 33.1268 6.44343C35.1753 6.46826 37.2362 6.4186 39.2847 6.51792C41.4201 6.62966 43.1582 8.35535 43.481 10.5032C43.7914 12.6634 42.5747 14.8236 40.5635 15.5561C40.1289 15.7175 40.0172 15.9286 40.0172 16.3631C40.0296 26.1586 40.0296 35.9541 40.0296 45.7496C40.0296 46.271 40.0048 46.78 39.9427 47.3015C39.6572 50.008 37.7204 52.2179 35.0884 52.851C34.9146 52.8883 34.7284 52.9503 34.5546 53C26.1992 53 17.8563 53 9.50094 53C9.40162 52.9628 9.3147 52.9131 9.21538 52.9007C8.03595 52.6896 6.99308 52.1806 6.11161 51.3488C4.59697 49.9211 4.00105 48.1333 4.00105 46.0848C4.00105 36.1651 4.00105 26.2455 4.01347 16.3258C4.01347 15.8913 3.88932 15.7051 3.47962 15.5685C2.62298 15.283 1.94014 14.7243 1.41871 13.9918C0.363427 12.4896 0.164787 10.8632 0.946937 9.19958C1.67943 7.62286 2.95818 6.61724 4.70871 6.51792C6.76961 6.40618 8.84293 6.45585 10.9163 6.43102C11.1149 6.43102 11.3135 6.43102 11.5742 6.43102C11.5742 5.922 11.5618 5.48747 11.5742 5.04053C11.5991 3.35207 12.195 1.91192 13.6103 0.955961C14.3056 0.521433 15.1498 0.310377 15.9195 0ZM37.5466 15.9286C27.1676 15.9286 16.8507 15.9286 6.50889 15.9286C6.50889 16.1024 6.50889 16.2389 6.50889 16.3755C6.50889 26.2952 6.50889 36.2148 6.50889 46.1345C6.50889 46.4821 6.53373 46.8297 6.5958 47.1649C6.90618 49.1637 8.44565 50.517 10.4445 50.517C18.1791 50.5294 25.9013 50.517 33.6359 50.517C34.6042 50.517 35.4609 50.219 36.181 49.561C37.2114 48.6175 37.5466 47.4008 37.5466 46.06C37.5466 36.19 37.5466 26.32 37.5466 16.45C37.5466 16.2886 37.5466 16.1272 37.5466 15.9286ZM21.9781 13.4083C27.4159 13.4083 32.8413 13.4083 38.2791 13.4083C38.5398 13.4083 38.8005 13.3959 39.0488 13.371C40.1041 13.2593 40.8863 12.4647 40.998 11.4219C41.1097 10.3542 40.489 9.36098 39.4709 9.06301C39.1357 8.96369 38.7633 8.93886 38.4033 8.93886C27.4904 8.92645 16.5651 8.93886 5.65226 8.93886C5.39154 8.93886 5.13082 8.95128 4.88252 8.98852C3.82724 9.14992 3.06991 10.0066 3.00784 11.0867C2.94576 12.0923 3.66584 13.0855 4.65905 13.3214C5.00667 13.4083 5.37912 13.4083 5.73916 13.4083C11.1397 13.4083 16.5651 13.4083 21.9781 13.4083ZM14.0449 6.40619C19.3958 6.40619 24.6598 6.40619 29.9238 6.40619C29.9238 5.7606 29.9734 5.16468 29.9113 4.56875C29.7872 3.41415 28.8561 2.50785 27.689 2.50785C23.9149 2.48302 20.1282 2.48302 16.3541 2.50785C15.2491 2.52026 14.318 3.31483 14.1442 4.40736C14.0324 5.05294 14.0697 5.72336 14.0449 6.40619Z",fill:"#C20F0F"}),(0,p.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M15.932 32.2171C15.932 35.9789 15.932 39.7407 15.932 43.49C15.932 44.5577 15.5099 45.1288 14.7153 45.1412C13.9083 45.1537 13.449 44.5577 13.449 43.4776C13.449 35.9417 13.449 28.4057 13.449 20.8697C13.449 20.6339 13.4738 20.3856 13.5235 20.1497C13.6476 19.5786 14.107 19.231 14.6781 19.231C15.2367 19.2185 15.7209 19.5662 15.8575 20.1124C15.9196 20.3483 15.9196 20.5842 15.9196 20.8325C15.932 24.6191 15.932 28.4181 15.932 32.2171Z",fill:"#C20F0F"}),(0,p.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M20.7861 32.2047C20.7861 28.3809 20.7861 24.5446 20.7861 20.7208C20.7861 20.1497 20.9227 19.6655 21.4566 19.3675C22.1021 19.0075 22.9712 19.3551 23.1822 20.0628C23.2567 20.3235 23.2816 20.609 23.2816 20.8822C23.2816 28.4181 23.2816 35.9541 23.2816 43.49C23.2816 43.7259 23.2692 43.9742 23.2071 44.2101C23.0705 44.7812 22.5739 45.1661 22.0152 45.1537C21.469 45.1413 20.9848 44.7688 20.8606 44.2101C20.811 43.9742 20.7986 43.7259 20.7986 43.49C20.7861 39.7283 20.7861 35.9665 20.7861 32.2047Z",fill:"#C20F0F"}),(0,p.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M28.1113 32.1551C28.1113 28.3933 28.1113 24.6315 28.1113 20.8822C28.1113 19.7896 28.5459 19.2186 29.3653 19.231C30.1598 19.2434 30.5943 19.8145 30.5943 20.8698C30.5943 28.4057 30.5943 35.9417 30.5943 43.4776C30.5943 44.5578 30.135 45.1537 29.328 45.1413C28.5334 45.1288 28.1113 44.5577 28.1113 43.4901C28.1113 39.7159 28.1113 35.9417 28.1113 32.1551Z",fill:"#C20F0F"})]}),(0,p.jsx)("h4",{children:"Sind Sie sicher?"})]}),(0,p.jsx)("p",{children:"Dieser Vorgang kann nicht \u2028r\xfcckg\xe4ngig gemacht werden."}),(0,p.jsxs)("div",{className:"text-center",children:[(0,p.jsx)("button",{className:"btn modal-btn delete-btn me-3",onClick:async()=>{if(re){try{const e=await fetch("".concat(u,"/customer/get_record/").concat(re),{method:"DELETE",headers:{"Content-Type":"application/json"}});if(e.ok)ge(),c.Am.success("Der Datensatz wurde erfolgreich gel\xf6scht");else{const t=await e.json();console.error("Failed to delete record:",e.status,e.statusText,t)}}catch(e){c.Am.error("Beim L\xf6schen des Datensatzes ist ein Fehler aufgetreten")}O(!1)}},children:"L\xf6schen"}),(0,p.jsx)("button",{className:"btn modal-btn close-btn",onClick:ve,children:"Abbrechen"})]})]})]}),(0,p.jsx)(c.Ix,{})]})},N=s.memo(w)}}]);
//# sourceMappingURL=120.f8a2c48f.chunk.js.map