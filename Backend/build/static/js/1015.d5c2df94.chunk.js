"use strict";(self.webpackChunk_coreui_coreui_free_react_admin_template=self.webpackChunk_coreui_coreui_free_react_admin_template||[]).push([[1015],{56250:(e,t,a)=>{a.r(t),a.d(t,{default:()=>d});var n=a(65043),s=a(81098),r=a(9977),l=a(27642),i=a(70579);const c=[{title:"NACHNAME",dataIndex:"fname",render:e=>(0,i.jsx)("a",{children:e})},{title:"VORNAMEN",dataIndex:"lname"},{title:"GEBURTSDATUM",dataIndex:"dob"},{title:"PLZ",dataIndex:"plz"},{title:"TELEFON",dataIndex:"telephone"},{title:"MOBIL",dataIndex:"mobile"},{title:"STATUS",dataIndex:"status",render:(e,t)=>(0,i.jsx)("div",{style:{color:"white",background:"PV-ALT"===e?"#F6011F":"HVD-PV"===e?"#55BC6E":"transparent",borderRadius:"20px",padding:"3px",width:"70px",textAlign:"center"},children:(0,i.jsx)("b",{style:{fontSize:"12px"},children:e})})},{title:"ID KLIENTINNEN",dataIndex:"client_id"},{title:"VERSAND NACHSTE MARKE",dataIndex:"next_shipping"},{title:"DAUERSPENDERINNEN",dataIndex:"permanent_donors"}],o=()=>{const[e,t]=(0,n.useState)(""),[a,o]=(0,n.useState)(!1),[d,h]=(0,n.useState)(!1),[x,u]=(0,n.useState)([]),m="http://95.217.77.208:4142",[p,f]=(0,n.useState)(1),[j,v]=(0,n.useState)(0),N=(0,n.useRef)(),[g,w]=(0,n.useState)(""),C=async()=>{try{var e;const t=await fetch("".concat(m,"/filter/get_filter?page=").concat(p,"&resultPerPage=").concat(g)),a=await t.json();v(null===a||void 0===a?void 0:a.pageCount);const n=null===a||void 0===a||null===(e=a.result)||void 0===e?void 0:e.filter((e=>"active"===e.is_deleted));u(n)}catch(d){console.error("Error fetching customer record:",d)}};(0,n.useEffect)((()=>{C()}),[p,g]);return(0,i.jsx)("div",{children:(0,i.jsx)("div",{className:"px-3",style:{background:"white",borderRadius:"5px"},children:(0,i.jsxs)("div",{className:"container-fluid",children:[(0,i.jsx)("h4",{className:"px-3 pt-3",children:"Filter"}),(0,i.jsx)("hr",{}),(0,i.jsx)("div",{className:"search-filter-row",style:{boxShadow:"none"},children:(0,i.jsx)("div",{className:"container-fluid ",children:(0,i.jsxs)("div",{className:"row",children:[(0,i.jsx)("div",{className:"col-md-6 mb-md-0 mb-3",children:(0,i.jsxs)("div",{className:"d-flex align-items-center",children:[(0,i.jsx)("input",{ref:N,name:"search",value:e,onChange:e=>t(e.target.value),type:"search",id:"form1",placeholder:"Ihre Suche eingeben",className:"form-control form-search-control"}),(0,i.jsxs)("button",{onClick:async()=>{try{if(""===e)return C();const t=await fetch("".concat(m,"/filter/search/").concat(e)),a=await t.json(),n=a.filter((e=>"active"===e.is_deleted));n.length>0?u(n):(C(),u(a))}catch(d){console.error("Error searching data:",d.message)}},className:"filter-btn",children:[(0,i.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",children:(0,i.jsx)("path",{d:"M17.2837 3.19758L17.2819 3.19982L11.4249 10.3893L11.3125 10.5272V10.7051V15.7395C11.3125 16.0891 11.0266 16.375 10.677 16.375C10.538 16.375 10.4145 16.3294 10.3142 16.2343L10.2972 16.2182L10.2788 16.2037L7.02898 13.6566C6.81324 13.4832 6.6875 13.2225 6.6875 12.948V10.7051V10.5272L6.57512 10.3892L0.717141 3.19979L0.716307 3.19877C0.5768 3.02847 0.5 2.81363 0.5 2.59102C0.5 2.05751 0.932509 1.625 1.46602 1.625H16.534C17.0667 1.625 17.5 2.05774 17.5 2.59102C17.5 2.81391 17.4234 3.02809 17.2837 3.19758ZM1.93219 2.3125H0.879712L1.54459 3.12837L7.29738 10.1875C7.29744 10.1876 7.2975 10.1877 7.29756 10.1877C7.34744 10.2491 7.375 10.3272 7.375 10.4062V12.8109V13.0524L7.56415 13.2026L9.81415 14.9885L10.625 15.6321V14.5969V10.4062C10.625 10.3272 10.6526 10.2491 10.7025 10.1877C10.7025 10.1876 10.7026 10.1876 10.7026 10.1875L16.454 3.12832L17.1187 2.3125H16.0664H1.93219Z",fill:"#1C1D21",stroke:"white"})}),(0,i.jsx)("span",{children:"Filter"})]})]})}),(0,i.jsx)("div",{className:"col-md-6 text-end",children:(0,i.jsx)("div",{className:"d-flex align-items-center justify-content-between justify-content-md-end text-md-end flex-md-row flex-column"})})]})})}),(0,i.jsxs)("div",{className:"",children:[(0,i.jsx)(s.A,{rowKey:e=>e._id,rowSelection:{type:"checkbox",onChange:(e,t)=>{},getCheckboxProps:e=>({disabled:"Disabled User"===e.name,name:e.name})},style:{overflowX:"auto"},columns:c,dataSource:x,pagination:!1}),(0,i.jsxs)("div",{className:"row d-flex",children:[(0,i.jsxs)("div",{className:"col-sm-10",children:[" ",(0,i.jsx)(l.A,{spacing:2,children:(0,i.jsx)(r.A,{count:j,variant:"outlined",shape:"rounded",page:p,onChange:(e,t)=>{f(t)}})})]}),(0,i.jsx)("div",{className:"col-sm-2 text-end",children:(0,i.jsxs)("select",{className:"form-control form-select",value:g,onChange:e=>{w(parseInt(e.target.value,10)),f(1)},children:[(0,i.jsx)("option",{value:10,children:"10 pro Seite"}),(0,i.jsx)("option",{value:20,children:"20 pro Seite"}),(0,i.jsx)("option",{value:50,children:"50 pro Seite"}),(0,i.jsx)("option",{value:100,children:"100 pro Seite"})]})})]}),(0,i.jsx)("br",{})]})]})})})},d=n.memo(o)},88726:(e,t,a)=>{a.d(t,{A:()=>n});const n=a(65043).createContext(null)},77387:(e,t,a)=>{a.d(t,{A:()=>s});var n=a(63662);function s(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,(0,n.A)(e,t)}}}]);
//# sourceMappingURL=1015.d5c2df94.chunk.js.map