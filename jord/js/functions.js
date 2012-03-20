$(document).ready(function(){

	desktopFired = false;
	mobileFired = false;

	rotateImgs = function() {
		$("#bkg-imgs li:last-child").fadeOut(1000,function(){
			$(this).clone().prependTo("#bkg-imgs").css({opacity: "1", display: "block"});
			$(this).remove();
		});
	}
	
	isDesktop = function() {
		interval = setInterval("rotateImgs()", 5000);
		desktopFired = true;
		$("#bkg-imgs li").each(function(){
			var imgPath = $(this).attr("data-img");
			$(this).css("background-image", "url(i/"+imgPath+".jpg)");
		});
	}

	isMobile = function() {
		mobileFired = true;
		$(".divider").each(function(){
			var imgPath = $(this).attr("data-img");
			$(this).css("background-image", "url(i/"+imgPath+"-slice.jpg)");
			$(this).attr("href", "i/"+imgPath+".jpg");
			$(this).addClass("active");
		});
	}

	init = function() {
		if ( $("#box").css("position") == "absolute" ) {
			isDesktop();
		} else {
			isMobile();
		}
	}


	$(window).resize(function() {
		if ( desktopFired == false && $("#box").css("position") == "absolute" )  {
			isDesktop();
		} else if ( mobileFired == false ) {
			isMobile();
		}
	});

	init();

}) 