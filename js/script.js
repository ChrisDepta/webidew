// Burger function for menu and burger animation
const burger = document.querySelector('.burger');
const menuAnimation = function(){
    this.classList.toggle('active');
    document.querySelector('.wrap').classList.toggle('active');
    document.querySelector('.nav').classList.toggle('active');
    document.querySelector('.menu').classList.toggle('active'); 
    sentenceAnimation();
};

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