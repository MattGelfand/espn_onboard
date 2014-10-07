$(window).scroll(function() {
		$('.pats').each(function(){
		var imagePos = $(this).offset().top;

		var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow+218) {
				$(this).addClass("slideLeft");
			}
		});
	});


var s = skrollr.init({
    	render: function(data) {
        //Log the current scroll position.
        console.log(data.curTop);
    		}
		});
