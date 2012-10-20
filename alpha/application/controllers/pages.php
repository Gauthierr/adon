<?php

class Pages extends CI_Controller {

	function __construct()
	{
		parent::__construct();

		$this->load->helper('url');
		$this->load->library('tank_auth');
	}	
	
	public function view($page = 'home')
	{
		if ( ! file_exists('application/views/pages/'.$page.'.php'))
		{
			// Whoops, we don't have a page for that!
			//show_404();
			$page='error404';
		}
		
		if (!$this->tank_auth->is_logged_in()) {
			// redirect('/auth/login/');
			$data['user_id']	= '';
			$data['username']	= 'visitor';
		}
		else
		{
			$data['user_id']	= $this->tank_auth->get_user_id();
			$data['username']	= $this->tank_auth->get_username();
		}
		
		$data['page'] = $page; // Standard name
		$data['title'] = ucfirst($page); // Capitalize the first letter
		$data['plugin'] = array('jquery'); // Load plugins
		$data['css_files'] = array('main'); // Give the css files to load
		$data['js_files'] = array(); // Give the js files to load
		if($page == 'leaflet')
		{
			array_push($data['plugin'], 'leaflet');
			array_push($data['js_files'], 'alpha/basic-script', 'alpha/leaflet-script', 'object/object', 'object/object-script');
		}
		if($page == 'test')
		{
			array_push($data['plugin'], 'leaflet');
			array_push($data['js_files'], 'alpha/basic-script', 'alpha/leaflet-script', 'object/object', 'object/object-script', 'test/test-script');
		}
		
		$this->load->view('templates/header', $data);
		$this->load->view('pages/'.$page, $data);
		$this->load->view('templates/footer', $data);
	}
	
	public function view_part($page = 'home')
	{
		if ( ! file_exists('application/views/pages/'.$page.'.php'))
		{
			// Whoops, we don't have a page for that!
			//show_404();
			$page='error404';
		}
		$data['page'] = $page; // Standard name
		$data['title'] = ucfirst($page); // Capitalize the first letter

		if (!$this->tank_auth->is_logged_in()) {
			// redirect('/auth/login/');
			$data['user_id']	= '';
			$data['username']	= 'visitor';
		}
		else
		{
			$data['user_id']	= $this->tank_auth->get_user_id();
			$data['username']	= $this->tank_auth->get_username();
		}
		
		$this->load->view('pages/'.$page, $data);
	}
}

?>