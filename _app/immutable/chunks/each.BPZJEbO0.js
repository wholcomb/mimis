import{G as j,H as ee,n as N,I as b,J as ae,K as re,M as Q,N as ne,O as B,Q as k,S as H,T as M,U as W,V as Z,W as fe,X as ie,C as F,Y as O,Z as G,_ as L,$ as le,a0 as se,a1 as ue,a2 as te,a3 as $,a4 as ve,a5 as de,a6 as _e,a7 as oe,F as ce,a8 as J,a9 as he,aa as Ee}from"./runtime.CRsO_40P.js";function xe(l,e){return e}function pe(l,e,a,t){for(var v=[],_=e.length,u=0;u<_;u++)le(e[u].e,v,!0);var o=_>0&&v.length===0&&a!==null;if(o){var T=a.parentNode;se(T),T.append(a),t.clear(),m(l,e[0].prev,e[_-1].next)}ue(v,()=>{for(var h=0;h<_;h++){var d=e[h];o||(t.delete(d.k),m(l,d.prev,d.next)),te(d.e,!o)}})}function me(l,e,a,t,v,_=null){var u=l,o={flags:e,items:new Map,first:null},T=(e&$)!==0;if(T){var h=l;u=N?b(ve(h)):h.appendChild(j())}N&&ae();var d=null,C=!1;ee(()=>{var r=a(),s=re(r)?r:r==null?[]:Q(r),i=s.length;if(C&&i===0)return;C=i===0;let I=!1;if(N){var E=u.data===ne;E!==(i===0)&&(u=B(),b(u),k(!1),I=!0)}if(N){for(var p=null,A,c=0;c<i;c++){if(H.nodeType===8&&H.data===de){u=H,I=!0,k(!1);break}var n=s[c],f=t(n,c);A=z(H,o,p,null,n,f,c,v,e),o.items.set(f,A),p=A}i>0&&b(B())}if(!N){var R=_e;Te(s,o,u,v,e,(R.f&M)!==0,t)}_!==null&&(i===0?d?W(d):d=Z(()=>_(u)):d!==null&&fe(d,()=>{d=null})),I&&k(!0),a()}),N&&(u=H)}function Te(l,e,a,t,v,_,u){var V,Y,U,X;var o=(v&oe)!==0,T=(v&(O|L))!==0,h=l.length,d=e.items,C=e.first,r=C,s,i=null,I,E=[],p=[],A,c,n,f;if(o)for(f=0;f<h;f+=1)A=l[f],c=u(A,f),n=d.get(c),n!==void 0&&((V=n.a)==null||V.measure(),(I??(I=new Set)).add(n));for(f=0;f<h;f+=1){if(A=l[f],c=u(A,f),n=d.get(c),n===void 0){var R=r?r.e.nodes_start:a;i=z(R,e,i,i===null?e.first:i.next,A,c,f,t,v),d.set(c,i),E=[],p=[],r=i.next;continue}if(T&&Ae(n,A,f,v),n.e.f&M&&(W(n.e),o&&((Y=n.a)==null||Y.unfix(),(I??(I=new Set)).delete(n))),n!==r){if(s!==void 0&&s.has(n)){if(E.length<p.length){var S=p[0],x;i=S.prev;var y=E[0],g=E[E.length-1];for(x=0;x<E.length;x+=1)K(E[x],S,a);for(x=0;x<p.length;x+=1)s.delete(p[x]);m(e,y.prev,g.next),m(e,i,y),m(e,g,S),r=S,i=g,f-=1,E=[],p=[]}else s.delete(n),K(n,r,a),m(e,n.prev,n.next),m(e,n,i===null?e.first:i.next),m(e,i,n),i=n;continue}for(E=[],p=[];r!==null&&r.k!==c;)(_||!(r.e.f&M))&&(s??(s=new Set)).add(r),p.push(r),r=r.next;if(r===null)continue;n=r}E.push(n),i=n,r=n.next}if(r!==null||s!==void 0){for(var w=s===void 0?[]:Q(s);r!==null;)(_||!(r.e.f&M))&&w.push(r),r=r.next;var D=w.length;if(D>0){var P=v&$&&h===0?a:null;if(o){for(f=0;f<D;f+=1)(U=w[f].a)==null||U.measure();for(f=0;f<D;f+=1)(X=w[f].a)==null||X.fix()}pe(e,w,P,d)}}o&&ie(()=>{var q;if(I!==void 0)for(n of I)(q=n.a)==null||q.apply()}),F.first=e.first&&e.first.e,F.last=i&&i.e}function Ae(l,e,a,t){t&O&&G(l.v,e),t&L?G(l.i,a):l.i=a}function z(l,e,a,t,v,_,u,o,T){var h=(T&O)!==0,d=(T&he)===0,C=h?d?ce(v):J(v):v,r=T&L?J(u):u,s={i:r,v:C,k:_,a:null,e:null,prev:a,next:t};try{return s.e=Z(()=>o(l,C,r),N),s.e.prev=a&&a.e,s.e.next=t&&t.e,a===null?e.first=s:(a.next=s,a.e.next=s.e),t!==null&&(t.prev=s,t.e.prev=s.e),s}finally{}}function K(l,e,a){for(var t=l.next?l.next.e.nodes_start:a,v=e?e.e.nodes_start:a,_=l.e.nodes_start;_!==t;){var u=Ee(_);v.before(_),_=u}}function m(l,e,a){e===null?l.first=a:(e.next=a,e.e.next=a&&a.e),a!==null&&(a.prev=e,a.e.prev=e&&e.e)}export{me as e,xe as i};
