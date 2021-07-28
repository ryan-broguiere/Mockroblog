import * as mockroblog from './mockroblog.js'
window.mockroblog = mockroblog

const timeline = mockroblog.getPublicTimeline()

// const display = document.querySelector('#timeline-json')
// display.textContent = JSON.stringify(timeline, null, 2)


/*
Initialize all components from HTML
*/

const btn = document.querySelector(".mobile-menu-button")
const body = document.querySelector(".main-screen")
const menu = document.querySelector(".mobile-menu")

//Event Listeners 

btn.addEventListener('click', () =>{
    menu.classList.toggle("hidden")
})

body.addEventListener('click', () => {
    console.log("Clicked");
    menu.classList.add("hidden")
})

