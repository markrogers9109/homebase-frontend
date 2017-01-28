
var $ = jQuery;

$('.toggle-subnav').click(function(){
    if ($('.fixed-navbar').hasClass('show-submenu')) {
        $('.fixed-navbar').removeClass('show-submenu');
        $('.sub-nav_column').removeClass('toggle-subnav');
        $('.toggle-subnav_top').removeClass('toggle-subnav');
        $('.toggle-subnav_top').removeClass('activate');
    } else {
        $('.fixed-navbar').addClass('show-submenu');
        $('.sub-nav_column').addClass('toggle-subnav');
        $('.toggle-subnav_top').addClass('toggle-subnav');
        $('.toggle-subnav_top').addClass('activate');
    }
  });

  $('.toggle-subnav_top').click(function(){
      if ($('.fixed-navbar').hasClass('show-submenu')) {
          $('.fixed-navbar').removeClass('show-submenu');
          $('.sub-nav_column').removeClass('toggle-subnav');
          $('.toggle-subnav_top').removeClass('toggle-subnav');
          $('.toggle-subnav_top').removeClass('activate');
      } else {
          $('.fixed-navbar').addClass('show-submenu');
          $('.sub-nav_column').addClass('toggle-subnav');
          $('.toggle-subnav_top').addClass('toggle-subnav');
          $('.toggle-subnav_top').addClass('activate');
      }
    });
