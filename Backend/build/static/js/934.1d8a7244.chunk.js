"use strict";(self.webpackChunk_coreui_coreui_free_react_admin_template=self.webpackChunk_coreui_coreui_free_react_admin_template||[]).push([[934],{50839:(e,t,s)=>{s.d(t,{Z:()=>i});s(72791);var n=s(13239),a=s(1582),l=s(80184);const i=()=>(0,l.jsx)(a.Z,{sx:{color:"grey.500"},spacing:2,direction:"row",children:(0,l.jsx)(n.Z,{color:"success",size:20})})},61934:(e,t,s)=>{s.r(t),s.d(t,{default:()=>C});var n=s(72791),a=s(48096),l=s(71154),i=s(16856),o=s(19826),r=s(11087),c=s(29655),d=(s(5462),s(99355)),h=s(50839),u=s(13855),m=s(80184);const p=e=>{let{setHide:t,getDetails:s}=e;let a=localStorage.getItem("CustomerRecord"),l=JSON.parse(a);const[i,o]=(0,n.useState)({fname:null===l||void 0===l?void 0:l.fname,lname:null===l||void 0===l?void 0:l.lname,street:null===l||void 0===l?void 0:l.street,phone:null===l||void 0===l?void 0:l.phone,plz:null===l||void 0===l?void 0:l.plz,city:null===l||void 0===l?void 0:l.city,land:null===l||void 0===l?void 0:l.land,group:l.group}),[r,p]=(0,n.useState)(null===l||void 0===l?void 0:l.email),[x,v]=(0,n.useState)(!1),[j,g]=(0,n.useState)(!1),C=e=>{const{name:t,value:s}=e.target;o({...i,[t]:s})},w=()=>{t(!1)},f={...i,email:r};return setTimeout((()=>{g(!1)}),5e3),(0,m.jsxs)("div",{className:"modal modal-form edit-modal-form",tabIndex:-1,style:{display:"block",backgroundColor:"rgba(0,0,0,0.7)",maxHeight:"100%",color:"black"},children:[(0,m.jsx)("div",{className:"modal-dialog modal-dialog-centered",children:(0,m.jsxs)("div",{className:"modal-content",children:[(0,m.jsxs)("div",{className:"modal-header",children:[(0,m.jsx)("h4",{className:"modal-title",children:"Kunden Aktualisieren"}),(0,m.jsx)("button",{type:"button",className:"btn-close","data-bs-dismiss":"modal","aria-label":"Close",onClick:w})]}),(0,m.jsx)("div",{className:"modal-body",children:(0,m.jsxs)(u.Z,{noValidate:!0,validated:x,children:[(0,m.jsxs)("div",{className:"row",children:[(0,m.jsx)("div",{className:"col-sm-6",children:(0,m.jsx)("input",{type:"text",placeholder:"Vornamen",className:"form-control",id:"inputPassword",name:"fname",value:i.fname,onChange:C,required:!0})}),(0,m.jsx)("div",{className:"col-sm-6",children:(0,m.jsx)("input",{type:"text",placeholder:"Nachname",className:"form-control",id:"inputPassword",name:"lname",value:i.lname,onChange:C,required:!0})})]}),(0,m.jsx)("div",{className:"row",children:(0,m.jsx)("div",{className:"col-sm-12",children:(0,m.jsx)("input",{type:"text",placeholder:"Stra\u03b2e + Hnr",className:"form-control",id:"inputPassword",name:"street",value:i.street,onChange:C})})}),(0,m.jsxs)("div",{className:"row",children:[(0,m.jsx)("div",{className:"col-sm-6",children:(0,m.jsx)("input",{type:"email",name:"email",value:r,onChange:e=>{const t=e.target.value;/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(t.toLowerCase())?p(t):p("")},placeholder:"jo@gmail.com",className:"form-control",id:"inputPassword",required:!0})}),(0,m.jsx)("div",{className:"col-sm-6",children:(0,m.jsx)("input",{value:i.phone,onChange:e=>{const t=e.target.value.replace(/[^0-9]/g,"");C({target:{name:"phone",value:t}})},type:"tel",placeholder:"Telefon",className:"form-control",id:"inputTelephone",maxLength:10,minLength:3})})]}),(0,m.jsxs)("div",{className:"row",children:[(0,m.jsx)("div",{className:"col-sm-6",children:(0,m.jsx)("input",{type:"tel",value:i.plz,onChange:e=>{const t=e.target.value.replace(/[^0-9]/g,"");o({...i,plz:t})},placeholder:"PLZ",className:"form-control",id:"inputPassword",maxLength:6,minLength:3,required:!0})}),(0,m.jsx)("div",{className:"col-sm-6",children:(0,m.jsx)("input",{type:"text",placeholder:"Stadt",className:"form-control",id:"inputPassword",name:"city",value:i.city,onChange:C,required:!0})})]}),(0,m.jsx)("div",{className:"row",children:(0,m.jsx)("div",{className:"col-sm-6",children:(0,m.jsxs)("select",{className:"form-control mb-0",value:i.group,name:"group",onChange:C,required:!0,children:[(0,m.jsx)("option",{value:"",children:"--select group--"}),(0,m.jsx)("option",{value:"HVD-PV",children:"HVD"}),(0,m.jsx)("option",{value:"PV-ALT",children:"ALT"})]})})})]})}),(0,m.jsxs)("div",{className:"modal-footer",children:[(0,m.jsx)("button",{type:"button",className:"btn btn-modal-close","data-bs-dismiss":"modal",onClick:w,children:"Bearbeiten"}),(0,m.jsxs)("div",{className:"btn-wrap",children:[(0,m.jsx)("button",{type:"button",className:"btn btn-cancel","data-bs-dismiss":"modal",onClick:w,children:"Abbrechen"}),(0,m.jsx)("button",{type:"button",className:"btn  btn-save ms-3",onClick:async e=>{if(!1===e.currentTarget.checkValidity()&&(e.preventDefault(),e.stopPropagation()),v(!0),!i.fname||!i.lname)return c.Am.warning("Bitte geben Sie Fname und Lname ein");if(!r)return c.Am.warning("Ung\xfcltige E-Mail");e.preventDefault();try{g(!0);!0===(await(0,d.yu)("".concat("http://95.217.77.208:4142","/customer/get_record/edit/").concat(null===l||void 0===l?void 0:l._id),f)).data.success?(g(!1),o({fname:"",lname:"",street:"",phone:"",plz:"",city:"",land:"",group:""}),p(""),c.Am.success("Kundendatensatz erfolgreich aktualisiert"),w(),s()):c.Am.error("Etwas ist schief gelaufen")}catch(t){console.log(t)}},children:j?(0,m.jsx)(h.Z,{}):(0,m.jsx)("div",{children:" Speichern"})})]})]})]})}),(0,m.jsx)(c.Ix,{})]})};var x=s(44818),v=s(1582),j=s(61522);const g=()=>{var e;let t=localStorage.getItem("record"),s=JSON.parse(t);const d="http://95.217.77.208:4142",[h,g]=(0,n.useState)([]),[C,w]=(0,n.useState)([]),[f,N]=(0,n.useState)(),[b,k]=(0,n.useState)(),[y,L]=(0,n.useState)(),[S,_]=(0,n.useState)(),[P,V]=(0,n.useState)(),[Z,A]=(0,n.useState)(),[F,I]=(0,n.useState)(),[M,T]=(0,n.useState)(),[H,D]=(0,n.useState)(),[E]=(0,n.useState)(null===s||void 0===s||null===(e=s.user)||void 0===e?void 0:e._id),[z,R]=(0,n.useState)(!1),[B,K]=(0,n.useState)(!1),[W,q]=(0,n.useState)(!1),[O,J]=(0,n.useState)(1),[U,$]=(0,n.useState)(""),[G,Q]=(0,n.useState)(1),[X,Y]=(0,n.useState)(""),[ee]=(0,n.useState)("HVD"+Math.floor(1e3+9e3*Math.random())),[te,se]=(0,n.useState)(""),ne=((0,n.useRef)(null),()=>K(!1)),ae=(0,n.useRef)(),[le,ie]=(0,n.useState)(null);let oe=localStorage.getItem("tabId")||"customer_info";const re=[{title:"KLIENTNNEN",dataIndex:"fname",width:"20%",render:(e,t)=>(0,m.jsx)(r.rU,{style:{textDecoration:"none",color:"black"},to:"/customer/".concat(oe),onClick:()=>me(e,t),children:e.slice(0,1).toUpperCase()+e.slice(1).toLowerCase()})},{title:"KLIENTNNEN-ID",dataIndex:"id",width:"20%"},{title:"E-MAIL",dataIndex:"email",width:"20%"},{title:"TELEFON",dataIndex:"phone",width:"20%"},{title:"GRUPPE",dataIndex:"group",width:"20%",render:(e,t)=>(0,m.jsx)("div",{className:"dm-badge",style:{background:"PV-ALT"===e?"#C20F0F":"HVD-PV"===e?"#4EB772":"transparent",border:"PV-ALT"===e?"1px solid transparent":"HVD-PV"===e?"1px solid rgba(78, 183, 114, 0.50)":""},children:(0,m.jsx)("b",{children:e})})},{title:"AKTION",dataIndex:"action",hidden:!0,render:(e,t)=>{var n,a,l,o;return(0,m.jsxs)(m.Fragment,{children:[(null===s||void 0===s||null===(n=s.user)||void 0===n?void 0:n._id)===t.created_by&&(0,j.Mt)().includes("owned")||(0,j.Mt)().includes("yes")||"true"===(null===s||void 0===s||null===(a=s.user)||void 0===a?void 0:a.isAdminFullRights)?(0,m.jsx)(m.Fragment,{children:(0,m.jsxs)("button",{style:{background:"none",border:"none"},onClick:()=>ve(t),children:[(0,m.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:[(0,m.jsxs)("g",{clipPath:"url(#clip0_476_24741)",children:[(0,m.jsx)("path",{d:"M4 20.0003H8L18.5 9.5003C19.0304 8.96987 19.3284 8.25045 19.3284 7.5003C19.3284 6.75016 19.0304 6.03074 18.5 5.5003C17.9696 4.96987 17.2501 4.67188 16.5 4.67188C15.7499 4.67187 15.0304 4.96987 14.5 5.5003L4 16.0003V20.0003Z",stroke:"#005291",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),(0,m.jsx)("path",{d:"M13.5 6.5L17.5 10.5",stroke:"#005291",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]}),(0,m.jsx)("defs",{children:(0,m.jsx)("clipPath",{id:"clip0_476_24741",children:(0,m.jsx)("rect",{width:"24",height:"24",fill:"white"})})})]}),(0,m.jsx)("span",{children:"Bearbeiten"})]})}):"",(null===s||void 0===s||null===(l=s.user)||void 0===l?void 0:l._id)===t.created_by&&(0,j.fK)().includes("owned")||(0,j.fK)().includes("yes")||"true"===(null===s||void 0===s||null===(o=s.user)||void 0===o?void 0:o.isAdminFullRights)?(0,m.jsxs)("button",{style:{background:"none",border:"none"},onClick:()=>ce(t._id),children:[(0,m.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:[(0,m.jsxs)("g",{clipPath:"url(#clip0_431_1048)",children:[(0,m.jsx)("path",{d:"M5 8H19",stroke:"#C20F0F",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),(0,m.jsx)("path",{d:"M10 11V16",stroke:"#C20F0F",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),(0,m.jsx)("path",{d:"M14 11V16",stroke:"#C20F0F",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),(0,m.jsx)("path",{d:"M6 8L6.85714 18.2857C6.85714 18.7404 7.03775 19.1764 7.35925 19.4979C7.68074 19.8194 8.11677 20 8.57143 20H15.4286C15.8832 20 16.3193 19.8194 16.6408 19.4979C16.9622 19.1764 17.1429 18.7404 17.1429 18.2857L18 8",stroke:"#C20F0F",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),(0,m.jsx)("path",{d:"M9 8V5C9 4.73478 9.10536 4.48043 9.29289 4.29289C9.48043 4.10536 9.73478 4 10 4H14C14.2652 4 14.5196 4.10536 14.7071 4.29289C14.8946 4.48043 15 4.73478 15 5V8",stroke:"#C20F0F",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]}),(0,m.jsx)("defs",{children:(0,m.jsx)("clipPath",{id:"clip0_431_1048",children:(0,m.jsx)("rect",{width:"24",height:"24",fill:"white"})})})]}),(0,m.jsx)("span",{children:" L\xf6schen"})]}):"",(0,m.jsxs)("button",{style:{background:"none",border:"none"},onClick:()=>be(t),children:[" ",(0,m.jsx)(i.zR_,{className:"fs-5",style:{color:"#615e55"}}),"\xa0Drucke"]})]})}}],ce=e=>{ie(e),R(!0)},de=()=>{R(!1)},he=async()=>{try{var e;const t=await fetch("".concat(d,"/customer/get_record?page=").concat(O,"&resultPerPage=").concat(X)),s=await t.json();Q(null===s||void 0===s?void 0:s.pageCount);const n=null===s||void 0===s||null===(e=s.result)||void 0===e?void 0:e.filter((e=>"active"===e.status));g(n)}catch(t){console.error("Error fetching customer record:",t)}};let ue=h;const me=(e,t)=>{let s=JSON.stringify(t);localStorage.setItem("customerDatat",s)},[pe,xe]=(0,n.useState)(!1),ve=e=>{let t=JSON.stringify(e);localStorage.setItem("CustomerRecord",t),xe(!0)},[je,ge]=(0,n.useState)([]),Ce={onChange:e=>{ge(e)},getCheckboxProps:e=>({disabled:"Disabled User"===e.name,name:e.name})},[we,fe]=(0,n.useState)("");localStorage.getItem("CustomerRecord");const Ne=[];null===C||void 0===C||C.map((e=>("customer"===(null===e||void 0===e?void 0:e.designation)&&(null===Ne||void 0===Ne||Ne.push(e)),null))),console.log("Customer items:",Ne);const be=e=>{console.log("aastha print");let t="";const s=Ne[0].content.replace("{fname}",e.fname).replace("{email}",e.email).replace("{id}",e.id).replace("{phone}",e.phone).replace("{group}",e.group);t+="<div>".concat(s,"</div>"),window.document.write("\n          <html>\n            <head>\n            </head>\n            <body>\n              ".concat(t,"\n            </body>\n          </html>\n        "));const n=window.document.getElementById("cancelButton");n&&n.addEventListener("click",(()=>{window.close()})),window.print()};return(0,n.useEffect)((()=>{he(),(async()=>{try{var e;const t=await fetch("".concat(d,"/print/get_print?page=").concat(O)),s=await t.json(),n=null===s||void 0===s||null===(e=s.result)||void 0===e?void 0:e.filter((e=>"active"===e.is_deleted));w(n)}catch(t){c.Am.error("Fehler beim Abrufen des Kundendatensatzes:")}})()}),[O,X]),(0,m.jsxs)(m.Fragment,{children:[(0,m.jsxs)("div",{children:[pe?(0,m.jsx)(p,{setHide:xe,getDetails:he}):"",(0,m.jsx)("div",{className:"page-title",children:(0,m.jsx)("h2",{children:"KlientInnen-Listen"})}),(0,m.jsx)("div",{className:"search-filter-row",style:{background:"white",borderRadius:"5px"},children:(0,m.jsxs)("div",{className:"container-fluid",children:[(0,m.jsxs)("div",{className:"row",children:[(0,m.jsx)("div",{className:"col-md-7 mb-md-0 mb-3",children:(0,m.jsxs)("div",{className:"d-flex align-items-center",children:[(0,m.jsx)("input",{ref:ae,name:"search",value:we,onChange:e=>fe(e.target.value),type:"search",id:"form1",placeholder:"Ihre Suche eingeben",className:"form-control form-search-control"}),(0,m.jsxs)("button",{onClick:async()=>{try{if(""===we)return he();const e=await fetch("".concat(d,"/customer/search/").concat(we)),t=await e.json(),s=t.filter((e=>"active"===e.status));s.length>0?g(s):(he(),g(t))}catch(e){console.error("Error searching data:",e.message)}},className:"filter-btn",children:[(0,m.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",children:(0,m.jsx)("path",{d:"M17.2837 3.19758L17.2819 3.19982L11.4249 10.3893L11.3125 10.5272V10.7051V15.7395C11.3125 16.0891 11.0266 16.375 10.677 16.375C10.538 16.375 10.4145 16.3294 10.3142 16.2343L10.2972 16.2182L10.2788 16.2037L7.02898 13.6566C6.81324 13.4832 6.6875 13.2225 6.6875 12.948V10.7051V10.5272L6.57512 10.3892L0.717141 3.19979L0.716307 3.19877C0.5768 3.02847 0.5 2.81363 0.5 2.59102C0.5 2.05751 0.932509 1.625 1.46602 1.625H16.534C17.0667 1.625 17.5 2.05774 17.5 2.59102C17.5 2.81391 17.4234 3.02809 17.2837 3.19758ZM1.93219 2.3125H0.879712L1.54459 3.12837L7.29738 10.1875C7.29744 10.1876 7.2975 10.1877 7.29756 10.1877C7.34744 10.2491 7.375 10.3272 7.375 10.4062V12.8109V13.0524L7.56415 13.2026L9.81415 14.9885L10.625 15.6321V14.5969V10.4062C10.625 10.3272 10.6526 10.2491 10.7025 10.1877C10.7025 10.1876 10.7026 10.1876 10.7026 10.1875L16.454 3.12832L17.1187 2.3125H16.0664H1.93219Z",fill:"#1C1D21",stroke:"white"})}),(0,m.jsx)("span",{children:"Filter"})]})]})}),(0,m.jsx)("div",{className:"col-md-5 text-end",children:(0,m.jsxs)("div",{className:"d-flex align-items-center justify-content-between justify-content-md-end text-md-end flex-md-row flex-column",children:[(0,m.jsxs)("p",{className:"mb-0 me-3",children:[(0,m.jsx)("strong",{children:je.length})," Ausgew\xe4hlte"]}),(0,m.jsxs)("button",{className:"primary-btn",style:{border:"none"},onClick:()=>K(!0),children:[(0,m.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:[(0,m.jsxs)("g",{clipPath:"url(#clip0_437_8819)",children:[(0,m.jsx)("path",{d:"M12 5V19",stroke:"white",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),(0,m.jsx)("path",{d:"M5 12H19",stroke:"white",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]}),(0,m.jsx)("defs",{children:(0,m.jsx)("clipPath",{id:"clip0_437_8819",children:(0,m.jsx)("rect",{width:"24",height:"24",fill:"white"})})})]}),(0,m.jsx)("span",{children:" Neue KlientInnen anlegen"})]})]})})]}),(0,m.jsxs)(a.Z,{show:B,onHide:ne,centered:!0,className:"modal-form",children:[(0,m.jsx)(a.Z.Header,{closeButton:!0,children:(0,m.jsx)(a.Z.Title,{children:"Neue KlientInnen anlegen"})}),(0,m.jsx)(a.Z.Body,{children:(0,m.jsxs)(u.Z,{noValidate:!0,validated:W,children:[(0,m.jsxs)("div",{className:"row",children:[(0,m.jsx)("div",{className:"col-sm-6",children:(0,m.jsx)("input",{value:f,onChange:e=>{N(e.target.value)},type:"text",placeholder:"Vornamen",className:"form-control",id:"inputPassword",required:!0})}),(0,m.jsx)("div",{className:"col-sm-6",children:(0,m.jsx)("input",{type:"text",value:b,onChange:e=>{k(e.target.value)},placeholder:"Nachname",className:"form-control",id:"inputPassword",required:!0})})]}),(0,m.jsx)("div",{className:"row",children:(0,m.jsx)("div",{className:"col-sm-12",children:(0,m.jsx)("input",{value:M,onChange:e=>{T(e.target.value)},type:"text",placeholder:"Stra\u03b2e + Hnr",className:"form-control",id:"inputPassword"})})}),(0,m.jsxs)("div",{className:"row",children:[(0,m.jsx)("div",{className:"col-sm-6",children:(0,m.jsx)("input",{type:"email",name:"email",onChange:e=>{const t=e.target.value;/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(t.toLowerCase())?se(t):se("")},placeholder:"jo@gmail.com",className:"form-control",id:"inputPassword"})}),(0,m.jsx)("div",{className:"col-sm-6",children:(0,m.jsx)("input",{value:y,onChange:e=>{const t=e.target.value.replace(/[^0-9]/g,"");L(t)},type:"tel",placeholder:"Telefon",className:"form-control",id:"inputTelephone",maxLength:10,minLength:3})})]}),(0,m.jsxs)("div",{className:"row",children:[(0,m.jsx)("div",{className:"col-sm-6",children:(0,m.jsx)("input",{type:"tel",value:Z,onChange:e=>{const t=e.target.value.replace(/[^0-9]/g,"");A(t)},placeholder:"PLZ",className:"form-control",id:"inputPassword",maxLength:6,minLength:3})}),(0,m.jsx)("div",{className:"col-sm-6",children:(0,m.jsx)("input",{type:"text",value:F,onChange:e=>{const t=e.target.value.replace(/[^a-zA-Z\s'-]/g,"");I(t)},placeholder:"Stadt",className:"form-control",id:"inputPassword"})})]}),(0,m.jsx)("div",{className:"row",children:(0,m.jsx)("div",{className:"col-sm-6",children:(0,m.jsxs)("select",{className:"form-control mb-0",value:H,onChange:e=>{D(e.target.value)},children:[(0,m.jsx)("option",{value:"",children:"--select group--"}),(0,m.jsx)("option",{value:"HVD-PV",children:"HVD"}),(0,m.jsx)("option",{value:"PV-ALT",children:"ALT"})]})})})]})}),(0,m.jsxs)(a.Z.Footer,{children:[(0,m.jsx)("button",{className:"btn btn-modal-close",onClick:ne,children:"Bearbeiten"}),(0,m.jsxs)("div",{className:"btn-wrap",children:[(0,m.jsx)("button",{className:"btn btn-cancel",onClick:ne,children:"Stornieren"}),(0,m.jsx)("button",{className:"btn btn-save ms-3",onClick:async e=>{!1===e.currentTarget.checkValidity()&&(e.preventDefault(),e.stopPropagation()),q(!0);let t={fname:f,lname:b,street:M,city:F,phone:y,plz:Z,email:te,land:P,group:H,id:ee,created_by:E};if(!te)return(e=>(0,c.Am)(e))("Invalid Email");if(f&&b&&te)try{let e=await fetch("".concat(d,"/customer/create"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});if(!e.ok)throw new Error("HTTP error! Status: ".concat(e.status));await e.json();c.Am.success("Kundendatensatz erfolgreich gespeichert"),N(""),V(""),k(""),se(""),A(""),T(""),D(""),L(""),I(""),_(""),ne(),he()}catch(s){c.Am.error("E-Mail-ID existiert bereits")}},children:"Einreichen"})]})]})]})]})}),(0,m.jsx)(o.Z,{rowKey:"_id",rowSelection:Ce,responsive:!0,columns:re,dataSource:ue,pagination:!1}),(0,m.jsx)("div",{className:"container-fluid pagination-row",children:(0,m.jsxs)("div",{className:"row",children:[(0,m.jsx)("div",{className:"col-md-10 ps-md-0 text-center text-md-start",children:(0,m.jsx)(v.Z,{spacing:2,children:(0,m.jsx)(x.Z,{count:G,variant:"outlined",shape:"rounded",page:O,onChange:(e,t)=>{J(t)},renderItem:e=>(0,m.jsx)(l.Z,{...e,text:"previous"===e.type?"Previous":"next"===e.type?"Next":e.page})})})}),(0,m.jsx)("div",{className:"col-md-2 pe-md-0 mt-3 mt-md-0 text-md-end",children:(0,m.jsxs)("select",{className:"form-control form-select",value:X,onChange:e=>{Y(parseInt(e.target.value,10)),J(1)},children:[(0,m.jsx)("option",{value:10,children:"10 pro Seite"}),(0,m.jsx)("option",{value:20,children:"20 pro Seite"}),(0,m.jsx)("option",{value:50,children:"50 pro Seite"}),(0,m.jsx)("option",{value:100,children:"100 pro Seite"})]})})]})}),(0,m.jsxs)(a.Z,{size:"md",show:z,onHide:de,centered:!0,className:"modal-delete",children:[(0,m.jsxs)(a.Z.Title,{className:"text-center",children:[(0,m.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"44",height:"53",viewBox:"0 0 44 53",fill:"none",children:[(0,m.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M15.9195 0C19.9917 0 24.0638 0 28.136 0C28.1981 0.0248302 28.2601 0.0620762 28.3222 0.0744913C30.5197 0.397284 32.295 2.30921 32.3943 4.50668C32.4316 5.13985 32.4564 5.77302 32.4813 6.44343C32.7171 6.44343 32.9282 6.44343 33.1268 6.44343C35.1753 6.46826 37.2362 6.4186 39.2847 6.51792C41.4201 6.62966 43.1582 8.35535 43.481 10.5032C43.7914 12.6634 42.5747 14.8236 40.5635 15.5561C40.1289 15.7175 40.0172 15.9286 40.0172 16.3631C40.0296 26.1586 40.0296 35.9541 40.0296 45.7496C40.0296 46.271 40.0048 46.78 39.9427 47.3015C39.6572 50.008 37.7204 52.2179 35.0884 52.851C34.9146 52.8883 34.7284 52.9503 34.5546 53C26.1992 53 17.8563 53 9.50094 53C9.40162 52.9628 9.3147 52.9131 9.21538 52.9007C8.03595 52.6896 6.99308 52.1806 6.11161 51.3488C4.59697 49.9211 4.00105 48.1333 4.00105 46.0848C4.00105 36.1651 4.00105 26.2455 4.01347 16.3258C4.01347 15.8913 3.88932 15.7051 3.47962 15.5685C2.62298 15.283 1.94014 14.7243 1.41871 13.9918C0.363427 12.4896 0.164787 10.8632 0.946937 9.19958C1.67943 7.62286 2.95818 6.61724 4.70871 6.51792C6.76961 6.40618 8.84293 6.45585 10.9163 6.43102C11.1149 6.43102 11.3135 6.43102 11.5742 6.43102C11.5742 5.922 11.5618 5.48747 11.5742 5.04053C11.5991 3.35207 12.195 1.91192 13.6103 0.955961C14.3056 0.521433 15.1498 0.310377 15.9195 0ZM37.5466 15.9286C27.1676 15.9286 16.8507 15.9286 6.50889 15.9286C6.50889 16.1024 6.50889 16.2389 6.50889 16.3755C6.50889 26.2952 6.50889 36.2148 6.50889 46.1345C6.50889 46.4821 6.53373 46.8297 6.5958 47.1649C6.90618 49.1637 8.44565 50.517 10.4445 50.517C18.1791 50.5294 25.9013 50.517 33.6359 50.517C34.6042 50.517 35.4609 50.219 36.181 49.561C37.2114 48.6175 37.5466 47.4008 37.5466 46.06C37.5466 36.19 37.5466 26.32 37.5466 16.45C37.5466 16.2886 37.5466 16.1272 37.5466 15.9286ZM21.9781 13.4083C27.4159 13.4083 32.8413 13.4083 38.2791 13.4083C38.5398 13.4083 38.8005 13.3959 39.0488 13.371C40.1041 13.2593 40.8863 12.4647 40.998 11.4219C41.1097 10.3542 40.489 9.36098 39.4709 9.06301C39.1357 8.96369 38.7633 8.93886 38.4033 8.93886C27.4904 8.92645 16.5651 8.93886 5.65226 8.93886C5.39154 8.93886 5.13082 8.95128 4.88252 8.98852C3.82724 9.14992 3.06991 10.0066 3.00784 11.0867C2.94576 12.0923 3.66584 13.0855 4.65905 13.3214C5.00667 13.4083 5.37912 13.4083 5.73916 13.4083C11.1397 13.4083 16.5651 13.4083 21.9781 13.4083ZM14.0449 6.40619C19.3958 6.40619 24.6598 6.40619 29.9238 6.40619C29.9238 5.7606 29.9734 5.16468 29.9113 4.56875C29.7872 3.41415 28.8561 2.50785 27.689 2.50785C23.9149 2.48302 20.1282 2.48302 16.3541 2.50785C15.2491 2.52026 14.318 3.31483 14.1442 4.40736C14.0324 5.05294 14.0697 5.72336 14.0449 6.40619Z",fill:"#C20F0F"}),(0,m.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M15.932 32.2171C15.932 35.9789 15.932 39.7407 15.932 43.49C15.932 44.5577 15.5099 45.1288 14.7153 45.1412C13.9083 45.1537 13.449 44.5577 13.449 43.4776C13.449 35.9417 13.449 28.4057 13.449 20.8697C13.449 20.6339 13.4738 20.3856 13.5235 20.1497C13.6476 19.5786 14.107 19.231 14.6781 19.231C15.2367 19.2185 15.7209 19.5662 15.8575 20.1124C15.9196 20.3483 15.9196 20.5842 15.9196 20.8325C15.932 24.6191 15.932 28.4181 15.932 32.2171Z",fill:"#C20F0F"}),(0,m.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M20.7861 32.2047C20.7861 28.3809 20.7861 24.5446 20.7861 20.7208C20.7861 20.1497 20.9227 19.6655 21.4566 19.3675C22.1021 19.0075 22.9712 19.3551 23.1822 20.0628C23.2567 20.3235 23.2816 20.609 23.2816 20.8822C23.2816 28.4181 23.2816 35.9541 23.2816 43.49C23.2816 43.7259 23.2692 43.9742 23.2071 44.2101C23.0705 44.7812 22.5739 45.1661 22.0152 45.1537C21.469 45.1413 20.9848 44.7688 20.8606 44.2101C20.811 43.9742 20.7986 43.7259 20.7986 43.49C20.7861 39.7283 20.7861 35.9665 20.7861 32.2047Z",fill:"#C20F0F"}),(0,m.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M28.1113 32.1551C28.1113 28.3933 28.1113 24.6315 28.1113 20.8822C28.1113 19.7896 28.5459 19.2186 29.3653 19.231C30.1598 19.2434 30.5943 19.8145 30.5943 20.8698C30.5943 28.4057 30.5943 35.9417 30.5943 43.4776C30.5943 44.5578 30.135 45.1537 29.328 45.1413C28.5334 45.1288 28.1113 44.5577 28.1113 43.4901C28.1113 39.7159 28.1113 35.9417 28.1113 32.1551Z",fill:"#C20F0F"})]}),(0,m.jsx)("h4",{children:"Sind Sie sicher?"})]}),(0,m.jsx)("p",{children:"M\xf6chten Sie diesen Datensatz wirklich l\xf6schen? dieser Vorgang kann nicht r\xfcckg\xe4ngig gemacht werden"}),(0,m.jsxs)("div",{className:"text-center",children:[(0,m.jsx)("button",{className:"btn modal-btn delete-btn me-3",onClick:async()=>{if(le){try{const e=await fetch("".concat(d,"/customer/get_record/").concat(le),{method:"DELETE",headers:{"Content-Type":"application/json"}});if(e.ok)he(),c.Am.success("Der Datensatz wurde erfolgreich gel\xf6scht");else{const t=await e.json();console.error("Failed to delete record:",e.status,e.statusText,t)}}catch(e){c.Am.error("Beim L\xf6schen des Datensatzes ist ein Fehler aufgetreten")}R(!1)}},children:"L\xf6schen"}),(0,m.jsx)("button",{className:"btn modal-btn close-btn",onClick:de,children:"Abbrechen"})]})]})]}),(0,m.jsx)(c.Ix,{})]})},C=n.memo(g)}}]);
//# sourceMappingURL=934.1d8a7244.chunk.js.map