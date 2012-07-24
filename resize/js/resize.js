$(window).load(function(){

		var srcArr = new Array();

		var textImgLength = $(".text-image").length;

		$(".text-image").each(function(i){
			$(this).attr("data-index",i);
		});

		$('body').animate({scrollTop: $(".text-image[data-index='0']").offset().top - 200 },function(){
			$(".text-image[data-index='0']").click();
		});

		$(".text-image").click(function(){
			if ( $(this).hasClass("active") ) {
				$(this).removeClass("active");
				$(".active-halo").hide();
			} else {
				$(".text-image").removeClass("active").removeAttr("data-focus");
				$(this).attr("data-focus","true");
				$(this).addClass("active");
				addBorder();
			}
			return false;
		});

		$("<ul id='panel'><li><b>Frommer's Name of Book</b></li><li>Text Images on Card: "+textImgLength+"</li><li><span class='autosave'>Saving...</span></li><li><a href='#' id='btn-done'>Export</a></li></ul>'").appendTo("body");


		function getClassName(target) {
			var elClass = $(target).attr("src");
			srcArr = elClass.split("/");
			var imgName = srcArr[srcArr.length-1];
			className = imgName.replace(".png","");
		}

		function showLabels() {
			$(".text-image-label").remove();
			$(".text-image").each(function(i){
				getClassName(this);
				var offset = $(this).offset();
				var elHeight = $(this).height();
				var elWidth = $(this).width();
				$("<div class='text-image-label'><b>"+(i+1)+" of "+textImgLength+"</b><br />"+className+"</div>").appendTo("body").css({
					top: offset.top,
					left: 5
				});
			})
		}


		function addBorder(){
			if ( !($(".active-halo").length) ) {
				$("<div class='active-halo'></div>").appendTo("body");
			}
			$(".active-halo").hide();
			var offset = $(".active").offset();
			var activeWidth = $(".active").width();
			var activeHeight = $(".active").height();
			$(".active-halo").css({
				top: offset.top - 5, 
				left: 0,
				right: 0,
				height: activeHeight
			}).stop(true, true).fadeIn("fast");
		}


		$(document).keydown(function(e) {

			if ( $(".active").length ) {
				var curWidth = $(".active").width();
				var curHeight = $(".active").height();
				$(".active-halo").height(curHeight);

				if (e.keyCode == 39 || e.keyCode == 37) {
					if (e.keyCode == 39) {
						var newWidth = curWidth + 1;
					}
					if (e.keyCode == 37) {
						var newWidth = curWidth - 1;
					}
				
					$(".active").width( newWidth );
					return false;
				}

			}
			if ( e.keyCode == 38 || e.keyCode == 40 ) {

				$(".text-image").removeClass("active");
				$(".active-halo").fadeOut();
				var index = Number($(".text-image[data-focus='true']").attr("data-index"));

				if (e.keyCode == 38) {
					var index = index - 1;
				}
				if (e.keyCode == 40) {
					var index = index + 1;
				}

				if ( !(index < 0) && !(index == textImgLength) ) {
					$('body').animate({scrollTop: $(".text-image[data-index='"+index+"']").offset().top - 200 }, "fast");
					$(".text-image[data-focus='true']").click();
					$(".text-image[data-index='"+index+"']").click();
				} else {
					// show end here
				}

				return false;

			}
		});

		$(document).keyup(function(e) {
			if ( $(".active").length ) {
				if (e.keyCode == 39 || e.keyCode == 37) {
					addBorder();
					showLabels();
				}
			}
		});

		showLabels();

		$(window).resize(function() {
			addBorder();
			showLabels();
		});


	}); 