(this["webpackJsonpgift-expert-app"]=this["webpackJsonpgift-expert-app"]||[]).push([[0],{17:function(t,e,n){},18:function(t,e,n){"use strict";n.r(e);var r=n(1),a=n(7),c=n.n(a),i=n(2),s=n(9),u=n(0),j=function(t){var e=t.setCategories,n=Object(r.useState)("new category here"),a=Object(i.a)(n,2),c=a[0],j=a[1];return Object(u.jsxs)("form",{onSubmit:function(t){if(t.preventDefault(),c.trim().length<2||""===c)return!1;e((function(t){return[c].concat(Object(s.a)(t))})),j("")},children:[Object(u.jsx)("h2",{children:"add Category"}),Object(u.jsx)("br",{}),Object(u.jsx)("input",{type:"text",value:c,onChange:function(t){var e=t.target.value;j(e)}}),Object(u.jsx)("br",{}),Object(u.jsx)("br",{}),Object(u.jsx)("button",{type:"submit",children:"ADD"})]})},o=n(10),d=n(6),b=n.n(d),l=n(8),p=function(){var t=Object(l.a)(b.a.mark((function t(e){var n,r,a,c,i;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="https://api.giphy.com/v1/gifs/search?limit=10&q=".concat(e,"&api_key=UHwqxsDHGC6Pg5mtF66MDUwnR763TNaF"),t.next=3,fetch(n);case 3:return r=t.sent,t.next=6,r.json();case 6:return a=t.sent,c=a.data,i=c.map((function(t){var e;return{id:t.id,title:t.title,url:null===(e=t.images)||void 0===e?void 0:e.downsized_medium.url}})),t.abrupt("return",i);case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),f=n(1),O=f.useState,h=f.useEffect,x=function(t){var e=t.url,n=t.title;return Object(u.jsxs)("div",{className:"card animate__animated animate__fadeIn__delay-5s",children:[Object(u.jsx)("img",{src:e,alt:n}),Object(u.jsxs)("p",{children:[" ",n]})]})},m=function(t){var e=t.categorie,n=function(t){var e=O({data:[],loading:!0}),n=Object(i.a)(e,2),r=n[0],a=n[1];return h((function(){p(t).then((function(t){return a({data:t,loading:!1})}))}),[t]),r}(e),r=n.data,a=n.loading;return Object(u.jsxs)(u.Fragment,{children:[a&&Object(u.jsx)("p",{children:"Cargando..."}),Object(u.jsx)("h2",{className:"animate__animated animate__bounce",children:e}),Object(u.jsx)("ul",{className:"card-grid ",children:r.map((function(t){return Object(u.jsx)(x,Object(o.a)({},t),t.id)}))})]})},g=function(t){t.props;var e=Object(r.useState)(["One Punch"]),n=Object(i.a)(e,2),a=n[0],c=n[1];return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h2",{children:"GiftExpertCard"}),Object(u.jsx)("hr",{}),Object(u.jsx)(j,{setCategories:c}),Object(u.jsx)("ul",{children:a.map((function(t){return Object(u.jsx)(m,{categorie:t},t)}))})]})};n(17);c.a.render(Object(u.jsx)(g,{}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.4e0131ed.chunk.js.map