//квиз
let quizNextBtn1 = document.querySelector('.quiz__action--1');
let btnsQuizNextStep = convertToArray(document.querySelectorAll('.quiz__action-next'));
if(btnsQuizNextStep){
  btnsQuizNextStep.forEach(
    btn => {
      btn.addEventListener('click', function(e){
        e.preventDefault();
        let mainParent = e.target.closest('.quiz__item');
        console.log(mainParent.nextElementSibling);
        //валидация полей на пустое значение
        let parentsInputs = convertToArray(mainParent.querySelectorAll('input'));
        
        let parentsInputsValidity = true;
        
        let validity;
        if(parentsInputs){
          for(let i = 0; i<parentsInputs.length; i++){
            validity = parentsInputs[i].validity.valid;
            if(!validity) return;
          }
          parentsInputsValidity = validity;
        }
        let parentsSelect = convertToArray(mainParent.querySelectorAll('select'));
        let parentsSelectsValidity = true;
        // if(parentsSelect){
        //   for(let i = 0; i<parentsSelect.length; i++){
        //     if(parentsSelect[i].value == ""){
        //      validity = false; 
        //     }
        //     else validity = true;
        //     if(!validity) return;
        //   }
        //   parentsSelectsValidity = validity;
        // }
        if(parentsInputsValidity&&parentsSelectsValidity){
          mainParent.nextElementSibling.style.display = "flex";
          mainParent.style.display = "none";
        }
        mainParent.nextElementSibling.style.display = "flex";
        mainParent.style.display = "none";
      });
    }
  )
}
//слайдеры материалов забора
document.addEventListener( 'DOMContentLoaded', function () {
  new Splide( '.material-card__variety-slider--1', {
    type: 'loop',
    focus    : 'center',
    pagination: false,
    arrows: false,
    //gap: '5px',
    perPage    : 4,
    breakpoints: {
      991: {
        perPage: 3,
      },
      768: {
        perPage: 2,
      },
      450: {
        perPage: 1,
      },
    }
  } ).mount();
} );
document.addEventListener( 'DOMContentLoaded', function () {
  new Splide( '.material-card__variety-slider--2', {
    type: 'loop',
    focus    : 'center',
    pagination: false,
    arrows: false,
    gap: '35px',
    perPage    : 4,
    breakpoints: {
      991: {
        perPage: 3,
      },
      768: {
        perPage: 2,
      },
      450: {
        perPage: 1,
      },
    }
  } ).mount();
} );
document.addEventListener( 'DOMContentLoaded', function () {
  new Splide( '.material-card__variety-slider--3', {
    type: 'loop',
    focus    : 'center',
    pagination: false,
    arrows: false,
    gap: '25px',
    perPage    : 4,
    breakpoints: {
      991: {
        perPage: 3,
      },
      768: {
        perPage: 2,
      },
      450: {
        perPage: 1,
      },
    }
  } ).mount();
} );
document.addEventListener( 'DOMContentLoaded', function () {
  new Splide( '.material-card__variety-slider--4', {
    type: 'loop',
    focus    : 'center',
    pagination: false,
    arrows: false,
    gap: '25px',
    perPage    : 4,
    breakpoints: {
      991: {
        perPage: 3,
      },
      768: {
        perPage: 2,
      },
      450: {
        perPage: 1,
      },
    }
  } ).mount();
} );

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
    prevArrow:'<button class="examples-slider-prev"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" width="40" height="40"><path d="m15.5 0.932-4.3 4.38 14.5 14.6-14.5 14.5 4.3 4.4 14.6-14.6 4.4-4.3-4.4-4.4-14.6-14.6z"></path></svg></button>',
    nextArrow:'<button class="examples-slider-next"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" width="40" height="40"><path d="m15.5 0.932-4.3 4.38 14.5 14.6-14.5 14.5 4.3 4.4 14.6-14.6 4.4-4.3-4.4-4.4-14.6-14.6z"></path></svg></button>',
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


document.addEventListener( 'DOMContentLoaded', function () {
  new Splide( '.reviews__slider', {
    type: 'loop',
    focus    : 'center',
    pagination: false,
    width: '100%',
    start: 1,
    perPage    : 3,
    breakpoints: {
      768: {
        perPage: 1,
        width: '60%',
      },
      575: {
        perPage: 1,
        width: '90%',
      },
      350: {
        perPage: 1,
        width: '90%',
      },
    }
  } ).mount();
} );

function convertToArray(collection){
  let newArray = Array.prototype.slice.call(collection);
  return newArray;
 }

document.addEventListener( 'DOMContentLoaded', function () {
  let subSliderItems = document.querySelectorAll('.review__slider');
  //let subSliderItems = convertToArray(subSliderItems);
  for(let i=0; i < subSliderItems.length; i++){
    subSliderItems[i].classList.add(`sub-slider${i}`);
    new Splide( `.sub-slider${i}`, {
      type: 'loop',
      focus    : 'center',
      width: '100%',
      start: 1,
      perPage    : 1,
      breakpoints: {
        575: {
          perPage: 1,
          arrows: true,
        }
      }
    } ).mount();
  }
  
} );
