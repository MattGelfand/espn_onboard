$(window).scroll(function() {
		$('.square-right').each(function(){
		var imagePos = $(this).offset().top;

		var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow+500) {
				/*console.log('line 7');*/
				$(this).addClass("slideUp");
			}
		});
	});

$(window).scroll(function() {
		$('.square-left').each(function(){
		var imagePos = $(this).offset().top;

		var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow+500) {
				/*console.log('line 7');*/
				$(this).addClass("slideUp");
			}
		});
	});

$(window).scroll(function() {
		$('.dual').each(function(){
		var imagePos = $(this).offset().top;

		var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow+350) {
				/*console.log('line 7');*/
				$(this).addClass("slideRight");
			}
		});
	});

$(window).scroll(function() {
		$('.dual-left').each(function(){
		var imagePos = $(this).offset().top;

		var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow+350) {
				/*console.log('line 7');*/
				$(this).addClass("slideLeft");
			}
		});
	});


// Picture element HTML5 shiv
document.createElement( "picture" );


$('.phone').click(function() {
	transition({ skewX:'30deg'})
});




