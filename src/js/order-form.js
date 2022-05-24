//конвертируем коллекцию в массив
function convertToArray(collection){
  let newArray = Array.prototype.slice.call(collection);
  return newArray;
 }

//маска номера телефона
$(document).ready(function () {
  $('.phone-field').mask("+375 (99) 999-99-99");
});


//кастомизируем select



let closeFormBtns = convertToArray(document.querySelectorAll('.closeFormBtn'));
if(closeFormBtns){
  closeFormBtns.forEach(
    btn => {
      btn.addEventListener('click', function(e){
        e.preventDefault();
        document.body.removeAttribute("class");
      });
    }
  )
}

//клик по месту вне формы
let orderFormOverlay = document.querySelector('.order-form__overlay');

if(orderFormOverlay){
  orderFormOverlay.addEventListener('click', function(){
    document.body.removeAttribute("class");
  });
}

//вызов форм для калькуляторов заборов и ворот, квиза
function openCalcForm(btnClass){
  let btnsCalc = convertToArray(document.querySelectorAll('.'+btnClass));
  if(btnsCalc){
    btnsCalc.forEach(
      btn => {
        btn.addEventListener('click', function(e){
          e.preventDefault();
          document.body.classList.add('order-form-view');
          document.body.classList.add(btnClass);
        });
      }
    )
  }
}
openCalcForm('call-form');
openCalcForm('order-online');
openCalcForm('quiz-popup');

// let closeCallForm =document.querySelector('.order-form__content--call-form .order-form__submit');

// if(closeCallForm){
//   closeCallForm.addEventListener('click', function(){
//     document.body.removeAttribute("class");
//   });
// }

