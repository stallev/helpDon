//lazy
[].forEach.call(document.querySelectorAll('img[data-src]'), function(img) {
  img.setAttribute('src', img.getAttribute('data-src'));
  img.onload = function() {
    img.removeAttribute('data-src');
  };
});

//квиз
let quizNextBtn1 = document.querySelector('.quiz__action--1');
let btnsQuizNextStep = convertToArray(document.querySelectorAll('.quiz__action-next'));
if(btnsQuizNextStep){
  btnsQuizNextStep.forEach(
    btn => {
      btn.addEventListener('click', function(e){
        e.preventDefault();
        let mainParent = e.target.closest('.quiz__item');
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
        //валидация полей на выбор одного значения из списка
        let parentsSelect = convertToArray(mainParent.querySelectorAll('select'));
        let parentsSelectsValidity = true;
        if(parentsSelect){
          for(let i = 0; i<parentsSelect.length; i++){
            if(parentsSelect[i].value == "Выберите"){
            window.alert('Вы не выбрали значение');
            parentsSelect[i].focus(); 
            validity = false; 
            }
            else validity = true;
            if(!validity) return;
           }
           parentsSelectsValidity = validity;
        }
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

document.addEventListener( 'DOMContentLoaded', function () {
  new Splide( '.examples__slider', {
    type: 'loop',
    focus    : 1,
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


document.addEventListener( 'DOMContentLoaded', function () {
  new Splide( '.reviews__slider', {
    type: 'loop',
    focus    : 1,
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
