"use strict";(self.webpackChunk_coreui_coreui_free_react_admin_template=self.webpackChunk_coreui_coreui_free_react_admin_template||[]).push([[118,467,247,3],{99355:(e,n,a)=>{a.d(n,{QA:()=>d,Wq:()=>c,ZC:()=>l,wY:()=>s,y6:()=>r,yu:()=>i,z:()=>o});var t=a(55294);const s=async e=>{try{return await(0,t.Z)({method:"get",url:"".concat(e),headers:{"Content-Type":"application/json"}})}catch(n){return console.log(n),n}},l=async(e,n)=>{try{const a=await(0,t.Z)({method:"post",url:e,headers:{"Content-Type":"multipart/form-data"},data:n});if(a)return a}catch(a){return a}},o=async(e,n)=>{try{return(await t.Z.post(e,n,{headers:{"Content-Type":"application/json"}})).data}catch(a){throw console.error("Error in postFetchContent:",a),a}},r=async(e,n)=>{try{const a=await(0,t.Z)({method:"put",url:"".concat(e),headers:{"Content-Type":"multipart/form-data; boundary=<calculated when request is sent>"},data:n});if(200===a.status)return a}catch(a){return a?401:a.response}},i=async(e,n)=>{try{const a=await(0,t.Z)({method:"put",url:"".concat(e),headers:{"Content-Type":"application/json"},data:n});if(a)return a}catch(s){var a;return 401===(null===s||void 0===s||null===(a=s.response)||void 0===a?void 0:a.status)?401:s.response}},c=async(e,n)=>{try{const a=await(0,t.Z)({method:"delete",url:"".concat(e,"/").concat(n),headers:{"Content-Type":"application/json"}});if(200===a.status)return a}catch(s){var a;if(401===(null===s||void 0===s||null===(a=s.response)||void 0===a?void 0:a.status))return 401}},d=async(e,n)=>{try{const a=await(0,t.Z)({method:"post",url:"".concat(e),headers:{"Content-Type":"application/json"},data:n});if(a)return null===a||void 0===a?void 0:a.data}catch(s){var a;return 401===(null===s||void 0===s||null===(a=s.response)||void 0===a?void 0:a.status)?401:s}}},51118:(e,n,a)=>{a.r(n),a.d(n,{default:()=>i});var t=a(72791),s=a(68247),l=a(67467),o=(a(62003),a(80184));const r=()=>{const[e,n]=(0,t.useState)("nav-home"),a=e=>{n(e)};return(0,t.useEffect)((()=>{a("nav-benutzer")}),[]),(0,o.jsx)(o.Fragment,{children:(0,o.jsxs)("div",{className:"row",style:{background:"white"},children:[(0,o.jsx)("nav",{children:(0,o.jsxs)("div",{className:"nav nav-tabs",id:"nav-tab",role:"tablist",children:[(0,o.jsx)("button",{className:"nav-link ".concat("nav-benutzer"===e?"active":""),id:"nav-benutzer-tab","data-bs-toggle":"tab",role:"tab","aria-selected":"nav-benutzer"===e,onClick:()=>a("nav-benutzer"),style:{marginRight:"60px",marginLeft:"20px"},children:"Mitarbeiterlnnen"}),(0,o.jsx)("button",{className:"nav-link ".concat("nav-rollen"===e?"active":""),id:"nav-rollen-tab","data-bs-toggle":"tab",role:"tab","aria-controls":"nav-rollen","aria-selected":"nav-rollen"===e,onClick:()=>a("nav-rollen"),style:{marginRight:"60px"},children:"Rollen"})]})}),(0,o.jsxs)("div",{className:"tab-content",id:"nav-tabContent",children:[(0,o.jsx)("div",{className:"tab-pane fade ".concat("nav-benutzer"===e?"show active":""),id:"nav-benutzer",role:"tabpanel","aria-labelledby":"nav-benutzer-tab",children:(0,o.jsx)(s.default,{})}),(0,o.jsx)("div",{className:"tab-pane fade ".concat("nav-rollen"===e?"show active":""),id:"nav-rollen",role:"tabpanel","aria-labelledby":"nav-rollen-tab",children:(0,o.jsx)(l.default,{})})]}),(0,o.jsx)("hr",{})]})})},i=t.memo(r)},67467:(e,n,a)=>{a.r(n),a.d(n,{default:()=>m});var t=a(72791),s=a(48096),l=a(16856),o=a(19129),r=a(99355),i=a(29655),c=(a(5462),a(80184));const d=()=>{const[e,n]=(0,t.useState)(!1),[a,d]=(0,t.useState)(!1),[m,h]=(0,t.useState)(""),[u,x]=(0,t.useState)({p_edit:"no",p_show:"no",p_delete:"no",p_export:"no",section_name:"client",ownership_check:"false"}),[v,p]=(0,t.useState)({p_edit:"no",p_show:"no",p_delete:"no",p_export:"no",section_name:"dashboard",ownership_check:"false"}),[b,j]=(0,t.useState)({role_name:m,permission:[u,v],added_by:"admin"}),g=e=>{x((n=>({...n,section_name:e})))},N=e=>{const{name:n,value:a}=e.target;x({...u,[n]:a})},y=e=>{const{name:n,value:a}=e.target;p({...v,[n]:a})};(0,t.useEffect)((()=>{j((e=>({...e,role_name:m,permission:[u,v]})))}),[m,u,v]);localStorage.setItem("updateFunc",a),(0,t.useEffect)((()=>{j((e=>({...e,role_name:m,permission:[u,v]})))}),[m,u,v]);const f=()=>n(!1);return(0,c.jsxs)("div",{children:[(0,c.jsx)("div",{className:"row ",children:(0,c.jsxs)("center",{className:"mx-auto",children:[(0,c.jsx)(o.WiM,{style:{fontSize:"50px",marginTop:"100px"}}),(0,c.jsx)("p",{children:"Keine Rollen"}),(0,c.jsx)("p",{children:"Beginnen Sie mit der Erstellung einer neuen Rolle."}),(0,c.jsxs)("div",{className:"col-sm-3",children:[(0,c.jsxs)("button",{className:"btn btn mb-5",style:{background:"#0b5995",color:"white"},onClick:()=>n(!0),children:[(0,c.jsx)(l.x06,{}),"\xa0 Rolle erstellen"]}),(0,c.jsxs)(s.Z,{show:e,onHide:f,centered:!0,size:"large",children:[(0,c.jsx)(s.Z.Header,{closeButton:!0,children:(0,c.jsx)(s.Z.Title,{children:"Rolle erstellen"})}),(0,c.jsxs)(s.Z.Body,{children:[(0,c.jsx)("input",{type:"text",placeholder:"Name",className:"form-control",name:"rolePermission",value:m,onChange:e=>{h(e.target.value)}}),(0,c.jsx)("h5",{className:"mt-2 fw-bold",children:"Berechtigungen"}),(0,c.jsx)("h5",{className:"mt-3 fw-bold",children:"Klientlnnen"}),(0,c.jsxs)("div",{children:[(0,c.jsxs)("div",{className:"row",onClick:()=>g("Klientlnnen"),children:[(0,c.jsx)("div",{className:"col-sm-3 mt-2",children:"Anzeigen"}),(0,c.jsx)("div",{className:"col-sm-5"}),(0,c.jsx)("div",{className:"col-sm-4 mt-2",children:(0,c.jsx)("div",{className:"input-group",children:(0,c.jsxs)("select",{style:{border:"none",background:"none"},name:"p_show",value:u.p_show,onChange:N,children:[(0,c.jsx)("option",{value:"only owned",children:"Nur im Besitz"}),(0,c.jsx)("option",{value:"Withdraw",children:"Widerrufen"}),(0,c.jsx)("option",{value:"no",children:"No"}),(0,c.jsx)("option",{value:"yes",children:"Yes"})]})})})]}),(0,c.jsxs)("div",{className:"row",children:[(0,c.jsx)("div",{className:"col-sm-3 mt-2",children:"Bearbeiten"}),(0,c.jsx)("div",{className:"col-sm-5"}),(0,c.jsx)("div",{className:"col-sm-4 mt-2",children:(0,c.jsx)("div",{className:"input-group",children:(0,c.jsxs)("select",{style:{border:"none",background:"none"},name:"p_edit",value:u.p_edit,onChange:N,children:[(0,c.jsx)("option",{value:"only owned",children:"Nur im Besitz"}),(0,c.jsx)("option",{value:"Withdraw",children:"Widerrufen"}),(0,c.jsx)("option",{value:"no",children:"No"}),(0,c.jsx)("option",{value:"yes",children:"Yes"})]})})})]}),(0,c.jsxs)("div",{className:"row",children:[(0,c.jsx)("div",{className:"col-sm-3 mt-2",children:"L\xf6schen"}),(0,c.jsx)("div",{className:"col-sm-5"}),(0,c.jsx)("div",{className:"col-sm-4 mt-2",children:(0,c.jsx)("div",{className:"input-group",children:(0,c.jsxs)("select",{style:{border:"none",background:"none"},name:"p_delete",value:u.p_delete,onChange:N,children:[(0,c.jsx)("option",{value:"only owned",children:"Nur im Besitz"}),(0,c.jsx)("option",{value:"Withdraw",children:"Widerrufen"}),(0,c.jsx)("option",{value:"no",children:"No"}),(0,c.jsx)("option",{value:"yes",children:"Yes"})]})})})]}),(0,c.jsxs)("div",{className:"row",children:[(0,c.jsx)("div",{className:"col-sm-3 mt-2",children:"Exportieren"}),(0,c.jsx)("div",{className:"col-sm-5"}),(0,c.jsx)("div",{className:"col-sm-4 mt-2",children:(0,c.jsx)("div",{className:"input-group",children:(0,c.jsxs)("select",{style:{border:"none",background:"none"},name:"p_export",value:u.p_export,onChange:N,children:[(0,c.jsx)("option",{value:"only owned",children:"Nur im Besitz"}),(0,c.jsx)("option",{value:"Withdraw",children:"Widerrufen"}),(0,c.jsx)("option",{value:"no",children:"No"}),(0,c.jsx)("option",{value:"yes",children:"Yes"})]})})})]})]}),(0,c.jsx)("h5",{className:"mt-3 fw-bold",children:"Dashboard"}),(0,c.jsx)("div",{children:(0,c.jsxs)("div",{className:"row",onClick:()=>{return e="Dashboard",void p((n=>({...n,section_name:e})));var e},children:[(0,c.jsxs)("div",{className:"row",onClick:()=>g("Dashboard"),children:[(0,c.jsx)("div",{className:"col-sm-3 mt-2",children:"Anzeigen"}),(0,c.jsx)("div",{className:"col-sm-5"}),(0,c.jsx)("div",{className:"col-sm-4 mt-2",children:(0,c.jsx)("div",{className:"input-group",children:(0,c.jsxs)("select",{style:{border:"none",background:"none"},name:"p_show",value:v.p_show,onChange:y,children:[(0,c.jsx)("option",{value:"only owned",children:"Nur im Besitz"}),(0,c.jsx)("option",{value:"Withdraw",children:"Widerrufen"}),(0,c.jsx)("option",{value:"no",children:"No"}),(0,c.jsx)("option",{value:"yes",children:"Yes"})]})})})]}),(0,c.jsxs)("div",{className:"row",children:[(0,c.jsx)("div",{className:"col-sm-3 mt-2",children:"Bearbeiten"}),(0,c.jsx)("div",{className:"col-sm-5"}),(0,c.jsx)("div",{className:"col-sm-4 mt-2",children:(0,c.jsx)("div",{className:"input-group",children:(0,c.jsxs)("select",{name:"p_edit",value:v.p_edit,style:{border:"none",background:"none"},onChange:y,children:[(0,c.jsx)("option",{value:"only owned",children:"Nur im Besitz"}),(0,c.jsx)("option",{value:"Withdraw",children:"Widerrufen"}),(0,c.jsx)("option",{value:"no",children:"No"}),(0,c.jsx)("option",{value:"yes",children:"Yes"})]})})})]}),(0,c.jsxs)("div",{className:"row",children:[(0,c.jsx)("div",{className:"col-sm-3 mt-2",children:"L\xf6schen"}),(0,c.jsx)("div",{className:"col-sm-5"}),(0,c.jsx)("div",{className:"col-sm-4 mt-2",children:(0,c.jsx)("div",{className:"input-group",children:(0,c.jsxs)("select",{style:{border:"none",background:"none"},name:"p_delete",value:v.p_delete,onChange:y,children:[(0,c.jsx)("option",{value:"only owned",children:"Nur im Besitz"}),(0,c.jsx)("option",{value:"Withdraw",children:"Widerrufen"}),(0,c.jsx)("option",{value:"no",children:"No"}),(0,c.jsx)("option",{value:"yes",children:"Yes"})]})})})]}),(0,c.jsxs)("div",{className:"row",children:[(0,c.jsx)("div",{className:"col-sm-3 mt-2",children:"Exportieren"}),(0,c.jsx)("div",{className:"col-sm-5"}),(0,c.jsx)("div",{className:"col-sm-4 mt-2",children:(0,c.jsx)("div",{className:"input-group",children:(0,c.jsxs)("select",{name:"p_export",value:v.p_export,style:{border:"none",background:"none"},onChange:y,children:[(0,c.jsx)("option",{value:"only owned",children:"Nur im Besitz"}),(0,c.jsx)("option",{value:"Withdraw",children:"Widerrufen"}),(0,c.jsx)("option",{value:"no",children:"No"}),(0,c.jsx)("option",{value:"yes",children:"Yes"})]})})})]})]})})]}),(0,c.jsxs)(s.Z.Footer,{children:[(0,c.jsx)("button",{className:"btn btn",onClick:f,style:{background:"#d04545",color:"white"},children:"Abbrechen"}),(0,c.jsx)("button",{className:"btn btn",style:{background:"#0b5995",color:"white"},onClick:async e=>{try{e.preventDefault();const s=await(0,r.QA)("".concat("http://95.217.77.208:4142","/role/create_role"),b);if(201===(null===s||void 0===s?void 0:s.status))return d(!a),t="Role Created Successfully",(0,i.Am)(t),n(!1)}catch(s){console.log(s)}var t},children:"Einreichen"})]})]})]})]})}),(0,c.jsx)(i.Ix,{})]})},m=t.memo(d)},62003:(e,n,a)=>{a.r(n),a.d(n,{default:()=>c});var t=a(72791),s=a(16157),l=a(48096),o=a(19129),r=a(84373),i=a(80184);const c=()=>{const[e,n]=(0,t.useState)(!1),a=()=>n(!1);return(0,i.jsx)("div",{children:(0,i.jsxs)("div",{className:"row card text-center",children:[(0,i.jsx)(o.WiM,{style:{fontSize:"50px",marginTop:"100px"}}),(0,i.jsx)("p",{children:"Keine Teams"}),(0,i.jsx)("p",{children:"Get started by creating a new team."}),(0,i.jsxs)("button",{style:{background:"#0b5995",color:"white",textAlign:"center",marginLeft:"38%"},className:"btn btn mb-3 w-25",onClick:()=>n(!0),children:[(0,i.jsx)(r.D0w,{}),"Team hinzuf\xfcgen"]}),(0,i.jsxs)(l.Z,{show:e,onHide:a,backdrop:"static",keyboard:!1,centered:!0,children:[(0,i.jsx)(l.Z.Header,{closeButton:!0,children:(0,i.jsx)(l.Z.Title,{children:"Neues Team erstellen"})}),(0,i.jsxs)(l.Z.Body,{children:[(0,i.jsxs)("div",{className:"row",children:[(0,i.jsxs)("div",{className:"col-sm-6",children:[(0,i.jsx)("input",{type:"text",className:"form-control",placeholder:"Name der Mannschaft"}),(0,i.jsx)("br",{}),(0,i.jsx)("select",{className:"form-control",children:(0,i.jsx)("option",{children:"Teammitglieder"})})]}),(0,i.jsx)("div",{className:"col-sm-6",children:(0,i.jsx)("select",{className:"form-control",children:(0,i.jsx)("option",{children:"Manager"})})})]}),(0,i.jsx)("br",{}),(0,i.jsx)("textarea",{name:"",className:"form-control",placeholder:"Beschreibung des Teams",id:"",rows:"3"})]}),(0,i.jsxs)(l.Z.Footer,{children:[(0,i.jsx)(s.Z,{variant:"secondary",style:{background:"#d04545",color:"white"},onClick:a,children:"Abbrechen"}),(0,i.jsx)(s.Z,{variant:"primary",style:{background:"#0b5995",color:"white"},children:"Erstellen"})]})]})]})})}},68247:(e,n,a)=>{a.r(n),a.d(n,{default:()=>h});var t=a(72791),s=a(91020),l=a(48096),o=a(16856),r=a(76053),i=a(78820),c=a(99355),d=a(80184);const m=()=>{var e;const[n,a]=(0,t.useState)([]),[m,h]=(0,t.useState)(),u="http://95.217.77.208:4142",[x,v]=(0,t.useState)(),[p,b]=(0,t.useState)(),[j,g]=(0,t.useState)("checkbox"),[N,y]=(0,t.useState)(!1),[f,w]=(0,t.useState)(!1),[k,_]=(0,t.useState)("nav-home"),[C,z]=(0,t.useState)([]),[S,B]=(0,t.useState)(""),[Z,A]=(0,t.useState)({f_name:"",l_name:"",street:"",plz:"",city:"",email:"",location:"",tel:"",mob:"",role:""}),[W,T]=(0,t.useState)({users:{},password:{password:"null"},localization:{location:"null"},advanced:{advanced:"null"},notification:{notification:"null"}}),R=e=>{_(e)},E=e=>{const{name:n,value:a}=e.target;A({...Z,[n]:a})};let I=localStorage.getItem("record"),D=JSON.parse(I),L=null===D||void 0===D||null===(e=D.user)||void 0===e?void 0:e._id;(0,t.useEffect)((()=>{T((e=>({...e,users:Z})))}),[Z]);const Y=[{title:"ID",dataIndex:"_id",render:e=>(0,d.jsx)("a",{children:e})},{title:"NAME",dataIndex:"user_name"},{title:"E-Mail Adresse",dataIndex:"user_email"},{title:"Super Verwalter",dataIndex:"superVerwalter"},{title:"AKTION",dataIndex:"action",render:()=>(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(r.Uf_,{}),"\xa0 Bearbeiten \xa0\xa0\xa0",(0,d.jsx)(o.ZkW,{}),"L\xf6schen"]})}];let F=localStorage.getItem("updateFunc");return(0,t.useEffect)((()=>{(async()=>{try{const e=await(0,c.wY)("".concat(u,"/role/get_role"));z(null===e||void 0===e?void 0:e.data)}catch(e){console.log(e)}})()}),[F]),(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)("div",{className:"topBtnBox",children:(0,d.jsxs)("div",{className:"",children:[(0,d.jsxs)("button",{className:"btn btn",onClick:()=>{y(!0)},style:{background:"#0b5995",color:"white"},children:[(0,d.jsx)(o.x06,{}),"\xa0 Benutzer erstellen"]}),(0,d.jsxs)(l.Z,{size:"lg",show:N,onHide:()=>{y(!1)},centered:!0,children:[(0,d.jsx)(l.Z.Header,{closeButton:!0,children:(0,d.jsx)(l.Z.Title,{children:" Benutzer einladen"})}),(0,d.jsxs)(l.Z.Body,{children:[(0,d.jsx)("div",{className:"row",style:{background:"white"},children:(0,d.jsx)("div",{className:"col-sm-12",children:(0,d.jsx)("nav",{children:(0,d.jsxs)("div",{className:"nav nav-tabs",id:"nav-tab",role:"tablist",children:[(0,d.jsx)("button",{className:"nav-link ".concat("nav-benutzer"===k?"active":""),id:"nav-benutzer-tab","data-bs-toggle":"tab",role:"tab","aria-selected":"nav-benutzer"===k,onClick:()=>R("nav-benutzer"),style:{marginRight:"10px",marginLeft:"20px"},children:"Benutzer"}),(0,d.jsx)("button",{className:"nav-link ".concat("nav-rollen"===k?"active":""),id:"nav-rollen-tab","data-bs-toggle":"tab",role:"tab","aria-controls":"nav-rollen","aria-selected":"nav-rollen"===k,onClick:()=>R("nav-rollen"),style:{marginRight:"10px"},children:"Passwort"}),(0,d.jsx)("button",{className:"nav-link ".concat("nav-lokalisierung"===k?"active":""),id:"nav-lokalisierung-tab","data-bs-toggle":"tab",role:"tab","aria-controls":"nav-lokalisierung","aria-selected":"nav-lokalisierung"===k,onClick:()=>R("nav-lokalisierung"),style:{marginRight:"10px"},children:"Lokalisierung"}),(0,d.jsx)("button",{className:"nav-link ".concat("nav-benachrichtigungen"===k?"active":""),id:"nav-benachrichtigungen-tab","data-bs-toggle":"tab",role:"tab","aria-controls":"nav-benachrichtigungen","aria-selected":"nav-benachrichtigungen"===k,onClick:()=>R("nav-benachrichtigungen"),style:{marginRight:"10px"},children:"Benachrichtigungen"}),(0,d.jsx)("button",{className:"nav-link ".concat("nav-fortgeschrittene"===k?"active":""),id:"nav-fortgeschrittene-tab","data-bs-toggle":"tab",role:"tab","aria-controls":"nav-fortgeschrittene","aria-selected":"nav-fortgeschrittene"===k,onClick:()=>R("nav-fortgeschrittene"),style:{marginRight:"10px"},children:"Fortgeschrittene"})]})})})}),(0,d.jsx)("br",{}),(0,d.jsxs)("div",{className:"tab-content",id:"nav-tabContent",children:[(0,d.jsx)("div",{className:"tab-pane fade ".concat("nav-benutzer"===k?"show active":""),id:"nav-benutzer",role:"tabpanel","aria-labelledby":"nav-benutzer-tab",children:(0,d.jsxs)("div",{className:"row",children:[(0,d.jsxs)("div",{className:"col-sm-6",children:[(0,d.jsx)("input",{className:"form-control",placeholder:"Name",type:"text",name:"f_name",value:Z.f_name,onChange:E}),(0,d.jsx)("br",{}),(0,d.jsx)("input",{className:"form-control",placeholder:"Stra\xdfe mit Hausnummer",type:"text",name:"street",value:Z.street,onChange:E}),(0,d.jsx)("br",{}),(0,d.jsx)("input",{className:"form-control",placeholder:"Stadt",type:"text",name:"city",value:Z.city,onChange:E}),(0,d.jsx)("br",{}),(0,d.jsx)("input",{className:"form-control",placeholder:"Standort",type:"text",name:"location",value:Z.location,onChange:E}),(0,d.jsx)("br",{}),(0,d.jsxs)("select",{className:"form-control",name:"role",value:Z.role,onChange:E,children:[(0,d.jsx)("option",{value:"",children:"Select Role"}),null===C||void 0===C?void 0:C.map((e=>{const{role_name:n,_id:a}=e;return(0,d.jsx)("option",{value:a,children:n},a)}))]})]}),(0,d.jsxs)("div",{className:"col-sm-6",children:[(0,d.jsx)("input",{className:"form-control",placeholder:"Vorname",type:"text",name:"l_name",value:Z.l_name,onChange:E}),(0,d.jsx)("br",{}),(0,d.jsx)("input",{className:"form-control",type:"text",placeholder:"PLZ",name:"plz",value:Z.plz,onChange:E}),(0,d.jsx)("br",{}),(0,d.jsx)("input",{className:"form-control",placeholder:"E-Mail Adresse",type:"email",name:"email",value:Z.email,onChange:E}),(0,d.jsx)("br",{}),(0,d.jsx)("input",{className:"form-control",placeholder:"Telefon",maxLength:10,minLength:2,type:"phone",name:"tel",value:Z.tel,onChange:E}),(0,d.jsx)("br",{}),(0,d.jsx)("input",{className:"form-control",placeholder:"Mobil",maxLength:10,minLength:2,type:"phone",name:"mob",value:Z.mob,onChange:E})]})]})}),(0,d.jsx)("div",{className:"tab-pane fade ".concat("nav-rollen"===k?"show active":""),id:"nav-rollen",role:"tabpanel","aria-labelledby":"nav-rollen-tab"}),(0,d.jsx)("div",{className:"tab-pane fade ".concat("nav-mannschaften"===k?"show active":""),id:"nav-mannschaften",role:"tabpanel","aria-labelledby":"nav-mannschaften-tab"})]})]}),(0,d.jsx)(l.Z.Footer,{children:(0,d.jsx)("div",{className:"row mb-2",children:(0,d.jsx)("div",{className:"col-sm-12",children:(0,d.jsxs)("div",{style:{float:"right"},children:[(0,d.jsx)("button",{className:"btn",onClick:()=>w(!1),style:{background:"#d04545",color:"white"},children:"Abbrechen"}),"\xa0\xa0",(0,d.jsx)("button",{className:"btn mx-2",onClick:async e=>{try{e.preventDefault();const n=await(0,c.QA)("".concat(u,"/user/register/record/adduser/").concat(L),W);console.log("response",n)}catch(n){console.log(n)}},style:{background:"#0b5995",color:"white"},children:"Speichern"})]})})})})]}),"\xa0 \xa0",(0,d.jsx)("input",{type:"search",id:"form1",placeholder:"Suche",className:"form-control boxSearchBtn"}),"\xa0 \xa0",(0,d.jsx)("button",{type:"button",className:"btn btn text-light",style:{background:"#0b5995"},children:(0,d.jsx)(i.xRF,{})})]})}),(0,d.jsx)("div",{className:"row",children:(0,d.jsx)(s.Z,{rowSelection:{type:j,onChange:(e,n)=>{},getCheckboxProps:e=>({disabled:"Disabled User"===e.name,name:e.name})},style:{overflowX:"auto"},columns:Y,dataSource:[{_id:"1",user_name:"John Brown",age:32,emailAddress:"john@example.com",emailAddress:"mailto:john@example.com",superVerwalter:"Yes",action:"Edit"},{_id:"2",user_name:"Jim Green",age:42,emailAddress:"jim@example.com",emailAddress:"mailto:jim@example.com",superVerwalter:"No",action:"Delete"},{_id:"3",user_name:"Joe Black",age:32,emailAddress:"joe@example.com",emailAddress:"mailto:joe@example.com",superVerwalter:"Yes",action:"View"}]})})]})},h=t.memo(m)},16157:(e,n,a)=>{a.d(n,{Z:()=>h});var t=a(81694),s=a.n(t),l=a(72791),o=a(80184);const r=["as","disabled"];function i(e){let{tagName:n,disabled:a,href:t,target:s,rel:l,role:o,onClick:r,tabIndex:i=0,type:c}=e;n||(n=null!=t||null!=s||null!=l?"a":"button");const d={tagName:n};if("button"===n)return[{type:c||"button",disabled:a},d];const m=e=>{(a||"a"===n&&function(e){return!e||"#"===e.trim()}(t))&&e.preventDefault(),a?e.stopPropagation():null==r||r(e)};return"a"===n&&(t||(t="#"),a&&(t=void 0)),[{role:null!=o?o:"button",disabled:void 0,tabIndex:a?void 0:i,href:t,target:"a"===n?s:void 0,"aria-disabled":a||void 0,rel:"a"===n?l:void 0,onClick:m,onKeyDown:e=>{" "===e.key&&(e.preventDefault(),m(e))}},d]}const c=l.forwardRef(((e,n)=>{let{as:a,disabled:t}=e,s=function(e,n){if(null==e)return{};var a,t,s={},l=Object.keys(e);for(t=0;t<l.length;t++)a=l[t],n.indexOf(a)>=0||(s[a]=e[a]);return s}(e,r);const[l,{tagName:c}]=i(Object.assign({tagName:a,disabled:t},s));return(0,o.jsx)(c,Object.assign({},s,l,{ref:n}))}));c.displayName="Button";var d=a(10162);const m=l.forwardRef(((e,n)=>{let{as:a,bsPrefix:t,variant:l="primary",size:r,active:c=!1,disabled:m=!1,className:h,...u}=e;const x=(0,d.vE)(t,"btn"),[v,{tagName:p}]=i({tagName:a,disabled:m,...u}),b=p;return(0,o.jsx)(b,{...v,...u,ref:n,disabled:m,className:s()(h,x,c&&"active",l&&"".concat(x,"-").concat(l),r&&"".concat(x,"-").concat(r),u.href&&m&&"disabled")})}));m.displayName="Button";const h=m}}]);
//# sourceMappingURL=118.5f683ee3.chunk.js.map