/* Created by Biatov Anton
	author="anton.biatov[at]gmail.com"
	version="2014.12.04"
*/
/* Basemap Layers */
		var osm = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
			attribution: '&copy; <a href="http://osm.org/copyright" target="_blank">OpenStreetMap</a> contributors'
		});

		var ArcGISWorldImagery = L.tileLayer('http://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
			maxZoom: 17,
			attribution:'Tiles &copy;<a href="http://www.esri.com/" target="_blank"> Esri</a> — Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
		});


/* Добавляем слой npp_slobozhanskiy */

            var npp_slobozhanskiylayer = L.geoJson(null, {
                style: function (feature) {
				 {
						return {
							color: "#ff4500",
							fill: false,
							opacity: 0.5,
						};
					}

                },
/* всплывающее описание метки в виде таблички */
                onEachFeature: function (feature, layernpp_slobozhanskiy) {
                    if (feature.properties) {
                        var contentzone =   "<table class='table table-striped table-bordered table-condensed'>"+
                                            "<tr><th>Назва</th><td>" + feature.properties.NAME + "</td></tr>"+
                                            "<tr><th>Тел.:</th><td>" + feature.properties.TEL + "</td></tr>"+
                                            "<tr><th>Веб-сайт</th><td><a class='url-break' href='" + feature.properties.URL + "' target='_blank'>" + feature.properties.URL2 + "</a></td></tr>"+
                                            "<tr><th>Адреса</th><td>" + feature.properties.ADDRESS1 + "</td></tr>"+
                                        "</table>";
                        layernpp_slobozhanskiy.bindPopup(contentzone, {
                            
							closeButton: true,
							minWidth: 120,
							minHeight: 25
                        });
                    }
                    layernpp_slobozhanskiy.on({
                        mouseover: function(e) {
                            var layernpp_slobozhanskiy = e.target;
                            layernpp_slobozhanskiy.setStyle({
                                weight: 5,
                                color: "#00FFFF",
                                opacity: 1
                            });
                            if (!L.Browser.ie && !L.Browser.opera) {
                                layernpp_slobozhanskiy.bringToFront();
                            }
                        },
                        mouseout: function(e) {
                            npp_slobozhanskiylayer.resetStyle(e.target);
                        }
                    });
                }
            });
			
            $.getJSON("data/npp_slobozhanskiy.geojson", function (data) {
                npp_slobozhanskiylayer.addData(data);
            });


		

			var markerClusters = new L.MarkerClusterGroup({
			  spiderfyOnMaxZoom: true,
			  showCoverageOnHover: false,
			  zoomToBoundsOnClick: true,
			  disableClusteringAtZoom: 16
			});
	


		var map = new L.Map('map', {
				layers: [osm, npp_slobozhanskiylayer, markerClusters],
				center: new L.LatLng(50.0800, 35.2400),
				zoom: 12
,
				});


/* ============================ */
/* ============================ */

/* Добавляем слой walking_path*/
var walking_pathlayer = L.geoJson(null, {
  style: function (feature) {
    			{
      return {
        color: "#00ff00",
        weight: 4,
        opacity: 1
      };
   }
 },
/* всплывающее описание метки в виде таблички */
                onEachFeature: function (feature, layerwalking_path) {
                    if (feature.properties) {
                        var contentzone =   "<table class='table table-striped table-bordered table-condensed'>"+
                                            "<tr><th>Назва</th><td>" + feature.properties.name + "</td></tr>"+
                                            "<tr><th>Довжина екостежки</th><td>" + feature.properties.length + "</td></tr>"+
"<tr><th>Маршрут для GPS-навігатора</th><td><a class='url-break' href='" + feature.properties.download + "' download>" +'Звантажити файл'+ "</a></td></tr>"+
                                            "</table>";
                      layerwalking_path.bindPopup(contentzone, {
                            
							closeButton: true,
							minWidth: 120,
							minHeight: 25
                        });
                     }
                    layerwalking_path.on({
                        mouseover: function(e) {
                            var layerwalking_path = e.target;
                            layerwalking_path.setStyle({
                                weight: 3,
                                color: "#00FFFF",
                                opacity: 1
                            });
                            if (!L.Browser.ie && !L.Browser.opera) {
                                layerwalking_path.bringToFront();
                            }
                        },
                        mouseout: function(e) {
                            walking_pathlayer.resetStyle(e.target);
                        }
                    });
               }
            });
			
            $.getJSON("data/walking_path.geojson", function (data) {
                walking_pathlayer.addData(data);
            });


/* ============================ */

/* Добавляем слой tourist_path*/
var tourist_pathlayer = L.geoJson(null, {
  style: function (feature) {
    			{
      return {
        color: "#0055ff",
        weight: 3,
        opacity: 1
      };
   }
 },
/* всплывающее описание метки в виде таблички */
                onEachFeature: function (feature, layertourist_path) {
                    if (feature.properties) {
                        var contentzone =   "<table class='table table-striped table-bordered table-condensed'>"+
                                            "<tr><th>Назва</th><td>" + feature.properties.name + "</td></tr>"+
                                            "<tr><th>Довжина екостежки</th><td>" + feature.properties.length + "</td></tr>"+
"<tr><th>Маршрут для GPS-навігатора</th><td><a class='url-break' href='" + feature.properties.download + "' download>" +'Звантажити файл'+ "</a></td></tr>"+
                                            "</table>";
                      layertourist_path.bindPopup(contentzone, {
                            
							closeButton: true,
							minWidth: 120,
							minHeight: 25
                        });
                     }
                    layertourist_path.on({
                        mouseover: function(e) {
                            var layertourist_path = e.target;
                            layertourist_path.setStyle({
                                weight: 3,
                                color: "#00FFFF",
                                opacity: 1
                            });
                            if (!L.Browser.ie && !L.Browser.opera) {
                                layertourist_path.bringToFront();
                            }
                        },
                        mouseout: function(e) {
                            tourist_pathlayer.resetStyle(e.target);
                        }
                    });
               }
            });
			
            $.getJSON("data/tourist_path.geojson", function (data) {
                tourist_pathlayer.addData(data);
            });


/* ============================ */
/* ============================ */

/* Добавляем слой cycle_route*/
var cycle_routelayer = L.geoJson(null, {
  style: function (feature) {
    if (feature.properties.typ === "1") {
      return {
        color: "#ce06cb",
        weight: 4,
        opacity: 1
      };
    }
    if (feature.properties.typ === "2") {
      return {
        color: "#ce06cb",
        weight: 3,
        opacity: 1
      };
    }
 },
/* всплывающее описание метки в виде таблички */
                onEachFeature: function (feature, layercycle_route) {
                    if (feature.properties) {
                        var contentzone =   "<table class='table table-striped table-bordered table-condensed'>"+
                                            "<tr><th>Маршрут</th><td>" + feature.properties.name + "</td></tr>"+
                                            "<tr><th>Довжина маршруту</th><td>" + feature.properties.length + "</td></tr>"+
"<tr><th>Маршрут для GPS-навігатора</th><td><a class='url-break' href='" + feature.properties.download + "' download>" +'Звантажити файл'+ "</a></td></tr>"+
                                            "</table>";
                      layercycle_route.bindPopup(contentzone, {
                            
							closeButton: true,
							minWidth: 120,
							minHeight: 25
                        });
                     }
                    layercycle_route.on({
                        mouseover: function(e) {
                            var layercycle_route = e.target;
                            layercycle_route.setStyle({
                                weight: 3,
                                color: "#00FFFF",
                                opacity: 1
                            });
                            if (!L.Browser.ie && !L.Browser.opera) {
                                layercycle_route.bringToFront();
                            }
                        },
                        mouseout: function(e) {
                            cycle_routelayer.resetStyle(e.target);
                        }
                    });
               }
            });
			
            $.getJSON("data/cycle_route.geojson", function (data) {
                cycle_routelayer.addData(data);
            });


/* Добавляем слой foot_route*/
var foot_routelayer = L.geoJson(null, {
  style: function (feature) {
    			{
      return {
        color: "#ff008a",
        weight: 3,
        opacity: 1
      };
   }
 },
/* всплывающее описание метки в виде таблички */
                onEachFeature: function (feature, layerfoot_route) {
                    if (feature.properties) {
                        var contentzone =   "<table class='table table-striped table-bordered table-condensed'>"+
                                            "<tr><th>Маршрут</th><td>" + feature.properties.name + "</td></tr>"+
                                            "<tr><th>Довжина маршруту</th><td>" + feature.properties.length + "</td></tr>"+
"<tr><th>Маршрут для GPS-навігатора</th><td><a class='url-break' href='" + feature.properties.download + "' download>" +'Звантажити файл'+ "</a></td></tr>"+
                                            "</table>";
                      layerfoot_route.bindPopup(contentzone, {
                            
							closeButton: true,
							minWidth: 120,
							minHeight: 25
                        });
                     }
                    layerfoot_route.on({
                        mouseover: function(e) {
                            var layerfoot_route = e.target;
                            layerfoot_route.setStyle({
                                weight: 3,
                                color: "#00FFFF",
                                opacity: 1
                            });
                            if (!L.Browser.ie && !L.Browser.opera) {
                                layerfoot_route.bringToFront();
                            }
                        },
                        mouseout: function(e) {
                            foot_routelayer.resetStyle(e.target);
                        }
                    });
               }
            });
			
            $.getJSON("data/foot_route.geojson", function (data) {
                foot_routelayer.addData(data);
            });

/* Добавляем слой office */

			var officeLayer = L.geoJson(null);
			var office = L.geoJson(null, {
			  pointToLayer: function (feature, latlng) {
				return L.marker(latlng, {
				  icon: L.icon({
					iconUrl: "pictogram/office.png",
					iconSize: [25, 25],
				  }),
				  title: feature.properties.name,
				  riseOnHover: true
				});
			  },

                onEachFeature: function (feature, layerkvartal) {
                    if (feature.properties) {
			                        var contentzone =   "<table class='table table-striped table-bordered table-condensed'>" + "<tr><th>Будівля</th><td>" + feature.properties.name + "</td></tr>"+
                                        "</table>";

                        layerkvartal.bindPopup(contentzone, {
                            
							closeButton: true,
							minWidth: 120,
							minHeight: 25
                        });
                    }

                }


			});
			$.getJSON("data/office.geojson", function (data) {
			  office.addData(data);
			  map.addLayer(officeLayer);
			});

			map.on("overlayadd", function(e) {
			  if (e.layer === officeLayer) {
				markerClusters.addLayer(office);
			  }
			});

			map.on("overlayremove", function(e) {
			  if (e.layer === officeLayer) {
				markerClusters.removeLayer(office);
			  }
			});

/* Добавляем слой camping */

			var campingLayer = L.geoJson(null);
			var camping = L.geoJson(null, {
			  pointToLayer: function (feature, latlng) {
				return L.marker(latlng, {
				  icon: L.icon({
					iconUrl: "pictogram/camping.png",
					iconSize: [25, 25],
				  }),
				  title: feature.properties.name,
				  riseOnHover: true
				});
			  },

                onEachFeature: function (feature, layerkvartal) {
                    if (feature.properties) {
                        var contentzone =   "<table class='table table-striped table-bordered table-condensed'>" + "<tr><th>Пункт відпочинку</th><td>" + feature.properties.name + "</td></tr>"+
                                        "</table>";
                        layerkvartal.bindPopup(contentzone, {
                            
							closeButton: true,
							minWidth: 120,
							minHeight: 25
                        });
                    }

                }


			});
			$.getJSON("data/camping.geojson", function (data) {
			  camping.addData(data);
			  map.addLayer(campingLayer);
			});
/*
<img src='" + feature.properties.urlimg + "' width="200" height="150" alt="Фото">
*/

			map.on("overlayadd", function(e) {
			  if (e.layer === campingLayer) {
				markerClusters.addLayer(camping);
			  }
			});

			map.on("overlayremove", function(e) {
			  if (e.layer === campingLayer) {
				markerClusters.removeLayer(camping);
			  }
			});

/* Добавляем слой bus_station */

			var bus_stationLayer = L.geoJson(null);
			var bus_station = L.geoJson(null, {
			  pointToLayer: function (feature, latlng) {
				return L.marker(latlng, {
				  icon: L.icon({
					iconUrl: "pictogram/bus_station.png",
					iconSize: [25, 25],
				  }),
				  title: feature.properties.name,
				  riseOnHover: true
				});
			  },

                onEachFeature: function (feature, layerkvartal) {
                    if (feature.properties) {
                        var contentzone =   "<table class='table table-striped table-bordered table-condensed'>"+
                                            "<tr><th>Зупинка</th><td>" + feature.properties.name + "</td></tr>"+
                                        "</table>";
                        layerkvartal.bindPopup(contentzone, {
                            
							closeButton: true,
							minWidth: 120,
							minHeight: 25
                        });
                    }

                }


			});
			$.getJSON("data/bus_station.geojson", function (data) {
			  bus_station.addData(data);
			  map.addLayer(bus_stationLayer);
			});



			map.on("overlayadd", function(e) {
			  if (e.layer === bus_stationLayer) {
				markerClusters.addLayer(bus_station);
			  }
			});

			map.on("overlayremove", function(e) {
			  if (e.layer === bus_stationLayer) {
				markerClusters.removeLayer(bus_station);
			  }
			});


/* Добавляем слой train_station */

			var train_stationLayer = L.geoJson(null);
			var train_station = L.geoJson(null, {
			  pointToLayer: function (feature, latlng) {
				return L.marker(latlng, {
				  icon: L.icon({
					iconUrl: "pictogram/train_station.png",
					iconSize: [25, 25],
				  }),
				  title: feature.properties.name,
				  riseOnHover: true
				});
			  },

                onEachFeature: function (feature, layerkvartal) {
                    if (feature.properties) {
                        var contentzone =   "<table class='table table-striped table-bordered table-condensed'>"+
                                        "<tr><th>Назва</th><td>" + feature.properties.name + "</td></tr>"+
					"<tr><th>Напрямок руху</th><td>" + feature.properties.course + "</td></tr>" +
					"<tr><th>Розклад руху поїздів</th><td><a class='url-break' href='" + feature.properties.URL + "' target='_blank'>" + feature.properties.URL + "</a></td></tr>"+ 
                                       "</table>";
                        layerkvartal.bindPopup(contentzone, {
                            
							closeButton: true,
							minWidth: 120,
							minHeight: 25
                        });   
                    }

                }


			});
			$.getJSON("data/train_station.geojson", function (data) {
			  train_station.addData(data);
			  map.addLayer(train_stationLayer);
			});



			map.on("overlayadd", function(e) {
			  if (e.layer === train_stationLayer) {
				markerClusters.addLayer(train_station);
			  }
			});

			map.on("overlayremove", function(e) {
			  if (e.layer === train_stationLayer) {
				markerClusters.removeLayer(train_station);
			  }
			});

/* Меню выбора отображения слоев */
	
			var baseLayers = {
				"OpenStreetMap": osm,
/*				"map1.eu": map1eu,	*/
/*				"MapQuest": mapquestOSM,	*/
				"ArcGIS World Imagery": ArcGISWorldImagery,  
			};

			var overlayLayers = {
				"НПП Слобожанський": npp_slobozhanskiylayer,
				"<img src='pictogram/walking_path.png' width='25' height='25'>&nbsp;Екологічні стежки": walking_pathlayer,
				"<img src='pictogram/tourist_path.png' width='25' height='25'>&nbsp;Туристські маршрути": tourist_pathlayer,
				"<img src='pictogram/office.png' width='25' height='25'>&nbsp;Адміністративні будівлі НПП": officeLayer,
				"<img src='pictogram/camping.png' width='25' height='25'>&nbsp;Пункти відпочинку": campingLayer,
				"<img src='pictogram/train_station.png' width='25' height='25'>&nbsp;Залізничні станції": train_stationLayer,	
				"<img src='pictogram/bus_station.png' width='25' height='25'>&nbsp;Автобусні зупинки": bus_stationLayer,
				"&nbsp;<img src='pictogram/cycleroute.png' width='20' height='25'>&nbsp;Веломаршрути до НПП": cycle_routelayer,
				"&nbsp;<img src='pictogram/footroute.png' width='20' height='25'>&nbsp;Пішохідні шляхи до НПП": foot_routelayer, 
			};	
		
			
            var layerControl = L.control.layers(baseLayers, overlayLayers, {
                collapsed: true
            }).addTo(map);	



			
			 L.Control.fileLayerLoad({
					// See http://leafletjs.com/reference.html#geojson-options
					layerOptions: {style: {color:'red', clickable: false, fill: false, weight: 2}},
					// Add to map after loading (default: true) ?
					addToMap: true,
					// File size limit in kb (default: 1024) ?
					fileSizeLimit: 1024
				}).addTo(map);

	
map.attributionControl.addAttribution('| Created by <a href="https://www.facebook.com/biatovanton" target="_blank">Biatov Anton</a> |');
	