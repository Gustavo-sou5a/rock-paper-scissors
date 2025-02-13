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

function getHumanChoice() {
    let choice = prompt("Rock, Paper or Scissors: ").toLowerCase();
    while (choice !== "rock" && choice !== "paper" && choice !== "scissors") {
        choice = prompt("Not a valid option! Rock, Paper or Scissors: ").toLowerCase();
    }
    return choice;
}

function playGame() {
    let humanScore = INITIAL_POINTS;
    let computerScore = INITIAL_POINTS;

    function playRound(humanChoice, computerChoice) {
        if (humanChoice === computerChoice) {
            alert("Tie! Try again");
            playRound(getHumanChoice(), getComputerChoice());
        }
        else {
            if (humanChoice === "rock") {
                if (computerChoice == "scissors") {
                    alert(WIN_MESSAGE + " Rock beats Scissors");
                    humanScore++;
                }
                else { // computerChoice === "paper"
                    alert(LOSE_MESSAGE + " Paper beats Rock");
                    computerScore++;
                }
            }
            else if (humanChoice === "paper") {
                if (computerChoice == "rock") {
                    alert(WIN_MESSAGE + " Paper beats Rock");
                    humanScore++;
                }
                else { // computerChoice === "scissors"
                    alert(LOSE_MESSAGE + " Scissors beats Paper");
                    computerScore++;
                }
            }
            else { // humanChoice === "scissors"
                if (computerChoice == "paper") {
                    alert(WIN_MESSAGE + " Scissors beats Paper");
                    humanScore++;
                }
                else { // computerChoice === "rock"
                    alert(LOSE_MESSAGE + " Rock beats Scissors");
                    computerScore++;
                }
            }
        } 
    }
    for (let i = 0; i < NUM_ROUNDS; i++) {
        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }
    (humanScore > computerScore) ? alert("You won the game!") : alert("You lost the game!");
}

playGame();