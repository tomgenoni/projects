$(document).ready(function(){

    $("#img-counter li").click(function () {
        var trigger = $(this);
		var imgCounter = $("#img-counter li");

        if ( !(trigger.hasClass("active-counter-item")) ) {

            imgCounter.removeClass("active-counter-item");
            trigger.addClass("active-counter-item");

            // index of element to show
            var elToShow =  imgCounter.index(trigger);

            $("#img-wrap li.active-img-item").fadeOut().removeClass("active-img-item");
            $("#img-wrap li").eq(elToShow).fadeIn().addClass("active-img-item");
        }
        return false;
    });

});

