(function(t){function e(e){for(var n,a,u=e[0],c=e[1],d=e[2],l=0,f=[];l<u.length;l++)a=u[l],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&f.push(r[a][0]),r[a]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);s&&s(e);while(f.length)f.shift()();return i.push.apply(i,d||[]),o()}function o(){for(var t,e=0;e<i.length;e++){for(var o=i[e],n=!0,a=1;a<o.length;a++){var c=o[a];0!==r[c]&&(n=!1)}n&&(i.splice(e--,1),t=u(u.s=o[0]))}return t}var n={},r={app:0},i=[];function a(t){return u.p+"js/"+({about:"about"}[t]||t)+"."+{about:"b7a587aa"}[t]+".js"}function u(e){if(n[e])return n[e].exports;var o=n[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,u),o.l=!0,o.exports}u.e=function(t){var e=[],o=r[t];if(0!==o)if(o)e.push(o[2]);else{var n=new Promise((function(e,n){o=r[t]=[e,n]}));e.push(o[2]=n);var i,c=document.createElement("script");c.charset="utf-8",c.timeout=120,u.nc&&c.setAttribute("nonce",u.nc),c.src=a(t);var d=new Error;i=function(e){c.onerror=c.onload=null,clearTimeout(l);var o=r[t];if(0!==o){if(o){var n=e&&("load"===e.type?"missing":e.type),i=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+n+": "+i+")",d.name="ChunkLoadError",d.type=n,d.request=i,o[1](d)}r[t]=void 0}};var l=setTimeout((function(){i({type:"timeout",target:c})}),12e4);c.onerror=c.onload=i,document.head.appendChild(c)}return Promise.all(e)},u.m=t,u.c=n,u.d=function(t,e,o){u.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},u.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},u.t=function(t,e){if(1&e&&(t=u(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(u.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)u.d(o,n,function(e){return t[e]}.bind(null,n));return o},u.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return u.d(e,"a",e),e},u.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},u.p="/vue-todo/",u.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],d=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var s=d;i.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("56d7")},"034f":function(t,e,o){"use strict";var n=o("85ec"),r=o.n(n);r.a},"56d7":function(t,e,o){"use strict";o.r(e);o("e260"),o("e6cf"),o("cca6"),o("a79d");var n=o("2b0e"),r=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"app"}},[o("Header"),o("router-view")],1)},i=[],a=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("header",{staticClass:"header"},[o("div",{attrs:{id:"nav"}},[o("router-link",{attrs:{to:"/"}},[t._v("Home")]),t._v("| "),o("router-link",{attrs:{to:"/about"}},[t._v("About")])],1)])},u=[],c={name:"Header"},d=c,l=(o("fee7"),o("2877")),s=Object(l["a"])(d,a,u,!1,null,"5d6e2c70",null),f=s.exports,p={name:"app",components:{Header:f}},m=p,v=(o("034f"),Object(l["a"])(m,r,i,!1,null,null,null)),h=v.exports,b=(o("d3b7"),o("8c4f")),y=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"app"}},[o("AddTodo",{on:{"add-todo":t.addTodo}}),o("Todos",{attrs:{todos:t.todos},on:{"del-todo":t.deleteTodo}})],1)},_=[],g=(o("99af"),o("4de4"),o("2909")),T=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",t._l(t.todos,(function(e){return o("div",{key:e.id},[o("TodoItem",{attrs:{todo:e},on:{"del-todo":function(o){return t.$emit("del-todo",e.id)}}})],1)})),0)},O=[],j=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"todo-item",class:{"is-complete":t.todo.completed}},[o("p",[o("input",{attrs:{type:"checkbox"},domProps:{checked:t.todo.completed},on:{change:t.markComplete}}),t._v(" "+t._s(t.todo.title)+" "),o("button",{staticClass:"del",on:{click:function(e){return t.$emit("del-todo",t.todo.id)}}},[t._v("Remove")])])])},w=[],k={name:"TodoItem",props:["todo"],methods:{markComplete:function(){this.todo.completed=!this.todo.completed}}},x=k,C=(o("8bdb"),Object(l["a"])(x,j,w,!1,null,"fdac80e0",null)),P=C.exports,$={name:"Todos",components:{TodoItem:P},props:["todos"]},E=$,A=Object(l["a"])(E,T,O,!1,null,"22c5d8fc",null),H=A.exports,M=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("form",{on:{submit:function(e){return e.preventDefault(),t.addTodo(e)}}},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],attrs:{type:"text",name:"title",placeholder:"Add Todo..."},domProps:{value:t.title},on:{input:function(e){e.target.composing||(t.title=e.target.value)}}}),o("input",{staticClass:"btn",attrs:{type:"submit",value:"Add "}})])])},S=[],D={name:"AddTodo",data:function(){return{title:""}},methods:{addTodo:function(){this.$emit("add-todo",this.title),this.title=""}}},I=D,J=(o("6697"),Object(l["a"])(I,M,S,!1,null,"21c192c5",null)),L=J.exports,q={name:"Home",components:{Todos:H,AddTodo:L},data:function(){return{todos:[{id:1,title:"Drink juice",isComplete:!0},{id:2,title:"Go to Office",isComplete:!1},{id:3,title:"Take lunch",isComplete:!1},{id:4,title:"Meeting ",isComplete:!1},{id:5,title:"Order milk ",isComplete:!1}]}},methods:{deleteTodo:function(t){this.todos=this.todos.filter((function(e){return e.id!==t}))},addTodo:function(t){var e={id:Date.now(),title:t,isComplete:!1};this.todos=[].concat(Object(g["a"])(this.todos),[e])}}},G=q,N=(o("cccb"),Object(l["a"])(G,y,_,!1,null,null,null)),R=N.exports;n["a"].use(b["a"]);var z=new b["a"]({routes:[{path:"/",name:"home",component:R},{path:"/about",name:"about",component:function(){return o.e("about").then(o.bind(null,"f820"))}}]});n["a"].config.productionTip=!1,new n["a"]({router:z,render:function(t){return t(h)}}).$mount("#app")},"5ced":function(t,e,o){},6697:function(t,e,o){"use strict";var n=o("762c"),r=o.n(n);r.a},"762c":function(t,e,o){},"85ec":function(t,e,o){},"8bdb":function(t,e,o){"use strict";var n=o("cea9"),r=o.n(n);r.a},afb0:function(t,e,o){},cccb:function(t,e,o){"use strict";var n=o("5ced"),r=o.n(n);r.a},cea9:function(t,e,o){},fee7:function(t,e,o){"use strict";var n=o("afb0"),r=o.n(n);r.a}});
//# sourceMappingURL=app.513709d7.js.map