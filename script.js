let playerScore = 0;
let computerScore = 0;
const buttons = Array.from(document.getElementsByTagName("button"));
const results = document.querySelector('.results');
const scoreboard = document.querySelector('.score');

function capitalize(string) {
    return string[0].toUpperCase() + string.slice(1);
}

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
    else if (playerSelection.toLowerCase() === 'reset') {
        results.innerHTML = "Select a weapon to start the game!"
        playerScore = 0;
        computerScore = 0;
    }
    else {
        computerScore++;
        results.innerHTML = "You Lose! " + computerSelection + " beats " + playerSelection + "!"
    }

    if (playerScore >= 5) {
        results.innerHTML = "You Win! Press \"Reset\" to play again."
        scoreboard.innerHTML = "Final Score: Player Score: " + playerScore + " Computer Score: " + computerScore;
        playerScore = 0;
        computerScore = 0;
    }
    else if (computerScore >= 5) {
        results.innerHTML = "You Lose! Press \"Reset\" to play again."
        scoreboard.innerHTML = "Final Score: Player Score: " + playerScore + " Computer Score: " + computerScore;
        playerScore = 0;
        computerScore = 0;
    }
    else {
        scoreboard.innerHTML = "Player Score: " + playerScore + " Computer Score: " + computerScore;
    }
}

function game() {
    
    buttons.forEach(button => {
        button.addEventListener('click', function () { playRound(capitalize(button.className), getComputerChoice())});
    })

}

game()