import { SendMail } from "./components/mailer.js";

(() => {
    const { createApp } = Vue

    createApp({
      data() {
        return {
          message: 'Hello Vue!'
        }
      },

        methods: {
          processMailFailure(result) {
            // show a failure message in the UI
            // use this.$refs to connect to the elements on the page and mark any empty fields/inputs with an error class
            // alert('failure! and if you keep using an alert, DOUBLE failure!');        
            let fails = document.querySelector('.errorMessage');

            fails.classList.add('fail');

            setTimeout(function(){
              fails.classList.remove('fail');
            }, 8000);
            // show some errors in the UI here to let the user know the mail attempt was successful
          },

          processMailSuccess(result) {
            // show a success message in the UI
            // alert("success! but don't EVER use alerts. They are gross.");   
            let successful = document.querySelector('.successMessage');

            successful.classList.add('show');

            setTimeout(function(){
              successful.classList.remove('show');
            }, 5000);

            // document.querySelector('.successMessage').style.display = 'block';
            // show some UI here to let the user know the mail attempt was successful
          },

          processMail(event) {        
            // use the SendMail component to process mail
            SendMail(this.$el.parentNode)
              .then(data => this.processMailSuccess(data))
              .catch(err => this.processMailFailure(err));
          }
        }
    }).mount('#mail-form')
})();