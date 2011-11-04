$(document).ready(function(){

	$("input#autocomplete").autocomplete({
	    source: ["M83", "Mates of State", "Magnetic Fields", "Mando Diao", "Manitoba", "Marching Band", "Mark Eitzel"],
	    select: function( event, ui ) {
				window.location.replace("tour.html");
				return false;
			},

	    open: function(event, ui) { 
					$('.ui-menu-item').each(function(index) {
				    $(this).prepend("<a href='tour.html' class='btn'><img src='/i/checkmark.png' />track</a>");
				  });
	    }
	});


})