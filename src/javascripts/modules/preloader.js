import $ from 'jquery';

$(document).ready(function($) {
	$('body').addClass('fixed');
	$(window).on('load', function () {
		var $preloader = $('.preloader'),
		    $loader = $preloader.find('.preloader__loader');
		$loader.fadeOut();
		$preloader.delay(250).fadeOut(200);
		$('body').removeClass('fixed');
	});
});