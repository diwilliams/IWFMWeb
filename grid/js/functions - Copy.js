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

    //The btn-group is needed on this so all dropdown button text values dont changed at once to the same thing on dropdown select.
    $("#idFeatureTypeDropdown li a").click(function () {
        $(this).closest('.btn-group').find(".btn:first-child").text($(this).text());
        $(this).closest('.btn-group').find(".btn:first-child").val($(this).text());

        //alert($(this).text());
        var listArr = [];
        // Lets get the data types
        for (var i = 0; i < Globals.DataTypeArrayResultCount; i++) { 


            //seriesEventsData.push([Date.UTC(dt.getFullYear(), dt.getMonth(), dt.getDate(), dt.getHours(), dt.getMinutes(), dt.getSeconds()), Timeseries.Value]);

            //Works
            //Globals.resultItems.push([results.features[i].attributes.FeatureType, results.features[i].attributes.DataType, results.features[i].attributes.SubDataType]);
            //alert(Globals.DataTypeArray[i][1] + " ==  " + $(this).text());
            if (Globals.DataTypeArray[i][1] == $(this).text()) {   // Looking for matches e.g. SubRegion
                //alert("Appending " + Globals.DataTypeArray[i][2])
                
                listArr.push(Globals.DataTypeArray[i][2]);

                //$("#idDataTypeDropdown").append('<li>' + Globals.DataTypeArray[i][2] + '</li>');
                //<li role="presentation"><a role="menuitem" tabindex="-1" href="#">SubRegion</a></li>
                
            }
        }
            var uniqueListArr = unique(listArr);

            $("#idDataTypeDropdown").children().remove();  //Clear out matters

            for (var j = 0; j < uniqueListArr.length; j++) {

                $("#idDataTypeDropdown").append('<li role="presentation"><a role="menuitem" class="sitelink" tabindex="-1" href="#">' + uniqueListArr[j] + '</a></li>');

            }

            Globals.FeatureType = $(this).text();
    });

    $("#idDataTypeDropdown").on("click", ".sitelink", function (e) {

        $(this).closest('.btn-group').find(".btn:first-child").text($(this).text());
        $(this).closest('.btn-group').find(".btn:first-child").val($(this).text());

        //alert("Setting " + $(this).text());
        Globals.DataType = $(this).text();


            listArr = [];
        // Lets get the data types
           
            for (var i = 0; i < Globals.DataTypeArrayResultCount; i++) {


                //seriesEventsData.push([Date.UTC(dt.getFullYear(), dt.getMonth(), dt.getDate(), dt.getHours(), dt.getMinutes(), dt.getSeconds()), Timeseries.Value]);

                //Works
                //Globals.resultItems.push([results.features[i].attributes.FeatureType, results.features[i].attributes.DataType, results.features[i].attributes.SubDataType]);
                //alert(Globals.DataTypeArray[i][2] + " ==  " + $(this).text());
                if (Globals.DataTypeArray[i][2] == $(this).text()) {   // Looking for matches e.g. SubRegion
                    //alert("Hit - Appending " + Globals.DataTypeArray[i][3])


                    if (Globals.DataTypeArray[i][3] != 0) {
                        listArr.push(Globals.DataTypeArray[i][3]);
                    }
                    

                    //$("#idDataTypeDropdown").append('<li>' + Globals.DataTypeArray[i][2] + '</li>');
                    //<li role="presentation"><a role="menuitem" tabindex="-1" href="#">SubRegion</a></li>

                }

            }

            var uniqueListArr = unique(listArr);

            if (uniqueListArr.length == 0) {
                alert("There a no sub data types");
                //Disable dropdown???
                return;
            }


            $("#idDataTypeDropdown").children().remove();

            for (var j = 0; j < uniqueListArr.length; j++) {
                $("#idSubDataTypeDropdown").append('<li role="presentation"><a role="menuitem" class="sitelink" tabindex="-1" href="#">' + listArr[j] + '</a></li>');
            }


           

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
    $("#idDivTimeseries").hide("show");

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



                switch (Globals.SelectedDataType)
                {
        
                    case "Elements":

                        queryTask = new QueryTask(Globals.MapServerPath + "3");
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
                        

                        queryTask = new QueryTask(Globals.MapServerPath + "5");
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

                       

                        queryTask = new QueryTask(Globals.MapServerPath + "1");
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
           

            switch (Globals.SelectedDataType)
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



        if (Globals.SelectedDataType == "") {
            alert("You haven't selected a feature");
            return;

        }
        //var queryTask = new QueryTask("http://54.215.12.164/arcgis/rest/services/IWFM/Nodes_Groundwaterheadatlayer3/MapServer/0");

        // Here is where the switches be happening.
        var switchstring = Globals.FeatureType + " " + Globals.DataType;  // subdatatype will be here.  Blank if not needed

        
        //NOTE....the tables that these refer to HAVE TO EXIST.  They are created from the desktop GUI using the export routine.  Then
        // they are moved to the web server.  The mxd that creates the service needs to have the table in it, and the number appended 
        // to the Globals.MapServerPath is that service number.
        switch (switchstring) {
            case "Nodes Groundwater head at layer 1":
                //alert("Got it");
                var queryTask = new QueryTask(Globals.MapServerPath + "6"); //THIS MUST CHANGE
            break;
            case "Nodes Groundwater head at layer 2":
                var queryTask = new QueryTask(Globals.MapServerPath + "7"); //THIS MUST CHANGE
                break;
            case "Nodes Groundwater head at layer 3":
                var queryTask = new QueryTask(Globals.MapServerPath + "8"); //THIS MUST CHANGE
                break;
            case "Elements Precipitation":
                var queryTask = new QueryTask(Globals.MapServerPath + "8"); //THIS MUST CHANGE
                break;
            default:
                alert("switchstring not found...need to add it.")

        }

        
        var query = new Query();
        query.returnGeometry = false;
        query.outFields = [
          "Date_", "Value"
        ];

        
        //alert("Passing in the query: " + Globals.SelectedID)
        var theID;



        



        //Loop the IDs
      
            var arrayLength = Globals.ArrayOfSelectedIDs.length;
            for (var i = 0; i < arrayLength; i++) {
                theID = Globals.ArrayOfSelectedIDs[i];
      
        //var theID = Globals.SelectedID;
        theID = $.trim(theID);

        query.where = "ID = " + theID;

        queryTask.execute(query, showResults);

        } //for (theID in Globals.ArrayOfSelectedIDs) {


            function showResults(results) {

                //alert("Got something back!!!!");

                //console.log(results);

            var resultItems = [];
            var resultCount = results.features.length;

            //alert(resultCount);

            for (var i = 0; i < resultCount; i++) {


                //seriesEventsData.push([Date.UTC(dt.getFullYear(), dt.getMonth(), dt.getDate(), dt.getHours(), dt.getMinutes(), dt.getSeconds()), Timeseries.Value]);
                resultItems.push([results.features[i].attributes.Date_, results.features[i].attributes.Value]);

                //var featureAttributes = results.features[i].attributes;
                //for (var attr in featureAttributes) {
                //    resultItems.push("<b>" + attr + ":</b>  " + featureAttributes[attr] + "<br>");
                //}
                //resultItems.push("<br>");
            }

            GlobalPass.Name = "Diane";
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