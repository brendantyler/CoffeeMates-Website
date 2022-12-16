const contactsContainer = document.getElementById('contacts')



'use strict'

/* utilities */
function create(element, parent = document) {

  return parent.createElement(element);
}



const url = 'https://randomuser.me/api/?nat=CA&results=10&seed=same';

const options = {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json; charset=UTF-8'
  },
  mode: 'cors'
};

async function getUser() {
  try{
    const response = await fetch(url, options);

    if(!response.ok){
      throw new Error(`${result.statusText} (${result.status})`)
    }
    const data = await response.json();
    const users = data.results;
    console.log(users);

    users.forEach(element => {
      let fullname = `${element.name.first} ${element.name.last}`
      let city = `${element.location.city}`
      let picture = `${element.picture.large}`

      let createDiv = create(`div`);
      createDiv.innerHTML += 
      `<div class="ran-user">
        <div class="ran-picture">
          <img src="${picture}" alt="" class="ran-img">
        </div>
        <div class="ran-info">
          <h4>${fullname} </h4>
          <p>City: ${city}</p>
      </div>`
      contactsContainer.prepend(createDiv);

    });

  } catch(error){
    console.log(error.message)
  }
}

getUser()
