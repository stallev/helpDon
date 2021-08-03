//конвертируем коллекцию в массив
function convertToArray(collection){
  let newArray = Array.prototype.slice.call(collection);
  return newArray;
 }

//маска номера телефона
// var elements = document.getElementsByClassName('imaskjs__input_tel');
// for (var i = 0; i < elements.length; i++) {
//   new IMask(elements[i], {
//     mask: '+{375}(00)000-00-00',
//   });
// }
// $(function() {
//   $('.imaskjs__input_tel').mask('+{375}(00)000-00-00');
// });

$(document).ready(function() {
  $('.imaskjs__input_tel').mask("+375 (99) 999-99-99");
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
openCalcForm('palisade-1');
openCalcForm('gateway-1');
openCalcForm('quiz-form');
openCalcForm('call-form');

// let closeCallForm =document.querySelector('.order-form__content--call-form .order-form__submit');

// if(closeCallForm){
//   closeCallForm.addEventListener('click', function(){
//     document.body.removeAttribute("class");
//   });
// }

//скрытие списка полей
let fieldGroupTitles = convertToArray(document.querySelectorAll('.order-form__field-group-title'));
if(fieldGroupTitles){
  fieldGroupTitles.forEach(
    fieldGroupTitle => {
      fieldGroupTitle.addEventListener('click', function(){
        fieldGroupTitle.classList.toggle('order-form__field-group-title--hidden');
      });
    }
  )
}
//стилизация чекбоксов
let formLabels = convertToArray(document.querySelectorAll('.gateways .wpcf7-list-item-label'));
if(formLabels){
  formLabels.forEach(
    formLabel => {
      formLabel.addEventListener('click', function(){
        formLabel.classList.toggle('label--checked');
      });
    }
  )
}
//стилизация радио в квизе
// let quizRadioLabels = convertToArray(document.querySelectorAll('.order-form__content--quiz .wpcf7-list-item-label'));
// if(quizRadioLabels){
//   quizRadioLabels.forEach(
//     quizRadioLabel => {
//       quizRadioLabel.addEventListener('click', function(){
//         quizRadioLabel.classList.toggle('label--checked');
//       });
//     }
//   )
// }

//форма заказа расчета забора1
// let palisade1Btn = document.querySelector('.palisade-1');
// palisade1Btn.addEventListener('click', function(e){
//   e.preventDefault();
//   document.body.classList.add('order-form-view');
//   document.body.classList.add('palisade-1');
// });
//форма заказа расчета забора2

