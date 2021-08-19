//квиз

let quizSubmitBtn = document.querySelector('.quiz__action--submit');
let labelsArray = convertToArray(document.querySelectorAll('.quiz__item:not(:last-of-type) label'));
let backBtnsQuizArray = convertToArray(document.querySelectorAll('.quiz__action-back'));
let pageScrollTop = 0;
if(labelsArray){
  labelsArray.forEach(
    label => {
      label.addEventListener('click', function(e) {
        let mainParent = e.target.closest('.quiz__item');
        displayNextStep(mainParent);
      })
    }
  )
}
if(backBtnsQuizArray){
  backBtnsQuizArray.forEach(
    btn => {
      btn.addEventListener('click', function(e) {
        e.preventDefault();
        let mainParent = e.target.closest('.quiz__item');
        displayPreviousStep(mainParent);
      })
    }
  )
}
function displayNextStep(parent) {
  parent.nextElementSibling.style.display = "flex";
  parent.style.display = "none";
}
function displayPreviousStep(parent) {
  parent.previousElementSibling.style.display = "flex";
  parent.style.display = "none";
}




//форма расчета стоимости
// $(".order-form__content--palisade1 input[name=mail]").focusout(function(){
//   var value = $(this).val().trim();
//   if (value.search(/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/) != 0) {
//     $(this).notify("E-mail введён не корректно", "error");
//     $(this).addClass("errtextbox");
//     errorMail = true;
//   } else { 
//     $(this).removeClass("errtextbox");
//     errorMail = false;
//   }
// });

function checkNull(element) {
  $(element).focusout(function(){
    if ($(this).val() =="") {
      /* Выводим сообщение об ошибке под элементом.
         This в данном случае это элемент, который инициировал вызов функции */
      
      $(element).notify("Поле нужно заполнить", "error"); 
      $(element).addClass("errtextbox");
      errorNull = true;
    } else {
      errorNull = false;
      $(element).removeClass("errtextbox");
    }
  }
  )
}
//на пустое значение
$("input[type=text]").each(
  function () {
    checkNull($(this));
  }
)
$(".materials input[type=tel]").each(
  function () {
    checkNull($(this));
  }
)
$(".questions input[type=tel]").each(
  function () {
    checkNull($(this));
  }
)
$(".questions__form-textarea").each(
  function () {
    checkNull($(this));
  }
)


//валидация формы запроса обратного звонка
let consultForm = document.querySelector('.order-form__content--call-form');
let consultFormSubmitBtn = consultForm.querySelector('.order-form__submit--call');
if(consultForm){
  let personNameValidity = false;
  let personPhoneValidity = false;
  let personNameField = consultForm.querySelector('input[name=person]');
  personNameField.addEventListener("blur", function(){
    console.log('blur');
    if ((personNameField.value.includes('Например:'))||(personNameField.value=="")) { 
      //console.log('personNameField не валидно');
      $('.order-form__content--call-form input[name=person]').notify("Поле нужно заполнить", "error"); 
      $('.order-form__content--call-form input[name=person]').addClass("errtextbox");
      personNameValidity=false;
    }
    else{
      personNameValidity=true;
      $('.order-form__content--call-form input[name=person]').removeClass("errtextbox");
    }
  })
  let personPhoneField = consultForm.querySelector('input[name=phone]');
  personPhoneField.addEventListener("blur", function(){
    //console.log('blur2');
    if (personPhoneField.value=="") { 
      //console.log('personPhoneField не валидно');
      $('.order-form__content--call-form input[name=phone]').notify("Поле нужно заполнить", "error"); 
      $('.order-form__content--call-form input[name=phone]').addClass("errtextbox");
      personPhoneValidity=false;
      //console.log((personPhoneValidity&&personNameValidity));
    }
    else{
      personPhoneValidity=true;
      $('.order-form__content--call-form input[name=phone]').removeClass("errtextbox");
      //console.log(!(personPhoneValidity&&personNameValidity));
    }
  })

  consultFormSubmitBtn.addEventListener('click', function(e){
    if((personPhoneValidity&&personNameValidity)){
      $('.order-form__content--call-form').submit();
      console.log('Форма успешно отправлена');
      document.body.removeAttribute("class");
    }
    else{
      e.preventDefault();
      console.log('personPhoneValidity is '+personPhoneValidity);
      console.log('personNameValidity is '+personNameValidity);
      $('.order-form__content--call-form').notify("Не все поля корректно заполнены", "error");
      $('.order-form__content--call-form').addClass("errtextbox");
    }
  })
}