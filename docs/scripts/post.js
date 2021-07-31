import * as mockroblog from './mockroblog.js'

/*
Initialize all components from HTML
*/
const btn = document.querySelector(".mobile-menu-button")
const menu = document.querySelector(".mobile-menu")
const textPost = document.querySelector("#text-post")
const textDisplayPost = document.querySelector(".text-display-post")
const btnPost = document.querySelector(".btn-post")
const signUpbtn = document.querySelector('.tempbtn')
const logoutNav = document.querySelector(".logout-nav")

let tempUser


if(localStorage.getItem('loggedin') === 'true')
{
    signUpbtn.textContent = 'Log Out'
    signUpbtn.style.backgroundColor = "red"
    logoutNav.classList.toggle("hidden")
    
}
else
{
    alert("Please log in first.")
    location.href = "index.html"
}

//Event Listeners 

btnPost.addEventListener('click', () => {
    tempUser = mockroblog.postMessage(4, textPost.value)
    textDisplayPost.textContent = tempUser.text
})
signUpbtn.addEventListener('click', () => {
    localStorage.clear()
    alert("Successfully logged out.")
    location.href = "index.html"
})

btn.addEventListener('click', () => {
    console.log("mobile");
    menu.classList.toggle("hidden")
})

logoutNav.addEventListener('click', () => {
    localStorage.clear()
    alert("Successfully logged out.")
    location.href = "index.html"
})

/*
Extracting object from local storage and parsing it JSON
*/
const account = JSON.parse(localStorage.getItem('profile'))
console.log(account.username);

