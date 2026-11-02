(function(){var e=Array.isArray,t=Array.prototype.indexOf,n=Array.prototype.includes,r=Array.from,i=Object.defineProperty,a=Object.getOwnPropertyDescriptor,o=Object.getOwnPropertyDescriptors,s=Object.prototype,c=Array.prototype,l=Object.getPrototypeOf,u=Object.isExtensible,d=()=>{};function f(e){return e()}function p(e){for(var t=0;t<e.length;t++)e[t]()}function m(){var e,t;return{promise:new Promise((n,r)=>{e=n,t=r}),resolve:e,reject:t}}var h=1<<24,g=1024,_=2048,v=4096,ee=8192,te=16384,ne=32768,re=1<<25,ie=65536,ae=1<<19,oe=1<<20,se=1<<25,ce=1<<21,le=1<<22,ue=1<<23,de=Symbol(`$state`),fe=Symbol(`component`),pe=Symbol(`legacy props`),me=Symbol(``),he=Symbol(`attributes`),ge=Symbol(`class`),_e=Symbol(`style`),ve=Symbol(`text`),ye=new class extends Error{name=`StaleReactionError`;message="The reaction that called `getAbortSignal()` was re-run or destroyed"},be=!!globalThis.document?.contentType&&globalThis.document.contentType.includes(`xml`),xe={},y=Symbol(`uninitialized`),Se=`http://www.w3.org/1999/xhtml`;function Ce(){console.warn(`https://svelte.dev/e/derived_inert`)}function we(e){console.warn(`https://svelte.dev/e/hydration_mismatch`)}function Te(){console.warn(`https://svelte.dev/e/svelte_boundary_reset_noop`)}var b=!1;function Ee(e){b=e}var x;function De(e){if(e===null)throw we(),xe;return x=e}function Oe(){return De(on(x))}function ke(e){if(b){if(on(x)!==null)throw we(),xe;x=e}}function Ae(e=1){if(b){for(var t=e,n=x;t--;)n=on(n);x=n}}function je(e=!0){for(var t=0,n=x;;){if(n.nodeType===8){var r=n.data;if(r===`]`){if(t===0)return n;--t}else(r===`[`||r===`[!`||r[0]===`[`&&!isNaN(Number(r.slice(1))))&&(t+=1)}var i=on(n);e&&n.remove(),n=i}}function Me(e){if(!e||e.nodeType!==8)throw we(),xe;return e.data}function Ne(e){return e===this.v}function Pe(e,t){return e==e?e!==t||typeof e==`object`&&!!e||typeof e==`function`:t==t}function Fe(e){return!Pe(e,this.v)}function Ie(){throw Error(`https://svelte.dev/e/async_derived_orphan`)}function Le(e,t,n){throw Error(`https://svelte.dev/e/each_key_duplicate`)}function Re(e){throw Error(`https://svelte.dev/e/effect_in_teardown`)}function ze(){throw Error(`https://svelte.dev/e/effect_in_unowned_derived`)}function Be(e){throw Error(`https://svelte.dev/e/effect_orphan`)}function Ve(){throw Error(`https://svelte.dev/e/effect_update_depth_exceeded`)}function He(e){throw Error(`https://svelte.dev/e/props_invalid_value`)}function Ue(){throw Error(`https://svelte.dev/e/state_descriptors_fixed`)}function We(){throw Error(`https://svelte.dev/e/state_prototype_fixed`)}function Ge(){throw Error(`https://svelte.dev/e/state_unsafe_mutation`)}function Ke(){throw Error(`https://svelte.dev/e/svelte_boundary_reset_onerror`)}var qe=!1;function Je(){qe=!0}var S=null;function Ye(e){S=e}function Xe(e,t=!1,n){S={p:S,i:!1,c:null,e:null,s:e,x:null,r:D,l:qe&&!t?{s:null,u:null,$:[]}:null}}function Ze(e){var t=S,n=t.e;if(n!==null){t.e=null;for(var r of n)Sn(r)}return e!==void 0&&(t.x=e),t.i=!0,S=t.p,Qe(e)}function Qe(e={}){return i(e,fe,{value:!0}),e}function $e(){return!qe||S!==null&&S.l===null}var et=[];function tt(){var e=et;et=[],p(e)}function nt(e){if(et.length===0&&!Tt){var t=et;queueMicrotask(()=>{t===et&&tt()})}et.push(e)}var rt=~(_|v|g);function C(e,t){e.f=e.f&rt|t}function it(e){e.f&512||e.deps===null?C(e,g):C(e,v)}function at(e,t){e.f&2048?t.set(e,_):e.f&4096&&t.get(e)!==2048&&t.set(e,v),C(e,g)}function ot(e){var t=E,n=D;qn(null),Jn(null);try{return e()}finally{qn(t),Jn(n)}}function st(e,t,n,r){let i=$e()?dt:ht;var a=e.filter(e=>!e.settled),o=t.map(i);if(n.length===0&&a.length===0){r(o);return}var s=D,c=ct(),l=a.length===1?a[0].promise:a.length>1?Promise.all(a.map(e=>e.promise)):null;function u(e){if(!(s.f&16384)){c();try{r([...o,...e])}catch(e){hn(e,s)}lt()}}var d=ut();if(n.length===0){l.then(()=>u([])).finally(d);return}function f(){Promise.all(n.map(e=>pt(e))).then(u).catch(e=>hn(e,s)).finally(d)}l?l.then(()=>{s.f&16384?d():(c(),f(),lt())}):f()}function ct(){var e=D,t=E,n=S,r=w;return function(i=!0){Jn(e),qn(t),Ye(n),i&&!(e.f&16384)&&(r?.activate(),r?.apply())}}function lt(e=!0){Jn(null),qn(null),Ye(null),e&&w?.deactivate()}function ut(){var e=D,t=e.b,n=w,r=!!t?.is_rendered();return t?.update_pending_count(1,n),n.increment(r,e),()=>{t?.update_pending_count(-1,n),n.decrement(r,e)}}function dt(e){var t=2|_;return D!==null&&(D.f|=ae),{ctx:S,deps:null,effects:null,equals:Ne,f:t,fn:e,reactions:null,rv:0,v:y,wv:0,parent:D,ac:null}}var ft=Symbol(`obsolete`);function pt(e,t,n){let r=D;r===null&&Ie();var i=void 0,a=Vt(y),o=!E,s=new Set;return En(()=>{var t=D,n=m();i=n.promise;try{Promise.resolve(e()).then(n.resolve,e=>{e!==ye&&n.reject(e)}).finally(lt)}catch(e){n.reject(e),lt()}var c=w;if(o){if(t.f&32768)var l=ut();if(r.b?.is_rendered())c.async_deriveds.get(t)?.reject(ft);else for(let e of s.values())e.reject(ft);s.add(n),c.async_deriveds.set(t,n)}let u=(e,t=void 0)=>{l?.(),s.delete(n),t!==ft&&(c.activate(),t?(a.f|=ue,qt(a,t)):(a.f&8388608&&(a.f^=ue),qt(a,e)),c.deactivate())};n.promise.then(u,e=>u(null,e||`unknown`))}),bn(()=>{for(let e of s)e.reject(ft)}),new Promise(e=>{function t(n){function r(){n===i?e(a):t(i)}n.then(r,r)}t(i)})}function mt(e){let t=dt(e);return Xn(t),t}function ht(e){let t=dt(e);return t.equals=Fe,t}function gt(e){var t=e.effects;if(t!==null){e.effects=null;for(var n=0;n<t.length;n+=1)Fn(t[n])}}function _t(e){var t,n=D,r=e.parent;if(!Wn&&r!==null&&e.v!==y&&r.f&24576)return Ce(),e.v;Jn(r);try{gt(e),t=cr(e)}finally{Jn(n)}return t}function vt(e){var t=_t(e);!e.equals(t)&&(e.wv=ar(),(!w?.is_fork||e.deps===null)&&(w===null?e.v=t:(w.capture(e,t,!0),St?.capture(e,t,!0)),e.deps===null))?C(e,g):Wn||(Ct===null?it(e):(yn()||w?.is_fork)&&Ct.set(e,t))}function yt(e){if(e.effects!==null)for(let t of e.effects)(t.teardown||t.ac)&&(t.teardown?.(),t.ac!==null&&ot(()=>{t.ac.abort(ye),t.ac=null}),t.fn!==null&&(t.teardown=d),dr(t,0),Nn(t))}function bt(e){if(e.effects!==null)for(let t of e.effects)t.teardown&&t.fn!==null&&fr(t)}var xt=null,w=null,St=null,Ct=null,wt=null,Tt=!1,Et=!1,Dt=null,Ot=null,kt=0,At=1,jt=class e{id=At++;started=!1;linked=!0;prev=null;next=null;async_deriveds=new Map;current=new Map;previous=new Map;#e=new Set;#t=new Set;#n=0;#r=new Map;#i=null;#a=[];#o=[];#s=new Map;#c=new Map;#l=new Set;is_fork=!1;#u=!1;constructor(){xt===null?xt=this:(xt.next=this,this.prev=xt),xt=this}#d(){if(this.is_fork)return!0;for(let e of this.#r.keys())if(!this.#f(e))return!0;return!1}#f(e){for(var t=e;t!==null;t=t.parent)if(this.#c.has(t))return!0;return!1}skip_effect(e){this.#c.has(e)||this.#c.set(e,{d:[],m:[]}),this.#l.delete(e)}unskip_effect(e,t=e=>this.schedule(e)){var n=this.#c.get(e);if(n){this.#c.delete(e);for(var r of n.d)C(r,_),t(r);for(r of n.m)C(r,v),t(r)}this.#l.add(e)}#p(){var e=[];for(let i of this.#a)if(!(i.f&16384||!(i.f&6144))){for(var t=i,n=!1;t.parent!==null;){t=t.parent;var r=t.f;if(r&96){if(!(r&1024)){n=!0;break}t.f^=g}}n||e.push(t)}return this.#a=[],e}#m(){this.started=!0;for(let[e,t]of this.#s)C(e,t),this.schedule(e);this.apply();for(var t=Dt=[],n=[],r=Ot=[];this.#a.length>0;){kt++>1e3&&(this.#b(),Mt());for(let e of this.#p())try{this.#h(e,t,n)}catch(t){throw Lt(e),this.#d()||this.discard(),t}}if(w=null,r.length>0){var i=e.ensure();for(let e of r)i.schedule(e)}if(Dt=null,Ot=null,this.#d()){this.#y(n),this.#y(t);for(let[e,t]of this.#c)It(e,t);r.length>0&&w.#m();return}let a=this.#g();if(a)this.#y(n),this.#y(t),a.#v(this);else{this.#s.clear();for(let e of this.#e)e(this);this.#e.clear(),St=this,Pt(n),Pt(t),St=null,this.#i?.resolve();var o=w;this.#n===0&&(this.#a.length===0||o!==null)&&this.#b(),o!==null&&(zt.clear(),o.#m())}}#h(e,t,n){e.f^=g;for(var r=e.first;r!==null;){var i=r.f,a=!!(i&96);if(!(a&&i&1024||i&8192||this.#c.has(r))&&r.fn!==null){a?r.f^=g:i&4?t.push(r):or(r)&&(i&16&&this.add_dirty_reaction(r,v),fr(r));var o=r.first;if(o!==null){r=o;continue}}for(;r!==null;){var s=r.next;if(s!==null){r=s;break}r=r.parent}}}#g(){for(var e=this.prev;e!==null;e=e.prev)if(!e.is_fork&&this.#_(e))return e;return null}#_(e){for(let[t,[,n]]of this.current)if(!n&&e.current.has(t))return!0;return!1}#v(e){for(let[t,n]of e.current)!this.previous.has(t)&&e.previous.has(t)&&this.previous.set(t,e.previous.get(t)),this.current.set(t,n);for(let[t,n]of e.async_deriveds){let e=this.async_deriveds.get(t);e&&n.promise.then(e.resolve).catch(e.reject)}e.async_deriveds.clear(),this.transfer_reactions(e.#s);let t=e=>{var n=e.reactions;if(n!==null&&!(e.f&2&&!(e.f&6144)))for(let e of n){var r=e.f;if(r&2)t(e);else{var i=e;r&4194320&&!this.async_deriveds.has(i)&&(this.#s.delete(i),C(i,_),this.schedule(i))}}};for(let e of this.current.keys())t(e);this.oncommit(()=>e.discard()),e.#b(),w=this,this.#m()}#y(e){for(var t=0;t<e.length;t+=1)at(e[t],this.#s)}capture(e,t,n=!1){e.v!==y&&!this.previous.has(e)&&this.previous.set(e,e.v),e.f&8388608||(this.current.set(e,[t,n]),Ct?.set(e,t)),this.is_fork||(e.v=t)}activate(){w=this}deactivate(){w=null,Ct=null}flush(){try{Et=!0,w=this,this.#m()}finally{kt=0,wt=null,Dt=null,Ot=null,Et=!1,w=null,Ct=null,zt.clear()}}discard(){for(let e of this.#t)e(this);this.#t.clear();for(let e of this.async_deriveds.values())e.reject(ft);this.#b(),this.#i?.resolve()}register_created_effect(e){this.#o.push(e)}increment(e,t){if(this.#n+=1,e){let e=this.#r.get(t)??0;this.#r.set(t,e+1)}}decrement(e,t){if(--this.#n,e){let e=this.#r.get(t)??0;e===1?this.#r.delete(t):this.#r.set(t,e-1)}this.#u||(this.#u=!0,nt(()=>{this.#u=!1,this.linked&&this.flush()}))}transfer_reactions(e){for(let[t,n]of e)this.add_dirty_reaction(t,n);e.clear()}add_dirty_reaction(e,t){(t===2048||this.#s.get(e)!==2048)&&this.#s.set(e,t)}oncommit(e){this.#e.add(e)}ondiscard(e){this.#t.add(e)}settled(){return(this.#i??=m()).promise}static ensure(){if(w===null){let t=w=new e;!Et&&nt(()=>{t.started||t.flush()})}return w}apply(){Ct=null}schedule(e){wt=e,e.b?.is_pending&&e.f&16777228&&!(e.f&32768)?e.b.defer_effect(e):this.#a.push(e)}#b(){if(this.linked){var e=this.prev,t=this.next;e===null||(e.next=t),t===null?xt=e:t.prev=e,this.linked=!1}}};function Mt(){try{Ve()}catch(e){hn(e,wt)}}var Nt=null;function Pt(e){var t=e.length;if(t!==0){for(var n=0;n<t;){var r=e[n++];if(!(r.f&24576)&&or(r)&&(Nt=new Set,fr(r),r.deps===null&&r.first===null&&r.nodes===null&&r.teardown===null&&r.ac===null&&Ln(r),Nt?.size>0)){zt.clear();for(let e of Nt){if(e.f&24576)continue;let t=[e],n=e.parent;for(;n!==null;)Nt.has(n)&&(Nt.delete(n),t.push(n)),n=n.parent;for(let e=t.length-1;e>=0;e--){let n=t[e];n.f&24576||fr(n)}}Nt.clear()}}Nt=null}}function Ft(e){w.schedule(e)}function It(e,t){if(!(e.f&32&&e.f&1024)){e.f&2048?t.d.push(e):e.f&4096&&t.m.push(e),C(e,g);for(var n=e.first;n!==null;)It(n,t),n=n.next}}function Lt(e){C(e,g);for(var t=e.first;t!==null;)Lt(t),t=t.next}var Rt=new Set,zt=new Map,Bt=!1;function Vt(e,t){return{f:0,v:e,reactions:null,equals:Ne,rv:0,wv:0}}function Ht(e,t){let n=Vt(e,t);return Xn(n),n}function Ut(e,t=!1,n=!0){let r=Vt(e);return t||(r.equals=Fe),qe&&n&&S!==null&&S.l!==null&&(S.l.s??=[]).push(r),r}function Wt(e,t,n=!1){return E!==null&&(!Kn||E.f&131072)&&$e()&&E.f&4325394&&(Yn===null||!Yn.has(e))&&Ge(),qt(e,n?Zt(t):t,Ot)}var Gt=null,Kt=0;function qt(e,t,n=null){if(!e.equals(t)){Wn?zt.set(e,t):zt.has(e)||zt.set(e,e.v);var r=jt.ensure();if(r.capture(e,t),e.f&2){let t=e;e.f&2048&&_t(t),Ct===null&&it(t)}e.wv=ar(),Gt=null,Kt=0,Xt(e,_,n),Gt=null,$e()&&D!==null&&D.f&1024&&!(D.f&96)&&($n===null?er([e]):$n.push(e)),!r.is_fork&&Rt.size>0&&!Bt&&Jt()}return t}function Jt(){Bt=!1;for(let e of Rt){e.f&1024&&C(e,v);let t;try{t=or(e)}catch{t=!0}t&&fr(e)}Rt.clear()}function Yt(e){Wt(e,e.v+1)}function Xt(e,t,n){var r=e.reactions;if(r!==null){var i=$e(),a=r.length;if(Kt+=a,Kt>1e5&&Gt===null&&(Gt=new Set),Gt!==null){if(Gt.has(e))return;Gt.add(e)}for(var o=0;o<a;o++){var s=r[o],c=s.f;if(i||s!==D){var l=(c&_)===0;if(l&&C(s,t),c&131072)Rt.add(s);else if(c&2){var u=s;Ct?.delete(u),Xt(u,v,n)}else if(l){var d=s;c&16&&Nt!==null&&Nt.add(d),n===null?Ft(d):n.push(d)}}}}}function Zt(t){if(typeof t!=`object`||!t||de in t||fe in t)return t;let n=l(t);if(n!==s&&n!==c)return t;var r=new Map,i=e(t),o=Ht(0),u=null,d=rr,f=e=>{if(rr===d)return e();var t=E,n=rr;qn(null),ir(d);var r=e();return qn(t),ir(n),r};return i&&r.set(`length`,Ht(t.length,u)),new Proxy(t,{defineProperty(e,t,n){`value`in n&&n.configurable!==!1&&n.enumerable!==!1&&n.writable!==!1||Ue();var i=r.get(t);return i===void 0?f(()=>{var e=Ht(n.value,u);return r.set(t,e),e}):Wt(i,n.value,!0),!0},deleteProperty(e,t){var n=r.get(t);if(n===void 0){if(t in e){let e=f(()=>Ht(y,u));r.set(t,e),Yt(o)}}else Wt(n,y),Yt(o);return!0},get(e,n,i){if(n===de)return t;var o=r.get(n),s=n in e;if(o===void 0&&(!s||a(e,n)?.writable)&&(o=f(()=>Ht(Zt(s?e[n]:y),u)),r.set(n,o)),o!==void 0){var c=O(o);return c===y?void 0:c}return Reflect.get(e,n,i)},getOwnPropertyDescriptor(e,t){this.has?.(e,t);var n=Reflect.getOwnPropertyDescriptor(e,t),i=r.get(t);if(i!==void 0){var a=O(i);if(a===y)return;if(n&&`value`in n)n.value=a;else return{enumerable:!0,configurable:!0,value:a,writable:!0}}return n},has(e,t){if(t===de)return!0;var n=r.get(t),i=n!==void 0&&n.v!==y||Reflect.has(e,t);return(n!==void 0||(D!==null||E!==null)&&(!i||a(e,t)?.writable))&&(n===void 0&&(n=f(()=>Ht(i?Zt(e[t]):y,u)),r.set(t,n)),O(n)===y)?!1:i},set(e,t,n,s){var c=r.get(t),l=t in e;if(i&&t===`length`)for(var d=n;d<c.v;d+=1){var p=r.get(d+``);p===void 0?d in e&&(p=f(()=>Ht(y,u)),r.set(d+``,p)):Wt(p,y)}if(c===void 0)(!l||a(e,t)?.writable)&&(c=f(()=>Ht(void 0,u)),Wt(c,Zt(n)),r.set(t,c));else{l=c.v!==y;var m=f(()=>Zt(n));Wt(c,m)}var h=Reflect.getOwnPropertyDescriptor(e,t);if(h?.set&&h.set.call(s,n),!l){if(i&&typeof t==`string`){var g=r.get(`length`),_=Number(t);Number.isInteger(_)&&_>=g.v&&Wt(g,_+1)}Yt(o)}return!0},ownKeys(e){O(o);var t=Reflect.ownKeys(e).filter(e=>{var t=r.get(e);return t===void 0||t.v!==y});for(var[n,i]of r)i.v!==y&&!(n in e)&&t.push(n);return t},setPrototypeOf(){We()}})}var Qt,$t,en,tn;function nn(){if(Qt===void 0){Qt=window,$t=/Firefox/.test(navigator.userAgent);var e=Element.prototype,t=Node.prototype,n=Text.prototype;en=a(t,`firstChild`).get,tn=a(t,`nextSibling`).get,u(e)&&(e[ge]=void 0,e[he]=null,e[_e]=void 0,e.__e=void 0),u(n)&&(n[ve]=void 0)}}function rn(e=``){return document.createTextNode(e)}function an(e){return en.call(e)}function on(e){return tn.call(e)}function sn(e,t){if(!b)return an(e);var n=an(x);if(n===null)n=x.appendChild(rn());else if(t&&n.nodeType!==3){var r=rn();return n?.before(r),De(r),r}return t&&pn(n),De(n),n}function cn(e,t=!1){if(!b){var n=an(e);return n instanceof Comment&&n.data===``?on(n):n}if(t){if(x?.nodeType!==3){var r=rn();return x?.before(r),De(r),r}pn(x)}return x}function ln(e,t=!1){if(!b)return an(e);var n=sn(e,t);return ke(e),n}function T(e,t=1,n=!1){let r=b?x:e;for(var i;t--;)i=r,r=on(r);if(!b)return r;if(n){if(r?.nodeType!==3){var a=rn();return r===null?i?.after(a):r.before(a),De(a),a}pn(r)}return De(r),r}function un(e){e.textContent=``}function dn(){return!1}function fn(e,t,n){return t==null||t===`http://www.w3.org/1999/xhtml`?n?document.createElement(e,{is:n}):document.createElement(e):n?document.createElementNS(t,e,{is:n}):document.createElementNS(t,e)}function pn(e){if(e.nodeValue.length<65536)return;let t=e.nextSibling;for(;t!==null&&t.nodeType===3;)t.remove(),e.nodeValue+=t.nodeValue,t=e.nextSibling}function mn(e){var t=D;if(t===null)return E.f|=ue,e;if(!(t.f&32768)&&!(t.f&4))throw e;hn(e,t)}function hn(e,t){if(e===xe)throw e;if(!(t!==null&&t.f&16384)){for(;t!==null;){if(t.f&128&&!(t.f&33570816)){if(!(t.f&32768))throw e;try{t.b.error(e);return}catch(t){e=t}}t=t.parent}throw e}}function gn(e){D===null&&(E===null&&Be(e),ze()),Wn&&Re(e)}function _n(e,t){var n=t.last;n===null?t.last=t.first=e:(n.next=e,e.prev=n,t.last=e)}function vn(e,t){var n=D;n!==null&&n.f&8192&&(e|=ee);var r={ctx:S,deps:null,nodes:null,f:e|_|512,first:null,fn:t,last:null,next:null,parent:n,b:n&&n.b,prev:null,teardown:null,wv:0,ac:null};w?.register_created_effect(r);var i=r;if(e&4)Dt===null?jt.ensure().schedule(r):Dt.push(r);else if(t!==null){try{fr(r)}catch(e){throw Fn(r),e}i.deps===null&&i.teardown===null&&i.nodes===null&&i.first===i.last&&!(i.f&524288)&&(i=i.first,e&16&&e&65536&&i!==null&&(i.f|=ie))}if(i!==null&&(i.parent=n,n!==null&&_n(i,n),E!==null&&E.f&2&&!(e&64))){var a=E;(a.effects??=[]).push(i)}return r}function yn(){return E!==null&&!Kn}function bn(e){let t=vn(8,null);return C(t,g),t.teardown=e,t}function xn(e){gn(`$effect`);var t=D.f;if(!E&&t&32&&S!==null&&!S.i){var n=S;(n.e??=[]).push(e)}else return Sn(e)}function Sn(e){return vn(4|oe,e)}function Cn(e){return gn(`$effect.pre`),vn(8|oe,e)}function wn(e){jt.ensure();let t=vn(64|ae,e);return(e={})=>new Promise(n=>{e.outro?Rn(t,()=>{Fn(t),n(void 0)}):(Fn(t),n(void 0))})}function Tn(e){return vn(4,e)}function En(e){return vn(le|ae,e)}function Dn(e,t=0){return vn(8|t,e)}function On(e,t=[],n=[],r=[]){st(r,t,n,t=>{vn(8,()=>{e(...t.map(O))})})}function kn(e,t=0){return vn(16|t,e)}function An(e,t=0){return vn(h|t,e)}function jn(e){return vn(32|ae,e)}function Mn(e){var t=e.teardown;if(t!==null){let n=Wn,r=E;Gn(!0),qn(null);try{t.call(null)}catch(t){hn(t,e.parent)}finally{Gn(n),qn(r)}}}function Nn(e,t=!1){var n=e.first;for(e.first=e.last=null;n!==null;){let e=n.ac;e!==null&&ot(()=>{e.abort(ye)});var r=n.next;n.f&64?n.parent=null:Fn(n,t),n=r}}function Pn(e){for(var t=e.first;t!==null;){var n=t.next;t.f&32||Fn(t),t=n}}function Fn(e,t=!0){var n=!1;(t||e.f&262144)&&e.nodes!==null&&e.nodes.end!==null&&(In(e.nodes.start,e.nodes.end),n=!0),e.f|=re,Nn(e,t&&!n),dr(e,0);var r=e.nodes&&e.nodes.t;if(r!==null)for(let e of r)e.stop();Mn(e),e.f^=re,e.f|=te;var i=e.parent;i!==null&&i.first!==null&&Ln(e),e.next=e.prev=e.teardown=e.ctx=e.deps=e.fn=e.nodes=e.ac=e.b=null}function In(e,t){for(;e!==null;){var n=e===t?null:on(e);e.remove(),e=n}}function Ln(e){var t=e.parent,n=e.prev,r=e.next;n!==null&&(n.next=r),r!==null&&(r.prev=n),t!==null&&(t.first===e&&(t.first=r),t.last===e&&(t.last=n))}function Rn(e,t,n=!0){var r=[];e.f|=256,zn(e,r,!0);var i=()=>{n&&Fn(e),t&&t()},a=r.length;if(a>0){var o=()=>--a||i();for(var s of r)s.out(o)}else i()}function zn(e,t,n){if(!(e.f&8192)){e.f^=ee;var r=e.nodes&&e.nodes.t;if(r!==null)for(let e of r)(e.is_global||n)&&t.push(e);for(var i=e.first;i!==null;){var a=i.next;if(!(i.f&64)){var o=!!(i.f&65536)||!!(i.f&32)&&!!(e.f&16);zn(i,t,o?n:!1)}i=a}}}function Bn(e){e.f&=-257,Vn(e,!0)}function Vn(e,t){if(!(e.f&256)&&e.f&8192){e.f^=ee,e.f&1024||(C(e,_),jt.ensure().schedule(e));for(var n=e.first;n!==null;){var r=n.next,i=!!(n.f&65536)||!!(n.f&32);Vn(n,i?t:!1),n=r}var a=e.nodes&&e.nodes.t;if(a!==null)for(let e of a)(e.is_global||t)&&e.in()}}function Hn(e,t){if(e.nodes)for(var n=e.nodes.start,r=e.nodes.end;n!==null;){var i=n===r?null:on(n);t.append(n),n=i}}var Un=null,Wn=!1;function Gn(e){Wn=e}var E=null,Kn=!1;function qn(e){E=e}var D=null;function Jn(e){D=e}var Yn=null;function Xn(e){E!==null&&(E.f&2097152||E.f&2)&&(Yn??=new Set).add(e)}var Zn=null,Qn=0,$n=null;function er(e){$n=e}var tr=1,nr=0,rr=nr;function ir(e){rr=e}function ar(){return++tr}function or(e){var t=e.f;if(t&2048)return!0;if(t&4096){for(var n=e.deps,r=n.length,i=0;i<r;i++){var a=n[i];if(or(a)&&vt(a),a.wv>e.wv)return!0}t&512&&Ct===null&&C(e,g)}return!1}function sr(e,t,n=!0){var r=e.reactions;if(r!==null&&!(Yn!==null&&Yn.has(e)))for(var i=0;i<r.length;i++){var a=r[i];a.f&2?sr(a,t,!1):t===a&&(n?C(a,_):a.f&1024&&C(a,v),Ft(a))}}function cr(e){var t=Zn,n=Qn,r=$n,i=E,a=Yn,o=S,s=Kn,c=rr,l=e.f;Zn=null,Qn=0,$n=null,E=l&96?null:e,Yn=null,Ye(e.ctx),Kn=!1,rr=++nr,e.ac!==null&&(ot(()=>{e.ac.abort(ye)}),e.ac=null);try{e.f|=ce;var u=e.fn,d=u();e.f|=ne;var f=lr(e);if($e()&&$n!==null&&!Kn&&f!==null&&!(e.f&6146))for(var p=0;p<$n.length;p++)sr($n[p],e);if(i!==null&&i!==e){if(nr++,i.deps!==null)for(let e=0;e<n;e+=1)i.deps[e].rv=nr;if(t!==null)for(let e of t)e.rv=nr;$n!==null&&(r===null?r=$n:r.push(...$n))}return e.f&8388608&&(e.f^=ue),d}catch(t){return lr(e),mn(t)}finally{e.f^=ce,Zn=t,Qn=n,$n=r,E=i,Yn=a,Ye(o),Kn=s,rr=c}}function lr(e){var t=e.deps,n=w?.is_fork;if(Zn!==null){var r;if(n||dr(e,Qn),t!==null&&Qn>0)for(t.length=Qn+Zn.length,r=0;r<Zn.length;r++)t[Qn+r]=Zn[r];else e.deps=t=Zn;if(yn()&&e.f&512)for(r=Qn;r<t.length;r++)(t[r].reactions??=[]).push(e)}else!n&&t!==null&&Qn<t.length&&(dr(e,Qn),t.length=Qn);return t}function ur(e,r){let i=r.reactions;if(i!==null){var a=t.call(i,e);if(a!==-1){var o=i.length-1;o===0?i=r.reactions=null:(i[a]=i[o],i.pop())}}if(i===null&&r.f&2&&(Zn===null||!n.call(Zn,r))){var s=r;s.f&512&&(s.f^=512),s.v!==y&&it(s),s.ac!==null&&ot(()=>{s.ac.abort(ye),s.ac=null,C(s,_)}),yt(s),dr(s,0)}}function dr(e,t){var n=e.deps;if(n!==null)for(var r=t;r<n.length;r++)ur(e,n[r])}function fr(e){var t=e.f;if(!(t&16384)){C(e,g);var n=D;D=e;try{t&16777232?Pn(e):Nn(e),Mn(e);var r=cr(e);e.teardown=typeof r==`function`?r:null,e.wv=tr}finally{D=n}}}function O(e){var t=!!(e.f&2);if(Un?.add(e),E!==null&&!Kn&&!(D!==null&&D.f&16384)&&(Yn===null||!Yn.has(e))){var r=E.deps;if(E.f&2097152)e.rv<nr&&(e.rv=nr,Zn===null&&r!==null&&r[Qn]===e?Qn++:Zn===null?Zn=[e]:Zn.push(e));else{E.deps??=[],n.call(E.deps,e)||E.deps.push(e);var i=e.reactions;i===null?e.reactions=[E]:n.call(i,E)||i.push(E)}}if(Wn&&zt.has(e))return zt.get(e);if(t){var a=e;if(Wn){var o=a.v;return(!(a.f&1024)&&a.reactions!==null||mr(a))&&(o=_t(a)),zt.set(a,o),o}var s=!(a.f&512)&&!Kn&&E!==null&&!!(E.f&512),c=(a.f&ne)===0;or(a)&&(s&&(a.f|=512),vt(a)),s&&!c&&(bt(a),pr(a))}if(Ct?.has(e))return Ct.get(e);if(e.f&8388608)throw e.v;return e.v}function pr(e){if(e.f|=512,e.deps!==null)for(let r of e.deps){var t=r.reactions;t===null?r.reactions=[e]:n.call(t,e)||t.push(e),r.f&2&&!(r.f&512)&&(bt(r),pr(r))}}function mr(e){if(e.v===y)return!0;if(e.deps===null)return!1;for(let t of e.deps)if(zt.has(t)||t.f&2&&mr(t))return!0;return!1}function hr(e){var t=Kn;try{return Kn=!0,e()}finally{Kn=t}}function gr(e){if(!(typeof e!=`object`||!e||e instanceof EventTarget)){if(de in e)_r(e);else if(!Array.isArray(e))for(let t in e){let n=e[t];typeof n==`object`&&n&&de in n&&_r(n)}}}function _r(e,t=new Set){if(typeof e==`object`&&e&&!(e instanceof EventTarget)&&!t.has(e)){t.add(e),e instanceof Date&&e.getTime();for(let n in e)try{_r(e[n],t)}catch{}let n=l(e);if(n!==Object.prototype&&n!==Array.prototype&&n!==Map.prototype&&n!==Set.prototype&&n!==Date.prototype){let t=o(n);for(let n in t){let r=t[n].get;if(r)try{r.call(e)}catch{}}}}}[...`allowfullscreen.async.autofocus.autoplay.checked.controls.default.disabled.formnovalidate.indeterminate.inert.ismap.loop.multiple.muted.nomodule.novalidate.open.playsinline.readonly.required.reversed.seamless.selected.webkitdirectory.defer.disablepictureinpicture.disableremoteplayback`.split(`.`)];var vr=[`touchstart`,`touchmove`];function yr(e){return vr.includes(e)}var br=Symbol(`events`),xr=new Set,Sr=new Set,Cr=null,wr=!1;function Tr(e){var t=this,n=t.ownerDocument,r=e.type,a=e.composedPath?.()||[],o=a[0]||e.target;Cr=e,wr||(wr=!0,setTimeout(()=>{wr=!1,Cr=null}));var s=0,c=Cr===e&&e[br];if(c){var l=a.indexOf(c);if(l!==-1&&(t===document||t===window)){e[br]=t;return}var u=a.indexOf(t);if(u===-1)return;l<=u&&(s=l)}if(o=a[s]||e.target,o!==t){i(e,`currentTarget`,{configurable:!0,get(){return o||n}});var d=E,f=D;qn(null),Jn(null);try{for(var p,m=[];o!==null&&o!==t;){try{var h=o[br]?.[r];h==null||o.disabled&&e.target!==o||h.call(o,e)}catch(e){p?m.push(e):p=e}if(e.cancelBubble)break;s++,o=s<a.length?a[s]:null}if(p){for(let e of m)queueMicrotask(()=>{throw e});throw p}}finally{e[br]=t,delete e.currentTarget,qn(d),Jn(f)}}}var Er=globalThis?.window?.trustedTypes&&globalThis.window.trustedTypes.createPolicy(`svelte-trusted-html`,{createHTML:e=>e});function Dr(e){return Er?.createHTML(e)??e}function Or(e){var t=fn(`template`);return t.innerHTML=Dr(e.replaceAll(`<!>`,`<!---->`)),t.content}function kr(e,t){var n=D;n.nodes===null&&(n.nodes={start:e,end:t,a:null,t:null})}function k(e,t){var n=!!(t&1),r=!!(t&2),i,a=!e.startsWith(`<!>`);return()=>{if(b)return kr(x,null),x;i===void 0&&(i=Or(a?e:`<!>`+e),n||(i=an(i)));var t=r||$t?document.importNode(i,!0):i.cloneNode(!0);if(n){var o=an(t),s=t.lastChild;kr(o,s)}else kr(t,t);return t}}function Ar(e=``){if(!b){var t=rn(e+``);return kr(t,t),t}var n=x;return n.nodeType===3?pn(n):(n.before(n=rn()),De(n)),kr(n,n),n}function jr(){if(b)return kr(x,null),x;var e=document.createDocumentFragment(),t=document.createComment(``),n=rn();return e.append(t,n),kr(t,n),e}function A(e,t){if(b){var n=D;n.f&32768&&n.nodes.end!==null||(n.nodes.end=x),Oe()}else e!==null&&e.before(t)}function Mr(e){let t=0,n=Vt(0),r;return()=>{yn()&&(O(n),Dn(()=>(t===0&&(r=hr(()=>e(()=>Yt(n)))),t+=1,()=>{nt(()=>{--t,t===0&&(r?.(),r=void 0,Yt(n))})})))}}var Nr=ie|ae;function Pr(e,t,n,r){new Fr(e,t,n,r)}var Fr=class{parent;is_pending=!1;transform_error;#e;#t=b?x:null;#n;#r;#i;#a=null;#o=null;#s=null;#c=null;#l=0;#u=0;#d=!1;#f=new Map;#p=null;#m=Mr(()=>(this.#p=Vt(this.#l),()=>{this.#p=null}));constructor(e,t,n,r){this.#e=e,this.#n=t,this.#r=e=>{var t=D;t.b=this,t.f|=128,n(e)},this.parent=D.b,this.transform_error=r??this.parent?.transform_error??(e=>e),this.#i=kn(()=>{if(b){let e=Me(this.#t);Oe();let t=e===`[!`;if(e.startsWith(`[?`)){let t=JSON.parse(e.slice(2));this.#g(t)}else t?this.#y():this.#h()}else this.#b()},Nr),b&&(this.#e=x)}#h(){try{this.#a=jn(()=>this.#r(this.#e))}catch(e){this.error(e)}}#g(e){let t=this.#n.failed,{reset:n,invoke_onerror:r}=this.#_(e);nt(r),t&&(this.#s=jn(()=>{t(this.#e,()=>e,()=>n)}))}#_(e){var t=!1,n=!1;let r=()=>{this.#v()||(t?Te():(t=!0,n&&Ke(),this.#s!==null&&Rn(this.#s,()=>{this.#s=null}),this.#S(()=>{this.#b()})))};return{reset:r,invoke_onerror:()=>{if(!this.#v())try{n=!0,this.#n.onerror?.(e,r),n=!1}catch(e){hn(e,this.#i&&this.#i.parent)}}}}#v(){return(this.#i.f&(te|re))!==0}#y(){let e=this.#n.pending;e&&(this.is_pending=!0,this.#o=jn(()=>e(this.#e)),nt(()=>{if(!this.#v()){var e=this.#c=document.createDocumentFragment(),t=rn(),n=!1;e.append(t),this.#a=this.#S(()=>{try{return jn(()=>this.#r(t))}catch(e){try{this.error(e),n=!0}catch(e){hn(e,this.#i.parent)}return null}}),this.#a===null?(this.#c=null,n&&this.#x(w)):this.#u===0&&(this.#e.before(e),this.#c=null,Rn(this.#o,()=>{this.#o=null}),this.#x(w))}}))}#b(){try{if(this.is_pending=this.has_pending_snippet(),this.#u=0,this.#l=0,this.#a=jn(()=>{this.#r(this.#e)}),this.#u>0){var e=this.#c=document.createDocumentFragment();Hn(this.#a,e);let t=this.#n.pending;this.#o=jn(()=>t(this.#e))}else this.#x(w)}catch(e){this.error(e)}}#x(e){this.is_pending=!1,e.transfer_reactions(this.#f)}defer_effect(e){at(e,this.#f)}is_rendered(){return!this.is_pending&&(!this.parent||this.parent.is_rendered())}has_pending_snippet(){return!!this.#n.pending}#S(e){var t=D,n=E,r=S;Jn(this.#i),qn(this.#i),Ye(this.#i.ctx);try{return jt.ensure(),e()}finally{Jn(t),qn(n),Ye(r)}}#C(e,t){this.has_pending_snippet()?(this.#u+=e,this.#u===0&&(this.#x(t),this.#o&&Rn(this.#o,()=>{this.#o=null}),this.#c&&=(this.#e.before(this.#c),null))):this.parent&&this.parent.#C(e,t)}update_pending_count(e,t){this.#C(e,t),this.#l+=e,!this.#p||this.#d||(this.#d=!0,nt(()=>{this.#d=!1,this.#p&&qt(this.#p,this.#l)}))}get_effect_pending(){return this.#m(),O(this.#p)}error(e){if(e===xe||!this.#n.onerror&&!this.#n.failed)throw e;w?.is_fork?(this.#a&&w.skip_effect(this.#a),this.#o&&w.skip_effect(this.#o),this.#s&&w.skip_effect(this.#s),w.oncommit(()=>{this.#v()||this.#w(e)})):this.#w(e)}#w(e){this.#a&&=(Fn(this.#a),null),this.#o&&=(Fn(this.#o),null),this.#s&&=(Fn(this.#s),null),b&&(De(this.#t),Ae(),De(je()));let t=this.#n.failed,n=e=>{if(this.#v())return;let{reset:n,invoke_onerror:r}=this.#_(e);r(),t&&!this.#v()&&(this.#s=this.#S(()=>{try{return jn(()=>{var r=D;r.b=this,r.f|=128,t(this.#e,()=>e,()=>n)})}catch(e){return hn(e,this.#i.parent),null}}))};nt(()=>{if(!this.#v()){var t;try{t=this.transform_error(e)}catch(e){hn(e,this.#i&&this.#i.parent);return}typeof t==`object`&&t&&typeof t.then==`function`?t.then(n,e=>hn(e,this.#i&&this.#i.parent)):n(t)}})}};function Ir(e,t){var n=t==null?``:typeof t==`object`?`${t}`:t;n!==(e[ve]??=e.nodeValue)&&(e[ve]=n,e.nodeValue=`${n}`)}function Lr(e,t){return zr(e,t)}var Rr=new Map;function zr(e,{target:t,anchor:n,props:i={},events:a,context:o,intro:s=!0,transformError:c}){nn();var l=void 0,u=wn(()=>{var s=n??t.appendChild(rn());Pr(s,{pending:()=>{}},t=>{Xe({});var n=S;if(o&&(n.c=o),a&&(i.$$events=a),b&&kr(t,null),l=e(t,i)||Qe(),b&&(D.nodes.end=x,x===null||x.nodeType!==8||x.data!==`]`))throw we(),xe;Ze()},c);var u=new Set,d=e=>{for(var n=0;n<e.length;n++){var r=e[n];if(!u.has(r)){u.add(r);var i=yr(r);for(let e of[t,document]){var a=Rr.get(e);a===void 0&&(a=new Map,Rr.set(e,a));var o=a.get(r);o===void 0?(e.addEventListener(r,Tr,{passive:i}),a.set(r,1)):a.set(r,o+1)}}}};return d(r(xr)),Sr.add(d),()=>{for(var e of u)for(let n of[t,document]){var r=Rr.get(n),i=r.get(e);--i==0?(n.removeEventListener(e,Tr),r.delete(e),r.size===0&&Rr.delete(n)):r.set(e,i)}Sr.delete(d),s!==n&&s.parentNode?.removeChild(s)}});return Br.set(l,u),l}var Br=new WeakMap,Vr=class{anchor;#e=new Map;#t=new Map;#n=new Map;#r=new Set;#i=!0;constructor(e,t=!0){this.anchor=e,this.#i=t}#a=e=>{if(this.#e.has(e)){var t=this.#e.get(e),n=this.#t.get(t);if(n)Bn(n),this.#r.delete(t);else{var r=this.#n.get(t);r&&(Bn(r.effect),this.#t.set(t,r.effect),this.#n.delete(t),r.fragment.lastChild.remove(),this.anchor.before(r.fragment),n=r.effect)}for(let[t,n]of this.#e){if(this.#e.delete(t),t===e)break;let r=this.#n.get(n);r&&(Fn(r.effect),this.#n.delete(n))}for(let[e,r]of this.#t){if(e===t||this.#r.has(e))continue;let i=()=>{if(Array.from(this.#e.values()).includes(e)){var t=document.createDocumentFragment();Hn(r,t),t.append(rn()),this.#n.set(e,{effect:r,fragment:t})}else Fn(r);this.#r.delete(e),this.#t.delete(e)};this.#i||!n?(this.#r.add(e),Rn(r,i,!1)):i()}}};#o=e=>{this.#e.delete(e);let t=Array.from(this.#e.values());for(let[e,n]of this.#n)t.includes(e)||(Fn(n.effect),this.#n.delete(e))};ensure(e,t){var n=w,r=dn();if(t&&!this.#t.has(e)&&!this.#n.has(e)){if(r){var i=document.createDocumentFragment(),a=rn();i.append(a),this.#n.set(e,{effect:jn(()=>t(a)),fragment:i})}else this.#t.set(e,jn(()=>t(this.anchor)))}if(this.#e.set(n,e),r){for(let[t,r]of this.#t)t===e?n.unskip_effect(r):n.skip_effect(r);for(let[t,r]of this.#n)t===e?n.unskip_effect(r.effect):n.skip_effect(r.effect);n.oncommit(this.#a),n.ondiscard(this.#o)}else b&&(this.anchor=x),this.#a(n)}};function Hr(e,t,n=!1){var r;b&&(r=x,Oe());var i=new Vr(e),a=n?ie:0;function o(e,t){if(b){var n=Me(r);if(e!==parseInt(n.substring(1))){var a=je();De(a),i.anchor=a,Ee(!1),i.ensure(e,t),Ee(!0);return}}i.ensure(e,t)}kn(()=>{var e=!1;t((t,n=0)=>{e=!0,o(n,t)}),e||o(-1,null)},a)}function Ur(e,t,n){for(var i=[],a=t.length,o,s=t.length,c=0;c<a;c++){let n=t[c];Rn(n,()=>{if(o){if(o.pending.delete(n),o.done.add(n),o.pending.size===0){var t=e.outrogroups;Wr(e,r(o.done)),t.delete(o),t.size===0&&(e.outrogroups=null)}}else--s},!1)}if(s===0){var l=i.length===0&&n!==null&&e.pending.size===0;if(l){var u=n,d=u.parentNode;un(d),d.append(u),e.items.clear()}Wr(e,t,!l)}else o={pending:new Set(t),done:new Set},(e.outrogroups??=new Set).add(o)}function Wr(e,t,n=!0){var r;if(e.pending.size>0){r=new Set;for(let t of e.pending.values())for(let n of t)r.add(e.items.get(n).e)}for(var i=0;i<t.length;i++){var a=t[i];r?.has(a)?(a.f|=se,Hn(a,document.createDocumentFragment())):Fn(t[i],n)}}var Gr;function Kr(t,n,i,a,o,s=null){var c=t,l=new Map;if(n&4){var u=t;c=b?De(an(u)):u.appendChild(rn())}b&&Oe();var d=null,f=ht(()=>{var t=i();return e(t)?t:t==null?[]:r(t)}),p=new Map,m=!0;function h(e){if(!(_.effect.f&16384)){_.pending.delete(e);var t=O(f);_.fallback=d,Jr(_,t,c,n,a),d!==null&&(t.length===0?d.f&33554432?(d.f^=se,Xr(d,null,c)):Bn(d):Rn(d,()=>{d=null}))}}function g(e){_.pending.delete(e)}var _={effect:kn(()=>{var e=O(f),t=e.length;let r=!1;b&&Me(c)===`[!`!=(t===0)&&(c=je(),De(c),Ee(!1),r=!0);for(var u=new Set,_=w,v=dn(),ee=0;ee<t;ee+=1){b&&x.nodeType===8&&x.data===`]`&&(c=x,r=!0,Ee(!1));var te=e[ee],ne=a(te,ee),re=m?null:l.get(ne);re?(re.v&&qt(re.v,te),re.i&&qt(re.i,ee),v&&_.unskip_effect(re.e)):(re=Yr(l,m?c:Gr??=rn(),te,ne,ee,o,n,i),m||(re.e.f|=se),l.set(ne,re)),u.add(ne)}if(t===0&&s&&!d&&(m?d=jn(()=>s(c)):(d=jn(()=>s(Gr??=rn())),d.f|=se)),t>u.size&&Le(``,``,``),b&&t>0&&De(je()),!m){if(p.set(_,u),v){for(let[e,t]of l)u.has(e)||_.skip_effect(t.e);_.oncommit(h),_.ondiscard(g)}else h(_)}r&&Ee(!0),O(f)}),flags:n,items:l,pending:p,outrogroups:null,fallback:d};m=!1,b&&(c=x)}function qr(e){for(;e!==null&&!(e.f&32);)e=e.next;return e}function Jr(e,t,n,i,a){var o=!!(i&8),s=t.length,c=e.items,l=qr(e.effect.first),u,d=null,f,p=[],m=[],h,g,_,v;if(o)for(v=0;v<s;v+=1)h=t[v],g=a(h,v),_=c.get(g).e,_.f&33554432||(_.nodes?.a?.measure(),(f??=new Set).add(_));for(v=0;v<s;v+=1){if(h=t[v],g=a(h,v),_=c.get(g).e,e.outrogroups!==null)for(let t of e.outrogroups)t.pending.delete(_),t.done.delete(_);if(_.f&8192&&(Bn(_),o&&(_.nodes?.a?.unfix(),(f??=new Set).delete(_))),_.f&33554432){if(_.f^=se,_===l)Xr(_,null,n);else{var ee=d?d.next:l;_===e.effect.last&&(e.effect.last=_.prev),_.prev&&(_.prev.next=_.next),_.next&&(_.next.prev=_.prev),Zr(e,d,_),Zr(e,_,ee),Xr(_,ee,n),d=_,p=[],m=[],l=qr(d.next);continue}}if(_!==l){if(u!==void 0&&u.has(_)){if(p.length<m.length){var te=m[0],ne;d=te.prev;var re=p[0],ie=p[p.length-1];for(ne=0;ne<p.length;ne+=1)Xr(p[ne],te,n);for(ne=0;ne<m.length;ne+=1)u.delete(m[ne]);Zr(e,re.prev,ie.next),Zr(e,d,re),Zr(e,ie,te),l=te,d=ie,--v,p=[],m=[]}else u.delete(_),Xr(_,l,n),Zr(e,_.prev,_.next),Zr(e,_,d===null?e.effect.first:d.next),Zr(e,d,_),d=_;continue}for(p=[],m=[];l!==null&&l!==_;)(u??=new Set).add(l),m.push(l),l=qr(l.next);if(l===null)continue}_.f&33554432||p.push(_),d=_,l=qr(_.next)}if(e.outrogroups!==null){for(let t of e.outrogroups)t.pending.size===0&&(Wr(e,r(t.done)),e.outrogroups?.delete(t));e.outrogroups.size===0&&(e.outrogroups=null)}if(l!==null||u!==void 0){var ae=[];if(u!==void 0)for(_ of u)_.f&8192||ae.push(_);for(;l!==null;)!(l.f&8192)&&l!==e.fallback&&ae.push(l),l=qr(l.next);var oe=ae.length;if(oe>0){var ce=i&4&&s===0?n:null;if(o){for(v=0;v<oe;v+=1)ae[v].nodes?.a?.measure();for(v=0;v<oe;v+=1)ae[v].nodes?.a?.fix()}Ur(e,ae,ce)}}o&&nt(()=>{if(f!==void 0)for(_ of f)_.nodes?.a?.apply()})}function Yr(e,t,n,r,i,a,o,s){var c=o&1?o&16?Vt(n):Ut(n,!1,!1):null,l=o&2?Vt(i):null;return{v:c,i:l,e:jn(()=>(a(t,c??n,l??i,s),()=>{e.delete(r)}))}}function Xr(e,t,n){if(e.nodes)for(var r=e.nodes.start,i=e.nodes.end,a=t&&!(t.f&33554432)?t.nodes.start:n;r!==null;){var o=on(r);if(a.before(r),r===i)return;r=o}}function Zr(e,t,n){t===null?e.effect.first=n:t.next=n,n===null?e.effect.last=t:n.prev=t}function Qr(e,t,...n){var r=new Vr(e);kn(()=>{let e=t()??null;r.ensure(e,e&&(t=>e(t,...n)))},ie)}function $r(e,t){Tn(()=>{e=D?.parent?.nodes?.start??e;var n=e.getRootNode(),r=n.host?n:n.head??n.ownerDocument.head;if(!r.querySelector(`#`+t.hash)){let e=fn(`style`);e.id=t.hash,e.textContent=t.code,r.appendChild(e)}})}function ei(e,t){var n=void 0,r;An(()=>{n!==(n=t())&&(r&&=(Fn(r),null),n&&(r=jn(()=>{Tn(()=>n(e))})))})}var ti=[...` 	
\r\f\xA0\v﻿`];function ni(e,t,n){var r=e==null?``:``+e;if(t&&(r=r?r+` `+t:t),n){for(var i of Object.keys(n))if(n[i])r=r?r+` `+i:i;else if(r.length)for(var a=i.length,o=0;(o=r.indexOf(i,o))>=0;){var s=o+a;(o===0||ti.includes(r[o-1]))&&(s===r.length||ti.includes(r[s]))?r=(o===0?``:r.substring(0,o))+r.substring(s+1):o=s}}return r===``?null:r}function ri(e,t,n,r,i,a){var o=e[ge];if(b||o!==n||o===void 0){var s=ni(n,r,a);b&&s===e.getAttribute(`class`)||(s==null?e.removeAttribute(`class`):t?e.className=s:e.setAttribute(`class`,s)),e[ge]=n}else if(a&&i!==a)for(var c in a){var l=!!a[c];(i==null||l!==!!i[c])&&e.classList.toggle(c,l)}return a}var ii=Symbol(`is custom element`),ai=Symbol(`is html`),oi=be?`link`:`LINK`;function si(e,t,n,r){var i=ci(e);if(!(b&&(i[t]=e.getAttribute(t),t===`src`||t===`srcset`||t===`href`&&e.nodeName===oi))){var a=i[t];a!==(i[t]=n)&&(t===`loading`&&(e[me]=n),n==null?e.removeAttribute(t):typeof n!=`string`&&ui(e).has(t)?e[t]=n:(!b||typeof n!=`number`&&typeof n!=`boolean`||a!==String(n))&&e.setAttribute(t,n))}}function ci(e){return e[he]??={[ii]:e.nodeName.includes(`-`),[ai]:e.namespaceURI===Se}}var li=new Map;function ui(e){var t=e.getAttribute(`is`)||e.nodeName,n=li.get(t);if(n)return n;li.set(t,n=new Set);for(var r,i=e,a=Element.prototype;a!==i;){for(var s in r=o(i),r)r[s].set&&s!==`innerHTML`&&s!==`textContent`&&s!==`innerText`&&n.add(s);i=l(i)}return n}function di(e=!1){let t=S,n=t.l.u;if(!n)return;let r=()=>gr(t.s);if(e){let e=0,n={},i=dt(()=>{let r=!1,i=t.s;for(let e in i)i[e]!==n[e]&&(n[e]=i[e],r=!0);return r&&e++,e});r=()=>O(i)}n.b.length&&Cn(()=>{fi(t,r),p(n.b)}),xn(()=>{let e=hr(()=>n.m.map(f));return()=>{for(let t of e)typeof t==`function`&&t()}}),n.a.length&&xn(()=>{fi(t,r),p(n.a)})}function fi(e,t){if(e.l.s)for(let t of e.l.s)O(t);t()}function pi(e){var t=Vt(0);return function(){return arguments.length===1?(Wt(t,O(t)+1),arguments[0]):(O(t),e())}}var mi=!1;function hi(e){var t=mi;try{return mi=!1,[e(),mi]}finally{mi=t}}function gi(e,t,n,r){var i=!qe||!!(n&2),o=!!(n&8),s=!!(n&16),c=r,l=!0,u=void 0,d=()=>s&&i?(u??=dt(r),O(u)):(l&&(l=!1,c=s?hr(r):r),c);let f;if(o){var p=de in e||pe in e;f=a(e,t)?.set??(p&&t in e?n=>e[t]=n:void 0)}var m,h=!1;o?[m,h]=hi(()=>e[t]):m=e[t],m===void 0&&r!==void 0&&(m=d(),f&&(i&&He(t),f(m)));var g=i?()=>{var n=e[t];return n===void 0?d():(l=!0,n)}:()=>{var n=e[t];return n!==void 0&&(c=void 0),n===void 0?c:n};if(i&&!(n&4))return g;if(f){var _=e.$$legacy;return(function(e,t){return arguments.length>0?((!i||!t||_||h)&&f(t?g():e),e):g()})}var v=!1,ee=(n&1?dt:ht)(()=>(v=!1,g()));o&&O(ee);var te=D;return(function(e,t){if(arguments.length>0){let n=t?O(ee):i&&o?Zt(e):e;return Wt(ee,n),v=!0,c!==void 0&&(c=n),e}return Wn&&v||te.f&16384?ee.v:O(ee)})}typeof window<`u`&&((window.__svelte??={}).v??=new Set).add(`5`),Je();var _i=globalThis,vi=_i.ShadowRoot&&(_i.ShadyCSS===void 0||_i.ShadyCSS.nativeShadow)&&`adoptedStyleSheets`in Document.prototype&&`replace`in CSSStyleSheet.prototype,yi=Symbol(),bi=new WeakMap,xi=class{constructor(e,t,n){if(this._$cssResult$=!0,n!==yi)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(vi&&e===void 0){let n=t!==void 0&&t.length===1;n&&(e=bi.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),n&&bi.set(t,e))}return e}toString(){return this.cssText}},Si=e=>new xi(typeof e==`string`?e:e+``,void 0,yi),Ci=(e,t)=>{if(vi)e.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let n of t){let t=document.createElement(`style`),r=_i.litNonce;r!==void 0&&t.setAttribute(`nonce`,r),t.textContent=n.cssText,e.appendChild(t)}},wi=vi?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t=``;for(let n of e.cssRules)t+=n.cssText;return Si(t)})(e):e,{is:Ti,defineProperty:Ei,getOwnPropertyDescriptor:Di,getOwnPropertyNames:Oi,getOwnPropertySymbols:ki,getPrototypeOf:Ai}=Object,ji=globalThis,Mi=ji.trustedTypes,Ni=Mi?Mi.emptyScript:``,Pi=ji.reactiveElementPolyfillSupport,Fi=(e,t)=>e,Ii={toAttribute(e,t){switch(t){case Boolean:e=e?Ni:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let n=e;switch(t){case Boolean:n=e!==null;break;case Number:n=e===null?null:Number(e);break;case Object:case Array:try{n=JSON.parse(e)}catch{n=null}}return n}},Li=(e,t)=>!Ti(e,t),Ri={attribute:!0,type:String,converter:Ii,reflect:!1,useDefault:!1,hasChanged:Li};Symbol.metadata??=Symbol(`metadata`),ji.litPropertyMetadata??=new WeakMap;var zi=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=Ri){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){let n=Symbol(),r=this.getPropertyDescriptor(e,n,t);r!==void 0&&Ei(this.prototype,e,r)}}static getPropertyDescriptor(e,t,n){let{get:r,set:i}=Di(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get:r,set(t){let a=r?.call(this);i?.call(this,t),this.requestUpdate(e,a,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??Ri}static _$Ei(){if(this.hasOwnProperty(Fi(`elementProperties`)))return;let e=Ai(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(Fi(`finalized`)))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Fi(`properties`))){let e=this.properties,t=[...Oi(e),...ki(e)];for(let n of t)this.createProperty(n,e[n])}let e=this[Symbol.metadata];if(e!==null){let t=litPropertyMetadata.get(e);if(t!==void 0)for(let[e,n]of t)this.elementProperties.set(e,n)}this._$Eh=new Map;for(let[e,t]of this.elementProperties){let n=this._$Eu(e,t);n!==void 0&&this._$Eh.set(n,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let n=new Set(e.flat(1/0).reverse());for(let e of n)t.unshift(wi(e))}else e!==void 0&&t.push(wi(e));return t}static _$Eu(e,t){let n=t.attribute;return!1===n?void 0:typeof n==`string`?n:typeof e==`string`?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map,t=this.constructor.elementProperties;for(let n of t.keys())this.hasOwnProperty(n)&&(e.set(n,this[n]),delete this[n]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Ci(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,n){this._$AK(e,n)}_$ET(e,t){let n=this.constructor.elementProperties.get(e),r=this.constructor._$Eu(e,n);if(r!==void 0&&!0===n.reflect){let i=(n.converter?.toAttribute===void 0?Ii:n.converter).toAttribute(t,n.type);this._$Em=e,i==null?this.removeAttribute(r):this.setAttribute(r,i),this._$Em=null}}_$AK(e,t){let n=this.constructor,r=n._$Eh.get(e);if(r!==void 0&&this._$Em!==r){let e=n.getPropertyOptions(r),i=typeof e.converter==`function`?{fromAttribute:e.converter}:e.converter?.fromAttribute===void 0?Ii:e.converter;this._$Em=r;let a=i.fromAttribute(t,e.type);this[r]=a??this._$Ej?.get(r)??a,this._$Em=null}}requestUpdate(e,t,n,r=!1,i){if(e!==void 0){let a=this.constructor;if(!1===r&&(i=this[e]),n??=a.getPropertyOptions(e),!((n.hasChanged??Li)(i,t)||n.useDefault&&n.reflect&&i===this._$Ej?.get(e)&&!this.hasAttribute(a._$Eu(e,n))))return;this.C(e,t,n)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(e,t,{useDefault:n,reflect:r,wrapped:i},a){n&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,a??t??this[e]),!0!==i||a!==void 0)||(this._$AL.has(e)||(this.hasUpdated||n||(t=void 0),this._$AL.set(e,t)),!0===r&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}let e=this.constructor.elementProperties;if(e.size>0)for(let[t,n]of e){let{wrapped:e}=n,r=this[t];!0!==e||this._$AL.has(t)||r===void 0||this.C(t,void 0,n,r)}}let e=!1,t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(e=>e.hostUpdate?.()),this.update(t)):this._$EM()}catch(t){throw e=!1,this._$EM(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(e){}firstUpdated(e){}};zi.elementStyles=[],zi.shadowRootOptions={mode:`open`},zi[Fi(`elementProperties`)]=new Map,zi[Fi(`finalized`)]=new Map,Pi?.({ReactiveElement:zi}),(ji.reactiveElementVersions??=[]).push(`2.1.2`);var Bi=globalThis,Vi=e=>e,Hi=Bi.trustedTypes,Ui=Hi?Hi.createPolicy(`lit-html`,{createHTML:e=>e}):void 0,Wi=`$lit$`,Gi=`lit$${Math.random().toFixed(9).slice(2)}$`,Ki=`?`+Gi,qi=`<${Ki}>`,Ji=document,Yi=()=>Ji.createComment(``),Xi=e=>e===null||typeof e!=`object`&&typeof e!=`function`,Zi=Array.isArray,Qi=e=>Zi(e)||typeof e?.[Symbol.iterator]==`function`,$i=`[ 	
\f\r]`,ea=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,ta=/-->/g,na=/>/g,ra=RegExp(`>|${$i}(?:([^\\s"'>=/]+)(${$i}*=${$i}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,`g`),ia=/'/g,aa=/"/g,oa=/^(?:script|style|textarea|title)$/i,sa=e=>(t,...n)=>({_$litType$:e,strings:t,values:n}),j=sa(1),M=sa(2),ca=Symbol.for(`lit-noChange`),N=Symbol.for(`lit-nothing`),la=new WeakMap,ua=Ji.createTreeWalker(Ji,129);function da(e,t){if(!Zi(e)||!e.hasOwnProperty(`raw`))throw Error(`invalid template strings array`);return Ui===void 0?t:Ui.createHTML(t)}var fa=(e,t)=>{let n=e.length-1,r=[],i,a=t===2?`<svg>`:t===3?`<math>`:``,o=ea;for(let t=0;t<n;t++){let n=e[t],s,c,l=-1,u=0;for(;u<n.length&&(o.lastIndex=u,c=o.exec(n),c!==null);)u=o.lastIndex,o===ea?c[1]===`!--`?o=ta:c[1]===void 0?c[2]===void 0?c[3]!==void 0&&(o=ra):(oa.test(c[2])&&(i=RegExp(`</`+c[2],`g`)),o=ra):o=na:o===ra?c[0]===`>`?(o=i??ea,l=-1):c[1]===void 0?l=-2:(l=o.lastIndex-c[2].length,s=c[1],o=c[3]===void 0?ra:c[3]===`"`?aa:ia):o===aa||o===ia?o=ra:o===ta||o===na?o=ea:(o=ra,i=void 0);let d=o===ra&&e[t+1].startsWith(`/>`)?` `:``;a+=o===ea?n+qi:l>=0?(r.push(s),n.slice(0,l)+Wi+n.slice(l)+Gi+d):n+Gi+(l===-2?t:d)}return[da(e,a+(e[n]||`<?>`)+(t===2?`</svg>`:t===3?`</math>`:``)),r]},pa=class e{constructor({strings:t,_$litType$:n},r){let i;this.parts=[];let a=0,o=0,s=t.length-1,c=this.parts,[l,u]=fa(t,n);if(this.el=e.createElement(l,r),ua.currentNode=this.el.content,n===2||n===3){let e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;(i=ua.nextNode())!==null&&c.length<s;){if(i.nodeType===1){if(i.hasAttributes())for(let e of i.getAttributeNames())if(e.endsWith(Wi)){let t=u[o++],n=i.getAttribute(e).split(Gi),r=/([.?@])?(.*)/.exec(t);c.push({type:1,index:a,name:r[2],strings:n,ctor:r[1]===`.`?va:r[1]===`?`?ya:r[1]===`@`?ba:_a}),i.removeAttribute(e)}else e.startsWith(Gi)&&(c.push({type:6,index:a}),i.removeAttribute(e));if(oa.test(i.tagName)){let e=i.textContent.split(Gi),t=e.length-1;if(t>0){i.textContent=Hi?Hi.emptyScript:``;for(let n=0;n<t;n++)i.append(e[n],Yi()),ua.nextNode(),c.push({type:2,index:++a});i.append(e[t],Yi())}}}else if(i.nodeType===8){if(i.data===Ki)c.push({type:2,index:a});else{let e=-1;for(;(e=i.data.indexOf(Gi,e+1))!==-1;)c.push({type:7,index:a}),e+=Gi.length-1}}a++}}static createElement(e,t){let n=Ji.createElement(`template`);return n.innerHTML=e,n}};function ma(e,t,n=e,r){if(t===ca)return t;let i=r===void 0?n._$Cl:n._$Co?.[r],a=Xi(t)?void 0:t._$litDirective$;return i?.constructor!==a&&(i?._$AO?.(!1),a===void 0?i=void 0:(i=new a(e),i._$AT(e,n,r)),r===void 0?n._$Cl=i:(n._$Co??=[])[r]=i),i!==void 0&&(t=ma(e,i._$AS(e,t.values),i,r)),t}var ha=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:n}=this._$AD,r=(e?.creationScope??Ji).importNode(t,!0);ua.currentNode=r;let i=ua.nextNode(),a=0,o=0,s=n[0];for(;s!==void 0;){if(a===s.index){let t;s.type===2?t=new ga(i,i.nextSibling,this,e):s.type===1?t=new s.ctor(i,s.name,s.strings,this,e):s.type===6&&(t=new xa(i,this,e)),this._$AV.push(t),s=n[++o]}a!==s?.index&&(i=ua.nextNode(),a++)}return ua.currentNode=Ji,r}p(e){let t=0;for(let n of this._$AV)n!==void 0&&(n.strings===void 0?n._$AI(e[t]):(n._$AI(e,n,t),t+=n.strings.length-2)),t++}},ga=class e{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,n,r){this.type=2,this._$AH=N,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=r,this._$Cv=r?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=ma(this,e,t),Xi(e)?e===N||e==null||e===``?(this._$AH!==N&&this._$AR(),this._$AH=N):e!==this._$AH&&e!==ca&&this._(e):e._$litType$===void 0?e.nodeType===void 0?Qi(e)?this.k(e):this._(e):this.T(e):this.$(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==N&&Xi(this._$AH)?this._$AA.nextSibling.data=e:this.T(Ji.createTextNode(e)),this._$AH=e}$(e){let{values:t,_$litType$:n}=e,r=typeof n==`number`?this._$AC(e):(n.el===void 0&&(n.el=pa.createElement(da(n.h,n.h[0]),this.options)),n);if(this._$AH?._$AD===r)this._$AH.p(t);else{let e=new ha(r,this),n=e.u(this.options);e.p(t),this.T(n),this._$AH=e}}_$AC(e){let t=la.get(e.strings);return t===void 0&&la.set(e.strings,t=new pa(e)),t}k(t){Zi(this._$AH)||(this._$AH=[],this._$AR());let n=this._$AH,r,i=0;for(let a of t)i===n.length?n.push(r=new e(this.O(Yi()),this.O(Yi()),this,this.options)):r=n[i],r._$AI(a),i++;i<n.length&&(this._$AR(r&&r._$AB.nextSibling,i),n.length=i)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){let t=Vi(e).nextSibling;Vi(e).remove(),e=t}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}},_a=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,n,r,i){this.type=1,this._$AH=N,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=i,n.length>2||n[0]!==``||n[1]!==``?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=N}_$AI(e,t=this,n,r){let i=this.strings,a=!1;if(i===void 0)e=ma(this,e,t,0),a=!Xi(e)||e!==this._$AH&&e!==ca,a&&(this._$AH=e);else{let r=e,o,s;for(e=i[0],o=0;o<i.length-1;o++)s=ma(this,r[n+o],t,o),s===ca&&(s=this._$AH[o]),a||=!Xi(s)||s!==this._$AH[o],s===N?e=N:e!==N&&(e+=(s??``)+i[o+1]),this._$AH[o]=s}a&&!r&&this.j(e)}j(e){e===N?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??``)}},va=class extends _a{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===N?void 0:e}},ya=class extends _a{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==N)}},ba=class extends _a{constructor(e,t,n,r,i){super(e,t,n,r,i),this.type=5}_$AI(e,t=this){if((e=ma(this,e,t,0)??N)===ca)return;let n=this._$AH,r=e===N&&n!==N||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,i=e!==N&&(n===N||r);r&&this.element.removeEventListener(this.name,this,n),i&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH==`function`?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},xa=class{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){ma(this,e)}},Sa=Bi.litHtmlPolyfillSupport;Sa?.(pa,ga),(Bi.litHtmlVersions??=[]).push(`3.3.3`);var Ca=(e,t,n)=>{let r=n?.renderBefore??t,i=r._$litPart$;if(i===void 0){let e=n?.renderBefore??null;r._$litPart$=i=new ga(t.insertBefore(Yi(),e),e,void 0,n??{})}return i._$AI(e),i},wa=globalThis,Ta=class extends zi{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Ca(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return ca}};Ta._$litElement$=!0,Ta.finalized=!0,wa.litElementHydrateSupport?.({LitElement:Ta});var Ea=wa.litElementPolyfillSupport;Ea?.({LitElement:Ta}),(wa.litElementVersions??=[]).push(`4.2.2`);var Da={attribute:!0,type:String,converter:Ii,reflect:!1,hasChanged:Li},Oa=(e=Da,t,n)=>{let{kind:r,metadata:i}=n,a=globalThis.litPropertyMetadata.get(i);if(a===void 0&&globalThis.litPropertyMetadata.set(i,a=new Map),r===`setter`&&((e=Object.create(e)).wrapped=!0),a.set(n.name,e),r===`accessor`){let{name:r}=n;return{set(n){let i=t.get.call(this);t.set.call(this,n),this.requestUpdate(r,i,e,!0,n)},init(t){return t!==void 0&&this.C(r,void 0,e,t),t}}}if(r===`setter`){let{name:r}=n;return function(n){let i=this[r];t.call(this,n),this.requestUpdate(r,i,e,!0,n)}}throw Error(`Unsupported decorator location: `+r)};function P(e){return(t,n)=>typeof n==`object`?Oa(e,t,n):((e,t,n)=>{let r=t.hasOwnProperty(n);return t.constructor.createProperty(n,e),r?Object.getOwnPropertyDescriptor(t,n):void 0})(e,t,n)}function F(e){return P({...e,state:!0,attribute:!1})}var ka=(e,t,n)=>(n.configurable=!0,n.enumerable=!0,Reflect.decorate&&typeof t!=`object`&&Object.defineProperty(e,t,n),n);function I(e,t){return(n,r,i)=>{let a=t=>t.renderRoot?.querySelector(e)??null;if(t){let{get:e,set:t}=typeof r==`object`?n:i??(()=>{let e=Symbol();return{get(){return this[e]},set(t){this[e]=t}}})();return ka(n,r,{get(){let n=e.call(this);return n===void 0&&(n=a(this),(n!==null||this.hasUpdated)&&t.call(this,n)),n}})}return ka(n,r,{get(){return a(this)}})}}var Aa;function ja(e){return(t,n)=>ka(t,n,{get(){return(this.renderRoot??(Aa??=document.createDocumentFragment())).querySelectorAll(e)}})}var Ma=1024,Na=1048576,Pa=1073741824,Fa=`NaN size`,Ia={ATTACHMENT_BROWSE:`Browse`,ATTACHMENT_DRAG_DROP_ZONE:`Drop files here.`},La={ATTACHMENT_BROWSE:`参照`,ATTACHMENT_DRAG_DROP_ZONE:`ここにファイルをドロップします。`},Ra={ATTACHMENT_BROWSE:`选择文件`,ATTACHMENT_DRAG_DROP_ZONE:`拖动文件到此。`},za={ATTACHMENT_BROWSE:`選擇檔案`,ATTACHMENT_DRAG_DROP_ZONE:`拖曳檔案到此。`},Ba={ATTACHMENT_BROWSE:`Examinar`,ATTACHMENT_DRAG_DROP_ZONE:`Suelte los archivos aquí.`},L={ITEMS:{IS_NOT_ARRAY:`'items' property is not array.`,IS_DUPLICATED:`'value' property is not unique in items.`,IS_NOT_SPECIFIED:`'value' property is not specified in items.`},FILES:{IS_NOT_ARRAY:`'files' property is not array.`},VALUE:{IS_NOT_ARRAY:`'value' property is not array.`,IS_NOT_STRING:`'value' property is not string.`},SELECTED_INDEX:{IS_NOT_ARRAY:`'selectedIndex' property is not array.`,IS_NOT_NUMBER:`'selectedIndex' property is not number.`},COLUMNS:{IS_NOT_ARRAY:`'columns' property is not array.`,FIELD_REQUIRED:`'field' property is not specified in columns.`,FIELD_UNIQUE:`'field' property is not unique in columns.`},ROWS_PER_PAGE:{INVALID:`'rowsPerPage' property is not positive integer.`},DATA:{IS_NOT_ARRAY:`'data' property is not array.`},CONTAINER:{INVALID:`'container' property is not HTMLElement.`},ACCEPT:{IS_NOT_STRING:`'accept' property is not string.`},MAX_FILES:{IS_NOT_NUMBER:`'maxFiles' property is not number.`}},Va={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Ha=e=>(...t)=>({_$litDirective$:e,values:t}),Ua=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,n){this._$Ct=e,this._$AM=t,this._$Ci=n}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}},Wa=class extends Ua{constructor(e){if(super(e),this.it=N,e.type!==Va.CHILD)throw Error(this.constructor.directiveName+`() can only be used in child bindings`)}render(e){if(e===N||e==null)return this._t=void 0,this.it=e;if(e===ca)return e;if(typeof e!=`string`)throw Error(this.constructor.directiveName+`() called with a non-string value`);if(e===this.it)return this._t;this.it=e;let t=[e];return t.raw=t,this._t={_$litType$:this.constructor.resultType,strings:t,values:[]}}};Wa.directiveName=`unsafeHTML`,Wa.resultType=1;var Ga=Ha(Wa),Ka={AM:`AM`,PM:`PM`},qa=`"max" must be greater than or equal to "min".`,Ja=`Time is out of valid range.`,Ya=`'timeStep' property is not number.`,Xa=`00:00`,Za=`23:59`,Qa={VALUE:`'value' property format is not valid.`,MAX:`'max' property format is not valid.`,MIN:`'min' property format is not valid.`,TIME_STEP:`'timeStep' property format is not valid.`},$a={MONTH_SELECT:[`JANUARY`,`FEBRUARY`,`MARCH`,`APRIL`,`MAY`,`JUNE`,`JULY`,`AUGUST`,`SEPTEMBER`,`OCTOBER`,`NOVEMBER`,`DECEMBER`],YEAR_SELECT_POSTFIX:``,WEEK_DAYS:[{text:`SUN`,abbr:`Sunday`},{text:`MON`,abbr:`Monday`},{text:`TUE`,abbr:`Tuesday`},{text:`WED`,abbr:`Wednesday`},{text:`THU`,abbr:`Thursday`},{text:`FRI`,abbr:`Friday`},{text:`SAT`,abbr:`Saturday`}],INVALID_FORMAT:`Format is not valid.`,INVALID_TIME_FORMAT:`Format is not valid.`,CALENDAR_FOOTER_TEXT:{none:`None`,today:`Today`,close:`Close`},TIME_IS_OUT_OF_VALID_RANGE:`Time is out of valid range.`},eo={MONTH_SELECT:[`1月`,`2月`,`3月`,`4月`,`5月`,`6月`,`7月`,`8月`,`9月`,`10月`,`11月`,`12月`],YEAR_SELECT_POSTFIX:`年`,WEEK_DAYS:[{text:`日`,abbr:`日`},{text:`月`,abbr:`月`},{text:`火`,abbr:`火`},{text:`水`,abbr:`水`},{text:`木`,abbr:`木`},{text:`金`,abbr:`金`},{text:`土`,abbr:`土`}],INVALID_FORMAT:`日付の形式が不正です。`,INVALID_TIME_FORMAT:`時刻の形式が不正です。`,CALENDAR_FOOTER_TEXT:{none:`選択を解除`,today:`今日`,close:`閉じる`},TIME_IS_OUT_OF_VALID_RANGE:`時刻が有効な範囲外です。`},to={MONTH_SELECT:[`1月`,`2月`,`3月`,`4月`,`5月`,`6月`,`7月`,`8月`,`9月`,`10月`,`11月`,`12月`],YEAR_SELECT_POSTFIX:`年`,WEEK_DAYS:[{text:`周日`,abbr:`周日`},{text:`周一`,abbr:`周一`},{text:`周二`,abbr:`周二`},{text:`周三`,abbr:`周三`},{text:`周四`,abbr:`周四`},{text:`周五`,abbr:`周五`},{text:`周六`,abbr:`周六`}],INVALID_FORMAT:`日期格式不正确。`,INVALID_TIME_FORMAT:`时间格式不正确。`,CALENDAR_FOOTER_TEXT:{none:`清空`,today:`今天`,close:`关闭`},TIME_IS_OUT_OF_VALID_RANGE:`时间超出有效范围。`},no={MONTH_SELECT:[`1月`,`2月`,`3月`,`4月`,`5月`,`6月`,`7月`,`8月`,`9月`,`10月`,`11月`,`12月`],YEAR_SELECT_POSTFIX:`年`,WEEK_DAYS:[{text:`週日`,abbr:`週日`},{text:`週一`,abbr:`週一`},{text:`週二`,abbr:`週二`},{text:`週三`,abbr:`週三`},{text:`週四`,abbr:`週四`},{text:`週五`,abbr:`週五`},{text:`週六`,abbr:`週六`}],INVALID_FORMAT:`日期格式錯誤。`,INVALID_TIME_FORMAT:`時間格式錯誤。`,CALENDAR_FOOTER_TEXT:{none:`清空`,today:`今天`,close:`關閉`},TIME_IS_OUT_OF_VALID_RANGE:`時間超出有效範圍。`},ro={MONTH_SELECT:[`ENERO`,`FEBRERO`,`MARZO`,`ABRIL`,`MAYO`,`JUNIO`,`JULIO`,`AGOSTO`,`SEPTIEMBRE`,`OCTUBRE`,`NOVIEMBRE`,`DICIEMBRE`],YEAR_SELECT_POSTFIX:``,WEEK_DAYS:[{text:`Do.`,abbr:`Domingo`},{text:`Lu.`,abbr:`Lunes`},{text:`Ma.`,abbr:`Martes`},{text:`Mi.`,abbr:`Miércoles`},{text:`Ju.`,abbr:`Jueves`},{text:`Vi.`,abbr:`Viernes`},{text:`Sá.`,abbr:`Sábado`}],INVALID_FORMAT:`Formato no válido.`,INVALID_TIME_FORMAT:`Formato no válido.`,CALENDAR_FOOTER_TEXT:{none:`Ninguno`,today:`Hoy`,close:`Cerrar`},TIME_IS_OUT_OF_VALID_RANGE:`La hora está fuera del rango válido.`},io=(e,t)=>{let n=Co(e,t),r=new Date(n.start),i=[],a=[];for(;r<=n.end;)i.push(_o(r)),i.length===7&&(a.push(i),i=[]),r.setDate(r.getDate()+1),r=new Date(r);return a},ao=(e,t,n,r)=>{let i=[],a=Math.round(t),o=so(r),s=so(n);if(a>0){let t=Math.floor((o-s)/a)+1;for(let n=0;n<t;n++){let t=oo(s+n*a,e);i.push(t)}}return i},oo=(e,t)=>{let n,r;n=Math.floor(e/60),r=e%60;let i=n%24<12?Ka.AM:Ka.PM;return n=t?n%12:n%24,n===0&&t&&(n=12),n<10&&(n=`0`+n),r<10&&(r=`0`+r),{label:n+`:`+r+(t?` `+i:``),value:n+`:`+r+(t?` `+i:``)}},so=e=>{let t=e.split(`:`),n=parseInt(t[0],10),r=parseInt(t[1],10);return isNaN(n)||isNaN(r)?0:(n<0?n=0:n>=24&&(n=23),r<0?r=0:r>=60&&(r=59),n*60+r)},co=(e,t)=>{let n=so(e),r=so(t);return n>r?1:n===r?0:-1},lo=(e,t)=>{let n=e.split(`:`),r=parseInt(n[0],10),i=parseInt(n[1],10),a=r%24;return isNaN(a)||isNaN(i)?{hours:``,minutes:``,suffix:``}:t?mo(r,i):{hours:R(a),minutes:R(i),suffix:``}},uo=(e,t)=>{let n={hours:``,minutes:``,suffix:``},r=e.split(`:`),i=parseInt(r[0],10),a=parseInt(r[1],10),o=i%24;return isNaN(o)||(n.hours=R(t?fo(o):o),n.suffix=t?po(o):``),isNaN(a)||(n.minutes=R(a)),n},fo=e=>{let t=e%12;return t=t===0?12:t,t},po=e=>e>=12?Ka.PM:Ka.AM,mo=(e,t)=>{let n=po(e);return{hours:R(fo(e)),minutes:R(t),suffix:n}},ho=e=>{let[t,n]=e.split(` `),[r,i]=t.split(`:`);return n?`${go(r,n)}:${i}`:e},go=(e,t)=>{let n=parseInt(e,10);return t===Ka.PM?R(n===12?12:n+12):R(n===12?0:n)},_o=e=>{let t=new Date(e),n=t.getFullYear(),r=R(t.getMonth()+1),i=R(t.getDate());return{text:`${t.getFullYear()}-${t.getMonth()+1}-${t.getDate()}`,attr:`${n}-${r}-${i}`}},vo=(e,t)=>{if(t&&!bo(t)){let n=t.split(`-`);if(n.length!==3)return t;let r=n[0],i=n[1],a=n[2];return e===`en`?`${i}/${a}/${r}`:`${r}-${i}-${a}`}return t},yo=(e,t)=>{if(bo(t))return t;let n=e===`en`,r=n?`/`:`-`,i=t.split(r);return`${n?i[2]:i[0]}-${n?i[0]:i[1]}-${n?i[1]:i[2]}`},bo=e=>e==null||e.length===0||!/[^(^\s*)|(\s*$)]/.test(e),xo=(e=`ja`)=>{let t=new Date,n=t.getFullYear(),r=R(t.getMonth()+1),i=R(t.getDate());return e===`ja`||e===`zh`?n+`-`+r+`-`+i:r+`/`+i+`/`+n},So=(e,t)=>{if(t&&!bo(t)){let n=e===`en`,r=n?`/`:`-`;return new Date(`${t}${n?``:`T00:00:00`}`).getDate()===parseInt(t.split(r)[n?1:2],10)?e===`en`?t.match(/^(0[1-9]|1[0-2])\/(0[1-9]|[12][0-9]|3[01])\/(\d{4})$/)!==null:t.match(/^(\d{4})-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/g)!==null:!1}return!1},R=(e,t=2)=>{let n=`0000000000${e}`;return n.substr(n.length-t)},Co=(e,t)=>{let n=new Date(e,t);n.setDate(1);let r=new Date(n);r.setDate(r.getDate()-r.getDay());let i=new Date(e,t);i.setMonth(i.getMonth()+1,0);let a=new Date(i);a.setDate(a.getDate()+(6-a.getDay()));let o=(a.getTime()-r.getTime())/864e5;return a.setDate(a.getDate()+(42-o)),{start:r,end:a}},z=e=>{switch(e){case`en`:return $a;case`zh`:return to;case`ja`:return eo;case`zh-TW`:return no;case`es`:return ro;default:return $a}},wo=(e=1)=>{let t=[];for(let n=0;n<=59;n+=e)t.push({value:R(n),label:R(n)});return t},To=(e=!1)=>e?Eo(`AM`).concat(Eo(`PM`)):Do(),Eo=e=>{let t=[];t.push({value:`${e} 12`,label:`${e} 12`});for(let n=1;n<=11;n++)t.push({value:`${e} ${R(n)}`,label:`${e} ${R(n)}`});return t},Do=()=>{let e=[];e.push({value:`00`,label:`00`});for(let t=1;t<=23;t++)e.push({value:R(t),label:`${R(t)}`});return e},Oo=()=>M`
    <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M0 0.5V1.2764L6 7.5L12 1.2764V0.5L6 6.5L0 0.5Z" fill="#888888"/>
    </svg>
    `,ko=()=>M`
    <svg
      class="kuc-base-datetime-calendar-header-1-26-0__group__button-icon"
      width="9"
      height="14"
      viewBox="0 0 9 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M3.06077 7L8.53044 1.53033L7.46978 0.469666L0.939453 7L7.46978 13.5303L8.53044 12.4697L3.06077 7Z"
        fill="#888888"
      />
    </svg>`,Ao=(e={})=>{let{anchorEl:t,popoverEl:n}=e;if(!n||!t)return;let{popoverHeight:r,popoverWidth:i}=e;if(!r)return;let a=t.getBoundingClientRect(),o=window.innerHeight>document.documentElement.clientHeight?document.documentElement.clientHeight:window.innerHeight,s=window.innerWidth>document.documentElement.clientWidth?document.documentElement.clientWidth:window.innerWidth,c=a.top,l=o-a.bottom,u,d;if(l>=r)u=a.bottom,d=r;else if(c>=r)u=a.top-r,d=r;else if(l>=c)u=a.bottom,d=l;else{d=c;let e=Math.min(r||d,d);u=Math.max(0,a.top-e)}n.style.right=`auto`;let f=a.left;if(i){let e=n.offsetWidth;s-a.left<e&&(f=a.right-e)}let p=`${f}px`;n.style.left!==p&&(n.style.left=p),n.style.top=`${u}px`,n.style.maxHeight=`${Math.floor(d)}px`,n.style.overflowY=`auto`};function jo(e){if(!e)return{width:0,height:0};let t=e.style.position,n=e.style.left,r=e.style.top,i=e.style.maxHeight;e.style.position=`fixed`,e.style.left=`-9999px`,e.style.top=`-9999px`,e.style.maxHeight=`none`;let a=e.getBoundingClientRect(),o=a.width||0,s=a.height||0;return e.style.position=t,e.style.left=n,e.style.top=r,e.style.maxHeight=i,{width:o,height:s}}function Mo(e){let t=[],n=e.parentElement,r=/(auto|scroll|overlay)/;for(;n&&n!==document.body&&n!==document.documentElement;){let e=getComputedStyle(n);(r.test(e.overflowY)||r.test(e.overflowX))&&t.push(n),n=n.parentElement}return t.push(window),t}var No=e=>{if(!e.parentElement)return{inputToBottom:0,inputToTop:0,inputToRight:0,inputToLeft:0,inputDateWidth:0,inputDateHeight:0};let t=e.closest(`kuc-base-date-1-26-0`)??e.closest(`kuc-mobile-base-date-1-26-0`),{left:n,top:r,bottom:i,width:a,height:o}=(t.getElementsByClassName(`kuc-base-date-1-26-0__input`)[0]??t.getElementsByClassName(`kuc-mobile-base-date-1-26-0__group`)[0]).getBoundingClientRect();return{inputToBottom:window.innerHeight-i,inputToTop:r,inputToRight:window.innerWidth-n,inputToLeft:n+a,inputDateWidth:a,inputDateHeight:o}},Po=()=>M`
    <svg
      class="kuc-base-datetime-calendar-header-1-26-0__group__button-icon"
      width="9"
      height="14"
      viewBox="0 0 9 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M5.93923 7L0.469557 1.53033L1.53022 0.469666L8.06055 7L1.53022 13.5303L0.469557 12.4697L5.93923 7Z"
        fill="#888888"
      />
    </svg>`,B={fromAttribute(e){return e===null},toAttribute(e){return e?null:``}},Fo={fromAttribute:e=>!e||[`en`,`ja`,`zh`,`zh-TW`,`es`].indexOf(e)===-1,toAttribute:e=>{let t=[`en`,`ja`,`zh`,`zh-TW`,`es`];return t.indexOf(e)===-1?t.indexOf(document.documentElement.lang)===-1?`en`:document.documentElement.lang:e}},Io=e=>e instanceof HTMLElement?e:Ga(e),Lo=e=>{if(e===void 0||e===``)return``;let t=[];return e.indexOf(`-`)>0&&(t=e.split(`-`)),t.length<2?`${e}-01-01`:t.length===2?`${R(t[0],4)}-${R(t[1])}-01`:t.length>2?`${R(t[0],4)}-${R(t[1])}-${R(t[2])}`:``},Ro=e=>{if(e.length===5||e===``)return e;let t=e.indexOf(`:`),n=e.substr(0,t),r=e.substr(t+1,5);return`${R(n)}:${R(r)}`},zo=[];for(let e=0;e<256;++e)zo.push((e+256).toString(16).slice(1));function Bo(e,t=0){return(zo[e[t+0]]+zo[e[t+1]]+zo[e[t+2]]+zo[e[t+3]]+`-`+zo[e[t+4]]+zo[e[t+5]]+`-`+zo[e[t+6]]+zo[e[t+7]]+`-`+zo[e[t+8]]+zo[e[t+9]]+`-`+zo[e[t+10]]+zo[e[t+11]]+zo[e[t+12]]+zo[e[t+13]]+zo[e[t+14]]+zo[e[t+15]]).toLowerCase()}var Vo=new Uint8Array(16);function Ho(){return crypto.getRandomValues(Vo)}function Uo(e,t,n){return!t&&!e&&crypto.randomUUID?crypto.randomUUID():Wo(e,t,n)}function Wo(e,t,n){e||={};let r=e.random??e.rng?.()??Ho();if(r.length<16)throw Error(`Random bytes length must be >= 16`);if(r[6]=r[6]&15|64,r[8]=r[8]&63|128,t){if(n||=0,n<0||n+16>t.length)throw RangeError(`UUID byte range ${n}:${n+15} is out of buffer bounds`);for(let e=0;e<16;++e)t[n+e]=r[e];return t}return Bo(r)}var V=class extends Ta{createRenderRoot(){return this}async throwErrorAfterUpdateComplete(e){throw await this.updateComplete,Error(e)}},H=(e,t,n)=>{let r=new CustomEvent(t,{detail:n,bubbles:!0,composed:!0});return e.dispatchEvent(r)},U=e=>{let t=`kuc-style-1-26-0`,n=document.getElementById(t);n||(n=document.createElement(`style`),n.id=t,document.head.appendChild(n)),n.appendChild(document.createTextNode(e))},W=()=>Uo(),Go=`
  kuc-base-error-1-26-0,
  kuc-base-error-1-26-0 *,
  kuc-base-error-1-26-0:lang(en),
  kuc-base-error-1-26-0:lang(en) * {
    font-family: sans-serif;
  }
  kuc-base-error-1-26-0:lang(es),
  kuc-base-error-1-26-0:lang(es) * {
    font-family: sans-serif;
  }
  kuc-base-error-1-26-0:lang(ja),
  kuc-base-error-1-26-0:lang(ja) * {
    font-family: "メイリオ", "Hiragino Kaku Gothic ProN", Meiryo,
      sans-serif;
  }
  kuc-base-error-1-26-0:lang(zh),
  kuc-base-error-1-26-0:lang(zh) * {
    font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,
      Hei, "Heiti SC", sans-serif;
  }
  kuc-base-error-1-26-0:lang(zh-TW),
  kuc-base-error-1-26-0:lang(zh-TW) * {
    font-family: "微軟正黑體","Microsoft JhengHei","新宋体",NSimSun,STHeiti,
      Hei,"Heiti SC",sans-serif;
  }
  kuc-base-error-1-26-0 {
    width: 100%;
    font-size: 14px;
    display: inline-table;
    vertical-align: top;
  }
  kuc-base-error-1-26-0[hidden] {
    display: none;
  }
  .kuc-base-error-1-26-0__error {
    line-height: 1.5;
    padding: 4px 18px;
    box-sizing: border-box;
    background-color: #e74c3c;
    color: #ffffff;
    margin: 8px 0px;
    word-break: break-all;
    white-space: normal;
  }
  .kuc-base-error-1-26-0__error[hidden] {
    display: none;
  }
`,Ko=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},qo=class extends V{constructor(){super(...arguments),this.ariaLive=``,this.guid=``,this.text=``}render(){return j`
      ${this.ariaLive&&this.ariaLive!==``?j`
              <div
                class="kuc-base-error-1-26-0__error"
                .id="${this.guid}-error"
                role="alert"
                aria-live="${this.ariaLive}"
                ?hidden="${!this.text}"
              >
                ${this.text}
              </div>
            `:j`
              <div
                class="kuc-base-error-1-26-0__error"
                .id="${this.guid}-error"
                role="alert"
                ?hidden="${!this.text}"
              >
                ${this.text}
              </div>
            `}
    `}};Ko([P({type:String})],qo.prototype,`ariaLive`,void 0),Ko([P({type:String})],qo.prototype,`guid`,void 0),Ko([P({type:String})],qo.prototype,`text`,void 0),window.customElements.get(`kuc-base-error-1-26-0`)||(U(Go),window.customElements.define(`kuc-base-error-1-26-0`,qo));var Jo=`
  kuc-base-label-1-26-0,
  kuc-base-label-1-26-0 *,
  kuc-base-label-1-26-0:lang(en),
  kuc-base-label-1-26-0:lang(en) * {
    font-family: sans-serif;
  }
  kuc-base-label-1-26-0:lang(es),
  kuc-base-label-1-26-0:lang(es) * {
    font-family: sans-serif;
  }
  kuc-base-label-1-26-0:lang(ja),
  kuc-base-label-1-26-0:lang(ja) * {
    font-family: "メイリオ", "Hiragino Kaku Gothic ProN", Meiryo,
    sans-serif;
  }
  kuc-base-label-1-26-0:lang(zh),
  kuc-base-label-1-26-0:lang(zh) * {
    font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,
    Hei, "Heiti SC", sans-serif;
  }
  kuc-base-label-1-26-0:lang(zh-TW),
  kuc-base-label-1-26-0:lang(zh-TW) * {
    font-family: "微軟正黑體","Microsoft JhengHei","新宋体",NSimSun,STHeiti,
      Hei,"Heiti SC",sans-serif;
  }
  kuc-base-label-1-26-0 {
    font-size: 14px;
    color: #333333;
    display: inline-table;
    vertical-align: top;
  }
  kuc-base-label-1-26-0[hidden] {
    display: none;
  }
  .kuc-base-label-1-26-0__required-icon {
    font-size: 20px;
    vertical-align: -3px;
    color: #e74c3c;
    margin-left: 4px;
    line-height: 1;
  }
  .kuc-base-label-1-26-0__required-icon[hidden] {
    display: none;
  }
`,Yo=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},Xo=class extends V{constructor(){super(...arguments),this.requiredIcon=!1,this.guid=``,this.text=``}render(){return j`
      ${this._getTextTemplate()}
      <span
        class="kuc-base-label-1-26-0__required-icon"
        ?hidden="${!this.requiredIcon}"
        >*</span
      >
    `}_getTextTemplate(){return this.guid&&this.guid!==``?j`
          <span class="kuc-base-label-1-26-0__text" .id="${this.guid}-group"
            >${this.text}</span
          >
        `:j` <span class="kuc-base-label-1-26-0__text">${this.text}</span> `}};Yo([P({type:Boolean})],Xo.prototype,`requiredIcon`,void 0),Yo([P({type:String})],Xo.prototype,`guid`,void 0),Yo([P({type:String})],Xo.prototype,`text`,void 0),window.customElements.get(`kuc-base-label-1-26-0`)||(U(Jo),window.customElements.define(`kuc-base-label-1-26-0`,Xo));function G(e){if(!e||typeof e!=`object`)return{};let t={...e};for(let e in t)Object.prototype.hasOwnProperty.call(t,e)&&t[e]===void 0&&delete t[e];return t}function Zo(e){return!!(e===``||e===void 0||/(^(\d{1,4})-(0?[1-9]|1[0-2])-(0?[1-9]|[12][0-9]|3[01])$)|(^(\d{1,4})$)|(^(\d{1,4})-(0?[1-9]|1[0-2])$)/g.test(e))}function Qo(e){return!!(e===``||/^(2[0-3]|[01]?[0-9]):([0-9]|[0-5][0-9])$/.test(e))}function $o(e,t,n){let r=Math.round(e),i=so(t),a=so(n);return!isNaN(r)&&r>0&&r<=i-a}function es(e){let[t,n,r]=e.split(`-`),i=new Date(`${e}T00:00:00`),a=i.getFullYear(),o=i.getMonth(),s=i.getDate();return a===Number(t)&&o===Number(n)-1&&s===Number(r)}function ts(e){return typeof e==`string`}function ns(e,t){return!(!/(^(\d{4})-(0[0-9]|1[0-2])-(0[1-9]|([12][0-9]|3[01]))$)|(^(\d{4})$)|(^(\d{4})-(0[0-9]|1[0-2])$)/g.test(e)||!/(^([01][0-9]|2[0-3])$)|(^([01][0-9]|2[0-3]):([0-5][0-9]))$|(^([01][0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9])$/.test(t))}function rs(e){return e.length<2||!e.some(t=>e.indexOf(t)!==e.lastIndexOf(t))}function is(e){return!(e<.5||!cs(e))}var as=e=>{for(let t=0;t<e.length;t++)if(!Object.prototype.hasOwnProperty.call(e[t],`field`))return!1;return!0},os=e=>{let t=e.map(e=>e.field);return t.some(function(e,n){return t.indexOf(e)!==n})};function ss(e){return/^[1-9]\d*$/.test(e)}function cs(e){return typeof e==`number`&&!Number.isNaN(e)}function K(e){return Array.isArray(e)}var ls=e=>{if(e instanceof HTMLElement)return!0;let t=document.createElement(`div`);return t.innerHTML=e,t.childElementCount>0},us=`
  kuc-attachment-1-26-0,
  kuc-attachment-1-26-0 *,
  kuc-attachment-1-26-0:lang(en),
  kuc-attachment-1-26-0:lang(en) * {
    font-family: sans-serif;
  }
  kuc-attachment-1-26-0:lang(ja),
  kuc-attachment-1-26-0:lang(ja) * {
    font-family: "メイリオ", "Hiragino Kaku Gothic ProN", Meiryo,
        sans-serif;
  }
  kuc-attachment-1-26-0:lang(zh),
  kuc-attachment-1-26-0:lang(zh) * {
    font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,
        Hei, "Heiti SC", sans-serif;
  }
  kuc-attachment-1-26-0:lang(zh-TW),
  kuc-attachment-1-26-0:lang(zh-TW) * {
    font-family: "微軟正黑體","Microsoft JhengHei","新宋体",NSimSun,STHeiti,
        Hei,"Heiti SC",sans-serif;
  }
  kuc-attachment-1-26-0:lang(es),
  kuc-attachment-1-26-0:lang(es) * {
    font-family: sans-serif;
  }
  kuc-attachment-1-26-0 {
    font-size: 14px;
    display: inline-table;
    vertical-align: top;
    width: var(--kuc-attachment-width, 191px);
    min-width: var(--kuc-attachment-width, 191px);
  }
  kuc-attachment-1-26-0[hidden] {
    display: none;
  }
  .kuc-attachment-1-26-0__group {
    width: 100%;
    height: auto;
    box-sizing: border-box;
    position: relative;
    display: block;
  }
  .kuc-attachment-1-26-0__group__label {
    display: inline-block;
    padding: 4px 0 8px 0;
    color: #333333;
    white-space: nowrap;
  }
  .kuc-attachment-1-26-0__group__label[hidden] {
    display: none;
  }
  .kuc-attachment-1-26-0__group__files {
    border: solid 1px #e3e7e8;
    background-color: #eeeeee;
    padding: 16px 4px;
    display: block;
    font-size: 14px;
    overflow: hidden;
    position: relative;
    box-sizing: border-box;
    width: var(--kuc-attachment-width, auto);
    height: var(--kuc-attachment-height, auto);
  }
  .kuc-attachment-1-26-0__group__files--disabled {
    cursor: not-allowed;
  }
  .kuc-attachment-1-26-0__group__files__browse-button {
    border: 1px solid transparent;
    position: relative;
    display: inline-block;
    margin-right: 16px;
    padding: 8px;
    text-decoration: none;
  }
  .kuc-attachment-1-26-0__group__files__browse-button[hidden]{
    display: none;
  }
  .kuc-attachment-1-26-0__group__files__browse-button:focus-within {
    border: 1px solid #3498db;
  }
  .kuc-attachment-1-26-0__group__files__browse-button:hover
  .kuc-attachment-1-26-0__group__files__browse-button__text {
    color: #217dbb;
  }
  .kuc-attachment-1-26-0__group__files__browse-button__text {
    color: #3498db;
    font-size: 14px;
  }
  .kuc-attachment-1-26-0__group__files__browse-button__input-container {
    opacity: 0;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    overflow: hidden;
    display: inline-block;
  }
  .kuc-attachment-1-26-0__group__files__browse-button__input-container__input {
    cursor: pointer;
    font-size: 999px;
    vertical-align: middle;
    height: 100%;
    width: 100%;
    line-height: 1.5;
  }
  .kuc-attachment-1-26-0__group__files__display-area {
    padding-inline-start: 0px;
    list-style-type: disc;
    margin-block-start: 0em;
    margin-block-end: 0em;
  }
  .kuc-attachment-1-26-0__group__files__display-area__item {
    position: relative;
    margin-bottom: 8px;
    height: auto;
    min-height: 24px;
    border: 2px solid #f1f4f5;
    background-color: #f1f4f5;
    list-style: none;
    display: flex;
    align-items: center;
  }
  .kuc-attachment-1-26-0__group__files__display-area__item__name {
    display: inline-block;
    padding: 3px calc(4.6em + 4px) 3px 26px;
    width: 100%;
    max-width: 177px;
    box-sizing: border-box;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    word-wrap: normal;
    font-size: var(--kuc-attachment-item-font-size, 14px);
    line-height: 1.2;
  }
  .kuc-attachment-1-26-0__group__files__display-area__item__remove-button__container {
    display: inline-block;
    position: absolute;
    top: calc(50% - 12px);
    left: 0;
    width: 24px;
    height: 24px;
  }
  .kuc-attachment-1-26-0__group__files__display-area__item__remove-button__container[hidden] {
    display: none;
  }
  .kuc-attachment-1-26-0__group__files__display-area__item__remove-button__container__button {
    background-color: #f2f4f6;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid transparent;
    padding: 0px;
    width:100%;
    height:100%;
  }
  .kuc-attachment-1-26-0__group__files__display-area__item__remove-button__container__button:hover {
    background: #d8e1e6;
  }
  .kuc-attachment-1-26-0__group__files__display-area__item__remove-button__container__button:focus-within {
    border: 1px solid #3498db;
  }
  .kuc-attachment-1-26-0__group__files__display-area__item__remove-button__container__button:focus {
    outline: none;
  }
  .kuc-attachment-1-26-0__group__files__display-area__item__size {
    display: inline-block;
    position: absolute;
    right: 0;
    color: #888888;
    padding: 0 3px 0 0;
    max-width: 4.6em;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    word-wrap: normal;
    font-size: var(--kuc-attachment-item-font-size, 14px);
    line-height: 1.2;
  }
  .kuc-attachment-1-26-0__group__files__droppable {
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    margin: auto 0;
  }
  .kuc-attachment-1-26-0__group__files__droppable[hidden] {
    display: none;
  }
  .kuc-attachment-1-26-0__group__files__droppable__text {
    background-color: #e2f2fe;
    border: dashed 2px #3498db;
    display: table-cell;
    vertical-align: middle;
    text-align: center;
    color: #3498db;
    font-size: 14px;
  }
  .kuc-attachment-1-26-0__group__files__browse-message {
    display: inline-block;
    color: var(--kuc-attachment-message-color, #888888);
    font-size: var(--kuc-attachment-message-font-size, 14px);
    margin: 3px 0 0;
    word-break: break-all;
  }
  .kuc-attachment-1-26-0__group__files__browse-message--disabled {
    color: #888888;
  }
  .kuc-attachment-1-26-0__group__files__browse-message[hidden] {
    display: none;
  }
  .kuc-attachment-1-26-0__group__files__not-droppable--dragenter {
    visibility: hidden;
  }
`,ds=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},fs;(()=>{if(fs=window.customElements.get(`kuc-attachment-1-26-0`),fs)return;class e extends V{constructor(e){super(),this.accept=``,this.className=``,this.error=``,this.id=``,this.label=``,this.language=`auto`,this.message=``,this.disabled=!1,this.requiredIcon=!1,this.visible=!0,this.files=[],this._isDraging=!1,this._dragEnterCounter=0,this._locale=this._getLocale(),this._isFileOrDirectoryDrag=e=>{if(!e.dataTransfer)return!1;if(e.dataTransfer.items!==void 0){for(let t=0;t<e.dataTransfer.items.length;t++)if(e.dataTransfer.items[t].kind.toLowerCase()===`file`)return!0}if(e.dataTransfer.types!==void 0){for(let t=0;t<e.dataTransfer.types.length;t++)if(e.dataTransfer.types[t].toLowerCase()===`files`)return!0}return!1},this._GUID=W();let t=G(e);Object.assign(this,t)}shouldUpdate(e){return e.has(`files`)&&!K(this.files)?(this.throwErrorAfterUpdateComplete(L.FILES.IS_NOT_ARRAY),!1):e.has(`accept`)&&!ts(this.accept)?(this.throwErrorAfterUpdateComplete(L.ACCEPT.IS_NOT_STRING),!1):e.has(`maxFiles`)&&this.maxFiles!==void 0&&!cs(this.maxFiles)?(this.throwErrorAfterUpdateComplete(L.MAX_FILES.IS_NOT_NUMBER),!1):!0}willUpdate(e){e.has(`language`)&&(this._locale=this._getLocale())}render(){return j`
        <div class="kuc-attachment-1-26-0__group">
          <label
            class="kuc-attachment-1-26-0__group__label"
            ?hidden="${!this.label}"
            for="${this._GUID}-input"
            @click="${this._handleClickLabel}"
          >
            <kuc-base-label-1-26-0
              .text="${this.label}"
              .requiredIcon="${this.requiredIcon}"
            ></kuc-base-label-1-26-0>
          </label>
          <div
            class="kuc-attachment-1-26-0__group__files ${this.disabled?` kuc-attachment-1-26-0__group__files--disabled`:``}"
            @dragenter="${this._handleDragEnter}"
            @dragover="${this._handleDragOver}"
            @dragleave="${this._handleDragLeave}"
            @drop="${this._handleDragDrop}"
          >
            <div
              class="kuc-attachment-1-26-0__group__files__droppable"
              ?hidden="${!this._isDraging}"
            >
              <div class="kuc-attachment-1-26-0__group__files__droppable__text">
                ${this._locale.ATTACHMENT_DRAG_DROP_ZONE}
              </div>
            </div>
            <ul
              class="kuc-attachment-1-26-0__group__files__display-area${this._isDraging?` kuc-attachment-1-26-0__group__files__not-droppable--dragenter`:``}"
            >
              ${this.files.map((e,t)=>this._getAttachmentItemTemplate(e,t))}
            </ul>
            <div
              class="kuc-attachment-1-26-0__group__files__browse-button${this._isDraging?` kuc-attachment-1-26-0__group__files__not-droppable--dragenter`:``}"
              ?hidden="${this.disabled||this._isMaxFilesReached()}"
            >
              <span class="kuc-attachment-1-26-0__group__files__browse-button__text"
                >${this._locale.ATTACHMENT_BROWSE}</span
              >
              <div
                class="kuc-attachment-1-26-0__group__files__browse-button__input-container"
              >
                <input
                  class="kuc-attachment-1-26-0__group__files__browse-button__input-container__input"
                  type="file"
                  multiple
                  .id="${this._GUID}-input"
                  accept="${this.accept}"
                  aria-required="${this.requiredIcon}"
                  aria-invalid="${this.error}"
                  aria-describedby="${this._GUID}-error"
                  @change="${this._handleChangeFiles}"
                />
              </div>
            </div>
            <p
              class="kuc-attachment-1-26-0__group__files__browse-message${this.disabled?` kuc-attachment-1-26-0__group__files__browse-message--disabled`:``}"
              ?hidden="${!this.message}"
            >
              ${this.message}
            </p>
          </div>
          <kuc-base-error-1-26-0
            class="kuc-attachment-1-26-0__error"
            ?hidden="${!this.error}"
            .text="${this.error}"
            .guid="${this._GUID}"
          ></kuc-base-error-1-26-0>
        </div>
      `}_getAttachmentItemTemplate(e,t){return j`
        <li class="kuc-attachment-1-26-0__group__files__display-area__item">
          <div
            title="${e.name||``}"
            class="kuc-attachment-1-26-0__group__files__display-area__item__name"
          >
            ${e.name||``}
          </div>
          <div
            class="kuc-attachment-1-26-0__group__files__display-area__item__remove-button__container"
            ?hidden="${this.disabled}"
          >
            <button
              class="kuc-attachment-1-26-0__group__files__display-area__item__remove-button__container__button"
              type="button"
              aria-label="Cancel File"
              data-file-index="${t}"
              @click="${this._handleClickFileRemove}"
              tabindex="0"
            >
              ${this._getRemoveButtonIcon()}
            </button>
          </div>
          <span class="kuc-attachment-1-26-0__group__files__display-area__item__size">
            ${this._getFileSize(e.size)}
          </span>
        </li>
      `}async updated(e){await this.updateComplete,this._updateFileNameMaxWidth()}_updateFileNameMaxWidth(){let e=this._labelEl.getBoundingClientRect().width;this._fileItemsEl.forEach(t=>{t.style.maxWidth=`calc(var(--kuc-attachment-width, ${e<191?191:e}px) - 14px)`})}_getRemoveButtonIcon(){return M`<svg
        xmlns="http://www.w3.org/2000/svg"
        width="14"
        height="14"
        viewBox="0 0 14 14"
        fill="none"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M5.93933 7.00001L1.96966 3.03034L1.43933 2.50001L2.49999 1.43935L3.03032 1.96968L6.99999 5.93935L10.9697 1.96968L11.5 1.43935L12.5607 2.50001L12.0303 3.03034L8.06065 7.00001L12.0303 10.9697L12.5607 11.5L11.5 12.5607L10.9697 12.0303L6.99999 8.06067L3.03032 12.0303L2.49999 12.5607L1.43933 11.5L1.96966 10.9697L5.93933 7.00001Z"
          fill="#a8a8a8"
        />
      </svg>`}_getLanguage(){let e=[`en`,`ja`,`zh`,`zh-TW`,`es`];return e.indexOf(this.language)===-1?e.indexOf(document.documentElement.lang)===-1?`en`:document.documentElement.lang:this.language}_getLocale(){switch(this._getLanguage()){case`en`:return Ia;case`zh`:return Ra;case`zh-TW`:return za;case`ja`:return La;case`es`:return Ba;default:return Ia}}_handleClickFileRemove(e){let t=e.currentTarget,n=parseInt(t.getAttribute(`data-file-index`),10);if(this.files){n===this.files.length-1&&this._inputEl.focus();let e=[...this.files];this.files.splice(n,1);let t={oldFiles:e,files:this.files,type:`remove-file`,fileIndex:[n]};H(this,`change`,t),this.requestUpdate(),n<=this.files.length-1&&this._fileRemoveButtons[n].focus()}}_handleClickLabel(e){e.preventDefault()}_handleDragEnter(e){this.disabled||this._isMaxFilesReached()||(this._dragEnterCounter++,this._dragEnterCounter===1&&this._isFileOrDirectoryDrag(e)&&(e.preventDefault(),this._groupFilesEl.style.height=this._groupFilesEl.getBoundingClientRect().height+`px`,this._dragTextEl.style.width=this._groupFilesEl.getBoundingClientRect().width-2+`px`,this._dragTextEl.style.height=this._groupFilesEl.getBoundingClientRect().height-6+`px`,this._isDraging=!0))}_handleDragOver(e){this.disabled||(e.stopPropagation(),this._isFileOrDirectoryDrag(e)&&e.preventDefault())}_handleDragDrop(e){!this.disabled&&this._isDraging&&(e.preventDefault(),this._handleDragLeave(),this._isFileDrop(e)&&this._addFiles(e))}_isFileDrop(e){if(e.dataTransfer&&e.dataTransfer.items){for(let t=0;t<e.dataTransfer.items.length;t++)if(typeof e.dataTransfer.items[t].webkitGetAsEntry==`function`&&e.dataTransfer.items[t].webkitGetAsEntry()?.isDirectory)return!1}return!0}_handleDragLeave(){this.disabled||(this._dragEnterCounter--,this._dragEnterCounter===0&&(this._groupFilesEl.style.height=`var(--kuc-attachment-height, auto)`,this._isDraging=!1))}_handleChangeFiles(e){e.preventDefault(),e.stopPropagation(),this._addFiles(e)}_addFiles(e){if(this.files){let t=e.dataTransfer?e.dataTransfer.files:e.target.files;if(t=Object.keys(t).map(e=>t[e]),this.accept&&(t=t.filter(e=>this._matchesAccept(e))),this._hasMaxFilesLimit()){let e=Math.max(0,this._effectiveMaxFiles()-this.files.length);t=t.slice(0,e)}if(t.length===0){this._inputEl.value=``;return}let n=[...this.files],r=t.map((e,t)=>n.length+t);t.forEach(e=>this.files.push(e));let i={oldFiles:n,files:this.files,type:`add-file`,fileIndex:r};H(this,`change`,i),this.requestUpdate()}this._inputEl.value=``}_matchesAccept(e){let t=this.accept.split(`,`).map(e=>e.trim().toLowerCase()).filter(e=>e&&(e.startsWith(`.`)||e.includes(`/`)));if(t.length===0)return!0;let n=e.name.toLowerCase(),r=e.type.toLowerCase();return t.some(e=>{if(e===`*/*`)return!0;if(e.startsWith(`.`))return n.endsWith(e);if(e.endsWith(`/*`)){let t=e.slice(0,-1);return r.startsWith(t)}return r===e})}_hasMaxFilesLimit(){return this.maxFiles!==void 0&&this.maxFiles>=1}_effectiveMaxFiles(){return Math.floor(this.maxFiles)}_isMaxFilesReached(){return this._hasMaxFilesLimit()&&this.files.length>=this._effectiveMaxFiles()}_getFileSize(e){return typeof e==`number`?this._formatFileSize(e):ss(e)?this._formatFileSize(parseInt(e,10)):Fa}_formatFileSize(e){return e>=1073741824?Math.round(e/Pa)+` GB`:e>=1048576?Math.round(e/Na)+` MB`:e>=1024?Math.round(e/Ma)+` KB`:Math.round(e)+` bytes`}}ds([P({type:String})],e.prototype,`accept`,void 0),ds([P({type:String,reflect:!0,attribute:`class`})],e.prototype,`className`,void 0),ds([P({type:String})],e.prototype,`error`,void 0),ds([P({type:String,reflect:!0,attribute:`id`})],e.prototype,`id`,void 0),ds([P({type:String})],e.prototype,`label`,void 0),ds([P({type:String,attribute:`lang`,reflect:!0,converter:Fo})],e.prototype,`language`,void 0),ds([P({type:String})],e.prototype,`message`,void 0),ds([P({type:Boolean})],e.prototype,`disabled`,void 0),ds([P({type:Boolean})],e.prototype,`requiredIcon`,void 0),ds([P({type:Boolean,attribute:`hidden`,reflect:!0,converter:B})],e.prototype,`visible`,void 0),ds([P({type:Number})],e.prototype,`maxFiles`,void 0),ds([P({type:Array})],e.prototype,`files`,void 0),ds([F()],e.prototype,`_isDraging`,void 0),ds([I(`.kuc-attachment-1-26-0__group__files`)],e.prototype,`_groupFilesEl`,void 0),ds([I(`.kuc-attachment-1-26-0__group__files__droppable__text`)],e.prototype,`_dragTextEl`,void 0),ds([I(`.kuc-attachment-1-26-0__group__files__browse-button__input-container__input`)],e.prototype,`_inputEl`,void 0),ds([I(`.kuc-attachment-1-26-0__group__label`)],e.prototype,`_labelEl`,void 0),ds([ja(`.kuc-attachment-1-26-0__group__files__display-area__item__name`)],e.prototype,`_fileItemsEl`,void 0),ds([ja(`.kuc-attachment-1-26-0__group__files__display-area__item__remove-button__container__button`)],e.prototype,`_fileRemoveButtons`,void 0),window.customElements.define(`kuc-attachment-1-26-0`,e),U(us),fs=e})();var ps=`
  kuc-button-1-26-0,
  kuc-button-1-26-0 *,
  kuc-button-1-26-0:lang(en),
  kuc-button-1-26-0:lang(en) * {
    font-family: sans-serif;
  }
  kuc-button-1-26-0:lang(es),
  kuc-button-1-26-0:lang(es) * {
    font-family: sans-serif;
  }
  kuc-button-1-26-0:lang(ja),
  kuc-button-1-26-0:lang(ja) * {
    font-family: "メイリオ", "Hiragino Kaku Gothic ProN", Meiryo, sans-serif;
  }
  kuc-button-1-26-0:lang(zh),
  kuc-button-1-26-0:lang(zh) * {
    font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti, Hei,
      "Heiti SC", sans-serif;
  }
  kuc-button-1-26-0:lang(zh-TW),
  kuc-button-1-26-0:lang(zh-TW) * {
    font-family: "微軟正黑體","Microsoft JhengHei","新宋体",NSimSun,STHeiti,
      Hei,"Heiti SC",sans-serif;
  }
  kuc-button-1-26-0 {
    display: inline-block;
    vertical-align: top;
  }
  kuc-button-1-26-0[hidden] {
    display: none;
  }
  .kuc-button-1-26-0__button {
    display: grid;
    align-items: center;
    align-content: center;
    font-size: var(--kuc-button-font-size, 16px);
    width: var(--kuc-button-width, "auto");
    height: var(--kuc-button-height, 48px);
    min-width: var(--kuc-button-width, 163px);
    padding: 0px 16px;
    user-select: none;
    white-space: nowrap;
  }
  .kuc-button-1-26-0__button--normal {
    background-color: var(--kuc-button-background-color, #f7f9fa);
    color: var(--kuc-button-text-color, #3498db);
    border: 1px solid #e3e7e8;
  }
  .kuc-button-1-26-0__button--normal:hover,
  .kuc-button-1-26-0__button--normal:focus-visible,
  .kuc-button-1-26-0__button--normal:active {
    cursor: pointer;
  }
  .kuc-button-1-26-0__button--normal:hover {
    background-color: var(--kuc-button-background-color-hover, #c8d6dd);
  }
  .kuc-button-1-26-0__button--normal:focus-visible {
    background-color: var(--kuc-button-background-color-focus, #c8d6dd);
  }
  .kuc-button-1-26-0__button--normal:active {
    background-color: var(--kuc-button-background-color-active, #c8d6dd);
  }
  .kuc-button-1-26-0__button--submit {
    background-color: var(--kuc-button-background-color, #3498db);
    color: var(--kuc-button-text-color, #ffffff);
    border: 1px solid #e3e7e8;
  }
  .kuc-button-1-26-0__button--submit:hover,
  .kuc-button-1-26-0__button--submit:focus-visible,
  .kuc-button-1-26-0__button--submit:active {
    cursor: pointer;
  }
  .kuc-button-1-26-0__button--submit:hover {
    background-color: var(--kuc-button-background-color-hover, #1d6fa5);
  }
  .kuc-button-1-26-0__button--submit:focus-visible {
    background-color: var(--kuc-button-background-color-focus, #1d6fa5);
  }
  .kuc-button-1-26-0__button--submit:active {
    background-color: var(--kuc-button-background-color-active, #1d6fa5);
  }
  .kuc-button-1-26-0__button--alert {
    background-color: var(--kuc-button-background-color, #e74c3c);
    color: var(--kuc-button-text-color, #ffffff);
    border: 1px solid #e3e7e8;
  }
  .kuc-button-1-26-0__button--alert:hover,
  .kuc-button-1-26-0__button--alert:focus-visible,
  .kuc-button-1-26-0__button--alert:active {
    cursor: pointer;
  }
  .kuc-button-1-26-0__button--alert:hover {
    background-color: var(--kuc-button-background-color-hover, #bf2718);
  }
  .kuc-button-1-26-0__button--alert:focus-visible {
    background-color: var(--kuc-button-background-color-focus, #bf2718);
  }
  .kuc-button-1-26-0__button--alert:active {
    background-color: var(--kuc-button-background-color-active, #bf2718);
  }
  .kuc-button-1-26-0__button:disabled {
    background-color: #d4d7d7;
    border: 1px solid #e3e7e8;
    color: #888888;
    cursor: not-allowed;
  }
  .kuc-button-1-26-0__button--normal:focus-visible,
  .kuc-button-1-26-0__button--submit:focus-visible,
  .kuc-button-1-26-0__button--alert:focus-visible {
    outline: 1px solid #3498db;
  }
`,ms=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},hs;(()=>{if(hs=window.customElements.get(`kuc-button-1-26-0`),hs)return;class e extends V{constructor(e){super(),this.className=``,this.id=``,this.text=``,this.type=`normal`,this.content=``,this.disabled=!1,this.visible=!0,this._content=``;let t=G(e);Object.assign(this,t)}_handleClickButton(e){e.stopPropagation(),H(this,`click`)}_getButtonColorType(){return this.type===`normal`||this.type===`submit`||this.type===`alert`?this.type:`normal`}willUpdate(e){(e.has(`content`)||e.has(`text`))&&(this._content=this.content!==null&&this.content!==void 0&&this.content!==``?ls(this.content)?Io(this.content):this.content:this.text)}render(){return j`
        <button
          type="button"
          class="kuc-button-1-26-0__button kuc-button-1-26-0__button--${this._getButtonColorType()}"
          ?disabled="${this.disabled}"
          @click="${this._handleClickButton}"
        >
          ${this._content}
        </button>
      `}}ms([P({type:String,reflect:!0,attribute:`class`})],e.prototype,`className`,void 0),ms([P({type:String,reflect:!0,attribute:`id`})],e.prototype,`id`,void 0),ms([P({type:String})],e.prototype,`text`,void 0),ms([P({type:String})],e.prototype,`type`,void 0),ms([P()],e.prototype,`content`,void 0),ms([P({type:Boolean})],e.prototype,`disabled`,void 0),ms([P({type:Boolean,attribute:`hidden`,reflect:!0,converter:B})],e.prototype,`visible`,void 0),window.customElements.define(`kuc-button-1-26-0`,e),U(ps),hs=e})();var gs=hs,_s=`
  kuc-checkbox-1-26-0,
  kuc-checkbox-1-26-0 *,
  kuc-checkbox-1-26-0:lang(en),
  kuc-checkbox-1-26-0:lang(en) * {
    font-family: sans-serif;
  }
  kuc-checkbox-1-26-0:lang(es),
  kuc-checkbox-1-26-0:lang(es) * {
    font-family: sans-serif;
  }
  kuc-checkbox-1-26-0:lang(ja),
  kuc-checkbox-1-26-0:lang(ja) * {
    font-family: "メイリオ", "Hiragino Kaku Gothic ProN", Meiryo,
      sans-serif;
  }
  kuc-checkbox-1-26-0:lang(zh),
  kuc-checkbox-1-26-0:lang(zh) * {
    font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,
      Hei, "Heiti SC", sans-serif;
  }
  kuc-checkbox-1-26-0:lang(zh-TW),
  kuc-checkbox-1-26-0:lang(zh-TW) * {
    font-family: "微軟正黑體","Microsoft JhengHei","新宋体",NSimSun,STHeiti,
      Hei,"Heiti SC",sans-serif;
  }
  kuc-checkbox-1-26-0 {
    font-size: 14px;
    color: #333333;
    display: inline-table;
    vertical-align: top;
    width: var(--kuc-checkbox-menu-width, 239px);
    min-width: var(--kuc-checkbox-menu-width, 239px);
    line-height: 1.5;
  }
  kuc-checkbox-1-26-0[hidden] {
    display: none;
  }
  .kuc-checkbox-1-26-0__group {
    border: none;
    padding: 0px;
    height: auto;
    display: inline-block;
    width: 100%;
    margin: 0px;
  }
  .kuc-checkbox-1-26-0__group__select-menu {
    white-space: nowrap;
    width: var(--kuc-checkbox-menu-width, auto);
    height: var(--kuc-checkbox-menu-height, auto);
    color: var(--kuc-checkbox-menu-color, #333333);
    font-size: var(--kuc-checkbox-menu-font-size, 14px);
    display: flex;
    align-items: flex-start;
  }
  .kuc-checkbox-1-26-0__group__select-menu[itemLayout="vertical"] {
    display: block;
  }
  .kuc-checkbox-1-26-0__group__label {
    display: inline-block;
    padding: 4px 0 8px 0;
    white-space: nowrap;
  }
  .kuc-checkbox-1-26-0__group__label[hidden] {
    display: none;
  }
  .kuc-checkbox-1-26-0__group__select-menu[borderVisible] {
    border-color: #e3e7e8;
    border-width: 1px;
    border-style: solid;
    padding: 4px 0 0 4px;
  }
  .kuc-checkbox-1-26-0__group__select-menu__item {
    margin-bottom: 4px;
    margin-right: 16px;
    padding: 4px;
    border: 1px solid transparent;
    position: relative;
    white-space: normal;
    word-wrap: normal;
    display: flex;
    align-items: center;
  }
  .kuc-checkbox-1-26-0__group__select-menu__item[focused] {
    border: 1px solid #3498db;
  }
  .kuc-checkbox-1-26-0__group__select-menu__item__input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
  }
  .kuc-checkbox-1-26-0__group__select-menu__item__input:hover
    + .kuc-checkbox-1-26-0__group__select-menu__item__label {
    color: var(--kuc-checkbox-menu-color-hover, #666666);
  }
  .kuc-checkbox-1-26-0__group__select-menu__item__label__icon {
    position: absolute;
    left: -30px;
    box-sizing: border-box;
    width: 21px;
    height: 21px;
    box-shadow: 1px 1px 3px #f5f5f5 inset, -1px -1px 3px #f5f5f5 inset;
    content: "";
  }
  .kuc-checkbox-1-26-0__group__select-menu__item__input[disabled]
    + .kuc-checkbox-1-26-0__group__select-menu__item__label {
    color: #888888;
    cursor: not-allowed;
  }
  .kuc-checkbox-1-26-0__group__select-menu__item__label {
    cursor: pointer;
    position: relative;
    margin-left: 32px;
    display: flex;
    align-items: center;
    vertical-align: middle;
    white-space: nowrap;
    min-height: 24px;
    line-height: 1.2;
  }
  `,vs=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},ys;(()=>{if(ys=window.customElements.get(`kuc-checkbox-1-26-0`),ys)return;class e extends V{constructor(e){super(),this.className=``,this.error=``,this.id=``,this.itemLayout=`horizontal`,this.label=``,this.borderVisible=!0,this.disabled=!1,this.requiredIcon=!1,this.visible=!0,this.items=[],this.selectedIndex=[],this.value=[],this._valueMapping={},this._GUID=W();let t=G(e);this._setInitialValue(t),Object.assign(this,t)}_setInitialValue(e){let t=`value`in e,n=`selectedIndex`in e,r=e.selectedIndex||[];if(!t&&n){if(!K(r))return;let t=this._getValueMapping(e);this.value=this._getValidValue(t,r)}}shouldUpdate(e){return e.has(`items`)&&!K(this.items)?(this.throwErrorAfterUpdateComplete(L.ITEMS.IS_NOT_ARRAY),!1):e.has(`value`)&&!K(this.value)?(this.throwErrorAfterUpdateComplete(L.VALUE.IS_NOT_ARRAY),!1):e.has(`selectedIndex`)&&!K(this.selectedIndex)?(this.throwErrorAfterUpdateComplete(L.SELECTED_INDEX.IS_NOT_ARRAY),!1):!0}willUpdate(e){if(e.has(`value`)){if(this.value.length>0)return;this.selectedIndex=[]}}_getNewValueMapping(e,t){let n=parseInt(t,10),r=Object.keys(this._valueMapping),i={...this._valueMapping};return r.indexOf(t)>-1?(delete i[n],i):(i[n]=e,i)}_handleChangeInput(e){e.stopPropagation();let t=e.target,n=t.dataset.index||`0`,r=t.value,i=this.value?[...this.value]:this.value,a=this._getNewValueMapping(r,n),o=this.items.map(e=>e.value),s=Object.values(a).filter(e=>o.indexOf(e)>-1);if(s===i)return;let c=Object.keys(a).map(e=>parseInt(e,10));this.value=s,this.selectedIndex=c;let l={oldValue:i,value:s};H(this,`change`,l)}_handleFocusInput(e){e.target.parentNode.setAttribute(`focused`,``)}_handleBlurInput(e){e.target.parentNode.removeAttribute(`focused`)}_getCheckboxIconSvgTemplate(e,t){return M`
    <svg
      class="kuc-checkbox-1-26-0__group__select-menu__item__label__icon"
      width="21"
      height="21"
      viewBox="0 0 21 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="1"
        y="1"
        width="19"
        height="19"
        rx="1"
        fill="white"
        stroke="${this._getSVGStrokeValue(e,t)}"
        stroke-width="2"/>
      ${t?M`<path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M5 11L6.5 9L9.5 11.5L14.5 6L16 7.5L9.5 14.5L5 11Z"
            fill="${e?`#d8d8d8`:`#3498db`}"/>`:``}
    </svg>
  `}_getSVGStrokeValue(e,t){return e?`#d8d8d8`:t?`#3498db`:`#d8d8d8`}_isCheckedItem(e,t){let n=Object.values(this._valueMapping),r=Object.keys(this._valueMapping);return n.filter((n,i)=>n===e.value&&t===parseInt(r[i],10)).length>0}_getItemTemplate(e,t){let n=this._isCheckedItem(e,t),r=e.disabled||this.disabled;return j`
        <div
          class="kuc-checkbox-1-26-0__group__select-menu__item"
          itemLayout="${this.itemLayout}"
        >
          <input
            type="checkbox"
            aria-describedby="${this._GUID}-error"
            aria-required="${this.requiredIcon}"
            data-index="${t}"
            id="${this._GUID}-item-${t}"
            class="kuc-checkbox-1-26-0__group__select-menu__item__input"
            name="${this._GUID}-group"
            value="${e.value===void 0?``:e.value}"
            ?disabled="${r}"
            @change="${this._handleChangeInput}"
            @focus="${this._handleFocusInput}"
            @blur="${this._handleBlurInput}"
          />
          <label
            for="${this._GUID}-item-${t}"
            class="kuc-checkbox-1-26-0__group__select-menu__item__label"
            >${this._getCheckboxIconSvgTemplate(r,n)}${e.label===void 0?e.value:e.label}
          </label>
        </div>
      `}update(e){(e.has(`items`)||e.has(`value`)||e.has(`selectedIndex`))&&(this._valueMapping=this._getValueMapping({items:this.items,value:this.value,selectedIndex:this.selectedIndex}),this._setValueAndSelectedIndex()),super.update(e)}render(){return j`
        <div
          class="kuc-checkbox-1-26-0__group"
          role="group"
          aria-labelledby="${this._GUID}-group"
        >
          <div class="kuc-checkbox-1-26-0__group__label" ?hidden="${!this.label}">
            <kuc-base-label-1-26-0
              .text="${this.label}"
              .guid="${this._GUID}"
              .requiredIcon="${this.requiredIcon}"
            ></kuc-base-label-1-26-0>
          </div>
          <div
            class="kuc-checkbox-1-26-0__group__select-menu"
            ?borderVisible="${this.borderVisible}"
            itemLayout="${this.itemLayout}"
          >
            ${this.items.map((e,t)=>this._getItemTemplate(e,t))}
          </div>
          <kuc-base-error-1-26-0
            .text="${this.error}"
            .guid="${this._GUID}"
            ?hidden="${!this.error}"
            ariaLive="assertive"
          ></kuc-base-error-1-26-0>
        </div>
      `}updated(){this._inputEls.forEach(e=>{e.checked=this.value.indexOf(e.value)>-1})}_getValueMapping(e){let t=e.items||[],n=e.value||[],r=e.selectedIndex||[],i=t.map(e=>e.value||``),a=Object.assign({},i),o={};if(n.length===0){let e=this._getValidValue(a,r);return r.forEach((t,n)=>o[t]=e[n]),o}return this._getValidSelectedIndex(a).forEach((e,t)=>o[e]=n[t]),o}_getValidValue(e,t){return t.filter(t=>e[t]).map(t=>e[t])}_getValidSelectedIndex(e){let t=[];for(let n=0;n<this.value.length;n++){let r=this.selectedIndex[n];if(e[r]===this.value[n]){t.push(r);continue}let i=this.items.findIndex(e=>e.value===this.value[n]);t.push(i)}return t}_setValueAndSelectedIndex(){this.value=Object.values(this._valueMapping),this.selectedIndex=Object.keys(this._valueMapping).map(e=>parseInt(e,10))}}vs([P({type:String,reflect:!0,attribute:`class`})],e.prototype,`className`,void 0),vs([P({type:String})],e.prototype,`error`,void 0),vs([P({type:String,reflect:!0,attribute:`id`})],e.prototype,`id`,void 0),vs([P({type:String})],e.prototype,`itemLayout`,void 0),vs([P({type:String})],e.prototype,`label`,void 0),vs([P({type:Boolean})],e.prototype,`borderVisible`,void 0),vs([P({type:Boolean})],e.prototype,`disabled`,void 0),vs([P({type:Boolean})],e.prototype,`requiredIcon`,void 0),vs([P({type:Boolean,attribute:`hidden`,reflect:!0,converter:B})],e.prototype,`visible`,void 0),vs([P({type:Array})],e.prototype,`items`,void 0),vs([P({type:Array})],e.prototype,`selectedIndex`,void 0),vs([P({type:Array})],e.prototype,`value`,void 0),vs([ja(`.kuc-checkbox-1-26-0__group__select-menu__item__input`)],e.prototype,`_inputEls`,void 0),vs([F()],e.prototype,`_valueMapping`,void 0),window.customElements.define(`kuc-checkbox-1-26-0`,e),U(_s),ys=e})();var bs=ys,xs=`
  kuc-combobox-1-26-0,
  kuc-combobox-1-26-0 *,
  kuc-combobox-1-26-0:lang(en),
  kuc-combobox-1-26-0:lang(en) * {
    font-family: sans-serif;
  }
  kuc-combobox-1-26-0:lang(es),
  kuc-combobox-1-26-0:lang(es) * {
    font-family: sans-serif;
  }
  kuc-combobox-1-26-0:lang(ja),
  kuc-combobox-1-26-0:lang(ja) * {
    font-family: "メイリオ", "Hiragino Kaku Gothic ProN", Meiryo,
      sans-serif;
  }
  kuc-combobox-1-26-0:lang(zh),
  kuc-combobox-1-26-0:lang(zh) * {
    font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,
      Hei, "Heiti SC", sans-serif;
  }
  kuc-combobox-1-26-0:lang(zh-TW),
  kuc-combobox-1-26-0:lang(zh-TW) * {
    font-family: "微軟正黑體", "Microsoft JhengHei", "新宋体", NSimSun, STHeiti, Hei, "Heiti SC", sans-serif;
  }
  kuc-combobox-1-26-0 {
    position: relative;
    display: inline-table;
    font-size: 14px;
    color: #333333;
    width: var(--kuc-combobox-toggle-width, 180px);
    vertical-align: top;
    line-height: 1.5;
  }
  kuc-combobox-1-26-0[hidden] {
    display: none;
  }
  .kuc-combobox-1-26-0__group {
    border: none;
    padding: 0px;
    height: auto;
    display: inline-block;
    width: 100%;
    margin: 0px;
    position: relative;
  }
  .kuc-combobox-1-26-0__group__label {
    padding: 4px 0px 8px 0px;
    display: inline-block;
    white-space: nowrap;
  }
  .kuc-combobox-1-26-0__group__label[hidden] {
    display: none;
  }
  .kuc-combobox-1-26-0__group__toggle {
    position: relative;
    display: flex;
    width: var(--kuc-combobox-toggle-width);
  }
  input[type=text].kuc-combobox-1-26-0__group__toggle__input {
    width: 100%;
    height: var(--kuc-combobox-toggle-height, 40px);
    box-sizing: border-box;
    box-shadow: 2px 2px 4px #f5f5f5 inset, -2px -2px 4px #f5f5f5 inset;
    border: 1px solid #e3e7e8;
    background-color: #ffffff;
    color: var(--kuc-combobox-toggle-color, #000000);
    font-size: var(--kuc-combobox-font-size, 14px);
    line-height: 1.5;
    padding: 0 40px 0 8px;
    margin: 0;
  }
  input[type=text].kuc-combobox-1-26-0__group__toggle__input:focus {
    outline: none;
    border: 1px solid #3498db;
    background-color: #e2f2fe;
    box-shadow: none;
  }
  input[type=text].kuc-combobox-1-26-0__group__toggle__input:disabled,
  .kuc-combobox-1-26-0__group__toggle__icon__button:disabled {
    background-color: #d4d7d7;
    box-shadow: none;
    cursor: not-allowed;
    color: #888888;
  }
  .kuc-combobox-1-26-0__group__toggle__icon {
    position: absolute;
    right: 0px;
    top: 2px;
    border-left: 1px solid #e3e7e8;
  }
  .kuc-combobox-1-26-0__group__toggle__icon__button {
    width: 40px;
    height: calc(var(--kuc-combobox-toggle-height, 40px) - 4px);
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
    padding: 0;
    border-style: none;
    background-color: transparent;
    cursor: pointer;
  }
  .kuc-combobox-1-26-0__group__select-menu {
    min-width: 280px;
    color: var(--kuc-combobox-menu-color);
    padding: 8px 0;
    border: 1px solid #e3e7e8;
    box-sizing: border-box;
    background-color: #ffffff;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
    margin: 0;
    list-style: none;
  }
  .kuc-combobox-1-26-0__group__select-menu__item {
    font-size: var(--kuc-combobox-font-size, 14px);
    padding: 8px 16px 8px 24px;
    line-height: 1;
    position: relative;
    cursor: pointer;
    white-space: nowrap;
  }
  .kuc-combobox-1-26-0__group__select-menu__item:lang(en) b,
  .kuc-combobox-1-26-0__group__select-menu__item:lang(ja) b,
  .kuc-combobox-1-26-0__group__select-menu__item:lang(zh) b,
  .kuc-combobox-1-26-0__group__select-menu__item:lang(zh-TW) b{
    font-weight: 700;
  }
  .kuc-combobox-1-26-0__group__select-menu__item__icon {
    position: absolute;
    top: 50%;
    left: 6px;
    margin-top: -5px;
  }
  .kuc-combobox-1-26-0__group__select-menu__item[aria-selected="true"] {
    color: var(--kuc-combobox-menu-color-selected, #3498db);
  }
  .kuc-combobox-1-26-0__group__select-menu__item--disabled,
  .kuc-combobox-1-26-0__group__select-menu__item--disabled[aria-selected="true"] {
    background-color: #d4d7d7;
    cursor: not-allowed;
    color: #888888;
  }
  .kuc-combobox-1-26-0__group__select-menu__highlight[role="option"] {
    background-color: #e2f2fe;
  }
`,q=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},Ss;(()=>{if(Ss=window.customElements.get(`kuc-combobox-1-26-0`),Ss)return;class e extends V{_attachListeners(){this._detachListeners(),this._scrollTargets=this._getScrollableAncestors(this._toggleEl);for(let e of this._scrollTargets)e.addEventListener(`scroll`,this._setMenuPosition,{passive:!0});this._menuEl.addEventListener(`scroll`,this._handleScrollMenu),window.addEventListener(`resize`,this._actionResizeScrollWindow),document.addEventListener(`click`,this._handleClickDocument,{capture:!0})}_detachListeners(){for(let e of this._scrollTargets)e.removeEventListener(`scroll`,this._setMenuPosition);this._scrollTargets=[],this._menuEl&&this._menuEl.removeEventListener(`scroll`,this._handleScrollMenu),window.removeEventListener(`resize`,this._actionResizeScrollWindow),document.removeEventListener(`click`,this._handleClickDocument,{capture:!0})}constructor(e){super(),this.className=``,this.error=``,this.id=``,this.label=``,this.placeholder=``,this.value=``,this.disabled=!1,this.requiredIcon=!1,this.visible=!0,this.items=[],this._selectorVisible=!1,this._searchText=``,this._DISABLED_CLASS=`kuc-combobox-1-26-0__group__select-menu__item--disabled`,this._query=``,this._matchingItems=[],this._scrollTargets=[],this._GUID=W(),this._timeoutID=null;let t=G(e);this._handleClickDocument=this._handleClickDocument.bind(this),this._handleScrollMenu=this._handleScrollMenu.bind(this),this._setMenuPosition=this._setMenuPosition.bind(this),this._actionResizeScrollWindow=this._actionResizeScrollWindow.bind(this),Object.assign(this,t)}shouldUpdate(e){if(e.has(`items`)){if(!K(this.items))return this.throwErrorAfterUpdateComplete(L.ITEMS.IS_NOT_ARRAY),!1;if(!rs(this.items.map(e=>e.value)))return this.throwErrorAfterUpdateComplete(L.ITEMS.IS_DUPLICATED),!1}return e.has(`value`)&&!ts(this.value)?(this.throwErrorAfterUpdateComplete(L.VALUE.IS_NOT_STRING),!1):!0}willUpdate(e){e.has(`value`)&&(this._searchText=this._getSelectedLabel()||``)}render(){return j`
        <div class="kuc-combobox-1-26-0__group">
          <div
            class="kuc-combobox-1-26-0__group__label"
            id="${this._GUID}-label"
            ?hidden="${!this.label}"
          >
            <kuc-base-label-1-26-0
              .text="${this.label}"
              .requiredIcon="${this.requiredIcon}"
            ></kuc-base-label-1-26-0>
          </div>
          <div class="kuc-combobox-1-26-0__group__toggle">
            <input
              class="kuc-combobox-1-26-0__group__toggle__input"
              role="combobox"
              type="text"
              .value="${this._searchText}"
              aria-haspopup="listbox"
              aria-autocomplete="list"
              aria-labelledby="${this._GUID}-label"
              aria-controls="${this._GUID}-listbox"
              aria-describedby="${this._GUID}-error"
              aria-expanded="${this._selectorVisible}"
              aria-required="${this.requiredIcon}"
              placeholder="${this.placeholder}"
              ?disabled="${this.disabled}"
              @change="${this._handleChangeComboboxInput}"
              @input="${this._handleInputComboboxInput}"
              @keydown="${this._handleKeyDownComboboxInput}"
              @click="${this._handleClickComboboxInput}"
              @blur="${this._handleBlurComboboxInput}"
            />
            <div class="kuc-combobox-1-26-0__group__toggle__icon">
              <button
                class="kuc-combobox-1-26-0__group__toggle__icon__button"
                tabindex="-1"
                type="button"
                aria-labelledby="${this._GUID}-label"
                aria-controls="${this._GUID}-listbox"
                aria-expanded="${this._selectorVisible}"
                ?disabled="${this.disabled}"
                @click="${this._handleClickToggleButton}"
              >
                ${this._getToggleIconSvgTemplate()}
              </button>
            </div>
          </div>
          <ul
            id="${this._GUID}-listbox"
            popover="manual"
            class="kuc-combobox-1-26-0__group__select-menu"
            role="listbox"
            aria-labelledby="${this._GUID}-label"
            aria-hidden="${!this._selectorVisible}"
            @mouseleave="${this._handleMouseLeaveMenu}"
            @mousedown="${this._handleMouseDownMenu}"
          >
            ${this._matchingItems.map((e,t)=>this._getItemTemplate(e,t))}
          </ul>
          <kuc-base-error-1-26-0
            .text="${this.error}"
            .guid="${this._GUID}"
            ?hidden="${!this.error}"
            ariaLive="assertive"
          ></kuc-base-error-1-26-0>
        </div>
      `}async updated(e){super.updated(e),await this.updateComplete,this._selectorVisible&&(this._scrollToView(),this._selectedItemEl===null||this._selectedItemEl.classList.contains(this._DISABLED_CLASS)?this._actionClearAllHighlightMenuItem():this._setHighlightAndActiveDescendantMenu(this._selectedItemEl))}_getToggleIconSvgTemplate(){return M`
      <svg
        width="36"
        height="36"
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M24.2122 15.6665L25 16.1392L19.7332 21.4998H18.2668L13 16.1392L13.7878 15.6665L18.765 20.6866H19.235L24.2122 15.6665Z"
          fill="#3498db"/>
      </svg>
    `}_getItemTemplate(e,t){let n=this._isCheckedItem(e),r=e.disabled,i=e.label===void 0?e.value:e.label,a=n?j`<b>${i}</b>`:j`${i}`,o=this._query.trim().toLowerCase();if(o&&i){let e=i.toLowerCase().indexOf(o),t=e+o.length;a=j`
          ${i.slice(0,e)}<b>${i.slice(e,t)}</b>${i.slice(t)}
        `}return j`
        <li
          class="kuc-combobox-1-26-0__group__select-menu__item ${r?this._DISABLED_CLASS:``}"
          role="option"
          aria-selected="${n?`true`:`false`}"
          value="${e.value===void 0?``:e.value}"
          id="${this._GUID}-menuitem-${t}"
          @click="${r?null:this._handleClickComboboxItem}"
          @mouseover="${r?null:this._handleMouseOverComboboxItem}"
        >
          ${this._getComboboxIconSvgTemplate(n,r)}
          ${a}
        </li>
      `}_getComboboxIconSvgTemplate(e,t){return M`
      ${e?M`<svg
          class="kuc-combobox-1-26-0__group__select-menu__item__icon"
          width="11"
          height="9"
          viewBox="0 0 11 9"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M0 5L1.5 3L4.5 5.5L9.5 0L11 1.5L4.5 8.5L0 5Z"
            fill="${t?`#888888`:`#3498db`}"/>
        </svg>`:``}`}_handleClickComboboxItem(e){let t=this._getItemElementWhenMouseOverDown(e.target).getAttribute(`value`);this._actionUpdateValue(t)}_handleMouseOverComboboxItem(e){let t=this._getItemElementWhenMouseOverDown(e.target);this._actionHighlightMenuItem(t)}_handleMouseLeaveMenu(){this._actionClearAllHighlightMenuItem()}_handleMouseDownMenu(e){e.preventDefault()}_handleClickToggleButton(e){e.preventDefault(),this._inputEl.focus(),this._inputEl.select(),this._resetToggleInputValue(),this._actionToggleMenu()}_handleInputComboboxInput(e){e.stopPropagation(),this._searchText=this._inputEl.value,this._query=this._inputEl.value,this._setMatchingItems()}_handleClickComboboxInput(e){e.stopPropagation(),this._inputEl.select(),this._setMatchingItems()}_handleChangeComboboxInput(e){e.stopPropagation()}_handleBlurComboboxInput(e){this._resetToggleInputValue()}_handleClickDocument(e){(e.target===this._toggleEl||this._toggleEl.contains(e.target))&&(this._inputEl.focus(),e.stopPropagation()),Array.from(this._disabledItemsEl).some(t=>t===e.target||t.contains(e.target))||this._actionHideMenu()}_handleScrollMenu(){this._previousScrollTop=this._menuEl.scrollTop}_handleKeyDownComboboxInput(e){switch(e.key){case`Up`:case`ArrowUp`:if(e.preventDefault(),!this._selectorVisible){this._actionShowMenu();break}this._actionHighlightPrevMenuItem();break;case`Tab`:this._selectorVisible&&this._actionHideMenu();break;case`Down`:case`ArrowDown`:if(e.preventDefault(),!this._selectorVisible){this._actionShowMenu();break}this._actionHighlightNextMenuItem();break;case`Enter`:{e.preventDefault();let t=this._highlightItemEl;if(t===null)break;let n=t.getAttribute(`value`);this._actionUpdateValue(n),this._actionHideMenu();break}case`Escape`:e.preventDefault(),this._selectorVisible&&e.stopPropagation(),this._resetToggleInputValue(),this._actionHideMenu();break;case`Home`:this._selectorVisible&&(e.preventDefault(),this._actionHighlightFirstMenuItem());break;case`End`:this._selectorVisible&&(e.preventDefault(),this._actionHighlightLastMenuItem())}}_getSelectedLabel(){let e=this.items.filter((e,t)=>this._isCheckedItem(e));return e.length===0?``:e[0].label===void 0?e[0].value:e[0].label}async _actionShowMenu(){this._query.trim()===``&&(this._matchingItems=this.items),this.items.length!==0&&this._matchingItems.length!==0&&(this._inputEl.focus(),this._selectorVisible=!0,this._menuEl.showPopover(),await this.updateComplete,this._menuEl&&this._toggleEl&&(this._setMenuPosition(),this._attachListeners()))}_actionHideMenu(){this._selectorVisible=!1,this._menuEl.hidePopover(),this._detachListeners(),this._actionRemoveActiveDescendant()}_actionToggleMenu(){this._selectorVisible?this._actionHideMenu():this._actionShowMenu()}_actionHighlightFirstMenuItem(){let e=this._firstItemEl,t=!1;for(let n=0;n<this._matchingItems.length&&(t=e.classList.contains(this._DISABLED_CLASS),t);n++)e=e.nextElementSibling;!t&&this._setHighlightAndActiveDescendantMenu(e)}_actionHighlightLastMenuItem(){let e=this._lastItemEl,t=!1;for(let n=0;n<this._matchingItems.length&&(t=e.classList.contains(this._DISABLED_CLASS),t);n++)e=e.previousElementSibling;!t&&this._setHighlightAndActiveDescendantMenu(e)}_actionHighlightPrevMenuItem(){let e=null;this._highlightItemEl!==null&&(e=this._highlightItemEl.previousElementSibling),e===null&&(e=this._lastItemEl);let t=!1;for(let n=0;n<this._matchingItems.length&&(t=e.classList.contains(this._DISABLED_CLASS),t);n++)e=e.previousElementSibling,e===null&&(e=this._lastItemEl);!t&&this._setHighlightAndActiveDescendantMenu(e)}_actionHighlightNextMenuItem(){let e=null;this._highlightItemEl!==null&&(e=this._highlightItemEl.nextElementSibling),e===null&&(e=this._firstItemEl);let t=!1;for(let n=0;n<this._matchingItems.length&&(t=e.classList.contains(this._DISABLED_CLASS),t);n++)e=e.nextElementSibling,e===null&&(e=this._firstItemEl);!t&&this._setHighlightAndActiveDescendantMenu(e)}_actionClearAllHighlightMenuItem(){this._itemsEl.forEach(e=>{e.classList.remove(`kuc-combobox-1-26-0__group__select-menu__highlight`)}),this._actionRemoveActiveDescendant()}_setHighlightAndActiveDescendantMenu(e){this._actionHighlightMenuItem(e),this._actionSetActiveDescendant(e.id),this._scrollToView()}_actionHighlightMenuItem(e){this._actionClearAllHighlightMenuItem(),e.classList.add(`kuc-combobox-1-26-0__group__select-menu__highlight`)}_actionUpdateValue(e){if(this.value===e){this._resetToggleInputValue();return}let t={oldValue:this.value,value:e};this.value=e,this._query=``,H(this,`change`,t)}_actionSetActiveDescendant(e){e!==void 0&&this._inputEl!==null&&this._inputEl.setAttribute(`aria-activedescendant`,e)}_actionRemoveActiveDescendant(){this._inputEl.removeAttribute(`aria-activedescendant`)}_setMatchingItems(){let e=this.items.filter(e=>{let t=new RegExp((e=>e.replace(/[.*+?^=!:${}()|[\]/\\]/g,`\\$&`))(this._query.trim()),`gi`);return e.label?t.test(e.label):e.value?t.test(e.value):!1});e.length===0?(this._matchingItems=[],this._actionHideMenu()):(this._matchingItems=e,this._actionShowMenu())}_setMenuPositionAboveOrBelow(e,t){let n=t.getBoundingClientRect(),r=n.top,i=window.innerHeight;window.innerHeight>document.documentElement.clientHeight&&(i=document.documentElement.clientHeight);let a=i-n.bottom;e.style.height=`auto`,e.style.maxHeight=`none`,e.style.top=`auto`,e.style.bottom=`auto`;let o=e.getBoundingClientRect().height;e.style.maxHeight=`var(--kuc-combobox-menu-max-height, none)`;let s=getComputedStyle(e).maxHeight,c;s&&s!==`none`&&(c=parseFloat(s));let l=c?Math.min(o,c):o,u,d;a>=l?(u=n.bottom,d=l):r>=l?(u=n.top-l,d=l):a>=r?(u=n.bottom,d=a):(u=n.top-r,d=r),e.style.position=`fixed`;let f=`${u}px`;e.style.top!==f&&(e.style.top=f);let p=`${d}px`;e.style.height!==p&&(e.style.height=p),e.style.overflowY=`auto`}_setMenuPositionLeftOrRight(e,t){e.style.right=`auto`;let n=e.offsetWidth,r=t.getBoundingClientRect(),i=window.innerWidth;window.innerWidth>document.documentElement.clientWidth&&(i=document.documentElement.clientWidth);let a=r.left;i<r.right&&i>r.left&&(a=i-n);let o=`${a}px`;e.style.left!==o&&(e.style.left=o)}_setMenuPosition(){!this._menuEl||!this._toggleEl?this._detachListeners():(this._setMenuPositionAboveOrBelow(this._menuEl,this._toggleEl),this._setMenuPositionLeftOrRight(this._menuEl,this._toggleEl),this._menuEl&&this._previousScrollTop&&(this._menuEl.scrollTop=this._previousScrollTop))}_scrollToView(){if(!this._highlightItemEl||!this._menuEl)return;let e=this._menuEl.getBoundingClientRect(),t=this._highlightItemEl.getBoundingClientRect();t.top<e.top&&(this._menuEl.scrollTop-=e.top-t.top),e.bottom<t.bottom&&(this._menuEl.scrollTop+=t.bottom-e.bottom)}_actionResizeScrollWindow(){!this._timeoutID&&this._selectorVisible&&(this._timeoutID=window.setTimeout(()=>{this._timeoutID=null,this._setMenuPosition()},50))}_isCheckedItem(e){return e.value===this.value}_resetToggleInputValue(){let e=this._getSelectedLabel();this._searchText!==e&&(this._searchText=e||``),this._query=``}_getScrollableAncestors(e){let t=[],n=e.parentElement,r=/(auto|scroll|overlay)/;for(;n&&n!==document.body&&n!==document.documentElement;){let e=getComputedStyle(n);(r.test(e.overflowY)||r.test(e.overflowX))&&t.push(n),n=n.parentElement}return t.push(window),t}_getItemElementWhenMouseOverDown(e){return e.classList.value.split(` `).includes(`kuc-combobox-1-26-0__group__select-menu__item`)?e:this._getItemElementWhenMouseOverDown(e.parentElement)}disconnectedCallback(){this._detachListeners(),super.disconnectedCallback&&super.disconnectedCallback()}}q([P({type:String,reflect:!0,attribute:`class`})],e.prototype,`className`,void 0),q([P({type:String})],e.prototype,`error`,void 0),q([P({type:String,reflect:!0,attribute:`id`})],e.prototype,`id`,void 0),q([P({type:String})],e.prototype,`label`,void 0),q([P({type:String})],e.prototype,`placeholder`,void 0),q([P({type:String})],e.prototype,`value`,void 0),q([P({type:Boolean})],e.prototype,`disabled`,void 0),q([P({type:Boolean})],e.prototype,`requiredIcon`,void 0),q([P({type:Boolean,attribute:`hidden`,reflect:!0,converter:B})],e.prototype,`visible`,void 0),q([P({type:Array})],e.prototype,`items`,void 0),q([F()],e.prototype,`_selectorVisible`,void 0),q([I(`.kuc-combobox-1-26-0__group__toggle`)],e.prototype,`_toggleEl`,void 0),q([I(`.kuc-combobox-1-26-0__group__toggle__input`)],e.prototype,`_inputEl`,void 0),q([I(`.kuc-combobox-1-26-0__group__select-menu`)],e.prototype,`_menuEl`,void 0),q([ja(`.kuc-combobox-1-26-0__group__select-menu__item`)],e.prototype,`_itemsEl`,void 0),q([I(`.kuc-combobox-1-26-0__group__select-menu__item`)],e.prototype,`_firstItemEl`,void 0),q([I(`.kuc-combobox-1-26-0__group__select-menu__item:last-child`)],e.prototype,`_lastItemEl`,void 0),q([I(`.kuc-combobox-1-26-0__group__select-menu__item[aria-selected=true]`)],e.prototype,`_selectedItemEl`,void 0),q([I(`.kuc-combobox-1-26-0__group__select-menu__highlight`)],e.prototype,`_highlightItemEl`,void 0),q([I(`.kuc-base-error-1-26-0__error`)],e.prototype,`_errorEl`,void 0),q([ja(`.kuc-combobox-1-26-0__group__select-menu__item--disabled`)],e.prototype,`_disabledItemsEl`,void 0),q([F()],e.prototype,`_searchText`,void 0),window.customElements.define(`kuc-combobox-1-26-0`,e),U(xs),Ss=e})();var Cs=`
.kuc-base-datetime-header-year-1-26-0__toggle {
  position: relative;
  box-sizing: border-box;
  height: 32px;
  padding: 0 24px 0 8px;
  line-height: 30px;
  overflow: hidden;
  background-color: white;
  border: 1px solid transparent;
  cursor: pointer;
}
.kuc-base-datetime-header-year-1-26-0__toggle__icon {
  position: absolute;
  flex: none;
  width: 24px;
  height: 32px;
}
.kuc-base-datetime-header-year-1-26-0__toggle__label {
  font-size: 13px;
  color: #333333;
}
.kuc-base-datetime-header-year-1-26-0__toggle:focus {
  border: 1px solid #3498db;
  outline: none;
}
`,ws=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},Ts=class extends V{constructor(){super(...arguments),this.year=new Date().getFullYear(),this.postfix=``,this._listBoxVisible=!1,this._listBoxMaxHeight=300,this._scrollTargets=[],this._boundOnScrollAndResize=()=>Ao({anchorEl:this._toggleEl,popoverEl:this._listBoxUl,popoverHeight:this._listBoxMaxHeight})}disconnectedCallback(){this._detachListeners(),super.disconnectedCallback()}update(e){this._listBoxItems=this._getYearOptions().map(e=>({value:`${e}`,label:`${e}${this.postfix}`})),super.update(e)}render(){return j`
      <button
        class="kuc-base-datetime-header-year-1-26-0__toggle"
        type="button"
        aria-haspopup="listbox"
        aria-expanded="${this._listBoxVisible}"
        tabindex="${this._listBoxVisible?`-1`:`0`}"
        @mouseup="${this._handleMouseUpDropdownToggle}"
        @mousedown="${this._handleMouseDownDropdownToggle}"
        @click="${this._handleClickDropdownYearToggle}"
        @keydown="${this._handleKeyDownYearToggle}"
      >
        <span class="kuc-base-datetime-header-year-1-26-0__toggle__label"
          >${this.year}${this.postfix}</span
        >
        <span class="kuc-base-datetime-header-year-1-26-0__toggle__icon"
          >${Oo()}
        </span>
      </button>
      ${this._getListBoxTemplate()}
    `}async updated(e){await this.updateComplete,super.update(e)}repositionListBox(){this._listBoxVisible&&this._listBoxEl&&Ao({anchorEl:this._toggleEl,popoverEl:this._listBoxUl,popoverHeight:this._listBoxMaxHeight})}_attachListeners(){this._detachListeners(),this._scrollTargets=Mo(this._toggleEl);for(let e of this._scrollTargets)e.addEventListener(`scroll`,this._boundOnScrollAndResize,{passive:!0})}_detachListeners(){for(let e of this._scrollTargets)e.removeEventListener(`scroll`,this._boundOnScrollAndResize);this._scrollTargets=[]}closeListBox(){var e;this._listBoxEl&&this._listBoxEl.hidePopover(),this._listBoxVisible=!1,this._detachListeners(),(e=this._toggleEl)==null||e.focus()}_getListBoxTemplate(){return this._listBoxVisible?j`
          <kuc-base-datetime-listbox-1-26-0
            .items="${this._listBoxItems||[]}"
            .value="${this.year.toString()}"
            class="kuc-base-datetime-header-year-1-26-0__listbox"
            @kuc:listbox-click="${this._handleChangeListBox}"
            @kuc:listbox-blur="${this._handleFocusOutListBox}"
            @kuc:listbox-escape="${this._handleListBoxEscape}"
            aria-hidden="${!this._listBoxVisible}"
          >
          </kuc-base-datetime-listbox-1-26-0>
        `:``}_handleFocusOutListBox(){this.closeListBox()}_handleListBoxEscape(){this._handleFocusOutListBox()}_handleMouseUpDropdownToggle(e){e.preventDefault()}_handleMouseDownDropdownToggle(e){e.preventDefault()}_handleClickDropdownYearToggle(e){e.stopPropagation(),e.preventDefault(),this._listBoxVisible?this.closeListBox():this._openListBox(),H(this,`kuc:year-dropdown-click`,{value:this._listBoxVisible.toString(),oldValue:(!this._listBoxVisible).toString()})}_handleKeyDownYearToggle(e){e.key!==`Tab`&&(e.preventDefault(),this._openListBoxByKey(e.key))}_openListBoxByKey(e){[` `,`Up`,`ArrowUp`,`Down`,`ArrowDown`,`Enter`].indexOf(e)>-1&&this._openListBox()}_handleChangeListBox(e){if(e.preventDefault(),e.stopPropagation(),this.closeListBox(),!e.detail.value)return;this.year=Number(e.detail.value);let t={value:`${this.year}`};H(this,`kuc:year-dropdown-change`,t)}async _openListBox(){this._listBoxVisible=!0,await this.updateComplete,this._listBoxEl&&(this._listBoxEl.showPopover(),Ao({anchorEl:this._toggleEl,popoverEl:this._listBoxUl,popoverHeight:this._listBoxMaxHeight}),this._attachListeners())}_getYearOptions(){let e=[];Number.isInteger(this.year)||(this.year=new Date().getFullYear());let t=this.year<100?0:this.year-100,n=this.year>=9899?9999:this.year+100;for(;t<=n;t++)e.push(t);return e}};ws([P({type:Number})],Ts.prototype,`year`,void 0),ws([P({type:String})],Ts.prototype,`postfix`,void 0),ws([F()],Ts.prototype,`_listBoxVisible`,void 0),ws([I(`.kuc-base-datetime-header-year-1-26-0__toggle`)],Ts.prototype,`_toggleEl`,void 0),ws([I(`.kuc-base-datetime-header-year-1-26-0__listbox`)],Ts.prototype,`_listBoxEl`,void 0),ws([I(`.kuc-base-datetime-listbox-1-26-0__listbox`)],Ts.prototype,`_listBoxUl`,void 0),window.customElements.get(`kuc-base-datetime-header-year-1-26-0`)||(U(Cs),window.customElements.define(`kuc-base-datetime-header-year-1-26-0`,Ts));var Es=`
.kuc-base-datetime-header-month-1-26-0__toggle {
  position: relative;
  box-sizing: border-box;
  height: 32px;
  padding: 0 24px 0 8px;
  line-height: 30px;
  overflow: hidden;
  background-color: white;
  border: 1px solid transparent;
  cursor: pointer;
}
.kuc-base-datetime-header-month-1-26-0__toggle__icon {
  position: absolute;
  flex: none;
  width: 24px;
  height: 32px;
}
.kuc-base-datetime-header-month-1-26-0__toggle__label {
  font-size: 13px;
  color: #333333;
}
.kuc-base-datetime-header-month-1-26-0__toggle:focus {
  border: 1px solid #3498db;
  outline: none;
}
`,Ds=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},Os=class extends V{constructor(){super(...arguments),this.language=`auto`,this.month=1,this._listBoxVisible=!1,this._locale=z(`en`),this._monthLabel=``,this._maxHeight=1e3,this._scrollTargets=[],this._listBoxMaxHeight=378,this._boundOnScrollAndResize=()=>Ao({anchorEl:this._toggleEl,popoverEl:this._listBoxUl,popoverHeight:this._listBoxMaxHeight})}disconnectedCallback(){this._detachListeners(),super.disconnectedCallback()}update(e){e.has(`language`)&&(this._locale=z(this.language),this._listBoxItems=this._getListBoxItems()),e.has(`month`)&&(this._monthLabel=this._getMonthLabel()),super.update(e)}render(){return j`
      <button
        class="kuc-base-datetime-header-month-1-26-0__toggle"
        type="button"
        aria-haspopup="listbox"
        aria-expanded="${this._listBoxVisible}"
        tabindex="${this._listBoxVisible?`-1`:`0`}"
        @mouseup="${this._handleMouseUpDropdownToggle}"
        @mousedown="${this._handleMouseDownDropdownToggle}"
        @click="${this._handleClickDropdownMonthToggle}"
        @keydown="${this._handleKeyDownMonthToggle}"
      >
        <span class="kuc-base-datetime-header-month-1-26-0__toggle__label"
          >${this._monthLabel}</span
        >
        <span class="kuc-base-datetime-header-month-1-26-0__toggle__icon"
          >${Oo()}
        </span>
      </button>
      ${this._getListBoxTemplate()}
    `}async updated(e){await this.updateComplete,super.update(e)}repositionListBox(){this._listBoxVisible&&this._listBoxEl&&Ao({anchorEl:this._toggleEl,popoverEl:this._listBoxUl,popoverHeight:this._listBoxMaxHeight})}_attachListeners(){this._detachListeners(),this._scrollTargets=Mo(this._toggleEl);for(let e of this._scrollTargets)e.addEventListener(`scroll`,this._boundOnScrollAndResize,{passive:!0})}_detachListeners(){for(let e of this._scrollTargets)e.removeEventListener(`scroll`,this._boundOnScrollAndResize);this._scrollTargets=[]}closeListBox(){var e;this._listBoxEl&&this._listBoxEl.hidePopover(),this._listBoxVisible=!1,this._detachListeners(),(e=this._toggleEl)==null||e.focus()}_getListBoxTemplate(){return this._listBoxVisible?j`
          <kuc-base-datetime-listbox-1-26-0
            .items="${this._listBoxItems||[]}"
            .value="${this.month.toString()}"
            .maxHeight="${this._maxHeight}"
            class="kuc-base-datetime-header-month-1-26-0__listbox"
            @kuc:listbox-click="${this._handleChangeListBox}"
            @kuc:listbox-blur="${this._handleFocusOutListBox}"
            @kuc:listbox-escape="${this._handleListBoxEscape}"
            aria-hidden="${!this._listBoxVisible}"
          >
          </kuc-base-datetime-listbox-1-26-0>
        `:``}_handleFocusOutListBox(){this.closeListBox()}_handleListBoxEscape(){this._handleFocusOutListBox()}_handleClickDropdownMonthToggle(e){e.stopPropagation(),e.preventDefault(),this._listBoxVisible?this.closeListBox():this._openListBox(),H(this,`kuc:month-dropdown-click`,{value:this._listBoxVisible.toString(),oldValue:(!this._listBoxVisible).toString()})}_handleMouseUpDropdownToggle(e){e.preventDefault()}_handleMouseDownDropdownToggle(e){e.preventDefault()}_handleKeyDownMonthToggle(e){this._handleTabKey(e.key)||(e.preventDefault(),this._openListBoxByKey(e.key))}_openListBoxByKey(e){[` `,`Up`,`ArrowUp`,`Down`,`ArrowDown`,`Enter`].indexOf(e)>-1&&this._openListBox()}_handleTabKey(e){return e===`Tab`}_handleChangeListBox(e){if(e.preventDefault(),e.stopPropagation(),this.closeListBox(),!e.detail.value)return;this.month=Number(e.detail.value);let t={value:`${this.month}`};H(this,`kuc:month-dropdown-change`,t)}async _openListBox(){this._listBoxVisible=!0,await this.updateComplete,this._listBoxEl&&(this._listBoxEl.showPopover(),Ao({anchorEl:this._toggleEl,popoverEl:this._listBoxUl,popoverHeight:this._listBoxMaxHeight}),this._attachListeners())}_getListBoxItems(){return this._locale.MONTH_SELECT.map((e,t)=>({value:`${t+1}`,label:`${e}`}))}_getMonthLabel(){let e=this._locale.MONTH_SELECT.filter((e,t)=>this.month===t+1);return e.length>0?e[0]:`JANUARY`}};Ds([P({type:String,attribute:`lang`,reflect:!0})],Os.prototype,`language`,void 0),Ds([P({type:Number})],Os.prototype,`month`,void 0),Ds([F()],Os.prototype,`_listBoxVisible`,void 0),Ds([I(`.kuc-base-datetime-header-month-1-26-0__toggle`)],Os.prototype,`_toggleEl`,void 0),Ds([I(`.kuc-base-datetime-header-month-1-26-0__listbox`)],Os.prototype,`_listBoxEl`,void 0),Ds([I(`.kuc-base-datetime-listbox-1-26-0__listbox`)],Os.prototype,`_listBoxUl`,void 0),window.customElements.get(`kuc-base-datetime-header-month-1-26-0`)||(U(Es),window.customElements.define(`kuc-base-datetime-header-month-1-26-0`,Os));var ks=`
kuc-base-datetime-calendar-header-1-26-0,
kuc-base-datetime-calendar-header-1-26-0 *,
kuc-base-datetime-calendar-header-1-26-0:lang(en),
kuc-base-datetime-calendar-header-1-26-0:lang(en) * {
  font-family: sans-serif;
}
kuc-base-datetime-calendar-header-1-26-0:lang(ja),
kuc-base-datetime-calendar-header-1-26-0:lang(ja) * {
  font-family: "メイリオ", "Hiragino Kaku Gothic ProN", Meiryo,
    sans-serif;
  font-weight: 700;
}
kuc-base-datetime-calendar-header-1-26-0:lang(zh),
kuc-base-datetime-calendar-header-1-26-0:lang(zh) * {
  font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,
    Hei, "Heiti SC", sans-serif;
}
kuc-base-datetime-calendar-header-1-26-0:lang(zh-TW),
kuc-base-datetime-calendar-header-1-26-0:lang(zh-TW) * {
  font-family: "微軟正黑體","Microsoft JhengHei","新宋体",NSimSun,STHeiti,
    Hei,"Heiti SC",sans-serif;
}
kuc-base-datetime-calendar-header-1-26-0:lang(es),
kuc-base-datetime-calendar-header-1-26-0:lang(es) * {
  font-family: sans-serif;
}
kuc-base-datetime-calendar-header-1-26-0:lang(ja) kuc-base-datetime-listbox-1-26-0 * {
  font-weight: 400;
}
.kuc-base-datetime-calendar-header-1-26-0__group {
  display: flex;
  align-items: center;
  box-sizing: border-box;
  border-bottom: 1px solid #e3e7e8;
  padding: 0;
  white-space: nowrap;
  width: 266px;
  height: 44px;
}
.kuc-base-datetime-calendar-header-1-26-0__group__button {
  background: transparent;
  border: none;
  cursor: pointer;
  outline: none;
  width: 38px;
  height: 32px;
  margin: 0;
  text-align: center;
}
.kuc-base-datetime-calendar-header-1-26-0__group__button:focus {
  border: 1px solid #3498db;
  outline: none;
}
.kuc-base-datetime-calendar-header-1-26-0__group__button-icon {
  vertical-align: middle;
}
.kuc-base-datetime-calendar-header-1-26-0__group__center {
  width: 190px;
  text-align: center;
  display: flex;
  justify-content: center;
}
.kuc-base-datetime-calendar-header-1-26-0__month {
  margin: 0 4px 0 4px;
}
`,As=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a};function js(e){return e>0&&e<13}function Ms(e){return e>=0&&e<1e4}var Ns=class extends V{constructor(){super(...arguments),this.language=`en`,this.month=1,this.year=new Date().getFullYear(),this._locale=z(`en`)}update(e){e.has(`language`)&&(this._locale=z(this.language)),super.update(e)}render(){return j`
      <div class="kuc-base-datetime-calendar-header-1-26-0__group">
        <button
          aria-label="previous month"
          type="button"
          class="kuc-base-datetime-calendar-header-1-26-0__group__button kuc-base-datetime-calendar-header-1-26-0__group__button--previous-month"
          @click="${this._handleClickCalendarPrevMonthBtn}"
          @keydown="${this._handleKeyDownCalendarPrevMonthBtn}"
        >
          ${ko()}
        </button>
        <div class="kuc-base-datetime-calendar-header-1-26-0__group__center">
          ${this._getYearMonthTemplate()}
        </div>
        <button
          aria-label="next month"
          type="button"
          class="kuc-base-datetime-calendar-header-1-26-0__group__button kuc-base-datetime-calendar-header-1-26-0__group__button--next-month"
          @click="${this._handleClickCalendarNextMonthBtn}"
        >
          ${Po()}
        </button>
      </div>
    `}_getYearTemplate(){return j`
      <kuc-base-datetime-header-year-1-26-0
        class="kuc-base-datetime-calendar-header-1-26-0__year"
        .postfix="${this._locale.YEAR_SELECT_POSTFIX}"
        .year="${this.year}"
        @kuc:year-dropdown-change="${this._handleYearDropdownChange}"
        @kuc:year-dropdown-click="${this._handleYearDropdownClick}"
      >
      </kuc-base-datetime-header-year-1-26-0>
    `}_getMonthTemplate(){return j`
      <kuc-base-datetime-header-month-1-26-0
        class="kuc-base-datetime-calendar-header-1-26-0__month"
        .month="${this.month}"
        .language="${this.language}"
        @kuc:month-dropdown-change="${this._handleMonthDropdownChange}"
        @kuc:month-dropdown-click="${this._handleMonthDropdownClick}"
      >
      </kuc-base-datetime-header-month-1-26-0>
    `}_getYearMonthTemplate(){return this.language===`zh`||this.language===`ja`||this.language===`zh-TW`?j` ${this._getYearTemplate()}${this._getMonthTemplate()} `:j` ${this._getMonthTemplate()}${this._getYearTemplate()} `}_handleMonthDropdownChange(e){e.stopPropagation(),e.preventDefault(),this.month=parseInt(e.detail.value,10),this._dispatchCalendarHeaderChangeEvent()}_handleYearDropdownChange(e){e.stopPropagation(),e.preventDefault(),this.year=parseInt(e.detail.value,10),this._dispatchCalendarHeaderChangeEvent()}_handleYearDropdownClick(){this._listBoxMonthEl&&this._baseDateTimeHeaderMonthEl.closeListBox()}_handleMonthDropdownClick(){this._listBoxYearEl&&this._baseDateTimeHeaderYearEl.closeListBox()}_handleClickCalendarPrevMonthBtn(e){e.stopPropagation(),this.month===1?(this.month=12,this.year--):--this.month,this._dispatchCalendarHeaderChangeEvent()}_handleKeyDownCalendarPrevMonthBtn(e){e.shiftKey&&e.key===`Tab`&&(e.preventDefault(),H(this,`kuc:calendar-header-previous-shifttab`))}_handleClickCalendarNextMonthBtn(e){e.stopPropagation(),this.month===12?(this.month=1,this.year++):this.month+=1,this._dispatchCalendarHeaderChangeEvent()}_dispatchCalendarHeaderChangeEvent(){let e={value:`${this.year}-${this.month}`};H(this,`kuc:calendar-header-change`,e)}};As([P({type:String,attribute:`lang`,reflect:!0})],Ns.prototype,`language`,void 0),As([P({type:Number,hasChanged(e){return js(e)}})],Ns.prototype,`month`,void 0),As([P({type:Number,hasChanged(e){return Ms(e)}})],Ns.prototype,`year`,void 0),As([I(`.kuc-base-datetime-calendar-header-1-26-0__month`)],Ns.prototype,`_baseDateTimeHeaderMonthEl`,void 0),As([I(`.kuc-base-datetime-calendar-header-1-26-0__year`)],Ns.prototype,`_baseDateTimeHeaderYearEl`,void 0),As([I(`.kuc-base-datetime-header-month-1-26-0__listbox`)],Ns.prototype,`_listBoxMonthEl`,void 0),As([I(`.kuc-base-datetime-header-year-1-26-0__listbox`)],Ns.prototype,`_listBoxYearEl`,void 0),window.customElements.get(`kuc-base-datetime-calendar-header-1-26-0`)||(U(ks),window.customElements.define(`kuc-base-datetime-calendar-header-1-26-0`,Ns));var Ps=`
kuc-base-datetime-calendar-footer-1-26-0,
kuc-base-datetime-calendar-footer-1-26-0 *,
kuc-base-datetime-calendar-footer-1-26-0:lang(en),
kuc-base-datetime-calendar-footer-1-26-0:lang(en) * {
  font-family: sans-serif;
}
kuc-base-datetime-calendar-footer-1-26-0:lang(ja),
kuc-base-datetime-calendar-footer-1-26-0:lang(ja) * {
  font-family: "メイリオ", "Hiragino Kaku Gothic ProN", Meiryo,
    sans-serif;
}
kuc-base-datetime-calendar-footer-1-26-0:lang(zh),
kuc-base-datetime-calendar-footer-1-26-0:lang(zh) * {
  font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,
    Hei, "Heiti SC", sans-serif;
}
kuc-base-datetime-calendar-footer-1-26-0:lang(zh-TW),
kuc-base-datetime-calendar-footer-1-26-0:lang(zh-TW) * {
  font-family: "微軟正黑體","Microsoft JhengHei","新宋体",NSimSun,STHeiti,
    Hei,"Heiti SC",sans-serif;
}
kuc-base-datetime-calendar-footer-1-26-0:lang(es),
kuc-base-datetime-calendar-footer-1-26-0:lang(es) * {
  font-family: sans-serif;
}
.kuc-base-datetime-calendar-footer-1-26-0__group {
  display: flex;
  align-items: flex-end;
  box-sizing: border-box;
  padding: 0;
  height: 27px;
  white-space: nowrap;
  width: 272px;
}
.kuc-base-datetime-calendar-footer-1-26-0__group__button {
  background: transparent;
  border: 1px solid transparent;
  color: #3498db;
  cursor: pointer;
  font-size: 13px;
  outline: none;
}
.kuc-base-datetime-calendar-footer-1-26-0__group__button:hover {
  color: #217dbb;
}
.kuc-base-datetime-calendar-footer-1-26-0__group__button:focus {
  border: 1px solid #3498db;
  outline: none;
}
.kuc-base-datetime-calendar-footer-1-26-0__group__center {
  width: 100%;
}
`,Fs=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},Is=class extends V{constructor(){super(...arguments),this.language=`en`,this._locale=z(`en`)}update(e){e.has(`language`)&&(this._locale=z(this.language)),super.update(e)}_handleClickCalendarFooterButtonNone(e){e.stopPropagation(),H(this,`kuc:calendar-footer-click-none`)}_handleClickCalendarFooterButtonToday(e){e.stopPropagation(),H(this,`kuc:calendar-footer-click-today`)}_handleKeyDownCalendarFooterButtonNone(e){e.key===`Tab`&&(e.shiftKey||(e.preventDefault(),H(this,`kuc:calendar-footer-tab-none`)))}render(){return j`
      <div class="kuc-base-datetime-calendar-footer-1-26-0__group">
        <button
          type="button"
          tabindex="0"
          class="kuc-base-datetime-calendar-footer-1-26-0__group__button kuc-base-datetime-calendar-footer-1-26-0__group__button--today"
          @click="${this._handleClickCalendarFooterButtonToday}"
        >
          ${this._locale.CALENDAR_FOOTER_TEXT.today}
        </button>
        <span class="kuc-base-datetime-calendar-footer-1-26-0__group__center"></span>
        <button
          type="button"
          tabindex="0"
          class="kuc-base-datetime-calendar-footer-1-26-0__group__button kuc-base-datetime-calendar-footer-1-26-0__group__button--none"
          @click="${this._handleClickCalendarFooterButtonNone}"
          @keydown="${this._handleKeyDownCalendarFooterButtonNone}"
        >
          ${this._locale.CALENDAR_FOOTER_TEXT.none}
        </button>
      </div>
    `}};Fs([P({type:String,attribute:`lang`,reflect:!0})],Is.prototype,`language`,void 0),Fs([F()],Is.prototype,`_locale`,void 0),window.customElements.get(`kuc-base-datetime-calendar-footer-1-26-0`)||(U(Ps),window.customElements.define(`kuc-base-datetime-calendar-footer-1-26-0`,Is));var Ls=`
.kuc-base-datetime-calendar-1-26-0__group {
  display: inline-block;
  box-sizing: border-box;
  width: 336px;
  padding: 32px 32px 24px;
  background: #ffffff;
  text-align: center;
  font-size: 13px;
}
`,Rs=`
kuc-base-datetime-calendar-body-1-26-0,
kuc-base-datetime-calendar-body-1-26-0 *,
kuc-base-datetime-calendar-body-1-26-0:lang(en),
kuc-base-datetime-calendar-body-1-26-0:lang(en) * {
  font-family: sans-serif;
}
kuc-base-datetime-calendar-body-1-26-0:lang(ja),
kuc-base-datetime-calendar-body-1-26-0:lang(ja) * {
  font-family: "メイリオ", "Hiragino Kaku Gothic ProN", Meiryo,
    sans-serif;
}
kuc-base-datetime-calendar-body-1-26-0:lang(zh),
kuc-base-datetime-calendar-body-1-26-0:lang(zh) * {
  font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,
    Hei, "Heiti SC", sans-serif;
}
kuc-base-datetime-calendar-body-1-26-0:lang(zh-TW),
kuc-base-datetime-calendar-body-1-26-0:lang(zh-TW) * {
  font-family: "微軟正黑體","Microsoft JhengHei","新宋体",NSimSun,STHeiti,
    Hei,"Heiti SC",sans-serif;
}
kuc-base-datetime-calendar-body-1-26-0:lang(es),
kuc-base-datetime-calendar-body-1-26-0:lang(es) * {
  font-family: sans-serif;
}
.kuc-base-datetime-calendar-body-1-26-0__table,
.kuc-base-datetime-calendar-body-1-26-0__table tr {
  border-collapse: separate;
  border-spacing: 0;
}
.kuc-base-datetime-calendar-body-1-26-0__table__date,
.kuc-base-datetime-calendar-body-1-26-0__table__date--selected {
  border-spacing: 1px;
  padding: 0px;
  border: 1px solid #ffffff;
}
.kuc-base-datetime-calendar-body-1-26-0__table__header {
  text-align: center;
  text-transform: uppercase;
  font-size: 10px;
  font-weight: 400;
  color: #333333;
}
:lang(ja) th.kuc-base-datetime-calendar-body-1-26-0__table__header {
  font-weight: 700;
}
:lang(es) th.kuc-base-datetime-calendar-body-1-26-0__table__header {
  text-transform: revert;
}
.kuc-base-datetime-calendar-body-1-26-0__table__date--selected,
.kuc-base-datetime-calendar-body-1-26-0__table__date,
.kuc-base-datetime-calendar-body-1-26-0__table__header {
  box-sizing: border-box;
  padding: 8px 0;
  width: 36px;
  height: 31px;
  border: 1px solid #ffffff;
  text-align: center;
  text-transform: uppercase;
  font-size: 10px;
  font-weight: 400;
  color: #333333;
  cursor: pointer;
}
.kuc-base-datetime-calendar-body-1-26-0__table__header:nth-child(1),
.kuc-base-datetime-calendar-body-1-26-0__table__header:nth-child(7) {
  color: #d4d7d7;
}
.kuc-base-datetime-calendar-body-1-26-0__table__date:focus,
.kuc-base-datetime-calendar-body-1-26-0__table__date--selected:focus {
  outline: none;
}
.kuc-base-datetime-calendar-body-1-26-0__table__date
  .kuc-base-datetime-calendar-body-1-26-0__table__date__button:hover {
  color: #000000;
}
.kuc-base-datetime-calendar-body-1-26-0__table__date--selected {
  border-color: #3498db;
}
.kuc-base-datetime-calendar-body-1-26-0__table__date--selected--today,
.kuc-base-datetime-calendar-body-1-26-0__table__date--today {
  color: #ffffff;
  background: #888888;
}
.kuc-base-datetime-calendar-body-1-26-0__table__date--today:hover {
  color: #333333;
}
.kuc-base-datetime-calendar-body-1-26-0__table__date--other-month,
.kuc-base-datetime-calendar-body-1-26-0__table__date--other-month:hover {
  color: #d4d7d7;
}
`,zs=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},Bs=class extends V{constructor(){super(),this.month=1,this.year=2021,this.language=`en`,this.value=``,this._month=1,this._year=2021,this._locale=z(`en`),this._handleKeyDownDocument=this._handleKeyDownDocument.bind(this)}connectedCallback(){super.connectedCallback(),setTimeout(()=>{document.addEventListener(`keydown`,this._handleKeyDownDocument)},1)}disconnectedCallback(){document.removeEventListener(`keydown`,this._handleKeyDownDocument),super.disconnectedCallback()}update(e){if(e.forEach((e,t)=>{t===`language`&&(this._locale=z(this.language))}),e.has(`month`)&&(this._month=this.month),e.has(`year`)&&(this._year=this.year),e.has(`value`)){let{month:e,year:t}=this._separateDateValue();this._month=parseInt(e,10),this._year=parseInt(t,10)}super.update(e)}render(){return j`
      <table class="kuc-base-datetime-calendar-body-1-26-0__table" role="grid">
        ${this._getHeaderItemsTemplate()}<!--
        -->${this._getDateItemsTemplate()}
      </table>
    `}updated(e){e.has(`value`)&&this.focusActiveDate(),super.update(e)}focusActiveDate(){this._focusedItem&&this._focusedItem.focus({preventScroll:!0})}_handleKeyDownDocument(e){e.key===`Escape`&&(e.preventDefault(),e.stopPropagation(),H(this,`kuc:calendar-body-blur`,{}))}_handleClickDate(e){e.preventDefault(),e.stopPropagation();let t=e.target;t.setAttribute(`aria-selected`,`true`);let n=t.getAttribute(`data-date`)||``;this._dispatchClickEvent(n)}_handleKeyDownDate(e){let t=!1;switch(e.key){case`Up`:case`ArrowUp`:t=!0,this._moveToDate(-7);break;case`Down`:case`ArrowDown`:t=!0,this._moveToDate(7);break;case`Left`:case`ArrowLeft`:t=!0,this._moveToDate(-1);break;case`Right`:case`ArrowRight`:t=!0,this._moveToDate(1);break;case` `:case`Enter`:{t=!0;let e=this._getSelectedValue();this._dispatchClickEvent(e);break}}t&&(e.stopPropagation(),e.preventDefault())}_dispatchClickEvent(e){let t={oldValue:this.value,value:e};H(this,`kuc:calendar-body-click-date`,t),this.value=e}_isToday(e){let t=new Date;return parseInt(e[0],10)===t.getFullYear()&&parseInt(e[1],10)===t.getMonth()+1&&parseInt(e[2],10)===t.getDate()}_moveToDate(e){let t=this._getSelectedValue(),{day:n}=this._separateDateValue(t),r=`${this._year}-${R(this._month)}-${n}`,i=new Date(`${r||this._getValueItemFocused()}T00:00:00`);if(isNaN(i.getTime()))return;i.setDate(i.getDate()+e);let a=this._getDateString(i),o=r;this.value=a;let s={oldValue:o,value:a};H(this,`kuc:calendar-body-change-date`,s)}_separateDateValue(e=this.value){let t=e.split(`-`);return{day:t[2],month:t[1],year:t[0]}}_getSelectedValue(){return this._highlightItem?this._highlightItem.dataset.date||``:this._selectedItem&&this._selectedItem.getAttribute(`data-date`)||``}_getValueItemFocused(){return this._focusedItem&&this._focusedItem.getAttribute(`data-date`)||``}_getDateClass(e,t){return t?this._isToday(e)?` kuc-base-datetime-calendar-body-1-26-0__table__date--selected--today`:``:this._isToday(e)?` kuc-base-datetime-calendar-body-1-26-0__table__date--selected--today`:` kuc-base-datetime-calendar-body-1-26-0__table__date--other-month`}_getDateString(e=new Date){return`${e.getFullYear()}-${R(e.getMonth()+1)}-${R(e.getDate())}`}_isSameDayOfMoment(e){let t=parseInt(e[1],10),n=parseInt(e[2],10),r=parseInt(e[0],10),i=new Date().getDate();if(!this.value.split(`-`)[2])return!1;if(this.value&&(i=new Date(`${this.value}T00:00:00`).getDate()),i===n&&t===this._month)return!0;let a=new Date(r,this._month,0).getDate();return i>a&&a===n&&t===this._month}_getHeaderItemsTemplate(){return j`
      <thead>
        <tr>
          ${this._locale.WEEK_DAYS.map(e=>j`
              <th
                class="kuc-base-datetime-calendar-body-1-26-0__table__header"
                role="columnheader"
                abbr="${e.abbr}"
              >
                ${e.text}
              </th>
            `)}
        </tr>
      </thead>
    `}_getDateItemsTemplate(){let e=io(this._year,this._month-1),t=this._locale.MONTH_SELECT[this._month-1];return j`
      <tbody>
        ${e.map(e=>j`
            <tr>
              ${e.map(e=>{let n=e.text.split(`-`),r=this._isSameDayOfMoment(n),i=parseInt(n[1],10)===this._month,a=(this.value===e.attr||r)&&i;return j`
                  <td
                    role="gridcell"
                    class="kuc-base-datetime-calendar-body-1-26-0__table__date${a?`--selected`:``}${this._getDateClass(n,i)}"
                    aria-selected="${this.value===e.attr}"
                    tabindex="${a?`0`:`-1`}"
                    aria-current="${this._isToday(n)?`date`:!1}"
                    aria-label="${n[2]} ${t}"
                    data-date="${e.attr}"
                    @click="${this._handleClickDate}"
                    @keydown="${this._handleKeyDownDate}"
                  >
                    ${n[2]||``}
                  </td>
                `})}
            </tr>
          `)}
      </tbody>
    `}};zs([P({type:Number})],Bs.prototype,`month`,void 0),zs([P({type:Number})],Bs.prototype,`year`,void 0),zs([P({type:String,attribute:`lang`,reflect:!0})],Bs.prototype,`language`,void 0),zs([P({type:String,reflect:!0})],Bs.prototype,`value`,void 0),zs([F()],Bs.prototype,`_month`,void 0),zs([F()],Bs.prototype,`_year`,void 0),zs([I(`.kuc-base-datetime-calendar-body-1-26-0__table__date--selected[aria-selected="true"]`)],Bs.prototype,`_selectedItem`,void 0),zs([I(`.kuc-base-datetime-calendar-body-1-26-0__table__date--selected`)],Bs.prototype,`_highlightItem`,void 0),zs([I(`.kuc-base-datetime-calendar-body-1-26-0__table__date--selected[tabindex="0"]`)],Bs.prototype,`_focusedItem`,void 0),window.customElements.get(`kuc-base-datetime-calendar-body-1-26-0`)||(U(Rs),window.customElements.define(`kuc-base-datetime-calendar-body-1-26-0`,Bs));var Vs=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},Hs=class extends V{constructor(){super(...arguments),this.language=`en`,this.value=``,this._month=1,this._year=new Date().getFullYear()}update(e){e.has(`value`)&&this._updateValue(),super.update(e)}render(){return j`
      <div
        class="kuc-base-datetime-calendar-1-26-0__group"
        role="dialog"
        aria-modal="true"
        aria-label="Calender"
        @click="${this._handleClickCalendarGroup}"
        @keydown="${this._handleKeyDownCalendarGroup}"
      >
        <kuc-base-datetime-calendar-header-1-26-0
          .year="${this._year}"
          .month="${this._month}"
          .language="${this.language}"
          @kuc:calendar-header-change="${this._handleCalendarHeaderChange}"
        ></kuc-base-datetime-calendar-header-1-26-0>
        <kuc-base-datetime-calendar-body-1-26-0
          .year="${this._year}"
          .month="${this._month}"
          .value="${this.value}"
          .language="${this.language}"
          @kuc:calendar-body-change-date="${this._handleCalendarBodyChangeDate}"
        ></kuc-base-datetime-calendar-body-1-26-0>
        <kuc-base-datetime-calendar-footer-1-26-0
          .language="${this.language}"
        ></kuc-base-datetime-calendar-footer-1-26-0>
      </div>
    `}async updated(e){await this.updateComplete,super.updated(e)}focusActiveDate(){let e=this.querySelector(`kuc-base-datetime-calendar-body-1-26-0`);e&&e.focusActiveDate()}repositionHeaderListboxes(){var e,t;(e=this._monthEl)==null||e.repositionListBox(),(t=this._yearEl)==null||t.repositionListBox()}_handleKeyDownCalendarGroup(e){e.key===`Escape`&&(e.preventDefault(),e.stopPropagation(),H(this,`kuc:calendar-escape`,{}))}_handleClickCalendarGroup(e){e.stopPropagation(),this._listBoxMonthEl&&this._monthEl.closeListBox(),this._listBoxYearEl&&this._yearEl.closeListBox()}_handleCalendarHeaderChange(e){let{year:t,month:n}=this._separateValue(e.detail.value);this._year=t,this._month=n}_handleCalendarBodyChangeDate(e){let{year:t,month:n}=this._separateValue(e.detail.value);this._year=t,this._month=n}_updateValue(){this.value===``&&(this.value=xo().slice(0,7)+`-01`);let{year:e,month:t}=this._separateValue(this.value);this._year=e,this._month=t}_separateValue(e){let t=e.split(`-`);return{year:parseInt(t[0],10),month:parseInt(t[1],10)}}};Vs([P({type:String,attribute:`lang`,reflect:!0})],Hs.prototype,`language`,void 0),Vs([P({type:String,reflect:!0})],Hs.prototype,`value`,void 0),Vs([I(`.kuc-base-datetime-calendar-header-1-26-0__month`)],Hs.prototype,`_monthEl`,void 0),Vs([I(`.kuc-base-datetime-calendar-header-1-26-0__year`)],Hs.prototype,`_yearEl`,void 0),Vs([I(`.kuc-base-datetime-header-month-1-26-0__listbox`)],Hs.prototype,`_listBoxMonthEl`,void 0),Vs([I(`.kuc-base-datetime-header-year-1-26-0__listbox`)],Hs.prototype,`_listBoxYearEl`,void 0),Vs([F()],Hs.prototype,`_month`,void 0),Vs([F()],Hs.prototype,`_year`,void 0),window.customElements.get(`kuc-base-datetime-calendar-1-26-0`)||(U(Ls),window.customElements.define(`kuc-base-datetime-calendar-1-26-0`,Hs));var Us=`
kuc-base-datetime-listbox-1-26-0,
kuc-base-datetime-listbox-1-26-0 *,
kuc-base-datetime-listbox-1-26-0:lang(en),
kuc-base-datetime-listbox-1-26-0:lang(en) * {
  font-family: sans-serif;
}
kuc-base-datetime-listbox-1-26-0:lang(ja),
kuc-base-datetime-listbox-1-26-0:lang(ja) * {
  font-family: "メイリオ", "Hiragino Kaku Gothic ProN", Meiryo,
    sans-serif;
}
kuc-base-datetime-listbox-1-26-0:lang(zh),
kuc-base-datetime-listbox-1-26-0:lang(zh) * {
  font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,
    Hei, "Heiti SC", sans-serif;
}
kuc-base-datetime-listbox-1-26-0:lang(zh-TW),
kuc-base-datetime-listbox-1-26-0:lang(zh-TW) * {
  font-family: "微軟正黑體","Microsoft JhengHei","新宋体",NSimSun,STHeiti,
    Hei,"Heiti SC"
}
kuc-base-datetime-listbox-1-26-0:lang(es),
kuc-base-datetime-listbox-1-26-0:lang(es) * {
  font-family: sans-serif;
}
.kuc-base-datetime-listbox-1-26-0__listbox[popover] {
  margin: 0;
  padding: 8px 0;
  box-sizing: border-box;
  border: 1px solid #e3e7e8;
  background-color: #ffffff;
  list-style: none;
  line-height: 1;
  overflow-y: auto;
  -webkit-tap-highlight-color: transparent;
  box-shadow: 0 5px 10px rgb(0 0 0 / 10%);
  position: fixed;
  z-index: 2000;
}
.kuc-base-datetime-listbox-1-26-0__listbox__item {
  position: relative;
  display: block;
  box-sizing: border-box;
  width: 100%;
  min-width: 130px;
  padding: 8px 16px 8px 25px;
  color: #333333;
  cursor: pointer;
  -webkit-tap-highlight-color: initial;
  text-align: left;
  font-size: 14px;
  user-select: none;
}
.kuc-base-datetime-listbox-1-26-0__listbox__item[aria-selected="true"] {
  color: #3498db;
}
.kuc-base-datetime-listbox-1-26-0__listbox--highlight {
  background-color: #e2f2fe;
  cursor: pointer;
}
.kuc-base-datetime-listbox-1-26-0__listbox__item__icon {
  position: absolute;
  left: 8px;
  top: 10px;
  background-color: transparent;
}
.kuc-base-datetime-listbox-1-26-0__listbox__item:focus {
  outline: none;
}
`,Ws=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},Gs=class extends V{constructor(){super(),this.value=``,this.items=[],this.maxHeight=300,this.doFocus=!0,this._actionKeyboard=!1,this._firstHighlight=!0,this._handleClickDocument=this._handleClickDocument.bind(this)}connectedCallback(){super.connectedCallback(),setTimeout(()=>{document.addEventListener(`click`,this._handleClickDocument)},1)}disconnectedCallback(){document.removeEventListener(`click`,this._handleClickDocument),super.disconnectedCallback()}getHighlightItemEl(){return this._highlightItemEl}showPopover(){var e;this.requestUpdate(),(e=this._listBoxEl)==null||e.showPopover()}hidePopover(){var e;(e=this._listBoxEl)==null||e.hidePopover(),this.requestUpdate()}render(){return j`
      <ul
        popover="manual"
        style="max-height: ${this.maxHeight}px;"
        class="kuc-base-datetime-listbox-1-26-0__listbox"
        role="listbox"
        @mousedown="${this._handleMouseDownListBox}"
        @click="${this._handleClickListBox}"
      >
        ${this.items.map(e=>this._getListBoxItemTemplate(e))}
      </ul>
    `}async updated(e){await this.updateComplete,e.has(`value`)&&this._highlightSelectedItem(),this._scrollToView(),super.updated(e)}_handleClickDocument(){H(this,`kuc:listbox-blur`,{})}_handleClickListBox(e){e.stopPropagation()}_handleKeyDownListBox(e){switch(e.preventDefault(),e.stopPropagation(),e.key){case`Up`:case`ArrowUp`:this._actionKeyboard=!0,this._highlightPrevItemEl(),this._focusHighlightItemEl(),this._scrollToView();break;case`Down`:case`ArrowDown`:this._actionKeyboard=!0,this._highlightNextItemEl(),this._focusHighlightItemEl(),this._scrollToView();break;case`Home`:this._actionKeyboard=!0,this._highlightFirstItem(),this._focusHighlightItemEl();break;case`End`:this._actionKeyboard=!0,this._highlightLastItem(),this._focusHighlightItemEl();break;case`Tab`:H(this,`kuc:listbox-click`,{});break;case`Escape`:H(this,`kuc:listbox-escape`,{});break;case` `:case`Enter`:{let e={value:this._highlightItemEl.getAttribute(`value`)||``};H(this,`kuc:listbox-click`,e);break}}}_handleMouseDownListBox(e){if(e.preventDefault(),e.stopPropagation(),e.target===e.currentTarget)return;let t={value:e.target.getAttribute(`value`)||``};H(this,`kuc:listbox-click`,t)}_handleMouseOverItem(e){if(this._actionKeyboard){this._actionKeyboard=!1;return}let t=e.target;this._setHighlightItemEl(t),this.doFocus&&this._focusHighlightItemEl(!1)}_setHighlightItemEl(e){this._removeHighlight(),e.classList.add(`kuc-base-datetime-listbox-1-26-0__listbox--highlight`),e.setAttribute(`tabindex`,`0`)}_highlightSelectedItem(){if(!this.doFocus)return;let e=Array.from(this._itemsEl).filter(e=>e.getAttribute(`aria-selected`)===`true`)[0];e&&(this._itemSelectedEl=e,this._setHighlightItemEl(e),this._focusHighlightItemEl())}_highlightFirstItem(){this._itemSelectedEl=this._firstItemEl,this._setHighlightItemEl(this._firstItemEl)}_highlightLastItem(){this._itemSelectedEl=this._lastItemEl,this._setHighlightItemEl(this._lastItemEl)}_highlightNextItemEl(){if(this._highlightItemEl===null||this._iconChecked===null){this._highlightFirstItem();return}let e=this._getNextItemEl();e?(this._setHighlightItemEl(e),this._firstHighlight=!1,this._itemSelectedEl=e):this._highlightFirstItem()}_getNextItemEl(){let e=this._iconChecked.parentElement;!this._itemSelectedEl&&e&&this._firstHighlight&&(this._itemSelectedEl=e);let t=this._highlightItemEl.nextElementSibling;return this._itemSelectedEl?this._itemSelectedEl.nextElementSibling?(t=this._itemSelectedEl.nextElementSibling,t):this._firstItemEl:t}_highlightPrevItemEl(){if(this._highlightItemEl===null||this._iconChecked===null){this._highlightLastItem();return}let e=this._getPreviousItemEl();e?(this._setHighlightItemEl(e),this._firstHighlight=!1,this._itemSelectedEl=e):this._highlightLastItem()}_getPreviousItemEl(){let e=this._iconChecked.parentElement;!this._itemSelectedEl&&e&&this._firstHighlight&&(this._itemSelectedEl=e);let t=this._highlightItemEl.previousElementSibling;return this._itemSelectedEl?this._itemSelectedEl.previousElementSibling?(t=this._itemSelectedEl.previousElementSibling,t):this._lastItemEl:t}_removeHighlight(){this._highlightItemEl&&(this._highlightItemEl.setAttribute(`tabindex`,`-1`),this._highlightItemEl.classList.remove(`kuc-base-datetime-listbox-1-26-0__listbox--highlight`))}_focusHighlightItemEl(e){let t=this._highlightItemEl;t&&(t.focus({preventScroll:!0}),e!==!1&&this._dispatchListBoxFocusChange())}_dispatchListBoxFocusChange(){let e={value:this._highlightItemEl.getAttribute(`value`)||``};H(this,`kuc:listbox-focus-change`,e)}_scrollToView(){let e=this._highlightItemEl||this._getHighlightItemByValue();if(!e||!this._listBoxEl)return;let t=e.offsetHeight,n=this._listBoxEl.clientHeight/t/2,r=e.offsetTop-n*t;r<0&&(r=0),this._listBoxEl.scrollTop=r}_getHighlightItemByValue(){let e=Array.from(this._listBoxEl.children),t=new Date(Date.parse(`2021/01/01 ${this.value}`)),n=e.find(e=>new Date(Date.parse(`2021/01/01 ${e.title}`))>=t);return n||=e[e.length-1],!this.doFocus||!n||(this._setHighlightItemEl(n),this._focusHighlightItemEl()),n}_getListBoxItemTemplate(e){let t=this.value===e.value&&this.doFocus;return j`
      <li
        class="kuc-base-datetime-listbox-1-26-0__listbox__item"
        role="option"
        tabindex="${t?`0`:`-1`}"
        aria-selected="${t}"
        title="${e.label||``}"
        value="${e.value===void 0?``:e.value}"
        @mouseover="${this._handleMouseOverItem}"
        @keydown="${this._handleKeyDownListBox}"
      >
        ${t?this._getCheckedIconSvgTemplate():``}
        ${e.label===void 0?e.value:e.label}
      </li>
    `}_getCheckedIconSvgTemplate(){return M`<svg
          class="kuc-base-datetime-listbox-1-26-0__listbox__item__icon"
          width="11"
          height="9"
          viewBox="0 0 11 9"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M0 5L1.5 3L4.5 5.5L9.5 0L11 1.5L4.5 8.5L0 5Z"
            fill="#3498db"
          />
        </svg>`}};Ws([P({type:String})],Gs.prototype,`value`,void 0),Ws([P({type:Array})],Gs.prototype,`items`,void 0),Ws([P({type:Number})],Gs.prototype,`maxHeight`,void 0),Ws([P({type:Boolean})],Gs.prototype,`doFocus`,void 0),Ws([I(`.kuc-base-datetime-listbox-1-26-0__listbox`)],Gs.prototype,`_listBoxEl`,void 0),Ws([ja(`.kuc-base-datetime-listbox-1-26-0__listbox__item`)],Gs.prototype,`_itemsEl`,void 0),Ws([I(`.kuc-base-datetime-listbox-1-26-0__listbox__item`)],Gs.prototype,`_firstItemEl`,void 0),Ws([I(`.kuc-base-datetime-listbox-1-26-0__listbox__item:last-child`)],Gs.prototype,`_lastItemEl`,void 0),Ws([I(`.kuc-base-datetime-listbox-1-26-0__listbox--highlight`)],Gs.prototype,`_highlightItemEl`,void 0),Ws([I(`.kuc-base-datetime-listbox-1-26-0__listbox__item__icon`)],Gs.prototype,`_iconChecked`,void 0),Ws([F()],Gs.prototype,`_actionKeyboard`,void 0),Ws([F()],Gs.prototype,`_firstHighlight`,void 0),window.customElements.get(`kuc-base-datetime-listbox-1-26-0`)||(U(Us),window.customElements.define(`kuc-base-datetime-listbox-1-26-0`,Gs));var Ks=`
input.kuc-base-date-1-26-0__input {
  width: 100px;
  height: 40px;
  padding: 0px;
  text-align: center;
  border: 1px solid #e3e7e8;
  color: #333333;
  box-sizing: border-box;
  font-size: 14px;
  box-shadow: 2px 2px 4px #f5f5f5 inset, -2px -2px 4px #f5f5f5 inset;
}

input.kuc-base-date-1-26-0__input:focus {
  outline: none;
  border: 1px solid #3498db;
}
input.kuc-base-date-1-26-0__input--focus {
  box-shadow: 2px 2px 4px #f5f5f5 inset, -2px -2px 4px #f5f5f5 inset;
  border: 1px solid #3498db;
  background-color: #ffffff;
  color: #333333;
}
.kuc-datetime-picker-1-26-0__group__inputs--date
  input.kuc-base-date-1-26-0__input--focus {
  border-color: #3498db;
}
input.kuc-base-date-1-26-0__input:disabled {
  color: #888888 !important;
  background-color: #d4d7d7;
  box-shadow: none;
  cursor: not-allowed;
}
.kuc-base-date-1-26-0__calendar {
  padding: 0;
  border: none;
  background-color: #ffffff;
  text-align: center;
  box-sizing: border-box;
  box-shadow: 0 0 8px 2px rgb(0 0 0 / 10%);
}
.kuc-base-date-1-26-0__calendar[popover] {
  position: fixed;
  z-index: 2000;
  right: auto;
  bottom: auto;
}
.kuc-base-date-1-26-0__assistive-text {
  clip: rect(1px, 1px, 1px, 1px);
  overflow: hidden;
  position: absolute !important;
  padding: 0px !important;
  border: 0px !important;
  height: 1px !important;
  width: 1px !important;
}
`,qs=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},Js=class extends V{constructor(){super(...arguments),this.inputAriaLabel=``,this.inputId=``,this.language=`en`,this.value=``,this.disabled=!1,this.inputAriaInvalid=!1,this.required=!1,this._dateTimeCalendarVisible=!1,this._locale=z(`en`),this._calendarValue=``,this._inputValue=``,this._valueForReset=``,this._hasFocus=!1,this._blurBaseline=``,this._resizeDebounceTimer=null,this._scrollRAF=0,this._calendarNaturalWidth=0,this._calendarNaturalHeight=0,this._scrollTargets=[],this._DEBOUNCE_DELAY=200,this._schedulePositionOnScroll=()=>{this._dateTimeCalendarVisible&&!this._scrollRAF&&(this._scrollRAF=requestAnimationFrame(()=>{this._scrollRAF=0,this._positionCalendar()}))},this._schedulePositionOnResize=()=>{this._dateTimeCalendarVisible&&(this._resizeDebounceTimer!==null&&window.clearTimeout(this._resizeDebounceTimer),this._resizeDebounceTimer=window.setTimeout(()=>{var e;this._resizeDebounceTimer=null,this._positionCalendar(),(e=this._calendarEl)==null||e.repositionHeaderListboxes()},this._DEBOUNCE_DELAY))},this._handleFocusIn=e=>{this._isFocusInsideComponent(e.relatedTarget)||(this._hasFocus=!0,this._blurBaseline=this.value,H(this,`kuc:base-date-focusin`,{}))},this._handleFocusOut=e=>{this._isFocusInsideComponent(e.relatedTarget)||this._dateTimeCalendarVisible||this._emitDeferredBlur()},this._onDocClick=e=>{let t=e.composedPath(),n=this._calendarEl&&t.includes(this._calendarEl),r=t.includes(this._dateInput);!n&&!r&&(this._closeCalendar(),this._isFocusInsideComponent(document.activeElement)||this._emitDeferredBlur())},this._positionCalendar=()=>{if(!this._calendarEl||!this._dateInput)return;let e=this._dateInput.getBoundingClientRect(),t=this._calendarNaturalWidth||336,n=this._calendarNaturalHeight||0,r=e.top,i=window.innerHeight-e.bottom,a;a=e.bottom,i<r&&(a=e.top-n);let o=e.left;o>window.innerWidth-t&&window.innerWidth-e.left<e.right&&(o=e.right-t),this._calendarEl.style.left=`${Math.floor(o)}px`,this._calendarEl.style.top=`${Math.floor(a)}px`}}update(e){e.has(`inputId`)&&(this._GUID=this.inputId),e.has(`language`)&&(this._locale=z(this.language),this._updateValueProp()),e.has(`value`)&&this._updateValueProp(),super.update(e)}connectedCallback(){super.connectedCallback(),this.addEventListener(`focusin`,this._handleFocusIn),this.addEventListener(`focusout`,this._handleFocusOut)}disconnectedCallback(){this._scrollRAF&&=(cancelAnimationFrame(this._scrollRAF),0),this._resizeDebounceTimer!==null&&(window.clearTimeout(this._resizeDebounceTimer),this._resizeDebounceTimer=null),this._detachListeners(),this.removeEventListener(`focusin`,this._handleFocusIn),this.removeEventListener(`focusout`,this._handleFocusOut),super.disconnectedCallback()}_isFocusInsideComponent(e){return e instanceof HTMLElement?e===this._dateInput||e===this._assistiveBtn||e===this._calendarEl||this._calendarEl?.contains(e)===!0:!1}_emitDeferredBlur(){if(!this._hasFocus)return;this._hasFocus=!1;let e={value:this.value,oldValue:this._blurBaseline},t=this._getCurrentError();t&&(e.error=t),H(this,`kuc:base-date-blur`,e)}_getCurrentError(){if(this._inputValue&&!So(this.language,this._inputValue))return this._locale.INVALID_FORMAT}render(){return j`
      <input
        class="kuc-base-date-1-26-0__input"
        id="${this._GUID}-label"
        type="text"
        text-align="center"
        .value="${this._inputValue}"
        aria-describedby="${this._GUID}-error"
        aria-invalid="${this.inputAriaInvalid}"
        aria-required="${this.required}"
        ?disabled="${this.disabled}"
        ?required="${this.required}"
        @click="${this._handleClickInput}"
        @change="${this._handleChangeInput}"
        @keydown="${this._handleKeyDownInput}"
        @input="${this._handleInputValue}"
      />
      <button
        type="button"
        aria-haspopup="dialog"
        aria-expanded="${this._dateTimeCalendarVisible}"
        class="kuc-base-date-1-26-0__assistive-text"
        @click="${this._handleClickButton}"
        @focus="${this._handleFocusButton}"
        @blur="${this._handleBlurButton}"
        ?disabled="${this.disabled}"
      >
        show date picker
      </button>
      <kuc-base-datetime-calendar-1-26-0
        class="kuc-base-date-1-26-0__calendar"
        .language="${this.language}"
        .value="${this._calendarValue}"
        popover="manual"
        @kuc:calendar-header-previous-shifttab="${this._handleShiftTabCalendarPrevMonth}"
        @kuc:calendar-body-change-date="${this._handleClickCalendarChangeDate}"
        @kuc:calendar-body-click-date="${this._handleClickCalendarClickDate}"
        @kuc:calendar-footer-click-none="${this._handleClickCalendarFooterButtonNone}"
        @kuc:calendar-footer-tab-none="${this._handleTabCalendarFooterButtonNone}"
        @kuc:calendar-footer-click-today="${this._handleClickCalendarFooterButtonToday}"
        @kuc:calendar-escape="${this._handleCalendarEscape}"
      >
      </kuc-base-datetime-calendar-1-26-0>
    `}updated(e){e.has(`inputAriaLabel`)&&this.inputAriaLabel&&this._dateInput.setAttribute(`aria-label`,this.inputAriaLabel),super.updated(e)}_handleInputValue(e){let t=e.target.value;this._inputValue=t||``}_handleClickInput(){this._dateTimeCalendarVisible?this._closeCalendar():(this._valueForReset=this.value,this._calendarValue=this._getNewCalendarValue(this._inputValue||``),this._openCalendar())}_updateValueProp(){if(this.value){let e=this._setCalendarValueWhenInvalidValue();this._inputValue=vo(this.language,this.value),this._calendarValue=e||this.value;return}let e=xo();this._inputValue=``,this._calendarValue=this._calendarValue?this._calendarValue.slice(0,7)+`-01`:e.slice(0,7)}_setCalendarValueWhenInvalidValue(){if(this.value&&!es(this.value)){let e=xo();return this._calendarValue||e.slice(0,7)}return``}_getNewCalendarValue(e){if(So(this.language,e))return yo(this.language,e);if(!this._calendarValue)return``;let t=this._calendarValue.slice(0,7);return e===``&&(t=this._calendarValue.slice(0,7)+`-01`),t}_handleChangeInput(e){e.stopPropagation();let t=(e?.target).value;if(this._calendarValue=this._getNewCalendarValue(t),this._calendarValue.length>7){this._dispathDateChangeCustomEvent(yo(this.language,t));return}let n={value:void 0,oldValue:this.value,error:this._locale.INVALID_FORMAT};this._inputValue=t,H(this,`kuc:base-date-change`,n)}_handleKeyDownInput(e){e.key===`Escape`&&this._closeCalendar()}_closeCalendar(){this._dateTimeCalendarVisible=!1,this._calendarEl&&this._calendarEl.hidePopover(),this._scrollRAF&&=(cancelAnimationFrame(this._scrollRAF),0),this._resizeDebounceTimer!==null&&(window.clearTimeout(this._resizeDebounceTimer),this._resizeDebounceTimer=null),this._detachListeners()}async _openCalendar(){if(this._dateTimeCalendarVisible=!0,this._calendarEl){if(await this.updateComplete,this._calendarEl.showPopover(),!this._calendarNaturalWidth||!this._calendarNaturalHeight){let e=jo(this._calendarEl);this._calendarNaturalWidth=e.width,this._calendarNaturalHeight=e.height}this._positionCalendar(),this._attachListeners(),this._calendarEl.focusActiveDate()}}_attachListeners(){this._detachListeners(),this._scrollTargets=Mo(this._dateInput);for(let e of this._scrollTargets)e.addEventListener(`scroll`,this._schedulePositionOnScroll,{passive:!0});window.addEventListener(`resize`,this._schedulePositionOnResize),document.addEventListener(`click`,this._onDocClick,{capture:!0})}_detachListeners(){for(let e of this._scrollTargets)e.removeEventListener(`scroll`,this._schedulePositionOnScroll);this._scrollTargets=[],window.removeEventListener(`resize`,this._schedulePositionOnResize),document.removeEventListener(`click`,this._onDocClick,{capture:!0})}_handleShiftTabCalendarPrevMonth(){this._footerNoneBtn.focus()}_handleClickCalendarChangeDate(e){e.detail.oldValue=this.value,this.value=e.detail.value,H(this,`kuc:base-date-change`,e.detail)}_handleClickCalendarClickDate(e){this._closeCalendar(),e.detail.oldValue=this.value,this._dateInput.focus(),e.detail.oldValue!==e.detail.value&&(this.value=e.detail.value,H(this,`kuc:base-date-change`,e.detail))}_handleClickCalendarFooterButtonNone(){this._closeCalendar(),this._dateInput.focus(),this._inputValue=``;let e=xo(),t=this._setCalendarValueWhenInvalidValue();t||=this._calendarValue?this._calendarValue.slice(0,7)+`-01`:e.slice(0,7)+`-01`,this._calendarValue=t,this._dispathDateChangeCustomEvent(void 0)}_handleTabCalendarFooterButtonNone(){this._previousMonth.focus()}_handleClickCalendarFooterButtonToday(){this._closeCalendar();let e=xo();this._dateInput.focus(),this._dispathDateChangeCustomEvent(e)}_handleCalendarEscape(){let e=this._valueForReset;if(this._closeCalendar(),this._dateInput.focus(),e===this.value)return;let t={oldValue:this.value,value:e};this.value=e,H(this,`kuc:base-date-change`,t)}_dispathDateChangeCustomEvent(e){let t={value:e,oldValue:this.value};this.value=e===void 0?``:e,H(this,`kuc:base-date-change`,t)}_handleClickButton(){this._dateTimeCalendarVisible?this._closeCalendar():(this._valueForReset=this.value,this._calendarValue=this._getNewCalendarValue(this._inputValue||``),this._openCalendar())}_handleBlurButton(){this._dateInput.classList.remove(`kuc-base-date-1-26-0__input--focus`)}_handleFocusButton(){this._dateInput.classList.add(`kuc-base-date-1-26-0__input--focus`)}};qs([P({type:String})],Js.prototype,`inputAriaLabel`,void 0),qs([P({type:String})],Js.prototype,`inputId`,void 0),qs([P({type:String,attribute:`lang`,reflect:!0})],Js.prototype,`language`,void 0),qs([P({type:String,reflect:!0})],Js.prototype,`value`,void 0),qs([P({type:Boolean})],Js.prototype,`disabled`,void 0),qs([P({type:Boolean})],Js.prototype,`inputAriaInvalid`,void 0),qs([P({type:Boolean})],Js.prototype,`required`,void 0),qs([I(`.kuc-base-date-1-26-0__input`)],Js.prototype,`_dateInput`,void 0),qs([I(`.kuc-base-date-1-26-0__calendar`)],Js.prototype,`_calendarEl`,void 0),qs([I(`.kuc-base-date-1-26-0__assistive-text`)],Js.prototype,`_assistiveBtn`,void 0),qs([I(`.kuc-base-datetime-calendar-header-1-26-0__group__button--previous-month`)],Js.prototype,`_previousMonth`,void 0),qs([I(`.kuc-base-datetime-calendar-footer-1-26-0__group__button--none`)],Js.prototype,`_footerNoneBtn`,void 0),qs([F()],Js.prototype,`_dateTimeCalendarVisible`,void 0),window.customElements.get(`kuc-base-date-1-26-0`)||(U(Ks),window.customElements.define(`kuc-base-date-1-26-0`,Js));var Ys=`
kuc-date-picker-1-26-0,
kuc-date-picker-1-26-0 *,
kuc-date-picker-1-26-0:lang(en),
kuc-date-picker-1-26-0:lang(en) * {
  font-family: sans-serif;
}
kuc-date-picker-1-26-0:lang(ja),
kuc-date-picker-1-26-0:lang(ja) * {
  font-family: "メイリオ", "Hiragino Kaku Gothic ProN", Meiryo,
    sans-serif;
}
kuc-date-picker-1-26-0:lang(zh),
kuc-date-picker-1-26-0:lang(zh) * {
  font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,
    Hei, "Heiti SC", sans-serif;
}
kuc-date-picker-1-26-0:lang(zh-TW),
kuc-date-picker-1-26-0:lang(zh-TW) * {
  font-family: "微軟正黑體","Microsoft JhengHei","新宋体",NSimSun,STHeiti,
    Hei,"Heiti SC"
}
kuc-date-picker-1-26-0:lang(es),
kuc-date-picker-1-26-0:lang(es) * {
  font-family: sans-serif;
}
kuc-date-picker-1-26-0 {
  font-size: 14px;
  color: #333333;
  display: inline-table;
  vertical-align: top;
  max-width: var(--kuc-date-picker-input-width, 100px);
  width: var(--kuc-date-picker-input-width, 100px);
  line-height: 1.5;
}
kuc-date-picker-1-26-0[hidden] {
  display: none;
}
.kuc-date-picker-1-26-0__group {
  display: flex;
  flex-direction: column;
  border: none;
  padding: 0px;
  height: auto;
  margin: 0px;
}
.kuc-date-picker-1-26-0__group__label {
  display: inline-block;
  padding: 4px 0px 8px 0px;
  white-space: nowrap;
}
.kuc-date-picker-1-26-0__group__label[hidden] {
  display: none;
}
.kuc-date-picker-1-26-0__group input[type=text].kuc-base-date-1-26-0__input {
  width: var(--kuc-date-picker-input-width, 100px);
  height: var(--kuc-date-picker-input-height, 40px);
  padding: 0px;
  text-align: center;
  color: var(--kuc-date-picker-input-color);
  border: 1px solid #e3e7e8;
  box-sizing: border-box;
  font-size: var(--kuc-date-picker-input-font-size, 14px);
  box-shadow: 2px 2px 4px #f5f5f5 inset, -2px -2px 4px #f5f5f5 inset;
}

.kuc-date-picker-1-26-0__group kuc-base-date-1-26-0 {
  display: inline-flex;
}

.kuc-date-picker-1-26-0__group input[type=text].kuc-base-date-1-26-0__input:focus {
  outline: none;
  border: 1px solid #3498db;
}
.kuc-date-picker-1-26-0__group input[type=text].kuc-base-date-1-26-0__input--focus {
  box-shadow: 2px 2px 4px #f5f5f5 inset, -2px -2px 4px #f5f5f5 inset;
  border: 1px solid #3498db;
  background-color: #ffffff;
  color: var(--kuc-date-picker-input-color, #333333);
}
.kuc-date-picker-1-26-0__group input[type=text].kuc-base-date-1-26-0__input:disabled {
  color: #888888;
  background-color: #d4d7d7;
  box-shadow: none;
  cursor: not-allowed;
}
`,Xs=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},Zs;(()=>{if(Zs=window.customElements.get(`kuc-date-picker-1-26-0`),Zs)return;class e extends V{constructor(e){super(),this.className=``,this.error=``,this.id=``,this.label=``,this.disabled=!1,this.requiredIcon=!1,this.language=`auto`,this.value=``,this.visible=!0,this._errorFormat=``,this._errorText=``,this._inputValue=``,this._invalidValue=``,this._blurBaseline=``,this._valueConverted=``,this._GUID=W();let t=G(e);Object.assign(this,t)}shouldUpdate(e){return this.value===void 0||this.value===``?!0:typeof this.value!=`string`||!Zo(this.value)||(this._valueConverted=Lo(this.value),this._valueConverted&&!es(this._valueConverted))?(this.throwErrorAfterUpdateComplete(Qa.VALUE),!1):!0}willUpdate(e){e.has(`value`)&&(this.value===void 0?this._inputValue=this._invalidValue:(this.value=this.value===``?this.value:this._valueConverted,this._inputValue=this.value,this._errorFormat=``)),this._updateErrorText()}render(){return j`
        <div class="kuc-date-picker-1-26-0__group">
          <label
            class="kuc-date-picker-1-26-0__group__label"
            for="${this._GUID}-label"
            @click="${this._handleClickLabel}"
            ?hidden="${!this.label}"
          >
            <kuc-base-label-1-26-0
              .text="${this.label}"
              .requiredIcon="${this.requiredIcon}"
            ></kuc-base-label-1-26-0>
          </label>
          <kuc-base-date-1-26-0
            .inputId="${this._GUID}"
            .inputAriaInvalid="${this.error!==``}"
            .disabled="${this.disabled}"
            .value="${this._inputValue}"
            .required="${this.requiredIcon}"
            .language="${this._getLanguage()}"
            @kuc:base-date-change="${this._handleDateChange}"
            @kuc:base-date-blur="${this._handleDateChangeOnBlur}"
            @kuc:base-date-focusin="${this._handleDateFocusIn}"
          >
          </kuc-base-date-1-26-0>
          <kuc-base-error-1-26-0
            .text="${this._errorText}"
            .guid="${this._GUID}"
          ></kuc-base-error-1-26-0>
        </div>
      `}updated(){this._invalidValue=``}_updateErrorText(){this._errorText=this._errorFormat||this.error}_getLanguage(){let e=[`en`,`ja`,`zh`,`zh-TW`,`es`];return e.indexOf(this.language)===-1?e.indexOf(document.documentElement.lang)===-1?`en`:document.documentElement.lang:this.language}_handleClickLabel(e){e.preventDefault()}_handleDateChange(e){e.stopPropagation(),e.preventDefault();let t={oldValue:this.value,value:``};e.detail.error?(this.value=void 0,this._invalidValue=this._dateInput.value,this._errorFormat=e.detail.error,this.error=``,t.value=void 0):(this._errorFormat=``,this.value=e.detail.value===void 0?``:e.detail.value,t.value=this.value),this._dispatchChangeEvent(t)}_handleDateFocusIn(e){e.stopPropagation(),this._blurBaseline=this.value}_handleDateChangeOnBlur(e){e.preventDefault(),e.stopPropagation();let t={value:e.detail.error?void 0:e.detail.value,oldValue:this._blurBaseline};H(this,`blur`,t)}_dispatchChangeEvent(e){H(this,`change`,e)}}Xs([P({type:String,reflect:!0,attribute:`class`})],e.prototype,`className`,void 0),Xs([P({type:String})],e.prototype,`error`,void 0),Xs([P({type:String,reflect:!0,attribute:`id`})],e.prototype,`id`,void 0),Xs([P({type:String})],e.prototype,`label`,void 0),Xs([P({type:Boolean})],e.prototype,`disabled`,void 0),Xs([P({type:Boolean})],e.prototype,`requiredIcon`,void 0),Xs([P({type:String,attribute:`lang`,reflect:!0,converter:Fo})],e.prototype,`language`,void 0),Xs([P({type:String})],e.prototype,`value`,void 0),Xs([P({type:Boolean,attribute:`hidden`,reflect:!0,converter:B})],e.prototype,`visible`,void 0),Xs([I(`.kuc-base-date-1-26-0__input`)],e.prototype,`_dateInput`,void 0),window.customElements.define(`kuc-date-picker-1-26-0`,e),U(Ys),Zs=e})();var Qs=`
:lang(ja) .kuc-base-time-1-26-0__group input.kuc-base-time-1-26-0__group__hours,
:lang(ja) .kuc-base-time-1-26-0__group input.kuc-base-time-1-26-0__group__minutes {
  width: 2ch;
}
.kuc-base-time-1-26-0__group {
  display: inline-flex;
  position: relative;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  max-width: 85px;
  width: 85px;
  height: 40px;
  color: #333333;
  border: solid 1px #e3e7e8;
  box-sizing: border-box;
  padding: 0px 8px;
  box-shadow: 2px 2px 4px #f5f5f5 inset, -2px -2px 4px #f5f5f5 inset;
  background-color: #ffffff;
  overflow: hidden;
}
.kuc-base-time-1-26-0__group input.kuc-base-time-1-26-0__group__hours {
  border: 0px;
  padding: 0px;
  width: 2ch;
  font-size: inherit;
  outline: none;
  background-color: transparent;
  color: #333333;
  caret-color: transparent;
  user-select: none;
}
.kuc-base-time-1-26-0__group input.kuc-base-time-1-26-0__group__minutes {
  border: 0px;
  padding: 0px;
  width: 2ch;
  font-size: inherit;
  outline: none;
  background-color: transparent;
  color: #333333;
  caret-color: transparent;
  user-select: none;
}
.kuc-base-time-1-26-0__group input.kuc-base-time-1-26-0__group__hours:focus {
  border: 0px;
}
.kuc-base-time-1-26-0__group input.kuc-base-time-1-26-0__group__minutes:focus {
  border: 0px;
}
.kuc-base-time-1-26-0__group__colon {
  width: auto;
  text-align: center;
}
.kuc-base-time-1-26-0__group input.kuc-base-time-1-26-0__group__suffix {
  border: 0px;
  width: 3ch;
  text-align: right;
  font-size: inherit;
  outline: none;
  appearance: none;
  margin-left: 1px;
  padding: 0px;
  background-color: transparent;
  color: #333333;
  caret-color: transparent;
  user-select: none;
}
.kuc-base-time-1-26-0__group--focus {
  box-shadow: 2px 2px 4px #f5f5f5 inset, -2px -2px 4px #f5f5f5 inset;
  border: 1px solid #3498db;
  background-color: #ffffff;
  color: #333333;
}
.kuc-base-time-1-26-0__assistive-text {
  clip: rect(1px, 1px, 1px, 1px);
  overflow: hidden;
  position: absolute !important;
  padding: 0px !important;
  border: 0px !important;
  height: 1px !important;
  width: 1px !important;
}
.kuc-base-time-1-26-0__group--disabled {
  background-color: #d4d7d7;
  box-shadow: none;
  color: #888888;
  cursor: not-allowed;
}
.kuc-base-time-1-26-0__group--disabled input:disabled,
.kuc-base-time-1-26-0__group--disabled span {
  cursor: not-allowed;
  color: #888888;
  -webkit-text-fill-color: #888888;
}
`,J=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},Y=class extends V{constructor(){super(...arguments),this.language=`en`,this.max=``,this.min=``,this.value=``,this.disabled=!1,this.hour12=!1,this.timeStep=30,this._hasFocus=!1,this._blurBaseline=``,this._listBoxVisible=!1,this._valueLabel=``,this._doFocusListBox=!1,this._hours=``,this._minutes=``,this._suffix=``,this._valueForReset=``,this._locale=z(`en`),this._scrollTargets=[],this._listBoxMaxHeight=165,this._listBoxMaxWidth=0,this._resizeDebounceTimer=null,this._DEBOUNCE_DELAY=200,this._handleFocusOut=e=>{this._emitDeferredChangeOnBlur(e.relatedTarget)},this._schedulePositionOnResize=()=>{this._listBoxVisible&&(this._resizeDebounceTimer!==null&&window.clearTimeout(this._resizeDebounceTimer),this._resizeDebounceTimer=window.setTimeout(()=>{this._resizeDebounceTimer=null,Ao({anchorEl:this._inputGroupEl,popoverEl:this._listBoxUl,popoverHeight:this._listBoxMaxHeight,popoverWidth:this._listBoxMaxWidth})},this._DEBOUNCE_DELAY))},this._boundOnScroll=()=>Ao({anchorEl:this._inputGroupEl,popoverEl:this._listBoxUl,popoverHeight:this._listBoxMaxHeight,popoverWidth:this._listBoxMaxWidth})}connectedCallback(){super.connectedCallback(),this.addEventListener(`focusout`,this._handleFocusOut)}disconnectedCallback(){this._detachListeners(),this.removeEventListener(`focusout`,this._handleFocusOut),super.disconnectedCallback()}update(e){(e.has(`hour12`)||e.has(`timeStep`)||e.has(`max`)||e.has(`min`))&&(this._listBoxItems=ao(this.hour12,this.timeStep,this.min,this.max),this._updateInputValue()),e.has(`value`)&&this._updateInputValue(),e.has(`language`)&&(this._locale=z(this.language)),super.update(e)}render(){return j`
      <div
        class="kuc-base-time-1-26-0__group"
        @mousedown="${this._handleMouseDownInputGroup}"
        @click="${this._handleClickInputGroup}"
      >
        <input
          type="text"
          class="kuc-base-time-1-26-0__group__hours"
          role="spinbutton"
          tabindex="${this._hours?`0`:`-1`}"
          aria-label="Hour"
          @focus="${this._handleFocusInput}"
          @blur="${this._handleBlurInput}"
          @keydown="${this._handleKeyDownInput}"
          @paste="${this._handlePasteInput}"
          @change="${this._handleChangeInput}"
          @input="${this._handleInput}"
          ?disabled="${this.disabled}"
          value="${this._hours}"
        />
        ${this._getColonTemplate()}
        <input
          type="text"
          class="kuc-base-time-1-26-0__group__minutes"
          role="spinbutton"
          tabindex="${this._minutes?`0`:`-1`}"
          aria-label="Minute"
          @focus="${this._handleFocusInput}"
          @blur="${this._handleBlurInput}"
          @keydown="${this._handleKeyDownInput}"
          @paste="${this._handlePasteInput}"
          @change="${this._handleChangeInput}"
          @input="${this._handleInput}"
          ?disabled="${this.disabled}"
          value="${this._minutes}"
        />
        ${this._getSuffixTemplate()}
      </div>
      <button
        type="button"
        aria-haspopup="listbox"
        aria-expanded="${this._listBoxVisible}"
        class="kuc-base-time-1-26-0__assistive-text"
        @keydown="${this._handleKeyDownButton}"
        @focus="${this._handleFocusButton}"
        @blur="${this._handleBlurButton}"
        ?disabled="${this.disabled}"
      >
        show time picker
      </button>
      ${this._getListBoxTemplate()}
    `}updated(e){e.has(`disabled`)&&this._toggleDisabledGroup(),super.update(e)}_handleMouseDownInputGroup(e){let t=e.target;t!==this._hoursEl&&t!==this._minutesEl&&t!==this._suffixEl&&e.preventDefault()}_handleClickInputGroup(e){if(this.disabled)return;if(this.value===``){this._toggleEl.focus(),this._openListBox();return}let t=e.target;this._openListBox(),t.tagName.toUpperCase()===`INPUT`?t.select():this._hoursEl.select()}_handleBlurListBox(e){e.preventDefault(),this._inputFocusEl||this._closeListBox()}_toggleDisabledGroup(){return this.disabled?this._inputGroupEl.classList.add(`kuc-base-time-1-26-0__group--disabled`):this._inputGroupEl.classList.remove(`kuc-base-time-1-26-0__group--disabled`)}_updateInputValue(){var e;let t=lo(this.value,this.hour12);this._hours=t.hours,this._minutes=t.minutes,this._suffix=t.suffix||``,this._valueLabel=this._getValueLabel(t),this._inputGroupEl&&(this._setValueToInput(t),(e=this._inputFocusEl)==null||e.select())}_getValueLabel(e){if(!e.hours||!e.minutes)return``;let t=`${e.hours}:${e.minutes}`;return e.suffix?t+` ${e.suffix}`:t}_setValueToInput(e){this._hoursEl.value=e.hours,this._minutesEl.value=e.minutes,this._suffixEl&&(this._suffixEl.value=e.suffix||``)}_handleKeyDownButton(e){switch(e.key){case`Tab`:case`Escape`:if(e.key===`Escape`&&e.preventDefault(),!this._listBoxVisible)return;this._closeListBox();break;case`Enter`:case` `:case`ArrowUp`:case`ArrowDown`:e.preventDefault(),e.stopPropagation(),this._openListBoxByKey();break;default:e.preventDefault(),e.stopPropagation(),this._handleDefaultKeyButton(e.key)}}_handleBlurButton(e){this._emitDeferredChangeOnBlur(e.relatedTarget),this._inputGroupEl.classList.remove(`kuc-base-time-1-26-0__group--focus`)}_handleFocusButton(e){e.stopPropagation(),this._captureBlurBaseline(e.relatedTarget),this._inputGroupEl.classList.add(`kuc-base-time-1-26-0__group--focus`)}_openListBoxByKey(){return!this._listBoxVisible&&(this._valueForReset=this.value,this._openListBox(),this._doFocusListBox=!0,this._inputGroupEl.classList.remove(`kuc-base-time-1-26-0__group--focus`),!0)}_handleListBoxEscape(){this._closeListBox(),this.value=this._valueForReset,this._actionUpdateInputValue(this.value),this.value===``?this._toggleEl.focus():this._hoursEl.select()}_handleDefaultKeyButton(e){if(!/^[0-9]$/i.test(e)||this.value!==``)return;let t=this._computeNumberKeyValueHours(e);this._actionUpdateInputValue(t),this._hoursEl.select()}_handleChangeListBox(e){if(e.preventDefault(),e.stopPropagation(),this._closeListBox(),this._inputFocusEl=this._hoursEl,this._hoursEl.select(),!e.detail.value)return;let t=e.detail.value;this._actionUpdateInputValue(t)}_handleListBoxFocusChange(e){let t=e.detail.value,n=ho(t);this._actionUpdateInputValue(n)}_handleFocusInput(e){this._inputFocusEl=e.target,this._captureBlurBaseline(e.relatedTarget),this._inputFocusEl.select(),this._inputGroupEl.classList.add(`kuc-base-time-1-26-0__group--focus`)}_captureBlurBaseline(e){this._isFocusInsideComponent(e)||(this._hasFocus=!0,this._blurBaseline=this.value,H(this,`kuc:base-time-focusin`,{}))}_handleBlurInput(e){this._inputFocusEl=null;let t=e.relatedTarget;t&&t instanceof HTMLInputElement&&[this._hoursEl,this._minutesEl,this._suffixEl].indexOf(t)>-1||(this._emitDeferredChangeOnBlur(t),this._closeListBox(),this._inputGroupEl.classList.remove(`kuc-base-time-1-26-0__group--focus`))}_handleTabKey(e){return e.key===`Tab`}_handleKeyDownInput(e){this._closeListBox(),this._handleTabKey(e)||this._handleSupportedKey(e)}_handlePasteInput(e){e.preventDefault()}_handleChangeInput(e){e.stopPropagation()}_handleInput(e){let t=e.target;t===this._hoursEl?t.value=this._hours:t===this._minutesEl?t.value=this._minutes:t===this._suffixEl&&(t.value=this._suffix)}_handleSupportedKey(e){e.preventDefault();let t=e.key,n;switch(t){case`Enter`:case`ArrowRight`:this._actionSelectNextRange();break;case`ArrowLeft`:this._actionSelectPreviousRange();break;case`ArrowUp`:n=this._computeArrowUpDownValue(1),this._actionUpdateInputValue(n);break;case`ArrowDown`:n=this._computeArrowUpDownValue(-1),this._actionUpdateInputValue(n);break;case`Backspace`:case`Delete`:n=this._computeDeleteValue(),this._actionUpdateInputValue(n);break;default:n=this._computeDefaultKeyValue(t),this._actionUpdateInputValue(n)}}_actionUpdateInputValue(e){let t=ho(this.value===``?this.value:this._formatKeyDownValue()),n=ho(e);t!==n&&(this.value=n,this._dispatchEventTimeChange(n,t))}_isFocusInsideComponent(e){return e instanceof HTMLElement?this._inputGroupEl.contains(e)||e===this._toggleEl||this._listboxEl?.contains(e)===!0:!1}_emitDeferredChangeOnBlur(e){this._isFocusInsideComponent(e)||this._hasFocus&&(this._hasFocus=!1,this._dispatchEventTimeChange(this.value,this._blurBaseline,`kuc:base-time-blur`))}_computeDeleteValue(){return this._inputFocusEl===this._minutesEl?this._formatKeyDownValue({minutes:`00`}):this._inputFocusEl===this._hoursEl?this._formatKeyDownValue({hours:`00`}):this._formatKeyDownValue()}_computeArrowUpDownValue(e){return this._inputFocusEl===this._hoursEl?this._computeArrowUpDownHourValue(e):this._inputFocusEl===this._minutesEl?this._computeArrowUpDownMinuteValue(e):this._computeKeyDownSuffixValue()}_computeKeyDownSuffixValue(e){if(!e){let e=this._suffix===Ka.AM?Ka.PM:Ka.AM;return this._formatKeyDownValue({suffix:e})}if([`a`,`A`,`p`,`P`].indexOf(e)===-1)return this._formatKeyDownValue();let t=e===`a`||e===`A`?Ka.AM:Ka.PM;return this.value===``&&this._hoursEl.select(),this._formatKeyDownValue({suffix:t})}_computeArrowUpDownHourValue(e){let t=parseInt(this._hours,10)+e;return this.hour12?(t%=12,t=t<=0?12:t):(t%=24,t=t<0?23:t),this._formatKeyDownValue({hours:t.toString()})}_computeArrowUpDownMinuteValue(e){let t=parseInt(this._minutes,10)+e;return t%=60,t=t<0?59:t,this._formatKeyDownValue({minutes:t.toString()})}_computeDefaultKeyValue(e){return/^[0-9]$/i.test(e)?this._computeNumberKeyValue(e):this._inputFocusEl===this._suffixEl?this._computeKeyDownSuffixValue(e):this._formatKeyDownValue()}_computeNumberKeyValue(e){return this._inputFocusEl===this._minutesEl?this._computeNumberKeyValueMinutes(e):this._inputFocusEl===this._hoursEl?this._computeNumberKeyValueHours(e):this._formatKeyDownValue()}_computeNumberKeyValueMinutes(e){let t=R(this._getPreviousMinutes(this._minutes)+e);return this.value===``?(this._hoursEl.select(),this._computeNumberKeyValueHours(e)):this._formatKeyDownValue({minutes:t})}_computeNumberKeyValueHours(e){let t=R(this._getPreviousHours(this._hours,e)+e);return this.value===``?this._formatKeyDownValue({hours:t,minutes:`00`}):this._formatKeyDownValue({hours:t})}_getPreviousMinutes(e){let t;return t=parseInt(e,10)>10?(``+e)[1]:``+e,t=parseInt(t,10)>5?`0`:t,t}_getPreviousHours(e,t){let n;n=parseInt(e,10)>10?(``+e)[1]:``+e;let r=parseInt(n+t,10);return n=this.hour12&&r>12||!this.hour12&&r>=24?`0`:n,n}_actionSelectNextRange(){this._inputFocusEl===this._hoursEl?this._minutesEl.select():this.hour12&&this._inputFocusEl===this._minutesEl&&this._suffixEl.select()}_actionSelectPreviousRange(){this._inputFocusEl===this._suffixEl?this._minutesEl.select():this._inputFocusEl===this._minutesEl&&this._hoursEl.select()}_dispatchEventTimeChange(e,t,n=`kuc:base-time-change`){let r={value:e,oldValue:t};(co(e,this.min)<0||co(this.max,e)<0)&&(r.error=this._locale.TIME_IS_OUT_OF_VALID_RANGE),H(this,n,r)}_formatKeyDownValue(e={hours:this._hours,minutes:this._minutes,suffix:this._suffix}){let t=e.hours||this._hours,n=e.minutes||this._minutes,r=e.suffix||this._suffix,i=`${R(t)}:${R(n)}`;return r?`${i} ${r}`:i}async _openListBox(){this._listBoxVisible||(this._doFocusListBox=!1,this._listBoxVisible=!0,await this.updateComplete,this._listboxEl&&(this._listboxEl.showPopover(),this._listBoxMaxWidth=jo(this._listBoxUl).width,Ao({anchorEl:this._inputGroupEl,popoverEl:this._listBoxUl,popoverHeight:this._listBoxMaxHeight,popoverWidth:this._listBoxMaxWidth}),this._attachListeners()))}_attachListeners(){this._detachListeners(),this._scrollTargets=Mo(this._inputGroupEl);for(let e of this._scrollTargets)e.addEventListener(`scroll`,this._boundOnScroll,{passive:!0});window.addEventListener(`resize`,this._schedulePositionOnResize)}_detachListeners(){for(let e of this._scrollTargets)e.removeEventListener(`scroll`,this._boundOnScroll);this._scrollTargets=[],window.removeEventListener(`resize`,this._schedulePositionOnResize)}_closeListBox(){var e;this._doFocusListBox=!1,this._listBoxVisible=!1,(e=this._listboxEl)==null||e.hidePopover(),this._detachListeners()}_getColonTemplate(){return this._hours?j` <span class="kuc-base-time-1-26-0__group__colon">:</span> `:``}_getSuffixTemplate(){return this.hour12?j`
          <input
            class="kuc-base-time-1-26-0__group__suffix"
            role="spinbutton"
            tabindex="${this._suffix?`0`:`-1`}"
            aria-label="${this._suffix||`suffix`}"
            @focus="${this._handleFocusInput}"
            @blur="${this._handleBlurInput}"
            @keydown="${this._handleKeyDownInput}"
            @paste="${this._handlePasteInput}"
            @change="${this._handleChangeInput}"
            @input="${this._handleInput}"
            ?disabled="${this.disabled}"
            value="${this._suffix}"
          />
        `:``}_getListBoxTemplate(){return this._listBoxVisible?j`
          <kuc-base-datetime-listbox-1-26-0
            aria-hidden="${!this._listBoxVisible}"
            class="kuc-base-time-1-26-0__group__listbox"
            .items="${this._listBoxItems||[]}"
            .value="${this._valueLabel}"
            .doFocus="${this._doFocusListBox}"
            @kuc:listbox-click="${this._handleChangeListBox}"
            @kuc:listbox-blur="${this._handleBlurListBox}"
            @kuc:listbox-focus-change="${this._handleListBoxFocusChange}"
            @kuc:listbox-escape="${this._handleListBoxEscape}"
          ></kuc-base-datetime-listbox-1-26-0>
        `:``}};J([P({type:String,attribute:`lang`,reflect:!0})],Y.prototype,`language`,void 0),J([P({type:String})],Y.prototype,`max`,void 0),J([P({type:String})],Y.prototype,`min`,void 0),J([P({type:String})],Y.prototype,`value`,void 0),J([P({type:Boolean})],Y.prototype,`disabled`,void 0),J([P({type:Boolean})],Y.prototype,`hour12`,void 0),J([P({type:Number})],Y.prototype,`timeStep`,void 0),J([F()],Y.prototype,`_listBoxVisible`,void 0),J([F()],Y.prototype,`_valueLabel`,void 0),J([F()],Y.prototype,`_doFocusListBox`,void 0),J([F()],Y.prototype,`_hours`,void 0),J([F()],Y.prototype,`_minutes`,void 0),J([F()],Y.prototype,`_suffix`,void 0),J([F()],Y.prototype,`_inputFocusEl`,void 0),J([I(`.kuc-base-time-1-26-0__group__hours`)],Y.prototype,`_hoursEl`,void 0),J([I(`.kuc-base-time-1-26-0__group__minutes`)],Y.prototype,`_minutesEl`,void 0),J([I(`.kuc-base-time-1-26-0__group__suffix`)],Y.prototype,`_suffixEl`,void 0),J([I(`.kuc-base-time-1-26-0__assistive-text`)],Y.prototype,`_toggleEl`,void 0),J([I(`.kuc-base-time-1-26-0__group`)],Y.prototype,`_inputGroupEl`,void 0),J([I(`.kuc-base-time-1-26-0__group__listbox`)],Y.prototype,`_listboxEl`,void 0),J([I(`.kuc-base-datetime-listbox-1-26-0__listbox`)],Y.prototype,`_listBoxUl`,void 0),window.customElements.get(`kuc-base-time-1-26-0`)||(U(Qs),window.customElements.define(`kuc-base-time-1-26-0`,Y));var $s=`
kuc-datetime-picker-1-26-0,
kuc-datetime-picker-1-26-0 *,
kuc-datetime-picker-1-26-0:lang(en),
kuc-datetime-picker-1-26-0:lang(en) * {
  font-family: sans-serif;
}
kuc-datetime-picker-1-26-0:lang(ja),
kuc-datetime-picker-1-26-0:lang(ja) * {
  font-family: "メイリオ", "Hiragino Kaku Gothic ProN", Meiryo,
    sans-serif;
}
kuc-datetime-picker-1-26-0:lang(zh),
kuc-datetime-picker-1-26-0:lang(zh) * {
  font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,
    Hei, "Heiti SC", sans-serif;
}
kuc-datetime-picker-1-26-0:lang(zh-TW),
kuc-datetime-picker-1-26-0:lang(zh-TW) * {
  font-family: "微軟正黑體","Microsoft JhengHei","新宋体",NSimSun,STHeiti,
    Hei,"Heiti SC"
}
kuc-datetime-picker-1-26-0:lang(es),
kuc-datetime-picker-1-26-0:lang(es) * {
  font-family: sans-serif;
}
kuc-datetime-picker-1-26-0 {
  font-size: 14px;
  display: inline-table;
  vertical-align: top;
  line-height: 1.5;
  max-width: calc(var(--kuc-date-time-picker-date-input-width, 100px) + var(--kuc-date-time-picker-time-input-width, 85px));
  width: calc(var(--kuc-date-time-picker-date-input-width, 100px) + var(--kuc-date-time-picker-time-input-width, 85px));
}
kuc-datetime-picker-1-26-0[hidden] {
  display: none;
}
.kuc-datetime-picker-1-26-0__group {
  border: none;
  padding: 0px;
  height: auto;
  display: flex;
  flex-direction: column;
  margin: 0px;
}
.kuc-datetime-picker-1-26-0__group__label {
  display: inline-block;
  padding: 4px 0px 8px 0px;
  white-space: nowrap;
}
.kuc-datetime-picker-1-26-0__group__label[hidden] {
  display: none;
}
.kuc-datetime-picker-1-26-0__group__inputs {
  display: flex;
  width: calc(var(--kuc-date-time-picker-date-input-width, 100px) + var(--kuc-date-time-picker-time-input-width, 85px));
}
.kuc-datetime-picker-1-26-0__group__inputs--time {
  position: relative;
}
.kuc-datetime-picker-1-26-0__group input[type=text].kuc-base-date-1-26-0__input {
  width: var(--kuc-date-time-picker-date-input-width, 100px);
  height: var(--kuc-date-time-picker-input-height, 40px);
  color: var(--kuc-date-time-picker-input-color, #333333);
  font-size: var(--kuc-date-time-picker-input-font-size, 14px);
}
.kuc-datetime-picker-1-26-0__group .kuc-base-time-1-26-0__group {
  max-width: var(--kuc-date-time-picker-time-input-width, 85px);
  width: var(--kuc-date-time-picker-time-input-width, 85px);
  font-size: var(--kuc-date-time-picker-input-font-size, 14px);
  height: var(--kuc-date-time-picker-input-height, 40px);
  color: var(--kuc-date-time-picker-input-color, #333333);
}
.kuc-datetime-picker-1-26-0__group .kuc-base-time-1-26-0__group input[type=text].kuc-base-time-1-26-0__group__hours,
.kuc-datetime-picker-1-26-0__group .kuc-base-time-1-26-0__group input[type=text].kuc-base-time-1-26-0__group__minutes,
.kuc-datetime-picker-1-26-0__group .kuc-base-time-1-26-0__group input.kuc-base-time-1-26-0__group__suffix,
.kuc-datetime-picker-1-26-0__group .kuc-base-time-1-26-0__group--focus  {
  color: var(--kuc-date-time-picker-input-color, #333333);
}
`,ec=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},tc;(()=>{if(tc=window.customElements.get(`kuc-datetime-picker-1-26-0`),tc)return;class e extends V{constructor(e){super(),this.className=``,this.error=``,this.id=``,this.label=``,this.language=`auto`,this.max=``,this.min=``,this.value=``,this.disabled=!1,this.hour12=!1,this.requiredIcon=!1,this.visible=!0,this.timeStep=30,this._dateValue=``,this._timeValue=``,this._previousTimeValue=``,this._previousDateValue=``,this._errorFormat=``,this._errorText=``,this._dateConverted=``,this._changeDateByUI=!1,this._changeTimeByUI=!1,this._timeBlurBaseline=``,this._dateBlurBaseline=``,this._inputMax=``,this._inputMin=``,this._timeConverted=``,this._errorInvalidTime=``,this._inputTimeStep=30,this._GUID=W();let t=G(e);Object.assign(this,t)}shouldUpdate(e){return(e.has(`max`)||e.has(`min`))&&!this._checkAndUpdateMaxMinProperty()||e.has(`timeStep`)&&!this._checkAndUpdateTimeStepProperty()?!1:this.value===void 0||this.value===``?!0:typeof this.value!=`string`||(this._dateAndTime=this._getDateTimeValue(this.value),this._dateConverted=Lo(this._dateAndTime.date),!(ns(this._dateAndTime.date,this._dateAndTime.time)&&es(this._dateConverted)))?(this.throwErrorAfterUpdateComplete(Qa.VALUE),!1):(this._timeConverted=Ro(this._dateAndTime.time.slice(0,5)),e.has(`value`)&&(co(this._timeConverted,this._inputMin)<0||co(this._inputMax,this._timeConverted)<0)?(this.throwErrorAfterUpdateComplete(Ja),!1):!0)}willUpdate(e){this._changeDateByUI||this._changeTimeByUI?this._updateValueChangeByUI():this._updateValueWhenSetter()}_checkAndUpdateMaxMinProperty(){let e,t;if(this.max===void 0||this.max===``)t=Za;else{if(!Qo(this.max))return this.throwErrorAfterUpdateComplete(Qa.MAX),!1;t=this.max=Ro(this.max)}if(this.min===void 0||this.min===``)e=Xa;else{if(!Qo(this.min))return this.throwErrorAfterUpdateComplete(Qa.MIN),!1;e=this.min=Ro(this.min)}return co(t,e)<0?(this.throwErrorAfterUpdateComplete(qa),!1):(this._inputMin=e,this._inputMax=t,!0)}_checkAndUpdateTimeStepProperty(){return cs(this.timeStep)?$o(this.timeStep,this._inputMax,this._inputMin)?(this._inputTimeStep=this.timeStep,!0):(this.throwErrorAfterUpdateComplete(Qa.TIME_STEP),!1):(this.throwErrorAfterUpdateComplete(Ya),!1)}_updateValueChangeByUI(){let e=this._validateDateTimeFormat();this.value=e?this.value:void 0,e&&!this._dateValue&&!this._timeValue&&(this.value=``);let t=!this._dateValue&&this._timeValue,n=this._dateValue&&!this._timeValue;this._errorText=t||n?this.error||this._errorFormat||this._errorInvalidTime:e?this.error:this._errorFormat||this._errorInvalidTime}_validateDateTimeFormat(){let e=!!this._timeValue&&!this._dateValue,t=!!this._dateValue&&!this._timeValue;return!this._errorFormat&&!this._errorInvalidTime&&!e&&!t}_updateValueWhenSetter(){this._errorText=this.error,this.value===``||this.value===void 0?(this._previousTimeValue=``,this._errorFormat=``,this._errorInvalidTime=``):(this._setDateTimeValueSeparate(this._dateAndTime,this._dateConverted),this.value=this._getDateTimeString())}_setDateTimeValueSeparate(e,t){this._dateValue=t||this._dateInput.value,this._timeValue=this._dateValue&&es(t)?Ro(e.time.slice(0,5)):this._previousTimeValue}update(e){e.has(`value`)&&(this.value===void 0&&this._setUndefinedValue(),this.value===``&&this._setEmptyValue()),(e.has(`max`)||e.has(`min`)||e.has(`value`))&&this.value!==void 0&&(this._errorInvalidTime=``),super.update(e)}_setUndefinedValue(){if(!this._changeTimeByUI){if(this._errorFormat){if(this._changeDateByUI){this._dateValue=this._dateInput.value;return}this._dateValue=``,this._timeValue=``}else this._dateValue=this._previousDateValue,this._timeValue=this._previousTimeValue}}_setEmptyValue(){this._dateValue=``,this._timeValue=``,this._previousTimeValue=``,this._previousDateValue=``,this._errorFormat=``,this._errorInvalidTime=``}render(){return j`
        <fieldset
          class="kuc-datetime-picker-1-26-0__group"
          aria-describedby="${this._GUID}-error"
        >
          <legend
            class="kuc-datetime-picker-1-26-0__group__label"
            ?hidden="${!this.label}"
          >
            <kuc-base-label-1-26-0
              .text="${this.label}"
              .requiredIcon="${this.requiredIcon}"
            ></kuc-base-label-1-26-0>
          </legend>
          <div class="kuc-datetime-picker-1-26-0__group__inputs">
            <kuc-base-date-1-26-0
              class="kuc-datetime-picker-1-26-0__group__inputs--date"
              .value="${this._dateValue}"
              .language="${this._getLanguage()}"
              .disabled="${this.disabled}"
              inputAriaLabel="date"
              @kuc:base-date-change="${this._handleDateChange}"
              @kuc:base-date-blur="${this._handleDateChangeOnBlur}"
              @kuc:base-date-focusin="${this._handleDateFocusIn}"
            ></kuc-base-date-1-26-0
            ><kuc-base-time-1-26-0
              class="kuc-datetime-picker-1-26-0__group__inputs--time"
              .value="${this._timeValue}"
              .hour12="${this.hour12}"
              .disabled="${this.disabled}"
              .timeStep="${this._inputTimeStep}"
              .min="${this._inputMin}"
              .max="${this._inputMax}"
              .language="${this._getLanguage()}"
              @kuc:base-time-change="${this._handleTimeChange}"
              @kuc:base-time-blur="${this._handleTimeChangeOnBlur}"
              @kuc:base-time-focusin="${this._handleTimeFocusIn}"
            ></kuc-base-time-1-26-0>
          </div>
          <kuc-base-error-1-26-0
            .text="${this._errorText}"
            .guid="${this._GUID}"
            ?hidden="${!this._errorText}"
          ></kuc-base-error-1-26-0>
        </fieldset>
      `}updated(){this._resetState()}_resetState(){this._previousTimeValue=``,this._previousDateValue=``,this._changeDateByUI=!1,this._changeTimeByUI=!1}_handleDateChange(e){e.stopPropagation(),e.preventDefault(),this._changeDateByUI=!0;let t=this._dateValue;e.detail.error?(this._errorFormat=e.detail.error,this.error=``):(t=e.detail.value,this._errorFormat=``),this._updateDateTimeValue(t,`date`)}_handleTimeChange(e){e.preventDefault(),e.stopPropagation(),this._changeTimeByUI=!0;let t=e.detail.value;e.detail.error?(this._errorInvalidTime=e.detail.error,this.error=``):this._errorInvalidTime=``,this._updateDateTimeValue(t,`time`)}_handleTimeFocusIn(e){e.stopPropagation(),this._timeBlurBaseline=this.value}_handleDateFocusIn(e){e.stopPropagation(),this._dateBlurBaseline=this.value}_handleTimeChangeOnBlur(e){e.preventDefault(),e.stopPropagation();let t={value:this.value,oldValue:this._timeBlurBaseline,changedPart:`time`};H(this,`blur`,t)}_handleDateChangeOnBlur(e){e.preventDefault(),e.stopPropagation();let t={value:this.value,oldValue:this._dateBlurBaseline,changedPart:`date`};H(this,`blur`,t)}_updateDateTimeValue(e,t){let n=this.value;t===`date`?this._dateValue=e||``:this._timeValue=e,this._previousTimeValue=this._timeValue,this._previousDateValue=this._dateValue;let r=this._errorFormat||this._errorInvalidTime?void 0:this._getDateTimeString(),i=this._errorFormat||this._errorInvalidTime?void 0:r;this.value=i,this._validateDateTimeFormat()&&!this._dateValue&&!this._timeValue&&(this.value=``);let a={value:this.value,oldValue:n,changedPart:t};H(this,`change`,a)}_getDateTimeString(){if(!this._dateValue||!this._timeValue)return;if(!this.value)return`${this._dateValue}T${this._timeValue}:00`;let e=this.value.split(`:`);return e.length===3?`${this._dateValue}T${this._timeValue}:${e[2]}`:`${this._dateValue}T${this._timeValue}:00`}_getDateTimeValue(e){if(e===``||e===void 0)return{date:``,time:``};let t=e.split(`T`),n=t[0],r=t[1];if(e.indexOf(`T`)===e.length-1||t.length>2)return{date:n,time:``};if(!r)return{date:n,time:Xa};let[i,a,o]=r.split(`:`);if(i===``||a===``||o===``)return{date:n,time:r};let s=`${i}:${a||`00`}`;return o?{date:n,time:`${s}:${o}`}:{date:n,time:s}}_getLanguage(){let e=[`en`,`ja`,`zh`,`zh-TW`,`es`];return e.indexOf(this.language)===-1?e.indexOf(document.documentElement.lang)===-1?`en`:document.documentElement.lang:this.language}}ec([P({type:String,reflect:!0,attribute:`class`})],e.prototype,`className`,void 0),ec([P({type:String})],e.prototype,`error`,void 0),ec([P({type:String,reflect:!0,attribute:`id`})],e.prototype,`id`,void 0),ec([P({type:String})],e.prototype,`label`,void 0),ec([P({type:String,attribute:`lang`,reflect:!0,converter:Fo})],e.prototype,`language`,void 0),ec([P({type:String})],e.prototype,`max`,void 0),ec([P({type:String})],e.prototype,`min`,void 0),ec([P({type:String,hasChanged(e,t){return(e===``||e===void 0)&&e===t||e!==t}})],e.prototype,`value`,void 0),ec([P({type:Boolean})],e.prototype,`disabled`,void 0),ec([P({type:Boolean})],e.prototype,`hour12`,void 0),ec([P({type:Boolean})],e.prototype,`requiredIcon`,void 0),ec([P({type:Boolean,attribute:`hidden`,reflect:!0,converter:B})],e.prototype,`visible`,void 0),ec([P({type:Number})],e.prototype,`timeStep`,void 0),ec([I(`.kuc-base-date-1-26-0__input`)],e.prototype,`_dateInput`,void 0),window.customElements.define(`kuc-datetime-picker-1-26-0`,e),U($s),tc=e})();var nc=`
  kuc-dialog-1-26-0,
  kuc-dialog-1-26-0 *,
  kuc-dialog-1-26-0:lang(en),
  kuc-dialog-1-26-0:lang(en) * {
    font-family: sans-serif;
  }
  kuc-dialog-1-26-0:lang(es),
  kuc-dialog-1-26-0:lang(es) * {
    font-family: sans-serif;
  }
  kuc-dialog-1-26-0:lang(ja),
  kuc-dialog-1-26-0:lang(ja) * {
    font-family: "メイリオ", "Hiragino Kaku Gothic ProN", Meiryo,
      sans-serif;
  }
  kuc-dialog-1-26-0:lang(zh),
  kuc-dialog-1-26-0:lang(zh) * {
    font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,
      Hei, "Heiti SC", sans-serif;
  }
  kuc-dialog-1-26-0:lang(zh-TW),
  kuc-dialog-1-26-0:lang(zh-TW) * {
    font-family: "微軟正黑體","Microsoft JhengHei","新宋体",NSimSun,STHeiti,
      Hei,"Heiti SC",sans-serif;
  }

  kuc-dialog-1-26-0 {
    display: none;
  }

  kuc-dialog-1-26-0[opened] {
    display: block;
  }

  .kuc-dialog-1-26-0__dialog {
    min-width: 400px;
    max-width: var(--kuc-dialog-max-width, 600px);
    width: max-content;
    font-size: 20px;
    background-color: #ffffff;
    position: fixed;
    line-height: normal;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 10000;
  }
  
  .kuc-dialog-1-26-0__dialog:focus-visible {
    outline: 1px solid #3498db;
  }

  .kuc-dialog-1-26-0__dialog__header {
    min-height: 64px;
    border-bottom: 1px solid #e3e7e8;
    display: flex;
    justify-content: space-between;
  }

  .kuc-dialog-1-26-0__dialog__header__title {
    font-size: var(--kuc-dialog-header-font-size, 24px);
    color: var(--kuc-dialog-header-color);
    padding: 0 24px;
    align-self: center;
    overflow-wrap: anywhere;
    word-break: normal;
    font-weight: 400;
  }

  .kuc-dialog-1-26-0__dialog__header__close-button {
    width: 48px;
    height: 48px;
    border: none;
    background-color: #ffffff;
    margin-right: 12px;
    margin-top: 11px;
    cursor: pointer;
  }

  .kuc-dialog-1-26-0__dialog__header__close-button:focus-visible {
    outline: 1px solid #3498db;
  }

  .kuc-dialog-1-26-0__dialog__header__close-button-svg {
    vertical-align: middle;
  }

  .kuc-dialog-1-26-0__dialog__content {
    border-bottom: #e3e7e8 solid 1px;
    background-color: #f7f9fa;
    padding: 24px;
    display: flex;
    overflow: auto;
  }

  .kuc-dialog-1-26-0__dialog__content__content {
    line-height: 1.2;
    overflow-wrap: anywhere;
    word-break: normal;
  }

  .kuc-dialog-1-26-0__dialog__content__icon-info,
  .kuc-dialog-1-26-0__dialog__content__icon-success,
  .kuc-dialog-1-26-0__dialog__content__icon-error,
  .kuc-dialog-1-26-0__dialog__content__icon-warning,
  .kuc-dialog-1-26-0__dialog__content__icon-question {
    margin-right: 16px;
    width: 24px;
    height: 24px;
  }

  .kuc-dialog-1-26-0__dialog__footer {
    padding: 24px;
    overflow-wrap: anywhere;
    word-break: normal;
  }

  .kuc-dialog-1-26-0__dialog__footer[hidden] {
    display: none;
  }

  .kuc-dialog-1-26-0__mask {
    position: fixed;
    top: 0;
    right: 0;
    display: block;
    width: 100%;
    height: 100%;
    background-color: #000000;
    opacity: 0.6;
    z-index: 9999;
  }

  .kuc--has-dialog {
    overflow: hidden;
  }

  .kuc--has-dialog .kuc-dialog-1-26-0__dialog {
    overflow-x: hidden;
    overflow-y: auto;
    max-height: 80vh;
  }
`,rc=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},ic;(()=>{if(ic=window.customElements.get(`kuc-dialog-1-26-0`),ic)return;class e extends V{constructor(e){super(),this.className=``,this.icon=``,this.id=``,this.title=``,this.content=``,this.footer=``,this.header=``,this.container=document.body,this.footerVisible=!0,this._isOpened=!1,this._triggeredElement=null,this._content=``,this._footer=``,this._header=``,this._GUID=W();let t=G(e);Object.assign(this,t)}_handleFocusFirstDummy(){let e=this._focusableElements[this._focusableElements.length-2];e&&e.focus()}_handleFocusLastDummy(){this._dialogEl.focus()}_handleKeyDownDialog(e){e.key===`Escape`&&(e.preventDefault(),this.close())}_handleClickCloseButton(e){this.close()}_getCloseButtonSvgTemplate(){return M`
        <svg
          class="kuc-dialog-1-26-0__dialog__header__close-button-svg"
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32Z"
            fill="#f7f9fa"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M16.4765 15.7071L20.1229 12.0607L20.4765 11.7071L19.7694 11L19.4158 11.3536L15.7694 15L12.1229 11.3536L11.7694 11L11.0623 11.7071L11.4158 12.0607L15.0623 15.7071L11.3536 19.4158L11 19.7694L11.7071 20.4765L12.0607 20.1229L15.7694 16.4142L19.4781 20.1229L19.8316 20.4765L20.5387 19.7694L20.1852 19.4158L16.4765 15.7071Z"
            fill="#888888"
          />
        </svg>
      `}_getIconTemplate(){switch(this.icon){case`info`:return M`
            <svg
              class="kuc-dialog-1-26-0__dialog__content__icon-info"
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.09673 17.7173C13.9604 17.7173 17.9032 13.7933 17.9032 8.95287C17.9032 4.11243 13.9604 0.188477 9.09673 0.188477C4.23306 0.188477 0.290283 4.11243 0.290283 8.95287C0.290283 13.7933 4.23306 17.7173 9.09673 17.7173Z"
                fill="#448aca"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M8.71195 7.96235C8.81719 7.69023 8.67929 7.5524 8.5559 7.5524C7.98977 7.5524 7.24945 8.87059 6.97364 8.87059C6.86531 8.86323 6.77965 8.7783 6.77405 8.67269C6.77405 8.40057 7.44905 7.76444 7.64864 7.57007C8.25505 6.95498 9.08189 6.59163 9.95671 6.5558C10.6172 6.5558 11.3249 6.94808 10.7696 8.4147L9.66276 11.3656C9.53205 11.6338 9.44394 11.9198 9.40147 12.2138C9.3955 12.2661 9.41197 12.3186 9.44701 12.3587C9.48204 12.3988 9.53253 12.4231 9.58655 12.4258C10.0474 12.4258 10.893 11.1394 11.1107 11.1394C11.221 11.1597 11.2987 11.2565 11.2922 11.3656C11.2922 11.8038 9.49582 13.6804 7.9426 13.6804C7.38735 13.6804 7.00268 13.4224 7.00268 12.8499C7.00268 12.1219 7.52889 10.8815 7.63413 10.6235L8.71195 7.96235ZM9.53937 4.97962C9.55317 4.3095 10.114 3.77277 10.8023 3.77099C11.0868 3.75724 11.364 3.86105 11.5658 4.05686C11.7675 4.25267 11.8751 4.52229 11.862 4.79939C11.8604 5.12532 11.7247 5.43704 11.4853 5.66484C11.2459 5.89264 10.9228 6.01752 10.5882 6.01156C10.3033 6.02775 10.0251 5.92385 9.82434 5.72636C9.62362 5.52886 9.51981 5.25684 9.53937 4.97962Z"
                fill="white"
              />
            </svg>
          `;case`success`:return M`
            <svg
              class="kuc-dialog-1-26-0__dialog__content__icon-success"
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                d="M9.09673 17.7173C13.9604 17.7173 17.9032 13.7933 17.9032 8.95287C17.9032 4.11243 13.9604 0.188477 9.09673 0.188477C4.23306 0.188477 0.290283 4.11243 0.290283 8.95287C0.290283 13.7933 4.23306 17.7173 9.09673 17.7173Z"
                fill="#2ecc71"
              />
              <path 
                d="M7.45159 10.3666L4.64513 7.44514L2.9032 9.32996L7.45159 13.9478L15.0967 6.59697L13.258 4.8064L7.45159 10.3666Z"
                fill="white"
              />
            </svg>
          `;case`error`:return M`
            <svg
              class="kuc-dialog-1-26-0__dialog__content__icon-error"
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 18C13.9706 18 18 13.9706 18 9C18 4.02944 13.9706 0 9 0C4.02944 0 0 4.02944 0 9C0 13.9706 4.02944 18 9 18Z"
                fill="#e74c3c"
              />
              <path
                d="M10.1497 8.99989L12.7572 6.39244L12.9339 6.21567L12.7572 6.03889L11.9617 5.24339L11.7849 5.06661L11.6081 5.24339L9.00063 7.85084L6.39317 5.24339L6.2164 5.06661L6.03962 5.24339L5.24412 6.03889L5.06734 6.21567L5.24412 6.39244L7.85159 8.99989L5.24412 11.6074L5.06734 11.7842L5.24412 11.9609L6.03962 12.7564L6.2164 12.9332L6.39317 12.7564L9.00063 10.1489L11.6081 12.7564L11.7849 12.9332L11.9617 12.7564L12.7572 11.9609L12.9339 11.7842L12.7572 11.6074L10.1497 8.99989Z"
                fill="white"
                stroke="white"
                stroke-width="0.5"
              />
            </svg>
          `;case`warning`:return M`
            <svg
              class="kuc-dialog-1-26-0__dialog__content__icon-warning"
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.09673 17.7173C13.9604 17.7173 17.9032 13.7933 17.9032 8.95287C17.9032 4.11243 13.9604 0.188477 9.09673 0.188477C4.23306 0.188477 0.290283 4.11243 0.290283 8.95287C0.290283 13.7933 4.23306 17.7173 9.09673 17.7173Z"
                fill="#ffcc00"
              />
              <path
                d="M7.74182 3.76978H10.645L9.91924 9.42423H8.46763L7.74182 3.76978Z"
                fill="#333333"
              />
              <rect
                x="7.74182"
                y="11.3088"
                width="2.90323"
                height="2.82722"
                rx="1"
                fill="#333333"
              />
            </svg>
          `;case`question`:return M`
            <svg
              class="kuc-dialog-1-26-0__dialog__content__icon-question"
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M11.0933 8.87676C10.383 9.34006 10.1707 9.73991 10.1469 10.6575C10.1447 10.7581 10.0632 10.8371 9.96337 10.8371H8.08135C8.03123 10.8371 7.89783 10.7033 7.89783 10.6532V9.90432C7.89783 9.11869 8.32111 8.42752 9.1947 7.79043C9.2632 7.7432 9.91722 7.31559 9.91722 6.72573C9.91722 6.23647 9.54947 5.89467 9.022 5.89467C8.27063 5.89467 7.85168 6.27144 7.81166 6.99037C7.80589 7.08736 7.72549 7.16344 7.62815 7.16344H7.53044H5.64914C5.59902 7.16344 5.54999 7.14252 5.51574 7.10611C5.48149 7.07005 5.46274 7.02066 5.46562 6.97054C5.56802 4.97527 6.86452 3.83053 9.02416 3.83053C10.6614 3.83053 12.4248 4.71892 12.4248 6.66984C12.4248 7.97683 12.1266 8.22381 11.0933 8.87676ZM8.99982 0C4.02976 0 0 4.02948 0 9C0 13.9709 4.02976 18 8.99982 18C13.9702 18 18 13.9709 18 9C18 4.02948 13.9702 0 8.99982 0ZM10.503 14.5101C10.503 14.7124 10.3383 14.8775 10.136 14.8775H7.89742C7.69516 14.8775 7.53003 14.7124 7.53003 14.5101V12.3061C7.53003 12.1038 7.69516 11.9387 7.89742 11.9387H10.136C10.3383 11.9387 10.503 12.1038 10.503 12.3061V14.5101Z"
                fill="#666666"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M11.0933 8.8768C10.383 9.3401 10.1707 9.73995 10.1469 10.6575C10.1447 10.7581 10.0632 10.8371 9.96337 10.8371H8.08135C8.03123 10.8371 7.89783 10.7033 7.89783 10.6532V9.90436C7.89783 9.11872 8.32111 8.42755 9.1947 7.79047C9.2632 7.74323 9.91722 7.31562 9.91722 6.72577C9.91722 6.2365 9.54947 5.8947 9.022 5.8947C8.27063 5.8947 7.85168 6.27148 7.81166 6.99041C7.80589 7.0874 7.72549 7.16347 7.62815 7.16347H7.53044H5.64914C5.59902 7.16347 5.54999 7.14256 5.51574 7.10615C5.48149 7.07009 5.46274 7.0207 5.46562 6.97058C5.56802 4.97531 6.86452 3.83057 9.02416 3.83057C10.6614 3.83057 12.4248 4.71896 12.4248 6.66988C12.4248 7.97687 12.1266 8.22384 11.0933 8.8768V8.8768Z"
                fill="white"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M10.503 14.5101C10.503 14.7124 10.3383 14.8775 10.136 14.8775H7.89742C7.69516 14.8775 7.53003 14.7124 7.53003 14.5101V12.3061C7.53003 12.1039 7.69516 11.9387 7.89742 11.9387H10.136C10.3383 11.9387 10.503 12.1039 10.503 12.3061V14.5101Z"
                fill="white"
              />
            </svg>
          `;default:return``}}shouldUpdate(e){if(e.has(`container`)){if(this.container===null||this.container===void 0)return this._isOpened&&this._close(),!1;let e=this._isValidContainerElement(),t=!e||!document.contains(this.container);if(this._isOpened&&t&&this._close(),!e)return this.throwErrorAfterUpdateComplete(L.CONTAINER.INVALID),!1}return!0}update(e){e.has(`content`)&&(this._content=this.content&&ls(this.content)?Io(this.content):this.content),e.has(`footer`)&&(this._footer=this.footer&&ls(this.footer)?Io(this.footer):this.footer),(e.has(`header`)||e.has(`title`))&&(this._header=this.header!==null&&this.header!==void 0&&this.header!==``?ls(this.header)?Io(this.header):this.header:this.title),super.update(e)}_isValidContainerElement(){return this.container instanceof HTMLElement}open(){this._isValidContainerElement()?(this.container.appendChild(this),this.container.classList.add(`kuc--has-dialog`),this.performUpdate(),this.setAttribute(`opened`,``),this._isOpened=!0,this._triggeredElement=document.activeElement,this._dialogEl&&this._dialogEl.focus()):(document.body.appendChild(this),requestAnimationFrame(()=>{document.body.removeChild(this)}),this.performUpdate())}close(){this._close(),H(this,`close`)}_close(){this._isOpened=!1,document.getElementsByTagName(`body`)[0].classList.remove(`kuc--has-dialog`),this.removeAttribute(`opened`),this._triggeredElement instanceof HTMLElement&&this._triggeredElement.focus()}render(){return j`
        <span
          class="kuc-dialog-1-26-0__first-dummy"
          tabIndex="0"
          @focus="${this._handleFocusFirstDummy}"
        ></span>
        <div
          class="kuc-dialog-1-26-0__dialog"
          role="dialog"
          tabindex="-1"
          aria-labelledby="${this._GUID}-title"
          aria-modal="true"
          @keydown="${this._handleKeyDownDialog}"
        >
          <div class="kuc-dialog-1-26-0__dialog__header">
            <h2
              class="kuc-dialog-1-26-0__dialog__header__title"
              id="${this._GUID}-title"
            >
              ${this._header}
            </h2>
            <button
              class="kuc-dialog-1-26-0__dialog__header__close-button"
              type="button"
              aria-label="close"
              @click="${this._handleClickCloseButton}"
            >
              ${this._getCloseButtonSvgTemplate()}
            </button>
          </div>
          <div class="kuc-dialog-1-26-0__dialog__content">
            <div class="kuc-dialog-1-26-0__dialog__content__icon">
              ${this._getIconTemplate()}
            </div>
            <div class="kuc-dialog-1-26-0__dialog__content__content">
              ${this._content}
            </div>
          </div>
          <div
            class="kuc-dialog-1-26-0__dialog__footer"
            ?hidden="${!this.footerVisible}"
          >
            ${this._footer}
          </div>
        </div>
        <span
          class="kuc-dialog-1-26-0__last-dummy"
          tabIndex="0"
          @focus="${this._handleFocusLastDummy}"
        ></span>
        <div class="kuc-dialog-1-26-0__mask"></div>
      `}}rc([P({type:String,reflect:!0,attribute:`class`})],e.prototype,`className`,void 0),rc([P({type:String})],e.prototype,`icon`,void 0),rc([P({type:String,reflect:!0,attribute:`id`})],e.prototype,`id`,void 0),rc([P({type:String})],e.prototype,`title`,void 0),rc([P()],e.prototype,`content`,void 0),rc([P()],e.prototype,`footer`,void 0),rc([P()],e.prototype,`header`,void 0),rc([P()],e.prototype,`container`,void 0),rc([P({type:Boolean})],e.prototype,`footerVisible`,void 0),rc([F()],e.prototype,`_isOpened`,void 0),rc([I(`.kuc-dialog-1-26-0__dialog`)],e.prototype,`_dialogEl`,void 0),rc([ja(`a[href]:not([disabled]), button:not([disabled]), textarea:not([disabled]), input[type='text']:not([disabled]), input[type='radio']:not([disabled]), input[type='checkbox']:not([disabled]), select:not([disabled]),[tabindex='0']`)],e.prototype,`_focusableElements`,void 0),window.customElements.define(`kuc-dialog-1-26-0`,e),U(nc),ic=e})();var ac=ic,oc=`
  kuc-dropdown-1-26-0,
  kuc-dropdown-1-26-0 *,
  kuc-dropdown-1-26-0:lang(en),
  kuc-dropdown-1-26-0:lang(en) * {
    font-family: sans-serif;
  }
  kuc-dropdown-1-26-0:lang(es),
  kuc-dropdown-1-26-0:lang(es) * {
    font-family: sans-serif;
  }
  kuc-dropdown-1-26-0:lang(ja),
  kuc-dropdown-1-26-0:lang(ja) * {
    font-family: "メイリオ", "Hiragino Kaku Gothic ProN", Meiryo,
      sans-serif;
  }
  kuc-dropdown-1-26-0:lang(zh),
  kuc-dropdown-1-26-0:lang(zh) * {
    font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,
      Hei, "Heiti SC", sans-serif;
  }
  kuc-dropdown-1-26-0:lang(zh-TW),
  kuc-dropdown-1-26-0:lang(zh-TW) * {
    font-family: "微軟正黑體","Microsoft JhengHei","新宋体",NSimSun,STHeiti,
      Hei,"Heiti SC",sans-serif;
  }
  kuc-dropdown-1-26-0 {
    display: inline-table;
    font-size: 14px;
    color: #333333;
    vertical-align: top;
    width: var(--kuc-dropdown-toggle-width, 180px);
    min-width: var(--kuc-dropdown-toggle-width, 180px);
    line-height: 1.5;
  }
  kuc-dropdown-1-26-0[hidden] {
    display: none;
  }
  .kuc-dropdown-1-26-0__group {
    border: none;
    padding: 0px;
    height: auto;
    display: inline-block;
    width: 100%;
    margin: 0px;
    position: relative;
  }
  .kuc-dropdown-1-26-0__group__label {
    padding: 4px 0px 8px 0px;
    display: inline-block;
    white-space: nowrap;
  }
  .kuc-dropdown-1-26-0__group__label[hidden] {
    display: none;
  }
  .kuc-dropdown-1-26-0__group__toggle {
    height: var(--kuc-dropdown-toggle-height, 40px);
    box-sizing: border-box;
    box-shadow: 1px 1px 1px #ffffff inset;
    border: 1px solid #e3e7e8;
    color: var(--kuc-dropdown-toggle-color, #3498db);
    background-color: #f7f9fa;
    padding: 0 0 0 24px;
    display: grid;
    grid: auto / auto-flow;
    align-items: center;
    align-content: center;
    justify-content: space-between;
    width: var(--kuc-dropdown-toggle-width, 100%);
    cursor: pointer;
  }
  .kuc-dropdown-1-26-0__group__toggle:focus {
    outline: none;
    border: 1px solid #3498db;
  }
  .kuc-dropdown-1-26-0__group__toggle:disabled {
    background-color: #d4d7d7;
    box-shadow: none;
    cursor: not-allowed;
    color: #888888;
  }
  .kuc-dropdown-1-26-0__group__toggle__selected-item-label {
    font-size: var(--kuc-dropdown-font-size, 14px);
    text-align: left;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .kuc-dropdown-1-26-0__group__toggle__icon {
    flex: none;
    width: 38px;
    height: 38px;
  }
  .kuc-dropdown-1-26-0__group__select-menu {
    min-width: 280px;
    margin: 0;
    padding: 8px 0;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
    background-color: #ffffff;
    list-style: none;
    box-sizing: border-box;
    border: none;
  }
  .kuc-dropdown-1-26-0__group__select-menu__item {
    padding: 8px 16px 8px 24px;
    line-height: 1;
    position: relative;
    cursor: pointer;
    white-space: nowrap;
    color: var(--kuc-dropdown-menu-color, #333333);
    font-size: var(--kuc-dropdown-font-size, 14px);
  }
  .kuc-dropdown-1-26-0__group__select-menu__item__icon {
    position: absolute;
    top: 50%;
    left: 6px;
    margin-top: -5px;
  }
  .kuc-dropdown-1-26-0__group__select-menu__item[aria-selected="true"] {
    color: var(--kuc-dropdown-menu-color-selected, #3498db);
  }
  .kuc-dropdown-1-26-0__group__select-menu__highlight[role="option"] {
    background-color: #e2f2fe;
  }
  .kuc-dropdown-1-26-0__group__select-menu__item--disabled,
  .kuc-dropdown-1-26-0__group__select-menu__item--disabled[aria-selected="true"] {
    background-color: #d4d7d7;
    cursor: not-allowed;
    color: #888888;
  }
`,sc=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},cc;(()=>{if(cc=window.customElements.get(`kuc-dropdown-1-26-0`),cc)return;class e extends V{constructor(e){super(),this.className=``,this.error=``,this.id=``,this.label=``,this.value=``,this.selectedIndex=-1,this.disabled=!1,this.requiredIcon=!1,this.visible=!0,this.items=[],this._selectorVisible=!1,this._DISABLED_CLASS=`kuc-dropdown-1-26-0__group__select-menu__item--disabled`,this._hasValueInItems=!1,this._scrollTargets=[],this._GUID=W();let t=G(e);this._handleClickDocument=this._handleClickDocument.bind(this),this._handleScrollMenu=this._handleScrollMenu.bind(this),this._setMenuPosition=this._setMenuPosition.bind(this),this._actionResizeScrollWindow=this._actionResizeScrollWindow.bind(this),this._setInitialValue(t),Object.assign(this,t)}_setInitialValue(e){let t=`value`in e,n=`selectedIndex`in e;!t&&n&&(this.value=this._getValue(e)||``)}_getSelectedLabel(){let e=this.items.filter((e,t)=>this._isCheckedItem(e,t));return e.length===0?``:e[0].label===void 0?e[0].value:e[0].label}_getToggleIconSvgTemplate(){return M`
      <svg
        width="36"
        height="36"
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M24.2122 15.6665L25 16.1392L19.7332 21.4998H18.2668L13 16.1392L13.7878 15.6665L18.765 20.6866H19.235L24.2122 15.6665Z"
          fill="#3498db"/>
      </svg>
    `}shouldUpdate(e){return e.has(`items`)&&!K(this.items)?(this.throwErrorAfterUpdateComplete(L.ITEMS.IS_NOT_ARRAY),!1):e.has(`value`)&&!ts(this.value)?(this.throwErrorAfterUpdateComplete(L.VALUE.IS_NOT_STRING),!1):e.has(`selectedIndex`)&&!cs(this.selectedIndex)?(this.throwErrorAfterUpdateComplete(L.SELECTED_INDEX.IS_NOT_NUMBER),!1):!0}willUpdate(e){if((e.has(`items`)||e.has(`value`))&&(this._hasValueInItems=this.items.some(e=>e.value===this.value)),e.has(`value`)){if(this.value!==``||this._hasValueInItems)return;this.selectedIndex=-1}}update(e){(e.has(`items`)||e.has(`value`)||e.has(`selectedIndex`))&&(this.selectedIndex=this._getSelectedIndex(),this.value=this._getValue({items:this.items,selectedIndex:this.selectedIndex})||``),super.update(e)}_getSelectedIndex(){if(!this.value&&!this._hasValueInItems)return this.items[this.selectedIndex]?this.selectedIndex:-1;let e=this.items.findIndex(e=>e.value===this.value);if(e===-1)return-1;let t=this.items.findIndex((e,t)=>e.value===this.value&&t===this.selectedIndex);return t>-1?t:e}_getValue(e){let t=(e.items||[])[e.selectedIndex===0||e.selectedIndex?e.selectedIndex:-1];return t?t.value:``}render(){return j`
        <div class="kuc-dropdown-1-26-0__group">
          <div
            class="kuc-dropdown-1-26-0__group__label"
            id="${this._GUID}-label"
            ?hidden="${!this.label}"
          >
            <kuc-base-label-1-26-0
              .text="${this.label}"
              .requiredIcon="${this.requiredIcon}"
            ></kuc-base-label-1-26-0>
          </div>
          <button
            class="kuc-dropdown-1-26-0__group__toggle"
            id="${this._GUID}-toggle"
            type="button"
            aria-haspopup="true"
            aria-labelledby="${this._GUID}-label ${this._GUID}-toggle"
            aria-describedby="${this._GUID}-error"
            aria-required="${this.requiredIcon}"
            ?disabled="${this.disabled}"
            @mouseup="${this._handleMouseUpDropdownToggle}"
            @mousedown="${this._handleMouseDownDropdownToggle}"
            @click="${this._handleClickDropdownToggle}"
            @keydown="${this._handleKeyDownDropdownToggle}"
          >
            <span class="kuc-dropdown-1-26-0__group__toggle__selected-item-label"
              >${this._getSelectedLabel()}</span
            >
            <span class="kuc-dropdown-1-26-0__group__toggle__icon">
              ${this._getToggleIconSvgTemplate()}
            </span>
          </button>
          <ul
            popover="manual"
            class="kuc-dropdown-1-26-0__group__select-menu"
            role="listbox"
            aria-hidden="${!this._selectorVisible}"
            @mouseleave="${this._handleMouseLeaveMenu}"
            @mousedown="${this._handleMouseDownMenu}"
          >
            ${this.items.map((e,t)=>this._getItemTemplate(e,t))}
          </ul>
          <kuc-base-error-1-26-0
            .text="${this.error}"
            .guid="${this._GUID}"
            ?hidden="${!this.error}"
            ariaLive="assertive"
          ></kuc-base-error-1-26-0>
        </div>
      `}async updated(){await this.updateComplete,this._selectorVisible&&this._scrollToView()}_handleMouseDownDropdownItem(e){let t=this._getItemElementWhenMouseOverDown(e.target),n=t.getAttribute(`value`),r=t.dataset.index||`0`;this._actionUpdateValue(n,r)}_handleMouseOverDropdownItem(e){let t=this._getItemElementWhenMouseOverDown(e.target);this._actionHighlightMenuItem(t)}_handleMouseLeaveMenu(){this._actionClearAllHighlightMenuItem()}_handleMouseDownMenu(e){e.preventDefault()}_handleMouseDownDropdownToggle(e){e.preventDefault()}_handleMouseUpDropdownToggle(e){e.preventDefault()}_handleClickDropdownToggle(e){e.stopPropagation(),this._actionToggleMenu()}_handleClickDocument(e){(e.target===this._buttonEl||this._buttonEl.contains(e.target))&&e.stopPropagation(),Array.from(this._disabledItemsEl).some(t=>t===e.target||t.contains(e.target))||this._actionHideMenu()}_handleScrollMenu(){this._previousScrollTop=this._menuEl.scrollTop}_handleKeyDownDropdownToggle(e){switch(e.key){case`Up`:case`ArrowUp`:if(e.preventDefault(),this.items.length===0)break;if(!this._selectorVisible){this._actionShowMenu();break}this._actionHighlightPrevMenuItem();break;case`Tab`:this._selectorVisible&&this._actionHideMenu();break;case`Down`:case`ArrowDown`:if(e.preventDefault(),this.items.length===0)break;if(!this._selectorVisible){this._actionShowMenu();break}this._actionHighlightNextMenuItem();break;case`Enter`:{if(e.preventDefault(),this.items.length===0)break;if(!this._selectorVisible){this._actionShowMenu();break}let{value:t,selectedIndex:n}=this._getInfoHighlightItem();if(t===null)break;this._actionUpdateValue(t,n),this._actionHideMenu();break}case`Escape`:e.preventDefault(),this._selectorVisible&&e.stopPropagation(),this._actionHideMenu();break;case`Home`:this._selectorVisible&&(e.preventDefault(),this._actionHighlightFirstMenuItem());break;case`End`:this._selectorVisible&&(e.preventDefault(),this._actionHighlightLastMenuItem())}}_getInfoHighlightItem(){let e=this._highlightItemEl;return e===null?{value:null,selectedIndex:`-1`}:{value:e.getAttribute(`value`),selectedIndex:e.dataset.index||`0`}}_actionShowMenu(){this._buttonEl.focus(),this.items.length!==0&&(this._selectorVisible=!0,this._menuEl.showPopover(),this._menuEl&&this._buttonEl&&(this._setMenuPosition(),this._attachListeners(),this._selectedItemEl===null||this._selectedItemEl.classList.contains(this._DISABLED_CLASS)||this._setHighlightAndActiveDescendantMenu(this._selectedItemEl)))}_attachListeners(){this._detachListeners(),this._scrollTargets=this._getScrollableAncestors(this._buttonEl);for(let e of this._scrollTargets)e.addEventListener(`scroll`,this._setMenuPosition,{passive:!0});this._menuEl.addEventListener(`scroll`,this._handleScrollMenu),window.addEventListener(`resize`,this._actionResizeScrollWindow),document.addEventListener(`click`,this._handleClickDocument,{capture:!0})}_detachListeners(){for(let e of this._scrollTargets)e.removeEventListener(`scroll`,this._setMenuPosition);this._scrollTargets=[],this._menuEl&&this._menuEl.removeEventListener(`scroll`,this._handleScrollMenu),window.removeEventListener(`resize`,this._actionResizeScrollWindow),document.removeEventListener(`click`,this._handleClickDocument,{capture:!0})}disconnectedCallback(){this._detachListeners(),super.disconnectedCallback&&super.disconnectedCallback()}_actionHideMenu(){this._selectorVisible=!1,this._menuEl.hidePopover(),this._detachListeners(),this._actionRemoveActiveDescendant()}_getScrollableAncestors(e){let t=[],n=e.parentElement,r=/(auto|scroll|overlay)/;for(;n&&n!==document.body&&n!==document.documentElement;){let e=getComputedStyle(n);(r.test(e.overflowY)||r.test(e.overflowX))&&t.push(n),n=n.parentElement}return t.push(window),t}_actionToggleMenu(){this.items.length!==0&&(this._selectorVisible?this._actionHideMenu():this._actionShowMenu())}_actionHighlightFirstMenuItem(){let e=this._firstItemEl,t=!1;for(let n=0;n<this.items.length&&(t=e.classList.contains(this._DISABLED_CLASS),t);n++)e=e.nextElementSibling;!t&&this._setHighlightAndActiveDescendantMenu(e)}_actionHighlightLastMenuItem(){let e=this._lastItemEl,t=!1;for(let n=0;n<this.items.length&&(t=e.classList.contains(this._DISABLED_CLASS),t);n++)e=e.previousElementSibling;!t&&this._setHighlightAndActiveDescendantMenu(e)}_actionHighlightPrevMenuItem(){let e=null;this._highlightItemEl!==null&&(e=this._highlightItemEl.previousElementSibling),e===null&&(e=this._lastItemEl);let t=!1;for(let n=0;n<this.items.length&&(t=e.classList.contains(this._DISABLED_CLASS),t);n++)e=e.previousElementSibling,e===null&&(e=this._lastItemEl);!t&&this._setHighlightAndActiveDescendantMenu(e)}_actionHighlightNextMenuItem(){let e=null;this._highlightItemEl!==null&&(e=this._highlightItemEl.nextElementSibling),e===null&&(e=this._firstItemEl);let t=!1;for(let n=0;n<this.items.length&&(t=e.classList.contains(this._DISABLED_CLASS),t);n++)e=e.nextElementSibling,e===null&&(e=this._firstItemEl);!t&&this._setHighlightAndActiveDescendantMenu(e)}_actionClearAllHighlightMenuItem(){this._itemsEl.forEach(e=>{e.classList.remove(`kuc-dropdown-1-26-0__group__select-menu__highlight`)}),this._actionRemoveActiveDescendant()}_setHighlightAndActiveDescendantMenu(e){this._actionHighlightMenuItem(e),this._actionSetActiveDescendant(e.id),this._scrollToView()}_actionHighlightMenuItem(e){this._actionClearAllHighlightMenuItem(),e.classList.add(`kuc-dropdown-1-26-0__group__select-menu__highlight`)}_actionUpdateValue(e,t){let n=parseInt(t,10);if(this.value===e&&this.selectedIndex===n)return;let r={oldValue:this.value,value:e};this.value=e,this.selectedIndex=n,H(this,`change`,r)}_actionSetActiveDescendant(e){e!==void 0&&this._buttonEl!==null&&this._buttonEl.setAttribute(`aria-activedescendant`,e)}_actionRemoveActiveDescendant(){this._buttonEl.removeAttribute(`aria-activedescendant`)}_setMenuPositionAboveOrBelow(e,t){let n=t.getBoundingClientRect(),r=n.top,i=window.innerHeight;window.innerHeight>document.documentElement.clientHeight&&(i=document.documentElement.clientHeight);let a=i-n.bottom;e.style.height=`auto`,e.style.maxHeight=`none`,e.style.top=`auto`,e.style.bottom=`auto`;let o=e.getBoundingClientRect().height;e.style.maxHeight=`var(--kuc-dropdown-menu-max-height, none)`;let s=getComputedStyle(e).maxHeight,c;s&&s!==`none`&&(c=parseFloat(s));let l=c?Math.min(o,c):o,u,d;a>=l?(u=n.bottom,d=l):r>=l?(u=n.top-l,d=l):a>=r?(u=n.bottom,d=a):(u=n.top-r,d=r),e.style.position=`fixed`;let f=`${u}px`;e.style.top!==f&&(e.style.top=f);let p=`${d}px`;e.style.height!==p&&(e.style.height=p),e.style.overflowY=`auto`}_setMenuPositionLeftOrRight(e,t){e.style.right=`auto`;let n=e.offsetWidth,r=t.getBoundingClientRect(),i=window.innerWidth;window.innerWidth>document.documentElement.clientWidth&&(i=document.documentElement.clientWidth);let a=r.left;i<r.right&&i>r.left&&(a=i-n);let o=`${a}px`;e.style.left!==o&&(e.style.left=o)}_setMenuPosition(){!this._menuEl||!this._buttonEl?this._detachListeners():(this._setMenuPositionAboveOrBelow(this._menuEl,this._buttonEl),this._setMenuPositionLeftOrRight(this._menuEl,this._buttonEl),this._menuEl&&this._previousScrollTop&&(this._menuEl.scrollTop=this._previousScrollTop))}_scrollToView(){if(!this._highlightItemEl||!this._menuEl)return;let e=this._menuEl.getBoundingClientRect(),t=this._highlightItemEl.getBoundingClientRect();t.top<e.top&&(this._menuEl.scrollTop-=e.top-t.top),e.bottom<t.bottom&&(this._menuEl.scrollTop+=t.bottom-e.bottom)}_actionResizeScrollWindow(){!this._timeoutID&&this._selectorVisible&&(this._timeoutID=window.setTimeout(()=>{this._timeoutID=null,this._setMenuPosition()},50))}_isCheckedItem(e,t){return this.value?e.value===this.value&&this.selectedIndex===t:this.selectedIndex===t}_getItemTemplate(e,t){let n=this._isCheckedItem(e,t);return j`
        <li
          class="kuc-dropdown-1-26-0__group__select-menu__item ${e.disabled?this._DISABLED_CLASS:``}"
          role="option"
          tabindex="${!e.disabled&&n?`0`:`-1`}"
          aria-selected="${n?`true`:`false`}"
          data-index="${t}"
          value="${e.value===void 0?``:e.value}"
          id="${this._GUID}-menuitem-${t}"
          @mousedown="${e.disabled?null:this._handleMouseDownDropdownItem}"
          @mouseover="${e.disabled?null:this._handleMouseOverDropdownItem}"
        >
          ${this._getDropdownIconSvgTemplate(n,!!e.disabled)}
          ${e.label===void 0?e.value:e.label}
        </li>
      `}_getDropdownIconSvgTemplate(e,t){return M`
      ${e?M`<svg
          class="kuc-dropdown-1-26-0__group__select-menu__item__icon"
          width="11"
          height="9"
          viewBox="0 0 11 9"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M0 5L1.5 3L4.5 5.5L9.5 0L11 1.5L4.5 8.5L0 5Z"
            fill="${t?`#888888`:`#3498db`}"/>
        </svg>`:``}`}_getItemElementWhenMouseOverDown(e){return e.classList.value.split(` `).includes(`kuc-dropdown-1-26-0__group__select-menu__item`)?e:this._getItemElementWhenMouseOverDown(e.parentElement)}}sc([P({type:String,reflect:!0,attribute:`class`})],e.prototype,`className`,void 0),sc([P({type:String})],e.prototype,`error`,void 0),sc([P({type:String,reflect:!0,attribute:`id`})],e.prototype,`id`,void 0),sc([P({type:String})],e.prototype,`label`,void 0),sc([P({type:String})],e.prototype,`value`,void 0),sc([P({type:Number})],e.prototype,`selectedIndex`,void 0),sc([P({type:Boolean})],e.prototype,`disabled`,void 0),sc([P({type:Boolean})],e.prototype,`requiredIcon`,void 0),sc([P({type:Boolean,attribute:`hidden`,reflect:!0,converter:B})],e.prototype,`visible`,void 0),sc([P({type:Array})],e.prototype,`items`,void 0),sc([F()],e.prototype,`_selectorVisible`,void 0),sc([I(`.kuc-dropdown-1-26-0__group__select-menu`)],e.prototype,`_menuEl`,void 0),sc([ja(`.kuc-dropdown-1-26-0__group__select-menu__item`)],e.prototype,`_itemsEl`,void 0),sc([I(`button.kuc-dropdown-1-26-0__group__toggle`)],e.prototype,`_buttonEl`,void 0),sc([I(`.kuc-dropdown-1-26-0__group__select-menu__item`)],e.prototype,`_firstItemEl`,void 0),sc([I(`.kuc-dropdown-1-26-0__group__select-menu__item:last-child`)],e.prototype,`_lastItemEl`,void 0),sc([I(`.kuc-dropdown-1-26-0__group__select-menu__item[aria-selected=true]`)],e.prototype,`_selectedItemEl`,void 0),sc([I(`.kuc-dropdown-1-26-0__group__select-menu__highlight`)],e.prototype,`_highlightItemEl`,void 0),sc([ja(`.kuc-dropdown-1-26-0__group__select-menu__item--disabled`)],e.prototype,`_disabledItemsEl`,void 0),window.customElements.define(`kuc-dropdown-1-26-0`,e),U(oc),cc=e})();var lc=`
  kuc-field-group-1-26-0 .kuc-field-group-1-26-0__group__toggle .kuc-base-label-1-26-0__text,
  kuc-field-group-1-26-0:lang(en) .kuc-field-group-1-26-0__group__toggle .kuc-base-label-1-26-0__text {
    font-family: sans-serif;
  }
  kuc-field-group-1-26-0:lang(es) .kuc-field-group-1-26-0__group__toggle .kuc-base-label-1-26-0__text {
    font-family: sans-serif;
  }
  kuc-field-group-1-26-0:lang(ja) .kuc-field-group-1-26-0__group__toggle .kuc-base-label-1-26-0__text {
    font-family: "メイリオ", "Hiragino Kaku Gothic ProN", Meiryo,
      sans-serif;
  }
  kuc-field-group-1-26-0:lang(zh) .kuc-field-group-1-26-0__group__toggle .kuc-base-label-1-26-0__text {
    font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,
      Hei, "Heiti SC", sans-serif;
  }
  kuc-field-group-1-26-0:lang(zh-TW) .kuc-field-group-1-26-0__group__toggle .kuc-base-label-1-26-0__text {
    font-family: "微軟正黑體","Microsoft JhengHei","新宋体",NSimSun,STHeiti,
      Hei,"Heiti SC",sans-serif;
  }
  kuc-field-group-1-26-0 {
    display: inline-table;
  }
  kuc-field-group-1-26-0[hidden] {
    display: none;
  }
  .kuc-field-group-1-26-0__group {
    min-width: 517px;
    padding: 0px 8px;
    border: 1px solid #e3e7e8;
    background-color: #f5f5f5;
  }
  .kuc-field-group-1-26-0__group h3 {
    margin: 0px;
    padding: 0px;
  }
  .kuc-field-group-1-26-0__group__toggle {
    display: flex;
    align-items: center;
    border-style: none;
    position: relative;
    outline: none;
    margin: 12px 0px 12px 8px;
    min-height: 34px;
    padding: 4px 8px 4px 24px;
    color: #333333;
    font-size: 16px;
    cursor: pointer;
    border: 1px solid transparent;
    background-color: inherit;
    line-height: 1.5;
  }
  .kuc-field-group-1-26-0__group__toggle:disabled {
    color: rgba(0, 0, 0, 0.25);
    cursor: not-allowed;
  }
  .kuc-field-group-1-26-0__group__toggle:disabled .kuc-base-label-1-26-0__text {
    color: rgba(0, 0, 0, 0.25);
    cursor: not-allowed;
  }
  .kuc-field-group-1-26-0__group__toggle .kuc-base-label-1-26-0__text {
    font-size: 16px;
  }
  .kuc-field-group-1-26-0__group__toggle:disabled:focus {
    outline: 0;
    border: 1px solid transparent;
  }
  .kuc-field-group-1-26-0__group__toggle:focus {
    outline: 0;
    border: 1px solid #3498db;
  }
  .kuc-field-group-1-26-0__group__toggle svg {
    position: absolute;
    left: 8px;
  }
  .kuc-field-group-1-26-0__group__body {
    padding: 0px 8px;
    margin-left: 0px;
    white-space: nowrap;
    word-wrap: normal;
    margin-bottom: 12px;
  }
`,uc=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},dc=517,fc;(()=>{if(fc=window.customElements.get(`kuc-field-group-1-26-0`),fc)return;class e extends V{constructor(e){super(),this.className=``,this.content=``,this.id=``,this.label=``,this.disabled=!1,this.expanded=!1,this.visible=!0,this._content=``,this._GUID=W();let t=G(e);Object.assign(this,t)}update(e){e.has(`content`)&&(this._content=this.content&&ls(this.content)?Io(this.content):this.content),super.update(e)}render(){return j`
        <div
          class="kuc-field-group-1-26-0__group"
          role="group"
          aria-labelledby="${this._GUID}-control"
        >
          <button
            type="button"
            id="${this._GUID}-control"
            class="kuc-field-group-1-26-0__group__toggle"
            aria-controls="${this._GUID}-body"
            aria-expanded="${this.expanded&&!this.disabled}"
            ?disabled="${this.disabled}"
            @click="${this._handleClickButton}"
            @keydown="${this._handleKeyDownButton}"
          >
            ${this._getSvgTemplate()}
            <kuc-base-label-1-26-0
              .text="${this.label}"
              .requiredIcon="${!1}"
            ></kuc-base-label-1-26-0>
          </button>
          <div
            id="${this._GUID}-body"
            class="kuc-field-group-1-26-0__group__body"
            ?hidden="${!this.expanded||this.disabled}"
            @change="${this._handleChangeBody}"
          >
            ${this._content}
          </div>
        </div>
      `}updated(e){e.has(`content`)&&(this._groupEl.style.minWidth=`517px`,requestAnimationFrame(()=>{this._updateContainerWidth()}))}_updateContainerWidth(){if(!this._bodyEl)return;let e=this._bodyEl.hasAttribute(`hidden`);e&&this._bodyEl.removeAttribute(`hidden`);let t=this._bodyEl.offsetWidth;e&&this._bodyEl.setAttribute(`hidden`,``),t<=dc||(this._groupEl.style.minWidth=t+`px`)}_getSvgTemplate(){return this.expanded?j`<svg
            width="13"
            height="8"
            viewBox="0 0 13 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M11.7122 0.5L12.5 1.03608L7.23318 7.11548L5.76682 7.11548L0.5 1.03608L1.2878 0.5L6.26504 6.19318L6.73496 6.19318L11.7122 0.5Z"
              fill="#939393"
            />
          </svg>`:j`<svg
            width="8"
            height="13"
            viewBox="0 0 8 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M0.5 1.2878L1.03608 0.5L7.11548 5.76682V7.23318L1.03608 12.5L0.5 11.7122L6.19318 6.73496V6.26504L0.5 1.2878Z"
              fill="#939393"
            />
          </svg> `}_handleChangeBody(e){e.stopPropagation()}_handleKeyDownButton(e){e.key!==`Tab`&&(e.preventDefault(),(e.key===`Enter`||e.key===` `)&&this._handleClickButton(e))}_handleClickButton(e){if(e.target!==document.activeElement&&this._toggle.focus(),this.expanded){let e=this._bodyEl.getBoundingClientRect().width;e>dc&&(this._groupEl.style.minWidth=e+`px`)}else this._groupEl.style.minWidth=`517px`;this.expanded=!this.expanded;let t={expanded:this.expanded};H(this,`change`,t)}}uc([P({type:String,reflect:!0,attribute:`class`})],e.prototype,`className`,void 0),uc([P()],e.prototype,`content`,void 0),uc([P({type:String,reflect:!0,attribute:`id`})],e.prototype,`id`,void 0),uc([P({type:String})],e.prototype,`label`,void 0),uc([P({type:Boolean})],e.prototype,`disabled`,void 0),uc([P({type:Boolean})],e.prototype,`expanded`,void 0),uc([P({type:Boolean,attribute:`hidden`,reflect:!0,converter:B})],e.prototype,`visible`,void 0),uc([I(`.kuc-field-group-1-26-0__group`)],e.prototype,`_groupEl`,void 0),uc([I(`.kuc-field-group-1-26-0__group__body`)],e.prototype,`_bodyEl`,void 0),uc([I(`.kuc-field-group-1-26-0__group__toggle`)],e.prototype,`_toggle`,void 0),window.customElements.define(`kuc-field-group-1-26-0`,e),U(lc),fc=e})();var pc=fc,mc=`
  kuc-multi-choice-1-26-0,
  kuc-multi-choice-1-26-0 *,
  kuc-multi-choice-1-26-0:lang(en),
  kuc-multi-choice-1-26-0:lang(en) * {
    font-family: sans-serif;
  }
  kuc-multi-choice-1-26-0:lang(es),
  kuc-multi-choice-1-26-0:lang(es) * {
    font-family: sans-serif;
  }
  kuc-multi-choice-1-26-0:lang(ja),
  kuc-multi-choice-1-26-0:lang(ja) * {
    font-family: "メイリオ", "Hiragino Kaku Gothic ProN", Meiryo,
      sans-serif;
  }
  kuc-multi-choice-1-26-0:lang(zh),
  kuc-multi-choice-1-26-0:lang(zh) * {
    font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,
      Hei, "Heiti SC", sans-serif;
  }
  kuc-multi-choice-1-26-0:lang(zh-TW),
  kuc-multi-choice-1-26-0:lang(zh-TW) * {
    font-family: "微軟正黑體","Microsoft JhengHei","新宋体",NSimSun,STHeiti,
      Hei,"Heiti SC",sans-serif;
  }
  kuc-multi-choice-1-26-0 {
    display: inline-table;
    font-size: 14px;
    color: var(--kuc-multi-choice-menu-color, #333333);
    width: var(--kuc-multi-choice-menu-width, 180px);
    min-width: var(--kuc-multi-choice-menu-width, 180px);
    line-height: 1.5;
  }
  kuc-multi-choice-1-26-0[hidden] {
    display: none;
  }
  .kuc-multi-choice-1-26-0__group {
    border: none;
    padding: 0px;
    height: auto;
    display: inline-block;
    vertical-align: top;
    width: 100%;
    margin: 0px;
  }
  .kuc-multi-choice-1-26-0__group__label {
    padding: 4px 0px 8px 0px;
    display: inline-block;
    white-space: nowrap;
  }
  .kuc-multi-choice-1-26-0__group__label[hidden] {
    display: none;
  }
  .kuc-multi-choice-1-26-0__group__menu {
    position: relative;
    background: #ffffff;
    border: 1px solid #e3e7e8;
    box-sizing: border-box;
    box-shadow: 1px 1px 12px #f5f5f5 inset, -1px -1px 12px #f5f5f5 inset;
    padding: 6px 0;
    overflow-y: auto;
    overflow-x: hidden;
    height: var(--kuc-multi-choice-menu-height, auto);
    max-height: var(--kuc-multi-choice-menu-height, 134px);
    width: var(--kuc-multi-choice-menu-width, auto);
    font-size: var(--kuc-multi-choice-menu-font-size, 14px);
  }
  .kuc-multi-choice-1-26-0__group__menu:not([disabled]):focus {
    outline: none;
    border: 1px solid #3498db;
  }
  .kuc-multi-choice-1-26-0__group__menu[disabled] {
    background-color: #dbdcdd;
    box-shadow: none;
    cursor: not-allowed;
    color: #888888;
    outline: none;
  }
  .kuc-multi-choice-1-26-0__group__menu__item {
    padding: 4px 16px;
    margin-bottom: 2px;
    line-height: 1;
    position: relative;
    white-space: nowrap;
  }
  .kuc-multi-choice-1-26-0__group__menu__item__icon {
    position: absolute;
    top: 50%;
    left: 16px;
    margin-top: -6px;
    pointer-events: none;
  }
  .kuc-multi-choice-1-26-0__group__menu__item--disabled {
    background-color: #d4d7d7;
    cursor: not-allowed;
    color: #888888;
  }
  .kuc-multi-choice-1-26-0__group__menu__item[aria-selected="true"] {
    color: var(--kuc-multi-choice-menu-color-selected, #3498db);
    padding-left: 32px;
  }
  .kuc-multi-choice-1-26-0__group__menu__item--disabled[aria-selected="true"] {
    color: #888888;
    padding-left: 32px;
  }
  .kuc-multi-choice-1-26-0__group__menu[disabled]
    .kuc-multi-choice-1-26-0__group__menu__item[aria-selected="true"] {
    color: #888888;
  }
  .kuc-multi-choice-1-26-0__group__menu__highlight[role="option"] {
    background-color: var(--kuc-multi-choice-menu-background-color-hover, #e2f2fe);
    cursor: pointer;
  }
`,hc=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},gc;(()=>{if(gc=window.customElements.get(`kuc-multi-choice-1-26-0`),gc)return;class e extends V{constructor(e){super(),this.className=``,this.error=``,this.id=``,this.label=``,this.disabled=!1,this.requiredIcon=!1,this.visible=!0,this.items=[],this.selectedIndex=[],this.value=[],this._valueMapping={},this._DISABLED_CLASS=`kuc-multi-choice-1-26-0__group__menu__item--disabled`,this._GUID=W();let t=G(e);this._setInitialValue(t),Object.assign(this,t)}_setInitialValue(e){let t=`value`in e,n=`selectedIndex`in e,r=e.selectedIndex||[];if(!t&&n){if(!K(r))return;let t=this._getValueMapping(e);this.value=this._getValidValue(t,r)}}shouldUpdate(e){return e.has(`items`)&&!K(this.items)?(this.throwErrorAfterUpdateComplete(L.ITEMS.IS_NOT_ARRAY),!1):e.has(`value`)&&!K(this.value)?(this.throwErrorAfterUpdateComplete(L.VALUE.IS_NOT_ARRAY),!1):e.has(`selectedIndex`)&&!K(this.selectedIndex)?(this.throwErrorAfterUpdateComplete(L.SELECTED_INDEX.IS_NOT_ARRAY),!1):!0}willUpdate(e){if(e.has(`value`)){if(this.value.length>0)return;this.selectedIndex=[]}}update(e){(e.has(`items`)||e.has(`value`)||e.has(`selectedIndex`))&&(this._valueMapping=this._getValueMapping({items:this.items,value:this.value,selectedIndex:this.selectedIndex}),this._setValueAndSelectedIndex()),super.update(e)}render(){return j`
        <div class="kuc-multi-choice-1-26-0__group">
          <div
            class="kuc-multi-choice-1-26-0__group__label"
            id="${this._GUID}-label"
            ?hidden="${!this.label}"
          >
            <kuc-base-label-1-26-0
              .text="${this.label}"
              .requiredIcon="${this.requiredIcon}"
            ></kuc-base-label-1-26-0>
          </div>
          <div
            class="kuc-multi-choice-1-26-0__group__menu"
            role="listbox"
            aria-multiselectable="true"
            aria-describedby="${this._GUID}-error"
            aria-labelledby="${this._GUID}-label"
            ?disabled="${this.disabled}"
            tabindex="${this.disabled?`-1`:`0`}"
            @keydown="${this._handleKeyDownMultiChoice}"
          >
            ${this.items.map((e,t)=>this._getMenuItemTemplate(e,t))}
          </div>
          <kuc-base-error-1-26-0
            .text="${this.error}"
            .guid="${this._GUID}"
            ?hidden="${!this.error}"
            ariaLive="assertive"
          ></kuc-base-error-1-26-0>
        </div>
      `}_getValueMapping(e){let t=e.items||[],n=e.value||[],r=e.selectedIndex||[],i=t.map(e=>e.value||``),a=Object.assign({},i),o={};if(n.length===0){let e=this._getValidValue(a,r);return r.forEach((t,n)=>o[t]=e[n]),o}return this._getValidSelectedIndex(a).forEach((e,t)=>o[e]=n[t]),o}_getValidValue(e,t){return t.filter(t=>e[t]).map(t=>e[t])}_getValidSelectedIndex(e){let t=[];for(let n=0;n<this.value.length;n++){let r=this.selectedIndex[n];if(e[r]===this.value[n]){t.push(r);continue}let i=this.items.findIndex(e=>e.value===this.value[n]);t.push(i)}return t}_setValueAndSelectedIndex(){this.value=Object.values(this._valueMapping),this.selectedIndex=Object.keys(this._valueMapping).map(e=>parseInt(e,10))}_handleMouseDownMultiChoiceItem(e){if(this.disabled)return;let t=e.target,n=t.getAttribute(`value`),r=t.dataset.index||`0`;this._handleChangeValue(n,r)}_handleMouseOverMultiChoiceItem(e){if(this.disabled)return;this._itemsEl.forEach(e=>{e.classList.contains(`kuc-multi-choice-1-26-0__group__menu__highlight`)&&e.classList.remove(`kuc-multi-choice-1-26-0__group__menu__highlight`)});let t=e.currentTarget;t.classList.add(`kuc-multi-choice-1-26-0__group__menu__highlight`),this._setActiveDescendant(t.id)}_handleMouseLeaveMultiChoiceItem(e){this.disabled||(e.currentTarget.classList.remove(`kuc-multi-choice-1-26-0__group__menu__highlight`),this._setActiveDescendant())}_handleKeyDownMultiChoice(e){if(!this.disabled)switch(e.key){case`Up`:case`ArrowUp`:if(e.preventDefault(),this.items.length===0)break;this._actionHighlightPrevMenuItem();break;case`Down`:case`ArrowDown`:if(e.preventDefault(),this.items.length===0)break;this._actionHighlightNextMenuItem();break;case`Spacebar`:case` `:e.preventDefault(),this._actionUpdateValue()}}_actionHighlightPrevMenuItem(){let e=null;this._highlightItemEl!==null&&(e=this._highlightItemEl.previousElementSibling),e===null&&(e=this._lastItemEl,this._highlightItemEl===null&&(e=this._firstItemEl));let t=!1;this._actionClearAllHighlightMenuItem();for(let n=0;n<this._itemsEl.length&&(t=e.classList.contains(this._DISABLED_CLASS),t);n++)e=e.previousElementSibling,e===null&&(e=this._lastItemEl);t||(e.classList.add(`kuc-multi-choice-1-26-0__group__menu__highlight`),this._setActiveDescendant(e.id))}_actionHighlightNextMenuItem(){let e=null;this._highlightItemEl!==null&&(e=this._highlightItemEl.nextElementSibling),e===null&&(e=this._firstItemEl);let t=!1;this._actionClearAllHighlightMenuItem();for(let n=0;n<this._itemsEl.length&&(t=e.classList.contains(this._DISABLED_CLASS),t);n++)e=e.nextElementSibling,e===null&&(e=this._firstItemEl);t||(e.classList.add(`kuc-multi-choice-1-26-0__group__menu__highlight`),this._setActiveDescendant(e.id))}_actionClearAllHighlightMenuItem(){this._itemsEl.forEach(e=>{e.classList.remove(`kuc-multi-choice-1-26-0__group__menu__highlight`)})}_actionUpdateValue(){this._itemsEl.forEach(e=>{if(e.classList.contains(`kuc-multi-choice-1-26-0__group__menu__highlight`)){let t=e.getAttribute(`value`),n=e.dataset.index||`0`;this._handleChangeValue(t,n)}})}_getMultiChoiceCheckedIconSvgTemplate(e,t){return M`
        ${t?M`<svg
            class="kuc-multi-choice-1-26-0__group__menu__item__icon"
            width="11"
            height="9"
            viewBox="0 0 11 9"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M0 5L1.5 3L4.5 5.5L9.5 0L11 1.5L4.5 8.5L0 5Z"
              fill="${e?`#888888`:`#3498db`}"
            />
          </svg>`:``}`}_isCheckedItem(e,t){let n=Object.values(this._valueMapping),r=Object.keys(this._valueMapping);return n.filter((n,i)=>n===e.value&&t===parseInt(r[i],10)).length>0}_getMenuItemTemplate(e,t){let n=this._isCheckedItem(e,t),r=e.disabled||this.disabled;return j`
        <div
          class="kuc-multi-choice-1-26-0__group__menu__item ${r?this._DISABLED_CLASS:``}"
          role="option"
          aria-selected="${n}"
          aria-required="${this.requiredIcon}"
          data-index="${t}"
          value="${e.value===void 0?``:e.value}"
          id="${this._GUID}-menuitem-${t}"
          @mousedown="${r?null:this._handleMouseDownMultiChoiceItem}"
          @mouseover="${r?null:this._handleMouseOverMultiChoiceItem}"
          @mouseleave="${r?null:this._handleMouseLeaveMultiChoiceItem}"
        >
          ${this._getMultiChoiceCheckedIconSvgTemplate(r,n)}
          ${e.label===void 0?e.value:e.label}
        </div>
      `}_setActiveDescendant(e){e!==void 0&&this._menuEl!==null?this._menuEl.setAttribute(`aria-activedescendant`,e):this._menuEl.removeAttribute(`aria-activedescendant`)}_handleChangeValue(e,t){let n=this.value?[...this.value]:this.value,r=this._getNewValueMapping(e,t),i=this.items.map(e=>e.value),a=Object.values(r).filter(e=>i.indexOf(e)>-1);if(a===n)return;let o=Object.keys(r).map(e=>parseInt(e,10));this.value=a,this.selectedIndex=o;let s={oldValue:n,value:a};H(this,`change`,s)}_getNewValueMapping(e,t){let n=parseInt(t,10),r=Object.keys(this._valueMapping),i={...this._valueMapping};return r.indexOf(t)>-1?(delete i[n],i):(i[n]=e,i)}}hc([P({type:String,reflect:!0,attribute:`class`})],e.prototype,`className`,void 0),hc([P({type:String})],e.prototype,`error`,void 0),hc([P({type:String,reflect:!0,attribute:`id`})],e.prototype,`id`,void 0),hc([P({type:String})],e.prototype,`label`,void 0),hc([P({type:Boolean})],e.prototype,`disabled`,void 0),hc([P({type:Boolean})],e.prototype,`requiredIcon`,void 0),hc([P({type:Boolean,attribute:`hidden`,reflect:!0,converter:B})],e.prototype,`visible`,void 0),hc([P({type:Array})],e.prototype,`items`,void 0),hc([P({type:Array})],e.prototype,`selectedIndex`,void 0),hc([P({type:Array})],e.prototype,`value`,void 0),hc([I(`.kuc-multi-choice-1-26-0__group__menu`)],e.prototype,`_menuEl`,void 0),hc([ja(`.kuc-multi-choice-1-26-0__group__menu__item`)],e.prototype,`_itemsEl`,void 0),hc([I(`.kuc-multi-choice-1-26-0__group__menu__item`)],e.prototype,`_firstItemEl`,void 0),hc([I(`.kuc-multi-choice-1-26-0__group__menu__item:last-child`)],e.prototype,`_lastItemEl`,void 0),hc([I(`.kuc-multi-choice-1-26-0__group__menu__highlight`)],e.prototype,`_highlightItemEl`,void 0),hc([F()],e.prototype,`_valueMapping`,void 0),window.customElements.define(`kuc-multi-choice-1-26-0`,e),U(mc),gc=e})();var _c=`
  kuc-notification-1-26-0,
  kuc-notification-1-26-0 *,
  kuc-notification-1-26-0:lang(en),
  kuc-notification-1-26-0:lang(en) * {
    font-family: sans-serif;
  }
  kuc-notification-1-26-0:lang(es),
  kuc-notification-1-26-0:lang(es) * {
    font-family: sans-serif;
  }
  kuc-notification-1-26-0:lang(ja),
  kuc-notification-1-26-0:lang(ja) * {
    font-family: "メイリオ", "Hiragino Kaku Gothic ProN", Meiryo,
      sans-serif;
  }
  kuc-notification-1-26-0:lang(zh),
  kuc-notification-1-26-0:lang(zh) * {
    font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,
      Hei, "Heiti SC", sans-serif;
  }
  kuc-notification-1-26-0:lang(zh-TW),
  kuc-notification-1-26-0:lang(zh-TW) * {
    font-family: "微軟正黑體","Microsoft JhengHei","新宋体",NSimSun,STHeiti,
      Hei,"Heiti SC",sans-serif;
  }
  kuc-notification-1-26-0 {
    color: #ffffff;
    font-weight: 700;
    text-align: center;
    text-shadow: 1px -1px 0 rgba(0, 0, 0, 0.5);
  }
  kuc-notification-1-26-0 {
    position: fixed;
    display: inline-block;
    top: 0;
    left: 0;
    width: 100%;
    line-height: 1.5;
    z-index: 10000;
    margin-top: 16px;
    pointer-events: none;
    visibility: hidden;
    animation-fill-mode: forwards;
  }
  .kuc-notification-fadein-1-26-0 {
    animation-name: kuc-notification-fade-in-1-26-0;
    animation-duration: 250ms;
    animation-timing-function: ease-out;
  }
  .kuc-notification-fadeout-1-26-0 {
    animation-name: kuc-notification-fade-out-1-26-0;
    animation-duration: 250ms;
    animation-timing-function: ease-out;
  }
  .kuc-notification-1-26-0__notification {
    position: relative;
    display: inline-block;
    text-align: left;
    pointer-events: auto;
    padding: 16px 56px 16px 24px;
    background-color: var(--kuc-notification-background-color, #e74c3c);
  }
  .kuc-notification-1-26-0__notification--info {
    background-color: var(--kuc-notification-background-color, #3498db);
  }
  .kuc-notification-1-26-0__notification--success {
    background-color: var(--kuc-notification-background-color, #91c36c);
  }
  .kuc-notification-1-26-0__notification--danger {
    background-color: var(--kuc-notification-background-color, #e74c3c);
  }
  .kuc-notification-1-26-0__notification__title {
    display: flex;
    align-items: center;
    margin: 0;
    font-size: var(--kuc-notification-font-size, 16px);
    color: var(--kuc-notification-color, #ffffff);
    max-width: 500px;
    min-height: 24px;
    word-break: break-word;
    white-space: pre-wrap;
  }
  .kuc-notification-1-26-0__notification__title--html {
    white-space: normal;
    max-width: 500px;
  }
  .kuc-notification-1-26-0__notification__close-button {
    position: absolute;
    top: 4px;
    right: 0;
    width: 48px;
    height: 48px;
    background-color: transparent;
    outline: none;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
  }
  .kuc-notification-1-26-0__notification__close-button__icon-background--danger {
    fill: var(--kuc-notification-close-button-background-color, #c65040);
  }
  .kuc-notification-1-26-0__notification__close-button__icon-background--info {
    fill: var(--kuc-notification-close-button-background-color, #448aca);
  }
  .kuc-notification-1-26-0__notification__close-button__icon-background--success {
    fill: var(--kuc-notification-close-button-background-color, #9bbc65);
  }
  @keyframes kuc-notification-fade-in-1-26-0 {
    0% {
      visibility: visible;
      top: -56px;
    }
    100% {
      visibility: visible;
      top: 0;
    }
  }
  @keyframes kuc-notification-fade-out-1-26-0 {
    0% {
      visibility: visible;
      top: 0;
    }
    10% {
      visibility: visible;
      top: 14px;
    }
    100% {
      top: -56px;
    }
  }
`,vc=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},yc;(()=>{if(yc=window.customElements.get(`kuc-notification-1-26-0`),yc)return;class e extends V{constructor(e){super(),this.className=``,this.id=``,this.text=``,this.type=`danger`,this.duration=-1,this.container=document.body,this.content=``,this._isOpened=!1,this._content=``;let t=G(e);Object.assign(this,t)}shouldUpdate(e){if(e.has(`container`)){if(this.container===null||this.container===void 0)return this._isOpened&&this._close(),!1;let e=this._isValidContainerElement(),t=!e||!document.contains(this.container);if(this._isOpened&&t&&this._close(),!e)return this.throwErrorAfterUpdateComplete(L.CONTAINER.INVALID),!1}return!0}willUpdate(e){(e.has(`content`)||e.has(`text`))&&(this._content=this.content!==null&&this.content!==void 0&&this.content!==``?ls(this.content)?j`<div
              class="kuc-notification-1-26-0__notification__title--html"
            >
              ${Io(this.content)}
            </div>`:this.content:this.text)}_isValidContainerElement(){return this.container instanceof HTMLElement}_handleClickCloseButton(e){this.close()}_getCloseButtonColorType(){switch(this.type){case`info`:case`success`:return this.type;default:return`danger`}}_getCloseButtonSvgTemplate(){return M`
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>close button</title>
          <path
            class="kuc-notification-1-26-0__notification__close-button__icon-background--${this._getCloseButtonColorType()}"
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32Z"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M16.4765 15.7071L20.1229 12.0607L20.4765 11.7071L19.7694 11L19.4158 11.3536L15.7694 15L12.1229 11.3536L11.7694 11L11.0623 11.7071L11.4158 12.0607L15.0623 15.7071L11.3536 19.4158L11 19.7694L11.7071 20.4765L12.0607 20.1229L15.7694 16.4142L19.4781 20.1229L19.8316 20.4765L20.5387 19.7694L20.1852 19.4158L16.4765 15.7071Z"
            fill="white"
          />
        </svg>
      `}_setAutoCloseTimer(){this._clearAutoCloseTimer(),!Number.isFinite(this.duration)||this.duration<0||(this._timeoutID=window.setTimeout(()=>{this.close()},this.duration))}_clearAutoCloseTimer(){this._timeoutID&&window.clearTimeout(this._timeoutID)}open(){this._isValidContainerElement()?(this.container.appendChild(this),this.performUpdate(),this.classList.remove(`kuc-notification-fadeout-1-26-0`),this.classList.add(`kuc-notification-fadein-1-26-0`),this._isOpened=!0,this._setAutoCloseTimer()):(document.body.appendChild(this),requestAnimationFrame(()=>{document.body.removeChild(this)}),this.performUpdate())}_close(){this._isOpened=!1,this.classList.remove(`kuc-notification-fadein-1-26-0`),this.classList.add(`kuc-notification-fadeout-1-26-0`),this._clearAutoCloseTimer()}close(){this._close(),H(this,`close`)}render(){return j`
        <div
          class="kuc-notification-1-26-0__notification kuc-notification-1-26-0__notification--${this.type}"
        >
          <pre
            class="kuc-notification-1-26-0__notification__title"
            aria-live="assertive"
            role="${this._isOpened?`alert`:``}"
          ><!--
          -->${this._content}</pre>
          <button
            class="kuc-notification-1-26-0__notification__close-button"
            type="button"
            aria-label="close"
            @click="${this._handleClickCloseButton}"
          >
            ${this._getCloseButtonSvgTemplate()}
          </button>
        </div>
      `}}vc([P({type:String,reflect:!0,attribute:`class`})],e.prototype,`className`,void 0),vc([P({type:String,reflect:!0,attribute:`id`})],e.prototype,`id`,void 0),vc([P({type:String})],e.prototype,`text`,void 0),vc([P({type:String})],e.prototype,`type`,void 0),vc([P({type:Number})],e.prototype,`duration`,void 0),vc([P()],e.prototype,`container`,void 0),vc([P()],e.prototype,`content`,void 0),vc([F()],e.prototype,`_isOpened`,void 0),window.customElements.define(`kuc-notification-1-26-0`,e),U(_c),yc=e})();var bc=yc,xc=`
  kuc-radio-button-1-26-0,
  kuc-radio-button-1-26-0 *,
  kuc-radio-button-1-26-0:lang(en),
  kuc-radio-button-1-26-0:lang(en) * {
    font-family: sans-serif;
  }
  kuc-radio-button-1-26-0:lang(es),
  kuc-radio-button-1-26-0:lang(es) * {
    font-family: sans-serif;
  }
  kuc-radio-button-1-26-0:lang(ja),
  kuc-radio-button-1-26-0:lang(ja) * {
    font-family: "メイリオ", "Hiragino Kaku Gothic ProN", Meiryo,
      sans-serif;
  }
  kuc-radio-button-1-26-0:lang(zh),
  kuc-radio-button-1-26-0:lang(zh) * {
    font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,
      Hei, "Heiti SC", sans-serif;
  }
  kuc-radio-button-1-26-0:lang(zh-TW),
  kuc-radio-button-1-26-0:lang(zh-TW) * {
    font-family: "微軟正黑體","Microsoft JhengHei","新宋体",NSimSun,STHeiti,
      Hei,"Heiti SC",sans-serif;
  }
  kuc-radio-button-1-26-0 {
    font-size: 14px;
    color: #333333;
    display: inline-table;
    width: var(--kuc-radio-button-menu-width, 239px);
    min-width: var(--kuc-radio-button-menu-width, 239px);
    vertical-align: top;
    line-height: 1.5;
  }

  kuc-radio-button-1-26-0[hidden] {
    display: none;
  }

  .kuc-radio-button-1-26-0__group {
    border: none;
    padding: 0px;
    height: auto;
    display: inline-block;
    margin: 0px;
    width: 100%;
  }

  .kuc-radio-button-1-26-0__group__label {
    display: inline-block;
    padding: 4px 0 8px 0;
    white-space: nowrap;
  }

  .kuc-radio-button-1-26-0__group__label[hidden] {
    display: none;
  }

  .kuc-radio-button-1-26-0__group__select-menu {
    display: flex;
    align-items: flex-start;
    width: var(--kuc-radio-button-menu-width, 100%);
    height: var(--kuc-radio-button-menu-height);
    color: var(--kuc-radio-button-menu-color, #333333);
    font-size: var(--kuc-radio-button-menu-font-size, 14px);
  }

  .kuc-radio-button-1-26-0__group__select-menu[itemlayout="vertical"] {
    display: block;
  }

  .kuc-radio-button-1-26-0__group__select-menu[bordervisible] {
    border-color: #e3e7e8;
    border-width: 1px;
    border-style: solid;
    padding-top: 4px;
    box-sizing: border-box;
  }

  .kuc-radio-button-1-26-0__group__select-menu__item {
    margin-left: 4px;
    margin-bottom: 4px;
    margin-right: 16px;
    padding: 4px;
    border: 1px solid transparent;
    position: relative;
    white-space: normal;
    word-wrap: normal;
    display: flex;
    align-items: center;
  }

  .kuc-radio-button-1-26-0__group__select-menu__item[focused] {
    border: 1px solid #3498db;
  }

  .kuc-radio-button-1-26-0__group__select-menu__item__input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
  }

  .kuc-radio-button-1-26-0__group__select-menu__item__input:hover
    + .kuc-radio-button-1-26-0__group__select-menu__item__label {
    color: var(--kuc-radio-button-menu-color-hover, #666666);
  }

  .kuc-radio-button-1-26-0__group__select-menu__item__label__icon {
    position: absolute;
    left: -30px;
    box-sizing: border-box;
    width: 21px;
    height: 21px;
    box-shadow: 1px 1px 3px #f5f5f5 inset, -1px -1px 3px #f5f5f5 inset;
    content: "";
    border-radius: 9px;
  }

  .kuc-radio-button-1-26-0__group__select-menu__item__input[disabled]
    + .kuc-radio-button-1-26-0__group__select-menu__item__label {
    color: #888888;
    cursor: not-allowed;
  }

  .kuc-radio-button-1-26-0__group__select-menu__item__label {
    cursor: pointer;
    position: relative;
    margin-left: 32px;
    display: flex;
    align-items: center;
    vertical-align: middle;
    white-space: nowrap;
    line-height: 1.2;
    min-height: 24px;
  }
`,Sc=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},Cc;(()=>{if(Cc=window.customElements.get(`kuc-radio-button-1-26-0`),Cc)return;class e extends V{constructor(e){super(),this.className=``,this.error=``,this.id=``,this.itemLayout=`horizontal`,this.label=``,this.value=``,this.selectedIndex=-1,this.borderVisible=!0,this.disabled=!1,this.requiredIcon=!1,this.visible=!0,this.items=[],this._GUID=W();let t=G(e);this._setInitialValue(t),Object.assign(this,t)}_setInitialValue(e){let t=`value`in e,n=`selectedIndex`in e;!t&&n&&(this.value=this._getValue(e)||``)}shouldUpdate(e){return e.has(`items`)&&!K(this.items)?(this.throwErrorAfterUpdateComplete(L.ITEMS.IS_NOT_ARRAY),!1):e.has(`value`)&&!ts(this.value)?(this.throwErrorAfterUpdateComplete(L.VALUE.IS_NOT_STRING),!1):e.has(`selectedIndex`)&&!cs(this.selectedIndex)?(this.throwErrorAfterUpdateComplete(L.SELECTED_INDEX.IS_NOT_NUMBER),!1):!0}_findItemToFocus(){let e=-1;for(let t=0;t<this.items.length;t++){let n=this.items[t];n.disabled||(this.selectedIndex===t&&n.value===this.value||e===-1)&&(e=t)}return e}willUpdate(e){if(e.has(`value`)){if(this.value!==``)return;this.selectedIndex=-1}}_handleChangeInput(e){e.stopPropagation();let t=e.target,n=t.value,r=t.dataset.index||`0`,i=parseInt(r,10);if(this.value===n&&this.selectedIndex===i)return;let a={oldValue:this.value,value:n};this.value=n,this.selectedIndex=i,H(this,`change`,a)}_handleFocusInput(e){e.target.parentNode.setAttribute(`focused`,``)}_handleBlurInput(e){e.target.parentNode.removeAttribute(`focused`)}_getRadioIconSvgTemplate(e,t){return M`
    <svg
      class="kuc-radio-button-1-26-0__group__select-menu__item__label__icon"
      width="21"
      height="21"
      viewBox="0 0 21 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="10.5"
        cy="10.5"
        r="10"
        fill="white"
        stroke="#e3e7e8" stroke-width="1"/>
      ${t?M`<circle cx="10.5" cy="10.5" r="6.5" fill="${e?`#e3e7e8`:`#3498db`}"/>`:``}
    </svg>
  `}_isCheckedItem(e,t){return this.value?e.value===this.value&&this.selectedIndex===t:this.selectedIndex===t}_getItemTemplate(e,t){let n=this._isCheckedItem(e,t),r=e.disabled||this.disabled,i=e.value===void 0?``:e.value,a=t===this._findItemToFocus()?`0`:`-1`;return j`
        <div
          class="kuc-radio-button-1-26-0__group__select-menu__item"
          itemLayout="${this.itemLayout}"
        >
          <input
            type="radio"
            aria-checked="${n?`true`:`false`}"
            aria-describedby="${this._GUID}-error"
            data-index="${t}"
            id="${this._GUID}-item-${t}"
            class="kuc-radio-button-1-26-0__group__select-menu__item__input"
            name="${this._GUID}-group"
            value="${i}"
            tabindex="${a}"
            aria-required="${this.requiredIcon}"
            ?disabled="${r}"
            @change="${this._handleChangeInput}"
            @focus="${this._handleFocusInput}"
            @blur="${this._handleBlurInput}"
          />
          <label
            class="kuc-radio-button-1-26-0__group__select-menu__item__label"
            for="${this._GUID}-item-${t}"
            >${this._getRadioIconSvgTemplate(r,n)}${e.label===void 0?e.value:e.label}
          </label>
        </div>
      `}update(e){(e.has(`items`)||e.has(`value`)||e.has(`selectedIndex`))&&(this.selectedIndex=this._getSelectedIndex(),this.value=this._getValue({items:this.items,selectedIndex:this.selectedIndex})||``),super.update(e)}render(){return j`
        <div
          class="kuc-radio-button-1-26-0__group"
          role="radiogroup"
          aria-labelledby="${this._GUID}-group"
        >
          <div class="kuc-radio-button-1-26-0__group__label" ?hidden="${!this.label}">
            <kuc-base-label-1-26-0
              .text="${this.label}"
              .guid="${this._GUID}"
              .requiredIcon="${this.requiredIcon}"
            ></kuc-base-label-1-26-0>
          </div>
          <div
            class="kuc-radio-button-1-26-0__group__select-menu"
            ?borderVisible="${this.borderVisible}"
            itemLayout="${this.itemLayout}"
          >
            ${this.items.map((e,t)=>this._getItemTemplate(e,t))}
          </div>
          <kuc-base-error-1-26-0
            .text="${this.error}"
            .guid="${this._GUID}"
            ?hidden="${!this.error}"
            ariaLive="assertive"
          ></kuc-base-error-1-26-0>
        </div>
      `}updated(){this._inputEls.forEach((e,t)=>{e.checked=this.value===e.value&&t===this.selectedIndex})}_getSelectedIndex(){if(!this.value)return this.items[this.selectedIndex]?this.selectedIndex:-1;let e=this.items.findIndex(e=>e.value===this.value);if(e===-1)return-1;let t=this.items.findIndex((e,t)=>e.value===this.value&&t===this.selectedIndex);return t>-1?t:e}_getValue(e){let t=(e.items||[])[e.selectedIndex===0||e.selectedIndex?e.selectedIndex:-1];return t?t.value:``}}Sc([P({type:String,reflect:!0,attribute:`class`})],e.prototype,`className`,void 0),Sc([P({type:String})],e.prototype,`error`,void 0),Sc([P({type:String,reflect:!0,attribute:`id`})],e.prototype,`id`,void 0),Sc([P({type:String})],e.prototype,`itemLayout`,void 0),Sc([P({type:String})],e.prototype,`label`,void 0),Sc([P({type:String})],e.prototype,`value`,void 0),Sc([P({type:Number})],e.prototype,`selectedIndex`,void 0),Sc([P({type:Boolean})],e.prototype,`borderVisible`,void 0),Sc([P({type:Boolean})],e.prototype,`disabled`,void 0),Sc([P({type:Boolean})],e.prototype,`requiredIcon`,void 0),Sc([P({type:Boolean,attribute:`hidden`,reflect:!0,converter:B})],e.prototype,`visible`,void 0),Sc([P({type:Array})],e.prototype,`items`,void 0),Sc([ja(`.kuc-radio-button-1-26-0__group__select-menu__item__input`)],e.prototype,`_inputEls`,void 0),window.customElements.define(`kuc-radio-button-1-26-0`,e),U(xc),Cc=e})();var wc=`
  .kuc-base-pagination-1-26-0__group {
    margin-top: 10px;
  }
  .kuc-base-pagination-1-26-0__group button {
    cursor: pointer;
  }
  .kuc-base-pagination-1-26-0__group__pager-prev {
    border: none;
    background-color: transparent;
    visibility: visible;
    height: 23px;
    vertical-align: middle;
  }
  .kuc-base-pagination-1-26-0__group__pager-next {
    border: none;
    background-color: transparent;
    visibility: visible;
    height: 23px;
    vertical-align: middle;
  }
  .kuc-base-pagination-1-26-0__group__pager-next:hover svg path,
  .kuc-base-pagination-1-26-0__group__pager-prev:hover svg path,
  .kuc-base-pagination-1-26-0__group__pager-next:focus-visible svg path,
  .kuc-base-pagination-1-26-0__group__pager-prev:focus-visible svg path
  {
    fill: #3498db;
  }
  .kuc-base-pagination-1-26-0__group__pager--focus,
  .kuc-base-pagination-1-26-0__group__pager-next:focus-visible,
  .kuc-base-pagination-1-26-0__group__pager-prev:focus-visible {
    outline: 1px solid #3498db;
  }
  .kuc-base-pagination-1-26-0__group__pager--horver svg path {
    fill: #3498db;
  }
  .kuc-base-pagination-1-26-0__group__pager-next svg,
  .kuc-base-pagination-1-26-0__group__pager-prev svg {
    margin-top: 3px;
  }
  .kuc-base-pagination-1-26-0__group__pager-disable {
    visibility: hidden;
  }
  .kuc-base-pagination-1-26-0__group__pager-current {
    display: inline-block;
    height: 23px;
    line-height: 23px;
    vertical-align: middle;
    font-size: 14px;
    color: #333333;
  }
`,Tc=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},Ec;(()=>{if(Ec=window.customElements.get(`kuc-base-pagination-1-26-0`),Ec)return;class e extends V{constructor(){super(...arguments),this.pagePosition=1,this.rowsPerPage=5,this.total=1,this.isNext=!0,this.isPrev=!0,this.visible=!0}render(){return j`
        <div class="kuc-base-pagination-1-26-0__group" ?hidden="${!this.visible}">
          <button
            title="previous"
            class="kuc-base-pagination-1-26-0__group__pager-prev${this.isPrev?``:` kuc-base-pagination-1-26-0__group__pager-disable`}"
            type="button"
            @click="${this._handleClickPrevButton}"
            @focus="${this._handleFocusPrevButton}"
            @blur="${this._handleBlurPrevButton}"
            @mouseover="${this._handleMouseOverPrevButton}"
            @mouseleave="${this._handleMouseLeavePrevButton}"
          >
            ${this._getPrevButtonSvgTemplate()}</button
          >${this._getCurrentPageNumberTemplate()}<button
            title="next"
            class="kuc-base-pagination-1-26-0__group__pager-next${this.isNext?``:` kuc-base-pagination-1-26-0__group__pager-disable`}"
            type="button"
            @click="${this._handleClickNextButton}"
            @focus="${this._handleFocusNextButton}"
            @blur="${this._handleBlurNextButton}"
            @mouseover="${this._handleMouseOverNextButton}"
            @mouseleave="${this._handleMouseLeaveNextButton}"
          >
            ${this._getNextButtonSvgTemplate()}
          </button>
        </div>
      `}_handleClickPrevButton(e){e.stopPropagation(),H(this,`kuc:pagination-click-prev`)}_handleFocusPrevButton(){this._prevButtonEl.classList.add(`kuc-base-pagination-1-26-0__group__pager--focus`)}_handleBlurPrevButton(){this._prevButtonEl.classList.remove(`kuc-base-pagination-1-26-0__group__pager--focus`)}_handleMouseOverPrevButton(){this._prevButtonEl.classList.add(`kuc-base-pagination-1-26-0__group__pager--horver`)}_handleMouseLeavePrevButton(){this._prevButtonEl.classList.remove(`kuc-base-pagination-1-26-0__group__pager--horver`)}_handleClickNextButton(e){e.stopPropagation(),H(this,`kuc:pagination-click-next`)}_handleFocusNextButton(){this._nextButtonEl.classList.add(`kuc-base-pagination-1-26-0__group__pager--focus`)}_handleBlurNextButton(){this._nextButtonEl.classList.remove(`kuc-base-pagination-1-26-0__group__pager--focus`)}_handleMouseOverNextButton(){this._nextButtonEl.classList.add(`kuc-base-pagination-1-26-0__group__pager--horver`)}_handleMouseLeaveNextButton(){this._nextButtonEl.classList.remove(`kuc-base-pagination-1-26-0__group__pager--horver`)}_getPrevButtonSvgTemplate(){return M`
        <svg
          width="9"
          height="15"
          viewBox="0 0 9 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M1.99061 7.5L9 0.0604158L7.06632 0L0 7.5L7.06632 15L9 14.9396L1.99061 7.5Z"
            fill="#888888"
          />
        </svg>
      `}_getNextButtonSvgTemplate(){return M`
      <svg
        width="9"
        height="15"
        viewBox="0 0 9 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M7.00939 7.5L0 0.0604158L1.93368 0L9 7.5L1.93368 15L0 14.9396L7.00939 7.5Z"
          fill="#888888"
        />
      </svg>
      `}_getCurrentPageNumberTemplate(){let e=this._createCurrentPageInfo();return j`<span class="kuc-base-pagination-1-26-0__group__pager-current"
        >${`${e.firstNum} - ${e.lastNum} / ${this.total}`}</span
      >`}_createCurrentPageInfo(){let e=(this.pagePosition-1)*this.rowsPerPage+1,t=this.pagePosition*this.rowsPerPage;return t=t>this.total?this.total:t,{firstNum:e,lastNum:t}}}Tc([P({type:Number})],e.prototype,`pagePosition`,void 0),Tc([P({type:Number})],e.prototype,`rowsPerPage`,void 0),Tc([P({type:Number})],e.prototype,`total`,void 0),Tc([P({type:Boolean})],e.prototype,`isNext`,void 0),Tc([P({type:Boolean})],e.prototype,`isPrev`,void 0),Tc([P({type:Boolean,attribute:`hidden`,reflect:!0,converter:B})],e.prototype,`visible`,void 0),Tc([I(`.kuc-base-pagination-1-26-0__group__pager-prev`)],e.prototype,`_prevButtonEl`,void 0),Tc([I(`.kuc-base-pagination-1-26-0__group__pager-next`)],e.prototype,`_nextButtonEl`,void 0),window.customElements.define(`kuc-base-pagination-1-26-0`,e),U(wc),Ec=e})();var Dc=`
  kuc-readonly-table-1-26-0 ,
  kuc-readonly-table-1-26-0  *,
  kuc-readonly-table-1-26-0:lang(en),
  kuc-readonly-table-1-26-0:lang(en) * {
    font-family: sans-serif;
  }
  kuc-readonly-table-1-26-0:lang(es),
  kuc-readonly-table-1-26-0:lang(es) * {
    font-family: sans-serif;
  }
  kuc-readonly-table-1-26-0:lang(ja),
  kuc-readonly-table-1-26-0:lang(ja) * {
      font-family: "メイリオ", "Hiragino Kaku Gothic ProN", Meiryo,
      sans-serif;
  }
  kuc-readonly-table-1-26-0:lang(zh),
  kuc-readonly-table-1-26-0:lang(zh) * {
      font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,
      Hei, "Heiti SC", sans-serif;
  }
  kuc-readonly-table-1-26-0:lang(zh-TW),
  kuc-readonly-table-1-26-0:lang(zh-TW) * {
    font-family: "微軟正黑體","Microsoft JhengHei","新宋体",NSimSun,STHeiti,
      Hei,"Heiti SC",sans-serif;
  }
  kuc-readonly-table-1-26-0 {
    font-size: 14px;
    color: #333333;
    display: block;
  }
  kuc-readonly-table-1-26-0[hidden] {
    display: none;
  }
  .kuc-readonly-table-1-26-0__table {
    border-collapse: collapse;
    table-layout: fixed;
    width: 100%;
    display: inline-block;
  }
  .kuc-readonly-table-1-26-0__table__header {
    border-width: 0px 1px;
    border-color: var(--kuc-readonly-table-header-background-color, #3498db);
    border-style: solid;
  }
  .kuc-readonly-table-1-26-0__table__header__cell--sort.kuc-readonly-table-1-26-0__table__header__cell--first-visible:hover {
    border-left: 1px solid var(--kuc-readonly-table-header-background-color-hover, #1d6fa5);
  }
  .kuc-readonly-table-1-26-0__table__header__cell--sort.kuc-readonly-table-1-26-0__table__header__cell--last-visible:hover {
    border-right: 1px solid var(--kuc-readonly-table-header-background-color-hover, #1d6fa5);
  }
  .kuc-readonly-table-1-26-0__table__header__cell--sort.kuc-readonly-table-1-26-0__table__header__cell--first-visible:focus-visible {
    border-left: 1px solid var(--kuc-readonly-table-header-background-color-focus, #1d6fa5);
  }
  .kuc-readonly-table-1-26-0__table__header__cell--sort.kuc-readonly-table-1-26-0__table__header__cell--last-visible:focus-visible {
    border-right: 1px solid var(--kuc-readonly-table-header-background-color-focus, #1d6fa5);
  }
  .kuc-readonly-table-1-26-0__table__header__cell--sorted-asc.kuc-readonly-table-1-26-0__table__header__cell--first-visible,
  .kuc-readonly-table-1-26-0__table__header__cell--sorted-desc.kuc-readonly-table-1-26-0__table__header__cell--first-visible {
    border-left: 1px solid var(--kuc-readonly-table-header-background-color-sorted, #1d6fa5);
  }
  .kuc-readonly-table-1-26-0__table__header__cell--sorted-asc.kuc-readonly-table-1-26-0__table__header__cell--last-visible,
  .kuc-readonly-table-1-26-0__table__header__cell--sorted-desc.kuc-readonly-table-1-26-0__table__header__cell--last-visible {
    border-right: 1px solid var(--kuc-readonly-table-header-background-color-sorted, #1d6fa5);
  }
  .kuc-readonly-table-1-26-0__table__label {
    text-align: left;
    white-space: normal;
    overflow-wrap: anywhere;
    padding: 4px 0px;
  }
  .kuc-readonly-table-1-26-0__table__label[hidden] {
    display: none;
  }
  .kuc-readonly-table-1-26-0__table__label--no-column {
    overflow-wrap: break-word;
  }
  .kuc-readonly-table-1-26-0__table__header__cell {
    background-color: var(--kuc-readonly-table-header-background-color, #3498db);
    color: var(--kuc-readonly-table-header-color, #ffffff);
    height: var(--kuc-readonly-table-header-height, 40px);
    box-sizing: border-box;
    text-align: left;
    overflow: auto;
    white-space: nowrap;
    word-wrap: break-word;
    padding: 4px 8px;
    font-weight: 400;
    font-size: var(--kuc-readonly-table-header-font-size, 12px);
  }
  .kuc-readonly-table-1-26-0__table__header__cell--html {
    white-space: normal;
    overflow: unset;
  }
  .kuc-readonly-table-1-26-0__table__header__cell[hidden] {
    display: none;
  }
  .kuc-readonly-table-1-26-0__table__header__cell__wrapper {
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
  }
  .kuc-readonly-table-1-26-0__table__header__cell__wrapper__title {
    flex: 1;
    min-width: 0;
  }
  .kuc-readonly-table-1-26-0__table__header__cell__wrapper__title--html {
    white-space: normal;
  }
  .kuc-readonly-table-1-26-0__table__header__cell__wrapper__sort-icon {
    flex-shrink: 0;
    margin-left: 4px;
    display: flex;
    align-items: center;
    align-self: center;
  }
  .kuc-readonly-table-1-26-0__table__body {
    vertical-align: top;
  }
  .kuc-readonly-table-1-26-0__table__body>.kuc-readonly-table-1-26-0__table__body__row:first-child>.kuc-readonly-table-1-26-0__table__body__row__cell-data {
    border-top-width: 0px;
  }
  .kuc-readonly-table-1-26-0__table__body__row__cell-data {
    box-sizing: border-box;
    padding: 4px 8px;
    white-space: pre-wrap;
    overflow-wrap: break-word;
    border-color: #e3e7e8;
    border-style: solid;
    border-width: 1px;
  }
  .kuc-readonly-table-1-26-0__table__body__row__cell-data[hidden] {
    display: none;
  }
  .kuc-readonly-table-1-26-0__table__header__cell,
  .kuc-readonly-table-1-26-0__table__body__row__cell-data {
    scrollbar-width: none; /* Firefox */
  }
  .kuc-readonly-table-1-26-0__table__header__cell::-webkit-scrollbar,
  .kuc-readonly-table-1-26-0__table__body__row__cell-data::-webkit-scrollbar {
    width: 0; /* Safari and Chrome */
    display: none
  }
  .kuc-readonly-table-1-26-0__table__body__row__cell-data--html {
    white-space: normal;
  }
  .kuc-readonly-table-1-26-0__table__header__cell--sort {
    cursor: pointer;
    user-select: none;
  }
  .kuc-readonly-table-1-26-0__table__header__cell--sort:hover {
    background-color: var(--kuc-readonly-table-header-background-color-hover, #1d6fa5);
  }
  .kuc-readonly-table-1-26-0__table__header__cell--sort:focus-visible {
    outline: none;
    background-color: var(--kuc-readonly-table-header-background-color-focus, #1d6fa5);
  }
  .kuc-readonly-table-1-26-0__table__header__cell--sorted-asc,
  .kuc-readonly-table-1-26-0__table__header__cell--sorted-desc {
    background-color: var(--kuc-readonly-table-header-background-color-sorted, #1d6fa5);
  }
`,Oc=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},kc;(()=>{if(kc=window.customElements.get(`kuc-readonly-table-1-26-0`),kc)return;class e extends V{constructor(e){if(super(),this.className=``,this.id=``,this.label=``,this.columns=[],this.data=[],this.pagination=!0,this.rowsPerPage=5,this.visible=!0,this._pagePosition=1,this._columnOrder=[],this._sortField=null,this._sortDirection=null,!e)return;let t=G(e);Object.assign(this,t)}shouldUpdate(e){return e.has(`columns`)&&!K(this.columns)?(this.throwErrorAfterUpdateComplete(L.COLUMNS.IS_NOT_ARRAY),!1):e.has(`data`)&&!K(this.data)?(this.throwErrorAfterUpdateComplete(L.DATA.IS_NOT_ARRAY),!1):e.has(`rowsPerPage`)&&!is(this.rowsPerPage)?(this.throwErrorAfterUpdateComplete(L.ROWS_PER_PAGE.INVALID),!1):!0}willUpdate(e){e.has(`columns`)&&(this._columnOrder=[],this.columns.map(e=>this._columnOrder.push(e.field?e.field:``))),e.has(`rowsPerPage`)&&(this.rowsPerPage=Math.round(this.rowsPerPage))}render(){let e=this._createDisplayData();return!this.columns||this.columns.length<1?j`
            <table class="kuc-readonly-table-1-26-0__table">
              <caption
                class="kuc-readonly-table-1-26-0__table__label kuc-readonly-table-1-26-0__table__label--no-column"
                ?hidden="${!this.label}"
              >
                ${this.label}
              </caption>
            </table>
          `:j`
            <table class="kuc-readonly-table-1-26-0__table">
              <caption
                class="kuc-readonly-table-1-26-0__table__label"
                ?hidden="${!this.label}"
              >
                ${this.label}
              </caption>
              <thead class="kuc-readonly-table-1-26-0__table__header">
                <tr>
                  ${this.columns.map((e,t)=>this._getColumnsTemplate(e,t))}
                </tr>
              </thead>
              <tbody class="kuc-readonly-table-1-26-0__table__body">
                ${e.map((e,t)=>this._getDataTemplate(e,t))}
              </tbody>
            </table>
            <kuc-base-pagination-1-26-0
              .pagePosition="${this._pagePosition}"
              .rowsPerPage="${this.rowsPerPage}"
              .total="${this.data.length}"
              .visible="${this.pagination}"
              .isPrev="${this._toggleDisplayPreviousButton()}"
              .isNext="${this._toggleDisplayNextButton()}"
              @kuc:pagination-click-prev=${this._handleClickPreviousButton}
              @kuc:pagination-click-next=${this._handleClickNextButton}
            ></kuc-base-pagination-1-26-0>
          `}_createDisplayData(){let e=[...this.data];if(this._sortField&&this._sortDirection&&(e=this._sortData(e,this._sortField,this._sortDirection)),!this.pagination)return e;let t=(this._pagePosition-1)*this.rowsPerPage+1,n=this._pagePosition*this.rowsPerPage;return e.filter((e,r)=>r>=t-1&&r<=n-1)}_sortData(e,t,n){return[...e].sort((e,r)=>{let i=e[t],a=r[t],o=ls(i),s=ls(a);if(o&&s)return 0;if(o)return 1;if(s)return-1;if(i==null&&a==null)return 0;if(i==null)return 1;if(a==null)return-1;if(typeof i==`number`&&typeof a==`number`)return n===`asc`?i-a:a-i;if(typeof i==`string`&&typeof a==`string`&&es(i)&&es(a)){let e=new Date(i),t=new Date(a);if(!isNaN(e.getTime())&&!isNaN(t.getTime()))return n===`asc`?e.getTime()-t.getTime():t.getTime()-e.getTime()}let c=String(i),l=String(a),u=new Intl.Collator(void 0,{numeric:!0,sensitivity:`base`});return n===`asc`?u.compare(c,l):u.compare(l,c)})}_handleClickHeader(e){this._sortFields(e)}_handleKeyDownHeader(e,t){(e.key===`Enter`||e.key===` `)&&(e.preventDefault(),this._sortFields(t))}_sortFields(e){let t=this._columnOrder.indexOf(e);t<0||this.columns[t].sort&&(this._sortField===e?this._sortDirection=this._sortDirection===`asc`?`desc`:`asc`:(this._sortField=e,this._sortDirection=`asc`),this._pagePosition=1)}_customWidthVariables(e){return`var(--kuc-readonly-table-header-${e}-width, var(--kuc-readonly-table-header-width, auto))`}_getColumnsTemplate(e,t){let n=this._customWidthVariables(t),r=e.title?ls(e.title):!1,i=e.field||``,a=e.sort===!0,o=this._sortField===i,s=this.columns.map((e,t)=>e.visible===!1?-1:t).filter(e=>e!==-1),c=t===s[0],l=t===s[s.length-1],u=o?` kuc-readonly-table-1-26-0__table__header__cell--sorted-${this._sortDirection}`:``;return j`
        <th
          class="kuc-readonly-table-1-26-0__table__header__cell${r?` kuc-readonly-table-1-26-0__table__header__cell--html`:``}${a?` kuc-readonly-table-1-26-0__table__header__cell--sort`:``}${u}${c?` kuc-readonly-table-1-26-0__table__header__cell--first-visible`:``}${l?` kuc-readonly-table-1-26-0__table__header__cell--last-visible`:``}"
          ?hidden="${e.visible===!1}"
          style="width: ${n}; min-width: ${n}; max-width: ${n};"
          @click="${a?()=>this._handleClickHeader(i):null}"
          tabindex="${a?0:-1}"
          aria-sort="${o?this._getSortDescription(this._sortDirection):`none`}"
          @keydown="${a?e=>this._handleKeyDownHeader(e,i):null}"
        >
          <div class="kuc-readonly-table-1-26-0__table__header__cell__wrapper">
            <div
              class="kuc-readonly-table-1-26-0__table__header__cell__wrapper__title${r?` kuc-readonly-table-1-26-0__table__header__cell__wrapper__title--html`:``}"
            >
              ${r?Io(e.title):e.title??``}
            </div>
            ${a&&o?j`<div
                    class="kuc-readonly-table-1-26-0__table__header__cell__wrapper__sort-icon"
                  >
                    ${this._getSortSvgIcon(this._sortDirection)}
                  </div>`:``}
          </div>
        </th>
      `}_getSortDescription(e){return e===`desc`?`descending`:e===`asc`?`ascending`:`none`}_getSortSvgIcon(e){return e===`desc`?M`<svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg" style="vertical-align: middle;">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M6.99996 0H5.99996V10.6011L1.4528 5.78021L0.725342 6.46637L6.57169 12.6647L12.1902 6.45887L11.4489 5.78771L6.99996 10.7017V0Z" fill="white"/>
        </svg>
        `:e===`asc`?M`<svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg" style="vertical-align: middle;">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M6.99996 13H5.99996V2.3989L1.4528 7.21979L0.725342 6.53363L6.57169 0.3353L12.1902 6.54113L11.4489 7.21229L6.99996 2.2983V13Z" fill="white"/>
      </svg>`:``}_getDataTemplate(e,t){return j`
        <tr
          class="kuc-readonly-table-1-26-0__table__body__row kuc-readonly-table-1-26-0__table__body__row-${t}"
        >
          ${this._columnOrder.map((t,n)=>{let r=this.columns[n].visible??!0,i=e[t];ls(i)&&(i=j`<div
                class="kuc-readonly-table-1-26-0__table__body__row__cell-data--html"
              >
                ${Io(i)}
              </div>`);let a=this._customWidthVariables(n);return j`<td class="kuc-readonly-table-1-26-0__table__body__row__cell-data" ?hidden="${!r}" style="width: ${a}; min-width: ${a}; max-width: ${a}">${i}</td>`})}
        </tr>
      `}_toggleDisplayPreviousButton(){return this._pagePosition>1}_toggleDisplayNextButton(){return this._pagePosition<this.data.length/this.rowsPerPage}_handleClickPreviousButton(e){this._pagePosition<2||(is(this.rowsPerPage)?--this._pagePosition:this.throwErrorAfterUpdateComplete(L.ROWS_PER_PAGE.INVALID))}_handleClickNextButton(e){is(this.rowsPerPage)?this._toggleDisplayNextButton()!==!1&&(this._pagePosition+=1):this.throwErrorAfterUpdateComplete(L.ROWS_PER_PAGE.INVALID)}}Oc([P({type:String,reflect:!0,attribute:`class`})],e.prototype,`className`,void 0),Oc([P({type:String,reflect:!0,attribute:`id`})],e.prototype,`id`,void 0),Oc([P({type:String})],e.prototype,`label`,void 0),Oc([P({type:Array})],e.prototype,`columns`,void 0),Oc([P({type:Array})],e.prototype,`data`,void 0),Oc([P({type:Boolean})],e.prototype,`pagination`,void 0),Oc([P({type:Number})],e.prototype,`rowsPerPage`,void 0),Oc([P({type:Boolean,attribute:`hidden`,reflect:!0,converter:B})],e.prototype,`visible`,void 0),Oc([F()],e.prototype,`_pagePosition`,void 0),Oc([F()],e.prototype,`_columnOrder`,void 0),Oc([F()],e.prototype,`_sortField`,void 0),Oc([F()],e.prototype,`_sortDirection`,void 0),window.customElements.define(`kuc-readonly-table-1-26-0`,e),U(Dc),kc=e})();var Ac=`
  kuc-spinner-1-26-0,
  kuc-spinner-1-26-0 *,
  kuc-spinner-1-26-0:lang(en),
  kuc-spinner-1-26-0:lang(en) * {
    font-family: sans-serif;
  }
  kuc-spinner-1-26-0:lang(es),
  kuc-spinner-1-26-0:lang(es) * {
    font-family: sans-serif;
  }
  kuc-spinner-1-26-0:lang(ja),
  kuc-spinner-1-26-0:lang(ja) * {
    font-family: "メイリオ", "Hiragino Kaku Gothic ProN", Meiryo,
      sans-serif;
  }
  kuc-spinner-1-26-0:lang(zh),
  kuc-spinner-1-26-0:lang(zh) * {
    font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,
      Hei, "Heiti SC", sans-serif;
  }
  kuc-spinner-1-26-0:lang(zh-TW),
  kuc-spinner-1-26-0:lang(zh-TW) * {
    font-family: "微軟正黑體","Microsoft JhengHei","新宋体",NSimSun,STHeiti,
      Hei,"Heiti SC",sans-serif;
  }
  kuc-spinner-1-26-0 {
    font-size: 14px;
    color: #333333;
  }
  .kuc-spinner-1-26-0__spinner {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10000;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .kuc-spinner-1-26-0__spinner__loader {
    width: var(--kuc-spinner-loader-width, 50px);
    height: var(--kuc-spinner-loader-height, 50px);
    animation: rotate-loading 1s steps(12) infinite;
    fill: var(--kuc-spinner-loader-color, #99ccff);
  }
  .kuc-spinner-1-26-0__spinner__text {
    margin: 10px 0;
    font-size: var(--kuc-spinner-text-font-size, 14px);
    color: var(--kuc-spinner-text-color, #333333);
  }
  .visually-hidden {
    position: absolute;
    white-space: nowrap;
    width: 1px;
    height: 1px;
    overflow: hidden;
    border: 0;
    padding: 0;
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    margin: -1px;
  }
  .kuc-spinner-1-26-0__mask {
    position: fixed;
    top: 0;
    right: 0;
    display: block;
    width: 100%;
    height: 100%;
    background-color: #666666;
    opacity: 0.6;
    z-index: 9999;
  }
  .kuc--has-spinner {
    overflow: hidden;
  }
  @keyframes rotate-loading {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`,jc=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},Mc;(()=>{if(Mc=window.customElements.get(`kuc-spinner-1-26-0`),Mc)return;class e extends V{constructor(e){super(),this.className=``,this.id=``,this.text=``,this.container=document.body,this._isOpened=!1;let t=G(e);Object.assign(this,t)}_getSpinnerSvgTemplate(){return M`
        <svg
          class="kuc-spinner-1-26-0__spinner__loader"
          viewBox="0 0 50 50"
          aria-hidden="true"
        >
          <circle r="4" cx="30.43" cy="4.72" opacity="0.3" />
          <circle r="4" cx="39.85" cy="10.15" opacity="0.3" />
          <circle r="4" cx="45.28" cy="19.56" opacity="0.3" />
          <circle r="4" cx="45.28" cy="30.43" opacity="0.3" />
          <circle r="4" cx="39.85" cy="39.85" opacity="0.3" />
          <circle r="4" cx="30.44" cy="45.28" opacity="0.4" />
          <circle r="4" cx="19.56" cy="45.28" opacity="0.5" />
          <circle r="4" cx="10.15" cy="39.85" opacity="0.6" />
          <circle r="4" cx="4.7" cy="30.44" opacity="0.7" />
          <circle r="4" cx="4.7" cy="19.56" opacity="0.8" />
          <circle r="4" cx="10.15" cy="10.15" opacity="0.9" />
          <circle r="4" cx="19.56" cy="4.72" opacity="1" />
        </svg>
      `}_isValidContainerElement(){return this.container instanceof HTMLElement}open(){this._isValidContainerElement()?(this.parentElement&&this.parentElement.classList.remove(`kuc--has-spinner`),this.container.appendChild(this),this.performUpdate(),this.container.classList.contains(`kuc--has-spinner`)||this.container.classList.add(`kuc--has-spinner`),this._isOpened=!0):(document.body.appendChild(this),requestAnimationFrame(()=>{document.body.removeChild(this)}),this.performUpdate())}close(){this.parentElement&&this.parentElement.classList.remove(`kuc--has-spinner`),this._isOpened=!1,this.parentNode&&this.parentNode.removeChild(this)}shouldUpdate(e){if(e.has(`container`)){if(this.container===null||this.container===void 0)return this._isOpened&&this.close(),!1;let e=this._isValidContainerElement(),t=!e||!document.contains(this.container);if(this._isOpened&&t&&this.close(),!e)return this.throwErrorAfterUpdateComplete(L.CONTAINER.INVALID),!1}return!0}render(){return j`
        <div class="kuc-spinner-1-26-0__spinner" aria-live="assertive" role="alert">
          ${this._getSpinnerSvgTemplate()}
          <div
            class="kuc-spinner-1-26-0__spinner__text${this.text?``:` visually-hidden`}"
          >
            ${this.text?this.text:`now loading…`}
          </div>
        </div>
        <div class="kuc-spinner-1-26-0__mask"></div>
      `}}jc([P({type:String,reflect:!0,attribute:`class`})],e.prototype,`className`,void 0),jc([P({type:String,reflect:!0,attribute:`id`})],e.prototype,`id`,void 0),jc([P({type:String})],e.prototype,`text`,void 0),jc([P()],e.prototype,`container`,void 0),window.customElements.define(`kuc-spinner-1-26-0`,e),U(Ac),Mc=e})();var Nc=Mc,Pc=`
  kuc-switch-1-26-0,
  kuc-switch-1-26-0 *,
  kuc-switch-1-26-0:lang(en),
  kuc-switch-1-26-0:lang(en) * {
    font-family: sans-serif;
  }
  kuc-switch-1-26-0:lang(es),
  kuc-switch-1-26-0:lang(es) * {
    font-family: sans-serif;
  }
  kuc-switch-1-26-0:lang(ja),
  kuc-switch-1-26-0:lang(ja) * {
    font-family: "メイリオ", "Hiragino Kaku Gothic ProN", Meiryo, sans-serif;
  }
  kuc-switch-1-26-0:lang(zh),
  kuc-switch-1-26-0:lang(zh) * {
    font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti, Hei, "Heiti SC", sans-serif;
  }
  kuc-switch-1-26-0:lang(zh-TW),
  kuc-switch-1-26-0:lang(zh-TW) * {
    font-family: "微軟正黑體", "Microsoft JhengHei", "新宋体", NSimSun, STHeiti, Hei, "Heiti SC", sans-serif;
  }

  kuc-switch-1-26-0 {
    display: inline-table;
    font-size: 14px;
    color: #333333;
    vertical-align: top;
    line-height: 1.5;
  }

  kuc-switch-1-26-0[hidden] {
    display: none;
  }

  .kuc-switch-1-26-0__group {
    border: none;
    padding: 0px;
    height: auto;
    display: flex;
    margin: 0px;
    width: 100%;
    align-items: center;
    gap: 6px;
  }

  .kuc-switch-1-26-0__group--top {
    flex-direction: column;
    align-items: flex-start;
    gap: 4px;
  }

  .kuc-switch-1-26-0__group--bottom {
    flex-direction: column-reverse;
    align-items: flex-start;
    gap: 4px;
  }

  .kuc-switch-1-26-0__group--left {
    flex-direction: row;
  }

  .kuc-switch-1-26-0__group--right {
    flex-direction: row-reverse;
  }

  .kuc-switch-1-26-0__group__label {
    display: block;
    white-space: nowrap;
    cursor: pointer;
  }

  .kuc-switch-1-26-0__group__label[hidden] {
    display: none;
  }

  .kuc-switch-1-26-0__group__label--disabled {
    cursor: not-allowed;
  }

  .kuc-switch-1-26-0__group--top .kuc-switch-1-26-0__group__label,
  .kuc-switch-1-26-0__group--bottom .kuc-switch-1-26-0__group__label {
    padding-left: 3px;
  }

  .kuc-switch-1-26-0__group__label .kuc-base-label-1-26-0__text {
    font-size: 14px;
  }

  .kuc-switch-1-26-0__group__switch {
    position: relative;
    display: flex;
    align-items: center;
    flex-shrink: 0;
  }

  .kuc-switch-1-26-0__group__switch__input {
    opacity: 0;
    width: 0px;
    height: 0px;
    position: absolute;
  }

  .kuc-switch-1-26-0__group__switch__handle {
    position: absolute;
    width: calc(var(--kuc-switch-track-height, 28px) - 2 * 4px);
    height: calc(var(--kuc-switch-track-height, 28px) - 2 * 4px);
    left: 4px;
    background-color: #ffffff;
    transition: left 0.2s ease-in-out;
    border-radius: 50%;
    cursor: pointer;
  }

  .kuc-switch-1-26-0__group__switch__input:checked ~ .kuc-switch-1-26-0__group__switch__handle {
    left: calc(100% - var(--kuc-switch-track-height, 28px) + 4px);
  }

  .kuc-switch-1-26-0__group__switch__track {
    position: relative;
    transition: background-color 0.2s ease-in-out, padding-left 0.2s ease-in-out, padding-right 0.2s ease-in-out;
    border-radius: calc(var(--kuc-switch-track-height, 28px) / 2);
    display: block;
    cursor: pointer;
    border: none;
    overflow: hidden;
    background-color: #b5b5b5;
    padding-left: var(--kuc-switch-track-height, 28px);
    padding-right: 10px;
    box-sizing: border-box;
    min-width: 54px;
  }

  .kuc-switch-1-26-0__group__switch__input:checked ~ .kuc-switch-1-26-0__group__switch__track {
    background-color: #3498db;
    padding-left: 10px;
    padding-right: var(--kuc-switch-track-height, 28px);
  }

  .kuc-switch-1-26-0__group__switch__input:focus-visible ~ .kuc-switch-1-26-0__group__switch__track {
    outline: 1px solid #3498db;
    outline-offset: 1px;
  }

  .kuc-switch-1-26-0__group__switch__input:disabled ~ .kuc-switch-1-26-0__group__switch__track,
  .kuc-switch-1-26-0__group__switch__input:disabled ~ .kuc-switch-1-26-0__group__switch__handle {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .kuc-switch-1-26-0__group__switch__track__text {
    font-size: 14px;
    color: #ffffff;
    transition: margin-left 0.2s ease-in-out, margin-right 0.2s ease-in-out;
    pointer-events: none;
    white-space: nowrap;
    text-align: center;
    display: block;
    height: var(--kuc-switch-track-height, 28px);
    line-height: var(--kuc-switch-track-height, 28px);
  }

  .kuc-switch-1-26-0__group__switch__track__text--unchecked {
    margin-top: calc(-1 * var(--kuc-switch-track-height, 28px));
    margin-left: 0;
    margin-right: 0;
  }

  .kuc-switch-1-26-0__group__switch__track__text--checked {
    margin-left: calc(-100% - var(--kuc-switch-track-height, 28px));
    margin-right: calc(100% + var(--kuc-switch-track-height, 28px));
  }

  .kuc-switch-1-26-0__group__switch__input:checked ~ .kuc-switch-1-26-0__group__switch__track .kuc-switch-1-26-0__group__switch__track__text--unchecked {
    margin-left: calc(100% + var(--kuc-switch-track-height, 28px));
    margin-right: calc(-100% - var(--kuc-switch-track-height, 28px));
  }

  .kuc-switch-1-26-0__group__switch__input:checked ~ .kuc-switch-1-26-0__group__switch__track .kuc-switch-1-26-0__group__switch__track__text--checked {
    margin-left: 0;
    margin-right: 0;
  }
`,Fc=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},Ic;(()=>{if(Ic=window.customElements.get(`kuc-switch-1-26-0`),Ic)return;class e extends V{constructor(e){super(),this.checkedText=``,this.className=``,this.id=``,this.label=``,this.labelPlacement=`left`,this.unCheckedText=``,this.checked=!1,this.disabled=!1,this.visible=!0,this._validLabelPlacement=[`top`,`bottom`,`left`,`right`],this._GUID=W();let t=G(e);Object.assign(this,t)}render(){return j`
        <div
          class="kuc-switch-1-26-0__group kuc-switch-1-26-0__group--${this._getLabelPlacement()}"
        >
          <label
            class="kuc-switch-1-26-0__group__label${this.disabled?` kuc-switch-1-26-0__group__label--disabled`:``}"
            ?hidden="${!this.label}"
            for="${this._GUID}-input"
          >
            <kuc-base-label-1-26-0
              .text="${this.label}"
              .guid="${this._GUID}"
            ></kuc-base-label-1-26-0>
          </label>
          <div class="kuc-switch-1-26-0__group__switch">
            <input
              class="kuc-switch-1-26-0__group__switch__input"
              id="${this._GUID}-input"
              type="checkbox"
              role="switch"
              aria-labelledby="${this._GUID}-group"
              aria-describedby="${this._GUID}-text-${this.checked?`checked`:`unchecked`}"
              .checked="${this.checked}"
              ?disabled="${this.disabled}"
              @change="${this._handleChangeInput}"
            />
            <label
              class="kuc-switch-1-26-0__group__switch__track"
              for="${this._GUID}-input"
            >
              <span
                id="${this._GUID}-text-checked"
                class="kuc-switch-1-26-0__group__switch__track__text kuc-switch-1-26-0__group__switch__track__text--checked"
                >${this.checkedText}</span
              >
              <span
                id="${this._GUID}-text-unchecked"
                class="kuc-switch-1-26-0__group__switch__track__text kuc-switch-1-26-0__group__switch__track__text--unchecked"
                >${this.unCheckedText}</span
              >
            </label>
            <label
              class="kuc-switch-1-26-0__group__switch__handle"
              for="${this._GUID}-input"
            ></label>
          </div>
        </div>
      `}_handleChangeInput(e){e.stopPropagation();let t=e.target;this.checked=t.checked;let n={checked:this.checked};H(this,`change`,n)}_getLabelPlacement(){return this._validLabelPlacement.includes(this.labelPlacement)?this.labelPlacement:`left`}}Fc([P({type:String})],e.prototype,`checkedText`,void 0),Fc([P({type:String,reflect:!0,attribute:`class`})],e.prototype,`className`,void 0),Fc([P({type:String,reflect:!0,attribute:`id`})],e.prototype,`id`,void 0),Fc([P({type:String})],e.prototype,`label`,void 0),Fc([P({type:String})],e.prototype,`labelPlacement`,void 0),Fc([P({type:String})],e.prototype,`unCheckedText`,void 0),Fc([P({type:Boolean})],e.prototype,`checked`,void 0),Fc([P({type:Boolean})],e.prototype,`disabled`,void 0),Fc([P({type:Boolean,attribute:`hidden`,reflect:!0,converter:B})],e.prototype,`visible`,void 0),window.customElements.define(`kuc-switch-1-26-0`,e),U(Pc),Ic=e})();var Lc=`
  kuc-table-1-26-0,
  kuc-table-1-26-0 *,
  kuc-table-1-26-0:lang(en),
  kuc-table-1-26-0:lang(en) * {
    font-family: sans-serif;
  }
  kuc-table-1-26-0:lang(es),
  kuc-table-1-26-0:lang(es) * {
    font-family: sans-serif;
  }
  kuc-table-1-26-0:lang(ja),
  kuc-table-1-26-0:lang(ja) * {
    font-family: "メイリオ", "Hiragino Kaku Gothic ProN", Meiryo,
      sans-serif;
  }
  kuc-table-1-26-0:lang(zh),
  kuc-table-1-26-0:lang(zh) * {
    font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,
      Hei, "Heiti SC", sans-serif;
  }
  kuc-table-1-26-0:lang(zh-TW),
  kuc-table-1-26-0:lang(zh-TW) * {
    font-family: "微軟正黑體","Microsoft JhengHei","新宋体",NSimSun,STHeiti,
      Hei,"Heiti SC",sans-serif;
  }
  kuc-table-1-26-0 {
    font-size: 14px;
    color: #333333;
    display: block;
  }
  kuc-table-1-26-0[hidden] {
    display: none;
  }
  kuc-table-1-26-0 kuc-* {
    line-height: 1;
  }
  .kuc-table-1-26-0__table {
    border-collapse: separate;
    border-spacing: 0;
  }
  .kuc-table-1-26-0__table__header {
    border-width: 0px 1px;
    border-color: var(--kuc-table-header-background-color, #3498db);
    border-style: solid;
    border-right: 0;
  }
  .kuc-table-1-26-0__table__header[hidden] {
    display: none;
  }
  .kuc-table-1-26-0__table__header__cell {
    box-sizing: border-box;
    font-size: var(--kuc-table-header-font-size, 12px);
    font-weight: 400;
    background-color: var(--kuc-table-header-background-color, #3498db);
    color: var(--kuc-table-header-color, #ffffff);
    height: var(--kuc-table-header-height, 40px);
    padding: 4px 8px;
    text-align: left;
    white-space: normal;
  }
  .kuc-table-1-26-0__table__header__cell-title {
    overflow-wrap: break-word;
    display: flex;
    align-items: center;
  }
  .kuc-table-1-26-0__table__header__cell[hidden] {
    display: none;
  }
  .kuc-table-1-26-0__table__header__cell .kuc-base-label-1-26-0__required-icon {
    font-size: var(--kuc-table-header-font-size, 20px);
    align-self: flex-start;
  }
  .kuc-table-1-26-0__table__header__cell__action--right {
    box-shadow: -2px 0 4px 0 rgba(0, 0, 0, 8%);
    position: sticky;
    right: var(--kuc-table-action-button-right, 0px);
  }
  .kuc-table-1-26-0__table__header__cell__action--left {
    box-shadow: 2px 0 4px 0 rgba(0, 0, 0, 8%);
    position: sticky;
    left: var(--kuc-table-action-button-left, 0px);
    z-index: 1;
  }
  .kuc-table-1-26-0__table__body__row__cell-data {
    box-sizing: border-box;
    overflow-wrap: break-word;
    white-space: normal;
    border-color: #e3e7e8;
    border-style: solid;
    border-width: 0 1px 1px;
    padding: 8px 8px;
    vertical-align: top;
  }
  .kuc-table-1-26-0__table__body--no-header>.kuc-table-1-26-0__table__body__row:first-child>.kuc-table-1-26-0__table__body__row__cell-data {
    border-top-width: 1px;
  }
  .kuc-table-1-26-0__table__body__row__cell-data:not(.kuc-table-1-26-0__table__body__row__cell-data[hidden])~.kuc-table-1-26-0__table__body__row__cell-data {
    border-left-width: 0px;
  }
  .kuc-table-1-26-0__table__body__row__cell-data[hidden] {
    display: none;
  }
  .kuc-table-1-26-0__table__body__row__action {
    white-space: nowrap;
    background-color: var(--kuc-table-action-button-background-color, #f5f5f5);
    vertical-align: middle;
    position: sticky;
    border-color: #e3e7e8;
    border-style: solid;
    border-width: 0 0 1px;
  }
  .kuc-table-1-26-0__table__body--no-header>.kuc-table-1-26-0__table__body__row:first-child>.kuc-table-1-26-0__table__body__row__action {
    border-top-width: 1px;
  }
  .kuc-table-1-26-0__table__body__row__action--right {
    box-shadow: -2px 0 4px 0 rgba(0, 0, 0, 8%);
    right: var(--kuc-table-action-button-right, 0px);
    border-right-width: 1px;
  }
  .kuc-table-1-26-0__table__body__row__action--left {
    box-shadow: 2px 0 4px 0 rgba(0, 0, 0, 8%);
    left: var(--kuc-table-action-button-left, 0px);
    border-left-width: 1px;
    z-index: 1;
  }
  .kuc-table-1-26-0__table__body__row__action button {
    display: inline-block;
    align-items: center;
    width: 24px;
    height: 24px;
    background: transparent;
    border: 1px solid transparent;
    padding: 2px;
    cursor: pointer;
  }
  .kuc-table-1-26-0__table__body__row__action button[hidden] {
    display: none;
  }
  .kuc-table-1-26-0__table__body__row__action-add {
    margin-left: 8px;
    margin-right: 8px;
  }
  .kuc-table-1-26-0__table__body__row__action-remove {
    margin-left: 4px;
    margin-right: 8px;
  }
  .kuc-table-1-26-0__table__body__row__action-add:focus,
  .kuc-table-1-26-0__table__body__row__action-remove:focus {
    border: 1px solid #3498db;
    outline: none;
  }
  .kuc-table-1-26-0__table__body__row__action-remove:hover path {
    fill: #e74c3c;
  }
  .kuc-table-1-26-0__table__body__row__action[hidden] {
    display: none;
  }
  .kuc-table-1-26-0__table caption {
    text-align: left;
    margin-bottom: 6px;
    overflow-wrap: anywhere;
    white-space: normal;
  }
  .kuc-table-1-26-0__table .kuc-table-1-26-0__table__label--no-column {
    overflow-wrap: break-word;
  }
`,Rc=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},zc=`kuc-table-1-26-0__table__body__row__cell-data`,Bc=`kuc-table-1-26-0__table__body__row`,Vc=`kuc-table-1-26-0__table__body__row__action`,Hc=`kuc-table-1-26-0__table__body__row__action-add`,Uc=`kuc-table-1-26-0__table__body__row__action-remove`,Wc=e=>`var(--kuc-table-header-${e}-width, var(--kuc-table-header-width, auto))`,Gc=`M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16ZM12.0355 8.49997V7.49997H8.50008V3.96454H7.50008V7.49997H3.96443V8.49997H7.50008V12.0356H8.50008V8.49997H12.0355Z`,Kc=`#3498db`,qc=`M16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8ZM12.0355 7.49997V8.49997L3.96443 8.49997V7.49997H12.0355Z`,Jc=`#b5b5b5`,Yc;(()=>{if(Yc=window.customElements.get(`kuc-table-1-26-0`),Yc)return;class e extends V{constructor(e){if(super(),this.actionButtonPosition=`right`,this.className=``,this.id=``,this.label=``,this.columns=[],this.data=[],this.actionButton=!0,this.headerVisible=!0,this.visible=!0,this._actionButton={add:!0,remove:!0},this._actionButtonPosition=`right`,!e)return;let t=G(e);Object.assign(this,t)}shouldUpdate(e){if(e.has(`data`)||e.has(`columns`)){let e=this._getErrorValidateColumnsAndData();if(e)return this.throwErrorAfterUpdateComplete(e),!1}return!0}willUpdate(e){e.has(`actionButtonPosition`)&&(this._actionButtonPosition=this.actionButtonPosition===`left`?`left`:`right`),e.has(`actionButton`)&&(this._actionButton=this._getActionButtonSettings()),this._tBody&&(this._tBody.innerHTML=``)}render(){return!this.columns||this.columns.length<1?j`<table class="kuc-table-1-26-0__table">
            <caption
              class="kuc-table-1-26-0__table__label kuc-table-1-26-0__table__label--no-column"
              ?hidden="${!this.label}"
            >
              ${this.label}
            </caption>
          </table>`:j`
            <table class="kuc-table-1-26-0__table">
              <caption class="kuc-table-1-26-0__table__label" ?hidden="${!this.label}">
                ${this.label}
              </caption>
              <thead
                class="kuc-table-1-26-0__table__header"
                ?hidden="${!this.headerVisible}"
              >
                ${this._getTableHeaderTemplate()}
              </thead>
              <tbody
                class="kuc-table-1-26-0__table__body${this.headerVisible?``:` kuc-table-1-26-0__table__body--no-header`}"
              ></tbody>
            </table>
          `}updated(e){if(this.columns.length!==0)for(let e=0;e<this.data.length;e++)this._addRowToTable(e,this.data[e])}_getTableHeaderTemplate(){return j`
        <tr>
          ${this._actionButtonPosition===`left`?this._getActionButtonHeaderTemplate():``}
          ${this.columns.map((e,t)=>this._getColumnHeaderTemplate(e,t))}
          ${this._actionButtonPosition===`right`?this._getActionButtonHeaderTemplate():``}
        </tr>
      `}_getActionButtonHeaderTemplate(){return!this.data||this.data.length<1||!this._actionButton.add&&!this._actionButton.remove?j``:j`
        <th
          class="kuc-table-1-26-0__table__header__cell kuc-table-1-26-0__table__header__cell__action${this._actionButtonPosition===`left`?`--left`:`--right`}"
        ></th>
      `}_getColumnHeaderTemplate(e,t){let n=Wc(t);return j`
        <th
          class="kuc-table-1-26-0__table__header__cell"
          ?hidden="${e.visible===!1}"
          style="width: ${n}; min-width: ${n}; max-width: ${n}"
        >
          <div class="kuc-table-1-26-0__table__header__cell-title">
            ${e.title&&ls(e.title)?Io(e.title):e.title}<!--
        --><span
              class="kuc-base-label-1-26-0__required-icon"
              ?hidden="${!e.requiredIcon}"
              >*</span
            >
          </div>
        </th>
      `}_getActionsCellWhenRemoveRow(e){let t=null,n=e;for(;this.data.length>1;){let e=this._table.rows[n];if(!e)n--;else{t=e.cells[this._actionButtonPosition===`left`?0:this.columns.length];break}}return t}_getDefaultDataRow(e){let t={};for(let n in e)if(Object.prototype.hasOwnProperty.call(e,n)){if(Array.isArray(e[n])){t[n]=[];continue}if(typeof e[n]==`object`&&e[n]!==null){t[n]={};continue}t[n]=``}return t}_addRowToTable(e,t){let n=this._tBody.insertRow(e);n.classList.add(Bc),(this._actionButton.add||this._actionButton.remove)&&this._actionButtonPosition===`left`&&this._addActionsCellToNewRow(n);for(let r=0;r<this.columns.length;r++){let i=Wc(r),a=n.insertCell(r+((this._actionButton.add||this._actionButton.remove)&&this._actionButtonPosition===`left`?1:0)),o=this.columns[r];a.classList.add(zc),a.style.width=i,a.style.maxWidth=i,a.style.minWidth=i,a.addEventListener(`change`,e=>{this._handleChangeCell(e,o.field)}),a.hidden=!(o.visible??!0);let s=o.render?o.render(t[o.field],t,e):t[o.field];s&&s.nodeType?a.appendChild(s):a.innerText=s||``}(this._actionButton.add||this._actionButton.remove)&&this._actionButtonPosition!==`left`&&this._addActionsCellToNewRow(n)}_handleChangeCell(e,t){e.stopPropagation();let n=this._deepCloneObject(this.data),r=e.currentTarget.parentElement.rowIndex-1,i=this.data[r];if(t in i){let n=e.target.value;`detail`in e&&(n=e.detail.value),i[t]=n}let a={type:`change-cell`,rowIndex:r,data:this._deepCloneObject(this.data),oldData:n,field:t};this._dispatchChangeEvent(a)}_handleAddRow(e){let t=this._deepCloneObject(this.data),n=this._getDefaultDataRow(this.data[0]);this._addRowToTable(e,n),this.data.splice(e,0,n);let r={type:`add-row`,rowIndex:e,data:this._deepCloneObject(this.data),oldData:t};this._dispatchChangeEvent(r),this._toggleRemoveRowButton()}_handleRemoveRow(e){if(this.data.length===1)return;let t=e-1,n=this._deepCloneObject(this.data);this._table.deleteRow(e),this.data.splice(t,1);let r={type:`remove-row`,rowIndex:t,data:this._deepCloneObject(this.data),oldData:n};this._dispatchChangeEvent(r),this._toggleRemoveRowButton(),this._focusActionsButtonWhenRemoveRow(e)}_focusActionsButtonWhenRemoveRow(e){let t=this._getActionsCellWhenRemoveRow(e);t?this._focusRemoveRowButton(t):this._focusFirstAddRowButton()}_focusRemoveRowButton(e){e.querySelector(`.${Uc}`).focus()}_focusFirstAddRowButton(){this._table.rows[1].cells[this._actionButtonPosition===`left`?0:this.columns.length].querySelector(`.${Hc}`)?.focus()}_toggleRemoveRowButton(){let e=this._actionButtonPosition===`left`?this._tBody.rows[0].firstChild:this._tBody.rows[0].lastChild,t=e.lastChild;if(this.data.length===1)t.style.display=`none`,this._actionButton.add||(e.style.display=`none`,this._hideActionHeaderCell());else if(this.data.length===2){let n=(this._actionButtonPosition===`left`?this._tBody.rows[1].firstChild:this._tBody.rows[1].lastChild).lastChild;t.style.display=n.style.display=`inline-block`,e.style.removeProperty(`display`)}}_getSvgDOM(e,t){let n=document.createElementNS(`http://www.w3.org/2000/svg`,`svg`);n.setAttribute(`fill`,`none`),n.setAttribute(`width`,`18`),n.setAttribute(`height`,`18`),n.setAttribute(`viewBox`,`0 0 16 16`),n.setAttribute(`aria-hidden`,`true`);let r=document.createElementNS(`http://www.w3.org/2000/svg`,`path`);return r.setAttribute(`d`,t),r.setAttribute(`fill-rule`,`evenodd`),r.setAttribute(`clip-rule`,`evenodd`),r.setAttribute(`fill`,e),n.appendChild(r),n}_addActionsCellToNewRow(e){if(!this._actionButton.add&&!this._actionButton.remove)return;let t=e.insertCell(this._actionButtonPosition===`left`?0:this.columns.length);if(t.classList.add(Vc),this._actionButtonPosition===`left`?t.classList.add(`kuc-table-1-26-0__table__body__row__action--left`):t.classList.add(`kuc-table-1-26-0__table__body__row__action--right`),this._actionButton.add){let n=this._getActionButtonDOM(`add`,e);t.appendChild(n)}if(this._actionButton.remove){let n=this._getActionButtonDOM(`remove`,e);t.appendChild(n),this.data.length===1&&(n.style.display=`none`)}!this._actionButton.add&&this.data.length===1?(this._hideActionHeaderCell(),t.style.display=`none`):(this._showActionHeaderCell(),t.style.removeProperty(`display`))}_getActionButtonDOM(e,t){let n=Uc,r=`Delete this row`,i=e===`add`;i&&(n=Hc,r=`Add row`);let a=i?Kc:Jc,o=i?Gc:qc,s=this._getSvgDOM(a,o),c=document.createElement(`button`);return c.classList.add(n),c.setAttribute(`title`,r),c.type=`button`,c.appendChild(s),c.addEventListener(`click`,()=>{let e=this._getErrorValidateColumnsAndData();e?this.throwErrorAfterUpdateComplete(e):i?this._handleAddRow(t.rowIndex):this._handleRemoveRow(t.rowIndex)}),c}_getActionButtonSettings(){let e={add:!0,remove:!0};return this.actionButton?(typeof this.actionButton==`object`&&(e.add=!Object.prototype.hasOwnProperty.call(this.actionButton,`add`)||!!this.actionButton.add,e.remove=!Object.prototype.hasOwnProperty.call(this.actionButton,`remove`)||!!this.actionButton.remove),e):(e.add=e.remove=!1,e)}_getErrorValidateColumnsAndData(){return this._getErrorMessageWhenValidateColumns()||(K(this.data)?``:L.DATA.IS_NOT_ARRAY)}_getErrorMessageWhenValidateColumns(){return K(this.columns)?as(this.columns)?os(this.columns)?L.COLUMNS.FIELD_UNIQUE:``:L.COLUMNS.FIELD_REQUIRED:L.COLUMNS.IS_NOT_ARRAY}_deepCloneObject(e){return JSON.parse(JSON.stringify(e))}_dispatchChangeEvent(e){let t=e;H(this,`change`,t)}_hideActionHeaderCell(){this._actionHeaderCellRight&&(this._actionHeaderCellRight.hidden=!0),this._actionHeaderCellLeft&&(this._actionHeaderCellLeft.hidden=!0)}_showActionHeaderCell(){this._actionHeaderCellRight&&(this._actionHeaderCellRight.hidden=!1),this._actionHeaderCellLeft&&(this._actionHeaderCellLeft.hidden=!1)}}Rc([P({type:String})],e.prototype,`actionButtonPosition`,void 0),Rc([P({type:String,reflect:!0,attribute:`class`})],e.prototype,`className`,void 0),Rc([P({type:String,reflect:!0,attribute:`id`})],e.prototype,`id`,void 0),Rc([P({type:String})],e.prototype,`label`,void 0),Rc([P({type:Array})],e.prototype,`columns`,void 0),Rc([P({type:Array})],e.prototype,`data`,void 0),Rc([P()],e.prototype,`actionButton`,void 0),Rc([P({type:Boolean})],e.prototype,`headerVisible`,void 0),Rc([P({type:Boolean,attribute:`hidden`,reflect:!0,converter:B})],e.prototype,`visible`,void 0),Rc([I(`.kuc-table-1-26-0__table`)],e.prototype,`_table`,void 0),Rc([I(`.kuc-table-1-26-0__table__body`)],e.prototype,`_tBody`,void 0),Rc([I(`.kuc-table-1-26-0__table__header__cell__action--right`)],e.prototype,`_actionHeaderCellRight`,void 0),Rc([I(`.kuc-table-1-26-0__table__header__cell__action--left`)],e.prototype,`_actionHeaderCellLeft`,void 0),window.customElements.define(`kuc-table-1-26-0`,e),U(Lc),Yc=e})();var Xc=`
  kuc-tabs-1-26-0,
  kuc-tabs-1-26-0 *,
  kuc-tabs-1-26-0:lang(en),
  kuc-tabs-1-26-0:lang(en) * {
    font-family: sans-serif;
  }
  kuc-tabs-1-26-0:lang(es),
  kuc-tabs-1-26-0:lang(es) * {
    font-family: sans-serif;
  }
  kuc-tabs-1-26-0:lang(ja),
  kuc-tabs-1-26-0:lang(ja) * {
    font-family: "メイリオ", "Hiragino Kaku Gothic ProN", Meiryo,
      sans-serif;
  }
  kuc-tabs-1-26-0:lang(zh),
  kuc-tabs-1-26-0:lang(zh) * {
    font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,
      Hei, "Heiti SC", sans-serif;
  }
  kuc-tabs-1-26-0:lang(zh-TW),
  kuc-tabs-1-26-0:lang(zh-TW) * {
    font-family: "微軟正黑體","Microsoft JhengHei","新宋体",NSimSun,STHeiti,
      Hei,"Heiti SC",sans-serif;
  }
  kuc-tabs-1-26-0 {
    display: inline-block;
  }
  kuc-tabs-1-26-0[hidden] {
    display: none;
  }
  .kuc-tabs-1-26-0__group__tabs-container {
    display: flex;
    padding: 0;
    align-items: center;
    padding-top: 16px;
  }
  .kuc-tabs-1-26-0__group__tabs-container__tab-pre-button {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
    margin: 0;
    background-color: #d4d7d7;
    border: none;
    cursor: pointer;
    height: var(--kuc-tabs-tab-height, 48px);
    width: 24px;
    min-width: 24px;
    margin-right: 1px;
  }
  .kuc-tabs-1-26-0__group__tabs-container__tab-pre-button[hidden] {
    visibility: hidden;
  }
  .kuc-tabs-1-26-0__group__tabs-container__tab-pre-button[disabled] {
    cursor: not-allowed;
  }
  .kuc-tabs-1-26-0__group__tabs-container__tab-next-button {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
    margin: 0;
    background-color: #d4d7d7;
    border: none;
    cursor: pointer;
    height: var(--kuc-tabs-tab-height, 48px);
    width: 24px;
    min-width: 24px;
    margin-left: 1px;
  }
  .kuc-tabs-1-26-0__group__tabs-container__tab-next-button[hidden] {
    visibility: hidden;
  }
  .kuc-tabs-1-26-0__group__tabs-container__tab-next-button[disabled] {
    cursor: not-allowed;
  }
  .kuc-tabs-1-26-0__group__tabs-container__tab-list-container {
    display: flex;
    flex-direction: row;
    padding: 0;
    overflow-y: hidden;
  }
  .kuc-tabs-1-26-0__group__tabs-container__tab-list-container__tab-list {
    display: flex;
    flex: 1;
    margin: 0;
    padding: 0px;
    list-style: none;
  }
  .kuc-tabs-1-26-0__group__tabs-container__tab-list-container {
    scrollbar-width: none; /* Firefox */
  }
  .kuc-tabs-1-26-0__group__tabs-container__tab-list-container::-webkit-scrollbar {
    width: 0; /* Safari and Chrome */
    display: none
  }
  .kuc-tabs-1-26-0__group__tabs-container__tab-list-container__tab-list__tab {
    min-height: var(--kuc-tabs-tab-height, 48px);
    height: var(--kuc-tabs-tab-height, 48px);
    white-space: normal;
  }
  .kuc-tabs-1-26-0__group__tabs-container__tab-list-container__tab-list__tab__button:disabled {
    color: GrayText;
    background-color: #d4d7d7;
    cursor: not-allowed;
  }
  .kuc-tabs-1-26-0__group__tabs-container__tab-list-container__tab-list__tab__button {
    height: 100%;
    margin: 0;
    padding: 0 24px;
    display: grid;
    align-items: center;
    align-content: center;
    font-size: var(--kuc-tabs-tab-font-size, 14px);
    background-color: var(--kuc-tabs-tab-background-color, #d4d7d7);
    color: var(--kuc-tabs-tab-color, #333333);
    border-style: none;
    border-top: 1px solid #c7cbcb;
    border-left: 1px solid #c7cbcb;
    box-shadow: 1px 0 3px #c7cbcb inset;
    box-sizing: border-box;
    cursor: pointer;
    line-height: 1.5;
    width: var(--kuc-tabs-tab-width, auto);
    min-width: var(--kuc-tabs-tab-width, 200px);
    word-wrap: break-word;
  }
  .kuc-tabs-1-26-0__group__tabs-container__tab-list-container__tab-list__tab__button[hidden] {
    display: none;
  }
  .kuc-tabs-1-26-0__group__tabs-container__tab-list-container__tab-list__tab__button:last-of-type {
    border-right: 1px solid #c7cbcb;
  }

  .kuc-tabs-1-26-0__group__tabs-container__tab-list-container__tab-list__tab__button:focus {
    outline: none;
    border: 1px solid #3498db;
  }
  .kuc-tabs-1-26-0__group__tabs-container__tab-list-container__tab-list__tab__button--click:focus{
    border: none;
    border-top: 1px solid #c7cbcb;
    border-left: 1px solid #c7cbcb;
    border-right: 1px solid #c7cbcb;
  }
  .kuc-tabs-1-26-0__group__tabs-container__tab-list-container__tab-list__tab__button[aria-selected="true"] {
    background-color: var(--kuc-tabs-tab-background-color-selected, #ffffff);
    color: var(--kuc-tabs-tab-color-selected, #333333);
    box-shadow: none;
  }
  .kuc-tabs-1-26-0__group__tab-panel {
    display:block;
    padding: 0;
    border-top: 0;
  }
  .kuc-tabs-1-26-0__group__tab-panel[border-visible] {
    box-shadow: 0 0 8px 2px rgb(0 0 0 / 10%);
  }
  .kuc-tabs-1-26-0__group__tab-panel__content[hidden]{
    display:none;
  }
`,Zc=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},Qc;(()=>{if(Qc=window.customElements.get(`kuc-tabs-1-26-0`),Qc)return;class e extends V{constructor(e){super(),this.className=``,this.id=``,this.value=``,this.borderVisible=!0,this.scrollButtons=!1,this.visible=!0,this.items=[],this._selectedValue=``,this._resizeObserver=null,this._isClick=!1,this._isAtStart=!0,this._isAtEnd=!1,this._GUID=W();let t=G(e);Object.assign(this,t),this._handleResize=this._handleResize.bind(this)}shouldUpdate(e){if(e.has(`items`)){if(!K(this.items))return this.throwErrorAfterUpdateComplete(L.ITEMS.IS_NOT_ARRAY),!1;for(let e=0;e<this.items.length;e++)if(this.items[e].value===void 0)return this.throwErrorAfterUpdateComplete(L.ITEMS.IS_NOT_SPECIFIED),!1;if(!rs(this.items.map(e=>e.value)))return this.throwErrorAfterUpdateComplete(L.ITEMS.IS_DUPLICATED),!1}return e.has(`value`)&&!ts(this.value)?(this.throwErrorAfterUpdateComplete(L.VALUE.IS_NOT_STRING),!1):!0}willUpdate(e){let t=this._getMatchedTabIndex();t===-1&&(t=this._getFirstVisibleTabIndex()),t>-1&&(this._selectedValue=this.items[t].value)}render(){return j`
        <div class="kuc-tabs-1-26-0__group">
          <div class="kuc-tabs-1-26-0__group__tabs-container">
            <button
              class="kuc-tabs-1-26-0__group__tabs-container__tab-pre-button"
              type="button"
              @mousedown="${this._handleMouseDownPrevButton}"
              ?hidden="${!this.scrollButtons}"
              ?disabled="${this._isAtStart}"
              aria-hidden="true"
              tabindex="-1"
            >
              ${this._getPrevButtonSvgTemplate()}
            </button>
            <div
              class="kuc-tabs-1-26-0__group__tabs-container__tab-list-container"
              @scroll="${this._handleScroll}"
            >
              <ul
                class="kuc-tabs-1-26-0__group__tabs-container__tab-list-container__tab-list"
                role="tablist"
                @blur="${this._handleBlur}"
              >
                ${this.items.map((e,t)=>this._getTabTemplate(e,t))}
              </ul>
            </div>
            <button
              class="kuc-tabs-1-26-0__group__tabs-container__tab-next-button"
              type="button"
              @mousedown="${this._handleMouseDownNextButton}"
              ?hidden="${!this.scrollButtons}"
              ?disabled="${this._isAtEnd}"
              aria-hidden="true"
              tabindex="-1"
            >
              ${this._getNextButtonSvgTemplate()}
            </button>
          </div>
          <div
            class="kuc-tabs-1-26-0__group__tab-panel"
            ?border-visible="${this.borderVisible}"
          >
            ${this.items.map((e,t)=>this._getTabContentTemplate(e,t))}
          </div>
        </div>
      `}firstUpdated(){window.addEventListener(`resize`,this._handleResize),this._resizeObserver=new ResizeObserver(()=>{this.scrollButtons&&this._updatePreNextButtonState()}),this._resizeObserver.observe(this._tabListContainer),this._setScrollStyles(),this._scrollToSelectedTab(!0)}updated(e){e.has(`scrollButtons`)&&this._setScrollStyles(),this.scrollButtons&&this._updatePreNextButtonState()}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener(`resize`,this._handleResize),this._resizeObserver&&=(this._resizeObserver.disconnect(),null)}_getTabTemplate(e,t){let n=e.value===this._selectedValue;return j`<li
        role="presentation"
        class="kuc-tabs-1-26-0__group__tabs-container__tab-list-container__tab-list__tab"
      >
        <button
          role="tab"
          type="button"
          ?hidden="${e.visible===!1}"
          aria-selected="${n}"
          tabindex="${n&&!e.disabled?`0`:`-1`}"
          class="kuc-tabs-1-26-0__group__tabs-container__tab-list-container__tab-list__tab__button ${this._isClick?`kuc-tabs-1-26-0__group__tabs-container__tab-list-container__tab-list__tab__button--click`:``}"
          id="${this._GUID}-button-${t}"
          aria-controls="${this._GUID}-tabpanel-${t}"
          value="${e.value}"
          @click="${this._handleClickTab}"
          @mousedown="${this._handleMouseDown}"
          @keydown="${this._handleKeyDownTab}"
          ?disabled="${e.disabled}"
        >
          ${e.label?e.label:``}
        </button>
      </li>`}_getTabContentTemplate(e,t){let n=e.value===this._selectedValue;return j`<div
        class="kuc-tabs-1-26-0__group__tab-panel__content"
        role="tabpanel"
        id="${this._GUID}-tabpanel-${t}"
        aria-labelledby="${this._GUID}-button-${t}"
        ?hidden="${!n||e.visible===!1}"
        @change="${this._handleChangeEvent}"
      >
        ${e.content&&ls(e.content)?Io(e.content):e.content}
      </div>`}_getPrevButtonSvgTemplate(){return M`
        <svg
          width="9"
          height="15"
          viewBox="0 0 9 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M1.99061 7.5L9 0.0604158L7.06632 0L0 7.5L7.06632 15L9 14.9396L1.99061 7.5Z"
            fill="${this._isAtStart?`GrayText`:`#333333`}"
          />
        </svg>
      `}_getNextButtonSvgTemplate(){return M`
      <svg
        width="9"
        height="15"
        viewBox="0 0 9 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M7.00939 7.5L0 0.0604158L1.93368 0L9 7.5L1.93368 15L0 14.9396L7.00939 7.5Z"
          fill="${this._isAtEnd?`GrayText`:`#333333`}"
        />
      </svg>
      `}_getVisibleTab(e,t){let n=Array.from(this._tabButtons),r=n.indexOf(t),i=e===`next`?1:-1,a=e===`next`?n.length:-1;for(let e=r+i;e!==a;e+=i)if(!n[e].hidden)return n[e];return null}_handleTabScroll(e){let t=this._findVisibleTab(e);if(!t)return;let n=this._isTabPartiallyVisible(t,e)?t:this._getVisibleTab(e,t);n&&this._scrollTab(n,{direction:e,mode:`edge`}),this._updatePreNextButtonState()}_findVisibleTab(e){let t=this._tabListContainer.getBoundingClientRect(),n=Array.from(this._tabButtons),r=e=>{let n=e.getBoundingClientRect();return!(n.right<=t.left||n.left>=t.right)};return e===`next`?n.reverse().find(r):n.find(r)}_isTabPartiallyVisible(e,t){let n=this._tabListContainer.getBoundingClientRect(),r=e.getBoundingClientRect();return t===`next`?r.right>n.right+2:r.left<n.left-2}_calculateScrollPosition(e,t){let{direction:n,mode:r}=t,i=this._tabListContainer.getBoundingClientRect(),a=e.getBoundingClientRect(),o=this._tabListContainer.scrollLeft;return r===`edge`&&n?o+=n===`next`?a.right-i.right:a.left-i.left:a.width>i.width&&n?o+=n===`next`?a.left-i.left:a.right-i.right:a.left<i.left?o+=a.left-i.left:a.right>i.right&&(o+=a.right-i.right),Math.max(0,Math.min(o,this._tabListContainer.scrollWidth-this._tabListContainer.clientWidth))}_scrollTab(e,t){let n=this._calculateScrollPosition(e,t);this._tabListContainer.scrollTo({left:n,behavior:t.immediate?`auto`:`smooth`})}_handleMouseDownPrevButton(e){e.preventDefault(),this._handleTabScroll(`prev`)}_handleMouseDownNextButton(e){e.preventDefault(),this._handleTabScroll(`next`)}_handleResize(){this.scrollButtons&&this._updatePreNextButtonState()}_handleScroll(){this._updatePreNextButtonState()}_isScrollToLeft(){return this._tabListContainer.scrollLeft===0}_isScrollToRight(){let{scrollWidth:e,scrollLeft:t,clientWidth:n}=this._tabListContainer;return Math.abs(e-t-n)<2}_setScrollStyles(){var e;(e=this._tabGroup.parentElement)==null||e.style.setProperty(`max-width`,this.scrollButtons?`100%`:``),this._tabListContainer.style.setProperty(`overflow-x`,this.scrollButtons?`auto`:`visible`)}_updatePreNextButtonState(){let e=this._isScrollToLeft(),t=this._isScrollToRight();e!==this._isAtStart&&(this._isAtStart=e),t!==this._isAtEnd&&(this._isAtEnd=t)}_handleMouseDown(e){this._isClick=!0}_handleClickTab(e){let t=e.target;t.blur();let n=this._getCurrentTabIndex(t.getAttribute(`value`));if(this._tabButtons[n].focus(),this.value===t.value)return;let r=this._generateEventDetail(t.value);H(this,`change`,r)}_handleChangeEvent(e){e.stopPropagation()}_handleBlur(e){this._isClick=!1}_handleKeyDownTab(e){this._isClick=!1;let t=!1;switch(e.key){case`Left`:case`ArrowLeft`:t=!0,this._moveToAdjacentTab(e.target,`prev`);break;case`Right`:case`ArrowRight`:t=!0,this._moveToAdjacentTab(e.target,`next`);break;case`Home`:t=!0,this._moveToLastFirstTab(e.target,`first`);break;case`End`:t=!0,this._moveToLastFirstTab(e.target,`last`)}t&&(e.stopPropagation(),e.preventDefault())}_getCurrentTabIndex(e){let t=-1;for(let n=0;n<this.items.length;n++)if(this.items[n].value===e){t=n;break}return t===-1&&(t=this._getFirstVisibleTabIndex()),t}_getFirstVisibleTabIndex(){return this.items.findIndex(e=>e.visible!==!1)}_getMatchedTabIndex(){return this.items.findIndex(e=>e.visible!==!1&&e.value===this.value)}_moveToLastFirstTab(e,t){let n=this._getCurrentTabIndex(e.getAttribute(`value`)),r=t===`last`?-1:1,i=t===`last`?this.items.length-1:0;for(;i!==n;){if(this.items[i].visible!==!1&&this.items[i].disabled!==!0){e.blur(),H(this,`change`,this._generateEventDetail(this._tabButtons[i].getAttribute(`value`))),this._tabButtons[this._getCurrentTabIndex(this.value)].focus(),this._scrollTab(this._tabButtons[this._getCurrentTabIndex(this.value)],{mode:`visible`});break}i+=r}}_moveToAdjacentTab(e,t){let n=this._getCurrentTabIndex(e.getAttribute(`value`)),r=t===`next`?1:-1,i=n+r;for(;i!==n&&(i===this.items.length?i=0:i===-1&&(i=this.items.length-1),i!==n);){if(this.items[i].visible!==!1&&this.items[i].disabled!==!0){e.blur(),H(this,`change`,this._generateEventDetail(this._tabButtons[i].getAttribute(`value`))),this._tabButtons[this._getCurrentTabIndex(this.value)].focus(),this._scrollTab(this._tabButtons[this._getCurrentTabIndex(this.value)],{mode:`visible`,direction:t});break}i+=r}}_scrollToSelectedTab(e=!1){if(!this.value||!this._tabButtons.length)return;let t=this._getCurrentTabIndex(this.value);if(t===-1)return;let n=this._tabButtons[t];n&&(n.hidden||(this._scrollTab(n,{mode:`visible`,immediate:e}),this._updatePreNextButtonState()))}_generateEventDetail(e){let t=this.value;return this.value=e,{oldValue:t,value:e}}}Zc([P({type:String,reflect:!0,attribute:`class`})],e.prototype,`className`,void 0),Zc([P({type:String,reflect:!0,attribute:`id`})],e.prototype,`id`,void 0),Zc([P({type:String})],e.prototype,`value`,void 0),Zc([P({type:Boolean})],e.prototype,`borderVisible`,void 0),Zc([P({type:Boolean})],e.prototype,`scrollButtons`,void 0),Zc([P({type:Boolean,attribute:`hidden`,reflect:!0,converter:B})],e.prototype,`visible`,void 0),Zc([P({type:Array})],e.prototype,`items`,void 0),Zc([ja(`.kuc-tabs-1-26-0__group__tabs-container__tab-list-container__tab-list__tab__button`)],e.prototype,`_tabButtons`,void 0),Zc([I(`.kuc-tabs-1-26-0__group__tabs-container__tab-list-container`)],e.prototype,`_tabListContainer`,void 0),Zc([I(`.kuc-tabs-1-26-0__group`)],e.prototype,`_tabGroup`,void 0),Zc([F()],e.prototype,`_isClick`,void 0),Zc([F()],e.prototype,`_isAtStart`,void 0),Zc([F()],e.prototype,`_isAtEnd`,void 0),window.customElements.define(`kuc-tabs-1-26-0`,e),U(Xc),Qc=e})();var $c=`
kuc-text-1-26-0,
kuc-text-1-26-0 *,
kuc-text-1-26-0:lang(en),
kuc-text-1-26-0:lang(en) * {
  font-family: sans-serif;
}
kuc-text-1-26-0:lang(es),
kuc-text-1-26-0:lang(es) * {
  font-family: sans-serif;
}
kuc-text-1-26-0:lang(ja),
kuc-text-1-26-0:lang(ja) * {
  font-family: "メイリオ", "Hiragino Kaku Gothic ProN", Meiryo,
    sans-serif;
}
kuc-text-1-26-0:lang(zh),
kuc-text-1-26-0:lang(zh) * {
  font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,
    Hei, "Heiti SC", sans-serif;
}
kuc-text-1-26-0:lang(zh-TW),
kuc-text-1-26-0:lang(zh-TW) * {
  font-family: "微軟正黑體","Microsoft JhengHei","新宋体",NSimSun,STHeiti,
    Hei,"Heiti SC",sans-serif;
}
kuc-text-1-26-0 {
  font-size: 14px;
  color: #333333;
  display: inline-table;
  vertical-align: top;
  min-width: var(--kuc-text-input-width, 177px);
  width: var(--kuc-text-input-width, 177px);
  line-height: 1.5;
}
kuc-text-1-26-0[hidden] {
  display: none;
}
.kuc-text-1-26-0__group {
  border: none;
  padding: 0px;
  height: auto;
  display: inline-block;
  vertical-align: top;
  width: 100%;
  margin: 0px;
}
.kuc-text-1-26-0__group__label {
  display: inline-block;
  padding: 4px 0px 8px 0px;
  white-space: nowrap;
}
.kuc-text-1-26-0__group__label[hidden] {
  display: none;
}
.kuc-text-1-26-0__group__input-form {
  display: flex;
  align-items: center;
  width: 100%;
}
.kuc-text-1-26-0__group__input-form__prefix-outer__prefix {
  padding-right: 4px;
  white-space: nowrap;
}
.kuc-text-1-26-0__group__input-form__input-outer {
  display: flex;
  min-width: var(--kuc-text-input-width, 26px);
  width: var(--kuc-text-input-width, 100%);
}
input[type="text"].kuc-text-1-26-0__group__input-form__input-outer__input {
  width: var(--kuc-text-input-width, 100%);
  height: var(--kuc-text-input-height, 40px);
  font-size: var(--kuc-text-input-font-size, 14px);
  color: var(--kuc-text-input-color, #000000);
  padding: 0 8px;
  border: 1px solid #e3e7e8;
  box-sizing: border-box;
  box-shadow: 2px 2px 4px #f5f5f5 inset, -2px -2px 4px #f5f5f5 inset;
}
.kuc-text-1-26-0__group__input-form__input-outer__input[textAlign="left"] {
  text-align: left;
}
.kuc-text-1-26-0__group__input-form__input-outer__input[textAlign="right"] {
  text-align: right;
}
input[type=text].kuc-text-1-26-0__group__input-form__input-outer__input:focus {
  outline: none;
  border: 1px solid #3498db;
}
input[type=text].kuc-text-1-26-0__group__input-form__input-outer__input:disabled {
  color: #888888;
  background-color: #d4d7d7;
  box-shadow: none;
  cursor: not-allowed;
}
.kuc-text-1-26-0__group__input-form__suffix-outer__suffix {
  padding-left: 4px;
  white-space: nowrap;
}
`,el=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},tl;(()=>{if(tl=window.customElements.get(`kuc-text-1-26-0`),tl)return;class e extends V{constructor(e){super(),this.className=``,this.error=``,this.id=``,this.label=``,this.placeholder=``,this.prefix=``,this.suffix=``,this.textAlign=`left`,this.value=``,this.disabled=!1,this.requiredIcon=!1,this.visible=!0,this._GUID=W();let t=G(e);Object.assign(this,t)}_handleFocusInput(e){let t={value:this.value};H(this,`focus`,t)}_handleChangeInput(e){e.stopPropagation();let t=e.target,n={value:``,oldValue:this.value};this.value=t.value,n.value=this.value,H(this,`change`,n)}_handleInputText(e){e.stopPropagation();let t={value:e.target.value,data:e.data};H(this,`input`,t)}render(){return j`
        <div class="kuc-text-1-26-0__group">
          <label
            class="kuc-text-1-26-0__group__label"
            for="${this._GUID}-label"
            ?hidden="${!this.label}"
          >
            <kuc-base-label-1-26-0
              .text="${this.label}"
              .requiredIcon="${this.requiredIcon}"
            ></kuc-base-label-1-26-0>
          </label>
          <div class="kuc-text-1-26-0__group__input-form">
            <div class="kuc-text-1-26-0__group__input-form__prefix-outer">
              <span
                class="kuc-text-1-26-0__group__input-form__prefix-outer__prefix"
                ?hidden="${!this.prefix}"
                >${this.prefix}</span
              >
            </div>
            <div class="kuc-text-1-26-0__group__input-form__input-outer">
              <input
                class="kuc-text-1-26-0__group__input-form__input-outer__input"
                id="${this._GUID}-label"
                placeholder="${this.placeholder}"
                textAlign="${this.textAlign}"
                type="text"
                .value="${this.value}"
                aria-required="${this.requiredIcon}"
                aria-invalid="${this.error!==``}"
                aria-describedby="${this._GUID}-error"
                @focus="${this._handleFocusInput}"
                @change="${this._handleChangeInput}"
                @input="${this._handleInputText}"
                ?disabled="${this.disabled}"
              />
            </div>
            <div class="kuc-text-1-26-0__group__input-form__suffix-outer">
              <span
                class="kuc-text-1-26-0__group__input-form__suffix-outer__suffix"
                ?hidden="${!this.suffix}"
                >${this.suffix}</span
              >
            </div>
          </div>
          <kuc-base-error-1-26-0
            .text="${this.error}"
            .guid="${this._GUID}"
            ?hidden="${!this.error}"
          ></kuc-base-error-1-26-0>
        </div>
      `}}el([P({type:String,reflect:!0,attribute:`class`})],e.prototype,`className`,void 0),el([P({type:String})],e.prototype,`error`,void 0),el([P({type:String,reflect:!0,attribute:`id`})],e.prototype,`id`,void 0),el([P({type:String})],e.prototype,`label`,void 0),el([P({type:String})],e.prototype,`placeholder`,void 0),el([P({type:String})],e.prototype,`prefix`,void 0),el([P({type:String})],e.prototype,`suffix`,void 0),el([P({type:String})],e.prototype,`textAlign`,void 0),el([P({type:String})],e.prototype,`value`,void 0),el([P({type:Boolean})],e.prototype,`disabled`,void 0),el([P({type:Boolean})],e.prototype,`requiredIcon`,void 0),el([P({type:Boolean,attribute:`hidden`,reflect:!0,converter:B})],e.prototype,`visible`,void 0),window.customElements.define(`kuc-text-1-26-0`,e),U($c),tl=e})();var nl=tl,rl=`
  kuc-textarea-1-26-0,
  kuc-textarea-1-26-0 *,
  kuc-textarea-1-26-0:lang(en),
  kuc-textarea-1-26-0:lang(en) * {
    font-family: sans-serif;
  }
  kuc-textarea-1-26-0:lang(es),
  kuc-textarea-1-26-0:lang(es) * {
    font-family: sans-serif;
  }
  kuc-textarea-1-26-0:lang(ja),
  kuc-textarea-1-26-0:lang(ja) * {
    font-family: "メイリオ", "Hiragino Kaku Gothic ProN", Meiryo,
      sans-serif;
  }
  kuc-textarea-1-26-0:lang(zh),
  kuc-textarea-1-26-0:lang(zh) * {
    font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,
      Hei, "Heiti SC", sans-serif;
  }
  kuc-textarea-1-26-0:lang(zh-TW),
  kuc-textarea-1-26-0:lang(zh-TW) * {
    font-family: "微軟正黑體","Microsoft JhengHei","新宋体",NSimSun,STHeiti,
      Hei,"Heiti SC",sans-serif;
  }
  kuc-textarea-1-26-0 {
    font-size: 14px;
    color: var(--kuc-textarea-input-color, #333333);
    display: inline-table;
    vertical-align: top;
    width: var(--kuc-textarea-input-width, 299px);
    height: var(--kuc-textarea-input-height, 125px);
    line-height: 1.5;
  }
  kuc-textarea-1-26-0[hidden] {
    display: none;
  }
  .kuc-textarea-1-26-0__group {
    border: none;
    padding: 0px;
    height: auto;
    display: inline-block;
    vertical-align: top;
    width: 100%;
    margin: 0px;
    white-space: normal;
  }
  .kuc-textarea-1-26-0__group__label {
    white-space: nowrap;
    display: inline-block;
    padding: 4px 0px 8px 0px;
  }
  .kuc-textarea-1-26-0__group__label[hidden] {
    display: none;
  }
  .kuc-textarea-1-26-0__group__container {
    position: relative;
    display: inline-table;
    width: var(--kuc-textarea-input-width, 100%);
    min-width: var(--kuc-textarea-input-width, 100%);
  }
  textarea.kuc-textarea-1-26-0__group__textarea {
    display: block;
    border: 1px solid #e3e7e8;
    box-sizing: border-box;
    font-size: var(--kuc-textarea-input-font-size, 14px);
    box-shadow: 2px 2px 4px #f5f5f5 inset, -2px -2px 4px #f5f5f5 inset;
    min-width: var(--kuc-textarea-input-width, 299px);
    min-height: var(--kuc-textarea-input-height, 125px);
    width: var(--kuc-textarea-input-width, 299px);
    height: var(--kuc-textarea-input-height, 125px);
    padding: 8px;
    resize: none;
    width: 100%;
    background-color: #ffffff;
    color: var(--kuc-textarea-input-color, #333333);
  }
  .kuc-textarea-1-26-0__group__textarea:focus {
    outline: none;
    border-color: #3498db;
    box-shadow: 2px 2px 4px #f5f5f5 inset, -2px -2px 4px #f5f5f5 inset;
    border: 1px solid #3498db;
    background-color: #ffffff;
    color: var(--kuc-textarea-input-color, #333333);
  }
  .kuc-textarea-1-26-0__group__textarea:disabled {
    color: #888888;
    background-color: #d4d7d7;
    box-shadow: none;
    cursor: not-allowed;
    resize: none;
  }
  .kuc-textarea-1-26-0__group__resizer {
    position: absolute;
    width: 16px;
    height: 16px;
    cursor: se-resize;
    float: right;
    margin: -16px 0px;
    right: 0px;
  }
`,il=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},al;(()=>{if(al=window.customElements.get(`kuc-textarea-1-26-0`),al)return;let e={MIN_WIDTH:16,MIN_HEIGHT:16};class t extends V{constructor(e){super(),this.className=``,this.error=``,this.id=``,this.label=``,this.placeholder=``,this.value=``,this.disabled=!1,this.requiredIcon=!1,this.visible=!0,this._onResize=!1,this._GUID=W();let t=G(e);Object.assign(this,t)}_handleFocusTextarea(e){let t={value:this.value};H(this,`focus`,t)}_handleChangeTextarea(e){e.stopPropagation();let t=e.target,n={value:``,oldValue:this.value};this.value=t.value,n.value=this.value,H(this,`change`,n)}_handleInputTextArea(e){e.stopPropagation();let t={value:e.target.value,data:e.data};H(this,`input`,t)}_handleMouseDownResize(){this._onResize=!0}_handleMouseUpDocument(){this._onResize=!1}_handleMouseMoveDocument(t){if(!this._onResize)return;let n=this._textarea.getBoundingClientRect(),r=t.clientX-n.left,i=t.clientY-n.top;r<e.MIN_WIDTH&&(r=e.MIN_WIDTH),i<e.MIN_HEIGHT&&(i=e.MIN_HEIGHT),this._container.style.width=r+`px`,this._textarea.style.height=i+`px`}_getResizerButtonSvgTemplate(){return M`
      <svg height="16" width="16">
        <g fill="none" stroke="#b6b6b6" stroke-width="2">
          <line x1="14" x2="16" y1="15" y2="15" />
          <line x1="14" x2="16" y1="11" y2="11" />
          <line x1="14" x2="16" y1="7" y2="7" />
          <line x1="10" x2="12" y1="15" y2="15" />
          <line x1="6" x2="8" y1="15" y2="15" />
          <line x1="10" x2="12" y1="11" y2="11" />
        </g>
      </svg>
      `}firstUpdated(){document.addEventListener(`mousemove`,e=>this._handleMouseMoveDocument(e)),document.addEventListener(`mouseup`,e=>this._handleMouseUpDocument())}render(){return j`
        <div class="kuc-textarea-1-26-0__group">
          <label
            class="kuc-textarea-1-26-0__group__label"
            ?hidden="${!this.label}"
            for="${this._GUID}-label"
          >
            <kuc-base-label-1-26-0
              .text="${this.label}"
              .requiredIcon="${this.requiredIcon}"
            ></kuc-base-label-1-26-0>
          </label>
          <div class="kuc-textarea-1-26-0__group__container">
            <textarea
              id="${this._GUID}-label"
              class="kuc-textarea-1-26-0__group__textarea"
              placeholder="${this.placeholder}"
              .value="${this.value}"
              aria-describedby="${this._GUID}-error"
              aria-required="${this.requiredIcon}"
              aria-invalid="${this.error!==``}"
              @change="${this._handleChangeTextarea}"
              @focus="${this._handleFocusTextarea}"
              @input="${this._handleInputTextArea}"
              ?disabled="${this.disabled}"
            >
            </textarea>
            <div
              class="kuc-textarea-1-26-0__group__resizer"
              @mousedown="${this._handleMouseDownResize}"
              ?hidden="${this.disabled}"
            >
              ${this._getResizerButtonSvgTemplate()}
            </div>
          </div>
          <kuc-base-error-1-26-0
            .text="${this.error}"
            .guid="${this._GUID}"
            ?hidden="${!this.error}"
          ></kuc-base-error-1-26-0>
        </div>
      `}}il([P({type:String,reflect:!0,attribute:`class`})],t.prototype,`className`,void 0),il([P({type:String})],t.prototype,`error`,void 0),il([P({type:String,reflect:!0,attribute:`id`})],t.prototype,`id`,void 0),il([P({type:String})],t.prototype,`label`,void 0),il([P({type:String})],t.prototype,`placeholder`,void 0),il([P({type:String})],t.prototype,`value`,void 0),il([P({type:Boolean})],t.prototype,`disabled`,void 0),il([P({type:Boolean})],t.prototype,`requiredIcon`,void 0),il([P({type:Boolean,attribute:`hidden`,reflect:!0,converter:B})],t.prototype,`visible`,void 0),il([I(`.kuc-textarea-1-26-0__group__container`)],t.prototype,`_container`,void 0),il([I(`.kuc-textarea-1-26-0__group__textarea`)],t.prototype,`_textarea`,void 0),window.customElements.define(`kuc-textarea-1-26-0`,t),U(rl),al=t})();var ol=`
kuc-time-picker-1-26-0,
kuc-time-picker-1-26-0 *,
kuc-time-picker-1-26-0:lang(en),
kuc-time-picker-1-26-0:lang(en) * {
  font-family: sans-serif;
}
kuc-time-picker-1-26-0:lang(ja),
kuc-time-picker-1-26-0:lang(ja) * {
  font-family: "メイリオ", "Hiragino Kaku Gothic ProN", Meiryo,
    sans-serif;
}
kuc-time-picker-1-26-0:lang(zh),
kuc-time-picker-1-26-0:lang(zh) * {
  font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,
    Hei, "Heiti SC", sans-serif;
}
kuc-time-picker-1-26-0:lang(zh-TW),
kuc-time-picker-1-26-0:lang(zh-TW) * {
  font-family: "微軟正黑體","Microsoft JhengHei","新宋体",NSimSun,STHeiti,
    Hei,"Heiti SC"
}
kuc-time-picker-1-26-0:lang(es),
kuc-time-picker-1-26-0:lang(es) * {
  font-family: sans-serif;
}
kuc-time-picker-1-26-0 {
  font-size: 14px;
  color: var(--kuc-time-picker-input-color, #333333);
  display: inline-table;
  max-width: var(--kuc-time-picker-input-width, 85px);
  width: var(--kuc-time-picker-input-width, 85px);
  vertical-align: top;
  line-height: 1.5;
}
.kuc-time-picker-1-26-0__group__input {
  position: relative;
}
kuc-time-picker-1-26-0[hidden] {
  display: none;
}
.kuc-time-picker-1-26-0__group {
  display: flex;
  flex-direction: column;
  border: none;
  padding: 0px;
  height: auto;
  margin: 0px;
}

.kuc-time-picker-1-26-0__group kuc-base-time-1-26-0 {
  display: inline-flex;
  flex-direction: column;
}

.kuc-time-picker-1-26-0__group .kuc-base-time-1-26-0__group {
  max-width: var(--kuc-time-picker-input-width, 85px);
  width: var(--kuc-time-picker-input-width, 85px);
  font-size: var(--kuc-time-picker-input-font-size, 14px);
  height: var(--kuc-time-picker-input-height, 40px);
  color: var(--kuc-time-picker-input-color, #333333);
}
.kuc-time-picker-1-26-0__group .kuc-base-time-1-26-0__group input[type=text].kuc-base-time-1-26-0__group__hours,
.kuc-time-picker-1-26-0__group .kuc-base-time-1-26-0__group input[type=text].kuc-base-time-1-26-0__group__minutes,
.kuc-time-picker-1-26-0__group .kuc-base-time-1-26-0__group input.kuc-base-time-1-26-0__group__suffix,
.kuc-time-picker-1-26-0__group .kuc-base-time-1-26-0__group--focus {
  color: var(--kuc-time-picker-input-color, #333333);
}
.kuc-time-picker-1-26-0__group__label {
  padding: 4px 0px 8px 0px;
  display: inline-block;
  white-space: nowrap;
}
.kuc-time-picker-1-26-0__group__label[hidden] {
  display: none;
}
`,sl=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},cl;(()=>{if(cl=window.customElements.get(`kuc-time-picker-1-26-0`),cl)return;class e extends V{constructor(e){super(),this.className=``,this.error=``,this.id=``,this.label=``,this.language=`auto`,this.max=``,this.min=``,this.value=``,this.disabled=!1,this.hour12=!1,this.requiredIcon=!1,this.visible=!0,this.timeStep=30,this._errorText=``,this._inputValue=``,this._errorInvalid=``,this._blurBaseline=``,this._inputMax=``,this._inputMin=``,this._inputTimeStep=30,this._valueConverted=``,this._GUID=W();let t=G(e);Object.assign(this,t)}shouldUpdate(e){if(e.has(`max`)||e.has(`min`)){let e,t;if(this.max===void 0||this.max===``)t=Za;else{if(!Qo(this.max))return this.throwErrorAfterUpdateComplete(Qa.MAX),!1;t=this.max=Ro(this.max)}if(this.min===void 0||this.min===``)e=Xa;else{if(!Qo(this.min))return this.throwErrorAfterUpdateComplete(Qa.MIN),!1;e=this.min=Ro(this.min)}if(co(t,e)<0)return this.throwErrorAfterUpdateComplete(qa),!1;this._inputMin=e,this._inputMax=t}if(e.has(`timeStep`)){if(!cs(this.timeStep))return this.throwErrorAfterUpdateComplete(Ya),!1;if(!$o(this.timeStep,this._inputMax,this._inputMin))return this.throwErrorAfterUpdateComplete(Qa.TIME_STEP),!1;this._inputTimeStep=this.timeStep}return this.value===void 0||this.value===``?!0:Qo(this.value)?(this._valueConverted=Ro(this.value),e.has(`value`)&&(co(this._valueConverted,this._inputMin)<0||co(this._inputMax,this._valueConverted)<0)?(this.throwErrorAfterUpdateComplete(Ja),!1):!0):(this.throwErrorAfterUpdateComplete(Qa.VALUE),!1)}update(e){e.has(`value`)&&(this.value===void 0?this._errorInvalid===``&&(this._inputValue=``):(this.value=this.value===``?this.value:this._valueConverted,this._inputValue=this.value)),(e.has(`max`)||e.has(`min`)||e.has(`value`))&&this.value!==void 0&&(this._errorInvalid=``),this._errorText=this._errorInvalid||this.error,super.update(e)}render(){return j`
        <fieldset
          class="kuc-time-picker-1-26-0__group"
          aria-describedby="${this._GUID}-error"
        >
          <legend
            class="kuc-time-picker-1-26-0__group__label"
            ?hidden="${!this.label}"
          >
            <kuc-base-label-1-26-0
              .text="${this.label}"
              .requiredIcon="${this.requiredIcon}"
            ></kuc-base-label-1-26-0>
          </legend>
          <kuc-base-time-1-26-0
            class="kuc-time-picker-1-26-0__group__input"
            .value="${this._inputValue}"
            .hour12="${this.hour12}"
            .disabled="${this.disabled}"
            .timeStep="${this._inputTimeStep}"
            .min="${this._inputMin}"
            .max="${this._inputMax}"
            .language="${this._getLanguage()}"
            @kuc:base-time-change="${this._handleTimeChange}"
            @kuc:base-time-blur="${this._handleTimeChangeOnBlur}"
            @kuc:base-time-focusin="${this._handleTimeFocusIn}"
          >
          </kuc-base-time-1-26-0>
          <kuc-base-error-1-26-0
            .text="${this._errorText}"
            .guid="${this._GUID}"
            ?hidden="${!this._errorText}"
          ></kuc-base-error-1-26-0>
        </fieldset>
      `}_handleTimeChange(e){e.preventDefault(),e.stopPropagation();let t={value:e.detail.value,oldValue:this.value};e.detail.error?(t.value=void 0,this.value=void 0,this._errorInvalid=e.detail.error,this.error=``):(this.value=e.detail.value,this._errorInvalid=``),this._inputValue=e.detail.value,H(this,`change`,t)}_handleTimeFocusIn(e){e.stopPropagation(),this._blurBaseline=this.value}_handleTimeChangeOnBlur(e){e.preventDefault(),e.stopPropagation();let t={value:e.detail.error?void 0:e.detail.value,oldValue:this._blurBaseline};H(this,`blur`,t)}_getLanguage(){let e=[`en`,`ja`,`zh`,`zh-TW`,`es`];return e.indexOf(this.language)===-1?e.indexOf(document.documentElement.lang)===-1?`en`:document.documentElement.lang:this.language}}sl([P({type:String,reflect:!0,attribute:`class`})],e.prototype,`className`,void 0),sl([P({type:String})],e.prototype,`error`,void 0),sl([P({type:String,reflect:!0,attribute:`id`})],e.prototype,`id`,void 0),sl([P({type:String})],e.prototype,`label`,void 0),sl([P({type:String,attribute:`lang`,reflect:!0,converter:Fo})],e.prototype,`language`,void 0),sl([P({type:String})],e.prototype,`max`,void 0),sl([P({type:String})],e.prototype,`min`,void 0),sl([P({type:String})],e.prototype,`value`,void 0),sl([P({type:Boolean})],e.prototype,`disabled`,void 0),sl([P({type:Boolean})],e.prototype,`hour12`,void 0),sl([P({type:Boolean})],e.prototype,`requiredIcon`,void 0),sl([P({type:Boolean,attribute:`hidden`,reflect:!0,converter:B})],e.prototype,`visible`,void 0),sl([P({type:Number})],e.prototype,`timeStep`,void 0),window.customElements.define(`kuc-time-picker-1-26-0`,e),U(ol),cl=e})();var ll=`
  kuc-tooltip-1-26-0,
  kuc-tooltip-1-26-0 *,
  kuc-tooltip-1-26-0:lang(en),
  kuc-tooltip-1-26-0:lang(en) * {
    font-family: sans-serif;
  }
  kuc-tooltip-1-26-0:lang(es),
  kuc-tooltip-1-26-0:lang(es) * {
    font-family: sans-serif;
  }
  kuc-tooltip-1-26-0:lang(ja),
  kuc-tooltip-1-26-0:lang(ja) * {
    font-family: "メイリオ", "Hiragino Kaku Gothic ProN", Meiryo,
      sans-serif;
  }
  kuc-tooltip-1-26-0:lang(zh),
  kuc-tooltip-1-26-0:lang(zh) * {
    font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,
      Hei, "Heiti SC", sans-serif;
  }
  kuc-tooltip-1-26-0:lang(zh-TW),
  kuc-tooltip-1-26-0:lang(zh-TW) * {
    font-family: "微軟正黑體","Microsoft JhengHei","新宋体",NSimSun,STHeiti,
      Hei,"Heiti SC",sans-serif;
  }
  .kuc-tooltip-1-26-0__group {
    position: relative;
    display: inline-block;
  }
  .kuc-tooltip-1-26-0__group::after {
    position: absolute;
    right: -20%;
    top: 100%;
    left: -20%;
    display: block;
    height: calc(0.5em * 2);
  }
  .kuc-tooltip-1-26-0__group__title .kuc-tooltip-1-26-0__group__title__wrapper__text {
    max-width: var(--kuc-tooltip-width, 250px);
    width: var(--kuc-tooltip-width, auto);
    min-height: var(--kuc-tooltip-height, 32px);;
    height: var(--kuc-tooltip-height, auto);
    padding: 6px 8px;
    color: var(--kuc-tooltip-color, #ffffff);
    text-align: start;
    text-decoration: none;
    word-wrap: break-word;
    overflow: auto;
    white-space: normal;
    background-color: var(--kuc-tooltip-background-color, #000000);
    font-size: var(--kuc-tooltip-font-size);
    border-radius: 6px;
    box-sizing: border-box;
  }
  .kuc-tooltip-1-26-0__group__title[popover] {
    margin: 0;
    padding: 0;
    background-color: transparent;
    border-width: 0;
    border-radius: 0.25em;
    color: var(--kuc-tooltip-color, #ffffff);
    width: max-content;
  }
  .kuc-tooltip-1-26-0__group .kuc-tooltip-1-26-0__group__title__wrapper__arrow {
    border: 0.5em solid transparent;
    border-bottom-color: var(--kuc-tooltip-background-color, #000000);
  }
  .kuc-tooltip-1-26-0__group.kuc-tooltip-1-26-0__group--top > .kuc-tooltip-1-26-0__group__title .kuc-tooltip-1-26-0__group__title__wrapper__arrow {
    border-top-color: var(--kuc-tooltip-background-color, #000000);
    border-right-color: transparent;
    border-bottom-color: transparent;
    margin: auto 0;
  }
  .kuc-tooltip-1-26-0__group.kuc-tooltip-1-26-0__group--left > .kuc-tooltip-1-26-0__group__title .kuc-tooltip-1-26-0__group__title__wrapper__arrow {
    border-left-color: var(--kuc-tooltip-background-color, #000000);
    border-bottom-color: transparent;
  }
  .kuc-tooltip-1-26-0__group.kuc-tooltip-1-26-0__group--right > .kuc-tooltip-1-26-0__group__title .kuc-tooltip-1-26-0__group__title__wrapper__arrow {
    border-right-color: var(--kuc-tooltip-background-color, #000000);
    border-bottom-color: transparent;
    width: fit-content;
    height: fit-content;
    margin: auto 0;
    top: 0;
    bottom: 0;
    right: 100%;
    left: auto;
  }
  .kuc-tooltip-1-26-0__group.kuc-tooltip-1-26-0__group--left > .kuc-tooltip-1-26-0__group__title,
  .kuc-tooltip-1-26-0__group.kuc-tooltip-1-26-0__group--right > .kuc-tooltip-1-26-0__group__title {
    width: max-content;
    height: fit-content;
  }
  .kuc-tooltip-1-26-0__group .kuc-tooltip-1-26-0__group__title__wrapper {
    display: flex;
    align-items: center;
  }
  .kuc-tooltip-1-26-0__group.kuc-tooltip-1-26-0__group--top > .kuc-tooltip-1-26-0__group__title .kuc-tooltip-1-26-0__group__title__wrapper {
    flex-direction: column-reverse;
  }
  .kuc-tooltip-1-26-0__group.kuc-tooltip-1-26-0__group--bottom > .kuc-tooltip-1-26-0__group__title .kuc-tooltip-1-26-0__group__title__wrapper {
    flex-direction: column;
  }
  .kuc-tooltip-1-26-0__group.kuc-tooltip-1-26-0__group--left > .kuc-tooltip-1-26-0__group__title .kuc-tooltip-1-26-0__group__title__wrapper {
    flex-direction: row-reverse;
  }
`,ul=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},dl;(()=>{if(dl=window.customElements.get(`kuc-tooltip-1-26-0`),dl)return;class e extends V{constructor(e){super(),this.className=``,this.id=``,this.placement=`top`,this.title=``,this.container=``,this.describeChild=!1,this._container=``,this._scrollTargets=[],this._timeoutID=null,this._handleScroll=()=>{this._timeoutID!==null&&clearTimeout(this._timeoutID),this._timeoutID=window.setTimeout(()=>{this._setTooltipPositionBound(),this._timeoutID=null},20)},this._GUID=W();let t=G(e);Object.assign(this,t),this._globalEscapeBound=this._globalEscape.bind(this),this._setTooltipPositionBound=this._setTooltipPosition.bind(this)}update(e){e.has(`container`)&&(this._container=this.container&&ls(this.container)?Io(this.container):this.container),super.update(e)}render(){return j`
        <div
          class="kuc-tooltip-1-26-0__group kuc-tooltip-1-26-0__group--${this._getPlacement()}"
        >
          <div
            class="kuc-tooltip-1-26-0__group__container"
            @focusin="${this._handleFocusinContainer}"
            @focusout="${this._handleFocusoutContainer}"
            @mouseenter="${this._handleMouseEnterContainer}"
            @mouseleave="${this._handleMouseLeaveContainer}"
            @touchstart="${this._handleTouchStartContainer}"
          >
            ${this._container}
          </div>
          ${this._getTitleTemplate()}
        </div>
      `}updated(){this._initializeFirstChildElement(),this.describeChild?this._setChildTitleAttribute():this._setChildAriaLabelAttribute()}_handleMouseEnterContainer(){this._openTooltip()}_handleTouchStartContainer(){this._openTooltip()}_handleMouseLeaveContainer(e){let t=e.relatedTarget;this._titleWrapper&&this._titleWrapper.contains(t)||this._closeTooltip()}_initializeFirstChildElement(){if(typeof this._container!=`string`){let e=this._groupContainerEL.firstElementChild;e&&!e.getAttribute(`aria-describedby`)&&(this._firstChildEl=e)}}_setChildTitleAttribute(){this._firstChildEl&&(this._firstChildEl.setAttribute(`title`,this.title),this._firstChildEl.removeAttribute(`aria-label`))}_setChildAriaLabelAttribute(){this._firstChildEl&&(this._firstChildEl.setAttribute(`aria-label`,this.title),this._firstChildEl.removeAttribute(`title`))}_getTitleTemplate(){return this.title?j`
        <div
          id="${this._GUID}-title"
          popover="manual"
          class="kuc-tooltip-1-26-0__group__title"
          role="tooltip"
          @mouseleave="${this._handleMouseLeaveTitle}"
        >
          <div class="kuc-tooltip-1-26-0__group__title__wrapper">
            <div class="kuc-tooltip-1-26-0__group__title__wrapper__arrow"></div>
            <div class="kuc-tooltip-1-26-0__group__title__wrapper__text">
              ${this.title}
            </div>
          </div>
        </div>
      `:j``}_handleMouseLeaveTitle(e){let t=e.relatedTarget;this._groupContainerEL.contains(t)||this._closeTooltip()}_handleFocusinContainer(){this._openTooltip()}_handleFocusoutContainer(){this._closeTooltip()}_openTooltip(){this._updateChildElementAttributes(!0);let e=this.querySelector(`.kuc-tooltip-1-26-0__group__title`);e&&(e.showPopover(),requestAnimationFrame(()=>{this._setTooltipPosition()})),this._attachGlobalListener()}_closeTooltip(){this._updateChildElementAttributes(!1);let e=this.querySelector(`.kuc-tooltip-1-26-0__group__title`);e&&e.hidePopover(),this._removeGlobalListener()}_updateChildElementAttributes(e){this._firstChildEl&&this.describeChild&&(e?(this._firstChildEl.removeAttribute(`title`),this._firstChildEl.setAttribute(`aria-describedby`,`${this._GUID}-title`)):(this._firstChildEl.removeAttribute(`aria-describedby`),this._firstChildEl.setAttribute(`title`,this.title)))}_attachGlobalListener(){document.addEventListener(`keydown`,this._globalEscapeBound),this._scrollTargets=this._getScrollableAncestors(this._containerEl);for(let e of this._scrollTargets)e.addEventListener(`scroll`,this._handleScroll,{passive:!0})}_removeGlobalListener(){document.removeEventListener(`keydown`,this._globalEscapeBound);for(let e of this._scrollTargets)e.removeEventListener(`scroll`,this._handleScroll);this._scrollTargets=[],this._timeoutID!==null&&(clearTimeout(this._timeoutID),this._timeoutID=null)}_getScrollableAncestors(e){let t=[],n=e.parentElement,r=/(auto|scroll|overlay)/;for(;n&&n!==document.body&&n!==document.documentElement;){let e=getComputedStyle(n);(r.test(e.overflowY)||r.test(e.overflowX))&&t.push(n),n=n.parentElement}return t.push(window),t}_globalEscape(e){(e.key===`Escape`||e.key===`Esc`)&&this._closeTooltip()}_getPlacement(){return[`top`,`bottom`,`left`,`right`].includes(this.placement)?this.placement:`top`}_setTooltipPosition(){if(!this._titleEl||!this._containerEl)return;let e=this._containerEl.getBoundingClientRect(),t=this._titleEl.getBoundingClientRect(),n,r;switch(this.placement){case`bottom`:n=e.bottom,r=e.left+e.width/2-t.width/2;break;case`left`:n=e.top+e.height/2-t.height/2,r=e.left-t.width;break;case`right`:n=e.top+e.height/2-t.height/2,r=e.right;break;default:n=e.top-t.height,r=e.left+e.width/2-t.width/2}this._titleEl.style.position=`fixed`,this._titleEl.style.top=`${Math.round(n)}px`,this._titleEl.style.left=`${Math.round(r)}px`,this._titleEl.style.transform=`none`}}ul([P({type:String,reflect:!0,attribute:`class`})],e.prototype,`className`,void 0),ul([P({type:String,reflect:!0,attribute:`id`})],e.prototype,`id`,void 0),ul([P({type:String})],e.prototype,`placement`,void 0),ul([P({type:String})],e.prototype,`title`,void 0),ul([P()],e.prototype,`container`,void 0),ul([P({type:Boolean})],e.prototype,`describeChild`,void 0),ul([I(`.kuc-tooltip-1-26-0__group__container`)],e.prototype,`_groupContainerEL`,void 0),ul([I(`.kuc-tooltip-1-26-0__group__title__wrapper`)],e.prototype,`_titleWrapper`,void 0),ul([I(`.kuc-tooltip-1-26-0__group__container`)],e.prototype,`_containerEl`,void 0),ul([I(`.kuc-tooltip-1-26-0__group__title`)],e.prototype,`_titleEl`,void 0),window.customElements.define(`kuc-tooltip-1-26-0`,e),U(ll),dl=e})();var fl=dl,pl=`
  kuc-user-org-group-select-1-26-0,
  kuc-user-org-group-select-1-26-0 *,
  kuc-user-org-group-select-1-26-0:lang(en),
  kuc-user-org-group-select-1-26-0:lang(en) * {
    font-family: sans-serif;
  }
  kuc-user-org-group-select-1-26-0:lang(es),
  kuc-user-org-group-select-1-26-0:lang(es) * {
    font-family: sans-serif;
  }
  kuc-user-org-group-select-1-26-0:lang(ja),
  kuc-user-org-group-select-1-26-0:lang(ja) * {
    font-family: "メイリオ", "Hiragino Kaku Gothic ProN", Meiryo,
      sans-serif;
  }
  kuc-user-org-group-select-1-26-0:lang(zh),
  kuc-user-org-group-select-1-26-0:lang(zh) * {
    font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,
      Hei, "Heiti SC", sans-serif;
  }
  kuc-user-org-group-select-1-26-0:lang(zh-TW),
  kuc-user-org-group-select-1-26-0:lang(zh-TW) * {
    font-family: "微軟正黑體", "Microsoft JhengHei", "新宋体", NSimSun, STHeiti, Hei, "Heiti SC", sans-serif;
  }
  kuc-user-org-group-select-1-26-0 {
    display: inline-table;
    width: var(--kuc-user-org-group-select-toggle-width, 280px);
    position: relative;
    display: inline-table;
    font-size: 14px;
    color: #333333;
    vertical-align: top;
    line-height: 1.5;
  }
  kuc-user-org-group-select-1-26-0[hidden] {
    display: none;
  }
  .kuc-user-org-group-select-1-26-0__group {
    border: none;
    padding: 0px;
    height: auto;
    display: inline-block;
    width: 100%;
    margin: 0px;
  }
  .kuc-user-org-group-select-1-26-0__group__label {
    padding: 4px 0px 8px 0px;
    display: inline-block;
    white-space: nowrap;
  }
  .kuc-user-org-group-select-1-26-0__group__label[hidden] {
    display: none;
  }
  .kuc-user-org-group-select-1-26-0__group__container {
    font-size: var(--kuc-user-org-group-select-font-size, 14px);
    display: flex;
    flex-direction: row;
    width: 100%;
    padding: 0px;
    margin: 0px;
    align-items: start;
  }
  .kuc-user-org-group-select-1-26-0__group__container__select-area {
    width: var(--kuc-user-org-group-select-toggle-width, 280px);
    position: relative;
  }
  .kuc-user-org-group-select-1-26-0__group__container__select-area__toggle {
    position: relative;
    display: flex;
    flex-direction: row;
  }
  .kuc-user-org-group-select-1-26-0__group__container__select-area__toggle__input {
    width: calc(var(--kuc-user-org-group-select-toggle-width, 280px) - 40px);
    height: var(--kuc-user-org-group-select-toggle-height, 40px);
    box-sizing: border-box;
    box-shadow: 2px 2px 4px #f5f5f5 inset, -2px -2px 4px #f5f5f5 inset;
    border: 1px solid #e3e7e8;
    border-right: 0;
    background-color: #ffffff;
    color: #000000;
    font-size: var(--kuc-user-org-group-select-font-size, 14px);
    line-height: 1.5;
    padding: 0 8px;
    margin: 0;
  }
  input[type=text].kuc-user-org-group-select-1-26-0__group__container__select-area__toggle__input:focus {
    outline: none;
    border: 1px solid #3498db;
    box-shadow: none;
  }
  input[type=text].kuc-user-org-group-select-1-26-0__group__container__select-area__toggle__input:disabled,
  .kuc-user-org-group-select-1-26-0__group__container__select-area__toggle__icon__button:disabled {
    background-color: #d4d7d7;
    box-shadow: none;
    cursor: not-allowed;
    color: #888888;
  }

  .kuc-user-org-group-select-1-26-0__group__container__select-area__toggle__icon__button {
    width: 40px;
    height: var(--kuc-user-org-group-select-toggle-height, 40px);
    display: flex;
    justify-content: center;
    margin: 0;
    padding: 0;
    border: none;
    border-left: 1px solid #e3e7e8;
    background-color: transparent;
    cursor: pointer;
  }
  .kuc-user-org-group-select-1-26-0__group__container__select-area__toggle__icon__button__svg {
    border: 1px solid #e3e7e8;
    border-left: none;
    background-color: #eeeeee;
    box-sizing: content-box;
  }
  .kuc-user-org-group-select-1-26-0__group__container__picker {
    margin-left: 8px;
  }
  .kuc-user-org-group-select-1-26-0__group__container__picker__button {
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    margin: 0;
    padding: 0;
    border: none;
    background-color: transparent;
    cursor: pointer;
  }
  .kuc-user-org-group-select-1-26-0__group__container__picker__button:disabled {
    cursor: not-allowed;
  }
  .kuc-user-org-group-select-1-26-0__group__container__select-area__select-menu {
    width: 100%;
    max-width: var(--kuc-user-org-group-select-toggle-width, 280px);
    padding: 0;
    border: none;
    box-sizing: border-box;
    background-color: #ffffff;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
    margin: 0;
    list-style: none;
  }
  .kuc-user-org-group-select-1-26-0__group__container__select-area__select-menu__item {
   border-bottom: 1px solid #e3e7e8;
   display: flex;
   background-color: #f7f9fa;
   flex-direction: row;
   cursor: pointer;
   box-sizing: border-box;
  }
  .kuc-user-org-group-select-1-26-0__group__container__select-area__select-menu__item--disabled,
  .kuc-user-org-group-select-1-26-0__group__container__select-area__select-menu__item--disabled[aria-selected="true"] {
    background-color: #d4d7d7;
    cursor: not-allowed;
    color: #888888;
  }
  .kuc-user-org-group-select-1-26-0__group__container__select-area__select-menu__item__highlight[role="option"] {
    background-color: #d8e1e6;
    flex-direction: row;
  }
  .kuc-user-org-group-select-1-26-0__group__container__select-area__select-menu__item__icon {
    min-width: 48px;
    width: 48px;
    height: 48px;
    display: flex;
    justify-content: center;
    align-self: center;
    margin: 0;
    padding: 0;
    background-color: transparent;
    cursor: pointer;
  }
  .kuc-user-org-group-select-1-26-0__group__container__select-area__select-menu__item__icon--disabled {
    background-color: #d4d7d7;
    box-shadow: none;
    cursor: not-allowed;
    color: #888888;
  }
  .kuc-user-org-group-select-1-26-0__group__container__select-area__select-menu__item__text {
    font-size: var(--kuc-user-org-group-select-font-size, 14px);
    line-height: normal;
    width: 100%;
    padding: 2px 12px;
    overflow: hidden;
    text-overflow: ellipsis;
    color: #3498db;
    align-content: center;
    white-space: nowrap;
  }
  .kuc-user-org-group-select-1-26-0__group__container__select-area__selected-list {
    padding: 0;
    margin: 0;
    list-style: none;
    width: 100%;
  }
  .kuc-user-org-group-select-1-26-0__group__container__select-area__selected-list__item {
    display: flex;
    flex-direction: row;
    border-bottom: 1px solid #e3e7e8;
    justify-content: space-between;
    align-items: center;
    margin-top: 8px;
  }
  .kuc-user-org-group-select-1-26-0__group__container__select-area__selected-list__item__content {
    display: flex;
    flex-direction: row;
    flex: 1;
    min-width: 0;
  }
  .kuc-user-org-group-select-1-26-0__group__container__select-area__selected-list__item__remove-icon,
  .kuc-user-org-group-select-1-26-0__group__container__select-area__selected-list__item__content__icon {
    width: 24px;
    height: 24px;
    flex-shrink: 0; 
    display: flex;
    align-items: center;
    justify-content: center;
    align-self: center;
  }
  .kuc-user-org-group-select-1-26-0__group__container__select-area__selected-list__item__remove-icon__button {
    border: none;
    background-color: transparent;
    width: 100%;
    height: 100%;
    display: flex;
    cursor: pointer;
    align-items: center;
    justify-content: center;
    flex: 0;
    flex-shrink: 0;
  }
  .kuc-user-org-group-select-1-26-0__group__container__select-area__selected-list__item__remove-icon__button:focus-within {
    border: 1px solid #3498db;
  }
  .kuc-user-org-group-select-1-26-0__group__container__select-area__selected-list__item__remove-icon__button:focus {
    outline: none;
  }
 .kuc-user-org-group-select-1-26-0__group__container__select-area__selected-list__item__content__text{
    padding: 2px 0 2px 8px;
    line-height: normal;
    align-content: center;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    flex: 1;
  }
  .kuc-user-org-group-select-1-26-0__group__container__select-area__selected-list__item__content__text--disabled {
    background-color: #d4d7d7;
    color: #888888;
  }
`,X=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},ml;(()=>{if(ml=window.customElements.get(`kuc-user-org-group-select-1-26-0`),ml)return;class e extends V{constructor(e){super(),this.className=``,this.error=``,this.icon=``,this.id=``,this.label=``,this.placeholder=``,this.disabled=!1,this.requiredIcon=!1,this.visible=!0,this.items=[],this.value=[],this._selectedValues=[],this._searchText=``,this._selectorVisible=!1,this._query=``,this._matchingItems=[],this._DISABLED_ITEM_CLASS=`kuc-user-org-group-select-1-26-0__group__container__select-area__select-menu__item--disabled`,this._DISABLED_ICON_CLASS=`kuc-user-org-group-select-1-26-0__group__container__select-area__select-menu__item__icon--disabled`,this._SMALL_ICON_SIZE=24,this._LARGE_ICON_SIZE=48,this._scrollTargets=[],this._GUID=W();let t=G(e);this._handleClickDocument=this._handleClickDocument.bind(this),this._handleScrollMenu=this._handleScrollMenu.bind(this),this._setMenuPosition=this._setMenuPosition.bind(this),this._actionResizeScrollWindow=this._actionResizeScrollWindow.bind(this),Object.assign(this,t)}shouldUpdate(e){if(e.has(`items`)){if(!K(this.items))return this.throwErrorAfterUpdateComplete(L.ITEMS.IS_NOT_ARRAY),!1;if(!rs(this.items.map(e=>e.value)))return this.throwErrorAfterUpdateComplete(L.ITEMS.IS_DUPLICATED),!1}return e.has(`value`)&&!K(this.value)?(this.throwErrorAfterUpdateComplete(L.VALUE.IS_NOT_ARRAY),!1):!0}render(){let e=this._getIconType();return j`
        <div class="kuc-user-org-group-select-1-26-0__group">
          <div
            class="kuc-user-org-group-select-1-26-0__group__label"
            id="${this._GUID}-label"
            ?hidden="${!this.label}"
          >
            <kuc-base-label-1-26-0
              .text="${this.label}"
              .requiredIcon="${this.requiredIcon}"
            ></kuc-base-label-1-26-0>
          </div>
          <div class="kuc-user-org-group-select-1-26-0__group__container">
            <div
              class="kuc-user-org-group-select-1-26-0__group__container__select-area"
            >
              <div
                class="kuc-user-org-group-select-1-26-0__group__container__select-area__toggle"
              >
                <input
                  class="kuc-user-org-group-select-1-26-0__group__container__select-area__toggle__input"
                  role="combobox"
                  type="text"
                  .value="${this._searchText}"
                  aria-haspopup="listbox"
                  aria-autocomplete="list"
                  aria-labelledby="${this._GUID}-label"
                  aria-controls="${this._GUID}-listbox"
                  aria-describedby="${this._GUID}-error"
                  aria-expanded="${this._selectorVisible}"
                  aria-required="${this.requiredIcon}"
                  placeholder="${this.placeholder}"
                  ?disabled="${this.disabled}"
                  @change="${this._handleChangeUserOrgGroupInput}"
                  @input="${this._handleInputUserOrgGroupInput}"
                  @keydown="${this._handleKeyDownUserOrgGroupInput}"
                  @click="${this._handleClickUserOrgGroupInput}"
                  @blur="${this._handleBlurUserOrgGroupInput}"
                />
                <div
                  class="kuc-user-org-group-select-1-26-0__group__container__select-area__toggle__icon"
                >
                  <button
                    class="kuc-user-org-group-select-1-26-0__group__container__select-area__toggle__icon__button"
                    tabindex="-1"
                    type="button"
                    aria-label="search"
                    aria-controls="${this._GUID}-listbox"
                    aria-expanded="${this._selectorVisible}"
                    ?disabled="${this.disabled}"
                    @mousedown="${this._handleMouseDownToggleButton}"
                    @click="${this._handleClickToggleButton}"
                  >
                    ${this._getSearchPickerSvgTemplate()}
                  </button>
                </div>
              </div>
              <ul
                id="${this._GUID}-listbox"
                popover="manual"
                class="kuc-user-org-group-select-1-26-0__group__container__select-area__select-menu"
                role="listbox"
                aria-labelledby="${this._GUID}-label"
                aria-hidden="${!this._selectorVisible}"
                @mouseleave="${this._handleMouseLeaveMenu}"
                @mousedown="${this._handleMouseDownMenu}"
              >
                ${this._matchingItems.map((e,t)=>this._getMatchedItemTemplate(e,t))}
              </ul>
              <ul
                class="kuc-user-org-group-select-1-26-0__group__container__select-area__selected-list"
              >
                ${this._selectedValues.map((e,t)=>this._getSelectedItemTemplate(e,t))}
              </ul>
            </div>
            <div
              class="kuc-user-org-group-select-1-26-0__group__container__picker"
              ?hidden="${!e}"
            >
              <button
                class="kuc-user-org-group-select-1-26-0__group__container__picker__button"
                tabindex="-1"
                type="button"
                ?disabled="${this.disabled}"
                @click="${this._handleClickIconButton}"
              >
                ${this._getPickerSVGTemplateByIcon(e)}
              </button>
            </div>
          </div>
          <kuc-base-error-1-26-0
            .text="${this.error}"
            .guid="${this._GUID}"
            ?hidden="${!this.error}"
            ariaLive="assertive"
          ></kuc-base-error-1-26-0>
        </div>
      `}_getIconType(){if(this.icon===`user`||this.icon===`org`||this.icon===`group`)return this.icon}disconnectedCallback(){this._detachListeners(),super.disconnectedCallback()}_actionResizeScrollWindow(){!this._timeoutID&&this._selectorVisible&&(this._timeoutID=window.setTimeout(()=>{this._timeoutID=null,this._setMenuPosition()},50))}async updated(e){super.updated(e),await this.updateComplete,e.has(`value`)&&this._initializeSelectedValues(),this._selectorVisible&&this._actionClearAllHighlightMenuItem()}_initializeSelectedValues(){Array.isArray(this.value)&&(this._selectedValues=this.value.filter(e=>this.items.some(t=>t.value===e)))}_getMatchedItemTemplate(e,t){let n=e.label===void 0||e.label===null?e.value:e.label,r=j`${n}`,i=e.disabled,a=this._query.trim().toLowerCase();if(a&&n){let e=n.toLowerCase().indexOf(a),t=e+a.length;r=j`
          ${n.slice(0,e)}<b>${n.slice(e,t)}</b>${n.slice(t)}
        `}return j`
        <li
          class="kuc-user-org-group-select-1-26-0__group__container__select-area__select-menu__item ${i?this._DISABLED_ITEM_CLASS:``}"
          role="option"
          value="${e.value===void 0?``:e.value}"
          id="${this._GUID}-menuitem-${t}"
          @click="${i?null:this._handleClickUserOrgGroupItem}"
          @mouseover="${i?null:this._handleMouseOverUserOrgGroupItem}"
        >
          <div
            class="kuc-user-org-group-select-1-26-0__group__container__select-area__select-menu__item__icon ${i?this._DISABLED_ICON_CLASS:``}"
          >
            ${this._getSvgTemplateByType(e?e.type:``)}
          </div>
          <div
            class="kuc-user-org-group-select-1-26-0__group__container__select-area__select-menu__item__text"
          >
            ${r}
          </div>
        </li>
      `}_getSelectedItemTemplate(e,t){let n=this.items.filter(t=>t.value===e)[0];if(!n)return``;let r=n?.disabled,i=n.label===void 0||n.label===null?n.value:n.label;return j`
        <li
          class="kuc-user-org-group-select-1-26-0__group__container__select-area__selected-list__item"
          value="${e}"
          id="${this._GUID}-selected-item-${t}"
        >
          <div
            class="kuc-user-org-group-select-1-26-0__group__container__select-area__selected-list__item__content"
          >
            <div
              class="kuc-user-org-group-select-1-26-0__group__container__select-area__selected-list__item__content__icon"
            >
              ${this._getSvgTemplateByType(n.type||``,this._SMALL_ICON_SIZE)}
            </div>
            <div
              class="kuc-user-org-group-select-1-26-0__group__container__select-area__selected-list__item__content__text ${r?`kuc-user-org-group-select-1-26-0__group__container__select-area__selected-list__item__content__text--disabled`:``}"
            >
              ${i}
            </div>
          </div>
          <div
            class="kuc-user-org-group-select-1-26-0__group__container__select-area__selected-list__item__remove-icon"
            ?hidden="${this.disabled}"
          >
            <button
              class="kuc-user-org-group-select-1-26-0__group__container__select-area__selected-list__item__remove-icon__button"
              type="button"
              aria-label="remove"
              selected-item-index="${t}"
              @click="${this._handleClickRemoveSelectedItem}"
            >
              ${this._getRemoveSVGTemplate()}
            </button>
          </div>
        </li>
      `}_handleChangeUserOrgGroupInput(e){e.stopPropagation()}_handleInputUserOrgGroupInput(e){e.stopPropagation(),this._searchText=this._inputEl.value,this._query=this._inputEl.value,this._setMatchingItems()}_handleClickUserOrgGroupInput(e){e.stopPropagation(),this._inputEl.select(),this._setMatchingItems()}_handleBlurUserOrgGroupInput(e){let t=e.relatedTarget;t&&(this._toggleEl.contains(t)||this._menuEl&&this._menuEl.contains(t))||this._resetToggleInputValue()}_handleKeyDownUserOrgGroupInput(e){switch(e.key){case`Up`:case`ArrowUp`:if(e.preventDefault(),!this._selectorVisible){this._actionShowMenu();break}this._actionHighlightPrevMenuItem();break;case`Tab`:this._selectorVisible&&this._actionHideMenu();break;case`Down`:case`ArrowDown`:if(e.preventDefault(),!this._selectorVisible){this._actionShowMenu();break}this._actionHighlightNextMenuItem();break;case`Enter`:{e.preventDefault();let t=this._highlightItemEl;if(t===null)break;let n=t.getAttribute(`value`);this._actionUpdateValue(n),this._actionHideMenu();break}case`Escape`:e.preventDefault(),this._selectorVisible&&e.stopPropagation(),this._resetToggleInputValue(),this._actionHideMenu();break;case`Home`:this._selectorVisible&&(e.preventDefault(),this._actionHighlightFirstMenuItem());break;case`End`:this._selectorVisible&&(e.preventDefault(),this._actionHighlightLastMenuItem())}}_resetToggleInputValue(){this._searchText=``,this._query=``}_actionHighlightPrevMenuItem(){let e=null;this._highlightItemEl!==null&&(e=this._highlightItemEl.previousElementSibling),e===null&&(e=this._lastItemEl);let t=!1;for(let n=0;n<this._matchingItems.length&&(t=e.classList.contains(this._DISABLED_ITEM_CLASS),t);n++)e=e.previousElementSibling,e===null&&(e=this._lastItemEl);!t&&this._setHighlightAndActiveDescendantMenu(e)}_actionHighlightNextMenuItem(){let e=null;this._highlightItemEl!==null&&(e=this._highlightItemEl.nextElementSibling),e===null&&(e=this._firstItemEl);let t=!1;for(let n=0;n<this._matchingItems.length&&(t=e.classList.contains(this._DISABLED_ITEM_CLASS),t);n++)e=e.nextElementSibling,e===null&&(e=this._firstItemEl);!t&&this._setHighlightAndActiveDescendantMenu(e)}_setHighlightAndActiveDescendantMenu(e){this._actionHighlightMenuItem(e),this._actionSetActiveDescendant(e.id),this._scrollToView()}_actionSetActiveDescendant(e){e!==void 0&&this._inputEl!==null&&this._inputEl.setAttribute(`aria-activedescendant`,e)}_actionRemoveActiveDescendant(){this._inputEl.removeAttribute(`aria-activedescendant`)}_setMenuPosition(){this._menuEl&&this._toggleEl&&(this._setMenuPositionAboveOrBelow(this._menuEl,this._toggleEl),this._setMenuPositionLeftOrRight(this._menuEl,this._toggleEl))}_handleClickRemoveSelectedItem(e){let t=e.currentTarget,n=parseInt(t.getAttribute(`selected-item-index`)||`-1`,10),r=this._selectedValues.filter((e,t)=>t!==n),i=this.value;this._selectedValues=r,this.value=r;let a={oldValue:i,value:this.value};H(this,`change`,a)}_handleClickToggleButton(e){e.preventDefault(),this._inputEl.focus();let t=this._inputEl.value.length;this._inputEl.setSelectionRange(t,t),this._setMatchingItems(),this._actionShowMenu()}_handleMouseDownToggleButton(e){e.preventDefault()}_handleClickIconButton(e){e.preventDefault();let t={value:this.value};H(this,`click-picker-icon`,t)}_setMenuPositionAboveOrBelow(e,t){let n=t.getBoundingClientRect(),r=n.top,i=window.innerHeight;window.innerHeight>document.documentElement.clientHeight&&(i=document.documentElement.clientHeight);let a=i-n.bottom;e.style.height=`auto`,e.style.maxHeight=`none`,e.style.top=`auto`,e.style.bottom=`auto`;let o=e.getBoundingClientRect().height;e.style.maxHeight=`var(--kuc-user-org-group-select-menu-max-height, none)`;let s=getComputedStyle(e).maxHeight,c;s&&s!==`none`&&(c=parseFloat(s));let l=c?Math.min(o,c):o,u,d;a>=l?(u=n.bottom,d=l):r>=l?(u=n.top-l,d=l):a>=r?(u=n.bottom,d=a):(u=n.top-r,d=r),e.style.position=`fixed`;let f=`${u}px`;e.style.top!==f&&(e.style.top=f);let p=`${d}px`;e.style.height!==p&&(e.style.height=p),e.style.overflowY=`auto`,e.style.overflowX=`hidden`,this._menuEl&&this._previousScrollTop&&(this._menuEl.scrollTop=this._previousScrollTop)}_setMenuPositionLeftOrRight(e,t){e.style.right=`auto`;let n=e.offsetWidth,r=t.getBoundingClientRect(),i=window.innerWidth;window.innerWidth>document.documentElement.clientWidth&&(i=document.documentElement.clientWidth);let a=r.left;i<r.right&&i>r.left&&(a=i-n);let o=`${a}px`;e.style.left!==o&&(e.style.left=o)}_scrollToView(){if(!this._highlightItemEl||!this._menuEl)return;let e=this._menuEl.getBoundingClientRect(),t=this._highlightItemEl.getBoundingClientRect();t.top<e.top&&(this._menuEl.scrollTop-=e.top-t.top),e.bottom<t.bottom&&(this._menuEl.scrollTop+=t.bottom-e.bottom)}_actionHighlightFirstMenuItem(){let e=this._firstItemEl,t=!1;for(let n=0;n<this._matchingItems.length&&(t=e.classList.contains(this._DISABLED_ITEM_CLASS),t);n++)e=e.nextElementSibling;!t&&this._setHighlightAndActiveDescendantMenu(e)}_actionHighlightLastMenuItem(){let e=this._lastItemEl,t=!1;for(let n=0;n<this._matchingItems.length&&(t=e.classList.contains(this._DISABLED_ITEM_CLASS),t);n++)e=e.previousElementSibling;!t&&this._setHighlightAndActiveDescendantMenu(e)}_setMatchingItems(){let e=this.items.filter(e=>{let t=new RegExp((e=>e.replace(/[.*+?^=!:${}()|[\]/\\]/g,`\\$&`))(this._query.trim()),`gi`);return e.label?t.test(e.label):e.value?t.test(e.value):!1});e.length===0?(this._matchingItems=[],this._actionHideMenu()):(this._matchingItems=e,this._actionShowMenu())}async _actionShowMenu(){this._query.trim()===``&&(this._matchingItems=this.items),this.items.length!==0&&this._matchingItems.length!==0&&(this._inputEl.focus(),this._selectorVisible=!0,this._menuEl.showPopover(),await this.updateComplete,this._menuEl&&this._toggleEl&&(this._setMenuPosition(),this._attachListeners()))}_handleMouseOverUserOrgGroupItem(e){let t=this._getItemElementWhenMouseOverDown(e.target);this._actionHighlightMenuItem(t)}_actionHighlightMenuItem(e){this._actionClearAllHighlightMenuItem(),e.setAttribute(`aria-selected`,`true`),e.classList.add(`kuc-user-org-group-select-1-26-0__group__container__select-area__select-menu__item__highlight`)}_handleClickUserOrgGroupItem(e){let t=this._getItemElementWhenMouseOverDown(e.target).getAttribute(`value`);this._actionUpdateValue(t)}_actionUpdateValue(e){if(this._selectedValues.includes(e)){this._resetToggleInputValue();return}let t=this.value,n=[...this._selectedValues,e];this._selectedValues=n,this.value=n;let r={oldValue:t,value:this.value};this._query=``,H(this,`change`,r),this._resetToggleInputValue()}_getItemElementWhenMouseOverDown(e){return e.classList.value.split(` `).includes(`kuc-user-org-group-select-1-26-0__group__container__select-area__select-menu__item`)?e:this._getItemElementWhenMouseOverDown(e.parentElement)}_handleMouseLeaveMenu(){this._actionClearAllHighlightMenuItem()}_actionClearAllHighlightMenuItem(){this._itemsEl.forEach(e=>{e.setAttribute(`aria-selected`,`false`),e.classList.remove(`kuc-user-org-group-select-1-26-0__group__container__select-area__select-menu__item__highlight`)}),this._actionRemoveActiveDescendant()}_handleMouseDownMenu(e){e.preventDefault()}_handleClickDocument(e){e.target===this._toggleEl||this._toggleEl.contains(e.target)||Array.from(this._disabledItemsEl).some(t=>t===e.target||t.contains(e.target))||this._actionHideMenu()}_handleScrollMenu(){this._previousScrollTop=this._menuEl.scrollTop}_attachListeners(){this._detachListeners(),this._scrollTargets=this._getScrollableAncestors(this._toggleEl);for(let e of this._scrollTargets)e.addEventListener(`scroll`,this._setMenuPosition,{passive:!0});this._menuEl.addEventListener(`scroll`,this._handleScrollMenu),window.addEventListener(`resize`,this._actionResizeScrollWindow),document.addEventListener(`click`,this._handleClickDocument,{capture:!0})}_detachListeners(){var e;for(let e of this._scrollTargets)e.removeEventListener(`scroll`,this._setMenuPosition);this._scrollTargets=[],(e=this._menuEl)==null||e.removeEventListener(`scroll`,this._handleScrollMenu),window.removeEventListener(`resize`,this._actionResizeScrollWindow),document.removeEventListener(`click`,this._handleClickDocument,{capture:!0})}_getScrollableAncestors(e){let t=[],n=e.parentElement,r=/(auto|scroll|overlay)/;for(;n&&n!==document.body&&n!==document.documentElement;){let e=getComputedStyle(n);(r.test(e.overflowY)||r.test(e.overflowX))&&t.push(n),n=n.parentElement}return t.push(window),t}_actionHideMenu(){this._selectorVisible=!1,this._menuEl.hidePopover(),this._detachListeners(),this._actionRemoveActiveDescendant()}_getPickerSVGTemplateByIcon(e){if(!e)return``;switch(e){case`user`:return this._getUserPickerSvgTemplate();case`org`:return this._getOrgPickerSvgTemplate();case`group`:return this._getGroupPickerSvgTemplate();default:return``}}_getSvgTemplateByType(e,t=this._LARGE_ICON_SIZE){if(!e)return``;switch(e){case`user`:return this._getUserSvgTemplate(t);case`org`:return this._getOrgSvgTemplate(t);case`group`:return this._getGroupSvgTemplate(t);default:return``}}_getUserPickerSvgTemplate(){return M`
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_11108_7820)">
            <path d="M40 0H0V40H40V0Z" fill="#3498db"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M30.7952 29.5014C30.6103 29.1232 29.0893 28.2243 26.4523 27.2194C26.3083 27.1766 26.1685 27.121 26.0346 27.0532C24.9881 26.7068 23.9606 26.3054 22.9564 25.8507L22.8145 25.7719C22.1496 25.3286 22.0013 24.4536 22.0017 22.7937C22.0235 22.0583 22.2846 21.3509 22.7443 20.7784C23.1224 20.1551 23.3587 19.4542 23.4442 18.6661C23.5273 18.1843 23.7029 17.7231 23.923 17.3756C24.1192 16.9983 24.2545 16.5924 24.3239 16.1729L24.3601 16.0255C24.4067 15.883 24.4067 15.7294 24.3636 15.5974C24.2774 15.3437 24.2123 15.0833 24.1689 14.8188L24.1456 14.6767L24.1635 14.5338C24.2604 13.7586 24.3379 13.1224 24.4059 12.5811C24.4211 11.6974 24.0911 10.8425 23.4802 10.1922C22.6022 9.24161 21.3353 8.74834 20.0457 8.85492L19.8783 8.85466C18.5907 8.74424 17.3242 9.23383 16.4373 10.1905C15.8303 10.8294 15.5009 11.6826 15.5145 12.4708C15.5459 12.7398 15.576 13.0061 15.634 13.5218C15.6816 13.9435 15.7157 14.2344 15.7516 14.5219L15.7676 14.6495L15.7506 14.7771C15.7126 15.063 15.6424 15.3438 15.5603 15.5586C15.5129 15.7122 15.5129 15.8764 15.5603 16.03L15.5883 16.1448C15.6658 16.5693 15.8109 16.9785 16.0232 17.367C16.2479 17.789 16.3905 18.2498 16.4437 18.7267C16.5233 19.4513 16.7617 20.1491 17.1417 20.7705C17.6108 21.3382 17.8822 22.0458 17.9138 22.8232V23.1366C17.9893 23.859 17.8735 24.5889 17.5774 25.253L17.4666 25.5013L17.2451 25.6591C16.6349 26.0939 15.9497 26.4124 15.3008 26.5755L13.5299 27.1849C10.7007 28.2494 9.16333 29.179 9.1108 29.4241C9.05833 29.8816 9.02367 30.3408 9.00687 30.8007H30.8764L30.7952 29.5014ZM26.7379 25.1844L26.9153 25.2625C26.9487 25.2812 26.984 25.2961 27.0908 25.3307C30.6256 26.674 32.4548 27.7827 32.7559 29.1001L32.779 29.2601L33 32.7957H7.02157L7.00338 31.8168C6.98712 30.9416 7.02899 30.0664 7.14161 29.1148C7.4095 27.7754 9.24475 26.6656 12.8538 25.3081L14.7282 24.6661C15.1234 24.5647 15.5007 24.405 15.8479 24.1926C15.9346 23.9083 15.9615 23.6082 15.9259 23.3111L15.9187 23.1922L15.9196 22.8648C15.9065 22.551 15.787 22.251 15.5807 22.0142L15.4891 21.8909C14.9273 20.9994 14.5756 19.9919 14.4608 18.9462C14.4357 18.7217 14.3683 18.5039 14.2675 18.3144C13.967 17.765 13.754 17.1722 13.6359 16.5575C13.4886 16.0383 13.4952 15.4851 13.6727 14.9152C13.7077 14.8215 13.735 14.7251 13.7544 14.6271C13.7234 14.3744 13.6923 14.1065 13.6515 13.7459C13.5934 13.229 13.5638 12.9668 13.5264 12.6091C13.4943 11.2011 14.0208 9.83752 14.9825 8.82527C16.2601 7.44706 18.0936 6.7253 19.965 6.86029C21.8377 6.73098 23.6699 7.4573 24.94 8.83235C25.9008 9.85515 26.4248 11.2124 26.3941 12.7139C26.3238 13.3167 26.2511 13.9157 26.1624 14.6273C26.1861 14.739 26.217 14.8509 26.2561 14.9661C26.4263 15.4861 26.4344 16.0449 26.2802 16.5686C26.1732 17.1707 25.9739 17.7555 25.6547 18.3632C25.5325 18.5594 25.4495 18.7773 25.4192 18.9406C25.3084 19.9869 24.9615 20.9944 24.4046 21.887L24.321 22.002C24.1197 22.2407 24.0052 22.5405 23.9964 22.8232C23.9964 23.3728 24.0234 23.8066 24.0731 24.0998C24.953 24.5507 25.838 24.8892 26.7379 25.1844Z" fill="white"/>
          </g>
          <defs>
            <clipPath">
              <rect width="40" height="40" fill="white"/>
            </clipPath>
          </defs>
        </svg>`}_getOrgPickerSvgTemplate(){return M`
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="0.5" y="0.5" width="39" height="39" fill="#3498db"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M15 7V14H25V7H15ZM13 5H27V16H21V19H27V21V23H36V34H22V23H25V21H15V23H18V34H4V23H13V21V19H19V16H13V5ZM6 25V32H16V25H6ZM24 32V25H34V32H24Z" fill="white"/>
        </svg>`}_getGroupPickerSvgTemplate(){return M`
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="0.5" y="0.5" width="39" height="39" fill="#3498db"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M12.6551 24.1065C12.3317 23.9525 12.0125 23.7844 11.698 23.6024L11.6295 23.5538C11.3087 23.2805 11.2372 22.741 11.2374 21.7176C11.2479 21.2643 11.3739 20.8281 11.5956 20.4752C11.778 20.0909 11.892 19.6587 11.9333 19.1728C11.9734 18.8758 12.0581 18.5915 12.1643 18.3772C12.2589 18.1446 12.3242 17.8943 12.3577 17.6357L12.3751 17.5448C12.3976 17.457 12.3976 17.3623 12.3768 17.2809C12.3352 17.1245 12.3038 16.9639 12.2829 16.8009L12.2717 16.7132L12.2803 16.6251C12.3034 16.3892 12.3242 16.1742 12.3433 15.9768C12.3628 15.7742 12.3806 15.5902 12.3973 15.4212C12.4046 14.8764 12.2454 14.3493 11.9507 13.9484C11.5271 13.3623 10.9159 13.0582 10.2937 13.1239L10.213 13.1237C9.59178 13.0557 8.98076 13.3575 8.55289 13.9473C8.26007 14.3412 8.10115 14.8673 8.10773 15.3532C8.12287 15.5191 8.13739 15.6833 8.16535 16.0012C8.18835 16.2612 8.20477 16.4405 8.22211 16.6178L8.2298 16.6965L8.22163 16.7751C8.20329 16.9514 8.16943 17.1245 8.1298 17.2569C8.10695 17.3516 8.10695 17.4529 8.1298 17.5476L8.14334 17.6184C8.18073 17.8801 8.25069 18.1324 8.35314 18.3719C8.46153 18.6321 8.53033 18.9162 8.55601 19.2102C8.5944 19.6569 8.70942 20.0871 8.89274 20.4703C9.11905 20.8203 9.24997 21.2565 9.26522 21.7358V21.929C9.30165 22.3744 9.24576 22.8245 9.10291 23.2339L9.04949 23.387L8.94263 23.4843C8.64824 23.7523 8.31767 23.9487 8.00464 24.0493L7.15028 24.425C5.78535 25.0813 5.04368 25.6544 5.01834 25.8055C4.99303 26.0876 4.97631 26.3707 4.9682 26.6542H8.03855C7.71232 27.0377 7.44846 27.4499 7.2567 27.8843H4.01041L4.00163 27.2807C3.99378 26.7411 4.01399 26.2015 4.06832 25.6149C4.19756 24.789 5.08295 24.1048 6.82411 23.2679L7.72834 22.8721C7.91901 22.8096 8.10105 22.7111 8.26854 22.5802C8.31037 22.4049 8.32337 22.2198 8.30616 22.0367L8.30272 21.9633L8.30314 21.7615C8.29682 21.568 8.23916 21.3831 8.13966 21.2371L8.09543 21.1611C7.82441 20.6114 7.65474 19.9902 7.59936 19.3456C7.58726 19.2071 7.55474 19.0729 7.5061 18.956C7.36114 18.6173 7.25836 18.2518 7.2014 17.8728C7.13032 17.5527 7.13353 17.2117 7.21915 16.8603C7.23605 16.8025 7.24922 16.7431 7.25854 16.6827C7.24361 16.5269 7.22861 16.3617 7.20894 16.1394L7.20467 16.0909C7.17941 15.8037 7.16568 15.6476 7.14859 15.4385C7.1331 14.5704 7.38708 13.7297 7.85104 13.1057C8.4674 12.2559 9.35196 11.811 10.2548 11.8942C11.1582 11.8144 12.0422 12.2623 12.6549 13.11C13.1184 13.7406 13.3712 14.5774 13.3564 15.5031C13.3225 15.8748 13.2874 16.2441 13.2446 16.6828C13.2561 16.7517 13.271 16.8206 13.2898 16.8917C13.372 17.2123 13.3758 17.5568 13.3015 17.8797C13.2498 18.2509 13.1537 18.6115 12.9997 18.9861C12.9408 19.1071 12.9007 19.2414 12.8861 19.3421C12.8326 19.9872 12.6653 20.6083 12.3966 21.1587L12.3563 21.2296C12.2592 21.3768 12.2039 21.5616 12.1997 21.7358C12.1997 22.0747 12.2127 22.3422 12.2367 22.5229C12.6612 22.8009 13.0881 23.0096 13.5223 23.1916L13.6079 23.2398C13.624 23.2513 13.641 23.2605 13.6925 23.2818C14.0991 23.4793 14.4589 23.6685 14.773 23.8532C14.0381 23.873 13.328 23.9604 12.6551 24.1065Z" fill="white"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M27.3449 24.1065C27.6683 23.9525 27.9875 23.7844 28.302 23.6024L28.3705 23.5538C28.6913 23.2805 28.7628 22.741 28.7626 21.7176C28.7521 21.2643 28.6261 20.8281 28.4044 20.4752C28.222 20.0909 28.108 19.6587 28.0667 19.1728C28.0266 18.8758 27.9419 18.5915 27.8357 18.3772C27.7411 18.1446 27.6758 17.8943 27.6423 17.6357L27.6249 17.5448C27.6024 17.457 27.6024 17.3623 27.6232 17.2809C27.6648 17.1245 27.6962 16.9639 27.7171 16.8009L27.7283 16.7132L27.7197 16.6251C27.6966 16.3892 27.6758 16.1742 27.6567 15.9768C27.6372 15.7742 27.6194 15.5902 27.6027 15.4212C27.5954 14.8764 27.7546 14.3493 28.0493 13.9484C28.4729 13.3623 29.0841 13.0582 29.7063 13.1239L29.787 13.1237C30.4082 13.0557 31.0192 13.3575 31.4471 13.9473C31.7399 14.3412 31.8989 14.8673 31.8923 15.3532C31.8771 15.5191 31.8626 15.6833 31.8346 16.0012C31.8117 16.2612 31.7952 16.4405 31.7779 16.6178L31.7702 16.6965L31.7784 16.7751C31.7967 16.9514 31.8306 17.1245 31.8702 17.2569C31.8931 17.3516 31.8931 17.4529 31.8702 17.5476L31.8567 17.6184C31.8193 17.8801 31.7493 18.1324 31.6469 18.3719C31.5385 18.6321 31.4697 18.9162 31.444 19.2102C31.4056 19.6569 31.2906 20.0871 31.1073 20.4703C30.8809 20.8203 30.75 21.2565 30.7348 21.7358V21.9291C30.6983 22.3744 30.7542 22.8245 30.8971 23.2339L30.9505 23.387L31.0574 23.4843C31.3518 23.7523 31.6823 23.9487 31.9954 24.0493L32.8497 24.425C34.2146 25.0813 34.9563 25.6544 34.9817 25.8055C35.007 26.0876 35.0237 26.3707 35.0318 26.6542H31.9614C32.2877 27.0377 32.5515 27.4499 32.7433 27.8843H35.9896L35.9984 27.2807C36.0062 26.7411 35.986 26.2015 35.9317 25.6149C35.8024 24.789 34.9171 24.1048 33.1759 23.2679L32.2717 22.8721C32.081 22.8096 31.8989 22.7111 31.7315 22.5802C31.6896 22.4049 31.6766 22.2198 31.6938 22.0367L31.6973 21.9633L31.6969 21.7615C31.7032 21.568 31.7608 21.3831 31.8603 21.2371L31.9046 21.1611C32.1756 20.6114 32.3453 19.9902 32.4006 19.3456C32.4127 19.2071 32.4453 19.0729 32.4939 18.956C32.6389 18.6173 32.7416 18.2518 32.7986 17.8728C32.8697 17.5527 32.8665 17.2117 32.7809 16.8603C32.7639 16.8025 32.7508 16.7431 32.7415 16.6827C32.7564 16.5269 32.7714 16.3617 32.7911 16.1394L32.7953 16.0911C32.8206 15.8038 32.8343 15.6476 32.8514 15.4385C32.8669 14.5704 32.6129 13.7297 32.149 13.1057C31.5326 12.2559 30.648 11.811 29.7452 11.8942C28.8418 11.8144 27.9578 12.2623 27.3451 13.11C26.8816 13.7406 26.6288 14.5774 26.6436 15.5031C26.6775 15.8748 26.7126 16.2441 26.7554 16.6828C26.7439 16.7517 26.729 16.8206 26.7102 16.8917C26.628 17.2123 26.6242 17.5568 26.6985 17.8797C26.7502 18.2509 26.8463 18.6115 27.0003 18.9861C27.0592 19.1071 27.0993 19.2414 27.1139 19.3421C27.1674 19.9872 27.3347 20.6083 27.6034 21.1587L27.6437 21.2296C27.7408 21.3768 27.7961 21.5616 27.8003 21.7358C27.8003 22.0747 27.7873 22.3422 27.7633 22.5229C27.3388 22.8009 26.9119 23.0096 26.4777 23.1916L26.3921 23.2398C26.376 23.2513 26.359 23.2605 26.3075 23.2818C25.9009 23.4793 25.5411 23.6685 25.227 23.8532C25.9619 23.873 26.672 23.9604 27.3449 24.1065Z" fill="white"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M30.8186 29.5726C30.6403 29.1791 29.1727 28.2439 26.6283 27.1984C26.4894 27.1538 26.3545 27.096 26.2253 27.0255C25.2156 26.665 24.2242 26.2474 23.2552 25.7743L23.1183 25.6924C22.4767 25.2312 22.3337 24.3208 22.3341 22.5938C22.3551 21.8288 22.6071 21.0928 23.0506 20.4972C23.4154 19.8487 23.6434 19.1194 23.7259 18.2995C23.8061 17.7982 23.9756 17.3184 24.1879 16.9569C24.3772 16.5643 24.5077 16.142 24.5748 15.7056L24.6096 15.5522C24.6546 15.404 24.6546 15.2441 24.613 15.1068C24.5298 14.8429 24.467 14.5719 24.4252 14.2968L24.4027 14.1489L24.4199 14.0002C24.5134 13.1937 24.5882 12.5318 24.6538 11.9686C24.6685 11.0492 24.3501 10.1598 23.7607 9.4832C22.9135 8.49423 21.6911 7.98104 20.4468 8.09191L20.2853 8.09164C19.0429 7.97677 17.8209 8.48614 16.9651 9.48141C16.3795 10.1462 16.0616 11.0338 16.0748 11.8539C16.1051 12.1338 16.1341 12.4109 16.19 12.9474C16.236 13.3861 16.2689 13.6887 16.3036 13.9879L16.3189 14.1207L16.3026 14.2533C16.2659 14.5508 16.1982 14.8429 16.1189 15.0664C16.0732 15.2262 16.0732 15.3971 16.1189 15.5569L16.146 15.6764C16.2208 16.1179 16.3607 16.5437 16.5656 16.9479C16.7824 17.3869 16.92 17.8663 16.9714 18.3625C17.0481 19.1164 17.2782 19.8424 17.6448 20.4889C18.0975 21.0795 18.3593 21.8157 18.3898 22.6245V22.9506C18.4626 23.7022 18.3509 24.4616 18.0652 25.1525L17.9583 25.4109L17.7446 25.5751C17.1558 26.0274 16.4947 26.3587 15.8686 26.5284L14.1599 27.1625C11.43 28.27 9.94671 29.2372 9.89602 29.4921C9.8454 29.9681 9.81195 30.4459 9.79575 30.9243H30.897L30.8186 29.5726ZM26.9039 25.0812L27.0751 25.1624C27.1073 25.1818 27.1413 25.1974 27.2444 25.2334C30.6551 26.6309 32.42 27.7844 32.7105 29.155L32.7328 29.3215L32.946 33H7.88019L7.86263 31.9814C7.84694 31.071 7.88735 30.1603 7.99601 29.1703C8.25449 27.7768 10.0253 26.6222 13.5076 25.2099L15.3161 24.5419C15.6974 24.4364 16.0615 24.2702 16.3964 24.0493C16.4801 23.7535 16.5061 23.4412 16.4717 23.1322L16.4648 23.0084L16.4657 22.6678C16.453 22.3413 16.3377 22.0292 16.1387 21.7828L16.0502 21.6546C15.5082 20.7271 15.1689 19.6788 15.0581 18.5909C15.0339 18.3573 14.9689 18.1307 14.8716 17.9335C14.5817 17.3619 14.3761 16.7453 14.2622 16.1057C14.12 15.5655 14.1264 14.99 14.2977 14.3971C14.3315 14.2996 14.3578 14.1993 14.3765 14.0973C14.3466 13.8344 14.3166 13.5557 14.2773 13.1805C14.2212 12.6427 14.1926 12.37 14.1566 11.9978C14.1256 10.5328 14.6335 9.11422 15.5614 8.06107C16.7942 6.62717 18.5633 5.87626 20.369 6.0167C22.1758 5.88217 23.9437 6.63783 25.1692 8.06843C26.0962 9.13255 26.6019 10.5446 26.5722 12.1068C26.5043 12.734 26.4342 13.3572 26.3486 14.0975C26.3715 14.2138 26.4013 14.3301 26.439 14.45C26.6033 14.991 26.6111 15.5724 26.4623 16.1172C26.3591 16.7437 26.1668 17.3521 25.8588 17.9844C25.7409 18.1884 25.6608 18.4152 25.6315 18.5851C25.5247 19.6736 25.1899 20.7218 24.6526 21.6506L24.5719 21.7702C24.3777 22.0186 24.2672 22.3305 24.2587 22.6245C24.2587 23.1963 24.2848 23.6477 24.3327 23.9527C25.1817 24.4218 26.0357 24.774 26.9039 25.0812Z" fill="white"/>
        </svg>`}_getSearchPickerSvgTemplate(){return M`
        <svg width="38" height="38" viewBox="-8 -8 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" class="kuc-user-org-group-select-1-26-0__group__container__select-area__toggle__icon__button__svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M15.1034 16.5176C11.5697 19.3478 6.3971 19.125 3.12139 15.8493C-0.393328 12.3346 -0.393328 6.63611 3.12139 3.12139C6.63611 -0.393328 12.3346 -0.393328 15.8493 3.12139C18.878 6.15005 19.2968 10.8002 17.1058 14.2774L23.6275 20.7991L21.5062 22.9204L15.1034 16.5176ZM13.728 5.24271C16.0711 7.58586 16.0711 11.3848 13.728 13.728C11.3848 16.0711 7.58586 16.0711 5.24271 13.728C2.89957 11.3848 2.89957 7.58586 5.24271 5.24271C7.58586 2.89957 11.3848 2.89957 13.728 5.24271Z" fill="#888888"/>
        </svg>`}_getRemoveSVGTemplate(){return M`
      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_11108_7852)">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M4.8999 5.96056L0.930232 1.99089L0.399902 1.46056L1.46056 0.399902L1.99089 0.930232L5.96056 4.8999L9.93023 0.930232L10.4606 0.399902L11.5212 1.46056L10.9909 1.99089L7.02122 5.96056L10.9909 9.93023L11.5212 10.4606L10.4606 11.5212L9.93023 10.9909L5.96056 7.02122L1.99089 10.9909L1.46056 11.5212L0.399902 10.4606L0.930233 9.93023L4.8999 5.96056Z" fill="#3498db"/>
        </g>
        <defs>
          <clipPath>
            <rect width="12" height="12" fill="white"/>
          </clipPath>
        </defs>
      </svg>
      `}_getUserSvgTemplate(e){return M`
        <svg width="${e}" height="${e}" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_11108_7825)">
            <path d="M32.5866 -0.521484H-0.586548V32.6516H32.5866V-0.521484Z" fill="#717272"/>
            <path d="M15.9413 5.64404C18.4049 5.64404 20.6468 8.02938 20.6077 11.4053C20.5686 14.7552 19.2 15.407 18.4309 16.8278C18.1442 17.3622 18.066 19.0306 18.6134 19.3565C21.1291 20.8815 23.5926 22.0416 25.6912 23.2669C26.6167 23.8143 26.747 24.9483 26.747 25.7174C25.0525 25.7174 20.4774 25.7174 15.9413 25.7174C11.4053 25.7174 6.83012 25.7174 5.13562 25.7174C5.13562 24.9483 5.26597 23.8143 6.19142 23.2669C8.29 22.0416 10.7535 20.8815 13.2692 19.3565C13.8167 19.0306 13.7385 17.3622 13.4517 16.8278C12.6827 15.407 11.314 14.7422 11.2749 11.4053C11.2358 8.02938 13.4778 5.64404 15.9413 5.64404Z" fill="white"/>
          </g>
          <defs>
            <clipPath>
              <rect width="32" height="31.9348" fill="white"/>
            </clipPath>
          </defs>
        </svg>`}_getOrgSvgTemplate(e){return M`
        <svg width="${e}" height="${e}" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_11108_7858)">
            <path d="M32 0H0V32H32V0Z" fill="#4f91c5"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M21.3335 5.3335H10.0002V14.0002H21.3335V5.3335ZM20.0002 6.66683H18.0002V8.66683H20.0002V6.66683ZM16.6668 19.3335H26.6668V27.3335H16.6668V19.3335ZM15.3335 19.3335H5.3335V27.3335H15.3335V19.3335ZM24.0002 21.3335H25.3335V22.6668H24.0002V21.3335ZM14.0002 21.3335H12.6668V22.6668H14.0002V21.3335Z" fill="#eff3f4"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M16.6668 14H15.3335V16H9.3335V17.3333V19.3333H10.6668V17.3333H20.6668V19.3333H22.0002V17.3333V16H16.6668V14Z" fill="#a6b2b3"/>
          </g>
          <defs>
            <clipPath>
              <rect width="32" height="32" fill="white"/>
            </clipPath>
          </defs>
        </svg>`}_getGroupSvgTemplate(e){return M`
        <svg width="${e}" height="${e}" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_11108_7756)">
            <path d="M32 0H0V31.9032H32V0Z" fill="#86bac0"/>
            <path d="M32.0005 15.6099L20.1262 3.72021L3.74902 20.0193L15.749 31.9033H32.0005V15.6099Z" fill="#6c969b"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M16.1141 0.0854492C24.9541 0.0854492 31.9998 7.22949 31.9998 16.0427C31.9998 24.856 24.9541 32 16.1141 32C7.27412 32 0.108398 24.856 0.108398 16.0427C0.108398 7.22949 7.27412 0.0854492 16.1141 0.0854492Z" fill="#86bac0"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M31.983 16.6751C31.6459 24.8845 25.2059 31.5329 17.0001 31.983L6.85156 21.8651L25.1487 9.78174L31.9887 16.601L31.983 16.6751Z" fill="#6c969b"/>
            <path d="M25.1487 9.78174H6.85156V21.8651H25.1487V9.78174Z" fill="#e5e5e4"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M6.85156 21.8653L16.0001 13.8154L25.1487 21.8653H6.85156Z" fill="#cccccc"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M6.85156 21.8653L16.0001 14.3794L25.1487 21.8653H6.85156Z" fill="#e5e5e4"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M6.85156 9.78174L16.0001 17.8202L25.1487 9.78174H6.85156Z" fill="#cccccc"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M6.85156 9.78174L16.0001 17.2676L25.1487 9.78174H6.85156Z" fill="white"/>
            <path d="M32 0H0V31.9032H32V0Z" fill="#9cc076"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M30.3942 24.6003H16.2011C16.192 24.1094 16.2156 23.6184 16.2717 23.1307C16.3705 22.6384 17.3704 22.0361 19.2712 21.3235L20.337 20.9579C20.6968 20.8659 21.0366 20.7085 21.3392 20.4938C21.4763 20.1873 21.5275 19.8495 21.4874 19.5164V19.2984C21.474 18.9793 21.352 18.6743 21.1415 18.4335C20.8563 17.9824 20.6777 17.4727 20.6193 16.9427C20.5961 16.7361 20.5339 16.5356 20.4358 16.3521C20.2827 16.0732 20.1755 15.7717 20.1182 15.459C20.0551 15.2552 20.0551 15.0371 20.1182 14.8332C20.1625 14.7152 20.1933 14.5925 20.2099 14.4676C20.1605 14.0738 20.1182 13.673 20.0688 13.2511C20.0533 12.5749 20.307 11.9202 20.7745 11.4298C21.4194 10.7368 22.3491 10.3787 23.2941 10.4595C24.2402 10.3816 25.1696 10.7421 25.8137 11.4369C26.278 11.9293 26.5312 12.5826 26.5195 13.2581C26.4701 13.68 26.4207 14.0808 26.3713 14.4746C26.3917 14.5988 26.4224 14.7211 26.4631 14.8402C26.5299 15.0435 26.5299 15.2628 26.4631 15.4661C26.4117 15.7751 26.3117 16.0741 26.1666 16.3521C26.0537 16.5326 25.9771 16.7332 25.9408 16.9427C25.8845 17.4721 25.7084 17.9818 25.4256 18.4335C25.2202 18.6762 25.1033 18.981 25.0939 19.2984C25.0939 20.0015 25.1644 20.4516 25.3127 20.55C25.9041 20.8168 26.5096 21.0516 27.1265 21.2532C27.1846 21.2857 27.2461 21.3116 27.31 21.3305C29.192 22.0431 30.1895 22.6455 30.3025 23.1377L30.3942 24.6003Z" fill="#d4d7d8"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M16.0016 24.6003H1.80856C1.79941 24.1094 1.82298 23.6184 1.87914 23.1307C1.97795 22.6384 2.97779 22.0361 4.87867 21.3235L5.94438 20.9579C6.30425 20.8659 6.644 20.7085 6.94658 20.4938C7.08374 20.1873 7.13496 19.8495 7.09479 19.5164V19.2984C7.08142 18.9793 6.95946 18.6743 6.74896 18.4335C6.46369 17.9824 6.28509 17.4727 6.22669 16.9427C6.20354 16.7361 6.14127 16.5356 6.04319 16.3521C5.89012 16.0732 5.78289 15.7717 5.7256 15.459C5.66249 15.2552 5.66249 15.0371 5.7256 14.8332C5.7699 14.7152 5.80068 14.5925 5.81735 14.4676C5.76794 14.0738 5.7256 13.673 5.67619 13.2511C5.66071 12.5749 5.91445 11.9202 6.38196 11.4298C7.02682 10.7368 7.95648 10.3787 8.90157 10.4595C9.84766 10.3816 10.777 10.7421 11.4212 11.4369C11.8854 11.9293 12.1386 12.5826 12.1269 13.2581C12.0775 13.68 12.0281 14.0808 11.9787 14.4746C11.9992 14.5988 12.0298 14.7211 12.0705 14.8402C12.1373 15.0435 12.1373 15.2628 12.0705 15.4661C12.0191 15.7751 11.9191 16.0741 11.7741 16.3521C11.6612 16.5326 11.5845 16.7332 11.5482 16.9427C11.492 17.4721 11.3158 17.9818 11.033 18.4335C10.8276 18.6762 10.7107 18.981 10.7013 19.2984C10.7013 20.0015 10.7719 20.4516 10.9201 20.55C11.5115 20.8168 12.117 21.0516 12.7339 21.2532C12.792 21.2857 12.8535 21.3116 12.9174 21.3305C14.7995 22.0431 15.797 22.6455 15.9099 23.1377L16.0016 24.6003Z" fill="#d4d7d8"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M24.6766 24.6002H7.3295C7.31831 24.0002 7.34712 23.4001 7.41576 22.804C7.53652 22.2024 8.75855 21.4661 11.0818 20.5952L12.3844 20.1483C12.8242 20.0359 13.2395 19.8436 13.6093 19.5811C13.7769 19.2065 13.8395 18.7937 13.7904 18.3865V18.12C13.7741 17.7301 13.625 17.3573 13.3678 17.0629C13.0191 16.5117 12.8008 15.8886 12.7294 15.2409C12.7011 14.9883 12.625 14.7434 12.5052 14.519C12.3181 14.1782 12.187 13.8097 12.117 13.4275C12.0399 13.1784 12.0399 12.9118 12.117 12.6626C12.1711 12.5183 12.2088 12.3684 12.2291 12.2157C12.1687 11.7344 12.117 11.2446 12.0566 10.7289C12.0377 9.90252 12.3478 9.10226 12.9192 8.50296C13.7074 7.65586 14.8436 7.21826 15.9987 7.31694C17.1551 7.22174 18.291 7.66239 19.0782 8.51156C19.6457 9.11336 19.9551 9.91193 19.9409 10.7375C19.8805 11.2532 19.8201 11.743 19.7597 12.2243C19.7847 12.3761 19.8222 12.5256 19.8718 12.6712C19.9535 12.9197 19.9535 13.1876 19.8718 13.4361C19.8091 13.8138 19.6868 14.1793 19.5095 14.519C19.3716 14.7396 19.2778 14.9848 19.2335 15.2409C19.1648 15.8879 18.9494 16.5109 18.6038 17.0629C18.3528 17.3596 18.2099 17.7322 18.1984 18.12C18.1984 18.9795 18.2846 19.5295 18.4658 19.6498C19.1887 19.9759 19.9287 20.2628 20.6827 20.5093C20.7537 20.549 20.8289 20.5807 20.907 20.6038C23.2073 21.4747 24.4264 22.211 24.5644 22.8126L24.6766 24.6002Z" fill="white"/>
          </g>
          <defs>
            <clipPath>
              <rect width="32" height="32" fill="white"/>
            </clipPath>
          </defs>
        </svg>`}}X([P({type:String,reflect:!0,attribute:`class`})],e.prototype,`className`,void 0),X([P({type:String})],e.prototype,`error`,void 0),X([P({type:String})],e.prototype,`icon`,void 0),X([P({type:String,reflect:!0,attribute:`id`})],e.prototype,`id`,void 0),X([P({type:String})],e.prototype,`label`,void 0),X([P({type:String})],e.prototype,`placeholder`,void 0),X([P({type:Boolean})],e.prototype,`disabled`,void 0),X([P({type:Boolean})],e.prototype,`requiredIcon`,void 0),X([P({type:Boolean,attribute:`hidden`,reflect:!0,converter:B})],e.prototype,`visible`,void 0),X([P({type:Array})],e.prototype,`items`,void 0),X([P({type:Array})],e.prototype,`value`,void 0),X([ja(`.kuc-user-org-group-select-1-26-0__group__container__select-area__select-menu__item`)],e.prototype,`_itemsEl`,void 0),X([I(`.kuc-user-org-group-select-1-26-0__group__container__select-area__toggle__input`)],e.prototype,`_inputEl`,void 0),X([I(`.kuc-user-org-group-select-1-26-0__group__container__select-area__toggle`)],e.prototype,`_toggleEl`,void 0),X([I(`.kuc-user-org-group-select-1-26-0__group__container__select-area__select-menu`)],e.prototype,`_menuEl`,void 0),X([I(`.kuc-user-org-group-select-1-26-0__group__container__select-area__select-menu__item__highlight`)],e.prototype,`_highlightItemEl`,void 0),X([I(`.kuc-user-org-group-select-1-26-0__group__container__select-area__select-menu__item:first-child`)],e.prototype,`_firstItemEl`,void 0),X([I(`.kuc-user-org-group-select-1-26-0__group__container__select-area__select-menu__item:last-child`)],e.prototype,`_lastItemEl`,void 0),X([ja(`.kuc-user-org-group-select-1-26-0__group__container__select-area__select-menu__item--disabled`)],e.prototype,`_disabledItemsEl`,void 0),X([F()],e.prototype,`_selectedValues`,void 0),X([F()],e.prototype,`_searchText`,void 0),X([F()],e.prototype,`_selectorVisible`,void 0),window.customElements.define(`kuc-user-org-group-select-1-26-0`,e),U(pl),ml=e})();var hl=`
  kuc-mobile-button-1-26-0,
  kuc-mobile-button-1-26-0 * {
    font-family: "メイリオ", Meiryo, "Hiragino Kaku Gothic ProN",
      "ヒラギノ角ゴ ProN W3", "ＭＳ Ｐゴシック", "Lucida Grande",
      "Lucida Sans Unicode", Arial, Verdana, sans-serif;
  }
  kuc-mobile-button-1-26-0:lang(es),
  kuc-mobile-button-1-26-0:lang(es) * {
    font-family: sans-serif;
  }
  kuc-mobile-button-1-26-0:lang(zh),
  kuc-mobile-button-1-26-0:lang(zh) * {
    font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,
      Hei, "Heiti SC", "Lucida Grande", "Lucida Sans Unicode", Arial,
      Verdana, sans-serif;
  }
  kuc-mobile-button-1-26-0:lang(zh-TW),
  kuc-mobile-button-1-26-0:lang(zh-TW) * {
      font-family: "微軟正黒體","Microsoft JhengHei","新宋体",NSimSun,STHeiti,
      Hei,"Heiti SC","Lucida Grande","Lucida Sans Unicode",Arial,
      Verdana,sans-serif
  }
  kuc-mobile-button-1-26-0 {
    display: inline-block;
    vertical-align: top;
  }
  kuc-mobile-button-1-26-0[hidden] {
    display: none;
  }
  .kuc-mobile-button-1-26-0__button {
    min-width: var(--kuc-mobile-button-width, 100px);
    width: var(--kuc-mobile-button-width, auto);
    height: var(--kuc-mobile-button-height, 42px);
    padding: 0 12px;
    user-select: none;
    font-weight: 700;
    font-size: var(--kuc-mobile-button-font-size, 14px);
    line-height: 1;
    display: grid;
    align-items: center;
    align-content: center;
  }
  .kuc-mobile-button-1-26-0__button:focus {
    outline: none;
  }
  .kuc-mobile-button-1-26-0__button--submit {
    border: 2px solid;
    border-color: var(--kuc-mobile-button-background-color, #206694);
    background-color: var(--kuc-mobile-button-background-color, #206694);
    color: var(--kuc-mobile-button-text-color, #ffffff);
    border-radius: 6px;
  }
  .kuc-mobile-button-1-26-0__button--submit:focus {
    border-color: var(--kuc-mobile-button-background-color-focus, var(--kuc-mobile-button-background-color, #206694));
    background-color: var(--kuc-mobile-button-background-color-focus, var(--kuc-mobile-button-background-color, #206694));
  }
  .kuc-mobile-button-1-26-0__button--submit:active {
    border-color: var(--kuc-mobile-button-background-color-active, var(--kuc-mobile-button-background-color, #206694));
    background-color: var(--kuc-mobile-button-background-color-active, var(--kuc-mobile-button-background-color, #206694));
  }
  .kuc-mobile-button-1-26-0__button--submit:disabled {
    color: #ffffff;
    border-color: #a5a5a5;
    background: #a5a5a5;
  }
  .kuc-mobile-button-1-26-0__button--normal {
    border: 2px solid;
    border-color: var(--kuc-mobile-button-background-color, #206694);
    background-color: var(--kuc-mobile-button-background-color, #ffffff);
    color: var(--kuc-mobile-button-text-color, #206694);
    border-radius: 6px;
  }
  .kuc-mobile-button-1-26-0__button--normal:focus {
    border-color: var(--kuc-mobile-button-background-color-focus, var(--kuc-mobile-button-background-color, #206694));
    background-color: var(--kuc-mobile-button-background-color-focus, var(--kuc-mobile-button-background-color, #ffffff));
  }
  .kuc-mobile-button-1-26-0__button--normal:active {
    border-color: var(--kuc-mobile-button-background-color-active, var(--kuc-mobile-button-background-color, #206694));
    background-color: var(--kuc-mobile-button-background-color-active, var(--kuc-mobile-button-background-color, #ffffff));
  }
  .kuc-mobile-button-1-26-0__button--normal:disabled {
    color: #a5a5a5;
    border-color: #a5a5a5;
    background-color: #ffffff;
    cursor: default;
  }
`,gl=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},_l;(()=>{if(_l=window.customElements.get(`kuc-mobile-button-1-26-0`),_l)return;class e extends V{constructor(e){super(),this.className=``,this.id=``,this.text=``,this.type=`normal`,this.content=``,this.disabled=!1,this.visible=!0,this._content=``;let t=G(e);Object.assign(this,t)}_handleClickButton(e){e.stopPropagation(),H(this,`click`)}_getButtonColorType(){return this.type===`normal`||this.type===`submit`?this.type:`normal`}willUpdate(e){(e.has(`content`)||e.has(`text`))&&(this._content=this.content!==null&&this.content!==void 0&&this.content!==``?ls(this.content)?Io(this.content):this.content:this.text)}render(){return j`
        <button
          type="button"
          class="kuc-mobile-button-1-26-0__button kuc-mobile-button-1-26-0__button--${this._getButtonColorType()}"
          ?disabled="${this.disabled}"
          @click="${this._handleClickButton}"
        >
          ${this._content}
        </button>
      `}}gl([P({type:String,reflect:!0,attribute:`class`})],e.prototype,`className`,void 0),gl([P({type:String,reflect:!0,attribute:`id`})],e.prototype,`id`,void 0),gl([P({type:String})],e.prototype,`text`,void 0),gl([P({type:String})],e.prototype,`type`,void 0),gl([P()],e.prototype,`content`,void 0),gl([P({type:Boolean})],e.prototype,`disabled`,void 0),gl([P({type:Boolean,attribute:`hidden`,reflect:!0,converter:B})],e.prototype,`visible`,void 0),window.customElements.define(`kuc-mobile-button-1-26-0`,e),U(hl),_l=e})();var vl=`
  kuc-base-mobile-error-1-26-0 {
    display: block;
    font-size: 13px;
    font-family: "メイリオ", Meiryo, "Hiragino Kaku Gothic ProN",
      "ヒラギノ角ゴ ProN W3", "ＭＳ Ｐゴシック", "Lucida Grande",
      "Lucida Sans Unicode", Arial, Verdana, sans-serif;
  }
  kuc-base-mobile-error-1-26-0:lang(es),
  kuc-base-mobile-error-1-26-0:lang(es) * {
    font-family: sans-serif;
  }
  kuc-base-mobile-error-1-26-0:lang(zh),
  kuc-base-mobile-error-1-26-0:lang(zh) * {
    font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,
      Hei, "Heiti SC", "Lucida Grande", "Lucida Sans Unicode", Arial,
      Verdana, sans-serif;
  }
  kuc-base-mobile-error-1-26-0:lang(zh-TW),
  kuc-base-mobile-error-1-26-0:lang(zh-TW) * {
      font-family: "微軟正黒體","Microsoft JhengHei","新宋体",NSimSun,STHeiti,
      Hei,"Heiti SC","Lucida Grande","Lucida Sans Unicode",Arial,
      Verdana,sans-serif
  }
  kuc-base-mobile-error-1-26-0[hidden] {
    display: none;
  }
  .kuc-base-mobile-error-1-26-0__error {
    line-height: 1.5;
    color: #000000;
    background-color: #fdffc9;
    border: 1px solid #e5db68;
    border-radius: 0.4em;
    padding: 0.4em 1em;
    margin-top: 0.3em;
    margin-left: 0.5em;
  }
  .kuc-base-mobile-error-1-26-0__error[hidden] {
    display: none;
  }
`,yl=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},bl=class extends V{constructor(){super(...arguments),this.ariaLive=``,this.guid=``,this.text=``}render(){return j`
      ${this.ariaLive&&this.ariaLive!==``?j`
              <div
                class="kuc-base-mobile-error-1-26-0__error"
                .id="${this.guid}-error"
                role="alert"
                aria-live="${this.ariaLive}"
                ?hidden="${!this.text}"
              >
                ${this.text}
              </div>
            `:j`
              <div
                class="kuc-base-mobile-error-1-26-0__error"
                .id="${this.guid}-error"
                role="alert"
                ?hidden="${!this.text}"
              >
                ${this.text}
              </div>
            `}
    `}};yl([P({type:String})],bl.prototype,`ariaLive`,void 0),yl([P({type:String})],bl.prototype,`guid`,void 0),yl([P({type:String})],bl.prototype,`text`,void 0),window.customElements.get(`kuc-base-mobile-error-1-26-0`)||(U(vl),window.customElements.define(`kuc-base-mobile-error-1-26-0`,bl));var xl=`
  kuc-base-mobile-label-1-26-0 {
    display: inline-table;
    font-size: 13px;
    font-family: "メイリオ", Meiryo, "Hiragino Kaku Gothic ProN",
      "ヒラギノ角ゴ ProN W3", "ＭＳ Ｐゴシック", "Lucida Grande",
      "Lucida Sans Unicode", Arial, Verdana, sans-serif;
  }
  kuc-base-mobile-label-1-26-0:lang(es) ,
  kuc-base-mobile-label-1-26-0:lang(es) * {
    font-family: sans-serif;
  }
  kuc-base-mobile-label-1-26-0:lang(zh) ,
  kuc-base-mobile-label-1-26-0:lang(zh) * {
    font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,
      Hei, "Heiti SC", "Lucida Grande", "Lucida Sans Unicode", Arial,
      Verdana, sans-serif;
  }
  kuc-base-mobile-label-1-26-0:lang(zh-TW),
  kuc-base-mobile-label-1-26-0:lang(zh-TW) * {
      font-family: "微軟正黒體","Microsoft JhengHei","新宋体",NSimSun,STHeiti,
      Hei,"Heiti SC","Lucida Grande","Lucida Sans Unicode",Arial,
      Verdana,sans-serif
  }
  kuc-base-mobile-label-1-26-0[hidden] {
    display: none;
  }
  .kuc-base-mobile-label-1-26-0__text {
    text-shadow: 0 1px 0 #ffffff;
    color: #888888;
    white-space: normal;
    font-size: 86%;
  }
  .kuc-base-mobile-label-1-26-0__required-icon {
    font-size: 86%;
    position: relative;
    left: 3px;
    color: #d01212;
  }
  .kuc-base-mobile-label-1-26-0__required-icon[hidden] {
    display: none;
  }
`,Sl=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},Cl=class extends V{constructor(){super(...arguments),this.requiredIcon=!1,this.guid=``,this.text=``}render(){return j`
      ${this._getTextTemplate()}
      <span
        class="kuc-base-mobile-label-1-26-0__required-icon"
        ?hidden="${!this.requiredIcon}"
        >*</span
      >
    `}_getTextTemplate(){return this.guid&&this.guid!==``?j`
          <span class="kuc-base-mobile-label-1-26-0__text" .id="${this.guid}-group"
            >${this.text}</span
          >
        `:j` <span class="kuc-base-mobile-label-1-26-0__text">${this.text}</span> `}};Sl([P({type:Boolean})],Cl.prototype,`requiredIcon`,void 0),Sl([P({type:String})],Cl.prototype,`guid`,void 0),Sl([P({type:String})],Cl.prototype,`text`,void 0),window.customElements.get(`kuc-base-mobile-label-1-26-0`)||(U(xl),window.customElements.define(`kuc-base-mobile-label-1-26-0`,Cl));var wl=`
  kuc-mobile-checkbox-1-26-0,
  kuc-mobile-checkbox-1-26-0 * {
    font-size: 13px;
    color: #333333;
    font-family: "メイリオ", Meiryo, "Hiragino Kaku Gothic ProN",
      "ヒラギノ角ゴ ProN W3", "ＭＳ Ｐゴシック", "Lucida Grande",
      "Lucida Sans Unicode", Arial, Verdana, sans-serif;
  }
  kuc-mobile-checkbox-1-26-0:lang(es),
  kuc-mobile-checkbox-1-26-0:lang(es) * {
    font-family: sans-serif;
  }
  kuc-mobile-checkbox-1-26-0:lang(zh),
  kuc-mobile-checkbox-1-26-0:lang(zh) * {
    font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,
      Hei, "Heiti SC", "Lucida Grande", "Lucida Sans Unicode", Arial,
      Verdana, sans-serif;
  }
  kuc-mobile-checkbox-1-26-0:lang(zh-TW),
  kuc-mobile-checkbox-1-26-0:lang(zh-TW) * {
      font-family: "微軟正黒體","Microsoft JhengHei","新宋体",NSimSun,STHeiti,
      Hei,"Heiti SC","Lucida Grande","Lucida Sans Unicode",Arial,
      Verdana,sans-serif
  }
  kuc-mobile-checkbox-1-26-0 {
    width: 100%;
    display: inline-block;
  }
  kuc-mobile-checkbox-1-26-0[hidden] {
    display: none;
  }
  .kuc-mobile-checkbox-1-26-0__group {
    border: none;
    padding: 0px;
    height: auto;
    display: inline-block;
    width: 100%;
    box-sizing: border-box;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
  }
  .kuc-mobile-checkbox-1-26-0__group__label {
    display: inline-block;
    font-size: 86%;
    font-weight: bold;
    line-height: 1.5;
    padding: 0px;
    margin: 0 0 4px 0;
    white-space: nowrap;
  }
  .kuc-mobile-checkbox-1-26-0__group__label[hidden] {
    display: none;
  }
  .kuc-mobile-checkbox-1-26-0__group__label__text {
    text-shadow: 0 1px 0 #ffffff;
    color: #888888;
    white-space: normal;
    font-size: inherit;
  }
  .kuc-mobile-checkbox-1-26-0__group__label__required-icon {
    position: relative;
    left: 3px;
    color: #d01212;
  }
  .kuc-mobile-checkbox-1-26-0__group__label__required-icon[hidden] {
    display: none;
  }
  .kuc-mobile-checkbox-1-26-0__group__select-menu {
    margin-left: 0.5em;
    margin-right: 0.5em;
  }
  .kuc-mobile-checkbox-1-26-0__group__select-menu[bordervisible] {
    border-color: #b3b3b3;
    border-width: 1px;
    border-style: solid;
    border-radius: 8px;
  }
  .kuc-mobile-checkbox-1-26-0__group__select-menu[disabled],
  .kuc-mobile-checkbox-1-26-0__group__select-menu__item--disabled {
    background-color: #d5d7d9;
    color: #999999;
    -webkit-text-fill-color: #999999;
    background-color: #d5d7d9;
    opacity: 1;
  }
  .kuc-mobile-checkbox-1-26-0__group__select-menu--required[bordervisible] {
    border-color: #cf4a38;
    border-width: 1px;
    border-style: solid;
    border-radius: 8px;
  }
  .kuc-mobile-checkbox-1-26-0__group__select-menu__item[bordervisible] {
    padding: 4px;
    border: 1px solid transparent;
    position: relative;
    white-space: normal;
    word-wrap: normal;
    height: 30px;
    display: block;
    border-bottom: 1px solid #b3b3b3;
    padding: 8px;
  }
  .kuc-mobile-checkbox-1-26-0__group__select-menu__item {
    padding: 4px;
    border: 1px solid transparent;
    position: relative;
    white-space: normal;
    word-wrap: normal;
    height: 30px;
    display: block;
    padding: 8px;
  }
  .kuc-mobile-checkbox-1-26-0__group__select-menu__item:last-child {
    border-bottom: 0px;
  }
  .kuc-mobile-checkbox-1-26-0__group__select-menu[bordervisible]
  .kuc-mobile-checkbox-1-26-0__group__select-menu__item:first-child {
    border-top-left-radius: 7px;
    border-top-right-radius: 7px;
  }
  .kuc-mobile-checkbox-1-26-0__group__select-menu[bordervisible]
  .kuc-mobile-checkbox-1-26-0__group__select-menu__item:last-child {
    border-bottom-left-radius: 7px;
    border-bottom-right-radius: 7px;
  }
  .kuc-mobile-checkbox-1-26-0__group__select-menu__item__input {
    position: absolute;
    opacity: 0;
  }
  .kuc-mobile-checkbox-1-26-0__group__select-menu__item__input[disabled]
    + .kuc-mobile-checkbox-1-26-0__group__select-menu__item__label {
    background-color: #d5d7d9;
    color: #999999;
    -webkit-text-fill-color: #999999;
    background-color: #d5d7d9;
    opacity: 1;
  }
  .kuc-mobile-checkbox-1-26-0__group__select-menu__item__label {
    position: relative;
    margin: -7px 0px 0px 34px;
    display: inline-block;
    vertical-align: middle;
    white-space: nowrap;
    padding: 11px 13px 13px 0px;
    font-size: 14.04px;
  }
  .kuc-mobile-checkbox-1-26-0__group__select-menu__item__label__icon {
    position: absolute;
    top: 50%;
    left: -30px;
    margin-top: -13px;
    box-sizing: border-box;
    width: 22px;
    height: 22px;
    background-size: 22px 17px;
    content: "";
  }
  .kuc-mobile-checkbox-1-26-0__group__error {
    line-height: 1.5;
    border: 1px solid #e5db68;
    background-color: #fdffc9;
    margin-top: 0.3em;
    margin-left: 0.5em;
    padding: 0.4em 1em;
    border-radius: 0.4em;
    color: #000000;
  }
  .kuc-mobile-checkbox-1-26-0__group__error[hidden] {
    display: none;
  }
`,Tl=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},El;(()=>{if(El=window.customElements.get(`kuc-mobile-checkbox-1-26-0`),El)return;class e extends V{constructor(e){super(),this.className=``,this.error=``,this.id=``,this.label=``,this.borderVisible=!0,this.disabled=!1,this.requiredIcon=!1,this.visible=!0,this.items=[],this.selectedIndex=[],this.value=[],this._valueMapping={},this._GUID=W();let t=G(e);this._setInitialValue(t),Object.assign(this,t)}_setInitialValue(e){let t=`value`in e,n=`selectedIndex`in e,r=e.selectedIndex||[];if(!t&&n){if(!K(r))return;let t=this._getValueMapping(e);this.value=this._getValidValue(t,r)}}_getNewValueMapping(e,t){let n=parseInt(t,10),r=Object.keys(this._valueMapping),i={...this._valueMapping};return r.indexOf(t)>-1?(delete i[n],i):(i[n]=e,i)}_handleChangeInput(e){e.stopPropagation();let t=e.target,n=t.dataset.index||`0`,r=t.value,i=this.value?[...this.value]:this.value,a=this._getNewValueMapping(r,n),o=this.items.map(e=>e.value),s=Object.values(a).filter(e=>o.indexOf(e)>-1);if(s===i)return;let c=Object.keys(a).map(e=>parseInt(e,10));this.value=s,this.selectedIndex=c;let l={oldValue:i,value:s};H(this,`change`,l)}_getCheckboxIconSvgTemplate(e){return M`
       <svg
         class="kuc-mobile-checkbox-1-26-0__group__select-menu__item__label__icon"
         xmlns="http://www.w3.org/2000/svg"
         x="0px"
         y="0px"
         width="44px"
         height="34px"
         viewBox="0 0 44 34"
         enable-background="new 0 0 44 34"
         xml:space="preserve">
         <image width="44" height="34" x="0" y="0" href="${this._getSVGStrokeValue(e)}"/>
      </svg>
       `}_getSVGStrokeValue(e){return e?`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAiCAQAAACOh/P6AAAABGdBTUEAALGPC/xhBQAAACBjSFJN AAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QA/4ePzL8AAAAHdElN RQfkCQcFITUNIbrXAAADHklEQVRIx63US2sTURQH8P9kmsykQtoMSbStreZRkRBxY3BR7EJwEyuo WQiCmy4EBXHhyi8g4qYfQCjYpRgQBK0GEoUmohYUsURjKz4WrTTNNDYzmUcz42Lymkfz0nN298z9 zeXcM0OgJeLoJxLkhTn14+P5uJJoWR3oy9Kx5xcCl6s4RybuQ2muk60PhXtmWc/xh8GL+0GBnvGu 599D/S9wwetOH51yg4UEt4H+B7jgZVKTkX0oQYUKEcNwttB9wwUvkwpFHOCg1lLEMOgZX43uE9ZY OwTdqgh3g7b12NYGG4yQ4KEYkoUD9nsnfX2NW8HLpAIRG3iLGge2/G32AweiZ1hjCUuWB8vlr6+8 gWRqBetRFljPXmiC4CaZlD+iWjRBAQeWy19bSaMACWiFCW5yKB24MpQueK3ZWHRwORRRLFke23VW hAoQTTYWpZMBFwkRPz4VT3s2zSydDLkEwyTUm8Dp2CZMxKJ0MuiqoAInSPw00Inaa/+gasEK2FnL Xi3km2wdJmJROul3lWrbnLDr6IShrg8R5bXXs5t5sJCa/wpbnT3sYiE3rkHEeIRJab1OmOqtKWjs Z2zFxSYLDGjsIVdRdxoOCsYjxGrlzNPl2AlzvR4yeI1l47K+QsJxbGnMV8Ru45vXUoKKEap8KVCi H0y4tkx1FSpkVHRsTgdTeEdOgSEstvHwU9TZUWrDkt2FaDitHkaBK2ZHThEMTFsV7MCHX5ZsFZKp CXpYhcRzxczoNMFYbWdRtWBVyBa9NZwY1TptY1R0k4CQeXtj84vxyowwoGj02LSNUTqyBCrPn93k vmPbOAlmuAeaRGVx8RbWUYrvGofPCm7QB6dtTHVPdgCCxv6JW4y1NdwFbYfYht0bRlzJSTzHLh04 Yp8wj5gDUlu2DRxGWMlJXPnrK3+ACulbSHdk28JAWMlJkFYz/qAjJDdOS0PuyHaAa7S8mg0EHSEJ KkjQEB69uN2J7QgDYTUnazQVUkCBvftyDuvYac92AbfSzhB7JzOPDZQ7sV3BDXrJkV1+gt/g4kon Vg8TbZ8kMQg7BAjogtXHX2EwhA6/OKOlAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDIwLTA5LTA3VDA1 OjMzOjUzKzAwOjAwOdR5sgAAACV0RVh0ZGF0ZTptb2RpZnkAMjAyMC0wOS0wN1QwNTozMzo1Mysw MDowMEiJwQ4AAAAZdEVYdFNvZnR3YXJlAEFkb2JlIEltYWdlUmVhZHlxyWU8AAAAAElFTkSuQmCC`:`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAiCAQAAACOh/P6AAAABGdBTUEAALGPC/xhBQAAACBjSFJN AAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QA/4ePzL8AAAAHdElN RQfkCQcFIRBGJW6QAAACvklEQVRIx6XWQZKbRhSA4Z8GBhACenwC5wZUypXKMlRlmUVcXrtKHMEn meQEUmWfmnHZe65ATpDcIA3MMGKEhBdgGRAaWZqnjarp94H6PTWtNWg0tPEX54fARNzwT72qed8b Ny6weqFzhbO0Fg1rHlf9Ky+CdSw5X3q/O+x4WAro0S+ADSw5T4LQw6LBRFt+5rc9LV7CeokMA1xs bOYE+MvPixfCBpb0ExkGzDDR0bFG9EVwywahzwwDAWiIPf1pcSHcZ/U90NIuHrObv+UF8DTb0hoG utKjd+qgKzSA/R9mirWlN8lCw5Yn9RT9kh4shc6VtJdXUp9ENQzs18fZmkrdR2/Sr4/QC+e1dWuG m3AdVaqeYJ3QS3zp4xxhi+jHdD//215xF84TV17xRJEWI7pl/SSQ8wl2x5a1uu+xvaW4C/3kWl4T IJGhn1jSGLCz0E+k9HC6Bhuyj2nxg0r7o92cj13aDBsXn6BHt6yXSOlhY3QFHrJ59L/KOIA/9tJ0 dGYdbUsD0WOtSbZMs0ipnMcxfDtKE+jMCJBh8K8b2rgn2DzKVM6aYbkNcG496Q7SBOAAQhpJ/cG8 8eT8BFsx7iIBRmSmBmKQJtBx8HklXy2vL2BBwK//raNNumM3umBg4xFwrGTPsV3xflZ5VKbbEa2h Y2Jhoh+w9Ql2324/HaEFYrRIsGNDedd2wjEWxNctZ5o+jB0bylX2VqniGXawCX0PvWPDwyqLFcVB gx2FITtBt2weKwoqts/+sgGcd3Q9SX9j70+yI7giR6ksKu82B/SQPVWJEVxTUaBU9rZcDelz2YNX U03TfuIGd2F29z2fnTgJbaloaCAGd2Gitewf+YfsDHbyiLWlar/EMFvobCjjfJXxcAZ75Oy26+gm 3mIuqrhYZTyexR49FLZ0wyY2/qzSkpKns1jQmrOmf398ARuVc7WA4gOtAAAAJXRFWHRkYXRlOmNy ZWF0ZQAyMDIwLTA5LTA3VDA1OjMzOjE2KzAwOjAw76ZY7wAAACV0RVh0ZGF0ZTptb2RpZnkAMjAy MC0wOS0wN1QwNTozMzoxNiswMDowMJ774FMAAAAZdEVYdFNvZnR3YXJlAEFkb2JlIEltYWdlUmVh ZHlxyWU8AAAAAElFTkSuQmCC`}_isCheckedItem(e,t){let n=Object.values(this._valueMapping),r=Object.keys(this._valueMapping);return n.filter((n,i)=>n===e.value&&t===parseInt(r[i],10)).length>0}_getItemTemplate(e,t){let n=this._isCheckedItem(e,t);return j`
        <label
          for="${this._GUID}-item-${t}"
          class="kuc-mobile-checkbox-1-26-0__group__select-menu__item${e.disabled?` kuc-mobile-checkbox-1-26-0__group__select-menu__item--disabled`:``}"
          ?borderVisible="${this.borderVisible}"
        >
          <input
            type="checkbox"
            id="${this._GUID}-item-${t}"
            class="kuc-mobile-checkbox-1-26-0__group__select-menu__item__input"
            name="${this._GUID}-group"
            data-index="${t}"
            value="${e.value===void 0?``:e.value}"
            aria-describedby="${this._GUID}-error}"
            aria-required="${this.requiredIcon}"
            aria-invalid="${this.error!==``}"
            ?disabled="${e.disabled||this.disabled}"
            @change="${this._handleChangeInput}"
          />
          <div class="kuc-mobile-checkbox-1-26-0__group__select-menu__item__label">
            ${this._getCheckboxIconSvgTemplate(n)}${e.label===void 0?e.value:e.label}
          </div>
        </label>
      `}shouldUpdate(e){return e.has(`items`)&&!K(this.items)?(this.throwErrorAfterUpdateComplete(L.ITEMS.IS_NOT_ARRAY),!1):e.has(`value`)&&!K(this.value)?(this.throwErrorAfterUpdateComplete(L.VALUE.IS_NOT_ARRAY),!1):e.has(`selectedIndex`)&&!K(this.selectedIndex)?(this.throwErrorAfterUpdateComplete(L.SELECTED_INDEX.IS_NOT_ARRAY),!1):!0}willUpdate(e){if(e.has(`value`)){if(this.value.length>0)return;this.selectedIndex=[]}}update(e){(e.has(`items`)||e.has(`value`)||e.has(`selectedIndex`))&&(this._valueMapping=this._getValueMapping({items:this.items,value:this.value,selectedIndex:this.selectedIndex}),this._setValueAndSelectedIndex()),super.update(e)}render(){return j`
        <fieldset class="kuc-mobile-checkbox-1-26-0__group">
          <legend
            class="kuc-mobile-checkbox-1-26-0__group__label"
            ?hidden="${!this.label}"
          >
            <kuc-base-mobile-label-1-26-0
              .text="${this.label}"
              .requiredIcon="${this.requiredIcon}"
            ></kuc-base-mobile-label-1-26-0>
          </legend>
          <div
            class="kuc-mobile-checkbox-1-26-0__group__select-menu ${this.requiredIcon?`kuc-mobile-checkbox-1-26-0__group__select-menu--required`:``}"
            ?borderVisible="${this.borderVisible}"
            ?disabled="${this.disabled}"
          >
            ${this.items.map((e,t)=>this._getItemTemplate(e,t))}
          </div>
          <kuc-base-mobile-error-1-26-0
            .text="${this.error}"
            .guid="${this._GUID}"
            ariaLive="assertive"
          >
          </kuc-base-mobile-error-1-26-0>
        </fieldset>
      `}updated(){this._inputEls.forEach(e=>{e.checked=this.value.indexOf(e.value)>-1})}_setValueAndSelectedIndex(){this.value=Object.values(this._valueMapping),this.selectedIndex=Object.keys(this._valueMapping).map(e=>parseInt(e,10))}_getValueMapping(e){let t=e.items||[],n=e.value||[],r=e.selectedIndex||[],i=t.map(e=>e.value||``),a=Object.assign({},i),o={};if(n.length===0){let e=this._getValidValue(a,r);return r.forEach((t,n)=>o[t]=e[n]),o}return this._getValidSelectedIndex(a).forEach((e,t)=>o[e]=n[t]),o}_getValidValue(e,t){return t.filter(t=>e[t]).map(t=>e[t])}_getValidSelectedIndex(e){let t=[];for(let n=0;n<this.value.length;n++){let r=this.selectedIndex[n];if(e[r]===this.value[n]){t.push(r);continue}let i=this.items.findIndex(e=>e.value===this.value[n]);t.push(i)}return t}}Tl([P({type:String,reflect:!0,attribute:`class`})],e.prototype,`className`,void 0),Tl([P({type:String})],e.prototype,`error`,void 0),Tl([P({type:String,reflect:!0,attribute:`id`})],e.prototype,`id`,void 0),Tl([P({type:String})],e.prototype,`label`,void 0),Tl([P({type:Boolean})],e.prototype,`borderVisible`,void 0),Tl([P({type:Boolean})],e.prototype,`disabled`,void 0),Tl([P({type:Boolean})],e.prototype,`requiredIcon`,void 0),Tl([P({type:Boolean,attribute:`hidden`,reflect:!0,converter:B})],e.prototype,`visible`,void 0),Tl([P({type:Array})],e.prototype,`items`,void 0),Tl([P({type:Array})],e.prototype,`selectedIndex`,void 0),Tl([P({type:Array})],e.prototype,`value`,void 0),Tl([ja(`.kuc-mobile-checkbox-1-26-0__group__select-menu__item__input`)],e.prototype,`_inputEls`,void 0),Tl([F()],e.prototype,`_valueMapping`,void 0),window.customElements.define(`kuc-mobile-checkbox-1-26-0`,e),U(wl),El=e})();var Dl=`
  kuc-mobile-dropdown-1-26-0,
  kuc-mobile-dropdown-1-26-0 * {
    font-size: 13px;
    color: #333333;
    font-family: "メイリオ", Meiryo, "Hiragino Kaku Gothic ProN",
      "ヒラギノ角ゴ ProN W3", "ＭＳ Ｐゴシック", "Lucida Grande",
      "Lucida Sans Unicode", Arial, Verdana, sans-serif;
  }
  kuc-mobile-dropdown-1-26-0:lang(es),
  kuc-mobile-dropdown-1-26-0:lang(es) * {
    font-family: sans-serif;
  }
  kuc-mobile-dropdown-1-26-0:lang(zh),
  kuc-mobile-dropdown-1-26-0:lang(zh) * {
    font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,
      Hei, "Heiti SC", "Lucida Grande", "Lucida Sans Unicode", Arial,
      Verdana, sans-serif;
  }
  kuc-mobile-dropdown-1-26-0:lang(zh-TW),
  kuc-mobile-dropdown-1-26-0:lang(zh-TW) * {
      font-family: "微軟正黒體","Microsoft JhengHei","新宋体",NSimSun,STHeiti,
      Hei,"Heiti SC","Lucida Grande","Lucida Sans Unicode",Arial,
      Verdana,sans-serif
  }
  kuc-mobile-dropdown-1-26-0 {
    display: inline-block;
    width: 100%;
  }

  kuc-mobile-dropdown-1-26-0[hidden] {
    display: none;
  }

  .kuc-mobile-dropdown-1-26-0__label {
    display: inline-block;
    font-size: 86%;
    font-weight: bold;
    line-height: 1.5;
    padding: 0px;
    margin: 0 0 4px 0;
    white-space: nowrap;
  }

  .kuc-mobile-dropdown-1-26-0__label[hidden] {
    display: none;
  }

  .kuc-mobile-dropdown-1-26-0__input-form {
    word-wrap: break-word;
    min-height: 1em;
    padding-left: 0.5em;
    padding-right: 0.5em;
  }

  .kuc-mobile-dropdown-1-26-0__input-form__select {
    display: inline-block;
    border-radius: 0.4em;
    max-width: 100%;
  }

  .kuc-mobile-dropdown-1-26-0__input-form__select.kuc--required {
    border: 1px solid #cf4a38;
  }

  .kuc-mobile-dropdown-1-26-0__input-form__select__input {
    min-width: 100px;
    max-width: 100%;
  }

  .kuc-mobile-dropdown-1-26-0__input-form__select__input:disabled {
    color: #999999;
    -webkit-text-fill-color: #999999;
    background-color: #d5d7d9;
    opacity: 1;
  }
`,Ol=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},kl;(()=>{if(kl=window.customElements.get(`kuc-mobile-dropdown-1-26-0`),kl)return;class e extends V{constructor(e){super(),this.className=``,this.error=``,this.id=``,this.label=``,this.value=``,this.selectedIndex=-1,this.disabled=!1,this.requiredIcon=!1,this.visible=!0,this.items=[],this._hasValueInItems=!1,this._GUID=W();let t=G(e);this._setInitialValue(t),Object.assign(this,t)}_setInitialValue(e){let t=`value`in e,n=`selectedIndex`in e;!t&&n&&(this.value=this._getValue(e)||``)}_handleChangeInput(e){e.stopPropagation();let t=e.target,n=t.value;if(this.value===n&&this.selectedIndex===t.selectedIndex)return;let r={oldValue:this.value,value:n};this.value=n,this.selectedIndex=t.selectedIndex,H(this,`change`,r)}shouldUpdate(e){return e.has(`items`)&&!K(this.items)?(this.throwErrorAfterUpdateComplete(L.ITEMS.IS_NOT_ARRAY),!1):e.has(`value`)&&!ts(this.value)?(this.throwErrorAfterUpdateComplete(L.VALUE.IS_NOT_STRING),!1):e.has(`selectedIndex`)&&!cs(this.selectedIndex)?(this.throwErrorAfterUpdateComplete(L.SELECTED_INDEX.IS_NOT_NUMBER),!1):!0}willUpdate(e){if((e.has(`items`)||e.has(`value`))&&(this._hasValueInItems=this.items.some(e=>e.value===this.value)),e.has(`value`)){if(this.value!==``||this._hasValueInItems)return;this.selectedIndex=-1}}update(e){(e.has(`items`)||e.has(`value`)||e.has(`selectedIndex`))&&(this.selectedIndex=this._getSelectedIndex(),this.value=this._getValue({items:this.items,selectedIndex:this.selectedIndex})||``),super.update(e)}_getSelectedIndex(){if(!this.value&&!this._hasValueInItems)return this.items[this.selectedIndex]?this.selectedIndex:-1;let e=this.items.findIndex(e=>e.value===this.value);if(e===-1)return-1;let t=this.items.findIndex((e,t)=>e.value===this.value&&t===this.selectedIndex);return t>-1?t:e}_getValue(e){let t=(e.items||[])[e.selectedIndex===0||e.selectedIndex?e.selectedIndex:-1];return t?t.value:``}_isCheckedItem(e,t){return this.value?e.value===this.value&&this.selectedIndex===t:this.selectedIndex===t}_getItemTemplate(e,t){let n=this._isCheckedItem(e,t);return j`
        <option
          value="${e.value||``}"
          ?selected="${n}"
          ?disabled="${e.disabled}"
        >
          ${e.label===void 0?e.value:e.label}
        </option>
      `}render(){return j`
        <label
          class="kuc-mobile-dropdown-1-26-0__label"
          for="${this._GUID}-label"
          ?hidden="${!this.label}"
        >
          <kuc-base-mobile-label-1-26-0
            .text="${this.label}"
            .requiredIcon="${this.requiredIcon}"
          ></kuc-base-mobile-label-1-26-0>
        </label>
        <div class="kuc-mobile-dropdown-1-26-0__input-form">
          <div
            class="kuc-mobile-dropdown-1-26-0__input-form__select
            ${this.requiredIcon?`kuc--required`:``}"
          >
            <select
              class="kuc-mobile-dropdown-1-26-0__input-form__select__input"
              id="${this._GUID}-label"
              aria-describedby="${this._GUID}-error"
              aria-required="${this.requiredIcon}"
              aria-invalid="${this.error!==``}"
              ?disabled="${this.disabled}"
              @change="${this._handleChangeInput}"
            >
              ${this.items.map((e,t)=>this._getItemTemplate(e,t))}
            </select>
          </div>
        </div>
        <kuc-base-mobile-error-1-26-0
          .text="${this.error}"
          .guid="${this._GUID}"
          ariaLive="assertive"
        >
        </kuc-base-mobile-error-1-26-0>
      `}updated(e){e.has(`selectedIndex`)&&(this._selectEl.selectedIndex=this.selectedIndex),super.update(e)}}Ol([P({type:String,reflect:!0,attribute:`class`})],e.prototype,`className`,void 0),Ol([P({type:String})],e.prototype,`error`,void 0),Ol([P({type:String,reflect:!0,attribute:`id`})],e.prototype,`id`,void 0),Ol([P({type:String})],e.prototype,`label`,void 0),Ol([P({type:String})],e.prototype,`value`,void 0),Ol([P({type:Number})],e.prototype,`selectedIndex`,void 0),Ol([P({type:Boolean})],e.prototype,`disabled`,void 0),Ol([P({type:Boolean})],e.prototype,`requiredIcon`,void 0),Ol([P({type:Boolean,attribute:`hidden`,reflect:!0,converter:B})],e.prototype,`visible`,void 0),Ol([P({type:Array})],e.prototype,`items`,void 0),Ol([I(`.kuc-mobile-dropdown-1-26-0__input-form__select__input`)],e.prototype,`_selectEl`,void 0),window.customElements.define(`kuc-mobile-dropdown-1-26-0`,e),U(Dl),kl=e})();var Al=`
  kuc-mobile-multi-choice-1-26-0,
  kuc-mobile-multi-choice-1-26-0 * {
    font-size: 13px;
    color: #333333;
    font-family: "メイリオ", Meiryo, "Hiragino Kaku Gothic ProN",
      "ヒラギノ角ゴ ProN W3", "ＭＳ Ｐゴシック", "Lucida Grande",
      "Lucida Sans Unicode", Arial, Verdana, sans-serif;
  }
  kuc-mobile-multi-choice-1-26-0:lang(es),
  kuc-mobile-multi-choice-1-26-0:lang(es) * {
    font-family: sans-serif;
  }
  kuc-mobile-multi-choice-1-26-0:lang(zh),
  kuc-mobile-multi-choice-1-26-0:lang(zh) * {
    font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,
      Hei, "Heiti SC", "Lucida Grande", "Lucida Sans Unicode", Arial,
      Verdana, sans-serif;
  }
  kuc-mobile-multi-choice-1-26-0:lang(zh-TW),
  kuc-mobile-multi-choice-1-26-0:lang(zh-TW) * {
      font-family: "微軟正黒體","Microsoft JhengHei","新宋体",NSimSun,STHeiti,
      Hei,"Heiti SC","Lucida Grande","Lucida Sans Unicode",Arial,
      Verdana,sans-serif
  }
  kuc-mobile-multi-choice-1-26-0 {
    display: inline-block;
    width: 100%;
  }

  kuc-mobile-multi-choice-1-26-0[hidden] {
    display: none;
  }

  .kuc-mobile-multi-choice-1-26-0__label {
    display: inline-block;
    font-size: 86%;
    font-weight: bold;
    line-height: 1.5;
    padding: 0px;
    margin: 0 0 4px 0;
    white-space: nowrap;
  }

  .kuc-mobile-multi-choice-1-26-0__label[hidden] {
    display: none;
  }

  .kuc-mobile-multi-choice-1-26-0__input-form {
    word-wrap: break-word;
    min-height: 1em;
    padding-left: 0.5em;
    padding-right: 0.5em;
  }

  .kuc-mobile-multi-choice-1-26-0__input-form__select {
    display: inline-block;
    border-radius: 0.4em;
    max-width: 100%;
  }

  .kuc-mobile-multi-choice-1-26-0__input-form__select.kuc--required {
    border: 1px solid #cf4a38;
  }

  .kuc-mobile-multi-choice-1-26-0__input-form__select__input {
    min-width: 100px;
    max-width: 100%;
  }

  .kuc-mobile-multi-choice-1-26-0__input-form__select__input:disabled {
    color: #999999;
    -webkit-text-fill-color: #999999;
    background-color: #d5d7d9;
    opacity: 1;
  }

  .kuc-mobile-multi-choice-1-26-0__input-form__select__input option:disabled {
    color: #999999;
    -webkit-text-fill-color: #999999;
    background-color: #d5d7d9;
    opacity: 1;
  }

  .kuc-mobile-multi-choice-1-26-0__input-form__select__input option:disabled[selected] {
    background-color: #cecece; /* Chrome */
    background-color: -moz-cellhighlight; /* Firefox */
    opacity: 1;
  }

  .kuc-mobile-multi-choice-1-26-0__input-form__select__input:disabled option {
    color: #999999;
    -webkit-text-fill-color: #999999;
  }
`,jl=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},Ml;(()=>{if(Ml=window.customElements.get(`kuc-mobile-multi-choice-1-26-0`),Ml)return;class e extends V{constructor(e){super(),this.className=``,this.error=``,this.id=``,this.label=``,this.disabled=!1,this.requiredIcon=!1,this.visible=!0,this.items=[],this.selectedIndex=[],this.value=[],this._valueMapping={},this._GUID=W();let t=G(e);this._setInitialValue(t),Object.assign(this,t)}_setInitialValue(e){let t=`value`in e,n=`selectedIndex`in e,r=e.selectedIndex||[];if(!t&&n){if(!K(r))return;let t=this._getValueMapping(e);this.value=this._getValidValue(t,r)}}_handleChangeInput(e){e.stopPropagation();let t=e.target,n=this.value?[...this.value]:this.value,r=Array.from(t.selectedOptions,e=>e.value),i=Array.from(t.selectedOptions,e=>e.dataset.index),a={value:r,oldValue:n};this.value=r,this.selectedIndex=i.map(e=>e?parseInt(e,10):0),H(this,`change`,a)}shouldUpdate(e){return e.has(`items`)&&!K(this.items)?(this.throwErrorAfterUpdateComplete(L.ITEMS.IS_NOT_ARRAY),!1):e.has(`value`)&&!K(this.value)?(this.throwErrorAfterUpdateComplete(L.VALUE.IS_NOT_ARRAY),!1):e.has(`selectedIndex`)&&!K(this.selectedIndex)?(this.throwErrorAfterUpdateComplete(L.SELECTED_INDEX.IS_NOT_ARRAY),!1):!0}willUpdate(e){if(e.has(`value`)){if(this.value.length>0)return;this.selectedIndex=[]}}update(e){(e.has(`items`)||e.has(`value`)||e.has(`selectedIndex`))&&(this._valueMapping=this._getValueMapping({items:this.items,value:this.value,selectedIndex:this.selectedIndex}),this._setValueAndSelectedIndex()),super.update(e)}_getValueMapping(e){let t=e.items||[],n=e.value||[],r=e.selectedIndex||[],i=t.map(e=>e.value||``),a=Object.assign({},i),o={};if(n.length===0){let e=this._getValidValue(a,r);return r.forEach((t,n)=>o[t]=e[n]),o}return this._getValidSelectedIndex(a).forEach((e,t)=>o[e]=n[t]),o}_getValidValue(e,t){return t.filter(t=>e[t]).map(t=>e[t])}_getValidSelectedIndex(e){let t=[];for(let n=0;n<this.value.length;n++){let r=this.selectedIndex[n];if(e[r]===this.value[n]){t.push(r);continue}let i=this.items.findIndex(e=>e.value===this.value[n]);t.push(i)}return t}_setValueAndSelectedIndex(){this.value=Object.values(this._valueMapping),this.selectedIndex=Object.keys(this._valueMapping).map(e=>parseInt(e,10))}_isCheckedItem(e,t){let n=Object.values(this._valueMapping),r=Object.keys(this._valueMapping);return n.filter((n,i)=>n===e.value&&t===parseInt(r[i],10)).length>0}_getItemTemplate(e,t){let n=this._isCheckedItem(e,t);return j`
        <option
          value="${e.value||``}"
          data-index="${t}"
          ?selected="${e.value!==void 0&&n}"
          ?disabled="${e.disabled}"
        >
          ${e.label===void 0?e.value:e.label}
        </option>
      `}render(){return j`
        <label
          class="kuc-mobile-multi-choice-1-26-0__label"
          for="${this._GUID}-label"
          ?hidden="${!this.label}"
        >
          <kuc-base-mobile-label-1-26-0
            .text="${this.label}"
            .requiredIcon="${this.requiredIcon}"
          ></kuc-base-mobile-label-1-26-0>
        </label>
        <div class="kuc-mobile-multi-choice-1-26-0__input-form">
          <div
            class="kuc-mobile-multi-choice-1-26-0__input-form__select
            ${this.requiredIcon?`kuc--required`:``}"
          >
            <select
              class="kuc-mobile-multi-choice-1-26-0__input-form__select__input"
              id="${this._GUID}-label"
              aria-describedby="${this._GUID}-error"
              aria-required="${this.requiredIcon}"
              aria-invalid="${this.error!==``}"
              ?disabled="${this.disabled}"
              multiple
              @change="${this._handleChangeInput}"
            >
              ${this.items.map((e,t)=>this._getItemTemplate(e,t))}
            </select>
          </div>
        </div>
        <kuc-base-mobile-error-1-26-0
          .text="${this.error}"
          .guid="${this._GUID}"
          ariaLive="assertive"
        >
        </kuc-base-mobile-error-1-26-0>
      `}}jl([P({type:String,reflect:!0,attribute:`class`})],e.prototype,`className`,void 0),jl([P({type:String})],e.prototype,`error`,void 0),jl([P({type:String,reflect:!0,attribute:`id`})],e.prototype,`id`,void 0),jl([P({type:String})],e.prototype,`label`,void 0),jl([P({type:Boolean})],e.prototype,`disabled`,void 0),jl([P({type:Boolean})],e.prototype,`requiredIcon`,void 0),jl([P({type:Boolean,attribute:`hidden`,reflect:!0,converter:B})],e.prototype,`visible`,void 0),jl([P({type:Array})],e.prototype,`items`,void 0),jl([P({type:Array})],e.prototype,`selectedIndex`,void 0),jl([P({type:Array})],e.prototype,`value`,void 0),jl([F()],e.prototype,`_valueMapping`,void 0),window.customElements.define(`kuc-mobile-multi-choice-1-26-0`,e),U(Al),Ml=e})();var Nl=`
  kuc-mobile-radio-button-1-26-0,
  kuc-mobile-radio-button-1-26-0 * {
    font-size: 13px;
    color: #333333;
    font-family: "メイリオ", Meiryo, "Hiragino Kaku Gothic ProN",
      "ヒラギノ角ゴ ProN W3", "ＭＳ Ｐゴシック", "Lucida Grande",
      "Lucida Sans Unicode", Arial, Verdana, sans-serif;
  }
  kuc-mobile-radio-button-1-26-0:lang(es),
  kuc-mobile-radio-button-1-26-0:lang(es) * {
    font-family: sans-serif;
  }
  kuc-mobile-radio-button-1-26-0:lang(zh) ,
  kuc-mobile-radio-button-1-26-0:lang(zh) * {
    font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,
      Hei, "Heiti SC", "Lucida Grande", "Lucida Sans Unicode", Arial,
      Verdana, sans-serif;
  }
  kuc-mobile-radio-button-1-26-0:lang(zh-TW),
  kuc-mobile-radio-button-1-26-0:lang(zh-TW) * {
      font-family: "微軟正黒體","Microsoft JhengHei","新宋体",NSimSun,STHeiti,
      Hei,"Heiti SC","Lucida Grande","Lucida Sans Unicode",Arial,
      Verdana,sans-serif
  }
  kuc-mobile-radio-button-1-26-0 {
    width: 100%;
    display: inline-block;
  }

  kuc-mobile-radio-button-1-26-0[hidden] {
    display: none;
  }

  .kuc-mobile-radio-button-1-26-0__group {
    border: none;
    height: auto;
    display: inline-block;
    width: 100%;
    vertical-align: top;
  }

  .kuc-mobile-radio-button-1-26-0__group__label {
    display: inline-block;
    font-size: 86%;
    font-weight: bold;
    line-height: 1.5;
    padding: 0px;
    margin: 0 0 4px 0;
    white-space: nowrap;
  }

  .kuc-mobile-radio-button-1-26-0__group__label[hidden] {
    display: none;
  }

  .kuc-mobile-radio-button-1-26-0__group__select-menu {
    margin-right: 0.5em;
    margin-left: 0.5em;
  }

  .kuc-mobile-radio-button-1-26-0__group__select-menu[bordervisible] {
    border-color: #b3b3b3;
    border-width: 1px;
    border-style: solid;
    border-radius: 0.4em;
  }

  .kuc-mobile-radio-button-1-26-0__group__select-menu__item {
    border: 1px solid transparent;
    position: relative;
    white-space: normal;
    word-wrap: normal;
    height: 45px;
    display: block;
  }

  .kuc-mobile-radio-button-1-26-0__group__select-menu[bordervisible]
    .kuc-mobile-radio-button-1-26-0__group__select-menu__item {
    border-bottom: 1px solid #b3b3b3;
  }

  .kuc-mobile-radio-button-1-26-0__group__select-menu[bordervisible]
    .kuc-mobile-radio-button-1-26-0__group__select-menu__item:last-child {
    border-bottom: 0px;
  }

  .kuc-mobile-radio-button-1-26-0__group__select-menu__item__input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
  }

  .kuc-mobile-radio-button-1-26-0__group__select-menu__item__label__icon {
    position: absolute;
    top: 50%;
    box-sizing: border-box;
    margin-top: -11px;
    width: 21px;
    height: 21px;
    box-shadow: 1px 1px 3px #f5f5f5 inset, -1px -1px 3px #f5f5f5 inset;
    content: "";
    border-radius: 9px;
    left: 8px;
  }

  .kuc-mobile-radio-button-1-26-0__group__select-menu__item__label__value {
    height: 45px;
    line-height: 45px;
    padding-left: 35px;
  }

  .kuc-mobile-radio-button-1-26-0__group__select-menu[disabled], 
  .kuc-mobile-radio-button-1-26-0__group__select-menu__item--disabled {
    background-color: #d5d7d9;
    color: #999999;
    -webkit-text-fill-color: #999999;
    background-color: #d5d7d9;
    opacity: 1;
  }
  .kuc-mobile-radio-button-1-26-0__group__select-menu[bordervisible]
  .kuc-mobile-radio-button-1-26-0__group__select-menu__item--disabled:last-child {
    border-bottom-left-radius: 0.3em;
    border-bottom-right-radius: 0.3em;
  }
  .kuc-mobile-radio-button-1-26-0__group__select-menu[bordervisible]
  .kuc-mobile-radio-button-1-26-0__group__select-menu__item--disabled:first-child {
    border-top-left-radius: 0.3em;
    border-top-right-radius: 0.3em;
  }

  .kuc-mobile-radio-button-1-26-0__group__select-menu__item__label {
    position: absolute;
    white-space: nowrap;
    width: 100%;
    top: 50%;
    transform: translateY(-50%);
    height: 100%;
    padding: 0px;
  }
`,Pl=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},Fl;(()=>{if(Fl=window.customElements.get(`kuc-mobile-radio-button-1-26-0`),Fl)return;class e extends V{constructor(e){super(),this.className=``,this.error=``,this.id=``,this.label=``,this.value=``,this.selectedIndex=-1,this.borderVisible=!0,this.disabled=!1,this.requiredIcon=!1,this.visible=!0,this.items=[],this._GUID=W();let t=G(e);this._setInitialValue(t),Object.assign(this,t)}_setInitialValue(e){let t=`value`in e,n=`selectedIndex`in e;!t&&n&&(this.value=this._getValue(e)||``)}willUpdate(e){if(e.has(`value`)){if(this.value!==``)return;this.selectedIndex=-1}}_handleChangeInput(e){e.stopPropagation();let t=e.target,n=t.value,r=t.dataset.index||`0`,i=parseInt(r,10);if(this.value===n&&this.selectedIndex===i)return;let a={oldValue:this.value,value:n};this.value=n,this.selectedIndex=i,H(this,`change`,a)}_getRadioIconSvgTemplate(e,t){return M`
      <svg
        class="kuc-mobile-radio-button-1-26-0__group__select-menu__item__label__icon"
        width="21"
        height="21"
        viewBox="0 0 21 21"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
      <defs>
        <radialGradient id="${this._GUID}-shadow">
          <stop offset="0%" style="stop-color:#5b5b5b;stop-opacity:0" />
          <stop offset="30%" style="stop-color:#5b5b5b;stop-opacity:0" />
          <stop offset="80%" style="stop-color:#5b5b5b;stop-opacity:0.1" />
          <stop offset="90%" style="stop-color:#5b5b5b;stop-opacity:0.15" />
          <stop offset="100%" style="stop-color:#5b5b5b;stop-opacity:0.2" />
        </radialGradient>
      </defs>
        <circle
          fill="url(#shadow)"
          cx="10.5"
          cy="10.5"
          r="10.15"
          stroke="#bbbbbb" stroke-width="1"/>
        ${t?M`<circle cx="10.5" cy="10.5" r="6.5" fill="${`#5b5b5b`}"/>`:``}
      </svg>
    `}_isCheckedItem(e,t){return this.value?e.value===this.value&&this.selectedIndex===t:this.selectedIndex===t}_getItemTemplate(e,t){let n=this._isCheckedItem(e,t);return j`
        <div
          class="kuc-mobile-radio-button-1-26-0__group__select-menu__item${e.disabled?` kuc-mobile-radio-button-1-26-0__group__select-menu__item--disabled`:``}"
        >
          <input
            type="radio"
            aria-describedby="${this._GUID}-error"
            id="${this._GUID}-item-${t}"
            data-index="${t}"
            class="kuc-mobile-radio-button-1-26-0__group__select-menu__item__input"
            name="${this._GUID}-group"
            value="${e.value===void 0?``:e.value}"
            aria-invalid="${this.error!==``}"
            aria-required="${this.requiredIcon}"
            ?disabled="${this.disabled||e.disabled}"
            @change="${this._handleChangeInput}"
          />
          <label
            class="kuc-mobile-radio-button-1-26-0__group__select-menu__item__label"
            for="${this._GUID}-item-${t}"
            >${this._getRadioIconSvgTemplate(this.disabled,n)}
            <div
              class="kuc-mobile-radio-button-1-26-0__group__select-menu__item__label__value"
            >
              ${e.label===void 0?e.value:e.label}
            </div>
          </label>
        </div>
      `}shouldUpdate(e){return e.has(`items`)&&!K(this.items)?(this.throwErrorAfterUpdateComplete(L.ITEMS.IS_NOT_ARRAY),!1):e.has(`value`)&&!ts(this.value)?(this.throwErrorAfterUpdateComplete(L.VALUE.IS_NOT_STRING),!1):e.has(`selectedIndex`)&&!cs(this.selectedIndex)?(this.throwErrorAfterUpdateComplete(L.SELECTED_INDEX.IS_NOT_NUMBER),!1):!0}update(e){(e.has(`items`)||e.has(`value`)||e.has(`selectedIndex`))&&(this.selectedIndex=this._getSelectedIndex(),this.value=this._getValue({items:this.items,selectedIndex:this.selectedIndex})||``),super.update(e)}render(){return j`
        <div class="kuc-mobile-radio-button-1-26-0__group">
          <div
            class="kuc-mobile-radio-button-1-26-0__group__label"
            ?hidden="${!this.label}"
          >
            <kuc-base-mobile-label-1-26-0
              .text="${this.label}"
              .requiredIcon="${this.requiredIcon}"
            ></kuc-base-mobile-label-1-26-0>
          </div>
          <div
            class="kuc-mobile-radio-button-1-26-0__group__select-menu"
            ?borderVisible="${this.borderVisible}"
            ?disabled="${this.disabled}"
          >
            ${this.items.map((e,t)=>this._getItemTemplate(e,t))}
          </div>
          <kuc-base-mobile-error-1-26-0
            .text="${this.error}"
            .guid="${this._GUID}"
            ariaLive="assertive"
          >
          </kuc-base-mobile-error-1-26-0>
        </div>
      `}updated(){this._inputEls.forEach((e,t)=>{e.checked=this.value===e.value&&t===this.selectedIndex})}_getSelectedIndex(){if(!this.value)return this.items[this.selectedIndex]?this.selectedIndex:-1;let e=this.items.findIndex(e=>e.value===this.value);if(e===-1)return-1;let t=this.items.findIndex((e,t)=>e.value===this.value&&t===this.selectedIndex);return t>-1?t:e}_getValue(e){let t=(e.items||[])[e.selectedIndex===0||e.selectedIndex?e.selectedIndex:-1];return t?t.value:``}}Pl([P({type:String,reflect:!0,attribute:`class`})],e.prototype,`className`,void 0),Pl([P({type:String})],e.prototype,`error`,void 0),Pl([P({type:String,reflect:!0,attribute:`id`})],e.prototype,`id`,void 0),Pl([P({type:String})],e.prototype,`label`,void 0),Pl([P({type:String})],e.prototype,`value`,void 0),Pl([P({type:Number})],e.prototype,`selectedIndex`,void 0),Pl([P({type:Boolean})],e.prototype,`borderVisible`,void 0),Pl([P({type:Boolean})],e.prototype,`disabled`,void 0),Pl([P({type:Boolean})],e.prototype,`requiredIcon`,void 0),Pl([P({type:Boolean,attribute:`hidden`,reflect:!0,converter:B})],e.prototype,`visible`,void 0),Pl([P({type:Array})],e.prototype,`items`,void 0),Pl([ja(`.kuc-mobile-radio-button-1-26-0__group__select-menu__item__input`)],e.prototype,`_inputEls`,void 0),window.customElements.define(`kuc-mobile-radio-button-1-26-0`,e),U(Nl),Fl=e})();var Il=`
  kuc-mobile-text-1-26-0,
  kuc-mobile-text-1-26-0 * {
    font-size: 13px;
    font-family: "メイリオ", Meiryo, "Hiragino Kaku Gothic ProN",
      "ヒラギノ角ゴ ProN W3", "ＭＳ Ｐゴシック", "Lucida Grande",
      "Lucida Sans Unicode", Arial, Verdana, sans-serif;
  }
  kuc-mobile-text-1-26-0:lang(es),
  kuc-mobile-text-1-26-0:lang(es) * {
    font-family: sans-serif;
  }
  kuc-mobile-text-1-26-0:lang(zh),
  kuc-mobile-text-1-26-0:lang(zh) * {
    font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,
      Hei, "Heiti SC", "Lucida Grande", "Lucida Sans Unicode", Arial,
      Verdana, sans-serif;
  }
  kuc-mobile-text-1-26-0:lang(zh-TW),
  kuc-mobile-text-1-26-0:lang(zh-TW) * {
      font-family: "微軟正黒體","Microsoft JhengHei","新宋体",NSimSun,STHeiti,
      Hei,"Heiti SC","Lucida Grande","Lucida Sans Unicode",Arial,
      Verdana,sans-serif
  }
  kuc-mobile-text-1-26-0 {
    display: block;
  }
  kuc-mobile-text-1-26-0[hidden] {
    display: none;
  }
  .kuc-mobile-text-1-26-0__label {
    display: inline-block;
    font-weight: bold;
    line-height: 1.5;
    padding: 0;
    margin: 0 0 4px 0;
    white-space: nowrap;
  }
  .kuc-mobile-text-1-26-0__label[hidden] {
    display: none;
  }
  .kuc-mobile-text-1-26-0__input-form {
    padding-left: 0.5em;
    padding-right: 0.5em;
    display: flex;
    align-items: center;
  }
  .kuc-mobile-text-1-26-0__input-form__prefix {
    margin-right: 4px;
    color: #888888;
  }
  .kuc-mobile-text-1-26-0__input-form__prefix[hidden] {
    display: none;
  }
  .kuc-mobile-text-1-26-0__input-form__input {
    width: 100%;
    min-width: 20px;
    padding: 0.4em;
    border: 1px solid #b3b3b3;
    outline: 0;
    box-shadow: 0 1px 0 #ffffff, inset 0 2px 3px #dadada;
    border-radius: 0.4em;
    box-sizing: border-box;
    text-align: left;
  }
  .kuc-mobile-text-1-26-0__input-form__input[aria-required="true"] {
    border: 1px solid #cf4a38;
  }
  .kuc-mobile-text-1-26-0__input-form__input[textAlign="right"] {
    text-align: right;
  }
  .kuc-mobile-text-1-26-0__input-form__input:disabled {
    color: #999999;
    background-color: #d5d7d9;
    -webkit-text-fill-color: #999999;
    opacity: 1;
    -webkit-opacity: 1;
  }
  .kuc-mobile-text-1-26-0__input-form__suffix {
    margin-left: 4px;
    color: #888888;
  }
  .kuc-mobile-text-1-26-0__input-form__suffix[hidden] {
    display: none;
  }
`,Ll=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},Rl;(()=>{if(Rl=window.customElements.get(`kuc-mobile-text-1-26-0`),Rl)return;class e extends V{constructor(e){super(),this.className=``,this.error=``,this.id=``,this.label=``,this.placeholder=``,this.prefix=``,this.suffix=``,this.textAlign=`left`,this.value=``,this.disabled=!1,this.requiredIcon=!1,this.visible=!0,this._GUID=W();let t=G(e);Object.assign(this,t)}_handleFocusInput(e){let t={value:this.value};H(this,`focus`,t)}_handleChangeInput(e){e.stopPropagation();let t=e.target,n={value:``,oldValue:this.value};this.value=t.value,n.value=this.value,H(this,`change`,n)}_handleInputText(e){e.stopPropagation();let t={value:e.target.value,data:e.data};H(this,`input`,t)}render(){return j`
        <label
          class="kuc-mobile-text-1-26-0__label"
          for="${this._GUID}-label"
          ?hidden="${!this.label}"
        >
          <kuc-base-mobile-label-1-26-0
            .requiredIcon="${this.requiredIcon}"
            .text="${this.label}"
          ></kuc-base-mobile-label-1-26-0>
        </label>
        <div class="kuc-mobile-text-1-26-0__input-form">
          <span
            class="kuc-mobile-text-1-26-0__input-form__prefix"
            ?hidden="${!this.prefix}"
            >${this.prefix}</span
          >
          <input
            class="kuc-mobile-text-1-26-0__input-form__input"
            id="${this._GUID}-label"
            placeholder="${this.placeholder}"
            textAlign="${this.textAlign}"
            type="text"
            .value="${this.value}"
            ?disabled="${this.disabled}"
            aria-invalid="${this.error!==``}"
            aria-describedby="${this._GUID}-error"
            aria-required="${this.requiredIcon}"
            @focus="${this._handleFocusInput}"
            @change="${this._handleChangeInput}"
            @input="${this._handleInputText}"
          />
          <span
            class="kuc-mobile-text-1-26-0__input-form__suffix"
            ?hidden="${!this.suffix}"
            >${this.suffix}</span
          >
        </div>
        <kuc-base-mobile-error-1-26-0 .guid="${this._GUID}" .text="${this.error}">
        </kuc-base-mobile-error-1-26-0>
      `}}Ll([P({type:String,reflect:!0,attribute:`class`})],e.prototype,`className`,void 0),Ll([P({type:String})],e.prototype,`error`,void 0),Ll([P({type:String,reflect:!0,attribute:`id`})],e.prototype,`id`,void 0),Ll([P({type:String})],e.prototype,`label`,void 0),Ll([P({type:String})],e.prototype,`placeholder`,void 0),Ll([P({type:String})],e.prototype,`prefix`,void 0),Ll([P({type:String})],e.prototype,`suffix`,void 0),Ll([P({type:String})],e.prototype,`textAlign`,void 0),Ll([P({type:String})],e.prototype,`value`,void 0),Ll([P({type:Boolean})],e.prototype,`disabled`,void 0),Ll([P({type:Boolean})],e.prototype,`requiredIcon`,void 0),Ll([P({type:Boolean,attribute:`hidden`,reflect:!0,converter:B})],e.prototype,`visible`,void 0),window.customElements.define(`kuc-mobile-text-1-26-0`,e),U(Il),Rl=e})();var zl=`
  kuc-mobile-textarea-1-26-0,
  kuc-mobile-textarea-1-26-0 * {
    font-size: 13px;
    font-family: "メイリオ", Meiryo, "Hiragino Kaku Gothic ProN",
      "ヒラギノ角ゴ ProN W3", "ＭＳ Ｐゴシック", "Lucida Grande",
      "Lucida Sans Unicode", Arial, Verdana, sans-serif;
  }
  kuc-mobile-textarea-1-26-0:lang(es),
  kuc-mobile-textarea-1-26-0:lang(es) * {
    font-family: sans-serif;
  }
  kuc-mobile-textarea-1-26-0:lang(zh),
  kuc-mobile-textarea-1-26-0:lang(zh) * {
    font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,
      Hei, "Heiti SC", "Lucida Grande", "Lucida Sans Unicode", Arial,
      Verdana, sans-serif;
  }
  kuc-mobile-textarea-1-26-0:lang(zh-TW),
  kuc-mobile-textarea-1-26-0:lang(zh-TW) * {
      font-family: "微軟正黒體","Microsoft JhengHei","新宋体",NSimSun,STHeiti,
      Hei,"Heiti SC","Lucida Grande","Lucida Sans Unicode",Arial,
      Verdana,sans-serif
  }
  kuc-mobile-textarea-1-26-0 {
    display: block;
  }
  kuc-mobile-textarea-1-26-0[hidden] {
    display: none;
  }
  .kuc-mobile-textarea-1-26-0__label {
    padding: 0;
    margin: 0 0 4px 0;
    display: inline-block;
    font-weight: bold;
    line-height: 1.5;
    white-space: nowrap;
  }
  .kuc-mobile-textarea-1-26-0__label[hidden] {
    display: none;
  }
  .kuc-mobile-textarea-1-26-0__form {
    padding-left: 0.5em;
    padding-right: 0.5em;
  }
  .kuc-mobile-textarea-1-26-0__form__textarea {
    width: 100%;
    height: 120px;
    padding: 0.4em;
    border: 1px solid #b3b3b3;
    outline: 0;
    box-shadow: 0 1px 0 #ffffff, inset 0 2px 3px #dadada;
    border-radius: 0.4em;
    box-sizing: border-box;
    vertical-align: top;
  }
  .kuc-mobile-textarea-1-26-0__form__textarea[aria-required="true"] {
    border: 1px solid #cf4a38;
  }
  .kuc-mobile-textarea-1-26-0__form__textarea:disabled {
    color: #999999;
    background-color: #d5d7d9;
    opacity: 1;
  }
`,Bl=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},Vl;(()=>{if(Vl=window.customElements.get(`kuc-mobile-textarea-1-26-0`),Vl)return;class e extends V{constructor(e){super(),this.className=``,this.error=``,this.id=``,this.label=``,this.placeholder=``,this.value=``,this.disabled=!1,this.requiredIcon=!1,this.visible=!0,this._GUID=W();let t=G(e);Object.assign(this,t)}_handleFocusInput(e){let t={value:this.value};H(this,`focus`,t)}_handleChangeInput(e){e.stopPropagation();let t=e.target,n={value:``,oldValue:this.value};this.value=t.value,n.value=this.value,H(this,`change`,n)}_handleInputTextArea(e){e.stopPropagation();let t={value:e.target.value,data:e.data};H(this,`input`,t)}render(){return j`
        <label
          class="kuc-mobile-textarea-1-26-0__label"
          for="${this._GUID}-label"
          ?hidden="${!this.label}"
        >
          <kuc-base-mobile-label-1-26-0
            .requiredIcon="${this.requiredIcon}"
            .text="${this.label}"
          ></kuc-base-mobile-label-1-26-0>
        </label>
        <div class="kuc-mobile-textarea-1-26-0__form">
          <textarea
            class="kuc-mobile-textarea-1-26-0__form__textarea"
            id="${this._GUID}-label"
            placeholder="${this.placeholder}"
            ?disabled="${this.disabled}"
            .value="${this.value}"
            aria-invalid="${this.error!==``}"
            aria-describedby="${this._GUID}-error"
            aria-required="${this.requiredIcon}"
            @focus="${this._handleFocusInput}"
            @change="${this._handleChangeInput}"
            @input="${this._handleInputTextArea}"
          /></textarea>
        </div>
        <kuc-base-mobile-error-1-26-0 .guid="${this._GUID}" .text="${this.error}">
        </kuc-base-mobile-error-1-26-0>
      `}}Bl([P({type:String,reflect:!0,attribute:`class`})],e.prototype,`className`,void 0),Bl([P({type:String})],e.prototype,`error`,void 0),Bl([P({type:String,reflect:!0,attribute:`id`})],e.prototype,`id`,void 0),Bl([P({type:String})],e.prototype,`label`,void 0),Bl([P({type:String})],e.prototype,`placeholder`,void 0),Bl([P({type:String})],e.prototype,`value`,void 0),Bl([P({type:Boolean})],e.prototype,`disabled`,void 0),Bl([P({type:Boolean})],e.prototype,`requiredIcon`,void 0),Bl([P({type:Boolean,attribute:`hidden`,reflect:!0,converter:B})],e.prototype,`visible`,void 0),window.customElements.define(`kuc-mobile-textarea-1-26-0`,e),U(zl),Vl=e})();var Hl=`
  kuc-mobile-notification-1-26-0 {
    display: block;
    font-size: 13px;
    font-family: "メイリオ", Meiryo, "Hiragino Kaku Gothic ProN",
      "ヒラギノ角ゴ ProN W3", "ＭＳ Ｐゴシック", "Lucida Grande",
      "Lucida Sans Unicode", Arial, Verdana, sans-serif;
    visibility: hidden;
    animation-fill-mode: forwards;
    position: relative;
    top: -100px;
    left: 0;
    z-index: 10000;
  }
  kuc-mobile-notification-1-26-0:lang(es),
  kuc-mobile-notification-1-26-0:lang(es) * {
    font-family: sans-serif;
  }
  kuc-mobile-notification-1-26-0:lang(zh),
  kuc-mobile-notification-1-26-0:lang(zh) * {
    font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,
      Hei, "Heiti SC", "Lucida Grande", "Lucida Sans Unicode", Arial,
      Verdana, sans-serif;
  }
  kuc-mobile-notification-1-26-0:lang(zh-TW),
  kuc-mobile-notification-1-26-0:lang(zh-TW) * {
      font-family: "微軟正黒體","Microsoft JhengHei","新宋体",NSimSun,STHeiti,
      Hei,"Heiti SC","Lucida Grande","Lucida Sans Unicode",Arial,
      Verdana,sans-serif
  }
  .kuc-mobile-notification-fadein-1-26-0 {
    animation-name: kuc-mobile-notification-fade-in-1-26-0;
    animation-duration: 250ms;
    animation-timing-function: ease-out;
    width: 100%;
    position: fixed;
    visibility: visible;
  }

  .kuc-mobile-notification-fadeout-1-26-0 {
    animation-name: kuc-mobile-notification-fade-out-1-26-0;
    animation-duration: 250ms;
    animation-timing-function: ease-out;
    width: 100%;
    position: fixed;
  }

  .kuc-mobile-notification-1-26-0__notification {
    background-color: #ffffcf;
    background: linear-gradient(#ffda4a, #ffc32c);
    width: 100%;
    min-height: 48px;
    position: relative;
    font-size: 12px;
    font-weight: 700;
    line-height: 14px;
    text-shadow: rgba(255, 255, 255, 0.5) 0 1px 0;
    color: #333333;
    text-align: center;
    vertical-align: top;
  }

  .kuc-mobile-notification-1-26-0__notification__title {
    display: inline-block;
    vertical-align: middle;
    padding: 17px 44px 11px 44px;
    margin: 0 0 0 -20px;
    text-align: left;
    font-weight: inherit;
    font-family: inherit;
    word-break: break-word;
    white-space: pre-wrap;
  }

  .kuc-mobile-notification-1-26-0__notification__title--html {
    white-space: normal;
  }

  .kuc-mobile-notification-1-26-0__notification__close-button {
    position: absolute;
    right: 0;
    top: 0;
    width: 44px;
    height: 48px;
    padding: 0;
    background-color: transparent;
    border: none;
    vertical-align: middle;
    pointer-events: auto;
    outline: none;
  }
  @keyframes kuc-mobile-notification-fade-in-1-26-0 {
    0% {
      top: -100px;
      left: 0;
    }
    50% {
      top: -50px;
      left: 0;
    }
    100% {
      top: 0;
      left: 0;
    }
  }
  @keyframes kuc-mobile-notification-fade-out-1-26-0 {
    0% {
      visibility: visible;
      top: 0;
      left: 0;
    }
    50% {
      visibility: visible;
      top: -50px;
      left: 0;
    }
    100% {
      top: -100px;
      left: 0;
    }
  }
`,Ul=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},Wl;(()=>{if(Wl=window.customElements.get(`kuc-mobile-notification-1-26-0`),Wl)return;class e extends V{constructor(e){super(),this.className=``,this.id=``,this.text=``,this.duration=-1,this.container=document.body,this.content=``,this._isOpened=!1,this._content=``;let t=G(e);Object.assign(this,t)}_handleClickCloseButton(e){this.close()}_getCloseButtonSvgTemplate(){return M`
      <svg
        height="12"
        width="12"
        viewBox="0 0 512.001 512.001"
        xmlns="http://www.w3.org/2000/svg">
          <g>
            <path
              d="m512.001 84.853-84.853-84.853-171.147 171.147-171.148-171.147-84.853 84.853 171.148 171.147-171.148 171.148 84.853 84.853 171.148-171.147 171.147 171.147 84.853-84.853-171.148-171.148z"/>
          </g>
        </svg>
      `}_setAutoCloseTimer(){this._clearAutoCloseTimer(),!Number.isFinite(this.duration)||this.duration<0||(this._timeoutID=window.setTimeout(()=>{this.close()},this.duration))}_clearAutoCloseTimer(){this._timeoutID&&window.clearTimeout(this._timeoutID)}open(){this._isValidContainerElement()?(this.container.appendChild(this),this.performUpdate(),this.classList.remove(`kuc-mobile-notification-fadeout-1-26-0`),this.classList.add(`kuc-mobile-notification-fadein-1-26-0`),this._isOpened=!0,this._setAutoCloseTimer()):(document.body.appendChild(this),requestAnimationFrame(()=>{document.body.removeChild(this)}),this.performUpdate())}close(){this._close(),H(this,`close`)}_close(){this._isOpened=!1,this.classList.remove(`kuc-mobile-notification-fadein-1-26-0`),this.classList.add(`kuc-mobile-notification-fadeout-1-26-0`),this._clearAutoCloseTimer()}shouldUpdate(e){if(e.has(`container`)){if(this.container===null||this.container===void 0)return this._isOpened&&this._close(),!1;let e=this._isValidContainerElement(),t=!e||!document.contains(this.container);if(this._isOpened&&t&&this._close(),!e)return this.throwErrorAfterUpdateComplete(L.CONTAINER.INVALID),!1}return!0}willUpdate(e){(e.has(`content`)||e.has(`text`))&&(this._content=this.content!==null&&this.content!==void 0&&this.content!==``?ls(this.content)?j`<div
              class="kuc-mobile-notification-1-26-0__notification__title--html"
            >
              ${Io(this.content)}
            </div>`:this.content:this.text)}_isValidContainerElement(){return this.container instanceof HTMLElement}render(){return j`
        <div class="kuc-mobile-notification-1-26-0__notification">
          <pre
            class="kuc-mobile-notification-1-26-0__notification__title"
            aria-live="assertive"
            role="${this._isOpened?`alert`:``}"
          ><!---->${this._content}</pre>
          <button
            class="kuc-mobile-notification-1-26-0__notification__close-button"
            type="button"
            aria-label="close"
            @click="${this._handleClickCloseButton}"
          >
            ${this._getCloseButtonSvgTemplate()}
          </button>
        </div>
      `}}Ul([P({type:String,reflect:!0,attribute:`class`})],e.prototype,`className`,void 0),Ul([P({type:String,reflect:!0,attribute:`id`})],e.prototype,`id`,void 0),Ul([P({type:String})],e.prototype,`text`,void 0),Ul([P({type:Number})],e.prototype,`duration`,void 0),Ul([P()],e.prototype,`container`,void 0),Ul([P()],e.prototype,`content`,void 0),Ul([F()],e.prototype,`_isOpened`,void 0),window.customElements.define(`kuc-mobile-notification-1-26-0`,e),U(Hl),Wl=e})();var Gl=e=>{let t=document.createElement(`div`);return t.style.cssText=`
  height: 0px;
  overflow: hidden;
  display: inline-block;
  font-size: 14px;
  font-family: ${window.getComputedStyle(e).fontFamily};
  `,t},Kl=e=>{let t=Gl(e),n=e.cloneNode(!0);if(n.hasAttribute(`hidden`))return 0;t.appendChild(n),document.body.appendChild(t);let r=t.getBoundingClientRect().width;return document.body.removeChild(t),r},ql=`
kuc-base-mobile-datetime-calendar-header-1-26-0,
kuc-base-mobile-datetime-calendar-header-1-26-0 * {
    font-family: "メイリオ", Meiryo, "Hiragino Kaku Gothic ProN",
    "ヒラギノ角ゴ ProN W3", "ＭＳ Ｐゴシック", "Lucida Grande",
    "Lucida Sans Unicode", Arial, Verdana, sans-serif;
}
kuc-base-mobile-datetime-calendar-header-1-26-0:lang(zh),
kuc-base-mobile-datetime-calendar-header-1-26-0:lang(zh) * {
    font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,
    Hei, "Heiti SC", "Lucida Grande", "Lucida Sans Unicode", Arial,
    Verdana, sans-serif;
}
kuc-base-mobile-datetime-calendar-header-1-26-0:lang(zh-TW),
kuc-base-mobile-datetime-calendar-header-1-26-0:lang(zh-TW) * {
    font-family: "微軟正黒體","Microsoft JhengHei","新宋体",NSimSun,STHeiti,
    Hei,"Heiti SC","Lucida Grande","Lucida Sans Unicode",Arial,
    Verdana,sans-serif
}
kuc-base-mobile-datetime-calendar-header-1-26-0:lang(es),
kuc-base-mobile-datetime-calendar-header-1-26-0:lang(es) * {
    font-family: sans-serif;
}
.kuc-base-mobile-datetime-calendar-header-1-26-0__group {
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    border-bottom: 1px solid #e3e7e8;
    padding: 0;
    white-space: nowrap;
}
.kuc-base-mobile-datetime-calendar-header-1-26-0__group__button {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: inherit;
    border: 0;
    margin: 0;
    padding: 0;
    min-width: 40px;
    width: 40px;
    height: 40px;
    overflow: hidden;
    text-indent: 100%;
    white-space: nowrap;
    word-wrap: normal;
    cursor: pointer;
    -webkit-appearance: button;
}
.kuc-base-mobile-datetime-calendar-header-1-26-0__group__button-icon {
    vertical-align: middle;
}
.kuc-base-mobile-datetime-calendar-header-1-26-0__group__button:focus {
    outline: none;
}
.kuc-base-mobile-datetime-calendar-header-1-26-0__group__center {
    text-align: center;
    display: flex;
    flex: 1;
    justify-content: center;
    min-width: 186px;
}
.kuc-base-mobile-datetime-calendar-header-1-26-0__group__center
    > :first-child {
    padding-left: 13px;
}
.kuc-base-mobile-datetime-calendar-header-1-26-0__group__center__month,
.kuc-base-mobile-datetime-calendar-header-1-26-0__group__center__year {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
}
.kuc-base-mobile-datetime-calendar-header-1-26-0__group__center__month__select,
.kuc-base-mobile-datetime-calendar-header-1-26-0__group__center__year__select {
    font-size: 14px;
    font-weight: 700;
    padding: 0 22.4px 0 0;
    line-height: 40px;
    border: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    background: url("data:image/svg+xml,%3Csvg%0A%20%20%20%20width%3D%2211%22%0A%20%20%20%20height%3D%226%22%0A%20%20%20%20viewBox%3D%220%200%2011%206%22%0A%20%20%20%20fill%3D%22none%22%0A%20%20%20%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%0A%20%20%3E%0A%20%20%20%20%3Cpath%0A%20%20%20%20%20%20fill-rule%3D%22evenodd%22%0A%20%20%20%20%20%20clip-rule%3D%22evenodd%22%0A%20%20%20%20%20%20d%3D%22M5.5061%206L0%200L11%200L5.5061%206Z%22%0A%20%20%20%20%20%20fill%3D%22%234b4b4b%22%0A%20%20%20%20%2F%3E%0A%20%20%3C%2Fsvg%3E")
    no-repeat center right 0.6em #ffffff;
}
.kuc-base-mobile-datetime-calendar-header-1-26-0__group__center__month__select:focus,
.kuc-base-mobile-datetime-calendar-header-1-26-0__group__center__year__select:focus {
    outline: none;
}
.kuc-base-mobile-datetime-calendar-header-1-26-0__month {
    margin: 0 4px 0 4px;
}
`,Jl=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a};function Yl(e){return e>0&&e<13}function Xl(e){return e>=0&&e<1e4}var Zl=class extends V{constructor(){super(...arguments),this.language=`en`,this.month=1,this.year=new Date().getFullYear(),this._locale=z(`en`)}update(e){e.has(`language`)&&(this._locale=z(this.language)),this._monthOptions=this._generateMonthOptions(),this._yearOptions=this._generateYearOptions(),super.update(e)}render(){return j`
      <div class="kuc-base-mobile-datetime-calendar-header-1-26-0__group">
        <button
          aria-label="previous month"
          type="button"
          class="kuc-base-mobile-datetime-calendar-header-1-26-0__group__button kuc-base-mobile-datetime-calendar-header-1-26-0__group__button--previous-month"
          @click="${this._handleClickCalendarPrevMonthBtn}"
        >
          ${this._getLeftArrowIconSvgTemplate()}
        </button>
        <div class="kuc-base-mobile-datetime-calendar-header-1-26-0__group__center">
          ${this._getYearMonthTemplate()}
        </div>
        <button
          aria-label="next month"
          type="button"
          class="kuc-base-mobile-datetime-calendar-header-1-26-0__group__button kuc-base-mobile-datetime-calendar-header-1-26-0__group__button--next-month"
          @click="${this._handleClickCalendarNextMonthBtn}"
        >
          ${this._getRightArrowIconSvgTemplate()}
        </button>
      </div>
    `}updated(e){e.has(`month`)&&this._setSelectMonthWidth(this.month),e.has(`year`)&&this._setYearSelectedIndex(),super.update(e)}_setSelectMonthWidth(e){let t=this._monthOptions[e-1].label;if(!t)return;let n=document.createElement(`span`);n.innerText=t;let r=Kl(n);this._selectMonthEl.selectedIndex=this.month-1,this._selectMonthEl.style.width=r+35+`px`}_setYearSelectedIndex(){this.year<100?this._selectYearEl.selectedIndex=this.year:this._selectYearEl.selectedIndex=100}_generateMonthOptions(){return this._locale.MONTH_SELECT.map((e,t)=>({value:`${t+1}`,label:`${e}`}))}_generateYearOptions(){return this._getYearOptions().map(e=>({value:`${e}`,label:`${e}${this._locale.YEAR_SELECT_POSTFIX}`}))}_getYearOptions(){let e=[];Number.isInteger(this.year)||(this.year=new Date().getFullYear());let t=this.year<100?0:this.year-100,n=this.year>=9899?9999:this.year+100;for(t>=n&&(t=n-100);t<=n;t++)e.push(t);return e}_getYearMonthTemplate(){return this.language===`zh`||this.language===`ja`||this.language===`zh-TW`?j` ${this._getYearTemplate()}${this._getMonthTemplate()} `:j` ${this._getMonthTemplate()}${this._getYearTemplate()} `}_handleChangeMonthDropdown(e){e.stopPropagation(),e.preventDefault();let t=e.target;this.month=parseInt(t.value,10),this._dispatchCalendarHeaderChangeEvent()}_handleChangeYearDropdown(e){e.stopPropagation(),e.preventDefault();let t=e.target;this.year=parseInt(t.value,10),this._dispatchCalendarHeaderChangeEvent()}_handleClickCalendarPrevMonthBtn(e){e.stopPropagation(),this.month===1?(this.month=12,this.year--):--this.month,this._dispatchCalendarHeaderChangeEvent()}_handleClickCalendarNextMonthBtn(e){e.stopPropagation(),this.month===12?(this.month=1,this.year++):this.month+=1,this._dispatchCalendarHeaderChangeEvent()}_dispatchCalendarHeaderChangeEvent(){let e={value:`${this.year}-${this.month}`};H(this,`kuc:mobile-calendar-header-change`,e)}_getOptionsMonthTemplate(){return this._monthOptions.map(e=>j`
        <option
          ?selected="${parseInt(e.value,10)===this.month}"
          value="${e.value}"
        >
          ${e.label}
        </option>
      `)}_getOptionsYearTemplate(){return this._yearOptions.map(e=>j`
        <option
          ?selected="${parseInt(e.value,10)===this.year}"
          value="${e.value}"
        >
          ${e.label}
        </option>
      `)}_getMonthTemplate(){return j`
      <div
        class="kuc-base-mobile-datetime-calendar-header-1-26-0__group__center__month"
      >
        <select
          class="kuc-base-mobile-datetime-calendar-header-1-26-0__group__center__month__select"
          @change="${this._handleChangeMonthDropdown}"
        >
          ${this._getOptionsMonthTemplate()}
        </select>
      </div>
    `}_getYearTemplate(){return j`
      <div
        class="kuc-base-mobile-datetime-calendar-header-1-26-0__group__center__year"
      >
        <select
          class="kuc-base-mobile-datetime-calendar-header-1-26-0__group__center__year__select"
          @change="${this._handleChangeYearDropdown}"
        >
          ${this._getOptionsYearTemplate()}
        </select>
      </div>
    `}_getLeftArrowIconSvgTemplate(){return M`
    <svg
      width="16"
      height="14"
      viewBox="0 0 16 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M8.70788 11.9567C9.0984 12.3472 9.0984 12.9804 8.70788 13.3709C8.31735 13.7614 7.68419 13.7614 7.29366 13.3709L2.34392 8.42118L0.929703 7.00696L2.34392 5.59275L7.29366 0.643003C7.68419 0.25248 8.31735 0.25248 8.70788 0.643003C9.0984 1.03353 9.0984 1.66669 8.70788 2.05722L4.68709 6.07801L14.0718 6.07801C14.6241 6.07801 15.0718 6.52572 15.0718 7.07801C15.0718 7.63029 14.6241 8.07801 14.0718 8.07801L4.82917 8.07801L8.70788 11.9567Z"
        fill="#206694"
      />
    </svg>`}_getRightArrowIconSvgTemplate(){return M`
    <svg
      width="16"
      height="14"
      viewBox="0 0 16 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M7.29396 2.0572C6.90344 1.66668 6.90344 1.03351 7.29396 0.642991C7.68449 0.252466 8.31765 0.252467 8.70817 0.642991L13.6579 5.59274L15.0721 7.00695L13.6579 8.42117L8.70817 13.3709C8.31765 13.7614 7.68448 13.7614 7.29396 13.3709C6.90344 12.9804 6.90344 12.3472 7.29396 11.9567L11.3148 7.93591L1.93 7.93591C1.37772 7.93591 0.93 7.48819 0.93 6.93591C0.93 6.38362 1.37772 5.93591 1.93 5.93591L11.1727 5.93591L7.29396 2.0572Z"
        fill="#206694"
      />
    </svg>`}};Jl([P({type:String,attribute:`lang`,reflect:!0})],Zl.prototype,`language`,void 0),Jl([P({type:Number,hasChanged(e){return Yl(e)}})],Zl.prototype,`month`,void 0),Jl([P({type:Number,hasChanged(e){return Xl(e)}})],Zl.prototype,`year`,void 0),Jl([F()],Zl.prototype,`_monthOptions`,void 0),Jl([F()],Zl.prototype,`_yearOptions`,void 0),Jl([I(`.kuc-base-mobile-datetime-calendar-header-1-26-0__group__center__month__select`)],Zl.prototype,`_selectMonthEl`,void 0),Jl([I(`.kuc-base-mobile-datetime-calendar-header-1-26-0__group__center__year__select`)],Zl.prototype,`_selectYearEl`,void 0),window.customElements.get(`kuc-base-mobile-datetime-calendar-header-1-26-0`)||(U(ql),window.customElements.define(`kuc-base-mobile-datetime-calendar-header-1-26-0`,Zl));var Ql=`
kuc-base-mobile-datetime-calendar-body-1-26-0,
kuc-base-mobile-datetime-calendar-body-1-26-0 * {
    font-family: "メイリオ", Meiryo, "Hiragino Kaku Gothic ProN",
    "ヒラギノ角ゴ ProN W3", "ＭＳ Ｐゴシック", "Lucida Grande",
    "Lucida Sans Unicode", Arial, Verdana, sans-serif;
}

kuc-base-mobile-datetime-calendar-body-1-26-0:lang(zh),
kuc-base-mobile-datetime-calendar-body-1-26-0:lang(zh) * {
    font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,
    Hei, "Heiti SC", "Lucida Grande", "Lucida Sans Unicode", Arial,
    Verdana, sans-serif;
}

kuc-base-mobile-datetime-calendar-body-1-26-0:lang(zh-TW),
kuc-base-mobile-datetime-calendar-body-1-26-0:lang(zh-TW) * {
    font-family: "微軟正黒體","Microsoft JhengHei","新宋体",NSimSun,STHeiti,
    Hei,"Heiti SC","Lucida Grande","Lucida Sans Unicode",Arial,
    Verdana,sans-serif
}

kuc-base-mobile-datetime-calendar-body-1-26-0:lang(es),
kuc-base-mobile-datetime-calendar-body-1-26-0:lang(es) * {
    font-family: sans-serif;
}

.kuc-base-mobile-datetime-calendar-body-1-26-0__table,
.kuc-base-mobile-datetime-calendar-body-1-26-0__table tr {
    border-collapse: separate;
    border-spacing: 0;
}
.kuc-base-mobile-datetime-calendar-body-1-26-0__table__date--selected {
    border-spacing: 1px;
    padding: 0px;
}
.kuc-base-mobile-datetime-calendar-body-1-26-0__table__date {
    max-width: 40px;
    border-spacing: 1px;
    cursor: pointer;
    box-sizing: border-box;
    width: 40px;
    height: 40px;
    border: 1px solid #ffffff;
    text-align: center;
    vertical-align: middle;
    user-select: none;
    color: #333333;
    font-size: 14px;
    font-weight: 400;
}
.kuc-base-mobile-datetime-calendar-body-1-26-0__table__date
    .kuc-base-mobile-datetime-calendar-body-1-26-0__table__date__button {
    border-spacing: 1px;
    cursor: pointer;
    box-sizing: border-box;
    text-align: center;
    vertical-align: middle;
    color: #333333;
}
.kuc-base-mobile-datetime-calendar-body-1-26-0__table__date,
.kuc-base-mobile-datetime-calendar-body-1-26-0__table__date--selected,
.kuc-base-mobile-datetime-calendar-body-1-26-0__table__header {
    box-sizing: border-box;
    height: 40px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    font-weight: 400;
    font-size: 12px;
    color: #333333;
    padding: 0;
}
.kuc-base-mobile-datetime-calendar-body-1-26-0__table__date {
    font-size: 14px;
}
th.kuc-base-mobile-datetime-calendar-body-1-26-0__table__header {
    font-weight: 700;
}
.kuc-base-mobile-datetime-calendar-body-1-26-0__table__date--selected
    .kuc-base-mobile-datetime-calendar-body-1-26-0__table__date__button,
.kuc-base-mobile-datetime-calendar-body-1-26-0__table__date
    .kuc-base-mobile-datetime-calendar-body-1-26-0__table__date__button,
.kuc-base-mobile-datetime-calendar-body-1-26-0__table__header {
    box-sizing: border-box;
    border: 1px solid #ffffff;
}
.kuc-base-mobile-datetime-calendar-body-1-26-0__table__date--selected
    .kuc-base-mobile-datetime-calendar-body-1-26-0__table__date__button,
.kuc-base-mobile-datetime-calendar-body-1-26-0__table__date
    .kuc-base-mobile-datetime-calendar-body-1-26-0__table__date__button {
    background: none;
    cursor: pointer;
    max-width: 40px;
}
.kuc-base-mobile-datetime-calendar-body-1-26-0__table__date--selected {
    border: 1px solid #206694;
    box-sizing: border-box;
    text-align: center;
    font-size: 14px;
}
.kuc-base-mobile-datetime-calendar-body-1-26-0__table__date--selected
    .kuc-base-mobile-datetime-calendar-body-1-26-0__table__date__button {
    outline: none;
}
.kuc-base-mobile-datetime-calendar-body-1-26-0__table__date
    .kuc-base-mobile-datetime-calendar-body-1-26-0__table__date__button:focus-visible {
    outline: none;
}
.kuc-base-mobile-datetime-calendar-body-1-26-0__table__date--today {
    color: #333333;
    background: #d8d8d8;
}
.kuc-base-mobile-datetime-calendar-body-1-26-0__table__date--other-month {
    color: #a5a5a5;
}
.kuc-base-mobile-datetime-calendar-body-1-26-0__table__date--selected:focus {
    outline: none;
}
`,$l=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},eu=class extends V{constructor(){super(),this.month=1,this.year=2021,this.language=`en`,this.value=``,this._month=1,this._year=2021,this._locale=z(`en`),this._handleClickDocument=this._handleClickDocument.bind(this)}connectedCallback(){super.connectedCallback(),setTimeout(()=>{document.addEventListener(`click`,this._handleClickDocument)},1)}disconnectedCallback(){document.removeEventListener(`click`,this._handleClickDocument),super.disconnectedCallback()}update(e){if(e.forEach((e,t)=>{t===`language`&&(this._locale=z(this.language))}),e.has(`month`)&&(this._month=this.month),e.has(`year`)&&(this._year=this.year),e.has(`value`)){let{month:e,year:t}=this._separateDateValue();this._month=parseInt(e,10),this._year=parseInt(t,10)}super.update(e)}render(){return j`
      <table class="kuc-base-mobile-datetime-calendar-body-1-26-0__table" role="grid">
        ${this._getHeaderItemsTemplate()}<!--
        -->${this._getDateItemsTemplate()}
      </table>
    `}_handleClickDocument(){H(this,`kuc:mobile-calendar-body-blur`,{})}_handleClickDate(e){e.preventDefault(),e.stopPropagation();let t=e.target;t.setAttribute(`aria-selected`,`true`);let n=t.getAttribute(`data-date`);this._dispatchClickEvent(n)}_dispatchClickEvent(e){let t={oldValue:this.value,value:e};H(this,`kuc:mobile-calendar-body-click-date`,t),this.value=e}_isToday(e){let t=new Date;return parseInt(e[0],10)===t.getFullYear()&&parseInt(e[1],10)===t.getMonth()+1&&parseInt(e[2],10)===t.getDate()}_separateDateValue(e=this.value){let t=e.split(`-`);return{day:t[2],month:t[1],year:t[0]}}_getDateClass(e,t){return t?this._isToday(e)?` kuc-base-mobile-datetime-calendar-body-1-26-0__table__date--today`:``:` kuc-base-mobile-datetime-calendar-body-1-26-0__table__date--other-month`}_isSameDayOfMoment(e){let t=parseInt(e[1],10),n=parseInt(e[2],10),r=parseInt(e[0],10),i=new Date().getDate();if(!this.value.split(`-`)[2])return!1;if(this.value&&(i=new Date(`${this.value}T00:00:00`).getDate()),i===n&&t===this._month)return!0;let a=new Date(r,this._month,0).getDate();return i>a&&a===n&&t===this._month}_getHeaderItemsTemplate(){return j`
      <thead>
        <tr>
          ${this._locale.WEEK_DAYS.map(e=>j`
              <th
                class="kuc-base-mobile-datetime-calendar-body-1-26-0__table__header"
                role="columnheader"
                abbr="${e.abbr}"
              >
                ${e.text}
              </th>
            `)}
        </tr>
      </thead>
    `}_getDateItemsTemplate(){let e=io(this._year,this._month-1),t=this._locale.MONTH_SELECT[this._month-1];return j`
      <tbody>
        ${e.map(e=>j`
            <tr>
              ${e.map(e=>{let n=e.text.split(`-`),r=this._isSameDayOfMoment(n),i=parseInt(n[1],10)===this._month,a=(this.value===e.attr||r)&&i;return j`
                  <td
                    role="gridcell"
                    tabindex="${a?0:-1}"
                    aria-selected="${this.value===e.attr}"
                    aria-current="${this._isToday(n)?`date`:!1}"
                    class="kuc-base-mobile-datetime-calendar-body-1-26-0__table__date${a?`--selected`:``}${this._getDateClass(n,i)}"
                    data-date="${e.attr}"
                    aria-label="${n[2]} ${t}"
                    @click="${this._handleClickDate}"
                  >
                    ${n[2]||``}
                  </td>
                `})}
            </tr>
          `)}
      </tbody>
    `}};$l([P({type:Number})],eu.prototype,`month`,void 0),$l([P({type:Number})],eu.prototype,`year`,void 0),$l([P({type:String,attribute:`lang`,reflect:!0})],eu.prototype,`language`,void 0),$l([P({type:String,reflect:!0})],eu.prototype,`value`,void 0),$l([F()],eu.prototype,`_month`,void 0),$l([F()],eu.prototype,`_year`,void 0),window.customElements.get(`kuc-base-mobile-datetime-calendar-body-1-26-0`)||(U(Ql),window.customElements.define(`kuc-base-mobile-datetime-calendar-body-1-26-0`,eu));var tu=`
kuc-base-mobile-datetime-calendar-footer-1-26-0,
kuc-base-mobile-datetime-calendar-footer-1-26-0 * {
    font-family: "メイリオ", Meiryo, "Hiragino Kaku Gothic ProN",
    "ヒラギノ角ゴ ProN W3", "ＭＳ Ｐゴシック", "Lucida Grande",
    "Lucida Sans Unicode", Arial, Verdana, sans-serif;
}

kuc-base-mobile-datetime-calendar-footer-1-26-0:lang(zh),
kuc-base-mobile-datetime-calendar-footer-1-26-0:lang(zh) * {
    font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,
    Hei, "Heiti SC", "Lucida Grande", "Lucida Sans Unicode", Arial,
    Verdana, sans-serif;
}
kuc-base-mobile-datetime-calendar-footer-1-26-0:lang(zh-TW),
kuc-base-mobile-datetime-calendar-footer-1-26-0:lang(zh-TW) * {
    font-family: "微軟正黒體","Microsoft JhengHei","新宋体",NSimSun,STHeiti,
    Hei,"Heiti SC","Lucida Grande","Lucida Sans Unicode",Arial,
    Verdana,sans-serif
}
kuc-base-mobile-datetime-calendar-footer-1-26-0:lang(es),
kuc-base-mobile-datetime-calendar-footer-1-26-0:lang(es) * {
    font-family: sans-serif;
}
.kuc-base-mobile-datetime-calendar-footer-1-26-0__group {
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
    padding: 0;
    white-space: nowrap;
}
.kuc-base-mobile-datetime-calendar-footer-1-26-0__group__button {
    background: transparent;
    border: 1px solid transparent;
    color: #206694;
    height: 40px;
    cursor: pointer;
    font-size: 14px;
    outline: none;
    padding: 0;
    margin: 0;
    font-weight: 700;
}
.kuc-base-mobile-datetime-calendar-footer-1-26-0__group__center {
    width: 100%;
}
`,nu=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},ru=class extends V{constructor(){super(...arguments),this.language=`en`,this._locale=z(`en`)}update(e){e.has(`language`)&&(this._locale=z(this.language)),super.update(e)}_handleClickCalendarFooterButtonClose(e){e.stopPropagation(),H(this,`kuc:mobile-calendar-footer-click-close`)}_handleClickCalendarFooterButtonNone(e){e.stopPropagation(),H(this,`kuc:mobile-calendar-footer-click-none`)}_handleClickCalendarFooterButtonToday(e){e.stopPropagation(),H(this,`kuc:mobile-calendar-footer-click-today`)}render(){return j`
      <div class="kuc-base-mobile-datetime-calendar-footer-1-26-0__group">
        <button
          type="button"
          class="kuc-base-mobile-datetime-calendar-footer-1-26-0__group__button kuc-base-mobile-datetime-calendar-footer-1-26-0__group__button--today"
          @click="${this._handleClickCalendarFooterButtonToday}"
        >
          ${this._locale.CALENDAR_FOOTER_TEXT.today}
        </button>
        <button
          type="button"
          class="kuc-base-mobile-datetime-calendar-footer-1-26-0__group__button kuc-base-mobile-datetime-calendar-footer-1-26-0__group__button--none"
          @click="${this._handleClickCalendarFooterButtonNone}"
        >
          ${this._locale.CALENDAR_FOOTER_TEXT.none}
        </button>
        <button
          type="button"
          class="kuc-base-mobile-datetime-calendar-footer-1-26-0__group__button kuc-base-mobile-datetime-calendar-footer-1-26-0__group__button--close"
          @click="${this._handleClickCalendarFooterButtonClose}"
        >
          ${this._locale.CALENDAR_FOOTER_TEXT.close}
        </button>
      </div>
    `}};nu([P({type:String,attribute:`lang`,reflect:!0})],ru.prototype,`language`,void 0),nu([F()],ru.prototype,`_locale`,void 0),window.customElements.get(`kuc-base-mobile-datetime-calendar-footer-1-26-0`)||(U(tu),window.customElements.define(`kuc-base-mobile-datetime-calendar-footer-1-26-0`,ru));var iu=`
.kuc-base-mobile-datetime-calendar-1-26-0__group {
    display: inline-block;
    box-sizing: border-box;
    width: 290px;
    padding: 0 10px;
    background: #ffffff;
    text-align: center;
    font-size: 13px;
    border: 1px solid #d8d8d8;
}
`,au=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},ou=class extends V{constructor(){super(...arguments),this.language=`en`,this.value=``,this._month=1,this._year=new Date().getFullYear()}update(e){e.has(`value`)&&this._updateValue(),super.update(e)}render(){return j`
      <div
        class="kuc-base-mobile-datetime-calendar-1-26-0__group"
        role="dialog"
        aria-modal="true"
        aria-label="Calender"
        @click="${this._handleClickCalendarGroup}"
      >
        <kuc-base-mobile-datetime-calendar-header-1-26-0
          .year="${this._year}"
          .month="${this._month}"
          .language="${this.language}"
          @kuc:mobile-calendar-header-change="${this._handleCalendarHeaderChange}"
        ></kuc-base-mobile-datetime-calendar-header-1-26-0>
        <kuc-base-mobile-datetime-calendar-body-1-26-0
          .year="${this._year}"
          .month="${this._month}"
          .value="${this.value}"
          .language="${this.language}"
        ></kuc-base-mobile-datetime-calendar-body-1-26-0>
        <kuc-base-mobile-datetime-calendar-footer-1-26-0
          .language="${this.language}"
        ></kuc-base-mobile-datetime-calendar-footer-1-26-0>
      </div>
    `}updated(e){super.updated(e)}_handleClickCalendarGroup(e){e.stopPropagation()}_handleCalendarHeaderChange(e){let{year:t,month:n}=this._separateValue(e.detail.value);this._year=t,this._month=n}_updateValue(){this.value===``&&(this.value=xo().slice(0,7)+`-01`);let{year:e,month:t}=this._separateValue(this.value);this._year=e,this._month=t}_separateValue(e){let t=e.split(`-`);return{year:parseInt(t[0],10),month:parseInt(t[1],10)}}};au([P({type:String,attribute:`lang`,reflect:!0})],ou.prototype,`language`,void 0),au([P({type:String,reflect:!0})],ou.prototype,`value`,void 0),au([F()],ou.prototype,`_month`,void 0),au([F()],ou.prototype,`_year`,void 0),window.customElements.get(`kuc-base-mobile-datetime-calendar-1-26-0`)||(U(iu),window.customElements.define(`kuc-base-mobile-datetime-calendar-1-26-0`,ou));var su=`
kuc-mobile-base-date-1-26-0,
kuc-mobile-base-date-1-26-0 * {
    font-family: "メイリオ", Meiryo, "Hiragino Kaku Gothic ProN",
    "ヒラギノ角ゴ ProN W3", "ＭＳ Ｐゴシック", "Lucida Grande",
    "Lucida Sans Unicode", Arial, Verdana, sans-serif;
}
kuc-mobile-base-date-1-26-0:lang(zh),
kuc-mobile-base-date-1-26-0:lang(zh) * {
    font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,
    Hei, "Heiti SC", "Lucida Grande", "Lucida Sans Unicode", Arial,
    Verdana, sans-serif;
}
kuc-mobile-base-date-1-26-0:lang(zh-TW),
kuc-mobile-base-date-1-26-0:lang(zh-TW) * {
    font-family: "微軟正黒體","Microsoft JhengHei","新宋体",NSimSun,STHeiti,
    Hei,"Heiti SC","Lucida Grande","Lucida Sans Unicode",Arial,
    Verdana,sans-serif
}
kuc-mobile-base-date-1-26-0:lang(es),
kuc-mobile-base-date-1-26-0:lang(es) * {
    font-family: sans-serif;
}
.kuc-mobile-base-date-1-26-0__group {
    display: flex;
    align-items: center;
    position: relative;
    border-radius: 5.148px;
    background-color: #ffffff;
}
.kuc-mobile-base-date-1-26-0__group__input[aria-required="true"] {
    border-color: #cf4a38;
}
input.kuc-mobile-base-date-1-26-0__group__input {
    color: #000000;
    width: 100%;
    height: 31.28px;
    font-size: 99%;
    -webkit-flex-grow: 1;
    flex-grow: 1;
    padding: 5.148px;
    border-radius: 5.148px;
    box-shadow: 0px 1px 0px #ffffff, inset 0px 2px 3px #dadada;
    border: 1px solid #b3b3b3;
    font-weight: 400;
    -webkit-appearance: none;
    appearance: none;
    outline: 0;
    background: transparent;
    box-sizing: border-box;
}
.kuc-mobile-base-date-1-26-0__group--disabled {
    background-color: #d5d7d9;
    opacity: 1;
}
.kuc-mobile-base-date-1-26-0__group--disabled input {
    color: #999999;
    -webkit-text-fill-color: #999999;
}
.kuc-base-mobile-date-1-26-0__calendar {
    position: absolute;
    left: 0;
    top: 39px;
    z-index: 1000;
}
.kuc-base-mobile-date-1-26-0__calendar[popover] {
    position: fixed;
    right: auto;
    bottom: auto;
    border: none;
    padding: 0;
}
.kuc-mobile-base-date-1-26-0__group__button {
    position: absolute;
    display: flex;
    right: 10px;
    background-color: transparent;
    border: 0;
    padding: 0;
    height: 100%;
    align-items: center;
}
`,cu=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},lu=class extends V{constructor(){super(...arguments),this.inputId=``,this.language=`en`,this.value=``,this.disabled=!1,this.inputAriaInvalid=!1,this.required=!1,this._dateTimeCalendarVisible=!1,this._calendarValue=``,this._inputValue=``,this._scrollDebounceTimer=null,this._scrollRAF=0,this._scrollTargets=[],this._calendarWidth=0,this._calendarHeight=0,this._schedulePositionOnScroll=()=>{this._dateTimeCalendarVisible&&!this._scrollRAF&&(this._scrollRAF=requestAnimationFrame(()=>{this._scrollRAF=0,this._positionCalendar()}))},this._positionCalendar=()=>{if(!this._calendarEl||!this._inputEl)return;let{inputToBottom:e,inputToTop:t,inputToLeft:n,inputDateWidth:r,inputDateHeight:i}=No(this),a=this._calendarHeight;e>=t?this._calendarEl.style.top=`${t+i+7.5}px`:this._calendarEl.style.top=`${t-a-2}px`,this._calendarEl.style.left=`${n-r}px`},this._onDocClick=e=>{let t=e.composedPath(),n=this._calendarEl&&t.includes(this._calendarEl),r=t.includes(this._inputEl),i=t.includes(this._btnToggleEl);n||r||i||this._closeCalendar()}}update(e){e.has(`inputId`)&&(this._GUID=this.inputId),(e.has(`value`)||e.has(`language`))&&this._updateValueProp(),super.update(e)}disconnectedCallback(){this._scrollRAF&&=(cancelAnimationFrame(this._scrollRAF),0),this._scrollDebounceTimer!==null&&(window.clearTimeout(this._scrollDebounceTimer),this._scrollDebounceTimer=null),this._detachListeners(),super.disconnectedCallback()}render(){return j`
      <div class="kuc-mobile-base-date-1-26-0__group${this._getGroupClass()}">
        <input
          class="kuc-mobile-base-date-1-26-0__group__input"
          type="text"
          id="${this._GUID}-label"
          readonly="readonly"
          .value="${this._inputValue}"
          aria-label="Date"
          aria-describedby="${this._GUID}-error"
          aria-invalid="${this.inputAriaInvalid}"
          aria-required="${this.required}"
          ?disabled="${this.disabled}"
          @click="${this._handleClickOpenCalendar}"
        />
        <button
          type="button"
          class="kuc-mobile-base-date-1-26-0__group__button"
          aria-label="calendar"
          @click="${this._handleClickOpenCalendar}"
          ?disabled="${this.disabled}"
        >
          ${this._getCalendarIconTemplate()}
        </button>
        ${this._getCalendarTemplate()}
      </div>
    `}_attachListeners(){this._detachListeners(),this._scrollTargets=Mo(this._inputEl);for(let e of this._scrollTargets)e.addEventListener(`scroll`,this._schedulePositionOnScroll,{passive:!0});document.addEventListener(`click`,this._onDocClick,{capture:!0})}_detachListeners(){for(let e of this._scrollTargets)e.removeEventListener(`scroll`,this._schedulePositionOnScroll);this._scrollTargets=[],document.removeEventListener(`click`,this._onDocClick,{capture:!0})}_getGroupClass(){let e=``;return this.disabled&&(e+=` kuc-mobile-base-date-1-26-0__group--disabled`),this.required&&(e+=` kuc-mobile-base-date-1-26-0__group--required`),e}_handleClickOpenCalendar(e){this._dateTimeCalendarVisible?(e.preventDefault(),e.stopPropagation()):(this._calendarValue=this._getNewCalendarValue(this._inputValue||``),this._openCalendar())}_updateValueProp(){if(this.value){this._inputValue=vo(this.language,this.value),this._calendarValue=this.value;return}let e=xo();this._inputValue=``,this._calendarValue=this._calendarValue?this._calendarValue.slice(0,7)+`-01`:e.slice(0,7)}_getNewCalendarValue(e){if(So(this.language,e))return yo(this.language,e);let t=this._calendarValue.slice(0,7);return e===``&&(t=this._calendarValue.slice(0,7)+`-01`),t}_closeCalendar(){this._dateTimeCalendarVisible=!1,this._calendarEl&&this._calendarEl.hidePopover(),this._scrollRAF&&=(cancelAnimationFrame(this._scrollRAF),0),this._scrollDebounceTimer!==null&&(window.clearTimeout(this._scrollDebounceTimer),this._scrollDebounceTimer=null),this._detachListeners()}async _openCalendar(){if(this._dateTimeCalendarVisible=!0,this._calendarEl){await this.updateComplete,this._calendarEl.showPopover();let e=jo(this._calendarEl);this._calendarWidth=e.width,this._calendarHeight=e.height,this._positionCalendar(),this._attachListeners()}}_handleClickCalendarClickDate(e){this._closeCalendar(),e.detail.oldValue=this.value,e.detail.oldValue!==e.detail.value&&(this.value=e.detail.value,H(this,`kuc:mobile-base-date-change`,e.detail),this._btnToggleEl.focus())}_handleClickCalendarFooterButtonNone(){this._closeCalendar(),this._inputValue=``;let e=this.value?this.value.slice(0,7)+`-01`:``;e||=this._calendarValue.slice(0,7)+`-01`,this._calendarValue=e,this._dispathDateChangeCustomEvent(``)}_handleClickCalendarFooterButtonToday(){this._closeCalendar();let e=xo();this._dispathDateChangeCustomEvent(e)}_handleClickCalendarFooterButtonClose(){this._closeCalendar(),this._btnToggleEl.focus()}_dispathDateChangeCustomEvent(e){let t={value:e,oldValue:this.value};this.value=e,H(this,`kuc:mobile-base-date-change`,t),this._btnToggleEl.focus()}_getCalendarTemplate(){return j`
      <kuc-base-mobile-datetime-calendar-1-26-0
        class="kuc-base-mobile-date-1-26-0__calendar"
        .language="${this.language}"
        .value="${this._calendarValue}"
        popover="manual"
        @kuc:mobile-calendar-body-click-date="${this._handleClickCalendarClickDate}"
        @kuc:mobile-calendar-footer-click-none="${this._handleClickCalendarFooterButtonNone}"
        @kuc:mobile-calendar-footer-click-today="${this._handleClickCalendarFooterButtonToday}"
        @kuc:mobile-calendar-footer-click-close="${this._handleClickCalendarFooterButtonClose}"
      >
      </kuc-base-mobile-datetime-calendar-1-26-0>
    `}_getCalendarIconTemplate(){return j`
      <svg width="24" height="24" viewBox="0 0 28 28" fill="none">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M10 4C9.44772 4 9 4.44772 9 5V6H6C4.89543 6 4 6.89543 4 8V21C4 22.1046 4.89543 23 6 23H22C23.1046 23 24 22.1046 24 21V8C24 6.89543 23.1046 6 22 6H19V5C19 4.44772 18.5523 4 18 4C17.4477 4 17 4.44772 17 5V6H11V5C11 4.44772 10.5523 4 10 4ZM9 8V9C9 9.55228 9.44772 10 10 10C10.5523 10 11 9.55228 11 9V8H17V9C17 9.55228 17.4477 10 18 10C18.5523 10 19 9.55228 19 9V8H22V11H6V8H9ZM6 13V21H22V13H6Z"
          fill="#4b4b4b"
        />
      </svg>
    `}};cu([P({type:String})],lu.prototype,`inputId`,void 0),cu([P({type:String,attribute:`lang`,reflect:!0})],lu.prototype,`language`,void 0),cu([P({type:String,reflect:!0})],lu.prototype,`value`,void 0),cu([P({type:Boolean})],lu.prototype,`disabled`,void 0),cu([P({type:Boolean})],lu.prototype,`inputAriaInvalid`,void 0),cu([P({type:Boolean})],lu.prototype,`required`,void 0),cu([I(`.kuc-mobile-base-date-1-26-0__group__button`)],lu.prototype,`_btnToggleEl`,void 0),cu([I(`.kuc-mobile-base-date-1-26-0__group__input`)],lu.prototype,`_inputEl`,void 0),cu([I(`.kuc-base-mobile-date-1-26-0__calendar`)],lu.prototype,`_calendarEl`,void 0),cu([F()],lu.prototype,`_dateTimeCalendarVisible`,void 0),window.customElements.get(`kuc-mobile-base-date-1-26-0`)||(U(su),window.customElements.define(`kuc-mobile-base-date-1-26-0`,lu));var uu=`
kuc-mobile-date-picker-1-26-0,
kuc-mobile-date-picker-1-26-0 * {
  color: #333333;
  font-family: "メイリオ", Meiryo, "Hiragino Kaku Gothic ProN",
    "ヒラギノ角ゴ ProN W3", "ＭＳ Ｐゴシック", "Lucida Grande",
    "Lucida Sans Unicode", Arial, Verdana, sans-serif;
}
kuc-mobile-date-picker-1-26-0:lang(zh),
kuc-mobile-date-picker-1-26-0:lang(zh) * {
  font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,
    Hei, "Heiti SC", "Lucida Grande", "Lucida Sans Unicode", Arial,
    Verdana, sans-serif;
}
kuc-mobile-date-picker-1-26-0:lang(zh-TW),
kuc-mobile-date-picker-1-26-0:lang(zh-TW) * {
    font-family: "微軟正黒體","Microsoft JhengHei","新宋体",NSimSun,STHeiti,
    Hei,"Heiti SC","Lucida Grande","Lucida Sans Unicode",Arial,
    Verdana,sans-serif
}
kuc-mobile-date-picker-1-26-0:lang(es),
kuc-mobile-date-picker-1-26-0:lang(es) * {
    font-family: sans-serif;
}
kuc-mobile-date-picker-1-26-0 {
  font-size: 13px;
  color: #333333;
  display: inline-table;
  vertical-align: top;
  width: 100%;
}
kuc-mobile-date-picker-1-26-0[hidden] {
  display: none;
}
.kuc-mobile-date-picker-1-26-0__group {
  display: flex;
  flex-direction: column;
  border: none;
  padding: 0px;
  height: auto;
  margin: 0px;
}
.kuc-mobile-date-picker-1-26-0__group__label {
  display: inline-block;
  font-weight: bold;
  line-height: 1.5;
  padding: 0px;
  white-space: nowrap;
  margin: 0 0 4px 0;
}
.kuc-mobile-date-picker-1-26-0__group__base__date {
  width: 130px;
  margin-right: 0.5em;
  margin-left: 0.5em;
}
.kuc-mobile-date-picker-1-26-0__group__label[hidden] {
  display: none;
}
.kuc-mobile-date-picker-1-26-0__group input.kuc-base-date-1-26-0__input {
  width: 100px;
  height: 40px;
  padding: 0px;
  text-align: center;
  border: 1px solid #e3e7e8;
  box-sizing: border-box;
  font-size: 14px;
  box-shadow: 2px 2px 4px #f5f5f5 inset, -2px -2px 4px #f5f5f5 inset;
}

.kuc-mobile-date-picker-1-26-0__group input.kuc-base-date-1-26-0__input:focus {
  outline: none;
  border: 1px solid #3498db;
}
.kuc-mobile-date-picker-1-26-0__group input.kuc-base-date-1-26-0__input--focus {
  box-shadow: 2px 2px 4px #f5f5f5 inset, -2px -2px 4px #f5f5f5 inset;
  border: 1px solid #3498db;
  background-color: #ffffff;
  color: #333333;
}
.kuc-mobile-date-picker-1-26-0__group input.kuc-base-date-1-26-0__input:disabled {
  color: #888888;
  background-color: #d4d7d7;
  box-shadow: none;
  cursor: not-allowed;
}
`,du=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},fu;(()=>{if(fu=window.customElements.get(`kuc-mobile-date-picker-1-26-0`),fu)return;class e extends V{constructor(e){super(),this.className=``,this.error=``,this.id=``,this.label=``,this.disabled=!1,this.requiredIcon=!1,this.language=`auto`,this.value=``,this.visible=!0,this._dateConverted=``,this._inputValue=``,this._GUID=W();let t=G(e);Object.assign(this,t)}shouldUpdate(e){return this.value===void 0||this.value===``?!0:!Zo(this.value)||(this._dateConverted=Lo(this.value),this._dateConverted!==``&&!es(this._dateConverted))?(this.throwErrorAfterUpdateComplete(Qa.VALUE),!1):!0}willUpdate(e){e.has(`value`)&&this.value!==void 0&&this.value!==``&&(this.value=this._dateConverted)}update(e){e.has(`value`)&&this._updateInputValue(),super.update(e)}render(){return j`
        <div class="kuc-mobile-date-picker-1-26-0__group">
          <label
            class="kuc-mobile-date-picker-1-26-0__group__label"
            for="${this._GUID}-label"
            @click="${this._handleClickLabel}"
            ?hidden="${!this.label}"
          >
            <kuc-base-mobile-label-1-26-0
              .requiredIcon="${this.requiredIcon}"
              .text="${this.label}"
            ></kuc-base-mobile-label-1-26-0>
          </label>
          <kuc-mobile-base-date-1-26-0
            class="kuc-mobile-date-picker-1-26-0__group__base__date"
            .disabled="${this.disabled}"
            .value="${this._inputValue}"
            .inputId="${this._GUID}"
            .inputAriaInvalid="${this.error!==``}"
            .required="${this.requiredIcon}"
            .language="${this._getLanguage()}"
            @kuc:mobile-base-date-change="${this._handleDateChange}"
          >
          </kuc-mobile-base-date-1-26-0>
          <kuc-base-mobile-error-1-26-0 .guid="${this._GUID}" .text="${this.error}">
          </kuc-base-mobile-error-1-26-0>
        </div>
      `}_updateInputValue(){this._inputValue=this.value===void 0||this.value===``?``:this.value}_getLanguage(){let e=[`en`,`ja`,`zh`,`zh-TW`,`es`];return e.indexOf(this.language)===-1?e.indexOf(document.documentElement.lang)===-1?`en`:document.documentElement.lang:this.language}_handleClickLabel(e){e.preventDefault()}_handleDateChange(e){e.stopPropagation(),e.preventDefault();let t={oldValue:this.value,value:``};this.value=e.detail.value,t.value=this.value,this._dispatchChangeEvent(t)}_dispatchChangeEvent(e){H(this,`change`,e)}}du([P({type:String,reflect:!0,attribute:`class`})],e.prototype,`className`,void 0),du([P({type:String})],e.prototype,`error`,void 0),du([P({type:String,reflect:!0,attribute:`id`})],e.prototype,`id`,void 0),du([P({type:String})],e.prototype,`label`,void 0),du([P({type:Boolean})],e.prototype,`disabled`,void 0),du([P({type:Boolean})],e.prototype,`requiredIcon`,void 0),du([P({type:String,attribute:`lang`,reflect:!0,converter:Fo})],e.prototype,`language`,void 0),du([P({type:String})],e.prototype,`value`,void 0),du([P({type:Boolean,attribute:`hidden`,reflect:!0,converter:B})],e.prototype,`visible`,void 0),du([F()],e.prototype,`_inputValue`,void 0),window.customElements.define(`kuc-mobile-date-picker-1-26-0`,e),U(uu),fu=e})();var pu=`
kuc-mobile-time-picker-1-26-0,
kuc-mobile-time-picker-1-26-0 * {
  font-family: "メイリオ", Meiryo, "Hiragino Kaku Gothic ProN",
  "ヒラギノ角ゴ ProN W3", "ＭＳ Ｐゴシック", "Lucida Grande",
  "Lucida Sans Unicode", Arial, Verdana, sans-serif;
}
kuc-mobile-time-picker-1-26-0:lang(zh),
kuc-mobile-time-picker-1-26-0:lang(zh) * {
  font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,
  Hei, "Heiti SC", "Lucida Grande", "Lucida Sans Unicode", Arial,
  Verdana, sans-serif;
}
kuc-mobile-time-picker-1-26-0:lang(zh-TW),
kuc-mobile-time-picker-1-26-0:lang(zh-TW) * {
  font-family: "微軟正黒體", "Microsoft JhengHei", "新宋体", NSimSun, STHeiti,
  Hei, "Heiti SC", "Lucida Grande", "Lucida Sans Unicode", Arial,
  Verdana, sans-serif
}
kuc-mobile-time-picker-1-26-0:lang(es),
kuc-mobile-time-picker-1-26-0:lang(es) * {
  font-family: sans-serif;
}
kuc-mobile-time-picker-1-26-0 {
  font-size: 13px;
  display: inline-block;
  vertical-align: top;
  width: 100%;
}
kuc-mobile-time-picker-1-26-0[hidden] {
  display: none;
}
.kuc-mobile-time-picker-1-26-0__group__label {
  display: inline-block;
  font-weight: bold;
  line-height: 1.5;
  padding: 0px;
  margin: 0 0 4px 0;
  white-space: nowrap;
}
.kuc-mobile-time-picker-1-26-0__group__label[hidden] {
  display: none;
}
.kuc-base-mobile-time-1-26-0__group__wrapper {
  padding-left: 0.5em;
  max-width: 10px;
}
`,mu=`
kuc-base-mobile-time-1-26-0,
kuc-base-mobile-time-1-26-0 * {
  font-size: 13px;
  font-family: "メイリオ", Meiryo, "Hiragino Kaku Gothic ProN",
  "ヒラギノ角ゴ ProN W3", "ＭＳ Ｐゴシック", "Lucida Grande",
  "Lucida Sans Unicode", Arial, Verdana, sans-serif;
}

kuc-base-mobile-time-1-26-0:lang(zh),
kuc-base-mobile-time-1-26-0:lang(zh) * {
  font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,
  Hei, "Heiti SC", "Lucida Grande", "Lucida Sans Unicode", Arial,
  Verdana, sans-serif;
}

kuc-base-mobile-time-1-26-0:lang(zh-TW),
kuc-base-mobile-time-1-26-0:lang(zh-TW) * {
  font-family: "微軟正黒體", "Microsoft JhengHei", "新宋体", NSimSun, STHeiti,
  Hei, "Heiti SC", "Lucida Grande", "Lucida Sans Unicode", Arial,
  Verdana, sans-serif
}

kuc-base-mobile-time-1-26-0:lang(es),
kuc-base-mobile-time-1-26-0:lang(es) * {
  font-family: sans-serif;
}

kuc-base-mobile-time-1-26-0 {
  width: 100%;
  display: inline-block;
  vertical-align: top;
}

kuc-base-mobile-time-1-26-0[hidden] {
  display: none;
}

.kuc-base-mobile-time-1-26-0__group {
  padding: 0;
  margin: 0;
  height: 31.28px;
  border: 1px solid #b3b3b3;
  border-radius: 5.2px;
  box-sizing: border-box;
  background-color: #ffffff;
  display: -webkit-flex;
  display: flex;
  -webkit-align-items: center;
  align-items: center;
  box-shadow: 0px 1px 0px #ffffff, inset 0px 2px 3px #dadada;
}

.kuc-base-mobile-time-1-26-0__group--required {
  border-color: #cf4a38;
}

.kuc-base-mobile-time-1-26-0__group__hours {
  padding: 5.148px 7.722px;
}

.kuc-base-mobile-time-1-26-0__group__minutes {
  padding: 5.148px 7.722px;
  -webkit-flex-grow: 1;
  flex-grow: 1;
}

.kuc-base-mobile-time-1-26-0__group__hours,
.kuc-base-mobile-time-1-26-0__group__minutes {
  font-size: 99%;
  height: 100%;
  color: #000000;
  border: none;
  border-radius: 5.148px;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background-color: transparent;
}

.kuc-base-mobile-time-1-26-0__group__colon {
  color: #000000;
}

.kuc-base-mobile-time-1-26-0__group__hours:disabled
+ .kuc-base-mobile-time-1-26-0__group__colon {
  color: #999999;
  -webkit-text-fill-color: #999999;
  opacity: 1;
}

.kuc-base-mobile-time-1-26-0__group--disabled {
  color: #999999;
  -webkit-text-fill-color: #999999;
  background-color: #d5d7d9;
  opacity: 1;
}

.kuc-base-mobile-time-1-26-0__group__hours:disabled,
.kuc-base-mobile-time-1-26-0__group__minutes:disabled {
  color: #999999;
  -webkit-text-fill-color: #999999;
  opacity: 1;
}

.kuc-base-mobile-time-1-26-0__group__hours:focus {
  outline: none;
}

.kuc-base-mobile-time-1-26-0__group__minutes:focus {
  outline: none;
}
`,hu=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},gu=class extends V{constructor(e){super(),this.guid=``,this.language=`en`,this.value=``,this.disabled=!1,this.hour12=!1,this.required=!1,this._timeStep=1,this._hours=``,this._minutes=``,this._suffix=``,this._locale=z(`en`);let t=G(e);Object.assign(this,t)}update(e){e.has(`language`)&&(this._locale=z(this.language)),e.has(`hour12`)&&(this._hourOptions=To(this.hour12)),e.has(`_timeStep`)&&(this._minuteOptions=wo(this._timeStep)),super.update(e)}render(){return j`
      <fieldset
        class="kuc-base-mobile-time-1-26-0__group${this.disabled?` kuc-base-mobile-time-1-26-0__group--disabled`:``}${this.required?` kuc-base-mobile-time-1-26-0__group--required`:``}"
        aria-label="label-text"
      >
        <select
          class="kuc-base-mobile-time-1-26-0__group__hours"
          aria-label="Hour"
          aria-describedby="${this.guid}-error"
          ?disabled="${this.disabled}"
          @change="${this._handleChangeHours}"
        >
          <option value selected></option>
          ${this._getOptionsHourTemplate()}
        </select>
        <span class="kuc-base-mobile-time-1-26-0__group__colon">:</span>
        <select
          class="kuc-base-mobile-time-1-26-0__group__minutes"
          aria-label="Minute"
          aria-describedby="${this.guid}-error"
          ?disabled="${this.disabled}"
          @change="${this._handleChangeMinutes}"
        >
          <option value selected></option>
          ${this._getOptionsMinuteTemplate()}
        </select>
      </fieldset>
    `}updated(e){e.has(`value`)&&this._updateInputValue(),super.update(e)}_updateInputValue(){let e=uo(this.value,this.hour12);this._hours=e.hours,this._minutes=e.minutes,this._suffix=e.suffix||``,this._setValueToInput(e)}_setValueToInput(e){this._minutesEl.value=e.minutes,e.suffix?this._hoursEl.value=e.suffix+` `+e.hours:this._hoursEl.value=e.hours}_handleChangeMinutes(e){e.preventDefault(),e.stopPropagation();let t=this._getTimeValueString(),n=e.target.value;this._minutes=n;let r=this._getTimeValueString();this.value=r,this._dispatchEventTimeChange(r,t)}_handleChangeHours(e){e.preventDefault(),e.stopPropagation();let t=this._getTimeValueString(),n=e.target.value.split(` `);n.length===2?(this._hours=n[1],this._suffix=n[0]):(this._hours=n[0],this._suffix=``);let r=this._getTimeValueString();this.value=r,this._dispatchEventTimeChange(r,t)}_getTimeValueString(){let e=`${this._hours}:${this._minutes}`;return this._suffix?ho(`${e} ${this._suffix}`):ho(e)}_dispatchEventTimeChange(e,t){let n=e===`:`?``:e,r={value:n,oldValue:t===`:`?``:t};r.error=Qo(n)?``:this._locale.INVALID_TIME_FORMAT,H(this,`kuc:base-mobile-time-change`,r)}_getOptionsMinuteTemplate(){return this._minuteOptions.map(e=>j` <option value="${e.value}">${e.label}</option> `)}_getOptionsHourTemplate(){return this._hourOptions.map(e=>j` <option value="${e.value}">${e.label}</option> `)}};hu([P({type:String})],gu.prototype,`guid`,void 0),hu([P({type:String,attribute:`lang`,reflect:!0})],gu.prototype,`language`,void 0),hu([P({type:String})],gu.prototype,`value`,void 0),hu([P({type:Boolean})],gu.prototype,`disabled`,void 0),hu([P({type:Boolean})],gu.prototype,`hour12`,void 0),hu([P({type:Boolean})],gu.prototype,`required`,void 0),hu([F()],gu.prototype,`_timeStep`,void 0),hu([F()],gu.prototype,`_hours`,void 0),hu([F()],gu.prototype,`_minutes`,void 0),hu([F()],gu.prototype,`_suffix`,void 0),hu([F()],gu.prototype,`_hourOptions`,void 0),hu([F()],gu.prototype,`_minuteOptions`,void 0),hu([I(`.kuc-base-mobile-time-1-26-0__group__hours`)],gu.prototype,`_hoursEl`,void 0),hu([I(`.kuc-base-mobile-time-1-26-0__group__minutes`)],gu.prototype,`_minutesEl`,void 0),window.customElements.get(`kuc-base-mobile-time-1-26-0`)||(U(mu),window.customElements.define(`kuc-base-mobile-time-1-26-0`,gu));var _u=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},vu;(()=>{if(vu=window.customElements.get(`kuc-mobile-time-picker-1-26-0`),vu)return;class e extends V{constructor(e){super(),this.className=``,this.error=``,this.id=``,this.label=``,this.language=`auto`,this.value=``,this.disabled=!1,this.hour12=!1,this.requiredIcon=!1,this.visible=!0,this._inputValue=``,this._errorFormat=``,this._isSelectError=!1,this._GUID=W();let t=G(e);Object.assign(this,t)}shouldUpdate(e){return this.value===void 0||this.value===``||Qo(this.value)?!0:(this.throwErrorAfterUpdateComplete(Qa.VALUE),!1)}willUpdate(){this.value!==void 0&&this.value!==``&&(this.value=Ro(this.value))}update(e){e.has(`value`)&&!this._isSelectError&&(this._inputValue=this.value===void 0?``:this.value||``,this._errorFormat=``),super.update(e)}render(){return j`
        <div class="kuc-mobile-time-picker-1-26-0__group">
          <label
            class="kuc-mobile-time-picker-1-26-0__group__label"
            ?hidden="${!this.label}"
          >
            <kuc-base-mobile-label-1-26-0
              .guid="${this._GUID}"
              .text="${this.label}"
              .requiredIcon="${this.requiredIcon}"
            ></kuc-base-mobile-label-1-26-0>
          </label>
          <div class="kuc-base-mobile-time-1-26-0__group__wrapper">
            <kuc-base-mobile-time-1-26-0
              .value="${this._inputValue}"
              .disabled="${this.disabled}"
              .hour12="${this.hour12}"
              .guid="${this._GUID}"
              .language="${this._getLanguage()}"
              .required="${this.requiredIcon}"
              @kuc:base-mobile-time-change="${this._handleTimeChange}"
            ></kuc-base-mobile-time-1-26-0>
          </div>
          <kuc-base-mobile-error-1-26-0
            .guid="${this._GUID}"
            .text="${this._errorFormat||this.error}"
            ariaLive="assertive"
          ></kuc-base-mobile-error-1-26-0>
        </div>
      `}updated(){this._isSelectError=!1}_handleTimeChange(e){e.preventDefault(),e.stopPropagation();let t={value:e.detail.value,oldValue:this.value};this._inputValue=e.detail.value,e.detail.error?(this._isSelectError=!0,this._errorFormat=e.detail.error,this.value=void 0,t.value=void 0,this.error=``,H(this,`change`,t)):(this._isSelectError=!1,this._errorFormat=``,this.value=e.detail.value,H(this,`change`,t))}_getLanguage(){let e=[`en`,`ja`,`zh`,`zh-TW`,`es`];return e.indexOf(this.language)===-1?e.indexOf(document.documentElement.lang)===-1?`en`:document.documentElement.lang:this.language}}_u([P({type:String,reflect:!0,attribute:`class`})],e.prototype,`className`,void 0),_u([P({type:String})],e.prototype,`error`,void 0),_u([P({type:String,reflect:!0,attribute:`id`})],e.prototype,`id`,void 0),_u([P({type:String})],e.prototype,`label`,void 0),_u([P({type:String,attribute:`lang`,reflect:!0,converter:Fo})],e.prototype,`language`,void 0),_u([P({type:String,hasChanged(e,t){return(e===``||e===void 0)&&e===t||e!==t}})],e.prototype,`value`,void 0),_u([P({type:Boolean})],e.prototype,`disabled`,void 0),_u([P({type:Boolean})],e.prototype,`hour12`,void 0),_u([P({type:Boolean})],e.prototype,`requiredIcon`,void 0),_u([P({type:Boolean,attribute:`hidden`,reflect:!0,converter:B})],e.prototype,`visible`,void 0),_u([F()],e.prototype,`_inputValue`,void 0),_u([F()],e.prototype,`_errorFormat`,void 0),window.customElements.define(`kuc-mobile-time-picker-1-26-0`,e),U(pu),vu=e})();var yu=`
kuc-mobile-datetime-picker-1-26-0,
kuc-mobile-datetime-picker-1-26-0 * {
color: #333333;
font-family: "メイリオ", Meiryo, "Hiragino Kaku Gothic ProN",
    "ヒラギノ角ゴ ProN W3", "ＭＳ Ｐゴシック", "Lucida Grande",
    "Lucida Sans Unicode", Arial, Verdana, sans-serif;
}
kuc-mobile-datetime-picker-1-26-0:lang(zh),
kuc-mobile-datetime-picker-1-26-0:lang(zh) * {
font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,
    Hei, "Heiti SC", "Lucida Grande", "Lucida Sans Unicode", Arial,
    Verdana, sans-serif;
}
kuc-mobile-datetime-picker-1-26-0:lang(zh-TW),
kuc-mobile-datetime-picker-1-26-0:lang(zh-TW) * {
    font-family: "微軟正黒體","Microsoft JhengHei","新宋体",NSimSun,STHeiti,
    Hei,"Heiti SC","Lucida Grande","Lucida Sans Unicode",Arial,
    Verdana,sans-serif
}
kuc-mobile-datetime-picker-1-26-0:lang(es),
kuc-mobile-datetime-picker-1-26-0:lang(es) * {
    font-family: sans-serif;
}
kuc-mobile-datetime-picker-1-26-0 {
font-size: 13px;
color: #333333;
display: inline-table;
vertical-align: top;
width: 100%;
}
kuc-mobile-datetime-picker-1-26-0[hidden] {
display: none;
}
.kuc-mobile-datetime-picker-1-26-0__group {
border: 0;
padding: 0;
}
.kuc-mobile-datetime-picker-1-26-0__group__label {
display: inline-block;
font-weight: bold;
line-height: 1.5;
padding: 0px;
white-space: nowrap;
margin: 0 0 4px 0;
}
.kuc-mobile-datetime-picker-1-26-0__group__label[hidden] {
display: none;
}
.kuc-mobile-datetime-picker-1-26-0__group__input {
display: flex;
align-items: center;
margin-right: 0.5em;
margin-left: 0.5em;
}
.kuc-mobile-datetime-picker-1-26-0__group__input--date {
width: 130px;
margin-right: 10px;
}
.kuc-mobile-datetime-picker-1-26-0__group__input--time {
max-width: 10px;
}
`,bu=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},xu;(()=>{if(xu=window.customElements.get(`kuc-mobile-datetime-picker-1-26-0`),xu)return;class e extends V{constructor(e){super(),this.className=``,this.error=``,this.id=``,this.label=``,this.language=`auto`,this.value=``,this.disabled=!1,this.hour12=!1,this.requiredIcon=!1,this.visible=!0,this._dateConverted=``,this._changeDateByUI=!1,this._changeTimeByUI=!1,this._previousTimeValue=``,this._previousDateValue=``,this._dateValue=``,this._timeValue=``,this._errorFormat=``,this._errorText=``,this._GUID=W();let t=G(e);Object.assign(this,t)}shouldUpdate(e){return this.value===void 0||this.value===``?!0:typeof this.value!=`string`||(this._dateAndTime=this._getDateTimeValue(this.value),this._dateConverted=Lo(this._dateAndTime.date),!(ns(this._dateAndTime.date,this._dateAndTime.time)&&es(this._dateConverted)))?(this.throwErrorAfterUpdateComplete(Qa.VALUE),!1):!0}willUpdate(e){this._changeDateByUI||this._changeTimeByUI?this._updateValueAndErrorWhenUIChange():(this._errorFormat=``,this._updateErrorText(),this._updateValueWhenSetter())}update(e){e.has(`value`)&&(this.value===void 0&&this._setUndefinedValue(),this.value===``&&this._setEmptyValue()),super.update(e)}_updateValueWhenSetter(){this._errorFormat=``,this.value===``||this.value===void 0?this._previousTimeValue=``:(this._setDateTimeValueSeparate(this._dateAndTime,this._dateConverted),this.value=this._getDateTimeString())}_setDateTimeValueSeparate(e,t){this._dateValue=t,this._timeValue=this._dateValue&&es(t)?Ro(e.time.slice(0,5)):this._previousTimeValue}_updateValueAndErrorWhenUIChange(){let e=this._checkDateTimeFormat();this.value=e?this.value:void 0,this._updateErrorText()}_checkDateTimeFormat(){let e=!!this._timeValue&&!this._dateValue,t=!!this._dateValue&&!this._timeValue;return!this._errorFormat&&!e&&!t}_setUndefinedValue(){if(!this._changeTimeByUI){if(this._errorFormat){if(this._changeDateByUI)return;this._dateValue=``,this._timeValue=``}else this._dateValue=this._previousDateValue,this._timeValue=this._previousTimeValue}}_setEmptyValue(){this._dateValue=``,this._timeValue=``,this._previousTimeValue=``,this._previousDateValue=``}_getDateTimeValue(e){if(e===``||e===void 0)return{date:``,time:``};let t=e.split(`T`),n=t[0],r=t[1];if(e.indexOf(`T`)===e.length-1||t.length>2)return{date:n,time:``};if(!r)return{date:n,time:`00:00`};let[i,a,o]=r.split(`:`),s=`${i}:${a||`00`}`;return o?{date:n,time:`${s}:${o}`}:{date:n,time:s}}render(){return j`
        <fieldset
          class="kuc-mobile-datetime-picker-1-26-0__group"
          aria-describedby="${this._GUID}-error"
        >
          <legend
            class="kuc-mobile-datetime-picker-1-26-0__group__label"
            ?hidden="${!this.label}"
          >
            <kuc-base-mobile-label-1-26-0
              .requiredIcon="${this.requiredIcon}"
              .text="${this.label}"
            ></kuc-base-mobile-label-1-26-0>
          </legend>
          <div class="kuc-mobile-datetime-picker-1-26-0__group__input">
            <kuc-mobile-base-date-1-26-0
              class="kuc-mobile-datetime-picker-1-26-0__group__input--date"
              .disabled="${this.disabled}"
              .value="${this._dateValue}"
              .inputId="${this._GUID}"
              .inputAriaInvalid="${this.error!==``}"
              .required="${this.requiredIcon}"
              .language="${this._getLanguage()}"
              @kuc:mobile-base-date-change="${this._handleDateChange}"
            >
            </kuc-mobile-base-date-1-26-0>
            <kuc-base-mobile-time-1-26-0
              class="kuc-mobile-datetime-picker-1-26-0__group__input--time"
              .value="${this._timeValue}"
              .disabled="${this.disabled}"
              .hour12="${this.hour12}"
              .guid="${this._GUID}"
              .language="${this._getLanguage()}"
              .required="${this.requiredIcon}"
              @kuc:base-mobile-time-change="${this._handleTimeChange}"
            ></kuc-base-mobile-time-1-26-0>
          </div>
          <kuc-base-mobile-error-1-26-0
            .guid="${this._GUID}"
            .text="${this._errorText}"
          >
          </kuc-base-mobile-error-1-26-0>
        </fieldset>
      `}updated(){this._resetState()}_resetState(){this._previousTimeValue=``,this._previousDateValue=``,this._changeDateByUI=!1,this._changeTimeByUI=!1}_updateErrorText(){this._errorText=this._errorFormat||this.error}_getLanguage(){let e=[`en`,`ja`,`zh`,`zh-TW`,`es`];return e.indexOf(this.language)===-1?e.indexOf(document.documentElement.lang)===-1?`en`:document.documentElement.lang:this.language}_handleDateChange(e){if(e.stopPropagation(),e.preventDefault(),e.detail.value===this._dateValue)return;this._changeDateByUI=!0;let t=this._dateValue;e.detail.error?(this._errorFormat=e.detail.error,this.error=``):t=e.detail.value,this._updateDateTimeValue(t,`date`)}_handleTimeChange(e){e.preventDefault(),e.stopPropagation(),this._changeTimeByUI=!0,e.detail.error?(this._errorFormat=e.detail.error,this.error=``):this._errorFormat=``;let t=e.detail.value;this._updateDateTimeValue(t,`time`)}_updateDateTimeValue(e,t){let n=this.value;t===`date`?this._dateValue=e||``:this._timeValue=e,this._previousTimeValue=this._timeValue,this._previousDateValue=this._dateValue;let r=this._errorFormat?void 0:this._getDateTimeString(),i=this._errorFormat?void 0:r;this.value=i;let a=this._errorFormat?void 0:r;this.value=a;let o={value:i,oldValue:n,changedPart:t};H(this,`change`,o)}_getDateTimeString(){if(this._dateValue===``&&this._timeValue===``)return``;if(!this._dateValue||!this._timeValue)return;if(!this.value)return`${this._dateValue}T${this._timeValue}:00`;let e=this.value.split(`:`);return e.length===3?`${this._dateValue}T${this._timeValue}:${e[2]}`:`${this._dateValue}T${this._timeValue}:00`}}bu([P({type:String,reflect:!0,attribute:`class`})],e.prototype,`className`,void 0),bu([P({type:String})],e.prototype,`error`,void 0),bu([P({type:String,reflect:!0,attribute:`id`})],e.prototype,`id`,void 0),bu([P({type:String})],e.prototype,`label`,void 0),bu([P({type:String,attribute:`lang`,reflect:!0,converter:Fo})],e.prototype,`language`,void 0),bu([P({type:String,hasChanged(e,t){return(e===``||e===void 0)&&e===t||e!==t}})],e.prototype,`value`,void 0),bu([P({type:Boolean})],e.prototype,`disabled`,void 0),bu([P({type:Boolean})],e.prototype,`hour12`,void 0),bu([P({type:Boolean})],e.prototype,`requiredIcon`,void 0),bu([P({type:Boolean,attribute:`hidden`,reflect:!0,converter:B})],e.prototype,`visible`,void 0),bu([F()],e.prototype,`_dateValue`,void 0),bu([F()],e.prototype,`_timeValue`,void 0),bu([F()],e.prototype,`_errorFormat`,void 0),bu([F()],e.prototype,`_errorText`,void 0),window.customElements.define(`kuc-mobile-datetime-picker-1-26-0`,e),U(yu),xu=e})();var Su={d:(e,t)=>{if(Array.isArray(t))for(var n=0;n<t.length;){var r=t[n++],i=t[n++];Su.o(e,r)?i===0&&n++:i===0?Object.defineProperty(e,r,{enumerable:!0,value:t[n++]}):Object.defineProperty(e,r,{enumerable:!0,get:i})}else for(var r in t)Su.o(t,r)&&!Su.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};Su.d({},[`r`,0,`1.26.0`]);var Cu={d:(e,t)=>{if(Array.isArray(t))for(var n=0;n<t.length;){var r=t[n++],i=t[n++];Cu.o(e,r)?i===0&&n++:i===0?Object.defineProperty(e,r,{enumerable:!0,value:t[n++]}):Object.defineProperty(e,r,{enumerable:!0,get:i})}else for(var r in t)Cu.o(t,r)&&!Cu.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};Cu.d({},[`$`,0,void 0]);var Z=e=>typeof e==`string`,wu=()=>{let e,t,n=new Promise((n,r)=>{e=n,t=r});return n.resolve=e,n.reject=t,n},Tu=e=>e==null?``:String(e),Eu=e=>Z(e)&&/^[A-Za-z0-9_@.-]{1,128}$/.test(e)&&!e.includes(`..`)&&![`__proto__`,`constructor`,`prototype`].includes(e),Du=e=>e?.callbackApi??e?.constructor?.callbackApi,Ou=(e,t,n)=>{e.forEach(e=>{t[e]&&(n[e]=t[e])})},ku=/###/g,Au=e=>e&&e.includes(`###`)?e.replace(ku,`.`):e,ju=e=>!e||Z(e),Mu=(e,t,n)=>{let r=Z(t)?t.split(`.`):t,i=0;for(;i<r.length-1;){if(ju(e))return{};let t=Au(r[i]);!e[t]&&n&&(e[t]=new n),e=Object.prototype.hasOwnProperty.call(e,t)?e[t]:{},++i}return ju(e)?{}:{obj:e,k:Au(r[i])}},Nu=(e,t,n)=>{let{obj:r,k:i}=Mu(e,t,Object);if(r!==void 0||t.length===1){r[i]=n;return}let a=t[t.length-1],o=t.slice(0,t.length-1),s=Mu(e,o,Object);for(;s.obj===void 0&&o.length;)a=`${o[o.length-1]}.${a}`,o=o.slice(0,o.length-1),s=Mu(e,o,Object),s?.obj&&s.obj[`${s.k}.${a}`]!==void 0&&(s.obj=void 0);s.obj[`${s.k}.${a}`]=n},Pu=(e,t,n,r)=>{let{obj:i,k:a}=Mu(e,t,Object);i[a]=i[a]||[],i[a].push(n)},Fu=(e,t)=>{let{obj:n,k:r}=Mu(e,t);if(n&&Object.prototype.hasOwnProperty.call(n,r))return n[r]},Iu=(e,t,n)=>{let r=Fu(e,n);return r===void 0?Fu(t,n):r},Lu=(e,t,n)=>{for(let r in t)r!==`__proto__`&&r!==`constructor`&&(Object.prototype.hasOwnProperty.call(e,r)?Z(e[r])||e[r]instanceof String||Z(t[r])||t[r]instanceof String?n&&(e[r]=t[r]):Lu(e[r],t[r],n):e[r]=t[r]);return e},Ru=e=>e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,`\\$&`),zu={"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`,"'":`&#39;`,"/":`&#x2F;`},Bu=e=>Z(e)?e.replace(/[&<>"'\/]/g,e=>zu[e]):e,Vu=class{constructor(e){this.capacity=e,this.regExpMap=new Map,this.regExpQueue=[]}getRegExp(e){let t=this.regExpMap.get(e);if(t!==void 0)return t;let n=new RegExp(e);return this.regExpQueue.length===this.capacity&&this.regExpMap.delete(this.regExpQueue.shift()),this.regExpMap.set(e,n),this.regExpQueue.push(e),n}},Hu=[` `,`,`,`?`,`!`,`;`],Uu=new Vu(20),Wu=(e,t,n)=>{t||=``,n||=``;let r=Hu.filter(e=>!t.includes(e)&&!n.includes(e));if(r.length===0)return!0;let i=Uu.getRegExp(`(${r.map(e=>e===`?`?`\\?`:e).join(`|`)})`),a=!i.test(e);if(!a){let t=e.indexOf(n);t>0&&!i.test(e.substring(0,t))&&(a=!0)}return a},Gu=(e,t,n=`.`)=>{if(!e)return;if(e[t])return Object.prototype.hasOwnProperty.call(e,t)?e[t]:void 0;let r=t.split(n),i=e;for(let e=0;e<r.length;){if(!i||typeof i!=`object`)return;let t,a=``;for(let o=e;o<r.length;++o)if(o!==e&&(a+=n),a+=r[o],t=i[a],typeof t!=`function`&&a!==`__proto__`||Object.prototype.hasOwnProperty.call(i,a)||(t=void 0),t!==void 0){if([`string`,`number`,`boolean`].includes(typeof t)&&o<r.length-1)continue;e+=o-e+1;break}i=t}return i},Ku=e=>e?.replace(/_/g,`-`),qu={type:`logger`,log(e){this.output(`log`,e)},warn(e){this.output(`warn`,e)},error(e){this.output(`error`,e)},output(e,t){console?.[e]?.apply?.(console,t)}},Ju=new class e{constructor(e,t={}){this.init(e,t)}init(e,t={}){this.prefix=t.prefix||`i18next:`,this.logger=e||qu,this.options=t,this.debug=t.debug,this.seen=new Set}log(...e){return this.forward(e,`log`,``,!0)}warn(...e){return this.forward(e,`warn`,``,!0)}error(...e){return this.forward(e,`error`,``)}deprecate(...e){return this.forward(e,`warn`,`WARNING DEPRECATED: `,!0)}once(e,t,...n){return!this.debug||this.seen.has(e)||this.seen.size>=1e3?null:(this.seen.add(e),this[t](...n))}forward(e,t,n,r){return r&&!this.debug?null:(e=e.map(e=>Z(e)?e.replace(/[\r\n\x00-\x1F\x7F]/g,` `):e),Z(e[0])&&(e[0]=`${n}${this.prefix} ${e[0]}`),this.logger[t](e))}create(t){return new e(this.logger,{prefix:`${this.prefix}:${t}:`,...this.options})}clone(t){return t||=this.options,t.prefix=t.prefix||this.prefix,new e(this.logger,t)}},Yu=class{constructor(){this.observers={}}on(e,t){return e.split(` `).forEach(e=>{this.observers[e]||(this.observers[e]=new Map);let n=this.observers[e].get(t)||0;this.observers[e].set(t,n+1)}),this}off(e,t){(typeof e==`string`?e.split(` `):[e]).forEach(e=>{this.observers[e]&&(t?this.observers[e].delete(t):delete this.observers[e])})}once(e,t){let n=(...r)=>{t(...r),this.off(e,n)};return this.on(e,n),this}emit(e,...t){this.observers[e]&&Array.from(this.observers[e].entries()).forEach(([e,n])=>{for(let r=0;r<n;r++)e(...t)}),this.observers[`*`]&&Array.from(this.observers[`*`].entries()).forEach(([n,r])=>{for(let i=0;i<r;i++)n(e,...t)})}},Xu=new WeakSet,Zu=class extends Yu{constructor(e,t={ns:[`translation`],defaultNS:`translation`}){super(),this.data=e||{},this.options=t,this.logger=Ju.create(`resourceStore`),this.options.keySeparator===void 0&&(this.options.keySeparator=`.`),this.options.ignoreJSONStructure===void 0&&(this.options.ignoreJSONStructure=!0)}addNamespaces(e){this.options.ns.includes(e)||this.options.ns.push(e)}removeNamespaces(e){let t=this.options.ns.indexOf(e);t>-1&&this.options.ns.splice(t,1)}deprecateDottedLng(e){this.logger.once(e,`deprecate`,`${e}: a dotted language ('en.translation.key') that carries the namespace and key is removed in v27; pass language, namespace and key as separate arguments`)}getResource(e,t,n,r={}){let i=r.keySeparator===void 0?this.options.keySeparator:r.keySeparator,a=r.ignoreJSONStructure===void 0?this.options.ignoreJSONStructure:r.ignoreJSONStructure,o;e.includes(`.`)?(this.deprecateDottedLng(`getResource`),o=e.split(`.`)):(o=[e,t],n&&(Array.isArray(n)?o.push(...n):Z(n)&&i?o.push(...n.split(i)):o.push(n)));let s=Fu(this.data,o);return s==null&&!t&&!n&&e.includes(`.`)&&(e=o[0],t=o[1],n=o.slice(2).join(`.`)),s!=null||!a||!Z(n)?s:Gu(this.data?.[e]?.[t],n,i)}addResource(e,t,n,r,i={silent:!1}){let a=i.keySeparator===void 0?this.options.keySeparator:i.keySeparator,o=[e,t];n&&(o=o.concat(a?n.split(a):n)),e.includes(`.`)&&(this.deprecateDottedLng(`addResource`),o=e.split(`.`),r=t,t=o[1]),this.addNamespaces(t),Nu(this.data,o,r),i.silent||this.emit(`added`,e,t,n,r)}addResources(e,t,n,r={silent:!1}){for(let r in n)(Z(n[r])||Array.isArray(n[r]))&&this.addResource(e,t,r,n[r],{silent:!0});r.silent||this.emit(`added`,e,t,n)}addResourceBundle(e,t,n,r,i,a={silent:!1,skipCopy:!1}){let o=[e,t];e.includes(`.`)&&(this.deprecateDottedLng(`addResourceBundle`),o=e.split(`.`),r=n,n=t,t=o[1]),this.addNamespaces(t);let s=Fu(this.data,o)||{};a.skipCopy||(n=JSON.parse(JSON.stringify(n))),r?Lu(s,n,i):s={...s,...n},Nu(this.data,o,s),a.silent||this.emit(`added`,e,t,n)}removeResourceBundle(e,t){this.hasResourceBundle(e,t)&&delete this.data[e][t],this.removeNamespaces(t),this.emit(`removed`,e,t)}hasResourceBundle(e,t){return this.getResource(e,t)!==void 0}getResourceBundle(e,t){return t||=this.options.defaultNS,this.getResource(e,t)}getDataByLanguage(e){return this.data[e]}hasLanguageSomeTranslations(e){let t=this.getDataByLanguage(e);return!!(t&&Object.keys(t)||[]).find(e=>{let n=t[e];return Xu.has(n)?!0:!n||Object.keys(n).length===0?!1:(typeof n==`object`&&Xu.add(n),!0)})}toJSON(){return this.data}},Qu={processors:{},addPostProcessor(e){this.processors[e.name]=e},handle(e,t,n,r,i){return e.forEach(e=>{t=this.processors[e]?.process(t,n,r,i)??t}),t}},$u=Symbol(`i18next/PATH_KEY`);function ed(){let e=[],t=Object.create(null),n;return t.get=(r,i)=>(n?.revoke?.(),i===$u?e:(e.push(i),n=Proxy.revocable(r,t),n.proxy)),Proxy.revocable(Object.create(null),t).proxy}function td(e,t){let{[$u]:n}=e(ed()),r=t?.keySeparator??`.`,i=t?.nsSeparator??`:`,a=t?.enableSelector===`strict`;if(n.length>1&&i){let e=t?.ns,o=a?Array.isArray(e)?e:e?[e]:null:Array.isArray(e)?e:null;if(o&&(a?o:o.length>1?o.slice(1):[]).includes(n[0]))return`${n[0]}${i}${n.slice(1).join(r)}`}return n.join(r)}var nd=e=>!Z(e)&&typeof e!=`boolean`&&typeof e!=`number`,rd=class e extends Yu{constructor(e,t={}){super(),Ou([`resourceStore`,`languageUtils`,`pluralResolver`,`interpolator`,`backendConnector`,`i18nFormat`,`utils`,`ownPostProcessors`],e,this),this.options=t,this.options.keySeparator===void 0&&(this.options.keySeparator=`.`),this.logger=Ju.create(`translator`),this.checkedLoadedFor={}}changeLanguage(e){e&&(this.language=e)}exists(e,t={interpolation:{}}){let n={...t};if(e==null)return!1;let r=this.resolve(e,n);if(r?.res===void 0)return!1;let i=nd(r.res);return!(n.returnObjects===!1&&i)}extractFromKey(e,t){let n=t.nsSeparator===void 0?this.options.nsSeparator:t.nsSeparator;n===void 0&&(n=`:`);let r=t.keySeparator===void 0?this.options.keySeparator:t.keySeparator,i=t.ns||this.options.defaultNS||[],a=n&&e.includes(n),o=!this.options.userDefinedKeySeparator&&!t.keySeparator&&!this.options.userDefinedNsSeparator&&!t.nsSeparator&&!Wu(e,n,r);if(a&&!o){let t=e.match(this.interpolator.nestingRegexp);if(t&&t.length>0)return{key:e,namespaces:Z(i)?[i]:i};let a=e.split(n);(n!==r||n===r&&this.options.ns.includes(a[0]))&&(i=a.shift()),e=a.join(r)}return{key:e,namespaces:Z(i)?[i]:i}}translate(t,n,r){let i=typeof n==`object`?{...n}:n;if(typeof i!=`object`&&this.options.overloadTranslationOptionHandler&&(i=this.options.overloadTranslationOptionHandler(arguments)),typeof i==`object`&&(i={...i}),i||={},t==null)return``;typeof t==`function`&&(t=td(t,{...this.options,...i})),Array.isArray(t)||(t=[String(t)]),t=t.map(e=>typeof e==`function`?td(e,{...this.options,...i}):String(e));let a=i.returnDetails===void 0?this.options.returnDetails:i.returnDetails,o=i.keySeparator===void 0?this.options.keySeparator:i.keySeparator,{key:s,namespaces:c}=this.extractFromKey(t[t.length-1],i),l=c[c.length-1],u=i.nsSeparator===void 0?this.options.nsSeparator:i.nsSeparator;u===void 0&&(u=`:`);let d=i.lng||this.language,f=i.appendNamespaceToCIMode||this.options.appendNamespaceToCIMode;if(d?.toLowerCase()===`cimode`)return f?a?{res:`${l}${u}${s}`,usedKey:s,exactUsedKey:s,usedLng:d,usedNS:l,usedParams:this.getUsedParamsDetails(i)}:`${l}${u}${s}`:a?{res:s,usedKey:s,exactUsedKey:s,usedLng:d,usedNS:l,usedParams:this.getUsedParamsDetails(i)}:s;let p=this.resolve(t,i),m=p?.res,h=p?.usedKey||s,g=p?.exactUsedKey||s,_=[`[object Number]`,`[object Function]`,`[object RegExp]`],v=i.joinArrays===void 0?this.options.joinArrays:i.joinArrays,ee=!this.i18nFormat||this.i18nFormat.handleAsObject,te=i.count!==void 0&&!Z(i.count),ne=e.hasDefaultValue(i),re=te?this.pluralResolver.getSuffix(d,i.count,i):``,ie=i.ordinal&&te?this.pluralResolver.getSuffix(d,i.count,{ordinal:!1}):``,ae=te&&!i.ordinal&&i.count===0,oe=ae&&i[`defaultValue${this.options.pluralSeparator}zero`]||i[`defaultValue${re}`]||i[`defaultValue${ie}`]||i.defaultValue,se=m;ee&&!m&&ne&&(se=oe);let ce=nd(se),le=Object.prototype.toString.apply(se);if(ee&&se&&ce&&!_.includes(le)&&!(Z(v)&&Array.isArray(se))){if(!i.returnObjects&&!this.options.returnObjects){this.options.returnedObjectHandler||(this.logger.warn(`accessing an object - but returnObjects options is not enabled!`),this.logger.once(`returnedObject`,`deprecate`,`accessing an object without returnObjects returns a sentence about it today; from v27 t() returns the key, as for a missing key (returnedObjectHandler can keep today's text)`));let e=this.options.returnedObjectHandler?this.options.returnedObjectHandler(h,se,{...i,ns:c}):`key '${s} (${this.language})' returned an object instead of string.`;return a?(p.res=e,p.usedParams=this.getUsedParamsDetails(i),p):e}if(o){let e=Array.isArray(se),t=e?[]:{},n=e?g:h;for(let e in se)if(Object.prototype.hasOwnProperty.call(se,e)){let r=`${n}${o}${e}`;t[e]=ne&&!m?this.translate(r,{...i,defaultValue:nd(oe)?oe[e]:void 0,joinArrays:!1,ns:c}):this.translate(r,{...i,joinArrays:!1,ns:c}),t[e]===r&&(t[e]=se[e])}m=t}}else if(ee&&Z(v)&&Array.isArray(m))m=m.join(v),m&&=this.extendTranslation(m,t,i,p,r);else{let e=!1,n=!1;!this.isValidLookup(m)&&ne&&(e=!0,m=oe),this.isValidLookup(m)||(n=!0,m=s);let a=(i.missingKeyNoValueFallbackToKey||this.options.missingKeyNoValueFallbackToKey)&&n?void 0:m,c=ne&&oe!==m&&this.options.updateMissing;if(n||e||c){if(this.logger.log(c?`updateKey`:`missingKey`,d,l,te&&!c?`${s}${this.pluralResolver.getSuffix(d,i.count,i)}`:s,c?oe:m),o){let e=this.resolve(s,{...i,keySeparator:!1});e&&e.res&&this.logger.warn(`Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.`)}let e=[],t=this.languageUtils.getFallbackCodes(this.options.fallbackLng,i.lng||this.language);if(this.options.saveMissingTo===`fallback`&&t&&t[0])for(let n=0;n<t.length;n++)e.push(t[n]);else this.options.saveMissingTo===`all`?e=this.languageUtils.toResolveHierarchy(i.lng||this.language):e.push(i.lng||this.language);let n=(e,t,n)=>{let r=ne&&n!==m?n:a;this.options.missingKeyHandler?this.options.missingKeyHandler(e,l,t,r,c,i):this.backendConnector?.saveMissing&&this.backendConnector.saveMissing(e,l,t,r,c,i,void 0,this.utils?.hasLoadedNamespace),this.emit(`missingKey`,e,l,t,m)};this.options.saveMissing&&(this.options.saveMissingPlurals&&te?e.forEach(e=>{let t=this.pluralResolver.getSuffixes(e,i);ae&&i[`defaultValue${this.options.pluralSeparator}zero`]&&!t.includes(`${this.options.pluralSeparator}zero`)&&t.push(`${this.options.pluralSeparator}zero`),t.forEach(t=>{n([e],s+t,i[`defaultValue${t}`]||oe)})}):n(e,s,oe))}m=this.extendTranslation(m,t,i,p,r),n&&m===s&&this.options.appendNamespaceToMissingKey&&(m=`${l}${u}${s}`),(n||e)&&this.options.parseMissingKeyHandler&&(m=this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey?`${l}${u}${s}`:s,e?m:void 0,i))}return a?(p.res=m,p.usedParams=this.getUsedParamsDetails(i),p):m}extendTranslation(e,t,n,r,i){if(this.i18nFormat?.parse)e=this.i18nFormat.parse(e,{...this.options.interpolation.defaultVariables,...n},n.lng||this.language||r.usedLng,r.usedNS,r.usedKey,{resolved:r});else if(!n.skipInterpolation){n.interpolation&&this.interpolator.init({...n,interpolation:{...this.options.interpolation,...n.interpolation}});let a=Z(e)&&(n?.interpolation?.skipOnVariables===void 0?this.options.interpolation.skipOnVariables:n.interpolation.skipOnVariables),o;if(a){let t=e.match(this.interpolator.nestingRegexp);o=t&&t.length}let s=n.replace&&!Z(n.replace)?n.replace:n;if(this.options.interpolation.defaultVariables&&(s={...this.options.interpolation.defaultVariables,...s}),e=this.interpolator.interpolate(e,s,n.lng||this.language||r.usedLng,n),a){let t=e.match(this.interpolator.nestingRegexp),r=t&&t.length;o<r&&(n.nest=!1)}!n.lng&&r&&r.res&&(n.lng=this.language||r.usedLng),n.nest!==!1&&(e=this.interpolator.nest(e,(...e)=>i?.[0]===e[0]&&!n.context?(this.logger.warn(`It seems you are nesting recursively key: ${e[0]} in key: ${t[0]}`),null):this.translate(...e,t),n)),n.interpolation&&this.interpolator.reset()}let a=n.postProcess||this.options.postProcess,o=Z(a)?[a]:a;return e!=null&&o?.length&&n.applyPostProcessor!==!1&&(o.forEach(e=>{this.logger.debug&&Qu.processors[e]&&this.ownPostProcessors&&!this.ownPostProcessors.has(e)&&this.logger.once(e,`deprecate`,`postProcess: '${e}' was registered with use() on another i18next instance; from v27 post-processors are per instance, so call use() with it on this instance too`)}),e=Qu.handle(o,e,t,this.options&&this.options.postProcessPassResolved?{i18nResolved:{...r,usedParams:this.getUsedParamsDetails(n)},...n}:n,this)),e}resolve(e,t={}){let n,r,i,a,o;return Z(e)&&(e=[e]),Array.isArray(e)&&(e=e.map(e=>typeof e==`function`?td(e,{...this.options,...t}):e)),e.forEach(e=>{if(this.isValidLookup(n))return;let s=this.extractFromKey(e,t),c=s.key;r=c;let l=s.namespaces;this.options.fallbackNS&&(l=l.concat(this.options.fallbackNS));let u=t.count!==void 0&&!Z(t.count),d=u&&!t.ordinal&&t.count===0,f=t.context!==void 0&&(Z(t.context)||typeof t.context==`number`)&&t.context!==``,p=t.lngs?t.lngs:this.languageUtils.toResolveHierarchy(t.lng||this.language,t.fallbackLng);l.forEach(e=>{this.isValidLookup(n)||(o=e,!this.checkedLoadedFor[`${p[0]}-${e}`]&&this.utils?.hasLoadedNamespace&&!this.utils?.hasLoadedNamespace(o)&&(this.checkedLoadedFor[`${p[0]}-${e}`]=!0,this.logger.warn(`key "${r}" for languages "${p.join(`, `)}" won't get resolved as namespace "${o}" was not yet loaded`,`This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!`)),p.forEach(r=>{if(this.isValidLookup(n))return;a=r;let o=[c];if(this.i18nFormat?.addLookupKeys)this.i18nFormat.addLookupKeys(o,c,r,e,t);else{let e;u&&(e=this.pluralResolver.getSuffix(r,t.count,t));let n=`${this.options.pluralSeparator}zero`,i=`${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;if(u&&(t.ordinal&&e.startsWith(i)&&o.push(c+e.replace(i,this.options.pluralSeparator)),o.push(c+e),d&&o.push(c+n)),f){let r=`${c}${this.options.contextSeparator||`_`}${t.context}`;o.push(r),u&&(t.ordinal&&e.startsWith(i)&&o.push(r+e.replace(i,this.options.pluralSeparator)),o.push(r+e),d&&o.push(r+n))}}let s;for(;s=o.pop();)this.isValidLookup(n)||(i=s,n=this.getResource(r,e,s,t))}))})}),{res:n,usedKey:r,exactUsedKey:i,usedLng:a,usedNS:o}}isValidLookup(e){return e!==void 0&&!(!this.options.returnNull&&e===null)&&!(!this.options.returnEmptyString&&e===``)}getResource(e,t,n,r={}){return this.i18nFormat?.getResource?this.i18nFormat.getResource(e,t,n,r):this.resourceStore.getResource(e,t,n,r)}getUsedParamsDetails(e={}){let t=[`defaultValue`,`ordinal`,`context`,`replace`,`lng`,`lngs`,`fallbackLng`,`ns`,`keySeparator`,`nsSeparator`,`returnObjects`,`returnDetails`,`joinArrays`,`postProcess`,`interpolation`],n=e.replace&&!Z(e.replace),r=n?e.replace:e;if(n&&e.count!==void 0&&(r={...r,count:e.count}),this.options.interpolation.defaultVariables&&(r={...this.options.interpolation.defaultVariables,...r}),!n){r={...r};for(let e of t)delete r[e]}return r}static hasDefaultValue(e){for(let t in e)if(Object.prototype.hasOwnProperty.call(e,t)&&t.startsWith(`defaultValue`)&&e[t]!==void 0)return!0;return!1}},id=class{constructor(e){this.options=e,this.supportedLngs=this.options.supportedLngs||!1,this.logger=Ju.create(`languageUtils`),this.resolveHierarchyCache={}}clearCache(){this.resolveHierarchyCache={}}getScriptPartFromCode(e){if(e=Ku(e),!e||!e.includes(`-`))return null;let t=e.split(`-`);return t.length===2||(t.pop(),t[t.length-1].toLowerCase()===`x`)?null:this.formatLanguageCode(t.join(`-`))}getLanguagePartFromCode(e){if(e=Ku(e),!e||!e.includes(`-`))return e;let t=e.split(`-`);return this.formatLanguageCode(t[0])}formatLanguageCode(e){if(Z(e)&&e.includes(`-`)){let t;try{t=Intl.getCanonicalLocales(e)[0]}catch{}return t&&this.options.lowerCaseLng&&(t=t.toLowerCase()),t||(this.options.lowerCaseLng?e.toLowerCase():e)}let t=this.options.cleanCode||this.options.lowerCaseLng?e.toLowerCase():e;return this.logger.debug&&Z(e)&&this.deprecateBareCode(e,t),t}deprecateBareCode(e,t){let n;try{n=Intl.getCanonicalLocales(e)[0]}catch{return}this.options.lowerCaseLng&&(n=n.toLowerCase()),n!==t&&this.logger.once(e,`deprecate`,`language code '${e}' is used as '${t}'; i18next v27 canonicalizes it to '${n}', use '${n}' in lng, fallbackLng, supportedLngs and the resources`)}isSupportedCode(e){return(this.options.load===`languageOnly`||this.options.nonExplicitSupportedLngs)&&(e=this.getLanguagePartFromCode(e)),!this.supportedLngs||!this.supportedLngs.length||this.supportedLngs.includes(e)}getBestMatchFromCodes(e){if(!e)return null;let t;return e.forEach(e=>{if(t)return;let n=this.formatLanguageCode(e);(!this.options.supportedLngs||this.isSupportedCode(n))&&(t=n)}),!t&&this.options.supportedLngs&&e.forEach(e=>{if(t)return;let n=this.getScriptPartFromCode(e);if(this.isSupportedCode(n))return t=n;let r=this.getLanguagePartFromCode(e);if(this.isSupportedCode(r))return t=r;t=this.options.supportedLngs.find(e=>e===r?!0:!e.includes(`-`)&&!r.includes(`-`)?!1:!(!e.includes(`-`)||r.includes(`-`)||e.slice(0,e.indexOf(`-`))!==r))}),t||=this.getFallbackCodes(this.options.fallbackLng)[0],t}getFallbackCodes(e,t){if(!e)return[];if(typeof e==`function`&&(e=e(t)),Z(e)&&(e=[e]),Array.isArray(e))return e;if(!t)return e.default||[];let n=e[t];return n||=e[this.getScriptPartFromCode(t)],n||=e[this.formatLanguageCode(t)],n||=e[this.getLanguagePartFromCode(t)],n||=e.default,n||[]}toResolveHierarchy(e,t){let n=this.options.fallbackLng,r=Array.isArray(n)?n.join(`|`):n;r!==this._cachedFallbackLng&&(this.resolveHierarchyCache={},this._cachedFallbackLng=r);let i=t===void 0||t===!1||Z(t),a=t===void 0&&typeof this.options.fallbackLng==`function`,o=Z(e)&&i&&!a,s=null;if(o){let n;n=t===void 0?`undefined`:t===!1?`boolean:false`:`string:${t}`,s=`${e.length}:${e}|${n}`}if(s!==null){let e=this.resolveHierarchyCache[s];if(e!==void 0)return e.slice()}let c=this.getFallbackCodes((t===!1?[]:t)||this.options.fallbackLng||[],e),l=[],u=e=>{e&&(this.isSupportedCode(e)?l.push(e):this.logger.warn(`rejecting language code not found in supportedLngs: ${e}`))};return Z(e)&&(e.includes(`-`)||e.includes(`_`))?(this.options.load!==`languageOnly`&&u(this.formatLanguageCode(e)),this.options.load!==`languageOnly`&&this.options.load!==`currentOnly`&&u(this.getScriptPartFromCode(e)),this.options.load!==`currentOnly`&&u(this.getLanguagePartFromCode(e))):Z(e)&&u(this.formatLanguageCode(e)),c.forEach(e=>{let t=this.formatLanguageCode(e);l.includes(t)||u(t)}),s===null?l:(this.resolveHierarchyCache[s]=l,l.slice())}},ad={zero:0,one:1,two:2,few:3,many:4,other:5},od={select:e=>e===1?`one`:`other`,resolvedOptions:()=>({pluralCategories:[`one`,`other`]})},sd=class{constructor(e,t={}){this.languageUtils=e,this.options=t,this.logger=Ju.create(`pluralResolver`),this.pluralRulesCache={}}clearCache(){this.pluralRulesCache={}}getRule(e,t={}){let n=Ku(e===`dev`?`en`:e),r=t.ordinal?`ordinal`:`cardinal`,i=JSON.stringify({cleanedCode:n,type:r});if(i in this.pluralRulesCache)return this.pluralRulesCache[i];let a;try{a=new Intl.PluralRules(n,{type:r})}catch{if(typeof Intl>`u`)return this.logger.error(`No Intl support, please use an Intl polyfill!`),od;if(!e.match(/-|_/))return od;let n=this.languageUtils.getLanguagePartFromCode(e);a=this.getRule(n,t)}return this.pluralRulesCache[i]=a,a}needsPlural(e,t={}){let n=this.getRule(e,t);return n||=this.getRule(`dev`,t),n?.resolvedOptions().pluralCategories.length>1}getPluralFormsOfKey(e,t,n={}){return this.getSuffixes(e,n).map(e=>`${t}${e}`)}getSuffixes(e,t={}){let n=this.getRule(e,t);return n||=this.getRule(`dev`,t),n?n.resolvedOptions().pluralCategories.sort((e,t)=>ad[e]-ad[t]).map(e=>`${this.options.prepend}${t.ordinal?`ordinal${this.options.prepend}`:``}${e}`):[]}getSuffix(e,t,n={}){let r=this.getRule(e,n);return r?`${this.options.prepend}${n.ordinal?`ordinal${this.options.prepend}`:``}${r.select(t)}`:(this.logger.warn(`no plural rule found for: ${e}`),this.getSuffix(`dev`,t,n))}},cd=(e,t,n,r=`.`,i=!0)=>{let a=Iu(e,t,n);return a==null&&i&&Z(n)&&(a=Gu(e,n,r),a===void 0&&(a=Gu(t,n,r))),a},ld=class{constructor(e={}){this.logger=Ju.create(`interpolator`),this.options=e,this.format=e?.interpolation?.format||(e=>e),this.init(e)}init(e={}){e.interpolation||={escapeValue:!0};let{escape:t,escapeValue:n,useRawValueToEscape:r,prefix:i,prefixEscaped:a,suffix:o,suffixEscaped:s,formatSeparator:c,unescapeSuffix:l,unescapePrefix:u,nestingPrefix:d,nestingPrefixEscaped:f,nestingSuffix:p,nestingSuffixEscaped:m,nestingOptionsSeparator:h,maxReplaces:g,alwaysFormat:_}=e.interpolation;if(a||s||f||m){let e=Object.entries({prefixEscaped:a,suffixEscaped:s,nestingPrefixEscaped:f,nestingSuffixEscaped:m}).filter(([,e])=>e).map(([e])=>e);this.logger.once(e.join(),`deprecate`,`interpolation.${e.join(`, interpolation.`)}: the regex-escaped delimiter options are removed in v27; pass the literal delimiters as prefix, suffix, nestingPrefix and nestingSuffix`)}this.escape=t===void 0?Bu:t,this.escapeValue=n===void 0||n,this.useRawValueToEscape=r!==void 0&&r,this.prefix=i?Ru(i):a||`{{`,this.suffix=o?Ru(o):s||`}}`,this.formatSeparator=c||`,`,this.unescapePrefix=l?``:u?Ru(u):`-`,this.unescapeSuffix=this.unescapePrefix?``:l?Ru(l):``,this.nestingPrefix=d?Ru(d):f||Ru(`$t(`),this.nestingSuffix=p?Ru(p):m||Ru(`)`),this.nestingOptionsSeparator=h||`,`,this.maxReplaces=g||1e3,this.alwaysFormat=_!==void 0&&_,this.resetRegExp()}reset(){this.options&&this.init(this.options)}resetRegExp(){let e=(e,t)=>e?.source===t?(e.lastIndex=0,e):new RegExp(t,`g`);this.regexp=e(this.regexp,`${this.prefix}(.+?)${this.suffix}`),this.regexpUnescape=e(this.regexpUnescape,`${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`),this.nestingRegexp=e(this.nestingRegexp,`${this.nestingPrefix}((?:[^()"']|"[^"]*"|'[^']*'|\\((?:[^()"']|"[^"]*"|'[^']*')*\\))*?)${this.nestingSuffix}`)}interpolate(e,t,n,r){let i,a,o,s=e,c=this.options&&this.options.interpolation&&this.options.interpolation.defaultVariables||{},l=e=>{if(!e.includes(this.formatSeparator)){let i=cd(t,c,e,this.options.keySeparator,this.options.ignoreJSONStructure);return this.alwaysFormat?this.format(i,void 0,n,{...r,...t,interpolationkey:e}):i}let i=e.split(this.formatSeparator),a=i.shift().trim(),o=i.join(this.formatSeparator).trim();return this.format(cd(t,c,a,this.options.keySeparator,this.options.ignoreJSONStructure),o,n,{...r,...t,interpolationkey:a})};this.resetRegExp(),!this.escapeValue&&typeof e==`string`&&/\$t\([^)]*\{[^}]*\{\{/.test(e)&&this.logger.warn(`nesting options string contains interpolated variables with escapeValue: false — if any of those values are attacker-controlled they can inject additional nesting options (e.g. redirect lng/ns). Sanitise untrusted input before passing it to t(), or keep escapeValue: true.`);let u=r?.missingInterpolationHandler||this.options.missingInterpolationHandler,d=r?.interpolation?.skipOnVariables===void 0?this.options.interpolation.skipOnVariables:r.interpolation.skipOnVariables,f=[{regex:this.regexpUnescape,safeValue:e=>e},{regex:this.regexp,safeValue:e=>this.escapeValue?(this.escape===Bu&&this.options?.interpolation?.escapeValue!==!1&&Z(e)&&e.includes(`/`)&&this.logger.once(`/`,`deprecate`,`escapeValue renders '/' in a value as '&#x2F;' today; from v27 the default escape leaves '/' as it is`),this.escape(e)):e}],p=[],m=0;return f.forEach(t=>{for(o=0;i=t.regex.exec(e);){let n=i.index-m,c=p.find(([e,t])=>n>=e&&n<t);if(c){t.regex.lastIndex=c[1]+m;continue}let f=i[1].trim();if(a=l(f),a===void 0){if(typeof u==`function`){let t=u(e,i,r);a=Z(t)?t:``}else if(r&&Object.prototype.hasOwnProperty.call(r,f))a=``;else if(d){this.logger.debug&&this.logger.once(`${s}\u0000${i[0]}`,`warn`,`missed to pass in variable ${f} for interpolating ${s}`),a=i[0];continue}else this.logger.warn(`missed to pass in variable ${f} for interpolating ${e}`),a=``}else!Z(a)&&!this.useRawValueToEscape&&(a=Tu(a));let h=Tu(t.safeValue(a));if(e=e.slice(0,i.index)+h+e.slice(i.index+i[0].length),d?(t.regex===this.regexpUnescape?p.push([i.index,i.index+h.length]):m+=h.length-i[0].length,t.regex.lastIndex+=h.length,t.regex.lastIndex-=i[0].length):t.regex.lastIndex=0,o++,o>=this.maxReplaces)break}}),e}nest(e,t,n={}){let r,i,a,o=(e,t)=>{let n=this.nestingOptionsSeparator;if(!e.includes(n))return e;let r=e.split(RegExp(`${Ru(n)}[ ]*{`)),i=`{${r[1]}`;e=r[0],i=this.interpolate(i,a);let o=i.match(/'/g),s=i.match(/"/g);((o?.length??0)%2==0&&!s||(s?.length??0)%2!=0)&&(i=i.replace(/'/g,`"`));try{a=JSON.parse(i),t&&(a={...t,...a})}catch(t){return this.logger.warn(`failed parsing options string in nesting for key ${e}`,t),`${e}${n}${i}`}return a.defaultValue&&a.defaultValue.includes(this.prefix)&&delete a.defaultValue,e},s=new RegExp(this.nestingRegexp),c=``,l=0;for(;r=s.exec(e);){let u=[];a={...n},a=a.replace&&!Z(a.replace)?a.replace:a,a.applyPostProcessor=!1,delete a.defaultValue;let d=/{.*}/s.test(r[1])?r[1].lastIndexOf(`}`)+1:r[1].indexOf(this.formatSeparator);if(d!==-1&&(u=r[1].slice(d).split(this.formatSeparator).map(e=>e.trim()).filter(Boolean),r[1]=r[1].slice(0,d)),i=t(o.call(this,r[1].trim(),a),a),i&&r[0]===e&&!Z(i))return i;Z(i)||(i=Tu(i)),i||=(this.logger.warn(`missed to resolve ${r[1]} for nesting ${e}`),``),u.length&&(i=u.reduce((e,t)=>this.format(e,t,n.lng,{...n,interpolationkey:r[1].trim()}),i.trim())),c+=e.slice(l,r.index)+Tu(i),l=s.lastIndex,this.regexp.lastIndex=0}return l?c+e.slice(l):e}},ud=e=>{let t=e.toLowerCase().trim(),n={};if(e.includes(`(`)){let r=e.split(`(`);t=r[0].toLowerCase().trim();let i=r[1].slice(0,-1);t===`currency`&&!i.includes(`:`)?n.currency||=i.trim():t===`relativetime`&&!i.includes(`:`)?n.range||=i.trim():i.split(`;`).forEach(e=>{if(e){let[t,...r]=e.split(`:`),i=r.join(`:`).trim().replace(/^'+|'+$/g,``),a=t.trim();n[a]||(n[a]=i),i===`false`&&(n[a]=!1),i===`true`&&(n[a]=!0),isNaN(i)||(n[a]=parseInt(i,10))}})}return{formatName:t,formatOptions:n}},dd=e=>{let t={};return(n,r,i)=>{let a=i;i&&i.interpolationkey&&i.formatParams&&i.formatParams[i.interpolationkey]&&i[i.interpolationkey]&&(a={...a,[i.interpolationkey]:void 0});let o;try{o=r+JSON.stringify(a)}catch{return e(Ku(r),i)(n)}let s=t[o];return s||(s=e(Ku(r),i),t[o]=s),s(n)}},fd=e=>(t,n,r)=>e(Ku(n),r)(t),pd=class{constructor(e={}){this.logger=Ju.create(`formatter`),this.options=e,this.init(e)}init(e,t={interpolation:{}}){this.formatSeparator=t.interpolation.formatSeparator||`,`;let n=t.cacheInBuiltFormats?dd:fd;this.formats={number:n((e,t)=>{let n=new Intl.NumberFormat(e,{...t});return e=>n.format(e)}),currency:n((e,t)=>{let n=new Intl.NumberFormat(e,{...t,style:`currency`});return e=>n.format(e)}),datetime:n((e,t)=>{let n=new Intl.DateTimeFormat(e,{...t});return e=>n.format(e)}),relativetime:n((e,t)=>{let n=new Intl.RelativeTimeFormat(e,{...t});return e=>n.format(e,t.range||`day`)}),list:n((e,t)=>{let n=new Intl.ListFormat(e,{...t});return e=>n.format(e)})}}add(e,t){this.formats[e.toLowerCase().trim()]=t}addCached(e,t){this.formats[e.toLowerCase().trim()]=dd(t)}format(e,t,n,r={}){if(!t||e==null)return e;let i=t.split(this.formatSeparator),a=[];for(let e=0;e<i.length;e++){let t=i[e];for(;t.indexOf(`(`)>-1&&!t.includes(`)`)&&e+1<i.length;)t=`${t}${this.formatSeparator}${i[++e]}`;a.push(t)}return a.reduce((e,t)=>{let{formatName:i,formatOptions:a}=ud(t);if(this.formats[i]){let t=e;try{let o=r?.formatParams?.[r.interpolationkey]||{},s=o.locale||o.lng||r.locale||r.lng||n;t=this.formats[i](e,s,{...a,...r,...o})}catch(e){this.logger.warn(e)}return t}return this.logger.warn(`there was no format function for ${i}`),e},e)}},md=(e,t)=>{e.pending[t]!==void 0&&(delete e.pending[t],e.pendingCount--)},hd=class extends Yu{constructor(e,t,n,r={}){super(),this.backend=e,this.store=t,this.services=n,this.languageUtils=n.languageUtils,this.options=r,this.logger=Ju.create(`backendConnector`),this.waitingReads=[],this.maxParallelReads=r.maxParallelReads||10,this.readingCalls=0,this.maxRetries=r.maxRetries>=0?r.maxRetries:5,this.retryTimeout=r.retryTimeout>=1?r.retryTimeout:350,this.state={},this.queue=[],this.backend?.init?.(n,r.backend,r),this.callbackApi=Du(this.backend),this.backend&&this.callbackApi===void 0&&(this.backend.read||this.backend.create)&&this.logger.deprecate(`backend: set callbackApi to declare the calling convention (true: read(language, namespace, callback) and create(languages, namespace, key, fallbackValue, callback, options); false: both return a promise or a value); guessing it from the number of parameters is deprecated`)}queueLoad(e,t,n,r){let i={},a={},o={},s={};return e.forEach(e=>{let r=!0;t.forEach(t=>{let o=`${e}|${t}`;!n.reload&&this.store.hasResourceBundle(e,t)?this.state[o]=2:!n.reload&&this.state[o]<0||(this.state[o]===1?a[o]===void 0&&(a[o]=!0):(this.state[o]=1,r=!1,a[o]===void 0&&(a[o]=!0),i[o]===void 0&&(i[o]=!0),s[t]===void 0&&(s[t]=!0)))}),r||(o[e]=!0)}),(Object.keys(i).length||Object.keys(a).length)&&this.queue.push({pending:a,pendingCount:Object.keys(a).length,loaded:{},errors:[],callback:r}),{toLoad:Object.keys(i),pending:Object.keys(a),toLoadLanguages:Object.keys(o),toLoadNamespaces:Object.keys(s)}}loaded(e,t,n){let r=e.split(`|`),i=r[0],a=r[1];t&&this.emit(`failedLoading`,i,a,t),!t&&n&&this.store.addResourceBundle(i,a,n,void 0,void 0,{skipCopy:!0}),this.state[e]=t?-1:2,t&&n&&(this.state[e]=0);let o={};this.queue.forEach(n=>{Pu(n.loaded,[i],a),md(n,e),t&&n.errors.push(t),n.pendingCount===0&&!n.done&&(Object.keys(n.loaded).forEach(e=>{o[e]||(o[e]={});let t=n.loaded[e];t.length&&t.forEach(t=>{o[e][t]===void 0&&(o[e][t]=!0)})}),n.done=!0,n.errors.length?n.callback(n.errors):n.callback())}),this.emit(`loaded`,o),this.queue=this.queue.filter(e=>!e.done)}read(e,t,n,r=0,i=this.retryTimeout,a){if(!e.length)return a(null,{});if(this.readingCalls>=this.maxParallelReads){this.waitingReads.push({lng:e,ns:t,fcName:n,tried:r,wait:i,callback:a});return}this.readingCalls++;let o=(o,s)=>{if(this.readingCalls--,this.waitingReads.length>0){let e=this.waitingReads.shift();this.read(e.lng,e.ns,e.fcName,e.tried,e.wait,e.callback)}o&&s&&r<this.maxRetries?setTimeout(()=>{this.read(e,t,n,r+1,i*2,a)},i):a(o,s)},s=this.backend[n].bind(this.backend);if(this.callbackApi===!1||this.callbackApi===void 0&&s.length===2)try{let n=s(e,t);n&&typeof n.then==`function`?n.then(e=>o(null,e)).catch(o):o(null,n)}catch(e){o(e)}else return s(e,t,o)}prepareLoading(e,t,n={},r){if(!this.backend)return this.logger.warn(`No backend was added via i18next.use. Will not load resources.`),r&&r();Z(e)&&(e=this.languageUtils.toResolveHierarchy(e)),Z(t)&&(t=[t]);let i=this.queueLoad(e,t,n,r);if(!i.toLoad.length)return i.pending.length||r(),null;i.toLoad.forEach(e=>{this.loadOne(e)})}load(e,t,n){this.prepareLoading(e,t,{},n)}reload(e,t,n){this.prepareLoading(e,t,{reload:!0},n)}noticeDevFallback(e){e===`dev`&&this.devIsDefaultFallback&&this.logger.once(`dev`,`warn`,`language 'dev' is requested because fallbackLng is not set (its default is ['dev']); i18next v27 defaults to fallbackLng: false and loads and saves missing keys in the requested language instead. Set fallbackLng to your source language, or to 'dev' to keep this behavior`)}loadOne(e,t=``){let n=e.split(`|`),r=n[0],i=n[1];this.noticeDevFallback(r),this.read(r,i,`read`,void 0,void 0,(n,a)=>{n&&this.logger.warn(`${t}loading namespace ${i} for language ${r} failed`,n),!n&&a&&this.logger.log(`${t}loaded namespace ${i} for language ${r}`,a),this.loaded(e,n,a)})}saveMissing(e,t,n,r,i,a={},o=()=>{},s=this.newestCloneHasLoadedNamespace||this.services?.utils?.hasLoadedNamespace){if(s&&!s(t))this.logger.warn(`did not save key "${n}" as the namespace "${t}" was not yet loaded`,`This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!`);else if(n!=null&&n!==``){if(this.backend?.create){e?.forEach?.(e=>this.noticeDevFallback(e));let s={...a,isUpdate:i},c=this.backend.create.bind(this.backend);if(this.callbackApi===!1||this.callbackApi===void 0&&c.length<6)try{let i;i=this.callbackApi===!1||c.length===5?c(e,t,n,r,s):c(e,t,n,r),i&&typeof i.then==`function`?i.then(e=>o(null,e)).catch(o):o(null,i)}catch(e){o(e)}else c(e,t,n,r,o,s)}e&&e[0]&&this.store.addResource(e[0],t,n,r)}}},gd=()=>({debug:!1,initAsync:!0,ns:[`translation`],defaultNS:[`translation`],fallbackLng:[`dev`],fallbackNS:!1,supportedLngs:!1,nonExplicitSupportedLngs:!1,load:`all`,preload:!1,keySeparator:`.`,nsSeparator:`:`,pluralSeparator:`_`,contextSeparator:`_`,enableSelector:!1,partialBundledLanguages:!1,saveMissing:!1,updateMissing:!1,saveMissingTo:`fallback`,saveMissingPlurals:!0,missingKeyHandler:!1,missingInterpolationHandler:!1,postProcess:!1,postProcessPassResolved:!1,returnNull:!1,returnEmptyString:!0,returnObjects:!1,joinArrays:!1,returnedObjectHandler:!1,parseMissingKeyHandler:!1,appendNamespaceToMissingKey:!1,appendNamespaceToCIMode:!1,overloadTranslationOptionHandler:e=>{let t={};if(typeof e[1]==`object`&&(t=e[1]),Z(e[1])&&(t.defaultValue=e[1]),Z(e[2])&&(t.tDescription=e[2]),typeof e[2]==`object`||typeof e[3]==`object`){let n=e[3]||e[2];Object.keys(n).forEach(e=>{t[e]=n[e]})}return t},interpolation:{escapeValue:!0,prefix:`{{`,suffix:`}}`,formatSeparator:`,`,unescapePrefix:`-`,nestingPrefix:`$t(`,nestingSuffix:`)`,nestingOptionsSeparator:`,`,maxReplaces:1e3,skipOnVariables:!0},cacheInBuiltFormats:!0}),_d=e=>(Z(e.ns)&&(e.ns=[e.ns]),Z(e.fallbackLng)&&(e.fallbackLng=[e.fallbackLng]),Z(e.fallbackNS)&&(e.fallbackNS=[e.fallbackNS]),e.supportedLngs&&!e.supportedLngs.includes(`cimode`)&&(e.supportedLngs=e.supportedLngs.concat([`cimode`])),e),vd=()=>{},yd,bd=e=>{Object.getOwnPropertyNames(Object.getPrototypeOf(e)).forEach(t=>{typeof e[t]==`function`&&(e[t]=e[t].bind(e))})},xd=class e extends Yu{constructor(e={},t){if(super(),this.options=_d(e),this.services={ownPostProcessors:new Set},this.logger=Ju,this.modules={external:[]},bd(this),t&&!this.isInitialized&&!e.isClone){if(!this.options.initAsync)return this.init(e,t),this;setTimeout(()=>{this.init(e,t)},0)}}init(e={},t){this.isInitializing=!0,typeof e==`function`&&(t=e,e={}),e.defaultNS==null&&e.ns&&(Z(e.ns)?e.defaultNS=e.ns:e.ns.includes(`translation`)||(e.defaultNS=e.ns[0]));let n=e.fallbackLng===void 0&&this.options.fallbackLng===void 0,r=gd();this.options={...r,...this.options,..._d(e)},this.options.interpolation={...r.interpolation,...this.options.interpolation},e.keySeparator!==void 0&&(this.options.userDefinedKeySeparator=e.keySeparator),e.nsSeparator!==void 0&&(this.options.userDefinedNsSeparator=e.nsSeparator),typeof this.options.overloadTranslationOptionHandler!=`function`&&(this.options.overloadTranslationOptionHandler=r.overloadTranslationOptionHandler);let i=e=>e?typeof e==`function`?new e:e:null;if(!this.options.isClone){yd&&yd!==this&&yd.modules.logger!==this.modules.logger&&Ju.deprecate(`init: this init() replaces the logger another i18next instance set with use(), as the logger is shared in v26; from v27 each instance keeps its own logger`),yd=this.modules.logger?this:void 0,this.modules.logger?Ju.init(i(this.modules.logger),this.options):Ju.init(null,this.options),this.pendingWarnings?.forEach(e=>this.logger.warn(e)),this.pendingWarnings=void 0;let e;e=this.modules.formatter?this.modules.formatter:pd;let t=new id(this.options);this.store=new Zu(this.options.resources,this.options);let r=this.services;r.logger=Ju,r.resourceStore=this.store,r.languageUtils=t,r.pluralResolver=new sd(t,{prepend:this.options.pluralSeparator}),e&&(r.formatter=i(e),r.formatter.init&&r.formatter.init(r,this.options),this.options.interpolation.format=r.formatter.format.bind(r.formatter)),r.interpolator=new ld(this.options),r.utils={hasLoadedNamespace:this.hasLoadedNamespace.bind(this),reloadResources:this.reloadResources.bind(this)},r.backendConnector=new hd(i(this.modules.backend),r.resourceStore,r,this.options),r.backendConnector.devIsDefaultFallback=n,r.backendConnector.on(`*`,(e,...t)=>{this.emit(e,...t)}),this.modules.languageDetector&&(r.languageDetector=i(this.modules.languageDetector),r.languageDetector.init&&r.languageDetector.init(r,this.options.detection,this.options),r.languageDetector.async&&Du(r.languageDetector)===void 0&&this.logger.deprecate(`languageDetector: set callbackApi to declare how the async detect() answers (true: detect(callback); false: detect() returns a promise); guessing it from the number of parameters is deprecated`)),this.modules.i18nFormat&&(r.i18nFormat=i(this.modules.i18nFormat),r.i18nFormat.init&&r.i18nFormat.init(this)),this.translator=new rd(this.services,this.options),this.translator.on(`*`,(e,...t)=>{this.emit(e,...t)}),this.modules.external.forEach(e=>{e.init&&e.init(this)})}if(this.format=this.options.interpolation.format,t||=vd,this.options.fallbackLng&&!this.services.languageDetector&&!this.options.lng){let e=this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);e.length>0&&e[0]!==`dev`&&(this.options.lng=e[0])}!this.services.languageDetector&&!this.options.lng&&this.logger.warn(`init: no languageDetector is used and no lng is defined`),[`getResource`,`hasResourceBundle`,`getResourceBundle`,`getDataByLanguage`].forEach(e=>{this[e]=(...t)=>this.store[e](...t)}),[`addResource`,`addResources`,`addResourceBundle`,`removeResourceBundle`].forEach(e=>{this[e]=(...t)=>(this.store[e](...t),this)});let a=wu(),o=()=>{let e=(e,n)=>{this.isInitializing=!1,this.isInitialized&&!this.initializedStoreOnce&&this.logger.warn(`init: i18next is already initialized. You should call init just once!`),this.isInitialized=!0,this.options.isClone||this.logger.log(`initialized`,this.options),this.emit(`initialized`,this.options),a.resolve(n),t(e,n)};if((this.languages||this.isLanguageChangingTo)&&!this.isInitialized)return e(null,this.t.bind(this));this.changeLanguage(this.options.lng,e)};return this.options.resources||!this.options.initAsync?o():setTimeout(o,0),a}loadResources(e,t=vd){let n=t,r=Z(e)?e:this.language;if(typeof e==`function`&&(n=e),!this.options.resources||this.options.partialBundledLanguages){if(r?.toLowerCase()===`cimode`&&(!this.options.preload||this.options.preload.length===0))return n();let e=[],t=t=>{t&&t!==`cimode`&&this.services.languageUtils.toResolveHierarchy(t).forEach(t=>{t!==`cimode`&&(e.includes(t)||e.push(t))})};r?t(r):this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach(e=>t(e)),this.options.preload?.forEach?.(e=>t(e)),this.services.backendConnector.load(e,this.options.ns,e=>{!e&&!this.resolvedLanguage&&this.language&&this.setResolvedLanguage(this.language),n(e)})}else n(null)}reloadResources(e,t,n){let r=wu();if(typeof e==`function`&&(n=e,e=void 0),typeof t==`function`&&(n=t,t=void 0),!e){let t=Object.keys(this.services.backendConnector.state).map(e=>e.split(`|`)[0]);e=[...new Set([...this.languages||[],...t])].filter(e=>e!==`cimode`)}return t||=this.options.ns,n||=vd,this.services.backendConnector.reload(e,t,e=>{r.resolve(),n(e)}),r}use(e){if(!e)throw Error(`You are passing an undefined module! Please check the object you are passing to i18next.use()`);if(!e.type)throw Error(`You are passing a wrong module! Please check the object you are passing to i18next.use()`);let t=t=>{if(this.modules[t]&&this.modules[t]!==e){let e=`use: this ${t} replaces the ${t} passed to an earlier use() call; only one ${t} is used per instance`;this.isInitializing||this.isInitialized?this.logger.warn(e):(this.pendingWarnings=this.pendingWarnings||[]).push(e)}this.modules[t]=e};return e.type===`backend`&&t(`backend`),(e.type===`logger`||e.log&&e.warn&&e.error)&&(this.modules.logger=e),e.type===`languageDetector`&&t(`languageDetector`),e.type===`i18nFormat`&&t(`i18nFormat`),e.type===`postProcessor`&&(Qu.addPostProcessor(e),this.services.ownPostProcessors?.add(e.name)),e.type===`formatter`&&t(`formatter`),e.type===`3rdParty`&&this.modules.external.push(e),this}hydrate(e,t){return this.options.isClone?this:this.services.resourceStore?(e&&!this.initializedStoreOnce&&(this.services.resourceStore.data=e,Object.values(e).forEach(e=>{Object.keys(e).forEach(e=>{this.options.ns.includes(e)||this.options.ns.push(e)})}),this.initializedStoreOnce=!0,this.isInitialized=!0),t&&!this.initializedLanguageOnce&&(this.changeLanguage(t),this.initializedLanguageOnce=!0),this):(this.logger.warn(`hydrate: call init() first, the instance has no resource store yet`),this)}setResolvedLanguage(e){if(e&&this.languages&&![`cimode`,`dev`].includes(e)){for(let e=0;e<this.languages.length;e++){let t=this.languages[e];if(![`cimode`,`dev`].includes(t)&&this.store.hasLanguageSomeTranslations(t)){this.resolvedLanguage=t;break}}!this.resolvedLanguage&&!this.languages.includes(e)&&this.store.hasLanguageSomeTranslations(e)&&(this.resolvedLanguage=e,this.languages.unshift(e))}}changeLanguage(e,t){this.isLanguageChangingTo=e;let n=wu();this.emit(`languageChanging`,e);let r=e=>{this.language=e,this.languages=this.services.languageUtils.toResolveHierarchy(e),this.resolvedLanguage=void 0,this.setResolvedLanguage(e)},i=(i,a)=>{a?this.isLanguageChangingTo===e&&(r(a),this.translator.changeLanguage(a),this.isLanguageChangingTo=void 0,this.emit(`languageChanged`,a),this.logger.log(`languageChanged`,a)):this.isLanguageChangingTo=void 0,n.resolve((...e)=>this.t(...e)),t&&t(i,(...e)=>this.t(...e))},a=t=>{!e&&!t&&this.services.languageDetector&&(t=[]);let n=Z(t)?t:t&&t[0],a=this.store.hasLanguageSomeTranslations(n)?n:this.services.languageUtils.getBestMatchFromCodes(Z(t)?[t]:t);a&&this.logger.debug&&!Eu(a)&&![].concat(this.options.supportedLngs||[],this.services.languageUtils.getFallbackCodes(this.options.fallbackLng,a),this.options.preload||[]).includes(a)&&!Object.prototype.hasOwnProperty.call(this.store.data,a)&&this.logger.once(`lng:${a}`,`deprecate`,`changeLanguage: the language code '${a.slice(0,64)}' comes from lng, changeLanguage() or the language detector and is not configured; from v27 such a code is refused unless it has only letters, digits, '-', '_', '@' and '.' (no '..'), at most 128 characters. Set supportedLngs, or check the code before passing it on`),a&&(this.language||r(a),this.translator.language||this.translator.changeLanguage(a),this.services.languageDetector?.cacheUserLanguage?.(a)),this.loadResources(a,e=>{i(e,a)})};if(!e&&this.services.languageDetector&&!this.services.languageDetector.async)a(this.services.languageDetector.detect());else if(!e&&this.services.languageDetector&&this.services.languageDetector.async){let e=Du(this.services.languageDetector);e===!1||e===void 0&&this.services.languageDetector.detect.length===0?this.services.languageDetector.detect().then(a):this.services.languageDetector.detect(a)}else a(e);return n}getFixedT(e,t,n,r){let i=r?.scopeNs,a=(e,t,...r)=>{let o;o=typeof t==`object`?{...t}:this.options.overloadTranslationOptionHandler([e,t].concat(r)),o.lng=o.lng||a.lng,o.lngs=o.lngs||a.lngs;let s=o.ns!==void 0&&o.ns!==null;o.ns=o.ns||a.ns,o.keyPrefix!==``&&(o.keyPrefix=o.keyPrefix||n||a.keyPrefix);let c={...this.options,...o};Array.isArray(i)&&!s&&(c.ns=i),typeof o.keyPrefix==`function`&&(o.keyPrefix=td(o.keyPrefix,c));let l=this.options.keySeparator||`.`,u;return o.keyPrefix&&Array.isArray(e)?u=e.map(e=>(typeof e==`function`&&(e=td(e,c)),`${o.keyPrefix}${l}${e}`)):(typeof e==`function`&&(e=td(e,c)),u=o.keyPrefix?`${o.keyPrefix}${l}${e}`:e),this.t(u,o)};return Z(e)?a.lng=e:a.lngs=e,a.ns=t,a.keyPrefix=n,a}t(...e){return this.translator?this.translator.translate(...e):(this.logger.warn(`t: called before init(); returning an empty string`),``)}exists(...e){return this.translator?.exists(...e)}setDefaultNamespace(e){this.options.defaultNS=e}hasLoadedNamespace(e,t={}){if(!this.isInitialized)return this.logger.warn(`hasLoadedNamespace: i18next was not initialized`,this.languages),!1;if(!this.languages||!this.languages.length)return this.logger.warn(`hasLoadedNamespace: i18n.languages were undefined or empty`,this.languages),!1;let n=t.lng||this.resolvedLanguage||this.languages[0],r=this.options?this.options.fallbackLng:!1,i=this.languages[this.languages.length-1];if(n.toLowerCase()===`cimode`)return!0;let a=(e,t)=>{let n=this.services.backendConnector.state[`${e}|${t}`];return n===-1||n===0||n===2};if(t.precheck){let e=t.precheck(this,a);if(e!==void 0)return e}if(this.hasResourceBundle(n,e)||!this.services.backendConnector.backend||this.options.resources&&!this.options.partialBundledLanguages)return!0;let{languageUtils:o}=this.services,s=t.lng?o.isSupportedCode(n)&&o.toResolveHierarchy(n,!1)[0]:n;return!(s&&!a(s,e)||r&&!a(i,e))}loadNamespaces(e,t){let n=wu();return this.options.ns?(Z(e)&&(e=[e]),e.forEach(e=>{this.options.ns.includes(e)||this.options.ns.push(e)}),this.loadResources(e=>{n.resolve(),t&&t(e)}),n):(t&&t(),Promise.resolve())}loadLanguages(e,t){let n=wu();Z(e)&&(e=[e]);let r=this.options.preload||[],i=e.filter(e=>!r.includes(e)&&this.services.languageUtils.isSupportedCode(e));return i.length?(this.options.preload=r.concat(i),this.loadResources(e=>{n.resolve(),t&&t(e)}),n):(t&&t(),Promise.resolve())}dir(e){if(e||=this.resolvedLanguage||(this.languages?.length>0?this.languages[0]:this.language),!e)return`ltr`;try{let t=new Intl.Locale(e);if(t&&t.getTextInfo){let e=t.getTextInfo();if(e&&e.direction)return e.direction}}catch{}let t=`ar.shu.sqr.ssh.xaa.yhd.yud.aao.abh.abv.acm.acq.acw.acx.acy.adf.ads.aeb.aec.afb.ajp.apc.apd.arb.arq.ars.ary.arz.auz.avl.ayh.ayl.ayn.ayp.bbz.pga.he.iw.ps.pbt.pbu.pst.prp.prd.ug.ur.ydd.yds.yih.ji.yi.hbo.men.xmn.fa.jpr.peo.pes.prs.dv.sam.ckb`.split(`.`),n=this.services?.languageUtils||new id(gd());return e.toLowerCase().indexOf(`-latn`)>1?`ltr`:t.includes(n.getLanguagePartFromCode(e))||e.toLowerCase().indexOf(`-arab`)>1?`rtl`:`ltr`}static createInstance(t={},n){let r=new e(t,n);return r.createInstance=e.createInstance,r}cloneInstance(t={},n=vd){let r=t.forkResourceStore;r&&(t={...t},delete t.forkResourceStore);let i={...this.options,preload:!1,...t,isClone:!0},a=new e(i);if((t.debug!==void 0||t.prefix!==void 0)&&(a.logger=a.logger.clone(t)),[`store`,`services`,`language`].forEach(e=>{a[e]=this[e]}),a.services={...this.services},a.services.utils={...a.services.utils,hasLoadedNamespace:a.hasLoadedNamespace.bind(a),reloadResources:a.reloadResources.bind(a)},r){let e=t=>{let n=Array.isArray(t)?[...t]:{...t};return Object.keys(n).forEach(t=>{n[t]&&typeof n[t]==`object`&&(n[t]=e(n[t]))}),n};a.store=new Zu(e(this.store.data),i),a.services.resourceStore=a.store}if(t.interpolation){let e={...gd().interpolation,...this.options.interpolation,...t.interpolation},n={...i,interpolation:e};a.services.interpolator=new ld(n)}return a.translator=new rd(a.services,i),a.translator.on(`*`,(e,...t)=>{a.emit(e,...t)}),a.init(i,n),a.translator.options=i,a.translator.backendConnector.newestCloneHasLoadedNamespace=a.hasLoadedNamespace.bind(a),a}toJSON(){return{options:this.options,store:this.store,language:this.language,languages:this.languages,resolvedLanguage:this.resolvedLanguage}}}.createInstance();xd.createInstance,xd.dir,xd.init,xd.loadResources,xd.reloadResources,xd.use,xd.changeLanguage,xd.getFixedT,xd.t,xd.exists,xd.setDefaultNamespace,xd.hasLoadedNamespace,xd.loadNamespaces,xd.loadLanguages,xd.init({lng:(()=>{try{let{language:e}=kintone.getLoginUser();if(e)return e}catch(e){console.error(`Error getting user language:`,e)}return kintone.api.url(`/k/v1/records.json`).includes(`kintone.com`)?`en`:`ja`})(),fallbackLng:`en`,initImmediate:!1,interpolation:{escapeValue:!1},resources:{en:{translation:{config:{heading:`PollBuddy Settings`,subtitle:`Create quick polls in record comments. These settings apply to this app; the repository app and server are shared by every app in this domain.`,settingsSection:`Settings`,initialSetupSection:`Initial setup`,dangerZoneSection:`Dangerous operations`,allowNonAdminPollLabel:`Who can create polls`,allowNonAdminPollItem:`Allow users without app management permission to create polls`,allowNonAdminPollHelp:`When off, only this app's administrators see the Poll button. Anyone who can view a record can always vote on its polls.`,step1Title:`Create the repository app`,step1Help:`One repository app holds the polls for every app in this domain. Create it once. If it already exists, paste its App ID below instead of creating another. Only administrators and its creator can open it, since it holds polls from every app, including ones a user can't open.`,createRepositoryButton:`Create repository app`,repositoryAppIdLabel:`Repository App ID`,createRepositoryConfirmTitle:`Create the repository app?`,createRepositoryConfirm:`This creates a new app in this domain to hold poll data. Only do this once per domain. If one already exists, paste its App ID instead.`,confirmationRequired:`Confirmation required`,createRepositoryTitle:`Repository app created`,createRepositorySuccess:`Created App {{appId}}.`,createRepositoryError:`Couldn't create the repository app: {{message}}`,successLabel:`Success`,repositoryAppName:`PollBuddy Repository`,repositoryAppDescription:`Poll data for PollBuddy (意思決定くん). Read and written by the PollBuddy server; don't edit records by hand.`,step2Title:`Give the repository app an API token`,step2Help:`The server uses this token to save polls and count votes, so it needs View records, Add records, and Edit records. Keep it private: it can read every poll in this domain.`,repositoryTokenInstructions:`Next, open its API token settings and generate a token with View records, Add records, and Edit records. Click Save, then Update App. You'll paste the token in step 3.`,openRepositoryTokenSettings:`Open the repository app's API token settings`,completeStep1First:`Complete step 1 first.`,step3Title:`Provision the server`,step3Help:`Sends the repository app's API token from step 2 to this domain's server, which stores it and uses it to read and write polls. It isn't saved in Kintone, so provisioning again means pasting it again or generating a new one. Every app in this domain shares one server, and no other domain uses it.`,provisionServer:`Provision server`,reprovisionServer:`Re-provision server`,repositoryToken:`Repository app API token`,repositoryTokenHelp:`Paste the repository app's API token from step 2. It's sent to the server and stored there, not in Kintone.`,serverProvisioning:`Setting up this domain's server. This takes a few minutes. You can leave this page; setup keeps going and picks up here when you come back.`,serverReady:`This domain's server is ready:`,serverNotProvisioned:`This domain isn't provisioned yet. Click Provision server above and paste the token from step 2.`,serverProvisioned:`Server provisioned for this domain.`,provisionError:`Couldn't provision the server: {{message}}`,step4Title:`Give this app an API token`,step4Help:`The server needs View records on this app to check each poll's announcement comment and to post the results when a poll ends. The token is kept in this plugin's hidden settings, which only this app's administrators can see, and on the server.`,appTokenInstructions:`Open this app's API token settings and generate a token with View records. Click Save, then Update App. Paste the token below and click Save at the bottom of this page.`,openThisAppTokenSettings:`Open this app's API token settings`,appTokenLabel:`API token for this app`,completeStep3First:`Complete step 3 first.`,deleteServer:`Delete server`,deleteServerHelp:`Deletes this domain's server from AWS, along with the tokens it stored. Polls stop working in every app in this domain, and polls that haven't ended won't post their results. The repository app and its polls stay in Kintone, so provisioning again brings the server back, at a new address.`,deleteServerConfirm:`This deletes this domain's server. Polls stop working in every app in this domain. Paste the repository app's API token to confirm.`,noServerToDelete:`This domain has no server.`,serverDeleted:`Server deleted. It takes a minute or two to finish.`,deleteServerError:`Couldn't delete the server: {{message}}`,saveButton:`Save`,cancelButton:`Cancel`,ok:`OK`,close:`Close`,help:`Help`,errorLabel:`Error`,saveSuccess:`The plug-in settings have been saved. Please update the app!`,saveError:`Couldn't save the settings: {{message}}`,repositoryAppIdRequired:`Repository App ID is required.`,allowNamedVotesLabel:`Named polls`,allowNamedVotesItem:`Let poll creators show who voted for what`,allowNamedVotesHelp:`The creator chooses for each poll. Anonymous polls say so at the top of their announcement. On named polls, everyone who can see the record can see who chose what, including in the results comment.`,allowVoteChangeLabel:`Changing votes`,allowVoteChangeItem:`Let poll creators allow voters to change their vote`,allowVoteChangeHelp:`The creator chooses for each poll. Voters can change their vote until the poll closes. To move a vote, the server remembers each person's choice, even on anonymous polls. Anonymous polls still never show it, but administrators could see it in the repository app.`,allowAddOptionsLabel:`Adding options`,allowAddOptionsItem:`Let poll creators allow participants to add options`,allowAddOptionsHelp:`The creator chooses for each poll. Participants can add options until the poll closes, up to 10 in all. No one is notified when an option is added.`,allowRemindersLabel:`Reminders`,allowRemindersItem:`Let poll creators schedule a reminder`,allowRemindersHelp:`The creator picks 1 day, 6 hours, or 1 hour before the deadline. The reminder mentions everyone in the poll, groups and departments included, whether or not they've voted.`},form:{titleLabel:`Title`,titlePlaceholder:`Enter your question`,optionsLabel:`Options`,optionPlaceholder:`Option {{number}}`,addOption:`+ Add option`,deadlineLabel:`Deadline`,mentionsLabel:`Participants`,mentionsPlaceholder:`Search by name or code`,namedVotesItem:`Show who voted for what (not anonymous)`,voteChangeItem:`Let voters change their vote`,addOptionsItem:`Let participants add options`,reminderLabel:`Reminder`,reminderNone:`No reminder`,reminder1d:`1 day before the deadline`,reminder6h:`6 hours before the deadline`,reminder1h:`1 hour before the deadline`,reminderHelp:`Mentions everyone in the poll, whether or not they've voted. Skipped if the deadline is sooner.`},questionnaire:{badge:`Poll`,votesCount_one:`{{count}} vote ({{percent}}%)`,votesCount_other:`{{count}} votes ({{percent}}%)`,voteButton:`Vote`,votingButton:`Submitting...`,votingClosedError:`This poll has closed`,voteSubmitError:`Failed to submit your vote. Please try again`,endedLine:`The poll "{{title}}" has ended. (#{{id}})`,anonymousBadge:`Anonymous`,changeVote:`Change vote`,addOptionPlaceholder:`Suggest an option`,addOptionButton:`Add`,addOptionError:`Couldn't add the option. Please try again.`},questionnaireButton:{mentionButtonLabel:`Poll`,mentionButtonTitle:`Create a poll`,dialogTitle:`Create a poll`,createButton:`Create`,cancelButton:`Cancel`,commentBody:`A poll has started: {{title}}
Deadline: {{deadline}}`,dateLocale:`en-US`,anonymousNote:`This poll is anonymous.`},validation:{titleRequired:`Please enter a title`,optionsMinimum:`Please enter at least two options`,deadlineRequired:`Please enter a deadline`,deadlineInPast:`The deadline must be in the future`,tooManyMentions:`You can mention at most 10 users, groups, or departments.`},common:{remove:`Remove`},errors:{notConfigured:`PollBuddy isn't set up for this app yet. Ask an app administrator to finish Initial setup in the plugin settings.`,unauthorized:`PollBuddy can't use this app's API token. Ask an app administrator to check step 4 of Initial setup in the plugin settings.`,generic:`Something went wrong. Please try again.`,createFailed:`The poll's comment was posted, but the poll couldn't be saved. {{message}}`}}},ja:{translation:{config:{heading:`意思決定くん設定`,subtitle:`レコードのコメント欄でかんたんにアンケートがとれます。この設定はこのアプリ用です。リポジトリアプリとサーバーは、このドメインのすべてのアプリで共有されます。`,settingsSection:`設定`,initialSetupSection:`初期設定`,dangerZoneSection:`危険な操作`,allowNonAdminPollLabel:`アンケートを作成できるユーザー`,allowNonAdminPollItem:`アプリの管理権限を持たないユーザーにもアンケート作成を許可する`,allowNonAdminPollHelp:`オフの場合、「アンケート」ボタンはこのアプリの管理者にだけ表示されます。投票は、レコードを閲覧できるユーザーなら誰でもできます。`,step1Title:`リポジトリアプリを作成する`,step1Help:`1つのリポジトリアプリに、このドメインのすべてのアプリのアンケートを保存します。作成は1回だけです。すでにある場合は、新しく作らずに下の欄へApp IDを入力してください。すべてのアプリ(ユーザーが閲覧できないアプリも含む)のアンケートを保存するため、開けるのは管理者と作成者だけです。`,createRepositoryButton:`リポジトリアプリを作成`,repositoryAppIdLabel:`リポジトリアプリのApp ID`,createRepositoryConfirmTitle:`リポジトリアプリを作成しますか？`,createRepositoryConfirm:`アンケートデータを保存する新しいアプリをこのドメインに作成します。作成はドメインごとに1回だけです。すでにある場合は、そのApp IDを入力してください。`,confirmationRequired:`確認`,createRepositoryTitle:`リポジトリアプリを作成しました`,createRepositorySuccess:`App {{appId}} を作成しました。`,createRepositoryError:`リポジトリアプリを作成できませんでした: {{message}}`,successLabel:`完了`,repositoryAppName:`意思決定くん リポジトリ`,repositoryAppDescription:`意思決定くんのアンケートデータです。意思決定くんのサーバーが読み書きします。レコードを手動で編集しないでください。`,step2Title:`リポジトリアプリのAPIトークンを発行する`,step2Help:`サーバーはこのトークンでアンケートを保存し、票を集計します。そのため「レコード閲覧」「レコード追加」「レコード編集」が必要です。このドメインのすべてのアンケートを読めるトークンなので、取り扱いに注意してください。`,repositoryTokenInstructions:`次に、APIトークンの設定を開き、「レコード閲覧」「レコード追加」「レコード編集」を付けたトークンを生成してください。保存したあと、アプリを更新してください。トークンは手順3で貼り付けます。`,openRepositoryTokenSettings:`リポジトリアプリのAPIトークン設定を開く`,completeStep1First:`先に手順1を完了してください。`,step3Title:`サーバーを用意する`,step3Help:`手順2のAPIトークンをこのドメインのサーバーに送ります。サーバーはトークンを保存し、アンケートの読み書きに使います。トークンはkintoneには保存されないため、やり直すときは再度貼り付けるか、新しいトークンを生成してください。このドメインのすべてのアプリが1つのサーバーを共有し、ほかのドメインからは使われません。`,provisionServer:`サーバーを用意する`,reprovisionServer:`サーバーを再設定する`,repositoryToken:`リポジトリアプリのAPIトークン`,repositoryTokenHelp:`手順2のリポジトリアプリのAPIトークンを貼り付けてください。トークンはkintoneではなくサーバーに保存されます。`,serverProvisioning:`このドメインのサーバーを準備しています。数分かかります。このページを離れても準備は続き、戻ってきたときに続きから表示されます。`,serverReady:`このドメインのサーバーは準備できています:`,serverNotProvisioned:`このドメインのサーバーはまだありません。上の「サーバーを用意する」をクリックし、手順2のトークンを貼り付けてください。`,serverProvisioned:`このドメインのサーバーを用意しました。`,provisionError:`サーバーを用意できませんでした: {{message}}`,step4Title:`このアプリのAPIトークンを発行する`,step4Help:`サーバーは、アンケート開始のコメントを確認するときと、締め切り時に結果を投稿するときに、このアプリの「レコード閲覧」を使います。トークンは、このアプリの管理者だけが見られるプラグインの非公開設定と、サーバーに保存されます。`,appTokenInstructions:`このアプリのAPIトークン設定を開き、「レコード閲覧」を付けたトークンを生成してください。保存したあと、アプリを更新してください。トークンを下に貼り付け、このページ下部の「保存」をクリックしてください。`,openThisAppTokenSettings:`このアプリのAPIトークン設定を開く`,appTokenLabel:`このアプリのAPIトークン`,completeStep3First:`先に手順3を完了してください。`,deleteServer:`サーバーを削除`,deleteServerHelp:`このドメインのサーバーを、保存されたトークンとあわせてAWSから削除します。このドメインのすべてのアプリでアンケートが使えなくなり、締め切り前のアンケートは結果が投稿されません。リポジトリアプリとアンケートはkintoneに残るので、再度用意すれば別のアドレスでサーバーが戻ります。`,deleteServerConfirm:`このドメインのサーバーを削除します。このドメインのすべてのアプリでアンケートが使えなくなります。確認のため、リポジトリアプリのAPIトークンを貼り付けてください。`,noServerToDelete:`このドメインにサーバーはありません。`,serverDeleted:`サーバーを削除しました。完了まで1〜2分かかります。`,deleteServerError:`サーバーを削除できませんでした: {{message}}`,saveButton:`保存`,cancelButton:`キャンセル`,ok:`OK`,close:`閉じる`,help:`ヘルプ`,errorLabel:`エラー`,saveSuccess:`プラグインの設定を保存しました。アプリを更新してください！`,saveError:`設定を保存できませんでした: {{message}}`,repositoryAppIdRequired:`リポジトリアプリのApp IDは必須です。`,allowNamedVotesLabel:`記名式アンケート`,allowNamedVotesItem:`誰がどれに投票したかを表示するアンケートの作成を許可する`,allowNamedVotesHelp:`アンケートごとに作成者が選びます。匿名のアンケートは、開始コメントの先頭にその旨が表示されます。記名式のアンケートでは、レコードを閲覧できる人なら誰でも、誰がどれを選んだかを見られます(結果のコメントにも表示されます)。`,allowVoteChangeLabel:`投票の変更`,allowVoteChangeItem:`参加者による投票の変更を許可できるようにする`,allowVoteChangeHelp:`アンケートごとに作成者が選びます。参加者は締め切りまで投票を変更できます。投票を変更できるよう、サーバーは匿名のアンケートでも各ユーザーの選択を記録します。匿名のアンケートで表示されることはありませんが、管理者はリポジトリアプリで確認できます。`,allowAddOptionsLabel:`選択肢の追加`,allowAddOptionsItem:`参加者による選択肢の追加を許可できるようにする`,allowAddOptionsHelp:`アンケートごとに作成者が選びます。参加者は締め切りまで、合計10個まで選択肢を追加できます。選択肢が追加されても通知はされません。`,allowRemindersLabel:`リマインド`,allowRemindersItem:`リマインドの設定を許可する`,allowRemindersHelp:`作成者が締め切りの1日前・6時間前・1時間前から選びます。リマインドは、投票済みかどうかにかかわらず、グループや組織を含むすべての参加者にメンションします。`},form:{titleLabel:`タイトル`,titlePlaceholder:`質問を入力してください`,optionsLabel:`選択肢`,optionPlaceholder:`選択肢 {{number}}`,addOption:`＋ 選択肢を追加`,deadlineLabel:`締め切り`,mentionsLabel:`参加者`,mentionsPlaceholder:`名前またはコードで検索`,namedVotesItem:`誰がどれに投票したかを表示する(記名式)`,voteChangeItem:`参加者による投票の変更を許可する`,addOptionsItem:`参加者による選択肢の追加を許可する`,reminderLabel:`リマインド`,reminderNone:`リマインドしない`,reminder1d:`締め切りの1日前`,reminder6h:`締め切りの6時間前`,reminder1h:`締め切りの1時間前`,reminderHelp:`投票済みかどうかにかかわらず、すべての参加者にメンションします。締め切りがそれより早い場合は送られません。`},questionnaire:{badge:`アンケート`,votesCount:`{{count}}票 ({{percent}}%)`,voteButton:`投票する`,votingButton:`送信中...`,votingClosedError:`このアンケートは終了しました`,voteSubmitError:`投票に失敗しました。もう一度お試しください`,endedLine:`アンケート「{{title}}」が終了しました。(#{{id}})`,anonymousBadge:`匿名`,changeVote:`投票を変更する`,addOptionPlaceholder:`選択肢を提案`,addOptionButton:`追加`,addOptionError:`選択肢を追加できませんでした。もう一度お試しください`},questionnaireButton:{mentionButtonLabel:`アンケート`,mentionButtonTitle:`アンケートを作成する`,dialogTitle:`アンケートを作成`,createButton:`作成`,cancelButton:`キャンセル`,commentBody:`アンケートが開始されました: {{title}}
回答期限: {{deadline}}`,dateLocale:`ja-JP`,anonymousNote:`このアンケートは匿名です。`},validation:{titleRequired:`タイトルを入力してください`,optionsMinimum:`選択肢を2つ以上入力してください`,deadlineRequired:`締め切りを入力してください`,deadlineInPast:`締め切りは未来の日時を指定してください`,tooManyMentions:`メンションできるのはユーザー・グループ・組織あわせて10件までです。`},common:{remove:`削除`},errors:{notConfigured:`このアプリでは意思決定くんの設定がまだ完了していません。アプリの管理者に、プラグイン設定の「初期設定」を完了するよう依頼してください。`,unauthorized:`意思決定くんがこのアプリのAPIトークンを使えません。アプリの管理者に、プラグイン設定の「初期設定」手順4を確認するよう依頼してください。`,generic:`エラーが発生しました。もう一度お試しください。`,createFailed:`アンケートのコメントは投稿されましたが、アンケートを保存できませんでした。{{message}}`}}},es:{translation:{config:{heading:`Configuración de PollBuddy`,subtitle:`Crea encuestas rápidas en los comentarios de los registros. Esta configuración es de esta aplicación; la aplicación repositorio y el servidor los comparten todas las aplicaciones de este dominio.`,settingsSection:`Configuración`,initialSetupSection:`Configuración inicial`,dangerZoneSection:`Operaciones peligrosas`,allowNonAdminPollLabel:`Quién puede crear encuestas`,allowNonAdminPollItem:`Permitir crear encuestas a usuarios sin permiso de administración de la aplicación`,allowNonAdminPollHelp:`Si está desactivado, solo los administradores de esta aplicación ven el botón Encuesta. Cualquiera que pueda ver un registro puede votar en sus encuestas.`,step1Title:`Crea la aplicación repositorio`,step1Help:`Una sola aplicación repositorio guarda las encuestas de todas las aplicaciones de este dominio. Créala una vez. Si ya existe, escribe su App ID abajo en lugar de crear otra. Solo los administradores y quien la creó pueden abrirla, porque guarda encuestas de todas las aplicaciones, incluidas las que un usuario no puede abrir.`,createRepositoryButton:`Crear aplicación repositorio`,repositoryAppIdLabel:`App ID de la aplicación repositorio`,createRepositoryConfirmTitle:`¿Crear la aplicación repositorio?`,createRepositoryConfirm:`Se creará una nueva aplicación en este dominio para guardar los datos de las encuestas. Hazlo solo una vez por dominio. Si ya existe, escribe su App ID.`,confirmationRequired:`Confirmación necesaria`,createRepositoryTitle:`Aplicación repositorio creada`,createRepositorySuccess:`Se creó la App {{appId}}.`,createRepositoryError:`No se pudo crear la aplicación repositorio: {{message}}`,successLabel:`Listo`,repositoryAppName:`Repositorio de PollBuddy`,repositoryAppDescription:`Datos de encuestas de PollBuddy (意思決定くん). Los lee y escribe el servidor de PollBuddy; no edites los registros a mano.`,step2Title:`Genera un token de API para la aplicación repositorio`,step2Help:`El servidor usa este token para guardar encuestas y contar votos, así que necesita Ver registros, Añadir registros y Editar registros. Mantenlo en privado: puede leer todas las encuestas de este dominio.`,repositoryTokenInstructions:`Ahora abre su configuración de tokens de API y genera un token con Ver registros, Añadir registros y Editar registros. Haz clic en Guardar y luego en Actualizar aplicación. Pegarás el token en el paso 3.`,openRepositoryTokenSettings:`Abrir la configuración de tokens de API de la aplicación repositorio`,completeStep1First:`Completa primero el paso 1.`,step3Title:`Prepara el servidor`,step3Help:`Envía el token de API del paso 2 al servidor de este dominio, que lo guarda y lo usa para leer y escribir encuestas. No se guarda en Kintone, así que para repetirlo tendrás que pegarlo de nuevo o generar uno nuevo. Todas las aplicaciones de este dominio comparten un servidor, y ningún otro dominio lo usa.`,provisionServer:`Preparar servidor`,reprovisionServer:`Volver a preparar el servidor`,repositoryToken:`Token de API de la aplicación repositorio`,repositoryTokenHelp:`Pega el token de API de la aplicación repositorio del paso 2. Se envía al servidor y se guarda allí, no en Kintone.`,serverProvisioning:`Preparando el servidor de este dominio. Tarda unos minutos. Puedes salir de esta página; la preparación continúa y se retoma aquí cuando vuelvas.`,serverReady:`El servidor de este dominio está listo:`,serverNotProvisioned:`Este dominio aún no tiene servidor. Haz clic en Preparar servidor y pega el token del paso 2.`,serverProvisioned:`Servidor preparado para este dominio.`,provisionError:`No se pudo preparar el servidor: {{message}}`,step4Title:`Genera un token de API para esta aplicación`,step4Help:`El servidor necesita Ver registros en esta aplicación para comprobar el comentario que anuncia cada encuesta y para publicar los resultados cuando termina. El token se guarda en la configuración oculta del plug-in, que solo ven los administradores de esta aplicación, y en el servidor.`,appTokenInstructions:`Abre la configuración de tokens de API de esta aplicación y genera un token con Ver registros. Haz clic en Guardar y luego en Actualizar aplicación. Pega el token abajo y haz clic en Guardar al final de esta página.`,openThisAppTokenSettings:`Abrir la configuración de tokens de API de esta aplicación`,appTokenLabel:`Token de API de esta aplicación`,completeStep3First:`Completa primero el paso 3.`,deleteServer:`Eliminar servidor`,deleteServerHelp:`Elimina de AWS el servidor de este dominio y los tokens que guardaba. Las encuestas dejan de funcionar en todas las aplicaciones de este dominio, y las que no hayan terminado no publicarán sus resultados. La aplicación repositorio y sus encuestas se quedan en Kintone, así que al volver a prepararlo el servidor vuelve, con otra dirección.`,deleteServerConfirm:`Se eliminará el servidor de este dominio. Las encuestas dejarán de funcionar en todas las aplicaciones de este dominio. Pega el token de API de la aplicación repositorio para confirmar.`,noServerToDelete:`Este dominio no tiene servidor.`,serverDeleted:`Servidor eliminado. Tarda uno o dos minutos en terminar.`,deleteServerError:`No se pudo eliminar el servidor: {{message}}`,saveButton:`Guardar`,cancelButton:`Cancelar`,ok:`Aceptar`,close:`Cerrar`,help:`Ayuda`,errorLabel:`Error`,saveSuccess:`Se guardó la configuración del plug-in. ¡Actualiza la aplicación!`,saveError:`No se pudo guardar la configuración: {{message}}`,repositoryAppIdRequired:`El App ID de la aplicación repositorio es obligatorio.`,allowNamedVotesLabel:`Encuestas nominales`,allowNamedVotesItem:`Permitir a los creadores mostrar quién votó qué`,allowNamedVotesHelp:`El creador lo elige en cada encuesta. Las encuestas anónimas lo indican al principio de su anuncio. En las nominales, cualquiera que pueda ver el registro ve quién eligió qué, también en el comentario de resultados.`,allowVoteChangeLabel:`Cambiar el voto`,allowVoteChangeItem:`Permitir a los creadores dejar que se cambie el voto`,allowVoteChangeHelp:`El creador lo elige en cada encuesta. Los participantes pueden cambiar su voto hasta que cierre. Para mover un voto, el servidor recuerda la elección de cada persona, también en las encuestas anónimas. Las anónimas nunca la muestran, pero los administradores podrían verla en la aplicación repositorio.`,allowAddOptionsLabel:`Añadir opciones`,allowAddOptionsItem:`Permitir a los creadores dejar que los participantes añadan opciones`,allowAddOptionsHelp:`El creador lo elige en cada encuesta. Los participantes pueden añadir opciones hasta que cierre, hasta 10 en total. No se avisa a nadie cuando se añade una opción.`,allowRemindersLabel:`Recordatorios`,allowRemindersItem:`Permitir a los creadores programar un recordatorio`,allowRemindersHelp:`El creador elige 1 día, 6 horas o 1 hora antes de la fecha límite. El recordatorio menciona a todos los participantes, grupos y departamentos incluidos, hayan votado o no.`},form:{titleLabel:`Título`,titlePlaceholder:`Escribe tu pregunta`,optionsLabel:`Opciones`,optionPlaceholder:`Opción {{number}}`,addOption:`+ Añadir opción`,deadlineLabel:`Fecha límite`,mentionsLabel:`Participantes`,mentionsPlaceholder:`Buscar por nombre o código`,namedVotesItem:`Mostrar quién votó qué (no anónima)`,voteChangeItem:`Permitir que los participantes cambien su voto`,addOptionsItem:`Permitir que los participantes añadan opciones`,reminderLabel:`Recordatorio`,reminderNone:`Sin recordatorio`,reminder1d:`1 día antes de la fecha límite`,reminder6h:`6 horas antes de la fecha límite`,reminder1h:`1 hora antes de la fecha límite`,reminderHelp:`Menciona a todos los participantes, hayan votado o no. No se envía si la fecha límite es antes.`},questionnaire:{badge:`Encuesta`,votesCount_one:`{{count}} voto ({{percent}}%)`,votesCount_other:`{{count}} votos ({{percent}}%)`,voteButton:`Votar`,votingButton:`Enviando...`,votingClosedError:`Esta encuesta ha finalizado`,voteSubmitError:`No se pudo enviar tu voto. Inténtalo de nuevo`,endedLine:`La encuesta «{{title}}» ha finalizado. (#{{id}})`,anonymousBadge:`Anónima`,changeVote:`Cambiar voto`,addOptionPlaceholder:`Sugerir una opción`,addOptionButton:`Añadir`,addOptionError:`No se pudo añadir la opción. Inténtalo de nuevo`},questionnaireButton:{mentionButtonLabel:`Encuesta`,mentionButtonTitle:`Crear una encuesta`,dialogTitle:`Crear una encuesta`,createButton:`Crear`,cancelButton:`Cancelar`,commentBody:`Se ha iniciado una encuesta: {{title}}
Fecha límite: {{deadline}}`,dateLocale:`es-ES`,anonymousNote:`Esta encuesta es anónima.`},validation:{titleRequired:`Introduce un título`,optionsMinimum:`Introduce al menos dos opciones`,deadlineRequired:`Introduce una fecha límite`,deadlineInPast:`La fecha límite debe ser en el futuro`,tooManyMentions:`Puedes mencionar como máximo a 10 usuarios, grupos o departamentos.`},common:{remove:`Eliminar`},errors:{notConfigured:`PollBuddy aún no está configurado en esta aplicación. Pide a un administrador de la aplicación que termine la Configuración inicial en la configuración del plug-in.`,unauthorized:`PollBuddy no puede usar el token de API de esta aplicación. Pide a un administrador de la aplicación que revise el paso 4 de la Configuración inicial del plug-in.`,generic:`Algo salió mal. Inténtalo de nuevo.`,createFailed:`Se publicó el comentario de la encuesta, pero no se pudo guardar la encuesta. {{message}}`}}},"zh-TW":{translation:{config:{heading:`PollBuddy 設定`,subtitle:`在記錄的留言中快速建立問卷。此設定僅適用於此應用程式；儲存庫應用程式與伺服器由此網域的所有應用程式共用。`,settingsSection:`設定`,initialSetupSection:`初始設定`,dangerZoneSection:`危險操作`,allowNonAdminPollLabel:`可以建立問卷的使用者`,allowNonAdminPollItem:`允許沒有應用程式管理權限的使用者建立問卷`,allowNonAdminPollHelp:`關閉時，只有此應用程式的管理者會看到「問卷」按鈕。能檢視記錄的使用者都可以投票。`,step1Title:`建立儲存庫應用程式`,step1Help:`一個儲存庫應用程式會保存此網域所有應用程式的問卷。只需建立一次。若已存在，請在下方輸入其 App ID，不要再建立新的。由於它保存所有應用程式的問卷（包括使用者無法開啟的應用程式），只有管理者與建立者可以開啟。`,createRepositoryButton:`建立儲存庫應用程式`,repositoryAppIdLabel:`儲存庫應用程式的 App ID`,createRepositoryConfirmTitle:`要建立儲存庫應用程式嗎？`,createRepositoryConfirm:`將在此網域建立用於保存問卷資料的新應用程式。每個網域只需建立一次。若已存在，請輸入其 App ID。`,confirmationRequired:`需要確認`,createRepositoryTitle:`已建立儲存庫應用程式`,createRepositorySuccess:`已建立 App {{appId}}。`,createRepositoryError:`無法建立儲存庫應用程式：{{message}}`,successLabel:`完成`,repositoryAppName:`PollBuddy 儲存庫`,repositoryAppDescription:`PollBuddy（意思決定くん）的問卷資料。由 PollBuddy 伺服器讀寫，請勿手動編輯記錄。`,step2Title:`為儲存庫應用程式產生 API Token`,step2Help:`伺服器使用此 Token 儲存問卷並計票，因此需要「檢視記錄」、「新增記錄」與「編輯記錄」。請妥善保管：它可以讀取此網域的所有問卷。`,repositoryTokenInstructions:`接著開啟其 API Token 設定，產生具有「檢視記錄」、「新增記錄」與「編輯記錄」的 Token。點選儲存，再更新應用程式。您將在步驟 3 貼上此 Token。`,openRepositoryTokenSettings:`開啟儲存庫應用程式的 API Token 設定`,completeStep1First:`請先完成步驟 1。`,step3Title:`準備伺服器`,step3Help:`將步驟 2 的 API Token 傳送到此網域的伺服器，伺服器會保存它並用來讀寫問卷。Token 不會保存在 Kintone，因此重新設定時需要再次貼上或產生新的 Token。此網域的所有應用程式共用一個伺服器，其他網域不會使用它。`,provisionServer:`準備伺服器`,reprovisionServer:`重新設定伺服器`,repositoryToken:`儲存庫應用程式的 API Token`,repositoryTokenHelp:`請貼上步驟 2 的儲存庫應用程式 API Token。它會傳送並保存在伺服器，不會保存在 Kintone。`,serverProvisioning:`正在準備此網域的伺服器，需要幾分鐘。您可以離開此頁面；準備會繼續進行，回來時會從這裡接續。`,serverReady:`此網域的伺服器已就緒：`,serverNotProvisioned:`此網域尚未準備伺服器。請點選上方的「準備伺服器」並貼上步驟 2 的 Token。`,serverProvisioned:`已為此網域準備好伺服器。`,provisionError:`無法準備伺服器：{{message}}`,step4Title:`為此應用程式產生 API Token`,step4Help:`伺服器需要此應用程式的「檢視記錄」，用來確認每個問卷的公告留言，並在問卷結束時張貼結果。Token 會保存在只有此應用程式管理者能看到的外掛程式隱藏設定，以及伺服器中。`,appTokenInstructions:`開啟此應用程式的 API Token 設定，產生具有「檢視記錄」的 Token。點選儲存，再更新應用程式。將 Token 貼在下方，然後點選此頁面底部的「儲存」。`,openThisAppTokenSettings:`開啟此應用程式的 API Token 設定`,appTokenLabel:`此應用程式的 API Token`,completeStep3First:`請先完成步驟 3。`,deleteServer:`刪除伺服器`,deleteServerHelp:`從 AWS 刪除此網域的伺服器及其保存的 Token。此網域所有應用程式的問卷都將無法使用，尚未結束的問卷也不會張貼結果。儲存庫應用程式與問卷會保留在 Kintone，重新準備後伺服器會以新的位址恢復。`,deleteServerConfirm:`將刪除此網域的伺服器，此網域所有應用程式的問卷都將無法使用。請貼上儲存庫應用程式的 API Token 以確認。`,noServerToDelete:`此網域沒有伺服器。`,serverDeleted:`已刪除伺服器，約需一兩分鐘完成。`,deleteServerError:`無法刪除伺服器：{{message}}`,saveButton:`儲存`,cancelButton:`取消`,ok:`確定`,close:`關閉`,help:`說明`,errorLabel:`錯誤`,saveSuccess:`已儲存外掛程式設定。請更新應用程式！`,saveError:`無法儲存設定：{{message}}`,repositoryAppIdRequired:`儲存庫應用程式的 App ID 為必填。`,allowNamedVotesLabel:`記名問卷`,allowNamedVotesItem:`允許建立者顯示誰投了哪個選項`,allowNamedVotesHelp:`由建立者為每個問卷選擇。匿名問卷會在公告留言開頭註明。記名問卷中，能檢視記錄的人都能看到誰選了什麼，結果留言中也會列出。`,allowVoteChangeLabel:`變更投票`,allowVoteChangeItem:`允許建立者讓參與者變更投票`,allowVoteChangeHelp:`由建立者為每個問卷選擇。參與者可在截止前變更投票。為了移動投票，伺服器會記錄每個人的選擇，匿名問卷也一樣。匿名問卷不會顯示，但管理者可以在儲存庫應用程式中看到。`,allowAddOptionsLabel:`新增選項`,allowAddOptionsItem:`允許建立者讓參與者新增選項`,allowAddOptionsHelp:`由建立者為每個問卷選擇。參與者可在截止前新增選項，最多共 10 個。新增選項時不會通知任何人。`,allowRemindersLabel:`提醒`,allowRemindersItem:`允許建立者設定提醒`,allowRemindersHelp:`建立者可選擇截止前 1 天、6 小時或 1 小時。提醒會提及所有參與者（包括群組與組織），無論是否已投票。`},form:{titleLabel:`標題`,titlePlaceholder:`請輸入問題`,optionsLabel:`選項`,optionPlaceholder:`選項 {{number}}`,addOption:`＋ 新增選項`,deadlineLabel:`截止時間`,mentionsLabel:`參與者`,mentionsPlaceholder:`以名稱或代碼搜尋`,namedVotesItem:`顯示誰投了哪個選項（記名）`,voteChangeItem:`允許參與者變更投票`,addOptionsItem:`允許參與者新增選項`,reminderLabel:`提醒`,reminderNone:`不提醒`,reminder1d:`截止前 1 天`,reminder6h:`截止前 6 小時`,reminder1h:`截止前 1 小時`,reminderHelp:`提及所有參與者，無論是否已投票。若截止時間更早則不會發送。`},questionnaire:{badge:`問卷`,votesCount:`{{count}} 票 ({{percent}}%)`,voteButton:`投票`,votingButton:`送出中...`,votingClosedError:`此問卷已結束`,voteSubmitError:`投票失敗，請再試一次`,endedLine:`問卷「{{title}}」已結束。(#{{id}})`,anonymousBadge:`匿名`,changeVote:`變更投票`,addOptionPlaceholder:`提議選項`,addOptionButton:`新增`,addOptionError:`無法新增選項，請再試一次`},questionnaireButton:{mentionButtonLabel:`問卷`,mentionButtonTitle:`建立問卷`,dialogTitle:`建立問卷`,createButton:`建立`,cancelButton:`取消`,commentBody:`問卷已開始：{{title}}
截止時間：{{deadline}}`,dateLocale:`zh-TW`,anonymousNote:`此問卷為匿名。`},validation:{titleRequired:`請輸入標題`,optionsMinimum:`請輸入至少兩個選項`,deadlineRequired:`請輸入截止時間`,deadlineInPast:`截止時間必須是未來的日期時間`,tooManyMentions:`最多只能提及 10 個使用者、群組或組織。`},common:{remove:`移除`},errors:{notConfigured:`此應用程式尚未完成 PollBuddy 設定。請聯絡應用程式管理者完成外掛程式設定中的「初始設定」。`,unauthorized:`PollBuddy 無法使用此應用程式的 API Token。請聯絡應用程式管理者檢查外掛程式設定「初始設定」的步驟 4。`,generic:`發生錯誤，請再試一次。`,createFailed:`已張貼問卷留言，但無法儲存問卷。{{message}}`}}}}});var Q=xd.t.bind(xd),Sd=k(`<span class="help-icon svelte-12zm6xx"><button type="button" class="icon svelte-12zm6xx">?</button></span>`),Cd={hash:`svelte-12zm6xx`,code:`.help-icon.svelte-12zm6xx {display:inline-flex;vertical-align:middle;}.icon.svelte-12zm6xx {display:inline-flex;align-items:center;justify-content:center;width:16px;height:16px;padding:0;border:none;border-radius:50%;background:#3498db;color:#ffffff;font-size:11px;font-weight:bold;line-height:1;cursor:help;}.icon.svelte-12zm6xx:focus-visible {outline:2px solid #3498db;outline-offset:2px;}`};function wd(e,t){Xe(t,!0),$r(e,Cd);let n=new fl({describeChild:!0,placement:`top`});xn(()=>{n.title=t.text});let r=e=>(n.container=e.firstElementChild,e.appendChild(n),()=>n.remove());var i=Sd(),a=ln(i);ei(i,()=>r),On(e=>si(a,`aria-label`,e),[()=>Q(`config.help`)]),A(e,i),Ze()}var Td=k(`<p class="help svelte-1oh92kb"><!></p>`),Ed={hash:`svelte-1oh92kb`,code:`.help.svelte-1oh92kb {color:#6b7775;margin:4px 0 0;}`};function Dd(e,t){$r(e,Ed);var n=Td();Qr(sn(n),()=>t.children),ke(n),A(e,n)}var Od=(...e)=>t=>{t.append(...e)},kd=`https://ijk1g7lb04.execute-api.ap-northeast-1.amazonaws.com/dev`,Ad=`f9218b865b18fd294ef0710a45d026be727bb25ca809515872665be77fa7d4ef`,jd=`X-IKTK-App-Token`,Md=`Administrators`,Nd=kintone.$PLUGIN_ID,Pd=[`allowNonAdminPoll`,`allowNamedVotes`,`allowVoteChange`,`allowAddOptions`,`allowReminders`],Fd=()=>{let e=kintone.plugin.app.getConfig(Nd)||{};return{repoAppId:e.repoAppId||``,endpoint:e.endpoint||``,provisionId:e.provisionId||``,...Object.fromEntries(Pd.map(t=>[t,e[t]===`true`]))}},Id=e=>new Promise(t=>{kintone.plugin.app.setConfig({repoAppId:String(e.repoAppId||``),endpoint:String(e.endpoint||``),provisionId:String(e.provisionId||``),...Object.fromEntries(Pd.map(t=>[t,String(!!e[t])]))},t)}),Ld=e=>`${e}/`,Rd=e=>e&&kintone.plugin.app.getProxyConfig(Ld(e),`POST`)?.headers?.[`X-IKTK-App-Token`]||``,zd=(e,t)=>new Promise(n=>{kintone.plugin.app.setProxyConfig(Ld(e),`POST`,{[jd]:t,"Content-Type":`application/json`},{},n)}),Bd=async(e,t,n)=>{let r=await fetch(`${kd}${e}`,{method:t,headers:{"Content-Type":`application/json`},...n?{body:JSON.stringify(n)}:{}}),i=await r.json().catch(()=>({}));if(!r.ok){let e=Error(i.error||`The control plane returned ${r.status}.`);throw e.status=r.status,e}return i},Vd=({domain:e,repositoryAppId:t,repositoryToken:n})=>Bd(`/domains`,`POST`,{domain:e,repositoryAppId:t,repositoryToken:n}),Hd=e=>Bd(`/provisions/${encodeURIComponent(e)}`,`GET`),Ud=async(e,t)=>{let n=new TextEncoder,r=await crypto.subtle.importKey(`raw`,n.encode(e),{name:`HMAC`,hash:`SHA-256`},!1,[`sign`]),i=await crypto.subtle.sign(`HMAC`,r,n.encode(t));return[...new Uint8Array(i)].map(e=>e.toString(16).padStart(2,`0`)).join(``)},Wd=async e=>{let t=await Ud(Ad,e);try{return await Bd(`/domains/${encodeURIComponent(e)}?proof=${t}`,`GET`)}catch(e){if(e.status===404)return null;throw e}},Gd=({domain:e,repositoryToken:t})=>Bd(`/domains`,`DELETE`,{domain:e,repositoryToken:t}),Kd=Fd(),qd=String(kintone.app.getId()),$=Zt({repoAppId:Kd.repoAppId,endpoint:Kd.endpoint,provisionId:Kd.provisionId,...Object.fromEntries(Pd.map(e=>[e,Kd[e]])),appToken:Rd(Kd.endpoint)}),Jd=Zt({dialog:null,notice:null,busy:!1}),Yd=(e,t)=>{console.error(e),Jd.dialog={title:Q(`config.errorLabel`),content:Q(t,{message:e.message||String(e)}),icon:`error`}},Xd=Zt({host:``,origin:``}),Zd=async()=>{let{subdomain:e,baseDomain:t}=await kintone.getDomain();if(Xd.host=`${e}.${t}`,Xd.origin=`https://${Xd.host}`,!($.endpoint||$.provisionId))try{let e=await Wd(Xd.host);if(!e)return;$.repoAppId=e.repositoryAppId,$.endpoint=e.endpoint,$.appToken||=Rd(e.endpoint)}catch(e){console.warn(`Could not look up this domain's server:`,e)}},Qd=()=>Id({repoAppId:$.repoAppId.trim(),endpoint:$.endpoint,provisionId:$.provisionId,...Object.fromEntries(Pd.map(e=>[e,$[e]]))}),$d=Zt({status:``,error:``}),ef=5e3,tf=e=>new Promise(t=>setTimeout(t,e)),nf=async()=>{if($.provisionId&&$d.status!==`pending`)for($d.status=`pending`;;){let e;try{e=await Hd($.provisionId)}catch(t){if(t.status!==404){console.warn(`Could not check provisioning, retrying:`,t),await tf(ef);continue}e={status:`failed`,error:t.message}}if(e.status===`pending`)await tf(ef);else{$.provisionId=``,e.status===`ready`?($.endpoint=e.endpoint,$d.status=``,Jd.notice={text:Q(`config.serverProvisioned`),type:`success`}):($d.status=`failed`,$d.error=e.error),await Qd();return}}},rf=e=>{let t=new nl({label:Q(`config.repositoryToken`),value:``}),n=document.createElement(`div`),r=document.createElement(`p`);return r.className=`repository-token-help`,r.textContent=e,n.append(r,t),{content:n,token:()=>t.value.trim()}},af=pi(()=>$),of=pi(()=>Jd),sf=k(`<div></div>`),cf=k(`<section><h4 class="svelte-rc5ckm"> <!></h4> <!></section>`),lf={hash:`svelte-rc5ckm`,code:`h4.svelte-rc5ckm {display:flex;align-items:center;gap:8px;margin:0 0 8px;font-size:15px;}`};function uf(e,t){Xe(t,!1),$r(e,lf);let n=new gs({text:Q(`config.deleteServer`),type:`alert`}),r=async e=>{if(e){of(of().busy=!0);try{await Gd({domain:Xd.host,repositoryToken:e}),af(af().endpoint=``),af(af().provisionId=``),await Qd(),of(of().notice={text:Q(`config.serverDeleted`),type:`success`})}catch(e){Yd(e,`config.deleteServerError`)}finally{of(of().busy=!1)}}};n.addEventListener(`click`,()=>{let{content:e,token:t}=rf(Q(`config.deleteServerConfirm`));of(of().dialog={title:Q(`config.deleteServer`),content:e,header:Q(`config.confirmationRequired`),icon:`warning`,cancel:!0,onconfirm:()=>r(t())})}),di();var i=cf(),a=sn(i),o=sn(a),s=T(o);{let e=ht(()=>Q(`config.deleteServerHelp`));wd(s,{get text(){return O(e)}})}ke(a);var c=T(a,2),l=e=>{var t=sf();ei(t,()=>Od(n)),A(e,t)},u=e=>{Dd(e,{children:(e,t)=>{Ae();var n=Ar();On(e=>Ir(n,e),[()=>Q(`config.noServerToDelete`)]),A(e,n)},$$slots:{default:!0}})};Hr(c,e=>{af().endpoint&&$d.status!==`pending`?e(l):e(u,-1)}),ke(i),On(e=>Ir(o,`${e??``} `),[()=>Q(`config.deleteServer`)]),A(e,i),Ze()}function df(e,t){Xe(t,!0);let n=gi(t,`dialog`,15,null);xn(()=>{if(!n())return;let{title:e,content:t,header:r,icon:i,cancel:a,onconfirm:o,onclose:s}=n(),c=document.createElement(`div`);if(a){let e=new gs({text:Q(`config.cancelButton`),type:`normal`});e.addEventListener(`click`,()=>{n(null)}),c.appendChild(e)}let l=new gs({text:Q(a?`config.ok`:`config.close`),type:`submit`});l.addEventListener(`click`,()=>{o?.(),s?.(),n(null)}),c.appendChild(l);let u=new ac({title:e,content:t,header:r,icon:i,footer:c}),d=()=>{n(null)};return u.addEventListener(`close`,d),u.open(),()=>{u.removeEventListener(`close`,d),u.close(),u.remove()}}),Ze()}var ff=k(`<div><div class="field-group-body svelte-192ei94"><!></div></div>`),pf={hash:`svelte-192ei94`,code:`.field-group.svelte-192ei94 {max-width:720px;}.danger.svelte-192ei94 {width:fit-content;outline:1px solid #e74c3c;outline-offset:-1px;}.field-group-body.svelte-192ei94 {box-sizing:border-box;padding:0 4px 8px;white-space:normal;}`};function mf(e,t){Xe(t,!0),$r(e,pf);let n=gi(t,`expanded`,3,!1),r=gi(t,`reveal`,3,!1),i=gi(t,`danger`,3,!1),a=new pc({expanded:hr(()=>n())});xn(()=>{a.label=t.label}),xn(()=>{r()&&(a.expanded=!0)});let o=e=>(a.content=e.firstElementChild,e.appendChild(a),()=>a.remove());var s=ff();let c;var l=sn(s);Qr(sn(l),()=>t.children),ke(l),ke(s),ei(s,()=>o),On(()=>c=ri(s,1,`field-group svelte-192ei94`,null,c,{danger:i()})),A(e,s),Ze()}var hf=k(`<section class="step"><h4 class="title svelte-grv0bh"><span class="number svelte-grv0bh"> </span> <!></h4> <div class="body svelte-grv0bh"><!></div></section>`),gf={hash:`svelte-grv0bh`,code:`.title.svelte-grv0bh {display:flex;align-items:center;gap:8px;margin:0;font-size:15px;}.number.svelte-grv0bh {display:inline-flex;align-items:center;justify-content:center;width:22px;height:22px;border-radius:50%;background:#3498db;color:#ffffff;font-size:12px;}.body.svelte-grv0bh {display:flex;flex-direction:column;gap:12px;margin-top:8px;padding-left:30px;}`};function _f(e,t){$r(e,gf);let n=gi(t,`help`,3,``);var r=hf(),i=sn(r),a=sn(i),o=ln(a,!0),s=T(a),c=T(s),l=e=>{wd(e,{get text(){return n()}})};Hr(c,e=>{n()&&e(l)}),ke(i);var u=T(i,2);Qr(sn(u),()=>t.children),ke(u),ke(r),On(()=>{Ir(o,t.number),Ir(s,` ${t.title??``} `)}),A(e,r)}var vf=k(`<a target="_blank" rel="noopener" class="svelte-166vqf4"> </a>`),yf={hash:`svelte-166vqf4`,code:`a.svelte-166vqf4 {align-self:flex-start;color:#3498db;}`};function bf(e,t){$r(e,yf);var n=vf(),r=ln(n,!0);On(()=>{si(n,`href`,t.href),Ir(r,t.text)}),A(e,n)}var xf=window.location.pathname.match(/^\/k\/(?:guest\/\d+\/)?/)?.[0]??`/k/`,Sf=e=>`${Xd.origin}/k/admin/app/apitoken?app=${e}`,Cf=e=>`${Xd.origin}${xf}admin/app/apitoken?app=${e}`,wf=(e,t,n)=>kintone.api(kintone.api.url(e,!0),t,n),Tf={appID:{type:`SINGLE_LINE_TEXT`,code:`appID`,label:`App ID`,noLabel:!1,required:!0},RecordID:{type:`SINGLE_LINE_TEXT`,code:`RecordID`,label:`Record ID`,noLabel:!1,required:!0},table:{type:`SUBTABLE`,code:`table`,label:`Questionnaires`,fields:{commentID:{type:`SINGLE_LINE_TEXT`,code:`commentID`,label:`Comment ID`,noLabel:!1,required:!0},title:{type:`SINGLE_LINE_TEXT`,code:`title`,label:`Title`,noLabel:!1,required:!0},startTime:{type:`DATETIME`,code:`startTime`,label:`Start Time`,noLabel:!1,required:!0},endTime:{type:`DATETIME`,code:`endTime`,label:`End Time`,noLabel:!1,required:!0},votes:{type:`SINGLE_LINE_TEXT`,code:`votes`,label:`Votes`,noLabel:!1,required:!1},users:{type:`USER_SELECT`,code:`users`,label:`Mentioned Users`,noLabel:!1,required:!1},group:{type:`GROUP_SELECT`,code:`group`,label:`Mentioned Groups`,noLabel:!1,required:!1},org:{type:`ORGANIZATION_SELECT`,code:`org`,label:`Mentioned Organizations`,noLabel:!1,required:!1},creator:{type:`USER_SELECT`,code:`creator`,label:`Creator`,noLabel:!1,required:!0},votedUsers:{type:`USER_SELECT`,code:`votedUsers`,label:`Voted Users`,noLabel:!1,required:!1},options:{type:`MULTI_LINE_TEXT`,code:`options`,label:`Options`,noLabel:!1,required:!0},settings:{type:`MULTI_LINE_TEXT`,code:`settings`,label:`Settings`,noLabel:!1,required:!1},ballots:{type:`MULTI_LINE_TEXT`,code:`ballots`,label:`Ballots`,noLabel:!1,required:!1}}}},Ef={appEditable:!0,recordViewable:!0,recordAddable:!0,recordEditable:!0,recordDeletable:!0,recordImportable:!0,recordExportable:!0},Df=e=>wf(`/k/v1/preview/app/acl.json`,`PUT`,{app:e,rights:[{entity:{type:`CREATOR`},...Ef},{entity:{type:`GROUP`,code:Md},...Ef},{entity:{type:`GROUP`,code:`everyone`},appEditable:!1,recordViewable:!1,recordAddable:!1,recordEditable:!1,recordDeletable:!1,recordImportable:!1,recordExportable:!1}]}),Of=e=>new Promise(t=>setTimeout(t,e)),kf=async(e,{attempts:t=30,intervalMs:n=1e3}={})=>{for(let r=0;r<t;r+=1){let{apps:t}=await wf(`/k/v1/preview/app/deploy.json`,`GET`,{apps:[e]}),r=t[0]?.status;if(r===`SUCCESS`)return;if(r===`FAIL`||r===`CANCEL`)throw Error(`App deployment ${r.toLowerCase()}ed.`);await Of(n)}throw Error(`Timed out waiting for the app to deploy.`)};async function Af(){let{app:e}=await wf(`/k/v1/preview/app.json`,`POST`,{name:Q(`config.repositoryAppName`)});return await wf(`/k/v1/preview/app/settings.json`,`PUT`,{app:e,description:Q(`config.repositoryAppDescription`)}),await wf(`/k/v1/preview/app/form/fields.json`,`POST`,{app:e,properties:Tf}),await Df(e),await wf(`/k/v1/preview/app/deploy.json`,`POST`,{apps:[{app:e}]}),await kf(e),String(e)}var jf=k(`<div></div> <div></div>`,1),Mf=k(`<p class="text svelte-1oiteoy"> </p> <!>`,1),Nf=k(`<p class="status svelte-1oiteoy"><span class="spinner svelte-1oiteoy" aria-hidden="true"></span> </p>`),Pf=k(`<p class="failed svelte-1oiteoy"> </p>`),Ff=k(`<div></div> <!>`,1),If=k(`<!> <p class="endpoint svelte-1oiteoy"> </p>`,1),Lf=k(`<!> <!>`,1),Rf=k(`<p class="text svelte-1oiteoy"> </p> <!> <div></div>`,1),zf=k(`<div class="initial-setup svelte-1oiteoy"><!> <!> <!> <!></div>`),Bf={hash:`svelte-1oiteoy`,code:`.initial-setup.svelte-1oiteoy {display:flex;flex-direction:column;gap:24px;}.text.svelte-1oiteoy,
  .status.svelte-1oiteoy,
  .failed.svelte-1oiteoy,
  .endpoint.svelte-1oiteoy {margin:0;}.failed.svelte-1oiteoy {color:#e74c3c;}.endpoint.svelte-1oiteoy {font-family:ui-monospace, Menlo, Consolas, monospace;background:#f7f9fa;border:1px solid #e3e7e8;border-radius:4px;padding:8px 12px;overflow-wrap:anywhere;}.status.svelte-1oiteoy {display:flex;align-items:flex-start;gap:8px;}.spinner.svelte-1oiteoy {flex:none;width:14px;height:14px;margin-top:3px;border:2px solid #e3e7e8;border-top-color:#3498db;border-radius:50%;
    animation: svelte-1oiteoy-spin 0.8s linear infinite;}

  @keyframes svelte-1oiteoy-spin {
    to {
      transform: rotate(360deg);
    }
  }

  @media (prefers-reduced-motion: reduce) {.spinner.svelte-1oiteoy {animation-duration:2s;}
  }`};function Vf(e,t){Xe(t,!0),$r(e,Bf);let n=mt(()=>$.repoAppId.trim()),r=new gs({text:Q(`config.createRepositoryButton`),type:`normal`}),i=new nl({label:Q(`config.repositoryAppIdLabel`),value:$.repoAppId});i.addEventListener(`input`,e=>{$.repoAppId=e.detail.value??``}),xn(()=>{i.value!==$.repoAppId&&(i.value=$.repoAppId)}),xn(()=>{r.disabled=!!$.endpoint});let a=e=>{let t=document.createElement(`div`),n=document.createElement(`p`);n.textContent=Q(`config.createRepositorySuccess`,{appId:e});let r=document.createElement(`p`);r.textContent=Q(`config.repositoryTokenInstructions`);let i=document.createElement(`a`);return i.href=Sf(e),i.target=`_blank`,i.rel=`noopener`,i.textContent=Q(`config.openRepositoryTokenSettings`),t.append(n,r,i),t},o=async()=>{Jd.busy=!0;try{let e=await Af();$.repoAppId=e,await Qd(),Jd.dialog={title:Q(`config.createRepositoryTitle`),content:a(e),header:Q(`config.successLabel`),icon:`success`}}catch(e){Yd(e,`config.createRepositoryError`)}finally{Jd.busy=!1}};r.addEventListener(`click`,()=>{Jd.dialog={title:Q(`config.createRepositoryConfirmTitle`),content:Q(`config.createRepositoryConfirm`),header:Q(`config.confirmationRequired`),icon:`info`,cancel:!0,onconfirm:o}});let s=new gs({type:`normal`});xn(()=>{s.text=$.endpoint?Q(`config.reprovisionServer`):Q(`config.provisionServer`)});let c=async e=>{if(e){Jd.busy=!0;try{let t=await Vd({domain:Xd.host,repositoryAppId:O(n),repositoryToken:e});$d.status=``,t.status===`ready`?($.endpoint=t.endpoint,$.provisionId=``,await Qd(),Jd.notice={text:Q(`config.serverProvisioned`),type:`success`}):($.provisionId=t.provisionId,await Qd(),nf())}catch(e){Yd(e,`config.provisionError`)}finally{Jd.busy=!1}}};s.addEventListener(`click`,()=>{if(!O(n)){Jd.dialog={title:Q(`config.errorLabel`),content:Q(`config.completeStep1First`),icon:`error`};return}let{content:e,token:t}=rf(Q(`config.repositoryTokenHelp`));Jd.dialog={title:$.endpoint?Q(`config.reprovisionServer`):Q(`config.provisionServer`),content:e,header:Q(`config.repositoryToken`),cancel:!0,onconfirm:()=>c(t())}});let l=new nl({label:Q(`config.appTokenLabel`),value:$.appToken});l.addEventListener(`input`,e=>{$.appToken=e.detail.value??``});var u=zf(),d=sn(u);{let e=mt(()=>Q(`config.step1Title`)),t=mt(()=>Q(`config.step1Help`));_f(d,{number:1,get title(){return O(e)},get help(){return O(t)},children:(e,t)=>{var n=jf(),a=cn(n);ei(a,()=>Od(r)),ei(T(a,2),()=>Od(i)),A(e,n)},$$slots:{default:!0}})}var f=T(d,2);{let e=mt(()=>Q(`config.step2Title`)),t=mt(()=>Q(`config.step2Help`));_f(f,{number:2,get title(){return O(e)},get help(){return O(t)},children:(e,t)=>{var r=jr(),i=cn(r),a=e=>{var t=Mf(),r=cn(t),i=ln(r,!0),a=T(r,2);{let e=mt(()=>Sf(O(n))),t=mt(()=>Q(`config.openRepositoryTokenSettings`));bf(a,{get href(){return O(e)},get text(){return O(t)}})}On(e=>Ir(i,e),[()=>Q(`config.repositoryTokenInstructions`)]),A(e,t)},o=e=>{Dd(e,{children:(e,t)=>{Ae();var n=Ar();On(e=>Ir(n,e),[()=>Q(`config.completeStep1First`)]),A(e,n)},$$slots:{default:!0}})};Hr(i,e=>{O(n)?e(a):e(o,-1)}),A(e,r)},$$slots:{default:!0}})}var p=T(f,2);{let e=mt(()=>Q(`config.step3Title`)),t=mt(()=>Q(`config.step3Help`));_f(p,{number:3,get title(){return O(e)},get help(){return O(t)},children:(e,t)=>{var n=Lf(),r=cn(n),i=e=>{var t=Nf(),n=T(sn(t));ke(t),On(e=>Ir(n,` ${e??``}`),[()=>Q(`config.serverProvisioning`)]),A(e,t)},a=e=>{var t=Ff(),n=cn(t);ei(n,()=>Od(s));var r=T(n,2),i=e=>{var t=Pf(),n=ln(t,!0);On(()=>Ir(n,$d.error)),A(e,t)};Hr(r,e=>{$d.status===`failed`&&e(i)}),A(e,t)};Hr(r,e=>{$d.status===`pending`?e(i):e(a,-1)});var o=T(r,2),c=e=>{var t=If(),n=cn(t);Dd(n,{children:(e,t)=>{Ae();var n=Ar();On(e=>Ir(n,e),[()=>Q(`config.serverReady`)]),A(e,n)},$$slots:{default:!0}});var r=ln(T(n,2),!0);On(()=>Ir(r,$.endpoint)),A(e,t)},l=e=>{Dd(e,{children:(e,t)=>{Ae();var n=Ar();On(e=>Ir(n,e),[()=>Q(`config.serverNotProvisioned`)]),A(e,n)},$$slots:{default:!0}})};Hr(o,e=>{$.endpoint?e(c):$d.status!==`pending`&&e(l,1)}),A(e,n)},$$slots:{default:!0}})}var m=T(p,2);{let e=mt(()=>Q(`config.step4Title`)),t=mt(()=>Q(`config.step4Help`));_f(m,{number:4,get title(){return O(e)},get help(){return O(t)},children:(e,t)=>{var n=jr(),r=cn(n),i=e=>{var t=Rf(),n=cn(t),r=ln(n,!0),i=T(n,2);{let e=mt(()=>Cf(qd)),t=mt(()=>Q(`config.openThisAppTokenSettings`));bf(i,{get href(){return O(e)},get text(){return O(t)}})}ei(T(i,2),()=>Od(l)),On(e=>Ir(r,e),[()=>Q(`config.appTokenInstructions`)]),A(e,t)},a=e=>{Dd(e,{children:(e,t)=>{Ae();var n=Ar();On(e=>Ir(n,e),[()=>Q(`config.completeStep3First`)]),A(e,n)},$$slots:{default:!0}})};Hr(r,e=>{$.endpoint?e(i):e(a,-1)}),A(e,n)},$$slots:{default:!0}})}ke(u),A(e,u),Ze()}function Hf(e,t){Xe(t,!0);let n=gi(t,`notice`,11,null);xn(()=>{if(!n())return;let e=new bc({text:n().text,type:n().type||`info`});return e.open(),()=>e.remove()}),Ze()}var Uf=pi(()=>$),Wf=k(`<div class="setting svelte-1t40ko6"><div></div> <!></div>`),Gf=k(`<div class="settings-group svelte-1t40ko6"></div>`),Kf={hash:`svelte-1t40ko6`,code:`.settings-group.svelte-1t40ko6 {display:flex;flex-direction:column;gap:16px;}.setting.svelte-1t40ko6 {display:flex;flex-direction:column;gap:4px;}`};function qf(e,t){Xe(t,!1),$r(e,Kf);let n=Pd.map(e=>{let t=new bs({label:Q(`config.${e}Label`),items:[{label:Q(`config.${e}Item`),value:`on`}],value:Uf()[e]?[`on`]:[]});return t.addEventListener(`change`,t=>{Uf(Uf()[e]=t.detail.value.length>0)}),{option:e,field:t}});di();var r=Gf();Kr(r,5,()=>n,({option:e,field:t})=>e,(e,t)=>{let n=()=>O(t).option,r=()=>O(t).field;var i=Wf(),a=sn(i);ei(a,()=>Od(r())),Dd(T(a,2),{children:(e,t)=>{Ae();var r=Ar();On(e=>Ir(r,e),[()=>Q(`config.${n()}Help`)]),A(e,r)},$$slots:{default:!0}}),ke(i),A(e,i)}),ke(r),A(e,r),Ze()}function Jf(e,t){Xe(t,!0);let n=gi(t,`open`,3,!1),r=new Nc({text:gi(t,`text`,3,``)()});xn(()=>{n()?r.open():r.close()}),Ze()}var Yf=async e=>{let t=new URLSearchParams({app:kintone.app.getId(),query:`limit 1`}),n=await fetch(`${kintone.api.url(`/k/v1/records.json`,!0)}?${t}`,{headers:{"X-Cybozu-API-Token":e}});if(n.ok)return;let r=await n.json().catch(()=>({}));throw Error(r.message||`Kintone returned ${n.status}.`)},Xf=pi(()=>Jd),Zf=k(`<h2> </h2> <p> </p> <div class="groups svelte-13a2bj9"><!> <!> <!></div> <div class="submit svelte-13a2bj9"></div> <!> <!> <!>`,1),Qf={hash:`svelte-13a2bj9`,code:`
  /* The token prompt (config/tokenPrompt.js) is built in JS and shown in a
     KUC Dialog, outside every component. */.repository-token-help {color:#6b7775;margin:4px 0 0;}.settings {max-width:720px;padding:16px;font-size:14px;line-height:1.6;}.groups.svelte-13a2bj9 {display:flex;flex-direction:column;gap:16px;margin-top:16px;}.submit.svelte-13a2bj9 {display:flex;gap:8px;margin-top:24px;border-top:1px solid #e3e7e8;padding-top:16px;}`};function $f(e,t){Xe(t,!1),$r(e,Qf);let n=!!($.endpoint&&$.appToken),r=new gs({text:Q(`config.cancelButton`),type:`normal`}),i=new gs({text:Q(`config.saveButton`),type:`submit`});r.addEventListener(`click`,()=>{window.location.href=`../../${qd}/plugin/`}),i.addEventListener(`click`,async()=>{if(!$.repoAppId.trim())Xf(Xf().dialog={title:Q(`config.errorLabel`),content:Q(`config.repositoryAppIdRequired`),icon:`error`});else{Xf(Xf().busy=!0);try{let e=$.appToken.trim();if(e){if(!$.endpoint)throw Error(Q(`config.completeStep3First`));await Yf(e),await zd($.endpoint,e)}await Qd(),Xf(Xf().dialog={title:Q(`config.successLabel`),content:Q(`config.saveSuccess`),icon:`success`,onclose:()=>{window.location.href=`../../flow?app=${qd}`}})}catch(e){Yd(e,`config.saveError`)}finally{Xf(Xf().busy=!1)}}}),Zd(),nf(),di();var a=Zf(),o=cn(a),s=ln(o,!0),c=T(o,2),l=ln(c,!0),u=T(c,2),d=sn(u);{let e=ht(()=>Q(`config.settingsSection`));mf(d,{get label(){return O(e)},expanded:!0,children:(e,t)=>{qf(e,{})},$$slots:{default:!0}})}var f=T(d,2);{let e=ht(()=>Q(`config.initialSetupSection`)),t=ht(()=>!n);mf(f,{get label(){return O(e)},get expanded(){return O(t)},children:(e,t)=>{Vf(e,{})},$$slots:{default:!0}})}var p=T(f,2);{let e=ht(()=>Q(`config.dangerZoneSection`));mf(p,{get label(){return O(e)},danger:!0,children:(e,t)=>{uf(e,{})},$$slots:{default:!0}})}ke(u);var m=T(u,2);ei(m,()=>Od(r,i));var h=T(m,2);df(h,{get dialog(){return Xf().dialog},set dialog(e){Xf(Xf().dialog=e)},$$legacy:!0});var g=T(h,2);Hf(g,{get notice(){return Xf().notice},set notice(e){Xf(Xf().notice=e)},$$legacy:!0}),Jf(T(g,2),{get open(){return Xf().busy}}),On((e,t)=>{Ir(s,e),Ir(l,t)},[()=>Q(`config.heading`),()=>Q(`config.subtitle`)]),A(e,a),Ze()}var ep=kintone.$PLUGIN_ID,tp=document.querySelector(`.settings`);if(!tp)throw Error(`Required elements do not exist.`);Lr($f,{target:tp,props:{pluginId:ep}})})();