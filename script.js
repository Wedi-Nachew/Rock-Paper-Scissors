// a function that randomy selects from the array lists
let string = ["Rock", "Paper", "Scissors"];
function getComputerChoice(){
    return string[Math.floor(Math.random()*string.length)];
}
// a function that announcess results based on different conditions.
// used the OR logical operator to minimize the use of else ifs
// invoked the .toUpperCase() method to change the case of the words to uppercase before comparsion
function playGround(playerSelection, computerSelection){
    // if the playerselection beats the computerSelection
    if ((playerSelection.toUpperCase() === "Rock".toUpperCase() && computerSelection.toUpperCase() === "Scissors".toUpperCase()) ||
        (playerSelection.toUpperCase() === "Scissors".toUpperCase() && computerSelection.toUpperCase() === "Paper".toUpperCase()) ||
        (playerSelection.toUpperCase() === "Paper".toUpperCase() && computerSelection.toUpperCase() === "Rock".toUpperCase())) {
            return `You Won! ${playerSelection} beats ${computerSelection}`;
    } 
    // if the computerSelection beats the playerSelection
    else if  ((playerSelection.toUpperCase() === "Rock".toUpperCase() && computerSelection.toUpperCase() === "Paper".toUpperCase()) ||
              (playerSelection.toUpperCase() === "Paper".toUpperCase() && computerSelection.toUpperCase() === "Scissors".toUpperCase()) ||  
              (playerSelection.toUpperCase() === "Scissors".toUpperCase() && computerSelection.toUpperCase() === "Rock".toUpperCase())) {
           return `You Lose! ${computerSelection} beats ${playerSelection}`;
    } 
    // if both came up with the same selection
    else if (playerSelection.toUpperCase()===computerSelection.toUpperCase()) {
        return `It's a tie! ${playerSelection} and  ${computerSelection} are the same!` 
    } else {
        return "You entred invalid word!"
    }  
}
// create a function called game()
function game() {
    // declare two variables to record the score of each round
    let playerScore= 0;
    let computerScore = 0;
    // using for loop to let the player to play 5 roundes
    for (let round = 1; round <= 5; round++){
        // invoke the function and the user input also the computer choice here will
        // make the loop to ask the user and the computer in each round 
        let playerSelection = (prompt("Enter your selection: ")).toUpperCase();
        console.log(`You Selected ${playerSelection}`);
        let computerSelection = getComputerChoice().toUpperCase();
        console.log(`The Computer Selects ${computerSelection}`)
        let result = playGround(playerSelection, computerSelection);
        // conditionals on who won the round
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
        } else {
            console.log("You Entred an invalid selction.\n Seriously dude improve your writing scale")
        }     
    }
    // condition on deciding who the Final winner is
    if (playerScore > computerScore) {
        console.log(`Wow! You Won ${playerScore} to ${computerScore}!`);
    } else if (playerScore < computerScore){
        console.log(`Loser! The Computer Beats you ${playerScore} to ${computerScore} Bitch`)
    } else {
        console.log(`Pheew! Neck-to-Neck Tie! ${playerScore} to ${computerScore}`);
    }      

}
console.log(game());
