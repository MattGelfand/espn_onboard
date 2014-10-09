$(window).scroll(function() {
		$('#mag').each(function(){
		var imagePos = $(this).offset().top;

		var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow+200) {
				console.log('line 7');
				$(this).addClass("expandUp");
			}
		});
	});


var s = skrollr.init({
    	render: function(data) {
        //Log the current scroll position.
        console.log(data.curTop);
    		}
		});
