"use strict";(self.webpackChunk_coreui_coreui_free_react_admin_template=self.webpackChunk_coreui_coreui_free_react_admin_template||[]).push([[247],{99355:(e,a,t)=>{t.d(a,{QA:()=>d,Wq:()=>i,ZC:()=>s,wY:()=>l,y6:()=>r,yu:()=>c,z:()=>o});var n=t(55294);const l=async e=>{try{return await(0,n.Z)({method:"get",url:"".concat(e),headers:{"Content-Type":"application/json"}})}catch(a){return console.log(a),a}},s=async(e,a)=>{try{const t=await(0,n.Z)({method:"post",url:e,headers:{"Content-Type":"multipart/form-data"},data:a});if(t)return t}catch(t){return t}},o=async(e,a)=>{try{return(await n.Z.post(e,a,{headers:{"Content-Type":"application/json"}})).data}catch(t){throw console.error("Error in postFetchContent:",t),t}},r=async(e,a)=>{try{const t=await(0,n.Z)({method:"put",url:"".concat(e),headers:{"Content-Type":"multipart/form-data; boundary=<calculated when request is sent>"},data:a});if(200===t.status)return t}catch(t){return t?401:t.response}},c=async(e,a)=>{try{const t=await(0,n.Z)({method:"put",url:"".concat(e),headers:{"Content-Type":"application/json"},data:a});if(t)return t}catch(l){var t;return 401===(null===l||void 0===l||null===(t=l.response)||void 0===t?void 0:t.status)?401:l.response}},i=async(e,a)=>{try{const t=await(0,n.Z)({method:"delete",url:"".concat(e,"/").concat(a),headers:{"Content-Type":"application/json"}});if(200===t.status)return t}catch(l){var t;if(401===(null===l||void 0===l||null===(t=l.response)||void 0===t?void 0:t.status))return 401}},d=async(e,a)=>{try{const t=await(0,n.Z)({method:"post",url:"".concat(e),headers:{"Content-Type":"application/json"},data:a});if(t)return null===t||void 0===t?void 0:t.data}catch(l){var t;return 401===(null===l||void 0===l||null===(t=l.response)||void 0===t?void 0:t.status)?401:l}}},68247:(e,a,t)=>{t.r(a),t.d(a,{default:()=>m});var n=t(72791),l=t(91020),s=t(48096),o=t(16856),r=t(76053),c=t(78820),i=t(99355),d=t(80184);const u=()=>{var e;const[a,t]=(0,n.useState)([]),[u,m]=(0,n.useState)(),h="http://95.217.77.208:4142",[v,p]=(0,n.useState)(),[b,x]=(0,n.useState)(),[g,j]=(0,n.useState)("checkbox"),[y,f]=(0,n.useState)(!1),[N,w]=(0,n.useState)(!1),[k,C]=(0,n.useState)("nav-home"),[_,S]=(0,n.useState)([]),[z,Z]=(0,n.useState)(""),[A,B]=(0,n.useState)({f_name:"",l_name:"",street:"",plz:"",city:"",email:"",location:"",tel:"",mob:"",role:""}),[T,I]=(0,n.useState)({users:{},password:{password:"null"},localization:{location:"null"},advanced:{advanced:"null"},notification:{notification:"null"}}),L=e=>{C(e)},E=e=>{const{name:a,value:t}=e.target;B({...A,[a]:t})};let F=localStorage.getItem("record"),R=JSON.parse(F),V=null===R||void 0===R||null===(e=R.user)||void 0===e?void 0:e._id;(0,n.useEffect)((()=>{I((e=>({...e,users:A})))}),[A]);const D=[{title:"ID",dataIndex:"_id",render:e=>(0,d.jsx)("a",{children:e})},{title:"NAME",dataIndex:"user_name"},{title:"E-Mail Adresse",dataIndex:"user_email"},{title:"Super Verwalter",dataIndex:"superVerwalter"},{title:"AKTION",dataIndex:"action",render:()=>(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(r.Uf_,{}),"\xa0 Bearbeiten \xa0\xa0\xa0",(0,d.jsx)(o.ZkW,{}),"L\xf6schen"]})}];let J=localStorage.getItem("updateFunc");return(0,n.useEffect)((()=>{(async()=>{try{const e=await(0,i.wY)("".concat(h,"/role/get_role"));S(null===e||void 0===e?void 0:e.data)}catch(e){console.log(e)}})()}),[J]),(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)("div",{className:"topBtnBox",children:(0,d.jsxs)("div",{className:"",children:[(0,d.jsxs)("button",{className:"btn btn",onClick:()=>{f(!0)},style:{background:"#0b5995",color:"white"},children:[(0,d.jsx)(o.x06,{}),"\xa0 Benutzer erstellen"]}),(0,d.jsxs)(s.Z,{size:"lg",show:y,onHide:()=>{f(!1)},centered:!0,children:[(0,d.jsx)(s.Z.Header,{closeButton:!0,children:(0,d.jsx)(s.Z.Title,{children:" Benutzer einladen"})}),(0,d.jsxs)(s.Z.Body,{children:[(0,d.jsx)("div",{className:"row",style:{background:"white"},children:(0,d.jsx)("div",{className:"col-sm-12",children:(0,d.jsx)("nav",{children:(0,d.jsxs)("div",{className:"nav nav-tabs",id:"nav-tab",role:"tablist",children:[(0,d.jsx)("button",{className:"nav-link ".concat("nav-benutzer"===k?"active":""),id:"nav-benutzer-tab","data-bs-toggle":"tab",role:"tab","aria-selected":"nav-benutzer"===k,onClick:()=>L("nav-benutzer"),style:{marginRight:"10px",marginLeft:"20px"},children:"Benutzer"}),(0,d.jsx)("button",{className:"nav-link ".concat("nav-rollen"===k?"active":""),id:"nav-rollen-tab","data-bs-toggle":"tab",role:"tab","aria-controls":"nav-rollen","aria-selected":"nav-rollen"===k,onClick:()=>L("nav-rollen"),style:{marginRight:"10px"},children:"Passwort"}),(0,d.jsx)("button",{className:"nav-link ".concat("nav-lokalisierung"===k?"active":""),id:"nav-lokalisierung-tab","data-bs-toggle":"tab",role:"tab","aria-controls":"nav-lokalisierung","aria-selected":"nav-lokalisierung"===k,onClick:()=>L("nav-lokalisierung"),style:{marginRight:"10px"},children:"Lokalisierung"}),(0,d.jsx)("button",{className:"nav-link ".concat("nav-benachrichtigungen"===k?"active":""),id:"nav-benachrichtigungen-tab","data-bs-toggle":"tab",role:"tab","aria-controls":"nav-benachrichtigungen","aria-selected":"nav-benachrichtigungen"===k,onClick:()=>L("nav-benachrichtigungen"),style:{marginRight:"10px"},children:"Benachrichtigungen"}),(0,d.jsx)("button",{className:"nav-link ".concat("nav-fortgeschrittene"===k?"active":""),id:"nav-fortgeschrittene-tab","data-bs-toggle":"tab",role:"tab","aria-controls":"nav-fortgeschrittene","aria-selected":"nav-fortgeschrittene"===k,onClick:()=>L("nav-fortgeschrittene"),style:{marginRight:"10px"},children:"Fortgeschrittene"})]})})})}),(0,d.jsx)("br",{}),(0,d.jsxs)("div",{className:"tab-content",id:"nav-tabContent",children:[(0,d.jsx)("div",{className:"tab-pane fade ".concat("nav-benutzer"===k?"show active":""),id:"nav-benutzer",role:"tabpanel","aria-labelledby":"nav-benutzer-tab",children:(0,d.jsxs)("div",{className:"row",children:[(0,d.jsxs)("div",{className:"col-sm-6",children:[(0,d.jsx)("input",{className:"form-control",placeholder:"Name",type:"text",name:"f_name",value:A.f_name,onChange:E}),(0,d.jsx)("br",{}),(0,d.jsx)("input",{className:"form-control",placeholder:"Stra\xdfe mit Hausnummer",type:"text",name:"street",value:A.street,onChange:E}),(0,d.jsx)("br",{}),(0,d.jsx)("input",{className:"form-control",placeholder:"Stadt",type:"text",name:"city",value:A.city,onChange:E}),(0,d.jsx)("br",{}),(0,d.jsx)("input",{className:"form-control",placeholder:"Standort",type:"text",name:"location",value:A.location,onChange:E}),(0,d.jsx)("br",{}),(0,d.jsxs)("select",{className:"form-control",name:"role",value:A.role,onChange:E,children:[(0,d.jsx)("option",{value:"",children:"Select Role"}),null===_||void 0===_?void 0:_.map((e=>{const{role_name:a,_id:t}=e;return(0,d.jsx)("option",{value:t,children:a},t)}))]})]}),(0,d.jsxs)("div",{className:"col-sm-6",children:[(0,d.jsx)("input",{className:"form-control",placeholder:"Vorname",type:"text",name:"l_name",value:A.l_name,onChange:E}),(0,d.jsx)("br",{}),(0,d.jsx)("input",{className:"form-control",type:"text",placeholder:"PLZ",name:"plz",value:A.plz,onChange:E}),(0,d.jsx)("br",{}),(0,d.jsx)("input",{className:"form-control",placeholder:"E-Mail Adresse",type:"email",name:"email",value:A.email,onChange:E}),(0,d.jsx)("br",{}),(0,d.jsx)("input",{className:"form-control",placeholder:"Telefon",maxLength:10,minLength:2,type:"phone",name:"tel",value:A.tel,onChange:E}),(0,d.jsx)("br",{}),(0,d.jsx)("input",{className:"form-control",placeholder:"Mobil",maxLength:10,minLength:2,type:"phone",name:"mob",value:A.mob,onChange:E})]})]})}),(0,d.jsx)("div",{className:"tab-pane fade ".concat("nav-rollen"===k?"show active":""),id:"nav-rollen",role:"tabpanel","aria-labelledby":"nav-rollen-tab"}),(0,d.jsx)("div",{className:"tab-pane fade ".concat("nav-mannschaften"===k?"show active":""),id:"nav-mannschaften",role:"tabpanel","aria-labelledby":"nav-mannschaften-tab"})]})]}),(0,d.jsx)(s.Z.Footer,{children:(0,d.jsx)("div",{className:"row mb-2",children:(0,d.jsx)("div",{className:"col-sm-12",children:(0,d.jsxs)("div",{style:{float:"right"},children:[(0,d.jsx)("button",{className:"btn",onClick:()=>w(!1),style:{background:"#d04545",color:"white"},children:"Abbrechen"}),"\xa0\xa0",(0,d.jsx)("button",{className:"btn mx-2",onClick:async e=>{try{e.preventDefault();const a=await(0,i.QA)("".concat(h,"/user/register/record/adduser/").concat(V),T);console.log("response",a)}catch(a){console.log(a)}},style:{background:"#0b5995",color:"white"},children:"Speichern"})]})})})})]}),"\xa0 \xa0",(0,d.jsx)("input",{type:"search",id:"form1",placeholder:"Suche",className:"form-control boxSearchBtn"}),"\xa0 \xa0",(0,d.jsx)("button",{type:"button",className:"btn btn text-light",style:{background:"#0b5995"},children:(0,d.jsx)(c.xRF,{})})]})}),(0,d.jsx)("div",{className:"row",children:(0,d.jsx)(l.Z,{rowSelection:{type:g,onChange:(e,a)=>{},getCheckboxProps:e=>({disabled:"Disabled User"===e.name,name:e.name})},style:{overflowX:"auto"},columns:D,dataSource:[{_id:"1",user_name:"John Brown",age:32,emailAddress:"john@example.com",emailAddress:"mailto:john@example.com",superVerwalter:"Yes",action:"Edit"},{_id:"2",user_name:"Jim Green",age:42,emailAddress:"jim@example.com",emailAddress:"mailto:jim@example.com",superVerwalter:"No",action:"Delete"},{_id:"3",user_name:"Joe Black",age:32,emailAddress:"joe@example.com",emailAddress:"mailto:joe@example.com",superVerwalter:"Yes",action:"View"}]})})]})},m=n.memo(u)}}]);
//# sourceMappingURL=247.56df00f1.chunk.js.map