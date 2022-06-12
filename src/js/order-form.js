//конвертируем коллекцию в массив
function convertToArray(collection){
  let newArray = Array.prototype.slice.call(collection);
  return newArray;
 }

//маска номера телефона
$(document).ready(function () {
  $('.input-field--phone').mask("+375 (99) 999-99-99");
});


//кастомизируем select



let closeFormBtns = convertToArray(document.querySelectorAll('.closeFormBtn'));
let forms = document.querySelectorAll('form');
if(closeFormBtns){
  closeFormBtns.forEach(
    btn => {
      btn.addEventListener('click', function(e){
        e.preventDefault();
        document.body.removeAttribute("class");
        forms.forEach (
          form => form.reset()
        )
      }); 
    }
  )
}

//клик по месту вне формы
let orderFormOverlay = document.querySelector('.order-form__overlay');

if(orderFormOverlay){
  orderFormOverlay.addEventListener('click', function(){
    document.body.removeAttribute("class");
    forms.forEach (
      form => form.reset()
    )
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

function openOrderForm(btnClass){
  let btnsCalc = convertToArray(document.querySelectorAll('.'+btnClass));
  if(btnsCalc){
    btnsCalc.forEach(
      btn => {
        btn.addEventListener('click', function(e){
          e.preventDefault();
          let transportName = btn.closest('.car').querySelector('.car__title').innerHTML;
          document.querySelector('.transport-name').value = transportName;
          document.body.classList.add('order-form-view');
          document.body.classList.add(btnClass);
        });
      }
    )
  }
}
openOrderForm('order-transport');

const TOKEN = '5477703463:AAGlt6r7osdT9QmZpG2ksKcpBkbAWrKGyT0';
const CHAT_ID = '-792442518';

let orderCallForm = document.querySelector('.order-form__content--call-form form'); 
orderCallForm.addEventListener("submit", function (e) {
    e.preventDefault();
    let data = new FormData(this);
    
    let messageText = 'Клиент просит перезвонить\n\n' + 'Имя клиента ' + data.get("person-name") + '\nТелефон: ' + data.get("person-phone");
    sendMsg(messageText);
});

let orderTransportForm = document.querySelector('.order-form__content--order-transport form'); 
orderTransportForm.addEventListener("submit", function (e) {
    e.preventDefault();
    let data = new FormData(this);
    let messageText = 'Клиент заказывает авто\n\n' + 'Авто\n' + data.get("transport-name") + '\nИмя клиента ' + data.get("transport-person") + '\nТелефон: ' + data.get("person-phone") + '\nДата поездки: ' + data.get("transport-date");
    console.log(messageText);
    sendMsg(messageText);
});

let orderBottomForm = document.querySelector('.answers__form--bottom'); 
orderBottomForm.addEventListener("submit", function (e) {
    e.preventDefault();
    let data = new FormData(this);
    let messageText = 'Клиент интересуется стоимостью сделки\n\n' + 'Имя клиента ' + data.get("person-name") + '\nТелефон: ' + data.get("person-phone") + '\nСообщение клиента: ' + data.get("person-message");
    sendMsg(messageText);
});

function sendMsg(data) {
    var url = 'https://api.telegram.org/bot' + TOKEN + '/sendMessage'; // токен бота
    var body = JSON.stringify({
        chat_id: CHAT_ID,
        parse_mode: 'Markdown',
        text: data
    });
    var xhr = new XMLHttpRequest(); // инициализируем AJAX запрос
    xhr.open('POST', url, true); // отправляем наше сообщение методом POST на сервак телеги

    // уведомление-модалка
    xhr.onload = function(oEvent) {
      if (xhr.status === 200) {
        document.body.classList.add('order-form-view');
        document.body.classList.add('success-send');
      }
      if (xhr.status !== 200) {
        document.body.classList.add('order-form-view');
        document.body.classList.add('error-send');
      }
    }
    xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    xhr.send(body);

    document.body.removeAttribute("class");
    document.body.classList.remove('call-form');
    document.body.classList.remove('order-online');
}
