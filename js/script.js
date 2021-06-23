// Burger function for menu and burger animation
const burger = document.querySelector('.burger');
const menuAnimation = function(){
    this.classList.toggle('active');
    document.querySelector('.wrap').classList.toggle('active');
    document.querySelector('.nav').classList.toggle('active');
    document.querySelector('.menu').classList.toggle('active'); 
    sentenceAnimation();
};
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
    document.querySelector('.nav').style.backgroundColor = "#f4f5f6";
    if(this.scrollY === 0) {
    document.querySelector('.nav').style.backgroundColor = "transparent";
    }
    console.log(this.scrollY);
});