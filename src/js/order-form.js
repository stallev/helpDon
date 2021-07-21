//конвертируем коллекцию в массив
function convertToArray(collection){
  let newArray = Array.prototype.slice.call(collection);
  return newArray;
 }
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
openCalcForm('quiz');
openCalcForm('call-form');
//закрытие формы квиза
let submitQuizBtn = document.querySelector('.quiz__action--submit');
if(submitQuizBtn){
  submitQuizBtn.addEventListener('click', function(){
    document.body.removeAttribute("class");
  });
}

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

//форма заказа расчета забора1
// let palisade1Btn = document.querySelector('.palisade-1');
// palisade1Btn.addEventListener('click', function(e){
//   e.preventDefault();
//   document.body.classList.add('order-form-view');
//   document.body.classList.add('palisade-1');
// });
//форма заказа расчета забора2

