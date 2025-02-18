const ROCK = 0;
const PAPER = 1;
const SCISSORS = 2;
const INITIAL_POINTS = 0;
const LOSE_MESSAGE = "You lost this round!";
const WIN_MESSAGE = "You won this round!";
const NUM_ROUNDS = 5;


function getComputerChoice() {
    let num = Math.floor(Math.random()*3);
    let choice = "rock";
    switch (num) {
        case ROCK: break;
        case PAPER: choice = "paper"; break;
        case SCISSORS: choice = "scissors";
    }
    return choice;
}

let humanScore = INITIAL_POINTS;
let computerScore = INITIAL_POINTS;

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        addInformationMessage("Tie! Try again");
    }
    else {
        if (humanChoice === "rock") {
            if (computerChoice == "scissors") {
                addInformationMessage(WIN_MESSAGE + " Rock beats Scissors");
                humanScore++;
            }
            else { // computerChoice === "paper"
                addInformationMessage(LOSE_MESSAGE + " Paper beats Rock");
                computerScore++;
            }
        }
        else if (humanChoice === "paper") {
            if (computerChoice == "rock") {
                addInformationMessage(WIN_MESSAGE + " Paper beats Rock");
                humanScore++;
            }
            else { // computerChoice === "scissors"
                addInformationMessage(LOSE_MESSAGE + " Scissors beats Paper");
                computerScore++;
            }
        }
        else { // humanChoice === "scissors"
            if (computerChoice == "paper") {
                addInformationMessage(WIN_MESSAGE + " Scissors beats Paper");
                humanScore++;
            }
            else { // computerChoice === "rock"
                addInformationMessage(LOSE_MESSAGE + " Rock beats Scissors");
                computerScore++;
            }
        }
    } 
}

const buttons = document.querySelectorAll("button");
const score = document.querySelector("div p");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        if (humanScore < 5 && computerScore < 5) {
            playRound(button.id, getComputerChoice());
            score.textContent = `Player ${humanScore} - ${computerScore} Computer`;
            if (humanScore === 5 || computerScore === 5)
                endGame();
        }
    });
});

function endGame() {
    const winner = document.createElement("div");
    winner.style.marginTop = "50px";
    winner.style.fontSize = "25px";
    winner.textContent = (humanScore > computerScore) ? "You won!" : "You lost!";
    const body = document.querySelector("body");
    body.appendChild(winner);
}


function addInformationMessage(message) {
    const div = document.createElement("div");
    div.textContent = message;
    const body = document.querySelector("body");
    body.appendChild(div);
}