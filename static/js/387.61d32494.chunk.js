"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[387],{713:function(n,t,e){e.d(t,{M1:function(){return x},TP:function(){return l},V0:function(){return f},XT:function(){return s},tx:function(){return m}});var r=e(861),a=e(757),c=e.n(a),u=e(294),o="https://api.themoviedb.org/3",i="b8999c34735e65003074ef0d1b66827f";function s(){return p.apply(this,arguments)}function p(){return(p=(0,r.Z)(c().mark((function n(){var t,e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t="".concat(o,"/trending/movie/day?api_key=").concat(i),n.next=3,u.Z.get(t);case 3:return e=n.sent,r=e.data,n.abrupt("return",r.results);case 6:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function f(n){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(c().mark((function n(t){var e,r,a;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e="".concat(o,"/search/movie?api_key=").concat(i,"&query=").concat(t),n.next=3,u.Z.get(e);case 3:return r=n.sent,a=r.data,n.abrupt("return",a.results);case 6:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function l(n){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(c().mark((function n(t){var e,r,a;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e="".concat(o,"/movie/").concat(t,"?api_key=").concat(i),n.next=3,u.Z.get(e);case 3:return r=n.sent,a=r.data,n.abrupt("return",a);case 6:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function x(n){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e="".concat(o,"/movie/").concat(t,"/credits?api_key=").concat(i),n.next=3,u.Z.get(e);case 3:return r=n.sent,n.abrupt("return",r.data);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function m(n){return y.apply(this,arguments)}function y(){return(y=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e="".concat(o,"/movie/").concat(t,"/reviews?api_key=").concat(i),n.next=3,u.Z.get(e);case 3:return r=n.sent,n.abrupt("return",r.data);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}},387:function(n,t,e){e.r(t),e.d(t,{default:function(){return v}});var r,a,c,u=e(439),o=e(713),i=e(791),s=e(689),p=e(168),f=e(867),d=f.default.ul(r||(r=(0,p.Z)(["\ndisplay: flex;\nflex-direction: column;\ngap: 15px;\npadding:0;\nmargin:0;\nmargin-top: 20px;\n"]))),l=f.default.li(a||(a=(0,p.Z)(["\nfont-size: 14px;\n  padding: 6px;\n  background-color: #f6e7bd;\n  border-radius: 15px;\n\n  :not(:last-child) {\n    margin-bottom: 12px;\n  }\n\n  span {\n    font-weight: 600; \n    color: rgb(32, 12, 51); }  }\n\n\n"]))),h=f.default.p(c||(c=(0,p.Z)(["\n"]))),x=e(184),v=function(){var n=(0,i.useState)([]),t=(0,u.Z)(n,2),e=t[0],r=t[1],a=(0,s.UO)().movieId;return(0,i.useEffect)((function(){(0,o.tx)(a).then((function(n){var t=n.results;console.log(t),r(t)}))}),[a]),(0,x.jsx)(x.Fragment,{children:e.length>0?(0,x.jsx)(d,{children:e.map((function(n){var t=n.id,e=n.author,r=n.content;return(0,x.jsxs)(l,{children:[(0,x.jsxs)("p",{children:[(0,x.jsx)("span",{children:"Author:"})," ",e]}),(0,x.jsx)(h,{children:r})]},t)}))}):(0,x.jsx)("p",{children:"Sorry, we don`t have any review for this movie \ud83e\udd37\ud83c\udffc\u200d\u2642\ufe0f"})})}}}]);
//# sourceMappingURL=387.61d32494.chunk.js.map