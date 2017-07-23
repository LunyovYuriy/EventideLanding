$(function(){
	$('.collapse').on('show.bs.collapse', function(){
		$(this).prev().find('.fa').removeClass().addClass('fa fa-minus-circle');
	});
	$('.collapse').on('hide.bs.collapse', function(){
		$(this).prev().find('.fa').removeClass().addClass('fa fa-plus-circle');
	});
	$("#myForm").validator({
		feedback: {
			success: 'fa fa-check-circle',
			error: 'fa fa-times-circle'
		}
	});
	$('.form-sel').select2({
		minimumResultsForSearch: -1
	});
});
wow = new WOW({
	offset: 100,
	mobile: false
});
wow.init();