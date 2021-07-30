/*
Initialize all components from HTML
*/
import * as mockroblog from './mockroblog.js'

const btn = document.querySelector(".mobile-menu-button")
const menu = document.querySelector(".mobile-menu")
const myPost = document.querySelector(".postContainer")
const myPost2 = document.querySelector(".postContainer2")
const myPost3 = document.querySelector(".postContainer3")
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
homePost2.forEach(obj => {
    myPost2.innerHTML += `
    <span
    <span class="font-bold text-indigo-600 text-sm tracking-wide"> 
    ${obj.timestamp}</span>
    <p class="pt-1">
        ${obj.text}
    </p>
    <br>
    `
})
homePost3.forEach(obj => {
    myPost3.innerHTML += `
    <span
    <span class="font-bold text-indigo-600 text-sm tracking-wide"> 
    ${obj.timestamp}</span>
    <p class="pt-1">
        ${obj.text}
    </p>
    <br>
    `
})
