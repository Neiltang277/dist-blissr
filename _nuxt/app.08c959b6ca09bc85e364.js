webpackJsonp([6],{"0F0d":function(t,e,n){"use strict";e.a={name:"no-ssr",props:["placeholder"],data:function(){return{canRender:!1}},mounted:function(){this.canRender=!0},render:function(t){return this.canRender?this.$slots.default&&this.$slots.default[0]:t("div",{class:["no-ssr-placeholder"]},this.$slots.placeholder||this.placeholder)}}},AOsL:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={SET_USER:function(t,e){t.user=e},SET_AUTHUSER:function(t,e){t.authUser=e},SET_INPUTNAME:function(t,e){t.inputName=e}}},F7kz:function(t,e,n){var r={"./actions.js":"QlVn","./getters.js":"eGmw","./index.js":"vdRI","./mutations.js":"AOsL","./services.js":"PVRh"};function i(t){return n(o(t))}function o(t){var e=r[t];if(!(e+1))throw new Error("Cannot find module '"+t+"'.");return e}i.keys=function(){return Object.keys(r)},i.resolve=o,t.exports=i,i.id="F7kz"},F88d:function(t,e,n){"use strict";var r=n("L1jL"),i=n("P+aQ"),o=!1;var a=function(t){o||n("bVUk")},s=n("VU/8")(r.a,i.a,!1,a,null,null);s.options.__file=".nuxt/components/nuxt-loading.vue",e.a=s.exports},"HBB+":function(t,e,n){"use strict";e.a={name:"nuxt-child",functional:!0,props:["keepAlive"],render:function(t,e){var n=e.parent,o=e.data,a=e.props;o.nuxtChild=!0;for(var s=n,u=n.$nuxt.nuxt.transitions,c=n.$nuxt.nuxt.defaultTransition,d=0;n;)n.$vnode&&n.$vnode.data.nuxtChild&&d++,n=n.$parent;o.nuxtChildDepth=d;var f=u[d]||c,l={};r.forEach(function(t){void 0!==f[t]&&(l[t]=f[t])});var p={};i.forEach(function(t){"function"==typeof f[t]&&(p[t]=f[t].bind(s))});var h=p.beforeEnter;p.beforeEnter=function(t){if(window.$nuxt.$emit("triggerScroll"),h)return h.call(s,t)};var m=[t("router-view",o)];return void 0!==a.keepAlive&&(m=[t("keep-alive",m)]),t("transition",{props:l,on:p},m)}};var r=["name","mode","appear","css","type","duration","enterClass","leaveClass","appearClass","enterActiveClass","enterActiveClass","leaveActiveClass","appearActiveClass","enterToClass","leaveToClass","appearToClass"],i=["beforeEnter","enter","afterEnter","enterCancelled","beforeLeave","leave","afterLeave","leaveCancelled","beforeAppear","appear","afterAppear","appearCancelled"]},"Hot+":function(t,e,n){"use strict";var r=n("/5sW"),i=n("HBB+"),o=n("ct3O"),a=n("YLfZ");e.a={name:"nuxt",props:["nuxtChildKey","keepAlive"],render:function(t){return this.nuxt.err?t("nuxt-error",{props:{error:this.nuxt.err}}):t("nuxt-child",{key:this.routerViewKey,props:this.$props})},beforeCreate:function(){r.default.util.defineReactive(this,"nuxt",this.$root.$options.nuxt)},computed:{routerViewKey:function(){if(void 0!==this.nuxtChildKey||this.$route.matched.length>1)return this.nuxtChildKey||Object(a.b)(this.$route.matched[0].path)(this.$route.params);var t=this.$route.matched[0]&&this.$route.matched[0].components.default;return t&&t.options&&t.options.key?"function"==typeof t.options.key?t.options.key(this.$route):t.options.key:this.$route.path}},components:{NuxtChild:i.a,NuxtError:o.a}}},J2Ti:function(t,e,n){"use strict";n.d(e,"a",function(){return w});var r=n("woOf"),i=n.n(r),o=n("BO1k"),a=n.n(o),s=n("/5sW"),u=n("NYxO");s.default.use(u.default);var c=n("F7kz"),d=c.keys(),f={},l=void 0;if(d.forEach(function(t){-1!==t.indexOf("./index.")&&(l=t)}),l&&(f=_(l)),"function"!=typeof f){f.modules||(f.modules={});var p=!0,h=!1,m=void 0;try{for(var x,v=a()(d);!(p=(x=v.next()).done);p=!0){var g=x.value,y=g.replace(/^\.\//,"").replace(/\.(js)$/,"");if("index"!==y){var b=y.split(/\//);(t=C(f,b))[y=b.pop()]=_(g),t[y].namespaced=!0}}}catch(t){h=!0,m=t}finally{try{!p&&v.return&&v.return()}finally{if(h)throw m}}}var w=f instanceof Function?f:function(){return new u.default.Store(i()({strict:!1},f,{state:f.state instanceof Function?f.state():{}}))};function _(t){var e=c(t),n=e.default||e;if(n.commit)throw new Error("[nuxt] store/"+t.replace("./","")+" should export a method which returns a Vuex instance.");if(n.state&&"function"!=typeof n.state)throw new Error("[nuxt] state should be a function in store/"+t.replace("./",""));return n}function C(t,e){if(1===e.length)return t.modules;var n=e.shift();return t.modules[n]=t.modules[n]||{},t.modules[n].namespaced=!0,t.modules[n].modules=t.modules[n].modules||{},C(t.modules[n],e)}},JymO:function(t,e,n){var r=n("uJb7");"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);n("rjj0")("1946fda7",r,!1,{sourceMap:!1})},L1jL:function(t,e,n){"use strict";var r=n("/5sW");e.a={name:"nuxt-loading",data:function(){return{percent:0,show:!1,canSuccess:!0,duration:5e3,height:"2px",color:"#3B8070",failedColor:"red"}},methods:{start:function(){var t=this;return this.show=!0,this.canSuccess=!0,this._timer&&(clearInterval(this._timer),this.percent=0),this._cut=1e4/Math.floor(this.duration),this._timer=setInterval(function(){t.increase(t._cut*Math.random()),t.percent>95&&t.finish()},100),this},set:function(t){return this.show=!0,this.canSuccess=!0,this.percent=Math.floor(t),this},get:function(){return Math.floor(this.percent)},increase:function(t){return this.percent=this.percent+Math.floor(t),this},decrease:function(t){return this.percent=this.percent-Math.floor(t),this},finish:function(){return this.percent=100,this.hide(),this},pause:function(){return clearInterval(this._timer),this},hide:function(){var t=this;return clearInterval(this._timer),this._timer=null,setTimeout(function(){t.show=!1,r.default.nextTick(function(){setTimeout(function(){t.percent=0},200)})},500),this},fail:function(){return this.canSuccess=!1,this}}}},"P+aQ":function(t,e,n){"use strict";var r=function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"nuxt-progress",style:{width:this.percent+"%",height:this.height,"background-color":this.canSuccess?this.color:this.failedColor,opacity:this.show?1:0}})};r._withStripped=!0;var i={render:r,staticRenderFns:[]};e.a=i},PVRh:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n("Zrlr"),i=n.n(r),o=n("wxAW"),a=n.n(o),s=n("mtWM"),u=n.n(s),c=n("JnRc"),d=n.n(c),f=n("uyLW"),l=n.n(f),p=function(){function t(){i()(this,t)}return a()(t,[{key:"setQuizAnswer",value:function(t,e,n,r){d.a.init({appId:"UefuCY50vFnjIgf345m2jIlp-gzGzoHsz",appKey:"FSimC0hWAmBONRBrPG5yaTwE"});var i=new(d.a.Object.extend("Answer"));return i.set("uid",t),i.set("inputName",e),i.set("type",n),i.set("finalAnswer",r),i.save()}},{key:"setQuizTest",value:function(t,e,n){return console.log({uid:t,inputName:e,finalAnswer:n}),l.a.answers.boys.b1}},{key:"getWechatOAuth",value:function(t){return u.a.get("/wechat/oauth?url="+encodeURIComponent(t))}}]),t}();e.default=new p},QhKw:function(t,e,n){"use strict";var r=function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"__nuxt-error-page"},[e("div",{staticClass:"error"},[e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"90",height:"90",fill:"#DBE1EC",viewBox:"0 0 48 48"}},[e("path",{attrs:{d:"M22 30h4v4h-4zm0-16h4v12h-4zm1.99-10C12.94 4 4 12.95 4 24s8.94 20 19.99 20S44 35.05 44 24 35.04 4 23.99 4zM24 40c-8.84 0-16-7.16-16-16S15.16 8 24 8s16 7.16 16 16-7.16 16-16 16z"}})]),e("div",{staticClass:"title"},[this._v(this._s(this.message))]),404===this.statusCode?e("p",{staticClass:"description"},[e("nuxt-link",{staticClass:"error-link",attrs:{to:"/"}},[this._v("Back to the home page")])],1):this._e(),this._m(0)])])};r._withStripped=!0;var i={render:r,staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"logo"},[e("a",{attrs:{href:"https://nuxtjs.org",target:"_blank",rel:"noopener"}},[this._v("Nuxt.js")])])}]};e.a=i},QlVn:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n("Xxa5"),i=n.n(r),o=n("exGp"),a=n.n(o),s=n("PVRh"),u=n("mtWM"),c=n.n(u);e.default={setAnswer:function(){var t=a()(i.a.mark(function t(e,n){var r,o=e.state;return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.default.setQuizTest(n.uid,n.inputName,n.finalAnswer);case 2:return r=t.sent,o.answer=r,t.abrupt("return",r);case 5:case"end":return t.stop()}},t,this)}));return function(e,n){return t.apply(this,arguments)}}(),getWechatOAuth:function(t,e){t.commit;return s.default.getWechatOAuth(e)},setAuthUser:function(t,e){(0,t.commit)("SET_AUTHUSER",e)},setInputName:function(t,e){(0,t.commit)("SET_INPUTNAME",e)},readMore:function(){var t=a()(i.a.mark(function t(e,n){var r;e.commit;return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.a.get("http://blissr.com.cn/v1/quiz/readmore/"+n);case 2:return r=t.sent,t.abrupt("return",r);case 4:case"end":return t.stop()}},t,this)}));return function(e,n){return t.apply(this,arguments)}}()}},T23V:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r,i,o,a=n("pFYg"),s=n.n(a),u=n("//Fk"),c=n.n(u),d=n("Xxa5"),f=n.n(d),l=n("mvHQ"),p=n.n(l),h=n("exGp"),m=n.n(h),x=n("fZjL"),v=n.n(x),g=n("woOf"),y=n.n(g),b=n("/5sW"),w=n("unZF"),_=n("qcny"),C=n("YLfZ"),k=(r=m()(f.a.mark(function t(e,n,r){var i,o,a=this;return f.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return this._pathChanged=!!R.nuxt.err||n.path!==e.path,this._queryChanged=p()(e.query)!==p()(n.query),this._diffQuery=this._queryChanged?Object(C.g)(e.query,n.query):[],this._pathChanged&&this.$loading.start&&this.$loading.start(),t.prev=4,t.next=7,Object(C.k)(e);case 7:i=t.sent,!this._pathChanged&&this._queryChanged&&i.some(function(t){var e=t.options.watchQuery;return!0===e||!!Array.isArray(e)&&e.some(function(t){return a._diffQuery[t]})})&&this.$loading.start&&this.$loading.start(),r(),t.next=19;break;case 12:t.prev=12,t.t0=t.catch(4),t.t0=t.t0||{},o=t.t0.statusCode||t.t0.status||t.t0.response&&t.t0.response.status||500,this.error({statusCode:o,message:t.t0.message}),this.$nuxt.$emit("routeChanged",e,n,t.t0),r(!1);case 19:case"end":return t.stop()}},t,this,[[4,12]])})),function(t,e,n){return r.apply(this,arguments)}),j=(i=m()(f.a.mark(function t(e,n,r){var i,o,a,s,u,d,l,p,h=this;return f.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!1!==this._pathChanged||!1!==this._queryChanged){t.next=2;break}return t.abrupt("return",r());case 2:return i=!1,o=function(t){if(n.path===t.path&&h.$loading.finish&&h.$loading.finish(),n.path!==t.path&&h.$loading.pause&&h.$loading.pause(),!i){i=!0;var e=[];E=Object(C.e)(n,e).map(function(t,r){return Object(C.b)(n.matched[e[r]].path)(n.params)}),r(t)}},t.next=6,Object(C.m)(R,{route:e,from:n,next:o.bind(this)});case 6:if(this._dateLastError=R.nuxt.dateErr,this._hadError=!!R.nuxt.err,a=[],(s=Object(C.e)(e,a)).length){t.next=24;break}return t.next=13,M.call(this,s,R.context);case 13:if(!i){t.next=15;break}return t.abrupt("return");case 15:return t.next=17,this.loadLayout("function"==typeof _.a.layout?_.a.layout(R.context):_.a.layout);case 17:return u=t.sent,t.next=20,M.call(this,s,R.context,u);case 20:if(!i){t.next=22;break}return t.abrupt("return");case 22:return R.context.error({statusCode:404,message:"This page could not be found"}),t.abrupt("return",r());case 24:return s.forEach(function(t){t._Ctor&&t._Ctor.options&&(t.options.asyncData=t._Ctor.options.asyncData,t.options.fetch=t._Ctor.options.fetch)}),this.setTransitions(q(s,e,n)),t.prev=26,t.next=29,M.call(this,s,R.context);case 29:if(!i){t.next=31;break}return t.abrupt("return");case 31:if(!R.context._errored){t.next=33;break}return t.abrupt("return",r());case 33:return"function"==typeof(d=s[0].options.layout)&&(d=d(R.context)),t.next=37,this.loadLayout(d);case 37:return d=t.sent,t.next=40,M.call(this,s,R.context,d);case 40:if(!i){t.next=42;break}return t.abrupt("return");case 42:if(!R.context._errored){t.next=44;break}return t.abrupt("return",r());case 44:if(l=!0,s.forEach(function(t){l&&"function"==typeof t.options.validate&&(l=t.options.validate({params:e.params||{},query:e.query||{},store:T}))}),l){t.next=49;break}return this.error({statusCode:404,message:"This page could not be found"}),t.abrupt("return",r());case 49:return t.next=51,c.a.all(s.map(function(t,n){if(t._path=Object(C.b)(e.matched[a[n]].path)(e.params),t._dataRefresh=!1,h._pathChanged&&t._path!==E[n])t._dataRefresh=!0;else if(!h._pathChanged&&h._queryChanged){var r=t.options.watchQuery;!0===r?t._dataRefresh=!0:Array.isArray(r)&&(t._dataRefresh=r.some(function(t){return h._diffQuery[t]}))}if(!h._hadError&&h._isMounted&&!t._dataRefresh)return c.a.resolve();var i=[],o=t.options.asyncData&&"function"==typeof t.options.asyncData,s=!!t.options.fetch,u=o&&s?30:45;if(o){var d=Object(C.j)(t.options.asyncData,R.context).then(function(e){Object(C.a)(t,e),h.$loading.increase&&h.$loading.increase(u)});i.push(d)}if(s){var f=t.options.fetch(R.context);f&&(f instanceof c.a||"function"==typeof f.then)||(f=c.a.resolve(f)),f.then(function(t){h.$loading.increase&&h.$loading.increase(u)}),i.push(f)}return c.a.all(i)}));case 51:i||(this.$loading.finish&&this.$loading.finish(),E=s.map(function(t,n){return Object(C.b)(e.matched[a[n]].path)(e.params)}),r()),t.next=66;break;case 54:return t.prev=54,t.t0=t.catch(26),t.t0||(t.t0={}),E=[],t.t0.statusCode=t.t0.statusCode||t.t0.status||t.t0.response&&t.t0.response.status||500,"function"==typeof(p=_.a.layout)&&(p=p(R.context)),t.next=63,this.loadLayout(p);case 63:this.error(t.t0),this.$nuxt.$emit("routeChanged",e,n,t.t0),r(!1);case 66:case"end":return t.stop()}},t,this,[[26,54]])})),function(t,e,n){return i.apply(this,arguments)}),$=(o=m()(f.a.mark(function t(e){var n,r,i,o;return f.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return R=e.app,O=e.router,T=e.store,t.next=5,c.a.all(L(O));case 5:return n=t.sent,r=new b.default(R),i=A.layout||"default",t.next=10,r.loadLayout(i);case 10:if(r.setLayout(i),o=function(){r.$mount("#__nuxt"),b.default.nextTick(function(){F(r)})},r.setTransitions=r.$options.nuxt.setTransitions.bind(r),n.length&&(r.setTransitions(q(n,O.currentRoute)),E=O.currentRoute.matched.map(function(t){return Object(C.b)(t.path)(O.currentRoute.params)})),r.$loading={},A.error&&r.error(A.error),O.beforeEach(k.bind(r)),O.beforeEach(j.bind(r)),O.afterEach(N),O.afterEach(U.bind(r)),!A.serverRendered){t.next=23;break}return o(),t.abrupt("return");case 23:j.call(r,O.currentRoute,O.currentRoute,function(t){if(!t)return N(O.currentRoute,O.currentRoute),z.call(r,O.currentRoute),void o();O.push(t,function(){return o()},function(t){if(!t)return o();console.error(t)})});case 24:case"end":return t.stop()}},t,this)})),function(t){return o.apply(this,arguments)}),E=[],R=void 0,O=void 0,T=void 0,A=window.__NUXT__||{};function q(t,e,n){var r=function(t){var r=function(t,e){if(!t||!t.options||!t.options[e])return{};var n=t.options[e];if("function"==typeof n){for(var r=arguments.length,i=Array(r>2?r-2:0),o=2;o<r;o++)i[o-2]=arguments[o];return n.apply(void 0,i)}return n}(t,"transition",e,n)||{};return"string"==typeof r?{name:r}:r};return t.map(function(t){var e=y()({},r(t));if(n&&n.matched.length&&n.matched[0].components.default){var i=r(n.matched[0].components.default);v()(i).filter(function(t){return i[t]&&-1!==t.toLowerCase().indexOf("leave")}).forEach(function(t){e[t]=i[t]})}return e})}function S(t,e){return A.serverRendered&&e&&Object(C.a)(t,e),t._Ctor=t,t}function L(t){var e,n=this,r=Object(C.d)(t.options.base,t.options.mode);return Object(C.c)(t.match(r),(e=m()(f.a.mark(function t(e,r,i,o,a){var s;return f.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if("function"!=typeof e||e.options){t.next=4;break}return t.next=3,e();case 3:e=t.sent;case 4:return s=S(Object(C.l)(e),A.data?A.data[a]:null),i.components[o]=s,t.abrupt("return",s);case 7:case"end":return t.stop()}},t,n)})),function(t,n,r,i,o){return e.apply(this,arguments)}))}function M(t,e,n){var r=this,i=[],o=!1;if(void 0!==n&&(i=[],n.middleware&&(i=i.concat(n.middleware)),t.forEach(function(t){t.options.middleware&&(i=i.concat(t.options.middleware))})),i=i.map(function(t){return"function"==typeof t?t:("function"!=typeof w.a[t]&&(o=!0,r.error({statusCode:500,message:"Unknown middleware "+t})),w.a[t])}),!o)return Object(C.i)(i,e)}function N(t,e){Object(C.c)(t,function(t,e,n,r){return"object"!==(void 0===t?"undefined":s()(t))||t.options||((t=b.default.extend(t))._Ctor=t,n.components[r]=t),t})}function z(t){this._hadError&&this._dateLastError===this.$options.nuxt.dateErr&&this.error();var e=this.$options.nuxt.err?_.a.layout:t.matched[0].components.default.options.layout;"function"==typeof e&&(e=e(R.context)),this.setLayout(e)}function U(t,e){var n=this;!1===this._pathChanged&&!1===this._queryChanged||b.default.nextTick(function(){var e=[];Object(C.f)(t,e).forEach(function(n,r){if(n&&-1!==t.matched[e[r]].path.indexOf(":")&&n.constructor._dataRefresh&&E[r]===n.constructor._path&&"function"==typeof n.constructor.options.data){var i=n.constructor.options.data.call(n);for(var o in i)b.default.set(n.$data,o,i[o])}}),z.call(n,t)})}function F(t){window._nuxtReadyCbs.forEach(function(e){"function"==typeof e&&e(t)}),"function"==typeof window._onNuxtLoaded&&window._onNuxtLoaded(t),O.afterEach(function(e,n){b.default.nextTick(function(){return t.$nuxt.$emit("routeChanged",e,n)})})}Object(_.b)().then($).catch(function(t){"ERR_REDIRECT"!==t.message&&console.error("[nuxt] Error while initializing app",t)})},WRRc:function(t,e,n){"use strict";e.a={name:"nuxt-link",functional:!0,render:function(t,e){return t("router-link",e.data,e.children)}}},YLfZ:function(t,e,n){"use strict";e.a=function(t,e){var n=t.options.data||g;if(!e&&t.options.hasAsyncData)return;t.options.hasAsyncData=!0,t.options.data=function(){var r=n.call(this);return this.$ssrContext&&(e=this.$ssrContext.asyncData[t.cid]),x()({},r,e)},t._Ctor&&t._Ctor.options&&(t._Ctor.options.data=t.options.data)},e.l=y,e.e=b,e.f=function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return[].concat.apply([],t.matched.map(function(t,n){return h()(t.instances).map(function(r){return e&&e.push(n),t.instances[r]})}))},e.c=w,e.k=_,n.d(e,"h",function(){return j}),n.d(e,"m",function(){return $}),e.i=function t(e,n){if(!e.length||n._redirected||n._errored)return l.a.resolve();return E(e[0],n).then(function(){return t(e.slice(1),n)})},e.j=E,e.d=function(t,e){var n=window.location.pathname;if("hash"===e)return window.location.hash.replace(/^#\//,"");t&&0===n.indexOf(t)&&(n=n.slice(t.length));return(n||"/")+window.location.search+window.location.hash},e.b=function(t,e){return function(t){for(var e=new Array(t.length),n=0;n<t.length;n++)"object"===a()(t[n])&&(e[n]=new RegExp("^(?:"+t[n].pattern+")$"));return function(n,r){for(var o="",a=n||{},s=r||{},u=s.pretty?O:encodeURIComponent,c=0;c<t.length;c++){var d=t[c];if("string"!=typeof d){var f,l=a[d.name];if(null==l){if(d.optional){d.partial&&(o+=d.prefix);continue}throw new TypeError('Expected "'+d.name+'" to be defined')}if(Array.isArray(l)){if(!d.repeat)throw new TypeError('Expected "'+d.name+'" to not repeat, but received `'+i()(l)+"`");if(0===l.length){if(d.optional)continue;throw new TypeError('Expected "'+d.name+'" to not be empty')}for(var p=0;p<l.length;p++){if(f=u(l[p]),!e[c].test(f))throw new TypeError('Expected all "'+d.name+'" to match "'+d.pattern+'", but received `'+i()(f)+"`");o+=(0===p?d.prefix:d.delimiter)+f}}else{if(f=d.asterisk?encodeURI(l).replace(/[?#]/g,function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()}):u(l),!e[c].test(f))throw new TypeError('Expected "'+d.name+'" to match "'+d.pattern+'", but received "'+f+'"');o+=d.prefix+f}}else o+=d}return o}}(function(t,e){var n,r=[],i=0,o=0,a="",s=e&&e.delimiter||"/";for(;null!=(n=R.exec(t));){var u=n[0],c=n[1],d=n.index;if(a+=t.slice(o,d),o=d+u.length,c)a+=c[1];else{var f=t[o],l=n[2],p=n[3],h=n[4],m=n[5],x=n[6],v=n[7];a&&(r.push(a),a="");var g=null!=l&&null!=f&&f!==l,y="+"===x||"*"===x,b="?"===x||"*"===x,w=n[2]||s,_=h||m;r.push({name:p||i++,prefix:l||"",delimiter:w,optional:b,repeat:y,partial:g,asterisk:!!v,pattern:_?A(_):v?".*":"[^"+T(w)+"]+?"})}}o<t.length&&(a+=t.substr(o));a&&r.push(a);return r}(t,e))},e.g=function(t,e){var n={},r=x()({},t,e);for(var i in r)String(t[i])!==String(e[i])&&(n[i]=!0);return n};var r=n("mvHQ"),i=n.n(r),o=n("pFYg"),a=n.n(o),s=n("Xxa5"),u=n.n(s),c=n("exGp"),d=n.n(c),f=n("//Fk"),l=n.n(f),p=n("fZjL"),h=n.n(p),m=n("Dd8w"),x=n.n(m),v=n("/5sW"),g=function(){return{}};function y(t){return t.options&&t._Ctor===t?t:(t.options?(t._Ctor=t,t.extendOptions=t.options):(t=v.default.extend(t))._Ctor=t,!t.options.name&&t.options.__file&&(t.options.name=t.options.__file),t)}function b(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return[].concat.apply([],t.matched.map(function(t,n){return h()(t.components).map(function(r){return e&&e.push(n),t.components[r]})}))}function w(t,e){return Array.prototype.concat.apply([],t.matched.map(function(t,n){return h()(t.components).map(function(r){return e(t.components[r],t.instances[r],t,r,n)})}))}function _(t){var e,n=this;return l.a.all(w(t,(e=d()(u.a.mark(function t(e,r,i,o){return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if("function"!=typeof e||e.options){t.next=4;break}return t.next=3,e();case 3:e=t.sent;case 4:return t.abrupt("return",i.components[o]=y(e));case 5:case"end":return t.stop()}},t,n)})),function(t,n,r,i){return e.apply(this,arguments)})))}window._nuxtReadyCbs=[],window.onNuxtReady=function(t){window._nuxtReadyCbs.push(t)};var C,k,j=(C=d()(u.a.mark(function t(e){return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,_(e);case 2:return t.abrupt("return",x()({},e,{meta:b(e).map(function(t){return t.options.meta||{}})}));case 3:case"end":return t.stop()}},t,this)})),function(t){return C.apply(this,arguments)}),$=(k=d()(u.a.mark(function t(e,n){return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(n.to?n.to:n.route,e.context){t.next=14;break}t.t0=!0,t.t1=e,t.t2=e.store,t.t3=n.payload,t.t4=n.error,t.t5={},e.context={get isServer(){return console.warn("context.isServer has been deprecated, please use process.server instead."),!1},get isClient(){return console.warn("context.isClient has been deprecated, please use process.client instead."),!0},isStatic:t.t0,isDev:!1,isHMR:!1,app:t.t1,store:t.t2,payload:t.t3,error:t.t4,base:"/",env:t.t5},n.req&&(e.context.req=n.req),n.res&&(e.context.res=n.res),e.context.redirect=function(t,n,r){if(t){e.context._redirected=!0;var i=void 0===n?"undefined":a()(n);if("number"==typeof t||"undefined"!==i&&"object"!==i||(r=n||{},i=void 0===(n=t)?"undefined":a()(n),t=302),"object"===i&&(n=e.router.resolve(n).href),!/(^[.]{1,2}\/)|(^\/(?!\/))/.test(n))throw n=q(n,r),window.location.replace(n),new Error("ERR_REDIRECT");e.context.next({path:n,query:r,status:t})}},e.context.nuxtState=window.__NUXT__;case 14:if(e.context.next=n.next,e.context._redirected=!1,e.context._errored=!1,e.context.isHMR=!!n.isHMR,!n.route){t.next=22;break}return t.next=21,j(n.route);case 21:e.context.route=t.sent;case 22:if(e.context.params=e.context.route.params||{},e.context.query=e.context.route.query||{},!n.from){t.next=28;break}return t.next=27,j(n.from);case 27:e.context.from=t.sent;case 28:case"end":return t.stop()}},t,this)})),function(t,e){return k.apply(this,arguments)});function E(t,e){var n=void 0;return(n=2===t.length?new l.a(function(n){t(e,function(t,r){t&&e.error(t),n(r=r||{})})}):t(e))&&(n instanceof l.a||"function"==typeof n.then)||(n=l.a.resolve(n)),n}var R=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g");function O(t){return encodeURI(t).replace(/[\/?#]/g,function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()})}function T(t){return t.replace(/([.+*?=^!:()[\]|\/\\])/g,"\\$1")}function A(t){return t.replace(/([=!:$\/()])/g,"\\$1")}function q(t,e){var n=void 0,r=t.indexOf("://");-1!==r?(n=t.substring(0,r),t=t.substring(r+3)):0===t.indexOf("//")&&(t=t.substring(2));var o=t.split("/"),a=(n?n+"://":"//")+o.shift(),s=o.filter(Boolean).join("/"),u=void 0;return 2===(o=s.split("#")).length&&(s=o[0],u=o[1]),a+=s?"/"+s:"",e&&"{}"!==i()(e)&&(a+=(2===t.split("?").length?"&":"?")+function(t){return h()(t).sort().map(function(e){var n=t[e];return null==n?"":Array.isArray(n)?n.slice().map(function(t){return[e,"=",t].join("")}).join("&"):e+"="+n}).filter(Boolean).join("&")}(e)),a+=u?"#"+u:""}},bVUk:function(t,e,n){var r=n("hDSb");"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);n("rjj0")("4aea0c48",r,!1,{sourceMap:!1})},ct3O:function(t,e,n){"use strict";var r=n("p8dR"),i=n("QhKw"),o=!1;var a=function(t){o||n("JymO")},s=n("VU/8")(r.a,i.a,!1,a,null,null);s.options.__file=".nuxt/components/nuxt-error.vue",e.a=s.exports},eGmw:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={inputName:function(t){return t.inputName}}},hDSb:function(t,e,n){(t.exports=n("FZ+f")(!1)).push([t.i,".nuxt-progress{position:fixed;top:0;left:0;right:0;height:2px;width:0;-webkit-transition:width .2s,opacity .4s;transition:width .2s,opacity .4s;opacity:1;background-color:#efc14e;z-index:999999}",""])},mtxM:function(t,e,n){"use strict";e.a=function(){return new a.default({mode:"history",base:"/",linkActiveClass:"nuxt-link-active",linkExactActiveClass:"nuxt-link-exact-active",scrollBehavior:f,routes:[{path:"/quiz/test:type?",component:s,name:"quiz-testtype"},{path:"/quiz/test:type?/questions",component:u,name:"quiz-testtype-questions"},{path:"/quiz/test:type?/answer",component:c,name:"quiz-testtype-answer"},{path:"/",component:d,name:"index"}],fallback:!1})};var r=n("//Fk"),i=n.n(r),o=n("/5sW"),a=n("/ocq");o.default.use(a.default);var s=function(){return n.e(3).then(n.bind(null,"USb7")).then(function(t){return t.default||t})},u=function(){return n.e(0).then(n.bind(null,"k2s7")).then(function(t){return t.default||t})},c=function(){return n.e(1).then(n.bind(null,"WIZL")).then(function(t){return t.default||t})},d=function(){return n.e(2).then(n.bind(null,"/TYz")).then(function(t){return t.default||t})};window.history.scrollRestoration="manual";var f=function(t,e,n){var r=!1;return t.matched.length<2?r={x:0,y:0}:t.matched.some(function(t){return t.components.default.options.scrollToTop})&&(r={x:0,y:0}),n&&(r=n),new i.a(function(e){window.$nuxt.$once("triggerScroll",function(){t.hash&&document.querySelector(t.hash)&&(r={selector:t.hash}),e(r)})})}},p8dR:function(t,e,n){"use strict";e.a={name:"nuxt-error",props:["error"],head:function(){return{title:this.message,meta:[{name:"viewport",content:"width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no"}]}},computed:{statusCode:function(){return this.error&&this.error.statusCode||500},message:function(){return this.error.message||"Error"}}}},qcny:function(t,e,n){"use strict";n.d(e,"b",function(){return T});var r=n("Xxa5"),i=n.n(r),o=n("//Fk"),a=(n.n(o),n("C4MV")),s=n.n(a),u=n("woOf"),c=n.n(u),d=n("Dd8w"),f=n.n(d),l=n("exGp"),p=n.n(l),h=n("MU8w"),m=(n.n(h),n("/5sW")),x=n("p3jY"),v=n.n(x),g=n("mtxM"),y=n("0F0d"),b=n("HBB+"),w=n("WRRc"),_=n("ct3O"),C=n("Hot+"),k=n("yTq1"),j=n("YLfZ"),$=n("J2Ti"),E=n("/Gvm"),R=n("Hglz");n.d(e,"a",function(){return _.a});var O,T=(O=p()(i.a.mark(function t(e){var n,r,o,a,u,d,l;return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n=Object(g.a)(),(r=Object($.a)()).$router=n,o=f()({router:n,store:r,nuxt:{defaultTransition:A,transitions:[A],setTransitions:function(t){return Array.isArray(t)||(t=[t]),t=t.map(function(t){return t=t?"string"==typeof t?c()({},A,{name:t}):c()({},A,t):A}),this.$options.nuxt.transitions=t,t},err:null,dateErr:null,error:function(t){t=t||null,o.context._errored=!!t,"string"==typeof t&&(t={statusCode:500,message:t});var n=this.nuxt||this.$options.nuxt;return n.dateErr=Date.now(),n.err=t,e&&(e.nuxt.error=t),t}}},k.a),r.app=o,a=e?e.next:function(t){return o.router.push(t)},u=void 0,e?u=n.resolve(e.url).route:(d=Object(j.d)(n.options.base),u=n.resolve(d).route),t.next=10,Object(j.m)(o,{route:u,next:a,error:o.nuxt.error.bind(o),store:r,payload:e?e.payload:void 0,req:e?e.req:void 0,res:e?e.res:void 0,beforeRenderFns:e?e.beforeRenderFns:void 0});case 10:if(l=function(t,e){if(!t)throw new Error("inject(key, value) has no key provided");if(!e)throw new Error("inject(key, value) has no value provided");o[t="$"+t]=e,r[t]=o[t];var n="__nuxt_"+t+"_installed__";m.default[n]||(m.default[n]=!0,m.default.use(function(){m.default.prototype.hasOwnProperty(t)||s()(m.default.prototype,t,{get:function(){return this.$root.$options[t]}})}))},window.__NUXT__&&window.__NUXT__.state&&r.replaceState(window.__NUXT__.state),"function"!=typeof E.default){t.next=15;break}return t.next=15,Object(E.default)(o.context,l);case 15:if("function"!=typeof R.default){t.next=18;break}return t.next=18,Object(R.default)(o.context,l);case 18:t.next=21;break;case 21:return t.abrupt("return",{app:o,router:n,store:r});case 22:case"end":return t.stop()}},t,this)})),function(t){return O.apply(this,arguments)});m.default.component(y.a.name,y.a),m.default.component(b.a.name,b.a),m.default.component(w.a.name,w.a),m.default.component(C.a.name,C.a),m.default.use(v.a,{keyName:"head",attribute:"data-n-head",ssrAttribute:"data-n-head-ssr",tagIDKeyName:"hid"});var A={name:"page",mode:"out-in",appear:!1,appearClass:"appear",appearActiveClass:"appear-active",appearToClass:"appear-to"}},sq1o:function(t,e){function n(t){throw new Error("Cannot find module '"+t+"'.")}n.keys=function(){return[]},n.resolve=n,t.exports=n,n.id="sq1o"},uJb7:function(t,e,n){(t.exports=n("FZ+f")(!1)).push([t.i,".__nuxt-error-page{padding:16px;padding:1rem;background:#f7f8fb;color:#47494e;text-align:center;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;font-family:sans-serif;font-weight:100!important;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;-webkit-font-smoothing:antialiased;position:absolute;top:0;left:0;right:0;bottom:0}.__nuxt-error-page .error{max-width:450px}.__nuxt-error-page .title{font-size:24px;font-size:1.5rem;margin-top:15px;color:#47494e;margin-bottom:8px}.__nuxt-error-page .description{color:#7f828b;line-height:21px;margin-bottom:10px}.__nuxt-error-page a{color:#7f828b!important;text-decoration:none}.__nuxt-error-page .logo{position:fixed;left:12px;bottom:12px}",""])},unZF:function(t,e,n){"use strict";var r=n("BO1k"),i=n.n(r),o=n("sq1o"),a=o.keys();function s(t){var e=o(t);return e.default?e.default:e}var u={},c=!0,d=!1,f=void 0;try{for(var l,p=i()(a);!(c=(l=p.next()).done);c=!0){var h=l.value;u[h.replace(/^\.\//,"").replace(/\.(js)$/,"")]=s(h)}}catch(t){d=!0,f=t}finally{try{!c&&p.return&&p.return()}finally{if(d)throw f}}e.a=u},uyLW:function(t,e){t.exports={blissr:"这是一个非常帅的公众号",title:"你的隐藏属性",summary:"这是一个非常非常非常非常非常非常非常非常非常非常有意思的测试",images:["http://dummyimage.com/300x200"],questions:[{index:1,title:"你的性别是?",image:"",selected:"0",selections:[{index:"1",option:"18cm纯爷们",image:""},{index:"2",option:"36E小公举",image:""},{index:"3",option:"看心情",image:""}]},{index:2,title:"你觉得自己的性格更像以下哪种动物？",image:"",selected:"0",selections:[{index:"1",option:"小野鸡",image:""},{index:"2",option:"小鸭几",image:""},{index:"3",option:"小胸许",image:""},{index:"4",option:"小乌堆",image:""}]},{index:3,title:"下列选项你最喜欢吸着吃的是：",selected:"0",image:"",selections:[{index:"1",option:"大大的果冻",image:""},{index:"2",option:"长长的冰棍",image:""},{index:"3",option:"粗粗的香肠",image:""},{index:"4",option:"别人的对象",image:""}]},{index:4,title:"如下对话的含义你是否理解？<br /> <br />男：昆？   女：帘！<br /> 男：哦？   女：否！",selected:"0",image:"",selections:[{index:"1",option:"体位",image:""},{index:"2",option:"脑筋急转弯",image:""},{index:"3",option:"猜字游戏",image:""}]},{index:5,title:"女朋友生日想要MAC，于是你应该送出以下哪个MAC，才能让她不生气",selected:"0",image:"",selections:[{index:"1",option:"",image:"q3.jpg"},{index:"2",option:"",image:"q4.jpg"}]},{index:6,title:"你们口中的神仙水是指如下这瓶",selected:"0",image:"q6.jpg",selections:[{index:"1",option:"必须的",image:""},{index:"2",option:"不是吧...",image:""}]},{index:7,title:"下列连线搭配全部正确",selected:"0",image:"q5.jpg",selections:[{index:"1",option:"天衣无缝",image:""},{index:"2",option:"感觉不太对，但又不知道哪里有问题",image:""}]},{index:8,title:"这只青蛙出自哪里",selected:"0",image:"q7.jpg",selections:[{index:"1",option:"青蛙制作人",image:""},{index:"2",option:"王子变青蛙",image:""},{index:"3",option:"旅行青蛙",image:""},{index:"4",option:"恋与青蛙",image:""}]},{index:9,title:"最后一题，你喜欢的人答应和你一起看电影，请问你会带身份证出门吗?",selected:"0",image:"",selections:[{index:"1",option:"时刻准备着，每次都带",image:""},{index:"2",option:"不会，电影票又不需要实名认证",image:""},{index:"3",option:"带不带都行，在电影院就可以",image:""}]}],answers:{boys:{b1:{title:"温顺服帖的小奶狗",image:"",desc:"温顺性格眼光却毒辣，挑东西会挑自己合适的，面对一些不合适自己的也改造成为适合自己的东西，每次啪啪的环境都力求完美和独特，对自己衷心的另一半既体贴又能水乳交融一起高潮迭起。"},b2:{title:"有劲儿使不完的小奶狗",image:"",desc:"所谓“锄禾日当午”正午是男女精力最旺盛的时候，燥热的正午是燃起你欲望的黄金时间，除此之外还有精力去探求未知世界，好奇心不断促使你开发新领域，永远渴望跟另一半挑战开发高难度技巧。"},b3:{title:"四蹄生风的小奶狗",image:"",desc:"你有稳健的身体，散发雄性满满的荷尔蒙气息，守护忠诚的代名词，但偶遇突发式的欲望高涨时，脚底便会四蹄生风，毫不腿软的奔向主题开始酣畅淋漓挥洒青春。"},b4:{title:"浪里琅珰的小狼狗",image:"",desc:"冷酷无情的冰上表情下欲火中烧。别人永远不可能猜到他们在想什么，喜欢一切极限事物，越是刺激，就越兴奋，就越想要去挑战一番，等到两人世界的时候会随时展示出霸道总裁的一面。"},b5:{title:"财大器粗的小狼狗",image:"",desc:"多金，颜正，气派不凡，器大活好不黏人，此犬类乃男友中的极品，众多女性择偶的第一标准，什么高学历都没啥卵用，拥有你才是人生赢家。"},b6:{title:"心思细腻小狼狗",image:"",desc:"你霸气，有魅力，在爱情中最懂得浪漫，记得每一个重要的日子，给自己的爱人更多的浪漫想像的机会，第一次一垒到三垒的纪念日，第一次不带TT的纪念日各种心细的记住，反转外表的冷酷霸道，温柔内心只为你展现。"},b7:{title:"人老心不老的老狗蛋",image:"",desc:"你成熟，有魅力，拥有能在某一领域呼风唤雨的能力，狂热的走在社会前端，引领潮流风向，不受限于自身年龄，亦能在各种高难体位上展示活力的犬叔。"},b8:{title:"身强力壮的老狗蛋",image:"",desc:"你坚持健身，肌肉发达，耐力到家，以次数为目标，每次都给对方非一般的体验！你最热衷于支配和征服爱人，绝对魅力十足，震慑一众！"},b9:{title:"内心戏足的老狗蛋",image:"",desc:"你是隐藏心事的高手，能够很好地掌控自己的思想，不费力地就能做到喜怒不形于色，经常暗暗锁定目标，只要你想征服的双峰，就没有失败的可能。"},b10:{title:"人老心不老的小野狗",image:"",desc:"提醒自己谨防脱发！早发现早治疗，大撸伤身小撸怡情，强撸灰飞烟灭，谨防不久的将来保温杯枸杞茶将成为你的标配，此驴叔年纪不轻但深自认为与小狼狗并无二般，呜呼！"},b11:{title:"生命不息，YY不止的老秃驴",image:"",desc:"你是岛国动作电影的忠实粉丝，观影年数已达到可领取养老金的级别，常年的经验累积导致头脑持续不断输出丰富素材以供歪歪娱乐，已不需要外部支持，坏处是冬天出门脑袋需防寒保暖。"},b12:{title:"天马行空的老秃驴",image:"",desc:"你的年纪和外部形象不能成为阻碍你展开自由思维的理由，延续了从青壮年就拥有的现象力，无时不刻都在思索，一会卧室，一会浴室，只有你做不到，没有你想不到，女性拥有这样的男友丝毫不用为一成不变的啪啪体验发愁，只怕会担心身体的亏空。"}},girls:{g1:{title:"内心浪荡的小奶猫",image:"",desc:"外表单纯，呆萌，内心狂野无边，白天夜晚两副决然不同的面孔，时刻挑战着对方的体力，让人欲罢不能。你外表单纯，呆萌，内心狂野无边，白天夜晚两副决然不同的面孔，时刻挑战着对方的体力，让人欲罢不能。"},g2:{title:"清纯逼人的小奶猫",image:"",desc:"你温婉粘人，好调教，拥有喵系女友中的极品身材，身体中的某个重要器官有着超出平均值的紧致和粉嫩，令其他喵友羡煞至极。"},g3:{title:"内心激荡的小奶猫",image:"",desc:"你单纯，年纪小，清澈如泉水的少女，但内心强大力令人震惊，小小身材亦能承载任何尺寸的勃然大物，拥有此喵系女友的他将会有如获至宝的体验。"},g4:{title:"身材婀娜的小野猫",image:"",desc:"你有天使面孔，魔鬼身材，天生拥有魅惑众生的能力，不知不觉中已让身边的异性陷入迷恋，百分百诠释完美身材对女性的重要，夜取之精华补阴柔所需，魅力越发旺盛。"},g5:{title:"戏精小野猫",image:"",desc:"颜值打败95%的普罗大众，任何都限制不了你超凡的想象力，教师，警察，角色切换自如，能带给对方心神的刺激和前所未有的体验，越刺激，越兴奋。"},g6:{title:"品味独特的小野猫",image:"",desc:"你拥有性感火辣的身材，丰乳翘臀是标配，有野性难驾驭，对角色扮演什么的完全嗤之以鼻，对时尚潮流的追求和独特品味也展现在情趣内衣的选择上，小众，有情调的穿搭总是能让对方欲望高涨。"},g7:{title:"四蹄生风的小胖橘猫",image:"",desc:"你可爱，单纯，肉感身材但不失魅力，是犬系小狼狗男生最爱的类型，活力满满不知疲倦，面对突如其来的性事会脚底生风，火速前往。"},g8:{title:"内心戏足的小胖橘猫",image:"",desc:"你单纯，有嘟嘟脸，喜爱粉嫩的颜色，大多已到中年少女的年纪，有时的理想型是白起和李泽言类型的男生，但有时又会喜爱成熟大叔的类型。"},g9:{title:"人老心不老的小胖橘猫",image:"",desc:"中年少女已被划为老人群体，但重点是我们还是少女！单纯，肉感身材，嘟嘟脸显嫩不显老，不需要玻尿酸填充的天然美颜，内心永远16岁，喜爱少女的一切，比自己小的犬系男友在xing事上最能达到水乳交融的高境界，建议开始留意身边的嫩草。"},g10:{title:"精力旺盛的猪猪女孩",image:"",desc:"你是90后中年少女，工作原因身材略微发福，稳重浓郁的熟女气息是低龄小奶狗所喜爱的姐姐类型，日常健身保养拥有绝好体质，最能与之水乳交融的另一半应是比自己小7岁的。"},g11:{title:"心思细腻的猪猪女孩",image:"",desc:"你善良但独立难驾驭，丰腴婀娜的身材处处散发女性魅力，对待比自己年龄小的弟弟通常都会耐心十足，但前提是弟弟需有美颜且身材好。"},g12:{title:"发量堪忧的猪猪女孩",image:"",desc:"你的身材丰腴体态优雅，事业和爱情通常只有一边丰收，白天辛勤工作，晚上在挥洒汗水，瑜伽，普拉提，私教健身，护肤美体样样不少。你的生活不仅有眼前的枸杞，还有保温杯和霸王防脱，丝毫不敢懈怠，生怕零零后大军抢夺小狼狗资源。"}}}}},vdRI:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n("NYxO"),i=n("QlVn"),o=n("AOsL"),a=n("eGmw");e.default=function(){return new r.default.Store({state:{answer:{},user:{}},getters:a.default,actions:i.default,mutations:o.default})}},yTq1:function(t,e,n){"use strict";var r=n("//Fk"),i=n.n(r),o=n("/5sW"),a=n("F88d"),s={_default:function(){return n.e(4).then(n.bind(null,"Ma2J")).then(function(t){return t.default||t})}},u={};e.a={head:{title:"blissr",meta:[{charset:"utf-8"},{name:"viewport",content:"width=device-width, initial-scale=1"},{hid:"description",name:"description",content:"Nuxt.js project"}],link:[{rel:"icon",type:"image/x-icon",href:"/favicon.ico"}],style:[],script:[]},render:function(t,e){var n=t("nuxt-loading",{ref:"loading"}),r=t(this.layout||"nuxt");return t("div",{domProps:{id:"__nuxt"}},[n,t("transition",{props:{name:"layout",mode:"out-in"}},[t("div",{domProps:{id:"__layout"},key:this.layoutName},[r])])])},data:function(){return{layout:null,layoutName:""}},beforeCreate:function(){o.default.util.defineReactive(this,"nuxt",this.$options.nuxt)},created:function(){o.default.prototype.$nuxt=this,"undefined"!=typeof window&&(window.$nuxt=this),this.error=this.nuxt.error},mounted:function(){this.$loading=this.$refs.loading},watch:{"nuxt.err":"errorChanged"},methods:{errorChanged:function(){this.nuxt.err&&this.$loading&&(this.$loading.fail&&this.$loading.fail(),this.$loading.finish&&this.$loading.finish())},setLayout:function(t){t&&u["_"+t]||(t="default"),this.layoutName=t;var e="_"+t;return this.layout=u[e],this.layout},loadLayout:function(t){var e=this;t&&(s["_"+t]||u["_"+t])||(t="default");var n="_"+t;return u[n]?i.a.resolve(u[n]):s[n]().then(function(t){return u[n]=t,delete s[n],u[n]}).catch(function(t){if(e.$nuxt)return e.$nuxt.error({statusCode:500,message:t.message})})}},components:{NuxtLoading:a.a}}}},["T23V"]);