"use strict";(self.webpackChunk_coreui_coreui_free_react_admin_template=self.webpackChunk_coreui_coreui_free_react_admin_template||[]).push([[303],{8303:(e,t,n)=>{n.d(t,{A:()=>Ge});var o=n(98139),r=n.n(o);const s=!("undefined"===typeof window||!window.document||!window.document.createElement);var i=!1,a=!1;try{var c={get passive(){return i=!0},get once(){return a=i=!0}};s&&(window.addEventListener("test",c,c),window.removeEventListener("test",c,!0))}catch(Ye){}const l=function(e,t,n,o){if(o&&"boolean"!==typeof o&&!a){var r=o.once,s=o.capture,c=n;!a&&r&&(c=n.__once||function e(o){this.removeEventListener(t,e,s),n.call(this,o)},n.__once=c),e.addEventListener(t,c,i?o:s)}e.addEventListener(t,n,o)};function u(e){return e&&e.ownerDocument||document}const d=function(e,t,n,o){var r=o&&"boolean"!==typeof o?o.capture:o;e.removeEventListener(t,n,r),n.__once&&e.removeEventListener(t,n.__once,r)};var f;function p(e){if((!f&&0!==f||e)&&s){var t=document.createElement("div");t.style.position="absolute",t.style.top="-9999px",t.style.width="50px",t.style.height="50px",t.style.overflow="scroll",document.body.appendChild(t),f=t.offsetWidth-t.clientWidth,document.body.removeChild(t)}return f}var m=n(65043);const h=function(e){const t=(0,m.useRef)(e);return(0,m.useEffect)((()=>{t.current=e}),[e]),t};function E(e){const t=h(e);return(0,m.useCallback)((function(){return t.current&&t.current(...arguments)}),[t])}const g=e=>e&&"function"!==typeof e?t=>{e.current=t}:e;const x=function(e,t){return(0,m.useMemo)((()=>function(e,t){const n=g(e),o=g(t);return e=>{n&&n(e),o&&o(e)}}(e,t)),[e,t])};function v(e){const t=function(e){const t=(0,m.useRef)(e);return t.current=e,t}(e);(0,m.useEffect)((()=>()=>t.current()),[])}function b(e,t){return function(e){var t=u(e);return t&&t.defaultView||window}(e).getComputedStyle(e,t)}var y=/([A-Z])/g;var k=/^ms-/;function C(e){return function(e){return e.replace(y,"-$1").toLowerCase()}(e).replace(k,"-ms-")}var w=/^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;const N=function(e,t){var n="",o="";if("string"===typeof t)return e.style.getPropertyValue(C(t))||b(e).getPropertyValue(C(t));Object.keys(t).forEach((function(r){var s=t[r];s||0===s?!function(e){return!(!e||!w.test(e))}(r)?n+=C(r)+": "+s+";":o+=r+"("+s+") ":e.style.removeProperty(C(r))})),o&&(n+="transform: "+o+";"),e.style.cssText+=";"+n};const R=function(e,t,n,o){return l(e,t,n,o),function(){d(e,t,n,o)}};function O(e,t,n){void 0===n&&(n=5);var o=!1,r=setTimeout((function(){o||function(e,t,n,o){if(void 0===n&&(n=!1),void 0===o&&(o=!0),e){var r=document.createEvent("HTMLEvents");r.initEvent(t,n,o),e.dispatchEvent(r)}}(e,"transitionend",!0)}),t+n),s=R(e,"transitionend",(function(){o=!0}),{once:!0});return function(){clearTimeout(r),s()}}function T(e,t,n,o){null==n&&(n=function(e){var t=N(e,"transitionDuration")||"",n=-1===t.indexOf("ms")?1e3:1;return parseFloat(t)*n}(e)||0);var r=O(e,n,o),s=R(e,"transitionend",t);return function(){r(),s()}}function S(e){void 0===e&&(e=u());try{var t=e.activeElement;return t&&t.nodeName?t:null}catch(Ye){return e.body}}function j(e,t){return e.contains?e.contains(t):e.compareDocumentPosition?e===t||!!(16&e.compareDocumentPosition(t)):void 0}var L=n(97950);const D=(M="modal-open","".concat("data-rr-ui-").concat(M));var M;const F=class{constructor(){let{ownerDocument:e,handleContainerOverflow:t=!0,isRTL:n=!1}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.handleContainerOverflow=t,this.isRTL=n,this.modals=[],this.ownerDocument=e}getScrollbarWidth(){return function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document;const t=e.defaultView;return Math.abs(t.innerWidth-e.documentElement.clientWidth)}(this.ownerDocument)}getElement(){return(this.ownerDocument||document).body}setModalAttributes(e){}removeModalAttributes(e){}setContainerStyle(e){const t={overflow:"hidden"},n=this.isRTL?"paddingLeft":"paddingRight",o=this.getElement();e.style={overflow:o.style.overflow,[n]:o.style[n]},e.scrollBarWidth&&(t[n]="".concat(parseInt(N(o,n)||"0",10)+e.scrollBarWidth,"px")),o.setAttribute(D,""),N(o,t)}reset(){[...this.modals].forEach((e=>this.remove(e)))}removeContainerStyle(e){const t=this.getElement();t.removeAttribute(D),Object.assign(t.style,e.style)}add(e){let t=this.modals.indexOf(e);return-1!==t?t:(t=this.modals.length,this.modals.push(e),this.setModalAttributes(e),0!==t||(this.state={scrollBarWidth:this.getScrollbarWidth(),style:{}},this.handleContainerOverflow&&this.setContainerStyle(this.state)),t)}remove(e){const t=this.modals.indexOf(e);-1!==t&&(this.modals.splice(t,1),!this.modals.length&&this.handleContainerOverflow&&this.removeContainerStyle(this.state),this.removeModalAttributes(e))}isTopModal(e){return!!this.modals.length&&this.modals[this.modals.length-1]===e}},A=(0,m.createContext)(s?window:void 0);A.Provider;function B(){return(0,m.useContext)(A)}const _=(e,t)=>s?null==e?(t||u()).body:("function"===typeof e&&(e=e()),e&&"current"in e&&(e=e.current),e&&("nodeType"in e||e.getBoundingClientRect)?e:null):null;const P="undefined"!==typeof n.g&&n.g.navigator&&"ReactNative"===n.g.navigator.product,W="undefined"!==typeof document||P?m.useLayoutEffect:m.useEffect;const H=function(e){let{children:t,in:n,onExited:o,mountOnEnter:r,unmountOnExit:s}=e;const i=(0,m.useRef)(null),a=(0,m.useRef)(n),c=E(o);(0,m.useEffect)((()=>{n?a.current=!0:c(i.current)}),[n,c]);const l=x(i,t.ref),u=(0,m.cloneElement)(t,{ref:l});return n?u:s||!a.current&&r?null:u};const I=["onEnter","onEntering","onEntered","onExit","onExiting","onExited","addEndListener","children"];function U(e){let{onEnter:t,onEntering:n,onEntered:o,onExit:r,onExiting:s,onExited:i,addEndListener:a,children:c}=e,l=function(e,t){if(null==e)return{};var n,o,r={},s=Object.keys(e);for(o=0;o<s.length;o++)n=s[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,I);const{major:u}=function(){const e=m.version.split(".");return{major:+e[0],minor:+e[1],patch:+e[2]}}(),d=u>=19?c.props.ref:c.ref,f=(0,m.useRef)(null),p=x(f,"function"===typeof c?null:d),h=e=>t=>{e&&f.current&&e(f.current,t)},E=(0,m.useCallback)(h(t),[t]),g=(0,m.useCallback)(h(n),[n]),v=(0,m.useCallback)(h(o),[o]),b=(0,m.useCallback)(h(r),[r]),y=(0,m.useCallback)(h(s),[s]),k=(0,m.useCallback)(h(i),[i]),C=(0,m.useCallback)(h(a),[a]);return Object.assign({},l,{nodeRef:f},t&&{onEnter:E},n&&{onEntering:g},o&&{onEntered:v},r&&{onExit:b},s&&{onExiting:y},i&&{onExited:k},a&&{addEndListener:C},{children:"function"===typeof c?(e,t)=>c(e,Object.assign({},t,{ref:p})):(0,m.cloneElement)(c,{ref:p})})}var V=n(70579);const z=["component"];const K=m.forwardRef(((e,t)=>{let{component:n}=e;const o=U(function(e,t){if(null==e)return{};var n,o,r={},s=Object.keys(e);for(o=0;o<s.length;o++)n=s[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,z));return(0,V.jsx)(n,Object.assign({ref:t},o))}));function $(e){let{children:t,in:n,onExited:o,onEntered:r,transition:s}=e;const[i,a]=(0,m.useState)(!n);n&&i&&a(!1);const c=function(e){let{in:t,onTransition:n}=e;const o=(0,m.useRef)(null),r=(0,m.useRef)(!0),s=E(n);return W((()=>{if(!o.current)return;let e=!1;return s({in:t,element:o.current,initial:r.current,isStale:()=>e}),()=>{e=!0}}),[t,s]),W((()=>(r.current=!1,()=>{r.current=!0})),[]),o}({in:!!n,onTransition:e=>{Promise.resolve(s(e)).then((()=>{e.isStale()||(e.in?null==r||r(e.element,e.initial):(a(!0),null==o||o(e.element)))}),(t=>{throw e.in||a(!0),t}))}}),l=x(c,t.ref);return i&&!n?null:(0,m.cloneElement)(t,{ref:l})}function X(e,t,n){return e?(0,V.jsx)(K,Object.assign({},n,{component:e})):t?(0,V.jsx)($,Object.assign({},n,{transition:t})):(0,V.jsx)(H,Object.assign({},n))}const G=["show","role","className","style","children","backdrop","keyboard","onBackdropClick","onEscapeKeyDown","transition","runTransition","backdropTransition","runBackdropTransition","autoFocus","enforceFocus","restoreFocus","restoreFocusOptions","renderDialog","renderBackdrop","manager","container","onShow","onHide","onExit","onExited","onExiting","onEnter","onEntering","onEntered"];let Y;function Z(e){const t=B(),n=e||function(e){return Y||(Y=new F({ownerDocument:null==e?void 0:e.document})),Y}(t),o=(0,m.useRef)({dialog:null,backdrop:null});return Object.assign(o.current,{add:()=>n.add(o.current),remove:()=>n.remove(o.current),isTopModal:()=>n.isTopModal(o.current),setDialogRef:(0,m.useCallback)((e=>{o.current.dialog=e}),[]),setBackdropRef:(0,m.useCallback)((e=>{o.current.backdrop=e}),[])})}const q=(0,m.forwardRef)(((e,t)=>{let{show:n=!1,role:o="dialog",className:r,style:i,children:a,backdrop:c=!0,keyboard:l=!0,onBackdropClick:u,onEscapeKeyDown:d,transition:f,runTransition:p,backdropTransition:h,runBackdropTransition:g,autoFocus:x=!0,enforceFocus:b=!0,restoreFocus:y=!0,restoreFocusOptions:k,renderDialog:C,renderBackdrop:w=(e=>(0,V.jsx)("div",Object.assign({},e))),manager:N,container:O,onShow:T,onHide:D=(()=>{}),onExit:M,onExited:F,onExiting:A,onEnter:P,onEntering:W,onEntered:H}=e,I=function(e,t){if(null==e)return{};var n,o,r={},s=Object.keys(e);for(o=0;o<s.length;o++)n=s[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,G);const U=B(),z=function(e,t){const n=B(),[o,r]=(0,m.useState)((()=>_(e,null==n?void 0:n.document)));if(!o){const t=_(e);t&&r(t)}return(0,m.useEffect)((()=>{t&&o&&t(o)}),[t,o]),(0,m.useEffect)((()=>{const t=_(e);t!==o&&r(t)}),[e,o]),o}(O),K=Z(N),$=function(){const e=(0,m.useRef)(!0),t=(0,m.useRef)((()=>e.current));return(0,m.useEffect)((()=>(e.current=!0,()=>{e.current=!1})),[]),t.current}(),Y=function(e){const t=(0,m.useRef)(null);return(0,m.useEffect)((()=>{t.current=e})),t.current}(n),[q,J]=(0,m.useState)(!n),Q=(0,m.useRef)(null);(0,m.useImperativeHandle)(t,(()=>K),[K]),s&&!Y&&n&&(Q.current=S(null==U?void 0:U.document)),n&&q&&J(!1);const ee=E((()=>{if(K.add(),ie.current=R(document,"keydown",re),se.current=R(document,"focus",(()=>setTimeout(ne)),!0),T&&T(),x){var e,t;const n=S(null!=(e=null==(t=K.dialog)?void 0:t.ownerDocument)?e:null==U?void 0:U.document);K.dialog&&n&&!j(K.dialog,n)&&(Q.current=n,K.dialog.focus())}})),te=E((()=>{var e;(K.remove(),null==ie.current||ie.current(),null==se.current||se.current(),y)&&(null==(e=Q.current)||null==e.focus||e.focus(k),Q.current=null)}));(0,m.useEffect)((()=>{n&&z&&ee()}),[n,z,ee]),(0,m.useEffect)((()=>{q&&te()}),[q,te]),v((()=>{te()}));const ne=E((()=>{if(!b||!$()||!K.isTopModal())return;const e=S(null==U?void 0:U.document);K.dialog&&e&&!j(K.dialog,e)&&K.dialog.focus()})),oe=E((e=>{e.target===e.currentTarget&&(null==u||u(e),!0===c&&D())})),re=E((e=>{l&&function(e){return"Escape"===e.code||27===e.keyCode}(e)&&K.isTopModal()&&(null==d||d(e),e.defaultPrevented||D())})),se=(0,m.useRef)(),ie=(0,m.useRef)();if(!z)return null;const ae=Object.assign({role:o,ref:K.setDialogRef,"aria-modal":"dialog"===o||void 0},I,{style:i,className:r,tabIndex:-1});let ce=C?C(ae):(0,V.jsx)("div",Object.assign({},ae,{children:m.cloneElement(a,{role:"document"})}));ce=X(f,p,{unmountOnExit:!0,mountOnEnter:!0,appear:!0,in:!!n,onExit:M,onExiting:A,onExited:function(){J(!0),null==F||F(...arguments)},onEnter:P,onEntering:W,onEntered:H,children:ce});let le=null;return c&&(le=w({ref:K.setBackdropRef,onClick:oe}),le=X(h,g,{in:!!n,appear:!0,mountOnEnter:!0,unmountOnExit:!0,children:le})),(0,V.jsx)(V.Fragment,{children:L.createPortal((0,V.jsxs)(V.Fragment,{children:[le,ce]}),z)})}));q.displayName="Modal";const J=Object.assign(q,{Manager:F});var Q=Function.prototype.bind.call(Function.prototype.call,[].slice);function ee(e,t){return Q(e.querySelectorAll(t))}function te(e,t){return e.replace(new RegExp("(^|\\s)"+t+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")}const ne=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",oe=".sticky-top",re=".navbar-toggler";class se extends F{adjustAndStore(e,t,n){const o=t.style[e];t.dataset[e]=o,N(t,{[e]:"".concat(parseFloat(N(t,e))+n,"px")})}restore(e,t){const n=t.dataset[e];void 0!==n&&(delete t.dataset[e],N(t,{[e]:n}))}setContainerStyle(e){super.setContainerStyle(e);const t=this.getElement();var n,o;if(o="modal-open",(n=t).classList?n.classList.add(o):function(e,t){return e.classList?!!t&&e.classList.contains(t):-1!==(" "+(e.className.baseVal||e.className)+" ").indexOf(" "+t+" ")}(n,o)||("string"===typeof n.className?n.className=n.className+" "+o:n.setAttribute("class",(n.className&&n.className.baseVal||"")+" "+o)),!e.scrollBarWidth)return;const r=this.isRTL?"paddingLeft":"paddingRight",s=this.isRTL?"marginLeft":"marginRight";ee(t,ne).forEach((t=>this.adjustAndStore(r,t,e.scrollBarWidth))),ee(t,oe).forEach((t=>this.adjustAndStore(s,t,-e.scrollBarWidth))),ee(t,re).forEach((t=>this.adjustAndStore(s,t,e.scrollBarWidth)))}removeContainerStyle(e){super.removeContainerStyle(e);const t=this.getElement();var n,o;o="modal-open",(n=t).classList?n.classList.remove(o):"string"===typeof n.className?n.className=te(n.className,o):n.setAttribute("class",te(n.className&&n.className.baseVal||"",o));const r=this.isRTL?"paddingLeft":"paddingRight",s=this.isRTL?"marginLeft":"marginRight";ee(t,ne).forEach((e=>this.restore(r,e))),ee(t,oe).forEach((e=>this.restore(s,e))),ee(t,re).forEach((e=>this.restore(s,e)))}}let ie;var ae=n(98587),ce=n(77387);const le=!1;var ue=n(88726),de="unmounted",fe="exited",pe="entering",me="entered",he="exiting",Ee=function(e){function t(t,n){var o;o=e.call(this,t,n)||this;var r,s=n&&!n.isMounting?t.enter:t.appear;return o.appearStatus=null,t.in?s?(r=fe,o.appearStatus=pe):r=me:r=t.unmountOnExit||t.mountOnEnter?de:fe,o.state={status:r},o.nextCallback=null,o}(0,ce.A)(t,e),t.getDerivedStateFromProps=function(e,t){return e.in&&t.status===de?{status:fe}:null};var n=t.prototype;return n.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},n.componentDidUpdate=function(e){var t=null;if(e!==this.props){var n=this.state.status;this.props.in?n!==pe&&n!==me&&(t=pe):n!==pe&&n!==me||(t=he)}this.updateStatus(!1,t)},n.componentWillUnmount=function(){this.cancelNextCallback()},n.getTimeouts=function(){var e,t,n,o=this.props.timeout;return e=t=n=o,null!=o&&"number"!==typeof o&&(e=o.exit,t=o.enter,n=void 0!==o.appear?o.appear:t),{exit:e,enter:t,appear:n}},n.updateStatus=function(e,t){if(void 0===e&&(e=!1),null!==t)if(this.cancelNextCallback(),t===pe){if(this.props.unmountOnExit||this.props.mountOnEnter){var n=this.props.nodeRef?this.props.nodeRef.current:L.findDOMNode(this);n&&function(e){e.scrollTop}(n)}this.performEnter(e)}else this.performExit();else this.props.unmountOnExit&&this.state.status===fe&&this.setState({status:de})},n.performEnter=function(e){var t=this,n=this.props.enter,o=this.context?this.context.isMounting:e,r=this.props.nodeRef?[o]:[L.findDOMNode(this),o],s=r[0],i=r[1],a=this.getTimeouts(),c=o?a.appear:a.enter;!e&&!n||le?this.safeSetState({status:me},(function(){t.props.onEntered(s)})):(this.props.onEnter(s,i),this.safeSetState({status:pe},(function(){t.props.onEntering(s,i),t.onTransitionEnd(c,(function(){t.safeSetState({status:me},(function(){t.props.onEntered(s,i)}))}))})))},n.performExit=function(){var e=this,t=this.props.exit,n=this.getTimeouts(),o=this.props.nodeRef?void 0:L.findDOMNode(this);t&&!le?(this.props.onExit(o),this.safeSetState({status:he},(function(){e.props.onExiting(o),e.onTransitionEnd(n.exit,(function(){e.safeSetState({status:fe},(function(){e.props.onExited(o)}))}))}))):this.safeSetState({status:fe},(function(){e.props.onExited(o)}))},n.cancelNextCallback=function(){null!==this.nextCallback&&(this.nextCallback.cancel(),this.nextCallback=null)},n.safeSetState=function(e,t){t=this.setNextCallback(t),this.setState(e,t)},n.setNextCallback=function(e){var t=this,n=!0;return this.nextCallback=function(o){n&&(n=!1,t.nextCallback=null,e(o))},this.nextCallback.cancel=function(){n=!1},this.nextCallback},n.onTransitionEnd=function(e,t){this.setNextCallback(t);var n=this.props.nodeRef?this.props.nodeRef.current:L.findDOMNode(this),o=null==e&&!this.props.addEndListener;if(n&&!o){if(this.props.addEndListener){var r=this.props.nodeRef?[this.nextCallback]:[n,this.nextCallback],s=r[0],i=r[1];this.props.addEndListener(s,i)}null!=e&&setTimeout(this.nextCallback,e)}else setTimeout(this.nextCallback,0)},n.render=function(){var e=this.state.status;if(e===de)return null;var t=this.props,n=t.children,o=(t.in,t.mountOnEnter,t.unmountOnExit,t.appear,t.enter,t.exit,t.timeout,t.addEndListener,t.onEnter,t.onEntering,t.onEntered,t.onExit,t.onExiting,t.onExited,t.nodeRef,(0,ae.A)(t,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]));return m.createElement(ue.A.Provider,{value:null},"function"===typeof n?n(e,o):m.cloneElement(m.Children.only(n),o))},t}(m.Component);function ge(){}Ee.contextType=ue.A,Ee.propTypes={},Ee.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:ge,onEntering:ge,onEntered:ge,onExit:ge,onExiting:ge,onExited:ge},Ee.UNMOUNTED=de,Ee.EXITED=fe,Ee.ENTERING=pe,Ee.ENTERED=me,Ee.EXITING=he;const xe=Ee;function ve(e,t){const n=N(e,t)||"",o=-1===n.indexOf("ms")?1e3:1;return parseFloat(n)*o}function be(e,t){const n=ve(e,"transitionDuration"),o=ve(e,"transitionDelay"),r=T(e,(n=>{n.target===e&&(r(),t(n))}),n+o)}const ye=m.forwardRef(((e,t)=>{let{onEnter:n,onEntering:o,onEntered:r,onExit:s,onExiting:i,onExited:a,addEndListener:c,children:l,childRef:u,...d}=e;const f=(0,m.useRef)(null),p=x(f,u),h=e=>{var t;p((t=e)&&"setState"in t?L.findDOMNode(t):null!=t?t:null)},E=e=>t=>{e&&f.current&&e(f.current,t)},g=(0,m.useCallback)(E(n),[n]),v=(0,m.useCallback)(E(o),[o]),b=(0,m.useCallback)(E(r),[r]),y=(0,m.useCallback)(E(s),[s]),k=(0,m.useCallback)(E(i),[i]),C=(0,m.useCallback)(E(a),[a]),w=(0,m.useCallback)(E(c),[c]);return(0,V.jsx)(xe,{ref:t,...d,onEnter:g,onEntered:b,onEntering:v,onExit:y,onExited:C,onExiting:k,addEndListener:w,nodeRef:f,children:"function"===typeof l?(e,t)=>l(e,{...t,ref:h}):m.cloneElement(l,{ref:h})})})),ke={[pe]:"show",[me]:"show"},Ce=m.forwardRef(((e,t)=>{let{className:n,children:o,transitionClasses:s={},onEnter:i,...a}=e;const c={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1,...a},l=(0,m.useCallback)(((e,t)=>{!function(e){e.offsetHeight}(e),null==i||i(e,t)}),[i]);return(0,V.jsx)(ye,{ref:t,addEndListener:be,...c,onEnter:l,childRef:o.ref,children:(e,t)=>m.cloneElement(o,{...t,className:r()("fade",n,o.props.className,ke[e],s[e])})})}));Ce.displayName="Fade";const we=Ce;var Ne=n(67852);const Re=m.forwardRef(((e,t)=>{let{className:n,bsPrefix:o,as:s="div",...i}=e;return o=(0,Ne.oU)(o,"modal-body"),(0,V.jsx)(s,{ref:t,className:r()(n,o),...i})}));Re.displayName="ModalBody";const Oe=Re,Te=m.createContext({onHide(){}}),Se=m.forwardRef(((e,t)=>{let{bsPrefix:n,className:o,contentClassName:s,centered:i,size:a,fullscreen:c,children:l,scrollable:u,...d}=e;n=(0,Ne.oU)(n,"modal");const f="".concat(n,"-dialog"),p="string"===typeof c?"".concat(n,"-fullscreen-").concat(c):"".concat(n,"-fullscreen");return(0,V.jsx)("div",{...d,ref:t,className:r()(f,o,a&&"".concat(n,"-").concat(a),i&&"".concat(f,"-centered"),u&&"".concat(f,"-scrollable"),c&&p),children:(0,V.jsx)("div",{className:r()("".concat(n,"-content"),s),children:l})})}));Se.displayName="ModalDialog";const je=Se,Le=m.forwardRef(((e,t)=>{let{className:n,bsPrefix:o,as:s="div",...i}=e;return o=(0,Ne.oU)(o,"modal-footer"),(0,V.jsx)(s,{ref:t,className:r()(n,o),...i})}));Le.displayName="ModalFooter";const De=Le;var Me=n(65173),Fe=n.n(Me);const Ae={"aria-label":Fe().string,onClick:Fe().func,variant:Fe().oneOf(["white"])},Be=m.forwardRef(((e,t)=>{let{className:n,variant:o,"aria-label":s="Close",...i}=e;return(0,V.jsx)("button",{ref:t,type:"button",className:r()("btn-close",o&&"btn-close-".concat(o),n),"aria-label":s,...i})}));Be.displayName="CloseButton",Be.propTypes=Ae;const _e=Be,Pe=m.forwardRef(((e,t)=>{let{closeLabel:n="Close",closeVariant:o,closeButton:r=!1,onHide:s,children:i,...a}=e;const c=(0,m.useContext)(Te),l=E((()=>{null==c||c.onHide(),null==s||s()}));return(0,V.jsxs)("div",{ref:t,...a,children:[i,r&&(0,V.jsx)(_e,{"aria-label":n,variant:o,onClick:l})]})})),We=m.forwardRef(((e,t)=>{let{bsPrefix:n,className:o,closeLabel:s="Close",closeButton:i=!1,...a}=e;return n=(0,Ne.oU)(n,"modal-header"),(0,V.jsx)(Pe,{ref:t,...a,className:r()(o,n),closeLabel:s,closeButton:i})}));We.displayName="ModalHeader";const He=We,Ie=(Ue="h4",m.forwardRef(((e,t)=>(0,V.jsx)("div",{...e,ref:t,className:r()(e.className,Ue)}))));var Ue;const Ve=m.forwardRef(((e,t)=>{let{className:n,bsPrefix:o,as:s=Ie,...i}=e;return o=(0,Ne.oU)(o,"modal-title"),(0,V.jsx)(s,{ref:t,className:r()(n,o),...i})}));Ve.displayName="ModalTitle";const ze=Ve;function Ke(e){return(0,V.jsx)(we,{...e,timeout:null})}function $e(e){return(0,V.jsx)(we,{...e,timeout:null})}const Xe=m.forwardRef(((e,t)=>{let{bsPrefix:n,className:o,style:i,dialogClassName:a,contentClassName:c,children:f,dialogAs:h=je,"data-bs-theme":g,"aria-labelledby":b,"aria-describedby":y,"aria-label":k,show:C=!1,animation:w=!0,backdrop:N=!0,keyboard:R=!0,onEscapeKeyDown:O,onShow:S,onHide:j,container:L,autoFocus:D=!0,enforceFocus:M=!0,restoreFocus:F=!0,restoreFocusOptions:A,onEntered:B,onExit:_,onExiting:P,onEnter:W,onEntering:H,onExited:I,backdropClassName:U,manager:z,...K}=e;const[$,X]=(0,m.useState)({}),[G,Y]=(0,m.useState)(!1),Z=(0,m.useRef)(!1),q=(0,m.useRef)(!1),Q=(0,m.useRef)(null),[ee,te]=(0,m.useState)(null),ne=x(t,te),oe=E(j),re=(0,Ne.Wz)();n=(0,Ne.oU)(n,"modal");const ae=(0,m.useMemo)((()=>({onHide:oe})),[oe]);function ce(){return z||function(e){return ie||(ie=new se(e)),ie}({isRTL:re})}function le(e){if(!s)return;const t=ce().getScrollbarWidth()>0,n=e.scrollHeight>u(e).documentElement.clientHeight;X({paddingRight:t&&!n?p():void 0,paddingLeft:!t&&n?p():void 0})}const ue=E((()=>{ee&&le(ee.dialog)}));v((()=>{d(window,"resize",ue),null==Q.current||Q.current()}));const de=()=>{Z.current=!0},fe=e=>{Z.current&&ee&&e.target===ee.dialog&&(q.current=!0),Z.current=!1},pe=()=>{Y(!0),Q.current=T(ee.dialog,(()=>{Y(!1)}))},me=e=>{"static"!==N?q.current||e.target!==e.currentTarget?q.current=!1:null==j||j():(e=>{e.target===e.currentTarget&&pe()})(e)},he=(0,m.useCallback)((e=>(0,V.jsx)("div",{...e,className:r()("".concat(n,"-backdrop"),U,!w&&"show")})),[w,U,n]),Ee={...i,...$};Ee.display="block";return(0,V.jsx)(Te.Provider,{value:ae,children:(0,V.jsx)(J,{show:C,ref:ne,backdrop:N,container:L,keyboard:!0,autoFocus:D,enforceFocus:M,restoreFocus:F,restoreFocusOptions:A,onEscapeKeyDown:e=>{R?null==O||O(e):(e.preventDefault(),"static"===N&&pe())},onShow:S,onHide:j,onEnter:(e,t)=>{e&&le(e),null==W||W(e,t)},onEntering:(e,t)=>{null==H||H(e,t),l(window,"resize",ue)},onEntered:B,onExit:e=>{null==Q.current||Q.current(),null==_||_(e)},onExiting:P,onExited:e=>{e&&(e.style.display=""),null==I||I(e),d(window,"resize",ue)},manager:ce(),transition:w?Ke:void 0,backdropTransition:w?$e:void 0,renderBackdrop:he,renderDialog:e=>(0,V.jsx)("div",{role:"dialog",...e,style:Ee,className:r()(o,n,G&&"".concat(n,"-static"),!w&&"show"),onClick:N?me:void 0,onMouseUp:fe,"data-bs-theme":g,"aria-label":k,"aria-labelledby":b,"aria-describedby":y,children:(0,V.jsx)(h,{...K,onMouseDown:de,className:a,contentClassName:c,children:f})})})})}));Xe.displayName="Modal";const Ge=Object.assign(Xe,{Body:Oe,Header:He,Title:ze,Footer:De,Dialog:je,TRANSITION_DURATION:300,BACKDROP_TRANSITION_DURATION:150})}}]);
//# sourceMappingURL=303.7b438155.chunk.js.map