(function () {
    const header = document.querySelector('.header');
    window.onscroll = () =>{
        if (window.pageYOffset > 50){
            header.classList.add( 'header_active')
        }
        else {
            header.classList.remove( 'header_active')
        }
    }
}());


const burger = document.querySelector('.burger');
const menu = document.querySelector('.header__nav');
const close = document.querySelector('.header__nav-close')

burger.addEventListener('click',evt => {
    menu.classList.add('header__nav__active');
});

close.addEventListener('click', evt => {
    menu.classList.remove('header__nav__active');
})
