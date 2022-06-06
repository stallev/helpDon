//валидация формы запроса обратного звонка
let consultForm = document.querySelector('.order-form__content--call-form');
let consultFormSubmitBtn = consultForm.querySelector('.action--submit-form');
if(consultForm){
  let personNameValidity = false;
  let personPhoneValidity = false;
  let personNameField = consultForm.querySelector('input[name=answers-name]');
  personNameField.addEventListener("blur", function(){
    console.log('blur');
    if ((personNameField.value.includes('Например:'))||(personNameField.value=="")) { 
      //console.log('personNameField не валидно');
      $('.order-form__content--call-form input[name=answers-name]').notify("Поле нужно заполнить", "error"); 
      $('.order-form__content--call-form input[name=answers-name]').addClass("errtextbox");
      personNameValidity=false;
    }
    else{
      personNameValidity=true;
      $('.order-form__content--call-form input[name=answers-name]').removeClass("errtextbox");
    }
  })
  let personPhoneField = consultForm.querySelector('input[name=answers-phone]');
  personPhoneField.addEventListener("blur", function(){
    //console.log('blur2');
    if (personPhoneField.value=="") { 
      //console.log('personPhoneField не валидно');
      $('.order-form__content--call-form input[name=answers-phone]').notify("Поле нужно заполнить", "error"); 
      $('.order-form__content--call-form input[name=answers-phone]').addClass("errtextbox");
      personPhoneValidity=false;
      //console.log((personPhoneValidity&&personNameValidity));
    }
    else{
      personPhoneValidity=true;
      $('.order-form__content--call-form input[name=answers-phone]').removeClass("errtextbox");
      //console.log(!(personPhoneValidity&&personNameValidity));
    }
  })

  consultFormSubmitBtn.addEventListener('click', function(e){
    e.preventDefault();
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