// Assignment 3 Javascript file - Jacob Domingo //

/* 
    Toggle Dark Mode
    Author: W3schools.com   
    URL: https://www.w3schools.com/howto/howto_js_toggle_dark_mode.asp
    Date Accessed: March 10, 2021

*/

let darkModeBtn = document.getElementById("btn-dark-light-mode");
darkModeBtn.addEventListener("click", changeMode);

function changeMode() {
    let body = document.body;
    body.classList.toggle("dark-mode");
}