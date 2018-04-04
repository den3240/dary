//MENU ICON
!function(n,r){"function"==typeof define&&define.amd?define(r):"object"==typeof exports?module.exports=r():n.transformicons=r()}(this||window,function(){"use strict";var n={},r="tcon-transform",t={transform:["click"],revert:["click"]},e=function(n){return"string"==typeof n?Array.prototype.slice.call(document.querySelectorAll(n)):"undefined"==typeof n||n instanceof Array?n:[n]},o=function(n){return"string"==typeof n?n.toLowerCase().split(" "):n},f=function(n,r,f){var c=(f?"remove":"add")+"EventListener",u=e(n),s=u.length,a={};for(var l in t)a[l]=r&&r[l]?o(r[l]):t[l];for(;s--;)for(var d in a)for(var v=a[d].length;v--;)u[s][c](a[d][v],i)},i=function(r){n.toggle(r.currentTarget)};return n.add=function(r,t){return f(r,t),n},n.remove=function(r,t){return f(r,t,!0),n},n.transform=function(t){return e(t).forEach(function(n){n.classList.add(r)}),n},n.revert=function(t){return e(t).forEach(function(n){n.classList.remove(r)}),n},n.toggle=function(t){return e(t).forEach(function(t){n[t.classList.contains(r)?"revert":"transform"](t)}),n},n});

transformicons.add('.tcon')

/*!
 * Simple jQuery Equal Heights
 *
 * Copyright (c) 2013 Matt Banks
 * Dual licensed under the MIT and GPL licenses.
 * Uses the same license as jQuery, see:
 * http://docs.jquery.com/License
 *
 * @version 1.5.1
 */
!function(a){a.fn.equalHeights=function(){var b=0,c=a(this);return c.each(function(){var c=a(this).innerHeight();c>b&&(b=c)}),c.css("min-height",b)},a("[data-equal]").each(function(){var b=a(this),c=b.data("equal");b.find(c).equalHeights()})}(jQuery);


$(document).on('ready', function() {

	$(document).on('click', '[data-toggle="lightbox"]', function(event) {
	    event.preventDefault();
	    $(this).ekkoLightbox();
	});

	footer();

	$(window).on('load', function() {

		footer();
		
		$('.touch-menu').on('click', function(e) {
			e.preventDefault();
			$('.menu').slideToggle();
		});

		$('.eq-height.item').css('min-height', 'auto');
		$('.eq-height.text').css('min-height', 'auto');
		$('.eq-height.catalog-item').css('min-height', 'auto');
		$('.eq-height.item').equalHeights();
		$('.eq-height.catalog-item').equalHeights();
		$('.eq-height.text').equalHeights();
		$('.products-section .item .image').equalHeights();
		$('.production-table .eq-height.text').css('min-height', 'auto');
		$('.production-table .eq-height.text').equalHeights();
		$('.production-table .eq-height.title').css('min-height', 'auto');
		$('.production-table .eq-height.title').equalHeights();
		$('.production-table .eq-height.item').css('min-height', 'auto');
		$('.production-table .eq-height.item').equalHeights();
		$('.production-table .eq-height.text-wrapper').css('min-height', 'auto');
		$('.production-table .eq-height.text-wrapper').equalHeights();
		catalog_logo();


    	release_count();
    	if ($('input[type="file"]').length) {
   			$('input[type="file"]').styler();
    	}
    	if ($('input[type="checkbox"]').length) {
   			$('input[type="checkbox"]').styler();
    	}
  	




			$('.menu .dropdown').each(function () {
				var wid = $(window).width();

				if (wid > 1200) {
					dropdown($(this), $(this).closest('li').find('.dropdown-menu'), 'mouseenter');
				}
			});

			$('.menu .dropdown > a').on('click', function(e) {
				var wid = $(window).width();

				if (wid > 1200) {
						document.location.href = $(this).attr('href');
				}
			});

					$('.menu > li > a').on('click', function(e) {
							
						document.location.href = $(this).attr('href');
					});





			$('.map-location').on('click', function(e) {
				e.preventDefault();
				$(this).toggleClass('active').siblings().removeClass('active');

			});

			$('.map-filter input[type="checkbox"]').on('change', function() {
				filter();
				clearlocations();
			});

			$('a.filter-city.botflt').on('click', function(e) {
				e.preventDefault();
				var nameid = $(this).attr('data-name-id');

				$('.map-location').each(function() {
					if($(this).attr('data-name-id') === nameid) {
						$(this).trigger('click');
					}
				});

			})
			$('a.filter-city.toflt').on('click', function(e) {
				e.preventDefault();
				var nameid = $(this).attr('data-name-id');

				$('.map-location').each(function() {
					
					if($(this).attr('data-name-id') === nameid) {
						$(this).addClass('visible');
						$(this).trigger('click');
					}
				});

			})
			
			
			function clearlocations() {
				$('.map-location').each(function() {
					$(this).removeClass('active');
				});
			}
			function filter() {
				var prodcheckbox = $('.map-filter input.prod-filter');
				var distcheckbox = $('.map-filter input.dist-filter');
				var allvisible=0;
				if (prodcheckbox.prop('checked') === true && distcheckbox.prop('checked') === true ) { 
					allvisible=1;
				}
				if (prodcheckbox.prop('checked') === false && distcheckbox.prop('checked') === false ) { 
					allvisible=1;
				}
				if (allvisible) {

					$('.map-items-list .map-location').each(function() {
						
							$(this).addClass('visible');

					});
					$('.filter-city.botflt').each(function() {
						
							$(this).addClass('visible');

					});
				} else {
					$('.map-items-list .map-location').each(function() {
						var dist = $(this).attr('data-dist');
						var prod = $(this).attr('data-prod');
						var filial = $(this).attr('data-filial');
						$(this).removeClass('visible');
						if ((distcheckbox.prop('checked') === true && dist === '1') || (prodcheckbox.prop('checked') === true && prod === '1')) {
							$(this).addClass('visible');
						}
					});
					
					$('.filter-city.botflt').each(function() {
						var dist = $(this).attr('data-dist');
						var prod = $(this).attr('data-prod');
						var filial = $(this).attr('data-filial');
						$(this).removeClass('visible');
						if ((distcheckbox.prop('checked') === true && dist === '1') || (prodcheckbox.prop('checked') === true && prod === '1')) {
							$(this).addClass('visible');
						}
					});
				}
			}
		});


    $(window).on('scroll', function() {

    	release_count();
    });

    function release_count() {
    	if($('.release .counter').length > 0) {
    	var offset = parseInt($(".release .counter").offset().top);
        if ($(window).scrollTop() > offset - $(window).height() - 40) {
        	$(".release .counter").each(function() {
           $(".release .counter.count").spincrement({
					    from: 0,                // Стартовое число
					    to: false,              // Итоговое число. Если false, то число будет браться из элемента с классом spincrement, также сюда можно напрямую прописать число. При этом оно может быть, как целым, так и с плавающей запятой
					    decimalPlaces: 0,       // Сколько знаков оставлять после запятой
					    decimalPoint: "",      // Разделитель десятичной части числа
					    thousandSeparator: " ", // Разделитель тыcячных
					    duration: 1000          // Продолжительность анимации в миллисекундах
						});
        	$(".release .counter.count").removeClass('count');
        	});
        }
    		
    	}
    }
	$(window).on('resize', function() {
		footer();

		$('.eq-height.item').css('min-height', 'auto');
		$('.eq-height.text').css('min-height', 'auto');
		$('.eq-height.catalog-item').css('min-height', 'auto');
		$('.eq-height.item').equalHeights();
		$('.eq-height.catalog-item').equalHeights();
		$('.eq-height.text').equalHeights();
		$('.products-section .item .image').equalHeights();
		$('.production-table .eq-height.text').css('min-height', 'auto');
		$('.production-table .eq-height.text').equalHeights();
		$('.production-table .eq-height.title').css('min-height', 'auto');
		$('.production-table .eq-height.title').equalHeights();
		$('.production-table .eq-height.item').css('min-height', 'auto');
		$('.production-table .eq-height.item').equalHeights();
		$('.production-table .eq-height.text-wrapper').css('min-height', 'auto');
		$('.production-table .eq-height.text-wrapper').equalHeights();


			// $('.menu .dropdown').each(function () {

			// 	var wid = $(window).width();

			// 	if (wid > 1200) {
			// 		dropdown($(this), $(this).closest('li').find('.dropdown-menu'), 'mouseenter');
			// 	}
			// 	else {

			// 		dropdown($(this), $(this).closest('li').find('.dropdown-menu'), 'click');
			// 	}
			// });

			// $('.menu .dropdown > a').on('click', function(e) {
			// 	e.preventDefault();
			// 	var wid = $(window).width();

			// 	if (wid > 1200) {
			// 			document.location.href = $(this).attr('href');
			// 	}
			// });
	});




	function dropdown (el, drop, event) {

		var activeClass = 'open';

		el.on(event, function (e) {
			e.preventDefault();

			drop.toggleClass(activeClass);
			$(this).toggleClass(activeClass);
		});

		if (event === 'mouseenter') {
			el.on('mouseleave', function (e) {
				drop.removeClass(activeClass);
				$(this).removeClass(activeClass);
			});
		} 

	}
	
	function catalog_logo() {
		$('.catalog-item .logo').each(function() {
			if ($(this).height() < $(this).find('img').height()) {
				$(this).find('img').css('max-width', '150px');
			}
		});
	}

	function footer() {
		var wheight = $(window).height();
		var contenth = $('.content').outerHeight();
		var footerh = $('footer').outerHeight();

		if( wheight >= contenth + footerh) {
			$('footer').addClass('fixed-bottom');
		}
		else{		
			$('footer').removeClass('fixed-bottom');
		}		
	}

		$('.trade-marks-slider').bxSlider({
			auto: false,
			pager: false,
			controls: true
		});
    $('.main-slider').bxSlider({
    	mode: 'fade',
      auto: true,
      controls: false,
      pager: false,
			pause: 8000,
    	speed: 1400,
		  startSlide: 0,
			onSliderLoad: function () {
					$('.main-slider-wrapper').addClass('loaded');
	        $('.main-slider > li .slider-content').eq(0).addClass('active-slide');
	        //$('.slider-content.active-slide .title').addClass('animated fadeInUp');
	        function explode(){					  
	        	$('.slider-content.active-slide .counter-wrapper .counter').addClass('animated fadeInUp');
	        	$('.slider-content.active-slide .counter-wrapper p').addClass('animated fadeInUp');
	        	$(".slider-content.active-slide .counter-wrapper .counter").spincrement({
						    from: 0,                // Стартовое число
						    to: false,              // Итоговое число. Если false, то число будет браться из элемента с классом spincrement, также сюда можно напрямую прописать число. При этом оно может быть, как целым, так и с плавающей запятой
						    decimalPlaces: 0,       // Сколько знаков оставлять после запятой
						    decimalPoint: "",      // Разделитель десятичной части числа
						    thousandSeparator: "", // Разделитель тыcячных
						    duration: 1000          // Продолжительность анимации в миллисекундах
							});
					}
					setTimeout(explode, 500);

	        function explode2(){					  
	        	$('.slider-content.active-slide .counter-wrapper p').addClass('animated fadeInUp');

					}
					setTimeout(explode2, 900);

	        function explode3(){					  
						$('.slider-menu .item-1').addClass('wow animated fadeInUp');
					}
					setTimeout(explode3, 1200);
	        function explode4(){					  
						$('.slider-menu .item-2').addClass('wow animated fadeInUp');
					}
					setTimeout(explode4, 1400);
	        function explode5(){					  
						$('.slider-menu .item-3').addClass('wow animated fadeInUp');
					}
					setTimeout(explode5, 1600);


	        function explodeline1(){					  
						$('.slider-content .line-1').addClass('wow animated fadeInUp');
					}
	        function explodeline2(){					  
						$('.slider-content .line-2').addClass('wow animated fadeInDown');
					}
	        function explodeline3(){					  
						$('.slider-content .line-3').addClass('wow animated fadeInUp');
					}
	        function explodeline4(){					  
						$('.slider-content .line-4').addClass('wow animated fadeInLeft');
					}
	        function explodeline5(){					  
						$('.slider-content .line-5').addClass('wow animated fadeInRight');
					}
					setTimeout(explodeline1, 1400);
					setTimeout(explodeline2, 1400);
					setTimeout(explodeline3, 1400);
					setTimeout(explodeline4, 1600);
					setTimeout(explodeline5, 1600);
					
		    },
		    onSlideAfter: function ($slideElement, oldIndex, newIndex) {
		        console.log(oldIndex);
		        console.log(newIndex);
		        $('.active-slide').removeClass('active-slide');
		        $('.main-slider > li .slider-content').eq(oldIndex).removeClass('active-slide');
		        $('.main-slider > li .slider-content').eq(newIndex).addClass('active-slide');
		        //$('.slider-content.active-slide .title').addClass('animated fadeInUp');
		        function explode(){					  
		        	$('.slider-content.active-slide .counter-wrapper .counter').addClass('animated fadeInUp');

		        	$(".slider-content.active-slide .counter-wrapper .counter").spincrement({
						    from: 0,                // Стартовое число
						    to: false,              // Итоговое число. Если false, то число будет браться из элемента с классом spincrement, также сюда можно напрямую прописать число. При этом оно может быть, как целым, так и с плавающей запятой
						    decimalPlaces: 0,       // Сколько знаков оставлять после запятой
						    decimalPoint: ".",      // Разделитель десятичной части числа
						    thousandSeparator: "", // Разделитель тыcячных
						    duration: 1000          // Продолжительность анимации в миллисекундах
							});

						}
						setTimeout(explode, 500);
		        function explode2(){					  
		        	$('.slider-content.active-slide .counter-wrapper p').addClass('animated fadeInUp');

						}
						setTimeout(explode2, 900);

	        function explodeline1(){					  
						$('.slider-content .line-1').addClass('wow animated fadeInUp');
					}
	        function explodeline2(){					  
						$('.slider-content .line-2').addClass('wow animated fadeInDown');
					}
	        function explodeline3(){					  
						$('.slider-content .line-3').addClass('wow animated fadeInUp');
					}
	        function explodeline4(){					  
						$('.slider-content .line-4').addClass('wow animated fadeInLeft');
					}
	        function explodeline5(){					  
						$('.slider-content .line-5').addClass('wow animated fadeInRight');
					}
					setTimeout(explodeline1, 1400);
					setTimeout(explodeline2, 1400);
					setTimeout(explodeline3, 1400);
					setTimeout(explodeline4, 1600);
					setTimeout(explodeline5, 1600);

		    },
		    onSlideBefore: function () {
		        //$('.slider-content.active-slide .title').removeClass('animated fadeInUp');
		        //$('.slider-content.active-slide .title').removeAttr('style');
		        $('.slider-content.active-slide .counter-wrapper .counter').removeClass('animated fadeInUp');
		        $('.slider-content.active-slide .counter-wrapper .counter').removeAttr('style');
		        $('.slider-content.active-slide .counter-wrapper p').removeClass('animated fadeInUp');
		        $('.slider-content.active-slide .counter-wrapper p').removeAttr('style');
						$('.slider-content .line').removeClass('wow animated fadeInRight fadeInLeft fadeInUp fadeInDown');
		    }

	    });

});

var wow = new WOW(
  {
    boxClass:     'wow',      // animated element css class (default is wow)
    animateClass: 'animated' // animation css class (default is animated)
  }
);
wow.init();