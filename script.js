// a function that randomy selects from the array lists
let string = ["Rock", "Paper", "Scissors"];
function getComputerChoice(){
    return string[Math.floor(Math.random()*string.length)];
}
// a function that announcess results based on different conditions.
// used the OR logical operator to minimize the use of else ifs
// used the .toLowerCase string method to make the data input case insensitive in the conditionals
// if the computerSelection beats the playerSelection
// if the playerSelection beats the computerSelection
// if it's a tie. means both selects the same ite
function playGround(playerSelection, computerSelection){
    if ((playerSelection === "Rock" && computerSelection === "Scissors") ||
        (playerSelection === "Scissors" && computerSelection === "Paper") ||
        (playerSelection === "Paper" && computerSelection === "Rock")) {
            return `You Won! ${playerSelection} beats ${computerSelection}`;
    } 
    else if  ((playerSelection === "Rock" && computerSelection === "Paper") ||
              (playerSelection === "Paper" && computerSelection === "Scissors") ||  
              (playerSelection === "Scissors" && computerSelection === "Rock")) {
           return `You Lose! ${computerSelection} beats ${playerSelection}`;
    } else if (playerSelection===computerSelection) {
        return `It's a tie! ${playerSelection} and  ${computerSelection} are the same!` 
    } else {
        return "You entred invalid word!"
    }  
}
function game() {
    let playerScore= 0;
    let computerScore = 0;
    for (let round = 1; round <= 5; round++){
        let computerSelection = getComputerChoice();
        console.log(`The Computer Selects ${computerSelection}`)
        let playerSelection = (prompt("Enter your selection: "));
        console.log(`You Selected ${playerSelection}`);
        let result = playGround(playerSelection, computerSelection);
        if (result === `You Won! ${playerSelection} beats ${computerSelection}`) {
            console.log(`You Won! ${playerSelection} beats ${computerSelection}`);
            playerScore++;
            console.log(playerScore, computerScore);
        } else if(result === `You Lose! ${computerSelection} beats ${playerSelection}`) {
            console.log(`You Lose! ${computerSelection} beats ${playerSelection}`);
            computerScore++;  
            console.log(playerScore, computerScore);
        } else {
            console.log("It's a tie"); 
            console.log(playerScore, computerScore);  
        }      
    }
    if (playerScore > computerScore) {
        console.log(`Wow! You Won ${playerScore} to ${computerScore}!`);
    } else if (playerScore < computerScore){
        console.log(`Loser! The Computer Beats you ${playerScore} to ${computerScore} Bitch`)
    } else {
        console.log(`Pheew! Neck-to-Neck Tie! ${playerScore} to ${computerScore}`);
    }      

}
console.log(game());
