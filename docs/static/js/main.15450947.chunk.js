(this["webpackJsonpgif-expert-app"]=this["webpackJsonpgif-expert-app"]||[]).push([[0],{16:function(t,e,n){},17:function(t,e,n){"use strict";n.r(e);var r=n(1),c=n(7),a=n.n(c),i=n(2),s=n(9),u=n(0),j=function(t){var e=t.setCategories,n=Object(r.useState)(""),c=Object(i.a)(n,2),a=c[0],j=c[1];return Object(u.jsx)(r.Fragment,{children:Object(u.jsx)("form",{onSubmit:function(t){t.preventDefault(),a.trim().length>0&&(e((function(t){return[a].concat(Object(s.a)(t))})),j(""))},children:Object(u.jsx)("input",{type:"text",value:a,onChange:function(t){j(t.target.value)}})})})},o=n(6),l=n.n(o),d=n(8),b=function(){var t=Object(d.a)(l.a.mark((function t(e){var n,r,c,a,i;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"eUjP98P63gJOtf5ZS6lswbhD5dKlnl8b",n="https://api.giphy.com/v1/gifs/search?q=".concat(encodeURI(e),"&limit=10&api_key=").concat("eUjP98P63gJOtf5ZS6lswbhD5dKlnl8b"),t.next=4,fetch(n);case 4:return r=t.sent,t.next=7,r.json();case 7:return c=t.sent,a=c.data,i=a.map((function(t){var e;return{id:t.id,title:t.title,url:null===(e=t.images)||void 0===e?void 0:e.downsized_medium.url}})),t.abrupt("return",i);case 11:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),f=function(t){var e=t.url,n=t.title;return Object(u.jsx)(r.Fragment,{children:Object(u.jsxs)("div",{className:"card",children:[Object(u.jsx)("img",{src:e,alt:n,height:240}),Object(u.jsx)("p",{children:n})]})})},p=function(t){var e=t.category,n=function(t){var e=Object(r.useState)({data:[],loading:!0}),n=Object(i.a)(e,2),c=n[0],a=n[1];return Object(r.useEffect)((function(){b(t).then((function(t){a({data:t,loading:!1})}))}),[t]),c}(e),c=n.data,a=n.loading;return Object(u.jsxs)(r.Fragment,{children:[Object(u.jsx)("h3",{children:e}),a&&"Cargando...",Object(u.jsx)("div",{className:"card-grid",children:c.map((function(t){var e=t.id,n=t.url,r=t.title;return Object(u.jsx)(f,{id:e,url:n,title:r},e)}))})]})},h=function(){var t=Object(r.useState)([""]),e=Object(i.a)(t,2),n=e[0],c=e[1];return Object(u.jsxs)(r.Fragment,{children:[Object(u.jsx)("h2",{children:"GifExpertApp"}),Object(u.jsx)(j,{setCategories:c}),Object(u.jsx)("hr",{}),Object(u.jsx)("ol",{children:n.map((function(t){return Object(u.jsx)(p,{category:t},t)}))})]})};n(16);a.a.render(Object(u.jsx)(h,{}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.15450947.chunk.js.map