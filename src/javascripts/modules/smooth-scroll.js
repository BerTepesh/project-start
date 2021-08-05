import $ from 'jquery';

$(document).ready(function(){
	$('[href^="#"]')
		.not('[href="#"]')
  	.not('[href="#0"]')
		.on('click', function(event){
		if ($(this).attr('hash') !== "") {
			event.preventDefault();
			let hash = $(this).prop('hash');
			$('html, body').animate({
				scrollTop: $(hash).offset().top - $('header').height()
			}, 800, function(){});
		}
	});
});