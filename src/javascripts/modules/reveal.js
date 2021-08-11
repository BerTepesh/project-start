import $ from 'jquery';

import 'jquery.appear';
import 'jquery.transit';
import getAttributeValue from '../util/getAttributeValue'
import createPlugin from 'jquery-plugin-generator';

class Reveal {

	static get Defaults () {
		return $.extend({}, this.constructor.Defaults, {
			'offset': $(window).height() / 6,
			'groupDelay': 100,
			'delay': 0,
			'fadeIn': true,
			'slide': true,
			'duration': 700,
			'direction': {x: 0, y: -100}
		});
	}

	constructor ($container, opts) {
		this.options = $.extend({}, this.constructor.Defaults, opts);
		this.$container = $container;
    this.update();
	}

	update () {
		const $container = this.$container;

		$container
			.find(`[${ 'data-reveal-group' }]`)
			.addBack(`[${ 'data-reveal-group' }]`)
			.each((_index, element) => {
				this.attachGroup($(element));
			});

		$container
			.find(`[${ 'data-reveal' }]`)
			.addBack(`[${ 'data-reveal' }]`)
			.not(`[${ 'data-reveal-group' }] [${ 'data-reveal' }]`)
			.each((_index, element) => {
				this.attachElement($(element));
			});
	}

	

	attachGroup ($group) {
		const $elements = $group.find(`[${ 'data-reveal' }]`);			
		$elements.each((_index, element) => {			
			const fadeIn = getAttributeValue($(element), 'data-reveal-fade-in', this.options.fadeIn);
			const slide = getAttributeValue($(element), 'data-reveal-slide', this.options.slide);
			const direction = $.extend({}, this.options.direction, $(element).data("reveal-direction"));

			if(fadeIn) {
				$(element).css({opacity: 0});
			}
			if(slide) {												
				$(element).css({translate: [-direction.x, -direction.y]});
			}
		});
		$group.appear(() => {
			this.animateGroup($group);
		},{accY: -this.options.offset});
	}

	attachElement ($element) {
		const fadeIn = getAttributeValue($(element), 'data-reveal-fade-in', this.options.fadeIn);
		const slide = getAttributeValue($(element), 'data-reveal-slide', this.options.slide);
		const direction = $.extend({}, this.options.direction, $(element).data("reveal-direction"));

		if(fadeIn) {
			$(element).css({opacity: 0});
		}
		if(slide) {												
			$(element).css({translate: [-direction.x, -direction.y]});
		}
		$element.appear(() => {
			this.animateElement($(element));
		},{accY: -options.offset});
	}

	animateGroup ($group) {
		const $elements = $group.find(`[${ 'data-reveal' }]`);
		const delay = this.options.delay;
		const offset = this.options.offset;
		const groupOptions = { delay, offset};

		$elements.each((_index, element) => {
			this.animateElement($(element), groupOptions);
		});
	}

	animateElement ($element, groupOptions = {}) {
		const duration = getAttributeValue($element, 'data-reveal-duration', groupOptions);
		const itemDelay = getAttributeValue($element, 'data-reveal-delay', groupOptions);
		const delay = (groupOptions.delay || 0) + itemDelay;

		let interval = setTimeout(() => {
			$element.transition({opacity: '', translate: '0, 0'}, duration, 'ease');				
		}, delay);
		
	}
}

$.fn.reveal = createPlugin(Reveal, {
	'api': ['instance', 'update']
});