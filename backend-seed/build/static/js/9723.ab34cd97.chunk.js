"use strict";(self.webpackChunk_coreui_coreui_free_react_admin_template=self.webpackChunk_coreui_coreui_free_react_admin_template||[]).push([[9723],{19723:function(e,t,n){n.r(t);var a=n(1413),o=n(29439),i=n(72791),r=n(77128),l=n(81608),c=n(58982),s=n(76053),d=n(16856),m=n(7692),h=n(78820),u=n(80184),p=[{title:"Name des Kunden",dataIndex:"name",render:function(e){return(0,u.jsx)("a",{children:e})}},{title:"Kunden-ID",dataIndex:"key"},{title:"E-Mail",dataIndex:"email"},{title:"Telefon",dataIndex:"phone"},{title:"Status",dataIndex:"status"},{title:"AKTION",dataIndex:"action",render:function(){return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(s.Uf_,{}),"\xa0 Bearbeiten \xa0\xa0\xa0",(0,u.jsx)(d.ZkW,{}),"L\xf6schen"]})}}],x=[{key:"1",name:"John Brown",email:"user@gmail.com",status:"done",phone:"2934289354",action:"active"},{key:"2",name:"Jim Green",email:"user@gmail.com",status:"done",phone:"2934289354",action:"active"},{key:"3",name:"Joe Black",email:"user@gmail.com",status:"done",phone:"2934289354",action:"active"},{key:"4",name:"Disabled User",email:"user@gmail.com",status:"done",phone:"2934289354",action:"active"}],b={onChange:function(e,t){console.log("selectedRowKeys: ".concat(e),"selectedRows: ",t)},getCheckboxProps:function(e){return{disabled:"Disabled User"===e.name,name:e.name}}};t.default=function(){var e=(0,i.useState)(!1),t=(0,o.Z)(e,2),n=t[0],s=t[1],f=function(){return s(!1)},g=(0,i.useState)("checkbox"),j=(0,o.Z)(g,2),v=j[0];j[1];return(0,u.jsxs)("div",{children:[(0,u.jsxs)("div",{className:"row m-4 p-4 shadow",children:[(0,u.jsx)("div",{className:"col-sm-3",children:(0,u.jsx)("input",{type:"search",id:"form1",placeholder:"Ihre Suche eingeben",className:"form-control"})}),(0,u.jsx)("div",{className:"col-sm-4",children:(0,u.jsxs)("button",{className:"btn btn text-light",style:{background:"#0b5995"},children:[(0,u.jsx)(m.Ol$,{}),"\xa0 Filter"]})}),(0,u.jsxs)("div",{className:"col-sm-5",children:[(0,u.jsxs)("button",{className:"btn btn",style:{background:"#0b5995",color:"white"},children:[(0,u.jsx)(h.Dme,{}),"\xa0 Einladung versenden"]})," ","\xa0\xa0",(0,u.jsxs)("button",{className:"btn btn",style:{background:"#0b5995",color:"white"},onClick:function(){return s(!0)},children:[(0,u.jsx)(d.x06,{}),"\xa0Neuen Kunden anlegen"]}),(0,u.jsxs)(c.Z,{show:n,onHide:f,centered:!0,children:[(0,u.jsx)(c.Z.Header,{closeButton:!0,children:(0,u.jsx)(c.Z.Title,{children:"Kontakt hinzuf\xfcgen"})}),(0,u.jsx)(c.Z.Body,{children:(0,u.jsxs)("div",{className:"row p-3",children:[(0,u.jsxs)("div",{className:"mb-2 row",children:[(0,u.jsx)("label",{htmlFor:"inputPassword",className:"col-sm-3 col-form-label",children:"Vorname"}),(0,u.jsx)("div",{className:"col-sm-9",children:(0,u.jsx)("input",{type:"password",placeholder:"jo",className:"form-control",id:"inputPassword"})})]}),(0,u.jsxs)("div",{className:"mb-2 row",children:[(0,u.jsx)("label",{htmlFor:"inputPassword",className:"col-sm-3 col-form-label",children:"Nachname"}),(0,u.jsx)("div",{className:"col-sm-9",children:(0,u.jsx)("input",{type:"password",placeholder:"verma",className:"form-control",id:"inputPassword"})})]}),(0,u.jsxs)("div",{className:"mb-2 row",children:[(0,u.jsx)("label",{htmlFor:"inputPassword",className:"col-sm-3 col-form-label",children:"Telefon"}),(0,u.jsx)("div",{className:"col-sm-9",children:(0,u.jsx)("input",{type:"number",placeholder:"91+ 8354568464",className:"form-control",id:"inputPassword"})})]}),(0,u.jsxs)("div",{className:"mb-2 row",children:[(0,u.jsx)("label",{htmlFor:"inputPassword",className:"col-sm-3 col-form-label",children:"Mail"}),(0,u.jsx)("div",{className:"col-sm-9",children:(0,u.jsx)("input",{type:"email",placeholder:"jo@gmail.com",className:"form-control",id:"inputPassword"})})]}),(0,u.jsxs)("div",{className:"mb-2 row",children:[(0,u.jsx)("label",{htmlFor:"inputPassword",className:"col-sm-3 col-form-label",children:"Skype"}),(0,u.jsx)("div",{className:"col-sm-9",children:(0,u.jsx)("input",{type:"password",placeholder:"Skype",className:"form-control",id:"inputPassword"})})]}),(0,u.jsxs)("div",{className:"mb-2 row",children:[(0,u.jsx)("label",{htmlFor:"inputPassword",className:"col-sm-3 col-form-label",children:"Geschlecht"}),(0,u.jsxs)("div",{className:"col-sm-9",children:[(0,u.jsx)("input",{type:"radio",value:"male"})," \xa0 M\xe4nnlich",(0,u.jsx)("input",{type:"radio",value:"female"})," \xa0 Weiblich",(0,u.jsx)("input",{type:"radio",value:"other"}),"\xa0 Andere"]})]})]})}),(0,u.jsxs)(c.Z.Footer,{children:[(0,u.jsxs)("button",{className:"btn btn",onClick:f,style:{background:"#d04545",color:"white"},children:[" ","Abbrechen"]}),"\xa0 \xa0",(0,u.jsx)("button",{className:"btn btn",onClick:f,style:{background:"#0b5995",color:"white"},children:"Aktivit\xe4t hinzuf\xfcgen"})]})]})," "]})]}),(0,u.jsxs)("div",{children:[(0,u.jsx)(r.Z,{}),(0,u.jsx)(l.Z,{rowSelection:(0,a.Z)({type:v},b),columns:p,dataSource:x})]})]})}},77128:function(e,t,n){n.d(t,{Z:function(){return x}});var a=n(4942),o=n(29439),i=n(72791),r=n(81694),l=n.n(r),c=n(71929),s=n(67521),d=n(55564),m=n(89922),h=function(e){var t,n=e.componentCls,o=e.sizePaddingEdgeHorizontal,i=e.colorSplit,r=e.lineWidth,l=e.textPaddingInline,c=e.orientationMargin,d=e.verticalMarginInline;return(0,a.Z)({},n,Object.assign(Object.assign({},(0,s.Wf)(e)),(t={borderBlockStart:"".concat(r,"px solid ").concat(i),"&-vertical":{position:"relative",top:"-0.06em",display:"inline-block",height:"0.9em",marginInline:d,marginBlock:0,verticalAlign:"middle",borderTop:0,borderInlineStart:"".concat(r,"px solid ").concat(i)},"&-horizontal":{display:"flex",clear:"both",width:"100%",minWidth:"100%",margin:"".concat(e.dividerHorizontalGutterMargin,"px 0")}},(0,a.Z)(t,"&-horizontal".concat(n,"-with-text"),{display:"flex",alignItems:"center",margin:"".concat(e.dividerHorizontalWithTextGutterMargin,"px 0"),color:e.colorTextHeading,fontWeight:500,fontSize:e.fontSizeLG,whiteSpace:"nowrap",textAlign:"center",borderBlockStart:"0 ".concat(i),"&::before, &::after":{position:"relative",width:"50%",borderBlockStart:"".concat(r,"px solid transparent"),borderBlockStartColor:"inherit",borderBlockEnd:0,transform:"translateY(50%)",content:"''"}}),(0,a.Z)(t,"&-horizontal".concat(n,"-with-text-left"),{"&::before":{width:"".concat(100*c,"%")},"&::after":{width:"".concat(100-100*c,"%")}}),(0,a.Z)(t,"&-horizontal".concat(n,"-with-text-right"),{"&::before":{width:"".concat(100-100*c,"%")},"&::after":{width:"".concat(100*c,"%")}}),(0,a.Z)(t,"".concat(n,"-inner-text"),{display:"inline-block",paddingBlock:0,paddingInline:l}),(0,a.Z)(t,"&-dashed",{background:"none",borderColor:i,borderStyle:"dashed",borderWidth:"".concat(r,"px 0 0")}),(0,a.Z)(t,"&-horizontal".concat(n,"-with-text").concat(n,"-dashed"),{"&::before, &::after":{borderStyle:"dashed none none"}}),(0,a.Z)(t,"&-vertical".concat(n,"-dashed"),{borderInlineStartWidth:r,borderInlineEnd:0,borderBlockStart:0,borderBlockEnd:0}),(0,a.Z)(t,"&-plain".concat(n,"-with-text"),{color:e.colorText,fontWeight:"normal",fontSize:e.fontSize}),(0,a.Z)(t,"&-horizontal".concat(n,"-with-text-left").concat(n,"-no-default-orientation-margin-left"),(0,a.Z)({"&::before":{width:0},"&::after":{width:"100%"}},"".concat(n,"-inner-text"),{paddingInlineStart:o})),(0,a.Z)(t,"&-horizontal".concat(n,"-with-text-right").concat(n,"-no-default-orientation-margin-right"),(0,a.Z)({"&::before":{width:"100%"},"&::after":{width:0}},"".concat(n,"-inner-text"),{paddingInlineEnd:o})),t)))},u=(0,d.Z)("Divider",(function(e){var t=(0,m.TS)(e,{dividerHorizontalWithTextGutterMargin:e.margin,dividerHorizontalGutterMargin:e.marginLG,sizePaddingEdgeHorizontal:0});return[h(t)]}),(function(e){return{textPaddingInline:"1em",orientationMargin:.05,verticalMarginInline:e.marginXS}})),p=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(a=Object.getOwnPropertySymbols(e);o<a.length;o++)t.indexOf(a[o])<0&&Object.prototype.propertyIsEnumerable.call(e,a[o])&&(n[a[o]]=e[a[o]])}return n};var x=function(e){var t,n=i.useContext(c.E_),r=n.getPrefixCls,s=n.direction,d=n.divider,m=e.prefixCls,h=e.type,x=void 0===h?"horizontal":h,b=e.orientation,f=void 0===b?"center":b,g=e.orientationMargin,j=e.className,v=e.rootClassName,w=e.children,y=e.dashed,N=e.plain,k=e.style,Z=p(e,["prefixCls","type","orientation","orientationMargin","className","rootClassName","children","dashed","plain","style"]),S=r("divider",m),z=u(S),I=(0,o.Z)(z,2),P=I[0],O=I[1],C=f.length>0?"-".concat(f):f,B=!!w,M="left"===f&&null!=g,_="right"===f&&null!=g,E=l()(S,null===d||void 0===d?void 0:d.className,O,"".concat(S,"-").concat(x),(t={},(0,a.Z)(t,"".concat(S,"-with-text"),B),(0,a.Z)(t,"".concat(S,"-with-text").concat(C),B),(0,a.Z)(t,"".concat(S,"-dashed"),!!y),(0,a.Z)(t,"".concat(S,"-plain"),!!N),(0,a.Z)(t,"".concat(S,"-rtl"),"rtl"===s),(0,a.Z)(t,"".concat(S,"-no-default-orientation-margin-left"),M),(0,a.Z)(t,"".concat(S,"-no-default-orientation-margin-right"),_),t),j,v),W=i.useMemo((function(){return"number"===typeof g?g:/^\d+$/.test(g)?Number(g):g}),[g]),T=Object.assign(Object.assign({},M&&{marginLeft:W}),_&&{marginRight:W});return P(i.createElement("div",Object.assign({className:E,style:Object.assign(Object.assign({},null===d||void 0===d?void 0:d.style),k)},Z,{role:"separator"}),w&&"vertical"!==x&&i.createElement("span",{className:"".concat(S,"-inner-text"),style:T},w)))}}}]);
//# sourceMappingURL=9723.ab34cd97.chunk.js.map