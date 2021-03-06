/*
	Read Only by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	var $window = $(window),
		$body = $('body'),
		$header = $('#header'),
		$titleBar = null,
		$nav = $('#nav'),
		$wrapper = $('#wrapper');

	// Breakpoints.
		breakpoints({
			xlarge:   [ '1281px',  '1680px' ],
			large:    [ '1025px',  '1280px' ],
			medium:   [ '737px',   '1024px' ],
			small:    [ '481px',   '736px'  ],
			xsmall:   [ null,      '480px'  ],
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Tweaks/fixes.

		// Polyfill: Object fit.
			if (!browser.canUse('object-fit')) {

				$('.image[data-position]').each(function() {

					var $this = $(this),
						$img = $this.children('img');

					// Apply img as background.
						$this
							.css('background-image', 'url("' + $img.attr('src') + '")')
							.css('background-position', $this.data('position'))
							.css('background-size', 'cover')
							.css('background-repeat', 'no-repeat');

					// Hide img.
						$img
							.css('opacity', '0');

				});

			}

	// Header Panel.

		// Nav.
			var $nav_a = $nav.find('a');

			$nav_a
				.addClass('scrolly')
				.on('click', function() {

					var $this = $(this);

					// External link? Bail.
						if ($this.attr('href').charAt(0) != '#')
							return;

					// Deactivate all links.
						$nav_a.removeClass('active');

					// Activate link *and* lock it (so Scrollex doesn't try to activate other links as we're scrolling to this one's section).
						$this
							.addClass('active')
							.addClass('active-locked');

				})
				.each(function() {

					var	$this = $(this),
						id = $this.attr('href'),
						$section = $(id);

					// No section for this link? Bail.
						if ($section.length < 1)
							return;

					// Scrollex.
						$section.scrollex({
							mode: 'middle',
							top: '5vh',
							bottom: '5vh',
							initialize: function() {

								// Deactivate section.
									$section.addClass('inactive');

							},
							enter: function() {

								// Activate section.
									$section.removeClass('inactive');

								// No locked links? Deactivate all links and activate this section's one.
									if ($nav_a.filter('.active-locked').length == 0) {

										$nav_a.removeClass('active');
										$this.addClass('active');

									}

								// Otherwise, if this section's link is the one that's locked, unlock it.
									else if ($this.hasClass('active-locked'))
										$this.removeClass('active-locked');

							}
						});

				});

		// Title Bar.
			$titleBar = $(
				'<div id="titleBar">' +
					'<a href="#header" class="toggle"></a>' +
					'<span class="title">' + $('#logo').html() + '</span>' +
				'</div>'
			)
				.appendTo($body);

		// Panel.
			$header
				.panel({
					delay: 500,
					hideOnClick: true,
					hideOnSwipe: true,
					resetScroll: true,
					resetForms: true,
					side: 'left',
					target: $body,
					visibleClass: 'header-visible'
				});

	// Scrolly.
		$('.scrolly').scrolly({
			speed: 1000,
			offset: function() {

				if (breakpoints.active('<=medium'))
					return $titleBar.height();

				return 0;

			}
		});

	//Modal Image
	var degreeModal = document.getElementById("degreeModal");
	var diplomaModal = document.getElementById("diplomaModal");
	var certificateModal = document.getElementById("certificateModal");

	// Get the image and insert it inside the modal - use its "alt" text as a caption
	var degreeImg = document.getElementById("degreeImg");
	var diplomaImg = document.getElementById("diplomaImg");
	var certificateImg = document.getElementById("certificateImg");

	var degreeImg01 = document.getElementById("degreeImg01");
	var diplomaImg01 = document.getElementById("diplomaImg01");
	var certificateImg01 = document.getElementById("certificateImg01");

	degreeImg.onclick = function(){
		degreeModal.style.display = "block";
		degreeImg01.src = this.src;
	}

	diplomaImg.onclick = function(){
		diplomaModal.style.display = "block";
		diplomaImg01.src = this.src;
	}

	certificateImg.onclick = function(){
		certificateModal.style.display = "block";
		certificateImg01.src = this.src;
	}

	// Get the <span> element that closes the modal
	var span1 = document.getElementsByClassName("close")[0];
	var span2 = document.getElementsByClassName("close")[1];
	var span3 = document.getElementsByClassName("close")[2];

	// When the user clicks on <span> (x), close the modal
	span1.onclick = function() {
		degreeModal.style.display = "none";
	}

	span2.onclick = function() {
		diplomaModal.style.display = "none";
	}

	span3.onclick = function() {
		certificateModal.style.display = "none";
	}

	// When the user clicks anywhere outside of the modal, close it
	window.onclick = function(event) {
		if (event.target == degreeModal || event.target == certificateModal || event.target == diplomaModal) {
		degreeModal.style.display = "none";
		diplomaModal.style.display = "none";
		certificateModal.style.display = "none";
		}
  	}

})(jQuery);