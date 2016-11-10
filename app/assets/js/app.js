var centrePoint = (function($) {

	var init = function() {

		setTimeout(function(){
			$('body').addClass('animate-in');
		}, 250);

		var setVideoSrc = function(format) {
			var video = $('video.video');

			video.append('<source src="assets/video/' + video.attr('data-src') + '.' + format + '" type="video/' + format + '">');
		}

		setBackground = function() {
			var images 			= ['cpc-hero-1', 'cpc-hero-2', 'cpc-hero-3', 'cpc-hero-4'],
					rando = Math.floor(Math.random() * 4),
					singleImage = images[rando],
					backgroundImage = 'url(/assets/img/' + singleImage + '.jpg)'

			$('.hero').css('background-image', backgroundImage);
		}

		// Don't load video if touch device
		if (!Modernizr.touch) {
			setVideoSrc('mp4');
			setVideoSrc('webm');
		} else {
			setBackground();
		}

		$('.carousel').flickity({
		  prevNextButtons: false
		});

		// Define values labels
		var values = ['Know God', 'Find Freedom', "Discover Purpose", "Make a Difference"];

		$('li.dot').each(function(){
			$(this).html(values[$(this).index()]);
		})




  } // end init

return {
  init: init
};

}(jQuery));

$(function() {
  centrePoint.init();
});
