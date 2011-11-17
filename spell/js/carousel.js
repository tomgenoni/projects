$(document).ready(function() {

    var slideSpeed = 400;

    setWidth = function() {
        windowSize = $(window).width();
        $(".panel").width(windowSize);
    }
    setWidth();

    window.onresize = function(event) {
        setWidth();
    }

    $(".nextBtn").live('click', function() {


        $("#list").animate({
            marginLeft: windowSize * -1,
        }, slideSpeed, function() {
            $("ul#list > li:first-child").clone().appendTo("ul#list");
            $("ul#list > li:first-child").remove();
            $("ul#list").css("marginLeft", "0");
        });

        return false;

    });

});