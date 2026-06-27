const rockBtn = document.getElementById("rock-btn");
const paperBtn = document.getElementById("paper-btn");
const scissorBtn = document.getElementById("scissor-btn");

const playerScore = document.getElementById("player-score");
const computerScore = document.getElementById("computer-score");
const playerChoice = document.getElementById("player-choice");
const computerChoice = document.getElementById("computer-choice");
const roundWinner = document.getElementById("round-winner");

let currentPlayerScore = 0;
let currentComputerScore = 0;

const playRound = (playerDecision, computerDecision) => {
  if (playerDecision === null) {
    alert("Invalid input or prompt cancelled.");
    return;
  }

  if (currentPlayerScore === 5) {
    alert("The game is over. You won!");
    resetGame();
    return;
  } else if (currentComputerScore === 5) {
    alert("The game is over. You lost!");
    resetGame();
    return;
  }

  computerChoice.textContent = "Computer chose: " + computerDecision;
  playerChoice.textContent = "Player chose: " + playerDecision;

  if (
    (playerDecision === "rock" && computerDecision === "scissors") ||
    (playerDecision === "paper" && computerDecision === "rock") ||
    (playerDecision === "scissors" && computerDecision === "paper")
  ) {
    roundWinner.textContent = "You win!";
    currentPlayerScore += 1;
  } else if (playerDecision === computerDecision) {
    roundWinner.textContent = "It's a tie.";
  } else {
    roundWinner.textContent = "You lost!";
    currentComputerScore += 1;
  }

  playerScore.textContent = "Player Score: " + currentPlayerScore;
  computerScore.textContent = "Computer Score: " + currentComputerScore;
};

const getComputerChoice = () => {
  const choice = Math.floor(Math.random() * 3) + 1;

  switch (choice) {
    case 1:
      return "rock";
    case 2:
      return "paper";
    case 3:
      return "scissors";
  }
};

rockBtn.addEventListener("click", () => {
  playRound("rock", getComputerChoice());
});

paperBtn.addEventListener("click", () => {
  playRound("paper", getComputerChoice());
});

scissorBtn.addEventListener("click", () => {
  playRound("scissor", getComputerChoice());
});

const resetGame = () => {
  const gameOverChoice = confirm("Do you want to play again?");

  if (gameOverChoice) {
    currentPlayerScore = 0;
    currentComputerScore = 0;
    computerChoice.textContent = "Computer choice: ?";
    playerChoice.textContent = "Player choice: ?";
    roundWinner.textContent = "Make a choice.";
    playerScore.textContent = "Player Score: " + currentPlayerScore;
    computerScore.textContent = "Computer Score: " + currentComputerScore;
  } else {
    return;
  }
};
