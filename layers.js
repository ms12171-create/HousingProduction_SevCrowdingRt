ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:2263").setExtent([924885.886065, 142811.126372, 1072022.532541, 253623.936347]);
var wms_layers = [];


        var lyr_POSITRONnolabel_0 = new ol.layer.Tile({
            'title': 'POSITRON no label',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://basemaps.cartocdn.com/rastertiles/light_nolabels/{z}/{x}/{y}.png?key=cb1_3usm_1_0d7e153a37374395c55bee13'
            })
        });
var format_MostSeverelyOverCrowdedCommunityDistricts_1 = new ol.format.GeoJSON();
var features_MostSeverelyOverCrowdedCommunityDistricts_1 = format_MostSeverelyOverCrowdedCommunityDistricts_1.readFeatures(json_MostSeverelyOverCrowdedCommunityDistricts_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2263'});
var jsonSource_MostSeverelyOverCrowdedCommunityDistricts_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MostSeverelyOverCrowdedCommunityDistricts_1.addFeatures(features_MostSeverelyOverCrowdedCommunityDistricts_1);
var lyr_MostSeverelyOverCrowdedCommunityDistricts_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MostSeverelyOverCrowdedCommunityDistricts_1, 
                style: style_MostSeverelyOverCrowdedCommunityDistricts_1,
                popuplayertitle: 'Most Severely OverCrowded Community Districts',
                interactive: true,
                title: '<img src="styles/legend/MostSeverelyOverCrowdedCommunityDistricts_1.png" /> Most Severely OverCrowded Community Districts'
            });
var format_Lessthan65percentthreebeds_2 = new ol.format.GeoJSON();
var features_Lessthan65percentthreebeds_2 = format_Lessthan65percentthreebeds_2.readFeatures(json_Lessthan65percentthreebeds_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2263'});
var jsonSource_Lessthan65percentthreebeds_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lessthan65percentthreebeds_2.addFeatures(features_Lessthan65percentthreebeds_2);
var lyr_Lessthan65percentthreebeds_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Lessthan65percentthreebeds_2, 
                style: style_Lessthan65percentthreebeds_2,
                popuplayertitle: 'Less than 6.5 percent three-beds',
                interactive: true,
    title: 'Less than 6.5 percent three-beds<br />\
    <img src="styles/legend/Lessthan65percentthreebeds_2_0.png" /> 1 - 100<br />\
    <img src="styles/legend/Lessthan65percentthreebeds_2_1.png" /> 100 - 200<br />\
    <img src="styles/legend/Lessthan65percentthreebeds_2_2.png" /> 200 - 300<br />\
    <img src="styles/legend/Lessthan65percentthreebeds_2_3.png" /> 300 - 400<br />\
    <img src="styles/legend/Lessthan65percentthreebeds_2_4.png" /> 400 - 500<br />' });
var format_Lessthan212percentthreebeds_3 = new ol.format.GeoJSON();
var features_Lessthan212percentthreebeds_3 = format_Lessthan212percentthreebeds_3.readFeatures(json_Lessthan212percentthreebeds_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2263'});
var jsonSource_Lessthan212percentthreebeds_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lessthan212percentthreebeds_3.addFeatures(features_Lessthan212percentthreebeds_3);
var lyr_Lessthan212percentthreebeds_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Lessthan212percentthreebeds_3, 
                style: style_Lessthan212percentthreebeds_3,
                popuplayertitle: 'Less than 21.2 percent three-beds',
                interactive: true,
    title: 'Less than 21.2 percent three-beds<br />\
    <img src="styles/legend/Lessthan212percentthreebeds_3_0.png" /> 1 - 100<br />\
    <img src="styles/legend/Lessthan212percentthreebeds_3_1.png" /> 100 - 200<br />\
    <img src="styles/legend/Lessthan212percentthreebeds_3_2.png" /> 200 - 300<br />\
    <img src="styles/legend/Lessthan212percentthreebeds_3_3.png" /> 300 - 400<br />\
    <img src="styles/legend/Lessthan212percentthreebeds_3_4.png" /> 400 - 500<br />' });
var format_Lessthan375percentthreebeds_4 = new ol.format.GeoJSON();
var features_Lessthan375percentthreebeds_4 = format_Lessthan375percentthreebeds_4.readFeatures(json_Lessthan375percentthreebeds_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2263'});
var jsonSource_Lessthan375percentthreebeds_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lessthan375percentthreebeds_4.addFeatures(features_Lessthan375percentthreebeds_4);
var lyr_Lessthan375percentthreebeds_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Lessthan375percentthreebeds_4, 
                style: style_Lessthan375percentthreebeds_4,
                popuplayertitle: 'Less than 37.5 percent three-beds',
                interactive: true,
    title: 'Less than 37.5 percent three-beds<br />\
    <img src="styles/legend/Lessthan375percentthreebeds_4_0.png" /> 1 - 100<br />\
    <img src="styles/legend/Lessthan375percentthreebeds_4_1.png" /> 100 - 200<br />\
    <img src="styles/legend/Lessthan375percentthreebeds_4_2.png" /> 200 - 300<br />\
    <img src="styles/legend/Lessthan375percentthreebeds_4_3.png" /> 300 - 400<br />\
    <img src="styles/legend/Lessthan375percentthreebeds_4_4.png" /> 400 - 500<br />' });
var format_Lessthan60percentthreebeds_5 = new ol.format.GeoJSON();
var features_Lessthan60percentthreebeds_5 = format_Lessthan60percentthreebeds_5.readFeatures(json_Lessthan60percentthreebeds_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2263'});
var jsonSource_Lessthan60percentthreebeds_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lessthan60percentthreebeds_5.addFeatures(features_Lessthan60percentthreebeds_5);
var lyr_Lessthan60percentthreebeds_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Lessthan60percentthreebeds_5, 
                style: style_Lessthan60percentthreebeds_5,
                popuplayertitle: 'Less than 60 percent three-beds',
                interactive: true,
    title: 'Less than 60 percent three-beds<br />\
    <img src="styles/legend/Lessthan60percentthreebeds_5_0.png" /> 1 - 100<br />\
    <img src="styles/legend/Lessthan60percentthreebeds_5_1.png" /> 100 - 200<br />\
    <img src="styles/legend/Lessthan60percentthreebeds_5_2.png" /> 200 - 300<br />\
    <img src="styles/legend/Lessthan60percentthreebeds_5_3.png" /> 300 - 400<br />\
    <img src="styles/legend/Lessthan60percentthreebeds_5_4.png" /> 400 - 500<br />' });
var format_Morethan60percentthreebeds_6 = new ol.format.GeoJSON();
var features_Morethan60percentthreebeds_6 = format_Morethan60percentthreebeds_6.readFeatures(json_Morethan60percentthreebeds_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2263'});
var jsonSource_Morethan60percentthreebeds_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Morethan60percentthreebeds_6.addFeatures(features_Morethan60percentthreebeds_6);
var lyr_Morethan60percentthreebeds_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Morethan60percentthreebeds_6, 
                style: style_Morethan60percentthreebeds_6,
                popuplayertitle: 'More than 60 percent three-beds',
                interactive: true,
    title: 'More than 60 percent three-beds<br />\
    <img src="styles/legend/Morethan60percentthreebeds_6_0.png" /> 1 - 100<br />\
    <img src="styles/legend/Morethan60percentthreebeds_6_1.png" /> 100 - 200<br />\
    <img src="styles/legend/Morethan60percentthreebeds_6_2.png" /> 200 - 300<br />\
    <img src="styles/legend/Morethan60percentthreebeds_6_3.png" /> 300 - 400<br />\
    <img src="styles/legend/Morethan60percentthreebeds_6_4.png" /> 400 - 500<br />' });

lyr_POSITRONnolabel_0.setVisible(true);lyr_MostSeverelyOverCrowdedCommunityDistricts_1.setVisible(true);lyr_Lessthan65percentthreebeds_2.setVisible(true);lyr_Lessthan212percentthreebeds_3.setVisible(true);lyr_Lessthan375percentthreebeds_4.setVisible(true);lyr_Lessthan60percentthreebeds_5.setVisible(true);lyr_Morethan60percentthreebeds_6.setVisible(true);
var layersList = [lyr_POSITRONnolabel_0,lyr_MostSeverelyOverCrowdedCommunityDistricts_1,lyr_Lessthan65percentthreebeds_2,lyr_Lessthan212percentthreebeds_3,lyr_Lessthan375percentthreebeds_4,lyr_Lessthan60percentthreebeds_5,lyr_Morethan60percentthreebeds_6];
lyr_MostSeverelyOverCrowdedCommunityDistricts_1.set('fieldAliases', {'fid': 'fid', 'BoroCD': 'BoroCD', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'sevcropct': 'sevcropct', });
lyr_Lessthan65percentthreebeds_2.set('fieldAliases', {'community_district': 'community_district', 'latitude': 'latitude', 'longitude': 'longitude', 'project_start_date': 'project_start_date', 'project_completion_date': 'project_completion_date', 'extremely_low_income_units': 'extremely_low_income_units', 'very_low_income_units': 'very_low_income_units', 'moderate_income_units': 'moderate_income_units', 'middle_income_units': 'middle_income_units', 'other_income_units': 'other_income_units', 'studio_units': 'studio_units', 'x1_br_units': 'x1_br_units', 'x2_br_units': 'x2_br_units', 'x3_br_units': 'x3_br_units', 'x4_br_units': 'x4_br_units', 'x5_br_units': 'x5_br_units', 'x6_br_units': 'x6_br_units', 'unknown_br_units': 'unknown_br_units', 'affordable_rental_units': 'affordable_rental_units', 'affordable_units': 'affordable_units', 'total_units': 'total_units', 'three_plus_br_units': 'three_plus_br_units', 'three_plus_br_pct': 'three_plus_br_pct', 'web_size': 'web_size', 'web_size2': 'web_size2', 'afford_rent_unit': 'afford_rent_unit', 'web_rt': 'web_rt', });
lyr_Lessthan212percentthreebeds_3.set('fieldAliases', {'community_district': 'community_district', 'latitude': 'latitude', 'longitude': 'longitude', 'project_start_date': 'project_start_date', 'project_completion_date': 'project_completion_date', 'extremely_low_income_units': 'extremely_low_income_units', 'very_low_income_units': 'very_low_income_units', 'moderate_income_units': 'moderate_income_units', 'middle_income_units': 'middle_income_units', 'other_income_units': 'other_income_units', 'studio_units': 'studio_units', 'x1_br_units': 'x1_br_units', 'x2_br_units': 'x2_br_units', 'x3_br_units': 'x3_br_units', 'x4_br_units': 'x4_br_units', 'x5_br_units': 'x5_br_units', 'x6_br_units': 'x6_br_units', 'unknown_br_units': 'unknown_br_units', 'affordable_rental_units': 'affordable_rental_units', 'affordable_units': 'affordable_units', 'total_units': 'total_units', 'three_plus_br_units': 'three_plus_br_units', 'three_plus_br_pct': 'three_plus_br_pct', 'web_size': 'web_size', 'web_size2': 'web_size2', 'afford_rent_unit': 'afford_rent_unit', 'web_rt': 'web_rt', });
lyr_Lessthan375percentthreebeds_4.set('fieldAliases', {'community_district': 'community_district', 'latitude': 'latitude', 'longitude': 'longitude', 'project_start_date': 'project_start_date', 'project_completion_date': 'project_completion_date', 'extremely_low_income_units': 'extremely_low_income_units', 'very_low_income_units': 'very_low_income_units', 'moderate_income_units': 'moderate_income_units', 'middle_income_units': 'middle_income_units', 'other_income_units': 'other_income_units', 'studio_units': 'studio_units', 'x1_br_units': 'x1_br_units', 'x2_br_units': 'x2_br_units', 'x3_br_units': 'x3_br_units', 'x4_br_units': 'x4_br_units', 'x5_br_units': 'x5_br_units', 'x6_br_units': 'x6_br_units', 'unknown_br_units': 'unknown_br_units', 'affordable_rental_units': 'affordable_rental_units', 'affordable_units': 'affordable_units', 'total_units': 'total_units', 'three_plus_br_units': 'three_plus_br_units', 'three_plus_br_pct': 'three_plus_br_pct', 'web_size': 'web_size', 'web_size2': 'web_size2', 'afford_rent_unit': 'afford_rent_unit', 'web_rt': 'web_rt', });
lyr_Lessthan60percentthreebeds_5.set('fieldAliases', {'community_district': 'community_district', 'latitude': 'latitude', 'longitude': 'longitude', 'project_start_date': 'project_start_date', 'project_completion_date': 'project_completion_date', 'extremely_low_income_units': 'extremely_low_income_units', 'very_low_income_units': 'very_low_income_units', 'moderate_income_units': 'moderate_income_units', 'middle_income_units': 'middle_income_units', 'other_income_units': 'other_income_units', 'studio_units': 'studio_units', 'x1_br_units': 'x1_br_units', 'x2_br_units': 'x2_br_units', 'x3_br_units': 'x3_br_units', 'x4_br_units': 'x4_br_units', 'x5_br_units': 'x5_br_units', 'x6_br_units': 'x6_br_units', 'unknown_br_units': 'unknown_br_units', 'affordable_rental_units': 'affordable_rental_units', 'affordable_units': 'affordable_units', 'total_units': 'total_units', 'three_plus_br_units': 'three_plus_br_units', 'three_plus_br_pct': 'three_plus_br_pct', 'web_size': 'web_size', 'web_size2': 'web_size2', 'afford_rent_unit': 'afford_rent_unit', 'web_rt': 'web_rt', });
lyr_Morethan60percentthreebeds_6.set('fieldAliases', {'community_district': 'community_district', 'latitude': 'latitude', 'longitude': 'longitude', 'project_start_date': 'project_start_date', 'project_completion_date': 'project_completion_date', 'extremely_low_income_units': 'extremely_low_income_units', 'very_low_income_units': 'very_low_income_units', 'moderate_income_units': 'moderate_income_units', 'middle_income_units': 'middle_income_units', 'other_income_units': 'other_income_units', 'studio_units': 'studio_units', 'x1_br_units': 'x1_br_units', 'x2_br_units': 'x2_br_units', 'x3_br_units': 'x3_br_units', 'x4_br_units': 'x4_br_units', 'x5_br_units': 'x5_br_units', 'x6_br_units': 'x6_br_units', 'unknown_br_units': 'unknown_br_units', 'affordable_rental_units': 'affordable_rental_units', 'affordable_units': 'affordable_units', 'total_units': 'total_units', 'three_plus_br_units': 'three_plus_br_units', 'three_plus_br_pct': 'three_plus_br_pct', 'web_size': 'web_size', 'web_size2': 'web_size2', 'afford_rent_unit': 'afford_rent_unit', 'web_rt': 'web_rt', });
lyr_MostSeverelyOverCrowdedCommunityDistricts_1.set('fieldImages', {'fid': 'TextEdit', 'BoroCD': 'Range', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'sevcropct': 'TextEdit', });
lyr_Lessthan65percentthreebeds_2.set('fieldImages', {'community_district': '', 'latitude': '', 'longitude': '', 'project_start_date': '', 'project_completion_date': '', 'extremely_low_income_units': '', 'very_low_income_units': '', 'moderate_income_units': '', 'middle_income_units': '', 'other_income_units': '', 'studio_units': '', 'x1_br_units': '', 'x2_br_units': '', 'x3_br_units': '', 'x4_br_units': '', 'x5_br_units': '', 'x6_br_units': '', 'unknown_br_units': '', 'affordable_rental_units': '', 'affordable_units': '', 'total_units': '', 'three_plus_br_units': '', 'three_plus_br_pct': '', 'web_size': '', 'web_size2': '', 'afford_rent_unit': '', 'web_rt': '', });
lyr_Lessthan212percentthreebeds_3.set('fieldImages', {'community_district': '', 'latitude': '', 'longitude': '', 'project_start_date': '', 'project_completion_date': '', 'extremely_low_income_units': '', 'very_low_income_units': '', 'moderate_income_units': '', 'middle_income_units': '', 'other_income_units': '', 'studio_units': '', 'x1_br_units': '', 'x2_br_units': '', 'x3_br_units': '', 'x4_br_units': '', 'x5_br_units': '', 'x6_br_units': '', 'unknown_br_units': '', 'affordable_rental_units': '', 'affordable_units': '', 'total_units': '', 'three_plus_br_units': '', 'three_plus_br_pct': '', 'web_size': '', 'web_size2': '', 'afford_rent_unit': '', 'web_rt': '', });
lyr_Lessthan375percentthreebeds_4.set('fieldImages', {'community_district': '', 'latitude': '', 'longitude': '', 'project_start_date': '', 'project_completion_date': '', 'extremely_low_income_units': '', 'very_low_income_units': '', 'moderate_income_units': '', 'middle_income_units': '', 'other_income_units': '', 'studio_units': '', 'x1_br_units': '', 'x2_br_units': '', 'x3_br_units': '', 'x4_br_units': '', 'x5_br_units': '', 'x6_br_units': '', 'unknown_br_units': '', 'affordable_rental_units': '', 'affordable_units': '', 'total_units': '', 'three_plus_br_units': '', 'three_plus_br_pct': '', 'web_size': '', 'web_size2': '', 'afford_rent_unit': '', 'web_rt': '', });
lyr_Lessthan60percentthreebeds_5.set('fieldImages', {'community_district': '', 'latitude': '', 'longitude': '', 'project_start_date': '', 'project_completion_date': '', 'extremely_low_income_units': '', 'very_low_income_units': '', 'moderate_income_units': '', 'middle_income_units': '', 'other_income_units': '', 'studio_units': '', 'x1_br_units': '', 'x2_br_units': '', 'x3_br_units': '', 'x4_br_units': '', 'x5_br_units': '', 'x6_br_units': '', 'unknown_br_units': '', 'affordable_rental_units': '', 'affordable_units': '', 'total_units': '', 'three_plus_br_units': '', 'three_plus_br_pct': '', 'web_size': '', 'web_size2': '', 'afford_rent_unit': '', 'web_rt': '', });
lyr_Morethan60percentthreebeds_6.set('fieldImages', {'community_district': 'Range', 'latitude': 'TextEdit', 'longitude': 'TextEdit', 'project_start_date': 'TextEdit', 'project_completion_date': 'DateTime', 'extremely_low_income_units': 'Range', 'very_low_income_units': 'Range', 'moderate_income_units': 'Range', 'middle_income_units': 'Range', 'other_income_units': 'Range', 'studio_units': 'Range', 'x1_br_units': 'Range', 'x2_br_units': 'Range', 'x3_br_units': 'Range', 'x4_br_units': 'Range', 'x5_br_units': 'Range', 'x6_br_units': 'Range', 'unknown_br_units': 'TextEdit', 'affordable_rental_units': 'TextEdit', 'affordable_units': 'Range', 'total_units': 'Range', 'three_plus_br_units': 'Range', 'three_plus_br_pct': 'TextEdit', 'web_size': 'TextEdit', 'web_size2': 'TextEdit', 'afford_rent_unit': 'Range', 'web_rt': 'TextEdit', });
lyr_MostSeverelyOverCrowdedCommunityDistricts_1.set('fieldLabels', {'fid': 'hidden field', 'BoroCD': 'no label', 'Shape_Leng': 'hidden field', 'Shape_Area': 'hidden field', 'sevcropct': 'no label', });
lyr_Lessthan65percentthreebeds_2.set('fieldLabels', {'community_district': 'inline label - visible with data', 'latitude': 'inline label - visible with data', 'longitude': 'inline label - visible with data', 'project_start_date': 'hidden field', 'project_completion_date': 'inline label - visible with data', 'extremely_low_income_units': 'inline label - visible with data', 'very_low_income_units': 'inline label - visible with data', 'moderate_income_units': 'inline label - visible with data', 'middle_income_units': 'inline label - visible with data', 'other_income_units': 'inline label - visible with data', 'studio_units': 'inline label - visible with data', 'x1_br_units': 'inline label - visible with data', 'x2_br_units': 'inline label - visible with data', 'x3_br_units': 'inline label - visible with data', 'x4_br_units': 'inline label - visible with data', 'x5_br_units': 'inline label - visible with data', 'x6_br_units': 'inline label - visible with data', 'unknown_br_units': 'hidden field', 'affordable_rental_units': 'hidden field', 'affordable_units': 'inline label - visible with data', 'total_units': 'hidden field', 'three_plus_br_units': 'hidden field', 'three_plus_br_pct': 'inline label - visible with data', 'web_size': 'hidden field', 'web_size2': 'hidden field', 'afford_rent_unit': 'hidden field', 'web_rt': 'hidden field', });
lyr_Lessthan212percentthreebeds_3.set('fieldLabels', {'community_district': 'inline label - visible with data', 'latitude': 'inline label - visible with data', 'longitude': 'inline label - visible with data', 'project_start_date': 'hidden field', 'project_completion_date': 'inline label - visible with data', 'extremely_low_income_units': 'inline label - visible with data', 'very_low_income_units': 'inline label - visible with data', 'moderate_income_units': 'inline label - visible with data', 'middle_income_units': 'inline label - visible with data', 'other_income_units': 'inline label - visible with data', 'studio_units': 'inline label - visible with data', 'x1_br_units': 'inline label - visible with data', 'x2_br_units': 'inline label - visible with data', 'x3_br_units': 'inline label - visible with data', 'x4_br_units': 'inline label - visible with data', 'x5_br_units': 'inline label - visible with data', 'x6_br_units': 'inline label - visible with data', 'unknown_br_units': 'hidden field', 'affordable_rental_units': 'hidden field', 'affordable_units': 'inline label - visible with data', 'total_units': 'hidden field', 'three_plus_br_units': 'hidden field', 'three_plus_br_pct': 'inline label - visible with data', 'web_size': 'hidden field', 'web_size2': 'hidden field', 'afford_rent_unit': 'hidden field', 'web_rt': 'hidden field', });
lyr_Lessthan375percentthreebeds_4.set('fieldLabels', {'community_district': 'inline label - visible with data', 'latitude': 'inline label - visible with data', 'longitude': 'inline label - visible with data', 'project_start_date': 'hidden field', 'project_completion_date': 'inline label - visible with data', 'extremely_low_income_units': 'inline label - visible with data', 'very_low_income_units': 'inline label - visible with data', 'moderate_income_units': 'inline label - visible with data', 'middle_income_units': 'inline label - visible with data', 'other_income_units': 'inline label - visible with data', 'studio_units': 'inline label - visible with data', 'x1_br_units': 'inline label - visible with data', 'x2_br_units': 'inline label - visible with data', 'x3_br_units': 'inline label - visible with data', 'x4_br_units': 'inline label - visible with data', 'x5_br_units': 'inline label - visible with data', 'x6_br_units': 'inline label - visible with data', 'unknown_br_units': 'hidden field', 'affordable_rental_units': 'hidden field', 'affordable_units': 'inline label - visible with data', 'total_units': 'hidden field', 'three_plus_br_units': 'hidden field', 'three_plus_br_pct': 'inline label - visible with data', 'web_size': 'hidden field', 'web_size2': 'hidden field', 'afford_rent_unit': 'hidden field', 'web_rt': 'hidden field', });
lyr_Lessthan60percentthreebeds_5.set('fieldLabels', {'community_district': 'inline label - visible with data', 'latitude': 'inline label - visible with data', 'longitude': 'inline label - visible with data', 'project_start_date': 'hidden field', 'project_completion_date': 'inline label - visible with data', 'extremely_low_income_units': 'inline label - visible with data', 'very_low_income_units': 'inline label - visible with data', 'moderate_income_units': 'inline label - visible with data', 'middle_income_units': 'inline label - visible with data', 'other_income_units': 'inline label - visible with data', 'studio_units': 'inline label - visible with data', 'x1_br_units': 'inline label - visible with data', 'x2_br_units': 'inline label - visible with data', 'x3_br_units': 'inline label - visible with data', 'x4_br_units': 'inline label - visible with data', 'x5_br_units': 'inline label - visible with data', 'x6_br_units': 'inline label - visible with data', 'unknown_br_units': 'hidden field', 'affordable_rental_units': 'hidden field', 'affordable_units': 'inline label - visible with data', 'total_units': 'hidden field', 'three_plus_br_units': 'hidden field', 'three_plus_br_pct': 'inline label - visible with data', 'web_size': 'hidden field', 'web_size2': 'hidden field', 'afford_rent_unit': 'hidden field', 'web_rt': 'hidden field', });
lyr_Morethan60percentthreebeds_6.set('fieldLabels', {'community_district': 'inline label - visible with data', 'latitude': 'inline label - visible with data', 'longitude': 'inline label - visible with data', 'project_start_date': 'hidden field', 'project_completion_date': 'inline label - visible with data', 'extremely_low_income_units': 'inline label - visible with data', 'very_low_income_units': 'inline label - visible with data', 'moderate_income_units': 'inline label - visible with data', 'middle_income_units': 'inline label - visible with data', 'other_income_units': 'inline label - visible with data', 'studio_units': 'inline label - visible with data', 'x1_br_units': 'inline label - visible with data', 'x2_br_units': 'inline label - visible with data', 'x3_br_units': 'inline label - visible with data', 'x4_br_units': 'inline label - visible with data', 'x5_br_units': 'inline label - visible with data', 'x6_br_units': 'inline label - visible with data', 'unknown_br_units': 'hidden field', 'affordable_rental_units': 'hidden field', 'affordable_units': 'inline label - visible with data', 'total_units': 'hidden field', 'three_plus_br_units': 'hidden field', 'three_plus_br_pct': 'inline label - visible with data', 'web_size': 'hidden field', 'web_size2': 'hidden field', 'afford_rent_unit': 'hidden field', 'web_rt': 'hidden field', });
lyr_Morethan60percentthreebeds_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});