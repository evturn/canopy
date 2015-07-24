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


    $('.fa-search').on('click', function() {
      var $container = $('.collections-container');
      var $searchContainer = $('.search-container');
      var $searchIcon = $('.fa-search');
      var $searchInput = $('.search-input');
      var $closeIcon = $('.fa-times');
      
      if ($searchContainer.hasClass('active')) {
        return false;
      } else {
        $container.addClass('hidden');
        $searchContainer.addClass('active');
        $searchInput.removeClass('hidden').focus();
        $closeIcon.removeClass('hidden');
      }

    });

    $('.search-container .fa-times').on('click', function() {
      var $container = $('.collections-container');
      var $searchContainer = $('.search-container');
      var $searchIcon = $('.fa-search');
      var $searchInput = $('.search-input');
      var $closeIcon = $('.fa-times');

      $searchInput.addClass('hidden');
      $closeIcon.addClass('hidden');
      $container.removeClass('hidden');
      $searchContainer.removeClass('active');

    });

  }

};

$(document).ready(function() {
  BCCANOPY.init();
});