"use strict";(self.webpackChunk_coreui_coreui_free_react_admin_template=self.webpackChunk_coreui_coreui_free_react_admin_template||[]).push([[267,930],{18930:(e,a,s)=>{s.r(a),s.d(a,{default:()=>m});var l=s(72791),n=s(58617),t=s(84373),c=s(70828),i=s(57689),o=s(80184);const r=()=>{var e,a,s,r,m,d;const[h,u]=(0,l.useState)(""),x=(0,i.s0)(),v=(e,a)=>(u(e),"KlientInnen"===a?x("/customer/customer_info"):"Kontakte"===a?x("/customer/contact"):"Aktivitat"===a?x("/customer/description"):"Dokumente"===a?x("/customer/document"):"Vollmachten"===a?x("/customer/attorney"):"SPV"===a?x("/customer/services"):"Rechnung"===a?x("/customer/bills"):void 0);let b=localStorage.getItem("customerDatat"),p=JSON.parse(b);const j=(null===p||void 0===p||null===(e=p.fname)||void 0===e?void 0:e.slice(0,1).toUpperCase())+(null===p||void 0===p||null===(a=p.fname)||void 0===a?void 0:a.slice(1).toLowerCase()),N=(null===p||void 0===p||null===(s=p.lname)||void 0===s?void 0:s.slice(0,1).toUpperCase())+(null===p||void 0===p||null===(r=p.lname)||void 0===r?void 0:r.slice(1).toLowerCase());let g=(null===p||void 0===p||null===(m=p.street)||void 0===m?void 0:m.slice(0,1).toUpperCase())+(null===p||void 0===p||null===(d=p.street)||void 0===d?void 0:d.slice(1).toLowerCase());return(0,o.jsx)(o.Fragment,{children:(0,o.jsxs)("div",{className:"whiteBox",children:[(0,o.jsx)("div",{className:"blueBoxTop",children:(0,o.jsxs)("div",{className:"row",children:[(0,o.jsxs)("div",{className:"col-sm-4",children:[(0,o.jsxs)("p",{style:{color:"white",marginTop:"5px"},children:["KlientInnen: ","".concat(j," ").concat(N)]}),(0,o.jsx)(c.VFp,{style:{color:"white"}}),"\xa0",(0,o.jsx)("span",{style:{color:"white"},children:g})]}),(0,o.jsxs)("div",{className:"col-sm-8 mt-4 text-right",children:[(0,o.jsxs)("button",{className:"btn btn-outline",style:{color:"white",border:"1px solid white",marginRight:"10px"},children:[(0,o.jsx)(n.Zuw,{className:"f-2"})," ",null===p||void 0===p?void 0:p.email]}),(0,o.jsxs)("button",{className:"btn btn-outline",style:{color:"white",border:"1px solid white",marginRight:"10px"},children:[(0,o.jsx)(t.HQO,{className:"f-2"})," ",null===p||void 0===p?void 0:p.phone]})]})]})}),(0,o.jsxs)("div",{className:"whiteBoxWithPdLR",children:[(0,o.jsx)("div",{className:"row",children:(0,o.jsx)("div",{className:"col-sm-12",children:(0,o.jsx)("nav",{children:(0,o.jsxs)("div",{className:"nav nav-tabs",id:"nav-tab",role:"tablist",children:[(0,o.jsxs)("button",{className:"nav-link ".concat("nav-home"===h?"active":""),id:"nav-home-tab","data-bs-toggle":"tab",role:"tab","aria-selected":"nav-home"===h,onClick:()=>v("nav-home","KlientInnen"),style:{marginRight:"20px",marginLeft:"20px"},children:[(0,o.jsx)("i",{className:"fa-solid fa-info fa-fw infoIcon"}),"KlientInnen"]}),(0,o.jsxs)("button",{className:"nav-link ".concat("nav-kontakte"===h?"active":""),id:"nav-kontakte-tab","data-bs-toggle":"tab",role:"tab","aria-controls":"nav-kontakte","aria-selected":"nav-kontakte"===h,onClick:()=>v("nav-kontakte","Kontakte"),style:{marginRight:"20px"},children:[" ",(0,o.jsx)("i",{className:"fa-regular fa-address-book fa-fw"}),"Kontakte"]}),(0,o.jsxs)("button",{className:"nav-link ".concat("nav-aufgaben"===h?"active":""),id:"nav-aufgaben-tab","data-bs-toggle":"tab","data-bs-target":"#nav-aufgaben",role:"tab","aria-controls":"nav-aufgaben","aria-selected":"nav-aufgaben"===h,onClick:()=>v("nav-aufgaben","Aktivitat"),style:{marginRight:"20px"},children:[(0,o.jsx)("i",{className:"fa-solid fa-heart-pulse fa-fw"}),"Aktivitat"]}),(0,o.jsxs)("button",{className:"nav-link ".concat("nav-rechnungen"===h?"active":""),id:"nav-rechnungen-tab","data-bs-toggle":"tab","data-bs-target":"#nav-rechnungen",role:"tab","aria-controls":"nav-rechnungen","aria-selected":"nav-rechnungen"===h,onClick:()=>v("nav-rechnungen","Dokumente"),style:{marginRight:"20px"},children:[(0,o.jsx)("i",{className:"fa-regular fa-file fa-fw"}),"Dokumente"]}),(0,o.jsxs)("button",{className:"nav-link ".concat("nav-beschreibung"===h?"active":""),id:"nav-beschreibung-tab","data-bs-toggle":"tab","data-bs-target":"#nav-beschreibung",role:"tab","aria-controls":"nav-beschreibung","aria-selected":"nav-beschreibung"===h,onClick:()=>v("nav-beschreibung","Vollmachten"),style:{marginRight:"20px"},children:[(0,o.jsx)("i",{className:"fa-solid fa-paint-roller fa-fw"}),"Vollmachten"]}),(0,o.jsxs)("button",{className:"nav-link ".concat("nav-dokumente"===h?"active":""),id:"nav-dokumente-tab","data-bs-toggle":"tab","data-bs-target":"#nav-dokumente",role:"tab","aria-controls":"nav-dokumente","aria-selected":"nav-dokumente"===h,onClick:()=>v("nav-dokumente","SPV"),style:{marginRight:"20px"},children:[" ",(0,o.jsx)("i",{className:"fa-regular fa-lightbulb fa-fw"}),"SPV"]}),(0,o.jsxs)("button",{className:"nav-link ".concat("nav-leistungen"===h?"active":""),id:"nav-leistungen-tab","data-bs-toggle":"tab","data-bs-target":"#nav-leistungen",role:"tab","aria-controls":"nav-leistungen","aria-selected":"nav-leistungen"===h,onClick:()=>v("nav-leistungen","Rechnung"),style:{marginRight:"20px"},children:[(0,o.jsx)("i",{className:"fa-regular fa-file-lines fa-fw"}),"Rechnung"]})]})})})}),(0,o.jsx)("hr",{})]})]})})},m=l.memo(r)},92267:(e,a,s)=>{s.r(a),s.d(a,{default:()=>r});var l=s(72791),n=s(30177),t=s(29655),c=(s(5462),s(18930)),i=s(80184);const o=()=>{const e=e=>(0,t.Am)(e),[a,s]=(0,l.useState)({orderNumber:"",newsletterDate:"",extras:"",newsletterSubscription:""}),[o,r]=(0,l.useState)({clientStatus:[],dataProtection:!1,employee:"",dataCollection:""}),[m,d]=(0,l.useState)(),[h,u]=(0,l.useState)({title:"",salution:"",gender:"",fname:"",lname:"",dob:""}),[x,v]=(0,l.useState)({billAddress:"",billPlz:"",billLand:"",billOrt:""}),[b,p]=(0,l.useState)({fname:"",lname:"",address:"",plz:"",land:"",ort:"",email:"",phone:"",mobile:"",alreadyPaid:!1}),[j,N]=(0,l.useState)({deposit:"",emergencyPass:"",updateStamp:"",nextBrand:""}),[g,f]=(0,l.useState)({termination:!1,terminationDeath:!1,notTermination:!1,financialReasons:!1});let w=localStorage.getItem("customerDatat"),k=JSON.parse(w);const y={orderingMaterials:a,customerInfoStatu:o,those:m,customerContact:h,customerBills:x,customerDelivery:b,customerDeposit:j,customerBurial:g,customer_id:k._id},P=e=>{const{name:l,value:n}=e.target;s({...a,[l]:n})},C=e=>{const{name:a,value:s}=e.target;r({...o,[a]:s})},S=e=>{const{name:a,value:s,type:l,checked:n}=e.target,t="radio"===l?n?s:"":s;u({...h,[a]:t})},D=e=>{const{name:a,value:s}=e.target;v({...x,[a]:s})},F=e=>{const{name:a,value:s}=e.target;p({...b,[a]:s})},A=e=>{const{name:a,value:s,type:l,checked:n}=e.target,t="checkbox"===l?n:s;N({...j,[a]:t})},L=e=>{const{name:a,checked:s}=e.target;f({...g,[a]:s})};return(0,i.jsxs)("div",{style:{background:"#fff"},children:[(0,i.jsx)(c.default,{}),(0,i.jsx)("h5",{className:"text-dark p-2",children:"KlientInnen"}),(0,i.jsx)("hr",{}),(0,i.jsx)("h3",{className:"bluetext p-2",children:"Materialbestellung"}),(0,i.jsxs)("div",{className:"row",children:[(0,i.jsx)("div",{className:"col-sm-3",children:(0,i.jsxs)("div",{className:"row",children:[(0,i.jsx)("label",{htmlFor:"inputPassword",className:"col-sm-8 col-form-label text-right",children:"Bestellte Anzahl Frageb\xf6gen"}),(0,i.jsx)("div",{className:"col-sm-4",children:(0,i.jsx)("input",{type:"number",value:a.orderNumber,name:"orderNumber",onChange:P,className:"form-control"})})]})}),(0,i.jsx)("div",{className:"col-sm-3",children:(0,i.jsxs)("div",{className:"row",children:[(0,i.jsx)("label",{htmlFor:"inputPassword",className:"col-sm-4 col-form-label text-right",children:"Extras"}),(0,i.jsx)("div",{className:"col-sm-8",children:(0,i.jsx)("input",{type:"text",name:"extras",value:a.extras,onChange:P,className:"form-control",placeholder:"Extras"})})]})}),(0,i.jsx)("div",{className:"col-sm-3",children:(0,i.jsxs)("div",{className:"row",children:[(0,i.jsx)("label",{htmlFor:"inputPassword",className:"col-sm-6 col-form-label text-right",children:"Newsletter-Datum"}),(0,i.jsx)("div",{className:"col-sm-6",children:(0,i.jsx)("input",{type:"date",name:"newsletterDate",value:a.newsletterDate,onChange:P,className:"form-control",placeholder:"01/09/2000"})})]})}),(0,i.jsx)("div",{className:"col-sm-3",children:(0,i.jsxs)("div",{className:"row",children:[(0,i.jsx)("label",{htmlFor:"inputPassword",className:"col-sm-6 col-form-label text-right",children:"Newsletter-Abonnement"}),(0,i.jsx)("div",{className:"col-sm-4",children:(0,i.jsxs)("div",{className:"d-flex mt-6",children:[(0,i.jsx)("input",{type:"radio",name:"newsletterSubscription",value:"active",checked:"active"===a.newsletterSubscription,onChange:P}),"\xa0Aktiv",(0,i.jsx)("input",{type:"radio",name:"newsletterSubscription",value:"inactive",checked:"inactive"===a.newsletterSubscription,onChange:P}),"\xa0Inaktiv"]})})]})})]}),(0,i.jsx)("br",{}),(0,i.jsx)("hr",{}),(0,i.jsx)("h3",{className:"bluetext mx-3",children:"status"}),(0,i.jsxs)("div",{className:"row p-3",children:[(0,i.jsxs)("div",{className:"col-sm-6",children:[(0,i.jsx)("br",{}),(0,i.jsxs)("div",{className:"mb-6 row",children:[(0,i.jsx)("label",{htmlFor:"inputPassword",className:"col-sm-4 col-form-label",children:"Status"}),(0,i.jsx)("div",{className:"col-sm-6",children:(0,i.jsx)(n.ZP,{className:"form-multi-select",name:"clientStatus",onChange:(e,a)=>{const s=a&&a.name;if(s){const a=e&&void 0!==e.value?e.value:e;r((e=>({...e,[s]:a})))}},value:o.clientStatus,id:"ms1",isMulti:!0,options:[{value:"0",label:"HVD-PV"},{value:"1",label:"SPV alt"},{value:"2",label:"OPV alt"},{value:"3",label:"Dauerspenderlnner"},{label:"Backend",options:[{value:"4",label:"Materialbestellung"},{value:"5",label:"Newsletter Abonnent"},{value:"6",label:"Offen"}]}]})})]}),(0,i.jsx)("br",{}),(0,i.jsxs)("div",{className:"mb-6 row",children:[(0,i.jsx)("label",{htmlFor:"inputPassword",className:"col-sm-4 col-form-label",children:"MitarbeiterInnen"}),(0,i.jsx)("div",{className:"col-sm-6",children:(0,i.jsxs)("select",{onChange:C,value:o.employee,className:"form-control",name:"employee",defaultValue:"MitarbeiterInnen",children:[(0,i.jsx)("option",{value:"MitarbeiterInnen",children:"MitarbeiterInnen"}),(0,i.jsx)("option",{value:"SPV alt",children:"SPV alt"}),(0,i.jsx)("option",{value:"OPV alt",children:"OPV alt"}),(0,i.jsx)("option",{value:"Dauerspenderlnner",children:"Dauerspenderlnner"}),(0,i.jsx)("option",{value:"Hinterlegende",children:"Hinterlegende"}),(0,i.jsx)("option",{value:"Materialbestellung",children:"Materialbestellung"}),(0,i.jsx)("option",{value:"Newsletter Abonnent",children:"Newsletter Abonnent"}),(0,i.jsx)("option",{value:"offen",children:"offen"})]})})]}),(0,i.jsx)("div",{})]}),(0,i.jsxs)("div",{className:"col-sm-6",children:[(0,i.jsx)("br",{}),(0,i.jsxs)("div",{className:"mb-6 row",children:[(0,i.jsx)("label",{htmlFor:"inputPassword",className:"col-sm-4 col-form-label",children:"Zustimmung Datenschutz"}),(0,i.jsx)("div",{className:"col-sm-6 mt-2",children:(0,i.jsx)("input",{type:"checkbox",name:"dataProtection",onChange:C,value:o.dataProtection,id:"inputPassword"})})]}),(0,i.jsx)("br",{}),(0,i.jsxs)("div",{className:"mb-5 row",children:[(0,i.jsx)("label",{htmlFor:"inputDate",className:"col-sm-4 col-form-label",children:"Datum Datenerfassung"}),(0,i.jsx)("div",{className:"col-sm-6",children:(0,i.jsx)("input",{placeholder:"10.10.23",id:"inputDate",type:"date",className:"form-control",name:"dataCollection",onChange:C,value:o.dataCollection})})]})]})]}),(0,i.jsx)("hr",{}),(0,i.jsxs)("div",{className:"row p-3",children:[(0,i.jsx)("h3",{className:"bluetext",children:"Quelle"}),(0,i.jsx)("div",{className:"col-sm-4",children:(0,i.jsxs)("select",{className:"form-control",value:m,onChange:e=>{d(e.target.value)},children:[(0,i.jsx)("option",{value:"alte db",children:"Alte DB"}),(0,i.jsx)("option",{value:"formula",children:"Formular"}),(0,i.jsx)("option",{value:"call",children:"Call"}),(0,i.jsx)("option",{value:"email",children:"E-mail"}),(0,i.jsx)("option",{value:"order",children:"Auftag"})]})})]}),(0,i.jsx)("br",{}),(0,i.jsx)("h3",{className:"bluetext mx-3",children:"Kontaktdaten"}),(0,i.jsxs)("div",{className:"row p-3",children:[(0,i.jsxs)("div",{className:"col-sm-6",children:[(0,i.jsx)("br",{}),(0,i.jsxs)("div",{className:"mb-6 row",children:[(0,i.jsx)("label",{htmlFor:"inputPassword",className:"col-sm-4 col-form-label",children:"Titel"}),(0,i.jsx)("div",{className:"col-sm-6",children:(0,i.jsx)("input",{type:"text",value:h.title,name:"title",onChange:S,className:"form-control",placeholder:"Titel"})})]}),(0,i.jsx)("br",{}),(0,i.jsxs)("div",{className:"mb-6 row",children:[(0,i.jsx)("label",{htmlFor:"inputPassword",className:"col-sm-4 col-form-label",children:"Anrede"}),(0,i.jsx)("div",{className:"col-sm-6",children:(0,i.jsxs)("select",{className:"form-control",value:h.salution,name:"salution",onChange:S,children:[(0,i.jsx)("option",{children:"Anrede"}),(0,i.jsx)("option",{value:"herr",children:"Herr"}),(0,i.jsx)("option",{value:"fray",children:"Fray"}),(0,i.jsx)("option",{value:"divers",children:"Divers"})]})})]}),(0,i.jsx)("br",{}),(0,i.jsxs)("div",{className:"mb-6 row",children:[(0,i.jsx)("label",{htmlFor:"inputPassword",className:"col-sm-4 col-form-label",children:"Vornamen"}),(0,i.jsx)("div",{className:"col-sm-6",children:(0,i.jsx)("input",{type:"text",placeholder:"Vornamen",value:h.fname,name:"fname",onChange:S,className:"form-control",id:"inputPassword"})})]}),(0,i.jsx)("br",{})]}),(0,i.jsxs)("div",{className:"col-sm-6",children:[(0,i.jsx)("br",{}),(0,i.jsxs)("div",{className:"mb-6 row",children:[(0,i.jsx)("label",{htmlFor:"inputPassword",className:"col-sm-4 col-form-label",children:"Geburtsdatum"}),(0,i.jsx)("div",{className:"col-sm-6",children:(0,i.jsx)("input",{type:"date",value:h.dob,name:"dob",onChange:S,className:"form-control",placeholder:"10.10.23",id:"inputDate"})})]}),(0,i.jsx)("br",{}),(0,i.jsxs)("div",{className:"mb-6 row",children:[(0,i.jsx)("label",{htmlFor:"inputPassword",className:"col-sm-4 col-form-label",children:"Geschlecht"}),(0,i.jsx)("div",{className:"col-sm-6",children:(0,i.jsxs)("div",{className:"d-flex",children:[(0,i.jsx)("input",{type:"radio",id:"male",value:"M\xe4nnlich",name:"gender",onChange:S,checked:"M\xe4nnlich"===h.gender}),"\xa0M\xe4nnlich\xa0",(0,i.jsx)("input",{type:"radio",id:"female",value:"Weiblich",name:"gender",onChange:S,checked:"Weiblich"===h.gender}),"\xa0Weiblich\xa0",(0,i.jsx)("input",{type:"radio",id:"divers",value:"Divers",name:"gender",onChange:S,checked:"Divers"===h.gender}),"\xa0Divers"]})})]}),(0,i.jsx)("br",{}),(0,i.jsxs)("div",{className:"mb-5 row",children:[(0,i.jsx)("label",{htmlFor:"inputPassword",className:"col-sm-4 col-form-label",children:"Name"}),(0,i.jsx)("div",{className:"col-sm-6",children:(0,i.jsx)("input",{type:"text",className:"form-control",id:"inputPassword",placeholder:"Name",name:"lname",onChange:S,value:h.lname})})]})]})]}),(0,i.jsx)("h6",{className:"mx-3",children:"Rechnungsadresse"}),(0,i.jsxs)("div",{className:"row p-3",children:[(0,i.jsxs)("div",{className:"col-sm-6",children:[(0,i.jsxs)("div",{className:"mb-6 row",children:[(0,i.jsx)("label",{htmlFor:"inputPassword",className:"col-sm-4 col-form-label",children:"Stra\xdfe mit Hausnummer"}),(0,i.jsx)("div",{className:"col-sm-6",children:(0,i.jsx)("input",{type:"text",onChange:D,name:"billAddress",placeholder:"Stra\xdfe mit Hausnummer",value:x.billAddress,className:"form-control",id:"inputPassword"})})]}),(0,i.jsx)("br",{}),(0,i.jsxs)("div",{className:"mb-5 row",children:[(0,i.jsx)("label",{htmlFor:"inputPassword",className:"col-sm-4 col-form-label",children:"PLZ"}),(0,i.jsx)("div",{className:"col-sm-6",children:(0,i.jsx)("input",{type:"text",onChange:D,name:"billPlz",placeholder:"PLZ",value:x.billPlz,className:"form-control",id:"inputPassword"})})]})]}),(0,i.jsxs)("div",{className:"col-sm-6",children:[(0,i.jsxs)("div",{className:"mb-6 row",children:[(0,i.jsx)("label",{htmlFor:"inputText",className:"col-sm-4 col-form-label",children:"Ort"}),(0,i.jsx)("div",{className:"col-sm-6",children:(0,i.jsx)("input",{type:"text",onChange:D,name:"billOrt",placeholder:"Ort",value:x.billOrt,className:"form-control",id:"inputText"})})]}),(0,i.jsx)("br",{}),(0,i.jsxs)("div",{className:"mb-5 row",children:[(0,i.jsx)("label",{htmlFor:"inputPassword",className:"col-sm-4 col-form-label",children:"Land"}),(0,i.jsx)("div",{className:"col-sm-6",children:(0,i.jsx)("input",{type:"text",onChange:D,name:"billLand",placeholder:"Land",value:x.billLand,className:"form-control",id:"inputPassword"})})]})]})]}),(0,i.jsx)("h6",{className:"mx-3",children:"Lieferadresse c/o"}),(0,i.jsxs)("div",{className:"row p-3",children:[(0,i.jsxs)("div",{className:"col-sm-6",children:[(0,i.jsxs)("div",{className:"mb-6 row",children:[(0,i.jsx)("label",{htmlFor:"inputPassword",className:"col-sm-4 col-form-label",children:"Vornamen"}),(0,i.jsx)("div",{className:"col-sm-6",children:(0,i.jsx)("input",{type:"text",onChange:F,name:"fname",placeholder:"Vornamen",value:b.fname,className:"form-control",id:"inputPassword"})})]}),(0,i.jsx)("br",{}),(0,i.jsxs)("div",{className:"mb-5 row",children:[(0,i.jsx)("label",{htmlFor:"inputPassword",className:"col-sm-4 col-form-label",children:"Stra\xdfe mit Hausnummer"}),(0,i.jsx)("div",{className:"col-sm-6",children:(0,i.jsx)("input",{type:"text",onChange:F,name:"address",placeholder:"Stra\xdfe mit Hausnummer",value:b.address,className:"form-control",id:"inputPassword"})})]}),(0,i.jsxs)("div",{className:"mb-5 row",children:[(0,i.jsx)("label",{htmlFor:"inputPassword",className:"col-sm-4 col-form-label",children:"Ort"}),(0,i.jsx)("div",{className:"col-sm-6",children:(0,i.jsx)("input",{type:"text",onChange:F,name:"ort",placeholder:"Ort",value:b.ort,className:"form-control",id:"inputPassword"})})]}),(0,i.jsxs)("div",{className:"mb-5 row",children:[(0,i.jsx)("label",{htmlFor:"inputPassword",className:"col-sm-4 col-form-label",children:"E-Mail Adresse"}),(0,i.jsx)("div",{className:"col-sm-6",children:(0,i.jsx)("input",{type:"email",onChange:F,name:"email",placeholder:"E-Mail Adresse",value:b.email,className:"form-control",id:"inputPassword"})})]}),(0,i.jsxs)("div",{className:"mb-5 row",children:[(0,i.jsx)("label",{htmlFor:"inputPassword",className:"col-sm-4 col-form-label",children:"Mobil"}),(0,i.jsx)("div",{className:"col-sm-6",children:(0,i.jsx)("input",{onChange:F,name:"mobile",value:b.mobile,type:"tel",placeholder:"Mobil",className:"form-control",id:"inputTelephone",maxLength:10,minLength:3})})]})]}),(0,i.jsxs)("div",{className:"col-sm-6",children:[(0,i.jsxs)("div",{className:"mb-6 row",children:[(0,i.jsx)("label",{htmlFor:"inputPassword",className:"col-sm-4 col-form-label",children:"Name"}),(0,i.jsx)("div",{className:"col-sm-6",children:(0,i.jsx)("input",{type:"text",placeholder:"Name",onChange:F,name:"lname",value:b.lname,className:"form-control",id:"inputPassword"})})]}),(0,i.jsx)("br",{}),(0,i.jsxs)("div",{className:"mb-5 row",children:[(0,i.jsx)("label",{htmlFor:"inputPassword",className:"col-sm-4 col-form-label",children:"PLZ"}),(0,i.jsx)("div",{className:"col-sm-6",children:(0,i.jsx)("input",{type:"text",onChange:F,name:"plz",placeholder:"PLZ",value:b.plz,className:"form-control",id:"inputPassword"})})]}),(0,i.jsxs)("div",{className:"mb-6 row",children:[(0,i.jsx)("label",{htmlFor:"inputPassword",className:"col-sm-4 col-form-label",children:"Land"}),(0,i.jsx)("div",{className:"col-sm-6",children:(0,i.jsx)("input",{type:"text",onChange:F,name:"land",placeholder:"Land",value:b.land,className:"form-control",id:"inputPassword"})})]}),(0,i.jsx)("br",{}),(0,i.jsxs)("div",{className:"mb-5 row",children:[(0,i.jsx)("label",{htmlFor:"inputPassword",className:"col-sm-4 col-form-label",children:"Telefon"}),(0,i.jsx)("div",{className:"col-sm-6",children:(0,i.jsx)("input",{onChange:F,name:"phone",value:b.phone,className:"form-control",type:"tel",placeholder:"Telefon",id:"inputTelephone",maxLength:10,minLength:3})})]}),(0,i.jsxs)("div",{className:"mb-5 row",children:[(0,i.jsx)("label",{htmlFor:"inputPassword",className:"col-sm-4 col-form-label",children:"Bereits bezahlt"}),(0,i.jsxs)("div",{className:"col-sm-6",children:[(0,i.jsx)("input",{onChange:F,name:"alreadyPaid",value:b.alreadyPaid,type:"checkbox"}),"\xa0 ja"]})]})]})]}),(0,i.jsx)("hr",{}),(0,i.jsx)("h3",{className:"bluetext mx-3",children:"Hinterlegung"}),(0,i.jsxs)("div",{className:"row p-3",children:[(0,i.jsxs)("div",{className:"col-sm-4",children:["Hinterlegung \xa0\xa0",(0,i.jsx)("input",{type:"checkbox",onChange:A,checked:j.deposit,name:"deposit"})]}),(0,i.jsx)("div",{className:"col-sm-4"}),(0,i.jsx)("div",{className:"col-sm-4"})]}),(0,i.jsx)("br",{}),(0,i.jsxs)("div",{className:"row p-3",children:[(0,i.jsxs)("div",{className:"col-sm-6",children:[(0,i.jsxs)("div",{className:"mb-6 row",children:[(0,i.jsx)("label",{htmlFor:"inputPassword",className:"col-sm-4 col-form-label",children:"Hinterlegungsbeginn"}),(0,i.jsx)("div",{className:"col-sm-6",children:(0,i.jsx)("input",{type:"date",onChange:A,value:j.startDeposit,name:"startDeposit",className:"form-control",placeholder:"10.10.23",id:"inputDate"})})]}),(0,i.jsx)("br",{}),(0,i.jsxs)("div",{className:"mb-6 row",children:[(0,i.jsx)("label",{htmlFor:"inputPassword",className:"col-sm-4 col-form-label",children:"Versand der n\xe4chsten Marke"}),(0,i.jsx)("div",{className:"col-sm-6",children:(0,i.jsx)("input",{type:"date",onChange:A,value:j.nextBrand,name:"nextBrand",className:"form-control",placeholder:"10.10.23",id:"inputDate"})})]})]}),(0,i.jsxs)("div",{className:"col-sm-6",children:[(0,i.jsxs)("div",{className:"mb-5 row",children:[(0,i.jsx)("label",{htmlFor:"inputPassword",className:"col-sm-4 col-form-label",children:"Aktualisierungsmarke Versand der letzten Marke - Monat + Jahr"}),(0,i.jsx)("div",{className:"col-sm-6",children:(0,i.jsx)("input",{type:"date",onChange:A,value:j.updateStamp,name:"updateStamp",className:"form-control",placeholder:"10.10.23",id:"inputDate"})})]}),(0,i.jsxs)("div",{className:"mb-5 row ",children:[(0,i.jsx)("label",{className:"col-sm-4 col-form-label",children:"R\xfccksendung letzte Marke"}),(0,i.jsx)("div",{className:"col-sm-6",children:(0,i.jsx)("input",{type:"date",onChange:A,value:j.lastStamp,name:"lastStamp",className:"form-control",placeholder:"10.10.23",id:"inputDate"})})]})]})]}),(0,i.jsxs)("div",{className:"row p-3",children:[(0,i.jsx)("div",{className:"col-sm-6",children:(0,i.jsx)("div",{className:"mb-6 row",children:(0,i.jsxs)("div",{className:"col-sm-6",children:[(0,i.jsx)("input",{type:"checkbox",onChange:A,checked:j.emergencyPass,name:"emergencyPass"})," ","\xa0 \xa0 Notfallpass"]})})}),(0,i.jsx)("div",{className:"col-sm-6",children:(0,i.jsxs)("div",{className:"mb-6 row",children:[(0,i.jsx)("label",{htmlFor:"inputPassword",className:"col-sm-4 col-form-label",children:"Erinnerung Marke"}),(0,i.jsx)("div",{className:"col-sm-6",children:(0,i.jsx)("input",{type:"date",onChange:A,value:j.reminderStamp,name:"reminderStamp",className:"form-control",placeholder:"10.10.23",id:"inputDate"})})]})})]}),(0,i.jsx)("hr",{}),(0,i.jsx)("h3",{className:"bluetext mx-3",children:"Beedigung"}),(0,i.jsxs)("div",{className:"row p-3",children:[(0,i.jsxs)("div",{className:"col-sm-3",children:[(0,i.jsx)("input",{type:"checkbox",onChange:L,checked:g.termination,name:"termination"}),"\xa0 \xa0 Beendigung auf eigenen Wunsch"]}),(0,i.jsxs)("div",{className:"col-sm-3",children:[(0,i.jsx)("input",{type:"checkbox",onChange:L,checked:g.terminationDeath,name:"terminationDeath"}),"\xa0 \xa0 Beendigung durch Tod"]}),(0,i.jsxs)("div",{className:"col-sm-3",children:[(0,i.jsx)("input",{type:"checkbox",onChange:L,checked:g.notTermination,name:"notTermination"}),"\xa0 \xa0 Beendigung weil nicht ermittelbar"]}),(0,i.jsxs)("div",{className:"col-sm-3",children:[(0,i.jsx)("input",{type:"checkbox",onChange:L,checked:g.financialReasons,name:"financialReasons"}),"\xa0 \xa0 Beendigung aus finanziellen Gr\xfcnden"]})]}),(0,i.jsx)("br",{}),(0,i.jsxs)("div",{className:"row",children:[(0,i.jsx)("div",{className:"col-sm-9"}),(0,i.jsxs)("div",{className:"col-sm-3",children:[(0,i.jsx)("button",{type:"button",className:"btn btn",style:{background:"#d04545",color:"white"},children:"Abbrechen"}),"\xa0 \xa0",(0,i.jsx)("button",{type:"button",style:{background:"#0b5995",color:"white"},className:"btn btn",onClick:async a=>{a.preventDefault();try{let a=await fetch("".concat("http://95.217.77.208:4142","/customerInfo/create_info"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(y)}),l=await a.json();console.log(l),"CustomerInfo was created"===(null===l||void 0===l?void 0:l.message)&&(e("Data saved successfully!"),s({orderNumber:"",newsletterDate:"",extras:""}),r({clientStatus:"",employee:"",dataCollection:""}),d(""),u({title:"",salution:"",gender:"",fname:"",dob:"",name:""}),v({billAddress:"",billPlz:"",billLand:"",billOrt:""}),p({fname:"",lname:"",address:"",plz:"",land:"",ort:"",email:"",phone:"",mobile:""}),N({deposit:"",startDeposit:"",nextBrand:"",updateStamp:"",lastStamp:"",emergencyPass:"",reminderStamp:""}),f(""))}catch(l){console.log("Error saving data:",l),e("Error saving data. Please try again.")}},children:"Speichern Sie"})]})]}),(0,i.jsx)(t.Ix,{})]})},r=l.memo(o)}}]);
//# sourceMappingURL=267.f647fee0.chunk.js.map