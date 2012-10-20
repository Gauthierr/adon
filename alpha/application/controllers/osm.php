<?php

class Osm extends CI_Controller {

	public function __construct()
	{
		parent::__construct();
		
		$this->load->helper('url');
	}

	public function index()
	{
		$data['title'] = 'OSM'; // Capitalize the first letter
		$data['css_files'] = array('main'); // Give the css files to load
		$data['js_files'] = array(''); // Give the js files to load
		
		$this->load->view('/osm/example.php',$data);
	}
}