BCCANOPY = {

  init: function() {

    $('.collections-container').on('click', function() {
      var $container = $(this);

      if ($container.hasClass('closed')) {
        $('.collections-dropdown').removeClass('hidden');
      } 
      else {
        $('.collections-dropdown').addClass('hidden');
        console.log('sup');
      }
      $container.toggleClass('closed');
    });

  }

};

$(document).ready(function() {
  BCCANOPY.init();
});