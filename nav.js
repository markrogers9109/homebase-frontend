
var $ = jQuery;

$('.button-collapse').sideNav({
      menuWidth: 300, // Default is 240
      edge: 'right', // Choose the horizontal origin
      closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
      draggable: true // Choose whether you can drag to open on touch screens
    }
  );

$('.btn-floating').click( function() {
    if ($('.add-icon').hasClass('open-scroll')) {
        $('.add-icon').removeClass('open-scroll');
    } else {
        $('.add-icon').addClass('open-scroll');
    }
});
