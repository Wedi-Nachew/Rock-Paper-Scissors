const scoreBoard = document.querySelector("#score-board")
const score = document.querySelector("#score")
const roundResult = document.querySelector("#round-result")
const finalResult = document.querySelector("#final-result")

score.classList.add('score')
roundResult.classList.add('round-result')


let options = ["Rock", "Paper", "Scissors"];
let playerScore = 0;
let computerScore = 0;
let computerSelection = "";
function getComputerChoice(){
    return options[Math.floor(Math.random()*options.length)];
}

function getUserSelection(whichOne) {
    computerSelection = getComputerChoice();
    if(whichOne == "rock") {
        playerSelection = "rock";
        let result = playGround(playerSelection, computerSelection); 
        game()
    }  
      else if(whichOne == "paper") {
        playerSelection =  "paper";
        let result = playGround(playerSelection, computerSelection); 
       game()
      
    } else if (whichOne == "scissors") {
        playerSelection =   "scissors"; 
        let result =  playGround(playerSelection, computerSelection);
       game()
      
    }
}
function playGround(playerSelection, computerSelection){
    if ((playerSelection.toUpperCase() === "Rock".toUpperCase() && computerSelection.toUpperCase() === "Scissors".toUpperCase()) ||
        (playerSelection.toUpperCase() === "Scissors".toUpperCase() && computerSelection.toUpperCase() === "Paper".toUpperCase()) ||
        (playerSelection.toUpperCase() === "Paper".toUpperCase() && computerSelection.toUpperCase() === "Rock".toUpperCase())) {
            return `You Won! ${playerSelection} beats ${computerSelection}`;
    } else if  ((playerSelection.toUpperCase() === "Rock".toUpperCase() && computerSelection.toUpperCase() === "Paper".toUpperCase()) ||
              (playerSelection.toUpperCase() === "Paper".toUpperCase() && computerSelection.toUpperCase() === "Scissors".toUpperCase()) ||  
              (playerSelection.toUpperCase() === "Scissors".toUpperCase() && computerSelection.toUpperCase() === "Rock".toUpperCase())) {
           return `You Lose! ${computerSelection} beats ${playerSelection}`;
    } else{
        return `It's a tie!` 
    }  
}

function game() {
    let result = playGround(playerSelection, computerSelection);
        if (result === `You Won! ${playerSelection} beats ${computerSelection}`) {
            roundResult.textContent = `You Won! ${playerSelection} beats ${computerSelection}`;
            playerScore++;
            score.textContent = `You: ${playerScore}   Computer: ${computerScore}`;
        } else if(result === `You Lose! ${computerSelection} beats ${playerSelection}`) {
            roundResult.textContent = `You Lose! ${computerSelection} beats ${playerSelection}`;
            computerScore++;  
            score.textContent = `You: ${playerScore}   Computer: ${computerScore}`;
        } else if(playerSelection.toUpperCase()===computerSelection.toUpperCase()){
            roundResult.textContent = ("It's a tie"); 
            score.textContent =`You: ${playerScore}   Computer: ${computerScore}`;  
        }

        if (playerScore == 5 ) {
            alert(finalResult.textContent = `Wow! You Won ${playerScore} to ${computerScore}!`)
            computerScore = 0;
            playerScore = 0;
            roundResult.textContent = "Play Again!" 
            roundResult.style.fontSize = "30px";
            finalResult.textContent = ""
            score.textContent = ""
        } else if ( computerScore == 5){
            alert(finalResult.textContent = `Loser! The Computer Beats you ${playerScore} to ${computerScore}`)
            computerScore = 0;
            playerScore = 0;
            roundResult.textContent= "Play Again"
            roundResult.style.fontSize = "30px";
            score.textContent = ""
            finalResult.textContent = ""
        }     
    } 


    scoreBoard.appendChild(roundResult)
    scoreBoard.appendChild(score)
    scoreBoard.appendChild(finalResult)