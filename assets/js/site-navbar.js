BCCANOPY.navbar = {

  init: function() {
    BCCANOPY.navbar.collapsed();
    BCCANOPY.navbar.resize();
  },

  collapsed: function() {
    
    $('.hamburger-container').on('click', function() {
      var $hamburger = $(this);
      var $closeIcon = $('.hamburger-container .fa-times');
      var $openIcon = $('.hamburger-container .fa-bars');
      var $dropdown = $('.navbar-dropdown');

      if ($hamburger.hasClass('closed')) {
        $openIcon.toggleClass('hidden');
        $closeIcon.toggleClass('hidden');
        $dropdown.toggleClass('hidden');

      }

    });
  },

  resize: function() {
    var navbarWidth = $('.navbar-dropdown ul').width();
    var windowWidth = $(window).width();
    var breakpoint = 700;
    var $navbar = $('.navbar');
    var $navbarDropdown = $('.navbar-dropdown');
    
    if (navbarWidth > breakpoint) {
      $navbar.addClass('resize');
      $navbarDropdown.addClass('resize');
    }
  },

};