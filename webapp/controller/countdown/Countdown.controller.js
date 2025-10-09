sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
], (Controller, JSONModel) => {
    "use strict";

    return Controller.extend("project1.controller.countdown.Countdown", {
        onInit: function () {
            let myTileModel = new JSONModel("../model/tiles.json");
            this.getView().setModel(myTileModel, "tiles")
        },
        onPress: function (oEvent) {
            alert(oEvent);


        }
    });
});