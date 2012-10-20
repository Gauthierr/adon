<!DOCTYPE head PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<head>
	<title><?php echo $title ?> - version de présentation [pré-alpha]</title>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<?php
	if(isset($css_files))
	{
		foreach($css_files as $file):
	    echo '<link type="text/css" rel="stylesheet" href="'.base_url().'assets/css/'.$file.'.css" />';
		endforeach;
	} ?>
	
	<link rel="stylesheet" href="http://cdn.leafletjs.com/leaflet-0.4/leaflet.css" />
	<!--[if lte IE 8]>
		<link rel="stylesheet" href="http://cdn.leafletjs.com/leaflet-0.4/leaflet.ie.css" />
	<![endif]-->
	<script src="http://cdn.leafletjs.com/leaflet-0.4/leaflet.js"></script>
	
	<?php
	// plugin leaflet -> marker cluster
	echo '<link rel="stylesheet" href="'.base_url().'assets/leaflet/plugin/markercluster/MarkerCluster.css" />
		  <link rel="stylesheet" href="'.base_url().'assets/leaflet/plugin/markercluster/MarkerCluster.Default.css" />
		  <!--[if lte IE 8]><link rel="stylesheet" href="'.base_url().'assets/leaflet/plugin/markercluster/MarkerCluster.Default.ie.css" /><![endif]-->
		  <script src="'.base_url().'assets/leaflet/plugin/markercluster/leaflet.markercluster-src.js"></script>
		  <script src="'.base_url().'assets/test_data/realworld.388.js"></script>';
	?>
	
</head>

<body>
	<div id="map"></div>
	<script type="text/javascript">

	var cloudmadeUrl = 'http://{s}.tile.cloudmade.com/BC9A493B41014CAABB98F0471D759707/997/256/{z}/{x}/{y}.png',
	cloudmadeAttribution = 'Map data &copy; 2011 OpenStreetMap contributors, Imagery &copy; 2011 CloudMade, Points &copy 2012 LINZ',
	cloudmade = new L.TileLayer(cloudmadeUrl, {maxZoom: 17, attribution: cloudmadeAttribution}),
	latlng = new L.LatLng(39.74739, -105);
	
	var map = new L.Map('map', {center: latlng, zoom: 13, layers: [cloudmade]});

	function onEachFeature(feature, layer) {
	    // does this feature have a property named popupContent?
	    if (feature.properties && feature.properties.popupContent) {
	        layer.bindPopup(feature.properties.popupContent);
	    }
	}
	
	var geojsonFeature = {
		    "type": "Feature",
		    "properties": {
		        "name": "Coors Field",
		        "amenity": "Baseball Stadium",
		        "popupContent": "This is where the Rockies play!"
		    },
		    "geometry": {
		        "type": "Point",
		        "coordinates": [-104.99404, 39.75621]
		    }
	};

	var myLayer = L.geoJson(geojsonFeature, {
	    onEachFeature: onEachFeature
	}).addTo(map);
	
	myLayer.addData(geojsonFeature);
	
	/*
	var cloudmadeUrl = 'http://{s}.tile.cloudmade.com/BC9A493B41014CAABB98F0471D759707/997/256/{z}/{x}/{y}.png',
	cloudmadeAttribution = 'Map data &copy; 2011 OpenStreetMap contributors, Imagery &copy; 2011 CloudMade, Points &copy 2012 LINZ',
	cloudmade = new L.TileLayer(cloudmadeUrl, {maxZoom: 17, attribution: cloudmadeAttribution}),
	latlng = new L.LatLng(-37.82, 175.24);

	var map = new L.Map('map', {center: latlng, zoom: 13, layers: [cloudmade]});
	
	var markers = new L.MarkerClusterGroup();
	
	for (var i = 0; i < addressPoints.length; i++) {
		var a = addressPoints[i];
		var title = a[2];
		var marker = new L.Marker(new L.LatLng(a[0], a[1]), { title: title });
		marker.bindPopup(title);
		markers.addLayer(marker);
	}
	
	map.addLayer(markers);
	*/

	/*
	var map = L.map('map').setView([51.505, -0.09], 13);

	// à modifier pour enregistrer notre app
	L.tileLayer('http://{s}.tile.cloudmade.com/BC9A493B41014CAABB98F0471D759707/997/256/{z}/{x}/{y}.png', {
		maxZoom: 18,
		attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://cloudmade.com">CloudMade</a>'
	}).addTo(map);
	
	var marker = L.marker([51.5, -0.09]).addTo(map);
	marker.bindPopup("<b>Hello world!</b><br>I am a popup.");
	*/
	
	</script>
</body>