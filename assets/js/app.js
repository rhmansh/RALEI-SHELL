$(document).ready(function() {
  var closeButton = $(".close-load");
  closeButton.on("click", function() {
    var preloader = $(".preloader");
    preloader.hide();
  });

  $(window).on("load", function() {
    var preloader = $(".preloader");
    preloader.delay(1000).fadeOut();
  });
});
