import $ from 'jquery';

var loadData = new Promise(function (resolve) {
	document.getElementsByTagName('body')[0].classList.add('fixed');
	setTimeout(resolve, .1);
});

$(window).on('load', function () {
	loadData.then(function () {
		let preloaderEl = document.getElementById('preloader');
		document.getElementsByTagName('body')[0].classList.remove('fixed');
    preloaderEl.classList.add('hidden');
    preloaderEl.classList.remove('visible');
	});
});
