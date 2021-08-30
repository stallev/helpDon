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


