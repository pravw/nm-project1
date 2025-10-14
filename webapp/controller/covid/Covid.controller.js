sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/viz/ui5/api/env/Format",
    "sap/viz/ui5/format/ChartFormatter",
], (Controller, JSONModel,Format,ChartFormatter) => {
    "use strict";

    return Controller.extend("project1.controller.covid.Covid", {
       
         dataPath : "../../model/data.json",
         oVizFrame : null,
       
       
       
       
       
       
        onInit: function () {
             Format.numericFormatter(ChartFormatter.getInstance());
            var formatPattern = ChartFormatter.DefaultPattern;
            // set explored app's demo model on this sample
           

            var oVizFrame = this.oVizFrame = this.getView().byId("idVizFrame");
            oVizFrame.setVizProperties({
                plotArea: {
                    dataLabel: {
                        formatString:formatPattern.SHORTFLOAT_MFD2,
                        visible: true
                    }
                },
                valueAxis: {
                    label: {
                        formatString: formatPattern.SHORTFLOAT
                    },
                    title: {
                        visible: false
                    }
                },
                categoryAxis: {
                    title: {
                        visible: false
                    }
                },
                title: {
                    visible: false,
                    text: 'covid case history'
                }
            });
            var dataModel = new JSONModel(this.dataPath );
            oVizFrame.setModel(dataModel);

            var oPopOver = this.getView().byId("idPopOver");
            oPopOver.connect(oVizFrame.getVizUid());
            oPopOver.setFormatString(formatPattern.STANDARDFLOAT);
        
           

        },

        onPressList: function(){
            alert("list")




        },

          onPressgraph: function(){

                 alert("graph")


        },


    });
});