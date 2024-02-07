function getComputerChoice() {
  const randomChoice = Math.floor(Math.random() * 3);
  const values = ["rock", "paper", "scissors"];

  return values[randomChoice];
}

function jankenponRound(playerSelection, computerSelection) {
  const playerSelectionLowerCase = playerSelection.toLowerCase();
  const computerSelectionLowerCase = computerSelection.toLowerCase();
  if (playerSelectionLowerCase === computerSelectionLowerCase) {
    return console.log("tie!!");
  } else if (
    playerSelectionLowerCase === "rock" &&
    computerSelectionLowerCase == "paper"
  ) {
    return console.log("computer wins");
  } else if (
    playerSelectionLowerCase === "paper" &&
    computerSelectionLowerCase == "rock"
  ) {
    return console.log("player wins");
} else if (
  playerSelectionLowerCase === "rock" &&
  computerSelectionLowerCase == "scissors"
) {
  return console.log("player wins");
} else if (
  playerSelectionLowerCase === "scissors" &&
  computerSelectionLowerCase == "rock"
) {
  return console.log("computer wins");
} else if (
  playerSelectionLowerCase === "scissors" &&
  computerSelectionLowerCase == "paper"
) {
  return console.log("player wins");
} else if (
  playerSelectionLowerCase === "paper" &&
  computerSelectionLowerCase == "scissors"
) {
  return console.log("computer wins");
}}

const playerSelection = 'ROCK'
const computerSelection= getComputerChoice();

console.log(jankenponRound(playerSelection,computerSelection));
