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
      var $category = $(this);
      var $icon = $(this).find('.fa');
      var $icons = $('.cat-title .fa');
      var $dropdown = $(this).parent().next();
      var $dropdowns = $('.sub-cat');
      var $shadow = $('.shadow');

      if ($category.has('.fa').length) {

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