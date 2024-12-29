let userInputRock = document.getElementById("rock");
let userInputPaper = document.getElementById("paper");
let userInputScissors = document.getElementById("scissors");
let scoreComp = 0;
let scoreHuman = 0;

const buttons =  document.querySelectorAll("button");
const result = document.getElementById("result");
const scoreBoard = document.getElementById("scoreBoard");

const scoreDisplay = document.createElement("p");
    scoreDisplay.setAttribute("id", "scoreDisplay");
    scoreDisplay.textContent = scoreComp + "  Computer / Player  " + scoreHuman;
    scoreBoard.appendChild(scoreDisplay);

const printOutput = document.createElement("p");
    printOutput.setAttribute("id", "resultPara");
    printOutput.textContent = "Make a Choice to play! :-)";
    result.appendChild(printOutput);



function printResult(input) {
    printOutput.textContent = input;
}


function getComputerChoice(){
    let comp = Math.floor(Math.random()*3);

    if (comp === 0){
        return ("rock");
    }
    else if (comp === 1){
        return ("paper");
    }
    else {
        return ("scissors");
    }
}

function playRound(userInput){
   let computerChoice = getComputerChoice();

   if (computerChoice === userInput) {
        printResult("Round is draw!");
   }
   else if (computerChoice === "rock" && userInput === "paper"){
        printResult("You Won, Paper beats Rock!");
        scoreHuman++;
   }
   else if (computerChoice === "rock" && userInput === "scissors"){
        printResult("You loose, Rock beats Scissors!");
        scoreComp++;
   } 
   else if (computerChoice === "paper" && userInput === "rock"){
        printResult("You loose, Paper beats Rock!");
        scoreComp++;
   }
   else if (computerChoice === "paper" && userInput === "scissors"){
        printResult("You Won, Scissors beats Paper!");
        scoreHuman++;
   }
   else if (computerChoice === "scissors" && userInput === "rock"){
        printResult("You Won, Rock beats Scissors!");
        scoreHuman++;
   }
   else if (computerChoice === "scissors" && userInput === "paper"){
        printResult("You loose, Scissors beats Paper!");
        scoreComp++;
   }
   scoreDisplay.textContent = scoreComp + "  Computer / Player  " + scoreHuman;

   if (scoreComp === 5){
        alert("Game Over! The Computer reached 5 Points! Refresh Page to play again!");
   }
   if (scoreHuman === 5){
        alert("You Won! You reached 5 Points before the Computer! Refresh Page to play again!")
   }
   
}

buttons.forEach ((button) => {
    button.addEventListener("click", () => {
        playRound(button.id);
    });
});