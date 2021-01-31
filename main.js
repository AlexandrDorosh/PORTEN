let headerBurger = document.querySelector('.header__burger');
let menu = document.querySelector('.menu');
let headerLink = document.querySelectorAll('.header__link');
let body = document.querySelector('body');



headerBurger.addEventListener('click', function(event){
    menu.classList.toggle('active');
    headerBurger.classList.toggle('active');
    body.classList.toggle('lock')
})

for(let i = 0; i < headerLink.length; i++){
    headerLink[i].addEventListener('click', function(event){
        menu.classList.toggle('active');
        headerBurger.classList.toggle('active');
    })
}