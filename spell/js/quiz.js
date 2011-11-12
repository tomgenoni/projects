$(document).ready(function() {

	// suppose to use '.on()' instead of .live()
	// but it not worko
	$(".btn").live("click", function(event){
    	var panel = $(this).closest(".panel");
    	var word = panel.attr("data-word");

    	 if ( panel.find(".sample").length == 0 ) {
	        var audio = $('<audio>', {
	            src: 'audio/' + word + '.wav',
	            class: 'sample',
	        }).appendTo(panel);    	
    	 }

        panel.find("audio").get(0).play();
        return false;

    })

})