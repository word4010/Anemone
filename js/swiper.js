const swiper = new Swiper("#swiper", {
  loop: true,

  slidesPerView: 2,
  spaceBetween: 8,
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 2,
      spaceBetween: 8,
    },
    // when window width is >= 768px
    768: {
      slidesPerView: 2.5,
      spaceBetween: 32,
    },
    // when window width is >= 1200px
    1200: {
      slidesPerView: 3,
    },
  },
  effect: "coverflow",
  grabCursor: true,

  centeredSlides: true,

  slidesPerView: 3,
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 0,
    modifier: 1,
    slideShadows: false,
    scale: 0.85,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
