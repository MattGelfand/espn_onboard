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
			if (imagePos < topOfWindow+650) {
				/*console.log('line 7');*/
				$(this).addClass("slideRight");
			}
		});
	});

$(window).scroll(function() {
		$('.dual-left').each(function(){
		var imagePos = $(this).offset().top;

		var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow+650) {
				/*console.log('line 7');*/
				$(this).addClass("slideLeft");
			}
		});
	});





var slider = new IdealImageSlider.Slider({
    selector: '#slider',
    height: 400, // Required but can be set by CSS
    interval: 4000,
    previousNavSelector: '#backtop',
});
slider.addBulletNav();
slider.start();









	/*var s = skrollr.init({
    	render: function(data) {
        //Log the current scroll position.
        console.log(data.curTop);
    		}
		});


function enableSkrollr() {
	console.log('we are on desktop');

	var s = skrollr.init({
    	render: function(data) {
        //Log the current scroll position.
        console.log(data.curTop);
    		}
		});
}

function disableSkrollr() {
	console.log('we are on mobile');

	var s = skrollr.init();
	s.destroy();
}

enquire.register("screen and (min-width: 40rem)", {
    match : function() {
        enableSkrollr();
    },  
    unmatch : function() {
        disableSkrollr();
    }
});
*/