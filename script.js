// a function that randomy selects from the array lists
let string = ["Rock", "Paper", "Scissors"];
function getComputerChoice(){
    return string[Math.floor(Math.random()*string.length)];
}
// a function that announcess results based on different conditions.
// used the OR logical operator to minimize the use of else ifs
// used the .toLowerCase string method to make the data input case insensitive in the conditionals
function playRound(playerSelection,computerSelection) {
    // if the computerSelection beats the playerSelection
    if ((playerSelection.toLowerCase === "Rock".toLowerCase && computerSelection === "Paper") || 
    (playerSelection.toLowerCase === "Paper".toLowerCase && computerSelection === "Scissors") || 
    (playerSelection.toLowerCase === "Scissors".toLowerCase && computerSelection === "Rock")) {
        return `You Lose! ${computerSelection} beats ${playerSelection}`;
    // if the playerSelection beats the computerSelection
    } else if ((playerSelection.toLowerCase === "Scissors".toLowerCase && computerSelection === "Paper") || 
    (playerSelection.toLowerCase === "Rock".toLowerCase && computerSelection === "Scissors") ||
    (playerSelection.toLowerCase ==="Paper".toLowerCase && computerSelection === "Rock")) {
        return `You Won! ${playerSelection} beat ${computerSelection}`;
    } 
    // if it's a tie. means both selects the same item
        return "It's a tie"     
}
// assign the randomly selected string from the array list to the computerSelection parameter
const computerSelection = getComputerChoice();
console.log(computerSelection);
// ask the user to input his/her choice and assign the inputed data to the playerSelection parameter
// used the .toLowerCase(); to change the playerSelection uniformally lower cases in case the input has mixed case
const playerSelection = (prompt("Enter your selection: ")).toLowerCase();
console.log(playerSelection);
// assigns the result of the game to the result variable
const result = playRound(playerSelection, computerSelection);
console.log(result);
