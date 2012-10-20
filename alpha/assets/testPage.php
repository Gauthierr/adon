<?php
	function truncateText($text,$max_characters)
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
	
	$string = "hello Mr Rager. What's your family name?";
	$string = truncateText($string, 20);
	echo $string;
?>

<br />
<font size='1'><table class='xdebug-error xe-fatal-error' dir='ltr' border='1' cellspacing='0' cellpadding='1'>
<tr><th align='left' bgcolor='#f57900' colspan="5"><span style='background-color: #cc0000; color: #fce94f; font-size: x-large;'>( ! )</span> Fatal error: Call to undefined function truncateText() in C:\Users\Gauthier\Dropbox\Adon\alpha\application\controllers\object.php on line <i>154</i></th></tr>
<tr><th align='left' bgcolor='#e9b96e' colspan='5'>Call Stack</th></tr>
<tr><th align='center' bgcolor='#eeeeec'>#</th><th align='left' bgcolor='#eeeeec'>Time</th><th align='left' bgcolor='#eeeeec'>Memory</th><th align='left' bgcolor='#eeeeec'>Function</th><th align='left' bgcolor='#eeeeec'>Location</th></tr>
<tr><td bgcolor='#eeeeec' align='center'>1</td><td bgcolor='#eeeeec' align='center'>0.0024</td><td bgcolor='#eeeeec' align='right'>701472</td><td bgcolor='#eeeeec'>{main}(  )</td><td title='C:\Users\Gauthier\Dropbox\Adon\alpha\index.php' bgcolor='#eeeeec'>..\index.php<b>:</b>0</td></tr>
<tr><td bgcolor='#eeeeec' align='center'>2</td><td bgcolor='#eeeeec' align='center'>0.0074</td><td bgcolor='#eeeeec' align='right'>794560</td><td bgcolor='#eeeeec'>require_once( <font color='#00bb00'>'C:\Users\Gauthier\Dropbox\Adon\alpha\system\core\CodeIgniter.php'</font> )</td><td title='C:\Users\Gauthier\Dropbox\Adon\alpha\index.php' bgcolor='#eeeeec'>..\index.php<b>:</b>202</td></tr>
<tr><td bgcolor='#eeeeec' align='center'>3</td><td bgcolor='#eeeeec' align='center'>0.2312</td><td bgcolor='#eeeeec' align='right'>5108976</td><td bgcolor='#eeeeec'><a href='http://www.php.net/call_user_func_array' target='_new'>call_user_func_array</a>
(  )</td><td title='C:\Users\Gauthier\Dropbox\Adon\alpha\system\core\CodeIgniter.php' bgcolor='#eeeeec'>..\CodeIgniter.php<b>:</b>359</td></tr>
<tr><td bgcolor='#eeeeec' align='center'>4</td><td bgcolor='#eeeeec' align='center'>0.2313</td><td bgcolor='#eeeeec' align='right'>5109056</td><td bgcolor='#eeeeec'>Object->search(  )</td><td title='C:\Users\Gauthier\Dropbox\Adon\alpha\system\core\CodeIgniter.php' bgcolor='#eeeeec'>..\CodeIgniter.php<b>:</b>359</td></tr>
</table></font>