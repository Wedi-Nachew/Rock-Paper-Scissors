// Create a getcomputerSelection() function that returns Rock, Paper or Scissors.
// I actualy had to look up how to select from arrays randomly in Stack Overflow.
let string = ["Rock", "Paper", "Scissors"];
// console.log(getComputerChoie());
function getComputerChoice(){
    return string[Math.floor(Math.random()*string.length)];
}
function playRound(playerSelection,computerSelection) {
    // if playerSelection is Rock and getCmputerChoice is Paper
    if (playerSelection==="Rock" && computerSelection==="Paper") {
        return "You Lose! Paper beats Rock";
    } 
    // if playerSelection is Rock and getCmputerChoice is Scissors
    else if (playerSelection==="Rock" && computerSelection==="Scissors") {
        return "You Won! Rock beats Scissors";
    } 
    // if playerSelection is Paper and getCmputerChoice is Scissors
    else if (playerSelection==="Paper" && computerSelection==="Scissors") {
        return "You Lose! Scissors beat Paper";
    } 
    // if playerSelection is Paper and getCmputerChoice is Rock
    else if (playerSelection==="Paper" && computerSelection==="Rock") {
        return "You Won! Paper beats Rock";
    } 
    // if playerSelection is Scissors and getCmputerChoice is Rock
    else if (playerSelection==="Scissors" && computerSelection==="Rock") {
        return "You Won! Rock beats Scissors";
    } 
    // if playerSelection is Scissors and getCmputerChoice is Paper
    else if (playerSelection === "Scissors" && computerSelection==="Paper") {
        return "You Lose! Scissors beat Paper";
    } else {
        return "Draw! Not Bad!";
    }
}
// modified the playerSelection Variable so that the it can hold the players selection
const playerSelection = +(prompt("Enter your selection: "));
console.log(playerSelection);
const computerSelection = getComputerChoice();
console.log(computerSelection);
console.log(playRound(playerSelection, computerSelection ));
// creating the game function.
function game(){

}

