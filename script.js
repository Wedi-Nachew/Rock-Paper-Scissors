// a function that randomy selects from the array lists
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
        console.log(game())
    }  
      else if(whichOne == "paper") {
        playerSelection =  "paper";
        let result = playGround(playerSelection, computerSelection); 
        console.log(game())
      
    } else if (whichOne == "scissors") {
        playerSelection =   "scissors"; 
        let result =  playGround(playerSelection, computerSelection);
        console.log(game())
      
    }
}
console.log(getUserSelection())
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
            console.log(`You Won! ${playerSelection} beats ${computerSelection}`);
            playerScore++;
            console.log(`You: ${playerScore}, Computer: ${computerScore}`);
        } else if(result === `You Lose! ${computerSelection} beats ${playerSelection}`) {
            console.log(`You Lose! ${computerSelection} beats ${playerSelection}`);
            computerScore++;  
            console.log(`You: ${playerScore}, Computer: ${computerScore}`);
        } else if(playerSelection.toUpperCase()===computerSelection.toUpperCase()){
            console.log("It's a tie"); 
            console.log(`You: ${playerScore}, Computer: ${computerScore}`);  
        }

        if (playerScore == 5 ) {
            console.log(`Wow! You Won ${playerScore} to ${computerScore}!`);
            computerScore = 0;
            playerScore = 0;
        } else if ( computerScore == 5){
            console.log(`Loser! The Computer Beats you ${playerScore} to ${computerScore}`)
            computerScore = 0;
            playerScore = 0;
        }     
    } 