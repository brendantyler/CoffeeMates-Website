'use strict'


let emailInput = document.getElementById('email')
let passwordInput = document.getElementById("password");
let credentials = document.getElementById('access')

const forgotPass = document.getElementById('forgot-pass');
const loginButton = document.getElementById('login-button');
const inputError = document.getElementById('input-error');

loginButton.addEventListener('click', checkCookies);
forgotPass.addEventListener('click', showCreds)

window.addEventListener('onload', setLocal())

function setLocal() {
  localStorage.setItem('email', 'brendan@coffeemates.com'); 
  localStorage.setItem('pass', 'coffeemate123');
  console.log(localStorage)
}

function checkCookies(){
  if (localStorage.length > 0 ) {
    validate()
  }
}

function validate () {
  const user = localStorage.getItem('email');
  const password = localStorage.getItem('pass');

  let email = emailInput.value
  let pass = passwordInput.value
 
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