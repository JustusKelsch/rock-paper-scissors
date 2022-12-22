let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const choice = ["Rock", "Paper", "Scissors"];
    return choice[Math.floor(Math.random() * 3)]
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() === computerSelection.toLowerCase()) {
        return "It is a tie!"
    }
    else if (playerSelection.toLowerCase() === "rock" && computerSelection.toLowerCase() === "scissors" ||
             playerSelection.toLowerCase() === "scissors" && computerSelection.toLowerCase() === "paper" ||
             playerSelection.toLowerCase() === "paper" && computerSelection.toLowerCase() === "rock") {
                playerScore++;
                return "You Win! " + playerSelection + " beats " + computerSelection + "!"
    }
    else {
        computerScore++;
        return "You Lose! " + computerSelection + " beats " + playerSelection + "!"
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt("Type Rock, Paper or Scissors: ");
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection))
    }

    if (playerScore === computerScore) {
        console.log("It is a tie! Your Score: " + playerScore + " Computer's score: " + computerScore + ".")
    }
    else if (playerScore > computerScore) {
        console.log("You win! Your Score: " + playerScore + " Computer's score: " + computerScore + ".")
    }
    else {
        console.log("You lose! Your Score: " + playerScore + " Computer's score: " + computerScore + ".")
    }
}

game()