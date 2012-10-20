

	getData();
	
function init_update (DOMelem) {
	

$('#onclick_update').hide('slow');

//alert (things[DOMelem.parentNode.id].description);
debugger;
	$('#83').append(
			'<form id="form_object_update" method="post" accept-charset="utf-8" >'
			 + '	<label>Title</label><input type="text" id="title" name="title" value="'+things[DOMelem.parentNode.id].title+'" size="30" />'

			 + '	<label>Price</label><input type="text" id="price" name="price" value="'+things[DOMelem.parentNode.id].price+'" size="30" />' 
			 + '	<label>Description</label><br/><textarea id="description" name="description"> "'+things[DOMelem.parentNode.id].description+'" </textarea>'
			 + '	<input type="hidden" id="lat" name="lat" value="'+things[DOMelem.parentNode.id].latlng.lat+'" />'
			 + '	<input type="hidden" id="lng" name="lng" value="'+things[DOMelem.parentNode.id].latlng.lng+'" />'
			 + ' 		<button type="submit" class="btn btn-primary" onclick="object_update('+DOMelem.parentNode.id+');">Save changes</button>'
			 + ' 		<button type="submit" class="btn btn-primary" onclick="">déplacer</button>'
			 + ' 		<button type="button" class="btn" onclick="cancelRegistration();switchInterface();">Cancel</button>'
			 + '</form>'
	);
	
};



function object_update	(id_elem) {
	
	var title = $('#title').val();
    var price = $('#price').val();
    var description = $('#description').val();
    var lat = $('#lat').val();
    var lng = $('#lng').val();
 
   	$.ajax({
		type: 'POST',
		async: false,
        cache: false, 
		url: '/adon/object/update',
		data:  {'id':id_elem,'title': title, 'description': description, 'price': price, 'lat': lat, 'lng': lng},
		timeout: 3000,
		success: function(data) {
			if(data == 'success')
			{
				//getData();
				//registrationMarker.closePopup();s
	    		//registrationLayer.clearLayers();
	    		//cancelRegistration();
	    		//display_alert('the item has been added', '#alert_area');
			}
			else
			{
				display_alert('the item hasn\'t been updated', '#alert_area');
			}
		},
		error: function() { display_alert('connexion problem', '#alert_area'); }
	});
	
	}