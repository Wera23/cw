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


jQuery(document).ready(function() {
    $(".square_miniature").mouseover(function() {
        $(this).css("opacity", "1");
    }).mouseout(function() {
        $(this).css("opacity", "0.2");
    });
});

//pojawiani się tekst
$(document).ready(function(){

    $('*[data-animate]').addClass('hide').each(function(){
  $(this).viewportChecker({
    classToAdd: 'show animated ' + $(this).data('animate'),
    classToRemove: 'hide',
    offset: '30%'
  });
});

//pojawienie się linka po czasie
$(document).ready(function() { 
    setTimeout(function() { 
        $('.link').fadeIn(); 
 }, 3000); 
});
    

});
