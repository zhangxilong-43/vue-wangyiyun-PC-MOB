(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["home2"],{"336d":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"mvs"},[t.mySrceenWidth>685?a("el-card",{staticClass:"mvsPC"},[a("div",{staticClass:"menu"},[a("div",{staticClass:"tab"},[t._v("地区："),t._l(t.area,(function(e,s){return a("el-button",{key:s,class:t.area[s]===t.params1?"activeBtn":"",attrs:{round:"",size:"mini"},on:{click:function(e){return t.selectArea(s)}}},[t._v(t._s(e))])}))],2),a("div",{staticClass:"tab"},[t._v("类型："),t._l(t.type,(function(e,s){return a("el-button",{key:s,class:t.type[s]===t.params2?"activeBtn":"",attrs:{round:"",size:"mini"},on:{click:function(e){return t.selectType(s)}}},[t._v(t._s(e))])}))],2),a("div",{staticClass:"tab"},[t._v("排序："),t._l(t.order,(function(e,s){return a("el-button",{key:s,class:t.order[s]===t.params3?"activeBtn":"",attrs:{round:"",size:"mini"},on:{click:function(e){return t.selectOrder(s)}}},[t._v(t._s(e))])}))],2)]),a("div",{staticClass:"MVLists"},t._l(t.MVLists,(function(e){return a("div",{key:e.id,staticClass:"oneMV",on:{click:function(a){return t.goMV(e.id)}}},[a("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},[a("use",{attrs:{"xlink:href":"#icon-bofang1"}})]),a("img",{attrs:{src:e.cover}}),a("span",{staticClass:"iconfont icon-bofang"},[t._v(t._s(t._f("dateFormat4")(e.playCount)))]),a("h3",[t._v(t._s(e.name))])])})),0)]):a("div",{staticClass:"mvsMob"},[a("i",{staticClass:"el-icon-s-operation",on:{click:function(e){t.dialogVisible=!0}}},[t._v("筛选")]),a("div",{staticClass:"allMVs"},t._l(t.MVLists,(function(e){return a("div",{key:e.id,staticClass:"oneMV",on:{click:function(a){return t.goMV(e.id)}}},[a("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},[a("use",{attrs:{"xlink:href":"#icon-bofang1"}})]),a("img",{attrs:{src:e.cover}}),a("span",{staticClass:"iconfont icon-bofang"},[t._v(t._s(t._f("dateFormat4")(e.playCount)))]),a("h3",[t._v(t._s(e.name))])])})),0)]),a("el-pagination",{attrs:{"current-page":t.currentPage,"page-size":12,layout:"prev, pager, next",total:1e3},on:{"current-change":t.handleCurrentChange,"update:currentPage":function(e){t.currentPage=e},"update:current-page":function(e){t.currentPage=e}}}),a("el-dialog",{attrs:{title:"筛选",visible:t.dialogVisible,width:"90%"},on:{"update:visible":function(e){t.dialogVisible=e}}},[a("div",{staticClass:"menuMob"},[a("div",{staticClass:"tab"},[t._v("地区："),a("br"),t._l(t.area,(function(e,s){return a("el-button",{key:s,class:t.area[s]===t.params1?"activeBtn":"",attrs:{round:"",size:"mini"},on:{click:function(e){return t.selectArea(s)}}},[t._v(t._s(e))])}))],2),a("div",{staticClass:"tab"},[t._v("类型："),a("br"),t._l(t.type,(function(e,s){return a("el-button",{key:s,class:t.type[s]===t.params2?"activeBtn":"",attrs:{round:"",size:"mini"},on:{click:function(e){return t.selectType(s)}}},[t._v(t._s(e))])}))],2),a("div",{staticClass:"tab"},[t._v("排序："),a("br"),t._l(t.order,(function(e,s){return a("el-button",{key:s,class:t.order[s]===t.params3?"activeBtn":"",attrs:{round:"",size:"mini"},on:{click:function(e){return t.selectOrder(s)}}},[t._v(t._s(e))])}))],2)])])],1)},n=[],i=(a("96cf"),a("1da1")),r={data:function(){return{area:["全部","内地","港台","欧美","日本","韩国"],type:["全部","官方版","原生","现场版","网易出品"],order:["上升最快","最热","最新"],params1:"全部",params2:"全部",params3:"上升最快",MVLists:[],currentPage:1,total:0,dialogVisible:!1}},methods:{getMVLists:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var a,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$http.get("/mv/all",{params:{area:t.params1,type:t.params2,order:t.params3,limit:12,offset:12*(t.currentPage-1)}});case 2:a=e.sent,s=a.data,t.MVLists=s.data,t.total=s.count;case 6:case"end":return e.stop()}}),e)})))()},selectArea:function(t){this.params1=this.area[t],this.getMVLists()},selectType:function(t){this.params2=this.type[t],this.getMVLists()},selectOrder:function(t){this.params3=this.order[t],this.getMVLists()},handleCurrentChange:function(t){this.currentPage=t,this.getMVLists()}},created:function(){this.getMVLists()},computed:{mySrceenWidth:function(){return this.srceenWidth()}}},c=r,o=(a("f5ba"),a("2877")),u=Object(o["a"])(c,s,n,!1,null,"2946f3cc",null);e["default"]=u.exports},"38eb":function(t,e,a){},f5ba:function(t,e,a){"use strict";var s=a("38eb"),n=a.n(s);n.a}}]);
//# sourceMappingURL=home2.0f97a9f1.js.map