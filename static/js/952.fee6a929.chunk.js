"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[952],{713:function(n,t,e){e.d(t,{M1:function(){return x},TP:function(){return f},V0:function(){return l},XT:function(){return s},tx:function(){return m}});var r=e(861),a=e(757),o=e.n(a),i=e(294),c="https://api.themoviedb.org/3",u="b8999c34735e65003074ef0d1b66827f";function s(){return p.apply(this,arguments)}function p(){return(p=(0,r.Z)(o().mark((function n(){var t,e,r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t="".concat(c,"/trending/movie/day?api_key=").concat(u),n.next=3,i.Z.get(t);case 3:return e=n.sent,r=e.data,n.abrupt("return",r.results);case 6:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function l(n){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(o().mark((function n(t){var e,r,a;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e="".concat(c,"/search/movie?api_key=").concat(u,"&query=").concat(t),n.next=3,i.Z.get(e);case 3:return r=n.sent,a=r.data,n.abrupt("return",a.results);case 6:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function f(n){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(o().mark((function n(t){var e,r,a;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e="".concat(c,"/movie/").concat(t,"?api_key=").concat(u),n.next=3,i.Z.get(e);case 3:return r=n.sent,a=r.data,n.abrupt("return",a);case 6:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function x(n){return g.apply(this,arguments)}function g(){return(g=(0,r.Z)(o().mark((function n(t){var e,r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e="".concat(c,"/movie/").concat(t,"/credits?api_key=").concat(u),n.next=3,i.Z.get(e);case 3:return r=n.sent,n.abrupt("return",r.data);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function m(n){return b.apply(this,arguments)}function b(){return(b=(0,r.Z)(o().mark((function n(t){var e,r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e="".concat(c,"/movie/").concat(t,"/reviews?api_key=").concat(u),n.next=3,i.Z.get(e);case 3:return r=n.sent,n.abrupt("return",r.data);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}},854:function(n,t,e){var r=e(137),a=e(184);t.Z=function(n){var t=n.isLoading;return(0,a.jsx)(r.ko,{visible:t,height:"80",width:"80",color:"rgb(81, 29, 131)",ariaLabel:"progress-bar-loading",wrapperStyle:{},wrapperClass:""})}},634:function(n,t,e){e.d(t,{Z:function(){return m}});var r,a,o,i,c=e(689),u=e(87),s=e(820),p=e(168),l=e(867).default,d=l.ul(r||(r=(0,p.Z)(["\ndisplay: flex;\nflex-wrap: wrap;\njustify-content: center;\ngap: 20px;\nmargin-top: 16px;\nmargin-bottom: 0;\npadding: 0;\nmargin-left: auto;\nmargin-right: auto;\ncolor: #111111;\n\n"]))),f=l.li(a||(a=(0,p.Z)(["\n   \n    :hover {\n        background-color: #faba08;\n        // color: #111111;\n    }\n    // :not(:last-child) {\n    //     margin-bottom: 6px;\n    // };\n\n    a{\n        color: #111111;\n    }\n"]))),h=l.div(o||(o=(0,p.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 15px;\n  text-align: center;\n  width: 200px;\n  height: 340px;\n  border-radius: 15px;\n\n  :hover {\n    scale: 1.07;\n"]))),x=l.img(i||(i=(0,p.Z)(["\n    width: 100%;\n    height: 260px;\n    object-fit: cover; \n    border-radius: 15px;\n   \n"]))),g=e(184),m=function(n){var t=n.movies,e=(0,c.TH)();return(0,g.jsx)(g.Fragment,{children:(0,g.jsx)(d,{children:t.map((function(n){var t=n.id,r=n.original_title,a=n.poster_path;return(0,g.jsx)(f,{children:(0,g.jsx)(u.rU,{state:{from:e},to:"/movies/".concat(t),children:(0,g.jsxs)(h,{children:[a?(0,g.jsx)(x,{src:"https://image.tmdb.org/t/p/w300".concat(a),alt:r}):(0,g.jsx)(s.ofX,{size:200}),r]})})},t)}))})})}},952:function(n,t,e){e.r(t),e.d(t,{default:function(){return z}});var r,a,o,i,c,u=e(439),s=e(791),p=e(87),l=e(689),d=e(634),f=e(168),h=e(867),x=h.default.h2(r||(r=(0,f.Z)(["\n//   text-align: center;\ncolor: rgb(32, 12, 51);\nmargin-left:10px;\n// padding-top: 10px;\n//   padding-bottom: 10px;\n"]))),g=e(184),m=function(n){var t=n.title;return(0,g.jsx)(g.Fragment,{children:(0,g.jsx)(x,{children:t})})},b=e(854),v=e(713),y=h.default.form(a||(a=(0,f.Z)(["\n  display: flex;\n    align-items: center;\n    width: 100%;\n    max-width: 400px;\n    background-color: #fff;\n    border-radius: 3px;\n    overflow: hidden;\n    border: 2px solid #faba08;\n    margin-left:10px;\n  "]))),w=h.default.button(o||(o=(0,f.Z)(["\n  display: inline-block;\n    width: 48px;\n    height: 48px;\n    border: 0;\n    // background-image: url('https://image.flaticon.com/icons/svg/149/149852.svg');\n    background-size: 40%;\n    background-repeat: no-repeat;\n    background-position: center;\n    background-color: #f6e7bd;\n    //   border: 2px solid #faba08;\n\n    opacity: 0.6;\n    transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);\n    cursor: pointer;\n    outline: none;\n    \n    &:hover {\n      opacity: 1;\n    }\n  "]))),Z=(h.default.p(i||(i=(0,f.Z)(["\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  clip-path: inset(50%);\n  border: 0;\n  "]))),h.default.input(c||(c=(0,f.Z)(["\n  display: inline-block;\n  width: 100%;\n  font: inherit;\n  font-size: 20px;\n  border:none;\n//   border: 2px solid #faba08;\n  outline: none;\n  padding: 10px 4px 10px 15px;\n//   padding-left: 15px;\n//   padding-right: 4px;\n\n  &::placeholder {\n    font: inherit;\n    font-size: 18px;\n  }\n  "])))),k=e(68),j=e(686),_={position:"center-center",timeout:4e3,width:"400px",fontSize:"24px"},S=function(n){var t=n.onSearch,e=(0,s.useState)(""),r=(0,u.Z)(e,2),a=r[0],o=r[1];return(0,g.jsxs)(y,{onSubmit:function(n){n.preventDefault(),a?(t(a),o("")):j.Notify.info("Enter your request, please!",_)},children:[(0,g.jsx)(Z,{value:a,onChange:function(n){o(n.target.value.toLowerCase().trim())},type:"text",name:"query",autoComplete:"off",autoFocus:!0,placeholder:"Enter the movie"}),(0,g.jsx)(w,{type:"submit",children:(0,g.jsx)(k.tHH,{})})]})},z=function(){var n,t=(0,p.lr)(),e=(0,u.Z)(t,2),r=e[0],a=e[1],o=(0,s.useState)([]),i=(0,u.Z)(o,2),c=i[0],f=i[1],h=(0,s.useState)(!1),x=(0,u.Z)(h,2),y=x[0],w=x[1],Z=(0,s.useState)(null),k=(0,u.Z)(Z,2),j=k[0],_=k[1],z=null!==(n=r.get("query"))&&void 0!==n?n:"";return(0,s.useEffect)((function(){z&&(w(!0),(0,v.V0)(z).then((function(n){console.log(n),f(n)})).catch((function(n){return _(n)})).finally((function(){return w(!1)})))}),[z]),(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(m,{title:"Search for your movie"}),j&&(0,g.jsx)("h2",{children:j.message}),(0,g.jsx)(S,{value:z,onSearch:function(n){a(""!==n?{query:n}:{})}}),c.length>0&&(0,g.jsx)(d.Z,{movies:c,children:(0,g.jsx)(l.j3,{})}),y&&(0,g.jsx)(b.Z,{})]})}}}]);
//# sourceMappingURL=952.fee6a929.chunk.js.map