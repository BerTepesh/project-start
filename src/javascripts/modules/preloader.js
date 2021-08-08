import $ from 'jquery';

const loadData = new Promise(function (resolve) {
	if(typeof $('body').attr('data-preload') !== 'undefined') {
		$('body').addClass('fixed');
		$('.page-content-wrapper').prepend('<div class="preloader visible"><div class="preloader__loader"></div></div>');
		setTimeout(resolve, .1);
	}
});

$(window).on('load', function () {		
	if(typeof $('body').attr('data-preload') !== 'undefined') {
		loadData.then(function () {
			$('body').removeClass('fixed');
			$('.preloader').addClass('hidden');
			$('.preloader').removeClass('visible');
		});
	}
});
	
