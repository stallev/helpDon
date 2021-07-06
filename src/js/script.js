
  $('.material-card__variety-slider').each(function() {
    $(this).slick({
      slidesToShow: 4,
      margin: 45,
      slidesToScroll: 1,               
      dots: false,
      arrows: false,
      infinite: true,
      responsive: [
        
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            centerMode: true,
            centerPadding: '70px',
          }
        },
        {
          breakpoint: 450,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode: true,
            centerPadding: '40px',
          }
        },
      ]
    });
});

//увеличение центральной картинки

$('.examples__list').each(function() {
  $(this).slick({
    slidesToShow: 3,
    speed: 500,
    margin: 45,
    slidesToScroll: 1, 
    centerMode: true,
    focusOnSelect: true,              
    dots: false,
    arrows: true,
    infinite: true,
    variableWidth: true,
    cssEase: 'linear', 
    prevArrow:'<button class="examples-slider-prev"><i class="far fa-angle-left"></i></button>',
    nextArrow:'<button class="examples-slider-next"><i class="far fa-angle-right"></i></button>',
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
          focusOnSelect: false,
          variableWidth: false, 
        }
      },
    ]
  });
});



$('.reviews__list').each(function() {
  $(this).slick({
    slidesToShow: 3,
    slidesToScroll: 1,              
    dots: false,
    arrows: true,
    infinite: true,
    //centerMode: true,
    focusOnSelect: true,
    //variableWidth: true,
    prevArrow:'<button class="reviews__slider-prev"><i class="far fa-angle-left"></i></button>',
    nextArrow:'<button class="reviews__slider-next"><i class="far fa-angle-right"></i></button>',
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
    ]
  });
});

$('.review__slider').each(function() {
  $(this).slick({
    slidesToShow: 1,
    slidesToScroll: 1,               
    dots: true,
    arrows: true,
    infinite: true,
    prevArrow:'<button class="review__slider-prev"><i class="far fa-angle-left"></i></button>',
    nextArrow:'<button class="review__slider-next"><i class="far fa-angle-right"></i></button>',
    responsive: [
      
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      
    ]
  });
});

