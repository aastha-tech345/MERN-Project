"use strict";(self.webpackChunk_coreui_coreui_free_react_admin_template=self.webpackChunk_coreui_coreui_free_react_admin_template||[]).push([[7893,6940],{26940:(e,a,l)=>{l.r(a),l.d(a,{default:()=>n});l(65043);var r=l(31899),t=l.n(r),o=(l(25015),l(70579));const n=e=>{let{onChange:a,selected:l,placeholderText:r}=e;return(0,o.jsx)("div",{children:(0,o.jsx)(t(),{className:"form-control form-search-control w-101",placeholderText:r,selected:l,onChange:e=>{if(!e)return void a(null);let l=e.getDate(),r=e.getMonth()+1,t=e.getFullYear()%100;if(t+=t<50?2e3:1900,t<1900)return void console.error("Year cannot be before 1900");l=l.toString().padStart(2,"0"),r=r.toString().padStart(2,"0");"".concat(l).concat(r).concat(t);const o=new Date(t,r-1,l);a(o)},dateFormat:"dd.MM.yyyy"})})}},87893:(e,a,l)=>{l.r(a),l.d(a,{default:()=>h});var r=l(65043),t=l(47503),o=(l(92342),l(8124)),n=l(73216),s=l(26940),i=(l(48555),l(15935),l(17195),l(70579));const d=()=>{var e,a,l,d,h,c,m,v;const[u,p]=(0,r.useState)([]),x=(0,n.Zp)(),f="http://95.217.77.208:4142",[j,C]=(0,r.useState)({AttorneyMasterData:!1,adoptDataFromHealthcare:Boolean(null===u||void 0===u||null===(e=u.powerOfAttorney)||void 0===e?void 0:e.adoptDataFromHealthcare),powerOfAttorneyData:Array.from({length:4},(()=>{var e,a,l,r,t,o,n,s,i,d;return{powerOfAttorney_fname:null===u||void 0===u||null===(e=u.healthCare)||void 0===e||null===(a=e.healthCareData)||void 0===a?void 0:a.map((e=>e.healthCare_fname)),powerOfAttorney_lname:null===u||void 0===u||null===(l=u.healthCare)||void 0===l||null===(r=l.healthCareData)||void 0===r?void 0:r.map((e=>e.healthCare_lname)),powerOfAttorney_address:null===u||void 0===u||null===(t=u.healthCare)||void 0===t||null===(o=t.healthCareData)||void 0===o?void 0:o.map((e=>e.healthCare_address)),powerOfAttorney_mobile:null===u||void 0===u||null===(n=u.healthCare)||void 0===n||null===(s=n.healthCareData)||void 0===s?void 0:s.map((e=>e.healthCare_mobile)),powerOfAttorney_phone:null===u||void 0===u||null===(i=u.healthCare)||void 0===i||null===(d=i.healthCareData)||void 0===d?void 0:d.map((e=>e.healthCare_phone))}}))}),[_,y]=(0,r.useState)({care_association:(null===u||void 0===u||null===(a=u.careProvision)||void 0===a?void 0:a.care_association)||""}),[N,g]=(0,r.useState)({fname:(null===u||void 0===u||null===(l=u.securingattorney)||void 0===l?void 0:l.fname)||"",lname:(null===u||void 0===u||null===(d=u.securingattorney)||void 0===d?void 0:d.lname)||"",address:(null===u||void 0===u||null===(h=u.securingattorney)||void 0===h?void 0:h.address)||"",dob:(null===u||void 0===u||null===(c=u.securingattorney)||void 0===c?void 0:c.dob)||"",plz:(null===u||void 0===u||null===(m=u.securingattorney)||void 0===m?void 0:m.plz)||"",ort:(null===u||void 0===u||null===(v=u.securingattorney)||void 0===v?void 0:v.ort)||""}),w=(e,a)=>{const{name:l,value:r,type:t,checked:o}=e.target||{};D((e=>{const n=[...e.healthCareData];if("checkbox"===t)n[a]={...n[a],[l]:o};else if("healthCare_phone"===l){const e=r.replace(/[^\d+ ]/g,"");/^\+?(?:[0-9] ?){0,}$/.test(e)&&(n[a]={...n[a],healthCare_phone:e})}else if("healthCare_mobile"===l){const e=r.replace(/[^\d+ ]/g,"");/^\+?(?:[0-9] ?){0,}$/.test(e)&&(n[a]={...n[a],healthCare_mobile:e})}else n[a]={...n[a],[l]:r};return{...e,healthCareData:n}}))},[b,D]=(0,r.useState)({healthCareData:Array.from({length:4},(()=>{var e,a,l,r,t,o,n,s,i,d;return{healthCare_fname:null===u||void 0===u||null===(e=u.healthCare)||void 0===e||null===(a=e.healthCareData)||void 0===a?void 0:a.map((e=>e.healthCare_fname)),healthCare_lname:null===u||void 0===u||null===(l=u.healthCare)||void 0===l||null===(r=l.healthCareData)||void 0===r?void 0:r.map((e=>e.healthCare_lname)),healthCare_address:null===u||void 0===u||null===(t=u.healthCare)||void 0===t||null===(o=t.healthCareData)||void 0===o?void 0:o.map((e=>e.healthCare_address)),healthCare_mobile:null===u||void 0===u||null===(n=u.healthCare)||void 0===n||null===(s=n.healthCareData)||void 0===s?void 0:s.map((e=>e.healthCare_mobile)),healthCare_phone:null===u||void 0===u||null===(i=u.healthCare)||void 0===i||null===(d=i.healthCareData)||void 0===d?void 0:d.map((e=>e.healthCare_phone))}}))}),A=(e,a)=>{const{name:l,value:r,type:t,checked:o}=e.target||{};C((e=>{const n=[...e.powerOfAttorneyData];if("checkbox"===t)n[a]={...n[a],[l]:o};else if("powerOfAttorney_phone"===l){const e=r.replace(/[^\d+ ]/g,"");/^\+?(?:[0-9] ?){0,}$/.test(e)&&(n[a]={...n[a],powerOfAttorney_phone:e})}else if("powerOfAttorney_mobile"===l){const e=r.replace(/[^\d+ ]/g,"");/^\+?(?:[0-9] ?){0,}$/.test(e)&&(n[a]={...n[a],powerOfAttorney_mobile:e})}return{...e,powerOfAttorneyData:n}}))},O=e=>{if(e instanceof Date){let a=e.getFullYear().toString();const l=parseInt(a.substring(0,4),10);a.length>4&&(a=a.substring(0,4));const r=new Date("".concat(l,".").concat(e.getMonth()+1,".").concat(e.getDate()));g({...N,dob:r})}else if(e.target){const{name:a,value:l,type:r,checked:t}=e.target;if("plz"===a&&"text"===r){const e=l.replace(/[^0-9a-zA-Z9\xe4\xf6\xfc\xc4\xd6\xdc\xdf\xc4\xd6\xdc\xdf\s'-]/g,"");g({...N,plz:e})}else g({...N,[a]:"checkbox"===r?t:l})}else void 0!==e.value?g({...N,salution:e.value}):console.error("Invalid event or data provided to ContactChange.")};let S=localStorage.getItem("customerRecord"),k=JSON.parse(S);const L={healthCare:b,powerOfAttorney:j,careProvision:_,securingattorney:N,customer_id:null===k||void 0===k?void 0:k._id};return(0,r.useEffect)((()=>{var e,a,l,r,t,o,n;y({care_association:null===u||void 0===u||null===(e=u.careProvision)||void 0===e?void 0:e.care_association}),g({fname:null===u||void 0===u||null===(a=u.securingattorney)||void 0===a?void 0:a.fname,lname:null===u||void 0===u||null===(l=u.securingattorney)||void 0===l?void 0:l.lname,address:null===u||void 0===u||null===(r=u.securingattorney)||void 0===r?void 0:r.address,dob:null===u||void 0===u||null===(t=u.securingattorney)||void 0===t?void 0:t.dob,plz:null===u||void 0===u||null===(o=u.securingattorney)||void 0===o?void 0:o.plz,ort:null===u||void 0===u||null===(n=u.securingattorney)||void 0===n?void 0:n.ort}),C((e=>({...e,powerOfAttorneyData:Array.from({length:4},((a,l)=>({powerOfAttorneyData:e.powerOfAttorneyData.map(((e,a)=>{var l,r,t,o,n,s,i,d,h,c,m,v,p,x,f;return{...e,powerOfAttorney_fname:(null===u||void 0===u||null===(l=u.healthCare)||void 0===l||null===(r=l.healthCareData)||void 0===r||null===(t=r[a])||void 0===t?void 0:t.healthCare_fname)||e.powerOfAttorney_fname,powerOfAttorney_lname:(null===u||void 0===u||null===(o=u.healthCare)||void 0===o||null===(n=o.healthCareData)||void 0===n||null===(s=n[a])||void 0===s?void 0:s.healthCare_lname)||e.powerOfAttorney_lname,powerOfAttorney_address:(null===u||void 0===u||null===(i=u.healthCare)||void 0===i||null===(d=i.healthCareData)||void 0===d||null===(h=d[a])||void 0===h?void 0:h.healthCare_address)||e.powerOfAttorney_address,powerOfAttorney_mobile:(null===u||void 0===u||null===(c=u.healthCare)||void 0===c||null===(m=c.healthCareData)||void 0===m||null===(v=m[a])||void 0===v?void 0:v.healthCare_mobile)||e.powerOfAttorney_mobile,powerOfAttorney_phone:(null===u||void 0===u||null===(p=u.healthCare)||void 0===p||null===(x=p.healthCareData)||void 0===x||null===(f=x[a])||void 0===f?void 0:f.healthCare_phone)||e.powerOfAttorney_phone}}))})))}))),D((e=>({...e,healthCareData:Array.from({length:4},((a,l)=>{var r,t,o,n,s,i,d,h,c,m,v,p,x,f,j,C,_,y,N,g;return{healthCare_fname:(null===u||void 0===u||null===(r=u.healthCare)||void 0===r||null===(t=r.healthCareData)||void 0===t||null===(o=t[l])||void 0===o?void 0:o.healthCare_fname)||(null===(n=e.healthCareData[l])||void 0===n?void 0:n.healthCare_fname)||"",healthCare_lname:(null===u||void 0===u||null===(s=u.healthCare)||void 0===s||null===(i=s.healthCareData)||void 0===i||null===(d=i[l])||void 0===d?void 0:d.healthCare_lname)||(null===(h=e.healthCareData[l])||void 0===h?void 0:h.healthCare_lname)||"",healthCare_address:(null===u||void 0===u||null===(c=u.healthCare)||void 0===c||null===(m=c.healthCareData)||void 0===m||null===(v=m[l])||void 0===v?void 0:v.healthCare_address)||(null===(p=e.healthCareData[l])||void 0===p?void 0:p.healthCare_address)||"",healthCare_mobile:(null===u||void 0===u||null===(x=u.healthCare)||void 0===x||null===(f=x.healthCareData)||void 0===f||null===(j=f[l])||void 0===j?void 0:j.healthCare_mobile)||(null===(C=e.healthCareData[l])||void 0===C?void 0:C.healthCare_mobile)||"",healthCare_phone:(null===u||void 0===u||null===(_=u.healthCare)||void 0===_||null===(y=_.healthCareData)||void 0===y||null===(N=y[l])||void 0===N?void 0:N.healthCare_phone)||(null===(g=e.healthCareData[l])||void 0===g?void 0:g.healthCare_phone)||""}}))})))}),[u,4]),(0,r.useEffect)((()=>{b.healthCareData.length<10&&D((e=>({...e,healthCareData:[...e.healthCareData,{healthCare_fname:"",healthCare_lname:"",healthCare_address:"",healthCare_phone:[]}]}))),(async()=>{try{const e=await fetch("".concat(f,"/attorney/get_attorney/").concat(k._id)),a=await e.json();p(a)}catch(e){console.error("Error fetching customer record:",e)}})(),j.powerOfAttorneyData.length<10&&C((e=>({...e,powerOfAttorneyData:[...e.powerOfAttorneyData,{powerOfAttorney_fname:"",powerOfAttorney_lname:"",powerOfAttorney_address:"",powerOfAttorney_phone:[],powerOfAttorney_mobile:[]}]})))}),[]),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(o.default,{}),(0,i.jsxs)("div",{className:"inner-page-wrap",children:[(0,i.jsxs)("div",{className:"tab-content",children:[(0,i.jsx)("div",{className:"tab-title",children:(0,i.jsx)("h4",{children:"Vollmachten"})}),(0,i.jsxs)("div",{className:"block-wrap m-3",children:[(0,i.jsxs)("div",{children:[(0,i.jsx)("div",{className:"row",children:(0,i.jsxs)("div",{className:"col-sm-12",children:[(0,i.jsx)("h3",{style:{color:"#244D92"},children:"Gesundheitsvollmacht"}),(0,i.jsx)("p",{className:"",style:{color:"#244D92"},children:"Bevollm\xe4chtigte Person(en):"}),(0,i.jsxs)("div",{children:[(0,i.jsxs)("div",{className:"row mb-2",children:[(0,i.jsx)("div",{className:"col-sm-2",children:(0,i.jsx)("b",{children:"Vorname"})}),(0,i.jsx)("div",{className:"col-sm-2",children:(0,i.jsx)("b",{children:"Nachname"})}),(0,i.jsx)("div",{className:"col-sm-4",children:(0,i.jsx)("b",{children:"Adresse"})}),(0,i.jsx)("div",{className:"col-sm-2",children:(0,i.jsx)("b",{children:"Telefon"})}),(0,i.jsx)("div",{className:"col-sm-2",children:(0,i.jsx)("b",{children:"Mobil"})})]}),(0,i.jsx)("div",{children:b.healthCareData&&b.healthCareData.map(((e,a)=>(0,i.jsxs)("div",{className:"row",children:[(0,i.jsx)("div",{className:"col-sm-2",children:(0,i.jsx)("div",{className:"row",children:(0,i.jsx)("div",{className:"col-sm-12",children:(0,i.jsx)("input",{onChange:e=>w(e,a),value:e.healthCare_fname,name:"healthCare_fname",type:"text",placeholder:"Vorname",className:"form-control z",id:"fname_".concat(a),maxLength:20,minLength:3})})})}),(0,i.jsx)("div",{className:"col-sm-2",children:(0,i.jsx)("div",{className:"row",children:(0,i.jsx)("div",{className:"col-sm-12",children:(0,i.jsx)("input",{onChange:e=>w(e,a),value:e.healthCare_lname,type:"text",name:"healthCare_lname",placeholder:"Nachname",className:"form-control",id:"lname_".concat(a),maxLength:20,minLength:3})})})}),(0,i.jsx)("div",{className:"col-sm-4",children:(0,i.jsx)("div",{className:" row",children:(0,i.jsx)("div",{className:"col-sm-12",children:(0,i.jsx)("input",{onChange:e=>w(e,a),value:e.healthCare_address,type:"text",name:"healthCare_address",placeholder:"Adresse",className:"form-control",id:"address_".concat(a)})})})}),(0,i.jsx)("div",{className:"col-sm-2",children:(0,i.jsx)("div",{className:" row",children:(0,i.jsx)("div",{className:"col-sm-12",children:(0,i.jsx)("input",{onChange:e=>w(e,a),value:e.healthCare_phone,name:"healthCare_phone",placeholder:"853-456-8464",className:"form-control",id:"phone_".concat(a),maxLength:20,minLength:3})})})}),(0,i.jsx)("div",{className:"col-sm-2",children:(0,i.jsx)("div",{className:" row",children:(0,i.jsx)("div",{className:"col-sm-12",children:(0,i.jsx)("input",{onChange:e=>w(e,a),value:e.healthCare_mobile,type:"text",name:"healthCare_mobile",placeholder:"853-456-8464",className:"form-control",id:"phone_".concat(a),maxLength:20,minLength:3})})})})]},a)))})]})]})}),(0,i.jsx)("hr",{}),(0,i.jsx)("div",{className:"row",children:(0,i.jsxs)("div",{className:"col-sm-12",children:[(0,i.jsx)("h3",{style:{color:"#244D92"},children:"Vorsorgevollmacht"}),(0,i.jsxs)("div",{className:"row",children:[(0,i.jsx)("label",{htmlFor:"adoptDataFromHealthcare",className:"col-sm-3 col-form-label",children:"Daten aus Gesundheitsvollmacht \xfcbernehmen"}),(0,i.jsxs)("div",{className:"col-sm-1 radio-check-wrap mt-2",children:[(0,i.jsx)("input",{type:"checkbox",onChange:()=>{C((e=>({...e,adoptDataFromHealthcare:!e.adoptDataFromHealthcare,powerOfAttorneyData:e.adoptDataFromHealthcare?j.powerOfAttorneyData.map((e=>({powerOfAttorney_fname:"",powerOfAttorney_lname:"",powerOfAttorney_address:"",powerOfAttorney_phone:"",powerOfAttorney_mobile:""}))):b.healthCareData.map((e=>({powerOfAttorney_fname:e.healthCare_fname,powerOfAttorney_lname:e.healthCare_lname,powerOfAttorney_address:e.healthCare_address,powerOfAttorney_phone:e.healthCare_phone,powerOfAttorney_mobile:e.healthCare_mobile})))})))},checked:j.adoptDataFromHealthcare,name:"adoptDataFromHealthcare"}),(0,i.jsx)("span",{})]})]}),(0,i.jsx)("p",{className:"",style:{color:"#244D92"},children:"Bevollm\xe4chtigte Person(en):"}),(0,i.jsxs)("div",{className:"row mb-2 mt-3",children:[(0,i.jsx)("div",{className:"col-sm-2",children:(0,i.jsx)("b",{children:"Vorname"})}),(0,i.jsx)("div",{className:"col-sm-2",children:(0,i.jsx)("b",{children:"Nachname"})}),(0,i.jsx)("div",{className:"col-sm-4",children:(0,i.jsx)("b",{children:"Adresse"})}),(0,i.jsx)("div",{className:"col-sm-2",children:(0,i.jsx)("b",{children:"Telefon"})}),(0,i.jsx)("div",{className:"col-sm-2",children:(0,i.jsx)("b",{children:"Mobil"})})]}),j.powerOfAttorneyData&&j.powerOfAttorneyData.map(((e,a)=>(0,i.jsxs)("div",{className:"row",children:[(0,i.jsx)("div",{className:"col-sm-2",children:(0,i.jsx)("div",{className:"row",children:(0,i.jsx)("div",{className:"col-sm-12",children:(0,i.jsx)("input",{onChange:e=>A(e,a),value:e.powerOfAttorney_fname,name:"powerOfAttorney_fname",type:"text",placeholder:"Vorname",className:"form-control"})})})}),(0,i.jsx)("div",{className:"col-sm-2",children:(0,i.jsx)("div",{className:"row",children:(0,i.jsx)("div",{className:"col-sm-12",children:(0,i.jsx)("input",{onChange:e=>A(e,a),value:e.powerOfAttorney_lname,name:"powerOfAttorney_lname",type:"text",placeholder:"Nachname",className:"form-control"})})})}),(0,i.jsx)("div",{className:"col-sm-4",children:(0,i.jsx)("div",{className:"row",children:(0,i.jsx)("div",{className:"col-sm-12",children:(0,i.jsx)("input",{onChange:e=>A(e,a),value:e.powerOfAttorney_address,name:"powerOfAttorney_address",type:"text",placeholder:"Adresse",className:"form-control"})})})}),(0,i.jsx)("div",{className:"col-sm-2",children:(0,i.jsx)("div",{className:"row",children:(0,i.jsx)("div",{className:"col-sm-12",children:(0,i.jsx)("input",{onChange:e=>A(e,a),value:e.powerOfAttorney_phone,name:"powerOfAttorney_phone",type:"text",placeholder:"853-456-8464",className:"form-control",maxLength:20,minLength:3})})})}),(0,i.jsx)("div",{className:"col-sm-2",children:(0,i.jsx)("div",{className:"row",children:(0,i.jsx)("div",{className:"col-sm-12",children:(0,i.jsx)("input",{onChange:e=>A(e,a),value:e.powerOfAttorney_mobile,name:"powerOfAttorney_mobile",type:"text",placeholder:"853-456-8464",className:"form-control",maxLength:20,minLength:3})})})})]},a)))]})})]}),(0,i.jsx)("hr",{}),(0,i.jsx)("div",{className:"row",children:(0,i.jsxs)("div",{className:"col-sm-12",children:[(0,i.jsx)("h3",{style:{color:"#244D92"},children:"Betreuungsverf\xfcgung"}),(0,i.jsxs)("div",{className:"row",children:[(0,i.jsx)("label",{className:"col-sm-2 col-form-label",children:"Betreuungsverein"}),(0,i.jsx)("div",{className:"col-sm-10",children:(0,i.jsx)("textarea",{value:_.care_association,name:"care_association",onChange:e=>{const{name:a,value:l}=e.target;y({..._,[a]:l})},className:"form-control",placeholder:"Betreuungsverein"})})]}),(0,i.jsx)("hr",{})]})}),(0,i.jsx)("div",{className:"row",children:(0,i.jsxs)("div",{className:"col-sm-12",children:[(0,i.jsx)("h3",{style:{color:"#244D92"},children:"Vollmacht zur Absicherung des digitalen Erbes"}),(0,i.jsxs)("div",{className:"row mb-2 mt-3",children:[(0,i.jsx)("div",{className:"col-sm-2",children:(0,i.jsx)("b",{children:"Vorname"})}),(0,i.jsx)("div",{className:"col-sm-2",children:(0,i.jsx)("b",{children:"Nachname"})}),(0,i.jsx)("div",{className:"col-sm-2",children:(0,i.jsx)("b",{children:"Geburtsdatum"})}),(0,i.jsx)("div",{className:"col-sm-2",children:(0,i.jsx)("b",{children:"Stra\xdfe mit Hausnummer"})}),(0,i.jsx)("div",{className:"col-sm-2",children:(0,i.jsx)("b",{children:"PLZ"})}),(0,i.jsx)("div",{className:"col-sm-2",children:(0,i.jsx)("b",{children:"Ort"})})]}),(0,i.jsxs)("div",{className:"row",children:[(0,i.jsx)("div",{className:"col-sm-2",children:(0,i.jsx)("div",{className:"row",children:(0,i.jsx)("div",{className:"col-sm-12",children:(0,i.jsx)("input",{onChange:O,name:"fname",value:N.fname,type:"text",placeholder:"Vorname",className:"form-control"})})})}),(0,i.jsx)("div",{className:"col-sm-2",children:(0,i.jsx)("div",{className:"row",children:(0,i.jsx)("div",{className:"col-sm-12",children:(0,i.jsx)("input",{onChange:O,name:"lname",value:N.lname,type:"text",placeholder:"Nachname",className:"form-control"})})})}),(0,i.jsx)("div",{className:"col-sm-2",children:(0,i.jsx)("div",{className:"row",children:(0,i.jsx)("div",{className:"col-sm-12",children:(0,i.jsx)(s.default,{className:"form-control",selected:N.dob,onChange:O,placeholderText:"Geburtsdatum"})})})}),(0,i.jsx)("div",{className:"col-sm-2",children:(0,i.jsx)("div",{className:"row",children:(0,i.jsx)("div",{className:"col-sm-12",children:(0,i.jsx)("input",{onBlur:e=>{const{name:a,value:l}=e.target;let r=l.trim();/\d$/.test(l)&&(r=l.replace(/(\D)(\d)/,"$1 $2")),g({...N,[a]:r})},onChange:O,value:N.address,name:"address",type:"text",placeholder:"Stra\xdfe mit Hausnummer",className:"form-control"})})})}),(0,i.jsx)("div",{className:"col-sm-2",children:(0,i.jsx)("div",{className:"row",children:(0,i.jsx)("div",{className:"col-sm-12",children:(0,i.jsx)("input",{onChange:O,name:"plz",value:N.plz,type:"text",className:"form-control",placeholder:"PLZ",maxLength:10,minLength:3})})})}),(0,i.jsx)("div",{className:"col-sm-2",children:(0,i.jsx)("div",{className:"row",children:(0,i.jsx)("div",{className:"col-sm-12",children:(0,i.jsx)("input",{onChange:O,name:"ort",value:N.ort,type:"text",className:"form-control",placeholder:"Ort"})})})})]})]})}),(0,i.jsx)("hr",{}),(0,i.jsxs)("div",{className:"text-end mx-3",children:[(0,i.jsx)("button",{onClick:()=>{localStorage.removeItem("tabId"),x("/customer/customer_info")},type:"button",className:"btn btn",style:{background:"#d04545",color:"white"},children:"Abbrechen"}),"\xa0 \xa0",(0,i.jsx)("button",{onClick:async()=>{const e=L.healthCare.healthCareData;for(const s of e){if(s.healthCare_phone&&s.healthCare_phone.startsWith("000"))return t.oR.warning("Ung\xfcltige Telefonnummer");if(s.healthCare_mobile&&s.healthCare_mobile.startsWith("000"))return t.oR.warning("Ung\xfcltige Mobilnummer")}let a=new Date,l=null===N||void 0===N?void 0:N.dob;if(null!==N&&void 0!==N&&N.dob){var r;if((null===(r=new Date(null===N||void 0===N?void 0:N.dob))||void 0===r?void 0:r.getFullYear())<1900)return t.oR.warning("Das Geburtsdatum darf nicht vor 1900 liegen")}if(N&&N.dob){if(new Date(N.dob)>a)return t.oR.warning("Das Geburtsdatum darf nicht in der Zukunft liegen")}let o=new Date(l);if((a.getTime()-o.getTime())/315576e5<18)return t.oR.warning("Du musst mindestens 18 Jahre alt sein, um einen Vertrag zu unterschreiben.");try{let e,a;k?(e="".concat(f,"/attorney/get_attorney/").concat(k._id),a="PUT"):(e="".concat(f,"/attorney"),a="POST");let l=await fetch(e,{method:a,headers:{"Content-Type":"application/json"},body:JSON.stringify(L)});201===(await l.json()).status?t.oR.success("Daten erfolgreich gespeichert"):t.oR.error("Fehler beim Speichern der Daten. Weitere Informationen finden Sie auf der Konsole.")}catch(n){t.oR.error("Error saving data. Please try again.")}},type:"button",style:{background:"#0b5995",color:"white"},className:"btn btn",children:"Speichern"})]})]})]}),(0,i.jsx)(t.N9,{})]})]})},h=r.memo(d)}}]);
//# sourceMappingURL=7893.1c6bd67f.chunk.js.map