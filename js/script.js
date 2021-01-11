$(document).ready(function() {
	$('.burger').click(function() {
		$('.burger').toggleClass('_active');
		$('.header__menu').toggleClass('_active');
		$('body').toggleClass('_lock');
	});
});