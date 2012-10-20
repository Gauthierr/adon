function Thing(data)
{
	this.marker = null;
	this.id = data['id'];
	this.title = data['title'];
	this.description = data['description'];
	this.price = data['price'];
	this.lat = data['lat'];
	this.lng = data['lng'];
	this.latlng = new L.LatLng(this.lat,this.lng);
	this.distance = 0;
	//var latlng = ; //format Leaflet
	
	this.setMarker = function(leafletMarker)
	{
		this.marker = leafletMarker;
	};
	
	/*
	 * coordinates: array[lat,lng]
	 */
	this.distanceTo = function(coordinates)
	{
		//var latlng = new L.LatLng(this.lat,this.lng);
		return this.distance = this.latlng.distanceTo(coordinates);
	};
}