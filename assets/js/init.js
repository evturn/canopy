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