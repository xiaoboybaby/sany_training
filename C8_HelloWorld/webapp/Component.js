sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/model/json/JSONModel",
	"sap/ui/demo/wt/controller/HelloDialog",
	"sap/ui/Device"
], function(UIComponent, JSONModel, HelloDialog, Device) {
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
			// disable batch grouping for v2 API of the northwind service
			this.getModel("invoice").setUseBatch(false);

			// set device model
			var oDeviceModel = new JSONModel(Device);
			oDeviceModel.setDefaultBindingMode("OneWay");
			this.setModel(oDeviceModel, "device");

			//将helloDialog的弹窗设置成全局变量
			//set dialog
			// this.getRootContol();获取的是什么对象?查阅API文档
			this._helloDialog = new HelloDialog(this.getRootControl());

			// create the views based on the url/hash
			this.getRouter().initialize();
		},
		getContentDensityClass: function() {
			if (!this._sContentDensityClass) {
				if (!sap.ui.Device.support.touch) {
					this._sContentDensityClass = "sapUiSizeCompact";
				} else {
					this._sContentDensityClass = "sapUiSizeCozy";
				}
			}
			return this._sContentDensityClass;
		},
		openHelloDialog: function() {
			this._helloDialog.open();
		}
	});
});