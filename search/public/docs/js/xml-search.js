$(document).ready(function() {

    // When the search is started
    $('#search').submit(function() {

        // get the search term
        var searchTerm = $('#searchTerm').val();

        if (searchTerm && searchTerm != "") {

            // empty anything that is there
            $("#content").empty();

            // get the xml that hold all the data for the site
            $.ajax({
                type: "GET",
                url: "/feed.xml",
                dataType: "xml",
                success: parseXml
            });


            function parseXml(xml) {
                // go through each <entry> in the xml
                $(xml).find("entry").each(function(i) {
                    // create a holder for each entry
                    $("#content").append("<div class='entry'></div>")

                    // if the entry actually has some content, it'll be empty otherwise
                    if ($(this).find("content > div").text() != "") {
                        var title = $(this).find('title').text();
                        var link = $(this).find('link').attr("href");

                        // for every element in the XML that's not an img
                        // grab that text and stick it in a <p> in each .entry
                        // and add a link to the page it originated on
                        $(this).find("content > div > *:not(img)").each(function() {
                            var content = $(this).text();
                            $("#content .entry").eq(i).append("<div class='element'><p>" + content + "</p><div class='search-link'><a href='" + link + "?searchTerm=" + searchTerm + "'>" + title + "</a></div></div>");
                        });
                        // All .element are hidden by default, this makes them visible
                        $("#content p:contains(" + searchTerm + ")").closest(".element").addClass("found");
                    }
                });

                // add a .highlight class to each term found in each <p>
                $(".found p").highlight(searchTerm);

                // adding the eq= variable to the URL. Have to loop through each entry
                // then each .found, then each .highlight to get the correct count
                $(".entry").each(function() {
                    // start with -1 because it's the array number 0 that we want to start at;
                    counter = -1;
                    $(this).find(".found").each(function() {
                        $(this).find(".highlight").each(function() {
                            // the counter value will equal the number of .highlight classes
                            // it finds inside the .found results which will be one or greater
                            // so the counter will be >= 0
                            counter++;
                        })
                        // get the URL and append the eq value
                        var foundURL = $(this).find('.search-link a').attr("href");
                        $(this).find('.search-link a').attr("href", foundURL + "&eq=" + counter);
                    })
                })

            }
        }
        return false;
    });


    // If URL loads with a DOM eq location variable


    function getQueryVariable(variable) {
        // get the URL
        var query = window.location.search.substring(1);
        // remove the last slash
        var query = query.substring(0, query.length - 1);
        var vars = query.split("&");

        for (var i = 0; i < vars.length; i++) {
            var pair = vars[i].split("=");
            if (pair[0] == variable) {
                return pair[1];
            }
        }
    }

    var searchTerm = getQueryVariable("searchTerm");
    var foundDomEq = getQueryVariable("eq");

    // if the DOM eq is available in the URL
    if (searchTerm != null) {
        // highlight the search terms
        $("#content").highlight(searchTerm);

        if (foundDomEq != null) {
            // wait for the window to complete loading
            // then scroll to the appropriate highlight
            $(window).load(function() {
                $('html,body').animate({
                    scrollTop: $("#content .highlight").eq(foundDomEq).offset().top
                }, {
                    duration: 'slow'
                });
            });
        }
    }
});