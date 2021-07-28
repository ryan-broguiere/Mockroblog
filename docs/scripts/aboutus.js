
/*
Initialize all components from HTML
*/
const btn = document.querySelector(".mobile-menu-button")
const menu = document.querySelector(".mobile-menu")
//Event Listeners 

btn.addEventListener('click', () => {
    console.log("Hello");
    menu.classList.toggle("hidden")
})