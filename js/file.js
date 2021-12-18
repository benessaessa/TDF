var swiper2 = new Swiper('.most-viewed .swiper-container', {
    slidesPerView: 3,
    spaceBetween: 20,
    loopedSlides: 4,
    autoplay: {
        delay: 3000,
    },
    navigation: {
      nextEl: '.most-viewed .swiper-button-next',
      prevEl: '.most-viewed .swiper-button-prev',
    //   el: '.most-viewed .pagination-container',
    //   clickable: true,
    },
    // pagination: {
    //     el: ".swiper-pagination",
    //     clickable: true
    // },
    breakpoints: {
      300: {
        mousewheel: true,
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 24,
        allowSlidePrev: true,
        allowSlideNext: true,
        loopedSlides: 1,
      },
      400: {
        slidesPerView: 1,
        spaceBetween: 24,
        allowSlidePrev: true,
        allowSlideNext: true,
        loopedSlides: 1,
      },
      640: {
        slidesPerView: 2,
        spaceBetween: 30,
        loopedSlides: 1,
        allowSlidePrev: true,
        allowSlideNext: true
      },
      1200: {
        slidesPerView: 3,
        spaceBetween: 30,
        loopedSlides: 4,
      }
    },

  });