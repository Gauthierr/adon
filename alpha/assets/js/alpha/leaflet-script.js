/*
 *  Functions related to the map
 * 
 */

// initialazing map

var tileLayer = L.tileLayer('http://{s}.tile.cloudmade.com/BC9A493B41014CAABB98F0471D759707/997/256/{z}/{x}/{y}.png', {
			maxZoom: 18,
			attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery Â© <a href="http://cloudmade.com">CloudMade</a>'
			});

var registrationLayer = new L.LayerGroup(); // temp marker where you add thing
var existingLayer = new L.LayerGroup(); // collect all existing markers
//var markersGroup = new L.MarkerClusterGroup();

var map = new L.Map('map', {
    center: new L.LatLng(39.90973623453719, -93.69140625),
    zoom: 3,
    layers: [tileLayer, registrationLayer, existingLayer]
	//layers: [tileLayer, registrationLayer, markersGroup]
	});

// localizing the user
map.locate({setView: true, maxZoom: 16}); // setView: true, shorcut to ask to locate the user

function displayExisting()
{
	
	existingLayer.clearLayers();
	//markersGroup.clearLayers(); // cleaning the layer
	
	for(i in things)
	{
		
		var markerLocation = new L.LatLng(things[i].lat, things[i].lng);
		var marker = new L.Marker(markerLocation);
	    var msg = things[i].id+" - "+things[i].title;
	    marker.bindPopup(msg);
	    
	    //markersGroup.addLayer(marker);
	    existingLayer.addLayer(marker);
	    //things[i].setMarker(marker);
	}
	
	
	//existingLayer.addLayer(markersGroup);
	//things[0].marker.openPopup(); we can access the object marker through our object thing :)
}

/*
 *  Create an object
 *  
 */

var registrationMarker = new L.Marker([0,0]);

function onMapClick(e)
{
	var markerLocation = new L.LatLng(e.latlng.lat, e.latlng.lng);
	registrationMarker.setLatLng(markerLocation);
    registrationLayer.clearLayers();
    registrationLayer.addLayer(registrationMarker);
	var msg =  '<form id="form_object_create" method="post" accept-charset="utf-8" action="#">'
			 + '	<label>Title</label><input type="text" id="title" name="title" value="" size="30" />'
			 + '	<label>Price</label><input type="text" id="price" name="price" value="" size="30" />'
			 + '	<label>Description</label><br/><textarea id="description" name="description"></textarea>'
			 + '	<input type="hidden" id="lat" name="lat" value="'+e.latlng.lat+'" />'
             + '	<input type="hidden" id="lng" name="lng" value="'+e.latlng.lng+'" />'
			 + '	<div class="form-actions">'
			 + ' 		<button type="submit" class="btn btn-primary" onclick="object_create();return false;">Save changes</button>'
			 + ' 		<button type="button" class="btn" onclick="cancelRegistration();switchInterface();">Cancel</button>'
			 + '	</div>'
			 + '</form>';
	registrationMarker.bindPopup(msg).openPopup();
}

/*
 *  Others
 * 
 */

function onMoveEnd(e)
{
	mapCenter = map.getCenter();
	if(sortBy == 'distance')
	{
		refreshListByDistance();
	}
	if(sortBy == 'price')
	{
		refreshListByPrice();
	}
}


map.on('moveend', onMoveEnd);

function locate(DOMelem)
{
	//switchInterface();
	var id = DOMelem.id;
	latLng = [things[id].lat, things[id].lng];
	map.panTo(latLng);
}

/*
function onLocationFound(e)
{
	
	var radius = e.accuracy / 2;

	masterMarker.setLatLng(e.latlng);
	background.addLayer(masterMarker);
	masterMarker
		.bindPopup('You are within ' + radius + ' meters from this point.'
				 + '<div onclick="object_add();">Get coordinates</div>')
		.openPopup();
	L.circle(e.latlng, radius).addTo(map);
	
	//alert(masterMarker.getLatLng().toString());

}

function onLocationError(e)
{
	alert(e.message);
}

map.on('locationfound', onLocationFound);
map.on('locationerror', onLocationError);
*/
//alert(marker.getLatLng().toString());
//var center = new L.LatLng(0,0);
//center = map.getCenter();
//alert(position.toString());
