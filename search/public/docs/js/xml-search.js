$(document).ready(function() {


    $('#search').submit(function() {

        var searchTerm = $('#searchTerm').val();

        if (searchTerm && searchTerm != "") {

            $("#content").empty();

            $.ajax({
                type: "GET",
                url: "/feed.xml",
                dataType: "xml",
                success: parseXml
            });


            function parseXml(xml) {
                $(xml).find("entry").each(function() {
                    if ($(this).find("content > div").text() != "") {
                        var title = $(this).find('title').text();
                        var link = $(this).find('link').attr("href");
                        $(this).find("content > div > *:not(img)").each(function() {
                            var content = $(this).text();
                            $("#content").append("<div class='entry'><p>" + content + "</p><div class='search-link'><a href='" + link + "?searchTerm="+searchTerm+"'>" + title + "</a></div></div>");
                        });
                        $("#content p:contains(" + searchTerm + ")").closest(".entry").addClass("found");
                    }
                });
                $(".found p").highlight(searchTerm);
            }
        }
        return false;
    });


    // If URL loads with a DOM eq location variable

    function getQueryVariable(variable) {
        var query = window.location.search.substring(1);
        var query = query.substring(0, query.length - 1);
        var vars = query.split("&");
        console.log(vars);

        for (var i = 0; i < vars.length; i++) {
            var pair = vars[i].split("=");
            if (pair[0] == variable) {
                return pair[1];
            }
        }
    }

    var foundDomEq = getQueryVariable("eq");
    var searchTerm = getQueryVariable("searchTerm");

    if (foundDomEq != null) {
        $("#content").highlight(searchTerm);

        $('html,body').animate({
            scrollTop: $("#content > *:not(p>img) ").eq(foundDomEq).offset().top
        }, {
            duration: 'slow'
        });
    }


});