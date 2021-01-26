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

let one = document.querySelector('.one');
let h_one = document.querySelector('.h1_one');

h_one.addEventListener('click', function(){
    one.style.display = 'block';
    two.style.display = 'none';
    three.style.display = 'none';
})


let two = document.querySelector('.two');
let h_two = document.querySelector('.h1_two');

h_two.addEventListener('click', function(){
    two.style.display = 'block';
    one.style.display = 'none';
    three.style.display = 'none';
})


let three = document.querySelector('.three');
let h_three = document.querySelector('.h1_three');

h_three.addEventListener('click', function(){
    three.style.display = 'block';
    two.style.display = 'none';
    one.style.display = 'none';
})