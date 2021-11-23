const swiper = new Swiper('.swiper-container', {
	slidesPerView: 4,
	loop: true,
	speed: 400,
	slideToClickedSlide: true,
	/* 
	coverflowEffect: {
		rotate: 0,
		stretch: 0,
		depth: 0,
		modifier: 2,
		//slideShadows: true,
	},

	breakpoints: {
		320: {
			slidesPerView: 2,
		},
		560: {
			slidesPerView: 3,
		},
		990: {
			slidesPerView: 4,
		}
	},*/
	
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},

	on: {
		init: function () {
		  $('.swiper-slide-active .slide-content').addClass('active');
		},
		transitionStart: function() {
		  $('.slide-content').removeClass('active');
		},
		transitionEnd: function(swiper) {
		  $('.swiper-slide-active .slide-content').addClass('active');
		}
	  }
});