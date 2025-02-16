var wms_layers = [];


        var lyr_CartoDark_0 = new ol.layer.Tile({
            'title': 'Carto Dark',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://a.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png'
            })
        });
var format_WaterwayRivers_1 = new ol.format.GeoJSON();
var features_WaterwayRivers_1 = format_WaterwayRivers_1.readFeatures(json_WaterwayRivers_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WaterwayRivers_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WaterwayRivers_1.addFeatures(features_WaterwayRivers_1);
var lyr_WaterwayRivers_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_WaterwayRivers_1, 
                style: style_WaterwayRivers_1,
                popuplayertitle: 'WaterwayRivers',
                interactive: true,
                title: '<img src="styles/legend/WaterwayRivers_1.png" /> WaterwayRivers'
            });
var format_IrisanBounds_2 = new ol.format.GeoJSON();
var features_IrisanBounds_2 = format_IrisanBounds_2.readFeatures(json_IrisanBounds_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_IrisanBounds_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IrisanBounds_2.addFeatures(features_IrisanBounds_2);
var lyr_IrisanBounds_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_IrisanBounds_2, 
                style: style_IrisanBounds_2,
                popuplayertitle: 'Irisan Bounds',
                interactive: true,
                title: '<img src="styles/legend/IrisanBounds_2.png" /> Irisan Bounds'
            });
var format_Geotag1_3 = new ol.format.GeoJSON();
var features_Geotag1_3 = format_Geotag1_3.readFeatures(json_Geotag1_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Geotag1_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Geotag1_3.addFeatures(features_Geotag1_3);
var lyr_Geotag1_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Geotag1_3, 
                style: style_Geotag1_3,
                popuplayertitle: 'Geotag1',
                interactive: true,
                title: '<img src="styles/legend/Geotag1_3.png" /> Geotag1'
            });
var format_Geotag2_4 = new ol.format.GeoJSON();
var features_Geotag2_4 = format_Geotag2_4.readFeatures(json_Geotag2_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Geotag2_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Geotag2_4.addFeatures(features_Geotag2_4);
var lyr_Geotag2_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Geotag2_4, 
                style: style_Geotag2_4,
                popuplayertitle: 'Geotag2',
                interactive: true,
                title: '<img src="styles/legend/Geotag2_4.png" /> Geotag2'
            });
var format_POIs_5 = new ol.format.GeoJSON();
var features_POIs_5 = format_POIs_5.readFeatures(json_POIs_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_POIs_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_POIs_5.addFeatures(features_POIs_5);
var lyr_POIs_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_POIs_5, 
                style: style_POIs_5,
                popuplayertitle: 'POIs',
                interactive: true,
                title: '<img src="styles/legend/POIs_5.png" /> POIs'
            });
var format_building_yes_6 = new ol.format.GeoJSON();
var features_building_yes_6 = format_building_yes_6.readFeatures(json_building_yes_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_building_yes_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_building_yes_6.addFeatures(features_building_yes_6);
var lyr_building_yes_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_building_yes_6, 
                style: style_building_yes_6,
                popuplayertitle: 'building_yes',
                interactive: true,
                title: '<img src="styles/legend/building_yes_6.png" /> building_yes'
            });
var format_building_yes_7 = new ol.format.GeoJSON();
var features_building_yes_7 = format_building_yes_7.readFeatures(json_building_yes_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_building_yes_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_building_yes_7.addFeatures(features_building_yes_7);
var lyr_building_yes_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_building_yes_7, 
                style: style_building_yes_7,
                popuplayertitle: 'building_yes',
                interactive: true,
                title: '<img src="styles/legend/building_yes_7.png" /> building_yes'
            });
var format_building_yes_8 = new ol.format.GeoJSON();
var features_building_yes_8 = format_building_yes_8.readFeatures(json_building_yes_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_building_yes_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_building_yes_8.addFeatures(features_building_yes_8);
var lyr_building_yes_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_building_yes_8, 
                style: style_building_yes_8,
                popuplayertitle: 'building_yes',
                interactive: true,
                title: '<img src="styles/legend/building_yes_8.png" /> building_yes'
            });
var group_group1 = new ol.layer.Group({
                                layers: [lyr_building_yes_6,lyr_building_yes_7,lyr_building_yes_8,],
                                fold: "open",
                                title: 'group1'});

lyr_CartoDark_0.setVisible(true);lyr_WaterwayRivers_1.setVisible(true);lyr_IrisanBounds_2.setVisible(true);lyr_Geotag1_3.setVisible(true);lyr_Geotag2_4.setVisible(true);lyr_POIs_5.setVisible(true);lyr_building_yes_6.setVisible(true);lyr_building_yes_7.setVisible(true);lyr_building_yes_8.setVisible(true);
var layersList = [lyr_CartoDark_0,lyr_WaterwayRivers_1,lyr_IrisanBounds_2,lyr_Geotag1_3,lyr_Geotag2_4,lyr_POIs_5,group_group1];
lyr_WaterwayRivers_1.set('fieldAliases', {'full_id': 'Water', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'waterway': 'waterway', 'accuracy': 'accuracy', 'tunnel': 'tunnel', 'descriptio': 'descriptio', 'width': 'width', 'tidal': 'tidal', 'intermitte': 'intermitte', 'maxspeed': 'maxspeed', 'layer': 'layer', 'wikipedia': 'wikipedia', 'check_date': 'check_date', 'name_tl': 'name_tl', 'name': 'name', });
lyr_IrisanBounds_2.set('fieldAliases', {'id': 'id', });
lyr_Geotag1_3.set('fieldAliases', {'id': 'id', 'geotagged': 'geotagged', });
lyr_Geotag2_4.set('fieldAliases', {'id': 'id', });
lyr_POIs_5.set('fieldAliases', {'id': 'id', });
lyr_building_yes_6.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'building': 'building', 'service_times:school': 'service_times:school', 'service_times:prayer_meeting': 'service_times:prayer_meeting', 'service_times:choir_practice': 'service_times:choir_practice', 'service_times': 'service_times', 'contact:phone': 'contact:phone', 'self_service': 'self_service', 'laundry_service': 'laundry_service', 'takeaway': 'takeaway', 'description': 'description', 'handrail': 'handrail', 'entrance': 'entrance', 'addr:place': 'addr:place', 'start_date': 'start_date', 'old_name': 'old_name', 'disused:shop': 'disused:shop', 'contact:mobile': 'contact:mobile', 'contact:facebook': 'contact:facebook', 'contact:email': 'contact:email', 'addr:building': 'addr:building', 'service:scan': 'service:scan', 'service:print': 'service:print', 'service:gaming': 'service:gaming', 'service:copy': 'service:copy', 'service:computer': 'service:computer', 'opening_hours': 'opening_hours', 'craft': 'craft', 'check_date': 'check_date', 'addr:quarter': 'addr:quarter', 'addr:postcode': 'addr:postcode', 'addr:neighbourhood': 'addr:neighbourhood', 'addr:housenumber': 'addr:housenumber', 'addr:country': 'addr:country', 'addr:city': 'addr:city', 'shop': 'shop', 'noname': 'noname', 'addr:street': 'addr:street', 'religion': 'religion', 'amenity': 'amenity', 'shelter': 'shelter', 'name': 'name', });
lyr_building_yes_7.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'barrier': 'barrier', });
lyr_building_yes_8.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'building': 'building', 'short_name': 'short_name', 'payment:cash': 'payment:cash', 'man_made': 'man_made', 'content': 'content', 'contact:mobile': 'contact:mobile', 'ref': 'ref', 'addr:lot': 'addr:lot', 'addr:block': 'addr:block', 'layer': 'layer', 'old_addr:housenumber': 'old_addr:housenumber', 'craft': 'craft', 'building:use': 'building:use', 'roof:colour': 'roof:colour', 'survey:date': 'survey:date', 'building:levels': 'building:levels', 'name:es': 'name:es', 'office': 'office', 'description': 'description', 'nohousenumber': 'nohousenumber', 'religion': 'religion', 'denomination': 'denomination', 'amenity': 'amenity', 'addr:place': 'addr:place', 'tourism': 'tourism', 'operator': 'operator', 'opening_hours': 'opening_hours', 'contact:website': 'contact:website', 'contact:phone': 'contact:phone', 'contact:facebook': 'contact:facebook', 'contact:email': 'contact:email', 'addr:town': 'addr:town', 'addr:province': 'addr:province', 'addr:hamlet': 'addr:hamlet', 'shop': 'shop', 'name': 'name', 'check_date': 'check_date', 'addr:street': 'addr:street', 'addr:quarter': 'addr:quarter', 'addr:postcode': 'addr:postcode', 'addr:neighbourhood': 'addr:neighbourhood', 'addr:housenumber': 'addr:housenumber', 'addr:country': 'addr:country', 'addr:city': 'addr:city', 'type': 'type', });
lyr_WaterwayRivers_1.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'waterway': 'TextEdit', 'accuracy': 'TextEdit', 'tunnel': 'TextEdit', 'descriptio': 'TextEdit', 'width': 'TextEdit', 'tidal': 'TextEdit', 'intermitte': 'TextEdit', 'maxspeed': 'TextEdit', 'layer': 'TextEdit', 'wikipedia': 'TextEdit', 'check_date': 'TextEdit', 'name_tl': 'TextEdit', 'name': 'TextEdit', });
lyr_IrisanBounds_2.set('fieldImages', {'id': 'TextEdit', });
lyr_Geotag1_3.set('fieldImages', {'id': 'TextEdit', 'geotagged': 'TextEdit', });
lyr_Geotag2_4.set('fieldImages', {'id': 'TextEdit', });
lyr_POIs_5.set('fieldImages', {'id': 'TextEdit', });
lyr_building_yes_6.set('fieldImages', {'full_id': '', 'osm_id': '', 'osm_type': '', 'building': '', 'service_times:school': '', 'service_times:prayer_meeting': '', 'service_times:choir_practice': '', 'service_times': '', 'contact:phone': '', 'self_service': '', 'laundry_service': '', 'takeaway': '', 'description': '', 'handrail': '', 'entrance': '', 'addr:place': '', 'start_date': '', 'old_name': '', 'disused:shop': '', 'contact:mobile': '', 'contact:facebook': '', 'contact:email': '', 'addr:building': '', 'service:scan': '', 'service:print': '', 'service:gaming': '', 'service:copy': '', 'service:computer': '', 'opening_hours': '', 'craft': '', 'check_date': '', 'addr:quarter': '', 'addr:postcode': '', 'addr:neighbourhood': '', 'addr:housenumber': '', 'addr:country': '', 'addr:city': '', 'shop': '', 'noname': '', 'addr:street': '', 'religion': '', 'amenity': '', 'shelter': '', 'name': '', });
lyr_building_yes_7.set('fieldImages', {'full_id': '', 'osm_id': '', 'osm_type': '', 'barrier': '', });
lyr_building_yes_8.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'building': 'TextEdit', 'short_name': 'TextEdit', 'payment:cash': 'TextEdit', 'man_made': 'TextEdit', 'content': 'TextEdit', 'contact:mobile': 'TextEdit', 'ref': 'TextEdit', 'addr:lot': 'TextEdit', 'addr:block': 'TextEdit', 'layer': 'TextEdit', 'old_addr:housenumber': 'TextEdit', 'craft': 'TextEdit', 'building:use': 'TextEdit', 'roof:colour': 'TextEdit', 'survey:date': 'TextEdit', 'building:levels': 'TextEdit', 'name:es': 'TextEdit', 'office': 'TextEdit', 'description': 'TextEdit', 'nohousenumber': 'TextEdit', 'religion': 'TextEdit', 'denomination': 'TextEdit', 'amenity': 'TextEdit', 'addr:place': 'TextEdit', 'tourism': 'TextEdit', 'operator': 'TextEdit', 'opening_hours': 'TextEdit', 'contact:website': 'TextEdit', 'contact:phone': 'TextEdit', 'contact:facebook': 'TextEdit', 'contact:email': 'TextEdit', 'addr:town': 'TextEdit', 'addr:province': 'TextEdit', 'addr:hamlet': 'TextEdit', 'shop': 'TextEdit', 'name': 'TextEdit', 'check_date': 'TextEdit', 'addr:street': 'TextEdit', 'addr:quarter': 'TextEdit', 'addr:postcode': 'TextEdit', 'addr:neighbourhood': 'TextEdit', 'addr:housenumber': 'TextEdit', 'addr:country': 'TextEdit', 'addr:city': 'TextEdit', 'type': 'TextEdit', });
lyr_WaterwayRivers_1.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'waterway': 'no label', 'accuracy': 'no label', 'tunnel': 'no label', 'descriptio': 'no label', 'width': 'no label', 'tidal': 'no label', 'intermitte': 'no label', 'maxspeed': 'no label', 'layer': 'no label', 'wikipedia': 'no label', 'check_date': 'no label', 'name_tl': 'no label', 'name': 'no label', });
lyr_IrisanBounds_2.set('fieldLabels', {'id': 'no label', });
lyr_Geotag1_3.set('fieldLabels', {'id': 'no label', 'geotagged': 'no label', });
lyr_Geotag2_4.set('fieldLabels', {'id': 'no label', });
lyr_POIs_5.set('fieldLabels', {'id': 'no label', });
lyr_building_yes_6.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'building': 'no label', 'service_times:school': 'no label', 'service_times:prayer_meeting': 'no label', 'service_times:choir_practice': 'no label', 'service_times': 'no label', 'contact:phone': 'no label', 'self_service': 'no label', 'laundry_service': 'no label', 'takeaway': 'no label', 'description': 'no label', 'handrail': 'no label', 'entrance': 'no label', 'addr:place': 'no label', 'start_date': 'no label', 'old_name': 'no label', 'disused:shop': 'no label', 'contact:mobile': 'no label', 'contact:facebook': 'no label', 'contact:email': 'no label', 'addr:building': 'no label', 'service:scan': 'no label', 'service:print': 'no label', 'service:gaming': 'no label', 'service:copy': 'no label', 'service:computer': 'no label', 'opening_hours': 'no label', 'craft': 'no label', 'check_date': 'no label', 'addr:quarter': 'no label', 'addr:postcode': 'no label', 'addr:neighbourhood': 'no label', 'addr:housenumber': 'no label', 'addr:country': 'no label', 'addr:city': 'no label', 'shop': 'no label', 'noname': 'no label', 'addr:street': 'no label', 'religion': 'no label', 'amenity': 'no label', 'shelter': 'no label', 'name': 'no label', });
lyr_building_yes_7.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'barrier': 'no label', });
lyr_building_yes_8.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'building': 'no label', 'short_name': 'no label', 'payment:cash': 'no label', 'man_made': 'no label', 'content': 'no label', 'contact:mobile': 'no label', 'ref': 'no label', 'addr:lot': 'no label', 'addr:block': 'no label', 'layer': 'no label', 'old_addr:housenumber': 'no label', 'craft': 'no label', 'building:use': 'no label', 'roof:colour': 'no label', 'survey:date': 'no label', 'building:levels': 'no label', 'name:es': 'no label', 'office': 'no label', 'description': 'no label', 'nohousenumber': 'no label', 'religion': 'no label', 'denomination': 'no label', 'amenity': 'no label', 'addr:place': 'no label', 'tourism': 'no label', 'operator': 'no label', 'opening_hours': 'no label', 'contact:website': 'no label', 'contact:phone': 'no label', 'contact:facebook': 'no label', 'contact:email': 'no label', 'addr:town': 'no label', 'addr:province': 'no label', 'addr:hamlet': 'no label', 'shop': 'no label', 'name': 'no label', 'check_date': 'no label', 'addr:street': 'no label', 'addr:quarter': 'no label', 'addr:postcode': 'no label', 'addr:neighbourhood': 'no label', 'addr:housenumber': 'no label', 'addr:country': 'no label', 'addr:city': 'no label', 'type': 'no label', });
lyr_building_yes_8.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});