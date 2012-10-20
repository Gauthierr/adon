<?php

class Object extends CI_Controller {

	public function __construct()
	{
		parent::__construct();
		
		$this->load->library('form_validation');
		// autoload.php
		// library: Thank_auth, database
		// helper: url
	}

	public function index()
	{
		
	}
	
	public function get_object_list()
	{

		$query = $this->db->select('id, title, description, price, lat, lng')->get('objects');
		
		/* create one master array of the records */
	 	$results = array();
	 	foreach ($query->result_array() as $row)
		{
			$results[] = $row;
		}
		
		//print_r($results);

		header('Content-type: application/json');
		echo json_encode($results);
	}
	
	public function get_object($id)
	{
		if(isset($id))
		{
			// create one row array with the result
			$result = $this->db->select('id, title, price, lat, lng')->where('id', $id)->get('objects')->row_array();
	
			header('Content-type: application/json');
			echo json_encode($result);
		}
		else
		{
			return null;
		}
	}
	
	public function create()
	{
		if($this->tank_auth->is_logged_in()) {
			//$this -> form_validation -> set_error_delimiters('<span class="error">', '</span>');
			
			// rules
			$this->form_validation->set_rules('title', 'Title', 'trim|required|xss_clean');
			$this->form_validation->set_rules('description', 'Description', 'trim|xss_clean');
			$this->form_validation->set_rules('price', 'Price', 'required|numeric');
			$this->form_validation->set_rules('lat', 'lat', 'required|numeric');
			$this->form_validation->set_rules('lng', 'lng', 'required|numeric');
			
			if($this->form_validation->run() == FALSE)
			{
				echo 'fail';
			}
			else
			{
				$data = array(
					'uid'	 	  => $this->tank_auth->get_user_id(),
					'title' 	  => $_POST['title'],
					'description' => $_POST['description'],
					'price'		  => $_POST['price'],
					'lat' 		  => $_POST['lat'],
					'lng'		  => $_POST['lng']
				);
				
				$this->db->insert('objects', $data);
				echo "success";
			}
		}
		else
		{
			echo 'fail';
		}
	}
	
	public function delete($id)
	{
		if($this->tank_auth->is_logged_in()) {
			if(isset($id))
			{
				$this->db->where('id', $id)->delete('objects');
				echo 'success';
			}
			else
			{
				echo 'fail';
			}
		}
		else
		{
			echo 'fail';
		}
		
	}
	
	public function update()
	{
	
		//if($this->tank_auth->is_logged_in()) 
		{
			$this -> form_validation -> set_error_delimiters('<span class="error">', '</span>');
			
			// rules
			$this->form_validation->set_rules('title', 'Title', 'trim|required|xss_clean');
			$this->form_validation->set_rules('price', 'Price', 'required|numeric');
			$this->form_validation->set_rules('description', 'Description', 'trim|required|xss_clean');
			$this->form_validation->set_rules('lat', 'lat', 'required');
			$this->form_validation->set_rules('lng', 'lng', 'required');
						
			
			if($this->form_validation->run() == FALSE)
			{			
			
				echo 'fail';
			
			}
			else
			{
				$data = array(
					'id' => $_POST['id'],
					'title' => $_POST['title'],
					'price' => $_POST['price'],
					'description' => $_POST['description'],
					'lat' => $_POST['lat'],
					'lng' => $_POST['lng']
				);
				$id=$_POST['id'];
				//echo $_POST['description'];
				
				$this->db->where('id', $id);
				$this->db->update('objects',$data);
				echo "success";
			}	
		}
		/*else
		{
			echo 'fail';
		}*/
	}
	
	
	public function search()
	{
		$this->form_validation->set_rules('search_string', 'search word', 'trim|required|xss_clean');
		
		header('Content-type: application/json');
		if($this->form_validation->run() == FALSE)
		{
			echo 'failValidation';
		}
		else
		{
			$search_string = $_POST['search_string'];
			
			$results = array();
			if($_POST['param'] == 'm' && $this->tank_auth->is_logged_in()) // search only in the user things
			{
				//echo 'logged';
				$query = $this->db->query('SELECT * FROM adon_objects WHERE MATCH ( title, description ) AGAINST ("'.$search_string.'*" IN BOOLEAN MODE)');
				foreach ($query->result_array() as $row)
				{
					//echo 'halo';
					//echo print_r($row);
					/*if($row['uid'] == $this->tank_auth->get_user_id())
					{*/
						$results[] = $row;
					//}
					//echo print_r($results);
				}
			}
			else
			{
				$query = $this->db->query('SELECT * FROM adon_objects WHERE MATCH ( title, description ) AGAINST ("'.$search_string.'*" IN BOOLEAN MODE)');
				foreach ($query->result_array() as $row)
				{
					$results[] = $row;
				}
			}
			
			foreach($results as $i=>$value)
			{
				$results[$i]['title'] = $this->highlightWords($results[$i]['title'],$search_string);
				$results[$i]['description'] = $this->truncateText($results[$i]['description'],50);
				$results[$i]['description'] = $this->highlightWords($results[$i]['description'],$search_string);
			}
			
			if(!empty($results))
			{
				echo json_encode($results);
			}
		}
	}
	
	// highlight a word
	private function highlightWords($string,$words){
		
		$words=explode(' ',$words);
		
		for($i=0;$i<sizeOf($words);$i++) {
			 $string=str_ireplace($words[$i], '<strong class="highlight">'.$words[$i].'</strong>', $string);
		}
		
		return $string;
	}
	
	private function truncateText($text,$max_characters)
	{
		// Test si la longueur du texte dépasse la limite
		if (strlen($text)>$max_characters)
		{
		  // Séléction du maximum de caractères
		  $text = substr($text, 0, $max_characters);
		  // Récupération de la position du dernier espace (afin déviter de tronquer un mot)
		  $space_position = strrpos($text, " ");
		  $text = substr($text, 0, $space_position);
		  // Ajout des "..."
		  $text = $text."...";
		} 
		return $text;
	}
	
}

