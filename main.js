let themeSwitch = document.querySelector('.themeSwitch');
let body = document.querySelector('body');

themeSwitch.addEventListener('click', () => {
    themeSwitch.classList.toggle('active');
    body.classList.toggle('dark');
})

let menuToggle = document.querySelector('.toggle');
let nav = document.querySelector('.nav');

menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    nav.classList.toggle('active');
})