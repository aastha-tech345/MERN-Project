"use strict";(self.webpackChunk_coreui_coreui_free_react_admin_template=self.webpackChunk_coreui_coreui_free_react_admin_template||[]).push([[703,940],{26940:(e,l,a)=>{a.r(l),a.d(l,{default:()=>s});var o=a(65043),n=a(70579);function s(e){let{onChange:l,value:a,placeholder:s}=e;const[t,c]=(0,o.useState)("");(0,o.useEffect)((()=>{if("string"===typeof a){const e=new Date(a);isNaN(e.getTime())?c(""):c(i(e))}else a instanceof Date&&!isNaN(a.getTime())?c(i(a)):c("")}),[a]);const i=e=>{var l,a,o,n,s;const t=null===e||void 0===e||null===(l=e.getDate())||void 0===l||null===(a=l.toString())||void 0===a?void 0:a.padStart(2,"0"),c=null===(o=(null===e||void 0===e?void 0:e.getMonth())+1)||void 0===o||null===(n=o.toString())||void 0===n?void 0:n.padStart(2,"0"),i=null===e||void 0===e||null===(s=e.getFullYear())||void 0===s?void 0:s.toString();return"".concat(t,".").concat(c,".").concat(i)};return(0,n.jsx)("div",{children:(0,n.jsx)("input",{type:"text",onChange:e=>{var l,a;let o=null===(l=e.target)||void 0===l?void 0:l.value,n="";o=null===(a=o)||void 0===a?void 0:a.replace(/\D/g,"");for(let t=0;t<(null===(s=o)||void 0===s?void 0:s.length);t++){var s;2!==t&&4!==t||(n+="."),n+=o[t]}c(n)},onBlur:e=>{var a;const o=null===t||void 0===t||null===(a=t.split("."))||void 0===a?void 0:a.map((e=>parseInt(e,10)));let[n,s,c]=o;if(3===(null===o||void 0===o?void 0:o.length)){c<100?c+=1900:c>=2e3&&(new Date).getFullYear();const e=new Date(c,s-1,n);l(e)}else if(1===(null===o||void 0===o?void 0:o.length)){const e=o[0];if(e<100){let a;a=e<50?e+2e3:e+1900;const o=new Date(a,0,1);l(o)}}},value:t,placeholder:s,className:"form-control"})})}},35703:(e,l,a)=>{a.r(l),a.d(l,{default:()=>u});var o=a(65043),n=a(47503),s=(a(92342),a(8124)),t=a(73216),c=a(95870),i=a(26940),r=a(70579);const d=()=>{var e;const[l,a]=(0,o.useState)([]);let d=localStorage.getItem("customerRecord"),u=JSON.parse(d);const v=(0,t.Zp)(),m="http://95.217.77.208:4142",[h,g]=(0,o.useState)([]),[p,b]=(0,o.useState)([]),[x,j]=(0,o.useState)(null===l||void 0===l?void 0:l.colleague),[f,N]=(0,o.useState)(null===l||void 0===l?void 0:l.invoiceDate),[y,w]=(0,o.useState)(null===l||void 0===l?void 0:l.deliveryDate),[S,k]=(0,o.useState)(null===l||void 0===l?void 0:l.product),[_,D]=(0,o.useState)(""),[P,C]=(0,o.useState)(""),[V,A]=(0,o.useState)(null===l||void 0===l?void 0:l.paymentMethod),[F,R]=(0,o.useState)(null===l||void 0===l?void 0:l.invoiceAmount),[M,E]=(0,o.useState)();null===p||void 0===p||null===(e=p.customerDelivery)||void 0===e||e.alreadyPaid;const[T,I]=(0,o.useState)(!1),z=[{value:"payPal",label:"PayPal"},{value:"barzahlung",label:"Barzahlung"},{value:"rechnung",label:"Rechnung"},{value:"klarna",label:"Klarna"},{value:"kreditkarte",label:"Kreditkarte (f\xfcr die Zukunft)"},{value:"andere",label:"Andere"}],B=[{value:"HVD-PV",label:"HVD-PV"},{value:"Vortrag",label:"Vortrag"},{value:"SPV",label:"SPV"},{value:"OPV",label:"OPV"}];return(0,o.useEffect)((()=>{(async()=>{try{const e=await fetch("".concat(m,"/invoice/get_invoice/").concat(u._id)),l=await e.json();a(l)}catch(e){console.error("Error fetching customer record:",e)}})(),(async()=>{try{const e=await fetch("".concat(m,"/customer/get_record/").concat(u._id)),l=await e.json();b(l)}catch(e){console.error("Error fetching employee data:",e)}})(),(async()=>{try{const e=await fetch("".concat(m,"/user/get/employeeData"));if(!e.ok)throw new Error("HTTP error! Status: ".concat(e.status));const{data:l}=await e.json();g(l)}catch(e){console.error("Error fetching employee data:",e)}})(),I()}),[]),(0,o.useEffect)((()=>{j(null===l||void 0===l?void 0:l.colleague),N(null===l||void 0===l?void 0:l.invoiceDate),w(null===l||void 0===l?void 0:l.deliveryDate),k(null===l||void 0===l?void 0:l.product),A(null===l||void 0===l?void 0:l.paymentMethod),R(null===l||void 0===l?void 0:l.invoiceAmount),D(null===l||void 0===l?void 0:l.incoming_payment),E(null===l||void 0===l?void 0:l.transaction_no)}),[l]),(0,o.useEffect)((()=>{_&&0!==_.length?I(!0):I(!1)}),[_]),(0,r.jsx)("div",{className:"inner-page-wrap",children:(0,r.jsxs)("div",{style:{background:"#fff"},children:[(0,r.jsx)(s.default,{}),(0,r.jsxs)("div",{className:"tab-content",children:[(0,r.jsx)("div",{className:"tab-title",children:(0,r.jsx)("h4",{className:"mx-3",children:"Rechnung"})}),(0,r.jsx)("hr",{className:"mx-3"}),(0,r.jsx)("div",{className:"container-fluid",children:(0,r.jsx)("div",{className:"row",children:(0,r.jsx)("div",{className:"col",children:(0,r.jsx)("div",{className:"block-wrap",children:(0,r.jsxs)("div",{className:"container-fluid",children:[(0,r.jsxs)("div",{className:"row",children:[(0,r.jsx)("div",{className:"col-sm-6",children:(0,r.jsxs)("div",{className:"row",children:[(0,r.jsx)("label",{htmlFor:"product",className:"col-sm-4 col-form-label",children:"Transaktionsnr"}),(0,r.jsx)("div",{className:"col-sm-6",children:(0,r.jsx)("input",{className:"form-control",value:M,onChange:e=>{E(e.target.value)},disabled:!0,placeholder:"Transaktionsnr"})})]})}),(0,r.jsx)("div",{className:"col-sm-6",children:(0,r.jsxs)("div",{className:"row",children:[(0,r.jsx)("label",{htmlFor:"product",className:"col-sm-4 col-form-label",children:"Zahlungseingang"}),(0,r.jsx)("div",{className:"col-sm-6",children:(0,r.jsx)("input",{className:"form-control",placeholder:"Zahlungseingang",value:_,onChange:e=>{D(e.target.value)},disabled:"barzahlung"!==V})})]})})]}),(0,r.jsxs)("div",{className:"row",children:[(0,r.jsxs)("div",{className:"col-sm-6",children:[(0,r.jsxs)("div",{className:"row mb-3",children:[(0,r.jsx)("label",{htmlFor:"product",className:"col-sm-4 col-form-label",children:"Produkt"}),(0,r.jsx)("div",{className:"col-sm-6",children:(0,r.jsx)(c.Ay,{className:"w-100",options:B,onChange:e=>k((null===e||void 0===e?void 0:e.value)||""),value:B.find((e=>e.value===S)),name:"product",placeholder:"HVD-PV"})})]}),(0,r.jsxs)("div",{className:"row",children:[(0,r.jsx)("label",{htmlFor:"invoiceAmount",className:"col-sm-4 col-form-label",children:"Rechnungsbetrag eintragen"}),(0,r.jsx)("div",{className:"col-sm-6",children:(0,r.jsx)("input",{type:"text",placeholder:"Rechnungsbetrag eintragen",className:"form-control",name:"invoiceAmount",value:F,onChange:e=>{const l=e.target.value.replace(/\D/g,"");R(l)}})})]}),(0,r.jsxs)("div",{className:"mb-6 row",children:[(0,r.jsx)("label",{htmlFor:"invoiceDate",className:"col-sm-4 col-form-label",children:"Rechnungsdatum"}),(0,r.jsx)("div",{className:"col-sm-6",children:(0,r.jsx)(i.default,{value:f,onChange:e=>{N(e)},placeholder:"Rechnungsdatum"})})]}),(0,r.jsxs)("div",{className:"mb-6 row",children:[(0,r.jsx)("label",{htmlFor:"colleague",className:"col-sm-4 col-form-label",children:"MitarbeiterInnen"}),(0,r.jsx)("div",{className:"col-sm-6",children:(0,r.jsx)(c.Ay,{className:"w-100",placeholder:"MitarbeiterInnen",options:(null===h||void 0===h?void 0:h.map((e=>({value:e.username,label:e.username}))))||[],onChange:e=>j((null===e||void 0===e?void 0:e.value)||""),value:{value:x||"MitarbeiterInnen",label:x||"MitarbeiterInnen"},name:"colleague"})})]})]}),(0,r.jsxs)("div",{className:"col-sm-6",children:[(0,r.jsxs)("div",{className:"mb-6 row",children:[(0,r.jsx)("label",{htmlFor:"alreadyPaid",className:"col-sm-4 mb-2 col-form-label",children:"Bereits bezahlt"}),(0,r.jsxs)("div",{className:"col-sm-6 radio-check-wrap",children:[(0,r.jsx)("input",{readOnly:!0,type:"checkbox",name:"alreadyPaid",checked:T,onChange:e=>{I(e.target.checked)},onClick:e=>e.stopPropagation()}),(0,r.jsx)("span",{})]})]}),(0,r.jsxs)("div",{className:"row mb-3",children:[(0,r.jsx)("label",{htmlFor:"paymentMethod",className:"col-sm-4 col-form-label",children:"Zahlungsart"}),(0,r.jsx)("div",{className:"col-sm-6",children:(0,r.jsx)(c.Ay,{className:"w-100",options:z,onChange:e=>{A((null===e||void 0===e?void 0:e.value)||"")},value:z.find((e=>e.value===V)),name:"paymentMethod",placeholder:"Barzahlung"})})]}),(0,r.jsxs)("div",{className:"row",children:[(0,r.jsx)("label",{htmlFor:"deliveryDate",className:"col-sm-4 col-form-label",children:"Lieferdatum"}),(0,r.jsx)("div",{className:"col-sm-6",children:(0,r.jsx)(i.default,{value:y,onChange:e=>{w(e)},placeholder:"Lieferdatum"})})]})]})]})]})})})})}),(0,r.jsxs)("div",{className:"text-end mx-3",children:[(0,r.jsx)("button",{type:"button",onClick:()=>{localStorage.removeItem("customerRecord"),v("/customer/customer_info")},className:"btn btn",style:{background:"#d04545",color:"white"},children:"Abbrechen"}),"\xa0 \xa0",(0,r.jsx)("button",{onClick:async()=>{try{const e={product:S,alreadyPaid:T,paymentMethod:V,invoiceAmount:F,invoiceDate:f,deliveryDate:y,employeeData:h,colleague:x,transaction_no:M,incoming_payment:_,customer_id:null===u||void 0===u?void 0:u._id},l=await fetch("".concat(m,"/invoice/get_invoice/").concat(null===u||void 0===u?void 0:u._id),{method:"put",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)});if(!l.ok)throw new Error("HTTP error! Status: ".concat(l.status));n.oR.success("Rechnungsdaten erfolgreich gespeichert")}catch(e){n.oR.error("Bitte f\xfcllen Sie alle Angaben aus")}},type:"button",style:{background:"#0b5995",color:"white"},className:"btn btn",children:"Speichern"})]}),(0,r.jsx)("br",{}),(0,r.jsx)(n.N9,{})]})]})})},u=o.memo(d)}}]);
//# sourceMappingURL=703.6da92503.chunk.js.map