"use strict";(self.webpackChunk_coreui_coreui_free_react_admin_template=self.webpackChunk_coreui_coreui_free_react_admin_template||[]).push([[787,930],{50839:(e,t,a)=>{a.d(t,{Z:()=>s});a(72791);var l=a(13239),n=a(1582),o=a(80184);const s=()=>(0,o.jsx)(n.Z,{sx:{color:"grey.500"},spacing:2,direction:"row",children:(0,o.jsx)(l.Z,{color:"success",size:20})})},18930:(e,t,a)=>{a.r(t),a.d(t,{default:()=>d});var l=a(72791),n=a(58617),o=a(84373),s=a(70828),i=a(57689),c=a(80184);const r=()=>{var e,t,a,r,d,m;const h=(0,i.s0)();let u=localStorage.getItem("tabId")||"customer_info";const g=(e,t,a)=>(a&&"a"===a.target.tagName.toLowerCase()&&a.preventDefault(),"KlientInnen"===t?(localStorage.setItem("tabId","customer_info"),h("/customer/customer_info")):"Kontakte"===t?(localStorage.setItem("tabId","contact"),h("/customer/contact")):"Aktivitat"===t?(localStorage.setItem("tabId","activity"),h("/customer/activity")):"Dokumente"===t?(localStorage.setItem("tabId","document"),h("/customer/document")):"Vollmachten"===t?(localStorage.setItem("tabId","attorney"),h("/customer/attorney")):"SPV"===t?(localStorage.setItem("tabId","services"),h("/customer/services")):"Rechnung"===t?(localStorage.setItem("tabId","bills"),h("/customer/bills")):void 0);(0,l.useEffect)((()=>{g()}),[u]);let x=localStorage.getItem("customerDatat"),v=JSON.parse(x);const b=(null===v||void 0===v||null===(e=v.fname)||void 0===e?void 0:e.slice(0,1).toUpperCase())+(null===v||void 0===v||null===(t=v.fname)||void 0===t?void 0:t.slice(1).toLowerCase()),p=(null===v||void 0===v||null===(a=v.lname)||void 0===a?void 0:a.slice(0,1).toUpperCase())+(null===v||void 0===v||null===(r=v.lname)||void 0===r?void 0:r.slice(1).toLowerCase());let f=(null===v||void 0===v||null===(d=v.street)||void 0===d?void 0:d.slice(0,1).toUpperCase())+(null===v||void 0===v||null===(m=v.street)||void 0===m?void 0:m.slice(1).toLowerCase());return(0,c.jsx)(c.Fragment,{children:(0,c.jsxs)("div",{className:"whiteBox",children:[(0,c.jsx)("div",{className:"blueBoxTop",children:(0,c.jsxs)("div",{className:"row",children:[(0,c.jsxs)("div",{className:"col-sm-4",children:[(0,c.jsxs)("p",{style:{color:"white",marginTop:"5px"},children:["KlientInnen: ","".concat(b," ").concat(p)]}),(0,c.jsx)(s.VFp,{style:{color:"white"}}),"\xa0",(0,c.jsx)("span",{style:{color:"white"},children:f})]}),(0,c.jsxs)("div",{className:"col-sm-8 mt-4 text-right",children:[(0,c.jsxs)("button",{className:"btn btn-outline",style:{color:"white",border:"1px solid white",marginRight:"10px"},children:[(0,c.jsx)(n.Zuw,{className:"f-2"})," ",null===v||void 0===v?void 0:v.email]}),(0,c.jsxs)("button",{className:"btn btn-outline",style:{color:"white",border:"1px solid white",marginRight:"10px"},children:[(0,c.jsx)(o.HQO,{className:"f-2"})," ",null===v||void 0===v?void 0:v.phone]})]})]})}),(0,c.jsxs)("div",{className:"whiteBoxWithPdLR",children:[(0,c.jsx)("div",{className:"row",children:(0,c.jsx)("div",{className:"col-sm-12",children:(0,c.jsx)("nav",{children:(0,c.jsxs)("div",{className:"nav nav-tabs",id:"nav-tab",role:"tablist",children:[(0,c.jsxs)("button",{className:"nav-link ".concat("customer_info"===u?"active":""),id:"customer_info-tab","data-bs-toggle":"tab",role:"tab","aria-selected":"customer_info"===u,onClick:e=>g(0,"KlientInnen",e),style:{marginRight:"10px",marginLeft:"20px"},children:[(0,c.jsx)("i",{className:"fa-solid fa-info fa-fw infoIcon"}),"KlientInnen"]}),(0,c.jsxs)("button",{className:"nav-link ".concat("contact"===u?"active":""),id:"contact-tab","data-bs-toggle":"tab",role:"tab","aria-controls":"contact","aria-selected":"contact"===u,onClick:e=>g(0,"Kontakte",e),style:{marginRight:"10px"},children:[" ",(0,c.jsx)("i",{className:"fa-regular fa-address-book fa-fw"}),"Kontakte"]}),(0,c.jsxs)("button",{className:"nav-link ".concat("activity"===u?"active":""),id:"activity-tab","data-bs-toggle":"tab","data-bs-target":"#activity",role:"tab","aria-controls":"activity","aria-selected":"activity"===u,onClick:e=>g(0,"Aktivitat",e),style:{marginRight:"10px"},children:[(0,c.jsx)("i",{className:"fa-solid fa-heart-pulse fa-fw"}),"Aktivitat"]}),(0,c.jsxs)("button",{className:"nav-link ".concat("document"===u?"active":""),id:"document-tab","data-bs-toggle":"tab","data-bs-target":"#document",role:"tab","aria-controls":"document","aria-selected":"document"===u,onClick:e=>g(0,"Dokumente",e),style:{marginRight:"10px"},children:[(0,c.jsx)("i",{className:"fa-regular fa-file fa-fw"}),"Dokumente"]}),(0,c.jsxs)("button",{className:"nav-link ".concat("attorney"===u?"active":""),id:"attorney-tab","data-bs-toggle":"tab","data-bs-target":"#attorney",role:"tab","aria-controls":"attorney","aria-selected":"attorney"===u,onClick:e=>g(0,"Vollmachten",e),style:{marginRight:"10px"},children:[(0,c.jsx)("i",{className:"fa-solid fa-paint-roller fa-fw"}),"Vollmachten"]}),(0,c.jsxs)("button",{className:"nav-link ".concat("services"===u?"active":""),id:"services-tab","data-bs-toggle":"tab","data-bs-target":"#services",role:"tab","aria-controls":"services","aria-selected":"services"===u,onClick:e=>g(0,"SPV",e),style:{marginRight:"10px"},children:[" ",(0,c.jsx)("i",{className:"fa-regular fa-lightbulb fa-fw"}),"SPV"]}),(0,c.jsxs)("button",{className:"nav-link ".concat("bills"===u?"active":""),id:"bills-tab","data-bs-toggle":"tab","data-bs-target":"#bills",role:"tab","aria-controls":"bills","aria-selected":"bills"===u,onClick:e=>g(0,"Rechnung",e),style:{marginRight:"10px"},children:[(0,c.jsx)("i",{className:"fa-regular fa-file-lines fa-fw"}),"Rechnung"]})]})})})}),(0,c.jsx)("br",{})]})]})})},d=l.memo(r)},31787:(e,t,a)=>{a.r(t),a.d(t,{default:()=>_});var l=a(72791),n=a(41418),o=a.n(n),s=a(71929),i=a(60566),c=a(67521),r=a(96562),d=a(89922);const m=e=>{const{componentCls:t,sizePaddingEdgeHorizontal:a,colorSplit:l,lineWidth:n,textPaddingInline:o,orientationMargin:s,verticalMarginInline:r}=e;return{[t]:Object.assign(Object.assign({},(0,c.Wf)(e)),{borderBlockStart:"".concat((0,i.bf)(n)," solid ").concat(l),"&-vertical":{position:"relative",top:"-0.06em",display:"inline-block",height:"0.9em",marginInline:r,marginBlock:0,verticalAlign:"middle",borderTop:0,borderInlineStart:"".concat((0,i.bf)(n)," solid ").concat(l)},"&-horizontal":{display:"flex",clear:"both",width:"100%",minWidth:"100%",margin:"".concat((0,i.bf)(e.dividerHorizontalGutterMargin)," 0")},["&-horizontal".concat(t,"-with-text")]:{display:"flex",alignItems:"center",margin:"".concat((0,i.bf)(e.dividerHorizontalWithTextGutterMargin)," 0"),color:e.colorTextHeading,fontWeight:500,fontSize:e.fontSizeLG,whiteSpace:"nowrap",textAlign:"center",borderBlockStart:"0 ".concat(l),"&::before, &::after":{position:"relative",width:"50%",borderBlockStart:"".concat((0,i.bf)(n)," solid transparent"),borderBlockStartColor:"inherit",borderBlockEnd:0,transform:"translateY(50%)",content:"''"}},["&-horizontal".concat(t,"-with-text-left")]:{"&::before":{width:"calc(".concat(s," * 100%)")},"&::after":{width:"calc(100% - ".concat(s," * 100%)")}},["&-horizontal".concat(t,"-with-text-right")]:{"&::before":{width:"calc(100% - ".concat(s," * 100%)")},"&::after":{width:"calc(".concat(s," * 100%)")}},["".concat(t,"-inner-text")]:{display:"inline-block",paddingBlock:0,paddingInline:o},"&-dashed":{background:"none",borderColor:l,borderStyle:"dashed",borderWidth:"".concat((0,i.bf)(n)," 0 0")},["&-horizontal".concat(t,"-with-text").concat(t,"-dashed")]:{"&::before, &::after":{borderStyle:"dashed none none"}},["&-vertical".concat(t,"-dashed")]:{borderInlineStartWidth:n,borderInlineEnd:0,borderBlockStart:0,borderBlockEnd:0},["&-plain".concat(t,"-with-text")]:{color:e.colorText,fontWeight:"normal",fontSize:e.fontSize},["&-horizontal".concat(t,"-with-text-left").concat(t,"-no-default-orientation-margin-left")]:{"&::before":{width:0},"&::after":{width:"100%"},["".concat(t,"-inner-text")]:{paddingInlineStart:a}},["&-horizontal".concat(t,"-with-text-right").concat(t,"-no-default-orientation-margin-right")]:{"&::before":{width:"100%"},"&::after":{width:0},["".concat(t,"-inner-text")]:{paddingInlineEnd:a}}})}},h=(0,r.I$)("Divider",(e=>{const t=(0,d.TS)(e,{dividerHorizontalWithTextGutterMargin:e.margin,dividerHorizontalGutterMargin:e.marginLG,sizePaddingEdgeHorizontal:0});return[m(t)]}),(e=>({textPaddingInline:"1em",orientationMargin:.05,verticalMarginInline:e.marginXS})),{unitless:{orientationMargin:!0}});var u=function(e,t){var a={};for(var l in e)Object.prototype.hasOwnProperty.call(e,l)&&t.indexOf(l)<0&&(a[l]=e[l]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var n=0;for(l=Object.getOwnPropertySymbols(e);n<l.length;n++)t.indexOf(l[n])<0&&Object.prototype.propertyIsEnumerable.call(e,l[n])&&(a[l[n]]=e[l[n]])}return a};const g=e=>{const{getPrefixCls:t,direction:a,divider:n}=l.useContext(s.E_),{prefixCls:i,type:c="horizontal",orientation:r="center",orientationMargin:d,className:m,rootClassName:g,children:x,dashed:v,plain:b,style:p}=e,f=u(e,["prefixCls","type","orientation","orientationMargin","className","rootClassName","children","dashed","plain","style"]),j=t("divider",i),[C,w,N]=h(j),y=r.length>0?"-".concat(r):r,k=!!x,S="left"===r&&null!=d,I="right"===r&&null!=d,P=o()(j,null===n||void 0===n?void 0:n.className,w,N,"".concat(j,"-").concat(c),{["".concat(j,"-with-text")]:k,["".concat(j,"-with-text").concat(y)]:k,["".concat(j,"-dashed")]:!!v,["".concat(j,"-plain")]:!!b,["".concat(j,"-rtl")]:"rtl"===a,["".concat(j,"-no-default-orientation-margin-left")]:S,["".concat(j,"-no-default-orientation-margin-right")]:I},m,g),L=l.useMemo((()=>"number"===typeof d?d:/^\d+$/.test(d)?Number(d):d),[d]),A=Object.assign(Object.assign({},S&&{marginLeft:L}),I&&{marginRight:L});return C(l.createElement("div",Object.assign({className:P,style:Object.assign(Object.assign({},null===n||void 0===n?void 0:n.style),p)},f,{role:"separator"}),x&&"vertical"!==c&&l.createElement("span",{className:"".concat(j,"-inner-text"),style:A},x)))};var x=a(19826),v=a(48096),b=a(16856),p=a(29655),f=(a(5462),a(99355)),j=a(80184);const C=e=>{let{setHide:t,contactId:a,getDetails:l}=e;return(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)("div",{className:"modal",tabIndex:-1,style:{display:"block",backgroundColor:"rgba(0,0,0,0.8)",maxHeight:"100%",color:"black"},children:(0,j.jsx)("div",{className:"modal-dialog modal-dialog-centered",children:(0,j.jsxs)("div",{className:"modal-content",children:[(0,j.jsxs)(v.Z.Title,{children:[(0,j.jsxs)("svg",{style:{marginLeft:"200px",marginTop:"25px"},width:"44",height:"53",viewBox:"0 0 44 53",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,j.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M15.9193 0C19.9914 0 24.0636 0 28.1357 0C28.1978 0.0248302 28.2599 0.0620762 28.322 0.0744913C30.5194 0.397284 32.2948 2.30921 32.3941 4.50668C32.4313 5.13985 32.4562 5.77302 32.481 6.44343C32.7169 6.44343 32.928 6.44343 33.1266 6.44343C35.1751 6.46826 37.236 6.4186 39.2845 6.51792C41.4199 6.62966 43.158 8.35535 43.4808 10.5032C43.7912 12.6634 42.5745 14.8236 40.5632 15.5561C40.1287 15.7175 40.017 15.9286 40.017 16.3631C40.0294 26.1586 40.0294 35.9541 40.0294 45.7496C40.0294 46.271 40.0046 46.78 39.9425 47.3015C39.6569 50.008 37.7202 52.2179 35.0882 52.851C34.9144 52.8883 34.7281 52.9503 34.5543 53C26.199 53 17.856 53 9.50069 53C9.40137 52.9628 9.31446 52.9131 9.21514 52.9007C8.03571 52.6896 6.99284 52.1806 6.11137 51.3488C4.59673 49.9211 4.0008 48.1333 4.0008 46.0848C4.0008 36.1651 4.00081 26.2455 4.01322 16.3258C4.01322 15.8913 3.88907 15.7051 3.47937 15.5685C2.62273 15.283 1.9399 14.7243 1.41847 13.9918C0.363183 12.4896 0.164543 10.8632 0.946693 9.19958C1.67918 7.62286 2.95794 6.61724 4.70846 6.51792C6.76937 6.40618 8.84269 6.45585 10.916 6.43102C11.1146 6.43102 11.3133 6.43102 11.574 6.43102C11.574 5.922 11.5616 5.48747 11.574 5.04053C11.5988 3.35207 12.1948 1.91192 13.6101 0.955961C14.3053 0.521433 15.1495 0.310377 15.9193 0ZM37.5464 15.9286C27.1674 15.9286 16.8504 15.9286 6.50865 15.9286C6.50865 16.1024 6.50865 16.2389 6.50865 16.3755C6.50865 26.2952 6.50865 36.2148 6.50865 46.1345C6.50865 46.4821 6.53348 46.8297 6.59556 47.1649C6.90593 49.1637 8.44541 50.517 10.4442 50.517C18.1788 50.5294 25.901 50.517 33.6356 50.517C34.604 50.517 35.4606 50.219 36.1807 49.561C37.2112 48.6175 37.5464 47.4008 37.5464 46.06C37.5464 36.19 37.5464 26.32 37.5464 16.45C37.5464 16.2886 37.5464 16.1272 37.5464 15.9286ZM21.9779 13.4083C27.4157 13.4083 32.841 13.4083 38.2789 13.4083C38.5396 13.4083 38.8003 13.3959 39.0486 13.371C40.1039 13.2593 40.886 12.4647 40.9978 11.4219C41.1095 10.3542 40.4887 9.36098 39.4707 9.06301C39.1355 8.96369 38.763 8.93886 38.403 8.93886C27.4901 8.92645 16.5649 8.93886 5.65201 8.93886C5.3913 8.93886 5.13058 8.95128 4.88228 8.98852C3.82699 9.14992 3.06967 10.0066 3.00759 11.0867C2.94552 12.0923 3.6656 13.0855 4.65881 13.3214C5.00643 13.4083 5.37888 13.4083 5.73891 13.4083C11.1395 13.4083 16.5649 13.4083 21.9779 13.4083ZM14.0446 6.40619C19.3955 6.40619 24.6595 6.40619 29.9235 6.40619C29.9235 5.7606 29.9732 5.16468 29.9111 4.56875C29.7869 3.41415 28.8558 2.50785 27.6888 2.50785C23.9146 2.48302 20.128 2.48302 16.3538 2.50785C15.2489 2.52026 14.3177 3.31483 14.1439 4.40736C14.0322 5.05294 14.0694 5.72336 14.0446 6.40619Z",fill:"#C20F0F"}),(0,j.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M15.9322 32.217C15.9322 35.9787 15.9322 39.7405 15.9322 43.4899C15.9322 44.5576 15.5101 45.1287 14.7156 45.1411C13.9086 45.1535 13.4492 44.5576 13.4492 43.4775C13.4492 35.9415 13.4492 28.4055 13.4492 20.8696C13.4492 20.6337 13.474 20.3854 13.5237 20.1495C13.6479 19.5784 14.1072 19.2308 14.6783 19.2308C15.237 19.2184 15.7212 19.566 15.8577 20.1123C15.9198 20.3481 15.9198 20.584 15.9198 20.8323C15.9322 24.6189 15.9322 28.418 15.9322 32.217Z",fill:"#C20F0F"}),(0,j.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M20.7852 32.2046C20.7852 28.3807 20.7852 24.5444 20.7852 20.7206C20.7852 20.1495 20.9217 19.6653 21.4556 19.3674C22.1012 19.0073 22.9702 19.3549 23.1813 20.0626C23.2558 20.3233 23.2806 20.6089 23.2806 20.882C23.2806 28.4179 23.2806 35.9539 23.2806 43.4899C23.2806 43.7257 23.2682 43.974 23.2061 44.2099C23.0695 44.781 22.5729 45.1659 22.0143 45.1535C21.468 45.1411 20.9838 44.7686 20.8597 44.2099C20.81 43.974 20.7976 43.7257 20.7976 43.4899C20.7852 39.7281 20.7852 35.9663 20.7852 32.2046Z",fill:"#C20F0F"}),(0,j.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M28.1113 32.1548C28.1113 28.393 28.1113 24.6312 28.1113 20.8819C28.1113 19.7893 28.5459 19.2183 29.3653 19.2307C30.1598 19.2431 30.5943 19.8142 30.5943 20.8695C30.5943 28.4054 30.5943 35.9414 30.5943 43.4773C30.5943 44.5574 30.135 45.1534 29.328 45.141C28.5334 45.1285 28.1113 44.5574 28.1113 43.4897C28.1113 39.7156 28.1113 35.9414 28.1113 32.1548Z",fill:"#C20F0F"})]}),(0,j.jsx)("br",{}),(0,j.jsx)("br",{}),(0,j.jsx)("h4",{style:{marginLeft:"150px",color:"black"},children:"Sind Sie sicher?"})]}),(0,j.jsx)(v.Z.Body,{children:(0,j.jsx)("p",{style:{textAlign:"center"},children:"M\xf6chten Sie diesen Datensatz wirklich l\xf6schen? dieser Vorgang kann nicht r\xfcckg\xe4ngig gemacht werden"})}),(0,j.jsx)(v.Z.Footer,{children:(0,j.jsxs)("div",{children:[(0,j.jsx)("button",{className:"btn btn w-25",style:{background:"#015291",color:"white"},onClick:()=>t(!1),children:"Abbrechen"}),"\xa0\xa0",(0,j.jsx)("button",{className:"btn btn w-25",style:{background:"#d04545",color:"white"},onClick:async()=>{if(a)try{const n=await(0,f.Wq)("".concat("http://95.217.77.208:4142","/contact/get_contact"),a);var e;if(console.log(n),l(),200===(null===n||void 0===n?void 0:n.status))p.Am.success(null===n||void 0===n||null===(e=n.data)||void 0===e?void 0:e.message);t(!1)}catch(n){console.error("An error occurred while deleting the record:",n),t(!1)}},children:"L\xf6schen"})]})})]})})}),(0,j.jsx)(p.Ix,{})]})};var w=a(50839),N=a(13855);const y=e=>{let{setEdit:t,getDetails:a}=e;let n=localStorage.getItem("ContactEditDetails"),o=JSON.parse(n);console.log("aastha",o.email);const[s,i]=(0,l.useState)({fname:null===o||void 0===o?void 0:o.fname,lname:null===o||void 0===o?void 0:o.lname,phone:null===o||void 0===o?void 0:o.phone,statu:null===o||void 0===o?void 0:o.statu,gender:null===o||void 0===o?void 0:o.gender,email:null===o||void 0===o?void 0:o.email}),[c,r]=(0,l.useState)(null===o||void 0===o?void 0:o.email),[d,m]=(0,l.useState)(!1),[h,u]=(0,l.useState)(!1),g=e=>{const{type:t}=e.target,a=e.target.value;i({...s,[e.target.name]:a})},x=()=>{t(!1)},v={...s,email:c};return setTimeout((()=>{u(!1)}),5e3),(0,j.jsxs)("div",{className:"modal",tabIndex:-1,style:{display:"block",backgroundColor:"rgba(0,0,0,0.8)",maxHeight:"100%",color:"black"},children:[(0,j.jsx)("div",{className:"modal-dialog modal-dialog-centered",children:(0,j.jsxs)("div",{className:"modal-content",children:[(0,j.jsxs)("div",{className:"modal-header",children:[(0,j.jsx)("h5",{className:"modal-title",children:"Kontakt hinzuf\xfcgen"}),(0,j.jsx)("button",{type:"button",className:"btn-close","data-bs-dismiss":"modal","aria-label":"Close",onClick:x})]}),(0,j.jsx)(N.Z,{noValidate:!0,validated:d,children:(0,j.jsxs)("div",{className:"row p-3",children:[(0,j.jsxs)("div",{className:"mb-2 row",children:[(0,j.jsx)("label",{htmlFor:"inputPassword",className:"col-sm-3 col-form-label",children:"Vorname"}),(0,j.jsx)("div",{className:"col-sm-9",children:(0,j.jsx)("input",{type:"text",name:"fname",value:s.fname,onChange:g,placeholder:"jo",className:"form-control",id:"inputPassword"})})]}),(0,j.jsxs)("div",{className:"mb-2 row",children:[(0,j.jsx)("label",{htmlFor:"inputPassword",className:"col-sm-3 col-form-label",children:"Nachname"}),(0,j.jsx)("div",{className:"col-sm-9",children:(0,j.jsx)("input",{type:"text",name:"lname",value:s.lname,onChange:g,placeholder:"verma",className:"form-control",id:"inputPassword"})})]}),(0,j.jsxs)("div",{className:"mb-2 row",children:[(0,j.jsx)("label",{htmlFor:"inputPassword",className:"col-sm-3 col-form-label",children:"Telefon"}),(0,j.jsx)("div",{className:"col-sm-9",children:(0,j.jsx)("input",{name:"phone",value:s.phone,onChange:e=>{const t=e.target.value.replace(/[^0-9]/g,"");g({e:e,name:"phone",value:t})},type:"tel",placeholder:"Telefon",className:"form-control",id:"inputTelephone",maxLength:10,minLength:3})})]}),(0,j.jsxs)("div",{className:"mb-2 row",children:[(0,j.jsx)("label",{htmlFor:"inputPassword",className:"col-sm-3 col-form-label",children:"Mail"}),(0,j.jsx)("div",{className:"col-sm-9",children:(0,j.jsx)("input",{type:"email",name:"email",value:c,onChange:e=>{const t=e.target.value;/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(t.toLowerCase())?r(t):r("")},placeholder:"jo@gmail.com",className:"form-control",id:"inputPassword"})})]}),(0,j.jsxs)("div",{className:"mb-2 row",children:[(0,j.jsx)("label",{htmlFor:"inputPassword",className:"col-sm-3 col-form-label",children:"Geschlecht"}),(0,j.jsxs)("div",{className:"col-sm-9",children:[(0,j.jsx)("input",{type:"radio",name:"gender",value:"male",onChange:g,checked:"male"===s.gender})," ","\xa0 M\xe4nnlich",(0,j.jsx)("input",{type:"radio",name:"gender",value:"female",onChange:g,checked:"female"===s.gender})," ","\xa0 Weiblich",(0,j.jsx)("input",{type:"radio",name:"gender",value:"other",onChange:g,checked:"other"===s.gender}),"\xa0 Andere"]})]}),(0,j.jsxs)("div",{className:"mb-2 row",children:[(0,j.jsx)("label",{htmlFor:"inputPassword",className:"col-sm-3 col-form-label",children:"Status"}),(0,j.jsx)("div",{className:"col-sm-9",children:(0,j.jsxs)("select",{className:"form-control",name:"statu",onChange:g,value:s.statu,children:[(0,j.jsx)("option",{value:"",children:"--select--"}),(0,j.jsx)("option",{value:"HVD-PV",children:"HVD-PV"}),(0,j.jsx)("option",{value:"PV-ALT",children:"PV-ALT"})]})})]})]})}),(0,j.jsxs)("div",{className:"modal-footer",style:{display:"flex",justifyItems:"end"},children:[(0,j.jsx)("button",{type:"button",className:"btn btn-secondary w-25","data-bs-dismiss":"modal",onClick:x,style:{background:"#d04545",color:"white"},children:"Abbrechen"}),(0,j.jsx)("button",{type:"button",className:"btn  w-25",onClick:async()=>{try{if(!s.fname||!s.lname)return p.Am.warning("Please fill Fname & Lname");if(!c)return p.Am.error("Invalid Email");200===(await(0,f.yu)("".concat("http://95.217.77.208:4142","/contact/get_contact/").concat(null===o||void 0===o?void 0:o._id),v)).status?(u(!1),i({fname:"",lname:"",phone:"",gender:""}),r(""),p.Am.success("Contact Updated Successfully"),x(),a()):p.Am.error("Email-`Id Already Exists")}catch(e){console.log(e)}},style:{background:"#015291",color:"white"},children:h?(0,j.jsx)(w.Z,{}):(0,j.jsx)("div",{children:" Speichern"})})]})]})}),(0,j.jsx)(p.Ix,{})]})};var k=a(98745),S=a(1582),I=a(18930),P=a(17425),L=a(61522);const A=()=>{var e;let t=localStorage.getItem("record"),a=JSON.parse(t),n=localStorage.getItem("customerDatat"),o=JSON.parse(n);const[s,i]=(0,l.useState)(!1),c=(0,l.useRef)(),r="http://95.217.77.208:4142",d=[{title:"NAME DES KUNDEN",dataIndex:"fname",render:e=>(0,j.jsx)("a",{children:e.slice(0,1).toUpperCase()+e.slice(1).toLowerCase()})},{title:"KUNDEN-ID",dataIndex:"id"},{title:"E-MAIL",dataIndex:"email"},{title:"TELEFON",dataIndex:"phone"},{title:"STATUS",dataIndex:"statu",render:(e,t)=>(0,j.jsx)("div",{style:{color:"white",background:"PV-ALT"===e?"#F6011F":"HVD-PV"===e?"#55BC6E":"transparent",borderRadius:"20px",padding:"3px",width:"70px",textAlign:"center"},children:(0,j.jsx)("b",{style:{fontSize:"12px"},children:e})})},{title:"AKTION",dataIndex:"action",render:(e,t)=>{var l,n,o,s;return(0,j.jsxs)(j.Fragment,{children:[(null===a||void 0===a||null===(l=a.user)||void 0===l?void 0:l._id)===(null===t||void 0===t?void 0:t.added_by)&&(0,L.Mt)().includes("owned")||(0,L.Mt)().includes("yes")||"true"==(null===a||void 0===a||null===(n=a.user)||void 0===n?void 0:n.isAdminFullRights)?(0,j.jsx)(j.Fragment,{children:(0,j.jsxs)("button",{style:{background:"none",border:"none"},onClick:()=>ee(t),children:[(0,j.jsx)(b.mM_,{className:"fs-5",style:{color:"#5C86B4"}}),"\xa0\xa0Bearbeiten"]})}):"",(null===a||void 0===a||null===(o=a.user)||void 0===o?void 0:o._id)===(null===t||void 0===t?void 0:t.added_by)&&(0,L.fK)().includes("owned")||(0,L.fK)().includes("yes")||"true"==(null===a||void 0===a||null===(s=a.user)||void 0===s?void 0:s.isAdminFullRights)?(0,j.jsx)(j.Fragment,{children:(0,j.jsxs)("button",{style:{background:"none",border:"none"},onClick:()=>Y(t._id),children:[(0,j.jsx)(P.qy0,{className:"text-danger text-bold fs-5"}),"\xa0 L\xf6schen"]})}):""]})}}];console.log("customerId",null===o||void 0===o?void 0:o._id);const[m,h]=(0,l.useState)({fname:"",lname:"",phone:"",gender:"",statu:""});let u=null===o||void 0===o?void 0:o._id,f=null===a||void 0===a||null===(e=a.user)||void 0===e?void 0:e._id;const[w,A]=(0,l.useState)(""),[_,V]=(0,l.useState)(!1),[F,M]=(0,l.useState)([]),[Z,E]=(0,l.useState)(""),[z,R]=(0,l.useState)(!1),[T,D]=(0,l.useState)(!1),[O,H]=(0,l.useState)(""),[B,K]=(0,l.useState)(1),[W,U]=(0,l.useState)(0),[G,J]=(0,l.useState)(""),[$,q]=(0,l.useState)(""),Q=()=>V(!1),X=e=>{const{name:t,value:a,type:l}=e.target,n="radio"===l?e.target.value:a;h({...m,[t]:n})},Y=e=>{H(e),R(!0)},ee=e=>{let t=JSON.stringify(e);localStorage.setItem("ContactEditDetails",t),D(!0)};let te={...m,email:w,id:G,customer_id:u,added_by:f};const ae=async()=>{try{var e;const t=await fetch("".concat(r,"/contact/get_contact/").concat(null===o||void 0===o?void 0:o._id,"?page=").concat(B,"&resultPerPage=").concat($)),a=await t.json();U(null===a||void 0===a?void 0:a.pageCount);const l=null===a||void 0===a||null===(e=a.result)||void 0===e?void 0:e.filter((e=>"active"===e.status));M(l)}catch(t){console.error("Error fetching customer record:",t)}};let le=F;return(0,l.useEffect)((()=>{J("HVD"+Math.floor(1e3+9e3*Math.random())),ae()}),[B,$]),(0,j.jsxs)("div",{style:{background:"#fff"},children:[z?(0,j.jsx)(C,{setHide:R,contactId:O,getDetails:ae}):"",T?(0,j.jsx)(y,{setEdit:D,getDetails:ae}):"",(0,j.jsx)(I.default,{}),(0,j.jsx)("h5",{className:"mx-4",children:"Kontakte"}),(0,j.jsx)("div",{className:"container-fluid",children:(0,j.jsxs)("div",{className:"row search-filter-row",style:{borderRadius:"5px",margin:"0px",border:"1px solid lightgray",background:"#fff"},children:[(0,j.jsx)("div",{className:"col-md-9",children:(0,j.jsxs)("div",{className:"d-flex align-items-center",children:[(0,j.jsx)("input",{ref:c,name:"search",value:Z,onChange:e=>E(e.target.value),type:"search",id:"form1",placeholder:"Ihre Suche eingeben",className:"form-control form-search-control"}),(0,j.jsxs)("button",{onClick:async()=>{try{if(""===Z)return ae();const e=await fetch("".concat(r,"/contact/search/").concat(Z)),t=await e.json(),a=t.filter((e=>"active"===e.status));a.length>0?M(a):(ae(),M(t))}catch(e){console.error("Error searching data:",e.message)}},className:"filter-btn",children:[(0,j.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",children:(0,j.jsx)("path",{d:"M17.2837 3.19758L17.2819 3.19982L11.4249 10.3893L11.3125 10.5272V10.7051V15.7395C11.3125 16.0891 11.0266 16.375 10.677 16.375C10.538 16.375 10.4145 16.3294 10.3142 16.2343L10.2972 16.2182L10.2788 16.2037L7.02898 13.6566C6.81324 13.4832 6.6875 13.2225 6.6875 12.948V10.7051V10.5272L6.57512 10.3892L0.717141 3.19979L0.716307 3.19877C0.5768 3.02847 0.5 2.81363 0.5 2.59102C0.5 2.05751 0.932509 1.625 1.46602 1.625H16.534C17.0667 1.625 17.5 2.05774 17.5 2.59102C17.5 2.81391 17.4234 3.02809 17.2837 3.19758ZM1.93219 2.3125H0.879712L1.54459 3.12837L7.29738 10.1875C7.29744 10.1876 7.2975 10.1877 7.29756 10.1877C7.34744 10.2491 7.375 10.3272 7.375 10.4062V12.8109V13.0524L7.56415 13.2026L9.81415 14.9885L10.625 15.6321V14.5969V10.4062C10.625 10.3272 10.6526 10.2491 10.7025 10.1877C10.7025 10.1876 10.7026 10.1876 10.7026 10.1875L16.454 3.12832L17.1187 2.3125H16.0664H1.93219Z",fill:"#1C1D21",stroke:"white"})}),(0,j.jsx)("span",{children:"Filter"})]})]})}),(0,j.jsxs)("div",{className:"col-sm-3",children:[(0,j.jsxs)("button",{className:"btn btn",style:{background:"#0b5995",color:"white"},onClick:()=>V(!0),children:[(0,j.jsx)(b.x06,{}),"\xa0Neue Kontakte anlegen"]}),(0,j.jsxs)(v.Z,{show:_,onHide:Q,centered:!0,children:[(0,j.jsx)(v.Z.Header,{closeButton:!0,children:(0,j.jsx)(v.Z.Title,{children:"Kontakt hinzuf\xfcgen"})}),(0,j.jsx)(v.Z.Body,{children:(0,j.jsx)(N.Z,{noValidate:!0,validated:s,children:(0,j.jsxs)("div",{className:"row p-3",children:[(0,j.jsxs)("div",{className:"mb-2 row",children:[(0,j.jsx)("label",{htmlFor:"inputPassword",className:"col-sm-3 col-form-label",children:"Vorname"}),(0,j.jsx)("div",{className:"col-sm-9",children:(0,j.jsx)("input",{type:"text",name:"fname",value:m.fname,onChange:X,placeholder:"jo",className:"form-control",id:"inputPassword",required:!0})})]}),(0,j.jsxs)("div",{className:"mb-2 row",children:[(0,j.jsx)("label",{htmlFor:"inputPassword",className:"col-sm-3 col-form-label",children:"Nachname"}),(0,j.jsx)("div",{className:"col-sm-9",children:(0,j.jsx)("input",{type:"text",name:"lname",value:m.lname,onChange:X,placeholder:"verma",className:"form-control",id:"inputPassword",required:!0})})]}),(0,j.jsxs)("div",{className:"mb-2 row",children:[(0,j.jsx)("label",{htmlFor:"inputPassword",className:"col-sm-3 col-form-label",children:"Telefon"}),(0,j.jsx)("div",{className:"col-sm-9",children:(0,j.jsx)("input",{type:"tel",name:"phone",value:m.phone,onChange:e=>{const t=e.target.value.replace(/[^0-9+]/g,"");/^\+?[0-9]*$/.test(t)&&X({target:{name:"phone",value:t}})},placeholder:"e.g. 91+ 8354568464",className:"form-control",id:"inputPhone",maxLength:10,minLength:3})})]}),(0,j.jsxs)("div",{className:"mb-2 row",children:[(0,j.jsx)("label",{htmlFor:"inputPassword",className:"col-sm-3 col-form-label",children:"Mail"}),(0,j.jsx)("div",{className:"col-sm-9",children:(0,j.jsx)("input",{type:"email",name:"email",onChange:e=>{const t=e.target.value;/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(t.toLowerCase())?A(t):A("")},placeholder:"jo@gmail.com",className:"form-control",id:"inputPassword"})})]}),(0,j.jsxs)("div",{className:"mb-2 row",children:[(0,j.jsx)("label",{htmlFor:"inputPassword",className:"col-sm-3 col-form-label",children:"Geschlecht"}),(0,j.jsxs)("div",{className:"col-sm-9",children:[(0,j.jsx)("input",{type:"radio",name:"gender",value:"male",onChange:X,checked:"male"===m.gender})," ","\xa0 M\xe4nnlich \xa0",(0,j.jsx)("input",{type:"radio",name:"gender",value:"female",onChange:X,checked:"female"===m.gender})," ","\xa0 Weiblich \xa0",(0,j.jsx)("input",{type:"radio",name:"gender",value:"other",onChange:X,checked:"other"===m.gender}),"\xa0 Andere"]})]}),(0,j.jsxs)("div",{className:"mb-2 row",children:[(0,j.jsx)("label",{htmlFor:"inputPassword",className:"col-sm-3 col-form-label",children:"Status"}),(0,j.jsx)("div",{className:"col-sm-9",children:(0,j.jsxs)("select",{className:"form-control",name:"statu",onChange:X,value:m.statu,children:[(0,j.jsx)("option",{value:"HVD-PV",children:"HVD-PV"}),(0,j.jsx)("option",{value:"PV-ALT",children:"PV-ALT"})]})})]})]})})}),(0,j.jsxs)(v.Z.Footer,{children:[(0,j.jsxs)("button",{className:"btn btn",onClick:Q,style:{background:"#d04545",color:"white"},children:[" ","Abbrechen"]}),"\xa0 \xa0",(0,j.jsx)("button",{className:"btn btn",onClick:async()=>{try{let e=await fetch("".concat(r,"/contact/create_contact"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(te)});if(!e.ok)throw new Error("HTTP error! Status: ".concat(e.status));let t=await e.json();p.Am.success(null===t||void 0===t?void 0:t.message),h(""),A(""),Q(),ae()}catch(e){p.Am.error("Email-`Id Already Exists")}},style:{background:"#0b5995",color:"white"},children:"Speichern"})]})]})," "]})]})}),(0,j.jsxs)("div",{style:{background:"#fff"},className:"mx-3",children:[(0,j.jsx)(g,{}),(0,j.jsx)("div",{className:"responsive-table-container",children:(0,j.jsx)(x.Z,{dataSource:le,columns:d,pagination:!1,responsive:!0,rowKey:e=>e._id,rowSelection:{type:"checkbox",onChange:(e,t)=>{console.log("selectedRowKeys: ".concat(e),"selectedRows: ",t)},getCheckboxProps:e=>({disabled:"Disabled User"===e.name,name:e.name})}})}),(0,j.jsxs)("div",{className:"row",children:[(0,j.jsx)("div",{className:"col-sm-10",children:(0,j.jsx)(S.Z,{spacing:2,children:(0,j.jsx)(k.Z,{count:W,variant:"outlined",shape:"rounded",page:B,onChange:(e,t)=>{K(t)}})})}),(0,j.jsx)("div",{className:"col-sm-2 text-end",children:(0,j.jsxs)("select",{className:"form-control form-select",value:$,onChange:e=>{q(parseInt(e.target.value,10)),K(1)},children:[(0,j.jsx)("option",{value:10,children:"10 pro Seite"}),(0,j.jsx)("option",{value:20,children:"20 pro Seite"}),(0,j.jsx)("option",{value:50,children:"50 pro Seite"}),(0,j.jsx)("option",{value:100,children:"100 pro Seite"})]})})]}),(0,j.jsx)("br",{})]}),(0,j.jsx)(p.Ix,{})]})},_=l.memo(A)}}]);
//# sourceMappingURL=787.079e4426.chunk.js.map