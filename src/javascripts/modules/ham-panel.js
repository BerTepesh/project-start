import $ from 'jquery';

$(function(){
	$('.ham-trigger').click(function(){
		$(this).toggleClass('active');
		$('.page-content').toggleClass('ham-active');
		$('body').toggleClass('fixed');
		$('.ham-panel').toggleClass('active');
		return false;
	})
});