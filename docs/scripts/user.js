import * as mockroblog from './mockroblog.js'
/*
Initialize all components from HTML
*/
const btn = document.querySelector(".mobile-menu-button")
const menu = document.querySelector(".mobile-menu")
const myPost = document.querySelector(".postContainer")
const displayUser = document.querySelector(".displayUsername")
const signUpbtn = document.querySelector('.tempbtn')


// if(localStorage.getItem('loggedin') === 'true'){
//     signUpbtn.textContent = 'Sign Out'
// }

/*
Extracting object from local storage and parsing it JSON
*/
const account = JSON.parse(localStorage.getItem('profile'))

if(localStorage.getItem('loggedin') === 'true'){
    signUpbtn.textContent = 'Sign Out'
}

/*
Api variables
*/
const userPost = mockroblog.getUserTimeline(account.username)

console.log(`${account.username}`)
displayUser.textContent = "hello"

//Event Listeners 
btn.addEventListener('click', () => {
    console.log("Hello");
    menu.classList.toggle("hidden")
})


userPost.forEach(obj => {
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