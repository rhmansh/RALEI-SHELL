var preloader = $(".preloader");
var closeButton = $(".close-load");
  $(window).on("load", function() {
    preloader.fadeOut();
  });
  closeButton.on("click", function() {
    preloader.fadeOut();
  });
