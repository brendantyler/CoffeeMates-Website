'use strict'


let emailInput = document.getElementById('email')
let passwordInput = document.getElementById("password");
let credentials = document.getElementById('access')


const forgotPass = document.getElementById('forgot-pass');
const loginButton = document.getElementById('login-button');
const inputError = document.getElementById('input-error');

const user = localStorage.getItem('email');
const password = localStorage.getItem('pass');


loginButton.addEventListener('click', checkCookies);
forgotPass.addEventListener('click', showCreds)

function checkCookies(){
  if (localStorage.length == 0) {
    localStorage.setItem('email', 'brendan@coffeemate.com'); 
    localStorage.setItem('pass', 'coffeemate123');
     validate()
  } else {
    validate()
  }
}

function validate () {
  let email = emailInput.value.toLowerCase();
  let pass = passwordInput.value.toLowerCase();
 
  if (user != email || password != pass) {    
    inputError.classList.remove('hidden');

  } else if (user == email && password == pass) {
    setTimeout(toHome, 1000)
  }
}

function toHome() {
  window.location="home.html"
}

function showCreds(){
  credentials.classList.remove('hidden')
}