sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
], (Controller, JSONModel) => {
    "use strict";

    return Controller.extend("project1.controller.Tiles", {
        onInit: function () {
            let myTileModel = new JSONModel("../model/tiles.json");
            this.getView().setModel(myTileModel, "tiles")
        },


        // press: function (oEvent) {
        //      this.getOwnerComponent().getRouter().navTo("first")
        //      this.getOwnerComponent().getRouter().navTo("second")
            


        // }



        handleTilePress: function (oEvent) {
    const oSource = oEvent.getSource();
    const oBindingContext = oSource.getBindingContext("tiles");
    const sRoute = oBindingContext.getProperty("route");
    
    this.getOwnerComponent().getRouter().navTo(sRoute);
}



    });
});