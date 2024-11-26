var loaded = false;

(function ($) {
  // Hamburger Menu

  $("#nav-icon").click(function () {
    $(this).toggleClass("open");
    $(".nav").toggleClass("open");
    $("body").toggleClass("fixed");
  });
})(jQuery);
