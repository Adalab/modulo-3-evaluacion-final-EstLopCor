(this["webpackJsonpmy-react-project"]=this["webpackJsonpmy-react-project"]||[]).push([[0],{22:function(e,t,c){},23:function(e,t,c){},24:function(e,t,c){},26:function(e,t,c){},27:function(e,t,c){},28:function(e,t,c){},29:function(e,t,c){},35:function(e,t,c){},36:function(e,t,c){},37:function(e,t,c){},38:function(e,t,c){"use strict";c.r(t);var a=c(1),n=c(16),r=c.n(n),s=c(7),i=(c(22),c(10)),l=c(2),j=(c(23),function(){return fetch("//rickandmortyapi.com/api/character/").then((function(e){return e.json()})).then((function(e){return e.results.map((function(e){return{id:e.id,name:e.name,status:e.status,specie:e.species,gender:e.gender,location:e.location.name,img:e.image,episode:e.episode}}))}))}),o=(c(24),c.p+"static/media/logo.de13d484.png"),h=c(0),d=function(){return Object(h.jsx)("header",{className:"header",children:Object(h.jsx)("img",{className:"header__img",src:o,alt:"Rick and Morty"})})},u=(c(26),function(e){return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("label",{htmlFor:"search",children:"Search for your character"}),Object(h.jsx)("input",{className:"input",placeholder:"e.g. Rick",type:"text",name:"name",id:"name",onChange:function(t){e.handleFilter({key:"name",value:t.target.value})}})]})}),b=(c(27),function(e){return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("label",{htmlFor:"specie",children:"Specie"}),Object(h.jsxs)("select",{className:"select",name:"specie",id:"specie",onChange:function(t){e.handleFilter({key:"specie",value:t.target.value})},children:[Object(h.jsx)("option",{value:"all",children:"All"}),Object(h.jsx)("option",{value:"Human",children:"Human"}),Object(h.jsx)("option",{value:"Alien",children:"Alien"})]})]})}),m=(c(28),function(e){return Object(h.jsxs)("form",{className:"form",action:"",children:[Object(h.jsx)(u,{handleFilter:e.handleFilter}),Object(h.jsx)(b,{handleFilter:e.handleFilter})]})}),O=(c(29),function(e){return Object(h.jsxs)("article",{className:"article",children:[Object(h.jsx)("img",{className:"article__img",src:e.character.img,alt:""}),Object(h.jsx)("h4",{className:"article__name",children:e.character.name}),Object(h.jsx)("p",{className:"article__text",children:e.character.specie}),Object(h.jsx)(s.b,{to:"/character/".concat(e.character.id),children:Object(h.jsx)("small",{className:"article__small",children:"+ info"})})]})}),x=(c(35),function(e){var t=e.characters.map((function(e){return Object(h.jsx)("li",{children:Object(h.jsx)(O,{character:e})},e.id)}));return Object(h.jsx)("section",{children:Object(h.jsx)("ul",{className:"list",children:t})})}),p=(c(36),function(){return Object(h.jsx)("footer",{className:"footer",children:Object(h.jsxs)("small",{className:"footer__text",children:["Made with ",Object(h.jsx)("span",{className:"footer__heart",children:"\u2764 "})," by ",Object(h.jsx)("span",{}),Object(h.jsx)("a",{className:"footer__link",href:"https://github.com/EstLopCor",title:"Visita mi GitHub",target:"_blank",children:"EstLopCor"}),Object(h.jsx)("span",{})," 2021"]})})}),f=(c(37),function(e){return Object(h.jsxs)("div",{className:"card",children:[Object(h.jsx)(s.b,{to:"/",children:Object(h.jsx)("span",{className:"close",children:Object(h.jsx)("i",{class:"fas fa-times"})})}),Object(h.jsxs)("article",{className:"detail",children:[Object(h.jsx)("img",{className:"detail__img",src:e.character.img,alt:e.character.name}),Object(h.jsxs)("div",{children:[Object(h.jsx)("h4",{className:"detail__title",children:e.character.name}),Object(h.jsxs)("p",{children:["Status: ",e.character.status]}),Object(h.jsxs)("p",{children:["Specie: ",e.character.specie]}),Object(h.jsxs)("p",{children:["Gender: ",e.character.gender]}),Object(h.jsxs)("p",{children:["Origin: ",e.character.location]}),Object(h.jsxs)("p",{children:["Episodes: ",e.character.episodes]})]})]})]})}),g=function(){var e=Object(a.useState)([]),t=Object(i.a)(e,2),c=t[0],n=t[1],r=Object(a.useState)(""),s=Object(i.a)(r,2),o=s[0],u=s[1],b=Object(a.useState)("all"),O=Object(i.a)(b,2),g=O[0],_=O[1];Object(a.useEffect)((function(){j().then((function(e){return n(e)}))}),[]);var N=c.filter((function(e){return e.name.toUpperCase().includes(o.toUpperCase())})).filter((function(e){return"all"===g||e.specie===g}));return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(d,{}),Object(h.jsx)("main",{children:Object(h.jsxs)(l.c,{children:[Object(h.jsxs)(l.a,{exact:!0,path:"/",children:[Object(h.jsx)(m,{handleFilter:function(e){"name"===e.key?u(e.value):"specie"===e.key&&_(e.value)}}),Object(h.jsx)(x,{characters:N})]}),Object(h.jsx)(l.a,{path:"/character/:id",render:function(e){var t=parseInt(e.match.params.id),a=c.find((function(e){return e.id===t}));return Object(h.jsx)(f,{character:a})}})]})}),Object(h.jsx)(p,{})]})};r.a.render(Object(h.jsx)(s.a,{children:Object(h.jsx)(g,{})}),document.getElementById("root"))}},[[38,1,2]]]);
//# sourceMappingURL=main.608df25f.chunk.js.map