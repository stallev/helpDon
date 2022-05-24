"use strict"
let bg__elements = document.querySelectorAll('.bg-src');
if(bg__elements){
  bg__elements.forEach(element => {
    let bg_img_src = element.getAttribute('data-bg-src');
    element.style.backgroundImage = 'url(' + bg_img_src + ')';
  });
}

if($('.review__description-text')){
  $('.review__description-text').slick({
    slidesToShow: 1,
    slidesToScroll: 1,               
    dots: false,
    arrows:true,
    infinite: true,
    prevArrow:'<button class="slick-prev"></button>',
    nextArrow:'<button class="slick-next"></button>',
    asNavFor: '.review__user-content',
    responsive:[
      {
        breakpoint: 769,
        settings:{
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dotsClass: 'main-slider-slick-dots',
        }
      }
    ]
  });  
}

if($('.review__user-content')){
  var $slickFrame = $('.review__user-content');

  var slideWidth = $slickFrame.width() / 3;
  var centerPadding = (slideWidth / 4) * 3;
  $('.review__user-content')
  .on('afterChange init', function(event, slick, direction){
    // console.log('afterChange/init', event, slick, slick.$slides);
    // remove all prev/next
      slick.$slides.removeClass('prevSlide').removeClass('nextSlide');

      // find current slide
      for (var i = 0; i < slick.$slides.length; i++)
      {
          var $slide = $(slick.$slides[i]);
          if ($slide.hasClass('slick-current')) {
              // update DOM siblings
              $slide.prev().addClass('prevSlide');
              $slide.next().addClass('nextSlide');
              break;
          }
      }
    }
  )
  .on('beforeChange', function(event, slick) {
      // optional, but cleaner maybe
      // remove all prev/next
      slick.$slides.removeClass('prevSlide').removeClass('nextSlide');
  })
  .slick({
    slidesToShow: 3,
    slidesToScroll: 1,               
    dots: false,
    infinite: true,
    centerPadding: 25,
    prevArrow:'<button class="thumb-slider-prev"><i class="far fa-angle-left"></i></button>',
    nextArrow:'<button class="thumb-slider-next"><i class="far fa-angle-right"></i></button>',
    asNavFor: '.review__description-text',
    focusOnSelect: true,
    centerMode: true,
    //vertical: true,
    responsive:[
      {
        breakpoint: 993,
        settings:{
          slidesToShow: 3,
          slidesToScroll: 1,
          dots: false,
          infinite: true,
          vertical: false,
        }
      },
      {
        breakpoint: 769,
        settings:{
          slidesToShow: 3,
          slidesToScroll: 1,
          dots: false,
          infinite: true,
          vertical: false,
        }
      },
      {
        breakpoint: 577,
        settings:{
          slidesToShow: 3,
          slidesToScroll: 1,
          dots: false,
          infinite: true,
          vertical: false,
        }
      }
    ]
  });
  // $('.button-prev').click(function(){
  //   // wrap to last slide when clicked on first slide
  //   currentSlide = (currentSlide - 1 + numSlides) % numSlides;
  //   $('.slider-items-wrapper').slick('goTo', currentSlide);
  // });

  // $('.button-next').click(function(){
  //   // wrap to first slide when clicked on last slide
  //   currentSlide = (currentSlide + 1) % numSlides;
  //   $('.slider-items-wrapper').slick('goTo', currentSlide);
  // });
}

