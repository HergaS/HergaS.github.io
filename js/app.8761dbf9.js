(function(e){function t(t){for(var n,s,c=t[0],i=t[1],l=t[2],p=0,f=[];p<c.length;p++)s=c[p],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&f.push(r[s][0]),r[s]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n]);u&&u(t);while(f.length)f.shift()();return o.push.apply(o,l||[]),a()}function a(){for(var e,t=0;t<o.length;t++){for(var a=o[t],n=!0,c=1;c<a.length;c++){var i=a[c];0!==r[i]&&(n=!1)}n&&(o.splice(t--,1),e=s(s.s=a[0]))}return e}var n={},r={app:0},o=[];function s(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=e,s.c=n,s.d=function(e,t,a){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(a,n,function(t){return e[t]}.bind(null,n));return a},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],i=c.push.bind(c);c.push=t,c=c.slice();for(var l=0;l<c.length;l++)t(c[l]);var u=i;o.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"034f":function(e,t,a){"use strict";var n=a("85ec"),r=a.n(n);r.a},"03d1":function(e,t,a){"use strict";var n=a("8c96"),r=a.n(n);r.a},1603:function(e,t,a){},"1f33":function(e,t,a){},"351a":function(e,t,a){e.exports=a.p+"img/sads.38b99ef7.png"},"4acd":function(e,t,a){},"4df9":function(e,t,a){e.exports=a.p+"img/formSite.f8e6097d.png"},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),r=a("ecee"),o=a("c074"),s=a("f2d1"),c=a("ad3d");r["c"].add(o["a"]),r["c"].add(s["a"]),n["default"].component("font-awesome-icon",c["a"]);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},l=[],u=(a("034f"),a("2877")),p={},f=Object(u["a"])(p,i,l,!1,null,null,null),d=f.exports,g=a("9483");Object(g["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});var b=a("8c4f"),m=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("b-container",{staticClass:"home",attrs:{fluid:""}},[a("Icons"),a("Header",{attrs:{msg:"Sašo Herga"}}),a("Description"),a("Projects",{attrs:{"align-v":"end"}})],1)},v=[],h=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("b-row",{attrs:{id:"hello"}},[a("h1",{staticClass:"mx-auto my-2",attrs:{id:"name"}},[e._v(e._s(e.msg))]),a("b-col",{attrs:{cols:"12",id:"title"}},[e._v("Web Developer")])],1)},w=[],y={name:"Header",props:{msg:String},data:function(){return{name:document.getElementById("name")}}},j=y,_=(a("5e3a"),Object(u["a"])(j,h,w,!1,null,"fa3120a2",null)),x=_.exports,k=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("transition",{attrs:{appear:"","appear-class":"fade-appear-class","appear-to-class":"fade-appear-to-class","appear-active-class":"fade-appear-active-class"}},[a("b-row",{staticClass:"my-5 mx-auto"},[a("b-col",{staticClass:"description mx-auto",attrs:{md:"6"}},[e._v(" Front-end web developer wanting to fortify and expand my knowladge. Currently using HTML, CSS, JavaScript, Vue.js, Bootstrap and Firebase. ")])],1)],1)},O=[],C={},S=C,E=(a("f6cb"),Object(u["a"])(S,k,O,!1,null,"157997ca",null)),P=E.exports,$=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("transition",{attrs:{appear:"","appear-class":"fade-appear-class","appear-to-class":"fade-appear-to-class","appear-active-class":"fade-appear-active-class"}},[n("b-row",{staticClass:"proj-position"},[n("b-col",{staticClass:"image-container mx-auto",attrs:{cols:"12",md:"10",xl:"8"}},[n("b-row",[n("b-col",{attrs:{cols:"12",id:"proj"},on:{click:e.scrollTo}},[e._v("My Projects")]),e._l(e.projects,(function(e){return n("b-col",{key:e.id,staticClass:"my-3 mx-auto",attrs:{cols:"12",md:"4"}},[n("b-link",{attrs:{href:e.link,target:"_blank"}},[n("b-img",{staticClass:"images",attrs:{src:a("6aa2")("./"+e.image),alt:"",fluid:"",rounded:""}})],1)],1)}))],2)],1)],1)],1)},M=[],T={computed:{projects:function(){return this.$store.getters.projects}},methods:{scrollTo:function(){var e=this.$el.getElementsByClassName("images")[0];e&&e.scrollIntoView()}}},H=T,N=(a("9c71"),Object(u["a"])(H,$,M,!1,null,"c25b229c",null)),q=N.exports,B=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("transition",{attrs:{appear:"","appear-class":"fade-appear-class","appear-to-class":"fade-appear-to-class","appear-active-class":"fade-appear-active-class"}},[a("b-row",{staticClass:"icon-container",attrs:{"align-h":"end"}},[a("b-col",{attrs:{cols:"4",xl:"1"}},[a("b-row",[a("b-col",{staticClass:"icon-col",attrs:{cols:"5",lg:"6"}},[a("b-link",{attrs:{href:"https://www.linkedin.com/in/sa%C5%A1o-herga-b0a106196/",target:"_blank"}},[a("font-awesome-icon",{staticClass:"icons",attrs:{icon:["fab","linkedin"],size:"3x"}})],1)],1),a("b-col",{staticClass:"icon-col",attrs:{cols:"5",lg:"6"}},[a("b-link",{attrs:{href:"https://github.com/HergaS",target:"_blank"}},[a("font-awesome-icon",{staticClass:"icons",attrs:{icon:["fab","github"],size:"3x"}})],1)],1)],1)],1)],1)],1)},D=[],F={},G=F,A=(a("03d1"),Object(u["a"])(G,B,D,!1,null,null,null)),I=A.exports,J={name:"home",components:{Header:x,Description:P,Projects:q,Icons:I}},z=J,L=(a("c86d"),Object(u["a"])(z,m,v,!1,null,"0a35fd41",null)),U=L.exports;n["default"].use(b["a"]);var V=[{path:"/",name:"home",component:U}],R=new b["a"]({routes:V}),W=R,K=a("2f62");n["default"].use(K["a"]);var Q=new K["a"].Store({state:{projects:[{id:1,image:"sads.png",link:"https://sads.si/"},{id:2,image:"rgbGame.png",link:"https://hergas.github.io/RGB-Game/"},{id:3,image:"quotes.png",link:"https://hergas.github.io/quotes/"}]},getters:{projects:function(e){return e.projects}},mutations:{},actions:{},modules:{}}),X=a("5f5b"),Y=a("b1e0");a("e179"),a("f9e3"),a("2dd8");n["default"].use(X["a"]),n["default"].use(Y["a"]),n["default"].config.productionTip=!1,new n["default"]({router:W,store:Q,render:function(e){return e(d)}}).$mount("#app")},"5d6c":function(e,t,a){e.exports=a.p+"img/quotes.3bb5a82b.png"},"5e3a":function(e,t,a){"use strict";var n=a("1f33"),r=a.n(n);r.a},"6aa2":function(e,t,a){var n={"./formSite.png":"4df9","./quotes.png":"5d6c","./rgbGame.png":"72dc","./sads.png":"351a"};function r(e){var t=o(e);return a(t)}function o(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}r.keys=function(){return Object.keys(n)},r.resolve=o,e.exports=r,r.id="6aa2"},"72dc":function(e,t,a){e.exports=a.p+"img/rgbGame.b4ad22fb.png"},"85ec":function(e,t,a){},"8c96":function(e,t,a){},9978:function(e,t,a){},"9c71":function(e,t,a){"use strict";var n=a("9978"),r=a.n(n);r.a},c86d:function(e,t,a){"use strict";var n=a("1603"),r=a.n(n);r.a},f6cb:function(e,t,a){"use strict";var n=a("4acd"),r=a.n(n);r.a}});
//# sourceMappingURL=app.8761dbf9.js.map