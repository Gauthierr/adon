
var mapCenter; // to calculate at any time the distance

// When DOM is ready
$(function() {
	getData();
	$('#content').html('<img src="http://127.0.0.1/adon/assets/img/ajax-loader.gif">');
	$('#content').load('/adon/pages/view_part/list');
});

/*
 *  Display alerts
 */
function display_alert(string, selector, kind)
{
	$(selector).html('<div class="alert alert-'+kind+'">'
	+ '<button class="close" data-dismiss="alert">&times;</button>'
	+ '<strong>Warning !</strong> ' + string
	+ '</div>');
}

function switchInterface()
{
		$('#content').toggleClass('span8');
		$('#content').toggleClass('span4');
		
		$('#map').toggleClass('span8');
		$('#map').toggleClass('span4');
}

$('a[data-action=load][href=#list]').click(function() {
	$('#content').html('<img src="http://127.0.0.1/adon/assets/img/ajax-loader.gif">');
	$('#content').load('/adon/pages/view_part/list');
});

$('a[data-action=load][href=#ulist]').click(function() {
	$('#content').html('<img src="http://127.0.0.1/adon/assets/img/ajax-loader.gif">');
	$('#content').load('/adon/pages/view_part/ulist');
});

/*
 * Not In Use
 */


/*
$('a[data-action=load][href=#account]').click(function() {
	$('#content').load('/adon/views/pages/about.php');
});*/

/*
function view(a) {
	  //$('#object').html('Hello world. Ce texte est affiché par jQuery.');
	  if(a == 'map')
		  {
		  $('.span2').css('width','20%');
		  $('.span10').css('width','80%');
		  }
	  if(a == 'object')
		  {
		  $('.span2').css('width','80%');
		  $('.span10').css('width','20%');
		  }
};
*/
