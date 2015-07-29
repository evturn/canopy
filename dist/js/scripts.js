BCCANOPY = {

  init: function() {
    BCCANOPY.appendCaret();
    BCCANOPY.resizeCollectionsNav();
    BCCANOPY.resizeNavbar();

    $('.collections-container .mobile').on('click', function() {
      var $container = $('.collections-container');
      var $caret = $container.find('.fa-caret-right');
      var $shadow = $('.shadow');
      var $header = $('.page-header.mobile.resize');

      if ($container.hasClass('closed')) {
        $('.collections-dropdown').removeClass('hidden');
        $container.removeClass('closed');
        $shadow.addClass('on');
        $header.addClass('selected');
        $caret.addClass('open');
      } 
      else {
        $('.collections-dropdown').addClass('hidden');
        $container.addClass('closed');
        $shadow.removeClass('on');
        $header.removeClass('selected');
        $caret.removeClass('open');
      }

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

      if ($hamburger.hasClass('closed')) {
        $openIcon.toggleClass('hidden');
        $closeIcon.toggleClass('hidden');
        $dropdown.toggleClass('hidden');

      }

    });

    $('.page-header').on('mousedown', function() {
      var $icon = $(this).find('.fa');
      var $icons = $('.page-header .fa');
      var $dropdown = $(this).parent().next();
      var $dropdowns = $('.category-dropdown');
      var $shadow = $('.shadow');

      if ($icon.hasClass('resize')) {
        BCCANOPY.resizeSubcategoryDropdowns($icon);
        return false;
      }

      if ($icon.hasClass('open')) {
        $icon.removeClass('open');
        $dropdown.removeClass('visible');
        $icon.parent().removeClass('selected');
        $shadow.removeClass('on');

      } 
      else {
        $dropdowns.removeClass('visible');
        $icons.removeClass('open');
        $icon.addClass('open');
        $icons.parent().removeClass('selected');
        $dropdown.addClass('visible');
        $icon.parent().addClass('selected');
        $shadow.addClass('on');

      }

    });

  },

  resizeSubcategoryDropdowns: function(caret) {
    var $icon = caret;
    var $icons = $('.page-header .fa.resize');
    var $dropdown = $icon.parent().next();
    var $dropdowns = $('.category-dropdown');

      if ($icon.hasClass('open')) {
        $icon.removeClass('open');
        $dropdown.removeClass('visible');
        $icon.parent().removeClass('selected');

      } 
      else {
        $dropdowns.removeClass('visible');
        $icons.removeClass('open');
        $icon.addClass('open');
        $icons.parent().removeClass('selected');
        $dropdown.addClass('visible');
        $icon.parent().addClass('selected');

      }

  },

  appendCaret: function() {
    var $categoryDropdown = $('.category-dropdown');
    var $category = $categoryDropdown.parent().find('.page-header');
    
    $category.append(' <i class="fa fa-chevron-down"></i>');
  },

  resizeCollectionsNav: function() {
    var windowWidth = $(window).width();
    var listHeight = $('.collections-dropdown').height();
    var $container = $('.collections-container');
    var $header = $('.collections-container .mobile');
    var $ul = $('.desktop.hidden');
    var $caret = $('.collections-dropdown .page-header .fa');
    var breakpoint = 25;

    if (listHeight > breakpoint && windowWidth > 1200) {
      $caret.addClass('resize');
      $header.addClass('resize');
      $ul.addClass('resize');
      $container.addClass('resize');
    }
    else {

      $caret.removeClass('resize');
      $container.removeClass('resize');
      $header.removeClass('resize');
      $ul.removeClass('resize');
    }
  },

  resizeNavbar: function() {
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

$(document).ready(function() {
  BCCANOPY.init();
});

$(window).resize(function () {
  BCCANOPY.resizeCollectionsNav();
  BCCANOPY.resizeNavbar();
});