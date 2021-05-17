import $ from 'jquery';

$("#slider").slick({
	arrows: true,
	dots: true,
	slidesToShow: 1,
	swipeToSlide: true,
	infinite: false,
	accessibility: false,
	autoplay: false,
	autoplaySpeed: 2500,
	speed: 900,
	prevArrow: '<button type="button" class="prev"></button>',
	nextArrow: '<button type="button" class="next"></button>',
	appendArrows: $('.slider__nav')
});

