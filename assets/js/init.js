$(document).ready(function() {
  BCCANOPY.navbar.init();
  BCCANOPY.search.init();
  BCCANOPY.collections.init();
  BCCANOPY.grid.init();
});

$(window).resize(function () {
  BCCANOPY.navbar.resize();
  BCCANOPY.collections.checkListWidth();
  BCCANOPY.grid.init();
});