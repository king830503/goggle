

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
		if(found_ad) {
			sendResponse({found: "ad"});
		}
		else {
			sendResponse({found: "no_ad"});
		}
  });  
  
 
var text='';
var $ = jQuery.noConflict();

var iframe_src_filters = [
	'ads.cnn',
	'tripleclick',
	'banner',
	'mediaplex',
	'doubleclick',
	'adpage',
	'pointroll',
	'advertising',
	'tellapart',
	'w55c.net',
	'netmng.com',
	'yieldoptimizer.com',
	'2mdn.net',
	"background:transparent",
	'google_ads',
	'blurbiq',
	'adzerk',
	'aswift'
	
];
var image_bg_filters = [
	'fbcdn-creative-a.akamaihd.net'
];
var image_src_filters = [
	'atdmt.com',
	'adzerk',
	'googlesyndication',
	'doubleclick',
	'serving-sys.com',
	'rfihub.net',
	'2mdn.net',
	'adnxs.com',
	'SponsoredListings',
	'mediaplex.com',
	's.aolcdn',
	'fbcdn-creative-a.akamaihd.net',	
	'www.facebook.com%2Fads'	
];

var object_data_filters = [
	'googlesyndication.com',
	'serving-sys.com',
	'cdn.mm.atwola.com'

];

var embed_src_filters = [
	'moatads.com',
	'2mdn.net'
];

$(document).ready(function(){		
	
	filterads();

	setTimeout( filterads, 1000 );
	setTimeout( filterads, 2500 );
	setTimeout( filterads, 5000 );
	setTimeout( checkAdsFound, 6000 );
	
	function checkAdsFound() {
		if(!found_ad) {
				console.log('no ads found');
			   var this_page = encodeURIComponent(document.URL);
			  $('body').append("<div style='color:white'><div>");  
		}
	}
	var filter_count;
	var found_ad = false;
	

	
	var scrollTimer = null;
	$(window).scroll(function(){
		if (scrollTimer) {
        	clearTimeout(scrollTimer);   // clear any previous pending timer
	    }
		scrollTimer = setTimeout(filterads, 500); 
	   filterads();
	})
	
});


  
function filterads() {
	
	 scrollTimer = null;

	$("iframe").each(function() { 
    	var src= $(this).attr('src');
		if (src === undefined) {
			var src = $(this).attr('id');	
		}
		if (src === undefined) {
			var src = '';	
		}
			height = $(this).height();
			width = $(this).width();
		
			for (var i = 0; i < iframe_src_filters.length; i++) {
				 if(src.toLowerCase().indexOf(iframe_src_filters[i]) > -1) {
					 found_ad = true;
					 $('body').append("<div style='color:white'><div>");
					$(this).replaceWith( "<div style='color:white; width: "+width+"px; height:"+height+"px; overflow:visible; '></div>" );
				 }
			}	
		
	});
	
	$("embed").each(function() {
		var src= $(this).attr('src');
		if (src === undefined) {
			var src = $(this).attr('id');	
		}
		if (src === undefined) {
			var src = '';	
		}
		else{
			height = $(this).height();
			width = $(this).width();
		
			for (var i = 0; i < embed_src_filters.length; i++) {
				 if(src.toLowerCase().indexOf(embed_src_filters[i]) > -1) {
					 found_ad = true;
					 $('body').append("<div style='color:white'><div>");
				$(this).replaceWith( "<div  style='width:color:white'; "+width+"px; height:"+height+"px; overflow:visible; '></div>"  );
					 }
			}		
		}
			
	});

	$("object").each(function() {
		
		var src= $(this).attr('data');
		if (src === undefined) {
			var src = $(this).attr('id');	
		}
		if (src === undefined) {
			var src = '';	
		}
		else{
			height = $(this).height();
			width = $(this).width();

			for (var i = 0; i < object_data_filters.length; i++) {
				 if(src.toLowerCase().indexOf(object_data_filters[i]) > -1) {
				 found_ad = true;
					$(this).replaceWith( "<div  style='width: color:white;"+width+"px; height:"+height+"px; overflow:visible; '></div>" );
				 }
			}		
		}
			
	});
	
	$("img").each(function() { 
    	var src= $(this).attr('src');

		if (src === undefined) {
			var src = $(this).attr('deferredsrc');	
		}
		if (src === undefined) {
			var src = $(this).attr('delaysrc');	
		}
		
		if (src === undefined) {
			var src = '';	
		}
		
		height = $(this).height();
		width = $(this).width();
		
		for (var i = 0; i < image_src_filters.length; i++) {

				 if(src.toLowerCase().indexOf(image_src_filters[i]) > -1 ) {
					
					 if(src.indexOf('petads') < 1) {
						 found_ad = true;
						$(this).replaceWith( "<div  style='color:white; width: "+width+"px; height:"+height+"px; overflow:visible; '></div>" );
					 }
			 }
			 
		}

		var bg_img = $(this).css('background-image');			
		if(bg_img!='none') {			
			for (var i = 0; i < image_bg_filters.length; i++) {
				 if(bg_img.toLowerCase().indexOf(image_bg_filters[i]) > -1 ) {
					found_ad = true;
					$(this).replaceWith( "<div  style='color:white; width: "+width+"px; height:"+height+"px; overflow:visible; '></div>");						
				 }
				 
			}	
			
		}
	});	
	
	
}
