import * as mockroblog from './mockroblog.js'
// window.mockroblog = mockroblog

/*
Initialize all components from HTML
*/
// class = "btn-login"   document.querySelector(".")
// id = "btn-login"   document.querySelector("#")
const btnLogIn = document.querySelector(".btn-login") //DOM
const inputUsername = document.querySelector(".input-username")
const inputPassword = document.querySelector(".input-password")
const btn = document.querySelector(".mobile-menu-button")
const menu = document.querySelector(".mobile-menu")


//Event Listeners 
btnLogIn.addEventListener('click', (e) =>{
    e.preventDefault()
    console.log("Hey YOURE CLICKING THIS BUTTON");
    console.log(`Username: ${inputUsername.value} Password: ${inputPassword.value}`);
})

btn.addEventListener('click', () => {
    console.log("Hello");
    menu.classList.toggle("hidden")
})