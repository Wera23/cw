$(document).ready(function() { 

    //scrollowanie na następny background-image
	$('a[href^="#"]').on('click', function(event) {
	
		var target = $( $(this).attr('href') );
	
		if( target.length ) {
			event.preventDefault();
			$('html, body').animate({
				scrollTop: target.offset().top
			}, 1000);
		}
	});

});

$(document).ready(function() {
    $('.fontello_html').delay(1000).fadeIn(1000);
    $('.fontello_css').delay(1500).fadeIn(1000);
    $('.fontello_git').delay(2000).fadeIn(1000);
    $('.fontello_wordpress').delay(2500).fadeIn(1000);
    
});