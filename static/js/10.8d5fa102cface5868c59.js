webpackJsonp([10],{"+r2y":function(e,t){},ztJr:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=a("//Fk"),n=a.n(s),i=a("I2ex"),o={data:function(){return{page:{total:0,pageNo:1,pageSize:10},total_1:0,total_0:0,keywords:"",checkList:[],filterlists:[],checkAll:!1,updown:"1",searchInfo:"",lists:[]}},created:function(){this.$store.state.app.rentcondition.pageNo&&(this.page.pageNo=this.$store.state.app.rentcondition.pageNo,this.page.pageSize=this.$store.state.app.rentcondition.pageSize,this.updown=this.$store.state.app.rentcondition.updown,this.keywords=this.$store.state.app.rentcondition.keywords),this.fetchData()},beforeRouteLeave:function(e,t,a){"addrent"==e.name&&e.query.id?this.$store.commit("SET_RENTCONDITION",{pageNo:this.page.pageNo,pageSize:this.page.pageSize,select_type:1,updown:this.updown,keywords:this.keywords}):this.$store.commit("SET_RENTCONDITION",{}),a()},methods:{fetchData:function(){var e=this;return new n.a(function(t,a){var s={pageNo:e.page.pageNo,pageSize:e.page.pageSize,select_type:2,updown:e.updown,keywords:e.keywords};Object(i.e)(s).then(function(a){e.lists=a.data.data.data,a.data.data.total&&e.lists.forEach(function(t){e.filterlists.push(t.id)}),e.total_0=a.data.data.count.total_0,e.total_1=a.data.data.count.total_1,e.page.total=a.data.data.total,t(a)}).catch(function(e){a(e)})})},handleCurrentChange:function(e){this.checkList=[],this.checkAll=!1,this.page.pageNo=e,this.fetchData()},handleSizeChange:function(e){this.page.pageSize=e,this.fetchData()},handleCheckAllChange:function(e){this.checkList=e?this.filterlists:[]},deleteAll:function(){var e=this;this.checkList.forEach(function(t){e.handle(t,2)})},handleCheckedChange:function(e){var t=e.length;this.checkAll=t===this.lists.length},handle:function(e,t){var a=this;return new n.a(function(s,n){var o={id:e,type:t,method:2};Object(i.f)(o).then(function(e){1==e.data.code&&(a.$message.success("操作成功"),a.fetchData().then(function(e){""==e.data.data&&(a.page.pageNo--,a.fetchData())})),s(e)}).catch(function(e){n(e)})})}}},l={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"public_content clearfix"},[e._m(0),e._v(" "),a("el-button",{staticClass:"public_add",attrs:{type:"primary"},on:{click:function(t){e.$router.push({name:"addrent"})}}},[e._v("录入房源")]),e._v(" "),a("div",{staticClass:"clearfix"},[a("el-tabs",{staticClass:"fl",on:{"tab-click":function(t){e.handleCurrentChange(1)}},model:{value:e.updown,callback:function(t){e.updown=t},expression:"updown"}},[a("el-tab-pane",{attrs:{name:"1"}},[a("span",{attrs:{slot:"label"},slot:"label"},[e._v("已上架 "),a("el-badge",{staticClass:"mark",attrs:{value:e.total_1,max:99}})],1)]),e._v(" "),a("el-tab-pane",{attrs:{name:"0"}},[a("span",{attrs:{slot:"label"},slot:"label"},[e._v("未上架 "),a("el-badge",{staticClass:"mark",attrs:{value:e.total_0,max:99}})],1)])],1),e._v(" "),a("div",{staticClass:"fr"},[a("el-input",{staticStyle:{width:"300px"},attrs:{placeholder:"请输入标题/小区名称/房源编号"},model:{value:e.keywords,callback:function(t){e.keywords=t},expression:"keywords"}},[a("el-button",{attrs:{slot:"append",icon:"el-icon-search"},on:{click:function(t){e.handleCurrentChange(1)}},slot:"append"})],1)],1)],1),e._v(" "),a("ul",{directives:[{name:"show",rawName:"v-show",value:e.page.total,expression:"page.total"}],staticClass:"lists_wrap"},[a("el-checkbox-group",{on:{change:e.handleCheckedChange},model:{value:e.checkList,callback:function(t){e.checkList=t},expression:"checkList"}},e._l(e.lists,function(t,s){return a("li",{key:s,staticClass:"item"},[a("p",[a("el-checkbox",{directives:[{name:"show",rawName:"v-show",value:0==e.updown,expression:"updown == 0"}],key:s,staticStyle:{"margin-right":"20px"},attrs:{label:t.id}},[e._v("\n                    编号"+e._s(t.sale_no)+"\n                ")]),e._v(" "),a("span",{directives:[{name:"show",rawName:"v-show",value:1==e.updown,expression:"updown == 1"}]},[e._v("编号"+e._s(t.sale_no))]),e._v(" "),a("span",{staticClass:"time"},[e._v("刷新时间："+e._s(e._f("formatDate")(t.refreshtime)))])],1),e._v(" "),a("div",{staticClass:"detail"},[a("img",{staticClass:"thumb",attrs:{src:t.thumb}}),e._v(" "),a("div",{staticClass:"info"},[a("p",{staticClass:"name"},[e._v(e._s(t.title))]),e._v(" "),a("p",[a("span",{staticClass:"avgprice"},[e._v(e._s(t.price?t.price+"万":"面议")),a("span",{directives:[{name:"show",rawName:"v-show",value:t.price,expression:"item.price"}],staticStyle:{color:"#333","font-weight":"400","font-size":"14px"}},[e._v("元")])]),e._v(" "),a("span",{staticClass:"address"},[e._v("\n                            "+e._s(t.area)+"㎡ | "+e._s(t.fixture_name)+" | "+e._s(t.bedroom+"室")+e._s(t.livingroon+"厅")+e._s(t.bathroom+"卫")+"\n                        ")])])]),e._v(" "),a("div",{staticClass:"flag"},[a("img",{staticClass:"mark",attrs:{src:e._f("listImg")(t.buy_location),alt:""}})]),e._v(" "),a("span",{directives:[{name:"show",rawName:"v-show",value:1==e.updown,expression:"updown == 1"}],staticClass:"showStatus",class:Number(t.status)?"orange":"green"},[e._v(e._s(Number(t.status)?"已审核":"待审核"))]),e._v(" "),a("div",{staticClass:"status",staticStyle:{"font-size":"14px"}},[a("span",{directives:[{name:"show",rawName:"v-show",value:Number(t.updown),expression:"Number(item.updown)"}],staticClass:"public_btn darkgreen",on:{click:function(a){e.handle(t.id,1)}}},[a("i",{staticClass:"iconfont"},[e._v("")]),e._v("刷新")]),e._v(" "),a("span",{staticClass:"public_btn",class:Number(t.updown)?"yellow":"darkgreen",on:{click:function(a){e.handle(t.id,t.updown?4:3)}}},[a("i",{staticClass:"iconfont"},[e._v(e._s(Number(t.updown)?"":""))]),e._v(e._s(Number(t.updown)?"下架":"上架"))]),e._v(" "),a("span",{directives:[{name:"show",rawName:"v-show",value:!Number(t.updown),expression:"!Number(item.updown)"}],staticClass:"public_btn blue",on:{click:function(a){e.$router.push({name:"addrent",query:{id:t.id}})}}},[a("i",{staticClass:"el-icon-edit-outline"}),e._v("编辑")]),e._v(" "),a("span",{directives:[{name:"show",rawName:"v-show",value:!Number(t.updown),expression:"!Number(item.updown)"}],staticClass:"public_btn orange",on:{click:function(a){e.handle(t.id,2)}}},[a("i",{staticClass:"iconfont"},[e._v("")]),e._v("删除")])]),e._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:1==e.updown,expression:"updown == 1"}],staticClass:"num"},[a("i",{staticClass:"iconfont"},[e._v("")]),e._v(" "),a("span",[e._v(e._s(t.hits?t.hits:0))])])])])}))],1),e._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:!e.page.total,expression:"!page.total"}],staticClass:"noContent"},[e._v("暂无数据")]),e._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:e.page.total&&0==e.updown,expression:"page.total && updown == 0"}],staticClass:"inlineBlock fl"},[a("el-checkbox",{directives:[{name:"show",rawName:"v-show",value:e.page.total&&0==e.updown,expression:"page.total && updown == 0"}],on:{change:e.handleCheckAllChange},model:{value:e.checkAll,callback:function(t){e.checkAll=t},expression:"checkAll"}}),e._v(" "),a("span",{staticClass:"public_btn orange small",on:{click:e.deleteAll}},[a("i",{staticClass:"iconfont"},[e._v("")]),e._v("删除")])],1),e._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:e.page.total,expression:"page.total"}],staticClass:"inlineBlock fr"},[a("el-pagination",{attrs:{"current-page":e.page.pageNo,"page-sizes":[10,20,30,40],"page-size":e.page.pageSize,layout:"total, sizes, prev, pager, next, jumper",total:e.page.total},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange,"update:currentPage":function(t){e.$set(e.page,"pageNo",t)}}})],1)],1)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"public_title"},[t("span",[this._v("租房房源库")])])}]};var c=a("VU/8")(o,l,!1,function(e){a("+r2y")},"data-v-7aff6fb7",null);t.default=c.exports}});
//# sourceMappingURL=10.8d5fa102cface5868c59.js.map