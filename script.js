
const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissor = document.getElementById('scissor');
const userResult = document.querySelector('.userResult');
const compResult = document.querySelector('.compResult');
const restartButton = document.querySelector('.restart');

let userScore = 0;
let compScore = 0;


function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissor'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}


function getWinner(userChoice, compChoice) {
    if (userChoice === compChoice) {
        return 'draw';
    } else if (
        (userChoice === 'rock' && compChoice === 'scissor') ||
        (userChoice === 'paper' && compChoice === 'rock') ||
        (userChoice === 'scissor' && compChoice === 'paper')
        
    ) {
        return 'user';
    } else {
        return 'comp';
    }
}

function updateScore() {
    userResult.textContent = userScore;
    compResult.textContent = compScore;
}

function playGame(userChoice) {
    const compChoice = getComputerChoice();
    const winner = getWinner(userChoice, compChoice);

    if (winner === 'user') {
        userScore++;
    } else if (winner === 'comp') {
        compScore++;
    }

    updateScore();
}




function restartGame() {
    userScore = 0;
    compScore = 0;
    updateScore();
}


rock.addEventListener('click', () => playGame('rock'));
paper.addEventListener('click', () => playGame('paper'));
scissor.addEventListener('click', () => playGame('scissor'));


restartButton.addEventListener('click', restartGame);
