/*
 * --------------------------------------
 * Functions that manipulates the objects
 * CRUD, Search
 * --------------------------------------
 */

var things = []; // "Things" array, contains all the "thing" objects

/*
 *  Get data from the bdd in a JSON format
 * 
 */
function getData() {
	$.getJSON('/adon/object/get_object_list', function(data)
	{
		updateThings(data);
		refreshListByDistance();
		displayExisting(); // display on map
	});
}

/*
 *  Empty and update the array Things from a JSON format
 *  data : JSON format
 */
function updateThings(data)
{
	things = []; // make sure we reset the array
	
	$.each(data, function(index, array) // create the array, index count the iterations, array is the content
	{
		var id = array['id'];
		var thing = new Thing(array); // create a "thing" and give it the array with the content
		things[id] = thing; // the associative array "things" collects all the things by id
	});
}

/*
 *  Create an object
 */


function object_create() {
	
	//debugger;
	var title = $('#title').val();
    var price = $('#price').val();
    var description = $('#description').val();
    var lat = $('#lat').val();
    var lng = $('#lng').val();
    
	$.ajax({
		type: 'POST',
		url: '/adon/object/create',
		data: {'title': title, 'description': description, 'price': price, 'lat': lat, 'lng': lng},
		timeout: 3000,
		success: function(data) {
			if(data == 'success')
			{
				getData();
				registrationMarker.closePopup();
	    		registrationLayer.clearLayers();
	    		cancelRegistration();
	    		display_alert('the item has been added', '#alert_area', 'success');
			}
			else
			{
				display_alert('the item hasn\'t been added', '#alert_area', 'error');
			}
		},
        error: function() { display_alert('connexion problem', '#alert_area', 'error'); }
	});
}

$('#add_object_button').click(function() {
	
	if($('#add_object_button').html() == 'Cancel')
		{ cancelRegistration(); switchInterface(); }
	else
		{ initRegistration(); switchInterface(); }
});


function initRegistration() {
    map.addEventListener('click', onMapClick);
    document.body.style.cursor = 'crosshair';
    $('#add_object_button').html('Cancel');
    return false;
}

function cancelRegistration() {
    document.body.style.cursor = 'default';
    map.removeEventListener('click', onMapClick);
    $('#add_object_button').html('Add an object');
    registrationMarker.closePopup();
    registrationLayer.clearLayers();
}

/*
 * Delete an object
 */

function object_delete(id)
{
	$.ajax({
		type: 'GET',
		url: '/adon/object/delete/'+id,
		timeout: 3000,
		success: function(data) {
		if(data == 'success')
		{
			display_alert('the item has been deleted', '#alert_area', 'success');
			getData();
			refreshListByDistance();
		}
		else
		{
			display_alert('the item hasn\'t been deleted', '#alert_area', 'error');
		}
	},
        error: function() { display_alert('connexion problem', '#alert_area', 'error'); }
	});
}

/*
 *  Update an object
 */


/*
 * Search an object
 */

$('#search_string').keyup(function() {
	var string = $('#search_string').val();
	if($('#search_string').val() == '')
		{
		getData();
		}
	else
		{
		object_search('');
		}
});

$('#msearch_string').keyup(function() {
	var string = $('#msearch_string').val();
	if(string == '')
		{
		getData();
		}
	else
		{
		object_search('m', string);
		}
});

function object_search(param, string) {
	if(param = 'm')
	{
		var search_string = $('#msearch_string').val();
	}
	else
	{
		var search_string = $('#search_string').val();
	}
	alert(search_string);
	
	$.ajax({
		type: 'POST',
		url: '/adon/object/search',
		data: {'search_string': search_string, 'param': param},
		timeout: 3000,
		success: function(data) {
			$('#object_list').empty();
			if(!jQuery.isEmptyObject(data))
	    	{
				updateThings(data);
				refreshListByDistance();
	    	}
	    	else
	    	{
	    		$('#object_list').html('not found...');
	    	}
		},
        error: function(data) { display_alert('connexion problem', '#alert_area', 'error'); }
	});
}

/*
 * Refresh the object list by distance
 * $array: markers list - array [title, ..., lat, lng]
 * $position: actual position of the user - array [lat, lng]
 */

function displayThing(thing)
{
	var msg = '<div class="object" id="'+ thing.id +'" onclick="locate(this);">'
	+ 'title : ' + thing.title + '<br />description : ' + thing.description + '<br />'
	+ 'prix : ' + thing.price + '€<br /> distance : ' + Math.round(thing.distance) + 'm<br />';
	//+ '<span onclick="object_delete('+ thing.id +');"><i class="icon-remove"></i> delete</span> '
	//+ '<span id="update"><i class="icon-edit"></i> update</span></div>';
	return msg;
}

var sortBy = 'distance'; // default value

function refreshListByDistance()
{
	
	sortBy = 'distance';
	
	var array = [];
	
	for(i in things)
	{
		array.push([things[i], things[i].distanceTo(mapCenter)]);
	}
	
	array.sort(function(a,b) { return a[1] - b[1]; });
	//things.length = 0; // empty the array things, we cannot sort an "associative" array
	//things = [];
	
	$('#object_list').empty();
	
	var distCounter = 0;
	for(i=0;i<array.length;i++)
	{
		var thing = array[i][0];
		if(thing.distance < 1000)
		{
			if(thing.distance>200 && thing.distance<500 && distCounter<200 && i!=0)
			{
				$('#object_list').append('<div class="division"><strong>- 200m</strong></div>');
				distCounter = 200;
			}
			if(thing.distance>500 && thing.distance<1000 && distCounter<500 && i!=0)
			{
				$('#object_list').append('<div class="division"><strong>- 500m</strong></div>');
				distCounter = 500;
			}
			
			var msg = displayThing(thing);
			$('#object_list').append(msg);

		}
		//things[array[i][0].id] = array[i][0]; // repopulate the things array
	}
	$('#object_list').append('<div class="division"><strong>- 1000m</strong></div>');
}

function refreshListByPrice()
{
	sortBy = 'price';
	
	var array = [];
	
	for(i in things)
	{
		things[i].distanceTo(mapCenter);
		array.push([things[i], things[i].price]);
	}
	
	array.sort(function(a,b) { return a[1] - b[1]; });
	
	$('#object_list').empty();
	
	var priceCounter = 0;
	for(i=0;i<array.length;i++)
	{
		var thing = array[i][0];
		if(thing.distance < 1000)
		{
			if(thing.price>10 && thing.price<50 && priceCounter<50 && i!=0)
			{
				$('#object_list').append('<div class="division"><strong>- 10euros</strong></div>');
				priceCounter = 50;
			}
			if(thing.price>50 && priceCounter<100 && i!=0)
			{
				$('#object_list').append('<div class="division"><strong>- 50euros</strong></div>');
				priceCounter = 100;
			}
			
			var msg = displayThing(thing);
			$('#object_list').append(msg);
		}
	}
	$('#object_list').append('<div class="division"><strong>- 1000m</strong></div>');
}

/*
 *  Not in use
 */

/*$('#add_object_button').click(function() {
	
	if($('#add_object_button').html() == 'Cancel')
		{ cancelRegistration(); }
	else
		{ initRegistration(); }
});

$('#sortByDistance_button').click(function() {
	refreshListByDistance();
});

/*
function displayByDistance()
{
	var distCounter = 0;
	for(i in things)
	{
		if(things[i].distance < 1000)
		{
			var msg = '<div class="object" id="'+ things[i].id +'" onmouseover="locate(this);">'
			+ 'title : ' + things[i].title + '<br /> prix : ' + things[i].price + '<br /> distance : ' + things[i].distance + '<br />'
			+ '<span id="hello" onclick="object_delete(this);"><i class="icon-remove"></i> delete</span></div>';
			$('#object_list').append(msg);
			
			if(things[i].distance<200 && distCounter<200)
			{
				$('#object_list').append('<strong>... - 200m ...</strong>');
				distCounter = 200;
			}
			if(things[i].distance>200 && distCounter<500)
			{
				$('#object_list').append('<strong>... - 500m ...</strong>');
				distCounter = 1000;
			}
			if(things[i].distance>1000 && distCounter<1000)
			{
				$('#object_list').append('<strong>... - 1000m ...</strong>');
				distCounter = 10000;
			}
		}
	}
}

function object_add() {
	$('#alert').empty();
	$('#alert').html('Objet ajouté ici:'+ masterMarker.getLatLng().toString());
}

function validate() {
	alert('validating...');
}
*/