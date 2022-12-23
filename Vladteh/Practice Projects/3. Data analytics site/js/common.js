$(function() {

	new WOW().init();

	// menu mobile hambrurger 
	$(".hamburger").click(function(){
		$(this).toggleClass("is-active");

		if($(this).hasClass('is-active')){
			$('.menu_top').slideDown(300);
		}else{
			$('.menu_top').slideUp(300);
		}
	});
	// menu mobile hambrurger 

	$('.nav_review > div').click(function(){
		const revID = $(this).data('revid');

		
		$('.nav_review > div').not(this).removeClass('active');
		$(this).addClass('active');

		$('.review_item').not(revID).removeClass('active');
		$(revID).addClass('active');
	});
});