"use strict";(self.webpackChunk_coreui_coreui_free_react_admin_template=self.webpackChunk_coreui_coreui_free_react_admin_template||[]).push([[421,940],{26940:(e,l,a)=>{a.r(l),a.d(l,{default:()=>o});var s=a(65043),n=a(70579);function o(e){let{onChange:l,value:a,placeholder:o}=e;const[i,t]=(0,s.useState)("");(0,s.useEffect)((()=>{if("string"===typeof a){const e=new Date(a);isNaN(e.getTime())?t(""):t(c(e))}else a instanceof Date&&!isNaN(a.getTime())?t(c(a)):t("")}),[a]);const c=e=>{var l,a,s,n,o;const i=null===e||void 0===e||null===(l=e.getDate())||void 0===l||null===(a=l.toString())||void 0===a?void 0:a.padStart(2,"0"),t=null===(s=(null===e||void 0===e?void 0:e.getMonth())+1)||void 0===s||null===(n=s.toString())||void 0===n?void 0:n.padStart(2,"0"),c=null===e||void 0===e||null===(o=e.getFullYear())||void 0===o?void 0:o.toString();return"".concat(i,".").concat(t,".").concat(c)};return(0,n.jsx)("div",{children:(0,n.jsx)("input",{type:"text",onChange:e=>{var l,a;let s=null===(l=e.target)||void 0===l?void 0:l.value,n="";s=null===(a=s)||void 0===a?void 0:a.replace(/\D/g,"");for(let i=0;i<(null===(o=s)||void 0===o?void 0:o.length);i++){var o;2!==i&&4!==i||(n+="."),n+=s[i]}t(n)},onBlur:e=>{var a;const s=null===i||void 0===i||null===(a=i.split("."))||void 0===a?void 0:a.map((e=>parseInt(e,10)));let[n,o,t]=s;if(3===(null===s||void 0===s?void 0:s.length)){t<100?t+=1900:t>=2e3&&(new Date).getFullYear();const e=new Date(t,o-1,n);l(e)}else if(1===(null===s||void 0===s?void 0:s.length)){const e=s[0];if(e<100){let a;a=e<50?e+2e3:e+1900;const s=new Date(a,0,1);l(s)}}},value:i,placeholder:o,className:"form-control"})})}},67421:(e,l,a)=>{a.r(l),a.d(l,{default:()=>v});var s=a(65043),n=a(47503),o=(a(92342),a(8124)),i=a(73216),t=a(26940),c=a(95870),d=(a(9910),a(72798),a(77154)),r=a(70579);const m=()=>{var e,l,a,m,v,u,h,x,j,p;const g=(0,i.Zp)(),N=((0,i.zy)(),"http://95.217.77.208:4142"),[b,f]=(0,s.useState)(1),[w,y]=(0,s.useState)(!1),[D,k]=(0,s.useState)(""),[S,C]=(0,s.useState)({}),[M,P]=(0,s.useState)([]);let A=localStorage.getItem("customerRecord"),L=JSON.parse(A);const[z,R]=(0,s.useState)({orderNumber:"",newsletterDate:"",extras:"",newsletterSubscription:""}),[B,I]=(0,s.useState)({dataProtection:"",employee:"",remarks:"",war:"",research:""}),[_,O]=(0,s.useState)(null===L||void 0===L?void 0:L.status),[T,E]=(0,s.useState)(""),[F,V]=(0,s.useState)(""),[Z,H]=(0,s.useState)(""),$=null===S||void 0===S||null===(e=S.customer)||void 0===e?void 0:e.startDate,W=new Date($).toLocaleDateString("en-IN",{year:"numeric",month:"2-digit",day:"2-digit"}).replace(/\//g,"."),[Y,G]=(0,s.useState)({title:"",salution:"",gender:"",fname:"",lname:"",startDate:W,email:""}),[J,K]=(0,s.useState)({billAddress:"",billPlz:"",billLand:"",billOrt:""}),[q,U]=(0,s.useState)("");let Q=null===M||void 0===M?void 0:M.alreadyPaid;const[X,ee]=(0,s.useState)({fname:"",lname:"",address:"",plz:"",land:"",ort:"",phone:"",mobile:"",email:"",alreadyPaid:""}),[le,ae]=(0,s.useState)(""),[se,ne]=(0,s.useState)(""),[oe,ie]=(0,s.useState)(""),[te,ce]=(0,s.useState)(""),[de,re]=(0,s.useState)(""),[me,ve]=(0,s.useState)(""),[ue,he]=(0,s.useState)({termination:"",terminationDeath:"",notTermination:"",financialReasons:""}),[xe,je]=(0,s.useState)({}),[pe,ge]=(0,s.useState)([]);let Ne={fname:(null===Y||void 0===Y?void 0:Y.fname)||(null===S||void 0===S||null===(l=S.customer)||void 0===l?void 0:l.fname),lname:(null===Y||void 0===Y?void 0:Y.lname)||(null===S||void 0===S||null===(a=S.customer)||void 0===a?void 0:a.lname),email:F||(null===S||void 0===S||null===(m=S.customer)||void 0===m?void 0:m.email),phone:(null===X||void 0===X?void 0:X.phone)||(null===S||void 0===S||null===(v=S.customer)||void 0===v?void 0:v.phone),plz:null===X||void 0===X?void 0:X.plz,startDate:(null===Y||void 0===Y?void 0:Y.startDate)||(null===S||void 0===S||null===(u=S.customer)||void 0===u?void 0:u.startDate),status:_||(null===S||void 0===S||null===(h=S.customer)||void 0===h?void 0:h.status),salution:T||(null===S||void 0===S||null===(x=S.customer)||void 0===x?void 0:x.salution),land:(null===X||void 0===X?void 0:X.land)||(null===S||void 0===S||null===(j=S.customer)||void 0===j?void 0:j.land),id:null===S||void 0===S?void 0:S.id,street:null===X||void 0===X?void 0:X.address,city:null===S||void 0===S||null===(p=S.customer)||void 0===p?void 0:p.city,those:null===S||void 0===S?void 0:S.those,created_by:null===S||void 0===S?void 0:S.created_by};const be=e=>{if(e instanceof Date){var l,a;let n=null===e||void 0===e?void 0:e.getFullYear().toString();const o=parseInt(null===(l=n)||void 0===l?void 0:l.substring(0,4),10);var s;if((null===(a=n)||void 0===a?void 0:a.length)>4)n=null===(s=n)||void 0===s?void 0:s.substring(0,4);const i=new Date("".concat(o,".").concat((null===e||void 0===e?void 0:e.getMonth())+1,".").concat(e.getDate()));R({...z,newsletterDate:i})}else if(null!==e&&void 0!==e&&e.target){const{name:l,value:a}=null===e||void 0===e?void 0:e.target;R("newsletterDate"===l?{...z,newsletterDate:a}:{...z,[l]:a})}},fe=e=>{const{name:l,value:a}=e.target;let s=a.trim();/\d$/.test(a)&&(s=a.replace(/(\D)(\d)/,"$1 $2")),ee({...X,[l]:s})},we=e=>{if(e instanceof Date){var l,a;let n=null===e||void 0===e?void 0:e.getFullYear().toString();const o=parseInt(null===(l=n)||void 0===l?void 0:l.substring(0,4),10);var s;if((null===(a=n)||void 0===a?void 0:a.length)>4)n=null===(s=n)||void 0===s?void 0:s.substring(0,4);const i=new Date("".concat(o,".").concat((null===e||void 0===e?void 0:e.getMonth())+1,".").concat(e.getDate()));I({...B,dataCollection:i})}else if(e.target){const{name:l,value:a,checked:s,type:n}=e.target;I("dataCollection"===l?{...B,[l]:a}:{...B,[l]:"checkbox"===n?s:a})}else void 0!==e.value&&I({...B,employee:e.value})},ye=e=>{if(e.target){const{name:l,value:a,type:s,checked:n}=e.target;if("radio"===s){const e=n?a:"";G({...Y,[l]:e})}else G({...Y,[l]:"checkbox"===s?n:a})}else void 0!==e.value?G({...Y,salution:e.value}):console.error("Invalid event or data provided to ContactChange.")},De=e=>{const{name:l,value:a}=e.target;K({...J,[l]:a})},ke=e=>{var l,a;let s=null===e||void 0===e?void 0:e.getFullYear().toString();const n=parseInt(null===(l=s)||void 0===l?void 0:l.substring(0,4),10);var o;(null===(a=s)||void 0===a?void 0:a.length)>4&&(s=null===(o=s)||void 0===o?void 0:o.substring(0,4));return new Date("".concat(n,".").concat((null===e||void 0===e?void 0:e.getMonth())+1,".").concat(e.getDate()))},Se={startDeposit:le,nextBrand:se,updateStamp:oe,lastStamp:te,reminderStamp:de,emergencyPass:me},Ce=e=>{ee({...X,alreadyPaid:e.target.checked})},Me=e=>{const{name:l,checked:a}=e.target,s={...ue};!0===s[l]&&a?s[l]=!1:Object.keys(s).forEach((e=>{s[e]=e===l&&a})),he(s)},Pe=async()=>{try{const e=await fetch("".concat(N,"/customer/get_record/").concat(null===L||void 0===L?void 0:L._id)),l=await e.json();je(l)}catch(e){console.error("Error fetching customer record:",e)}},Ae=async()=>{try{const e=await d.A.get("".concat(N,"/customer/get_record/").concat(null===L||void 0===L?void 0:L._id));C(null===e||void 0===e?void 0:e.data)}catch(e){console.log(e)}};let Le={...B,clientStatus:_,dataCollection:q};const ze={customer:Ne,orderingMaterials:z,customerInfoStatu:Le,those:Z,customerContact:Y,customerBills:J,customerDelivery:X,customerDeposit:Se,customerBurial:ue};(0,s.useEffect)((()=>{Ae(),Pe(),(async()=>{try{const e=await fetch("".concat(N,"/user/get/employeeData")),l=await e.json();ge(null===l||void 0===l?void 0:l.data)}catch(e){console.error("Error fetching customer record:",e)}})(),(async()=>{try{const e=await fetch("".concat(N,"/invoice/get_invoice/").concat(L._id)),l=await e.json();P(l)}catch(e){console.error("Error fetching employee data:",e)}})()}),[b,D]);(0,s.useEffect)((()=>{ee((e=>({...e,alreadyPaid:Q})))}),[Q]),(0,s.useEffect)((()=>{var e,l,a,s,n,o,i,t,c,d,r,m,v,u,h,x,j,p,g,N,b,f,w,y,D,k,C,M,P,A,z,B,_,T,F,Z,$,W,Y,J,q,X,le,se,oe,te,de,me,ue;ee({fname:(null===S||void 0===S||null===(e=S.customerDelivery)||void 0===e?void 0:e.fname)||(null===S||void 0===S||null===(l=S.customer)||void 0===l?void 0:l.fname),lname:(null===S||void 0===S||null===(a=S.customerDelivery)||void 0===a?void 0:a.lname)||(null===S||void 0===S||null===(s=S.customer)||void 0===s?void 0:s.lname),address:(null===S||void 0===S||null===(n=S.customerDelivery)||void 0===n?void 0:n.address)||(null===S||void 0===S||null===(o=S.customer)||void 0===o?void 0:o.street),plz:(null===S||void 0===S?void 0:S.plz)||(null===S||void 0===S||null===(i=S.customer)||void 0===i?void 0:i.plz),land:(null===S||void 0===S?void 0:S.land)||(null===S||void 0===S||null===(t=S.customer)||void 0===t?void 0:t.land),ort:(null===S||void 0===S||null===(c=S.customerDelivery)||void 0===c?void 0:c.ort)||(null===S||void 0===S||null===(d=S.customer)||void 0===d?void 0:d.city),phone:(null===S||void 0===S?void 0:S.phone)||(null===S||void 0===S||null===(r=S.customer)||void 0===r?void 0:r.phone),mobile:null===S||void 0===S||null===(m=S.customerDelivery)||void 0===m?void 0:m.mobile,alreadyPaid:Q}),R({orderNumber:null===S||void 0===S||null===(v=S.orderingMaterials)||void 0===v?void 0:v.orderNumber,newsletterDate:null===S||void 0===S||null===(u=S.orderingMaterials)||void 0===u?void 0:u.newsletterDate,extras:null===S||void 0===S||null===(h=S.orderingMaterials)||void 0===h?void 0:h.extras,newsletterSubscription:null===S||void 0===S||null===(x=S.orderingMaterials)||void 0===x?void 0:x.newsletterSubscription}),I({dataProtection:null===S||void 0===S||null===(j=S.customerInfoStatu)||void 0===j?void 0:j.dataProtection,employee:null===S||void 0===S||null===(p=S.customerInfoStatu)||void 0===p?void 0:p.employee,remarks:null===S||void 0===S||null===(g=S.customerInfoStatu)||void 0===g?void 0:g.remarks}),U(null===S||void 0===S||null===(N=S.customerInfoStatu)||void 0===N?void 0:N.dataCollection),H(null===S||void 0===S?void 0:S.those),G({title:null===S||void 0===S||null===(b=S.customerContact)||void 0===b?void 0:b.title,salution:null===S||void 0===S||null===(f=S.customerContact)||void 0===f?void 0:f.salution,gender:null===S||void 0===S||null===(w=S.customerContact)||void 0===w?void 0:w.gender,fname:(null===S||void 0===S||null===(y=S.customerContact)||void 0===y?void 0:y.fname)||(null===L||void 0===L?void 0:L.fname),lname:(null===S||void 0===S||null===(D=S.customerContact)||void 0===D?void 0:D.lname)||(null===L||void 0===L?void 0:L.lname),email:(null===S||void 0===S||null===(k=S.customerContact)||void 0===k?void 0:k.email)||(null===S||void 0===S||null===(C=S.customer)||void 0===C?void 0:C.email),startDate:null===S||void 0===S||null===(M=S.customer)||void 0===M?void 0:M.startDate}),K({billAddress:(null===S||void 0===S||null===(P=S.customerBills)||void 0===P?void 0:P.billAddress)||(null===S||void 0===S||null===(A=S.customer)||void 0===A?void 0:A.street),billPlz:(null===S||void 0===S||null===(z=S.customerBills)||void 0===z?void 0:z.billPlz)||(null===S||void 0===S||null===(B=S.customer)||void 0===B?void 0:B.plz),billLand:(null===S||void 0===S||null===(_=S.customerBills)||void 0===_?void 0:_.billLand)||(null===S||void 0===S||null===(T=S.customer)||void 0===T?void 0:T.land),billOrt:(null===S||void 0===S||null===(F=S.customerBills)||void 0===F?void 0:F.billOrt)||(null===S||void 0===S||null===(Z=S.customer)||void 0===Z?void 0:Z.city)}),ve(null===S||void 0===S||null===($=S.customerDeposit)||void 0===$?void 0:$.emergencyPass),ae(null===S||void 0===S||null===(W=S.customerDeposit)||void 0===W?void 0:W.startDeposit),ne(null===S||void 0===S||null===(Y=S.customerDeposit)||void 0===Y?void 0:Y.nextBrand),ie(null===S||void 0===S||null===(J=S.customerDeposit)||void 0===J?void 0:J.updateStamp),re(null===S||void 0===S||null===(q=S.customerDeposit)||void 0===q?void 0:q.reminderStamp),ce(null===S||void 0===S||null===(X=S.customerDeposit)||void 0===X?void 0:X.lastStamp),he({termination:null===S||void 0===S||null===(le=S.customerBurial)||void 0===le?void 0:le.termination,terminationDeath:null===S||void 0===S||null===(se=S.customerBurial)||void 0===se?void 0:se.terminationDeath,notTermination:null===S||void 0===S||null===(oe=S.customerBurial)||void 0===oe?void 0:oe.notTermination,financialReasons:null===S||void 0===S||null===(te=S.customerBurial)||void 0===te?void 0:te.financialReasons}),H(null===S||void 0===S?void 0:S.those),O(null===S||void 0===S||null===(de=S.customer)||void 0===de?void 0:de.status),E(null===S||void 0===S||null===(me=S.customer)||void 0===me?void 0:me.salution),V(null===S||void 0===S||null===(ue=S.customer)||void 0===ue?void 0:ue.email)}),[S]);return(0,r.jsxs)("div",{className:"inner-page-wrap",children:[(0,r.jsx)(o.default,{getCustomerData:xe,updateData:w}),(0,r.jsxs)("div",{className:"tab-content px-3",children:[(0,r.jsx)("div",{className:"tab-title",children:(0,r.jsx)("h4",{children:"KlientInnen"})}),(0,r.jsx)("div",{children:(0,r.jsx)("div",{className:"row",children:(0,r.jsxs)("div",{className:"col",children:[(0,r.jsxs)("div",{className:"block-wrap",children:[(0,r.jsx)("h3",{children:"Materialbestellung"}),(0,r.jsx)("div",{className:"row-wrap",children:(0,r.jsxs)("div",{className:"row",style:{marginLeft:"5px"},children:[(0,r.jsx)("div",{className:"col-sm-3",children:(0,r.jsxs)("div",{className:"row",children:[(0,r.jsx)("label",{htmlFor:"inputPassword",className:"col-sm-5 col-form-label",children:"Anzahl Frageb\xf6gen"}),(0,r.jsx)("div",{className:"col-sm-7",children:(0,r.jsx)("input",{type:"number",value:z.orderNumber,name:"orderNumber",onChange:be,className:"form-control"})})]})}),(0,r.jsx)("div",{className:"col-sm-2",children:(0,r.jsxs)("div",{className:"row",children:[(0,r.jsx)("label",{htmlFor:"inputPassword",className:"col-sm-3 col-form-label",children:"Extras"}),(0,r.jsx)("div",{className:"col-sm-9",children:(0,r.jsx)("input",{type:"text",name:"extras",value:z.extras,onChange:be,className:"form-control w-100",placeholder:"Extras"})})]})}),(0,r.jsx)("div",{className:"col-sm-3",children:(0,r.jsxs)("div",{className:"row",children:[(0,r.jsx)("label",{htmlFor:"inputPassword",className:"col-sm-5 col-form-label",children:"Newsletter-Datum"}),(0,r.jsx)("div",{className:"col-sm-7",children:(0,r.jsx)(t.default,{name:"newsletterDate",value:null===z||void 0===z?void 0:z.newsletterDate,onChange:be,placeholder:"Newsletter-Datum"})})]})}),(0,r.jsx)("div",{className:"col-sm-4",children:(0,r.jsxs)("div",{className:"row",children:[(0,r.jsx)("label",{className:"col-form-label col-sm-5",children:"Newsletter-Abonnement"}),(0,r.jsxs)("div",{className:"col-sm-7",children:[(0,r.jsxs)("div",{className:"radio-check-wrap",children:[(0,r.jsx)("input",{type:"radio",name:"newsletterSubscription",value:"active",checked:"active"===z.newsletterSubscription,onChange:be}),(0,r.jsx)("span",{children:"Aktiv"})]}),(0,r.jsxs)("div",{className:"radio-check-wrap",children:[(0,r.jsx)("input",{type:"radio",name:"newsletterSubscription",value:"inactive",checked:"inactive"===z.newsletterSubscription,onChange:be}),(0,r.jsx)("span",{children:"Inaktiv"})]})]})]})})]})}),(0,r.jsx)("h3",{children:"Status"}),(0,r.jsx)("div",{className:"border-bottom mb-3",children:(0,r.jsxs)("div",{children:[(0,r.jsxs)("div",{className:"row",children:[(0,r.jsx)("div",{className:"col-sm-6",children:(0,r.jsxs)("div",{className:"row mb-3",children:[(0,r.jsx)("label",{className:"col-sm-3 col-form-label",children:"Status"}),(0,r.jsx)("div",{className:"col-sm-6",children:(0,r.jsx)("div",{className:"card flex justify-content-center p-3",children:[{name:"HLG",code:"0"},{name:"HVD-PV",code:"1"},{name:"OPV-alt",code:"2"},{name:"SPV-alt",code:"3"},{name:"SpenderIn",code:"4"},{name:"Newsletter",code:"5"},{name:"Material",code:"6"},{name:"Offen",code:"7"},{name:"WaR",code:"8"},{name:"Recherche",code:"9"}].map((e=>(0,r.jsx)("div",{className:"checkbox-container",children:(0,r.jsxs)("div",{className:"radio-check-wrapp",children:[(0,r.jsx)("input",{type:"checkbox",checked:_&&_.some((l=>l.code===e.code)),onChange:l=>((e,l)=>{e.target.checked?O([..._,l]):O(_.filter((e=>e.code!==l.code)))})(l,e)}),(0,r.jsx)("label",{className:"city-label",children:e.name})]})},e.code)))})})]})}),(0,r.jsx)("div",{className:"col-sm-6 mb-3",children:(0,r.jsxs)("div",{className:"row",children:[(0,r.jsx)("label",{className:"col-sm-4 col-form-label",children:"Bemerkungen"}),(0,r.jsx)("div",{className:"col-sm-6",children:(0,r.jsx)("textarea",{value:B.remarks,name:"remarks",onChange:we,className:"form-control",rows:14})})]})})]}),(0,r.jsxs)("div",{className:"row",children:[(0,r.jsx)("div",{className:"col-sm-6",children:(0,r.jsxs)("div",{className:"row mb-3",children:[(0,r.jsx)("label",{className:"col-sm-3 col-form-label",children:"MitarbeiterInnen"}),(0,r.jsx)("div",{className:"col-sm-6",children:(0,r.jsx)(c.Ay,{className:"w-100",placeholder:"MitarbeiterInnen",options:null===pe||void 0===pe?void 0:pe.map((e=>({value:e.username,label:e.username}))),onChange:we,value:{value:B.employee||"MitarbeiterInnen",label:B.employee||"MitarbeiterInnen"},name:"employee"})})]})}),(0,r.jsx)("div",{className:"col-sm-6",children:(0,r.jsxs)("div",{className:"row mb-3",children:[(0,r.jsx)("label",{htmlFor:"inputDate",className:"col-sm-4 col-form-label",children:"Datenerfassung"}),(0,r.jsx)("div",{className:"col-sm-6",children:(0,r.jsx)(t.default,{value:q,onChange:e=>{U(e)},placeholder:"Datenerfassung"})})]})})]})]})}),(0,r.jsx)("h3",{children:"Quelle"}),(0,r.jsx)("div",{className:"border-0",children:(0,r.jsx)("div",{children:(0,r.jsxs)("div",{className:"row",children:[(0,r.jsx)("div",{className:"col-sm-6",children:(0,r.jsxs)("div",{className:"row",children:[(0,r.jsx)("label",{className:"col-sm-3 col-form-label",children:"Auswahl"}),(0,r.jsx)("div",{className:"col-sm-6",children:(0,r.jsx)("div",{className:"input-group",children:(0,r.jsx)(c.Ay,{className:"w-100",options:[{value:"order",label:"Auftrag (Online-Maske) "},{value:"contact form",label:"Kontaktformular"},{value:"order print",label:"Auftrag / Print"},{value:"website",label:"Webseite"},{value:"e-mail",label:"E-Mail"},{value:"call",label:"Anruf"},{value:"letter",label:"Zuschrift (Post)"},{value:"HVD regional association",label:"HVD-Landesverband"},{value:"Regional association MOL",label:"Regionalverband MOL"},{value:"Northern Regional Association",label:"Regionalverband NORD"},{value:"Regional association",label:"Regionalverband Potsdam"},{value:"inter",label:"intern"},{value:"anderes",label:"anderes"}],onChange:e=>{H(e)},value:Z,name:"those",placeholder:"Auswahl"})})})]})}),(0,r.jsx)("div",{className:"col-sm-6",children:(0,r.jsxs)("div",{className:"row mb-3",children:[(0,r.jsx)("label",{className:"col-sm-6 col-form-label",children:"Zustimmung Datenschutz"}),(0,r.jsx)("div",{className:"col-sm-4 mt-2",children:(0,r.jsxs)("div",{className:"radio-check-wrap w-100 h-100",children:[(0,r.jsx)("input",{type:"checkbox",name:"dataProtection",onChange:we,checked:B.dataProtection}),(0,r.jsx)("span",{})]})})]})})]})})})]}),(0,r.jsxs)("div",{className:"block-wrap",children:[(0,r.jsx)("h3",{children:"Kontaktdaten"}),(0,r.jsxs)("div",{children:[(0,r.jsxs)("div",{className:"row",children:[(0,r.jsx)("div",{className:"col-sm-6",children:(0,r.jsxs)("div",{className:"row",children:[(0,r.jsx)("label",{className:"col-sm-4 col-form-label",children:"Titel"}),(0,r.jsx)("div",{className:"col-sm-6",children:(0,r.jsx)("input",{type:"text",value:Y.title,name:"title",onChange:ye,className:"form-control",placeholder:"Titel"})})]})}),(0,r.jsx)("div",{className:"col-sm-6",children:(0,r.jsxs)("div",{className:"row",children:[(0,r.jsx)("label",{className:"col-sm-4 col-form-label",children:"Geburtsdatum"}),(0,r.jsx)("div",{className:"col-sm-6",children:(0,r.jsx)(t.default,{value:null===Y||void 0===Y?void 0:Y.startDate,onChange:e=>{G({...Y,startDate:e})},name:"startDate",placeholder:"Geburtsdatum"})})]})})]}),(0,r.jsxs)("div",{className:"row mb-3",children:[(0,r.jsx)("div",{className:"col-sm-6",children:(0,r.jsxs)("div",{className:"row",children:[(0,r.jsx)("label",{className:"col-sm-4 col-form-label",children:"Anrede"}),(0,r.jsx)("div",{className:"col-sm-6",children:(0,r.jsx)(c.Ay,{className:"w-100",value:T,name:"salution",placeholder:"Anrede",options:[{value:"herr",label:"Herr"},{value:"frau",label:"Frau"},{value:"divers",label:"Divers"}],onChange:e=>{E(e)}})})]})}),(0,r.jsx)("div",{className:"col-sm-6",children:(0,r.jsxs)("div",{className:"row",children:[(0,r.jsx)("label",{className:"col-sm-4 col-form-label",children:"Geschlecht"}),(0,r.jsx)("div",{className:"col-sm-6 mt-2",children:(0,r.jsxs)("div",{className:"radio-wrap",children:[(0,r.jsxs)("div",{className:"radio-input",children:[(0,r.jsx)("input",{type:"radio",id:"male",value:"male",name:"gender",onChange:ye,checked:"male"===Y.gender}),(0,r.jsx)("span",{children:"M\xe4nnlich"})]}),(0,r.jsxs)("div",{className:"radio-input",children:[(0,r.jsx)("input",{type:"radio",id:"female",value:"female",name:"gender",onChange:ye,checked:"female"===Y.gender}),(0,r.jsx)("span",{children:"Weiblich"})]}),(0,r.jsxs)("div",{className:"radio-input",children:[(0,r.jsx)("input",{type:"radio",id:"divers",value:"other",name:"gender",onChange:ye,checked:"other"===Y.gender}),(0,r.jsx)("span",{children:"Divers"})]})]})})]})})]}),(0,r.jsxs)("div",{className:"row",children:[(0,r.jsx)("div",{className:"col-sm-6",children:(0,r.jsxs)("div",{className:"row",children:[(0,r.jsx)("label",{className:"col-sm-4 col-form-label",children:"Vornamen"}),(0,r.jsx)("div",{className:"col-sm-6",children:(0,r.jsx)("input",{type:"text",placeholder:"Vornamen",value:Y.fname,name:"fname",onChange:ye,className:"form-control"})})]})}),(0,r.jsx)("div",{className:"col-sm-6",children:(0,r.jsxs)("div",{className:"row",children:[(0,r.jsx)("label",{className:"col-sm-4 col-form-label",children:"Name"}),(0,r.jsx)("div",{className:"col-sm-6",children:(0,r.jsx)("input",{type:"text",className:"form-control",placeholder:"Name",name:"lname",onChange:ye,value:Y.lname})})]})})]}),(0,r.jsxs)("div",{className:"row",children:[(0,r.jsx)("div",{className:"col-sm-6",children:(0,r.jsxs)("div",{className:"row",children:[(0,r.jsx)("label",{className:"col-sm-4 col-form-label",children:"E-Mail-Adresse"}),(0,r.jsx)("div",{className:"col-sm-6",children:(0,r.jsx)("input",{type:"text",name:"email",placeholder:"E-Mail-Adresse",onChange:e=>{var l;V(null===e||void 0===e||null===(l=e.target)||void 0===l?void 0:l.value)},value:F,className:"form-control",id:"inputEmail"})})]})}),(0,r.jsx)("div",{className:"col-sm-6",children:(0,r.jsxs)("div",{className:"row",children:[(0,r.jsx)("label",{className:"col-sm-4 col-form-label",children:"Telefon"}),(0,r.jsx)("div",{className:"col-sm-6",children:(0,r.jsx)("input",{placeholder:"Telefon",className:"form-control",name:"phone",value:null===X||void 0===X?void 0:X.phone,onChange:e=>{const l=e.target.value.replace(/[^\d+ ]/g,"");/^\+?(?:[0-9] ?){0,}$/.test(l)&&ee({...X,phone:l})},maxLength:20,minLength:3})})]})})]}),(0,r.jsxs)("div",{className:"row",children:[(0,r.jsx)("div",{className:"col-sm-6",children:(0,r.jsxs)("div",{className:"row",children:[(0,r.jsx)("label",{className:"col-sm-4 col-form-label",children:"Mobil"}),(0,r.jsx)("div",{className:"col-sm-6",children:(0,r.jsx)("input",{placeholder:"Mobil",className:"form-control",name:"mobile",value:null===X||void 0===X?void 0:X.mobile,onChange:e=>{const l=e.target.value.replace(/[^\d+ ]/g,"");/^\+?(?:[0-9] ?){0,}$/.test(l)&&ee({...X,mobile:l})},maxLength:20,minLength:3})})]})}),(0,r.jsx)("div",{className:"col-sm-6",children:(0,r.jsxs)("div",{className:"row",children:[(0,r.jsx)("label",{className:"col-sm-4 col-form-label",children:"Bereits bezahlt"}),(0,r.jsx)("div",{className:"col-sm-6 mt-2",children:(0,r.jsxs)("div",{className:"radio-check-wrap",children:[(0,r.jsx)("input",{onChange:Ce,name:"alreadyPaid",checked:null===X||void 0===X?void 0:X.alreadyPaid,type:"checkbox"}),(0,r.jsx)("span",{children:"ja"})]})})]})})]}),(0,r.jsx)("h6",{children:"Adresse"}),(0,r.jsxs)("div",{className:"row",children:[(0,r.jsxs)("div",{className:"col-sm-6",children:[(0,r.jsxs)("div",{className:"row",children:[(0,r.jsx)("label",{className:"col-sm-4 col-form-label",children:"Stra\xdfe mit Hausnummer"}),(0,r.jsx)("div",{className:"col-sm-6",children:(0,r.jsx)("input",{type:"text",onChange:e=>ee({...X,address:e.target.value}),onBlur:fe,name:"address",placeholder:"Stra\xdfe mit Hausnummer",value:X.address,className:"form-control"})})]}),(0,r.jsxs)("div",{className:"row",children:[(0,r.jsx)("label",{className:"col-sm-4 col-form-label",children:"PLZ"}),(0,r.jsx)("div",{className:"col-sm-6",children:(0,r.jsx)("input",{type:"tel",value:X.plz,onChange:e=>{const l=e.target.value.replace(/[^0-9a-zA-Z9\xe4\xf6\xfc\xc4\xd6\xdc\xdf\xc4\xd6\xdc\xdf\s'-]/g,"");ee({...X,plz:l})},placeholder:"PLZ",className:"form-control",maxLength:10,minLength:3,required:!0})})]})]}),(0,r.jsxs)("div",{className:"col-sm-6",children:[(0,r.jsxs)("div",{className:"row",children:[(0,r.jsx)("label",{className:"col-sm-4 col-form-label",children:"Ort"}),(0,r.jsx)("div",{className:"col-sm-6",children:(0,r.jsx)("input",{type:"text",onChange:Ce,name:"ort",placeholder:"Ort",value:null===X||void 0===X?void 0:X.ort,className:"form-control"})})]}),(0,r.jsxs)("div",{className:"row",children:[(0,r.jsx)("label",{className:"col-sm-4 col-form-label",children:"Land"}),(0,r.jsx)("div",{className:"col-sm-6",children:(0,r.jsx)("input",{type:"text",name:"land",onBlur:fe,placeholder:"Land",onChange:e=>{var l,a;const s=null===e||void 0===e||null===(l=e.target)||void 0===l||null===(a=l.value)||void 0===a?void 0:a.replace(/[^0-9a-zA-Z9\xe4\xf6\xfc\xc4\xd6\xdc\xdf\xc4\xd6\xdc\xdf\s'-]/g,"");Ce({target:{name:"land",value:s}})},value:null===X||void 0===X?void 0:X.land,className:"form-control"})})]})]})]}),(0,r.jsx)("h6",{children:"Lieferadresse c/o"}),(0,r.jsxs)("div",{className:"row",children:[(0,r.jsxs)("div",{className:"col-sm-6",children:[(0,r.jsxs)("div",{className:"row",children:[(0,r.jsx)("label",{className:"col-sm-4 col-form-label",children:"Vornamen"}),(0,r.jsx)("div",{className:"col-sm-6",children:(0,r.jsx)("input",{type:"text",onChange:Ce,name:"fname",placeholder:"Vornamen",value:null===X||void 0===X?void 0:X.fname,className:"form-control"})})]}),(0,r.jsxs)("div",{className:"row",children:[(0,r.jsx)("label",{className:"col-sm-4 col-form-label",children:"Stra\xdfe mit Hausnummer"}),(0,r.jsx)("div",{className:"col-sm-6",children:(0,r.jsx)("input",{type:"text",onChange:De,name:"billAddress",onBlur:e=>{const{name:l,value:a}=e.target;let s=a.trim();/\d$/.test(a)&&(s=a.replace(/(\D)(\d)/,"$1 $2")),K({...J,[l]:s})},placeholder:"Stra\xdfe mit Hausnummer",value:J.billAddress,className:"form-control"})})]}),(0,r.jsxs)("div",{className:"row",children:[(0,r.jsx)("label",{htmlFor:"inputText",className:"col-sm-4 col-form-label",children:"Ort"}),(0,r.jsx)("div",{className:"col-sm-6",children:(0,r.jsx)("input",{type:"text",onChange:De,name:"billOrt",placeholder:"Ort",value:J.billOrt,className:"form-control",id:"inputText"})})]})]}),(0,r.jsxs)("div",{className:"col-sm-6",children:[(0,r.jsxs)("div",{className:"row",children:[(0,r.jsx)("label",{className:"col-sm-4 col-form-label",children:"Name"}),(0,r.jsx)("div",{className:"col-sm-6",children:(0,r.jsx)("input",{type:"text",placeholder:"Name",onChange:Ce,name:"lname",value:null===X||void 0===X?void 0:X.lname,className:"form-control"})})]}),(0,r.jsxs)("div",{className:"row",children:[(0,r.jsx)("label",{className:"col-sm-4 col-form-label",children:"PLZ"}),(0,r.jsx)("div",{className:"col-sm-6",children:(0,r.jsx)("input",{type:"tel",value:J.billPlz,onChange:e=>{const l=e.target.value.replace(/[^0-9a-zA-Z9\xe4\xf6\xfc\xc4\xd6\xdc\xdf\xc4\xd6\xdc\xdf\s'-]/g,"");K({...J,billPlz:l})},placeholder:"PLZ",className:"form-control",maxLength:10,minLength:3,required:!0})})]}),(0,r.jsxs)("div",{className:"row",children:[(0,r.jsx)("label",{className:"col-sm-4 col-form-label",children:"Land"}),(0,r.jsx)("div",{className:"col-sm-6",children:(0,r.jsx)("input",{type:"text",name:"billLand",placeholder:"Land",onBlur:e=>{const{name:l,value:a}=e.target;let s=a.trim();/\d$/.test(a)&&(s=a.replace(/(\D)(\d)/,"$1 $2")),K({...J,[l]:s})},onChange:e=>{var l;const a=null===e||void 0===e||null===(l=e.target)||void 0===l?void 0:l.value.replace(/[^0-9a-zA-Z9\xe4\xf6\xfc\xc4\xd6\xdc\xdf\xc4\xd6\xdc\xdf\s'-]/g,"");De({target:{name:"billLand",value:a}})},value:J.billLand,className:"form-control"})})]})]})]})]})]}),(0,r.jsxs)("div",{className:"block-wrap",children:[(0,r.jsx)("h3",{children:"Hinterlegung"}),(0,r.jsxs)("div",{children:[(0,r.jsxs)("div",{className:"row",children:[(0,r.jsxs)("div",{className:"col-sm-6",children:[(0,r.jsxs)("div",{className:"row",children:[(0,r.jsx)("label",{className:"col-sm-4 col-form-label",children:"Hinterlegungsbeginn"}),(0,r.jsx)("div",{className:"col-sm-6",children:(0,r.jsx)(t.default,{value:le,onChange:e=>{var l,a;let s=null===e||void 0===e?void 0:e.getFullYear().toString();const n=parseInt(null===(l=s)||void 0===l?void 0:l.substring(0,4),10);var o;(null===(a=s)||void 0===a?void 0:a.length)>4&&(s=null===(o=s)||void 0===o?void 0:o.substring(0,4));const i=new Date("".concat(n,".").concat((null===e||void 0===e?void 0:e.getMonth())+1,".").concat(e.getDate()));ae(i)},placeholder:"Hinterlegungsbeginn"})})]}),(0,r.jsxs)("div",{className:"row",children:[(0,r.jsx)("label",{className:"col-sm-4 col-form-label",children:"Versand n\xe4chste Marke"}),(0,r.jsx)("div",{className:"col-sm-6",children:(0,r.jsx)(t.default,{value:se,onChange:e=>{const l=ke(e);ne(l)},placeholder:"Versand n\xe4chste Marke"})})]})]}),(0,r.jsxs)("div",{className:"col-sm-6",children:[(0,r.jsxs)("div",{className:"row",children:[(0,r.jsx)("label",{className:"col-sm-4 col-form-label",children:"Versand letzte Marke"}),(0,r.jsx)("div",{className:"col-sm-6",children:(0,r.jsx)(t.default,{value:oe,onChange:e=>{const l=ke(e);ie(l)},placeholder:"Versand letzte Marke"})})]}),(0,r.jsxs)("div",{className:"row",children:[(0,r.jsx)("label",{className:"col-sm-4 col-form-label",children:"R\xfccksendung letzte Marke"}),(0,r.jsx)("div",{className:"col-sm-6",children:(0,r.jsx)(t.default,{value:te,onChange:e=>{const l=ke(e);ce(l)},placeholder:"R\xfccksendung letzte Marke"})})]})]})]}),(0,r.jsxs)("div",{className:"row ",children:[(0,r.jsx)("div",{className:"col-sm-6 mt-2",style:{padding:"0px"},children:(0,r.jsxs)("div",{className:"radio-check-wrap",children:[(0,r.jsx)("input",{type:"checkbox",onChange:e=>{ve(e.target.checked)},checked:me,name:"emergencyPass"})," ",(0,r.jsx)("span",{children:" Notfallpass"})]})}),(0,r.jsx)("div",{className:"col-sm-6",children:(0,r.jsxs)("div",{className:"row",children:[(0,r.jsx)("label",{className:"col-sm-4 col-form-label",children:"Erinnerung Marke"}),(0,r.jsx)("div",{className:"col-sm-6",children:(0,r.jsx)(t.default,{value:de,onChange:e=>{const l=ke(e);re(l)},placeholder:"Erinnerung Marke"})})]})})]})]})]}),(0,r.jsxs)("div",{className:"block-wrap",children:[(0,r.jsx)("h3",{children:"Beendigung"}),(0,r.jsx)("div",{children:(0,r.jsxs)("div",{className:"row",children:[(0,r.jsx)("div",{className:"col-md-3 col-sm-6",style:{padding:"0px"},children:(0,r.jsxs)("div",{className:"radio-check-wrap w-100",children:[(0,r.jsx)("input",{type:"checkbox",onChange:Me,checked:ue.termination,name:"termination"}),(0,r.jsx)("span",{children:"Auf eigenen Wunsch"})]})}),(0,r.jsx)("div",{className:"col-md-3 col-sm-6",style:{padding:"0px"},children:(0,r.jsxs)("div",{className:"radio-check-wrap w-100",children:[(0,r.jsx)("input",{type:"checkbox",onChange:Me,checked:ue.terminationDeath,name:"terminationDeath"}),(0,r.jsx)("span",{children:" Durch Tod"})]})}),(0,r.jsx)("div",{className:"col-md-3 col-sm-6",style:{padding:"0px"},children:(0,r.jsxs)("div",{className:"radio-check-wrap w-100",children:[(0,r.jsx)("input",{type:"checkbox",onChange:Me,checked:ue.notTermination,name:"notTermination"}),(0,r.jsx)("span",{children:"Weil nicht ermittelbar"})]})}),(0,r.jsx)("div",{className:"col-md-3 col-sm-6",style:{padding:"0px"},children:(0,r.jsxs)("div",{className:"radio-check-wrap w-100",children:[(0,r.jsx)("input",{type:"checkbox",onChange:Me,checked:ue.financialReasons,name:"financialReasons"}),(0,r.jsx)("span",{children:" Aus finanziellen Gr\xfcnden"})]})})]})})]})]})})}),(0,r.jsxs)("div",{className:"text-end mt-4 mx-3 mb-3 pb-3",children:[(0,r.jsx)("button",{onClick:()=>{g("/customerlist")},type:"button",className:"btn btn",style:{background:"#d04545",color:"white"},children:"Abbrechen"}),"\xa0 \xa0",(0,r.jsx)("button",{onClick:async e=>{if(e.preventDefault(),0===(null===_||void 0===_?void 0:_.length))return n.oR.warning("Das Statusfeld ist erforderlich");let l=new Date;if((null===Y||void 0===Y?void 0:Y.startDate)>l)return n.oR.warning("Das Geburtsdatum darf nicht in der Zukunft liegen.");const a=null===Y||void 0===Y?void 0:Y.startDate;let s=new Date(a);if((l.getTime()-s.getTime())/315576e5<18)return n.oR.warning("Du musst mindestens 18 Jahre alt sein, um einen Vertrag zu unterschreiben.");if(a instanceof Date&&(null===a||void 0===a?void 0:a.getFullYear())<1900)return n.oR.warning("Das Startdatum darf nicht vor 1900 liegen.");if(q>l)return n.oR.warning("Die Datenerfassung darf nicht in der Zukunft liegen.");if(null!==X&&void 0!==X&&X.phone&&null!==X&&void 0!==X&&X.phone.startsWith("000"))return n.oR.warning("Ung\xfcltige Telefonnummer");if(null!==X&&void 0!==X&&X.mobile&&null!==X&&void 0!==X&&X.mobile.startsWith("000"))return n.oR.warning("Ung\xfcltige Telefonnummer");try{let e=await fetch("".concat(N,"/customer/get_record/edit/").concat(null===L||void 0===L?void 0:L._id),{method:"put",headers:{"Content-Type":"application/json"},body:JSON.stringify(ze)}),l=await e.json();if(400===l.status&&n.oR.warning("Bitte eine g\xfcltige Email eingeben"),"Customer updated successfully"===(null===l||void 0===l?void 0:l.message)){let e=l.data.customerInfoStatu.remarks;localStorage.setItem("remarks",JSON.stringify(e)),Ae(),n.oR.success("Daten erfolgreich gespeichert"),Pe(),y(!w)}}catch(o){n.oR.error("Fehler beim Speichern der Daten. Bitte versuche es erneut.")}},type:"button",style:{background:"#0b5995",color:"white"},className:"btn btn",children:"Speichern"})]})]}),(0,r.jsx)(n.N9,{})]})},v=s.memo(m)},72798:()=>{},9910:()=>{}}]);
//# sourceMappingURL=421.cae6587a.chunk.js.map