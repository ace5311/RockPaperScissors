
let playerSelection = "rock"

function getComputerChoice(){
    var x = Math.floor(Math.random() * 3);
    if (x == 0) {
        return "rock";
    }
    else if (x == 1) {
        return "scissors";
    }
    else if (x == 2) {
        return "paper";
    }
}


function playRound(playerSelection, computerSelection) {
    
    if (playerSelection == computerSelection){
        return "Draw";
    }
    else if ((playerSelection == "scissors" && computerSelection == "rock") || (playerSelection == "rock" && computerSelection == "paper") || (playerSelection == "paper" && computerSelection == "scissors")){
        return "Lost";
    }
    else if ((playerSelection == "scissors" && computerSelection == "paper") || (playerSelection == "rock" && computerSelection == "scissors") || (playerSelection == "paper" && computerSelection == "rock")){
        return "Won";
    }
}

function game(){
    let i=0;let j=0;
    while (i<5 || j<5){
        playerSelection=prompt("What's your choice? Rock, Paper, or Scissors?").toLowerCase();
        let computerSelection = getComputerChoice();
        let roundResult = playRound(playerSelection, computerSelection);
        if (roundResult == "Draw"){
            console.log("Draw! Try again!")
        }
        else if (roundResult == "Won"){
            i++;
            console.log("Won this round");
        }
        else if (roundResult== "Lost"){
            j++;
            console.log("Lost this round");
        }
    }
    if (i=5){
        console.log("You Won!");
    }
    else if (j=5){
        console.log("You Lost! Loser!");
    }
}

game();