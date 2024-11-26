var loaded = false;

(function ($) {
  // Hamburger Menu

  $("#nav-icon").click(function () {
    $(this).toggleClass("open");
    $(".nav").toggleClass("open");
    $("body").toggleClass("fixed");
  });

  $(window).scroll(function () {
    activateSections();
  });

  function activateSections() {
    var $sections = $(".main section:not(.active)");

    var windowScrollTop = $(window).scrollTop();
    var windowHeight = $(window).height();

    $sections.each((index, section) => {
      var sectionTop = section.offsetTop;
      if (loaded && sectionTop - windowScrollTop < windowHeight / 2) {
        $(section).addClass("active");
      }
    });
  }

  // Slick Slider

  $(".slider").slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
  });

  //loading
  (function () {
    const minLoadingTime = 300; //milliseconds
    const readyTime = new Date();

    $(window).load(function () {
      const loadingInterval = setInterval(() => {
        const now = new Date();
        if (now - readyTime > minLoadingTime) {
          loaded = true;
          hideLoading();
          activateSections();

          clearInterval(loadingInterval);
        }
      }, 100);
    });
  })();

  function hideLoading() {
    $(".loading").animate({ opacity: 0 }, 400, function () {
      $(".loading").hide();
    });
  }
})(jQuery);
