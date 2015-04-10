$(window).load(function() {
	$('.flexslider').flexslider();

	$('.mobile__button').on('click', function(e){
		e.stopPropagation(); e.preventDefault();
		$('.mobile__nav').slideToggle(200);
	});

	$('.mobile__wrap a').on('click', function(e){
		e.stopPropagation(); e.preventDefault();
		$(this).siblings('.dropdown').toggle(200);
	});

});