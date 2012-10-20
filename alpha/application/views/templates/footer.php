</div>
<div id="footer" class="row-fluid">
	<div class="span12"><p><strong>&copy; 2011</strong></p></div>
</div>

<?php
/*
 *  jQuery
 */
if(in_array('jquery', $plugin))
{
	echo '<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js"></script>';
	// plugins
	echo '<script type="text/javascript" src="'.base_url().'assets/js/jquery/plugins/jquery.validate.min.js"></script>';
}

/*
 *  Bootstrap
 */
echo '<script src="'.base_url().'assets/bootstrap/js/bootstrap.min.js"></script>';

/*
 *  Leaflet
 */
if(in_array('leaflet', $plugin))
{
	echo '<script type="text/javascript" src="http://cdn.leafletjs.com/leaflet-0.4/leaflet.js"></script>';
	// plugin Markercluster
	echo '<script type="text/javascript" src="'.base_url().'assets/leaflet/plugin/markercluster/leaflet.markercluster-src.js"></script>';
}

// other js files
if(isset($js_files))
{
	foreach($js_files as $file):
    echo '<script type="text/javascript" src="'.base_url().'assets/js/'.$file.'.js"></script>';
	endforeach;
}

?>
</body>
</html>