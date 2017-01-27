var $ = jQuery;

$('.menu-link').click( function() {
  console.log('clicked');
  if ($('.fold-up').hasClass('activate-up') && $('.fold-down').hasClass('activate-down')) {
    $('.fold-up').removeClass('activate-up');
    $('.fold-down').removeClass('activate-up');
  } else {
    $('.fold-up').addClass('activate-up');
    $('.fold-down').addClass('activate-up');
  }
});
