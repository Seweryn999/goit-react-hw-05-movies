"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[178],{178:function(e,n,t){t.r(n),t.d(n,{default:function(){return _}});var r=t(861),s=t(439),i=t(757),c=t.n(i),a=t(791),o=t(689),l=t(139),d=t(281),h="MovieDetails_movie__CAewj",u="MovieDetails_movie__item__SbF7d",v="MovieDetails_movie__img__QXUMk",m=t(87),x=t(17),j=t(184),p=function(){return(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)("h4",{children:"Additional Information"}),(0,j.jsxs)("ul",{style:x.F,children:[(0,j.jsx)("li",{children:(0,j.jsx)(m.rU,{to:"cast",replace:!0,children:"Cast"})}),(0,j.jsx)("li",{children:(0,j.jsx)(m.rU,{to:"reviews",children:"Reviews"})})]}),(0,j.jsx)(a.Suspense,{fallback:(0,j.jsx)("h2",{children:"Lazy loading in action"}),children:(0,j.jsx)(o.j3,{})})]})},_=function(){var e=(0,o.TH)(),n=(0,o.s0)(),t=(0,a.useRef)(e),i=(0,o.UO)().movieId,m=(0,a.useState)(""),x=(0,s.Z)(m,2),_=x[0],f=x[1],g=(0,a.useState)({}),k=(0,s.Z)(g,2),w=k[0],b=k[1],C=(0,a.useCallback)((0,r.Z)(c().mark((function e(){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,l.O)(d.Z.API_ID(i));case 3:n=e.sent,f(n.data.id),b(n.data),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])}))),[i]);return(0,a.useEffect)((function(){i!==_&&C()}),[C,i,_]),(0,j.jsx)("div",{className:h,children:""!==_?(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)("button",{type:"button",onClick:function(){return function(){var e,r;return console.log(t),"/"===(null===(e=t.current.state)||void 0===e?void 0:e.from.pathname)?(console.log("home"),n("/")):(console.log("movies"),n("/movies".concat(null===(r=t.current.state.from)||void 0===r?void 0:r.search)))}()},children:"Go back"}),(0,j.jsxs)("div",{className:u,children:[(0,j.jsx)("img",{className:v,src:"https://image.tmdb.org/t/p/w500/".concat(w.poster_path),alt:"".concat(w.tagline)}),(0,j.jsxs)("div",{children:[(0,j.jsx)("h2",{children:w.original_title}),(0,j.jsxs)("p",{children:["User score: ",w.vote_average]}),(0,j.jsx)("h3",{children:"Overview"}),(0,j.jsx)("p",{children:w.overview}),(0,j.jsx)("h3",{children:"Genres"}),(0,j.jsx)("p",{children:w.genres.map((function(e){e._;var n=e.name;return"".concat(n," ")}))})]})]}),(0,j.jsx)(p,{})]}):(0,j.jsx)("p",{children:"Loding"})})}}}]);
//# sourceMappingURL=178.24581f38.chunk.js.map