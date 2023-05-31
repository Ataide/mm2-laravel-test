import{R as p,r as u,e as Xe,f as le,a as E,j as O,W as ze}from"./app-8ecdcb7c.js";import{D as we}from"./DangerButton-d9ebff5a.js";import{T as Je,I as Qe}from"./TextInput-7dd8c26b.js";import{I as Ze}from"./InputLabel-2a7ddef2.js";import{l as J,s as W,a as I,u as k,b as de,D as S,X as x,o as $,y as T,p as et,c as Q,f as Se,T as tt,d as nt,S as Ee,C as rt,e as K,t as te}from"./transition-fb8457d1.js";import{S as ot}from"./SecondaryButton-78e5042a.js";var ye;let H=(ye=p.useId)!=null?ye:function(){let e=J(),[t,n]=p.useState(e?()=>W.nextId():null);return I(()=>{t===null&&n(W.nextId())},[t]),t!=null?""+t:void 0};function xe(e){return W.isServer?null:e instanceof Node?e.ownerDocument:e!=null&&e.hasOwnProperty("current")&&e.current instanceof Node?e.current.ownerDocument:document}let ae=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].map(e=>`${e}:not([tabindex='-1'])`).join(",");var A=(e=>(e[e.First=1]="First",e[e.Previous=2]="Previous",e[e.Next=4]="Next",e[e.Last=8]="Last",e[e.WrapAround=16]="WrapAround",e[e.NoScroll=32]="NoScroll",e))(A||{}),Pe=(e=>(e[e.Error=0]="Error",e[e.Overflow=1]="Overflow",e[e.Success=2]="Success",e[e.Underflow=3]="Underflow",e))(Pe||{}),lt=(e=>(e[e.Previous=-1]="Previous",e[e.Next=1]="Next",e))(lt||{});function at(e=document.body){return e==null?[]:Array.from(e.querySelectorAll(ae)).sort((t,n)=>Math.sign((t.tabIndex||Number.MAX_SAFE_INTEGER)-(n.tabIndex||Number.MAX_SAFE_INTEGER)))}var Te=(e=>(e[e.Strict=0]="Strict",e[e.Loose=1]="Loose",e))(Te||{});function it(e,t=0){var n;return e===((n=xe(e))==null?void 0:n.body)?!1:k(t,{[0](){return e.matches(ae)},[1](){let r=e;for(;r!==null;){if(r.matches(ae))return!0;r=r.parentElement}return!1}})}var ut=(e=>(e[e.Keyboard=0]="Keyboard",e[e.Mouse=1]="Mouse",e))(ut||{});typeof window<"u"&&typeof document<"u"&&(document.addEventListener("keydown",e=>{e.metaKey||e.altKey||e.ctrlKey||(document.documentElement.dataset.headlessuiFocusVisible="")},!0),document.addEventListener("click",e=>{e.detail===1?delete document.documentElement.dataset.headlessuiFocusVisible:e.detail===0&&(document.documentElement.dataset.headlessuiFocusVisible="")},!0));function N(e){e==null||e.focus({preventScroll:!0})}let st=["textarea","input"].join(",");function ct(e){var t,n;return(n=(t=e==null?void 0:e.matches)==null?void 0:t.call(e,st))!=null?n:!1}function dt(e,t=n=>n){return e.slice().sort((n,r)=>{let l=t(n),a=t(r);if(l===null||a===null)return 0;let o=l.compareDocumentPosition(a);return o&Node.DOCUMENT_POSITION_FOLLOWING?-1:o&Node.DOCUMENT_POSITION_PRECEDING?1:0})}function q(e,t,{sorted:n=!0,relativeTo:r=null,skipElements:l=[]}={}){let a=Array.isArray(e)?e.length>0?e[0].ownerDocument:document:e.ownerDocument,o=Array.isArray(e)?n?dt(e):e:at(e);l.length>0&&o.length>1&&(o=o.filter(w=>!l.includes(w))),r=r??a.activeElement;let i=(()=>{if(t&5)return 1;if(t&10)return-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),s=(()=>{if(t&1)return 0;if(t&2)return Math.max(0,o.indexOf(r))-1;if(t&4)return Math.max(0,o.indexOf(r))+1;if(t&8)return o.length-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),d=t&32?{preventScroll:!0}:{},c=0,f=o.length,m;do{if(c>=f||c+f<=0)return 0;let w=s+c;if(t&16)w=(w+f)%f;else{if(w<0)return 3;if(w>=f)return 1}m=o[w],m==null||m.focus(d),c+=i}while(m!==a.activeElement);return t&6&&ct(m)&&m.select(),2}function ne(e,t,n){let r=de(t);u.useEffect(()=>{function l(a){r.current(a)}return document.addEventListener(e,l,n),()=>document.removeEventListener(e,l,n)},[e,n])}function ft(e,t,n=!0){let r=u.useRef(!1);u.useEffect(()=>{requestAnimationFrame(()=>{r.current=n})},[n]);function l(o,i){if(!r.current||o.defaultPrevented)return;let s=function c(f){return typeof f=="function"?c(f()):Array.isArray(f)||f instanceof Set?f:[f]}(e),d=i(o);if(d!==null&&d.getRootNode().contains(d)){for(let c of s){if(c===null)continue;let f=c instanceof HTMLElement?c:c.current;if(f!=null&&f.contains(d)||o.composed&&o.composedPath().includes(f))return}return!it(d,Te.Loose)&&d.tabIndex!==-1&&o.preventDefault(),t(o,d)}}let a=u.useRef(null);ne("mousedown",o=>{var i,s;r.current&&(a.current=((s=(i=o.composedPath)==null?void 0:i.call(o))==null?void 0:s[0])||o.target)},!0),ne("click",o=>{a.current&&(l(o,()=>a.current),a.current=null)},!0),ne("blur",o=>l(o,()=>window.document.activeElement instanceof HTMLIFrameElement?window.document.activeElement:null),!0)}function mt(e){let t=e.parentElement,n=null;for(;t&&!(t instanceof HTMLFieldSetElement);)t instanceof HTMLLegendElement&&(n=t),t=t.parentElement;let r=(t==null?void 0:t.getAttribute("disabled"))==="";return r&&pt(n)?!1:r}function pt(e){if(!e)return!1;let t=e.previousElementSibling;for(;t!==null;){if(t instanceof HTMLLegendElement)return!1;t=t.previousElementSibling}return!0}let vt="div";var X=(e=>(e[e.None=1]="None",e[e.Focusable=2]="Focusable",e[e.Hidden=4]="Hidden",e))(X||{});function ht(e,t){let{features:n=1,...r}=e,l={ref:t,"aria-hidden":(n&2)===2?!0:void 0,style:{position:"fixed",top:1,left:1,width:1,height:0,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0",...(n&4)===4&&(n&2)!==2&&{display:"none"}}};return x({ourProps:l,theirProps:r,slot:{},defaultTag:vt,name:"Hidden"})}let ie=S(ht);var De=(e=>(e.Space=" ",e.Enter="Enter",e.Escape="Escape",e.Backspace="Backspace",e.Delete="Delete",e.ArrowLeft="ArrowLeft",e.ArrowUp="ArrowUp",e.ArrowRight="ArrowRight",e.ArrowDown="ArrowDown",e.Home="Home",e.End="End",e.PageUp="PageUp",e.PageDown="PageDown",e.Tab="Tab",e))(De||{});function fe(e,t){let n=u.useRef([]),r=$(e);u.useEffect(()=>{let l=[...n.current];for(let[a,o]of t.entries())if(n.current[a]!==o){let i=r(t,l);return n.current=t,i}},[r,...t])}function gt(){return/iPhone/gi.test(window.navigator.platform)||/Mac/gi.test(window.navigator.platform)&&window.navigator.maxTouchPoints>0}function wt(e,t,n){let r=de(t);u.useEffect(()=>{function l(a){r.current(a)}return window.addEventListener(e,l,n),()=>window.removeEventListener(e,l,n)},[e,n])}var j=(e=>(e[e.Forwards=0]="Forwards",e[e.Backwards=1]="Backwards",e))(j||{});function Et(){let e=u.useRef(0);return wt("keydown",t=>{t.key==="Tab"&&(e.current=t.shiftKey?1:0)},!0),e}function Z(...e){return u.useMemo(()=>xe(...e),[...e])}function Le(e,t,n,r){let l=de(n);u.useEffect(()=>{e=e??window;function a(o){l.current(o)}return e.addEventListener(t,a,r),()=>e.removeEventListener(t,a,r)},[e,t,r])}function yt(e){function t(){document.readyState!=="loading"&&(e(),document.removeEventListener("DOMContentLoaded",t))}typeof window<"u"&&typeof document<"u"&&(document.addEventListener("DOMContentLoaded",t),t())}function Fe(e){if(!e)return new Set;if(typeof e=="function")return new Set(e());let t=new Set;for(let n of e.current)n.current instanceof HTMLElement&&t.add(n.current);return t}let bt="div";var Ae=(e=>(e[e.None=1]="None",e[e.InitialFocus=2]="InitialFocus",e[e.TabLock=4]="TabLock",e[e.FocusLock=8]="FocusLock",e[e.RestoreFocus=16]="RestoreFocus",e[e.All=30]="All",e))(Ae||{});function $t(e,t){let n=u.useRef(null),r=T(n,t),{initialFocus:l,containers:a,features:o=30,...i}=e;J()||(o=1);let s=Z(n);Pt({ownerDocument:s},!!(o&16));let d=Tt({ownerDocument:s,container:n,initialFocus:l},!!(o&2));Dt({ownerDocument:s,container:n,containers:a,previousActiveElement:d},!!(o&8));let c=Et(),f=$(h=>{let P=n.current;P&&(L=>L())(()=>{k(c.current,{[j.Forwards]:()=>{q(P,A.First,{skipElements:[h.relatedTarget]})},[j.Backwards]:()=>{q(P,A.Last,{skipElements:[h.relatedTarget]})}})})}),m=et(),w=u.useRef(!1),D={ref:r,onKeyDown(h){h.key=="Tab"&&(w.current=!0,m.requestAnimationFrame(()=>{w.current=!1}))},onBlur(h){let P=Fe(a);n.current instanceof HTMLElement&&P.add(n.current);let L=h.relatedTarget;L instanceof HTMLElement&&L.dataset.headlessuiFocusGuard!=="true"&&(Ce(P,L)||(w.current?q(n.current,k(c.current,{[j.Forwards]:()=>A.Next,[j.Backwards]:()=>A.Previous})|A.WrapAround,{relativeTo:h.target}):h.target instanceof HTMLElement&&N(h.target)))}};return p.createElement(p.Fragment,null,!!(o&4)&&p.createElement(ie,{as:"button",type:"button","data-headlessui-focus-guard":!0,onFocus:f,features:X.Focusable}),x({ourProps:D,theirProps:i,defaultTag:bt,name:"FocusTrap"}),!!(o&4)&&p.createElement(ie,{as:"button",type:"button","data-headlessui-focus-guard":!0,onFocus:f,features:X.Focusable}))}let St=S($t),B=Object.assign(St,{features:Ae}),F=[];yt(()=>{function e(t){t.target instanceof HTMLElement&&t.target!==document.body&&F[0]!==t.target&&(F.unshift(t.target),F=F.filter(n=>n!=null&&n.isConnected),F.splice(10))}window.addEventListener("click",e,{capture:!0}),window.addEventListener("mousedown",e,{capture:!0}),window.addEventListener("focus",e,{capture:!0}),document.body.addEventListener("click",e,{capture:!0}),document.body.addEventListener("mousedown",e,{capture:!0}),document.body.addEventListener("focus",e,{capture:!0})});function xt(e=!0){let t=u.useRef(F.slice());return fe(([n],[r])=>{r===!0&&n===!1&&Q(()=>{t.current.splice(0)}),r===!1&&n===!0&&(t.current=F.slice())},[e,F,t]),$(()=>{var n;return(n=t.current.find(r=>r!=null&&r.isConnected))!=null?n:null})}function Pt({ownerDocument:e},t){let n=xt(t);fe(()=>{t||(e==null?void 0:e.activeElement)===(e==null?void 0:e.body)&&N(n())},[t]);let r=u.useRef(!1);u.useEffect(()=>(r.current=!1,()=>{r.current=!0,Q(()=>{r.current&&N(n())})}),[])}function Tt({ownerDocument:e,container:t,initialFocus:n},r){let l=u.useRef(null),a=Se();return fe(()=>{if(!r)return;let o=t.current;o&&Q(()=>{if(!a.current)return;let i=e==null?void 0:e.activeElement;if(n!=null&&n.current){if((n==null?void 0:n.current)===i){l.current=i;return}}else if(o.contains(i)){l.current=i;return}n!=null&&n.current?N(n.current):q(o,A.First)===Pe.Error&&console.warn("There are no focusable elements inside the <FocusTrap />"),l.current=e==null?void 0:e.activeElement})},[r]),l}function Dt({ownerDocument:e,container:t,containers:n,previousActiveElement:r},l){let a=Se();Le(e==null?void 0:e.defaultView,"focus",o=>{if(!l||!a.current)return;let i=Fe(n);t.current instanceof HTMLElement&&i.add(t.current);let s=r.current;if(!s)return;let d=o.target;d&&d instanceof HTMLElement?Ce(i,d)?(r.current=d,N(d)):(o.preventDefault(),o.stopPropagation(),N(s)):N(r.current)},!0)}function Ce(e,t){for(let n of e)if(n.contains(t))return!0;return!1}let Ne=u.createContext(!1);function Lt(){return u.useContext(Ne)}function ue(e){return p.createElement(Ne.Provider,{value:e.force},e.children)}function Ft(e){let t=Lt(),n=u.useContext(Re),r=Z(e),[l,a]=u.useState(()=>{if(!t&&n!==null||W.isServer)return null;let o=r==null?void 0:r.getElementById("headlessui-portal-root");if(o)return o;if(r===null)return null;let i=r.createElement("div");return i.setAttribute("id","headlessui-portal-root"),r.body.appendChild(i)});return u.useEffect(()=>{l!==null&&(r!=null&&r.body.contains(l)||r==null||r.body.appendChild(l))},[l,r]),u.useEffect(()=>{t||n!==null&&a(n.current)},[n,a,t]),l}let At=u.Fragment;function Ct(e,t){let n=e,r=u.useRef(null),l=T(tt(c=>{r.current=c}),t),a=Z(r),o=Ft(r),[i]=u.useState(()=>{var c;return W.isServer?null:(c=a==null?void 0:a.createElement("div"))!=null?c:null}),s=J(),d=u.useRef(!1);return I(()=>{if(d.current=!1,!(!o||!i))return o.contains(i)||(i.setAttribute("data-headlessui-portal",""),o.appendChild(i)),()=>{d.current=!0,Q(()=>{var c;d.current&&(!o||!i||(i instanceof Node&&o.contains(i)&&o.removeChild(i),o.childNodes.length<=0&&((c=o.parentElement)==null||c.removeChild(o))))})}},[o,i]),s?!o||!i?null:Xe.createPortal(x({ourProps:{ref:l},theirProps:n,defaultTag:At,name:"Portal"}),i):null}let Nt=u.Fragment,Re=u.createContext(null);function Rt(e,t){let{target:n,...r}=e,l={ref:T(t)};return p.createElement(Re.Provider,{value:n},x({ourProps:l,theirProps:r,defaultTag:Nt,name:"Popover.Group"}))}let Mt=S(Ct),Ot=S(Rt),se=Object.assign(Mt,{Group:Ot}),Me=u.createContext(null);function Oe(){let e=u.useContext(Me);if(e===null){let t=new Error("You used a <Description /> component, but it is not inside a relevant parent.");throw Error.captureStackTrace&&Error.captureStackTrace(t,Oe),t}return e}function kt(){let[e,t]=u.useState([]);return[e.length>0?e.join(" "):void 0,u.useMemo(()=>function(n){let r=$(a=>(t(o=>[...o,a]),()=>t(o=>{let i=o.slice(),s=i.indexOf(a);return s!==-1&&i.splice(s,1),i}))),l=u.useMemo(()=>({register:r,slot:n.slot,name:n.name,props:n.props}),[r,n.slot,n.name,n.props]);return p.createElement(Me.Provider,{value:l},n.children)},[t])]}let It="p";function Ht(e,t){let n=H(),{id:r=`headlessui-description-${n}`,...l}=e,a=Oe(),o=T(t);I(()=>a.register(r),[r,a.register]);let i={ref:o,...a.props,id:r};return x({ourProps:i,theirProps:l,slot:a.slot||{},defaultTag:It,name:a.name||"Description"})}let Bt=S(Ht),Ut=Object.assign(Bt,{}),me=u.createContext(()=>{});me.displayName="StackContext";var ce=(e=>(e[e.Add=0]="Add",e[e.Remove=1]="Remove",e))(ce||{});function jt(){return u.useContext(me)}function Wt({children:e,onUpdate:t,type:n,element:r,enabled:l}){let a=jt(),o=$((...i)=>{t==null||t(...i),a(...i)});return I(()=>{let i=l===void 0||l===!0;return i&&o(0,n,r),()=>{i&&o(1,n,r)}},[o,n,r,l]),p.createElement(me.Provider,{value:o},e)}function _t(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}const Vt=typeof Object.is=="function"?Object.is:_t,{useState:Yt,useEffect:Gt,useLayoutEffect:Kt,useDebugValue:qt}=le;function Xt(e,t,n){const r=t(),[{inst:l},a]=Yt({inst:{value:r,getSnapshot:t}});return Kt(()=>{l.value=r,l.getSnapshot=t,re(l)&&a({inst:l})},[e,r,t]),Gt(()=>(re(l)&&a({inst:l}),e(()=>{re(l)&&a({inst:l})})),[e]),qt(r),r}function re(e){const t=e.getSnapshot,n=e.value;try{const r=t();return!Vt(n,r)}catch{return!0}}function zt(e,t,n){return t()}const Jt=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Qt=!Jt,Zt=Qt?zt:Xt,en="useSyncExternalStore"in le?(e=>e.useSyncExternalStore)(le):Zt;function tn(e){return en(e.subscribe,e.getSnapshot,e.getSnapshot)}function nn(e,t){let n=e(),r=new Set;return{getSnapshot(){return n},subscribe(l){return r.add(l),()=>r.delete(l)},dispatch(l,...a){let o=t[l].call(n,...a);o&&(n=o,r.forEach(i=>i()))}}}function rn(){let e;return{before({doc:t}){var n;let r=t.documentElement;e=((n=t.defaultView)!=null?n:window).innerWidth-r.clientWidth},after({doc:t,d:n}){let r=t.documentElement,l=r.clientWidth-r.offsetWidth,a=e-l;n.style(r,"paddingRight",`${a}px`)}}}function on(){if(!gt())return{};let e;return{before(){e=window.pageYOffset},after({doc:t,d:n,meta:r}){function l(o){return r.containers.flatMap(i=>i()).some(i=>i.contains(o))}n.style(t.body,"marginTop",`-${e}px`),window.scrollTo(0,0);let a=null;n.addEventListener(t,"click",o=>{if(o.target instanceof HTMLElement)try{let i=o.target.closest("a");if(!i)return;let{hash:s}=new URL(i.href),d=t.querySelector(s);d&&!l(d)&&(a=d)}catch{}},!0),n.addEventListener(t,"touchmove",o=>{o.target instanceof HTMLElement&&!l(o.target)&&o.preventDefault()},{passive:!1}),n.add(()=>{window.scrollTo(0,window.pageYOffset+e),a&&a.isConnected&&(a.scrollIntoView({block:"nearest"}),a=null)})}}}function ln(){return{before({doc:e,d:t}){t.style(e.documentElement,"overflow","hidden")}}}function an(e){let t={};for(let n of e)Object.assign(t,n(t));return t}let C=nn(()=>new Map,{PUSH(e,t){var n;let r=(n=this.get(e))!=null?n:{doc:e,count:0,d:nt(),meta:new Set};return r.count++,r.meta.add(t),this.set(e,r),this},POP(e,t){let n=this.get(e);return n&&(n.count--,n.meta.delete(t)),this},SCROLL_PREVENT({doc:e,d:t,meta:n}){let r={doc:e,d:t,meta:an(n)},l=[on(),rn(),ln()];l.forEach(({before:a})=>a==null?void 0:a(r)),l.forEach(({after:a})=>a==null?void 0:a(r))},SCROLL_ALLOW({d:e}){e.dispose()},TEARDOWN({doc:e}){this.delete(e)}});C.subscribe(()=>{let e=C.getSnapshot(),t=new Map;for(let[n]of e)t.set(n,n.documentElement.style.overflow);for(let n of e.values()){let r=t.get(n.doc)==="hidden",l=n.count!==0;(l&&!r||!l&&r)&&C.dispatch(n.count>0?"SCROLL_PREVENT":"SCROLL_ALLOW",n),n.count===0&&C.dispatch("TEARDOWN",n)}});function un(e,t,n){let r=tn(C),l=e?r.get(e):void 0,a=l?l.count>0:!1;return I(()=>{if(!(!e||!t))return C.dispatch("PUSH",e,n),()=>C.dispatch("POP",e,n)},[t,e]),a}let oe=new Map,U=new Map;function be(e,t=!0){I(()=>{var n;if(!t)return;let r=typeof e=="function"?e():e.current;if(!r)return;function l(){var o;if(!r)return;let i=(o=U.get(r))!=null?o:1;if(i===1?U.delete(r):U.set(r,i-1),i!==1)return;let s=oe.get(r);s&&(s["aria-hidden"]===null?r.removeAttribute("aria-hidden"):r.setAttribute("aria-hidden",s["aria-hidden"]),r.inert=s.inert,oe.delete(r))}let a=(n=U.get(r))!=null?n:0;return U.set(r,a+1),a!==0||(oe.set(r,{"aria-hidden":r.getAttribute("aria-hidden"),inert:r.inert}),r.setAttribute("aria-hidden","true"),r.inert=!0),l},[e,t])}var sn=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(sn||{}),cn=(e=>(e[e.SetTitleId=0]="SetTitleId",e))(cn||{});let dn={[0](e,t){return e.titleId===t.id?e:{...e,titleId:t.id}}},z=u.createContext(null);z.displayName="DialogContext";function _(e){let t=u.useContext(z);if(t===null){let n=new Error(`<${e} /> is missing a parent <Dialog /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(n,_),n}return t}function fn(e,t,n=()=>[document.body]){un(e,t,r=>{var l;return{containers:[...(l=r.containers)!=null?l:[],n]}})}function mn(e,t){return k(t.type,dn,e,t)}let pn="div",vn=Ee.RenderStrategy|Ee.Static;function hn(e,t){let n=H(),{id:r=`headlessui-dialog-${n}`,open:l,onClose:a,initialFocus:o,__demoMode:i=!1,...s}=e,[d,c]=u.useState(0),f=rt();l===void 0&&f!==null&&(l=(f&K.Open)===K.Open);let m=u.useRef(null),w=T(m,t),D=u.useRef(null),h=Z(m),P=e.hasOwnProperty("open")||f!==null,L=e.hasOwnProperty("onClose");if(!P&&!L)throw new Error("You have to provide an `open` and an `onClose` prop to the `Dialog` component.");if(!P)throw new Error("You provided an `onClose` prop to the `Dialog`, but forgot an `open` prop.");if(!L)throw new Error("You provided an `open` prop to the `Dialog`, but forgot an `onClose` prop.");if(typeof l!="boolean")throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${l}`);if(typeof a!="function")throw new Error(`You provided an \`onClose\` prop to the \`Dialog\`, but the value is not a function. Received: ${a}`);let y=l?0:1,[R,ke]=u.useReducer(mn,{titleId:null,descriptionId:null,panelRef:u.createRef()}),M=$(()=>a(!1)),pe=$(v=>ke({type:0,id:v})),V=J()?i?!1:y===0:!1,Y=d>1,ve=u.useContext(z)!==null,Ie=Y?"parent":"leaf",he=f!==null?(f&K.Closing)===K.Closing:!1,He=(()=>ve||he?!1:V)(),Be=u.useCallback(()=>{var v,b;return(b=Array.from((v=h==null?void 0:h.querySelectorAll("body > *"))!=null?v:[]).find(g=>g.id==="headlessui-portal-root"?!1:g.contains(D.current)&&g instanceof HTMLElement))!=null?b:null},[D]);be(Be,He);let Ue=(()=>Y?!0:V)(),je=u.useCallback(()=>{var v,b;return(b=Array.from((v=h==null?void 0:h.querySelectorAll("[data-headlessui-portal]"))!=null?v:[]).find(g=>g.contains(D.current)&&g instanceof HTMLElement))!=null?b:null},[D]);be(je,Ue);let ee=$(()=>{var v,b;return[...Array.from((v=h==null?void 0:h.querySelectorAll("html > *, body > *, [data-headlessui-portal]"))!=null?v:[]).filter(g=>!(g===document.body||g===document.head||!(g instanceof HTMLElement)||g.contains(D.current)||R.panelRef.current&&g.contains(R.panelRef.current))),(b=R.panelRef.current)!=null?b:m.current]}),We=(()=>!(!V||Y))();ft(()=>ee(),M,We);let _e=(()=>!(Y||y!==0))();Le(h==null?void 0:h.defaultView,"keydown",v=>{_e&&(v.defaultPrevented||v.key===De.Escape&&(v.preventDefault(),v.stopPropagation(),M()))});let Ve=(()=>!(he||y!==0||ve))();fn(h,Ve,ee),u.useEffect(()=>{if(y!==0||!m.current)return;let v=new ResizeObserver(b=>{for(let g of b){let G=g.target.getBoundingClientRect();G.x===0&&G.y===0&&G.width===0&&G.height===0&&M()}});return v.observe(m.current),()=>v.disconnect()},[y,m,M]);let[Ye,Ge]=kt(),Ke=u.useMemo(()=>[{dialogState:y,close:M,setTitleId:pe},R],[y,R,M,pe]),ge=u.useMemo(()=>({open:y===0}),[y]),qe={ref:w,id:r,role:"dialog","aria-modal":y===0?!0:void 0,"aria-labelledby":R.titleId,"aria-describedby":Ye};return p.createElement(Wt,{type:"Dialog",enabled:y===0,element:m,onUpdate:$((v,b)=>{b==="Dialog"&&k(v,{[ce.Add]:()=>c(g=>g+1),[ce.Remove]:()=>c(g=>g-1)})})},p.createElement(ue,{force:!0},p.createElement(se,null,p.createElement(z.Provider,{value:Ke},p.createElement(se.Group,{target:m},p.createElement(ue,{force:!1},p.createElement(Ge,{slot:ge,name:"Dialog.Description"},p.createElement(B,{initialFocus:o,containers:ee,features:V?k(Ie,{parent:B.features.RestoreFocus,leaf:B.features.All&~B.features.FocusLock}):B.features.None},x({ourProps:qe,theirProps:s,slot:ge,defaultTag:pn,features:vn,visible:y===0,name:"Dialog"})))))))),p.createElement(ie,{features:X.Hidden,ref:D}))}let gn="div";function wn(e,t){let n=H(),{id:r=`headlessui-dialog-overlay-${n}`,...l}=e,[{dialogState:a,close:o}]=_("Dialog.Overlay"),i=T(t),s=$(c=>{if(c.target===c.currentTarget){if(mt(c.currentTarget))return c.preventDefault();c.preventDefault(),c.stopPropagation(),o()}}),d=u.useMemo(()=>({open:a===0}),[a]);return x({ourProps:{ref:i,id:r,"aria-hidden":!0,onClick:s},theirProps:l,slot:d,defaultTag:gn,name:"Dialog.Overlay"})}let En="div";function yn(e,t){let n=H(),{id:r=`headlessui-dialog-backdrop-${n}`,...l}=e,[{dialogState:a},o]=_("Dialog.Backdrop"),i=T(t);u.useEffect(()=>{if(o.panelRef.current===null)throw new Error("A <Dialog.Backdrop /> component is being used, but a <Dialog.Panel /> component is missing.")},[o.panelRef]);let s=u.useMemo(()=>({open:a===0}),[a]);return p.createElement(ue,{force:!0},p.createElement(se,null,x({ourProps:{ref:i,id:r,"aria-hidden":!0},theirProps:l,slot:s,defaultTag:En,name:"Dialog.Backdrop"})))}let bn="div";function $n(e,t){let n=H(),{id:r=`headlessui-dialog-panel-${n}`,...l}=e,[{dialogState:a},o]=_("Dialog.Panel"),i=T(t,o.panelRef),s=u.useMemo(()=>({open:a===0}),[a]),d=$(c=>{c.stopPropagation()});return x({ourProps:{ref:i,id:r,onClick:d},theirProps:l,slot:s,defaultTag:bn,name:"Dialog.Panel"})}let Sn="h2";function xn(e,t){let n=H(),{id:r=`headlessui-dialog-title-${n}`,...l}=e,[{dialogState:a,setTitleId:o}]=_("Dialog.Title"),i=T(t);u.useEffect(()=>(o(r),()=>o(null)),[r,o]);let s=u.useMemo(()=>({open:a===0}),[a]);return x({ourProps:{ref:i,id:r},theirProps:l,slot:s,defaultTag:Sn,name:"Dialog.Title"})}let Pn=S(hn),Tn=S(yn),Dn=S($n),Ln=S(wn),Fn=S(xn),$e=Object.assign(Pn,{Backdrop:Tn,Panel:Dn,Overlay:Ln,Title:Fn,Description:Ut});function An({children:e,show:t=!1,maxWidth:n="2xl",closeable:r=!0,onClose:l=()=>{}}){const a=()=>{r&&l()},o={sm:"sm:max-w-sm",md:"sm:max-w-md",lg:"sm:max-w-lg",xl:"sm:max-w-xl","2xl":"sm:max-w-2xl"}[n];return E(te,{show:t,as:u.Fragment,leave:"duration-200",children:O($e,{as:"div",id:"modal",className:"fixed inset-0 flex overflow-y-auto px-4 py-6 sm:px-0 items-center z-50 transform transition-all",onClose:a,children:[E(te.Child,{as:u.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:E("div",{className:"absolute inset-0 bg-gray-500/75"})}),E(te.Child,{as:u.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",enterTo:"opacity-100 translate-y-0 sm:scale-100",leave:"ease-in duration-200",leaveFrom:"opacity-100 translate-y-0 sm:scale-100",leaveTo:"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",children:E($e.Panel,{className:`mb-6 bg-white rounded-lg overflow-hidden shadow-xl transform transition-all sm:w-full sm:mx-auto ${o}`,children:e})})]})})}function In({className:e=""}){const[t,n]=u.useState(!1),r=u.useRef(),{data:l,setData:a,delete:o,processing:i,reset:s,errors:d}=ze({password:""}),c=()=>{n(!0)},f=w=>{w.preventDefault(),o(route("profile.destroy"),{preserveScroll:!0,onSuccess:()=>m(),onError:()=>r.current.focus(),onFinish:()=>s()})},m=()=>{n(!1),s()};return O("section",{className:`space-y-6 ${e}`,children:[O("header",{children:[E("h2",{className:"text-lg font-medium text-gray-900",children:"Delete Account"}),E("p",{className:"mt-1 text-sm text-gray-600",children:"Once your account is deleted, all of its resources and data will be permanently deleted. Before deleting your account, please download any data or information that you wish to retain."})]}),E(we,{onClick:c,children:"Delete Account"}),E(An,{show:t,onClose:m,children:O("form",{onSubmit:f,className:"p-6",children:[E("h2",{className:"text-lg font-medium text-gray-900",children:"Are you sure you want to delete your account?"}),E("p",{className:"mt-1 text-sm text-gray-600",children:"Once your account is deleted, all of its resources and data will be permanently deleted. Please enter your password to confirm you would like to permanently delete your account."}),O("div",{className:"mt-6",children:[E(Ze,{htmlFor:"password",value:"Password",className:"sr-only"}),E(Je,{id:"password",type:"password",name:"password",ref:r,value:l.password,onChange:w=>a("password",w.target.value),className:"mt-1 block w-3/4",isFocused:!0,placeholder:"Password"}),E(Qe,{message:d.password,className:"mt-2"})]}),O("div",{className:"mt-6 flex justify-end",children:[E(ot,{onClick:m,children:"Cancel"}),E(we,{className:"ml-3",disabled:i,children:"Delete Account"})]})]})})]})}export{In as default};