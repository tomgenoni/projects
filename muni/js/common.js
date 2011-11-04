$(document).ready(function(){
	
		elToShow = 0;
	
		changeImage = function(trigger) {
			
			var imgCounter = $("#img-counter li");
      imgCounter.removeClass("active-counter-item");
      trigger.addClass("active-counter-item");

      // index of element to show
      elToShow =  imgCounter.index(trigger);

      $("#images li.active-image-item").fadeOut("slow").removeClass("active-image-item");
      $("#images li").eq(elToShow).fadeIn("slow").addClass("active-image-item");
			return false;
		}

    $("#img-counter li").click(function() {
			var trigger = $(this);
			 if ( !(trigger.hasClass("active-counter-item")) ) {
				clearInterval(intervalID);
				changeImage(trigger);
			}
			return false;
    });


	timedImageChange = function() { 
		var imgCounterLength = $("#img-counter li").length;
		var trigger = $("#img-counter li").eq(elToShow + 1);
		if ( elToShow + 1  == imgCounterLength ) {
			var trigger = $("#img-counter li").eq(0);
		}
		changeImage(trigger);
	}
	
	var intervalID;
	cycleImages = function() { 
		intervalID = setInterval(timedImageChange, 15000);
	}

	cycleImages();

	$("#images").hover( 
		function () { clearInterval(intervalID); }, 
		function () { cycleImages(); }
	 );



});

