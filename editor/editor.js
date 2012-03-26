$(document).ready(function(){
	
	$('#editor').mouseenter(function() {
		$(this).stop().animate({ opacity: "1" },500);
	}).mouseleave(function() {
		var scrollTop = $(this).scrollTop();
		console.log(scrollTop);
		$('#content').scrollTop(scrollTop);

		$(this).stop().animate({ opacity: "0" },500);
		var converter = new Markdown.Converter();
		var data = $("#editor").val();
		var html = converter.makeHtml(data);
		$('#content').html(html);
	});

}) 