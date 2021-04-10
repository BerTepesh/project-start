import $ from 'jquery';
// Expose jQuery
window.$ = window.jQuery = $;

$(function(){
	if($(window).scrollTop() > 100) {
		$(".header_sticky").addClass("active");
	}
	$(window).scroll(function() {
		if($(window).scrollTop() < 1) {
			$(".header_sticky").removeClass("sticky");
			$(".header_sticky").removeClass("active");
		} else if($(window).scrollTop() > 120){
			$(".header_sticky").removeClass("sticky");
			$(".header_sticky").addClass("active");
		} else {
			$(".header_sticky").addClass("sticky");
		}
	});
});