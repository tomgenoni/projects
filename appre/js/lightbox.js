 	//triggers grayed out screen, adds message for user
 	//accepts custom width if need be

 	showLightbox = function(id, options) {
 	  var defaults = {
			title: null,
 	    width: 'auto',
 	    height: 'auto',
      table_class: '',
 	    css: {},
 	    showCloseButton: true
 	  }
    var options = $.extend(true, defaults, options);
		var html = $(id).html();
	  var btnClose = '';
		var lightboxTitle = '';
		
		if ( options.title ) {
			lightboxTitle = '<h3>' + options.title + '</h3>';
		} 
	  
	  if (options.showCloseButton) {
   		btnClose =  '<span onclick="hideLightbox(); return false;" class="ico-close"></span>';
 		}
 		
 		$()
 		
 		// insert the layers, the dimmer itself and the dimmer message with inserted text
 		var $lbbkg = $('<div id="lightbox-bkg"></div>').appendTo("body");
 		var $lbmessage = $('<div id="lightbox" class="'+options.table_class+'"><div class="content">'+ btnClose + lightboxTitle + html + '</div></div>').appendTo(document.body);
		
 		var ieScrollTop = 0;

	
  		// Determine and set negative marginLeft to pull it back to center
 		if (Number(options.width)) {
 			var messageWidth = options.width;
 			$lbmessage.width(options.width);
 		} else {
 			var messageWidth = $lbmessage.width();
 		}
 		var messageLftMarg = ( messageWidth / 2 ) - messageWidth; 
 		$lbmessage.css("marginLeft",messageLftMarg);
	
  		// Determine and set negative marginTop to pull it back to center
  		if (Number(options.height)) {
  		  var messageHeight = options.height;
  		  $lbmessage.height(options.height)
  		} else {
   		var messageHeight = $lbmessage.height();
  		}
 		var messageTopMarg = ( messageHeight / 2 ) - messageHeight + ieScrollTop; 
 		$lbmessage.css("marginTop",messageTopMarg);
 		// Apply any custom css
	  $lbmessage.css(options.css);
	
 		if ($.browser.opera) { // have to do this wonky show/hide for opera because the flash layer peeks through otherwise
 			$("#flashItem").css("visibility","hidden");
 			$("#lightbox-bkg, #lightbox").show();
 			$("#flashItem").css("visibility","visible");
 		} else {
 			// fade in, then fade in message, fixes issue with IE
 			// using 'hide' is a fix for opera, fadeIn now uses 'block' instead of 'table'
			$lbbkg.hide().show();
 			$lbmessage.fadeIn("fast"); 
 		}

 	}


 	// hides the dimmer and the message
 	hideLightbox = function(){
		$("#lightbox-bkg, #lightbox").fadeOut("fast",function(){
			$("#lightbox-bkg, #lightbox").remove();
		}); 
 	}

	$('#submit-btn').live('click', function() {
	  $("body").find("#form-1").hide();
	  $("body").find("#form-2").show();
	  return false;
	});
