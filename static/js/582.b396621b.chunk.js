"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[582],{713:function(n,t,e){e.d(t,{Hx:function(){return w},Tl:function(){return b},W7:function(){return s},Y5:function(){return x},bI:function(){return d},uV:function(){return m},vw:function(){return l}});var r=e(861),i=e(757),a=e.n(i),o=e(243),c=e(686),u="992758a4802a699e8df27d4d6efc34fb",p="https://api.themoviedb.org/3",s={position:"top-right",timeout:2e3,width:"300px",fontSize:"20px"};function l(n){return f.apply(this,arguments)}function f(){return(f=(0,r.Z)(a().mark((function n(t){var e,r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e="".concat(p).concat(t,"?api_key=").concat(u),n.next=3,o.Z.get(e);case 3:return r=n.sent,n.abrupt("return",r.data);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function d(n,t){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(a().mark((function n(t,e){var r,i;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r="".concat(p).concat(t,"?api_key=").concat(u,"&query=").concat(e),n.next=3,o.Z.get(r);case 3:return i=n.sent,n.abrupt("return",i.data);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function x(n,t){return g.apply(this,arguments)}function g(){return(g=(0,r.Z)(a().mark((function n(t,e){var r,i;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r="".concat(p).concat(t,"/").concat(e,"?api_key=").concat(u),n.next=3,o.Z.get(r);case 3:return i=n.sent,n.abrupt("return",i.data);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function m(n,t){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(a().mark((function n(t,e){var r,i;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r="".concat(p).concat(t,"/").concat(e,"/credits?api_key=").concat(u),n.next=3,o.Z.get(r);case 3:return i=n.sent,n.abrupt("return",i.data);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function w(n,t){return y.apply(this,arguments)}function y(){return(y=(0,r.Z)(a().mark((function n(t,e){var r,i;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r="".concat(p).concat(t,"/").concat(e,"/reviews?api_key=").concat(u),n.next=3,o.Z.get(r);case 3:return i=n.sent,n.abrupt("return",i.data);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function b(){c.Notify.failure("Oops! Something went wrong! Try reloading the page or make another choice!",s)}},245:function(n,t,e){e.d(t,{a:function(){return u}});var r,i=e(881),a=e(168),o=e(867).ZP.div(r||(r=(0,a.Z)(["\n    text-align: center;\n    margin-top: 250px;\n"]))),c=e(184),u=function(){return(0,c.jsx)(o,{children:(0,c.jsx)(i.VL,{visible:!0,height:"180",width:"180",ariaLabel:"vortex-loading",wrapperStyle:{},wrapperClass:"vortex-wrapper",colors:["red","green","blue","yellow","orange","purple"]})})}},368:function(n,t,e){var r=e(689),i=e(87),a=e(603),o=e(184);t.Z=function(n){var t=n.films,e=(0,r.TH)();return(0,o.jsx)(a.aV,{children:t.map((function(n){var t=n.id,r=n.title,c=n.overview,u=n.poster_path;return(0,o.jsx)(i.rU,{to:"/movies/".concat(t),state:{from:e},children:(0,o.jsxs)(a.ck,{children:[(0,o.jsx)("img",{src:u?"http://image.tmdb.org/t/p/w154".concat(u):"https://www.braasco.com//ASSETS/IMAGES/ITEMS/ZOOM/no_image.jpeg",alt:r,width:"154",height:"231"}),(0,o.jsxs)(a.hh,{children:[(0,o.jsx)("h3",{children:r}),(0,o.jsx)("p",{children:c})]})]},t)},t)}))})}},603:function(n,t,e){e.d(t,{aV:function(){return u},ck:function(){return p},hh:function(){return s}});var r,i,a,o=e(168),c=e(867),u=c.ZP.ul(r||(r=(0,o.Z)(["\n    display: flex;\n    gap: 30px;\n    align-items: center;\n    flex-wrap: wrap;\n"]))),p=c.ZP.li(i||(i=(0,o.Z)(["\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    gap: 5px;\n    width: 154px;\n    max-height: 400px;\n    cursor: pointer;\n    overflow: hidden;\n"]))),s=c.ZP.div(a||(a=(0,o.Z)(["\n    min-height: 169px;\n    display: flex;\n    gap: 5px;\n    flex-direction: column;\n"])))},582:function(n,t,e){e.r(t),e.d(t,{default:function(){return j}});var r,i,a,o,c,u=e(439),p=e(245),s=e(686),l=e(791),f=e(87),d=e(713),h=e(168),x=e(867),g=x.ZP.section(r||(r=(0,h.Z)(["\npadding: 20px;\ndisplay: flex;\nflex-direction: column;\ngap: 20px;\n"]))),m=e(368),v=x.ZP.header(i||(i=(0,h.Z)(["top: 0;\n  left: 0;\n  position: sticky;\n  z-index: 1100;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 64px;\n  padding-right: 24px;\n  padding-left: 24px;\n  padding-top: 12px;\n  padding-bottom: 12px;\n  color: #fff;\n  background-color: black;\n  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),\n    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);\n"]))),w=x.ZP.form(a||(a=(0,h.Z)(["\n  display: flex;\n  align-items: center;\n  width: 100%;\n  max-width: 600px;\n  background-color: #fff;\n  border-radius: 3px;\n  overflow: hidden;\n"]))),y=x.ZP.button(o||(o=(0,h.Z)(["\n  display: inline-block;\n  /* width: 48px; */\n  height: 48px;\n  border: 0;\n  padding: 10px;\n  font: inherit;\n  font-weight: 500;\n  font-size: 20px;\n  opacity: 0.6;\n  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  cursor: pointer;\n  outline: none;\n  &:hover{\n    opacity: 1;\n  }\n"]))),b=x.ZP.input(c||(c=(0,h.Z)(["\n  display: inline-block;\n  width: 100%;\n  font: inherit;\n  font-size: 20px;\n  border: none;\n  outline: none;\n  padding-left: 10px;\n  padding-right: 10px;\n  &::placeholder{\n    font: inherit;\n    font-size: 18px;\n  }\n"]))),Z=e(184),k=function(n){var t=n.onSubmitSearchBar,e=n.value;return(0,Z.jsx)(v,{children:(0,Z.jsxs)(w,{onSubmit:t,children:[(0,Z.jsx)(y,{children:(0,Z.jsx)("span",{children:"Search"})}),(0,Z.jsx)(b,{type:"text",name:"search",autoComplete:"off",autoFocus:!0,defaultValue:e,placeholder:"Search movies"})]})})},j=function(){var n,t=(0,l.useState)(!1),e=(0,u.Z)(t,2),r=e[0],i=e[1],a=(0,l.useState)([]),o=(0,u.Z)(a,2),c=o[0],h=o[1],x=(0,f.lr)(),v=(0,u.Z)(x,2),w=v[0],y=v[1],b=null!==(n=w.get("query"))&&void 0!==n?n:"";(0,l.useEffect)((function(){""!==b&&(c.length>0||(i(!0),(0,d.bI)("/search/movie",b).then((function(n){h(n.results)})).catch(d.Tl).finally((function(){return i(!1)}))))}),[c,b]);return(0,Z.jsxs)("div",{children:[(0,Z.jsx)(k,{onSubmitSearchBar:function(n){n.preventDefault();var t=n.currentTarget.search.value.trim().toLowerCase();if(""===t)return s.Notify.info("Enter your request, please!",d.W7),y({}),void h([]);t!==b?(y({query:t}),h([])):s.Notify.info("Enter new request, please!",d.W7)},value:b}),(0,Z.jsxs)(g,{children:[r&&(0,Z.jsx)(p.a,{}),(0,Z.jsx)(m.Z,{films:c})]})]})}}}]);
//# sourceMappingURL=582.b396621b.chunk.js.map