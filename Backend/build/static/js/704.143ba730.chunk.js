"use strict";(self.webpackChunk_coreui_coreui_free_react_admin_template=self.webpackChunk_coreui_coreui_free_react_admin_template||[]).push([[704,912],{38292:(e,t,n)=>{n.r(t),n.d(t,{default:()=>s});var a=n(69060),i=n(51560),c=n(82496);const l=e=>{var t,n,l,s,o,r;let{getCustomerData:d}=e;const h=(0,i.i6)();let m=localStorage.getItem("tabId")||"customer_info";const C=(e,t,n)=>(n&&"a"===n.target.tagName.toLowerCase()&&n.preventDefault(),"KlientInnen"===t?(localStorage.setItem("tabId","customer_info"),h("/customer/customer_info")):"Kontakte"===t?(localStorage.setItem("tabId","contact"),h("/customer/contact")):"Aktivitat"===t?(localStorage.setItem("tabId","activity"),h("/customer/activity")):"Dokumente"===t?(localStorage.setItem("tabId","document"),h("/customer/document")):"Vollmachten"===t?(localStorage.setItem("tabId","attorney"),h("/customer/attorney")):"HVD-PV"===t?(localStorage.setItem("tabId","services"),h("/customer/services")):"Rechnung"===t?(localStorage.setItem("tabId","bills"),h("/customer/bills")):void 0);(0,a.useEffect)((()=>{C()}),[m]);let u=localStorage.getItem("customerRecord"),v=JSON.parse(u);console.log(null===v||void 0===v?void 0:v.startDate);const x=null===v||void 0===v?void 0:v.startDate,g=new Date(x).toLocaleDateString("en-US",{year:"2-digit",month:"2-digit",day:"2-digit"}).replace(/\//g,"."),p=(null===v||void 0===v||null===(t=v.fname)||void 0===t?void 0:t.slice(0,1).toUpperCase())+(null===v||void 0===v||null===(n=v.fname)||void 0===n?void 0:n.slice(1).toLowerCase()),f=(null===v||void 0===v||null===(l=v.lname)||void 0===l?void 0:l.slice(0,1).toUpperCase())+(null===v||void 0===v||null===(s=v.lname)||void 0===s?void 0:s.slice(1).toLowerCase());let j=(null===v||void 0===v||null===(o=v.street)||void 0===o?void 0:o.slice(0,1).toUpperCase())+(null===v||void 0===v||null===(r=v.street)||void 0===r?void 0:r.slice(1).toLowerCase())+",    "+(null===v||void 0===v?void 0:v.plz)+"  "+(null===v||void 0===v?void 0:v.city);return(0,c.jsx)(c.Fragment,{children:(0,c.jsxs)("div",{className:"whiteBox",children:[(0,c.jsx)("div",{className:"blueBoxTop",children:(0,c.jsx)("div",{className:"container-fluid",children:(0,c.jsxs)("div",{className:"row d-flex align-items-center",children:[(0,c.jsxs)("div",{className:"col-md-4",children:[(0,c.jsxs)("h3",{children:["KlientInnen: ","".concat(p," ").concat(f)]}),(0,c.jsxs)("address",{children:[(0,c.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"22",height:"22",viewBox:"0 0 22 22",fill:"none",children:[(0,c.jsx)("g",{clipPath:"url(#clip0_207_8532)",children:(0,c.jsx)("path",{d:"M16.817 8.89543C16.817 5.62623 14.1646 2.97386 10.8954 2.97386C7.62623 2.97386 4.97386 5.62623 4.97386 8.89543C4.97386 9.40534 5.15891 10.1949 5.60303 11.2476C6.03481 12.2674 6.64753 13.3942 7.35071 14.5333C8.52269 16.4331 9.87972 18.2671 10.8954 19.5748C11.9153 18.2671 13.2723 16.4331 14.4402 14.5333C15.1433 13.3942 15.7561 12.2674 16.1878 11.2476C16.632 10.1949 16.817 9.40534 16.817 8.89543ZM18.7909 8.89543C18.7909 12.4895 13.9796 18.8881 11.87 21.5281C11.3642 22.1573 10.4266 22.1573 9.92084 21.5281C7.81128 18.8881 3 12.4895 3 8.89543C3 4.5365 6.5365 1 10.8954 1C15.2544 1 18.7909 4.5365 18.7909 8.89543ZM12.2113 8.89543C12.2113 8.54643 12.0727 8.21173 11.8259 7.96495C11.5791 7.71817 11.2444 7.57953 10.8954 7.57953C10.5464 7.57953 10.2117 7.71817 9.96495 7.96495C9.71817 8.21173 9.57953 8.54643 9.57953 8.89543C9.57953 9.24443 9.71817 9.57914 9.96495 9.82592C10.2117 10.0727 10.5464 10.2113 10.8954 10.2113C11.2444 10.2113 11.5791 10.0727 11.8259 9.82592C12.0727 9.57914 12.2113 9.24443 12.2113 8.89543ZM7.60567 8.89543C7.60567 8.02293 7.95227 7.18617 8.56922 6.56922C9.18617 5.95227 10.0229 5.60567 10.8954 5.60567C11.7679 5.60567 12.6047 5.95227 13.2216 6.56922C13.8386 7.18617 14.1852 8.02293 14.1852 8.89543C14.1852 9.76793 13.8386 10.6047 13.2216 11.2216C12.6047 11.8386 11.7679 12.1852 10.8954 12.1852C10.0229 12.1852 9.18617 11.8386 8.56922 11.2216C7.95227 10.6047 7.60567 9.76793 7.60567 8.89543Z",fill:"white"})}),(0,c.jsx)("defs",{children:(0,c.jsx)("clipPath",{id:"clip0_207_8532",children:(0,c.jsx)("rect",{width:"22",height:"22",fill:"white"})})})]}),(0,c.jsx)("span",{children:j})]})]}),(0,c.jsx)("div",{className:"col-md-8 text-md-end",children:(0,c.jsxs)("div",{className:"d-flex justify-content-md-end justify-content-between",children:[(0,c.jsx)("button",{className:"btn btn me-4 header-button",children:(0,c.jsxs)("span",{children:[" ",g]})}),(0,c.jsxs)("button",{className:"btn btn me-4 header-button",children:[(0,c.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"15",viewBox:"0 0 20 15",fill:"#fff",children:[(0,c.jsx)("g",{clipPath:"url(#clip0_60_2870)",children:(0,c.jsx)("path",{d:"M2.5 1.875C2.15625 1.875 1.875 2.15625 1.875 2.5V3.36328L8.61328 8.89453C9.42188 9.55859 10.582 9.55859 11.3906 8.89453L18.125 3.36328V2.5C18.125 2.15625 17.8438 1.875 17.5 1.875H2.5ZM1.875 5.78906V12.5C1.875 12.8438 2.15625 13.125 2.5 13.125H17.5C17.8438 13.125 18.125 12.8438 18.125 12.5V5.78906L12.5781 10.3438C11.0781 11.5742 8.91797 11.5742 7.42188 10.3438L1.875 5.78906ZM0 2.5C0 1.12109 1.12109 0 2.5 0H17.5C18.8789 0 20 1.12109 20 2.5V12.5C20 13.8789 18.8789 15 17.5 15H2.5C1.12109 15 0 13.8789 0 12.5V2.5Z",fill:"#fff"})}),(0,c.jsx)("defs",{children:(0,c.jsx)("clipPath",{id:"clip0_60_2870",children:(0,c.jsx)("rect",{width:"20",height:"15",fill:"white"})})})]}),(0,c.jsxs)("span",{children:[" ",null===v||void 0===v?void 0:v.email]})]}),(0,c.jsxs)("button",{className:"btn btn header-button",children:[(0,c.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"22",height:"22",viewBox:"0 0 22 22",fill:"none",children:[(0,c.jsx)("g",{clipPath:"url(#clip0_207_8539)",children:(0,c.jsx)("path",{d:"M14.01 11.0623C13.5295 10.8573 12.9729 10.992 12.6418 11.3963L11.6691 12.5858C10.3214 11.8036 9.19642 10.6786 8.41418 9.33086L9.60073 8.36112C10.005 8.03005 10.1427 7.4734 9.93472 6.99292L8.52844 3.7116C8.30871 3.19596 7.75499 2.90885 7.20712 3.02604L3.9258 3.72918C3.38673 3.84344 3 4.32099 3 4.87471C3 11.6483 8.13293 17.2265 14.7219 17.9268C15.0091 17.9561 15.2962 17.9795 15.5891 17.9912H15.5921C15.7708 17.9971 15.9466 18.0029 16.1253 18.0029C16.679 18.0029 17.1566 17.6162 17.2708 17.0771L17.974 13.7958C18.0912 13.2479 17.804 12.6942 17.2884 12.4745L14.0071 11.0682L14.01 11.0623ZM15.9349 16.5937C9.61538 16.4912 4.50882 11.3846 4.40921 5.06515L7.31552 4.44111L8.57532 7.38258L7.52354 8.24393C6.99032 8.68046 6.85262 9.43927 7.19833 10.0369C8.10363 11.5985 9.40444 12.8993 10.966 13.8046C11.5637 14.1503 12.3225 14.0126 12.759 13.4794L13.6203 12.4276L16.5618 13.6874L15.9349 16.5937Z",fill:"white"})}),(0,c.jsx)("defs",{children:(0,c.jsx)("clipPath",{id:"clip0_207_8539",children:(0,c.jsx)("rect",{width:"22",height:"22",fill:"white"})})})]}),(0,c.jsx)("span",{children:null===v||void 0===v?void 0:v.phone})]})]})})]})})}),(0,c.jsx)("div",{className:"whiteBoxWithPdLR",children:(0,c.jsx)("div",{className:"container-fluid",children:(0,c.jsx)("div",{className:"row",children:(0,c.jsx)("div",{className:"col-sm-12",children:(0,c.jsx)("nav",{children:(0,c.jsxs)("div",{className:"nav nav-tabs",id:"nav-tab",role:"tablist",children:[(0,c.jsxs)("button",{className:"nav-link ".concat("customer_info"===m?"active":""),id:"customer_info-tab","data-bs-toggle":"tab",role:"tab","aria-selected":"customer_info"===m,onClick:e=>C(0,"KlientInnen",e),children:[(0,c.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:[(0,c.jsx)("g",{clipPath:"url(#clip0_91_3542)",children:(0,c.jsx)("path",{d:"M12 3.875C14.1549 3.875 16.2215 4.73102 17.7452 6.25476C19.269 7.77849 20.125 9.84512 20.125 12C20.125 14.1549 19.269 16.2215 17.7452 17.7452C16.2215 19.269 14.1549 20.125 12 20.125C9.84512 20.125 7.77849 19.269 6.25476 17.7452C4.73102 16.2215 3.875 14.1549 3.875 12C3.875 9.84512 4.73102 7.77849 6.25476 6.25476C7.77849 4.73102 9.84512 3.875 12 3.875ZM12 22C14.6522 22 17.1957 20.9464 19.0711 19.0711C20.9464 17.1957 22 14.6522 22 12C22 9.34784 20.9464 6.8043 19.0711 4.92893C17.1957 3.05357 14.6522 2 12 2C9.34784 2 6.8043 3.05357 4.92893 4.92893C3.05357 6.8043 2 9.34784 2 12C2 14.6522 3.05357 17.1957 4.92893 19.0711C6.8043 20.9464 9.34784 22 12 22ZM10.4375 15.125C9.91797 15.125 9.5 15.543 9.5 16.0625C9.5 16.582 9.91797 17 10.4375 17H13.5625C14.082 17 14.5 16.582 14.5 16.0625C14.5 15.543 14.082 15.125 13.5625 15.125H13.25V11.6875C13.25 11.168 12.832 10.75 12.3125 10.75H10.4375C9.91797 10.75 9.5 11.168 9.5 11.6875C9.5 12.207 9.91797 12.625 10.4375 12.625H11.375V15.125H10.4375ZM12 9.5C12.3315 9.5 12.6495 9.3683 12.8839 9.13388C13.1183 8.89946 13.25 8.58152 13.25 8.25C13.25 7.91848 13.1183 7.60054 12.8839 7.36612C12.6495 7.1317 12.3315 7 12 7C11.6685 7 11.3505 7.1317 11.1161 7.36612C10.8817 7.60054 10.75 7.91848 10.75 8.25C10.75 8.58152 10.8817 8.89946 11.1161 9.13388C11.3505 9.3683 11.6685 9.5 12 9.5Z"})}),(0,c.jsx)("defs",{children:(0,c.jsx)("clipPath",{id:"clip0_91_3542",children:(0,c.jsx)("rect",{width:"24",height:"24",fill:"white"})})})]}),(0,c.jsx)("span",{children:" KlientInnen "})]}),(0,c.jsxs)("button",{className:"nav-link ".concat("contact"===m?"active":""),id:"contact-tab","data-bs-toggle":"tab",role:"tab","aria-controls":"contact","aria-selected":"contact"===m,onClick:e=>C(0,"Kontakte",e),children:[" ",(0,c.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"19",height:"18",viewBox:"0 0 19 18",fill:"none",children:[(0,c.jsx)("g",{clipPath:"url(#clip0_431_39097)",children:(0,c.jsx)("path",{d:"M13.917 3C14.192 3 14.417 3.225 14.417 3.5V15.5C14.417 15.775 14.192 16 13.917 16H4.91699C4.64199 16 4.41699 15.775 4.41699 15.5V3.5C4.41699 3.225 4.64199 3 4.91699 3H13.917ZM4.91699 1.5C3.81387 1.5 2.91699 2.39688 2.91699 3.5V15.5C2.91699 16.6031 3.81387 17.5 4.91699 17.5H13.917C15.0201 17.5 15.917 16.6031 15.917 15.5V3.5C15.917 2.39688 15.0201 1.5 13.917 1.5H4.91699ZM9.41699 9.5C9.94742 9.5 10.4561 9.28929 10.8312 8.91421C11.2063 8.53914 11.417 8.03043 11.417 7.5C11.417 6.96957 11.2063 6.46086 10.8312 6.08579C10.4561 5.71071 9.94742 5.5 9.41699 5.5C8.88656 5.5 8.37785 5.71071 8.00278 6.08579C7.62771 6.46086 7.41699 6.96957 7.41699 7.5C7.41699 8.03043 7.62771 8.53914 8.00278 8.91421C8.37785 9.28929 8.88656 9.5 9.41699 9.5ZM8.41699 10.5C7.03574 10.5 5.91699 11.6188 5.91699 13C5.91699 13.275 6.14199 13.5 6.41699 13.5H12.417C12.692 13.5 12.917 13.275 12.917 13C12.917 11.6188 11.7982 10.5 10.417 10.5H8.41699ZM17.917 4C17.917 3.725 17.692 3.5 17.417 3.5C17.142 3.5 16.917 3.725 16.917 4V6C16.917 6.275 17.142 6.5 17.417 6.5C17.692 6.5 17.917 6.275 17.917 6V4ZM17.417 7.5C17.142 7.5 16.917 7.725 16.917 8V10C16.917 10.275 17.142 10.5 17.417 10.5C17.692 10.5 17.917 10.275 17.917 10V8C17.917 7.725 17.692 7.5 17.417 7.5ZM17.917 12C17.917 11.725 17.692 11.5 17.417 11.5C17.142 11.5 16.917 11.725 16.917 12V14C16.917 14.275 17.142 14.5 17.417 14.5C17.692 14.5 17.917 14.275 17.917 14V12Z"})}),(0,c.jsx)("defs",{children:(0,c.jsx)("clipPath",{id:"clip0_431_39097",children:(0,c.jsx)("rect",{width:"18",height:"18",fill:"white",transform:"translate(0.666992)"})})})]}),(0,c.jsx)("span",{children:" Kontakte"})]}),(0,c.jsxs)("button",{className:"nav-link ".concat("activity"===m?"active":""),id:"activity-tab","data-bs-toggle":"tab","data-bs-target":"#activity",role:"tab","aria-controls":"activity","aria-selected":"activity"===m,onClick:e=>C(0,"Aktivitat",e),children:[(0,c.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"19",height:"18",viewBox:"0 0 19 18",fill:"none",children:[(0,c.jsx)("g",{clipPath:"url(#clip0_207_8581)",children:(0,c.jsx)("path",{d:"M9.48594 3.00021C9.74609 2.99317 9.97813 3.16661 10.0438 3.41974L11.9023 10.5424L12.5375 9.19005C12.7531 8.73067 13.2172 8.43536 13.7258 8.43536H16.4375C16.7492 8.43536 17 8.68614 17 8.99786C17 9.30958 16.7492 9.56036 16.4375 9.56036H13.7258C13.6531 9.56036 13.5875 9.60255 13.557 9.66817L12.2586 12.4268C12.1578 12.64 11.9328 12.769 11.6984 12.7479C11.4641 12.7268 11.2648 12.558 11.2062 12.3307L9.56328 6.03302L7.80078 14.5525C7.74922 14.808 7.52891 14.9932 7.26875 15.0002C7.00859 15.0072 6.77656 14.8385 6.70859 14.5877L5.35859 9.70099C5.33516 9.61896 5.2625 9.56271 5.17813 9.56271H2.5625C2.25078 9.56271 2 9.31192 2 9.00021C2 8.68849 2.25078 8.43771 2.5625 8.43771H5.17813C5.76875 8.43771 6.28672 8.83146 6.44375 9.40099L7.17031 12.0401L8.94922 3.44786C9.00313 3.19239 9.22344 3.00724 9.48594 3.00021Z"})}),(0,c.jsx)("defs",{children:(0,c.jsx)("clipPath",{id:"clip0_207_8581",children:(0,c.jsx)("rect",{width:"18",height:"18",fill:"white",transform:"translate(0.5)"})})})]}),(0,c.jsx)("span",{children:" Aktivitat"})]}),(0,c.jsxs)("button",{className:"nav-link ".concat("document"===m?"active":""),id:"document-tab","data-bs-toggle":"tab","data-bs-target":"#document",role:"tab","aria-controls":"document","aria-selected":"document"===m,onClick:e=>C(0,"Dokumente",e),children:[(0,c.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"19",height:"18",viewBox:"0 0 19 18",fill:"none",children:[(0,c.jsx)("g",{clipPath:"url(#clip0_207_8589)",children:(0,c.jsx)("path",{d:"M13.125 15.0938C13.3828 15.0938 13.5938 14.8828 13.5938 14.625V6.1875H11.25C10.7314 6.1875 10.3125 5.76855 10.3125 5.25V2.90625H5.625C5.36719 2.90625 5.15625 3.11719 5.15625 3.375V14.625C5.15625 14.8828 5.36719 15.0938 5.625 15.0938H13.125ZM3.75 3.375C3.75 2.34082 4.59082 1.5 5.625 1.5H10.4736C10.9717 1.5 11.4492 1.69629 11.8008 2.04785L14.4521 4.69922C14.8037 5.05078 15 5.52832 15 6.02637V14.625C15 15.6592 14.1592 16.5 13.125 16.5H5.625C4.59082 16.5 3.75 15.6592 3.75 14.625V3.375Z"})}),(0,c.jsx)("defs",{children:(0,c.jsx)("clipPath",{id:"clip0_207_8589",children:(0,c.jsx)("rect",{width:"18",height:"18",fill:"white",transform:"translate(0.75)"})})})]}),(0,c.jsx)("span",{children:" Dokumente"})]}),(0,c.jsxs)("button",{className:"nav-link ".concat("attorney"===m?"active":""),id:"attorney-tab","data-bs-toggle":"tab","data-bs-target":"#attorney",role:"tab","aria-controls":"attorney","aria-selected":"attorney"===m,onClick:e=>C(0,"Vollmachten",e),children:[(0,c.jsx)("i",{className:"fa-solid fa-paint-roller fa-fw"}),"Vollmachten"]}),(0,c.jsxs)("button",{className:"nav-link ".concat("services"===m?"active":""),id:"services-tab","data-bs-toggle":"tab","data-bs-target":"#services",role:"tab","aria-controls":"services","aria-selected":"services"===m,onClick:e=>C(0,"HVD-PV",e),children:[" ",(0,c.jsx)("i",{className:"fa-regular fa-lightbulb fa-fw"}),"HVD-PV"]}),(0,c.jsxs)("button",{className:"nav-link ".concat("bills"===m?"active":""),id:"bills-tab","data-bs-toggle":"tab","data-bs-target":"#bills",role:"tab","aria-controls":"bills","aria-selected":"bills"===m,onClick:e=>C(0,"Rechnung",e),children:[(0,c.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"19",height:"18",viewBox:"0 0 19 18",fill:"none",children:[(0,c.jsx)("g",{clipPath:"url(#clip0_207_8565)",children:(0,c.jsx)("path",{d:"M5.125 15.0938H12.625C12.8828 15.0938 13.0938 14.8828 13.0938 14.625V6.1875H10.75C10.2314 6.1875 9.8125 5.76855 9.8125 5.25V2.90625H5.125C4.86719 2.90625 4.65625 3.11719 4.65625 3.375V14.625C4.65625 14.8828 4.86719 15.0938 5.125 15.0938ZM3.25 3.375C3.25 2.34082 4.09082 1.5 5.125 1.5H9.97363C10.4717 1.5 10.9492 1.69629 11.3008 2.04785L13.9521 4.69922C14.3037 5.05078 14.5 5.52832 14.5 6.02637V14.625C14.5 15.6592 13.6592 16.5 12.625 16.5H5.125C4.09082 16.5 3.25 15.6592 3.25 14.625V3.375ZM5.59375 4.78125C5.59375 4.52344 5.80469 4.3125 6.0625 4.3125H8.40625C8.66406 4.3125 8.875 4.52344 8.875 4.78125C8.875 5.03906 8.66406 5.25 8.40625 5.25H6.0625C5.80469 5.25 5.59375 5.03906 5.59375 4.78125ZM5.59375 6.65625C5.59375 6.39844 5.80469 6.1875 6.0625 6.1875H8.40625C8.66406 6.1875 8.875 6.39844 8.875 6.65625C8.875 6.91406 8.66406 7.125 8.40625 7.125H6.0625C5.80469 7.125 5.59375 6.91406 5.59375 6.65625ZM8.875 13.2188C8.875 12.9609 9.08594 12.75 9.34375 12.75H11.6875C11.9453 12.75 12.1562 12.9609 12.1562 13.2188C12.1562 13.4766 11.9453 13.6875 11.6875 13.6875H9.34375C9.08594 13.6875 8.875 13.4766 8.875 13.2188ZM6.53125 8.0625H11.2188C11.7373 8.0625 12.1562 8.48145 12.1562 9V10.875C12.1562 11.3936 11.7373 11.8125 11.2188 11.8125H6.53125C6.0127 11.8125 5.59375 11.3936 5.59375 10.875V9C5.59375 8.48145 6.0127 8.0625 6.53125 8.0625Z"})}),(0,c.jsx)("defs",{children:(0,c.jsx)("clipPath",{id:"clip0_207_8565",children:(0,c.jsx)("rect",{width:"18",height:"18",fill:"white",transform:"translate(0.25)"})})})]}),(0,c.jsx)("span",{children:" Rechnung "})]})]})})})})})})]})})},s=a.memo(l)},37704:(e,t,n)=>{n.r(t),n.d(t,{default:()=>_});var a=n(69060),i=n(45072);const c={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M877.1 238.7L770.6 132.3c-13-13-30.4-20.3-48.8-20.3s-35.8 7.2-48.8 20.3L558.3 246.8c-13 13-20.3 30.5-20.3 48.9 0 18.5 7.2 35.8 20.3 48.9l89.6 89.7a405.46 405.46 0 01-86.4 127.3c-36.7 36.9-79.6 66-127.2 86.6l-89.6-89.7c-13-13-30.4-20.3-48.8-20.3a68.2 68.2 0 00-48.8 20.3L132.3 673c-13 13-20.3 30.5-20.3 48.9 0 18.5 7.2 35.8 20.3 48.9l106.4 106.4c22.2 22.2 52.8 34.9 84.2 34.9 6.5 0 12.8-.5 19.2-1.6 132.4-21.8 263.8-92.3 369.9-198.3C818 606 888.4 474.6 910.4 342.1c6.3-37.6-6.3-76.3-33.3-103.4zm-37.6 91.5c-19.5 117.9-82.9 235.5-178.4 331s-213 158.9-330.9 178.4c-14.8 2.5-30-2.5-40.8-13.2L184.9 721.9 295.7 611l119.8 120 .9.9 21.6-8a481.29 481.29 0 00285.7-285.8l8-21.6-120.8-120.7 110.8-110.9 104.5 104.5c10.8 10.8 15.8 26 13.3 40.8z"}}]},name:"phone",theme:"outlined"};var l=n(90092),s=function(e,t){return a.createElement(l.c,(0,i.c)({},e,{ref:t,icon:c}))};const o=a.forwardRef(s);const r={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M699 353h-46.9c-10.2 0-19.9 4.9-25.9 13.3L469 584.3l-71.2-98.8c-6-8.3-15.6-13.3-25.9-13.3H325c-6.5 0-10.3 7.4-6.5 12.7l124.6 172.8a31.8 31.8 0 0051.7 0l210.6-292c3.9-5.3.1-12.7-6.4-12.7z"}},{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}}]},name:"check-circle",theme:"outlined"};var d=function(e,t){return a.createElement(l.c,(0,i.c)({},e,{ref:t,icon:r}))};const h=a.forwardRef(d);const m={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M440.6 462.6a8.38 8.38 0 00-7.5-4.6h-48.8c-1.3 0-2.6.4-3.9 1a8.4 8.4 0 00-3.4 11.4l87.4 161.1H419c-4.6 0-8.4 3.8-8.4 8.4V665c0 4.6 3.8 8.4 8.4 8.4h63V702h-63c-4.6 0-8.4 3.8-8.4 8.4v25.1c0 4.6 3.8 8.4 8.4 8.4h63v49.9c0 4.6 3.8 8.4 8.4 8.4h43.7c4.6 0 8.4-3.8 8.4-8.4v-49.9h63.3c4.7 0 8.4-3.8 8.2-8.5v-25c0-4.6-3.8-8.4-8.4-8.4h-63.3v-28.6h63.3c4.6 0 8.4-3.8 8.4-8.4v-25.1c0-4.6-3.8-8.4-8.4-8.4h-45.9l87.2-161a8.45 8.45 0 00-7.4-12.4h-47.8c-3.1 0-6 1.8-7.5 4.6l-71.9 141.9-71.7-142zM832 64H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V96c0-17.7-14.3-32-32-32zm-40 824H232V193.1l260.3 204.1c11.6 9.1 27.9 9.1 39.5 0L792 193.1V888zm0-751.3h-31.7L512 331.3 263.7 136.7H232v-.7h560v.7z"}}]},name:"red-envelope",theme:"outlined"};var C=function(e,t){return a.createElement(l.c,(0,i.c)({},e,{ref:t,icon:m}))};const u=a.forwardRef(C);const v={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M820 436h-40c-4.4 0-8 3.6-8 8v40c0 4.4 3.6 8 8 8h40c4.4 0 8-3.6 8-8v-40c0-4.4-3.6-8-8-8zm32-104H732V120c0-4.4-3.6-8-8-8H300c-4.4 0-8 3.6-8 8v212H172c-44.2 0-80 35.8-80 80v328c0 17.7 14.3 32 32 32h168v132c0 4.4 3.6 8 8 8h424c4.4 0 8-3.6 8-8V772h168c17.7 0 32-14.3 32-32V412c0-44.2-35.8-80-80-80zM360 180h304v152H360V180zm304 664H360V568h304v276zm200-140H732V500H292v204H160V412c0-6.6 5.4-12 12-12h680c6.6 0 12 5.4 12 12v292z"}}]},name:"printer",theme:"outlined"};var x=function(e,t){return a.createElement(l.c,(0,i.c)({},e,{ref:t,icon:v}))};const g=a.forwardRef(x);var p=n(45248),f=n(32980),j=(n(21680),n(98372)),w=n(82496);const b=e=>{let{updateData:t,search:n}=e;const i="http://95.217.77.208:4142",[c,l]=(0,a.useState)(1),[s,r]=(0,a.useState)([]),[d,m]=(0,a.useState)(0),[C,v]=(0,a.useState)([]);return console.log("eemployeeData",C),(0,a.useEffect)((()=>{(async()=>{try{var e,t;const a=await j.c.get("".concat(i,"/activity/get_activity?keyword=").concat(n,"&page=").concat(c));r(null===a||void 0===a||null===(e=a.data)||void 0===e?void 0:e.data),m(null===a||void 0===a||null===(t=a.data)||void 0===t?void 0:t.pageCount)}catch(a){console.log(a)}})(),(async()=>{try{const e=await fetch("".concat(i,"/user/get/employeeData")),t=await e.json();v(null===t||void 0===t?void 0:t.data)}catch(e){console.error("Error fetching customer record:",e)}})()}),[t,c,n]),(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)("div",{className:"container-fluid",children:(0,w.jsx)("div",{className:"row",children:(0,w.jsx)("div",{className:"col",children:(0,w.jsx)("div",{className:"block-wrap",children:(0,w.jsx)("div",{className:"table-responsive",children:(0,w.jsxs)("table",{className:"table",children:[(0,w.jsx)("thead",{children:(0,w.jsxs)("tr",{children:[(0,w.jsx)("th",{className:"col-1 ",children:"AKTION"}),(0,w.jsx)("th",{className:"col-1 ",children:"DATUM"}),(0,w.jsx)("th",{className:"col-4 ",children:"NOTIZ"}),(0,w.jsx)("th",{className:"col-4 ",children:"MITARBEITERINNEN"})]})}),(0,w.jsx)("tbody",{children:null===s||void 0===s?void 0:s.map((e=>{const{createdAt:t,icon:n,message:a,_id:i}=e,c=new Date(t),l=null===c||void 0===c?void 0:c.getUTCDate(),s=(null===c||void 0===c?void 0:c.getUTCMonth())+1,r=null===c||void 0===c?void 0:c.getUTCFullYear(),d="".concat(l,".").concat(s<10?"0":"").concat(s,".").concat(r<10?"0":"").concat(r);return(0,w.jsxs)("tr",{style:{margin:"auto",width:"50%",padding:" 10px"},children:[(0,w.jsx)("td",{children:(0,w.jsx)("span",{style:{border:"1px solid #015291",borderRadius:"5px",width:"40px",height:"40px",padding:"5px",textAlign:"center",color:"#015291",display:"flex",justifyContent:"center",alignItems:"center"},children:(m=n,"PhoneOutlined"===m?(0,w.jsx)(o,{}):"CheckCircleOutlined"===m?(0,w.jsx)(h,{}):"PrinterOutlined"===m?(0,w.jsx)(g,{}):"RedEnvelopeOutlined"===m?(0,w.jsx)(u,{}):void 0)})}),(0,w.jsxs)("td",{children:[d," "]}),(0,w.jsx)("td",{children:a}),(0,w.jsx)("td",{children:(0,w.jsx)("ol",{children:C.map((e=>(0,w.jsx)("li",{children:e.username},e.id)))})})]},i);var m}))})]})})})})})}),(0,w.jsx)(f.jd,{})]})};var y=n(38292),N=n(29816);const k=()=>{let e=localStorage.getItem("customerDatat"),t=JSON.parse(e);const[n,i]=(0,a.useState)("white"),[c,l]=(0,a.useState)("white"),[s,r]=(0,a.useState)("white"),[d,m]=(0,a.useState)("white"),[C,v]=(0,a.useState)(!1),[x,j]=(0,a.useState)(!1),[k,_]=(0,a.useState)(!1),[H,V]=(0,a.useState)(!1),[L,M]=(0,a.useState)(!1),[I,S]=(0,a.useState)(""),[Z,D]=(0,a.useState)(""),[P,R]=(0,a.useState)(!1),[T,E]=(0,a.useState)(!0),[z,B]=(0,a.useState)({message:"",customer_id:null===t||void 0===t?void 0:t._id}),O=(e,t,n)=>{switch(S(e),e){case"PhoneOutlined":v(!0),j(!1),_(!1),V(!1),i(t),l("white"),r("white"),m("white");break;case"CheckCircleOutlined":j(!0),v(!1),_(!1),V(!1),l(t),i("white"),r("white"),m("white");break;case"RedEnvelopeOutlined":_(!0),j(!1),v(!1),V(!1),r(t),l("white"),i("white"),m("white");break;case"PrinterOutlined":V(!0),_(!1),j(!1),v(!1),m(t),l("white"),r("white"),i("white")}};let A={...z,icon:I};return(0,w.jsxs)("div",{className:"inner-page-wrap",style:{background:"white"},children:[(0,w.jsx)(y.default,{}),(0,w.jsxs)("div",{className:"row  mt-2 mx-3",children:[(0,w.jsx)("div",{className:"col-md-2 tab-title-activity d-flex",children:(0,w.jsx)("h4",{children:"Beschreibung"})}),(0,w.jsxs)("div",{className:"col-md-7",children:[(0,w.jsx)(o,{className:"p-2",style:{border:"1px solid #244D92",borderRadius:"5px",marginRight:"10px",background:n,color:C?"white":"#244D92"},onClick:()=>O("PhoneOutlined","#015290")}),(0,w.jsx)(h,{className:"p-2",style:{border:"1px solid #244D92",borderRadius:"5px",marginRight:"10px",background:c,color:x?"white":"#244D92"},onClick:()=>O("CheckCircleOutlined","#015290")}),(0,w.jsx)(u,{className:"p-2",style:{border:"1px solid #244D92",borderRadius:"5px",marginRight:"10px",background:s,color:k?"white":"#244D92"},onClick:()=>O("RedEnvelopeOutlined","#015290")}),(0,w.jsx)(g,{className:"p-2",style:{border:"1px solid #244D92",borderRadius:"5px",marginRight:"10px",background:d,color:H?"white":"#244D92"},onClick:()=>O("PrinterOutlined","#015290")})]}),T?(0,w.jsx)("div",{className:"col-md-3 text-end",children:(0,w.jsxs)("button",{className:"btn btn",style:{background:"#015291",color:"white"},onClick:()=>{R(!0),E(!1)},children:[(0,w.jsx)(N.wRB,{}),"Aktivit\xe4t hinzuf\xfcgen"]})}):""]}),(0,w.jsx)("hr",{}),(0,w.jsxs)("div",{className:"tab-content",children:[(0,w.jsx)("div",{className:"container-fluid",children:(0,w.jsx)("div",{className:"row",children:(0,w.jsx)("div",{className:"col",children:(0,w.jsx)("div",{className:"block-wrap",children:(0,w.jsx)("div",{className:"container-fluid",children:P?(0,w.jsxs)("div",{className:"mt-2",children:[(0,w.jsx)("div",{className:"row",children:(0,w.jsx)("textarea",{className:"form-control",rows:6,name:"message",placeholder:"Notiz",value:null===z||void 0===z?void 0:z.message,onChange:e=>{const{name:t,value:n}=e.target;B({...z,[t]:n})}})}),(0,w.jsx)("div",{className:"bottomBtnBg",children:(0,w.jsx)("div",{className:"row",children:(0,w.jsx)("div",{className:"col-sm-12",children:(0,w.jsxs)("div",{style:{float:"right"},children:[(0,w.jsx)("button",{className:"btn",style:{background:"#d04545",color:"white"},onClick:()=>{R(!1),E(!0)},children:"Abbrechen"}),"\xa0\xa0",(0,w.jsx)("button",{className:"btn mx-2",style:{background:"#0b5995",color:"white"},onClick:async()=>{for(const t in z)if(!z[t])return void f.m4.error("Bitte f\xfcllen Sie das Feld ".concat(t," aus"));try{const e=await(0,p.K8)("".concat("http://95.217.77.208:4142","/activity/create_activity"),A);"activity was created"===(null===e||void 0===e?void 0:e.message)?(f.m4.success("Aktivit\xe4tsdaten wurden erfolgreich erstellt"),R(!1),B({message:""}),m("white"),l("white"),r("white"),i("white"),V(!1),_(!1),j(!1),v(!1),E(!0)):f.m4.error("Etwas ist schief gelaufen"),M(!L),R(!1)}catch(e){console.log(e)}},children:"Aktivit\xe4t hinzuf\xfcgen"})]})})})})]}):(0,w.jsxs)("div",{className:"row ",children:[(0,w.jsxs)("div",{className:"col-sm-4",children:[(0,w.jsx)("p",{children:"Planen und verwalten Sie Aktivit\xe4ten mit KlientInnen."}),(0,w.jsx)("div",{className:"form-search-control",children:(0,w.jsx)("input",{type:"search",className:"form-control form-search",placeholder:"Ihre Suche eingeben",value:Z,onChange:e=>D(e.target.value)})})]}),(0,w.jsx)("div",{className:"col-sm-8 text-right"})]})})})})})}),(0,w.jsx)(b,{updateData:L,search:Z}),(0,w.jsx)(f.jd,{})]})]})},_=a.memo(k)},90092:(e,t,n)=>{n.d(t,{c:()=>L});var a=n(45072),i=n(32920),c=n(52536),l=n(31024),s=n(69060),o=n(264),r=n.n(o),d=n(25784),h=n(58348),m=n(30800),C=n(81568),u=n(63936),v=n(58952),x=n(73011);function g(e){return"object"===(0,C.c)(e)&&"string"===typeof e.name&&"string"===typeof e.theme&&("object"===(0,C.c)(e.icon)||"function"===typeof e.icon)}function p(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object.keys(e).reduce((function(t,n){var a,i=e[n];if("class"===n)t.className=i,delete t.class;else delete t[n],t[(a=n,a.replace(/-(.)/g,(function(e,t){return t.toUpperCase()})))]=i;return t}),{})}function f(e,t,n){return n?s.createElement(e.tag,(0,m.c)((0,m.c)({key:t},p(e.attrs)),n),(e.children||[]).map((function(n,a){return f(n,"".concat(t,"-").concat(e.tag,"-").concat(a))}))):s.createElement(e.tag,(0,m.c)({key:t},p(e.attrs)),(e.children||[]).map((function(n,a){return f(n,"".concat(t,"-").concat(e.tag,"-").concat(a))})))}function j(e){return(0,d.Mx)(e)[0]}function w(e){return e?Array.isArray(e)?e:[e]:[]}var b=["icon","className","onClick","style","primaryColor","secondaryColor"],y={primaryColor:"#333",secondaryColor:"#E6E6E6",calculated:!1};var N=function(e){var t,n,a=e.icon,i=e.className,c=e.onClick,o=e.style,r=e.primaryColor,d=e.secondaryColor,C=(0,l.c)(e,b),p=s.useRef(),w=y;if(r&&(w={primaryColor:r,secondaryColor:d||j(r)}),function(e){var t=(0,s.useContext)(h.c),n=t.csp,a=t.prefixCls,i="\n.anticon {\n  display: inline-block;\n  color: inherit;\n  font-style: normal;\n  line-height: 0;\n  text-align: center;\n  text-transform: none;\n  vertical-align: -0.125em;\n  text-rendering: optimizeLegibility;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n.anticon > * {\n  line-height: 1;\n}\n\n.anticon svg {\n  display: inline-block;\n}\n\n.anticon::before {\n  display: none;\n}\n\n.anticon .anticon-icon {\n  display: block;\n}\n\n.anticon[tabindex] {\n  cursor: pointer;\n}\n\n.anticon-spin::before,\n.anticon-spin {\n  display: inline-block;\n  -webkit-animation: loadingCircle 1s infinite linear;\n  animation: loadingCircle 1s infinite linear;\n}\n\n@-webkit-keyframes loadingCircle {\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n\n@keyframes loadingCircle {\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n";a&&(i=i.replace(/anticon/g,a)),(0,s.useEffect)((function(){var t=e.current,a=(0,v.C)(t);(0,u.sr)(i,"@ant-design-icons",{prepend:!0,csp:n,attachTo:a})}),[])}(p),t=g(a),n="icon should be icon definiton, but got ".concat(a),(0,x.cp)(t,"[@ant-design/icons] ".concat(n)),!g(a))return null;var N=a;return N&&"function"===typeof N.icon&&(N=(0,m.c)((0,m.c)({},N),{},{icon:N.icon(w.primaryColor,w.secondaryColor)})),f(N.icon,"svg-".concat(N.name),(0,m.c)((0,m.c)({className:i,onClick:c,style:o,"data-icon":N.name,width:"1em",height:"1em",fill:"currentColor","aria-hidden":"true"},C),{},{ref:p}))};N.displayName="IconReact",N.getTwoToneColors=function(){return(0,m.c)({},y)},N.setTwoToneColors=function(e){var t=e.primaryColor,n=e.secondaryColor;y.primaryColor=t,y.secondaryColor=n||j(t),y.calculated=!!n};const k=N;function _(e){var t=w(e),n=(0,i.c)(t,2),a=n[0],c=n[1];return k.setTwoToneColors({primaryColor:a,secondaryColor:c})}var H=["className","icon","spin","rotate","tabIndex","onClick","twoToneColor"];_(d.Iz.primary);var V=s.forwardRef((function(e,t){var n=e.className,o=e.icon,d=e.spin,m=e.rotate,C=e.tabIndex,u=e.onClick,v=e.twoToneColor,x=(0,l.c)(e,H),g=s.useContext(h.c),p=g.prefixCls,f=void 0===p?"anticon":p,j=g.rootClassName,b=r()(j,f,(0,c.c)((0,c.c)({},"".concat(f,"-").concat(o.name),!!o.name),"".concat(f,"-spin"),!!d||"loading"===o.name),n),y=C;void 0===y&&u&&(y=-1);var N=m?{msTransform:"rotate(".concat(m,"deg)"),transform:"rotate(".concat(m,"deg)")}:void 0,_=w(v),V=(0,i.c)(_,2),L=V[0],M=V[1];return s.createElement("span",(0,a.c)({role:"img","aria-label":o.name},x,{ref:t,tabIndex:y,onClick:u,className:b}),s.createElement(k,{icon:o,primaryColor:L,secondaryColor:M,style:N}))}));V.displayName="AntdIcon",V.getTwoToneColor=function(){var e=k.getTwoToneColors();return e.calculated?[e.primaryColor,e.secondaryColor]:e.primaryColor},V.setTwoToneColor=_;const L=V},58348:(e,t,n)=>{n.d(t,{c:()=>a});const a=(0,n(69060).createContext)({})}}]);
//# sourceMappingURL=704.143ba730.chunk.js.map