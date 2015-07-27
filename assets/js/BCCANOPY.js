BCCANOPY = {

  init: function() {

    BCCANOPY.appendCaret();

    $('.collections-container .mobile').on('click', function() {
      var $container = $('.collections-container');
      var $caret = $container.find('.fa-caret-right');

      if ($container.hasClass('closed')) {
        $('.collections-dropdown').removeClass('hidden');
      } 
      else {
        $('.collections-dropdown').addClass('hidden');
      }
      $container.toggleClass('closed');
      $caret.toggleClass('open');
    });


    $('.fa-search').on('click', function() {
      var $container = $('.collections-container');
      var $searchContainer = $('.search-container');
      var $searchIcon = $('.fa-search');
      var $searchInput = $('.search-input');
      var $closeIcon = $('.search-container .fa-times');
      
      if ($searchContainer.hasClass('active')) {
        return false;
      } else {
        $container.addClass('hidden');
        $searchContainer.addClass('active');
        $searchInput.removeClass('hidden').focus();
        $closeIcon.removeClass('hidden');
      }

    });

    $('.search-container .fa-times').on('click', function() {
      var $container = $('.collections-container');
      var $searchContainer = $('.search-container');
      var $searchInput = $('.search-input');
      var $closeIcon = $('.fa-times');

      $searchInput.addClass('hidden');
      $closeIcon.addClass('hidden');
      $container.removeClass('hidden');
      $searchContainer.removeClass('active');

    });

    $('.hamburger-container').on('click', function() {
      var $hamburger = $(this);
      var $closeIcon = $('.hamburger-container .fa-times');
      var $openIcon = $('.hamburger-container .fa-bars');
      var $dropdown = $('.navbar-dropdown');
      console.log('fjdksl');

      if ($hamburger.hasClass('closed')) {
        $openIcon.toggleClass('hidden');
        $closeIcon.toggleClass('hidden');
        $dropdown.toggleClass('hidden');

      }

    });

    $('.page-header .fa').on('mousedown', function() {
      var $icon = $(this);
      var $icons = $('.page-header .fa');
      var $dropdown = $(this).parent().next();
      var $dropdowns = $('.category-dropdown');
      
      if ($icon.hasClass('open')) {
        $icon.removeClass('open');
        $dropdown.removeClass('visible');
      } 
      else {
        $dropdowns.removeClass('visible');
        $icons.removeClass('open');
        $icon.addClass('open');
        $dropdown.addClass('visible');
      }
    });

  },


  appendCaret: function() {
    var $categoryDropdown = $('.category-dropdown');
    var $category = $categoryDropdown.parent().find('.page-header');
    
    $category.append(' <i class="fa fa-chevron-down"></i>');
  }


};

$(document).ready(function() {
  BCCANOPY.init();
});