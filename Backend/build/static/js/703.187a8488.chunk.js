"use strict";(self.webpackChunk_coreui_coreui_free_react_admin_template=self.webpackChunk_coreui_coreui_free_react_admin_template||[]).push([[703,940],{26940:(e,a,l)=>{l.r(a),l.d(a,{default:()=>s});var o=l(65043),t=l(70579);function s(e){let{onChange:a,value:l,placeholder:s,className:n}=e;const[c,i]=(0,o.useState)("");(0,o.useEffect)((()=>{if("string"===typeof l){const e=new Date(l);isNaN(e.getTime())?i(""):i(r(e))}else l instanceof Date&&!isNaN(l.getTime())?i(r(l)):i("")}),[l]);const r=e=>{var a,l,o,t,s;const n=null===e||void 0===e||null===(a=e.getDate())||void 0===a||null===(l=a.toString())||void 0===l?void 0:l.padStart(2,"0"),c=null===(o=(null===e||void 0===e?void 0:e.getMonth())+1)||void 0===o||null===(t=o.toString())||void 0===t?void 0:t.padStart(2,"0"),i=null===e||void 0===e||null===(s=e.getFullYear())||void 0===s?void 0:s.toString();return"".concat(n,".").concat(c,".").concat(i)};return(0,t.jsx)("div",{children:(0,t.jsx)("input",{type:"text",onChange:e=>{var a,l,o;let t=null===(a=e.target)||void 0===a?void 0:a.value,s="";t=null===(l=t)||void 0===l?void 0:l.replace(/\D/g,""),(null===(o=t)||void 0===o?void 0:o.length)>8&&(t=t.slice(0,8));for(let c=0;c<(null===(n=t)||void 0===n?void 0:n.length);c++){var n;2!==c&&4!==c||(s+="."),s+=t[c]}i(s)},onBlur:e=>{var l;const o=null===c||void 0===c||null===(l=c.split("."))||void 0===l?void 0:l.map((e=>parseInt(e,10)));let[t,s,n]=o;if(3===(null===o||void 0===o?void 0:o.length)){n<100&&(n+=1900),s<1&&(s=1),s>12&&(s=12);const e=new Date(n,s,0).getDate();t<1&&(t=1),t>e&&(t=e);const l=new Date(n,s-1,t);a(l)}else if(1===(null===o||void 0===o?void 0:o.length)){const e=o[0];if(e<100){let l;l=e<50?e+2e3:e+1900;const o=new Date(l,0,1);a(o)}}},value:c,placeholder:s,className:n})})}},35703:(e,a,l)=>{l.r(a),l.d(a,{default:()=>u});var o=l(65043),t=l(47503),s=(l(92342),l(8124)),n=l(73216),c=l(95870),i=l(26940),r=l(70579);const d=()=>{var e,a;const[l,d]=(0,o.useState)([]);let u=localStorage.getItem("customerRecord"),v=JSON.parse(u);const m=(0,n.Zp)(),h="http://95.217.77.208:4142",[g,p]=(0,o.useState)([]),[b,x]=(0,o.useState)([]),[j,f]=(0,o.useState)(null===l||void 0===l?void 0:l.colleague),[N,y]=(0,o.useState)(null===l||void 0===l?void 0:l.invoiceDate),[w,D]=(0,o.useState)(null===l||void 0===l?void 0:l.deliveryDate),[S,_]=(0,o.useState)(null===l||void 0===l?void 0:l.product),[k,P]=(0,o.useState)(""),[C,F]=(0,o.useState)(null===l||void 0===l?void 0:l.paymentMethod),[V,R]=(0,o.useState)(null===l||void 0===l?void 0:l.invoiceAmount),[A,E]=(0,o.useState)(),[M,T]=(0,o.useState)(null===b||void 0===b||null===(e=b.customerDelivery)||void 0===e?void 0:e.alreadyPaid);console.log("paidData",M),(0,o.useEffect)((()=>{var e;T(null===b||void 0===b||null===(e=b.customerDelivery)||void 0===e?void 0:e.alreadyPaid)}),[null===b||void 0===b||null===(a=b.customerDelivery)||void 0===a?void 0:a.alreadyPaid]);const I=[{value:"payPal",label:"PayPal"},{value:"barzahlung",label:"Barzahlung"},{value:"rechnung",label:"Rechnung"},{value:"klarna",label:"Klarna"},{value:"kreditkarte",label:"Kreditkarte (f\xfcr die Zukunft)"},{value:"andere",label:"Andere"}],O=[{value:"HVD-PV",label:"HVD-PV"},{value:"Vortrag",label:"Vortrag"},{value:"SPV",label:"SPV"},{value:"OPV",label:"OPV"}];return(0,o.useEffect)((()=>{(async()=>{try{const e=await fetch("".concat(h,"/invoice/get_invoice/").concat(v._id)),a=await e.json();d(a)}catch(e){console.error("Error fetching customer record:",e)}})(),(async()=>{try{const e=await fetch("".concat(h,"/customer/get_record/").concat(v._id)),a=await e.json();x(a)}catch(e){console.error("Error fetching employee data:",e)}})(),(async()=>{try{const e=await fetch("".concat(h,"/user/get/employeeData"));if(!e.ok)throw new Error("HTTP error! Status: ".concat(e.status));const{data:a}=await e.json();p(a)}catch(e){console.error("Error fetching employee data:",e)}})()}),[]),(0,o.useEffect)((()=>{f(null===l||void 0===l?void 0:l.colleague),y(null===l||void 0===l?void 0:l.invoiceDate),D(null===l||void 0===l?void 0:l.deliveryDate),_(null===l||void 0===l?void 0:l.product),F(null===l||void 0===l?void 0:l.paymentMethod),R(null===l||void 0===l?void 0:l.invoiceAmount),P(null===l||void 0===l?void 0:l.incoming_payment),E(null===l||void 0===l?void 0:l.transaction_no)}),[l]),(0,r.jsx)("div",{className:"inner-page-wrap",children:(0,r.jsxs)("div",{style:{background:"#fff"},children:[(0,r.jsx)(s.default,{}),(0,r.jsxs)("div",{className:"tab-content",children:[(0,r.jsx)("div",{className:"tab-title",children:(0,r.jsx)("h4",{className:"mx-3",children:"Rechnung"})}),(0,r.jsx)("hr",{className:"mx-3"}),(0,r.jsx)("div",{className:"container-fluid",children:(0,r.jsx)("div",{className:"row",children:(0,r.jsx)("div",{className:"col",children:(0,r.jsx)("div",{className:"block-wrap",children:(0,r.jsxs)("div",{className:"container-fluid",children:[(0,r.jsxs)("div",{className:"row",children:[(0,r.jsx)("div",{className:"col-sm-6",children:(0,r.jsxs)("div",{className:"row",children:[(0,r.jsx)("label",{htmlFor:"product",className:"col-sm-4 col-form-label",children:"Transaktionsnr"}),(0,r.jsx)("div",{className:"col-sm-6",children:(0,r.jsx)("input",{className:"form-control",value:A,onChange:e=>{E(e.target.value)},disabled:!0,placeholder:"Transaktionsnr"})})]})}),(0,r.jsx)("div",{className:"col-sm-6",children:(0,r.jsxs)("div",{className:"row",children:[(0,r.jsx)("label",{htmlFor:"product",className:"col-sm-4 col-form-label",children:"Zahlungseingang"}),(0,r.jsx)("div",{className:"col-sm-6",children:(0,r.jsx)("input",{className:"form-control",placeholder:"Zahlungseingang",value:k,onChange:e=>{P(e.target.value)},disabled:"barzahlung"!==C})})]})})]}),(0,r.jsxs)("div",{className:"row",children:[(0,r.jsxs)("div",{className:"col-sm-6",children:[(0,r.jsxs)("div",{className:"row mb-3",children:[(0,r.jsx)("label",{htmlFor:"product",className:"col-sm-4 col-form-label",children:"Produkt"}),(0,r.jsx)("div",{className:"col-sm-6",children:(0,r.jsx)(c.Ay,{className:"w-100",options:O,onChange:e=>_((null===e||void 0===e?void 0:e.value)||""),value:O.find((e=>e.value===S)),name:"product",placeholder:"HVD-PV"})})]}),(0,r.jsxs)("div",{className:"row",children:[(0,r.jsx)("label",{htmlFor:"invoiceAmount",className:"col-sm-4 col-form-label",children:"Rechnungsbetrag eintragen"}),(0,r.jsx)("div",{className:"col-sm-6",children:(0,r.jsx)("input",{type:"text",placeholder:"Rechnungsbetrag eintragen",className:"form-control",name:"invoiceAmount",value:V,onChange:e=>{const a=e.target.value.replace(/\D/g,"");R(a)}})})]}),(0,r.jsxs)("div",{className:"mb-6 row",children:[(0,r.jsx)("label",{htmlFor:"invoiceDate",className:"col-sm-4 col-form-label",children:"Rechnungsdatum"}),(0,r.jsx)("div",{className:"col-sm-6",children:(0,r.jsx)(i.default,{value:N,onChange:e=>{y(e)},placeholder:"Rechnungsdatum",className:"form-control"})})]}),(0,r.jsxs)("div",{className:"mb-6 row",children:[(0,r.jsx)("label",{htmlFor:"colleague",className:"col-sm-4 col-form-label",children:"MitarbeiterInnen"}),(0,r.jsx)("div",{className:"col-sm-6",children:(0,r.jsx)(c.Ay,{className:"w-100",placeholder:"MitarbeiterInnen",options:(null===g||void 0===g?void 0:g.map((e=>({value:e.username,label:e.username}))))||[],onChange:e=>f((null===e||void 0===e?void 0:e.value)||""),value:{value:j||"MitarbeiterInnen",label:j||"MitarbeiterInnen"},name:"colleague"})})]})]}),(0,r.jsxs)("div",{className:"col-sm-6",children:[(0,r.jsxs)("div",{className:"mb-6 row",children:[(0,r.jsx)("label",{htmlFor:"alreadyPaid",className:"col-sm-4 mb-2 col-form-label",children:"Bereits bezahlt"}),(0,r.jsxs)("div",{className:"col-sm-6 radio-check-wrap",children:[(0,r.jsx)("input",{readOnly:!0,type:"checkbox",name:"alreadyPaid",checked:M,onChange:e=>{T(e.target.checked)},onClick:e=>e.stopPropagation()}),(0,r.jsx)("span",{})]})]}),(0,r.jsxs)("div",{className:"row mb-3",children:[(0,r.jsx)("label",{htmlFor:"paymentMethod",className:"col-sm-4 col-form-label",children:"Zahlungsart"}),(0,r.jsx)("div",{className:"col-sm-6",children:(0,r.jsx)(c.Ay,{className:"w-100",options:I,onChange:e=>{F((null===e||void 0===e?void 0:e.value)||"")},value:I.find((e=>e.value===C)),name:"paymentMethod",placeholder:"Barzahlung"})})]}),(0,r.jsxs)("div",{className:"row",children:[(0,r.jsx)("label",{htmlFor:"deliveryDate",className:"col-sm-4 col-form-label",children:"Lieferdatum"}),(0,r.jsx)("div",{className:"col-sm-6",children:(0,r.jsx)(i.default,{value:w,onChange:e=>{D(e)},placeholder:"Lieferdatum",className:"form-control"})})]})]})]})]})})})})}),(0,r.jsxs)("div",{className:"text-end mx-3",children:[(0,r.jsx)("button",{type:"button",onClick:()=>{localStorage.removeItem("customerRecord"),m("/customer/customer_info")},className:"btn btn",style:{background:"#d04545",color:"white"},children:"Abbrechen"}),"\xa0 \xa0",(0,r.jsx)("button",{onClick:async()=>{try{const e={product:S,paymentMethod:C,invoiceAmount:V,invoiceDate:N,deliveryDate:w,employeeData:g,colleague:j,transaction_no:A,incoming_payment:k,customer_id:null===v||void 0===v?void 0:v._id};if(e){const a=await fetch("".concat(h,"/invoice/get_invoice/").concat(null===v||void 0===v?void 0:v._id),{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)});if(!a.ok)throw new Error("Failed to update invoice data. Status: ".concat(a.status))}const a={alreadyPaid:M};console.log("customerDeliveryData:",a);const l=await fetch("".concat(h,"/customer/get_record/edit/").concat(null===v||void 0===v?void 0:v._id),{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({customerDelivery:a})});if(!l.ok)throw new Error("Failed to update alreadyPaid data. Status: ".concat(l.status));const o=await l.json();console.log("Response:",o),t.oR.success("Data saved successfully")}catch(e){t.oR.error("Failed to save data: ".concat(e.message))}},type:"button",style:{background:"#0b5995",color:"white"},className:"btn btn",children:"Speichern"})]}),(0,r.jsx)("br",{}),(0,r.jsx)(t.N9,{})]})]})})},u=o.memo(d)}}]);
//# sourceMappingURL=703.187a8488.chunk.js.map