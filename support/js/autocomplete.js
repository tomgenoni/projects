$(document).ready(function() {

	var availableTags = [];

	function convertValue(value) {
		var status = "";

		if (value == 'n') {
			var status = "not-supported";
		} else if ( value == 'y') {
			var status = "supported";
		} else if ( value == 'p') {
			var status = "partial";
		} else {
			var status = "unknown";
		}
		return status;
	}

	$.getJSON("js/data.json", function(json){

		console.log(json);

		$.each(json.data, function(i){
			availableTags.push({ label: this.title, id: i});
		});

		console.log(availableTags);

		$( "#tags" ).autocomplete({
			source: availableTags,
			select: function(event, ui) {
				$("#entry").show();

				var eID = ui.item.id;
				var eTitle = json.data[eID].title;
				var eDescription = json.data[eID].description;
				var eNotes = json.data[eID].notes;

				// Stats

				var status_ie7 = convertValue(json.data[eID].stats.ie[7]);
				var status_ie8 = convertValue(json.data[eID].stats.ie[8]);
				var status_ie9 = convertValue(json.data[eID].stats.ie[9]);
				var status_ie10 = convertValue(json.data[eID].stats.ie[10]);
				

				$("#entry > h2").html(eTitle)
				$("#entry > p").html(eDescription);

				$(".ie-7 > span").addClass(status_ie7);
				$(".ie-8 > span").addClass(status_ie8);
				$(".ie-9 > span").addClass(status_ie9);
				$(".ie-10 > span").addClass(status_ie10);
			}

		});

	});


});
