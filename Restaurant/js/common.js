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
$(document).ready(function(){
    $(window).scroll(function(){
        if (
          $(this).scrollTop() > 100) {
                $('.scrollup').fadeIn();
        } else {
            $('.scrollup').fadeOut();
        }
    });
 
    $('.scrollup').click(function(){
        $("html, body").animate({ scrollTop: 0 }, 600);
return false;
});
});
jQuery(document).ready(function() {
  $('a[data-target^="anchor"]').bind('click.smoothscroll', function(){
    var target = $(this).attr('href'),
        bl_top = $(target).offset().top;
    $('body, html').animate({scrollTop: bl_top}, 600);
    return false;
    })
});