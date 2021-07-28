import * as mockroblog from './mockroblog.js'
// window.mockroblog = mockroblog

// const timeline = mockroblog.getPublicTimeline()

// const display = document.querySelector('#timeline-json')
// display.textContent = JSON.stringify(timeline, null, 2)


/*
Initialize all components from HTML
*/
const btnLogIn = document.querySelector(".btn-login")

const inputUsername = document.querySelector(".input-username")
const inputPassword = document.querySelector(".input-password")


//Event Listeners 
btnLogIn.addEventListener('click', (e) =>{
    e.preventDefault()
    console.log(`Username: ${inputUsername.value} Password: ${inputPassword.value}`);
})

/*
Initialize all components from HTML
*/
const btn = document.querySelector(".mobile-menu-button")
const menu = document.querySelector(".mobile-menu")
//Event Listeners 

btn.addEventListener('click', () => {
    console.log("Hello");
    menu.classList.toggle("hidden")
})