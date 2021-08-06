import $ from 'jquery';
import slider from 'slick-carousel';
import createPlugin from 'jquery-plugin-generator';

class TestSlider {

	static get Defaults () {
			return {
					'arrows': true,
					'dots': true
			};
	}

	constructor ($container, opts) {

		const options = this.options = $.extend({}, this.constructor.Defaults, opts);

		$container.find('.slider__holder').slick({
			arrows: options.arrows,
			dots: options.dots,
			slidesToShow: 1,
			swipeToSlide: true,
			infinite: false,
			accessibility: false,
			autoplay: false,
			autoplaySpeed: 2500,
			speed: 900,
			prevArrow: '<button type="button" class="prev"></button>',
			nextArrow: '<button type="button" class="next"></button>',
			appendArrows: $container.children('.slider__nav')
		});
	}
}

$.fn.testSlider = createPlugin(TestSlider);
