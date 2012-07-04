$(document).ready(function() {

	$(".tabs > ul li a").click(function(){
		trigger = $(this);
		changeTab(trigger);
		return false;
	})

	changeTab = function(trigger) {
		var tabSet =  trigger.closest(".tabs");
		tabSet.find(".tabs-nav li").removeClass("active");
		trigger.closest("li").addClass("active");
		var e = tabSet.find("ul li a").index(trigger);
		var tab_content = trigger.closest(".tabs").find(".tab-content");
		tab_content.hide();
		tab_content.eq(e).show();
	}

});
