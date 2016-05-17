var centrePoint = (function($) {

	var init = function() {

		setTimeout(function(){
			$('body').addClass('animate-in');
		}, 250);

  } // end init

return {
  init: init
};

}(jQuery));

$(function() {
  centrePoint.init();
});
