(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-363e98c1"],{"09e7":function(t,e,a){t.exports=a.p+"img/moon.8967836e.png"},"0e70":function(t,e,a){t.exports=a.p+"img/check1.1123636e.png"},"159b":function(t,e,a){var n=a("da84"),i=a("fdbc"),r=a("17c2"),s=a("9112");for(var o in i){var c=n[o],f=c&&c.prototype;if(f&&f.forEach!==r)try{s(f,"forEach",r)}catch(u){f.forEach=r}}},"17c2":function(t,e,a){"use strict";var n=a("b727").forEach,i=a("a640"),r=a("ae40"),s=i("forEach"),o=r("forEach");t.exports=s&&o?[].forEach:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}},"1bab":function(t,e,a){"use strict";var n=a("bc3a"),i=a.n(n),r=i.a.create({baseURL:"https://afbx35.fn.thelarkcloud.com",timeout:5e3});r.interceptors.request.use((function(t){return t}),(function(t){throw t})),r.interceptors.response.use((function(t){return t.data}),(function(t){throw t})),e["a"]=r},"1dde":function(t,e,a){var n=a("d039"),i=a("b622"),r=a("2d00"),s=i("species");t.exports=function(t){return r>=51||!n((function(){var e=[],a=e.constructor={};return a[s]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},2271:function(t,e,a){t.exports=a.p+"img/sheriff.b6992341.png"},"260c":function(t,e,a){t.exports=a.p+"img/witch.bb36f883.jpg"},"3f4e":function(t,e,a){"use strict";a.d(e,"b",(function(){return i})),a.d(e,"c",(function(){return r})),a.d(e,"a",(function(){return s}));a("99af"),a("4160"),a("fb6a"),a("b64b"),a("159b");var n=a("1bab");function i(t){var e="";return Object.keys(t).forEach((function(a){e+="".concat(a,"=").concat(t[a],"&")})),e=e.slice(0,e.length-1),console.log("https://afbx35.fn.thelarkcloud.com/player_allStatus?".concat(e)),Object(n["a"])({url:"https://afbx35.fn.thelarkcloud.com/player_allStatus?".concat(e)})}var r=function(t,e){return n["a"].get("/player_start?room=".concat(t,"&name=").concat(e))},s=function(t){return n["a"].get("/game_allAtatus??room=".concat(t))}},4160:function(t,e,a){"use strict";var n=a("23e7"),i=a("17c2");n({target:"Array",proto:!0,forced:[].forEach!=i},{forEach:i})},"441f":function(t,e,a){t.exports=a.p+"img/villager.efee4916.jpg"},"5a50":function(t,e,a){"use strict";a.d(e,"d",(function(){return n})),a.d(e,"a",(function(){return i})),a.d(e,"c",(function(){return r})),a.d(e,"b",(function(){return s}));var n={ACIENT:"acient",HUNTER:"hunter",IDIOT:"idiot",SAVIOR:"savior",SEER:"seer",SHERIFF:"sheriff",VILLAGER:"villager",WEREWOLF:"werewolf",WITCH:"witch"},i=["sheriff","cured","poisoned","killed","voted"],r=[{god:1,wolf:2,seer:0,witch:1,hunter:0,savior:0,idiot:0,villager:3},{god:1,wolf:2,seer:0,witch:1,hunter:0,savior:0,idiot:0,villager:4},{god:1,wolf:3,seer:1,witch:1,hunter:1,savior:0,idiot:0,villager:2}],s={hunter:"猎人",idiot:"愚人",savior:"救世主",seer:"预言家",sheriff:"警长",villager:"村民",werewolf:"狼人",witch:"女巫"}},"766e":function(t,e,a){t.exports=a.p+"img/refresh.8b6560a7.png"},8418:function(t,e,a){"use strict";var n=a("c04e"),i=a("9bf2"),r=a("5c6c");t.exports=function(t,e,a){var s=n(e);s in t?i.f(t,s,r(0,a)):t[s]=a}},"88bb":function(t,e,a){t.exports=a.p+"img/savior.f09113b1.jpg"},"89ad":function(t,e,a){t.exports=a.p+"img/hunter.e18b3143.jpg"},"97df":function(t,e,a){t.exports=a.p+"img/idiot.333807e0.jpg"},"99af":function(t,e,a){"use strict";var n=a("23e7"),i=a("d039"),r=a("e8b5"),s=a("861d"),o=a("7b0b"),c=a("50c4"),f=a("8418"),u=a("65f0"),l=a("1dde"),d=a("b622"),p=a("2d00"),h=d("isConcatSpreadable"),v=9007199254740991,g="Maximum allowed index exceeded",b=p>=51||!i((function(){var t=[];return t[h]=!1,t.concat()[0]!==t})),m=l("concat"),S=function(t){if(!s(t))return!1;var e=t[h];return void 0!==e?!!e:r(t)},w=!b||!m;n({target:"Array",proto:!0,forced:w},{concat:function(t){var e,a,n,i,r,s=o(this),l=u(s,0),d=0;for(e=-1,n=arguments.length;e<n;e++)if(r=-1===e?s:arguments[e],S(r)){if(i=c(r.length),d+i>v)throw TypeError(g);for(a=0;a<i;a++,d++)a in r&&f(l,d,r[a])}else{if(d>=v)throw TypeError(g);f(l,d++,r)}return l.length=d,l}})},"9d94":function(t,e,a){t.exports=a.p+"img/seer.a44bfbf3.jpg"},a0e7:function(t,e,a){t.exports=a.p+"img/alive.67167024.png"},a640:function(t,e,a){"use strict";var n=a("d039");t.exports=function(t,e){var a=[][t];return!!a&&n((function(){a.call(null,e||function(){throw 1},1)}))}},ae40:function(t,e,a){var n=a("83ab"),i=a("d039"),r=a("5135"),s=Object.defineProperty,o={},c=function(t){throw t};t.exports=function(t,e){if(r(o,t))return o[t];e||(e={});var a=[][t],f=!!r(e,"ACCESSORS")&&e.ACCESSORS,u=r(e,0)?e[0]:c,l=r(e,1)?e[1]:void 0;return o[t]=!!a&&!i((function(){if(f&&!n)return!0;var t={length:-1};f?s(t,1,{enumerable:!0,get:c}):t[1]=1,a.call(t,u,l)}))}},b0a6:function(t,e,a){"use strict";var n=a("c98c"),i=a.n(n);i.a},b4f0:function(t,e,a){},b538:function(t,e,a){t.exports=a.p+"img/default.295763d1.jpg"},b64b:function(t,e,a){var n=a("23e7"),i=a("7b0b"),r=a("df75"),s=a("d039"),o=s((function(){r(1)}));n({target:"Object",stat:!0,forced:o},{keys:function(t){return r(i(t))}})},c6c8:function(t,e,a){"use strict";var n=a("b4f0"),i=a.n(n);i.a},c98c:function(t,e,a){},cad1:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAEoElEQVRoQ9VZXUhlVRT+1kWEXoYC9UnY6zyI0hSWDVRjGYa9ysxDP1QjI1kPglgxNipCE4haDk0i+FCGg/3Qz0ODr0mS5VQwWVITig9nH/BJhcKXAbncFftylbm6z8++5yrOgv1yzlrfWt9eZ629zjmEe1yoXPFvbGzUZrPZZ4jojIgwgL1lXGiziEiLyK2Kioofa2trN8rhOxWBIAgezOVyXUR0FsDjjgH9JiI3M5nMtFLqH0fbffWSCKyvr5+qqKh4m4jeAnCqVOcFux0RuZbNZj+sq6vbccVyJuD7/sVMJnNJRE67OovSJ6LbuVzuqud5111wnQgEQTAjIhddHLjqEtF1pVRnUrvEBLTWfqEwk2Kn0dPM7CUBSERAa30LwGNJAMuo8zszn4nDiyXg+34/EY3GAR3FfREZ8DxvLLJ2om5qrV8G8MVRBOeA+QozfxmmH5oB0yorKytvlrvbOASeVzXdaXd392xYiw0l4Pv+FSJ619XhUeiLyHue512xYVsJmBNWRH4pwyFVLj47RPSk7cQOI3BNRN4sl/dy4BDRR0opc/IXiZWA1voPAI+Uw3EZMf5k5kdjCfi+z0RkDq0TJyLieZ5nJtt9OZQBM+sQ0cyJix6AiHQenJUOEQiC4MQ9/3ubaauDQwS01t8BOBeVgZWVFZi1urqaV2toaEBjY2N+JZEU9jeY+XzkIxRXwHNzczDLJu3t7TArSlLaHypkWwb+BXC/LQitNYaHhyMDHBoaArN5mzwsae0B/MfMD8RlYAtAlS2AmZkZLC0tRRJobm5GZ6d9nE9rD2CbmavjCPwE4ClblP39/dje3o4kUFVVhbEx+wCZ1h7Az8z8dCSBIAg+FpHXbVEODg5ic3MzkkBNTQ1GRkasOmntiegTpdQbcQQui4h1C2dnZ7G4uBhJoKWlBR0dHVadtPZE1K+Uej+OwPMi8o0tAtP+JicnIwn09PSEttO09kT0glLq27gaMO+itwHcZ4s0ZRvMt+AS2/AdAKeZuWjMCRvmPgPwathWm3a4sLCAtbW1vEp9fT1aW1tD2+dBnBLtP2fmCwexrAR83z9HROZEPjEiIuc9z7uRiIBR0lr/BeChNAwmJiby5r29vWlgjO3fzPywDeTIXimXl5cxNTWV99nd3Y2mpqaSSTi/Uu550lp/D6DN1fPW1hYGBgaKzEZHR1FdXXSIJoWdZ+bnwpQjvwv5vv8EEf0Q1pHCQM3OmwzcLSYDJhOOckdEnvU879eSCBRq4RKAcRfH4+Pj+x1qz850qr6+PhcYo9vHzFejjGK/zBnjIAi+EpEXXb2n0Seir5VSL8VhJCJQIHFsb2phXyCcupBNOQiCd0SkaBaJ2yHX+0R0WSn1QVK7xBnYAwyC4IKIzCZ14KJHRB1KKTMFJBZnAoXClrs9mKLNV9yBInW9zszO8Tgb2Ah0dXXlCUxPTxftnOv1YyPQ1tZWlIHE+Y5RnJ+fd95QZwMTwz1PQGtdlAHXRyVM/9geoYMEXIs1TP84CRzFH8vEfybvLqWSauAo/t5EjcypZyEbQIHEawBqU3ahDRH5NOwXUhx2SRmIAz3O+/8DF+IOT8HOouUAAAAASUVORK5CYII="},df71:function(t,e,a){t.exports=a.p+"img/werewolf.b51e6b34.jpg"},e998:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"player-index"},[n("div",{staticClass:"title"},[t.timeSelection()?n("img",{attrs:{src:a("09e7"),width:"35px"}}):n("img",{attrs:{src:a("fd4e"),width:"35px"}}),n("span",[t._v("第"+t._s(t.state.allStatus.data.day)+"天 "+t._s(t.state.timeInfo[t.state.allStatus.data.time])+" ")])]),n("div",{staticClass:"list-wrapper"},t._l(t.state.allStatus.data.players,(function(t){return n("PlayerShow",{key:t.name,attrs:{name:t.name,status:t.status,isSheriff:t.isSheriff}})})),1),n("div",{staticClass:"selfInfo"},[n("div",[n("img",{attrs:{src:t.imgList[t.state.allStatus.data.self.role],alt:"",width:"70"}}),n("p",[t._v(t._s(t.state.allStatus.data.self.name))])]),n("div",[n("ul",[n("li",[t._v("身份："+t._s(t.roleName[t.state.allStatus.data.self.role]))]),n("li",[t._v("状态："+t._s(t.stateName[t.state.allStatus.data.self.status]))]),n("li",[t._v("是否为警长： "),t.state.allStatus.data.self.isSheriff?n("span",[t._v("是")]):n("span",[t._v("否")])])])])]),n("div",{staticClass:"btn-wrapper"},[n("button",{staticClass:"end-btn",on:{click:t.getInfo}},[n("img",{attrs:{src:t.icon.refresh,width:"20px",height:"20px"}}),n("span",[t._v("刷新状态")])]),n("button",{staticClass:"end-btn",on:{click:t.getResult}},[n("img",{attrs:{src:t.icon.check,width:"20px",height:"20px"}}),n("span",[t._v("查看结果")])])])])},i=[],r=a("a6f4"),s=a("3f4e"),o=a("5a50"),c=a("52ec"),f=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"list-item"},[a("div",{staticClass:"player"},[a("img",{staticClass:"avatar",attrs:{src:t.avatarDefault}}),a("div",[a("div",{staticClass:"name"},[t._v(t._s(t.name))])])]),a("div",{staticClass:"wrapper"},t._l(t.statusMap,(function(e,n){return a("div",{key:e,staticClass:"status"},[a("img",{staticClass:"icon",attrs:{src:t.icon[n]}}),a("span",{class:{curSheriff:t.isSheriff&&"isSheriff"===n,curStatus:t.status===n}},[t._v(" "+t._s(e)+" ")])])})),0)])},u=[],l=a("cad1"),d=a.n(l),p=a("2271"),h=a.n(p),v=a("a0e7"),g=a.n(v),b=a("b538"),m=a.n(b),S={alive:g.a,dead:d.a,isSheriff:h.a},w={isSheriff:"警长",dead:"死亡",alive:"存活"},A={name:"PlayerShow",props:{name:String,status:String,isSheriff:Boolean},data:function(){return{avatarDefault:m.a}},setup:function(){var t=Object(c["a"])(),e=t.currentRoute;return console.log(e),{statusMap:w,icon:S}}},y=A,E=(a("c6c8"),a("2877")),C=Object(E["a"])(y,f,u,!1,null,"53028bf0",null),R=C.exports,x=a("0e70"),L=a.n(x),O=a("766e"),j=a.n(O),I=a("89ad"),V=a.n(I),k=a("441f"),B=a.n(k),T=a("97df"),H=a.n(T),M=a("88bb"),z=a.n(M),P=a("9d94"),D=a.n(P),Z=a("df71"),J=a.n(Z),N=a("260c"),Q=a.n(N),X={hunter:V.a,villager:B.a,idiot:H.a,savior:z.a,seer:D.a,werewolf:J.a,witch:Q.a},_={voted:"踢出",killed:"死亡",alive:"存活"},W={name:"",components:{PlayerShow:R},data:function(){return{}},setup:function(){var t=Object(c["a"])(),e=Object(r["f"])({allStatus:{state:200,data:{players:[{name:"aaa",status:"alive",isSheriff:!0},{name:"bbb",status:"voted",isSheriff:!1},{name:"ccc",status:"alive",isSheriff:!1},{name:"ddd",status:"killed",isSheriff:!1},{name:"eee",status:"alive",isSheriff:!1},{name:"fff",status:"alive",isSheriff:!1},{name:"ggg",status:"alive",isSheriff:!1}],self:{name:"ccc",status:"alive",isSheriff:!1,role:"witch"},time:"daylight",day:1}},param:{},timeInfo:{night:"夜晚",daylight:"白天"}});function a(){Object(s["b"])(e.param).then((function(t){e.allStatus=t})).catch((function(t){return console.log(t)}))}function n(){this.$router.push({path:"/result",query:{room:e.param.room}})}function i(){return"night"===e.allStatus.data.time}return Object(r["d"])((function(){var n=t.currentRoute.query;e.param=n,a()})),{state:e,icon:{check:L.a,refresh:j.a},getStatus:s["b"],getResult:n,getInfo:a,timeSelection:i,roleName:o["b"],imgList:X,stateName:_}}},F=W,U=(a("b0a6"),Object(E["a"])(F,n,i,!1,null,"27473867",null));e["default"]=U.exports},fb6a:function(t,e,a){"use strict";var n=a("23e7"),i=a("861d"),r=a("e8b5"),s=a("23cb"),o=a("50c4"),c=a("fc6a"),f=a("8418"),u=a("b622"),l=a("1dde"),d=a("ae40"),p=l("slice"),h=d("slice",{ACCESSORS:!0,0:0,1:2}),v=u("species"),g=[].slice,b=Math.max;n({target:"Array",proto:!0,forced:!p||!h},{slice:function(t,e){var a,n,u,l=c(this),d=o(l.length),p=s(t,d),h=s(void 0===e?d:e,d);if(r(l)&&(a=l.constructor,"function"!=typeof a||a!==Array&&!r(a.prototype)?i(a)&&(a=a[v],null===a&&(a=void 0)):a=void 0,a===Array||void 0===a))return g.call(l,p,h);for(n=new(void 0===a?Array:a)(b(h-p,0)),u=0;p<h;p++,u++)p in l&&f(n,u,l[p]);return n.length=u,n}})},fd4e:function(t,e,a){t.exports=a.p+"img/sun.87df6b48.png"},fdbc:function(t,e){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}}}]);
//# sourceMappingURL=chunk-363e98c1.974ba01b.js.map