<?php
class Googleapi extends CI_Controller {
	
	public function __construct()
	{
		parent::__construct();
		
		$this->load->library('googlemaps');
        
	}
	
	public function index()
	/*{
		$this->googlemaps->initialize();
		$data['map'] = $this->googlemaps->create_map();
		$data['title'] = 'Google API';
		$this->load->view('templates/header', $data);
		$this->load->view('googleapi/googleapi', $data);
		$this->load->view('templates/footer', $data);
	}
	*/
	
	{

	
	
$this->load->library('googlemaps');

$config = array();
$config['center'] = 'auto';
$config['onboundschanged'] = 'if (!centreGot) {
	var mapCentre = map.getCenter();
	marker_0.setOptions({
		position: new google.maps.LatLng(mapCentre.lat(), mapCentre.lng()) 
	});
}
centreGot = true;';
$this->googlemaps->initialize($config);
   
// set up the marker ready for positioning 
// once we know the users location
$marker = array();
$this->googlemaps->add_marker($marker);

$data['map'] = $this->googlemaps->create_map();


		
		$this->load->view('googleapi/googleapi', $data);
	}
	

}
?>