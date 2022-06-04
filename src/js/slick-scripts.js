"use strict"
let bg__elements = document.querySelectorAll('.bg-src');
if(bg__elements){
  bg__elements.forEach(element => {
    let bg_img_src = element.getAttribute('data-bg-src');
    element.style.backgroundImage = 'url(' + bg_img_src + ')';
  });
}

if($('.car__photo-wrap12')){
  $('.car__photo-wrap12').each(function() {
    $(this).slick({
        slidesToShow: 1,
        dots: true,
        arrows: true,
    });
  });
}

