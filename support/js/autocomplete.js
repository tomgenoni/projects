$(document).ready(function() {

	// remove any previously entered value
	$("#tags").click(function(){
		$(this).val('');
	})

	// array to hold the tag values
	var availableTags = [];

	// shows the results, whehter as a part of the URL or an entered value
	function showResults(eTitle,eDescription,st_root,eNotes,spec,links) {

		$("#entry").show();

		console.log(st_root);

		// Title & description
		$("#entry > h2").html(eTitle)
		$("#entry > p").html(eDescription);

		$(".ie-9 > span").attr("class",st_root.ie[9]);
		$(".ie-10 > span").attr("class",st_root.ie[10]);
		
		$(".ff-13 > span").attr("class",st_root.firefox[13]);
		$(".ff-14 > span").attr("class",st_root.firefox[14]);
		$(".ff-15 > span").attr("class",st_root.firefox[15]);

		$(".ch-19 > span").attr("class",st_root.chrome[19]);
		$(".ch-20 > span").attr("class",st_root.chrome[20]);
		$(".ch-21 > span").attr("class",st_root.chrome[21]);

		$(".sa-5-1 > span").attr("class",st_root.safari[5.1]);
		$(".sa-5-2 > span").attr("class",st_root.safari[5.2]);

		$(".is-5 > span").attr("class",st_root.ios_saf[5]);
		$(".is-6 > span").attr("class",st_root.ios_saf[6]);

		$("#entry .tabs .tab-content").eq(1).empty();

		// Notes
		if (eNotes != undefined && eNotes != "") {
			$("#entry .tabs .tab-content").eq(0).html(eNotes)
		}

		// Spec page
		if (spec != undefined && spec != "") {
				$("#entry .tabs .tab-content").eq(1).append("<p><a href='"+spec+"'>Specification</a></p>")
		}

		// Links
		if ( links.length > 0 ) {
			$.each(links, function(index, value) { 
				$("#entry .tabs .tab-content").eq(1).append("<p><a href='"+value.url+"'>"+value.title+"</a></p>")
			});
		}
	}

	$.getJSON("js/data.json", function(json){

		$.each(json.data, function(i){
			availableTags.push({ label: this.title +"<span>"+this.description+"</span>", value: this.title, id: i });
		});

		console.log(json);

		if (window.location.hash) {

			var hash = window.location.hash;
			var hash = hash.replace("#","");

			var eTitle = json.data[hash].title;
			var eDescription = json.data[hash].description;

			// Browser status
			var st_root = json.data[hash].stats;

			// Notes
			var eNotes = json.data[hash].notes;

			// Spec
			var spec = json.data[hash].spec;

			// Links
			var links = json.data[hash].links;

			showResults(eTitle,eDescription,st_root,eNotes,spec,links);

		}

		$("#tags").autocomplete({
			source: availableTags,
			html: true,
			select: function(event, ui) {

				var eID = ui.item.id;
				var eTitle = json.data[eID].title;
				var eDescription = json.data[eID].description;

				// Browser status
				var st_root = json.data[eID].stats;

				// Notes
				var eNotes = json.data[eID].notes;

				// Spec
				var spec = json.data[eID].spec;

				// Links
				var links = json.data[eID].links;

				showResults(eTitle,eDescription,st_root,eNotes,spec,links);

				window.location.hash = eID;

			}

		});

	});


});
