(function(t){function e(e){for(var a,o,i=e[0],l=e[1],u=e[2],c=0,v=[];c<i.length;c++)o=i[c],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&v.push(n[o][0]),n[o]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);d&&d(e);while(v.length)v.shift()();return s.push.apply(s,u||[]),r()}function r(){for(var t,e=0;e<s.length;e++){for(var r=s[e],a=!0,o=1;o<r.length;o++){var l=r[o];0!==n[l]&&(a=!1)}a&&(s.splice(e--,1),t=i(i.s=r[0]))}return t}var a={},n={app:0},s=[];function o(t){return i.p+"js/"+({about:"about"}[t]||t)+"."+{about:"b93913b9"}[t]+".js"}function i(e){if(a[e])return a[e].exports;var r=a[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.e=function(t){var e=[],r=n[t];if(0!==r)if(r)e.push(r[2]);else{var a=new Promise((function(e,a){r=n[t]=[e,a]}));e.push(r[2]=a);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=o(t);var u=new Error;s=function(e){l.onerror=l.onload=null,clearTimeout(c);var r=n[t];if(0!==r){if(r){var a=e&&("load"===e.type?"missing":e.type),s=e&&e.target&&e.target.src;u.message="Loading chunk "+t+" failed.\n("+a+": "+s+")",u.name="ChunkLoadError",u.type=a,u.request=s,r[1](u)}n[t]=void 0}};var c=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(e)},i.m=t,i.c=a,i.d=function(t,e,r){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)i.d(r,a,function(e){return t[e]}.bind(null,a));return r},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/",i.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=e,l=l.slice();for(var c=0;c<l.length;c++)e(l[c]);var d=u;s.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"4a2f":function(t,e,r){"use strict";var a=r("b1d9"),n=r.n(a);n.a},"56d7":function(t,e,r){"use strict";r.r(e);r("4de4"),r("e260"),r("e6cf"),r("cca6"),r("a79d");var a=r("2b0e"),n=r("bc3a"),s=r.n(n),o=r("a7fe"),i=r.n(o),l=(r("4989"),r("9062")),u=r.n(l);r("e40d");a["a"].prototype.$bus=new a["a"];r("a9e3"),r("b680"),r("ac1f"),r("5319");var c=function(t){var e=Number(t);return"$".concat(e.toFixed(0).replace(/./g,(function(t,e,r){var a=e&&"."!==t&&(r.length-e)%3===0?", ".concat(t).replace(/\s/g,""):t;return a})))},d=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("router-view")],1)},v=[],p=(r("5c0b"),r("2877")),h={},m=Object(p["a"])(h,d,v,!1,null,null,null),_=m.exports,f=(r("d3b7"),r("8c4f")),b=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{attrs:{id:"nav"}},[r("router-link",{attrs:{to:"/home"}},[t._v("Home")]),t._v(" | "),r("router-link",{attrs:{to:"/about"}},[t._v("About")]),t._v(" | "),r("router-link",{attrs:{to:"/login"}},[t._v("Login")]),t._v(" | "),r("router-link",{attrs:{to:"/admin/products"}},[t._v("Dashboard")])],1),r("router-view")],1)},g=[],x={},w=Object(p["a"])(x,b,g,!1,null,null,null),y=w.exports,C=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home"},[a("img",{attrs:{alt:"Vue logo",src:r("cf05")}}),a("HelloWorld",{attrs:{msg:"Welcome to Your Vue.js App"}})],1)},k=[],j=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"hello"},[r("h1",[t._v(t._s(t.msg))]),t._m(0),r("h3",[t._v("Installed CLI Plugins")]),t._m(1),r("h3",[t._v("Essential Links")]),t._m(2),r("h3",[t._v("Ecosystem")]),t._m(3),r("a",{staticClass:"btn btn-primary",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.signout(e)}}},[t._v("退出")])])},E=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("p",[t._v(" For ow to configure / customize project,"),r("br"),r("a",{attrs:{href:"https://cli.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("vue-cli documentation")]),t._v(". ")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ul",[r("li",[r("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel",target:"_blank",rel:"noopener"}},[t._v("babel")])]),r("li",[r("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-router",target:"_blank",rel:"noopener"}},[t._v("router")])]),r("li",[r("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint",target:"_blank",rel:"noopener"}},[t._v("eslint")])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ul",[r("li",[r("a",{attrs:{href:"https://vuejs.org",target:"_blank",rel:"noopener"}},[t._v("Core Docs")])]),r("li",[r("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("Forum")])]),r("li",[r("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("Community Chat")])]),r("li",[r("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank",rel:"noopener"}},[t._v("Twitter")])]),r("li",[r("a",{attrs:{href:"https://news.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("News")])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ul",[r("li",[r("a",{attrs:{href:"https://router.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("vue-router")])]),r("li",[r("a",{attrs:{href:"https://vuex.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("vuex")])]),r("li",[r("a",{attrs:{href:"https://github.com/vuejs/vue-devtools#vue-devtools",target:"_blank",rel:"noopener"}},[t._v("vue-devtools")])]),r("li",[r("a",{attrs:{href:"https://vue-loader.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("vue-loader")])]),r("li",[r("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank",rel:"noopener"}},[t._v("awesome-vue")])])])}],P={name:"HelloWorld",props:{msg:String},methods:{signout:function(){var t="".concat(Object({NODE_ENV:"production",VUE_APP_CLI_UI_URL:"",BASE_URL:"/"}).VUE_APP_APIPATH,"/logout"),e=this;this.$http.post(t).then((function(t){console.log(t.data),t.data.success&&e.$router.push("/login")}))}}},A=P,$=(r("d6aa"),Object(p["a"])(A,j,E,!1,null,"0bb65202",null)),O=$.exports,S={name:"Home",components:{HelloWorld:O},created:function(){}},L=S,U=Object(p["a"])(L,C,k,!1,null,null,null),M=U.exports,H=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"text-center login "},[r("form",{staticClass:"form-signin",on:{submit:function(e){return e.preventDefault(),t.signin(e)}}},[r("h1",{staticClass:"h3 mb-3 font-weight-normal"},[t._v("登录")]),r("label",{staticClass:"sr-only",attrs:{for:"inputEmail"}},[t._v("邮箱地址")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.user.username,expression:"user.username"}],staticClass:"form-control",attrs:{type:"email",id:"inputEmail",placeholder:"Email address",required:"",autofocus:""},domProps:{value:t.user.username},on:{input:function(e){e.target.composing||t.$set(t.user,"username",e.target.value)}}}),r("label",{staticClass:"sr-only",attrs:{for:"inputPassword"}},[t._v("密码")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.user.password,expression:"user.password"}],staticClass:"form-control",attrs:{type:"password",id:"inputPassword",placeholder:"Password",required:""},domProps:{value:t.user.password},on:{input:function(e){e.target.composing||t.$set(t.user,"password",e.target.value)}}}),t._m(0),r("button",{staticClass:"btn btn-lg btn-primary btn-block",attrs:{type:"submit"}},[t._v(" 登录 ")]),r("p",{staticClass:"mt-5 mb-3 text-muted"},[t._v("© 2017-2020")])])])},V=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"checkbox mb-3"},[r("label",[r("input",{attrs:{type:"checkbox",value:"remember-me"}}),t._v(" 记住我 ")])])}],I={name:"Login",data:function(){return{user:{username:"",password:""}}},methods:{signin:function(){var t="".concat(Object({NODE_ENV:"production",VUE_APP_CLI_UI_URL:"",BASE_URL:"/"}).VUE_APP_APIPATH,"/admin/signin");console.log(t);var e=this;console.log(e.user),this.$http.post(t,e.user).then((function(t){console.log(t.data),t.data.success&&e.$router.push("/admin/products")}))}}},N=I,T=(r("d6ad"),Object(p["a"])(N,H,V,!1,null,"69ecf922",null)),D=T.exports,z=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("Navbar"),r("Alert"),r("div",{staticClass:"container-fluid"},[r("div",{staticClass:"row"},[r("Sidebar"),r("main",{staticClass:"col-md-9 ml-sm-auto col-lg-10 px-md-4",attrs:{role:"main"}},[r("router-view"),t._m(0),r("div",{staticClass:"d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom"},[r("h1",{staticClass:"h2"},[t._v("Dashboard")]),r("div",{staticClass:"btn-toolbar mb-2 mb-md-0"},[t._m(1),r("button",{staticClass:"btn btn-sm btn-outline-secondary dropdown-toggle",attrs:{type:"button"}},[r("svg",{staticClass:"feather feather-calendar",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}},[r("rect",{attrs:{x:"3",y:"4",width:"18",height:"18",rx:"2",ry:"2"}}),r("line",{attrs:{x1:"16",y1:"2",x2:"16",y2:"6"}}),r("line",{attrs:{x1:"8",y1:"2",x2:"8",y2:"6"}}),r("line",{attrs:{x1:"3",y1:"10",x2:"21",y2:"10"}})]),t._v(" This week ")])])]),r("canvas",{staticClass:"my-4 w-100 chartjs-render-monitor",staticStyle:{display:"block",height:"115px",width:"273px"},attrs:{id:"myChart",width:"409",height:"172"}}),r("h2",[t._v("Section title")]),t._m(2)],1)],1)])],1)},B=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"chartjs-size-monitor",staticStyle:{position:"absolute",left:"0px",top:"0px",right:"0px",bottom:"0px",overflow:"hidden","pointer-events":"none",visibility:"hidden","z-index":"-1"}},[r("div",{staticClass:"chartjs-size-monitor-expand",staticStyle:{position:"absolute",left:"0",top:"0",right:"0",bottom:"0",overflow:"hidden","pointer-events":"none",visibility:"hidden","z-index":"-1"}},[r("div",{staticStyle:{position:"absolute",width:"1000000px",height:"1000000px",left:"0",top:"0"}})]),r("div",{staticClass:"chartjs-size-monitor-shrink",staticStyle:{position:"absolute",left:"0",top:"0",right:"0",bottom:"0",overflow:"hidden","pointer-events":"none",visibility:"hidden","z-index":"-1"}},[r("div",{staticStyle:{position:"absolute",width:"200%",height:"200%",left:"0",top:"0"}})])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"btn-group mr-2"},[r("button",{staticClass:"btn btn-sm btn-outline-secondary",attrs:{type:"button"}},[t._v(" Share ")]),r("button",{staticClass:"btn btn-sm btn-outline-secondary",attrs:{type:"button"}},[t._v(" Export ")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"table-responsive"},[r("table",{staticClass:"table table-striped table-sm"},[r("thead",[r("tr",[r("th",[t._v("#")]),r("th",[t._v("Header")]),r("th",[t._v("Header")]),r("th",[t._v("Header")]),r("th",[t._v("Header")])])]),r("tbody",[r("tr",[r("td",[t._v("1,001")]),r("td",[t._v("Lorem")]),r("td",[t._v("ipsum")]),r("td",[t._v("dolor")]),r("td",[t._v("sit")])]),r("tr",[r("td",[t._v("1,002")]),r("td",[t._v("amet")]),r("td",[t._v("consectetur")]),r("td",[t._v("adipiscing")]),r("td",[t._v("elit")])]),r("tr",[r("td",[t._v("1,003")]),r("td",[t._v("Integer")]),r("td",[t._v("nec")]),r("td",[t._v("odio")]),r("td",[t._v("Praesent")])]),r("tr",[r("td",[t._v("1,003")]),r("td",[t._v("libero")]),r("td",[t._v("Sed")]),r("td",[t._v("cursus")]),r("td",[t._v("ante")])]),r("tr",[r("td",[t._v("1,004")]),r("td",[t._v("dapibus")]),r("td",[t._v("diam")]),r("td",[t._v("Sed")]),r("td",[t._v("nisi")])]),r("tr",[r("td",[t._v("1,005")]),r("td",[t._v("Nulla")]),r("td",[t._v("quis")]),r("td",[t._v("sem")]),r("td",[t._v("at")])]),r("tr",[r("td",[t._v("1,006")]),r("td",[t._v("nibh")]),r("td",[t._v("elementum")]),r("td",[t._v("imperdiet")]),r("td",[t._v("Duis")])]),r("tr",[r("td",[t._v("1,007")]),r("td",[t._v("sagittis")]),r("td",[t._v("ipsum")]),r("td",[t._v("Praesent")]),r("td",[t._v("mauris")])]),r("tr",[r("td",[t._v("1,008")]),r("td",[t._v("Fusce")]),r("td",[t._v("nec")]),r("td",[t._v("tellus")]),r("td",[t._v("sed")])]),r("tr",[r("td",[t._v("1,009")]),r("td",[t._v("augue")]),r("td",[t._v("semper")]),r("td",[t._v("porta")]),r("td",[t._v("Mauris")])]),r("tr",[r("td",[t._v("1,010")]),r("td",[t._v("massa")]),r("td",[t._v("Vestibulum")]),r("td",[t._v("lacinia")]),r("td",[t._v("arcu")])]),r("tr",[r("td",[t._v("1,011")]),r("td",[t._v("eget")]),r("td",[t._v("nulla")]),r("td",[t._v("Class")]),r("td",[t._v("aptent")])]),r("tr",[r("td",[t._v("1,012")]),r("td",[t._v("taciti")]),r("td",[t._v("sociosqu")]),r("td",[t._v("ad")]),r("td",[t._v("litora")])]),r("tr",[r("td",[t._v("1,013")]),r("td",[t._v("torquent")]),r("td",[t._v("per")]),r("td",[t._v("conubia")]),r("td",[t._v("nostra")])]),r("tr",[r("td",[t._v("1,014")]),r("td",[t._v("per")]),r("td",[t._v("inceptos")]),r("td",[t._v("himenaeos")]),r("td",[t._v("Curabitur")])]),r("tr",[r("td",[t._v("1,015")]),r("td",[t._v("sodales")]),r("td",[t._v("ligula")]),r("td",[t._v("in")]),r("td",[t._v("libero")])])])])])}],q=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("nav",{staticClass:"navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow"},[r("a",{staticClass:"navbar-brand col-md-3 col-lg-2 mr-0 px-3",attrs:{href:"#"}},[t._v("Company name")]),t._m(0),r("input",{staticClass:"form-control form-control-dark w-100",attrs:{type:"text",placeholder:"Search","aria-label":"Search"}}),r("ul",{staticClass:"navbar-nav px-3"},[r("li",{staticClass:"nav-item text-nowrap"},[r("a",{staticClass:"nav-link",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.signout(e)}}},[t._v("退出")])])])])])},R=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("button",{staticClass:"navbar-toggler position-absolute d-md-none collapsed",attrs:{type:"button","data-toggle":"collapse","data-target":"#sidebarMenu","aria-controls":"sidebarMenu","aria-expanded":"false","aria-label":"Toggle navigation"}},[r("span",{staticClass:"navbar-toggler-icon"})])}],W={methods:{signout:function(){var t=this,e="".concat(Object({NODE_ENV:"production",VUE_APP_CLI_UI_URL:"",BASE_URL:"/"}).VUE_APP_APIPATH,"/logout");this.$http.post(e).then((function(e){console.log("退出登录",e.data),e.data.success&&t.$router.push("/login")}))}}},F=W,J=Object(p["a"])(F,q,R,!1,null,null,null),Y=J.exports,G=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("nav",{staticClass:"col-md-3 col-lg-2 d-md-block bg-light sidebar collapse",attrs:{id:"sidebarMenu"}},[r("div",{staticClass:"sidebar-sticky pt-3"},[r("h6",{staticClass:"sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted"},[r("span",[t._v("管理员")]),r("a",{staticClass:"d-flex align-items-center text-muted",attrs:{href:"#","aria-label":"Add a new report"}},[r("svg",{staticClass:"feather feather-plus-circle",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}},[r("circle",{attrs:{cx:"12",cy:"12",r:"10"}}),r("line",{attrs:{x1:"12",y1:"8",x2:"12",y2:"16"}}),r("line",{attrs:{x1:"8",y1:"12",x2:"16",y2:"12"}})])])]),r("ul",{staticClass:"nav flex-column mb-2"},[r("li",{staticClass:"nav-item"},[r("router-link",{attrs:{to:"/admin/products"}},[r("svg",{staticClass:"feather feather-file-text",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}},[r("path",{attrs:{d:"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"}}),r("polyline",{attrs:{points:"14 2 14 8 20 8"}}),r("line",{attrs:{x1:"16",y1:"13",x2:"8",y2:"13"}}),r("line",{attrs:{x1:"16",y1:"17",x2:"8",y2:"17"}}),r("polyline",{attrs:{points:"10 9 9 9 8 9"}})]),t._v(" 产品列表 ")])],1),r("li",{staticClass:"nav-item"},[r("router-link",{attrs:{to:"/home"}},[r("i",{staticClass:"fa fa-file-text-o text-primary",attrs:{"aria-hidden":"true"}}),t._v(" Home ")])],1)]),r("h6",{staticClass:"sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted"},[r("span",[t._v("模拟功能")]),r("a",{staticClass:"d-flex align-items-center text-muted",attrs:{href:"#","aria-label":"Add a new report"}},[r("svg",{staticClass:"feather feather-plus-circle",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}},[r("circle",{attrs:{cx:"12",cy:"12",r:"10"}}),r("line",{attrs:{x1:"12",y1:"8",x2:"12",y2:"16"}}),r("line",{attrs:{x1:"8",y1:"12",x2:"16",y2:"12"}})])])]),r("ul",{staticClass:"nav flex-column mb-2"},[r("li",{staticClass:"nav-item"},[r("router-link",{attrs:{to:"/customer-order"}},[r("svg",{staticClass:"feather feather-file-text",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}},[r("path",{attrs:{d:"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"}}),r("polyline",{attrs:{points:"14 2 14 8 20 8"}}),r("line",{attrs:{x1:"16",y1:"13",x2:"8",y2:"13"}}),r("line",{attrs:{x1:"16",y1:"17",x2:"8",y2:"17"}}),r("polyline",{attrs:{points:"10 9 9 9 8 9"}})]),t._v(" 模拟订单 ")])],1),r("li",{staticClass:"nav-item"},[r("router-link",{attrs:{to:"/cart"}},[r("svg",{staticClass:"feather feather-file-text",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}},[r("path",{attrs:{d:"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"}}),r("polyline",{attrs:{points:"14 2 14 8 20 8"}}),r("line",{attrs:{x1:"16",y1:"13",x2:"8",y2:"13"}}),r("line",{attrs:{x1:"16",y1:"17",x2:"8",y2:"17"}}),r("polyline",{attrs:{points:"10 9 9 9 8 9"}})]),t._v(" 购物车 ")])],1)])])])])},K=[],Q={},X=Object(p["a"])(Q,G,K,!1,null,null,null),Z=X.exports,tt=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"message-alert"},t._l(t.messages,(function(e,a){return r("div",{key:a,staticClass:"alert alert-dismissible",class:"alert-"+e.status},[t._v(" "+t._s(e.message)+" "),r("button",{staticClass:"close",attrs:{type:"button","aria-label":"Close"},on:{click:function(e){return t.removeMessage(a)}}},[r("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])])})),0)},et=[],rt=(r("4160"),r("a434"),r("159b"),{name:"AlertMessage",data:function(){return{messages:[]}},methods:{updateMessage:function(t,e){var r=Math.floor(new Date/1e3);this.messages.push({message:t,status:e,timestamp:r}),this.removeMessageWithTiming(r)},removeMessage:function(t){this.messages.splice(t,1)},removeMessageWithTiming:function(t){var e=this;setTimeout((function(){e.messages.forEach((function(r,a){r.timestamp===t&&e.messages.splice(a,1)}))}),5e3)}},created:function(){var t=this;t.$bus.$on("alert-message",(function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"warning";t.updateMessage(e,r)}))}}),at=rt,nt=(r("4a2f"),Object(p["a"])(at,tt,et,!1,null,null,null)),st=nt.exports,ot={components:{Navbar:Y,Sidebar:Z,Alert:st}},it=ot,lt=Object(p["a"])(it,z,B,!1,null,null,null),ut=lt.exports;a["a"].use(f["a"]);var ct=[{path:"*",redirect:"/login"},{path:"/index",name:"Index",component:y,meta:{requiresAuth:!0}},{path:"/home",name:"Home",component:M},{path:"/about",name:"About",component:function(){return r.e("about").then(r.bind(null,"f820"))}},{path:"/login",name:"Login",component:D},{path:"/admin",name:"Dashboard",component:ut,children:[{path:"products",name:"Products",component:function(){return r.e("about").then(r.bind(null,"7079"))},meta:{requiresAuth:!0}}]},{path:"/",name:"Dashboard",component:ut,children:[{path:"customer-order",name:"customer-order",component:function(){return r.e("about").then(r.bind(null,"7832"))}},{path:"cart",name:"cart",component:function(){return r.e("about").then(r.bind(null,"b3b1"))}}]}],dt=new f["a"]({routes:ct});dt.beforeEach((function(t,e,r){if(t.meta.requiresAuth){var a="".concat(Object({NODE_ENV:"production",VUE_APP_CLI_UI_URL:"",BASE_URL:"/"}).VUE_APP_APIPATH,"/api/user/check");console.log(a),s.a.post(a).then((function(t){console.log("檢查用戶是否仍持續登入",t.data),t.data.success?r():r({path:"/login"})}))}else r()}));var vt=dt;a["a"].config.productionTip=!1,a["a"].use(i.a,s.a),a["a"].component("Loading",u.a),a["a"].filter("currency",c),s.a.defaults.withCredentials=!0,new a["a"]({router:vt,render:function(t){return t(_)}}).$mount("#app")},"5c0b":function(t,e,r){"use strict";var a=r("9c0c"),n=r.n(a);n.a},"982d":function(t,e,r){},"9c0c":function(t,e,r){},b1d9:function(t,e,r){},cee9:function(t,e,r){},cf05:function(t,e,r){t.exports=r.p+"img/logo.82b9c7a5.png"},d6aa:function(t,e,r){"use strict";var a=r("982d"),n=r.n(a);n.a},d6ad:function(t,e,r){"use strict";var a=r("cee9"),n=r.n(a);n.a}});
//# sourceMappingURL=app.4d7ce58a.js.map