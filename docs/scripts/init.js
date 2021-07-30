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
const loginContainer = document.querySelector(".login-container")
const signupContainer = document.querySelector(".signup-container")
const signupNav = document.querySelector(".signup-nav")
const btnCreate = document.querySelector(".btn-create")
const createUserEmail = document.querySelector(".create-email")
const createUserAcc = document.querySelector(".create-username")
const createUserPassword = document.querySelector(".create-password")
const emailErrorElement = document.getElementById('eerror')
const userErrorElement = document.getElementById('uerror')
const passwordErrorElement = document.getElementById('perror')
const textLogin = document.querySelector('.text-login')

let testUser
let createUser
let uerrorMessage
let eerrorMessage
let perrorMessage

//Event Listeners 
btnLogIn.addEventListener('click', (e) =>{
         
    testUser = mockroblog.authenticateUser((inputUsername.value),(inputPassword.value));
    
    
    if (testUser != null)
    {
        e.preventDefault()
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
    menu.classList.add("hidden")
})

btnSignUp.addEventListener('click', () => {
    loginContainer.classList.toggle("hidden")
    signupContainer.classList.toggle("hidden")
    signupNav.textContent = "Login"  
})

signupNav.addEventListener('click', () => {
    logInSignupHelper()
       
})

textLogin.addEventListener('click', () =>{
    logInSignupHelper()
})

btnCreate.addEventListener('click', (e) => {
    emailErrorElement.textContent =""
    userErrorElement.textContent =""
    passwordErrorElement.textContent =""
    createUser = mockroblog.createUser(createUserAcc.value, createUserEmail.value, createUserPassword.value);
   
    if (createUserEmail.value.length < 6)
    {
        eerrorMessage = 'Please enter a valid email address.'
    }
    if (createUserAcc.value.length < 4 || createUserAcc.value.length > 20)
    {
        uerrorMessage = 'Username must be between 4 - 20 characters.'
    }
    if (createUserPassword.value == ''|| createUserPassword.value == null)
    {
        //alert(`Password cannot be empty`)
    }
    // alert(`"${createUser.email}" made an account\n\nUsername: ${createUser.username} \n\nPassword: ${createUser.password}`)
    if (eerrorMessage.length > 0 )
    {
        e.preventDefault()
        emailErrorElement.innerText = eerrorMessage
        // userErrorElement.innerText = uerrorMessage
        // passwordErrorElement.innerText = perrorMessage
        eerror.classList.toggle("hidden")
        // uerror.classList.toggle("hidden")
        // perror.classList.toggle("hidden")
        
    
    }

    // if (uerrorMessage.length > 0)
    // {
    //     e.preventDefault()
    //     userErrorElement.innerText = uerrorMessage
    //     uerror.classList.toggle("hidden")
    // }

    // if (perrorMessage.length > 0)
    // {
    //     e.preventDefault()
    //     passwordErrorElement.innerText = perrorMessage
    //     perror.classList.toggle("hidden")
    // }
})


// Helper functions
function logInSignupHelper(){
    loginContainer.classList.toggle("hidden")
    signupContainer.classList.toggle("hidden")

    if (loginContainer.classList.contains("hidden"))
    {
        signupNav.textContent = "Login"
    }
    else
    {
        signupNav.textContent = "Sign Up"
    } 
}