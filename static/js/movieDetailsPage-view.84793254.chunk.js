"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[466],{9290:function(n,e,t){t.r(e);var r=t(8152),i=t(6871),o=t(2791),c=t(3274),a=t(5020),s=t(3874),u=t(184),l=(0,o.lazy)((function(){return t.e(81).then(t.bind(t,3387))})),d=(0,o.lazy)((function(){return t.e(798).then(t.bind(t,9779))}));e.default=function(){var n=(0,o.useState)(null),e=(0,r.Z)(n,2),t=e[0],x=e[1],p=(0,i.UO)().movieId,h=(0,i.s0)();return(0,o.useEffect)((function(){c.Y5(p).then((function(n){return x(n.data)}))}),[p]),(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(a.zx,{type:"button",onClick:function(){return h(-1)},children:"Back"}),t&&(0,u.jsxs)(u.Fragment,{children:[(0,u.jsxs)(a.im,{children:[(0,u.jsx)("div",{children:(0,u.jsx)(a.jx,{src:"https://image.tmdb.org/t/p/w300"+t.poster_path,alt:t.title})}),(0,u.jsxs)(a.W2,{children:[(0,u.jsx)(a.rS,{children:t.title}),(0,u.jsxs)(a.xu,{children:[(0,u.jsx)(a.Dx,{children:"Genres:"}),(0,u.jsx)(a.xv,{children:t.genres.map((function(n){return n.name})).join(", ")})]}),(0,u.jsxs)(a.xu,{children:[(0,u.jsx)(a.Dx,{children:"Rate:"}),(0,u.jsx)("p",{children:t.popularity})]}),(0,u.jsxs)(a.xu,{children:[(0,u.jsx)(a.Dx,{children:"Release date:"}),(0,u.jsx)("p",{children:t.release_date})]}),(0,u.jsx)(a.g2,{children:"Overview"}),(0,u.jsx)("p",{children:t.overview})]})]}),(0,u.jsxs)(a.LN,{children:[(0,u.jsx)("h2",{style:{color:"#2a363b"},children:"Additional information:"}),(0,u.jsx)(s.r,{to:"/movies/".concat(p,"/cast"),replace:!0,children:"Cast"}),(0,u.jsx)(s.r,{to:"/movies/".concat(p,"/reviews"),replace:!0,children:"Reviews"})]}),(0,u.jsx)(a.Hr,{}),(0,u.jsx)(o.Suspense,{fallback:(0,u.jsx)(u.Fragment,{children:"loading..."}),children:(0,u.jsxs)(i.Z5,{children:[(0,u.jsx)(i.AW,{path:"cast",element:(0,u.jsx)(l,{})}),(0,u.jsx)(i.AW,{path:"reviews",element:(0,u.jsx)(d,{})})]})})]})]})}},5020:function(n,e,t){t.d(e,{Dx:function(){return Z},Hr:function(){return m},LN:function(){return _},W2:function(){return y},g2:function(){return k},im:function(){return g},jx:function(){return b},rS:function(){return v},xu:function(){return j},xv:function(){return w},zx:function(){return P}});var r,i,o,c,a,s,u,l,d,x,p,h=t(168),f=t(6031),g=f.ZP.div(r||(r=(0,h.Z)(["\n  display: flex;\n  align-items: center;\n  border: 1px solid #eee56b;\n  border-radius: 10px;\n  overflow: hidden;\n  background-color: #ddddddc4;\n"]))),m=f.ZP.hr(i||(i=(0,h.Z)(["\n  color: #eee56b;\n"]))),v=f.ZP.h2(o||(o=(0,h.Z)(["\n  text-align: center;\n  margin-bottom: 40px;\n  color: #2a363b;\n"]))),b=f.ZP.img(c||(c=(0,h.Z)(["\n  width: 250px;\n  object-fit: cover;\n"]))),j=f.ZP.div(a||(a=(0,h.Z)(["\n  display: flex;\n  align-items: baseline;\n  margin-bottom: 15px;\n"]))),Z=f.ZP.h3(s||(s=(0,h.Z)(["\n  font-weight: 500;\n  margin-right: 10px;\n  color: #2a363b;\n"]))),w=f.ZP.p(u||(u=(0,h.Z)(["\n  margin-right: 8px;\n  color: #2a363b;\n"]))),y=f.ZP.div(l||(l=(0,h.Z)(["\n  height: auto;\n  padding: 40px 60px;\n"]))),_=f.ZP.div(d||(d=(0,h.Z)(["\n  display: flex;\n  align-items: baseline;\n  padding: 40px 30px 0;\n\n  h2 {\n    margin-right: 20px;\n    color: #2a363b;\n  }\n"]))),k=f.ZP.h3(x||(x=(0,h.Z)(["\n  font-weight: 500;\n  text-align: center;\n  margin-bottom: 10px;\n  color: #2a363b;\n"]))),P=f.ZP.button(p||(p=(0,h.Z)(["\n  margin-bottom: 20px;\n  padding: 5px 15px;\n  border-radius: 5px;\n  border: none;\n  color: #2a363b;\n  transition: all 250ms ease;\n\n  &:hover {\n    cursor: pointer;\n    transform: scale(1.05);\n    color: #2196f3;\n  }\n"])))},3274:function(n,e,t){t.d(e,{Hx:function(){return f},Y5:function(){return p},bI:function(){return x},rQ:function(){return d},xc:function(){return h}});var r=t(5861),i=t(7757),o=t.n(i),c=t(4569),a=t.n(c),s="123f947c685fb26961bd016d0ca5c833";function u(n){return l.apply(this,arguments)}function l(){return(l=(0,r.Z)(o().mark((function n(e){var t;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,a().get(e);case 3:return t=n.sent,n.abrupt("return",t);case 7:return n.prev=7,n.t0=n.catch(0),n.abrupt("return",new Error("Not found"));case 10:case"end":return n.stop()}}),n,null,[[0,7]])})))).apply(this,arguments)}function d(){return u("https://api.themoviedb.org/3/trending/movie/week?api_key=".concat(s))}function x(n){return u("https://api.themoviedb.org/3/search/movie?api_key=".concat(s,"&language=en-US&query=").concat(n,"&include_adult=false"))}function p(n){return u("https://api.themoviedb.org/3/movie/".concat(n,"?api_key=").concat(s,"&language=en-US"))}function h(n){return u("https://api.themoviedb.org/3/movie/".concat(n,"/credits?api_key=").concat(s,"&language=en-US"))}function f(n){return u("https://api.themoviedb.org/3/movie/".concat(n,"/reviews?api_key=").concat(s,"&language=en-US"))}}}]);
//# sourceMappingURL=movieDetailsPage-view.84793254.chunk.js.map