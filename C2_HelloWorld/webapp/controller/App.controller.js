sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast"
], function(Controller, MessageToast) {
	"use strict";
	return Controller.extend("sap.ui.demo.wt.controller.App", {
		onShowHello: function() {
			//read msg from i18n model
			var oBundel = this.getView().getModel("i18n").getResourceBundle();
			var sRecipient = this.getView().getModel().getProperty("/recipient/name");
			var sMsg = oBundel.getText("helloMsg",[sRecipient]);
			
			// show a native JavaScript alert
			// MessageToast.show("Hello World");
			MessageToast.show(sMsg);
		}
	});
});