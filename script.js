// Create a getComputerChoice() function that returns Rock, Paper or Scissors.
// Write a function that passes the three strings as a possible values.
let string = ["Rock", "Paper", "Scissors"];
function getComputerChoice(){
    return string[Math.floor(Math.random()*string.length)];
}
console.log(getComputerChoice());
// Write a function that plays a single round of Rock Paper Scissors. The function should take two parameters