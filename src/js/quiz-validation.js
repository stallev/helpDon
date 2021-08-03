//квиз
let quizWindow = document.querySelector('.order-form__content--quiz');
let quizNextBtn1 = document.querySelector('.quiz__action--1');
let quizNextBtn2 = document.querySelector('.quiz__action--2');
let quizNextBtn3 = document.querySelector('.quiz__action--3');
let quizNextBtn4 = document.querySelector('.quiz__action--4');
let quizNextBtn5 = document.querySelector('.quiz__action--5');
let quizNextBtn6 = document.querySelector('.quiz__action--6');
let quizSubmitBtn = document.querySelector('.quiz__action--submit');
function displayNextStep(parent) {
  parent.nextElementSibling.style.display = "flex";
  parent.style.display = "none";
  parent.closest('.order-form__content--quiz').scrollTop = 0;
}
if(quizNextBtn1){
  quizNextBtn1.addEventListener('click', function(e) {
    e.preventDefault();
    let mainParent = e.target.closest('.quiz__item');
    let quizInput = document.querySelector('.quiz__item--1 input');
    //$('.quiz__item--1 input').focusout(checkNull);
    checkLength('.quiz__item--1 input', 25);
    if(quizInput.value!="Например: 5 метров"&&quizInput.value!=""){
      displayNextStep(mainParent);
    }
    else{
      $('.quiz__item--1 input').notify("Поле нужно заполнить", "error"); 
      $('.quiz__item--1 input').addClass("errtextbox");
    }
  })
}
if(quizNextBtn2){
  quizNextBtn2.addEventListener('click', function(e) {
    e.preventDefault();
    let mainParent = e.target.closest('.quiz__item');
    let quizInput = document.querySelector('.quiz__item--2 select');
    if(quizInput.value!="Выберите"){
      displayNextStep(mainParent);
    }
    else{
      $('.quiz__item--2 .nice-select').addClass("errtextbox");
    }
  })
}
if(quizNextBtn3){
  quizNextBtn3.addEventListener('click', function(e) {
    e.preventDefault();
    let mainParent = e.target.closest('.quiz__item');
    displayNextStep(mainParent);
  })
}
if(quizNextBtn4){
  quizNextBtn4.addEventListener('click', function(e) {
    e.preventDefault();
    let mainParent = e.target.closest('.quiz__item');
    displayNextStep(mainParent);
  })
}
if(quizNextBtn5){
  quizNextBtn5.addEventListener('click', function(e) {
    e.preventDefault();
    let mainParent = e.target.closest('.quiz__item');
    let quizInput = document.querySelector('.quiz__item--5 select');
    if(quizInput.value!="Выберите"){
      displayNextStep(mainParent);
    }
    else{
      $('.quiz__item--5 .nice-select').addClass("errtextbox");
    }
  })
}
if(quizNextBtn6){
  quizNextBtn6.addEventListener('click', function(e) {
    e.preventDefault();
    let mainParent = e.target.closest('.quiz__item');
    let quizInput = document.querySelector('.quiz__item--6 input');
    if(quizInput.value.match(/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/)){
      displayNextStep(mainParent);
    }
    else{
      $('.quiz__item--6 input').notify("Поле не заполнено или заполнено некорректно", "error"); 
      $('.quiz__item--6 input').addClass("errtextbox");
    }
  })
}

let submitQuizBtn = document.querySelector('.quiz__action--submit');
if(submitQuizBtn){
  let quizInput7 = document.querySelector('.quiz__item--7 [type=tel]');
  let personPhoneQuizValidity=false;
  quizInput7.addEventListener("blur", function(){
    //console.log('blur2');
    if (quizInput7.value=="Ваш телефон"||quizInput7.value=="") { 
      console.log('personPhoneQuizValidity не валидно');
      personPhoneQuizValidity=false;
      $('.quiz__item--7 [type=tel]').notify("Поле необходимо заполнить", "error"); 
      $('.quiz__item--7 [type=tel]').addClass("errtextbox");
      personPhoneQuizValidity=false;
      console.log('personPhoneQuizValidity равно '+personPhoneQuizValidity);
    }
    else{
      personPhoneQuizValidity=true;
      $('.quiz__item--7 [type=tel]').removeClass("errtextbox");
      console.log('personPhoneQuizValidity равно '+personPhoneQuizValidity);
    }
  })
  submitQuizBtn.addEventListener('click', function(){
    if(personPhoneQuizValidity){
      $('form.order-form__form--quiz').submit();
      document.body.removeAttribute("class");
    }
    else{
      e.preventDefault();
      $('.quiz__item--7 [type=tel]').notify("Поле нужно заполнить", "error"); 
      $('.quiz__item--7 [type=tel]').addClass("errtextbox");
    }
  });
}

//форма расчета стоимости
$(".order-form__content--palisade1 input[name=mail]").focusout(function(){
  var value = $(this).val().trim();
  if (value.search(/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/) != 0) {
    $(this).notify("E-mail введён не корректно", "error");
    $(this).addClass("errtextbox");
    errorMail = true;
  } else { 
    $(this).removeClass("errtextbox");
    errorMail = false;
  }
});

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