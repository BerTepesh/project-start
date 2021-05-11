import $ from 'jquery';

$(function(){
	$('.ham-trigger').click(function(){
		$(this).toggleClass('active');
		$(".page-content").toggleClass("ham-active");
		$(".ham-panel").toggleClass("active");
		return false;
	})
});