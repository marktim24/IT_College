$(function() {

	new WOW().init();

	$(".hamburger").click(function(){
		$(this).toggleClass("is-active");

		if($(this).hasClass('is-active')){
			$('.mnu_top').slideDown(300);
		}else{
			$('.mnu_top').slideUp(300);
		}
	});
	

	$('.nav_review > div').click(function(){
		const revID = $(this).data('revid');

		
		$('.nav_review > div').not(this).removeClass('active');
		$(this).addClass('active');

		$('.review_item').not(revID).removeClass('active');
		$(revID).addClass('active');
	});
});