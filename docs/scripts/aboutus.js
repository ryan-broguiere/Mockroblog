import * as mockroblog from './mockroblog.js'

/*
Initialize all components from HTML
*/
const btn = document.querySelector(".mobile-menu-button")
const menu = document.querySelector(".mobile-menu")
//Event Listeners 
btn.addEventListener('click', () => {
    menu.classList.toggle("hidden")
})


