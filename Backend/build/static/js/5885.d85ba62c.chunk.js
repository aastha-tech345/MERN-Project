"use strict";(self.webpackChunk_coreui_coreui_free_react_admin_template=self.webpackChunk_coreui_coreui_free_react_admin_template||[]).push([[5885],{35885:(t,e,n)=>{n.d(e,{UE:()=>O,RK:()=>A,ll:()=>E,rD:()=>V,__:()=>D,UU:()=>_,jD:()=>q,mG:()=>B,ER:()=>z,cY:()=>k,iD:()=>C,BN:()=>P,Ej:()=>S});var o=n(55e3);function i(t,e,n){let{reference:i,floating:r}=t;const l=(0,o.TV)(e),c=(0,o.Dz)(e),s=(0,o.sq)(c),a=(0,o.C0)(e),f="y"===l,u=i.x+i.width/2-r.width/2,d=i.y+i.height/2-r.height/2,m=i[s]/2-r[s]/2;let h;switch(a){case"top":h={x:u,y:i.y-r.height};break;case"bottom":h={x:u,y:i.y+i.height};break;case"right":h={x:i.x+i.width,y:d};break;case"left":h={x:i.x-r.width,y:d};break;default:h={x:i.x,y:i.y}}switch((0,o.Sg)(e)){case"start":h[c]-=m*(n&&f?-1:1);break;case"end":h[c]+=m*(n&&f?-1:1)}return h}async function r(t,e){var n;void 0===e&&(e={});const{x:i,y:r,platform:l,rects:c,elements:s,strategy:a}=t,{boundary:f="clippingAncestors",rootBoundary:u="viewport",elementContext:d="floating",altBoundary:m=!1,padding:h=0}=(0,o._3)(e,t),p=(0,o.nI)(h),g=s[m?"floating"===d?"reference":"floating":d],y=(0,o.B1)(await l.getClippingRect({element:null==(n=await(null==l.isElement?void 0:l.isElement(g)))||n?g:g.contextElement||await(null==l.getDocumentElement?void 0:l.getDocumentElement(s.floating)),boundary:f,rootBoundary:u,strategy:a})),w="floating"===d?{x:i,y:r,width:c.floating.width,height:c.floating.height}:c.reference,x=await(null==l.getOffsetParent?void 0:l.getOffsetParent(s.floating)),v=await(null==l.isElement?void 0:l.isElement(x))&&await(null==l.getScale?void 0:l.getScale(x))||{x:1,y:1},b=(0,o.B1)(l.convertOffsetParentRelativeRectToViewportRelativeRect?await l.convertOffsetParentRelativeRectToViewportRelativeRect({elements:s,rect:w,offsetParent:x,strategy:a}):w);return{top:(y.top-b.top+p.top)/v.y,bottom:(b.bottom-y.bottom+p.bottom)/v.y,left:(y.left-b.left+p.left)/v.x,right:(b.right-y.right+p.right)/v.x}}function l(t,e){return{top:t.top-e.height,right:t.right-e.width,bottom:t.bottom-e.height,left:t.left-e.width}}function c(t){return o.r_.some((e=>t[e]>=0))}function s(t){const e=(0,o.jk)(...t.map((t=>t.left))),n=(0,o.jk)(...t.map((t=>t.top)));return{x:e,y:n,width:(0,o.T9)(...t.map((t=>t.right)))-e,height:(0,o.T9)(...t.map((t=>t.bottom)))-n}}var a=n(35702);function f(t){const e=(0,a.L9)(t);let n=parseFloat(e.width)||0,i=parseFloat(e.height)||0;const r=(0,a.sb)(t),l=r?t.offsetWidth:n,c=r?t.offsetHeight:i,s=(0,o.LI)(n)!==l||(0,o.LI)(i)!==c;return s&&(n=l,i=c),{width:n,height:i,$:s}}function u(t){return(0,a.vq)(t)?t:t.contextElement}function d(t){const e=u(t);if(!(0,a.sb)(e))return(0,o.Jx)(1);const n=e.getBoundingClientRect(),{width:i,height:r,$:l}=f(e);let c=(l?(0,o.LI)(n.width):n.width)/i,s=(l?(0,o.LI)(n.height):n.height)/r;return c&&Number.isFinite(c)||(c=1),s&&Number.isFinite(s)||(s=1),{x:c,y:s}}const m=(0,o.Jx)(0);function h(t){const e=(0,a.zk)(t);return(0,a.Tc)()&&e.visualViewport?{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}:m}function p(t,e,n,i){void 0===e&&(e=!1),void 0===n&&(n=!1);const r=t.getBoundingClientRect(),l=u(t);let c=(0,o.Jx)(1);e&&(i?(0,a.vq)(i)&&(c=d(i)):c=d(t));const s=function(t,e,n){return void 0===e&&(e=!1),!(!n||e&&n!==(0,a.zk)(t))&&e}(l,n,i)?h(l):(0,o.Jx)(0);let f=(r.left+s.x)/c.x,m=(r.top+s.y)/c.y,p=r.width/c.x,g=r.height/c.y;if(l){const t=(0,a.zk)(l),e=i&&(0,a.vq)(i)?(0,a.zk)(i):i;let n=t,o=n.frameElement;for(;o&&i&&e!==n;){const t=d(o),e=o.getBoundingClientRect(),i=(0,a.L9)(o),r=e.left+(o.clientLeft+parseFloat(i.paddingLeft))*t.x,l=e.top+(o.clientTop+parseFloat(i.paddingTop))*t.y;f*=t.x,m*=t.y,p*=t.x,g*=t.y,f+=r,m+=l,n=(0,a.zk)(o),o=n.frameElement}}return(0,o.B1)({width:p,height:g,x:f,y:m})}const g=[":popover-open",":modal"];function y(t){return g.some((e=>{try{return t.matches(e)}catch(n){return!1}}))}function w(t){return p((0,a.ep)(t)).left+(0,a.CP)(t).scrollLeft}function x(t,e,n){let i;if("viewport"===e)i=function(t,e){const n=(0,a.zk)(t),o=(0,a.ep)(t),i=n.visualViewport;let r=o.clientWidth,l=o.clientHeight,c=0,s=0;if(i){r=i.width,l=i.height;const t=(0,a.Tc)();(!t||t&&"fixed"===e)&&(c=i.offsetLeft,s=i.offsetTop)}return{width:r,height:l,x:c,y:s}}(t,n);else if("document"===e)i=function(t){const e=(0,a.ep)(t),n=(0,a.CP)(t),i=t.ownerDocument.body,r=(0,o.T9)(e.scrollWidth,e.clientWidth,i.scrollWidth,i.clientWidth),l=(0,o.T9)(e.scrollHeight,e.clientHeight,i.scrollHeight,i.clientHeight);let c=-n.scrollLeft+w(t);const s=-n.scrollTop;return"rtl"===(0,a.L9)(i).direction&&(c+=(0,o.T9)(e.clientWidth,i.clientWidth)-r),{width:r,height:l,x:c,y:s}}((0,a.ep)(t));else if((0,a.vq)(e))i=function(t,e){const n=p(t,!0,"fixed"===e),i=n.top+t.clientTop,r=n.left+t.clientLeft,l=(0,a.sb)(t)?d(t):(0,o.Jx)(1);return{width:t.clientWidth*l.x,height:t.clientHeight*l.y,x:r*l.x,y:i*l.y}}(e,n);else{const n=h(t);i={...e,x:e.x-n.x,y:e.y-n.y}}return(0,o.B1)(i)}function v(t,e){const n=(0,a.$4)(t);return!(n===e||!(0,a.vq)(n)||(0,a.eu)(n))&&("fixed"===(0,a.L9)(n).position||v(n,e))}function b(t,e,n){const i=(0,a.sb)(e),r=(0,a.ep)(e),l="fixed"===n,c=p(t,!0,l,e);let s={scrollLeft:0,scrollTop:0};const f=(0,o.Jx)(0);if(i||!i&&!l)if(("body"!==(0,a.mq)(e)||(0,a.ZU)(r))&&(s=(0,a.CP)(e)),i){const t=p(e,!0,l,e);f.x=t.x+e.clientLeft,f.y=t.y+e.clientTop}else r&&(f.x=w(r));return{x:c.left+s.scrollLeft-f.x,y:c.top+s.scrollTop-f.y,width:c.width,height:c.height}}function T(t){return"static"===(0,a.L9)(t).position}function R(t,e){return(0,a.sb)(t)&&"fixed"!==(0,a.L9)(t).position?e?e(t):t.offsetParent:null}function L(t,e){const n=(0,a.zk)(t);if(y(t))return n;if(!(0,a.sb)(t)){let e=(0,a.$4)(t);for(;e&&!(0,a.eu)(e);){if((0,a.vq)(e)&&!T(e))return e;e=(0,a.$4)(e)}return n}let o=R(t,e);for(;o&&(0,a.Lv)(o)&&T(o);)o=R(o,e);return o&&(0,a.eu)(o)&&T(o)&&!(0,a.sQ)(o)?n:o||(0,a.gJ)(t)||n}const C={convertOffsetParentRelativeRectToViewportRelativeRect:function(t){let{elements:e,rect:n,offsetParent:i,strategy:r}=t;const l="fixed"===r,c=(0,a.ep)(i),s=!!e&&y(e.floating);if(i===c||s&&l)return n;let f={scrollLeft:0,scrollTop:0},u=(0,o.Jx)(1);const m=(0,o.Jx)(0),h=(0,a.sb)(i);if((h||!h&&!l)&&(("body"!==(0,a.mq)(i)||(0,a.ZU)(c))&&(f=(0,a.CP)(i)),(0,a.sb)(i))){const t=p(i);u=d(i),m.x=t.x+i.clientLeft,m.y=t.y+i.clientTop}return{width:n.width*u.x,height:n.height*u.y,x:n.x*u.x-f.scrollLeft*u.x+m.x,y:n.y*u.y-f.scrollTop*u.y+m.y}},getDocumentElement:a.ep,getClippingRect:function(t){let{element:e,boundary:n,rootBoundary:i,strategy:r}=t;const l=[..."clippingAncestors"===n?y(e)?[]:function(t,e){const n=e.get(t);if(n)return n;let o=(0,a.v9)(t,[],!1).filter((t=>(0,a.vq)(t)&&"body"!==(0,a.mq)(t))),i=null;const r="fixed"===(0,a.L9)(t).position;let l=r?(0,a.$4)(t):t;for(;(0,a.vq)(l)&&!(0,a.eu)(l);){const e=(0,a.L9)(l),n=(0,a.sQ)(l);n||"fixed"!==e.position||(i=null),(r?!n&&!i:!n&&"static"===e.position&&i&&["absolute","fixed"].includes(i.position)||(0,a.ZU)(l)&&!n&&v(t,l))?o=o.filter((t=>t!==l)):i=e,l=(0,a.$4)(l)}return e.set(t,o),o}(e,this._c):[].concat(n),i],c=l[0],s=l.reduce(((t,n)=>{const i=x(e,n,r);return t.top=(0,o.T9)(i.top,t.top),t.right=(0,o.jk)(i.right,t.right),t.bottom=(0,o.jk)(i.bottom,t.bottom),t.left=(0,o.T9)(i.left,t.left),t}),x(e,c,r));return{width:s.right-s.left,height:s.bottom-s.top,x:s.left,y:s.top}},getOffsetParent:L,getElementRects:async function(t){const e=this.getOffsetParent||L,n=this.getDimensions,o=await n(t.floating);return{reference:b(t.reference,await e(t.floating),t.strategy),floating:{x:0,y:0,width:o.width,height:o.height}}},getClientRects:function(t){return Array.from(t.getClientRects())},getDimensions:function(t){const{width:e,height:n}=f(t);return{width:e,height:n}},getScale:d,isElement:a.vq,isRTL:function(t){return"rtl"===(0,a.L9)(t).direction}};function E(t,e,n,i){void 0===i&&(i={});const{ancestorScroll:r=!0,ancestorResize:l=!0,elementResize:c="function"===typeof ResizeObserver,layoutShift:s="function"===typeof IntersectionObserver,animationFrame:f=!1}=i,d=u(t),m=r||l?[...d?(0,a.v9)(d):[],...(0,a.v9)(e)]:[];m.forEach((t=>{r&&t.addEventListener("scroll",n,{passive:!0}),l&&t.addEventListener("resize",n)}));const h=d&&s?function(t,e){let n,i=null;const r=(0,a.ep)(t);function l(){var t;clearTimeout(n),null==(t=i)||t.disconnect(),i=null}return function c(s,a){void 0===s&&(s=!1),void 0===a&&(a=1),l();const{left:f,top:u,width:d,height:m}=t.getBoundingClientRect();if(s||e(),!d||!m)return;const h={rootMargin:-(0,o.RI)(u)+"px "+-(0,o.RI)(r.clientWidth-(f+d))+"px "+-(0,o.RI)(r.clientHeight-(u+m))+"px "+-(0,o.RI)(f)+"px",threshold:(0,o.T9)(0,(0,o.jk)(1,a))||1};let p=!0;function g(t){const e=t[0].intersectionRatio;if(e!==a){if(!p)return c();e?c(!1,e):n=setTimeout((()=>{c(!1,1e-7)}),1e3)}p=!1}try{i=new IntersectionObserver(g,{...h,root:r.ownerDocument})}catch(y){i=new IntersectionObserver(g,h)}i.observe(t)}(!0),l}(d,n):null;let g,y=-1,w=null;c&&(w=new ResizeObserver((t=>{let[o]=t;o&&o.target===d&&w&&(w.unobserve(e),cancelAnimationFrame(y),y=requestAnimationFrame((()=>{var t;null==(t=w)||t.observe(e)}))),n()})),d&&!f&&w.observe(d),w.observe(e));let x=f?p(t):null;return f&&function e(){const o=p(t);!x||o.x===x.x&&o.y===x.y&&o.width===x.width&&o.height===x.height||n();x=o,g=requestAnimationFrame(e)}(),n(),()=>{var t;m.forEach((t=>{r&&t.removeEventListener("scroll",n),l&&t.removeEventListener("resize",n)})),null==h||h(),null==(t=w)||t.disconnect(),w=null,f&&cancelAnimationFrame(g)}}const D=r,k=function(t){return void 0===t&&(t=0),{name:"offset",options:t,async fn(e){var n,i;const{x:r,y:l,placement:c,middlewareData:s}=e,a=await async function(t,e){const{placement:n,platform:i,elements:r}=t,l=await(null==i.isRTL?void 0:i.isRTL(r.floating)),c=(0,o.C0)(n),s=(0,o.Sg)(n),a="y"===(0,o.TV)(n),f=["left","top"].includes(c)?-1:1,u=l&&a?-1:1,d=(0,o._3)(e,t);let{mainAxis:m,crossAxis:h,alignmentAxis:p}="number"===typeof d?{mainAxis:d,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...d};return s&&"number"===typeof p&&(h="end"===s?-1*p:p),a?{x:h*u,y:m*f}:{x:m*f,y:h*u}}(e,t);return c===(null==(n=s.offset)?void 0:n.placement)&&null!=(i=s.arrow)&&i.alignmentOffset?{}:{x:r+a.x,y:l+a.y,data:{...a,placement:c}}}}},A=function(t){return void 0===t&&(t={}),{name:"autoPlacement",options:t,async fn(e){var n,i,l;const{rects:c,middlewareData:s,placement:a,platform:f,elements:u}=e,{crossAxis:d=!1,alignment:m,allowedPlacements:h=o.DD,autoAlignment:p=!0,...g}=(0,o._3)(t,e),y=void 0!==m||h===o.DD?function(t,e,n){return(t?[...n.filter((e=>(0,o.Sg)(e)===t)),...n.filter((e=>(0,o.Sg)(e)!==t))]:n.filter((t=>(0,o.C0)(t)===t))).filter((n=>!t||(0,o.Sg)(n)===t||!!e&&(0,o.aD)(n)!==n))}(m||null,p,h):h,w=await r(e,g),x=(null==(n=s.autoPlacement)?void 0:n.index)||0,v=y[x];if(null==v)return{};const b=(0,o.w7)(v,c,await(null==f.isRTL?void 0:f.isRTL(u.floating)));if(a!==v)return{reset:{placement:y[0]}};const T=[w[(0,o.C0)(v)],w[b[0]],w[b[1]]],R=[...(null==(i=s.autoPlacement)?void 0:i.overflows)||[],{placement:v,overflows:T}],L=y[x+1];if(L)return{data:{index:x+1,overflows:R},reset:{placement:L}};const C=R.map((t=>{const e=(0,o.Sg)(t.placement);return[t.placement,e&&d?t.overflows.slice(0,2).reduce(((t,e)=>t+e),0):t.overflows[0],t.overflows]})).sort(((t,e)=>t[1]-e[1])),E=(null==(l=C.filter((t=>t[2].slice(0,(0,o.Sg)(t[0])?2:3).every((t=>t<=0))))[0])?void 0:l[0])||C[0][0];return E!==a?{data:{index:x+1,overflows:R},reset:{placement:E}}:{}}}},P=function(t){return void 0===t&&(t={}),{name:"shift",options:t,async fn(e){const{x:n,y:i,placement:l}=e,{mainAxis:c=!0,crossAxis:s=!1,limiter:a={fn:t=>{let{x:e,y:n}=t;return{x:e,y:n}}},...f}=(0,o._3)(t,e),u={x:n,y:i},d=await r(e,f),m=(0,o.TV)((0,o.C0)(l)),h=(0,o.PG)(m);let p=u[h],g=u[m];if(c){const t="y"===h?"bottom":"right",e=p+d["y"===h?"top":"left"],n=p-d[t];p=(0,o.qE)(e,p,n)}if(s){const t="y"===m?"bottom":"right",e=g+d["y"===m?"top":"left"],n=g-d[t];g=(0,o.qE)(e,g,n)}const y=a.fn({...e,[h]:p,[m]:g});return{...y,data:{x:y.x-n,y:y.y-i}}}}},_=function(t){return void 0===t&&(t={}),{name:"flip",options:t,async fn(e){var n,i;const{placement:l,middlewareData:c,rects:s,initialPlacement:a,platform:f,elements:u}=e,{mainAxis:d=!0,crossAxis:m=!0,fallbackPlacements:h,fallbackStrategy:p="bestFit",fallbackAxisSideDirection:g="none",flipAlignment:y=!0,...w}=(0,o._3)(t,e);if(null!=(n=c.arrow)&&n.alignmentOffset)return{};const x=(0,o.C0)(l),v=(0,o.C0)(a)===a,b=await(null==f.isRTL?void 0:f.isRTL(u.floating)),T=h||(v||!y?[(0,o.bV)(a)]:(0,o.WJ)(a));h||"none"===g||T.push(...(0,o.lP)(a,y,g,b));const R=[a,...T],L=await r(e,w),C=[];let E=(null==(i=c.flip)?void 0:i.overflows)||[];if(d&&C.push(L[x]),m){const t=(0,o.w7)(l,s,b);C.push(L[t[0]],L[t[1]])}if(E=[...E,{placement:l,overflows:C}],!C.every((t=>t<=0))){var D,k;const t=((null==(D=c.flip)?void 0:D.index)||0)+1,e=R[t];if(e)return{data:{index:t,overflows:E},reset:{placement:e}};let n=null==(k=E.filter((t=>t.overflows[0]<=0)).sort(((t,e)=>t.overflows[1]-e.overflows[1]))[0])?void 0:k.placement;if(!n)switch(p){case"bestFit":{var A;const t=null==(A=E.map((t=>[t.placement,t.overflows.filter((t=>t>0)).reduce(((t,e)=>t+e),0)])).sort(((t,e)=>t[1]-e[1]))[0])?void 0:A[0];t&&(n=t);break}case"initialPlacement":n=a}if(l!==n)return{reset:{placement:n}}}return{}}}},S=function(t){return void 0===t&&(t={}),{name:"size",options:t,async fn(e){const{placement:n,rects:i,platform:l,elements:c}=e,{apply:s=(()=>{}),...a}=(0,o._3)(t,e),f=await r(e,a),u=(0,o.C0)(n),d=(0,o.Sg)(n),m="y"===(0,o.TV)(n),{width:h,height:p}=i.floating;let g,y;"top"===u||"bottom"===u?(g=u,y=d===(await(null==l.isRTL?void 0:l.isRTL(c.floating))?"start":"end")?"left":"right"):(y=u,g="end"===d?"top":"bottom");const w=p-f[g],x=h-f[y],v=!e.middlewareData.shift;let b=w,T=x;if(m){const t=h-f.left-f.right;T=d||v?(0,o.jk)(x,t):t}else{const t=p-f.top-f.bottom;b=d||v?(0,o.jk)(w,t):t}if(v&&!d){const t=(0,o.T9)(f.left,0),e=(0,o.T9)(f.right,0),n=(0,o.T9)(f.top,0),i=(0,o.T9)(f.bottom,0);m?T=h-2*(0!==t||0!==e?t+e:(0,o.T9)(f.left,f.right)):b=p-2*(0!==n||0!==i?n+i:(0,o.T9)(f.top,f.bottom))}await s({...e,availableWidth:T,availableHeight:b});const R=await l.getDimensions(c.floating);return h!==R.width||p!==R.height?{reset:{rects:!0}}:{}}}},q=function(t){return void 0===t&&(t={}),{name:"hide",options:t,async fn(e){const{rects:n}=e,{strategy:i="referenceHidden",...s}=(0,o._3)(t,e);switch(i){case"referenceHidden":{const t=l(await r(e,{...s,elementContext:"reference"}),n.reference);return{data:{referenceHiddenOffsets:t,referenceHidden:c(t)}}}case"escaped":{const t=l(await r(e,{...s,altBoundary:!0}),n.floating);return{data:{escapedOffsets:t,escaped:c(t)}}}default:return{}}}}},O=t=>({name:"arrow",options:t,async fn(e){const{x:n,y:i,placement:r,rects:l,platform:c,elements:s,middlewareData:a}=e,{element:f,padding:u=0}=(0,o._3)(t,e)||{};if(null==f)return{};const d=(0,o.nI)(u),m={x:n,y:i},h=(0,o.Dz)(r),p=(0,o.sq)(h),g=await c.getDimensions(f),y="y"===h,w=y?"top":"left",x=y?"bottom":"right",v=y?"clientHeight":"clientWidth",b=l.reference[p]+l.reference[h]-m[h]-l.floating[p],T=m[h]-l.reference[h],R=await(null==c.getOffsetParent?void 0:c.getOffsetParent(f));let L=R?R[v]:0;L&&await(null==c.isElement?void 0:c.isElement(R))||(L=s.floating[v]||l.floating[p]);const C=b/2-T/2,E=L/2-g[p]/2-1,D=(0,o.jk)(d[w],E),k=(0,o.jk)(d[x],E),A=D,P=L-g[p]-k,_=L/2-g[p]/2+C,S=(0,o.qE)(A,_,P),q=!a.arrow&&null!=(0,o.Sg)(r)&&_!==S&&l.reference[p]/2-(_<A?D:k)-g[p]/2<0,O=q?_<A?_-A:_-P:0;return{[h]:m[h]+O,data:{[h]:S,centerOffset:_-S-O,...q&&{alignmentOffset:O}},reset:q}}}),B=function(t){return void 0===t&&(t={}),{name:"inline",options:t,async fn(e){const{placement:n,elements:i,rects:r,platform:l,strategy:c}=e,{padding:a=2,x:f,y:u}=(0,o._3)(t,e),d=Array.from(await(null==l.getClientRects?void 0:l.getClientRects(i.reference))||[]),m=function(t){const e=t.slice().sort(((t,e)=>t.y-e.y)),n=[];let i=null;for(let o=0;o<e.length;o++){const t=e[o];!i||t.y-i.y>i.height/2?n.push([t]):n[n.length-1].push(t),i=t}return n.map((t=>(0,o.B1)(s(t))))}(d),h=(0,o.B1)(s(d)),p=(0,o.nI)(a);const g=await l.getElementRects({reference:{getBoundingClientRect:function(){if(2===m.length&&m[0].left>m[1].right&&null!=f&&null!=u)return m.find((t=>f>t.left-p.left&&f<t.right+p.right&&u>t.top-p.top&&u<t.bottom+p.bottom))||h;if(m.length>=2){if("y"===(0,o.TV)(n)){const t=m[0],e=m[m.length-1],i="top"===(0,o.C0)(n),r=t.top,l=e.bottom,c=i?t.left:e.left,s=i?t.right:e.right;return{top:r,bottom:l,left:c,right:s,width:s-c,height:l-r,x:c,y:r}}const t="left"===(0,o.C0)(n),e=(0,o.T9)(...m.map((t=>t.right))),i=(0,o.jk)(...m.map((t=>t.left))),r=m.filter((n=>t?n.left===i:n.right===e)),l=r[0].top,c=r[r.length-1].bottom;return{top:l,bottom:c,left:i,right:e,width:e-i,height:c-l,x:i,y:l}}return h}},floating:i.floating,strategy:c});return r.reference.x!==g.reference.x||r.reference.y!==g.reference.y||r.reference.width!==g.reference.width||r.reference.height!==g.reference.height?{reset:{rects:g}}:{}}}},z=function(t){return void 0===t&&(t={}),{options:t,fn(e){const{x:n,y:i,placement:r,rects:l,middlewareData:c}=e,{offset:s=0,mainAxis:a=!0,crossAxis:f=!0}=(0,o._3)(t,e),u={x:n,y:i},d=(0,o.TV)(r),m=(0,o.PG)(d);let h=u[m],p=u[d];const g=(0,o._3)(s,e),y="number"===typeof g?{mainAxis:g,crossAxis:0}:{mainAxis:0,crossAxis:0,...g};if(a){const t="y"===m?"height":"width",e=l.reference[m]-l.floating[t]+y.mainAxis,n=l.reference[m]+l.reference[t]-y.mainAxis;h<e?h=e:h>n&&(h=n)}if(f){var w,x;const t="y"===m?"width":"height",e=["top","left"].includes((0,o.C0)(r)),n=l.reference[d]-l.floating[t]+(e&&(null==(w=c.offset)?void 0:w[d])||0)+(e?0:y.crossAxis),i=l.reference[d]+l.reference[t]+(e?0:(null==(x=c.offset)?void 0:x[d])||0)-(e?y.crossAxis:0);p<n?p=n:p>i&&(p=i)}return{[m]:h,[d]:p}}}},V=(t,e,n)=>{const o=new Map,r={platform:C,...n},l={...r.platform,_c:o};return(async(t,e,n)=>{const{placement:o="bottom",strategy:r="absolute",middleware:l=[],platform:c}=n,s=l.filter(Boolean),a=await(null==c.isRTL?void 0:c.isRTL(e));let f=await c.getElementRects({reference:t,floating:e,strategy:r}),{x:u,y:d}=i(f,o,a),m=o,h={},p=0;for(let g=0;g<s.length;g++){const{name:n,fn:l}=s[g],{x:y,y:w,data:x,reset:v}=await l({x:u,y:d,initialPlacement:o,placement:m,strategy:r,middlewareData:h,rects:f,platform:c,elements:{reference:t,floating:e}});u=null!=y?y:u,d=null!=w?w:d,h={...h,[n]:{...h[n],...x}},v&&p<=50&&(p++,"object"===typeof v&&(v.placement&&(m=v.placement),v.rects&&(f=!0===v.rects?await c.getElementRects({reference:t,floating:e,strategy:r}):v.rects),({x:u,y:d}=i(f,m,a))),g=-1)}return{x:u,y:d,placement:m,strategy:r,middlewareData:h}})(t,e,{...r,platform:l})}},35702:(t,e,n)=>{function o(t){return l(t)?(t.nodeName||"").toLowerCase():"#document"}function i(t){var e;return(null==t||null==(e=t.ownerDocument)?void 0:e.defaultView)||window}function r(t){var e;return null==(e=(l(t)?t.ownerDocument:t.document)||window.document)?void 0:e.documentElement}function l(t){return t instanceof Node||t instanceof i(t).Node}function c(t){return t instanceof Element||t instanceof i(t).Element}function s(t){return t instanceof HTMLElement||t instanceof i(t).HTMLElement}function a(t){return"undefined"!==typeof ShadowRoot&&(t instanceof ShadowRoot||t instanceof i(t).ShadowRoot)}function f(t){const{overflow:e,overflowX:n,overflowY:o,display:i}=g(t);return/auto|scroll|overlay|hidden|clip/.test(e+o+n)&&!["inline","contents"].includes(i)}function u(t){return["table","td","th"].includes(o(t))}function d(t){const e=h(),n=g(t);return"none"!==n.transform||"none"!==n.perspective||!!n.containerType&&"normal"!==n.containerType||!e&&!!n.backdropFilter&&"none"!==n.backdropFilter||!e&&!!n.filter&&"none"!==n.filter||["transform","perspective","filter"].some((t=>(n.willChange||"").includes(t)))||["paint","layout","strict","content"].some((t=>(n.contain||"").includes(t)))}function m(t){let e=w(t);for(;s(e)&&!p(e);){if(d(e))return e;e=w(e)}return null}function h(){return!("undefined"===typeof CSS||!CSS.supports)&&CSS.supports("-webkit-backdrop-filter","none")}function p(t){return["html","body","#document"].includes(o(t))}function g(t){return i(t).getComputedStyle(t)}function y(t){return c(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function w(t){if("html"===o(t))return t;const e=t.assignedSlot||t.parentNode||a(t)&&t.host||r(t);return a(e)?e.host:e}function x(t){const e=w(t);return p(e)?t.ownerDocument?t.ownerDocument.body:t.body:s(e)&&f(e)?e:x(e)}function v(t,e,n){var o;void 0===e&&(e=[]),void 0===n&&(n=!0);const r=x(t),l=r===(null==(o=t.ownerDocument)?void 0:o.body),c=i(r);return l?e.concat(c,c.visualViewport||[],f(r)?r:[],c.frameElement&&n?v(c.frameElement):[]):e.concat(r,v(r,[],n))}n.d(e,{$4:()=>w,CP:()=>y,L9:()=>g,Lv:()=>u,Ng:()=>a,Tc:()=>h,ZU:()=>f,ep:()=>r,eu:()=>p,gJ:()=>m,mq:()=>o,sQ:()=>d,sb:()=>s,v9:()=>v,vq:()=>c,zk:()=>i})},55e3:(t,e,n)=>{n.d(e,{B1:()=>D,C0:()=>p,DD:()=>r,Dz:()=>v,Jx:()=>f,LI:()=>s,PG:()=>y,RI:()=>a,Sg:()=>g,T9:()=>c,TV:()=>x,WJ:()=>T,_3:()=>h,aD:()=>R,bV:()=>C,jk:()=>l,lP:()=>L,nI:()=>E,qE:()=>m,r_:()=>o,sq:()=>w,w7:()=>b});const o=["top","right","bottom","left"],i=["start","end"],r=o.reduce(((t,e)=>t.concat(e,e+"-"+i[0],e+"-"+i[1])),[]),l=Math.min,c=Math.max,s=Math.round,a=Math.floor,f=t=>({x:t,y:t}),u={left:"right",right:"left",bottom:"top",top:"bottom"},d={start:"end",end:"start"};function m(t,e,n){return c(t,l(e,n))}function h(t,e){return"function"===typeof t?t(e):t}function p(t){return t.split("-")[0]}function g(t){return t.split("-")[1]}function y(t){return"x"===t?"y":"x"}function w(t){return"y"===t?"height":"width"}function x(t){return["top","bottom"].includes(p(t))?"y":"x"}function v(t){return y(x(t))}function b(t,e,n){void 0===n&&(n=!1);const o=g(t),i=v(t),r=w(i);let l="x"===i?o===(n?"end":"start")?"right":"left":"start"===o?"bottom":"top";return e.reference[r]>e.floating[r]&&(l=C(l)),[l,C(l)]}function T(t){const e=C(t);return[R(t),e,R(e)]}function R(t){return t.replace(/start|end/g,(t=>d[t]))}function L(t,e,n,o){const i=g(t);let r=function(t,e,n){const o=["left","right"],i=["right","left"],r=["top","bottom"],l=["bottom","top"];switch(t){case"top":case"bottom":return n?e?i:o:e?o:i;case"left":case"right":return e?r:l;default:return[]}}(p(t),"start"===n,o);return i&&(r=r.map((t=>t+"-"+i)),e&&(r=r.concat(r.map(R)))),r}function C(t){return t.replace(/left|right|bottom|top/g,(t=>u[t]))}function E(t){return"number"!==typeof t?function(t){return{top:0,right:0,bottom:0,left:0,...t}}(t):{top:t,right:t,bottom:t,left:t}}function D(t){const{x:e,y:n,width:o,height:i}=t;return{width:o,height:i,top:n,left:e,right:e+o,bottom:n+i,x:e,y:n}}}}]);
//# sourceMappingURL=5885.d85ba62c.chunk.js.map