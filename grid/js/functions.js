$(document).ready(function () {

    // http://54.215.12.164/arcgis/rest/services/IWFM/IWFM_Web/MapServer/

    HideAllInContentArea();
    //ShowLegend();

    GetDataTypeInfo();

    //$("#a").html($("#b"));
    $(".nav a").on("click", function () {
        $(".nav").find(".active").removeClass("active");
        $(this).parent().addClass("active");
    });

    $('a.aaf').on("click", function () {
     
        var userid = $(this).attr("id");
        ReplaceDiv(userid);
        //post code
       
    })

    $('#idOther').on("click", function () {
        //alert("Running Test");
        Test();
        $("#menu1").text('Victory Jesus');
        //post code
    })
  

    $("#idRetrieveData").click(function () {
        GetRestData();
    })

    // //The btn-group is needed on this so all dropdown button text values dont changed at once to the same thing on dropdown select.
    // $("#idFeatureTypeDropdown li a").click(function () {
    //     $(this).closest('.btn-group').find(".btn:first-child").text($(this).text());
    //     $(this).closest('.btn-group').find(".btn:first-child").val($(this).text());

    //     //alert($(this).text());
    //     var listArr = [];
    //     // Lets get the data types
    //     for (var i = 0; i < Globals.DataTypeArrayResultCount; i++) { 


    //         //seriesEventsData.push([Date.UTC(dt.getFullYear(), dt.getMonth(), dt.getDate(), dt.getHours(), dt.getMinutes(), dt.getSeconds()), Timeseries.Value]);

    //         //Works
    //         //Globals.resultItems.push([results.features[i].attributes.FeatureType, results.features[i].attributes.DataType, results.features[i].attributes.SubDataType]);
    //         //alert(Globals.DataTypeArray[i][1] + " ==  " + $(this).text());
    //         if (Globals.DataTypeArray[i][1] == $(this).text()) {   // Looking for matches e.g. SubRegion
    //             //alert("Appending " + Globals.DataTypeArray[i][2])
                
    //             listArr.push(Globals.DataTypeArray[i][2]);

    //             //$("#idDataTypeDropdown").append('<li>' + Globals.DataTypeArray[i][2] + '</li>');
    //             //<li role="presentation"><a role="menuitem" tabindex="-1" href="#">SubRegion</a></li>
                
    //         }
    //     }
    //         var uniqueListArr = unique(listArr);

    //         $("#idDataTypeDropdown").children().remove();  //Clear out matters

    //         for (var j = 0; j < uniqueListArr.length; j++) {

    //             $("#idDataTypeDropdown").append('<li role="presentation"><a role="menuitem" class="sitelink" tabindex="-1" href="#">' + uniqueListArr[j] + '</a></li>');

    //         }

    //         Globals.FeatureType = $(this).text();
    // });

    $("#idDataTypeDropdown").on("click", ".sitelink", function (e) {

        $(this).closest('.btn-group').find(".btn:first-child").text($(this).text());
        $(this).closest('.btn-group').find(".btn:first-child").val($(this).text());

        //alert("Setting " + $(this).text());
        Globals.DataType = $(this).text();
        //alert(Globals.DataType);


            listArr = [];
        // Lets get the data types
           
            // for (var i = 0; i < Globals.DataTypeArrayResultCount; i++) {


            //     //seriesEventsData.push([Date.UTC(dt.getFullYear(), dt.getMonth(), dt.getDate(), dt.getHours(), dt.getMinutes(), dt.getSeconds()), Timeseries.Value]);

            //     //Works
            //     //Globals.resultItems.push([results.features[i].attributes.FeatureType, results.features[i].attributes.DataType, results.features[i].attributes.SubDataType]);
            //     //alert(Globals.DataTypeArray[i][2] + " ==  " + $(this).text());
            //     if (Globals.DataTypeArray[i][2] == $(this).text()) {   // Looking for matches e.g. SubRegion
            //         //alert("Hit - Appending " + Globals.DataTypeArray[i][3])


            //         if (Globals.DataTypeArray[i][3] != 0) {
            //             listArr.push(Globals.DataTypeArray[i][3]);
            //         }
                    

            //         //$("#idDataTypeDropdown").append('<li>' + Globals.DataTypeArray[i][2] + '</li>');
            //         //<li role="presentation"><a role="menuitem" tabindex="-1" href="#">SubRegion</a></li>

            //     }

            // }

            // var uniqueListArr = unique(listArr);

            // if (uniqueListArr.length == 0) {
            //     //alert("There are no sub data types");
            //     //Disable dropdown???
            //     //$("#idSubDataTypeDropdown").prop("disabled", true);  
            //    return;
            // }


            // $("#idDataTypeDropdown").children().remove();

            // for (var j = 0; j < uniqueListArr.length; j++) {
            //     $("#idSubDataTypeDropdown").append('<li role="presentation"><a role="menuitem" class="sitelink" tabindex="-1" href="#">' + listArr[j] + '</a></li>');
            // }


           

        //e.preventDefault();
        //alert("bob");
    });

    //$("#idDataTypeDropdown").on("click", function () {

    //    console.log($(this).text());
        
    //    //alert($("#idDataTypeDropdown option:selected").text());

    //    $(this).closest('.btn-group').find(".btn:first-child").text($(this).text());
    //    $(this).closest('.btn-group').find(".btn:first-child").val($(this).text());

    //    listArr = [];
    //    // Lets get the data types
    //    for (var i = 0; i < Globals.DataTypeArrayResultCount; i++) {


    //        //seriesEventsData.push([Date.UTC(dt.getFullYear(), dt.getMonth(), dt.getDate(), dt.getHours(), dt.getMinutes(), dt.getSeconds()), Timeseries.Value]);

    //        //Works
    //        //Globals.resultItems.push([results.features[i].attributes.FeatureType, results.features[i].attributes.DataType, results.features[i].attributes.SubDataType]);
    //        //alert(Globals.DataTypeArray[i][1] + " ==  " + $(this).text());
    //        if (Globals.DataTypeArray[i][2] == $(this).text()) {   // Looking for matches e.g. SubRegion
    //            //alert("Appending " + Globals.DataTypeArray[i][2])

    //            listArr.push(Globals.DataTypeArray[i][3]);

    //            //$("#idDataTypeDropdown").append('<li>' + Globals.DataTypeArray[i][2] + '</li>');
    //            //<li role="presentation"><a role="menuitem" tabindex="-1" href="#">SubRegion</a></li>
               
    //        }

    //    }

        

    //    $("#idSubDataTypeDropdown").append('<li role="presentation"><a role="menuitem" class="sitelink" tabindex="-1" href="#">' + Globals.DataTypeArray[i][3] + '</a></li>');






    //});

   



    //$('#idFeatureTypeDropdown li a').click(function () {
    //    alert("JAMBA");
    //    //$(this).parents(".dropdown").find('.btn').html($(this).text() + ' <span class="caret"></span>');
    //    //$(this).parents(".dropdown").find('.btn').val($(this).data('value'));




    //    <li role="presentation"><a role="menuitem" tabindex="-1" href="#">SubRegion</a></li>

    //})

   
  
    //$(".dropdown-menu li a").click(function () {

    //    console.log(this);
    //    //$(this).parents(".dropdown").find('.btn').html($(this).text() + ' <span class="caret"></span>');
    //    //$(this).parents(".dropdown").find('.btn').val($(this).data('value'));
    //});




    $('#idTest').on("click", function () {
        GetDataTypeInfo();
    })

});

// Uniqify an array
function unique(arr) {
    var u = {}, a = [];
    for (var i = 0, l = arr.length; i < l; ++i) {
        if (!u.hasOwnProperty(arr[i])) {
            a.push(arr[i]);
            u[arr[i]] = 1;
        }
    }
    return a;
}
// Hide/Show Functions
function HideAllInContentArea() {

    $("#idDivLegend").hide("slow");
    $("#idDivTimeseries").hide();

}
function ShowLegend() {
    $("#idDivLegend").show("slow");
}

function ShowTimeseries() {
    $("#idDivTimeseries").show("slow");
}




function ReplaceDiv(userid) {  //This loads the HTML into contentArea div
    //alert(userid)
    HideAllInContentArea();
    switch(userid) {
        case "idLegend":
            ShowLegend();
            break;
        case "idTimeSeries":
            ShowTimeseries();
            break;
        case "idOther":  
            break;
        default:
            alert("no match James!");
    }


}
function Test() {
    var Heinzer = "Sharla";
    //$('#idDataTypeDropdown').append('<li>' + Heinzer + '</li>');
    $('#idDataTypeDropdown').append('<li role="presentation"><a role="menuitem" tabindex="-1" href="#">' + Heinzer + '</a></li>');

}
function mapClick(event) {


    //var selectionQuery = new esri.tasks.Query();
    //var tol = map.extent.getWidth() / map.width * 5;
    //var x = event.mapPoint.x;
    //var y = event.mapPoint.y;
    //var queryExtent = new esri.geometry.Extent(x - tol, y - tol, x + tol, y + tol, event.mapPoint.spatialReference);
    //selectionQuery.geometry = queryExtent;
  
    //------------------------------------
    //alert("YO!!! " + Globals.SelectedDataType);

        //Globals.Applications.Mlands.clearSelection();
       
       require([
       "esri/map",
       "esri/layers/ArcGISDynamicMapServiceLayer",
       "esri/tasks/QueryTask",
       "esri/tasks/query",
       "esri/symbols/SimpleMarkerSymbol",
       "esri/symbols/SimpleFillSymbol",
       "esri/symbols/SimpleLineSymbol",
       "esri/InfoTemplate",
       "dojo/_base/Color",
       "dojo/domReady!"
            ], function (Map, ArcGISDynamicMapServiceLayer, QueryTask, Query, SimpleMarkerSymbol, SimpleFillSymbol, SimpleLineSymbol, InfoTemplate, Color) {



                switch (Globals.FeatureType)
                {
        
                    case "Elements":

                        queryTask = new QueryTask(Globals.MapServerPath + "5");
                        query = new Query();
                        query.returnGeometry = true;
                        query.outFields = ["Element_ID"];

                        //initialize InfoTemplate
                        //infoTemplate = new InfoTemplate("${CITY_NAME}", "Name : ${CITY_NAME}<br/> State : ${STATE_NAME}<br />Population : ${POP1990}");

                        //create symbol for selected features
                        //symbol = new ();
                        //symbol.setStyle(SimpleMarkerSymbol.STYLE_SQUARE);
                        //symbol.setSize(10);
                        //symbol.setColor(new Color([255, 255, 0, 0.5]));

                        symbol = new SimpleFillSymbol(SimpleFillSymbol.STYLE_SOLID,
                        new SimpleLineSymbol(SimpleLineSymbol.STYLE_SOLID,
                        new Color([255, 0, 0]), 2), new Color([255, 255, 0, 0.25]))

                        //query.where = "NAME = '" + stateName + "'";
                        //query.where = "POP04 > " + population;
                        //query.text = stateName;
                        //query.geometry = evt.mapPoint;
                        query.geometry = event.mapPoint;

                        queryTask.execute(query, showResults);
                        break;

                    case "Subregions":
                        

                        queryTask = new QueryTask(Globals.MapServerPath + "6");
                        query = new Query();
                        query.returnGeometry = true;
                        query.outFields = ["Subregion"];

                        //initialize InfoTemplate
                        //infoTemplate = new InfoTemplate("${CITY_NAME}", "Name : ${CITY_NAME}<br/> State : ${STATE_NAME}<br />Population : ${POP1990}");

                        //create symbol for selected features
                        //symbol = new ();
                        //symbol.setStyle(SimpleMarkerSymbol.STYLE_SQUARE);
                        //symbol.setSize(10);
                        //symbol.setColor(new Color([255, 255, 0, 0.5]));

                        symbol = new SimpleFillSymbol(SimpleFillSymbol.STYLE_SOLID,
                        new SimpleLineSymbol(SimpleLineSymbol.STYLE_SOLID,
                        new Color([255, 0, 0]), 2), new Color([255, 255, 0, 0.25]))

                        //query.where = "NAME = '" + stateName + "'";
                        //query.where = "POP04 > " + population;
                        //query.text = stateName;
                        //query.geometry = evt.mapPoint;
                        query.geometry = event.mapPoint;

                        queryTask.execute(query, showResults);



                        break;
                    case "Nodes":

                       

                        queryTask = new QueryTask(Globals.MapServerPath + "4");
                        query = new Query();
                        query.returnGeometry = true;
                        query.outFields = ["Node_ID"];

                        //initialize InfoTemplate
                        //infoTemplate = new InfoTemplate("${CITY_NAME}", "Name : ${CITY_NAME}<br/> State : ${STATE_NAME}<br />Population : ${POP1990}");

                        //create symbol for selected features
                        //symbol = new ();
                        //symbol.setStyle(SimpleMarkerSymbol.STYLE_SQUARE);
                        //symbol.setSize(10);
                        //symbol.setColor(new Color([255, 255, 0, 0.5]));

                        //symbol = new SimpleFillSymbol(SimpleFillSymbol.STYLE_SOLID,
                        //new SimpleLineSymbol(SimpleLineSymbol.STYLE_SOLID,
                        //new Color([255, 0, 0]), 2), new Color([255, 255, 0, 0.25]))

                        //symbol = new SimpleMarkerSymbol(
                        //SimpleMarkerSymbol.STYLE_SOLID,
                        //new Color([255, 0, 0]),
                        //3);

                        symbol = new SimpleMarkerSymbol({
                            "color": [255, 255, 255, 0],
                            "size": 12,
                            "angle": -30,
                            "xoffset": 0,
                            "yoffset": 0,
                            "type": "esriSMS",
                            "style": "esriSMSCircle",
                            "outline": {
                                "color": [0, 0, 0, 255],
                                "width": 1,
                                "type": "esriSLS",
                                "style": "esriSLSSolid"
                            }
                        });


                        //query.where = "NAME = '" + stateName + "'";
                        //query.where = "POP04 > " + population;
                        //query.text = stateName;
                        //query.geometry = evt.mapPoint;

                        var tol = map.extent.getWidth() / map.width * 5;
                        var x = event.mapPoint.x;
                        var y = event.mapPoint.y;
                        var queryExtent = new esri.geometry.Extent(x - tol, y - tol, x + tol, y + tol, event.mapPoint.spatialReference);
                        //selectionQuery.geometry = queryExtent;

                        //query.geometry = event.mapPoint;
                        query.geometry = queryExtent;

                        queryTask.execute(query, showResults);



                        break;

                }  //Switch


               
            });

       


    function showResults(featureSet) {

        //remove all graphics on the maps graphics layer



        //map.graphics.clear();


      
        //Performance enhancer - assign featureSet array to a single variable.
        var resultFeatures = featureSet.features;

        //Loop through each feature returned
        for (var i = 0, il = resultFeatures.length; i < il; i++) {
            //Get the current feature from the featureSet.
            //Feature is a graphic
            var graphic = resultFeatures[i];
           

            switch (Globals.FeatureType)
            {

                case "Elements":
                    //alert("Element_ID: " + graphic.attributes.Element_ID);
                    $("#idSelectResults").text("Element_ID: " + graphic.attributes.Element_ID);
                    Globals.SelectedID = graphic.attributes.Element_ID;
                    
                    break;
                case "Subregions":
                    //alert("Subregion: " + graphic.attributes.Subregion);
                    $("#idSelectResults").text("Subregion: " + graphic.attributes.Subregion);
                    Globals.SelectedID = graphic.attributes.Subregion;
                    break;
                case "Nodes":
                    $("#idSelectResults").text("Nodes: " + graphic.attributes.Node_ID);
                    Globals.SelectedID = graphic.attributes.Node_ID;
                    break;

            }

            // This facilitates looping of the ID to graph multiple at once
            
            Globals.ArrayOfSelectedIDs.push(Globals.SelectedID);

            graphic.setSymbol(symbol);

            //Set the infoTemplate.
            //graphic.setInfoTemplate(infoTemplate);

            //Add graphic to the map graphics layer.
            map.graphics.add(graphic);
        }
    }
    //switch (Globals.CurrentTool) {
    //    case "FindNearest":
    //        var mp = esri.geometry.webMercatorToGeographic(event.mapPoint);
    //        $('#long_FindNearest').val(mp.x.toFixed(5));
    //        $('#lat_FindNearest').val(mp.y.toFixed(5));
   

    //        break;
    //}
} //mapClick
function DefineChart()
{
    alert("In definechart()");
}
function GetRestData() {
    //alert("In Get Rest Data");

    require([
        "dojo/dom", "dojo/on",
        "esri/tasks/query", "esri/tasks/QueryTask", "dojo/domReady!"
    ], function (dom, on, Query, QueryTask) {



        if (Globals.FeatureType == "") {
            alert("You haven't selected a feature");
            return;

        }
        //var queryTask = new QueryTask("http://54.215.12.164/arcgis/rest/services/IWFM/Nodes_Groundwaterheadatlayer3/MapServer/0");

        // Here is where the switches be happening.
        var switchstring = Globals.FeatureType + " " + Globals.DataType;  // subdatatype will be here.  Blank if not needed
        //alert(switchstring);
        
        //NOTE....the tables that these refer to HAVE TO EXIST.  They are created from the desktop GUI using the export routine.  Then
        // they are moved to the web server.  The mxd that creates the service needs to have the table in it, and the number appended 
        // to the Globals.MapServerPath is that service number.
        switch (switchstring) {
            // case "Nodes Groundwater head at layer 1":
            //     //alert("Got it");
            //     var queryTask = new QueryTask(Globals.MapServerPath + "6"); //THIS MUST CHANGE
            // break;
            // case "Nodes Groundwater head at layer 2":
            //     var queryTask = new QueryTask(Globals.MapServerPath + "7"); //THIS MUST CHANGE
            //     break;
            // case "Nodes Groundwater head at layer 3":
            //     var queryTask = new QueryTask(Globals.MapServerPath + "8"); //THIS MUST CHANGE
            //     break;
            case "Elements Precipitation":
                var queryTask = new QueryTask(Globals.MapServerPath + "8"); //THIS MUST CHANGE
                break;
            default:
                alert("switchstring not found...need to add it.")

        }

        
        var query = new Query();
        query.returnGeometry = false;
        query.outFields = [
          "Element_ID", "Date_", "Value_"
        ];

        
        //alert("Passing in the query: " + Globals.SelectedID)
        var theID;


        //Loop the IDs
      
            var arrayLength = Globals.ArrayOfSelectedIDs.length;
            for (var i = 0; i < arrayLength; i++) {
                theID = Globals.ArrayOfSelectedIDs[i];
      
        //var theID = Globals.SelectedID;
        theID = $.trim(theID);

        query.where = "Element_ID = " + theID;

        queryTask.execute(query, showResults);

        //GlobalPass.Name = Globals.ArrayOfSelectedIDs[i];

        } //for (theID in Globals.ArrayOfSelectedIDs) {


            function showResults(results) {

                //alert("Got something back!!!!");

                //console.log(results);

            var resultItems = [];
            var resultCount = results.features.length;

            //alert(resultCount);

            for (var i = 0; i < resultCount; i++) {


                //seriesEventsData.push([Date.UTC(dt.getFullYear(), dt.getMonth(), dt.getDate(), dt.getHours(), dt.getMinutes(), dt.getSeconds()), Timeseries.Value]);
                resultItems.push([results.features[i].attributes.Date_, results.features[i].attributes.Value_]);

                //var featureAttributes = results.features[i].attributes;
                //for (var attr in featureAttributes) {
                //    resultItems.push("<b>" + attr + ":</b>  " + featureAttributes[attr] + "<br>");
                //}
                //resultItems.push("<br>");

                //alert("Node ID: " + Globals.ArrayOfSelectedIDs[i])
            }

            //GlobalPass.Name = "Diane";
            GlobalPass.Name = Globals.DataType + " ID = " + results.features[0].attributes.Element_ID;
            //GlobalPass.Name = Globals.ArrayOfSelectedIDs;
            GlobalPass.series = resultItems;
            GlobalPass.chartType = 'spline';
            GlobalPass.seriesIndex = 0;
            GlobalPass.ColorSeries[1];
            GlobalPass.pointRange = 0;
            GlobalPass.zIndex = 3;

            //optionsMainChart.series = resultItems;

                //Add the series data
            chartMain.addSeries({
                name: GlobalPass.Name,
                data: GlobalPass.series,
                type: GlobalPass.chartType,
                yAxis: GlobalPass.seriesIndex,
                color: GlobalPass.ColorSeries[GlobalPass.seriesCount],
                pointRange: GlobalPass.pointRange,
                shadow: true,
                zIndex: GlobalPass.zIndex

            });

            //dom.byId("info").innerHTML = resultItems.join("");
        }
    });
}

function GetDataTypeInfo() {  //This is getting FeatureType, DataType, and Subtype
    //alert(Globals.MapServerPath + "9");

    require([
        "dojo/dom", "dojo/on",
        "esri/tasks/query", "esri/tasks/QueryTask", "dojo/domReady!"
    ], function (dom, on, Query, QueryTask) {

        var queryTask = new QueryTask(Globals.MapServerPath + "9");  //THIS MUST CHANGE

        var query = new Query();
        query.returnGeometry = false;
        query.outFields = [
          "FeatureType", "DataType", "SubDataType"
        ];

        //query.text = dom.byId("stateName").value;
        query.where = "1=1";
        queryTask.execute(query, showResults);


        function showResults(results) {

            //alert("Got datatype info back!!!!");

            //console.log(results);
            var resultCount = results.features.length;
            //var array = Create2DArray(10, 20);  Example
            var arr = Create2DArray(resultCount, 3)



            Globals.DataTypeArray = arr;
            Globals.DataTypeArrayResultCount = resultCount;

            //alert(resultCount);

            for (var i = 0; i < resultCount; i++) {


                //seriesEventsData.push([Date.UTC(dt.getFullYear(), dt.getMonth(), dt.getDate(), dt.getHours(), dt.getMinutes(), dt.getSeconds()), Timeseries.Value]);

                //Works
                //Globals.resultItems.push([results.features[i].attributes.FeatureType, results.features[i].attributes.DataType, results.features[i].attributes.SubDataType]);

                Globals.DataTypeArray[i][1] = results.features[i].attributes.FeatureType;
                Globals.DataTypeArray[i][2] = results.features[i].attributes.DataType;
                Globals.DataTypeArray[i][3] = results.features[i].attributes.SubDataType;
                

                //alert("Array length is " + arr.length);
                //var featureAttributes = results.features[i].attributes;
                //for (var attr in featureAttributes) {
                //    resultItems.push("<b>" + attr + ":</b>  " + featureAttributes[attr] + "<br>");
                //}
                //resultItems.push("<br>");
            }

        }
    });
}
function Create2DArray(rows, columns) {
    var x = new Array(rows);
    for (var i = 0; i < rows; i++) {
        x[i] = new Array(columns);
    }
    return x;
}


function PopulateDataTypeControl(sFeatureType) {


    switch(sFeatureType)
    {
        case "CalibrationWell":
            //$("#idDataTypeDropdown").append('<li><a>' + "Deep Percolation" + '</a></li>');

            break;
 //If (sLayerName = "CalibrationWell") Then

 //   Call Get_Feature_Caption("Calibration_ID", FeatureID, FeatureCaption)
 //   If (TotalFtrCnt = 1) Then
 //   lblLayer.Text = "Calibration Well " & FeatureID(1) & " is selected."
 //   Else
 //   lblLayer.Text = "Calibration Wells " & FeatureCaption & " are selected."
 //   End If
 //   If Check_Tbl("Output_GWHydrograph") Then
 //   Call Populate_UniqueLayers("Output_GWHydrograph", "Layer", "GWL Hydrograph", TotalFtrCnt, FeatureID)
 //   End If

        case "Elements":
            $("#idDataTypeDropdown").append('<li><a>' + "Land Use" + '</a></li>');
            $("#idDataTypeDropdown").append('<li><a>' + "Pumping Input" + '</a></li>');  //Dont get this
            $("#idDataTypeDropdown").append('<li><a class="sitelink">' + "Precipitation" + '</a></li>');
            break;
    //ElseIf (sLayerName = "Element") Then
    //Call Get_Feature_Caption("Element_ID", FeatureID, FeatureCaption)
    //If (TotalFtrCnt = 1) Then
    //lblLayer.Text = "Element " & FeatureID(1) & " is selected."
    //Else
    //lblLayer.Text = "Elements " & FeatureCaption & " are selected."
    //End If
    //If Check_Tbl("TSData_LandUse") Then
    //cmbTables.Items.Add("Land Use")
    //End If
    //If Check_Tbl("NTSData_ElementPump") Then
    //If Check_Tbl("TSData_Pumping") Then
            //cmbTables.Items.Add("Land Use")
    //End If
    //End If
    //If Check_Tbl("TSData_Precipitation") Then
    //cmbTables.Items.Add("Precipitation")
    //End If

        case "Subregions":
            $("#idDataTypeDropdown").append('<li><a>' + "Groundwater Budget" + '</a></li>');
            $("#idDataTypeDropdown").append('<li><a>' + "Land & Water Use Budget" + '</a></li>');  //Dont get this
            $("#idDataTypeDropdown").append('<li><a>' + "Soil Moisture Budget" + '</a></li>');
            $("#idDataTypeDropdown").append('<li><a>' + "Stream Budget" + '</a></li>');
            $("#idDataTypeDropdown").append('<li><a>' + "Demand" + '</a></li>');  //Dont get this
            $("#idDataTypeDropdown").append('<li><a>' + "Crop Area" + '</a></li>');
            $("#idDataTypeDropdown").append('<li><a>' + "ET" + '</a></li>');
            $("#idDataTypeDropdown").append('<li><a>' + "Min Soil Mositure" + '</a></li>');  //Dont get this
            $("#idDataTypeDropdown").append('<li><a>' + "Efficency" + '</a></li>');
            $("#idDataTypeDropdown").append('<li><a>' + "Indoor Use" + '</a></li>');
            break;
    //ElseIf (sLayerName = "Subregion") Then
    //Call Get_Feature_Caption("Subregion_ID", FeatureID, FeatureCaption)
    //If (TotalFtrCnt = 1) Then
    //lblLayer.Text = "Subregion " & FeatureID(1) & " is selected."
    //Else
    //lblLayer.Text = "Subregions " & FeatureCaption & " are selected."
    //End If
    //If Check_Tbl("Bud_GW") Then
    //cmbTables.Items.Add("Groundwater Budget")
    //End If
    //If Check_Tbl("Bud_WU") Then
    //cmbTables.Items.Add("Land & Water Use Budget")
    //End If
    //If Check_Tbl("Bud_Soil") Then
    //cmbTables.Items.Add("Soil Moisture Budget")
    //End If
    //If Check_Tbl("Bud_Stream") Then
    //cmbTables.Items.Add("Stream Budget")
    //End If
    //If Check_Tbl("TSData_Demand") Then
    //cmbTables.Items.Add("Demand")
    //End If
    //If Check_Tbl("TSData_CropArea") Then
    //cmbTables.Items.Add("Crop Area")
    //End If
    //If Check_Tbl("TSData_CropCharacteristics") Then
    //cmbTables.Items.Add("ET")
    //cmbTables.Items.Add("Min Soil Mositure")
    //cmbTables.Items.Add("Efficency")
    //End If
    //If Check_Tbl("TSData_IndoorUse") Then
    //cmbTables.Items.Add("Indoor Use")
    //End If

        case "StreamNodes":
            $("#idDataTypeDropdown").append('<li><a>' + "Stream Flow Hydrograph" + '</a></li>');
            $("#idDataTypeDropdown").append('<li><a>' + "Stream Inflow" + '</a></li>');
            $("#idDataTypeDropdown").append('<li><a>' + "Surfacewater Diversion" + '</a></li>');

            break;
    //ElseIf (sLayerName = "StreamNode") Then
    //Call Get_Feature_Caption("StreamNode_ID", FeatureID, FeatureCaption)
    //If (TotalFtrCnt = 1) Then
    //lblLayer.Text = "Stream Node " & FeatureID(1) & " is selected."
    //Else
    //lblLayer.Text = "Stream Nodes " & FeatureCaption & " are selected."
    //End If
    //If Check_Tbl("Output_StreamHydrograph") Then
    //blnStreamNode_Check = StreamNode_Check("Output_StreamHydrograph", "StreamNode_ID", TotalFtrCnt, FeatureID)
    //If blnStreamNode_Check = True Then cmbTables.Items.Add("Stream Flow Hydrograph")
    //End If
    //If Check_Tbl("TSData_Inflow") Then
    //blnStreamNode_Check = StreamNode_Check("TSData_Inflow", "StreamNode_ID", TotalFtrCnt, FeatureID)
    //If blnStreamNode_Check = True Then cmbTables.Items.Add("Stream Inflow")
    //End If

    //If Check_Tbl("TSData_SWDV") Then
    //blnStreamNode_Check = StreamNode_Check("NTSData_DiversionSpecification", "StreamNode_ID", TotalFtrCnt, FeatureID)
    //If blnStreamNode_Check = True Then cmbTables.Items.Add("Surfacewater Diversion")
    //End If
    //If (cmbTables.Items.Count = 0) Then
    //If (TotalFtrCnt = 1) Then
    //MsgBox("The selected stream node does not have any time series data assigned to it!" & vbNewLine & "Please select a new stream node!", MsgBoxStyle.Critical, "WARNING!")
    //blnTSGraphError = True
    //Exit Sub
    //ElseIf (TotalFtrCnt > 1) Then
    //MsgBox("One or all of the selected stream nodes do not have any common time series data assigned to them!" & vbNewLine & "Please select a new stream node or stream nodes!", MsgBoxStyle.Critical, "WARNING!")
    //blnTSGraphError = True
    //Exit Sub
    //End If
    //End If

        case "StreamReaches":

            $("#idDataTypeDropdown").append('<li><a>' + "Stream Reach Budget" + '</a></li>');

            break;

    // ElseIf (sLayerName = "StreamReaches") Then
    // Call Get_Feature_Caption("Reach_ID", FeatureID, FeatureCaption)
    // If (TotalFtrCnt = 1) Then
    // lblLayer.Text = "Stream Reach " & FeatureID(1) & " is selected."
    // Else
    // lblLayer.Text = "Stream Reaches " & FeatureCaption & " are selected."
    // End If
    // If Check_Tbl("Bud_Reach") Then cmbTables.Items.Add("Stream Reach Budget")


        case "ProductionWells":

            $("#idDataTypeDropdown").append('<li><a>' + "Well Pumping" + '</a></li>');

            break;

    //ElseIf (sLayerName = "ProductionWell") Then
    //Call Get_Feature_Caption("Well_ID", FeatureID, FeatureCaption)
    //If (TotalFtrCnt = 1) Then
    //lblLayer.Text = "Production Well " & FeatureID(1) & " is selected."
    //Else
    //lblLayer.Text = "Production Wells " & FeatureCaption & " are selected."
    //End If
    //If Check_Tbl("TSData_Pumping") Then cmbTables.Items.Add("Well Pumping")

        case "Small_Watersheds":

            $("#idDataTypeDropdown").append('<li><a>' + "Small Watershed Budget" + '</a></li>');

            break;


    //ElseIf (sLayerName = "Small_Watersheds") Then
    //Call Get_Feature_Caption("Watershed_ID", FeatureID, FeatureCaption)
    //If (TotalFtrCnt = 1) Then
    //lblLayer.Text = "Small Watershed " & FeatureID(1) & " is selected."
    //Else
    //lblLayer.Text = "Small Watersheds " & FeatureCaption & " are selected."
    //End If
    //If Check_Tbl("Bud_SmallWatershed") Then cmbTables.Items.Add("Small Watershed Budget")
    //End If


    }  //End Switch
   
} //function PopulateDateType() {




function PopulateTheSubDataTypes(sDataType)
{
        switch(sDataType){

    
    //Calibration Well
    case "Groundwater Level Hydrograph Layer 1":
        //Do nothing
        break;
    case "Groundwater Level Hydrograph Layer 2":
        //Do nothing
        break;
    case "Groundwater Level Hydrograph Layer 3":
        //Do nothing
        break;
    case "Groundwater Level Hydrograph Average":
        //Do nothing
        break;
    case "Groundwater Level Hydrograph All Layers":
        //Do nothing
        break;

    //Element
    case "Land Use":
    //cmbBudgetSelection.Visible = True
    //cmbBudgetSelection.Enabled = True
    //lblBudgetSelection.Visible = True
    //cmbBudgetSelection.Items.Clear()
    //'Calling function PopulateNames to populate the combobox for crop type names
    //Call GetNameIDorPopulate("Populate", "Names_", "LandUse_ID", "", "Feature_Type", "", "Value_", "", "", "", "", "", INDX)
        break;
    case "Pumping Input":
    //cmbBudgetSelection.Items.Clear()
    //cmbBudgetSelection.Visible = False
    //cmbBudgetSelection.Enabled = False
        //lblBudgetSelection.Visible = False
        break;
    case "Precipitation":
    //cmbBudgetSelection.Items.Clear()
    //cmbBudgetSelection.Visible = False
    //cmbBudgetSelection.Enabled = False
        //lblBudgetSelection.Visible = False
        break;

    //Subregion
    case "Groundwater Budget":
    // cmbBudgetSelection.Visible = True
    // cmbBudgetSelection.Enabled = True
    // lblBudgetSelection.Visible = True
    // cmbBudgetSelection.Items.Clear()


    $("#idDataTypeDropdown").append('<li><a>' + "Deep Percolation" + '</a></li>');
    $("#idDataTypeDropdown").append('<li><a>' + "Beginning Storage" + '</a></li>');
    $("#idDataTypeDropdown").append('<li><a>' + "Ending Storage" + '</a></li>');
    //cmbBudgetSelection.Items.Add("Deep Percolation")
    //cmbBudgetSelection.Items.Add("Beginning Storage")
    //cmbBudgetSelection.Items.Add("Ending Storage")
    //cmbBudgetSelection.Items.Add("Net Deep Percolation")
    //cmbBudgetSelection.Items.Add("Gain From Stream")
    //cmbBudgetSelection.Items.Add("Recharge")
    //cmbBudgetSelection.Items.Add("Gain From Lake")
    //cmbBudgetSelection.Items.Add("Boundary Inflow")
    //cmbBudgetSelection.Items.Add("Subsidence")
    //cmbBudgetSelection.Items.Add("Subsurface Irrigation")
    //cmbBudgetSelection.Items.Add("Tile Drain Outflow")
    //cmbBudgetSelection.Items.Add("Pumping")
    //cmbBudgetSelection.Items.Add("Net Subsurface Inflow")
    //cmbBudgetSelection.Items.Add("Discrepancy")
    //cmbBudgetSelection.Items.Add("Cumulative Subsidence")
         break;

    case "Land & Water Use Budget":
    //cmbBudgetSelection.Visible = True
    //cmbBudgetSelection.Enabled = True
    //lblBudgetSelection.Visible = True
    //cmbBudgetSelection.Items.Clear()
    //cmbBudgetSelection.Items.Add("AG Area")
    //cmbBudgetSelection.Items.Add("AG Potential CUAW")
    //cmbBudgetSelection.Items.Add("AG Supply Requirment")
    //cmbBudgetSelection.Items.Add("AG Pumping")
    //cmbBudgetSelection.Items.Add("AG Diversion")
    //cmbBudgetSelection.Items.Add("AG Shortage")
    //cmbBudgetSelection.Items.Add("AG Re-Use")
    //cmbBudgetSelection.Items.Add("Urban Area")
    //cmbBudgetSelection.Items.Add("Urban Supply Requirment")
    //cmbBudgetSelection.Items.Add("Urban Pumping")
    //cmbBudgetSelection.Items.Add("Urban Diversion")
    //cmbBudgetSelection.Items.Add("Urban Shortage")
    //cmbBudgetSelection.Items.Add("Urban Re-Use")
    //cmbBudgetSelection.Items.Add("Import")
    //cmbBudgetSelection.Items.Add("Export")
        break;
    case "Soil Moisture Budget":
    //cmbBudgetSelection.Visible = True
    //cmbBudgetSelection.Enabled = True
    //lblBudgetSelection.Visible = True
    //cmbBudgetSelection.Items.Clear()
    //cmbBudgetSelection.Items.Add("AG Area")
    //cmbBudgetSelection.Items.Add("AG Area Precipitation")
    //cmbBudgetSelection.Items.Add("AG Area Runoff")
    //cmbBudgetSelection.Items.Add("AG Area Prime Applied Water")
    //cmbBudgetSelection.Items.Add("AG Area Reused Water")
    //cmbBudgetSelection.Items.Add("AG Area Total Applied Water")
    //cmbBudgetSelection.Items.Add("AG Area Return Flow")
    //cmbBudgetSelection.Items.Add("AG Area Beginning Storage")
    //cmbBudgetSelection.Items.Add("AG Area Net Gain from Land Expansion")
    //cmbBudgetSelection.Items.Add("AG Area Infiltration")
    //cmbBudgetSelection.Items.Add("AG Area Actual ET")
    //cmbBudgetSelection.Items.Add("AG Area Actual Deep Percolation")
    //cmbBudgetSelection.Items.Add("AG Area Ending Storage")
    //cmbBudgetSelection.Items.Add("Urban Area")
    //cmbBudgetSelection.Items.Add("Urban Area Precipitation")
    //cmbBudgetSelection.Items.Add("Urban Area Runoff")
    //cmbBudgetSelection.Items.Add("Urban Area Prime Applied Water")
    //cmbBudgetSelection.Items.Add("Urban Area Reused Water")
    //cmbBudgetSelection.Items.Add("Urban Area Total Applied Water")
    //cmbBudgetSelection.Items.Add("Urban Area Return Flow")
    //cmbBudgetSelection.Items.Add("Urban Area Beginning Storage")
    //cmbBudgetSelection.Items.Add("Urban Area Net Gain from Land Expansion")
    //cmbBudgetSelection.Items.Add("Urban Area Infiltration")
    //cmbBudgetSelection.Items.Add("Urban Area Actual ET")
    //cmbBudgetSelection.Items.Add("Urban Area Actual Deep Percolation")
    //cmbBudgetSelection.Items.Add("Urban Area Ending Storage")
    //cmbBudgetSelection.Items.Add("Undeveloped Area")
    //cmbBudgetSelection.Items.Add("Undeveloped Area Precipitation")
    //cmbBudgetSelection.Items.Add("Undeveloped Area Runoff")
    //cmbBudgetSelection.Items.Add("Undeveloped Area Beginning Storage")
    //cmbBudgetSelection.Items.Add("Undeveloped Area Net Gain from Land Expansion")
    //cmbBudgetSelection.Items.Add("Undeveloped Area Infiltration")
    //cmbBudgetSelection.Items.Add("Undeveloped Area Actual ET")
    //cmbBudgetSelection.Items.Add("Undeveloped Area Actual Deep Percolation")
    //cmbBudgetSelection.Items.Add("Undeveloped Area Ending Storage")
        break;
    case "Stream Budget":
    //cmbBudgetSelection.Visible = True
    //cmbBudgetSelection.Enabled = True
    //lblBudgetSelection.Visible = True
    //cmbBudgetSelection.Items.Clear()
    //cmbBudgetSelection.Items.Add("Upstream Inflow")
    //cmbBudgetSelection.Items.Add("Downstream Outflow")
    //cmbBudgetSelection.Items.Add("Tributary Inflow")
    //cmbBudgetSelection.Items.Add("Tile Drain")
    //cmbBudgetSelection.Items.Add("Runoff")
    //cmbBudgetSelection.Items.Add("Return Flow")
    //cmbBudgetSelection.Items.Add("Gain from Groundwater")
    //cmbBudgetSelection.Items.Add("Gain from Lake")
    //cmbBudgetSelection.Items.Add("Diversion")
    //cmbBudgetSelection.Items.Add("By-pass Flow")
    //cmbBudgetSelection.Items.Add("Discrepancy")
    //cmbBudgetSelection.Items.Add("Diversion Shortage")
        break;

    case "Demand":
    //cmbBudgetSelection.Visible = True
    //cmbBudgetSelection.Enabled = True
    //lblBudgetSelection.Visible = True
    //cmbBudgetSelection.Items.Clear()
    //cmbBudgetSelection.Items.Add("Urban Demand")
        break;

    case "Crop Area":
    //cmbBudgetSelection.Visible = True
    //cmbBudgetSelection.Enabled = True
    //lblBudgetSelection.Visible = True
    //cmbBudgetSelection.Items.Clear()
    //'Calling function PopulateNames to populate the combobox for crop type names
    //Call GetNameIDorPopulate("Populate", "Names_", "Crop_ID", "", "Feature_Type", "", "Value_", "", "", "", "", "", INDX)
        break;
    case "ET":
    //cmbBudgetSelection.Visible = True
    //cmbBudgetSelection.Enabled = True
    //lblBudgetSelection.Visible = True
    //cmbBudgetSelection.Items.Clear()
    //'Calling function PopulateNames to populate the combobox for crop type names
    //Call GetNameIDorPopulate("Populate", "Names_", "Crop_ID", "", "Feature_Type", "", "Value_", "", "", "", "", "", INDX)
        break;
    case "Min Soil Mositure":
    //cmbBudgetSelection.Visible = True
    //cmbBudgetSelection.Enabled = True
    //lblBudgetSelection.Visible = True
    //cmbBudgetSelection.Items.Clear()
    //'Calling function PopulateNames to populate the combobox for crop type names
    //Call GetNameIDorPopulate("Populate", "Names_", "Crop_ID", "", "Feature_Type", "", "Value_", "", "", "", "", "", INDX)
        break;
    case "Efficency":
    //cmbBudgetSelection.Visible = True
    //cmbBudgetSelection.Enabled = True
    //lblBudgetSelection.Visible = True
    //cmbBudgetSelection.Items.Clear()
    //'Calling function PopulateNames to populate the combobox for crop type names
    //Call GetNameIDorPopulate("Populate", "Names_", "Crop_ID", "", "Feature_Type", "", "Value_", "", "", "", "", "", INDX)
        break;
    case "Indoor Use":
    //cmbBudgetSelection.Items.Clear()
    //cmbBudgetSelection.Visible = False
    //cmbBudgetSelection.Enabled = False
    //lblBudgetSelection.Visible = False
        break;
    case "Stream Flow Hydrograph":
    //cmbBudgetSelection.Items.Clear()
    //cmbBudgetSelection.Visible = False
    //cmbBudgetSelection.Enabled = False
    //lblBudgetSelection.Visible = False
        break;
    case "Stream Inflow":
    //cmbBudgetSelection.Items.Clear()
    //cmbBudgetSelection.Visible = False
    //lblBudgetSelection.Visible = False

    //' In the case of just plotting everything (deliviries and losses)
    //Case "Surfacewater Diversion"
    //cmbBudgetSelection.Visible = True
    //cmbBudgetSelection.Enabled = True
    //lblBudgetSelection.Visible = True
    //cmbBudgetSelection.Items.Clear()
    //' In the case of plotting everything (deliviries and losses), we should use 1 or 2 for FtrType2 in function
    //' definition of GetNameIDorPopulate. All the diversions will have single entry in table NTSData_DiversionSpecification
    //' for diversion type 1 or 2 (recoverable loss of nonrecoverable loss respectively).
    //Call GetNameIDorPopulate("Populate", "NTSData_DiversionSpecification", Str(StrNdID), "1", _
    //    "StreamNode_ID", "Diversion_Type", "Diversion_ID", "", "", "", "", "", INDX)
    //If cmbBudgetSelection.Items.Count = 0 Then
    //    MsgBox("There is no surfacewater diversion assigned to the selected stream node!" & Environment.NewLine & "Please select a different stream node!", MsgBoxStyle.Critical, "WARNING!")
    //Me.Hide()
    //Exit Sub
    //ElseIf (cmbBudgetSelection.Items.Count > 1) Then
    //cmbBudgetSelection.Items.Add("All")
    //cmbBudgetSelection.Items.Add("All Statistics")
    //End If
    //' For now we will only have surface water diversion from a stream node which is sum of all the deliviries and losses from
    //' the stream node. Losses and Deliviries will be plotted seperately later.
    //'    Case "Surfacewater Diversion Recoverable Loss"
    //'        Call PopulateDateComboBoxes("TSData_SWDV", "Date_")
    //'         cmbBudgetSelection.enabled = True
    //'         lblBudgetSelection.enabled = True
    //'         cmbBudgetSelection.Clear
    //'        Call GetNameIDorPopulate("Populate", "NTSData_DiversionSpecification", Str(StrNdID), "1", _
    //'            "StreamNode_ID", "Diversion_Type", "SWDV_ID", "", "", "", "", "", INDX)
    //'        If  cmbBudgetSelection.ListCount = 0 Then
    //'          MsgBox (" There are no Surfacewater Diversion Recoverable Losses assigned to the selected stream node. " & _
    //'                "Please select a different stream node.")
    //'          frmTimeSeriesGraph.Hide
    //'          Exit Sub
    //'        End If
    //'    Case "Surfacewater Diversion NonRecoverable Loss"
    //'        Call PopulateDateComboBoxes("TSData_SWDV", "Date_")
    //'         cmbBudgetSelection.enabled = True
    //'         lblBudgetSelection.enabled = True
    //'         cmbBudgetSelection.Clear
    //'        Call GetNameIDorPopulate("Populate", "NTSData_DiversionSpecification", Str(StrNdID), "2", _
    //'            "StreamNode_ID", "Diversion_Type", "SWDV_ID", "", "", "", "", "", INDX)
    //'        If  cmbBudgetSelection.ListCount = 0 Then
    //'          MsgBox (" There are no Surfacewater Diversion NonRecoverable Losses assigned to the selected stream node. " & _
    //'                "Please select a different stream node.")
    //'          frmTimeSeriesGraph.Hide
    //'          Exit Sub
    //'        End If
    //'    Case "Surfacewater Diversion Delivery"
    //'        Call PopulateDateComboBoxes("TSData_SWDV", "Date_")
    //'         cmbBudgetSelection.enabled = True
    //'         lblBudgetSelection.enabled = True
    //'         cmbBudgetSelection.Clear
    //'        Call GetNameIDorPopulate("Populate", "NTSData_DiversionSpecification", Str(StrNdID), "3", _
    //'            "StreamNode_ID", "Diversion_Type", "SWDV_ID", "", "", "", "", "", INDX)
    //'        ' If there are no sw diversions assigned to the selected stream node give a message
    //'        If  cmbBudgetSelection.ListCount = 0 Then
    //'          MsgBox (" There are no Surfacewater Diversion Deliveries assigned to the selected stream node. " & _
    //'                "Please select a different stream node.")
    //'          frmTimeSeriesGraph.Hide
    //'          Exit Sub
    //'        End If

    //' Stream Reach
    case "Stream Reach Budget":
    //cmbBudgetSelection.Visible = True
    //cmbBudgetSelection.Enabled = True
    //lblBudgetSelection.Visible = True
    //cmbBudgetSelection.Items.Clear()
    //cmbBudgetSelection.Items.Add("Upsteram Inflow")
    //cmbBudgetSelection.Items.Add("Downstream Outflow")
    //cmbBudgetSelection.Items.Add("Tributary Inflow")
    //cmbBudgetSelection.Items.Add("Tile Drain")
    //cmbBudgetSelection.Items.Add("Runoff")
    //cmbBudgetSelection.Items.Add("Return Flow")
    //cmbBudgetSelection.Items.Add("Gain from Groundwater")
    //cmbBudgetSelection.Items.Add("Gain from Lake")
    //cmbBudgetSelection.Items.Add("Diversion")
    //cmbBudgetSelection.Items.Add("By-pass Flow")
    //cmbBudgetSelection.Items.Add("Discrepancy")
    //cmbBudgetSelection.Items.Add("Diversion Shortage")
        break;
    //Production Well
    case "Pumping":
        //Do nothing
        break;

    //Rainfall Station
    case "Precipitation":
    //Do nothing
        break;
    //Small Watersheds
    case "Small Watershed Budget":
    //cmbBudgetSelection.Visible = True
    //cmbBudgetSelection.Enabled = True
    //lblBudgetSelection.Visible = True
    //cmbBudgetSelection.Items.Clear()
    //cmbBudgetSelection.Items.Add("Total SW Outflow")
    //cmbBudgetSelection.Items.Add("GW Base Outflow")
    //cmbBudgetSelection.Items.Add("Base Flow + Surface Percolation")
    //cmbBudgetSelection.Items.Add("Net Surface Outflow to Streams")

        break;
        default:
            alert("No match");


}  //End Switch


}
//var array = Create2DArray(10,20);
// array[2][1];  PUT UP IN RETURN AREA



//function PopulateDataTypesFromFeatureType(resultCount) {




//}

//function pointToExtent(map, point, toleranceInPixel) {
//    require(["esri/geometry/Extent"
//    ], function (Extent
//    ) {

//        var pixelWidth = map.extent.getWidth() / map.width;
//        var toleranceInMapCoords = toleranceInPixel * pixelWidth;
//        return new Extent(point.x - toleranceInMapCoords,
//                          point.y - toleranceInMapCoords,
//                          point.x + toleranceInMapCoords,
//                          point.y + toleranceInMapCoords,
//                          map.spatialReference);
//    }); //require
//}