var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });

        var lyr_OSMStandard_1 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_GEOMORPHOLOGY_2 = new ol.format.GeoJSON();
var features_GEOMORPHOLOGY_2 = format_GEOMORPHOLOGY_2.readFeatures(json_GEOMORPHOLOGY_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GEOMORPHOLOGY_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GEOMORPHOLOGY_2.addFeatures(features_GEOMORPHOLOGY_2);
var lyr_GEOMORPHOLOGY_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GEOMORPHOLOGY_2, 
                style: style_GEOMORPHOLOGY_2,
                popuplayertitle: 'GEOMORPHOLOGY',
                interactive: false,
    title: 'GEOMORPHOLOGY<br />\
    <img src="styles/legend/GEOMORPHOLOGY_2_0.png" /> Denudational Hills<br />\
    <img src="styles/legend/GEOMORPHOLOGY_2_1.png" /> Denudational Structural Hills<br />\
    <img src="styles/legend/GEOMORPHOLOGY_2_2.png" /> Lower Plateau (Lateritic) - Dissected<br />\
    <img src="styles/legend/GEOMORPHOLOGY_2_3.png" /> Piedmont Zone<br />\
    <img src="styles/legend/GEOMORPHOLOGY_2_4.png" /> Rock Exposure<br />\
    <img src="styles/legend/GEOMORPHOLOGY_2_5.png" /> <br />' });
var format_GEOLOGY_3 = new ol.format.GeoJSON();
var features_GEOLOGY_3 = format_GEOLOGY_3.readFeatures(json_GEOLOGY_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GEOLOGY_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GEOLOGY_3.addFeatures(features_GEOLOGY_3);
var lyr_GEOLOGY_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GEOLOGY_3, 
                style: style_GEOLOGY_3,
                popuplayertitle: 'GEOLOGY',
                interactive: false,
    title: 'GEOLOGY<br />\
    <img src="styles/legend/GEOLOGY_3_0.png" /> Basic Rocks<br />\
    <img src="styles/legend/GEOLOGY_3_1.png" /> Charnockite group of rocks<br />\
    <img src="styles/legend/GEOLOGY_3_2.png" /> Migmatite Complex<br />\
    <img src="styles/legend/GEOLOGY_3_3.png" /> <br />' });
var format_SOIL_4 = new ol.format.GeoJSON();
var features_SOIL_4 = format_SOIL_4.readFeatures(json_SOIL_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SOIL_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SOIL_4.addFeatures(features_SOIL_4);
var lyr_SOIL_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SOIL_4, 
                style: style_SOIL_4,
                popuplayertitle: 'SOIL',
                interactive: false,
    title: 'SOIL<br />\
    <img src="styles/legend/SOIL_4_0.png" /> 5<br />\
    <img src="styles/legend/SOIL_4_1.png" /> 6<br />\
    <img src="styles/legend/SOIL_4_2.png" /> <br />' });
var lyr_DIDGITALELEVATIONMAP_5 = new ol.layer.Image({
        opacity: 1,
        
    title: 'DIDGITAL ELEVATION MAP<br />\
    <img src="styles/legend/DIDGITALELEVATIONMAP_5_0.png" /> 14<br />\
    <img src="styles/legend/DIDGITALELEVATIONMAP_5_1.png" /> 1895<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/DIDGITALELEVATIONMAP_5.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [8431724.758696, 1306264.832198, 8450556.305889, 1316496.099080]
        })
    });
var lyr_HILLSHADE_6 = new ol.layer.Image({
        opacity: 1,
        
    title: 'HILLSHADE<br />\
    <img src="styles/legend/HILLSHADE_6_0.png" /> 1<br />\
    <img src="styles/legend/HILLSHADE_6_1.png" /> 181<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/HILLSHADE_6.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [8431724.758696, 1306264.832198, 8450556.305889, 1316496.099080]
        })
    });
var lyr_SLOPE_KAVIL_7 = new ol.layer.Image({
        opacity: 1,
        
    title: 'SLOPE_KAVIL<br />\
    <img src="styles/legend/SLOPE_KAVIL_7_0.png" /> 0<br />\
    <img src="styles/legend/SLOPE_KAVIL_7_1.png" /> 67.7983<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/SLOPE_KAVIL_7.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [8431698.016261, 1306209.501914, 8450589.144539, 1316551.852980]
        })
    });
var format_KAVIL_BOUNDARY_8 = new ol.format.GeoJSON();
var features_KAVIL_BOUNDARY_8 = format_KAVIL_BOUNDARY_8.readFeatures(json_KAVIL_BOUNDARY_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KAVIL_BOUNDARY_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KAVIL_BOUNDARY_8.addFeatures(features_KAVIL_BOUNDARY_8);
var lyr_KAVIL_BOUNDARY_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KAVIL_BOUNDARY_8, 
                style: style_KAVIL_BOUNDARY_8,
                popuplayertitle: 'KAVIL_BOUNDARY',
                interactive: false,
                title: '<img src="styles/legend/KAVIL_BOUNDARY_8.png" /> KAVIL_BOUNDARY'
            });
var format_CONTOUR_9 = new ol.format.GeoJSON();
var features_CONTOUR_9 = format_CONTOUR_9.readFeatures(json_CONTOUR_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CONTOUR_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CONTOUR_9.addFeatures(features_CONTOUR_9);
var lyr_CONTOUR_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CONTOUR_9, 
                style: style_CONTOUR_9,
                popuplayertitle: 'CONTOUR',
                interactive: false,
                title: '<img src="styles/legend/CONTOUR_9.png" /> CONTOUR'
            });
var format_DRAINAGE_10 = new ol.format.GeoJSON();
var features_DRAINAGE_10 = format_DRAINAGE_10.readFeatures(json_DRAINAGE_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DRAINAGE_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DRAINAGE_10.addFeatures(features_DRAINAGE_10);
var lyr_DRAINAGE_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DRAINAGE_10, 
                style: style_DRAINAGE_10,
                popuplayertitle: 'DRAINAGE',
                interactive: false,
    title: 'DRAINAGE<br />\
    <img src="styles/legend/DRAINAGE_10_0.png" /> 1<br />\
    <img src="styles/legend/DRAINAGE_10_1.png" /> 2<br />\
    <img src="styles/legend/DRAINAGE_10_2.png" /> 3<br />\
    <img src="styles/legend/DRAINAGE_10_3.png" /> 4<br />\
    <img src="styles/legend/DRAINAGE_10_4.png" /> 5<br />\
    <img src="styles/legend/DRAINAGE_10_5.png" /> <br />' });
var format_ROAD_11 = new ol.format.GeoJSON();
var features_ROAD_11 = format_ROAD_11.readFeatures(json_ROAD_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ROAD_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ROAD_11.addFeatures(features_ROAD_11);
var lyr_ROAD_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ROAD_11, 
                style: style_ROAD_11,
                popuplayertitle: 'ROAD',
                interactive: false,
                title: '<img src="styles/legend/ROAD_11.png" /> ROAD'
            });
var format_KAVILUMPARA_12 = new ol.format.GeoJSON();
var features_KAVILUMPARA_12 = format_KAVILUMPARA_12.readFeatures(json_KAVILUMPARA_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KAVILUMPARA_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KAVILUMPARA_12.addFeatures(features_KAVILUMPARA_12);
var lyr_KAVILUMPARA_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KAVILUMPARA_12, 
                style: style_KAVILUMPARA_12,
                popuplayertitle: 'KAVILUMPARA',
                interactive: false,
    title: 'KAVILUMPARA<br />\
    <img src="styles/legend/KAVILUMPARA_12_0.png" /> <br />\
    <img src="styles/legend/KAVILUMPARA_12_1.png" /> ASWASI<br />\
    <img src="styles/legend/KAVILUMPARA_12_2.png" /> BELMOUNT<br />\
    <img src="styles/legend/KAVILUMPARA_12_3.png" /> CHAPPANTHOTTAM<br />\
    <img src="styles/legend/KAVILUMPARA_12_4.png" /> KALANGODE<br />\
    <img src="styles/legend/KAVILUMPARA_12_5.png" /> KARIMUNDA<br />\
    <img src="styles/legend/KAVILUMPARA_12_6.png" /> KARINGAD<br />\
    <img src="styles/legend/KAVILUMPARA_12_7.png" /> KOODALIL<br />\
    <img src="styles/legend/KAVILUMPARA_12_8.png" /> KUNDUTHODE<br />\
    <img src="styles/legend/KAVILUMPARA_12_9.png" /> MOYILOTHARA<br />\
    <img src="styles/legend/KAVILUMPARA_12_10.png" /> NAGAMPARA<br />\
    <img src="styles/legend/KAVILUMPARA_12_11.png" /> PAIKKALANGADI<br />\
    <img src="styles/legend/KAVILUMPARA_12_12.png" /> POOTHAMPARA<br />\
    <img src="styles/legend/KAVILUMPARA_12_13.png" /> PUTHUKKAD<br />\
    <img src="styles/legend/KAVILUMPARA_12_14.png" /> THEKKELAKKANDI<br />\
    <img src="styles/legend/KAVILUMPARA_12_15.png" /> THOTTILPALAM<br />\
    <img src="styles/legend/KAVILUMPARA_12_16.png" /> VANNATHIYETT<br />\
    <img src="styles/legend/KAVILUMPARA_12_17.png" /> VATTIPANA<br />' });

lyr_GoogleSatellite_0.setVisible(true);lyr_OSMStandard_1.setVisible(true);lyr_GEOMORPHOLOGY_2.setVisible(true);lyr_GEOLOGY_3.setVisible(true);lyr_SOIL_4.setVisible(true);lyr_DIDGITALELEVATIONMAP_5.setVisible(true);lyr_HILLSHADE_6.setVisible(true);lyr_SLOPE_KAVIL_7.setVisible(true);lyr_KAVIL_BOUNDARY_8.setVisible(true);lyr_CONTOUR_9.setVisible(true);lyr_DRAINAGE_10.setVisible(true);lyr_ROAD_11.setVisible(true);lyr_KAVILUMPARA_12.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_OSMStandard_1,lyr_GEOMORPHOLOGY_2,lyr_GEOLOGY_3,lyr_SOIL_4,lyr_DIDGITALELEVATIONMAP_5,lyr_HILLSHADE_6,lyr_SLOPE_KAVIL_7,lyr_KAVIL_BOUNDARY_8,lyr_CONTOUR_9,lyr_DRAINAGE_10,lyr_ROAD_11,lyr_KAVILUMPARA_12];
lyr_GEOMORPHOLOGY_2.set('fieldAliases', {'NAME': 'NAME', 'TYPE1': 'TYPE1', 'TYPE2': 'TYPE2', });
lyr_GEOLOGY_3.set('fieldAliases', {'ROCK_GROUP': 'ROCK_GROUP', 'NAME': 'NAME', });
lyr_SOIL_4.set('fieldAliases', {'id': 'id', 'AREA': 'AREA', 'PERIMETER': 'PERIMETER', 'SOIL': 'SOIL', });
lyr_KAVIL_BOUNDARY_8.set('fieldAliases', {'id': 'id', });
lyr_CONTOUR_9.set('fieldAliases', {'ID': 'ID', 'ELEV': 'ELEV', });
lyr_DRAINAGE_10.set('fieldAliases', {'ORDER1': 'ORDER1', });
lyr_ROAD_11.set('fieldAliases', {'NAME': 'NAME', 'Length': 'Length', });
lyr_KAVILUMPARA_12.set('fieldAliases', {'gml_parent': 'gml_parent', 'gml_pare_1': 'gml_pare_1', 'gml_id': 'gml_id', 'geom': 'geom', 'District': 'District', 'LSGD': 'LSGD', 'Ward_Name': 'Ward_Name', 'Ward_No': 'Ward_No', 'Lsgd_Type': 'Lsgd_Type', 'Created_Da': 'Created_Da', 'Surveyor': 'Surveyor', 'Mob_No': 'Mob_No', 'Remarks': 'Remarks', '_distLsgd': '_distLsgd', 'OBJECTID': 'OBJECTID', '_result': '_result', '_ulid': '_ulid', '_distLsgd2': '_distLsgd2', });
lyr_GEOMORPHOLOGY_2.set('fieldImages', {'NAME': 'TextEdit', 'TYPE1': 'TextEdit', 'TYPE2': 'TextEdit', });
lyr_GEOLOGY_3.set('fieldImages', {'ROCK_GROUP': 'TextEdit', 'NAME': 'TextEdit', });
lyr_SOIL_4.set('fieldImages', {'id': 'TextEdit', 'AREA': 'TextEdit', 'PERIMETER': 'TextEdit', 'SOIL': 'TextEdit', });
lyr_KAVIL_BOUNDARY_8.set('fieldImages', {'id': 'TextEdit', });
lyr_CONTOUR_9.set('fieldImages', {'ID': '', 'ELEV': '', });
lyr_DRAINAGE_10.set('fieldImages', {'ORDER1': 'Range', });
lyr_ROAD_11.set('fieldImages', {'NAME': 'TextEdit', 'Length': 'TextEdit', });
lyr_KAVILUMPARA_12.set('fieldImages', {'gml_parent': 'TextEdit', 'gml_pare_1': 'TextEdit', 'gml_id': 'TextEdit', 'geom': 'TextEdit', 'District': 'TextEdit', 'LSGD': 'TextEdit', 'Ward_Name': 'TextEdit', 'Ward_No': 'TextEdit', 'Lsgd_Type': 'TextEdit', 'Created_Da': 'TextEdit', 'Surveyor': 'TextEdit', 'Mob_No': 'TextEdit', 'Remarks': 'TextEdit', '_distLsgd': 'TextEdit', 'OBJECTID': 'TextEdit', '_result': 'TextEdit', '_ulid': 'TextEdit', '_distLsgd2': 'TextEdit', });
lyr_GEOMORPHOLOGY_2.set('fieldLabels', {'NAME': 'no label', 'TYPE1': 'inline label - always visible', 'TYPE2': 'no label', });
lyr_GEOLOGY_3.set('fieldLabels', {'ROCK_GROUP': 'no label', 'NAME': 'no label', });
lyr_SOIL_4.set('fieldLabels', {'id': 'no label', 'AREA': 'no label', 'PERIMETER': 'no label', 'SOIL': 'no label', });
lyr_KAVIL_BOUNDARY_8.set('fieldLabels', {'id': 'no label', });
lyr_CONTOUR_9.set('fieldLabels', {'ID': 'no label', 'ELEV': 'no label', });
lyr_DRAINAGE_10.set('fieldLabels', {'ORDER1': 'no label', });
lyr_ROAD_11.set('fieldLabels', {'NAME': 'no label', 'Length': 'no label', });
lyr_KAVILUMPARA_12.set('fieldLabels', {'gml_parent': 'no label', 'gml_pare_1': 'no label', 'gml_id': 'no label', 'geom': 'no label', 'District': 'no label', 'LSGD': 'no label', 'Ward_Name': 'no label', 'Ward_No': 'no label', 'Lsgd_Type': 'no label', 'Created_Da': 'no label', 'Surveyor': 'no label', 'Mob_No': 'no label', 'Remarks': 'no label', '_distLsgd': 'no label', 'OBJECTID': 'no label', '_result': 'no label', '_ulid': 'no label', '_distLsgd2': 'no label', });
lyr_KAVILUMPARA_12.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});