(function(){"use strict";var t={4867:function(t,n,e){var a=e(9242),r=e(3396);const o={class:"navbar navbar-expand-lg bg-body-tertiary"},i={class:"container-fluid"},l=(0,r._)("a",{class:"navbar-brand",href:"#"},"Navbar",-1),s=(0,r._)("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"},[(0,r._)("span",{class:"navbar-toggler-icon"})],-1),u={class:"collapse navbar-collapse",id:"navbarNav"},c={class:"navbar-nav"},p={class:"nav-item"},d={class:"nav-link active","aria-current":"page"},v={class:"nav-item"},f={class:"nav-link"},b={class:"nav-item"},h={class:"nav-link"},m=(0,r._)("li",{class:"nav-item"},[(0,r._)("a",{class:"nav-link disabled","aria-disabled":"true"},"Disabled")],-1),g={class:"mb-4"};function _(t,n,e,a,_,w){const y=(0,r.up)("router-link"),O=(0,r.up)("router-view");return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r._)("nav",o,[(0,r._)("div",i,[l,s,(0,r._)("div",u,[(0,r._)("ul",c,[(0,r._)("li",p,[(0,r._)("a",d,[(0,r.Wm)(y,{to:"/"},{default:(0,r.w5)((()=>[(0,r.Uk)("Home")])),_:1})])]),(0,r._)("li",v,[(0,r._)("a",f,[(0,r.Wm)(y,{to:"/list"},{default:(0,r.w5)((()=>[(0,r.Uk)("List")])),_:1})])]),(0,r._)("li",b,[(0,r._)("a",h,[(0,r.Wm)(y,{to:"/detail"},{default:(0,r.w5)((()=>[(0,r.Uk)("Detail")])),_:1})])]),m])])])]),(0,r._)("div",g,[(0,r.Wm)(O,{onStepUp:n[0]||(n[0]=t=>_.idx++),data:_.data,step:_.idx},null,8,["data","step"])])],64)}e(7658);var w=[{title:"첫 째 프로젝트 : 허위매물 전문 부동산 앱",content:"Vue를 이용하면 비누같이 매끈한 앱을 만들 수 있습니다",date:"September 24, 2021",number:0},{title:"둘 째 프로젝트 : 오마카세 배달 앱",content:"음식이 아니라 셰프를 직접 배달해드립니다",date:"October 20, 2020",number:1},{title:"셋 째 프로젝트 : 현피 앱",content:"거리를 설정하면 가장 가까운 파이터를 소개해드려요! 서로 싸워보세요",date:"April 24, 2019",number:2}],y={name:"App",components:{},data(){return{data:w,idx:0}},watch:{$route(t){console.log(Object.keys(t.query).length),0==Object.keys(t.query).length?(this.$router.push("list"),this.idx=0):this.idx=t.query.step}}},O=e(89);const k=(0,O.Z)(y,[["render",_]]);var j=k,x=(e(2166),e(2483)),D=e(7139);function U(t,n,e,a,o,i){return(0,r.wg)(),(0,r.iD)("div",null,[(0,r._)("h5",{onClick:n[0]||(n[0]=n=>t.$router.push("/detail/"+e.step))},(0,D.zw)(e.data[e.step].title),1),(0,r._)("p",null,(0,D.zw)(e.data[e.step].date),1),(0,r._)("button",{onClick:n[1]||(n[1]=(...t)=>i.stepUp&&i.stepUp(...t))},"다음 프로젝트 목록 보기")])}var S={name:"List",props:{data:Object,step:Number},methods:{stepUp(){if(this.step>1)return!1;this.$emit("stepUp")}},watch:{step(){0==this.step?console.log("return"):this.$router.push("list?step="+this.step)}}};const $=(0,O.Z)(S,[["render",U]]);var Z=$;const N=(0,r._)("h5",null,"개발자 블로그 입니다.",-1),P=(0,r._)("p",null," vue 로 만듬",-1),T=[N,P];function W(t,n,e,a,o,i){return(0,r.wg)(),(0,r.iD)("div",null,T)}var z={name:"Home",props:{}};const C=(0,O.Z)(z,[["render",W]]);var H=C;const q=(0,r._)("h4",null,"디테일 페이지입니다.",-1),M={class:"mt-4"};function A(t,n,e,a,o,i){const l=(0,r.up)("router-view");return(0,r.wg)(),(0,r.iD)(r.HY,null,[q,(0,r._)("div",M,[(0,r._)("h5",null,(0,D.zw)(e.data[t.$route.params.id].title),1),(0,r._)("p",null,(0,D.zw)(e.data[t.$route.params.id].content),1),(0,r.Wm)(l)])],64)}var L={name:"Detail",props:{data:Object}};const Y=(0,O.Z)(L,[["render",A]]);var E=Y;function F(t,n,e,a,o,i){return(0,r.wg)(),(0,r.iD)("h4",null,"작가소개입니다.")}var V={};const B=(0,O.Z)(V,[["render",F]]);var G=B;function I(t,n,e,a,o,i){return(0,r.wg)(),(0,r.iD)("h4",null,"댓글입니다.")}var J={};const K=(0,O.Z)(J,[["render",I]]);var Q=K;const R=[{path:"/",component:H},{path:"/list",component:Z},{path:"/detail/:id(\\d+)",component:E,children:[{path:"author",component:G},{path:"comment",component:Q}]}],X=(0,x.p7)({history:(0,x.PO)(),routes:R});var tt=X;(0,a.ri)(j).use(tt).mount("#app")}},n={};function e(a){var r=n[a];if(void 0!==r)return r.exports;var o=n[a]={exports:{}};return t[a].call(o.exports,o,o.exports,e),o.exports}e.m=t,function(){var t=[];e.O=function(n,a,r,o){if(!a){var i=1/0;for(c=0;c<t.length;c++){a=t[c][0],r=t[c][1],o=t[c][2];for(var l=!0,s=0;s<a.length;s++)(!1&o||i>=o)&&Object.keys(e.O).every((function(t){return e.O[t](a[s])}))?a.splice(s--,1):(l=!1,o<i&&(i=o));if(l){t.splice(c--,1);var u=r();void 0!==u&&(n=u)}}return n}o=o||0;for(var c=t.length;c>0&&t[c-1][2]>o;c--)t[c]=t[c-1];t[c]=[a,r,o]}}(),function(){e.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return e.d(n,{a:n}),n}}(),function(){e.d=function(t,n){for(var a in n)e.o(n,a)&&!e.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:n[a]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)}}(),function(){e.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){var t={143:0};e.O.j=function(n){return 0===t[n]};var n=function(n,a){var r,o,i=a[0],l=a[1],s=a[2],u=0;if(i.some((function(n){return 0!==t[n]}))){for(r in l)e.o(l,r)&&(e.m[r]=l[r]);if(s)var c=s(e)}for(n&&n(a);u<i.length;u++)o=i[u],e.o(t,o)&&t[o]&&t[o][0](),t[o]=0;return e.O(c)},a=self["webpackChunkblog"]=self["webpackChunkblog"]||[];a.forEach(n.bind(null,0)),a.push=n.bind(null,a.push.bind(a))}();var a=e.O(void 0,[998],(function(){return e(4867)}));a=e.O(a)})();
//# sourceMappingURL=app.7102ed3e.js.map