"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[779],{713:function(n,t,e){e.d(t,{Hx:function(){return g},Tl:function(){return Z},W7:function(){return p},Y5:function(){return x},bI:function(){return h},uV:function(){return w},vw:function(){return f}});var r=e(861),a=e(757),c=e.n(a),u=e(243),o=e(686),i="992758a4802a699e8df27d4d6efc34fb",s="https://api.themoviedb.org/3",p={position:"top-right",timeout:2e3,width:"300px",fontSize:"20px"};function f(n){return l.apply(this,arguments)}function l(){return(l=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e="".concat(s).concat(t,"?api_key=").concat(i),n.next=3,u.Z.get(e);case 3:return r=n.sent,n.abrupt("return",r.data);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function h(n,t){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(c().mark((function n(t,e){var r,a;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r="".concat(s).concat(t,"?api_key=").concat(i,"&query=").concat(e),n.next=3,u.Z.get(r);case 3:return a=n.sent,n.abrupt("return",a.data);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function x(n,t){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(c().mark((function n(t,e){var r,a;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r="".concat(s).concat(t,"/").concat(e,"?api_key=").concat(i),n.next=3,u.Z.get(r);case 3:return a=n.sent,n.abrupt("return",a.data);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function w(n,t){return y.apply(this,arguments)}function y(){return(y=(0,r.Z)(c().mark((function n(t,e){var r,a;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r="".concat(s).concat(t,"/").concat(e,"/credits?api_key=").concat(i),n.next=3,u.Z.get(r);case 3:return a=n.sent,n.abrupt("return",a.data);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function g(n,t){return m.apply(this,arguments)}function m(){return(m=(0,r.Z)(c().mark((function n(t,e){var r,a;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r="".concat(s).concat(t,"/").concat(e,"/reviews?api_key=").concat(i),n.next=3,u.Z.get(r);case 3:return a=n.sent,n.abrupt("return",a.data);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function Z(){o.Notify.failure("Oops! Something went wrong! Try reloading the page or make another choice!",p)}},245:function(n,t,e){e.d(t,{a:function(){return i}});var r,a=e(881),c=e(168),u=e(867).ZP.div(r||(r=(0,c.Z)(["\n    text-align: center;\n    margin-top: 250px;\n"]))),o=e(184),i=function(){return(0,o.jsx)(u,{children:(0,o.jsx)(a.VL,{visible:!0,height:"180",width:"180",ariaLabel:"vortex-loading",wrapperStyle:{},wrapperClass:"vortex-wrapper",colors:["red","green","blue","yellow","orange","purple"]})})}},779:function(n,t,e){e.r(t),e.d(t,{default:function(){return x}});var r,a,c=e(439),u=e(791),o=e(689),i=e(713),s=e(245),p=e(168),f=e(867),l=f.ZP.ul(r||(r=(0,p.Z)(["\n    display: flex;\n    flex-direction: column;\n    gap: 20px;\n"]))),h=f.ZP.li(a||(a=(0,p.Z)(["\n    display: flex;\n    flex-direction: column;\n    gap: 5px;\n    max-height: 300px;\n    overflow-y: auto;\n"]))),d=e(184),x=function(){var n=(0,o.UO)().movieId,t=(0,u.useState)(!0),e=(0,c.Z)(t,2),r=e[0],a=e[1],p=(0,u.useState)([]),f=(0,c.Z)(p,2),x=f[0],v=f[1];return(0,u.useEffect)((function(){n&&(0,i.Hx)("/movie",n).then((function(n){v(n.results)})).catch(i.Tl).finally((function(){return a(!1)}))}),[n]),(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)("h3",{children:"Reviews:"}),r&&(0,d.jsx)(s.a,{}),0!==x.length?(0,d.jsx)(l,{children:x.map((function(n){var t=n.id,e=n.author,r=n.content;return(0,d.jsxs)(h,{children:[(0,d.jsxs)("p",{children:[(0,d.jsx)("b",{children:"Author:"})," ",e]}),(0,d.jsx)("p",{children:r})]},t)}))}):(0,d.jsx)("p",{children:"Sorry! We don't have any reviews for this movie"})]})}}}]);
//# sourceMappingURL=779.e5eb773c.chunk.js.map