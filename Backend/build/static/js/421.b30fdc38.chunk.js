"use strict";(self.webpackChunk_coreui_coreui_free_react_admin_template=self.webpackChunk_coreui_coreui_free_react_admin_template||[]).push([[421,940],{26940:(e,l,a)=>{a.r(l),a.d(l,{default:()=>o});var s=a(65043),n=a(70579);function o(e){let{onChange:l,value:a,placeholder:o}=e;const[i,t]=(0,s.useState)("");(0,s.useEffect)((()=>{if(a instanceof Date&&!isNaN(a.getTime()))t(c(a));else if("string"===typeof a){const e=new Date(a);t(c(e))}else t("")}),[a]);const c=e=>{var l,a,s,n,o;const i=null===e||void 0===e||null===(l=e.getDate())||void 0===l||null===(a=l.toString())||void 0===a?void 0:a.padStart(2,"0"),t=null===(s=(null===e||void 0===e?void 0:e.getMonth())+1)||void 0===s||null===(n=s.toString())||void 0===n?void 0:n.padStart(2,"0"),c=null===e||void 0===e||null===(o=e.getFullYear())||void 0===o?void 0:o.toString();return"".concat(i,".").concat(t,".").concat(c)};return(0,n.jsx)("div",{children:(0,n.jsx)("input",{type:"text",onChange:e=>{var l,a;let s=null===(l=e.target)||void 0===l?void 0:l.value,n="";s=null===(a=s)||void 0===a?void 0:a.replace(/\D/g,"");for(let i=0;i<(null===(o=s)||void 0===o?void 0:o.length);i++){var o;2!==i&&4!==i||(n+="."),n+=s[i]}t(n)},onBlur:e=>{var a;const s=null===i||void 0===i||null===(a=i.split("."))||void 0===a?void 0:a.map((e=>parseInt(e,10)));let[n,o,t]=s;if(3===(null===s||void 0===s?void 0:s.length)){t<100?t+=1900:t>=2e3&&t<=(new Date).getFullYear()||(t=(new Date).getFullYear());const e=new Date(t,o-1,n);l(e)}else if(1===(null===s||void 0===s?void 0:s.length)){const e=s[0];if(e<100){let a;a=e<50?e+2e3:e+1900;const s=new Date(a,0,1);l(s)}}},value:i,placeholder:o,className:"form-control"})})}},67421:(e,l,a)=>{a.r(l),a.d(l,{default:()=>v});var s=a(65043),n=a(47503),o=(a(92342),a(8124)),i=a(73216),t=a(26940),c=a(95870),d=(a(9910),a(72798),a(77154)),r=a(70579);const m=()=>{var e,l,a,m,v,u,h,x,j,p,g;const N=(0,i.Zp)(),b=((0,i.zy)(),"http://95.217.77.208:4142"),[f,w]=(0,s.useState)(1),[D,y]=(0,s.useState)(!1),[k,S]=(0,s.useState)(""),[C,M]=(0,s.useState)({});let P=localStorage.getItem("customerRecord"),A=JSON.parse(P);const[L,z]=(0,s.useState)({orderNumber:"",newsletterDate:"",extras:"",newsletterSubscription:""});console.log("orderDate",null===C||void 0===C||null===(e=C.orderingMaterials)||void 0===e?void 0:e.newsletterDate);const[R,I]=(0,s.useState)({dataProtection:"",employee:"",remarks:"",war:"",research:""}),[B,_]=(0,s.useState)(null===A||void 0===A?void 0:A.status),[O,T]=(0,s.useState)(""),[F,E]=(0,s.useState)(""),[V,Z]=(0,s.useState)(""),H=null===C||void 0===C||null===(l=C.customer)||void 0===l?void 0:l.startDate,$=new Date(H).toLocaleDateString("en-IN",{year:"numeric",month:"2-digit",day:"2-digit"}).replace(/\//g,".");console.log("date",$);const[Y,W]=(0,s.useState)({title:"",salution:"",gender:"",fname:"",lname:"",startDate:$,email:""}),[G,J]=(0,s.useState)({billAddress:"",billPlz:"",billLand:"",billOrt:""}),[K,q]=(0,s.useState)(""),[U,Q]=(0,s.useState)({fname:"",lname:"",address:"",plz:"",land:"",ort:"",phone:"",mobile:"",email:"",alreadyPaid:""}),[X,ee]=(0,s.useState)(""),[le,ae]=(0,s.useState)(""),[se,ne]=(0,s.useState)(""),[oe,ie]=(0,s.useState)(""),[te,ce]=(0,s.useState)("");console.log("");const[de,re]=(0,s.useState)(""),[me,ve]=(0,s.useState)({termination:"",terminationDeath:"",notTermination:"",financialReasons:""}),[ue,he]=(0,s.useState)({}),[xe,je]=(0,s.useState)([]);let pe={fname:(null===Y||void 0===Y?void 0:Y.fname)||(null===C||void 0===C||null===(a=C.customer)||void 0===a?void 0:a.fname),lname:(null===Y||void 0===Y?void 0:Y.lname)||(null===C||void 0===C||null===(m=C.customer)||void 0===m?void 0:m.lname),email:F||(null===C||void 0===C||null===(v=C.customer)||void 0===v?void 0:v.email),phone:(null===U||void 0===U?void 0:U.phone)||(null===C||void 0===C||null===(u=C.customer)||void 0===u?void 0:u.phone),plz:null===U||void 0===U?void 0:U.plz,startDate:(null===Y||void 0===Y?void 0:Y.startDate)||(null===C||void 0===C||null===(h=C.customer)||void 0===h?void 0:h.startDate),status:B||(null===C||void 0===C||null===(x=C.customer)||void 0===x?void 0:x.status),salution:O||(null===C||void 0===C||null===(j=C.customer)||void 0===j?void 0:j.salution),land:(null===U||void 0===U?void 0:U.land)||(null===C||void 0===C||null===(p=C.customer)||void 0===p?void 0:p.land),id:null===C||void 0===C?void 0:C.id,street:null===U||void 0===U?void 0:U.address,city:null===C||void 0===C||null===(g=C.customer)||void 0===g?void 0:g.city,those:null===C||void 0===C?void 0:C.those,created_by:null===C||void 0===C?void 0:C.created_by};const ge=e=>{if(e instanceof Date){var l,a;let n=null===e||void 0===e?void 0:e.getFullYear().toString();const o=parseInt(null===(l=n)||void 0===l?void 0:l.substring(0,4),10);var s;if((null===(a=n)||void 0===a?void 0:a.length)>4)n=null===(s=n)||void 0===s?void 0:s.substring(0,4);const i=new Date("".concat(o,".").concat((null===e||void 0===e?void 0:e.getMonth())+1,".").concat(e.getDate()));z({...L,newsletterDate:i})}else if(null!==e&&void 0!==e&&e.target){const{name:l,value:a}=null===e||void 0===e?void 0:e.target;z("newsletterDate"===l?{...L,newsletterDate:a}:{...L,[l]:a})}},Ne=e=>{const{name:l,value:a}=e.target;let s=a.trim();/\d$/.test(a)&&(s=a.replace(/(\D)(\d)/,"$1 $2")),Q({...U,[l]:s})},be=e=>{if(e instanceof Date){var l,a;let n=null===e||void 0===e?void 0:e.getFullYear().toString();const o=parseInt(null===(l=n)||void 0===l?void 0:l.substring(0,4),10);var s;if((null===(a=n)||void 0===a?void 0:a.length)>4)n=null===(s=n)||void 0===s?void 0:s.substring(0,4);const i=new Date("".concat(o,".").concat((null===e||void 0===e?void 0:e.getMonth())+1,".").concat(e.getDate()));I({...R,dataCollection:i})}else if(e.target){const{name:l,value:a,checked:s,type:n}=e.target;I("dataCollection"===l?{...R,[l]:a}:{...R,[l]:"checkbox"===n?s:a})}else void 0!==e.value&&I({...R,employee:e.value})},fe=e=>{if(e.target){const{name:l,value:a,type:s,checked:n}=e.target;if("radio"===s){const e=n?a:"";W({...Y,[l]:e})}else W({...Y,[l]:"checkbox"===s?n:a})}else void 0!==e.value?W({...Y,salution:e.value}):console.error("Invalid event or data provided to ContactChange.")},we=e=>{const{name:l,value:a}=e.target;J({...G,[l]:a})},De=e=>{var l,a;let s=null===e||void 0===e?void 0:e.getFullYear().toString();const n=parseInt(null===(l=s)||void 0===l?void 0:l.substring(0,4),10);var o;(null===(a=s)||void 0===a?void 0:a.length)>4&&(s=null===(o=s)||void 0===o?void 0:o.substring(0,4));return new Date("".concat(n,".").concat((null===e||void 0===e?void 0:e.getMonth())+1,".").concat(e.getDate()))},ye={startDeposit:X,nextBrand:le,updateStamp:se,lastStamp:oe,reminderStamp:te,emergencyPass:de},ke=e=>{const{name:l,value:a,type:s,checked:n}=e.target;Q({...U,[l]:"checkbox"===s?n:a})},Se=e=>{const{name:l,checked:a}=e.target,s={...me};!0===s[l]&&a?s[l]=!1:Object.keys(s).forEach((e=>{s[e]=e===l&&a})),ve(s)},Ce=async()=>{try{const e=await fetch("".concat(b,"/customer/get_record/").concat(null===A||void 0===A?void 0:A._id)),l=await e.json();he(l)}catch(e){console.error("Error fetching customer record:",e)}},Me=async()=>{try{const e=await d.A.get("".concat(b,"/customer/get_record/").concat(null===A||void 0===A?void 0:A._id));M(null===e||void 0===e?void 0:e.data)}catch(e){console.log(e)}};let Pe={...R,clientStatus:B,dataCollection:K};const Ae={customer:pe,orderingMaterials:L,customerInfoStatu:Pe,those:V,customerContact:Y,customerBills:G,customerDelivery:U,customerDeposit:ye,customerBurial:me};(0,s.useEffect)((()=>{Me(),Ce(),(async()=>{try{const e=await fetch("".concat(b,"/user/get/employeeData")),l=await e.json();je(null===l||void 0===l?void 0:l.data)}catch(e){console.error("Error fetching customer record:",e)}})()}),[f,k]);(0,s.useEffect)((()=>{var e,l,a,s,n,o,i,t,c,d,r,m,v,u,h,x,j,p,g,N,b,f,w,D,y,k,S,M,P,L,R,B,O,F,V,H,$,Y,G,K,U,X,le,se,oe,te,de,me,ue,he,xe;Q({fname:(null===C||void 0===C||null===(e=C.customerDelivery)||void 0===e?void 0:e.fname)||(null===C||void 0===C||null===(l=C.customer)||void 0===l?void 0:l.fname),lname:(null===C||void 0===C||null===(a=C.customerDelivery)||void 0===a?void 0:a.lname)||(null===C||void 0===C||null===(s=C.customer)||void 0===s?void 0:s.lname),address:(null===C||void 0===C||null===(n=C.customerDelivery)||void 0===n?void 0:n.address)||(null===C||void 0===C||null===(o=C.customer)||void 0===o?void 0:o.street),plz:(null===C||void 0===C?void 0:C.plz)||(null===C||void 0===C||null===(i=C.customer)||void 0===i?void 0:i.plz),land:(null===C||void 0===C?void 0:C.land)||(null===C||void 0===C||null===(t=C.customer)||void 0===t?void 0:t.land),ort:(null===C||void 0===C||null===(c=C.customerDelivery)||void 0===c?void 0:c.ort)||(null===C||void 0===C||null===(d=C.customer)||void 0===d?void 0:d.city),phone:(null===C||void 0===C?void 0:C.phone)||(null===C||void 0===C||null===(r=C.customer)||void 0===r?void 0:r.phone),mobile:null===C||void 0===C||null===(m=C.customerDelivery)||void 0===m?void 0:m.mobile,alreadyPaid:null===C||void 0===C||null===(v=C.customerDelivery)||void 0===v?void 0:v.alreadyPaid}),z({orderNumber:null===C||void 0===C||null===(u=C.orderingMaterials)||void 0===u?void 0:u.orderNumber,newsletterDate:null===C||void 0===C||null===(h=C.orderingMaterials)||void 0===h?void 0:h.newsletterDate,extras:null===C||void 0===C||null===(x=C.orderingMaterials)||void 0===x?void 0:x.extras,newsletterSubscription:null===C||void 0===C||null===(j=C.orderingMaterials)||void 0===j?void 0:j.newsletterSubscription}),I({dataProtection:null===C||void 0===C||null===(p=C.customerInfoStatu)||void 0===p?void 0:p.dataProtection,employee:null===C||void 0===C||null===(g=C.customerInfoStatu)||void 0===g?void 0:g.employee,remarks:null===C||void 0===C||null===(N=C.customerInfoStatu)||void 0===N?void 0:N.remarks}),q(null===C||void 0===C||null===(b=C.customerInfoStatu)||void 0===b?void 0:b.dataCollection),Z(null===C||void 0===C?void 0:C.those),W({title:null===C||void 0===C||null===(f=C.customerContact)||void 0===f?void 0:f.title,salution:null===C||void 0===C||null===(w=C.customerContact)||void 0===w?void 0:w.salution,gender:null===C||void 0===C||null===(D=C.customerContact)||void 0===D?void 0:D.gender,fname:(null===C||void 0===C||null===(y=C.customerContact)||void 0===y?void 0:y.fname)||(null===A||void 0===A?void 0:A.fname),lname:(null===C||void 0===C||null===(k=C.customerContact)||void 0===k?void 0:k.lname)||(null===A||void 0===A?void 0:A.lname),email:(null===C||void 0===C||null===(S=C.customerContact)||void 0===S?void 0:S.email)||(null===C||void 0===C||null===(M=C.customer)||void 0===M?void 0:M.email),startDate:null===C||void 0===C||null===(P=C.customer)||void 0===P?void 0:P.startDate}),console.log("customerInfo?.customer?.startDate",null===C||void 0===C||null===(L=C.customer)||void 0===L?void 0:L.startDate),J({billAddress:(null===C||void 0===C||null===(R=C.customerBills)||void 0===R?void 0:R.billAddress)||(null===C||void 0===C||null===(B=C.customer)||void 0===B?void 0:B.street),billPlz:(null===C||void 0===C||null===(O=C.customerBills)||void 0===O?void 0:O.billPlz)||(null===C||void 0===C||null===(F=C.customer)||void 0===F?void 0:F.plz),billLand:(null===C||void 0===C||null===(V=C.customerBills)||void 0===V?void 0:V.billLand)||(null===C||void 0===C||null===(H=C.customer)||void 0===H?void 0:H.land),billOrt:(null===C||void 0===C||null===($=C.customerBills)||void 0===$?void 0:$.billOrt)||(null===C||void 0===C||null===(Y=C.customer)||void 0===Y?void 0:Y.city)}),re(null===C||void 0===C||null===(G=C.customerDeposit)||void 0===G?void 0:G.emergencyPass),ee(null===C||void 0===C||null===(K=C.customerDeposit)||void 0===K?void 0:K.startDeposit),ae(null===C||void 0===C||null===(U=C.customerDeposit)||void 0===U?void 0:U.nextBrand),ne(null===C||void 0===C||null===(X=C.customerDeposit)||void 0===X?void 0:X.updateStamp),ce(null===C||void 0===C||null===(le=C.customerDeposit)||void 0===le?void 0:le.reminderStamp),ie(null===C||void 0===C||null===(se=C.customerDeposit)||void 0===se?void 0:se.lastStamp),ve({termination:null===C||void 0===C||null===(oe=C.customerBurial)||void 0===oe?void 0:oe.termination,terminationDeath:null===C||void 0===C||null===(te=C.customerBurial)||void 0===te?void 0:te.terminationDeath,notTermination:null===C||void 0===C||null===(de=C.customerBurial)||void 0===de?void 0:de.notTermination,financialReasons:null===C||void 0===C||null===(me=C.customerBurial)||void 0===me?void 0:me.financialReasons}),Z(null===C||void 0===C?void 0:C.those),_(null===C||void 0===C||null===(ue=C.customer)||void 0===ue?void 0:ue.status),T(null===C||void 0===C||null===(he=C.customer)||void 0===he?void 0:he.salution),E(null===C||void 0===C||null===(xe=C.customer)||void 0===xe?void 0:xe.email)}),[C]);return(0,r.jsxs)("div",{className:"inner-page-wrap",children:[(0,r.jsx)(o.default,{getCustomerData:ue,updateData:D}),(0,r.jsxs)("div",{className:"tab-content px-3",children:[(0,r.jsx)("div",{className:"tab-title",children:(0,r.jsx)("h4",{children:"KlientInnen"})}),(0,r.jsx)("div",{children:(0,r.jsx)("div",{className:"row",children:(0,r.jsxs)("div",{className:"col",children:[(0,r.jsxs)("div",{className:"block-wrap",children:[(0,r.jsx)("h3",{children:"Materialbestellung"}),(0,r.jsx)("div",{className:"row-wrap",children:(0,r.jsxs)("div",{className:"row",style:{marginLeft:"5px"},children:[(0,r.jsx)("div",{className:"col-sm-3",children:(0,r.jsxs)("div",{className:"row",children:[(0,r.jsx)("label",{htmlFor:"inputPassword",className:"col-sm-5 col-form-label",children:"Anzahl Frageb\xf6gen"}),(0,r.jsx)("div",{className:"col-sm-7",children:(0,r.jsx)("input",{type:"number",value:L.orderNumber,name:"orderNumber",onChange:ge,className:"form-control"})})]})}),(0,r.jsx)("div",{className:"col-sm-2",children:(0,r.jsxs)("div",{className:"row",children:[(0,r.jsx)("label",{htmlFor:"inputPassword",className:"col-sm-3 col-form-label",children:"Extras"}),(0,r.jsx)("div",{className:"col-sm-9",children:(0,r.jsx)("input",{type:"text",name:"extras",value:L.extras,onChange:ge,className:"form-control w-100",placeholder:"Extras"})})]})}),(0,r.jsx)("div",{className:"col-sm-3",children:(0,r.jsxs)("div",{className:"row",children:[(0,r.jsx)("label",{htmlFor:"inputPassword",className:"col-sm-5 col-form-label",children:"Newsletter-Datum"}),(0,r.jsx)("div",{className:"col-sm-7",children:(0,r.jsx)(t.default,{name:"newsletterDate",value:null===L||void 0===L?void 0:L.newsletterDate,onChange:ge,placeholder:"Newsletter-Datum"})})]})}),(0,r.jsx)("div",{className:"col-sm-4",children:(0,r.jsxs)("div",{className:"row",children:[(0,r.jsx)("label",{className:"col-form-label col-sm-5",children:"Newsletter-Abonnement"}),(0,r.jsxs)("div",{className:"col-sm-7",children:[(0,r.jsxs)("div",{className:"radio-check-wrap",children:[(0,r.jsx)("input",{type:"radio",name:"newsletterSubscription",value:"active",checked:"active"===L.newsletterSubscription,onChange:ge}),(0,r.jsx)("span",{children:"Aktiv"})]}),(0,r.jsxs)("div",{className:"radio-check-wrap",children:[(0,r.jsx)("input",{type:"radio",name:"newsletterSubscription",value:"inactive",checked:"inactive"===L.newsletterSubscription,onChange:ge}),(0,r.jsx)("span",{children:"Inaktiv"})]})]})]})})]})}),(0,r.jsx)("h3",{children:"Status"}),(0,r.jsx)("div",{className:"border-bottom mb-3",children:(0,r.jsxs)("div",{children:[(0,r.jsxs)("div",{className:"row",children:[(0,r.jsx)("div",{className:"col-sm-6",children:(0,r.jsxs)("div",{className:"row mb-3",children:[(0,r.jsx)("label",{className:"col-sm-3 col-form-label",children:"Status"}),(0,r.jsx)("div",{className:"col-sm-6",children:(0,r.jsx)("div",{className:"card flex justify-content-center p-3",children:[{name:"HLG",code:"0"},{name:"HVD-PV",code:"1"},{name:"OPV-alt",code:"2"},{name:"SPV-alt",code:"3"},{name:"SpenderIn",code:"4"},{name:"Newsletter",code:"5"},{name:"Material",code:"6"},{name:"Offen",code:"7"},{name:"WaR",code:"8"},{name:"Recherche",code:"9"}].map((e=>(0,r.jsx)("div",{className:"checkbox-container",children:(0,r.jsxs)("div",{className:"radio-check-wrapp",children:[(0,r.jsx)("input",{type:"checkbox",checked:B&&B.some((l=>l.code===e.code)),onChange:l=>((e,l)=>{e.target.checked?_([...B,l]):_(B.filter((e=>e.code!==l.code)))})(l,e)}),(0,r.jsx)("label",{className:"city-label",children:e.name})]})},e.code)))})})]})}),(0,r.jsx)("div",{className:"col-sm-6 mb-3",children:(0,r.jsxs)("div",{className:"row",children:[(0,r.jsx)("label",{className:"col-sm-4 col-form-label",children:"Bemerkungen"}),(0,r.jsx)("div",{className:"col-sm-6",children:(0,r.jsx)("textarea",{value:R.remarks,name:"remarks",onChange:be,className:"form-control",rows:14})})]})})]}),(0,r.jsxs)("div",{className:"row",children:[(0,r.jsx)("div",{className:"col-sm-6",children:(0,r.jsxs)("div",{className:"row mb-3",children:[(0,r.jsx)("label",{className:"col-sm-3 col-form-label",children:"MitarbeiterInnen"}),(0,r.jsx)("div",{className:"col-sm-6",children:(0,r.jsx)(c.Ay,{className:"w-100",placeholder:"MitarbeiterInnen",options:null===xe||void 0===xe?void 0:xe.map((e=>({value:e.username,label:e.username}))),onChange:be,value:{value:R.employee||"MitarbeiterInnen",label:R.employee||"MitarbeiterInnen"},name:"employee"})})]})}),(0,r.jsx)("div",{className:"col-sm-6",children:(0,r.jsxs)("div",{className:"row mb-3",children:[(0,r.jsx)("label",{htmlFor:"inputDate",className:"col-sm-4 col-form-label",children:"Datenerfassung"}),(0,r.jsx)("div",{className:"col-sm-6",children:(0,r.jsx)(t.default,{value:K,onChange:e=>{q(e)},placeholder:"Datenerfassung"})})]})})]})]})}),(0,r.jsx)("h3",{children:"Quelle"}),(0,r.jsx)("div",{className:"border-0",children:(0,r.jsx)("div",{children:(0,r.jsxs)("div",{className:"row",children:[(0,r.jsx)("div",{className:"col-sm-6",children:(0,r.jsxs)("div",{className:"row",children:[(0,r.jsx)("label",{className:"col-sm-3 col-form-label",children:"Auswahl"}),(0,r.jsx)("div",{className:"col-sm-6",children:(0,r.jsx)("div",{className:"input-group",children:(0,r.jsx)(c.Ay,{className:"w-100",options:[{value:"order",label:"Auftrag (Online-Maske) "},{value:"contact form",label:"Kontaktformular"},{value:"order print",label:"Auftrag / Print"},{value:"website",label:"Webseite"},{value:"e-mail",label:"E-Mail"},{value:"call",label:"Anruf"},{value:"letter",label:"Zuschrift (Post)"},{value:"HVD regional association",label:"HVD-Landesverband"},{value:"Regional association MOL",label:"Regionalverband MOL"},{value:"Northern Regional Association",label:"Regionalverband NORD"},{value:"Regional association",label:"Regionalverband Potsdam"},{value:"inter",label:"intern"},{value:"anderes",label:"anderes"}],onChange:e=>{Z(e)},value:V,name:"those",placeholder:"Auswahl"})})})]})}),(0,r.jsx)("div",{className:"col-sm-6",children:(0,r.jsxs)("div",{className:"row mb-3",children:[(0,r.jsx)("label",{className:"col-sm-6 col-form-label",children:"Zustimmung Datenschutz"}),(0,r.jsx)("div",{className:"col-sm-4 mt-2",children:(0,r.jsxs)("div",{className:"radio-check-wrap w-100 h-100",children:[(0,r.jsx)("input",{type:"checkbox",name:"dataProtection",onChange:be,checked:R.dataProtection}),(0,r.jsx)("span",{})]})})]})})]})})})]}),(0,r.jsxs)("div",{className:"block-wrap",children:[(0,r.jsx)("h3",{children:"Kontaktdaten"}),(0,r.jsxs)("div",{children:[(0,r.jsxs)("div",{className:"row",children:[(0,r.jsx)("div",{className:"col-sm-6",children:(0,r.jsxs)("div",{className:"row",children:[(0,r.jsx)("label",{className:"col-sm-4 col-form-label",children:"Titel"}),(0,r.jsx)("div",{className:"col-sm-6",children:(0,r.jsx)("input",{type:"text",value:Y.title,name:"title",onChange:fe,className:"form-control",placeholder:"Titel"})})]})}),(0,r.jsx)("div",{className:"col-sm-6",children:(0,r.jsxs)("div",{className:"row",children:[(0,r.jsx)("label",{className:"col-sm-4 col-form-label",children:"Geburtsdatum"}),(0,r.jsx)("div",{className:"col-sm-6",children:(0,r.jsx)(t.default,{value:null===Y||void 0===Y?void 0:Y.startDate,onChange:e=>{W({...Y,startDate:e})},name:"startDate",placeholder:"Geburtsdatum"})})]})})]}),(0,r.jsxs)("div",{className:"row mb-3",children:[(0,r.jsx)("div",{className:"col-sm-6",children:(0,r.jsxs)("div",{className:"row",children:[(0,r.jsx)("label",{className:"col-sm-4 col-form-label",children:"Anrede"}),(0,r.jsx)("div",{className:"col-sm-6",children:(0,r.jsx)(c.Ay,{className:"w-100",value:O,name:"salution",placeholder:"Anrede",options:[{value:"herr",label:"Herr"},{value:"frau",label:"Frau"},{value:"divers",label:"Divers"}],onChange:e=>{T(e)}})})]})}),(0,r.jsx)("div",{className:"col-sm-6",children:(0,r.jsxs)("div",{className:"row",children:[(0,r.jsx)("label",{className:"col-sm-4 col-form-label",children:"Geschlecht"}),(0,r.jsx)("div",{className:"col-sm-6 mt-2",children:(0,r.jsxs)("div",{className:"radio-wrap",children:[(0,r.jsxs)("div",{className:"radio-input",children:[(0,r.jsx)("input",{type:"radio",id:"male",value:"male",name:"gender",onChange:fe,checked:"male"===Y.gender}),(0,r.jsx)("span",{children:"M\xe4nnlich"})]}),(0,r.jsxs)("div",{className:"radio-input",children:[(0,r.jsx)("input",{type:"radio",id:"female",value:"female",name:"gender",onChange:fe,checked:"female"===Y.gender}),(0,r.jsx)("span",{children:"Weiblich"})]}),(0,r.jsxs)("div",{className:"radio-input",children:[(0,r.jsx)("input",{type:"radio",id:"divers",value:"other",name:"gender",onChange:fe,checked:"other"===Y.gender}),(0,r.jsx)("span",{children:"Divers"})]})]})})]})})]}),(0,r.jsxs)("div",{className:"row",children:[(0,r.jsx)("div",{className:"col-sm-6",children:(0,r.jsxs)("div",{className:"row",children:[(0,r.jsx)("label",{className:"col-sm-4 col-form-label",children:"Vornamen"}),(0,r.jsx)("div",{className:"col-sm-6",children:(0,r.jsx)("input",{type:"text",placeholder:"Vornamen",value:Y.fname,name:"fname",onChange:fe,className:"form-control"})})]})}),(0,r.jsx)("div",{className:"col-sm-6",children:(0,r.jsxs)("div",{className:"row",children:[(0,r.jsx)("label",{className:"col-sm-4 col-form-label",children:"Name"}),(0,r.jsx)("div",{className:"col-sm-6",children:(0,r.jsx)("input",{type:"text",className:"form-control",placeholder:"Name",name:"lname",onChange:fe,value:Y.lname})})]})})]}),(0,r.jsxs)("div",{className:"row",children:[(0,r.jsx)("div",{className:"col-sm-6",children:(0,r.jsxs)("div",{className:"row",children:[(0,r.jsx)("label",{className:"col-sm-4 col-form-label",children:"E-Mail-Adresse"}),(0,r.jsx)("div",{className:"col-sm-6",children:(0,r.jsx)("input",{type:"text",name:"email",placeholder:"E-Mail-Adresse",onChange:e=>{var l;E(null===e||void 0===e||null===(l=e.target)||void 0===l?void 0:l.value)},value:F,className:"form-control",id:"inputEmail"})})]})}),(0,r.jsx)("div",{className:"col-sm-6",children:(0,r.jsxs)("div",{className:"row",children:[(0,r.jsx)("label",{className:"col-sm-4 col-form-label",children:"Telefon"}),(0,r.jsx)("div",{className:"col-sm-6",children:(0,r.jsx)("input",{placeholder:"Telefon",className:"form-control",name:"phone",value:null===U||void 0===U?void 0:U.phone,onChange:e=>{const l=e.target.value.replace(/[^\d+ ]/g,"");/^\+?(?:[0-9] ?){0,}$/.test(l)&&Q({...U,phone:l})},maxLength:20,minLength:3})})]})})]}),(0,r.jsxs)("div",{className:"row",children:[(0,r.jsx)("div",{className:"col-sm-6",children:(0,r.jsxs)("div",{className:"row",children:[(0,r.jsx)("label",{className:"col-sm-4 col-form-label",children:"Mobil"}),(0,r.jsx)("div",{className:"col-sm-6",children:(0,r.jsx)("input",{placeholder:"Mobil",className:"form-control",name:"mobile",value:null===U||void 0===U?void 0:U.mobile,onChange:e=>{const l=e.target.value.replace(/[^\d+ ]/g,"");/^\+?(?:[0-9] ?){0,}$/.test(l)&&Q({...U,mobile:l})},maxLength:20,minLength:3})})]})}),(0,r.jsx)("div",{className:"col-sm-6",children:(0,r.jsxs)("div",{className:"row",children:[(0,r.jsx)("label",{className:"col-sm-4 col-form-label",children:"Bereits bezahlt"}),(0,r.jsx)("div",{className:"col-sm-6 mt-2",children:(0,r.jsxs)("div",{className:"radio-check-wrap",children:[(0,r.jsx)("input",{onChange:ke,name:"alreadyPaid",checked:null===U||void 0===U?void 0:U.alreadyPaid,type:"checkbox"}),(0,r.jsx)("span",{children:"ja"})]})})]})})]}),(0,r.jsx)("h6",{children:"Adresse"}),(0,r.jsxs)("div",{className:"row",children:[(0,r.jsxs)("div",{className:"col-sm-6",children:[(0,r.jsxs)("div",{className:"row",children:[(0,r.jsx)("label",{className:"col-sm-4 col-form-label",children:"Stra\xdfe mit Hausnummer"}),(0,r.jsx)("div",{className:"col-sm-6",children:(0,r.jsx)("input",{type:"text",onChange:e=>Q({...U,address:e.target.value}),onBlur:Ne,name:"address",placeholder:"Stra\xdfe mit Hausnummer",value:U.address,className:"form-control"})})]}),(0,r.jsxs)("div",{className:"row",children:[(0,r.jsx)("label",{className:"col-sm-4 col-form-label",children:"PLZ"}),(0,r.jsx)("div",{className:"col-sm-6",children:(0,r.jsx)("input",{type:"tel",value:U.plz,onChange:e=>{const l=e.target.value.replace(/[^0-9a-zA-Z9\xe4\xf6\xfc\xc4\xd6\xdc\xdf\xc4\xd6\xdc\xdf\s'-]/g,"");Q({...U,plz:l})},placeholder:"PLZ",className:"form-control",maxLength:10,minLength:3,required:!0})})]})]}),(0,r.jsxs)("div",{className:"col-sm-6",children:[(0,r.jsxs)("div",{className:"row",children:[(0,r.jsx)("label",{className:"col-sm-4 col-form-label",children:"Ort"}),(0,r.jsx)("div",{className:"col-sm-6",children:(0,r.jsx)("input",{type:"text",onChange:ke,name:"ort",placeholder:"Ort",value:null===U||void 0===U?void 0:U.ort,className:"form-control"})})]}),(0,r.jsxs)("div",{className:"row",children:[(0,r.jsx)("label",{className:"col-sm-4 col-form-label",children:"Land"}),(0,r.jsx)("div",{className:"col-sm-6",children:(0,r.jsx)("input",{type:"text",name:"land",onBlur:Ne,placeholder:"Land",onChange:e=>{var l,a;const s=null===e||void 0===e||null===(l=e.target)||void 0===l||null===(a=l.value)||void 0===a?void 0:a.replace(/[^0-9a-zA-Z9\xe4\xf6\xfc\xc4\xd6\xdc\xdf\xc4\xd6\xdc\xdf\s'-]/g,"");ke({target:{name:"land",value:s}})},value:null===U||void 0===U?void 0:U.land,className:"form-control"})})]})]})]}),(0,r.jsx)("h6",{children:"Lieferadresse c/o"}),(0,r.jsxs)("div",{className:"row",children:[(0,r.jsxs)("div",{className:"col-sm-6",children:[(0,r.jsxs)("div",{className:"row",children:[(0,r.jsx)("label",{className:"col-sm-4 col-form-label",children:"Vornamen"}),(0,r.jsx)("div",{className:"col-sm-6",children:(0,r.jsx)("input",{type:"text",onChange:ke,name:"fname",placeholder:"Vornamen",value:null===U||void 0===U?void 0:U.fname,className:"form-control"})})]}),(0,r.jsxs)("div",{className:"row",children:[(0,r.jsx)("label",{className:"col-sm-4 col-form-label",children:"Stra\xdfe mit Hausnummer"}),(0,r.jsx)("div",{className:"col-sm-6",children:(0,r.jsx)("input",{type:"text",onChange:we,name:"billAddress",onBlur:e=>{const{name:l,value:a}=e.target;let s=a.trim();/\d$/.test(a)&&(s=a.replace(/(\D)(\d)/,"$1 $2")),J({...G,[l]:s})},placeholder:"Stra\xdfe mit Hausnummer",value:G.billAddress,className:"form-control"})})]}),(0,r.jsxs)("div",{className:"row",children:[(0,r.jsx)("label",{htmlFor:"inputText",className:"col-sm-4 col-form-label",children:"Ort"}),(0,r.jsx)("div",{className:"col-sm-6",children:(0,r.jsx)("input",{type:"text",onChange:we,name:"billOrt",placeholder:"Ort",value:G.billOrt,className:"form-control",id:"inputText"})})]})]}),(0,r.jsxs)("div",{className:"col-sm-6",children:[(0,r.jsxs)("div",{className:"row",children:[(0,r.jsx)("label",{className:"col-sm-4 col-form-label",children:"Name"}),(0,r.jsx)("div",{className:"col-sm-6",children:(0,r.jsx)("input",{type:"text",placeholder:"Name",onChange:ke,name:"lname",value:null===U||void 0===U?void 0:U.lname,className:"form-control"})})]}),(0,r.jsxs)("div",{className:"row",children:[(0,r.jsx)("label",{className:"col-sm-4 col-form-label",children:"PLZ"}),(0,r.jsx)("div",{className:"col-sm-6",children:(0,r.jsx)("input",{type:"tel",value:G.billPlz,onChange:e=>{const l=e.target.value.replace(/[^0-9a-zA-Z9\xe4\xf6\xfc\xc4\xd6\xdc\xdf\xc4\xd6\xdc\xdf\s'-]/g,"");J({...G,billPlz:l})},placeholder:"PLZ",className:"form-control",maxLength:10,minLength:3,required:!0})})]}),(0,r.jsxs)("div",{className:"row",children:[(0,r.jsx)("label",{className:"col-sm-4 col-form-label",children:"Land"}),(0,r.jsx)("div",{className:"col-sm-6",children:(0,r.jsx)("input",{type:"text",name:"billLand",placeholder:"Land",onBlur:e=>{const{name:l,value:a}=e.target;let s=a.trim();/\d$/.test(a)&&(s=a.replace(/(\D)(\d)/,"$1 $2")),J({...G,[l]:s})},onChange:e=>{var l;const a=null===e||void 0===e||null===(l=e.target)||void 0===l?void 0:l.value.replace(/[^0-9a-zA-Z9\xe4\xf6\xfc\xc4\xd6\xdc\xdf\xc4\xd6\xdc\xdf\s'-]/g,"");we({target:{name:"billLand",value:a}})},value:G.billLand,className:"form-control"})})]})]})]})]})]}),(0,r.jsxs)("div",{className:"block-wrap",children:[(0,r.jsx)("h3",{children:"Hinterlegung"}),(0,r.jsxs)("div",{children:[(0,r.jsxs)("div",{className:"row",children:[(0,r.jsxs)("div",{className:"col-sm-6",children:[(0,r.jsxs)("div",{className:"row",children:[(0,r.jsx)("label",{className:"col-sm-4 col-form-label",children:"Hinterlegungsbeginn"}),(0,r.jsx)("div",{className:"col-sm-6",children:(0,r.jsx)(t.default,{value:X,onChange:e=>{var l,a;let s=null===e||void 0===e?void 0:e.getFullYear().toString();const n=parseInt(null===(l=s)||void 0===l?void 0:l.substring(0,4),10);var o;(null===(a=s)||void 0===a?void 0:a.length)>4&&(s=null===(o=s)||void 0===o?void 0:o.substring(0,4));const i=new Date("".concat(n,".").concat((null===e||void 0===e?void 0:e.getMonth())+1,".").concat(e.getDate()));ee(i)},placeholder:"Hinterlegungsbeginn"})})]}),(0,r.jsxs)("div",{className:"row",children:[(0,r.jsx)("label",{className:"col-sm-4 col-form-label",children:"Versand n\xe4chste Marke"}),(0,r.jsx)("div",{className:"col-sm-6",children:(0,r.jsx)(t.default,{value:le,onChange:e=>{const l=De(e);ae(l)},placeholder:"Versand n\xe4chste Marke"})})]})]}),(0,r.jsxs)("div",{className:"col-sm-6",children:[(0,r.jsxs)("div",{className:"row",children:[(0,r.jsx)("label",{className:"col-sm-4 col-form-label",children:"Versand letzte Marke"}),(0,r.jsx)("div",{className:"col-sm-6",children:(0,r.jsx)(t.default,{value:se,onChange:e=>{const l=De(e);ne(l)},placeholder:"Versand letzte Marke"})})]}),(0,r.jsxs)("div",{className:"row",children:[(0,r.jsx)("label",{className:"col-sm-4 col-form-label",children:"R\xfccksendung letzte Marke"}),(0,r.jsx)("div",{className:"col-sm-6",children:(0,r.jsx)(t.default,{value:oe,onChange:e=>{const l=De(e);ie(l)},placeholder:"R\xfccksendung letzte Marke"})})]})]})]}),(0,r.jsxs)("div",{className:"row ",children:[(0,r.jsx)("div",{className:"col-sm-6 mt-2",style:{padding:"0px"},children:(0,r.jsxs)("div",{className:"radio-check-wrap",children:[(0,r.jsx)("input",{type:"checkbox",onChange:e=>{re(e.target.checked)},checked:de,name:"emergencyPass"})," ",(0,r.jsx)("span",{children:" Notfallpass"})]})}),(0,r.jsx)("div",{className:"col-sm-6",children:(0,r.jsxs)("div",{className:"row",children:[(0,r.jsx)("label",{className:"col-sm-4 col-form-label",children:"Erinnerung Marke"}),(0,r.jsx)("div",{className:"col-sm-6",children:(0,r.jsx)(t.default,{value:te,onChange:e=>{const l=De(e);ce(l)},placeholder:"Erinnerung Marke"})})]})})]})]})]}),(0,r.jsxs)("div",{className:"block-wrap",children:[(0,r.jsx)("h3",{children:"Beendigung"}),(0,r.jsx)("div",{children:(0,r.jsxs)("div",{className:"row",children:[(0,r.jsx)("div",{className:"col-md-3 col-sm-6",style:{padding:"0px"},children:(0,r.jsxs)("div",{className:"radio-check-wrap w-100",children:[(0,r.jsx)("input",{type:"checkbox",onChange:Se,checked:me.termination,name:"termination"}),(0,r.jsx)("span",{children:"Auf eigenen Wunsch"})]})}),(0,r.jsx)("div",{className:"col-md-3 col-sm-6",style:{padding:"0px"},children:(0,r.jsxs)("div",{className:"radio-check-wrap w-100",children:[(0,r.jsx)("input",{type:"checkbox",onChange:Se,checked:me.terminationDeath,name:"terminationDeath"}),(0,r.jsx)("span",{children:" Durch Tod"})]})}),(0,r.jsx)("div",{className:"col-md-3 col-sm-6",style:{padding:"0px"},children:(0,r.jsxs)("div",{className:"radio-check-wrap w-100",children:[(0,r.jsx)("input",{type:"checkbox",onChange:Se,checked:me.notTermination,name:"notTermination"}),(0,r.jsx)("span",{children:"Weil nicht ermittelbar"})]})}),(0,r.jsx)("div",{className:"col-md-3 col-sm-6",style:{padding:"0px"},children:(0,r.jsxs)("div",{className:"radio-check-wrap w-100",children:[(0,r.jsx)("input",{type:"checkbox",onChange:Se,checked:me.financialReasons,name:"financialReasons"}),(0,r.jsx)("span",{children:" Aus finanziellen Gr\xfcnden"})]})})]})})]})]})})}),(0,r.jsxs)("div",{className:"text-end mt-4 mx-3 mb-3 pb-3",children:[(0,r.jsx)("button",{onClick:()=>{N("/customerlist")},type:"button",className:"btn btn",style:{background:"#d04545",color:"white"},children:"Abbrechen"}),"\xa0 \xa0",(0,r.jsx)("button",{onClick:async e=>{if(e.preventDefault(),0===(null===B||void 0===B?void 0:B.length))return n.oR.warning("Das Statusfeld ist erforderlich");let l=new Date;if((null===Y||void 0===Y?void 0:Y.startDate)>l)return n.oR.warning("Das Geburtsdatum darf nicht in der Zukunft liegen.");const a=null===Y||void 0===Y?void 0:Y.startDate;let s=new Date(a);if((l.getTime()-s.getTime())/315576e5<18)return n.oR.warning("Du musst mindestens 18 Jahre alt sein, um einen Vertrag zu unterschreiben.");if(a instanceof Date&&(null===a||void 0===a?void 0:a.getFullYear())<1900)return n.oR.warning("Das Startdatum darf nicht vor 1900 liegen.");if(K>l)return n.oR.warning("Die Datenerfassung darf nicht in der Zukunft liegen.");if(null!==U&&void 0!==U&&U.phone&&null!==U&&void 0!==U&&U.phone.startsWith("000"))return n.oR.warning("Ung\xfcltige Telefonnummer");if(null!==U&&void 0!==U&&U.mobile&&null!==U&&void 0!==U&&U.mobile.startsWith("000"))return n.oR.warning("Ung\xfcltige Telefonnummer");try{let e=await fetch("".concat(b,"/customer/get_record/edit/").concat(null===A||void 0===A?void 0:A._id),{method:"put",headers:{"Content-Type":"application/json"},body:JSON.stringify(Ae)}),l=await e.json();if(console.log("result",l),400===l.status&&n.oR.warning("Bitte eine g\xfcltige Email eingeben"),"Customer updated successfully"===(null===l||void 0===l?void 0:l.message)){let e=l.data.customerInfoStatu.remarks;localStorage.setItem("remarks",JSON.stringify(e)),Me(),n.oR.success("Daten erfolgreich gespeichert"),Ce(),y(!D)}}catch(o){n.oR.error("Fehler beim Speichern der Daten. Bitte versuche es erneut.")}},type:"button",style:{background:"#0b5995",color:"white"},className:"btn btn",children:"Speichern"})]})]}),(0,r.jsx)(n.N9,{})]})},v=s.memo(m)},72798:()=>{},9910:()=>{}}]);
//# sourceMappingURL=421.b30fdc38.chunk.js.map