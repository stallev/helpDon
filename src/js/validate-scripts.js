/* Изначально форма не заполнена и по этому считаем что все возможные ошибки есть  */
var errorNull = true, errorMail = true, errorNumber = true, errorSelect = true, errorPass = true;

/* Для удобства и уменьшения размера кода выносим функцию проверки поля на null в отдельную переменную */

let checkNull = function(){
  $(this).val($(this).val().trim());
  if ($(this).val() =="") {
    /* Выводим сообщение об ошибке под элементом.
       This в данном случае это элемент, который инициировал вызов функции */
    
    $(this).notify("Поле нужно заполнить", "error"); 
    $(this).addClass("errtextbox");
    errorNull = true;
  } else {
    errorNull = false;
    $(this).removeClass("errtextbox");
  }
};





/* Проверка поля Имя на соответствие длинны */
function checkLength(selector, count) {
  $(selector).keyup(function(){
    var value = $(this).val();
    if (value.length > count){ 
      $(this).notify(`Максимум ${count} символов`, "info");
      $(this).val(value.slice(0,count-1));
    }
  });
  return 1;
}


/* Проверяем значения полей Имя и Информация на null в момент когда они теряют фокус (для текстовых полей) */
$("#name").focusout(checkNull);
$("#info").focusout(checkNull);
/* Проверяем корректность E-mail */
function checkMailInput(selector) {
  $(selector).focusout(function(){
    var value = $(this).val().trim();
  /* Для этого используем регулярное выражение  */
    if (value.search(/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/) != 0) {
      $(this).notify("E-mail введён не корректно", "error");
      $(this).addClass("errtextbox");
      errorMail = true;
    } else { 
      $(this).removeClass("errtextbox");
      errorMail = false;
    }
  });
}
let checkMail = function() {
  var value = $(this).val().trim();
/* Для этого используем регулярное выражение  */
  if (value.search(/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/) != 0) {
    console.log(value);
    $(this).notify("E-mail введён не корректно", "error");
    $(this).addClass("errtextbox");
    errorMail = true;
  } else { 
    $(this).removeClass("errtextbox");
    errorMail = false;
  }
}

/* Проверяем корректность числового поля */
function checkNumberlInput(selector) {
  $(selector).focusout(function(){
    let value = $(this).val().trim();
  /* Для этого используем регулярное выражение  */
    let validationValue = 0;
    if (value.search(/^\d+$/i) != 0) {
      $(this).notify("В поле должны быть только цифры", "error");
      $(this).addClass("errtextbox");
      validationValue = 0;
    } else { 
      $(this).removeClass("errtextbox");
      validationValue = 1;
    }
  });
  return validationValue;
}

/* Проверяем корректность select поля */
function checkSelectlInput(selector) {
  $(selector).focusout(function(){
    if(selector.value == "Выберите"){
      $(this).notify("Не выбрано ни одно из значений", "error");
      $(this).addClass("errtextbox");
      errorSelect = true;
    }else { 
      $(this).removeClass("errtextbox");
      errorSelect = false;
    }
  });
}

/* Проверяем длину пароля */
$("#password1").focusout(function(){
  var value = $(this).val();
  if (value.length <= 4) { 
    $(this).notify("Минимум 5 символов", "error");
    $(this).addClass("errtextbox");
    errorPass = true;
  } else {
    if (value.length > 9) {
      $(this).notify("Миксимум 10 символов", "error");
      $(this).addClass("errtextbox");
      errorPass = true;
    } else {
      errorPass = false;
      $(this).removeClass("errtextbox");
    }
  }
});

/* Проверяем соответствие пароля и подтверждения */
$("#password2").focusout(function(){
  var value = $(this).val();
  if (value != $("#password1").val()) {
    $(this).notify("Пароль не совпадает", "error");
    $(this).addClass("errtextbox");
    errorPass = true;
  } else {
    errorPass = false;
    $(this).removeClass("errtextbox");     
  }
});

/* В результате клика по кнопке отправить если ошибок заполнения нет то форма отправляется иначе получаем сообщение об ошибке */
$("#send").click(function(){
  if (!(errorNull || errorMail || errorPass)) {
    $("#regForm").submit();
  } else {
    $(this).notify("Форма пустая или заполнена не корректно", "error");
  }
});