import * as mockroblog from './mockroblog.js'

/*
Initialize all components from HTML
*/
const btn = document.querySelector(".mobile-menu-button")
const menu = document.querySelector(".mobile-menu")
const textPost = document.querySelector(".post")
const textDate = document.querySelector(".date")
//Event Listeners 

btn.addEventListener('click', () => {
    console.log("Hello");
    menu.classList.toggle("hidden")
})

/*
Access the mockroblog.js functions and store them into variables for easier access
*/
const timeline = mockroblog.getPublicTimeline() // function retruns array of objects

// Example of accessing properties from objects 
console.log(timeline[0].id, timeline[0].user_id, timeline[0].text, timeline[0].timestamp);

// For Each example
timeline.forEach(obj => {
    console.log(obj.id);
})

// Example of displaying contents on HTML page
timeline.forEach(obj => {
    console.log(obj.id, obj.user_id, obj.text, obj.timestamp);
    textDate.textContent = obj.timestamp
    textPost.textContent = obj.text
})
