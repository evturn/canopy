var BCCANOPY = {};
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
BCCANOPY.search = {
  
  init: function() {
    BCCANOPY.search.open();
    BCCANOPY.search.close();
  },


  open: function() {
    
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

  },

  close: function() {
    
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

  }

};
BCCANOPY.collections = {

  init: function() {
    BCCANOPY.collections.toggleOnCollectionsTitle();
    BCCANOPY.collections.toggleSubcategory();
    BCCANOPY.collections.detachAndAppendList();
    BCCANOPY.collections.appendCaretToParent();
  },

  toggleOnCollectionsTitle: function() {
    
    $('.title-container').on('click', function() {
      var $container = $('.title-container');
      var $caret = $container.find('.fa-caret-right');
      var $shadow = $('.shadow');
      var $list = $('.collections-list');

      if ($container.hasClass('closed')) {
        
        $container.removeClass('closed');
        $caret.addClass('open');
        $list.addClass('visible');
        $shadow.addClass('on');

      } 
      else {
        
        $container.addClass('closed');
        $caret.removeClass('open');
        $list.removeClass('visible');
        $shadow.removeClass('on');

      }

    });
  },

  toggleSubcategory: function() {

    $('.cat-title').on('mousedown', function() {
      var $icon = $(this).find('.fa');
      var $icons = $('.cat-title .fa');
      var $dropdown = $(this).parent().next();
      var $dropdowns = $('.sub-cat');
      var $shadow = $('.shadow');

      if ($icon.hasClass('open')) {
        $icon.removeClass('open');
        $dropdown.removeClass('visible');
        $icon.parent().parent().removeClass('selected');
        $shadow.removeClass('on');

      } 
      else {
        $dropdowns.removeClass('visible');
        $icons.removeClass('open');
        $icon.addClass('open');
        $icons.parent().removeClass('selected');
        $dropdown.addClass('visible');
        $icon.parent().parent().addClass('selected');
        $shadow.addClass('on');

      }

    });
  },


  detachAndAppendList: function() {
    var $titleContainer = $('.title-container');
    var $outsideContainer = $('.collections-resize');
    var $ul = $('.collections-list');
    var $inlineContainer = $('.collections-container');
    var windowWidth = $(window).width();
    var ulHeight = $ul.width();
    console.log(ulHeight);

    if (ulHeight > 900 && windowWidth > 800) {
      $ul.detach();
      $outsideContainer.append($ul);
      $titleContainer.addClass('resize-visible');
      $titleContainer.css({'display': 'inline-block'});
    } 
    else if (ulHeight > 900 && windowWidth < 800) {
      $ul.detach();
      $titleContainer.removeClass('resize-visible');
      $inlineContainer.append($ul);
    }

  },

  appendCaretToParent: function() {
    var $categoryDropdown = $('.sub-cat');
    var $category = $categoryDropdown.parent().find('.cat-title');
    
    $category.append(' <i class="fa fa-chevron-down"></i>');
  },

};
$(document).ready(function() {
  BCCANOPY.navbar.init();
  BCCANOPY.search.init();
  BCCANOPY.collections.init();
});

$(window).resize(function () {
  BCCANOPY.navbar.resize();
  BCCANOPY.collections.detachAndAppendList();
});