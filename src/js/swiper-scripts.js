//слайдер Наша команда

var swiper1 = new Swiper(".team__list", {
  loop: true,
  slidesPerView: 1,
  centeredSlides: true,
  initialSlide: 1,
  spaceBetween: 30,
  navigation:{
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  breakpoints: {
    // when window width is >= 320px
    991: {
      slidesPerView: 3,
      spaceBetween: 0,
    },
  },
});
var port_lendings = new Swiper(".portfolio__lendings", {
  loop: true,
  slidesPerView: 1,
  centeredSlides: true,
  initialSlide: 0,
  spaceBetween: 0,
  navigation:{
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  breakpoints: {
    // when window width is >= 991px
    991: {
      slidesPerView: 3,
      initialSlide: 1,
      spaceBetween: 0,
    },
    1199: {
      spaceBetween: 0,
      slidesPerView: 3,
    },
  },
});
var port_corporate = new Swiper(".portfolio__corporate", {
  loop: true,
  slidesPerView: 1,
  centeredSlides: true,
  initialSlide: 0,
  spaceBetween: 0,
  navigation:{
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  breakpoints: {
    // when window width is >= 991px
    991: {
      slidesPerView: 3,
      initialSlide: 1,
      spaceBetween: 0,
    },
    1199: {
      spaceBetween: 0,
      slidesPerView: 3,
    },
  },
});
var port_shops = new Swiper(".portfolio__shops", {
  loop: true,
  slidesPerView: 1,
  centeredSlides: true,
  initialSlide: 0,
  spaceBetween: 40,
  navigation:{
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  breakpoints: {
    // when window width is >= 991px
    991: {
      slidesPerView: 3,
      initialSlide: 1,
      spaceBetween: 0,
    },
    1199: {
      spaceBetween: 0,
      slidesPerView: 3,
    },
  },
});

var reviewsSlider = new Swiper(".reviews__list--slider", {
  loop: true,
  slidesPerView: 1,
  centeredSlides: true,
  initialSlide: 1,
  spaceBetween: 0,
  navigation:{
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  breakpoints: {
    // when window width is >= 991px
    991: {
      slidesPerView: 3,
      spaceBetween: 0,
    },
  },
});

var port_contekst_ads = new Swiper(".seo-cases__list--contekst-slider", {
  loop: true,
  slidesPerView: 1,
  centeredSlides: true,
  initialSlide: 0,
  spaceBetween: 0,
  navigation:{
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
});

var site_blocks = new Swiper(".site-blocks__list", {
  loop: true,
  slidesPerView: 1,
  centeredSlides: true,
  initialSlide: 1,
  spaceBetween: 0,
  navigation:{
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  breakpoints: {
    // when window width is >= 991px
    991: {
      centeredSlides: false,
      slidesPerView: 2,
      initialSlide: 0,
      spaceBetween: 10,
      slidesPerView: "auto",
      grabCursor: false,
    },
  },
});

//галерея в портфолио
var gallerySlider = new Swiper(".gallery__list", {
  loop: true,
  slidesPerView: 1,
  initialSlide: 1,
  spaceBetween: 0,
  navigation:{
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});