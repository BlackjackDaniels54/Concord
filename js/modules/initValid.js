import axios from "axios";

export function initValid() {
    (function() {
        'use strict';
        window.addEventListener('load', function() {
          // Fetch all the forms we want to apply custom Bootstrap validation styles to
          var forms = document.getElementsByClassName('needs-validation');
          // Loop over them and prevent submission
          var validation = Array.prototype.filter.call(forms, function(form) {
            form.addEventListener('submit', function(event) {
              event.preventDefault();
              if (form.checkValidity() === false) {
                  event.stopPropagation();
              }else {
                sendData(event.target)
              }
              

              form.classList.add('was-validated');
            }, false);
          });
        }, false);
      })();
}


function sendData(form) {
      const data = {
        name: form.querySelector('input[name="name"]').value,
        email: form.querySelector('input[name="email"]').value,
        phone: form.querySelector('input[name="number"]').value,
        subject: form.querySelector('input[name="subject"]').value,
        message: form.querySelector('textarea[name="message"]').value
      }
     
      showSpinner()
      axios.post('https://artichecker.com/Concord/myapi/sendRequest', data)
            .then(res => {
              hideSpinner();
              Success();
              $('#form').removeClass('was-validated')
              form.reset();
          }).catch(function(error){
              hideSpinner();
              if (error.response && 
                  error.response.status === 400 && 
                  error.response.data &&
                  error.response.data.error) {

                  console.log(error.response.data.error);
                  Danger("" + error.response.data.error);
              } else {
                  Danger('Error 500. Bad request');
              }
          }) 
      
}


function showSpinner() {

}

function hideSpinner() {

}


export function Toast() {

// Находим ваш Toast по его ID
var myToast = document.getElementById('liveToast');

// Находим кнопку или элемент, который вызывает появление Toast
var showToastButton = document.getElementById('showToast');

// Добавляем обработчик события на кнопку для отображения Toast
showToastButton.addEventListener('click', function() {
  var toast = new bootstrap.Toast(myToast);
  toast.show();
});

// Добавляем обработчик события, чтобы закрывать Toast при нажатии на крестик
myToast.addEventListener('hidden.bs.toast', function() {
  // Выполните нужные действия после закрытия Toast
});
}
