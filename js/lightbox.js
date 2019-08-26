/* Description: This file to add script */ 
$(document).ready(function() {
  var $lightbox = $('#lightbox');
  // find image on click data-target having name lightbox 
  $('[data-target="#lightbox"]').on('click', function(event) {
      var $img = $(this).find('img'),   // get clickable image
       // attr is used to add any attribute in html tag
          src = $img.attr('src'),
          alt = $img.attr('alt'),
          css = {
              'maxWidth': $(window).width() - 300,    //get width of screen
              'maxHeight': $(window).height() - 200   //get height of screen
          };
      // add class used to add a class with the help of jquery and find is used to search a class class in code
     
      $lightbox.find('.close').addClass('hidden');
      $lightbox.find('img').attr('src', src);
      $lightbox.find('img').attr('alt', alt);
      $lightbox.find('img').css(css);
  });
  
  $lightbox.on('shown.bs.modal', function (e) {
      var $img = $lightbox.find('img');
      // set width of modal
      $lightbox.find('.modal-dialog').css({'width': $img.width()});
      // find close class and remove hidden class if close class is there
      $lightbox.find('.close').removeClass('hidden');
  });
});