(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a5b76dca"],{"159b":function(t,r,e){var n=e("da84"),o=e("fdbc"),i=e("17c2"),a=e("9112");for(var c in o){var u=n[c],s=u&&u.prototype;if(s&&s.forEach!==i)try{a(s,"forEach",i)}catch(f){s.forEach=i}}},"17c2":function(t,r,e){"use strict";var n=e("b727").forEach,o=e("a640"),i=e("ae40"),a=o("forEach"),c=i("forEach");t.exports=a&&c?[].forEach:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}},"1bab":function(t,r,e){"use strict";var n=e("bc3a"),o=e.n(n),i=o.a.create({baseURL:"https://afbx35.fn.thelarkcloud.com",timeout:5e3});i.interceptors.request.use((function(t){return t}),(function(t){throw t})),i.interceptors.response.use((function(t){return t.data}),(function(t){throw t})),r["a"]=i},"1da1":function(t,r,e){"use strict";e.d(r,"a",(function(){return o}));e("d3b7");function n(t,r,e,n,o,i,a){try{var c=t[i](a),u=c.value}catch(s){return void e(s)}c.done?r(u):Promise.resolve(u).then(n,o)}function o(t){return function(){var r=this,e=arguments;return new Promise((function(o,i){var a=t.apply(r,e);function c(t){n(a,o,i,c,u,"next",t)}function u(t){n(a,o,i,c,u,"throw",t)}c(void 0)}))}}},"1dde":function(t,r,e){var n=e("d039"),o=e("b622"),i=e("2d00"),a=o("species");t.exports=function(t){return i>=51||!n((function(){var r=[],e=r.constructor={};return e[a]=function(){return{foo:1}},1!==r[t](Boolean).foo}))}},"3f4e":function(t,r,e){"use strict";e.d(r,"b",(function(){return o})),e.d(r,"c",(function(){return i})),e.d(r,"a",(function(){return a}));e("99af"),e("4160"),e("fb6a"),e("b64b"),e("159b");var n=e("1bab");function o(t){var r="";return Object.keys(t).forEach((function(e){r+="".concat(e,"=").concat(t[e],"&")})),r=r.slice(0,r.length-1),console.log("https://afbx35.fn.thelarkcloud.com/player_allStatus?".concat(r)),Object(n["a"])({url:"https://afbx35.fn.thelarkcloud.com/player_allStatus?".concat(r)})}var i=function(t,r){return n["a"].get("/player_start?room=".concat(t,"&name=").concat(r))},a=function(t){return n["a"].get("/game_allAtatus??room=".concat(t))}},4160:function(t,r,e){"use strict";var n=e("23e7"),o=e("17c2");n({target:"Array",proto:!0,forced:[].forEach!=o},{forEach:o})},"5a50":function(t,r,e){"use strict";e.d(r,"d",(function(){return n})),e.d(r,"a",(function(){return o})),e.d(r,"c",(function(){return i})),e.d(r,"b",(function(){return a}));var n={ACIENT:"acient",HUNTER:"hunter",IDIOT:"idiot",SAVIOR:"savior",SEER:"seer",SHERIFF:"sheriff",VILLAGER:"villager",WEREWOLF:"werewolf",WITCH:"witch"},o=["sheriff","cured","poisoned","killed","voted"],i=[{god:1,wolf:2,seer:0,witch:1,hunter:0,savior:0,idiot:0,villager:3},{god:1,wolf:2,seer:0,witch:1,hunter:0,savior:0,idiot:0,villager:4},{god:1,wolf:3,seer:1,witch:1,hunter:1,savior:0,idiot:0,villager:2}],a={hunter:"猎人",idiot:"愚人",savior:"救世主",seer:"预言家",sheriff:"警长",villager:"村民",werewolf:"狼人",witch:"女巫"}},8418:function(t,r,e){"use strict";var n=e("c04e"),o=e("9bf2"),i=e("5c6c");t.exports=function(t,r,e){var a=n(r);a in t?o.f(t,a,i(0,e)):t[a]=e}},"96cf":function(t,r,e){var n=function(t){"use strict";var r,e=Object.prototype,n=e.hasOwnProperty,o="function"===typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(t,r,e,n){var o=r&&r.prototype instanceof p?r:p,i=Object.create(o.prototype),a=new C(n||[]);return i._invoke=_(t,e,a),i}function s(t,r,e){try{return{type:"normal",arg:t.call(r,e)}}catch(n){return{type:"throw",arg:n}}}t.wrap=u;var f="suspendedStart",l="suspendedYield",h="executing",d="completed",v={};function p(){}function y(){}function g(){}var w={};w[i]=function(){return this};var m=Object.getPrototypeOf,b=m&&m(m(T([])));b&&b!==e&&n.call(b,i)&&(w=b);var L=g.prototype=p.prototype=Object.create(w);function x(t){["next","throw","return"].forEach((function(r){t[r]=function(t){return this._invoke(r,t)}}))}function E(t,r){function e(o,i,a,c){var u=s(t[o],t,i);if("throw"!==u.type){var f=u.arg,l=f.value;return l&&"object"===typeof l&&n.call(l,"__await")?r.resolve(l.__await).then((function(t){e("next",t,a,c)}),(function(t){e("throw",t,a,c)})):r.resolve(l).then((function(t){f.value=t,a(f)}),(function(t){return e("throw",t,a,c)}))}c(u.arg)}var o;function i(t,n){function i(){return new r((function(r,o){e(t,n,r,o)}))}return o=o?o.then(i,i):i()}this._invoke=i}function _(t,r,e){var n=f;return function(o,i){if(n===h)throw new Error("Generator is already running");if(n===d){if("throw"===o)throw i;return R()}e.method=o,e.arg=i;while(1){var a=e.delegate;if(a){var c=S(a,e);if(c){if(c===v)continue;return c}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if(n===f)throw n=d,e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);n=h;var u=s(t,r,e);if("normal"===u.type){if(n=e.done?d:l,u.arg===v)continue;return{value:u.arg,done:e.done}}"throw"===u.type&&(n=d,e.method="throw",e.arg=u.arg)}}}function S(t,e){var n=t.iterator[e.method];if(n===r){if(e.delegate=null,"throw"===e.method){if(t.iterator["return"]&&(e.method="return",e.arg=r,S(t,e),"throw"===e.method))return v;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var o=s(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,v;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=r),e.delegate=null,v):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,v)}function k(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function O(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function C(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(k,this),this.reset(!0)}function T(t){if(t){var e=t[i];if(e)return e.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function e(){while(++o<t.length)if(n.call(t,o))return e.value=t[o],e.done=!1,e;return e.value=r,e.done=!0,e};return a.next=a}}return{next:R}}function R(){return{value:r,done:!0}}return y.prototype=L.constructor=g,g.constructor=y,g[c]=y.displayName="GeneratorFunction",t.isGeneratorFunction=function(t){var r="function"===typeof t&&t.constructor;return!!r&&(r===y||"GeneratorFunction"===(r.displayName||r.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,c in t||(t[c]="GeneratorFunction")),t.prototype=Object.create(L),t},t.awrap=function(t){return{__await:t}},x(E.prototype),E.prototype[a]=function(){return this},t.AsyncIterator=E,t.async=function(r,e,n,o,i){void 0===i&&(i=Promise);var a=new E(u(r,e,n,o),i);return t.isGeneratorFunction(e)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},x(L),L[c]="Generator",L[i]=function(){return this},L.toString=function(){return"[object Generator]"},t.keys=function(t){var r=[];for(var e in t)r.push(e);return r.reverse(),function e(){while(r.length){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},t.values=T,C.prototype={constructor:C,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(O),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=r)},stop:function(){this.done=!0;var t=this.tryEntries[0],r=t.completion;if("throw"===r.type)throw r.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function o(n,o){return c.type="throw",c.arg=t,e.next=n,o&&(e.method="next",e.arg=r),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=n.call(a,"catchLoc"),s=n.call(a,"finallyLoc");if(u&&s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,r){for(var e=this.tryEntries.length-1;e>=0;--e){var o=this.tryEntries[e];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=r&&r<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=r,i?(this.method="next",this.next=i.finallyLoc,v):this.complete(a)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),v},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),O(e),v}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc===t){var n=e.completion;if("throw"===n.type){var o=n.arg;O(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:T(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=r),v}},t}(t.exports);try{regeneratorRuntime=n}catch(o){Function("r","regeneratorRuntime = r")(n)}},"99af":function(t,r,e){"use strict";var n=e("23e7"),o=e("d039"),i=e("e8b5"),a=e("861d"),c=e("7b0b"),u=e("50c4"),s=e("8418"),f=e("65f0"),l=e("1dde"),h=e("b622"),d=e("2d00"),v=h("isConcatSpreadable"),p=9007199254740991,y="Maximum allowed index exceeded",g=d>=51||!o((function(){var t=[];return t[v]=!1,t.concat()[0]!==t})),w=l("concat"),m=function(t){if(!a(t))return!1;var r=t[v];return void 0!==r?!!r:i(t)},b=!g||!w;n({target:"Array",proto:!0,forced:b},{concat:function(t){var r,e,n,o,i,a=c(this),l=f(a,0),h=0;for(r=-1,n=arguments.length;r<n;r++)if(i=-1===r?a:arguments[r],m(i)){if(o=u(i.length),h+o>p)throw TypeError(y);for(e=0;e<o;e++,h++)e in i&&s(l,h,i[e])}else{if(h>=p)throw TypeError(y);s(l,h++,i)}return l.length=h,l}})},a640:function(t,r,e){"use strict";var n=e("d039");t.exports=function(t,r){var e=[][t];return!!e&&n((function(){e.call(null,r||function(){throw 1},1)}))}},ae40:function(t,r,e){var n=e("83ab"),o=e("d039"),i=e("5135"),a=Object.defineProperty,c={},u=function(t){throw t};t.exports=function(t,r){if(i(c,t))return c[t];r||(r={});var e=[][t],s=!!i(r,"ACCESSORS")&&r.ACCESSORS,f=i(r,0)?r[0]:u,l=i(r,1)?r[1]:void 0;return c[t]=!!e&&!o((function(){if(s&&!n)return!0;var t={length:-1};s?a(t,1,{enumerable:!0,get:u}):t[1]=1,e.call(t,f,l)}))}},b3f9:function(t,r,e){},b64b:function(t,r,e){var n=e("23e7"),o=e("7b0b"),i=e("df75"),a=e("d039"),c=a((function(){i(1)}));n({target:"Object",stat:!0,forced:c},{keys:function(t){return i(o(t))}})},e95e:function(t,r,e){"use strict";var n=e("b3f9"),o=e.n(n);o.a},eeac:function(t,r,e){"use strict";e.r(r);var n=function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",{staticClass:"wrapper"},[e("div",{staticClass:"title"},[t._v(t._s("werewolf"===t.state.data.winner?"狼人":"平民")+"胜利")]),e("div",{staticClass:"result-lists"},[e("ul",[e("li",t._l(t.titles,(function(r,n){return e("a",{key:n,staticClass:"list-header"},[t._v(t._s(r))])})),0)]),e("ul",t._l(t.state.data.players,(function(r,n){return e("li",{key:n},[e("a",[t._v(t._s(r.name))]),e("a",[t._v(t._s(t.roleName[r.role]))]),e("a",{style:{color:"alive"===r.status?"lightgreen":"grey"}},[t._v(" "+t._s("alive"===r.status?"存活":"死亡")+" ")]),e("a",[t._v(t._s(r.killedAt))]),e("a",[t._v(t._s("__nobody"===r.killedBy?"-":"__vote"===r.killedBy?"票死":r.killedBy))]),e("a",[t._v(t._s(r.points))])])})),0)]),e("div",{staticClass:"btns-wrapper",on:{click:t.handleButtonClick}},[e("div",{staticClass:"btn",attrs:{"data-index":"0"}},[t._v("积分榜")]),e("div",{staticClass:"btn",attrs:{"data-index":"1"}},[t._v("返回主页")]),e("div",{staticClass:"btn",attrs:{"data-index":"2"}},[t._v("再来一局")])])])},o=[],i=(e("96cf"),e("1da1")),a=e("a6f4"),c=e("52ec"),u=e("3f4e"),s=e("5a50"),f=["姓名","角色","状态","天数","死因","胜场数"],l={name:"Result",components:{},setup:function(){var t=Object(a["f"])({data:""}),r=Object(c["a"])(),e=r.currentRoute,n=function(t,e){r.push({path:t,query:e})},o=function(){var r=Object(i["a"])(regeneratorRuntime.mark((function r(){var n,o;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,u["a"](e.query.room);case 2:n=r.sent,o=n.data,t.data=o;case 5:case"end":return r.stop()}}),r)})));return function(){return r.apply(this,arguments)}}();Object(a["d"])((function(){o()}));var l=function(t){var r=t.target.dataset.index;n(0===+r?"/topPlayers":1===+r?"/home":"/player/login")};return{state:t,roleName:s["b"],titles:f,handleButtonClick:l}}},h=l,d=(e("e95e"),e("2877")),v=Object(d["a"])(h,n,o,!1,null,"616071c4",null);r["default"]=v.exports},fb6a:function(t,r,e){"use strict";var n=e("23e7"),o=e("861d"),i=e("e8b5"),a=e("23cb"),c=e("50c4"),u=e("fc6a"),s=e("8418"),f=e("b622"),l=e("1dde"),h=e("ae40"),d=l("slice"),v=h("slice",{ACCESSORS:!0,0:0,1:2}),p=f("species"),y=[].slice,g=Math.max;n({target:"Array",proto:!0,forced:!d||!v},{slice:function(t,r){var e,n,f,l=u(this),h=c(l.length),d=a(t,h),v=a(void 0===r?h:r,h);if(i(l)&&(e=l.constructor,"function"!=typeof e||e!==Array&&!i(e.prototype)?o(e)&&(e=e[p],null===e&&(e=void 0)):e=void 0,e===Array||void 0===e))return y.call(l,d,v);for(n=new(void 0===e?Array:e)(g(v-d,0)),f=0;d<v;d++,f++)d in l&&s(n,f,l[d]);return n.length=f,n}})},fdbc:function(t,r){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}}}]);
//# sourceMappingURL=chunk-a5b76dca.0e545044.js.map