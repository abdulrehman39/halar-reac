(function ($) {
  "use strict";

  var review = $(".player_info_item");
  if (review.length) {
    review.owlCarousel({
      items: 1,
      loop: true,
      dots: false,
      autoplay: true,
      margin: 40,
      autoplayHoverPause: true,
      autoplayTimeout: 5000,
      nav: true,
      navText: [
        '<img src="img/icon/left.svg" alt="">',
        '<img src="img/icon/right.svg" alt="">',
      ],
      responsive: {
        0: {
          margin: 15,
        },
        600: {
          margin: 10,
        },
        1000: {
          margin: 10,
        },
      },
    });
  }
  $(".popup-youtube, .popup-vimeo").magnificPopup({
    // disableOn: 700,
    type: "iframe",
    mainClass: "mfp-fade",
    removalDelay: 160,
    preloader: false,
    fixedContentPos: false,
  });

  var review = $(".textimonial_iner");
  if (review.length) {
    review.owlCarousel({
      items: 1,
      loop: true,
      dots: true,
      autoplay: true,
      autoplayHoverPause: true,
      autoplayTimeout: 5000,
      nav: false,
      responsive: {
        0: {
          margin: 15,
        },
        600: {
          margin: 10,
        },
        1000: {
          margin: 10,
        },
      },
    });
  }
  $(document).ready(function () {
    $("select").niceSelect();
  });

  // menu fixed js code
  $(window).scroll(function () {
    var window_top = $(window).scrollTop() + 1;
    if (window_top > 50) {
      $(".main_menu").addClass("menu_fixed animated fadeInDown");
    } else {
      $(".main_menu").removeClass("menu_fixed animated fadeInDown");
    }
  });

  // $(".counter").counterUp({
  //   time: 1300,
  //   reset: true,
  // });

  $(".slider").slick({
    // slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    speed: 300,
    infinite: true,
    asNavFor: ".slider-nav-thumbnails",
    autoplay: true,
    pauseOnFocus: false,
    dots: true,
    reset: true,
  });

  $(".slider-nav-thumbnails").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: ".slider",
    focusOnSelect: true,
    infinite: true,
    prevArrow: false,
    nextArrow: false,
    centerMode: true,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          centerMode: false,
        },
      },
    ],
  });

  //remove active class from all thumbnail slides
  $(".slider-nav-thumbnails .slick-slide").removeClass("slick-active");

  //set active class to first thumbnail slides
  $(".slider-nav-thumbnails .slick-slide").eq(0).addClass("slick-active");

  // On before slide change match active thumbnail to current slide
  $(".slider").on(
    "beforeChange",
    function (event, slick, currentSlide, nextSlide) {
      var mySlideNumber = nextSlide;
      $(".slider-nav-thumbnails .slick-slide").removeClass("slick-active");
      $(".slider-nav-thumbnails .slick-slide")
        .eq(mySlideNumber)
        .addClass("slick-active");
    }
  );

  //UPDATED

  $(".slider").on("afterChange", function (event, slick, currentSlide) {
    $(".content").hide();
    $(".content[data-id=" + (currentSlide + 1) + "]").show();
  });

  $(".gallery_img").magnificPopup({
    type: "image",
    gallery: {
      enabled: true,
    },
  });
})(jQuery);

// login form start

// login form start

const studentFormOpenBtn = document.querySelector("#student-form-open"),
  teacherFormOpenBtn = document.querySelector("#teacher-form-open"),
  home = document.querySelector(".home"),
  formContainer = document.querySelector(".form_container"),
  formCloseBtn = document.querySelector(".form_close"),
  signupBtn = document.querySelector("#signup"),
  loginBtn = document.querySelector("#login"),
  pwShowHide = document.querySelectorAll(".pw_hide"),
  navbar = document.querySelector(".main-menu-item");

studentFormOpenBtn.addEventListener("click", () => {
  // navbar.style.display = "none"; // Hide the navbar when student portal is opened
  // home.classList.add("show");
});

teacherFormOpenBtn.addEventListener("click", () => {
  // navbar.style.display = "none"; // Hide the navbar when teacher portal is opened
  // home.classList.add("show");
});

formCloseBtn.addEventListener("click", () => {
  home.classList.remove("show");
  navbar.style.display = ""; // Show the navbar when the form is closed (set to an empty string to remove the inline style)
});

pwShowHide.forEach((icon) => {
  icon.addEventListener("click", () => {
    let getPwInput = icon.parentElement.querySelector("input");
    if (getPwInput.type === "password") {
      getPwInput.type = "text";
      icon.classList.replace("uil-eye-slash", "uil-eye");
    } else {
      getPwInput.type = "password";
      icon.classList.replace("uil-eye", "uil-eye-slash");
    }
  });
});

signupBtn.addEventListener("click", (e) => {
  e.preventDefault();
  formContainer.classList.add("active");
});
loginBtn.addEventListener("click", (e) => {
  e.preventDefault();
  formContainer.classList.remove("active");
});

// login form end
