"use strict";(self.webpackChunk_coreui_coreui_free_react_admin_template=self.webpackChunk_coreui_coreui_free_react_admin_template||[]).push([[8717],{38717:function(e,t,n){n.r(t),n.d(t,{default:function(){return x}});var a=n(1413),o=n(29439),r=n(72791),i=n(77128),c=n(81608),s=n(58982),l=n(76053),d=n(16856),h=n(80184),m=[{title:"NAME DES KUNDEN",dataIndex:"name",render:function(e){return(0,h.jsx)("a",{children:e})}},{title:"KUNDEN-ID",dataIndex:"key"},{title:"E-MAIL",dataIndex:"address"},{title:"TELEFON",dataIndex:"phone"},{title:"STATUS",dataIndex:"status"},{title:"AKTION",dataIndex:"action",render:function(){return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(l.Uf_,{}),"\xa0 Bearbeiten \xa0\xa0\xa0",(0,h.jsx)(d.ZkW,{}),"L\xf6schen"]})}}],u=[{key:"1",name:"John Brown",phone:354636576,address:"New York No. 1 Lake Park",status:"Active",action:"Edit"},{key:"2",name:"Jim Green",phone:354636576,address:"London No. 1 Lake Park",status:"Inactive",action:"Delete"},{key:"3",name:"Joe Black",phone:354636576,address:"Sydney No. 1 Lake Park",status:"Active",action:"View"},{key:"4",name:"Roki User",phone:354636576,address:"Sydney No. 1 Lake Park",status:"Inactive",action:"Activate"}],p={onChange:function(e,t){console.log("selectedRowKeys: ".concat(e),"selectedRows: ",t)}};function x(){var e=(0,r.useState)(!1),t=(0,o.Z)(e,2),n=t[0],l=t[1],x=(0,r.useState)("checkbox"),f=(0,o.Z)(x,2),b=f[0],g=(f[1],function(){return l(!1)});return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)("h5",{style:{fontWeight:"bold"},children:"Kunden-Listen"}),(0,h.jsxs)("div",{className:"row m-4 p-4  shadow",style:{background:"white",borderRadius:"5px"},children:[(0,h.jsx)("div",{className:"col-sm-3",children:(0,h.jsx)("input",{type:"search",id:"form1",placeholder:"Ihre Suche eingeben",className:"form-control"})}),(0,h.jsx)("div",{className:"col-sm-6",children:(0,h.jsx)("button",{className:"btn btn text-light",style:{background:"#0b5995"},children:"filter"})}),(0,h.jsxs)("div",{className:"col-sm-3",children:[(0,h.jsxs)("button",{className:"btn btn",style:{background:"#0b5995",color:"white"},onClick:function(){return l(!0)},children:[(0,h.jsx)(d.x06,{})," Neuen Kunden anlegen"]}),(0,h.jsxs)(s.Z,{show:n,onHide:g,centered:!0,children:[(0,h.jsx)(s.Z.Header,{closeButton:!0,children:(0,h.jsx)(s.Z.Title,{children:"Neuen Kunden anlegen"})}),(0,h.jsxs)(s.Z.Body,{children:[(0,h.jsxs)("div",{className:"row p-3",children:[(0,h.jsx)("div",{className:"col-sm-6",children:(0,h.jsx)("input",{type:"password",placeholder:"Vornamen",className:"form-control",id:"inputPassword"})}),(0,h.jsx)("div",{className:"col-sm-6",children:(0,h.jsx)("input",{type:"password",placeholder:"Nachname",className:"form-control",id:"inputPassword"})})]}),(0,h.jsxs)("div",{className:"row p-3",children:[(0,h.jsx)("div",{className:"col-sm-6",children:(0,h.jsx)("input",{type:"password",placeholder:"E-Mail",className:"form-control",id:"inputPassword"})}),(0,h.jsx)("div",{className:"col-sm-6",children:(0,h.jsx)("input",{type:"password",placeholder:"Telefon",className:"form-control",id:"inputPassword"})})]}),(0,h.jsxs)("div",{className:"row p-3",children:[(0,h.jsx)("div",{className:"col-sm-6",children:(0,h.jsx)("input",{type:"password",placeholder:"PLZ",className:"form-control",id:"inputPassword"})}),(0,h.jsx)("div",{className:"col-sm-6",children:(0,h.jsx)("input",{type:"password",placeholder:"Stadt",className:"form-control",id:"inputPassword"})})]}),(0,h.jsx)("div",{className:"row p-3",children:(0,h.jsx)("div",{className:"col-sm-12",children:(0,h.jsx)("input",{type:"password",placeholder:"Stra\u03b2e",className:"form-control",id:"inputPassword"})})})]}),(0,h.jsx)(s.Z.Footer,{children:(0,h.jsxs)("div",{className:"row",children:[(0,h.jsx)("div",{className:"col-sm-4",children:(0,h.jsx)("button",{className:"btn btn",onClick:g,style:{background:"#d04545",color:"white"},children:"Abbrechen"})}),(0,h.jsxs)("div",{className:"col-sm-4",children:[(0,h.jsx)("button",{className:"btn btn",onClick:g,style:{background:"#d04545",color:"white"},children:"Abbrechen"}),"\xa0 \xa0",(0,h.jsx)("div",{className:"col-sm-4",children:(0,h.jsx)("button",{className:"btn btn",onClick:g,style:{background:"#0b5995",color:"white"},children:"Aktivit\xe4t hinzuf\xfcgen"})})]})]})})]})]})]}),(0,h.jsxs)("div",{children:[(0,h.jsx)(i.Z,{}),(0,h.jsx)(c.Z,{rowSelection:(0,a.Z)({type:b},p),columns:m,dataSource:u})]})]})}},77128:function(e,t,n){n.d(t,{Z:function(){return x}});var a=n(4942),o=n(29439),r=n(72791),i=n(81694),c=n.n(i),s=n(71929),l=n(67521),d=n(55564),h=n(89922),m=function(e){var t,n=e.componentCls,o=e.sizePaddingEdgeHorizontal,r=e.colorSplit,i=e.lineWidth,c=e.textPaddingInline,s=e.orientationMargin,d=e.verticalMarginInline;return(0,a.Z)({},n,Object.assign(Object.assign({},(0,l.Wf)(e)),(t={borderBlockStart:"".concat(i,"px solid ").concat(r),"&-vertical":{position:"relative",top:"-0.06em",display:"inline-block",height:"0.9em",marginInline:d,marginBlock:0,verticalAlign:"middle",borderTop:0,borderInlineStart:"".concat(i,"px solid ").concat(r)},"&-horizontal":{display:"flex",clear:"both",width:"100%",minWidth:"100%",margin:"".concat(e.dividerHorizontalGutterMargin,"px 0")}},(0,a.Z)(t,"&-horizontal".concat(n,"-with-text"),{display:"flex",alignItems:"center",margin:"".concat(e.dividerHorizontalWithTextGutterMargin,"px 0"),color:e.colorTextHeading,fontWeight:500,fontSize:e.fontSizeLG,whiteSpace:"nowrap",textAlign:"center",borderBlockStart:"0 ".concat(r),"&::before, &::after":{position:"relative",width:"50%",borderBlockStart:"".concat(i,"px solid transparent"),borderBlockStartColor:"inherit",borderBlockEnd:0,transform:"translateY(50%)",content:"''"}}),(0,a.Z)(t,"&-horizontal".concat(n,"-with-text-left"),{"&::before":{width:"".concat(100*s,"%")},"&::after":{width:"".concat(100-100*s,"%")}}),(0,a.Z)(t,"&-horizontal".concat(n,"-with-text-right"),{"&::before":{width:"".concat(100-100*s,"%")},"&::after":{width:"".concat(100*s,"%")}}),(0,a.Z)(t,"".concat(n,"-inner-text"),{display:"inline-block",paddingBlock:0,paddingInline:c}),(0,a.Z)(t,"&-dashed",{background:"none",borderColor:r,borderStyle:"dashed",borderWidth:"".concat(i,"px 0 0")}),(0,a.Z)(t,"&-horizontal".concat(n,"-with-text").concat(n,"-dashed"),{"&::before, &::after":{borderStyle:"dashed none none"}}),(0,a.Z)(t,"&-vertical".concat(n,"-dashed"),{borderInlineStartWidth:i,borderInlineEnd:0,borderBlockStart:0,borderBlockEnd:0}),(0,a.Z)(t,"&-plain".concat(n,"-with-text"),{color:e.colorText,fontWeight:"normal",fontSize:e.fontSize}),(0,a.Z)(t,"&-horizontal".concat(n,"-with-text-left").concat(n,"-no-default-orientation-margin-left"),(0,a.Z)({"&::before":{width:0},"&::after":{width:"100%"}},"".concat(n,"-inner-text"),{paddingInlineStart:o})),(0,a.Z)(t,"&-horizontal".concat(n,"-with-text-right").concat(n,"-no-default-orientation-margin-right"),(0,a.Z)({"&::before":{width:"100%"},"&::after":{width:0}},"".concat(n,"-inner-text"),{paddingInlineEnd:o})),t)))},u=(0,d.Z)("Divider",(function(e){var t=(0,h.TS)(e,{dividerHorizontalWithTextGutterMargin:e.margin,dividerHorizontalGutterMargin:e.marginLG,sizePaddingEdgeHorizontal:0});return[m(t)]}),(function(e){return{textPaddingInline:"1em",orientationMargin:.05,verticalMarginInline:e.marginXS}})),p=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(a=Object.getOwnPropertySymbols(e);o<a.length;o++)t.indexOf(a[o])<0&&Object.prototype.propertyIsEnumerable.call(e,a[o])&&(n[a[o]]=e[a[o]])}return n};var x=function(e){var t,n=r.useContext(s.E_),i=n.getPrefixCls,l=n.direction,d=n.divider,h=e.prefixCls,m=e.type,x=void 0===m?"horizontal":m,f=e.orientation,b=void 0===f?"center":f,g=e.orientationMargin,w=e.className,j=e.rootClassName,v=e.children,N=e.dashed,y=e.plain,k=e.style,Z=p(e,["prefixCls","type","orientation","orientationMargin","className","rootClassName","children","dashed","plain","style"]),S=i("divider",h),I=u(S),z=(0,o.Z)(I,2),P=z[0],E=z[1],O=b.length>0?"-".concat(b):b,C=!!v,B="left"===b&&null!=g,M="right"===b&&null!=g,_=c()(S,null===d||void 0===d?void 0:d.className,E,"".concat(S,"-").concat(x),(t={},(0,a.Z)(t,"".concat(S,"-with-text"),C),(0,a.Z)(t,"".concat(S,"-with-text").concat(O),C),(0,a.Z)(t,"".concat(S,"-dashed"),!!N),(0,a.Z)(t,"".concat(S,"-plain"),!!y),(0,a.Z)(t,"".concat(S,"-rtl"),"rtl"===l),(0,a.Z)(t,"".concat(S,"-no-default-orientation-margin-left"),B),(0,a.Z)(t,"".concat(S,"-no-default-orientation-margin-right"),M),t),w,j),L=r.useMemo((function(){return"number"===typeof g?g:/^\d+$/.test(g)?Number(g):g}),[g]),A=Object.assign(Object.assign({},B&&{marginLeft:L}),M&&{marginRight:L});return P(r.createElement("div",Object.assign({className:_,style:Object.assign(Object.assign({},null===d||void 0===d?void 0:d.style),k)},Z,{role:"separator"}),v&&"vertical"!==x&&r.createElement("span",{className:"".concat(S,"-inner-text"),style:A},v)))}}}]);
//# sourceMappingURL=8717.67e7ec80.chunk.js.map