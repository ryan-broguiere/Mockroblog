import * as mockroblog from './mockroblog.js'

/*
Initialize all components from HTML
*/
const btn = document.querySelector(".mobile-menu-button")
const menu = document.querySelector(".mobile-menu")
const textPost = document.querySelector(".my-posts")

const publicPost = mockroblog.getPublicTimeline()
//Event Listeners 
btn.addEventListener('click', () => {
    menu.classList.toggle("hidden")
})

publicPost.forEach(obj => {
    textPost.innerHTML += `
    <h1>
    Time: ${obj.timestamp}
    </h1>
    <p>${obj.text}</p>
    <br>
    `
})
const c = 2
console.log(`feojfpwejgpwjgpewojgpowe ${c}`);

