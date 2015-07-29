BCCANOPY = {

  init: function() {

    BCCANOPY.appendCaret();
    BCCANOPY.resizeCollectionsNav();

    $('.collections-container .mobile').on('click', function() {
      var $container = $('.collections-container');
      var $caret = $container.find('.fa-caret-right');
      var $shadow = $('.shadow');
      var $header = $('.page-header.mobile.resize');

      if ($container.hasClass('closed')) {
        $('.collections-dropdown').removeClass('hidden');
        $shadow.addClass('on');

      } 
      else {
        $('.collections-dropdown').addClass('hidden');
        $shadow.removeClass('on');

      }

      $container.toggleClass('closed');
      $caret.toggleClass('open');
      $header.toggleClass('selected');

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

    $('.page-header .fa').on('mousedown', function(e) {
      var $icon = $(this);
      var $icons = $('.page-header .fa');
      var $dropdown = $(this).parent().next();
      var $dropdowns = $('.category-dropdown');
      var $shadow = $('.shadow');
      
      if ($icon.hasClass('resize')) {
        BCCANOPY.resizeSubcategoryDropdowns(e);
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

  resizeSubcategoryDropdowns: function(e) {
    var $icon = $(e.currentTarget);
    var $icons = $('.page-header .fa.resize');
    var $dropdown = $(e.currentTarget).parent().next();
    var $dropdowns = $('.category-dropdown');
      
    console.log($icon);

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
    var breakpoint = 25;
    var $container = $('.collections-container');
    var $header = $('.collections-container .mobile');
    var $ul = $('.desktop.hidden');
    var $caret = $('.collections-dropdown .page-header .fa');

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


};

$(document).ready(function() {
  BCCANOPY.init();
});

$(window).resize(function () {
  BCCANOPY.resizeCollectionsNav();
});