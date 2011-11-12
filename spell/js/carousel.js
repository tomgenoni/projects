$(document).ready(function() {

    var slideSpeed = 200;

    setWidth = function() {
        windowSize = $(window).width();
        $(".panel").width(windowSize);
    }


    setWidth();
    window.onresize = function(event) {
        setWidth();
    }

    $(".clicker").live('click', function() {

        var trigger = $(this);

        if (trigger.hasClass("clicker-left")) {

            $("ul#list > li:last-child").clone().prependTo("ul#list");
            $("ul#list > li:last-child").remove();
            $("ul#list").css("marginLeft", windowSize * -1);
            $("#list").animate({
                marginLeft: "0",
            }, slideSpeed, function() {});

        } else {

            $("#list").animate({
                marginLeft: windowSize * -1,
            }, slideSpeed, function() {
                $("ul#list > li:first-child").clone().appendTo("ul#list");
                $("ul#list > li:first-child").remove();
                $("ul#list").css("marginLeft", "0");
            });

        }
    });

});