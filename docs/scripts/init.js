import * as mockroblog from './mockroblog.js'
// window.mockroblog = mockroblog

/*
Initialize all components from HTML
*/
// class = "btn-login"   document.querySelector(".")
// id = "btn-login"   document.querySelector("#")
const btnLogIn = document.querySelector(".btn-login") //DOM
const btnSignUp = document.querySelector(".btn-signup")
const inputUsername = document.querySelector(".input-username")
const inputPassword = document.querySelector(".input-password")
const btn = document.querySelector(".mobile-menu-button")
const menu = document.querySelector(".mobile-menu")

let testUser



//Event Listeners 
btnLogIn.addEventListener('click', (e) =>{
         
    testUser = mockroblog.authenticateUser((inputUsername.value),(inputPassword.value));
    
    
    if (testUser != null)
    {
        alert(`Login Successful \n\nWelcome ${testUser.username}`); 
        location.href = "user.html";
                
    }
    else if (inputUsername.value == '' || inputUsername.value == null)
    {   
        e.preventDefault();
        alert('Login Failed \n\nUsername cannot be empty');       
    }
    else if (inputUsername.value != 'ProfAvery' || inputUsername.value != 'KevinAWortman' || inputUsername.value != 'Beth_CSUF')
    {
        e.preventDefault();
        alert('Login Failed \n\nUsername not recognized');
    }
    else if (inputUsername.value == 'ProfAvery' || inputUsername.value == 'KevinAWortman' || inputUsername.value == 'Beth_CSUF')
    {
        e.preventDefault();
        alert('Login Failed \n\nIncorrect Password');
    }

  
})

btn.addEventListener('click', () => {
    console.log("Hello");
    menu.classList.toggle("hidden")
})

btnSignUp.addEventListener('click', (e) => {
    e.preventDefault()
    console.log("SIGN UP");
    
})

