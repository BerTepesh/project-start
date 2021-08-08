import $ from 'jquery';

import 'jquery-app';
import svg4everybody from 'svg4everybody';
import 'lazysizes';

import 'lazysizes/plugins/parent-fit/ls.parent-fit';
import "lazysizes/plugins/unveilhooks/ls.unveilhooks"

import '../components/sticky-header';
import '../components/ham-panel';
import '../components/preloader';
import '../components/smooth-scroll';

$(function() {
	$('body').app();
	svg4everybody();
});


