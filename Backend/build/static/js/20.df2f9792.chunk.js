"use strict";(self.webpackChunk_coreui_coreui_free_react_admin_template=self.webpackChunk_coreui_coreui_free_react_admin_template||[]).push([[20,940],{26940:(e,l,s)=>{s.r(l),s.d(l,{default:()=>t});var a=s(65043),o=s(31899),n=s.n(o),i=(s(25015),s(70579));const t=e=>{let{onChange:l,selected:s}=e;return(0,a.useEffect)((()=>{}),[]),(0,i.jsx)("div",{children:(0,i.jsx)(n(),{className:"form-control form-search-control w-101",placeholderText:"Geburtsdatum",selected:s,onChange:l,dateFormat:"dd.MM.yyyy"})})}},82020:(e,l,s)=>{s.r(l),s.d(l,{default:()=>u});var a=s(65043),o=s(47503),n=(s(92342),s(8124)),i=s(73216),t=(s(25015),s(26940)),r=s(64395),c=(s(9910),s(72798),s(97950),s(11322),s(77154)),d=s(70579);const m=()=>{var e,l,s,m,u,v,h,x,p,j;const N=(0,i.Zp)(),b=(0,i.zy)(),g="http://95.217.77.208:4142",[f,w]=(0,a.useState)(1),[y,k]=(0,a.useState)(!1),[D,C]=(0,a.useState)(""),[P,S]=(0,a.useState)({});console.log("ashcustomer",P);let F=localStorage.getItem("customerRecord"),M=JSON.parse(F);const[A,L]=(0,a.useState)({orderNumber:"",newsletterDate:"",extras:"",newsletterSubscription:""}),[z,R]=(0,a.useState)({dataProtection:"",employee:"",remarks:""}),[_,I]=(0,a.useState)(null===M||void 0===M?void 0:M.status),[B,O]=(0,a.useState)(""),[T,Z]=(0,a.useState)({title:"",salution:"",gender:"",fname:"",lname:"",startDate:""}),[E,V]=(0,a.useState)({billAddress:"",billPlz:"",billLand:"",billOrt:""}),[H,Y]=(0,a.useState)(""),[G,K]=(0,a.useState)(""),[W,q]=(0,a.useState)({fname:"",lname:"",address:"",plz:"",land:"",ort:"",phone:"",mobile:"",alreadyPaid:""}),[J,$]=(0,a.useState)(""),[Q,U]=(0,a.useState)(""),[X,ee]=(0,a.useState)(""),[le,se]=(0,a.useState)(""),[ae,oe]=(0,a.useState)(""),[ne,ie]=(0,a.useState)(""),[te,re]=(0,a.useState)({termination:"",terminationDeath:"",notTermination:"",financialReasons:""}),[ce,de]=(0,a.useState)({}),[me,ue]=(0,a.useState)([]);console.log("customerInfo?.customer?.fname",null===P||void 0===P||null===(e=P.customer)||void 0===e?void 0:e.fname),console.log("customerInfo?.customerContact?.fname",null===P||void 0===P||null===(l=P.customerContact)||void 0===l?void 0:l.fname);let ve={fname:(null===T||void 0===T?void 0:T.fname)||(null===P||void 0===P||null===(s=P.customer)||void 0===s?void 0:s.fname),lname:(null===T||void 0===T?void 0:T.lname)||(null===P||void 0===P||null===(m=P.customer)||void 0===m?void 0:m.lname),email:null===P||void 0===P||null===(u=P.customer)||void 0===u?void 0:u.email,phone:(null===W||void 0===W?void 0:W.phone)||(null===P||void 0===P||null===(v=P.customer)||void 0===v?void 0:v.phone),plz:null===W||void 0===W?void 0:W.plz,startDate:(null===T||void 0===T?void 0:T.startDate)||(null===P||void 0===P||null===(h=P.customer)||void 0===h?void 0:h.startDate),status:_||(null===P||void 0===P||null===(x=P.customer)||void 0===x?void 0:x.status),land:(null===W||void 0===W?void 0:W.land)||(null===P||void 0===P||null===(p=P.customer)||void 0===p?void 0:p.land),id:null===P||void 0===P?void 0:P.id,street:null===W||void 0===W?void 0:W.address,city:null===P||void 0===P||null===(j=P.customer)||void 0===j?void 0:j.city,those:null===P||void 0===P?void 0:P.those,created_by:null===P||void 0===P?void 0:P.created_by};const he=e=>{if(e instanceof Date)console.log("newsletter",e),L({...A,newsletterDate:e});else if(e.target){const{name:l,value:s}=e.target;L("newsletterDate"===l?{...A,newsletterDate:s}:{...A,[l]:s})}else console.error("Invalid event or data provided to matarialChange.")},xe=[{value:"herr",label:"Herr"},{value:"frau",label:"Frau"},{value:"divers",label:"Divers"}],pe=e=>{if(e instanceof Date)R({...z,dataCollection:e});else if(e.target){const{name:l,value:s,checked:a,type:o}=e.target;R("dataCollection"===l?{...z,[l]:s}:{...z,[l]:"checkbox"===o?a:s})}else void 0!==e.value?R({...z,employee:e.value}):console.error("Invalid event or data provided to customerInfoChange.")},je=e=>{if(e instanceof Date){let l=new Date,s=l.getFullYear(),a=l.getMonth(),n=l.getDate();if(e.getFullYear()>s||e.getFullYear()===s&&e.getMonth()>a||e.getFullYear()===s&&e.getMonth()===a&&e.getDate()>n+1)return o.oR.warning("Das Startdatum darf nicht in der Zukunft liegen");Z({...T,startDate:e})}else if(e.target){const{name:l,value:s,type:a,checked:o}=e.target;if("radio"===a){const e=o?s:"";Z({...T,[l]:e})}else Z({...T,[l]:"checkbox"===a?o:s})}else void 0!==e.value?Z({...T,salution:e.value}):console.error("Invalid event or data provided to ContactChange.")},Ne=e=>{const{name:l,value:s}=e.target;V({...E,[l]:s})},be={startDeposit:J,nextBrand:Q,updateStamp:X,lastStamp:le,reminderStamp:ae,emergencyPass:ne},ge=e=>{const{name:l,value:s,type:a,checked:o}=e.target;q({...W,[l]:"checkbox"===a?o:s})},fe=e=>{const{name:l,checked:s}=e.target;re({...te,[l]:s})},[we,ye]=(0,a.useState)([]),ke=async()=>{try{var e;const l=await fetch("".concat(g,"/customer/get_record?email=").concat(null===b||void 0===b||null===(e=b.state)||void 0===e?void 0:e.email)),s=await l.json();de(s)}catch(l){console.error("Error fetching customer record:",l)}},De=async()=>{try{const e=await c.A.get("".concat(g,"/customer/get_record/").concat(null===M||void 0===M?void 0:M._id));console.log("data",e),S(null===e||void 0===e?void 0:e.data)}catch(e){console.log(e)}};let Ce={...z,clientStatus:_,dataCollection:G};const Pe={customer:ve,orderingMaterials:A,customerInfoStatu:Ce,those:B,customerContact:T,customerBills:E,customerDelivery:W,customerDeposit:be,customerBurial:te};(0,a.useEffect)((()=>{De(),ke(),(async()=>{try{const e=await fetch("".concat(g,"/user/get/employeeData")),l=await e.json();ue(null===l||void 0===l?void 0:l.data)}catch(e){console.error("Error fetching customer record:",e)}})()}),[f,D]);(0,a.useEffect)((()=>{var e,l,s,a,o,n,i,t,r,c,d,m,u,v,h,x,p,j,N,b,g,f,w,y,k,D,C,S,F,A,z,_,B,T,E,H,Y,G,W,J,Q,X,le,ae,ne,te;q({fname:(null===P||void 0===P||null===(e=P.customerDelivery)||void 0===e?void 0:e.fname)||(null===P||void 0===P||null===(l=P.customer)||void 0===l?void 0:l.fname),lname:(null===P||void 0===P||null===(s=P.customerDelivery)||void 0===s?void 0:s.lname)||(null===P||void 0===P||null===(a=P.customer)||void 0===a?void 0:a.lname),address:(null===P||void 0===P||null===(o=P.customerDelivery)||void 0===o?void 0:o.address)||(null===P||void 0===P||null===(n=P.customer)||void 0===n?void 0:n.street),plz:(null===P||void 0===P?void 0:P.plz)||(null===P||void 0===P||null===(i=P.customer)||void 0===i?void 0:i.plz),land:(null===P||void 0===P?void 0:P.land)||(null===P||void 0===P||null===(t=P.customer)||void 0===t?void 0:t.land),ort:(null===P||void 0===P||null===(r=P.customerDelivery)||void 0===r?void 0:r.ort)||(null===P||void 0===P||null===(c=P.customer)||void 0===c?void 0:c.street),phone:(null===P||void 0===P?void 0:P.phone)||(null===P||void 0===P||null===(d=P.customer)||void 0===d?void 0:d.phone),mobile:(null===P||void 0===P||null===(m=P.customerDelivery)||void 0===m?void 0:m.mobile)||(null===P||void 0===P||null===(u=P.customer)||void 0===u?void 0:u.phone),alreadyPaid:null===P||void 0===P||null===(v=P.customerDelivery)||void 0===v?void 0:v.alreadyPaid}),L({orderNumber:null===P||void 0===P||null===(h=P.orderingMaterials)||void 0===h?void 0:h.orderNumber,newsletterDate:null===P||void 0===P?void 0:P.created_at,extras:null===P||void 0===P||null===(x=P.orderingMaterials)||void 0===x?void 0:x.extras,newsletterSubscription:null===P||void 0===P||null===(p=P.orderingMaterials)||void 0===p?void 0:p.newsletterSubscription}),R({dataProtection:null===P||void 0===P||null===(j=P.customerInfoStatu)||void 0===j?void 0:j.dataProtection,employee:null===P||void 0===P||null===(N=P.customerInfoStatu)||void 0===N?void 0:N.employee,remarks:null===P||void 0===P||null===(b=P.customerInfoStatu)||void 0===b?void 0:b.remarks}),K(null===P||void 0===P||null===(g=P.customerInfoStatu)||void 0===g?void 0:g.dataCollection),O(null===P||void 0===P?void 0:P.those),Z({title:null===P||void 0===P||null===(f=P.customerContact)||void 0===f?void 0:f.title,salution:null===P||void 0===P||null===(w=P.customerContact)||void 0===w?void 0:w.salution,gender:null===P||void 0===P||null===(y=P.customerContact)||void 0===y?void 0:y.gender,fname:(null===P||void 0===P||null===(k=P.customerContact)||void 0===k?void 0:k.fname)||(null===M||void 0===M?void 0:M.fname),lname:(null===P||void 0===P||null===(D=P.customerContact)||void 0===D?void 0:D.lname)||(null===M||void 0===M?void 0:M.lname),startDate:null===P||void 0===P||null===(C=P.customer)||void 0===C?void 0:C.startDate}),V({billAddress:(null===P||void 0===P||null===(S=P.customerBills)||void 0===S?void 0:S.billAddress)||(null===P||void 0===P||null===(F=P.customer)||void 0===F?void 0:F.street),billPlz:(null===P||void 0===P||null===(A=P.customerBills)||void 0===A?void 0:A.billPlz)||(null===P||void 0===P||null===(z=P.customer)||void 0===z?void 0:z.plz),billLand:(null===P||void 0===P||null===(_=P.customerBills)||void 0===_?void 0:_.billLand)||(null===P||void 0===P||null===(B=P.customer)||void 0===B?void 0:B.land),billOrt:(null===P||void 0===P||null===(T=P.customerBills)||void 0===T?void 0:T.billOrt)||(null===P||void 0===P||null===(E=P.customer)||void 0===E?void 0:E.city)}),ie(null===P||void 0===P||null===(H=P.customerDeposit)||void 0===H?void 0:H.emergencyPass),$(null===P||void 0===P||null===(Y=P.customerDeposit)||void 0===Y?void 0:Y.startDeposit),U(null===P||void 0===P||null===(G=P.customerDeposit)||void 0===G?void 0:G.nextBrand),ee(null===P||void 0===P||null===(W=P.customerDeposit)||void 0===W?void 0:W.updateStamp),oe(null===P||void 0===P||null===(J=P.customerDeposit)||void 0===J?void 0:J.reminderStamp),se(null===P||void 0===P||null===(Q=P.customerDeposit)||void 0===Q?void 0:Q.lastStamp),re({termination:null===P||void 0===P||null===(X=P.customerBurial)||void 0===X?void 0:X.termination,terminationDeath:null===P||void 0===P||null===(le=P.customerBurial)||void 0===le?void 0:le.terminationDeath,notTermination:null===P||void 0===P||null===(ae=P.customerBurial)||void 0===ae?void 0:ae.notTermination,financialReasons:null===P||void 0===P||null===(ne=P.customerBurial)||void 0===ne?void 0:ne.financialReasons}),O(null===P||void 0===P?void 0:P.those),I(null===P||void 0===P||null===(te=P.customer)||void 0===te?void 0:te.status)}),[P]);return(0,d.jsxs)("div",{className:"inner-page-wrap",children:[(0,d.jsx)(n.default,{getCustomerData:ce,updateData:y}),(0,d.jsxs)("div",{className:"tab-content px-3",children:[(0,d.jsx)("div",{className:"tab-title",children:(0,d.jsx)("h4",{children:"KlientInnen"})}),(0,d.jsx)("div",{children:(0,d.jsx)("div",{className:"row",children:(0,d.jsxs)("div",{className:"col",children:[(0,d.jsxs)("div",{className:"block-wrap",children:[(0,d.jsx)("h3",{children:"Materialbestellung"}),(0,d.jsx)("div",{className:"row-wrap",children:(0,d.jsx)("div",{children:(0,d.jsxs)("div",{className:"row justify-content-between align-items-center",children:[(0,d.jsx)("div",{className:"col-md-3",children:(0,d.jsxs)("div",{className:"d-flex",children:[(0,d.jsx)("label",{htmlFor:"inputPassword",className:"col-sm-10 col-form-label",children:"Bestellte Anzahl Frageb\xf6gen"}),(0,d.jsx)("input",{type:"number",value:A.orderNumber,name:"orderNumber",onChange:he,className:"form-control"})]})}),(0,d.jsx)("div",{className:"col-md-2",children:(0,d.jsxs)("div",{className:"d-flex",children:[(0,d.jsx)("label",{htmlFor:"inputPassword",className:"col-form-label",children:"Extras"}),(0,d.jsx)("input",{type:"text",name:"extras",value:A.extras,onChange:he,className:"form-control w-100",placeholder:"Extras"})]})}),(0,d.jsx)("div",{className:"col-md-3",children:(0,d.jsxs)("div",{className:"d-flex",children:[(0,d.jsx)("label",{className:"col-form-label",children:"Newsletter-Datum"}),(0,d.jsx)(t.default,{className:"form-control",selected:A.newsletterDate,onChange:he})]})}),(0,d.jsx)("div",{className:"col-md-4",children:(0,d.jsxs)("div",{className:"d-flex",children:[(0,d.jsx)("label",{className:"col-form-label",children:"Newsletter-Abonnement"}),(0,d.jsxs)("div",{className:"d-flex",children:[(0,d.jsxs)("div",{className:"radio-check-wrap",children:[(0,d.jsx)("input",{type:"radio",name:"newsletterSubscription",value:"active",checked:"active"===A.newsletterSubscription,onChange:he}),(0,d.jsx)("span",{children:"Aktiv"})]}),(0,d.jsxs)("div",{className:"radio-check-wrap",children:[(0,d.jsx)("input",{type:"radio",name:"newsletterSubscription",value:"inactive",checked:"inactive"===A.newsletterSubscription,onChange:he}),(0,d.jsx)("span",{children:"Inaktiv"})]})]})]})})]})})}),(0,d.jsx)("h3",{children:"Status"}),(0,d.jsx)("div",{className:"border-bottom mb-3",children:(0,d.jsxs)("div",{children:[(0,d.jsxs)("div",{className:"row",children:[(0,d.jsx)("div",{className:"col-sm-6",children:(0,d.jsxs)("div",{className:"row mb-3",children:[(0,d.jsx)("label",{className:"col-sm-3 col-form-label",children:"Status"}),(0,d.jsx)("div",{className:"col-sm-6",children:(0,d.jsx)("div",{className:"card flex justify-content-center p-3",children:[{name:"HVD-PV",code:"0"},{name:"SPV-alt",code:"1"},{name:"OPV-alt",code:"2"},{name:"DauerspenderInnen",code:"3"},{name:"Materialbestellung",code:"4"},{name:"Newsletter-Abonnent",code:"5"},{name:"Offen",code:"6"}].map((e=>(0,d.jsxs)("div",{className:"checkbox-container",children:[(0,d.jsx)("input",{type:"checkbox",checked:_&&_.some((l=>l.code===e.code)),onChange:l=>((e,l)=>{e.target.checked?I([..._,l]):I(_.filter((e=>e.code!==l.code)))})(l,e)}),(0,d.jsx)("label",{children:e.name})]},e.code)))})})]})}),(0,d.jsx)("div",{className:"col-sm-6 mb-3",children:(0,d.jsxs)("div",{className:"row",children:[(0,d.jsx)("label",{className:"col-sm-4 col-form-label",children:"Bemerkungen"}),(0,d.jsx)("div",{className:"col-sm-6",children:(0,d.jsx)("textarea",{value:z.remarks,name:"remarks",onChange:pe,className:"form-control",rows:10})})]})})]}),(0,d.jsxs)("div",{className:"row",children:[(0,d.jsx)("div",{className:"col-sm-6",children:(0,d.jsxs)("div",{className:"row mb-3",children:[(0,d.jsx)("label",{className:"col-sm-3 col-form-label",children:"MitarbeiterInnen"}),(0,d.jsx)("div",{className:"col-sm-6",children:(0,d.jsx)(r.Ay,{className:"w-100",placeholder:"MitarbeiterInnen",options:null===me||void 0===me?void 0:me.map((e=>({value:e.username,label:e.username}))),onChange:pe,value:{value:z.employee||"MitarbeiterInnen",label:z.employee||"MitarbeiterInnen"},name:"employee"})})]})}),(0,d.jsx)("div",{className:"col-sm-6",children:(0,d.jsxs)("div",{className:"row mb-3",children:[(0,d.jsx)("label",{htmlFor:"inputDate",className:"col-sm-4 col-form-label",children:"Datenerfassung"}),(0,d.jsx)("div",{className:"col-sm-6",children:(0,d.jsx)(t.default,{className:"form-control",selected:G,onChange:e=>{let l=new Date,s=l.getFullYear(),a=l.getMonth(),n=l.getDate();if(e.getFullYear()>s||e.getFullYear()===s&&e.getMonth()>a||e.getFullYear()===s&&e.getMonth()===a&&e.getDate()>n+1)return o.oR.warning("Das Startdatum darf nicht in der Zukunft liegen");K(e)}})})]})})]})]})}),(0,d.jsx)("h3",{children:"Quelle"}),(0,d.jsx)("div",{className:"border-0",children:(0,d.jsx)("div",{children:(0,d.jsxs)("div",{className:"row",children:[(0,d.jsx)("div",{className:"col-sm-6",children:(0,d.jsxs)("div",{className:"row",children:[(0,d.jsx)("label",{className:"col-sm-3 col-form-label",children:"Auswahl"}),(0,d.jsx)("div",{className:"col-sm-6",children:(0,d.jsx)("div",{className:"input-group px-2",children:(0,d.jsx)(r.Ay,{className:"w-100",options:[{value:"order",label:"Auftrag (Online-Maske) "},{value:"contact form",label:"Kontaktformular"},{value:"order print",label:"Auftrag / Print"},{value:"website",label:"Webseite"},{value:"e-mail",label:"E-Mail"},{value:"call",label:"Anruf"},{value:"letter",label:"Zuschrift (Post)"},{value:"HVD regional association",label:"HVD-Landesverband"},{value:"Regional association MOL",label:"Regionalverband MOL"},{value:"Northern Regional Association",label:"Regionalverband NORD"},{value:"Regional association",label:"Regionalverband Potsdam"},{value:"inter",label:"intern"},{value:"anderes",label:"anderes"}],onChange:e=>{O(e)},value:B,name:"those",placeholder:"Auswahl"})})})]})}),(0,d.jsx)("div",{className:"col-sm-6",children:(0,d.jsxs)("div",{className:"row mb-3",children:[(0,d.jsx)("label",{htmlFor:"inputPassword",className:"col-sm-4 col-form-label",children:"Zustimmung Datenschutz"}),(0,d.jsx)("div",{className:"col-sm-4 mt-2",children:(0,d.jsxs)("div",{className:"radio-check-wrap w-100 h-100",children:[(0,d.jsx)("input",{type:"checkbox",name:"dataProtection",onChange:pe,checked:z.dataProtection}),(0,d.jsx)("span",{})]})})]})})]})})})]}),(0,d.jsxs)("div",{className:"block-wrap",children:[(0,d.jsx)("h3",{children:"Kontaktdaten"}),(0,d.jsxs)("div",{children:[(0,d.jsxs)("div",{className:"row",children:[(0,d.jsx)("div",{className:"col-sm-6",children:(0,d.jsxs)("div",{className:"row",children:[(0,d.jsx)("label",{htmlFor:"inputPassword",className:"col-sm-4 col-form-label",children:"Titel"}),(0,d.jsx)("div",{className:"col-sm-6",children:(0,d.jsx)("input",{type:"text",value:T.title,name:"title",onChange:je,className:"form-control",placeholder:"Titel"})})]})}),(0,d.jsx)("div",{className:"col-sm-6",children:(0,d.jsxs)("div",{className:"row",children:[(0,d.jsx)("label",{htmlFor:"inputPassword",className:"col-sm-4 col-form-label",children:"Geburtsdatum"}),(0,d.jsx)("div",{className:"col-sm-6",children:(0,d.jsx)(t.default,{className:"form-control",selected:T.startDate,onChange:je})})]})})]}),(0,d.jsxs)("div",{className:"row mb-3",children:[(0,d.jsx)("div",{className:"col-sm-6",children:(0,d.jsxs)("div",{className:"row",children:[(0,d.jsx)("label",{htmlFor:"inputPassword",className:"col-sm-4 col-form-label",children:"Anrede"}),(0,d.jsx)("div",{className:"col-sm-6",children:(0,d.jsx)(r.Ay,{className:"w-100",options:xe,onChange:je,value:xe.find((e=>e.value===T.salution)),name:"salution",placeholder:"Anrede"})})]})}),(0,d.jsx)("div",{className:"col-sm-6",children:(0,d.jsxs)("div",{className:"row",children:[(0,d.jsx)("label",{htmlFor:"inputPassword",className:"col-sm-4 col-form-label",children:"Geschlecht"}),(0,d.jsx)("div",{className:"col-sm-6 mt-2",children:(0,d.jsxs)("div",{className:"radio-wrap",children:[(0,d.jsxs)("div",{className:"radio-input",children:[(0,d.jsx)("input",{type:"radio",id:"male",value:"male",name:"gender",onChange:je,checked:"male"===T.gender}),(0,d.jsx)("span",{children:"M\xe4nnlich"})]}),(0,d.jsxs)("div",{className:"radio-input",children:[(0,d.jsx)("input",{type:"radio",id:"female",value:"female",name:"gender",onChange:je,checked:"female"===T.gender}),(0,d.jsx)("span",{children:"Weiblich"})]}),(0,d.jsxs)("div",{className:"radio-input",children:[(0,d.jsx)("input",{type:"radio",id:"divers",value:"other",name:"gender",onChange:je,checked:"other"===T.gender}),(0,d.jsx)("span",{children:"Divers"})]})]})})]})})]}),(0,d.jsxs)("div",{className:"row",children:[(0,d.jsx)("div",{className:"col-sm-6",children:(0,d.jsxs)("div",{className:"row",children:[(0,d.jsx)("label",{htmlFor:"inputPassword",className:"col-sm-4 col-form-label",children:"Vornamen"}),(0,d.jsx)("div",{className:"col-sm-6",children:(0,d.jsx)("input",{type:"text",placeholder:"Vornamen",value:T.fname,name:"fname",onChange:je,className:"form-control",id:"inputPassword"})})]})}),(0,d.jsx)("div",{className:"col-sm-6",children:(0,d.jsxs)("div",{className:"row",children:[(0,d.jsx)("label",{htmlFor:"inputPassword",className:"col-sm-4 col-form-label",children:"Name"}),(0,d.jsx)("div",{className:"col-sm-6",children:(0,d.jsx)("input",{type:"text",className:"form-control",id:"inputPassword",placeholder:"Name",name:"lname",onChange:je,value:T.lname})})]})})]}),(0,d.jsxs)("div",{className:"row",children:[(0,d.jsx)("div",{className:"col-sm-6",children:(0,d.jsxs)("div",{className:"row",children:[(0,d.jsx)("label",{htmlFor:"inputPassword",className:"col-sm-4 col-form-label",children:"E-Mail-Adresse"}),(0,d.jsx)("div",{className:"col-sm-6",children:(0,d.jsx)("input",{type:"email",disabled:!0,name:"email",placeholder:"E-Mail-Adresse",value:ve.email,className:"form-control",id:"inputPassword"})})]})}),(0,d.jsx)("div",{className:"col-sm-6",children:(0,d.jsxs)("div",{className:"row",children:[(0,d.jsx)("label",{htmlFor:"inputPassword",className:"col-sm-4 col-form-label",children:"Telefon"}),(0,d.jsx)("div",{className:"col-sm-6",children:(0,d.jsx)("input",{onChange:e=>{const l=e.target.value.replace(/[^0-9+]/g,"");/^\+?[0-9]*$/.test(l)&&ge({target:{name:"phone",value:l}})},name:"phone",value:null===W||void 0===W?void 0:W.phone,className:"form-control",type:"tel",placeholder:"Telefon",id:"inputTelephone",maxLength:30,minLength:3})})]})})]}),(0,d.jsxs)("div",{className:"row",children:[(0,d.jsx)("div",{className:"col-sm-6",children:(0,d.jsxs)("div",{className:"row",children:[(0,d.jsx)("label",{htmlFor:"inputPassword",className:"col-sm-4 col-form-label",children:"Mobil"}),(0,d.jsx)("div",{className:"col-sm-6",children:(0,d.jsx)("input",{onChange:e=>{const l=e.target.value.replace(/[^0-9+]/g,"");/^\+?[0-9]*$/.test(l)&&ge({target:{name:"mobile",value:l}})},name:"mobile",value:null===W||void 0===W?void 0:W.mobile,type:"tel",placeholder:"Mobil",className:"form-control",id:"inputTelephone",maxLength:30,minLength:3})})]})}),(0,d.jsx)("div",{className:"col-sm-6",children:(0,d.jsxs)("div",{className:"row",children:[(0,d.jsx)("label",{className:"col-sm-4 col-form-label",children:"Bereits bezahlt"}),(0,d.jsx)("div",{className:"col-sm-6 mt-2",children:(0,d.jsxs)("div",{className:"radio-check-wrap",children:[(0,d.jsx)("input",{onChange:ge,name:"alreadyPaid",checked:null===W||void 0===W?void 0:W.alreadyPaid,type:"checkbox"}),(0,d.jsx)("span",{children:"ja"})]})})]})})]}),(0,d.jsx)("h6",{children:"Adresse"}),(0,d.jsxs)("div",{className:"row",children:[(0,d.jsxs)("div",{className:"col-sm-6",children:[(0,d.jsxs)("div",{className:"row",children:[(0,d.jsx)("label",{htmlFor:"inputPassword",className:"col-sm-4 col-form-label",children:"Stra\xdfe mit Hausnummer"}),(0,d.jsx)("div",{className:"col-sm-6",children:(0,d.jsx)("input",{type:"text",onChange:Ne,name:"billAddress",placeholder:"Stra\xdfe mit Hausnummer",value:E.billAddress,className:"form-control",id:"inputPassword"})})]}),(0,d.jsxs)("div",{className:"row",children:[(0,d.jsx)("label",{htmlFor:"inputPassword",className:"col-sm-4 col-form-label",children:"PLZ"}),(0,d.jsx)("div",{className:"col-sm-6",children:(0,d.jsx)("input",{type:"tel",value:E.billPlz,onChange:e=>{const l=e.target.value.replace(/[^0-9]/g,"");V({...E,billPlz:l})},placeholder:"PLZ",className:"form-control",id:"inputPassword",maxLength:6,minLength:3,required:!0})})]})]}),(0,d.jsxs)("div",{className:"col-sm-6",children:[(0,d.jsxs)("div",{className:"row",children:[(0,d.jsx)("label",{htmlFor:"inputText",className:"col-sm-4 col-form-label",children:"Ort"}),(0,d.jsx)("div",{className:"col-sm-6",children:(0,d.jsx)("input",{type:"text",onChange:Ne,name:"billOrt",placeholder:"Ort",value:E.billOrt,className:"form-control",id:"inputText"})})]}),(0,d.jsxs)("div",{className:"row",children:[(0,d.jsx)("label",{htmlFor:"inputPassword",className:"col-sm-4 col-form-label",children:"Land"}),(0,d.jsx)("div",{className:"col-sm-6",children:(0,d.jsx)("input",{type:"text",name:"billLand",placeholder:"Land",onChange:e=>{const l=e.target.value.replace(/[^a-zA-Z\s'-]/g,"");Ne({target:{name:"billLand",value:l}})},value:E.billLand,className:"form-control",id:"inputPassword"})})]})]})]}),(0,d.jsx)("h6",{children:"Lieferadresse c/o"}),(0,d.jsxs)("div",{className:"row",children:[(0,d.jsxs)("div",{className:"col-sm-6",children:[(0,d.jsxs)("div",{className:"row",children:[(0,d.jsx)("label",{htmlFor:"inputPassword",className:"col-sm-4 col-form-label",children:"Vornamen"}),(0,d.jsx)("div",{className:"col-sm-6",children:(0,d.jsx)("input",{type:"text",onChange:ge,name:"fname",placeholder:"Vornamen",value:null===W||void 0===W?void 0:W.fname,className:"form-control",id:"inputPassword"})})]}),(0,d.jsxs)("div",{className:"row",children:[(0,d.jsx)("label",{htmlFor:"inputPassword",className:"col-sm-4 col-form-label",children:"Stra\xdfe mit Hausnummer"}),(0,d.jsx)("div",{className:"col-sm-6",children:(0,d.jsx)("input",{type:"text",onChange:ge,name:"address",placeholder:"Stra\xdfe mit Hausnummer",value:null===W||void 0===W?void 0:W.address,className:"form-control",id:"inputPassword"})})]}),(0,d.jsxs)("div",{className:"row",children:[(0,d.jsx)("label",{htmlFor:"inputPassword",className:"col-sm-4 col-form-label",children:"Ort"}),(0,d.jsx)("div",{className:"col-sm-6",children:(0,d.jsx)("input",{type:"text",onChange:ge,name:"ort",placeholder:"Ort",value:null===W||void 0===W?void 0:W.ort,className:"form-control",id:"inputPassword"})})]})]}),(0,d.jsxs)("div",{className:"col-sm-6",children:[(0,d.jsxs)("div",{className:"row",children:[(0,d.jsx)("label",{className:"col-sm-4 col-form-label",children:"Name"}),(0,d.jsx)("div",{className:"col-sm-6",children:(0,d.jsx)("input",{type:"text",placeholder:"Name",onChange:ge,name:"lname",value:null===W||void 0===W?void 0:W.lname,className:"form-control"})})]}),(0,d.jsxs)("div",{className:"row",children:[(0,d.jsx)("label",{htmlFor:"inputPassword",className:"col-sm-4 col-form-label",children:"PLZ"}),(0,d.jsx)("div",{className:"col-sm-6",children:(0,d.jsx)("input",{type:"tel",value:W.plz,onChange:e=>{const l=e.target.value.replace(/[^0-9]/g,"");q({...W,plz:l})},placeholder:"PLZ",className:"form-control",id:"inputPassword",maxLength:6,minLength:3,required:!0})})]}),(0,d.jsxs)("div",{className:"row",children:[(0,d.jsx)("label",{htmlFor:"inputPassword",className:"col-sm-4 col-form-label",children:"Land"}),(0,d.jsx)("div",{className:"col-sm-6",children:(0,d.jsx)("input",{type:"text",name:"land",placeholder:"Land",onChange:e=>{const l=e.target.value.replace(/[^a-zA-Z\s'-]/g,"");ge({target:{name:"land",value:l}})},value:null===W||void 0===W?void 0:W.land,className:"form-control",id:"inputPassword"})})]})]})]})]})]}),(0,d.jsxs)("div",{className:"block-wrap",children:[(0,d.jsx)("h3",{children:"Hinterlegung"}),(0,d.jsxs)("div",{children:[(0,d.jsxs)("div",{className:"row",children:[(0,d.jsxs)("div",{className:"col-sm-6",children:[(0,d.jsxs)("div",{className:"row",children:[(0,d.jsx)("label",{htmlFor:"inputPassword",className:"col-sm-4 col-form-label",children:"Hinterlegungsbeginn"}),(0,d.jsx)("div",{className:"col-sm-6",children:(0,d.jsx)(t.default,{className:"form-control",selected:J,onChange:(e,l)=>{$(e)}})})]}),(0,d.jsxs)("div",{className:"row",children:[(0,d.jsx)("label",{htmlFor:"inputPassword",className:"col-sm-4 col-form-label",children:"Versand n\xe4chste Marke"}),(0,d.jsx)("div",{className:"col-sm-6",children:(0,d.jsx)(t.default,{className:"form-control",selected:Q,onChange:e=>{U(e)}})})]})]}),(0,d.jsxs)("div",{className:"col-sm-6",children:[(0,d.jsxs)("div",{className:"row",children:[(0,d.jsx)("label",{htmlFor:"inputPassword",className:"col-sm-4 col-form-label",children:"Versand letzte Marke"}),(0,d.jsx)("div",{className:"col-sm-6",children:(0,d.jsx)(t.default,{className:"form-control",selected:X,onChange:e=>{ee(e)}})})]}),(0,d.jsxs)("div",{className:"row",children:[(0,d.jsx)("label",{className:"col-sm-4 col-form-label",children:"R\xfccksendung letzte Marke"}),(0,d.jsx)("div",{className:"col-sm-6",children:(0,d.jsx)(t.default,{className:"form-control",selected:le,onChange:e=>{se(e)}})})]})]})]}),(0,d.jsxs)("div",{className:"row ",children:[(0,d.jsx)("div",{className:"col-sm-6 mt-2",style:{padding:"0px"},children:(0,d.jsxs)("div",{className:"radio-check-wrap",children:[(0,d.jsx)("input",{type:"checkbox",onChange:e=>{ie(e.target.checked)},checked:ne,name:"emergencyPass"})," ",(0,d.jsx)("span",{children:" Notfallpass"})]})}),(0,d.jsx)("div",{className:"col-sm-6",children:(0,d.jsxs)("div",{className:"row",children:[(0,d.jsx)("label",{htmlFor:"inputPassword",className:"col-sm-4 col-form-label",children:"Erinnerung Marke"}),(0,d.jsx)("div",{className:"col-sm-6",children:(0,d.jsx)(t.default,{className:"form-control",selected:ae,onChange:e=>{oe(e)}})})]})})]})]})]}),(0,d.jsxs)("div",{className:"block-wrap",children:[(0,d.jsx)("h3",{children:"Beendigung"}),(0,d.jsx)("div",{children:(0,d.jsxs)("div",{className:"row",children:[(0,d.jsx)("div",{className:"col-md-3 col-sm-6",style:{padding:"0px"},children:(0,d.jsxs)("div",{className:"radio-check-wrap w-100",children:[(0,d.jsx)("input",{type:"checkbox",onChange:fe,checked:te.termination,name:"termination"}),(0,d.jsx)("span",{children:"Auf eigenen Wunsch"})]})}),(0,d.jsx)("div",{className:"col-md-3 col-sm-6",style:{padding:"0px"},children:(0,d.jsxs)("div",{className:"radio-check-wrap w-100",children:[(0,d.jsx)("input",{type:"checkbox",onChange:fe,checked:te.terminationDeath,name:"terminationDeath"}),(0,d.jsx)("span",{children:" Durch Tod"})]})}),(0,d.jsx)("div",{className:"col-md-3 col-sm-6",style:{padding:"0px"},children:(0,d.jsxs)("div",{className:"radio-check-wrap w-100",children:[(0,d.jsx)("input",{type:"checkbox",onChange:fe,checked:te.notTermination,name:"notTermination"}),(0,d.jsx)("span",{children:"Weil nicht ermittelbar"})]})}),(0,d.jsx)("div",{className:"col-md-3 col-sm-6",style:{padding:"0px"},children:(0,d.jsxs)("div",{className:"radio-check-wrap w-100",children:[(0,d.jsx)("input",{type:"checkbox",onChange:fe,checked:te.financialReasons,name:"financialReasons"}),(0,d.jsx)("span",{children:" Aus finanziellen Gr\xfcnden"})]})})]})})]})]})})}),(0,d.jsxs)("div",{className:"text-end mx-3 mb-3 pb-3",children:[(0,d.jsx)("button",{onClick:()=>{N("/customerlist")},type:"button",className:"btn btn",style:{background:"#d04545",color:"white"},children:"Abbrechen"}),"\xa0 \xa0",(0,d.jsx)("button",{onClick:async e=>{if(e.preventDefault(),0===(null===_||void 0===_?void 0:_.length))return o.oR.warning("Das Statusfeld ist erforderlich");let l=new Date;if((null===T||void 0===T?void 0:T.startDate)>l)return o.oR.warning("Das Geburtsdatum darf nicht in der Zukunft liegen.");if(G>l)return o.oR.warning("Die Datenerfassung darf nicht in der Zukunft liegen.");try{let e=await fetch("".concat(g,"/customer/get_record/edit/").concat(null===M||void 0===M?void 0:M._id),{method:"put",headers:{"Content-Type":"application/json"},body:JSON.stringify(Pe)}),l=await e.json();console.log("first",l),"Customer updated successfully"===(null===l||void 0===l?void 0:l.message)&&(De(),o.oR.success("Kundeninfo erfolgreich gespeichert"),ke(),k(!y))}catch(s){console.log("Error saving data:",s),o.oR.error("Fehler beim Speichern der Daten. Bitte versuche es erneut.")}},type:"button",style:{background:"#0b5995",color:"white"},className:"btn btn",children:"Speichern"})]})]}),(0,d.jsx)(o.N9,{})]})},u=a.memo(m)},72798:()=>{},9910:()=>{}}]);
//# sourceMappingURL=20.df2f9792.chunk.js.map