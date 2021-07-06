"use strict"
let bg__elements = document.querySelectorAll('.bg-src');
if(bg__elements){
  bg__elements.forEach(element => {
    let bg_img_src = element.getAttribute('data-bg-src');
    element.style.backgroundImage = 'url(' + bg_img_src + ')';
  });
}

//слайдер в шапке на главной странице
if($('.main-slider__list')){
  $('.main-slider__list').slick({
    slidesToShow: 1,
    slidesToScroll: 1,               
    dots: true,
    fade: true,
    speed: 1000,
    useTransform: true,
    cssEase: 'ease-out',
    arrows:false,
    infinite: true,
    dotsClass: 'main-slider__slick-dots'
  });
}


//слайдер на главной в секции блога
if($('.blog-section__slider')){
  $('.blog-section__slider').slick({
    slidesToShow: 5,
    margin: 45,
    slidesToScroll: 1,               
    dots: false,
    infinite: true,
    prevArrow:'<button class="blog-section-prev"><i class="far fa-angle-left"></i></button>',
    nextArrow:'<button class="blog-section-next"><i class="far fa-angle-right"></i></button>',
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 4,
        }
      },
      {
        breakpoint: 993,
        settings: {
          slidesToShow: 3,
          arrows: false,
          dots: true,
          dotsClass: 'main-slider__slick-dots',
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false,
          dots: true,
          dotsClass: 'main-slider__slick-dots',
        }
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          dots: true,
          dotsClass: 'main-slider__slick-dots',
        }
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          dots: true,
          dotsClass: 'main-slider__slick-dots',
        }
      }
    ]
  })
  //выравнивание слайдов по высоте
  // .on('setPosition', function (event, slick) {
  //   slick.$slides.css('height', slick.$slideTrack.height() + 'px');
  // })
  ;
}

//слайдер "Похожие статьи"
if($('.blog-posts-similar-slider')){
  $('.blog-posts-similar-slider').slick({
    slidesToShow: 3,
    margin: 45,
    slidesToScroll: 1,               
    dots: true,
    arrows:false,
    infinite: true,
    dotsClass: 'blog-posts-similar-slider__slick-dots',
    responsive: [
      {
        breakpoint: 993,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: true,
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          dots: true,
        }
      }
    ]
  });
}


//слайдер "Отзывы покупателей"
if($('.testimonials__list')){
  $('.testimonials__list').slick({
    slidesToShow: 3,
    margin: 45,
    slidesToScroll: 1,               
    dots: true,
    arrows:false,
    infinite: true,
    dotsClass: 'bestseller-slider__slick-dots',
    responsive: [
      {
        breakpoint: 993,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: true,
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          dots: true,
        }
      }
    ]
  });
}