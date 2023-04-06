let emailFormContainer = document.querySelector('email-container');
let emailId = document.getElementById('emailId');
let errorMsg = document.getElementById('errorMsg');
let icon = document.getElementById('errorIcon');
let submitBtn = document.querySelector('[type=submit]');
let count = 0;
let mailRegex = /^[a-zA-Z][a-zA-Z0-9\-\_\.]+@[a-zA-Z0-9]{2,}\.[a-zA-Z0-9]{2,}$/;

function checker() {
  icon.style.display = 'none';
  if (emailId.value.match(mailRegex)) {
    errorIcon.style.display = 'none';
    errorMsg.style.display = 'none';
  } else if (emailId.value == '') {
    errorIcon.style.display = 'none';
    errorMsg.style.display = 'none';
    emailId.style.border = '1px solid #ce979780';
  } else {
    errorIcon.style.display = 'block';
    errorMsg.style.display = 'block';
    emailId.style.border = '2px solid #f96262';
  }
}

// emailId.addEventListener('keyup', (e) => {
//   emailFormContainer.classList.remove('shake');
//   emailId.value.includes('@') & emailId.value.includes('.com')
//     ? onValidation(errorMsg, '', 1)
//     : onValidation(errorMsg, 0);
// });

// submitBtn.addEventListener('click', (e) => {
//   e.preventDefault();
//   if (count > 0) {
//     setTimeout(() => {
//       ScrollReveal().reveal('.reveal', {
//         distance: '150%',
//         origin: 'bottom',
//         opacity: 0,
//         duration: 1000,
//       });
//     }, 50);
//   } else {
//     errorMsg.textContent = 'This field is required';
//     emailFormContainer.classList.add('shake');
//   }
// });
