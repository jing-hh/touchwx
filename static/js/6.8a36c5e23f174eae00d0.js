webpackJsonp([6],{"1rlY":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=r("S49b"),o=r("e4gm"),s=r("wsvf"),l={components:{uploadImg:o.a,vAddress:s.a},data:function(){return{dataSuccess:!1,ruleForm:{logo:"",company_name:"",region:null,estate:null,address:"",tel:"",introduce:""},rules:{company_name:[{required:!0,message:"请输入门店名称",trigger:"change"}],tel:[{required:!0,message:"请输入门店电话",trigger:"change"}]}}},created:function(){var e=this;Object(a.e)().then(function(t){e.dataSuccess=!0,1==t.data.code&&(e.ruleForm=t.data.data[0])})},methods:{submitForm:function(){var e=this;this.$refs.ruleForm.validate(function(t){if(!t)return e.$message.error("填写错误"),!1;Object(a.d)(e.ruleForm).then(function(t){1==t.data.code&&(e.$message.success(t.data.msg),e.$router.go(0))})})},changeLogo:function(e){this.ruleForm.logo=e},emitChange:function(e){this.ruleForm.region=e.region,this.ruleForm.estate=e.estate,this.ruleForm.address=e.address}}},n={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"public_content"},[e._m(0),e._v(" "),r("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm",attrs:{model:e.ruleForm,rules:e.rules,"label-width":"100px"}},[r("el-form-item",{attrs:{label:"门店logo",prop:"logo"}},[e.dataSuccess?r("upload-img",{attrs:{data:e.ruleForm.logo},on:{onSuccess:e.changeLogo}}):e._e()],1),e._v(" "),r("el-form-item",{attrs:{label:"门店名称",prop:"company_name"}},[r("el-input",{staticStyle:{width:"200px"},model:{value:e.ruleForm.company_name,callback:function(t){e.$set(e.ruleForm,"company_name",t)},expression:"ruleForm.company_name"}})],1),e._v(" "),e.ruleForm.id?r("el-form-item",{attrs:{label:"门店位置",prop:"region"}},[r("v-address",{attrs:{pregion:e.ruleForm.region,pestate:e.ruleForm.estate,paddress:e.ruleForm.address},on:{emitChange:e.emitChange}})],1):e._e(),e._v(" "),r("el-form-item",{attrs:{label:"门店电话",prop:"tel"}},[r("el-input",{staticStyle:{width:"200px"},model:{value:e.ruleForm.tel,callback:function(t){e.$set(e.ruleForm,"tel",t)},expression:"ruleForm.tel"}})],1),e._v(" "),r("el-form-item",{staticStyle:{"margin-bottom":"120px"},attrs:{label:"门店介绍",prop:"introduce"}},[r("el-input",{staticStyle:{width:"700px"},attrs:{type:"textarea",rows:6},model:{value:e.ruleForm.introduce,callback:function(t){e.$set(e.ruleForm,"introduce",t)},expression:"ruleForm.introduce"}})],1),e._v(" "),r("el-button",{staticClass:"public_submit",attrs:{type:"primary",round:""},on:{click:e.submitForm}},[e._v("确认提交")])],1)],1)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"public_title"},[t("span",[this._v("编辑门店资料")])])}]};var i=r("VU/8")(l,n,!1,function(e){r("WUZU")},"data-v-cc251d26",null);t.default=i.exports},WUZU:function(e,t){}});
//# sourceMappingURL=6.8a36c5e23f174eae00d0.js.map