$(document).ready(function() {
    setWidth = function() {
        windowSize = $(window).width();
        $("li").width(windowSize);
        $(".clicker-left").html(windowSize);

        // if (windowSize < 1110) {
        //     $(".clicker-right").css("left", "1040px")
        // } else {
        //     $(".clicker-right").css("left", "auto")
        // }
    }


    setWidth();
    window.onresize = function(event) {
        setWidth();
    }

    $(".clicker").live('click', function() {

        var trigger = $(this);

        if (trigger.hasClass("clicker-left")) {

            $("li:last-child").clone().prependTo("ul");
            $("li:last-child").remove();
            $("ul").css("marginLeft", windowSize * -1);
            $("#list").animate({
                marginLeft: "0",
            }, 600, function() {});

        } else {

            $("#list").animate({
                marginLeft: windowSize * -1,
            }, 600, function() {
                $("li:first-child").clone().appendTo("ul");
                $("li:first-child").remove();
                $("ul").css("marginLeft", "0");
            });

        }
    });

});