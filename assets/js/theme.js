/*
 *-----------------------------------------------------------------------------------------------------------*
	* Greetings in the console
 *-----------------------------------------------------------------------------------------------------------*
 */

	if (navigator.userAgent.toLowerCase().indexOf("chrome") > -1) {
		var e = ["\n %c Gemacht mit ♥ von Innovationsraum %c %c %c https://www.innovationsraum.de/ %c %c☕️ \n\n", "color: #fff; background: #008dd1; padding:5px 0;", "background: #1ab2c3; padding:5px 0;", "background: #1ab2c3; padding:5px 0;", "color: #fff; background: #34d6b6; padding:5px 0;", "background: #fff; padding:5px 0;", "color: #b0976d; background: #fff; padding:5px 0;"];
		window.console.log.apply(console, e)
	} else {
		window.console && window.console.log("Gemacht mit ♥ von Innovationsraum - https://www.innovationsraum.de/ ☕️");
	}

/*
*-----------------------------------------------------------------------------------------------------------*
* Lazyload
*-----------------------------------------------------------------------------------------------------------*
*/

	var lazyLoadInstance = new LazyLoad({
		elements_selector: ".lazy"
	});


jQuery(function($) {

/*
 *-----------------------------------------------------------------------------------------------------------*
	* Mobile menu
 *-----------------------------------------------------------------------------------------------------------*
 */

	$('.js--trigger-mobile-nav').click(function(){
		$('.header-nav').toggleClass('is-open');
	});

	if(Modernizr.touchevents) {
		$('.has-dropdown a').on('click', function(e){
			e.preventDefault();
			$(this).parent().children('ul').toggleClass('is-open');
		});
	}

/*
 *-----------------------------------------------------------------------------------------------------------*
	* Search input expander
 *-----------------------------------------------------------------------------------------------------------*
 */

	$('#search-trigger').on("click",function(){
		$('#search').toggleClass('is-open');
	});

/*
 *-----------------------------------------------------------------------------------------------------------*
	* Form Text Input
 *-----------------------------------------------------------------------------------------------------------*
 */

	$('.form__item--text .form__item__input').each(function(){
		$(this).on('focusin', function(e){
			 e.preventDefault();

			if ( $(this).val() == '' ) {
			 	$(this).parents('.form__item--text').addClass('js-focusin').find('.form__item__label__text').fadeOut('fast');
			}
		});

		$(this).on('focusout', function(e){
			 e.preventDefault();

			if ( $(this).val() == '' ) {
			 	$(this).parents('.form__item--text').removeClass('js-focusin').find('.form__item__label__text').fadeIn('fast');
			}
		});
	});

/*
 *-----------------------------------------------------------------------------------------------------------*
	* Form Checkbox Styler
 *-----------------------------------------------------------------------------------------------------------*
 */

	 $('.form__item--checkbox').on('click', function(e){
		  e.preventDefault();

		  var obj = $(this).find('.form__item__checkbox-styler');
		  var checkbox = obj.prev().find('input');

		  obj.toggleClass('js-is-checked');
		  checkbox.prop("checked", !checkbox.prop("checked"));
	 });

/*
 *-----------------------------------------------------------------------------------------------------------*
	* Form Select Styler
 *-----------------------------------------------------------------------------------------------------------*
 */

	$('.form__item--select').each(function(){
		var obj = $(this);
		var select_options = $('.form__item__select option', obj);
		var new_select_element = '';

		select_options.each(function(){
			new_select_element += '<li class="select-pretty__list__item" data-value="' + $(this).val() + '">' + $(this).val() + '</li>' ;
		});

		new_select_element = '<div class="select-pretty"><ul class="select-pretty__list">' + new_select_element + '</ul></div>';

		$('.wpcf7-form-control-wrap', obj).after(new_select_element);
		$('.wpcf7-form-control-wrap', obj).append('<span class="form__item__select--js-value">–</span>');

		$('.form__item__select--js-value', obj).on('click', function(){ console.log();
			obj.find('.select-pretty__list').toggleClass('js-is-open');
		});

		$('.select-pretty__list__item', obj).on('click', function(e) {
			e.preventDefault();
			var selected_value = $(this).data('value');

			$(this).parent().toggleClass('js-is-open');

			$('.wpcf7-form-control-wrap .form__item__select--js-value', obj).text(selected_value);

			select_options.filter(function(){
				return this.value == selected_value;
			}).prop('selected', true).change();
		});
	});

/*
 *-----------------------------------------------------------------------------------------------------------*
  * Empty Links
 *-----------------------------------------------------------------------------------------------------------*
 */

	$('a[href="#"]').click(function(e){e.preventDefault();});

/*
 *-----------------------------------------------------------------------------------------------------------*
  * Scroll to Top
  * https://gist.github.com/simshanith/5215698
 *-----------------------------------------------------------------------------------------------------------*
 */

	// * scroll to top link animation
	$(".scroll-to-top").click( function(e) {
		e.preventDefault();
		$('html, body').stop().animate({
				scrollTop: 0
			}, 500);
	});

	// * fade in #back-top
	$(function () {
		$(window).scroll(function () {
			if ($(this).scrollTop() > 100) {
				$('.scroll-to-top').css("opacity",1);
			} else {
				$('.scroll-to-top').css("opacity",0);
			}
		});
	});


/*
 *-----------------------------------------------------------------------------------------------------------*
  * Search
 *-----------------------------------------------------------------------------------------------------------*
 */

	$("#searchform").submit( function() {
		var s = $( this ).find( '.search-input' );
		if ( ! s.val() || s.val() == " " ) {
			//alert( "nope" );
			s.focus();
			return false;
		}
		return true;
	});

/*
 *-----------------------------------------------------------------------------------------------------------*
	* Slideshow on Front-page
 *-----------------------------------------------------------------------------------------------------------*
 */

	// https://owlcarousel2.github.io/OwlCarousel2/demos/animate.html
	if( $('.owl-carousel--home')[0] ){

		var $animateOut = (Modernizr.touchevents) ? false : 'scaleToFade';
		var $animateIn = (Modernizr.touchevents) ? false : 'fadeInUp';
		var owl = $('.owl-carousel--home');

		owl.owlCarousel({
			//animateOut: $animateOut,
			//animateIn: $animateIn,
			itemClass: 'owl-item owl-carousel__item', // use standard owl class and for us the BEM naming ;)
			loop: true,
			autoplay: true,
			autoplayTimeout: 3000,
			nav: true,
			navText: ['<svg class="icon icon-arrow-left"><use xlink:href="' + PATH_TO_THEME + '/assets/img/icons/symbol-defs.svg#icon-arrow-left">','<svg class="icon icon-arrow-right"><use xlink:href="' + PATH_TO_THEME + '/assets/img/icons/symbol-defs.svg#icon-arrow-right"></use></svg>'],
			items:1,
			margin:0,
			stagePadding:0,
			smartSpeed:450,
			mouseDrag: false,
			/*onInitialized: function(event) {
				owl.find('.owl-stage-outer').after('<div class="owl-navigation-wrapper"><div class="owl-navigation"><span class="owl-navigation__current">' + 1 + '</span>/<span class="owl-navigation__slides">' + event.item.count + '</span></div></div>');
				owl.find('.owl-navigation').after('<div class="owl-next"><svg class="owl-next__icon icon icon-arrow-down"><use xlink:href="' + PATH_TO_THEME + '/assets/img/icons/symbol-defs.svg#icon-arrow-down"></use></svg></div>');
				owl.find('.owl-navigation').before('<div class="owl-prev"><svg class="owl-prev__icon icon icon-arrow-down"><use xlink:href="' + PATH_TO_THEME + '/assets/img/icons/symbol-defs.svg#icon-arrow-up"></use></svg></div>');

				var has_nav_already_triggered = false;

				owl.find('.owl-next').on('click', function(){

					if ( !has_nav_already_triggered ) {
						has_nav_already_triggered = true;
						owl.trigger('next.owl.carousel');

						setTimeout(function(){
							has_nav_already_triggered = false;
						}, 1000);
					}

				});

				owl.find('.owl-prev').on('click', function(){

					if ( !has_nav_already_triggered ) {
						has_nav_already_triggered = true;
						owl.trigger('prev.owl.carousel');

						setTimeout(function(){
							has_nav_already_triggered = false;
						}, 1000);
					}

				});
			},
			onTranslate: function(event) {
				// https://github.com/OwlCarousel2/OwlCarousel2/issues/1029
				var current = (event.item.index + 1) - event.relatedTarget._clones.length / 2;
				var allItems = event.item.count;
				if (current > allItems || current == 0) {
					current = allItems - (current % allItems);
				}

				owl.find('.owl-navigation__current').text(current);
			}*/

		});
	}

/*
 *-----------------------------------------------------------------------------------------------------------*
	* Fancybox Lightbox
	* http://fancyapps.com/fancybox/3/docs/#usage
 *-----------------------------------------------------------------------------------------------------------*
 */

 	/*$('[data-fancybox]').fancybox({
 		animationEffect : 'fade',
 		idleTime: false,
		// place the caption inside the image wrapper, so the element has the same width as the image
 		afterShow: function( instance, current ) {
 			//console.log(instance.current.type);
 			if ( $('.fancybox-slide--current > .fancybox-image-wrap > .fancybox-caption-wrap')[0] ) {
 				var cloned = $('.fancybox-inner > .fancybox-caption-wrap').clone();

 				$('.fancybox-slide--current > .fancybox-image-wrap > .fancybox-caption-wrap').replaceWith(cloned);

 			}else{
 				$('.fancybox-inner > .fancybox-caption-wrap').clone().appendTo('.fancybox-slide--current > .fancybox-image-wrap');
 			}

 		}
 	});*/

/*
 *-----------------------------------------------------------------------------------------------------------*
	* Accordion
 *-----------------------------------------------------------------------------------------------------------*
 */

	$('.js-add-accordion').each(function(){

		var obj = $(this);
		var content = obj.find('.js-is-accordion-content');
		var title = obj.find('.js-is-accordion-title');

		obj.data( 'height', content.height() );
		content.height(0);

		obj.find('.js--trigger-accordion').on('click',function(e){
		e.preventDefault();

		// auto close before opening other accordions
		//$('.js-is-accordion-content').removeClass('is-open');

		title.toggleClass('is-open');

		if( content.hasClass('is-open') ) {
				content.height(0).removeClass('is-open');
			} else {
				content.css( 'height', obj.data('height') ).addClass('is-open');
			}
		});

	 });


	$(window).on('resize',function(){
		$('.js-add-accordion').each(function(){

			var obj = $(this);

			obj.css('height', 'auto');
			obj.data( 'height', obj.height() );
			obj.height(0);
			if( obj.hasClass('is-open') ) { obj.css( 'height', obj.data('height') ).addClass('is-open'); }

		});
	});

/*
 *-----------------------------------------------------------------------------------------------------------*
	* Video
 *-----------------------------------------------------------------------------------------------------------*
 */

	if( $('.video')[0] ){
		$('.video').each(function(){

			$(this).on('click',function(){
				$('.video__thumbnail', this).addClass('is-playing');
				$('.video__source', this).get(0).play();
			});

		});
	};

/*
 *-----------------------------------------------------------------------------------------------------------*
	* jQuery end
 *-----------------------------------------------------------------------------------------------------------*
 */

});
