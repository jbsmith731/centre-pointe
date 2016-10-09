var centrePoint = (function($) {

	var init = function() {

		setTimeout(function(){
			$('body').addClass('animate-in');
		}, 250);

		var setVideoSrc = function(format) {
			var video = $('video.video');

			video.append('<source src="assets/video/' + video.attr('data-src') + '.' + format + '" type="video/' + format + '">');
		}

		setVideoSrc('mp4');

  } // end init

return {
  init: init
};

}(jQuery));

$(function() {
  centrePoint.init();
});
