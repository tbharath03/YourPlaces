"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[981],{981:(e,t,n)=>{n.r(t),n.d(t,{default:()=>v});var r=n(43),a=n(169),o=n(244),i=n(347),s=n(962),l=n(789),c=n(171),u=n(886),d=n(626),p=n(863),f=n(356),h=(n(284),n(579));const v=()=>{const e=(0,r.useContext)(u.c),{isLoading:t,error:n,sendRequest:v,clearError:m}=(0,c.x)(),[y,g]=(0,l.m)({title:{value:"",isValid:!1},description:{value:"",isValid:!1},address:{value:"",isValid:!1},coordinate_lat:{value:"",isValid:!1},coordinate_lng:{value:"",isValid:!1},image:{value:null,isValid:!1}},!1),x=(0,a.W6)();return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(d.A,{error:n,onClear:m}),(0,h.jsxs)("form",{className:"place-form",onSubmit:async t=>{t.preventDefault();try{const t=new FormData;t.append("title",y.inputs.title.value),t.append("description",y.inputs.description.value),t.append("address",y.inputs.address.value),t.append("coordinate_lat",y.inputs.coordinate_lat.value),t.append("coordinate_lng",y.inputs.coordinate_lng.value),t.append("image",y.inputs.image.value),await v("https://your-places-app-4a3e0339aa22.herokuapp.com/api/places","POST",t,{Authorization:"Bearer "+e.token}),x.push("/")}catch(n){}},children:[t&&(0,h.jsx)(p.A,{asOverlay:!0}),(0,h.jsx)(o.A,{id:"title",element:"input",type:"text",label:"Title",validators:[(0,s.B_)()],errorText:"Please enter a valid Title!",onInput:g}),(0,h.jsx)(o.A,{id:"description",element:"textarea",label:"Description",validators:[(0,s.Ik)(5)],errorText:"Please enter a valid Description (atleat 5 characters)!",onInput:g}),(0,h.jsx)(o.A,{id:"address",element:"input",label:"Address",validators:[(0,s.B_)()],errorText:"Please enter a valid address!",onInput:g}),(0,h.jsx)(o.A,{id:"coordinate_lat",element:"input",label:"latitue",validators:[(0,s.B_)()],errorText:"Please enter a valid latitude!",onInput:g}),(0,h.jsx)(o.A,{id:"coordinate_lng",element:"input",label:"longitude",validators:[(0,s.B_)()],errorText:"Please enter a valid longitude!",onInput:g}),(0,h.jsx)(f.A,{id:"image",onInput:g,errorText:"Please provide an image."}),(0,h.jsx)(i.A,{type:"submit",disabled:!y.isValid,children:"ADD PLACE"})]})]})}},347:(e,t,n)=>{n.d(t,{A:()=>o});n(43);var r=n(582),a=n(579);const o=e=>e.href?(0,a.jsx)("a",{className:"button button--".concat(e.size||"default"," ").concat(e.inverse&&"button--inverse"," ").concat(e.danger&&"button--danger"),href:e.href,children:e.children}):e.to?(0,a.jsx)(r.N_,{to:e.to,exact:e.exact,className:"button button--".concat(e.size||"default"," ").concat(e.inverse&&"button--inverse"," ").concat(e.danger&&"button--danger"),children:e.children}):(0,a.jsx)("button",{className:"button button--".concat(e.size||"default"," ").concat(e.inverse&&"button--inverse"," ").concat(e.danger&&"button--danger"),type:e.type,onClick:e.onClick,disabled:e.disabled,children:e.children})},356:(e,t,n)=>{n.d(t,{A:()=>i});var r=n(43),a=n(347),o=n(579);const i=e=>{const[t,n]=(0,r.useState)(),[i,s]=(0,r.useState)(),[l,c]=(0,r.useState)(!1),u=(0,r.useRef)();(0,r.useEffect)((()=>{if(!t)return;const e=new FileReader;e.onload=()=>{s(e.result)},e.readAsDataURL(t)}),[t]);return(0,o.jsxs)("div",{className:"form-control",children:[(0,o.jsx)("input",{id:e.id,ref:u,style:{display:"none"},type:"file",accept:".jpg,.png,.jpeg",onChange:t=>{let r,a=l;t.target.files&&1===t.target.files.length?(r=t.target.files[0],n(r),c(!0),a=!0):(c(!1),a=!1),e.onInput(e.id,r,a)}}),(0,o.jsxs)("div",{className:"image-upload ".concat(e.center&&"center"),children:[(0,o.jsxs)("div",{className:"image-upload__preview",children:[i&&(0,o.jsx)("img",{src:i,alt:"Preview"}),!i&&(0,o.jsx)("p",{children:"Please pick an image."})]}),(0,o.jsx)(a.A,{type:"button",onClick:()=>{u.current.click()},children:"PICK IMAGE"})]}),!l&&(0,o.jsx)("p",{children:e.errorText})]})}},244:(e,t,n)=>{n.d(t,{A:()=>s});var r=n(43),a=n(962),o=n(579);const i=(e,t)=>{switch(t.type){case"CHANGE":return{...e,value:t.val,isValid:(0,a.tf)(t.val,t.validators)};case"TOUCH":return{...e,isTouched:!0};default:return e}},s=e=>{const[t,n]=(0,r.useReducer)(i,{value:e.initialValue||"",isTouched:!1,isValid:e.initialValid||!1}),{id:a,onInput:s}=e,{value:l,isValid:c}=t;(0,r.useEffect)((()=>{s(a,l,c)}),[a,l,c,s]);const u=t=>{n({type:"CHANGE",val:t.target.value,validators:e.validators})},d=()=>{n({type:"TOUCH"})},p="input"===e.element?(0,o.jsx)("input",{id:e.id,type:e.type,placeholder:e.placeholder,onChange:u,value:t.value,onBlur:d}):(0,o.jsx)("textarea",{id:e.id,rows:e.row||3,onChange:u,value:t.value,onBlur:d});return(0,o.jsxs)("div",{className:"form-control ".concat(!t.isValid&&t.isTouched&&"form-control--invalid"),children:[(0,o.jsx)("label",{htmlFor:e.id,children:e.label}),p,!t.isValid&&t.isTouched&&(0,o.jsx)("p",{children:e.errorText})]})}},626:(e,t,n)=>{n.d(t,{A:()=>i});n(43);var r=n(630),a=n(347),o=n(579);const i=e=>(0,o.jsx)(r.A,{onCancel:e.onClear,header:"An Error Occurred!",show:!!e.error,footer:(0,o.jsx)(a.A,{onClick:e.onClear,children:"Okay"}),children:(0,o.jsx)("p",{children:e.error})})},630:(e,t,n)=>{n.d(t,{A:()=>l});n(43);var r=n(950),a=n(336),o=n(6),i=n(579);const s=e=>{const t=(0,i.jsxs)("div",{className:"modal ".concat(e.className),style:e.style,children:[(0,i.jsx)("header",{className:"modal__header ".concat(e.headerClass),children:(0,i.jsx)("h2",{children:e.header})}),(0,i.jsxs)("form",{onSubmit:e.onSubmit?e.onSubmit:e=>e.preventDefault(),children:[(0,i.jsx)("div",{className:"modal__content ".concat(e.contentClass),children:e.children}),(0,i.jsx)("footer",{className:"modal__footer ".concat(e.footerClass),children:e.footer})]})]});return r.createPortal(t,document.getElementById("modal-hook"))},l=e=>(0,i.jsxs)(i.Fragment,{children:[e.show&&(0,i.jsx)(o.A,{onClick:e.onCancel}),(0,i.jsx)(a.A,{in:e.show,mountOnEnter:!0,unmountOnExit:!0,timeout:200,classNames:"modal",children:(0,i.jsx)(s,{...e})})]})},789:(e,t,n)=>{n.d(t,{m:()=>o});var r=n(43);const a=(e,t)=>{switch(t.type){case"INPUT_CHANGE":let n=!0;for(const r in e.inputs)e.inputs[r]&&(n=r===t.isValid?n&&t.isValid:n&&e.inputs[r].isValid);return{...e,inputs:{...e.inputs,[t.inputId]:{value:t.value,isValid:t.isValid}},isValid:n};case"SET_DATA":return{inputs:t.inputs,isValid:t.formIsValid};default:return e}},o=(e,t)=>{const[n,o]=(0,r.useReducer)(a,{inputs:e,isValid:t});return[n,(0,r.useCallback)(((e,t,n)=>{o({type:"INPUT_CHANGE",value:t,isValid:n,inputId:e})}),[]),(0,r.useCallback)(((e,t)=>{o({type:"SET_DATA",inputs:e,formIsValid:t})}),[])]}},171:(e,t,n)=>{n.d(t,{x:()=>a});var r=n(43);const a=()=>{const[e,t]=(0,r.useState)(!1),[n,a]=(0,r.useState)(),o=(0,r.useRef)([]),i=(0,r.useCallback)((async function(e){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GET",r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};t(!0);const s=new AbortController;o.current.push(s);try{const a=await fetch(e,{method:n,body:r,headers:i,signal:s.signal}),l=await a.json();if(o.current=o.current.filter((e=>e!==s)),!a.ok)throw new Error(l.message);return t(!1),l}catch(l){throw a(l.message),t(!1),l}}),[]);return(0,r.useEffect)((()=>()=>{o.current.forEach((e=>e.abort()))}),[]),{isLoading:e,error:n,sendRequest:i,clearError:()=>{a(null)}}}},962:(e,t,n)=>{n.d(t,{B_:()=>s,Ik:()=>l,i$:()=>c,tf:()=>u});const r="REQUIRE",a="MINLENGTH",o="MAXLENGTH",i="EMAIL",s=()=>({type:r}),l=e=>({type:a,val:e}),c=()=>({type:i}),u=(e,t)=>{let n=!0;for(const s of t)s.type===r&&(n=n&&e.trim().length>0),s.type===a&&(n=n&&e.trim().length>=s.val),s.type===o&&(n=n&&e.trim().length<=s.val),"MIN"===s.type&&(n=n&&+e>=s.val),"MAX"===s.type&&(n=n&&+e<=s.val),s.type===i&&(n=n&&/^\S+@\S+\.\S+$/.test(e));return n}},169:(e,t,n)=>{function r(e){return e&&"object"===typeof e&&"default"in e?e.default:e}var a=n(688),o=r(n(43)),i=n(321),s=r(n(173)),l=r(n(620)),c=r(n(213));function u(){return u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},u.apply(this,arguments)}function d(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,p(e,t)}function p(e,t){return p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},p(e,t)}function f(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}var h=function(e){function t(){for(var t,n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return(t=e.call.apply(e,[this].concat(r))||this).history=i.createBrowserHistory(t.props),t}return d(t,e),t.prototype.render=function(){return o.createElement(a.Router,{history:this.history,children:this.props.children})},t}(o.Component);h.propTypes={basename:s.string,children:s.node,forceRefresh:s.bool,getUserConfirmation:s.func,keyLength:s.number},h.prototype.componentDidMount=function(){l(!this.props.history,"<BrowserRouter> ignores the history prop. To use a custom history, use `import { Router }` instead of `import { BrowserRouter as Router }`.")};var v=function(e){function t(){for(var t,n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return(t=e.call.apply(e,[this].concat(r))||this).history=i.createHashHistory(t.props),t}return d(t,e),t.prototype.render=function(){return o.createElement(a.Router,{history:this.history,children:this.props.children})},t}(o.Component);v.propTypes={basename:s.string,children:s.node,getUserConfirmation:s.func,hashType:s.oneOf(["hashbang","noslash","slash"])},v.prototype.componentDidMount=function(){l(!this.props.history,"<HashRouter> ignores the history prop. To use a custom history, use `import { Router }` instead of `import { HashRouter as Router }`.")};var m=function(e,t){return"function"===typeof e?e(t):e},y=function(e,t){return"string"===typeof e?i.createLocation(e,null,null,t):e},g=function(e){return e},x=o.forwardRef;"undefined"===typeof x&&(x=g);var b=x((function(e,t){var n=e.innerRef,r=e.navigate,a=e.onClick,i=f(e,["innerRef","navigate","onClick"]),s=i.target,l=u({},i,{onClick:function(e){try{a&&a(e)}catch(t){throw e.preventDefault(),t}e.defaultPrevented||0!==e.button||s&&"_self"!==s||function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}(e)||(e.preventDefault(),r())}});return l.ref=g!==x&&t||n,o.createElement("a",l)}));b.displayName="LinkAnchor";var j=x((function(e,t){var n=e.component,r=void 0===n?b:n,s=e.replace,l=e.to,d=e.innerRef,p=f(e,["component","replace","to","innerRef"]);return o.createElement(a.__RouterContext.Consumer,null,(function(e){e||c(!1,"You should not use <Link> outside a <Router>");var n=e.history,a=y(m(l,e.location),e.location),f=a?n.createHref(a):"",h=u({},p,{href:f,navigate:function(){var t=m(l,e.location),r=i.createPath(e.location)===i.createPath(y(t));(s||r?n.replace:n.push)(t)}});return g!==x?h.ref=t||d:h.innerRef=d,o.createElement(r,h)}))})),C=s.oneOfType([s.string,s.object,s.func]),A=s.oneOfType([s.string,s.func,s.shape({current:s.any})]);j.displayName="Link",j.propTypes={innerRef:A,onClick:s.func,replace:s.bool,target:s.string,to:C.isRequired};var T=function(e){return e},N=o.forwardRef;"undefined"===typeof N&&(N=T);var R=N((function(e,t){var n=e["aria-current"],r=void 0===n?"page":n,i=e.activeClassName,s=void 0===i?"active":i,l=e.activeStyle,d=e.className,p=e.exact,h=e.isActive,v=e.location,g=e.sensitive,x=e.strict,b=e.style,C=e.to,A=e.innerRef,R=f(e,["aria-current","activeClassName","activeStyle","className","exact","isActive","location","sensitive","strict","style","to","innerRef"]);return o.createElement(a.__RouterContext.Consumer,null,(function(e){e||c(!1,"You should not use <NavLink> outside a <Router>");var n=v||e.location,i=y(m(C,n),n),f=i.pathname,_=f&&f.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1"),k=_?a.matchPath(n.pathname,{path:_,exact:p,sensitive:g,strict:x}):null,E=!!(h?h(k,n):k),w="function"===typeof d?d(E):d,V="function"===typeof b?b(E):b;E&&(w=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.filter((function(e){return e})).join(" ")}(w,s),V=u({},V,l));var I=u({"aria-current":E&&r||null,className:w,style:V,to:i},R);return T!==N?I.ref=t||A:I.innerRef=A,o.createElement(j,I)}))}));R.displayName="NavLink";var _=s.oneOf(["page","step","location","date","time","true","false"]);R.propTypes=u({},j.propTypes,{"aria-current":_,activeClassName:s.string,activeStyle:s.object,className:s.oneOfType([s.string,s.func]),exact:s.bool,isActive:s.func,location:s.object,sensitive:s.bool,strict:s.bool,style:s.oneOfType([s.object,s.func])}),Object.defineProperty(t,"W6",{enumerable:!0,get:function(){return a.useHistory}})},284:()=>{}}]);
//# sourceMappingURL=981.374a9f88.chunk.js.map