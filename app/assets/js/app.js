var centrePointe = (function($) {

	var $body;

	var init = function() {
    $body = $('body');

		setTimeout(function(){
			$body.addClass('animate-in');
		}, 250);

		// Set video sources on doc load
		var setVideoSrc = function(format) {
			var video = $('video.video');

			video.append('<source src="assets/video/' + video.attr('data-src') + '.' + format + '" type="video/' + format + '">');
		}

		// Set random background image
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

		// Values carousel stuff
		$('.carousel').flickity({
		  prevNextButtons: false
		});

		// Define values labels
		var values = ['Know God', 'Find Freedom', "Discover Purpose", "Make a Difference"];

		// Set values deined above
		$('li.dot').each(function(){
			$(this).html(values[$(this).index()]);
		})

		// Waypoints.js
		$('.hero').waypoint(function(direction) {
			$('.header').toggleClass('header-filled', direction === 'down');
		}, { offset:'-40px' });

		//Scroll Function
	  $('a[href*=#]:not([href=#])').click(function() {
	    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
	      var target = $(this.hash);
	      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	      if (target.length) {
	        $('html,body').animate({
	          scrollTop: target.offset().top-70
	        }, 500);
	        return false;
	      }
	    }
	  });

		// Close mobile nav on element click
		$('nav.nav a').on('click', function() {
			if($('.nav').hasClass('nav-active')) {
				toggleNav('.nav');
			}
		})

  } // end init

	var toggleModal = function(id) {

		// toggle classes
		if($body.hasClass('body-modal-open')) {
			close(id, 'body-modal-open', 'modal-active');
		} else {
			show(id, 'body-modal-open', 'modal-active');
		}

	};

  var toggleNav = function(id) {

    // toggle classes
    if($body.hasClass('nav-open')) {
      close(id, 'nav-open', 'nav-active');
    } else {
      show(id, 'nav-open', 'nav-active');
    }
  }

  // added args so close/show function can be reused for mobile nav
	var show = function(id, bodyClass, activeClass) {

		// add modal open class
		$body.addClass(bodyClass);

		// set timeout for active class to allow css animation
		setTimeout(function() {
			$(id).addClass(activeClass);
		},25);

	}

	var close = function(id, bodyClass, activeClass) {

		// remove modal open class
		$body.removeClass(bodyClass);

		// set timeout for active class to allow css animation
		setTimeout(function() {
			$(id).removeClass(activeClass);
		},25);

    $('.video-container iframe').attr("src", $(".video-container iframe").attr("src"));

	};

	return {
		init		 	  : init,
    toggleModal : toggleModal,
    toggleNav   : toggleNav,
	}

}(jQuery));

$(function() {
  centrePointe.init();
});
