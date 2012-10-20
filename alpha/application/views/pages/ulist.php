<form method="post" accept-charset="utf-8" action="#">
	<div class="input-append">
		<input class="span12" name="msearch_string" id="msearch_string" size="16" type="text"><br/>
		Sort by:
		<button id="sortby_distance_button" class="btn btn-link" onclick="refreshListByDistance();return false;">Distance</button> 
		<button id="sortby_price_button" class="btn btn-link" onclick="refreshListByPrice();return false;">Price</button>
	</div>
</form>
ulist
<div id="mobject_list"></div>