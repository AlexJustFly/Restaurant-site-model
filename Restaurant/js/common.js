jQuery(document).ready(function() {
	$('.nav-link').on('mouseover', function(){
  		$(this).parent().css({
  			'box-shadow': 'inset 0 5px 0 #7c7c7c'
  		});
	});
	$('.nav-link').on('mouseout', function(){
  		$(this).parent().css({
  			'box-shadow': 'none'
  		});;
	});
});
jQuery(document).ready(function() {
  $( "#date" ).datepicker({
    dateFormat: "dd.mm.yy",
    showOn: 'both',
    buttonImage: "img/calendar-alt-regular.svg",
    buttonImageOnly: true,
    constrainInput: false,
    showOtherMonths: true,
  });
});
