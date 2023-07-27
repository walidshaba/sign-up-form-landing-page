const firstName = document.getElementById('first-name');
const lastName = document.getElementById('last-name');
const email = document.getElementById('email');
const password = document.getElementById('password');
const submit = document.getElementById('submit');
const form = document.getElementById('form');
const returntoPageBtn = document.getElementById('return');
const errorMessage1 = document.querySelector('.error-msg1');
const errorMessage2 = document.querySelector('.error-msg2');
const errorMessage3 = document.querySelector('.error-msg3');
const errorMessage4 = document.querySelector('.error-msg4');
const shadowBox = document.querySelector('.thanksContainer');
const thanksBox = document.querySelector('.thanksBox');
const mailLink = document.querySelector('.mailto');
// const errorIcon = document.querySelectorAll('input');

function validation(e) {
  let regx = /^([a-zA-Z0-9\._]+)@([a-zA-Z0-9]+)[.]([a-z]{2,4})$/;

  if (
    !firstName.value == '' &&
    !lastName.value == '' &&
    regx.test(email.value) &&
    !password.value == ''
  ) {
    e.preventDefault();
    shadowBox.classList.add('active');
    thanksBox.classList.add('active');
  } else {
    if (firstName.value == '') {
      firstName.classList.add('active');
      errorMessage1.classList.add('active');
      firstName.placeholder = '';
      e.preventDefault();
    } else {
      firstName.classList.remove('active');
      errorMessage1.classList.remove('active');
    }
    if (lastName.value == '') {
      lastName.classList.add('active');
      errorMessage2.classList.add('active');
      lastName.placeholder = '';
      e.preventDefault();
    } else {
      lastName.classList.remove('active');
      errorMessage2.classList.remove('active');
    }
    if (regx.test(email.value)) {
      email.classList.remove('active');
      errorMessage3.classList.remove('active');
      mailLink.innerHTML = email.value;
    } else {
      email.classList.add('active');
      errorMessage3.classList.add('active');
      email.placeholder = 'email@example/com';
      e.preventDefault();
    }
    if (password.value == '') {
      password.classList.add('active');
      errorMessage4.classList.add('active');
      password.placeholder = '';
      e.preventDefault();
    } else {
      password.classList.remove('active');
      errorMessage4.classList.remove('active');
    }
  }
}

form.addEventListener('submit', validation);

function returnToPage() {
  document.getElementById('form').reset();
  shadowBox.classList.remove('active');
  thanksBox.classList.remove('active');
}
