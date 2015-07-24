BCCANOPY = {

  init: function() {

    $('.collections-container').on('click', function() {
      var $container = $(this);
      var $caret = $container.find('.fa-caret-right');

      if ($container.hasClass('closed')) {
        $('.collections-dropdown').removeClass('hidden');
      } 
      else {
        $('.collections-dropdown').addClass('hidden');
        console.log('sup');
      }
      $container.toggleClass('closed');
      $caret.toggleClass('open');
    });

  }

};

$(document).ready(function() {
  BCCANOPY.init();
});