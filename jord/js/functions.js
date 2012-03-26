$(document).ready(function(){


	rotateImgs = function() {
		$("#bkg-imgs li:last-child").fadeOut(1000,function(){
			$(this).clone().prependTo("#bkg-imgs").css({opacity: "1", display: "block"});
			$(this).remove();
		});
	}
	
	isDesktop = function() {
		interval = setInterval("rotateImgs()", 5000);
		$("#bkg-imgs li").each(function(){
			var imgPath = $(this).attr("data-img");
			$(this).css("background-image", "url(i/"+imgPath+".jpg)");
		});
	}

	isMobile = function() {
		$(".divider").each(function(){
			var imgPath = $(this).attr("data-img");
			$(this).css("background-image", "url(i/"+imgPath+"-slice.jpg)");
			$(this).attr("href", "i/"+imgPath+".jpg");
			$(this).addClass("active");
		});
	}

	if ( $(window).width() > 480 ) {
		isDesktop();
	} else {
		isMobile();
	}

}) 