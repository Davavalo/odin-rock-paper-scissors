let humanScore = 0;
let computerScore = 0;

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

const getHumanChoice = () => {
  const userInput = prompt("Rock, paper or scissors?");

  if (!userInput) {
    return null;
  }

  const cleanInput = userInput.trim().toLowerCase();

  switch (cleanInput) {
    case "rock":
      return "rock";
    case "paper":
      return "paper";
    case "scissors":
      return "scissors";
    default:
      return null;
  }
};

const playRound = () => {
  const computerChoice = getComputerChoice();
  const humanChoice = getHumanChoice();

  if (humanChoice === null) {
    console.log("Invalid input or prompt cancelled.");
    return;
  }

  console.log("Computer chose: " + computerChoice);
  console.log("Human chose: " + humanChoice);

  if (
    (computerChoice === "rock" && humanChoice === "scissors") ||
    (computerChoice === "paper" && humanChoice === "rock") ||
    (computerChoice === "scissors" && humanChoice === "paper")
  ) {
    console.log("Computer Wins!");
    computerScore += 1;
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    console.log("You Win!");
    humanScore += 1;
  } else {
    console.log("It's a tie.");
  }

  console.log(
    "Current score",
    "You: " + humanScore,
    "Computer: " + computerScore,
  );
};

const playGame = () => {
  for (let i = 0; i < 5; i++) {
    playRound();
  }
  if (humanScore > computerScore) {
    console.log("You win the game!");
  } else if (computerScore > humanScore) {
    console.log("You lost the game!");
  } else {
    console.log("It's a tie.");
  }
};
