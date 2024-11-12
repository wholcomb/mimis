import{a3 as H,K as M,as as b,am as E,at as W,A as j,Y as D,L as A,au as L,l as q,e as C,g as P,av as T,i as w,j as k,z as $,k as y,X as z,aw as G,ax as K,T as X,B as F,ay as J,b as Q,G as U,p as Z,h as S,a as x,n as rr}from"./runtime.BXk13jFn.js";import{r as ar}from"./svelte-head.DB7hvReC.js";import{b as tr}from"./template.rShIjToA.js";const I=new Set,N=new Set;function er(r,a,e,o){function s(t){if(o.capture||p.call(a,t),!t.cancelBubble){var f=D,d=A;b(null),E(null);try{return e.call(this,t)}finally{b(f),E(d)}}}return r.startsWith("pointer")||r.startsWith("touch")||r==="wheel"?M(()=>{a.addEventListener(r,s,o)}):a.addEventListener(r,s,o),s}function lr(r,a,e,o,s){var t={capture:o,passive:s},f=er(r,a,e,t);(a===document.body||a===window||a===document)&&H(()=>{a.removeEventListener(r,f,t)})}function dr(r){for(var a=0;a<r.length;a++)I.add(r[a]);for(var e of N)e(r)}function p(r){var O;var a=this,e=a.ownerDocument,o=r.type,s=((O=r.composedPath)==null?void 0:O.call(r))||[],t=s[0]||r.target,f=0,d=r.__root;if(d){var c=s.indexOf(d);if(c!==-1&&(a===document||a===window)){r.__root=a;return}var _=s.indexOf(a);if(_===-1)return;c<=_&&(f=c)}if(t=s[f]||r.target,t!==a){W(r,"currentTarget",{configurable:!0,get(){return t||e}});var m=D,u=A;b(null),E(null);try{for(var n,i=[];t!==null;){var l=t.assignedSlot||t.parentNode||t.host||null;try{var h=t["__"+o];if(h!==void 0&&!t.disabled)if(j(h)){var[Y,...B]=h;Y.apply(t,[r,...B])}else h.call(t,r)}catch(g){n?i.push(g):n=g}if(r.cancelBubble||l===a||l===null)break;t=l}if(n){for(let g of i)queueMicrotask(()=>{throw g});throw n}}finally{r.__root=a,delete r.currentTarget,b(m),E(u)}}}const nr=["touchstart","touchmove"];function sr(r){return nr.includes(r)}function cr(r,a){var e=a==null?"":typeof a=="object"?a+"":a;e!==(r.__t??(r.__t=r.nodeValue))&&(r.__t=e,r.nodeValue=e==null?"":e+"")}function ir(r,a){return V(r,a)}function _r(r,a){L(),a.intro=a.intro??!1;const e=a.target,o=S,s=y;try{for(var t=q(e);t&&(t.nodeType!==8||t.data!==C);)t=P(t);if(!t)throw T;w(!0),k(t),$();const f=V(r,{...a,anchor:t});if(y===null||y.nodeType!==8||y.data!==z)throw G(),T;return w(!1),f}catch(f){if(f===T)return a.recover===!1&&K(),L(),X(e),w(!1),ir(r,a);throw f}finally{w(o),k(s),ar()}}const v=new Map;function V(r,{target:a,anchor:e,props:o={},events:s,context:t,intro:f=!0}){L();var d=new Set,c=u=>{for(var n=0;n<u.length;n++){var i=u[n];if(!d.has(i)){d.add(i);var l=sr(i);a.addEventListener(i,p,{passive:l});var h=v.get(i);h===void 0?(document.addEventListener(i,p,{passive:l}),v.set(i,1)):v.set(i,h+1)}}};c(F(I)),N.add(c);var _=void 0,m=J(()=>{var u=e??a.appendChild(Q());return U(()=>{if(t){Z({});var n=rr;n.c=t}s&&(o.$$events=s),S&&tr(u,null),_=r(u,o)||{},S&&(A.nodes_end=y),t&&x()}),()=>{var l;for(var n of d){a.removeEventListener(n,p);var i=v.get(n);--i===0?(document.removeEventListener(n,p),v.delete(n)):v.set(n,i)}N.delete(c),R.delete(_),u!==e&&((l=u.parentNode)==null||l.removeChild(u))}});return R.set(_,m),_}let R=new WeakMap;function hr(r){const a=R.get(r);a&&a()}export{dr as d,lr as e,_r as h,ir as m,cr as s,hr as u};
