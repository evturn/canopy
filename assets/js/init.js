$(document).ready(function() {
  BCCANOPY.navbar.init();
  BCCANOPY.search.init();
  BCCANOPY.collections.init();
});

$(window).resize(function () {
  BCCANOPY.navbar.resize();
  BCCANOPY.collections.detachAndAppendList();
});