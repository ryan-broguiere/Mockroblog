import * as mockroblog from './mockroblog.js'

/*
Initialize all components from HTML
*/
const btn = document.querySelector(".mobile-menu-button")
const menu = document.querySelector(".mobile-menu")
const textPost = document.querySelector("#text-post")
const textDisplayPost = document.querySelector(".text-display-post")
const btnPost = document.querySelector(".btn-post")

let tempUser

//Event Listeners 
btn.addEventListener('click', () => {
    menu.classList.toggle("hidden")
})

btnPost.addEventListener('click', () => {
    tempUser = mockroblog.postMessage(4, textPost.value)
    textDisplayPost.textContent = tempUser.text
})

