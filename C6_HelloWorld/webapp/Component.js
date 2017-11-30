sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/model/json/JSONModel",
	"sap/ui/demo/wt/controller/HelloDialog"
], function(UIComponent, JSONModel,HelloDialog) {
	"use strict";
	return UIComponent.extend("sap.ui.demo.wt.Component", {
		metadata: {
			manifest: "json"
		},
		init: function() {
			// call the init function of the parent
			UIComponent.prototype.init.apply(this, arguments);
			//set data model
			var oData = {
				recipient: {
					name: "World"
				}
			};
			var oModel = new JSONModel(oData);
			this.setModel(oModel);
			//将helloDialog的弹窗设置成全局变量
			//set dialog
			// this.getRootContol();获取的是什么对象?查阅API文档
			this._helloDialog = new HelloDialog(this.getRootControl());
		},
		openHelloDialog:function(){
			this._helloDialog.open();	
		}
	});
});