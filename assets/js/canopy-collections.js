BCCANOPY.collections = {

  init: function() {
    BCCANOPY.collections.toggleOnCollectionsTitle();
    BCCANOPY.collections.toggleSubcategory();
    BCCANOPY.collections.checkListWidth();
    BCCANOPY.collections.appendCaretToParent();
    BCCANOPY.collections.highlightTitleContainer();
    BCCANOPY.collections.checkListWidth();
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

  checkListWidth: function() {
    var windowWidth = $(window).width();
    var width = $('.collections-list li').outerWidth(true);
    var all = $('.collections-list li').length;
    var subcats = $('.collections-list li ul li').length;

    var total = width * (all - subcats);
    var percentageOccupied = total / windowWidth;
    console.log(total);
    console.log(windowWidth);
    console.log(percentageOccupied);

    if (windowWidth > 800) {

      if (percentageOccupied >= 0.70) {
        BCCANOPY.collections.resize();
        
      } else if (percentageOccupied < 0.70) {
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