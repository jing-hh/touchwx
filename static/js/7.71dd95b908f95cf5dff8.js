webpackJsonp([7],{"4gC9":function(e,t){},hn46:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=r("//Fk"),a=r.n(o),i=r("I2ex"),l=r("e4gm"),s=r("BWSO"),n=r("DG8g"),u=r("reov"),m={components:{uploadImg:l.a,uploadImgs:s.a,uploadVideo:n.a,editor:u.a},data:function(){return{dataSuccess:!1,showadd:!1,temp:"",community_id:[],loading:!1,housetype:[],decoration:[],aspect:[],certificate:[{id:0,paramname:"不满两年"},{id:1,paramname:"满两年"},{id:2,paramname:"满五年"}],only:[{id:0,paramname:"否"},{id:1,paramname:"是"}],tag:[],ruleForm:{community_id:"",housetype:"",fixture:"",towards:"",bedroom:"",livingroon:"",bathroom:"",area:"",floor:"",totalfloor:"",certificate:"",only:"",thumb:"",images:"",video:"",panorama:"",description:"",mentality:"",title:"",price:"",tag:[]},rules:{community_id:[{required:!0,message:"请输入小区名称",trigger:"change"}],housetype:[{required:!0,message:"请选择房屋情况"}],fixture:[{required:!0,message:"请选择装修程度"}],towards:[{required:!0,message:"请选择房屋朝向"}],bedroom:[{required:!0,message:"请输入室"}],livingroon:[{required:!0,message:"请输入厅"}],bathroom:[{required:!0,message:"请输入卫"}],area:[{required:!0,message:"请输入面积"}],title:[{required:!0,message:"请输入房屋标题"}],price:[{required:!0,message:"请输入房屋售价"}],floor:[{required:!0,message:"请输入所在楼层"}],totalfloor:[{required:!0,message:"请输入总楼层"}],certificate:[{required:!0,message:"请选择房屋年限"}],only:[{required:!0,message:"请选择是否唯一"}]}}},created:function(){var e=this;this.$route.params.search&&this.remoteMethod(this.$route.params.search),this.$route.query.id?Object(i.h)("get",this.$route.query.id).then(function(t){if(1==t.data.code){var r=t.data.data.agent;e.remoteMethod(r.communityname).then(function(t){e.ruleForm=r,e.ruleForm.tag=r.tag.map(function(e){return Number(e)}),e.dataSuccess=!0})}}):this.dataSuccess=!0,Object(i.h)("get").then(function(t){e.tag=t.data.data.tag,e.decoration=t.data.data.decoration,e.aspect=t.data.data.aspect,e.housetype=t.data.data.housetype})},computed:{fixture:function(){var e=this,t="";return this.ruleForm.fixture?(this.decoration.forEach(function(r){r.id==e.ruleForm.fixture&&(t=r.paramname)}),t):""},houseName:function(){var e=this,t="";return this.ruleForm.community_id?(this.community_id.forEach(function(r){r.id==e.ruleForm.community_id&&(t=r.communityname)}),t):""},houseTitle:{set:function(e){this.ruleForm.title=e},get:function(){return this.$route.query.id?this.ruleForm.title:this.houseName+" "+this.ruleForm.bedroom+(this.ruleForm.bedroom?"室":"")+this.ruleForm.livingroon+(this.ruleForm.livingroon?"厅":"")+this.ruleForm.bathroom+(this.ruleForm.bathroom?"卫":"")+" "+this.ruleForm.area+(this.ruleForm.area?"平米":"")+" "+this.fixture+" "+this.ruleForm.price+(this.ruleForm.price?"万":"")}}},watch:{houseTitle:function(e){this.ruleForm.title=e}},methods:{remoteMethod:function(e){var t=this;return new a.a(function(r,o){t.temp=e,""!==e?(t.loading=!0,Object(i.b)(e).then(function(e){t.community_id=e.data.data_like,t.$route.params.search&&(t.ruleForm.community_id=t.community_id[0].id),r(e)}).catch(function(e){o(e)}),t.loading=!1):(t.community_id=[],r())})},blurMethod:function(e){0==this.community_id.length&&(this.ruleForm.community_id=this.temp)},addCommunity:function(){this.$router.push({name:"addcommunity",params:{type:1,search:this.temp}})},submitForm:function(e){var t=this;this.$refs[e].validate(function(e){if(!e)return!1;t.ruleForm.title=t.houseTitle,Object(i.h)("post","",t.ruleForm).then(function(e){1==e.data.code&&(t.$route.query.id?t.$message.success("编辑成功"):t.$message.success("新增成功"),t.$router.push({name:"secondhouselists"}))})})},changeLogo:function(e,t){this.ruleForm[t]=e},changeImages:function(e){this.ruleForm.images=e},changeVideo:function(e){this.ruleForm.video=e},editors:function(e){this.ruleForm.description=e}}},c={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"public_content"},[r("div",{staticClass:"public_title"},[r("span",[e._v("二手房录入房源")]),e._v(" "),r("el-button",{staticClass:"fr",attrs:{icon:"el-icon-back",size:"small"},on:{click:function(t){e.$router.push({name:"secondhouselists"})}}},[e._v("房源库")])],1),e._v(" "),r("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm",attrs:{model:e.ruleForm,rules:e.rules,"label-width":"100px"}},[r("el-form-item",{attrs:{label:"小区名称",prop:"community_id"}},[r("el-select",{staticStyle:{width:"250px","margin-right":"20px"},attrs:{filterable:"",remote:"","reserve-keyword":"",placeholder:"请输入关键词","remote-method":e.remoteMethod,loading:e.loading},on:{blur:e.blurMethod},model:{value:e.ruleForm.community_id,callback:function(t){e.$set(e.ruleForm,"community_id",t)},expression:"ruleForm.community_id"}},e._l(e.community_id,function(e){return r("el-option",{key:e.id,attrs:{label:e.communityname,value:e.id}})})),e._v(" "),r("el-button",{directives:[{name:"show",rawName:"v-show",value:0==e.community_id.length&&e.temp,expression:"community_id.length == 0 && temp"}],attrs:{type:"primary",round:""},on:{click:e.addCommunity}},[e._v("录入小区")])],1),e._v(" "),r("el-form-item",{staticClass:"inlineBlock",attrs:{label:"房屋情况",prop:"housetype"}},[r("el-select",{attrs:{placeholder:"房屋类型"},model:{value:e.ruleForm.housetype,callback:function(t){e.$set(e.ruleForm,"housetype",t)},expression:"ruleForm.housetype"}},e._l(e.housetype,function(e){return r("el-option",{key:e.id,attrs:{label:e.paramname,value:e.id}})}))],1),e._v(" "),r("el-form-item",{staticClass:"inlineBlock",attrs:{prop:"fixture","label-width":"0"}},[r("el-select",{attrs:{placeholder:"装修程度"},model:{value:e.ruleForm.fixture,callback:function(t){e.$set(e.ruleForm,"fixture",t)},expression:"ruleForm.fixture"}},e._l(e.decoration,function(e){return r("el-option",{key:e.id,attrs:{label:e.paramname,value:e.id}})}))],1),e._v(" "),r("el-form-item",{staticClass:"inlineBlock",attrs:{prop:"towards","label-width":"0"}},[r("el-select",{attrs:{placeholder:"房屋朝向"},model:{value:e.ruleForm.towards,callback:function(t){e.$set(e.ruleForm,"towards",t)},expression:"ruleForm.towards"}},e._l(e.aspect,function(e){return r("el-option",{key:e.id,attrs:{label:e.paramname,value:e.id}})}))],1),e._v(" "),r("div",[r("el-form-item",{staticClass:"inlineBlock",attrs:{label:"户型面积",prop:"bedroom"}},[r("el-input",{staticStyle:{width:"100px"},model:{value:e.ruleForm.bedroom,callback:function(t){e.$set(e.ruleForm,"bedroom",t)},expression:"ruleForm.bedroom"}},[r("span",{attrs:{slot:"suffix"},slot:"suffix"},[e._v("室")])])],1),e._v(" "),r("el-form-item",{staticClass:"inlineBlock",attrs:{"label-width":"0",prop:"livingroon"}},[r("el-input",{staticStyle:{width:"100px"},model:{value:e.ruleForm.livingroon,callback:function(t){e.$set(e.ruleForm,"livingroon",t)},expression:"ruleForm.livingroon"}},[r("span",{attrs:{slot:"suffix"},slot:"suffix"},[e._v("厅")])])],1),e._v(" "),r("el-form-item",{staticClass:"inlineBlock",attrs:{"label-width":"0",prop:"bathroom"}},[r("el-input",{staticStyle:{width:"100px"},model:{value:e.ruleForm.bathroom,callback:function(t){e.$set(e.ruleForm,"bathroom",t)},expression:"ruleForm.bathroom"}},[r("span",{attrs:{slot:"suffix"},slot:"suffix"},[e._v("卫")])])],1),e._v(" "),r("el-form-item",{staticClass:"inlineBlock",attrs:{"label-width":"0",prop:"area"}},[r("el-input",{staticStyle:{width:"100px"},model:{value:e.ruleForm.area,callback:function(t){e.$set(e.ruleForm,"area",t)},expression:"ruleForm.area"}},[r("span",{attrs:{slot:"suffix"},slot:"suffix"},[e._v("㎡")])])],1)],1),e._v(" "),r("el-form-item",{attrs:{label:"房屋售价",prop:"price"}},[r("el-input",{staticStyle:{width:"150px"},attrs:{placeholder:"0元表示面议"},model:{value:e.ruleForm.price,callback:function(t){e.$set(e.ruleForm,"price",t)},expression:"ruleForm.price"}},[r("span",{attrs:{slot:"suffix"},slot:"suffix"},[e._v("万元")])])],1),e._v(" "),r("el-form-item",{attrs:{label:"房屋标题",prop:"title"}},[r("el-input",{staticStyle:{width:"300px"},model:{value:e.houseTitle,callback:function(t){e.houseTitle=t},expression:"houseTitle"}})],1),e._v(" "),r("div",[r("el-form-item",{staticClass:"inlineBlock",attrs:{label:"房屋楼层",prop:"floor"}},[r("el-input",{staticStyle:{width:"100px"},model:{value:e.ruleForm.floor,callback:function(t){e.$set(e.ruleForm,"floor",t)},expression:"ruleForm.floor"}},[r("span",{attrs:{slot:"prefix"},slot:"prefix"},[e._v("第")]),e._v(" "),r("span",{attrs:{slot:"suffix"},slot:"suffix"},[e._v("层")])])],1),e._v(" "),r("el-form-item",{staticClass:"inlineBlock",attrs:{"label-width":"0",prop:"totalfloor"}},[r("el-input",{staticStyle:{width:"100px"},model:{value:e.ruleForm.totalfloor,callback:function(t){e.$set(e.ruleForm,"totalfloor",t)},expression:"ruleForm.totalfloor"}},[r("span",{attrs:{slot:"prefix"},slot:"prefix"},[e._v("共")]),e._v(" "),r("span",{attrs:{slot:"suffix"},slot:"suffix"},[e._v("层")])])],1)],1),e._v(" "),r("div",[r("el-form-item",{staticClass:"inlineBlock",attrs:{label:"房本年限",prop:"certificate"}},[r("el-select",{staticStyle:{width:"120px"},attrs:{placeholder:"年限"},model:{value:e.ruleForm.certificate,callback:function(t){e.$set(e.ruleForm,"certificate",t)},expression:"ruleForm.certificate"}},e._l(e.certificate,function(e){return r("el-option",{key:e.id,attrs:{label:e.paramname,value:e.id}})}))],1),e._v(" "),r("el-form-item",{staticClass:"inlineBlock",attrs:{"label-width":"0",prop:"only"}},[r("el-select",{staticStyle:{width:"120px"},attrs:{placeholder:"是否唯一"},model:{value:e.ruleForm.only,callback:function(t){e.$set(e.ruleForm,"only",t)},expression:"ruleForm.only"}},e._l(e.only,function(e){return r("el-option",{key:e.id,attrs:{label:e.paramname,value:e.id}})}))],1)],1),e._v(" "),r("el-form-item",{attrs:{label:"封面图片",prop:"thumb"}},[e.dataSuccess?r("upload-img",{staticStyle:{display:"inline-block"},attrs:{data:e.ruleForm.thumb},on:{onSuccess:function(t){e.changeLogo(t,"thumb")}}}):e._e(),e._v(" "),r("span",{staticClass:"public_littleTip"},[r("i",{staticClass:"iconfont"},[e._v("")]),e._v("单图，供列表页使用")])],1),e._v(" "),r("el-form-item",{attrs:{label:"房源图片",prop:"images"}},[e.dataSuccess?r("upload-imgs",{attrs:{data:e.ruleForm.images},on:{onSuccess:e.changeImages}}):e._e()],1),e._v(" "),r("el-form-item",{attrs:{label:"上传视频",prop:"video"}},[e.dataSuccess?r("upload-video",{attrs:{data:e.ruleForm.video},on:{onSuccess:e.changeVideo}}):e._e()],1),e._v(" "),r("el-form-item",{attrs:{label:"VR看房",prop:"panorama"}},[r("el-input",{staticStyle:{width:"300px"},model:{value:e.ruleForm.panorama,callback:function(t){e.$set(e.ruleForm,"panorama",t)},expression:"ruleForm.panorama"}},[r("template",{slot:"prepend"},[e._v("Http://")])],2),e._v(" "),r("span",{staticClass:"public_littleTip"},[r("i",{staticClass:"iconfont"},[e._v("")]),e._v("请输入VR文件的URL")])],1),e._v(" "),r("el-form-item",{attrs:{label:"特色标签",prop:"tag"}},[r("el-checkbox-group",{model:{value:e.ruleForm.tag,callback:function(t){e.$set(e.ruleForm,"tag",t)},expression:"ruleForm.tag"}},e._l(e.tag,function(t){return r("el-checkbox",{key:t.id,attrs:{label:t.id}},[e._v("\n                    "+e._s(t.paramname)+"\n                ")])}))],1),e._v(" "),r("el-form-item",{attrs:{label:"房屋描述",prop:"description"}},[r("editor",{attrs:{value:e.ruleForm.description},on:{show:e.editors}})],1),e._v(" "),r("el-form-item",{staticStyle:{"margin-bottom":"120px"},attrs:{label:"业主心态",prop:"mentality"}},[r("el-input",{staticStyle:{width:"700px"},attrs:{type:"textarea",rows:6},model:{value:e.ruleForm.mentality,callback:function(t){e.$set(e.ruleForm,"mentality",t)},expression:"ruleForm.mentality"}})],1),e._v(" "),r("el-button",{staticClass:"public_submit",attrs:{type:"primary",round:""},on:{click:function(t){e.submitForm("ruleForm")}}},[e._v("确认提交")])],1)],1)},staticRenderFns:[]};var d=r("VU/8")(m,c,!1,function(e){r("4gC9")},"data-v-cbb519de",null);t.default=d.exports}});
//# sourceMappingURL=7.71dd95b908f95cf5dff8.js.map