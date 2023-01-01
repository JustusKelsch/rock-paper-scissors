let playerScore = 0;
let computerScore = 0;
const buttons = Array.from(document.getElementsByTagName("button"));
const results = document.querySelector('.results');
const scoreboard = document.querySelector('.score');

function getComputerChoice() {
    const choice = ["Rock", "Paper", "Scissors"];
    return choice[Math.floor(Math.random() * 3)]
}

function playRound(playerSelection, computerSelection) {
    
    
    
    if (playerSelection.toLowerCase() === computerSelection.toLowerCase()) {
        results.innerHTML = "It is a tie!"
    }
    else if (playerSelection.toLowerCase() === "rock" && computerSelection.toLowerCase() === "scissors" ||
             playerSelection.toLowerCase() === "scissors" && computerSelection.toLowerCase() === "paper" ||
             playerSelection.toLowerCase() === "paper" && computerSelection.toLowerCase() === "rock") {
                playerScore++;
                results.innerHTML = "You Win! " + playerSelection + " beats " + computerSelection + "!"
    }
    else {
        computerScore++;
        results.innerHTML = "You Lose! " + computerSelection + " beats " + playerSelection + "!"
    }

    if (playerScore >= 5) {
        results.innerHTML = "You Win!"
        scoreboard.innerHTML = "Final Score: Player Score: " + playerScore + " Computer Score: " + computerScore;
    }
    else if (computerScore >= 5) {
        results.innerHTML = "You Lose!"
        scoreboard.innerHTML = "Final Score: Player Score: " + playerScore + " Computer Score: " + computerScore;
    }
    else {
        scoreboard.innerHTML = "Player Score: " + playerScore + " Computer Score: " + computerScore;
    }
}

function game() {
    
    buttons.forEach(button => {
        button.addEventListener('click', function () { playRound(button.innerHTML, getComputerChoice())});
    })


}

game()