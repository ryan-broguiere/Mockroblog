/*
Initialize all components from HTML
*/
import * as mockroblog from './mockroblog.js'

const btn = document.querySelector(".mobile-menu-button")
const menu = document.querySelector(".mobile-menu")
const myPost = document.querySelector(".postContainer")




/*
Making API call
*/
const homePost1 = mockroblog.getHomeTimeline('ProfAvery')
const homePost2 = mockroblog.getHomeTimeline('KevinAWortman')
const homePost3 = mockroblog.getHomeTimeline('Beth_CSUF')





//Event Listeners 

btn.addEventListener('click', () => {
    console.log("Hello");
    menu.classList.toggle("hidden")
})

homePost1.forEach(obj => {
    myPost.innerHTML += `
    <span
    <span class="font-bold text-indigo-600 text-sm tracking-wide"> 
    ${obj.timestamp}</span>
    <p class="pt-1">
        ${obj.text}
    </p>
    <br>
    `
})
