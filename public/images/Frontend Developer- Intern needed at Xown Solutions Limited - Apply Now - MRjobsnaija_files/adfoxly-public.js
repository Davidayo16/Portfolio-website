(function ($) {
	'use strict';

	/**
	 * All of the code for your public-facing JavaScript source
	 * should reside in this file.
	 *
	 * Note: It has been assumed you will write jQuery code here, so the
	 * $ function reference has been prepared for usage within the scope
	 * of this function.
	 *
	 * This enables you to define handlers, for when the DOM is ready:
	 *
	 * $(function() {
	 *
	 * });
	 *
	 * When the window is loaded:
	 *
	 * $( window ).load(function() {
	 *
	 * });
	 *
	 * ...and/or other possibilities.
	 *
	 * Ideally, it is not considered best practise to attach more than a
	 * single DOM-ready or window-load handler for a particular page.
	 * Although scripts in the WordPress core, Plugins and Themes may be
	 * practising this, we should strive to set a better example in our own work.
	 */


	var nextBanner = function (adzone) {
		var active       = adzone.getElementsByClassName('active'),
		    a            = adzone.querySelectorAll('[data-adfoxly-banner-id]'),
		    z            = 0,
		    x            = 0,
		    y,
		    bannerId,
		    intervalTime = 5,
		    dataInterval = adzone.getAttribute('data-adfoxly-interval');

		if (null != dataInterval && 0 != dataInterval) {
			intervalTime = dataInterval;
		}

		var interval = setInterval(function () {

			y = z + 1;
			if (y > a.length - 1) {
				y = 0;
			}

			a[z].setAttribute('class', 'hide');
			a[y].setAttribute('class', 'active');

			if (x < a.length) {
				bannerId = a[y].getAttribute('data-adfoxly-banner-id');
				// saveView(bannerId);
				// saveView();
				x++;
			}

			z++;

			if (z > a.length - 1) {
				z = 0;
			}

		}, intervalTime * 1000);
	};

	function Utils() {
	}
	Utils.prototype = {
		constructor: Utils,
		isElementInView: function (element, fullyInView) {
			var pageTop = jQuery(window).scrollTop();
			var pageBottom = pageTop + jQuery(window).height();
			var elementTop = jQuery(element).offset().top;
			var elementBottom = elementTop + jQuery(element).height();

			if (fullyInView === true) {
				return ((pageTop < elementTop) && (pageBottom > elementBottom));
			} else {
				return ((elementTop <= pageBottom) && (elementBottom >= pageTop));
			}
		}
	};

	var Utils = new Utils();


	function isVisibleInView() {
		var $banner_el = jQuery("[data-adfoxly-banner-id]");
		$banner_el.each(function( index ) {
			var isElementInView = Utils.isElementInView($banner_el[index], false);

			if (isElementInView) {
				if ( $banner_el[index]['classList'][0] === 'active' ) {
					var $banner_id = $banner_el[index]['dataset']['adfoxlyBannerId'];
					if (adFoxlyListOfViewed.includes($banner_id)) {
					} else {
						if (typeof ga !== 'undefined') {
							ga("send", "event", "AdFoxly", "View", $banner_id);
						}
						adFoxlyListOfViewed.push($banner_id);
					}
				}
			}
		});
	}


	var adFoxlyListOfViewed = [];

	document.addEventListener("DOMContentLoaded", function (event) {

		var adzones;
		adzones = document.querySelectorAll('[data-adfoxly-interval]');

		for (var j = 0; j < adzones.length; j++) {
			if (adzones[j].hasChildNodes()) {
				nextBanner(adzones[j]);
			}
		}

		jQuery("a[data-adfoxly-banner-id]").click(function (e) {
			// var $href = jQuery(this).find("a").attr("data-target");
			var $clickedId = jQuery(this).attr('data-adfoxly-banner-id');
			if (typeof ga !== 'undefined') {
				ga("send", "event", "AdFoxly", "Click", $clickedId);
			}
		});

		jQuery(".adfoxly-close").click(function (e) {
			var $adzoneId = jQuery(this).attr('data-adzone-id');
			var $currentNumber = getCookie('adfoxly_number_' + $adzoneId);

			setCookie('adfoxly_' + $adzoneId, 'true', 7);
			if ($currentNumber !== null) {
				$currentNumber = parseInt($currentNumber) + 1;
				setCookie('adfoxly_number_' + $adzoneId, $currentNumber, 7);
			} else {
				setCookie('adfoxly_number_' + $adzoneId, 1, 7);
			}

		});

		jQuery(".adfoxly-close-sticky-x").click(function (e) {
			jQuery('.adfoxly-wrapper.sticky.sticky-bottom').hide();
		});

		jQuery(".adfoxly-close-sticky-top-x").click(function (e) {
			jQuery('.adfoxly-wrapper.sticky.sticky-top').hide();
		});

		jQuery(".adfoxly-close-sticky-left-x").click(function (e) {
			jQuery('.adfoxly-wrapper.sticky.sticky-left').hide();
		});

		jQuery(".adfoxly-close-sticky-right-x").click(function (e) {
			jQuery('.adfoxly-wrapper.sticky.sticky-right').hide();
		});


		var popupDelayZones;
		popupDelayZones = document.querySelectorAll('.adfoxly-place-delay');

		for (var ajr = 0; ajr < popupDelayZones.length; ajr++) {
			// popupDelayZones[ajr].style.display = "block";
			var popupDelayAttr = popupDelayZones[ajr].getAttribute('data-delay');
			popupDelayAttr = popupDelayAttr * 1000;

			setTimeout(showPopup, popupDelayAttr);
		}

		function showPopup() {
			var popupDelayZones;
			popupDelayZones = document.querySelectorAll('.adfoxly-place-delay');

			for (var aj = 0; aj < popupDelayZones.length; aj++) {
				popupDelayZones[aj].style.display = "block";
			}
		}




		isVisibleInView();
		var isScrolling;

		window.addEventListener('scroll', function ( event ) {
			window.clearTimeout( isScrolling );
			isScrolling = setTimeout(function() {
				isVisibleInView();
			}, 66);
		}, false);


		var adfoxlyPopupOverlay = document.getElementsByClassName('adfoxly-overlay');
		var closeButtons = document.getElementsByClassName('adfoxly-close-x');
		var closeButtonsStickyBottom = document.getElementsByClassName('adfoxly-close-x');

		function closeOverlay() {
			for (var i = 0; i < adfoxlyPopupOverlay.length; i++)
			{
				adfoxlyPopupOverlay[i].style.display = "none";
			}
		}

		for (var i = 0; i < closeButtons.length; i++)
		{
			closeButtons[i].addEventListener("click", closeOverlay);
		}

		for (var i = 0; i < closeButtons.length; i++)
		{
			closeButtons[i].addEventListener("click", closeOverlay);
		}
	});


	function setCookie(name,value,days) {
		var expires = "";
		if (days) {
			var date = new Date();
			date.setTime(date.getTime() + (days*24*60*60*1000));
			expires = "; expires=" + date.toUTCString();
		}
		document.cookie = name + "=" + (value || "")  + expires + "; path=/";
	}
	function getCookie(name) {
		var nameEQ = name + "=";
		var ca = document.cookie.split(';');
		for(var i=0;i < ca.length;i++) {
			var c = ca[i];
			while (c.charAt(0)==' ') c = c.substring(1,c.length);
			if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
		}
		return null;
	}
	function eraseCookie(name) {
		document.cookie = name+'=; Max-Age=-99999999;';
	}


})(jQuery);

