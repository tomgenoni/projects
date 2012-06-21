$(document).ready(function(){

	$(".tool-hide").click(function(){
		$(this).closest(".listing").find("ul").slideToggle('fast');
	});

}) 