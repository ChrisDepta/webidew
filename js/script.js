// Burger function for menu and burger animation
document.querySelector('.burger').addEventListener('click', function(){
    this.classList.toggle('active');
    document.querySelector('.wrap').classList.toggle('active');
    document.querySelector('.nav').classList.toggle('active');
    document.querySelector('.menu').classList.toggle('active');
}) 
// MENU Links mouseOver and mouseleave function with underline from left to right out
const links = document.querySelectorAll('.menu__list a');
console.log(links);

links.forEach(link => link.addEventListener('mouseover', function(){
    let span = this.lastChild;
    console.log(span)
    span.classList.add('active'); 
}));
links.forEach(link => link.addEventListener('mouseleave', function(){
    let span = this.lastChild;
    span.classList.remove('active');
    span.classList.add('removeActive');
    setTimeout( ()=> span.classList.remove('removeActive'), 1000);
    }))