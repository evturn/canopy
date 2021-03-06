var BCCANOPY = {};
BCCANOPY.grid = {
  
  init: function() {
    BCCANOPY.grid.setGridPaddingTop();
  },

  getCanopyHeight: function() {
    var canopy = $('.canopy').height();
    var overflow = $('.overflow-bottom').height();

    return canopy + overflow;
  },

  setGridPaddingTop: function() {
    var padding = BCCANOPY.grid.getCanopyHeight();
    var grid = $('.collection-content');

    if ($(window).width() >= 800) {
      grid.css({'paddingTop': padding});
    } 
    else {
      grid.css({'paddingTop': 0});
    }

  },

};
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
      
      if ($(window).width() > 800) {
        return false;
      }
      
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
    BCCANOPY.collections.appendCaretToParent(function() {
      BCCANOPY.collections.checkListWidth();
    });
    BCCANOPY.collections.toggleOnCollectionsTitle();
    BCCANOPY.collections.toggleSubcategory();
    BCCANOPY.collections.highlightTitleContainer();
    BCCANOPY.collections.renderMobile();
  },


  highlightTitleContainer: function() {

    $('.collections-container .title-container').on('click', function() {
      var $collectionsContainer = $('.collections-container');
      var $ul = $('.collections-list');
      var $titleContainer = $('.title-container');

      if ($ul.parents($collectionsContainer) && $titleContainer.hasClass('closed')) {
        $collectionsContainer.removeClass('uncollapsed');
        $collectionsContainer.addClass('collapsed');
      } 
      else if ($ul.parents($collectionsContainer)) {
        $collectionsContainer.removeClass('collapsed');
        $collectionsContainer.addClass('uncollapsed');
      }

    });
  },

  renderMobile: function() {
    var windowWidth = $(window).width();
    var $ul = $('.collections-list');
    var $resize = $('.collections-resize');
    var $container = $('.collections-container');

    if (windowWidth > 1100) {
      return false;

    } 
    else if (windowWidth < 1100 && $resize.children().length > 0) {

      $ul.detach();
      $container.append($ul);
    }
  },

  checkListWidth: function() {
    var windowWidth = $(window).width();
    var $category = $('.cat-title').parent();
    var widths = [];
    $.each($category, function() {
      var categoryWidth = $(this).outerWidth(true);

      widths.push(categoryWidth);

    });

    var width = widths.reduce(function(a, b) {
      return a + b;
    });
    var percentageOccupied = width / windowWidth;

    if (windowWidth > 1100) {

      if (percentageOccupied >= 0.75) {
        BCCANOPY.collections.resize();
        
      } else if (percentageOccupied < 0.75) {
        $('.title-container').addClass('closed');
        $('.collections-container').removeClass('uncollapsed');
        $('.collections-container').addClass('collapsed');
        $('.collections-list').removeClass('visible');
        $('.fa-caret-right').removeClass('open');
        BCCANOPY.collections.ignoreResize();

      }

    }


  },

  toggleOnCollectionsTitle: function() {
    
    $('.title-container').on('click', function() {
      var $container = $('.title-container');
      var $caret = $container.find('.fa-caret-right');
      var $shadow = $('.shadow');
      var $list = $('.collections-list');

      BCCANOPY.collections.ignoreResize();

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
      var $category = $(this);
      var $icon = $(this).find('.fa');
      var $icons = $('.cat-title .fa');
      var $dropdown = $(this).find('.sub-cat');
      var $dropdowns = $('.sub-cat');
      var $shadow = $('.shadow');

      if ($category.has('.fa').length) {

        if ($icon.hasClass('open')) {

          $icon.removeClass('open');
          $icon.parent().parent().removeClass('selected');
            
            if ($category.parents('.collections-resize').length === 0) {
              $shadow.removeClass('on');
            }
        } 
        else {

          $icons.removeClass('open');
          $icon.addClass('open');
          $('li').removeClass('selected');
          $icon.parent().parent().addClass('selected');

          if ($category.parents('.collections-resize').length === 0) {
            $shadow.addClass('on');
          }
        }
      }

    });
  },

  resize: function() {
    var $titleContainer = $('.title-container');
    var $outsideContainer = $('.collections-resize');
    var $ul = $('.collections-list');
    var $inlineContainer = $('.collections-container');
    var windowWidth = $(window).width();
    var ulHeight = $ul.width();

      $ul.detach();
      $outsideContainer.append($ul);
      $titleContainer.addClass('resize-visible');
      $titleContainer.css({'display': 'inline-block'});

  },

  ignoreResize: function() {
    var $titleContainer = $('.title-container');
    var $outsideContainer = $('.collections-resize');
    var $ul = $('.collections-list');
    var $inlineContainer = $('.collections-container');
    var windowWidth = $(window).width();

    if (windowWidth < 800) {

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
  BCCANOPY.collections.init();
$(document).ready(function() {
  BCCANOPY.navbar.init();
  BCCANOPY.search.init();
  BCCANOPY.collections.checkListWidth();
  BCCANOPY.grid.init();
});

$(window).resize(function () {
  BCCANOPY.collections.checkListWidth();
  BCCANOPY.collections.renderMobile();
  BCCANOPY.navbar.resize();
  BCCANOPY.grid.init();
});