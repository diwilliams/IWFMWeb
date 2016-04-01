			function PlotIt(GlobalPass) {
			
			//Set up chart header on DataViewer tab
			strHTML = "<p style='color: #FFFFFF; font-size: 12pt'>" + Globals.ReturnCount + " data points returned.</p>"
			
			if (Globals.ReturnCount == 0){
				alert("No data points found in SJRRP database");
				StopSpinner();
				return;
			}
			
			
			//Get out if not records are returned
			//if (Globals.ReturnCount == 0){
			//	return;
			//}
			
			
			$("#idChartHeader").html(strHTML);
		
			
			
			
			
			
			//This sets the color...changes every time
			GlobalPass.seriesCount++;
			
			
			//Set the Axis text
			//axisLabel = GetModifiedAxisLabel(GlobalPass.theType);
			axisLabel = GlobalPass.theDescription;
			
			//Test is a new axis is needed
			//if (theTypeArray[theType] === "undefined")
			if ( typeof theTypeArray[GlobalPass.theType] == 'undefined')
			{
		
			GlobalPass.seriesIndex++;
			theTypeArray[GlobalPass.theType] = GlobalPass.seriesIndex;
			
			if (GlobalPass.theDescription.indexOf("BGS") != -1) {bIsReversed = true;} //if BGS is in the description
		    else {bIsReversed = false;}
			
			 if (bOpposite == true) {bOpposite = false;}
			 else { bOpposite = true; }
			 
			 chartMain.addAxis({ 
			 gridLineWidth: 0,
				id: GlobalPass.theType,
			
				title: {
				text: axisLabel,
					offset: 50
				},
			
			reversed : bIsReversed,
			
				lineWidth: 1,
				 labels: {
                    formatter: function() {
                        return this.value;
                    },
                    style: {
                        color: '#AA4643'
                    }
                },
				//lineColor: '#08F',
				opposite: bOpposite
				//opposite: false,
				
				
			});
			
			}
			else
			{
			GlobalPass.seriesIndex = theTypeArray[GlobalPass.theType];
			}
			
			//Switch the tab
				var mainTab = dijit.byId("idTabContainer"); //Tr
				var subTab = dijit.byId("idDataViewer"); //tab Id which you want to show
				mainTab.selectChild(subTab); //Show the selected Tab
			
			
			//Add the series data
            chartMain.addSeries({
                name: GlobalPass.theStation + " " + GlobalPass.Title + " " + GlobalPass.theDescription,
                data: GlobalPass.series,
				type: GlobalPass.chartType,
				yAxis: GlobalPass.seriesIndex,
				color: GlobalPass.ColorSeries[GlobalPass.seriesCount],
				pointRange: GlobalPass.pointRange,
				shadow : true,
				zIndex : GlobalPass.zIndex

				});	

				

				//Stop the spinner
				StopSpinner();
			}
			function GetModifiedAxisLabel(string) {
			
					switch (string)
					{
					case "Flow":
						return "Flow (cfs)";
					break;
					case "Depth":
						return "Depth (feet BGS)";
					break; 
					case "Temperature":
						return "Temperature (C)";
					break;
					default:
					alert("Type " + string + " not found in switch");
					return("Type Not Found in Plot.js")
					} //end switch
					}