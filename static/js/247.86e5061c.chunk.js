"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[247],{713:function(n,t,e){e.d(t,{Hx:function(){return v},Tl:function(){return k},W7:function(){return s},Y5:function(){return x},bI:function(){return l},uV:function(){return w},vw:function(){return f}});var r=e(861),a=e(757),c=e.n(a),i=e(243),o=e(686),u="992758a4802a699e8df27d4d6efc34fb",p="https://api.themoviedb.org/3",s={position:"top-right",timeout:2e3,width:"300px",fontSize:"20px"};function f(n){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e="".concat(p).concat(t,"?api_key=").concat(u),n.next=3,i.Z.get(e);case 3:return r=n.sent,n.abrupt("return",r.data);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function l(n,t){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(c().mark((function n(t,e){var r,a;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r="".concat(p).concat(t,"?api_key=").concat(u,"&query=").concat(e),n.next=3,i.Z.get(r);case 3:return a=n.sent,n.abrupt("return",a.data);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function x(n,t){return m.apply(this,arguments)}function m(){return(m=(0,r.Z)(c().mark((function n(t,e){var r,a;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r="".concat(p).concat(t,"/").concat(e,"?api_key=").concat(u),n.next=3,i.Z.get(r);case 3:return a=n.sent,n.abrupt("return",a.data);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function w(n,t){return g.apply(this,arguments)}function g(){return(g=(0,r.Z)(c().mark((function n(t,e){var r,a;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r="".concat(p).concat(t,"/").concat(e,"/credits?api_key=").concat(u),n.next=3,i.Z.get(r);case 3:return a=n.sent,n.abrupt("return",a.data);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function v(n,t){return y.apply(this,arguments)}function y(){return(y=(0,r.Z)(c().mark((function n(t,e){var r,a;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r="".concat(p).concat(t,"/").concat(e,"/reviews?api_key=").concat(u),n.next=3,i.Z.get(r);case 3:return a=n.sent,n.abrupt("return",a.data);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function k(){o.Notify.failure("Oops! Something went wrong! Try reloading the page or make another choice!",s)}},247:function(n,t,e){e.r(t);var r=e(439),a=e(245),c=e(603),i=e(791),o=e(689),u=e(713),p=e(184);t.default=function(){var n=(0,o.UO)().movieId,t=(0,i.useState)(!0),e=(0,r.Z)(t,2),s=e[0],f=e[1],h=(0,i.useState)([]),l=(0,r.Z)(h,2),d=l[0],x=l[1];return(0,i.useEffect)((function(){n&&(0,u.uV)("/movie",n).then((function(n){x(n.cast)})).catch(u.Tl).finally((function(){return f(!1)}))}),[n]),(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)("h3",{children:"Cast:"}),s&&(0,p.jsx)(a.a,{}),0!==d.length?(0,p.jsx)(c.aV,{children:d.map((function(n){var t=n.id,e=n.name,r=n.character,a=n.profile_path;return(0,p.jsxs)(c.ck,{children:[(0,p.jsx)("b",{children:e}),(0,p.jsxs)("p",{children:["Character: ",r]}),(0,p.jsx)("img",{src:a?"http://image.tmdb.org/t/p/w185".concat(a):"https://upload.wikimedia.org/wikipedia/commons/2/2f/No-photo-m.png",alt:e,width:"100",height:"150"})]},t)}))}):(0,p.jsx)("p",{children:"Sorry! We don't have any information about cast"})]})}},245:function(n,t,e){e.d(t,{a:function(){return u}});var r,a=e(881),c=e(168),i=e(867).ZP.div(r||(r=(0,c.Z)(["\n    text-align: center;\n    margin-top: 250px;\n"]))),o=e(184),u=function(){return(0,o.jsx)(i,{children:(0,o.jsx)(a.VL,{visible:!0,height:"180",width:"180",ariaLabel:"vortex-loading",wrapperStyle:{},wrapperClass:"vortex-wrapper",colors:["red","green","blue","yellow","orange","purple"]})})}},603:function(n,t,e){e.d(t,{aV:function(){return u},ck:function(){return p},hh:function(){return s}});var r,a,c,i=e(168),o=e(867),u=o.ZP.ul(r||(r=(0,i.Z)(["\n    display: flex;\n    gap: 30px;\n    align-items: center;\n    flex-wrap: wrap;\n"]))),p=o.ZP.li(a||(a=(0,i.Z)(["\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    gap: 5px;\n    width: 154px;\n    max-height: 400px;\n    cursor: pointer;\n    overflow: hidden;\n"]))),s=o.ZP.div(c||(c=(0,i.Z)(["\n    min-height: 169px;\n    display: flex;\n    gap: 5px;\n    flex-direction: column;\n"])))}}]);
//# sourceMappingURL=247.86e5061c.chunk.js.map