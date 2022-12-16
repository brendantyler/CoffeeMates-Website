'use strict'

let emailInput = document.getElementById('email')
let passwordInput =document.getElementById("password")

const loginButton = document.getElementById('login-button')
const user = localStorage.getItem('email');
const password = localStorage.getItem('pass');


loginButton.addEventListener('click', validate);

function validate(){
  let email = emailInput.value;
  let pass = passwordInput.value;

  switch (true) {
    case localStorage.length = 0: 
      localStorage.setItem('email', 'brendan@coffeemate.com'); 
      localStorage.setItem('pass', 'coffeemate123');
    case (user == email && password != pass) || (password == pass && user != email): 
      
  }

}