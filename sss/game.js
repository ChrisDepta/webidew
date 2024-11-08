const images = [...document.querySelectorAll('img')];
const btnLos = document.querySelector('.start');

let humanImg = ""; 
let aiImg = "";
const gameSummary = {
numbersOfPlay: 0,
wins: 0,
losses: 0,
draws: 0,
}

let yourChoice = document.querySelector('.your-choice');
let computerChoice = document.querySelector('.ai-choice');
let whoWin = document.querySelector('.who-win');

const aiChoice = () => {
    aiImg = images[Math.floor(Math.random()*3)].dataset.option;
    
}

const humanChoice = function () {
    computerChoice.textContent = "";
    whoWin.textContent = "- - - - - - - - - -";
    images.forEach(img => img.classList.remove('active'));
    humanImg = this;
    humanImg.classList.add('active');
    yourChoice.textContent = `${humanImg.dataset.option}`;
    humanImg = this.dataset.option;
     console.log(humanImg);
}
const compareResult = function () {
    if (humanImg){
        aiChoice();
        gameSummary.numbersOfPlay++;
        document.querySelector('.numbers span').textContent = gameSummary.numbersOfPlay;
    computerChoice.textContent = `${aiImg}`;
    if (aiImg === humanImg){
            // console.log("remis");
            gameSummary.draws++;
            document.querySelector('.draws span').textContent = gameSummary.draws;
            whoWin.textContent = `Remis`;
            whoWin.style.color = "grey";
        } else if (humanImg === "stein" && aiImg === "papier" || humanImg === "papier" && aiImg === "schere" || humanImg === "schere" && aiImg === "stein") {
            // console.log("verloren")
            gameSummary.losses++;
            document.querySelector('.losses span').textContent = gameSummary.losses;
            whoWin.textContent = `Komputer`;
            whoWin.style.color = "red";
        } else  {
            // console.log('gewonnen');
            gameSummary.wins++;
            document.querySelector('.wins span').textContent = gameSummary.wins;
            whoWin.textContent = `Du hast gewonnen`;
            whoWin.style.color = "green";
        }
    } else {
        alert('BITTE ZUERST EINE GESTE WÄHLEN!')
    }
    document.querySelectorAll('img').forEach(img => img.classList.remove('active'));
    humanImg = "";
}

btnLos.addEventListener('click', compareResult);
images.forEach(img => {
    img.addEventListener('click', humanChoice);
})