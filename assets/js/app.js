var closeButton = $(".close-load");
  closeButton.on("click", function() {
    var preloader = $(".preloader");
    preloader.fadeOut();
  });
$(window).on("load", function() {
  var preloader = $(".preloader");
  preloader.fadeOut();   
});
