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


        


        handleTilePress: function (oEvent) {

             const oSource = oEvent.getSource();
    
              // Step 2: get the binding context of that source
             const oBindingContext = oSource.getBindingContext("tiles");
    
              // Step 3: get the route from the binding context
               const sRoute = oBindingContext.getProperty("route");
           
            if (sRoute.substring(0,4)  == 'EXT-'){

         let selItem=  JSON.parse(this.getView().getModel("tiles").getJSON()).find(item => {if (item.route == sRoute){ return item;}} );
         sap.m.URLHelper.redirect(selItem.url);
            }
    // const oSource = oEvent.getSource();
    // const oBindingContext = oSource.getBindingContext("tiles");
    //  const sRoute = oBindingContext.getProperty("route");
    
    
    this.getOwnerComponent().getRouter().navTo(sRoute);
}



    });
});