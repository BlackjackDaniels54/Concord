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
     
      toggleSpinner();
      axios.post('https://artichecker.com/Concord/myapi/sendRequestHome', data)
            .then(res => {
  
              form.reset();
              $('#form').removeClass('was-validated');
              toggleSpinner();
              //Success();
              
          }).catch(function(error){
            toggleSpinner();
              if (error.response && 
                  error.response.status === 400 && 
                  error.response.data &&
                  error.response.data.error) {

                  console.log("" + error.response.data.error);
                  alert("" + error.response.data.error);
              } else {
                  console.log(error);
              }
          }).finally(() => $('.toast').toast('show')) 
      
}

function toggleSpinner() {
    $('#fa-spin_custom').toggleClass('fa-spin_custom');
    $('#btn_subm_custom').toggleClass('btn-primary');
    $('#btn_subm_custom').toggleClass('btn-primary-outline');
    $('#btn_subm_custom').hasClass('btn-primary-outline') ? 
                          $('#btn_subm_custom span').html('Loading ...') :
                          $('#btn_subm_custom span').html('Send form');
}


function Success(){
    const toast = document.querySelector('.toast'),
          toastIcon = toast.querySelector('#fa-check'),
          toasttitle = toast.querySelector('.toast_title'),
          toastBody = toast.querySelector('.toast-body');
    
    toastIcon.classList.contains('fa-triangle-exclamation') ?
              toastIcon.classList.remove('fa-triangle-exclamation') :
              false;

    toastIcon.classList.add('fa-square-check');
    toasttitle.classList.add('toast_title-green');
    toasttitle.innerText = 'Success';
    
    toastBody.innerText = 'Our Info Team will contact you as soon as possible';
    
}
function Danger(message){
  const toast = document.querySelector('.toast'),
        toastIcon = toast.querySelector('#fa-check'),
        toasttitle = toast.querySelector('.toast_title'),
        toastBody = toast.querySelector('.toast-body');
  
  toastIcon.classList.contains('fa-square-check') ?
            toastIcon.classList.remove('fa-square-check') :
            false;

  toastIcon.classList.add('fa-triangle-exclamation');
  toasttitle.classList.add('toast_title-red');
  toasttitle.innerText = 'Error';
  
  toastBody.innerText = message;
  
}

