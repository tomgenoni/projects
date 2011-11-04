$(document).ready(function() {

		changeTab = function(trigger) {
			trigger.closest(".tabs").find(".tabs-nav li").removeClass("active");
			trigger.closest("li").addClass("active");
      var e = $(".tabs > ul li a").index(trigger);
			var tab_content = trigger.closest(".tabs").find(".tab-content");
			tab_content.hide();
			tab_content.eq(e).show();
      document.location.hash = trigger.attr("href");
			return false;
		}

		$(".tabs > ul li a").click(function(){
			trigger = $(this);
			changeTab(trigger);
		})
		
		// look for hash and make that the active tab
		// if no hash (the default case) then set the first tab/content active
		if(window.location.hash) {
			var hash_name = window.location.hash;
			trigger = $(".tabs > ul li a[href="+hash_name+"]");
			changeTab(trigger);
		} else {
			$(".tabs > ul li").eq(0).addClass("active");
			$(".tabs .tab-content").eq(0).show();
		}
		
});
