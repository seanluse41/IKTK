(function(){var e=Array.isArray,t=Array.prototype.indexOf,n=Array.prototype.includes,r=Array.from,i=Object.defineProperty,a=Object.getOwnPropertyDescriptor,o=Object.prototype,s=Array.prototype,c=Object.getPrototypeOf,l=Object.isExtensible,u=()=>{};function d(e){for(var t=0;t<e.length;t++)e[t]()}function f(){var e,t;return{promise:new Promise((n,r)=>{e=n,t=r}),resolve:e,reject:t}}var p=1024,m=2048,h=4096,ee=8192,te=16384,ne=32768,re=1<<25,ie=65536,ae=1<<19,oe=1<<20,se=65536,ce=1<<21,le=1<<22,g=1<<23,ue=Symbol(`$state`),de=Symbol(`legacy props`),fe=Symbol(`attributes`),pe=Symbol(`class`),me=Symbol(`style`),he=Symbol(`text`),ge=new class extends Error{name=`StaleReactionError`;message="The reaction that called `getAbortSignal()` was re-run or destroyed"};globalThis.document?.contentType;function _e(e){throw Error(`https://svelte.dev/e/lifecycle_outside_component`)}function ve(){throw Error(`https://svelte.dev/e/async_derived_orphan`)}function ye(e){throw Error(`https://svelte.dev/e/effect_in_teardown`)}function be(){throw Error(`https://svelte.dev/e/effect_in_unowned_derived`)}function xe(e){throw Error(`https://svelte.dev/e/effect_orphan`)}function Se(){throw Error(`https://svelte.dev/e/effect_update_depth_exceeded`)}function Ce(e){throw Error(`https://svelte.dev/e/props_invalid_value`)}function we(){throw Error(`https://svelte.dev/e/state_descriptors_fixed`)}function Te(){throw Error(`https://svelte.dev/e/state_prototype_fixed`)}function Ee(){throw Error(`https://svelte.dev/e/state_unsafe_mutation`)}function De(){throw Error(`https://svelte.dev/e/svelte_boundary_reset_onerror`)}var Oe={},_=Symbol(`uninitialized`);function ke(){console.warn(`https://svelte.dev/e/derived_inert`)}function Ae(e){console.warn(`https://svelte.dev/e/hydration_mismatch`)}function je(){console.warn(`https://svelte.dev/e/svelte_boundary_reset_noop`)}var Me=!1,v;function Ne(e){if(e===null)throw Ae(),Oe;return v=e}function Pe(){return Ne(sn(v))}function Fe(e){if(Me){if(sn(v)!==null)throw Ae(),Oe;v=e}}function Ie(e=1){if(Me){for(var t=e,n=v;t--;)n=sn(n);v=n}}function Le(e=!0){for(var t=0,n=v;;){if(n.nodeType===8){var r=n.data;if(r===`]`){if(t===0)return n;--t}else (r===`[`||r===`[!`||r[0]===`[`&&!isNaN(Number(r.slice(1))))&&(t+=1)}var i=sn(n);e&&n.remove(),n=i}}function Re(e){return e===this.v}function ze(e,t){return e==e?e!==t||typeof e==`object`&&!!e||typeof e==`function`:t==t}function Be(e){return!ze(e,this.v)}var Ve=!1,He=!1,y=null;function Ue(e){y=e}function We(e,t=!1,n){y={p:y,i:!1,c:null,e:null,s:e,x:null,r:w,l:He&&!t?{s:null,u:null,$:[]}:null}}function Ge(e){var t=y,n=t.e;if(n!==null){t.e=null;for(var r of n)bn(r)}return e!==void 0&&(t.x=e),t.i=!0,y=t.p,e??{}}function Ke(){return!He||y!==null&&y.l===null}var qe=[];function Je(){var e=qe;qe=[],d(e)}function Ye(e){if(qe.length===0&&!Ot){var t=qe;queueMicrotask(()=>{t===qe&&Je()})}qe.push(e)}function Xe(e){var t=w;if(t===null)return C.f|=g,e;if(!(t.f&32768)&&!(t.f&4))throw e;Ze(e,t)}function Ze(e,t){if(!(t!==null&&t.f&16384)){for(;t!==null;){if(t.f&128){if(!(t.f&32768))throw e;try{t.b.error(e);return}catch(t){e=t}}t=t.parent}throw e}}var Qe=~(m|h|p);function b(e,t){e.f=e.f&Qe|t}function $e(e){e.f&512||e.deps===null?b(e,p):b(e,h)}function et(e){if(e!==null)for(let t of e)!(t.f&2)||!(t.f&65536)||(t.f^=se,et(t.deps))}function tt(e,t,n){e.f&2048?t.add(e):e.f&4096&&n.add(e),et(e.deps),b(e,p)}var nt=!1,rt=!1;function it(e){var t=rt;try{return rt=!1,[e(),rt]}finally{rt=t}}function at(e){let t=0,n=Kt(0),r;return()=>{_n()&&(T(n),wn(()=>(t===0&&(r=lr(()=>e(()=>Xt(n)))),t+=1,()=>{Ye(()=>{--t,t===0&&(r?.(),r=void 0,Xt(n))})})))}}var ot=ie|ae;function st(e,t,n,r){new ct(e,t,n,r)}var ct=class{parent;is_pending=!1;transform_error;#e;#t=Me?v:null;#n;#r;#i;#a=null;#o=null;#s=null;#c=null;#l=0;#u=0;#d=!1;#f=new Set;#p=new Set;#m=null;#h=at(()=>(this.#m=Kt(this.#l),()=>{this.#m=null}));constructor(e,t,n,r){this.#e=e,this.#n=t,this.#r=e=>{var t=w;t.b=this,t.f|=128,n(e)},this.parent=w.b,this.transform_error=r??this.parent?.transform_error??(e=>e),this.#i=En(()=>{if(Me){let e=this.#t;Pe();let t=e.data===`[!`;if(e.data.startsWith(`[?`)){let t=JSON.parse(e.data.slice(2));this.#_(t)}else t?this.#v():this.#g()}else this.#y()},ot),Me&&(this.#e=v)}#g(){try{this.#a=Dn(()=>this.#r(this.#e))}catch(e){this.error(e)}}#_(e){let t=this.#n.failed;t&&(this.#s=Dn(()=>{t(this.#e,()=>e,()=>()=>{})}))}#v(){let e=this.#n.pending;e&&(this.is_pending=!0,this.#o=Dn(()=>e(this.#e)),Ye(()=>{var e=this.#c=document.createDocumentFragment(),t=an();e.append(t),this.#a=this.#x(()=>Dn(()=>this.#r(t))),this.#u===0&&(this.#e.before(e),this.#c=null,Pn(this.#o,()=>{this.#o=null}),this.#b(x))}))}#y(){try{if(this.is_pending=this.has_pending_snippet(),this.#u=0,this.#l=0,this.#a=Dn(()=>{this.#r(this.#e)}),this.#u>0){var e=this.#c=document.createDocumentFragment();In(this.#a,e);let t=this.#n.pending;this.#o=Dn(()=>t(this.#e))}else this.#b(x)}catch(e){this.error(e)}}#b(e){this.is_pending=!1,e.transfer_effects(this.#f,this.#p)}defer_effect(e){tt(e,this.#f,this.#p)}is_rendered(){return!this.is_pending&&(!this.parent||this.parent.is_rendered())}has_pending_snippet(){return!!this.#n.pending}#x(e){var t=w,n=C,r=y;Un(this.#i),Hn(this.#i),Ue(this.#i.ctx);try{return Pt.ensure(),e()}catch(e){return Xe(e),null}finally{Un(t),Hn(n),Ue(r)}}#S(e,t){if(!this.has_pending_snippet()){this.parent&&this.parent.#S(e,t);return}this.#u+=e,this.#u===0&&(this.#b(t),this.#o&&Pn(this.#o,()=>{this.#o=null}),this.#c&&=(this.#e.before(this.#c),null))}update_pending_count(e,t){this.#S(e,t),this.#l+=e,!(!this.#m||this.#d)&&(this.#d=!0,Ye(()=>{this.#d=!1,this.#m&&Jt(this.#m,this.#l)}))}get_effect_pending(){return this.#h(),T(this.#m)}error(e){if(!this.#n.onerror&&!this.#n.failed)throw e;x?.is_fork?(this.#a&&x.skip_effect(this.#a),this.#o&&x.skip_effect(this.#o),this.#s&&x.skip_effect(this.#s),x.oncommit(()=>{this.#C(e)})):this.#C(e)}#C(e){this.#a&&=(jn(this.#a),null),this.#o&&=(jn(this.#o),null),this.#s&&=(jn(this.#s),null),Me&&(Ne(this.#t),Ie(),Ne(Le()));var t=this.#n.onerror;let n=this.#n.failed;var r=!1,i=!1;let a=()=>{if(r){je();return}r=!0,i&&De(),this.#s!==null&&Pn(this.#s,()=>{this.#s=null}),this.#x(()=>{this.#y()})},o=e=>{try{i=!0,t?.(e,a),i=!1}catch(e){Ze(e,this.#i&&this.#i.parent)}n&&(this.#s=this.#x(()=>{try{return Dn(()=>{var t=w;t.b=this,t.f|=128,n(this.#e,()=>e,()=>a)})}catch(e){return Ze(e,this.#i.parent),null}}))};Ye(()=>{var t;try{t=this.transform_error(e)}catch(e){Ze(e,this.#i&&this.#i.parent);return}typeof t==`object`&&t&&typeof t.then==`function`?t.then(o,e=>Ze(e,this.#i&&this.#i.parent)):o(t)})}};function lt(e,t,n,r){let i=Ke()?pt:_t;var a=e.filter(e=>!e.settled),o=t.map(i);if(n.length===0&&a.length===0){r(o);return}var s=w,c=ut(),l=a.length===1?a[0].promise:a.length>1?Promise.all(a.map(e=>e.promise)):null;function u(e){if(!(s.f&16384)){c();try{r([...o,...e])}catch(e){Ze(e,s)}dt()}}var d=ft();if(n.length===0){l.then(()=>u([])).finally(d);return}function f(){Promise.all(n.map(e=>ht(e))).then(u).catch(e=>Ze(e,s)).finally(d)}l?l.then(()=>{c(),f(),dt()}):f()}function ut(){var e=w,t=C,n=y,r=x;return function(i=!0){Un(e),Hn(t),Ue(n),i&&!(e.f&16384)&&(r?.activate(),r?.apply())}}function dt(e=!0){Un(null),Hn(null),Ue(null),e&&x?.deactivate()}function ft(){var e=w,t=e.b,n=x,r=!!t?.is_rendered();return t?.update_pending_count(1,n),n.increment(r,e),()=>{t?.update_pending_count(-1,n),n.decrement(r,e)}}function pt(e){var t=2|m;return w!==null&&(w.f|=ae),{ctx:y,deps:null,effects:null,equals:Re,f:t,fn:e,reactions:null,rv:0,v:_,wv:0,parent:w,ac:null}}var mt=Symbol(`obsolete`);function ht(e,t,n){let r=w;r===null&&ve();var i=void 0,a=Kt(_),o=!C,s=new Set;return Cn(()=>{var t=w,n=f();i=n.promise;try{Promise.resolve(e()).then(n.resolve,e=>{e!==ge&&n.reject(e)}).finally(dt)}catch(e){n.reject(e),dt()}var c=x;if(o){if(t.f&32768)var l=ft();if(r.b?.is_rendered())c.async_deriveds.get(t)?.reject(mt);else for(let e of s.values())e.reject(mt);s.add(n),c.async_deriveds.set(t,n)}let u=(e,t=void 0)=>{l?.(),s.delete(n),t!==mt&&(c.activate(),t?(a.f|=g,Jt(a,t)):(a.f&8388608&&(a.f^=g),Jt(a,e)),c.deactivate())};n.promise.then(u,e=>u(null,e||`unknown`))}),vn(()=>{for(let e of s)e.reject(mt)}),new Promise(e=>{function t(n){function r(){n===i?e(a):t(i)}n.then(r,r)}t(i)})}function gt(e){let t=pt(e);return Ve||Gn(t),t}function _t(e){let t=pt(e);return t.equals=Be,t}function vt(e){var t=e.effects;if(t!==null){e.effects=null;for(var n=0;n<t.length;n+=1)jn(t[n])}}function yt(e){var t,n=w,r=e.parent;if(!zn&&r!==null&&e.v!==_&&r.f&24576)return ke(),e.v;Un(r);try{e.f&=~se,vt(e),t=rr(e)}finally{Un(n)}return t}function bt(e){var t=yt(e);if(!e.equals(t)&&(e.wv=er(),(!x?.is_fork||e.deps===null)&&(x===null?e.v=t:(x.capture(e,t,!0),Tt?.capture(e,t,!0)),e.deps===null))){b(e,p);return}zn||(Et===null?$e(e):(_n()||x?.is_fork)&&Et.set(e,t))}function xt(e){if(e.effects!==null)for(let t of e.effects)(t.teardown||t.ac)&&(t.teardown?.(),t.ac?.abort(ge),t.fn!==null&&(t.teardown=u),t.ac=null,ar(t,0),kn(t))}function St(e){if(e.effects!==null)for(let t of e.effects)t.teardown&&t.fn!==null&&or(t)}var Ct=null,wt=null,x=null,Tt=null,Et=null,Dt=null,Ot=!1,kt=!1,At=null,jt=null,Mt=0,Nt=1,Pt=class e{id=Nt++;#e=!1;linked=!0;#t=null;#n=null;async_deriveds=new Map;current=new Map;previous=new Map;#r=new Set;#i=new Set;#a=0;#o=new Map;#s=null;#c=[];#l=[];#u=new Set;#d=new Set;#f=new Map;#p=new Set;is_fork=!1;#m=!1;constructor(){wt===null?Ct=wt=this:(wt.#n=this,this.#t=wt),wt=this}#h(){if(this.is_fork)return!0;for(let n of this.#o.keys()){for(var e=n,t=!1;e.parent!==null;){if(this.#f.has(e)){t=!0;break}e=e.parent}if(!t)return!0}return!1}skip_effect(e){this.#f.has(e)||this.#f.set(e,{d:[],m:[]}),this.#p.delete(e)}unskip_effect(e,t=e=>this.schedule(e)){var n=this.#f.get(e);if(n){this.#f.delete(e);for(var r of n.d)b(r,m),t(r);for(r of n.m)b(r,h),t(r)}this.#p.add(e)}#g(){this.#e=!0,Mt++>1e3&&(this.#S(),Ft());for(let e of this.#u)this.#d.delete(e),b(e,m),this.schedule(e);for(let e of this.#d)b(e,h),this.schedule(e);let t=this.#c;this.#c=[],this.apply();var n=At=[],r=[],i=jt=[];for(let e of t)try{this.#_(e,n,r)}catch(t){throw Ht(e),this.#h()||this.discard(),t}if(x=null,i.length>0){var a=e.ensure();for(let e of i)a.schedule(e)}if(At=null,jt=null,this.#h()){this.#b(r),this.#b(n);for(let[e,t]of this.#f)Vt(e,t);i.length>0&&x.#g();return}let o=this.#v();if(o){this.#b(r),this.#b(n),o.#y(this);return}this.#u.clear(),this.#d.clear();for(let e of this.#r)e(this);this.#r.clear(),Tt=this,Lt(r),Lt(n),Tt=null,this.#s?.resolve();var s=x;if(this.#a===0&&(this.#c.length===0||s!==null)&&(this.#S(),Ve&&(this.#x(),x=s)),this.#c.length>0)if(s!==null){let e=s;e.#c.push(...this.#c.filter(t=>!e.#c.includes(t)))}else s=this;s!==null&&s.#g()}#_(e,t,n){e.f^=p;for(var r=e.first;r!==null;){var i=r.f,a=(i&96)!=0;if(!(a&&i&1024||i&8192||this.#f.has(r))&&r.fn!==null){a?r.f^=p:i&4?t.push(r):Ve&&i&16777224?n.push(r):tr(r)&&(i&16&&this.#d.add(r),or(r));var o=r.first;if(o!==null){r=o;continue}}for(;r!==null;){var s=r.next;if(s!==null){r=s;break}r=r.parent}}}#v(){for(var e=this.#t;e!==null;){if(!e.is_fork){for(let[t,[,n]]of this.current)if(e.current.has(t)&&!n)return e}e=e.#t}return null}#y(e){for(let[t,n]of e.current)!this.previous.has(t)&&e.previous.has(t)&&this.previous.set(t,e.previous.get(t)),this.current.set(t,n);for(let[t,n]of e.async_deriveds){let e=this.async_deriveds.get(t);e&&n.promise.then(e.resolve).catch(e.reject)}e.async_deriveds.clear(),this.transfer_effects(e.#u,e.#d);let t=e=>{var n=e.reactions;if(n!==null)for(let e of n){var r=e.f;if(r&2)t(e);else{var i=e;r&4194320&&!this.async_deriveds.has(i)&&(this.#d.delete(i),b(i,m),this.schedule(i))}}};for(let e of this.current.keys())t(e);this.oncommit(()=>e.discard()),e.#S(),x=this,this.#g()}#b(e){for(var t=0;t<e.length;t+=1)tt(e[t],this.#u,this.#d)}capture(e,t,n=!1){e.v!==_&&!this.previous.has(e)&&this.previous.set(e,e.v),e.f&8388608||(this.current.set(e,[t,n]),Et?.set(e,t)),this.is_fork||(e.v=t)}activate(){x=this}deactivate(){x=null,Et=null}flush(){try{kt=!0,x=this,this.#g()}finally{Mt=0,Dt=null,At=null,jt=null,kt=!1,x=null,Et=null,Wt.clear()}}discard(){for(let e of this.#i)e(this);this.#i.clear();for(let e of this.async_deriveds.values())e.reject(mt);this.#S(),this.#s?.resolve()}register_created_effect(e){this.#l.push(e)}#x(){for(let u=Ct;u!==null;u=u.#n){var e=u.id<this.id,t=[];for(let[r,[i,a]]of this.current){if(u.current.has(r)){var n=u.current.get(r)[0];if(e&&i!==n)u.current.set(r,[i,a]);else continue}t.push(r)}if(e)for(let[e,t]of this.async_deriveds){let n=u.async_deriveds.get(e);n&&t.promise.then(n.resolve).catch(n.reject)}var r=[...u.current.keys()].filter(e=>!u.current.get(e)[1]);if(!(!u.#e||r.length===0)){var i=r.filter(e=>!this.current.has(e));if(i.length===0)e&&u.discard();else if(t.length>0){if(e)for(let e of this.#p)u.unskip_effect(e,e=>{e.f&4194320?u.schedule(e):u.#b([e])});u.activate();var a=new Set,o=new Map;for(var s of t)Rt(s,i,a,o);o=new Map;var c=[...u.current].filter(([e,t])=>{let n=this.current.get(e);return n?n[0]!==t[0]||n[1]!==t[1]:!0}).map(([e])=>e);if(c.length>0)for(let e of this.#l)!(e.f&155648)&&zt(e,c,o)&&(e.f&4194320?(b(e,m),u.schedule(e)):u.#u.add(e));if(u.#c.length>0&&!u.#m){u.apply();for(var l of u.#c)u.#_(l,[],[]);u.#c=[]}u.deactivate()}}}}increment(e,t){if(this.#a+=1,e){let e=this.#o.get(t)??0;this.#o.set(t,e+1)}}decrement(e,t){if(--this.#a,e){let e=this.#o.get(t)??0;e===1?this.#o.delete(t):this.#o.set(t,e-1)}this.#m||(this.#m=!0,Ye(()=>{this.#m=!1,this.linked&&this.flush()}))}transfer_effects(e,t){for(let t of e)this.#u.add(t);for(let e of t)this.#d.add(e);e.clear(),t.clear()}oncommit(e){this.#r.add(e)}ondiscard(e){this.#i.add(e)}settled(){return(this.#s??=f()).promise}static ensure(){if(x===null){let t=x=new e;!kt&&!Ot&&Ye(()=>{t.#e||t.flush()})}return x}apply(){if(!Ve||!this.is_fork&&this.#t===null&&this.#n===null){Et=null;return}Et=new Map;for(let[e,[t]]of this.current)Et.set(e,t);for(let t=Ct;t!==null;t=t.#n)if(!(t===this||t.is_fork)){var e=!1;if(t.id<this.id){for(let[n,[,r]]of t.current)if(!r&&this.current.has(n)){e=!0;break}}if(!e)for(let[e,n]of t.previous)Et.has(e)||Et.set(e,n)}}schedule(e){if(Dt=e,e.b?.is_pending&&e.f&16777228&&!(e.f&32768)){e.b.defer_effect(e);return}for(var t=e;t.parent!==null;){t=t.parent;var n=t.f;if(At!==null&&t===w&&(Ve||(C===null||!(C.f&2))&&!nt))return;if(n&96){if(!(n&1024))return;t.f^=p}}this.#c.push(t)}#S(){if(this.linked){var e=this.#t,t=this.#n;e===null?Ct=t:e.#n=t,t===null?wt=e:t.#t=e,this.linked=!1}}};function Ft(){try{Se()}catch(e){Ze(e,Dt)}}var It=null;function Lt(e){var t=e.length;if(t!==0){for(var n=0;n<t;){var r=e[n++];if(!(r.f&24576)&&tr(r)&&(It=new Set,or(r),r.deps===null&&r.first===null&&r.nodes===null&&r.teardown===null&&r.ac===null&&Nn(r),It?.size>0)){Wt.clear();for(let e of It){if(e.f&24576)continue;let t=[e],n=e.parent;for(;n!==null;)It.has(n)&&(It.delete(n),t.push(n)),n=n.parent;for(let e=t.length-1;e>=0;e--){let n=t[e];n.f&24576||or(n)}}It.clear()}}It=null}}function Rt(e,t,n,r){if(!n.has(e)&&(n.add(e),e.reactions!==null))for(let i of e.reactions){let e=i.f;e&2?Rt(i,t,n,r):e&4194320&&!(e&2048)&&zt(i,t,r)&&(b(i,m),Bt(i))}}function zt(e,t,r){let i=r.get(e);if(i!==void 0)return i;if(e.deps!==null)for(let i of e.deps){if(n.call(t,i))return!0;if(i.f&2&&zt(i,t,r))return r.set(i,!0),!0}return r.set(e,!1),!1}function Bt(e){x.schedule(e)}function Vt(e,t){if(!(e.f&32&&e.f&1024)){e.f&2048?t.d.push(e):e.f&4096&&t.m.push(e),b(e,p);for(var n=e.first;n!==null;)Vt(n,t),n=n.next}}function Ht(e){b(e,p);for(var t=e.first;t!==null;)Ht(t),t=t.next}var Ut=new Set,Wt=new Map,Gt=!1;function Kt(e,t){return{f:0,v:e,reactions:null,equals:Re,rv:0,wv:0}}function qt(e,t){let n=Kt(e,t);return Gn(n),n}function S(e,t,n=!1){return C!==null&&(!Vn||C.f&131072)&&Ke()&&C.f&4325394&&(Wn===null||!Wn.has(e))&&Ee(),Jt(e,n?Qt(t):t,jt)}function Jt(e,t,n=null){if(!e.equals(t)){Wt.set(e,zn?t:e.v);var r=Pt.ensure();if(r.capture(e,t),e.f&2){let t=e;e.f&2048&&yt(t),Et===null&&$e(t)}e.wv=er(),Zt(e,m,n),Ke()&&w!==null&&w.f&1024&&!(w.f&96)&&(Jn===null?Yn([e]):Jn.push(e)),!r.is_fork&&Ut.size>0&&!Gt&&Yt()}return t}function Yt(){Gt=!1;for(let e of Ut){e.f&1024&&b(e,h);let t;try{t=tr(e)}catch{t=!0}t&&or(e)}Ut.clear()}function Xt(e){S(e,e.v+1)}function Zt(e,t,n){var r=e.reactions;if(r!==null)for(var i=Ke(),a=r.length,o=0;o<a;o++){var s=r[o],c=s.f;if(!(!i&&s===w)){var l=(c&m)===0;if(l&&b(s,t),c&131072)Ut.add(s);else if(c&2){var u=s;Et?.delete(u),c&65536||(c&512&&(w===null||!(w.f&2097152))&&(s.f|=se),Zt(u,h,n))}else if(l){var d=s;c&16&&It!==null&&It.add(d),n===null?Bt(d):n.push(d)}}}}function Qt(t){if(typeof t!=`object`||!t||ue in t)return t;let n=c(t);if(n!==o&&n!==s)return t;var r=new Map,i=e(t),l=qt(0),u=null,d=Qn,f=e=>{if(Qn===d)return e();var t=C,n=Qn;Hn(null),$n(d);var r=e();return Hn(t),$n(n),r};return i&&r.set(`length`,qt(t.length,u)),new Proxy(t,{defineProperty(e,t,n){(!(`value`in n)||n.configurable===!1||n.enumerable===!1||n.writable===!1)&&we();var i=r.get(t);return i===void 0?f(()=>{var e=qt(n.value,u);return r.set(t,e),e}):S(i,n.value,!0),!0},deleteProperty(e,t){var n=r.get(t);if(n===void 0){if(t in e){let e=f(()=>qt(_,u));r.set(t,e),Xt(l)}}else S(n,_),Xt(l);return!0},get(e,n,i){if(n===ue)return t;var o=r.get(n),s=n in e;if(o===void 0&&(!s||a(e,n)?.writable)&&(o=f(()=>qt(Qt(s?e[n]:_),u)),r.set(n,o)),o!==void 0){var c=T(o);return c===_?void 0:c}return Reflect.get(e,n,i)},getOwnPropertyDescriptor(e,t){var n=Reflect.getOwnPropertyDescriptor(e,t);if(n&&`value`in n){var i=r.get(t);i&&(n.value=T(i))}else if(n===void 0){var a=r.get(t),o=a?.v;if(a!==void 0&&o!==_)return{enumerable:!0,configurable:!0,value:o,writable:!0}}return n},has(e,t){if(t===ue)return!0;var n=r.get(t),i=n!==void 0&&n.v!==_||Reflect.has(e,t);return(n!==void 0||w!==null&&(!i||a(e,t)?.writable))&&(n===void 0&&(n=f(()=>qt(i?Qt(e[t]):_,u)),r.set(t,n)),T(n)===_)?!1:i},set(e,t,n,o){var s=r.get(t),c=t in e;if(i&&t===`length`)for(var d=n;d<s.v;d+=1){var p=r.get(d+``);p===void 0?d in e&&(p=f(()=>qt(_,u)),r.set(d+``,p)):S(p,_)}if(s===void 0)(!c||a(e,t)?.writable)&&(s=f(()=>qt(void 0,u)),S(s,Qt(n)),r.set(t,s));else{c=s.v!==_;var m=f(()=>Qt(n));S(s,m)}var h=Reflect.getOwnPropertyDescriptor(e,t);if(h?.set&&h.set.call(o,n),!c){if(i&&typeof t==`string`){var ee=r.get(`length`),te=Number(t);Number.isInteger(te)&&te>=ee.v&&S(ee,te+1)}Xt(l)}return!0},ownKeys(e){T(l);var t=Reflect.ownKeys(e).filter(e=>{var t=r.get(e);return t===void 0||t.v!==_});for(var[n,i]of r)i.v!==_&&!(n in e)&&t.push(n);return t},setPrototypeOf(){Te()}})}new Set([`copyWithin`,`fill`,`pop`,`push`,`reverse`,`shift`,`sort`,`splice`,`unshift`]);var $t,en,tn,nn;function rn(){if($t===void 0){$t=window,en=/Firefox/.test(navigator.userAgent);var e=Element.prototype,t=Node.prototype,n=Text.prototype;tn=a(t,`firstChild`).get,nn=a(t,`nextSibling`).get,l(e)&&(e[pe]=void 0,e[fe]=null,e[me]=void 0,e.__e=void 0),l(n)&&(n[he]=void 0)}}function an(e=``){return document.createTextNode(e)}function on(e){return tn.call(e)}function sn(e){return nn.call(e)}function cn(e,t){if(!Me)return on(e);var n=on(v);if(n===null)n=v.appendChild(an());else if(t&&n.nodeType!==3){var r=an();return n?.before(r),Ne(r),r}return t&&fn(n),Ne(n),n}function ln(e,t=!1){if(!Me){var n=on(e);return n instanceof Comment&&n.data===``?sn(n):n}if(t){if(v?.nodeType!==3){var r=an();return v?.before(r),Ne(r),r}fn(v)}return v}function un(e,t=1,n=!1){let r=Me?v:e;for(var i;t--;)i=r,r=sn(r);if(!Me)return r;if(n){if(r?.nodeType!==3){var a=an();return r===null?i?.after(a):r.before(a),Ne(a),a}fn(r)}return Ne(r),r}function dn(e,t,n){return t==null||t===`http://www.w3.org/1999/xhtml`?n?document.createElement(e,{is:n}):document.createElement(e):n?document.createElementNS(t,e,{is:n}):document.createElementNS(t,e)}function fn(e){if(e.nodeValue.length<65536)return;let t=e.nextSibling;for(;t!==null&&t.nodeType===3;)t.remove(),e.nodeValue+=t.nodeValue,t=e.nextSibling}function pn(e){var t=C,n=w;Hn(null),Un(null);try{return e()}finally{Hn(t),Un(n)}}function mn(e){w===null&&(C===null&&xe(e),be()),zn&&ye(e)}function hn(e,t){var n=t.last;n===null?t.last=t.first=e:(n.next=e,e.prev=n,t.last=e)}function gn(e,t){var n=w;n!==null&&n.f&8192&&(e|=ee);var r={ctx:y,deps:null,nodes:null,f:e|m|512,first:null,fn:t,last:null,next:null,parent:n,b:n&&n.b,prev:null,teardown:null,wv:0,ac:null};x?.register_created_effect(r);var i=r;if(e&4)At===null?Pt.ensure().schedule(r):At.push(r);else if(t!==null){try{or(r)}catch(e){throw jn(r),e}i.deps===null&&i.teardown===null&&i.nodes===null&&i.first===i.last&&!(i.f&524288)&&(i=i.first,e&16&&e&65536&&i!==null&&(i.f|=ie))}if(i!==null&&(i.parent=n,n!==null&&hn(i,n),C!==null&&C.f&2&&!(e&64))){var a=C;(a.effects??=[]).push(i)}return r}function _n(){return C!==null&&!Vn}function vn(e){let t=gn(8,null);return b(t,p),t.teardown=e,t}function yn(e){mn(`$effect`);var t=w.f;if(!C&&t&32&&y!==null&&!y.i){var n=y;(n.e??=[]).push(e)}else return bn(e)}function bn(e){return gn(4|oe,e)}function xn(e){Pt.ensure();let t=gn(64|ae,e);return(e={})=>new Promise(n=>{e.outro?Pn(t,()=>{jn(t),n(void 0)}):(jn(t),n(void 0))})}function Sn(e){return gn(4,e)}function Cn(e){return gn(le|ae,e)}function wn(e,t=0){return gn(8|t,e)}function Tn(e,t=[],n=[],r=[]){lt(r,t,n,t=>{gn(8,()=>{e(...t.map(T))})})}function En(e,t=0){return gn(16|t,e)}function Dn(e){return gn(32|ae,e)}function On(e){var t=e.teardown;if(t!==null){let e=zn,n=C;Bn(!0),Hn(null);try{t.call(null)}finally{Bn(e),Hn(n)}}}function kn(e,t=!1){var n=e.first;for(e.first=e.last=null;n!==null;){let e=n.ac;e!==null&&pn(()=>{e.abort(ge)});var r=n.next;n.f&64?n.parent=null:jn(n,t),n=r}}function An(e){for(var t=e.first;t!==null;){var n=t.next;t.f&32||jn(t),t=n}}function jn(e,t=!0){var n=!1;(t||e.f&262144)&&e.nodes!==null&&e.nodes.end!==null&&(Mn(e.nodes.start,e.nodes.end),n=!0),e.f|=re,kn(e,t&&!n),ar(e,0);var r=e.nodes&&e.nodes.t;if(r!==null)for(let e of r)e.stop();On(e),e.f^=re,e.f|=te;var i=e.parent;i!==null&&i.first!==null&&Nn(e),e.next=e.prev=e.teardown=e.ctx=e.deps=e.fn=e.nodes=e.ac=e.b=null}function Mn(e,t){for(;e!==null;){var n=e===t?null:sn(e);e.remove(),e=n}}function Nn(e){var t=e.parent,n=e.prev,r=e.next;n!==null&&(n.next=r),r!==null&&(r.prev=n),t!==null&&(t.first===e&&(t.first=r),t.last===e&&(t.last=n))}function Pn(e,t,n=!0){var r=[];Fn(e,r,!0);var i=()=>{n&&jn(e),t&&t()},a=r.length;if(a>0){var o=()=>--a||i();for(var s of r)s.out(o)}else i()}function Fn(e,t,n){if(!(e.f&8192)){e.f^=ee;var r=e.nodes&&e.nodes.t;if(r!==null)for(let e of r)(e.is_global||n)&&t.push(e);for(var i=e.first;i!==null;){var a=i.next;if(!(i.f&64)){var o=(i.f&65536)!=0||(i.f&32)!=0&&(e.f&16)!=0;Fn(i,t,o?n:!1)}i=a}}}function In(e,t){if(e.nodes)for(var n=e.nodes.start,r=e.nodes.end;n!==null;){var i=n===r?null:sn(n);t.append(n),n=i}}var Ln=null,Rn=!1,zn=!1;function Bn(e){zn=e}var C=null,Vn=!1;function Hn(e){C=e}var w=null;function Un(e){w=e}var Wn=null;function Gn(e){C!==null&&(!Ve||C.f&2)&&(Wn??=new Set).add(e)}var Kn=null,qn=0,Jn=null;function Yn(e){Jn=e}var Xn=1,Zn=0,Qn=Zn;function $n(e){Qn=e}function er(){return++Xn}function tr(e){var t=e.f;if(t&2048)return!0;if(t&2&&(e.f&=~se),t&4096){for(var n=e.deps,r=n.length,i=0;i<r;i++){var a=n[i];if(tr(a)&&bt(a),a.wv>e.wv)return!0}t&512&&Et===null&&b(e,p)}return!1}function nr(e,t,n=!0){var r=e.reactions;if(r!==null&&!(!Ve&&Wn!==null&&Wn.has(e)))for(var i=0;i<r.length;i++){var a=r[i];a.f&2?nr(a,t,!1):t===a&&(n?b(a,m):a.f&1024&&b(a,h),Bt(a))}}function rr(e){var t=Kn,n=qn,r=Jn,i=C,a=Wn,o=y,s=Vn,c=Qn,l=e.f;Kn=null,qn=0,Jn=null,C=l&96?null:e,Wn=null,Ue(e.ctx),Vn=!1,Qn=++Zn,e.ac!==null&&(pn(()=>{e.ac.abort(ge)}),e.ac=null);try{e.f|=ce;var u=e.fn,d=u();e.f|=ne;var f=e.deps,p=x?.is_fork;if(Kn!==null){var m;if(p||ar(e,qn),f!==null&&qn>0)for(f.length=qn+Kn.length,m=0;m<Kn.length;m++)f[qn+m]=Kn[m];else e.deps=f=Kn;if(_n()&&e.f&512)for(m=qn;m<f.length;m++)(f[m].reactions??=[]).push(e)}else !p&&f!==null&&qn<f.length&&(ar(e,qn),f.length=qn);if(Ke()&&Jn!==null&&!Vn&&f!==null&&!(e.f&6146))for(m=0;m<Jn.length;m++)nr(Jn[m],e);if(i!==null&&i!==e){if(Zn++,i.deps!==null)for(let e=0;e<n;e+=1)i.deps[e].rv=Zn;if(t!==null)for(let e of t)e.rv=Zn;Jn!==null&&(r===null?r=Jn:r.push(...Jn))}return e.f&8388608&&(e.f^=g),d}catch(e){return Xe(e)}finally{e.f^=ce,Kn=t,qn=n,Jn=r,C=i,Wn=a,Ue(o),Vn=s,Qn=c}}function ir(e,r){let i=r.reactions;if(i!==null){var a=t.call(i,e);if(a!==-1){var o=i.length-1;o===0?i=r.reactions=null:(i[a]=i[o],i.pop())}}if(i===null&&r.f&2&&(Kn===null||!n.call(Kn,r))){var s=r;s.f&512&&(s.f^=512,s.f&=~se),s.v!==_&&$e(s),xt(s),ar(s,0)}}function ar(e,t){var n=e.deps;if(n!==null)for(var r=t;r<n.length;r++)ir(e,n[r])}function or(e){var t=e.f;if(!(t&16384)){b(e,p);var n=w,r=Rn;w=e,Rn=!0;try{t&16777232?An(e):kn(e),On(e);var i=rr(e);e.teardown=typeof i==`function`?i:null,e.wv=Xn}finally{Rn=r,w=n}}}function T(e){var t=(e.f&2)!=0;if(Ln?.add(e),C!==null&&!Vn&&!(w!==null&&w.f&16384)&&(Wn===null||!Wn.has(e))){var r=C.deps;if(C.f&2097152)e.rv<Zn&&(e.rv=Zn,Kn===null&&r!==null&&r[qn]===e?qn++:Kn===null?Kn=[e]:Kn.push(e));else{C.deps??=[],n.call(C.deps,e)||C.deps.push(e);var i=e.reactions;i===null?e.reactions=[C]:n.call(i,C)||i.push(C)}}if(zn&&Wt.has(e))return Wt.get(e);if(t){var a=e;if(zn){var o=a.v;return(!(a.f&1024)&&a.reactions!==null||cr(a))&&(o=yt(a)),Wt.set(a,o),o}var s=(a.f&512)==0&&!Vn&&C!==null&&(Rn||(C.f&512)!=0),c=(a.f&ne)===0;tr(a)&&(s&&(a.f|=512),bt(a)),s&&!c&&(St(a),sr(a))}if(Et?.has(e))return Et.get(e);if(e.f&8388608)throw e.v;return e.v}function sr(e){if(e.f|=512,e.deps!==null)for(let t of e.deps)(t.reactions??=[]).push(e),t.f&2&&!(t.f&512)&&(St(t),sr(t))}function cr(e){if(e.v===_)return!0;if(e.deps===null)return!1;for(let t of e.deps)if(Wt.has(t)||t.f&2&&cr(t))return!0;return!1}function lr(e){var t=Vn;try{return Vn=!0,e()}finally{Vn=t}}[...`allowfullscreen.async.autofocus.autoplay.checked.controls.default.disabled.formnovalidate.indeterminate.inert.ismap.loop.multiple.muted.nomodule.novalidate.open.playsinline.readonly.required.reversed.seamless.selected.webkitdirectory.defer.disablepictureinpicture.disableremoteplayback`.split(`.`)];var ur=[`touchstart`,`touchmove`];function dr(e){return ur.includes(e)}var fr=Symbol(`events`),pr=new Set,mr=new Set;function hr(e,t,n,r={}){function i(e){if(r.capture||vr.call(t,e),!e.cancelBubble)return pn(()=>n?.call(this,e))}return e.startsWith(`pointer`)||e.startsWith(`touch`)||e===`wheel`?Ye(()=>{t.addEventListener(e,i,r)}):t.addEventListener(e,i,r),i}function gr(e,t,n,r,i){var a={capture:r,passive:i},o=hr(e,t,n,a);(t===document.body||t===window||t===document||t instanceof HTMLMediaElement)&&vn(()=>{t.removeEventListener(e,o,a)})}var _r=null;function vr(e){var t=this,n=t.ownerDocument,r=e.type,a=e.composedPath?.()||[],o=a[0]||e.target;_r=e;var s=0,c=_r===e&&e[fr];if(c){var l=a.indexOf(c);if(l!==-1&&(t===document||t===window)){e[fr]=t;return}var u=a.indexOf(t);if(u===-1)return;l<=u&&(s=l)}if(o=a[s]||e.target,o!==t){i(e,`currentTarget`,{configurable:!0,get(){return o||n}});var d=C,f=w;Hn(null),Un(null);try{for(var p,m=[];o!==null&&o!==t;){try{var h=o[fr]?.[r];h!=null&&(!o.disabled||e.target===o)&&h.call(o,e)}catch(e){p?m.push(e):p=e}if(e.cancelBubble)break;s++,o=s<a.length?a[s]:null}if(p){for(let e of m)queueMicrotask(()=>{throw e});throw p}}finally{e[fr]=t,delete e.currentTarget,Hn(d),Un(f)}}}var yr=globalThis?.window?.trustedTypes&&globalThis.window.trustedTypes.createPolicy(`svelte-trusted-html`,{createHTML:e=>e});function br(e){return yr?.createHTML(e)??e}function xr(e){var t=dn(`template`);return t.innerHTML=br(e.replaceAll(`<!>`,`<!---->`)),t.content}function Sr(e,t){var n=w;n.nodes===null&&(n.nodes={start:e,end:t,a:null,t:null})}function Cr(e,t){var n=(t&1)!=0,r=(t&2)!=0,i,a=!e.startsWith(`<!>`);return()=>{if(Me)return Sr(v,null),v;i===void 0&&(i=xr(a?e:`<!>`+e),n||(i=on(i)));var t=r||en?document.importNode(i,!0):i.cloneNode(!0);if(n){var o=on(t),s=t.lastChild;Sr(o,s)}else Sr(t,t);return t}}function wr(e,t){if(Me){var n=w;(!(n.f&32768)||n.nodes.end===null)&&(n.nodes.end=v),Pe();return}e!==null&&e.before(t)}function Tr(e,t){var n=t==null?``:typeof t==`object`?`${t}`:t;n!==(e[he]??=e.nodeValue)&&(e[he]=n,e.nodeValue=`${n}`)}function Er(e,t){return Or(e,t)}var Dr=new Map;function Or(e,{target:t,anchor:n,props:i={},events:a,context:o,intro:s=!0,transformError:c}){rn();var l=void 0,u=xn(()=>{var s=n??t.appendChild(an());st(s,{pending:()=>{}},t=>{We({});var n=y;if(o&&(n.c=o),a&&(i.$$events=a),Me&&Sr(t,null),l=e(t,i)||{},Me&&(w.nodes.end=v,v===null||v.nodeType!==8||v.data!==`]`))throw Ae(),Oe;Ge()},c);var u=new Set,d=e=>{for(var n=0;n<e.length;n++){var r=e[n];if(!u.has(r)){u.add(r);var i=dr(r);for(let e of[t,document]){var a=Dr.get(e);a===void 0&&(a=new Map,Dr.set(e,a));var o=a.get(r);o===void 0?(e.addEventListener(r,vr,{passive:i}),a.set(r,1)):a.set(r,o+1)}}}};return d(r(pr)),mr.add(d),()=>{for(var e of u)for(let n of[t,document]){var r=Dr.get(n),i=r.get(e);--i==0?(n.removeEventListener(e,vr),r.delete(e),r.size===0&&Dr.delete(n)):r.set(e,i)}mr.delete(d),s!==n&&s.parentNode?.removeChild(s)}});return kr.set(l,u),l}var kr=new WeakMap;function Ar(e,t){Sn(()=>{var n=e.getRootNode(),r=n.host?n:n.head??n.ownerDocument.head;if(!r.querySelector(`#`+t.hash)){let e=dn(`style`);e.id=t.hash,e.textContent=t.code,r.appendChild(e)}})}function jr(e,t){return e===t||e?.[ue]===t}function Mr(e={},t,n,r){var i=y.r,a=w;return Sn(()=>{var o,s;return wn(()=>{o=s,s=r?.()||[],lr(()=>{jr(n(...s),e)||(t(e,...s),o&&jr(n(...o),e)&&t(null,...o))})}),()=>{let r=a;for(;r!==i&&r.parent!==null&&r.parent.f&33554432;)r=r.parent;let o=()=>{s&&jr(n(...s),e)&&t(null,...s)},c=r.teardown;r.teardown=()=>{o(),c?.()}}}),e}function E(e,t,n,r){var i=!He||(n&2)!=0,o=(n&8)!=0,s=(n&16)!=0,c=r,l=!0,u=void 0,d=()=>s&&i?(u??=pt(r),T(u)):(l&&(l=!1,c=s?lr(r):r),c);let f;if(o){var p=ue in e||de in e;f=a(e,t)?.set??(p&&t in e?n=>e[t]=n:void 0)}var m,h=!1;o?[m,h]=it(()=>e[t]):m=e[t],m===void 0&&r!==void 0&&(m=d(),f&&(i&&Ce(t),f(m)));var ee=i?()=>{var n=e[t];return n===void 0?d():(l=!0,n)}:()=>{var n=e[t];return n!==void 0&&(c=void 0),n===void 0?c:n};if(i&&!(n&4))return ee;if(f){var te=e.$$legacy;return(function(e,t){return arguments.length>0?((!i||!t||te||h)&&f(t?ee():e),e):ee()})}var ne=!1,re=(n&1?pt:_t)(()=>(ne=!1,ee()));o&&T(re);var ie=w;return(function(e,t){if(arguments.length>0){let n=t?T(re):i&&o?Qt(e):e;return S(re,n),ne=!0,c!==void 0&&(c=n),e}return zn&&ne||ie.f&16384?re.v:T(re)})}function Nr(e){y===null&&_e(`onMount`),He&&y.l!==null?Pr(y).m.push(e):yn(()=>{let t=lr(e);if(typeof t==`function`)return t})}function Pr(e){var t=e.l;return t.u??={a:[],b:[],m:[]}}typeof window<`u`&&((window.__svelte??={}).v??=new Set).add(`5`);var Fr=globalThis,Ir=Fr.ShadowRoot&&(Fr.ShadyCSS===void 0||Fr.ShadyCSS.nativeShadow)&&`adoptedStyleSheets`in Document.prototype&&`replace`in CSSStyleSheet.prototype,Lr=Symbol(),Rr=new WeakMap,zr=class{constructor(e,t,n){if(this._$cssResult$=!0,n!==Lr)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(Ir&&e===void 0){let n=t!==void 0&&t.length===1;n&&(e=Rr.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),n&&Rr.set(t,e))}return e}toString(){return this.cssText}},Br=e=>new zr(typeof e==`string`?e:e+``,void 0,Lr),Vr=(e,t)=>{if(Ir)e.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let n of t){let t=document.createElement(`style`),r=Fr.litNonce;r!==void 0&&t.setAttribute(`nonce`,r),t.textContent=n.cssText,e.appendChild(t)}},Hr=Ir?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t=``;for(let n of e.cssRules)t+=n.cssText;return Br(t)})(e):e,{is:Ur,defineProperty:Wr,getOwnPropertyDescriptor:Gr,getOwnPropertyNames:Kr,getOwnPropertySymbols:qr,getPrototypeOf:Jr}=Object,Yr=globalThis,Xr=Yr.trustedTypes,Zr=Xr?Xr.emptyScript:``,Qr=Yr.reactiveElementPolyfillSupport,$r=(e,t)=>e,ei={toAttribute(e,t){switch(t){case Boolean:e=e?Zr:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let n=e;switch(t){case Boolean:n=e!==null;break;case Number:n=e===null?null:Number(e);break;case Object:case Array:try{n=JSON.parse(e)}catch{n=null}}return n}},ti=(e,t)=>!Ur(e,t),ni={attribute:!0,type:String,converter:ei,reflect:!1,useDefault:!1,hasChanged:ti};Symbol.metadata??=Symbol(`metadata`),Yr.litPropertyMetadata??=new WeakMap;var ri=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=ni){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){let n=Symbol(),r=this.getPropertyDescriptor(e,n,t);r!==void 0&&Wr(this.prototype,e,r)}}static getPropertyDescriptor(e,t,n){let{get:r,set:i}=Gr(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get:r,set(t){let a=r?.call(this);i?.call(this,t),this.requestUpdate(e,a,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??ni}static _$Ei(){if(this.hasOwnProperty($r(`elementProperties`)))return;let e=Jr(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty($r(`finalized`)))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty($r(`properties`))){let e=this.properties,t=[...Kr(e),...qr(e)];for(let n of t)this.createProperty(n,e[n])}let e=this[Symbol.metadata];if(e!==null){let t=litPropertyMetadata.get(e);if(t!==void 0)for(let[e,n]of t)this.elementProperties.set(e,n)}this._$Eh=new Map;for(let[e,t]of this.elementProperties){let n=this._$Eu(e,t);n!==void 0&&this._$Eh.set(n,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let n=new Set(e.flat(1/0).reverse());for(let e of n)t.unshift(Hr(e))}else e!==void 0&&t.push(Hr(e));return t}static _$Eu(e,t){let n=t.attribute;return!1===n?void 0:typeof n==`string`?n:typeof e==`string`?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map,t=this.constructor.elementProperties;for(let n of t.keys())this.hasOwnProperty(n)&&(e.set(n,this[n]),delete this[n]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Vr(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,n){this._$AK(e,n)}_$ET(e,t){let n=this.constructor.elementProperties.get(e),r=this.constructor._$Eu(e,n);if(r!==void 0&&!0===n.reflect){let i=(n.converter?.toAttribute===void 0?ei:n.converter).toAttribute(t,n.type);this._$Em=e,i==null?this.removeAttribute(r):this.setAttribute(r,i),this._$Em=null}}_$AK(e,t){let n=this.constructor,r=n._$Eh.get(e);if(r!==void 0&&this._$Em!==r){let e=n.getPropertyOptions(r),i=typeof e.converter==`function`?{fromAttribute:e.converter}:e.converter?.fromAttribute===void 0?ei:e.converter;this._$Em=r;let a=i.fromAttribute(t,e.type);this[r]=a??this._$Ej?.get(r)??a,this._$Em=null}}requestUpdate(e,t,n,r=!1,i){if(e!==void 0){let a=this.constructor;if(!1===r&&(i=this[e]),n??=a.getPropertyOptions(e),!((n.hasChanged??ti)(i,t)||n.useDefault&&n.reflect&&i===this._$Ej?.get(e)&&!this.hasAttribute(a._$Eu(e,n))))return;this.C(e,t,n)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(e,t,{useDefault:n,reflect:r,wrapped:i},a){n&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,a??t??this[e]),!0!==i||a!==void 0)||(this._$AL.has(e)||(this.hasUpdated||n||(t=void 0),this._$AL.set(e,t)),!0===r&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}let e=this.constructor.elementProperties;if(e.size>0)for(let[t,n]of e){let{wrapped:e}=n,r=this[t];!0!==e||this._$AL.has(t)||r===void 0||this.C(t,void 0,n,r)}}let e=!1,t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(e=>e.hostUpdate?.()),this.update(t)):this._$EM()}catch(t){throw e=!1,this._$EM(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(e){}firstUpdated(e){}};ri.elementStyles=[],ri.shadowRootOptions={mode:`open`},ri[$r(`elementProperties`)]=new Map,ri[$r(`finalized`)]=new Map,Qr?.({ReactiveElement:ri}),(Yr.reactiveElementVersions??=[]).push(`2.1.2`);var ii=globalThis,ai=e=>e,oi=ii.trustedTypes,si=oi?oi.createPolicy(`lit-html`,{createHTML:e=>e}):void 0,ci=`$lit$`,li=`lit$${Math.random().toFixed(9).slice(2)}$`,ui=`?`+li,di=`<${ui}>`,fi=document,pi=()=>fi.createComment(``),mi=e=>e===null||typeof e!=`object`&&typeof e!=`function`,hi=Array.isArray,gi=e=>hi(e)||typeof e?.[Symbol.iterator]==`function`,_i=`[ 	
\f\r]`,vi=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,yi=/-->/g,bi=/>/g,xi=RegExp(`>|${_i}(?:([^\\s"'>=/]+)(${_i}*=${_i}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,`g`),Si=/'/g,Ci=/"/g,wi=/^(?:script|style|textarea|title)$/i,Ti=e=>(t,...n)=>({_$litType$:e,strings:t,values:n}),D=Ti(1),O=Ti(2),Ei=Symbol.for(`lit-noChange`),k=Symbol.for(`lit-nothing`),Di=new WeakMap,Oi=fi.createTreeWalker(fi,129);function ki(e,t){if(!hi(e)||!e.hasOwnProperty(`raw`))throw Error(`invalid template strings array`);return si===void 0?t:si.createHTML(t)}var Ai=(e,t)=>{let n=e.length-1,r=[],i,a=t===2?`<svg>`:t===3?`<math>`:``,o=vi;for(let t=0;t<n;t++){let n=e[t],s,c,l=-1,u=0;for(;u<n.length&&(o.lastIndex=u,c=o.exec(n),c!==null);)u=o.lastIndex,o===vi?c[1]===`!--`?o=yi:c[1]===void 0?c[2]===void 0?c[3]!==void 0&&(o=xi):(wi.test(c[2])&&(i=RegExp(`</`+c[2],`g`)),o=xi):o=bi:o===xi?c[0]===`>`?(o=i??vi,l=-1):c[1]===void 0?l=-2:(l=o.lastIndex-c[2].length,s=c[1],o=c[3]===void 0?xi:c[3]===`"`?Ci:Si):o===Ci||o===Si?o=xi:o===yi||o===bi?o=vi:(o=xi,i=void 0);let d=o===xi&&e[t+1].startsWith(`/>`)?` `:``;a+=o===vi?n+di:l>=0?(r.push(s),n.slice(0,l)+ci+n.slice(l)+li+d):n+li+(l===-2?t:d)}return[ki(e,a+(e[n]||`<?>`)+(t===2?`</svg>`:t===3?`</math>`:``)),r]},ji=class e{constructor({strings:t,_$litType$:n},r){let i;this.parts=[];let a=0,o=0,s=t.length-1,c=this.parts,[l,u]=Ai(t,n);if(this.el=e.createElement(l,r),Oi.currentNode=this.el.content,n===2||n===3){let e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;(i=Oi.nextNode())!==null&&c.length<s;){if(i.nodeType===1){if(i.hasAttributes())for(let e of i.getAttributeNames())if(e.endsWith(ci)){let t=u[o++],n=i.getAttribute(e).split(li),r=/([.?@])?(.*)/.exec(t);c.push({type:1,index:a,name:r[2],strings:n,ctor:r[1]===`.`?Ii:r[1]===`?`?Li:r[1]===`@`?Ri:Fi}),i.removeAttribute(e)}else e.startsWith(li)&&(c.push({type:6,index:a}),i.removeAttribute(e));if(wi.test(i.tagName)){let e=i.textContent.split(li),t=e.length-1;if(t>0){i.textContent=oi?oi.emptyScript:``;for(let n=0;n<t;n++)i.append(e[n],pi()),Oi.nextNode(),c.push({type:2,index:++a});i.append(e[t],pi())}}}else if(i.nodeType===8)if(i.data===ui)c.push({type:2,index:a});else{let e=-1;for(;(e=i.data.indexOf(li,e+1))!==-1;)c.push({type:7,index:a}),e+=li.length-1}a++}}static createElement(e,t){let n=fi.createElement(`template`);return n.innerHTML=e,n}};function Mi(e,t,n=e,r){if(t===Ei)return t;let i=r===void 0?n._$Cl:n._$Co?.[r],a=mi(t)?void 0:t._$litDirective$;return i?.constructor!==a&&(i?._$AO?.(!1),a===void 0?i=void 0:(i=new a(e),i._$AT(e,n,r)),r===void 0?n._$Cl=i:(n._$Co??=[])[r]=i),i!==void 0&&(t=Mi(e,i._$AS(e,t.values),i,r)),t}var Ni=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:n}=this._$AD,r=(e?.creationScope??fi).importNode(t,!0);Oi.currentNode=r;let i=Oi.nextNode(),a=0,o=0,s=n[0];for(;s!==void 0;){if(a===s.index){let t;s.type===2?t=new Pi(i,i.nextSibling,this,e):s.type===1?t=new s.ctor(i,s.name,s.strings,this,e):s.type===6&&(t=new zi(i,this,e)),this._$AV.push(t),s=n[++o]}a!==s?.index&&(i=Oi.nextNode(),a++)}return Oi.currentNode=fi,r}p(e){let t=0;for(let n of this._$AV)n!==void 0&&(n.strings===void 0?n._$AI(e[t]):(n._$AI(e,n,t),t+=n.strings.length-2)),t++}},Pi=class e{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,n,r){this.type=2,this._$AH=k,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=r,this._$Cv=r?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=Mi(this,e,t),mi(e)?e===k||e==null||e===``?(this._$AH!==k&&this._$AR(),this._$AH=k):e!==this._$AH&&e!==Ei&&this._(e):e._$litType$===void 0?e.nodeType===void 0?gi(e)?this.k(e):this._(e):this.T(e):this.$(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==k&&mi(this._$AH)?this._$AA.nextSibling.data=e:this.T(fi.createTextNode(e)),this._$AH=e}$(e){let{values:t,_$litType$:n}=e,r=typeof n==`number`?this._$AC(e):(n.el===void 0&&(n.el=ji.createElement(ki(n.h,n.h[0]),this.options)),n);if(this._$AH?._$AD===r)this._$AH.p(t);else{let e=new Ni(r,this),n=e.u(this.options);e.p(t),this.T(n),this._$AH=e}}_$AC(e){let t=Di.get(e.strings);return t===void 0&&Di.set(e.strings,t=new ji(e)),t}k(t){hi(this._$AH)||(this._$AH=[],this._$AR());let n=this._$AH,r,i=0;for(let a of t)i===n.length?n.push(r=new e(this.O(pi()),this.O(pi()),this,this.options)):r=n[i],r._$AI(a),i++;i<n.length&&(this._$AR(r&&r._$AB.nextSibling,i),n.length=i)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){let t=ai(e).nextSibling;ai(e).remove(),e=t}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}},Fi=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,n,r,i){this.type=1,this._$AH=k,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=i,n.length>2||n[0]!==``||n[1]!==``?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=k}_$AI(e,t=this,n,r){let i=this.strings,a=!1;if(i===void 0)e=Mi(this,e,t,0),a=!mi(e)||e!==this._$AH&&e!==Ei,a&&(this._$AH=e);else{let r=e,o,s;for(e=i[0],o=0;o<i.length-1;o++)s=Mi(this,r[n+o],t,o),s===Ei&&(s=this._$AH[o]),a||=!mi(s)||s!==this._$AH[o],s===k?e=k:e!==k&&(e+=(s??``)+i[o+1]),this._$AH[o]=s}a&&!r&&this.j(e)}j(e){e===k?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??``)}},Ii=class extends Fi{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===k?void 0:e}},Li=class extends Fi{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==k)}},Ri=class extends Fi{constructor(e,t,n,r,i){super(e,t,n,r,i),this.type=5}_$AI(e,t=this){if((e=Mi(this,e,t,0)??k)===Ei)return;let n=this._$AH,r=e===k&&n!==k||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,i=e!==k&&(n===k||r);r&&this.element.removeEventListener(this.name,this,n),i&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH==`function`?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},zi=class{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){Mi(this,e)}},Bi=ii.litHtmlPolyfillSupport;Bi?.(ji,Pi),(ii.litHtmlVersions??=[]).push(`3.3.3`);var Vi=(e,t,n)=>{let r=n?.renderBefore??t,i=r._$litPart$;if(i===void 0){let e=n?.renderBefore??null;r._$litPart$=i=new Pi(t.insertBefore(pi(),e),e,void 0,n??{})}return i._$AI(e),i},Hi=globalThis,Ui=class extends ri{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Vi(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return Ei}};Ui._$litElement$=!0,Ui.finalized=!0,Hi.litElementHydrateSupport?.({LitElement:Ui});var Wi=Hi.litElementPolyfillSupport;Wi?.({LitElement:Ui}),(Hi.litElementVersions??=[]).push(`4.2.2`);var Gi={attribute:!0,type:String,converter:ei,reflect:!1,hasChanged:ti},Ki=(e=Gi,t,n)=>{let{kind:r,metadata:i}=n,a=globalThis.litPropertyMetadata.get(i);if(a===void 0&&globalThis.litPropertyMetadata.set(i,a=new Map),r===`setter`&&((e=Object.create(e)).wrapped=!0),a.set(n.name,e),r===`accessor`){let{name:r}=n;return{set(n){let i=t.get.call(this);t.set.call(this,n),this.requestUpdate(r,i,e,!0,n)},init(t){return t!==void 0&&this.C(r,void 0,e,t),t}}}if(r===`setter`){let{name:r}=n;return function(n){let i=this[r];t.call(this,n),this.requestUpdate(r,i,e,!0,n)}}throw Error(`Unsupported decorator location: `+r)};function A(e){return(t,n)=>typeof n==`object`?Ki(e,t,n):((e,t,n)=>{let r=t.hasOwnProperty(n);return t.constructor.createProperty(n,e),r?Object.getOwnPropertyDescriptor(t,n):void 0})(e,t,n)}function j(e){return A({...e,state:!0,attribute:!1})}var qi=(e,t,n)=>(n.configurable=!0,n.enumerable=!0,Reflect.decorate&&typeof t!=`object`&&Object.defineProperty(e,t,n),n);function M(e,t){return(n,r,i)=>{let a=t=>t.renderRoot?.querySelector(e)??null;if(t){let{get:e,set:t}=typeof r==`object`?n:i??(()=>{let e=Symbol();return{get(){return this[e]},set(t){this[e]=t}}})();return qi(n,r,{get(){let n=e.call(this);return n===void 0&&(n=a(this),(n!==null||this.hasUpdated)&&t.call(this,n)),n}})}return qi(n,r,{get(){return a(this)}})}}var Ji;function N(e){return(t,n)=>qi(t,n,{get(){return(this.renderRoot??(Ji??=document.createDocumentFragment())).querySelectorAll(e)}})}var Yi=1024,Xi=1048576,Zi=1073741824,Qi=`NaN size`,$i={ATTACHMENT_BROWSE:`Browse`,ATTACHMENT_DRAG_DROP_ZONE:`Drop files here.`},ea={ATTACHMENT_BROWSE:`参照`,ATTACHMENT_DRAG_DROP_ZONE:`ここにファイルをドロップします。`},ta={ATTACHMENT_BROWSE:`选择文件`,ATTACHMENT_DRAG_DROP_ZONE:`拖动文件到此。`},na={ATTACHMENT_BROWSE:`選擇檔案`,ATTACHMENT_DRAG_DROP_ZONE:`拖曳檔案到此。`},ra={ATTACHMENT_BROWSE:`Examinar`,ATTACHMENT_DRAG_DROP_ZONE:`Suelte los archivos aquí.`},P={ITEMS:{IS_NOT_ARRAY:`'items' property is not array.`,IS_DUPLICATED:`'value' property is not unique in items.`,IS_NOT_SPECIFIED:`'value' property is not specified in items.`},FILES:{IS_NOT_ARRAY:`'files' property is not array.`},VALUE:{IS_NOT_ARRAY:`'value' property is not array.`,IS_NOT_STRING:`'value' property is not string.`},SELECTED_INDEX:{IS_NOT_ARRAY:`'selectedIndex' property is not array.`,IS_NOT_NUMBER:`'selectedIndex' property is not number.`},COLUMNS:{IS_NOT_ARRAY:`'columns' property is not array.`,FIELD_REQUIRED:`'field' property is not specified in columns.`,FIELD_UNIQUE:`'field' property is not unique in columns.`},ROWS_PER_PAGE:{INVALID:`'rowsPerPage' property is not positive integer.`},DATA:{IS_NOT_ARRAY:`'data' property is not array.`},CONTAINER:{INVALID:`'container' property is not HTMLElement.`},ACCEPT:{IS_NOT_STRING:`'accept' property is not string.`},MAX_FILES:{IS_NOT_NUMBER:`'maxFiles' property is not number.`}},ia={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},aa=e=>(...t)=>({_$litDirective$:e,values:t}),oa=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,n){this._$Ct=e,this._$AM=t,this._$Ci=n}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}},sa=class extends oa{constructor(e){if(super(e),this.it=k,e.type!==ia.CHILD)throw Error(this.constructor.directiveName+`() can only be used in child bindings`)}render(e){if(e===k||e==null)return this._t=void 0,this.it=e;if(e===Ei)return e;if(typeof e!=`string`)throw Error(this.constructor.directiveName+`() called with a non-string value`);if(e===this.it)return this._t;this.it=e;let t=[e];return t.raw=t,this._t={_$litType$:this.constructor.resultType,strings:t,values:[]}}};sa.directiveName=`unsafeHTML`,sa.resultType=1;var ca=aa(sa),la={AM:`AM`,PM:`PM`},ua=`"max" must be greater than or equal to "min".`,da=`Time is out of valid range.`,fa=`'timeStep' property is not number.`,pa=`00:00`,ma=`23:59`,ha={VALUE:`'value' property format is not valid.`,MAX:`'max' property format is not valid.`,MIN:`'min' property format is not valid.`,TIME_STEP:`'timeStep' property format is not valid.`},ga={MONTH_SELECT:[`JANUARY`,`FEBRUARY`,`MARCH`,`APRIL`,`MAY`,`JUNE`,`JULY`,`AUGUST`,`SEPTEMBER`,`OCTOBER`,`NOVEMBER`,`DECEMBER`],YEAR_SELECT_POSTFIX:``,WEEK_DAYS:[{text:`SUN`,abbr:`Sunday`},{text:`MON`,abbr:`Monday`},{text:`TUE`,abbr:`Tuesday`},{text:`WED`,abbr:`Wednesday`},{text:`THU`,abbr:`Thursday`},{text:`FRI`,abbr:`Friday`},{text:`SAT`,abbr:`Saturday`}],INVALID_FORMAT:`Format is not valid.`,INVALID_TIME_FORMAT:`Format is not valid.`,CALENDAR_FOOTER_TEXT:{none:`None`,today:`Today`,close:`Close`},TIME_IS_OUT_OF_VALID_RANGE:`Time is out of valid range.`},_a={MONTH_SELECT:[`1月`,`2月`,`3月`,`4月`,`5月`,`6月`,`7月`,`8月`,`9月`,`10月`,`11月`,`12月`],YEAR_SELECT_POSTFIX:`年`,WEEK_DAYS:[{text:`日`,abbr:`日`},{text:`月`,abbr:`月`},{text:`火`,abbr:`火`},{text:`水`,abbr:`水`},{text:`木`,abbr:`木`},{text:`金`,abbr:`金`},{text:`土`,abbr:`土`}],INVALID_FORMAT:`日付の形式が不正です。`,INVALID_TIME_FORMAT:`時刻の形式が不正です。`,CALENDAR_FOOTER_TEXT:{none:`選択を解除`,today:`今日`,close:`閉じる`},TIME_IS_OUT_OF_VALID_RANGE:`時刻が有効な範囲外です。`},va={MONTH_SELECT:[`1月`,`2月`,`3月`,`4月`,`5月`,`6月`,`7月`,`8月`,`9月`,`10月`,`11月`,`12月`],YEAR_SELECT_POSTFIX:`年`,WEEK_DAYS:[{text:`周日`,abbr:`周日`},{text:`周一`,abbr:`周一`},{text:`周二`,abbr:`周二`},{text:`周三`,abbr:`周三`},{text:`周四`,abbr:`周四`},{text:`周五`,abbr:`周五`},{text:`周六`,abbr:`周六`}],INVALID_FORMAT:`日期格式不正确。`,INVALID_TIME_FORMAT:`时间格式不正确。`,CALENDAR_FOOTER_TEXT:{none:`清空`,today:`今天`,close:`关闭`},TIME_IS_OUT_OF_VALID_RANGE:`时间超出有效范围。`},ya={MONTH_SELECT:[`1月`,`2月`,`3月`,`4月`,`5月`,`6月`,`7月`,`8月`,`9月`,`10月`,`11月`,`12月`],YEAR_SELECT_POSTFIX:`年`,WEEK_DAYS:[{text:`週日`,abbr:`週日`},{text:`週一`,abbr:`週一`},{text:`週二`,abbr:`週二`},{text:`週三`,abbr:`週三`},{text:`週四`,abbr:`週四`},{text:`週五`,abbr:`週五`},{text:`週六`,abbr:`週六`}],INVALID_FORMAT:`日期格式錯誤。`,INVALID_TIME_FORMAT:`時間格式錯誤。`,CALENDAR_FOOTER_TEXT:{none:`清空`,today:`今天`,close:`關閉`},TIME_IS_OUT_OF_VALID_RANGE:`時間超出有效範圍。`},ba={MONTH_SELECT:[`ENERO`,`FEBRERO`,`MARZO`,`ABRIL`,`MAYO`,`JUNIO`,`JULIO`,`AGOSTO`,`SEPTIEMBRE`,`OCTUBRE`,`NOVIEMBRE`,`DICIEMBRE`],YEAR_SELECT_POSTFIX:``,WEEK_DAYS:[{text:`Do.`,abbr:`Domingo`},{text:`Lu.`,abbr:`Lunes`},{text:`Ma.`,abbr:`Martes`},{text:`Mi.`,abbr:`Miércoles`},{text:`Ju.`,abbr:`Jueves`},{text:`Vi.`,abbr:`Viernes`},{text:`Sá.`,abbr:`Sábado`}],INVALID_FORMAT:`Formato no válido.`,INVALID_TIME_FORMAT:`Formato no válido.`,CALENDAR_FOOTER_TEXT:{none:`Ninguno`,today:`Hoy`,close:`Cerrar`},TIME_IS_OUT_OF_VALID_RANGE:`La hora está fuera del rango válido.`},xa=(e,t)=>{let n=za(e,t),r=new Date(n.start),i=[],a=0,o=[];for(;r<=n.end;)i.push(Na(r)),i.length===7&&(o.push(i),i=[]),r.setDate(r.getDate()+1),r=new Date(r),a++;return o},Sa=(e,t,n,r)=>{let i=[],a=Math.round(t),o=wa(r),s=wa(n);if(a>0){let t=Math.floor((o-s)/a)+1;for(let n=0;n<t;n++){let t=Ca(s+n*a,e);i.push(t)}}return i},Ca=(e,t)=>{let n,r;n=Math.floor(e/60),r=e%60;let i=n%24<12?la.AM:la.PM;return n=t?n%12:n%24,n===0&&t&&(n=12),n<10&&(n=`0`+n),r<10&&(r=`0`+r),{label:n+`:`+r+(t?` `+i:``),value:n+`:`+r+(t?` `+i:``)}},wa=e=>{let t=e.split(`:`),n=parseInt(t[0],10),r=parseInt(t[1],10);return isNaN(n)||isNaN(r)?0:(n<0?n=0:n>=24&&(n=23),r<0?r=0:r>=60&&(r=59),n*60+r)},Ta=(e,t)=>{let n=wa(e),r=wa(t);return n>r?1:n===r?0:-1},Ea=(e,t)=>{let n=e.split(`:`),r=parseInt(n[0],10),i=parseInt(n[1],10),a=r%24;return isNaN(a)||isNaN(i)?{hours:``,minutes:``,suffix:``}:t?Aa(r,i):{hours:F(a),minutes:F(i),suffix:``}},Da=(e,t)=>{let n={hours:``,minutes:``,suffix:``},r=e.split(`:`),i=parseInt(r[0],10),a=parseInt(r[1],10),o=i%24;return isNaN(o)||(n.hours=F(t?Oa(o):o),n.suffix=t?ka(o):``),isNaN(a)||(n.minutes=F(a)),n},Oa=e=>{let t=e%12;return t=t===0?12:t,t},ka=e=>e>=12?la.PM:la.AM,Aa=(e,t)=>{let n=ka(e);return{hours:F(Oa(e)),minutes:F(t),suffix:n}},ja=e=>{let[t,n]=e.split(` `),[r,i]=t.split(`:`);return n?`${Ma(r,n)}:${i}`:e},Ma=(e,t)=>{let n=parseInt(e,10);return t===la.PM?F(n===12?12:n+12):F(n===12?0:n)},Na=e=>{let t=new Date(e),n=t.getFullYear(),r=F(t.getMonth()+1),i=F(t.getDate());return{text:`${t.getFullYear()}-${t.getMonth()+1}-${t.getDate()}`,attr:`${n}-${r}-${i}`}},Pa=(e,t)=>{if(t&&!Ia(t)){let n=t.split(`-`);if(n.length!==3)return t;let r=n[0],i=n[1],a=n[2];return e===`en`?`${i}/${a}/${r}`:`${r}-${i}-${a}`}return t},Fa=(e,t)=>{if(Ia(t))return t;let n=e===`en`,r=n?`/`:`-`,i=t.split(r);return`${n?i[2]:i[0]}-${n?i[0]:i[1]}-${n?i[1]:i[2]}`},Ia=e=>e==null||e.length===0||!/[^(^\s*)|(\s*$)]/.test(e),La=(e=`ja`)=>{let t=new Date,n=t.getFullYear(),r=F(t.getMonth()+1),i=F(t.getDate());return e===`ja`||e===`zh`?n+`-`+r+`-`+i:r+`/`+i+`/`+n},Ra=(e,t)=>{if(t&&!Ia(t)){let n=e===`en`,r=n?`/`:`-`;return new Date(`${t}${n?``:`T00:00:00`}`).getDate()===parseInt(t.split(r)[n?1:2],10)?e===`en`?t.match(/^(0[1-9]|1[0-2])\/(0[1-9]|[12][0-9]|3[01])\/(\d{4})$/)!==null:t.match(/^(\d{4})-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/g)!==null:!1}return!1},F=(e,t=2)=>{let n=`0000000000${e}`;return n.substr(n.length-t)},za=(e,t)=>{let n=new Date(e,t);n.setDate(1);let r=new Date(n);r.setDate(r.getDate()-r.getDay());let i=new Date(e,t);i.setMonth(i.getMonth()+1,0);let a=new Date(i);a.setDate(a.getDate()+(6-a.getDay()));let o=(a.getTime()-r.getTime())/(1e3*60*60*24);return a.setDate(a.getDate()+(42-o)),{start:r,end:a}},I=e=>{switch(e){case`en`:return ga;case`zh`:return va;case`ja`:return _a;case`zh-TW`:return ya;case`es`:return ba;default:return ga}},Ba=(e=1)=>{let t=[];for(let n=0;n<=59;n+=e)t.push({value:F(n),label:F(n)});return t},Va=(e=!1)=>e?Ha(`AM`).concat(Ha(`PM`)):Ua(),Ha=e=>{let t=[];t.push({value:`${e} 12`,label:`${e} 12`});for(let n=1;n<=11;n++)t.push({value:`${e} ${F(n)}`,label:`${e} ${F(n)}`});return t},Ua=()=>{let e=[];e.push({value:`00`,label:`00`});for(let t=1;t<=23;t++)e.push({value:F(t),label:`${F(t)}`});return e},Wa=()=>O`
    <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M0 0.5V1.2764L6 7.5L12 1.2764V0.5L6 6.5L0 0.5Z" fill="#888888"/>
    </svg>
    `,Ga=()=>O`
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
    </svg>`,Ka=(e={})=>{let{anchorEl:t,popoverEl:n}=e;if(!n||!t)return;let{popoverHeight:r,popoverWidth:i}=e;if(!r)return;let a=t.getBoundingClientRect(),o=window.innerHeight>document.documentElement.clientHeight?document.documentElement.clientHeight:window.innerHeight,s=window.innerWidth>document.documentElement.clientWidth?document.documentElement.clientWidth:window.innerWidth,c=a.top,l=o-a.bottom,u,d;if(l>=r)u=a.bottom,d=r;else if(c>=r)u=a.top-r,d=r;else if(l>=c)u=a.bottom,d=l;else{d=c;let e=Math.min(r||d,d);u=Math.max(0,a.top-e)}n.style.right=`auto`;let f=a.left;if(i){let e=n.offsetWidth;s-a.left<e&&(f=a.right-e)}let p=`${f}px`;n.style.left!==p&&(n.style.left=p),n.style.top=`${u}px`,n.style.maxHeight=`${Math.floor(d)}px`,n.style.overflowY=`auto`};function qa(e){if(!e)return{width:0,height:0};let t=e.style.position,n=e.style.left,r=e.style.top,i=e.style.maxHeight;e.style.position=`fixed`,e.style.left=`-9999px`,e.style.top=`-9999px`,e.style.maxHeight=`none`;let a=e.getBoundingClientRect(),o=a.width||0,s=a.height||0;return e.style.position=t,e.style.left=n,e.style.top=r,e.style.maxHeight=i,{width:o,height:s}}function Ja(e){let t=[],n=e.parentElement,r=/(auto|scroll|overlay)/;for(;n&&n!==document.body&&n!==document.documentElement;){let e=getComputedStyle(n);(r.test(e.overflowY)||r.test(e.overflowX))&&t.push(n),n=n.parentElement}return t.push(window),t}var Ya=e=>{if(!e.parentElement)return{inputToBottom:0,inputToTop:0,inputToRight:0,inputToLeft:0,inputDateWidth:0,inputDateHeight:0};let t=e.closest(`kuc-base-date-1-25-0`)??e.closest(`kuc-mobile-base-date-1-25-0`),{left:n,top:r,bottom:i,width:a,height:o}=(t.getElementsByClassName(`kuc-base-date-1-25-0__input`)[0]??t.getElementsByClassName(`kuc-mobile-base-date-1-25-0__group`)[0]).getBoundingClientRect();return{inputToBottom:window.innerHeight-i,inputToTop:r,inputToRight:window.innerWidth-n,inputToLeft:n+a,inputDateWidth:a,inputDateHeight:o}},Xa=()=>O`
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
    </svg>`,L={fromAttribute(e){return e===null},toAttribute(e){return e?null:``}},Za={fromAttribute:e=>!e||[`en`,`ja`,`zh`,`zh-TW`,`es`].indexOf(e)===-1,toAttribute:e=>{let t=[`en`,`ja`,`zh`,`zh-TW`,`es`];return t.indexOf(e)===-1?t.indexOf(document.documentElement.lang)===-1?`en`:document.documentElement.lang:e}},Qa=e=>e instanceof HTMLElement?e:ca(e),$a=e=>{if(e===void 0||e===``)return``;let t=[];return e.indexOf(`-`)>0&&(t=e.split(`-`)),t.length<2?`${e}-01-01`:t.length===2?`${F(t[0],4)}-${F(t[1])}-01`:t.length>2?`${F(t[0],4)}-${F(t[1])}-${F(t[2])}`:``},eo=e=>{if(e.length===5||e===``)return e;let t=e.indexOf(`:`),n=e.substr(0,t),r=e.substr(t+1,5);return`${F(n)}:${F(r)}`},R=[];for(let e=0;e<256;++e)R.push((e+256).toString(16).slice(1));function to(e,t=0){return(R[e[t+0]]+R[e[t+1]]+R[e[t+2]]+R[e[t+3]]+`-`+R[e[t+4]]+R[e[t+5]]+`-`+R[e[t+6]]+R[e[t+7]]+`-`+R[e[t+8]]+R[e[t+9]]+`-`+R[e[t+10]]+R[e[t+11]]+R[e[t+12]]+R[e[t+13]]+R[e[t+14]]+R[e[t+15]]).toLowerCase()}var no=new Uint8Array(16);function ro(){return crypto.getRandomValues(no)}function io(e,t,n){return!t&&!e&&crypto.randomUUID?crypto.randomUUID():ao(e,t,n)}function ao(e,t,n){e||={};let r=e.random??e.rng?.()??ro();if(r.length<16)throw Error(`Random bytes length must be >= 16`);if(r[6]=r[6]&15|64,r[8]=r[8]&63|128,t){if(n||=0,n<0||n+16>t.length)throw RangeError(`UUID byte range ${n}:${n+15} is out of buffer bounds`);for(let e=0;e<16;++e)t[n+e]=r[e];return t}return to(r)}var z=class extends Ui{createRenderRoot(){return this}async throwErrorAfterUpdateComplete(e){throw await this.updateComplete,Error(e)}},B=(e,t,n)=>{let r=new CustomEvent(t,{detail:n,bubbles:!0,composed:!0});return e.dispatchEvent(r)},V=e=>{let t=`kuc-style-1-25-0`,n=document.getElementById(t);n||(n=document.createElement(`style`),n.id=t,document.head.appendChild(n)),n.appendChild(document.createTextNode(e))},H=()=>io(),oo=`
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
`,so=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},co=class extends z{constructor(){super(...arguments),this.ariaLive=``,this.guid=``,this.text=``}render(){return D`
      ${this.ariaLive&&this.ariaLive!==``?D`
            <div
              class="kuc-base-error-1-25-0__error"
              .id="${this.guid}-error"
              role="alert"
              aria-live="${this.ariaLive}"
              ?hidden="${!this.text}"
            >
              ${this.text}
            </div>
          `:D`
            <div
              class="kuc-base-error-1-25-0__error"
              .id="${this.guid}-error"
              role="alert"
              ?hidden="${!this.text}"
            >
              ${this.text}
            </div>
          `}
    `}};so([A({type:String})],co.prototype,`ariaLive`,void 0),so([A({type:String})],co.prototype,`guid`,void 0),so([A({type:String})],co.prototype,`text`,void 0),window.customElements.get(`kuc-base-error-1-25-0`)||(V(oo),window.customElements.define(`kuc-base-error-1-25-0`,co));var lo=`
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
`,uo=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},fo=class extends z{constructor(){super(...arguments),this.requiredIcon=!1,this.guid=``,this.text=``}render(){return D`
      ${this._getTextTemplate()}
      <span
        class="kuc-base-label-1-25-0__required-icon"
        ?hidden="${!this.requiredIcon}"
        >*</span
      >
    `}_getTextTemplate(){return this.guid&&this.guid!==``?D`
          <span class="kuc-base-label-1-25-0__text" .id="${this.guid}-group"
            >${this.text}</span
          >
        `:D` <span class="kuc-base-label-1-25-0__text">${this.text}</span> `}};uo([A({type:Boolean})],fo.prototype,`requiredIcon`,void 0),uo([A({type:String})],fo.prototype,`guid`,void 0),uo([A({type:String})],fo.prototype,`text`,void 0),window.customElements.get(`kuc-base-label-1-25-0`)||(V(lo),window.customElements.define(`kuc-base-label-1-25-0`,fo));function U(e){if(!e||typeof e!=`object`)return{};let t={...e};for(let e in t)Object.prototype.hasOwnProperty.call(t,e)&&t[e]===void 0&&delete t[e];return t}function po(e){return!!(e===``||e===void 0||/(^(\d{1,4})-(0?[1-9]|1[0-2])-(0?[1-9]|[12][0-9]|3[01])$)|(^(\d{1,4})$)|(^(\d{1,4})-(0?[1-9]|1[0-2])$)/g.test(e))}function mo(e){return!!(e===``||/^(2[0-3]|[01]?[0-9]):([0-9]|[0-5][0-9])$/.test(e))}function ho(e,t,n){let r=Math.round(e),i=wa(t),a=wa(n);return!isNaN(r)&&r>0&&r<=i-a}function go(e){let[t,n,r]=e.split(`-`),i=new Date(`${e}T00:00:00`),a=i.getFullYear(),o=i.getMonth(),s=i.getDate();return a===Number(t)&&o===Number(n)-1&&s===Number(r)}function _o(e){return typeof e==`string`}function vo(e,t){return!(!/(^(\d{4})-(0[0-9]|1[0-2])-(0[1-9]|([12][0-9]|3[01]))$)|(^(\d{4})$)|(^(\d{4})-(0[0-9]|1[0-2])$)/g.test(e)||!/(^([01][0-9]|2[0-3])$)|(^([01][0-9]|2[0-3]):([0-5][0-9]))$|(^([01][0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9])$/.test(t))}function yo(e){return e.length<2?!0:!e.some(t=>e.indexOf(t)!==e.lastIndexOf(t))}function bo(e){return!(e<.5||!wo(e))}var xo=e=>{for(let t=0;t<e.length;t++)if(!Object.prototype.hasOwnProperty.call(e[t],`field`))return!1;return!0},So=e=>{let t=e.map(e=>e.field);return t.some(function(e,n){return t.indexOf(e)!==n})};function Co(e){return/^[1-9]\d*$/.test(e)}function wo(e){return typeof e==`number`&&!Number.isNaN(e)}function W(e){return Array.isArray(e)}var To=e=>{if(e instanceof HTMLElement)return!0;let t=document.createElement(`div`);return t.innerHTML=e,t.childElementCount>0},Eo=`
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
`,G=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},Do;(()=>{if(Do=window.customElements.get(`kuc-attachment-1-25-0`),Do)return;class e extends z{constructor(e){super(),this.accept=``,this.className=``,this.error=``,this.id=``,this.label=``,this.language=`auto`,this.message=``,this.disabled=!1,this.requiredIcon=!1,this.visible=!0,this.files=[],this._isDraging=!1,this._dragEnterCounter=0,this._locale=this._getLocale(),this._isFileOrDirectoryDrag=e=>{if(!e.dataTransfer)return!1;if(e.dataTransfer.items!==void 0){for(let t=0;t<e.dataTransfer.items.length;t++)if(e.dataTransfer.items[t].kind.toLowerCase()===`file`)return!0}if(e.dataTransfer.types!==void 0){for(let t=0;t<e.dataTransfer.types.length;t++)if(e.dataTransfer.types[t].toLowerCase()===`files`)return!0}return!1},this._GUID=H();let t=U(e);Object.assign(this,t)}shouldUpdate(e){return e.has(`files`)&&!W(this.files)?(this.throwErrorAfterUpdateComplete(P.FILES.IS_NOT_ARRAY),!1):e.has(`accept`)&&!_o(this.accept)?(this.throwErrorAfterUpdateComplete(P.ACCEPT.IS_NOT_STRING),!1):e.has(`maxFiles`)&&this.maxFiles!==void 0&&!wo(this.maxFiles)?(this.throwErrorAfterUpdateComplete(P.MAX_FILES.IS_NOT_NUMBER),!1):!0}willUpdate(e){e.has(`language`)&&(this._locale=this._getLocale())}render(){return D`
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
      `}_getAttachmentItemTemplate(e,t){return D`
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
      `}async updated(e){await this.updateComplete,this._updateFileNameMaxWidth()}_updateFileNameMaxWidth(){let e=this._labelEl.getBoundingClientRect().width;this._fileItemsEl.forEach(t=>{t.style.maxWidth=`calc(var(--kuc-attachment-width, ${e<191?191:e}px) - 14px)`})}_getRemoveButtonIcon(){return O`<svg
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
      </svg>`}_getLanguage(){let e=[`en`,`ja`,`zh`,`zh-TW`,`es`];return e.indexOf(this.language)===-1?e.indexOf(document.documentElement.lang)===-1?`en`:document.documentElement.lang:this.language}_getLocale(){switch(this._getLanguage()){case`en`:return $i;case`zh`:return ta;case`zh-TW`:return na;case`ja`:return ea;case`es`:return ra;default:return $i}}_handleClickFileRemove(e){let t=e.currentTarget,n=parseInt(t.getAttribute(`data-file-index`),10);if(this.files){n===this.files.length-1&&this._inputEl.focus();let e=[...this.files];this.files.splice(n,1);let t={oldFiles:e,files:this.files,type:`remove-file`,fileIndex:[n]};B(this,`change`,t),this.requestUpdate(),n<=this.files.length-1&&this._fileRemoveButtons[n].focus()}}_handleClickLabel(e){e.preventDefault()}_handleDragEnter(e){!(this.disabled||this._isMaxFilesReached())&&(this._dragEnterCounter++,this._dragEnterCounter===1&&this._isFileOrDirectoryDrag(e))&&(e.preventDefault(),this._groupFilesEl.style.height=this._groupFilesEl.getBoundingClientRect().height+`px`,this._dragTextEl.style.width=this._groupFilesEl.getBoundingClientRect().width-2+`px`,this._dragTextEl.style.height=this._groupFilesEl.getBoundingClientRect().height-6+`px`,this._isDraging=!0)}_handleDragOver(e){this.disabled||(e.stopPropagation(),this._isFileOrDirectoryDrag(e)&&e.preventDefault())}_handleDragDrop(e){this.disabled||!this._isDraging||(e.preventDefault(),this._handleDragLeave(),this._isFileDrop(e)&&this._addFiles(e))}_isFileDrop(e){if(e.dataTransfer&&e.dataTransfer.items){for(let t=0;t<e.dataTransfer.items.length;t++)if(typeof e.dataTransfer.items[t].webkitGetAsEntry==`function`&&e.dataTransfer.items[t].webkitGetAsEntry()?.isDirectory)return!1}return!0}_handleDragLeave(){this.disabled||(this._dragEnterCounter--,this._dragEnterCounter===0&&(this._groupFilesEl.style.height=`var(--kuc-attachment-height, auto)`,this._isDraging=!1))}_handleChangeFiles(e){e.preventDefault(),e.stopPropagation(),this._addFiles(e)}_addFiles(e){if(this.files){let t=e.dataTransfer?e.dataTransfer.files:e.target.files;if(t=Object.keys(t).map(e=>t[e]),this.accept&&(t=t.filter(e=>this._matchesAccept(e))),this._hasMaxFilesLimit()){let e=Math.max(0,this._effectiveMaxFiles()-this.files.length);t=t.slice(0,e)}if(t.length===0){this._inputEl.value=``;return}let n=[...this.files],r=t.map((e,t)=>n.length+t);t.forEach(e=>this.files.push(e));let i={oldFiles:n,files:this.files,type:`add-file`,fileIndex:r};B(this,`change`,i),this.requestUpdate()}this._inputEl.value=``}_matchesAccept(e){let t=this.accept.split(`,`).map(e=>e.trim().toLowerCase()).filter(e=>e&&(e.startsWith(`.`)||e.includes(`/`)));if(t.length===0)return!0;let n=e.name.toLowerCase(),r=e.type.toLowerCase();return t.some(e=>{if(e===`*/*`)return!0;if(e.startsWith(`.`))return n.endsWith(e);if(e.endsWith(`/*`)){let t=e.slice(0,-1);return r.startsWith(t)}return r===e})}_hasMaxFilesLimit(){return this.maxFiles!==void 0&&this.maxFiles>=1}_effectiveMaxFiles(){return Math.floor(this.maxFiles)}_isMaxFilesReached(){return this._hasMaxFilesLimit()&&this.files.length>=this._effectiveMaxFiles()}_getFileSize(e){return typeof e==`number`?this._formatFileSize(e):Co(e)?this._formatFileSize(parseInt(e,10)):Qi}_formatFileSize(e){return e>=1073741824?Math.round(e/Zi)+` GB`:e>=1048576?Math.round(e/Xi)+` MB`:e>=1024?Math.round(e/Yi)+` KB`:Math.round(e)+` bytes`}}G([A({type:String})],e.prototype,`accept`,void 0),G([A({type:String,reflect:!0,attribute:`class`})],e.prototype,`className`,void 0),G([A({type:String})],e.prototype,`error`,void 0),G([A({type:String,reflect:!0,attribute:`id`})],e.prototype,`id`,void 0),G([A({type:String})],e.prototype,`label`,void 0),G([A({type:String,attribute:`lang`,reflect:!0,converter:Za})],e.prototype,`language`,void 0),G([A({type:String})],e.prototype,`message`,void 0),G([A({type:Boolean})],e.prototype,`disabled`,void 0),G([A({type:Boolean})],e.prototype,`requiredIcon`,void 0),G([A({type:Boolean,attribute:`hidden`,reflect:!0,converter:L})],e.prototype,`visible`,void 0),G([A({type:Number})],e.prototype,`maxFiles`,void 0),G([A({type:Array})],e.prototype,`files`,void 0),G([j()],e.prototype,`_isDraging`,void 0),G([M(`.kuc-attachment-1-25-0__group__files`)],e.prototype,`_groupFilesEl`,void 0),G([M(`.kuc-attachment-1-25-0__group__files__droppable__text`)],e.prototype,`_dragTextEl`,void 0),G([M(`.kuc-attachment-1-25-0__group__files__browse-button__input-container__input`)],e.prototype,`_inputEl`,void 0),G([M(`.kuc-attachment-1-25-0__group__label`)],e.prototype,`_labelEl`,void 0),G([N(`.kuc-attachment-1-25-0__group__files__display-area__item__name`)],e.prototype,`_fileItemsEl`,void 0),G([N(`.kuc-attachment-1-25-0__group__files__display-area__item__remove-button__container__button`)],e.prototype,`_fileRemoveButtons`,void 0),window.customElements.define(`kuc-attachment-1-25-0`,e),V(Eo),Do=e})();var Oo=`
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
`,ko=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},Ao;(()=>{if(Ao=window.customElements.get(`kuc-button-1-25-0`),Ao)return;class e extends z{constructor(e){super(),this.className=``,this.id=``,this.text=``,this.type=`normal`,this.content=``,this.disabled=!1,this.visible=!0,this._content=``;let t=U(e);Object.assign(this,t)}_handleClickButton(e){e.stopPropagation(),B(this,`click`)}_getButtonColorType(){return this.type===`normal`||this.type===`submit`||this.type===`alert`?this.type:`normal`}willUpdate(e){(e.has(`content`)||e.has(`text`))&&(this.content!==null&&this.content!==void 0&&this.content!==``?To(this.content)?this._content=Qa(this.content):this._content=this.content:this._content=this.text)}render(){return D`
        <button
          type="button"
          class="kuc-button-1-25-0__button kuc-button-1-25-0__button--${this._getButtonColorType()}"
          ?disabled="${this.disabled}"
          @click="${this._handleClickButton}"
        >
          ${this._content}
        </button>
      `}}ko([A({type:String,reflect:!0,attribute:`class`})],e.prototype,`className`,void 0),ko([A({type:String,reflect:!0,attribute:`id`})],e.prototype,`id`,void 0),ko([A({type:String})],e.prototype,`text`,void 0),ko([A({type:String})],e.prototype,`type`,void 0),ko([A()],e.prototype,`content`,void 0),ko([A({type:Boolean})],e.prototype,`disabled`,void 0),ko([A({type:Boolean,attribute:`hidden`,reflect:!0,converter:L})],e.prototype,`visible`,void 0),window.customElements.define(`kuc-button-1-25-0`,e),V(Oo),Ao=e})();var jo=Ao,Mo=`
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
  `,No=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},Po;(()=>{if(Po=window.customElements.get(`kuc-checkbox-1-25-0`),Po)return;class e extends z{constructor(e){super(),this.className=``,this.error=``,this.id=``,this.itemLayout=`horizontal`,this.label=``,this.borderVisible=!0,this.disabled=!1,this.requiredIcon=!1,this.visible=!0,this.items=[],this.selectedIndex=[],this.value=[],this._valueMapping={},this._GUID=H();let t=U(e);this._setInitialValue(t),Object.assign(this,t)}_setInitialValue(e){let t=`value`in e,n=`selectedIndex`in e,r=e.selectedIndex||[];if(!t&&n){if(!W(r))return;let t=this._getValueMapping(e);this.value=this._getValidValue(t,r)}}shouldUpdate(e){return e.has(`items`)&&!W(this.items)?(this.throwErrorAfterUpdateComplete(P.ITEMS.IS_NOT_ARRAY),!1):e.has(`value`)&&!W(this.value)?(this.throwErrorAfterUpdateComplete(P.VALUE.IS_NOT_ARRAY),!1):e.has(`selectedIndex`)&&!W(this.selectedIndex)?(this.throwErrorAfterUpdateComplete(P.SELECTED_INDEX.IS_NOT_ARRAY),!1):!0}willUpdate(e){if(e.has(`value`)){if(this.value.length>0)return;this.selectedIndex=[]}}_getNewValueMapping(e,t){let n=parseInt(t,10),r=Object.keys(this._valueMapping),i={...this._valueMapping};return r.indexOf(t)>-1?(delete i[n],i):(i[n]=e,i)}_handleChangeInput(e){e.stopPropagation();let t=e.target,n=t.dataset.index||`0`,r=t.value,i=this.value?[...this.value]:this.value,a=this._getNewValueMapping(r,n),o=this.items.map(e=>e.value),s=Object.values(a).filter(e=>o.indexOf(e)>-1);if(s===i)return;let c=Object.keys(a).map(e=>parseInt(e,10));this.value=s,this.selectedIndex=c;let l={oldValue:i,value:s};B(this,`change`,l)}_handleFocusInput(e){e.target.parentNode.setAttribute(`focused`,``)}_handleBlurInput(e){e.target.parentNode.removeAttribute(`focused`)}_getCheckboxIconSvgTemplate(e,t){return O`
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
      ${t?O`<path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M5 11L6.5 9L9.5 11.5L14.5 6L16 7.5L9.5 14.5L5 11Z"
            fill="${e?`#d8d8d8`:`#3498db`}"/>`:``}
    </svg>
  `}_getSVGStrokeValue(e,t){return e?`#d8d8d8`:t?`#3498db`:`#d8d8d8`}_isCheckedItem(e,t){let n=Object.values(this._valueMapping),r=Object.keys(this._valueMapping);return n.filter((n,i)=>n===e.value&&t===parseInt(r[i],10)).length>0}_getItemTemplate(e,t){let n=this._isCheckedItem(e,t),r=e.disabled||this.disabled;return D`
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
      `}update(e){(e.has(`items`)||e.has(`value`)||e.has(`selectedIndex`))&&(this._valueMapping=this._getValueMapping({items:this.items,value:this.value,selectedIndex:this.selectedIndex}),this._setValueAndSelectedIndex()),super.update(e)}render(){return D`
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
      `}updated(){this._inputEls.forEach(e=>{e.checked=this.value.indexOf(e.value)>-1})}_getValueMapping(e){let t=e.items||[],n=e.value||[],r=e.selectedIndex||[],i=t.map(e=>e.value||``),a=Object.assign({},i),o={};if(n.length===0){let e=this._getValidValue(a,r);return r.forEach((t,n)=>o[t]=e[n]),o}return this._getValidSelectedIndex(a).forEach((e,t)=>o[e]=n[t]),o}_getValidValue(e,t){return t.filter(t=>e[t]).map(t=>e[t])}_getValidSelectedIndex(e){let t=[];for(let n=0;n<this.value.length;n++){let r=this.selectedIndex[n];if(e[r]===this.value[n]){t.push(r);continue}let i=this.items.findIndex(e=>e.value===this.value[n]);t.push(i)}return t}_setValueAndSelectedIndex(){this.value=Object.values(this._valueMapping),this.selectedIndex=Object.keys(this._valueMapping).map(e=>parseInt(e,10))}}No([A({type:String,reflect:!0,attribute:`class`})],e.prototype,`className`,void 0),No([A({type:String})],e.prototype,`error`,void 0),No([A({type:String,reflect:!0,attribute:`id`})],e.prototype,`id`,void 0),No([A({type:String})],e.prototype,`itemLayout`,void 0),No([A({type:String})],e.prototype,`label`,void 0),No([A({type:Boolean})],e.prototype,`borderVisible`,void 0),No([A({type:Boolean})],e.prototype,`disabled`,void 0),No([A({type:Boolean})],e.prototype,`requiredIcon`,void 0),No([A({type:Boolean,attribute:`hidden`,reflect:!0,converter:L})],e.prototype,`visible`,void 0),No([A({type:Array})],e.prototype,`items`,void 0),No([A({type:Array})],e.prototype,`selectedIndex`,void 0),No([A({type:Array})],e.prototype,`value`,void 0),No([N(`.kuc-checkbox-1-25-0__group__select-menu__item__input`)],e.prototype,`_inputEls`,void 0),No([j()],e.prototype,`_valueMapping`,void 0),window.customElements.define(`kuc-checkbox-1-25-0`,e),V(Mo),Po=e})();var Fo=Po,Io=`
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
`,K=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},Lo;(()=>{if(Lo=window.customElements.get(`kuc-combobox-1-25-0`),Lo)return;class e extends z{_attachListeners(){this._detachListeners(),this._scrollTargets=this._getScrollableAncestors(this._toggleEl);for(let e of this._scrollTargets)e.addEventListener(`scroll`,this._setMenuPosition,{passive:!0});this._menuEl.addEventListener(`scroll`,this._handleScrollMenu),window.addEventListener(`resize`,this._actionResizeScrollWindow),document.addEventListener(`click`,this._handleClickDocument,{capture:!0})}_detachListeners(){for(let e of this._scrollTargets)e.removeEventListener(`scroll`,this._setMenuPosition);this._scrollTargets=[],this._menuEl&&this._menuEl.removeEventListener(`scroll`,this._handleScrollMenu),window.removeEventListener(`resize`,this._actionResizeScrollWindow),document.removeEventListener(`click`,this._handleClickDocument,{capture:!0})}constructor(e){super(),this.className=``,this.error=``,this.id=``,this.label=``,this.placeholder=``,this.value=``,this.disabled=!1,this.requiredIcon=!1,this.visible=!0,this.items=[],this._selectorVisible=!1,this._searchText=``,this._DISABLED_CLASS=`kuc-combobox-1-25-0__group__select-menu__item--disabled`,this._query=``,this._matchingItems=[],this._scrollTargets=[],this._GUID=H(),this._timeoutID=null;let t=U(e);this._handleClickDocument=this._handleClickDocument.bind(this),this._handleScrollMenu=this._handleScrollMenu.bind(this),this._setMenuPosition=this._setMenuPosition.bind(this),this._actionResizeScrollWindow=this._actionResizeScrollWindow.bind(this),Object.assign(this,t)}shouldUpdate(e){if(e.has(`items`)){if(!W(this.items))return this.throwErrorAfterUpdateComplete(P.ITEMS.IS_NOT_ARRAY),!1;if(!yo(this.items.map(e=>e.value)))return this.throwErrorAfterUpdateComplete(P.ITEMS.IS_DUPLICATED),!1}return e.has(`value`)&&!_o(this.value)?(this.throwErrorAfterUpdateComplete(P.VALUE.IS_NOT_STRING),!1):!0}willUpdate(e){e.has(`value`)&&(this._searchText=this._getSelectedLabel()||``)}render(){return D`
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
      `}async updated(e){super.updated(e),await this.updateComplete,this._selectorVisible&&(this._scrollToView(),this._selectedItemEl===null||this._selectedItemEl.classList.contains(this._DISABLED_CLASS)?this._actionClearAllHighlightMenuItem():this._setHighlightAndActiveDescendantMenu(this._selectedItemEl))}_getToggleIconSvgTemplate(){return O`
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
    `}_getItemTemplate(e,t){let n=this._isCheckedItem(e),r=e.disabled,i=e.label===void 0?e.value:e.label,a=n?D`<b>${i}</b>`:D`${i}`,o=this._query.trim().toLowerCase();if(o&&i){let e=i.toLowerCase().indexOf(o),t=e+o.length;a=D`
          ${i.slice(0,e)}<b>${i.slice(e,t)}</b>${i.slice(t)}
        `}return D`
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
      `}_getComboboxIconSvgTemplate(e,t){return O`
      ${e?O`<svg
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
        </svg>`:``}`}_handleClickComboboxItem(e){let t=this._getItemElementWhenMouseOverDown(e.target).getAttribute(`value`);this._actionUpdateValue(t)}_handleMouseOverComboboxItem(e){let t=this._getItemElementWhenMouseOverDown(e.target);this._actionHighlightMenuItem(t)}_handleMouseLeaveMenu(){this._actionClearAllHighlightMenuItem()}_handleMouseDownMenu(e){e.preventDefault()}_handleClickToggleButton(e){e.preventDefault(),this._inputEl.focus(),this._inputEl.select(),this._resetToggleInputValue(),this._actionToggleMenu()}_handleInputComboboxInput(e){e.stopPropagation(),this._searchText=this._inputEl.value,this._query=this._inputEl.value,this._setMatchingItems()}_handleClickComboboxInput(e){e.stopPropagation(),this._inputEl.select(),this._setMatchingItems()}_handleChangeComboboxInput(e){e.stopPropagation()}_handleBlurComboboxInput(e){this._resetToggleInputValue()}_handleClickDocument(e){(e.target===this._toggleEl||this._toggleEl.contains(e.target))&&(this._inputEl.focus(),e.stopPropagation()),!Array.from(this._disabledItemsEl).some(t=>t===e.target||t.contains(e.target))&&this._actionHideMenu()}_handleScrollMenu(){this._previousScrollTop=this._menuEl.scrollTop}_handleKeyDownComboboxInput(e){switch(e.key){case`Up`:case`ArrowUp`:if(e.preventDefault(),!this._selectorVisible){this._actionShowMenu();break}this._actionHighlightPrevMenuItem();break;case`Tab`:this._selectorVisible&&this._actionHideMenu();break;case`Down`:case`ArrowDown`:if(e.preventDefault(),!this._selectorVisible){this._actionShowMenu();break}this._actionHighlightNextMenuItem();break;case`Enter`:{e.preventDefault();let t=this._highlightItemEl;if(t===null)break;let n=t.getAttribute(`value`);this._actionUpdateValue(n),this._actionHideMenu();break}case`Escape`:e.preventDefault(),this._selectorVisible&&e.stopPropagation(),this._resetToggleInputValue(),this._actionHideMenu();break;case`Home`:this._selectorVisible&&(e.preventDefault(),this._actionHighlightFirstMenuItem());break;case`End`:this._selectorVisible&&(e.preventDefault(),this._actionHighlightLastMenuItem());break;default:break}}_getSelectedLabel(){let e=this.items.filter((e,t)=>this._isCheckedItem(e));return e.length===0?``:e[0].label===void 0?e[0].value:e[0].label}async _actionShowMenu(){this._query.trim()===``&&(this._matchingItems=this.items),!(this.items.length===0||this._matchingItems.length===0)&&(this._inputEl.focus(),this._selectorVisible=!0,this._menuEl.showPopover(),await this.updateComplete,!(!this._menuEl||!this._toggleEl)&&(this._setMenuPosition(),this._attachListeners()))}_actionHideMenu(){this._selectorVisible=!1,this._menuEl.hidePopover(),this._detachListeners(),this._actionRemoveActiveDescendant()}_actionToggleMenu(){if(this._selectorVisible){this._actionHideMenu();return}this._actionShowMenu()}_actionHighlightFirstMenuItem(){let e=this._firstItemEl,t=!1;for(let n=0;n<this._matchingItems.length&&(t=e.classList.contains(this._DISABLED_CLASS),t);n++)e=e.nextElementSibling;!t&&this._setHighlightAndActiveDescendantMenu(e)}_actionHighlightLastMenuItem(){let e=this._lastItemEl,t=!1;for(let n=0;n<this._matchingItems.length&&(t=e.classList.contains(this._DISABLED_CLASS),t);n++)e=e.previousElementSibling;!t&&this._setHighlightAndActiveDescendantMenu(e)}_actionHighlightPrevMenuItem(){let e=null;this._highlightItemEl!==null&&(e=this._highlightItemEl.previousElementSibling),e===null&&(e=this._lastItemEl);let t=!1;for(let n=0;n<this._matchingItems.length&&(t=e.classList.contains(this._DISABLED_CLASS),t);n++)e=e.previousElementSibling,e===null&&(e=this._lastItemEl);!t&&this._setHighlightAndActiveDescendantMenu(e)}_actionHighlightNextMenuItem(){let e=null;this._highlightItemEl!==null&&(e=this._highlightItemEl.nextElementSibling),e===null&&(e=this._firstItemEl);let t=!1;for(let n=0;n<this._matchingItems.length&&(t=e.classList.contains(this._DISABLED_CLASS),t);n++)e=e.nextElementSibling,e===null&&(e=this._firstItemEl);!t&&this._setHighlightAndActiveDescendantMenu(e)}_actionClearAllHighlightMenuItem(){this._itemsEl.forEach(e=>{e.classList.remove(`kuc-combobox-1-25-0__group__select-menu__highlight`)}),this._actionRemoveActiveDescendant()}_setHighlightAndActiveDescendantMenu(e){this._actionHighlightMenuItem(e),this._actionSetActiveDescendant(e.id),this._scrollToView()}_actionHighlightMenuItem(e){this._actionClearAllHighlightMenuItem(),e.classList.add(`kuc-combobox-1-25-0__group__select-menu__highlight`)}_actionUpdateValue(e){if(this.value===e){this._resetToggleInputValue();return}let t={oldValue:this.value,value:e};this.value=e,this._query=``,B(this,`change`,t)}_actionSetActiveDescendant(e){e!==void 0&&this._inputEl!==null&&this._inputEl.setAttribute(`aria-activedescendant`,e)}_actionRemoveActiveDescendant(){this._inputEl.removeAttribute(`aria-activedescendant`)}_setMatchingItems(){let e=this.items.filter(e=>{let t=new RegExp((e=>e.replace(/[.*+?^=!:${}()|[\]/\\]/g,`\\$&`))(this._query.trim()),`gi`);return e.label?t.test(e.label):e.value?t.test(e.value):!1});e.length===0?(this._matchingItems=[],this._actionHideMenu()):(this._matchingItems=e,this._actionShowMenu())}_setMenuPositionAboveOrBelow(e,t){let n=t.getBoundingClientRect(),r=n.top,i=window.innerHeight;window.innerHeight>document.documentElement.clientHeight&&(i=document.documentElement.clientHeight);let a=i-n.bottom;e.style.height=`auto`,e.style.maxHeight=`none`,e.style.top=`auto`,e.style.bottom=`auto`;let o=e.getBoundingClientRect().height;e.style.maxHeight=`var(--kuc-combobox-menu-max-height, none)`;let s=getComputedStyle(e).maxHeight,c;s&&s!==`none`&&(c=parseFloat(s));let l=c?Math.min(o,c):o,u,d;a>=l?(u=n.bottom,d=l):r>=l?(u=n.top-l,d=l):a>=r?(u=n.bottom,d=a):(u=n.top-r,d=r),e.style.position=`fixed`;let f=`${u}px`;e.style.top!==f&&(e.style.top=f);let p=`${d}px`;e.style.height!==p&&(e.style.height=p),e.style.overflowY=`auto`}_setMenuPositionLeftOrRight(e,t){e.style.right=`auto`;let n=e.offsetWidth,r=t.getBoundingClientRect(),i=window.innerWidth;window.innerWidth>document.documentElement.clientWidth&&(i=document.documentElement.clientWidth);let a=r.left;i<r.right&&i>r.left&&(a=i-n);let o=`${a}px`;e.style.left!==o&&(e.style.left=o)}_setMenuPosition(){if(!this._menuEl||!this._toggleEl){this._detachListeners();return}this._setMenuPositionAboveOrBelow(this._menuEl,this._toggleEl),this._setMenuPositionLeftOrRight(this._menuEl,this._toggleEl),this._menuEl&&this._previousScrollTop&&(this._menuEl.scrollTop=this._previousScrollTop)}_scrollToView(){if(!this._highlightItemEl||!this._menuEl)return;let e=this._menuEl.getBoundingClientRect(),t=this._highlightItemEl.getBoundingClientRect();t.top<e.top&&(this._menuEl.scrollTop-=e.top-t.top),e.bottom<t.bottom&&(this._menuEl.scrollTop+=t.bottom-e.bottom)}_actionResizeScrollWindow(){this._timeoutID||!this._selectorVisible||(this._timeoutID=window.setTimeout(()=>{this._timeoutID=null,this._setMenuPosition()},50))}_isCheckedItem(e){return e.value===this.value}_resetToggleInputValue(){let e=this._getSelectedLabel();this._searchText!==e&&(this._searchText=e||``),this._query=``}_getScrollableAncestors(e){let t=[],n=e.parentElement,r=/(auto|scroll|overlay)/;for(;n&&n!==document.body&&n!==document.documentElement;){let e=getComputedStyle(n);(r.test(e.overflowY)||r.test(e.overflowX))&&t.push(n),n=n.parentElement}return t.push(window),t}_getItemElementWhenMouseOverDown(e){return e.classList.value.split(` `).includes(`kuc-combobox-1-25-0__group__select-menu__item`)?e:this._getItemElementWhenMouseOverDown(e.parentElement)}disconnectedCallback(){this._detachListeners(),super.disconnectedCallback&&super.disconnectedCallback()}}K([A({type:String,reflect:!0,attribute:`class`})],e.prototype,`className`,void 0),K([A({type:String})],e.prototype,`error`,void 0),K([A({type:String,reflect:!0,attribute:`id`})],e.prototype,`id`,void 0),K([A({type:String})],e.prototype,`label`,void 0),K([A({type:String})],e.prototype,`placeholder`,void 0),K([A({type:String})],e.prototype,`value`,void 0),K([A({type:Boolean})],e.prototype,`disabled`,void 0),K([A({type:Boolean})],e.prototype,`requiredIcon`,void 0),K([A({type:Boolean,attribute:`hidden`,reflect:!0,converter:L})],e.prototype,`visible`,void 0),K([A({type:Array})],e.prototype,`items`,void 0),K([j()],e.prototype,`_selectorVisible`,void 0),K([M(`.kuc-combobox-1-25-0__group__toggle`)],e.prototype,`_toggleEl`,void 0),K([M(`.kuc-combobox-1-25-0__group__toggle__input`)],e.prototype,`_inputEl`,void 0),K([M(`.kuc-combobox-1-25-0__group__select-menu`)],e.prototype,`_menuEl`,void 0),K([N(`.kuc-combobox-1-25-0__group__select-menu__item`)],e.prototype,`_itemsEl`,void 0),K([M(`.kuc-combobox-1-25-0__group__select-menu__item`)],e.prototype,`_firstItemEl`,void 0),K([M(`.kuc-combobox-1-25-0__group__select-menu__item:last-child`)],e.prototype,`_lastItemEl`,void 0),K([M(`.kuc-combobox-1-25-0__group__select-menu__item[aria-selected=true]`)],e.prototype,`_selectedItemEl`,void 0),K([M(`.kuc-combobox-1-25-0__group__select-menu__highlight`)],e.prototype,`_highlightItemEl`,void 0),K([M(`.kuc-base-error-1-25-0__error`)],e.prototype,`_errorEl`,void 0),K([N(`.kuc-combobox-1-25-0__group__select-menu__item--disabled`)],e.prototype,`_disabledItemsEl`,void 0),K([j()],e.prototype,`_searchText`,void 0),window.customElements.define(`kuc-combobox-1-25-0`,e),V(Io),Lo=e})();var Ro=`
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
`,zo=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},Bo=class extends z{constructor(){super(...arguments),this.year=new Date().getFullYear(),this.postfix=``,this._listBoxVisible=!1,this._listBoxMaxHeight=300,this._scrollTargets=[],this._boundOnScrollAndResize=()=>Ka({anchorEl:this._toggleEl,popoverEl:this._listBoxUl,popoverHeight:this._listBoxMaxHeight})}disconnectedCallback(){this._detachListeners(),super.disconnectedCallback()}update(e){this._listBoxItems=this._getYearOptions().map(e=>({value:`${e}`,label:`${e}${this.postfix}`})),super.update(e)}render(){return D`
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
          >${Wa()}
        </span>
      </button>
      ${this._getListBoxTemplate()}
    `}async updated(e){await this.updateComplete,super.update(e)}repositionListBox(){!this._listBoxVisible||!this._listBoxEl||Ka({anchorEl:this._toggleEl,popoverEl:this._listBoxUl,popoverHeight:this._listBoxMaxHeight})}_attachListeners(){this._detachListeners(),this._scrollTargets=Ja(this._toggleEl);for(let e of this._scrollTargets)e.addEventListener(`scroll`,this._boundOnScrollAndResize,{passive:!0})}_detachListeners(){for(let e of this._scrollTargets)e.removeEventListener(`scroll`,this._boundOnScrollAndResize);this._scrollTargets=[]}closeListBox(){var e;this._listBoxEl&&this._listBoxEl.hidePopover(),this._listBoxVisible=!1,this._detachListeners(),(e=this._toggleEl)==null||e.focus()}_getListBoxTemplate(){return this._listBoxVisible?D`
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
        `:``}_handleFocusOutListBox(){this.closeListBox()}_handleListBoxEscape(){this._handleFocusOutListBox()}_handleMouseUpDropdownToggle(e){e.preventDefault()}_handleMouseDownDropdownToggle(e){e.preventDefault()}_handleClickDropdownYearToggle(e){e.stopPropagation(),e.preventDefault(),this._listBoxVisible?this.closeListBox():this._openListBox(),B(this,`kuc:year-dropdown-click`,{value:this._listBoxVisible.toString(),oldValue:(!this._listBoxVisible).toString()})}_handleKeyDownYearToggle(e){e.key!==`Tab`&&(e.preventDefault(),this._openListBoxByKey(e.key))}_openListBoxByKey(e){[` `,`Up`,`ArrowUp`,`Down`,`ArrowDown`,`Enter`].indexOf(e)>-1&&this._openListBox()}_handleChangeListBox(e){if(e.preventDefault(),e.stopPropagation(),this.closeListBox(),!e.detail.value)return;this.year=Number(e.detail.value);let t={value:`${this.year}`};B(this,`kuc:year-dropdown-change`,t)}async _openListBox(){this._listBoxVisible=!0,await this.updateComplete,this._listBoxEl&&(this._listBoxEl.showPopover(),Ka({anchorEl:this._toggleEl,popoverEl:this._listBoxUl,popoverHeight:this._listBoxMaxHeight}),this._attachListeners())}_getYearOptions(){let e=[];Number.isInteger(this.year)||(this.year=new Date().getFullYear());let t=this.year<100?0:this.year-100,n=this.year>=9899?9999:this.year+100;for(;t<=n;t++)e.push(t);return e}};zo([A({type:Number})],Bo.prototype,`year`,void 0),zo([A({type:String})],Bo.prototype,`postfix`,void 0),zo([j()],Bo.prototype,`_listBoxVisible`,void 0),zo([M(`.kuc-base-datetime-header-year-1-25-0__toggle`)],Bo.prototype,`_toggleEl`,void 0),zo([M(`.kuc-base-datetime-header-year-1-25-0__listbox`)],Bo.prototype,`_listBoxEl`,void 0),zo([M(`.kuc-base-datetime-listbox-1-25-0__listbox`)],Bo.prototype,`_listBoxUl`,void 0),window.customElements.get(`kuc-base-datetime-header-year-1-25-0`)||(V(Ro),window.customElements.define(`kuc-base-datetime-header-year-1-25-0`,Bo));var Vo=`
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
`,Ho=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},Uo=class extends z{constructor(){super(...arguments),this.language=`auto`,this.month=1,this._listBoxVisible=!1,this._locale=I(`en`),this._monthLabel=``,this._maxHeight=1e3,this._scrollTargets=[],this._listBoxMaxHeight=378,this._boundOnScrollAndResize=()=>Ka({anchorEl:this._toggleEl,popoverEl:this._listBoxUl,popoverHeight:this._listBoxMaxHeight})}disconnectedCallback(){this._detachListeners(),super.disconnectedCallback()}update(e){e.has(`language`)&&(this._locale=I(this.language),this._listBoxItems=this._getListBoxItems()),e.has(`month`)&&(this._monthLabel=this._getMonthLabel()),super.update(e)}render(){return D`
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
          >${Wa()}
        </span>
      </button>
      ${this._getListBoxTemplate()}
    `}async updated(e){await this.updateComplete,super.update(e)}repositionListBox(){!this._listBoxVisible||!this._listBoxEl||Ka({anchorEl:this._toggleEl,popoverEl:this._listBoxUl,popoverHeight:this._listBoxMaxHeight})}_attachListeners(){this._detachListeners(),this._scrollTargets=Ja(this._toggleEl);for(let e of this._scrollTargets)e.addEventListener(`scroll`,this._boundOnScrollAndResize,{passive:!0})}_detachListeners(){for(let e of this._scrollTargets)e.removeEventListener(`scroll`,this._boundOnScrollAndResize);this._scrollTargets=[]}closeListBox(){var e;this._listBoxEl&&this._listBoxEl.hidePopover(),this._listBoxVisible=!1,this._detachListeners(),(e=this._toggleEl)==null||e.focus()}_getListBoxTemplate(){return this._listBoxVisible?D`
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
        `:``}_handleFocusOutListBox(){this.closeListBox()}_handleListBoxEscape(){this._handleFocusOutListBox()}_handleClickDropdownMonthToggle(e){e.stopPropagation(),e.preventDefault(),this._listBoxVisible?this.closeListBox():this._openListBox(),B(this,`kuc:month-dropdown-click`,{value:this._listBoxVisible.toString(),oldValue:(!this._listBoxVisible).toString()})}_handleMouseUpDropdownToggle(e){e.preventDefault()}_handleMouseDownDropdownToggle(e){e.preventDefault()}_handleKeyDownMonthToggle(e){this._handleTabKey(e.key)||(e.preventDefault(),this._openListBoxByKey(e.key))}_openListBoxByKey(e){[` `,`Up`,`ArrowUp`,`Down`,`ArrowDown`,`Enter`].indexOf(e)>-1&&this._openListBox()}_handleTabKey(e){return e===`Tab`}_handleChangeListBox(e){if(e.preventDefault(),e.stopPropagation(),this.closeListBox(),!e.detail.value)return;this.month=Number(e.detail.value);let t={value:`${this.month}`};B(this,`kuc:month-dropdown-change`,t)}async _openListBox(){this._listBoxVisible=!0,await this.updateComplete,this._listBoxEl&&(this._listBoxEl.showPopover(),Ka({anchorEl:this._toggleEl,popoverEl:this._listBoxUl,popoverHeight:this._listBoxMaxHeight}),this._attachListeners())}_getListBoxItems(){return this._locale.MONTH_SELECT.map((e,t)=>({value:`${t+1}`,label:`${e}`}))}_getMonthLabel(){let e=this._locale.MONTH_SELECT.filter((e,t)=>this.month===t+1);return e.length>0?e[0]:`JANUARY`}};Ho([A({type:String,attribute:`lang`,reflect:!0})],Uo.prototype,`language`,void 0),Ho([A({type:Number})],Uo.prototype,`month`,void 0),Ho([j()],Uo.prototype,`_listBoxVisible`,void 0),Ho([M(`.kuc-base-datetime-header-month-1-25-0__toggle`)],Uo.prototype,`_toggleEl`,void 0),Ho([M(`.kuc-base-datetime-header-month-1-25-0__listbox`)],Uo.prototype,`_listBoxEl`,void 0),Ho([M(`.kuc-base-datetime-listbox-1-25-0__listbox`)],Uo.prototype,`_listBoxUl`,void 0),window.customElements.get(`kuc-base-datetime-header-month-1-25-0`)||(V(Vo),window.customElements.define(`kuc-base-datetime-header-month-1-25-0`,Uo));var Wo=`
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
`,Go=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a};function Ko(e){return e>0&&e<13}function qo(e){return e>=0&&e<1e4}var Jo=class extends z{constructor(){super(...arguments),this.language=`en`,this.month=1,this.year=new Date().getFullYear(),this._locale=I(`en`)}update(e){e.has(`language`)&&(this._locale=I(this.language)),super.update(e)}render(){return D`
      <div class="kuc-base-datetime-calendar-header-1-25-0__group">
        <button
          aria-label="previous month"
          type="button"
          class="kuc-base-datetime-calendar-header-1-25-0__group__button kuc-base-datetime-calendar-header-1-25-0__group__button--previous-month"
          @click="${this._handleClickCalendarPrevMonthBtn}"
          @keydown="${this._handleKeyDownCalendarPrevMonthBtn}"
        >
          ${Ga()}
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
          ${Xa()}
        </button>
      </div>
    `}_getYearTemplate(){return D`
      <kuc-base-datetime-header-year-1-25-0
        class="kuc-base-datetime-calendar-header-1-25-0__year"
        .postfix="${this._locale.YEAR_SELECT_POSTFIX}"
        .year="${this.year}"
        @kuc:year-dropdown-change="${this._handleYearDropdownChange}"
        @kuc:year-dropdown-click="${this._handleYearDropdownClick}"
      >
      </kuc-base-datetime-header-year-1-25-0>
    `}_getMonthTemplate(){return D`
      <kuc-base-datetime-header-month-1-25-0
        class="kuc-base-datetime-calendar-header-1-25-0__month"
        .month="${this.month}"
        .language="${this.language}"
        @kuc:month-dropdown-change="${this._handleMonthDropdownChange}"
        @kuc:month-dropdown-click="${this._handleMonthDropdownClick}"
      >
      </kuc-base-datetime-header-month-1-25-0>
    `}_getYearMonthTemplate(){return this.language===`zh`||this.language===`ja`||this.language===`zh-TW`?D` ${this._getYearTemplate()}${this._getMonthTemplate()} `:D` ${this._getMonthTemplate()}${this._getYearTemplate()} `}_handleMonthDropdownChange(e){e.stopPropagation(),e.preventDefault(),this.month=parseInt(e.detail.value,10),this._dispatchCalendarHeaderChangeEvent()}_handleYearDropdownChange(e){e.stopPropagation(),e.preventDefault(),this.year=parseInt(e.detail.value,10),this._dispatchCalendarHeaderChangeEvent()}_handleYearDropdownClick(){this._listBoxMonthEl&&this._baseDateTimeHeaderMonthEl.closeListBox()}_handleMonthDropdownClick(){this._listBoxYearEl&&this._baseDateTimeHeaderYearEl.closeListBox()}_handleClickCalendarPrevMonthBtn(e){e.stopPropagation(),this.month===1?(this.month=12,this.year--):--this.month,this._dispatchCalendarHeaderChangeEvent()}_handleKeyDownCalendarPrevMonthBtn(e){!e.shiftKey||e.key!==`Tab`||(e.preventDefault(),B(this,`kuc:calendar-header-previous-shifttab`))}_handleClickCalendarNextMonthBtn(e){e.stopPropagation(),this.month===12?(this.month=1,this.year++):this.month+=1,this._dispatchCalendarHeaderChangeEvent()}_dispatchCalendarHeaderChangeEvent(){let e={value:`${this.year}-${this.month}`};B(this,`kuc:calendar-header-change`,e)}};Go([A({type:String,attribute:`lang`,reflect:!0})],Jo.prototype,`language`,void 0),Go([A({type:Number,hasChanged(e){return Ko(e)}})],Jo.prototype,`month`,void 0),Go([A({type:Number,hasChanged(e){return qo(e)}})],Jo.prototype,`year`,void 0),Go([M(`.kuc-base-datetime-calendar-header-1-25-0__month`)],Jo.prototype,`_baseDateTimeHeaderMonthEl`,void 0),Go([M(`.kuc-base-datetime-calendar-header-1-25-0__year`)],Jo.prototype,`_baseDateTimeHeaderYearEl`,void 0),Go([M(`.kuc-base-datetime-header-month-1-25-0__listbox`)],Jo.prototype,`_listBoxMonthEl`,void 0),Go([M(`.kuc-base-datetime-header-year-1-25-0__listbox`)],Jo.prototype,`_listBoxYearEl`,void 0),window.customElements.get(`kuc-base-datetime-calendar-header-1-25-0`)||(V(Wo),window.customElements.define(`kuc-base-datetime-calendar-header-1-25-0`,Jo));var Yo=`
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
`,Xo=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},Zo=class extends z{constructor(){super(...arguments),this.language=`en`,this._locale=I(`en`)}update(e){e.has(`language`)&&(this._locale=I(this.language)),super.update(e)}_handleClickCalendarFooterButtonNone(e){e.stopPropagation(),B(this,`kuc:calendar-footer-click-none`)}_handleClickCalendarFooterButtonToday(e){e.stopPropagation(),B(this,`kuc:calendar-footer-click-today`)}_handleKeyDownCalendarFooterButtonNone(e){e.key===`Tab`&&(e.shiftKey||(e.preventDefault(),B(this,`kuc:calendar-footer-tab-none`)))}render(){return D`
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
    `}};Xo([A({type:String,attribute:`lang`,reflect:!0})],Zo.prototype,`language`,void 0),Xo([j()],Zo.prototype,`_locale`,void 0),window.customElements.get(`kuc-base-datetime-calendar-footer-1-25-0`)||(V(Yo),window.customElements.define(`kuc-base-datetime-calendar-footer-1-25-0`,Zo));var Qo=`
.kuc-base-datetime-calendar-1-25-0__group {
  display: inline-block;
  box-sizing: border-box;
  width: 336px;
  padding: 32px 32px 24px;
  background: #ffffff;
  text-align: center;
  font-size: 13px;
}
`,$o=`
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
`,es=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},ts=class extends z{constructor(){super(),this.month=1,this.year=2021,this.language=`en`,this.value=``,this._month=1,this._year=2021,this._locale=I(`en`),this._handleKeyDownDocument=this._handleKeyDownDocument.bind(this)}connectedCallback(){super.connectedCallback(),setTimeout(()=>{document.addEventListener(`keydown`,this._handleKeyDownDocument)},1)}disconnectedCallback(){document.removeEventListener(`keydown`,this._handleKeyDownDocument),super.disconnectedCallback()}update(e){if(e.forEach((e,t)=>{t===`language`&&(this._locale=I(this.language))}),e.has(`month`)&&(this._month=this.month),e.has(`year`)&&(this._year=this.year),e.has(`value`)){let{month:e,year:t}=this._separateDateValue();this._month=parseInt(e,10),this._year=parseInt(t,10)}super.update(e)}render(){return D`
      <table class="kuc-base-datetime-calendar-body-1-25-0__table" role="grid">
        ${this._getHeaderItemsTemplate()}<!--
        -->${this._getDateItemsTemplate()}
      </table>
    `}updated(e){e.has(`value`)&&this.focusActiveDate(),super.update(e)}focusActiveDate(){this._focusedItem&&this._focusedItem.focus({preventScroll:!0})}_handleKeyDownDocument(e){e.key===`Escape`&&(e.preventDefault(),e.stopPropagation(),B(this,`kuc:calendar-body-blur`,{}))}_handleClickDate(e){e.preventDefault(),e.stopPropagation();let t=e.target;t.setAttribute(`aria-selected`,`true`);let n=t.getAttribute(`data-date`)||``;this._dispatchClickEvent(n)}_handleKeyDownDate(e){let t=!1;switch(e.key){case`Up`:case`ArrowUp`:t=!0,this._moveToDate(-7);break;case`Down`:case`ArrowDown`:t=!0,this._moveToDate(7);break;case`Left`:case`ArrowLeft`:t=!0,this._moveToDate(-1);break;case`Right`:case`ArrowRight`:t=!0,this._moveToDate(1);break;case` `:case`Enter`:{t=!0;let e=this._getSelectedValue();this._dispatchClickEvent(e);break}default:break}t&&(e.stopPropagation(),e.preventDefault())}_dispatchClickEvent(e){let t={oldValue:this.value,value:e};B(this,`kuc:calendar-body-click-date`,t),this.value=e}_isToday(e){let t=new Date;return parseInt(e[0],10)===t.getFullYear()&&parseInt(e[1],10)===t.getMonth()+1&&parseInt(e[2],10)===t.getDate()}_moveToDate(e){let t=this.value,n=this._getSelectedValue(),{day:r}=this._separateDateValue(n);t=`${this._year}-${F(this._month)}-${r}`;let i=new Date(`${t||this._getValueItemFocused()}T00:00:00`);if(isNaN(i.getTime()))return;i.setDate(i.getDate()+e);let a=this._getDateString(i),o=t;this.value=a;let s={oldValue:o,value:a};B(this,`kuc:calendar-body-change-date`,s)}_separateDateValue(e=this.value){let t=e.split(`-`);return{day:t[2],month:t[1],year:t[0]}}_getSelectedValue(){return this._highlightItem?this._highlightItem.dataset.date||``:this._selectedItem&&this._selectedItem.getAttribute(`data-date`)||``}_getValueItemFocused(){return this._focusedItem&&this._focusedItem.getAttribute(`data-date`)||``}_getDateClass(e,t){return t?this._isToday(e)?` kuc-base-datetime-calendar-body-1-25-0__table__date--selected--today`:``:this._isToday(e)?` kuc-base-datetime-calendar-body-1-25-0__table__date--selected--today`:` kuc-base-datetime-calendar-body-1-25-0__table__date--other-month`}_getDateString(e=new Date){return`${e.getFullYear()}-${F(e.getMonth()+1)}-${F(e.getDate())}`}_isSameDayOfMoment(e){let t=parseInt(e[1],10),n=parseInt(e[2],10),r=parseInt(e[0],10),i=new Date().getDate();if(!this.value.split(`-`)[2])return!1;if(this.value&&(i=new Date(`${this.value}T00:00:00`).getDate()),i===n&&t===this._month)return!0;let a=new Date(r,this._month,0).getDate();return i>a&&a===n&&t===this._month}_getHeaderItemsTemplate(){return D`
      <thead>
        <tr>
          ${this._locale.WEEK_DAYS.map(e=>D`
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
    `}_getDateItemsTemplate(){let e=xa(this._year,this._month-1),t=this._locale.MONTH_SELECT[this._month-1];return D`
      <tbody>
        ${e.map(e=>D`
            <tr>
              ${e.map(e=>{let n=e.text.split(`-`),r=this._isSameDayOfMoment(n),i=parseInt(n[1],10)===this._month,a=(this.value===e.attr||r)&&i;return D`
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
    `}};es([A({type:Number})],ts.prototype,`month`,void 0),es([A({type:Number})],ts.prototype,`year`,void 0),es([A({type:String,attribute:`lang`,reflect:!0})],ts.prototype,`language`,void 0),es([A({type:String,reflect:!0})],ts.prototype,`value`,void 0),es([j()],ts.prototype,`_month`,void 0),es([j()],ts.prototype,`_year`,void 0),es([M(`.kuc-base-datetime-calendar-body-1-25-0__table__date--selected[aria-selected="true"]`)],ts.prototype,`_selectedItem`,void 0),es([M(`.kuc-base-datetime-calendar-body-1-25-0__table__date--selected`)],ts.prototype,`_highlightItem`,void 0),es([M(`.kuc-base-datetime-calendar-body-1-25-0__table__date--selected[tabindex="0"]`)],ts.prototype,`_focusedItem`,void 0),window.customElements.get(`kuc-base-datetime-calendar-body-1-25-0`)||(V($o),window.customElements.define(`kuc-base-datetime-calendar-body-1-25-0`,ts));var ns=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},rs=class extends z{constructor(){super(...arguments),this.language=`en`,this.value=``,this._month=1,this._year=new Date().getFullYear()}update(e){e.has(`value`)&&this._updateValue(),super.update(e)}render(){return D`
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
    `}async updated(e){await this.updateComplete,super.updated(e)}focusActiveDate(){let e=this.querySelector(`kuc-base-datetime-calendar-body-1-25-0`);e&&e.focusActiveDate()}repositionHeaderListboxes(){var e,t;(e=this._monthEl)==null||e.repositionListBox(),(t=this._yearEl)==null||t.repositionListBox()}_handleKeyDownCalendarGroup(e){e.key===`Escape`&&(e.preventDefault(),e.stopPropagation(),B(this,`kuc:calendar-escape`,{}))}_handleClickCalendarGroup(e){e.stopPropagation(),this._listBoxMonthEl&&this._monthEl.closeListBox(),this._listBoxYearEl&&this._yearEl.closeListBox()}_handleCalendarHeaderChange(e){let{year:t,month:n}=this._separateValue(e.detail.value);this._year=t,this._month=n}_handleCalendarBodyChangeDate(e){let{year:t,month:n}=this._separateValue(e.detail.value);this._year=t,this._month=n}_updateValue(){this.value===``&&(this.value=La().slice(0,7)+`-01`);let{year:e,month:t}=this._separateValue(this.value);this._year=e,this._month=t}_separateValue(e){let t=e.split(`-`);return{year:parseInt(t[0],10),month:parseInt(t[1],10)}}};ns([A({type:String,attribute:`lang`,reflect:!0})],rs.prototype,`language`,void 0),ns([A({type:String,reflect:!0})],rs.prototype,`value`,void 0),ns([M(`.kuc-base-datetime-calendar-header-1-25-0__month`)],rs.prototype,`_monthEl`,void 0),ns([M(`.kuc-base-datetime-calendar-header-1-25-0__year`)],rs.prototype,`_yearEl`,void 0),ns([M(`.kuc-base-datetime-header-month-1-25-0__listbox`)],rs.prototype,`_listBoxMonthEl`,void 0),ns([M(`.kuc-base-datetime-header-year-1-25-0__listbox`)],rs.prototype,`_listBoxYearEl`,void 0),ns([j()],rs.prototype,`_month`,void 0),ns([j()],rs.prototype,`_year`,void 0),window.customElements.get(`kuc-base-datetime-calendar-1-25-0`)||(V(Qo),window.customElements.define(`kuc-base-datetime-calendar-1-25-0`,rs));var is=`
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
`,as=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},os=class extends z{constructor(){super(),this.value=``,this.items=[],this.maxHeight=300,this.doFocus=!0,this._actionKeyboard=!1,this._firstHighlight=!0,this._handleClickDocument=this._handleClickDocument.bind(this)}connectedCallback(){super.connectedCallback(),setTimeout(()=>{document.addEventListener(`click`,this._handleClickDocument)},1)}disconnectedCallback(){document.removeEventListener(`click`,this._handleClickDocument),super.disconnectedCallback()}getHighlightItemEl(){return this._highlightItemEl}showPopover(){var e;this.requestUpdate(),(e=this._listBoxEl)==null||e.showPopover()}hidePopover(){var e;(e=this._listBoxEl)==null||e.hidePopover(),this.requestUpdate()}render(){return D`
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
    `}async updated(e){await this.updateComplete,e.has(`value`)&&this._highlightSelectedItem(),this._scrollToView(),super.updated(e)}_handleClickDocument(){B(this,`kuc:listbox-blur`,{})}_handleClickListBox(e){e.stopPropagation()}_handleKeyDownListBox(e){switch(e.preventDefault(),e.stopPropagation(),e.key){case`Up`:case`ArrowUp`:this._actionKeyboard=!0,this._highlightPrevItemEl(),this._focusHighlightItemEl(),this._scrollToView();break;case`Down`:case`ArrowDown`:this._actionKeyboard=!0,this._highlightNextItemEl(),this._focusHighlightItemEl(),this._scrollToView();break;case`Home`:this._actionKeyboard=!0,this._highlightFirstItem(),this._focusHighlightItemEl();break;case`End`:this._actionKeyboard=!0,this._highlightLastItem(),this._focusHighlightItemEl();break;case`Tab`:B(this,`kuc:listbox-click`,{});break;case`Escape`:B(this,`kuc:listbox-escape`,{});break;case` `:case`Enter`:{let e={value:this._highlightItemEl.getAttribute(`value`)||``};B(this,`kuc:listbox-click`,e);break}}}_handleMouseDownListBox(e){if(e.preventDefault(),e.stopPropagation(),e.target===e.currentTarget)return;let t={value:e.target.getAttribute(`value`)||``};B(this,`kuc:listbox-click`,t)}_handleMouseOverItem(e){if(this._actionKeyboard){this._actionKeyboard=!1;return}let t=e.target;this._setHighlightItemEl(t),this.doFocus&&this._focusHighlightItemEl(!1)}_setHighlightItemEl(e){this._removeHighlight(),e.classList.add(`kuc-base-datetime-listbox-1-25-0__listbox--highlight`),e.setAttribute(`tabindex`,`0`)}_highlightSelectedItem(){if(!this.doFocus)return;let e=Array.from(this._itemsEl).filter(e=>e.getAttribute(`aria-selected`)===`true`)[0];e&&(this._itemSelectedEl=e,this._setHighlightItemEl(e),this._focusHighlightItemEl())}_highlightFirstItem(){this._itemSelectedEl=this._firstItemEl,this._setHighlightItemEl(this._firstItemEl)}_highlightLastItem(){this._itemSelectedEl=this._lastItemEl,this._setHighlightItemEl(this._lastItemEl)}_highlightNextItemEl(){if(this._highlightItemEl===null||this._iconChecked===null){this._highlightFirstItem();return}let e=this._getNextItemEl();if(e){this._setHighlightItemEl(e),this._firstHighlight=!1,this._itemSelectedEl=e;return}this._highlightFirstItem()}_getNextItemEl(){let e=this._iconChecked.parentElement;!this._itemSelectedEl&&e&&this._firstHighlight&&(this._itemSelectedEl=e);let t=this._highlightItemEl.nextElementSibling;return this._itemSelectedEl?this._itemSelectedEl.nextElementSibling?(t=this._itemSelectedEl.nextElementSibling,t):this._firstItemEl:t}_highlightPrevItemEl(){if(this._highlightItemEl===null||this._iconChecked===null){this._highlightLastItem();return}let e=this._getPreviousItemEl();if(e){this._setHighlightItemEl(e),this._firstHighlight=!1,this._itemSelectedEl=e;return}this._highlightLastItem()}_getPreviousItemEl(){let e=this._iconChecked.parentElement;!this._itemSelectedEl&&e&&this._firstHighlight&&(this._itemSelectedEl=e);let t=this._highlightItemEl.previousElementSibling;return this._itemSelectedEl?this._itemSelectedEl.previousElementSibling?(t=this._itemSelectedEl.previousElementSibling,t):this._lastItemEl:t}_removeHighlight(){this._highlightItemEl&&(this._highlightItemEl.setAttribute(`tabindex`,`-1`),this._highlightItemEl.classList.remove(`kuc-base-datetime-listbox-1-25-0__listbox--highlight`))}_focusHighlightItemEl(e){let t=this._highlightItemEl;t&&(t.focus({preventScroll:!0}),e!==!1&&this._dispatchListBoxFocusChange())}_dispatchListBoxFocusChange(){let e={value:this._highlightItemEl.getAttribute(`value`)||``};B(this,`kuc:listbox-focus-change`,e)}_scrollToView(){let e=this._highlightItemEl||this._getHighlightItemByValue();if(!e||!this._listBoxEl)return;let t=e.offsetHeight,n=this._listBoxEl.clientHeight/t/2,r=e.offsetTop-n*t;r<0&&(r=0),this._listBoxEl.scrollTop=r}_getHighlightItemByValue(){let e=Array.from(this._listBoxEl.children),t=new Date(Date.parse(`2021/01/01 ${this.value}`)),n=e.find(e=>new Date(Date.parse(`2021/01/01 ${e.title}`))>=t);return n||=e[e.length-1],!this.doFocus||!n?n:(this._setHighlightItemEl(n),this._focusHighlightItemEl(),n)}_getListBoxItemTemplate(e){let t=this.value===e.value&&this.doFocus;return D`
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
    `}_getCheckedIconSvgTemplate(){return O`<svg
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
        </svg>`}};as([A({type:String})],os.prototype,`value`,void 0),as([A({type:Array})],os.prototype,`items`,void 0),as([A({type:Number})],os.prototype,`maxHeight`,void 0),as([A({type:Boolean})],os.prototype,`doFocus`,void 0),as([M(`.kuc-base-datetime-listbox-1-25-0__listbox`)],os.prototype,`_listBoxEl`,void 0),as([N(`.kuc-base-datetime-listbox-1-25-0__listbox__item`)],os.prototype,`_itemsEl`,void 0),as([M(`.kuc-base-datetime-listbox-1-25-0__listbox__item`)],os.prototype,`_firstItemEl`,void 0),as([M(`.kuc-base-datetime-listbox-1-25-0__listbox__item:last-child`)],os.prototype,`_lastItemEl`,void 0),as([M(`.kuc-base-datetime-listbox-1-25-0__listbox--highlight`)],os.prototype,`_highlightItemEl`,void 0),as([M(`.kuc-base-datetime-listbox-1-25-0__listbox__item__icon`)],os.prototype,`_iconChecked`,void 0),as([j()],os.prototype,`_actionKeyboard`,void 0),as([j()],os.prototype,`_firstHighlight`,void 0),window.customElements.get(`kuc-base-datetime-listbox-1-25-0`)||(V(is),window.customElements.define(`kuc-base-datetime-listbox-1-25-0`,os));var ss=`
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
`,cs=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},ls=class extends z{constructor(){super(...arguments),this.inputAriaLabel=``,this.inputId=``,this.language=`en`,this.value=``,this.disabled=!1,this.inputAriaInvalid=!1,this.required=!1,this._dateTimeCalendarVisible=!1,this._locale=I(`en`),this._calendarValue=``,this._inputValue=``,this._valueForReset=``,this._resizeDebounceTimer=null,this._scrollRAF=0,this._calendarNaturalWidth=0,this._calendarNaturalHeight=0,this._scrollTargets=[],this._DEBOUNCE_DELAY=200,this._schedulePositionOnScroll=()=>{!this._dateTimeCalendarVisible||this._scrollRAF||(this._scrollRAF=requestAnimationFrame(()=>{this._scrollRAF=0,this._positionCalendar()}))},this._schedulePositionOnResize=()=>{this._dateTimeCalendarVisible&&(this._resizeDebounceTimer!==null&&window.clearTimeout(this._resizeDebounceTimer),this._resizeDebounceTimer=window.setTimeout(()=>{var e;this._resizeDebounceTimer=null,this._positionCalendar(),(e=this._calendarEl)==null||e.repositionHeaderListboxes()},this._DEBOUNCE_DELAY))},this._onDocClick=e=>{let t=e.composedPath(),n=this._calendarEl&&t.includes(this._calendarEl),r=t.includes(this._dateInput);!n&&!r&&this._closeCalendar()},this._positionCalendar=()=>{if(!this._calendarEl||!this._dateInput)return;let e=this._dateInput.getBoundingClientRect(),t=this._calendarNaturalWidth||336,n=this._calendarNaturalHeight||0,r=e.top,i=window.innerHeight-e.bottom,a;a=e.bottom,i<r&&(a=e.top-n);let o=e.left;o>window.innerWidth-t&&window.innerWidth-e.left<e.right&&(o=e.right-t),this._calendarEl.style.left=`${Math.floor(o)}px`,this._calendarEl.style.top=`${Math.floor(a)}px`}}update(e){e.has(`inputId`)&&(this._GUID=this.inputId),e.has(`language`)&&(this._locale=I(this.language),this._updateValueProp()),e.has(`value`)&&this._updateValueProp(),super.update(e)}disconnectedCallback(){this._scrollRAF&&=(cancelAnimationFrame(this._scrollRAF),0),this._resizeDebounceTimer!==null&&(window.clearTimeout(this._resizeDebounceTimer),this._resizeDebounceTimer=null),this._detachListeners(),super.disconnectedCallback()}render(){return D`
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
    `}updated(e){e.has(`inputAriaLabel`)&&this.inputAriaLabel&&this._dateInput.setAttribute(`aria-label`,this.inputAriaLabel),super.updated(e)}_handleInputValue(e){let t=e.target.value;this._inputValue=t||``}_handleClickInput(){if(!this._dateTimeCalendarVisible){this._valueForReset=this.value,this._calendarValue=this._getNewCalendarValue(this._inputValue||``),this._openCalendar();return}this._closeCalendar()}_updateValueProp(){if(this.value){let e=this._setCalendarValueWhenInvalidValue();this._inputValue=Pa(this.language,this.value),this._calendarValue=e||this.value;return}let e=La();this._inputValue=``,this._calendarValue=this._calendarValue?this._calendarValue.slice(0,7)+`-01`:e.slice(0,7)}_setCalendarValueWhenInvalidValue(){if(this.value&&!go(this.value)){let e=La();return this._calendarValue||e.slice(0,7)}return``}_getNewCalendarValue(e){if(Ra(this.language,e))return Fa(this.language,e);if(!this._calendarValue)return``;let t=this._calendarValue.slice(0,7);return e===``&&(t=this._calendarValue.slice(0,7)+`-01`),t}_handleChangeInput(e){e.stopPropagation();let t=(e?.target).value;if(this._calendarValue=this._getNewCalendarValue(t),this._calendarValue.length>7){this._dispathDateChangeCustomEvent(Fa(this.language,t));return}let n={value:void 0,oldValue:this.value,error:this._locale.INVALID_FORMAT};this._inputValue=t,B(this,`kuc:base-date-change`,n)}_handleKeyDownInput(e){e.key===`Escape`&&this._closeCalendar()}_closeCalendar(){this._dateTimeCalendarVisible=!1,this._calendarEl&&this._calendarEl.hidePopover(),this._scrollRAF&&=(cancelAnimationFrame(this._scrollRAF),0),this._resizeDebounceTimer!==null&&(window.clearTimeout(this._resizeDebounceTimer),this._resizeDebounceTimer=null),this._detachListeners()}async _openCalendar(){if(this._dateTimeCalendarVisible=!0,this._calendarEl){if(await this.updateComplete,this._calendarEl.showPopover(),!this._calendarNaturalWidth||!this._calendarNaturalHeight){let e=qa(this._calendarEl);this._calendarNaturalWidth=e.width,this._calendarNaturalHeight=e.height}this._positionCalendar(),this._attachListeners(),this._calendarEl.focusActiveDate()}}_attachListeners(){this._detachListeners(),this._scrollTargets=Ja(this._dateInput);for(let e of this._scrollTargets)e.addEventListener(`scroll`,this._schedulePositionOnScroll,{passive:!0});window.addEventListener(`resize`,this._schedulePositionOnResize),document.addEventListener(`click`,this._onDocClick,{capture:!0})}_detachListeners(){for(let e of this._scrollTargets)e.removeEventListener(`scroll`,this._schedulePositionOnScroll);this._scrollTargets=[],window.removeEventListener(`resize`,this._schedulePositionOnResize),document.removeEventListener(`click`,this._onDocClick,{capture:!0})}_handleShiftTabCalendarPrevMonth(){this._footerNoneBtn.focus()}_handleClickCalendarChangeDate(e){e.detail.oldValue=this.value,this.value=e.detail.value,B(this,`kuc:base-date-change`,e.detail)}_handleClickCalendarClickDate(e){this._closeCalendar(),e.detail.oldValue=this.value,this._dateInput.focus(),e.detail.oldValue!==e.detail.value&&(this.value=e.detail.value,B(this,`kuc:base-date-change`,e.detail))}_handleClickCalendarFooterButtonNone(){this._closeCalendar(),this._dateInput.focus(),this._inputValue=``;let e=La(),t=this._setCalendarValueWhenInvalidValue();t||=this._calendarValue?this._calendarValue.slice(0,7)+`-01`:e.slice(0,7)+`-01`,this._calendarValue=t,this._dispathDateChangeCustomEvent(void 0)}_handleTabCalendarFooterButtonNone(){this._previousMonth.focus()}_handleClickCalendarFooterButtonToday(){this._closeCalendar();let e=La();this._dateInput.focus(),this._dispathDateChangeCustomEvent(e)}_handleCalendarEscape(){let e=this._valueForReset;if(this._closeCalendar(),this._dateInput.focus(),e===this.value)return;let t={oldValue:this.value,value:e};this.value=e,B(this,`kuc:base-date-change`,t)}_dispathDateChangeCustomEvent(e){let t={value:e,oldValue:this.value};this.value=e===void 0?``:e,B(this,`kuc:base-date-change`,t)}_handleClickButton(){if(!this._dateTimeCalendarVisible){this._valueForReset=this.value,this._calendarValue=this._getNewCalendarValue(this._inputValue||``),this._openCalendar();return}this._closeCalendar()}_handleBlurButton(){this._dateInput.classList.remove(`kuc-base-date-1-25-0__input--focus`)}_handleFocusButton(){this._dateInput.classList.add(`kuc-base-date-1-25-0__input--focus`)}};cs([A({type:String})],ls.prototype,`inputAriaLabel`,void 0),cs([A({type:String})],ls.prototype,`inputId`,void 0),cs([A({type:String,attribute:`lang`,reflect:!0})],ls.prototype,`language`,void 0),cs([A({type:String,reflect:!0})],ls.prototype,`value`,void 0),cs([A({type:Boolean})],ls.prototype,`disabled`,void 0),cs([A({type:Boolean})],ls.prototype,`inputAriaInvalid`,void 0),cs([A({type:Boolean})],ls.prototype,`required`,void 0),cs([M(`.kuc-base-date-1-25-0__input`)],ls.prototype,`_dateInput`,void 0),cs([M(`.kuc-base-date-1-25-0__calendar`)],ls.prototype,`_calendarEl`,void 0),cs([M(`.kuc-base-datetime-calendar-header-1-25-0__group__button--previous-month`)],ls.prototype,`_previousMonth`,void 0),cs([M(`.kuc-base-datetime-calendar-footer-1-25-0__group__button--none`)],ls.prototype,`_footerNoneBtn`,void 0),cs([j()],ls.prototype,`_dateTimeCalendarVisible`,void 0),window.customElements.get(`kuc-base-date-1-25-0`)||(V(ss),window.customElements.define(`kuc-base-date-1-25-0`,ls));var us=`
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
`,ds=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},fs;(()=>{if(fs=window.customElements.get(`kuc-date-picker-1-25-0`),fs)return;class e extends z{constructor(e){super(),this.className=``,this.error=``,this.id=``,this.label=``,this.disabled=!1,this.requiredIcon=!1,this.language=`auto`,this.value=``,this.visible=!0,this._errorFormat=``,this._errorText=``,this._inputValue=``,this._invalidValue=``,this._valueConverted=``,this._GUID=H();let t=U(e);Object.assign(this,t)}shouldUpdate(e){return this.value===void 0||this.value===``?!0:typeof this.value!=`string`||!po(this.value)||(this._valueConverted=$a(this.value),this._valueConverted&&!go(this._valueConverted))?(this.throwErrorAfterUpdateComplete(ha.VALUE),!1):!0}willUpdate(e){e.has(`value`)&&(this.value===void 0?this._inputValue=this._invalidValue:(this.value=this.value===``?this.value:this._valueConverted,this._inputValue=this.value,this._errorFormat=``)),this._updateErrorText()}render(){return D`
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
      `}updated(){this._invalidValue=``}_updateErrorText(){this._errorText=this._errorFormat||this.error}_getLanguage(){let e=[`en`,`ja`,`zh`,`zh-TW`,`es`];return e.indexOf(this.language)===-1?e.indexOf(document.documentElement.lang)===-1?`en`:document.documentElement.lang:this.language}_handleClickLabel(e){e.preventDefault()}_handleDateChange(e){e.stopPropagation(),e.preventDefault();let t={oldValue:this.value,value:``};e.detail.error?(this.value=void 0,this._invalidValue=this._dateInput.value,this._errorFormat=e.detail.error,this.error=``,t.value=void 0):(this._errorFormat=``,this.value=e.detail.value===void 0?``:e.detail.value,t.value=this.value),this._dispatchChangeEvent(t)}_dispatchChangeEvent(e){B(this,`change`,e)}}ds([A({type:String,reflect:!0,attribute:`class`})],e.prototype,`className`,void 0),ds([A({type:String})],e.prototype,`error`,void 0),ds([A({type:String,reflect:!0,attribute:`id`})],e.prototype,`id`,void 0),ds([A({type:String})],e.prototype,`label`,void 0),ds([A({type:Boolean})],e.prototype,`disabled`,void 0),ds([A({type:Boolean})],e.prototype,`requiredIcon`,void 0),ds([A({type:String,attribute:`lang`,reflect:!0,converter:Za})],e.prototype,`language`,void 0),ds([A({type:String})],e.prototype,`value`,void 0),ds([A({type:Boolean,attribute:`hidden`,reflect:!0,converter:L})],e.prototype,`visible`,void 0),ds([M(`.kuc-base-date-1-25-0__input`)],e.prototype,`_dateInput`,void 0),window.customElements.define(`kuc-date-picker-1-25-0`,e),V(us),fs=e})();var ps=`
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
`,q=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},J=class extends z{constructor(){super(...arguments),this.language=`en`,this.max=``,this.min=``,this.value=``,this.disabled=!1,this.hour12=!1,this.timeStep=30,this._listBoxVisible=!1,this._valueLabel=``,this._doFocusListBox=!1,this._hours=``,this._minutes=``,this._suffix=``,this._valueForReset=``,this._locale=I(`en`),this._scrollTargets=[],this._listBoxMaxHeight=165,this._listBoxMaxWidth=0,this._resizeDebounceTimer=null,this._DEBOUNCE_DELAY=200,this._schedulePositionOnResize=()=>{this._listBoxVisible&&(this._resizeDebounceTimer!==null&&window.clearTimeout(this._resizeDebounceTimer),this._resizeDebounceTimer=window.setTimeout(()=>{this._resizeDebounceTimer=null,Ka({anchorEl:this._inputGroupEl,popoverEl:this._listBoxUl,popoverHeight:this._listBoxMaxHeight,popoverWidth:this._listBoxMaxWidth})},this._DEBOUNCE_DELAY))},this._boundOnScroll=()=>Ka({anchorEl:this._inputGroupEl,popoverEl:this._listBoxUl,popoverHeight:this._listBoxMaxHeight,popoverWidth:this._listBoxMaxWidth})}disconnectedCallback(){this._detachListeners(),super.disconnectedCallback()}update(e){(e.has(`hour12`)||e.has(`timeStep`)||e.has(`max`)||e.has(`min`))&&(this._listBoxItems=Sa(this.hour12,this.timeStep,this.min,this.max),this._updateInputValue()),e.has(`value`)&&this._updateInputValue(),e.has(`language`)&&(this._locale=I(this.language)),super.update(e)}render(){return D`
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
    `}updated(e){e.has(`disabled`)&&this._toggleDisabledGroup(),super.update(e)}_handleClickInputGroup(e){if(this.disabled)return;if(this.value===``){this._toggleEl.focus(),this._openListBox();return}let t=e.target;if(this._openListBox(),t.tagName.toUpperCase()===`INPUT`){t.select();return}this._hoursEl.select()}_handleBlurListBox(e){e.preventDefault(),!this._inputFocusEl&&this._closeListBox()}_toggleDisabledGroup(){return this.disabled?this._inputGroupEl.classList.add(`kuc-base-time-1-25-0__group--disabled`):this._inputGroupEl.classList.remove(`kuc-base-time-1-25-0__group--disabled`)}_updateInputValue(){var e;let t=Ea(this.value,this.hour12);this._hours=t.hours,this._minutes=t.minutes,this._suffix=t.suffix||``,this._valueLabel=this._getValueLabel(t),this._inputGroupEl&&(this._setValueToInput(t),(e=this._inputFocusEl)==null||e.select())}_getValueLabel(e){if(!e.hours||!e.minutes)return``;let t=`${e.hours}:${e.minutes}`;return e.suffix?t+` ${e.suffix}`:t}_setValueToInput(e){this._hoursEl.value=e.hours,this._minutesEl.value=e.minutes,this._suffixEl&&(this._suffixEl.value=e.suffix||``)}_handleKeyDownButton(e){switch(e.key){case`Tab`:case`Escape`:if(e.key===`Escape`&&e.preventDefault(),!this._listBoxVisible)return;this._closeListBox();break;case`Enter`:case` `:case`ArrowUp`:case`ArrowDown`:e.preventDefault(),e.stopPropagation(),this._openListBoxByKey();break;default:e.preventDefault(),e.stopPropagation(),this._handleDefaultKeyButton(e.key);break}}_handleBlurButton(){this._inputGroupEl.classList.remove(`kuc-base-time-1-25-0__group--focus`)}_handleFocusButton(e){e.stopPropagation(),this._inputGroupEl.classList.add(`kuc-base-time-1-25-0__group--focus`)}_openListBoxByKey(){return this._listBoxVisible?!1:(this._valueForReset=this.value,this._openListBox(),this._doFocusListBox=!0,this._inputGroupEl.classList.remove(`kuc-base-time-1-25-0__group--focus`),!0)}_handleListBoxEscape(){if(this._closeListBox(),this.value=this._valueForReset,this._actionUpdateInputValue(this.value),this.value===``){this._toggleEl.focus();return}this._hoursEl.select()}_handleDefaultKeyButton(e){if(!/^[0-9]$/i.test(e)||this.value!==``)return;let t=this._computeNumberKeyValueHours(e);this._actionUpdateInputValue(t),this._hoursEl.select()}_handleChangeListBox(e){if(e.preventDefault(),e.stopPropagation(),this._closeListBox(),this._inputFocusEl=this._hoursEl,this._hoursEl.select(),!e.detail.value)return;let t=e.detail.value;this._actionUpdateInputValue(t)}_handleListBoxFocusChange(e){let t=e.detail.value,n=ja(t);this._actionUpdateInputValue(n)}_handleFocusInput(e){this._inputFocusEl=e.target,this._inputFocusEl.select(),this._inputGroupEl.classList.add(`kuc-base-time-1-25-0__group--focus`)}_handleBlurInput(e){this._inputFocusEl=null;let t=e.relatedTarget;t&&t instanceof HTMLInputElement&&[this._hoursEl,this._minutesEl,this._suffixEl].indexOf(t)>-1||(this._closeListBox(),this._inputGroupEl.classList.remove(`kuc-base-time-1-25-0__group--focus`))}_handleTabKey(e){return e.key===`Tab`}_handleKeyDownInput(e){this._closeListBox(),!this._handleTabKey(e)&&this._handleSupportedKey(e)}_handlePasteInput(e){e.preventDefault()}_handleSupportedKey(e){e.preventDefault();let t=e.key,n;switch(t){case`Enter`:case`ArrowRight`:this._actionSelectNextRange();break;case`ArrowLeft`:this._actionSelectPreviousRange();break;case`ArrowUp`:n=this._computeArrowUpDownValue(1),this._actionUpdateInputValue(n);break;case`ArrowDown`:n=this._computeArrowUpDownValue(-1),this._actionUpdateInputValue(n);break;case`Backspace`:case`Delete`:n=this._computeDeleteValue(),this._actionUpdateInputValue(n);break;default:n=this._computeDefaultKeyValue(t),this._actionUpdateInputValue(n);break}}_actionUpdateInputValue(e){let t=ja(this.value===``?this.value:this._formatKeyDownValue()),n=ja(e);t!==n&&(this.value=n,this._dispatchEventTimeChange(n,t))}_computeDeleteValue(){return this._inputFocusEl===this._minutesEl?this._formatKeyDownValue({minutes:`00`}):this._inputFocusEl===this._hoursEl?this._formatKeyDownValue({hours:`00`}):this._formatKeyDownValue()}_computeArrowUpDownValue(e){return this._inputFocusEl===this._hoursEl?this._computeArrowUpDownHourValue(e):this._inputFocusEl===this._minutesEl?this._computeArrowUpDownMinuteValue(e):this._computeKeyDownSuffixValue()}_computeKeyDownSuffixValue(e){if(!e){let e=this._suffix===la.AM?la.PM:la.AM;return this._formatKeyDownValue({suffix:e})}if([`a`,`A`,`p`,`P`].indexOf(e)===-1)return this._formatKeyDownValue();let t=e===`a`||e===`A`?la.AM:la.PM;return this.value===``&&this._hoursEl.select(),this._formatKeyDownValue({suffix:t})}_computeArrowUpDownHourValue(e){let t=parseInt(this._hours,10)+e;return this.hour12?(t%=12,t=t<=0?12:t):(t%=24,t=t<0?23:t),this._formatKeyDownValue({hours:t.toString()})}_computeArrowUpDownMinuteValue(e){let t=parseInt(this._minutes,10)+e;return t%=60,t=t<0?59:t,this._formatKeyDownValue({minutes:t.toString()})}_computeDefaultKeyValue(e){return/^[0-9]$/i.test(e)?this._computeNumberKeyValue(e):this._inputFocusEl===this._suffixEl?this._computeKeyDownSuffixValue(e):this._formatKeyDownValue()}_computeNumberKeyValue(e){return this._inputFocusEl===this._minutesEl?this._computeNumberKeyValueMinutes(e):this._inputFocusEl===this._hoursEl?this._computeNumberKeyValueHours(e):this._formatKeyDownValue()}_computeNumberKeyValueMinutes(e){let t=F(this._getPreviousMinutes(this._minutes)+e);return this.value===``?(this._hoursEl.select(),this._computeNumberKeyValueHours(e)):this._formatKeyDownValue({minutes:t})}_computeNumberKeyValueHours(e){let t=F(this._getPreviousHours(this._hours,e)+e);return this.value===``?this._formatKeyDownValue({hours:t,minutes:`00`}):this._formatKeyDownValue({hours:t})}_getPreviousMinutes(e){let t;return t=parseInt(e,10)>10?(``+e)[1]:``+e,t=parseInt(t,10)>5?`0`:t,t}_getPreviousHours(e,t){let n;n=parseInt(e,10)>10?(``+e)[1]:``+e;let r=parseInt(n+t,10);return n=this.hour12&&r>12||!this.hour12&&r>=24?`0`:n,n}_actionSelectNextRange(){if(this._inputFocusEl===this._hoursEl){this._minutesEl.select();return}this.hour12&&this._inputFocusEl===this._minutesEl&&this._suffixEl.select()}_actionSelectPreviousRange(){if(this._inputFocusEl===this._suffixEl){this._minutesEl.select();return}this._inputFocusEl===this._minutesEl&&this._hoursEl.select()}_dispatchEventTimeChange(e,t){let n={value:e,oldValue:t};(Ta(e,this.min)<0||Ta(this.max,e)<0)&&(n.error=this._locale.TIME_IS_OUT_OF_VALID_RANGE),B(this,`kuc:base-time-change`,n)}_formatKeyDownValue(e={hours:this._hours,minutes:this._minutes,suffix:this._suffix}){let t=e.hours||this._hours,n=e.minutes||this._minutes,r=e.suffix||this._suffix,i=`${F(t)}:${F(n)}`;return r?`${i} ${r}`:i}async _openListBox(){this._listBoxVisible||(this._doFocusListBox=!1,this._listBoxVisible=!0,await this.updateComplete,this._listboxEl&&(this._listboxEl.showPopover(),this._listBoxMaxWidth=qa(this._listBoxUl).width,Ka({anchorEl:this._inputGroupEl,popoverEl:this._listBoxUl,popoverHeight:this._listBoxMaxHeight,popoverWidth:this._listBoxMaxWidth}),this._attachListeners()))}_attachListeners(){this._detachListeners(),this._scrollTargets=Ja(this._inputGroupEl);for(let e of this._scrollTargets)e.addEventListener(`scroll`,this._boundOnScroll,{passive:!0});window.addEventListener(`resize`,this._schedulePositionOnResize)}_detachListeners(){for(let e of this._scrollTargets)e.removeEventListener(`scroll`,this._boundOnScroll);this._scrollTargets=[],window.removeEventListener(`resize`,this._schedulePositionOnResize)}_closeListBox(){var e;this._doFocusListBox=!1,this._listBoxVisible=!1,(e=this._listboxEl)==null||e.hidePopover(),this._detachListeners()}_getColonTemplate(){return this._hours?D` <span class="kuc-base-time-1-25-0__group__colon">:</span> `:``}_getSuffixTemplate(){return this.hour12?D`
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
        `:``}_getListBoxTemplate(){return this._listBoxVisible?D`
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
        `:``}};q([A({type:String,attribute:`lang`,reflect:!0})],J.prototype,`language`,void 0),q([A({type:String})],J.prototype,`max`,void 0),q([A({type:String})],J.prototype,`min`,void 0),q([A({type:String})],J.prototype,`value`,void 0),q([A({type:Boolean})],J.prototype,`disabled`,void 0),q([A({type:Boolean})],J.prototype,`hour12`,void 0),q([A({type:Number})],J.prototype,`timeStep`,void 0),q([j()],J.prototype,`_listBoxVisible`,void 0),q([j()],J.prototype,`_valueLabel`,void 0),q([j()],J.prototype,`_doFocusListBox`,void 0),q([j()],J.prototype,`_hours`,void 0),q([j()],J.prototype,`_minutes`,void 0),q([j()],J.prototype,`_suffix`,void 0),q([j()],J.prototype,`_inputFocusEl`,void 0),q([M(`.kuc-base-time-1-25-0__group__hours`)],J.prototype,`_hoursEl`,void 0),q([M(`.kuc-base-time-1-25-0__group__minutes`)],J.prototype,`_minutesEl`,void 0),q([M(`.kuc-base-time-1-25-0__group__suffix`)],J.prototype,`_suffixEl`,void 0),q([M(`.kuc-base-time-1-25-0__assistive-text`)],J.prototype,`_toggleEl`,void 0),q([M(`.kuc-base-time-1-25-0__group`)],J.prototype,`_inputGroupEl`,void 0),q([M(`.kuc-base-time-1-25-0__group__listbox`)],J.prototype,`_listboxEl`,void 0),q([M(`.kuc-base-datetime-listbox-1-25-0__listbox`)],J.prototype,`_listBoxUl`,void 0),window.customElements.get(`kuc-base-time-1-25-0`)||(V(ps),window.customElements.define(`kuc-base-time-1-25-0`,J));var ms=`
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
`,hs=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},gs;(()=>{if(gs=window.customElements.get(`kuc-datetime-picker-1-25-0`),gs)return;class e extends z{constructor(e){super(),this.className=``,this.error=``,this.id=``,this.label=``,this.language=`auto`,this.max=``,this.min=``,this.value=``,this.disabled=!1,this.hour12=!1,this.requiredIcon=!1,this.visible=!0,this.timeStep=30,this._dateValue=``,this._timeValue=``,this._previousTimeValue=``,this._previousDateValue=``,this._errorFormat=``,this._errorText=``,this._dateConverted=``,this._changeDateByUI=!1,this._changeTimeByUI=!1,this._inputMax=``,this._inputMin=``,this._timeConverted=``,this._errorInvalidTime=``,this._inputTimeStep=30,this._GUID=H();let t=U(e);Object.assign(this,t)}shouldUpdate(e){return(e.has(`max`)||e.has(`min`))&&!this._checkAndUpdateMaxMinProperty()||e.has(`timeStep`)&&!this._checkAndUpdateTimeStepProperty()?!1:this.value===void 0||this.value===``?!0:typeof this.value!=`string`||(this._dateAndTime=this._getDateTimeValue(this.value),this._dateConverted=$a(this._dateAndTime.date),!(vo(this._dateAndTime.date,this._dateAndTime.time)&&go(this._dateConverted)))?(this.throwErrorAfterUpdateComplete(ha.VALUE),!1):(this._timeConverted=eo(this._dateAndTime.time.slice(0,5)),e.has(`value`)&&(Ta(this._timeConverted,this._inputMin)<0||Ta(this._inputMax,this._timeConverted)<0)?(this.throwErrorAfterUpdateComplete(da),!1):!0)}willUpdate(e){if(this._changeDateByUI||this._changeTimeByUI){this._updateValueChangeByUI();return}this._updateValueWhenSetter()}_checkAndUpdateMaxMinProperty(){let e=this._inputMin,t=this._inputMax;if(this.max===void 0||this.max===``)t=ma;else{if(!mo(this.max))return this.throwErrorAfterUpdateComplete(ha.MAX),!1;t=this.max=eo(this.max)}if(this.min===void 0||this.min===``)e=pa;else{if(!mo(this.min))return this.throwErrorAfterUpdateComplete(ha.MIN),!1;e=this.min=eo(this.min)}return Ta(t,e)<0?(this.throwErrorAfterUpdateComplete(ua),!1):(this._inputMin=e,this._inputMax=t,!0)}_checkAndUpdateTimeStepProperty(){return wo(this.timeStep)?ho(this.timeStep,this._inputMax,this._inputMin)?(this._inputTimeStep=this.timeStep,!0):(this.throwErrorAfterUpdateComplete(ha.TIME_STEP),!1):(this.throwErrorAfterUpdateComplete(fa),!1)}_updateValueChangeByUI(){let e=this._validateDateTimeFormat();this.value=e?this.value:void 0,e&&!this._dateValue&&!this._timeValue&&(this.value=``);let t=!this._dateValue&&this._timeValue,n=this._dateValue&&!this._timeValue;if(t||n){this._errorText=this.error||this._errorFormat||this._errorInvalidTime;return}this._errorText=e?this.error:this._errorFormat||this._errorInvalidTime}_validateDateTimeFormat(){let e=!!this._timeValue&&!this._dateValue,t=!!this._dateValue&&!this._timeValue;return!this._errorFormat&&!this._errorInvalidTime&&!e&&!t}_updateValueWhenSetter(){if(this._errorText=this.error,this.value===``||this.value===void 0){this._previousTimeValue=``,this._errorFormat=``,this._errorInvalidTime=``;return}this._setDateTimeValueSeparate(this._dateAndTime,this._dateConverted),this.value=this._getDateTimeString()}_setDateTimeValueSeparate(e,t){this._dateValue=t||this._dateInput.value,this._timeValue=this._dateValue&&go(t)?eo(e.time.slice(0,5)):this._previousTimeValue}update(e){e.has(`value`)&&(this.value===void 0&&this._setUndefinedValue(),this.value===``&&this._setEmptyValue()),(e.has(`max`)||e.has(`min`)||e.has(`value`))&&this.value!==void 0&&(this._errorInvalidTime=``),super.update(e)}_setUndefinedValue(){if(!this._changeTimeByUI){if(this._errorFormat){if(this._changeDateByUI){this._dateValue=this._dateInput.value;return}this._dateValue=``,this._timeValue=``;return}this._dateValue=this._previousDateValue,this._timeValue=this._previousTimeValue}}_setEmptyValue(){this._dateValue=``,this._timeValue=``,this._previousTimeValue=``,this._previousDateValue=``,this._errorFormat=``,this._errorInvalidTime=``}render(){return D`
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
      `}updated(){this._resetState()}_resetState(){this._previousTimeValue=``,this._previousDateValue=``,this._changeDateByUI=!1,this._changeTimeByUI=!1}_handleDateChange(e){e.stopPropagation(),e.preventDefault(),this._changeDateByUI=!0;let t=this._dateValue;e.detail.error?(this._errorFormat=e.detail.error,this.error=``):(t=e.detail.value,this._errorFormat=``),this._updateDateTimeValue(t,`date`)}_handleTimeChange(e){e.preventDefault(),e.stopPropagation(),this._changeTimeByUI=!0;let t=e.detail.value;e.detail.error?(this._errorInvalidTime=e.detail.error,this.error=``):this._errorInvalidTime=``,this._updateDateTimeValue(t,`time`)}_updateDateTimeValue(e,t){let n=this.value;t===`date`?this._dateValue=e||``:this._timeValue=e,this._previousTimeValue=this._timeValue,this._previousDateValue=this._dateValue;let r=this._errorFormat||this._errorInvalidTime?void 0:this._getDateTimeString(),i=this._errorFormat||this._errorInvalidTime?void 0:r;this.value=i,this._validateDateTimeFormat()&&!this._dateValue&&!this._timeValue&&(this.value=``);let a={value:this.value,oldValue:n,changedPart:t};B(this,`change`,a)}_getDateTimeString(){if(!this._dateValue||!this._timeValue)return;if(!this.value)return`${this._dateValue}T${this._timeValue}:00`;let e=this.value.split(`:`);return e.length===3?`${this._dateValue}T${this._timeValue}:${e[2]}`:`${this._dateValue}T${this._timeValue}:00`}_getDateTimeValue(e){if(e===``||e===void 0)return{date:``,time:``};let t=e.split(`T`),n=t[0],r=t[1];if(e.indexOf(`T`)===e.length-1||t.length>2)return{date:n,time:``};if(!r)return{date:n,time:pa};let[i,a,o]=r.split(`:`);if(i===``||a===``||o===``)return{date:n,time:r};let s=`${i}:${a||`00`}`;return o?{date:n,time:`${s}:${o}`}:{date:n,time:s}}_getLanguage(){let e=[`en`,`ja`,`zh`,`zh-TW`,`es`];return e.indexOf(this.language)===-1?e.indexOf(document.documentElement.lang)===-1?`en`:document.documentElement.lang:this.language}}hs([A({type:String,reflect:!0,attribute:`class`})],e.prototype,`className`,void 0),hs([A({type:String})],e.prototype,`error`,void 0),hs([A({type:String,reflect:!0,attribute:`id`})],e.prototype,`id`,void 0),hs([A({type:String})],e.prototype,`label`,void 0),hs([A({type:String,attribute:`lang`,reflect:!0,converter:Za})],e.prototype,`language`,void 0),hs([A({type:String})],e.prototype,`max`,void 0),hs([A({type:String})],e.prototype,`min`,void 0),hs([A({type:String,hasChanged(e,t){return(e===``||e===void 0)&&e===t?!0:e!==t}})],e.prototype,`value`,void 0),hs([A({type:Boolean})],e.prototype,`disabled`,void 0),hs([A({type:Boolean})],e.prototype,`hour12`,void 0),hs([A({type:Boolean})],e.prototype,`requiredIcon`,void 0),hs([A({type:Boolean,attribute:`hidden`,reflect:!0,converter:L})],e.prototype,`visible`,void 0),hs([A({type:Number})],e.prototype,`timeStep`,void 0),hs([M(`.kuc-base-date-1-25-0__input`)],e.prototype,`_dateInput`,void 0),window.customElements.define(`kuc-datetime-picker-1-25-0`,e),V(ms),gs=e})();var _s=`
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
`,vs=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},ys;(()=>{if(ys=window.customElements.get(`kuc-dialog-1-25-0`),ys)return;class e extends z{constructor(e){super(),this.className=``,this.icon=``,this.id=``,this.title=``,this.content=``,this.footer=``,this.header=``,this.container=document.body,this.footerVisible=!0,this._isOpened=!1,this._triggeredElement=null,this._content=``,this._footer=``,this._header=``,this._GUID=H();let t=U(e);Object.assign(this,t)}_handleFocusFirstDummy(){let e=this._focusableElements[this._focusableElements.length-2];e&&e.focus()}_handleFocusLastDummy(){this._dialogEl.focus()}_handleKeyDownDialog(e){e.key===`Escape`&&(e.preventDefault(),this.close())}_handleClickCloseButton(e){this.close()}_getCloseButtonSvgTemplate(){return O`
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
      `}_getIconTemplate(){switch(this.icon){case`info`:return O`
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
          `;case`success`:return O`
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
          `;case`error`:return O`
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
          `;case`warning`:return O`
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
          `;case`question`:return O`
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
          `;default:return``}}shouldUpdate(e){if(e.has(`container`)){if(this.container===null||this.container===void 0)return this._isOpened&&this._close(),!1;let e=this._isValidContainerElement(),t=!e||!document.contains(this.container);if(this._isOpened&&t&&this._close(),!e)return this.throwErrorAfterUpdateComplete(P.CONTAINER.INVALID),!1}return!0}update(e){e.has(`content`)&&(this.content&&To(this.content)?this._content=Qa(this.content):this._content=this.content),e.has(`footer`)&&(this.footer&&To(this.footer)?this._footer=Qa(this.footer):this._footer=this.footer),(e.has(`header`)||e.has(`title`))&&(this.header!==null&&this.header!==void 0&&this.header!==``?To(this.header)?this._header=Qa(this.header):this._header=this.header:this._header=this.title),super.update(e)}_isValidContainerElement(){return this.container instanceof HTMLElement}open(){if(!this._isValidContainerElement()){document.body.appendChild(this),requestAnimationFrame(()=>{document.body.removeChild(this)}),this.performUpdate();return}this.container.appendChild(this),this.container.classList.add(`kuc--has-dialog`),this.performUpdate(),this.setAttribute(`opened`,``),this._isOpened=!0,this._triggeredElement=document.activeElement,this._dialogEl&&this._dialogEl.focus()}close(){this._close(),B(this,`close`)}_close(){this._isOpened=!1,document.getElementsByTagName(`body`)[0].classList.remove(`kuc--has-dialog`),this.removeAttribute(`opened`),this._triggeredElement instanceof HTMLElement&&this._triggeredElement.focus()}render(){return D`
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
      `}}vs([A({type:String,reflect:!0,attribute:`class`})],e.prototype,`className`,void 0),vs([A({type:String})],e.prototype,`icon`,void 0),vs([A({type:String,reflect:!0,attribute:`id`})],e.prototype,`id`,void 0),vs([A({type:String})],e.prototype,`title`,void 0),vs([A()],e.prototype,`content`,void 0),vs([A()],e.prototype,`footer`,void 0),vs([A()],e.prototype,`header`,void 0),vs([A()],e.prototype,`container`,void 0),vs([A({type:Boolean})],e.prototype,`footerVisible`,void 0),vs([j()],e.prototype,`_isOpened`,void 0),vs([M(`.kuc-dialog-1-25-0__dialog`)],e.prototype,`_dialogEl`,void 0),vs([N(`a[href]:not([disabled]), button:not([disabled]), textarea:not([disabled]), input[type='text']:not([disabled]), input[type='radio']:not([disabled]), input[type='checkbox']:not([disabled]), select:not([disabled]),[tabindex='0']`)],e.prototype,`_focusableElements`,void 0),window.customElements.define(`kuc-dialog-1-25-0`,e),V(_s),ys=e})();var bs=`
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
`,Y=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},xs;(()=>{if(xs=window.customElements.get(`kuc-dropdown-1-25-0`),xs)return;class e extends z{constructor(e){super(),this.className=``,this.error=``,this.id=``,this.label=``,this.value=``,this.selectedIndex=-1,this.disabled=!1,this.requiredIcon=!1,this.visible=!0,this.items=[],this._selectorVisible=!1,this._DISABLED_CLASS=`kuc-dropdown-1-25-0__group__select-menu__item--disabled`,this._hasValueInItems=!1,this._scrollTargets=[],this._GUID=H();let t=U(e);this._handleClickDocument=this._handleClickDocument.bind(this),this._handleScrollMenu=this._handleScrollMenu.bind(this),this._setMenuPosition=this._setMenuPosition.bind(this),this._actionResizeScrollWindow=this._actionResizeScrollWindow.bind(this),this._setInitialValue(t),Object.assign(this,t)}_setInitialValue(e){let t=`value`in e,n=`selectedIndex`in e;!t&&n&&(this.value=this._getValue(e)||``)}_getSelectedLabel(){let e=this.items.filter((e,t)=>this._isCheckedItem(e,t));return e.length===0?``:e[0].label===void 0?e[0].value:e[0].label}_getToggleIconSvgTemplate(){return O`
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
    `}shouldUpdate(e){return e.has(`items`)&&!W(this.items)?(this.throwErrorAfterUpdateComplete(P.ITEMS.IS_NOT_ARRAY),!1):e.has(`value`)&&!_o(this.value)?(this.throwErrorAfterUpdateComplete(P.VALUE.IS_NOT_STRING),!1):e.has(`selectedIndex`)&&!wo(this.selectedIndex)?(this.throwErrorAfterUpdateComplete(P.SELECTED_INDEX.IS_NOT_NUMBER),!1):!0}willUpdate(e){if((e.has(`items`)||e.has(`value`))&&(this._hasValueInItems=this.items.some(e=>e.value===this.value)),e.has(`value`)){if(this.value!==``||this._hasValueInItems)return;this.selectedIndex=-1}}update(e){(e.has(`items`)||e.has(`value`)||e.has(`selectedIndex`))&&(this.selectedIndex=this._getSelectedIndex(),this.value=this._getValue({items:this.items,selectedIndex:this.selectedIndex})||``),super.update(e)}_getSelectedIndex(){if(!this.value&&!this._hasValueInItems)return this.items[this.selectedIndex]?this.selectedIndex:-1;let e=this.items.findIndex(e=>e.value===this.value);if(e===-1)return-1;let t=this.items.findIndex((e,t)=>e.value===this.value&&t===this.selectedIndex);return t>-1?t:e}_getValue(e){let t=(e.items||[])[e.selectedIndex===0||e.selectedIndex?e.selectedIndex:-1];return t?t.value:``}render(){return D`
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
      `}async updated(){await this.updateComplete,this._selectorVisible&&this._scrollToView()}_handleMouseDownDropdownItem(e){let t=this._getItemElementWhenMouseOverDown(e.target),n=t.getAttribute(`value`),r=t.dataset.index||`0`;this._actionUpdateValue(n,r)}_handleMouseOverDropdownItem(e){let t=this._getItemElementWhenMouseOverDown(e.target);this._actionHighlightMenuItem(t)}_handleMouseLeaveMenu(){this._actionClearAllHighlightMenuItem()}_handleMouseDownMenu(e){e.preventDefault()}_handleMouseDownDropdownToggle(e){e.preventDefault()}_handleMouseUpDropdownToggle(e){e.preventDefault()}_handleClickDropdownToggle(e){e.stopPropagation(),this._actionToggleMenu()}_handleClickDocument(e){(e.target===this._buttonEl||this._buttonEl.contains(e.target))&&e.stopPropagation(),!Array.from(this._disabledItemsEl).some(t=>t===e.target||t.contains(e.target))&&this._actionHideMenu()}_handleScrollMenu(){this._previousScrollTop=this._menuEl.scrollTop}_handleKeyDownDropdownToggle(e){switch(e.key){case`Up`:case`ArrowUp`:if(e.preventDefault(),this.items.length===0)break;if(!this._selectorVisible){this._actionShowMenu();break}this._actionHighlightPrevMenuItem();break;case`Tab`:this._selectorVisible&&this._actionHideMenu();break;case`Down`:case`ArrowDown`:if(e.preventDefault(),this.items.length===0)break;if(!this._selectorVisible){this._actionShowMenu();break}this._actionHighlightNextMenuItem();break;case`Enter`:{if(e.preventDefault(),this.items.length===0)break;if(!this._selectorVisible){this._actionShowMenu();break}let{value:t,selectedIndex:n}=this._getInfoHighlightItem();if(t===null)break;this._actionUpdateValue(t,n),this._actionHideMenu();break}case`Escape`:e.preventDefault(),this._selectorVisible&&e.stopPropagation(),this._actionHideMenu();break;case`Home`:this._selectorVisible&&(e.preventDefault(),this._actionHighlightFirstMenuItem());break;case`End`:this._selectorVisible&&(e.preventDefault(),this._actionHighlightLastMenuItem());break;default:break}}_getInfoHighlightItem(){let e=this._highlightItemEl;return e===null?{value:null,selectedIndex:`-1`}:{value:e.getAttribute(`value`),selectedIndex:e.dataset.index||`0`}}_actionShowMenu(){this._buttonEl.focus(),this.items.length!==0&&(this._selectorVisible=!0,this._menuEl.showPopover(),!(!this._menuEl||!this._buttonEl)&&(this._setMenuPosition(),this._attachListeners(),!(this._selectedItemEl===null||this._selectedItemEl.classList.contains(this._DISABLED_CLASS))&&this._setHighlightAndActiveDescendantMenu(this._selectedItemEl)))}_attachListeners(){this._detachListeners(),this._scrollTargets=this._getScrollableAncestors(this._buttonEl);for(let e of this._scrollTargets)e.addEventListener(`scroll`,this._setMenuPosition,{passive:!0});this._menuEl.addEventListener(`scroll`,this._handleScrollMenu),window.addEventListener(`resize`,this._actionResizeScrollWindow),document.addEventListener(`click`,this._handleClickDocument,{capture:!0})}_detachListeners(){for(let e of this._scrollTargets)e.removeEventListener(`scroll`,this._setMenuPosition);this._scrollTargets=[],this._menuEl&&this._menuEl.removeEventListener(`scroll`,this._handleScrollMenu),window.removeEventListener(`resize`,this._actionResizeScrollWindow),document.removeEventListener(`click`,this._handleClickDocument,{capture:!0})}disconnectedCallback(){this._detachListeners(),super.disconnectedCallback&&super.disconnectedCallback()}_actionHideMenu(){this._selectorVisible=!1,this._menuEl.hidePopover(),this._detachListeners(),this._actionRemoveActiveDescendant()}_getScrollableAncestors(e){let t=[],n=e.parentElement,r=/(auto|scroll|overlay)/;for(;n&&n!==document.body&&n!==document.documentElement;){let e=getComputedStyle(n);(r.test(e.overflowY)||r.test(e.overflowX))&&t.push(n),n=n.parentElement}return t.push(window),t}_actionToggleMenu(){if(this.items.length!==0){if(this._selectorVisible){this._actionHideMenu();return}this._actionShowMenu()}}_actionHighlightFirstMenuItem(){let e=this._firstItemEl,t=!1;for(let n=0;n<this.items.length&&(t=e.classList.contains(this._DISABLED_CLASS),t);n++)e=e.nextElementSibling;!t&&this._setHighlightAndActiveDescendantMenu(e)}_actionHighlightLastMenuItem(){let e=this._lastItemEl,t=!1;for(let n=0;n<this.items.length&&(t=e.classList.contains(this._DISABLED_CLASS),t);n++)e=e.previousElementSibling;!t&&this._setHighlightAndActiveDescendantMenu(e)}_actionHighlightPrevMenuItem(){let e=null;this._highlightItemEl!==null&&(e=this._highlightItemEl.previousElementSibling),e===null&&(e=this._lastItemEl);let t=!1;for(let n=0;n<this.items.length&&(t=e.classList.contains(this._DISABLED_CLASS),t);n++)e=e.previousElementSibling,e===null&&(e=this._lastItemEl);!t&&this._setHighlightAndActiveDescendantMenu(e)}_actionHighlightNextMenuItem(){let e=null;this._highlightItemEl!==null&&(e=this._highlightItemEl.nextElementSibling),e===null&&(e=this._firstItemEl);let t=!1;for(let n=0;n<this.items.length&&(t=e.classList.contains(this._DISABLED_CLASS),t);n++)e=e.nextElementSibling,e===null&&(e=this._firstItemEl);!t&&this._setHighlightAndActiveDescendantMenu(e)}_actionClearAllHighlightMenuItem(){this._itemsEl.forEach(e=>{e.classList.remove(`kuc-dropdown-1-25-0__group__select-menu__highlight`)}),this._actionRemoveActiveDescendant()}_setHighlightAndActiveDescendantMenu(e){this._actionHighlightMenuItem(e),this._actionSetActiveDescendant(e.id),this._scrollToView()}_actionHighlightMenuItem(e){this._actionClearAllHighlightMenuItem(),e.classList.add(`kuc-dropdown-1-25-0__group__select-menu__highlight`)}_actionUpdateValue(e,t){let n=parseInt(t,10);if(this.value===e&&this.selectedIndex===n)return;let r={oldValue:this.value,value:e};this.value=e,this.selectedIndex=n,B(this,`change`,r)}_actionSetActiveDescendant(e){e!==void 0&&this._buttonEl!==null&&this._buttonEl.setAttribute(`aria-activedescendant`,e)}_actionRemoveActiveDescendant(){this._buttonEl.removeAttribute(`aria-activedescendant`)}_setMenuPositionAboveOrBelow(e,t){let n=t.getBoundingClientRect(),r=n.top,i=window.innerHeight;window.innerHeight>document.documentElement.clientHeight&&(i=document.documentElement.clientHeight);let a=i-n.bottom;e.style.height=`auto`,e.style.maxHeight=`none`,e.style.top=`auto`,e.style.bottom=`auto`;let o=e.getBoundingClientRect().height;e.style.maxHeight=`var(--kuc-dropdown-menu-max-height, none)`;let s=getComputedStyle(e).maxHeight,c;s&&s!==`none`&&(c=parseFloat(s));let l=c?Math.min(o,c):o,u,d;a>=l?(u=n.bottom,d=l):r>=l?(u=n.top-l,d=l):a>=r?(u=n.bottom,d=a):(u=n.top-r,d=r),e.style.position=`fixed`;let f=`${u}px`;e.style.top!==f&&(e.style.top=f);let p=`${d}px`;e.style.height!==p&&(e.style.height=p),e.style.overflowY=`auto`}_setMenuPositionLeftOrRight(e,t){e.style.right=`auto`;let n=e.offsetWidth,r=t.getBoundingClientRect(),i=window.innerWidth;window.innerWidth>document.documentElement.clientWidth&&(i=document.documentElement.clientWidth);let a=r.left;i<r.right&&i>r.left&&(a=i-n);let o=`${a}px`;e.style.left!==o&&(e.style.left=o)}_setMenuPosition(){if(!this._menuEl||!this._buttonEl){this._detachListeners();return}this._setMenuPositionAboveOrBelow(this._menuEl,this._buttonEl),this._setMenuPositionLeftOrRight(this._menuEl,this._buttonEl),this._menuEl&&this._previousScrollTop&&(this._menuEl.scrollTop=this._previousScrollTop)}_scrollToView(){if(!this._highlightItemEl||!this._menuEl)return;let e=this._menuEl.getBoundingClientRect(),t=this._highlightItemEl.getBoundingClientRect();t.top<e.top&&(this._menuEl.scrollTop-=e.top-t.top),e.bottom<t.bottom&&(this._menuEl.scrollTop+=t.bottom-e.bottom)}_actionResizeScrollWindow(){this._timeoutID||!this._selectorVisible||(this._timeoutID=window.setTimeout(()=>{this._timeoutID=null,this._setMenuPosition()},50))}_isCheckedItem(e,t){return this.value?e.value===this.value&&this.selectedIndex===t:this.selectedIndex===t}_getItemTemplate(e,t){let n=this._isCheckedItem(e,t);return D`
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
      `}_getDropdownIconSvgTemplate(e,t){return O`
      ${e?O`<svg
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
        </svg>`:``}`}_getItemElementWhenMouseOverDown(e){return e.classList.value.split(` `).includes(`kuc-dropdown-1-25-0__group__select-menu__item`)?e:this._getItemElementWhenMouseOverDown(e.parentElement)}}Y([A({type:String,reflect:!0,attribute:`class`})],e.prototype,`className`,void 0),Y([A({type:String})],e.prototype,`error`,void 0),Y([A({type:String,reflect:!0,attribute:`id`})],e.prototype,`id`,void 0),Y([A({type:String})],e.prototype,`label`,void 0),Y([A({type:String})],e.prototype,`value`,void 0),Y([A({type:Number})],e.prototype,`selectedIndex`,void 0),Y([A({type:Boolean})],e.prototype,`disabled`,void 0),Y([A({type:Boolean})],e.prototype,`requiredIcon`,void 0),Y([A({type:Boolean,attribute:`hidden`,reflect:!0,converter:L})],e.prototype,`visible`,void 0),Y([A({type:Array})],e.prototype,`items`,void 0),Y([j()],e.prototype,`_selectorVisible`,void 0),Y([M(`.kuc-dropdown-1-25-0__group__select-menu`)],e.prototype,`_menuEl`,void 0),Y([N(`.kuc-dropdown-1-25-0__group__select-menu__item`)],e.prototype,`_itemsEl`,void 0),Y([M(`button.kuc-dropdown-1-25-0__group__toggle`)],e.prototype,`_buttonEl`,void 0),Y([M(`.kuc-dropdown-1-25-0__group__select-menu__item`)],e.prototype,`_firstItemEl`,void 0),Y([M(`.kuc-dropdown-1-25-0__group__select-menu__item:last-child`)],e.prototype,`_lastItemEl`,void 0),Y([M(`.kuc-dropdown-1-25-0__group__select-menu__item[aria-selected=true]`)],e.prototype,`_selectedItemEl`,void 0),Y([M(`.kuc-dropdown-1-25-0__group__select-menu__highlight`)],e.prototype,`_highlightItemEl`,void 0),Y([N(`.kuc-dropdown-1-25-0__group__select-menu__item--disabled`)],e.prototype,`_disabledItemsEl`,void 0),window.customElements.define(`kuc-dropdown-1-25-0`,e),V(bs),xs=e})();var Ss=`
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
`,Cs=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},ws=517,Ts;(()=>{if(Ts=window.customElements.get(`kuc-field-group-1-25-0`),Ts)return;class e extends z{constructor(e){super(),this.className=``,this.content=``,this.id=``,this.label=``,this.disabled=!1,this.expanded=!1,this.visible=!0,this._content=``,this._GUID=H();let t=U(e);Object.assign(this,t)}update(e){e.has(`content`)&&(this.content&&To(this.content)?this._content=Qa(this.content):this._content=this.content),super.update(e)}render(){return D`
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
      `}updated(e){e.has(`content`)&&(this._groupEl.style.minWidth=`517px`,requestAnimationFrame(()=>{this._updateContainerWidth()}))}_updateContainerWidth(){if(!this._bodyEl)return;let e=this._bodyEl.hasAttribute(`hidden`);e&&this._bodyEl.removeAttribute(`hidden`);let t=this._bodyEl.offsetWidth;e&&this._bodyEl.setAttribute(`hidden`,``),!(t<=ws)&&(this._groupEl.style.minWidth=t+`px`)}_getSvgTemplate(){return this.expanded?D`<svg
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
          </svg>`:D`<svg
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
          </svg> `}_handleChangeBody(e){e.stopPropagation()}_handleKeyDownButton(e){e.key!==`Tab`&&(e.preventDefault(),(e.key===`Enter`||e.key===` `)&&this._handleClickButton(e))}_handleClickButton(e){if(e.target!==document.activeElement&&this._toggle.focus(),this.expanded){let e=this._bodyEl.getBoundingClientRect().width;e>ws&&(this._groupEl.style.minWidth=e+`px`)}else this._groupEl.style.minWidth=`517px`;this.expanded=!this.expanded;let t={expanded:this.expanded};B(this,`change`,t)}}Cs([A({type:String,reflect:!0,attribute:`class`})],e.prototype,`className`,void 0),Cs([A()],e.prototype,`content`,void 0),Cs([A({type:String,reflect:!0,attribute:`id`})],e.prototype,`id`,void 0),Cs([A({type:String})],e.prototype,`label`,void 0),Cs([A({type:Boolean})],e.prototype,`disabled`,void 0),Cs([A({type:Boolean})],e.prototype,`expanded`,void 0),Cs([A({type:Boolean,attribute:`hidden`,reflect:!0,converter:L})],e.prototype,`visible`,void 0),Cs([M(`.kuc-field-group-1-25-0__group`)],e.prototype,`_groupEl`,void 0),Cs([M(`.kuc-field-group-1-25-0__group__body`)],e.prototype,`_bodyEl`,void 0),Cs([M(`.kuc-field-group-1-25-0__group__toggle`)],e.prototype,`_toggle`,void 0),window.customElements.define(`kuc-field-group-1-25-0`,e),V(Ss),Ts=e})();var Es=`
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
`,Ds=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},Os;(()=>{if(Os=window.customElements.get(`kuc-multi-choice-1-25-0`),Os)return;class e extends z{constructor(e){super(),this.className=``,this.error=``,this.id=``,this.label=``,this.disabled=!1,this.requiredIcon=!1,this.visible=!0,this.items=[],this.selectedIndex=[],this.value=[],this._valueMapping={},this._DISABLED_CLASS=`kuc-multi-choice-1-25-0__group__menu__item--disabled`,this._GUID=H();let t=U(e);this._setInitialValue(t),Object.assign(this,t)}_setInitialValue(e){let t=`value`in e,n=`selectedIndex`in e,r=e.selectedIndex||[];if(!t&&n){if(!W(r))return;let t=this._getValueMapping(e);this.value=this._getValidValue(t,r)}}shouldUpdate(e){return e.has(`items`)&&!W(this.items)?(this.throwErrorAfterUpdateComplete(P.ITEMS.IS_NOT_ARRAY),!1):e.has(`value`)&&!W(this.value)?(this.throwErrorAfterUpdateComplete(P.VALUE.IS_NOT_ARRAY),!1):e.has(`selectedIndex`)&&!W(this.selectedIndex)?(this.throwErrorAfterUpdateComplete(P.SELECTED_INDEX.IS_NOT_ARRAY),!1):!0}willUpdate(e){if(e.has(`value`)){if(this.value.length>0)return;this.selectedIndex=[]}}update(e){(e.has(`items`)||e.has(`value`)||e.has(`selectedIndex`))&&(this._valueMapping=this._getValueMapping({items:this.items,value:this.value,selectedIndex:this.selectedIndex}),this._setValueAndSelectedIndex()),super.update(e)}render(){return D`
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
      `}_getValueMapping(e){let t=e.items||[],n=e.value||[],r=e.selectedIndex||[],i=t.map(e=>e.value||``),a=Object.assign({},i),o={};if(n.length===0){let e=this._getValidValue(a,r);return r.forEach((t,n)=>o[t]=e[n]),o}return this._getValidSelectedIndex(a).forEach((e,t)=>o[e]=n[t]),o}_getValidValue(e,t){return t.filter(t=>e[t]).map(t=>e[t])}_getValidSelectedIndex(e){let t=[];for(let n=0;n<this.value.length;n++){let r=this.selectedIndex[n];if(e[r]===this.value[n]){t.push(r);continue}let i=this.items.findIndex(e=>e.value===this.value[n]);t.push(i)}return t}_setValueAndSelectedIndex(){this.value=Object.values(this._valueMapping),this.selectedIndex=Object.keys(this._valueMapping).map(e=>parseInt(e,10))}_handleMouseDownMultiChoiceItem(e){if(this.disabled)return;let t=e.target,n=t.getAttribute(`value`),r=t.dataset.index||`0`;this._handleChangeValue(n,r)}_handleMouseOverMultiChoiceItem(e){if(this.disabled)return;this._itemsEl.forEach(e=>{e.classList.contains(`kuc-multi-choice-1-25-0__group__menu__highlight`)&&e.classList.remove(`kuc-multi-choice-1-25-0__group__menu__highlight`)});let t=e.currentTarget;t.classList.add(`kuc-multi-choice-1-25-0__group__menu__highlight`),this._setActiveDescendant(t.id)}_handleMouseLeaveMultiChoiceItem(e){this.disabled||(e.currentTarget.classList.remove(`kuc-multi-choice-1-25-0__group__menu__highlight`),this._setActiveDescendant())}_handleKeyDownMultiChoice(e){if(!this.disabled)switch(e.key){case`Up`:case`ArrowUp`:if(e.preventDefault(),this.items.length===0)break;this._actionHighlightPrevMenuItem();break;case`Down`:case`ArrowDown`:if(e.preventDefault(),this.items.length===0)break;this._actionHighlightNextMenuItem();break;case`Spacebar`:case` `:e.preventDefault(),this._actionUpdateValue();break;default:break}}_actionHighlightPrevMenuItem(){let e=null;this._highlightItemEl!==null&&(e=this._highlightItemEl.previousElementSibling),e===null&&(e=this._lastItemEl,this._highlightItemEl===null&&(e=this._firstItemEl));let t=!1;this._actionClearAllHighlightMenuItem();for(let n=0;n<this._itemsEl.length&&(t=e.classList.contains(this._DISABLED_CLASS),t);n++)e=e.previousElementSibling,e===null&&(e=this._lastItemEl);t||(e.classList.add(`kuc-multi-choice-1-25-0__group__menu__highlight`),this._setActiveDescendant(e.id))}_actionHighlightNextMenuItem(){let e=null;this._highlightItemEl!==null&&(e=this._highlightItemEl.nextElementSibling),e===null&&(e=this._firstItemEl);let t=!1;this._actionClearAllHighlightMenuItem();for(let n=0;n<this._itemsEl.length&&(t=e.classList.contains(this._DISABLED_CLASS),t);n++)e=e.nextElementSibling,e===null&&(e=this._firstItemEl);t||(e.classList.add(`kuc-multi-choice-1-25-0__group__menu__highlight`),this._setActiveDescendant(e.id))}_actionClearAllHighlightMenuItem(){this._itemsEl.forEach(e=>{e.classList.remove(`kuc-multi-choice-1-25-0__group__menu__highlight`)})}_actionUpdateValue(){this._itemsEl.forEach(e=>{if(e.classList.contains(`kuc-multi-choice-1-25-0__group__menu__highlight`)){let t=e.getAttribute(`value`),n=e.dataset.index||`0`;this._handleChangeValue(t,n)}})}_getMultiChoiceCheckedIconSvgTemplate(e,t){return O`
        ${t?O`<svg
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
          </svg>`:``}`}_isCheckedItem(e,t){let n=Object.values(this._valueMapping),r=Object.keys(this._valueMapping);return n.filter((n,i)=>n===e.value&&t===parseInt(r[i],10)).length>0}_getMenuItemTemplate(e,t){let n=this._isCheckedItem(e,t),r=e.disabled||this.disabled;return D`
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
      `}_setActiveDescendant(e){e!==void 0&&this._menuEl!==null?this._menuEl.setAttribute(`aria-activedescendant`,e):this._menuEl.removeAttribute(`aria-activedescendant`)}_handleChangeValue(e,t){let n=this.value?[...this.value]:this.value,r=this._getNewValueMapping(e,t),i=this.items.map(e=>e.value),a=Object.values(r).filter(e=>i.indexOf(e)>-1);if(a===n)return;let o=Object.keys(r).map(e=>parseInt(e,10));this.value=a,this.selectedIndex=o;let s={oldValue:n,value:a};B(this,`change`,s)}_getNewValueMapping(e,t){let n=parseInt(t,10),r=Object.keys(this._valueMapping),i={...this._valueMapping};return r.indexOf(t)>-1?(delete i[n],i):(i[n]=e,i)}}Ds([A({type:String,reflect:!0,attribute:`class`})],e.prototype,`className`,void 0),Ds([A({type:String})],e.prototype,`error`,void 0),Ds([A({type:String,reflect:!0,attribute:`id`})],e.prototype,`id`,void 0),Ds([A({type:String})],e.prototype,`label`,void 0),Ds([A({type:Boolean})],e.prototype,`disabled`,void 0),Ds([A({type:Boolean})],e.prototype,`requiredIcon`,void 0),Ds([A({type:Boolean,attribute:`hidden`,reflect:!0,converter:L})],e.prototype,`visible`,void 0),Ds([A({type:Array})],e.prototype,`items`,void 0),Ds([A({type:Array})],e.prototype,`selectedIndex`,void 0),Ds([A({type:Array})],e.prototype,`value`,void 0),Ds([M(`.kuc-multi-choice-1-25-0__group__menu`)],e.prototype,`_menuEl`,void 0),Ds([N(`.kuc-multi-choice-1-25-0__group__menu__item`)],e.prototype,`_itemsEl`,void 0),Ds([M(`.kuc-multi-choice-1-25-0__group__menu__item`)],e.prototype,`_firstItemEl`,void 0),Ds([M(`.kuc-multi-choice-1-25-0__group__menu__item:last-child`)],e.prototype,`_lastItemEl`,void 0),Ds([M(`.kuc-multi-choice-1-25-0__group__menu__highlight`)],e.prototype,`_highlightItemEl`,void 0),Ds([j()],e.prototype,`_valueMapping`,void 0),window.customElements.define(`kuc-multi-choice-1-25-0`,e),V(Es),Os=e})();var ks=`
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
`,As=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},js;(()=>{if(js=window.customElements.get(`kuc-notification-1-25-0`),js)return;class e extends z{constructor(e){super(),this.className=``,this.id=``,this.text=``,this.type=`danger`,this.duration=-1,this.container=document.body,this.content=``,this._isOpened=!1,this._content=``;let t=U(e);Object.assign(this,t)}shouldUpdate(e){if(e.has(`container`)){if(this.container===null||this.container===void 0)return this._isOpened&&this._close(),!1;let e=this._isValidContainerElement(),t=!e||!document.contains(this.container);if(this._isOpened&&t&&this._close(),!e)return this.throwErrorAfterUpdateComplete(P.CONTAINER.INVALID),!1}return!0}willUpdate(e){(e.has(`content`)||e.has(`text`))&&(this.content!==null&&this.content!==void 0&&this.content!==``?To(this.content)?this._content=D`<div
              class="kuc-notification-1-25-0__notification__title--html"
            >
              ${Qa(this.content)}
            </div>`:this._content=this.content:this._content=this.text)}_isValidContainerElement(){return this.container instanceof HTMLElement}_handleClickCloseButton(e){this.close()}_getCloseButtonColorType(){switch(this.type){case`info`:case`success`:return this.type;default:return`danger`}}_getCloseButtonSvgTemplate(){return O`
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
      `}_setAutoCloseTimer(){this._clearAutoCloseTimer(),!(!Number.isFinite(this.duration)||this.duration<0)&&(this._timeoutID=window.setTimeout(()=>{this.close()},this.duration))}_clearAutoCloseTimer(){this._timeoutID&&window.clearTimeout(this._timeoutID)}open(){if(!this._isValidContainerElement()){document.body.appendChild(this),requestAnimationFrame(()=>{document.body.removeChild(this)}),this.performUpdate();return}this.container.appendChild(this),this.performUpdate(),this.classList.remove(`kuc-notification-fadeout-1-25-0`),this.classList.add(`kuc-notification-fadein-1-25-0`),this._isOpened=!0,this._setAutoCloseTimer()}_close(){this._isOpened=!1,this.classList.remove(`kuc-notification-fadein-1-25-0`),this.classList.add(`kuc-notification-fadeout-1-25-0`),this._clearAutoCloseTimer()}close(){this._close(),B(this,`close`)}render(){return D`
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
      `}}As([A({type:String,reflect:!0,attribute:`class`})],e.prototype,`className`,void 0),As([A({type:String,reflect:!0,attribute:`id`})],e.prototype,`id`,void 0),As([A({type:String})],e.prototype,`text`,void 0),As([A({type:String})],e.prototype,`type`,void 0),As([A({type:Number})],e.prototype,`duration`,void 0),As([A()],e.prototype,`container`,void 0),As([A()],e.prototype,`content`,void 0),As([j()],e.prototype,`_isOpened`,void 0),window.customElements.define(`kuc-notification-1-25-0`,e),V(ks),js=e})();var Ms=js,Ns=`
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
`,Ps=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},Fs;(()=>{if(Fs=window.customElements.get(`kuc-radio-button-1-25-0`),Fs)return;class e extends z{constructor(e){super(),this.className=``,this.error=``,this.id=``,this.itemLayout=`horizontal`,this.label=``,this.value=``,this.selectedIndex=-1,this.borderVisible=!0,this.disabled=!1,this.requiredIcon=!1,this.visible=!0,this.items=[],this._GUID=H();let t=U(e);this._setInitialValue(t),Object.assign(this,t)}_setInitialValue(e){let t=`value`in e,n=`selectedIndex`in e;!t&&n&&(this.value=this._getValue(e)||``)}shouldUpdate(e){return e.has(`items`)&&!W(this.items)?(this.throwErrorAfterUpdateComplete(P.ITEMS.IS_NOT_ARRAY),!1):e.has(`value`)&&!_o(this.value)?(this.throwErrorAfterUpdateComplete(P.VALUE.IS_NOT_STRING),!1):e.has(`selectedIndex`)&&!wo(this.selectedIndex)?(this.throwErrorAfterUpdateComplete(P.SELECTED_INDEX.IS_NOT_NUMBER),!1):!0}_findItemToFocus(){let e=-1;for(let t=0;t<this.items.length;t++){let n=this.items[t];if(!n.disabled){if(this.selectedIndex===t&&n.value===this.value){e=t;continue}e===-1&&(e=t)}}return e}willUpdate(e){if(e.has(`value`)){if(this.value!==``)return;this.selectedIndex=-1}}_handleChangeInput(e){e.stopPropagation();let t=e.target,n=t.value,r=t.dataset.index||`0`,i=parseInt(r,10);if(this.value===n&&this.selectedIndex===i)return;let a={oldValue:this.value,value:n};this.value=n,this.selectedIndex=i,B(this,`change`,a)}_handleFocusInput(e){e.target.parentNode.setAttribute(`focused`,``)}_handleBlurInput(e){e.target.parentNode.removeAttribute(`focused`)}_getRadioIconSvgTemplate(e,t){return O`
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
      ${t?O`<circle cx="10.5" cy="10.5" r="6.5" fill="${e?`#e3e7e8`:`#3498db`}"/>`:``}
    </svg>
  `}_isCheckedItem(e,t){return this.value?e.value===this.value&&this.selectedIndex===t:this.selectedIndex===t}_getItemTemplate(e,t){let n=this._isCheckedItem(e,t),r=e.disabled||this.disabled,i=e.value===void 0?``:e.value,a=t===this._findItemToFocus()?`0`:`-1`;return D`
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
      `}update(e){(e.has(`items`)||e.has(`value`)||e.has(`selectedIndex`))&&(this.selectedIndex=this._getSelectedIndex(),this.value=this._getValue({items:this.items,selectedIndex:this.selectedIndex})||``),super.update(e)}render(){return D`
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
      `}updated(){this._inputEls.forEach((e,t)=>{e.checked=this.value===e.value&&t===this.selectedIndex})}_getSelectedIndex(){if(!this.value)return this.items[this.selectedIndex]?this.selectedIndex:-1;let e=this.items.findIndex(e=>e.value===this.value);if(e===-1)return-1;let t=this.items.findIndex((e,t)=>e.value===this.value&&t===this.selectedIndex);return t>-1?t:e}_getValue(e){let t=(e.items||[])[e.selectedIndex===0||e.selectedIndex?e.selectedIndex:-1];return t?t.value:``}}Ps([A({type:String,reflect:!0,attribute:`class`})],e.prototype,`className`,void 0),Ps([A({type:String})],e.prototype,`error`,void 0),Ps([A({type:String,reflect:!0,attribute:`id`})],e.prototype,`id`,void 0),Ps([A({type:String})],e.prototype,`itemLayout`,void 0),Ps([A({type:String})],e.prototype,`label`,void 0),Ps([A({type:String})],e.prototype,`value`,void 0),Ps([A({type:Number})],e.prototype,`selectedIndex`,void 0),Ps([A({type:Boolean})],e.prototype,`borderVisible`,void 0),Ps([A({type:Boolean})],e.prototype,`disabled`,void 0),Ps([A({type:Boolean})],e.prototype,`requiredIcon`,void 0),Ps([A({type:Boolean,attribute:`hidden`,reflect:!0,converter:L})],e.prototype,`visible`,void 0),Ps([A({type:Array})],e.prototype,`items`,void 0),Ps([N(`.kuc-radio-button-1-25-0__group__select-menu__item__input`)],e.prototype,`_inputEls`,void 0),window.customElements.define(`kuc-radio-button-1-25-0`,e),V(Ns),Fs=e})();var Is=`
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
`,Ls=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},Rs;(()=>{if(Rs=window.customElements.get(`kuc-base-pagination-1-25-0`),Rs)return;class e extends z{constructor(){super(...arguments),this.pagePosition=1,this.rowsPerPage=5,this.total=1,this.isNext=!0,this.isPrev=!0,this.visible=!0}render(){return D`
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
      `}_handleClickPrevButton(e){e.stopPropagation(),B(this,`kuc:pagination-click-prev`)}_handleFocusPrevButton(){this._prevButtonEl.classList.add(`kuc-base-pagination-1-25-0__group__pager--focus`)}_handleBlurPrevButton(){this._prevButtonEl.classList.remove(`kuc-base-pagination-1-25-0__group__pager--focus`)}_handleMouseOverPrevButton(){this._prevButtonEl.classList.add(`kuc-base-pagination-1-25-0__group__pager--horver`)}_handleMouseLeavePrevButton(){this._prevButtonEl.classList.remove(`kuc-base-pagination-1-25-0__group__pager--horver`)}_handleClickNextButton(e){e.stopPropagation(),B(this,`kuc:pagination-click-next`)}_handleFocusNextButton(){this._nextButtonEl.classList.add(`kuc-base-pagination-1-25-0__group__pager--focus`)}_handleBlurNextButton(){this._nextButtonEl.classList.remove(`kuc-base-pagination-1-25-0__group__pager--focus`)}_handleMouseOverNextButton(){this._nextButtonEl.classList.add(`kuc-base-pagination-1-25-0__group__pager--horver`)}_handleMouseLeaveNextButton(){this._nextButtonEl.classList.remove(`kuc-base-pagination-1-25-0__group__pager--horver`)}_getPrevButtonSvgTemplate(){return O`
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
      `}_getNextButtonSvgTemplate(){return O`
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
      `}_getCurrentPageNumberTemplate(){let e=this._createCurrentPageInfo();return D`<span class="kuc-base-pagination-1-25-0__group__pager-current"
        >${`${e.firstNum} - ${e.lastNum} / ${this.total}`}</span
      >`}_createCurrentPageInfo(){let e=(this.pagePosition-1)*this.rowsPerPage+1,t=this.pagePosition*this.rowsPerPage;return t=t>this.total?this.total:t,{firstNum:e,lastNum:t}}}Ls([A({type:Number})],e.prototype,`pagePosition`,void 0),Ls([A({type:Number})],e.prototype,`rowsPerPage`,void 0),Ls([A({type:Number})],e.prototype,`total`,void 0),Ls([A({type:Boolean})],e.prototype,`isNext`,void 0),Ls([A({type:Boolean})],e.prototype,`isPrev`,void 0),Ls([A({type:Boolean,attribute:`hidden`,reflect:!0,converter:L})],e.prototype,`visible`,void 0),Ls([M(`.kuc-base-pagination-1-25-0__group__pager-prev`)],e.prototype,`_prevButtonEl`,void 0),Ls([M(`.kuc-base-pagination-1-25-0__group__pager-next`)],e.prototype,`_nextButtonEl`,void 0),window.customElements.define(`kuc-base-pagination-1-25-0`,e),V(Is),Rs=e})();var zs=`
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
`,Bs=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},Vs;(()=>{if(Vs=window.customElements.get(`kuc-readonly-table-1-25-0`),Vs)return;class e extends z{constructor(e){if(super(),this.className=``,this.id=``,this.label=``,this.columns=[],this.data=[],this.pagination=!0,this.rowsPerPage=5,this.visible=!0,this._pagePosition=1,this._columnOrder=[],this._sortField=null,this._sortDirection=null,!e)return;let t=U(e);Object.assign(this,t)}shouldUpdate(e){return e.has(`columns`)&&!W(this.columns)?(this.throwErrorAfterUpdateComplete(P.COLUMNS.IS_NOT_ARRAY),!1):e.has(`data`)&&!W(this.data)?(this.throwErrorAfterUpdateComplete(P.DATA.IS_NOT_ARRAY),!1):e.has(`rowsPerPage`)&&!bo(this.rowsPerPage)?(this.throwErrorAfterUpdateComplete(P.ROWS_PER_PAGE.INVALID),!1):!0}willUpdate(e){e.has(`columns`)&&(this._columnOrder=[],this.columns.map(e=>this._columnOrder.push(e.field?e.field:``))),e.has(`rowsPerPage`)&&(this.rowsPerPage=Math.round(this.rowsPerPage))}render(){let e=this._createDisplayData();return!this.columns||this.columns.length<1?D`
            <table class="kuc-readonly-table-1-25-0__table">
              <caption
                class="kuc-readonly-table-1-25-0__table__label kuc-readonly-table-1-25-0__table__label--no-column"
                ?hidden="${!this.label}"
              >
                ${this.label}
              </caption>
            </table>
          `:D`
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
          `}_createDisplayData(){let e=[...this.data];if(this._sortField&&this._sortDirection&&(e=this._sortData(e,this._sortField,this._sortDirection)),!this.pagination)return e;let t=(this._pagePosition-1)*this.rowsPerPage+1,n=this._pagePosition*this.rowsPerPage;return e.filter((e,r)=>r>=t-1&&r<=n-1)}_sortData(e,t,n){return[...e].sort((e,r)=>{let i=e[t],a=r[t],o=To(i),s=To(a);if(o&&s)return 0;if(o)return 1;if(s)return-1;if(i==null&&a==null)return 0;if(i==null)return 1;if(a==null)return-1;if(typeof i==`number`&&typeof a==`number`)return n===`asc`?i-a:a-i;if(typeof i==`string`&&typeof a==`string`&&go(i)&&go(a)){let e=new Date(i),t=new Date(a);if(!isNaN(e.getTime())&&!isNaN(t.getTime()))return n===`asc`?e.getTime()-t.getTime():t.getTime()-e.getTime()}let c=String(i),l=String(a),u=new Intl.Collator(void 0,{numeric:!0,sensitivity:`base`});return n===`asc`?u.compare(c,l):u.compare(l,c)})}_handleClickHeader(e){this._sortFields(e)}_handleKeyDownHeader(e,t){(e.key===`Enter`||e.key===` `)&&(e.preventDefault(),this._sortFields(t))}_sortFields(e){let t=this._columnOrder.indexOf(e);t<0||this.columns[t].sort&&(this._sortField===e?this._sortDirection=this._sortDirection===`asc`?`desc`:`asc`:(this._sortField=e,this._sortDirection=`asc`),this._pagePosition=1)}_customWidthVariables(e){return`var(--kuc-readonly-table-header-${e}-width, var(--kuc-readonly-table-header-width, auto))`}_getColumnsTemplate(e,t){let n=this._customWidthVariables(t),r=e.title?To(e.title):!1,i=e.field||``,a=e.sort===!0,o=this._sortField===i,s=this.columns.map((e,t)=>e.visible===!1?-1:t).filter(e=>e!==-1),c=t===s[0],l=t===s[s.length-1],u=o?` kuc-readonly-table-1-25-0__table__header__cell--sorted-${this._sortDirection}`:``;return D`
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
              ${r?Qa(e.title):e.title??``}
            </div>
            ${a&&o?D`<div
                  class="kuc-readonly-table-1-25-0__table__header__cell__wrapper__sort-icon"
                >
                  ${this._getSortSvgIcon(this._sortDirection)}
                </div>`:``}
          </div>
        </th>
      `}_getSortDescription(e){return e===`desc`?`descending`:e===`asc`?`ascending`:`none`}_getSortSvgIcon(e){return e===`desc`?O`<svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg" style="vertical-align: middle;">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M6.99996 0H5.99996V10.6011L1.4528 5.78021L0.725342 6.46637L6.57169 12.6647L12.1902 6.45887L11.4489 5.78771L6.99996 10.7017V0Z" fill="white"/>
        </svg>
        `:e===`asc`?O`<svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg" style="vertical-align: middle;">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M6.99996 13H5.99996V2.3989L1.4528 7.21979L0.725342 6.53363L6.57169 0.3353L12.1902 6.54113L11.4489 7.21229L6.99996 2.2983V13Z" fill="white"/>
      </svg>`:``}_getDataTemplate(e,t){return D`
        <tr
          class="kuc-readonly-table-1-25-0__table__body__row kuc-readonly-table-1-25-0__table__body__row-${t}"
        >
          ${this._columnOrder.map((t,n)=>{let r=this.columns[n].visible??!0,i=e[t];To(i)&&(i=D`<div
                class="kuc-readonly-table-1-25-0__table__body__row__cell-data--html"
              >
                ${Qa(i)}
              </div>`);let a=this._customWidthVariables(n);return D`<td class="kuc-readonly-table-1-25-0__table__body__row__cell-data" ?hidden="${!r}" style="width: ${a}; min-width: ${a}; max-width: ${a}">${i}</td>`})}
        </tr>
      `}_toggleDisplayPreviousButton(){return this._pagePosition>1}_toggleDisplayNextButton(){return this._pagePosition<this.data.length/this.rowsPerPage}_handleClickPreviousButton(e){if(!(this._pagePosition<2)){if(!bo(this.rowsPerPage)){this.throwErrorAfterUpdateComplete(P.ROWS_PER_PAGE.INVALID);return}--this._pagePosition}}_handleClickNextButton(e){if(!bo(this.rowsPerPage)){this.throwErrorAfterUpdateComplete(P.ROWS_PER_PAGE.INVALID);return}this._toggleDisplayNextButton()!==!1&&(this._pagePosition+=1)}}Bs([A({type:String,reflect:!0,attribute:`class`})],e.prototype,`className`,void 0),Bs([A({type:String,reflect:!0,attribute:`id`})],e.prototype,`id`,void 0),Bs([A({type:String})],e.prototype,`label`,void 0),Bs([A({type:Array})],e.prototype,`columns`,void 0),Bs([A({type:Array})],e.prototype,`data`,void 0),Bs([A({type:Boolean})],e.prototype,`pagination`,void 0),Bs([A({type:Number})],e.prototype,`rowsPerPage`,void 0),Bs([A({type:Boolean,attribute:`hidden`,reflect:!0,converter:L})],e.prototype,`visible`,void 0),Bs([j()],e.prototype,`_pagePosition`,void 0),Bs([j()],e.prototype,`_columnOrder`,void 0),Bs([j()],e.prototype,`_sortField`,void 0),Bs([j()],e.prototype,`_sortDirection`,void 0),window.customElements.define(`kuc-readonly-table-1-25-0`,e),V(zs),Vs=e})();var Hs=`
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
`,Us=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},Ws;(()=>{if(Ws=window.customElements.get(`kuc-spinner-1-25-0`),Ws)return;class e extends z{constructor(e){super(),this.className=``,this.id=``,this.text=``,this.container=document.body,this._isOpened=!1;let t=U(e);Object.assign(this,t)}_getSpinnerSvgTemplate(){return O`
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
      `}_isValidContainerElement(){return this.container instanceof HTMLElement}open(){if(!this._isValidContainerElement()){document.body.appendChild(this),requestAnimationFrame(()=>{document.body.removeChild(this)}),this.performUpdate();return}this.parentElement&&this.parentElement.classList.remove(`kuc--has-spinner`),this.container.appendChild(this),this.performUpdate(),this.container.classList.contains(`kuc--has-spinner`)||this.container.classList.add(`kuc--has-spinner`),this._isOpened=!0}close(){this.parentElement&&this.parentElement.classList.remove(`kuc--has-spinner`),this._isOpened=!1,this.parentNode&&this.parentNode.removeChild(this)}shouldUpdate(e){if(e.has(`container`)){if(this.container===null||this.container===void 0)return this._isOpened&&this.close(),!1;let e=this._isValidContainerElement(),t=!e||!document.contains(this.container);if(this._isOpened&&t&&this.close(),!e)return this.throwErrorAfterUpdateComplete(P.CONTAINER.INVALID),!1}return!0}render(){return D`
        <div class="kuc-spinner-1-25-0__spinner" aria-live="assertive" role="alert">
          ${this._getSpinnerSvgTemplate()}
          <div
            class="kuc-spinner-1-25-0__spinner__text${this.text?``:` visually-hidden`}"
          >
            ${this.text?this.text:`now loading…`}
          </div>
        </div>
        <div class="kuc-spinner-1-25-0__mask"></div>
      `}}Us([A({type:String,reflect:!0,attribute:`class`})],e.prototype,`className`,void 0),Us([A({type:String,reflect:!0,attribute:`id`})],e.prototype,`id`,void 0),Us([A({type:String})],e.prototype,`text`,void 0),Us([A()],e.prototype,`container`,void 0),window.customElements.define(`kuc-spinner-1-25-0`,e),V(Hs),Ws=e})();var Gs=`
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
`,Ks=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},qs;(()=>{if(qs=window.customElements.get(`kuc-switch-1-25-0`),qs)return;class e extends z{constructor(e){super(),this.checkedText=``,this.className=``,this.id=``,this.label=``,this.labelPlacement=`left`,this.unCheckedText=``,this.checked=!1,this.disabled=!1,this.visible=!0,this._validLabelPlacement=[`top`,`bottom`,`left`,`right`],this._GUID=H();let t=U(e);Object.assign(this,t)}render(){return D`
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
      `}_handleChangeInput(e){e.stopPropagation();let t=e.target;this.checked=t.checked;let n={checked:this.checked};B(this,`change`,n)}_getLabelPlacement(){return this._validLabelPlacement.includes(this.labelPlacement)?this.labelPlacement:`left`}}Ks([A({type:String})],e.prototype,`checkedText`,void 0),Ks([A({type:String,reflect:!0,attribute:`class`})],e.prototype,`className`,void 0),Ks([A({type:String,reflect:!0,attribute:`id`})],e.prototype,`id`,void 0),Ks([A({type:String})],e.prototype,`label`,void 0),Ks([A({type:String})],e.prototype,`labelPlacement`,void 0),Ks([A({type:String})],e.prototype,`unCheckedText`,void 0),Ks([A({type:Boolean})],e.prototype,`checked`,void 0),Ks([A({type:Boolean})],e.prototype,`disabled`,void 0),Ks([A({type:Boolean,attribute:`hidden`,reflect:!0,converter:L})],e.prototype,`visible`,void 0),window.customElements.define(`kuc-switch-1-25-0`,e),V(Gs),qs=e})();var Js=`
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
`,Ys=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},Xs=`kuc-table-1-25-0__table__body__row__cell-data`,Zs=`kuc-table-1-25-0__table__body__row`,Qs=`kuc-table-1-25-0__table__body__row__action`,$s=`kuc-table-1-25-0__table__body__row__action-add`,ec=`kuc-table-1-25-0__table__body__row__action-remove`,tc=e=>`var(--kuc-table-header-${e}-width, var(--kuc-table-header-width, auto))`,nc=`M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16ZM12.0355 8.49997V7.49997H8.50008V3.96454H7.50008V7.49997H3.96443V8.49997H7.50008V12.0356H8.50008V8.49997H12.0355Z`,rc=`#3498db`,ic=`M16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8ZM12.0355 7.49997V8.49997L3.96443 8.49997V7.49997H12.0355Z`,ac=`#b5b5b5`,oc;(()=>{if(oc=window.customElements.get(`kuc-table-1-25-0`),oc)return;class e extends z{constructor(e){if(super(),this.actionButtonPosition=`right`,this.className=``,this.id=``,this.label=``,this.columns=[],this.data=[],this.actionButton=!0,this.headerVisible=!0,this.visible=!0,this._actionButton={add:!0,remove:!0},this._actionButtonPosition=`right`,!e)return;let t=U(e);Object.assign(this,t)}shouldUpdate(e){if(e.has(`data`)||e.has(`columns`)){let e=this._getErrorValidateColumnsAndData();if(e)return this.throwErrorAfterUpdateComplete(e),!1}return!0}willUpdate(e){e.has(`actionButtonPosition`)&&(this._actionButtonPosition=this.actionButtonPosition===`left`?`left`:`right`),e.has(`actionButton`)&&(this._actionButton=this._getActionButtonSettings()),this._tBody&&(this._tBody.innerHTML=``)}render(){return!this.columns||this.columns.length<1?D`<table class="kuc-table-1-25-0__table">
            <caption
              class="kuc-table-1-25-0__table__label kuc-table-1-25-0__table__label--no-column"
              ?hidden="${!this.label}"
            >
              ${this.label}
            </caption>
          </table>`:D`
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
          `}updated(e){if(this.columns.length!==0)for(let e=0;e<this.data.length;e++)this._addRowToTable(e,this.data[e])}_getTableHeaderTemplate(){return D`
        <tr>
          ${this._actionButtonPosition===`left`?this._getActionButtonHeaderTemplate():``}
          ${this.columns.map((e,t)=>this._getColumnHeaderTemplate(e,t))}
          ${this._actionButtonPosition===`right`?this._getActionButtonHeaderTemplate():``}
        </tr>
      `}_getActionButtonHeaderTemplate(){return!this.data||this.data.length<1||!this._actionButton.add&&!this._actionButton.remove?D``:D`
        <th
          class="kuc-table-1-25-0__table__header__cell kuc-table-1-25-0__table__header__cell__action${this._actionButtonPosition===`left`?`--left`:`--right`}"
        ></th>
      `}_getColumnHeaderTemplate(e,t){let n=tc(t);return D`
        <th
          class="kuc-table-1-25-0__table__header__cell"
          ?hidden="${e.visible===!1}"
          style="width: ${n}; min-width: ${n}; max-width: ${n}"
        >
          <div class="kuc-table-1-25-0__table__header__cell-title">
            ${e.title&&To(e.title)?Qa(e.title):e.title}<!--
        --><span
              class="kuc-base-label-1-25-0__required-icon"
              ?hidden="${!e.requiredIcon}"
              >*</span
            >
          </div>
        </th>
      `}_getActionsCellWhenRemoveRow(e){let t=null,n=e;for(;this.data.length>1;){let e=this._table.rows[n];if(!e)n--;else{t=e.cells[this._actionButtonPosition===`left`?0:this.columns.length];break}}return t}_getDefaultDataRow(e){let t={};for(let n in e)if(Object.prototype.hasOwnProperty.call(e,n)){if(Array.isArray(e[n])){t[n]=[];continue}if(typeof e[n]==`object`&&e[n]!==null){t[n]={};continue}t[n]=``}return t}_addRowToTable(e,t){let n=this._tBody.insertRow(e);n.classList.add(Zs),(this._actionButton.add||this._actionButton.remove)&&this._actionButtonPosition===`left`&&this._addActionsCellToNewRow(n);for(let r=0;r<this.columns.length;r++){let i=tc(r),a=n.insertCell(r+((this._actionButton.add||this._actionButton.remove)&&this._actionButtonPosition===`left`?1:0)),o=this.columns[r];a.classList.add(Xs),a.style.width=i,a.style.maxWidth=i,a.style.minWidth=i,a.addEventListener(`change`,e=>{this._handleChangeCell(e,o.field)}),a.hidden=!(o.visible??!0);let s=o.render?o.render(t[o.field],t,e):t[o.field];s&&s.nodeType?a.appendChild(s):a.innerText=s||``}!this._actionButton.add&&!this._actionButton.remove||this._actionButtonPosition===`left`||this._addActionsCellToNewRow(n)}_handleChangeCell(e,t){e.stopPropagation();let n=this._deepCloneObject(this.data),r=e.currentTarget.parentElement.rowIndex-1,i=this.data[r];if(t in i){let n=e.target.value;`detail`in e&&(n=e.detail.value),i[t]=n}let a={type:`change-cell`,rowIndex:r,data:this._deepCloneObject(this.data),oldData:n,field:t};this._dispatchChangeEvent(a)}_handleAddRow(e){let t=this._deepCloneObject(this.data),n=this._getDefaultDataRow(this.data[0]);this._addRowToTable(e,n),this.data.splice(e,0,n);let r={type:`add-row`,rowIndex:e,data:this._deepCloneObject(this.data),oldData:t};this._dispatchChangeEvent(r),this._toggleRemoveRowButton()}_handleRemoveRow(e){if(this.data.length===1)return;let t=e-1,n=this._deepCloneObject(this.data);this._table.deleteRow(e),this.data.splice(t,1);let r={type:`remove-row`,rowIndex:t,data:this._deepCloneObject(this.data),oldData:n};this._dispatchChangeEvent(r),this._toggleRemoveRowButton(),this._focusActionsButtonWhenRemoveRow(e)}_focusActionsButtonWhenRemoveRow(e){let t=this._getActionsCellWhenRemoveRow(e);if(t){this._focusRemoveRowButton(t);return}this._focusFirstAddRowButton()}_focusRemoveRowButton(e){e.querySelector(`.${ec}`).focus()}_focusFirstAddRowButton(){this._table.rows[1].cells[this._actionButtonPosition===`left`?0:this.columns.length].querySelector(`.${$s}`)?.focus()}_toggleRemoveRowButton(){let e=this._actionButtonPosition===`left`?this._tBody.rows[0].firstChild:this._tBody.rows[0].lastChild,t=e.lastChild;if(this.data.length===1){t.style.display=`none`,this._actionButton.add||(e.style.display=`none`,this._hideActionHeaderCell());return}if(this.data.length===2){let n=(this._actionButtonPosition===`left`?this._tBody.rows[1].firstChild:this._tBody.rows[1].lastChild).lastChild;t.style.display=n.style.display=`inline-block`,e.style.removeProperty(`display`)}}_getSvgDOM(e,t){let n=document.createElementNS(`http://www.w3.org/2000/svg`,`svg`);n.setAttribute(`fill`,`none`),n.setAttribute(`width`,`18`),n.setAttribute(`height`,`18`),n.setAttribute(`viewBox`,`0 0 16 16`),n.setAttribute(`aria-hidden`,`true`);let r=document.createElementNS(`http://www.w3.org/2000/svg`,`path`);return r.setAttribute(`d`,t),r.setAttribute(`fill-rule`,`evenodd`),r.setAttribute(`clip-rule`,`evenodd`),r.setAttribute(`fill`,e),n.appendChild(r),n}_addActionsCellToNewRow(e){if(!this._actionButton.add&&!this._actionButton.remove)return;let t=e.insertCell(this._actionButtonPosition===`left`?0:this.columns.length);if(t.classList.add(Qs),this._actionButtonPosition===`left`?t.classList.add(`kuc-table-1-25-0__table__body__row__action--left`):t.classList.add(`kuc-table-1-25-0__table__body__row__action--right`),this._actionButton.add){let n=this._getActionButtonDOM(`add`,e);t.appendChild(n)}if(this._actionButton.remove){let n=this._getActionButtonDOM(`remove`,e);t.appendChild(n),this.data.length===1&&(n.style.display=`none`)}!this._actionButton.add&&this.data.length===1?(this._hideActionHeaderCell(),t.style.display=`none`):(this._showActionHeaderCell(),t.style.removeProperty(`display`))}_getActionButtonDOM(e,t){let n=ec,r=`Delete this row`,i=e===`add`;i&&(n=$s,r=`Add row`);let a=i?rc:ac,o=i?nc:ic,s=this._getSvgDOM(a,o),c=document.createElement(`button`);return c.classList.add(n),c.setAttribute(`title`,r),c.type=`button`,c.appendChild(s),c.addEventListener(`click`,()=>{let e=this._getErrorValidateColumnsAndData();if(e){this.throwErrorAfterUpdateComplete(e);return}if(i){this._handleAddRow(t.rowIndex);return}this._handleRemoveRow(t.rowIndex)}),c}_getActionButtonSettings(){let e={add:!0,remove:!0};return this.actionButton?(typeof this.actionButton==`object`&&(e.add=Object.prototype.hasOwnProperty.call(this.actionButton,`add`)?!!this.actionButton.add:!0,e.remove=Object.prototype.hasOwnProperty.call(this.actionButton,`remove`)?!!this.actionButton.remove:!0),e):(e.add=e.remove=!1,e)}_getErrorValidateColumnsAndData(){return this._getErrorMessageWhenValidateColumns()||(W(this.data)?``:P.DATA.IS_NOT_ARRAY)}_getErrorMessageWhenValidateColumns(){return W(this.columns)?xo(this.columns)?So(this.columns)?P.COLUMNS.FIELD_UNIQUE:``:P.COLUMNS.FIELD_REQUIRED:P.COLUMNS.IS_NOT_ARRAY}_deepCloneObject(e){return JSON.parse(JSON.stringify(e))}_dispatchChangeEvent(e){let t=e;B(this,`change`,t)}_hideActionHeaderCell(){this._actionHeaderCellRight&&(this._actionHeaderCellRight.hidden=!0),this._actionHeaderCellLeft&&(this._actionHeaderCellLeft.hidden=!0)}_showActionHeaderCell(){this._actionHeaderCellRight&&(this._actionHeaderCellRight.hidden=!1),this._actionHeaderCellLeft&&(this._actionHeaderCellLeft.hidden=!1)}}Ys([A({type:String})],e.prototype,`actionButtonPosition`,void 0),Ys([A({type:String,reflect:!0,attribute:`class`})],e.prototype,`className`,void 0),Ys([A({type:String,reflect:!0,attribute:`id`})],e.prototype,`id`,void 0),Ys([A({type:String})],e.prototype,`label`,void 0),Ys([A({type:Array})],e.prototype,`columns`,void 0),Ys([A({type:Array})],e.prototype,`data`,void 0),Ys([A()],e.prototype,`actionButton`,void 0),Ys([A({type:Boolean})],e.prototype,`headerVisible`,void 0),Ys([A({type:Boolean,attribute:`hidden`,reflect:!0,converter:L})],e.prototype,`visible`,void 0),Ys([M(`.kuc-table-1-25-0__table`)],e.prototype,`_table`,void 0),Ys([M(`.kuc-table-1-25-0__table__body`)],e.prototype,`_tBody`,void 0),Ys([M(`.kuc-table-1-25-0__table__header__cell__action--right`)],e.prototype,`_actionHeaderCellRight`,void 0),Ys([M(`.kuc-table-1-25-0__table__header__cell__action--left`)],e.prototype,`_actionHeaderCellLeft`,void 0),window.customElements.define(`kuc-table-1-25-0`,e),V(Js),oc=e})();var sc=`
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
`,cc=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},lc;(()=>{if(lc=window.customElements.get(`kuc-tabs-1-25-0`),lc)return;class e extends z{constructor(e){super(),this.className=``,this.id=``,this.value=``,this.borderVisible=!0,this.scrollButtons=!1,this.visible=!0,this.items=[],this._selectedValue=``,this._resizeObserver=null,this._isClick=!1,this._isAtStart=!0,this._isAtEnd=!1,this._GUID=H();let t=U(e);Object.assign(this,t),this._handleResize=this._handleResize.bind(this)}shouldUpdate(e){if(e.has(`items`)){if(!W(this.items))return this.throwErrorAfterUpdateComplete(P.ITEMS.IS_NOT_ARRAY),!1;for(let e=0;e<this.items.length;e++)if(this.items[e].value===void 0)return this.throwErrorAfterUpdateComplete(P.ITEMS.IS_NOT_SPECIFIED),!1;if(!yo(this.items.map(e=>e.value)))return this.throwErrorAfterUpdateComplete(P.ITEMS.IS_DUPLICATED),!1}return e.has(`value`)&&!_o(this.value)?(this.throwErrorAfterUpdateComplete(P.VALUE.IS_NOT_STRING),!1):!0}willUpdate(e){let t=this._getMatchedTabIndex();t===-1&&(t=this._getFirstVisibleTabIndex()),t>-1&&(this._selectedValue=this.items[t].value)}render(){return D`
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
      `}firstUpdated(){window.addEventListener(`resize`,this._handleResize),this._resizeObserver=new ResizeObserver(()=>{this.scrollButtons&&this._updatePreNextButtonState()}),this._resizeObserver.observe(this._tabListContainer),this._setScrollStyles(),this._scrollToSelectedTab(!0)}updated(e){e.has(`scrollButtons`)&&this._setScrollStyles(),this.scrollButtons&&this._updatePreNextButtonState()}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener(`resize`,this._handleResize),this._resizeObserver&&=(this._resizeObserver.disconnect(),null)}_getTabTemplate(e,t){let n=e.value===this._selectedValue;return D`<li
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
      </li>`}_getTabContentTemplate(e,t){let n=e.value===this._selectedValue;return D`<div
        class="kuc-tabs-1-25-0__group__tab-panel__content"
        role="tabpanel"
        id="${this._GUID}-tabpanel-${t}"
        aria-labelledby="${this._GUID}-button-${t}"
        ?hidden="${!n||e.visible===!1}"
        @change="${this._handleChangeEvent}"
      >
        ${e.content&&To(e.content)?Qa(e.content):e.content}
      </div>`}_getPrevButtonSvgTemplate(){return O`
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
      `}_getNextButtonSvgTemplate(){return O`
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
      `}_getVisibleTab(e,t){let n=Array.from(this._tabButtons),r=n.indexOf(t),i=e===`next`?1:-1,a=e===`next`?n.length:-1;for(let e=r+i;e!==a;e+=i)if(!n[e].hidden)return n[e];return null}_handleTabScroll(e){let t=this._findVisibleTab(e);if(!t)return;let n=this._isTabPartiallyVisible(t,e)?t:this._getVisibleTab(e,t);n&&this._scrollTab(n,{direction:e,mode:`edge`}),this._updatePreNextButtonState()}_findVisibleTab(e){let t=this._tabListContainer.getBoundingClientRect(),n=Array.from(this._tabButtons),r=e=>{let n=e.getBoundingClientRect();return!(n.right<=t.left||n.left>=t.right)};return e===`next`?n.reverse().find(r):n.find(r)}_isTabPartiallyVisible(e,t){let n=this._tabListContainer.getBoundingClientRect(),r=e.getBoundingClientRect();return t===`next`?r.right>n.right+2:r.left<n.left-2}_calculateScrollPosition(e,t){let{direction:n,mode:r}=t,i=this._tabListContainer.getBoundingClientRect(),a=e.getBoundingClientRect(),o=this._tabListContainer.scrollLeft;return r===`edge`&&n?o+=n===`next`?a.right-i.right:a.left-i.left:a.width>i.width&&n?o+=n===`next`?a.left-i.left:a.right-i.right:a.left<i.left?o+=a.left-i.left:a.right>i.right&&(o+=a.right-i.right),Math.max(0,Math.min(o,this._tabListContainer.scrollWidth-this._tabListContainer.clientWidth))}_scrollTab(e,t){let n=this._calculateScrollPosition(e,t);this._tabListContainer.scrollTo({left:n,behavior:t.immediate?`auto`:`smooth`})}_handleMouseDownPrevButton(e){e.preventDefault(),this._handleTabScroll(`prev`)}_handleMouseDownNextButton(e){e.preventDefault(),this._handleTabScroll(`next`)}_handleResize(){this.scrollButtons&&this._updatePreNextButtonState()}_handleScroll(){this._updatePreNextButtonState()}_isScrollToLeft(){return this._tabListContainer.scrollLeft===0}_isScrollToRight(){let{scrollWidth:e,scrollLeft:t,clientWidth:n}=this._tabListContainer;return Math.abs(e-t-n)<2}_setScrollStyles(){var e;(e=this._tabGroup.parentElement)==null||e.style.setProperty(`max-width`,this.scrollButtons?`100%`:``),this._tabListContainer.style.setProperty(`overflow-x`,this.scrollButtons?`auto`:`visible`)}_updatePreNextButtonState(){let e=this._isScrollToLeft(),t=this._isScrollToRight();e!==this._isAtStart&&(this._isAtStart=e),t!==this._isAtEnd&&(this._isAtEnd=t)}_handleMouseDown(e){this._isClick=!0}_handleClickTab(e){let t=e.target;t.blur();let n=this._getCurrentTabIndex(t.getAttribute(`value`));if(this._tabButtons[n].focus(),this.value===t.value)return;let r=this._generateEventDetail(t.value);B(this,`change`,r)}_handleChangeEvent(e){e.stopPropagation()}_handleBlur(e){this._isClick=!1}_handleKeyDownTab(e){this._isClick=!1;let t=!1;switch(e.key){case`Left`:case`ArrowLeft`:t=!0,this._moveToAdjacentTab(e.target,`prev`);break;case`Right`:case`ArrowRight`:t=!0,this._moveToAdjacentTab(e.target,`next`);break;case`Home`:t=!0,this._moveToLastFirstTab(e.target,`first`);break;case`End`:t=!0,this._moveToLastFirstTab(e.target,`last`);break}t&&(e.stopPropagation(),e.preventDefault())}_getCurrentTabIndex(e){let t=-1;for(let n=0;n<this.items.length;n++)if(this.items[n].value===e){t=n;break}return t===-1&&(t=this._getFirstVisibleTabIndex()),t}_getFirstVisibleTabIndex(){return this.items.findIndex(e=>e.visible!==!1)}_getMatchedTabIndex(){return this.items.findIndex(e=>e.visible!==!1&&e.value===this.value)}_moveToLastFirstTab(e,t){let n=this._getCurrentTabIndex(e.getAttribute(`value`)),r=t===`last`?-1:1,i=t===`last`?this.items.length-1:0;for(;i!==n;){if(this.items[i].visible!==!1&&this.items[i].disabled!==!0){e.blur(),B(this,`change`,this._generateEventDetail(this._tabButtons[i].getAttribute(`value`))),this._tabButtons[this._getCurrentTabIndex(this.value)].focus(),this._scrollTab(this._tabButtons[this._getCurrentTabIndex(this.value)],{mode:`visible`});break}i+=r}}_moveToAdjacentTab(e,t){let n=this._getCurrentTabIndex(e.getAttribute(`value`)),r=t===`next`?1:-1,i=n+r;for(;i!==n&&(i===this.items.length?i=0:i===-1&&(i=this.items.length-1),i!==n);){if(this.items[i].visible!==!1&&this.items[i].disabled!==!0){e.blur(),B(this,`change`,this._generateEventDetail(this._tabButtons[i].getAttribute(`value`))),this._tabButtons[this._getCurrentTabIndex(this.value)].focus(),this._scrollTab(this._tabButtons[this._getCurrentTabIndex(this.value)],{mode:`visible`,direction:t});break}i+=r}}_scrollToSelectedTab(e=!1){if(!this.value||!this._tabButtons.length)return;let t=this._getCurrentTabIndex(this.value);if(t===-1)return;let n=this._tabButtons[t];n&&(n.hidden||(this._scrollTab(n,{mode:`visible`,immediate:e}),this._updatePreNextButtonState()))}_generateEventDetail(e){let t=this.value;return this.value=e,{oldValue:t,value:e}}}cc([A({type:String,reflect:!0,attribute:`class`})],e.prototype,`className`,void 0),cc([A({type:String,reflect:!0,attribute:`id`})],e.prototype,`id`,void 0),cc([A({type:String})],e.prototype,`value`,void 0),cc([A({type:Boolean})],e.prototype,`borderVisible`,void 0),cc([A({type:Boolean})],e.prototype,`scrollButtons`,void 0),cc([A({type:Boolean,attribute:`hidden`,reflect:!0,converter:L})],e.prototype,`visible`,void 0),cc([A({type:Array})],e.prototype,`items`,void 0),cc([N(`.kuc-tabs-1-25-0__group__tabs-container__tab-list-container__tab-list__tab__button`)],e.prototype,`_tabButtons`,void 0),cc([M(`.kuc-tabs-1-25-0__group__tabs-container__tab-list-container`)],e.prototype,`_tabListContainer`,void 0),cc([M(`.kuc-tabs-1-25-0__group`)],e.prototype,`_tabGroup`,void 0),cc([j()],e.prototype,`_isClick`,void 0),cc([j()],e.prototype,`_isAtStart`,void 0),cc([j()],e.prototype,`_isAtEnd`,void 0),window.customElements.define(`kuc-tabs-1-25-0`,e),V(sc),lc=e})();var uc=`
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
`,dc=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},fc;(()=>{if(fc=window.customElements.get(`kuc-text-1-25-0`),fc)return;class e extends z{constructor(e){super(),this.className=``,this.error=``,this.id=``,this.label=``,this.placeholder=``,this.prefix=``,this.suffix=``,this.textAlign=`left`,this.value=``,this.disabled=!1,this.requiredIcon=!1,this.visible=!0,this._GUID=H();let t=U(e);Object.assign(this,t)}_handleFocusInput(e){let t={value:this.value};B(this,`focus`,t)}_handleChangeInput(e){e.stopPropagation();let t=e.target,n={value:``,oldValue:this.value};this.value=t.value,n.value=this.value,B(this,`change`,n)}_handleInputText(e){e.stopPropagation();let t={value:e.target.value,data:e.data};B(this,`input`,t)}render(){return D`
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
      `}}dc([A({type:String,reflect:!0,attribute:`class`})],e.prototype,`className`,void 0),dc([A({type:String})],e.prototype,`error`,void 0),dc([A({type:String,reflect:!0,attribute:`id`})],e.prototype,`id`,void 0),dc([A({type:String})],e.prototype,`label`,void 0),dc([A({type:String})],e.prototype,`placeholder`,void 0),dc([A({type:String})],e.prototype,`prefix`,void 0),dc([A({type:String})],e.prototype,`suffix`,void 0),dc([A({type:String})],e.prototype,`textAlign`,void 0),dc([A({type:String})],e.prototype,`value`,void 0),dc([A({type:Boolean})],e.prototype,`disabled`,void 0),dc([A({type:Boolean})],e.prototype,`requiredIcon`,void 0),dc([A({type:Boolean,attribute:`hidden`,reflect:!0,converter:L})],e.prototype,`visible`,void 0),window.customElements.define(`kuc-text-1-25-0`,e),V(uc),fc=e})();var pc=fc,mc=`
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
`,hc=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},gc;(()=>{if(gc=window.customElements.get(`kuc-textarea-1-25-0`),gc)return;let e={MIN_WIDTH:16,MIN_HEIGHT:16};class t extends z{constructor(e){super(),this.className=``,this.error=``,this.id=``,this.label=``,this.placeholder=``,this.value=``,this.disabled=!1,this.requiredIcon=!1,this.visible=!0,this._onResize=!1,this._GUID=H();let t=U(e);Object.assign(this,t)}_handleFocusTextarea(e){let t={value:this.value};B(this,`focus`,t)}_handleChangeTextarea(e){e.stopPropagation();let t=e.target,n={value:``,oldValue:this.value};this.value=t.value,n.value=this.value,B(this,`change`,n)}_handleInputTextArea(e){e.stopPropagation();let t={value:e.target.value,data:e.data};B(this,`input`,t)}_handleMouseDownResize(){this._onResize=!0}_handleMouseUpDocument(){this._onResize=!1}_handleMouseMoveDocument(t){if(!this._onResize)return;let n=this._textarea.getBoundingClientRect(),r=t.clientX-n.left,i=t.clientY-n.top;r<e.MIN_WIDTH&&(r=e.MIN_WIDTH),i<e.MIN_HEIGHT&&(i=e.MIN_HEIGHT),this._container.style.width=r+`px`,this._textarea.style.height=i+`px`}_getResizerButtonSvgTemplate(){return O`
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
      `}firstUpdated(){document.addEventListener(`mousemove`,e=>this._handleMouseMoveDocument(e)),document.addEventListener(`mouseup`,e=>this._handleMouseUpDocument())}render(){return D`
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
      `}}hc([A({type:String,reflect:!0,attribute:`class`})],t.prototype,`className`,void 0),hc([A({type:String})],t.prototype,`error`,void 0),hc([A({type:String,reflect:!0,attribute:`id`})],t.prototype,`id`,void 0),hc([A({type:String})],t.prototype,`label`,void 0),hc([A({type:String})],t.prototype,`placeholder`,void 0),hc([A({type:String})],t.prototype,`value`,void 0),hc([A({type:Boolean})],t.prototype,`disabled`,void 0),hc([A({type:Boolean})],t.prototype,`requiredIcon`,void 0),hc([A({type:Boolean,attribute:`hidden`,reflect:!0,converter:L})],t.prototype,`visible`,void 0),hc([M(`.kuc-textarea-1-25-0__group__container`)],t.prototype,`_container`,void 0),hc([M(`.kuc-textarea-1-25-0__group__textarea`)],t.prototype,`_textarea`,void 0),window.customElements.define(`kuc-textarea-1-25-0`,t),V(mc),gc=t})();var _c=`
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
`,vc=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},yc;(()=>{if(yc=window.customElements.get(`kuc-time-picker-1-25-0`),yc)return;class e extends z{constructor(e){super(),this.className=``,this.error=``,this.id=``,this.label=``,this.language=`auto`,this.max=``,this.min=``,this.value=``,this.disabled=!1,this.hour12=!1,this.requiredIcon=!1,this.visible=!0,this.timeStep=30,this._errorText=``,this._inputValue=``,this._errorInvalid=``,this._inputMax=``,this._inputMin=``,this._inputTimeStep=30,this._valueConverted=``,this._GUID=H();let t=U(e);Object.assign(this,t)}shouldUpdate(e){if(e.has(`max`)||e.has(`min`)){let e=this._inputMin,t=this._inputMax;if(this.max===void 0||this.max===``)t=ma;else{if(!mo(this.max))return this.throwErrorAfterUpdateComplete(ha.MAX),!1;t=this.max=eo(this.max)}if(this.min===void 0||this.min===``)e=pa;else{if(!mo(this.min))return this.throwErrorAfterUpdateComplete(ha.MIN),!1;e=this.min=eo(this.min)}if(Ta(t,e)<0)return this.throwErrorAfterUpdateComplete(ua),!1;this._inputMin=e,this._inputMax=t}if(e.has(`timeStep`)){if(!wo(this.timeStep))return this.throwErrorAfterUpdateComplete(fa),!1;if(!ho(this.timeStep,this._inputMax,this._inputMin))return this.throwErrorAfterUpdateComplete(ha.TIME_STEP),!1;this._inputTimeStep=this.timeStep}return this.value===void 0||this.value===``?!0:mo(this.value)?(this._valueConverted=eo(this.value),e.has(`value`)&&(Ta(this._valueConverted,this._inputMin)<0||Ta(this._inputMax,this._valueConverted)<0)?(this.throwErrorAfterUpdateComplete(da),!1):!0):(this.throwErrorAfterUpdateComplete(ha.VALUE),!1)}update(e){e.has(`value`)&&(this.value===void 0?this._errorInvalid===``&&(this._inputValue=``):(this.value=this.value===``?this.value:this._valueConverted,this._inputValue=this.value)),(e.has(`max`)||e.has(`min`)||e.has(`value`))&&this.value!==void 0&&(this._errorInvalid=``),this._errorText=this._errorInvalid||this.error,super.update(e)}render(){return D`
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
      `}_handleTimeChange(e){e.preventDefault(),e.stopPropagation();let t={value:e.detail.value,oldValue:this.value};e.detail.error?(t.value=void 0,this.value=void 0,this._errorInvalid=e.detail.error,this.error=``):(this.value=e.detail.value,this._errorInvalid=``),this._inputValue=e.detail.value,B(this,`change`,t)}_getLanguage(){let e=[`en`,`ja`,`zh`,`zh-TW`,`es`];return e.indexOf(this.language)===-1?e.indexOf(document.documentElement.lang)===-1?`en`:document.documentElement.lang:this.language}}vc([A({type:String,reflect:!0,attribute:`class`})],e.prototype,`className`,void 0),vc([A({type:String})],e.prototype,`error`,void 0),vc([A({type:String,reflect:!0,attribute:`id`})],e.prototype,`id`,void 0),vc([A({type:String})],e.prototype,`label`,void 0),vc([A({type:String,attribute:`lang`,reflect:!0,converter:Za})],e.prototype,`language`,void 0),vc([A({type:String})],e.prototype,`max`,void 0),vc([A({type:String})],e.prototype,`min`,void 0),vc([A({type:String})],e.prototype,`value`,void 0),vc([A({type:Boolean})],e.prototype,`disabled`,void 0),vc([A({type:Boolean})],e.prototype,`hour12`,void 0),vc([A({type:Boolean})],e.prototype,`requiredIcon`,void 0),vc([A({type:Boolean,attribute:`hidden`,reflect:!0,converter:L})],e.prototype,`visible`,void 0),vc([A({type:Number})],e.prototype,`timeStep`,void 0),window.customElements.define(`kuc-time-picker-1-25-0`,e),V(_c),yc=e})();var bc=`
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
`,xc=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},Sc;(()=>{if(Sc=window.customElements.get(`kuc-tooltip-1-25-0`),Sc)return;class e extends z{constructor(e){super(),this.className=``,this.id=``,this.placement=`top`,this.title=``,this.container=``,this.describeChild=!1,this._container=``,this._scrollTargets=[],this._timeoutID=null,this._handleScroll=()=>{this._timeoutID!==null&&clearTimeout(this._timeoutID),this._timeoutID=window.setTimeout(()=>{this._setTooltipPositionBound(),this._timeoutID=null},20)},this._GUID=H();let t=U(e);Object.assign(this,t),this._globalEscapeBound=this._globalEscape.bind(this),this._setTooltipPositionBound=this._setTooltipPosition.bind(this)}update(e){e.has(`container`)&&(this.container&&To(this.container)?this._container=Qa(this.container):this._container=this.container),super.update(e)}render(){return D`
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
      `}updated(){this._initializeFirstChildElement(),this.describeChild?this._setChildTitleAttribute():this._setChildAriaLabelAttribute()}_handleMouseEnterContainer(){this._openTooltip()}_handleTouchStartContainer(){this._openTooltip()}_handleMouseLeaveContainer(e){let t=e.relatedTarget;this._titleWrapper&&this._titleWrapper.contains(t)||this._closeTooltip()}_initializeFirstChildElement(){if(typeof this._container!=`string`){let e=this._groupContainerEL.firstElementChild;e&&!e.getAttribute(`aria-describedby`)&&(this._firstChildEl=e)}}_setChildTitleAttribute(){this._firstChildEl&&(this._firstChildEl.setAttribute(`title`,this.title),this._firstChildEl.removeAttribute(`aria-label`))}_setChildAriaLabelAttribute(){this._firstChildEl&&(this._firstChildEl.setAttribute(`aria-label`,this.title),this._firstChildEl.removeAttribute(`title`))}_getTitleTemplate(){return this.title?D`
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
      `:D``}_handleMouseLeaveTitle(e){let t=e.relatedTarget;this._groupContainerEL.contains(t)||this._closeTooltip()}_handleFocusinContainer(){this._openTooltip()}_handleFocusoutContainer(){this._closeTooltip()}_openTooltip(){this._updateChildElementAttributes(!0);let e=this.querySelector(`.kuc-tooltip-1-25-0__group__title`);e&&(e.showPopover(),requestAnimationFrame(()=>{this._setTooltipPosition()})),this._attachGlobalListener()}_closeTooltip(){this._updateChildElementAttributes(!1);let e=this.querySelector(`.kuc-tooltip-1-25-0__group__title`);e&&e.hidePopover(),this._removeGlobalListener()}_updateChildElementAttributes(e){if(!(!this._firstChildEl||!this.describeChild)){if(e){this._firstChildEl.removeAttribute(`title`),this._firstChildEl.setAttribute(`aria-describedby`,`${this._GUID}-title`);return}this._firstChildEl.removeAttribute(`aria-describedby`),this._firstChildEl.setAttribute(`title`,this.title)}}_attachGlobalListener(){document.addEventListener(`keydown`,this._globalEscapeBound),this._scrollTargets=this._getScrollableAncestors(this._containerEl);for(let e of this._scrollTargets)e.addEventListener(`scroll`,this._handleScroll,{passive:!0})}_removeGlobalListener(){document.removeEventListener(`keydown`,this._globalEscapeBound);for(let e of this._scrollTargets)e.removeEventListener(`scroll`,this._handleScroll);this._scrollTargets=[],this._timeoutID!==null&&(clearTimeout(this._timeoutID),this._timeoutID=null)}_getScrollableAncestors(e){let t=[],n=e.parentElement,r=/(auto|scroll|overlay)/;for(;n&&n!==document.body&&n!==document.documentElement;){let e=getComputedStyle(n);(r.test(e.overflowY)||r.test(e.overflowX))&&t.push(n),n=n.parentElement}return t.push(window),t}_globalEscape(e){(e.key===`Escape`||e.key===`Esc`)&&this._closeTooltip()}_getPlacement(){return[`top`,`bottom`,`left`,`right`].includes(this.placement)?this.placement:`top`}_setTooltipPosition(){if(!this._titleEl||!this._containerEl)return;let e=this._containerEl.getBoundingClientRect(),t=this._titleEl.getBoundingClientRect(),n,r;switch(this.placement){case`bottom`:n=e.bottom,r=e.left+e.width/2-t.width/2;break;case`left`:n=e.top+e.height/2-t.height/2,r=e.left-t.width;break;case`right`:n=e.top+e.height/2-t.height/2,r=e.right;break;default:n=e.top-t.height,r=e.left+e.width/2-t.width/2}this._titleEl.style.position=`fixed`,this._titleEl.style.top=`${Math.round(n)}px`,this._titleEl.style.left=`${Math.round(r)}px`,this._titleEl.style.transform=`none`}}xc([A({type:String,reflect:!0,attribute:`class`})],e.prototype,`className`,void 0),xc([A({type:String,reflect:!0,attribute:`id`})],e.prototype,`id`,void 0),xc([A({type:String})],e.prototype,`placement`,void 0),xc([A({type:String})],e.prototype,`title`,void 0),xc([A()],e.prototype,`container`,void 0),xc([A({type:Boolean})],e.prototype,`describeChild`,void 0),xc([M(`.kuc-tooltip-1-25-0__group__container`)],e.prototype,`_groupContainerEL`,void 0),xc([M(`.kuc-tooltip-1-25-0__group__title__wrapper`)],e.prototype,`_titleWrapper`,void 0),xc([M(`.kuc-tooltip-1-25-0__group__container`)],e.prototype,`_containerEl`,void 0),xc([M(`.kuc-tooltip-1-25-0__group__title`)],e.prototype,`_titleEl`,void 0),window.customElements.define(`kuc-tooltip-1-25-0`,e),V(bc),Sc=e})();var Cc=`
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
`,X=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},wc;(()=>{if(wc=window.customElements.get(`kuc-user-org-group-select-1-25-0`),wc)return;class e extends z{constructor(e){super(),this.className=``,this.error=``,this.icon=``,this.id=``,this.label=``,this.placeholder=``,this.disabled=!1,this.requiredIcon=!1,this.visible=!0,this.items=[],this.value=[],this._selectedValues=[],this._searchText=``,this._selectorVisible=!1,this._query=``,this._matchingItems=[],this._DISABLED_ITEM_CLASS=`kuc-user-org-group-select-1-25-0__group__container__select-area__select-menu__item--disabled`,this._DISABLED_ICON_CLASS=`kuc-user-org-group-select-1-25-0__group__container__select-area__select-menu__item__icon--disabled`,this._SMALL_ICON_SIZE=24,this._LARGE_ICON_SIZE=48,this._scrollTargets=[],this._GUID=H();let t=U(e);this._handleClickDocument=this._handleClickDocument.bind(this),this._handleScrollMenu=this._handleScrollMenu.bind(this),this._setMenuPosition=this._setMenuPosition.bind(this),this._actionResizeScrollWindow=this._actionResizeScrollWindow.bind(this),Object.assign(this,t)}shouldUpdate(e){if(e.has(`items`)){if(!W(this.items))return this.throwErrorAfterUpdateComplete(P.ITEMS.IS_NOT_ARRAY),!1;if(!yo(this.items.map(e=>e.value)))return this.throwErrorAfterUpdateComplete(P.ITEMS.IS_DUPLICATED),!1}return e.has(`value`)&&!W(this.value)?(this.throwErrorAfterUpdateComplete(P.VALUE.IS_NOT_ARRAY),!1):!0}render(){let e=this._getIconType();return D`
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
      `}_getIconType(){if(this.icon===`user`||this.icon===`org`||this.icon===`group`)return this.icon}disconnectedCallback(){this._detachListeners(),super.disconnectedCallback()}_actionResizeScrollWindow(){this._timeoutID||!this._selectorVisible||(this._timeoutID=window.setTimeout(()=>{this._timeoutID=null,this._setMenuPosition()},50))}async updated(e){super.updated(e),await this.updateComplete,e.has(`value`)&&this._initializeSelectedValues(),this._selectorVisible&&this._actionClearAllHighlightMenuItem()}_initializeSelectedValues(){Array.isArray(this.value)&&(this._selectedValues=this.value.filter(e=>this.items.some(t=>t.value===e)))}_getMatchedItemTemplate(e,t){let n=e.label===void 0||e.label===null?e.value:e.label,r=D`${n}`,i=e.disabled,a=this._query.trim().toLowerCase();if(a&&n){let e=n.toLowerCase().indexOf(a),t=e+a.length;r=D`
          ${n.slice(0,e)}<b>${n.slice(e,t)}</b>${n.slice(t)}
        `}return D`
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
      `}_getSelectedItemTemplate(e,t){let n=this.items.filter(t=>t.value===e)[0];if(!n)return``;let r=n?.disabled,i=n.label===void 0||n.label===null?n.value:n.label;return D`
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
      `}_handleChangeUserOrgGroupInput(e){e.stopPropagation()}_handleInputUserOrgGroupInput(e){e.stopPropagation(),this._searchText=this._inputEl.value,this._query=this._inputEl.value,this._setMatchingItems()}_handleClickUserOrgGroupInput(e){e.stopPropagation(),this._inputEl.select(),this._setMatchingItems()}_handleBlurUserOrgGroupInput(e){let t=e.relatedTarget;t&&(this._toggleEl.contains(t)||this._menuEl&&this._menuEl.contains(t))||this._resetToggleInputValue()}_handleKeyDownUserOrgGroupInput(e){switch(e.key){case`Up`:case`ArrowUp`:if(e.preventDefault(),!this._selectorVisible){this._actionShowMenu();break}this._actionHighlightPrevMenuItem();break;case`Tab`:this._selectorVisible&&this._actionHideMenu();break;case`Down`:case`ArrowDown`:if(e.preventDefault(),!this._selectorVisible){this._actionShowMenu();break}this._actionHighlightNextMenuItem();break;case`Enter`:{e.preventDefault();let t=this._highlightItemEl;if(t===null)break;let n=t.getAttribute(`value`);this._actionUpdateValue(n),this._actionHideMenu();break}case`Escape`:e.preventDefault(),this._selectorVisible&&e.stopPropagation(),this._resetToggleInputValue(),this._actionHideMenu();break;case`Home`:this._selectorVisible&&(e.preventDefault(),this._actionHighlightFirstMenuItem());break;case`End`:this._selectorVisible&&(e.preventDefault(),this._actionHighlightLastMenuItem());break;default:break}}_resetToggleInputValue(){this._searchText=``,this._query=``}_actionHighlightPrevMenuItem(){let e=null;this._highlightItemEl!==null&&(e=this._highlightItemEl.previousElementSibling),e===null&&(e=this._lastItemEl);let t=!1;for(let n=0;n<this._matchingItems.length&&(t=e.classList.contains(this._DISABLED_ITEM_CLASS),t);n++)e=e.previousElementSibling,e===null&&(e=this._lastItemEl);!t&&this._setHighlightAndActiveDescendantMenu(e)}_actionHighlightNextMenuItem(){let e=null;this._highlightItemEl!==null&&(e=this._highlightItemEl.nextElementSibling),e===null&&(e=this._firstItemEl);let t=!1;for(let n=0;n<this._matchingItems.length&&(t=e.classList.contains(this._DISABLED_ITEM_CLASS),t);n++)e=e.nextElementSibling,e===null&&(e=this._firstItemEl);!t&&this._setHighlightAndActiveDescendantMenu(e)}_setHighlightAndActiveDescendantMenu(e){this._actionHighlightMenuItem(e),this._actionSetActiveDescendant(e.id),this._scrollToView()}_actionSetActiveDescendant(e){e!==void 0&&this._inputEl!==null&&this._inputEl.setAttribute(`aria-activedescendant`,e)}_actionRemoveActiveDescendant(){this._inputEl.removeAttribute(`aria-activedescendant`)}_setMenuPosition(){!this._menuEl||!this._toggleEl||(this._setMenuPositionAboveOrBelow(this._menuEl,this._toggleEl),this._setMenuPositionLeftOrRight(this._menuEl,this._toggleEl))}_handleClickRemoveSelectedItem(e){let t=e.currentTarget,n=parseInt(t.getAttribute(`selected-item-index`)||`-1`,10),r=this._selectedValues.filter((e,t)=>t!==n),i=this.value;this._selectedValues=r,this.value=r;let a={oldValue:i,value:this.value};B(this,`change`,a)}_handleClickToggleButton(e){e.preventDefault(),this._inputEl.focus();let t=this._inputEl.value.length;this._inputEl.setSelectionRange(t,t),this._setMatchingItems(),this._actionShowMenu()}_handleMouseDownToggleButton(e){e.preventDefault()}_handleClickIconButton(e){e.preventDefault();let t={value:this.value};B(this,`click-picker-icon`,t)}_setMenuPositionAboveOrBelow(e,t){let n=t.getBoundingClientRect(),r=n.top,i=window.innerHeight;window.innerHeight>document.documentElement.clientHeight&&(i=document.documentElement.clientHeight);let a=i-n.bottom;e.style.height=`auto`,e.style.maxHeight=`none`,e.style.top=`auto`,e.style.bottom=`auto`;let o=e.getBoundingClientRect().height;e.style.maxHeight=`var(--kuc-user-org-group-select-menu-max-height, none)`;let s=getComputedStyle(e).maxHeight,c;s&&s!==`none`&&(c=parseFloat(s));let l=c?Math.min(o,c):o,u,d;a>=l?(u=n.bottom,d=l):r>=l?(u=n.top-l,d=l):a>=r?(u=n.bottom,d=a):(u=n.top-r,d=r),e.style.position=`fixed`;let f=`${u}px`;e.style.top!==f&&(e.style.top=f);let p=`${d}px`;e.style.height!==p&&(e.style.height=p),e.style.overflowY=`auto`,e.style.overflowX=`hidden`,this._menuEl&&this._previousScrollTop&&(this._menuEl.scrollTop=this._previousScrollTop)}_setMenuPositionLeftOrRight(e,t){e.style.right=`auto`;let n=e.offsetWidth,r=t.getBoundingClientRect(),i=window.innerWidth;window.innerWidth>document.documentElement.clientWidth&&(i=document.documentElement.clientWidth);let a=r.left;i<r.right&&i>r.left&&(a=i-n);let o=`${a}px`;e.style.left!==o&&(e.style.left=o)}_scrollToView(){if(!this._highlightItemEl||!this._menuEl)return;let e=this._menuEl.getBoundingClientRect(),t=this._highlightItemEl.getBoundingClientRect();t.top<e.top&&(this._menuEl.scrollTop-=e.top-t.top),e.bottom<t.bottom&&(this._menuEl.scrollTop+=t.bottom-e.bottom)}_actionHighlightFirstMenuItem(){let e=this._firstItemEl,t=!1;for(let n=0;n<this._matchingItems.length&&(t=e.classList.contains(this._DISABLED_ITEM_CLASS),t);n++)e=e.nextElementSibling;!t&&this._setHighlightAndActiveDescendantMenu(e)}_actionHighlightLastMenuItem(){let e=this._lastItemEl,t=!1;for(let n=0;n<this._matchingItems.length&&(t=e.classList.contains(this._DISABLED_ITEM_CLASS),t);n++)e=e.previousElementSibling;!t&&this._setHighlightAndActiveDescendantMenu(e)}_setMatchingItems(){let e=this.items.filter(e=>{let t=new RegExp((e=>e.replace(/[.*+?^=!:${}()|[\]/\\]/g,`\\$&`))(this._query.trim()),`gi`);return e.label?t.test(e.label):e.value?t.test(e.value):!1});e.length===0?(this._matchingItems=[],this._actionHideMenu()):(this._matchingItems=e,this._actionShowMenu())}async _actionShowMenu(){this._query.trim()===``&&(this._matchingItems=this.items),!(this.items.length===0||this._matchingItems.length===0)&&(this._inputEl.focus(),this._selectorVisible=!0,this._menuEl.showPopover(),await this.updateComplete,!(!this._menuEl||!this._toggleEl)&&(this._setMenuPosition(),this._attachListeners()))}_handleMouseOverUserOrgGroupItem(e){let t=this._getItemElementWhenMouseOverDown(e.target);this._actionHighlightMenuItem(t)}_actionHighlightMenuItem(e){this._actionClearAllHighlightMenuItem(),e.setAttribute(`aria-selected`,`true`),e.classList.add(`kuc-user-org-group-select-1-25-0__group__container__select-area__select-menu__item__highlight`)}_handleClickUserOrgGroupItem(e){let t=this._getItemElementWhenMouseOverDown(e.target).getAttribute(`value`);this._actionUpdateValue(t)}_actionUpdateValue(e){if(this._selectedValues.includes(e)){this._resetToggleInputValue();return}let t=this.value,n=[...this._selectedValues,e];this._selectedValues=n,this.value=n;let r={oldValue:t,value:this.value};this._query=``,B(this,`change`,r),this._resetToggleInputValue()}_getItemElementWhenMouseOverDown(e){return e.classList.value.split(` `).includes(`kuc-user-org-group-select-1-25-0__group__container__select-area__select-menu__item`)?e:this._getItemElementWhenMouseOverDown(e.parentElement)}_handleMouseLeaveMenu(){this._actionClearAllHighlightMenuItem()}_actionClearAllHighlightMenuItem(){this._itemsEl.forEach(e=>{e.setAttribute(`aria-selected`,`false`),e.classList.remove(`kuc-user-org-group-select-1-25-0__group__container__select-area__select-menu__item__highlight`)}),this._actionRemoveActiveDescendant()}_handleMouseDownMenu(e){e.preventDefault()}_handleClickDocument(e){e.target===this._toggleEl||this._toggleEl.contains(e.target)||Array.from(this._disabledItemsEl).some(t=>t===e.target||t.contains(e.target))||this._actionHideMenu()}_handleScrollMenu(){this._previousScrollTop=this._menuEl.scrollTop}_attachListeners(){this._detachListeners(),this._scrollTargets=this._getScrollableAncestors(this._toggleEl);for(let e of this._scrollTargets)e.addEventListener(`scroll`,this._setMenuPosition,{passive:!0});this._menuEl.addEventListener(`scroll`,this._handleScrollMenu),window.addEventListener(`resize`,this._actionResizeScrollWindow),document.addEventListener(`click`,this._handleClickDocument,{capture:!0})}_detachListeners(){var e;for(let e of this._scrollTargets)e.removeEventListener(`scroll`,this._setMenuPosition);this._scrollTargets=[],(e=this._menuEl)==null||e.removeEventListener(`scroll`,this._handleScrollMenu),window.removeEventListener(`resize`,this._actionResizeScrollWindow),document.removeEventListener(`click`,this._handleClickDocument,{capture:!0})}_getScrollableAncestors(e){let t=[],n=e.parentElement,r=/(auto|scroll|overlay)/;for(;n&&n!==document.body&&n!==document.documentElement;){let e=getComputedStyle(n);(r.test(e.overflowY)||r.test(e.overflowX))&&t.push(n),n=n.parentElement}return t.push(window),t}_actionHideMenu(){this._selectorVisible=!1,this._menuEl.hidePopover(),this._detachListeners(),this._actionRemoveActiveDescendant()}_getPickerSVGTemplateByIcon(e){if(!e)return``;switch(e){case`user`:return this._getUserPickerSvgTemplate();case`org`:return this._getOrgPickerSvgTemplate();case`group`:return this._getGroupPickerSvgTemplate();default:return``}}_getSvgTemplateByType(e,t=this._LARGE_ICON_SIZE){if(!e)return``;switch(e){case`user`:return this._getUserSvgTemplate(t);case`org`:return this._getOrgSvgTemplate(t);case`group`:return this._getGroupSvgTemplate(t);default:return``}}_getUserPickerSvgTemplate(){return O`
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
        </svg>`}_getOrgPickerSvgTemplate(){return O`
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="0.5" y="0.5" width="39" height="39" fill="#3498db"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M15 7V14H25V7H15ZM13 5H27V16H21V19H27V21V23H36V34H22V23H25V21H15V23H18V34H4V23H13V21V19H19V16H13V5ZM6 25V32H16V25H6ZM24 32V25H34V32H24Z" fill="white"/>
        </svg>`}_getGroupPickerSvgTemplate(){return O`
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="0.5" y="0.5" width="39" height="39" fill="#3498db"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M12.6551 24.1065C12.3317 23.9525 12.0125 23.7844 11.698 23.6024L11.6295 23.5538C11.3087 23.2805 11.2372 22.741 11.2374 21.7176C11.2479 21.2643 11.3739 20.8281 11.5956 20.4752C11.778 20.0909 11.892 19.6587 11.9333 19.1728C11.9734 18.8758 12.0581 18.5915 12.1643 18.3772C12.2589 18.1446 12.3242 17.8943 12.3577 17.6357L12.3751 17.5448C12.3976 17.457 12.3976 17.3623 12.3768 17.2809C12.3352 17.1245 12.3038 16.9639 12.2829 16.8009L12.2717 16.7132L12.2803 16.6251C12.3034 16.3892 12.3242 16.1742 12.3433 15.9768C12.3628 15.7742 12.3806 15.5902 12.3973 15.4212C12.4046 14.8764 12.2454 14.3493 11.9507 13.9484C11.5271 13.3623 10.9159 13.0582 10.2937 13.1239L10.213 13.1237C9.59178 13.0557 8.98076 13.3575 8.55289 13.9473C8.26007 14.3412 8.10115 14.8673 8.10773 15.3532C8.12287 15.5191 8.13739 15.6833 8.16535 16.0012C8.18835 16.2612 8.20477 16.4405 8.22211 16.6178L8.2298 16.6965L8.22163 16.7751C8.20329 16.9514 8.16943 17.1245 8.1298 17.2569C8.10695 17.3516 8.10695 17.4529 8.1298 17.5476L8.14334 17.6184C8.18073 17.8801 8.25069 18.1324 8.35314 18.3719C8.46153 18.6321 8.53033 18.9162 8.55601 19.2102C8.5944 19.6569 8.70942 20.0871 8.89274 20.4703C9.11905 20.8203 9.24997 21.2565 9.26522 21.7358V21.929C9.30165 22.3744 9.24576 22.8245 9.10291 23.2339L9.04949 23.387L8.94263 23.4843C8.64824 23.7523 8.31767 23.9487 8.00464 24.0493L7.15028 24.425C5.78535 25.0813 5.04368 25.6544 5.01834 25.8055C4.99303 26.0876 4.97631 26.3707 4.9682 26.6542H8.03855C7.71232 27.0377 7.44846 27.4499 7.2567 27.8843H4.01041L4.00163 27.2807C3.99378 26.7411 4.01399 26.2015 4.06832 25.6149C4.19756 24.789 5.08295 24.1048 6.82411 23.2679L7.72834 22.8721C7.91901 22.8096 8.10105 22.7111 8.26854 22.5802C8.31037 22.4049 8.32337 22.2198 8.30616 22.0367L8.30272 21.9633L8.30314 21.7615C8.29682 21.568 8.23916 21.3831 8.13966 21.2371L8.09543 21.1611C7.82441 20.6114 7.65474 19.9902 7.59936 19.3456C7.58726 19.2071 7.55474 19.0729 7.5061 18.956C7.36114 18.6173 7.25836 18.2518 7.2014 17.8728C7.13032 17.5527 7.13353 17.2117 7.21915 16.8603C7.23605 16.8025 7.24922 16.7431 7.25854 16.6827C7.24361 16.5269 7.22861 16.3617 7.20894 16.1394L7.20467 16.0909C7.17941 15.8037 7.16568 15.6476 7.14859 15.4385C7.1331 14.5704 7.38708 13.7297 7.85104 13.1057C8.4674 12.2559 9.35196 11.811 10.2548 11.8942C11.1582 11.8144 12.0422 12.2623 12.6549 13.11C13.1184 13.7406 13.3712 14.5774 13.3564 15.5031C13.3225 15.8748 13.2874 16.2441 13.2446 16.6828C13.2561 16.7517 13.271 16.8206 13.2898 16.8917C13.372 17.2123 13.3758 17.5568 13.3015 17.8797C13.2498 18.2509 13.1537 18.6115 12.9997 18.9861C12.9408 19.1071 12.9007 19.2414 12.8861 19.3421C12.8326 19.9872 12.6653 20.6083 12.3966 21.1587L12.3563 21.2296C12.2592 21.3768 12.2039 21.5616 12.1997 21.7358C12.1997 22.0747 12.2127 22.3422 12.2367 22.5229C12.6612 22.8009 13.0881 23.0096 13.5223 23.1916L13.6079 23.2398C13.624 23.2513 13.641 23.2605 13.6925 23.2818C14.0991 23.4793 14.4589 23.6685 14.773 23.8532C14.0381 23.873 13.328 23.9604 12.6551 24.1065Z" fill="white"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M27.3449 24.1065C27.6683 23.9525 27.9875 23.7844 28.302 23.6024L28.3705 23.5538C28.6913 23.2805 28.7628 22.741 28.7626 21.7176C28.7521 21.2643 28.6261 20.8281 28.4044 20.4752C28.222 20.0909 28.108 19.6587 28.0667 19.1728C28.0266 18.8758 27.9419 18.5915 27.8357 18.3772C27.7411 18.1446 27.6758 17.8943 27.6423 17.6357L27.6249 17.5448C27.6024 17.457 27.6024 17.3623 27.6232 17.2809C27.6648 17.1245 27.6962 16.9639 27.7171 16.8009L27.7283 16.7132L27.7197 16.6251C27.6966 16.3892 27.6758 16.1742 27.6567 15.9768C27.6372 15.7742 27.6194 15.5902 27.6027 15.4212C27.5954 14.8764 27.7546 14.3493 28.0493 13.9484C28.4729 13.3623 29.0841 13.0582 29.7063 13.1239L29.787 13.1237C30.4082 13.0557 31.0192 13.3575 31.4471 13.9473C31.7399 14.3412 31.8989 14.8673 31.8923 15.3532C31.8771 15.5191 31.8626 15.6833 31.8346 16.0012C31.8117 16.2612 31.7952 16.4405 31.7779 16.6178L31.7702 16.6965L31.7784 16.7751C31.7967 16.9514 31.8306 17.1245 31.8702 17.2569C31.8931 17.3516 31.8931 17.4529 31.8702 17.5476L31.8567 17.6184C31.8193 17.8801 31.7493 18.1324 31.6469 18.3719C31.5385 18.6321 31.4697 18.9162 31.444 19.2102C31.4056 19.6569 31.2906 20.0871 31.1073 20.4703C30.8809 20.8203 30.75 21.2565 30.7348 21.7358V21.9291C30.6983 22.3744 30.7542 22.8245 30.8971 23.2339L30.9505 23.387L31.0574 23.4843C31.3518 23.7523 31.6823 23.9487 31.9954 24.0493L32.8497 24.425C34.2146 25.0813 34.9563 25.6544 34.9817 25.8055C35.007 26.0876 35.0237 26.3707 35.0318 26.6542H31.9614C32.2877 27.0377 32.5515 27.4499 32.7433 27.8843H35.9896L35.9984 27.2807C36.0062 26.7411 35.986 26.2015 35.9317 25.6149C35.8024 24.789 34.9171 24.1048 33.1759 23.2679L32.2717 22.8721C32.081 22.8096 31.8989 22.7111 31.7315 22.5802C31.6896 22.4049 31.6766 22.2198 31.6938 22.0367L31.6973 21.9633L31.6969 21.7615C31.7032 21.568 31.7608 21.3831 31.8603 21.2371L31.9046 21.1611C32.1756 20.6114 32.3453 19.9902 32.4006 19.3456C32.4127 19.2071 32.4453 19.0729 32.4939 18.956C32.6389 18.6173 32.7416 18.2518 32.7986 17.8728C32.8697 17.5527 32.8665 17.2117 32.7809 16.8603C32.7639 16.8025 32.7508 16.7431 32.7415 16.6827C32.7564 16.5269 32.7714 16.3617 32.7911 16.1394L32.7953 16.0911C32.8206 15.8038 32.8343 15.6476 32.8514 15.4385C32.8669 14.5704 32.6129 13.7297 32.149 13.1057C31.5326 12.2559 30.648 11.811 29.7452 11.8942C28.8418 11.8144 27.9578 12.2623 27.3451 13.11C26.8816 13.7406 26.6288 14.5774 26.6436 15.5031C26.6775 15.8748 26.7126 16.2441 26.7554 16.6828C26.7439 16.7517 26.729 16.8206 26.7102 16.8917C26.628 17.2123 26.6242 17.5568 26.6985 17.8797C26.7502 18.2509 26.8463 18.6115 27.0003 18.9861C27.0592 19.1071 27.0993 19.2414 27.1139 19.3421C27.1674 19.9872 27.3347 20.6083 27.6034 21.1587L27.6437 21.2296C27.7408 21.3768 27.7961 21.5616 27.8003 21.7358C27.8003 22.0747 27.7873 22.3422 27.7633 22.5229C27.3388 22.8009 26.9119 23.0096 26.4777 23.1916L26.3921 23.2398C26.376 23.2513 26.359 23.2605 26.3075 23.2818C25.9009 23.4793 25.5411 23.6685 25.227 23.8532C25.9619 23.873 26.672 23.9604 27.3449 24.1065Z" fill="white"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M30.8186 29.5726C30.6403 29.1791 29.1727 28.2439 26.6283 27.1984C26.4894 27.1538 26.3545 27.096 26.2253 27.0255C25.2156 26.665 24.2242 26.2474 23.2552 25.7743L23.1183 25.6924C22.4767 25.2312 22.3337 24.3208 22.3341 22.5938C22.3551 21.8288 22.6071 21.0928 23.0506 20.4972C23.4154 19.8487 23.6434 19.1194 23.7259 18.2995C23.8061 17.7982 23.9756 17.3184 24.1879 16.9569C24.3772 16.5643 24.5077 16.142 24.5748 15.7056L24.6096 15.5522C24.6546 15.404 24.6546 15.2441 24.613 15.1068C24.5298 14.8429 24.467 14.5719 24.4252 14.2968L24.4027 14.1489L24.4199 14.0002C24.5134 13.1937 24.5882 12.5318 24.6538 11.9686C24.6685 11.0492 24.3501 10.1598 23.7607 9.4832C22.9135 8.49423 21.6911 7.98104 20.4468 8.09191L20.2853 8.09164C19.0429 7.97677 17.8209 8.48614 16.9651 9.48141C16.3795 10.1462 16.0616 11.0338 16.0748 11.8539C16.1051 12.1338 16.1341 12.4109 16.19 12.9474C16.236 13.3861 16.2689 13.6887 16.3036 13.9879L16.3189 14.1207L16.3026 14.2533C16.2659 14.5508 16.1982 14.8429 16.1189 15.0664C16.0732 15.2262 16.0732 15.3971 16.1189 15.5569L16.146 15.6764C16.2208 16.1179 16.3607 16.5437 16.5656 16.9479C16.7824 17.3869 16.92 17.8663 16.9714 18.3625C17.0481 19.1164 17.2782 19.8424 17.6448 20.4889C18.0975 21.0795 18.3593 21.8157 18.3898 22.6245V22.9506C18.4626 23.7022 18.3509 24.4616 18.0652 25.1525L17.9583 25.4109L17.7446 25.5751C17.1558 26.0274 16.4947 26.3587 15.8686 26.5284L14.1599 27.1625C11.43 28.27 9.94671 29.2372 9.89602 29.4921C9.8454 29.9681 9.81195 30.4459 9.79575 30.9243H30.897L30.8186 29.5726ZM26.9039 25.0812L27.0751 25.1624C27.1073 25.1818 27.1413 25.1974 27.2444 25.2334C30.6551 26.6309 32.42 27.7844 32.7105 29.155L32.7328 29.3215L32.946 33H7.88019L7.86263 31.9814C7.84694 31.071 7.88735 30.1603 7.99601 29.1703C8.25449 27.7768 10.0253 26.6222 13.5076 25.2099L15.3161 24.5419C15.6974 24.4364 16.0615 24.2702 16.3964 24.0493C16.4801 23.7535 16.5061 23.4412 16.4717 23.1322L16.4648 23.0084L16.4657 22.6678C16.453 22.3413 16.3377 22.0292 16.1387 21.7828L16.0502 21.6546C15.5082 20.7271 15.1689 19.6788 15.0581 18.5909C15.0339 18.3573 14.9689 18.1307 14.8716 17.9335C14.5817 17.3619 14.3761 16.7453 14.2622 16.1057C14.12 15.5655 14.1264 14.99 14.2977 14.3971C14.3315 14.2996 14.3578 14.1993 14.3765 14.0973C14.3466 13.8344 14.3166 13.5557 14.2773 13.1805C14.2212 12.6427 14.1926 12.37 14.1566 11.9978C14.1256 10.5328 14.6335 9.11422 15.5614 8.06107C16.7942 6.62717 18.5633 5.87626 20.369 6.0167C22.1758 5.88217 23.9437 6.63783 25.1692 8.06843C26.0962 9.13255 26.6019 10.5446 26.5722 12.1068C26.5043 12.734 26.4342 13.3572 26.3486 14.0975C26.3715 14.2138 26.4013 14.3301 26.439 14.45C26.6033 14.991 26.6111 15.5724 26.4623 16.1172C26.3591 16.7437 26.1668 17.3521 25.8588 17.9844C25.7409 18.1884 25.6608 18.4152 25.6315 18.5851C25.5247 19.6736 25.1899 20.7218 24.6526 21.6506L24.5719 21.7702C24.3777 22.0186 24.2672 22.3305 24.2587 22.6245C24.2587 23.1963 24.2848 23.6477 24.3327 23.9527C25.1817 24.4218 26.0357 24.774 26.9039 25.0812Z" fill="white"/>
        </svg>`}_getSearchPickerSvgTemplate(){return O`
        <svg width="38" height="38" viewBox="-8 -8 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" class="kuc-user-org-group-select-1-25-0__group__container__select-area__toggle__icon__button__svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M15.1034 16.5176C11.5697 19.3478 6.3971 19.125 3.12139 15.8493C-0.393328 12.3346 -0.393328 6.63611 3.12139 3.12139C6.63611 -0.393328 12.3346 -0.393328 15.8493 3.12139C18.878 6.15005 19.2968 10.8002 17.1058 14.2774L23.6275 20.7991L21.5062 22.9204L15.1034 16.5176ZM13.728 5.24271C16.0711 7.58586 16.0711 11.3848 13.728 13.728C11.3848 16.0711 7.58586 16.0711 5.24271 13.728C2.89957 11.3848 2.89957 7.58586 5.24271 5.24271C7.58586 2.89957 11.3848 2.89957 13.728 5.24271Z" fill="#888888"/>
        </svg>`}_getRemoveSVGTemplate(){return O`
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
      `}_getUserSvgTemplate(e){return O`
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
        </svg>`}_getOrgSvgTemplate(e){return O`
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
        </svg>`}_getGroupSvgTemplate(e){return O`
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
        </svg>`}}X([A({type:String,reflect:!0,attribute:`class`})],e.prototype,`className`,void 0),X([A({type:String})],e.prototype,`error`,void 0),X([A({type:String})],e.prototype,`icon`,void 0),X([A({type:String,reflect:!0,attribute:`id`})],e.prototype,`id`,void 0),X([A({type:String})],e.prototype,`label`,void 0),X([A({type:String})],e.prototype,`placeholder`,void 0),X([A({type:Boolean})],e.prototype,`disabled`,void 0),X([A({type:Boolean})],e.prototype,`requiredIcon`,void 0),X([A({type:Boolean,attribute:`hidden`,reflect:!0,converter:L})],e.prototype,`visible`,void 0),X([A({type:Array})],e.prototype,`items`,void 0),X([A({type:Array})],e.prototype,`value`,void 0),X([N(`.kuc-user-org-group-select-1-25-0__group__container__select-area__select-menu__item`)],e.prototype,`_itemsEl`,void 0),X([M(`.kuc-user-org-group-select-1-25-0__group__container__select-area__toggle__input`)],e.prototype,`_inputEl`,void 0),X([M(`.kuc-user-org-group-select-1-25-0__group__container__select-area__toggle`)],e.prototype,`_toggleEl`,void 0),X([M(`.kuc-user-org-group-select-1-25-0__group__container__select-area__select-menu`)],e.prototype,`_menuEl`,void 0),X([M(`.kuc-user-org-group-select-1-25-0__group__container__select-area__select-menu__item__highlight`)],e.prototype,`_highlightItemEl`,void 0),X([M(`.kuc-user-org-group-select-1-25-0__group__container__select-area__select-menu__item:first-child`)],e.prototype,`_firstItemEl`,void 0),X([M(`.kuc-user-org-group-select-1-25-0__group__container__select-area__select-menu__item:last-child`)],e.prototype,`_lastItemEl`,void 0),X([N(`.kuc-user-org-group-select-1-25-0__group__container__select-area__select-menu__item--disabled`)],e.prototype,`_disabledItemsEl`,void 0),X([j()],e.prototype,`_selectedValues`,void 0),X([j()],e.prototype,`_searchText`,void 0),X([j()],e.prototype,`_selectorVisible`,void 0),window.customElements.define(`kuc-user-org-group-select-1-25-0`,e),V(Cc),wc=e})();var Tc=`
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
`,Ec=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},Dc;(()=>{if(Dc=window.customElements.get(`kuc-mobile-button-1-25-0`),Dc)return;class e extends z{constructor(e){super(),this.className=``,this.id=``,this.text=``,this.type=`normal`,this.content=``,this.disabled=!1,this.visible=!0,this._content=``;let t=U(e);Object.assign(this,t)}_handleClickButton(e){e.stopPropagation(),B(this,`click`)}_getButtonColorType(){return this.type===`normal`||this.type===`submit`?this.type:`normal`}willUpdate(e){(e.has(`content`)||e.has(`text`))&&(this.content!==null&&this.content!==void 0&&this.content!==``?To(this.content)?this._content=Qa(this.content):this._content=this.content:this._content=this.text)}render(){return D`
        <button
          type="button"
          class="kuc-mobile-button-1-25-0__button kuc-mobile-button-1-25-0__button--${this._getButtonColorType()}"
          ?disabled="${this.disabled}"
          @click="${this._handleClickButton}"
        >
          ${this._content}
        </button>
      `}}Ec([A({type:String,reflect:!0,attribute:`class`})],e.prototype,`className`,void 0),Ec([A({type:String,reflect:!0,attribute:`id`})],e.prototype,`id`,void 0),Ec([A({type:String})],e.prototype,`text`,void 0),Ec([A({type:String})],e.prototype,`type`,void 0),Ec([A()],e.prototype,`content`,void 0),Ec([A({type:Boolean})],e.prototype,`disabled`,void 0),Ec([A({type:Boolean,attribute:`hidden`,reflect:!0,converter:L})],e.prototype,`visible`,void 0),window.customElements.define(`kuc-mobile-button-1-25-0`,e),V(Tc),Dc=e})();var Oc=`
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
`,kc=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},Ac=class extends z{constructor(){super(...arguments),this.ariaLive=``,this.guid=``,this.text=``}render(){return D`
      ${this.ariaLive&&this.ariaLive!==``?D`
            <div
              class="kuc-base-mobile-error-1-25-0__error"
              .id="${this.guid}-error"
              role="alert"
              aria-live="${this.ariaLive}"
              ?hidden="${!this.text}"
            >
              ${this.text}
            </div>
          `:D`
            <div
              class="kuc-base-mobile-error-1-25-0__error"
              .id="${this.guid}-error"
              role="alert"
              ?hidden="${!this.text}"
            >
              ${this.text}
            </div>
          `}
    `}};kc([A({type:String})],Ac.prototype,`ariaLive`,void 0),kc([A({type:String})],Ac.prototype,`guid`,void 0),kc([A({type:String})],Ac.prototype,`text`,void 0),window.customElements.get(`kuc-base-mobile-error-1-25-0`)||(V(Oc),window.customElements.define(`kuc-base-mobile-error-1-25-0`,Ac));var jc=`
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
`,Mc=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},Nc=class extends z{constructor(){super(...arguments),this.requiredIcon=!1,this.guid=``,this.text=``}render(){return D`
      ${this._getTextTemplate()}
      <span
        class="kuc-base-mobile-label-1-25-0__required-icon"
        ?hidden="${!this.requiredIcon}"
        >*</span
      >
    `}_getTextTemplate(){return this.guid&&this.guid!==``?D`
          <span class="kuc-base-mobile-label-1-25-0__text" .id="${this.guid}-group"
            >${this.text}</span
          >
        `:D` <span class="kuc-base-mobile-label-1-25-0__text">${this.text}</span> `}};Mc([A({type:Boolean})],Nc.prototype,`requiredIcon`,void 0),Mc([A({type:String})],Nc.prototype,`guid`,void 0),Mc([A({type:String})],Nc.prototype,`text`,void 0),window.customElements.get(`kuc-base-mobile-label-1-25-0`)||(V(jc),window.customElements.define(`kuc-base-mobile-label-1-25-0`,Nc));var Pc=`
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
`,Fc=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},Ic;(()=>{if(Ic=window.customElements.get(`kuc-mobile-checkbox-1-25-0`),Ic)return;class e extends z{constructor(e){super(),this.className=``,this.error=``,this.id=``,this.label=``,this.borderVisible=!0,this.disabled=!1,this.requiredIcon=!1,this.visible=!0,this.items=[],this.selectedIndex=[],this.value=[],this._valueMapping={},this._GUID=H();let t=U(e);this._setInitialValue(t),Object.assign(this,t)}_setInitialValue(e){let t=`value`in e,n=`selectedIndex`in e,r=e.selectedIndex||[];if(!t&&n){if(!W(r))return;let t=this._getValueMapping(e);this.value=this._getValidValue(t,r)}}_getNewValueMapping(e,t){let n=parseInt(t,10),r=Object.keys(this._valueMapping),i={...this._valueMapping};return r.indexOf(t)>-1?(delete i[n],i):(i[n]=e,i)}_handleChangeInput(e){e.stopPropagation();let t=e.target,n=t.dataset.index||`0`,r=t.value,i=this.value?[...this.value]:this.value,a=this._getNewValueMapping(r,n),o=this.items.map(e=>e.value),s=Object.values(a).filter(e=>o.indexOf(e)>-1);if(s===i)return;let c=Object.keys(a).map(e=>parseInt(e,10));this.value=s,this.selectedIndex=c;let l={oldValue:i,value:s};B(this,`change`,l)}_getCheckboxIconSvgTemplate(e){return O`
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
       `}_getSVGStrokeValue(e){return e?`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAiCAQAAACOh/P6AAAABGdBTUEAALGPC/xhBQAAACBjSFJN AAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QA/4ePzL8AAAAHdElN RQfkCQcFITUNIbrXAAADHklEQVRIx63US2sTURQH8P9kmsykQtoMSbStreZRkRBxY3BR7EJwEyuo WQiCmy4EBXHhyi8g4qYfQCjYpRgQBK0GEoUmohYUsURjKz4WrTTNNDYzmUcz42Lymkfz0nN298z9 zeXcM0OgJeLoJxLkhTn14+P5uJJoWR3oy9Kx5xcCl6s4RybuQ2muk60PhXtmWc/xh8GL+0GBnvGu 599D/S9wwetOH51yg4UEt4H+B7jgZVKTkX0oQYUKEcNwttB9wwUvkwpFHOCg1lLEMOgZX43uE9ZY OwTdqgh3g7b12NYGG4yQ4KEYkoUD9nsnfX2NW8HLpAIRG3iLGge2/G32AweiZ1hjCUuWB8vlr6+8 gWRqBetRFljPXmiC4CaZlD+iWjRBAQeWy19bSaMACWiFCW5yKB24MpQueK3ZWHRwORRRLFke23VW hAoQTTYWpZMBFwkRPz4VT3s2zSydDLkEwyTUm8Dp2CZMxKJ0MuiqoAInSPw00Inaa/+gasEK2FnL Xi3km2wdJmJROul3lWrbnLDr6IShrg8R5bXXs5t5sJCa/wpbnT3sYiE3rkHEeIRJab1OmOqtKWjs Z2zFxSYLDGjsIVdRdxoOCsYjxGrlzNPl2AlzvR4yeI1l47K+QsJxbGnMV8Ru45vXUoKKEap8KVCi H0y4tkx1FSpkVHRsTgdTeEdOgSEstvHwU9TZUWrDkt2FaDitHkaBK2ZHThEMTFsV7MCHX5ZsFZKp CXpYhcRzxczoNMFYbWdRtWBVyBa9NZwY1TptY1R0k4CQeXtj84vxyowwoGj02LSNUTqyBCrPn93k vmPbOAlmuAeaRGVx8RbWUYrvGofPCm7QB6dtTHVPdgCCxv6JW4y1NdwFbYfYht0bRlzJSTzHLh04 Yp8wj5gDUlu2DRxGWMlJXPnrK3+ACulbSHdk28JAWMlJkFYz/qAjJDdOS0PuyHaAa7S8mg0EHSEJ KkjQEB69uN2J7QgDYTUnazQVUkCBvftyDuvYac92AbfSzhB7JzOPDZQ7sV3BDXrJkV1+gt/g4kon Vg8TbZ8kMQg7BAjogtXHX2EwhA6/OKOlAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDIwLTA5LTA3VDA1 OjMzOjUzKzAwOjAwOdR5sgAAACV0RVh0ZGF0ZTptb2RpZnkAMjAyMC0wOS0wN1QwNTozMzo1Mysw MDowMEiJwQ4AAAAZdEVYdFNvZnR3YXJlAEFkb2JlIEltYWdlUmVhZHlxyWU8AAAAAElFTkSuQmCC`:`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAiCAQAAACOh/P6AAAABGdBTUEAALGPC/xhBQAAACBjSFJN AAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QA/4ePzL8AAAAHdElN RQfkCQcFIRBGJW6QAAACvklEQVRIx6XWQZKbRhSA4Z8GBhACenwC5wZUypXKMlRlmUVcXrtKHMEn meQEUmWfmnHZe65ATpDcIA3MMGKEhBdgGRAaWZqnjarp94H6PTWtNWg0tPEX54fARNzwT72qed8b Ny6weqFzhbO0Fg1rHlf9Ky+CdSw5X3q/O+x4WAro0S+ADSw5T4LQw6LBRFt+5rc9LV7CeokMA1xs bOYE+MvPixfCBpb0ExkGzDDR0bFG9EVwywahzwwDAWiIPf1pcSHcZ/U90NIuHrObv+UF8DTb0hoG utKjd+qgKzSA/R9mirWlN8lCw5Yn9RT9kh4shc6VtJdXUp9ENQzs18fZmkrdR2/Sr4/QC+e1dWuG m3AdVaqeYJ3QS3zp4xxhi+jHdD//215xF84TV17xRJEWI7pl/SSQ8wl2x5a1uu+xvaW4C/3kWl4T IJGhn1jSGLCz0E+k9HC6Bhuyj2nxg0r7o92cj13aDBsXn6BHt6yXSOlhY3QFHrJ59L/KOIA/9tJ0 dGYdbUsD0WOtSbZMs0ipnMcxfDtKE+jMCJBh8K8b2rgn2DzKVM6aYbkNcG496Q7SBOAAQhpJ/cG8 8eT8BFsx7iIBRmSmBmKQJtBx8HklXy2vL2BBwK//raNNumM3umBg4xFwrGTPsV3xflZ5VKbbEa2h Y2Jhoh+w9Ql2324/HaEFYrRIsGNDedd2wjEWxNctZ5o+jB0bylX2VqniGXawCX0PvWPDwyqLFcVB gx2FITtBt2weKwoqts/+sgGcd3Q9SX9j70+yI7giR6ksKu82B/SQPVWJEVxTUaBU9rZcDelz2YNX U03TfuIGd2F29z2fnTgJbaloaCAGd2Gitewf+YfsDHbyiLWlar/EMFvobCjjfJXxcAZ75Oy26+gm 3mIuqrhYZTyexR49FLZ0wyY2/qzSkpKns1jQmrOmf398ARuVc7WA4gOtAAAAJXRFWHRkYXRlOmNy ZWF0ZQAyMDIwLTA5LTA3VDA1OjMzOjE2KzAwOjAw76ZY7wAAACV0RVh0ZGF0ZTptb2RpZnkAMjAy MC0wOS0wN1QwNTozMzoxNiswMDowMJ774FMAAAAZdEVYdFNvZnR3YXJlAEFkb2JlIEltYWdlUmVh ZHlxyWU8AAAAAElFTkSuQmCC`}_isCheckedItem(e,t){let n=Object.values(this._valueMapping),r=Object.keys(this._valueMapping);return n.filter((n,i)=>n===e.value&&t===parseInt(r[i],10)).length>0}_getItemTemplate(e,t){let n=this._isCheckedItem(e,t);return D`
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
      `}shouldUpdate(e){return e.has(`items`)&&!W(this.items)?(this.throwErrorAfterUpdateComplete(P.ITEMS.IS_NOT_ARRAY),!1):e.has(`value`)&&!W(this.value)?(this.throwErrorAfterUpdateComplete(P.VALUE.IS_NOT_ARRAY),!1):e.has(`selectedIndex`)&&!W(this.selectedIndex)?(this.throwErrorAfterUpdateComplete(P.SELECTED_INDEX.IS_NOT_ARRAY),!1):!0}willUpdate(e){if(e.has(`value`)){if(this.value.length>0)return;this.selectedIndex=[]}}update(e){(e.has(`items`)||e.has(`value`)||e.has(`selectedIndex`))&&(this._valueMapping=this._getValueMapping({items:this.items,value:this.value,selectedIndex:this.selectedIndex}),this._setValueAndSelectedIndex()),super.update(e)}render(){return D`
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
      `}updated(){this._inputEls.forEach(e=>{e.checked=this.value.indexOf(e.value)>-1})}_setValueAndSelectedIndex(){this.value=Object.values(this._valueMapping),this.selectedIndex=Object.keys(this._valueMapping).map(e=>parseInt(e,10))}_getValueMapping(e){let t=e.items||[],n=e.value||[],r=e.selectedIndex||[],i=t.map(e=>e.value||``),a=Object.assign({},i),o={};if(n.length===0){let e=this._getValidValue(a,r);return r.forEach((t,n)=>o[t]=e[n]),o}return this._getValidSelectedIndex(a).forEach((e,t)=>o[e]=n[t]),o}_getValidValue(e,t){return t.filter(t=>e[t]).map(t=>e[t])}_getValidSelectedIndex(e){let t=[];for(let n=0;n<this.value.length;n++){let r=this.selectedIndex[n];if(e[r]===this.value[n]){t.push(r);continue}let i=this.items.findIndex(e=>e.value===this.value[n]);t.push(i)}return t}}Fc([A({type:String,reflect:!0,attribute:`class`})],e.prototype,`className`,void 0),Fc([A({type:String})],e.prototype,`error`,void 0),Fc([A({type:String,reflect:!0,attribute:`id`})],e.prototype,`id`,void 0),Fc([A({type:String})],e.prototype,`label`,void 0),Fc([A({type:Boolean})],e.prototype,`borderVisible`,void 0),Fc([A({type:Boolean})],e.prototype,`disabled`,void 0),Fc([A({type:Boolean})],e.prototype,`requiredIcon`,void 0),Fc([A({type:Boolean,attribute:`hidden`,reflect:!0,converter:L})],e.prototype,`visible`,void 0),Fc([A({type:Array})],e.prototype,`items`,void 0),Fc([A({type:Array})],e.prototype,`selectedIndex`,void 0),Fc([A({type:Array})],e.prototype,`value`,void 0),Fc([N(`.kuc-mobile-checkbox-1-25-0__group__select-menu__item__input`)],e.prototype,`_inputEls`,void 0),Fc([j()],e.prototype,`_valueMapping`,void 0),window.customElements.define(`kuc-mobile-checkbox-1-25-0`,e),V(Pc),Ic=e})();var Lc=`
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
`,Rc=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},zc;(()=>{if(zc=window.customElements.get(`kuc-mobile-dropdown-1-25-0`),zc)return;class e extends z{constructor(e){super(),this.className=``,this.error=``,this.id=``,this.label=``,this.value=``,this.selectedIndex=-1,this.disabled=!1,this.requiredIcon=!1,this.visible=!0,this.items=[],this._hasValueInItems=!1,this._GUID=H();let t=U(e);this._setInitialValue(t),Object.assign(this,t)}_setInitialValue(e){let t=`value`in e,n=`selectedIndex`in e;!t&&n&&(this.value=this._getValue(e)||``)}_handleChangeInput(e){e.stopPropagation();let t=e.target,n=t.value;if(this.value===n&&this.selectedIndex===t.selectedIndex)return;let r={oldValue:this.value,value:n};this.value=n,this.selectedIndex=t.selectedIndex,B(this,`change`,r)}shouldUpdate(e){return e.has(`items`)&&!W(this.items)?(this.throwErrorAfterUpdateComplete(P.ITEMS.IS_NOT_ARRAY),!1):e.has(`value`)&&!_o(this.value)?(this.throwErrorAfterUpdateComplete(P.VALUE.IS_NOT_STRING),!1):e.has(`selectedIndex`)&&!wo(this.selectedIndex)?(this.throwErrorAfterUpdateComplete(P.SELECTED_INDEX.IS_NOT_NUMBER),!1):!0}willUpdate(e){if((e.has(`items`)||e.has(`value`))&&(this._hasValueInItems=this.items.some(e=>e.value===this.value)),e.has(`value`)){if(this.value!==``||this._hasValueInItems)return;this.selectedIndex=-1}}update(e){(e.has(`items`)||e.has(`value`)||e.has(`selectedIndex`))&&(this.selectedIndex=this._getSelectedIndex(),this.value=this._getValue({items:this.items,selectedIndex:this.selectedIndex})||``),super.update(e)}_getSelectedIndex(){if(!this.value&&!this._hasValueInItems)return this.items[this.selectedIndex]?this.selectedIndex:-1;let e=this.items.findIndex(e=>e.value===this.value);if(e===-1)return-1;let t=this.items.findIndex((e,t)=>e.value===this.value&&t===this.selectedIndex);return t>-1?t:e}_getValue(e){let t=(e.items||[])[e.selectedIndex===0||e.selectedIndex?e.selectedIndex:-1];return t?t.value:``}_isCheckedItem(e,t){return this.value?e.value===this.value&&this.selectedIndex===t:this.selectedIndex===t}_getItemTemplate(e,t){let n=this._isCheckedItem(e,t);return D`
        <option
          value="${e.value||``}"
          ?selected="${n}"
          ?disabled="${e.disabled}"
        >
          ${e.label===void 0?e.value:e.label}
        </option>
      `}render(){return D`
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
      `}updated(e){e.has(`selectedIndex`)&&(this._selectEl.selectedIndex=this.selectedIndex),super.update(e)}}Rc([A({type:String,reflect:!0,attribute:`class`})],e.prototype,`className`,void 0),Rc([A({type:String})],e.prototype,`error`,void 0),Rc([A({type:String,reflect:!0,attribute:`id`})],e.prototype,`id`,void 0),Rc([A({type:String})],e.prototype,`label`,void 0),Rc([A({type:String})],e.prototype,`value`,void 0),Rc([A({type:Number})],e.prototype,`selectedIndex`,void 0),Rc([A({type:Boolean})],e.prototype,`disabled`,void 0),Rc([A({type:Boolean})],e.prototype,`requiredIcon`,void 0),Rc([A({type:Boolean,attribute:`hidden`,reflect:!0,converter:L})],e.prototype,`visible`,void 0),Rc([A({type:Array})],e.prototype,`items`,void 0),Rc([M(`.kuc-mobile-dropdown-1-25-0__input-form__select__input`)],e.prototype,`_selectEl`,void 0),window.customElements.define(`kuc-mobile-dropdown-1-25-0`,e),V(Lc),zc=e})();var Bc=`
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
`,Vc=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},Hc;(()=>{if(Hc=window.customElements.get(`kuc-mobile-multi-choice-1-25-0`),Hc)return;class e extends z{constructor(e){super(),this.className=``,this.error=``,this.id=``,this.label=``,this.disabled=!1,this.requiredIcon=!1,this.visible=!0,this.items=[],this.selectedIndex=[],this.value=[],this._valueMapping={},this._GUID=H();let t=U(e);this._setInitialValue(t),Object.assign(this,t)}_setInitialValue(e){let t=`value`in e,n=`selectedIndex`in e,r=e.selectedIndex||[];if(!t&&n){if(!W(r))return;let t=this._getValueMapping(e);this.value=this._getValidValue(t,r)}}_handleChangeInput(e){e.stopPropagation();let t=e.target,n=this.value?[...this.value]:this.value,r=Array.from(t.selectedOptions,e=>e.value),i=Array.from(t.selectedOptions,e=>e.dataset.index),a={value:r,oldValue:n};this.value=r,this.selectedIndex=i.map(e=>e?parseInt(e,10):0),B(this,`change`,a)}shouldUpdate(e){return e.has(`items`)&&!W(this.items)?(this.throwErrorAfterUpdateComplete(P.ITEMS.IS_NOT_ARRAY),!1):e.has(`value`)&&!W(this.value)?(this.throwErrorAfterUpdateComplete(P.VALUE.IS_NOT_ARRAY),!1):e.has(`selectedIndex`)&&!W(this.selectedIndex)?(this.throwErrorAfterUpdateComplete(P.SELECTED_INDEX.IS_NOT_ARRAY),!1):!0}willUpdate(e){if(e.has(`value`)){if(this.value.length>0)return;this.selectedIndex=[]}}update(e){(e.has(`items`)||e.has(`value`)||e.has(`selectedIndex`))&&(this._valueMapping=this._getValueMapping({items:this.items,value:this.value,selectedIndex:this.selectedIndex}),this._setValueAndSelectedIndex()),super.update(e)}_getValueMapping(e){let t=e.items||[],n=e.value||[],r=e.selectedIndex||[],i=t.map(e=>e.value||``),a=Object.assign({},i),o={};if(n.length===0){let e=this._getValidValue(a,r);return r.forEach((t,n)=>o[t]=e[n]),o}return this._getValidSelectedIndex(a).forEach((e,t)=>o[e]=n[t]),o}_getValidValue(e,t){return t.filter(t=>e[t]).map(t=>e[t])}_getValidSelectedIndex(e){let t=[];for(let n=0;n<this.value.length;n++){let r=this.selectedIndex[n];if(e[r]===this.value[n]){t.push(r);continue}let i=this.items.findIndex(e=>e.value===this.value[n]);t.push(i)}return t}_setValueAndSelectedIndex(){this.value=Object.values(this._valueMapping),this.selectedIndex=Object.keys(this._valueMapping).map(e=>parseInt(e,10))}_isCheckedItem(e,t){let n=Object.values(this._valueMapping),r=Object.keys(this._valueMapping);return n.filter((n,i)=>n===e.value&&t===parseInt(r[i],10)).length>0}_getItemTemplate(e,t){let n=this._isCheckedItem(e,t);return D`
        <option
          value="${e.value||``}"
          data-index="${t}"
          ?selected="${e.value===void 0?!1:n}"
          ?disabled="${e.disabled}"
        >
          ${e.label===void 0?e.value:e.label}
        </option>
      `}render(){return D`
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
      `}}Vc([A({type:String,reflect:!0,attribute:`class`})],e.prototype,`className`,void 0),Vc([A({type:String})],e.prototype,`error`,void 0),Vc([A({type:String,reflect:!0,attribute:`id`})],e.prototype,`id`,void 0),Vc([A({type:String})],e.prototype,`label`,void 0),Vc([A({type:Boolean})],e.prototype,`disabled`,void 0),Vc([A({type:Boolean})],e.prototype,`requiredIcon`,void 0),Vc([A({type:Boolean,attribute:`hidden`,reflect:!0,converter:L})],e.prototype,`visible`,void 0),Vc([A({type:Array})],e.prototype,`items`,void 0),Vc([A({type:Array})],e.prototype,`selectedIndex`,void 0),Vc([A({type:Array})],e.prototype,`value`,void 0),Vc([j()],e.prototype,`_valueMapping`,void 0),window.customElements.define(`kuc-mobile-multi-choice-1-25-0`,e),V(Bc),Hc=e})();var Uc=`
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
`,Wc=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},Gc;(()=>{if(Gc=window.customElements.get(`kuc-mobile-radio-button-1-25-0`),Gc)return;class e extends z{constructor(e){super(),this.className=``,this.error=``,this.id=``,this.label=``,this.value=``,this.selectedIndex=-1,this.borderVisible=!0,this.disabled=!1,this.requiredIcon=!1,this.visible=!0,this.items=[],this._GUID=H();let t=U(e);this._setInitialValue(t),Object.assign(this,t)}_setInitialValue(e){let t=`value`in e,n=`selectedIndex`in e;!t&&n&&(this.value=this._getValue(e)||``)}willUpdate(e){if(e.has(`value`)){if(this.value!==``)return;this.selectedIndex=-1}}_handleChangeInput(e){e.stopPropagation();let t=e.target,n=t.value,r=t.dataset.index||`0`,i=parseInt(r,10);if(this.value===n&&this.selectedIndex===i)return;let a={oldValue:this.value,value:n};this.value=n,this.selectedIndex=i,B(this,`change`,a)}_getRadioIconSvgTemplate(e,t){return O`
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
        ${t?O`<circle cx="10.5" cy="10.5" r="6.5" fill="${`#5b5b5b`}"/>`:``}
      </svg>
    `}_isCheckedItem(e,t){return this.value?e.value===this.value&&this.selectedIndex===t:this.selectedIndex===t}_getItemTemplate(e,t){let n=this._isCheckedItem(e,t);return D`
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
      `}shouldUpdate(e){return e.has(`items`)&&!W(this.items)?(this.throwErrorAfterUpdateComplete(P.ITEMS.IS_NOT_ARRAY),!1):e.has(`value`)&&!_o(this.value)?(this.throwErrorAfterUpdateComplete(P.VALUE.IS_NOT_STRING),!1):e.has(`selectedIndex`)&&!wo(this.selectedIndex)?(this.throwErrorAfterUpdateComplete(P.SELECTED_INDEX.IS_NOT_NUMBER),!1):!0}update(e){(e.has(`items`)||e.has(`value`)||e.has(`selectedIndex`))&&(this.selectedIndex=this._getSelectedIndex(),this.value=this._getValue({items:this.items,selectedIndex:this.selectedIndex})||``),super.update(e)}render(){return D`
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
      `}updated(){this._inputEls.forEach((e,t)=>{e.checked=this.value===e.value&&t===this.selectedIndex})}_getSelectedIndex(){if(!this.value)return this.items[this.selectedIndex]?this.selectedIndex:-1;let e=this.items.findIndex(e=>e.value===this.value);if(e===-1)return-1;let t=this.items.findIndex((e,t)=>e.value===this.value&&t===this.selectedIndex);return t>-1?t:e}_getValue(e){let t=(e.items||[])[e.selectedIndex===0||e.selectedIndex?e.selectedIndex:-1];return t?t.value:``}}Wc([A({type:String,reflect:!0,attribute:`class`})],e.prototype,`className`,void 0),Wc([A({type:String})],e.prototype,`error`,void 0),Wc([A({type:String,reflect:!0,attribute:`id`})],e.prototype,`id`,void 0),Wc([A({type:String})],e.prototype,`label`,void 0),Wc([A({type:String})],e.prototype,`value`,void 0),Wc([A({type:Number})],e.prototype,`selectedIndex`,void 0),Wc([A({type:Boolean})],e.prototype,`borderVisible`,void 0),Wc([A({type:Boolean})],e.prototype,`disabled`,void 0),Wc([A({type:Boolean})],e.prototype,`requiredIcon`,void 0),Wc([A({type:Boolean,attribute:`hidden`,reflect:!0,converter:L})],e.prototype,`visible`,void 0),Wc([A({type:Array})],e.prototype,`items`,void 0),Wc([N(`.kuc-mobile-radio-button-1-25-0__group__select-menu__item__input`)],e.prototype,`_inputEls`,void 0),window.customElements.define(`kuc-mobile-radio-button-1-25-0`,e),V(Uc),Gc=e})();var Kc=`
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
`,qc=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},Jc;(()=>{if(Jc=window.customElements.get(`kuc-mobile-text-1-25-0`),Jc)return;class e extends z{constructor(e){super(),this.className=``,this.error=``,this.id=``,this.label=``,this.placeholder=``,this.prefix=``,this.suffix=``,this.textAlign=`left`,this.value=``,this.disabled=!1,this.requiredIcon=!1,this.visible=!0,this._GUID=H();let t=U(e);Object.assign(this,t)}_handleFocusInput(e){let t={value:this.value};B(this,`focus`,t)}_handleChangeInput(e){e.stopPropagation();let t=e.target,n={value:``,oldValue:this.value};this.value=t.value,n.value=this.value,B(this,`change`,n)}_handleInputText(e){e.stopPropagation();let t={value:e.target.value,data:e.data};B(this,`input`,t)}render(){return D`
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
      `}}qc([A({type:String,reflect:!0,attribute:`class`})],e.prototype,`className`,void 0),qc([A({type:String})],e.prototype,`error`,void 0),qc([A({type:String,reflect:!0,attribute:`id`})],e.prototype,`id`,void 0),qc([A({type:String})],e.prototype,`label`,void 0),qc([A({type:String})],e.prototype,`placeholder`,void 0),qc([A({type:String})],e.prototype,`prefix`,void 0),qc([A({type:String})],e.prototype,`suffix`,void 0),qc([A({type:String})],e.prototype,`textAlign`,void 0),qc([A({type:String})],e.prototype,`value`,void 0),qc([A({type:Boolean})],e.prototype,`disabled`,void 0),qc([A({type:Boolean})],e.prototype,`requiredIcon`,void 0),qc([A({type:Boolean,attribute:`hidden`,reflect:!0,converter:L})],e.prototype,`visible`,void 0),window.customElements.define(`kuc-mobile-text-1-25-0`,e),V(Kc),Jc=e})();var Yc=`
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
`,Xc=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},Zc;(()=>{if(Zc=window.customElements.get(`kuc-mobile-textarea-1-25-0`),Zc)return;class e extends z{constructor(e){super(),this.className=``,this.error=``,this.id=``,this.label=``,this.placeholder=``,this.value=``,this.disabled=!1,this.requiredIcon=!1,this.visible=!0,this._GUID=H();let t=U(e);Object.assign(this,t)}_handleFocusInput(e){let t={value:this.value};B(this,`focus`,t)}_handleChangeInput(e){e.stopPropagation();let t=e.target,n={value:``,oldValue:this.value};this.value=t.value,n.value=this.value,B(this,`change`,n)}_handleInputTextArea(e){e.stopPropagation();let t={value:e.target.value,data:e.data};B(this,`input`,t)}render(){return D`
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
      `}}Xc([A({type:String,reflect:!0,attribute:`class`})],e.prototype,`className`,void 0),Xc([A({type:String})],e.prototype,`error`,void 0),Xc([A({type:String,reflect:!0,attribute:`id`})],e.prototype,`id`,void 0),Xc([A({type:String})],e.prototype,`label`,void 0),Xc([A({type:String})],e.prototype,`placeholder`,void 0),Xc([A({type:String})],e.prototype,`value`,void 0),Xc([A({type:Boolean})],e.prototype,`disabled`,void 0),Xc([A({type:Boolean})],e.prototype,`requiredIcon`,void 0),Xc([A({type:Boolean,attribute:`hidden`,reflect:!0,converter:L})],e.prototype,`visible`,void 0),window.customElements.define(`kuc-mobile-textarea-1-25-0`,e),V(Yc),Zc=e})();var Qc=`
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
`,$c=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},el;(()=>{if(el=window.customElements.get(`kuc-mobile-notification-1-25-0`),el)return;class e extends z{constructor(e){super(),this.className=``,this.id=``,this.text=``,this.duration=-1,this.container=document.body,this.content=``,this._isOpened=!1,this._content=``;let t=U(e);Object.assign(this,t)}_handleClickCloseButton(e){this.close()}_getCloseButtonSvgTemplate(){return O`
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
      `}_setAutoCloseTimer(){this._clearAutoCloseTimer(),!(!Number.isFinite(this.duration)||this.duration<0)&&(this._timeoutID=window.setTimeout(()=>{this.close()},this.duration))}_clearAutoCloseTimer(){this._timeoutID&&window.clearTimeout(this._timeoutID)}open(){if(!this._isValidContainerElement()){document.body.appendChild(this),requestAnimationFrame(()=>{document.body.removeChild(this)}),this.performUpdate();return}this.container.appendChild(this),this.performUpdate(),this.classList.remove(`kuc-mobile-notification-fadeout-1-25-0`),this.classList.add(`kuc-mobile-notification-fadein-1-25-0`),this._isOpened=!0,this._setAutoCloseTimer()}close(){this._close(),B(this,`close`)}_close(){this._isOpened=!1,this.classList.remove(`kuc-mobile-notification-fadein-1-25-0`),this.classList.add(`kuc-mobile-notification-fadeout-1-25-0`),this._clearAutoCloseTimer()}shouldUpdate(e){if(e.has(`container`)){if(this.container===null||this.container===void 0)return this._isOpened&&this._close(),!1;let e=this._isValidContainerElement(),t=!e||!document.contains(this.container);if(this._isOpened&&t&&this._close(),!e)return this.throwErrorAfterUpdateComplete(P.CONTAINER.INVALID),!1}return!0}willUpdate(e){(e.has(`content`)||e.has(`text`))&&(this.content!==null&&this.content!==void 0&&this.content!==``?To(this.content)?this._content=D`<div
              class="kuc-mobile-notification-1-25-0__notification__title--html"
            >
              ${Qa(this.content)}
            </div>`:this._content=this.content:this._content=this.text)}_isValidContainerElement(){return this.container instanceof HTMLElement}render(){return D`
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
      `}}$c([A({type:String,reflect:!0,attribute:`class`})],e.prototype,`className`,void 0),$c([A({type:String,reflect:!0,attribute:`id`})],e.prototype,`id`,void 0),$c([A({type:String})],e.prototype,`text`,void 0),$c([A({type:Number})],e.prototype,`duration`,void 0),$c([A()],e.prototype,`container`,void 0),$c([A()],e.prototype,`content`,void 0),$c([j()],e.prototype,`_isOpened`,void 0),window.customElements.define(`kuc-mobile-notification-1-25-0`,e),V(Qc),el=e})();var tl=e=>{let t=document.createElement(`div`);return t.style.cssText=`
  height: 0px;
  overflow: hidden;
  display: inline-block;
  font-size: 14px;
  font-family: ${window.getComputedStyle(e).fontFamily};
  `,t},nl=e=>{let t=tl(e),n=e.cloneNode(!0);if(n.hasAttribute(`hidden`))return 0;t.appendChild(n),document.body.appendChild(t);let r=t.getBoundingClientRect().width;return document.body.removeChild(t),r},rl=`
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
`,il=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a};function al(e){return e>0&&e<13}function ol(e){return e>=0&&e<1e4}var sl=class extends z{constructor(){super(...arguments),this.language=`en`,this.month=1,this.year=new Date().getFullYear(),this._locale=I(`en`)}update(e){e.has(`language`)&&(this._locale=I(this.language)),this._monthOptions=this._generateMonthOptions(),this._yearOptions=this._generateYearOptions(),super.update(e)}render(){return D`
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
    `}updated(e){e.has(`month`)&&this._setSelectMonthWidth(this.month),e.has(`year`)&&this._setYearSelectedIndex(),super.update(e)}_setSelectMonthWidth(e){let t=this._monthOptions[e-1].label;if(!t)return;let n=document.createElement(`span`);n.innerText=t;let r=nl(n);this._selectMonthEl.selectedIndex=this.month-1,this._selectMonthEl.style.width=r+35+`px`}_setYearSelectedIndex(){if(this.year<100){this._selectYearEl.selectedIndex=this.year;return}this._selectYearEl.selectedIndex=100}_generateMonthOptions(){return this._locale.MONTH_SELECT.map((e,t)=>({value:`${t+1}`,label:`${e}`}))}_generateYearOptions(){return this._getYearOptions().map(e=>({value:`${e}`,label:`${e}${this._locale.YEAR_SELECT_POSTFIX}`}))}_getYearOptions(){let e=[];Number.isInteger(this.year)||(this.year=new Date().getFullYear());let t=this.year<100?0:this.year-100,n=this.year>=9899?9999:this.year+100;for(t>=n&&(t=n-100);t<=n;t++)e.push(t);return e}_getYearMonthTemplate(){return this.language===`zh`||this.language===`ja`||this.language===`zh-TW`?D` ${this._getYearTemplate()}${this._getMonthTemplate()} `:D` ${this._getMonthTemplate()}${this._getYearTemplate()} `}_handleChangeMonthDropdown(e){e.stopPropagation(),e.preventDefault();let t=e.target;this.month=parseInt(t.value,10),this._dispatchCalendarHeaderChangeEvent()}_handleChangeYearDropdown(e){e.stopPropagation(),e.preventDefault();let t=e.target;this.year=parseInt(t.value,10),this._dispatchCalendarHeaderChangeEvent()}_handleClickCalendarPrevMonthBtn(e){e.stopPropagation(),this.month===1?(this.month=12,this.year--):--this.month,this._dispatchCalendarHeaderChangeEvent()}_handleClickCalendarNextMonthBtn(e){e.stopPropagation(),this.month===12?(this.month=1,this.year++):this.month+=1,this._dispatchCalendarHeaderChangeEvent()}_dispatchCalendarHeaderChangeEvent(){let e={value:`${this.year}-${this.month}`};B(this,`kuc:mobile-calendar-header-change`,e)}_getOptionsMonthTemplate(){return this._monthOptions.map(e=>D`
        <option
          ?selected="${parseInt(e.value,10)===this.month}"
          value="${e.value}"
        >
          ${e.label}
        </option>
      `)}_getOptionsYearTemplate(){return this._yearOptions.map(e=>D`
        <option
          ?selected="${parseInt(e.value,10)===this.year}"
          value="${e.value}"
        >
          ${e.label}
        </option>
      `)}_getMonthTemplate(){return D`
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
    `}_getYearTemplate(){return D`
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
    `}_getLeftArrowIconSvgTemplate(){return O`
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
    </svg>`}_getRightArrowIconSvgTemplate(){return O`
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
    </svg>`}};il([A({type:String,attribute:`lang`,reflect:!0})],sl.prototype,`language`,void 0),il([A({type:Number,hasChanged(e){return al(e)}})],sl.prototype,`month`,void 0),il([A({type:Number,hasChanged(e){return ol(e)}})],sl.prototype,`year`,void 0),il([j()],sl.prototype,`_monthOptions`,void 0),il([j()],sl.prototype,`_yearOptions`,void 0),il([M(`.kuc-base-mobile-datetime-calendar-header-1-25-0__group__center__month__select`)],sl.prototype,`_selectMonthEl`,void 0),il([M(`.kuc-base-mobile-datetime-calendar-header-1-25-0__group__center__year__select`)],sl.prototype,`_selectYearEl`,void 0),window.customElements.get(`kuc-base-mobile-datetime-calendar-header-1-25-0`)||(V(rl),window.customElements.define(`kuc-base-mobile-datetime-calendar-header-1-25-0`,sl));var cl=`
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
`,ll=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},ul=class extends z{constructor(){super(),this.month=1,this.year=2021,this.language=`en`,this.value=``,this._month=1,this._year=2021,this._locale=I(`en`),this._handleClickDocument=this._handleClickDocument.bind(this)}connectedCallback(){super.connectedCallback(),setTimeout(()=>{document.addEventListener(`click`,this._handleClickDocument)},1)}disconnectedCallback(){document.removeEventListener(`click`,this._handleClickDocument),super.disconnectedCallback()}update(e){if(e.forEach((e,t)=>{t===`language`&&(this._locale=I(this.language))}),e.has(`month`)&&(this._month=this.month),e.has(`year`)&&(this._year=this.year),e.has(`value`)){let{month:e,year:t}=this._separateDateValue();this._month=parseInt(e,10),this._year=parseInt(t,10)}super.update(e)}render(){return D`
      <table class="kuc-base-mobile-datetime-calendar-body-1-25-0__table" role="grid">
        ${this._getHeaderItemsTemplate()}<!--
        -->${this._getDateItemsTemplate()}
      </table>
    `}_handleClickDocument(){B(this,`kuc:mobile-calendar-body-blur`,{})}_handleClickDate(e){e.preventDefault(),e.stopPropagation();let t=e.target;t.setAttribute(`aria-selected`,`true`);let n=t.getAttribute(`data-date`);this._dispatchClickEvent(n)}_dispatchClickEvent(e){let t={oldValue:this.value,value:e};B(this,`kuc:mobile-calendar-body-click-date`,t),this.value=e}_isToday(e){let t=new Date;return parseInt(e[0],10)===t.getFullYear()&&parseInt(e[1],10)===t.getMonth()+1&&parseInt(e[2],10)===t.getDate()}_separateDateValue(e=this.value){let t=e.split(`-`);return{day:t[2],month:t[1],year:t[0]}}_getDateClass(e,t){return t?this._isToday(e)?` kuc-base-mobile-datetime-calendar-body-1-25-0__table__date--today`:``:` kuc-base-mobile-datetime-calendar-body-1-25-0__table__date--other-month`}_isSameDayOfMoment(e){let t=parseInt(e[1],10),n=parseInt(e[2],10),r=parseInt(e[0],10),i=new Date().getDate();if(!this.value.split(`-`)[2])return!1;if(this.value&&(i=new Date(`${this.value}T00:00:00`).getDate()),i===n&&t===this._month)return!0;let a=new Date(r,this._month,0).getDate();return i>a&&a===n&&t===this._month}_getHeaderItemsTemplate(){return D`
      <thead>
        <tr>
          ${this._locale.WEEK_DAYS.map(e=>D`
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
    `}_getDateItemsTemplate(){let e=xa(this._year,this._month-1),t=this._locale.MONTH_SELECT[this._month-1];return D`
      <tbody>
        ${e.map(e=>D`
            <tr>
              ${e.map(e=>{let n=e.text.split(`-`),r=this._isSameDayOfMoment(n),i=parseInt(n[1],10)===this._month,a=(this.value===e.attr||r)&&i;return D`
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
    `}};ll([A({type:Number})],ul.prototype,`month`,void 0),ll([A({type:Number})],ul.prototype,`year`,void 0),ll([A({type:String,attribute:`lang`,reflect:!0})],ul.prototype,`language`,void 0),ll([A({type:String,reflect:!0})],ul.prototype,`value`,void 0),ll([j()],ul.prototype,`_month`,void 0),ll([j()],ul.prototype,`_year`,void 0),window.customElements.get(`kuc-base-mobile-datetime-calendar-body-1-25-0`)||(V(cl),window.customElements.define(`kuc-base-mobile-datetime-calendar-body-1-25-0`,ul));var dl=`
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
`,fl=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},pl=class extends z{constructor(){super(...arguments),this.language=`en`,this._locale=I(`en`)}update(e){e.has(`language`)&&(this._locale=I(this.language)),super.update(e)}_handleClickCalendarFooterButtonClose(e){e.stopPropagation(),B(this,`kuc:mobile-calendar-footer-click-close`)}_handleClickCalendarFooterButtonNone(e){e.stopPropagation(),B(this,`kuc:mobile-calendar-footer-click-none`)}_handleClickCalendarFooterButtonToday(e){e.stopPropagation(),B(this,`kuc:mobile-calendar-footer-click-today`)}render(){return D`
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
    `}};fl([A({type:String,attribute:`lang`,reflect:!0})],pl.prototype,`language`,void 0),fl([j()],pl.prototype,`_locale`,void 0),window.customElements.get(`kuc-base-mobile-datetime-calendar-footer-1-25-0`)||(V(dl),window.customElements.define(`kuc-base-mobile-datetime-calendar-footer-1-25-0`,pl));var ml=`
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
`,hl=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},gl=class extends z{constructor(){super(...arguments),this.language=`en`,this.value=``,this._month=1,this._year=new Date().getFullYear()}update(e){e.has(`value`)&&this._updateValue(),super.update(e)}render(){return D`
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
    `}updated(e){super.updated(e)}_handleClickCalendarGroup(e){e.stopPropagation()}_handleCalendarHeaderChange(e){let{year:t,month:n}=this._separateValue(e.detail.value);this._year=t,this._month=n}_updateValue(){this.value===``&&(this.value=La().slice(0,7)+`-01`);let{year:e,month:t}=this._separateValue(this.value);this._year=e,this._month=t}_separateValue(e){let t=e.split(`-`);return{year:parseInt(t[0],10),month:parseInt(t[1],10)}}};hl([A({type:String,attribute:`lang`,reflect:!0})],gl.prototype,`language`,void 0),hl([A({type:String,reflect:!0})],gl.prototype,`value`,void 0),hl([j()],gl.prototype,`_month`,void 0),hl([j()],gl.prototype,`_year`,void 0),window.customElements.get(`kuc-base-mobile-datetime-calendar-1-25-0`)||(V(ml),window.customElements.define(`kuc-base-mobile-datetime-calendar-1-25-0`,gl));var _l=`
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
`,vl=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},yl=class extends z{constructor(){super(...arguments),this.inputId=``,this.language=`en`,this.value=``,this.disabled=!1,this.inputAriaInvalid=!1,this.required=!1,this._dateTimeCalendarVisible=!1,this._calendarValue=``,this._inputValue=``,this._scrollDebounceTimer=null,this._scrollRAF=0,this._scrollTargets=[],this._calendarWidth=0,this._calendarHeight=0,this._schedulePositionOnScroll=()=>{!this._dateTimeCalendarVisible||this._scrollRAF||(this._scrollRAF=requestAnimationFrame(()=>{this._scrollRAF=0,this._positionCalendar()}))},this._positionCalendar=()=>{if(!this._calendarEl||!this._inputEl)return;let{inputToBottom:e,inputToTop:t,inputToLeft:n,inputDateWidth:r,inputDateHeight:i}=Ya(this),a=this._calendarHeight;e>=t?this._calendarEl.style.top=`${t+i+7.5}px`:this._calendarEl.style.top=`${t-a-2}px`,this._calendarEl.style.left=`${n-r}px`},this._onDocClick=e=>{let t=e.composedPath(),n=this._calendarEl&&t.includes(this._calendarEl),r=t.includes(this._inputEl),i=t.includes(this._btnToggleEl);!n&&!r&&!i&&this._closeCalendar()}}update(e){e.has(`inputId`)&&(this._GUID=this.inputId),(e.has(`value`)||e.has(`language`))&&this._updateValueProp(),super.update(e)}disconnectedCallback(){this._scrollRAF&&=(cancelAnimationFrame(this._scrollRAF),0),this._scrollDebounceTimer!==null&&(window.clearTimeout(this._scrollDebounceTimer),this._scrollDebounceTimer=null),this._detachListeners(),super.disconnectedCallback()}render(){return D`
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
    `}_attachListeners(){this._detachListeners(),this._scrollTargets=Ja(this._inputEl);for(let e of this._scrollTargets)e.addEventListener(`scroll`,this._schedulePositionOnScroll,{passive:!0});document.addEventListener(`click`,this._onDocClick,{capture:!0})}_detachListeners(){for(let e of this._scrollTargets)e.removeEventListener(`scroll`,this._schedulePositionOnScroll);this._scrollTargets=[],document.removeEventListener(`click`,this._onDocClick,{capture:!0})}_getGroupClass(){let e=``;return this.disabled&&(e+=` kuc-mobile-base-date-1-25-0__group--disabled`),this.required&&(e+=` kuc-mobile-base-date-1-25-0__group--required`),e}_handleClickOpenCalendar(e){if(this._dateTimeCalendarVisible){e.preventDefault(),e.stopPropagation();return}this._calendarValue=this._getNewCalendarValue(this._inputValue||``),this._openCalendar()}_updateValueProp(){if(this.value){this._inputValue=Pa(this.language,this.value),this._calendarValue=this.value;return}let e=La();this._inputValue=``,this._calendarValue=this._calendarValue?this._calendarValue.slice(0,7)+`-01`:e.slice(0,7)}_getNewCalendarValue(e){if(Ra(this.language,e))return Fa(this.language,e);let t=this._calendarValue.slice(0,7);return e===``&&(t=this._calendarValue.slice(0,7)+`-01`),t}_closeCalendar(){this._dateTimeCalendarVisible=!1,this._calendarEl&&this._calendarEl.hidePopover(),this._scrollRAF&&=(cancelAnimationFrame(this._scrollRAF),0),this._scrollDebounceTimer!==null&&(window.clearTimeout(this._scrollDebounceTimer),this._scrollDebounceTimer=null),this._detachListeners()}async _openCalendar(){if(this._dateTimeCalendarVisible=!0,this._calendarEl){await this.updateComplete,this._calendarEl.showPopover();let e=qa(this._calendarEl);this._calendarWidth=e.width,this._calendarHeight=e.height,this._positionCalendar(),this._attachListeners()}}_handleClickCalendarClickDate(e){this._closeCalendar(),e.detail.oldValue=this.value,e.detail.oldValue!==e.detail.value&&(this.value=e.detail.value,B(this,`kuc:mobile-base-date-change`,e.detail),this._btnToggleEl.focus())}_handleClickCalendarFooterButtonNone(){this._closeCalendar(),this._inputValue=``;let e=this.value?this.value.slice(0,7)+`-01`:``;e||=this._calendarValue.slice(0,7)+`-01`,this._calendarValue=e,this._dispathDateChangeCustomEvent(``)}_handleClickCalendarFooterButtonToday(){this._closeCalendar();let e=La();this._dispathDateChangeCustomEvent(e)}_handleClickCalendarFooterButtonClose(){this._closeCalendar(),this._btnToggleEl.focus()}_dispathDateChangeCustomEvent(e){let t={value:e,oldValue:this.value};this.value=e,B(this,`kuc:mobile-base-date-change`,t),this._btnToggleEl.focus()}_getCalendarTemplate(){return D`
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
    `}_getCalendarIconTemplate(){return D`
      <svg width="24" height="24" viewBox="0 0 28 28" fill="none">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M10 4C9.44772 4 9 4.44772 9 5V6H6C4.89543 6 4 6.89543 4 8V21C4 22.1046 4.89543 23 6 23H22C23.1046 23 24 22.1046 24 21V8C24 6.89543 23.1046 6 22 6H19V5C19 4.44772 18.5523 4 18 4C17.4477 4 17 4.44772 17 5V6H11V5C11 4.44772 10.5523 4 10 4ZM9 8V9C9 9.55228 9.44772 10 10 10C10.5523 10 11 9.55228 11 9V8H17V9C17 9.55228 17.4477 10 18 10C18.5523 10 19 9.55228 19 9V8H22V11H6V8H9ZM6 13V21H22V13H6Z"
          fill="#4b4b4b"
        />
      </svg>
    `}};vl([A({type:String})],yl.prototype,`inputId`,void 0),vl([A({type:String,attribute:`lang`,reflect:!0})],yl.prototype,`language`,void 0),vl([A({type:String,reflect:!0})],yl.prototype,`value`,void 0),vl([A({type:Boolean})],yl.prototype,`disabled`,void 0),vl([A({type:Boolean})],yl.prototype,`inputAriaInvalid`,void 0),vl([A({type:Boolean})],yl.prototype,`required`,void 0),vl([M(`.kuc-mobile-base-date-1-25-0__group__button`)],yl.prototype,`_btnToggleEl`,void 0),vl([M(`.kuc-mobile-base-date-1-25-0__group__input`)],yl.prototype,`_inputEl`,void 0),vl([M(`.kuc-base-mobile-date-1-25-0__calendar`)],yl.prototype,`_calendarEl`,void 0),vl([j()],yl.prototype,`_dateTimeCalendarVisible`,void 0),window.customElements.get(`kuc-mobile-base-date-1-25-0`)||(V(_l),window.customElements.define(`kuc-mobile-base-date-1-25-0`,yl));var bl=`
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
`,xl=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},Sl;(()=>{if(Sl=window.customElements.get(`kuc-mobile-date-picker-1-25-0`),Sl)return;class e extends z{constructor(e){super(),this.className=``,this.error=``,this.id=``,this.label=``,this.disabled=!1,this.requiredIcon=!1,this.language=`auto`,this.value=``,this.visible=!0,this._dateConverted=``,this._inputValue=``,this._GUID=H();let t=U(e);Object.assign(this,t)}shouldUpdate(e){return this.value===void 0||this.value===``?!0:!po(this.value)||(this._dateConverted=$a(this.value),this._dateConverted!==``&&!go(this._dateConverted))?(this.throwErrorAfterUpdateComplete(ha.VALUE),!1):!0}willUpdate(e){e.has(`value`)&&this.value!==void 0&&this.value!==``&&(this.value=this._dateConverted)}update(e){e.has(`value`)&&this._updateInputValue(),super.update(e)}render(){return D`
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
      `}_updateInputValue(){if(this.value===void 0||this.value===``){this._inputValue=``;return}this._inputValue=this.value}_getLanguage(){let e=[`en`,`ja`,`zh`,`zh-TW`,`es`];return e.indexOf(this.language)===-1?e.indexOf(document.documentElement.lang)===-1?`en`:document.documentElement.lang:this.language}_handleClickLabel(e){e.preventDefault()}_handleDateChange(e){e.stopPropagation(),e.preventDefault();let t={oldValue:this.value,value:``};this.value=e.detail.value,t.value=this.value,this._dispatchChangeEvent(t)}_dispatchChangeEvent(e){B(this,`change`,e)}}xl([A({type:String,reflect:!0,attribute:`class`})],e.prototype,`className`,void 0),xl([A({type:String})],e.prototype,`error`,void 0),xl([A({type:String,reflect:!0,attribute:`id`})],e.prototype,`id`,void 0),xl([A({type:String})],e.prototype,`label`,void 0),xl([A({type:Boolean})],e.prototype,`disabled`,void 0),xl([A({type:Boolean})],e.prototype,`requiredIcon`,void 0),xl([A({type:String,attribute:`lang`,reflect:!0,converter:Za})],e.prototype,`language`,void 0),xl([A({type:String})],e.prototype,`value`,void 0),xl([A({type:Boolean,attribute:`hidden`,reflect:!0,converter:L})],e.prototype,`visible`,void 0),xl([j()],e.prototype,`_inputValue`,void 0),window.customElements.define(`kuc-mobile-date-picker-1-25-0`,e),V(bl),Sl=e})();var Cl=`
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
`,wl=`
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
`,Tl=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},El=class extends z{constructor(e){super(),this.guid=``,this.language=`en`,this.value=``,this.disabled=!1,this.hour12=!1,this.required=!1,this._timeStep=1,this._hours=``,this._minutes=``,this._suffix=``,this._locale=I(`en`);let t=U(e);Object.assign(this,t)}update(e){e.has(`language`)&&(this._locale=I(this.language)),e.has(`hour12`)&&(this._hourOptions=Va(this.hour12)),e.has(`_timeStep`)&&(this._minuteOptions=Ba(this._timeStep)),super.update(e)}render(){return D`
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
    `}updated(e){e.has(`value`)&&this._updateInputValue(),super.update(e)}_updateInputValue(){let e=Da(this.value,this.hour12);this._hours=e.hours,this._minutes=e.minutes,this._suffix=e.suffix||``,this._setValueToInput(e)}_setValueToInput(e){if(this._minutesEl.value=e.minutes,e.suffix){this._hoursEl.value=e.suffix+` `+e.hours;return}this._hoursEl.value=e.hours}_handleChangeMinutes(e){e.preventDefault(),e.stopPropagation();let t=this._getTimeValueString(),n=e.target.value;this._minutes=n;let r=this._getTimeValueString();this.value=r,this._dispatchEventTimeChange(r,t)}_handleChangeHours(e){e.preventDefault(),e.stopPropagation();let t=this._getTimeValueString(),n=e.target.value.split(` `);n.length===2?(this._hours=n[1],this._suffix=n[0]):(this._hours=n[0],this._suffix=``);let r=this._getTimeValueString();this.value=r,this._dispatchEventTimeChange(r,t)}_getTimeValueString(){let e=`${this._hours}:${this._minutes}`;return this._suffix?ja(`${e} ${this._suffix}`):ja(e)}_dispatchEventTimeChange(e,t){let n=e===`:`?``:e,r={value:n,oldValue:t===`:`?``:t};r.error=mo(n)?``:this._locale.INVALID_TIME_FORMAT,B(this,`kuc:base-mobile-time-change`,r)}_getOptionsMinuteTemplate(){return this._minuteOptions.map(e=>D` <option value="${e.value}">${e.label}</option> `)}_getOptionsHourTemplate(){return this._hourOptions.map(e=>D` <option value="${e.value}">${e.label}</option> `)}};Tl([A({type:String})],El.prototype,`guid`,void 0),Tl([A({type:String,attribute:`lang`,reflect:!0})],El.prototype,`language`,void 0),Tl([A({type:String})],El.prototype,`value`,void 0),Tl([A({type:Boolean})],El.prototype,`disabled`,void 0),Tl([A({type:Boolean})],El.prototype,`hour12`,void 0),Tl([A({type:Boolean})],El.prototype,`required`,void 0),Tl([j()],El.prototype,`_timeStep`,void 0),Tl([j()],El.prototype,`_hours`,void 0),Tl([j()],El.prototype,`_minutes`,void 0),Tl([j()],El.prototype,`_suffix`,void 0),Tl([j()],El.prototype,`_hourOptions`,void 0),Tl([j()],El.prototype,`_minuteOptions`,void 0),Tl([M(`.kuc-base-mobile-time-1-25-0__group__hours`)],El.prototype,`_hoursEl`,void 0),Tl([M(`.kuc-base-mobile-time-1-25-0__group__minutes`)],El.prototype,`_minutesEl`,void 0),window.customElements.get(`kuc-base-mobile-time-1-25-0`)||(V(wl),window.customElements.define(`kuc-base-mobile-time-1-25-0`,El));var Dl=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},Ol;(()=>{if(Ol=window.customElements.get(`kuc-mobile-time-picker-1-25-0`),Ol)return;class e extends z{constructor(e){super(),this.className=``,this.error=``,this.id=``,this.label=``,this.language=`auto`,this.value=``,this.disabled=!1,this.hour12=!1,this.requiredIcon=!1,this.visible=!0,this._inputValue=``,this._errorFormat=``,this._isSelectError=!1,this._GUID=H();let t=U(e);Object.assign(this,t)}shouldUpdate(e){return this.value===void 0||this.value===``||mo(this.value)?!0:(this.throwErrorAfterUpdateComplete(ha.VALUE),!1)}willUpdate(){this.value===void 0||this.value===``||(this.value=eo(this.value))}update(e){e.has(`value`)&&!this._isSelectError&&(this.value===void 0?this._inputValue=``:this._inputValue=this.value||``,this._errorFormat=``),super.update(e)}render(){return D`
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
      `}updated(){this._isSelectError=!1}_handleTimeChange(e){e.preventDefault(),e.stopPropagation();let t={value:e.detail.value,oldValue:this.value};if(this._inputValue=e.detail.value,e.detail.error){this._isSelectError=!0,this._errorFormat=e.detail.error,this.value=void 0,t.value=void 0,this.error=``,B(this,`change`,t);return}this._isSelectError=!1,this._errorFormat=``,this.value=e.detail.value,B(this,`change`,t)}_getLanguage(){let e=[`en`,`ja`,`zh`,`zh-TW`,`es`];return e.indexOf(this.language)===-1?e.indexOf(document.documentElement.lang)===-1?`en`:document.documentElement.lang:this.language}}Dl([A({type:String,reflect:!0,attribute:`class`})],e.prototype,`className`,void 0),Dl([A({type:String})],e.prototype,`error`,void 0),Dl([A({type:String,reflect:!0,attribute:`id`})],e.prototype,`id`,void 0),Dl([A({type:String})],e.prototype,`label`,void 0),Dl([A({type:String,attribute:`lang`,reflect:!0,converter:Za})],e.prototype,`language`,void 0),Dl([A({type:String,hasChanged(e,t){return(e===``||e===void 0)&&e===t?!0:e!==t}})],e.prototype,`value`,void 0),Dl([A({type:Boolean})],e.prototype,`disabled`,void 0),Dl([A({type:Boolean})],e.prototype,`hour12`,void 0),Dl([A({type:Boolean})],e.prototype,`requiredIcon`,void 0),Dl([A({type:Boolean,attribute:`hidden`,reflect:!0,converter:L})],e.prototype,`visible`,void 0),Dl([j()],e.prototype,`_inputValue`,void 0),Dl([j()],e.prototype,`_errorFormat`,void 0),window.customElements.define(`kuc-mobile-time-picker-1-25-0`,e),V(Cl),Ol=e})();var kl=`
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
`,Al=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},jl;(()=>{if(jl=window.customElements.get(`kuc-mobile-datetime-picker-1-25-0`),jl)return;class e extends z{constructor(e){super(),this.className=``,this.error=``,this.id=``,this.label=``,this.language=`auto`,this.value=``,this.disabled=!1,this.hour12=!1,this.requiredIcon=!1,this.visible=!0,this._dateConverted=``,this._changeDateByUI=!1,this._changeTimeByUI=!1,this._previousTimeValue=``,this._previousDateValue=``,this._dateValue=``,this._timeValue=``,this._errorFormat=``,this._errorText=``,this._GUID=H();let t=U(e);Object.assign(this,t)}shouldUpdate(e){return this.value===void 0||this.value===``?!0:typeof this.value!=`string`||(this._dateAndTime=this._getDateTimeValue(this.value),this._dateConverted=$a(this._dateAndTime.date),!(vo(this._dateAndTime.date,this._dateAndTime.time)&&go(this._dateConverted)))?(this.throwErrorAfterUpdateComplete(ha.VALUE),!1):!0}willUpdate(e){if(this._changeDateByUI||this._changeTimeByUI){this._updateValueAndErrorWhenUIChange();return}this._errorFormat=``,this._updateErrorText(),this._updateValueWhenSetter()}update(e){e.has(`value`)&&(this.value===void 0&&this._setUndefinedValue(),this.value===``&&this._setEmptyValue()),super.update(e)}_updateValueWhenSetter(){if(this._errorFormat=``,this.value===``||this.value===void 0){this._previousTimeValue=``;return}this._setDateTimeValueSeparate(this._dateAndTime,this._dateConverted),this.value=this._getDateTimeString()}_setDateTimeValueSeparate(e,t){this._dateValue=t,this._timeValue=this._dateValue&&go(t)?eo(e.time.slice(0,5)):this._previousTimeValue}_updateValueAndErrorWhenUIChange(){let e=this._checkDateTimeFormat();this.value=e?this.value:void 0,this._updateErrorText()}_checkDateTimeFormat(){let e=!!this._timeValue&&!this._dateValue,t=!!this._dateValue&&!this._timeValue;return!this._errorFormat&&!e&&!t}_setUndefinedValue(){if(!this._changeTimeByUI){if(this._errorFormat){if(this._changeDateByUI)return;this._dateValue=``,this._timeValue=``;return}this._dateValue=this._previousDateValue,this._timeValue=this._previousTimeValue}}_setEmptyValue(){this._dateValue=``,this._timeValue=``,this._previousTimeValue=``,this._previousDateValue=``}_getDateTimeValue(e){if(e===``||e===void 0)return{date:``,time:``};let t=e.split(`T`),n=t[0],r=t[1];if(e.indexOf(`T`)===e.length-1||t.length>2)return{date:n,time:``};if(!r)return{date:n,time:`00:00`};let[i,a,o]=r.split(`:`),s=`${i}:${a||`00`}`;return o?{date:n,time:`${s}:${o}`}:{date:n,time:s}}render(){return D`
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
      `}updated(){this._resetState()}_resetState(){this._previousTimeValue=``,this._previousDateValue=``,this._changeDateByUI=!1,this._changeTimeByUI=!1}_updateErrorText(){this._errorText=this._errorFormat||this.error}_getLanguage(){let e=[`en`,`ja`,`zh`,`zh-TW`,`es`];return e.indexOf(this.language)===-1?e.indexOf(document.documentElement.lang)===-1?`en`:document.documentElement.lang:this.language}_handleDateChange(e){if(e.stopPropagation(),e.preventDefault(),e.detail.value===this._dateValue)return;this._changeDateByUI=!0;let t=this._dateValue;e.detail.error?(this._errorFormat=e.detail.error,this.error=``):t=e.detail.value,this._updateDateTimeValue(t,`date`)}_handleTimeChange(e){e.preventDefault(),e.stopPropagation(),this._changeTimeByUI=!0;let t=this._timeValue;e.detail.error?(this._errorFormat=e.detail.error,this.error=``):this._errorFormat=``,t=e.detail.value,this._updateDateTimeValue(t,`time`)}_updateDateTimeValue(e,t){let n=this.value;t===`date`?this._dateValue=e||``:this._timeValue=e,this._previousTimeValue=this._timeValue,this._previousDateValue=this._dateValue;let r=this._errorFormat?void 0:this._getDateTimeString(),i=this._errorFormat?void 0:r;this.value=i;let a=this._errorFormat?void 0:r;this.value=a;let o={value:i,oldValue:n,changedPart:t};B(this,`change`,o)}_getDateTimeString(){if(this._dateValue===``&&this._timeValue===``)return``;if(!this._dateValue||!this._timeValue)return;if(!this.value)return`${this._dateValue}T${this._timeValue}:00`;let e=this.value.split(`:`);return e.length===3?`${this._dateValue}T${this._timeValue}:${e[2]}`:`${this._dateValue}T${this._timeValue}:00`}}Al([A({type:String,reflect:!0,attribute:`class`})],e.prototype,`className`,void 0),Al([A({type:String})],e.prototype,`error`,void 0),Al([A({type:String,reflect:!0,attribute:`id`})],e.prototype,`id`,void 0),Al([A({type:String})],e.prototype,`label`,void 0),Al([A({type:String,attribute:`lang`,reflect:!0,converter:Za})],e.prototype,`language`,void 0),Al([A({type:String,hasChanged(e,t){return(e===``||e===void 0)&&e===t?!0:e!==t}})],e.prototype,`value`,void 0),Al([A({type:Boolean})],e.prototype,`disabled`,void 0),Al([A({type:Boolean})],e.prototype,`hour12`,void 0),Al([A({type:Boolean})],e.prototype,`requiredIcon`,void 0),Al([A({type:Boolean,attribute:`hidden`,reflect:!0,converter:L})],e.prototype,`visible`,void 0),Al([j()],e.prototype,`_dateValue`,void 0),Al([j()],e.prototype,`_timeValue`,void 0),Al([j()],e.prototype,`_errorFormat`,void 0),Al([j()],e.prototype,`_errorText`,void 0),window.customElements.define(`kuc-mobile-datetime-picker-1-25-0`,e),V(kl),jl=e})();var Ml={d:(e,t)=>{for(var n in t)Ml.o(t,n)&&!Ml.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)},Nl={};Ml.d(Nl,{r:()=>Pl});var Pl=`1.25.0`;Nl.r;var Fl={d:(e,t)=>{for(var n in t)Fl.o(t,n)&&!Fl.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)},Il={};Fl.d(Il,{$:()=>Ll});var Ll=void 0;Il.$;var Rl=Cr(`<div></div>`);function zl(e,t){We(t,!0);let n=E(t,`type`,3,`normal`),r=E(t,`disabled`,3,!1),i=E(t,`visible`,3,!0),a;Nr(()=>{let e=new jo({text:t.text,type:n(),content:t.content,className:t.className,id:t.id,disabled:r(),visible:i()});a.appendChild(e),t.onclick&&e.addEventListener(`click`,t.onclick)});var o=Rl();Mr(o,e=>a=e,()=>a),wr(e,o),Ge()}var Bl=Cr(`<div></div>`);function Vl(e,t){We(t,!0);let n=E(t,`textAlign`,3,`left`),r=E(t,`visible`,3,!0),i=E(t,`disabled`,3,!1),a=E(t,`requiredIcon`,3,!1),o;Nr(()=>{let e=new pc({label:t.label,value:t.value,placeholder:t.placeholder,prefix:t.prefix,suffix:t.suffix,textAlign:n(),error:t.error,className:t.className,id:t.id,visible:r(),disabled:i(),requiredIcon:a()});o.appendChild(e),t.onchange&&e.addEventListener(`change`,t.onchange),t.onfocus&&e.addEventListener(`focus`,t.onfocus),t.oninput&&e.addEventListener(`input`,t.oninput)});var s=Bl();Mr(s,e=>o=e,()=>o),wr(e,s),Ge()}var Hl=Cr(`<div></div>`);function Ul(e,t){We(t,!0);let n=E(t,`items`,19,()=>[]),r=E(t,`value`,19,()=>[]),i=E(t,`selectedIndex`,19,()=>[]),a=E(t,`itemLayout`,3,`horizontal`),o=E(t,`visible`,3,!0),s=E(t,`disabled`,3,!1),c=E(t,`borderVisible`,3,!0),l=E(t,`requiredIcon`,3,!1),u;Nr(()=>{let e=new Fo({label:t.label,items:n(),value:r(),selectedIndex:i(),itemLayout:a(),error:t.error,className:t.className,id:t.id,visible:o(),disabled:s(),borderVisible:c(),requiredIcon:l()});u.appendChild(e),t.onchange&&e.addEventListener(`change`,t.onchange)});var d=Hl();Mr(d,e=>u=e,()=>u),wr(e,d),Ge()}function Wl(e,t){We(t,!0);let n=E(t,`type`,3,`danger`),r=E(t,`duration`,19,()=>-1),i=E(t,`container`,19,()=>typeof document<`u`?document.body:void 0),a;Nr(()=>{a=new Ms({text:t.text,content:t.content,type:n(),duration:r(),className:t.className,id:t.id,container:i()}),t.onclose&&a.addEventListener(`close`,t.onclose)});function o(){a&&t.text!==void 0&&(a.text=t.text),a&&t.content!==void 0&&(a.content=t.content),a?.open()}function s(){a?.close()}function c(e){a&&(a.text=e)}return Ge({open:o,close:s,setText:c})}async function Gl(){try{let e=(await kintone.api(kintone.api.url(`/k/v1/preview/app.json`,!0),`POST`,{name:`意思決定くん リポジトリ`,description:`Repository app for 意思決定くん questionnaire data`})).app,t={app:e,properties:{appID:{type:`SINGLE_LINE_TEXT`,code:`appID`,label:`App ID`,noLabel:!1,required:!0},RecordID:{type:`SINGLE_LINE_TEXT`,code:`RecordID`,label:`Record ID`,noLabel:!1,required:!0},table:{type:`SUBTABLE`,code:`table`,label:`Questionnaires`,fields:{commentID:{type:`SINGLE_LINE_TEXT`,code:`commentID`,label:`Comment ID`,noLabel:!1,required:!0},title:{type:`SINGLE_LINE_TEXT`,code:`title`,label:`Title`,noLabel:!1,required:!0},startTime:{type:`DATETIME`,code:`startTime`,label:`Start Time`,noLabel:!1,required:!0},endTime:{type:`DATETIME`,code:`endTime`,label:`End Time`,noLabel:!1,required:!0},votes:{type:`SINGLE_LINE_TEXT`,code:`votes`,label:`Votes`,noLabel:!1,required:!1},users:{type:`USER_SELECT`,code:`users`,label:`Mentioned Users`,noLabel:!1,required:!1},group:{type:`GROUP_SELECT`,code:`group`,label:`Mentioned Groups`,noLabel:!1,required:!1},org:{type:`ORGANIZATION_SELECT`,code:`org`,label:`Mentioned Organizations`,noLabel:!1,required:!1},creator:{type:`USER_SELECT`,code:`creator`,label:`Creator`,noLabel:!1,required:!0},votedUsers:{type:`USER_SELECT`,code:`votedUsers`,label:`Voted Users`,noLabel:!1,required:!1},options:{type:`MULTI_LINE_TEXT`,code:`options`,label:`Options`,noLabel:!1,required:!0}}}}};await kintone.api(kintone.api.url(`/k/v1/preview/app/form/fields.json`,!0),`POST`,t);let n={app:e,rights:[{entity:{type:`CREATOR`},appEditable:!0,recordViewable:!0,recordAddable:!0,recordEditable:!0,recordDeletable:!1,recordImportable:!1,recordExportable:!1},{entity:{type:`GROUP`,code:`everyone`},appEditable:!1,recordViewable:!1,recordAddable:!1,recordEditable:!1,recordDeletable:!1,recordImportable:!1,recordExportable:!1}]};await kintone.api(kintone.api.url(`/k/v1/preview/app/acl.json`,!0),`PUT`,n);let r={apps:[{app:e}]};return await kintone.api(kintone.api.url(`/k/v1/preview/app/deploy.json`,!0),`POST`,r),e}catch(e){throw console.error(`Error creating repository app:`,e),e}}var Z=e=>typeof e==`string`,Kl=()=>{let e,t,n=new Promise((n,r)=>{e=n,t=r});return n.resolve=e,n.reject=t,n},ql=e=>e==null?``:String(e),Jl=(e,t,n)=>{e.forEach(e=>{t[e]&&(n[e]=t[e])})},Yl=/###/g,Xl=e=>e&&e.includes(`###`)?e.replace(Yl,`.`):e,Zl=e=>!e||Z(e),Ql=(e,t,n)=>{let r=Z(t)?t.split(`.`):t,i=0;for(;i<r.length-1;){if(Zl(e))return{};let t=Xl(r[i]);!e[t]&&n&&(e[t]=new n),e=Object.prototype.hasOwnProperty.call(e,t)?e[t]:{},++i}return Zl(e)?{}:{obj:e,k:Xl(r[i])}},$l=(e,t,n)=>{let{obj:r,k:i}=Ql(e,t,Object);if(r!==void 0||t.length===1){r[i]=n;return}let a=t[t.length-1],o=t.slice(0,t.length-1),s=Ql(e,o,Object);for(;s.obj===void 0&&o.length;)a=`${o[o.length-1]}.${a}`,o=o.slice(0,o.length-1),s=Ql(e,o,Object),s?.obj&&s.obj[`${s.k}.${a}`]!==void 0&&(s.obj=void 0);s.obj[`${s.k}.${a}`]=n},eu=(e,t,n,r)=>{let{obj:i,k:a}=Ql(e,t,Object);i[a]=i[a]||[],i[a].push(n)},tu=(e,t)=>{let{obj:n,k:r}=Ql(e,t);if(n&&Object.prototype.hasOwnProperty.call(n,r))return n[r]},nu=(e,t,n)=>{let r=tu(e,n);return r===void 0?tu(t,n):r},ru=(e,t,n)=>{for(let r in t)r!==`__proto__`&&r!==`constructor`&&(r in e?Z(e[r])||e[r]instanceof String||Z(t[r])||t[r]instanceof String?n&&(e[r]=t[r]):ru(e[r],t[r],n):e[r]=t[r]);return e},iu=e=>e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,`\\$&`),au={"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`,"'":`&#39;`,"/":`&#x2F;`},ou=e=>Z(e)?e.replace(/[&<>"'\/]/g,e=>au[e]):e,su=class{constructor(e){this.capacity=e,this.regExpMap=new Map,this.regExpQueue=[]}getRegExp(e){let t=this.regExpMap.get(e);if(t!==void 0)return t;let n=new RegExp(e);return this.regExpQueue.length===this.capacity&&this.regExpMap.delete(this.regExpQueue.shift()),this.regExpMap.set(e,n),this.regExpQueue.push(e),n}},cu=[` `,`,`,`?`,`!`,`;`],lu=new su(20),uu=(e,t,n)=>{t||=``,n||=``;let r=cu.filter(e=>!t.includes(e)&&!n.includes(e));if(r.length===0)return!0;let i=lu.getRegExp(`(${r.map(e=>e===`?`?`\\?`:e).join(`|`)})`),a=!i.test(e);if(!a){let t=e.indexOf(n);t>0&&!i.test(e.substring(0,t))&&(a=!0)}return a},du=(e,t,n=`.`)=>{if(!e)return;if(e[t])return Object.prototype.hasOwnProperty.call(e,t)?e[t]:void 0;let r=t.split(n),i=e;for(let e=0;e<r.length;){if(!i||typeof i!=`object`)return;let t,a=``;for(let o=e;o<r.length;++o)if(o!==e&&(a+=n),a+=r[o],t=i[a],t!==void 0){if([`string`,`number`,`boolean`].includes(typeof t)&&o<r.length-1)continue;e+=o-e+1;break}i=t}return i},fu=e=>e?.replace(/_/g,`-`),pu={type:`logger`,log(e){this.output(`log`,e)},warn(e){this.output(`warn`,e)},error(e){this.output(`error`,e)},output(e,t){console?.[e]?.apply?.(console,t)}},mu=new class e{constructor(e,t={}){this.init(e,t)}init(e,t={}){this.prefix=t.prefix||`i18next:`,this.logger=e||pu,this.options=t,this.debug=t.debug}log(...e){return this.forward(e,`log`,``,!0)}warn(...e){return this.forward(e,`warn`,``,!0)}error(...e){return this.forward(e,`error`,``)}deprecate(...e){return this.forward(e,`warn`,`WARNING DEPRECATED: `,!0)}forward(e,t,n,r){return r&&!this.debug?null:(e=e.map(e=>Z(e)?e.replace(/[\r\n\x00-\x1F\x7F]/g,` `):e),Z(e[0])&&(e[0]=`${n}${this.prefix} ${e[0]}`),this.logger[t](e))}create(t){return new e(this.logger,{prefix:`${this.prefix}:${t}:`,...this.options})}clone(t){return t||=this.options,t.prefix=t.prefix||this.prefix,new e(this.logger,t)}},hu=class{constructor(){this.observers={}}on(e,t){return e.split(` `).forEach(e=>{this.observers[e]||(this.observers[e]=new Map);let n=this.observers[e].get(t)||0;this.observers[e].set(t,n+1)}),this}off(e,t){if(this.observers[e]){if(!t){delete this.observers[e];return}this.observers[e].delete(t)}}once(e,t){let n=(...r)=>{t(...r),this.off(e,n)};return this.on(e,n),this}emit(e,...t){this.observers[e]&&Array.from(this.observers[e].entries()).forEach(([e,n])=>{for(let r=0;r<n;r++)e(...t)}),this.observers[`*`]&&Array.from(this.observers[`*`].entries()).forEach(([n,r])=>{for(let i=0;i<r;i++)n(e,...t)})}},gu=class extends hu{constructor(e,t={ns:[`translation`],defaultNS:`translation`}){super(),this.data=e||{},this.options=t,this.options.keySeparator===void 0&&(this.options.keySeparator=`.`),this.options.ignoreJSONStructure===void 0&&(this.options.ignoreJSONStructure=!0)}addNamespaces(e){this.options.ns.includes(e)||this.options.ns.push(e)}removeNamespaces(e){let t=this.options.ns.indexOf(e);t>-1&&this.options.ns.splice(t,1)}getResource(e,t,n,r={}){let i=r.keySeparator===void 0?this.options.keySeparator:r.keySeparator,a=r.ignoreJSONStructure===void 0?this.options.ignoreJSONStructure:r.ignoreJSONStructure,o;e.includes(`.`)?o=e.split(`.`):(o=[e,t],n&&(Array.isArray(n)?o.push(...n):Z(n)&&i?o.push(...n.split(i)):o.push(n)));let s=tu(this.data,o);return!s&&!t&&!n&&e.includes(`.`)&&(e=o[0],t=o[1],n=o.slice(2).join(`.`)),s||!a||!Z(n)?s:du(this.data?.[e]?.[t],n,i)}addResource(e,t,n,r,i={silent:!1}){let a=i.keySeparator===void 0?this.options.keySeparator:i.keySeparator,o=[e,t];n&&(o=o.concat(a?n.split(a):n)),e.includes(`.`)&&(o=e.split(`.`),r=t,t=o[1]),this.addNamespaces(t),$l(this.data,o,r),i.silent||this.emit(`added`,e,t,n,r)}addResources(e,t,n,r={silent:!1}){for(let r in n)(Z(n[r])||Array.isArray(n[r]))&&this.addResource(e,t,r,n[r],{silent:!0});r.silent||this.emit(`added`,e,t,n)}addResourceBundle(e,t,n,r,i,a={silent:!1,skipCopy:!1}){let o=[e,t];e.includes(`.`)&&(o=e.split(`.`),r=n,n=t,t=o[1]),this.addNamespaces(t);let s=tu(this.data,o)||{};a.skipCopy||(n=JSON.parse(JSON.stringify(n))),r?ru(s,n,i):s={...s,...n},$l(this.data,o,s),a.silent||this.emit(`added`,e,t,n)}removeResourceBundle(e,t){this.hasResourceBundle(e,t)&&delete this.data[e][t],this.removeNamespaces(t),this.emit(`removed`,e,t)}hasResourceBundle(e,t){return this.getResource(e,t)!==void 0}getResourceBundle(e,t){return t||=this.options.defaultNS,this.getResource(e,t)}getDataByLanguage(e){return this.data[e]}hasLanguageSomeTranslations(e){let t=this.getDataByLanguage(e);return!!(t&&Object.keys(t)||[]).find(e=>t[e]&&Object.keys(t[e]).length>0)}toJSON(){return this.data}},_u={processors:{},addPostProcessor(e){this.processors[e.name]=e},handle(e,t,n,r,i){return e.forEach(e=>{t=this.processors[e]?.process(t,n,r,i)??t}),t}},vu=Symbol(`i18next/PATH_KEY`);function yu(){let e=[],t=Object.create(null),n;return t.get=(r,i)=>(n?.revoke?.(),i===vu?e:(e.push(i),n=Proxy.revocable(r,t),n.proxy)),Proxy.revocable(Object.create(null),t).proxy}function bu(e,t){let{[vu]:n}=e(yu()),r=t?.keySeparator??`.`,i=t?.nsSeparator??`:`,a=t?.enableSelector===`strict`;if(n.length>1&&i){let e=t?.ns,o=a?Array.isArray(e)?e:e?[e]:null:Array.isArray(e)?e:null;if(o&&(a?o:o.length>1?o.slice(1):[]).includes(n[0]))return`${n[0]}${i}${n.slice(1).join(r)}`}return n.join(r)}var xu=e=>!Z(e)&&typeof e!=`boolean`&&typeof e!=`number`,Su=class e extends hu{constructor(e,t={}){super(),Jl([`resourceStore`,`languageUtils`,`pluralResolver`,`interpolator`,`backendConnector`,`i18nFormat`,`utils`],e,this),this.options=t,this.options.keySeparator===void 0&&(this.options.keySeparator=`.`),this.logger=mu.create(`translator`),this.checkedLoadedFor={}}changeLanguage(e){e&&(this.language=e)}exists(e,t={interpolation:{}}){let n={...t};if(e==null)return!1;let r=this.resolve(e,n);if(r?.res===void 0)return!1;let i=xu(r.res);return!(n.returnObjects===!1&&i)}extractFromKey(e,t){let n=t.nsSeparator===void 0?this.options.nsSeparator:t.nsSeparator;n===void 0&&(n=`:`);let r=t.keySeparator===void 0?this.options.keySeparator:t.keySeparator,i=t.ns||this.options.defaultNS||[],a=n&&e.includes(n),o=!this.options.userDefinedKeySeparator&&!t.keySeparator&&!this.options.userDefinedNsSeparator&&!t.nsSeparator&&!uu(e,n,r);if(a&&!o){let t=e.match(this.interpolator.nestingRegexp);if(t&&t.length>0)return{key:e,namespaces:Z(i)?[i]:i};let a=e.split(n);(n!==r||n===r&&this.options.ns.includes(a[0]))&&(i=a.shift()),e=a.join(r)}return{key:e,namespaces:Z(i)?[i]:i}}translate(t,n,r){let i=typeof n==`object`?{...n}:n;if(typeof i!=`object`&&this.options.overloadTranslationOptionHandler&&(i=this.options.overloadTranslationOptionHandler(arguments)),typeof i==`object`&&(i={...i}),i||={},t==null)return``;typeof t==`function`&&(t=bu(t,{...this.options,...i})),Array.isArray(t)||(t=[String(t)]),t=t.map(e=>typeof e==`function`?bu(e,{...this.options,...i}):String(e));let a=i.returnDetails===void 0?this.options.returnDetails:i.returnDetails,o=i.keySeparator===void 0?this.options.keySeparator:i.keySeparator,{key:s,namespaces:c}=this.extractFromKey(t[t.length-1],i),l=c[c.length-1],u=i.nsSeparator===void 0?this.options.nsSeparator:i.nsSeparator;u===void 0&&(u=`:`);let d=i.lng||this.language,f=i.appendNamespaceToCIMode||this.options.appendNamespaceToCIMode;if(d?.toLowerCase()===`cimode`)return f?a?{res:`${l}${u}${s}`,usedKey:s,exactUsedKey:s,usedLng:d,usedNS:l,usedParams:this.getUsedParamsDetails(i)}:`${l}${u}${s}`:a?{res:s,usedKey:s,exactUsedKey:s,usedLng:d,usedNS:l,usedParams:this.getUsedParamsDetails(i)}:s;let p=this.resolve(t,i),m=p?.res,h=p?.usedKey||s,ee=p?.exactUsedKey||s,te=[`[object Number]`,`[object Function]`,`[object RegExp]`],ne=i.joinArrays===void 0?this.options.joinArrays:i.joinArrays,re=!this.i18nFormat||this.i18nFormat.handleAsObject,ie=i.count!==void 0&&!Z(i.count),ae=e.hasDefaultValue(i),oe=ie?this.pluralResolver.getSuffix(d,i.count,i):``,se=i.ordinal&&ie?this.pluralResolver.getSuffix(d,i.count,{ordinal:!1}):``,ce=ie&&!i.ordinal&&i.count===0,le=ce&&i[`defaultValue${this.options.pluralSeparator}zero`]||i[`defaultValue${oe}`]||i[`defaultValue${se}`]||i.defaultValue,g=m;re&&!m&&ae&&(g=le);let ue=xu(g),de=Object.prototype.toString.apply(g);if(re&&g&&ue&&!te.includes(de)&&!(Z(ne)&&Array.isArray(g))){if(!i.returnObjects&&!this.options.returnObjects){this.options.returnedObjectHandler||this.logger.warn(`accessing an object - but returnObjects options is not enabled!`);let e=this.options.returnedObjectHandler?this.options.returnedObjectHandler(h,g,{...i,ns:c}):`key '${s} (${this.language})' returned an object instead of string.`;return a?(p.res=e,p.usedParams=this.getUsedParamsDetails(i),p):e}if(o){let e=Array.isArray(g),t=e?[]:{},n=e?ee:h;for(let e in g)if(Object.prototype.hasOwnProperty.call(g,e)){let r=`${n}${o}${e}`;ae&&!m?t[e]=this.translate(r,{...i,defaultValue:xu(le)?le[e]:void 0,joinArrays:!1,ns:c}):t[e]=this.translate(r,{...i,joinArrays:!1,ns:c}),t[e]===r&&(t[e]=g[e])}m=t}}else if(re&&Z(ne)&&Array.isArray(m))m=m.join(ne),m&&=this.extendTranslation(m,t,i,r);else{let e=!1,n=!1;!this.isValidLookup(m)&&ae&&(e=!0,m=le),this.isValidLookup(m)||(n=!0,m=s);let a=(i.missingKeyNoValueFallbackToKey||this.options.missingKeyNoValueFallbackToKey)&&n?void 0:m,c=ae&&le!==m&&this.options.updateMissing;if(n||e||c){if(this.logger.log(c?`updateKey`:`missingKey`,d,l,ie&&!c?`${s}${this.pluralResolver.getSuffix(d,i.count,i)}`:s,c?le:m),o){let e=this.resolve(s,{...i,keySeparator:!1});e&&e.res&&this.logger.warn(`Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.`)}let e=[],t=this.languageUtils.getFallbackCodes(this.options.fallbackLng,i.lng||this.language);if(this.options.saveMissingTo===`fallback`&&t&&t[0])for(let n=0;n<t.length;n++)e.push(t[n]);else this.options.saveMissingTo===`all`?e=this.languageUtils.toResolveHierarchy(i.lng||this.language):e.push(i.lng||this.language);let n=(e,t,n)=>{let r=ae&&n!==m?n:a;this.options.missingKeyHandler?this.options.missingKeyHandler(e,l,t,r,c,i):this.backendConnector?.saveMissing&&this.backendConnector.saveMissing(e,l,t,r,c,i),this.emit(`missingKey`,e,l,t,m)};this.options.saveMissing&&(this.options.saveMissingPlurals&&ie?e.forEach(e=>{let t=this.pluralResolver.getSuffixes(e,i);ce&&i[`defaultValue${this.options.pluralSeparator}zero`]&&!t.includes(`${this.options.pluralSeparator}zero`)&&t.push(`${this.options.pluralSeparator}zero`),t.forEach(t=>{n([e],s+t,i[`defaultValue${t}`]||le)})}):n(e,s,le))}m=this.extendTranslation(m,t,i,p,r),n&&m===s&&this.options.appendNamespaceToMissingKey&&(m=`${l}${u}${s}`),(n||e)&&this.options.parseMissingKeyHandler&&(m=this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey?`${l}${u}${s}`:s,e?m:void 0,i))}return a?(p.res=m,p.usedParams=this.getUsedParamsDetails(i),p):m}extendTranslation(e,t,n,r,i){if(this.i18nFormat?.parse)e=this.i18nFormat.parse(e,{...this.options.interpolation.defaultVariables,...n},n.lng||this.language||r.usedLng,r.usedNS,r.usedKey,{resolved:r});else if(!n.skipInterpolation){n.interpolation&&this.interpolator.init({...n,interpolation:{...this.options.interpolation,...n.interpolation}});let a=Z(e)&&(n?.interpolation?.skipOnVariables===void 0?this.options.interpolation.skipOnVariables:n.interpolation.skipOnVariables),o;if(a){let t=e.match(this.interpolator.nestingRegexp);o=t&&t.length}let s=n.replace&&!Z(n.replace)?n.replace:n;if(this.options.interpolation.defaultVariables&&(s={...this.options.interpolation.defaultVariables,...s}),e=this.interpolator.interpolate(e,s,n.lng||this.language||r.usedLng,n),a){let t=e.match(this.interpolator.nestingRegexp),r=t&&t.length;o<r&&(n.nest=!1)}!n.lng&&r&&r.res&&(n.lng=this.language||r.usedLng),n.nest!==!1&&(e=this.interpolator.nest(e,(...e)=>i?.[0]===e[0]&&!n.context?(this.logger.warn(`It seems you are nesting recursively key: ${e[0]} in key: ${t[0]}`),null):this.translate(...e,t),n)),n.interpolation&&this.interpolator.reset()}let a=n.postProcess||this.options.postProcess,o=Z(a)?[a]:a;return e!=null&&o?.length&&n.applyPostProcessor!==!1&&(e=_u.handle(o,e,t,this.options&&this.options.postProcessPassResolved?{i18nResolved:{...r,usedParams:this.getUsedParamsDetails(n)},...n}:n,this)),e}resolve(e,t={}){let n,r,i,a,o;return Z(e)&&(e=[e]),Array.isArray(e)&&(e=e.map(e=>typeof e==`function`?bu(e,{...this.options,...t}):e)),e.forEach(e=>{if(this.isValidLookup(n))return;let s=this.extractFromKey(e,t),c=s.key;r=c;let l=s.namespaces;this.options.fallbackNS&&(l=l.concat(this.options.fallbackNS));let u=t.count!==void 0&&!Z(t.count),d=u&&!t.ordinal&&t.count===0,f=t.context!==void 0&&(Z(t.context)||typeof t.context==`number`)&&t.context!==``,p=t.lngs?t.lngs:this.languageUtils.toResolveHierarchy(t.lng||this.language,t.fallbackLng);l.forEach(e=>{this.isValidLookup(n)||(o=e,!this.checkedLoadedFor[`${p[0]}-${e}`]&&this.utils?.hasLoadedNamespace&&!this.utils?.hasLoadedNamespace(o)&&(this.checkedLoadedFor[`${p[0]}-${e}`]=!0,this.logger.warn(`key "${r}" for languages "${p.join(`, `)}" won't get resolved as namespace "${o}" was not yet loaded`,`This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!`)),p.forEach(r=>{if(this.isValidLookup(n))return;a=r;let o=[c];if(this.i18nFormat?.addLookupKeys)this.i18nFormat.addLookupKeys(o,c,r,e,t);else{let e;u&&(e=this.pluralResolver.getSuffix(r,t.count,t));let n=`${this.options.pluralSeparator}zero`,i=`${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;if(u&&(t.ordinal&&e.startsWith(i)&&o.push(c+e.replace(i,this.options.pluralSeparator)),o.push(c+e),d&&o.push(c+n)),f){let r=`${c}${this.options.contextSeparator||`_`}${t.context}`;o.push(r),u&&(t.ordinal&&e.startsWith(i)&&o.push(r+e.replace(i,this.options.pluralSeparator)),o.push(r+e),d&&o.push(r+n))}}let s;for(;s=o.pop();)this.isValidLookup(n)||(i=s,n=this.getResource(r,e,s,t))}))})}),{res:n,usedKey:r,exactUsedKey:i,usedLng:a,usedNS:o}}isValidLookup(e){return e!==void 0&&!(!this.options.returnNull&&e===null)&&!(!this.options.returnEmptyString&&e===``)}getResource(e,t,n,r={}){return this.i18nFormat?.getResource?this.i18nFormat.getResource(e,t,n,r):this.resourceStore.getResource(e,t,n,r)}getUsedParamsDetails(e={}){let t=[`defaultValue`,`ordinal`,`context`,`replace`,`lng`,`lngs`,`fallbackLng`,`ns`,`keySeparator`,`nsSeparator`,`returnObjects`,`returnDetails`,`joinArrays`,`postProcess`,`interpolation`],n=e.replace&&!Z(e.replace),r=n?e.replace:e;if(n&&e.count!==void 0&&(r.count=e.count),this.options.interpolation.defaultVariables&&(r={...this.options.interpolation.defaultVariables,...r}),!n){r={...r};for(let e of t)delete r[e]}return r}static hasDefaultValue(e){for(let t in e)if(Object.prototype.hasOwnProperty.call(e,t)&&t.startsWith(`defaultValue`)&&e[t]!==void 0)return!0;return!1}},Cu=class{constructor(e){this.options=e,this.supportedLngs=this.options.supportedLngs||!1,this.logger=mu.create(`languageUtils`)}getScriptPartFromCode(e){if(e=fu(e),!e||!e.includes(`-`))return null;let t=e.split(`-`);return t.length===2||(t.pop(),t[t.length-1].toLowerCase()===`x`)?null:this.formatLanguageCode(t.join(`-`))}getLanguagePartFromCode(e){if(e=fu(e),!e||!e.includes(`-`))return e;let t=e.split(`-`);return this.formatLanguageCode(t[0])}formatLanguageCode(e){if(Z(e)&&e.includes(`-`)){let t;try{t=Intl.getCanonicalLocales(e)[0]}catch{}return t&&this.options.lowerCaseLng&&(t=t.toLowerCase()),t||(this.options.lowerCaseLng?e.toLowerCase():e)}return this.options.cleanCode||this.options.lowerCaseLng?e.toLowerCase():e}isSupportedCode(e){return(this.options.load===`languageOnly`||this.options.nonExplicitSupportedLngs)&&(e=this.getLanguagePartFromCode(e)),!this.supportedLngs||!this.supportedLngs.length||this.supportedLngs.includes(e)}getBestMatchFromCodes(e){if(!e)return null;let t;return e.forEach(e=>{if(t)return;let n=this.formatLanguageCode(e);(!this.options.supportedLngs||this.isSupportedCode(n))&&(t=n)}),!t&&this.options.supportedLngs&&e.forEach(e=>{if(t)return;let n=this.getScriptPartFromCode(e);if(this.isSupportedCode(n))return t=n;let r=this.getLanguagePartFromCode(e);if(this.isSupportedCode(r))return t=r;t=this.options.supportedLngs.find(e=>e===r?!0:!e.includes(`-`)&&!r.includes(`-`)?!1:!!(e.includes(`-`)&&!r.includes(`-`)&&e.slice(0,e.indexOf(`-`))===r||e.startsWith(r)&&r.length>1))}),t||=this.getFallbackCodes(this.options.fallbackLng)[0],t}getFallbackCodes(e,t){if(!e)return[];if(typeof e==`function`&&(e=e(t)),Z(e)&&(e=[e]),Array.isArray(e))return e;if(!t)return e.default||[];let n=e[t];return n||=e[this.getScriptPartFromCode(t)],n||=e[this.formatLanguageCode(t)],n||=e[this.getLanguagePartFromCode(t)],n||=e.default,n||[]}toResolveHierarchy(e,t){let n=this.getFallbackCodes((t===!1?[]:t)||this.options.fallbackLng||[],e),r=[],i=e=>{e&&(this.isSupportedCode(e)?r.push(e):this.logger.warn(`rejecting language code not found in supportedLngs: ${e}`))};return Z(e)&&(e.includes(`-`)||e.includes(`_`))?(this.options.load!==`languageOnly`&&i(this.formatLanguageCode(e)),this.options.load!==`languageOnly`&&this.options.load!==`currentOnly`&&i(this.getScriptPartFromCode(e)),this.options.load!==`currentOnly`&&i(this.getLanguagePartFromCode(e))):Z(e)&&i(this.formatLanguageCode(e)),n.forEach(e=>{r.includes(e)||i(this.formatLanguageCode(e))}),r}},wu={zero:0,one:1,two:2,few:3,many:4,other:5},Tu={select:e=>e===1?`one`:`other`,resolvedOptions:()=>({pluralCategories:[`one`,`other`]})},Eu=class{constructor(e,t={}){this.languageUtils=e,this.options=t,this.logger=mu.create(`pluralResolver`),this.pluralRulesCache={}}clearCache(){this.pluralRulesCache={}}getRule(e,t={}){let n=fu(e===`dev`?`en`:e),r=t.ordinal?`ordinal`:`cardinal`,i=JSON.stringify({cleanedCode:n,type:r});if(i in this.pluralRulesCache)return this.pluralRulesCache[i];let a;try{a=new Intl.PluralRules(n,{type:r})}catch{if(typeof Intl>`u`)return this.logger.error(`No Intl support, please use an Intl polyfill!`),Tu;if(!e.match(/-|_/))return Tu;let n=this.languageUtils.getLanguagePartFromCode(e);a=this.getRule(n,t)}return this.pluralRulesCache[i]=a,a}needsPlural(e,t={}){let n=this.getRule(e,t);return n||=this.getRule(`dev`,t),n?.resolvedOptions().pluralCategories.length>1}getPluralFormsOfKey(e,t,n={}){return this.getSuffixes(e,n).map(e=>`${t}${e}`)}getSuffixes(e,t={}){let n=this.getRule(e,t);return n||=this.getRule(`dev`,t),n?n.resolvedOptions().pluralCategories.sort((e,t)=>wu[e]-wu[t]).map(e=>`${this.options.prepend}${t.ordinal?`ordinal${this.options.prepend}`:``}${e}`):[]}getSuffix(e,t,n={}){let r=this.getRule(e,n);return r?`${this.options.prepend}${n.ordinal?`ordinal${this.options.prepend}`:``}${r.select(t)}`:(this.logger.warn(`no plural rule found for: ${e}`),this.getSuffix(`dev`,t,n))}},Du=(e,t,n,r=`.`,i=!0)=>{let a=nu(e,t,n);return!a&&i&&Z(n)&&(a=du(e,n,r),a===void 0&&(a=du(t,n,r))),a},Ou=e=>e.replace(/\$/g,`$$$$`),ku=class{constructor(e={}){this.logger=mu.create(`interpolator`),this.options=e,this.format=e?.interpolation?.format||(e=>e),this.init(e)}init(e={}){e.interpolation||={escapeValue:!0};let{escape:t,escapeValue:n,useRawValueToEscape:r,prefix:i,prefixEscaped:a,suffix:o,suffixEscaped:s,formatSeparator:c,unescapeSuffix:l,unescapePrefix:u,nestingPrefix:d,nestingPrefixEscaped:f,nestingSuffix:p,nestingSuffixEscaped:m,nestingOptionsSeparator:h,maxReplaces:ee,alwaysFormat:te}=e.interpolation;this.escape=t===void 0?ou:t,this.escapeValue=n===void 0?!0:n,this.useRawValueToEscape=r===void 0?!1:r,this.prefix=i?iu(i):a||`{{`,this.suffix=o?iu(o):s||`}}`,this.formatSeparator=c||`,`,this.unescapePrefix=l?``:u?iu(u):`-`,this.unescapeSuffix=this.unescapePrefix?``:l?iu(l):``,this.nestingPrefix=d?iu(d):f||iu(`$t(`),this.nestingSuffix=p?iu(p):m||iu(`)`),this.nestingOptionsSeparator=h||`,`,this.maxReplaces=ee||1e3,this.alwaysFormat=te===void 0?!1:te,this.resetRegExp()}reset(){this.options&&this.init(this.options)}resetRegExp(){let e=(e,t)=>e?.source===t?(e.lastIndex=0,e):new RegExp(t,`g`);this.regexp=e(this.regexp,`${this.prefix}(.+?)${this.suffix}`),this.regexpUnescape=e(this.regexpUnescape,`${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`),this.nestingRegexp=e(this.nestingRegexp,`${this.nestingPrefix}((?:[^()"']+|"[^"]*"|'[^']*'|\\((?:[^()]|"[^"]*"|'[^']*')*\\))*?)${this.nestingSuffix}`)}interpolate(e,t,n,r){let i,a,o,s=this.options&&this.options.interpolation&&this.options.interpolation.defaultVariables||{},c=e=>{if(!e.includes(this.formatSeparator)){let i=Du(t,s,e,this.options.keySeparator,this.options.ignoreJSONStructure);return this.alwaysFormat?this.format(i,void 0,n,{...r,...t,interpolationkey:e}):i}let i=e.split(this.formatSeparator),a=i.shift().trim(),o=i.join(this.formatSeparator).trim();return this.format(Du(t,s,a,this.options.keySeparator,this.options.ignoreJSONStructure),o,n,{...r,...t,interpolationkey:a})};this.resetRegExp(),!this.escapeValue&&typeof e==`string`&&/\$t\([^)]*\{[^}]*\{\{/.test(e)&&this.logger.warn(`nesting options string contains interpolated variables with escapeValue: false — if any of those values are attacker-controlled they can inject additional nesting options (e.g. redirect lng/ns). Sanitise untrusted input before passing it to t(), or keep escapeValue: true.`);let l=r?.missingInterpolationHandler||this.options.missingInterpolationHandler,u=r?.interpolation?.skipOnVariables===void 0?this.options.interpolation.skipOnVariables:r.interpolation.skipOnVariables;return[{regex:this.regexpUnescape,safeValue:e=>Ou(e)},{regex:this.regexp,safeValue:e=>this.escapeValue?Ou(this.escape(e)):Ou(e)}].forEach(t=>{for(o=0;i=t.regex.exec(e);){let n=i[1].trim();if(a=c(n),a===void 0)if(typeof l==`function`){let t=l(e,i,r);a=Z(t)?t:``}else if(r&&Object.prototype.hasOwnProperty.call(r,n))a=``;else if(u){a=i[0];continue}else this.logger.warn(`missed to pass in variable ${n} for interpolating ${e}`),a=``;else !Z(a)&&!this.useRawValueToEscape&&(a=ql(a));let s=t.safeValue(a);if(e=e.replace(i[0],s),u?(t.regex.lastIndex+=a.length,t.regex.lastIndex-=i[0].length):t.regex.lastIndex=0,o++,o>=this.maxReplaces)break}}),e}nest(e,t,n={}){let r,i,a,o=(e,t)=>{let n=this.nestingOptionsSeparator;if(!e.includes(n))return e;let r=e.split(RegExp(`${iu(n)}[ ]*{`)),i=`{${r[1]}`;e=r[0],i=this.interpolate(i,a);let o=i.match(/'/g),s=i.match(/"/g);((o?.length??0)%2==0&&!s||(s?.length??0)%2!=0)&&(i=i.replace(/'/g,`"`));try{a=JSON.parse(i),t&&(a={...t,...a})}catch(t){return this.logger.warn(`failed parsing options string in nesting for key ${e}`,t),`${e}${n}${i}`}return a.defaultValue&&a.defaultValue.includes(this.prefix)&&delete a.defaultValue,e};for(;r=this.nestingRegexp.exec(e);){let s=[];a={...n},a=a.replace&&!Z(a.replace)?a.replace:a,a.applyPostProcessor=!1,delete a.defaultValue;let c=/{.*}/.test(r[1])?r[1].lastIndexOf(`}`)+1:r[1].indexOf(this.formatSeparator);if(c!==-1&&(s=r[1].slice(c).split(this.formatSeparator).map(e=>e.trim()).filter(Boolean),r[1]=r[1].slice(0,c)),i=t(o.call(this,r[1].trim(),a),a),i&&r[0]===e&&!Z(i))return i;Z(i)||(i=ql(i)),i||=(this.logger.warn(`missed to resolve ${r[1]} for nesting ${e}`),``),s.length&&(i=s.reduce((e,t)=>this.format(e,t,n.lng,{...n,interpolationkey:r[1].trim()}),i.trim())),e=e.replace(r[0],i),this.regexp.lastIndex=0}return e}},Au=e=>{let t=e.toLowerCase().trim(),n={};if(e.includes(`(`)){let r=e.split(`(`);t=r[0].toLowerCase().trim();let i=r[1].slice(0,-1);t===`currency`&&!i.includes(`:`)?n.currency||=i.trim():t===`relativetime`&&!i.includes(`:`)?n.range||=i.trim():i.split(`;`).forEach(e=>{if(e){let[t,...r]=e.split(`:`),i=r.join(`:`).trim().replace(/^'+|'+$/g,``),a=t.trim();n[a]||(n[a]=i),i===`false`&&(n[a]=!1),i===`true`&&(n[a]=!0),isNaN(i)||(n[a]=parseInt(i,10))}})}return{formatName:t,formatOptions:n}},ju=e=>{let t={};return(n,r,i)=>{let a=i;i&&i.interpolationkey&&i.formatParams&&i.formatParams[i.interpolationkey]&&i[i.interpolationkey]&&(a={...a,[i.interpolationkey]:void 0});let o=r+JSON.stringify(a),s=t[o];return s||(s=e(fu(r),i),t[o]=s),s(n)}},Mu=e=>(t,n,r)=>e(fu(n),r)(t),Nu=class{constructor(e={}){this.logger=mu.create(`formatter`),this.options=e,this.init(e)}init(e,t={interpolation:{}}){this.formatSeparator=t.interpolation.formatSeparator||`,`;let n=t.cacheInBuiltFormats?ju:Mu;this.formats={number:n((e,t)=>{let n=new Intl.NumberFormat(e,{...t});return e=>n.format(e)}),currency:n((e,t)=>{let n=new Intl.NumberFormat(e,{...t,style:`currency`});return e=>n.format(e)}),datetime:n((e,t)=>{let n=new Intl.DateTimeFormat(e,{...t});return e=>n.format(e)}),relativetime:n((e,t)=>{let n=new Intl.RelativeTimeFormat(e,{...t});return e=>n.format(e,t.range||`day`)}),list:n((e,t)=>{let n=new Intl.ListFormat(e,{...t});return e=>n.format(e)})}}add(e,t){this.formats[e.toLowerCase().trim()]=t}addCached(e,t){this.formats[e.toLowerCase().trim()]=ju(t)}format(e,t,n,r={}){if(!t||e==null)return e;let i=t.split(this.formatSeparator);if(i.length>1&&i[0].indexOf(`(`)>1&&!i[0].includes(`)`)&&i.find(e=>e.includes(`)`))){let e=i.findIndex(e=>e.includes(`)`));i[0]=[i[0],...i.splice(1,e)].join(this.formatSeparator)}return i.reduce((e,t)=>{let{formatName:i,formatOptions:a}=Au(t);if(this.formats[i]){let t=e;try{let o=r?.formatParams?.[r.interpolationkey]||{},s=o.locale||o.lng||r.locale||r.lng||n;t=this.formats[i](e,s,{...a,...r,...o})}catch(e){this.logger.warn(e)}return t}else this.logger.warn(`there was no format function for ${i}`);return e},e)}},Pu=(e,t)=>{e.pending[t]!==void 0&&(delete e.pending[t],e.pendingCount--)},Fu=class extends hu{constructor(e,t,n,r={}){super(),this.backend=e,this.store=t,this.services=n,this.languageUtils=n.languageUtils,this.options=r,this.logger=mu.create(`backendConnector`),this.waitingReads=[],this.maxParallelReads=r.maxParallelReads||10,this.readingCalls=0,this.maxRetries=r.maxRetries>=0?r.maxRetries:5,this.retryTimeout=r.retryTimeout>=1?r.retryTimeout:350,this.state={},this.queue=[],this.backend?.init?.(n,r.backend,r)}queueLoad(e,t,n,r){let i={},a={},o={},s={};return e.forEach(e=>{let r=!0;t.forEach(t=>{let o=`${e}|${t}`;!n.reload&&this.store.hasResourceBundle(e,t)?this.state[o]=2:this.state[o]<0||(this.state[o]===1?a[o]===void 0&&(a[o]=!0):(this.state[o]=1,r=!1,a[o]===void 0&&(a[o]=!0),i[o]===void 0&&(i[o]=!0),s[t]===void 0&&(s[t]=!0)))}),r||(o[e]=!0)}),(Object.keys(i).length||Object.keys(a).length)&&this.queue.push({pending:a,pendingCount:Object.keys(a).length,loaded:{},errors:[],callback:r}),{toLoad:Object.keys(i),pending:Object.keys(a),toLoadLanguages:Object.keys(o),toLoadNamespaces:Object.keys(s)}}loaded(e,t,n){let r=e.split(`|`),i=r[0],a=r[1];t&&this.emit(`failedLoading`,i,a,t),!t&&n&&this.store.addResourceBundle(i,a,n,void 0,void 0,{skipCopy:!0}),this.state[e]=t?-1:2,t&&n&&(this.state[e]=0);let o={};this.queue.forEach(n=>{eu(n.loaded,[i],a),Pu(n,e),t&&n.errors.push(t),n.pendingCount===0&&!n.done&&(Object.keys(n.loaded).forEach(e=>{o[e]||(o[e]={});let t=n.loaded[e];t.length&&t.forEach(t=>{o[e][t]===void 0&&(o[e][t]=!0)})}),n.done=!0,n.errors.length?n.callback(n.errors):n.callback())}),this.emit(`loaded`,o),this.queue=this.queue.filter(e=>!e.done)}read(e,t,n,r=0,i=this.retryTimeout,a){if(!e.length)return a(null,{});if(this.readingCalls>=this.maxParallelReads){this.waitingReads.push({lng:e,ns:t,fcName:n,tried:r,wait:i,callback:a});return}this.readingCalls++;let o=(o,s)=>{if(this.readingCalls--,this.waitingReads.length>0){let e=this.waitingReads.shift();this.read(e.lng,e.ns,e.fcName,e.tried,e.wait,e.callback)}if(o&&s&&r<this.maxRetries){setTimeout(()=>{this.read(e,t,n,r+1,i*2,a)},i);return}a(o,s)},s=this.backend[n].bind(this.backend);if(s.length===2){try{let n=s(e,t);n&&typeof n.then==`function`?n.then(e=>o(null,e)).catch(o):o(null,n)}catch(e){o(e)}return}return s(e,t,o)}prepareLoading(e,t,n={},r){if(!this.backend)return this.logger.warn(`No backend was added via i18next.use. Will not load resources.`),r&&r();Z(e)&&(e=this.languageUtils.toResolveHierarchy(e)),Z(t)&&(t=[t]);let i=this.queueLoad(e,t,n,r);if(!i.toLoad.length)return i.pending.length||r(),null;i.toLoad.forEach(e=>{this.loadOne(e)})}load(e,t,n){this.prepareLoading(e,t,{},n)}reload(e,t,n){this.prepareLoading(e,t,{reload:!0},n)}loadOne(e,t=``){let n=e.split(`|`),r=n[0],i=n[1];this.read(r,i,`read`,void 0,void 0,(n,a)=>{n&&this.logger.warn(`${t}loading namespace ${i} for language ${r} failed`,n),!n&&a&&this.logger.log(`${t}loaded namespace ${i} for language ${r}`,a),this.loaded(e,n,a)})}saveMissing(e,t,n,r,i,a={},o=()=>{}){if(this.services?.utils?.hasLoadedNamespace&&!this.services?.utils?.hasLoadedNamespace(t)){this.logger.warn(`did not save key "${n}" as the namespace "${t}" was not yet loaded`,`This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!`);return}if(!(n==null||n===``)){if(this.backend?.create){let s={...a,isUpdate:i},c=this.backend.create.bind(this.backend);if(c.length<6)try{let i;i=c.length===5?c(e,t,n,r,s):c(e,t,n,r),i&&typeof i.then==`function`?i.then(e=>o(null,e)).catch(o):o(null,i)}catch(e){o(e)}else c(e,t,n,r,o,s)}!e||!e[0]||this.store.addResource(e[0],t,n,r)}}},Iu=()=>({debug:!1,initAsync:!0,ns:[`translation`],defaultNS:[`translation`],fallbackLng:[`dev`],fallbackNS:!1,supportedLngs:!1,nonExplicitSupportedLngs:!1,load:`all`,preload:!1,keySeparator:`.`,nsSeparator:`:`,pluralSeparator:`_`,contextSeparator:`_`,enableSelector:!1,partialBundledLanguages:!1,saveMissing:!1,updateMissing:!1,saveMissingTo:`fallback`,saveMissingPlurals:!0,missingKeyHandler:!1,missingInterpolationHandler:!1,postProcess:!1,postProcessPassResolved:!1,returnNull:!1,returnEmptyString:!0,returnObjects:!1,joinArrays:!1,returnedObjectHandler:!1,parseMissingKeyHandler:!1,appendNamespaceToMissingKey:!1,appendNamespaceToCIMode:!1,overloadTranslationOptionHandler:e=>{let t={};if(typeof e[1]==`object`&&(t=e[1]),Z(e[1])&&(t.defaultValue=e[1]),Z(e[2])&&(t.tDescription=e[2]),typeof e[2]==`object`||typeof e[3]==`object`){let n=e[3]||e[2];Object.keys(n).forEach(e=>{t[e]=n[e]})}return t},interpolation:{escapeValue:!0,prefix:`{{`,suffix:`}}`,formatSeparator:`,`,unescapePrefix:`-`,nestingPrefix:`$t(`,nestingSuffix:`)`,nestingOptionsSeparator:`,`,maxReplaces:1e3,skipOnVariables:!0},cacheInBuiltFormats:!0}),Lu=e=>(Z(e.ns)&&(e.ns=[e.ns]),Z(e.fallbackLng)&&(e.fallbackLng=[e.fallbackLng]),Z(e.fallbackNS)&&(e.fallbackNS=[e.fallbackNS]),e.supportedLngs&&!e.supportedLngs.includes(`cimode`)&&(e.supportedLngs=e.supportedLngs.concat([`cimode`])),e),Ru=()=>{},zu=e=>{Object.getOwnPropertyNames(Object.getPrototypeOf(e)).forEach(t=>{typeof e[t]==`function`&&(e[t]=e[t].bind(e))})},Q=class e extends hu{constructor(e={},t){if(super(),this.options=Lu(e),this.services={},this.logger=mu,this.modules={external:[]},zu(this),t&&!this.isInitialized&&!e.isClone){if(!this.options.initAsync)return this.init(e,t),this;setTimeout(()=>{this.init(e,t)},0)}}init(e={},t){this.isInitializing=!0,typeof e==`function`&&(t=e,e={}),e.defaultNS==null&&e.ns&&(Z(e.ns)?e.defaultNS=e.ns:e.ns.includes(`translation`)||(e.defaultNS=e.ns[0]));let n=Iu();this.options={...n,...this.options,...Lu(e)},this.options.interpolation={...n.interpolation,...this.options.interpolation},e.keySeparator!==void 0&&(this.options.userDefinedKeySeparator=e.keySeparator),e.nsSeparator!==void 0&&(this.options.userDefinedNsSeparator=e.nsSeparator),typeof this.options.overloadTranslationOptionHandler!=`function`&&(this.options.overloadTranslationOptionHandler=n.overloadTranslationOptionHandler);let r=e=>e?typeof e==`function`?new e:e:null;if(!this.options.isClone){this.modules.logger?mu.init(r(this.modules.logger),this.options):mu.init(null,this.options);let e;e=this.modules.formatter?this.modules.formatter:Nu;let t=new Cu(this.options);this.store=new gu(this.options.resources,this.options);let n=this.services;n.logger=mu,n.resourceStore=this.store,n.languageUtils=t,n.pluralResolver=new Eu(t,{prepend:this.options.pluralSeparator}),e&&(n.formatter=r(e),n.formatter.init&&n.formatter.init(n,this.options),this.options.interpolation.format=n.formatter.format.bind(n.formatter)),n.interpolator=new ku(this.options),n.utils={hasLoadedNamespace:this.hasLoadedNamespace.bind(this)},n.backendConnector=new Fu(r(this.modules.backend),n.resourceStore,n,this.options),n.backendConnector.on(`*`,(e,...t)=>{this.emit(e,...t)}),this.modules.languageDetector&&(n.languageDetector=r(this.modules.languageDetector),n.languageDetector.init&&n.languageDetector.init(n,this.options.detection,this.options)),this.modules.i18nFormat&&(n.i18nFormat=r(this.modules.i18nFormat),n.i18nFormat.init&&n.i18nFormat.init(this)),this.translator=new Su(this.services,this.options),this.translator.on(`*`,(e,...t)=>{this.emit(e,...t)}),this.modules.external.forEach(e=>{e.init&&e.init(this)})}if(this.format=this.options.interpolation.format,t||=Ru,this.options.fallbackLng&&!this.services.languageDetector&&!this.options.lng){let e=this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);e.length>0&&e[0]!==`dev`&&(this.options.lng=e[0])}!this.services.languageDetector&&!this.options.lng&&this.logger.warn(`init: no languageDetector is used and no lng is defined`),[`getResource`,`hasResourceBundle`,`getResourceBundle`,`getDataByLanguage`].forEach(e=>{this[e]=(...t)=>this.store[e](...t)}),[`addResource`,`addResources`,`addResourceBundle`,`removeResourceBundle`].forEach(e=>{this[e]=(...t)=>(this.store[e](...t),this)});let i=Kl(),a=()=>{let e=(e,n)=>{this.isInitializing=!1,this.isInitialized&&!this.initializedStoreOnce&&this.logger.warn(`init: i18next is already initialized. You should call init just once!`),this.isInitialized=!0,this.options.isClone||this.logger.log(`initialized`,this.options),this.emit(`initialized`,this.options),i.resolve(n),t(e,n)};if((this.languages||this.isLanguageChangingTo)&&!this.isInitialized)return e(null,this.t.bind(this));this.changeLanguage(this.options.lng,e)};return this.options.resources||!this.options.initAsync?a():setTimeout(a,0),i}loadResources(e,t=Ru){let n=t,r=Z(e)?e:this.language;if(typeof e==`function`&&(n=e),!this.options.resources||this.options.partialBundledLanguages){if(r?.toLowerCase()===`cimode`&&(!this.options.preload||this.options.preload.length===0))return n();let e=[],t=t=>{t&&t!==`cimode`&&this.services.languageUtils.toResolveHierarchy(t).forEach(t=>{t!==`cimode`&&(e.includes(t)||e.push(t))})};r?t(r):this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach(e=>t(e)),this.options.preload?.forEach?.(e=>t(e)),this.services.backendConnector.load(e,this.options.ns,e=>{!e&&!this.resolvedLanguage&&this.language&&this.setResolvedLanguage(this.language),n(e)})}else n(null)}reloadResources(e,t,n){let r=Kl();return typeof e==`function`&&(n=e,e=void 0),typeof t==`function`&&(n=t,t=void 0),e||=this.languages,t||=this.options.ns,n||=Ru,this.services.backendConnector.reload(e,t,e=>{r.resolve(),n(e)}),r}use(e){if(!e)throw Error(`You are passing an undefined module! Please check the object you are passing to i18next.use()`);if(!e.type)throw Error(`You are passing a wrong module! Please check the object you are passing to i18next.use()`);return e.type===`backend`&&(this.modules.backend=e),(e.type===`logger`||e.log&&e.warn&&e.error)&&(this.modules.logger=e),e.type===`languageDetector`&&(this.modules.languageDetector=e),e.type===`i18nFormat`&&(this.modules.i18nFormat=e),e.type===`postProcessor`&&_u.addPostProcessor(e),e.type===`formatter`&&(this.modules.formatter=e),e.type===`3rdParty`&&this.modules.external.push(e),this}setResolvedLanguage(e){if(!(!e||!this.languages)&&![`cimode`,`dev`].includes(e)){for(let e=0;e<this.languages.length;e++){let t=this.languages[e];if(![`cimode`,`dev`].includes(t)&&this.store.hasLanguageSomeTranslations(t)){this.resolvedLanguage=t;break}}!this.resolvedLanguage&&!this.languages.includes(e)&&this.store.hasLanguageSomeTranslations(e)&&(this.resolvedLanguage=e,this.languages.unshift(e))}}changeLanguage(e,t){this.isLanguageChangingTo=e;let n=Kl();this.emit(`languageChanging`,e);let r=e=>{this.language=e,this.languages=this.services.languageUtils.toResolveHierarchy(e),this.resolvedLanguage=void 0,this.setResolvedLanguage(e)},i=(i,a)=>{a?this.isLanguageChangingTo===e&&(r(a),this.translator.changeLanguage(a),this.isLanguageChangingTo=void 0,this.emit(`languageChanged`,a),this.logger.log(`languageChanged`,a)):this.isLanguageChangingTo=void 0,n.resolve((...e)=>this.t(...e)),t&&t(i,(...e)=>this.t(...e))},a=t=>{!e&&!t&&this.services.languageDetector&&(t=[]);let n=Z(t)?t:t&&t[0],a=this.store.hasLanguageSomeTranslations(n)?n:this.services.languageUtils.getBestMatchFromCodes(Z(t)?[t]:t);a&&(this.language||r(a),this.translator.language||this.translator.changeLanguage(a),this.services.languageDetector?.cacheUserLanguage?.(a)),this.loadResources(a,e=>{i(e,a)})};return!e&&this.services.languageDetector&&!this.services.languageDetector.async?a(this.services.languageDetector.detect()):!e&&this.services.languageDetector&&this.services.languageDetector.async?this.services.languageDetector.detect.length===0?this.services.languageDetector.detect().then(a):this.services.languageDetector.detect(a):a(e),n}getFixedT(e,t,n,r){let i=r?.scopeNs,a=(e,t,...r)=>{let o;o=typeof t==`object`?{...t}:this.options.overloadTranslationOptionHandler([e,t].concat(r)),o.lng=o.lng||a.lng,o.lngs=o.lngs||a.lngs;let s=o.ns!==void 0&&o.ns!==null;o.ns=o.ns||a.ns,o.keyPrefix!==``&&(o.keyPrefix=o.keyPrefix||n||a.keyPrefix);let c={...this.options,...o};Array.isArray(i)&&!s&&(c.ns=i),typeof o.keyPrefix==`function`&&(o.keyPrefix=bu(o.keyPrefix,c));let l=this.options.keySeparator||`.`,u;return o.keyPrefix&&Array.isArray(e)?u=e.map(e=>(typeof e==`function`&&(e=bu(e,c)),`${o.keyPrefix}${l}${e}`)):(typeof e==`function`&&(e=bu(e,c)),u=o.keyPrefix?`${o.keyPrefix}${l}${e}`:e),this.t(u,o)};return Z(e)?a.lng=e:a.lngs=e,a.ns=t,a.keyPrefix=n,a}t(...e){return this.translator?.translate(...e)}exists(...e){return this.translator?.exists(...e)}setDefaultNamespace(e){this.options.defaultNS=e}hasLoadedNamespace(e,t={}){if(!this.isInitialized)return this.logger.warn(`hasLoadedNamespace: i18next was not initialized`,this.languages),!1;if(!this.languages||!this.languages.length)return this.logger.warn(`hasLoadedNamespace: i18n.languages were undefined or empty`,this.languages),!1;let n=t.lng||this.resolvedLanguage||this.languages[0],r=this.options?this.options.fallbackLng:!1,i=this.languages[this.languages.length-1];if(n.toLowerCase()===`cimode`)return!0;let a=(e,t)=>{let n=this.services.backendConnector.state[`${e}|${t}`];return n===-1||n===0||n===2};if(t.precheck){let e=t.precheck(this,a);if(e!==void 0)return e}return!!(this.hasResourceBundle(n,e)||!this.services.backendConnector.backend||this.options.resources&&!this.options.partialBundledLanguages||a(n,e)&&(!r||a(i,e)))}loadNamespaces(e,t){let n=Kl();return this.options.ns?(Z(e)&&(e=[e]),e.forEach(e=>{this.options.ns.includes(e)||this.options.ns.push(e)}),this.loadResources(e=>{n.resolve(),t&&t(e)}),n):(t&&t(),Promise.resolve())}loadLanguages(e,t){let n=Kl();Z(e)&&(e=[e]);let r=this.options.preload||[],i=e.filter(e=>!r.includes(e)&&this.services.languageUtils.isSupportedCode(e));return i.length?(this.options.preload=r.concat(i),this.loadResources(e=>{n.resolve(),t&&t(e)}),n):(t&&t(),Promise.resolve())}dir(e){if(e||=this.resolvedLanguage||(this.languages?.length>0?this.languages[0]:this.language),!e)return`rtl`;try{let t=new Intl.Locale(e);if(t&&t.getTextInfo){let e=t.getTextInfo();if(e&&e.direction)return e.direction}}catch{}let t=`ar.shu.sqr.ssh.xaa.yhd.yud.aao.abh.abv.acm.acq.acw.acx.acy.adf.ads.aeb.aec.afb.ajp.apc.apd.arb.arq.ars.ary.arz.auz.avl.ayh.ayl.ayn.ayp.bbz.pga.he.iw.ps.pbt.pbu.pst.prp.prd.ug.ur.ydd.yds.yih.ji.yi.hbo.men.xmn.fa.jpr.peo.pes.prs.dv.sam.ckb`.split(`.`),n=this.services?.languageUtils||new Cu(Iu());return e.toLowerCase().indexOf(`-latn`)>1?`ltr`:t.includes(n.getLanguagePartFromCode(e))||e.toLowerCase().indexOf(`-arab`)>1?`rtl`:`ltr`}static createInstance(t={},n){let r=new e(t,n);return r.createInstance=e.createInstance,r}cloneInstance(t={},n=Ru){let r=t.forkResourceStore;r&&delete t.forkResourceStore;let i={...this.options,...t,isClone:!0},a=new e(i);if((t.debug!==void 0||t.prefix!==void 0)&&(a.logger=a.logger.clone(t)),[`store`,`services`,`language`].forEach(e=>{a[e]=this[e]}),a.services={...this.services},a.services.utils={hasLoadedNamespace:a.hasLoadedNamespace.bind(a)},r&&(a.store=new gu(Object.keys(this.store.data).reduce((e,t)=>(e[t]={...this.store.data[t]},e[t]=Object.keys(e[t]).reduce((n,r)=>(n[r]={...e[t][r]},n),e[t]),e),{}),i),a.services.resourceStore=a.store),t.interpolation){let e={...Iu().interpolation,...this.options.interpolation,...t.interpolation},n={...i,interpolation:e};a.services.interpolator=new ku(n)}return a.translator=new Su(a.services,i),a.translator.on(`*`,(e,...t)=>{a.emit(e,...t)}),a.init(i,n),a.translator.options=i,a.translator.backendConnector.services.utils={hasLoadedNamespace:a.hasLoadedNamespace.bind(a)},a}toJSON(){return{options:this.options,store:this.store,language:this.language,languages:this.languages,resolvedLanguage:this.resolvedLanguage}}}.createInstance();Q.createInstance,Q.dir,Q.init,Q.loadResources,Q.reloadResources,Q.use,Q.changeLanguage,Q.getFixedT,Q.t,Q.exists,Q.setDefaultNamespace,Q.hasLoadedNamespace,Q.loadNamespaces,Q.loadLanguages;function $(e,t){return Q.t(e,t)}var Bu=Cr(`<div class="config-container svelte-13a2bj9"><h1 class="svelte-13a2bj9"> </h1> <p class="subtitle svelte-13a2bj9"> </p> <form><div class="section svelte-13a2bj9"><h2 class="svelte-13a2bj9"> </h2> <!> <div class="button-group svelte-13a2bj9"><!></div> <p class="info-text svelte-13a2bj9"> </p> <!> <p class="info-text svelte-13a2bj9"> </p></div> <div class="section svelte-13a2bj9"><h2 class="svelte-13a2bj9"> </h2> <div class="checkbox-container svelte-13a2bj9"><!></div></div> <div class="form-actions svelte-13a2bj9"><!> <!></div></form></div> <!> <!>`,1),Vu={hash:`svelte-13a2bj9`,code:`.config-container.svelte-13a2bj9 {max-width:800px;margin:20px auto;padding:20px;}h1.svelte-13a2bj9 {font-size:24px;margin-bottom:4px;}.subtitle.svelte-13a2bj9 {margin-top:0;margin-bottom:20px;font-size:13px;color:#666;}h2.svelte-13a2bj9 {font-size:18px;margin-bottom:15px;margin-top:0;}.section.svelte-13a2bj9 {margin-bottom:30px;padding:20px;background:#f5f5f5;border-radius:4px;}.button-group.svelte-13a2bj9 {display:flex;gap:10px;margin-top:15px;}.checkbox-container.svelte-13a2bj9 {margin-bottom:15px;}.form-actions.svelte-13a2bj9 {display:flex;gap:10px;justify-content:flex-end;}.info-text.svelte-13a2bj9 {margin-top:10px;font-size:14px;color:#666;}`};function Hu(e,t){We(t,!0),Ar(e,Vu);let n=Qt({repoAppId:``,allowNonAdminPoll:!1}),r=qt(``),i=kintone.plugin.app.getConfig(t.pluginId);i.repoAppId&&(n.repoAppId=i.repoAppId),n.allowNonAdminPoll=i.allowNonAdminPoll===`true`,i.repoToken&&S(r,i.repoToken,!0);let a,o,s=qt(``),c=qt(``),l=qt(``),u=qt(!1);function d(e){S(s,e,!0),a.open()}function f(e){S(c,e,!0),o.open()}async function p(){if(confirm($(`config.createRepositoryConfirm`))){S(u,!0);try{let e=await Gl();n.repoAppId=String(e),S(l,``),T(r)&&S(r,``),d($(`config.createRepositorySuccess`,{appId:e}))}catch(e){console.error(`Failed to create repository app:`,e),f($(`config.createRepositoryError`))}finally{S(u,!1)}}}function m(e){if(e.preventDefault(),!n.repoAppId.trim()){S(l,$(`config.repositoryAppIdRequired`),!0),f($(`config.repositoryAppIdRequired`));return}S(l,``),kintone.plugin.app.setConfig({repoToken:T(r),repoAppId:n.repoAppId,allowNonAdminPoll:String(n.allowNonAdminPoll)},()=>{d($(`config.saveSuccess`)),setTimeout(()=>{window.location.href=`../../flow?app=`+kintone.app.getId()},2e3)})}function h(){window.location.href=`../../`+kintone.app.getId()+`/plugin/`}function ee(e){n.repoAppId=e.detail.value,T(l)&&S(l,``)}function te(e){S(r,e.detail.value,!0)}function ne(e){n.allowNonAdminPoll=e.detail.value.length>0}var re=Bu(),ie=ln(re),ae=cn(ie),oe=cn(ae,!0);Fe(ae);var se=un(ae,2),ce=cn(se,!0);Fe(se);var le=un(se,2),g=cn(le),ue=cn(g),de=cn(ue,!0);Fe(ue);var fe=un(ue,2);{let e=gt(()=>$(`config.repositoryAppIdLabel`)),t=gt(()=>$(`config.repositoryAppIdPlaceholder`));Vl(fe,{get label(){return T(e)},get value(){return n.repoAppId},get placeholder(){return T(t)},requiredIcon:!0,get error(){return T(l)},onchange:ee})}var pe=un(fe,2),me=cn(pe);{let e=gt(()=>T(u)?$(`config.creatingRepositoryButton`):$(`config.createRepositoryButton`));zl(me,{get text(){return T(e)},type:`normal`,get disabled(){return T(u)},onclick:p})}Fe(pe);var he=un(pe,2),ge=cn(he,!0);Fe(he);var _e=un(he,2);{let e=gt(()=>$(`config.repositoryTokenLabel`)),t=gt(()=>$(`config.repositoryTokenPlaceholder`));Vl(_e,{get label(){return T(e)},get value(){return T(r)},get placeholder(){return T(t)},onchange:te})}var ve=un(_e,2),ye=cn(ve,!0);Fe(ve),Fe(g);var be=un(g,2),xe=cn(be),Se=cn(xe,!0);Fe(xe);var Ce=un(xe,2),we=cn(Ce);{let e=gt(()=>$(`config.allowNonAdminPollLabel`)),t=gt(()=>[{label:$(`config.allowNonAdminPollItem`),value:`allowNonAdminPoll`}]),r=gt(()=>n.allowNonAdminPoll?[`allowNonAdminPoll`]:[]);Ul(we,{get label(){return T(e)},get items(){return T(t)},get value(){return T(r)},onchange:ne})}Fe(Ce),Fe(be);var Te=un(be,2),Ee=cn(Te);{let e=gt(()=>$(`config.saveButton`));zl(Ee,{get text(){return T(e)},type:`submit`,onclick:m})}var De=un(Ee,2);{let e=gt(()=>$(`config.cancelButton`));zl(De,{get text(){return T(e)},type:`normal`,onclick:h})}Fe(Te),Fe(le),Fe(ie);var Oe=un(ie,2);Mr(Wl(Oe,{get text(){return T(s)},type:`success`,duration:2e3}),e=>a=e,()=>a),Mr(Wl(un(Oe,2),{get text(){return T(c)},type:`danger`,duration:2e3}),e=>o=e,()=>o),Tn((e,t,n,r,i,a)=>{Tr(oe,e),Tr(ce,t),Tr(de,n),Tr(ge,r),Tr(ye,i),Tr(Se,a)},[()=>$(`config.heading`),()=>$(`config.subtitle`),()=>$(`config.repositoryAppSection`),()=>$(`config.createRepositoryInfo`),()=>$(`config.repositoryTokenInfo`),()=>$(`config.optionsSection`)]),gr(`submit`,le,m),wr(e,re),Ge()}var Uu={config:{heading:`PollBuddy Settings`,subtitle:`Note: these settings apply per app.`,repositoryAppSection:`Repository App`,repositoryAppIdLabel:`Repository App ID`,repositoryAppIdPlaceholder:`App ID of the repository app where questionnaire data is stored`,createRepositoryButton:`Create New Repository App`,creatingRepositoryButton:`Creating...`,createRepositoryInfo:`Creating a new app will automatically fill in its App ID above. Settings are not applied until you press Save.`,repositoryTokenLabel:`Repository App API Token`,repositoryTokenPlaceholder:`API token for the repository app`,repositoryTokenInfo:`If you just created a new repository app, issue a new API token and enter it here.`,optionsSection:`Options`,allowNonAdminPollLabel:`Allow non-admin users to create polls`,allowNonAdminPollItem:`Allow users without app management permission to create polls`,saveButton:`Save`,cancelButton:`Cancel`,createRepositoryConfirm:`This will create a new app to store questionnaire data. Continue?`,repositoryAppIdRequired:`Repository App ID is required`,createRepositorySuccess:`Repository app created! App ID: {{appId}}`,createRepositoryError:`Failed to create the repository app`,saveSuccess:`Settings saved!`},form:{titleLabel:`Title`,titlePlaceholder:`Enter your question`,optionsLabel:`Options`,optionPlaceholder:`Option {{number}}`,addOption:`+ Add option`,deadlineLabel:`Deadline`,mentionsLabel:`Participants`,mentionsPlaceholder:`Search by name or code`},questionnaire:{badge:`Poll`,votesCount:`{{count}} vote ({{percent}}%)`,votesCount_plural:`{{count}} votes ({{percent}}%)`,voteButton:`Vote`,votingButton:`Submitting...`,votingClosedError:`This poll has closed`,voteSubmitError:`Failed to submit your vote. Please try again`},questionnaireButton:{mentionButtonLabel:`アンケート`,mentionButtonTitle:`アンケートを作成する`,dialogTitle:`アンケートを作成`,createButton:`作成`,cancelButton:`キャンセル`,commentBody:`アンケートが開始されました: {{title}}
回答期限: {{deadline}}`,dateLocale:`ja-JP`}},Wu={config:{heading:`意思決定くん設定`,subtitle:`アプリ毎の設定になりますのでご注意ください。`,repositoryAppSection:`Repository App`,repositoryAppIdLabel:`Repository App ID`,repositoryAppIdPlaceholder:`アンケートデータを保存するリポジトリアプリのApp ID`,createRepositoryButton:`リポジトリアプリを新規作成`,creatingRepositoryButton:`作成中...`,createRepositoryInfo:`新規作成すると、上の欄に新しいApp IDが自動で入力されます。保存ボタンを押すまで設定は反映されません。`,repositoryTokenLabel:`Repository App API Token`,repositoryTokenPlaceholder:`リポジトリアプリのAPIトークン`,repositoryTokenInfo:`リポジトリアプリを新規作成した場合は、新しいAPIトークンを発行して入力してください。`,optionsSection:`Options`,allowNonAdminPollLabel:`Allow non-admin users to create polls`,allowNonAdminPollItem:`アプリの管理者権限を持たないユーザーにもアンケート作成を許可する`,saveButton:`Save`,cancelButton:`Cancel`,createRepositoryConfirm:`アンケートデータを保存する新しいアプリを作成します。よろしいですか？`,repositoryAppIdRequired:`Repository App ID は必須項目です`,createRepositorySuccess:`リポジトリアプリを作成しました！App ID: {{appId}}`,createRepositoryError:`リポジトリアプリの作成に失敗しました`,saveSuccess:`設定を保存しました！`},form:{titleLabel:`タイトル`,titlePlaceholder:`質問を入力してください`,optionsLabel:`選択肢`,optionPlaceholder:`選択肢 {{number}}`,addOption:`＋ 選択肢を追加`,deadlineLabel:`締め切り`,mentionsLabel:`参加者`,mentionsPlaceholder:`名前またはコードで検索`},questionnaire:{badge:`アンケート`,votesCount:`{{count}}票 ({{percent}}%)`,voteButton:`投票する`,votingButton:`送信中...`,votingClosedError:`このアンケートは終了しました`,voteSubmitError:`投票に失敗しました。もう一度お試しください`},questionnaireButton:{mentionButtonLabel:`アンケート`,mentionButtonTitle:`アンケートを作成する`,dialogTitle:`アンケートを作成`,createButton:`作成`,cancelButton:`キャンセル`,commentBody:`アンケートが開始されました: {{title}}
回答期限: {{deadline}}`,dateLocale:`ja-JP`}},Gu={config:{heading:`Configuración de PollBuddy`,subtitle:`Ten en cuenta que esta configuración se aplica por aplicación.`,repositoryAppSection:`Repository App`,repositoryAppIdLabel:`Repository App ID`,repositoryAppIdPlaceholder:`App ID de la aplicación repositorio donde se guardan los datos de las encuestas`,createRepositoryButton:`Crear nueva aplicación repositorio`,creatingRepositoryButton:`Creando...`,createRepositoryInfo:`Al crearla, el nuevo App ID se rellenará automáticamente arriba. Los cambios no se aplican hasta que pulses Guardar.`,repositoryTokenLabel:`Repository App API Token`,repositoryTokenPlaceholder:`Token de API de la aplicación repositorio`,repositoryTokenInfo:`Si acabas de crear una nueva aplicación repositorio, genera un nuevo token de API e introdúcelo aquí.`,optionsSection:`Options`,allowNonAdminPollLabel:`Allow non-admin users to create polls`,allowNonAdminPollItem:`Permitir crear encuestas a usuarios sin permisos de administración de la aplicación`,saveButton:`Save`,cancelButton:`Cancel`,createRepositoryConfirm:`Se creará una nueva aplicación para guardar los datos de las encuestas. ¿Deseas continuar?`,repositoryAppIdRequired:`El Repository App ID es obligatorio`,createRepositorySuccess:`¡Aplicación repositorio creada! App ID: {{appId}}`,createRepositoryError:`No se pudo crear la aplicación repositorio`,saveSuccess:`¡Configuración guardada!`},form:{titleLabel:`Título`,titlePlaceholder:`Escribe tu pregunta`,optionsLabel:`Opciones`,optionPlaceholder:`Opción {{number}}`,addOption:`+ Añadir opción`,deadlineLabel:`Fecha límite`,mentionsLabel:`Participantes`,mentionsPlaceholder:`Buscar por nombre o código`},questionnaire:{badge:`Encuesta`,votesCount:`{{count}} voto ({{percent}}%)`,votesCount_plural:`{{count}} votos ({{percent}}%)`,voteButton:`Votar`,votingButton:`Enviando...`,votingClosedError:`Esta encuesta ha finalizado`,voteSubmitError:`No se pudo enviar tu voto. Inténtalo de nuevo`},questionnaireButton:{mentionButtonLabel:`Encuesta`,mentionButtonTitle:`Crear una encuesta`,dialogTitle:`Crear una encuesta`,createButton:`Crear`,cancelButton:`Cancelar`,commentBody:`Se ha iniciado una encuesta: {{title}}
Fecha límite: {{deadline}}`,dateLocale:`es-ES`}},Ku={config:{heading:`PollBuddy 設定`,subtitle:`此為各應用程式個別設定，請注意。`,repositoryAppSection:`Repository App`,repositoryAppIdLabel:`Repository App ID`,repositoryAppIdPlaceholder:`用於儲存問卷資料的儲存庫應用程式 App ID`,createRepositoryButton:`建立新的儲存庫應用程式`,creatingRepositoryButton:`建立中...`,createRepositoryInfo:`建立後，上方欄位會自動帶入新的 App ID。按下儲存按鈕後設定才會生效。`,repositoryTokenLabel:`Repository App API Token`,repositoryTokenPlaceholder:`儲存庫應用程式的 API Token`,repositoryTokenInfo:`若您剛建立新的儲存庫應用程式，請發行新的 API Token 並輸入於此。`,optionsSection:`Options`,allowNonAdminPollLabel:`Allow non-admin users to create polls`,allowNonAdminPollItem:`允許未具有應用程式管理權限的使用者建立問卷`,saveButton:`Save`,cancelButton:`Cancel`,createRepositoryConfirm:`即將建立用於儲存問卷資料的新應用程式，是否繼續？`,repositoryAppIdRequired:`Repository App ID 為必填項目`,createRepositorySuccess:`已建立儲存庫應用程式！App ID：{{appId}}`,createRepositoryError:`建立儲存庫應用程式失敗`,saveSuccess:`設定已儲存！`},form:{titleLabel:`標題`,titlePlaceholder:`請輸入問題`,optionsLabel:`選項`,optionPlaceholder:`選項 {{number}}`,addOption:`＋ 新增選項`,deadlineLabel:`截止時間`,mentionsLabel:`參與者`,mentionsPlaceholder:`以名稱或代碼搜尋`},questionnaire:{badge:`問卷`,votesCount:`{{count}} 票 ({{percent}}%)`,voteButton:`投票`,votingButton:`送出中...`,votingClosedError:`此問卷已結束`,voteSubmitError:`投票失敗，請再試一次`},questionnaireButton:{mentionButtonLabel:`問卷`,mentionButtonTitle:`建立問卷`,dialogTitle:`建立問卷`,createButton:`建立`,cancelButton:`取消`,commentBody:`問卷已開始：{{title}}
截止時間：{{deadline}}`,dateLocale:`zh-TW`}},qu=async()=>{let e=await Ju();return await Q.init({lng:e,fallbackLng:`en`,resources:{en:{translation:Uu},ja:{translation:Wu},es:{translation:Gu},"zh-TW":{translation:Ku}}}),Q},Ju=async()=>{try{let e=await kintone.getLoginUser();if(e.language)return e.language}catch(e){console.error(`Error getting user language:`,e)}let e=kintone.api.url(`/k/v1/records.json`);return e.includes(`kintone.com`)?`en`:(e.includes(`cybozu.com`),`ja`)},Yu=kintone.$PLUGIN_ID,Xu=document.querySelector(`.settings`);if(!Xu)throw Error(`Required elements do not exist.`);(async()=>{await qu(),Er(Hu,{target:Xu,props:{pluginId:Yu}})})()})();