import $ from 'jquery';

import 'jquery.appear';
import 'jquery.transit';
import createPlugin from 'jquery-plugin-generator';

class Reveal {

	static get Defaults () {
		return $.extend({}, this.constructor.Defaults, {
			'offset': $(window).height() / 6,
			'delay': 100,
			'fadeIn': true,
			'slideIn': true,
			'duration': 700,
			'distance': {x: 0, y: -100}
		});
	}

	constructor ($container, opts) {

		const options = this.options = $.extend({}, this.constructor.Defaults, opts);

		if(options.fadeIn) {
			$container.css({opacity: 0});
		}
		if(options.slideIn) {
			$container.css({translate: [-options.distance.x, -options.distance.y]});
		}
		
		$container.appear(function(){

			let interval = setTimeout(() => {
				$container.transition({opacity: '', translate: '0, 0'}, options.duration, 'ease');
			}, options.delay);
		},{accY: -options.offset});
	}
}

$.fn.reveal = createPlugin(Reveal);