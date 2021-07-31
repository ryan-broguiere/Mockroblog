import * as mockroblog from './mockroblog.js'

/*
Initialize all components from HTML
*/
const btn = document.querySelector(".mobile-menu-button")
const menu = document.querySelector(".mobile-menu")
const signUpbtn = document.querySelector('.tempbtn')


//Event Listeners 
btn.addEventListener('click', () => {
    menu.classList.toggle("hidden")
})

if(localStorage.getItem('loggedin') === 'true'){
    signUpbtn.textContent = 'Log Out'
    
    
}



