"use strict";(self.webpackChunk_coreui_coreui_free_react_admin_template=self.webpackChunk_coreui_coreui_free_react_admin_template||[]).push([[5,930],{18930:(e,s,a)=>{a.r(s),a.d(s,{default:()=>d});var n=a(72791),l=a(58617),c=a(84373),t=a(70828),i=a(57689),o=a(80184);const r=()=>{var e,s,a,r,d,m;const h=(0,i.s0)();let x=localStorage.getItem("tabId")||"customer_info";const u=(e,s,a)=>(a&&"a"===a.target.tagName.toLowerCase()&&a.preventDefault(),"KlientInnen"===s?(localStorage.setItem("tabId","customer_info"),h("/customer/customer_info")):"Kontakte"===s?(localStorage.setItem("tabId","contact"),h("/customer/contact")):"Aktivitat"===s?(localStorage.setItem("tabId","activity"),h("/customer/activity")):"Dokumente"===s?(localStorage.setItem("tabId","document"),h("/customer/document")):"Vollmachten"===s?(localStorage.setItem("tabId","attorney"),h("/customer/attorney")):"SPV"===s?(localStorage.setItem("tabId","services"),h("/customer/services")):"Rechnung"===s?(localStorage.setItem("tabId","bills"),h("/customer/bills")):void 0);(0,n.useEffect)((()=>{u()}),[x]);let p=localStorage.getItem("customerDatat"),v=JSON.parse(p);const j=(null===v||void 0===v||null===(e=v.fname)||void 0===e?void 0:e.slice(0,1).toUpperCase())+(null===v||void 0===v||null===(s=v.fname)||void 0===s?void 0:s.slice(1).toLowerCase()),b=(null===v||void 0===v||null===(a=v.lname)||void 0===a?void 0:a.slice(0,1).toUpperCase())+(null===v||void 0===v||null===(r=v.lname)||void 0===r?void 0:r.slice(1).toLowerCase());let g=(null===v||void 0===v||null===(d=v.street)||void 0===d?void 0:d.slice(0,1).toUpperCase())+(null===v||void 0===v||null===(m=v.street)||void 0===m?void 0:m.slice(1).toLowerCase());return(0,o.jsx)(o.Fragment,{children:(0,o.jsxs)("div",{className:"whiteBox",children:[(0,o.jsx)("div",{className:"blueBoxTop",children:(0,o.jsxs)("div",{className:"row",children:[(0,o.jsxs)("div",{className:"col-sm-4",children:[(0,o.jsxs)("p",{style:{color:"white",marginTop:"5px"},children:["KlientInnen: ","".concat(j," ").concat(b)]}),(0,o.jsx)(t.VFp,{style:{color:"white"}}),"\xa0",(0,o.jsx)("span",{style:{color:"white"},children:g})]}),(0,o.jsxs)("div",{className:"col-sm-8 mt-4 text-right",children:[(0,o.jsxs)("button",{className:"btn btn-outline",style:{color:"white",border:"1px solid white",marginRight:"10px"},children:[(0,o.jsx)(l.Zuw,{className:"f-2"})," ",null===v||void 0===v?void 0:v.email]}),(0,o.jsxs)("button",{className:"btn btn-outline",style:{color:"white",border:"1px solid white",marginRight:"10px"},children:[(0,o.jsx)(c.HQO,{className:"f-2"})," ",null===v||void 0===v?void 0:v.phone]})]})]})}),(0,o.jsxs)("div",{className:"whiteBoxWithPdLR",children:[(0,o.jsx)("div",{className:"row",children:(0,o.jsx)("div",{className:"col-sm-12",children:(0,o.jsx)("nav",{children:(0,o.jsxs)("div",{className:"nav nav-tabs",id:"nav-tab",role:"tablist",children:[(0,o.jsxs)("button",{className:"nav-link ".concat("customer_info"===x?"active":""),id:"customer_info-tab","data-bs-toggle":"tab",role:"tab","aria-selected":"customer_info"===x,onClick:e=>u(0,"KlientInnen",e),style:{marginRight:"10px",marginLeft:"20px"},children:[(0,o.jsx)("i",{className:"fa-solid fa-info fa-fw infoIcon"}),"KlientInnen"]}),(0,o.jsxs)("button",{className:"nav-link ".concat("contact"===x?"active":""),id:"contact-tab","data-bs-toggle":"tab",role:"tab","aria-controls":"contact","aria-selected":"contact"===x,onClick:e=>u(0,"Kontakte",e),style:{marginRight:"10px"},children:[" ",(0,o.jsx)("i",{className:"fa-regular fa-address-book fa-fw"}),"Kontakte"]}),(0,o.jsxs)("button",{className:"nav-link ".concat("activity"===x?"active":""),id:"activity-tab","data-bs-toggle":"tab","data-bs-target":"#activity",role:"tab","aria-controls":"activity","aria-selected":"activity"===x,onClick:e=>u(0,"Aktivitat",e),style:{marginRight:"10px"},children:[(0,o.jsx)("i",{className:"fa-solid fa-heart-pulse fa-fw"}),"Aktivitat"]}),(0,o.jsxs)("button",{className:"nav-link ".concat("document"===x?"active":""),id:"document-tab","data-bs-toggle":"tab","data-bs-target":"#document",role:"tab","aria-controls":"document","aria-selected":"document"===x,onClick:e=>u(0,"Dokumente",e),style:{marginRight:"10px"},children:[(0,o.jsx)("i",{className:"fa-regular fa-file fa-fw"}),"Dokumente"]}),(0,o.jsxs)("button",{className:"nav-link ".concat("attorney"===x?"active":""),id:"attorney-tab","data-bs-toggle":"tab","data-bs-target":"#attorney",role:"tab","aria-controls":"attorney","aria-selected":"attorney"===x,onClick:e=>u(0,"Vollmachten",e),style:{marginRight:"10px"},children:[(0,o.jsx)("i",{className:"fa-solid fa-paint-roller fa-fw"}),"Vollmachten"]}),(0,o.jsxs)("button",{className:"nav-link ".concat("services"===x?"active":""),id:"services-tab","data-bs-toggle":"tab","data-bs-target":"#services",role:"tab","aria-controls":"services","aria-selected":"services"===x,onClick:e=>u(0,"SPV",e),style:{marginRight:"10px"},children:[" ",(0,o.jsx)("i",{className:"fa-regular fa-lightbulb fa-fw"}),"SPV"]}),(0,o.jsxs)("button",{className:"nav-link ".concat("bills"===x?"active":""),id:"bills-tab","data-bs-toggle":"tab","data-bs-target":"#bills",role:"tab","aria-controls":"bills","aria-selected":"bills"===x,onClick:e=>u(0,"Rechnung",e),style:{marginRight:"10px"},children:[(0,o.jsx)("i",{className:"fa-regular fa-file-lines fa-fw"}),"Rechnung"]})]})})})}),(0,o.jsx)("br",{})]})]})})},d=n.memo(r)},87005:(e,s,a)=>{a.r(s),a.d(s,{default:()=>r});var n=a(72791),l=a(29655),c=(a(5462),a(18930)),t=a(57689),i=a(80184);const o=()=>{const e=(0,t.s0)(),[s,a]=(0,n.useState)({prevention:"",illness:"",selfDetermination:"",relatives:"",lessons:""}),[o,r]=(0,n.useState)({medicineDesired:"",noIntensive:"",revival:"",noRevival:""}),[d,m]=(0,n.useState)({dyingProcess:"",brainInjury:"",dementia:""}),[h,x]=(0,n.useState)({essential:"",noIntensive:"",servere:"",artificialHydration:"",discomfort:"",medication:"",medicines:"",organDonation:"",researchPurpose:"",defibrillator:"",dyingYeast:"",suicideOption:"",commitment:"",discretionaryArea:""}),[u,p]=(0,n.useState)({familiarEnvironment:"",hospice:"",toHospital:"",notHospital:""}),[v,j]=(0,n.useState)({doctor:"",mentalSupport:"",absolutelyNot:""}),[b,g]=(0,n.useState)({cremation:"",burial:"",arrangement:"",miscellaneous:""}),[y,k]=(0,n.useState)({forms:"",careOrder:""}),[f,N]=(0,n.useState)({regular:"",reduced:""}),[C,w]=(0,n.useState)({urgency:"",alternateAddress:"",creation:"",fname:"",lname:"",address:"",street:"",plz:"",ort:"",phone:"",mobile:"",dataProtection:""}),S=e=>{const{name:s,value:n}=e.target;a((e=>({...e,[s]:n})))},I=e=>{const{name:s,value:a}=e.target;r((e=>({...e,[s]:a})))},D=e=>{const{name:s,value:a}=e.target;m((e=>({...e,[s]:a})))},A=e=>{const{name:s,value:a}=e.target;x((e=>({...e,[s]:a})))},P=e=>{const{name:s,value:a}=e.target;N((e=>({...e,[s]:a})))},R=e=>{const{name:s,value:a}=e.target;p((e=>({...e,[s]:a})))},L=e=>{const{name:s,value:a}=e.target;k((e=>({...e,[s]:a})))},z=e=>{const{name:s,value:a,type:n}=e.target;w((e=>({...e,[s]:a})))},H=e=>{const{name:s,value:a,type:n}=e.target;g((e=>({...e,[s]:a})))},_=(e,s)=>{j((a=>({...a,[e]:s})))};let F=localStorage.getItem("customerDatat"),O=JSON.parse(F);const K={motivation:s,resuscitation:o,situation:d,determination:h,whereabout:u,support:v,funeralwishes:b,fee:f,atorney:y,information:C,customer_id:O._id},E=()=>{a({prevention:"",illness:"",selfDetermination:"",relatives:"",lessons:""}),r({medicineDesired:"",noIntensive:"",revival:"",noRevival:""}),m({dyingProcess:"",brainInjury:"",dementia:""}),x({essential:"",noIntensive:"",servere:"",artificialHydration:"",discomfort:"",medication:"",medicines:"",organDonation:"",researchPurpose:"",defibrillator:"",dyingYeast:"",suicideOption:"",commitment:"",discretionaryArea:""}),p({familiarEnvironment:"",hospice:"",toHospital:"",notHospital:""}),j({doctor:"",mentalSupport:"",absolutelyNot:""}),g({cremation:"",burial:"",arrangement:"",miscellaneous:""}),k({forms:"",careOrder:""}),N({regular:"",reduced:""}),w({urgency:"",alternateAddress:"",creation:"",fname:"",lname:"",address:"",street:"",plz:"",ort:"",phone:"",mobile:"",dataProtection:""})};return(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)("div",{style:{background:"#fff"},children:[(0,i.jsx)(c.default,{}),(0,i.jsx)("h5",{className:"p-2 mx-3",children:"SPV"}),(0,i.jsx)("hr",{}),(0,i.jsx)("div",{className:"px-3",children:(0,i.jsxs)("div",{className:"col-sm-12 ps-3 pt-2",style:{border:"2px solid #ebedef",borderRadius:"5px 5px 5px 5px"},children:[(0,i.jsxs)("div",{className:"row",children:[(0,i.jsx)("h6",{style:{color:"#244D92"},children:"Motivation"}),(0,i.jsx)("div",{className:"col-sm-3",children:"Vorsorge"}),(0,i.jsxs)("div",{className:"col-sm-2 d-flex",children:[(0,i.jsx)("input",{type:"checkbox",checked:"yes"===s.prevention,onChange:S,name:"prevention",value:"yes"})," ","\xa0 ja \xa0 \xa0",(0,i.jsx)("input",{type:"checkbox",checked:"no"===s.prevention,onChange:S,name:"prevention",value:"no"})," ","\xa0 nein"]}),(0,i.jsx)("div",{className:"col-sm-3",children:"Krankheit"}),(0,i.jsxs)("div",{className:"col-sm-2 d-flex",children:[(0,i.jsx)("input",{type:"checkbox",checked:"yes"===s.illness,onChange:S,name:"illness",value:"yes"})," ","\xa0 ja \xa0 \xa0",(0,i.jsx)("input",{type:"checkbox",checked:"no"===s.illness,onChange:S,name:"illness",value:"no"})," ","\xa0 nein"]}),(0,i.jsx)("div",{className:"col-sm-3",children:"Selbstbestimmung"}),(0,i.jsxs)("div",{className:"col-sm-2 d-flex",children:[(0,i.jsx)("input",{type:"checkbox",checked:"yes"===s.selfDetermination,onChange:S,name:"selfDetermination",value:"yes"})," ","\xa0 ja \xa0 \xa0",(0,i.jsx)("input",{type:"checkbox",checked:"no"===s.selfDetermination,onChange:S,name:"selfDetermination",value:"no"})," ","\xa0 nein"]}),(0,i.jsx)("div",{className:"col-sm-3",children:"Angeh\xf6rigenentlastung"}),(0,i.jsxs)("div",{className:"col-sm-2 d-flex",children:[(0,i.jsx)("input",{type:"checkbox",checked:"yes"===s.relatives,onChange:S,name:"relatives",value:"yes"})," ","\xa0 ja \xa0 \xa0",(0,i.jsx)("input",{type:"checkbox",checked:"no"===s.relatives,onChange:S,name:"relatives",value:"no"})," ","\xa0 nein"]}),(0,i.jsx)("div",{className:"col-sm-3",children:"Erfahrungen"}),(0,i.jsxs)("div",{className:"col-sm-2 d-flex",children:[(0,i.jsx)("input",{type:"checkbox",checked:"yes"===s.lessons,onChange:S,name:"lessons",value:"yes"})," ","\xa0 ja \xa0 \xa0",(0,i.jsx)("input",{type:"checkbox",checked:"no"===s.lessons,onChange:S,name:"lessons",value:"no"})," ","\xa0 nein"]})]}),(0,i.jsx)("br",{}),(0,i.jsxs)("div",{className:"row",children:[(0,i.jsx)("h6",{style:{color:"#244D92"},children:"Intensivmedizin und Wiederbelebung"}),(0,i.jsx)("div",{className:"col-sm-3",children:"Intensivmedizin gew\xfcnscht"}),(0,i.jsxs)("div",{className:"col-sm-2 d-flex",children:[(0,i.jsx)("input",{type:"checkbox",name:"medicineDesired",value:"yes",checked:"yes"===o.medicineDesired,onChange:I})," ","\xa0 ja \xa0 \xa0",(0,i.jsx)("input",{type:"checkbox",name:"medicineDesired",value:"no",checked:"no"===o.medicineDesired,onChange:I})," ","\xa0 nein"]}),(0,i.jsx)("div",{className:"col-sm-3",children:"Keine Intensivmedizin"}),(0,i.jsxs)("div",{className:"col-sm-2 d-flex",children:[(0,i.jsx)("input",{type:"checkbox",name:"noIntensive",value:"yes",checked:"yes"===o.noIntensive,onChange:I})," ","\xa0 ja \xa0 \xa0",(0,i.jsx)("input",{type:"checkbox",name:"noIntensive",value:"no",checked:"no"===o.noIntensive,onChange:I})," ","\xa0 nein"]}),(0,i.jsx)("div",{className:"col-sm-3",children:"Wiederbelebung gew\xfcnscht"}),(0,i.jsxs)("div",{className:"col-sm-2 d-flex",children:[(0,i.jsx)("input",{type:"checkbox",name:"revival",value:"yes",checked:"yes"===o.revival,onChange:I})," ","\xa0 ja \xa0 \xa0",(0,i.jsx)("input",{type:"checkbox",name:"revival",value:"no",checked:"no"===o.revival,onChange:I})," ","\xa0 nein"]}),(0,i.jsx)("div",{className:"col-sm-3",children:"Keine Wiederbelebung"}),(0,i.jsxs)("div",{className:"col-sm-2 d-flex",children:[(0,i.jsx)("input",{type:"checkbox",name:"noRevival",value:"yes",checked:"yes"===o.noRevival,onChange:I})," ","\xa0 ja \xa0 \xa0",(0,i.jsx)("input",{type:"checkbox",name:"noRevival",value:"no",checked:"no"===o.noRevival,onChange:I})," ","\xa0 nein"]})]}),(0,i.jsx)("br",{}),(0,i.jsxs)("div",{className:"row",children:[(0,i.jsx)("h6",{style:{color:"#244D92"},children:"Situationen am Lebensende"}),(0,i.jsx)("div",{className:"col-sm-3",children:"Sterbeprozess"}),(0,i.jsxs)("div",{className:"col-sm-2 d-flex",children:[(0,i.jsx)("input",{type:"checkbox",name:"dyingProcess",value:"yes",checked:"yes"===d.dyingProcess,onChange:D})," ","\xa0 ja \xa0 \xa0",(0,i.jsx)("input",{type:"checkbox",name:"dyingProcess",value:"no",checked:"no"===d.dyingProcess,onChange:D})," ","\xa0 nein"]}),(0,i.jsx)("div",{className:"col-sm-3",children:"Gehirnsh\xe4digung"}),(0,i.jsxs)("div",{className:"col-sm-2 d-flex",children:[(0,i.jsx)("input",{type:"checkbox",name:"brainInjury",value:"yes",checked:"yes"===d.brainInjury,onChange:D})," ","\xa0 ja \xa0 \xa0",(0,i.jsx)("input",{type:"checkbox",name:"brainInjury",value:"no",checked:"no"===d.brainInjury,onChange:D})," ","\xa0 nein"]}),(0,i.jsx)("div",{className:"col-sm-3",children:"Demenz"}),(0,i.jsxs)("div",{className:"col-sm-2 d-flex",children:[(0,i.jsx)("input",{type:"checkbox",name:"dementia",value:"yes",checked:"yes"===d.dementia,onChange:D})," ","\xa0 ja \xa0 \xa0",(0,i.jsx)("input",{type:"checkbox",name:"dementia",value:"no",checked:"no"===d.dementia,onChange:D})," ","\xa0 nein"]})]}),(0,i.jsx)("br",{}),(0,i.jsxs)("div",{className:"row",children:[(0,i.jsx)("h6",{style:{color:"#244D92"},children:"Medizinische Festlegungen"}),(0,i.jsx)("div",{className:"col-sm-3",children:"Unverzichtbare Basisversorgung"}),(0,i.jsxs)("div",{className:"col-sm-2 d-flex",children:[(0,i.jsx)("input",{type:"checkbox",checked:"yes"===h.essential,onChange:A,name:"essential",value:"yes"})," ","\xa0 ja \xa0 \xa0",(0,i.jsx)("input",{type:"checkbox",checked:"no"===h.essential,onChange:A,name:"essential",value:"no"})," ","\xa0 nein"]}),(0,i.jsx)("div",{className:"col-sm-3",children:"Schwerstpflegebedurftigkeit"}),(0,i.jsxs)("div",{className:"col-sm-2 d-flex",children:[(0,i.jsx)("input",{type:"checkbox",checked:"yes"===h.servere,onChange:A,name:"servere",value:"yes"})," ","\xa0 ja \xa0 \xa0",(0,i.jsx)("input",{type:"checkbox",checked:"no"===h.servere,onChange:A,name:"servere",value:"no"})," ","\xa0 nein"]}),(0,i.jsx)("div",{className:"col-sm-3",children:"Kunstliche Enahrung"}),(0,i.jsxs)("div",{className:"col-sm-2 d-flex",children:[(0,i.jsx)("input",{type:"checkbox",checked:"yes"===h.noIntensive,onChange:A,name:"noIntensive",value:"yes"})," ","\xa0 ja \xa0 \xa0",(0,i.jsx)("input",{type:"checkbox",checked:"no"===h.noIntensive,onChange:A,name:"noIntensive",value:"no"})," ","\xa0 nein"]}),(0,i.jsx)("div",{className:"col-sm-3",children:"Kunstliche Flussigkeitszufuhr"}),(0,i.jsxs)("div",{className:"col-sm-2 d-flex",children:[(0,i.jsx)("input",{type:"checkbox",checked:"yes"===h.artificialHydration,onChange:A,name:"artificialHydration",value:"yes"})," ","\xa0 ja \xa0 \xa0",(0,i.jsx)("input",{type:"checkbox",checked:"no"===h.artificialHydration,onChange:A,name:"artificialHydration",value:"no"})," ","\xa0 nein"]}),(0,i.jsx)("div",{className:"col-sm-3",children:"Schmerz- und Beschwerdelinderung"}),(0,i.jsxs)("div",{className:"col-sm-2 d-flex",children:[(0,i.jsx)("input",{type:"checkbox",checked:"yes"===h.discomfort,onChange:A,name:"discomfort",value:"yes"})," ","\xa0 ja \xa0 \xa0",(0,i.jsx)("input",{type:"checkbox",checked:"no"===h.discomfort,onChange:A,name:"discomfort",value:"no"})," ","\xa0 nein"]}),(0,i.jsx)("div",{className:"col-sm-3",children:"Medikamente zur Linderung"}),(0,i.jsxs)("div",{className:"col-sm-2 d-flex",children:[(0,i.jsx)("input",{type:"checkbox",checked:"yes"===h.medication,onChange:A,name:"medication",value:"yes"})," ","\xa0 ja \xa0 \xa0",(0,i.jsx)("input",{type:"checkbox",checked:"no"===h.medication,onChange:A,name:"medication",value:"no"})," ","\xa0 nein"]}),(0,i.jsx)("div",{className:"col-sm-3",children:"Medikamentenverzicht"}),(0,i.jsxs)("div",{className:"col-sm-2 d-flex",children:[(0,i.jsx)("input",{type:"checkbox",checked:"yes"===h.medicines,onChange:A,name:"medicines",value:"yes"})," ","\xa0 ja \xa0 \xa0",(0,i.jsx)("input",{type:"checkbox",checked:"no"===h.medicines,onChange:A,name:"medicines",value:"no"})," ","\xa0 nein"]}),(0,i.jsx)("div",{className:"col-sm-3",children:"Organspende"}),(0,i.jsxs)("div",{className:"col-sm-2 d-flex",children:[(0,i.jsx)("input",{type:"checkbox",checked:"yes"===h.organDonation,onChange:A,name:"organDonation",value:"yes"})," ","\xa0 ja \xa0 \xa0",(0,i.jsx)("input",{type:"checkbox",checked:"no"===h.organDonation,onChange:A,name:"organDonation",value:"no"})," ","\xa0 nein"]}),(0,i.jsx)("div",{className:"col-sm-3",children:"Forschungszwecke"}),(0,i.jsxs)("div",{className:"col-sm-2 d-flex",children:[(0,i.jsx)("input",{type:"checkbox",checked:"yes"===h.researchPurpose,onChange:A,name:"researchPurpose",value:"yes"})," ","\xa0 ja \xa0 \xa0",(0,i.jsx)("input",{type:"checkbox",checked:"no"===h.researchPurpose,onChange:A,name:"researchPurpose",value:"no"})," ","\xa0 nein"]}),(0,i.jsx)("div",{className:"col-sm-3",children:"Defibrillator"}),(0,i.jsxs)("div",{className:"col-sm-2 d-flex",children:[(0,i.jsx)("input",{type:"checkbox",checked:"yes"===h.defibrillator,onChange:A,name:"defibrillator",value:"yes"})," ","\xa0 ja \xa0 \xa0",(0,i.jsx)("input",{type:"checkbox",checked:"no"===h.defibrillator,onChange:A,name:"defibrillator",value:"no"})," ","\xa0 nein"]}),(0,i.jsx)("div",{className:"col-sm-3",children:"Sterbeheife"}),(0,i.jsxs)("div",{className:"col-sm-2 d-flex",children:[(0,i.jsx)("input",{type:"checkbox",checked:"yes"===h.dyingYeast,onChange:A,name:"dyingYeast",value:"yes"})," ","\xa0 ja \xa0 \xa0",(0,i.jsx)("input",{type:"checkbox",checked:"no"===h.dyingYeast,onChange:A,name:"dyingYeast",value:"no"})," ","\xa0 nein"]}),(0,i.jsx)("div",{className:"col-sm-3",children:"Suizidoption"}),(0,i.jsxs)("div",{className:"col-sm-2 d-flex",children:[(0,i.jsx)("input",{type:"checkbox",checked:"yes"===h.suicideOption,onChange:A,name:"suicideOption",value:"yes"})," ","\xa0 ja \xa0 \xa0",(0,i.jsx)("input",{type:"checkbox",checked:"no"===h.suicideOption,onChange:A,name:"suicideOption",value:"no"})," ","\xa0 nein"]}),(0,i.jsx)("div",{className:"col-sm-3",children:"Verbindlichkeit"}),(0,i.jsxs)("div",{className:"col-sm-2 d-flex",children:[(0,i.jsx)("input",{type:"checkbox",checked:"yes"===h.commitment,onChange:A,name:"commitment",value:"yes"})," ","\xa0 ja \xa0 \xa0",(0,i.jsx)("input",{type:"checkbox",checked:"no"===h.commitment,onChange:A,name:"commitment",value:"no"})," ","\xa0 nein"]}),(0,i.jsx)("div",{className:"col-sm-3",children:"Ermessensbereich Bevollmachtigte"}),(0,i.jsxs)("div",{className:"col-sm-2 d-flex",children:[(0,i.jsx)("input",{type:"checkbox",checked:"yes"===h.discretionaryArea,onChange:A,name:"discretionaryArea",value:"yes"})," ","\xa0 ja \xa0 \xa0",(0,i.jsx)("input",{type:"checkbox",checked:"no"===h.discretionaryArea,onChange:A,name:"discretionaryArea",value:"no"})," ","\xa0 nein"]})]}),(0,i.jsx)("br",{}),(0,i.jsxs)("div",{className:"row",children:[(0,i.jsx)("h6",{style:{color:"#244D92"},children:"Aufenthaltsort am Lebensende"}),(0,i.jsx)("div",{className:"col-sm-3",children:"Vertraute Umgebung"}),(0,i.jsxs)("div",{className:"col-sm-2 d-flex",children:[(0,i.jsx)("input",{type:"checkbox",checked:"yes"===u.familiarEnvironment,onChange:R,name:"familiarEnvironment",value:"yes"})," ","\xa0 ja \xa0 \xa0",(0,i.jsx)("input",{type:"checkbox",checked:"no"===u.familiarEnvironment,onChange:R,name:"familiarEnvironment",value:"no"})," ","\xa0 nein"]}),(0,i.jsx)("div",{className:"col-sm-3",children:"Hospiz"}),(0,i.jsxs)("div",{className:"col-sm-2 d-flex",children:[(0,i.jsx)("input",{type:"checkbox",checked:"yes"===u.hospice,onChange:R,name:"hospice",value:"yes"})," ","\xa0 ja \xa0 \xa0",(0,i.jsx)("input",{type:"checkbox",checked:"no"===u.hospice,onChange:R,name:"hospice",value:"no"})," ","\xa0 nein"]}),(0,i.jsx)("div",{className:"col-sm-3",children:"Ins Krankenhaus"}),(0,i.jsxs)("div",{className:"col-sm-2 d-flex",children:[(0,i.jsx)("input",{type:"checkbox",checked:"yes"===u.toHospital,onChange:R,name:"toHospital",value:"yes"})," ","\xa0 ja \xa0 \xa0",(0,i.jsx)("input",{type:"checkbox",checked:"no"===u.toHospital,onChange:R,name:"toHospital",value:"no"})," ","\xa0 nein"]}),(0,i.jsx)("div",{className:"col-sm-3",children:"Kein Krankenhaus"}),(0,i.jsxs)("div",{className:"col-sm-2 d-flex",children:[(0,i.jsx)("input",{type:"checkbox",checked:"yes"===u.notHospital,onChange:R,name:"notHospital",value:"yes"})," ","\xa0 ja \xa0 \xa0",(0,i.jsx)("input",{type:"checkbox",checked:"no"===u.notHospital,onChange:R,name:"notHospital",value:"no"})," ","\xa0 nein"]})]}),(0,i.jsx)("br",{}),(0,i.jsx)("br",{}),(0,i.jsx)("h6",{style:{color:"#244D92"},children:"Begleitung am Lebensende"}),(0,i.jsxs)("div",{className:" row mt-2",children:[(0,i.jsx)("label",{htmlFor:"inputtext",className:"col-sm-2 col-form-label",children:"Arztin"}),(0,i.jsx)("div",{className:"col-sm-10",children:(0,i.jsx)("input",{value:v.doctor,onChange:e=>_("doctor",e.target.value),name:"lname",type:"text",className:"form-control"})})]}),(0,i.jsx)("hr",{}),(0,i.jsxs)("div",{className:" row mt-2",children:[(0,i.jsx)("label",{htmlFor:"inputtext",className:"col-sm-2 col-form-label",children:"Seelischer Beistand"}),(0,i.jsx)("div",{className:"col-sm-10",children:(0,i.jsx)("input",{value:v.mentalSupport,onChange:e=>_("mentalSupport",e.target.value),name:"lname",type:"text",className:"form-control"})})]}),(0,i.jsx)("hr",{}),(0,i.jsxs)("div",{className:" row mt-2",children:[(0,i.jsx)("label",{htmlFor:"inputtext",className:"col-sm-2 col-form-label",children:"Keinesfalls"}),(0,i.jsx)("div",{className:"col-sm-10",children:(0,i.jsx)("input",{value:v.absolutelyNot,onChange:e=>_("absolutelyNot",e.target.value),name:"lname",type:"text",className:"form-control"})})]}),(0,i.jsx)("hr",{}),(0,i.jsxs)("div",{className:"row",children:[(0,i.jsx)("h6",{style:{color:"#244D92"},children:"Bestattungswunsche"}),(0,i.jsx)("div",{className:"col-sm-3",children:"Feuerbestattung"}),(0,i.jsxs)("div",{className:"col-sm-2 d-flex",children:[(0,i.jsx)("input",{type:"checkbox",checked:"yes"===b.cremation,onChange:H,name:"cremation",value:"yes"})," ","\xa0 ja \xa0 \xa0",(0,i.jsx)("input",{type:"checkbox",checked:"no"===b.cremation,onChange:H,name:"cremation",value:"no"})," ","\xa0 nein"]}),(0,i.jsx)("div",{className:"col-sm-3",children:"Erdbestattung"}),(0,i.jsxs)("div",{className:"col-sm-2 d-flex",children:[(0,i.jsx)("input",{type:"checkbox",checked:"yes"===b.burial,onChange:H,name:"burial",value:"yes"})," ","\xa0 ja \xa0 \xa0",(0,i.jsx)("input",{type:"checkbox",checked:"no"===b.burial,onChange:H,name:"burial",value:"no"})," ","\xa0 nein"]})]}),(0,i.jsxs)("div",{className:" row mt-2",children:[(0,i.jsx)("label",{htmlFor:"inputtext",className:"col-sm-2 col-form-label",children:"Bestattungsvorsorge"}),(0,i.jsx)("div",{className:"col-sm-10",children:(0,i.jsx)("input",{value:b.arrangement,onChange:e=>H(e),name:"arrangement",type:"text",className:"form-control"})})]}),(0,i.jsx)("hr",{}),(0,i.jsxs)("div",{className:" row mt-2",children:[(0,i.jsx)("label",{htmlFor:"inputtext",className:"col-sm-2 col-form-label",children:"Sonstiges"}),(0,i.jsx)("div",{className:"col-sm-10",children:(0,i.jsx)("input",{value:b.miscellaneous,onChange:e=>H(e),name:"miscellaneous",type:"text",className:"form-control"})})]}),(0,i.jsx)("hr",{}),(0,i.jsxs)("div",{className:"row",children:[(0,i.jsx)("h6",{style:{color:"#244D92"},children:"Vollmachten"}),(0,i.jsx)("div",{className:"col-sm-3",children:"Blanko-formulare"}),(0,i.jsxs)("div",{className:"col-sm-2 d-flex",children:[(0,i.jsx)("input",{type:"checkbox",checked:"yes"===y.forms,onChange:L,name:"forms",value:"yes"})," ","\xa0 ja \xa0 \xa0",(0,i.jsx)("input",{type:"checkbox",checked:"no"===y.forms,onChange:L,name:"forms",value:"no"})," ","\xa0 nein"]}),(0,i.jsx)("div",{className:"col-sm-3",children:"Betreuungsverfugung"}),(0,i.jsxs)("div",{className:"col-sm-2 d-flex",children:[(0,i.jsx)("input",{type:"checkbox",checked:"yes"===y.careOrder,onChange:L,name:"careOrder",value:"yes"})," ","\xa0 ja \xa0 \xa0",(0,i.jsx)("input",{type:"checkbox",checked:"no"===y.careOrder,onChange:L,name:"careOrder",value:"no"})," ","\xa0 nein"]})]}),(0,i.jsx)("br",{}),(0,i.jsx)("br",{}),(0,i.jsxs)("div",{className:"row",children:[(0,i.jsx)("h6",{style:{color:"#244D92"},children:"Geb\xfchr"}),(0,i.jsx)("div",{className:"col-sm-3",children:"Regul\xe4r"}),(0,i.jsxs)("div",{className:"col-sm-2 d-flex",children:[(0,i.jsx)("input",{type:"checkbox",checked:"yes"===f.regular,onChange:P,name:"regular",value:"yes"})," ","\xa0 ja \xa0 \xa0",(0,i.jsx)("input",{type:"checkbox",checked:"no"===f.regular,onChange:P,name:"regular",value:"no"})," ","\xa0 nein"]}),(0,i.jsx)("div",{className:"col-sm-3",children:"Erm\xe4\xdfigt"}),(0,i.jsxs)("div",{className:"col-sm-2 d-flex",children:[(0,i.jsx)("input",{type:"checkbox",checked:"yes"===f.reduced,onChange:P,name:"reduced",value:"yes"})," ","\xa0 ja \xa0 \xa0",(0,i.jsx)("input",{type:"checkbox",checked:"no"===f.reduced,onChange:P,name:"reduced",value:"no"})," ","\xa0 nein"]})]}),(0,i.jsx)("br",{}),(0,i.jsx)("br",{}),(0,i.jsxs)("div",{className:"row",children:[(0,i.jsx)("h6",{style:{color:"#244D92"},children:"Weitere Angaben"}),(0,i.jsx)("div",{className:"col-sm-3",children:"Dringlichkeit"}),(0,i.jsxs)("div",{className:"col-sm-2 d-flex",children:[(0,i.jsx)("input",{type:"checkbox",checked:"yes"===C.urgency,onChange:z,name:"urgency",value:"yes"})," ","\xa0 ja \xa0 \xa0",(0,i.jsx)("input",{type:"checkbox",checked:"no"===C.urgency,onChange:z,name:"urgency",value:"no"})," ","\xa0 nein"]}),(0,i.jsx)("div",{className:"col-sm-3",children:"Abweichende Lieferanschrift"}),(0,i.jsxs)("div",{className:"col-sm-2 d-flex",children:[(0,i.jsx)("input",{type:"checkbox",checked:"yes"===C.alternateAddress,onChange:z,name:"alternateAddress",value:"yes"})," ","\xa0 ja \xa0 \xa0",(0,i.jsx)("input",{type:"checkbox",checked:"no"===C.alternateAddress,onChange:z,name:"alternateAddress",value:"no"})," ","\xa0 nein"]})]}),(0,i.jsx)("br",{}),(0,i.jsx)("br",{}),(0,i.jsxs)("div",{className:"row mt-2",children:[(0,i.jsxs)("div",{className:"col-sm-5 ms-3 me-3 pt-2 ",style:{height:"100px",width:"580px",border:"1px solid #ebedef",borderRadius:"5px 5px 5px 5px"},children:[(0,i.jsx)("p",{children:"Erstellung"}),(0,i.jsx)("input",{className:"form-control w-25",value:C.creation,onChange:e=>z(e),name:"creation",type:"date",disabled:"yes"!==C.urgency})]}),(0,i.jsx)("div",{className:"Col-sm-7 pt-2",style:{minheight:"100px",width:"580px",border:"2px solid #ebedef",borderRadius:"5px 5px 5px 5px"},children:(0,i.jsxs)("div",{className:"row",children:[(0,i.jsxs)("div",{className:"col-sm-6 mb-3",children:[(0,i.jsxs)("div",{className:" row mt-2",children:[(0,i.jsx)("label",{htmlFor:"inputtext",className:"col-sm-4 col-form-label",children:"Name"}),(0,i.jsx)("div",{className:"col-sm-8",children:(0,i.jsx)("input",{value:C.fname,onChange:e=>z(e),name:"fname",type:"text",placeholder:"Name",disabled:"yes"!==C.alternateAddress,style:{border:"1px solid #ebedef",paddingLeft:"10px",borderRadius:"5px 5px 5px 5px",height:"40px",width:"150px"}})})]}),(0,i.jsxs)("div",{className:" row mt-2",children:[(0,i.jsx)("label",{htmlFor:"inputtext",className:"col-sm-5 col-form-label",children:"Stra\xdfe mit Hausnummer"}),(0,i.jsx)("div",{className:"col-sm-7",children:(0,i.jsx)("input",{type:"text",value:C.street,onChange:e=>z(e),name:"street",disabled:"yes"!==C.alternateAddress,placeholder:" Stra\xdfe mit Hausnummer",style:{border:"1px solid #ebedef",paddingLeft:"10px",borderRadius:"5px 5px 5px 5px",height:"40px",width:"150px"}})})]}),(0,i.jsxs)("div",{className:" row mt-2",children:[(0,i.jsx)("label",{htmlFor:"inputtext",className:"col-sm-4 col-form-label",children:"PLZ"}),(0,i.jsx)("div",{className:"col-sm-8",children:(0,i.jsx)("input",{type:"tel",value:C.plz,onChange:e=>{const s=e.target.value.replace(/[^0-9]/g,"");w({...C,plz:s})},placeholder:"PLZ",disabled:"yes"!==C.alternateAddress,className:"form-control",id:"inputPassword",style:{border:"1px solid #ebedef",paddingLeft:"10px",borderRadius:"5px 5px 5px 5px",height:"40px",width:"150px"},maxLength:6,minLength:3,required:!0})})]}),(0,i.jsxs)("div",{className:" row mt-2",children:[(0,i.jsx)("label",{htmlFor:"inputtext",className:"col-sm-4 col-form-label",children:"Telefon"}),(0,i.jsx)("div",{className:"col-sm-8",children:(0,i.jsx)("input",{type:"tel",name:"phone",value:C.phone,onChange:e=>{const s=e.target.value.replace(/[^0-9+]/g,"");/^\+?[0-9]*$/.test(s)&&z({target:{name:"phone",value:s}})},placeholder:"e.g. 91+ 8354568464",disabled:"yes"!==C.alternateAddress,className:"form-control",id:"inputPhone",maxLength:10,minLength:3})})]})]}),(0,i.jsxs)("div",{className:"col-sm-6 mb-3",children:[(0,i.jsxs)("div",{className:" row mt-2",children:[(0,i.jsx)("label",{htmlFor:"inputtext",className:"col-sm-4 col-form-label",children:"Vorname"}),(0,i.jsx)("div",{className:"col-sm-8",children:(0,i.jsx)("input",{value:C.lname,onChange:e=>z(e),name:"lname",type:"text",placeholder:"Vorname",disabled:"yes"!==C.alternateAddress,style:{border:"1px solid #ebedef",paddingLeft:"10px",borderRadius:"5px 5px 5px 5px",height:"40px",width:"150px"}})})]}),(0,i.jsxs)("div",{className:" row mt-2",children:[(0,i.jsx)("label",{htmlFor:"inputtext",className:"col-sm-4 col-form-label",children:"Adresszusatz"}),(0,i.jsx)("div",{className:"col-sm-8",children:(0,i.jsx)("input",{value:C.address,onChange:e=>z(e),name:"address",type:"text",placeholder:"Adresszusatz",disabled:"yes"!==C.alternateAddress,style:{border:"1px solid #ebedef",paddingLeft:"10px",borderRadius:"5px 5px 5px 5px",height:"40px",width:"150px"}})})]}),(0,i.jsxs)("div",{className:" row mt-2",children:[(0,i.jsx)("label",{htmlFor:"inputtext",className:"col-sm-4 col-form-label",children:"Ort"}),(0,i.jsx)("div",{className:"col-sm-8",children:(0,i.jsx)("input",{value:C.ort,onChange:e=>z(e),name:"ort",type:"text",placeholder:" Ort",disabled:"yes"!==C.alternateAddress,style:{border:"1px solid #ebedef",paddingLeft:"10px",borderRadius:"5px 5px 5px 5px",height:"40px",width:"150px"}})})]}),(0,i.jsxs)("div",{className:" row mt-2",children:[(0,i.jsx)("label",{htmlFor:"inputtext",className:"col-sm-4 col-form-label",children:"Mobil"}),(0,i.jsx)("div",{className:"col-sm-8",children:(0,i.jsx)("input",{type:"tel",name:"mobile",value:C.mobile,onChange:e=>{const s=e.target.value.replace(/[^0-9+]/g,"");/^\+?[0-9]*$/.test(s)&&z({target:{name:"mobile",value:s}})},placeholder:"e.g., 91+ 8354568464",disabled:"yes"!==C.alternateAddress,className:"form-control",id:"inputPhone",maxLength:10,minLength:3})})]})]})]})})]}),(0,i.jsxs)("div",{className:"row mt-3 mb-5 ",children:[(0,i.jsx)("div",{className:"col-sm-3",children:"Datenschutz"}),(0,i.jsxs)("div",{className:"col-sm-2 d-flex",children:[(0,i.jsx)("input",{type:"checkbox",checked:"yes"===C.dataProtection,onChange:z,name:"dataProtection",value:"yes"})," ","\xa0 ja \xa0 \xa0",(0,i.jsx)("input",{type:"checkbox",checked:"no"===C.dataProtection,onChange:z,name:"dataProtection",value:"no"})," ","\xa0 nein"]})]})]})}),(0,i.jsxs)("div",{className:"row mb-4 mt-4",children:[(0,i.jsx)("div",{className:"col-sm-9"}),(0,i.jsxs)("div",{className:"col-sm-3",children:[(0,i.jsx)("button",{onClick:()=>{localStorage.removeItem("tabId"),e("/customer/customer_info")},type:"button",className:"btn btn",style:{background:"#d04545",color:"white"},children:"Abbrechen"}),"\xa0 \xa0",(0,i.jsx)("button",{onClick:async()=>{try{const e=[s,o,d,h,u,v,b,y,f,C];let a=!1;for(const s of e){for(const e in s)if(""!==s[e]){a=!0;break}if(a)break}if(!a)return void l.Am.warning("Please fill in at least one field");let n=await fetch("".concat("http://95.217.77.208:4142","/spv/create_spv"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(K)});if(!n.ok)throw new Error("HTTP error! Status: ".concat(n.status));await n.json();l.Am.success("Data Saved Successfully"),E()}catch(e){l.Am.error("Please Fill in all details")}},type:"button",style:{background:"#244D92",color:"white"},className:"btn btn",children:"Speichern Sie"})]})]}),(0,i.jsx)(l.Ix,{})]})})},r=n.memo(o)}}]);
//# sourceMappingURL=5.2c16c523.chunk.js.map