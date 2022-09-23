let computerSelection = 0;
let playerSelection = 0;
let i=0; let j=0;
const buttons = document.querySelectorAll('.btn');

const player = document.querySelector('#player-score');
const computer = document.querySelector('#computer-score');
const output = document.querySelector('#output');

player.textContent = `Player Score: ${i}`;
computer.textContent = `Computer Score: ${j}`;
output.textContent = `How Dare You Challenge Me!`;

buttons.forEach(button => {button.addEventListener('click',()=>{
    let playerChoiceID = button.id;
    if (playerChoiceID === "rock") playerSelection = 0;
    if (playerChoiceID === "paper") playerSelection = 1;
    if (playerChoiceID === "scissors") playerSelection = 2;
    computerSelection = getComputerChoice();
    console.log(playerSelection);
    console.log(computerSelection);
    game();
})
});

function getComputerChoice(){
    let randomNum = Math.floor(Math.random() * 3);
    return randomNum;
}

function playRound(playerSelection, computerSelection) {
    //array is results from different combinations. 0=draw, 1=lose, 2=win.
    let outcomes = [[0, 1, 2],
                    [2, 0, 1],
                    [1, 2, 0]];
    let result = outcomes[playerSelection][computerSelection];
    console.log(result);
    if (result == 0) {
        output.textContent = `Nice Try! We Drew!`
        }
    if (result == 1) {
        output.textContent = `You Lose! Loser!`
        j++;
    }
    if (result == 2) {
        output.textContent = `You Won! But You Won't Again!`
        i++;
    }
}

function game(){
    playRound(playerSelection, computerSelection);
    player.textContent = `Player Score: ${i}`;
    computer.textContent = `Computer Score: ${j}`;
    if (i==5){
        output.textContent = `OH NO! YOU WON!!! YOU MUST HAVE CHEATED!`;
    }
    if (j==5){
        output.textContent = `HAHAHAHA YOU LOST! YOU STINK!`
    }
}

