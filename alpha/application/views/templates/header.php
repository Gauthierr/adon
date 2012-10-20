<!DOCTYPE head PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html lang="en">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title><?php echo $title ?> - version de présentation [pré-alpha]</title>

<!-- Bootstrap -->
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link href="<?php echo base_url(); ?>assets/bootstrap/css/bootstrap.min.css" rel="stylesheet">
<link href="<?php echo base_url(); ?>assets/bootstrap/css/bootstrap-responsive.css" rel="stylesheet">

<?php
if(isset($css_files))
{
	foreach($css_files as $file):
    echo '<link type="text/css" rel="stylesheet" href="'.base_url().'assets/css/'.$file.'.css" />';
	endforeach;
} ?>

<?php
if(in_array('leaflet', $plugin))
	{
		echo '<link rel="stylesheet" href="http://cdn.leafletjs.com/leaflet-0.4/leaflet.css" />';
		echo '<!--[if lte IE 8]><link rel="stylesheet" href="http://cdn.leafletjs.com/leaflet-0.4/leaflet.ie.css" /><![endif]-->';
		// plugin leaflet -> marker cluster
		echo '<link rel="stylesheet" href="'.base_url().'assets/leaflet/plugin/markercluster/MarkerCluster.css" />
		  	  <link rel="stylesheet" href="'.base_url().'assets/leaflet/plugin/markercluster/MarkerCluster.Default.css" />
			  <!--[if lte IE 8]><link rel="stylesheet" href="'.base_url().'assets/leaflet/plugin/markercluster/MarkerCluster.Default.ie.css" /><![endif]-->';
	}
?>

</head>
<body style="padding-top: 40px;">
	<div class="navbar navbar-fixed-top navbar-inverse">
		<div class="navbar-inner">
			<div class="container">
			    <span class="brand">Adon</span>
			    <ul class="nav">
			    	<?php 
			    	if($page=='leaflet')
			    	{	
			    		//echo '<li class="active"><a href="#account" data-action="load"><i class="icon-home icon-white"></i> Search+</a></li>';
			    		echo '<li class="active"><a href="#list" data-action="load"><i class="icon-home icon-white"></i> Search</a></li>';
			    		if(!empty($user_id))
						{
    						echo '<li><a href="#ulist" data-action="load"><i class="icon-user icon-white"></i> My account</a></li>';
    					}
    					echo '<button id="add_object_button" class="btn btn-primary">Add an object</button>';
			    	}
			    	else
			    	{
			    		echo '<li><a href="/adon/pages/view/leaflet"><i class="icon-home icon-white"></i> Home</a></li>';
			    	}
			    	?>
  				</ul>
			    
			    <ul class="nav">
			      <li <?php if($page=='about') { echo 'class="active"';} ?>><a href="/adon/pages/view/about">About</a></li>		
			      <li <?php if($page=='test') { echo 'class="active"';} ?>><a href="/adon/pages/view/test">Test</a></li>
			    </ul>
			    <ul class="nav pull-right">
				    <li class="dropdown">
	    				<a href="#" class="dropdown-toggle" data-toggle="dropdown">Account<b class="caret"></b></a>
	    				<ul class="dropdown-menu">
					    	<?php
							if($user_id == '')
							{
								echo '
								<li><a href="/adon/auth/login">Login</a></li>
								<li><a href="/adon/auth/register">Register</a></li>';
							}
							else
							{
								echo '
								<li><a href="/adon/auth/logout">Logout</a></li>
								<li><a href="/adon/auth/change_email">Change email</a></li>
								<li><a href="/adon/auth/change_password">Change password</a></li>
								<li><a href="/adon/auth/unregister">Unregister</a></li>';
							}
							?>
			   			</ul>
			    	</li>
	  			</ul>
			</div>
		</div>
	</div>
<div class="row-fluid">