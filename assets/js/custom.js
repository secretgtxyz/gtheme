(function($) {

         "use strict";
		 
		    // responsive menu
		     $('#nav-toggle').click(function() {
			  $('nav ul').slideToggle();
			  });
			   $('#nav-toggle').on('click', function() {
				  this.classList.toggle('active');
				});
		 // slider icon animation
		   $('.themeix-slider-area')
			.on('mousemove', function(e){
			  $('.slider-icon').children('.themeix-icon1').css({'transform-origin': ((e.pageX - $(this).offset().left) / $(this).width()) * 60 + '% ' + ((e.pageY - $(this).offset().top) / $(this).height()) * 60 +'%'});
			})
			.on('mousemove', function(e){
			  $('.slider-icon').children('.themeix-icon2').css({'transform-origin': ((e.pageX - $(this).offset().left) / $(this).width()) * 120 + '% ' + ((e.pageY - $(this).offset().top) / $(this).height()) * 120 +'%'});
			})
			.on('mousemove', function(e){
			  $('.slider-icon').children('.themeix-icon3').css({'transform-origin': ((e.pageX - $(this).offset().left) / $(this).width()) * 200 + '% ' + ((e.pageY - $(this).offset().top) / $(this).height()) * 200 +'%'});
			})
			.on('mousemove', function(e){
			  $('.slider-icon').children('.themeix-icon4').css({'transform-origin': ((e.pageX - $(this).offset().left) / $(this).width()) * 250 + '% ' + ((e.pageY - $(this).offset().top) / $(this).height()) * 250 +'%'});
			})
			// wow animation
			var wow = new WOW(
			  {
				animateClass: 'animated',
				offset:       200,
			  }
			);
			wow.init();
			  // client owlCarousel
			  $('.client-carousel').owlCarousel({
					autoplay: true,
					loop: true,
					smartSpeed: 1000,
					margin: 30,
					responsive: {
						0: {
							items: 1,

						},
						600: {
							items: 1,

						},
						1000: {
							items: 1,
						}
					}
				});
				// portfolio owlCarousel
			   $('.portfolio-carousel').owlCarousel({
					autoplay: true,
					loop: true,
					smartSpeed: 1000,
					margin: 30,
					responsive: {
						0: {
							items: 1,

						},
						680: {
							items: 2,

						},
						1000: {
							items: 2,
						}
					}
				});				


				// niceScroll smooth
				  $(".themeix-nicescrol").niceScroll({
					cursorcolor:"#3D59D0",
					cursorwidth:"10px",
					background:"rgba(20,20,20,0.3)",
					cursorborder:"0",
					cursorborderradius:0
					}); 

				// Blog Carousel
			   $('.blog-wrapper').owlCarousel({
                    margin: 30,
					responsive: {
						0: {
							items: 1,

						},
						680: {
							items: 3,

						},
						1000: {
							items: 3,
						}
					}
				});
})(jQuery);