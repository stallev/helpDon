//слайдер Наша команда


var gallerySlider = new Swiper(".gallery__list1", {
  loop: true,
  lazy: true,
  slidesPerView: 1,
  initialSlide: 1,
  spaceBetween: 0,
  autoplay: {
    delay: 4000,
  },
  navigation:{
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});