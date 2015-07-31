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