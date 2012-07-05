$(document).ready(function() {


	$("#tags").click(function(){
		$(this).val('');
	})

	var availableTags = [];

	$.getJSON("js/data.json", function(json){

		console.log(json);

		$.each(json.data, function(i){
			availableTags.push({ label: this.title, id: i });
		});

		$( "#tags" ).autocomplete({
			source: availableTags,
			select: function(event, ui) {
				$("#entry").show();

				var eID = ui.item.id;
				var eTitle = json.data[eID].title;
				var eDescription = json.data[eID].description;

				// Title & description
				$("#entry > h2").html(eTitle)
				$("#entry > p").html(eDescription);

				// Browser status
				var st_root = json.data[eID].stats;
			
				$(".ie-7 > span").attr("class",st_root.ie[7]);
				$(".ie-8 > span").attr("class",st_root.ie[8]);
				$(".ie-9 > span").attr("class",st_root.ie[9]);
				$(".ie-10 > span").attr("class",st_root.ie[10]);
			
				$(".ff-3-6 > span").attr("class",st_root.firefox[3.6]);
				$(".ff-12 > span").attr("class",st_root.firefox[12]);
				$(".ff-13 > span").attr("class",st_root.firefox[13]);
				$(".ff-14 > span").attr("class",st_root.firefox[14]);
				$(".ff-15 > span").attr("class",st_root.firefox[15]);

				$(".ch-19 > span").attr("class",st_root.chrome[19]);
				$(".ch-20 > span").attr("class",st_root.chrome[20]);
				$(".ch-21 > span").attr("class",st_root.chrome[21]);

				$(".sa-5-1 > span").attr("class",st_root.safari[5.1]);
				$(".sa-5-2 > span").attr("class",st_root.safari[5.2]);

				$(".op-12 > span").attr("class",st_root.opera[12]);

				$(".is-5 > span").attr("class",st_root.ios_saf[5]);

				$(".an-2-3 > span").attr("class",st_root.android[2.3]);
				$(".an-3 > span").attr("class",st_root.android[3]);
				$(".an-4 > span").attr("class",st_root.android[4]);


				// Tabbed data

				// Notes
				var eNotes = json.data[eID].notes;
				if (eNotes != undefined && eNotes != "") {
					$("#entry .tabs .tab-content").eq(0).html(eNotes)
				}

				// Links

				// Spec page

				var spec = json.data[eID].spec;
				if (spec != undefined && spec != "") {
						$("#entry .tabs .tab-content").eq(1).append("<p><a href='"+spec+"'>Specification</a></p>")
				}



				var links = json.data[eID].links;
				if ( links.length > 0 ) {
					$.each(links, function(index, value) { 
						$("#entry .tabs .tab-content").eq(1).append("<p><a href='"+value.url+"'>"+value.title+"</a></p>")
					});
				}

			}

		});

	});


});
