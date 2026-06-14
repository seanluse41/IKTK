(function(){var e=Object.defineProperty,t=Object.getOwnPropertyDescriptor,n=Object.getOwnPropertyNames,r=Object.prototype.hasOwnProperty,i=(e,t)=>()=>(e&&(t=e(e=0)),t),a=(e,t)=>()=>(t||(e((t={exports:{}}).exports,t),e=null),t.exports),o=(t,n)=>{let r={};for(var i in t)e(r,i,{get:t[i],enumerable:!0});return n||e(r,Symbol.toStringTag,{value:`Module`}),r},s=(i,a,o,s)=>{if(a&&typeof a==`object`||typeof a==`function`)for(var c=n(a),l=0,u=c.length,d;l<u;l++)d=c[l],!r.call(i,d)&&d!==o&&e(i,d,{get:(e=>a[e]).bind(null,d),enumerable:!(s=t(a,d))||s.enumerable});return i},c=t=>r.call(t,`module.exports`)?t[`module.exports`]:s(e({},`__esModule`,{value:!0}),t),l=Array.isArray,u=Array.prototype.indexOf,d=Array.prototype.includes,f=Array.from,p=Object.defineProperty,m=Object.getOwnPropertyDescriptor,h=Object.getOwnPropertyDescriptors,g=Object.prototype,_=Array.prototype,v=Object.getPrototypeOf,y=Object.isExtensible,b=()=>{};function x(e){for(var t=0;t<e.length;t++)e[t]()}function S(){var e,t;return{promise:new Promise((n,r)=>{e=n,t=r}),resolve:e,reject:t}}var C=1024,w=2048,T=4096,E=8192,ee=16384,D=32768,te=1<<25,ne=65536,O=1<<19,re=1<<20,ie=1<<25,ae=65536,oe=1<<21,se=1<<22,ce=1<<23,le=Symbol(`$state`),ue=Symbol(`legacy props`),de=Symbol(``),k=Symbol(`attributes`),fe=Symbol(`class`),pe=Symbol(`style`),me=Symbol(`text`),he=Symbol(`form reset`),ge=new class extends Error{name=`StaleReactionError`;message="The reaction that called `getAbortSignal()` was re-run or destroyed"},_e=!!globalThis.document?.contentType&&globalThis.document.contentType.includes(`xml`);function ve(e){throw Error(`https://svelte.dev/e/lifecycle_outside_component`)}function ye(){throw Error(`https://svelte.dev/e/async_derived_orphan`)}function be(e,t,n){throw Error(`https://svelte.dev/e/each_key_duplicate`)}function xe(e){throw Error(`https://svelte.dev/e/effect_in_teardown`)}function Se(){throw Error(`https://svelte.dev/e/effect_in_unowned_derived`)}function Ce(e){throw Error(`https://svelte.dev/e/effect_orphan`)}function we(){throw Error(`https://svelte.dev/e/effect_update_depth_exceeded`)}function Te(e){throw Error(`https://svelte.dev/e/props_invalid_value`)}function Ee(){throw Error(`https://svelte.dev/e/state_descriptors_fixed`)}function De(){throw Error(`https://svelte.dev/e/state_prototype_fixed`)}function Oe(){throw Error(`https://svelte.dev/e/state_unsafe_mutation`)}function ke(){throw Error(`https://svelte.dev/e/svelte_boundary_reset_onerror`)}var Ae={},je=Symbol(`uninitialized`),Me=`http://www.w3.org/1999/xhtml`;function Ne(){console.warn(`https://svelte.dev/e/derived_inert`)}function Pe(e){console.warn(`https://svelte.dev/e/hydration_mismatch`)}function Fe(){console.warn(`https://svelte.dev/e/svelte_boundary_reset_noop`)}var A=!1;function j(e){A=e}var M;function Ie(e){if(e===null)throw Pe(),Ae;return M=e}function Le(){return Ie(pn(M))}function Re(e){if(A){if(pn(M)!==null)throw Pe(),Ae;M=e}}function ze(e=1){if(A){for(var t=e,n=M;t--;)n=pn(n);M=n}}function Be(e=!0){for(var t=0,n=M;;){if(n.nodeType===8){var r=n.data;if(r===`]`){if(t===0)return n;--t}else (r===`[`||r===`[!`||r[0]===`[`&&!isNaN(Number(r.slice(1))))&&(t+=1)}var i=pn(n);e&&n.remove(),n=i}}function Ve(e){if(!e||e.nodeType!==8)throw Pe(),Ae;return e.data}function He(e){return e===this.v}function Ue(e,t){return e==e?e!==t||typeof e==`object`&&!!e||typeof e==`function`:t==t}function We(e){return!Ue(e,this.v)}var Ge=!1,Ke=!1,N=null;function qe(e){N=e}function Je(e,t=!1,n){N={p:N,i:!1,c:null,e:null,s:e,x:null,r:R,l:Ke&&!t?{s:null,u:null,$:[]}:null}}function Ye(e){var t=N,n=t.e;if(n!==null){t.e=null;for(var r of n)An(r)}return e!==void 0&&(t.x=e),t.i=!0,N=t.p,e??{}}function Xe(){return!Ke||N!==null&&N.l===null}var Ze=[];function Qe(){var e=Ze;Ze=[],x(e)}function $e(e){if(Ze.length===0&&!Mt){var t=Ze;queueMicrotask(()=>{t===Ze&&Qe()})}Ze.push(e)}function et(){for(;Ze.length>0;)Qe()}function P(e){var t=R;if(t===null)return L.f|=ce,e;if(!(t.f&32768)&&!(t.f&4))throw e;tt(e,t)}function tt(e,t){if(!(t!==null&&t.f&16384)){for(;t!==null;){if(t.f&128){if(!(t.f&32768))throw e;try{t.b.error(e);return}catch(t){e=t}}t=t.parent}throw e}}var nt=~(w|T|C);function rt(e,t){e.f=e.f&nt|t}function it(e){e.f&512||e.deps===null?rt(e,C):rt(e,T)}function at(e){if(e!==null)for(let t of e)!(t.f&2)||!(t.f&65536)||(t.f^=ae,at(t.deps))}function ot(e,t,n){e.f&2048?t.add(e):e.f&4096&&n.add(e),at(e.deps),rt(e,C)}var st=!1,ct=!1;function lt(e){var t=ct;try{return ct=!1,[e(),ct]}finally{ct=t}}function ut(e){let t=0,n=Zt(0),r;return()=>{Dn()&&(z(n),Pn(()=>(t===0&&(r=Sr(()=>e(()=>nn(n)))),t+=1,()=>{$e(()=>{--t,t===0&&(r?.(),r=void 0,nn(n))})})))}}var dt=ne|O;function ft(e,t,n,r){new pt(e,t,n,r)}var pt=class{parent;is_pending=!1;transform_error;#e;#t=A?M:null;#n;#r;#i;#a=null;#o=null;#s=null;#c=null;#l=0;#u=0;#d=!1;#f=new Set;#p=new Set;#m=null;#h=ut(()=>(this.#m=Zt(this.#l),()=>{this.#m=null}));constructor(e,t,n,r){this.#e=e,this.#n=t,this.#r=e=>{var t=R;t.b=this,t.f|=128,n(e)},this.parent=R.b,this.transform_error=r??this.parent?.transform_error??(e=>e),this.#i=In(()=>{if(A){let e=this.#t;Le();let t=e.data===`[!`;if(e.data.startsWith(`[?`)){let t=JSON.parse(e.data.slice(2));this.#_(t)}else t?this.#v():this.#g()}else this.#y()},dt),A&&(this.#e=M)}#g(){try{this.#a=Ln(()=>this.#r(this.#e))}catch(e){this.error(e)}}#_(e){let t=this.#n.failed;t&&(this.#s=Ln(()=>{t(this.#e,()=>e,()=>()=>{})}))}#v(){let e=this.#n.pending;e&&(this.is_pending=!0,this.#o=Ln(()=>e(this.#e)),$e(()=>{var e=this.#c=document.createDocumentFragment(),t=dn();e.append(t),this.#a=this.#x(()=>Ln(()=>this.#r(t))),this.#u===0&&(this.#e.before(e),this.#c=null,Wn(this.#o,()=>{this.#o=null}),this.#b(F))}))}#y(){try{if(this.is_pending=this.has_pending_snippet(),this.#u=0,this.#l=0,this.#a=Ln(()=>{this.#r(this.#e)}),this.#u>0){var e=this.#c=document.createDocumentFragment();Jn(this.#a,e);let t=this.#n.pending;this.#o=Ln(()=>t(this.#e))}else this.#b(F)}catch(e){this.error(e)}}#b(e){this.is_pending=!1,e.transfer_effects(this.#f,this.#p)}defer_effect(e){ot(e,this.#f,this.#p)}is_rendered(){return!this.is_pending&&(!this.parent||this.parent.is_rendered())}has_pending_snippet(){return!!this.#n.pending}#x(e){var t=R,n=L,r=N;tr(this.#i),er(this.#i),qe(this.#i.ctx);try{return Rt.ensure(),e()}catch(e){return P(e),null}finally{tr(t),er(n),qe(r)}}#S(e,t){if(!this.has_pending_snippet()){this.parent&&this.parent.#S(e,t);return}this.#u+=e,this.#u===0&&(this.#b(t),this.#o&&Wn(this.#o,()=>{this.#o=null}),this.#c&&=(this.#e.before(this.#c),null))}update_pending_count(e,t){this.#S(e,t),this.#l+=e,!(!this.#m||this.#d)&&(this.#d=!0,$e(()=>{this.#d=!1,this.#m&&en(this.#m,this.#l)}))}get_effect_pending(){return this.#h(),z(this.#m)}error(e){if(!this.#n.onerror&&!this.#n.failed)throw e;F?.is_fork?(this.#a&&F.skip_effect(this.#a),this.#o&&F.skip_effect(this.#o),this.#s&&F.skip_effect(this.#s),F.oncommit(()=>{this.#C(e)})):this.#C(e)}#C(e){this.#a&&=(Vn(this.#a),null),this.#o&&=(Vn(this.#o),null),this.#s&&=(Vn(this.#s),null),A&&(Ie(this.#t),ze(),Ie(Be()));var t=this.#n.onerror;let n=this.#n.failed;var r=!1,i=!1;let a=()=>{if(r){Fe();return}r=!0,i&&ke(),this.#s!==null&&Wn(this.#s,()=>{this.#s=null}),this.#x(()=>{this.#y()})},o=e=>{try{i=!0,t?.(e,a),i=!1}catch(e){tt(e,this.#i&&this.#i.parent)}n&&(this.#s=this.#x(()=>{try{return Ln(()=>{var t=R;t.b=this,t.f|=128,n(this.#e,()=>e,()=>a)})}catch(e){return tt(e,this.#i.parent),null}}))};$e(()=>{var t;try{t=this.transform_error(e)}catch(e){tt(e,this.#i&&this.#i.parent);return}typeof t==`object`&&t&&typeof t.then==`function`?t.then(o,e=>tt(e,this.#i&&this.#i.parent)):o(t)})}};function mt(e,t,n,r){let i=Xe()?vt:xt;var a=e.filter(e=>!e.settled),o=t.map(i);if(n.length===0&&a.length===0){r(o);return}var s=R,c=ht(),l=a.length===1?a[0].promise:a.length>1?Promise.all(a.map(e=>e.promise)):null;function u(e){if(!(s.f&16384)){c();try{r([...o,...e])}catch(e){tt(e,s)}gt()}}var d=_t();if(n.length===0){l.then(()=>u([])).finally(d);return}function f(){Promise.all(n.map(e=>bt(e))).then(u).catch(e=>tt(e,s)).finally(d)}l?l.then(()=>{c(),f(),gt()}):f()}function ht(){var e=R,t=L,n=N,r=F;return function(i=!0){tr(e),er(t),qe(n),i&&!(e.f&16384)&&(r?.activate(),r?.apply())}}function gt(e=!0){tr(null),er(null),qe(null),e&&F?.deactivate()}function _t(){var e=R,t=e.b,n=F,r=!!t?.is_rendered();return t?.update_pending_count(1,n),n.increment(r,e),()=>{t?.update_pending_count(-1,n),n.decrement(r,e)}}function vt(e){var t=2|w;return R!==null&&(R.f|=O),{ctx:N,deps:null,effects:null,equals:He,f:t,fn:e,reactions:null,rv:0,v:je,wv:0,parent:R,ac:null}}var yt=Symbol(`obsolete`);function bt(e,t,n){let r=R;r===null&&ye();var i=void 0,a=Zt(je),o=!L,s=new Set;return Nn(()=>{var t=R,n=S();i=n.promise;try{Promise.resolve(e()).then(n.resolve,e=>{e!==ge&&n.reject(e)}).finally(gt)}catch(e){n.reject(e),gt()}var c=F;if(o){if(t.f&32768)var l=_t();if(r.b?.is_rendered())c.async_deriveds.get(t)?.reject(yt);else for(let e of s.values())e.reject(yt);s.add(n),c.async_deriveds.set(t,n)}let u=(e,t=void 0)=>{l?.(),s.delete(n),t!==yt&&(c.activate(),t?(a.f|=ce,en(a,t)):(a.f&8388608&&(a.f^=ce),en(a,e)),c.deactivate())};n.promise.then(u,e=>u(null,e||`unknown`))}),On(()=>{for(let e of s)e.reject(yt)}),new Promise(e=>{function t(n){function r(){n===i?e(a):t(i)}n.then(r,r)}t(i)})}function xt(e){let t=vt(e);return t.equals=We,t}function St(e){var t=e.effects;if(t!==null){e.effects=null;for(var n=0;n<t.length;n+=1)Vn(t[n])}}function Ct(e){var t,n=R,r=e.parent;if(!Zn&&r!==null&&e.v!==je&&r.f&24576)return Ne(),e.v;tr(r);try{e.f&=~ae,St(e),t=hr(e)}finally{tr(n)}return t}function wt(e){var t=Ct(e);if(!e.equals(t)&&(e.wv=fr(),(!F?.is_fork||e.deps===null)&&(F===null?e.v=t:(F.capture(e,t,!0),kt?.capture(e,t,!0)),e.deps===null))){rt(e,C);return}Zn||(At===null?it(e):(Dn()||F?.is_fork)&&At.set(e,t))}function Tt(e){if(e.effects!==null)for(let t of e.effects)(t.teardown||t.ac)&&(t.teardown?.(),t.ac?.abort(ge),t.fn!==null&&(t.teardown=b),t.ac=null,_r(t,0),zn(t))}function Et(e){if(e.effects!==null)for(let t of e.effects)t.teardown&&t.fn!==null&&vr(t)}var Dt=null,Ot=null,F=null,kt=null,At=null,jt=null,Mt=!1,Nt=!1,Pt=null,Ft=null,It=0,Lt=1,Rt=class e{id=Lt++;#e=!1;linked=!0;#t=null;#n=null;async_deriveds=new Map;current=new Map;previous=new Map;#r=new Set;#i=new Set;#a=0;#o=new Map;#s=null;#c=[];#l=[];#u=new Set;#d=new Set;#f=new Map;#p=new Set;is_fork=!1;#m=!1;constructor(){Ot===null?Dt=Ot=this:(Ot.#n=this,this.#t=Ot),Ot=this}#h(){if(this.is_fork)return!0;for(let n of this.#o.keys()){for(var e=n,t=!1;e.parent!==null;){if(this.#f.has(e)){t=!0;break}e=e.parent}if(!t)return!0}return!1}skip_effect(e){this.#f.has(e)||this.#f.set(e,{d:[],m:[]}),this.#p.delete(e)}unskip_effect(e,t=e=>this.schedule(e)){var n=this.#f.get(e);if(n){this.#f.delete(e);for(var r of n.d)rt(r,w),t(r);for(r of n.m)rt(r,T),t(r)}this.#p.add(e)}#g(){this.#e=!0,It++>1e3&&(this.#S(),Bt());for(let e of this.#u)this.#d.delete(e),rt(e,w),this.schedule(e);for(let e of this.#d)rt(e,T),this.schedule(e);let t=this.#c;this.#c=[],this.apply();var n=Pt=[],r=[],i=Ft=[];for(let e of t)try{this.#_(e,n,r)}catch(t){throw qt(e),this.#h()||this.discard(),t}if(F=null,i.length>0){var a=e.ensure();for(let e of i)a.schedule(e)}if(Pt=null,Ft=null,this.#h()){this.#b(r),this.#b(n);for(let[e,t]of this.#f)Kt(e,t);i.length>0&&F.#g();return}let o=this.#v();if(o){this.#b(r),this.#b(n),o.#y(this);return}this.#u.clear(),this.#d.clear();for(let e of this.#r)e(this);this.#r.clear(),kt=this,Ht(r),Ht(n),kt=null,this.#s?.resolve();var s=F;if(this.#a===0&&(this.#c.length===0||s!==null)&&(this.#S(),Ge&&(this.#x(),F=s)),this.#c.length>0)if(s!==null){let e=s;e.#c.push(...this.#c.filter(t=>!e.#c.includes(t)))}else s=this;s!==null&&s.#g()}#_(e,t,n){e.f^=C;for(var r=e.first;r!==null;){var i=r.f,a=(i&96)!=0;if(!(a&&i&1024||i&8192||this.#f.has(r))&&r.fn!==null){a?r.f^=C:i&4?t.push(r):Ge&&i&16777224?n.push(r):pr(r)&&(i&16&&this.#d.add(r),vr(r));var o=r.first;if(o!==null){r=o;continue}}for(;r!==null;){var s=r.next;if(s!==null){r=s;break}r=r.parent}}}#v(){for(var e=this.#t;e!==null;){if(!e.is_fork){for(let[t,[,n]]of this.current)if(e.current.has(t)&&!n)return e}e=e.#t}return null}#y(e){for(let[t,n]of e.current)!this.previous.has(t)&&e.previous.has(t)&&this.previous.set(t,e.previous.get(t)),this.current.set(t,n);for(let[t,n]of e.async_deriveds){let e=this.async_deriveds.get(t);e&&n.promise.then(e.resolve).catch(e.reject)}e.async_deriveds.clear(),this.transfer_effects(e.#u,e.#d);let t=e=>{var n=e.reactions;if(n!==null)for(let e of n){var r=e.f;if(r&2)t(e);else{var i=e;r&4194320&&!this.async_deriveds.has(i)&&(this.#d.delete(i),rt(i,w),this.schedule(i))}}};for(let e of this.current.keys())t(e);this.oncommit(()=>e.discard()),e.#S(),F=this,this.#g()}#b(e){for(var t=0;t<e.length;t+=1)ot(e[t],this.#u,this.#d)}capture(e,t,n=!1){e.v!==je&&!this.previous.has(e)&&this.previous.set(e,e.v),e.f&8388608||(this.current.set(e,[t,n]),At?.set(e,t)),this.is_fork||(e.v=t)}activate(){F=this}deactivate(){F=null,At=null}flush(){try{Nt=!0,F=this,this.#g()}finally{It=0,jt=null,Pt=null,Ft=null,Nt=!1,F=null,At=null,Yt.clear()}}discard(){for(let e of this.#i)e(this);this.#i.clear();for(let e of this.async_deriveds.values())e.reject(yt);this.#S(),this.#s?.resolve()}register_created_effect(e){this.#l.push(e)}#x(){for(let u=Dt;u!==null;u=u.#n){var e=u.id<this.id,t=[];for(let[r,[i,a]]of this.current){if(u.current.has(r)){var n=u.current.get(r)[0];if(e&&i!==n)u.current.set(r,[i,a]);else continue}t.push(r)}if(e)for(let[e,t]of this.async_deriveds){let n=u.async_deriveds.get(e);n&&t.promise.then(n.resolve).catch(n.reject)}var r=[...u.current.keys()].filter(e=>!u.current.get(e)[1]);if(!(!u.#e||r.length===0)){var i=r.filter(e=>!this.current.has(e));if(i.length===0)e&&u.discard();else if(t.length>0){if(e)for(let e of this.#p)u.unskip_effect(e,e=>{e.f&4194320?u.schedule(e):u.#b([e])});u.activate();var a=new Set,o=new Map;for(var s of t)Ut(s,i,a,o);o=new Map;var c=[...u.current].filter(([e,t])=>{let n=this.current.get(e);return n?n[0]!==t[0]||n[1]!==t[1]:!0}).map(([e])=>e);if(c.length>0)for(let e of this.#l)!(e.f&155648)&&Wt(e,c,o)&&(e.f&4194320?(rt(e,w),u.schedule(e)):u.#u.add(e));if(u.#c.length>0&&!u.#m){u.apply();for(var l of u.#c)u.#_(l,[],[]);u.#c=[]}u.deactivate()}}}}increment(e,t){if(this.#a+=1,e){let e=this.#o.get(t)??0;this.#o.set(t,e+1)}}decrement(e,t){if(--this.#a,e){let e=this.#o.get(t)??0;e===1?this.#o.delete(t):this.#o.set(t,e-1)}this.#m||(this.#m=!0,$e(()=>{this.#m=!1,this.linked&&this.flush()}))}transfer_effects(e,t){for(let t of e)this.#u.add(t);for(let e of t)this.#d.add(e);e.clear(),t.clear()}oncommit(e){this.#r.add(e)}ondiscard(e){this.#i.add(e)}settled(){return(this.#s??=S()).promise}static ensure(){if(F===null){let t=F=new e;!Nt&&!Mt&&$e(()=>{t.#e||t.flush()})}return F}apply(){if(!Ge||!this.is_fork&&this.#t===null&&this.#n===null){At=null;return}At=new Map;for(let[e,[t]]of this.current)At.set(e,t);for(let t=Dt;t!==null;t=t.#n)if(!(t===this||t.is_fork)){var e=!1;if(t.id<this.id){for(let[n,[,r]]of t.current)if(!r&&this.current.has(n)){e=!0;break}}if(!e)for(let[e,n]of t.previous)At.has(e)||At.set(e,n)}}schedule(e){if(jt=e,e.b?.is_pending&&e.f&16777228&&!(e.f&32768)){e.b.defer_effect(e);return}for(var t=e;t.parent!==null;){t=t.parent;var n=t.f;if(Pt!==null&&t===R&&(Ge||(L===null||!(L.f&2))&&!st))return;if(n&96){if(!(n&1024))return;t.f^=C}}this.#c.push(t)}#S(){if(this.linked){var e=this.#t,t=this.#n;e===null?Dt=t:e.#n=t,t===null?Ot=e:t.#t=e,this.linked=!1}}};function zt(e){var t=Mt;Mt=!0;try{var n;for(e&&(F!==null&&!F.is_fork&&F.flush(),n=e());;){if(et(),F===null)return n;F.flush()}}finally{Mt=t}}function Bt(){try{we()}catch(e){tt(e,jt)}}var Vt=null;function Ht(e){var t=e.length;if(t!==0){for(var n=0;n<t;){var r=e[n++];if(!(r.f&24576)&&pr(r)&&(Vt=new Set,vr(r),r.deps===null&&r.first===null&&r.nodes===null&&r.teardown===null&&r.ac===null&&Un(r),Vt?.size>0)){Yt.clear();for(let e of Vt){if(e.f&24576)continue;let t=[e],n=e.parent;for(;n!==null;)Vt.has(n)&&(Vt.delete(n),t.push(n)),n=n.parent;for(let e=t.length-1;e>=0;e--){let n=t[e];n.f&24576||vr(n)}}Vt.clear()}}Vt=null}}function Ut(e,t,n,r){if(!n.has(e)&&(n.add(e),e.reactions!==null))for(let i of e.reactions){let e=i.f;e&2?Ut(i,t,n,r):e&4194320&&!(e&2048)&&Wt(i,t,r)&&(rt(i,w),Gt(i))}}function Wt(e,t,n){let r=n.get(e);if(r!==void 0)return r;if(e.deps!==null)for(let r of e.deps){if(d.call(t,r))return!0;if(r.f&2&&Wt(r,t,n))return n.set(r,!0),!0}return n.set(e,!1),!1}function Gt(e){F.schedule(e)}function Kt(e,t){if(!(e.f&32&&e.f&1024)){e.f&2048?t.d.push(e):e.f&4096&&t.m.push(e),rt(e,C);for(var n=e.first;n!==null;)Kt(n,t),n=n.next}}function qt(e){rt(e,C);for(var t=e.first;t!==null;)qt(t),t=t.next}var Jt=new Set,Yt=new Map,Xt=!1;function Zt(e,t){return{f:0,v:e,reactions:null,equals:He,rv:0,wv:0}}function Qt(e,t){let n=Zt(e,t);return rr(n),n}function $t(e,t=!1,n=!0){let r=Zt(e);return t||(r.equals=We),Ke&&n&&N!==null&&N.l!==null&&(N.l.s??=[]).push(r),r}function I(e,t,n=!1){return L!==null&&(!$n||L.f&131072)&&Xe()&&L.f&4325394&&(nr===null||!nr.has(e))&&Oe(),en(e,n?an(t):t,Ft)}function en(e,t,n=null){if(!e.equals(t)){Yt.set(e,Zn?t:e.v);var r=Rt.ensure();if(r.capture(e,t),e.f&2){let t=e;e.f&2048&&Ct(t),At===null&&it(t)}e.wv=fr(),rn(e,w,n),Xe()&&R!==null&&R.f&1024&&!(R.f&96)&&(or===null?sr([e]):or.push(e)),!r.is_fork&&Jt.size>0&&!Xt&&tn()}return t}function tn(){Xt=!1;for(let e of Jt){e.f&1024&&rt(e,T);let t;try{t=pr(e)}catch{t=!0}t&&vr(e)}Jt.clear()}function nn(e){I(e,e.v+1)}function rn(e,t,n){var r=e.reactions;if(r!==null)for(var i=Xe(),a=r.length,o=0;o<a;o++){var s=r[o],c=s.f;if(!(!i&&s===R)){var l=(c&w)===0;if(l&&rt(s,t),c&131072)Jt.add(s);else if(c&2){var u=s;At?.delete(u),c&65536||(c&512&&(R===null||!(R.f&2097152))&&(s.f|=ae),rn(u,T,n))}else if(l){var d=s;c&16&&Vt!==null&&Vt.add(d),n===null?Gt(d):n.push(d)}}}}function an(e){if(typeof e!=`object`||!e||le in e)return e;let t=v(e);if(t!==g&&t!==_)return e;var n=new Map,r=l(e),i=Qt(0),a=null,o=ur,s=e=>{if(ur===o)return e();var t=L,n=ur;er(null),dr(o);var r=e();return er(t),dr(n),r};return r&&n.set(`length`,Qt(e.length,a)),new Proxy(e,{defineProperty(e,t,r){(!(`value`in r)||r.configurable===!1||r.enumerable===!1||r.writable===!1)&&Ee();var i=n.get(t);return i===void 0?s(()=>{var e=Qt(r.value,a);return n.set(t,e),e}):I(i,r.value,!0),!0},deleteProperty(e,t){var r=n.get(t);if(r===void 0){if(t in e){let e=s(()=>Qt(je,a));n.set(t,e),nn(i)}}else I(r,je),nn(i);return!0},get(t,r,i){if(r===le)return e;var o=n.get(r),c=r in t;if(o===void 0&&(!c||m(t,r)?.writable)&&(o=s(()=>Qt(an(c?t[r]:je),a)),n.set(r,o)),o!==void 0){var l=z(o);return l===je?void 0:l}return Reflect.get(t,r,i)},getOwnPropertyDescriptor(e,t){var r=Reflect.getOwnPropertyDescriptor(e,t);if(r&&`value`in r){var i=n.get(t);i&&(r.value=z(i))}else if(r===void 0){var a=n.get(t),o=a?.v;if(a!==void 0&&o!==je)return{enumerable:!0,configurable:!0,value:o,writable:!0}}return r},has(e,t){if(t===le)return!0;var r=n.get(t),i=r!==void 0&&r.v!==je||Reflect.has(e,t);return(r!==void 0||R!==null&&(!i||m(e,t)?.writable))&&(r===void 0&&(r=s(()=>Qt(i?an(e[t]):je,a)),n.set(t,r)),z(r)===je)?!1:i},set(e,t,o,c){var l=n.get(t),u=t in e;if(r&&t===`length`)for(var d=o;d<l.v;d+=1){var f=n.get(d+``);f===void 0?d in e&&(f=s(()=>Qt(je,a)),n.set(d+``,f)):I(f,je)}if(l===void 0)(!u||m(e,t)?.writable)&&(l=s(()=>Qt(void 0,a)),I(l,an(o)),n.set(t,l));else{u=l.v!==je;var p=s(()=>an(o));I(l,p)}var h=Reflect.getOwnPropertyDescriptor(e,t);if(h?.set&&h.set.call(c,o),!u){if(r&&typeof t==`string`){var g=n.get(`length`),_=Number(t);Number.isInteger(_)&&_>=g.v&&I(g,_+1)}nn(i)}return!0},ownKeys(e){z(i);var t=Reflect.ownKeys(e).filter(e=>{var t=n.get(e);return t===void 0||t.v!==je});for(var[r,a]of n)a.v!==je&&!(r in e)&&t.push(r);return t},setPrototypeOf(){De()}})}new Set([`copyWithin`,`fill`,`pop`,`push`,`reverse`,`shift`,`sort`,`splice`,`unshift`]);var on,sn,cn,ln;function un(){if(on===void 0){on=window,sn=/Firefox/.test(navigator.userAgent);var e=Element.prototype,t=Node.prototype,n=Text.prototype;cn=m(t,`firstChild`).get,ln=m(t,`nextSibling`).get,y(e)&&(e[fe]=void 0,e[k]=null,e[pe]=void 0,e.__e=void 0),y(n)&&(n[me]=void 0)}}function dn(e=``){return document.createTextNode(e)}function fn(e){return cn.call(e)}function pn(e){return ln.call(e)}function mn(e,t){if(!A)return fn(e);var n=fn(M);if(n===null)n=M.appendChild(dn());else if(t&&n.nodeType!==3){var r=dn();return n?.before(r),Ie(r),r}return t&&yn(n),Ie(n),n}function hn(e,t=1,n=!1){let r=A?M:e;for(var i;t--;)i=r,r=pn(r);if(!A)return r;if(n){if(r?.nodeType!==3){var a=dn();return r===null?i?.after(a):r.before(a),Ie(a),a}yn(r)}return Ie(r),r}function gn(e){e.textContent=``}function _n(){return!Ge||Vt!==null?!1:(R.f&D)!==0}function vn(e,t,n){return t==null||t===`http://www.w3.org/1999/xhtml`?n?document.createElement(e,{is:n}):document.createElement(e):n?document.createElementNS(t,e,{is:n}):document.createElementNS(t,e)}function yn(e){if(e.nodeValue.length<65536)return;let t=e.nextSibling;for(;t!==null&&t.nodeType===3;)t.remove(),e.nodeValue+=t.nodeValue,t=e.nextSibling}var bn=!1;function xn(){bn||(bn=!0,document.addEventListener(`reset`,e=>{Promise.resolve().then(()=>{if(!e.defaultPrevented)for(let t of e.target.elements)t[he]?.()})},{capture:!0}))}function Sn(e){var t=L,n=R;er(null),tr(null);try{return e()}finally{er(t),tr(n)}}function Cn(e,t,n,r=n){e.addEventListener(t,()=>Sn(n));let i=e[he];i?e[he]=()=>{i(),r(!0)}:e[he]=()=>r(!0),xn()}function wn(e){R===null&&(L===null&&Ce(e),Se()),Zn&&xe(e)}function Tn(e,t){var n=t.last;n===null?t.last=t.first=e:(n.next=e,e.prev=n,t.last=e)}function En(e,t){var n=R;n!==null&&n.f&8192&&(e|=E);var r={ctx:N,deps:null,nodes:null,f:e|w|512,first:null,fn:t,last:null,next:null,parent:n,b:n&&n.b,prev:null,teardown:null,wv:0,ac:null};F?.register_created_effect(r);var i=r;if(e&4)Pt===null?Rt.ensure().schedule(r):Pt.push(r);else if(t!==null){try{vr(r)}catch(e){throw Vn(r),e}i.deps===null&&i.teardown===null&&i.nodes===null&&i.first===i.last&&!(i.f&524288)&&(i=i.first,e&16&&e&65536&&i!==null&&(i.f|=ne))}if(i!==null&&(i.parent=n,n!==null&&Tn(i,n),L!==null&&L.f&2&&!(e&64))){var a=L;(a.effects??=[]).push(i)}return r}function Dn(){return L!==null&&!$n}function On(e){let t=En(8,null);return rt(t,C),t.teardown=e,t}function kn(e){wn(`$effect`);var t=R.f;if(!L&&t&32&&N!==null&&!N.i){var n=N;(n.e??=[]).push(e)}else return An(e)}function An(e){return En(4|re,e)}function jn(e){Rt.ensure();let t=En(64|O,e);return(e={})=>new Promise(n=>{e.outro?Wn(t,()=>{Vn(t),n(void 0)}):(Vn(t),n(void 0))})}function Mn(e){return En(4,e)}function Nn(e){return En(se|O,e)}function Pn(e,t=0){return En(8|t,e)}function Fn(e,t=[],n=[],r=[]){mt(r,t,n,t=>{En(8,()=>{e(...t.map(z))})})}function In(e,t=0){return En(16|t,e)}function Ln(e){return En(32|O,e)}function Rn(e){var t=e.teardown;if(t!==null){let e=Zn,n=L;Qn(!0),er(null);try{t.call(null)}finally{Qn(e),er(n)}}}function zn(e,t=!1){var n=e.first;for(e.first=e.last=null;n!==null;){let e=n.ac;e!==null&&Sn(()=>{e.abort(ge)});var r=n.next;n.f&64?n.parent=null:Vn(n,t),n=r}}function Bn(e){for(var t=e.first;t!==null;){var n=t.next;t.f&32||Vn(t),t=n}}function Vn(e,t=!0){var n=!1;(t||e.f&262144)&&e.nodes!==null&&e.nodes.end!==null&&(Hn(e.nodes.start,e.nodes.end),n=!0),e.f|=te,zn(e,t&&!n),_r(e,0);var r=e.nodes&&e.nodes.t;if(r!==null)for(let e of r)e.stop();Rn(e),e.f^=te,e.f|=ee;var i=e.parent;i!==null&&i.first!==null&&Un(e),e.next=e.prev=e.teardown=e.ctx=e.deps=e.fn=e.nodes=e.ac=e.b=null}function Hn(e,t){for(;e!==null;){var n=e===t?null:pn(e);e.remove(),e=n}}function Un(e){var t=e.parent,n=e.prev,r=e.next;n!==null&&(n.next=r),r!==null&&(r.prev=n),t!==null&&(t.first===e&&(t.first=r),t.last===e&&(t.last=n))}function Wn(e,t,n=!0){var r=[];Gn(e,r,!0);var i=()=>{n&&Vn(e),t&&t()},a=r.length;if(a>0){var o=()=>--a||i();for(var s of r)s.out(o)}else i()}function Gn(e,t,n){if(!(e.f&8192)){e.f^=E;var r=e.nodes&&e.nodes.t;if(r!==null)for(let e of r)(e.is_global||n)&&t.push(e);for(var i=e.first;i!==null;){var a=i.next;if(!(i.f&64)){var o=(i.f&65536)!=0||(i.f&32)!=0&&(e.f&16)!=0;Gn(i,t,o?n:!1)}i=a}}}function Kn(e){qn(e,!0)}function qn(e,t){if(e.f&8192){e.f^=E,e.f&1024||(rt(e,w),Rt.ensure().schedule(e));for(var n=e.first;n!==null;){var r=n.next,i=(n.f&65536)!=0||(n.f&32)!=0;qn(n,i?t:!1),n=r}var a=e.nodes&&e.nodes.t;if(a!==null)for(let e of a)(e.is_global||t)&&e.in()}}function Jn(e,t){if(e.nodes)for(var n=e.nodes.start,r=e.nodes.end;n!==null;){var i=n===r?null:pn(n);t.append(n),n=i}}var Yn=null,Xn=!1,Zn=!1;function Qn(e){Zn=e}var L=null,$n=!1;function er(e){L=e}var R=null;function tr(e){R=e}var nr=null;function rr(e){L!==null&&(!Ge||L.f&2)&&(nr??=new Set).add(e)}var ir=null,ar=0,or=null;function sr(e){or=e}var cr=1,lr=0,ur=lr;function dr(e){ur=e}function fr(){return++cr}function pr(e){var t=e.f;if(t&2048)return!0;if(t&2&&(e.f&=~ae),t&4096){for(var n=e.deps,r=n.length,i=0;i<r;i++){var a=n[i];if(pr(a)&&wt(a),a.wv>e.wv)return!0}t&512&&At===null&&rt(e,C)}return!1}function mr(e,t,n=!0){var r=e.reactions;if(r!==null&&!(!Ge&&nr!==null&&nr.has(e)))for(var i=0;i<r.length;i++){var a=r[i];a.f&2?mr(a,t,!1):t===a&&(n?rt(a,w):a.f&1024&&rt(a,T),Gt(a))}}function hr(e){var t=ir,n=ar,r=or,i=L,a=nr,o=N,s=$n,c=ur,l=e.f;ir=null,ar=0,or=null,L=l&96?null:e,nr=null,qe(e.ctx),$n=!1,ur=++lr,e.ac!==null&&(Sn(()=>{e.ac.abort(ge)}),e.ac=null);try{e.f|=oe;var u=e.fn,d=u();e.f|=D;var f=e.deps,p=F?.is_fork;if(ir!==null){var m;if(p||_r(e,ar),f!==null&&ar>0)for(f.length=ar+ir.length,m=0;m<ir.length;m++)f[ar+m]=ir[m];else e.deps=f=ir;if(Dn()&&e.f&512)for(m=ar;m<f.length;m++)(f[m].reactions??=[]).push(e)}else !p&&f!==null&&ar<f.length&&(_r(e,ar),f.length=ar);if(Xe()&&or!==null&&!$n&&f!==null&&!(e.f&6146))for(m=0;m<or.length;m++)mr(or[m],e);if(i!==null&&i!==e){if(lr++,i.deps!==null)for(let e=0;e<n;e+=1)i.deps[e].rv=lr;if(t!==null)for(let e of t)e.rv=lr;or!==null&&(r===null?r=or:r.push(...or))}return e.f&8388608&&(e.f^=ce),d}catch(e){return P(e)}finally{e.f^=oe,ir=t,ar=n,or=r,L=i,nr=a,qe(o),$n=s,ur=c}}function gr(e,t){let n=t.reactions;if(n!==null){var r=u.call(n,e);if(r!==-1){var i=n.length-1;i===0?n=t.reactions=null:(n[r]=n[i],n.pop())}}if(n===null&&t.f&2&&(ir===null||!d.call(ir,t))){var a=t;a.f&512&&(a.f^=512,a.f&=~ae),a.v!==je&&it(a),Tt(a),_r(a,0)}}function _r(e,t){var n=e.deps;if(n!==null)for(var r=t;r<n.length;r++)gr(e,n[r])}function vr(e){var t=e.f;if(!(t&16384)){rt(e,C);var n=R,r=Xn;R=e,Xn=!0;try{t&16777232?Bn(e):zn(e),Rn(e);var i=hr(e);e.teardown=typeof i==`function`?i:null,e.wv=cr}finally{Xn=r,R=n}}}async function yr(){if(Ge)return new Promise(e=>{requestAnimationFrame(()=>e()),setTimeout(()=>e())});await Promise.resolve(),zt()}function z(e){var t=(e.f&2)!=0;if(Yn?.add(e),L!==null&&!$n&&!(R!==null&&R.f&16384)&&(nr===null||!nr.has(e))){var n=L.deps;if(L.f&2097152)e.rv<lr&&(e.rv=lr,ir===null&&n!==null&&n[ar]===e?ar++:ir===null?ir=[e]:ir.push(e));else{L.deps??=[],d.call(L.deps,e)||L.deps.push(e);var r=e.reactions;r===null?e.reactions=[L]:d.call(r,L)||r.push(L)}}if(Zn&&Yt.has(e))return Yt.get(e);if(t){var i=e;if(Zn){var a=i.v;return(!(i.f&1024)&&i.reactions!==null||xr(i))&&(a=Ct(i)),Yt.set(i,a),a}var o=(i.f&512)==0&&!$n&&L!==null&&(Xn||(L.f&512)!=0),s=(i.f&D)===0;pr(i)&&(o&&(i.f|=512),wt(i)),o&&!s&&(Et(i),br(i))}if(At?.has(e))return At.get(e);if(e.f&8388608)throw e.v;return e.v}function br(e){if(e.f|=512,e.deps!==null)for(let t of e.deps)(t.reactions??=[]).push(e),t.f&2&&!(t.f&512)&&(Et(t),br(t))}function xr(e){if(e.v===je)return!0;if(e.deps===null)return!1;for(let t of e.deps)if(Yt.has(t)||t.f&2&&xr(t))return!0;return!1}function Sr(e){var t=$n;try{return $n=!0,e()}finally{$n=t}}[...`allowfullscreen.async.autofocus.autoplay.checked.controls.default.disabled.formnovalidate.indeterminate.inert.ismap.loop.multiple.muted.nomodule.novalidate.open.playsinline.readonly.required.reversed.seamless.selected.webkitdirectory.defer.disablepictureinpicture.disableremoteplayback`.split(`.`)];var Cr=[`touchstart`,`touchmove`];function wr(e){return Cr.includes(e)}var Tr=Symbol(`events`),Er=new Set,Dr=new Set;function Or(e,t,n){(t[Tr]??={})[e]=n}function kr(e){for(var t=0;t<e.length;t++)Er.add(e[t]);for(var n of Dr)n(e)}var Ar=null;function jr(e){var t=this,n=t.ownerDocument,r=e.type,i=e.composedPath?.()||[],a=i[0]||e.target;Ar=e;var o=0,s=Ar===e&&e[Tr];if(s){var c=i.indexOf(s);if(c!==-1&&(t===document||t===window)){e[Tr]=t;return}var l=i.indexOf(t);if(l===-1)return;c<=l&&(o=c)}if(a=i[o]||e.target,a!==t){p(e,`currentTarget`,{configurable:!0,get(){return a||n}});var u=L,d=R;er(null),tr(null);try{for(var f,m=[];a!==null&&a!==t;){try{var h=a[Tr]?.[r];h!=null&&(!a.disabled||e.target===a)&&h.call(a,e)}catch(e){f?m.push(e):f=e}if(e.cancelBubble)break;o++,a=o<i.length?i[o]:null}if(f){for(let e of m)queueMicrotask(()=>{throw e});throw f}}finally{e[Tr]=t,delete e.currentTarget,er(u),tr(d)}}}var Mr=globalThis?.window?.trustedTypes&&globalThis.window.trustedTypes.createPolicy(`svelte-trusted-html`,{createHTML:e=>e});function Nr(e){return Mr?.createHTML(e)??e}function Pr(e){var t=vn(`template`);return t.innerHTML=Nr(e.replaceAll(`<!>`,`<!---->`)),t.content}function Fr(e,t){var n=R;n.nodes===null&&(n.nodes={start:e,end:t,a:null,t:null})}function Ir(e,t){var n=(t&1)!=0,r=(t&2)!=0,i,a=!e.startsWith(`<!>`);return()=>{if(A)return Fr(M,null),M;i===void 0&&(i=Pr(a?e:`<!>`+e),n||(i=fn(i)));var t=r||sn?document.importNode(i,!0):i.cloneNode(!0);if(n){var o=fn(t),s=t.lastChild;Fr(o,s)}else Fr(t,t);return t}}function Lr(e,t){if(A){var n=R;(!(n.f&32768)||n.nodes.end===null)&&(n.nodes.end=M),Le();return}e!==null&&e.before(t)}function Rr(e,t){var n=t==null?``:typeof t==`object`?`${t}`:t;n!==(e[me]??=e.nodeValue)&&(e[me]=n,e.nodeValue=`${n}`)}function zr(e,t){return Vr(e,t)}var Br=new Map;function Vr(e,{target:t,anchor:n,props:r={},events:i,context:a,intro:o=!0,transformError:s}){un();var c=void 0,l=jn(()=>{var o=n??t.appendChild(dn());ft(o,{pending:()=>{}},t=>{Je({});var n=N;if(a&&(n.c=a),i&&(r.$$events=i),A&&Fr(t,null),c=e(t,r)||{},A&&(R.nodes.end=M,M===null||M.nodeType!==8||M.data!==`]`))throw Pe(),Ae;Ye()},s);var l=new Set,u=e=>{for(var n=0;n<e.length;n++){var r=e[n];if(!l.has(r)){l.add(r);var i=wr(r);for(let e of[t,document]){var a=Br.get(e);a===void 0&&(a=new Map,Br.set(e,a));var o=a.get(r);o===void 0?(e.addEventListener(r,jr,{passive:i}),a.set(r,1)):a.set(r,o+1)}}}};return u(f(Er)),Dr.add(u),()=>{for(var e of l)for(let n of[t,document]){var r=Br.get(n),i=r.get(e);--i==0?(n.removeEventListener(e,jr),r.delete(e),r.size===0&&Br.delete(n)):r.set(e,i)}Dr.delete(u),o!==n&&o.parentNode?.removeChild(o)}});return Hr.set(c,l),c}var Hr=new WeakMap,Ur=class{anchor;#e=new Map;#t=new Map;#n=new Map;#r=new Set;#i=!0;constructor(e,t=!0){this.anchor=e,this.#i=t}#a=e=>{if(this.#e.has(e)){var t=this.#e.get(e),n=this.#t.get(t);if(n)Kn(n),this.#r.delete(t);else{var r=this.#n.get(t);r&&(Kn(r.effect),this.#t.set(t,r.effect),this.#n.delete(t),r.fragment.lastChild.remove(),this.anchor.before(r.fragment),n=r.effect)}for(let[t,n]of this.#e){if(this.#e.delete(t),t===e)break;let r=this.#n.get(n);r&&(Vn(r.effect),this.#n.delete(n))}for(let[e,r]of this.#t){if(e===t||this.#r.has(e))continue;let i=()=>{if(Array.from(this.#e.values()).includes(e)){var t=document.createDocumentFragment();Jn(r,t),t.append(dn()),this.#n.set(e,{effect:r,fragment:t})}else Vn(r);this.#r.delete(e),this.#t.delete(e)};this.#i||!n?(this.#r.add(e),Wn(r,i,!1)):i()}}};#o=e=>{this.#e.delete(e);let t=Array.from(this.#e.values());for(let[e,n]of this.#n)t.includes(e)||(Vn(n.effect),this.#n.delete(e))};ensure(e,t){var n=F,r=_n();if(t&&!this.#t.has(e)&&!this.#n.has(e))if(r){var i=document.createDocumentFragment(),a=dn();i.append(a),this.#n.set(e,{effect:Ln(()=>t(a)),fragment:i})}else this.#t.set(e,Ln(()=>t(this.anchor)));if(this.#e.set(n,e),r){for(let[t,r]of this.#t)t===e?n.unskip_effect(r):n.skip_effect(r);for(let[t,r]of this.#n)t===e?n.unskip_effect(r.effect):n.skip_effect(r.effect);n.oncommit(this.#a),n.ondiscard(this.#o)}else A&&(this.anchor=M),this.#a(n)}};function Wr(e,t,n=!1){var r;A&&(r=M,Le());var i=new Ur(e),a=n?ne:0;function o(e,t){if(A){var n=Ve(r);if(e!==parseInt(n.substring(1))){var a=Be();Ie(a),i.anchor=a,j(!1),i.ensure(e,t),j(!0);return}}i.ensure(e,t)}In(()=>{var e=!1;t((t,n=0)=>{e=!0,o(n,t)}),e||o(-1,null)},a)}function Gr(e,t){return t}function Kr(e,t,n){for(var r=[],i=t.length,a,o=t.length,s=0;s<i;s++){let n=t[s];Wn(n,()=>{if(a){if(a.pending.delete(n),a.done.add(n),a.pending.size===0){var t=e.outrogroups;qr(e,f(a.done)),t.delete(a),t.size===0&&(e.outrogroups=null)}}else --o},!1)}if(o===0){var c=r.length===0&&n!==null;if(c){var l=n,u=l.parentNode;gn(u),u.append(l),e.items.clear()}qr(e,t,!c)}else a={pending:new Set(t),done:new Set},(e.outrogroups??=new Set).add(a)}function qr(e,t,n=!0){var r;if(e.pending.size>0){r=new Set;for(let t of e.pending.values())for(let n of t)r.add(e.items.get(n).e)}for(var i=0;i<t.length;i++){var a=t[i];r?.has(a)?(a.f|=ie,Jn(a,document.createDocumentFragment())):Vn(t[i],n)}}var Jr;function Yr(e,t,n,r,i,a=null){var o=e,s=new Map;if(t&4){var c=e;o=A?Ie(fn(c)):c.appendChild(dn())}A&&Le();var u=null,d=xt(()=>{var e=n();return l(e)?e:e==null?[]:f(e)}),p,m=new Map,h=!0;function g(e){v.effect.f&16384||(v.pending.delete(e),v.fallback=u,Zr(v,p,o,t,r),u!==null&&(p.length===0?u.f&33554432?(u.f^=ie,$r(u,null,o)):Kn(u):Wn(u,()=>{u=null})))}function _(e){v.pending.delete(e)}var v={effect:In(()=>{p=z(d);var e=p.length;let c=!1;A&&Ve(o)===`[!`!=(e===0)&&(o=Be(),Ie(o),j(!1),c=!0);for(var l=new Set,f=F,v=_n(),y=0;y<e;y+=1){A&&M.nodeType===8&&M.data===`]`&&(o=M,c=!0,j(!1));var b=p[y],x=r(b,y),S=h?null:s.get(x);S?(S.v&&en(S.v,b),S.i&&en(S.i,y),v&&f.unskip_effect(S.e)):(S=Qr(s,h?o:Jr??=dn(),b,x,y,i,t,n),h||(S.e.f|=ie),s.set(x,S)),l.add(x)}if(e===0&&a&&!u&&(h?u=Ln(()=>a(o)):(u=Ln(()=>a(Jr??=dn())),u.f|=ie)),e>l.size&&be(``,``,``),A&&e>0&&Ie(Be()),!h)if(m.set(f,l),v){for(let[e,t]of s)l.has(e)||f.skip_effect(t.e);f.oncommit(g),f.ondiscard(_)}else g(f);c&&j(!0),z(d)}),flags:t,items:s,pending:m,outrogroups:null,fallback:u};h=!1,A&&(o=M)}function Xr(e){for(;e!==null&&!(e.f&32);)e=e.next;return e}function Zr(e,t,n,r,i){var a=(r&8)!=0,o=t.length,s=e.items,c=Xr(e.effect.first),l,u=null,d,p=[],m=[],h,g,_,v;if(a)for(v=0;v<o;v+=1)h=t[v],g=i(h,v),_=s.get(g).e,_.f&33554432||(_.nodes?.a?.measure(),(d??=new Set).add(_));for(v=0;v<o;v+=1){if(h=t[v],g=i(h,v),_=s.get(g).e,e.outrogroups!==null)for(let t of e.outrogroups)t.pending.delete(_),t.done.delete(_);if(_.f&8192&&(Kn(_),a&&(_.nodes?.a?.unfix(),(d??=new Set).delete(_))),_.f&33554432)if(_.f^=ie,_===c)$r(_,null,n);else{var y=u?u.next:c;_===e.effect.last&&(e.effect.last=_.prev),_.prev&&(_.prev.next=_.next),_.next&&(_.next.prev=_.prev),ei(e,u,_),ei(e,_,y),$r(_,y,n),u=_,p=[],m=[],c=Xr(u.next);continue}if(_!==c){if(l!==void 0&&l.has(_)){if(p.length<m.length){var b=m[0],x;u=b.prev;var S=p[0],C=p[p.length-1];for(x=0;x<p.length;x+=1)$r(p[x],b,n);for(x=0;x<m.length;x+=1)l.delete(m[x]);ei(e,S.prev,C.next),ei(e,u,S),ei(e,C,b),c=b,u=C,--v,p=[],m=[]}else l.delete(_),$r(_,c,n),ei(e,_.prev,_.next),ei(e,_,u===null?e.effect.first:u.next),ei(e,u,_),u=_;continue}for(p=[],m=[];c!==null&&c!==_;)(l??=new Set).add(c),m.push(c),c=Xr(c.next);if(c===null)continue}_.f&33554432||p.push(_),u=_,c=Xr(_.next)}if(e.outrogroups!==null){for(let t of e.outrogroups)t.pending.size===0&&(qr(e,f(t.done)),e.outrogroups?.delete(t));e.outrogroups.size===0&&(e.outrogroups=null)}if(c!==null||l!==void 0){var w=[];if(l!==void 0)for(_ of l)_.f&8192||w.push(_);for(;c!==null;)!(c.f&8192)&&c!==e.fallback&&w.push(c),c=Xr(c.next);var T=w.length;if(T>0){var E=r&4&&o===0?n:null;if(a){for(v=0;v<T;v+=1)w[v].nodes?.a?.measure();for(v=0;v<T;v+=1)w[v].nodes?.a?.fix()}Kr(e,w,E)}}a&&$e(()=>{if(d!==void 0)for(_ of d)_.nodes?.a?.apply()})}function Qr(e,t,n,r,i,a,o,s){var c=o&1?o&16?Zt(n):$t(n,!1,!1):null,l=o&2?Zt(i):null;return{v:c,i:l,e:Ln(()=>(a(t,c??n,l??i,s),()=>{e.delete(r)}))}}function $r(e,t,n){if(e.nodes)for(var r=e.nodes.start,i=e.nodes.end,a=t&&!(t.f&33554432)?t.nodes.start:n;r!==null;){var o=pn(r);if(a.before(r),r===i)return;r=o}}function ei(e,t,n){t===null?e.effect.first=n:t.next=n,n===null?e.effect.last=t:n.prev=t}function ti(e,t=!1){var n=t?` !important;`:`;`,r=``;for(var i of Object.keys(e)){var a=e[i];a!=null&&a!==``&&(r+=` `+i+`: `+a+n)}return r}function ni(e){return e[0]!==`-`||e[1]!==`-`?e.toLowerCase():e}function ri(e,t){if(t){var n=``,r,i;if(Array.isArray(t)?(r=t[0],i=t[1]):r=t,e){e=String(e).replaceAll(/\s*\/\*.*?\*\/\s*/g,``).trim();var a=!1,o=0,s=!1,c=[];r&&c.push(...Object.keys(r).map(ni)),i&&c.push(...Object.keys(i).map(ni));var l=0,u=-1;let t=e.length;for(var d=0;d<t;d++){var f=e[d];if(s?f===`/`&&e[d-1]===`*`&&(s=!1):a?a===f&&(a=!1):f===`/`&&e[d+1]===`*`?s=!0:f===`"`||f===`'`?a=f:f===`(`?o++:f===`)`&&o--,!s&&a===!1&&o===0){if(f===`:`&&u===-1)u=d;else if(f===`;`||d===t-1){if(u!==-1){var p=ni(e.substring(l,u).trim());if(!c.includes(p)){f!==`;`&&d++;var m=e.substring(l,d).trim();n+=` `+m+`;`}}l=d+1,u=-1}}}}return r&&(n+=ti(r)),i&&(n+=ti(i,!0)),n=n.trim(),n===``?null:n}return e==null?null:String(e)}function ii(e,t={},n,r){for(var i in n){var a=n[i];t[i]!==a&&(n[i]==null?e.style.removeProperty(i):e.style.setProperty(i,a,r))}}function ai(e,t,n,r){var i=e[pe];if(A||i!==t){var a=ri(t,r);(!A||a!==e.getAttribute(`style`))&&(a==null?e.removeAttribute(`style`):e.style.cssText=a),e[pe]=t}else r&&(Array.isArray(r)?(ii(e,n?.[0],r[0]),ii(e,n?.[1],r[1],`important`)):ii(e,n,r));return r}var oi=Symbol(`is custom element`),si=Symbol(`is html`),ci=_e?`link`:`LINK`;function li(e){if(A){var t=!1,n=()=>{if(!t){if(t=!0,e.hasAttribute(`value`)){var n=e.value;ui(e,`value`,null),e.value=n}if(e.hasAttribute(`checked`)){var r=e.checked;ui(e,`checked`,null),e.checked=r}}};e[he]=n,$e(n),xn()}}function ui(e,t,n,r){var i=di(e);A&&(i[t]=e.getAttribute(t),t===`src`||t===`srcset`||t===`href`&&e.nodeName===ci)||i[t]!==(i[t]=n)&&(t===`loading`&&(e[de]=n),n==null?e.removeAttribute(t):typeof n!=`string`&&pi(e).includes(t)?e[t]=n:e.setAttribute(t,n))}function di(e){return e[k]??={[oi]:e.nodeName.includes(`-`),[si]:e.namespaceURI===Me}}var fi=new Map;function pi(e){var t=e.getAttribute(`is`)||e.nodeName,n=fi.get(t);if(n)return n;fi.set(t,n=[]);for(var r,i=e,a=Element.prototype;a!==i;){for(var o in r=h(i),r)r[o].set&&o!==`innerHTML`&&o!==`textContent`&&o!==`innerText`&&n.push(o);i=v(i)}return n}function mi(e,t,n=t){var r=new WeakSet;Cn(e,`input`,async i=>{var a=i?e.defaultValue:e.value;if(a=hi(e)?gi(a):a,n(a),F!==null&&r.add(F),await yr(),a!==(a=t())){var o=e.selectionStart,s=e.selectionEnd,c=e.value.length;if(e.value=a??``,s!==null){var l=e.value.length;o===s&&s===c&&l>c?(e.selectionStart=l,e.selectionEnd=l):(e.selectionStart=o,e.selectionEnd=Math.min(s,l))}}}),(A&&e.defaultValue!==e.value||Sr(t)==null&&e.value)&&(n(hi(e)?gi(e.value):e.value),F!==null&&r.add(F)),Pn(()=>{var n=t();if(e===document.activeElement){var i=Ge?kt:F;if(r.has(i))return}hi(e)&&n===gi(e.value)||e.type===`date`&&!n&&!e.value||n!==e.value&&(e.value=n??``)})}function hi(e){var t=e.type;return t===`number`||t===`range`}function gi(e){return e===``?null:+e}function _i(e,t){return e===t||e?.[le]===t}function vi(e={},t,n,r){var i=N.r,a=R;return Mn(()=>{var o,s;return Pn(()=>{o=s,s=r?.()||[],Sr(()=>{_i(n(...s),e)||(t(e,...s),o&&_i(n(...o),e)&&t(null,...o))})}),()=>{let r=a;for(;r!==i&&r.parent!==null&&r.parent.f&33554432;)r=r.parent;let o=()=>{s&&_i(n(...s),e)&&t(null,...s)},c=r.teardown;r.teardown=()=>{o(),c?.()}}}),e}function yi(e,t,n,r){var i=!Ke||(n&2)!=0,a=(n&8)!=0,o=(n&16)!=0,s=r,c=!0,l=void 0,u=()=>o&&i?(l??=vt(r),z(l)):(c&&(c=!1,s=o?Sr(r):r),s);let d;if(a){var f=le in e||ue in e;d=m(e,t)?.set??(f&&t in e?n=>e[t]=n:void 0)}var p,h=!1;a?[p,h]=lt(()=>e[t]):p=e[t],p===void 0&&r!==void 0&&(p=u(),d&&(i&&Te(t),d(p)));var g=i?()=>{var n=e[t];return n===void 0?u():(c=!0,n)}:()=>{var n=e[t];return n!==void 0&&(s=void 0),n===void 0?s:n};if(i&&!(n&4))return g;if(d){var _=e.$$legacy;return(function(e,t){return arguments.length>0?((!i||!t||_||h)&&d(t?g():e),e):g()})}var v=!1,y=(n&1?vt:xt)(()=>(v=!1,g()));a&&z(y);var b=R;return(function(e,t){if(arguments.length>0){let n=t?z(y):i&&a?an(e):e;return I(y,n),v=!0,s!==void 0&&(s=n),e}return Zn&&v||b.f&16384?y.v:z(y)})}function bi(e){N===null&&ve(`onMount`),Ke&&N.l!==null?Si(N).m.push(e):kn(()=>{let t=Sr(e);if(typeof t==`function`)return t})}function xi(e){N===null&&ve(`onDestroy`),bi(()=>()=>Sr(e))}function Si(e){var t=e.l;return t.u??={a:[],b:[],m:[]}}typeof window<`u`&&((window.__svelte??={}).v??=new Set).add(`5`);var Ci=globalThis,wi=Ci.ShadowRoot&&(Ci.ShadyCSS===void 0||Ci.ShadyCSS.nativeShadow)&&`adoptedStyleSheets`in Document.prototype&&`replace`in CSSStyleSheet.prototype,Ti=Symbol(),Ei=new WeakMap,Di=class{constructor(e,t,n){if(this._$cssResult$=!0,n!==Ti)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(wi&&e===void 0){let n=t!==void 0&&t.length===1;n&&(e=Ei.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),n&&Ei.set(t,e))}return e}toString(){return this.cssText}},Oi=e=>new Di(typeof e==`string`?e:e+``,void 0,Ti),ki=(e,t)=>{if(wi)e.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let n of t){let t=document.createElement(`style`),r=Ci.litNonce;r!==void 0&&t.setAttribute(`nonce`,r),t.textContent=n.cssText,e.appendChild(t)}},Ai=wi?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t=``;for(let n of e.cssRules)t+=n.cssText;return Oi(t)})(e):e,{is:ji,defineProperty:Mi,getOwnPropertyDescriptor:Ni,getOwnPropertyNames:Pi,getOwnPropertySymbols:Fi,getPrototypeOf:Ii}=Object,Li=globalThis,Ri=Li.trustedTypes,zi=Ri?Ri.emptyScript:``,Bi=Li.reactiveElementPolyfillSupport,Vi=(e,t)=>e,Hi={toAttribute(e,t){switch(t){case Boolean:e=e?zi:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let n=e;switch(t){case Boolean:n=e!==null;break;case Number:n=e===null?null:Number(e);break;case Object:case Array:try{n=JSON.parse(e)}catch{n=null}}return n}},Ui=(e,t)=>!ji(e,t),Wi={attribute:!0,type:String,converter:Hi,reflect:!1,useDefault:!1,hasChanged:Ui};Symbol.metadata??=Symbol(`metadata`),Li.litPropertyMetadata??=new WeakMap;var Gi=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=Wi){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){let n=Symbol(),r=this.getPropertyDescriptor(e,n,t);r!==void 0&&Mi(this.prototype,e,r)}}static getPropertyDescriptor(e,t,n){let{get:r,set:i}=Ni(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get:r,set(t){let a=r?.call(this);i?.call(this,t),this.requestUpdate(e,a,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??Wi}static _$Ei(){if(this.hasOwnProperty(Vi(`elementProperties`)))return;let e=Ii(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(Vi(`finalized`)))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Vi(`properties`))){let e=this.properties,t=[...Pi(e),...Fi(e)];for(let n of t)this.createProperty(n,e[n])}let e=this[Symbol.metadata];if(e!==null){let t=litPropertyMetadata.get(e);if(t!==void 0)for(let[e,n]of t)this.elementProperties.set(e,n)}this._$Eh=new Map;for(let[e,t]of this.elementProperties){let n=this._$Eu(e,t);n!==void 0&&this._$Eh.set(n,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let n=new Set(e.flat(1/0).reverse());for(let e of n)t.unshift(Ai(e))}else e!==void 0&&t.push(Ai(e));return t}static _$Eu(e,t){let n=t.attribute;return!1===n?void 0:typeof n==`string`?n:typeof e==`string`?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map,t=this.constructor.elementProperties;for(let n of t.keys())this.hasOwnProperty(n)&&(e.set(n,this[n]),delete this[n]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return ki(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,n){this._$AK(e,n)}_$ET(e,t){let n=this.constructor.elementProperties.get(e),r=this.constructor._$Eu(e,n);if(r!==void 0&&!0===n.reflect){let i=(n.converter?.toAttribute===void 0?Hi:n.converter).toAttribute(t,n.type);this._$Em=e,i==null?this.removeAttribute(r):this.setAttribute(r,i),this._$Em=null}}_$AK(e,t){let n=this.constructor,r=n._$Eh.get(e);if(r!==void 0&&this._$Em!==r){let e=n.getPropertyOptions(r),i=typeof e.converter==`function`?{fromAttribute:e.converter}:e.converter?.fromAttribute===void 0?Hi:e.converter;this._$Em=r;let a=i.fromAttribute(t,e.type);this[r]=a??this._$Ej?.get(r)??a,this._$Em=null}}requestUpdate(e,t,n,r=!1,i){if(e!==void 0){let a=this.constructor;if(!1===r&&(i=this[e]),n??=a.getPropertyOptions(e),!((n.hasChanged??Ui)(i,t)||n.useDefault&&n.reflect&&i===this._$Ej?.get(e)&&!this.hasAttribute(a._$Eu(e,n))))return;this.C(e,t,n)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(e,t,{useDefault:n,reflect:r,wrapped:i},a){n&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,a??t??this[e]),!0!==i||a!==void 0)||(this._$AL.has(e)||(this.hasUpdated||n||(t=void 0),this._$AL.set(e,t)),!0===r&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}let e=this.constructor.elementProperties;if(e.size>0)for(let[t,n]of e){let{wrapped:e}=n,r=this[t];!0!==e||this._$AL.has(t)||r===void 0||this.C(t,void 0,n,r)}}let e=!1,t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(e=>e.hostUpdate?.()),this.update(t)):this._$EM()}catch(t){throw e=!1,this._$EM(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(e){}firstUpdated(e){}};Gi.elementStyles=[],Gi.shadowRootOptions={mode:`open`},Gi[Vi(`elementProperties`)]=new Map,Gi[Vi(`finalized`)]=new Map,Bi?.({ReactiveElement:Gi}),(Li.reactiveElementVersions??=[]).push(`2.1.2`);var Ki=globalThis,qi=e=>e,Ji=Ki.trustedTypes,Yi=Ji?Ji.createPolicy(`lit-html`,{createHTML:e=>e}):void 0,Xi=`$lit$`,Zi=`lit$${Math.random().toFixed(9).slice(2)}$`,Qi=`?`+Zi,$i=`<${Qi}>`,ea=document,ta=()=>ea.createComment(``),na=e=>e===null||typeof e!=`object`&&typeof e!=`function`,ra=Array.isArray,ia=e=>ra(e)||typeof e?.[Symbol.iterator]==`function`,aa=`[ 	
\f\r]`,oa=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,sa=/-->/g,ca=/>/g,la=RegExp(`>|${aa}(?:([^\\s"'>=/]+)(${aa}*=${aa}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,`g`),ua=/'/g,da=/"/g,fa=/^(?:script|style|textarea|title)$/i,pa=e=>(t,...n)=>({_$litType$:e,strings:t,values:n}),B=pa(1),V=pa(2),ma=Symbol.for(`lit-noChange`),ha=Symbol.for(`lit-nothing`),ga=new WeakMap,_a=ea.createTreeWalker(ea,129);function va(e,t){if(!ra(e)||!e.hasOwnProperty(`raw`))throw Error(`invalid template strings array`);return Yi===void 0?t:Yi.createHTML(t)}var ya=(e,t)=>{let n=e.length-1,r=[],i,a=t===2?`<svg>`:t===3?`<math>`:``,o=oa;for(let t=0;t<n;t++){let n=e[t],s,c,l=-1,u=0;for(;u<n.length&&(o.lastIndex=u,c=o.exec(n),c!==null);)u=o.lastIndex,o===oa?c[1]===`!--`?o=sa:c[1]===void 0?c[2]===void 0?c[3]!==void 0&&(o=la):(fa.test(c[2])&&(i=RegExp(`</`+c[2],`g`)),o=la):o=ca:o===la?c[0]===`>`?(o=i??oa,l=-1):c[1]===void 0?l=-2:(l=o.lastIndex-c[2].length,s=c[1],o=c[3]===void 0?la:c[3]===`"`?da:ua):o===da||o===ua?o=la:o===sa||o===ca?o=oa:(o=la,i=void 0);let d=o===la&&e[t+1].startsWith(`/>`)?` `:``;a+=o===oa?n+$i:l>=0?(r.push(s),n.slice(0,l)+Xi+n.slice(l)+Zi+d):n+Zi+(l===-2?t:d)}return[va(e,a+(e[n]||`<?>`)+(t===2?`</svg>`:t===3?`</math>`:``)),r]},ba=class e{constructor({strings:t,_$litType$:n},r){let i;this.parts=[];let a=0,o=0,s=t.length-1,c=this.parts,[l,u]=ya(t,n);if(this.el=e.createElement(l,r),_a.currentNode=this.el.content,n===2||n===3){let e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;(i=_a.nextNode())!==null&&c.length<s;){if(i.nodeType===1){if(i.hasAttributes())for(let e of i.getAttributeNames())if(e.endsWith(Xi)){let t=u[o++],n=i.getAttribute(e).split(Zi),r=/([.?@])?(.*)/.exec(t);c.push({type:1,index:a,name:r[2],strings:n,ctor:r[1]===`.`?Ta:r[1]===`?`?Ea:r[1]===`@`?Da:wa}),i.removeAttribute(e)}else e.startsWith(Zi)&&(c.push({type:6,index:a}),i.removeAttribute(e));if(fa.test(i.tagName)){let e=i.textContent.split(Zi),t=e.length-1;if(t>0){i.textContent=Ji?Ji.emptyScript:``;for(let n=0;n<t;n++)i.append(e[n],ta()),_a.nextNode(),c.push({type:2,index:++a});i.append(e[t],ta())}}}else if(i.nodeType===8)if(i.data===Qi)c.push({type:2,index:a});else{let e=-1;for(;(e=i.data.indexOf(Zi,e+1))!==-1;)c.push({type:7,index:a}),e+=Zi.length-1}a++}}static createElement(e,t){let n=ea.createElement(`template`);return n.innerHTML=e,n}};function xa(e,t,n=e,r){if(t===ma)return t;let i=r===void 0?n._$Cl:n._$Co?.[r],a=na(t)?void 0:t._$litDirective$;return i?.constructor!==a&&(i?._$AO?.(!1),a===void 0?i=void 0:(i=new a(e),i._$AT(e,n,r)),r===void 0?n._$Cl=i:(n._$Co??=[])[r]=i),i!==void 0&&(t=xa(e,i._$AS(e,t.values),i,r)),t}var Sa=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:n}=this._$AD,r=(e?.creationScope??ea).importNode(t,!0);_a.currentNode=r;let i=_a.nextNode(),a=0,o=0,s=n[0];for(;s!==void 0;){if(a===s.index){let t;s.type===2?t=new Ca(i,i.nextSibling,this,e):s.type===1?t=new s.ctor(i,s.name,s.strings,this,e):s.type===6&&(t=new Oa(i,this,e)),this._$AV.push(t),s=n[++o]}a!==s?.index&&(i=_a.nextNode(),a++)}return _a.currentNode=ea,r}p(e){let t=0;for(let n of this._$AV)n!==void 0&&(n.strings===void 0?n._$AI(e[t]):(n._$AI(e,n,t),t+=n.strings.length-2)),t++}},Ca=class e{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,n,r){this.type=2,this._$AH=ha,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=r,this._$Cv=r?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=xa(this,e,t),na(e)?e===ha||e==null||e===``?(this._$AH!==ha&&this._$AR(),this._$AH=ha):e!==this._$AH&&e!==ma&&this._(e):e._$litType$===void 0?e.nodeType===void 0?ia(e)?this.k(e):this._(e):this.T(e):this.$(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==ha&&na(this._$AH)?this._$AA.nextSibling.data=e:this.T(ea.createTextNode(e)),this._$AH=e}$(e){let{values:t,_$litType$:n}=e,r=typeof n==`number`?this._$AC(e):(n.el===void 0&&(n.el=ba.createElement(va(n.h,n.h[0]),this.options)),n);if(this._$AH?._$AD===r)this._$AH.p(t);else{let e=new Sa(r,this),n=e.u(this.options);e.p(t),this.T(n),this._$AH=e}}_$AC(e){let t=ga.get(e.strings);return t===void 0&&ga.set(e.strings,t=new ba(e)),t}k(t){ra(this._$AH)||(this._$AH=[],this._$AR());let n=this._$AH,r,i=0;for(let a of t)i===n.length?n.push(r=new e(this.O(ta()),this.O(ta()),this,this.options)):r=n[i],r._$AI(a),i++;i<n.length&&(this._$AR(r&&r._$AB.nextSibling,i),n.length=i)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){let t=qi(e).nextSibling;qi(e).remove(),e=t}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}},wa=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,n,r,i){this.type=1,this._$AH=ha,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=i,n.length>2||n[0]!==``||n[1]!==``?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=ha}_$AI(e,t=this,n,r){let i=this.strings,a=!1;if(i===void 0)e=xa(this,e,t,0),a=!na(e)||e!==this._$AH&&e!==ma,a&&(this._$AH=e);else{let r=e,o,s;for(e=i[0],o=0;o<i.length-1;o++)s=xa(this,r[n+o],t,o),s===ma&&(s=this._$AH[o]),a||=!na(s)||s!==this._$AH[o],s===ha?e=ha:e!==ha&&(e+=(s??``)+i[o+1]),this._$AH[o]=s}a&&!r&&this.j(e)}j(e){e===ha?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??``)}},Ta=class extends wa{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===ha?void 0:e}},Ea=class extends wa{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==ha)}},Da=class extends wa{constructor(e,t,n,r,i){super(e,t,n,r,i),this.type=5}_$AI(e,t=this){if((e=xa(this,e,t,0)??ha)===ma)return;let n=this._$AH,r=e===ha&&n!==ha||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,i=e!==ha&&(n===ha||r);r&&this.element.removeEventListener(this.name,this,n),i&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH==`function`?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},Oa=class{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){xa(this,e)}},ka=Ki.litHtmlPolyfillSupport;ka?.(ba,Ca),(Ki.litHtmlVersions??=[]).push(`3.3.3`);var Aa=(e,t,n)=>{let r=n?.renderBefore??t,i=r._$litPart$;if(i===void 0){let e=n?.renderBefore??null;r._$litPart$=i=new Ca(t.insertBefore(ta(),e),e,void 0,n??{})}return i._$AI(e),i},ja=globalThis,Ma=class extends Gi{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Aa(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return ma}};Ma._$litElement$=!0,Ma.finalized=!0,ja.litElementHydrateSupport?.({LitElement:Ma});var Na=ja.litElementPolyfillSupport;Na?.({LitElement:Ma}),(ja.litElementVersions??=[]).push(`4.2.2`);var Pa={attribute:!0,type:String,converter:Hi,reflect:!1,hasChanged:Ui},Fa=(e=Pa,t,n)=>{let{kind:r,metadata:i}=n,a=globalThis.litPropertyMetadata.get(i);if(a===void 0&&globalThis.litPropertyMetadata.set(i,a=new Map),r===`setter`&&((e=Object.create(e)).wrapped=!0),a.set(n.name,e),r===`accessor`){let{name:r}=n;return{set(n){let i=t.get.call(this);t.set.call(this,n),this.requestUpdate(r,i,e,!0,n)},init(t){return t!==void 0&&this.C(r,void 0,e,t),t}}}if(r===`setter`){let{name:r}=n;return function(n){let i=this[r];t.call(this,n),this.requestUpdate(r,i,e,!0,n)}}throw Error(`Unsupported decorator location: `+r)};function H(e){return(t,n)=>typeof n==`object`?Fa(e,t,n):((e,t,n)=>{let r=t.hasOwnProperty(n);return t.constructor.createProperty(n,e),r?Object.getOwnPropertyDescriptor(t,n):void 0})(e,t,n)}function U(e){return H({...e,state:!0,attribute:!1})}var Ia=(e,t,n)=>(n.configurable=!0,n.enumerable=!0,Reflect.decorate&&typeof t!=`object`&&Object.defineProperty(e,t,n),n);function W(e,t){return(n,r,i)=>{let a=t=>t.renderRoot?.querySelector(e)??null;if(t){let{get:e,set:t}=typeof r==`object`?n:i??(()=>{let e=Symbol();return{get(){return this[e]},set(t){this[e]=t}}})();return Ia(n,r,{get(){let n=e.call(this);return n===void 0&&(n=a(this),(n!==null||this.hasUpdated)&&t.call(this,n)),n}})}return Ia(n,r,{get(){return a(this)}})}}var La;function Ra(e){return(t,n)=>Ia(t,n,{get(){return(this.renderRoot??(La??=document.createDocumentFragment())).querySelectorAll(e)}})}var za=1024,Ba=1048576,Va=1073741824,Ha=`NaN size`,Ua={ATTACHMENT_BROWSE:`Browse`,ATTACHMENT_DRAG_DROP_ZONE:`Drop files here.`},Wa={ATTACHMENT_BROWSE:`参照`,ATTACHMENT_DRAG_DROP_ZONE:`ここにファイルをドロップします。`},Ga={ATTACHMENT_BROWSE:`选择文件`,ATTACHMENT_DRAG_DROP_ZONE:`拖动文件到此。`},Ka={ATTACHMENT_BROWSE:`選擇檔案`,ATTACHMENT_DRAG_DROP_ZONE:`拖曳檔案到此。`},qa={ATTACHMENT_BROWSE:`Examinar`,ATTACHMENT_DRAG_DROP_ZONE:`Suelte los archivos aquí.`},G={ITEMS:{IS_NOT_ARRAY:`'items' property is not array.`,IS_DUPLICATED:`'value' property is not unique in items.`,IS_NOT_SPECIFIED:`'value' property is not specified in items.`},FILES:{IS_NOT_ARRAY:`'files' property is not array.`},VALUE:{IS_NOT_ARRAY:`'value' property is not array.`,IS_NOT_STRING:`'value' property is not string.`},SELECTED_INDEX:{IS_NOT_ARRAY:`'selectedIndex' property is not array.`,IS_NOT_NUMBER:`'selectedIndex' property is not number.`},COLUMNS:{IS_NOT_ARRAY:`'columns' property is not array.`,FIELD_REQUIRED:`'field' property is not specified in columns.`,FIELD_UNIQUE:`'field' property is not unique in columns.`},ROWS_PER_PAGE:{INVALID:`'rowsPerPage' property is not positive integer.`},DATA:{IS_NOT_ARRAY:`'data' property is not array.`},CONTAINER:{INVALID:`'container' property is not HTMLElement.`},ACCEPT:{IS_NOT_STRING:`'accept' property is not string.`},MAX_FILES:{IS_NOT_NUMBER:`'maxFiles' property is not number.`}},Ja={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Ya=e=>(...t)=>({_$litDirective$:e,values:t}),Xa=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,n){this._$Ct=e,this._$AM=t,this._$Ci=n}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}},Za=class extends Xa{constructor(e){if(super(e),this.it=ha,e.type!==Ja.CHILD)throw Error(this.constructor.directiveName+`() can only be used in child bindings`)}render(e){if(e===ha||e==null)return this._t=void 0,this.it=e;if(e===ma)return e;if(typeof e!=`string`)throw Error(this.constructor.directiveName+`() called with a non-string value`);if(e===this.it)return this._t;this.it=e;let t=[e];return t.raw=t,this._t={_$litType$:this.constructor.resultType,strings:t,values:[]}}};Za.directiveName=`unsafeHTML`,Za.resultType=1;var Qa=Ya(Za),$a={AM:`AM`,PM:`PM`},eo=`"max" must be greater than or equal to "min".`,to=`Time is out of valid range.`,no=`'timeStep' property is not number.`,ro=`00:00`,io=`23:59`,ao={VALUE:`'value' property format is not valid.`,MAX:`'max' property format is not valid.`,MIN:`'min' property format is not valid.`,TIME_STEP:`'timeStep' property format is not valid.`},oo={MONTH_SELECT:[`JANUARY`,`FEBRUARY`,`MARCH`,`APRIL`,`MAY`,`JUNE`,`JULY`,`AUGUST`,`SEPTEMBER`,`OCTOBER`,`NOVEMBER`,`DECEMBER`],YEAR_SELECT_POSTFIX:``,WEEK_DAYS:[{text:`SUN`,abbr:`Sunday`},{text:`MON`,abbr:`Monday`},{text:`TUE`,abbr:`Tuesday`},{text:`WED`,abbr:`Wednesday`},{text:`THU`,abbr:`Thursday`},{text:`FRI`,abbr:`Friday`},{text:`SAT`,abbr:`Saturday`}],INVALID_FORMAT:`Format is not valid.`,INVALID_TIME_FORMAT:`Format is not valid.`,CALENDAR_FOOTER_TEXT:{none:`None`,today:`Today`,close:`Close`},TIME_IS_OUT_OF_VALID_RANGE:`Time is out of valid range.`},so={MONTH_SELECT:[`1月`,`2月`,`3月`,`4月`,`5月`,`6月`,`7月`,`8月`,`9月`,`10月`,`11月`,`12月`],YEAR_SELECT_POSTFIX:`年`,WEEK_DAYS:[{text:`日`,abbr:`日`},{text:`月`,abbr:`月`},{text:`火`,abbr:`火`},{text:`水`,abbr:`水`},{text:`木`,abbr:`木`},{text:`金`,abbr:`金`},{text:`土`,abbr:`土`}],INVALID_FORMAT:`日付の形式が不正です。`,INVALID_TIME_FORMAT:`時刻の形式が不正です。`,CALENDAR_FOOTER_TEXT:{none:`選択を解除`,today:`今日`,close:`閉じる`},TIME_IS_OUT_OF_VALID_RANGE:`時刻が有効な範囲外です。`},co={MONTH_SELECT:[`1月`,`2月`,`3月`,`4月`,`5月`,`6月`,`7月`,`8月`,`9月`,`10月`,`11月`,`12月`],YEAR_SELECT_POSTFIX:`年`,WEEK_DAYS:[{text:`周日`,abbr:`周日`},{text:`周一`,abbr:`周一`},{text:`周二`,abbr:`周二`},{text:`周三`,abbr:`周三`},{text:`周四`,abbr:`周四`},{text:`周五`,abbr:`周五`},{text:`周六`,abbr:`周六`}],INVALID_FORMAT:`日期格式不正确。`,INVALID_TIME_FORMAT:`时间格式不正确。`,CALENDAR_FOOTER_TEXT:{none:`清空`,today:`今天`,close:`关闭`},TIME_IS_OUT_OF_VALID_RANGE:`时间超出有效范围。`},lo={MONTH_SELECT:[`1月`,`2月`,`3月`,`4月`,`5月`,`6月`,`7月`,`8月`,`9月`,`10月`,`11月`,`12月`],YEAR_SELECT_POSTFIX:`年`,WEEK_DAYS:[{text:`週日`,abbr:`週日`},{text:`週一`,abbr:`週一`},{text:`週二`,abbr:`週二`},{text:`週三`,abbr:`週三`},{text:`週四`,abbr:`週四`},{text:`週五`,abbr:`週五`},{text:`週六`,abbr:`週六`}],INVALID_FORMAT:`日期格式錯誤。`,INVALID_TIME_FORMAT:`時間格式錯誤。`,CALENDAR_FOOTER_TEXT:{none:`清空`,today:`今天`,close:`關閉`},TIME_IS_OUT_OF_VALID_RANGE:`時間超出有效範圍。`},uo={MONTH_SELECT:[`ENERO`,`FEBRERO`,`MARZO`,`ABRIL`,`MAYO`,`JUNIO`,`JULIO`,`AGOSTO`,`SEPTIEMBRE`,`OCTUBRE`,`NOVIEMBRE`,`DICIEMBRE`],YEAR_SELECT_POSTFIX:``,WEEK_DAYS:[{text:`Do.`,abbr:`Domingo`},{text:`Lu.`,abbr:`Lunes`},{text:`Ma.`,abbr:`Martes`},{text:`Mi.`,abbr:`Miércoles`},{text:`Ju.`,abbr:`Jueves`},{text:`Vi.`,abbr:`Viernes`},{text:`Sá.`,abbr:`Sábado`}],INVALID_FORMAT:`Formato no válido.`,INVALID_TIME_FORMAT:`Formato no válido.`,CALENDAR_FOOTER_TEXT:{none:`Ninguno`,today:`Hoy`,close:`Cerrar`},TIME_IS_OUT_OF_VALID_RANGE:`La hora está fuera del rango válido.`},fo=(e,t)=>{let n=Ao(e,t),r=new Date(n.start),i=[],a=0,o=[];for(;r<=n.end;)i.push(wo(r)),i.length===7&&(o.push(i),i=[]),r.setDate(r.getDate()+1),r=new Date(r),a++;return o},po=(e,t,n,r)=>{let i=[],a=Math.round(t),o=ho(r),s=ho(n);if(a>0){let t=Math.floor((o-s)/a)+1;for(let n=0;n<t;n++){let t=mo(s+n*a,e);i.push(t)}}return i},mo=(e,t)=>{let n,r;n=Math.floor(e/60),r=e%60;let i=n%24<12?$a.AM:$a.PM;return n=t?n%12:n%24,n===0&&t&&(n=12),n<10&&(n=`0`+n),r<10&&(r=`0`+r),{label:n+`:`+r+(t?` `+i:``),value:n+`:`+r+(t?` `+i:``)}},ho=e=>{let t=e.split(`:`),n=parseInt(t[0],10),r=parseInt(t[1],10);return isNaN(n)||isNaN(r)?0:(n<0?n=0:n>=24&&(n=23),r<0?r=0:r>=60&&(r=59),n*60+r)},go=(e,t)=>{let n=ho(e),r=ho(t);return n>r?1:n===r?0:-1},_o=(e,t)=>{let n=e.split(`:`),r=parseInt(n[0],10),i=parseInt(n[1],10),a=r%24;return isNaN(a)||isNaN(i)?{hours:``,minutes:``,suffix:``}:t?xo(r,i):{hours:K(a),minutes:K(i),suffix:``}},vo=(e,t)=>{let n={hours:``,minutes:``,suffix:``},r=e.split(`:`),i=parseInt(r[0],10),a=parseInt(r[1],10),o=i%24;return isNaN(o)||(n.hours=K(t?yo(o):o),n.suffix=t?bo(o):``),isNaN(a)||(n.minutes=K(a)),n},yo=e=>{let t=e%12;return t=t===0?12:t,t},bo=e=>e>=12?$a.PM:$a.AM,xo=(e,t)=>{let n=bo(e);return{hours:K(yo(e)),minutes:K(t),suffix:n}},So=e=>{let[t,n]=e.split(` `),[r,i]=t.split(`:`);return n?`${Co(r,n)}:${i}`:e},Co=(e,t)=>{let n=parseInt(e,10);return t===$a.PM?K(n===12?12:n+12):K(n===12?0:n)},wo=e=>{let t=new Date(e),n=t.getFullYear(),r=K(t.getMonth()+1),i=K(t.getDate());return{text:`${t.getFullYear()}-${t.getMonth()+1}-${t.getDate()}`,attr:`${n}-${r}-${i}`}},To=(e,t)=>{if(t&&!Do(t)){let n=t.split(`-`);if(n.length!==3)return t;let r=n[0],i=n[1],a=n[2];return e===`en`?`${i}/${a}/${r}`:`${r}-${i}-${a}`}return t},Eo=(e,t)=>{if(Do(t))return t;let n=e===`en`,r=n?`/`:`-`,i=t.split(r);return`${n?i[2]:i[0]}-${n?i[0]:i[1]}-${n?i[1]:i[2]}`},Do=e=>e==null||e.length===0||!/[^(^\s*)|(\s*$)]/.test(e),Oo=(e=`ja`)=>{let t=new Date,n=t.getFullYear(),r=K(t.getMonth()+1),i=K(t.getDate());return e===`ja`||e===`zh`?n+`-`+r+`-`+i:r+`/`+i+`/`+n},ko=(e,t)=>{if(t&&!Do(t)){let n=e===`en`,r=n?`/`:`-`;return new Date(`${t}${n?``:`T00:00:00`}`).getDate()===parseInt(t.split(r)[n?1:2],10)?e===`en`?t.match(/^(0[1-9]|1[0-2])\/(0[1-9]|[12][0-9]|3[01])\/(\d{4})$/)!==null:t.match(/^(\d{4})-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/g)!==null:!1}return!1},K=(e,t=2)=>{let n=`0000000000${e}`;return n.substr(n.length-t)},Ao=(e,t)=>{let n=new Date(e,t);n.setDate(1);let r=new Date(n);r.setDate(r.getDate()-r.getDay());let i=new Date(e,t);i.setMonth(i.getMonth()+1,0);let a=new Date(i);a.setDate(a.getDate()+(6-a.getDay()));let o=(a.getTime()-r.getTime())/(1e3*60*60*24);return a.setDate(a.getDate()+(42-o)),{start:r,end:a}},jo=e=>{switch(e){case`en`:return oo;case`zh`:return co;case`ja`:return so;case`zh-TW`:return lo;case`es`:return uo;default:return oo}},Mo=(e=1)=>{let t=[];for(let n=0;n<=59;n+=e)t.push({value:K(n),label:K(n)});return t},No=(e=!1)=>e?Po(`AM`).concat(Po(`PM`)):Fo(),Po=e=>{let t=[];t.push({value:`${e} 12`,label:`${e} 12`});for(let n=1;n<=11;n++)t.push({value:`${e} ${K(n)}`,label:`${e} ${K(n)}`});return t},Fo=()=>{let e=[];e.push({value:`00`,label:`00`});for(let t=1;t<=23;t++)e.push({value:K(t),label:`${K(t)}`});return e},Io=()=>V`
    <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M0 0.5V1.2764L6 7.5L12 1.2764V0.5L6 6.5L0 0.5Z" fill="#888888"/>
    </svg>
    `,Lo=()=>V`
    <svg
      class="kuc-base-datetime-calendar-header-1-25-0__group__button-icon"
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
    </svg>`,Ro=(e={})=>{let{anchorEl:t,popoverEl:n}=e;if(!n||!t)return;let{popoverHeight:r,popoverWidth:i}=e;if(!r)return;let a=t.getBoundingClientRect(),o=window.innerHeight>document.documentElement.clientHeight?document.documentElement.clientHeight:window.innerHeight,s=window.innerWidth>document.documentElement.clientWidth?document.documentElement.clientWidth:window.innerWidth,c=a.top,l=o-a.bottom,u,d;if(l>=r)u=a.bottom,d=r;else if(c>=r)u=a.top-r,d=r;else if(l>=c)u=a.bottom,d=l;else{d=c;let e=Math.min(r||d,d);u=Math.max(0,a.top-e)}n.style.right=`auto`;let f=a.left;if(i){let e=n.offsetWidth;s-a.left<e&&(f=a.right-e)}let p=`${f}px`;n.style.left!==p&&(n.style.left=p),n.style.top=`${u}px`,n.style.maxHeight=`${Math.floor(d)}px`,n.style.overflowY=`auto`};function zo(e){if(!e)return{width:0,height:0};let t=e.style.position,n=e.style.left,r=e.style.top,i=e.style.maxHeight;e.style.position=`fixed`,e.style.left=`-9999px`,e.style.top=`-9999px`,e.style.maxHeight=`none`;let a=e.getBoundingClientRect(),o=a.width||0,s=a.height||0;return e.style.position=t,e.style.left=n,e.style.top=r,e.style.maxHeight=i,{width:o,height:s}}function Bo(e){let t=[],n=e.parentElement,r=/(auto|scroll|overlay)/;for(;n&&n!==document.body&&n!==document.documentElement;){let e=getComputedStyle(n);(r.test(e.overflowY)||r.test(e.overflowX))&&t.push(n),n=n.parentElement}return t.push(window),t}var Vo=e=>{if(!e.parentElement)return{inputToBottom:0,inputToTop:0,inputToRight:0,inputToLeft:0,inputDateWidth:0,inputDateHeight:0};let t=e.closest(`kuc-base-date-1-25-0`)??e.closest(`kuc-mobile-base-date-1-25-0`),{left:n,top:r,bottom:i,width:a,height:o}=(t.getElementsByClassName(`kuc-base-date-1-25-0__input`)[0]??t.getElementsByClassName(`kuc-mobile-base-date-1-25-0__group`)[0]).getBoundingClientRect();return{inputToBottom:window.innerHeight-i,inputToTop:r,inputToRight:window.innerWidth-n,inputToLeft:n+a,inputDateWidth:a,inputDateHeight:o}},Ho=()=>V`
    <svg
      class="kuc-base-datetime-calendar-header-1-25-0__group__button-icon"
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
    </svg>`,q={fromAttribute(e){return e===null},toAttribute(e){return e?null:``}},Uo={fromAttribute:e=>!e||[`en`,`ja`,`zh`,`zh-TW`,`es`].indexOf(e)===-1,toAttribute:e=>{let t=[`en`,`ja`,`zh`,`zh-TW`,`es`];return t.indexOf(e)===-1?t.indexOf(document.documentElement.lang)===-1?`en`:document.documentElement.lang:e}},Wo=e=>e instanceof HTMLElement?e:Qa(e),Go=e=>{if(e===void 0||e===``)return``;let t=[];return e.indexOf(`-`)>0&&(t=e.split(`-`)),t.length<2?`${e}-01-01`:t.length===2?`${K(t[0],4)}-${K(t[1])}-01`:t.length>2?`${K(t[0],4)}-${K(t[1])}-${K(t[2])}`:``},Ko=e=>{if(e.length===5||e===``)return e;let t=e.indexOf(`:`),n=e.substr(0,t),r=e.substr(t+1,5);return`${K(n)}:${K(r)}`},qo=[];for(let e=0;e<256;++e)qo.push((e+256).toString(16).slice(1));function Jo(e,t=0){return(qo[e[t+0]]+qo[e[t+1]]+qo[e[t+2]]+qo[e[t+3]]+`-`+qo[e[t+4]]+qo[e[t+5]]+`-`+qo[e[t+6]]+qo[e[t+7]]+`-`+qo[e[t+8]]+qo[e[t+9]]+`-`+qo[e[t+10]]+qo[e[t+11]]+qo[e[t+12]]+qo[e[t+13]]+qo[e[t+14]]+qo[e[t+15]]).toLowerCase()}var Yo=new Uint8Array(16);function Xo(){return crypto.getRandomValues(Yo)}function Zo(e,t,n){return!t&&!e&&crypto.randomUUID?crypto.randomUUID():Qo(e,t,n)}function Qo(e,t,n){e||={};let r=e.random??e.rng?.()??Xo();if(r.length<16)throw Error(`Random bytes length must be >= 16`);if(r[6]=r[6]&15|64,r[8]=r[8]&63|128,t){if(n||=0,n<0||n+16>t.length)throw RangeError(`UUID byte range ${n}:${n+15} is out of buffer bounds`);for(let e=0;e<16;++e)t[n+e]=r[e];return t}return Jo(r)}var J=class extends Ma{createRenderRoot(){return this}async throwErrorAfterUpdateComplete(e){throw await this.updateComplete,Error(e)}},Y=(e,t,n)=>{let r=new CustomEvent(t,{detail:n,bubbles:!0,composed:!0});return e.dispatchEvent(r)},X=e=>{let t=`kuc-style-1-25-0`,n=document.getElementById(t);n||(n=document.createElement(`style`),n.id=t,document.head.appendChild(n)),n.appendChild(document.createTextNode(e))},Z=()=>Zo(),$o=`
  kuc-base-error-1-25-0,
  kuc-base-error-1-25-0 *,
  kuc-base-error-1-25-0:lang(en),
  kuc-base-error-1-25-0:lang(en) * {
    font-family: sans-serif;
  }
  kuc-base-error-1-25-0:lang(es),
  kuc-base-error-1-25-0:lang(es) * {
    font-family: sans-serif;
  }
  kuc-base-error-1-25-0:lang(ja),
  kuc-base-error-1-25-0:lang(ja) * {
    font-family: "メイリオ", "Hiragino Kaku Gothic ProN", Meiryo,
      sans-serif;
  }
  kuc-base-error-1-25-0:lang(zh),
  kuc-base-error-1-25-0:lang(zh) * {
    font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,
      Hei, "Heiti SC", sans-serif;
  }
  kuc-base-error-1-25-0:lang(zh-TW),
  kuc-base-error-1-25-0:lang(zh-TW) * {
    font-family: "微軟正黑體","Microsoft JhengHei","新宋体",NSimSun,STHeiti,
      Hei,"Heiti SC",sans-serif;
  }
  kuc-base-error-1-25-0 {
    width: 100%;
    font-size: 14px;
    display: inline-table;
    vertical-align: top;
  }
  kuc-base-error-1-25-0[hidden] {
    display: none;
  }
  .kuc-base-error-1-25-0__error {
    line-height: 1.5;
    padding: 4px 18px;
    box-sizing: border-box;
    background-color: #e74c3c;
    color: #ffffff;
    margin: 8px 0px;
    word-break: break-all;
    white-space: normal;
  }
  .kuc-base-error-1-25-0__error[hidden] {
    display: none;
  }
`,es=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},ts=class extends J{constructor(){super(...arguments),this.ariaLive=``,this.guid=``,this.text=``}render(){return B`
      ${this.ariaLive&&this.ariaLive!==``?B`
            <div
              class="kuc-base-error-1-25-0__error"
              .id="${this.guid}-error"
              role="alert"
              aria-live="${this.ariaLive}"
              ?hidden="${!this.text}"
            >
              ${this.text}
            </div>
          `:B`
            <div
              class="kuc-base-error-1-25-0__error"
              .id="${this.guid}-error"
              role="alert"
              ?hidden="${!this.text}"
            >
              ${this.text}
            </div>
          `}
    `}};es([H({type:String})],ts.prototype,`ariaLive`,void 0),es([H({type:String})],ts.prototype,`guid`,void 0),es([H({type:String})],ts.prototype,`text`,void 0),window.customElements.get(`kuc-base-error-1-25-0`)||(X($o),window.customElements.define(`kuc-base-error-1-25-0`,ts));var ns=`
  kuc-base-label-1-25-0,
  kuc-base-label-1-25-0 *,
  kuc-base-label-1-25-0:lang(en),
  kuc-base-label-1-25-0:lang(en) * {
    font-family: sans-serif;
  }
  kuc-base-label-1-25-0:lang(es),
  kuc-base-label-1-25-0:lang(es) * {
    font-family: sans-serif;
  }
  kuc-base-label-1-25-0:lang(ja),
  kuc-base-label-1-25-0:lang(ja) * {
    font-family: "メイリオ", "Hiragino Kaku Gothic ProN", Meiryo,
    sans-serif;
  }
  kuc-base-label-1-25-0:lang(zh),
  kuc-base-label-1-25-0:lang(zh) * {
    font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,
    Hei, "Heiti SC", sans-serif;
  }
  kuc-base-label-1-25-0:lang(zh-TW),
  kuc-base-label-1-25-0:lang(zh-TW) * {
    font-family: "微軟正黑體","Microsoft JhengHei","新宋体",NSimSun,STHeiti,
      Hei,"Heiti SC",sans-serif;
  }
  kuc-base-label-1-25-0 {
    font-size: 14px;
    color: #333333;
    display: inline-table;
    vertical-align: top;
  }
  kuc-base-label-1-25-0[hidden] {
    display: none;
  }
  .kuc-base-label-1-25-0__required-icon {
    font-size: 20px;
    vertical-align: -3px;
    color: #e74c3c;
    margin-left: 4px;
    line-height: 1;
  }
  .kuc-base-label-1-25-0__required-icon[hidden] {
    display: none;
  }
`,rs=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},is=class extends J{constructor(){super(...arguments),this.requiredIcon=!1,this.guid=``,this.text=``}render(){return B`
      ${this._getTextTemplate()}
      <span
        class="kuc-base-label-1-25-0__required-icon"
        ?hidden="${!this.requiredIcon}"
        >*</span
      >
    `}_getTextTemplate(){return this.guid&&this.guid!==``?B`
          <span class="kuc-base-label-1-25-0__text" .id="${this.guid}-group"
            >${this.text}</span
          >
        `:B` <span class="kuc-base-label-1-25-0__text">${this.text}</span> `}};rs([H({type:Boolean})],is.prototype,`requiredIcon`,void 0),rs([H({type:String})],is.prototype,`guid`,void 0),rs([H({type:String})],is.prototype,`text`,void 0),window.customElements.get(`kuc-base-label-1-25-0`)||(X(ns),window.customElements.define(`kuc-base-label-1-25-0`,is));function Q(e){if(!e||typeof e!=`object`)return{};let t={...e};for(let e in t)Object.prototype.hasOwnProperty.call(t,e)&&t[e]===void 0&&delete t[e];return t}function as(e){return!!(e===``||e===void 0||/(^(\d{1,4})-(0?[1-9]|1[0-2])-(0?[1-9]|[12][0-9]|3[01])$)|(^(\d{1,4})$)|(^(\d{1,4})-(0?[1-9]|1[0-2])$)/g.test(e))}function os(e){return!!(e===``||/^(2[0-3]|[01]?[0-9]):([0-9]|[0-5][0-9])$/.test(e))}function ss(e,t,n){let r=Math.round(e),i=ho(t),a=ho(n);return!isNaN(r)&&r>0&&r<=i-a}function cs(e){let[t,n,r]=e.split(`-`),i=new Date(`${e}T00:00:00`),a=i.getFullYear(),o=i.getMonth(),s=i.getDate();return a===Number(t)&&o===Number(n)-1&&s===Number(r)}function ls(e){return typeof e==`string`}function us(e,t){return!(!/(^(\d{4})-(0[0-9]|1[0-2])-(0[1-9]|([12][0-9]|3[01]))$)|(^(\d{4})$)|(^(\d{4})-(0[0-9]|1[0-2])$)/g.test(e)||!/(^([01][0-9]|2[0-3])$)|(^([01][0-9]|2[0-3]):([0-5][0-9]))$|(^([01][0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9])$/.test(t))}function ds(e){return e.length<2?!0:!e.some(t=>e.indexOf(t)!==e.lastIndexOf(t))}function fs(e){return!(e<.5||!gs(e))}var ps=e=>{for(let t=0;t<e.length;t++)if(!Object.prototype.hasOwnProperty.call(e[t],`field`))return!1;return!0},ms=e=>{let t=e.map(e=>e.field);return t.some(function(e,n){return t.indexOf(e)!==n})};function hs(e){return/^[1-9]\d*$/.test(e)}function gs(e){return typeof e==`number`&&!Number.isNaN(e)}function $(e){return Array.isArray(e)}var _s=e=>{if(e instanceof HTMLElement)return!0;let t=document.createElement(`div`);return t.innerHTML=e,t.childElementCount>0},vs=`
  kuc-attachment-1-25-0,
  kuc-attachment-1-25-0 *,
  kuc-attachment-1-25-0:lang(en),
  kuc-attachment-1-25-0:lang(en) * {
    font-family: sans-serif;
  }
  kuc-attachment-1-25-0:lang(ja),
  kuc-attachment-1-25-0:lang(ja) * {
    font-family: "メイリオ", "Hiragino Kaku Gothic ProN", Meiryo,
        sans-serif;
  }
  kuc-attachment-1-25-0:lang(zh),
  kuc-attachment-1-25-0:lang(zh) * {
    font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,
        Hei, "Heiti SC", sans-serif;
  }
  kuc-attachment-1-25-0:lang(zh-TW),
  kuc-attachment-1-25-0:lang(zh-TW) * {
    font-family: "微軟正黑體","Microsoft JhengHei","新宋体",NSimSun,STHeiti,
        Hei,"Heiti SC",sans-serif;
  }
  kuc-attachment-1-25-0:lang(es),
  kuc-attachment-1-25-0:lang(es) * {
    font-family: sans-serif;
  }
  kuc-attachment-1-25-0 {
    font-size: 14px;
    display: inline-table;
    vertical-align: top;
    width: var(--kuc-attachment-width, 191px);
    min-width: var(--kuc-attachment-width, 191px);
  }
  kuc-attachment-1-25-0[hidden] {
    display: none;
  }
  .kuc-attachment-1-25-0__group {
    width: 100%;
    height: auto;
    box-sizing: border-box;
    position: relative;
    display: block;
  }
  .kuc-attachment-1-25-0__group__label {
    display: inline-block;
    padding: 4px 0 8px 0;
    color: #333333;
    white-space: nowrap;
  }
  .kuc-attachment-1-25-0__group__label[hidden] {
    display: none;
  }
  .kuc-attachment-1-25-0__group__files {
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
  .kuc-attachment-1-25-0__group__files--disabled {
    cursor: not-allowed;
  }
  .kuc-attachment-1-25-0__group__files__browse-button {
    border: 1px solid transparent;
    position: relative;
    display: inline-block;
    margin-right: 16px;
    padding: 8px;
    text-decoration: none;
  }
  .kuc-attachment-1-25-0__group__files__browse-button[hidden]{
    display: none;
  }
  .kuc-attachment-1-25-0__group__files__browse-button:focus-within {
    border: 1px solid #3498db;
  }
  .kuc-attachment-1-25-0__group__files__browse-button:hover
  .kuc-attachment-1-25-0__group__files__browse-button__text {
    color: #217dbb;
  }
  .kuc-attachment-1-25-0__group__files__browse-button__text {
    color: #3498db;
    font-size: 14px;
  }
  .kuc-attachment-1-25-0__group__files__browse-button__input-container {
    opacity: 0;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    overflow: hidden;
    display: inline-block;
  }
  .kuc-attachment-1-25-0__group__files__browse-button__input-container__input {
    cursor: pointer;
    font-size: 999px;
    vertical-align: middle;
    height: 100%;
    width: 100%;
    line-height: 1.5;
  }
  .kuc-attachment-1-25-0__group__files__display-area {
    padding-inline-start: 0px;
    list-style-type: disc;
    margin-block-start: 0em;
    margin-block-end: 0em;
  }
  .kuc-attachment-1-25-0__group__files__display-area__item {
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
  .kuc-attachment-1-25-0__group__files__display-area__item__name {
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
  .kuc-attachment-1-25-0__group__files__display-area__item__remove-button__container {
    display: inline-block;
    position: absolute;
    top: calc(50% - 12px);
    left: 0;
    width: 24px;
    height: 24px;
  }
  .kuc-attachment-1-25-0__group__files__display-area__item__remove-button__container[hidden] {
    display: none;
  }
  .kuc-attachment-1-25-0__group__files__display-area__item__remove-button__container__button {
    background-color: #f2f4f6;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid transparent;
    padding: 0px;
    width:100%;
    height:100%;
  }
  .kuc-attachment-1-25-0__group__files__display-area__item__remove-button__container__button:hover {
    background: #d8e1e6;
  }
  .kuc-attachment-1-25-0__group__files__display-area__item__remove-button__container__button:focus-within {
    border: 1px solid #3498db;
  }
  .kuc-attachment-1-25-0__group__files__display-area__item__remove-button__container__button:focus {
    outline: none;
  }
  .kuc-attachment-1-25-0__group__files__display-area__item__size {
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
  .kuc-attachment-1-25-0__group__files__droppable {
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    margin: auto 0;
  }
  .kuc-attachment-1-25-0__group__files__droppable[hidden] {
    display: none;
  }
  .kuc-attachment-1-25-0__group__files__droppable__text {
    background-color: #e2f2fe;
    border: dashed 2px #3498db;
    display: table-cell;
    vertical-align: middle;
    text-align: center;
    color: #3498db;
    font-size: 14px;
  }
  .kuc-attachment-1-25-0__group__files__browse-message {
    display: inline-block;
    color: var(--kuc-attachment-message-color, #888888);
    font-size: var(--kuc-attachment-message-font-size, 14px);
    margin: 3px 0 0;
    word-break: break-all;
  }
  .kuc-attachment-1-25-0__group__files__browse-message--disabled {
    color: #888888;
  }
  .kuc-attachment-1-25-0__group__files__browse-message[hidden] {
    display: none;
  }
  .kuc-attachment-1-25-0__group__files__not-droppable--dragenter {
    visibility: hidden;
  }
`,ys=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},bs;(()=>{if(bs=window.customElements.get(`kuc-attachment-1-25-0`),bs)return;class e extends J{constructor(e){super(),this.accept=``,this.className=``,this.error=``,this.id=``,this.label=``,this.language=`auto`,this.message=``,this.disabled=!1,this.requiredIcon=!1,this.visible=!0,this.files=[],this._isDraging=!1,this._dragEnterCounter=0,this._locale=this._getLocale(),this._isFileOrDirectoryDrag=e=>{if(!e.dataTransfer)return!1;if(e.dataTransfer.items!==void 0){for(let t=0;t<e.dataTransfer.items.length;t++)if(e.dataTransfer.items[t].kind.toLowerCase()===`file`)return!0}if(e.dataTransfer.types!==void 0){for(let t=0;t<e.dataTransfer.types.length;t++)if(e.dataTransfer.types[t].toLowerCase()===`files`)return!0}return!1},this._GUID=Z();let t=Q(e);Object.assign(this,t)}shouldUpdate(e){return e.has(`files`)&&!$(this.files)?(this.throwErrorAfterUpdateComplete(G.FILES.IS_NOT_ARRAY),!1):e.has(`accept`)&&!ls(this.accept)?(this.throwErrorAfterUpdateComplete(G.ACCEPT.IS_NOT_STRING),!1):e.has(`maxFiles`)&&this.maxFiles!==void 0&&!gs(this.maxFiles)?(this.throwErrorAfterUpdateComplete(G.MAX_FILES.IS_NOT_NUMBER),!1):!0}willUpdate(e){e.has(`language`)&&(this._locale=this._getLocale())}render(){return B`
        <div class="kuc-attachment-1-25-0__group">
          <label
            class="kuc-attachment-1-25-0__group__label"
            ?hidden="${!this.label}"
            for="${this._GUID}-input"
            @click="${this._handleClickLabel}"
          >
            <kuc-base-label-1-25-0
              .text="${this.label}"
              .requiredIcon="${this.requiredIcon}"
            ></kuc-base-label-1-25-0>
          </label>
          <div
            class="kuc-attachment-1-25-0__group__files ${this.disabled?` kuc-attachment-1-25-0__group__files--disabled`:``}"
            @dragenter="${this._handleDragEnter}"
            @dragover="${this._handleDragOver}"
            @dragleave="${this._handleDragLeave}"
            @drop="${this._handleDragDrop}"
          >
            <div
              class="kuc-attachment-1-25-0__group__files__droppable"
              ?hidden="${!this._isDraging}"
            >
              <div class="kuc-attachment-1-25-0__group__files__droppable__text">
                ${this._locale.ATTACHMENT_DRAG_DROP_ZONE}
              </div>
            </div>
            <ul
              class="kuc-attachment-1-25-0__group__files__display-area${this._isDraging?` kuc-attachment-1-25-0__group__files__not-droppable--dragenter`:``}"
            >
              ${this.files.map((e,t)=>this._getAttachmentItemTemplate(e,t))}
            </ul>
            <div
              class="kuc-attachment-1-25-0__group__files__browse-button${this._isDraging?` kuc-attachment-1-25-0__group__files__not-droppable--dragenter`:``}"
              ?hidden="${this.disabled||this._isMaxFilesReached()}"
            >
              <span class="kuc-attachment-1-25-0__group__files__browse-button__text"
                >${this._locale.ATTACHMENT_BROWSE}</span
              >
              <div
                class="kuc-attachment-1-25-0__group__files__browse-button__input-container"
              >
                <input
                  class="kuc-attachment-1-25-0__group__files__browse-button__input-container__input"
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
              class="kuc-attachment-1-25-0__group__files__browse-message${this.disabled?` kuc-attachment-1-25-0__group__files__browse-message--disabled`:``}"
              ?hidden="${!this.message}"
            >
              ${this.message}
            </p>
          </div>
          <kuc-base-error-1-25-0
            class="kuc-attachment-1-25-0__error"
            ?hidden="${!this.error}"
            .text="${this.error}"
            .guid="${this._GUID}"
          ></kuc-base-error-1-25-0>
        </div>
      `}_getAttachmentItemTemplate(e,t){return B`
        <li class="kuc-attachment-1-25-0__group__files__display-area__item">
          <div
            title="${e.name||``}"
            class="kuc-attachment-1-25-0__group__files__display-area__item__name"
          >
            ${e.name||``}
          </div>
          <div
            class="kuc-attachment-1-25-0__group__files__display-area__item__remove-button__container"
            ?hidden="${this.disabled}"
          >
            <button
              class="kuc-attachment-1-25-0__group__files__display-area__item__remove-button__container__button"
              type="button"
              aria-label="Cancel File"
              data-file-index="${t}"
              @click="${this._handleClickFileRemove}"
              tabindex="0"
            >
              ${this._getRemoveButtonIcon()}
            </button>
          </div>
          <span class="kuc-attachment-1-25-0__group__files__display-area__item__size">
            ${this._getFileSize(e.size)}
          </span>
        </li>
      `}async updated(e){await this.updateComplete,this._updateFileNameMaxWidth()}_updateFileNameMaxWidth(){let e=this._labelEl.getBoundingClientRect().width;this._fileItemsEl.forEach(t=>{t.style.maxWidth=`calc(var(--kuc-attachment-width, ${e<191?191:e}px) - 14px)`})}_getRemoveButtonIcon(){return V`<svg
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
      </svg>`}_getLanguage(){let e=[`en`,`ja`,`zh`,`zh-TW`,`es`];return e.indexOf(this.language)===-1?e.indexOf(document.documentElement.lang)===-1?`en`:document.documentElement.lang:this.language}_getLocale(){switch(this._getLanguage()){case`en`:return Ua;case`zh`:return Ga;case`zh-TW`:return Ka;case`ja`:return Wa;case`es`:return qa;default:return Ua}}_handleClickFileRemove(e){let t=e.currentTarget,n=parseInt(t.getAttribute(`data-file-index`),10);if(this.files){n===this.files.length-1&&this._inputEl.focus();let e=[...this.files];this.files.splice(n,1);let t={oldFiles:e,files:this.files,type:`remove-file`,fileIndex:[n]};Y(this,`change`,t),this.requestUpdate(),n<=this.files.length-1&&this._fileRemoveButtons[n].focus()}}_handleClickLabel(e){e.preventDefault()}_handleDragEnter(e){!(this.disabled||this._isMaxFilesReached())&&(this._dragEnterCounter++,this._dragEnterCounter===1&&this._isFileOrDirectoryDrag(e))&&(e.preventDefault(),this._groupFilesEl.style.height=this._groupFilesEl.getBoundingClientRect().height+`px`,this._dragTextEl.style.width=this._groupFilesEl.getBoundingClientRect().width-2+`px`,this._dragTextEl.style.height=this._groupFilesEl.getBoundingClientRect().height-6+`px`,this._isDraging=!0)}_handleDragOver(e){this.disabled||(e.stopPropagation(),this._isFileOrDirectoryDrag(e)&&e.preventDefault())}_handleDragDrop(e){this.disabled||!this._isDraging||(e.preventDefault(),this._handleDragLeave(),this._isFileDrop(e)&&this._addFiles(e))}_isFileDrop(e){if(e.dataTransfer&&e.dataTransfer.items){for(let t=0;t<e.dataTransfer.items.length;t++)if(typeof e.dataTransfer.items[t].webkitGetAsEntry==`function`&&e.dataTransfer.items[t].webkitGetAsEntry()?.isDirectory)return!1}return!0}_handleDragLeave(){this.disabled||(this._dragEnterCounter--,this._dragEnterCounter===0&&(this._groupFilesEl.style.height=`var(--kuc-attachment-height, auto)`,this._isDraging=!1))}_handleChangeFiles(e){e.preventDefault(),e.stopPropagation(),this._addFiles(e)}_addFiles(e){if(this.files){let t=e.dataTransfer?e.dataTransfer.files:e.target.files;if(t=Object.keys(t).map(e=>t[e]),this.accept&&(t=t.filter(e=>this._matchesAccept(e))),this._hasMaxFilesLimit()){let e=Math.max(0,this._effectiveMaxFiles()-this.files.length);t=t.slice(0,e)}if(t.length===0){this._inputEl.value=``;return}let n=[...this.files],r=t.map((e,t)=>n.length+t);t.forEach(e=>this.files.push(e));let i={oldFiles:n,files:this.files,type:`add-file`,fileIndex:r};Y(this,`change`,i),this.requestUpdate()}this._inputEl.value=``}_matchesAccept(e){let t=this.accept.split(`,`).map(e=>e.trim().toLowerCase()).filter(e=>e&&(e.startsWith(`.`)||e.includes(`/`)));if(t.length===0)return!0;let n=e.name.toLowerCase(),r=e.type.toLowerCase();return t.some(e=>{if(e===`*/*`)return!0;if(e.startsWith(`.`))return n.endsWith(e);if(e.endsWith(`/*`)){let t=e.slice(0,-1);return r.startsWith(t)}return r===e})}_hasMaxFilesLimit(){return this.maxFiles!==void 0&&this.maxFiles>=1}_effectiveMaxFiles(){return Math.floor(this.maxFiles)}_isMaxFilesReached(){return this._hasMaxFilesLimit()&&this.files.length>=this._effectiveMaxFiles()}_getFileSize(e){return typeof e==`number`?this._formatFileSize(e):hs(e)?this._formatFileSize(parseInt(e,10)):Ha}_formatFileSize(e){return e>=1073741824?Math.round(e/Va)+` GB`:e>=1048576?Math.round(e/Ba)+` MB`:e>=1024?Math.round(e/za)+` KB`:Math.round(e)+` bytes`}}ys([H({type:String})],e.prototype,`accept`,void 0),ys([H({type:String,reflect:!0,attribute:`class`})],e.prototype,`className`,void 0),ys([H({type:String})],e.prototype,`error`,void 0),ys([H({type:String,reflect:!0,attribute:`id`})],e.prototype,`id`,void 0),ys([H({type:String})],e.prototype,`label`,void 0),ys([H({type:String,attribute:`lang`,reflect:!0,converter:Uo})],e.prototype,`language`,void 0),ys([H({type:String})],e.prototype,`message`,void 0),ys([H({type:Boolean})],e.prototype,`disabled`,void 0),ys([H({type:Boolean})],e.prototype,`requiredIcon`,void 0),ys([H({type:Boolean,attribute:`hidden`,reflect:!0,converter:q})],e.prototype,`visible`,void 0),ys([H({type:Number})],e.prototype,`maxFiles`,void 0),ys([H({type:Array})],e.prototype,`files`,void 0),ys([U()],e.prototype,`_isDraging`,void 0),ys([W(`.kuc-attachment-1-25-0__group__files`)],e.prototype,`_groupFilesEl`,void 0),ys([W(`.kuc-attachment-1-25-0__group__files__droppable__text`)],e.prototype,`_dragTextEl`,void 0),ys([W(`.kuc-attachment-1-25-0__group__files__browse-button__input-container__input`)],e.prototype,`_inputEl`,void 0),ys([W(`.kuc-attachment-1-25-0__group__label`)],e.prototype,`_labelEl`,void 0),ys([Ra(`.kuc-attachment-1-25-0__group__files__display-area__item__name`)],e.prototype,`_fileItemsEl`,void 0),ys([Ra(`.kuc-attachment-1-25-0__group__files__display-area__item__remove-button__container__button`)],e.prototype,`_fileRemoveButtons`,void 0),window.customElements.define(`kuc-attachment-1-25-0`,e),X(vs),bs=e})();var xs=`
  kuc-button-1-25-0,
  kuc-button-1-25-0 *,
  kuc-button-1-25-0:lang(en),
  kuc-button-1-25-0:lang(en) * {
    font-family: sans-serif;
  }
  kuc-button-1-25-0:lang(es),
  kuc-button-1-25-0:lang(es) * {
    font-family: sans-serif;
  }
  kuc-button-1-25-0:lang(ja),
  kuc-button-1-25-0:lang(ja) * {
    font-family: "メイリオ", "Hiragino Kaku Gothic ProN", Meiryo, sans-serif;
  }
  kuc-button-1-25-0:lang(zh),
  kuc-button-1-25-0:lang(zh) * {
    font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti, Hei,
      "Heiti SC", sans-serif;
  }
  kuc-button-1-25-0:lang(zh-TW),
  kuc-button-1-25-0:lang(zh-TW) * {
    font-family: "微軟正黑體","Microsoft JhengHei","新宋体",NSimSun,STHeiti,
      Hei,"Heiti SC",sans-serif;
  }
  kuc-button-1-25-0 {
    display: inline-block;
    vertical-align: top;
  }
  kuc-button-1-25-0[hidden] {
    display: none;
  }
  .kuc-button-1-25-0__button {
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
  .kuc-button-1-25-0__button--normal {
    background-color: var(--kuc-button-background-color, #f7f9fa);
    color: var(--kuc-button-text-color, #3498db);
    border: 1px solid #e3e7e8;
  }
  .kuc-button-1-25-0__button--normal:hover,
  .kuc-button-1-25-0__button--normal:focus-visible,
  .kuc-button-1-25-0__button--normal:active {
    cursor: pointer;
  }
  .kuc-button-1-25-0__button--normal:hover {
    background-color: var(--kuc-button-background-color-hover, #c8d6dd);
  }
  .kuc-button-1-25-0__button--normal:focus-visible {
    background-color: var(--kuc-button-background-color-focus, #c8d6dd);
  }
  .kuc-button-1-25-0__button--normal:active {
    background-color: var(--kuc-button-background-color-active, #c8d6dd);
  }
  .kuc-button-1-25-0__button--submit {
    background-color: var(--kuc-button-background-color, #3498db);
    color: var(--kuc-button-text-color, #ffffff);
    border: 1px solid #e3e7e8;
  }
  .kuc-button-1-25-0__button--submit:hover,
  .kuc-button-1-25-0__button--submit:focus-visible,
  .kuc-button-1-25-0__button--submit:active {
    cursor: pointer;
  }
  .kuc-button-1-25-0__button--submit:hover {
    background-color: var(--kuc-button-background-color-hover, #1d6fa5);
  }
  .kuc-button-1-25-0__button--submit:focus-visible {
    background-color: var(--kuc-button-background-color-focus, #1d6fa5);
  }
  .kuc-button-1-25-0__button--submit:active {
    background-color: var(--kuc-button-background-color-active, #1d6fa5);
  }
  .kuc-button-1-25-0__button--alert {
    background-color: var(--kuc-button-background-color, #e74c3c);
    color: var(--kuc-button-text-color, #ffffff);
    border: 1px solid #e3e7e8;
  }
  .kuc-button-1-25-0__button--alert:hover,
  .kuc-button-1-25-0__button--alert:focus-visible,
  .kuc-button-1-25-0__button--alert:active {
    cursor: pointer;
  }
  .kuc-button-1-25-0__button--alert:hover {
    background-color: var(--kuc-button-background-color-hover, #bf2718);
  }
  .kuc-button-1-25-0__button--alert:focus-visible {
    background-color: var(--kuc-button-background-color-focus, #bf2718);
  }
  .kuc-button-1-25-0__button--alert:active {
    background-color: var(--kuc-button-background-color-active, #bf2718);
  }
  .kuc-button-1-25-0__button:disabled {
    background-color: #d4d7d7;
    border: 1px solid #e3e7e8;
    color: #888888;
    cursor: not-allowed;
  }
  .kuc-button-1-25-0__button--normal:focus-visible,
  .kuc-button-1-25-0__button--submit:focus-visible,
  .kuc-button-1-25-0__button--alert:focus-visible {
    outline: 1px solid #3498db;
  }
`,Ss=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},Cs;(()=>{if(Cs=window.customElements.get(`kuc-button-1-25-0`),Cs)return;class e extends J{constructor(e){super(),this.className=``,this.id=``,this.text=``,this.type=`normal`,this.content=``,this.disabled=!1,this.visible=!0,this._content=``;let t=Q(e);Object.assign(this,t)}_handleClickButton(e){e.stopPropagation(),Y(this,`click`)}_getButtonColorType(){return this.type===`normal`||this.type===`submit`||this.type===`alert`?this.type:`normal`}willUpdate(e){(e.has(`content`)||e.has(`text`))&&(this.content!==null&&this.content!==void 0&&this.content!==``?_s(this.content)?this._content=Wo(this.content):this._content=this.content:this._content=this.text)}render(){return B`
        <button
          type="button"
          class="kuc-button-1-25-0__button kuc-button-1-25-0__button--${this._getButtonColorType()}"
          ?disabled="${this.disabled}"
          @click="${this._handleClickButton}"
        >
          ${this._content}
        </button>
      `}}Ss([H({type:String,reflect:!0,attribute:`class`})],e.prototype,`className`,void 0),Ss([H({type:String,reflect:!0,attribute:`id`})],e.prototype,`id`,void 0),Ss([H({type:String})],e.prototype,`text`,void 0),Ss([H({type:String})],e.prototype,`type`,void 0),Ss([H()],e.prototype,`content`,void 0),Ss([H({type:Boolean})],e.prototype,`disabled`,void 0),Ss([H({type:Boolean,attribute:`hidden`,reflect:!0,converter:q})],e.prototype,`visible`,void 0),window.customElements.define(`kuc-button-1-25-0`,e),X(xs),Cs=e})();var ws=`
  kuc-checkbox-1-25-0,
  kuc-checkbox-1-25-0 *,
  kuc-checkbox-1-25-0:lang(en),
  kuc-checkbox-1-25-0:lang(en) * {
    font-family: sans-serif;
  }
  kuc-checkbox-1-25-0:lang(es),
  kuc-checkbox-1-25-0:lang(es) * {
    font-family: sans-serif;
  }
  kuc-checkbox-1-25-0:lang(ja),
  kuc-checkbox-1-25-0:lang(ja) * {
    font-family: "メイリオ", "Hiragino Kaku Gothic ProN", Meiryo,
      sans-serif;
  }
  kuc-checkbox-1-25-0:lang(zh),
  kuc-checkbox-1-25-0:lang(zh) * {
    font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,
      Hei, "Heiti SC", sans-serif;
  }
  kuc-checkbox-1-25-0:lang(zh-TW),
  kuc-checkbox-1-25-0:lang(zh-TW) * {
    font-family: "微軟正黑體","Microsoft JhengHei","新宋体",NSimSun,STHeiti,
      Hei,"Heiti SC",sans-serif;
  }
  kuc-checkbox-1-25-0 {
    font-size: 14px;
    color: #333333;
    display: inline-table;
    vertical-align: top;
    width: var(--kuc-checkbox-menu-width, 239px);
    min-width: var(--kuc-checkbox-menu-width, 239px);
    line-height: 1.5;
  }
  kuc-checkbox-1-25-0[hidden] {
    display: none;
  }
  .kuc-checkbox-1-25-0__group {
    border: none;
    padding: 0px;
    height: auto;
    display: inline-block;
    width: 100%;
    margin: 0px;
  }
  .kuc-checkbox-1-25-0__group__select-menu {
    white-space: nowrap;
    width: var(--kuc-checkbox-menu-width, auto);
    height: var(--kuc-checkbox-menu-height, auto);
    color: var(--kuc-checkbox-menu-color, #333333);
    font-size: var(--kuc-checkbox-menu-font-size, 14px);
    display: flex;
    align-items: flex-start;
  }
  .kuc-checkbox-1-25-0__group__select-menu[itemLayout="vertical"] {
    display: block;
  }
  .kuc-checkbox-1-25-0__group__label {
    display: inline-block;
    padding: 4px 0 8px 0;
    white-space: nowrap;
  }
  .kuc-checkbox-1-25-0__group__label[hidden] {
    display: none;
  }
  .kuc-checkbox-1-25-0__group__select-menu[borderVisible] {
    border-color: #e3e7e8;
    border-width: 1px;
    border-style: solid;
    padding: 4px 0 0 4px;
  }
  .kuc-checkbox-1-25-0__group__select-menu__item {
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
  .kuc-checkbox-1-25-0__group__select-menu__item[focused] {
    border: 1px solid #3498db;
  }
  .kuc-checkbox-1-25-0__group__select-menu__item__input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
  }
  .kuc-checkbox-1-25-0__group__select-menu__item__input:hover
    + .kuc-checkbox-1-25-0__group__select-menu__item__label {
    color: var(--kuc-checkbox-menu-color-hover, #666666);
  }
  .kuc-checkbox-1-25-0__group__select-menu__item__label__icon {
    position: absolute;
    left: -30px;
    box-sizing: border-box;
    width: 21px;
    height: 21px;
    box-shadow: 1px 1px 3px #f5f5f5 inset, -1px -1px 3px #f5f5f5 inset;
    content: "";
  }
  .kuc-checkbox-1-25-0__group__select-menu__item__input[disabled]
    + .kuc-checkbox-1-25-0__group__select-menu__item__label {
    color: #888888;
    cursor: not-allowed;
  }
  .kuc-checkbox-1-25-0__group__select-menu__item__label {
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
  `,Ts=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},Es;(()=>{if(Es=window.customElements.get(`kuc-checkbox-1-25-0`),Es)return;class e extends J{constructor(e){super(),this.className=``,this.error=``,this.id=``,this.itemLayout=`horizontal`,this.label=``,this.borderVisible=!0,this.disabled=!1,this.requiredIcon=!1,this.visible=!0,this.items=[],this.selectedIndex=[],this.value=[],this._valueMapping={},this._GUID=Z();let t=Q(e);this._setInitialValue(t),Object.assign(this,t)}_setInitialValue(e){let t=`value`in e,n=`selectedIndex`in e,r=e.selectedIndex||[];if(!t&&n){if(!$(r))return;let t=this._getValueMapping(e);this.value=this._getValidValue(t,r)}}shouldUpdate(e){return e.has(`items`)&&!$(this.items)?(this.throwErrorAfterUpdateComplete(G.ITEMS.IS_NOT_ARRAY),!1):e.has(`value`)&&!$(this.value)?(this.throwErrorAfterUpdateComplete(G.VALUE.IS_NOT_ARRAY),!1):e.has(`selectedIndex`)&&!$(this.selectedIndex)?(this.throwErrorAfterUpdateComplete(G.SELECTED_INDEX.IS_NOT_ARRAY),!1):!0}willUpdate(e){if(e.has(`value`)){if(this.value.length>0)return;this.selectedIndex=[]}}_getNewValueMapping(e,t){let n=parseInt(t,10),r=Object.keys(this._valueMapping),i={...this._valueMapping};return r.indexOf(t)>-1?(delete i[n],i):(i[n]=e,i)}_handleChangeInput(e){e.stopPropagation();let t=e.target,n=t.dataset.index||`0`,r=t.value,i=this.value?[...this.value]:this.value,a=this._getNewValueMapping(r,n),o=this.items.map(e=>e.value),s=Object.values(a).filter(e=>o.indexOf(e)>-1);if(s===i)return;let c=Object.keys(a).map(e=>parseInt(e,10));this.value=s,this.selectedIndex=c;let l={oldValue:i,value:s};Y(this,`change`,l)}_handleFocusInput(e){e.target.parentNode.setAttribute(`focused`,``)}_handleBlurInput(e){e.target.parentNode.removeAttribute(`focused`)}_getCheckboxIconSvgTemplate(e,t){return V`
    <svg
      class="kuc-checkbox-1-25-0__group__select-menu__item__label__icon"
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
      ${t?V`<path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M5 11L6.5 9L9.5 11.5L14.5 6L16 7.5L9.5 14.5L5 11Z"
            fill="${e?`#d8d8d8`:`#3498db`}"/>`:``}
    </svg>
  `}_getSVGStrokeValue(e,t){return e?`#d8d8d8`:t?`#3498db`:`#d8d8d8`}_isCheckedItem(e,t){let n=Object.values(this._valueMapping),r=Object.keys(this._valueMapping);return n.filter((n,i)=>n===e.value&&t===parseInt(r[i],10)).length>0}_getItemTemplate(e,t){let n=this._isCheckedItem(e,t),r=e.disabled||this.disabled;return B`
        <div
          class="kuc-checkbox-1-25-0__group__select-menu__item"
          itemLayout="${this.itemLayout}"
        >
          <input
            type="checkbox"
            aria-describedby="${this._GUID}-error"
            aria-required="${this.requiredIcon}"
            data-index="${t}"
            id="${this._GUID}-item-${t}"
            class="kuc-checkbox-1-25-0__group__select-menu__item__input"
            name="${this._GUID}-group"
            value="${e.value===void 0?``:e.value}"
            ?disabled="${r}"
            @change="${this._handleChangeInput}"
            @focus="${this._handleFocusInput}"
            @blur="${this._handleBlurInput}"
          />
          <label
            for="${this._GUID}-item-${t}"
            class="kuc-checkbox-1-25-0__group__select-menu__item__label"
            >${this._getCheckboxIconSvgTemplate(r,n)}${e.label===void 0?e.value:e.label}
          </label>
        </div>
      `}update(e){(e.has(`items`)||e.has(`value`)||e.has(`selectedIndex`))&&(this._valueMapping=this._getValueMapping({items:this.items,value:this.value,selectedIndex:this.selectedIndex}),this._setValueAndSelectedIndex()),super.update(e)}render(){return B`
        <div
          class="kuc-checkbox-1-25-0__group"
          role="group"
          aria-labelledby="${this._GUID}-group"
        >
          <div class="kuc-checkbox-1-25-0__group__label" ?hidden="${!this.label}">
            <kuc-base-label-1-25-0
              .text="${this.label}"
              .guid="${this._GUID}"
              .requiredIcon="${this.requiredIcon}"
            ></kuc-base-label-1-25-0>
          </div>
          <div
            class="kuc-checkbox-1-25-0__group__select-menu"
            ?borderVisible="${this.borderVisible}"
            itemLayout="${this.itemLayout}"
          >
            ${this.items.map((e,t)=>this._getItemTemplate(e,t))}
          </div>
          <kuc-base-error-1-25-0
            .text="${this.error}"
            .guid="${this._GUID}"
            ?hidden="${!this.error}"
            ariaLive="assertive"
          ></kuc-base-error-1-25-0>
        </div>
      `}updated(){this._inputEls.forEach(e=>{e.checked=this.value.indexOf(e.value)>-1})}_getValueMapping(e){let t=e.items||[],n=e.value||[],r=e.selectedIndex||[],i=t.map(e=>e.value||``),a=Object.assign({},i),o={};if(n.length===0){let e=this._getValidValue(a,r);return r.forEach((t,n)=>o[t]=e[n]),o}return this._getValidSelectedIndex(a).forEach((e,t)=>o[e]=n[t]),o}_getValidValue(e,t){return t.filter(t=>e[t]).map(t=>e[t])}_getValidSelectedIndex(e){let t=[];for(let n=0;n<this.value.length;n++){let r=this.selectedIndex[n];if(e[r]===this.value[n]){t.push(r);continue}let i=this.items.findIndex(e=>e.value===this.value[n]);t.push(i)}return t}_setValueAndSelectedIndex(){this.value=Object.values(this._valueMapping),this.selectedIndex=Object.keys(this._valueMapping).map(e=>parseInt(e,10))}}Ts([H({type:String,reflect:!0,attribute:`class`})],e.prototype,`className`,void 0),Ts([H({type:String})],e.prototype,`error`,void 0),Ts([H({type:String,reflect:!0,attribute:`id`})],e.prototype,`id`,void 0),Ts([H({type:String})],e.prototype,`itemLayout`,void 0),Ts([H({type:String})],e.prototype,`label`,void 0),Ts([H({type:Boolean})],e.prototype,`borderVisible`,void 0),Ts([H({type:Boolean})],e.prototype,`disabled`,void 0),Ts([H({type:Boolean})],e.prototype,`requiredIcon`,void 0),Ts([H({type:Boolean,attribute:`hidden`,reflect:!0,converter:q})],e.prototype,`visible`,void 0),Ts([H({type:Array})],e.prototype,`items`,void 0),Ts([H({type:Array})],e.prototype,`selectedIndex`,void 0),Ts([H({type:Array})],e.prototype,`value`,void 0),Ts([Ra(`.kuc-checkbox-1-25-0__group__select-menu__item__input`)],e.prototype,`_inputEls`,void 0),Ts([U()],e.prototype,`_valueMapping`,void 0),window.customElements.define(`kuc-checkbox-1-25-0`,e),X(ws),Es=e})();var Ds=`
  kuc-combobox-1-25-0,
  kuc-combobox-1-25-0 *,
  kuc-combobox-1-25-0:lang(en),
  kuc-combobox-1-25-0:lang(en) * {
    font-family: sans-serif;
  }
  kuc-combobox-1-25-0:lang(es),
  kuc-combobox-1-25-0:lang(es) * {
    font-family: sans-serif;
  }
  kuc-combobox-1-25-0:lang(ja),
  kuc-combobox-1-25-0:lang(ja) * {
    font-family: "メイリオ", "Hiragino Kaku Gothic ProN", Meiryo,
      sans-serif;
  }
  kuc-combobox-1-25-0:lang(zh),
  kuc-combobox-1-25-0:lang(zh) * {
    font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,
      Hei, "Heiti SC", sans-serif;
  }
  kuc-combobox-1-25-0:lang(zh-TW),
  kuc-combobox-1-25-0:lang(zh-TW) * {
    font-family: "微軟正黑體", "Microsoft JhengHei", "新宋体", NSimSun, STHeiti, Hei, "Heiti SC", sans-serif;
  }
  kuc-combobox-1-25-0 {
    position: relative;
    display: inline-table;
    font-size: 14px;
    color: #333333;
    width: var(--kuc-combobox-toggle-width, 180px);
    vertical-align: top;
    line-height: 1.5;
  }
  kuc-combobox-1-25-0[hidden] {
    display: none;
  }
  .kuc-combobox-1-25-0__group {
    border: none;
    padding: 0px;
    height: auto;
    display: inline-block;
    width: 100%;
    margin: 0px;
    position: relative;
  }
  .kuc-combobox-1-25-0__group__label {
    padding: 4px 0px 8px 0px;
    display: inline-block;
    white-space: nowrap;
  }
  .kuc-combobox-1-25-0__group__label[hidden] {
    display: none;
  }
  .kuc-combobox-1-25-0__group__toggle {
    position: relative;
    display: flex;
    width: var(--kuc-combobox-toggle-width);
  }
  input[type=text].kuc-combobox-1-25-0__group__toggle__input {
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
  input[type=text].kuc-combobox-1-25-0__group__toggle__input:focus {
    outline: none;
    border: 1px solid #3498db;
    background-color: #e2f2fe;
    box-shadow: none;
  }
  input[type=text].kuc-combobox-1-25-0__group__toggle__input:disabled,
  .kuc-combobox-1-25-0__group__toggle__icon__button:disabled {
    background-color: #d4d7d7;
    box-shadow: none;
    cursor: not-allowed;
    color: #888888;
  }
  .kuc-combobox-1-25-0__group__toggle__icon {
    position: absolute;
    right: 0px;
    top: 2px;
    border-left: 1px solid #e3e7e8;
  }
  .kuc-combobox-1-25-0__group__toggle__icon__button {
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
  .kuc-combobox-1-25-0__group__select-menu {
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
  .kuc-combobox-1-25-0__group__select-menu__item {
    font-size: var(--kuc-combobox-font-size, 14px);
    padding: 8px 16px 8px 24px;
    line-height: 1;
    position: relative;
    cursor: pointer;
    white-space: nowrap;
  }
  .kuc-combobox-1-25-0__group__select-menu__item:lang(en) b,
  .kuc-combobox-1-25-0__group__select-menu__item:lang(ja) b,
  .kuc-combobox-1-25-0__group__select-menu__item:lang(zh) b,
  .kuc-combobox-1-25-0__group__select-menu__item:lang(zh-TW) b{
    font-weight: 700;
  }
  .kuc-combobox-1-25-0__group__select-menu__item__icon {
    position: absolute;
    top: 50%;
    left: 6px;
    margin-top: -5px;
  }
  .kuc-combobox-1-25-0__group__select-menu__item[aria-selected="true"] {
    color: var(--kuc-combobox-menu-color-selected, #3498db);
  }
  .kuc-combobox-1-25-0__group__select-menu__item--disabled,
  .kuc-combobox-1-25-0__group__select-menu__item--disabled[aria-selected="true"] {
    background-color: #d4d7d7;
    cursor: not-allowed;
    color: #888888;
  }
  .kuc-combobox-1-25-0__group__select-menu__highlight[role="option"] {
    background-color: #e2f2fe;
  }
`,Os=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},ks;(()=>{if(ks=window.customElements.get(`kuc-combobox-1-25-0`),ks)return;class e extends J{_attachListeners(){this._detachListeners(),this._scrollTargets=this._getScrollableAncestors(this._toggleEl);for(let e of this._scrollTargets)e.addEventListener(`scroll`,this._setMenuPosition,{passive:!0});this._menuEl.addEventListener(`scroll`,this._handleScrollMenu),window.addEventListener(`resize`,this._actionResizeScrollWindow),document.addEventListener(`click`,this._handleClickDocument,{capture:!0})}_detachListeners(){for(let e of this._scrollTargets)e.removeEventListener(`scroll`,this._setMenuPosition);this._scrollTargets=[],this._menuEl&&this._menuEl.removeEventListener(`scroll`,this._handleScrollMenu),window.removeEventListener(`resize`,this._actionResizeScrollWindow),document.removeEventListener(`click`,this._handleClickDocument,{capture:!0})}constructor(e){super(),this.className=``,this.error=``,this.id=``,this.label=``,this.placeholder=``,this.value=``,this.disabled=!1,this.requiredIcon=!1,this.visible=!0,this.items=[],this._selectorVisible=!1,this._searchText=``,this._DISABLED_CLASS=`kuc-combobox-1-25-0__group__select-menu__item--disabled`,this._query=``,this._matchingItems=[],this._scrollTargets=[],this._GUID=Z(),this._timeoutID=null;let t=Q(e);this._handleClickDocument=this._handleClickDocument.bind(this),this._handleScrollMenu=this._handleScrollMenu.bind(this),this._setMenuPosition=this._setMenuPosition.bind(this),this._actionResizeScrollWindow=this._actionResizeScrollWindow.bind(this),Object.assign(this,t)}shouldUpdate(e){if(e.has(`items`)){if(!$(this.items))return this.throwErrorAfterUpdateComplete(G.ITEMS.IS_NOT_ARRAY),!1;if(!ds(this.items.map(e=>e.value)))return this.throwErrorAfterUpdateComplete(G.ITEMS.IS_DUPLICATED),!1}return e.has(`value`)&&!ls(this.value)?(this.throwErrorAfterUpdateComplete(G.VALUE.IS_NOT_STRING),!1):!0}willUpdate(e){e.has(`value`)&&(this._searchText=this._getSelectedLabel()||``)}render(){return B`
        <div class="kuc-combobox-1-25-0__group">
          <div
            class="kuc-combobox-1-25-0__group__label"
            id="${this._GUID}-label"
            ?hidden="${!this.label}"
          >
            <kuc-base-label-1-25-0
              .text="${this.label}"
              .requiredIcon="${this.requiredIcon}"
            ></kuc-base-label-1-25-0>
          </div>
          <div class="kuc-combobox-1-25-0__group__toggle">
            <input
              class="kuc-combobox-1-25-0__group__toggle__input"
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
            <div class="kuc-combobox-1-25-0__group__toggle__icon">
              <button
                class="kuc-combobox-1-25-0__group__toggle__icon__button"
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
            class="kuc-combobox-1-25-0__group__select-menu"
            role="listbox"
            aria-labelledby="${this._GUID}-label"
            aria-hidden="${!this._selectorVisible}"
            @mouseleave="${this._handleMouseLeaveMenu}"
            @mousedown="${this._handleMouseDownMenu}"
          >
            ${this._matchingItems.map((e,t)=>this._getItemTemplate(e,t))}
          </ul>
          <kuc-base-error-1-25-0
            .text="${this.error}"
            .guid="${this._GUID}"
            ?hidden="${!this.error}"
            ariaLive="assertive"
          ></kuc-base-error-1-25-0>
        </div>
      `}async updated(e){super.updated(e),await this.updateComplete,this._selectorVisible&&(this._scrollToView(),this._selectedItemEl===null||this._selectedItemEl.classList.contains(this._DISABLED_CLASS)?this._actionClearAllHighlightMenuItem():this._setHighlightAndActiveDescendantMenu(this._selectedItemEl))}_getToggleIconSvgTemplate(){return V`
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
    `}_getItemTemplate(e,t){let n=this._isCheckedItem(e),r=e.disabled,i=e.label===void 0?e.value:e.label,a=n?B`<b>${i}</b>`:B`${i}`,o=this._query.trim().toLowerCase();if(o&&i){let e=i.toLowerCase().indexOf(o),t=e+o.length;a=B`
          ${i.slice(0,e)}<b>${i.slice(e,t)}</b>${i.slice(t)}
        `}return B`
        <li
          class="kuc-combobox-1-25-0__group__select-menu__item ${r?this._DISABLED_CLASS:``}"
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
      `}_getComboboxIconSvgTemplate(e,t){return V`
      ${e?V`<svg
          class="kuc-combobox-1-25-0__group__select-menu__item__icon"
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
        </svg>`:``}`}_handleClickComboboxItem(e){let t=this._getItemElementWhenMouseOverDown(e.target).getAttribute(`value`);this._actionUpdateValue(t)}_handleMouseOverComboboxItem(e){let t=this._getItemElementWhenMouseOverDown(e.target);this._actionHighlightMenuItem(t)}_handleMouseLeaveMenu(){this._actionClearAllHighlightMenuItem()}_handleMouseDownMenu(e){e.preventDefault()}_handleClickToggleButton(e){e.preventDefault(),this._inputEl.focus(),this._inputEl.select(),this._resetToggleInputValue(),this._actionToggleMenu()}_handleInputComboboxInput(e){e.stopPropagation(),this._searchText=this._inputEl.value,this._query=this._inputEl.value,this._setMatchingItems()}_handleClickComboboxInput(e){e.stopPropagation(),this._inputEl.select(),this._setMatchingItems()}_handleChangeComboboxInput(e){e.stopPropagation()}_handleBlurComboboxInput(e){this._resetToggleInputValue()}_handleClickDocument(e){(e.target===this._toggleEl||this._toggleEl.contains(e.target))&&(this._inputEl.focus(),e.stopPropagation()),!Array.from(this._disabledItemsEl).some(t=>t===e.target||t.contains(e.target))&&this._actionHideMenu()}_handleScrollMenu(){this._previousScrollTop=this._menuEl.scrollTop}_handleKeyDownComboboxInput(e){switch(e.key){case`Up`:case`ArrowUp`:if(e.preventDefault(),!this._selectorVisible){this._actionShowMenu();break}this._actionHighlightPrevMenuItem();break;case`Tab`:this._selectorVisible&&this._actionHideMenu();break;case`Down`:case`ArrowDown`:if(e.preventDefault(),!this._selectorVisible){this._actionShowMenu();break}this._actionHighlightNextMenuItem();break;case`Enter`:{e.preventDefault();let t=this._highlightItemEl;if(t===null)break;let n=t.getAttribute(`value`);this._actionUpdateValue(n),this._actionHideMenu();break}case`Escape`:e.preventDefault(),this._selectorVisible&&e.stopPropagation(),this._resetToggleInputValue(),this._actionHideMenu();break;case`Home`:this._selectorVisible&&(e.preventDefault(),this._actionHighlightFirstMenuItem());break;case`End`:this._selectorVisible&&(e.preventDefault(),this._actionHighlightLastMenuItem());break;default:break}}_getSelectedLabel(){let e=this.items.filter((e,t)=>this._isCheckedItem(e));return e.length===0?``:e[0].label===void 0?e[0].value:e[0].label}async _actionShowMenu(){this._query.trim()===``&&(this._matchingItems=this.items),!(this.items.length===0||this._matchingItems.length===0)&&(this._inputEl.focus(),this._selectorVisible=!0,this._menuEl.showPopover(),await this.updateComplete,!(!this._menuEl||!this._toggleEl)&&(this._setMenuPosition(),this._attachListeners()))}_actionHideMenu(){this._selectorVisible=!1,this._menuEl.hidePopover(),this._detachListeners(),this._actionRemoveActiveDescendant()}_actionToggleMenu(){if(this._selectorVisible){this._actionHideMenu();return}this._actionShowMenu()}_actionHighlightFirstMenuItem(){let e=this._firstItemEl,t=!1;for(let n=0;n<this._matchingItems.length&&(t=e.classList.contains(this._DISABLED_CLASS),t);n++)e=e.nextElementSibling;!t&&this._setHighlightAndActiveDescendantMenu(e)}_actionHighlightLastMenuItem(){let e=this._lastItemEl,t=!1;for(let n=0;n<this._matchingItems.length&&(t=e.classList.contains(this._DISABLED_CLASS),t);n++)e=e.previousElementSibling;!t&&this._setHighlightAndActiveDescendantMenu(e)}_actionHighlightPrevMenuItem(){let e=null;this._highlightItemEl!==null&&(e=this._highlightItemEl.previousElementSibling),e===null&&(e=this._lastItemEl);let t=!1;for(let n=0;n<this._matchingItems.length&&(t=e.classList.contains(this._DISABLED_CLASS),t);n++)e=e.previousElementSibling,e===null&&(e=this._lastItemEl);!t&&this._setHighlightAndActiveDescendantMenu(e)}_actionHighlightNextMenuItem(){let e=null;this._highlightItemEl!==null&&(e=this._highlightItemEl.nextElementSibling),e===null&&(e=this._firstItemEl);let t=!1;for(let n=0;n<this._matchingItems.length&&(t=e.classList.contains(this._DISABLED_CLASS),t);n++)e=e.nextElementSibling,e===null&&(e=this._firstItemEl);!t&&this._setHighlightAndActiveDescendantMenu(e)}_actionClearAllHighlightMenuItem(){this._itemsEl.forEach(e=>{e.classList.remove(`kuc-combobox-1-25-0__group__select-menu__highlight`)}),this._actionRemoveActiveDescendant()}_setHighlightAndActiveDescendantMenu(e){this._actionHighlightMenuItem(e),this._actionSetActiveDescendant(e.id),this._scrollToView()}_actionHighlightMenuItem(e){this._actionClearAllHighlightMenuItem(),e.classList.add(`kuc-combobox-1-25-0__group__select-menu__highlight`)}_actionUpdateValue(e){if(this.value===e){this._resetToggleInputValue();return}let t={oldValue:this.value,value:e};this.value=e,this._query=``,Y(this,`change`,t)}_actionSetActiveDescendant(e){e!==void 0&&this._inputEl!==null&&this._inputEl.setAttribute(`aria-activedescendant`,e)}_actionRemoveActiveDescendant(){this._inputEl.removeAttribute(`aria-activedescendant`)}_setMatchingItems(){let e=this.items.filter(e=>{let t=new RegExp((e=>e.replace(/[.*+?^=!:${}()|[\]/\\]/g,`\\$&`))(this._query.trim()),`gi`);return e.label?t.test(e.label):e.value?t.test(e.value):!1});e.length===0?(this._matchingItems=[],this._actionHideMenu()):(this._matchingItems=e,this._actionShowMenu())}_setMenuPositionAboveOrBelow(e,t){let n=t.getBoundingClientRect(),r=n.top,i=window.innerHeight;window.innerHeight>document.documentElement.clientHeight&&(i=document.documentElement.clientHeight);let a=i-n.bottom;e.style.height=`auto`,e.style.maxHeight=`none`,e.style.top=`auto`,e.style.bottom=`auto`;let o=e.getBoundingClientRect().height;e.style.maxHeight=`var(--kuc-combobox-menu-max-height, none)`;let s=getComputedStyle(e).maxHeight,c;s&&s!==`none`&&(c=parseFloat(s));let l=c?Math.min(o,c):o,u,d;a>=l?(u=n.bottom,d=l):r>=l?(u=n.top-l,d=l):a>=r?(u=n.bottom,d=a):(u=n.top-r,d=r),e.style.position=`fixed`;let f=`${u}px`;e.style.top!==f&&(e.style.top=f);let p=`${d}px`;e.style.height!==p&&(e.style.height=p),e.style.overflowY=`auto`}_setMenuPositionLeftOrRight(e,t){e.style.right=`auto`;let n=e.offsetWidth,r=t.getBoundingClientRect(),i=window.innerWidth;window.innerWidth>document.documentElement.clientWidth&&(i=document.documentElement.clientWidth);let a=r.left;i<r.right&&i>r.left&&(a=i-n);let o=`${a}px`;e.style.left!==o&&(e.style.left=o)}_setMenuPosition(){if(!this._menuEl||!this._toggleEl){this._detachListeners();return}this._setMenuPositionAboveOrBelow(this._menuEl,this._toggleEl),this._setMenuPositionLeftOrRight(this._menuEl,this._toggleEl),this._menuEl&&this._previousScrollTop&&(this._menuEl.scrollTop=this._previousScrollTop)}_scrollToView(){if(!this._highlightItemEl||!this._menuEl)return;let e=this._menuEl.getBoundingClientRect(),t=this._highlightItemEl.getBoundingClientRect();t.top<e.top&&(this._menuEl.scrollTop-=e.top-t.top),e.bottom<t.bottom&&(this._menuEl.scrollTop+=t.bottom-e.bottom)}_actionResizeScrollWindow(){this._timeoutID||!this._selectorVisible||(this._timeoutID=window.setTimeout(()=>{this._timeoutID=null,this._setMenuPosition()},50))}_isCheckedItem(e){return e.value===this.value}_resetToggleInputValue(){let e=this._getSelectedLabel();this._searchText!==e&&(this._searchText=e||``),this._query=``}_getScrollableAncestors(e){let t=[],n=e.parentElement,r=/(auto|scroll|overlay)/;for(;n&&n!==document.body&&n!==document.documentElement;){let e=getComputedStyle(n);(r.test(e.overflowY)||r.test(e.overflowX))&&t.push(n),n=n.parentElement}return t.push(window),t}_getItemElementWhenMouseOverDown(e){return e.classList.value.split(` `).includes(`kuc-combobox-1-25-0__group__select-menu__item`)?e:this._getItemElementWhenMouseOverDown(e.parentElement)}disconnectedCallback(){this._detachListeners(),super.disconnectedCallback&&super.disconnectedCallback()}}Os([H({type:String,reflect:!0,attribute:`class`})],e.prototype,`className`,void 0),Os([H({type:String})],e.prototype,`error`,void 0),Os([H({type:String,reflect:!0,attribute:`id`})],e.prototype,`id`,void 0),Os([H({type:String})],e.prototype,`label`,void 0),Os([H({type:String})],e.prototype,`placeholder`,void 0),Os([H({type:String})],e.prototype,`value`,void 0),Os([H({type:Boolean})],e.prototype,`disabled`,void 0),Os([H({type:Boolean})],e.prototype,`requiredIcon`,void 0),Os([H({type:Boolean,attribute:`hidden`,reflect:!0,converter:q})],e.prototype,`visible`,void 0),Os([H({type:Array})],e.prototype,`items`,void 0),Os([U()],e.prototype,`_selectorVisible`,void 0),Os([W(`.kuc-combobox-1-25-0__group__toggle`)],e.prototype,`_toggleEl`,void 0),Os([W(`.kuc-combobox-1-25-0__group__toggle__input`)],e.prototype,`_inputEl`,void 0),Os([W(`.kuc-combobox-1-25-0__group__select-menu`)],e.prototype,`_menuEl`,void 0),Os([Ra(`.kuc-combobox-1-25-0__group__select-menu__item`)],e.prototype,`_itemsEl`,void 0),Os([W(`.kuc-combobox-1-25-0__group__select-menu__item`)],e.prototype,`_firstItemEl`,void 0),Os([W(`.kuc-combobox-1-25-0__group__select-menu__item:last-child`)],e.prototype,`_lastItemEl`,void 0),Os([W(`.kuc-combobox-1-25-0__group__select-menu__item[aria-selected=true]`)],e.prototype,`_selectedItemEl`,void 0),Os([W(`.kuc-combobox-1-25-0__group__select-menu__highlight`)],e.prototype,`_highlightItemEl`,void 0),Os([W(`.kuc-base-error-1-25-0__error`)],e.prototype,`_errorEl`,void 0),Os([Ra(`.kuc-combobox-1-25-0__group__select-menu__item--disabled`)],e.prototype,`_disabledItemsEl`,void 0),Os([U()],e.prototype,`_searchText`,void 0),window.customElements.define(`kuc-combobox-1-25-0`,e),X(Ds),ks=e})();var As=`
.kuc-base-datetime-header-year-1-25-0__toggle {
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
.kuc-base-datetime-header-year-1-25-0__toggle__icon {
  position: absolute;
  flex: none;
  width: 24px;
  height: 32px;
}
.kuc-base-datetime-header-year-1-25-0__toggle__label {
  font-size: 13px;
  color: #333333;
}
.kuc-base-datetime-header-year-1-25-0__toggle:focus {
  border: 1px solid #3498db;
  outline: none;
}
`,js=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},Ms=class extends J{constructor(){super(...arguments),this.year=new Date().getFullYear(),this.postfix=``,this._listBoxVisible=!1,this._listBoxMaxHeight=300,this._scrollTargets=[],this._boundOnScrollAndResize=()=>Ro({anchorEl:this._toggleEl,popoverEl:this._listBoxUl,popoverHeight:this._listBoxMaxHeight})}disconnectedCallback(){this._detachListeners(),super.disconnectedCallback()}update(e){this._listBoxItems=this._getYearOptions().map(e=>({value:`${e}`,label:`${e}${this.postfix}`})),super.update(e)}render(){return B`
      <button
        class="kuc-base-datetime-header-year-1-25-0__toggle"
        type="button"
        aria-haspopup="listbox"
        aria-expanded="${this._listBoxVisible}"
        tabindex="${this._listBoxVisible?`-1`:`0`}"
        @mouseup="${this._handleMouseUpDropdownToggle}"
        @mousedown="${this._handleMouseDownDropdownToggle}"
        @click="${this._handleClickDropdownYearToggle}"
        @keydown="${this._handleKeyDownYearToggle}"
      >
        <span class="kuc-base-datetime-header-year-1-25-0__toggle__label"
          >${this.year}${this.postfix}</span
        >
        <span class="kuc-base-datetime-header-year-1-25-0__toggle__icon"
          >${Io()}
        </span>
      </button>
      ${this._getListBoxTemplate()}
    `}async updated(e){await this.updateComplete,super.update(e)}repositionListBox(){!this._listBoxVisible||!this._listBoxEl||Ro({anchorEl:this._toggleEl,popoverEl:this._listBoxUl,popoverHeight:this._listBoxMaxHeight})}_attachListeners(){this._detachListeners(),this._scrollTargets=Bo(this._toggleEl);for(let e of this._scrollTargets)e.addEventListener(`scroll`,this._boundOnScrollAndResize,{passive:!0})}_detachListeners(){for(let e of this._scrollTargets)e.removeEventListener(`scroll`,this._boundOnScrollAndResize);this._scrollTargets=[]}closeListBox(){var e;this._listBoxEl&&this._listBoxEl.hidePopover(),this._listBoxVisible=!1,this._detachListeners(),(e=this._toggleEl)==null||e.focus()}_getListBoxTemplate(){return this._listBoxVisible?B`
          <kuc-base-datetime-listbox-1-25-0
            .items="${this._listBoxItems||[]}"
            .value="${this.year.toString()}"
            class="kuc-base-datetime-header-year-1-25-0__listbox"
            @kuc:listbox-click="${this._handleChangeListBox}"
            @kuc:listbox-blur="${this._handleFocusOutListBox}"
            @kuc:listbox-escape="${this._handleListBoxEscape}"
            aria-hidden="${!this._listBoxVisible}"
          >
          </kuc-base-datetime-listbox-1-25-0>
        `:``}_handleFocusOutListBox(){this.closeListBox()}_handleListBoxEscape(){this._handleFocusOutListBox()}_handleMouseUpDropdownToggle(e){e.preventDefault()}_handleMouseDownDropdownToggle(e){e.preventDefault()}_handleClickDropdownYearToggle(e){e.stopPropagation(),e.preventDefault(),this._listBoxVisible?this.closeListBox():this._openListBox(),Y(this,`kuc:year-dropdown-click`,{value:this._listBoxVisible.toString(),oldValue:(!this._listBoxVisible).toString()})}_handleKeyDownYearToggle(e){e.key!==`Tab`&&(e.preventDefault(),this._openListBoxByKey(e.key))}_openListBoxByKey(e){[` `,`Up`,`ArrowUp`,`Down`,`ArrowDown`,`Enter`].indexOf(e)>-1&&this._openListBox()}_handleChangeListBox(e){if(e.preventDefault(),e.stopPropagation(),this.closeListBox(),!e.detail.value)return;this.year=Number(e.detail.value);let t={value:`${this.year}`};Y(this,`kuc:year-dropdown-change`,t)}async _openListBox(){this._listBoxVisible=!0,await this.updateComplete,this._listBoxEl&&(this._listBoxEl.showPopover(),Ro({anchorEl:this._toggleEl,popoverEl:this._listBoxUl,popoverHeight:this._listBoxMaxHeight}),this._attachListeners())}_getYearOptions(){let e=[];Number.isInteger(this.year)||(this.year=new Date().getFullYear());let t=this.year<100?0:this.year-100,n=this.year>=9899?9999:this.year+100;for(;t<=n;t++)e.push(t);return e}};js([H({type:Number})],Ms.prototype,`year`,void 0),js([H({type:String})],Ms.prototype,`postfix`,void 0),js([U()],Ms.prototype,`_listBoxVisible`,void 0),js([W(`.kuc-base-datetime-header-year-1-25-0__toggle`)],Ms.prototype,`_toggleEl`,void 0),js([W(`.kuc-base-datetime-header-year-1-25-0__listbox`)],Ms.prototype,`_listBoxEl`,void 0),js([W(`.kuc-base-datetime-listbox-1-25-0__listbox`)],Ms.prototype,`_listBoxUl`,void 0),window.customElements.get(`kuc-base-datetime-header-year-1-25-0`)||(X(As),window.customElements.define(`kuc-base-datetime-header-year-1-25-0`,Ms));var Ns=`
.kuc-base-datetime-header-month-1-25-0__toggle {
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
.kuc-base-datetime-header-month-1-25-0__toggle__icon {
  position: absolute;
  flex: none;
  width: 24px;
  height: 32px;
}
.kuc-base-datetime-header-month-1-25-0__toggle__label {
  font-size: 13px;
  color: #333333;
}
.kuc-base-datetime-header-month-1-25-0__toggle:focus {
  border: 1px solid #3498db;
  outline: none;
}
`,Ps=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},Fs=class extends J{constructor(){super(...arguments),this.language=`auto`,this.month=1,this._listBoxVisible=!1,this._locale=jo(`en`),this._monthLabel=``,this._maxHeight=1e3,this._scrollTargets=[],this._listBoxMaxHeight=378,this._boundOnScrollAndResize=()=>Ro({anchorEl:this._toggleEl,popoverEl:this._listBoxUl,popoverHeight:this._listBoxMaxHeight})}disconnectedCallback(){this._detachListeners(),super.disconnectedCallback()}update(e){e.has(`language`)&&(this._locale=jo(this.language),this._listBoxItems=this._getListBoxItems()),e.has(`month`)&&(this._monthLabel=this._getMonthLabel()),super.update(e)}render(){return B`
      <button
        class="kuc-base-datetime-header-month-1-25-0__toggle"
        type="button"
        aria-haspopup="listbox"
        aria-expanded="${this._listBoxVisible}"
        tabindex="${this._listBoxVisible?`-1`:`0`}"
        @mouseup="${this._handleMouseUpDropdownToggle}"
        @mousedown="${this._handleMouseDownDropdownToggle}"
        @click="${this._handleClickDropdownMonthToggle}"
        @keydown="${this._handleKeyDownMonthToggle}"
      >
        <span class="kuc-base-datetime-header-month-1-25-0__toggle__label"
          >${this._monthLabel}</span
        >
        <span class="kuc-base-datetime-header-month-1-25-0__toggle__icon"
          >${Io()}
        </span>
      </button>
      ${this._getListBoxTemplate()}
    `}async updated(e){await this.updateComplete,super.update(e)}repositionListBox(){!this._listBoxVisible||!this._listBoxEl||Ro({anchorEl:this._toggleEl,popoverEl:this._listBoxUl,popoverHeight:this._listBoxMaxHeight})}_attachListeners(){this._detachListeners(),this._scrollTargets=Bo(this._toggleEl);for(let e of this._scrollTargets)e.addEventListener(`scroll`,this._boundOnScrollAndResize,{passive:!0})}_detachListeners(){for(let e of this._scrollTargets)e.removeEventListener(`scroll`,this._boundOnScrollAndResize);this._scrollTargets=[]}closeListBox(){var e;this._listBoxEl&&this._listBoxEl.hidePopover(),this._listBoxVisible=!1,this._detachListeners(),(e=this._toggleEl)==null||e.focus()}_getListBoxTemplate(){return this._listBoxVisible?B`
          <kuc-base-datetime-listbox-1-25-0
            .items="${this._listBoxItems||[]}"
            .value="${this.month.toString()}"
            .maxHeight="${this._maxHeight}"
            class="kuc-base-datetime-header-month-1-25-0__listbox"
            @kuc:listbox-click="${this._handleChangeListBox}"
            @kuc:listbox-blur="${this._handleFocusOutListBox}"
            @kuc:listbox-escape="${this._handleListBoxEscape}"
            aria-hidden="${!this._listBoxVisible}"
          >
          </kuc-base-datetime-listbox-1-25-0>
        `:``}_handleFocusOutListBox(){this.closeListBox()}_handleListBoxEscape(){this._handleFocusOutListBox()}_handleClickDropdownMonthToggle(e){e.stopPropagation(),e.preventDefault(),this._listBoxVisible?this.closeListBox():this._openListBox(),Y(this,`kuc:month-dropdown-click`,{value:this._listBoxVisible.toString(),oldValue:(!this._listBoxVisible).toString()})}_handleMouseUpDropdownToggle(e){e.preventDefault()}_handleMouseDownDropdownToggle(e){e.preventDefault()}_handleKeyDownMonthToggle(e){this._handleTabKey(e.key)||(e.preventDefault(),this._openListBoxByKey(e.key))}_openListBoxByKey(e){[` `,`Up`,`ArrowUp`,`Down`,`ArrowDown`,`Enter`].indexOf(e)>-1&&this._openListBox()}_handleTabKey(e){return e===`Tab`}_handleChangeListBox(e){if(e.preventDefault(),e.stopPropagation(),this.closeListBox(),!e.detail.value)return;this.month=Number(e.detail.value);let t={value:`${this.month}`};Y(this,`kuc:month-dropdown-change`,t)}async _openListBox(){this._listBoxVisible=!0,await this.updateComplete,this._listBoxEl&&(this._listBoxEl.showPopover(),Ro({anchorEl:this._toggleEl,popoverEl:this._listBoxUl,popoverHeight:this._listBoxMaxHeight}),this._attachListeners())}_getListBoxItems(){return this._locale.MONTH_SELECT.map((e,t)=>({value:`${t+1}`,label:`${e}`}))}_getMonthLabel(){let e=this._locale.MONTH_SELECT.filter((e,t)=>this.month===t+1);return e.length>0?e[0]:`JANUARY`}};Ps([H({type:String,attribute:`lang`,reflect:!0})],Fs.prototype,`language`,void 0),Ps([H({type:Number})],Fs.prototype,`month`,void 0),Ps([U()],Fs.prototype,`_listBoxVisible`,void 0),Ps([W(`.kuc-base-datetime-header-month-1-25-0__toggle`)],Fs.prototype,`_toggleEl`,void 0),Ps([W(`.kuc-base-datetime-header-month-1-25-0__listbox`)],Fs.prototype,`_listBoxEl`,void 0),Ps([W(`.kuc-base-datetime-listbox-1-25-0__listbox`)],Fs.prototype,`_listBoxUl`,void 0),window.customElements.get(`kuc-base-datetime-header-month-1-25-0`)||(X(Ns),window.customElements.define(`kuc-base-datetime-header-month-1-25-0`,Fs));var Is=`
kuc-base-datetime-calendar-header-1-25-0,
kuc-base-datetime-calendar-header-1-25-0 *,
kuc-base-datetime-calendar-header-1-25-0:lang(en),
kuc-base-datetime-calendar-header-1-25-0:lang(en) * {
  font-family: sans-serif;
}
kuc-base-datetime-calendar-header-1-25-0:lang(ja),
kuc-base-datetime-calendar-header-1-25-0:lang(ja) * {
  font-family: "メイリオ", "Hiragino Kaku Gothic ProN", Meiryo,
    sans-serif;
  font-weight: 700;
}
kuc-base-datetime-calendar-header-1-25-0:lang(zh),
kuc-base-datetime-calendar-header-1-25-0:lang(zh) * {
  font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,
    Hei, "Heiti SC", sans-serif;
}
kuc-base-datetime-calendar-header-1-25-0:lang(zh-TW),
kuc-base-datetime-calendar-header-1-25-0:lang(zh-TW) * {
  font-family: "微軟正黑體","Microsoft JhengHei","新宋体",NSimSun,STHeiti,
    Hei,"Heiti SC",sans-serif;
}
kuc-base-datetime-calendar-header-1-25-0:lang(es),
kuc-base-datetime-calendar-header-1-25-0:lang(es) * {
  font-family: sans-serif;
}
kuc-base-datetime-calendar-header-1-25-0:lang(ja) kuc-base-datetime-listbox-1-25-0 * {
  font-weight: 400;
}
.kuc-base-datetime-calendar-header-1-25-0__group {
  display: flex;
  align-items: center;
  box-sizing: border-box;
  border-bottom: 1px solid #e3e7e8;
  padding: 0;
  white-space: nowrap;
  width: 266px;
  height: 44px;
}
.kuc-base-datetime-calendar-header-1-25-0__group__button {
  background: transparent;
  border: none;
  cursor: pointer;
  outline: none;
  width: 38px;
  height: 32px;
  margin: 0;
  text-align: center;
}
.kuc-base-datetime-calendar-header-1-25-0__group__button:focus {
  border: 1px solid #3498db;
  outline: none;
}
.kuc-base-datetime-calendar-header-1-25-0__group__button-icon {
  vertical-align: middle;
}
.kuc-base-datetime-calendar-header-1-25-0__group__center {
  width: 190px;
  text-align: center;
  display: flex;
  justify-content: center;
}
.kuc-base-datetime-calendar-header-1-25-0__month {
  margin: 0 4px 0 4px;
}
`,Ls=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a};function Rs(e){return e>0&&e<13}function zs(e){return e>=0&&e<1e4}var Bs=class extends J{constructor(){super(...arguments),this.language=`en`,this.month=1,this.year=new Date().getFullYear(),this._locale=jo(`en`)}update(e){e.has(`language`)&&(this._locale=jo(this.language)),super.update(e)}render(){return B`
      <div class="kuc-base-datetime-calendar-header-1-25-0__group">
        <button
          aria-label="previous month"
          type="button"
          class="kuc-base-datetime-calendar-header-1-25-0__group__button kuc-base-datetime-calendar-header-1-25-0__group__button--previous-month"
          @click="${this._handleClickCalendarPrevMonthBtn}"
          @keydown="${this._handleKeyDownCalendarPrevMonthBtn}"
        >
          ${Lo()}
        </button>
        <div class="kuc-base-datetime-calendar-header-1-25-0__group__center">
          ${this._getYearMonthTemplate()}
        </div>
        <button
          aria-label="next month"
          type="button"
          class="kuc-base-datetime-calendar-header-1-25-0__group__button kuc-base-datetime-calendar-header-1-25-0__group__button--next-month"
          @click="${this._handleClickCalendarNextMonthBtn}"
        >
          ${Ho()}
        </button>
      </div>
    `}_getYearTemplate(){return B`
      <kuc-base-datetime-header-year-1-25-0
        class="kuc-base-datetime-calendar-header-1-25-0__year"
        .postfix="${this._locale.YEAR_SELECT_POSTFIX}"
        .year="${this.year}"
        @kuc:year-dropdown-change="${this._handleYearDropdownChange}"
        @kuc:year-dropdown-click="${this._handleYearDropdownClick}"
      >
      </kuc-base-datetime-header-year-1-25-0>
    `}_getMonthTemplate(){return B`
      <kuc-base-datetime-header-month-1-25-0
        class="kuc-base-datetime-calendar-header-1-25-0__month"
        .month="${this.month}"
        .language="${this.language}"
        @kuc:month-dropdown-change="${this._handleMonthDropdownChange}"
        @kuc:month-dropdown-click="${this._handleMonthDropdownClick}"
      >
      </kuc-base-datetime-header-month-1-25-0>
    `}_getYearMonthTemplate(){return this.language===`zh`||this.language===`ja`||this.language===`zh-TW`?B` ${this._getYearTemplate()}${this._getMonthTemplate()} `:B` ${this._getMonthTemplate()}${this._getYearTemplate()} `}_handleMonthDropdownChange(e){e.stopPropagation(),e.preventDefault(),this.month=parseInt(e.detail.value,10),this._dispatchCalendarHeaderChangeEvent()}_handleYearDropdownChange(e){e.stopPropagation(),e.preventDefault(),this.year=parseInt(e.detail.value,10),this._dispatchCalendarHeaderChangeEvent()}_handleYearDropdownClick(){this._listBoxMonthEl&&this._baseDateTimeHeaderMonthEl.closeListBox()}_handleMonthDropdownClick(){this._listBoxYearEl&&this._baseDateTimeHeaderYearEl.closeListBox()}_handleClickCalendarPrevMonthBtn(e){e.stopPropagation(),this.month===1?(this.month=12,this.year--):--this.month,this._dispatchCalendarHeaderChangeEvent()}_handleKeyDownCalendarPrevMonthBtn(e){!e.shiftKey||e.key!==`Tab`||(e.preventDefault(),Y(this,`kuc:calendar-header-previous-shifttab`))}_handleClickCalendarNextMonthBtn(e){e.stopPropagation(),this.month===12?(this.month=1,this.year++):this.month+=1,this._dispatchCalendarHeaderChangeEvent()}_dispatchCalendarHeaderChangeEvent(){let e={value:`${this.year}-${this.month}`};Y(this,`kuc:calendar-header-change`,e)}};Ls([H({type:String,attribute:`lang`,reflect:!0})],Bs.prototype,`language`,void 0),Ls([H({type:Number,hasChanged(e){return Rs(e)}})],Bs.prototype,`month`,void 0),Ls([H({type:Number,hasChanged(e){return zs(e)}})],Bs.prototype,`year`,void 0),Ls([W(`.kuc-base-datetime-calendar-header-1-25-0__month`)],Bs.prototype,`_baseDateTimeHeaderMonthEl`,void 0),Ls([W(`.kuc-base-datetime-calendar-header-1-25-0__year`)],Bs.prototype,`_baseDateTimeHeaderYearEl`,void 0),Ls([W(`.kuc-base-datetime-header-month-1-25-0__listbox`)],Bs.prototype,`_listBoxMonthEl`,void 0),Ls([W(`.kuc-base-datetime-header-year-1-25-0__listbox`)],Bs.prototype,`_listBoxYearEl`,void 0),window.customElements.get(`kuc-base-datetime-calendar-header-1-25-0`)||(X(Is),window.customElements.define(`kuc-base-datetime-calendar-header-1-25-0`,Bs));var Vs=`
kuc-base-datetime-calendar-footer-1-25-0,
kuc-base-datetime-calendar-footer-1-25-0 *,
kuc-base-datetime-calendar-footer-1-25-0:lang(en),
kuc-base-datetime-calendar-footer-1-25-0:lang(en) * {
  font-family: sans-serif;
}
kuc-base-datetime-calendar-footer-1-25-0:lang(ja),
kuc-base-datetime-calendar-footer-1-25-0:lang(ja) * {
  font-family: "メイリオ", "Hiragino Kaku Gothic ProN", Meiryo,
    sans-serif;
}
kuc-base-datetime-calendar-footer-1-25-0:lang(zh),
kuc-base-datetime-calendar-footer-1-25-0:lang(zh) * {
  font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,
    Hei, "Heiti SC", sans-serif;
}
kuc-base-datetime-calendar-footer-1-25-0:lang(zh-TW),
kuc-base-datetime-calendar-footer-1-25-0:lang(zh-TW) * {
  font-family: "微軟正黑體","Microsoft JhengHei","新宋体",NSimSun,STHeiti,
    Hei,"Heiti SC",sans-serif;
}
kuc-base-datetime-calendar-footer-1-25-0:lang(es),
kuc-base-datetime-calendar-footer-1-25-0:lang(es) * {
  font-family: sans-serif;
}
.kuc-base-datetime-calendar-footer-1-25-0__group {
  display: flex;
  align-items: flex-end;
  box-sizing: border-box;
  padding: 0;
  height: 27px;
  white-space: nowrap;
  width: 272px;
}
.kuc-base-datetime-calendar-footer-1-25-0__group__button {
  background: transparent;
  border: 1px solid transparent;
  color: #3498db;
  cursor: pointer;
  font-size: 13px;
  outline: none;
}
.kuc-base-datetime-calendar-footer-1-25-0__group__button:hover {
  color: #217dbb;
}
.kuc-base-datetime-calendar-footer-1-25-0__group__button:focus {
  border: 1px solid #3498db;
  outline: none;
}
.kuc-base-datetime-calendar-footer-1-25-0__group__center {
  width: 100%;
}
`,Hs=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},Us=class extends J{constructor(){super(...arguments),this.language=`en`,this._locale=jo(`en`)}update(e){e.has(`language`)&&(this._locale=jo(this.language)),super.update(e)}_handleClickCalendarFooterButtonNone(e){e.stopPropagation(),Y(this,`kuc:calendar-footer-click-none`)}_handleClickCalendarFooterButtonToday(e){e.stopPropagation(),Y(this,`kuc:calendar-footer-click-today`)}_handleKeyDownCalendarFooterButtonNone(e){e.key===`Tab`&&(e.shiftKey||(e.preventDefault(),Y(this,`kuc:calendar-footer-tab-none`)))}render(){return B`
      <div class="kuc-base-datetime-calendar-footer-1-25-0__group">
        <button
          type="button"
          tabindex="0"
          class="kuc-base-datetime-calendar-footer-1-25-0__group__button kuc-base-datetime-calendar-footer-1-25-0__group__button--today"
          @click="${this._handleClickCalendarFooterButtonToday}"
        >
          ${this._locale.CALENDAR_FOOTER_TEXT.today}
        </button>
        <span class="kuc-base-datetime-calendar-footer-1-25-0__group__center"></span>
        <button
          type="button"
          tabindex="0"
          class="kuc-base-datetime-calendar-footer-1-25-0__group__button kuc-base-datetime-calendar-footer-1-25-0__group__button--none"
          @click="${this._handleClickCalendarFooterButtonNone}"
          @keydown="${this._handleKeyDownCalendarFooterButtonNone}"
        >
          ${this._locale.CALENDAR_FOOTER_TEXT.none}
        </button>
      </div>
    `}};Hs([H({type:String,attribute:`lang`,reflect:!0})],Us.prototype,`language`,void 0),Hs([U()],Us.prototype,`_locale`,void 0),window.customElements.get(`kuc-base-datetime-calendar-footer-1-25-0`)||(X(Vs),window.customElements.define(`kuc-base-datetime-calendar-footer-1-25-0`,Us));var Ws=`
.kuc-base-datetime-calendar-1-25-0__group {
  display: inline-block;
  box-sizing: border-box;
  width: 336px;
  padding: 32px 32px 24px;
  background: #ffffff;
  text-align: center;
  font-size: 13px;
}
`,Gs=`
kuc-base-datetime-calendar-body-1-25-0,
kuc-base-datetime-calendar-body-1-25-0 *,
kuc-base-datetime-calendar-body-1-25-0:lang(en),
kuc-base-datetime-calendar-body-1-25-0:lang(en) * {
  font-family: sans-serif;
}
kuc-base-datetime-calendar-body-1-25-0:lang(ja),
kuc-base-datetime-calendar-body-1-25-0:lang(ja) * {
  font-family: "メイリオ", "Hiragino Kaku Gothic ProN", Meiryo,
    sans-serif;
}
kuc-base-datetime-calendar-body-1-25-0:lang(zh),
kuc-base-datetime-calendar-body-1-25-0:lang(zh) * {
  font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,
    Hei, "Heiti SC", sans-serif;
}
kuc-base-datetime-calendar-body-1-25-0:lang(zh-TW),
kuc-base-datetime-calendar-body-1-25-0:lang(zh-TW) * {
  font-family: "微軟正黑體","Microsoft JhengHei","新宋体",NSimSun,STHeiti,
    Hei,"Heiti SC",sans-serif;
}
kuc-base-datetime-calendar-body-1-25-0:lang(es),
kuc-base-datetime-calendar-body-1-25-0:lang(es) * {
  font-family: sans-serif;
}
.kuc-base-datetime-calendar-body-1-25-0__table,
.kuc-base-datetime-calendar-body-1-25-0__table tr {
  border-collapse: separate;
  border-spacing: 0;
}
.kuc-base-datetime-calendar-body-1-25-0__table__date,
.kuc-base-datetime-calendar-body-1-25-0__table__date--selected {
  border-spacing: 1px;
  padding: 0px;
  border: 1px solid #ffffff;
}
.kuc-base-datetime-calendar-body-1-25-0__table__header {
  text-align: center;
  text-transform: uppercase;
  font-size: 10px;
  font-weight: 400;
  color: #333333;
}
:lang(ja) th.kuc-base-datetime-calendar-body-1-25-0__table__header {
  font-weight: 700;
}
:lang(es) th.kuc-base-datetime-calendar-body-1-25-0__table__header {
  text-transform: revert;
}
.kuc-base-datetime-calendar-body-1-25-0__table__date--selected,
.kuc-base-datetime-calendar-body-1-25-0__table__date,
.kuc-base-datetime-calendar-body-1-25-0__table__header {
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
.kuc-base-datetime-calendar-body-1-25-0__table__header:nth-child(1),
.kuc-base-datetime-calendar-body-1-25-0__table__header:nth-child(7) {
  color: #d4d7d7;
}
.kuc-base-datetime-calendar-body-1-25-0__table__date:focus,
.kuc-base-datetime-calendar-body-1-25-0__table__date--selected:focus {
  outline: none;
}
.kuc-base-datetime-calendar-body-1-25-0__table__date
  .kuc-base-datetime-calendar-body-1-25-0__table__date__button:hover {
  color: #000000;
}
.kuc-base-datetime-calendar-body-1-25-0__table__date--selected {
  border-color: #3498db;
}
.kuc-base-datetime-calendar-body-1-25-0__table__date--selected--today,
.kuc-base-datetime-calendar-body-1-25-0__table__date--today {
  color: #ffffff;
  background: #888888;
}
.kuc-base-datetime-calendar-body-1-25-0__table__date--today:hover {
  color: #333333;
}
.kuc-base-datetime-calendar-body-1-25-0__table__date--other-month,
.kuc-base-datetime-calendar-body-1-25-0__table__date--other-month:hover {
  color: #d4d7d7;
}
`,Ks=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},qs=class extends J{constructor(){super(),this.month=1,this.year=2021,this.language=`en`,this.value=``,this._month=1,this._year=2021,this._locale=jo(`en`),this._handleKeyDownDocument=this._handleKeyDownDocument.bind(this)}connectedCallback(){super.connectedCallback(),setTimeout(()=>{document.addEventListener(`keydown`,this._handleKeyDownDocument)},1)}disconnectedCallback(){document.removeEventListener(`keydown`,this._handleKeyDownDocument),super.disconnectedCallback()}update(e){if(e.forEach((e,t)=>{t===`language`&&(this._locale=jo(this.language))}),e.has(`month`)&&(this._month=this.month),e.has(`year`)&&(this._year=this.year),e.has(`value`)){let{month:e,year:t}=this._separateDateValue();this._month=parseInt(e,10),this._year=parseInt(t,10)}super.update(e)}render(){return B`
      <table class="kuc-base-datetime-calendar-body-1-25-0__table" role="grid">
        ${this._getHeaderItemsTemplate()}<!--
        -->${this._getDateItemsTemplate()}
      </table>
    `}updated(e){e.has(`value`)&&this.focusActiveDate(),super.update(e)}focusActiveDate(){this._focusedItem&&this._focusedItem.focus({preventScroll:!0})}_handleKeyDownDocument(e){e.key===`Escape`&&(e.preventDefault(),e.stopPropagation(),Y(this,`kuc:calendar-body-blur`,{}))}_handleClickDate(e){e.preventDefault(),e.stopPropagation();let t=e.target;t.setAttribute(`aria-selected`,`true`);let n=t.getAttribute(`data-date`)||``;this._dispatchClickEvent(n)}_handleKeyDownDate(e){let t=!1;switch(e.key){case`Up`:case`ArrowUp`:t=!0,this._moveToDate(-7);break;case`Down`:case`ArrowDown`:t=!0,this._moveToDate(7);break;case`Left`:case`ArrowLeft`:t=!0,this._moveToDate(-1);break;case`Right`:case`ArrowRight`:t=!0,this._moveToDate(1);break;case` `:case`Enter`:{t=!0;let e=this._getSelectedValue();this._dispatchClickEvent(e);break}default:break}t&&(e.stopPropagation(),e.preventDefault())}_dispatchClickEvent(e){let t={oldValue:this.value,value:e};Y(this,`kuc:calendar-body-click-date`,t),this.value=e}_isToday(e){let t=new Date;return parseInt(e[0],10)===t.getFullYear()&&parseInt(e[1],10)===t.getMonth()+1&&parseInt(e[2],10)===t.getDate()}_moveToDate(e){let t=this.value,n=this._getSelectedValue(),{day:r}=this._separateDateValue(n);t=`${this._year}-${K(this._month)}-${r}`;let i=new Date(`${t||this._getValueItemFocused()}T00:00:00`);if(isNaN(i.getTime()))return;i.setDate(i.getDate()+e);let a=this._getDateString(i),o=t;this.value=a;let s={oldValue:o,value:a};Y(this,`kuc:calendar-body-change-date`,s)}_separateDateValue(e=this.value){let t=e.split(`-`);return{day:t[2],month:t[1],year:t[0]}}_getSelectedValue(){return this._highlightItem?this._highlightItem.dataset.date||``:this._selectedItem&&this._selectedItem.getAttribute(`data-date`)||``}_getValueItemFocused(){return this._focusedItem&&this._focusedItem.getAttribute(`data-date`)||``}_getDateClass(e,t){return t?this._isToday(e)?` kuc-base-datetime-calendar-body-1-25-0__table__date--selected--today`:``:this._isToday(e)?` kuc-base-datetime-calendar-body-1-25-0__table__date--selected--today`:` kuc-base-datetime-calendar-body-1-25-0__table__date--other-month`}_getDateString(e=new Date){return`${e.getFullYear()}-${K(e.getMonth()+1)}-${K(e.getDate())}`}_isSameDayOfMoment(e){let t=parseInt(e[1],10),n=parseInt(e[2],10),r=parseInt(e[0],10),i=new Date().getDate();if(!this.value.split(`-`)[2])return!1;if(this.value&&(i=new Date(`${this.value}T00:00:00`).getDate()),i===n&&t===this._month)return!0;let a=new Date(r,this._month,0).getDate();return i>a&&a===n&&t===this._month}_getHeaderItemsTemplate(){return B`
      <thead>
        <tr>
          ${this._locale.WEEK_DAYS.map(e=>B`
              <th
                class="kuc-base-datetime-calendar-body-1-25-0__table__header"
                role="columnheader"
                abbr="${e.abbr}"
              >
                ${e.text}
              </th>
            `)}
        </tr>
      </thead>
    `}_getDateItemsTemplate(){let e=fo(this._year,this._month-1),t=this._locale.MONTH_SELECT[this._month-1];return B`
      <tbody>
        ${e.map(e=>B`
            <tr>
              ${e.map(e=>{let n=e.text.split(`-`),r=this._isSameDayOfMoment(n),i=parseInt(n[1],10)===this._month,a=(this.value===e.attr||r)&&i;return B`
                  <td
                    role="gridcell"
                    class="kuc-base-datetime-calendar-body-1-25-0__table__date${a?`--selected`:``}${this._getDateClass(n,i)}"
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
    `}};Ks([H({type:Number})],qs.prototype,`month`,void 0),Ks([H({type:Number})],qs.prototype,`year`,void 0),Ks([H({type:String,attribute:`lang`,reflect:!0})],qs.prototype,`language`,void 0),Ks([H({type:String,reflect:!0})],qs.prototype,`value`,void 0),Ks([U()],qs.prototype,`_month`,void 0),Ks([U()],qs.prototype,`_year`,void 0),Ks([W(`.kuc-base-datetime-calendar-body-1-25-0__table__date--selected[aria-selected="true"]`)],qs.prototype,`_selectedItem`,void 0),Ks([W(`.kuc-base-datetime-calendar-body-1-25-0__table__date--selected`)],qs.prototype,`_highlightItem`,void 0),Ks([W(`.kuc-base-datetime-calendar-body-1-25-0__table__date--selected[tabindex="0"]`)],qs.prototype,`_focusedItem`,void 0),window.customElements.get(`kuc-base-datetime-calendar-body-1-25-0`)||(X(Gs),window.customElements.define(`kuc-base-datetime-calendar-body-1-25-0`,qs));var Js=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},Ys=class extends J{constructor(){super(...arguments),this.language=`en`,this.value=``,this._month=1,this._year=new Date().getFullYear()}update(e){e.has(`value`)&&this._updateValue(),super.update(e)}render(){return B`
      <div
        class="kuc-base-datetime-calendar-1-25-0__group"
        role="dialog"
        aria-modal="true"
        aria-label="Calender"
        @click="${this._handleClickCalendarGroup}"
        @keydown="${this._handleKeyDownCalendarGroup}"
      >
        <kuc-base-datetime-calendar-header-1-25-0
          .year="${this._year}"
          .month="${this._month}"
          .language="${this.language}"
          @kuc:calendar-header-change="${this._handleCalendarHeaderChange}"
        ></kuc-base-datetime-calendar-header-1-25-0>
        <kuc-base-datetime-calendar-body-1-25-0
          .year="${this._year}"
          .month="${this._month}"
          .value="${this.value}"
          .language="${this.language}"
          @kuc:calendar-body-change-date="${this._handleCalendarBodyChangeDate}"
        ></kuc-base-datetime-calendar-body-1-25-0>
        <kuc-base-datetime-calendar-footer-1-25-0
          .language="${this.language}"
        ></kuc-base-datetime-calendar-footer-1-25-0>
      </div>
    `}async updated(e){await this.updateComplete,super.updated(e)}focusActiveDate(){let e=this.querySelector(`kuc-base-datetime-calendar-body-1-25-0`);e&&e.focusActiveDate()}repositionHeaderListboxes(){var e,t;(e=this._monthEl)==null||e.repositionListBox(),(t=this._yearEl)==null||t.repositionListBox()}_handleKeyDownCalendarGroup(e){e.key===`Escape`&&(e.preventDefault(),e.stopPropagation(),Y(this,`kuc:calendar-escape`,{}))}_handleClickCalendarGroup(e){e.stopPropagation(),this._listBoxMonthEl&&this._monthEl.closeListBox(),this._listBoxYearEl&&this._yearEl.closeListBox()}_handleCalendarHeaderChange(e){let{year:t,month:n}=this._separateValue(e.detail.value);this._year=t,this._month=n}_handleCalendarBodyChangeDate(e){let{year:t,month:n}=this._separateValue(e.detail.value);this._year=t,this._month=n}_updateValue(){this.value===``&&(this.value=Oo().slice(0,7)+`-01`);let{year:e,month:t}=this._separateValue(this.value);this._year=e,this._month=t}_separateValue(e){let t=e.split(`-`);return{year:parseInt(t[0],10),month:parseInt(t[1],10)}}};Js([H({type:String,attribute:`lang`,reflect:!0})],Ys.prototype,`language`,void 0),Js([H({type:String,reflect:!0})],Ys.prototype,`value`,void 0),Js([W(`.kuc-base-datetime-calendar-header-1-25-0__month`)],Ys.prototype,`_monthEl`,void 0),Js([W(`.kuc-base-datetime-calendar-header-1-25-0__year`)],Ys.prototype,`_yearEl`,void 0),Js([W(`.kuc-base-datetime-header-month-1-25-0__listbox`)],Ys.prototype,`_listBoxMonthEl`,void 0),Js([W(`.kuc-base-datetime-header-year-1-25-0__listbox`)],Ys.prototype,`_listBoxYearEl`,void 0),Js([U()],Ys.prototype,`_month`,void 0),Js([U()],Ys.prototype,`_year`,void 0),window.customElements.get(`kuc-base-datetime-calendar-1-25-0`)||(X(Ws),window.customElements.define(`kuc-base-datetime-calendar-1-25-0`,Ys));var Xs=`
kuc-base-datetime-listbox-1-25-0,
kuc-base-datetime-listbox-1-25-0 *,
kuc-base-datetime-listbox-1-25-0:lang(en),
kuc-base-datetime-listbox-1-25-0:lang(en) * {
  font-family: sans-serif;
}
kuc-base-datetime-listbox-1-25-0:lang(ja),
kuc-base-datetime-listbox-1-25-0:lang(ja) * {
  font-family: "メイリオ", "Hiragino Kaku Gothic ProN", Meiryo,
    sans-serif;
}
kuc-base-datetime-listbox-1-25-0:lang(zh),
kuc-base-datetime-listbox-1-25-0:lang(zh) * {
  font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,
    Hei, "Heiti SC", sans-serif;
}
kuc-base-datetime-listbox-1-25-0:lang(zh-TW),
kuc-base-datetime-listbox-1-25-0:lang(zh-TW) * {
  font-family: "微軟正黑體","Microsoft JhengHei","新宋体",NSimSun,STHeiti,
    Hei,"Heiti SC"
}
kuc-base-datetime-listbox-1-25-0:lang(es),
kuc-base-datetime-listbox-1-25-0:lang(es) * {
  font-family: sans-serif;
}
.kuc-base-datetime-listbox-1-25-0__listbox[popover] {
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
.kuc-base-datetime-listbox-1-25-0__listbox__item {
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
.kuc-base-datetime-listbox-1-25-0__listbox__item[aria-selected="true"] {
  color: #3498db;
}
.kuc-base-datetime-listbox-1-25-0__listbox--highlight {
  background-color: #e2f2fe;
  cursor: pointer;
}
.kuc-base-datetime-listbox-1-25-0__listbox__item__icon {
  position: absolute;
  left: 8px;
  top: 10px;
  background-color: transparent;
}
.kuc-base-datetime-listbox-1-25-0__listbox__item:focus {
  outline: none;
}
`,Zs=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},Qs=class extends J{constructor(){super(),this.value=``,this.items=[],this.maxHeight=300,this.doFocus=!0,this._actionKeyboard=!1,this._firstHighlight=!0,this._handleClickDocument=this._handleClickDocument.bind(this)}connectedCallback(){super.connectedCallback(),setTimeout(()=>{document.addEventListener(`click`,this._handleClickDocument)},1)}disconnectedCallback(){document.removeEventListener(`click`,this._handleClickDocument),super.disconnectedCallback()}getHighlightItemEl(){return this._highlightItemEl}showPopover(){var e;this.requestUpdate(),(e=this._listBoxEl)==null||e.showPopover()}hidePopover(){var e;(e=this._listBoxEl)==null||e.hidePopover(),this.requestUpdate()}render(){return B`
      <ul
        popover="manual"
        style="max-height: ${this.maxHeight}px;"
        class="kuc-base-datetime-listbox-1-25-0__listbox"
        role="listbox"
        @mousedown="${this._handleMouseDownListBox}"
        @click="${this._handleClickListBox}"
      >
        ${this.items.map(e=>this._getListBoxItemTemplate(e))}
      </ul>
    `}async updated(e){await this.updateComplete,e.has(`value`)&&this._highlightSelectedItem(),this._scrollToView(),super.updated(e)}_handleClickDocument(){Y(this,`kuc:listbox-blur`,{})}_handleClickListBox(e){e.stopPropagation()}_handleKeyDownListBox(e){switch(e.preventDefault(),e.stopPropagation(),e.key){case`Up`:case`ArrowUp`:this._actionKeyboard=!0,this._highlightPrevItemEl(),this._focusHighlightItemEl(),this._scrollToView();break;case`Down`:case`ArrowDown`:this._actionKeyboard=!0,this._highlightNextItemEl(),this._focusHighlightItemEl(),this._scrollToView();break;case`Home`:this._actionKeyboard=!0,this._highlightFirstItem(),this._focusHighlightItemEl();break;case`End`:this._actionKeyboard=!0,this._highlightLastItem(),this._focusHighlightItemEl();break;case`Tab`:Y(this,`kuc:listbox-click`,{});break;case`Escape`:Y(this,`kuc:listbox-escape`,{});break;case` `:case`Enter`:{let e={value:this._highlightItemEl.getAttribute(`value`)||``};Y(this,`kuc:listbox-click`,e);break}}}_handleMouseDownListBox(e){if(e.preventDefault(),e.stopPropagation(),e.target===e.currentTarget)return;let t={value:e.target.getAttribute(`value`)||``};Y(this,`kuc:listbox-click`,t)}_handleMouseOverItem(e){if(this._actionKeyboard){this._actionKeyboard=!1;return}let t=e.target;this._setHighlightItemEl(t),this.doFocus&&this._focusHighlightItemEl(!1)}_setHighlightItemEl(e){this._removeHighlight(),e.classList.add(`kuc-base-datetime-listbox-1-25-0__listbox--highlight`),e.setAttribute(`tabindex`,`0`)}_highlightSelectedItem(){if(!this.doFocus)return;let e=Array.from(this._itemsEl).filter(e=>e.getAttribute(`aria-selected`)===`true`)[0];e&&(this._itemSelectedEl=e,this._setHighlightItemEl(e),this._focusHighlightItemEl())}_highlightFirstItem(){this._itemSelectedEl=this._firstItemEl,this._setHighlightItemEl(this._firstItemEl)}_highlightLastItem(){this._itemSelectedEl=this._lastItemEl,this._setHighlightItemEl(this._lastItemEl)}_highlightNextItemEl(){if(this._highlightItemEl===null||this._iconChecked===null){this._highlightFirstItem();return}let e=this._getNextItemEl();if(e){this._setHighlightItemEl(e),this._firstHighlight=!1,this._itemSelectedEl=e;return}this._highlightFirstItem()}_getNextItemEl(){let e=this._iconChecked.parentElement;!this._itemSelectedEl&&e&&this._firstHighlight&&(this._itemSelectedEl=e);let t=this._highlightItemEl.nextElementSibling;return this._itemSelectedEl?this._itemSelectedEl.nextElementSibling?(t=this._itemSelectedEl.nextElementSibling,t):this._firstItemEl:t}_highlightPrevItemEl(){if(this._highlightItemEl===null||this._iconChecked===null){this._highlightLastItem();return}let e=this._getPreviousItemEl();if(e){this._setHighlightItemEl(e),this._firstHighlight=!1,this._itemSelectedEl=e;return}this._highlightLastItem()}_getPreviousItemEl(){let e=this._iconChecked.parentElement;!this._itemSelectedEl&&e&&this._firstHighlight&&(this._itemSelectedEl=e);let t=this._highlightItemEl.previousElementSibling;return this._itemSelectedEl?this._itemSelectedEl.previousElementSibling?(t=this._itemSelectedEl.previousElementSibling,t):this._lastItemEl:t}_removeHighlight(){this._highlightItemEl&&(this._highlightItemEl.setAttribute(`tabindex`,`-1`),this._highlightItemEl.classList.remove(`kuc-base-datetime-listbox-1-25-0__listbox--highlight`))}_focusHighlightItemEl(e){let t=this._highlightItemEl;t&&(t.focus({preventScroll:!0}),e!==!1&&this._dispatchListBoxFocusChange())}_dispatchListBoxFocusChange(){let e={value:this._highlightItemEl.getAttribute(`value`)||``};Y(this,`kuc:listbox-focus-change`,e)}_scrollToView(){let e=this._highlightItemEl||this._getHighlightItemByValue();if(!e||!this._listBoxEl)return;let t=e.offsetHeight,n=this._listBoxEl.clientHeight/t/2,r=e.offsetTop-n*t;r<0&&(r=0),this._listBoxEl.scrollTop=r}_getHighlightItemByValue(){let e=Array.from(this._listBoxEl.children),t=new Date(Date.parse(`2021/01/01 ${this.value}`)),n=e.find(e=>new Date(Date.parse(`2021/01/01 ${e.title}`))>=t);return n||=e[e.length-1],!this.doFocus||!n?n:(this._setHighlightItemEl(n),this._focusHighlightItemEl(),n)}_getListBoxItemTemplate(e){let t=this.value===e.value&&this.doFocus;return B`
      <li
        class="kuc-base-datetime-listbox-1-25-0__listbox__item"
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
    `}_getCheckedIconSvgTemplate(){return V`<svg
          class="kuc-base-datetime-listbox-1-25-0__listbox__item__icon"
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
        </svg>`}};Zs([H({type:String})],Qs.prototype,`value`,void 0),Zs([H({type:Array})],Qs.prototype,`items`,void 0),Zs([H({type:Number})],Qs.prototype,`maxHeight`,void 0),Zs([H({type:Boolean})],Qs.prototype,`doFocus`,void 0),Zs([W(`.kuc-base-datetime-listbox-1-25-0__listbox`)],Qs.prototype,`_listBoxEl`,void 0),Zs([Ra(`.kuc-base-datetime-listbox-1-25-0__listbox__item`)],Qs.prototype,`_itemsEl`,void 0),Zs([W(`.kuc-base-datetime-listbox-1-25-0__listbox__item`)],Qs.prototype,`_firstItemEl`,void 0),Zs([W(`.kuc-base-datetime-listbox-1-25-0__listbox__item:last-child`)],Qs.prototype,`_lastItemEl`,void 0),Zs([W(`.kuc-base-datetime-listbox-1-25-0__listbox--highlight`)],Qs.prototype,`_highlightItemEl`,void 0),Zs([W(`.kuc-base-datetime-listbox-1-25-0__listbox__item__icon`)],Qs.prototype,`_iconChecked`,void 0),Zs([U()],Qs.prototype,`_actionKeyboard`,void 0),Zs([U()],Qs.prototype,`_firstHighlight`,void 0),window.customElements.get(`kuc-base-datetime-listbox-1-25-0`)||(X(Xs),window.customElements.define(`kuc-base-datetime-listbox-1-25-0`,Qs));var $s=`
input.kuc-base-date-1-25-0__input {
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

input.kuc-base-date-1-25-0__input:focus {
  outline: none;
  border: 1px solid #3498db;
}
input.kuc-base-date-1-25-0__input--focus {
  box-shadow: 2px 2px 4px #f5f5f5 inset, -2px -2px 4px #f5f5f5 inset;
  border: 1px solid #3498db;
  background-color: #ffffff;
  color: #333333;
}
.kuc-datetime-picker-1-25-0__group__inputs--date
  input.kuc-base-date-1-25-0__input--focus {
  border-color: #3498db;
}
input.kuc-base-date-1-25-0__input:disabled {
  color: #888888 !important;
  background-color: #d4d7d7;
  box-shadow: none;
  cursor: not-allowed;
}
.kuc-base-date-1-25-0__calendar {
  padding: 0;
  border: none;
  background-color: #ffffff;
  text-align: center;
  box-sizing: border-box;
  box-shadow: 0 0 8px 2px rgb(0 0 0 / 10%);
}
.kuc-base-date-1-25-0__calendar[popover] {
  position: fixed;
  z-index: 2000;
  right: auto;
  bottom: auto;
}
.kuc-base-date-1-25-0__assistive-text {
  clip: rect(1px, 1px, 1px, 1px);
  overflow: hidden;
  position: absolute !important;
  padding: 0px !important;
  border: 0px !important;
  height: 1px !important;
  width: 1px !important;
}
`,ec=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},tc=class extends J{constructor(){super(...arguments),this.inputAriaLabel=``,this.inputId=``,this.language=`en`,this.value=``,this.disabled=!1,this.inputAriaInvalid=!1,this.required=!1,this._dateTimeCalendarVisible=!1,this._locale=jo(`en`),this._calendarValue=``,this._inputValue=``,this._valueForReset=``,this._resizeDebounceTimer=null,this._scrollRAF=0,this._calendarNaturalWidth=0,this._calendarNaturalHeight=0,this._scrollTargets=[],this._DEBOUNCE_DELAY=200,this._schedulePositionOnScroll=()=>{!this._dateTimeCalendarVisible||this._scrollRAF||(this._scrollRAF=requestAnimationFrame(()=>{this._scrollRAF=0,this._positionCalendar()}))},this._schedulePositionOnResize=()=>{this._dateTimeCalendarVisible&&(this._resizeDebounceTimer!==null&&window.clearTimeout(this._resizeDebounceTimer),this._resizeDebounceTimer=window.setTimeout(()=>{var e;this._resizeDebounceTimer=null,this._positionCalendar(),(e=this._calendarEl)==null||e.repositionHeaderListboxes()},this._DEBOUNCE_DELAY))},this._onDocClick=e=>{let t=e.composedPath(),n=this._calendarEl&&t.includes(this._calendarEl),r=t.includes(this._dateInput);!n&&!r&&this._closeCalendar()},this._positionCalendar=()=>{if(!this._calendarEl||!this._dateInput)return;let e=this._dateInput.getBoundingClientRect(),t=this._calendarNaturalWidth||336,n=this._calendarNaturalHeight||0,r=e.top,i=window.innerHeight-e.bottom,a;a=e.bottom,i<r&&(a=e.top-n);let o=e.left;o>window.innerWidth-t&&window.innerWidth-e.left<e.right&&(o=e.right-t),this._calendarEl.style.left=`${Math.floor(o)}px`,this._calendarEl.style.top=`${Math.floor(a)}px`}}update(e){e.has(`inputId`)&&(this._GUID=this.inputId),e.has(`language`)&&(this._locale=jo(this.language),this._updateValueProp()),e.has(`value`)&&this._updateValueProp(),super.update(e)}disconnectedCallback(){this._scrollRAF&&=(cancelAnimationFrame(this._scrollRAF),0),this._resizeDebounceTimer!==null&&(window.clearTimeout(this._resizeDebounceTimer),this._resizeDebounceTimer=null),this._detachListeners(),super.disconnectedCallback()}render(){return B`
      <input
        class="kuc-base-date-1-25-0__input"
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
        class="kuc-base-date-1-25-0__assistive-text"
        @click="${this._handleClickButton}"
        @focus="${this._handleFocusButton}"
        @blur="${this._handleBlurButton}"
        ?disabled="${this.disabled}"
      >
        show date picker
      </button>
      <kuc-base-datetime-calendar-1-25-0
        class="kuc-base-date-1-25-0__calendar"
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
      </kuc-base-datetime-calendar-1-25-0>
    `}updated(e){e.has(`inputAriaLabel`)&&this.inputAriaLabel&&this._dateInput.setAttribute(`aria-label`,this.inputAriaLabel),super.updated(e)}_handleInputValue(e){let t=e.target.value;this._inputValue=t||``}_handleClickInput(){if(!this._dateTimeCalendarVisible){this._valueForReset=this.value,this._calendarValue=this._getNewCalendarValue(this._inputValue||``),this._openCalendar();return}this._closeCalendar()}_updateValueProp(){if(this.value){let e=this._setCalendarValueWhenInvalidValue();this._inputValue=To(this.language,this.value),this._calendarValue=e||this.value;return}let e=Oo();this._inputValue=``,this._calendarValue=this._calendarValue?this._calendarValue.slice(0,7)+`-01`:e.slice(0,7)}_setCalendarValueWhenInvalidValue(){if(this.value&&!cs(this.value)){let e=Oo();return this._calendarValue||e.slice(0,7)}return``}_getNewCalendarValue(e){if(ko(this.language,e))return Eo(this.language,e);if(!this._calendarValue)return``;let t=this._calendarValue.slice(0,7);return e===``&&(t=this._calendarValue.slice(0,7)+`-01`),t}_handleChangeInput(e){e.stopPropagation();let t=(e?.target).value;if(this._calendarValue=this._getNewCalendarValue(t),this._calendarValue.length>7){this._dispathDateChangeCustomEvent(Eo(this.language,t));return}let n={value:void 0,oldValue:this.value,error:this._locale.INVALID_FORMAT};this._inputValue=t,Y(this,`kuc:base-date-change`,n)}_handleKeyDownInput(e){e.key===`Escape`&&this._closeCalendar()}_closeCalendar(){this._dateTimeCalendarVisible=!1,this._calendarEl&&this._calendarEl.hidePopover(),this._scrollRAF&&=(cancelAnimationFrame(this._scrollRAF),0),this._resizeDebounceTimer!==null&&(window.clearTimeout(this._resizeDebounceTimer),this._resizeDebounceTimer=null),this._detachListeners()}async _openCalendar(){if(this._dateTimeCalendarVisible=!0,this._calendarEl){if(await this.updateComplete,this._calendarEl.showPopover(),!this._calendarNaturalWidth||!this._calendarNaturalHeight){let e=zo(this._calendarEl);this._calendarNaturalWidth=e.width,this._calendarNaturalHeight=e.height}this._positionCalendar(),this._attachListeners(),this._calendarEl.focusActiveDate()}}_attachListeners(){this._detachListeners(),this._scrollTargets=Bo(this._dateInput);for(let e of this._scrollTargets)e.addEventListener(`scroll`,this._schedulePositionOnScroll,{passive:!0});window.addEventListener(`resize`,this._schedulePositionOnResize),document.addEventListener(`click`,this._onDocClick,{capture:!0})}_detachListeners(){for(let e of this._scrollTargets)e.removeEventListener(`scroll`,this._schedulePositionOnScroll);this._scrollTargets=[],window.removeEventListener(`resize`,this._schedulePositionOnResize),document.removeEventListener(`click`,this._onDocClick,{capture:!0})}_handleShiftTabCalendarPrevMonth(){this._footerNoneBtn.focus()}_handleClickCalendarChangeDate(e){e.detail.oldValue=this.value,this.value=e.detail.value,Y(this,`kuc:base-date-change`,e.detail)}_handleClickCalendarClickDate(e){this._closeCalendar(),e.detail.oldValue=this.value,this._dateInput.focus(),e.detail.oldValue!==e.detail.value&&(this.value=e.detail.value,Y(this,`kuc:base-date-change`,e.detail))}_handleClickCalendarFooterButtonNone(){this._closeCalendar(),this._dateInput.focus(),this._inputValue=``;let e=Oo(),t=this._setCalendarValueWhenInvalidValue();t||=this._calendarValue?this._calendarValue.slice(0,7)+`-01`:e.slice(0,7)+`-01`,this._calendarValue=t,this._dispathDateChangeCustomEvent(void 0)}_handleTabCalendarFooterButtonNone(){this._previousMonth.focus()}_handleClickCalendarFooterButtonToday(){this._closeCalendar();let e=Oo();this._dateInput.focus(),this._dispathDateChangeCustomEvent(e)}_handleCalendarEscape(){let e=this._valueForReset;if(this._closeCalendar(),this._dateInput.focus(),e===this.value)return;let t={oldValue:this.value,value:e};this.value=e,Y(this,`kuc:base-date-change`,t)}_dispathDateChangeCustomEvent(e){let t={value:e,oldValue:this.value};this.value=e===void 0?``:e,Y(this,`kuc:base-date-change`,t)}_handleClickButton(){if(!this._dateTimeCalendarVisible){this._valueForReset=this.value,this._calendarValue=this._getNewCalendarValue(this._inputValue||``),this._openCalendar();return}this._closeCalendar()}_handleBlurButton(){this._dateInput.classList.remove(`kuc-base-date-1-25-0__input--focus`)}_handleFocusButton(){this._dateInput.classList.add(`kuc-base-date-1-25-0__input--focus`)}};ec([H({type:String})],tc.prototype,`inputAriaLabel`,void 0),ec([H({type:String})],tc.prototype,`inputId`,void 0),ec([H({type:String,attribute:`lang`,reflect:!0})],tc.prototype,`language`,void 0),ec([H({type:String,reflect:!0})],tc.prototype,`value`,void 0),ec([H({type:Boolean})],tc.prototype,`disabled`,void 0),ec([H({type:Boolean})],tc.prototype,`inputAriaInvalid`,void 0),ec([H({type:Boolean})],tc.prototype,`required`,void 0),ec([W(`.kuc-base-date-1-25-0__input`)],tc.prototype,`_dateInput`,void 0),ec([W(`.kuc-base-date-1-25-0__calendar`)],tc.prototype,`_calendarEl`,void 0),ec([W(`.kuc-base-datetime-calendar-header-1-25-0__group__button--previous-month`)],tc.prototype,`_previousMonth`,void 0),ec([W(`.kuc-base-datetime-calendar-footer-1-25-0__group__button--none`)],tc.prototype,`_footerNoneBtn`,void 0),ec([U()],tc.prototype,`_dateTimeCalendarVisible`,void 0),window.customElements.get(`kuc-base-date-1-25-0`)||(X($s),window.customElements.define(`kuc-base-date-1-25-0`,tc));var nc=`
kuc-date-picker-1-25-0,
kuc-date-picker-1-25-0 *,
kuc-date-picker-1-25-0:lang(en),
kuc-date-picker-1-25-0:lang(en) * {
  font-family: sans-serif;
}
kuc-date-picker-1-25-0:lang(ja),
kuc-date-picker-1-25-0:lang(ja) * {
  font-family: "メイリオ", "Hiragino Kaku Gothic ProN", Meiryo,
    sans-serif;
}
kuc-date-picker-1-25-0:lang(zh),
kuc-date-picker-1-25-0:lang(zh) * {
  font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,
    Hei, "Heiti SC", sans-serif;
}
kuc-date-picker-1-25-0:lang(zh-TW),
kuc-date-picker-1-25-0:lang(zh-TW) * {
  font-family: "微軟正黑體","Microsoft JhengHei","新宋体",NSimSun,STHeiti,
    Hei,"Heiti SC"
}
kuc-date-picker-1-25-0:lang(es),
kuc-date-picker-1-25-0:lang(es) * {
  font-family: sans-serif;
}
kuc-date-picker-1-25-0 {
  font-size: 14px;
  color: #333333;
  display: inline-table;
  vertical-align: top;
  max-width: var(--kuc-date-picker-input-width, 100px);
  width: var(--kuc-date-picker-input-width, 100px);
  line-height: 1.5;
}
kuc-date-picker-1-25-0[hidden] {
  display: none;
}
.kuc-date-picker-1-25-0__group {
  display: flex;
  flex-direction: column;
  border: none;
  padding: 0px;
  height: auto;
  margin: 0px;
}
.kuc-date-picker-1-25-0__group__label {
  display: inline-block;
  padding: 4px 0px 8px 0px;
  white-space: nowrap;
}
.kuc-date-picker-1-25-0__group__label[hidden] {
  display: none;
}
.kuc-date-picker-1-25-0__group input[type=text].kuc-base-date-1-25-0__input {
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

.kuc-date-picker-1-25-0__group kuc-base-date-1-25-0 {
  display: inline-flex;
}

.kuc-date-picker-1-25-0__group input[type=text].kuc-base-date-1-25-0__input:focus {
  outline: none;
  border: 1px solid #3498db;
}
.kuc-date-picker-1-25-0__group input[type=text].kuc-base-date-1-25-0__input--focus {
  box-shadow: 2px 2px 4px #f5f5f5 inset, -2px -2px 4px #f5f5f5 inset;
  border: 1px solid #3498db;
  background-color: #ffffff;
  color: var(--kuc-date-picker-input-color, #333333);
}
.kuc-date-picker-1-25-0__group input[type=text].kuc-base-date-1-25-0__input:disabled {
  color: #888888;
  background-color: #d4d7d7;
  box-shadow: none;
  cursor: not-allowed;
}
`,rc=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},ic;(()=>{if(ic=window.customElements.get(`kuc-date-picker-1-25-0`),ic)return;class e extends J{constructor(e){super(),this.className=``,this.error=``,this.id=``,this.label=``,this.disabled=!1,this.requiredIcon=!1,this.language=`auto`,this.value=``,this.visible=!0,this._errorFormat=``,this._errorText=``,this._inputValue=``,this._invalidValue=``,this._valueConverted=``,this._GUID=Z();let t=Q(e);Object.assign(this,t)}shouldUpdate(e){return this.value===void 0||this.value===``?!0:typeof this.value!=`string`||!as(this.value)||(this._valueConverted=Go(this.value),this._valueConverted&&!cs(this._valueConverted))?(this.throwErrorAfterUpdateComplete(ao.VALUE),!1):!0}willUpdate(e){e.has(`value`)&&(this.value===void 0?this._inputValue=this._invalidValue:(this.value=this.value===``?this.value:this._valueConverted,this._inputValue=this.value,this._errorFormat=``)),this._updateErrorText()}render(){return B`
        <div class="kuc-date-picker-1-25-0__group">
          <label
            class="kuc-date-picker-1-25-0__group__label"
            for="${this._GUID}-label"
            @click="${this._handleClickLabel}"
            ?hidden="${!this.label}"
          >
            <kuc-base-label-1-25-0
              .text="${this.label}"
              .requiredIcon="${this.requiredIcon}"
            ></kuc-base-label-1-25-0>
          </label>
          <kuc-base-date-1-25-0
            .inputId="${this._GUID}"
            .inputAriaInvalid="${this.error!==``}"
            .disabled="${this.disabled}"
            .value="${this._inputValue}"
            .required="${this.requiredIcon}"
            .language="${this._getLanguage()}"
            @kuc:base-date-change="${this._handleDateChange}"
          >
          </kuc-base-date-1-25-0>
          <kuc-base-error-1-25-0
            .text="${this._errorText}"
            .guid="${this._GUID}"
          ></kuc-base-error-1-25-0>
        </div>
      `}updated(){this._invalidValue=``}_updateErrorText(){this._errorText=this._errorFormat||this.error}_getLanguage(){let e=[`en`,`ja`,`zh`,`zh-TW`,`es`];return e.indexOf(this.language)===-1?e.indexOf(document.documentElement.lang)===-1?`en`:document.documentElement.lang:this.language}_handleClickLabel(e){e.preventDefault()}_handleDateChange(e){e.stopPropagation(),e.preventDefault();let t={oldValue:this.value,value:``};e.detail.error?(this.value=void 0,this._invalidValue=this._dateInput.value,this._errorFormat=e.detail.error,this.error=``,t.value=void 0):(this._errorFormat=``,this.value=e.detail.value===void 0?``:e.detail.value,t.value=this.value),this._dispatchChangeEvent(t)}_dispatchChangeEvent(e){Y(this,`change`,e)}}rc([H({type:String,reflect:!0,attribute:`class`})],e.prototype,`className`,void 0),rc([H({type:String})],e.prototype,`error`,void 0),rc([H({type:String,reflect:!0,attribute:`id`})],e.prototype,`id`,void 0),rc([H({type:String})],e.prototype,`label`,void 0),rc([H({type:Boolean})],e.prototype,`disabled`,void 0),rc([H({type:Boolean})],e.prototype,`requiredIcon`,void 0),rc([H({type:String,attribute:`lang`,reflect:!0,converter:Uo})],e.prototype,`language`,void 0),rc([H({type:String})],e.prototype,`value`,void 0),rc([H({type:Boolean,attribute:`hidden`,reflect:!0,converter:q})],e.prototype,`visible`,void 0),rc([W(`.kuc-base-date-1-25-0__input`)],e.prototype,`_dateInput`,void 0),window.customElements.define(`kuc-date-picker-1-25-0`,e),X(nc),ic=e})();var ac=`
:lang(ja) .kuc-base-time-1-25-0__group input.kuc-base-time-1-25-0__group__hours,
:lang(ja) .kuc-base-time-1-25-0__group input.kuc-base-time-1-25-0__group__minutes {
  width: 2ch;
}
.kuc-base-time-1-25-0__group {
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
.kuc-base-time-1-25-0__group input.kuc-base-time-1-25-0__group__hours {
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
.kuc-base-time-1-25-0__group input.kuc-base-time-1-25-0__group__minutes {
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
.kuc-base-time-1-25-0__group input.kuc-base-time-1-25-0__group__hours:focus {
  border: 0px;
}
.kuc-base-time-1-25-0__group input.kuc-base-time-1-25-0__group__minutes:focus {
  border: 0px;
}
.kuc-base-time-1-25-0__group__colon {
  width: auto;
  text-align: center;
}
.kuc-base-time-1-25-0__group input.kuc-base-time-1-25-0__group__suffix {
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
.kuc-base-time-1-25-0__group--focus {
  box-shadow: 2px 2px 4px #f5f5f5 inset, -2px -2px 4px #f5f5f5 inset;
  border: 1px solid #3498db;
  background-color: #ffffff;
  color: #333333;
}
.kuc-base-time-1-25-0__assistive-text {
  clip: rect(1px, 1px, 1px, 1px);
  overflow: hidden;
  position: absolute !important;
  padding: 0px !important;
  border: 0px !important;
  height: 1px !important;
  width: 1px !important;
}
.kuc-base-time-1-25-0__group--disabled {
  background-color: #d4d7d7;
  box-shadow: none;
  color: #888888;
  cursor: not-allowed;
}
.kuc-base-time-1-25-0__group--disabled input:disabled,
.kuc-base-time-1-25-0__group--disabled span {
  cursor: not-allowed;
  color: #888888;
  -webkit-text-fill-color: #888888;
}
`,oc=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},sc=class extends J{constructor(){super(...arguments),this.language=`en`,this.max=``,this.min=``,this.value=``,this.disabled=!1,this.hour12=!1,this.timeStep=30,this._listBoxVisible=!1,this._valueLabel=``,this._doFocusListBox=!1,this._hours=``,this._minutes=``,this._suffix=``,this._valueForReset=``,this._locale=jo(`en`),this._scrollTargets=[],this._listBoxMaxHeight=165,this._listBoxMaxWidth=0,this._resizeDebounceTimer=null,this._DEBOUNCE_DELAY=200,this._schedulePositionOnResize=()=>{this._listBoxVisible&&(this._resizeDebounceTimer!==null&&window.clearTimeout(this._resizeDebounceTimer),this._resizeDebounceTimer=window.setTimeout(()=>{this._resizeDebounceTimer=null,Ro({anchorEl:this._inputGroupEl,popoverEl:this._listBoxUl,popoverHeight:this._listBoxMaxHeight,popoverWidth:this._listBoxMaxWidth})},this._DEBOUNCE_DELAY))},this._boundOnScroll=()=>Ro({anchorEl:this._inputGroupEl,popoverEl:this._listBoxUl,popoverHeight:this._listBoxMaxHeight,popoverWidth:this._listBoxMaxWidth})}disconnectedCallback(){this._detachListeners(),super.disconnectedCallback()}update(e){(e.has(`hour12`)||e.has(`timeStep`)||e.has(`max`)||e.has(`min`))&&(this._listBoxItems=po(this.hour12,this.timeStep,this.min,this.max),this._updateInputValue()),e.has(`value`)&&this._updateInputValue(),e.has(`language`)&&(this._locale=jo(this.language)),super.update(e)}render(){return B`
      <div class="kuc-base-time-1-25-0__group" @click="${this._handleClickInputGroup}">
        <input
          type="text"
          class="kuc-base-time-1-25-0__group__hours"
          role="spinbutton"
          tabindex="${this._hours?`0`:`-1`}"
          aria-label="Hour"
          @focus="${this._handleFocusInput}"
          @blur="${this._handleBlurInput}"
          @keydown="${this._handleKeyDownInput}"
          @paste="${this._handlePasteInput}"
          ?disabled="${this.disabled}"
          value="${this._hours}"
        />
        ${this._getColonTemplate()}
        <input
          type="text"
          class="kuc-base-time-1-25-0__group__minutes"
          role="spinbutton"
          tabindex="${this._minutes?`0`:`-1`}"
          aria-label="Minute"
          @focus="${this._handleFocusInput}"
          @blur="${this._handleBlurInput}"
          @keydown="${this._handleKeyDownInput}"
          @paste="${this._handlePasteInput}"
          ?disabled="${this.disabled}"
          value="${this._minutes}"
        />
        ${this._getSuffixTemplate()}
      </div>
      <button
        type="button"
        aria-haspopup="listbox"
        aria-expanded="${this._listBoxVisible}"
        class="kuc-base-time-1-25-0__assistive-text"
        @keydown="${this._handleKeyDownButton}"
        @focus="${this._handleFocusButton}"
        @blur="${this._handleBlurButton}"
        ?disabled="${this.disabled}"
      >
        show time picker
      </button>
      ${this._getListBoxTemplate()}
    `}updated(e){e.has(`disabled`)&&this._toggleDisabledGroup(),super.update(e)}_handleClickInputGroup(e){if(this.disabled)return;if(this.value===``){this._toggleEl.focus(),this._openListBox();return}let t=e.target;if(this._openListBox(),t.tagName.toUpperCase()===`INPUT`){t.select();return}this._hoursEl.select()}_handleBlurListBox(e){e.preventDefault(),!this._inputFocusEl&&this._closeListBox()}_toggleDisabledGroup(){return this.disabled?this._inputGroupEl.classList.add(`kuc-base-time-1-25-0__group--disabled`):this._inputGroupEl.classList.remove(`kuc-base-time-1-25-0__group--disabled`)}_updateInputValue(){var e;let t=_o(this.value,this.hour12);this._hours=t.hours,this._minutes=t.minutes,this._suffix=t.suffix||``,this._valueLabel=this._getValueLabel(t),this._inputGroupEl&&(this._setValueToInput(t),(e=this._inputFocusEl)==null||e.select())}_getValueLabel(e){if(!e.hours||!e.minutes)return``;let t=`${e.hours}:${e.minutes}`;return e.suffix?t+` ${e.suffix}`:t}_setValueToInput(e){this._hoursEl.value=e.hours,this._minutesEl.value=e.minutes,this._suffixEl&&(this._suffixEl.value=e.suffix||``)}_handleKeyDownButton(e){switch(e.key){case`Tab`:case`Escape`:if(e.key===`Escape`&&e.preventDefault(),!this._listBoxVisible)return;this._closeListBox();break;case`Enter`:case` `:case`ArrowUp`:case`ArrowDown`:e.preventDefault(),e.stopPropagation(),this._openListBoxByKey();break;default:e.preventDefault(),e.stopPropagation(),this._handleDefaultKeyButton(e.key);break}}_handleBlurButton(){this._inputGroupEl.classList.remove(`kuc-base-time-1-25-0__group--focus`)}_handleFocusButton(e){e.stopPropagation(),this._inputGroupEl.classList.add(`kuc-base-time-1-25-0__group--focus`)}_openListBoxByKey(){return this._listBoxVisible?!1:(this._valueForReset=this.value,this._openListBox(),this._doFocusListBox=!0,this._inputGroupEl.classList.remove(`kuc-base-time-1-25-0__group--focus`),!0)}_handleListBoxEscape(){if(this._closeListBox(),this.value=this._valueForReset,this._actionUpdateInputValue(this.value),this.value===``){this._toggleEl.focus();return}this._hoursEl.select()}_handleDefaultKeyButton(e){if(!/^[0-9]$/i.test(e)||this.value!==``)return;let t=this._computeNumberKeyValueHours(e);this._actionUpdateInputValue(t),this._hoursEl.select()}_handleChangeListBox(e){if(e.preventDefault(),e.stopPropagation(),this._closeListBox(),this._inputFocusEl=this._hoursEl,this._hoursEl.select(),!e.detail.value)return;let t=e.detail.value;this._actionUpdateInputValue(t)}_handleListBoxFocusChange(e){let t=e.detail.value,n=So(t);this._actionUpdateInputValue(n)}_handleFocusInput(e){this._inputFocusEl=e.target,this._inputFocusEl.select(),this._inputGroupEl.classList.add(`kuc-base-time-1-25-0__group--focus`)}_handleBlurInput(e){this._inputFocusEl=null;let t=e.relatedTarget;t&&t instanceof HTMLInputElement&&[this._hoursEl,this._minutesEl,this._suffixEl].indexOf(t)>-1||(this._closeListBox(),this._inputGroupEl.classList.remove(`kuc-base-time-1-25-0__group--focus`))}_handleTabKey(e){return e.key===`Tab`}_handleKeyDownInput(e){this._closeListBox(),!this._handleTabKey(e)&&this._handleSupportedKey(e)}_handlePasteInput(e){e.preventDefault()}_handleSupportedKey(e){e.preventDefault();let t=e.key,n;switch(t){case`Enter`:case`ArrowRight`:this._actionSelectNextRange();break;case`ArrowLeft`:this._actionSelectPreviousRange();break;case`ArrowUp`:n=this._computeArrowUpDownValue(1),this._actionUpdateInputValue(n);break;case`ArrowDown`:n=this._computeArrowUpDownValue(-1),this._actionUpdateInputValue(n);break;case`Backspace`:case`Delete`:n=this._computeDeleteValue(),this._actionUpdateInputValue(n);break;default:n=this._computeDefaultKeyValue(t),this._actionUpdateInputValue(n);break}}_actionUpdateInputValue(e){let t=So(this.value===``?this.value:this._formatKeyDownValue()),n=So(e);t!==n&&(this.value=n,this._dispatchEventTimeChange(n,t))}_computeDeleteValue(){return this._inputFocusEl===this._minutesEl?this._formatKeyDownValue({minutes:`00`}):this._inputFocusEl===this._hoursEl?this._formatKeyDownValue({hours:`00`}):this._formatKeyDownValue()}_computeArrowUpDownValue(e){return this._inputFocusEl===this._hoursEl?this._computeArrowUpDownHourValue(e):this._inputFocusEl===this._minutesEl?this._computeArrowUpDownMinuteValue(e):this._computeKeyDownSuffixValue()}_computeKeyDownSuffixValue(e){if(!e){let e=this._suffix===$a.AM?$a.PM:$a.AM;return this._formatKeyDownValue({suffix:e})}if([`a`,`A`,`p`,`P`].indexOf(e)===-1)return this._formatKeyDownValue();let t=e===`a`||e===`A`?$a.AM:$a.PM;return this.value===``&&this._hoursEl.select(),this._formatKeyDownValue({suffix:t})}_computeArrowUpDownHourValue(e){let t=parseInt(this._hours,10)+e;return this.hour12?(t%=12,t=t<=0?12:t):(t%=24,t=t<0?23:t),this._formatKeyDownValue({hours:t.toString()})}_computeArrowUpDownMinuteValue(e){let t=parseInt(this._minutes,10)+e;return t%=60,t=t<0?59:t,this._formatKeyDownValue({minutes:t.toString()})}_computeDefaultKeyValue(e){return/^[0-9]$/i.test(e)?this._computeNumberKeyValue(e):this._inputFocusEl===this._suffixEl?this._computeKeyDownSuffixValue(e):this._formatKeyDownValue()}_computeNumberKeyValue(e){return this._inputFocusEl===this._minutesEl?this._computeNumberKeyValueMinutes(e):this._inputFocusEl===this._hoursEl?this._computeNumberKeyValueHours(e):this._formatKeyDownValue()}_computeNumberKeyValueMinutes(e){let t=K(this._getPreviousMinutes(this._minutes)+e);return this.value===``?(this._hoursEl.select(),this._computeNumberKeyValueHours(e)):this._formatKeyDownValue({minutes:t})}_computeNumberKeyValueHours(e){let t=K(this._getPreviousHours(this._hours,e)+e);return this.value===``?this._formatKeyDownValue({hours:t,minutes:`00`}):this._formatKeyDownValue({hours:t})}_getPreviousMinutes(e){let t;return t=parseInt(e,10)>10?(``+e)[1]:``+e,t=parseInt(t,10)>5?`0`:t,t}_getPreviousHours(e,t){let n;n=parseInt(e,10)>10?(``+e)[1]:``+e;let r=parseInt(n+t,10);return n=this.hour12&&r>12||!this.hour12&&r>=24?`0`:n,n}_actionSelectNextRange(){if(this._inputFocusEl===this._hoursEl){this._minutesEl.select();return}this.hour12&&this._inputFocusEl===this._minutesEl&&this._suffixEl.select()}_actionSelectPreviousRange(){if(this._inputFocusEl===this._suffixEl){this._minutesEl.select();return}this._inputFocusEl===this._minutesEl&&this._hoursEl.select()}_dispatchEventTimeChange(e,t){let n={value:e,oldValue:t};(go(e,this.min)<0||go(this.max,e)<0)&&(n.error=this._locale.TIME_IS_OUT_OF_VALID_RANGE),Y(this,`kuc:base-time-change`,n)}_formatKeyDownValue(e={hours:this._hours,minutes:this._minutes,suffix:this._suffix}){let t=e.hours||this._hours,n=e.minutes||this._minutes,r=e.suffix||this._suffix,i=`${K(t)}:${K(n)}`;return r?`${i} ${r}`:i}async _openListBox(){this._listBoxVisible||(this._doFocusListBox=!1,this._listBoxVisible=!0,await this.updateComplete,this._listboxEl&&(this._listboxEl.showPopover(),this._listBoxMaxWidth=zo(this._listBoxUl).width,Ro({anchorEl:this._inputGroupEl,popoverEl:this._listBoxUl,popoverHeight:this._listBoxMaxHeight,popoverWidth:this._listBoxMaxWidth}),this._attachListeners()))}_attachListeners(){this._detachListeners(),this._scrollTargets=Bo(this._inputGroupEl);for(let e of this._scrollTargets)e.addEventListener(`scroll`,this._boundOnScroll,{passive:!0});window.addEventListener(`resize`,this._schedulePositionOnResize)}_detachListeners(){for(let e of this._scrollTargets)e.removeEventListener(`scroll`,this._boundOnScroll);this._scrollTargets=[],window.removeEventListener(`resize`,this._schedulePositionOnResize)}_closeListBox(){var e;this._doFocusListBox=!1,this._listBoxVisible=!1,(e=this._listboxEl)==null||e.hidePopover(),this._detachListeners()}_getColonTemplate(){return this._hours?B` <span class="kuc-base-time-1-25-0__group__colon">:</span> `:``}_getSuffixTemplate(){return this.hour12?B`
          <input
            class="kuc-base-time-1-25-0__group__suffix"
            role="spinbutton"
            tabindex="${this._suffix?`0`:`-1`}"
            aria-label="${this._suffix||`suffix`}"
            @focus="${this._handleFocusInput}"
            @blur="${this._handleBlurInput}"
            @keydown="${this._handleKeyDownInput}"
            @paste="${this._handlePasteInput}"
            ?disabled="${this.disabled}"
            value="${this._suffix}"
          />
        `:``}_getListBoxTemplate(){return this._listBoxVisible?B`
          <kuc-base-datetime-listbox-1-25-0
            aria-hidden="${!this._listBoxVisible}"
            class="kuc-base-time-1-25-0__group__listbox"
            .items="${this._listBoxItems||[]}"
            .value="${this._valueLabel}"
            .doFocus="${this._doFocusListBox}"
            @kuc:listbox-click="${this._handleChangeListBox}"
            @kuc:listbox-blur="${this._handleBlurListBox}"
            @kuc:listbox-focus-change="${this._handleListBoxFocusChange}"
            @kuc:listbox-escape="${this._handleListBoxEscape}"
          ></kuc-base-datetime-listbox-1-25-0>
        `:``}};oc([H({type:String,attribute:`lang`,reflect:!0})],sc.prototype,`language`,void 0),oc([H({type:String})],sc.prototype,`max`,void 0),oc([H({type:String})],sc.prototype,`min`,void 0),oc([H({type:String})],sc.prototype,`value`,void 0),oc([H({type:Boolean})],sc.prototype,`disabled`,void 0),oc([H({type:Boolean})],sc.prototype,`hour12`,void 0),oc([H({type:Number})],sc.prototype,`timeStep`,void 0),oc([U()],sc.prototype,`_listBoxVisible`,void 0),oc([U()],sc.prototype,`_valueLabel`,void 0),oc([U()],sc.prototype,`_doFocusListBox`,void 0),oc([U()],sc.prototype,`_hours`,void 0),oc([U()],sc.prototype,`_minutes`,void 0),oc([U()],sc.prototype,`_suffix`,void 0),oc([U()],sc.prototype,`_inputFocusEl`,void 0),oc([W(`.kuc-base-time-1-25-0__group__hours`)],sc.prototype,`_hoursEl`,void 0),oc([W(`.kuc-base-time-1-25-0__group__minutes`)],sc.prototype,`_minutesEl`,void 0),oc([W(`.kuc-base-time-1-25-0__group__suffix`)],sc.prototype,`_suffixEl`,void 0),oc([W(`.kuc-base-time-1-25-0__assistive-text`)],sc.prototype,`_toggleEl`,void 0),oc([W(`.kuc-base-time-1-25-0__group`)],sc.prototype,`_inputGroupEl`,void 0),oc([W(`.kuc-base-time-1-25-0__group__listbox`)],sc.prototype,`_listboxEl`,void 0),oc([W(`.kuc-base-datetime-listbox-1-25-0__listbox`)],sc.prototype,`_listBoxUl`,void 0),window.customElements.get(`kuc-base-time-1-25-0`)||(X(ac),window.customElements.define(`kuc-base-time-1-25-0`,sc));var cc=`
kuc-datetime-picker-1-25-0,
kuc-datetime-picker-1-25-0 *,
kuc-datetime-picker-1-25-0:lang(en),
kuc-datetime-picker-1-25-0:lang(en) * {
  font-family: sans-serif;
}
kuc-datetime-picker-1-25-0:lang(ja),
kuc-datetime-picker-1-25-0:lang(ja) * {
  font-family: "メイリオ", "Hiragino Kaku Gothic ProN", Meiryo,
    sans-serif;
}
kuc-datetime-picker-1-25-0:lang(zh),
kuc-datetime-picker-1-25-0:lang(zh) * {
  font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,
    Hei, "Heiti SC", sans-serif;
}
kuc-datetime-picker-1-25-0:lang(zh-TW),
kuc-datetime-picker-1-25-0:lang(zh-TW) * {
  font-family: "微軟正黑體","Microsoft JhengHei","新宋体",NSimSun,STHeiti,
    Hei,"Heiti SC"
}
kuc-datetime-picker-1-25-0:lang(es),
kuc-datetime-picker-1-25-0:lang(es) * {
  font-family: sans-serif;
}
kuc-datetime-picker-1-25-0 {
  font-size: 14px;
  display: inline-table;
  vertical-align: top;
  line-height: 1.5;
  max-width: calc(var(--kuc-date-time-picker-date-input-width, 100px) + var(--kuc-date-time-picker-time-input-width, 85px));
  width: calc(var(--kuc-date-time-picker-date-input-width, 100px) + var(--kuc-date-time-picker-time-input-width, 85px));
}
kuc-datetime-picker-1-25-0[hidden] {
  display: none;
}
.kuc-datetime-picker-1-25-0__group {
  border: none;
  padding: 0px;
  height: auto;
  display: flex;
  flex-direction: column;
  margin: 0px;
}
.kuc-datetime-picker-1-25-0__group__label {
  display: inline-block;
  padding: 4px 0px 8px 0px;
  white-space: nowrap;
}
.kuc-datetime-picker-1-25-0__group__label[hidden] {
  display: none;
}
.kuc-datetime-picker-1-25-0__group__inputs {
  display: flex;
  width: calc(var(--kuc-date-time-picker-date-input-width, 100px) + var(--kuc-date-time-picker-time-input-width, 85px));
}
.kuc-datetime-picker-1-25-0__group__inputs--time {
  position: relative;
}
.kuc-datetime-picker-1-25-0__group input[type=text].kuc-base-date-1-25-0__input {
  width: var(--kuc-date-time-picker-date-input-width, 100px);
  height: var(--kuc-date-time-picker-input-height, 40px);
  color: var(--kuc-date-time-picker-input-color, #333333);
  font-size: var(--kuc-date-time-picker-input-font-size, 14px);
}
.kuc-datetime-picker-1-25-0__group .kuc-base-time-1-25-0__group {
  max-width: var(--kuc-date-time-picker-time-input-width, 85px);
  width: var(--kuc-date-time-picker-time-input-width, 85px);
  font-size: var(--kuc-date-time-picker-input-font-size, 14px);
  height: var(--kuc-date-time-picker-input-height, 40px);
  color: var(--kuc-date-time-picker-input-color, #333333);
}
.kuc-datetime-picker-1-25-0__group .kuc-base-time-1-25-0__group input[type=text].kuc-base-time-1-25-0__group__hours,
.kuc-datetime-picker-1-25-0__group .kuc-base-time-1-25-0__group input[type=text].kuc-base-time-1-25-0__group__minutes,
.kuc-datetime-picker-1-25-0__group .kuc-base-time-1-25-0__group input.kuc-base-time-1-25-0__group__suffix,
.kuc-datetime-picker-1-25-0__group .kuc-base-time-1-25-0__group--focus  {
  color: var(--kuc-date-time-picker-input-color, #333333);
}
`,lc=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},uc;(()=>{if(uc=window.customElements.get(`kuc-datetime-picker-1-25-0`),uc)return;class e extends J{constructor(e){super(),this.className=``,this.error=``,this.id=``,this.label=``,this.language=`auto`,this.max=``,this.min=``,this.value=``,this.disabled=!1,this.hour12=!1,this.requiredIcon=!1,this.visible=!0,this.timeStep=30,this._dateValue=``,this._timeValue=``,this._previousTimeValue=``,this._previousDateValue=``,this._errorFormat=``,this._errorText=``,this._dateConverted=``,this._changeDateByUI=!1,this._changeTimeByUI=!1,this._inputMax=``,this._inputMin=``,this._timeConverted=``,this._errorInvalidTime=``,this._inputTimeStep=30,this._GUID=Z();let t=Q(e);Object.assign(this,t)}shouldUpdate(e){return(e.has(`max`)||e.has(`min`))&&!this._checkAndUpdateMaxMinProperty()||e.has(`timeStep`)&&!this._checkAndUpdateTimeStepProperty()?!1:this.value===void 0||this.value===``?!0:typeof this.value!=`string`||(this._dateAndTime=this._getDateTimeValue(this.value),this._dateConverted=Go(this._dateAndTime.date),!(us(this._dateAndTime.date,this._dateAndTime.time)&&cs(this._dateConverted)))?(this.throwErrorAfterUpdateComplete(ao.VALUE),!1):(this._timeConverted=Ko(this._dateAndTime.time.slice(0,5)),e.has(`value`)&&(go(this._timeConverted,this._inputMin)<0||go(this._inputMax,this._timeConverted)<0)?(this.throwErrorAfterUpdateComplete(to),!1):!0)}willUpdate(e){if(this._changeDateByUI||this._changeTimeByUI){this._updateValueChangeByUI();return}this._updateValueWhenSetter()}_checkAndUpdateMaxMinProperty(){let e=this._inputMin,t=this._inputMax;if(this.max===void 0||this.max===``)t=io;else{if(!os(this.max))return this.throwErrorAfterUpdateComplete(ao.MAX),!1;t=this.max=Ko(this.max)}if(this.min===void 0||this.min===``)e=ro;else{if(!os(this.min))return this.throwErrorAfterUpdateComplete(ao.MIN),!1;e=this.min=Ko(this.min)}return go(t,e)<0?(this.throwErrorAfterUpdateComplete(eo),!1):(this._inputMin=e,this._inputMax=t,!0)}_checkAndUpdateTimeStepProperty(){return gs(this.timeStep)?ss(this.timeStep,this._inputMax,this._inputMin)?(this._inputTimeStep=this.timeStep,!0):(this.throwErrorAfterUpdateComplete(ao.TIME_STEP),!1):(this.throwErrorAfterUpdateComplete(no),!1)}_updateValueChangeByUI(){let e=this._validateDateTimeFormat();this.value=e?this.value:void 0,e&&!this._dateValue&&!this._timeValue&&(this.value=``);let t=!this._dateValue&&this._timeValue,n=this._dateValue&&!this._timeValue;if(t||n){this._errorText=this.error||this._errorFormat||this._errorInvalidTime;return}this._errorText=e?this.error:this._errorFormat||this._errorInvalidTime}_validateDateTimeFormat(){let e=!!this._timeValue&&!this._dateValue,t=!!this._dateValue&&!this._timeValue;return!this._errorFormat&&!this._errorInvalidTime&&!e&&!t}_updateValueWhenSetter(){if(this._errorText=this.error,this.value===``||this.value===void 0){this._previousTimeValue=``,this._errorFormat=``,this._errorInvalidTime=``;return}this._setDateTimeValueSeparate(this._dateAndTime,this._dateConverted),this.value=this._getDateTimeString()}_setDateTimeValueSeparate(e,t){this._dateValue=t||this._dateInput.value,this._timeValue=this._dateValue&&cs(t)?Ko(e.time.slice(0,5)):this._previousTimeValue}update(e){e.has(`value`)&&(this.value===void 0&&this._setUndefinedValue(),this.value===``&&this._setEmptyValue()),(e.has(`max`)||e.has(`min`)||e.has(`value`))&&this.value!==void 0&&(this._errorInvalidTime=``),super.update(e)}_setUndefinedValue(){if(!this._changeTimeByUI){if(this._errorFormat){if(this._changeDateByUI){this._dateValue=this._dateInput.value;return}this._dateValue=``,this._timeValue=``;return}this._dateValue=this._previousDateValue,this._timeValue=this._previousTimeValue}}_setEmptyValue(){this._dateValue=``,this._timeValue=``,this._previousTimeValue=``,this._previousDateValue=``,this._errorFormat=``,this._errorInvalidTime=``}render(){return B`
        <fieldset
          class="kuc-datetime-picker-1-25-0__group"
          aria-describedby="${this._GUID}-error"
        >
          <legend
            class="kuc-datetime-picker-1-25-0__group__label"
            ?hidden="${!this.label}"
          >
            <kuc-base-label-1-25-0
              .text="${this.label}"
              .requiredIcon="${this.requiredIcon}"
            ></kuc-base-label-1-25-0>
          </legend>
          <div class="kuc-datetime-picker-1-25-0__group__inputs">
            <kuc-base-date-1-25-0
              class="kuc-datetime-picker-1-25-0__group__inputs--date"
              .value="${this._dateValue}"
              .language="${this._getLanguage()}"
              .disabled="${this.disabled}"
              inputAriaLabel="date"
              @kuc:base-date-change="${this._handleDateChange}"
            ></kuc-base-date-1-25-0
            ><kuc-base-time-1-25-0
              class="kuc-datetime-picker-1-25-0__group__inputs--time"
              .value="${this._timeValue}"
              .hour12="${this.hour12}"
              .disabled="${this.disabled}"
              .timeStep="${this._inputTimeStep}"
              .min="${this._inputMin}"
              .max="${this._inputMax}"
              .language="${this._getLanguage()}"
              @kuc:base-time-change="${this._handleTimeChange}"
            ></kuc-base-time-1-25-0>
          </div>
          <kuc-base-error-1-25-0
            .text="${this._errorText}"
            .guid="${this._GUID}"
            ?hidden="${!this._errorText}"
          ></kuc-base-error-1-25-0>
        </fieldset>
      `}updated(){this._resetState()}_resetState(){this._previousTimeValue=``,this._previousDateValue=``,this._changeDateByUI=!1,this._changeTimeByUI=!1}_handleDateChange(e){e.stopPropagation(),e.preventDefault(),this._changeDateByUI=!0;let t=this._dateValue;e.detail.error?(this._errorFormat=e.detail.error,this.error=``):(t=e.detail.value,this._errorFormat=``),this._updateDateTimeValue(t,`date`)}_handleTimeChange(e){e.preventDefault(),e.stopPropagation(),this._changeTimeByUI=!0;let t=e.detail.value;e.detail.error?(this._errorInvalidTime=e.detail.error,this.error=``):this._errorInvalidTime=``,this._updateDateTimeValue(t,`time`)}_updateDateTimeValue(e,t){let n=this.value;t===`date`?this._dateValue=e||``:this._timeValue=e,this._previousTimeValue=this._timeValue,this._previousDateValue=this._dateValue;let r=this._errorFormat||this._errorInvalidTime?void 0:this._getDateTimeString(),i=this._errorFormat||this._errorInvalidTime?void 0:r;this.value=i,this._validateDateTimeFormat()&&!this._dateValue&&!this._timeValue&&(this.value=``);let a={value:this.value,oldValue:n,changedPart:t};Y(this,`change`,a)}_getDateTimeString(){if(!this._dateValue||!this._timeValue)return;if(!this.value)return`${this._dateValue}T${this._timeValue}:00`;let e=this.value.split(`:`);return e.length===3?`${this._dateValue}T${this._timeValue}:${e[2]}`:`${this._dateValue}T${this._timeValue}:00`}_getDateTimeValue(e){if(e===``||e===void 0)return{date:``,time:``};let t=e.split(`T`),n=t[0],r=t[1];if(e.indexOf(`T`)===e.length-1||t.length>2)return{date:n,time:``};if(!r)return{date:n,time:ro};let[i,a,o]=r.split(`:`);if(i===``||a===``||o===``)return{date:n,time:r};let s=`${i}:${a||`00`}`;return o?{date:n,time:`${s}:${o}`}:{date:n,time:s}}_getLanguage(){let e=[`en`,`ja`,`zh`,`zh-TW`,`es`];return e.indexOf(this.language)===-1?e.indexOf(document.documentElement.lang)===-1?`en`:document.documentElement.lang:this.language}}lc([H({type:String,reflect:!0,attribute:`class`})],e.prototype,`className`,void 0),lc([H({type:String})],e.prototype,`error`,void 0),lc([H({type:String,reflect:!0,attribute:`id`})],e.prototype,`id`,void 0),lc([H({type:String})],e.prototype,`label`,void 0),lc([H({type:String,attribute:`lang`,reflect:!0,converter:Uo})],e.prototype,`language`,void 0),lc([H({type:String})],e.prototype,`max`,void 0),lc([H({type:String})],e.prototype,`min`,void 0),lc([H({type:String,hasChanged(e,t){return(e===``||e===void 0)&&e===t?!0:e!==t}})],e.prototype,`value`,void 0),lc([H({type:Boolean})],e.prototype,`disabled`,void 0),lc([H({type:Boolean})],e.prototype,`hour12`,void 0),lc([H({type:Boolean})],e.prototype,`requiredIcon`,void 0),lc([H({type:Boolean,attribute:`hidden`,reflect:!0,converter:q})],e.prototype,`visible`,void 0),lc([H({type:Number})],e.prototype,`timeStep`,void 0),lc([W(`.kuc-base-date-1-25-0__input`)],e.prototype,`_dateInput`,void 0),window.customElements.define(`kuc-datetime-picker-1-25-0`,e),X(cc),uc=e})();var dc=uc,fc=`
  kuc-dialog-1-25-0,
  kuc-dialog-1-25-0 *,
  kuc-dialog-1-25-0:lang(en),
  kuc-dialog-1-25-0:lang(en) * {
    font-family: sans-serif;
  }
  kuc-dialog-1-25-0:lang(es),
  kuc-dialog-1-25-0:lang(es) * {
    font-family: sans-serif;
  }
  kuc-dialog-1-25-0:lang(ja),
  kuc-dialog-1-25-0:lang(ja) * {
    font-family: "メイリオ", "Hiragino Kaku Gothic ProN", Meiryo,
      sans-serif;
  }
  kuc-dialog-1-25-0:lang(zh),
  kuc-dialog-1-25-0:lang(zh) * {
    font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,
      Hei, "Heiti SC", sans-serif;
  }
  kuc-dialog-1-25-0:lang(zh-TW),
  kuc-dialog-1-25-0:lang(zh-TW) * {
    font-family: "微軟正黑體","Microsoft JhengHei","新宋体",NSimSun,STHeiti,
      Hei,"Heiti SC",sans-serif;
  }

  kuc-dialog-1-25-0 {
    display: none;
  }

  kuc-dialog-1-25-0[opened] {
    display: block;
  }

  .kuc-dialog-1-25-0__dialog {
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
  
  .kuc-dialog-1-25-0__dialog:focus-visible {
    outline: 1px solid #3498db;
  }

  .kuc-dialog-1-25-0__dialog__header {
    min-height: 64px;
    border-bottom: 1px solid #e3e7e8;
    display: flex;
    justify-content: space-between;
  }

  .kuc-dialog-1-25-0__dialog__header__title {
    font-size: var(--kuc-dialog-header-font-size, 24px);
    color: var(--kuc-dialog-header-color);
    padding: 0 24px;
    align-self: center;
    overflow-wrap: anywhere;
    word-break: normal;
    font-weight: 400;
  }

  .kuc-dialog-1-25-0__dialog__header__close-button {
    width: 48px;
    height: 48px;
    border: none;
    background-color: #ffffff;
    margin-right: 12px;
    margin-top: 11px;
    cursor: pointer;
  }

  .kuc-dialog-1-25-0__dialog__header__close-button:focus-visible {
    outline: 1px solid #3498db;
  }

  .kuc-dialog-1-25-0__dialog__header__close-button-svg {
    vertical-align: middle;
  }

  .kuc-dialog-1-25-0__dialog__content {
    border-bottom: #e3e7e8 solid 1px;
    background-color: #f7f9fa;
    padding: 24px;
    display: flex;
    overflow: auto;
  }

  .kuc-dialog-1-25-0__dialog__content__content {
    line-height: 1.2;
    overflow-wrap: anywhere;
    word-break: normal;
  }

  .kuc-dialog-1-25-0__dialog__content__icon-info,
  .kuc-dialog-1-25-0__dialog__content__icon-success,
  .kuc-dialog-1-25-0__dialog__content__icon-error,
  .kuc-dialog-1-25-0__dialog__content__icon-warning,
  .kuc-dialog-1-25-0__dialog__content__icon-question {
    margin-right: 16px;
    width: 24px;
    height: 24px;
  }

  .kuc-dialog-1-25-0__dialog__footer {
    padding: 24px;
    overflow-wrap: anywhere;
    word-break: normal;
  }

  .kuc-dialog-1-25-0__dialog__footer[hidden] {
    display: none;
  }

  .kuc-dialog-1-25-0__mask {
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

  .kuc--has-dialog .kuc-dialog-1-25-0__dialog {
    overflow-x: hidden;
    overflow-y: auto;
    max-height: 80vh;
  }
`,pc=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},mc;(()=>{if(mc=window.customElements.get(`kuc-dialog-1-25-0`),mc)return;class e extends J{constructor(e){super(),this.className=``,this.icon=``,this.id=``,this.title=``,this.content=``,this.footer=``,this.header=``,this.container=document.body,this.footerVisible=!0,this._isOpened=!1,this._triggeredElement=null,this._content=``,this._footer=``,this._header=``,this._GUID=Z();let t=Q(e);Object.assign(this,t)}_handleFocusFirstDummy(){let e=this._focusableElements[this._focusableElements.length-2];e&&e.focus()}_handleFocusLastDummy(){this._dialogEl.focus()}_handleKeyDownDialog(e){e.key===`Escape`&&(e.preventDefault(),this.close())}_handleClickCloseButton(e){this.close()}_getCloseButtonSvgTemplate(){return V`
        <svg
          class="kuc-dialog-1-25-0__dialog__header__close-button-svg"
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
      `}_getIconTemplate(){switch(this.icon){case`info`:return V`
            <svg
              class="kuc-dialog-1-25-0__dialog__content__icon-info"
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
          `;case`success`:return V`
            <svg
              class="kuc-dialog-1-25-0__dialog__content__icon-success"
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
          `;case`error`:return V`
            <svg
              class="kuc-dialog-1-25-0__dialog__content__icon-error"
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
          `;case`warning`:return V`
            <svg
              class="kuc-dialog-1-25-0__dialog__content__icon-warning"
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
          `;case`question`:return V`
            <svg
              class="kuc-dialog-1-25-0__dialog__content__icon-question"
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
          `;default:return``}}shouldUpdate(e){if(e.has(`container`)){if(this.container===null||this.container===void 0)return this._isOpened&&this._close(),!1;let e=this._isValidContainerElement(),t=!e||!document.contains(this.container);if(this._isOpened&&t&&this._close(),!e)return this.throwErrorAfterUpdateComplete(G.CONTAINER.INVALID),!1}return!0}update(e){e.has(`content`)&&(this.content&&_s(this.content)?this._content=Wo(this.content):this._content=this.content),e.has(`footer`)&&(this.footer&&_s(this.footer)?this._footer=Wo(this.footer):this._footer=this.footer),(e.has(`header`)||e.has(`title`))&&(this.header!==null&&this.header!==void 0&&this.header!==``?_s(this.header)?this._header=Wo(this.header):this._header=this.header:this._header=this.title),super.update(e)}_isValidContainerElement(){return this.container instanceof HTMLElement}open(){if(!this._isValidContainerElement()){document.body.appendChild(this),requestAnimationFrame(()=>{document.body.removeChild(this)}),this.performUpdate();return}this.container.appendChild(this),this.container.classList.add(`kuc--has-dialog`),this.performUpdate(),this.setAttribute(`opened`,``),this._isOpened=!0,this._triggeredElement=document.activeElement,this._dialogEl&&this._dialogEl.focus()}close(){this._close(),Y(this,`close`)}_close(){this._isOpened=!1,document.getElementsByTagName(`body`)[0].classList.remove(`kuc--has-dialog`),this.removeAttribute(`opened`),this._triggeredElement instanceof HTMLElement&&this._triggeredElement.focus()}render(){return B`
        <span
          class="kuc-dialog-1-25-0__first-dummy"
          tabIndex="0"
          @focus="${this._handleFocusFirstDummy}"
        ></span>
        <div
          class="kuc-dialog-1-25-0__dialog"
          role="dialog"
          tabindex="-1"
          aria-labelledby="${this._GUID}-title"
          aria-modal="true"
          @keydown="${this._handleKeyDownDialog}"
        >
          <div class="kuc-dialog-1-25-0__dialog__header">
            <h2
              class="kuc-dialog-1-25-0__dialog__header__title"
              id="${this._GUID}-title"
            >
              ${this._header}
            </h2>
            <button
              class="kuc-dialog-1-25-0__dialog__header__close-button"
              type="button"
              aria-label="close"
              @click="${this._handleClickCloseButton}"
            >
              ${this._getCloseButtonSvgTemplate()}
            </button>
          </div>
          <div class="kuc-dialog-1-25-0__dialog__content">
            <div class="kuc-dialog-1-25-0__dialog__content__icon">
              ${this._getIconTemplate()}
            </div>
            <div class="kuc-dialog-1-25-0__dialog__content__content">
              ${this._content}
            </div>
          </div>
          <div
            class="kuc-dialog-1-25-0__dialog__footer"
            ?hidden="${!this.footerVisible}"
          >
            ${this._footer}
          </div>
        </div>
        <span
          class="kuc-dialog-1-25-0__last-dummy"
          tabIndex="0"
          @focus="${this._handleFocusLastDummy}"
        ></span>
        <div class="kuc-dialog-1-25-0__mask"></div>
      `}}pc([H({type:String,reflect:!0,attribute:`class`})],e.prototype,`className`,void 0),pc([H({type:String})],e.prototype,`icon`,void 0),pc([H({type:String,reflect:!0,attribute:`id`})],e.prototype,`id`,void 0),pc([H({type:String})],e.prototype,`title`,void 0),pc([H()],e.prototype,`content`,void 0),pc([H()],e.prototype,`footer`,void 0),pc([H()],e.prototype,`header`,void 0),pc([H()],e.prototype,`container`,void 0),pc([H({type:Boolean})],e.prototype,`footerVisible`,void 0),pc([U()],e.prototype,`_isOpened`,void 0),pc([W(`.kuc-dialog-1-25-0__dialog`)],e.prototype,`_dialogEl`,void 0),pc([Ra(`a[href]:not([disabled]), button:not([disabled]), textarea:not([disabled]), input[type='text']:not([disabled]), input[type='radio']:not([disabled]), input[type='checkbox']:not([disabled]), select:not([disabled]),[tabindex='0']`)],e.prototype,`_focusableElements`,void 0),window.customElements.define(`kuc-dialog-1-25-0`,e),X(fc),mc=e})();var hc=`
  kuc-dropdown-1-25-0,
  kuc-dropdown-1-25-0 *,
  kuc-dropdown-1-25-0:lang(en),
  kuc-dropdown-1-25-0:lang(en) * {
    font-family: sans-serif;
  }
  kuc-dropdown-1-25-0:lang(es),
  kuc-dropdown-1-25-0:lang(es) * {
    font-family: sans-serif;
  }
  kuc-dropdown-1-25-0:lang(ja),
  kuc-dropdown-1-25-0:lang(ja) * {
    font-family: "メイリオ", "Hiragino Kaku Gothic ProN", Meiryo,
      sans-serif;
  }
  kuc-dropdown-1-25-0:lang(zh),
  kuc-dropdown-1-25-0:lang(zh) * {
    font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,
      Hei, "Heiti SC", sans-serif;
  }
  kuc-dropdown-1-25-0:lang(zh-TW),
  kuc-dropdown-1-25-0:lang(zh-TW) * {
    font-family: "微軟正黑體","Microsoft JhengHei","新宋体",NSimSun,STHeiti,
      Hei,"Heiti SC",sans-serif;
  }
  kuc-dropdown-1-25-0 {
    display: inline-table;
    font-size: 14px;
    color: #333333;
    vertical-align: top;
    width: var(--kuc-dropdown-toggle-width, 180px);
    min-width: var(--kuc-dropdown-toggle-width, 180px);
    line-height: 1.5;
  }
  kuc-dropdown-1-25-0[hidden] {
    display: none;
  }
  .kuc-dropdown-1-25-0__group {
    border: none;
    padding: 0px;
    height: auto;
    display: inline-block;
    width: 100%;
    margin: 0px;
    position: relative;
  }
  .kuc-dropdown-1-25-0__group__label {
    padding: 4px 0px 8px 0px;
    display: inline-block;
    white-space: nowrap;
  }
  .kuc-dropdown-1-25-0__group__label[hidden] {
    display: none;
  }
  .kuc-dropdown-1-25-0__group__toggle {
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
  .kuc-dropdown-1-25-0__group__toggle:focus {
    outline: none;
    border: 1px solid #3498db;
  }
  .kuc-dropdown-1-25-0__group__toggle:disabled {
    background-color: #d4d7d7;
    box-shadow: none;
    cursor: not-allowed;
    color: #888888;
  }
  .kuc-dropdown-1-25-0__group__toggle__selected-item-label {
    font-size: var(--kuc-dropdown-font-size, 14px);
    text-align: left;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .kuc-dropdown-1-25-0__group__toggle__icon {
    flex: none;
    width: 38px;
    height: 38px;
  }
  .kuc-dropdown-1-25-0__group__select-menu {
    min-width: 280px;
    margin: 0;
    padding: 8px 0;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
    background-color: #ffffff;
    list-style: none;
    box-sizing: border-box;
    border: none;
  }
  .kuc-dropdown-1-25-0__group__select-menu__item {
    padding: 8px 16px 8px 24px;
    line-height: 1;
    position: relative;
    cursor: pointer;
    white-space: nowrap;
    color: var(--kuc-dropdown-menu-color, #333333);
    font-size: var(--kuc-dropdown-font-size, 14px);
  }
  .kuc-dropdown-1-25-0__group__select-menu__item__icon {
    position: absolute;
    top: 50%;
    left: 6px;
    margin-top: -5px;
  }
  .kuc-dropdown-1-25-0__group__select-menu__item[aria-selected="true"] {
    color: var(--kuc-dropdown-menu-color-selected, #3498db);
  }
  .kuc-dropdown-1-25-0__group__select-menu__highlight[role="option"] {
    background-color: #e2f2fe;
  }
  .kuc-dropdown-1-25-0__group__select-menu__item--disabled,
  .kuc-dropdown-1-25-0__group__select-menu__item--disabled[aria-selected="true"] {
    background-color: #d4d7d7;
    cursor: not-allowed;
    color: #888888;
  }
`,gc=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},_c;(()=>{if(_c=window.customElements.get(`kuc-dropdown-1-25-0`),_c)return;class e extends J{constructor(e){super(),this.className=``,this.error=``,this.id=``,this.label=``,this.value=``,this.selectedIndex=-1,this.disabled=!1,this.requiredIcon=!1,this.visible=!0,this.items=[],this._selectorVisible=!1,this._DISABLED_CLASS=`kuc-dropdown-1-25-0__group__select-menu__item--disabled`,this._hasValueInItems=!1,this._scrollTargets=[],this._GUID=Z();let t=Q(e);this._handleClickDocument=this._handleClickDocument.bind(this),this._handleScrollMenu=this._handleScrollMenu.bind(this),this._setMenuPosition=this._setMenuPosition.bind(this),this._actionResizeScrollWindow=this._actionResizeScrollWindow.bind(this),this._setInitialValue(t),Object.assign(this,t)}_setInitialValue(e){let t=`value`in e,n=`selectedIndex`in e;!t&&n&&(this.value=this._getValue(e)||``)}_getSelectedLabel(){let e=this.items.filter((e,t)=>this._isCheckedItem(e,t));return e.length===0?``:e[0].label===void 0?e[0].value:e[0].label}_getToggleIconSvgTemplate(){return V`
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
    `}shouldUpdate(e){return e.has(`items`)&&!$(this.items)?(this.throwErrorAfterUpdateComplete(G.ITEMS.IS_NOT_ARRAY),!1):e.has(`value`)&&!ls(this.value)?(this.throwErrorAfterUpdateComplete(G.VALUE.IS_NOT_STRING),!1):e.has(`selectedIndex`)&&!gs(this.selectedIndex)?(this.throwErrorAfterUpdateComplete(G.SELECTED_INDEX.IS_NOT_NUMBER),!1):!0}willUpdate(e){if((e.has(`items`)||e.has(`value`))&&(this._hasValueInItems=this.items.some(e=>e.value===this.value)),e.has(`value`)){if(this.value!==``||this._hasValueInItems)return;this.selectedIndex=-1}}update(e){(e.has(`items`)||e.has(`value`)||e.has(`selectedIndex`))&&(this.selectedIndex=this._getSelectedIndex(),this.value=this._getValue({items:this.items,selectedIndex:this.selectedIndex})||``),super.update(e)}_getSelectedIndex(){if(!this.value&&!this._hasValueInItems)return this.items[this.selectedIndex]?this.selectedIndex:-1;let e=this.items.findIndex(e=>e.value===this.value);if(e===-1)return-1;let t=this.items.findIndex((e,t)=>e.value===this.value&&t===this.selectedIndex);return t>-1?t:e}_getValue(e){let t=(e.items||[])[e.selectedIndex===0||e.selectedIndex?e.selectedIndex:-1];return t?t.value:``}render(){return B`
        <div class="kuc-dropdown-1-25-0__group">
          <div
            class="kuc-dropdown-1-25-0__group__label"
            id="${this._GUID}-label"
            ?hidden="${!this.label}"
          >
            <kuc-base-label-1-25-0
              .text="${this.label}"
              .requiredIcon="${this.requiredIcon}"
            ></kuc-base-label-1-25-0>
          </div>
          <button
            class="kuc-dropdown-1-25-0__group__toggle"
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
            <span class="kuc-dropdown-1-25-0__group__toggle__selected-item-label"
              >${this._getSelectedLabel()}</span
            >
            <span class="kuc-dropdown-1-25-0__group__toggle__icon">
              ${this._getToggleIconSvgTemplate()}
            </span>
          </button>
          <ul
            popover="manual"
            class="kuc-dropdown-1-25-0__group__select-menu"
            role="listbox"
            aria-hidden="${!this._selectorVisible}"
            @mouseleave="${this._handleMouseLeaveMenu}"
            @mousedown="${this._handleMouseDownMenu}"
          >
            ${this.items.map((e,t)=>this._getItemTemplate(e,t))}
          </ul>
          <kuc-base-error-1-25-0
            .text="${this.error}"
            .guid="${this._GUID}"
            ?hidden="${!this.error}"
            ariaLive="assertive"
          ></kuc-base-error-1-25-0>
        </div>
      `}async updated(){await this.updateComplete,this._selectorVisible&&this._scrollToView()}_handleMouseDownDropdownItem(e){let t=this._getItemElementWhenMouseOverDown(e.target),n=t.getAttribute(`value`),r=t.dataset.index||`0`;this._actionUpdateValue(n,r)}_handleMouseOverDropdownItem(e){let t=this._getItemElementWhenMouseOverDown(e.target);this._actionHighlightMenuItem(t)}_handleMouseLeaveMenu(){this._actionClearAllHighlightMenuItem()}_handleMouseDownMenu(e){e.preventDefault()}_handleMouseDownDropdownToggle(e){e.preventDefault()}_handleMouseUpDropdownToggle(e){e.preventDefault()}_handleClickDropdownToggle(e){e.stopPropagation(),this._actionToggleMenu()}_handleClickDocument(e){(e.target===this._buttonEl||this._buttonEl.contains(e.target))&&e.stopPropagation(),!Array.from(this._disabledItemsEl).some(t=>t===e.target||t.contains(e.target))&&this._actionHideMenu()}_handleScrollMenu(){this._previousScrollTop=this._menuEl.scrollTop}_handleKeyDownDropdownToggle(e){switch(e.key){case`Up`:case`ArrowUp`:if(e.preventDefault(),this.items.length===0)break;if(!this._selectorVisible){this._actionShowMenu();break}this._actionHighlightPrevMenuItem();break;case`Tab`:this._selectorVisible&&this._actionHideMenu();break;case`Down`:case`ArrowDown`:if(e.preventDefault(),this.items.length===0)break;if(!this._selectorVisible){this._actionShowMenu();break}this._actionHighlightNextMenuItem();break;case`Enter`:{if(e.preventDefault(),this.items.length===0)break;if(!this._selectorVisible){this._actionShowMenu();break}let{value:t,selectedIndex:n}=this._getInfoHighlightItem();if(t===null)break;this._actionUpdateValue(t,n),this._actionHideMenu();break}case`Escape`:e.preventDefault(),this._selectorVisible&&e.stopPropagation(),this._actionHideMenu();break;case`Home`:this._selectorVisible&&(e.preventDefault(),this._actionHighlightFirstMenuItem());break;case`End`:this._selectorVisible&&(e.preventDefault(),this._actionHighlightLastMenuItem());break;default:break}}_getInfoHighlightItem(){let e=this._highlightItemEl;return e===null?{value:null,selectedIndex:`-1`}:{value:e.getAttribute(`value`),selectedIndex:e.dataset.index||`0`}}_actionShowMenu(){this._buttonEl.focus(),this.items.length!==0&&(this._selectorVisible=!0,this._menuEl.showPopover(),!(!this._menuEl||!this._buttonEl)&&(this._setMenuPosition(),this._attachListeners(),!(this._selectedItemEl===null||this._selectedItemEl.classList.contains(this._DISABLED_CLASS))&&this._setHighlightAndActiveDescendantMenu(this._selectedItemEl)))}_attachListeners(){this._detachListeners(),this._scrollTargets=this._getScrollableAncestors(this._buttonEl);for(let e of this._scrollTargets)e.addEventListener(`scroll`,this._setMenuPosition,{passive:!0});this._menuEl.addEventListener(`scroll`,this._handleScrollMenu),window.addEventListener(`resize`,this._actionResizeScrollWindow),document.addEventListener(`click`,this._handleClickDocument,{capture:!0})}_detachListeners(){for(let e of this._scrollTargets)e.removeEventListener(`scroll`,this._setMenuPosition);this._scrollTargets=[],this._menuEl&&this._menuEl.removeEventListener(`scroll`,this._handleScrollMenu),window.removeEventListener(`resize`,this._actionResizeScrollWindow),document.removeEventListener(`click`,this._handleClickDocument,{capture:!0})}disconnectedCallback(){this._detachListeners(),super.disconnectedCallback&&super.disconnectedCallback()}_actionHideMenu(){this._selectorVisible=!1,this._menuEl.hidePopover(),this._detachListeners(),this._actionRemoveActiveDescendant()}_getScrollableAncestors(e){let t=[],n=e.parentElement,r=/(auto|scroll|overlay)/;for(;n&&n!==document.body&&n!==document.documentElement;){let e=getComputedStyle(n);(r.test(e.overflowY)||r.test(e.overflowX))&&t.push(n),n=n.parentElement}return t.push(window),t}_actionToggleMenu(){if(this.items.length!==0){if(this._selectorVisible){this._actionHideMenu();return}this._actionShowMenu()}}_actionHighlightFirstMenuItem(){let e=this._firstItemEl,t=!1;for(let n=0;n<this.items.length&&(t=e.classList.contains(this._DISABLED_CLASS),t);n++)e=e.nextElementSibling;!t&&this._setHighlightAndActiveDescendantMenu(e)}_actionHighlightLastMenuItem(){let e=this._lastItemEl,t=!1;for(let n=0;n<this.items.length&&(t=e.classList.contains(this._DISABLED_CLASS),t);n++)e=e.previousElementSibling;!t&&this._setHighlightAndActiveDescendantMenu(e)}_actionHighlightPrevMenuItem(){let e=null;this._highlightItemEl!==null&&(e=this._highlightItemEl.previousElementSibling),e===null&&(e=this._lastItemEl);let t=!1;for(let n=0;n<this.items.length&&(t=e.classList.contains(this._DISABLED_CLASS),t);n++)e=e.previousElementSibling,e===null&&(e=this._lastItemEl);!t&&this._setHighlightAndActiveDescendantMenu(e)}_actionHighlightNextMenuItem(){let e=null;this._highlightItemEl!==null&&(e=this._highlightItemEl.nextElementSibling),e===null&&(e=this._firstItemEl);let t=!1;for(let n=0;n<this.items.length&&(t=e.classList.contains(this._DISABLED_CLASS),t);n++)e=e.nextElementSibling,e===null&&(e=this._firstItemEl);!t&&this._setHighlightAndActiveDescendantMenu(e)}_actionClearAllHighlightMenuItem(){this._itemsEl.forEach(e=>{e.classList.remove(`kuc-dropdown-1-25-0__group__select-menu__highlight`)}),this._actionRemoveActiveDescendant()}_setHighlightAndActiveDescendantMenu(e){this._actionHighlightMenuItem(e),this._actionSetActiveDescendant(e.id),this._scrollToView()}_actionHighlightMenuItem(e){this._actionClearAllHighlightMenuItem(),e.classList.add(`kuc-dropdown-1-25-0__group__select-menu__highlight`)}_actionUpdateValue(e,t){let n=parseInt(t,10);if(this.value===e&&this.selectedIndex===n)return;let r={oldValue:this.value,value:e};this.value=e,this.selectedIndex=n,Y(this,`change`,r)}_actionSetActiveDescendant(e){e!==void 0&&this._buttonEl!==null&&this._buttonEl.setAttribute(`aria-activedescendant`,e)}_actionRemoveActiveDescendant(){this._buttonEl.removeAttribute(`aria-activedescendant`)}_setMenuPositionAboveOrBelow(e,t){let n=t.getBoundingClientRect(),r=n.top,i=window.innerHeight;window.innerHeight>document.documentElement.clientHeight&&(i=document.documentElement.clientHeight);let a=i-n.bottom;e.style.height=`auto`,e.style.maxHeight=`none`,e.style.top=`auto`,e.style.bottom=`auto`;let o=e.getBoundingClientRect().height;e.style.maxHeight=`var(--kuc-dropdown-menu-max-height, none)`;let s=getComputedStyle(e).maxHeight,c;s&&s!==`none`&&(c=parseFloat(s));let l=c?Math.min(o,c):o,u,d;a>=l?(u=n.bottom,d=l):r>=l?(u=n.top-l,d=l):a>=r?(u=n.bottom,d=a):(u=n.top-r,d=r),e.style.position=`fixed`;let f=`${u}px`;e.style.top!==f&&(e.style.top=f);let p=`${d}px`;e.style.height!==p&&(e.style.height=p),e.style.overflowY=`auto`}_setMenuPositionLeftOrRight(e,t){e.style.right=`auto`;let n=e.offsetWidth,r=t.getBoundingClientRect(),i=window.innerWidth;window.innerWidth>document.documentElement.clientWidth&&(i=document.documentElement.clientWidth);let a=r.left;i<r.right&&i>r.left&&(a=i-n);let o=`${a}px`;e.style.left!==o&&(e.style.left=o)}_setMenuPosition(){if(!this._menuEl||!this._buttonEl){this._detachListeners();return}this._setMenuPositionAboveOrBelow(this._menuEl,this._buttonEl),this._setMenuPositionLeftOrRight(this._menuEl,this._buttonEl),this._menuEl&&this._previousScrollTop&&(this._menuEl.scrollTop=this._previousScrollTop)}_scrollToView(){if(!this._highlightItemEl||!this._menuEl)return;let e=this._menuEl.getBoundingClientRect(),t=this._highlightItemEl.getBoundingClientRect();t.top<e.top&&(this._menuEl.scrollTop-=e.top-t.top),e.bottom<t.bottom&&(this._menuEl.scrollTop+=t.bottom-e.bottom)}_actionResizeScrollWindow(){this._timeoutID||!this._selectorVisible||(this._timeoutID=window.setTimeout(()=>{this._timeoutID=null,this._setMenuPosition()},50))}_isCheckedItem(e,t){return this.value?e.value===this.value&&this.selectedIndex===t:this.selectedIndex===t}_getItemTemplate(e,t){let n=this._isCheckedItem(e,t);return B`
        <li
          class="kuc-dropdown-1-25-0__group__select-menu__item ${e.disabled?this._DISABLED_CLASS:``}"
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
      `}_getDropdownIconSvgTemplate(e,t){return V`
      ${e?V`<svg
          class="kuc-dropdown-1-25-0__group__select-menu__item__icon"
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
        </svg>`:``}`}_getItemElementWhenMouseOverDown(e){return e.classList.value.split(` `).includes(`kuc-dropdown-1-25-0__group__select-menu__item`)?e:this._getItemElementWhenMouseOverDown(e.parentElement)}}gc([H({type:String,reflect:!0,attribute:`class`})],e.prototype,`className`,void 0),gc([H({type:String})],e.prototype,`error`,void 0),gc([H({type:String,reflect:!0,attribute:`id`})],e.prototype,`id`,void 0),gc([H({type:String})],e.prototype,`label`,void 0),gc([H({type:String})],e.prototype,`value`,void 0),gc([H({type:Number})],e.prototype,`selectedIndex`,void 0),gc([H({type:Boolean})],e.prototype,`disabled`,void 0),gc([H({type:Boolean})],e.prototype,`requiredIcon`,void 0),gc([H({type:Boolean,attribute:`hidden`,reflect:!0,converter:q})],e.prototype,`visible`,void 0),gc([H({type:Array})],e.prototype,`items`,void 0),gc([U()],e.prototype,`_selectorVisible`,void 0),gc([W(`.kuc-dropdown-1-25-0__group__select-menu`)],e.prototype,`_menuEl`,void 0),gc([Ra(`.kuc-dropdown-1-25-0__group__select-menu__item`)],e.prototype,`_itemsEl`,void 0),gc([W(`button.kuc-dropdown-1-25-0__group__toggle`)],e.prototype,`_buttonEl`,void 0),gc([W(`.kuc-dropdown-1-25-0__group__select-menu__item`)],e.prototype,`_firstItemEl`,void 0),gc([W(`.kuc-dropdown-1-25-0__group__select-menu__item:last-child`)],e.prototype,`_lastItemEl`,void 0),gc([W(`.kuc-dropdown-1-25-0__group__select-menu__item[aria-selected=true]`)],e.prototype,`_selectedItemEl`,void 0),gc([W(`.kuc-dropdown-1-25-0__group__select-menu__highlight`)],e.prototype,`_highlightItemEl`,void 0),gc([Ra(`.kuc-dropdown-1-25-0__group__select-menu__item--disabled`)],e.prototype,`_disabledItemsEl`,void 0),window.customElements.define(`kuc-dropdown-1-25-0`,e),X(hc),_c=e})();var vc=`
  kuc-field-group-1-25-0 .kuc-field-group-1-25-0__group__toggle .kuc-base-label-1-25-0__text,
  kuc-field-group-1-25-0:lang(en) .kuc-field-group-1-25-0__group__toggle .kuc-base-label-1-25-0__text {
    font-family: sans-serif;
  }
  kuc-field-group-1-25-0:lang(es) .kuc-field-group-1-25-0__group__toggle .kuc-base-label-1-25-0__text {
    font-family: sans-serif;
  }
  kuc-field-group-1-25-0:lang(ja) .kuc-field-group-1-25-0__group__toggle .kuc-base-label-1-25-0__text {
    font-family: "メイリオ", "Hiragino Kaku Gothic ProN", Meiryo,
      sans-serif;
  }
  kuc-field-group-1-25-0:lang(zh) .kuc-field-group-1-25-0__group__toggle .kuc-base-label-1-25-0__text {
    font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,
      Hei, "Heiti SC", sans-serif;
  }
  kuc-field-group-1-25-0:lang(zh-TW) .kuc-field-group-1-25-0__group__toggle .kuc-base-label-1-25-0__text {
    font-family: "微軟正黑體","Microsoft JhengHei","新宋体",NSimSun,STHeiti,
      Hei,"Heiti SC",sans-serif;
  }
  kuc-field-group-1-25-0 {
    display: inline-table;
  }
  kuc-field-group-1-25-0[hidden] {
    display: none;
  }
  .kuc-field-group-1-25-0__group {
    min-width: 517px;
    padding: 0px 8px;
    border: 1px solid #e3e7e8;
    background-color: #f5f5f5;
  }
  .kuc-field-group-1-25-0__group h3 {
    margin: 0px;
    padding: 0px;
  }
  .kuc-field-group-1-25-0__group__toggle {
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
  .kuc-field-group-1-25-0__group__toggle:disabled {
    color: rgba(0, 0, 0, 0.25);
    cursor: not-allowed;
  }
  .kuc-field-group-1-25-0__group__toggle:disabled .kuc-base-label-1-25-0__text {
    color: rgba(0, 0, 0, 0.25);
    cursor: not-allowed;
  }
  .kuc-field-group-1-25-0__group__toggle .kuc-base-label-1-25-0__text {
    font-size: 16px;
  }
  .kuc-field-group-1-25-0__group__toggle:disabled:focus {
    outline: 0;
    border: 1px solid transparent;
  }
  .kuc-field-group-1-25-0__group__toggle:focus {
    outline: 0;
    border: 1px solid #3498db;
  }
  .kuc-field-group-1-25-0__group__toggle svg {
    position: absolute;
    left: 8px;
  }
  .kuc-field-group-1-25-0__group__body {
    padding: 0px 8px;
    margin-left: 0px;
    white-space: nowrap;
    word-wrap: normal;
    margin-bottom: 12px;
  }
`,yc=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},bc=517,xc;(()=>{if(xc=window.customElements.get(`kuc-field-group-1-25-0`),xc)return;class e extends J{constructor(e){super(),this.className=``,this.content=``,this.id=``,this.label=``,this.disabled=!1,this.expanded=!1,this.visible=!0,this._content=``,this._GUID=Z();let t=Q(e);Object.assign(this,t)}update(e){e.has(`content`)&&(this.content&&_s(this.content)?this._content=Wo(this.content):this._content=this.content),super.update(e)}render(){return B`
        <div
          class="kuc-field-group-1-25-0__group"
          role="group"
          aria-labelledby="${this._GUID}-control"
        >
          <button
            type="button"
            id="${this._GUID}-control"
            class="kuc-field-group-1-25-0__group__toggle"
            aria-controls="${this._GUID}-body"
            aria-expanded="${this.expanded&&!this.disabled}"
            ?disabled="${this.disabled}"
            @click="${this._handleClickButton}"
            @keydown="${this._handleKeyDownButton}"
          >
            ${this._getSvgTemplate()}
            <kuc-base-label-1-25-0
              .text="${this.label}"
              .requiredIcon="${!1}"
            ></kuc-base-label-1-25-0>
          </button>
          <div
            id="${this._GUID}-body"
            class="kuc-field-group-1-25-0__group__body"
            ?hidden="${!this.expanded||this.disabled}"
            @change="${this._handleChangeBody}"
          >
            ${this._content}
          </div>
        </div>
      `}updated(e){e.has(`content`)&&(this._groupEl.style.minWidth=`517px`,requestAnimationFrame(()=>{this._updateContainerWidth()}))}_updateContainerWidth(){if(!this._bodyEl)return;let e=this._bodyEl.hasAttribute(`hidden`);e&&this._bodyEl.removeAttribute(`hidden`);let t=this._bodyEl.offsetWidth;e&&this._bodyEl.setAttribute(`hidden`,``),!(t<=bc)&&(this._groupEl.style.minWidth=t+`px`)}_getSvgTemplate(){return this.expanded?B`<svg
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
          </svg>`:B`<svg
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
          </svg> `}_handleChangeBody(e){e.stopPropagation()}_handleKeyDownButton(e){e.key!==`Tab`&&(e.preventDefault(),(e.key===`Enter`||e.key===` `)&&this._handleClickButton(e))}_handleClickButton(e){if(e.target!==document.activeElement&&this._toggle.focus(),this.expanded){let e=this._bodyEl.getBoundingClientRect().width;e>bc&&(this._groupEl.style.minWidth=e+`px`)}else this._groupEl.style.minWidth=`517px`;this.expanded=!this.expanded;let t={expanded:this.expanded};Y(this,`change`,t)}}yc([H({type:String,reflect:!0,attribute:`class`})],e.prototype,`className`,void 0),yc([H()],e.prototype,`content`,void 0),yc([H({type:String,reflect:!0,attribute:`id`})],e.prototype,`id`,void 0),yc([H({type:String})],e.prototype,`label`,void 0),yc([H({type:Boolean})],e.prototype,`disabled`,void 0),yc([H({type:Boolean})],e.prototype,`expanded`,void 0),yc([H({type:Boolean,attribute:`hidden`,reflect:!0,converter:q})],e.prototype,`visible`,void 0),yc([W(`.kuc-field-group-1-25-0__group`)],e.prototype,`_groupEl`,void 0),yc([W(`.kuc-field-group-1-25-0__group__body`)],e.prototype,`_bodyEl`,void 0),yc([W(`.kuc-field-group-1-25-0__group__toggle`)],e.prototype,`_toggle`,void 0),window.customElements.define(`kuc-field-group-1-25-0`,e),X(vc),xc=e})();var Sc=`
  kuc-multi-choice-1-25-0,
  kuc-multi-choice-1-25-0 *,
  kuc-multi-choice-1-25-0:lang(en),
  kuc-multi-choice-1-25-0:lang(en) * {
    font-family: sans-serif;
  }
  kuc-multi-choice-1-25-0:lang(es),
  kuc-multi-choice-1-25-0:lang(es) * {
    font-family: sans-serif;
  }
  kuc-multi-choice-1-25-0:lang(ja),
  kuc-multi-choice-1-25-0:lang(ja) * {
    font-family: "メイリオ", "Hiragino Kaku Gothic ProN", Meiryo,
      sans-serif;
  }
  kuc-multi-choice-1-25-0:lang(zh),
  kuc-multi-choice-1-25-0:lang(zh) * {
    font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,
      Hei, "Heiti SC", sans-serif;
  }
  kuc-multi-choice-1-25-0:lang(zh-TW),
  kuc-multi-choice-1-25-0:lang(zh-TW) * {
    font-family: "微軟正黑體","Microsoft JhengHei","新宋体",NSimSun,STHeiti,
      Hei,"Heiti SC",sans-serif;
  }
  kuc-multi-choice-1-25-0 {
    display: inline-table;
    font-size: 14px;
    color: var(--kuc-multi-choice-menu-color, #333333);
    width: var(--kuc-multi-choice-menu-width, 180px);
    min-width: var(--kuc-multi-choice-menu-width, 180px);
    line-height: 1.5;
  }
  kuc-multi-choice-1-25-0[hidden] {
    display: none;
  }
  .kuc-multi-choice-1-25-0__group {
    border: none;
    padding: 0px;
    height: auto;
    display: inline-block;
    vertical-align: top;
    width: 100%;
    margin: 0px;
  }
  .kuc-multi-choice-1-25-0__group__label {
    padding: 4px 0px 8px 0px;
    display: inline-block;
    white-space: nowrap;
  }
  .kuc-multi-choice-1-25-0__group__label[hidden] {
    display: none;
  }
  .kuc-multi-choice-1-25-0__group__menu {
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
  .kuc-multi-choice-1-25-0__group__menu:not([disabled]):focus {
    outline: none;
    border: 1px solid #3498db;
  }
  .kuc-multi-choice-1-25-0__group__menu[disabled] {
    background-color: #dbdcdd;
    box-shadow: none;
    cursor: not-allowed;
    color: #888888;
    outline: none;
  }
  .kuc-multi-choice-1-25-0__group__menu__item {
    padding: 4px 16px;
    margin-bottom: 2px;
    line-height: 1;
    position: relative;
    white-space: nowrap;
  }
  .kuc-multi-choice-1-25-0__group__menu__item__icon {
    position: absolute;
    top: 50%;
    left: 16px;
    margin-top: -6px;
    pointer-events: none;
  }
  .kuc-multi-choice-1-25-0__group__menu__item--disabled {
    background-color: #d4d7d7;
    cursor: not-allowed;
    color: #888888;
  }
  .kuc-multi-choice-1-25-0__group__menu__item[aria-selected="true"] {
    color: var(--kuc-multi-choice-menu-color-selected, #3498db);
    padding-left: 32px;
  }
  .kuc-multi-choice-1-25-0__group__menu__item--disabled[aria-selected="true"] {
    color: #888888;
    padding-left: 32px;
  }
  .kuc-multi-choice-1-25-0__group__menu[disabled]
    .kuc-multi-choice-1-25-0__group__menu__item[aria-selected="true"] {
    color: #888888;
  }
  .kuc-multi-choice-1-25-0__group__menu__highlight[role="option"] {
    background-color: var(--kuc-multi-choice-menu-background-color-hover, #e2f2fe);
    cursor: pointer;
  }
`,Cc=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},wc;(()=>{if(wc=window.customElements.get(`kuc-multi-choice-1-25-0`),wc)return;class e extends J{constructor(e){super(),this.className=``,this.error=``,this.id=``,this.label=``,this.disabled=!1,this.requiredIcon=!1,this.visible=!0,this.items=[],this.selectedIndex=[],this.value=[],this._valueMapping={},this._DISABLED_CLASS=`kuc-multi-choice-1-25-0__group__menu__item--disabled`,this._GUID=Z();let t=Q(e);this._setInitialValue(t),Object.assign(this,t)}_setInitialValue(e){let t=`value`in e,n=`selectedIndex`in e,r=e.selectedIndex||[];if(!t&&n){if(!$(r))return;let t=this._getValueMapping(e);this.value=this._getValidValue(t,r)}}shouldUpdate(e){return e.has(`items`)&&!$(this.items)?(this.throwErrorAfterUpdateComplete(G.ITEMS.IS_NOT_ARRAY),!1):e.has(`value`)&&!$(this.value)?(this.throwErrorAfterUpdateComplete(G.VALUE.IS_NOT_ARRAY),!1):e.has(`selectedIndex`)&&!$(this.selectedIndex)?(this.throwErrorAfterUpdateComplete(G.SELECTED_INDEX.IS_NOT_ARRAY),!1):!0}willUpdate(e){if(e.has(`value`)){if(this.value.length>0)return;this.selectedIndex=[]}}update(e){(e.has(`items`)||e.has(`value`)||e.has(`selectedIndex`))&&(this._valueMapping=this._getValueMapping({items:this.items,value:this.value,selectedIndex:this.selectedIndex}),this._setValueAndSelectedIndex()),super.update(e)}render(){return B`
        <div class="kuc-multi-choice-1-25-0__group">
          <div
            class="kuc-multi-choice-1-25-0__group__label"
            id="${this._GUID}-label"
            ?hidden="${!this.label}"
          >
            <kuc-base-label-1-25-0
              .text="${this.label}"
              .requiredIcon="${this.requiredIcon}"
            ></kuc-base-label-1-25-0>
          </div>
          <div
            class="kuc-multi-choice-1-25-0__group__menu"
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
          <kuc-base-error-1-25-0
            .text="${this.error}"
            .guid="${this._GUID}"
            ?hidden="${!this.error}"
            ariaLive="assertive"
          ></kuc-base-error-1-25-0>
        </div>
      `}_getValueMapping(e){let t=e.items||[],n=e.value||[],r=e.selectedIndex||[],i=t.map(e=>e.value||``),a=Object.assign({},i),o={};if(n.length===0){let e=this._getValidValue(a,r);return r.forEach((t,n)=>o[t]=e[n]),o}return this._getValidSelectedIndex(a).forEach((e,t)=>o[e]=n[t]),o}_getValidValue(e,t){return t.filter(t=>e[t]).map(t=>e[t])}_getValidSelectedIndex(e){let t=[];for(let n=0;n<this.value.length;n++){let r=this.selectedIndex[n];if(e[r]===this.value[n]){t.push(r);continue}let i=this.items.findIndex(e=>e.value===this.value[n]);t.push(i)}return t}_setValueAndSelectedIndex(){this.value=Object.values(this._valueMapping),this.selectedIndex=Object.keys(this._valueMapping).map(e=>parseInt(e,10))}_handleMouseDownMultiChoiceItem(e){if(this.disabled)return;let t=e.target,n=t.getAttribute(`value`),r=t.dataset.index||`0`;this._handleChangeValue(n,r)}_handleMouseOverMultiChoiceItem(e){if(this.disabled)return;this._itemsEl.forEach(e=>{e.classList.contains(`kuc-multi-choice-1-25-0__group__menu__highlight`)&&e.classList.remove(`kuc-multi-choice-1-25-0__group__menu__highlight`)});let t=e.currentTarget;t.classList.add(`kuc-multi-choice-1-25-0__group__menu__highlight`),this._setActiveDescendant(t.id)}_handleMouseLeaveMultiChoiceItem(e){this.disabled||(e.currentTarget.classList.remove(`kuc-multi-choice-1-25-0__group__menu__highlight`),this._setActiveDescendant())}_handleKeyDownMultiChoice(e){if(!this.disabled)switch(e.key){case`Up`:case`ArrowUp`:if(e.preventDefault(),this.items.length===0)break;this._actionHighlightPrevMenuItem();break;case`Down`:case`ArrowDown`:if(e.preventDefault(),this.items.length===0)break;this._actionHighlightNextMenuItem();break;case`Spacebar`:case` `:e.preventDefault(),this._actionUpdateValue();break;default:break}}_actionHighlightPrevMenuItem(){let e=null;this._highlightItemEl!==null&&(e=this._highlightItemEl.previousElementSibling),e===null&&(e=this._lastItemEl,this._highlightItemEl===null&&(e=this._firstItemEl));let t=!1;this._actionClearAllHighlightMenuItem();for(let n=0;n<this._itemsEl.length&&(t=e.classList.contains(this._DISABLED_CLASS),t);n++)e=e.previousElementSibling,e===null&&(e=this._lastItemEl);t||(e.classList.add(`kuc-multi-choice-1-25-0__group__menu__highlight`),this._setActiveDescendant(e.id))}_actionHighlightNextMenuItem(){let e=null;this._highlightItemEl!==null&&(e=this._highlightItemEl.nextElementSibling),e===null&&(e=this._firstItemEl);let t=!1;this._actionClearAllHighlightMenuItem();for(let n=0;n<this._itemsEl.length&&(t=e.classList.contains(this._DISABLED_CLASS),t);n++)e=e.nextElementSibling,e===null&&(e=this._firstItemEl);t||(e.classList.add(`kuc-multi-choice-1-25-0__group__menu__highlight`),this._setActiveDescendant(e.id))}_actionClearAllHighlightMenuItem(){this._itemsEl.forEach(e=>{e.classList.remove(`kuc-multi-choice-1-25-0__group__menu__highlight`)})}_actionUpdateValue(){this._itemsEl.forEach(e=>{if(e.classList.contains(`kuc-multi-choice-1-25-0__group__menu__highlight`)){let t=e.getAttribute(`value`),n=e.dataset.index||`0`;this._handleChangeValue(t,n)}})}_getMultiChoiceCheckedIconSvgTemplate(e,t){return V`
        ${t?V`<svg
            class="kuc-multi-choice-1-25-0__group__menu__item__icon"
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
          </svg>`:``}`}_isCheckedItem(e,t){let n=Object.values(this._valueMapping),r=Object.keys(this._valueMapping);return n.filter((n,i)=>n===e.value&&t===parseInt(r[i],10)).length>0}_getMenuItemTemplate(e,t){let n=this._isCheckedItem(e,t),r=e.disabled||this.disabled;return B`
        <div
          class="kuc-multi-choice-1-25-0__group__menu__item ${r?this._DISABLED_CLASS:``}"
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
      `}_setActiveDescendant(e){e!==void 0&&this._menuEl!==null?this._menuEl.setAttribute(`aria-activedescendant`,e):this._menuEl.removeAttribute(`aria-activedescendant`)}_handleChangeValue(e,t){let n=this.value?[...this.value]:this.value,r=this._getNewValueMapping(e,t),i=this.items.map(e=>e.value),a=Object.values(r).filter(e=>i.indexOf(e)>-1);if(a===n)return;let o=Object.keys(r).map(e=>parseInt(e,10));this.value=a,this.selectedIndex=o;let s={oldValue:n,value:a};Y(this,`change`,s)}_getNewValueMapping(e,t){let n=parseInt(t,10),r=Object.keys(this._valueMapping),i={...this._valueMapping};return r.indexOf(t)>-1?(delete i[n],i):(i[n]=e,i)}}Cc([H({type:String,reflect:!0,attribute:`class`})],e.prototype,`className`,void 0),Cc([H({type:String})],e.prototype,`error`,void 0),Cc([H({type:String,reflect:!0,attribute:`id`})],e.prototype,`id`,void 0),Cc([H({type:String})],e.prototype,`label`,void 0),Cc([H({type:Boolean})],e.prototype,`disabled`,void 0),Cc([H({type:Boolean})],e.prototype,`requiredIcon`,void 0),Cc([H({type:Boolean,attribute:`hidden`,reflect:!0,converter:q})],e.prototype,`visible`,void 0),Cc([H({type:Array})],e.prototype,`items`,void 0),Cc([H({type:Array})],e.prototype,`selectedIndex`,void 0),Cc([H({type:Array})],e.prototype,`value`,void 0),Cc([W(`.kuc-multi-choice-1-25-0__group__menu`)],e.prototype,`_menuEl`,void 0),Cc([Ra(`.kuc-multi-choice-1-25-0__group__menu__item`)],e.prototype,`_itemsEl`,void 0),Cc([W(`.kuc-multi-choice-1-25-0__group__menu__item`)],e.prototype,`_firstItemEl`,void 0),Cc([W(`.kuc-multi-choice-1-25-0__group__menu__item:last-child`)],e.prototype,`_lastItemEl`,void 0),Cc([W(`.kuc-multi-choice-1-25-0__group__menu__highlight`)],e.prototype,`_highlightItemEl`,void 0),Cc([U()],e.prototype,`_valueMapping`,void 0),window.customElements.define(`kuc-multi-choice-1-25-0`,e),X(Sc),wc=e})();var Tc=`
  kuc-notification-1-25-0,
  kuc-notification-1-25-0 *,
  kuc-notification-1-25-0:lang(en),
  kuc-notification-1-25-0:lang(en) * {
    font-family: sans-serif;
  }
  kuc-notification-1-25-0:lang(es),
  kuc-notification-1-25-0:lang(es) * {
    font-family: sans-serif;
  }
  kuc-notification-1-25-0:lang(ja),
  kuc-notification-1-25-0:lang(ja) * {
    font-family: "メイリオ", "Hiragino Kaku Gothic ProN", Meiryo,
      sans-serif;
  }
  kuc-notification-1-25-0:lang(zh),
  kuc-notification-1-25-0:lang(zh) * {
    font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,
      Hei, "Heiti SC", sans-serif;
  }
  kuc-notification-1-25-0:lang(zh-TW),
  kuc-notification-1-25-0:lang(zh-TW) * {
    font-family: "微軟正黑體","Microsoft JhengHei","新宋体",NSimSun,STHeiti,
      Hei,"Heiti SC",sans-serif;
  }
  kuc-notification-1-25-0 {
    color: #ffffff;
    font-weight: 700;
    text-align: center;
    text-shadow: 1px -1px 0 rgba(0, 0, 0, 0.5);
  }
  kuc-notification-1-25-0 {
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
  .kuc-notification-fadein-1-25-0 {
    animation-name: kuc-notification-fade-in-1-25-0;
    animation-duration: 250ms;
    animation-timing-function: ease-out;
  }
  .kuc-notification-fadeout-1-25-0 {
    animation-name: kuc-notification-fade-out-1-25-0;
    animation-duration: 250ms;
    animation-timing-function: ease-out;
  }
  .kuc-notification-1-25-0__notification {
    position: relative;
    display: inline-block;
    text-align: left;
    pointer-events: auto;
    padding: 16px 56px 16px 24px;
    background-color: var(--kuc-notification-background-color, #e74c3c);
  }
  .kuc-notification-1-25-0__notification--info {
    background-color: var(--kuc-notification-background-color, #3498db);
  }
  .kuc-notification-1-25-0__notification--success {
    background-color: var(--kuc-notification-background-color, #91c36c);
  }
  .kuc-notification-1-25-0__notification--danger {
    background-color: var(--kuc-notification-background-color, #e74c3c);
  }
  .kuc-notification-1-25-0__notification__title {
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
  .kuc-notification-1-25-0__notification__title--html {
    white-space: normal;
    max-width: 500px;
  }
  .kuc-notification-1-25-0__notification__close-button {
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
  .kuc-notification-1-25-0__notification__close-button__icon-background--danger {
    fill: var(--kuc-notification-close-button-background-color, #c65040);
  }
  .kuc-notification-1-25-0__notification__close-button__icon-background--info {
    fill: var(--kuc-notification-close-button-background-color, #448aca);
  }
  .kuc-notification-1-25-0__notification__close-button__icon-background--success {
    fill: var(--kuc-notification-close-button-background-color, #9bbc65);
  }
  @keyframes kuc-notification-fade-in-1-25-0 {
    0% {
      visibility: visible;
      top: -56px;
    }
    100% {
      visibility: visible;
      top: 0;
    }
  }
  @keyframes kuc-notification-fade-out-1-25-0 {
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
`,Ec=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},Dc;(()=>{if(Dc=window.customElements.get(`kuc-notification-1-25-0`),Dc)return;class e extends J{constructor(e){super(),this.className=``,this.id=``,this.text=``,this.type=`danger`,this.duration=-1,this.container=document.body,this.content=``,this._isOpened=!1,this._content=``;let t=Q(e);Object.assign(this,t)}shouldUpdate(e){if(e.has(`container`)){if(this.container===null||this.container===void 0)return this._isOpened&&this._close(),!1;let e=this._isValidContainerElement(),t=!e||!document.contains(this.container);if(this._isOpened&&t&&this._close(),!e)return this.throwErrorAfterUpdateComplete(G.CONTAINER.INVALID),!1}return!0}willUpdate(e){(e.has(`content`)||e.has(`text`))&&(this.content!==null&&this.content!==void 0&&this.content!==``?_s(this.content)?this._content=B`<div
              class="kuc-notification-1-25-0__notification__title--html"
            >
              ${Wo(this.content)}
            </div>`:this._content=this.content:this._content=this.text)}_isValidContainerElement(){return this.container instanceof HTMLElement}_handleClickCloseButton(e){this.close()}_getCloseButtonColorType(){switch(this.type){case`info`:case`success`:return this.type;default:return`danger`}}_getCloseButtonSvgTemplate(){return V`
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>close button</title>
          <path
            class="kuc-notification-1-25-0__notification__close-button__icon-background--${this._getCloseButtonColorType()}"
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
      `}_setAutoCloseTimer(){this._clearAutoCloseTimer(),!(!Number.isFinite(this.duration)||this.duration<0)&&(this._timeoutID=window.setTimeout(()=>{this.close()},this.duration))}_clearAutoCloseTimer(){this._timeoutID&&window.clearTimeout(this._timeoutID)}open(){if(!this._isValidContainerElement()){document.body.appendChild(this),requestAnimationFrame(()=>{document.body.removeChild(this)}),this.performUpdate();return}this.container.appendChild(this),this.performUpdate(),this.classList.remove(`kuc-notification-fadeout-1-25-0`),this.classList.add(`kuc-notification-fadein-1-25-0`),this._isOpened=!0,this._setAutoCloseTimer()}_close(){this._isOpened=!1,this.classList.remove(`kuc-notification-fadein-1-25-0`),this.classList.add(`kuc-notification-fadeout-1-25-0`),this._clearAutoCloseTimer()}close(){this._close(),Y(this,`close`)}render(){return B`
        <div
          class="kuc-notification-1-25-0__notification kuc-notification-1-25-0__notification--${this.type}"
        >
          <pre
            class="kuc-notification-1-25-0__notification__title"
            aria-live="assertive"
            role="${this._isOpened?`alert`:``}"
          ><!--
          -->${this._content}</pre>
          <button
            class="kuc-notification-1-25-0__notification__close-button"
            type="button"
            aria-label="close"
            @click="${this._handleClickCloseButton}"
          >
            ${this._getCloseButtonSvgTemplate()}
          </button>
        </div>
      `}}Ec([H({type:String,reflect:!0,attribute:`class`})],e.prototype,`className`,void 0),Ec([H({type:String,reflect:!0,attribute:`id`})],e.prototype,`id`,void 0),Ec([H({type:String})],e.prototype,`text`,void 0),Ec([H({type:String})],e.prototype,`type`,void 0),Ec([H({type:Number})],e.prototype,`duration`,void 0),Ec([H()],e.prototype,`container`,void 0),Ec([H()],e.prototype,`content`,void 0),Ec([U()],e.prototype,`_isOpened`,void 0),window.customElements.define(`kuc-notification-1-25-0`,e),X(Tc),Dc=e})();var Oc=`
  kuc-radio-button-1-25-0,
  kuc-radio-button-1-25-0 *,
  kuc-radio-button-1-25-0:lang(en),
  kuc-radio-button-1-25-0:lang(en) * {
    font-family: sans-serif;
  }
  kuc-radio-button-1-25-0:lang(es),
  kuc-radio-button-1-25-0:lang(es) * {
    font-family: sans-serif;
  }
  kuc-radio-button-1-25-0:lang(ja),
  kuc-radio-button-1-25-0:lang(ja) * {
    font-family: "メイリオ", "Hiragino Kaku Gothic ProN", Meiryo,
      sans-serif;
  }
  kuc-radio-button-1-25-0:lang(zh),
  kuc-radio-button-1-25-0:lang(zh) * {
    font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,
      Hei, "Heiti SC", sans-serif;
  }
  kuc-radio-button-1-25-0:lang(zh-TW),
  kuc-radio-button-1-25-0:lang(zh-TW) * {
    font-family: "微軟正黑體","Microsoft JhengHei","新宋体",NSimSun,STHeiti,
      Hei,"Heiti SC",sans-serif;
  }
  kuc-radio-button-1-25-0 {
    font-size: 14px;
    color: #333333;
    display: inline-table;
    width: var(--kuc-radio-button-menu-width, 239px);
    min-width: var(--kuc-radio-button-menu-width, 239px);
    vertical-align: top;
    line-height: 1.5;
  }

  kuc-radio-button-1-25-0[hidden] {
    display: none;
  }

  .kuc-radio-button-1-25-0__group {
    border: none;
    padding: 0px;
    height: auto;
    display: inline-block;
    margin: 0px;
    width: 100%;
  }

  .kuc-radio-button-1-25-0__group__label {
    display: inline-block;
    padding: 4px 0 8px 0;
    white-space: nowrap;
  }

  .kuc-radio-button-1-25-0__group__label[hidden] {
    display: none;
  }

  .kuc-radio-button-1-25-0__group__select-menu {
    display: flex;
    align-items: flex-start;
    width: var(--kuc-radio-button-menu-width, 100%);
    height: var(--kuc-radio-button-menu-height);
    color: var(--kuc-radio-button-menu-color, #333333);
    font-size: var(--kuc-radio-button-menu-font-size, 14px);
  }

  .kuc-radio-button-1-25-0__group__select-menu[itemlayout="vertical"] {
    display: block;
  }

  .kuc-radio-button-1-25-0__group__select-menu[bordervisible] {
    border-color: #e3e7e8;
    border-width: 1px;
    border-style: solid;
    padding-top: 4px;
    box-sizing: border-box;
  }

  .kuc-radio-button-1-25-0__group__select-menu__item {
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

  .kuc-radio-button-1-25-0__group__select-menu__item[focused] {
    border: 1px solid #3498db;
  }

  .kuc-radio-button-1-25-0__group__select-menu__item__input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
  }

  .kuc-radio-button-1-25-0__group__select-menu__item__input:hover
    + .kuc-radio-button-1-25-0__group__select-menu__item__label {
    color: var(--kuc-radio-button-menu-color-hover, #666666);
  }

  .kuc-radio-button-1-25-0__group__select-menu__item__label__icon {
    position: absolute;
    left: -30px;
    box-sizing: border-box;
    width: 21px;
    height: 21px;
    box-shadow: 1px 1px 3px #f5f5f5 inset, -1px -1px 3px #f5f5f5 inset;
    content: "";
    border-radius: 9px;
  }

  .kuc-radio-button-1-25-0__group__select-menu__item__input[disabled]
    + .kuc-radio-button-1-25-0__group__select-menu__item__label {
    color: #888888;
    cursor: not-allowed;
  }

  .kuc-radio-button-1-25-0__group__select-menu__item__label {
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
`,kc=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},Ac;(()=>{if(Ac=window.customElements.get(`kuc-radio-button-1-25-0`),Ac)return;class e extends J{constructor(e){super(),this.className=``,this.error=``,this.id=``,this.itemLayout=`horizontal`,this.label=``,this.value=``,this.selectedIndex=-1,this.borderVisible=!0,this.disabled=!1,this.requiredIcon=!1,this.visible=!0,this.items=[],this._GUID=Z();let t=Q(e);this._setInitialValue(t),Object.assign(this,t)}_setInitialValue(e){let t=`value`in e,n=`selectedIndex`in e;!t&&n&&(this.value=this._getValue(e)||``)}shouldUpdate(e){return e.has(`items`)&&!$(this.items)?(this.throwErrorAfterUpdateComplete(G.ITEMS.IS_NOT_ARRAY),!1):e.has(`value`)&&!ls(this.value)?(this.throwErrorAfterUpdateComplete(G.VALUE.IS_NOT_STRING),!1):e.has(`selectedIndex`)&&!gs(this.selectedIndex)?(this.throwErrorAfterUpdateComplete(G.SELECTED_INDEX.IS_NOT_NUMBER),!1):!0}_findItemToFocus(){let e=-1;for(let t=0;t<this.items.length;t++){let n=this.items[t];if(!n.disabled){if(this.selectedIndex===t&&n.value===this.value){e=t;continue}e===-1&&(e=t)}}return e}willUpdate(e){if(e.has(`value`)){if(this.value!==``)return;this.selectedIndex=-1}}_handleChangeInput(e){e.stopPropagation();let t=e.target,n=t.value,r=t.dataset.index||`0`,i=parseInt(r,10);if(this.value===n&&this.selectedIndex===i)return;let a={oldValue:this.value,value:n};this.value=n,this.selectedIndex=i,Y(this,`change`,a)}_handleFocusInput(e){e.target.parentNode.setAttribute(`focused`,``)}_handleBlurInput(e){e.target.parentNode.removeAttribute(`focused`)}_getRadioIconSvgTemplate(e,t){return V`
    <svg
      class="kuc-radio-button-1-25-0__group__select-menu__item__label__icon"
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
      ${t?V`<circle cx="10.5" cy="10.5" r="6.5" fill="${e?`#e3e7e8`:`#3498db`}"/>`:``}
    </svg>
  `}_isCheckedItem(e,t){return this.value?e.value===this.value&&this.selectedIndex===t:this.selectedIndex===t}_getItemTemplate(e,t){let n=this._isCheckedItem(e,t),r=e.disabled||this.disabled,i=e.value===void 0?``:e.value,a=t===this._findItemToFocus()?`0`:`-1`;return B`
        <div
          class="kuc-radio-button-1-25-0__group__select-menu__item"
          itemLayout="${this.itemLayout}"
        >
          <input
            type="radio"
            aria-checked="${n?`true`:`false`}"
            aria-describedby="${this._GUID}-error"
            data-index="${t}"
            id="${this._GUID}-item-${t}"
            class="kuc-radio-button-1-25-0__group__select-menu__item__input"
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
            class="kuc-radio-button-1-25-0__group__select-menu__item__label"
            for="${this._GUID}-item-${t}"
            >${this._getRadioIconSvgTemplate(r,n)}${e.label===void 0?e.value:e.label}
          </label>
        </div>
      `}update(e){(e.has(`items`)||e.has(`value`)||e.has(`selectedIndex`))&&(this.selectedIndex=this._getSelectedIndex(),this.value=this._getValue({items:this.items,selectedIndex:this.selectedIndex})||``),super.update(e)}render(){return B`
        <div
          class="kuc-radio-button-1-25-0__group"
          role="radiogroup"
          aria-labelledby="${this._GUID}-group"
        >
          <div class="kuc-radio-button-1-25-0__group__label" ?hidden="${!this.label}">
            <kuc-base-label-1-25-0
              .text="${this.label}"
              .guid="${this._GUID}"
              .requiredIcon="${this.requiredIcon}"
            ></kuc-base-label-1-25-0>
          </div>
          <div
            class="kuc-radio-button-1-25-0__group__select-menu"
            ?borderVisible="${this.borderVisible}"
            itemLayout="${this.itemLayout}"
          >
            ${this.items.map((e,t)=>this._getItemTemplate(e,t))}
          </div>
          <kuc-base-error-1-25-0
            .text="${this.error}"
            .guid="${this._GUID}"
            ?hidden="${!this.error}"
            ariaLive="assertive"
          ></kuc-base-error-1-25-0>
        </div>
      `}updated(){this._inputEls.forEach((e,t)=>{e.checked=this.value===e.value&&t===this.selectedIndex})}_getSelectedIndex(){if(!this.value)return this.items[this.selectedIndex]?this.selectedIndex:-1;let e=this.items.findIndex(e=>e.value===this.value);if(e===-1)return-1;let t=this.items.findIndex((e,t)=>e.value===this.value&&t===this.selectedIndex);return t>-1?t:e}_getValue(e){let t=(e.items||[])[e.selectedIndex===0||e.selectedIndex?e.selectedIndex:-1];return t?t.value:``}}kc([H({type:String,reflect:!0,attribute:`class`})],e.prototype,`className`,void 0),kc([H({type:String})],e.prototype,`error`,void 0),kc([H({type:String,reflect:!0,attribute:`id`})],e.prototype,`id`,void 0),kc([H({type:String})],e.prototype,`itemLayout`,void 0),kc([H({type:String})],e.prototype,`label`,void 0),kc([H({type:String})],e.prototype,`value`,void 0),kc([H({type:Number})],e.prototype,`selectedIndex`,void 0),kc([H({type:Boolean})],e.prototype,`borderVisible`,void 0),kc([H({type:Boolean})],e.prototype,`disabled`,void 0),kc([H({type:Boolean})],e.prototype,`requiredIcon`,void 0),kc([H({type:Boolean,attribute:`hidden`,reflect:!0,converter:q})],e.prototype,`visible`,void 0),kc([H({type:Array})],e.prototype,`items`,void 0),kc([Ra(`.kuc-radio-button-1-25-0__group__select-menu__item__input`)],e.prototype,`_inputEls`,void 0),window.customElements.define(`kuc-radio-button-1-25-0`,e),X(Oc),Ac=e})();var jc=`
  .kuc-base-pagination-1-25-0__group {
    margin-top: 10px;
  }
  .kuc-base-pagination-1-25-0__group button {
    cursor: pointer;
  }
  .kuc-base-pagination-1-25-0__group__pager-prev {
    border: none;
    background-color: transparent;
    visibility: visible;
    height: 23px;
    vertical-align: middle;
  }
  .kuc-base-pagination-1-25-0__group__pager-next {
    border: none;
    background-color: transparent;
    visibility: visible;
    height: 23px;
    vertical-align: middle;
  }
  .kuc-base-pagination-1-25-0__group__pager-next:hover svg path,
  .kuc-base-pagination-1-25-0__group__pager-prev:hover svg path,
  .kuc-base-pagination-1-25-0__group__pager-next:focus-visible svg path,
  .kuc-base-pagination-1-25-0__group__pager-prev:focus-visible svg path
  {
    fill: #3498db;
  }
  .kuc-base-pagination-1-25-0__group__pager--focus,
  .kuc-base-pagination-1-25-0__group__pager-next:focus-visible,
  .kuc-base-pagination-1-25-0__group__pager-prev:focus-visible {
    outline: 1px solid #3498db;
  }
  .kuc-base-pagination-1-25-0__group__pager--horver svg path {
    fill: #3498db;
  }
  .kuc-base-pagination-1-25-0__group__pager-next svg,
  .kuc-base-pagination-1-25-0__group__pager-prev svg {
    margin-top: 3px;
  }
  .kuc-base-pagination-1-25-0__group__pager-disable {
    visibility: hidden;
  }
  .kuc-base-pagination-1-25-0__group__pager-current {
    display: inline-block;
    height: 23px;
    line-height: 23px;
    vertical-align: middle;
    font-size: 14px;
    color: #333333;
  }
`,Mc=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},Nc;(()=>{if(Nc=window.customElements.get(`kuc-base-pagination-1-25-0`),Nc)return;class e extends J{constructor(){super(...arguments),this.pagePosition=1,this.rowsPerPage=5,this.total=1,this.isNext=!0,this.isPrev=!0,this.visible=!0}render(){return B`
        <div class="kuc-base-pagination-1-25-0__group" ?hidden="${!this.visible}">
          <button
            title="previous"
            class="kuc-base-pagination-1-25-0__group__pager-prev${this.isPrev?``:` kuc-base-pagination-1-25-0__group__pager-disable`}"
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
            class="kuc-base-pagination-1-25-0__group__pager-next${this.isNext?``:` kuc-base-pagination-1-25-0__group__pager-disable`}"
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
      `}_handleClickPrevButton(e){e.stopPropagation(),Y(this,`kuc:pagination-click-prev`)}_handleFocusPrevButton(){this._prevButtonEl.classList.add(`kuc-base-pagination-1-25-0__group__pager--focus`)}_handleBlurPrevButton(){this._prevButtonEl.classList.remove(`kuc-base-pagination-1-25-0__group__pager--focus`)}_handleMouseOverPrevButton(){this._prevButtonEl.classList.add(`kuc-base-pagination-1-25-0__group__pager--horver`)}_handleMouseLeavePrevButton(){this._prevButtonEl.classList.remove(`kuc-base-pagination-1-25-0__group__pager--horver`)}_handleClickNextButton(e){e.stopPropagation(),Y(this,`kuc:pagination-click-next`)}_handleFocusNextButton(){this._nextButtonEl.classList.add(`kuc-base-pagination-1-25-0__group__pager--focus`)}_handleBlurNextButton(){this._nextButtonEl.classList.remove(`kuc-base-pagination-1-25-0__group__pager--focus`)}_handleMouseOverNextButton(){this._nextButtonEl.classList.add(`kuc-base-pagination-1-25-0__group__pager--horver`)}_handleMouseLeaveNextButton(){this._nextButtonEl.classList.remove(`kuc-base-pagination-1-25-0__group__pager--horver`)}_getPrevButtonSvgTemplate(){return V`
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
      `}_getNextButtonSvgTemplate(){return V`
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
      `}_getCurrentPageNumberTemplate(){let e=this._createCurrentPageInfo();return B`<span class="kuc-base-pagination-1-25-0__group__pager-current"
        >${`${e.firstNum} - ${e.lastNum} / ${this.total}`}</span
      >`}_createCurrentPageInfo(){let e=(this.pagePosition-1)*this.rowsPerPage+1,t=this.pagePosition*this.rowsPerPage;return t=t>this.total?this.total:t,{firstNum:e,lastNum:t}}}Mc([H({type:Number})],e.prototype,`pagePosition`,void 0),Mc([H({type:Number})],e.prototype,`rowsPerPage`,void 0),Mc([H({type:Number})],e.prototype,`total`,void 0),Mc([H({type:Boolean})],e.prototype,`isNext`,void 0),Mc([H({type:Boolean})],e.prototype,`isPrev`,void 0),Mc([H({type:Boolean,attribute:`hidden`,reflect:!0,converter:q})],e.prototype,`visible`,void 0),Mc([W(`.kuc-base-pagination-1-25-0__group__pager-prev`)],e.prototype,`_prevButtonEl`,void 0),Mc([W(`.kuc-base-pagination-1-25-0__group__pager-next`)],e.prototype,`_nextButtonEl`,void 0),window.customElements.define(`kuc-base-pagination-1-25-0`,e),X(jc),Nc=e})();var Pc=`
  kuc-readonly-table-1-25-0 ,
  kuc-readonly-table-1-25-0  *,
  kuc-readonly-table-1-25-0:lang(en),
  kuc-readonly-table-1-25-0:lang(en) * {
    font-family: sans-serif;
  }
  kuc-readonly-table-1-25-0:lang(es),
  kuc-readonly-table-1-25-0:lang(es) * {
    font-family: sans-serif;
  }
  kuc-readonly-table-1-25-0:lang(ja),
  kuc-readonly-table-1-25-0:lang(ja) * {
      font-family: "メイリオ", "Hiragino Kaku Gothic ProN", Meiryo,
      sans-serif;
  }
  kuc-readonly-table-1-25-0:lang(zh),
  kuc-readonly-table-1-25-0:lang(zh) * {
      font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,
      Hei, "Heiti SC", sans-serif;
  }
  kuc-readonly-table-1-25-0:lang(zh-TW),
  kuc-readonly-table-1-25-0:lang(zh-TW) * {
    font-family: "微軟正黑體","Microsoft JhengHei","新宋体",NSimSun,STHeiti,
      Hei,"Heiti SC",sans-serif;
  }
  kuc-readonly-table-1-25-0 {
    font-size: 14px;
    color: #333333;
    display: block;
  }
  kuc-readonly-table-1-25-0[hidden] {
    display: none;
  }
  .kuc-readonly-table-1-25-0__table {
    border-collapse: collapse;
    table-layout: fixed;
    width: 100%;
    display: inline-block;
  }
  .kuc-readonly-table-1-25-0__table__header {
    border-width: 0px 1px;
    border-color: var(--kuc-readonly-table-header-background-color, #3498db);
    border-style: solid;
  }
  .kuc-readonly-table-1-25-0__table__header__cell--sort.kuc-readonly-table-1-25-0__table__header__cell--first-visible:hover {
    border-left: 1px solid var(--kuc-readonly-table-header-background-color-hover, #1d6fa5);
  }
  .kuc-readonly-table-1-25-0__table__header__cell--sort.kuc-readonly-table-1-25-0__table__header__cell--last-visible:hover {
    border-right: 1px solid var(--kuc-readonly-table-header-background-color-hover, #1d6fa5);
  }
  .kuc-readonly-table-1-25-0__table__header__cell--sort.kuc-readonly-table-1-25-0__table__header__cell--first-visible:focus-visible {
    border-left: 1px solid var(--kuc-readonly-table-header-background-color-focus, #1d6fa5);
  }
  .kuc-readonly-table-1-25-0__table__header__cell--sort.kuc-readonly-table-1-25-0__table__header__cell--last-visible:focus-visible {
    border-right: 1px solid var(--kuc-readonly-table-header-background-color-focus, #1d6fa5);
  }
  .kuc-readonly-table-1-25-0__table__header__cell--sorted-asc.kuc-readonly-table-1-25-0__table__header__cell--first-visible,
  .kuc-readonly-table-1-25-0__table__header__cell--sorted-desc.kuc-readonly-table-1-25-0__table__header__cell--first-visible {
    border-left: 1px solid var(--kuc-readonly-table-header-background-color-sorted, #1d6fa5);
  }
  .kuc-readonly-table-1-25-0__table__header__cell--sorted-asc.kuc-readonly-table-1-25-0__table__header__cell--last-visible,
  .kuc-readonly-table-1-25-0__table__header__cell--sorted-desc.kuc-readonly-table-1-25-0__table__header__cell--last-visible {
    border-right: 1px solid var(--kuc-readonly-table-header-background-color-sorted, #1d6fa5);
  }
  .kuc-readonly-table-1-25-0__table__label {
    text-align: left;
    white-space: normal;
    overflow-wrap: anywhere;
    padding: 4px 0px;
  }
  .kuc-readonly-table-1-25-0__table__label[hidden] {
    display: none;
  }
  .kuc-readonly-table-1-25-0__table__label--no-column {
    overflow-wrap: break-word;
  }
  .kuc-readonly-table-1-25-0__table__header__cell {
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
  .kuc-readonly-table-1-25-0__table__header__cell--html {
    white-space: normal;
    overflow: unset;
  }
  .kuc-readonly-table-1-25-0__table__header__cell[hidden] {
    display: none;
  }
  .kuc-readonly-table-1-25-0__table__header__cell__wrapper {
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
  }
  .kuc-readonly-table-1-25-0__table__header__cell__wrapper__title {
    flex: 1;
    min-width: 0;
  }
  .kuc-readonly-table-1-25-0__table__header__cell__wrapper__title--html {
    white-space: normal;
  }
  .kuc-readonly-table-1-25-0__table__header__cell__wrapper__sort-icon {
    flex-shrink: 0;
    margin-left: 4px;
    display: flex;
    align-items: center;
    align-self: center;
  }
  .kuc-readonly-table-1-25-0__table__body {
    vertical-align: top;
  }
  .kuc-readonly-table-1-25-0__table__body>.kuc-readonly-table-1-25-0__table__body__row:first-child>.kuc-readonly-table-1-25-0__table__body__row__cell-data {
    border-top-width: 0px;
  }
  .kuc-readonly-table-1-25-0__table__body__row__cell-data {
    box-sizing: border-box;
    padding: 4px 8px;
    white-space: pre-wrap;
    overflow-wrap: break-word;
    border-color: #e3e7e8;
    border-style: solid;
    border-width: 1px;
  }
  .kuc-readonly-table-1-25-0__table__body__row__cell-data[hidden] {
    display: none;
  }
  .kuc-readonly-table-1-25-0__table__header__cell,
  .kuc-readonly-table-1-25-0__table__body__row__cell-data {
    scrollbar-width: none; /* Firefox */
  }
  .kuc-readonly-table-1-25-0__table__header__cell::-webkit-scrollbar,
  .kuc-readonly-table-1-25-0__table__body__row__cell-data::-webkit-scrollbar {
    width: 0; /* Safari and Chrome */
    display: none
  }
  .kuc-readonly-table-1-25-0__table__body__row__cell-data--html {
    white-space: normal;
  }
  .kuc-readonly-table-1-25-0__table__header__cell--sort {
    cursor: pointer;
    user-select: none;
  }
  .kuc-readonly-table-1-25-0__table__header__cell--sort:hover {
    background-color: var(--kuc-readonly-table-header-background-color-hover, #1d6fa5);
  }
  .kuc-readonly-table-1-25-0__table__header__cell--sort:focus-visible {
    outline: none;
    background-color: var(--kuc-readonly-table-header-background-color-focus, #1d6fa5);
  }
  .kuc-readonly-table-1-25-0__table__header__cell--sorted-asc,
  .kuc-readonly-table-1-25-0__table__header__cell--sorted-desc {
    background-color: var(--kuc-readonly-table-header-background-color-sorted, #1d6fa5);
  }
`,Fc=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},Ic;(()=>{if(Ic=window.customElements.get(`kuc-readonly-table-1-25-0`),Ic)return;class e extends J{constructor(e){if(super(),this.className=``,this.id=``,this.label=``,this.columns=[],this.data=[],this.pagination=!0,this.rowsPerPage=5,this.visible=!0,this._pagePosition=1,this._columnOrder=[],this._sortField=null,this._sortDirection=null,!e)return;let t=Q(e);Object.assign(this,t)}shouldUpdate(e){return e.has(`columns`)&&!$(this.columns)?(this.throwErrorAfterUpdateComplete(G.COLUMNS.IS_NOT_ARRAY),!1):e.has(`data`)&&!$(this.data)?(this.throwErrorAfterUpdateComplete(G.DATA.IS_NOT_ARRAY),!1):e.has(`rowsPerPage`)&&!fs(this.rowsPerPage)?(this.throwErrorAfterUpdateComplete(G.ROWS_PER_PAGE.INVALID),!1):!0}willUpdate(e){e.has(`columns`)&&(this._columnOrder=[],this.columns.map(e=>this._columnOrder.push(e.field?e.field:``))),e.has(`rowsPerPage`)&&(this.rowsPerPage=Math.round(this.rowsPerPage))}render(){let e=this._createDisplayData();return!this.columns||this.columns.length<1?B`
            <table class="kuc-readonly-table-1-25-0__table">
              <caption
                class="kuc-readonly-table-1-25-0__table__label kuc-readonly-table-1-25-0__table__label--no-column"
                ?hidden="${!this.label}"
              >
                ${this.label}
              </caption>
            </table>
          `:B`
            <table class="kuc-readonly-table-1-25-0__table">
              <caption
                class="kuc-readonly-table-1-25-0__table__label"
                ?hidden="${!this.label}"
              >
                ${this.label}
              </caption>
              <thead class="kuc-readonly-table-1-25-0__table__header">
                <tr>
                  ${this.columns.map((e,t)=>this._getColumnsTemplate(e,t))}
                </tr>
              </thead>
              <tbody class="kuc-readonly-table-1-25-0__table__body">
                ${e.map((e,t)=>this._getDataTemplate(e,t))}
              </tbody>
            </table>
            <kuc-base-pagination-1-25-0
              .pagePosition="${this._pagePosition}"
              .rowsPerPage="${this.rowsPerPage}"
              .total="${this.data.length}"
              .visible="${this.pagination}"
              .isPrev="${this._toggleDisplayPreviousButton()}"
              .isNext="${this._toggleDisplayNextButton()}"
              @kuc:pagination-click-prev=${this._handleClickPreviousButton}
              @kuc:pagination-click-next=${this._handleClickNextButton}
            ></kuc-base-pagination-1-25-0>
          `}_createDisplayData(){let e=[...this.data];if(this._sortField&&this._sortDirection&&(e=this._sortData(e,this._sortField,this._sortDirection)),!this.pagination)return e;let t=(this._pagePosition-1)*this.rowsPerPage+1,n=this._pagePosition*this.rowsPerPage;return e.filter((e,r)=>r>=t-1&&r<=n-1)}_sortData(e,t,n){return[...e].sort((e,r)=>{let i=e[t],a=r[t],o=_s(i),s=_s(a);if(o&&s)return 0;if(o)return 1;if(s)return-1;if(i==null&&a==null)return 0;if(i==null)return 1;if(a==null)return-1;if(typeof i==`number`&&typeof a==`number`)return n===`asc`?i-a:a-i;if(typeof i==`string`&&typeof a==`string`&&cs(i)&&cs(a)){let e=new Date(i),t=new Date(a);if(!isNaN(e.getTime())&&!isNaN(t.getTime()))return n===`asc`?e.getTime()-t.getTime():t.getTime()-e.getTime()}let c=String(i),l=String(a),u=new Intl.Collator(void 0,{numeric:!0,sensitivity:`base`});return n===`asc`?u.compare(c,l):u.compare(l,c)})}_handleClickHeader(e){this._sortFields(e)}_handleKeyDownHeader(e,t){(e.key===`Enter`||e.key===` `)&&(e.preventDefault(),this._sortFields(t))}_sortFields(e){let t=this._columnOrder.indexOf(e);t<0||this.columns[t].sort&&(this._sortField===e?this._sortDirection=this._sortDirection===`asc`?`desc`:`asc`:(this._sortField=e,this._sortDirection=`asc`),this._pagePosition=1)}_customWidthVariables(e){return`var(--kuc-readonly-table-header-${e}-width, var(--kuc-readonly-table-header-width, auto))`}_getColumnsTemplate(e,t){let n=this._customWidthVariables(t),r=e.title?_s(e.title):!1,i=e.field||``,a=e.sort===!0,o=this._sortField===i,s=this.columns.map((e,t)=>e.visible===!1?-1:t).filter(e=>e!==-1),c=t===s[0],l=t===s[s.length-1],u=o?` kuc-readonly-table-1-25-0__table__header__cell--sorted-${this._sortDirection}`:``;return B`
        <th
          class="kuc-readonly-table-1-25-0__table__header__cell${r?` kuc-readonly-table-1-25-0__table__header__cell--html`:``}${a?` kuc-readonly-table-1-25-0__table__header__cell--sort`:``}${u}${c?` kuc-readonly-table-1-25-0__table__header__cell--first-visible`:``}${l?` kuc-readonly-table-1-25-0__table__header__cell--last-visible`:``}"
          ?hidden="${e.visible===!1}"
          style="width: ${n}; min-width: ${n}; max-width: ${n};"
          @click="${a?()=>this._handleClickHeader(i):null}"
          tabindex="${a?0:-1}"
          aria-sort="${o?this._getSortDescription(this._sortDirection):`none`}"
          @keydown="${a?e=>this._handleKeyDownHeader(e,i):null}"
        >
          <div class="kuc-readonly-table-1-25-0__table__header__cell__wrapper">
            <div
              class="kuc-readonly-table-1-25-0__table__header__cell__wrapper__title${r?` kuc-readonly-table-1-25-0__table__header__cell__wrapper__title--html`:``}"
            >
              ${r?Wo(e.title):e.title??``}
            </div>
            ${a&&o?B`<div
                  class="kuc-readonly-table-1-25-0__table__header__cell__wrapper__sort-icon"
                >
                  ${this._getSortSvgIcon(this._sortDirection)}
                </div>`:``}
          </div>
        </th>
      `}_getSortDescription(e){return e===`desc`?`descending`:e===`asc`?`ascending`:`none`}_getSortSvgIcon(e){return e===`desc`?V`<svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg" style="vertical-align: middle;">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M6.99996 0H5.99996V10.6011L1.4528 5.78021L0.725342 6.46637L6.57169 12.6647L12.1902 6.45887L11.4489 5.78771L6.99996 10.7017V0Z" fill="white"/>
        </svg>
        `:e===`asc`?V`<svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg" style="vertical-align: middle;">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M6.99996 13H5.99996V2.3989L1.4528 7.21979L0.725342 6.53363L6.57169 0.3353L12.1902 6.54113L11.4489 7.21229L6.99996 2.2983V13Z" fill="white"/>
      </svg>`:``}_getDataTemplate(e,t){return B`
        <tr
          class="kuc-readonly-table-1-25-0__table__body__row kuc-readonly-table-1-25-0__table__body__row-${t}"
        >
          ${this._columnOrder.map((t,n)=>{let r=this.columns[n].visible??!0,i=e[t];_s(i)&&(i=B`<div
                class="kuc-readonly-table-1-25-0__table__body__row__cell-data--html"
              >
                ${Wo(i)}
              </div>`);let a=this._customWidthVariables(n);return B`<td class="kuc-readonly-table-1-25-0__table__body__row__cell-data" ?hidden="${!r}" style="width: ${a}; min-width: ${a}; max-width: ${a}">${i}</td>`})}
        </tr>
      `}_toggleDisplayPreviousButton(){return this._pagePosition>1}_toggleDisplayNextButton(){return this._pagePosition<this.data.length/this.rowsPerPage}_handleClickPreviousButton(e){if(!(this._pagePosition<2)){if(!fs(this.rowsPerPage)){this.throwErrorAfterUpdateComplete(G.ROWS_PER_PAGE.INVALID);return}--this._pagePosition}}_handleClickNextButton(e){if(!fs(this.rowsPerPage)){this.throwErrorAfterUpdateComplete(G.ROWS_PER_PAGE.INVALID);return}this._toggleDisplayNextButton()!==!1&&(this._pagePosition+=1)}}Fc([H({type:String,reflect:!0,attribute:`class`})],e.prototype,`className`,void 0),Fc([H({type:String,reflect:!0,attribute:`id`})],e.prototype,`id`,void 0),Fc([H({type:String})],e.prototype,`label`,void 0),Fc([H({type:Array})],e.prototype,`columns`,void 0),Fc([H({type:Array})],e.prototype,`data`,void 0),Fc([H({type:Boolean})],e.prototype,`pagination`,void 0),Fc([H({type:Number})],e.prototype,`rowsPerPage`,void 0),Fc([H({type:Boolean,attribute:`hidden`,reflect:!0,converter:q})],e.prototype,`visible`,void 0),Fc([U()],e.prototype,`_pagePosition`,void 0),Fc([U()],e.prototype,`_columnOrder`,void 0),Fc([U()],e.prototype,`_sortField`,void 0),Fc([U()],e.prototype,`_sortDirection`,void 0),window.customElements.define(`kuc-readonly-table-1-25-0`,e),X(Pc),Ic=e})();var Lc=`
  kuc-spinner-1-25-0,
  kuc-spinner-1-25-0 *,
  kuc-spinner-1-25-0:lang(en),
  kuc-spinner-1-25-0:lang(en) * {
    font-family: sans-serif;
  }
  kuc-spinner-1-25-0:lang(es),
  kuc-spinner-1-25-0:lang(es) * {
    font-family: sans-serif;
  }
  kuc-spinner-1-25-0:lang(ja),
  kuc-spinner-1-25-0:lang(ja) * {
    font-family: "メイリオ", "Hiragino Kaku Gothic ProN", Meiryo,
      sans-serif;
  }
  kuc-spinner-1-25-0:lang(zh),
  kuc-spinner-1-25-0:lang(zh) * {
    font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,
      Hei, "Heiti SC", sans-serif;
  }
  kuc-spinner-1-25-0:lang(zh-TW),
  kuc-spinner-1-25-0:lang(zh-TW) * {
    font-family: "微軟正黑體","Microsoft JhengHei","新宋体",NSimSun,STHeiti,
      Hei,"Heiti SC",sans-serif;
  }
  kuc-spinner-1-25-0 {
    font-size: 14px;
    color: #333333;
  }
  .kuc-spinner-1-25-0__spinner {
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
  .kuc-spinner-1-25-0__spinner__loader {
    width: var(--kuc-spinner-loader-width, 50px);
    height: var(--kuc-spinner-loader-height, 50px);
    animation: rotate-loading 1s steps(12) infinite;
    fill: var(--kuc-spinner-loader-color, #99ccff);
  }
  .kuc-spinner-1-25-0__spinner__text {
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
  .kuc-spinner-1-25-0__mask {
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
`,Rc=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},zc;(()=>{if(zc=window.customElements.get(`kuc-spinner-1-25-0`),zc)return;class e extends J{constructor(e){super(),this.className=``,this.id=``,this.text=``,this.container=document.body,this._isOpened=!1;let t=Q(e);Object.assign(this,t)}_getSpinnerSvgTemplate(){return V`
        <svg
          class="kuc-spinner-1-25-0__spinner__loader"
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
      `}_isValidContainerElement(){return this.container instanceof HTMLElement}open(){if(!this._isValidContainerElement()){document.body.appendChild(this),requestAnimationFrame(()=>{document.body.removeChild(this)}),this.performUpdate();return}this.parentElement&&this.parentElement.classList.remove(`kuc--has-spinner`),this.container.appendChild(this),this.performUpdate(),this.container.classList.contains(`kuc--has-spinner`)||this.container.classList.add(`kuc--has-spinner`),this._isOpened=!0}close(){this.parentElement&&this.parentElement.classList.remove(`kuc--has-spinner`),this._isOpened=!1,this.parentNode&&this.parentNode.removeChild(this)}shouldUpdate(e){if(e.has(`container`)){if(this.container===null||this.container===void 0)return this._isOpened&&this.close(),!1;let e=this._isValidContainerElement(),t=!e||!document.contains(this.container);if(this._isOpened&&t&&this.close(),!e)return this.throwErrorAfterUpdateComplete(G.CONTAINER.INVALID),!1}return!0}render(){return B`
        <div class="kuc-spinner-1-25-0__spinner" aria-live="assertive" role="alert">
          ${this._getSpinnerSvgTemplate()}
          <div
            class="kuc-spinner-1-25-0__spinner__text${this.text?``:` visually-hidden`}"
          >
            ${this.text?this.text:`now loading…`}
          </div>
        </div>
        <div class="kuc-spinner-1-25-0__mask"></div>
      `}}Rc([H({type:String,reflect:!0,attribute:`class`})],e.prototype,`className`,void 0),Rc([H({type:String,reflect:!0,attribute:`id`})],e.prototype,`id`,void 0),Rc([H({type:String})],e.prototype,`text`,void 0),Rc([H()],e.prototype,`container`,void 0),window.customElements.define(`kuc-spinner-1-25-0`,e),X(Lc),zc=e})();var Bc=`
  kuc-switch-1-25-0,
  kuc-switch-1-25-0 *,
  kuc-switch-1-25-0:lang(en),
  kuc-switch-1-25-0:lang(en) * {
    font-family: sans-serif;
  }
  kuc-switch-1-25-0:lang(es),
  kuc-switch-1-25-0:lang(es) * {
    font-family: sans-serif;
  }
  kuc-switch-1-25-0:lang(ja),
  kuc-switch-1-25-0:lang(ja) * {
    font-family: "メイリオ", "Hiragino Kaku Gothic ProN", Meiryo, sans-serif;
  }
  kuc-switch-1-25-0:lang(zh),
  kuc-switch-1-25-0:lang(zh) * {
    font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti, Hei, "Heiti SC", sans-serif;
  }
  kuc-switch-1-25-0:lang(zh-TW),
  kuc-switch-1-25-0:lang(zh-TW) * {
    font-family: "微軟正黑體", "Microsoft JhengHei", "新宋体", NSimSun, STHeiti, Hei, "Heiti SC", sans-serif;
  }

  kuc-switch-1-25-0 {
    display: inline-table;
    font-size: 14px;
    color: #333333;
    vertical-align: top;
    line-height: 1.5;
  }

  kuc-switch-1-25-0[hidden] {
    display: none;
  }

  .kuc-switch-1-25-0__group {
    border: none;
    padding: 0px;
    height: auto;
    display: flex;
    margin: 0px;
    width: 100%;
    align-items: center;
    gap: 6px;
  }

  .kuc-switch-1-25-0__group--top {
    flex-direction: column;
    align-items: flex-start;
    gap: 4px;
  }

  .kuc-switch-1-25-0__group--bottom {
    flex-direction: column-reverse;
    align-items: flex-start;
    gap: 4px;
  }

  .kuc-switch-1-25-0__group--left {
    flex-direction: row;
  }

  .kuc-switch-1-25-0__group--right {
    flex-direction: row-reverse;
  }

  .kuc-switch-1-25-0__group__label {
    display: block;
    white-space: nowrap;
    cursor: pointer;
  }

  .kuc-switch-1-25-0__group__label[hidden] {
    display: none;
  }

  .kuc-switch-1-25-0__group__label--disabled {
    cursor: not-allowed;
  }

  .kuc-switch-1-25-0__group--top .kuc-switch-1-25-0__group__label,
  .kuc-switch-1-25-0__group--bottom .kuc-switch-1-25-0__group__label {
    padding-left: 3px;
  }

  .kuc-switch-1-25-0__group__label .kuc-base-label-1-25-0__text {
    font-size: 14px;
  }

  .kuc-switch-1-25-0__group__switch {
    position: relative;
    display: flex;
    align-items: center;
    flex-shrink: 0;
  }

  .kuc-switch-1-25-0__group__switch__input {
    opacity: 0;
    width: 0px;
    height: 0px;
    position: absolute;
  }

  .kuc-switch-1-25-0__group__switch__handle {
    position: absolute;
    width: calc(var(--kuc-switch-track-height, 28px) - 2 * 4px);
    height: calc(var(--kuc-switch-track-height, 28px) - 2 * 4px);
    left: 4px;
    background-color: #ffffff;
    transition: left 0.2s ease-in-out;
    border-radius: 50%;
    cursor: pointer;
  }

  .kuc-switch-1-25-0__group__switch__input:checked ~ .kuc-switch-1-25-0__group__switch__handle {
    left: calc(100% - var(--kuc-switch-track-height, 28px) + 4px);
  }

  .kuc-switch-1-25-0__group__switch__track {
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

  .kuc-switch-1-25-0__group__switch__input:checked ~ .kuc-switch-1-25-0__group__switch__track {
    background-color: #3498db;
    padding-left: 10px;
    padding-right: var(--kuc-switch-track-height, 28px);
  }

  .kuc-switch-1-25-0__group__switch__input:focus-visible ~ .kuc-switch-1-25-0__group__switch__track {
    outline: 1px solid #3498db;
    outline-offset: 1px;
  }

  .kuc-switch-1-25-0__group__switch__input:disabled ~ .kuc-switch-1-25-0__group__switch__track,
  .kuc-switch-1-25-0__group__switch__input:disabled ~ .kuc-switch-1-25-0__group__switch__handle {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .kuc-switch-1-25-0__group__switch__track__text {
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

  .kuc-switch-1-25-0__group__switch__track__text--unchecked {
    margin-top: calc(-1 * var(--kuc-switch-track-height, 28px));
    margin-left: 0;
    margin-right: 0;
  }

  .kuc-switch-1-25-0__group__switch__track__text--checked {
    margin-left: calc(-100% - var(--kuc-switch-track-height, 28px));
    margin-right: calc(100% + var(--kuc-switch-track-height, 28px));
  }

  .kuc-switch-1-25-0__group__switch__input:checked ~ .kuc-switch-1-25-0__group__switch__track .kuc-switch-1-25-0__group__switch__track__text--unchecked {
    margin-left: calc(100% + var(--kuc-switch-track-height, 28px));
    margin-right: calc(-100% - var(--kuc-switch-track-height, 28px));
  }

  .kuc-switch-1-25-0__group__switch__input:checked ~ .kuc-switch-1-25-0__group__switch__track .kuc-switch-1-25-0__group__switch__track__text--checked {
    margin-left: 0;
    margin-right: 0;
  }
`,Vc=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},Hc;(()=>{if(Hc=window.customElements.get(`kuc-switch-1-25-0`),Hc)return;class e extends J{constructor(e){super(),this.checkedText=``,this.className=``,this.id=``,this.label=``,this.labelPlacement=`left`,this.unCheckedText=``,this.checked=!1,this.disabled=!1,this.visible=!0,this._validLabelPlacement=[`top`,`bottom`,`left`,`right`],this._GUID=Z();let t=Q(e);Object.assign(this,t)}render(){return B`
        <div
          class="kuc-switch-1-25-0__group kuc-switch-1-25-0__group--${this._getLabelPlacement()}"
        >
          <label
            class="kuc-switch-1-25-0__group__label${this.disabled?` kuc-switch-1-25-0__group__label--disabled`:``}"
            ?hidden="${!this.label}"
            for="${this._GUID}-input"
          >
            <kuc-base-label-1-25-0
              .text="${this.label}"
              .guid="${this._GUID}"
            ></kuc-base-label-1-25-0>
          </label>
          <div class="kuc-switch-1-25-0__group__switch">
            <input
              class="kuc-switch-1-25-0__group__switch__input"
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
              class="kuc-switch-1-25-0__group__switch__track"
              for="${this._GUID}-input"
            >
              <span
                id="${this._GUID}-text-checked"
                class="kuc-switch-1-25-0__group__switch__track__text kuc-switch-1-25-0__group__switch__track__text--checked"
                >${this.checkedText}</span
              >
              <span
                id="${this._GUID}-text-unchecked"
                class="kuc-switch-1-25-0__group__switch__track__text kuc-switch-1-25-0__group__switch__track__text--unchecked"
                >${this.unCheckedText}</span
              >
            </label>
            <label
              class="kuc-switch-1-25-0__group__switch__handle"
              for="${this._GUID}-input"
            ></label>
          </div>
        </div>
      `}_handleChangeInput(e){e.stopPropagation();let t=e.target;this.checked=t.checked;let n={checked:this.checked};Y(this,`change`,n)}_getLabelPlacement(){return this._validLabelPlacement.includes(this.labelPlacement)?this.labelPlacement:`left`}}Vc([H({type:String})],e.prototype,`checkedText`,void 0),Vc([H({type:String,reflect:!0,attribute:`class`})],e.prototype,`className`,void 0),Vc([H({type:String,reflect:!0,attribute:`id`})],e.prototype,`id`,void 0),Vc([H({type:String})],e.prototype,`label`,void 0),Vc([H({type:String})],e.prototype,`labelPlacement`,void 0),Vc([H({type:String})],e.prototype,`unCheckedText`,void 0),Vc([H({type:Boolean})],e.prototype,`checked`,void 0),Vc([H({type:Boolean})],e.prototype,`disabled`,void 0),Vc([H({type:Boolean,attribute:`hidden`,reflect:!0,converter:q})],e.prototype,`visible`,void 0),window.customElements.define(`kuc-switch-1-25-0`,e),X(Bc),Hc=e})();var Uc=`
  kuc-table-1-25-0,
  kuc-table-1-25-0 *,
  kuc-table-1-25-0:lang(en),
  kuc-table-1-25-0:lang(en) * {
    font-family: sans-serif;
  }
  kuc-table-1-25-0:lang(es),
  kuc-table-1-25-0:lang(es) * {
    font-family: sans-serif;
  }
  kuc-table-1-25-0:lang(ja),
  kuc-table-1-25-0:lang(ja) * {
    font-family: "メイリオ", "Hiragino Kaku Gothic ProN", Meiryo,
      sans-serif;
  }
  kuc-table-1-25-0:lang(zh),
  kuc-table-1-25-0:lang(zh) * {
    font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,
      Hei, "Heiti SC", sans-serif;
  }
  kuc-table-1-25-0:lang(zh-TW),
  kuc-table-1-25-0:lang(zh-TW) * {
    font-family: "微軟正黑體","Microsoft JhengHei","新宋体",NSimSun,STHeiti,
      Hei,"Heiti SC",sans-serif;
  }
  kuc-table-1-25-0 {
    font-size: 14px;
    color: #333333;
    display: block;
  }
  kuc-table-1-25-0[hidden] {
    display: none;
  }
  kuc-table-1-25-0 kuc-* {
    line-height: 1;
  }
  .kuc-table-1-25-0__table {
    border-collapse: separate;
    border-spacing: 0;
  }
  .kuc-table-1-25-0__table__header {
    border-width: 0px 1px;
    border-color: var(--kuc-table-header-background-color, #3498db);
    border-style: solid;
    border-right: 0;
  }
  .kuc-table-1-25-0__table__header[hidden] {
    display: none;
  }
  .kuc-table-1-25-0__table__header__cell {
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
  .kuc-table-1-25-0__table__header__cell-title {
    overflow-wrap: break-word;
    display: flex;
    align-items: center;
  }
  .kuc-table-1-25-0__table__header__cell[hidden] {
    display: none;
  }
  .kuc-table-1-25-0__table__header__cell .kuc-base-label-1-25-0__required-icon {
    font-size: var(--kuc-table-header-font-size, 20px);
    align-self: flex-start;
  }
  .kuc-table-1-25-0__table__header__cell__action--right {
    box-shadow: -2px 0 4px 0 rgba(0, 0, 0, 8%);
    position: sticky;
    right: var(--kuc-table-action-button-right, 0px);
  }
  .kuc-table-1-25-0__table__header__cell__action--left {
    box-shadow: 2px 0 4px 0 rgba(0, 0, 0, 8%);
    position: sticky;
    left: var(--kuc-table-action-button-left, 0px);
    z-index: 1;
  }
  .kuc-table-1-25-0__table__body__row__cell-data {
    box-sizing: border-box;
    overflow-wrap: break-word;
    white-space: normal;
    border-color: #e3e7e8;
    border-style: solid;
    border-width: 0 1px 1px;
    padding: 8px 8px;
    vertical-align: top;
  }
  .kuc-table-1-25-0__table__body--no-header>.kuc-table-1-25-0__table__body__row:first-child>.kuc-table-1-25-0__table__body__row__cell-data {
    border-top-width: 1px;
  }
  .kuc-table-1-25-0__table__body__row__cell-data:not(.kuc-table-1-25-0__table__body__row__cell-data[hidden])~.kuc-table-1-25-0__table__body__row__cell-data {
    border-left-width: 0px;
  }
  .kuc-table-1-25-0__table__body__row__cell-data[hidden] {
    display: none;
  }
  .kuc-table-1-25-0__table__body__row__action {
    white-space: nowrap;
    background-color: var(--kuc-table-action-button-background-color, #f5f5f5);
    vertical-align: middle;
    position: sticky;
    border-color: #e3e7e8;
    border-style: solid;
    border-width: 0 0 1px;
  }
  .kuc-table-1-25-0__table__body--no-header>.kuc-table-1-25-0__table__body__row:first-child>.kuc-table-1-25-0__table__body__row__action {
    border-top-width: 1px;
  }
  .kuc-table-1-25-0__table__body__row__action--right {
    box-shadow: -2px 0 4px 0 rgba(0, 0, 0, 8%);
    right: var(--kuc-table-action-button-right, 0px);
    border-right-width: 1px;
  }
  .kuc-table-1-25-0__table__body__row__action--left {
    box-shadow: 2px 0 4px 0 rgba(0, 0, 0, 8%);
    left: var(--kuc-table-action-button-left, 0px);
    border-left-width: 1px;
    z-index: 1;
  }
  .kuc-table-1-25-0__table__body__row__action button {
    display: inline-block;
    align-items: center;
    width: 24px;
    height: 24px;
    background: transparent;
    border: 1px solid transparent;
    padding: 2px;
    cursor: pointer;
  }
  .kuc-table-1-25-0__table__body__row__action button[hidden] {
    display: none;
  }
  .kuc-table-1-25-0__table__body__row__action-add {
    margin-left: 8px;
    margin-right: 8px;
  }
  .kuc-table-1-25-0__table__body__row__action-remove {
    margin-left: 4px;
    margin-right: 8px;
  }
  .kuc-table-1-25-0__table__body__row__action-add:focus,
  .kuc-table-1-25-0__table__body__row__action-remove:focus {
    border: 1px solid #3498db;
    outline: none;
  }
  .kuc-table-1-25-0__table__body__row__action-remove:hover path {
    fill: #e74c3c;
  }
  .kuc-table-1-25-0__table__body__row__action[hidden] {
    display: none;
  }
  .kuc-table-1-25-0__table caption {
    text-align: left;
    margin-bottom: 6px;
    overflow-wrap: anywhere;
    white-space: normal;
  }
  .kuc-table-1-25-0__table .kuc-table-1-25-0__table__label--no-column {
    overflow-wrap: break-word;
  }
`,Wc=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},Gc=`kuc-table-1-25-0__table__body__row__cell-data`,Kc=`kuc-table-1-25-0__table__body__row`,qc=`kuc-table-1-25-0__table__body__row__action`,Jc=`kuc-table-1-25-0__table__body__row__action-add`,Yc=`kuc-table-1-25-0__table__body__row__action-remove`,Xc=e=>`var(--kuc-table-header-${e}-width, var(--kuc-table-header-width, auto))`,Zc=`M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16ZM12.0355 8.49997V7.49997H8.50008V3.96454H7.50008V7.49997H3.96443V8.49997H7.50008V12.0356H8.50008V8.49997H12.0355Z`,Qc=`#3498db`,$c=`M16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8ZM12.0355 7.49997V8.49997L3.96443 8.49997V7.49997H12.0355Z`,el=`#b5b5b5`,tl;(()=>{if(tl=window.customElements.get(`kuc-table-1-25-0`),tl)return;class e extends J{constructor(e){if(super(),this.actionButtonPosition=`right`,this.className=``,this.id=``,this.label=``,this.columns=[],this.data=[],this.actionButton=!0,this.headerVisible=!0,this.visible=!0,this._actionButton={add:!0,remove:!0},this._actionButtonPosition=`right`,!e)return;let t=Q(e);Object.assign(this,t)}shouldUpdate(e){if(e.has(`data`)||e.has(`columns`)){let e=this._getErrorValidateColumnsAndData();if(e)return this.throwErrorAfterUpdateComplete(e),!1}return!0}willUpdate(e){e.has(`actionButtonPosition`)&&(this._actionButtonPosition=this.actionButtonPosition===`left`?`left`:`right`),e.has(`actionButton`)&&(this._actionButton=this._getActionButtonSettings()),this._tBody&&(this._tBody.innerHTML=``)}render(){return!this.columns||this.columns.length<1?B`<table class="kuc-table-1-25-0__table">
            <caption
              class="kuc-table-1-25-0__table__label kuc-table-1-25-0__table__label--no-column"
              ?hidden="${!this.label}"
            >
              ${this.label}
            </caption>
          </table>`:B`
            <table class="kuc-table-1-25-0__table">
              <caption class="kuc-table-1-25-0__table__label" ?hidden="${!this.label}">
                ${this.label}
              </caption>
              <thead
                class="kuc-table-1-25-0__table__header"
                ?hidden="${!this.headerVisible}"
              >
                ${this._getTableHeaderTemplate()}
              </thead>
              <tbody
                class="kuc-table-1-25-0__table__body${this.headerVisible?``:` kuc-table-1-25-0__table__body--no-header`}"
              ></tbody>
            </table>
          `}updated(e){if(this.columns.length!==0)for(let e=0;e<this.data.length;e++)this._addRowToTable(e,this.data[e])}_getTableHeaderTemplate(){return B`
        <tr>
          ${this._actionButtonPosition===`left`?this._getActionButtonHeaderTemplate():``}
          ${this.columns.map((e,t)=>this._getColumnHeaderTemplate(e,t))}
          ${this._actionButtonPosition===`right`?this._getActionButtonHeaderTemplate():``}
        </tr>
      `}_getActionButtonHeaderTemplate(){return!this.data||this.data.length<1||!this._actionButton.add&&!this._actionButton.remove?B``:B`
        <th
          class="kuc-table-1-25-0__table__header__cell kuc-table-1-25-0__table__header__cell__action${this._actionButtonPosition===`left`?`--left`:`--right`}"
        ></th>
      `}_getColumnHeaderTemplate(e,t){let n=Xc(t);return B`
        <th
          class="kuc-table-1-25-0__table__header__cell"
          ?hidden="${e.visible===!1}"
          style="width: ${n}; min-width: ${n}; max-width: ${n}"
        >
          <div class="kuc-table-1-25-0__table__header__cell-title">
            ${e.title&&_s(e.title)?Wo(e.title):e.title}<!--
        --><span
              class="kuc-base-label-1-25-0__required-icon"
              ?hidden="${!e.requiredIcon}"
              >*</span
            >
          </div>
        </th>
      `}_getActionsCellWhenRemoveRow(e){let t=null,n=e;for(;this.data.length>1;){let e=this._table.rows[n];if(!e)n--;else{t=e.cells[this._actionButtonPosition===`left`?0:this.columns.length];break}}return t}_getDefaultDataRow(e){let t={};for(let n in e)if(Object.prototype.hasOwnProperty.call(e,n)){if(Array.isArray(e[n])){t[n]=[];continue}if(typeof e[n]==`object`&&e[n]!==null){t[n]={};continue}t[n]=``}return t}_addRowToTable(e,t){let n=this._tBody.insertRow(e);n.classList.add(Kc),(this._actionButton.add||this._actionButton.remove)&&this._actionButtonPosition===`left`&&this._addActionsCellToNewRow(n);for(let r=0;r<this.columns.length;r++){let i=Xc(r),a=n.insertCell(r+((this._actionButton.add||this._actionButton.remove)&&this._actionButtonPosition===`left`?1:0)),o=this.columns[r];a.classList.add(Gc),a.style.width=i,a.style.maxWidth=i,a.style.minWidth=i,a.addEventListener(`change`,e=>{this._handleChangeCell(e,o.field)}),a.hidden=!(o.visible??!0);let s=o.render?o.render(t[o.field],t,e):t[o.field];s&&s.nodeType?a.appendChild(s):a.innerText=s||``}!this._actionButton.add&&!this._actionButton.remove||this._actionButtonPosition===`left`||this._addActionsCellToNewRow(n)}_handleChangeCell(e,t){e.stopPropagation();let n=this._deepCloneObject(this.data),r=e.currentTarget.parentElement.rowIndex-1,i=this.data[r];if(t in i){let n=e.target.value;`detail`in e&&(n=e.detail.value),i[t]=n}let a={type:`change-cell`,rowIndex:r,data:this._deepCloneObject(this.data),oldData:n,field:t};this._dispatchChangeEvent(a)}_handleAddRow(e){let t=this._deepCloneObject(this.data),n=this._getDefaultDataRow(this.data[0]);this._addRowToTable(e,n),this.data.splice(e,0,n);let r={type:`add-row`,rowIndex:e,data:this._deepCloneObject(this.data),oldData:t};this._dispatchChangeEvent(r),this._toggleRemoveRowButton()}_handleRemoveRow(e){if(this.data.length===1)return;let t=e-1,n=this._deepCloneObject(this.data);this._table.deleteRow(e),this.data.splice(t,1);let r={type:`remove-row`,rowIndex:t,data:this._deepCloneObject(this.data),oldData:n};this._dispatchChangeEvent(r),this._toggleRemoveRowButton(),this._focusActionsButtonWhenRemoveRow(e)}_focusActionsButtonWhenRemoveRow(e){let t=this._getActionsCellWhenRemoveRow(e);if(t){this._focusRemoveRowButton(t);return}this._focusFirstAddRowButton()}_focusRemoveRowButton(e){e.querySelector(`.${Yc}`).focus()}_focusFirstAddRowButton(){this._table.rows[1].cells[this._actionButtonPosition===`left`?0:this.columns.length].querySelector(`.${Jc}`)?.focus()}_toggleRemoveRowButton(){let e=this._actionButtonPosition===`left`?this._tBody.rows[0].firstChild:this._tBody.rows[0].lastChild,t=e.lastChild;if(this.data.length===1){t.style.display=`none`,this._actionButton.add||(e.style.display=`none`,this._hideActionHeaderCell());return}if(this.data.length===2){let n=(this._actionButtonPosition===`left`?this._tBody.rows[1].firstChild:this._tBody.rows[1].lastChild).lastChild;t.style.display=n.style.display=`inline-block`,e.style.removeProperty(`display`)}}_getSvgDOM(e,t){let n=document.createElementNS(`http://www.w3.org/2000/svg`,`svg`);n.setAttribute(`fill`,`none`),n.setAttribute(`width`,`18`),n.setAttribute(`height`,`18`),n.setAttribute(`viewBox`,`0 0 16 16`),n.setAttribute(`aria-hidden`,`true`);let r=document.createElementNS(`http://www.w3.org/2000/svg`,`path`);return r.setAttribute(`d`,t),r.setAttribute(`fill-rule`,`evenodd`),r.setAttribute(`clip-rule`,`evenodd`),r.setAttribute(`fill`,e),n.appendChild(r),n}_addActionsCellToNewRow(e){if(!this._actionButton.add&&!this._actionButton.remove)return;let t=e.insertCell(this._actionButtonPosition===`left`?0:this.columns.length);if(t.classList.add(qc),this._actionButtonPosition===`left`?t.classList.add(`kuc-table-1-25-0__table__body__row__action--left`):t.classList.add(`kuc-table-1-25-0__table__body__row__action--right`),this._actionButton.add){let n=this._getActionButtonDOM(`add`,e);t.appendChild(n)}if(this._actionButton.remove){let n=this._getActionButtonDOM(`remove`,e);t.appendChild(n),this.data.length===1&&(n.style.display=`none`)}!this._actionButton.add&&this.data.length===1?(this._hideActionHeaderCell(),t.style.display=`none`):(this._showActionHeaderCell(),t.style.removeProperty(`display`))}_getActionButtonDOM(e,t){let n=Yc,r=`Delete this row`,i=e===`add`;i&&(n=Jc,r=`Add row`);let a=i?Qc:el,o=i?Zc:$c,s=this._getSvgDOM(a,o),c=document.createElement(`button`);return c.classList.add(n),c.setAttribute(`title`,r),c.type=`button`,c.appendChild(s),c.addEventListener(`click`,()=>{let e=this._getErrorValidateColumnsAndData();if(e){this.throwErrorAfterUpdateComplete(e);return}if(i){this._handleAddRow(t.rowIndex);return}this._handleRemoveRow(t.rowIndex)}),c}_getActionButtonSettings(){let e={add:!0,remove:!0};return this.actionButton?(typeof this.actionButton==`object`&&(e.add=Object.prototype.hasOwnProperty.call(this.actionButton,`add`)?!!this.actionButton.add:!0,e.remove=Object.prototype.hasOwnProperty.call(this.actionButton,`remove`)?!!this.actionButton.remove:!0),e):(e.add=e.remove=!1,e)}_getErrorValidateColumnsAndData(){return this._getErrorMessageWhenValidateColumns()||($(this.data)?``:G.DATA.IS_NOT_ARRAY)}_getErrorMessageWhenValidateColumns(){return $(this.columns)?ps(this.columns)?ms(this.columns)?G.COLUMNS.FIELD_UNIQUE:``:G.COLUMNS.FIELD_REQUIRED:G.COLUMNS.IS_NOT_ARRAY}_deepCloneObject(e){return JSON.parse(JSON.stringify(e))}_dispatchChangeEvent(e){let t=e;Y(this,`change`,t)}_hideActionHeaderCell(){this._actionHeaderCellRight&&(this._actionHeaderCellRight.hidden=!0),this._actionHeaderCellLeft&&(this._actionHeaderCellLeft.hidden=!0)}_showActionHeaderCell(){this._actionHeaderCellRight&&(this._actionHeaderCellRight.hidden=!1),this._actionHeaderCellLeft&&(this._actionHeaderCellLeft.hidden=!1)}}Wc([H({type:String})],e.prototype,`actionButtonPosition`,void 0),Wc([H({type:String,reflect:!0,attribute:`class`})],e.prototype,`className`,void 0),Wc([H({type:String,reflect:!0,attribute:`id`})],e.prototype,`id`,void 0),Wc([H({type:String})],e.prototype,`label`,void 0),Wc([H({type:Array})],e.prototype,`columns`,void 0),Wc([H({type:Array})],e.prototype,`data`,void 0),Wc([H()],e.prototype,`actionButton`,void 0),Wc([H({type:Boolean})],e.prototype,`headerVisible`,void 0),Wc([H({type:Boolean,attribute:`hidden`,reflect:!0,converter:q})],e.prototype,`visible`,void 0),Wc([W(`.kuc-table-1-25-0__table`)],e.prototype,`_table`,void 0),Wc([W(`.kuc-table-1-25-0__table__body`)],e.prototype,`_tBody`,void 0),Wc([W(`.kuc-table-1-25-0__table__header__cell__action--right`)],e.prototype,`_actionHeaderCellRight`,void 0),Wc([W(`.kuc-table-1-25-0__table__header__cell__action--left`)],e.prototype,`_actionHeaderCellLeft`,void 0),window.customElements.define(`kuc-table-1-25-0`,e),X(Uc),tl=e})();var nl=`
  kuc-tabs-1-25-0,
  kuc-tabs-1-25-0 *,
  kuc-tabs-1-25-0:lang(en),
  kuc-tabs-1-25-0:lang(en) * {
    font-family: sans-serif;
  }
  kuc-tabs-1-25-0:lang(es),
  kuc-tabs-1-25-0:lang(es) * {
    font-family: sans-serif;
  }
  kuc-tabs-1-25-0:lang(ja),
  kuc-tabs-1-25-0:lang(ja) * {
    font-family: "メイリオ", "Hiragino Kaku Gothic ProN", Meiryo,
      sans-serif;
  }
  kuc-tabs-1-25-0:lang(zh),
  kuc-tabs-1-25-0:lang(zh) * {
    font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,
      Hei, "Heiti SC", sans-serif;
  }
  kuc-tabs-1-25-0:lang(zh-TW),
  kuc-tabs-1-25-0:lang(zh-TW) * {
    font-family: "微軟正黑體","Microsoft JhengHei","新宋体",NSimSun,STHeiti,
      Hei,"Heiti SC",sans-serif;
  }
  kuc-tabs-1-25-0 {
    display: inline-block;
  }
  kuc-tabs-1-25-0[hidden] {
    display: none;
  }
  .kuc-tabs-1-25-0__group__tabs-container {
    display: flex;
    padding: 0;
    align-items: center;
    padding-top: 16px;
  }
  .kuc-tabs-1-25-0__group__tabs-container__tab-pre-button {
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
  .kuc-tabs-1-25-0__group__tabs-container__tab-pre-button[hidden] {
    visibility: hidden;
  }
  .kuc-tabs-1-25-0__group__tabs-container__tab-pre-button[disabled] {
    cursor: not-allowed;
  }
  .kuc-tabs-1-25-0__group__tabs-container__tab-next-button {
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
  .kuc-tabs-1-25-0__group__tabs-container__tab-next-button[hidden] {
    visibility: hidden;
  }
  .kuc-tabs-1-25-0__group__tabs-container__tab-next-button[disabled] {
    cursor: not-allowed;
  }
  .kuc-tabs-1-25-0__group__tabs-container__tab-list-container {
    display: flex;
    flex-direction: row;
    padding: 0;
    overflow-y: hidden;
  }
  .kuc-tabs-1-25-0__group__tabs-container__tab-list-container__tab-list {
    display: flex;
    flex: 1;
    margin: 0;
    padding: 0px;
    list-style: none;
  }
  .kuc-tabs-1-25-0__group__tabs-container__tab-list-container {
    scrollbar-width: none; /* Firefox */
  }
  .kuc-tabs-1-25-0__group__tabs-container__tab-list-container::-webkit-scrollbar {
    width: 0; /* Safari and Chrome */
    display: none
  }
  .kuc-tabs-1-25-0__group__tabs-container__tab-list-container__tab-list__tab {
    min-height: var(--kuc-tabs-tab-height, 48px);
    height: var(--kuc-tabs-tab-height, 48px);
    white-space: normal;
  }
  .kuc-tabs-1-25-0__group__tabs-container__tab-list-container__tab-list__tab__button:disabled {
    color: GrayText;
    background-color: #d4d7d7;
    cursor: not-allowed;
  }
  .kuc-tabs-1-25-0__group__tabs-container__tab-list-container__tab-list__tab__button {
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
  .kuc-tabs-1-25-0__group__tabs-container__tab-list-container__tab-list__tab__button[hidden] {
    display: none;
  }
  .kuc-tabs-1-25-0__group__tabs-container__tab-list-container__tab-list__tab__button:last-of-type {
    border-right: 1px solid #c7cbcb;
  }

  .kuc-tabs-1-25-0__group__tabs-container__tab-list-container__tab-list__tab__button:focus {
    outline: none;
    border: 1px solid #3498db;
  }
  .kuc-tabs-1-25-0__group__tabs-container__tab-list-container__tab-list__tab__button--click:focus{
    border: none;
    border-top: 1px solid #c7cbcb;
    border-left: 1px solid #c7cbcb;
    border-right: 1px solid #c7cbcb;
  }
  .kuc-tabs-1-25-0__group__tabs-container__tab-list-container__tab-list__tab__button[aria-selected="true"] {
    background-color: var(--kuc-tabs-tab-background-color-selected, #ffffff);
    color: var(--kuc-tabs-tab-color-selected, #333333);
    box-shadow: none;
  }
  .kuc-tabs-1-25-0__group__tab-panel {
    display:block;
    padding: 0;
    border-top: 0;
  }
  .kuc-tabs-1-25-0__group__tab-panel[border-visible] {
    box-shadow: 0 0 8px 2px rgb(0 0 0 / 10%);
  }
  .kuc-tabs-1-25-0__group__tab-panel__content[hidden]{
    display:none;
  }
`,rl=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},il;(()=>{if(il=window.customElements.get(`kuc-tabs-1-25-0`),il)return;class e extends J{constructor(e){super(),this.className=``,this.id=``,this.value=``,this.borderVisible=!0,this.scrollButtons=!1,this.visible=!0,this.items=[],this._selectedValue=``,this._resizeObserver=null,this._isClick=!1,this._isAtStart=!0,this._isAtEnd=!1,this._GUID=Z();let t=Q(e);Object.assign(this,t),this._handleResize=this._handleResize.bind(this)}shouldUpdate(e){if(e.has(`items`)){if(!$(this.items))return this.throwErrorAfterUpdateComplete(G.ITEMS.IS_NOT_ARRAY),!1;for(let e=0;e<this.items.length;e++)if(this.items[e].value===void 0)return this.throwErrorAfterUpdateComplete(G.ITEMS.IS_NOT_SPECIFIED),!1;if(!ds(this.items.map(e=>e.value)))return this.throwErrorAfterUpdateComplete(G.ITEMS.IS_DUPLICATED),!1}return e.has(`value`)&&!ls(this.value)?(this.throwErrorAfterUpdateComplete(G.VALUE.IS_NOT_STRING),!1):!0}willUpdate(e){let t=this._getMatchedTabIndex();t===-1&&(t=this._getFirstVisibleTabIndex()),t>-1&&(this._selectedValue=this.items[t].value)}render(){return B`
        <div class="kuc-tabs-1-25-0__group">
          <div class="kuc-tabs-1-25-0__group__tabs-container">
            <button
              class="kuc-tabs-1-25-0__group__tabs-container__tab-pre-button"
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
              class="kuc-tabs-1-25-0__group__tabs-container__tab-list-container"
              @scroll="${this._handleScroll}"
            >
              <ul
                class="kuc-tabs-1-25-0__group__tabs-container__tab-list-container__tab-list"
                role="tablist"
                @blur="${this._handleBlur}"
              >
                ${this.items.map((e,t)=>this._getTabTemplate(e,t))}
              </ul>
            </div>
            <button
              class="kuc-tabs-1-25-0__group__tabs-container__tab-next-button"
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
            class="kuc-tabs-1-25-0__group__tab-panel"
            ?border-visible="${this.borderVisible}"
          >
            ${this.items.map((e,t)=>this._getTabContentTemplate(e,t))}
          </div>
        </div>
      `}firstUpdated(){window.addEventListener(`resize`,this._handleResize),this._resizeObserver=new ResizeObserver(()=>{this.scrollButtons&&this._updatePreNextButtonState()}),this._resizeObserver.observe(this._tabListContainer),this._setScrollStyles(),this._scrollToSelectedTab(!0)}updated(e){e.has(`scrollButtons`)&&this._setScrollStyles(),this.scrollButtons&&this._updatePreNextButtonState()}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener(`resize`,this._handleResize),this._resizeObserver&&=(this._resizeObserver.disconnect(),null)}_getTabTemplate(e,t){let n=e.value===this._selectedValue;return B`<li
        role="presentation"
        class="kuc-tabs-1-25-0__group__tabs-container__tab-list-container__tab-list__tab"
      >
        <button
          role="tab"
          type="button"
          ?hidden="${e.visible===!1}"
          aria-selected="${n}"
          tabindex="${n&&!e.disabled?`0`:`-1`}"
          class="kuc-tabs-1-25-0__group__tabs-container__tab-list-container__tab-list__tab__button ${this._isClick?`kuc-tabs-1-25-0__group__tabs-container__tab-list-container__tab-list__tab__button--click`:``}"
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
      </li>`}_getTabContentTemplate(e,t){let n=e.value===this._selectedValue;return B`<div
        class="kuc-tabs-1-25-0__group__tab-panel__content"
        role="tabpanel"
        id="${this._GUID}-tabpanel-${t}"
        aria-labelledby="${this._GUID}-button-${t}"
        ?hidden="${!n||e.visible===!1}"
        @change="${this._handleChangeEvent}"
      >
        ${e.content&&_s(e.content)?Wo(e.content):e.content}
      </div>`}_getPrevButtonSvgTemplate(){return V`
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
      `}_getNextButtonSvgTemplate(){return V`
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
      `}_getVisibleTab(e,t){let n=Array.from(this._tabButtons),r=n.indexOf(t),i=e===`next`?1:-1,a=e===`next`?n.length:-1;for(let e=r+i;e!==a;e+=i)if(!n[e].hidden)return n[e];return null}_handleTabScroll(e){let t=this._findVisibleTab(e);if(!t)return;let n=this._isTabPartiallyVisible(t,e)?t:this._getVisibleTab(e,t);n&&this._scrollTab(n,{direction:e,mode:`edge`}),this._updatePreNextButtonState()}_findVisibleTab(e){let t=this._tabListContainer.getBoundingClientRect(),n=Array.from(this._tabButtons),r=e=>{let n=e.getBoundingClientRect();return!(n.right<=t.left||n.left>=t.right)};return e===`next`?n.reverse().find(r):n.find(r)}_isTabPartiallyVisible(e,t){let n=this._tabListContainer.getBoundingClientRect(),r=e.getBoundingClientRect();return t===`next`?r.right>n.right+2:r.left<n.left-2}_calculateScrollPosition(e,t){let{direction:n,mode:r}=t,i=this._tabListContainer.getBoundingClientRect(),a=e.getBoundingClientRect(),o=this._tabListContainer.scrollLeft;return r===`edge`&&n?o+=n===`next`?a.right-i.right:a.left-i.left:a.width>i.width&&n?o+=n===`next`?a.left-i.left:a.right-i.right:a.left<i.left?o+=a.left-i.left:a.right>i.right&&(o+=a.right-i.right),Math.max(0,Math.min(o,this._tabListContainer.scrollWidth-this._tabListContainer.clientWidth))}_scrollTab(e,t){let n=this._calculateScrollPosition(e,t);this._tabListContainer.scrollTo({left:n,behavior:t.immediate?`auto`:`smooth`})}_handleMouseDownPrevButton(e){e.preventDefault(),this._handleTabScroll(`prev`)}_handleMouseDownNextButton(e){e.preventDefault(),this._handleTabScroll(`next`)}_handleResize(){this.scrollButtons&&this._updatePreNextButtonState()}_handleScroll(){this._updatePreNextButtonState()}_isScrollToLeft(){return this._tabListContainer.scrollLeft===0}_isScrollToRight(){let{scrollWidth:e,scrollLeft:t,clientWidth:n}=this._tabListContainer;return Math.abs(e-t-n)<2}_setScrollStyles(){var e;(e=this._tabGroup.parentElement)==null||e.style.setProperty(`max-width`,this.scrollButtons?`100%`:``),this._tabListContainer.style.setProperty(`overflow-x`,this.scrollButtons?`auto`:`visible`)}_updatePreNextButtonState(){let e=this._isScrollToLeft(),t=this._isScrollToRight();e!==this._isAtStart&&(this._isAtStart=e),t!==this._isAtEnd&&(this._isAtEnd=t)}_handleMouseDown(e){this._isClick=!0}_handleClickTab(e){let t=e.target;t.blur();let n=this._getCurrentTabIndex(t.getAttribute(`value`));if(this._tabButtons[n].focus(),this.value===t.value)return;let r=this._generateEventDetail(t.value);Y(this,`change`,r)}_handleChangeEvent(e){e.stopPropagation()}_handleBlur(e){this._isClick=!1}_handleKeyDownTab(e){this._isClick=!1;let t=!1;switch(e.key){case`Left`:case`ArrowLeft`:t=!0,this._moveToAdjacentTab(e.target,`prev`);break;case`Right`:case`ArrowRight`:t=!0,this._moveToAdjacentTab(e.target,`next`);break;case`Home`:t=!0,this._moveToLastFirstTab(e.target,`first`);break;case`End`:t=!0,this._moveToLastFirstTab(e.target,`last`);break}t&&(e.stopPropagation(),e.preventDefault())}_getCurrentTabIndex(e){let t=-1;for(let n=0;n<this.items.length;n++)if(this.items[n].value===e){t=n;break}return t===-1&&(t=this._getFirstVisibleTabIndex()),t}_getFirstVisibleTabIndex(){return this.items.findIndex(e=>e.visible!==!1)}_getMatchedTabIndex(){return this.items.findIndex(e=>e.visible!==!1&&e.value===this.value)}_moveToLastFirstTab(e,t){let n=this._getCurrentTabIndex(e.getAttribute(`value`)),r=t===`last`?-1:1,i=t===`last`?this.items.length-1:0;for(;i!==n;){if(this.items[i].visible!==!1&&this.items[i].disabled!==!0){e.blur(),Y(this,`change`,this._generateEventDetail(this._tabButtons[i].getAttribute(`value`))),this._tabButtons[this._getCurrentTabIndex(this.value)].focus(),this._scrollTab(this._tabButtons[this._getCurrentTabIndex(this.value)],{mode:`visible`});break}i+=r}}_moveToAdjacentTab(e,t){let n=this._getCurrentTabIndex(e.getAttribute(`value`)),r=t===`next`?1:-1,i=n+r;for(;i!==n&&(i===this.items.length?i=0:i===-1&&(i=this.items.length-1),i!==n);){if(this.items[i].visible!==!1&&this.items[i].disabled!==!0){e.blur(),Y(this,`change`,this._generateEventDetail(this._tabButtons[i].getAttribute(`value`))),this._tabButtons[this._getCurrentTabIndex(this.value)].focus(),this._scrollTab(this._tabButtons[this._getCurrentTabIndex(this.value)],{mode:`visible`,direction:t});break}i+=r}}_scrollToSelectedTab(e=!1){if(!this.value||!this._tabButtons.length)return;let t=this._getCurrentTabIndex(this.value);if(t===-1)return;let n=this._tabButtons[t];n&&(n.hidden||(this._scrollTab(n,{mode:`visible`,immediate:e}),this._updatePreNextButtonState()))}_generateEventDetail(e){let t=this.value;return this.value=e,{oldValue:t,value:e}}}rl([H({type:String,reflect:!0,attribute:`class`})],e.prototype,`className`,void 0),rl([H({type:String,reflect:!0,attribute:`id`})],e.prototype,`id`,void 0),rl([H({type:String})],e.prototype,`value`,void 0),rl([H({type:Boolean})],e.prototype,`borderVisible`,void 0),rl([H({type:Boolean})],e.prototype,`scrollButtons`,void 0),rl([H({type:Boolean,attribute:`hidden`,reflect:!0,converter:q})],e.prototype,`visible`,void 0),rl([H({type:Array})],e.prototype,`items`,void 0),rl([Ra(`.kuc-tabs-1-25-0__group__tabs-container__tab-list-container__tab-list__tab__button`)],e.prototype,`_tabButtons`,void 0),rl([W(`.kuc-tabs-1-25-0__group__tabs-container__tab-list-container`)],e.prototype,`_tabListContainer`,void 0),rl([W(`.kuc-tabs-1-25-0__group`)],e.prototype,`_tabGroup`,void 0),rl([U()],e.prototype,`_isClick`,void 0),rl([U()],e.prototype,`_isAtStart`,void 0),rl([U()],e.prototype,`_isAtEnd`,void 0),window.customElements.define(`kuc-tabs-1-25-0`,e),X(nl),il=e})();var al=`
kuc-text-1-25-0,
kuc-text-1-25-0 *,
kuc-text-1-25-0:lang(en),
kuc-text-1-25-0:lang(en) * {
  font-family: sans-serif;
}
kuc-text-1-25-0:lang(es),
kuc-text-1-25-0:lang(es) * {
  font-family: sans-serif;
}
kuc-text-1-25-0:lang(ja),
kuc-text-1-25-0:lang(ja) * {
  font-family: "メイリオ", "Hiragino Kaku Gothic ProN", Meiryo,
    sans-serif;
}
kuc-text-1-25-0:lang(zh),
kuc-text-1-25-0:lang(zh) * {
  font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,
    Hei, "Heiti SC", sans-serif;
}
kuc-text-1-25-0:lang(zh-TW),
kuc-text-1-25-0:lang(zh-TW) * {
  font-family: "微軟正黑體","Microsoft JhengHei","新宋体",NSimSun,STHeiti,
    Hei,"Heiti SC",sans-serif;
}
kuc-text-1-25-0 {
  font-size: 14px;
  color: #333333;
  display: inline-table;
  vertical-align: top;
  min-width: var(--kuc-text-input-width, 177px);
  width: var(--kuc-text-input-width, 177px);
  line-height: 1.5;
}
kuc-text-1-25-0[hidden] {
  display: none;
}
.kuc-text-1-25-0__group {
  border: none;
  padding: 0px;
  height: auto;
  display: inline-block;
  vertical-align: top;
  width: 100%;
  margin: 0px;
}
.kuc-text-1-25-0__group__label {
  display: inline-block;
  padding: 4px 0px 8px 0px;
  white-space: nowrap;
}
.kuc-text-1-25-0__group__label[hidden] {
  display: none;
}
.kuc-text-1-25-0__group__input-form {
  display: flex;
  align-items: center;
  width: 100%;
}
.kuc-text-1-25-0__group__input-form__prefix-outer__prefix {
  padding-right: 4px;
  white-space: nowrap;
}
.kuc-text-1-25-0__group__input-form__input-outer {
  display: flex;
  min-width: var(--kuc-text-input-width, 26px);
  width: var(--kuc-text-input-width, 100%);
}
input[type="text"].kuc-text-1-25-0__group__input-form__input-outer__input {
  width: var(--kuc-text-input-width, 100%);
  height: var(--kuc-text-input-height, 40px);
  font-size: var(--kuc-text-input-font-size, 14px);
  color: var(--kuc-text-input-color, #000000);
  padding: 0 8px;
  border: 1px solid #e3e7e8;
  box-sizing: border-box;
  box-shadow: 2px 2px 4px #f5f5f5 inset, -2px -2px 4px #f5f5f5 inset;
}
.kuc-text-1-25-0__group__input-form__input-outer__input[textAlign="left"] {
  text-align: left;
}
.kuc-text-1-25-0__group__input-form__input-outer__input[textAlign="right"] {
  text-align: right;
}
input[type=text].kuc-text-1-25-0__group__input-form__input-outer__input:focus {
  outline: none;
  border: 1px solid #3498db;
}
input[type=text].kuc-text-1-25-0__group__input-form__input-outer__input:disabled {
  color: #888888;
  background-color: #d4d7d7;
  box-shadow: none;
  cursor: not-allowed;
}
.kuc-text-1-25-0__group__input-form__suffix-outer__suffix {
  padding-left: 4px;
  white-space: nowrap;
}
`,ol=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},sl;(()=>{if(sl=window.customElements.get(`kuc-text-1-25-0`),sl)return;class e extends J{constructor(e){super(),this.className=``,this.error=``,this.id=``,this.label=``,this.placeholder=``,this.prefix=``,this.suffix=``,this.textAlign=`left`,this.value=``,this.disabled=!1,this.requiredIcon=!1,this.visible=!0,this._GUID=Z();let t=Q(e);Object.assign(this,t)}_handleFocusInput(e){let t={value:this.value};Y(this,`focus`,t)}_handleChangeInput(e){e.stopPropagation();let t=e.target,n={value:``,oldValue:this.value};this.value=t.value,n.value=this.value,Y(this,`change`,n)}_handleInputText(e){e.stopPropagation();let t={value:e.target.value,data:e.data};Y(this,`input`,t)}render(){return B`
        <div class="kuc-text-1-25-0__group">
          <label
            class="kuc-text-1-25-0__group__label"
            for="${this._GUID}-label"
            ?hidden="${!this.label}"
          >
            <kuc-base-label-1-25-0
              .text="${this.label}"
              .requiredIcon="${this.requiredIcon}"
            ></kuc-base-label-1-25-0>
          </label>
          <div class="kuc-text-1-25-0__group__input-form">
            <div class="kuc-text-1-25-0__group__input-form__prefix-outer">
              <span
                class="kuc-text-1-25-0__group__input-form__prefix-outer__prefix"
                ?hidden="${!this.prefix}"
                >${this.prefix}</span
              >
            </div>
            <div class="kuc-text-1-25-0__group__input-form__input-outer">
              <input
                class="kuc-text-1-25-0__group__input-form__input-outer__input"
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
            <div class="kuc-text-1-25-0__group__input-form__suffix-outer">
              <span
                class="kuc-text-1-25-0__group__input-form__suffix-outer__suffix"
                ?hidden="${!this.suffix}"
                >${this.suffix}</span
              >
            </div>
          </div>
          <kuc-base-error-1-25-0
            .text="${this.error}"
            .guid="${this._GUID}"
            ?hidden="${!this.error}"
          ></kuc-base-error-1-25-0>
        </div>
      `}}ol([H({type:String,reflect:!0,attribute:`class`})],e.prototype,`className`,void 0),ol([H({type:String})],e.prototype,`error`,void 0),ol([H({type:String,reflect:!0,attribute:`id`})],e.prototype,`id`,void 0),ol([H({type:String})],e.prototype,`label`,void 0),ol([H({type:String})],e.prototype,`placeholder`,void 0),ol([H({type:String})],e.prototype,`prefix`,void 0),ol([H({type:String})],e.prototype,`suffix`,void 0),ol([H({type:String})],e.prototype,`textAlign`,void 0),ol([H({type:String})],e.prototype,`value`,void 0),ol([H({type:Boolean})],e.prototype,`disabled`,void 0),ol([H({type:Boolean})],e.prototype,`requiredIcon`,void 0),ol([H({type:Boolean,attribute:`hidden`,reflect:!0,converter:q})],e.prototype,`visible`,void 0),window.customElements.define(`kuc-text-1-25-0`,e),X(al),sl=e})();var cl=sl,ll=`
  kuc-textarea-1-25-0,
  kuc-textarea-1-25-0 *,
  kuc-textarea-1-25-0:lang(en),
  kuc-textarea-1-25-0:lang(en) * {
    font-family: sans-serif;
  }
  kuc-textarea-1-25-0:lang(es),
  kuc-textarea-1-25-0:lang(es) * {
    font-family: sans-serif;
  }
  kuc-textarea-1-25-0:lang(ja),
  kuc-textarea-1-25-0:lang(ja) * {
    font-family: "メイリオ", "Hiragino Kaku Gothic ProN", Meiryo,
      sans-serif;
  }
  kuc-textarea-1-25-0:lang(zh),
  kuc-textarea-1-25-0:lang(zh) * {
    font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,
      Hei, "Heiti SC", sans-serif;
  }
  kuc-textarea-1-25-0:lang(zh-TW),
  kuc-textarea-1-25-0:lang(zh-TW) * {
    font-family: "微軟正黑體","Microsoft JhengHei","新宋体",NSimSun,STHeiti,
      Hei,"Heiti SC",sans-serif;
  }
  kuc-textarea-1-25-0 {
    font-size: 14px;
    color: var(--kuc-textarea-input-color, #333333);
    display: inline-table;
    vertical-align: top;
    width: var(--kuc-textarea-input-width, 299px);
    height: var(--kuc-textarea-input-height, 125px);
    line-height: 1.5;
  }
  kuc-textarea-1-25-0[hidden] {
    display: none;
  }
  .kuc-textarea-1-25-0__group {
    border: none;
    padding: 0px;
    height: auto;
    display: inline-block;
    vertical-align: top;
    width: 100%;
    margin: 0px;
    white-space: normal;
  }
  .kuc-textarea-1-25-0__group__label {
    white-space: nowrap;
    display: inline-block;
    padding: 4px 0px 8px 0px;
  }
  .kuc-textarea-1-25-0__group__label[hidden] {
    display: none;
  }
  .kuc-textarea-1-25-0__group__container {
    position: relative;
    display: inline-table;
    width: var(--kuc-textarea-input-width, 100%);
    min-width: var(--kuc-textarea-input-width, 100%);
  }
  textarea.kuc-textarea-1-25-0__group__textarea {
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
  .kuc-textarea-1-25-0__group__textarea:focus {
    outline: none;
    border-color: #3498db;
    box-shadow: 2px 2px 4px #f5f5f5 inset, -2px -2px 4px #f5f5f5 inset;
    border: 1px solid #3498db;
    background-color: #ffffff;
    color: var(--kuc-textarea-input-color, #333333);
  }
  .kuc-textarea-1-25-0__group__textarea:disabled {
    color: #888888;
    background-color: #d4d7d7;
    box-shadow: none;
    cursor: not-allowed;
    resize: none;
  }
  .kuc-textarea-1-25-0__group__resizer {
    position: absolute;
    width: 16px;
    height: 16px;
    cursor: se-resize;
    float: right;
    margin: -16px 0px;
    right: 0px;
  }
`,ul=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},dl;(()=>{if(dl=window.customElements.get(`kuc-textarea-1-25-0`),dl)return;let e={MIN_WIDTH:16,MIN_HEIGHT:16};class t extends J{constructor(e){super(),this.className=``,this.error=``,this.id=``,this.label=``,this.placeholder=``,this.value=``,this.disabled=!1,this.requiredIcon=!1,this.visible=!0,this._onResize=!1,this._GUID=Z();let t=Q(e);Object.assign(this,t)}_handleFocusTextarea(e){let t={value:this.value};Y(this,`focus`,t)}_handleChangeTextarea(e){e.stopPropagation();let t=e.target,n={value:``,oldValue:this.value};this.value=t.value,n.value=this.value,Y(this,`change`,n)}_handleInputTextArea(e){e.stopPropagation();let t={value:e.target.value,data:e.data};Y(this,`input`,t)}_handleMouseDownResize(){this._onResize=!0}_handleMouseUpDocument(){this._onResize=!1}_handleMouseMoveDocument(t){if(!this._onResize)return;let n=this._textarea.getBoundingClientRect(),r=t.clientX-n.left,i=t.clientY-n.top;r<e.MIN_WIDTH&&(r=e.MIN_WIDTH),i<e.MIN_HEIGHT&&(i=e.MIN_HEIGHT),this._container.style.width=r+`px`,this._textarea.style.height=i+`px`}_getResizerButtonSvgTemplate(){return V`
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
      `}firstUpdated(){document.addEventListener(`mousemove`,e=>this._handleMouseMoveDocument(e)),document.addEventListener(`mouseup`,e=>this._handleMouseUpDocument())}render(){return B`
        <div class="kuc-textarea-1-25-0__group">
          <label
            class="kuc-textarea-1-25-0__group__label"
            ?hidden="${!this.label}"
            for="${this._GUID}-label"
          >
            <kuc-base-label-1-25-0
              .text="${this.label}"
              .requiredIcon="${this.requiredIcon}"
            ></kuc-base-label-1-25-0>
          </label>
          <div class="kuc-textarea-1-25-0__group__container">
            <textarea
              id="${this._GUID}-label"
              class="kuc-textarea-1-25-0__group__textarea"
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
              class="kuc-textarea-1-25-0__group__resizer"
              @mousedown="${this._handleMouseDownResize}"
              ?hidden="${this.disabled}"
            >
              ${this._getResizerButtonSvgTemplate()}
            </div>
          </div>
          <kuc-base-error-1-25-0
            .text="${this.error}"
            .guid="${this._GUID}"
            ?hidden="${!this.error}"
          ></kuc-base-error-1-25-0>
        </div>
      `}}ul([H({type:String,reflect:!0,attribute:`class`})],t.prototype,`className`,void 0),ul([H({type:String})],t.prototype,`error`,void 0),ul([H({type:String,reflect:!0,attribute:`id`})],t.prototype,`id`,void 0),ul([H({type:String})],t.prototype,`label`,void 0),ul([H({type:String})],t.prototype,`placeholder`,void 0),ul([H({type:String})],t.prototype,`value`,void 0),ul([H({type:Boolean})],t.prototype,`disabled`,void 0),ul([H({type:Boolean})],t.prototype,`requiredIcon`,void 0),ul([H({type:Boolean,attribute:`hidden`,reflect:!0,converter:q})],t.prototype,`visible`,void 0),ul([W(`.kuc-textarea-1-25-0__group__container`)],t.prototype,`_container`,void 0),ul([W(`.kuc-textarea-1-25-0__group__textarea`)],t.prototype,`_textarea`,void 0),window.customElements.define(`kuc-textarea-1-25-0`,t),X(ll),dl=t})();var fl=`
kuc-time-picker-1-25-0,
kuc-time-picker-1-25-0 *,
kuc-time-picker-1-25-0:lang(en),
kuc-time-picker-1-25-0:lang(en) * {
  font-family: sans-serif;
}
kuc-time-picker-1-25-0:lang(ja),
kuc-time-picker-1-25-0:lang(ja) * {
  font-family: "メイリオ", "Hiragino Kaku Gothic ProN", Meiryo,
    sans-serif;
}
kuc-time-picker-1-25-0:lang(zh),
kuc-time-picker-1-25-0:lang(zh) * {
  font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,
    Hei, "Heiti SC", sans-serif;
}
kuc-time-picker-1-25-0:lang(zh-TW),
kuc-time-picker-1-25-0:lang(zh-TW) * {
  font-family: "微軟正黑體","Microsoft JhengHei","新宋体",NSimSun,STHeiti,
    Hei,"Heiti SC"
}
kuc-time-picker-1-25-0:lang(es),
kuc-time-picker-1-25-0:lang(es) * {
  font-family: sans-serif;
}
kuc-time-picker-1-25-0 {
  font-size: 14px;
  color: var(--kuc-time-picker-input-color, #333333);
  display: inline-table;
  max-width: var(--kuc-time-picker-input-width, 85px);
  width: var(--kuc-time-picker-input-width, 85px);
  vertical-align: top;
  line-height: 1.5;
}
.kuc-time-picker-1-25-0__group__input {
  position: relative;
}
kuc-time-picker-1-25-0[hidden] {
  display: none;
}
.kuc-time-picker-1-25-0__group {
  display: flex;
  flex-direction: column;
  border: none;
  padding: 0px;
  height: auto;
  margin: 0px;
}

.kuc-time-picker-1-25-0__group kuc-base-time-1-25-0 {
  display: inline-flex;
  flex-direction: column;
}

.kuc-time-picker-1-25-0__group .kuc-base-time-1-25-0__group {
  max-width: var(--kuc-time-picker-input-width, 85px);
  width: var(--kuc-time-picker-input-width, 85px);
  font-size: var(--kuc-time-picker-input-font-size, 14px);
  height: var(--kuc-time-picker-input-height, 40px);
  color: var(--kuc-time-picker-input-color, #333333);
}
.kuc-time-picker-1-25-0__group .kuc-base-time-1-25-0__group input[type=text].kuc-base-time-1-25-0__group__hours,
.kuc-time-picker-1-25-0__group .kuc-base-time-1-25-0__group input[type=text].kuc-base-time-1-25-0__group__minutes,
.kuc-time-picker-1-25-0__group .kuc-base-time-1-25-0__group input.kuc-base-time-1-25-0__group__suffix,
.kuc-time-picker-1-25-0__group .kuc-base-time-1-25-0__group--focus {
  color: var(--kuc-time-picker-input-color, #333333);
}
.kuc-time-picker-1-25-0__group__label {
  padding: 4px 0px 8px 0px;
  display: inline-block;
  white-space: nowrap;
}
.kuc-time-picker-1-25-0__group__label[hidden] {
  display: none;
}
`,pl=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},ml;(()=>{if(ml=window.customElements.get(`kuc-time-picker-1-25-0`),ml)return;class e extends J{constructor(e){super(),this.className=``,this.error=``,this.id=``,this.label=``,this.language=`auto`,this.max=``,this.min=``,this.value=``,this.disabled=!1,this.hour12=!1,this.requiredIcon=!1,this.visible=!0,this.timeStep=30,this._errorText=``,this._inputValue=``,this._errorInvalid=``,this._inputMax=``,this._inputMin=``,this._inputTimeStep=30,this._valueConverted=``,this._GUID=Z();let t=Q(e);Object.assign(this,t)}shouldUpdate(e){if(e.has(`max`)||e.has(`min`)){let e=this._inputMin,t=this._inputMax;if(this.max===void 0||this.max===``)t=io;else{if(!os(this.max))return this.throwErrorAfterUpdateComplete(ao.MAX),!1;t=this.max=Ko(this.max)}if(this.min===void 0||this.min===``)e=ro;else{if(!os(this.min))return this.throwErrorAfterUpdateComplete(ao.MIN),!1;e=this.min=Ko(this.min)}if(go(t,e)<0)return this.throwErrorAfterUpdateComplete(eo),!1;this._inputMin=e,this._inputMax=t}if(e.has(`timeStep`)){if(!gs(this.timeStep))return this.throwErrorAfterUpdateComplete(no),!1;if(!ss(this.timeStep,this._inputMax,this._inputMin))return this.throwErrorAfterUpdateComplete(ao.TIME_STEP),!1;this._inputTimeStep=this.timeStep}return this.value===void 0||this.value===``?!0:os(this.value)?(this._valueConverted=Ko(this.value),e.has(`value`)&&(go(this._valueConverted,this._inputMin)<0||go(this._inputMax,this._valueConverted)<0)?(this.throwErrorAfterUpdateComplete(to),!1):!0):(this.throwErrorAfterUpdateComplete(ao.VALUE),!1)}update(e){e.has(`value`)&&(this.value===void 0?this._errorInvalid===``&&(this._inputValue=``):(this.value=this.value===``?this.value:this._valueConverted,this._inputValue=this.value)),(e.has(`max`)||e.has(`min`)||e.has(`value`))&&this.value!==void 0&&(this._errorInvalid=``),this._errorText=this._errorInvalid||this.error,super.update(e)}render(){return B`
        <fieldset
          class="kuc-time-picker-1-25-0__group"
          aria-describedby="${this._GUID}-error"
        >
          <legend
            class="kuc-time-picker-1-25-0__group__label"
            ?hidden="${!this.label}"
          >
            <kuc-base-label-1-25-0
              .text="${this.label}"
              .requiredIcon="${this.requiredIcon}"
            ></kuc-base-label-1-25-0>
          </legend>
          <kuc-base-time-1-25-0
            class="kuc-time-picker-1-25-0__group__input"
            .value="${this._inputValue}"
            .hour12="${this.hour12}"
            .disabled="${this.disabled}"
            .timeStep="${this._inputTimeStep}"
            .min="${this._inputMin}"
            .max="${this._inputMax}"
            .language="${this._getLanguage()}"
            @kuc:base-time-change="${this._handleTimeChange}"
          >
          </kuc-base-time-1-25-0>
          <kuc-base-error-1-25-0
            .text="${this._errorText}"
            .guid="${this._GUID}"
            ?hidden="${!this._errorText}"
          ></kuc-base-error-1-25-0>
        </fieldset>
      `}_handleTimeChange(e){e.preventDefault(),e.stopPropagation();let t={value:e.detail.value,oldValue:this.value};e.detail.error?(t.value=void 0,this.value=void 0,this._errorInvalid=e.detail.error,this.error=``):(this.value=e.detail.value,this._errorInvalid=``),this._inputValue=e.detail.value,Y(this,`change`,t)}_getLanguage(){let e=[`en`,`ja`,`zh`,`zh-TW`,`es`];return e.indexOf(this.language)===-1?e.indexOf(document.documentElement.lang)===-1?`en`:document.documentElement.lang:this.language}}pl([H({type:String,reflect:!0,attribute:`class`})],e.prototype,`className`,void 0),pl([H({type:String})],e.prototype,`error`,void 0),pl([H({type:String,reflect:!0,attribute:`id`})],e.prototype,`id`,void 0),pl([H({type:String})],e.prototype,`label`,void 0),pl([H({type:String,attribute:`lang`,reflect:!0,converter:Uo})],e.prototype,`language`,void 0),pl([H({type:String})],e.prototype,`max`,void 0),pl([H({type:String})],e.prototype,`min`,void 0),pl([H({type:String})],e.prototype,`value`,void 0),pl([H({type:Boolean})],e.prototype,`disabled`,void 0),pl([H({type:Boolean})],e.prototype,`hour12`,void 0),pl([H({type:Boolean})],e.prototype,`requiredIcon`,void 0),pl([H({type:Boolean,attribute:`hidden`,reflect:!0,converter:q})],e.prototype,`visible`,void 0),pl([H({type:Number})],e.prototype,`timeStep`,void 0),window.customElements.define(`kuc-time-picker-1-25-0`,e),X(fl),ml=e})();var hl=`
  kuc-tooltip-1-25-0,
  kuc-tooltip-1-25-0 *,
  kuc-tooltip-1-25-0:lang(en),
  kuc-tooltip-1-25-0:lang(en) * {
    font-family: sans-serif;
  }
  kuc-tooltip-1-25-0:lang(es),
  kuc-tooltip-1-25-0:lang(es) * {
    font-family: sans-serif;
  }
  kuc-tooltip-1-25-0:lang(ja),
  kuc-tooltip-1-25-0:lang(ja) * {
    font-family: "メイリオ", "Hiragino Kaku Gothic ProN", Meiryo,
      sans-serif;
  }
  kuc-tooltip-1-25-0:lang(zh),
  kuc-tooltip-1-25-0:lang(zh) * {
    font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,
      Hei, "Heiti SC", sans-serif;
  }
  kuc-tooltip-1-25-0:lang(zh-TW),
  kuc-tooltip-1-25-0:lang(zh-TW) * {
    font-family: "微軟正黑體","Microsoft JhengHei","新宋体",NSimSun,STHeiti,
      Hei,"Heiti SC",sans-serif;
  }
  .kuc-tooltip-1-25-0__group {
    position: relative;
    display: inline-block;
  }
  .kuc-tooltip-1-25-0__group::after {
    position: absolute;
    right: -20%;
    top: 100%;
    left: -20%;
    display: block;
    height: calc(0.5em * 2);
  }
  .kuc-tooltip-1-25-0__group__title .kuc-tooltip-1-25-0__group__title__wrapper__text {
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
  .kuc-tooltip-1-25-0__group__title[popover] {
    margin: 0;
    padding: 0;
    background-color: transparent;
    border-width: 0;
    border-radius: 0.25em;
    color: var(--kuc-tooltip-color, #ffffff);
    width: max-content;
  }
  .kuc-tooltip-1-25-0__group .kuc-tooltip-1-25-0__group__title__wrapper__arrow {
    border: 0.5em solid transparent;
    border-bottom-color: var(--kuc-tooltip-background-color, #000000);
  }
  .kuc-tooltip-1-25-0__group.kuc-tooltip-1-25-0__group--top > .kuc-tooltip-1-25-0__group__title .kuc-tooltip-1-25-0__group__title__wrapper__arrow {
    border-top-color: var(--kuc-tooltip-background-color, #000000);
    border-right-color: transparent;
    border-bottom-color: transparent;
    margin: auto 0;
  }
  .kuc-tooltip-1-25-0__group.kuc-tooltip-1-25-0__group--left > .kuc-tooltip-1-25-0__group__title .kuc-tooltip-1-25-0__group__title__wrapper__arrow {
    border-left-color: var(--kuc-tooltip-background-color, #000000);
    border-bottom-color: transparent;
  }
  .kuc-tooltip-1-25-0__group.kuc-tooltip-1-25-0__group--right > .kuc-tooltip-1-25-0__group__title .kuc-tooltip-1-25-0__group__title__wrapper__arrow {
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
  .kuc-tooltip-1-25-0__group.kuc-tooltip-1-25-0__group--left > .kuc-tooltip-1-25-0__group__title,
  .kuc-tooltip-1-25-0__group.kuc-tooltip-1-25-0__group--right > .kuc-tooltip-1-25-0__group__title {
    width: max-content;
    height: fit-content;
  }
  .kuc-tooltip-1-25-0__group .kuc-tooltip-1-25-0__group__title__wrapper {
    display: flex;
    align-items: center;
  }
  .kuc-tooltip-1-25-0__group.kuc-tooltip-1-25-0__group--top > .kuc-tooltip-1-25-0__group__title .kuc-tooltip-1-25-0__group__title__wrapper {
    flex-direction: column-reverse;
  }
  .kuc-tooltip-1-25-0__group.kuc-tooltip-1-25-0__group--bottom > .kuc-tooltip-1-25-0__group__title .kuc-tooltip-1-25-0__group__title__wrapper {
    flex-direction: column;
  }
  .kuc-tooltip-1-25-0__group.kuc-tooltip-1-25-0__group--left > .kuc-tooltip-1-25-0__group__title .kuc-tooltip-1-25-0__group__title__wrapper {
    flex-direction: row-reverse;
  }
`,gl=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},_l;(()=>{if(_l=window.customElements.get(`kuc-tooltip-1-25-0`),_l)return;class e extends J{constructor(e){super(),this.className=``,this.id=``,this.placement=`top`,this.title=``,this.container=``,this.describeChild=!1,this._container=``,this._scrollTargets=[],this._timeoutID=null,this._handleScroll=()=>{this._timeoutID!==null&&clearTimeout(this._timeoutID),this._timeoutID=window.setTimeout(()=>{this._setTooltipPositionBound(),this._timeoutID=null},20)},this._GUID=Z();let t=Q(e);Object.assign(this,t),this._globalEscapeBound=this._globalEscape.bind(this),this._setTooltipPositionBound=this._setTooltipPosition.bind(this)}update(e){e.has(`container`)&&(this.container&&_s(this.container)?this._container=Wo(this.container):this._container=this.container),super.update(e)}render(){return B`
        <div
          class="kuc-tooltip-1-25-0__group kuc-tooltip-1-25-0__group--${this._getPlacement()}"
        >
          <div
            class="kuc-tooltip-1-25-0__group__container"
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
      `}updated(){this._initializeFirstChildElement(),this.describeChild?this._setChildTitleAttribute():this._setChildAriaLabelAttribute()}_handleMouseEnterContainer(){this._openTooltip()}_handleTouchStartContainer(){this._openTooltip()}_handleMouseLeaveContainer(e){let t=e.relatedTarget;this._titleWrapper&&this._titleWrapper.contains(t)||this._closeTooltip()}_initializeFirstChildElement(){if(typeof this._container!=`string`){let e=this._groupContainerEL.firstElementChild;e&&!e.getAttribute(`aria-describedby`)&&(this._firstChildEl=e)}}_setChildTitleAttribute(){this._firstChildEl&&(this._firstChildEl.setAttribute(`title`,this.title),this._firstChildEl.removeAttribute(`aria-label`))}_setChildAriaLabelAttribute(){this._firstChildEl&&(this._firstChildEl.setAttribute(`aria-label`,this.title),this._firstChildEl.removeAttribute(`title`))}_getTitleTemplate(){return this.title?B`
        <div
          id="${this._GUID}-title"
          popover="manual"
          class="kuc-tooltip-1-25-0__group__title"
          role="tooltip"
          @mouseleave="${this._handleMouseLeaveTitle}"
        >
          <div class="kuc-tooltip-1-25-0__group__title__wrapper">
            <div class="kuc-tooltip-1-25-0__group__title__wrapper__arrow"></div>
            <div class="kuc-tooltip-1-25-0__group__title__wrapper__text">
              ${this.title}
            </div>
          </div>
        </div>
      `:B``}_handleMouseLeaveTitle(e){let t=e.relatedTarget;this._groupContainerEL.contains(t)||this._closeTooltip()}_handleFocusinContainer(){this._openTooltip()}_handleFocusoutContainer(){this._closeTooltip()}_openTooltip(){this._updateChildElementAttributes(!0);let e=this.querySelector(`.kuc-tooltip-1-25-0__group__title`);e&&(e.showPopover(),requestAnimationFrame(()=>{this._setTooltipPosition()})),this._attachGlobalListener()}_closeTooltip(){this._updateChildElementAttributes(!1);let e=this.querySelector(`.kuc-tooltip-1-25-0__group__title`);e&&e.hidePopover(),this._removeGlobalListener()}_updateChildElementAttributes(e){if(!(!this._firstChildEl||!this.describeChild)){if(e){this._firstChildEl.removeAttribute(`title`),this._firstChildEl.setAttribute(`aria-describedby`,`${this._GUID}-title`);return}this._firstChildEl.removeAttribute(`aria-describedby`),this._firstChildEl.setAttribute(`title`,this.title)}}_attachGlobalListener(){document.addEventListener(`keydown`,this._globalEscapeBound),this._scrollTargets=this._getScrollableAncestors(this._containerEl);for(let e of this._scrollTargets)e.addEventListener(`scroll`,this._handleScroll,{passive:!0})}_removeGlobalListener(){document.removeEventListener(`keydown`,this._globalEscapeBound);for(let e of this._scrollTargets)e.removeEventListener(`scroll`,this._handleScroll);this._scrollTargets=[],this._timeoutID!==null&&(clearTimeout(this._timeoutID),this._timeoutID=null)}_getScrollableAncestors(e){let t=[],n=e.parentElement,r=/(auto|scroll|overlay)/;for(;n&&n!==document.body&&n!==document.documentElement;){let e=getComputedStyle(n);(r.test(e.overflowY)||r.test(e.overflowX))&&t.push(n),n=n.parentElement}return t.push(window),t}_globalEscape(e){(e.key===`Escape`||e.key===`Esc`)&&this._closeTooltip()}_getPlacement(){return[`top`,`bottom`,`left`,`right`].includes(this.placement)?this.placement:`top`}_setTooltipPosition(){if(!this._titleEl||!this._containerEl)return;let e=this._containerEl.getBoundingClientRect(),t=this._titleEl.getBoundingClientRect(),n,r;switch(this.placement){case`bottom`:n=e.bottom,r=e.left+e.width/2-t.width/2;break;case`left`:n=e.top+e.height/2-t.height/2,r=e.left-t.width;break;case`right`:n=e.top+e.height/2-t.height/2,r=e.right;break;default:n=e.top-t.height,r=e.left+e.width/2-t.width/2}this._titleEl.style.position=`fixed`,this._titleEl.style.top=`${Math.round(n)}px`,this._titleEl.style.left=`${Math.round(r)}px`,this._titleEl.style.transform=`none`}}gl([H({type:String,reflect:!0,attribute:`class`})],e.prototype,`className`,void 0),gl([H({type:String,reflect:!0,attribute:`id`})],e.prototype,`id`,void 0),gl([H({type:String})],e.prototype,`placement`,void 0),gl([H({type:String})],e.prototype,`title`,void 0),gl([H()],e.prototype,`container`,void 0),gl([H({type:Boolean})],e.prototype,`describeChild`,void 0),gl([W(`.kuc-tooltip-1-25-0__group__container`)],e.prototype,`_groupContainerEL`,void 0),gl([W(`.kuc-tooltip-1-25-0__group__title__wrapper`)],e.prototype,`_titleWrapper`,void 0),gl([W(`.kuc-tooltip-1-25-0__group__container`)],e.prototype,`_containerEl`,void 0),gl([W(`.kuc-tooltip-1-25-0__group__title`)],e.prototype,`_titleEl`,void 0),window.customElements.define(`kuc-tooltip-1-25-0`,e),X(hl),_l=e})();var vl=`
  kuc-user-org-group-select-1-25-0,
  kuc-user-org-group-select-1-25-0 *,
  kuc-user-org-group-select-1-25-0:lang(en),
  kuc-user-org-group-select-1-25-0:lang(en) * {
    font-family: sans-serif;
  }
  kuc-user-org-group-select-1-25-0:lang(es),
  kuc-user-org-group-select-1-25-0:lang(es) * {
    font-family: sans-serif;
  }
  kuc-user-org-group-select-1-25-0:lang(ja),
  kuc-user-org-group-select-1-25-0:lang(ja) * {
    font-family: "メイリオ", "Hiragino Kaku Gothic ProN", Meiryo,
      sans-serif;
  }
  kuc-user-org-group-select-1-25-0:lang(zh),
  kuc-user-org-group-select-1-25-0:lang(zh) * {
    font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,
      Hei, "Heiti SC", sans-serif;
  }
  kuc-user-org-group-select-1-25-0:lang(zh-TW),
  kuc-user-org-group-select-1-25-0:lang(zh-TW) * {
    font-family: "微軟正黑體", "Microsoft JhengHei", "新宋体", NSimSun, STHeiti, Hei, "Heiti SC", sans-serif;
  }
  kuc-user-org-group-select-1-25-0 {
    display: inline-table;
    width: var(--kuc-user-org-group-select-toggle-width, 280px);
    position: relative;
    display: inline-table;
    font-size: 14px;
    color: #333333;
    vertical-align: top;
    line-height: 1.5;
  }
  kuc-user-org-group-select-1-25-0[hidden] {
    display: none;
  }
  .kuc-user-org-group-select-1-25-0__group {
    border: none;
    padding: 0px;
    height: auto;
    display: inline-block;
    width: 100%;
    margin: 0px;
  }
  .kuc-user-org-group-select-1-25-0__group__label {
    padding: 4px 0px 8px 0px;
    display: inline-block;
    white-space: nowrap;
  }
  .kuc-user-org-group-select-1-25-0__group__label[hidden] {
    display: none;
  }
  .kuc-user-org-group-select-1-25-0__group__container {
    font-size: var(--kuc-user-org-group-select-font-size, 14px);
    display: flex;
    flex-direction: row;
    width: 100%;
    padding: 0px;
    margin: 0px;
    align-items: start;
  }
  .kuc-user-org-group-select-1-25-0__group__container__select-area {
    width: var(--kuc-user-org-group-select-toggle-width, 280px);
    position: relative;
  }
  .kuc-user-org-group-select-1-25-0__group__container__select-area__toggle {
    position: relative;
    display: flex;
    flex-direction: row;
  }
  .kuc-user-org-group-select-1-25-0__group__container__select-area__toggle__input {
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
  input[type=text].kuc-user-org-group-select-1-25-0__group__container__select-area__toggle__input:focus {
    outline: none;
    border: 1px solid #3498db;
    box-shadow: none;
  }
  input[type=text].kuc-user-org-group-select-1-25-0__group__container__select-area__toggle__input:disabled,
  .kuc-user-org-group-select-1-25-0__group__container__select-area__toggle__icon__button:disabled {
    background-color: #d4d7d7;
    box-shadow: none;
    cursor: not-allowed;
    color: #888888;
  }

  .kuc-user-org-group-select-1-25-0__group__container__select-area__toggle__icon__button {
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
  .kuc-user-org-group-select-1-25-0__group__container__select-area__toggle__icon__button__svg {
    border: 1px solid #e3e7e8;
    border-left: none;
    background-color: #eeeeee;
    box-sizing: content-box;
  }
  .kuc-user-org-group-select-1-25-0__group__container__picker {
    margin-left: 8px;
  }
  .kuc-user-org-group-select-1-25-0__group__container__picker__button {
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
  .kuc-user-org-group-select-1-25-0__group__container__picker__button:disabled {
    cursor: not-allowed;
  }
  .kuc-user-org-group-select-1-25-0__group__container__select-area__select-menu {
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
  .kuc-user-org-group-select-1-25-0__group__container__select-area__select-menu__item {
   border-bottom: 1px solid #e3e7e8;
   display: flex;
   background-color: #f7f9fa;
   flex-direction: row;
   cursor: pointer;
   box-sizing: border-box;
  }
  .kuc-user-org-group-select-1-25-0__group__container__select-area__select-menu__item--disabled,
  .kuc-user-org-group-select-1-25-0__group__container__select-area__select-menu__item--disabled[aria-selected="true"] {
    background-color: #d4d7d7;
    cursor: not-allowed;
    color: #888888;
  }
  .kuc-user-org-group-select-1-25-0__group__container__select-area__select-menu__item__highlight[role="option"] {
    background-color: #d8e1e6;
    flex-direction: row;
  }
  .kuc-user-org-group-select-1-25-0__group__container__select-area__select-menu__item__icon {
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
  .kuc-user-org-group-select-1-25-0__group__container__select-area__select-menu__item__icon--disabled {
    background-color: #d4d7d7;
    box-shadow: none;
    cursor: not-allowed;
    color: #888888;
  }
  .kuc-user-org-group-select-1-25-0__group__container__select-area__select-menu__item__text {
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
  .kuc-user-org-group-select-1-25-0__group__container__select-area__selected-list {
    padding: 0;
    margin: 0;
    list-style: none;
    width: 100%;
  }
  .kuc-user-org-group-select-1-25-0__group__container__select-area__selected-list__item {
    display: flex;
    flex-direction: row;
    border-bottom: 1px solid #e3e7e8;
    justify-content: space-between;
    align-items: center;
    margin-top: 8px;
  }
  .kuc-user-org-group-select-1-25-0__group__container__select-area__selected-list__item__content {
    display: flex;
    flex-direction: row;
    flex: 1;
    min-width: 0;
  }
  .kuc-user-org-group-select-1-25-0__group__container__select-area__selected-list__item__remove-icon,
  .kuc-user-org-group-select-1-25-0__group__container__select-area__selected-list__item__content__icon {
    width: 24px;
    height: 24px;
    flex-shrink: 0; 
    display: flex;
    align-items: center;
    justify-content: center;
    align-self: center;
  }
  .kuc-user-org-group-select-1-25-0__group__container__select-area__selected-list__item__remove-icon__button {
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
  .kuc-user-org-group-select-1-25-0__group__container__select-area__selected-list__item__remove-icon__button:focus-within {
    border: 1px solid #3498db;
  }
  .kuc-user-org-group-select-1-25-0__group__container__select-area__selected-list__item__remove-icon__button:focus {
    outline: none;
  }
 .kuc-user-org-group-select-1-25-0__group__container__select-area__selected-list__item__content__text{
    padding: 2px 0 2px 8px;
    line-height: normal;
    align-content: center;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    flex: 1;
  }
  .kuc-user-org-group-select-1-25-0__group__container__select-area__selected-list__item__content__text--disabled {
    background-color: #d4d7d7;
    color: #888888;
  }
`,yl=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},bl;(()=>{if(bl=window.customElements.get(`kuc-user-org-group-select-1-25-0`),bl)return;class e extends J{constructor(e){super(),this.className=``,this.error=``,this.icon=``,this.id=``,this.label=``,this.placeholder=``,this.disabled=!1,this.requiredIcon=!1,this.visible=!0,this.items=[],this.value=[],this._selectedValues=[],this._searchText=``,this._selectorVisible=!1,this._query=``,this._matchingItems=[],this._DISABLED_ITEM_CLASS=`kuc-user-org-group-select-1-25-0__group__container__select-area__select-menu__item--disabled`,this._DISABLED_ICON_CLASS=`kuc-user-org-group-select-1-25-0__group__container__select-area__select-menu__item__icon--disabled`,this._SMALL_ICON_SIZE=24,this._LARGE_ICON_SIZE=48,this._scrollTargets=[],this._GUID=Z();let t=Q(e);this._handleClickDocument=this._handleClickDocument.bind(this),this._handleScrollMenu=this._handleScrollMenu.bind(this),this._setMenuPosition=this._setMenuPosition.bind(this),this._actionResizeScrollWindow=this._actionResizeScrollWindow.bind(this),Object.assign(this,t)}shouldUpdate(e){if(e.has(`items`)){if(!$(this.items))return this.throwErrorAfterUpdateComplete(G.ITEMS.IS_NOT_ARRAY),!1;if(!ds(this.items.map(e=>e.value)))return this.throwErrorAfterUpdateComplete(G.ITEMS.IS_DUPLICATED),!1}return e.has(`value`)&&!$(this.value)?(this.throwErrorAfterUpdateComplete(G.VALUE.IS_NOT_ARRAY),!1):!0}render(){let e=this._getIconType();return B`
        <div class="kuc-user-org-group-select-1-25-0__group">
          <div
            class="kuc-user-org-group-select-1-25-0__group__label"
            id="${this._GUID}-label"
            ?hidden="${!this.label}"
          >
            <kuc-base-label-1-25-0
              .text="${this.label}"
              .requiredIcon="${this.requiredIcon}"
            ></kuc-base-label-1-25-0>
          </div>
          <div class="kuc-user-org-group-select-1-25-0__group__container">
            <div
              class="kuc-user-org-group-select-1-25-0__group__container__select-area"
            >
              <div
                class="kuc-user-org-group-select-1-25-0__group__container__select-area__toggle"
              >
                <input
                  class="kuc-user-org-group-select-1-25-0__group__container__select-area__toggle__input"
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
                  class="kuc-user-org-group-select-1-25-0__group__container__select-area__toggle__icon"
                >
                  <button
                    class="kuc-user-org-group-select-1-25-0__group__container__select-area__toggle__icon__button"
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
                class="kuc-user-org-group-select-1-25-0__group__container__select-area__select-menu"
                role="listbox"
                aria-labelledby="${this._GUID}-label"
                aria-hidden="${!this._selectorVisible}"
                @mouseleave="${this._handleMouseLeaveMenu}"
                @mousedown="${this._handleMouseDownMenu}"
              >
                ${this._matchingItems.map((e,t)=>this._getMatchedItemTemplate(e,t))}
              </ul>
              <ul
                class="kuc-user-org-group-select-1-25-0__group__container__select-area__selected-list"
              >
                ${this._selectedValues.map((e,t)=>this._getSelectedItemTemplate(e,t))}
              </ul>
            </div>
            <div
              class="kuc-user-org-group-select-1-25-0__group__container__picker"
              ?hidden="${!e}"
            >
              <button
                class="kuc-user-org-group-select-1-25-0__group__container__picker__button"
                tabindex="-1"
                type="button"
                ?disabled="${this.disabled}"
                @click="${this._handleClickIconButton}"
              >
                ${this._getPickerSVGTemplateByIcon(e)}
              </button>
            </div>
          </div>
          <kuc-base-error-1-25-0
            .text="${this.error}"
            .guid="${this._GUID}"
            ?hidden="${!this.error}"
            ariaLive="assertive"
          ></kuc-base-error-1-25-0>
        </div>
      `}_getIconType(){if(this.icon===`user`||this.icon===`org`||this.icon===`group`)return this.icon}disconnectedCallback(){this._detachListeners(),super.disconnectedCallback()}_actionResizeScrollWindow(){this._timeoutID||!this._selectorVisible||(this._timeoutID=window.setTimeout(()=>{this._timeoutID=null,this._setMenuPosition()},50))}async updated(e){super.updated(e),await this.updateComplete,e.has(`value`)&&this._initializeSelectedValues(),this._selectorVisible&&this._actionClearAllHighlightMenuItem()}_initializeSelectedValues(){Array.isArray(this.value)&&(this._selectedValues=this.value.filter(e=>this.items.some(t=>t.value===e)))}_getMatchedItemTemplate(e,t){let n=e.label===void 0||e.label===null?e.value:e.label,r=B`${n}`,i=e.disabled,a=this._query.trim().toLowerCase();if(a&&n){let e=n.toLowerCase().indexOf(a),t=e+a.length;r=B`
          ${n.slice(0,e)}<b>${n.slice(e,t)}</b>${n.slice(t)}
        `}return B`
        <li
          class="kuc-user-org-group-select-1-25-0__group__container__select-area__select-menu__item ${i?this._DISABLED_ITEM_CLASS:``}"
          role="option"
          value="${e.value===void 0?``:e.value}"
          id="${this._GUID}-menuitem-${t}"
          @click="${i?null:this._handleClickUserOrgGroupItem}"
          @mouseover="${i?null:this._handleMouseOverUserOrgGroupItem}"
        >
          <div
            class="kuc-user-org-group-select-1-25-0__group__container__select-area__select-menu__item__icon ${i?this._DISABLED_ICON_CLASS:``}"
          >
            ${this._getSvgTemplateByType(e?e.type:``)}
          </div>
          <div
            class="kuc-user-org-group-select-1-25-0__group__container__select-area__select-menu__item__text"
          >
            ${r}
          </div>
        </li>
      `}_getSelectedItemTemplate(e,t){let n=this.items.filter(t=>t.value===e)[0];if(!n)return``;let r=n?.disabled,i=n.label===void 0||n.label===null?n.value:n.label;return B`
        <li
          class="kuc-user-org-group-select-1-25-0__group__container__select-area__selected-list__item"
          value="${e}"
          id="${this._GUID}-selected-item-${t}"
        >
          <div
            class="kuc-user-org-group-select-1-25-0__group__container__select-area__selected-list__item__content"
          >
            <div
              class="kuc-user-org-group-select-1-25-0__group__container__select-area__selected-list__item__content__icon"
            >
              ${this._getSvgTemplateByType(n.type||``,this._SMALL_ICON_SIZE)}
            </div>
            <div
              class="kuc-user-org-group-select-1-25-0__group__container__select-area__selected-list__item__content__text ${r?`kuc-user-org-group-select-1-25-0__group__container__select-area__selected-list__item__content__text--disabled`:``}"
            >
              ${i}
            </div>
          </div>
          <div
            class="kuc-user-org-group-select-1-25-0__group__container__select-area__selected-list__item__remove-icon"
            ?hidden="${this.disabled}"
          >
            <button
              class="kuc-user-org-group-select-1-25-0__group__container__select-area__selected-list__item__remove-icon__button"
              type="button"
              aria-label="remove"
              selected-item-index="${t}"
              @click="${this._handleClickRemoveSelectedItem}"
            >
              ${this._getRemoveSVGTemplate()}
            </button>
          </div>
        </li>
      `}_handleChangeUserOrgGroupInput(e){e.stopPropagation()}_handleInputUserOrgGroupInput(e){e.stopPropagation(),this._searchText=this._inputEl.value,this._query=this._inputEl.value,this._setMatchingItems()}_handleClickUserOrgGroupInput(e){e.stopPropagation(),this._inputEl.select(),this._setMatchingItems()}_handleBlurUserOrgGroupInput(e){let t=e.relatedTarget;t&&(this._toggleEl.contains(t)||this._menuEl&&this._menuEl.contains(t))||this._resetToggleInputValue()}_handleKeyDownUserOrgGroupInput(e){switch(e.key){case`Up`:case`ArrowUp`:if(e.preventDefault(),!this._selectorVisible){this._actionShowMenu();break}this._actionHighlightPrevMenuItem();break;case`Tab`:this._selectorVisible&&this._actionHideMenu();break;case`Down`:case`ArrowDown`:if(e.preventDefault(),!this._selectorVisible){this._actionShowMenu();break}this._actionHighlightNextMenuItem();break;case`Enter`:{e.preventDefault();let t=this._highlightItemEl;if(t===null)break;let n=t.getAttribute(`value`);this._actionUpdateValue(n),this._actionHideMenu();break}case`Escape`:e.preventDefault(),this._selectorVisible&&e.stopPropagation(),this._resetToggleInputValue(),this._actionHideMenu();break;case`Home`:this._selectorVisible&&(e.preventDefault(),this._actionHighlightFirstMenuItem());break;case`End`:this._selectorVisible&&(e.preventDefault(),this._actionHighlightLastMenuItem());break;default:break}}_resetToggleInputValue(){this._searchText=``,this._query=``}_actionHighlightPrevMenuItem(){let e=null;this._highlightItemEl!==null&&(e=this._highlightItemEl.previousElementSibling),e===null&&(e=this._lastItemEl);let t=!1;for(let n=0;n<this._matchingItems.length&&(t=e.classList.contains(this._DISABLED_ITEM_CLASS),t);n++)e=e.previousElementSibling,e===null&&(e=this._lastItemEl);!t&&this._setHighlightAndActiveDescendantMenu(e)}_actionHighlightNextMenuItem(){let e=null;this._highlightItemEl!==null&&(e=this._highlightItemEl.nextElementSibling),e===null&&(e=this._firstItemEl);let t=!1;for(let n=0;n<this._matchingItems.length&&(t=e.classList.contains(this._DISABLED_ITEM_CLASS),t);n++)e=e.nextElementSibling,e===null&&(e=this._firstItemEl);!t&&this._setHighlightAndActiveDescendantMenu(e)}_setHighlightAndActiveDescendantMenu(e){this._actionHighlightMenuItem(e),this._actionSetActiveDescendant(e.id),this._scrollToView()}_actionSetActiveDescendant(e){e!==void 0&&this._inputEl!==null&&this._inputEl.setAttribute(`aria-activedescendant`,e)}_actionRemoveActiveDescendant(){this._inputEl.removeAttribute(`aria-activedescendant`)}_setMenuPosition(){!this._menuEl||!this._toggleEl||(this._setMenuPositionAboveOrBelow(this._menuEl,this._toggleEl),this._setMenuPositionLeftOrRight(this._menuEl,this._toggleEl))}_handleClickRemoveSelectedItem(e){let t=e.currentTarget,n=parseInt(t.getAttribute(`selected-item-index`)||`-1`,10),r=this._selectedValues.filter((e,t)=>t!==n),i=this.value;this._selectedValues=r,this.value=r;let a={oldValue:i,value:this.value};Y(this,`change`,a)}_handleClickToggleButton(e){e.preventDefault(),this._inputEl.focus();let t=this._inputEl.value.length;this._inputEl.setSelectionRange(t,t),this._setMatchingItems(),this._actionShowMenu()}_handleMouseDownToggleButton(e){e.preventDefault()}_handleClickIconButton(e){e.preventDefault();let t={value:this.value};Y(this,`click-picker-icon`,t)}_setMenuPositionAboveOrBelow(e,t){let n=t.getBoundingClientRect(),r=n.top,i=window.innerHeight;window.innerHeight>document.documentElement.clientHeight&&(i=document.documentElement.clientHeight);let a=i-n.bottom;e.style.height=`auto`,e.style.maxHeight=`none`,e.style.top=`auto`,e.style.bottom=`auto`;let o=e.getBoundingClientRect().height;e.style.maxHeight=`var(--kuc-user-org-group-select-menu-max-height, none)`;let s=getComputedStyle(e).maxHeight,c;s&&s!==`none`&&(c=parseFloat(s));let l=c?Math.min(o,c):o,u,d;a>=l?(u=n.bottom,d=l):r>=l?(u=n.top-l,d=l):a>=r?(u=n.bottom,d=a):(u=n.top-r,d=r),e.style.position=`fixed`;let f=`${u}px`;e.style.top!==f&&(e.style.top=f);let p=`${d}px`;e.style.height!==p&&(e.style.height=p),e.style.overflowY=`auto`,e.style.overflowX=`hidden`,this._menuEl&&this._previousScrollTop&&(this._menuEl.scrollTop=this._previousScrollTop)}_setMenuPositionLeftOrRight(e,t){e.style.right=`auto`;let n=e.offsetWidth,r=t.getBoundingClientRect(),i=window.innerWidth;window.innerWidth>document.documentElement.clientWidth&&(i=document.documentElement.clientWidth);let a=r.left;i<r.right&&i>r.left&&(a=i-n);let o=`${a}px`;e.style.left!==o&&(e.style.left=o)}_scrollToView(){if(!this._highlightItemEl||!this._menuEl)return;let e=this._menuEl.getBoundingClientRect(),t=this._highlightItemEl.getBoundingClientRect();t.top<e.top&&(this._menuEl.scrollTop-=e.top-t.top),e.bottom<t.bottom&&(this._menuEl.scrollTop+=t.bottom-e.bottom)}_actionHighlightFirstMenuItem(){let e=this._firstItemEl,t=!1;for(let n=0;n<this._matchingItems.length&&(t=e.classList.contains(this._DISABLED_ITEM_CLASS),t);n++)e=e.nextElementSibling;!t&&this._setHighlightAndActiveDescendantMenu(e)}_actionHighlightLastMenuItem(){let e=this._lastItemEl,t=!1;for(let n=0;n<this._matchingItems.length&&(t=e.classList.contains(this._DISABLED_ITEM_CLASS),t);n++)e=e.previousElementSibling;!t&&this._setHighlightAndActiveDescendantMenu(e)}_setMatchingItems(){let e=this.items.filter(e=>{let t=new RegExp((e=>e.replace(/[.*+?^=!:${}()|[\]/\\]/g,`\\$&`))(this._query.trim()),`gi`);return e.label?t.test(e.label):e.value?t.test(e.value):!1});e.length===0?(this._matchingItems=[],this._actionHideMenu()):(this._matchingItems=e,this._actionShowMenu())}async _actionShowMenu(){this._query.trim()===``&&(this._matchingItems=this.items),!(this.items.length===0||this._matchingItems.length===0)&&(this._inputEl.focus(),this._selectorVisible=!0,this._menuEl.showPopover(),await this.updateComplete,!(!this._menuEl||!this._toggleEl)&&(this._setMenuPosition(),this._attachListeners()))}_handleMouseOverUserOrgGroupItem(e){let t=this._getItemElementWhenMouseOverDown(e.target);this._actionHighlightMenuItem(t)}_actionHighlightMenuItem(e){this._actionClearAllHighlightMenuItem(),e.setAttribute(`aria-selected`,`true`),e.classList.add(`kuc-user-org-group-select-1-25-0__group__container__select-area__select-menu__item__highlight`)}_handleClickUserOrgGroupItem(e){let t=this._getItemElementWhenMouseOverDown(e.target).getAttribute(`value`);this._actionUpdateValue(t)}_actionUpdateValue(e){if(this._selectedValues.includes(e)){this._resetToggleInputValue();return}let t=this.value,n=[...this._selectedValues,e];this._selectedValues=n,this.value=n;let r={oldValue:t,value:this.value};this._query=``,Y(this,`change`,r),this._resetToggleInputValue()}_getItemElementWhenMouseOverDown(e){return e.classList.value.split(` `).includes(`kuc-user-org-group-select-1-25-0__group__container__select-area__select-menu__item`)?e:this._getItemElementWhenMouseOverDown(e.parentElement)}_handleMouseLeaveMenu(){this._actionClearAllHighlightMenuItem()}_actionClearAllHighlightMenuItem(){this._itemsEl.forEach(e=>{e.setAttribute(`aria-selected`,`false`),e.classList.remove(`kuc-user-org-group-select-1-25-0__group__container__select-area__select-menu__item__highlight`)}),this._actionRemoveActiveDescendant()}_handleMouseDownMenu(e){e.preventDefault()}_handleClickDocument(e){e.target===this._toggleEl||this._toggleEl.contains(e.target)||Array.from(this._disabledItemsEl).some(t=>t===e.target||t.contains(e.target))||this._actionHideMenu()}_handleScrollMenu(){this._previousScrollTop=this._menuEl.scrollTop}_attachListeners(){this._detachListeners(),this._scrollTargets=this._getScrollableAncestors(this._toggleEl);for(let e of this._scrollTargets)e.addEventListener(`scroll`,this._setMenuPosition,{passive:!0});this._menuEl.addEventListener(`scroll`,this._handleScrollMenu),window.addEventListener(`resize`,this._actionResizeScrollWindow),document.addEventListener(`click`,this._handleClickDocument,{capture:!0})}_detachListeners(){var e;for(let e of this._scrollTargets)e.removeEventListener(`scroll`,this._setMenuPosition);this._scrollTargets=[],(e=this._menuEl)==null||e.removeEventListener(`scroll`,this._handleScrollMenu),window.removeEventListener(`resize`,this._actionResizeScrollWindow),document.removeEventListener(`click`,this._handleClickDocument,{capture:!0})}_getScrollableAncestors(e){let t=[],n=e.parentElement,r=/(auto|scroll|overlay)/;for(;n&&n!==document.body&&n!==document.documentElement;){let e=getComputedStyle(n);(r.test(e.overflowY)||r.test(e.overflowX))&&t.push(n),n=n.parentElement}return t.push(window),t}_actionHideMenu(){this._selectorVisible=!1,this._menuEl.hidePopover(),this._detachListeners(),this._actionRemoveActiveDescendant()}_getPickerSVGTemplateByIcon(e){if(!e)return``;switch(e){case`user`:return this._getUserPickerSvgTemplate();case`org`:return this._getOrgPickerSvgTemplate();case`group`:return this._getGroupPickerSvgTemplate();default:return``}}_getSvgTemplateByType(e,t=this._LARGE_ICON_SIZE){if(!e)return``;switch(e){case`user`:return this._getUserSvgTemplate(t);case`org`:return this._getOrgSvgTemplate(t);case`group`:return this._getGroupSvgTemplate(t);default:return``}}_getUserPickerSvgTemplate(){return V`
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
        </svg>`}_getOrgPickerSvgTemplate(){return V`
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="0.5" y="0.5" width="39" height="39" fill="#3498db"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M15 7V14H25V7H15ZM13 5H27V16H21V19H27V21V23H36V34H22V23H25V21H15V23H18V34H4V23H13V21V19H19V16H13V5ZM6 25V32H16V25H6ZM24 32V25H34V32H24Z" fill="white"/>
        </svg>`}_getGroupPickerSvgTemplate(){return V`
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="0.5" y="0.5" width="39" height="39" fill="#3498db"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M12.6551 24.1065C12.3317 23.9525 12.0125 23.7844 11.698 23.6024L11.6295 23.5538C11.3087 23.2805 11.2372 22.741 11.2374 21.7176C11.2479 21.2643 11.3739 20.8281 11.5956 20.4752C11.778 20.0909 11.892 19.6587 11.9333 19.1728C11.9734 18.8758 12.0581 18.5915 12.1643 18.3772C12.2589 18.1446 12.3242 17.8943 12.3577 17.6357L12.3751 17.5448C12.3976 17.457 12.3976 17.3623 12.3768 17.2809C12.3352 17.1245 12.3038 16.9639 12.2829 16.8009L12.2717 16.7132L12.2803 16.6251C12.3034 16.3892 12.3242 16.1742 12.3433 15.9768C12.3628 15.7742 12.3806 15.5902 12.3973 15.4212C12.4046 14.8764 12.2454 14.3493 11.9507 13.9484C11.5271 13.3623 10.9159 13.0582 10.2937 13.1239L10.213 13.1237C9.59178 13.0557 8.98076 13.3575 8.55289 13.9473C8.26007 14.3412 8.10115 14.8673 8.10773 15.3532C8.12287 15.5191 8.13739 15.6833 8.16535 16.0012C8.18835 16.2612 8.20477 16.4405 8.22211 16.6178L8.2298 16.6965L8.22163 16.7751C8.20329 16.9514 8.16943 17.1245 8.1298 17.2569C8.10695 17.3516 8.10695 17.4529 8.1298 17.5476L8.14334 17.6184C8.18073 17.8801 8.25069 18.1324 8.35314 18.3719C8.46153 18.6321 8.53033 18.9162 8.55601 19.2102C8.5944 19.6569 8.70942 20.0871 8.89274 20.4703C9.11905 20.8203 9.24997 21.2565 9.26522 21.7358V21.929C9.30165 22.3744 9.24576 22.8245 9.10291 23.2339L9.04949 23.387L8.94263 23.4843C8.64824 23.7523 8.31767 23.9487 8.00464 24.0493L7.15028 24.425C5.78535 25.0813 5.04368 25.6544 5.01834 25.8055C4.99303 26.0876 4.97631 26.3707 4.9682 26.6542H8.03855C7.71232 27.0377 7.44846 27.4499 7.2567 27.8843H4.01041L4.00163 27.2807C3.99378 26.7411 4.01399 26.2015 4.06832 25.6149C4.19756 24.789 5.08295 24.1048 6.82411 23.2679L7.72834 22.8721C7.91901 22.8096 8.10105 22.7111 8.26854 22.5802C8.31037 22.4049 8.32337 22.2198 8.30616 22.0367L8.30272 21.9633L8.30314 21.7615C8.29682 21.568 8.23916 21.3831 8.13966 21.2371L8.09543 21.1611C7.82441 20.6114 7.65474 19.9902 7.59936 19.3456C7.58726 19.2071 7.55474 19.0729 7.5061 18.956C7.36114 18.6173 7.25836 18.2518 7.2014 17.8728C7.13032 17.5527 7.13353 17.2117 7.21915 16.8603C7.23605 16.8025 7.24922 16.7431 7.25854 16.6827C7.24361 16.5269 7.22861 16.3617 7.20894 16.1394L7.20467 16.0909C7.17941 15.8037 7.16568 15.6476 7.14859 15.4385C7.1331 14.5704 7.38708 13.7297 7.85104 13.1057C8.4674 12.2559 9.35196 11.811 10.2548 11.8942C11.1582 11.8144 12.0422 12.2623 12.6549 13.11C13.1184 13.7406 13.3712 14.5774 13.3564 15.5031C13.3225 15.8748 13.2874 16.2441 13.2446 16.6828C13.2561 16.7517 13.271 16.8206 13.2898 16.8917C13.372 17.2123 13.3758 17.5568 13.3015 17.8797C13.2498 18.2509 13.1537 18.6115 12.9997 18.9861C12.9408 19.1071 12.9007 19.2414 12.8861 19.3421C12.8326 19.9872 12.6653 20.6083 12.3966 21.1587L12.3563 21.2296C12.2592 21.3768 12.2039 21.5616 12.1997 21.7358C12.1997 22.0747 12.2127 22.3422 12.2367 22.5229C12.6612 22.8009 13.0881 23.0096 13.5223 23.1916L13.6079 23.2398C13.624 23.2513 13.641 23.2605 13.6925 23.2818C14.0991 23.4793 14.4589 23.6685 14.773 23.8532C14.0381 23.873 13.328 23.9604 12.6551 24.1065Z" fill="white"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M27.3449 24.1065C27.6683 23.9525 27.9875 23.7844 28.302 23.6024L28.3705 23.5538C28.6913 23.2805 28.7628 22.741 28.7626 21.7176C28.7521 21.2643 28.6261 20.8281 28.4044 20.4752C28.222 20.0909 28.108 19.6587 28.0667 19.1728C28.0266 18.8758 27.9419 18.5915 27.8357 18.3772C27.7411 18.1446 27.6758 17.8943 27.6423 17.6357L27.6249 17.5448C27.6024 17.457 27.6024 17.3623 27.6232 17.2809C27.6648 17.1245 27.6962 16.9639 27.7171 16.8009L27.7283 16.7132L27.7197 16.6251C27.6966 16.3892 27.6758 16.1742 27.6567 15.9768C27.6372 15.7742 27.6194 15.5902 27.6027 15.4212C27.5954 14.8764 27.7546 14.3493 28.0493 13.9484C28.4729 13.3623 29.0841 13.0582 29.7063 13.1239L29.787 13.1237C30.4082 13.0557 31.0192 13.3575 31.4471 13.9473C31.7399 14.3412 31.8989 14.8673 31.8923 15.3532C31.8771 15.5191 31.8626 15.6833 31.8346 16.0012C31.8117 16.2612 31.7952 16.4405 31.7779 16.6178L31.7702 16.6965L31.7784 16.7751C31.7967 16.9514 31.8306 17.1245 31.8702 17.2569C31.8931 17.3516 31.8931 17.4529 31.8702 17.5476L31.8567 17.6184C31.8193 17.8801 31.7493 18.1324 31.6469 18.3719C31.5385 18.6321 31.4697 18.9162 31.444 19.2102C31.4056 19.6569 31.2906 20.0871 31.1073 20.4703C30.8809 20.8203 30.75 21.2565 30.7348 21.7358V21.9291C30.6983 22.3744 30.7542 22.8245 30.8971 23.2339L30.9505 23.387L31.0574 23.4843C31.3518 23.7523 31.6823 23.9487 31.9954 24.0493L32.8497 24.425C34.2146 25.0813 34.9563 25.6544 34.9817 25.8055C35.007 26.0876 35.0237 26.3707 35.0318 26.6542H31.9614C32.2877 27.0377 32.5515 27.4499 32.7433 27.8843H35.9896L35.9984 27.2807C36.0062 26.7411 35.986 26.2015 35.9317 25.6149C35.8024 24.789 34.9171 24.1048 33.1759 23.2679L32.2717 22.8721C32.081 22.8096 31.8989 22.7111 31.7315 22.5802C31.6896 22.4049 31.6766 22.2198 31.6938 22.0367L31.6973 21.9633L31.6969 21.7615C31.7032 21.568 31.7608 21.3831 31.8603 21.2371L31.9046 21.1611C32.1756 20.6114 32.3453 19.9902 32.4006 19.3456C32.4127 19.2071 32.4453 19.0729 32.4939 18.956C32.6389 18.6173 32.7416 18.2518 32.7986 17.8728C32.8697 17.5527 32.8665 17.2117 32.7809 16.8603C32.7639 16.8025 32.7508 16.7431 32.7415 16.6827C32.7564 16.5269 32.7714 16.3617 32.7911 16.1394L32.7953 16.0911C32.8206 15.8038 32.8343 15.6476 32.8514 15.4385C32.8669 14.5704 32.6129 13.7297 32.149 13.1057C31.5326 12.2559 30.648 11.811 29.7452 11.8942C28.8418 11.8144 27.9578 12.2623 27.3451 13.11C26.8816 13.7406 26.6288 14.5774 26.6436 15.5031C26.6775 15.8748 26.7126 16.2441 26.7554 16.6828C26.7439 16.7517 26.729 16.8206 26.7102 16.8917C26.628 17.2123 26.6242 17.5568 26.6985 17.8797C26.7502 18.2509 26.8463 18.6115 27.0003 18.9861C27.0592 19.1071 27.0993 19.2414 27.1139 19.3421C27.1674 19.9872 27.3347 20.6083 27.6034 21.1587L27.6437 21.2296C27.7408 21.3768 27.7961 21.5616 27.8003 21.7358C27.8003 22.0747 27.7873 22.3422 27.7633 22.5229C27.3388 22.8009 26.9119 23.0096 26.4777 23.1916L26.3921 23.2398C26.376 23.2513 26.359 23.2605 26.3075 23.2818C25.9009 23.4793 25.5411 23.6685 25.227 23.8532C25.9619 23.873 26.672 23.9604 27.3449 24.1065Z" fill="white"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M30.8186 29.5726C30.6403 29.1791 29.1727 28.2439 26.6283 27.1984C26.4894 27.1538 26.3545 27.096 26.2253 27.0255C25.2156 26.665 24.2242 26.2474 23.2552 25.7743L23.1183 25.6924C22.4767 25.2312 22.3337 24.3208 22.3341 22.5938C22.3551 21.8288 22.6071 21.0928 23.0506 20.4972C23.4154 19.8487 23.6434 19.1194 23.7259 18.2995C23.8061 17.7982 23.9756 17.3184 24.1879 16.9569C24.3772 16.5643 24.5077 16.142 24.5748 15.7056L24.6096 15.5522C24.6546 15.404 24.6546 15.2441 24.613 15.1068C24.5298 14.8429 24.467 14.5719 24.4252 14.2968L24.4027 14.1489L24.4199 14.0002C24.5134 13.1937 24.5882 12.5318 24.6538 11.9686C24.6685 11.0492 24.3501 10.1598 23.7607 9.4832C22.9135 8.49423 21.6911 7.98104 20.4468 8.09191L20.2853 8.09164C19.0429 7.97677 17.8209 8.48614 16.9651 9.48141C16.3795 10.1462 16.0616 11.0338 16.0748 11.8539C16.1051 12.1338 16.1341 12.4109 16.19 12.9474C16.236 13.3861 16.2689 13.6887 16.3036 13.9879L16.3189 14.1207L16.3026 14.2533C16.2659 14.5508 16.1982 14.8429 16.1189 15.0664C16.0732 15.2262 16.0732 15.3971 16.1189 15.5569L16.146 15.6764C16.2208 16.1179 16.3607 16.5437 16.5656 16.9479C16.7824 17.3869 16.92 17.8663 16.9714 18.3625C17.0481 19.1164 17.2782 19.8424 17.6448 20.4889C18.0975 21.0795 18.3593 21.8157 18.3898 22.6245V22.9506C18.4626 23.7022 18.3509 24.4616 18.0652 25.1525L17.9583 25.4109L17.7446 25.5751C17.1558 26.0274 16.4947 26.3587 15.8686 26.5284L14.1599 27.1625C11.43 28.27 9.94671 29.2372 9.89602 29.4921C9.8454 29.9681 9.81195 30.4459 9.79575 30.9243H30.897L30.8186 29.5726ZM26.9039 25.0812L27.0751 25.1624C27.1073 25.1818 27.1413 25.1974 27.2444 25.2334C30.6551 26.6309 32.42 27.7844 32.7105 29.155L32.7328 29.3215L32.946 33H7.88019L7.86263 31.9814C7.84694 31.071 7.88735 30.1603 7.99601 29.1703C8.25449 27.7768 10.0253 26.6222 13.5076 25.2099L15.3161 24.5419C15.6974 24.4364 16.0615 24.2702 16.3964 24.0493C16.4801 23.7535 16.5061 23.4412 16.4717 23.1322L16.4648 23.0084L16.4657 22.6678C16.453 22.3413 16.3377 22.0292 16.1387 21.7828L16.0502 21.6546C15.5082 20.7271 15.1689 19.6788 15.0581 18.5909C15.0339 18.3573 14.9689 18.1307 14.8716 17.9335C14.5817 17.3619 14.3761 16.7453 14.2622 16.1057C14.12 15.5655 14.1264 14.99 14.2977 14.3971C14.3315 14.2996 14.3578 14.1993 14.3765 14.0973C14.3466 13.8344 14.3166 13.5557 14.2773 13.1805C14.2212 12.6427 14.1926 12.37 14.1566 11.9978C14.1256 10.5328 14.6335 9.11422 15.5614 8.06107C16.7942 6.62717 18.5633 5.87626 20.369 6.0167C22.1758 5.88217 23.9437 6.63783 25.1692 8.06843C26.0962 9.13255 26.6019 10.5446 26.5722 12.1068C26.5043 12.734 26.4342 13.3572 26.3486 14.0975C26.3715 14.2138 26.4013 14.3301 26.439 14.45C26.6033 14.991 26.6111 15.5724 26.4623 16.1172C26.3591 16.7437 26.1668 17.3521 25.8588 17.9844C25.7409 18.1884 25.6608 18.4152 25.6315 18.5851C25.5247 19.6736 25.1899 20.7218 24.6526 21.6506L24.5719 21.7702C24.3777 22.0186 24.2672 22.3305 24.2587 22.6245C24.2587 23.1963 24.2848 23.6477 24.3327 23.9527C25.1817 24.4218 26.0357 24.774 26.9039 25.0812Z" fill="white"/>
        </svg>`}_getSearchPickerSvgTemplate(){return V`
        <svg width="38" height="38" viewBox="-8 -8 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" class="kuc-user-org-group-select-1-25-0__group__container__select-area__toggle__icon__button__svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M15.1034 16.5176C11.5697 19.3478 6.3971 19.125 3.12139 15.8493C-0.393328 12.3346 -0.393328 6.63611 3.12139 3.12139C6.63611 -0.393328 12.3346 -0.393328 15.8493 3.12139C18.878 6.15005 19.2968 10.8002 17.1058 14.2774L23.6275 20.7991L21.5062 22.9204L15.1034 16.5176ZM13.728 5.24271C16.0711 7.58586 16.0711 11.3848 13.728 13.728C11.3848 16.0711 7.58586 16.0711 5.24271 13.728C2.89957 11.3848 2.89957 7.58586 5.24271 5.24271C7.58586 2.89957 11.3848 2.89957 13.728 5.24271Z" fill="#888888"/>
        </svg>`}_getRemoveSVGTemplate(){return V`
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
      `}_getUserSvgTemplate(e){return V`
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
        </svg>`}_getOrgSvgTemplate(e){return V`
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
        </svg>`}_getGroupSvgTemplate(e){return V`
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
        </svg>`}}yl([H({type:String,reflect:!0,attribute:`class`})],e.prototype,`className`,void 0),yl([H({type:String})],e.prototype,`error`,void 0),yl([H({type:String})],e.prototype,`icon`,void 0),yl([H({type:String,reflect:!0,attribute:`id`})],e.prototype,`id`,void 0),yl([H({type:String})],e.prototype,`label`,void 0),yl([H({type:String})],e.prototype,`placeholder`,void 0),yl([H({type:Boolean})],e.prototype,`disabled`,void 0),yl([H({type:Boolean})],e.prototype,`requiredIcon`,void 0),yl([H({type:Boolean,attribute:`hidden`,reflect:!0,converter:q})],e.prototype,`visible`,void 0),yl([H({type:Array})],e.prototype,`items`,void 0),yl([H({type:Array})],e.prototype,`value`,void 0),yl([Ra(`.kuc-user-org-group-select-1-25-0__group__container__select-area__select-menu__item`)],e.prototype,`_itemsEl`,void 0),yl([W(`.kuc-user-org-group-select-1-25-0__group__container__select-area__toggle__input`)],e.prototype,`_inputEl`,void 0),yl([W(`.kuc-user-org-group-select-1-25-0__group__container__select-area__toggle`)],e.prototype,`_toggleEl`,void 0),yl([W(`.kuc-user-org-group-select-1-25-0__group__container__select-area__select-menu`)],e.prototype,`_menuEl`,void 0),yl([W(`.kuc-user-org-group-select-1-25-0__group__container__select-area__select-menu__item__highlight`)],e.prototype,`_highlightItemEl`,void 0),yl([W(`.kuc-user-org-group-select-1-25-0__group__container__select-area__select-menu__item:first-child`)],e.prototype,`_firstItemEl`,void 0),yl([W(`.kuc-user-org-group-select-1-25-0__group__container__select-area__select-menu__item:last-child`)],e.prototype,`_lastItemEl`,void 0),yl([Ra(`.kuc-user-org-group-select-1-25-0__group__container__select-area__select-menu__item--disabled`)],e.prototype,`_disabledItemsEl`,void 0),yl([U()],e.prototype,`_selectedValues`,void 0),yl([U()],e.prototype,`_searchText`,void 0),yl([U()],e.prototype,`_selectorVisible`,void 0),window.customElements.define(`kuc-user-org-group-select-1-25-0`,e),X(vl),bl=e})();var xl=`
  kuc-mobile-button-1-25-0,
  kuc-mobile-button-1-25-0 * {
    font-family: "メイリオ", Meiryo, "Hiragino Kaku Gothic ProN",
      "ヒラギノ角ゴ ProN W3", "ＭＳ Ｐゴシック", "Lucida Grande",
      "Lucida Sans Unicode", Arial, Verdana, sans-serif;
  }
  kuc-mobile-button-1-25-0:lang(es),
  kuc-mobile-button-1-25-0:lang(es) * {
    font-family: sans-serif;
  }
  kuc-mobile-button-1-25-0:lang(zh),
  kuc-mobile-button-1-25-0:lang(zh) * {
    font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,
      Hei, "Heiti SC", "Lucida Grande", "Lucida Sans Unicode", Arial,
      Verdana, sans-serif;
  }
  kuc-mobile-button-1-25-0:lang(zh-TW),
  kuc-mobile-button-1-25-0:lang(zh-TW) * {
      font-family: "微軟正黒體","Microsoft JhengHei","新宋体",NSimSun,STHeiti,
      Hei,"Heiti SC","Lucida Grande","Lucida Sans Unicode",Arial,
      Verdana,sans-serif
  }
  kuc-mobile-button-1-25-0 {
    display: inline-block;
    vertical-align: top;
  }
  kuc-mobile-button-1-25-0[hidden] {
    display: none;
  }
  .kuc-mobile-button-1-25-0__button {
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
  .kuc-mobile-button-1-25-0__button:focus {
    outline: none;
  }
  .kuc-mobile-button-1-25-0__button--submit {
    border: 2px solid;
    border-color: var(--kuc-mobile-button-background-color, #206694);
    background-color: var(--kuc-mobile-button-background-color, #206694);
    color: var(--kuc-mobile-button-text-color, #ffffff);
    border-radius: 6px;
  }
  .kuc-mobile-button-1-25-0__button--submit:focus {
    border-color: var(--kuc-mobile-button-background-color-focus, var(--kuc-mobile-button-background-color, #206694));
    background-color: var(--kuc-mobile-button-background-color-focus, var(--kuc-mobile-button-background-color, #206694));
  }
  .kuc-mobile-button-1-25-0__button--submit:active {
    border-color: var(--kuc-mobile-button-background-color-active, var(--kuc-mobile-button-background-color, #206694));
    background-color: var(--kuc-mobile-button-background-color-active, var(--kuc-mobile-button-background-color, #206694));
  }
  .kuc-mobile-button-1-25-0__button--submit:disabled {
    color: #ffffff;
    border-color: #a5a5a5;
    background: #a5a5a5;
  }
  .kuc-mobile-button-1-25-0__button--normal {
    border: 2px solid;
    border-color: var(--kuc-mobile-button-background-color, #206694);
    background-color: var(--kuc-mobile-button-background-color, #ffffff);
    color: var(--kuc-mobile-button-text-color, #206694);
    border-radius: 6px;
  }
  .kuc-mobile-button-1-25-0__button--normal:focus {
    border-color: var(--kuc-mobile-button-background-color-focus, var(--kuc-mobile-button-background-color, #206694));
    background-color: var(--kuc-mobile-button-background-color-focus, var(--kuc-mobile-button-background-color, #ffffff));
  }
  .kuc-mobile-button-1-25-0__button--normal:active {
    border-color: var(--kuc-mobile-button-background-color-active, var(--kuc-mobile-button-background-color, #206694));
    background-color: var(--kuc-mobile-button-background-color-active, var(--kuc-mobile-button-background-color, #ffffff));
  }
  .kuc-mobile-button-1-25-0__button--normal:disabled {
    color: #a5a5a5;
    border-color: #a5a5a5;
    background-color: #ffffff;
    cursor: default;
  }
`,Sl=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},Cl;(()=>{if(Cl=window.customElements.get(`kuc-mobile-button-1-25-0`),Cl)return;class e extends J{constructor(e){super(),this.className=``,this.id=``,this.text=``,this.type=`normal`,this.content=``,this.disabled=!1,this.visible=!0,this._content=``;let t=Q(e);Object.assign(this,t)}_handleClickButton(e){e.stopPropagation(),Y(this,`click`)}_getButtonColorType(){return this.type===`normal`||this.type===`submit`?this.type:`normal`}willUpdate(e){(e.has(`content`)||e.has(`text`))&&(this.content!==null&&this.content!==void 0&&this.content!==``?_s(this.content)?this._content=Wo(this.content):this._content=this.content:this._content=this.text)}render(){return B`
        <button
          type="button"
          class="kuc-mobile-button-1-25-0__button kuc-mobile-button-1-25-0__button--${this._getButtonColorType()}"
          ?disabled="${this.disabled}"
          @click="${this._handleClickButton}"
        >
          ${this._content}
        </button>
      `}}Sl([H({type:String,reflect:!0,attribute:`class`})],e.prototype,`className`,void 0),Sl([H({type:String,reflect:!0,attribute:`id`})],e.prototype,`id`,void 0),Sl([H({type:String})],e.prototype,`text`,void 0),Sl([H({type:String})],e.prototype,`type`,void 0),Sl([H()],e.prototype,`content`,void 0),Sl([H({type:Boolean})],e.prototype,`disabled`,void 0),Sl([H({type:Boolean,attribute:`hidden`,reflect:!0,converter:q})],e.prototype,`visible`,void 0),window.customElements.define(`kuc-mobile-button-1-25-0`,e),X(xl),Cl=e})();var wl=`
  kuc-base-mobile-error-1-25-0 {
    display: block;
    font-size: 13px;
    font-family: "メイリオ", Meiryo, "Hiragino Kaku Gothic ProN",
      "ヒラギノ角ゴ ProN W3", "ＭＳ Ｐゴシック", "Lucida Grande",
      "Lucida Sans Unicode", Arial, Verdana, sans-serif;
  }
  kuc-base-mobile-error-1-25-0:lang(es),
  kuc-base-mobile-error-1-25-0:lang(es) * {
    font-family: sans-serif;
  }
  kuc-base-mobile-error-1-25-0:lang(zh),
  kuc-base-mobile-error-1-25-0:lang(zh) * {
    font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,
      Hei, "Heiti SC", "Lucida Grande", "Lucida Sans Unicode", Arial,
      Verdana, sans-serif;
  }
  kuc-base-mobile-error-1-25-0:lang(zh-TW),
  kuc-base-mobile-error-1-25-0:lang(zh-TW) * {
      font-family: "微軟正黒體","Microsoft JhengHei","新宋体",NSimSun,STHeiti,
      Hei,"Heiti SC","Lucida Grande","Lucida Sans Unicode",Arial,
      Verdana,sans-serif
  }
  kuc-base-mobile-error-1-25-0[hidden] {
    display: none;
  }
  .kuc-base-mobile-error-1-25-0__error {
    line-height: 1.5;
    color: #000000;
    background-color: #fdffc9;
    border: 1px solid #e5db68;
    border-radius: 0.4em;
    padding: 0.4em 1em;
    margin-top: 0.3em;
    margin-left: 0.5em;
  }
  .kuc-base-mobile-error-1-25-0__error[hidden] {
    display: none;
  }
`,Tl=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},El=class extends J{constructor(){super(...arguments),this.ariaLive=``,this.guid=``,this.text=``}render(){return B`
      ${this.ariaLive&&this.ariaLive!==``?B`
            <div
              class="kuc-base-mobile-error-1-25-0__error"
              .id="${this.guid}-error"
              role="alert"
              aria-live="${this.ariaLive}"
              ?hidden="${!this.text}"
            >
              ${this.text}
            </div>
          `:B`
            <div
              class="kuc-base-mobile-error-1-25-0__error"
              .id="${this.guid}-error"
              role="alert"
              ?hidden="${!this.text}"
            >
              ${this.text}
            </div>
          `}
    `}};Tl([H({type:String})],El.prototype,`ariaLive`,void 0),Tl([H({type:String})],El.prototype,`guid`,void 0),Tl([H({type:String})],El.prototype,`text`,void 0),window.customElements.get(`kuc-base-mobile-error-1-25-0`)||(X(wl),window.customElements.define(`kuc-base-mobile-error-1-25-0`,El));var Dl=`
  kuc-base-mobile-label-1-25-0 {
    display: inline-table;
    font-size: 13px;
    font-family: "メイリオ", Meiryo, "Hiragino Kaku Gothic ProN",
      "ヒラギノ角ゴ ProN W3", "ＭＳ Ｐゴシック", "Lucida Grande",
      "Lucida Sans Unicode", Arial, Verdana, sans-serif;
  }
  kuc-base-mobile-label-1-25-0:lang(es) ,
  kuc-base-mobile-label-1-25-0:lang(es) * {
    font-family: sans-serif;
  }
  kuc-base-mobile-label-1-25-0:lang(zh) ,
  kuc-base-mobile-label-1-25-0:lang(zh) * {
    font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,
      Hei, "Heiti SC", "Lucida Grande", "Lucida Sans Unicode", Arial,
      Verdana, sans-serif;
  }
  kuc-base-mobile-label-1-25-0:lang(zh-TW),
  kuc-base-mobile-label-1-25-0:lang(zh-TW) * {
      font-family: "微軟正黒體","Microsoft JhengHei","新宋体",NSimSun,STHeiti,
      Hei,"Heiti SC","Lucida Grande","Lucida Sans Unicode",Arial,
      Verdana,sans-serif
  }
  kuc-base-mobile-label-1-25-0[hidden] {
    display: none;
  }
  .kuc-base-mobile-label-1-25-0__text {
    text-shadow: 0 1px 0 #ffffff;
    color: #888888;
    white-space: normal;
    font-size: 86%;
  }
  .kuc-base-mobile-label-1-25-0__required-icon {
    font-size: 86%;
    position: relative;
    left: 3px;
    color: #d01212;
  }
  .kuc-base-mobile-label-1-25-0__required-icon[hidden] {
    display: none;
  }
`,Ol=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},kl=class extends J{constructor(){super(...arguments),this.requiredIcon=!1,this.guid=``,this.text=``}render(){return B`
      ${this._getTextTemplate()}
      <span
        class="kuc-base-mobile-label-1-25-0__required-icon"
        ?hidden="${!this.requiredIcon}"
        >*</span
      >
    `}_getTextTemplate(){return this.guid&&this.guid!==``?B`
          <span class="kuc-base-mobile-label-1-25-0__text" .id="${this.guid}-group"
            >${this.text}</span
          >
        `:B` <span class="kuc-base-mobile-label-1-25-0__text">${this.text}</span> `}};Ol([H({type:Boolean})],kl.prototype,`requiredIcon`,void 0),Ol([H({type:String})],kl.prototype,`guid`,void 0),Ol([H({type:String})],kl.prototype,`text`,void 0),window.customElements.get(`kuc-base-mobile-label-1-25-0`)||(X(Dl),window.customElements.define(`kuc-base-mobile-label-1-25-0`,kl));var Al=`
  kuc-mobile-checkbox-1-25-0,
  kuc-mobile-checkbox-1-25-0 * {
    font-size: 13px;
    color: #333333;
    font-family: "メイリオ", Meiryo, "Hiragino Kaku Gothic ProN",
      "ヒラギノ角ゴ ProN W3", "ＭＳ Ｐゴシック", "Lucida Grande",
      "Lucida Sans Unicode", Arial, Verdana, sans-serif;
  }
  kuc-mobile-checkbox-1-25-0:lang(es),
  kuc-mobile-checkbox-1-25-0:lang(es) * {
    font-family: sans-serif;
  }
  kuc-mobile-checkbox-1-25-0:lang(zh),
  kuc-mobile-checkbox-1-25-0:lang(zh) * {
    font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,
      Hei, "Heiti SC", "Lucida Grande", "Lucida Sans Unicode", Arial,
      Verdana, sans-serif;
  }
  kuc-mobile-checkbox-1-25-0:lang(zh-TW),
  kuc-mobile-checkbox-1-25-0:lang(zh-TW) * {
      font-family: "微軟正黒體","Microsoft JhengHei","新宋体",NSimSun,STHeiti,
      Hei,"Heiti SC","Lucida Grande","Lucida Sans Unicode",Arial,
      Verdana,sans-serif
  }
  kuc-mobile-checkbox-1-25-0 {
    width: 100%;
    display: inline-block;
  }
  kuc-mobile-checkbox-1-25-0[hidden] {
    display: none;
  }
  .kuc-mobile-checkbox-1-25-0__group {
    border: none;
    padding: 0px;
    height: auto;
    display: inline-block;
    width: 100%;
    box-sizing: border-box;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
  }
  .kuc-mobile-checkbox-1-25-0__group__label {
    display: inline-block;
    font-size: 86%;
    font-weight: bold;
    line-height: 1.5;
    padding: 0px;
    margin: 0 0 4px 0;
    white-space: nowrap;
  }
  .kuc-mobile-checkbox-1-25-0__group__label[hidden] {
    display: none;
  }
  .kuc-mobile-checkbox-1-25-0__group__label__text {
    text-shadow: 0 1px 0 #ffffff;
    color: #888888;
    white-space: normal;
    font-size: inherit;
  }
  .kuc-mobile-checkbox-1-25-0__group__label__required-icon {
    position: relative;
    left: 3px;
    color: #d01212;
  }
  .kuc-mobile-checkbox-1-25-0__group__label__required-icon[hidden] {
    display: none;
  }
  .kuc-mobile-checkbox-1-25-0__group__select-menu {
    margin-left: 0.5em;
    margin-right: 0.5em;
  }
  .kuc-mobile-checkbox-1-25-0__group__select-menu[bordervisible] {
    border-color: #b3b3b3;
    border-width: 1px;
    border-style: solid;
    border-radius: 8px;
  }
  .kuc-mobile-checkbox-1-25-0__group__select-menu[disabled],
  .kuc-mobile-checkbox-1-25-0__group__select-menu__item--disabled {
    background-color: #d5d7d9;
    color: #999999;
    -webkit-text-fill-color: #999999;
    background-color: #d5d7d9;
    opacity: 1;
  }
  .kuc-mobile-checkbox-1-25-0__group__select-menu--required[bordervisible] {
    border-color: #cf4a38;
    border-width: 1px;
    border-style: solid;
    border-radius: 8px;
  }
  .kuc-mobile-checkbox-1-25-0__group__select-menu__item[bordervisible] {
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
  .kuc-mobile-checkbox-1-25-0__group__select-menu__item {
    padding: 4px;
    border: 1px solid transparent;
    position: relative;
    white-space: normal;
    word-wrap: normal;
    height: 30px;
    display: block;
    padding: 8px;
  }
  .kuc-mobile-checkbox-1-25-0__group__select-menu__item:last-child {
    border-bottom: 0px;
  }
  .kuc-mobile-checkbox-1-25-0__group__select-menu[bordervisible]
  .kuc-mobile-checkbox-1-25-0__group__select-menu__item:first-child {
    border-top-left-radius: 7px;
    border-top-right-radius: 7px;
  }
  .kuc-mobile-checkbox-1-25-0__group__select-menu[bordervisible]
  .kuc-mobile-checkbox-1-25-0__group__select-menu__item:last-child {
    border-bottom-left-radius: 7px;
    border-bottom-right-radius: 7px;
  }
  .kuc-mobile-checkbox-1-25-0__group__select-menu__item__input {
    position: absolute;
    opacity: 0;
  }
  .kuc-mobile-checkbox-1-25-0__group__select-menu__item__input[disabled]
    + .kuc-mobile-checkbox-1-25-0__group__select-menu__item__label {
    background-color: #d5d7d9;
    color: #999999;
    -webkit-text-fill-color: #999999;
    background-color: #d5d7d9;
    opacity: 1;
  }
  .kuc-mobile-checkbox-1-25-0__group__select-menu__item__label {
    position: relative;
    margin: -7px 0px 0px 34px;
    display: inline-block;
    vertical-align: middle;
    white-space: nowrap;
    padding: 11px 13px 13px 0px;
    font-size: 14.04px;
  }
  .kuc-mobile-checkbox-1-25-0__group__select-menu__item__label__icon {
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
  .kuc-mobile-checkbox-1-25-0__group__error {
    line-height: 1.5;
    border: 1px solid #e5db68;
    background-color: #fdffc9;
    margin-top: 0.3em;
    margin-left: 0.5em;
    padding: 0.4em 1em;
    border-radius: 0.4em;
    color: #000000;
  }
  .kuc-mobile-checkbox-1-25-0__group__error[hidden] {
    display: none;
  }
`,jl=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},Ml;(()=>{if(Ml=window.customElements.get(`kuc-mobile-checkbox-1-25-0`),Ml)return;class e extends J{constructor(e){super(),this.className=``,this.error=``,this.id=``,this.label=``,this.borderVisible=!0,this.disabled=!1,this.requiredIcon=!1,this.visible=!0,this.items=[],this.selectedIndex=[],this.value=[],this._valueMapping={},this._GUID=Z();let t=Q(e);this._setInitialValue(t),Object.assign(this,t)}_setInitialValue(e){let t=`value`in e,n=`selectedIndex`in e,r=e.selectedIndex||[];if(!t&&n){if(!$(r))return;let t=this._getValueMapping(e);this.value=this._getValidValue(t,r)}}_getNewValueMapping(e,t){let n=parseInt(t,10),r=Object.keys(this._valueMapping),i={...this._valueMapping};return r.indexOf(t)>-1?(delete i[n],i):(i[n]=e,i)}_handleChangeInput(e){e.stopPropagation();let t=e.target,n=t.dataset.index||`0`,r=t.value,i=this.value?[...this.value]:this.value,a=this._getNewValueMapping(r,n),o=this.items.map(e=>e.value),s=Object.values(a).filter(e=>o.indexOf(e)>-1);if(s===i)return;let c=Object.keys(a).map(e=>parseInt(e,10));this.value=s,this.selectedIndex=c;let l={oldValue:i,value:s};Y(this,`change`,l)}_getCheckboxIconSvgTemplate(e){return V`
       <svg
         class="kuc-mobile-checkbox-1-25-0__group__select-menu__item__label__icon"
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
       `}_getSVGStrokeValue(e){return e?`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAiCAQAAACOh/P6AAAABGdBTUEAALGPC/xhBQAAACBjSFJN AAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QA/4ePzL8AAAAHdElN RQfkCQcFITUNIbrXAAADHklEQVRIx63US2sTURQH8P9kmsykQtoMSbStreZRkRBxY3BR7EJwEyuo WQiCmy4EBXHhyi8g4qYfQCjYpRgQBK0GEoUmohYUsURjKz4WrTTNNDYzmUcz42Lymkfz0nN298z9 zeXcM0OgJeLoJxLkhTn14+P5uJJoWR3oy9Kx5xcCl6s4RybuQ2muk60PhXtmWc/xh8GL+0GBnvGu 599D/S9wwetOH51yg4UEt4H+B7jgZVKTkX0oQYUKEcNwttB9wwUvkwpFHOCg1lLEMOgZX43uE9ZY OwTdqgh3g7b12NYGG4yQ4KEYkoUD9nsnfX2NW8HLpAIRG3iLGge2/G32AweiZ1hjCUuWB8vlr6+8 gWRqBetRFljPXmiC4CaZlD+iWjRBAQeWy19bSaMACWiFCW5yKB24MpQueK3ZWHRwORRRLFke23VW hAoQTTYWpZMBFwkRPz4VT3s2zSydDLkEwyTUm8Dp2CZMxKJ0MuiqoAInSPw00Inaa/+gasEK2FnL Xi3km2wdJmJROul3lWrbnLDr6IShrg8R5bXXs5t5sJCa/wpbnT3sYiE3rkHEeIRJab1OmOqtKWjs Z2zFxSYLDGjsIVdRdxoOCsYjxGrlzNPl2AlzvR4yeI1l47K+QsJxbGnMV8Ru45vXUoKKEap8KVCi H0y4tkx1FSpkVHRsTgdTeEdOgSEstvHwU9TZUWrDkt2FaDitHkaBK2ZHThEMTFsV7MCHX5ZsFZKp CXpYhcRzxczoNMFYbWdRtWBVyBa9NZwY1TptY1R0k4CQeXtj84vxyowwoGj02LSNUTqyBCrPn93k vmPbOAlmuAeaRGVx8RbWUYrvGofPCm7QB6dtTHVPdgCCxv6JW4y1NdwFbYfYht0bRlzJSTzHLh04 Yp8wj5gDUlu2DRxGWMlJXPnrK3+ACulbSHdk28JAWMlJkFYz/qAjJDdOS0PuyHaAa7S8mg0EHSEJ KkjQEB69uN2J7QgDYTUnazQVUkCBvftyDuvYac92AbfSzhB7JzOPDZQ7sV3BDXrJkV1+gt/g4kon Vg8TbZ8kMQg7BAjogtXHX2EwhA6/OKOlAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDIwLTA5LTA3VDA1 OjMzOjUzKzAwOjAwOdR5sgAAACV0RVh0ZGF0ZTptb2RpZnkAMjAyMC0wOS0wN1QwNTozMzo1Mysw MDowMEiJwQ4AAAAZdEVYdFNvZnR3YXJlAEFkb2JlIEltYWdlUmVhZHlxyWU8AAAAAElFTkSuQmCC`:`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAiCAQAAACOh/P6AAAABGdBTUEAALGPC/xhBQAAACBjSFJN AAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QA/4ePzL8AAAAHdElN RQfkCQcFIRBGJW6QAAACvklEQVRIx6XWQZKbRhSA4Z8GBhACenwC5wZUypXKMlRlmUVcXrtKHMEn meQEUmWfmnHZe65ATpDcIA3MMGKEhBdgGRAaWZqnjarp94H6PTWtNWg0tPEX54fARNzwT72qed8b Ny6weqFzhbO0Fg1rHlf9Ky+CdSw5X3q/O+x4WAro0S+ADSw5T4LQw6LBRFt+5rc9LV7CeokMA1xs bOYE+MvPixfCBpb0ExkGzDDR0bFG9EVwywahzwwDAWiIPf1pcSHcZ/U90NIuHrObv+UF8DTb0hoG utKjd+qgKzSA/R9mirWlN8lCw5Yn9RT9kh4shc6VtJdXUp9ENQzs18fZmkrdR2/Sr4/QC+e1dWuG m3AdVaqeYJ3QS3zp4xxhi+jHdD//215xF84TV17xRJEWI7pl/SSQ8wl2x5a1uu+xvaW4C/3kWl4T IJGhn1jSGLCz0E+k9HC6Bhuyj2nxg0r7o92cj13aDBsXn6BHt6yXSOlhY3QFHrJ59L/KOIA/9tJ0 dGYdbUsD0WOtSbZMs0ipnMcxfDtKE+jMCJBh8K8b2rgn2DzKVM6aYbkNcG496Q7SBOAAQhpJ/cG8 8eT8BFsx7iIBRmSmBmKQJtBx8HklXy2vL2BBwK//raNNumM3umBg4xFwrGTPsV3xflZ5VKbbEa2h Y2Jhoh+w9Ql2324/HaEFYrRIsGNDedd2wjEWxNctZ5o+jB0bylX2VqniGXawCX0PvWPDwyqLFcVB gx2FITtBt2weKwoqts/+sgGcd3Q9SX9j70+yI7giR6ksKu82B/SQPVWJEVxTUaBU9rZcDelz2YNX U03TfuIGd2F29z2fnTgJbaloaCAGd2Gitewf+YfsDHbyiLWlar/EMFvobCjjfJXxcAZ75Oy26+gm 3mIuqrhYZTyexR49FLZ0wyY2/qzSkpKns1jQmrOmf398ARuVc7WA4gOtAAAAJXRFWHRkYXRlOmNy ZWF0ZQAyMDIwLTA5LTA3VDA1OjMzOjE2KzAwOjAw76ZY7wAAACV0RVh0ZGF0ZTptb2RpZnkAMjAy MC0wOS0wN1QwNTozMzoxNiswMDowMJ774FMAAAAZdEVYdFNvZnR3YXJlAEFkb2JlIEltYWdlUmVh ZHlxyWU8AAAAAElFTkSuQmCC`}_isCheckedItem(e,t){let n=Object.values(this._valueMapping),r=Object.keys(this._valueMapping);return n.filter((n,i)=>n===e.value&&t===parseInt(r[i],10)).length>0}_getItemTemplate(e,t){let n=this._isCheckedItem(e,t);return B`
        <label
          for="${this._GUID}-item-${t}"
          class="kuc-mobile-checkbox-1-25-0__group__select-menu__item${e.disabled?` kuc-mobile-checkbox-1-25-0__group__select-menu__item--disabled`:``}"
          ?borderVisible="${this.borderVisible}"
        >
          <input
            type="checkbox"
            id="${this._GUID}-item-${t}"
            class="kuc-mobile-checkbox-1-25-0__group__select-menu__item__input"
            name="${this._GUID}-group"
            data-index="${t}"
            value="${e.value===void 0?``:e.value}"
            aria-describedby="${this._GUID}-error}"
            aria-required="${this.requiredIcon}"
            aria-invalid="${this.error!==``}"
            ?disabled="${e.disabled||this.disabled}"
            @change="${this._handleChangeInput}"
          />
          <div class="kuc-mobile-checkbox-1-25-0__group__select-menu__item__label">
            ${this._getCheckboxIconSvgTemplate(n)}${e.label===void 0?e.value:e.label}
          </div>
        </label>
      `}shouldUpdate(e){return e.has(`items`)&&!$(this.items)?(this.throwErrorAfterUpdateComplete(G.ITEMS.IS_NOT_ARRAY),!1):e.has(`value`)&&!$(this.value)?(this.throwErrorAfterUpdateComplete(G.VALUE.IS_NOT_ARRAY),!1):e.has(`selectedIndex`)&&!$(this.selectedIndex)?(this.throwErrorAfterUpdateComplete(G.SELECTED_INDEX.IS_NOT_ARRAY),!1):!0}willUpdate(e){if(e.has(`value`)){if(this.value.length>0)return;this.selectedIndex=[]}}update(e){(e.has(`items`)||e.has(`value`)||e.has(`selectedIndex`))&&(this._valueMapping=this._getValueMapping({items:this.items,value:this.value,selectedIndex:this.selectedIndex}),this._setValueAndSelectedIndex()),super.update(e)}render(){return B`
        <fieldset class="kuc-mobile-checkbox-1-25-0__group">
          <legend
            class="kuc-mobile-checkbox-1-25-0__group__label"
            ?hidden="${!this.label}"
          >
            <kuc-base-mobile-label-1-25-0
              .text="${this.label}"
              .requiredIcon="${this.requiredIcon}"
            ></kuc-base-mobile-label-1-25-0>
          </legend>
          <div
            class="kuc-mobile-checkbox-1-25-0__group__select-menu ${this.requiredIcon?`kuc-mobile-checkbox-1-25-0__group__select-menu--required`:``}"
            ?borderVisible="${this.borderVisible}"
            ?disabled="${this.disabled}"
          >
            ${this.items.map((e,t)=>this._getItemTemplate(e,t))}
          </div>
          <kuc-base-mobile-error-1-25-0
            .text="${this.error}"
            .guid="${this._GUID}"
            ariaLive="assertive"
          >
          </kuc-base-mobile-error-1-25-0>
        </fieldset>
      `}updated(){this._inputEls.forEach(e=>{e.checked=this.value.indexOf(e.value)>-1})}_setValueAndSelectedIndex(){this.value=Object.values(this._valueMapping),this.selectedIndex=Object.keys(this._valueMapping).map(e=>parseInt(e,10))}_getValueMapping(e){let t=e.items||[],n=e.value||[],r=e.selectedIndex||[],i=t.map(e=>e.value||``),a=Object.assign({},i),o={};if(n.length===0){let e=this._getValidValue(a,r);return r.forEach((t,n)=>o[t]=e[n]),o}return this._getValidSelectedIndex(a).forEach((e,t)=>o[e]=n[t]),o}_getValidValue(e,t){return t.filter(t=>e[t]).map(t=>e[t])}_getValidSelectedIndex(e){let t=[];for(let n=0;n<this.value.length;n++){let r=this.selectedIndex[n];if(e[r]===this.value[n]){t.push(r);continue}let i=this.items.findIndex(e=>e.value===this.value[n]);t.push(i)}return t}}jl([H({type:String,reflect:!0,attribute:`class`})],e.prototype,`className`,void 0),jl([H({type:String})],e.prototype,`error`,void 0),jl([H({type:String,reflect:!0,attribute:`id`})],e.prototype,`id`,void 0),jl([H({type:String})],e.prototype,`label`,void 0),jl([H({type:Boolean})],e.prototype,`borderVisible`,void 0),jl([H({type:Boolean})],e.prototype,`disabled`,void 0),jl([H({type:Boolean})],e.prototype,`requiredIcon`,void 0),jl([H({type:Boolean,attribute:`hidden`,reflect:!0,converter:q})],e.prototype,`visible`,void 0),jl([H({type:Array})],e.prototype,`items`,void 0),jl([H({type:Array})],e.prototype,`selectedIndex`,void 0),jl([H({type:Array})],e.prototype,`value`,void 0),jl([Ra(`.kuc-mobile-checkbox-1-25-0__group__select-menu__item__input`)],e.prototype,`_inputEls`,void 0),jl([U()],e.prototype,`_valueMapping`,void 0),window.customElements.define(`kuc-mobile-checkbox-1-25-0`,e),X(Al),Ml=e})();var Nl=`
  kuc-mobile-dropdown-1-25-0,
  kuc-mobile-dropdown-1-25-0 * {
    font-size: 13px;
    color: #333333;
    font-family: "メイリオ", Meiryo, "Hiragino Kaku Gothic ProN",
      "ヒラギノ角ゴ ProN W3", "ＭＳ Ｐゴシック", "Lucida Grande",
      "Lucida Sans Unicode", Arial, Verdana, sans-serif;
  }
  kuc-mobile-dropdown-1-25-0:lang(es),
  kuc-mobile-dropdown-1-25-0:lang(es) * {
    font-family: sans-serif;
  }
  kuc-mobile-dropdown-1-25-0:lang(zh),
  kuc-mobile-dropdown-1-25-0:lang(zh) * {
    font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,
      Hei, "Heiti SC", "Lucida Grande", "Lucida Sans Unicode", Arial,
      Verdana, sans-serif;
  }
  kuc-mobile-dropdown-1-25-0:lang(zh-TW),
  kuc-mobile-dropdown-1-25-0:lang(zh-TW) * {
      font-family: "微軟正黒體","Microsoft JhengHei","新宋体",NSimSun,STHeiti,
      Hei,"Heiti SC","Lucida Grande","Lucida Sans Unicode",Arial,
      Verdana,sans-serif
  }
  kuc-mobile-dropdown-1-25-0 {
    display: inline-block;
    width: 100%;
  }

  kuc-mobile-dropdown-1-25-0[hidden] {
    display: none;
  }

  .kuc-mobile-dropdown-1-25-0__label {
    display: inline-block;
    font-size: 86%;
    font-weight: bold;
    line-height: 1.5;
    padding: 0px;
    margin: 0 0 4px 0;
    white-space: nowrap;
  }

  .kuc-mobile-dropdown-1-25-0__label[hidden] {
    display: none;
  }

  .kuc-mobile-dropdown-1-25-0__input-form {
    word-wrap: break-word;
    min-height: 1em;
    padding-left: 0.5em;
    padding-right: 0.5em;
  }

  .kuc-mobile-dropdown-1-25-0__input-form__select {
    display: inline-block;
    border-radius: 0.4em;
    max-width: 100%;
  }

  .kuc-mobile-dropdown-1-25-0__input-form__select.kuc--required {
    border: 1px solid #cf4a38;
  }

  .kuc-mobile-dropdown-1-25-0__input-form__select__input {
    min-width: 100px;
    max-width: 100%;
  }

  .kuc-mobile-dropdown-1-25-0__input-form__select__input:disabled {
    color: #999999;
    -webkit-text-fill-color: #999999;
    background-color: #d5d7d9;
    opacity: 1;
  }
`,Pl=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},Fl;(()=>{if(Fl=window.customElements.get(`kuc-mobile-dropdown-1-25-0`),Fl)return;class e extends J{constructor(e){super(),this.className=``,this.error=``,this.id=``,this.label=``,this.value=``,this.selectedIndex=-1,this.disabled=!1,this.requiredIcon=!1,this.visible=!0,this.items=[],this._hasValueInItems=!1,this._GUID=Z();let t=Q(e);this._setInitialValue(t),Object.assign(this,t)}_setInitialValue(e){let t=`value`in e,n=`selectedIndex`in e;!t&&n&&(this.value=this._getValue(e)||``)}_handleChangeInput(e){e.stopPropagation();let t=e.target,n=t.value;if(this.value===n&&this.selectedIndex===t.selectedIndex)return;let r={oldValue:this.value,value:n};this.value=n,this.selectedIndex=t.selectedIndex,Y(this,`change`,r)}shouldUpdate(e){return e.has(`items`)&&!$(this.items)?(this.throwErrorAfterUpdateComplete(G.ITEMS.IS_NOT_ARRAY),!1):e.has(`value`)&&!ls(this.value)?(this.throwErrorAfterUpdateComplete(G.VALUE.IS_NOT_STRING),!1):e.has(`selectedIndex`)&&!gs(this.selectedIndex)?(this.throwErrorAfterUpdateComplete(G.SELECTED_INDEX.IS_NOT_NUMBER),!1):!0}willUpdate(e){if((e.has(`items`)||e.has(`value`))&&(this._hasValueInItems=this.items.some(e=>e.value===this.value)),e.has(`value`)){if(this.value!==``||this._hasValueInItems)return;this.selectedIndex=-1}}update(e){(e.has(`items`)||e.has(`value`)||e.has(`selectedIndex`))&&(this.selectedIndex=this._getSelectedIndex(),this.value=this._getValue({items:this.items,selectedIndex:this.selectedIndex})||``),super.update(e)}_getSelectedIndex(){if(!this.value&&!this._hasValueInItems)return this.items[this.selectedIndex]?this.selectedIndex:-1;let e=this.items.findIndex(e=>e.value===this.value);if(e===-1)return-1;let t=this.items.findIndex((e,t)=>e.value===this.value&&t===this.selectedIndex);return t>-1?t:e}_getValue(e){let t=(e.items||[])[e.selectedIndex===0||e.selectedIndex?e.selectedIndex:-1];return t?t.value:``}_isCheckedItem(e,t){return this.value?e.value===this.value&&this.selectedIndex===t:this.selectedIndex===t}_getItemTemplate(e,t){let n=this._isCheckedItem(e,t);return B`
        <option
          value="${e.value||``}"
          ?selected="${n}"
          ?disabled="${e.disabled}"
        >
          ${e.label===void 0?e.value:e.label}
        </option>
      `}render(){return B`
        <label
          class="kuc-mobile-dropdown-1-25-0__label"
          for="${this._GUID}-label"
          ?hidden="${!this.label}"
        >
          <kuc-base-mobile-label-1-25-0
            .text="${this.label}"
            .requiredIcon="${this.requiredIcon}"
          ></kuc-base-mobile-label-1-25-0>
        </label>
        <div class="kuc-mobile-dropdown-1-25-0__input-form">
          <div
            class="kuc-mobile-dropdown-1-25-0__input-form__select
            ${this.requiredIcon?`kuc--required`:``}"
          >
            <select
              class="kuc-mobile-dropdown-1-25-0__input-form__select__input"
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
        <kuc-base-mobile-error-1-25-0
          .text="${this.error}"
          .guid="${this._GUID}"
          ariaLive="assertive"
        >
        </kuc-base-mobile-error-1-25-0>
      `}updated(e){e.has(`selectedIndex`)&&(this._selectEl.selectedIndex=this.selectedIndex),super.update(e)}}Pl([H({type:String,reflect:!0,attribute:`class`})],e.prototype,`className`,void 0),Pl([H({type:String})],e.prototype,`error`,void 0),Pl([H({type:String,reflect:!0,attribute:`id`})],e.prototype,`id`,void 0),Pl([H({type:String})],e.prototype,`label`,void 0),Pl([H({type:String})],e.prototype,`value`,void 0),Pl([H({type:Number})],e.prototype,`selectedIndex`,void 0),Pl([H({type:Boolean})],e.prototype,`disabled`,void 0),Pl([H({type:Boolean})],e.prototype,`requiredIcon`,void 0),Pl([H({type:Boolean,attribute:`hidden`,reflect:!0,converter:q})],e.prototype,`visible`,void 0),Pl([H({type:Array})],e.prototype,`items`,void 0),Pl([W(`.kuc-mobile-dropdown-1-25-0__input-form__select__input`)],e.prototype,`_selectEl`,void 0),window.customElements.define(`kuc-mobile-dropdown-1-25-0`,e),X(Nl),Fl=e})();var Il=`
  kuc-mobile-multi-choice-1-25-0,
  kuc-mobile-multi-choice-1-25-0 * {
    font-size: 13px;
    color: #333333;
    font-family: "メイリオ", Meiryo, "Hiragino Kaku Gothic ProN",
      "ヒラギノ角ゴ ProN W3", "ＭＳ Ｐゴシック", "Lucida Grande",
      "Lucida Sans Unicode", Arial, Verdana, sans-serif;
  }
  kuc-mobile-multi-choice-1-25-0:lang(es),
  kuc-mobile-multi-choice-1-25-0:lang(es) * {
    font-family: sans-serif;
  }
  kuc-mobile-multi-choice-1-25-0:lang(zh),
  kuc-mobile-multi-choice-1-25-0:lang(zh) * {
    font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,
      Hei, "Heiti SC", "Lucida Grande", "Lucida Sans Unicode", Arial,
      Verdana, sans-serif;
  }
  kuc-mobile-multi-choice-1-25-0:lang(zh-TW),
  kuc-mobile-multi-choice-1-25-0:lang(zh-TW) * {
      font-family: "微軟正黒體","Microsoft JhengHei","新宋体",NSimSun,STHeiti,
      Hei,"Heiti SC","Lucida Grande","Lucida Sans Unicode",Arial,
      Verdana,sans-serif
  }
  kuc-mobile-multi-choice-1-25-0 {
    display: inline-block;
    width: 100%;
  }

  kuc-mobile-multi-choice-1-25-0[hidden] {
    display: none;
  }

  .kuc-mobile-multi-choice-1-25-0__label {
    display: inline-block;
    font-size: 86%;
    font-weight: bold;
    line-height: 1.5;
    padding: 0px;
    margin: 0 0 4px 0;
    white-space: nowrap;
  }

  .kuc-mobile-multi-choice-1-25-0__label[hidden] {
    display: none;
  }

  .kuc-mobile-multi-choice-1-25-0__input-form {
    word-wrap: break-word;
    min-height: 1em;
    padding-left: 0.5em;
    padding-right: 0.5em;
  }

  .kuc-mobile-multi-choice-1-25-0__input-form__select {
    display: inline-block;
    border-radius: 0.4em;
    max-width: 100%;
  }

  .kuc-mobile-multi-choice-1-25-0__input-form__select.kuc--required {
    border: 1px solid #cf4a38;
  }

  .kuc-mobile-multi-choice-1-25-0__input-form__select__input {
    min-width: 100px;
    max-width: 100%;
  }

  .kuc-mobile-multi-choice-1-25-0__input-form__select__input:disabled {
    color: #999999;
    -webkit-text-fill-color: #999999;
    background-color: #d5d7d9;
    opacity: 1;
  }

  .kuc-mobile-multi-choice-1-25-0__input-form__select__input option:disabled {
    color: #999999;
    -webkit-text-fill-color: #999999;
    background-color: #d5d7d9;
    opacity: 1;
  }

  .kuc-mobile-multi-choice-1-25-0__input-form__select__input option:disabled[selected] {
    background-color: #cecece; /* Chrome */
    background-color: -moz-cellhighlight; /* Firefox */
    opacity: 1;
  }

  .kuc-mobile-multi-choice-1-25-0__input-form__select__input:disabled option {
    color: #999999;
    -webkit-text-fill-color: #999999;
  }
`,Ll=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},Rl;(()=>{if(Rl=window.customElements.get(`kuc-mobile-multi-choice-1-25-0`),Rl)return;class e extends J{constructor(e){super(),this.className=``,this.error=``,this.id=``,this.label=``,this.disabled=!1,this.requiredIcon=!1,this.visible=!0,this.items=[],this.selectedIndex=[],this.value=[],this._valueMapping={},this._GUID=Z();let t=Q(e);this._setInitialValue(t),Object.assign(this,t)}_setInitialValue(e){let t=`value`in e,n=`selectedIndex`in e,r=e.selectedIndex||[];if(!t&&n){if(!$(r))return;let t=this._getValueMapping(e);this.value=this._getValidValue(t,r)}}_handleChangeInput(e){e.stopPropagation();let t=e.target,n=this.value?[...this.value]:this.value,r=Array.from(t.selectedOptions,e=>e.value),i=Array.from(t.selectedOptions,e=>e.dataset.index),a={value:r,oldValue:n};this.value=r,this.selectedIndex=i.map(e=>e?parseInt(e,10):0),Y(this,`change`,a)}shouldUpdate(e){return e.has(`items`)&&!$(this.items)?(this.throwErrorAfterUpdateComplete(G.ITEMS.IS_NOT_ARRAY),!1):e.has(`value`)&&!$(this.value)?(this.throwErrorAfterUpdateComplete(G.VALUE.IS_NOT_ARRAY),!1):e.has(`selectedIndex`)&&!$(this.selectedIndex)?(this.throwErrorAfterUpdateComplete(G.SELECTED_INDEX.IS_NOT_ARRAY),!1):!0}willUpdate(e){if(e.has(`value`)){if(this.value.length>0)return;this.selectedIndex=[]}}update(e){(e.has(`items`)||e.has(`value`)||e.has(`selectedIndex`))&&(this._valueMapping=this._getValueMapping({items:this.items,value:this.value,selectedIndex:this.selectedIndex}),this._setValueAndSelectedIndex()),super.update(e)}_getValueMapping(e){let t=e.items||[],n=e.value||[],r=e.selectedIndex||[],i=t.map(e=>e.value||``),a=Object.assign({},i),o={};if(n.length===0){let e=this._getValidValue(a,r);return r.forEach((t,n)=>o[t]=e[n]),o}return this._getValidSelectedIndex(a).forEach((e,t)=>o[e]=n[t]),o}_getValidValue(e,t){return t.filter(t=>e[t]).map(t=>e[t])}_getValidSelectedIndex(e){let t=[];for(let n=0;n<this.value.length;n++){let r=this.selectedIndex[n];if(e[r]===this.value[n]){t.push(r);continue}let i=this.items.findIndex(e=>e.value===this.value[n]);t.push(i)}return t}_setValueAndSelectedIndex(){this.value=Object.values(this._valueMapping),this.selectedIndex=Object.keys(this._valueMapping).map(e=>parseInt(e,10))}_isCheckedItem(e,t){let n=Object.values(this._valueMapping),r=Object.keys(this._valueMapping);return n.filter((n,i)=>n===e.value&&t===parseInt(r[i],10)).length>0}_getItemTemplate(e,t){let n=this._isCheckedItem(e,t);return B`
        <option
          value="${e.value||``}"
          data-index="${t}"
          ?selected="${e.value===void 0?!1:n}"
          ?disabled="${e.disabled}"
        >
          ${e.label===void 0?e.value:e.label}
        </option>
      `}render(){return B`
        <label
          class="kuc-mobile-multi-choice-1-25-0__label"
          for="${this._GUID}-label"
          ?hidden="${!this.label}"
        >
          <kuc-base-mobile-label-1-25-0
            .text="${this.label}"
            .requiredIcon="${this.requiredIcon}"
          ></kuc-base-mobile-label-1-25-0>
        </label>
        <div class="kuc-mobile-multi-choice-1-25-0__input-form">
          <div
            class="kuc-mobile-multi-choice-1-25-0__input-form__select
            ${this.requiredIcon?`kuc--required`:``}"
          >
            <select
              class="kuc-mobile-multi-choice-1-25-0__input-form__select__input"
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
        <kuc-base-mobile-error-1-25-0
          .text="${this.error}"
          .guid="${this._GUID}"
          ariaLive="assertive"
        >
        </kuc-base-mobile-error-1-25-0>
      `}}Ll([H({type:String,reflect:!0,attribute:`class`})],e.prototype,`className`,void 0),Ll([H({type:String})],e.prototype,`error`,void 0),Ll([H({type:String,reflect:!0,attribute:`id`})],e.prototype,`id`,void 0),Ll([H({type:String})],e.prototype,`label`,void 0),Ll([H({type:Boolean})],e.prototype,`disabled`,void 0),Ll([H({type:Boolean})],e.prototype,`requiredIcon`,void 0),Ll([H({type:Boolean,attribute:`hidden`,reflect:!0,converter:q})],e.prototype,`visible`,void 0),Ll([H({type:Array})],e.prototype,`items`,void 0),Ll([H({type:Array})],e.prototype,`selectedIndex`,void 0),Ll([H({type:Array})],e.prototype,`value`,void 0),Ll([U()],e.prototype,`_valueMapping`,void 0),window.customElements.define(`kuc-mobile-multi-choice-1-25-0`,e),X(Il),Rl=e})();var zl=`
  kuc-mobile-radio-button-1-25-0,
  kuc-mobile-radio-button-1-25-0 * {
    font-size: 13px;
    color: #333333;
    font-family: "メイリオ", Meiryo, "Hiragino Kaku Gothic ProN",
      "ヒラギノ角ゴ ProN W3", "ＭＳ Ｐゴシック", "Lucida Grande",
      "Lucida Sans Unicode", Arial, Verdana, sans-serif;
  }
  kuc-mobile-radio-button-1-25-0:lang(es),
  kuc-mobile-radio-button-1-25-0:lang(es) * {
    font-family: sans-serif;
  }
  kuc-mobile-radio-button-1-25-0:lang(zh) ,
  kuc-mobile-radio-button-1-25-0:lang(zh) * {
    font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,
      Hei, "Heiti SC", "Lucida Grande", "Lucida Sans Unicode", Arial,
      Verdana, sans-serif;
  }
  kuc-mobile-radio-button-1-25-0:lang(zh-TW),
  kuc-mobile-radio-button-1-25-0:lang(zh-TW) * {
      font-family: "微軟正黒體","Microsoft JhengHei","新宋体",NSimSun,STHeiti,
      Hei,"Heiti SC","Lucida Grande","Lucida Sans Unicode",Arial,
      Verdana,sans-serif
  }
  kuc-mobile-radio-button-1-25-0 {
    width: 100%;
    display: inline-block;
  }

  kuc-mobile-radio-button-1-25-0[hidden] {
    display: none;
  }

  .kuc-mobile-radio-button-1-25-0__group {
    border: none;
    height: auto;
    display: inline-block;
    width: 100%;
    vertical-align: top;
  }

  .kuc-mobile-radio-button-1-25-0__group__label {
    display: inline-block;
    font-size: 86%;
    font-weight: bold;
    line-height: 1.5;
    padding: 0px;
    margin: 0 0 4px 0;
    white-space: nowrap;
  }

  .kuc-mobile-radio-button-1-25-0__group__label[hidden] {
    display: none;
  }

  .kuc-mobile-radio-button-1-25-0__group__select-menu {
    margin-right: 0.5em;
    margin-left: 0.5em;
  }

  .kuc-mobile-radio-button-1-25-0__group__select-menu[bordervisible] {
    border-color: #b3b3b3;
    border-width: 1px;
    border-style: solid;
    border-radius: 0.4em;
  }

  .kuc-mobile-radio-button-1-25-0__group__select-menu__item {
    border: 1px solid transparent;
    position: relative;
    white-space: normal;
    word-wrap: normal;
    height: 45px;
    display: block;
  }

  .kuc-mobile-radio-button-1-25-0__group__select-menu[bordervisible]
    .kuc-mobile-radio-button-1-25-0__group__select-menu__item {
    border-bottom: 1px solid #b3b3b3;
  }

  .kuc-mobile-radio-button-1-25-0__group__select-menu[bordervisible]
    .kuc-mobile-radio-button-1-25-0__group__select-menu__item:last-child {
    border-bottom: 0px;
  }

  .kuc-mobile-radio-button-1-25-0__group__select-menu__item__input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
  }

  .kuc-mobile-radio-button-1-25-0__group__select-menu__item__label__icon {
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

  .kuc-mobile-radio-button-1-25-0__group__select-menu__item__label__value {
    height: 45px;
    line-height: 45px;
    padding-left: 35px;
  }

  .kuc-mobile-radio-button-1-25-0__group__select-menu[disabled], 
  .kuc-mobile-radio-button-1-25-0__group__select-menu__item--disabled {
    background-color: #d5d7d9;
    color: #999999;
    -webkit-text-fill-color: #999999;
    background-color: #d5d7d9;
    opacity: 1;
  }
  .kuc-mobile-radio-button-1-25-0__group__select-menu[bordervisible]
  .kuc-mobile-radio-button-1-25-0__group__select-menu__item--disabled:last-child {
    border-bottom-left-radius: 0.3em;
    border-bottom-right-radius: 0.3em;
  }
  .kuc-mobile-radio-button-1-25-0__group__select-menu[bordervisible]
  .kuc-mobile-radio-button-1-25-0__group__select-menu__item--disabled:first-child {
    border-top-left-radius: 0.3em;
    border-top-right-radius: 0.3em;
  }

  .kuc-mobile-radio-button-1-25-0__group__select-menu__item__label {
    position: absolute;
    white-space: nowrap;
    width: 100%;
    top: 50%;
    transform: translateY(-50%);
    height: 100%;
    padding: 0px;
  }
`,Bl=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},Vl;(()=>{if(Vl=window.customElements.get(`kuc-mobile-radio-button-1-25-0`),Vl)return;class e extends J{constructor(e){super(),this.className=``,this.error=``,this.id=``,this.label=``,this.value=``,this.selectedIndex=-1,this.borderVisible=!0,this.disabled=!1,this.requiredIcon=!1,this.visible=!0,this.items=[],this._GUID=Z();let t=Q(e);this._setInitialValue(t),Object.assign(this,t)}_setInitialValue(e){let t=`value`in e,n=`selectedIndex`in e;!t&&n&&(this.value=this._getValue(e)||``)}willUpdate(e){if(e.has(`value`)){if(this.value!==``)return;this.selectedIndex=-1}}_handleChangeInput(e){e.stopPropagation();let t=e.target,n=t.value,r=t.dataset.index||`0`,i=parseInt(r,10);if(this.value===n&&this.selectedIndex===i)return;let a={oldValue:this.value,value:n};this.value=n,this.selectedIndex=i,Y(this,`change`,a)}_getRadioIconSvgTemplate(e,t){return V`
      <svg
        class="kuc-mobile-radio-button-1-25-0__group__select-menu__item__label__icon"
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
        ${t?V`<circle cx="10.5" cy="10.5" r="6.5" fill="${`#5b5b5b`}"/>`:``}
      </svg>
    `}_isCheckedItem(e,t){return this.value?e.value===this.value&&this.selectedIndex===t:this.selectedIndex===t}_getItemTemplate(e,t){let n=this._isCheckedItem(e,t);return B`
        <div
          class="kuc-mobile-radio-button-1-25-0__group__select-menu__item${e.disabled?` kuc-mobile-radio-button-1-25-0__group__select-menu__item--disabled`:``}"
        >
          <input
            type="radio"
            aria-describedby="${this._GUID}-error"
            id="${this._GUID}-item-${t}"
            data-index="${t}"
            class="kuc-mobile-radio-button-1-25-0__group__select-menu__item__input"
            name="${this._GUID}-group"
            value="${e.value===void 0?``:e.value}"
            aria-invalid="${this.error!==``}"
            aria-required="${this.requiredIcon}"
            ?disabled="${this.disabled||e.disabled}"
            @change="${this._handleChangeInput}"
          />
          <label
            class="kuc-mobile-radio-button-1-25-0__group__select-menu__item__label"
            for="${this._GUID}-item-${t}"
            >${this._getRadioIconSvgTemplate(this.disabled,n)}
            <div
              class="kuc-mobile-radio-button-1-25-0__group__select-menu__item__label__value"
            >
              ${e.label===void 0?e.value:e.label}
            </div>
          </label>
        </div>
      `}shouldUpdate(e){return e.has(`items`)&&!$(this.items)?(this.throwErrorAfterUpdateComplete(G.ITEMS.IS_NOT_ARRAY),!1):e.has(`value`)&&!ls(this.value)?(this.throwErrorAfterUpdateComplete(G.VALUE.IS_NOT_STRING),!1):e.has(`selectedIndex`)&&!gs(this.selectedIndex)?(this.throwErrorAfterUpdateComplete(G.SELECTED_INDEX.IS_NOT_NUMBER),!1):!0}update(e){(e.has(`items`)||e.has(`value`)||e.has(`selectedIndex`))&&(this.selectedIndex=this._getSelectedIndex(),this.value=this._getValue({items:this.items,selectedIndex:this.selectedIndex})||``),super.update(e)}render(){return B`
        <div class="kuc-mobile-radio-button-1-25-0__group">
          <div
            class="kuc-mobile-radio-button-1-25-0__group__label"
            ?hidden="${!this.label}"
          >
            <kuc-base-mobile-label-1-25-0
              .text="${this.label}"
              .requiredIcon="${this.requiredIcon}"
            ></kuc-base-mobile-label-1-25-0>
          </div>
          <div
            class="kuc-mobile-radio-button-1-25-0__group__select-menu"
            ?borderVisible="${this.borderVisible}"
            ?disabled="${this.disabled}"
          >
            ${this.items.map((e,t)=>this._getItemTemplate(e,t))}
          </div>
          <kuc-base-mobile-error-1-25-0
            .text="${this.error}"
            .guid="${this._GUID}"
            ariaLive="assertive"
          >
          </kuc-base-mobile-error-1-25-0>
        </div>
      `}updated(){this._inputEls.forEach((e,t)=>{e.checked=this.value===e.value&&t===this.selectedIndex})}_getSelectedIndex(){if(!this.value)return this.items[this.selectedIndex]?this.selectedIndex:-1;let e=this.items.findIndex(e=>e.value===this.value);if(e===-1)return-1;let t=this.items.findIndex((e,t)=>e.value===this.value&&t===this.selectedIndex);return t>-1?t:e}_getValue(e){let t=(e.items||[])[e.selectedIndex===0||e.selectedIndex?e.selectedIndex:-1];return t?t.value:``}}Bl([H({type:String,reflect:!0,attribute:`class`})],e.prototype,`className`,void 0),Bl([H({type:String})],e.prototype,`error`,void 0),Bl([H({type:String,reflect:!0,attribute:`id`})],e.prototype,`id`,void 0),Bl([H({type:String})],e.prototype,`label`,void 0),Bl([H({type:String})],e.prototype,`value`,void 0),Bl([H({type:Number})],e.prototype,`selectedIndex`,void 0),Bl([H({type:Boolean})],e.prototype,`borderVisible`,void 0),Bl([H({type:Boolean})],e.prototype,`disabled`,void 0),Bl([H({type:Boolean})],e.prototype,`requiredIcon`,void 0),Bl([H({type:Boolean,attribute:`hidden`,reflect:!0,converter:q})],e.prototype,`visible`,void 0),Bl([H({type:Array})],e.prototype,`items`,void 0),Bl([Ra(`.kuc-mobile-radio-button-1-25-0__group__select-menu__item__input`)],e.prototype,`_inputEls`,void 0),window.customElements.define(`kuc-mobile-radio-button-1-25-0`,e),X(zl),Vl=e})();var Hl=`
  kuc-mobile-text-1-25-0,
  kuc-mobile-text-1-25-0 * {
    font-size: 13px;
    font-family: "メイリオ", Meiryo, "Hiragino Kaku Gothic ProN",
      "ヒラギノ角ゴ ProN W3", "ＭＳ Ｐゴシック", "Lucida Grande",
      "Lucida Sans Unicode", Arial, Verdana, sans-serif;
  }
  kuc-mobile-text-1-25-0:lang(es),
  kuc-mobile-text-1-25-0:lang(es) * {
    font-family: sans-serif;
  }
  kuc-mobile-text-1-25-0:lang(zh),
  kuc-mobile-text-1-25-0:lang(zh) * {
    font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,
      Hei, "Heiti SC", "Lucida Grande", "Lucida Sans Unicode", Arial,
      Verdana, sans-serif;
  }
  kuc-mobile-text-1-25-0:lang(zh-TW),
  kuc-mobile-text-1-25-0:lang(zh-TW) * {
      font-family: "微軟正黒體","Microsoft JhengHei","新宋体",NSimSun,STHeiti,
      Hei,"Heiti SC","Lucida Grande","Lucida Sans Unicode",Arial,
      Verdana,sans-serif
  }
  kuc-mobile-text-1-25-0 {
    display: block;
  }
  kuc-mobile-text-1-25-0[hidden] {
    display: none;
  }
  .kuc-mobile-text-1-25-0__label {
    display: inline-block;
    font-weight: bold;
    line-height: 1.5;
    padding: 0;
    margin: 0 0 4px 0;
    white-space: nowrap;
  }
  .kuc-mobile-text-1-25-0__label[hidden] {
    display: none;
  }
  .kuc-mobile-text-1-25-0__input-form {
    padding-left: 0.5em;
    padding-right: 0.5em;
    display: flex;
    align-items: center;
  }
  .kuc-mobile-text-1-25-0__input-form__prefix {
    margin-right: 4px;
    color: #888888;
  }
  .kuc-mobile-text-1-25-0__input-form__prefix[hidden] {
    display: none;
  }
  .kuc-mobile-text-1-25-0__input-form__input {
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
  .kuc-mobile-text-1-25-0__input-form__input[aria-required="true"] {
    border: 1px solid #cf4a38;
  }
  .kuc-mobile-text-1-25-0__input-form__input[textAlign="right"] {
    text-align: right;
  }
  .kuc-mobile-text-1-25-0__input-form__input:disabled {
    color: #999999;
    background-color: #d5d7d9;
    -webkit-text-fill-color: #999999;
    opacity: 1;
    -webkit-opacity: 1;
  }
  .kuc-mobile-text-1-25-0__input-form__suffix {
    margin-left: 4px;
    color: #888888;
  }
  .kuc-mobile-text-1-25-0__input-form__suffix[hidden] {
    display: none;
  }
`,Ul=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},Wl;(()=>{if(Wl=window.customElements.get(`kuc-mobile-text-1-25-0`),Wl)return;class e extends J{constructor(e){super(),this.className=``,this.error=``,this.id=``,this.label=``,this.placeholder=``,this.prefix=``,this.suffix=``,this.textAlign=`left`,this.value=``,this.disabled=!1,this.requiredIcon=!1,this.visible=!0,this._GUID=Z();let t=Q(e);Object.assign(this,t)}_handleFocusInput(e){let t={value:this.value};Y(this,`focus`,t)}_handleChangeInput(e){e.stopPropagation();let t=e.target,n={value:``,oldValue:this.value};this.value=t.value,n.value=this.value,Y(this,`change`,n)}_handleInputText(e){e.stopPropagation();let t={value:e.target.value,data:e.data};Y(this,`input`,t)}render(){return B`
        <label
          class="kuc-mobile-text-1-25-0__label"
          for="${this._GUID}-label"
          ?hidden="${!this.label}"
        >
          <kuc-base-mobile-label-1-25-0
            .requiredIcon="${this.requiredIcon}"
            .text="${this.label}"
          ></kuc-base-mobile-label-1-25-0>
        </label>
        <div class="kuc-mobile-text-1-25-0__input-form">
          <span
            class="kuc-mobile-text-1-25-0__input-form__prefix"
            ?hidden="${!this.prefix}"
            >${this.prefix}</span
          >
          <input
            class="kuc-mobile-text-1-25-0__input-form__input"
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
            class="kuc-mobile-text-1-25-0__input-form__suffix"
            ?hidden="${!this.suffix}"
            >${this.suffix}</span
          >
        </div>
        <kuc-base-mobile-error-1-25-0 .guid="${this._GUID}" .text="${this.error}">
        </kuc-base-mobile-error-1-25-0>
      `}}Ul([H({type:String,reflect:!0,attribute:`class`})],e.prototype,`className`,void 0),Ul([H({type:String})],e.prototype,`error`,void 0),Ul([H({type:String,reflect:!0,attribute:`id`})],e.prototype,`id`,void 0),Ul([H({type:String})],e.prototype,`label`,void 0),Ul([H({type:String})],e.prototype,`placeholder`,void 0),Ul([H({type:String})],e.prototype,`prefix`,void 0),Ul([H({type:String})],e.prototype,`suffix`,void 0),Ul([H({type:String})],e.prototype,`textAlign`,void 0),Ul([H({type:String})],e.prototype,`value`,void 0),Ul([H({type:Boolean})],e.prototype,`disabled`,void 0),Ul([H({type:Boolean})],e.prototype,`requiredIcon`,void 0),Ul([H({type:Boolean,attribute:`hidden`,reflect:!0,converter:q})],e.prototype,`visible`,void 0),window.customElements.define(`kuc-mobile-text-1-25-0`,e),X(Hl),Wl=e})();var Gl=`
  kuc-mobile-textarea-1-25-0,
  kuc-mobile-textarea-1-25-0 * {
    font-size: 13px;
    font-family: "メイリオ", Meiryo, "Hiragino Kaku Gothic ProN",
      "ヒラギノ角ゴ ProN W3", "ＭＳ Ｐゴシック", "Lucida Grande",
      "Lucida Sans Unicode", Arial, Verdana, sans-serif;
  }
  kuc-mobile-textarea-1-25-0:lang(es),
  kuc-mobile-textarea-1-25-0:lang(es) * {
    font-family: sans-serif;
  }
  kuc-mobile-textarea-1-25-0:lang(zh),
  kuc-mobile-textarea-1-25-0:lang(zh) * {
    font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,
      Hei, "Heiti SC", "Lucida Grande", "Lucida Sans Unicode", Arial,
      Verdana, sans-serif;
  }
  kuc-mobile-textarea-1-25-0:lang(zh-TW),
  kuc-mobile-textarea-1-25-0:lang(zh-TW) * {
      font-family: "微軟正黒體","Microsoft JhengHei","新宋体",NSimSun,STHeiti,
      Hei,"Heiti SC","Lucida Grande","Lucida Sans Unicode",Arial,
      Verdana,sans-serif
  }
  kuc-mobile-textarea-1-25-0 {
    display: block;
  }
  kuc-mobile-textarea-1-25-0[hidden] {
    display: none;
  }
  .kuc-mobile-textarea-1-25-0__label {
    padding: 0;
    margin: 0 0 4px 0;
    display: inline-block;
    font-weight: bold;
    line-height: 1.5;
    white-space: nowrap;
  }
  .kuc-mobile-textarea-1-25-0__label[hidden] {
    display: none;
  }
  .kuc-mobile-textarea-1-25-0__form {
    padding-left: 0.5em;
    padding-right: 0.5em;
  }
  .kuc-mobile-textarea-1-25-0__form__textarea {
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
  .kuc-mobile-textarea-1-25-0__form__textarea[aria-required="true"] {
    border: 1px solid #cf4a38;
  }
  .kuc-mobile-textarea-1-25-0__form__textarea:disabled {
    color: #999999;
    background-color: #d5d7d9;
    opacity: 1;
  }
`,Kl=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},ql;(()=>{if(ql=window.customElements.get(`kuc-mobile-textarea-1-25-0`),ql)return;class e extends J{constructor(e){super(),this.className=``,this.error=``,this.id=``,this.label=``,this.placeholder=``,this.value=``,this.disabled=!1,this.requiredIcon=!1,this.visible=!0,this._GUID=Z();let t=Q(e);Object.assign(this,t)}_handleFocusInput(e){let t={value:this.value};Y(this,`focus`,t)}_handleChangeInput(e){e.stopPropagation();let t=e.target,n={value:``,oldValue:this.value};this.value=t.value,n.value=this.value,Y(this,`change`,n)}_handleInputTextArea(e){e.stopPropagation();let t={value:e.target.value,data:e.data};Y(this,`input`,t)}render(){return B`
        <label
          class="kuc-mobile-textarea-1-25-0__label"
          for="${this._GUID}-label"
          ?hidden="${!this.label}"
        >
          <kuc-base-mobile-label-1-25-0
            .requiredIcon="${this.requiredIcon}"
            .text="${this.label}"
          ></kuc-base-mobile-label-1-25-0>
        </label>
        <div class="kuc-mobile-textarea-1-25-0__form">
          <textarea
            class="kuc-mobile-textarea-1-25-0__form__textarea"
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
        <kuc-base-mobile-error-1-25-0 .guid="${this._GUID}" .text="${this.error}">
        </kuc-base-mobile-error-1-25-0>
      `}}Kl([H({type:String,reflect:!0,attribute:`class`})],e.prototype,`className`,void 0),Kl([H({type:String})],e.prototype,`error`,void 0),Kl([H({type:String,reflect:!0,attribute:`id`})],e.prototype,`id`,void 0),Kl([H({type:String})],e.prototype,`label`,void 0),Kl([H({type:String})],e.prototype,`placeholder`,void 0),Kl([H({type:String})],e.prototype,`value`,void 0),Kl([H({type:Boolean})],e.prototype,`disabled`,void 0),Kl([H({type:Boolean})],e.prototype,`requiredIcon`,void 0),Kl([H({type:Boolean,attribute:`hidden`,reflect:!0,converter:q})],e.prototype,`visible`,void 0),window.customElements.define(`kuc-mobile-textarea-1-25-0`,e),X(Gl),ql=e})();var Jl=`
  kuc-mobile-notification-1-25-0 {
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
  }
  kuc-mobile-notification-1-25-0:lang(es),
  kuc-mobile-notification-1-25-0:lang(es) * {
    font-family: sans-serif;
  }
  kuc-mobile-notification-1-25-0:lang(zh),
  kuc-mobile-notification-1-25-0:lang(zh) * {
    font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,
      Hei, "Heiti SC", "Lucida Grande", "Lucida Sans Unicode", Arial,
      Verdana, sans-serif;
  }
  kuc-mobile-notification-1-25-0:lang(zh-TW),
  kuc-mobile-notification-1-25-0:lang(zh-TW) * {
      font-family: "微軟正黒體","Microsoft JhengHei","新宋体",NSimSun,STHeiti,
      Hei,"Heiti SC","Lucida Grande","Lucida Sans Unicode",Arial,
      Verdana,sans-serif
  }
  .kuc-mobile-notification-fadein-1-25-0 {
    animation-name: kuc-mobile-notification-fade-in-1-25-0;
    animation-duration: 250ms;
    animation-timing-function: ease-out;
    width: 100%;
    position: fixed;
    visibility: visible;
  }

  .kuc-mobile-notification-fadeout-1-25-0 {
    animation-name: kuc-mobile-notification-fade-out-1-25-0;
    animation-duration: 250ms;
    animation-timing-function: ease-out;
    width: 100%;
    position: fixed;
  }

  .kuc-mobile-notification-1-25-0__notification {
    background-color: #ffffcf;
    background: linear-gradient(#ffda4a, #ffc32c);
    width: 100%;
    min-height: 48px;
    z-index: 20;
    font-size: 12px;
    font-weight: 700;
    line-height: 14px;
    text-shadow: rgba(255, 255, 255, 0.5) 0 1px 0;
    color: #333333;
    text-align: center;
    vertical-align: top;
  }

  .kuc-mobile-notification-1-25-0__notification__title {
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

  .kuc-mobile-notification-1-25-0__notification__title--html {
    white-space: normal;
  }

  .kuc-mobile-notification-1-25-0__notification__close-button {
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
  @keyframes kuc-mobile-notification-fade-in-1-25-0 {
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
  @keyframes kuc-mobile-notification-fade-out-1-25-0 {
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
`,Yl=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},Xl;(()=>{if(Xl=window.customElements.get(`kuc-mobile-notification-1-25-0`),Xl)return;class e extends J{constructor(e){super(),this.className=``,this.id=``,this.text=``,this.duration=-1,this.container=document.body,this.content=``,this._isOpened=!1,this._content=``;let t=Q(e);Object.assign(this,t)}_handleClickCloseButton(e){this.close()}_getCloseButtonSvgTemplate(){return V`
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
      `}_setAutoCloseTimer(){this._clearAutoCloseTimer(),!(!Number.isFinite(this.duration)||this.duration<0)&&(this._timeoutID=window.setTimeout(()=>{this.close()},this.duration))}_clearAutoCloseTimer(){this._timeoutID&&window.clearTimeout(this._timeoutID)}open(){if(!this._isValidContainerElement()){document.body.appendChild(this),requestAnimationFrame(()=>{document.body.removeChild(this)}),this.performUpdate();return}this.container.appendChild(this),this.performUpdate(),this.classList.remove(`kuc-mobile-notification-fadeout-1-25-0`),this.classList.add(`kuc-mobile-notification-fadein-1-25-0`),this._isOpened=!0,this._setAutoCloseTimer()}close(){this._close(),Y(this,`close`)}_close(){this._isOpened=!1,this.classList.remove(`kuc-mobile-notification-fadein-1-25-0`),this.classList.add(`kuc-mobile-notification-fadeout-1-25-0`),this._clearAutoCloseTimer()}shouldUpdate(e){if(e.has(`container`)){if(this.container===null||this.container===void 0)return this._isOpened&&this._close(),!1;let e=this._isValidContainerElement(),t=!e||!document.contains(this.container);if(this._isOpened&&t&&this._close(),!e)return this.throwErrorAfterUpdateComplete(G.CONTAINER.INVALID),!1}return!0}willUpdate(e){(e.has(`content`)||e.has(`text`))&&(this.content!==null&&this.content!==void 0&&this.content!==``?_s(this.content)?this._content=B`<div
              class="kuc-mobile-notification-1-25-0__notification__title--html"
            >
              ${Wo(this.content)}
            </div>`:this._content=this.content:this._content=this.text)}_isValidContainerElement(){return this.container instanceof HTMLElement}render(){return B`
        <div class="kuc-mobile-notification-1-25-0__notification">
          <pre
            class="kuc-mobile-notification-1-25-0__notification__title"
            aria-live="assertive"
            role="${this._isOpened?`alert`:``}"
          ><!---->${this._content}</pre>
          <button
            class="kuc-mobile-notification-1-25-0__notification__close-button"
            type="button"
            aria-label="close"
            @click="${this._handleClickCloseButton}"
          >
            ${this._getCloseButtonSvgTemplate()}
          </button>
        </div>
      `}}Yl([H({type:String,reflect:!0,attribute:`class`})],e.prototype,`className`,void 0),Yl([H({type:String,reflect:!0,attribute:`id`})],e.prototype,`id`,void 0),Yl([H({type:String})],e.prototype,`text`,void 0),Yl([H({type:Number})],e.prototype,`duration`,void 0),Yl([H()],e.prototype,`container`,void 0),Yl([H()],e.prototype,`content`,void 0),Yl([U()],e.prototype,`_isOpened`,void 0),window.customElements.define(`kuc-mobile-notification-1-25-0`,e),X(Jl),Xl=e})();var Zl=e=>{let t=document.createElement(`div`);return t.style.cssText=`
  height: 0px;
  overflow: hidden;
  display: inline-block;
  font-size: 14px;
  font-family: ${window.getComputedStyle(e).fontFamily};
  `,t},Ql=e=>{let t=Zl(e),n=e.cloneNode(!0);if(n.hasAttribute(`hidden`))return 0;t.appendChild(n),document.body.appendChild(t);let r=t.getBoundingClientRect().width;return document.body.removeChild(t),r},$l=`
kuc-base-mobile-datetime-calendar-header-1-25-0,
kuc-base-mobile-datetime-calendar-header-1-25-0 * {
    font-family: "メイリオ", Meiryo, "Hiragino Kaku Gothic ProN",
    "ヒラギノ角ゴ ProN W3", "ＭＳ Ｐゴシック", "Lucida Grande",
    "Lucida Sans Unicode", Arial, Verdana, sans-serif;
}
kuc-base-mobile-datetime-calendar-header-1-25-0:lang(zh),
kuc-base-mobile-datetime-calendar-header-1-25-0:lang(zh) * {
    font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,
    Hei, "Heiti SC", "Lucida Grande", "Lucida Sans Unicode", Arial,
    Verdana, sans-serif;
}
kuc-base-mobile-datetime-calendar-header-1-25-0:lang(zh-TW),
kuc-base-mobile-datetime-calendar-header-1-25-0:lang(zh-TW) * {
    font-family: "微軟正黒體","Microsoft JhengHei","新宋体",NSimSun,STHeiti,
    Hei,"Heiti SC","Lucida Grande","Lucida Sans Unicode",Arial,
    Verdana,sans-serif
}
kuc-base-mobile-datetime-calendar-header-1-25-0:lang(es),
kuc-base-mobile-datetime-calendar-header-1-25-0:lang(es) * {
    font-family: sans-serif;
}
.kuc-base-mobile-datetime-calendar-header-1-25-0__group {
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    border-bottom: 1px solid #e3e7e8;
    padding: 0;
    white-space: nowrap;
}
.kuc-base-mobile-datetime-calendar-header-1-25-0__group__button {
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
.kuc-base-mobile-datetime-calendar-header-1-25-0__group__button-icon {
    vertical-align: middle;
}
.kuc-base-mobile-datetime-calendar-header-1-25-0__group__button:focus {
    outline: none;
}
.kuc-base-mobile-datetime-calendar-header-1-25-0__group__center {
    text-align: center;
    display: flex;
    flex: 1;
    justify-content: center;
    min-width: 186px;
}
.kuc-base-mobile-datetime-calendar-header-1-25-0__group__center
    > :first-child {
    padding-left: 13px;
}
.kuc-base-mobile-datetime-calendar-header-1-25-0__group__center__month,
.kuc-base-mobile-datetime-calendar-header-1-25-0__group__center__year {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
}
.kuc-base-mobile-datetime-calendar-header-1-25-0__group__center__month__select,
.kuc-base-mobile-datetime-calendar-header-1-25-0__group__center__year__select {
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
.kuc-base-mobile-datetime-calendar-header-1-25-0__group__center__month__select:focus,
.kuc-base-mobile-datetime-calendar-header-1-25-0__group__center__year__select:focus {
    outline: none;
}
.kuc-base-mobile-datetime-calendar-header-1-25-0__month {
    margin: 0 4px 0 4px;
}
`,eu=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a};function tu(e){return e>0&&e<13}function nu(e){return e>=0&&e<1e4}var ru=class extends J{constructor(){super(...arguments),this.language=`en`,this.month=1,this.year=new Date().getFullYear(),this._locale=jo(`en`)}update(e){e.has(`language`)&&(this._locale=jo(this.language)),this._monthOptions=this._generateMonthOptions(),this._yearOptions=this._generateYearOptions(),super.update(e)}render(){return B`
      <div class="kuc-base-mobile-datetime-calendar-header-1-25-0__group">
        <button
          aria-label="previous month"
          type="button"
          class="kuc-base-mobile-datetime-calendar-header-1-25-0__group__button kuc-base-mobile-datetime-calendar-header-1-25-0__group__button--previous-month"
          @click="${this._handleClickCalendarPrevMonthBtn}"
        >
          ${this._getLeftArrowIconSvgTemplate()}
        </button>
        <div class="kuc-base-mobile-datetime-calendar-header-1-25-0__group__center">
          ${this._getYearMonthTemplate()}
        </div>
        <button
          aria-label="next month"
          type="button"
          class="kuc-base-mobile-datetime-calendar-header-1-25-0__group__button kuc-base-mobile-datetime-calendar-header-1-25-0__group__button--next-month"
          @click="${this._handleClickCalendarNextMonthBtn}"
        >
          ${this._getRightArrowIconSvgTemplate()}
        </button>
      </div>
    `}updated(e){e.has(`month`)&&this._setSelectMonthWidth(this.month),e.has(`year`)&&this._setYearSelectedIndex(),super.update(e)}_setSelectMonthWidth(e){let t=this._monthOptions[e-1].label;if(!t)return;let n=document.createElement(`span`);n.innerText=t;let r=Ql(n);this._selectMonthEl.selectedIndex=this.month-1,this._selectMonthEl.style.width=r+35+`px`}_setYearSelectedIndex(){if(this.year<100){this._selectYearEl.selectedIndex=this.year;return}this._selectYearEl.selectedIndex=100}_generateMonthOptions(){return this._locale.MONTH_SELECT.map((e,t)=>({value:`${t+1}`,label:`${e}`}))}_generateYearOptions(){return this._getYearOptions().map(e=>({value:`${e}`,label:`${e}${this._locale.YEAR_SELECT_POSTFIX}`}))}_getYearOptions(){let e=[];Number.isInteger(this.year)||(this.year=new Date().getFullYear());let t=this.year<100?0:this.year-100,n=this.year>=9899?9999:this.year+100;for(t>=n&&(t=n-100);t<=n;t++)e.push(t);return e}_getYearMonthTemplate(){return this.language===`zh`||this.language===`ja`||this.language===`zh-TW`?B` ${this._getYearTemplate()}${this._getMonthTemplate()} `:B` ${this._getMonthTemplate()}${this._getYearTemplate()} `}_handleChangeMonthDropdown(e){e.stopPropagation(),e.preventDefault();let t=e.target;this.month=parseInt(t.value,10),this._dispatchCalendarHeaderChangeEvent()}_handleChangeYearDropdown(e){e.stopPropagation(),e.preventDefault();let t=e.target;this.year=parseInt(t.value,10),this._dispatchCalendarHeaderChangeEvent()}_handleClickCalendarPrevMonthBtn(e){e.stopPropagation(),this.month===1?(this.month=12,this.year--):--this.month,this._dispatchCalendarHeaderChangeEvent()}_handleClickCalendarNextMonthBtn(e){e.stopPropagation(),this.month===12?(this.month=1,this.year++):this.month+=1,this._dispatchCalendarHeaderChangeEvent()}_dispatchCalendarHeaderChangeEvent(){let e={value:`${this.year}-${this.month}`};Y(this,`kuc:mobile-calendar-header-change`,e)}_getOptionsMonthTemplate(){return this._monthOptions.map(e=>B`
        <option
          ?selected="${parseInt(e.value,10)===this.month}"
          value="${e.value}"
        >
          ${e.label}
        </option>
      `)}_getOptionsYearTemplate(){return this._yearOptions.map(e=>B`
        <option
          ?selected="${parseInt(e.value,10)===this.year}"
          value="${e.value}"
        >
          ${e.label}
        </option>
      `)}_getMonthTemplate(){return B`
      <div
        class="kuc-base-mobile-datetime-calendar-header-1-25-0__group__center__month"
      >
        <select
          class="kuc-base-mobile-datetime-calendar-header-1-25-0__group__center__month__select"
          @change="${this._handleChangeMonthDropdown}"
        >
          ${this._getOptionsMonthTemplate()}
        </select>
      </div>
    `}_getYearTemplate(){return B`
      <div
        class="kuc-base-mobile-datetime-calendar-header-1-25-0__group__center__year"
      >
        <select
          class="kuc-base-mobile-datetime-calendar-header-1-25-0__group__center__year__select"
          @change="${this._handleChangeYearDropdown}"
        >
          ${this._getOptionsYearTemplate()}
        </select>
      </div>
    `}_getLeftArrowIconSvgTemplate(){return V`
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
    </svg>`}_getRightArrowIconSvgTemplate(){return V`
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
    </svg>`}};eu([H({type:String,attribute:`lang`,reflect:!0})],ru.prototype,`language`,void 0),eu([H({type:Number,hasChanged(e){return tu(e)}})],ru.prototype,`month`,void 0),eu([H({type:Number,hasChanged(e){return nu(e)}})],ru.prototype,`year`,void 0),eu([U()],ru.prototype,`_monthOptions`,void 0),eu([U()],ru.prototype,`_yearOptions`,void 0),eu([W(`.kuc-base-mobile-datetime-calendar-header-1-25-0__group__center__month__select`)],ru.prototype,`_selectMonthEl`,void 0),eu([W(`.kuc-base-mobile-datetime-calendar-header-1-25-0__group__center__year__select`)],ru.prototype,`_selectYearEl`,void 0),window.customElements.get(`kuc-base-mobile-datetime-calendar-header-1-25-0`)||(X($l),window.customElements.define(`kuc-base-mobile-datetime-calendar-header-1-25-0`,ru));var iu=`
kuc-base-mobile-datetime-calendar-body-1-25-0,
kuc-base-mobile-datetime-calendar-body-1-25-0 * {
    font-family: "メイリオ", Meiryo, "Hiragino Kaku Gothic ProN",
    "ヒラギノ角ゴ ProN W3", "ＭＳ Ｐゴシック", "Lucida Grande",
    "Lucida Sans Unicode", Arial, Verdana, sans-serif;
}

kuc-base-mobile-datetime-calendar-body-1-25-0:lang(zh),
kuc-base-mobile-datetime-calendar-body-1-25-0:lang(zh) * {
    font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,
    Hei, "Heiti SC", "Lucida Grande", "Lucida Sans Unicode", Arial,
    Verdana, sans-serif;
}

kuc-base-mobile-datetime-calendar-body-1-25-0:lang(zh-TW),
kuc-base-mobile-datetime-calendar-body-1-25-0:lang(zh-TW) * {
    font-family: "微軟正黒體","Microsoft JhengHei","新宋体",NSimSun,STHeiti,
    Hei,"Heiti SC","Lucida Grande","Lucida Sans Unicode",Arial,
    Verdana,sans-serif
}

kuc-base-mobile-datetime-calendar-body-1-25-0:lang(es),
kuc-base-mobile-datetime-calendar-body-1-25-0:lang(es) * {
    font-family: sans-serif;
}

.kuc-base-mobile-datetime-calendar-body-1-25-0__table,
.kuc-base-mobile-datetime-calendar-body-1-25-0__table tr {
    border-collapse: separate;
    border-spacing: 0;
}
.kuc-base-mobile-datetime-calendar-body-1-25-0__table__date--selected {
    border-spacing: 1px;
    padding: 0px;
}
.kuc-base-mobile-datetime-calendar-body-1-25-0__table__date {
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
.kuc-base-mobile-datetime-calendar-body-1-25-0__table__date
    .kuc-base-mobile-datetime-calendar-body-1-25-0__table__date__button {
    border-spacing: 1px;
    cursor: pointer;
    box-sizing: border-box;
    text-align: center;
    vertical-align: middle;
    color: #333333;
}
.kuc-base-mobile-datetime-calendar-body-1-25-0__table__date,
.kuc-base-mobile-datetime-calendar-body-1-25-0__table__date--selected,
.kuc-base-mobile-datetime-calendar-body-1-25-0__table__header {
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
.kuc-base-mobile-datetime-calendar-body-1-25-0__table__date {
    font-size: 14px;
}
th.kuc-base-mobile-datetime-calendar-body-1-25-0__table__header {
    font-weight: 700;
}
.kuc-base-mobile-datetime-calendar-body-1-25-0__table__date--selected
    .kuc-base-mobile-datetime-calendar-body-1-25-0__table__date__button,
.kuc-base-mobile-datetime-calendar-body-1-25-0__table__date
    .kuc-base-mobile-datetime-calendar-body-1-25-0__table__date__button,
.kuc-base-mobile-datetime-calendar-body-1-25-0__table__header {
    box-sizing: border-box;
    border: 1px solid #ffffff;
}
.kuc-base-mobile-datetime-calendar-body-1-25-0__table__date--selected
    .kuc-base-mobile-datetime-calendar-body-1-25-0__table__date__button,
.kuc-base-mobile-datetime-calendar-body-1-25-0__table__date
    .kuc-base-mobile-datetime-calendar-body-1-25-0__table__date__button {
    background: none;
    cursor: pointer;
    max-width: 40px;
}
.kuc-base-mobile-datetime-calendar-body-1-25-0__table__date--selected {
    border: 1px solid #206694;
    box-sizing: border-box;
    text-align: center;
    font-size: 14px;
}
.kuc-base-mobile-datetime-calendar-body-1-25-0__table__date--selected
    .kuc-base-mobile-datetime-calendar-body-1-25-0__table__date__button {
    outline: none;
}
.kuc-base-mobile-datetime-calendar-body-1-25-0__table__date
    .kuc-base-mobile-datetime-calendar-body-1-25-0__table__date__button:focus-visible {
    outline: none;
}
.kuc-base-mobile-datetime-calendar-body-1-25-0__table__date--today {
    color: #333333;
    background: #d8d8d8;
}
.kuc-base-mobile-datetime-calendar-body-1-25-0__table__date--other-month {
    color: #a5a5a5;
}
.kuc-base-mobile-datetime-calendar-body-1-25-0__table__date--selected:focus {
    outline: none;
}
`,au=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},ou=class extends J{constructor(){super(),this.month=1,this.year=2021,this.language=`en`,this.value=``,this._month=1,this._year=2021,this._locale=jo(`en`),this._handleClickDocument=this._handleClickDocument.bind(this)}connectedCallback(){super.connectedCallback(),setTimeout(()=>{document.addEventListener(`click`,this._handleClickDocument)},1)}disconnectedCallback(){document.removeEventListener(`click`,this._handleClickDocument),super.disconnectedCallback()}update(e){if(e.forEach((e,t)=>{t===`language`&&(this._locale=jo(this.language))}),e.has(`month`)&&(this._month=this.month),e.has(`year`)&&(this._year=this.year),e.has(`value`)){let{month:e,year:t}=this._separateDateValue();this._month=parseInt(e,10),this._year=parseInt(t,10)}super.update(e)}render(){return B`
      <table class="kuc-base-mobile-datetime-calendar-body-1-25-0__table" role="grid">
        ${this._getHeaderItemsTemplate()}<!--
        -->${this._getDateItemsTemplate()}
      </table>
    `}_handleClickDocument(){Y(this,`kuc:mobile-calendar-body-blur`,{})}_handleClickDate(e){e.preventDefault(),e.stopPropagation();let t=e.target;t.setAttribute(`aria-selected`,`true`);let n=t.getAttribute(`data-date`);this._dispatchClickEvent(n)}_dispatchClickEvent(e){let t={oldValue:this.value,value:e};Y(this,`kuc:mobile-calendar-body-click-date`,t),this.value=e}_isToday(e){let t=new Date;return parseInt(e[0],10)===t.getFullYear()&&parseInt(e[1],10)===t.getMonth()+1&&parseInt(e[2],10)===t.getDate()}_separateDateValue(e=this.value){let t=e.split(`-`);return{day:t[2],month:t[1],year:t[0]}}_getDateClass(e,t){return t?this._isToday(e)?` kuc-base-mobile-datetime-calendar-body-1-25-0__table__date--today`:``:` kuc-base-mobile-datetime-calendar-body-1-25-0__table__date--other-month`}_isSameDayOfMoment(e){let t=parseInt(e[1],10),n=parseInt(e[2],10),r=parseInt(e[0],10),i=new Date().getDate();if(!this.value.split(`-`)[2])return!1;if(this.value&&(i=new Date(`${this.value}T00:00:00`).getDate()),i===n&&t===this._month)return!0;let a=new Date(r,this._month,0).getDate();return i>a&&a===n&&t===this._month}_getHeaderItemsTemplate(){return B`
      <thead>
        <tr>
          ${this._locale.WEEK_DAYS.map(e=>B`
              <th
                class="kuc-base-mobile-datetime-calendar-body-1-25-0__table__header"
                role="columnheader"
                abbr="${e.abbr}"
              >
                ${e.text}
              </th>
            `)}
        </tr>
      </thead>
    `}_getDateItemsTemplate(){let e=fo(this._year,this._month-1),t=this._locale.MONTH_SELECT[this._month-1];return B`
      <tbody>
        ${e.map(e=>B`
            <tr>
              ${e.map(e=>{let n=e.text.split(`-`),r=this._isSameDayOfMoment(n),i=parseInt(n[1],10)===this._month,a=(this.value===e.attr||r)&&i;return B`
                  <td
                    role="gridcell"
                    tabindex="${a?0:-1}"
                    aria-selected="${this.value===e.attr}"
                    aria-current="${this._isToday(n)?`date`:!1}"
                    class="kuc-base-mobile-datetime-calendar-body-1-25-0__table__date${a?`--selected`:``}${this._getDateClass(n,i)}"
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
    `}};au([H({type:Number})],ou.prototype,`month`,void 0),au([H({type:Number})],ou.prototype,`year`,void 0),au([H({type:String,attribute:`lang`,reflect:!0})],ou.prototype,`language`,void 0),au([H({type:String,reflect:!0})],ou.prototype,`value`,void 0),au([U()],ou.prototype,`_month`,void 0),au([U()],ou.prototype,`_year`,void 0),window.customElements.get(`kuc-base-mobile-datetime-calendar-body-1-25-0`)||(X(iu),window.customElements.define(`kuc-base-mobile-datetime-calendar-body-1-25-0`,ou));var su=`
kuc-base-mobile-datetime-calendar-footer-1-25-0,
kuc-base-mobile-datetime-calendar-footer-1-25-0 * {
    font-family: "メイリオ", Meiryo, "Hiragino Kaku Gothic ProN",
    "ヒラギノ角ゴ ProN W3", "ＭＳ Ｐゴシック", "Lucida Grande",
    "Lucida Sans Unicode", Arial, Verdana, sans-serif;
}

kuc-base-mobile-datetime-calendar-footer-1-25-0:lang(zh),
kuc-base-mobile-datetime-calendar-footer-1-25-0:lang(zh) * {
    font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,
    Hei, "Heiti SC", "Lucida Grande", "Lucida Sans Unicode", Arial,
    Verdana, sans-serif;
}
kuc-base-mobile-datetime-calendar-footer-1-25-0:lang(zh-TW),
kuc-base-mobile-datetime-calendar-footer-1-25-0:lang(zh-TW) * {
    font-family: "微軟正黒體","Microsoft JhengHei","新宋体",NSimSun,STHeiti,
    Hei,"Heiti SC","Lucida Grande","Lucida Sans Unicode",Arial,
    Verdana,sans-serif
}
kuc-base-mobile-datetime-calendar-footer-1-25-0:lang(es),
kuc-base-mobile-datetime-calendar-footer-1-25-0:lang(es) * {
    font-family: sans-serif;
}
.kuc-base-mobile-datetime-calendar-footer-1-25-0__group {
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
    padding: 0;
    white-space: nowrap;
}
.kuc-base-mobile-datetime-calendar-footer-1-25-0__group__button {
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
.kuc-base-mobile-datetime-calendar-footer-1-25-0__group__center {
    width: 100%;
}
`,cu=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},lu=class extends J{constructor(){super(...arguments),this.language=`en`,this._locale=jo(`en`)}update(e){e.has(`language`)&&(this._locale=jo(this.language)),super.update(e)}_handleClickCalendarFooterButtonClose(e){e.stopPropagation(),Y(this,`kuc:mobile-calendar-footer-click-close`)}_handleClickCalendarFooterButtonNone(e){e.stopPropagation(),Y(this,`kuc:mobile-calendar-footer-click-none`)}_handleClickCalendarFooterButtonToday(e){e.stopPropagation(),Y(this,`kuc:mobile-calendar-footer-click-today`)}render(){return B`
      <div class="kuc-base-mobile-datetime-calendar-footer-1-25-0__group">
        <button
          type="button"
          class="kuc-base-mobile-datetime-calendar-footer-1-25-0__group__button kuc-base-mobile-datetime-calendar-footer-1-25-0__group__button--today"
          @click="${this._handleClickCalendarFooterButtonToday}"
        >
          ${this._locale.CALENDAR_FOOTER_TEXT.today}
        </button>
        <button
          type="button"
          class="kuc-base-mobile-datetime-calendar-footer-1-25-0__group__button kuc-base-mobile-datetime-calendar-footer-1-25-0__group__button--none"
          @click="${this._handleClickCalendarFooterButtonNone}"
        >
          ${this._locale.CALENDAR_FOOTER_TEXT.none}
        </button>
        <button
          type="button"
          class="kuc-base-mobile-datetime-calendar-footer-1-25-0__group__button kuc-base-mobile-datetime-calendar-footer-1-25-0__group__button--close"
          @click="${this._handleClickCalendarFooterButtonClose}"
        >
          ${this._locale.CALENDAR_FOOTER_TEXT.close}
        </button>
      </div>
    `}};cu([H({type:String,attribute:`lang`,reflect:!0})],lu.prototype,`language`,void 0),cu([U()],lu.prototype,`_locale`,void 0),window.customElements.get(`kuc-base-mobile-datetime-calendar-footer-1-25-0`)||(X(su),window.customElements.define(`kuc-base-mobile-datetime-calendar-footer-1-25-0`,lu));var uu=`
.kuc-base-mobile-datetime-calendar-1-25-0__group {
    display: inline-block;
    box-sizing: border-box;
    width: 290px;
    padding: 0 10px;
    background: #ffffff;
    text-align: center;
    font-size: 13px;
    border: 1px solid #d8d8d8;
}
`,du=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},fu=class extends J{constructor(){super(...arguments),this.language=`en`,this.value=``,this._month=1,this._year=new Date().getFullYear()}update(e){e.has(`value`)&&this._updateValue(),super.update(e)}render(){return B`
      <div
        class="kuc-base-mobile-datetime-calendar-1-25-0__group"
        role="dialog"
        aria-modal="true"
        aria-label="Calender"
        @click="${this._handleClickCalendarGroup}"
      >
        <kuc-base-mobile-datetime-calendar-header-1-25-0
          .year="${this._year}"
          .month="${this._month}"
          .language="${this.language}"
          @kuc:mobile-calendar-header-change="${this._handleCalendarHeaderChange}"
        ></kuc-base-mobile-datetime-calendar-header-1-25-0>
        <kuc-base-mobile-datetime-calendar-body-1-25-0
          .year="${this._year}"
          .month="${this._month}"
          .value="${this.value}"
          .language="${this.language}"
        ></kuc-base-mobile-datetime-calendar-body-1-25-0>
        <kuc-base-mobile-datetime-calendar-footer-1-25-0
          .language="${this.language}"
        ></kuc-base-mobile-datetime-calendar-footer-1-25-0>
      </div>
    `}updated(e){super.updated(e)}_handleClickCalendarGroup(e){e.stopPropagation()}_handleCalendarHeaderChange(e){let{year:t,month:n}=this._separateValue(e.detail.value);this._year=t,this._month=n}_updateValue(){this.value===``&&(this.value=Oo().slice(0,7)+`-01`);let{year:e,month:t}=this._separateValue(this.value);this._year=e,this._month=t}_separateValue(e){let t=e.split(`-`);return{year:parseInt(t[0],10),month:parseInt(t[1],10)}}};du([H({type:String,attribute:`lang`,reflect:!0})],fu.prototype,`language`,void 0),du([H({type:String,reflect:!0})],fu.prototype,`value`,void 0),du([U()],fu.prototype,`_month`,void 0),du([U()],fu.prototype,`_year`,void 0),window.customElements.get(`kuc-base-mobile-datetime-calendar-1-25-0`)||(X(uu),window.customElements.define(`kuc-base-mobile-datetime-calendar-1-25-0`,fu));var pu=`
kuc-mobile-base-date-1-25-0,
kuc-mobile-base-date-1-25-0 * {
    font-family: "メイリオ", Meiryo, "Hiragino Kaku Gothic ProN",
    "ヒラギノ角ゴ ProN W3", "ＭＳ Ｐゴシック", "Lucida Grande",
    "Lucida Sans Unicode", Arial, Verdana, sans-serif;
}
kuc-mobile-base-date-1-25-0:lang(zh),
kuc-mobile-base-date-1-25-0:lang(zh) * {
    font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,
    Hei, "Heiti SC", "Lucida Grande", "Lucida Sans Unicode", Arial,
    Verdana, sans-serif;
}
kuc-mobile-base-date-1-25-0:lang(zh-TW),
kuc-mobile-base-date-1-25-0:lang(zh-TW) * {
    font-family: "微軟正黒體","Microsoft JhengHei","新宋体",NSimSun,STHeiti,
    Hei,"Heiti SC","Lucida Grande","Lucida Sans Unicode",Arial,
    Verdana,sans-serif
}
kuc-mobile-base-date-1-25-0:lang(es),
kuc-mobile-base-date-1-25-0:lang(es) * {
    font-family: sans-serif;
}
.kuc-mobile-base-date-1-25-0__group {
    display: flex;
    align-items: center;
    position: relative;
    border-radius: 5.148px;
    background-color: #ffffff;
}
.kuc-mobile-base-date-1-25-0__group__input[aria-required="true"] {
    border-color: #cf4a38;
}
input.kuc-mobile-base-date-1-25-0__group__input {
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
.kuc-mobile-base-date-1-25-0__group--disabled {
    background-color: #d5d7d9;
    opacity: 1;
}
.kuc-mobile-base-date-1-25-0__group--disabled input {
    color: #999999;
    -webkit-text-fill-color: #999999;
}
.kuc-base-mobile-date-1-25-0__calendar {
    position: absolute;
    left: 0;
    top: 39px;
    z-index: 1000;
}
.kuc-base-mobile-date-1-25-0__calendar[popover] {
    position: fixed;
    right: auto;
    bottom: auto;
    border: none;
    padding: 0;
}
.kuc-mobile-base-date-1-25-0__group__button {
    position: absolute;
    display: flex;
    right: 10px;
    background-color: transparent;
    border: 0;
    padding: 0;
    height: 100%;
    align-items: center;
}
`,mu=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},hu=class extends J{constructor(){super(...arguments),this.inputId=``,this.language=`en`,this.value=``,this.disabled=!1,this.inputAriaInvalid=!1,this.required=!1,this._dateTimeCalendarVisible=!1,this._calendarValue=``,this._inputValue=``,this._scrollDebounceTimer=null,this._scrollRAF=0,this._scrollTargets=[],this._calendarWidth=0,this._calendarHeight=0,this._schedulePositionOnScroll=()=>{!this._dateTimeCalendarVisible||this._scrollRAF||(this._scrollRAF=requestAnimationFrame(()=>{this._scrollRAF=0,this._positionCalendar()}))},this._positionCalendar=()=>{if(!this._calendarEl||!this._inputEl)return;let{inputToBottom:e,inputToTop:t,inputToLeft:n,inputDateWidth:r,inputDateHeight:i}=Vo(this),a=this._calendarHeight;e>=t?this._calendarEl.style.top=`${t+i+7.5}px`:this._calendarEl.style.top=`${t-a-2}px`,this._calendarEl.style.left=`${n-r}px`},this._onDocClick=e=>{let t=e.composedPath(),n=this._calendarEl&&t.includes(this._calendarEl),r=t.includes(this._inputEl),i=t.includes(this._btnToggleEl);!n&&!r&&!i&&this._closeCalendar()}}update(e){e.has(`inputId`)&&(this._GUID=this.inputId),(e.has(`value`)||e.has(`language`))&&this._updateValueProp(),super.update(e)}disconnectedCallback(){this._scrollRAF&&=(cancelAnimationFrame(this._scrollRAF),0),this._scrollDebounceTimer!==null&&(window.clearTimeout(this._scrollDebounceTimer),this._scrollDebounceTimer=null),this._detachListeners(),super.disconnectedCallback()}render(){return B`
      <div class="kuc-mobile-base-date-1-25-0__group${this._getGroupClass()}">
        <input
          class="kuc-mobile-base-date-1-25-0__group__input"
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
          class="kuc-mobile-base-date-1-25-0__group__button"
          aria-label="calendar"
          @click="${this._handleClickOpenCalendar}"
          ?disabled="${this.disabled}"
        >
          ${this._getCalendarIconTemplate()}
        </button>
        ${this._getCalendarTemplate()}
      </div>
    `}_attachListeners(){this._detachListeners(),this._scrollTargets=Bo(this._inputEl);for(let e of this._scrollTargets)e.addEventListener(`scroll`,this._schedulePositionOnScroll,{passive:!0});document.addEventListener(`click`,this._onDocClick,{capture:!0})}_detachListeners(){for(let e of this._scrollTargets)e.removeEventListener(`scroll`,this._schedulePositionOnScroll);this._scrollTargets=[],document.removeEventListener(`click`,this._onDocClick,{capture:!0})}_getGroupClass(){let e=``;return this.disabled&&(e+=` kuc-mobile-base-date-1-25-0__group--disabled`),this.required&&(e+=` kuc-mobile-base-date-1-25-0__group--required`),e}_handleClickOpenCalendar(e){if(this._dateTimeCalendarVisible){e.preventDefault(),e.stopPropagation();return}this._calendarValue=this._getNewCalendarValue(this._inputValue||``),this._openCalendar()}_updateValueProp(){if(this.value){this._inputValue=To(this.language,this.value),this._calendarValue=this.value;return}let e=Oo();this._inputValue=``,this._calendarValue=this._calendarValue?this._calendarValue.slice(0,7)+`-01`:e.slice(0,7)}_getNewCalendarValue(e){if(ko(this.language,e))return Eo(this.language,e);let t=this._calendarValue.slice(0,7);return e===``&&(t=this._calendarValue.slice(0,7)+`-01`),t}_closeCalendar(){this._dateTimeCalendarVisible=!1,this._calendarEl&&this._calendarEl.hidePopover(),this._scrollRAF&&=(cancelAnimationFrame(this._scrollRAF),0),this._scrollDebounceTimer!==null&&(window.clearTimeout(this._scrollDebounceTimer),this._scrollDebounceTimer=null),this._detachListeners()}async _openCalendar(){if(this._dateTimeCalendarVisible=!0,this._calendarEl){await this.updateComplete,this._calendarEl.showPopover();let e=zo(this._calendarEl);this._calendarWidth=e.width,this._calendarHeight=e.height,this._positionCalendar(),this._attachListeners()}}_handleClickCalendarClickDate(e){this._closeCalendar(),e.detail.oldValue=this.value,e.detail.oldValue!==e.detail.value&&(this.value=e.detail.value,Y(this,`kuc:mobile-base-date-change`,e.detail),this._btnToggleEl.focus())}_handleClickCalendarFooterButtonNone(){this._closeCalendar(),this._inputValue=``;let e=this.value?this.value.slice(0,7)+`-01`:``;e||=this._calendarValue.slice(0,7)+`-01`,this._calendarValue=e,this._dispathDateChangeCustomEvent(``)}_handleClickCalendarFooterButtonToday(){this._closeCalendar();let e=Oo();this._dispathDateChangeCustomEvent(e)}_handleClickCalendarFooterButtonClose(){this._closeCalendar(),this._btnToggleEl.focus()}_dispathDateChangeCustomEvent(e){let t={value:e,oldValue:this.value};this.value=e,Y(this,`kuc:mobile-base-date-change`,t),this._btnToggleEl.focus()}_getCalendarTemplate(){return B`
      <kuc-base-mobile-datetime-calendar-1-25-0
        class="kuc-base-mobile-date-1-25-0__calendar"
        .language="${this.language}"
        .value="${this._calendarValue}"
        popover="manual"
        @kuc:mobile-calendar-body-click-date="${this._handleClickCalendarClickDate}"
        @kuc:mobile-calendar-footer-click-none="${this._handleClickCalendarFooterButtonNone}"
        @kuc:mobile-calendar-footer-click-today="${this._handleClickCalendarFooterButtonToday}"
        @kuc:mobile-calendar-footer-click-close="${this._handleClickCalendarFooterButtonClose}"
      >
      </kuc-base-mobile-datetime-calendar-1-25-0>
    `}_getCalendarIconTemplate(){return B`
      <svg width="24" height="24" viewBox="0 0 28 28" fill="none">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M10 4C9.44772 4 9 4.44772 9 5V6H6C4.89543 6 4 6.89543 4 8V21C4 22.1046 4.89543 23 6 23H22C23.1046 23 24 22.1046 24 21V8C24 6.89543 23.1046 6 22 6H19V5C19 4.44772 18.5523 4 18 4C17.4477 4 17 4.44772 17 5V6H11V5C11 4.44772 10.5523 4 10 4ZM9 8V9C9 9.55228 9.44772 10 10 10C10.5523 10 11 9.55228 11 9V8H17V9C17 9.55228 17.4477 10 18 10C18.5523 10 19 9.55228 19 9V8H22V11H6V8H9ZM6 13V21H22V13H6Z"
          fill="#4b4b4b"
        />
      </svg>
    `}};mu([H({type:String})],hu.prototype,`inputId`,void 0),mu([H({type:String,attribute:`lang`,reflect:!0})],hu.prototype,`language`,void 0),mu([H({type:String,reflect:!0})],hu.prototype,`value`,void 0),mu([H({type:Boolean})],hu.prototype,`disabled`,void 0),mu([H({type:Boolean})],hu.prototype,`inputAriaInvalid`,void 0),mu([H({type:Boolean})],hu.prototype,`required`,void 0),mu([W(`.kuc-mobile-base-date-1-25-0__group__button`)],hu.prototype,`_btnToggleEl`,void 0),mu([W(`.kuc-mobile-base-date-1-25-0__group__input`)],hu.prototype,`_inputEl`,void 0),mu([W(`.kuc-base-mobile-date-1-25-0__calendar`)],hu.prototype,`_calendarEl`,void 0),mu([U()],hu.prototype,`_dateTimeCalendarVisible`,void 0),window.customElements.get(`kuc-mobile-base-date-1-25-0`)||(X(pu),window.customElements.define(`kuc-mobile-base-date-1-25-0`,hu));var gu=`
kuc-mobile-date-picker-1-25-0,
kuc-mobile-date-picker-1-25-0 * {
  color: #333333;
  font-family: "メイリオ", Meiryo, "Hiragino Kaku Gothic ProN",
    "ヒラギノ角ゴ ProN W3", "ＭＳ Ｐゴシック", "Lucida Grande",
    "Lucida Sans Unicode", Arial, Verdana, sans-serif;
}
kuc-mobile-date-picker-1-25-0:lang(zh),
kuc-mobile-date-picker-1-25-0:lang(zh) * {
  font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,
    Hei, "Heiti SC", "Lucida Grande", "Lucida Sans Unicode", Arial,
    Verdana, sans-serif;
}
kuc-mobile-date-picker-1-25-0:lang(zh-TW),
kuc-mobile-date-picker-1-25-0:lang(zh-TW) * {
    font-family: "微軟正黒體","Microsoft JhengHei","新宋体",NSimSun,STHeiti,
    Hei,"Heiti SC","Lucida Grande","Lucida Sans Unicode",Arial,
    Verdana,sans-serif
}
kuc-mobile-date-picker-1-25-0:lang(es),
kuc-mobile-date-picker-1-25-0:lang(es) * {
    font-family: sans-serif;
}
kuc-mobile-date-picker-1-25-0 {
  font-size: 13px;
  color: #333333;
  display: inline-table;
  vertical-align: top;
  width: 100%;
}
kuc-mobile-date-picker-1-25-0[hidden] {
  display: none;
}
.kuc-mobile-date-picker-1-25-0__group {
  display: flex;
  flex-direction: column;
  border: none;
  padding: 0px;
  height: auto;
  margin: 0px;
}
.kuc-mobile-date-picker-1-25-0__group__label {
  display: inline-block;
  font-weight: bold;
  line-height: 1.5;
  padding: 0px;
  white-space: nowrap;
  margin: 0 0 4px 0;
}
.kuc-mobile-date-picker-1-25-0__group__base__date {
  width: 130px;
  margin-right: 0.5em;
  margin-left: 0.5em;
}
.kuc-mobile-date-picker-1-25-0__group__label[hidden] {
  display: none;
}
.kuc-mobile-date-picker-1-25-0__group input.kuc-base-date-1-25-0__input {
  width: 100px;
  height: 40px;
  padding: 0px;
  text-align: center;
  border: 1px solid #e3e7e8;
  box-sizing: border-box;
  font-size: 14px;
  box-shadow: 2px 2px 4px #f5f5f5 inset, -2px -2px 4px #f5f5f5 inset;
}

.kuc-mobile-date-picker-1-25-0__group input.kuc-base-date-1-25-0__input:focus {
  outline: none;
  border: 1px solid #3498db;
}
.kuc-mobile-date-picker-1-25-0__group input.kuc-base-date-1-25-0__input--focus {
  box-shadow: 2px 2px 4px #f5f5f5 inset, -2px -2px 4px #f5f5f5 inset;
  border: 1px solid #3498db;
  background-color: #ffffff;
  color: #333333;
}
.kuc-mobile-date-picker-1-25-0__group input.kuc-base-date-1-25-0__input:disabled {
  color: #888888;
  background-color: #d4d7d7;
  box-shadow: none;
  cursor: not-allowed;
}
`,_u=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},vu;(()=>{if(vu=window.customElements.get(`kuc-mobile-date-picker-1-25-0`),vu)return;class e extends J{constructor(e){super(),this.className=``,this.error=``,this.id=``,this.label=``,this.disabled=!1,this.requiredIcon=!1,this.language=`auto`,this.value=``,this.visible=!0,this._dateConverted=``,this._inputValue=``,this._GUID=Z();let t=Q(e);Object.assign(this,t)}shouldUpdate(e){return this.value===void 0||this.value===``?!0:!as(this.value)||(this._dateConverted=Go(this.value),this._dateConverted!==``&&!cs(this._dateConverted))?(this.throwErrorAfterUpdateComplete(ao.VALUE),!1):!0}willUpdate(e){e.has(`value`)&&this.value!==void 0&&this.value!==``&&(this.value=this._dateConverted)}update(e){e.has(`value`)&&this._updateInputValue(),super.update(e)}render(){return B`
        <div class="kuc-mobile-date-picker-1-25-0__group">
          <label
            class="kuc-mobile-date-picker-1-25-0__group__label"
            for="${this._GUID}-label"
            @click="${this._handleClickLabel}"
            ?hidden="${!this.label}"
          >
            <kuc-base-mobile-label-1-25-0
              .requiredIcon="${this.requiredIcon}"
              .text="${this.label}"
            ></kuc-base-mobile-label-1-25-0>
          </label>
          <kuc-mobile-base-date-1-25-0
            class="kuc-mobile-date-picker-1-25-0__group__base__date"
            .disabled="${this.disabled}"
            .value="${this._inputValue}"
            .inputId="${this._GUID}"
            .inputAriaInvalid="${this.error!==``}"
            .required="${this.requiredIcon}"
            .language="${this._getLanguage()}"
            @kuc:mobile-base-date-change="${this._handleDateChange}"
          >
          </kuc-mobile-base-date-1-25-0>
          <kuc-base-mobile-error-1-25-0 .guid="${this._GUID}" .text="${this.error}">
          </kuc-base-mobile-error-1-25-0>
        </div>
      `}_updateInputValue(){if(this.value===void 0||this.value===``){this._inputValue=``;return}this._inputValue=this.value}_getLanguage(){let e=[`en`,`ja`,`zh`,`zh-TW`,`es`];return e.indexOf(this.language)===-1?e.indexOf(document.documentElement.lang)===-1?`en`:document.documentElement.lang:this.language}_handleClickLabel(e){e.preventDefault()}_handleDateChange(e){e.stopPropagation(),e.preventDefault();let t={oldValue:this.value,value:``};this.value=e.detail.value,t.value=this.value,this._dispatchChangeEvent(t)}_dispatchChangeEvent(e){Y(this,`change`,e)}}_u([H({type:String,reflect:!0,attribute:`class`})],e.prototype,`className`,void 0),_u([H({type:String})],e.prototype,`error`,void 0),_u([H({type:String,reflect:!0,attribute:`id`})],e.prototype,`id`,void 0),_u([H({type:String})],e.prototype,`label`,void 0),_u([H({type:Boolean})],e.prototype,`disabled`,void 0),_u([H({type:Boolean})],e.prototype,`requiredIcon`,void 0),_u([H({type:String,attribute:`lang`,reflect:!0,converter:Uo})],e.prototype,`language`,void 0),_u([H({type:String})],e.prototype,`value`,void 0),_u([H({type:Boolean,attribute:`hidden`,reflect:!0,converter:q})],e.prototype,`visible`,void 0),_u([U()],e.prototype,`_inputValue`,void 0),window.customElements.define(`kuc-mobile-date-picker-1-25-0`,e),X(gu),vu=e})();var yu=`
kuc-mobile-time-picker-1-25-0,
kuc-mobile-time-picker-1-25-0 * {
  font-family: "メイリオ", Meiryo, "Hiragino Kaku Gothic ProN",
  "ヒラギノ角ゴ ProN W3", "ＭＳ Ｐゴシック", "Lucida Grande",
  "Lucida Sans Unicode", Arial, Verdana, sans-serif;
}
kuc-mobile-time-picker-1-25-0:lang(zh),
kuc-mobile-time-picker-1-25-0:lang(zh) * {
  font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,
  Hei, "Heiti SC", "Lucida Grande", "Lucida Sans Unicode", Arial,
  Verdana, sans-serif;
}
kuc-mobile-time-picker-1-25-0:lang(zh-TW),
kuc-mobile-time-picker-1-25-0:lang(zh-TW) * {
  font-family: "微軟正黒體", "Microsoft JhengHei", "新宋体", NSimSun, STHeiti,
  Hei, "Heiti SC", "Lucida Grande", "Lucida Sans Unicode", Arial,
  Verdana, sans-serif
}
kuc-mobile-time-picker-1-25-0:lang(es),
kuc-mobile-time-picker-1-25-0:lang(es) * {
  font-family: sans-serif;
}
kuc-mobile-time-picker-1-25-0 {
  font-size: 13px;
  display: inline-block;
  vertical-align: top;
  width: 100%;
}
kuc-mobile-time-picker-1-25-0[hidden] {
  display: none;
}
.kuc-mobile-time-picker-1-25-0__group__label {
  display: inline-block;
  font-weight: bold;
  line-height: 1.5;
  padding: 0px;
  margin: 0 0 4px 0;
  white-space: nowrap;
}
.kuc-mobile-time-picker-1-25-0__group__label[hidden] {
  display: none;
}
.kuc-base-mobile-time-1-25-0__group__wrapper {
  padding-left: 0.5em;
  max-width: 10px;
}
`,bu=`
kuc-base-mobile-time-1-25-0,
kuc-base-mobile-time-1-25-0 * {
  font-size: 13px;
  font-family: "メイリオ", Meiryo, "Hiragino Kaku Gothic ProN",
  "ヒラギノ角ゴ ProN W3", "ＭＳ Ｐゴシック", "Lucida Grande",
  "Lucida Sans Unicode", Arial, Verdana, sans-serif;
}

kuc-base-mobile-time-1-25-0:lang(zh),
kuc-base-mobile-time-1-25-0:lang(zh) * {
  font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,
  Hei, "Heiti SC", "Lucida Grande", "Lucida Sans Unicode", Arial,
  Verdana, sans-serif;
}

kuc-base-mobile-time-1-25-0:lang(zh-TW),
kuc-base-mobile-time-1-25-0:lang(zh-TW) * {
  font-family: "微軟正黒體", "Microsoft JhengHei", "新宋体", NSimSun, STHeiti,
  Hei, "Heiti SC", "Lucida Grande", "Lucida Sans Unicode", Arial,
  Verdana, sans-serif
}

kuc-base-mobile-time-1-25-0:lang(es),
kuc-base-mobile-time-1-25-0:lang(es) * {
  font-family: sans-serif;
}

kuc-base-mobile-time-1-25-0 {
  width: 100%;
  display: inline-block;
  vertical-align: top;
}

kuc-base-mobile-time-1-25-0[hidden] {
  display: none;
}

.kuc-base-mobile-time-1-25-0__group {
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

.kuc-base-mobile-time-1-25-0__group--required {
  border-color: #cf4a38;
}

.kuc-base-mobile-time-1-25-0__group__hours {
  padding: 5.148px 7.722px;
}

.kuc-base-mobile-time-1-25-0__group__minutes {
  padding: 5.148px 7.722px;
  -webkit-flex-grow: 1;
  flex-grow: 1;
}

.kuc-base-mobile-time-1-25-0__group__hours,
.kuc-base-mobile-time-1-25-0__group__minutes {
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

.kuc-base-mobile-time-1-25-0__group__colon {
  color: #000000;
}

.kuc-base-mobile-time-1-25-0__group__hours:disabled
+ .kuc-base-mobile-time-1-25-0__group__colon {
  color: #999999;
  -webkit-text-fill-color: #999999;
  opacity: 1;
}

.kuc-base-mobile-time-1-25-0__group--disabled {
  color: #999999;
  -webkit-text-fill-color: #999999;
  background-color: #d5d7d9;
  opacity: 1;
}

.kuc-base-mobile-time-1-25-0__group__hours:disabled,
.kuc-base-mobile-time-1-25-0__group__minutes:disabled {
  color: #999999;
  -webkit-text-fill-color: #999999;
  opacity: 1;
}

.kuc-base-mobile-time-1-25-0__group__hours:focus {
  outline: none;
}

.kuc-base-mobile-time-1-25-0__group__minutes:focus {
  outline: none;
}
`,xu=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},Su=class extends J{constructor(e){super(),this.guid=``,this.language=`en`,this.value=``,this.disabled=!1,this.hour12=!1,this.required=!1,this._timeStep=1,this._hours=``,this._minutes=``,this._suffix=``,this._locale=jo(`en`);let t=Q(e);Object.assign(this,t)}update(e){e.has(`language`)&&(this._locale=jo(this.language)),e.has(`hour12`)&&(this._hourOptions=No(this.hour12)),e.has(`_timeStep`)&&(this._minuteOptions=Mo(this._timeStep)),super.update(e)}render(){return B`
      <fieldset
        class="kuc-base-mobile-time-1-25-0__group${this.disabled?` kuc-base-mobile-time-1-25-0__group--disabled`:``}${this.required?` kuc-base-mobile-time-1-25-0__group--required`:``}"
        aria-label="label-text"
      >
        <select
          class="kuc-base-mobile-time-1-25-0__group__hours"
          aria-label="Hour"
          aria-describedby="${this.guid}-error"
          ?disabled="${this.disabled}"
          @change="${this._handleChangeHours}"
        >
          <option value selected></option>
          ${this._getOptionsHourTemplate()}
        </select>
        <span class="kuc-base-mobile-time-1-25-0__group__colon">:</span>
        <select
          class="kuc-base-mobile-time-1-25-0__group__minutes"
          aria-label="Minute"
          aria-describedby="${this.guid}-error"
          ?disabled="${this.disabled}"
          @change="${this._handleChangeMinutes}"
        >
          <option value selected></option>
          ${this._getOptionsMinuteTemplate()}
        </select>
      </fieldset>
    `}updated(e){e.has(`value`)&&this._updateInputValue(),super.update(e)}_updateInputValue(){let e=vo(this.value,this.hour12);this._hours=e.hours,this._minutes=e.minutes,this._suffix=e.suffix||``,this._setValueToInput(e)}_setValueToInput(e){if(this._minutesEl.value=e.minutes,e.suffix){this._hoursEl.value=e.suffix+` `+e.hours;return}this._hoursEl.value=e.hours}_handleChangeMinutes(e){e.preventDefault(),e.stopPropagation();let t=this._getTimeValueString(),n=e.target.value;this._minutes=n;let r=this._getTimeValueString();this.value=r,this._dispatchEventTimeChange(r,t)}_handleChangeHours(e){e.preventDefault(),e.stopPropagation();let t=this._getTimeValueString(),n=e.target.value.split(` `);n.length===2?(this._hours=n[1],this._suffix=n[0]):(this._hours=n[0],this._suffix=``);let r=this._getTimeValueString();this.value=r,this._dispatchEventTimeChange(r,t)}_getTimeValueString(){let e=`${this._hours}:${this._minutes}`;return this._suffix?So(`${e} ${this._suffix}`):So(e)}_dispatchEventTimeChange(e,t){let n=e===`:`?``:e,r={value:n,oldValue:t===`:`?``:t};r.error=os(n)?``:this._locale.INVALID_TIME_FORMAT,Y(this,`kuc:base-mobile-time-change`,r)}_getOptionsMinuteTemplate(){return this._minuteOptions.map(e=>B` <option value="${e.value}">${e.label}</option> `)}_getOptionsHourTemplate(){return this._hourOptions.map(e=>B` <option value="${e.value}">${e.label}</option> `)}};xu([H({type:String})],Su.prototype,`guid`,void 0),xu([H({type:String,attribute:`lang`,reflect:!0})],Su.prototype,`language`,void 0),xu([H({type:String})],Su.prototype,`value`,void 0),xu([H({type:Boolean})],Su.prototype,`disabled`,void 0),xu([H({type:Boolean})],Su.prototype,`hour12`,void 0),xu([H({type:Boolean})],Su.prototype,`required`,void 0),xu([U()],Su.prototype,`_timeStep`,void 0),xu([U()],Su.prototype,`_hours`,void 0),xu([U()],Su.prototype,`_minutes`,void 0),xu([U()],Su.prototype,`_suffix`,void 0),xu([U()],Su.prototype,`_hourOptions`,void 0),xu([U()],Su.prototype,`_minuteOptions`,void 0),xu([W(`.kuc-base-mobile-time-1-25-0__group__hours`)],Su.prototype,`_hoursEl`,void 0),xu([W(`.kuc-base-mobile-time-1-25-0__group__minutes`)],Su.prototype,`_minutesEl`,void 0),window.customElements.get(`kuc-base-mobile-time-1-25-0`)||(X(bu),window.customElements.define(`kuc-base-mobile-time-1-25-0`,Su));var Cu=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},wu;(()=>{if(wu=window.customElements.get(`kuc-mobile-time-picker-1-25-0`),wu)return;class e extends J{constructor(e){super(),this.className=``,this.error=``,this.id=``,this.label=``,this.language=`auto`,this.value=``,this.disabled=!1,this.hour12=!1,this.requiredIcon=!1,this.visible=!0,this._inputValue=``,this._errorFormat=``,this._isSelectError=!1,this._GUID=Z();let t=Q(e);Object.assign(this,t)}shouldUpdate(e){return this.value===void 0||this.value===``||os(this.value)?!0:(this.throwErrorAfterUpdateComplete(ao.VALUE),!1)}willUpdate(){this.value===void 0||this.value===``||(this.value=Ko(this.value))}update(e){e.has(`value`)&&!this._isSelectError&&(this.value===void 0?this._inputValue=``:this._inputValue=this.value||``,this._errorFormat=``),super.update(e)}render(){return B`
        <div class="kuc-mobile-time-picker-1-25-0__group">
          <label
            class="kuc-mobile-time-picker-1-25-0__group__label"
            ?hidden="${!this.label}"
          >
            <kuc-base-mobile-label-1-25-0
              .guid="${this._GUID}"
              .text="${this.label}"
              .requiredIcon="${this.requiredIcon}"
            ></kuc-base-mobile-label-1-25-0>
          </label>
          <div class="kuc-base-mobile-time-1-25-0__group__wrapper">
            <kuc-base-mobile-time-1-25-0
              .value="${this._inputValue}"
              .disabled="${this.disabled}"
              .hour12="${this.hour12}"
              .guid="${this._GUID}"
              .language="${this._getLanguage()}"
              .required="${this.requiredIcon}"
              @kuc:base-mobile-time-change="${this._handleTimeChange}"
            ></kuc-base-mobile-time-1-25-0>
          </div>
          <kuc-base-mobile-error-1-25-0
            .guid="${this._GUID}"
            .text="${this._errorFormat||this.error}"
            ariaLive="assertive"
          ></kuc-base-mobile-error-1-25-0>
        </div>
      `}updated(){this._isSelectError=!1}_handleTimeChange(e){e.preventDefault(),e.stopPropagation();let t={value:e.detail.value,oldValue:this.value};if(this._inputValue=e.detail.value,e.detail.error){this._isSelectError=!0,this._errorFormat=e.detail.error,this.value=void 0,t.value=void 0,this.error=``,Y(this,`change`,t);return}this._isSelectError=!1,this._errorFormat=``,this.value=e.detail.value,Y(this,`change`,t)}_getLanguage(){let e=[`en`,`ja`,`zh`,`zh-TW`,`es`];return e.indexOf(this.language)===-1?e.indexOf(document.documentElement.lang)===-1?`en`:document.documentElement.lang:this.language}}Cu([H({type:String,reflect:!0,attribute:`class`})],e.prototype,`className`,void 0),Cu([H({type:String})],e.prototype,`error`,void 0),Cu([H({type:String,reflect:!0,attribute:`id`})],e.prototype,`id`,void 0),Cu([H({type:String})],e.prototype,`label`,void 0),Cu([H({type:String,attribute:`lang`,reflect:!0,converter:Uo})],e.prototype,`language`,void 0),Cu([H({type:String,hasChanged(e,t){return(e===``||e===void 0)&&e===t?!0:e!==t}})],e.prototype,`value`,void 0),Cu([H({type:Boolean})],e.prototype,`disabled`,void 0),Cu([H({type:Boolean})],e.prototype,`hour12`,void 0),Cu([H({type:Boolean})],e.prototype,`requiredIcon`,void 0),Cu([H({type:Boolean,attribute:`hidden`,reflect:!0,converter:q})],e.prototype,`visible`,void 0),Cu([U()],e.prototype,`_inputValue`,void 0),Cu([U()],e.prototype,`_errorFormat`,void 0),window.customElements.define(`kuc-mobile-time-picker-1-25-0`,e),X(yu),wu=e})();var Tu=`
kuc-mobile-datetime-picker-1-25-0,
kuc-mobile-datetime-picker-1-25-0 * {
color: #333333;
font-family: "メイリオ", Meiryo, "Hiragino Kaku Gothic ProN",
    "ヒラギノ角ゴ ProN W3", "ＭＳ Ｐゴシック", "Lucida Grande",
    "Lucida Sans Unicode", Arial, Verdana, sans-serif;
}
kuc-mobile-datetime-picker-1-25-0:lang(zh),
kuc-mobile-datetime-picker-1-25-0:lang(zh) * {
font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,
    Hei, "Heiti SC", "Lucida Grande", "Lucida Sans Unicode", Arial,
    Verdana, sans-serif;
}
kuc-mobile-datetime-picker-1-25-0:lang(zh-TW),
kuc-mobile-datetime-picker-1-25-0:lang(zh-TW) * {
    font-family: "微軟正黒體","Microsoft JhengHei","新宋体",NSimSun,STHeiti,
    Hei,"Heiti SC","Lucida Grande","Lucida Sans Unicode",Arial,
    Verdana,sans-serif
}
kuc-mobile-datetime-picker-1-25-0:lang(es),
kuc-mobile-datetime-picker-1-25-0:lang(es) * {
    font-family: sans-serif;
}
kuc-mobile-datetime-picker-1-25-0 {
font-size: 13px;
color: #333333;
display: inline-table;
vertical-align: top;
width: 100%;
}
kuc-mobile-datetime-picker-1-25-0[hidden] {
display: none;
}
.kuc-mobile-datetime-picker-1-25-0__group {
border: 0;
padding: 0;
}
.kuc-mobile-datetime-picker-1-25-0__group__label {
display: inline-block;
font-weight: bold;
line-height: 1.5;
padding: 0px;
white-space: nowrap;
margin: 0 0 4px 0;
}
.kuc-mobile-datetime-picker-1-25-0__group__label[hidden] {
display: none;
}
.kuc-mobile-datetime-picker-1-25-0__group__input {
display: flex;
align-items: center;
margin-right: 0.5em;
margin-left: 0.5em;
}
.kuc-mobile-datetime-picker-1-25-0__group__input--date {
width: 130px;
margin-right: 10px;
}
.kuc-mobile-datetime-picker-1-25-0__group__input--time {
max-width: 10px;
}
`,Eu=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},Du;(()=>{if(Du=window.customElements.get(`kuc-mobile-datetime-picker-1-25-0`),Du)return;class e extends J{constructor(e){super(),this.className=``,this.error=``,this.id=``,this.label=``,this.language=`auto`,this.value=``,this.disabled=!1,this.hour12=!1,this.requiredIcon=!1,this.visible=!0,this._dateConverted=``,this._changeDateByUI=!1,this._changeTimeByUI=!1,this._previousTimeValue=``,this._previousDateValue=``,this._dateValue=``,this._timeValue=``,this._errorFormat=``,this._errorText=``,this._GUID=Z();let t=Q(e);Object.assign(this,t)}shouldUpdate(e){return this.value===void 0||this.value===``?!0:typeof this.value!=`string`||(this._dateAndTime=this._getDateTimeValue(this.value),this._dateConverted=Go(this._dateAndTime.date),!(us(this._dateAndTime.date,this._dateAndTime.time)&&cs(this._dateConverted)))?(this.throwErrorAfterUpdateComplete(ao.VALUE),!1):!0}willUpdate(e){if(this._changeDateByUI||this._changeTimeByUI){this._updateValueAndErrorWhenUIChange();return}this._errorFormat=``,this._updateErrorText(),this._updateValueWhenSetter()}update(e){e.has(`value`)&&(this.value===void 0&&this._setUndefinedValue(),this.value===``&&this._setEmptyValue()),super.update(e)}_updateValueWhenSetter(){if(this._errorFormat=``,this.value===``||this.value===void 0){this._previousTimeValue=``;return}this._setDateTimeValueSeparate(this._dateAndTime,this._dateConverted),this.value=this._getDateTimeString()}_setDateTimeValueSeparate(e,t){this._dateValue=t,this._timeValue=this._dateValue&&cs(t)?Ko(e.time.slice(0,5)):this._previousTimeValue}_updateValueAndErrorWhenUIChange(){let e=this._checkDateTimeFormat();this.value=e?this.value:void 0,this._updateErrorText()}_checkDateTimeFormat(){let e=!!this._timeValue&&!this._dateValue,t=!!this._dateValue&&!this._timeValue;return!this._errorFormat&&!e&&!t}_setUndefinedValue(){if(!this._changeTimeByUI){if(this._errorFormat){if(this._changeDateByUI)return;this._dateValue=``,this._timeValue=``;return}this._dateValue=this._previousDateValue,this._timeValue=this._previousTimeValue}}_setEmptyValue(){this._dateValue=``,this._timeValue=``,this._previousTimeValue=``,this._previousDateValue=``}_getDateTimeValue(e){if(e===``||e===void 0)return{date:``,time:``};let t=e.split(`T`),n=t[0],r=t[1];if(e.indexOf(`T`)===e.length-1||t.length>2)return{date:n,time:``};if(!r)return{date:n,time:`00:00`};let[i,a,o]=r.split(`:`),s=`${i}:${a||`00`}`;return o?{date:n,time:`${s}:${o}`}:{date:n,time:s}}render(){return B`
        <fieldset
          class="kuc-mobile-datetime-picker-1-25-0__group"
          aria-describedby="${this._GUID}-error"
        >
          <legend
            class="kuc-mobile-datetime-picker-1-25-0__group__label"
            ?hidden="${!this.label}"
          >
            <kuc-base-mobile-label-1-25-0
              .requiredIcon="${this.requiredIcon}"
              .text="${this.label}"
            ></kuc-base-mobile-label-1-25-0>
          </legend>
          <div class="kuc-mobile-datetime-picker-1-25-0__group__input">
            <kuc-mobile-base-date-1-25-0
              class="kuc-mobile-datetime-picker-1-25-0__group__input--date"
              .disabled="${this.disabled}"
              .value="${this._dateValue}"
              .inputId="${this._GUID}"
              .inputAriaInvalid="${this.error!==``}"
              .required="${this.requiredIcon}"
              .language="${this._getLanguage()}"
              @kuc:mobile-base-date-change="${this._handleDateChange}"
            >
            </kuc-mobile-base-date-1-25-0>
            <kuc-base-mobile-time-1-25-0
              class="kuc-mobile-datetime-picker-1-25-0__group__input--time"
              .value="${this._timeValue}"
              .disabled="${this.disabled}"
              .hour12="${this.hour12}"
              .guid="${this._GUID}"
              .language="${this._getLanguage()}"
              .required="${this.requiredIcon}"
              @kuc:base-mobile-time-change="${this._handleTimeChange}"
            ></kuc-base-mobile-time-1-25-0>
          </div>
          <kuc-base-mobile-error-1-25-0
            .guid="${this._GUID}"
            .text="${this._errorText}"
          >
          </kuc-base-mobile-error-1-25-0>
        </fieldset>
      `}updated(){this._resetState()}_resetState(){this._previousTimeValue=``,this._previousDateValue=``,this._changeDateByUI=!1,this._changeTimeByUI=!1}_updateErrorText(){this._errorText=this._errorFormat||this.error}_getLanguage(){let e=[`en`,`ja`,`zh`,`zh-TW`,`es`];return e.indexOf(this.language)===-1?e.indexOf(document.documentElement.lang)===-1?`en`:document.documentElement.lang:this.language}_handleDateChange(e){if(e.stopPropagation(),e.preventDefault(),e.detail.value===this._dateValue)return;this._changeDateByUI=!0;let t=this._dateValue;e.detail.error?(this._errorFormat=e.detail.error,this.error=``):t=e.detail.value,this._updateDateTimeValue(t,`date`)}_handleTimeChange(e){e.preventDefault(),e.stopPropagation(),this._changeTimeByUI=!0;let t=this._timeValue;e.detail.error?(this._errorFormat=e.detail.error,this.error=``):this._errorFormat=``,t=e.detail.value,this._updateDateTimeValue(t,`time`)}_updateDateTimeValue(e,t){let n=this.value;t===`date`?this._dateValue=e||``:this._timeValue=e,this._previousTimeValue=this._timeValue,this._previousDateValue=this._dateValue;let r=this._errorFormat?void 0:this._getDateTimeString(),i=this._errorFormat?void 0:r;this.value=i;let a=this._errorFormat?void 0:r;this.value=a;let o={value:i,oldValue:n,changedPart:t};Y(this,`change`,o)}_getDateTimeString(){if(this._dateValue===``&&this._timeValue===``)return``;if(!this._dateValue||!this._timeValue)return;if(!this.value)return`${this._dateValue}T${this._timeValue}:00`;let e=this.value.split(`:`);return e.length===3?`${this._dateValue}T${this._timeValue}:${e[2]}`:`${this._dateValue}T${this._timeValue}:00`}}Eu([H({type:String,reflect:!0,attribute:`class`})],e.prototype,`className`,void 0),Eu([H({type:String})],e.prototype,`error`,void 0),Eu([H({type:String,reflect:!0,attribute:`id`})],e.prototype,`id`,void 0),Eu([H({type:String})],e.prototype,`label`,void 0),Eu([H({type:String,attribute:`lang`,reflect:!0,converter:Uo})],e.prototype,`language`,void 0),Eu([H({type:String,hasChanged(e,t){return(e===``||e===void 0)&&e===t?!0:e!==t}})],e.prototype,`value`,void 0),Eu([H({type:Boolean})],e.prototype,`disabled`,void 0),Eu([H({type:Boolean})],e.prototype,`hour12`,void 0),Eu([H({type:Boolean})],e.prototype,`requiredIcon`,void 0),Eu([H({type:Boolean,attribute:`hidden`,reflect:!0,converter:q})],e.prototype,`visible`,void 0),Eu([U()],e.prototype,`_dateValue`,void 0),Eu([U()],e.prototype,`_timeValue`,void 0),Eu([U()],e.prototype,`_errorFormat`,void 0),Eu([U()],e.prototype,`_errorText`,void 0),window.customElements.define(`kuc-mobile-datetime-picker-1-25-0`,e),X(Tu),Du=e})();var Ou={d:(e,t)=>{for(var n in t)Ou.o(t,n)&&!Ou.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)},ku={};Ou.d(ku,{r:()=>Au});var Au=`1.25.0`;ku.r;var ju={d:(e,t)=>{for(var n in t)ju.o(t,n)&&!ju.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)},Mu={};ju.d(Mu,{$:()=>Nu});var Nu=void 0;Mu.$;var Pu=Ir(`<div></div>`);function Fu(e,t){Je(t,!0);let n=yi(t,`textAlign`,3,`left`),r=yi(t,`visible`,3,!0),i=yi(t,`disabled`,3,!1),a=yi(t,`requiredIcon`,3,!1),o;bi(()=>{let e=new cl({label:t.label,value:t.value,placeholder:t.placeholder,prefix:t.prefix,suffix:t.suffix,textAlign:n(),error:t.error,className:t.className,id:t.id,visible:r(),disabled:i(),requiredIcon:a()});o.appendChild(e),t.onchange&&e.addEventListener(`change`,t.onchange),t.onfocus&&e.addEventListener(`focus`,t.onfocus),t.oninput&&e.addEventListener(`input`,t.oninput)});var s=Pu();vi(s,e=>o=e,()=>o),Lr(e,s),Ye()}var Iu=Ir(`<div></div>`);function Lu(e,t){Je(t,!0);let n=yi(t,`language`,3,`auto`),r=yi(t,`timeStep`,3,30),i=yi(t,`hour12`,3,!1),a=yi(t,`visible`,3,!0),o=yi(t,`disabled`,3,!1),s=yi(t,`requiredIcon`,3,!1),c;bi(()=>{let e=new dc({label:t.label,value:t.value,language:n(),max:t.max,min:t.min,timeStep:r(),hour12:i(),error:t.error,className:t.className,id:t.id,visible:a(),disabled:o(),requiredIcon:s()});c.appendChild(e),t.onchange&&e.addEventListener(`change`,t.onchange)});var l=Iu();vi(l,e=>c=e,()=>c),Lr(e,l),Ye()}async function Ru(e,t,n){let r=new URLSearchParams;r.append(`_lc`,kintone.getLoginUser().language),r.append(`_ref`,encodeURI(window.location.href));let i=await(await fetch(`/k/api/directory/search.json?${r}`,{method:`POST`,headers:{"Content-Type":`application/json; charset=utf-8`},body:JSON.stringify({term:e,appId:t,recordId:n,spaceId:null})})).json();if(console.log(`directory search response:`,i),!i.result)return[];let{users:a,orgs:o,groups:s}=i.result;return[...a.map(e=>({code:e.code,name:e.name,type:`USER`,avatar:e.photo?.size_24||``})),...o.map(e=>({code:e.code,name:e.name,type:`ORGANIZATION`,avatar:`https://static.cybozu.com/contents/k/image/argo/preset/user/organization_48.png`})),...s.map(e=>({code:e.code,name:e.name,type:`GROUP`,avatar:`https://static.cybozu.com/contents/k/image/argo/preset/user/group_48.png`}))]}var zu=Ir(`<span style="
          display:flex;
          align-items:center;
          gap:6px;
          background:#f0f4f5;
          border:1px solid #e3e7e8;
          border-radius:16px;
          padding:4px 6px 4px 10px;
          font-size:13px;
        "> <button type="button" aria-label="削除" style="
              border:none;
              background:none;
              cursor:pointer;
              font-size:14px;
              line-height:1;
              padding:0 4px;
              color:#888;
            ">×</button></span>`),Bu=Ir(`<div style="display:flex; flex-wrap:wrap; gap:6px; margin-top:8px;"></div>`),Vu=Ir(`<div role="option"><img alt="" width="24" height="24" style="border-radius:50%; flex-shrink:0;"/> <span style="font-weight:500;"> </span> <span style="color:#888; font-size:11px; margin-left:auto;"> </span></div>`),Hu=Ir(`<div></div>`),Uu=Ir(`<div style="position:relative;"><label style="font-size:14px; display:block; margin-bottom:6px;">参加者</label> <input type="text" style="width:100%; box-sizing:border-box; padding:8px; font-size:14px;" placeholder="名前またはコードで検索"/> <!> <!></div>`);function Wu(e,t){Je(t,!0);let n=yi(t,`mentions`,31,()=>an([])),r,i=Qt(``),a=Qt(an([])),o=Qt(!1),s=Qt(0),c=Qt(0),l=Qt(0);async function u(){let e=z(i).replace(/^@/,``).trim();if(e===``){I(o,!1);return}let n=await Ru(e,t.appId,t.recordId);if(n.length===0){I(o,!1);return}I(a,n,!0),I(l,0),I(o,!0),d()}function d(){let e=r.getBoundingClientRect();I(s,e.bottom+window.scrollY+4),I(c,e.left+window.scrollX)}function f(e){n().some(t=>t.code===e.code&&t.type===e.type)||n([...n(),{code:e.code,type:e.type,name:e.name,avatar:e.avatar}]),I(i,``),I(o,!1),r.focus()}function p(e){n(n().filter((t,n)=>n!==e))}function m(e){z(o)&&(e.key===`ArrowDown`?(e.preventDefault(),I(l,(z(l)+1)%z(a).length)):e.key===`ArrowUp`?(e.preventDefault(),I(l,(z(l)-1+z(a).length)%z(a).length)):e.key===`Enter`||e.key===`Tab`?(e.preventDefault(),f(z(a)[z(l)])):e.key===`Escape`&&I(o,!1))}function h(e){r&&!r.contains(e.target)&&I(o,!1)}bi(()=>document.addEventListener(`mousedown`,h)),xi(()=>document.removeEventListener(`mousedown`,h));var g=Uu(),_=hn(mn(g),2);li(_),vi(_,e=>r=e,()=>r);var v=hn(_,2),y=e=>{var t=Bu();Yr(t,21,n,Gr,(e,t,n)=>{var r=zu(),i=mn(r),a=hn(i);Re(r),Fn(()=>Rr(i,`${z(t).name??z(t).code??``} `)),Or(`click`,a,()=>p(n)),Lr(e,r)}),Re(t),Lr(e,t)};Wr(v,e=>{n().length>0&&e(y)});var b=hn(v,2),x=e=>{var t=Hu();Yr(t,21,()=>z(a),Gr,(e,t,n)=>{var r=Vu(),i=mn(r),a=hn(i,2),o=mn(a,!0);Re(a);var s=hn(a,2),c=mn(s,!0);Re(s),Re(r),Fn(()=>{ui(r,`aria-selected`,n===z(l)),ai(r,`
            display:flex;
            align-items:center;
            gap:8px;
            padding:8px 12px;
            cursor:pointer;
            background:${n===z(l)?`#f5f5f5`:`white`};
            font-size:13px;
          `),ui(i,`src`,z(t).avatar),Rr(o,z(t).name),Rr(c,z(t).code)}),Or(`mousedown`,r,e=>{e.preventDefault(),f(z(t))}),Lr(e,r)}),Re(t),Fn(()=>ai(t,`
      position:fixed;
      top:${z(s)??``}px;
      left:${z(c)??``}px;
      background:white;
      border:1px solid #e3e7e8;
      border-radius:4px;
      box-shadow:0 4px 12px rgba(0,0,0,0.15);
      z-index:99999;
      min-width:220px;
      max-height:200px;
      overflow-y:auto;
    `)),Lr(e,t)};Wr(b,e=>{z(o)&&e(x)}),Re(g),Or(`input`,_,u),Or(`keydown`,_,m),mi(_,()=>z(i),e=>I(i,e)),Lr(e,g),Ye()}kr([`input`,`keydown`,`click`,`mousedown`]);var Gu=Ir(`<div style="margin-bottom:8px;"><!></div>`),Ku=Ir(`<button style="cursor:pointer;">＋ 選択肢を追加</button>`),qu=Ir(`<div style="display:flex; flex-direction:column; gap:16px; min-width:400px; padding:24px;"><!> <div><div style="font-size:14px; margin-bottom:8px;">選択肢</div> <!> <!></div> <!> <!></div>`);function Ju(e,t){Je(t,!0);let n=Qt(``),r=Qt(an([``,``])),i=Qt(``),a=Qt(an([]));function o(){z(r).length>=5||I(r,[...z(r),``],!0)}function s(e,t){I(r,z(r).map((n,r)=>r===e?t:n),!0)}function c(){return{title:z(n),options:z(r),deadline:z(i),mentions:z(a).map(({code:e,type:t})=>({code:e,type:t}))}}var l={getFormData:c},u=qu(),d=mn(u);Fu(d,{label:`タイトル`,get value(){return z(n)},placeholder:`質問を入力してください`,requiredIcon:!0,onchange:e=>I(n,e.detail.value,!0)});var f=hn(d,2),p=hn(mn(f),2);Yr(p,17,()=>z(r),Gr,(e,t,n)=>{var r=Gu();Fu(mn(r),{get value(){return z(t)},placeholder:`選択肢 ${n+1}`,onchange:e=>s(n,e.detail.value)}),Re(r),Lr(e,r)});var m=hn(p,2),h=e=>{var t=Ku();Or(`click`,t,o),Lr(e,t)};Wr(m,e=>{z(r).length<5&&e(h)}),Re(f);var g=hn(f,2);return Lu(g,{label:`締め切り`,requiredIcon:!0,onchange:e=>I(i,e.detail.value,!0)}),Wu(hn(g,2),{get appId(){return t.appId},get recordId(){return t.recordId},get mentions(){return z(a)},set mentions(e){I(a,e,!0)}}),Re(u),Lr(e,u),Ye(l)}kr([`click`]);var Yu=a((e=>{Object.defineProperty(e,"__esModule",{value:!0}),e.injectPlatformDeps=e.platformDeps=void 0,e.platformDeps={readFileFromPath:function(){throw Error(`not implemented`)},getRequestToken:function(){throw Error(`not implemented`)},getDefaultAuth:function(){throw Error(`not implemented`)},buildPlatformDependentConfig:function(){throw Error(`not implemented`)},buildHeaders:function(){throw Error(`not implemented`)},buildFormDataValue:function(){throw Error(`not implemented`)},buildBaseUrl:function(){throw Error(`not implemented`)},getVersion:function(){throw Error(`not implemented`)}},e.injectPlatformDeps=function(t){t.readFileFromPath&&(e.platformDeps.readFileFromPath=t.readFileFromPath),t.getRequestToken&&(e.platformDeps.getRequestToken=t.getRequestToken),t.getDefaultAuth&&(e.platformDeps.getDefaultAuth=t.getDefaultAuth),t.buildPlatformDependentConfig&&(e.platformDeps.buildPlatformDependentConfig=t.buildPlatformDependentConfig),t.buildHeaders&&(e.platformDeps.buildHeaders=t.buildHeaders),t.buildFormDataValue&&(e.platformDeps.buildFormDataValue=t.buildFormDataValue),t.buildBaseUrl&&(e.platformDeps.buildBaseUrl=t.buildBaseUrl),t.getVersion&&(e.platformDeps.getVersion=t.getVersion)}})),Xu=a((e=>{var t=e&&e.__extends||(function(){var e=function(t,n){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},e(t,n)};return function(t,n){if(typeof n!=`function`&&n!==null)throw TypeError(`Class extends value `+String(n)+` is not a constructor or null`);e(t,n);function r(){this.constructor=t}t.prototype=n===null?Object.create(n):(r.prototype=n.prototype,new r)}})();Object.defineProperty(e,"__esModule",{value:!0}),e.UnsupportedPlatformError=void 0,e.UnsupportedPlatformError=function(e){t(n,e);function n(t){var r=this,i=`This function is not supported in ${t} environment`;return r=e.call(this,i)||this,Error.captureStackTrace&&Error.captureStackTrace(r,n),r.name=`UnsupportedPlatformError`,r.platform=t,Object.setPrototypeOf(r,n.prototype),r}return n}(Error)})),Zu=a(((e,t)=>{function n(){this._types=Object.create(null),this._extensions=Object.create(null);for(let e=0;e<arguments.length;e++)this.define(arguments[e]);this.define=this.define.bind(this),this.getType=this.getType.bind(this),this.getExtension=this.getExtension.bind(this)}n.prototype.define=function(e,t){for(let n in e){let r=e[n].map(function(e){return e.toLowerCase()});n=n.toLowerCase();for(let e=0;e<r.length;e++){let i=r[e];if(i[0]!==`*`){if(!t&&i in this._types)throw Error(`Attempt to change mapping for "`+i+`" extension from "`+this._types[i]+`" to "`+n+'". Pass `force=true` to allow this, otherwise remove "'+i+`" from the list of extensions for "`+n+`".`);this._types[i]=n}}if(t||!this._extensions[n]){let e=r[0];this._extensions[n]=e[0]===`*`?e.substr(1):e}}},n.prototype.getType=function(e){e=String(e);let t=e.replace(/^.*[/\\]/,``).toLowerCase(),n=t.replace(/^.*\./,``).toLowerCase(),r=t.length<e.length;return(n.length<t.length-1||!r)&&this._types[n]||null},n.prototype.getExtension=function(e){return e=/^\s*([^;\s]*)/.test(e)&&RegExp.$1,e&&this._extensions[e.toLowerCase()]||null},t.exports=n})),Qu=a(((e,t)=>{t.exports={"application/andrew-inset":[`ez`],"application/applixware":[`aw`],"application/atom+xml":[`atom`],"application/atomcat+xml":[`atomcat`],"application/atomdeleted+xml":[`atomdeleted`],"application/atomsvc+xml":[`atomsvc`],"application/atsc-dwd+xml":[`dwd`],"application/atsc-held+xml":[`held`],"application/atsc-rsat+xml":[`rsat`],"application/bdoc":[`bdoc`],"application/calendar+xml":[`xcs`],"application/ccxml+xml":[`ccxml`],"application/cdfx+xml":[`cdfx`],"application/cdmi-capability":[`cdmia`],"application/cdmi-container":[`cdmic`],"application/cdmi-domain":[`cdmid`],"application/cdmi-object":[`cdmio`],"application/cdmi-queue":[`cdmiq`],"application/cu-seeme":[`cu`],"application/dash+xml":[`mpd`],"application/davmount+xml":[`davmount`],"application/docbook+xml":[`dbk`],"application/dssc+der":[`dssc`],"application/dssc+xml":[`xdssc`],"application/ecmascript":[`es`,`ecma`],"application/emma+xml":[`emma`],"application/emotionml+xml":[`emotionml`],"application/epub+zip":[`epub`],"application/exi":[`exi`],"application/express":[`exp`],"application/fdt+xml":[`fdt`],"application/font-tdpfr":[`pfr`],"application/geo+json":[`geojson`],"application/gml+xml":[`gml`],"application/gpx+xml":[`gpx`],"application/gxf":[`gxf`],"application/gzip":[`gz`],"application/hjson":[`hjson`],"application/hyperstudio":[`stk`],"application/inkml+xml":[`ink`,`inkml`],"application/ipfix":[`ipfix`],"application/its+xml":[`its`],"application/java-archive":[`jar`,`war`,`ear`],"application/java-serialized-object":[`ser`],"application/java-vm":[`class`],"application/javascript":[`js`,`mjs`],"application/json":[`json`,`map`],"application/json5":[`json5`],"application/jsonml+json":[`jsonml`],"application/ld+json":[`jsonld`],"application/lgr+xml":[`lgr`],"application/lost+xml":[`lostxml`],"application/mac-binhex40":[`hqx`],"application/mac-compactpro":[`cpt`],"application/mads+xml":[`mads`],"application/manifest+json":[`webmanifest`],"application/marc":[`mrc`],"application/marcxml+xml":[`mrcx`],"application/mathematica":[`ma`,`nb`,`mb`],"application/mathml+xml":[`mathml`],"application/mbox":[`mbox`],"application/mediaservercontrol+xml":[`mscml`],"application/metalink+xml":[`metalink`],"application/metalink4+xml":[`meta4`],"application/mets+xml":[`mets`],"application/mmt-aei+xml":[`maei`],"application/mmt-usd+xml":[`musd`],"application/mods+xml":[`mods`],"application/mp21":[`m21`,`mp21`],"application/mp4":[`mp4s`,`m4p`],"application/msword":[`doc`,`dot`],"application/mxf":[`mxf`],"application/n-quads":[`nq`],"application/n-triples":[`nt`],"application/node":[`cjs`],"application/octet-stream":[`bin`,`dms`,`lrf`,`mar`,`so`,`dist`,`distz`,`pkg`,`bpk`,`dump`,`elc`,`deploy`,`exe`,`dll`,`deb`,`dmg`,`iso`,`img`,`msi`,`msp`,`msm`,`buffer`],"application/oda":[`oda`],"application/oebps-package+xml":[`opf`],"application/ogg":[`ogx`],"application/omdoc+xml":[`omdoc`],"application/onenote":[`onetoc`,`onetoc2`,`onetmp`,`onepkg`],"application/oxps":[`oxps`],"application/p2p-overlay+xml":[`relo`],"application/patch-ops-error+xml":[`xer`],"application/pdf":[`pdf`],"application/pgp-encrypted":[`pgp`],"application/pgp-signature":[`asc`,`sig`],"application/pics-rules":[`prf`],"application/pkcs10":[`p10`],"application/pkcs7-mime":[`p7m`,`p7c`],"application/pkcs7-signature":[`p7s`],"application/pkcs8":[`p8`],"application/pkix-attr-cert":[`ac`],"application/pkix-cert":[`cer`],"application/pkix-crl":[`crl`],"application/pkix-pkipath":[`pkipath`],"application/pkixcmp":[`pki`],"application/pls+xml":[`pls`],"application/postscript":[`ai`,`eps`,`ps`],"application/provenance+xml":[`provx`],"application/pskc+xml":[`pskcxml`],"application/raml+yaml":[`raml`],"application/rdf+xml":[`rdf`,`owl`],"application/reginfo+xml":[`rif`],"application/relax-ng-compact-syntax":[`rnc`],"application/resource-lists+xml":[`rl`],"application/resource-lists-diff+xml":[`rld`],"application/rls-services+xml":[`rs`],"application/route-apd+xml":[`rapd`],"application/route-s-tsid+xml":[`sls`],"application/route-usd+xml":[`rusd`],"application/rpki-ghostbusters":[`gbr`],"application/rpki-manifest":[`mft`],"application/rpki-roa":[`roa`],"application/rsd+xml":[`rsd`],"application/rss+xml":[`rss`],"application/rtf":[`rtf`],"application/sbml+xml":[`sbml`],"application/scvp-cv-request":[`scq`],"application/scvp-cv-response":[`scs`],"application/scvp-vp-request":[`spq`],"application/scvp-vp-response":[`spp`],"application/sdp":[`sdp`],"application/senml+xml":[`senmlx`],"application/sensml+xml":[`sensmlx`],"application/set-payment-initiation":[`setpay`],"application/set-registration-initiation":[`setreg`],"application/shf+xml":[`shf`],"application/sieve":[`siv`,`sieve`],"application/smil+xml":[`smi`,`smil`],"application/sparql-query":[`rq`],"application/sparql-results+xml":[`srx`],"application/srgs":[`gram`],"application/srgs+xml":[`grxml`],"application/sru+xml":[`sru`],"application/ssdl+xml":[`ssdl`],"application/ssml+xml":[`ssml`],"application/swid+xml":[`swidtag`],"application/tei+xml":[`tei`,`teicorpus`],"application/thraud+xml":[`tfi`],"application/timestamped-data":[`tsd`],"application/toml":[`toml`],"application/trig":[`trig`],"application/ttml+xml":[`ttml`],"application/ubjson":[`ubj`],"application/urc-ressheet+xml":[`rsheet`],"application/urc-targetdesc+xml":[`td`],"application/voicexml+xml":[`vxml`],"application/wasm":[`wasm`],"application/widget":[`wgt`],"application/winhlp":[`hlp`],"application/wsdl+xml":[`wsdl`],"application/wspolicy+xml":[`wspolicy`],"application/xaml+xml":[`xaml`],"application/xcap-att+xml":[`xav`],"application/xcap-caps+xml":[`xca`],"application/xcap-diff+xml":[`xdf`],"application/xcap-el+xml":[`xel`],"application/xcap-ns+xml":[`xns`],"application/xenc+xml":[`xenc`],"application/xhtml+xml":[`xhtml`,`xht`],"application/xliff+xml":[`xlf`],"application/xml":[`xml`,`xsl`,`xsd`,`rng`],"application/xml-dtd":[`dtd`],"application/xop+xml":[`xop`],"application/xproc+xml":[`xpl`],"application/xslt+xml":[`*xsl`,`xslt`],"application/xspf+xml":[`xspf`],"application/xv+xml":[`mxml`,`xhvml`,`xvml`,`xvm`],"application/yang":[`yang`],"application/yin+xml":[`yin`],"application/zip":[`zip`],"audio/3gpp":[`*3gpp`],"audio/adpcm":[`adp`],"audio/amr":[`amr`],"audio/basic":[`au`,`snd`],"audio/midi":[`mid`,`midi`,`kar`,`rmi`],"audio/mobile-xmf":[`mxmf`],"audio/mp3":[`*mp3`],"audio/mp4":[`m4a`,`mp4a`],"audio/mpeg":[`mpga`,`mp2`,`mp2a`,`mp3`,`m2a`,`m3a`],"audio/ogg":[`oga`,`ogg`,`spx`,`opus`],"audio/s3m":[`s3m`],"audio/silk":[`sil`],"audio/wav":[`wav`],"audio/wave":[`*wav`],"audio/webm":[`weba`],"audio/xm":[`xm`],"font/collection":[`ttc`],"font/otf":[`otf`],"font/ttf":[`ttf`],"font/woff":[`woff`],"font/woff2":[`woff2`],"image/aces":[`exr`],"image/apng":[`apng`],"image/avif":[`avif`],"image/bmp":[`bmp`],"image/cgm":[`cgm`],"image/dicom-rle":[`drle`],"image/emf":[`emf`],"image/fits":[`fits`],"image/g3fax":[`g3`],"image/gif":[`gif`],"image/heic":[`heic`],"image/heic-sequence":[`heics`],"image/heif":[`heif`],"image/heif-sequence":[`heifs`],"image/hej2k":[`hej2`],"image/hsj2":[`hsj2`],"image/ief":[`ief`],"image/jls":[`jls`],"image/jp2":[`jp2`,`jpg2`],"image/jpeg":[`jpeg`,`jpg`,`jpe`],"image/jph":[`jph`],"image/jphc":[`jhc`],"image/jpm":[`jpm`],"image/jpx":[`jpx`,`jpf`],"image/jxr":[`jxr`],"image/jxra":[`jxra`],"image/jxrs":[`jxrs`],"image/jxs":[`jxs`],"image/jxsc":[`jxsc`],"image/jxsi":[`jxsi`],"image/jxss":[`jxss`],"image/ktx":[`ktx`],"image/ktx2":[`ktx2`],"image/png":[`png`],"image/sgi":[`sgi`],"image/svg+xml":[`svg`,`svgz`],"image/t38":[`t38`],"image/tiff":[`tif`,`tiff`],"image/tiff-fx":[`tfx`],"image/webp":[`webp`],"image/wmf":[`wmf`],"message/disposition-notification":[`disposition-notification`],"message/global":[`u8msg`],"message/global-delivery-status":[`u8dsn`],"message/global-disposition-notification":[`u8mdn`],"message/global-headers":[`u8hdr`],"message/rfc822":[`eml`,`mime`],"model/3mf":[`3mf`],"model/gltf+json":[`gltf`],"model/gltf-binary":[`glb`],"model/iges":[`igs`,`iges`],"model/mesh":[`msh`,`mesh`,`silo`],"model/mtl":[`mtl`],"model/obj":[`obj`],"model/step+xml":[`stpx`],"model/step+zip":[`stpz`],"model/step-xml+zip":[`stpxz`],"model/stl":[`stl`],"model/vrml":[`wrl`,`vrml`],"model/x3d+binary":[`*x3db`,`x3dbz`],"model/x3d+fastinfoset":[`x3db`],"model/x3d+vrml":[`*x3dv`,`x3dvz`],"model/x3d+xml":[`x3d`,`x3dz`],"model/x3d-vrml":[`x3dv`],"text/cache-manifest":[`appcache`,`manifest`],"text/calendar":[`ics`,`ifb`],"text/coffeescript":[`coffee`,`litcoffee`],"text/css":[`css`],"text/csv":[`csv`],"text/html":[`html`,`htm`,`shtml`],"text/jade":[`jade`],"text/jsx":[`jsx`],"text/less":[`less`],"text/markdown":[`markdown`,`md`],"text/mathml":[`mml`],"text/mdx":[`mdx`],"text/n3":[`n3`],"text/plain":[`txt`,`text`,`conf`,`def`,`list`,`log`,`in`,`ini`],"text/richtext":[`rtx`],"text/rtf":[`*rtf`],"text/sgml":[`sgml`,`sgm`],"text/shex":[`shex`],"text/slim":[`slim`,`slm`],"text/spdx":[`spdx`],"text/stylus":[`stylus`,`styl`],"text/tab-separated-values":[`tsv`],"text/troff":[`t`,`tr`,`roff`,`man`,`me`,`ms`],"text/turtle":[`ttl`],"text/uri-list":[`uri`,`uris`,`urls`],"text/vcard":[`vcard`],"text/vtt":[`vtt`],"text/xml":[`*xml`],"text/yaml":[`yaml`,`yml`],"video/3gpp":[`3gp`,`3gpp`],"video/3gpp2":[`3g2`],"video/h261":[`h261`],"video/h263":[`h263`],"video/h264":[`h264`],"video/iso.segment":[`m4s`],"video/jpeg":[`jpgv`],"video/jpm":[`*jpm`,`jpgm`],"video/mj2":[`mj2`,`mjp2`],"video/mp2t":[`ts`],"video/mp4":[`mp4`,`mp4v`,`mpg4`],"video/mpeg":[`mpeg`,`mpg`,`mpe`,`m1v`,`m2v`],"video/ogg":[`ogv`],"video/quicktime":[`qt`,`mov`],"video/webm":[`webm`]}})),$u=a(((e,t)=>{t.exports=new(Zu())(Qu())})),ed=o({author:()=>cd,browser:()=>fd,bugs:()=>od,default:()=>bd,dependencies:()=>gd,description:()=>rd,devDependencies:()=>_d,engines:()=>vd,exports:()=>ld,files:()=>md,homepage:()=>ad,keywords:()=>id,license:()=>`MIT`,main:()=>ud,module:()=>dd,name:()=>td,publishConfig:()=>yd,repository:()=>sd,scripts:()=>hd,types:()=>pd,version:()=>nd}),td,nd,rd,id,ad,od,sd,cd,ld,ud,dd,fd,pd,md,hd,gd,_d,vd,yd,bd,xd=i((()=>{td=`@kintone/rest-api-client`,nd=`6.2.0`,rd=`Kintone REST API client for JavaScript`,id=[`kintone`,`rest`,`api-client`],ad=`https://github.com/kintone/js-sdk/tree/main/packages/rest-api-client#readme`,od={url:`https://github.com/kintone/js-sdk/issues`},sd={type:`git`,url:`git+https://github.com/kintone/js-sdk.git`,directory:`packages/rest-api-client`},cd={name:`Cybozu, Inc.`,url:`https://cybozu.co.jp`},ld={".":{types:{import:`./esm/src/index.d.ts`,require:`./lib/src/index.d.ts`,default:`./lib/src/index.d.ts`},node:{import:`./index.mjs`,require:`./lib/src/index.js`,default:`./lib/src/index.js`},browser:`./lib/src/index.browser.js`},"./package.json":`./package.json`},ud=`lib/src/index.js`,dd=`esm/src/index.js`,fd=`lib/src/index.browser.js`,pd=`lib/src/index.d.ts`,md=[`esm`,`lib`,`umd`,`index.mjs`],hd={prebuild:`pnpm clean`,build:`tsc --build --force`,postbuild:`run-p build:*`,"build:umd_dev":`rollup -c --environment BUILD:development`,"build:umd_prod":`rollup -c --environment BUILD:production`,clean:`rimraf lib esm umd`,fix:`pnpm lint --fix`,lint:`eslint 'src/**/*.ts' --max-warnings 0`,prepublishOnly:`run-p build:umd_*`,start:`pnpm build --watch`,test:`vitest run`,"test:ci":`vitest run`},gd={axios:`1.16.1`,"form-data":`4.0.5`,"js-base64":`3.7.8`,mime:`3.0.0`,qs:`6.15.1`},_d={"@rollup/plugin-babel":`6.1.0`,"@rollup/plugin-commonjs":`26.0.3`,"@rollup/plugin-json":`6.1.0`,"@rollup/plugin-node-resolve":`16.0.3`,"@rollup/plugin-terser":`0.4.4`,"@types/js-base64":`3.3.1`,"@types/mime":`3.0.4`,"@types/qs":`6.15.1`,"babel-loader":`9.2.1`,"core-js":`3.49.0`,rimraf:`6.1.3`,rollup:`4.60.4`,"rollup-plugin-ecma-version-validator":`0.2.13`,"rollup-plugin-license":`3.7.1`,"rollup-plugin-node-globals":`1.4.0`,"rollup-plugin-polyfill-node":`0.13.0`,vite:`5.4.21`,webpack:`5.105.4`,"webpack-cli":`6.0.1`},vd={node:`>=20`},yd={access:`public`},bd={name:td,version:nd,description:rd,keywords:id,homepage:ad,bugs:od,repository:sd,license:`MIT`,author:cd,exports:ld,main:ud,module:dd,browser:fd,types:pd,files:md,scripts:hd,dependencies:gd,devDependencies:_d,engines:vd,publishConfig:yd}})),Sd=a((e=>{var t=e&&e.__awaiter||function(e,t,n,r){function i(e){return e instanceof n?e:new n(function(t){t(e)})}return new(n||=Promise)(function(n,a){function o(e){try{c(r.next(e))}catch(e){a(e)}}function s(e){try{c(r.throw(e))}catch(e){a(e)}}function c(e){e.done?n(e.value):i(e.value).then(o,s)}c((r=r.apply(e,t||[])).next())})},n=e&&e.__generator||function(e,t){var n={label:0,sent:function(){if(a[0]&1)throw a[1];return a[1]},trys:[],ops:[]},r,i,a,o=Object.create((typeof Iterator==`function`?Iterator:Object).prototype);return o.next=s(0),o.throw=s(1),o.return=s(2),typeof Symbol==`function`&&(o[Symbol.iterator]=function(){return this}),o;function s(e){return function(t){return c([e,t])}}function c(s){if(r)throw TypeError(`Generator is already executing.`);for(;o&&(o=0,s[0]&&(n=0)),n;)try{if(r=1,i&&(a=s[0]&2?i.return:s[0]?i.throw||((a=i.return)&&a.call(i),0):i.next)&&!(a=a.call(i,s[1])).done)return a;switch(i=0,a&&(s=[s[0]&2,a.value]),s[0]){case 0:case 1:a=s;break;case 4:return n.label++,{value:s[1],done:!1};case 5:n.label++,i=s[1],s=[0];continue;case 7:s=n.ops.pop(),n.trys.pop();continue;default:if((a=n.trys,!(a=a.length>0&&a[a.length-1]))&&(s[0]===6||s[0]===2)){n=0;continue}if(s[0]===3&&(!a||s[1]>a[0]&&s[1]<a[3])){n.label=s[1];break}if(s[0]===6&&n.label<a[1]){n.label=a[1],a=s;break}if(a&&n.label<a[2]){n.label=a[2],n.ops.push(s);break}a[2]&&n.ops.pop(),n.trys.pop();continue}s=t.call(e,n)}catch(e){s=[6,e],i=0}finally{r=a=0}if(s[0]&5)throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}},r=e&&e.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(e,"__esModule",{value:!0}),e.getVersion=e.buildBaseUrl=e.buildFormDataValue=e.buildHeaders=e.buildPlatformDependentConfig=e.getDefaultAuth=e.getRequestToken=e.readFileFromPath=void 0;var i=Xu(),a=r($u()),o=r((xd(),c(ed).default));e.readFileFromPath=function(e){throw new i.UnsupportedPlatformError(`Browser`)},e.getRequestToken=function(){return t(void 0,void 0,void 0,function(){return n(this,function(e){if(typeof kintone==`object`&&kintone!==null&&typeof kintone.getRequestToken==`function`)return[2,kintone.getRequestToken()];if(typeof garoon==`object`&&garoon!==null&&typeof garoon.connect?.kintone?.getRequestToken==`function`)return[2,garoon.connect.kintone.getRequestToken()];throw Error(`session authentication must specify a request token`)})})},e.getDefaultAuth=function(){return{type:`session`}},e.buildPlatformDependentConfig=function(){return{}},e.buildHeaders=function(){return{}},e.buildFormDataValue=function(e,t){var n={};return t&&(n.type=a.default.getType(t)||void 0),new Blob([e],n)},e.buildBaseUrl=function(e){if(e)return e;if(location===void 0)throw Error(`The baseUrl parameter is required for this environment`);var t=location.host;return`${location.protocol}//${t}`},e.getVersion=function(){return o.default.version}})),Cd=a((e=>{Object.defineProperty(e,"__esModule",{value:!0}),e.buildPath=void 0,e.buildPath=function(e){var t=e.endpointName,n=e.guestSpaceId,r=e.preview;return`/k${n===void 0?``:`/guest/${n}`}/v1${r?`/preview`:``}/${t}.json`}})),wd=a((e=>{var t=e&&e.__assign||function(){return t=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n],t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},t.apply(this,arguments)};Object.defineProperty(e,"__esModule",{value:!0}),e.BaseClient=void 0;var n=Cd();e.BaseClient=function(){function e(e,t){this.client=e,this.guestSpaceId=t}return e.prototype.buildPathWithGuestSpaceId=function(e){return(0,n.buildPath)(t(t({},e),{guestSpaceId:this.guestSpaceId}))},e.prototype.buildPath=function(e){return(0,n.buildPath)(e)},e}()})),Td=a((e=>{var t=e&&e.__extends||(function(){var e=function(t,n){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},e(t,n)};return function(t,n){if(typeof n!=`function`&&n!==null)throw TypeError(`Class extends value `+String(n)+` is not a constructor or null`);e(t,n);function r(){this.constructor=t}t.prototype=n===null?Object.create(n):(r.prototype=n.prototype,new r)}})(),n=e&&e.__assign||function(){return n=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n],t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},n.apply(this,arguments)},r=e&&e.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols==`function`)for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n};Object.defineProperty(e,"__esModule",{value:!0}),e.BulkRequestClient=void 0,e.BulkRequestClient=function(e){t(i,e);function i(t,n){var r=e.call(this,t,n)||this;return r.REQUESTS_LENGTH_LIMIT=20,r}return i.prototype.send=function(e){var t=this,i=e.requests.map(function(e){if(`endpointName`in e){var i=e.endpointName,a=r(e,[`endpointName`]);return n({api:t.buildPathWithGuestSpaceId({endpointName:i})},a)}return e}),a=this.buildPathWithGuestSpaceId({endpointName:`bulkRequest`});return this.client.post(a,{requests:i})},i}(wd().BaseClient)})),Ed=a((e=>{var t=e&&e.__extends||(function(){var e=function(t,n){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},e(t,n)};return function(t,n){if(typeof n!=`function`&&n!==null)throw TypeError(`Class extends value `+String(n)+` is not a constructor or null`);e(t,n);function r(){this.constructor=t}t.prototype=n===null?Object.create(n):(r.prototype=n.prototype,new r)}})(),n=e&&e.__assign||function(){return n=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n],t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},n.apply(this,arguments)},r=e&&e.__awaiter||function(e,t,n,r){function i(e){return e instanceof n?e:new n(function(t){t(e)})}return new(n||=Promise)(function(n,a){function o(e){try{c(r.next(e))}catch(e){a(e)}}function s(e){try{c(r.throw(e))}catch(e){a(e)}}function c(e){e.done?n(e.value):i(e.value).then(o,s)}c((r=r.apply(e,t||[])).next())})},i=e&&e.__generator||function(e,t){var n={label:0,sent:function(){if(a[0]&1)throw a[1];return a[1]},trys:[],ops:[]},r,i,a,o=Object.create((typeof Iterator==`function`?Iterator:Object).prototype);return o.next=s(0),o.throw=s(1),o.return=s(2),typeof Symbol==`function`&&(o[Symbol.iterator]=function(){return this}),o;function s(e){return function(t){return c([e,t])}}function c(s){if(r)throw TypeError(`Generator is already executing.`);for(;o&&(o=0,s[0]&&(n=0)),n;)try{if(r=1,i&&(a=s[0]&2?i.return:s[0]?i.throw||((a=i.return)&&a.call(i),0):i.next)&&!(a=a.call(i,s[1])).done)return a;switch(i=0,a&&(s=[s[0]&2,a.value]),s[0]){case 0:case 1:a=s;break;case 4:return n.label++,{value:s[1],done:!1};case 5:n.label++,i=s[1],s=[0];continue;case 7:s=n.ops.pop(),n.trys.pop();continue;default:if((a=n.trys,!(a=a.length>0&&a[a.length-1]))&&(s[0]===6||s[0]===2)){n=0;continue}if(s[0]===3&&(!a||s[1]>a[0]&&s[1]<a[3])){n.label=s[1];break}if(s[0]===6&&n.label<a[1]){n.label=a[1],a=s;break}if(a&&n.label<a[2]){n.label=a[2],n.ops.push(s);break}a[2]&&n.ops.pop(),n.trys.pop();continue}s=t.call(e,n)}catch(e){s=[6,e],i=0}finally{r=a=0}if(s[0]&5)throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}},a=e&&e.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols==`function`)for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n};Object.defineProperty(e,"__esModule",{value:!0}),e.AppClient=void 0,e.AppClient=function(e){t(o,e);function o(){return e!==null&&e.apply(this,arguments)||this}return o.prototype.getFormFields=function(e){var t=e.preview,r=a(e,[`preview`]),i=this.buildPathWithGuestSpaceId({endpointName:`app/form/fields`,preview:t});return this.client.get(i,n({},r))},o.prototype.addFormFields=function(e){var t=this.buildPathWithGuestSpaceId({endpointName:`app/form/fields`,preview:!0});return this.client.post(t,e)},o.prototype.updateFormFields=function(e){var t=this.buildPathWithGuestSpaceId({endpointName:`app/form/fields`,preview:!0});return this.client.put(t,e)},o.prototype.deleteFormFields=function(e){var t=this.buildPathWithGuestSpaceId({endpointName:`app/form/fields`,preview:!0});return this.client.delete(t,e)},o.prototype.getFormLayout=function(e){var t=e.preview,r=a(e,[`preview`]),i=this.buildPathWithGuestSpaceId({endpointName:`app/form/layout`,preview:t});return this.client.get(i,n({},r))},o.prototype.updateFormLayout=function(e){var t=this.buildPathWithGuestSpaceId({endpointName:`app/form/layout`,preview:!0});return this.client.put(t,e)},o.prototype.getViews=function(e){var t=e.preview,n=a(e,[`preview`]),r=this.buildPathWithGuestSpaceId({endpointName:`app/views`,preview:t});return this.client.get(r,n)},o.prototype.updateViews=function(e){var t=this.buildPathWithGuestSpaceId({endpointName:`app/views`,preview:!0});return this.client.put(t,e)},o.prototype.getApp=function(e){var t=this.buildPathWithGuestSpaceId({endpointName:`app`});return this.client.get(t,e)},o.prototype.getApps=function(e){var t=this.buildPathWithGuestSpaceId({endpointName:`apps`});return this.client.get(t,e)},o.prototype.addApp=function(e){return r(this,void 0,void 0,function(){var t,r,a,o,s;return i(this,function(i){switch(i.label){case 0:return t=e.name,r=e.space,a=this.buildPathWithGuestSpaceId({endpointName:`app`,preview:!0}),r?(o=this.buildPathWithGuestSpaceId({endpointName:`space`}),[4,this.client.get(o,{id:r})]):[3,2];case 1:return s=i.sent().defaultThread,[2,this.client.post(a,n(n({},e),{thread:s}))];case 2:return[2,this.client.post(a,{name:t})]}})})},o.prototype.getAppSettings=function(e){var t=e.preview,n=a(e,[`preview`]),r=this.buildPathWithGuestSpaceId({endpointName:`app/settings`,preview:t});return this.client.get(r,n)},o.prototype.updateAppSettings=function(e){var t=this.buildPathWithGuestSpaceId({endpointName:`app/settings`,preview:!0});return this.client.put(t,e)},o.prototype.getProcessManagement=function(e){var t=e.preview,n=a(e,[`preview`]),r=this.buildPathWithGuestSpaceId({endpointName:`app/status`,preview:t});return this.client.get(r,n)},o.prototype.updateProcessManagement=function(e){var t=this.buildPathWithGuestSpaceId({endpointName:`app/status`,preview:!0});return this.client.put(t,e)},o.prototype.getDeployStatus=function(e){var t=this.buildPathWithGuestSpaceId({endpointName:`app/deploy`,preview:!0});return this.client.get(t,e)},o.prototype.deployApp=function(e){var t=this.buildPathWithGuestSpaceId({endpointName:`app/deploy`,preview:!0});return this.client.post(t,e)},o.prototype.getFieldAcl=function(e){var t=e.preview,r=a(e,[`preview`]),i=this.buildPathWithGuestSpaceId({endpointName:`field/acl`,preview:t});return this.client.get(i,n({},r))},o.prototype.updateFieldAcl=function(e){var t=this.buildPathWithGuestSpaceId({endpointName:`field/acl`,preview:!0});return this.client.put(t,e)},o.prototype.getAppAcl=function(e){var t=e.preview,r=a(e,[`preview`]),i=this.buildPathWithGuestSpaceId({endpointName:`app/acl`,preview:t});return this.client.get(i,n({},r))},o.prototype.updateAppAcl=function(e){var t=this.buildPathWithGuestSpaceId({endpointName:`app/acl`,preview:!0});return this.client.put(t,e)},o.prototype.evaluateRecordsAcl=function(e){var t=this.buildPathWithGuestSpaceId({endpointName:`records/acl/evaluate`});return this.client.get(t,e)},o.prototype.getRecordAcl=function(e){var t=e.preview,r=a(e,[`preview`]),i=this.buildPathWithGuestSpaceId({endpointName:`record/acl`,preview:t});return this.client.get(i,n({},r))},o.prototype.updateRecordAcl=function(e){var t=this.buildPathWithGuestSpaceId({endpointName:`record/acl`,preview:!0});return this.client.put(t,e)},o.prototype.getAppCustomize=function(e){var t=e.preview,r=a(e,[`preview`]),i=this.buildPathWithGuestSpaceId({endpointName:`app/customize`,preview:t});return this.client.get(i,n({},r))},o.prototype.updateAppCustomize=function(e){var t=this.buildPathWithGuestSpaceId({endpointName:`app/customize`,preview:!0});return this.client.put(t,e)},o.prototype.getGeneralNotifications=function(e){var t=e.preview,r=a(e,[`preview`]),i=this.buildPathWithGuestSpaceId({endpointName:`app/notifications/general`,preview:t});return this.client.get(i,n({},r))},o.prototype.updateGeneralNotifications=function(e){var t=this.buildPathWithGuestSpaceId({endpointName:`app/notifications/general`,preview:!0});return this.client.put(t,e)},o.prototype.getPerRecordNotifications=function(e){var t=e.preview,n=a(e,[`preview`]),r=this.buildPathWithGuestSpaceId({endpointName:`app/notifications/perRecord`,preview:t});return this.client.get(r,n)},o.prototype.updatePerRecordNotifications=function(e){var t=this.buildPathWithGuestSpaceId({endpointName:`app/notifications/perRecord`,preview:!0});return this.client.put(t,e)},o.prototype.getReminderNotifications=function(e){var t=e.preview,n=a(e,[`preview`]),r=this.buildPathWithGuestSpaceId({endpointName:`app/notifications/reminder`,preview:t});return this.client.get(r,n)},o.prototype.updateReminderNotifications=function(e){var t=this.buildPathWithGuestSpaceId({endpointName:`app/notifications/reminder`,preview:!0});return this.client.put(t,e)},o.prototype.getReports=function(e){var t=e.preview,n=a(e,[`preview`]),r=this.buildPathWithGuestSpaceId({endpointName:`app/reports`,preview:t});return this.client.get(r,n)},o.prototype.updateReports=function(e){var t=this.buildPathWithGuestSpaceId({endpointName:`app/reports`,preview:!0});return this.client.put(t,e)},o.prototype.getAppActions=function(e){var t=e.preview,n=a(e,[`preview`]),r=this.buildPathWithGuestSpaceId({endpointName:`app/actions`,preview:t});return this.client.get(r,n)},o.prototype.updateAppActions=function(e){var t=this.buildPathWithGuestSpaceId({endpointName:`app/actions`,preview:!0});return this.client.put(t,e)},o.prototype.getAdminNotes=function(e){var t=e.preview,n=a(e,[`preview`]),r=this.buildPathWithGuestSpaceId({endpointName:`app/adminNotes`,preview:t});return this.client.get(r,n)},o.prototype.updateAdminNotes=function(e){var t=this.buildPathWithGuestSpaceId({endpointName:`app/adminNotes`,preview:!0});return this.client.put(t,e)},o.prototype.move=function(e){var t=this.buildPath({endpointName:`app/move`});return this.client.post(t,e)},o.prototype.getPlugins=function(e){var t=e.preview,n=a(e,[`preview`]),r=this.buildPathWithGuestSpaceId({endpointName:`app/plugins`,preview:t});return this.client.get(r,n)},o.prototype.addPlugins=function(e){var t=this.buildPathWithGuestSpaceId({endpointName:`app/plugins`,preview:!0});return this.client.post(t,e)},o.prototype.getStatistics=function(e){var t=this.buildPath({endpointName:`apps/statistics`});return this.client.get(t,e)},o}(wd().BaseClient)})),Dd=a((e=>{var t=e&&e.__extends||(function(){var e=function(t,n){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},e(t,n)};return function(t,n){if(typeof n!=`function`&&n!==null)throw TypeError(`Class extends value `+String(n)+` is not a constructor or null`);e(t,n);function r(){this.constructor=t}t.prototype=n===null?Object.create(n):(r.prototype=n.prototype,new r)}})();Object.defineProperty(e,"__esModule",{value:!0}),e.KintoneAbortSearchError=void 0,e.KintoneAbortSearchError=function(e){t(n,e);function n(t){var r=e.call(this,t)||this;return r.name=`KintoneAbortSearchError`,r.message=t,Object.setPrototypeOf(r,n.prototype),r}return n}(Error)})),Od=a((e=>{var t=e&&e.__extends||(function(){var e=function(t,n){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},e(t,n)};return function(t,n){if(typeof n!=`function`&&n!==null)throw TypeError(`Class extends value `+String(n)+` is not a constructor or null`);e(t,n);function r(){this.constructor=t}t.prototype=n===null?Object.create(n):(r.prototype=n.prototype,new r)}})();Object.defineProperty(e,"__esModule",{value:!0}),e.KintoneAllRecordsError=void 0,e.KintoneAllRecordsError=function(e){t(n,e);function n(t,r,i,a,o){var s=this,c=i-r.length,l=n.extractErrorIndex(c,a,o),u=n.buildErrorMessage(c,i,l);return s=e.call(this,u)||this,s.name=`KintoneAllRecordsError`,s.processedRecordsResult=t,s.unprocessedRecords=r,s.error=a,s.errorIndex=l,s.message=u,s.numOfProcessedRecords=c,s.numOfAllRecords=i,Object.setPrototypeOf(s,n.prototype),s}return n.parseErrorIndex=function(e){var t=[];return Object.keys(e).forEach(function(e){var n=e.match(/records\[(\d+)\]/);n&&t.push(Number(n[1]))}),t.length>0?Math.min.apply(Math,t):null},n.extractErrorIndex=function(e,t,r){if(t.bulkRequestIndex!==void 0&&t.errors){var i=n.parseErrorIndex(t.errors);if(i!==null)return e+t.bulkRequestIndex*r+i}},n.buildErrorMessage=function(e,t,n){var r=``;return n!==void 0&&(r=`An error occurred at records[${n}]. `),r+=`${e}/${t} records are processed successfully`,r},n}(Error)})),kd=a((e=>{var t=e&&e.__extends||(function(){var e=function(t,n){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},e(t,n)};return function(t,n){if(typeof n!=`function`&&n!==null)throw TypeError(`Class extends value `+String(n)+` is not a constructor or null`);e(t,n);function r(){this.constructor=t}t.prototype=n===null?Object.create(n):(r.prototype=n.prototype,new r)}})();Object.defineProperty(e,"__esModule",{value:!0}),e.KintoneRestAPIError=void 0,e.KintoneRestAPIError=function(e){t(n,e);function n(t){var r=this,i=n.buildErrorResponseDateWithIndex(t),a=i.data,o=i.bulkRequestIndex;return r=e.call(this,a.message)||this,r.name=`KintoneRestAPIError`,r.id=a.id,r.code=a.code,r.errors=a.errors,r.status=t.status,r.bulkRequestIndex=o,r.headers=t.headers,r.message=`[${t.status}] [${r.code}] ${r.message} (${r.id})`,Error.captureStackTrace&&Error.captureStackTrace(r,n),Object.setPrototypeOf(r,n.prototype),r}return n.findErrorResponseDataWithIndex=function(e){for(var t=0;t<e.length;t++)if(Object.keys(e[t]).length!==0)return{data:e[t],bulkRequestIndex:t};throw Error("Missing response data in `results`. This error is likely caused by a bug in Kintone REST API Client. Please file an issue.")},n.buildErrorResponseDateWithIndex=function(e){return`results`in e.data?n.findErrorResponseDataWithIndex(e.data.results):{data:e.data}},n}(Error)})),Ad=a((e=>{var t=e&&e.__createBinding||(Object.create?(function(e,t,n,r){r===void 0&&(r=n);var i=Object.getOwnPropertyDescriptor(t,n);(!i||(`get`in i?!t.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,i)}):(function(e,t,n,r){r===void 0&&(r=n),e[r]=t[n]})),n=e&&e.__exportStar||function(e,n){for(var r in e)r!=="default"&&!Object.prototype.hasOwnProperty.call(n,r)&&t(n,e,r)};Object.defineProperty(e,"__esModule",{value:!0}),n(Dd(),e),n(Od(),e),n(kd(),e)})),jd=a((e=>{var t=e&&e.__extends||(function(){var e=function(t,n){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},e(t,n)};return function(t,n){if(typeof n!=`function`&&n!==null)throw TypeError(`Class extends value `+String(n)+` is not a constructor or null`);e(t,n);function r(){this.constructor=t}t.prototype=n===null?Object.create(n):(r.prototype=n.prototype,new r)}})(),n=e&&e.__assign||function(){return n=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n],t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},n.apply(this,arguments)},r=e&&e.__awaiter||function(e,t,n,r){function i(e){return e instanceof n?e:new n(function(t){t(e)})}return new(n||=Promise)(function(n,a){function o(e){try{c(r.next(e))}catch(e){a(e)}}function s(e){try{c(r.throw(e))}catch(e){a(e)}}function c(e){e.done?n(e.value):i(e.value).then(o,s)}c((r=r.apply(e,t||[])).next())})},i=e&&e.__generator||function(e,t){var n={label:0,sent:function(){if(a[0]&1)throw a[1];return a[1]},trys:[],ops:[]},r,i,a,o=Object.create((typeof Iterator==`function`?Iterator:Object).prototype);return o.next=s(0),o.throw=s(1),o.return=s(2),typeof Symbol==`function`&&(o[Symbol.iterator]=function(){return this}),o;function s(e){return function(t){return c([e,t])}}function c(s){if(r)throw TypeError(`Generator is already executing.`);for(;o&&(o=0,s[0]&&(n=0)),n;)try{if(r=1,i&&(a=s[0]&2?i.return:s[0]?i.throw||((a=i.return)&&a.call(i),0):i.next)&&!(a=a.call(i,s[1])).done)return a;switch(i=0,a&&(s=[s[0]&2,a.value]),s[0]){case 0:case 1:a=s;break;case 4:return n.label++,{value:s[1],done:!1};case 5:n.label++,i=s[1],s=[0];continue;case 7:s=n.ops.pop(),n.trys.pop();continue;default:if((a=n.trys,!(a=a.length>0&&a[a.length-1]))&&(s[0]===6||s[0]===2)){n=0;continue}if(s[0]===3&&(!a||s[1]>a[0]&&s[1]<a[3])){n.label=s[1];break}if(s[0]===6&&n.label<a[1]){n.label=a[1],a=s;break}if(a&&n.label<a[2]){n.label=a[2],n.ops.push(s);break}a[2]&&n.ops.pop(),n.trys.pop();continue}s=t.call(e,n)}catch(e){s=[6,e],i=0}finally{r=a=0}if(s[0]&5)throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}},a=e&&e.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols==`function`)for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n},o=e&&e.__spreadArray||function(e,t,n){if(n||arguments.length===2)for(var r=0,i=t.length,a;r<i;r++)(a||!(r in t))&&(a||=Array.prototype.slice.call(t,0,r),a[r]=t[r]);return e.concat(a||Array.prototype.slice.call(t))};Object.defineProperty(e,"__esModule",{value:!0}),e.RecordClient=void 0;var s=Ad(),c=wd(),l=100,u=100,d=100,f=500;e.RecordClient=function(e){t(c,e);function c(t,n,r){var i=e.call(this,t,r)||this;return i.bulkRequestClient=n,i.didWarnMaximumOffsetValue=!1,i}return c.prototype.getRecord=function(e){var t=this.buildPathWithGuestSpaceId({endpointName:`record`});return this.client.get(t,e)},c.prototype.addRecord=function(e){var t=this.buildPathWithGuestSpaceId({endpointName:`record`});return this.client.post(t,e)},c.prototype.updateRecord=function(e){var t=this.buildPathWithGuestSpaceId({endpointName:`record`});return this.client.put(t,e)},c.prototype.upsertRecord=function(e){return r(this,void 0,void 0,function(){var t,n,r,a,o,s;return i(this,function(i){switch(i.label){case 0:return t=e.app,n=e.updateKey,r=e.record,[4,this.getRecords({app:t,query:`${n.field} = "${n.value}"`})];case 1:return a=i.sent().records,a.length>0?a[0].$id.type===`__ID__`?[4,this.updateRecord(e)]:[3,3]:[3,4];case 2:return o=i.sent().revision,[2,{id:a[0].$id.value,revision:o}];case 3:throw Error("Missing `$id` in `getRecords` response. This error is likely caused by a bug in Kintone REST API Client. Please file an issue.");case 4:return[2,this.addRecord({app:t,record:Object.assign({},r,(s={},s[n.field]={value:n.value},s))})]}})})},c.prototype.getRecords=function(e){return r(this,void 0,void 0,function(){var t,n;return i(this,function(r){switch(r.label){case 0:return t=this.buildPathWithGuestSpaceId({endpointName:`records`}),[4,this.client.get(t,e)];case 1:return n=r.sent(),this.warnMaximumOffsetValueIfNeeded(e.query),[2,n]}})})},c.prototype.warnMaximumOffsetValueIfNeeded=function(e){if(e){var t=e.match(/offset\s+(\d+)/i);!this.didWarnMaximumOffsetValue&&t&&Number(t[1])>1e4&&(this.didWarnMaximumOffsetValue=!0,console.warn("Warning: The maximum offset value will be limited to 10,000 in the future. Please use `createCursor()` and `getRecordsByCursor()` instead."))}},c.prototype.addRecords=function(e){return r(this,void 0,void 0,function(){var t,n,r,a;return i(this,function(i){switch(i.label){case 0:return t=this.buildPathWithGuestSpaceId({endpointName:`records`}),[4,this.client.post(t,e)];case 1:return n=i.sent(),r=n.ids,a=n.revisions,[2,{ids:r,revisions:a,records:r.map(function(e,t){return{id:e,revision:a[t]}})}]}})})},c.prototype.updateRecords=function(e){var t=this.buildPathWithGuestSpaceId({endpointName:`records`});return this.client.put(t,e)},c.prototype.deleteRecords=function(e){var t=this.buildPathWithGuestSpaceId({endpointName:`records`});return this.client.delete(t,e)},c.prototype.createCursor=function(e){var t=this.buildPathWithGuestSpaceId({endpointName:`records/cursor`});return this.client.post(t,e)},c.prototype.getRecordsByCursor=function(e){var t=this.buildPathWithGuestSpaceId({endpointName:`records/cursor`});return this.client.get(t,e)},c.prototype.deleteCursor=function(e){var t=this.buildPathWithGuestSpaceId({endpointName:`records/cursor`});return this.client.delete(t,e)},c.prototype.getAllRecords=function(e){return r(this,void 0,void 0,function(){var t,r,o,s,c,l,u;return i(this,function(i){return t=e.condition,r=e.orderBy,o=e.withCursor,s=o===void 0?!0:o,c=a(e,[`condition`,`orderBy`,`withCursor`]),r?s?(l=t?`${t} `:``,u=`${l}${r?`order by ${r}`:``}`,[2,this.getAllRecordsWithCursor(n(n({},c),{query:u}))]):[2,this.getAllRecordsWithOffset(n(n({},c),{orderBy:r,condition:t}))]:[2,this.getAllRecordsWithId(n(n({},c),{condition:t}))]})})},c.prototype.getAllRecordsWithId=function(e){return r(this,void 0,void 0,function(){var t,r,s,c,l,u,d,p,m,h;return i(this,function(i){switch(i.label){case 0:t=e.fields,r=e.condition,s=a(e,[`fields`,`condition`]),c=t,c&&c.length>0&&c.indexOf(`$id`)===-1&&(c=o(o([],c,!0),[`$id`],!1)),l=r?`(${r}) and `:``,u=[],d=`0`,i.label=1;case 1:return p=`${l}\$id > ${d} order by \$id asc limit ${f}`,[4,this.getRecords(n(n({},s),{fields:c,query:p}))];case 2:if(m=i.sent(),u=u.concat(m.records),m.records.length<f)return[3,3];if(h=m.records[m.records.length-1],h.$id.type===`__ID__`)d=h.$id.value;else throw Error("Missing `$id` in `getRecords` response. This error is likely caused by a bug in Kintone REST API Client. Please file an issue.");return[3,1];case 3:return[2,u]}})})},c.prototype.getAllRecordsWithOffset=function(e){return r(this,void 0,void 0,function(){var t,r,o,s,c,l,u,d;return i(this,function(i){switch(i.label){case 0:t=e.condition,r=e.orderBy,o=a(e,[`condition`,`orderBy`]),s=t?`${t} `:``,c=[],l=0,i.label=1;case 1:return u=`${s}${r?`order by ${r} `:``}limit ${f} offset ${l}`,[4,this.getRecords(n(n({},o),{query:u}))];case 2:return d=i.sent(),c=c.concat(d.records),d.records.length<f?[3,3]:(l+=f,[3,1]);case 3:return[2,c]}})})},c.prototype.getAllRecordsWithCursor=function(e){return r(this,void 0,void 0,function(){var t,r,a,o,s;return i(this,function(i){switch(i.label){case 0:return t=n(n({},e),{size:f}),[4,this.createCursor(t)];case 1:r=i.sent().id,i.label=2;case 2:i.trys.push([2,6,,8]),a=[],i.label=3;case 3:return[4,this.getRecordsByCursor({id:r})];case 4:return o=i.sent(),a=a.concat(o.records),o.next?[3,3]:[3,5];case 5:return[2,a];case 6:return s=i.sent(),[4,this.deleteCursor({id:r})];case 7:throw i.sent(),s;case 8:return[2]}})})},c.prototype.addAllRecords=function(e){return r(this,void 0,void 0,function(){return i(this,function(t){if(!e.records.every(function(e){return!Array.isArray(e)&&e instanceof Object}))throw Error("the `records` parameter must be an array of object.");return[2,this.addAllRecordsRecursive(e,e.records.length,[])]})})},c.prototype.addAllRecordsRecursive=function(e,t,n){return r(this,void 0,void 0,function(){var r,a,o,c,u,d;return i(this,function(i){switch(i.label){case 0:if(r=this.bulkRequestClient.REQUESTS_LENGTH_LIMIT*l,a=e.app,o=e.records,c=o.slice(0,r),c.length===0)return[2,{records:n}];i.label=1;case 1:return i.trys.push([1,3,,4]),[4,this.addAllRecordsWithBulkRequest({app:a,records:c})];case 2:return u=i.sent(),[3,4];case 3:throw d=i.sent(),new s.KintoneAllRecordsError({records:n},o,t,d,l);case 4:return[2,this.addAllRecordsRecursive({app:a,records:o.slice(r)},t,n.concat(u))]}})})},c.prototype.addAllRecordsWithBulkRequest=function(e){return r(this,void 0,void 0,function(){var t,n,r;return i(this,function(i){switch(i.label){case 0:return t=this.separateArrayRecursive(l,[],e.records),n=t.map(function(t){return{method:`POST`,endpointName:`records`,payload:{app:e.app,records:t}}}),[4,this.bulkRequestClient.send({requests:n})];case 1:return r=i.sent().results,[2,r.map(function(e){var t=e.ids,n=e.revisions;return t.map(function(e,t){return{id:e,revision:n[t]}})}).reduce(function(e,t){return e.concat(t)},[])]}})})},c.prototype.updateAllRecords=function(e){return r(this,void 0,void 0,function(){return i(this,function(t){return[2,this.updateAllRecordsRecursive(e,e.records.length,[])]})})},c.prototype.updateAllRecordsRecursive=function(e,t,n){return r(this,void 0,void 0,function(){var r,a,o,c,l,d,f;return i(this,function(i){switch(i.label){case 0:if(r=this.bulkRequestClient.REQUESTS_LENGTH_LIMIT*u,a=e.app,o=e.upsert,c=e.records,l=c.slice(0,r),l.length===0)return[2,{records:n}];i.label=1;case 1:return i.trys.push([1,3,,4]),[4,this.updateAllRecordsWithBulkRequest({app:a,upsert:o,records:l})];case 2:return d=i.sent(),[3,4];case 3:throw f=i.sent(),new s.KintoneAllRecordsError({records:n},c,t,f,u);case 4:return[2,this.updateAllRecordsRecursive({app:a,upsert:o,records:c.slice(r)},t,n.concat(d))]}})})},c.prototype.updateAllRecordsWithBulkRequest=function(e){return r(this,void 0,void 0,function(){var t,n,r;return i(this,function(i){switch(i.label){case 0:return t=this.separateArrayRecursive(u,[],e.records),n=t.map(function(t){return{method:`PUT`,endpointName:`records`,payload:{app:e.app,upsert:e.upsert,records:t}}}),[4,this.bulkRequestClient.send({requests:n})];case 1:return r=i.sent().results,[2,r.map(function(e){return e.records}).reduce(function(e,t){return e.concat(t)},[])]}})})},c.prototype.deleteAllRecords=function(e){return this.deleteAllRecordsRecursive(e,e.records.length)},c.prototype.deleteAllRecordsRecursive=function(e,t){return r(this,void 0,void 0,function(){var n,r,a,o,c;return i(this,function(i){switch(i.label){case 0:if(n=this.bulkRequestClient.REQUESTS_LENGTH_LIMIT*d,r=e.app,a=e.records,o=a.slice(0,n),o.length===0)return[2,{}];i.label=1;case 1:return i.trys.push([1,3,,4]),[4,this.deleteAllRecordsWithBulkRequest({app:r,records:o})];case 2:return i.sent(),[3,4];case 3:throw c=i.sent(),new s.KintoneAllRecordsError({},a,t,c,d);case 4:return[2,this.deleteAllRecordsRecursive({app:r,records:a.slice(n)},t)]}})})},c.prototype.deleteAllRecordsWithBulkRequest=function(e){return r(this,void 0,void 0,function(){var t,n;return i(this,function(r){switch(r.label){case 0:return t=this.separateArrayRecursive(d,[],e.records),n=t.map(function(t){return{method:`DELETE`,endpointName:`records`,payload:{app:e.app,ids:t.map(function(e){return e.id}),revisions:t.map(function(e){return e.revision})}}}),[4,this.bulkRequestClient.send({requests:n})];case 1:return r.sent(),[2]}})})},c.prototype.separateArrayRecursive=function(e,t,n){var r=n.slice(0,e);return r.length===0?t:this.separateArrayRecursive(e,o(o([],t,!0),[r],!1),n.slice(e))},c.prototype.addRecordComment=function(e){var t=this.buildPathWithGuestSpaceId({endpointName:`record/comment`});return this.client.post(t,e)},c.prototype.deleteRecordComment=function(e){var t=this.buildPathWithGuestSpaceId({endpointName:`record/comment`});return this.client.delete(t,e)},c.prototype.getRecordComments=function(e){var t=this.buildPathWithGuestSpaceId({endpointName:`record/comments`});return this.client.get(t,e)},c.prototype.updateRecordAssignees=function(e){var t=this.buildPathWithGuestSpaceId({endpointName:`record/assignees`});return this.client.put(t,e)},c.prototype.updateRecordStatus=function(e){var t=this.buildPathWithGuestSpaceId({endpointName:`record/status`});return this.client.put(t,e)},c.prototype.updateRecordsStatus=function(e){var t=this.buildPathWithGuestSpaceId({endpointName:`records/status`});return this.client.put(t,e)},c}(c.BaseClient)})),Md=a((e=>{var t=e&&e.__extends||(function(){var e=function(t,n){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},e(t,n)};return function(t,n){if(typeof n!=`function`&&n!==null)throw TypeError(`Class extends value `+String(n)+` is not a constructor or null`);e(t,n);function r(){this.constructor=t}t.prototype=n===null?Object.create(n):(r.prototype=n.prototype,new r)}})();Object.defineProperty(e,"__esModule",{value:!0}),e.SpaceClient=void 0,e.SpaceClient=function(e){t(n,e);function n(){return e!==null&&e.apply(this,arguments)||this}return n.prototype.getSpace=function(e){var t=this.buildPathWithGuestSpaceId({endpointName:`space`});return this.client.get(t,e)},n.prototype.updateSpace=function(e){var t=this.buildPathWithGuestSpaceId({endpointName:`space`});return this.client.put(t,e)},n.prototype.deleteSpace=function(e){var t=this.buildPathWithGuestSpaceId({endpointName:`space`});return this.client.delete(t,e)},n.prototype.updateSpaceBody=function(e){var t=this.buildPathWithGuestSpaceId({endpointName:`space/body`});return this.client.put(t,e)},n.prototype.getSpaceMembers=function(e){var t=this.buildPathWithGuestSpaceId({endpointName:`space/members`});return this.client.get(t,e)},n.prototype.updateSpaceMembers=function(e){var t=this.buildPathWithGuestSpaceId({endpointName:`space/members`});return this.client.put(t,e)},n.prototype.addThread=function(e){var t=this.buildPathWithGuestSpaceId({endpointName:`space/thread`});return this.client.post(t,e)},n.prototype.updateThread=function(e){var t=this.buildPathWithGuestSpaceId({endpointName:`space/thread`});return this.client.put(t,e)},n.prototype.addThreadComment=function(e){var t=this.buildPathWithGuestSpaceId({endpointName:`space/thread/comment`});return this.client.post(t,e)},n.prototype.addGuests=function(e){var t=this.buildPath({endpointName:`guests`});return this.client.post(t,e)},n.prototype.deleteGuests=function(e){var t=this.buildPath({endpointName:`guests`});return this.client.delete(t,e)},n.prototype.updateSpaceGuests=function(e){var t=this.buildPathWithGuestSpaceId({endpointName:`space/guests`});return this.client.put(t,e)},n.prototype.addSpaceFromTemplate=function(e){var t=this.buildPath({endpointName:`template/space`});return this.client.post(t,e)},n.prototype.getStatistics=function(e){var t=this.buildPath({endpointName:`spaces/statistics`});return this.client.get(t,e)},n}(wd().BaseClient)})),Nd=a(((e,t)=>{t.exports=typeof self==`object`?self.FormData:window.FormData})),Pd=a((e=>{var t=e&&e.__extends||(function(){var e=function(t,n){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},e(t,n)};return function(t,n){if(typeof n!=`function`&&n!==null)throw TypeError(`Class extends value `+String(n)+` is not a constructor or null`);e(t,n);function r(){this.constructor=t}t.prototype=n===null?Object.create(n):(r.prototype=n.prototype,new r)}})(),n=e&&e.__awaiter||function(e,t,n,r){function i(e){return e instanceof n?e:new n(function(t){t(e)})}return new(n||=Promise)(function(n,a){function o(e){try{c(r.next(e))}catch(e){a(e)}}function s(e){try{c(r.throw(e))}catch(e){a(e)}}function c(e){e.done?n(e.value):i(e.value).then(o,s)}c((r=r.apply(e,t||[])).next())})},r=e&&e.__generator||function(e,t){var n={label:0,sent:function(){if(a[0]&1)throw a[1];return a[1]},trys:[],ops:[]},r,i,a,o=Object.create((typeof Iterator==`function`?Iterator:Object).prototype);return o.next=s(0),o.throw=s(1),o.return=s(2),typeof Symbol==`function`&&(o[Symbol.iterator]=function(){return this}),o;function s(e){return function(t){return c([e,t])}}function c(s){if(r)throw TypeError(`Generator is already executing.`);for(;o&&(o=0,s[0]&&(n=0)),n;)try{if(r=1,i&&(a=s[0]&2?i.return:s[0]?i.throw||((a=i.return)&&a.call(i),0):i.next)&&!(a=a.call(i,s[1])).done)return a;switch(i=0,a&&(s=[s[0]&2,a.value]),s[0]){case 0:case 1:a=s;break;case 4:return n.label++,{value:s[1],done:!1};case 5:n.label++,i=s[1],s=[0];continue;case 7:s=n.ops.pop(),n.trys.pop();continue;default:if((a=n.trys,!(a=a.length>0&&a[a.length-1]))&&(s[0]===6||s[0]===2)){n=0;continue}if(s[0]===3&&(!a||s[1]>a[0]&&s[1]<a[3])){n.label=s[1];break}if(s[0]===6&&n.label<a[1]){n.label=a[1],a=s;break}if(a&&n.label<a[2]){n.label=a[2],n.ops.push(s);break}a[2]&&n.ops.pop(),n.trys.pop();continue}s=t.call(e,n)}catch(e){s=[6,e],i=0}finally{r=a=0}if(s[0]&5)throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}},i=e&&e.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(e,"__esModule",{value:!0}),e.FileClient=void 0;var a=i(Nd()),o=Yu(),s=Xu();e.FileClient=function(e){t(i,e);function i(){return e!==null&&e.apply(this,arguments)||this}return i.prototype.uploadFile=function(e){return n(this,void 0,void 0,function(){var t,n,i,c,l,u,d,f,l,p;return r(this,function(r){switch(r.label){case 0:if(t=this.buildPathWithGuestSpaceId({endpointName:`file`}),n=new a.default,!(`path`in e.file))return[3,5];r.label=1;case 1:return r.trys.push([1,3,,4]),[4,o.platformDeps.readFileFromPath(e.file.path)];case 2:return i=r.sent(),c=i.name,l=i.data,n.append(`file`,l,c),[3,4];case 3:throw u=r.sent(),u instanceof s.UnsupportedPlatformError?Error(`uploadFile doesn't allow to accept a file path in ${u.platform} environment.`):u;case 4:return[3,6];case 5:d=e.file,f=d.name,l=d.data,p=o.platformDeps.buildFormDataValue(l,f),n.append(`file`,p,f),r.label=6;case 6:return[2,this.client.postData(t,n)]}})})},i.prototype.downloadFile=function(e){var t=this.buildPathWithGuestSpaceId({endpointName:`file`});return this.client.getData(t,e)},i}(wd().BaseClient)})),Fd=a((e=>{var t=e&&e.__extends||(function(){var e=function(t,n){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},e(t,n)};return function(t,n){if(typeof n!=`function`&&n!==null)throw TypeError(`Class extends value `+String(n)+` is not a constructor or null`);e(t,n);function r(){this.constructor=t}t.prototype=n===null?Object.create(n):(r.prototype=n.prototype,new r)}})();Object.defineProperty(e,"__esModule",{value:!0}),e.PluginClient=void 0,e.PluginClient=function(e){t(n,e);function n(){return e!==null&&e.apply(this,arguments)||this}return n.prototype.getPlugins=function(e){var t=this.buildPath({endpointName:`plugins`});return this.client.get(t,e)},n.prototype.getRequiredPlugins=function(e){var t=this.buildPath({endpointName:`plugins/required`});return this.client.get(t,e)},n.prototype.getApps=function(e){var t=this.buildPath({endpointName:`plugin/apps`});return this.client.get(t,e)},n.prototype.updatePlugin=function(e){var t=this.buildPath({endpointName:`plugin`});return this.client.put(t,e)},n.prototype.installPlugin=function(e){var t=this.buildPath({endpointName:`plugin`});return this.client.post(t,e)},n.prototype.uninstallPlugin=function(e){var t=this.buildPath({endpointName:`plugin`});return this.client.delete(t,e)},n}(wd().BaseClient)})),Id=a((e=>{var t=e&&e.__extends||(function(){var e=function(t,n){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},e(t,n)};return function(t,n){if(typeof n!=`function`&&n!==null)throw TypeError(`Class extends value `+String(n)+` is not a constructor or null`);e(t,n);function r(){this.constructor=t}t.prototype=n===null?Object.create(n):(r.prototype=n.prototype,new r)}})(),n=e&&e.__assign||function(){return n=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n],t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},n.apply(this,arguments)},r=e&&e.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols==`function`)for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n};Object.defineProperty(e,"__esModule",{value:!0}),e.SearchClient=void 0,e.SearchClient=function(e){t(i,e);function i(){return e!==null&&e.apply(this,arguments)||this}return i.prototype.search=function(e){var t=this.buildPathWithGuestSpaceId({endpointName:`search`}),i=e.createdAfter,a=e.createdBefore,o=r(e,[`createdAfter`,`createdBefore`]);return this.client.post(t,n(n(n({},o),i!==void 0&&{createdAfter:i instanceof Date?i.toISOString():i}),a!==void 0&&{createdBefore:a instanceof Date?a.toISOString():a}))},i}(wd().BaseClient)})),Ld=a(((e,t)=>{function n(e,t){return function(){return e.apply(t,arguments)}}var{toString:r}=Object.prototype,{getPrototypeOf:i}=Object,{iterator:a,toStringTag:o}=Symbol,s=(e=>t=>{let n=r.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),c=e=>(e=e.toLowerCase(),t=>s(t)===e),l=e=>t=>typeof t===e,{isArray:u}=Array,d=l(`undefined`);function f(e){return e!==null&&!d(e)&&e.constructor!==null&&!d(e.constructor)&&g(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}var p=c(`ArrayBuffer`);function m(e){let t;return t=typeof ArrayBuffer<`u`&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&p(e.buffer),t}var h=l(`string`),g=l(`function`),_=l(`number`),v=e=>typeof e==`object`&&!!e,y=e=>e===!0||e===!1,b=e=>{if(s(e)!==`object`)return!1;let t=i(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(o in e)&&!(a in e)},x=e=>{if(!v(e)||f(e))return!1;try{return Object.keys(e).length===0&&Object.getPrototypeOf(e)===Object.prototype}catch{return!1}},S=c(`Date`),C=c(`File`),w=e=>!!(e&&e.uri!==void 0),T=e=>e&&e.getParts!==void 0,E=c(`Blob`),ee=c(`FileList`),D=e=>v(e)&&g(e.pipe);function te(){return typeof globalThis<`u`?globalThis:typeof self<`u`?self:typeof window<`u`?window:typeof global<`u`?global:{}}var ne=te(),O=ne.FormData===void 0?void 0:ne.FormData,re=e=>{if(!e)return!1;if(O&&e instanceof O)return!0;let t=i(e);if(!t||t===Object.prototype||!g(e.append))return!1;let n=s(e);return n===`formdata`||n===`object`&&g(e.toString)&&e.toString()===`[object FormData]`},ie=c(`URLSearchParams`),[ae,oe,se,ce]=[`ReadableStream`,`Request`,`Response`,`Headers`].map(c),le=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,``);function ue(e,t,{allOwnKeys:n=!1}={}){if(e==null)return;let r,i;if(typeof e!=`object`&&(e=[e]),u(e))for(r=0,i=e.length;r<i;r++)t.call(null,e[r],r,e);else{if(f(e))return;let i=n?Object.getOwnPropertyNames(e):Object.keys(e),a=i.length,o;for(r=0;r<a;r++)o=i[r],t.call(null,e[o],o,e)}}function de(e,t){if(f(e))return null;t=t.toLowerCase();let n=Object.keys(e),r=n.length,i;for(;r-- >0;)if(i=n[r],t===i.toLowerCase())return i;return null}var k=typeof globalThis<`u`?globalThis:typeof self<`u`?self:typeof window<`u`?window:global,fe=e=>!d(e)&&e!==k;function pe(...e){let{caseless:t,skipUndefined:n}=fe(this)&&this||{},r={},i=(e,i)=>{if(i===`__proto__`||i===`constructor`||i===`prototype`)return;let a=t&&de(r,i)||i,o=Te(r,a)?r[a]:void 0;b(o)&&b(e)?r[a]=pe(o,e):b(e)?r[a]=pe({},e):u(e)?r[a]=e.slice():(!n||!d(e))&&(r[a]=e)};for(let t=0,n=e.length;t<n;t++)e[t]&&ue(e[t],i);return r}var me=(e,t,r,{allOwnKeys:i}={})=>(ue(t,(t,i)=>{r&&g(t)?Object.defineProperty(e,i,{__proto__:null,value:n(t,r),writable:!0,enumerable:!0,configurable:!0}):Object.defineProperty(e,i,{__proto__:null,value:t,writable:!0,enumerable:!0,configurable:!0})},{allOwnKeys:i}),e),he=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),ge=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),Object.defineProperty(e.prototype,"constructor",{__proto__:null,value:e,writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(e,"super",{__proto__:null,value:t.prototype}),n&&Object.assign(e.prototype,n)},_e=(e,t,n,r)=>{let a,o,s,c={};if(t||={},e==null)return t;do{for(a=Object.getOwnPropertyNames(e),o=a.length;o-- >0;)s=a[o],(!r||r(s,e,t))&&!c[s]&&(t[s]=e[s],c[s]=!0);e=n!==!1&&i(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},ve=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;let r=e.indexOf(t,n);return r!==-1&&r===n},ye=e=>{if(!e)return null;if(u(e))return e;let t=e.length;if(!_(t))return null;let n=Array(t);for(;t-- >0;)n[t]=e[t];return n},be=(e=>t=>e&&t instanceof e)(typeof Uint8Array<`u`&&i(Uint8Array)),xe=(e,t)=>{let n=(e&&e[a]).call(e),r;for(;(r=n.next())&&!r.done;){let n=r.value;t.call(e,n[0],n[1])}},Se=(e,t)=>{let n,r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},Ce=c(`HTMLFormElement`),we=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(e,t,n){return t.toUpperCase()+n}),Te=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),Ee=c(`RegExp`),De=(e,t)=>{let n=Object.getOwnPropertyDescriptors(e),r={};ue(n,(n,i)=>{let a;(a=t(n,i,e))!==!1&&(r[i]=a||n)}),Object.defineProperties(e,r)},Oe=e=>{De(e,(t,n)=>{if(g(e)&&[`arguments`,`caller`,`callee`].includes(n))return!1;let r=e[n];if(g(r)){if(t.enumerable=!1,`writable`in t){t.writable=!1;return}t.set||=()=>{throw Error(`Can not rewrite read-only method '`+n+`'`)}}})},ke=(e,t)=>{let n={},r=e=>{e.forEach(e=>{n[e]=!0})};return u(e)?r(e):r(String(e).split(t)),n},Ae=()=>{},je=(e,t)=>e!=null&&Number.isFinite(e=+e)?e:t;function Me(e){return!!(e&&g(e.append)&&e[o]===`FormData`&&e[a])}var Ne=e=>{let t=new WeakSet,n=e=>{if(v(e)){if(t.has(e))return;if(f(e))return e;if(!(`toJSON`in e)){t.add(e);let r=u(e)?[]:{};return ue(e,(e,t)=>{let i=n(e);!d(i)&&(r[t]=i)}),t.delete(e),r}}return e};return n(e)},Pe=c(`AsyncFunction`),Fe=e=>e&&(v(e)||g(e))&&g(e.then)&&g(e.catch),A=((e,t)=>e?setImmediate:t?((e,t)=>(k.addEventListener(`message`,({source:n,data:r})=>{n===k&&r===e&&t.length&&t.shift()()},!1),n=>{t.push(n),k.postMessage(e,`*`)}))(`axios@${Math.random()}`,[]):e=>setTimeout(e))(typeof setImmediate==`function`,g(k.postMessage)),j={isArray:u,isArrayBuffer:p,isBuffer:f,isFormData:re,isArrayBufferView:m,isString:h,isNumber:_,isBoolean:y,isObject:v,isPlainObject:b,isEmptyObject:x,isReadableStream:ae,isRequest:oe,isResponse:se,isHeaders:ce,isUndefined:d,isDate:S,isFile:C,isReactNativeBlob:w,isReactNative:T,isBlob:E,isRegExp:Ee,isFunction:g,isStream:D,isURLSearchParams:ie,isTypedArray:be,isFileList:ee,forEach:ue,merge:pe,extend:me,trim:le,stripBOM:he,inherits:ge,toFlatObject:_e,kindOf:s,kindOfTest:c,endsWith:ve,toArray:ye,forEachEntry:xe,matchAll:Se,isHTMLForm:Ce,hasOwnProperty:Te,hasOwnProp:Te,reduceDescriptors:De,freezeMethods:Oe,toObjectSet:ke,toCamelCase:we,noop:Ae,toFiniteNumber:je,findKey:de,global:k,isContextDefined:fe,isSpecCompliantForm:Me,toJSONObject:Ne,isAsyncFn:Pe,isThenable:Fe,setImmediate:A,asap:typeof queueMicrotask<`u`?queueMicrotask.bind(k):typeof process<`u`&&process.nextTick||A,isIterable:e=>e!=null&&g(e[a])},M=j.toObjectSet([`age`,`authorization`,`content-length`,`content-type`,`etag`,`expires`,`from`,`host`,`if-modified-since`,`if-unmodified-since`,`last-modified`,`location`,`max-forwards`,`proxy-authorization`,`referer`,`retry-after`,`user-agent`]),Ie=e=>{let t={},n,r,i;return e&&e.split(`
`).forEach(function(e){i=e.indexOf(`:`),n=e.substring(0,i).trim().toLowerCase(),r=e.substring(i+1).trim(),!(!n||t[n]&&M[n])&&(n===`set-cookie`?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+`, `+r:r)}),t};function Le(e){let t=0,n=e.length;for(;t<n;){let n=e.charCodeAt(t);if(n!==9&&n!==32)break;t+=1}for(;n>t;){let t=e.charCodeAt(n-1);if(t!==9&&t!==32)break;--n}return t===0&&n===e.length?e:e.slice(t,n)}var Re=RegExp(`[\\u0000-\\u0008\\u000a-\\u001f\\u007f]+`,`g`),ze=RegExp(`[^\\u0009\\u0020-\\u007e\\u0080-\\u00ff]+`,`g`);function Be(e,t){return j.isArray(e)?e.map(e=>Be(e,t)):Le(String(e).replace(t,``))}var Ve=e=>Be(e,Re),He=e=>Be(e,ze);function Ue(e){let t=Object.create(null);return j.forEach(e.toJSON(),(e,n)=>{t[n]=He(e)}),t}var We=Symbol(`internals`);function Ge(e){return e&&String(e).trim().toLowerCase()}function Ke(e){return e===!1||e==null?e:j.isArray(e)?e.map(Ke):Ve(String(e))}function N(e){let t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g,r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}var qe=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function Je(e,t,n,r,i){if(j.isFunction(r))return r.call(this,t,n);if(i&&(t=n),j.isString(t)){if(j.isString(r))return t.indexOf(r)!==-1;if(j.isRegExp(r))return r.test(t)}}function Ye(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(e,t,n)=>t.toUpperCase()+n)}function Xe(e,t){let n=j.toCamelCase(` `+t);[`get`,`set`,`has`].forEach(r=>{Object.defineProperty(e,r+n,{__proto__:null,value:function(e,n,i){return this[r].call(this,t,e,n,i)},configurable:!0})})}var Ze=class{constructor(e){e&&this.set(e)}set(e,t,n){let r=this;function i(e,t,n){let i=Ge(t);if(!i)throw Error(`header name must be a non-empty string`);let a=j.findKey(r,i);(!a||r[a]===void 0||n===!0||n===void 0&&r[a]!==!1)&&(r[a||t]=Ke(e))}let a=(e,t)=>j.forEach(e,(e,n)=>i(e,n,t));if(j.isPlainObject(e)||e instanceof this.constructor)a(e,t);else if(j.isString(e)&&(e=e.trim())&&!qe(e))a(Ie(e),t);else if(j.isObject(e)&&j.isIterable(e)){let n={},r,i;for(let t of e){if(!j.isArray(t))throw TypeError(`Object iterator must return a key-value pair`);n[i=t[0]]=(r=n[i])?j.isArray(r)?[...r,t[1]]:[r,t[1]]:t[1]}a(n,t)}else e!=null&&i(t,e,n);return this}get(e,t){if(e=Ge(e),e){let n=j.findKey(this,e);if(n){let e=this[n];if(!t)return e;if(t===!0)return N(e);if(j.isFunction(t))return t.call(this,e,n);if(j.isRegExp(t))return t.exec(e);throw TypeError(`parser must be boolean|regexp|function`)}}}has(e,t){if(e=Ge(e),e){let n=j.findKey(this,e);return!!(n&&this[n]!==void 0&&(!t||Je(this,this[n],n,t)))}return!1}delete(e,t){let n=this,r=!1;function i(e){if(e=Ge(e),e){let i=j.findKey(n,e);i&&(!t||Je(n,n[i],i,t))&&(delete n[i],r=!0)}}return j.isArray(e)?e.forEach(i):i(e),r}clear(e){let t=Object.keys(this),n=t.length,r=!1;for(;n--;){let i=t[n];(!e||Je(this,this[i],i,e,!0))&&(delete this[i],r=!0)}return r}normalize(e){let t=this,n={};return j.forEach(this,(r,i)=>{let a=j.findKey(n,i);if(a){t[a]=Ke(r),delete t[i];return}let o=e?Ye(i):String(i).trim();o!==i&&delete t[i],t[o]=Ke(r),n[o]=!0}),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){let t=Object.create(null);return j.forEach(this,(n,r)=>{n!=null&&n!==!1&&(t[r]=e&&j.isArray(n)?n.join(`, `):n)}),t}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([e,t])=>e+`: `+t).join(`
`)}getSetCookie(){return this.get(`set-cookie`)||[]}get[Symbol.toStringTag](){return`AxiosHeaders`}static from(e){return e instanceof this?e:new this(e)}static concat(e,...t){let n=new this(e);return t.forEach(e=>n.set(e)),n}static accessor(e){let t=(this[We]=this[We]={accessors:{}}).accessors,n=this.prototype;function r(e){let r=Ge(e);t[r]||(Xe(n,e),t[r]=!0)}return j.isArray(e)?e.forEach(r):r(e),this}};Ze.accessor([`Content-Type`,`Content-Length`,`Accept`,`Accept-Encoding`,`User-Agent`,`Authorization`]),j.reduceDescriptors(Ze.prototype,({value:e},t)=>{let n=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(e){this[n]=e}}}),j.freezeMethods(Ze);var Qe=`[REDACTED ****]`;function $e(e){if(j.hasOwnProp(e,`toJSON`))return!0;let t=Object.getPrototypeOf(e);for(;t&&t!==Object.prototype;){if(j.hasOwnProp(t,`toJSON`))return!0;t=Object.getPrototypeOf(t)}return!1}function et(e,t){let n=new Set(t.map(e=>String(e).toLowerCase())),r=[],i=e=>{if(typeof e!=`object`||!e||j.isBuffer(e))return e;if(r.indexOf(e)!==-1)return;e instanceof Ze&&(e=e.toJSON()),r.push(e);let t;if(j.isArray(e))t=[],e.forEach((e,n)=>{let r=i(e);j.isUndefined(r)||(t[n]=r)});else{if(!j.isPlainObject(e)&&$e(e))return r.pop(),e;t=Object.create(null);for(let[r,a]of Object.entries(e)){let e=n.has(r.toLowerCase())?Qe:i(a);j.isUndefined(e)||(t[r]=e)}}return r.pop(),t};return i(e)}var P=class e extends Error{static from(t,n,r,i,a,o){let s=new e(t.message,n||t.code,r,i,a);return s.cause=t,s.name=t.name,t.status!=null&&s.status==null&&(s.status=t.status),o&&Object.assign(s,o),s}constructor(e,t,n,r,i){super(e),Object.defineProperty(this,"message",{__proto__:null,value:e,enumerable:!0,writable:!0,configurable:!0}),this.name=`AxiosError`,this.isAxiosError=!0,t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),i&&(this.response=i,this.status=i.status)}toJSON(){let e=this.config,t=e&&j.hasOwnProp(e,`redact`)?e.redact:void 0,n=j.isArray(t)&&t.length>0?et(e,t):j.toJSONObject(e);return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:n,code:this.code,status:this.status}}};P.ERR_BAD_OPTION_VALUE=`ERR_BAD_OPTION_VALUE`,P.ERR_BAD_OPTION=`ERR_BAD_OPTION`,P.ECONNABORTED=`ECONNABORTED`,P.ETIMEDOUT=`ETIMEDOUT`,P.ECONNREFUSED=`ECONNREFUSED`,P.ERR_NETWORK=`ERR_NETWORK`,P.ERR_FR_TOO_MANY_REDIRECTS=`ERR_FR_TOO_MANY_REDIRECTS`,P.ERR_DEPRECATED=`ERR_DEPRECATED`,P.ERR_BAD_RESPONSE=`ERR_BAD_RESPONSE`,P.ERR_BAD_REQUEST=`ERR_BAD_REQUEST`,P.ERR_CANCELED=`ERR_CANCELED`,P.ERR_NOT_SUPPORT=`ERR_NOT_SUPPORT`,P.ERR_INVALID_URL=`ERR_INVALID_URL`,P.ERR_FORM_DATA_DEPTH_EXCEEDED=`ERR_FORM_DATA_DEPTH_EXCEEDED`;var tt=null;function nt(e){return j.isPlainObject(e)||j.isArray(e)}function rt(e){return j.endsWith(e,`[]`)?e.slice(0,-2):e}function it(e,t,n){return e?e.concat(t).map(function(e,t){return e=rt(e),!n&&t?`[`+e+`]`:e}).join(n?`.`:``):t}function at(e){return j.isArray(e)&&!e.some(nt)}var ot=j.toFlatObject(j,{},null,function(e){return/^is[A-Z]/.test(e)});function st(e,t,n){if(!j.isObject(e))throw TypeError(`target must be an object`);t||=new FormData,n=j.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(e,t){return!j.isUndefined(t[e])});let r=n.metaTokens,i=n.visitor||d,a=n.dots,o=n.indexes,s=n.Blob||typeof Blob<`u`&&Blob,c=n.maxDepth===void 0?100:n.maxDepth,l=s&&j.isSpecCompliantForm(t);if(!j.isFunction(i))throw TypeError(`visitor must be a function`);function u(e){if(e===null)return``;if(j.isDate(e))return e.toISOString();if(j.isBoolean(e))return e.toString();if(!l&&j.isBlob(e))throw new P(`Blob is not supported. Use a Buffer instead.`);return j.isArrayBuffer(e)||j.isTypedArray(e)?l&&typeof Blob==`function`?new Blob([e]):Buffer.from(e):e}function d(e,n,i){let s=e;if(j.isReactNative(t)&&j.isReactNativeBlob(e))return t.append(it(i,n,a),u(e)),!1;if(e&&!i&&typeof e==`object`){if(j.endsWith(n,`{}`))n=r?n:n.slice(0,-2),e=JSON.stringify(e);else if(j.isArray(e)&&at(e)||(j.isFileList(e)||j.endsWith(n,`[]`))&&(s=j.toArray(e)))return n=rt(n),s.forEach(function(e,r){!(j.isUndefined(e)||e===null)&&t.append(o===!0?it([n],r,a):o===null?n:n+`[]`,u(e))}),!1}return nt(e)?!0:(t.append(it(i,n,a),u(e)),!1)}let f=[],p=Object.assign(ot,{defaultVisitor:d,convertValue:u,isVisitable:nt});function m(e,n,r=0){if(!j.isUndefined(e)){if(r>c)throw new P(`Object is too deeply nested (`+r+` levels). Max depth: `+c,P.ERR_FORM_DATA_DEPTH_EXCEEDED);if(f.indexOf(e)!==-1)throw Error(`Circular reference detected in `+n.join(`.`));f.push(e),j.forEach(e,function(e,a){(!(j.isUndefined(e)||e===null)&&i.call(t,e,j.isString(a)?a.trim():a,n,p))===!0&&m(e,n?n.concat(a):[a],r+1)}),f.pop()}}if(!j.isObject(e))throw TypeError(`data must be an object`);return m(e),t}function ct(e){let t={"!":`%21`,"'":`%27`,"(":`%28`,")":`%29`,"~":`%7E`,"%20":`+`};return encodeURIComponent(e).replace(/[!'()~]|%20/g,function(e){return t[e]})}function lt(e,t){this._pairs=[],e&&st(e,this,t)}var ut=lt.prototype;ut.append=function(e,t){this._pairs.push([e,t])},ut.toString=function(e){let t=e?function(t){return e.call(this,t,ct)}:ct;return this._pairs.map(function(e){return t(e[0])+`=`+t(e[1])},``).join(`&`)};function dt(e){return encodeURIComponent(e).replace(/%3A/gi,`:`).replace(/%24/g,`$`).replace(/%2C/gi,`,`).replace(/%20/g,`+`)}function ft(e,t,n){if(!t)return e;let r=n&&n.encode||dt,i=j.isFunction(n)?{serialize:n}:n,a=i&&i.serialize,o;if(o=a?a(t,i):j.isURLSearchParams(t)?t.toString():new lt(t,i).toString(r),o){let t=e.indexOf(`#`);t!==-1&&(e=e.slice(0,t)),e+=(e.indexOf(`?`)===-1?`?`:`&`)+o}return e}var pt=class{constructor(){this.handlers=[]}use(e,t,n){return this.handlers.push({fulfilled:e,rejected:t,synchronous:n?n.synchronous:!1,runWhen:n?n.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&=[]}forEach(e){j.forEach(this.handlers,function(t){t!==null&&e(t)})}},mt={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1,legacyInterceptorReqResOrdering:!0},ht={isBrowser:!0,classes:{URLSearchParams:typeof URLSearchParams<`u`?URLSearchParams:lt,FormData:typeof FormData<`u`?FormData:null,Blob:typeof Blob<`u`?Blob:null},protocols:[`http`,`https`,`file`,`blob`,`url`,`data`]},gt=typeof window<`u`&&typeof document<`u`,_t=typeof navigator==`object`&&navigator||void 0,vt=gt&&(!_t||[`ReactNative`,`NativeScript`,`NS`].indexOf(_t.product)<0),yt=typeof WorkerGlobalScope<`u`&&self instanceof WorkerGlobalScope&&typeof self.importScripts==`function`,bt=gt&&window.location.href||`http://localhost`,xt={...Object.freeze({__proto__:null,hasBrowserEnv:gt,hasStandardBrowserEnv:vt,hasStandardBrowserWebWorkerEnv:yt,navigator:_t,origin:bt}),...ht};function St(e,t){return st(e,new xt.classes.URLSearchParams,{visitor:function(e,t,n,r){return xt.isNode&&j.isBuffer(e)?(this.append(t,e.toString(`base64`)),!1):r.defaultVisitor.apply(this,arguments)},...t})}function Ct(e){return j.matchAll(/\w+|\[(\w*)]/g,e).map(e=>e[0]===`[]`?``:e[1]||e[0])}function wt(e){let t={},n=Object.keys(e),r,i=n.length,a;for(r=0;r<i;r++)a=n[r],t[a]=e[a];return t}function Tt(e){function t(e,n,r,i){let a=e[i++];if(a===`__proto__`)return!0;let o=Number.isFinite(+a),s=i>=e.length;return a=!a&&j.isArray(r)?r.length:a,s?(j.hasOwnProp(r,a)?r[a]=j.isArray(r[a])?r[a].concat(n):[r[a],n]:r[a]=n,!o):((!j.hasOwnProp(r,a)||!j.isObject(r[a]))&&(r[a]=[]),t(e,n,r[a],i)&&j.isArray(r[a])&&(r[a]=wt(r[a])),!o)}if(j.isFormData(e)&&j.isFunction(e.entries)){let n={};return j.forEachEntry(e,(e,r)=>{t(Ct(e),r,n,0)}),n}return null}var Et=(e,t)=>e!=null&&j.hasOwnProp(e,t)?e[t]:void 0;function Dt(e,t,n){if(j.isString(e))try{return(t||JSON.parse)(e),j.trim(e)}catch(e){if(e.name!==`SyntaxError`)throw e}return(n||JSON.stringify)(e)}var Ot={transitional:mt,adapter:[`xhr`,`http`,`fetch`],transformRequest:[function(e,t){let n=t.getContentType()||``,r=n.indexOf(`application/json`)>-1,i=j.isObject(e);if(i&&j.isHTMLForm(e)&&(e=new FormData(e)),j.isFormData(e))return r?JSON.stringify(Tt(e)):e;if(j.isArrayBuffer(e)||j.isBuffer(e)||j.isStream(e)||j.isFile(e)||j.isBlob(e)||j.isReadableStream(e))return e;if(j.isArrayBufferView(e))return e.buffer;if(j.isURLSearchParams(e))return t.setContentType(`application/x-www-form-urlencoded;charset=utf-8`,!1),e.toString();let a;if(i){let t=Et(this,`formSerializer`);if(n.indexOf(`application/x-www-form-urlencoded`)>-1)return St(e,t).toString();if((a=j.isFileList(e))||n.indexOf(`multipart/form-data`)>-1){let n=Et(this,`env`),r=n&&n.FormData;return st(a?{"files[]":e}:e,r&&new r,t)}}return i||r?(t.setContentType(`application/json`,!1),Dt(e)):e}],transformResponse:[function(e){let t=Et(this,`transitional`)||Ot.transitional,n=t&&t.forcedJSONParsing,r=Et(this,`responseType`),i=r===`json`;if(j.isResponse(e)||j.isReadableStream(e))return e;if(e&&j.isString(e)&&(n&&!r||i)){let n=!(t&&t.silentJSONParsing)&&i;try{return JSON.parse(e,Et(this,`parseReviver`))}catch(e){if(n)throw e.name===`SyntaxError`?P.from(e,P.ERR_BAD_RESPONSE,this,null,Et(this,`response`)):e}}return e}],timeout:0,xsrfCookieName:`XSRF-TOKEN`,xsrfHeaderName:`X-XSRF-TOKEN`,maxContentLength:-1,maxBodyLength:-1,env:{FormData:xt.classes.FormData,Blob:xt.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:`application/json, text/plain, */*`,"Content-Type":void 0}}};j.forEach([`delete`,`get`,`head`,`post`,`put`,`patch`,`query`],e=>{Ot.headers[e]={}});function F(e,t){let n=this||Ot,r=t||n,i=Ze.from(r.headers),a=r.data;return j.forEach(e,function(e){a=e.call(n,a,i.normalize(),t?t.status:void 0)}),i.normalize(),a}function kt(e){return!!(e&&e.__CANCEL__)}var At=class extends P{constructor(e,t,n){super(e??`canceled`,P.ERR_CANCELED,t,n),this.name=`CanceledError`,this.__CANCEL__=!0}};function jt(e,t,n){let r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new P(`Request failed with status code `+n.status,n.status>=400&&n.status<500?P.ERR_BAD_REQUEST:P.ERR_BAD_RESPONSE,n.config,n.request,n))}function Mt(e){let t=/^([-+\w]{1,25}):(?:\/\/)?/.exec(e);return t&&t[1]||``}function Nt(e,t){e||=10;let n=Array(e),r=Array(e),i=0,a=0,o;return t=t===void 0?1e3:t,function(s){let c=Date.now(),l=r[a];o||=c,n[i]=s,r[i]=c;let u=a,d=0;for(;u!==i;)d+=n[u++],u%=e;if(i=(i+1)%e,i===a&&(a=(a+1)%e),c-o<t)return;let f=l&&c-l;return f?Math.round(d*1e3/f):void 0}}function Pt(e,t){let n=0,r=1e3/t,i,a,o=(t,r=Date.now())=>{n=r,i=null,a&&=(clearTimeout(a),null),e(...t)};return[(...e)=>{let t=Date.now(),s=t-n;s>=r?o(e,t):(i=e,a||=setTimeout(()=>{a=null,o(i)},r-s))},()=>i&&o(i)]}var Ft=(e,t,n=3)=>{let r=0,i=Nt(50,250);return Pt(n=>{if(!n||typeof n.loaded!=`number`)return;let a=n.loaded,o=n.lengthComputable?n.total:void 0,s=o==null?a:Math.min(a,o),c=Math.max(0,s-r),l=i(c);r=Math.max(r,s),e({loaded:s,total:o,progress:o?s/o:void 0,bytes:c,rate:l||void 0,estimated:l&&o?(o-s)/l:void 0,event:n,lengthComputable:o!=null,[t?`download`:`upload`]:!0})},n)},It=(e,t)=>{let n=e!=null;return[r=>t[0]({lengthComputable:n,total:e,loaded:r}),t[1]]},Lt=e=>(...t)=>j.asap(()=>e(...t)),Rt=xt.hasStandardBrowserEnv?((e,t)=>n=>(n=new URL(n,xt.origin),e.protocol===n.protocol&&e.host===n.host&&(t||e.port===n.port)))(new URL(xt.origin),xt.navigator&&/(msie|trident)/i.test(xt.navigator.userAgent)):()=>!0,zt=xt.hasStandardBrowserEnv?{write(e,t,n,r,i,a,o){if(typeof document>`u`)return;let s=[`${e}=${encodeURIComponent(t)}`];j.isNumber(n)&&s.push(`expires=${new Date(n).toUTCString()}`),j.isString(r)&&s.push(`path=${r}`),j.isString(i)&&s.push(`domain=${i}`),a===!0&&s.push(`secure`),j.isString(o)&&s.push(`SameSite=${o}`),document.cookie=s.join(`; `)},read(e){if(typeof document>`u`)return null;let t=document.cookie.split(`;`);for(let n=0;n<t.length;n++){let r=t[n].replace(/^\s+/,``),i=r.indexOf(`=`);if(i!==-1&&r.slice(0,i)===e)return decodeURIComponent(r.slice(i+1))}return null},remove(e){this.write(e,``,Date.now()-864e5,`/`)}}:{write(){},read(){return null},remove(){}};function Bt(e){return typeof e==`string`?/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e):!1}function Vt(e,t){return t?e.replace(/\/?\/$/,``)+`/`+t.replace(/^\/+/,``):e}function Ht(e,t,n){let r=!Bt(t);return e&&(r||n===!1)?Vt(e,t):t}var Ut=e=>e instanceof Ze?{...e}:e;function Wt(e,t){t||={};let n=Object.create(null);Object.defineProperty(n,"hasOwnProperty",{__proto__:null,value:Object.prototype.hasOwnProperty,enumerable:!1,writable:!0,configurable:!0});function r(e,t,n,r){return j.isPlainObject(e)&&j.isPlainObject(t)?j.merge.call({caseless:r},e,t):j.isPlainObject(t)?j.merge({},t):j.isArray(t)?t.slice():t}function i(e,t,n,i){if(!j.isUndefined(t))return r(e,t,n,i);if(!j.isUndefined(e))return r(void 0,e,n,i)}function a(e,t){if(!j.isUndefined(t))return r(void 0,t)}function o(e,t){if(!j.isUndefined(t))return r(void 0,t);if(!j.isUndefined(e))return r(void 0,e)}function s(n,i,a){if(j.hasOwnProp(t,a))return r(n,i);if(j.hasOwnProp(e,a))return r(void 0,n)}let c={url:a,method:a,data:a,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,withXSRFToken:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,allowedSocketPaths:o,responseEncoding:o,validateStatus:s,headers:(e,t,n)=>i(Ut(e),Ut(t),n,!0)};return j.forEach(Object.keys({...e,...t}),function(r){if(r===`__proto__`||r===`constructor`||r===`prototype`)return;let a=j.hasOwnProp(c,r)?c[r]:i,o=a(j.hasOwnProp(e,r)?e[r]:void 0,j.hasOwnProp(t,r)?t[r]:void 0,r);j.isUndefined(o)&&a!==s||(n[r]=o)}),n}var Gt=[`content-type`,`content-length`];function Kt(e,t,n){if(n!==`content-only`){e.set(t);return}Object.entries(t).forEach(([t,n])=>{Gt.includes(t.toLowerCase())&&e.set(t,n)})}var qt=e=>encodeURIComponent(e).replace(/%([0-9A-F]{2})/gi,(e,t)=>String.fromCharCode(parseInt(t,16))),Jt=e=>{let t=Wt({},e),n=e=>j.hasOwnProp(t,e)?t[e]:void 0,r=n(`data`),i=n(`withXSRFToken`),a=n(`xsrfHeaderName`),o=n(`xsrfCookieName`),s=n(`headers`),c=n(`auth`),l=n(`baseURL`),u=n(`allowAbsoluteUrls`),d=n(`url`);if(t.headers=s=Ze.from(s),t.url=ft(Ht(l,d,u),e.params,e.paramsSerializer),c&&s.set(`Authorization`,`Basic `+btoa((c.username||``)+`:`+(c.password?qt(c.password):``))),j.isFormData(r)&&(xt.hasStandardBrowserEnv||xt.hasStandardBrowserWebWorkerEnv?s.setContentType(void 0):j.isFunction(r.getHeaders)&&Kt(s,r.getHeaders(),n(`formDataHeaderPolicy`))),xt.hasStandardBrowserEnv&&(j.isFunction(i)&&(i=i(t)),i===!0||i==null&&Rt(t.url))){let e=a&&o&&zt.read(o);e&&s.set(a,e)}return t},Yt=typeof XMLHttpRequest<`u`&&function(e){return new Promise(function(t,n){let r=Jt(e),i=r.data,a=Ze.from(r.headers).normalize(),{responseType:o,onUploadProgress:s,onDownloadProgress:c}=r,l,u,d,f,p;function m(){f&&f(),p&&p(),r.cancelToken&&r.cancelToken.unsubscribe(l),r.signal&&r.signal.removeEventListener(`abort`,l)}let h=new XMLHttpRequest;h.open(r.method.toUpperCase(),r.url,!0),h.timeout=r.timeout;function g(){if(!h)return;let r=Ze.from(`getAllResponseHeaders`in h&&h.getAllResponseHeaders());jt(function(e){t(e),m()},function(e){n(e),m()},{data:!o||o===`text`||o===`json`?h.responseText:h.response,status:h.status,statusText:h.statusText,headers:r,config:e,request:h}),h=null}`onloadend`in h?h.onloadend=g:h.onreadystatechange=function(){!h||h.readyState!==4||h.status===0&&!(h.responseURL&&h.responseURL.startsWith(`file:`))||setTimeout(g)},h.onabort=function(){h&&=(n(new P(`Request aborted`,P.ECONNABORTED,e,h)),m(),null)},h.onerror=function(t){let r=new P(t&&t.message?t.message:`Network Error`,P.ERR_NETWORK,e,h);r.event=t||null,n(r),m(),h=null},h.ontimeout=function(){let t=r.timeout?`timeout of `+r.timeout+`ms exceeded`:`timeout exceeded`,i=r.transitional||mt;r.timeoutErrorMessage&&(t=r.timeoutErrorMessage),n(new P(t,i.clarifyTimeoutError?P.ETIMEDOUT:P.ECONNABORTED,e,h)),m(),h=null},i===void 0&&a.setContentType(null),`setRequestHeader`in h&&j.forEach(Ue(a),function(e,t){h.setRequestHeader(t,e)}),j.isUndefined(r.withCredentials)||(h.withCredentials=!!r.withCredentials),o&&o!==`json`&&(h.responseType=r.responseType),c&&([d,p]=Ft(c,!0),h.addEventListener(`progress`,d)),s&&h.upload&&([u,f]=Ft(s),h.upload.addEventListener(`progress`,u),h.upload.addEventListener(`loadend`,f)),(r.cancelToken||r.signal)&&(l=t=>{h&&=(n(!t||t.type?new At(null,e,h):t),h.abort(),m(),null)},r.cancelToken&&r.cancelToken.subscribe(l),r.signal&&(r.signal.aborted?l():r.signal.addEventListener(`abort`,l)));let _=Mt(r.url);if(_&&!xt.protocols.includes(_)){n(new P(`Unsupported protocol `+_+`:`,P.ERR_BAD_REQUEST,e));return}h.send(i||null)})},Xt=(e,t)=>{if(e=e?e.filter(Boolean):[],!t&&!e.length)return;let n=new AbortController,r=!1,i=function(e){if(!r){r=!0,o();let t=e instanceof Error?e:this.reason;n.abort(t instanceof P?t:new At(t instanceof Error?t.message:t))}},a=t&&setTimeout(()=>{a=null,i(new P(`timeout of ${t}ms exceeded`,P.ETIMEDOUT))},t),o=()=>{e&&=(a&&clearTimeout(a),a=null,e.forEach(e=>{e.unsubscribe?e.unsubscribe(i):e.removeEventListener(`abort`,i)}),null)};e.forEach(e=>e.addEventListener(`abort`,i));let{signal:s}=n;return s.unsubscribe=()=>j.asap(o),s},Zt=function*(e,t){let n=e.byteLength;if(n<t){yield e;return}let r=0,i;for(;r<n;)i=r+t,yield e.slice(r,i),r=i},Qt=async function*(e,t){for await(let n of $t(e))yield*Zt(n,t)},$t=async function*(e){if(e[Symbol.asyncIterator]){yield*e;return}let t=e.getReader();try{for(;;){let{done:e,value:n}=await t.read();if(e)break;yield n}}finally{await t.cancel()}},I=(e,t,n,r)=>{let i=Qt(e,t),a=0,o,s=e=>{o||(o=!0,r&&r(e))};return new ReadableStream({async pull(e){try{let{done:t,value:r}=await i.next();if(t){s(),e.close();return}let o=r.byteLength;n&&n(a+=o),e.enqueue(new Uint8Array(r))}catch(e){throw s(e),e}},cancel(e){return s(e),i.return()}},{highWaterMark:2})};function en(e){if(!e||typeof e!=`string`||!e.startsWith(`data:`))return 0;let t=e.indexOf(`,`);if(t<0)return 0;let n=e.slice(5,t),r=e.slice(t+1);if(/;base64/i.test(n)){let e=r.length,t=r.length;for(let n=0;n<t;n++)if(r.charCodeAt(n)===37&&n+2<t){let t=r.charCodeAt(n+1),i=r.charCodeAt(n+2);(t>=48&&t<=57||t>=65&&t<=70||t>=97&&t<=102)&&(i>=48&&i<=57||i>=65&&i<=70||i>=97&&i<=102)&&(e-=2,n+=2)}let n=0,i=t-1,a=e=>e>=2&&r.charCodeAt(e-2)===37&&r.charCodeAt(e-1)===51&&(r.charCodeAt(e)===68||r.charCodeAt(e)===100);i>=0&&(r.charCodeAt(i)===61?(n++,i--):a(i)&&(n++,i-=3)),n===1&&i>=0&&(r.charCodeAt(i)===61||a(i))&&n++;let o=Math.floor(e/4)*3-(n||0);return o>0?o:0}if(typeof Buffer<`u`&&typeof Buffer.byteLength==`function`)return Buffer.byteLength(r,`utf8`);let i=0;for(let e=0,t=r.length;e<t;e++){let n=r.charCodeAt(e);if(n<128)i+=1;else if(n<2048)i+=2;else if(n>=55296&&n<=56319&&e+1<t){let t=r.charCodeAt(e+1);t>=56320&&t<=57343?(i+=4,e++):i+=3}else i+=3}return i}var tn=`1.16.1`,nn=64*1024,{isFunction:rn}=j,an=(e,...t)=>{try{return!!e(...t)}catch{return!1}},on=e=>{let t=j.global!==void 0&&j.global!==null?j.global:globalThis,{ReadableStream:n,TextEncoder:r}=t;e=j.merge.call({skipUndefined:!0},{Request:t.Request,Response:t.Response},e);let{fetch:i,Request:a,Response:o}=e,s=i?rn(i):typeof fetch==`function`,c=rn(a),l=rn(o);if(!s)return!1;let u=s&&rn(n),d=s&&(typeof r==`function`?(e=>t=>e.encode(t))(new r):async e=>new Uint8Array(await new a(e).arrayBuffer())),f=c&&u&&an(()=>{let e=!1,t=new a(xt.origin,{body:new n,method:`POST`,get duplex(){return e=!0,`half`}}),r=t.headers.has(`Content-Type`);return t.body!=null&&t.body.cancel(),e&&!r}),p=l&&u&&an(()=>j.isReadableStream(new o(``).body)),m={stream:p&&(e=>e.body)};s&&[`text`,`arrayBuffer`,`blob`,`formData`,`stream`].forEach(e=>{!m[e]&&(m[e]=(t,n)=>{let r=t&&t[e];if(r)return r.call(t);throw new P(`Response type '${e}' is not supported`,P.ERR_NOT_SUPPORT,n)})});let h=async e=>{if(e==null)return 0;if(j.isBlob(e))return e.size;if(j.isSpecCompliantForm(e))return(await new a(xt.origin,{method:`POST`,body:e}).arrayBuffer()).byteLength;if(j.isArrayBufferView(e)||j.isArrayBuffer(e))return e.byteLength;if(j.isURLSearchParams(e)&&(e+=``),j.isString(e))return(await d(e)).byteLength},g=async(e,t)=>j.toFiniteNumber(e.getContentLength())??h(t);return async e=>{let{url:t,method:n,data:s,signal:l,cancelToken:u,timeout:d,onDownloadProgress:h,onUploadProgress:_,responseType:v,headers:y,withCredentials:b=`same-origin`,fetchOptions:x,maxContentLength:S,maxBodyLength:C}=Jt(e),w=j.isNumber(S)&&S>-1,T=j.isNumber(C)&&C>-1,E=i||fetch;v=v?(v+``).toLowerCase():`text`;let ee=Xt([l,u&&u.toAbortSignal()],d),D=null,te=ee&&ee.unsubscribe&&(()=>{ee.unsubscribe()}),ne;try{if(w&&typeof t==`string`&&t.startsWith(`data:`)&&en(t)>S)throw new P(`maxContentLength size of `+S+` exceeded`,P.ERR_BAD_RESPONSE,e,D);if(T&&n!==`get`&&n!==`head`){let t=await g(y,s);if(typeof t==`number`&&isFinite(t)&&t>C)throw new P(`Request body larger than maxBodyLength limit`,P.ERR_BAD_REQUEST,e,D)}if(_&&f&&n!==`get`&&n!==`head`&&(ne=await g(y,s))!==0){let e=new a(t,{method:`POST`,body:s,duplex:`half`}),n;if(j.isFormData(s)&&(n=e.headers.get(`content-type`))&&y.setContentType(n),e.body){let[t,n]=It(ne,Ft(Lt(_)));s=I(e.body,nn,t,n)}}j.isString(b)||(b=b?`include`:`omit`);let i=c&&`credentials`in a.prototype;if(j.isFormData(s)){let e=y.getContentType();e&&/^multipart\/form-data/i.test(e)&&!/boundary=/i.test(e)&&y.delete(`content-type`)}y.set(`User-Agent`,`axios/1.16.1`,!1);let l={...x,signal:ee,method:n.toUpperCase(),headers:Ue(y.normalize()),body:s,duplex:`half`,credentials:i?b:void 0};D=c&&new a(t,l);let u=await(c?E(D,x):E(t,l));if(w){let t=j.toFiniteNumber(u.headers.get(`content-length`));if(t!=null&&t>S)throw new P(`maxContentLength size of `+S+` exceeded`,P.ERR_BAD_RESPONSE,e,D)}let d=p&&(v===`stream`||v===`response`);if(p&&u.body&&(h||w||d&&te)){let t={};[`status`,`statusText`,`headers`].forEach(e=>{t[e]=u[e]});let n=j.toFiniteNumber(u.headers.get(`content-length`)),[r,i]=h&&It(n,Ft(Lt(h),!0))||[],a=0;u=new o(I(u.body,nn,t=>{if(w&&(a=t,a>S))throw new P(`maxContentLength size of `+S+` exceeded`,P.ERR_BAD_RESPONSE,e,D);r&&r(t)},()=>{i&&i(),te&&te()}),t)}v||=`text`;let O=await m[j.findKey(m,v)||`text`](u,e);if(w&&!p&&!d){let t;if(O!=null&&(typeof O.byteLength==`number`?t=O.byteLength:typeof O.size==`number`?t=O.size:typeof O==`string`&&(t=typeof r==`function`?new r().encode(O).byteLength:O.length)),typeof t==`number`&&t>S)throw new P(`maxContentLength size of `+S+` exceeded`,P.ERR_BAD_RESPONSE,e,D)}return!d&&te&&te(),await new Promise((t,n)=>{jt(t,n,{data:O,headers:Ze.from(u.headers),status:u.status,statusText:u.statusText,config:e,request:D})})}catch(t){if(te&&te(),ee&&ee.aborted&&ee.reason instanceof P){let n=ee.reason;throw n.config=e,D&&(n.request=D),t!==n&&(n.cause=t),n}throw t&&t.name===`TypeError`&&/Load failed|fetch/i.test(t.message)?Object.assign(new P(`Network Error`,P.ERR_NETWORK,e,D,t&&t.response),{cause:t.cause||t}):P.from(t,t&&t.code,e,D,t&&t.response)}}},sn=new Map,cn=e=>{let t=e&&e.env||{},{fetch:n,Request:r,Response:i}=t,a=[r,i,n],o=a.length,s,c,l=sn;for(;o--;)s=a[o],c=l.get(s),c===void 0&&l.set(s,c=o?new Map:on(t)),l=c;return c};cn();var ln={http:tt,xhr:Yt,fetch:{get:cn}};j.forEach(ln,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{__proto__:null,value:t})}catch{}Object.defineProperty(e,"adapterName",{__proto__:null,value:t})}});var un=e=>`- ${e}`,dn=e=>j.isFunction(e)||e===null||e===!1;function fn(e,t){e=j.isArray(e)?e:[e];let{length:n}=e,r,i,a={};for(let o=0;o<n;o++){r=e[o];let n;if(i=r,!dn(r)&&(i=ln[(n=String(r)).toLowerCase()],i===void 0))throw new P(`Unknown adapter '${n}'`);if(i&&(j.isFunction(i)||(i=i.get(t))))break;a[n||`#`+o]=i}if(!i){let e=Object.entries(a).map(([e,t])=>`adapter ${e} `+(t===!1?`is not supported by the environment`:`is not available in the build`));throw new P(`There is no suitable adapter to dispatch the request `+(n?e.length>1?`since :
`+e.map(un).join(`
`):` `+un(e[0]):`as no adapter specified`),`ERR_NOT_SUPPORT`)}return i}var pn={getAdapter:fn,adapters:ln};function mn(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new At(null,e)}function hn(e){return mn(e),e.headers=Ze.from(e.headers),e.data=F.call(e,e.transformRequest),[`post`,`put`,`patch`].indexOf(e.method)!==-1&&e.headers.setContentType(`application/x-www-form-urlencoded`,!1),pn.getAdapter(e.adapter||Ot.adapter,e)(e).then(function(t){mn(e),e.response=t;try{t.data=F.call(e,e.transformResponse,t)}finally{delete e.response}return t.headers=Ze.from(t.headers),t},function(t){if(!kt(t)&&(mn(e),t&&t.response)){e.response=t.response;try{t.response.data=F.call(e,e.transformResponse,t.response)}finally{delete e.response}t.response.headers=Ze.from(t.response.headers)}return Promise.reject(t)})}var gn={};[`object`,`boolean`,`number`,`function`,`string`,`symbol`].forEach((e,t)=>{gn[e]=function(n){return typeof n===e||`a`+(t<1?`n `:` `)+e}});var _n={};gn.transitional=function(e,t,n){function r(e,t){return`[Axios v1.16.1] Transitional option '`+e+`'`+t+(n?`. `+n:``)}return(n,i,a)=>{if(e===!1)throw new P(r(i,` has been removed`+(t?` in `+t:``)),P.ERR_DEPRECATED);return t&&!_n[i]&&(_n[i]=!0,console.warn(r(i,` has been deprecated since v`+t+` and will be removed in the near future`))),e?e(n,i,a):!0}},gn.spelling=function(e){return(t,n)=>(console.warn(`${n} is likely a misspelling of ${e}`),!0)};function vn(e,t,n){if(typeof e!=`object`)throw new P(`options must be an object`,P.ERR_BAD_OPTION_VALUE);let r=Object.keys(e),i=r.length;for(;i-- >0;){let a=r[i],o=Object.prototype.hasOwnProperty.call(t,a)?t[a]:void 0;if(o){let t=e[a],n=t===void 0||o(t,a,e);if(n!==!0)throw new P(`option `+a+` must be `+n,P.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new P(`Unknown option `+a,P.ERR_BAD_OPTION)}}var yn={assertOptions:vn,validators:gn},bn=yn.validators,xn=class{constructor(e){this.defaults=e||{},this.interceptors={request:new pt,response:new pt}}async request(e,t){try{return await this._request(e,t)}catch(e){if(e instanceof Error){let t={};Error.captureStackTrace?Error.captureStackTrace(t):t=Error();let n=(()=>{if(!t.stack)return``;let e=t.stack.indexOf(`
`);return e===-1?``:t.stack.slice(e+1)})();try{if(!e.stack)e.stack=n;else if(n){let t=n.indexOf(`
`),r=t===-1?-1:n.indexOf(`
`,t+1),i=r===-1?``:n.slice(r+1);String(e.stack).endsWith(i)||(e.stack+=`
`+n)}}catch{}}throw e}}_request(e,t){typeof e==`string`?(t||={},t.url=e):t=e||{},t=Wt(this.defaults,t);let{transitional:n,paramsSerializer:r,headers:i}=t;n!==void 0&&yn.assertOptions(n,{silentJSONParsing:bn.transitional(bn.boolean),forcedJSONParsing:bn.transitional(bn.boolean),clarifyTimeoutError:bn.transitional(bn.boolean),legacyInterceptorReqResOrdering:bn.transitional(bn.boolean)},!1),r!=null&&(j.isFunction(r)?t.paramsSerializer={serialize:r}:yn.assertOptions(r,{encode:bn.function,serialize:bn.function},!0)),t.allowAbsoluteUrls!==void 0||(this.defaults.allowAbsoluteUrls===void 0?t.allowAbsoluteUrls=!0:t.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls),yn.assertOptions(t,{baseUrl:bn.spelling(`baseURL`),withXsrfToken:bn.spelling(`withXSRFToken`)},!0),t.method=(t.method||this.defaults.method||`get`).toLowerCase();let a=i&&j.merge(i.common,i[t.method]);i&&j.forEach([`delete`,`get`,`head`,`post`,`put`,`patch`,`query`,`common`],e=>{delete i[e]}),t.headers=Ze.concat(a,i);let o=[],s=!0;this.interceptors.request.forEach(function(e){if(typeof e.runWhen==`function`&&e.runWhen(t)===!1)return;s&&=e.synchronous;let n=t.transitional||mt;n&&n.legacyInterceptorReqResOrdering?o.unshift(e.fulfilled,e.rejected):o.push(e.fulfilled,e.rejected)});let c=[];this.interceptors.response.forEach(function(e){c.push(e.fulfilled,e.rejected)});let l,u=0,d;if(!s){let e=[hn.bind(this),void 0];for(e.unshift(...o),e.push(...c),d=e.length,l=Promise.resolve(t);u<d;)l=l.then(e[u++],e[u++]);return l}d=o.length;let f=t;for(;u<d;){let e=o[u++],t=o[u++];try{f=e(f)}catch(e){t.call(this,e);break}}try{l=hn.call(this,f)}catch(e){return Promise.reject(e)}for(u=0,d=c.length;u<d;)l=l.then(c[u++],c[u++]);return l}getUri(e){return e=Wt(this.defaults,e),ft(Ht(e.baseURL,e.url,e.allowAbsoluteUrls),e.params,e.paramsSerializer)}};j.forEach([`delete`,`get`,`head`,`options`],function(e){xn.prototype[e]=function(t,n){return this.request(Wt(n||{},{method:e,url:t,data:(n||{}).data}))}}),j.forEach([`post`,`put`,`patch`,`query`],function(e){function t(t){return function(n,r,i){return this.request(Wt(i||{},{method:e,headers:t?{"Content-Type":`multipart/form-data`}:{},url:n,data:r}))}}xn.prototype[e]=t(),e!==`query`&&(xn.prototype[e+`Form`]=t(!0))});var Sn=class e{constructor(e){if(typeof e!=`function`)throw TypeError(`executor must be a function.`);let t;this.promise=new Promise(function(e){t=e});let n=this;this.promise.then(e=>{if(!n._listeners)return;let t=n._listeners.length;for(;t-- >0;)n._listeners[t](e);n._listeners=null}),this.promise.then=e=>{let t,r=new Promise(e=>{n.subscribe(e),t=e}).then(e);return r.cancel=function(){n.unsubscribe(t)},r},e(function(e,r,i){n.reason||(n.reason=new At(e,r,i),t(n.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;let t=this._listeners.indexOf(e);t!==-1&&this._listeners.splice(t,1)}toAbortSignal(){let e=new AbortController,t=t=>{e.abort(t)};return this.subscribe(t),e.signal.unsubscribe=()=>this.unsubscribe(t),e.signal}static source(){let t;return{token:new e(function(e){t=e}),cancel:t}}};function Cn(e){return function(t){return e.apply(null,t)}}function wn(e){return j.isObject(e)&&e.isAxiosError===!0}var Tn={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511,WebServerIsDown:521,ConnectionTimedOut:522,OriginIsUnreachable:523,TimeoutOccurred:524,SslHandshakeFailed:525,InvalidSslCertificate:526};Object.entries(Tn).forEach(([e,t])=>{Tn[t]=e});function En(e){let t=new xn(e),r=n(xn.prototype.request,t);return j.extend(r,xn.prototype,t,{allOwnKeys:!0}),j.extend(r,t,null,{allOwnKeys:!0}),r.create=function(t){return En(Wt(e,t))},r}var Dn=En(Ot);Dn.Axios=xn,Dn.CanceledError=At,Dn.CancelToken=Sn,Dn.isCancel=kt,Dn.VERSION=tn,Dn.toFormData=st,Dn.AxiosError=P,Dn.Cancel=Dn.CanceledError,Dn.all=function(e){return Promise.all(e)},Dn.spread=Cn,Dn.isAxiosError=wn,Dn.mergeConfig=Wt,Dn.AxiosHeaders=Ze,Dn.formToJSON=e=>Tt(j.isHTMLForm(e)?new FormData(e):e),Dn.getAdapter=pn.getAdapter,Dn.HttpStatusCode=Tn,Dn.default=Dn,t.exports=Dn})),Rd=a((e=>{var t=e&&e.__assign||function(){return t=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n],t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},t.apply(this,arguments)},n=e&&e.__awaiter||function(e,t,n,r){function i(e){return e instanceof n?e:new n(function(t){t(e)})}return new(n||=Promise)(function(n,a){function o(e){try{c(r.next(e))}catch(e){a(e)}}function s(e){try{c(r.throw(e))}catch(e){a(e)}}function c(e){e.done?n(e.value):i(e.value).then(o,s)}c((r=r.apply(e,t||[])).next())})},r=e&&e.__generator||function(e,t){var n={label:0,sent:function(){if(a[0]&1)throw a[1];return a[1]},trys:[],ops:[]},r,i,a,o=Object.create((typeof Iterator==`function`?Iterator:Object).prototype);return o.next=s(0),o.throw=s(1),o.return=s(2),typeof Symbol==`function`&&(o[Symbol.iterator]=function(){return this}),o;function s(e){return function(t){return c([e,t])}}function c(s){if(r)throw TypeError(`Generator is already executing.`);for(;o&&(o=0,s[0]&&(n=0)),n;)try{if(r=1,i&&(a=s[0]&2?i.return:s[0]?i.throw||((a=i.return)&&a.call(i),0):i.next)&&!(a=a.call(i,s[1])).done)return a;switch(i=0,a&&(s=[s[0]&2,a.value]),s[0]){case 0:case 1:a=s;break;case 4:return n.label++,{value:s[1],done:!1};case 5:n.label++,i=s[1],s=[0];continue;case 7:s=n.ops.pop(),n.trys.pop();continue;default:if((a=n.trys,!(a=a.length>0&&a[a.length-1]))&&(s[0]===6||s[0]===2)){n=0;continue}if(s[0]===3&&(!a||s[1]>a[0]&&s[1]<a[3])){n.label=s[1];break}if(s[0]===6&&n.label<a[1]){n.label=a[1],a=s;break}if(a&&n.label<a[2]){n.label=a[2],n.ops.push(s);break}a[2]&&n.ops.pop(),n.trys.pop();continue}s=t.call(e,n)}catch(e){s=[6,e],i=0}finally{r=a=0}if(s[0]&5)throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}},i=e&&e.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(e,"__esModule",{value:!0}),e.AxiosClient=void 0;var a=i(Ld());e.AxiosClient=function(){function e(e){var t=e.responseHandler,n=e.requestConfigBuilder;this.responseHandler=t,this.requestConfigBuilder=n}return e.prototype.get=function(e,t){return n(this,void 0,void 0,function(){var n;return r(this,function(r){switch(r.label){case 0:return[4,this.requestConfigBuilder.build(`get`,e,t)];case 1:return n=r.sent(),[4,this.sendRequest(n)];case 2:return[2,r.sent()]}})})},e.prototype.getData=function(e,t){return n(this,void 0,void 0,function(){var n;return r(this,function(r){switch(r.label){case 0:return[4,this.requestConfigBuilder.build(`get`,e,t,{responseType:`arraybuffer`})];case 1:return n=r.sent(),[4,this.sendRequest(n)];case 2:return[2,r.sent()]}})})},e.prototype.post=function(e,t){return n(this,void 0,void 0,function(){var n;return r(this,function(r){switch(r.label){case 0:return[4,this.requestConfigBuilder.build(`post`,e,t)];case 1:return n=r.sent(),[4,this.sendRequest(n)];case 2:return[2,r.sent()]}})})},e.prototype.postData=function(e,t){return n(this,void 0,void 0,function(){var n;return r(this,function(r){switch(r.label){case 0:return[4,this.requestConfigBuilder.build(`post`,e,t)];case 1:return n=r.sent(),[4,this.sendRequest(n)];case 2:return[2,r.sent()]}})})},e.prototype.put=function(e,t){return n(this,void 0,void 0,function(){var n;return r(this,function(r){switch(r.label){case 0:return[4,this.requestConfigBuilder.build(`put`,e,t)];case 1:return n=r.sent(),[4,this.sendRequest(n)];case 2:return[2,r.sent()]}})})},e.prototype.delete=function(e,t){return n(this,void 0,void 0,function(){var n;return r(this,function(r){switch(r.label){case 0:return[4,this.requestConfigBuilder.build(`delete`,e,t)];case 1:return n=r.sent(),[4,this.sendRequest(n)];case 2:return[2,r.sent()]}})})},e.prototype.sendRequest=function(e){return this.responseHandler.handle((0,a.default)(t(t({},e),{maxBodyLength:1/0,maxContentLength:1/0})))},e}()})),zd=a((e=>{Object.defineProperty(e,"__esModule",{value:!0}),e.DefaultHttpClient=void 0;var t=Rd();Object.defineProperty(e,"DefaultHttpClient",{enumerable:!0,get:function(){return t.AxiosClient}})})),Bd=a(((e,t)=>{t.exports=TypeError})),Vd=a(((e,t)=>{t.exports={}})),Hd=a(((e,t)=>{var n=typeof Map==`function`&&Map.prototype,r=Object.getOwnPropertyDescriptor&&n?Object.getOwnPropertyDescriptor(Map.prototype,`size`):null,i=n&&r&&typeof r.get==`function`?r.get:null,a=n&&Map.prototype.forEach,o=typeof Set==`function`&&Set.prototype,s=Object.getOwnPropertyDescriptor&&o?Object.getOwnPropertyDescriptor(Set.prototype,`size`):null,c=o&&s&&typeof s.get==`function`?s.get:null,l=o&&Set.prototype.forEach,u=typeof WeakMap==`function`&&WeakMap.prototype?WeakMap.prototype.has:null,d=typeof WeakSet==`function`&&WeakSet.prototype?WeakSet.prototype.has:null,f=typeof WeakRef==`function`&&WeakRef.prototype?WeakRef.prototype.deref:null,p=Boolean.prototype.valueOf,m=Object.prototype.toString,h=Function.prototype.toString,g=String.prototype.match,_=String.prototype.slice,v=String.prototype.replace,y=String.prototype.toUpperCase,b=String.prototype.toLowerCase,x=RegExp.prototype.test,S=Array.prototype.concat,C=Array.prototype.join,w=Array.prototype.slice,T=Math.floor,E=typeof BigInt==`function`?BigInt.prototype.valueOf:null,ee=Object.getOwnPropertySymbols,D=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?Symbol.prototype.toString:null,te=typeof Symbol==`function`&&typeof Symbol.iterator==`object`,ne=typeof Symbol==`function`&&Symbol.toStringTag?Symbol.toStringTag:null,O=Object.prototype.propertyIsEnumerable,re=(typeof Reflect==`function`?Reflect.getPrototypeOf:Object.getPrototypeOf)||([].__proto__===Array.prototype?function(e){return e.__proto__}:null);function ie(e,t){if(e===1/0||e===-1/0||e!==e||e&&e>-1e3&&e<1e3||x.call(/e/,t))return t;var n=/[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;if(typeof e==`number`){var r=e<0?-T(-e):T(e);if(r!==e){var i=String(r),a=_.call(t,i.length+1);return v.call(i,n,`$&_`)+`.`+v.call(v.call(a,/([0-9]{3})/g,`$&_`),/_$/,``)}}return v.call(t,n,`$&_`)}var ae=Vd(),oe=ae.custom,se=ye(oe)?oe:null,ce={__proto__:null,double:`"`,single:`'`},le={__proto__:null,double:/(["\\])/g,single:/(['\\])/g};t.exports=function e(t,n,r,o){var s=n||{};if(Se(s,`quoteStyle`)&&!Se(ce,s.quoteStyle))throw TypeError(`option "quoteStyle" must be "single" or "double"`);if(Se(s,`maxStringLength`)&&(typeof s.maxStringLength==`number`?s.maxStringLength<0&&s.maxStringLength!==1/0:s.maxStringLength!==null))throw TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');var u=Se(s,`customInspect`)?s.customInspect:!0;if(typeof u!=`boolean`&&u!==`symbol`)throw TypeError("option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`");if(Se(s,`indent`)&&s.indent!==null&&s.indent!==`	`&&!(parseInt(s.indent,10)===s.indent&&s.indent>0))throw TypeError('option "indent" must be "\\t", an integer > 0, or `null`');if(Se(s,`numericSeparator`)&&typeof s.numericSeparator!=`boolean`)throw TypeError('option "numericSeparator", if provided, must be `true` or `false`');var d=s.numericSeparator;if(t===void 0)return`undefined`;if(t===null)return`null`;if(typeof t==`boolean`)return t?`true`:`false`;if(typeof t==`string`)return Me(t,s);if(typeof t==`number`){if(t===0)return 1/0/t>0?`0`:`-0`;var f=String(t);return d?ie(t,f):f}if(typeof t==`bigint`){var m=String(t)+`n`;return d?ie(t,m):m}var h=s.depth===void 0?5:s.depth;if(r===void 0&&(r=0),r>=h&&h>0&&typeof t==`object`)return fe(t)?`[Array]`:`[Object]`;var g=M(s,r);if(o===void 0)o=[];else if(Te(o,t)>=0)return`[Circular]`;function y(t,n,i){if(n&&(o=w.call(o),o.push(n)),i){var a={depth:s.depth};return Se(s,`quoteStyle`)&&(a.quoteStyle=s.quoteStyle),e(t,a,r+1,o)}return e(t,s,r+1,o)}if(typeof t==`function`&&!me(t)){var x=we(t),T=Le(t,y);return`[Function`+(x?`: `+x:` (anonymous)`)+`]`+(T.length>0?` { `+C.call(T,`, `)+` }`:``)}if(ye(t)){var ee=te?v.call(String(t),/^(Symbol\(.*\))_[^)]*$/,`$1`):D.call(t);return typeof t==`object`&&!te?Pe(ee):ee}if(je(t)){for(var oe=`<`+b.call(String(t.nodeName)),le=t.attributes||[],k=0;k<le.length;k++)oe+=` `+le[k].name+`=`+ue(de(le[k].value),`double`,s);return oe+=`>`,t.childNodes&&t.childNodes.length&&(oe+=`...`),oe+=`</`+b.call(String(t.nodeName))+`>`,oe}if(fe(t)){if(t.length===0)return`[]`;var xe=Le(t,y);return g&&!j(xe)?`[`+Ie(xe,g)+`]`:`[ `+C.call(xe,`, `)+` ]`}if(he(t)){var Ne=Le(t,y);return!(`cause`in Error.prototype)&&`cause`in t&&!O.call(t,`cause`)?`{ [`+String(t)+`] `+C.call(S.call(`[cause]: `+y(t.cause),Ne),`, `)+` }`:Ne.length===0?`[`+String(t)+`]`:`{ [`+String(t)+`] `+C.call(Ne,`, `)+` }`}if(typeof t==`object`&&u){if(se&&typeof t[se]==`function`&&ae)return ae(t,{depth:h-r});if(u!==`symbol`&&typeof t.inspect==`function`)return t.inspect()}if(Ee(t)){var Re=[];return a&&a.call(t,function(e,n){Re.push(y(n,t,!0)+` => `+y(e,t))}),A(`Map`,i.call(t),Re,g)}if(ke(t)){var ze=[];return l&&l.call(t,function(e){ze.push(y(e,t))}),A(`Set`,c.call(t),ze,g)}if(De(t))return Fe(`WeakMap`);if(Ae(t))return Fe(`WeakSet`);if(Oe(t))return Fe(`WeakRef`);if(_e(t))return Pe(y(Number(t)));if(be(t))return Pe(y(E.call(t)));if(ve(t))return Pe(p.call(t));if(ge(t))return Pe(y(String(t)));if(typeof window<`u`&&t===window)return`{ [object Window] }`;if(typeof globalThis<`u`&&t===globalThis||typeof global<`u`&&t===global)return`{ [object globalThis] }`;if(!pe(t)&&!me(t)){var Be=Le(t,y),Ve=re?re(t)===Object.prototype:t instanceof Object||t.constructor===Object,He=t instanceof Object?``:`null prototype`,Ue=!Ve&&ne&&Object(t)===t&&ne in t?_.call(Ce(t),8,-1):He?`Object`:``,We=(Ve||typeof t.constructor!=`function`?``:t.constructor.name?t.constructor.name+` `:``)+(Ue||He?`[`+C.call(S.call([],Ue||[],He||[]),`: `)+`] `:``);return Be.length===0?We+`{}`:g?We+`{`+Ie(Be,g)+`}`:We+`{ `+C.call(Be,`, `)+` }`}return String(t)};function ue(e,t,n){var r=ce[n.quoteStyle||t];return r+e+r}function de(e){return v.call(String(e),/"/g,`&quot;`)}function k(e){return!ne||!(typeof e==`object`&&(ne in e||e[ne]!==void 0))}function fe(e){return Ce(e)===`[object Array]`&&k(e)}function pe(e){return Ce(e)===`[object Date]`&&k(e)}function me(e){return Ce(e)===`[object RegExp]`&&k(e)}function he(e){return Ce(e)===`[object Error]`&&k(e)}function ge(e){return Ce(e)===`[object String]`&&k(e)}function _e(e){return Ce(e)===`[object Number]`&&k(e)}function ve(e){return Ce(e)===`[object Boolean]`&&k(e)}function ye(e){if(te)return e&&typeof e==`object`&&e instanceof Symbol;if(typeof e==`symbol`)return!0;if(!e||typeof e!=`object`||!D)return!1;try{return D.call(e),!0}catch{}return!1}function be(e){if(!e||typeof e!=`object`||!E)return!1;try{return E.call(e),!0}catch{}return!1}var xe=Object.prototype.hasOwnProperty||function(e){return e in this};function Se(e,t){return xe.call(e,t)}function Ce(e){return m.call(e)}function we(e){if(e.name)return e.name;var t=g.call(h.call(e),/^function\s*([\w$]+)/);return t?t[1]:null}function Te(e,t){if(e.indexOf)return e.indexOf(t);for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n;return-1}function Ee(e){if(!i||!e||typeof e!=`object`)return!1;try{i.call(e);try{c.call(e)}catch{return!0}return e instanceof Map}catch{}return!1}function De(e){if(!u||!e||typeof e!=`object`)return!1;try{u.call(e,u);try{d.call(e,d)}catch{return!0}return e instanceof WeakMap}catch{}return!1}function Oe(e){if(!f||!e||typeof e!=`object`)return!1;try{return f.call(e),!0}catch{}return!1}function ke(e){if(!c||!e||typeof e!=`object`)return!1;try{c.call(e);try{i.call(e)}catch{return!0}return e instanceof Set}catch{}return!1}function Ae(e){if(!d||!e||typeof e!=`object`)return!1;try{d.call(e,d);try{u.call(e,u)}catch{return!0}return e instanceof WeakSet}catch{}return!1}function je(e){return!e||typeof e!=`object`?!1:typeof HTMLElement<`u`&&e instanceof HTMLElement?!0:typeof e.nodeName==`string`&&typeof e.getAttribute==`function`}function Me(e,t){if(e.length>t.maxStringLength){var n=e.length-t.maxStringLength,r=`... `+n+` more character`+(n>1?`s`:``);return Me(_.call(e,0,t.maxStringLength),t)+r}var i=le[t.quoteStyle||`single`];return i.lastIndex=0,ue(v.call(v.call(e,i,`\\$1`),/[\x00-\x1f]/g,Ne),`single`,t)}function Ne(e){var t=e.charCodeAt(0),n={8:`b`,9:`t`,10:`n`,12:`f`,13:`r`}[t];return n?`\\`+n:`\\x`+(t<16?`0`:``)+y.call(t.toString(16))}function Pe(e){return`Object(`+e+`)`}function Fe(e){return e+` { ? }`}function A(e,t,n,r){var i=r?Ie(n,r):C.call(n,`, `);return e+` (`+t+`) {`+i+`}`}function j(e){for(var t=0;t<e.length;t++)if(Te(e[t],`
`)>=0)return!1;return!0}function M(e,t){var n;if(e.indent===`	`)n=`	`;else if(typeof e.indent==`number`&&e.indent>0)n=C.call(Array(e.indent+1),` `);else return null;return{base:n,prev:C.call(Array(t+1),n)}}function Ie(e,t){if(e.length===0)return``;var n=`
`+t.prev+t.base;return n+C.call(e,`,`+n)+`
`+t.prev}function Le(e,t){var n=fe(e),r=[];if(n){r.length=e.length;for(var i=0;i<e.length;i++)r[i]=Se(e,i)?t(e[i],e):``}var a=typeof ee==`function`?ee(e):[],o;if(te){o={};for(var s=0;s<a.length;s++)o[`$`+a[s]]=a[s]}for(var c in e)Se(e,c)&&(n&&String(Number(c))===c&&c<e.length||te&&o[`$`+c]instanceof Symbol||(x.call(/[^\w$]/,c)?r.push(t(c,e)+`: `+t(e[c],e)):r.push(c+`: `+t(e[c],e))));if(typeof ee==`function`)for(var l=0;l<a.length;l++)O.call(e,a[l])&&r.push(`[`+t(a[l])+`]: `+t(e[a[l]],e));return r}})),Ud=a(((e,t)=>{var n=Hd(),r=Bd(),i=function(e,t,n){for(var r=e,i;(i=r.next)!=null;r=i)if(i.key===t)return r.next=i.next,n||(i.next=e.next,e.next=i),i},a=function(e,t){if(e){var n=i(e,t);return n&&n.value}},o=function(e,t,n){var r=i(e,t);r?r.value=n:e.next={key:t,next:e.next,value:n}},s=function(e,t){return e?!!i(e,t):!1},c=function(e,t){if(e)return i(e,t,!0)};t.exports=function(){var e,t={assert:function(e){if(!t.has(e))throw new r(`Side channel does not contain `+n(e))},delete:function(t){var n=c(e,t);return n&&e&&!e.next&&(e=void 0),!!n},get:function(t){return a(e,t)},has:function(t){return s(e,t)},set:function(t,n){e||={next:void 0},o(e,t,n)}};return t}})),Wd=a(((e,t)=>{t.exports=Object})),Gd=a(((e,t)=>{t.exports=Error})),Kd=a(((e,t)=>{t.exports=EvalError})),qd=a(((e,t)=>{t.exports=RangeError})),Jd=a(((e,t)=>{t.exports=ReferenceError})),Yd=a(((e,t)=>{t.exports=SyntaxError})),Xd=a(((e,t)=>{t.exports=URIError})),Zd=a(((e,t)=>{t.exports=Math.abs})),Qd=a(((e,t)=>{t.exports=Math.floor})),$d=a(((e,t)=>{t.exports=Math.max})),ef=a(((e,t)=>{t.exports=Math.min})),tf=a(((e,t)=>{t.exports=Math.pow})),nf=a(((e,t)=>{t.exports=Math.round})),rf=a(((e,t)=>{t.exports=Number.isNaN||function(e){return e!==e}})),af=a(((e,t)=>{var n=rf();t.exports=function(e){return n(e)||e===0?e:e<0?-1:1}})),of=a(((e,t)=>{t.exports=Object.getOwnPropertyDescriptor})),sf=a(((e,t)=>{var n=of();if(n)try{n([],`length`)}catch{n=null}t.exports=n})),cf=a(((e,t)=>{var n=Object.defineProperty||!1;if(n)try{n({},`a`,{value:1})}catch{n=!1}t.exports=n})),lf=a(((e,t)=>{t.exports=function(){if(typeof Symbol!=`function`||typeof Object.getOwnPropertySymbols!=`function`)return!1;if(typeof Symbol.iterator==`symbol`)return!0;var e={},t=Symbol(`test`),n=Object(t);if(typeof t==`string`||Object.prototype.toString.call(t)!==`[object Symbol]`||Object.prototype.toString.call(n)!==`[object Symbol]`)return!1;var r=42;for(var i in e[t]=r,e)return!1;if(typeof Object.keys==`function`&&Object.keys(e).length!==0||typeof Object.getOwnPropertyNames==`function`&&Object.getOwnPropertyNames(e).length!==0)return!1;var a=Object.getOwnPropertySymbols(e);if(a.length!==1||a[0]!==t||!Object.prototype.propertyIsEnumerable.call(e,t))return!1;if(typeof Object.getOwnPropertyDescriptor==`function`){var o=Object.getOwnPropertyDescriptor(e,t);if(o.value!==r||o.enumerable!==!0)return!1}return!0}})),uf=a(((e,t)=>{var n=typeof Symbol<`u`&&Symbol,r=lf();t.exports=function(){return typeof n!=`function`||typeof Symbol!=`function`||typeof n(`foo`)!=`symbol`||typeof Symbol(`bar`)!=`symbol`?!1:r()}})),df=a(((e,t)=>{t.exports=typeof Reflect<`u`&&Reflect.getPrototypeOf||null})),ff=a(((e,t)=>{t.exports=Wd().getPrototypeOf||null})),pf=a(((e,t)=>{var n=`Function.prototype.bind called on incompatible `,r=Object.prototype.toString,i=Math.max,a=`[object Function]`,o=function(e,t){for(var n=[],r=0;r<e.length;r+=1)n[r]=e[r];for(var i=0;i<t.length;i+=1)n[i+e.length]=t[i];return n},s=function(e,t){for(var n=[],r=t||0,i=0;r<e.length;r+=1,i+=1)n[i]=e[r];return n},c=function(e,t){for(var n=``,r=0;r<e.length;r+=1)n+=e[r],r+1<e.length&&(n+=t);return n};t.exports=function(e){var t=this;if(typeof t!=`function`||r.apply(t)!==a)throw TypeError(n+t);for(var l=s(arguments,1),u,d=function(){if(this instanceof u){var n=t.apply(this,o(l,arguments));return Object(n)===n?n:this}return t.apply(e,o(l,arguments))},f=i(0,t.length-l.length),p=[],m=0;m<f;m++)p[m]=`$`+m;if(u=Function(`binder`,`return function (`+c(p,`,`)+`){ return binder.apply(this,arguments); }`)(d),t.prototype){var h=function(){};h.prototype=t.prototype,u.prototype=new h,h.prototype=null}return u}})),mf=a(((e,t)=>{var n=pf();t.exports=Function.prototype.bind||n})),hf=a(((e,t)=>{t.exports=Function.prototype.call})),gf=a(((e,t)=>{t.exports=Function.prototype.apply})),_f=a(((e,t)=>{t.exports=typeof Reflect<`u`&&Reflect&&Reflect.apply})),vf=a(((e,t)=>{var n=mf(),r=gf(),i=hf();t.exports=_f()||n.call(i,r)})),yf=a(((e,t)=>{var n=mf(),r=Bd(),i=hf(),a=vf();t.exports=function(e){if(e.length<1||typeof e[0]!=`function`)throw new r(`a function is required`);return a(n,i,e)}})),bf=a(((e,t)=>{var n=yf(),r=sf(),i;try{i=[].__proto__===Array.prototype}catch(e){if(!e||typeof e!=`object`||!(`code`in e)||e.code!==`ERR_PROTO_ACCESS`)throw e}var a=!!i&&r&&r(Object.prototype,`__proto__`),o=Object,s=o.getPrototypeOf;t.exports=a&&typeof a.get==`function`?n([a.get]):typeof s==`function`?function(e){return s(e==null?e:o(e))}:!1})),xf=a(((e,t)=>{var n=df(),r=ff(),i=bf();t.exports=n?function(e){return n(e)}:r?function(e){if(!e||typeof e!=`object`&&typeof e!=`function`)throw TypeError(`getProto: not an object`);return r(e)}:i?function(e){return i(e)}:null})),Sf=a(((e,t)=>{var n=Function.prototype.call,r=Object.prototype.hasOwnProperty;t.exports=mf().call(n,r)})),Cf=a(((e,t)=>{var n,r=Wd(),i=Gd(),a=Kd(),o=qd(),s=Jd(),c=Yd(),l=Bd(),u=Xd(),d=Zd(),f=Qd(),p=$d(),m=ef(),h=tf(),g=nf(),_=af(),v=Function,y=function(e){try{return v(`"use strict"; return (`+e+`).constructor;`)()}catch{}},b=sf(),x=cf(),S=function(){throw new l},C=b?function(){try{return arguments.callee,S}catch{try{return b(arguments,`callee`).get}catch{return S}}}():S,w=uf()(),T=xf(),E=ff(),ee=df(),D=gf(),te=hf(),ne={},O=typeof Uint8Array>`u`||!T?n:T(Uint8Array),re={__proto__:null,"%AggregateError%":typeof AggregateError>`u`?n:AggregateError,"%Array%":Array,"%ArrayBuffer%":typeof ArrayBuffer>`u`?n:ArrayBuffer,"%ArrayIteratorPrototype%":w&&T?T([][Symbol.iterator]()):n,"%AsyncFromSyncIteratorPrototype%":n,"%AsyncFunction%":ne,"%AsyncGenerator%":ne,"%AsyncGeneratorFunction%":ne,"%AsyncIteratorPrototype%":ne,"%Atomics%":typeof Atomics>`u`?n:Atomics,"%BigInt%":typeof BigInt>`u`?n:BigInt,"%BigInt64Array%":typeof BigInt64Array>`u`?n:BigInt64Array,"%BigUint64Array%":typeof BigUint64Array>`u`?n:BigUint64Array,"%Boolean%":Boolean,"%DataView%":typeof DataView>`u`?n:DataView,"%Date%":Date,"%decodeURI%":decodeURI,"%decodeURIComponent%":decodeURIComponent,"%encodeURI%":encodeURI,"%encodeURIComponent%":encodeURIComponent,"%Error%":i,"%eval%":eval,"%EvalError%":a,"%Float16Array%":typeof Float16Array>`u`?n:Float16Array,"%Float32Array%":typeof Float32Array>`u`?n:Float32Array,"%Float64Array%":typeof Float64Array>`u`?n:Float64Array,"%FinalizationRegistry%":typeof FinalizationRegistry>`u`?n:FinalizationRegistry,"%Function%":v,"%GeneratorFunction%":ne,"%Int8Array%":typeof Int8Array>`u`?n:Int8Array,"%Int16Array%":typeof Int16Array>`u`?n:Int16Array,"%Int32Array%":typeof Int32Array>`u`?n:Int32Array,"%isFinite%":isFinite,"%isNaN%":isNaN,"%IteratorPrototype%":w&&T?T(T([][Symbol.iterator]())):n,"%JSON%":typeof JSON==`object`?JSON:n,"%Map%":typeof Map>`u`?n:Map,"%MapIteratorPrototype%":typeof Map>`u`||!w||!T?n:T(new Map()[Symbol.iterator]()),"%Math%":Math,"%Number%":Number,"%Object%":r,"%Object.getOwnPropertyDescriptor%":b,"%parseFloat%":parseFloat,"%parseInt%":parseInt,"%Promise%":typeof Promise>`u`?n:Promise,"%Proxy%":typeof Proxy>`u`?n:Proxy,"%RangeError%":o,"%ReferenceError%":s,"%Reflect%":typeof Reflect>`u`?n:Reflect,"%RegExp%":RegExp,"%Set%":typeof Set>`u`?n:Set,"%SetIteratorPrototype%":typeof Set>`u`||!w||!T?n:T(new Set()[Symbol.iterator]()),"%SharedArrayBuffer%":typeof SharedArrayBuffer>`u`?n:SharedArrayBuffer,"%String%":String,"%StringIteratorPrototype%":w&&T?T(``[Symbol.iterator]()):n,"%Symbol%":w?Symbol:n,"%SyntaxError%":c,"%ThrowTypeError%":C,"%TypedArray%":O,"%TypeError%":l,"%Uint8Array%":typeof Uint8Array>`u`?n:Uint8Array,"%Uint8ClampedArray%":typeof Uint8ClampedArray>`u`?n:Uint8ClampedArray,"%Uint16Array%":typeof Uint16Array>`u`?n:Uint16Array,"%Uint32Array%":typeof Uint32Array>`u`?n:Uint32Array,"%URIError%":u,"%WeakMap%":typeof WeakMap>`u`?n:WeakMap,"%WeakRef%":typeof WeakRef>`u`?n:WeakRef,"%WeakSet%":typeof WeakSet>`u`?n:WeakSet,"%Function.prototype.call%":te,"%Function.prototype.apply%":D,"%Object.defineProperty%":x,"%Object.getPrototypeOf%":E,"%Math.abs%":d,"%Math.floor%":f,"%Math.max%":p,"%Math.min%":m,"%Math.pow%":h,"%Math.round%":g,"%Math.sign%":_,"%Reflect.getPrototypeOf%":ee};if(T)try{null.error}catch(e){re[`%Error.prototype%`]=T(T(e))}var ie=function e(t){var n;if(t===`%AsyncFunction%`)n=y(`async function () {}`);else if(t===`%GeneratorFunction%`)n=y(`function* () {}`);else if(t===`%AsyncGeneratorFunction%`)n=y(`async function* () {}`);else if(t===`%AsyncGenerator%`){var r=e(`%AsyncGeneratorFunction%`);r&&(n=r.prototype)}else if(t===`%AsyncIteratorPrototype%`){var i=e(`%AsyncGenerator%`);i&&T&&(n=T(i.prototype))}return re[t]=n,n},ae={__proto__:null,"%ArrayBufferPrototype%":[`ArrayBuffer`,`prototype`],"%ArrayPrototype%":[`Array`,`prototype`],"%ArrayProto_entries%":[`Array`,`prototype`,`entries`],"%ArrayProto_forEach%":[`Array`,`prototype`,`forEach`],"%ArrayProto_keys%":[`Array`,`prototype`,`keys`],"%ArrayProto_values%":[`Array`,`prototype`,`values`],"%AsyncFunctionPrototype%":[`AsyncFunction`,`prototype`],"%AsyncGenerator%":[`AsyncGeneratorFunction`,`prototype`],"%AsyncGeneratorPrototype%":[`AsyncGeneratorFunction`,`prototype`,`prototype`],"%BooleanPrototype%":[`Boolean`,`prototype`],"%DataViewPrototype%":[`DataView`,`prototype`],"%DatePrototype%":[`Date`,`prototype`],"%ErrorPrototype%":[`Error`,`prototype`],"%EvalErrorPrototype%":[`EvalError`,`prototype`],"%Float32ArrayPrototype%":[`Float32Array`,`prototype`],"%Float64ArrayPrototype%":[`Float64Array`,`prototype`],"%FunctionPrototype%":[`Function`,`prototype`],"%Generator%":[`GeneratorFunction`,`prototype`],"%GeneratorPrototype%":[`GeneratorFunction`,`prototype`,`prototype`],"%Int8ArrayPrototype%":[`Int8Array`,`prototype`],"%Int16ArrayPrototype%":[`Int16Array`,`prototype`],"%Int32ArrayPrototype%":[`Int32Array`,`prototype`],"%JSONParse%":[`JSON`,`parse`],"%JSONStringify%":[`JSON`,`stringify`],"%MapPrototype%":[`Map`,`prototype`],"%NumberPrototype%":[`Number`,`prototype`],"%ObjectPrototype%":[`Object`,`prototype`],"%ObjProto_toString%":[`Object`,`prototype`,`toString`],"%ObjProto_valueOf%":[`Object`,`prototype`,`valueOf`],"%PromisePrototype%":[`Promise`,`prototype`],"%PromiseProto_then%":[`Promise`,`prototype`,`then`],"%Promise_all%":[`Promise`,`all`],"%Promise_reject%":[`Promise`,`reject`],"%Promise_resolve%":[`Promise`,`resolve`],"%RangeErrorPrototype%":[`RangeError`,`prototype`],"%ReferenceErrorPrototype%":[`ReferenceError`,`prototype`],"%RegExpPrototype%":[`RegExp`,`prototype`],"%SetPrototype%":[`Set`,`prototype`],"%SharedArrayBufferPrototype%":[`SharedArrayBuffer`,`prototype`],"%StringPrototype%":[`String`,`prototype`],"%SymbolPrototype%":[`Symbol`,`prototype`],"%SyntaxErrorPrototype%":[`SyntaxError`,`prototype`],"%TypedArrayPrototype%":[`TypedArray`,`prototype`],"%TypeErrorPrototype%":[`TypeError`,`prototype`],"%Uint8ArrayPrototype%":[`Uint8Array`,`prototype`],"%Uint8ClampedArrayPrototype%":[`Uint8ClampedArray`,`prototype`],"%Uint16ArrayPrototype%":[`Uint16Array`,`prototype`],"%Uint32ArrayPrototype%":[`Uint32Array`,`prototype`],"%URIErrorPrototype%":[`URIError`,`prototype`],"%WeakMapPrototype%":[`WeakMap`,`prototype`],"%WeakSetPrototype%":[`WeakSet`,`prototype`]},oe=mf(),se=Sf(),ce=oe.call(te,Array.prototype.concat),le=oe.call(D,Array.prototype.splice),ue=oe.call(te,String.prototype.replace),de=oe.call(te,String.prototype.slice),k=oe.call(te,RegExp.prototype.exec),fe=/[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g,pe=/\\(\\)?/g,me=function(e){var t=de(e,0,1),n=de(e,-1);if(t===`%`&&n!==`%`)throw new c("invalid intrinsic syntax, expected closing `%`");if(n===`%`&&t!==`%`)throw new c("invalid intrinsic syntax, expected opening `%`");var r=[];return ue(e,fe,function(e,t,n,i){r[r.length]=n?ue(i,pe,`$1`):t||e}),r},he=function(e,t){var n=e,r;if(se(ae,n)&&(r=ae[n],n=`%`+r[0]+`%`),se(re,n)){var i=re[n];if(i===ne&&(i=ie(n)),i===void 0&&!t)throw new l(`intrinsic `+e+` exists, but is not available. Please file an issue!`);return{alias:r,name:n,value:i}}throw new c(`intrinsic `+e+` does not exist!`)};t.exports=function(e,t){if(typeof e!=`string`||e.length===0)throw new l(`intrinsic name must be a non-empty string`);if(arguments.length>1&&typeof t!=`boolean`)throw new l(`"allowMissing" argument must be a boolean`);if(k(/^%?[^%]*%?$/,e)===null)throw new c("`%` may not be present anywhere but at the beginning and end of the intrinsic name");var n=me(e),r=n.length>0?n[0]:``,i=he(`%`+r+`%`,t),a=i.name,o=i.value,s=!1,u=i.alias;u&&(r=u[0],le(n,ce([0,1],u)));for(var d=1,f=!0;d<n.length;d+=1){var p=n[d],m=de(p,0,1),h=de(p,-1);if((m===`"`||m===`'`||m==="`"||h===`"`||h===`'`||h==="`")&&m!==h)throw new c(`property names with quotes must have matching quotes`);if((p===`constructor`||!f)&&(s=!0),r+=`.`+p,a=`%`+r+`%`,se(re,a))o=re[a];else if(o!=null){if(!(p in o)){if(!t)throw new l(`base intrinsic for `+e+` exists, but the property is not available.`);return}if(b&&d+1>=n.length){var g=b(o,p);f=!!g,o=f&&`get`in g&&!(`originalValue`in g.get)?g.get:o[p]}else f=se(o,p),o=o[p];f&&!s&&(re[a]=o)}}return o}})),wf=a(((e,t)=>{var n=Cf(),r=yf(),i=r([n(`%String.prototype.indexOf%`)]);t.exports=function(e,t){var a=n(e,!!t);return typeof a==`function`&&i(e,`.prototype.`)>-1?r([a]):a}})),Tf=a(((e,t)=>{var n=Cf(),r=wf(),i=Hd(),a=Bd(),o=n(`%Map%`,!0),s=r(`Map.prototype.get`,!0),c=r(`Map.prototype.set`,!0),l=r(`Map.prototype.has`,!0),u=r(`Map.prototype.delete`,!0),d=r(`Map.prototype.size`,!0);t.exports=!!o&&function(){var e,t={assert:function(e){if(!t.has(e))throw new a(`Side channel does not contain `+i(e))},delete:function(t){if(e){var n=u(e,t);return d(e)===0&&(e=void 0),n}return!1},get:function(t){if(e)return s(e,t)},has:function(t){return e?l(e,t):!1},set:function(t,n){e||=new o,c(e,t,n)}};return t}})),Ef=a(((e,t)=>{var n=Cf(),r=wf(),i=Hd(),a=Tf(),o=Bd(),s=n(`%WeakMap%`,!0),c=r(`WeakMap.prototype.get`,!0),l=r(`WeakMap.prototype.set`,!0),u=r(`WeakMap.prototype.has`,!0),d=r(`WeakMap.prototype.delete`,!0);t.exports=s?function(){var e,t,n={assert:function(e){if(!n.has(e))throw new o(`Side channel does not contain `+i(e))},delete:function(n){if(s&&n&&(typeof n==`object`||typeof n==`function`)){if(e)return d(e,n)}else if(a&&t)return t.delete(n);return!1},get:function(n){return s&&n&&(typeof n==`object`||typeof n==`function`)&&e?c(e,n):t&&t.get(n)},has:function(n){return s&&n&&(typeof n==`object`||typeof n==`function`)&&e?u(e,n):!!t&&t.has(n)},set:function(n,r){s&&n&&(typeof n==`object`||typeof n==`function`)?(e||=new s,l(e,n,r)):a&&(t||=a(),t.set(n,r))}};return n}:a})),Df=a(((e,t)=>{var n=Bd(),r=Hd(),i=Ud(),a=Tf(),o=Ef()||a||i;t.exports=function(){var e,t={assert:function(e){if(!t.has(e))throw new n(`Side channel does not contain `+r(e))},delete:function(t){return!!e&&e.delete(t)},get:function(t){return e&&e.get(t)},has:function(t){return!!e&&e.has(t)},set:function(t,n){e||=o(),e.set(t,n)}};return t}})),Of=a(((e,t)=>{var n=String.prototype.replace,r=/%20/g,i={RFC1738:`RFC1738`,RFC3986:`RFC3986`};t.exports={default:i.RFC3986,formatters:{RFC1738:function(e){return n.call(e,r,`+`)},RFC3986:function(e){return String(e)}},RFC1738:i.RFC1738,RFC3986:i.RFC3986}})),kf=a(((e,t)=>{var n=Of(),r=Df(),i=Object.prototype.hasOwnProperty,a=Array.isArray,o=r(),s=function(e,t){return o.set(e,t),e},c=function(e){return o.has(e)},l=function(e){return o.get(e)},u=function(e,t){o.set(e,t)},d=function(){for(var e=[],t=0;t<256;++t)e[e.length]=`%`+((t<16?`0`:``)+t.toString(16)).toUpperCase();return e}(),f=function(e){for(;e.length>1;){var t=e.pop(),n=t.obj[t.prop];if(a(n)){for(var r=[],i=0;i<n.length;++i)n[i]!==void 0&&(r[r.length]=n[i]);t.obj[t.prop]=r}}},p=function(e,t){for(var n=t&&t.plainObjects?{__proto__:null}:{},r=0;r<e.length;++r)e[r]!==void 0&&(n[r]=e[r]);return n},m=function e(t,n,r){if(!n)return t;if(typeof n!=`object`&&typeof n!=`function`){if(a(t)){var o=t.length;if(r&&typeof r.arrayLimit==`number`&&o>r.arrayLimit)return s(p(t.concat(n),r),o);t[o]=n}else if(t&&typeof t==`object`)if(c(t)){var d=l(t)+1;t[d]=n,u(t,d)}else if(r&&r.strictMerge)return[t,n];else (r&&(r.plainObjects||r.allowPrototypes)||!i.call(Object.prototype,n))&&(t[n]=!0);else return[t,n];return t}if(!t||typeof t!=`object`){if(c(n)){for(var f=Object.keys(n),m=r&&r.plainObjects?{__proto__:null,0:t}:{0:t},h=0;h<f.length;h++){var g=parseInt(f[h],10);m[g+1]=n[f[h]]}return s(m,l(n)+1)}var _=[t].concat(n);return r&&typeof r.arrayLimit==`number`&&_.length>r.arrayLimit?s(p(_,r),_.length-1):_}var v=t;return a(t)&&!a(n)&&(v=p(t,r)),a(t)&&a(n)?(n.forEach(function(n,a){if(i.call(t,a)){var o=t[a];o&&typeof o==`object`&&n&&typeof n==`object`?t[a]=e(o,n,r):t[t.length]=n}else t[a]=n}),t):Object.keys(n).reduce(function(t,a){var o=n[a];if(i.call(t,a)?t[a]=e(t[a],o,r):t[a]=o,c(n)&&!c(t)&&s(t,l(n)),c(t)){var d=parseInt(a,10);String(d)===a&&d>=0&&d>l(t)&&u(t,d)}return t},v)},h=function(e,t){return Object.keys(t).reduce(function(e,n){return e[n]=t[n],e},e)},g=function(e,t,n){var r=e.replace(/\+/g,` `);if(n===`iso-8859-1`)return r.replace(/%[0-9a-f]{2}/gi,unescape);try{return decodeURIComponent(r)}catch{return r}},_=1024;t.exports={arrayToObject:p,assign:h,combine:function(e,t,n,r){if(c(e)){var i=l(e)+1;return e[i]=t,u(e,i),e}var a=[].concat(e,t);return a.length>n?s(p(a,{plainObjects:r}),a.length-1):a},compact:function(e){for(var t=[{obj:{o:e},prop:`o`}],n=[],r=0;r<t.length;++r)for(var i=t[r],a=i.obj[i.prop],o=Object.keys(a),s=0;s<o.length;++s){var c=o[s],l=a[c];typeof l==`object`&&l&&n.indexOf(l)===-1&&(t[t.length]={obj:a,prop:c},n[n.length]=l)}return f(t),e},decode:g,encode:function(e,t,r,i,a){if(e.length===0)return e;var o=e;if(typeof e==`symbol`?o=Symbol.prototype.toString.call(e):typeof e!=`string`&&(o=String(e)),r===`iso-8859-1`)return escape(o).replace(/%u[0-9a-f]{4}/gi,function(e){return`%26%23`+parseInt(e.slice(2),16)+`%3B`});for(var s=``,c=0;c<o.length;c+=_){for(var l=o.length>=_?o.slice(c,c+_):o,u=[],f=0;f<l.length;++f){var p=l.charCodeAt(f);if(p===45||p===46||p===95||p===126||p>=48&&p<=57||p>=65&&p<=90||p>=97&&p<=122||a===n.RFC1738&&(p===40||p===41)){u[u.length]=l.charAt(f);continue}if(p<128){u[u.length]=d[p];continue}if(p<2048){u[u.length]=d[192|p>>6]+d[128|p&63];continue}if(p<55296||p>=57344){u[u.length]=d[224|p>>12]+d[128|p>>6&63]+d[128|p&63];continue}f+=1,p=65536+((p&1023)<<10|l.charCodeAt(f)&1023),u[u.length]=d[240|p>>18]+d[128|p>>12&63]+d[128|p>>6&63]+d[128|p&63]}s+=u.join(``)}return s},isBuffer:function(e){return!e||typeof e!=`object`?!1:!!(e.constructor&&e.constructor.isBuffer&&e.constructor.isBuffer(e))},isOverflow:c,isRegExp:function(e){return Object.prototype.toString.call(e)===`[object RegExp]`},markOverflow:s,maybeMap:function(e,t){if(a(e)){for(var n=[],r=0;r<e.length;r+=1)n[n.length]=t(e[r]);return n}return t(e)},merge:m}})),Af=a(((e,t)=>{var n=Df(),r=kf(),i=Of(),a=Object.prototype.hasOwnProperty,o={brackets:function(e){return e+`[]`},comma:`comma`,indices:function(e,t){return e+`[`+t+`]`},repeat:function(e){return e}},s=Array.isArray,c=Array.prototype.push,l=function(e,t){c.apply(e,s(t)?t:[t])},u=Date.prototype.toISOString,d=i.default,f={addQueryPrefix:!1,allowDots:!1,allowEmptyArrays:!1,arrayFormat:`indices`,charset:`utf-8`,charsetSentinel:!1,commaRoundTrip:!1,delimiter:`&`,encode:!0,encodeDotInKeys:!1,encoder:r.encode,encodeValuesOnly:!1,filter:void 0,format:d,formatter:i.formatters[d],indices:!1,serializeDate:function(e){return u.call(e)},skipNulls:!1,strictNullHandling:!1},p=function(e){return typeof e==`string`||typeof e==`number`||typeof e==`boolean`||typeof e==`symbol`||typeof e==`bigint`},m={},h=function e(t,i,a,o,c,u,d,h,g,_,v,y,b,x,S,C,w,T){for(var E=t,ee=T,D=0,te=!1;(ee=ee.get(m))!==void 0&&!te;){var ne=ee.get(t);if(D+=1,ne!==void 0){if(ne===D)throw RangeError(`Cyclic object value`);te=!0}ee.get(m)===void 0&&(D=0)}if(typeof _==`function`?E=_(i,E):E instanceof Date?E=b(E):a===`comma`&&s(E)&&(E=r.maybeMap(E,function(e){return e instanceof Date?b(e):e})),E===null){if(u)return g&&!C?g(i,f.encoder,w,`key`,x):i;E=``}if(p(E)||r.isBuffer(E))return g?[S(C?i:g(i,f.encoder,w,`key`,x))+`=`+S(g(E,f.encoder,w,`value`,x))]:[S(i)+`=`+S(String(E))];var O=[];if(E===void 0)return O;var re;if(a===`comma`&&s(E))C&&g&&(E=r.maybeMap(E,g)),re=[{value:E.length>0?E.join(`,`)||null:void 0}];else if(s(_))re=_;else{var ie=Object.keys(E);re=v?ie.sort(v):ie}var ae=h?String(i).replace(/\./g,`%2E`):String(i),oe=o&&s(E)&&E.length===1?ae+`[]`:ae;if(c&&s(E)&&E.length===0)return oe+`[]`;for(var se=0;se<re.length;++se){var ce=re[se],le=typeof ce==`object`&&ce&&ce.value!==void 0?ce.value:E[ce];if(!(d&&le===null)){var ue=y&&h?String(ce).replace(/\./g,`%2E`):String(ce),de=s(E)?typeof a==`function`?a(oe,ue):oe:oe+(y?`.`+ue:`[`+ue+`]`);T.set(t,D);var k=n();k.set(m,T),l(O,e(le,de,a,o,c,u,d,h,a===`comma`&&C&&s(E)?null:g,_,v,y,b,x,S,C,w,k))}}return O},g=function(e){if(!e)return f;if(e.allowEmptyArrays!==void 0&&typeof e.allowEmptyArrays!=`boolean`)throw TypeError("`allowEmptyArrays` option can only be `true` or `false`, when provided");if(e.encodeDotInKeys!==void 0&&typeof e.encodeDotInKeys!=`boolean`)throw TypeError("`encodeDotInKeys` option can only be `true` or `false`, when provided");if(e.encoder!==null&&e.encoder!==void 0&&typeof e.encoder!=`function`)throw TypeError(`Encoder has to be a function.`);var t=e.charset||f.charset;if(e.charset!==void 0&&e.charset!==`utf-8`&&e.charset!==`iso-8859-1`)throw TypeError(`The charset option must be either utf-8, iso-8859-1, or undefined`);var n=i.default;if(e.format!==void 0){if(!a.call(i.formatters,e.format))throw TypeError(`Unknown format option provided.`);n=e.format}var r=i.formatters[n],c=f.filter;(typeof e.filter==`function`||s(e.filter))&&(c=e.filter);var l=e.arrayFormat in o?e.arrayFormat:`indices`in e?e.indices?`indices`:`repeat`:f.arrayFormat;if(`commaRoundTrip`in e&&typeof e.commaRoundTrip!=`boolean`)throw TypeError("`commaRoundTrip` must be a boolean, or absent");var u=e.allowDots===void 0?e.encodeDotInKeys===!0?!0:f.allowDots:!!e.allowDots;return{addQueryPrefix:typeof e.addQueryPrefix==`boolean`?e.addQueryPrefix:f.addQueryPrefix,allowDots:u,allowEmptyArrays:typeof e.allowEmptyArrays==`boolean`?!!e.allowEmptyArrays:f.allowEmptyArrays,arrayFormat:l,charset:t,charsetSentinel:typeof e.charsetSentinel==`boolean`?e.charsetSentinel:f.charsetSentinel,commaRoundTrip:!!e.commaRoundTrip,delimiter:e.delimiter===void 0?f.delimiter:e.delimiter,encode:typeof e.encode==`boolean`?e.encode:f.encode,encodeDotInKeys:typeof e.encodeDotInKeys==`boolean`?e.encodeDotInKeys:f.encodeDotInKeys,encoder:typeof e.encoder==`function`?e.encoder:f.encoder,encodeValuesOnly:typeof e.encodeValuesOnly==`boolean`?e.encodeValuesOnly:f.encodeValuesOnly,filter:c,format:n,formatter:r,serializeDate:typeof e.serializeDate==`function`?e.serializeDate:f.serializeDate,skipNulls:typeof e.skipNulls==`boolean`?e.skipNulls:f.skipNulls,sort:typeof e.sort==`function`?e.sort:null,strictNullHandling:typeof e.strictNullHandling==`boolean`?e.strictNullHandling:f.strictNullHandling}};t.exports=function(e,t){var r=e,i=g(t),a,c;typeof i.filter==`function`?(c=i.filter,r=c(``,r)):s(i.filter)&&(c=i.filter,a=c);var u=[];if(typeof r!=`object`||!r)return``;var d=o[i.arrayFormat],f=d===`comma`&&i.commaRoundTrip;a||=Object.keys(r),i.sort&&a.sort(i.sort);for(var p=n(),m=0;m<a.length;++m){var _=a[m],v=r[_];i.skipNulls&&v===null||l(u,h(v,_,d,f,i.allowEmptyArrays,i.strictNullHandling,i.skipNulls,i.encodeDotInKeys,i.encode?i.encoder:null,i.filter,i.sort,i.allowDots,i.serializeDate,i.format,i.formatter,i.encodeValuesOnly,i.charset,p))}var y=u.join(i.delimiter),b=i.addQueryPrefix===!0?`?`:``;return i.charsetSentinel&&(i.charset===`iso-8859-1`?b+=`utf8=%26%2310003%3B&`:b+=`utf8=%E2%9C%93&`),y.length>0?b+y:``}})),jf=a(((e,t)=>{var n=kf(),r=Object.prototype.hasOwnProperty,i=Array.isArray,a={allowDots:!1,allowEmptyArrays:!1,allowPrototypes:!1,allowSparse:!1,arrayLimit:20,charset:`utf-8`,charsetSentinel:!1,comma:!1,decodeDotInKeys:!1,decoder:n.decode,delimiter:`&`,depth:5,duplicates:`combine`,ignoreQueryPrefix:!1,interpretNumericEntities:!1,parameterLimit:1e3,parseArrays:!0,plainObjects:!1,strictDepth:!1,strictMerge:!0,strictNullHandling:!1,throwOnLimitExceeded:!1},o=function(e){return e.replace(/&#(\d+);/g,function(e,t){return String.fromCharCode(parseInt(t,10))})},s=function(e,t,n){if(e&&typeof e==`string`&&t.comma&&e.indexOf(`,`)>-1)return e.split(`,`);if(t.throwOnLimitExceeded&&n>=t.arrayLimit)throw RangeError(`Array limit exceeded. Only `+t.arrayLimit+` element`+(t.arrayLimit===1?``:`s`)+` allowed in an array.`);return e},c=`utf8=%26%2310003%3B`,l=`utf8=%E2%9C%93`,u=function(e,t){var u={__proto__:null},d=t.ignoreQueryPrefix?e.replace(/^\?/,``):e;d=d.replace(/%5B/gi,`[`).replace(/%5D/gi,`]`);var f=t.parameterLimit===1/0?void 0:t.parameterLimit,p=d.split(t.delimiter,t.throwOnLimitExceeded&&f!==void 0?f+1:f);if(t.throwOnLimitExceeded&&f!==void 0&&p.length>f)throw RangeError(`Parameter limit exceeded. Only `+f+` parameter`+(f===1?``:`s`)+` allowed.`);var m=-1,h,g=t.charset;if(t.charsetSentinel)for(h=0;h<p.length;++h)p[h].indexOf(`utf8=`)===0&&(p[h]===l?g=`utf-8`:p[h]===c&&(g=`iso-8859-1`),m=h,h=p.length);for(h=0;h<p.length;++h)if(h!==m){var _=p[h],v=_.indexOf(`]=`),y=v===-1?_.indexOf(`=`):v+1,b,x;if(y===-1?(b=t.decoder(_,a.decoder,g,`key`),x=t.strictNullHandling?null:``):(b=t.decoder(_.slice(0,y),a.decoder,g,`key`),b!==null&&(x=n.maybeMap(s(_.slice(y+1),t,i(u[b])?u[b].length:0),function(e){return t.decoder(e,a.decoder,g,`value`)}))),x&&t.interpretNumericEntities&&g===`iso-8859-1`&&(x=o(String(x))),_.indexOf(`[]=`)>-1&&(x=i(x)?[x]:x),t.comma&&i(x)&&x.length>t.arrayLimit){if(t.throwOnLimitExceeded)throw RangeError(`Array limit exceeded. Only `+t.arrayLimit+` element`+(t.arrayLimit===1?``:`s`)+` allowed in an array.`);x=n.combine([],x,t.arrayLimit,t.plainObjects)}if(b!==null){var S=r.call(u,b);S&&(t.duplicates===`combine`||_.indexOf(`[]=`)>-1)?u[b]=n.combine(u[b],x,t.arrayLimit,t.plainObjects):(!S||t.duplicates===`last`)&&(u[b]=x)}}return u},d=function(e,t,r,i){var a=0;if(e.length>0&&e[e.length-1]===`[]`){var o=e.slice(0,-1).join(``);a=Array.isArray(t)&&t[o]?t[o].length:0}for(var c=i?t:s(t,r,a),l=e.length-1;l>=0;--l){var u,d=e[l];if(d===`[]`&&r.parseArrays)u=n.isOverflow(c)?c:r.allowEmptyArrays&&(c===``||r.strictNullHandling&&c===null)?[]:n.combine([],c,r.arrayLimit,r.plainObjects);else{u=r.plainObjects?{__proto__:null}:{};var f=d.charAt(0)===`[`&&d.charAt(d.length-1)===`]`?d.slice(1,-1):d,p=r.decodeDotInKeys?f.replace(/%2E/g,`.`):f,m=parseInt(p,10),h=!isNaN(m)&&d!==p&&String(m)===p&&m>=0&&r.parseArrays;if(!r.parseArrays&&p===``)u={0:c};else if(h&&m<r.arrayLimit)u=[],u[m]=c;else if(h&&r.throwOnLimitExceeded)throw RangeError(`Array limit exceeded. Only `+r.arrayLimit+` element`+(r.arrayLimit===1?``:`s`)+` allowed in an array.`);else h?(u[m]=c,n.markOverflow(u,m)):p!==`__proto__`&&(u[p]=c)}c=u}return c},f=function(e,t){var n=t.allowDots?e.replace(/\.([^.[]+)/g,`[$1]`):e;if(t.depth<=0)return!t.plainObjects&&r.call(Object.prototype,n)&&!t.allowPrototypes?void 0:[n];var i=/(\[[^[\]]*])/,a=/(\[[^[\]]*])/g,o=i.exec(n),s=o?n.slice(0,o.index):n,c=[];if(s){if(!t.plainObjects&&r.call(Object.prototype,s)&&!t.allowPrototypes)return;c[c.length]=s}for(var l=0;(o=a.exec(n))!==null&&l<t.depth;){l+=1;var u=o[1].slice(1,-1);if(!t.plainObjects&&r.call(Object.prototype,u)&&!t.allowPrototypes)return;c[c.length]=o[1]}if(o){if(t.strictDepth===!0)throw RangeError(`Input depth exceeded depth option of `+t.depth+` and strictDepth is true`);c[c.length]=`[`+n.slice(o.index)+`]`}return c},p=function(e,t,n,r){if(e){var i=f(e,n);if(i)return d(i,t,n,r)}},m=function(e){if(!e)return a;if(e.allowEmptyArrays!==void 0&&typeof e.allowEmptyArrays!=`boolean`)throw TypeError("`allowEmptyArrays` option can only be `true` or `false`, when provided");if(e.decodeDotInKeys!==void 0&&typeof e.decodeDotInKeys!=`boolean`)throw TypeError("`decodeDotInKeys` option can only be `true` or `false`, when provided");if(e.decoder!==null&&e.decoder!==void 0&&typeof e.decoder!=`function`)throw TypeError(`Decoder has to be a function.`);if(e.charset!==void 0&&e.charset!==`utf-8`&&e.charset!==`iso-8859-1`)throw TypeError(`The charset option must be either utf-8, iso-8859-1, or undefined`);if(e.throwOnLimitExceeded!==void 0&&typeof e.throwOnLimitExceeded!=`boolean`)throw TypeError("`throwOnLimitExceeded` option must be a boolean");var t=e.charset===void 0?a.charset:e.charset,r=e.duplicates===void 0?a.duplicates:e.duplicates;if(r!==`combine`&&r!==`first`&&r!==`last`)throw TypeError(`The duplicates option must be either combine, first, or last`);return{allowDots:e.allowDots===void 0?e.decodeDotInKeys===!0?!0:a.allowDots:!!e.allowDots,allowEmptyArrays:typeof e.allowEmptyArrays==`boolean`?!!e.allowEmptyArrays:a.allowEmptyArrays,allowPrototypes:typeof e.allowPrototypes==`boolean`?e.allowPrototypes:a.allowPrototypes,allowSparse:typeof e.allowSparse==`boolean`?e.allowSparse:a.allowSparse,arrayLimit:typeof e.arrayLimit==`number`?e.arrayLimit:a.arrayLimit,charset:t,charsetSentinel:typeof e.charsetSentinel==`boolean`?e.charsetSentinel:a.charsetSentinel,comma:typeof e.comma==`boolean`?e.comma:a.comma,decodeDotInKeys:typeof e.decodeDotInKeys==`boolean`?e.decodeDotInKeys:a.decodeDotInKeys,decoder:typeof e.decoder==`function`?e.decoder:a.decoder,delimiter:typeof e.delimiter==`string`||n.isRegExp(e.delimiter)?e.delimiter:a.delimiter,depth:typeof e.depth==`number`||e.depth===!1?+e.depth:a.depth,duplicates:r,ignoreQueryPrefix:e.ignoreQueryPrefix===!0,interpretNumericEntities:typeof e.interpretNumericEntities==`boolean`?e.interpretNumericEntities:a.interpretNumericEntities,parameterLimit:typeof e.parameterLimit==`number`?e.parameterLimit:a.parameterLimit,parseArrays:e.parseArrays!==!1,plainObjects:typeof e.plainObjects==`boolean`?e.plainObjects:a.plainObjects,strictDepth:typeof e.strictDepth==`boolean`?!!e.strictDepth:a.strictDepth,strictMerge:typeof e.strictMerge==`boolean`?!!e.strictMerge:a.strictMerge,strictNullHandling:typeof e.strictNullHandling==`boolean`?e.strictNullHandling:a.strictNullHandling,throwOnLimitExceeded:typeof e.throwOnLimitExceeded==`boolean`?e.throwOnLimitExceeded:!1}};t.exports=function(e,t){var r=m(t);if(e===``||e==null)return r.plainObjects?{__proto__:null}:{};for(var i=typeof e==`string`?u(e,r):e,a=r.plainObjects?{__proto__:null}:{},o=Object.keys(i),s=0;s<o.length;++s){var c=o[s],l=p(c,i[c],r,typeof e==`string`);a=n.merge(a,l,r)}return r.allowSparse===!0?a:n.compact(a)}})),Mf=a(((e,t)=>{var n=Af(),r=jf();t.exports={formats:Of(),parse:r,stringify:n}})),Nf=a(((e,t)=>{(function(n,r){typeof e==`object`&&t!==void 0?t.exports=r():typeof define==`function`&&define.amd?define(r):(function(){var e=n.Base64,t=r();t.noConflict=function(){return n.Base64=e,t},n.Meteor&&(Base64=t),n.Base64=t})()})(typeof self<`u`?self:typeof window<`u`?window:typeof global<`u`?global:e,function(){"use strict";var e=`3.7.8`,t=e,n=typeof Buffer==`function`,r=typeof TextDecoder==`function`?new TextDecoder:void 0,i=typeof TextEncoder==`function`?new TextEncoder:void 0,a=Array.prototype.slice.call(`ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=`),o=(function(e){var t={};return e.forEach(function(e,n){return t[e]=n}),t})(a),s=/^(?:[A-Za-z\d+\/]{4})*?(?:[A-Za-z\d+\/]{2}(?:==)?|[A-Za-z\d+\/]{3}=?)?$/,c=String.fromCharCode.bind(String),l=typeof Uint8Array.from==`function`?Uint8Array.from.bind(Uint8Array):function(e){return new Uint8Array(Array.prototype.slice.call(e,0))},u=function(e){return e.replace(/=/g,``).replace(/[+\/]/g,function(e){return e==`+`?`-`:`_`})},d=function(e){return e.replace(/[^A-Za-z0-9\+\/]/g,``)},f=function(e){for(var t,n,r,i,o=``,s=e.length%3,c=0;c<e.length;){if((n=e.charCodeAt(c++))>255||(r=e.charCodeAt(c++))>255||(i=e.charCodeAt(c++))>255)throw TypeError(`invalid character found`);t=n<<16|r<<8|i,o+=a[t>>18&63]+a[t>>12&63]+a[t>>6&63]+a[t&63]}return s?o.slice(0,s-3)+`===`.substring(s):o},p=typeof btoa==`function`?function(e){return btoa(e)}:n?function(e){return Buffer.from(e,`binary`).toString(`base64`)}:f,m=n?function(e){return Buffer.from(e).toString(`base64`)}:function(e){for(var t=4096,n=[],r=0,i=e.length;r<i;r+=t)n.push(c.apply(null,e.subarray(r,r+t)));return p(n.join(``))},h=function(e,t){return t===void 0&&(t=!1),t?u(m(e)):m(e)},g=function(e){if(e.length<2){var t=e.charCodeAt(0);return t<128?e:t<2048?c(192|t>>>6)+c(128|t&63):c(224|t>>>12&15)+c(128|t>>>6&63)+c(128|t&63)}else{var t=65536+(e.charCodeAt(0)-55296)*1024+(e.charCodeAt(1)-56320);return c(240|t>>>18&7)+c(128|t>>>12&63)+c(128|t>>>6&63)+c(128|t&63)}},_=/[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g,v=function(e){return e.replace(_,g)},y=n?function(e){return Buffer.from(e,`utf8`).toString(`base64`)}:i?function(e){return m(i.encode(e))}:function(e){return p(v(e))},b=function(e,t){return t===void 0&&(t=!1),t?u(y(e)):y(e)},x=function(e){return b(e,!0)},S=/[\xC0-\xDF][\x80-\xBF]|[\xE0-\xEF][\x80-\xBF]{2}|[\xF0-\xF7][\x80-\xBF]{3}/g,C=function(e){switch(e.length){case 4:var t=((7&e.charCodeAt(0))<<18|(63&e.charCodeAt(1))<<12|(63&e.charCodeAt(2))<<6|63&e.charCodeAt(3))-65536;return c((t>>>10)+55296)+c((t&1023)+56320);case 3:return c((15&e.charCodeAt(0))<<12|(63&e.charCodeAt(1))<<6|63&e.charCodeAt(2));default:return c((31&e.charCodeAt(0))<<6|63&e.charCodeAt(1))}},w=function(e){return e.replace(S,C)},T=function(e){if(e=e.replace(/\s+/g,``),!s.test(e))throw TypeError(`malformed base64.`);e+=`==`.slice(2-(e.length&3));for(var t,n,r,i=[],a=0;a<e.length;)t=o[e.charAt(a++)]<<18|o[e.charAt(a++)]<<12|(n=o[e.charAt(a++)])<<6|(r=o[e.charAt(a++)]),n===64?i.push(c(t>>16&255)):r===64?i.push(c(t>>16&255,t>>8&255)):i.push(c(t>>16&255,t>>8&255,t&255));return i.join(``)},E=typeof atob==`function`?function(e){return atob(d(e))}:n?function(e){return Buffer.from(e,`base64`).toString(`binary`)}:T,ee=n?function(e){return l(Buffer.from(e,`base64`))}:function(e){return l(E(e).split(``).map(function(e){return e.charCodeAt(0)}))},D=function(e){return ee(ne(e))},te=n?function(e){return Buffer.from(e,`base64`).toString(`utf8`)}:r?function(e){return r.decode(ee(e))}:function(e){return w(E(e))},ne=function(e){return d(e.replace(/[-_]/g,function(e){return e==`-`?`+`:`/`}))},O=function(e){return te(ne(e))},re=function(e){if(typeof e!=`string`)return!1;var t=e.replace(/\s+/g,``).replace(/={0,2}$/,``);return!/[^\s0-9a-zA-Z\+/]/.test(t)||!/[^\s0-9a-zA-Z\-_]/.test(t)},ie=function(e){return{value:e,enumerable:!1,writable:!0,configurable:!0}},ae=function(){var e=function(e,t){return Object.defineProperty(String.prototype,e,ie(t))};e(`fromBase64`,function(){return O(this)}),e(`toBase64`,function(e){return b(this,e)}),e(`toBase64URI`,function(){return b(this,!0)}),e(`toBase64URL`,function(){return b(this,!0)}),e(`toUint8Array`,function(){return D(this)})},oe=function(){var e=function(e,t){return Object.defineProperty(Uint8Array.prototype,e,ie(t))};e(`toBase64`,function(e){return h(this,e)}),e(`toBase64URI`,function(){return h(this,!0)}),e(`toBase64URL`,function(){return h(this,!0)})},se={version:e,VERSION:t,atob:E,atobPolyfill:T,btoa:p,btoaPolyfill:f,fromBase64:O,toBase64:b,encode:b,encodeURI:x,encodeURL:x,utob:v,btou:w,decode:O,isValid:re,fromUint8Array:h,toUint8Array:D,extendString:ae,extendUint8Array:oe,extendBuiltins:function(){ae(),oe()}};return se.Base64={},Object.keys(se).forEach(function(e){return se.Base64[e]=se[e]}),se})})),Pf=a((e=>{var t=e&&e.__assign||function(){return t=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n],t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},t.apply(this,arguments)},n=e&&e.__awaiter||function(e,t,n,r){function i(e){return e instanceof n?e:new n(function(t){t(e)})}return new(n||=Promise)(function(n,a){function o(e){try{c(r.next(e))}catch(e){a(e)}}function s(e){try{c(r.throw(e))}catch(e){a(e)}}function c(e){e.done?n(e.value):i(e.value).then(o,s)}c((r=r.apply(e,t||[])).next())})},r=e&&e.__generator||function(e,t){var n={label:0,sent:function(){if(a[0]&1)throw a[1];return a[1]},trys:[],ops:[]},r,i,a,o=Object.create((typeof Iterator==`function`?Iterator:Object).prototype);return o.next=s(0),o.throw=s(1),o.return=s(2),typeof Symbol==`function`&&(o[Symbol.iterator]=function(){return this}),o;function s(e){return function(t){return c([e,t])}}function c(s){if(r)throw TypeError(`Generator is already executing.`);for(;o&&(o=0,s[0]&&(n=0)),n;)try{if(r=1,i&&(a=s[0]&2?i.return:s[0]?i.throw||((a=i.return)&&a.call(i),0):i.next)&&!(a=a.call(i,s[1])).done)return a;switch(i=0,a&&(s=[s[0]&2,a.value]),s[0]){case 0:case 1:a=s;break;case 4:return n.label++,{value:s[1],done:!1};case 5:n.label++,i=s[1],s=[0];continue;case 7:s=n.ops.pop(),n.trys.pop();continue;default:if((a=n.trys,!(a=a.length>0&&a[a.length-1]))&&(s[0]===6||s[0]===2)){n=0;continue}if(s[0]===3&&(!a||s[1]>a[0]&&s[1]<a[3])){n.label=s[1];break}if(s[0]===6&&n.label<a[1]){n.label=a[1],a=s;break}if(a&&n.label<a[2]){n.label=a[2],n.ops.push(s);break}a[2]&&n.ops.pop(),n.trys.pop();continue}s=t.call(e,n)}catch(e){s=[6,e],i=0}finally{r=a=0}if(s[0]&5)throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}},i=e&&e.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(e,"__esModule",{value:!0}),e.KintoneRequestConfigBuilder=void 0;var a=i(Nd()),o=i(Mf()),s=Nf(),c=Yu(),l=`http`,u=4096;e.KintoneRequestConfigBuilder=function(){function e(e){if(this.baseUrl=e.baseUrl,this.auth=e.auth,this.headers=this.buildHeaders({basicAuth:e.basicAuth,userAgent:e.userAgent}),`httpsAgent`in e){if(`clientCertAuth`in e)throw Error(`Cannot specify clientCertAuth along with httpsAgent.`);this.httpsAgent=e.httpsAgent}else `clientCertAuth`in e&&(this.clientCertAuth=e.clientCertAuth);this.proxy=e.proxy,this.requestToken=null,this.socketTimeout=e.socketTimeout}return e.prototype.build=function(e,i,o,s){return n(this,void 0,void 0,function(){var n,l,d,f,p,m,h,d,g,_,v,y,b;return r(this,function(r){switch(r.label){case 0:switch(n=t(t(t({method:e,headers:this.headers,url:`${this.baseUrl}${i}`},s||{}),c.platformDeps.buildPlatformDependentConfig({httpsAgent:this.httpsAgent,clientCertAuth:this.clientCertAuth,socketTimeout:this.socketTimeout})),{proxy:this.buildProxyConfig(this.proxy)}),l=e,l){case`get`:return[3,1];case`post`:return[3,4];case`put`:return[3,8];case`delete`:return[3,10]}return[3,12];case 1:return d=this.buildRequestUrl(i,o),d.length>u?(f=[t({},n)],v={method:`post`,headers:t(t({},this.headers),{"X-HTTP-Method-Override":`GET`})},[4,this.buildData(o)]):[3,3];case 2:return[2,t.apply(void 0,f.concat([(v.data=r.sent(),v)]))];case 3:return[2,t(t({},n),{url:d})];case 4:return o instanceof a.default?[4,this.buildData(o)]:[3,6];case 5:return p=r.sent(),[2,t(t({},n),{headers:typeof p.getHeaders==`function`?t(t({},this.headers),p.getHeaders()):this.headers,data:p})];case 6:return m=[t({},n)],y={},[4,this.buildData(o)];case 7:return[2,t.apply(void 0,m.concat([(y.data=r.sent(),y)]))];case 8:return h=[t({},n)],b={},[4,this.buildData(o)];case 9:return[2,t.apply(void 0,h.concat([(b.data=r.sent(),b)]))];case 10:return g=this.buildRequestUrl,_=[i],[4,this.buildData(o)];case 11:return d=g.apply(this,_.concat([r.sent()])),[2,t(t({},n),{url:d})];case 12:throw Error(`${e} method is not supported`);case 13:return[2]}})})},e.prototype.buildProxyConfig=function(e){if(e!==void 0){if(e===!1)return!1;var t=e;return t.auth&&(t.auth.username.length===0||t.auth.password.length===0)&&(t.auth=void 0),t.protocol=t.protocol??l,t}},e.prototype.buildRequestUrl=function(e,t){return`${this.baseUrl}${e}?${o.default.stringify(t)}`},e.prototype.buildData=function(e){return n(this,void 0,void 0,function(){var n;return r(this,function(r){switch(r.label){case 0:return this.auth.type===`session`?[4,this.getRequestToken()]:[3,2];case 1:return n=r.sent(),e instanceof a.default?(e.append(`__REQUEST_TOKEN__`,n),[2,e]):[2,t({__REQUEST_TOKEN__:n},e)];case 2:return[2,e]}})})},e.prototype.buildHeaders=function(e){var n=e.basicAuth,r=e.userAgent,i=n?{Authorization:`Basic ${s.Base64.encode(`${n.username}:${n.password}`)}`}:{},a=c.platformDeps.buildHeaders({userAgent:r}),o=t(t({},a),i);switch(this.auth.type){case`password`:return t(t({},o),{"X-Cybozu-Authorization":s.Base64.encode(`${this.auth.username}:${this.auth.password}`)});case`apiToken`:var l=this.auth.apiToken;return Array.isArray(l)?t(t({},o),{"X-Cybozu-API-Token":l.join(`,`)}):t(t({},o),{"X-Cybozu-API-Token":l});case`oAuthToken`:return t(t({},o),{Authorization:`Bearer ${this.auth.oAuthToken}`});default:return t(t({},o),{"X-Requested-With":`XMLHttpRequest`})}},e.prototype.getRequestToken=function(){return n(this,void 0,void 0,function(){var e;return r(this,function(t){switch(t.label){case 0:return this.requestToken===null?(e=this,[4,c.platformDeps.getRequestToken()]):[3,2];case 1:e.requestToken=t.sent(),t.label=2;case 2:return[2,this.requestToken]}})})},e}()})),Ff=a((e=>{var t=e&&e.__assign||function(){return t=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n],t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},t.apply(this,arguments)},n=e&&e.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols==`function`)for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n};Object.defineProperty(e,"__esModule",{value:!0}),e.KintoneResponseHandler=void 0;var r=Ad();e.KintoneResponseHandler=function(){function e(e){var t=e.enableAbortSearchError;this.enableAbortSearchError=t}return e.prototype.handle=function(e){var t=this;return e.then(function(e){return t.handleSuccessResponse(e)},function(e){return t.handleErrorResponse(e)})},e.prototype.handleSuccessResponse=function(e){if(this.enableAbortSearchError&&/Filter aborted because of too many search results/.test(e.headers[`x-cybozu-warning`]))throw new r.KintoneAbortSearchError(e.headers[`x-cybozu-warning`]);return e.data},e.prototype.handleErrorResponse=function(e){if(!e.response)throw/mac verify failure/.test(e.toString())?Error(`invalid clientCertAuth setting`):e;var i=e.response,a=i.data,o=n(i,[`data`]);throw typeof a==`string`?Error(`${o.status}: ${o.statusText}`):new r.KintoneRestAPIError(t({data:a},o))},e}()})),If=a((e=>{var t=e&&e.__assign||function(){return t=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n],t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},t.apply(this,arguments)};Object.defineProperty(e,"__esModule",{value:!0}),e.KintoneRestAPIClient=void 0;var n=Td(),r=Ed(),i=jd(),a=Md(),o=Pd(),s=Fd(),c=Id(),l=zd(),u=Pf(),d=Ff(),f=Yu(),p=Xu(),m=function(e){if(`username`in e)return t({type:`password`},e);if(`apiToken`in e)return t({type:`apiToken`},e);if(`oAuthToken`in e)return t({type:`oAuthToken`},e);try{return f.platformDeps.getDefaultAuth()}catch(e){throw e instanceof p.UnsupportedPlatformError?Error(`session authentication is not supported in ${e.platform} environment.`):e}};e.KintoneRestAPIClient=function(){function e(e){e===void 0&&(e={}),h(e),this.baseUrl=f.platformDeps.buildBaseUrl(e.baseUrl).replace(/\/+$/,``);var p=m(e.auth??{}),g=new u.KintoneRequestConfigBuilder(t(t({},e),{baseUrl:this.baseUrl,auth:p})),_=new d.KintoneResponseHandler({enableAbortSearchError:e.featureFlags?.enableAbortSearchError??!1}),v=new l.DefaultHttpClient({responseHandler:_,requestConfigBuilder:g}),y=e.guestSpaceId;this.bulkRequest_=new n.BulkRequestClient(v,y),this.record=new i.RecordClient(v,this.bulkRequest_,y),this.app=new r.AppClient(v,y),this.space=new a.SpaceClient(v,y),this.file=new o.FileClient(v,y),this.plugin=new s.PluginClient(v),this.search_=new c.SearchClient(v,y)}return Object.defineProperty(e,"version",{get:function(){return f.platformDeps.getVersion()},enumerable:!1,configurable:!0}),e.prototype.getBaseUrl=function(){return this.baseUrl},e.prototype.search=function(e){return this.search_.search(e)},e.prototype.bulkRequest=function(e){return this.bulkRequest_.send(e)},e}();var h=function(e){g(e.baseUrl),_(e.guestSpaceId),v(e.socketTimeout)},g=function(e){if(e!==void 0){var t=new URL(e);if(t.hostname!==`localhost`&&t.protocol!==`https:`)throw Error(`The protocol of baseUrl must be "https".`)}},_=function(e){if(e===``||e===null)throw Error(`invalid guestSpaceId: got [${e}]`)},v=function(e){if(e!==void 0){var t=parseFloat(e.toString());if(isNaN(t)||t<0)throw Error(`Invalid socketTimeout. Must be a positive number.`)}}})),Lf=a((e=>{var t=e&&e.__createBinding||(Object.create?(function(e,t,n,r){r===void 0&&(r=n);var i=Object.getOwnPropertyDescriptor(t,n);(!i||(`get`in i?!t.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,i)}):(function(e,t,n,r){r===void 0&&(r=n),e[r]=t[n]})),n=e&&e.__setModuleDefault||(Object.create?(function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}):function(e,t){e.default=t}),r=e&&e.__importStar||(function(){var e=function(t){return e=Object.getOwnPropertyNames||function(e){var t=[];for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[t.length]=n);return t},e(t)};return function(r){if(r&&r.__esModule)return r;var i={};if(r!=null)for(var a=e(r),o=0;o<a.length;o++)a[o]!=="default"&&t(i,r,a[o]);return n(i,r),i}})(),i=e&&e.__exportStar||function(e,n){for(var r in e)r!=="default"&&!Object.prototype.hasOwnProperty.call(n,r)&&t(n,e,r)};Object.defineProperty(e,"__esModule",{value:!0}),e.KintoneRestAPIClient=void 0;var a=Yu(),o=r(Sd());(0,a.injectPlatformDeps)(o);var s=If();Object.defineProperty(e,"KintoneRestAPIClient",{enumerable:!0,get:function(){return s.KintoneRestAPIClient}}),i(Ad(),e)}))(),Rf=new Lf.KintoneRestAPIClient;async function zf(e,t){let{records:n}=await Rf.record.getRecords({app:87,query:`appID = "${e}" and RecordID = "${t}" limit 1`});return n[0]??null}var Bf=new Lf.KintoneRestAPIClient;async function Vf(e,t,n){let{id:r}=await Bf.record.addRecord({app:87,record:{appID:{value:String(e)},RecordID:{value:String(t)},table:{value:[{value:n}]}}});return r}var Hf=new Lf.KintoneRestAPIClient;async function Uf(e,t,n){await Hf.record.updateRecord({app:87,id:e,record:{table:{value:[...t,{value:n}]}}})}async function Wf(e){return(await kintone.api(kintone.api.url(`/k/v1/record/comment.json`,!0),`POST`,e)).id}function Gf(e,t,n){let{title:r,options:i,deadline:a,mentions:o}=e,s=`abcdefghijklmnopqrstuvwxyz`,c=i.map((e,t)=>`${s[t].toUpperCase()}:${e}`).join(`;;;`)+`;;;`,l=i.map((e,t)=>`${s[t]}:0`).join(`,`),u=o.filter(e=>e.type===`USER`).map(({code:e})=>({code:e})),d=o.filter(e=>e.type===`GROUP`).map(({code:e})=>({code:e})),f=o.filter(e=>e.type===`ORGANIZATION`).map(({code:e})=>({code:e})),p=new Date().toISOString();return{commentID:{value:String(n)},title:{value:r},startTime:{value:p},endTime:{value:a},options:{value:c},votes:{value:l},users:{value:u},group:{value:d},org:{value:f},creator:{value:[{code:t.code}]},votedUsers:{value:[]}}}kintone.$PLUGIN_ID,kintone.events.on(`app.record.detail.show`,async()=>{let e=String(kintone.app.getId()),t=String(kintone.app.record.getId()),n=await zf(e,t);console.log(`repository record:`,n),new MutationObserver(()=>{let r=document.getElementById(`+oceanMention`);if(!r||document.getElementById(`questionnaire-create-btn`))return;let i=r.cloneNode(!0);i.id=`questionnaire-create-btn`,i.title=`アンケートを作成する`,i.querySelector(`.ocean-ui-editor-toolbar-mention-button`).textContent=`アンケート`,i.addEventListener(`click`,async()=>{let r=document.createElement(`div`),i=zr(Ju,{target:r,props:{appId:e,recordId:t}});await(await kintone.createDialog({title:`アンケートを作成`,body:r,okButtonText:`作成`,showCancelButton:!0,cancelButtonText:`キャンセル`,showCloseButton:!0,beforeClose:async r=>{if(r===`OK`){let r=i.getFormData(),a=Gf(r,kintone.getLoginUser(),await Wf({app:e,record:t,comment:{text:`アンケートが開始されました: ${r.title}`,mentions:r.mentions}}));n?await Uf(n.$id.value,n.table.value,a):await Vf(e,t,a)}}})).show()}),r.insertAdjacentElement(`afterend`,i)}).observe(document.body,{childList:!0,subtree:!0})})})();