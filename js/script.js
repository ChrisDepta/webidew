// Burger function for menu and burger animation
const burger = document.querySelector('.burger');
const menu = document.querySelector('.menu');
const nav = document.querySelector('.nav');
const wrap = document.querySelector('.wrap');

const menuAnimation = function(){
    burger.classList.toggle('active');
    wrap.classList.toggle('active');
    nav.classList.toggle('active');
    menu.classList.toggle('active'); 
    sentenceAnimation();
    if(menu.classList.contains('active')){
        nav.style.backgroundColor = 'transparent';
    } else {
        nav.style.backgroundColor = '#f4f5f6';
    }
};
const menuAnimationEnd = function(){
    if(this.classList.contains('active')){
    burger.classList.remove('active');
    wrap.classList.remove('active');
    nav.classList.remove('active');
    menu.classList.remove('active'); 
    sentenceAnimation();
    nav.style.backgroundColor = '#f4f5f6';
    } else return
}
// Baner sentence animation for window ready and for
// event click menu with wrap replace
const sentenceAnimation = function(){
    let words = document.querySelectorAll('.baner__sentence__words div');
    const about = document.querySelector('.baner__sentence__about span');
    about.classList.toggle('active');
    words.forEach(word => {word.classList.toggle('active')});
}
const startSentenceAnimation = ()=> {
    setTimeout(sentenceAnimation, 2000);
}
window.addEventListener('load', startSentenceAnimation);
burger.addEventListener('click', menuAnimation);

// Nav add color on background for scroll event
window.addEventListener('scroll', function (){
    if(menu.classList.contains('active') || this.scrollY === 0) {
        nav.style.backgroundColor = "transparent";
        return
    }
    nav.style.backgroundColor = "#f4f5f6";
});
wrap.addEventListener('click', menuAnimationEnd);