<form method="post" accept-charset="utf-8" action="#">
	<div class="input-append">
		<input class="span12" name="search_string" id="search_string" size="16" type="text"><br/>
		Sort by:
		<button id="sortby_distance_button" class="btn btn-link" onclick="refreshListByDistance();return false;">Distance</button> 
		<button id="sortby_price_button" class="btn btn-link" onclick="refreshListByPrice();return false;">Price</button>
	</div>
</form>
<script type="text/javascript">refreshListByDistance();</script>
list
<div id="object_list"></div>