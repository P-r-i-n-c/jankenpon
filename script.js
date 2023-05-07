function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * 3);
  return choices[randomIndex];
}

function getPlayerChoice() {
  let playerMove = prompt(
    "Enter your move: Rock, Paper, or Scissors"
  ).toLowerCase();

  while (
    playerMove !== "rock" &&
    playerMove !== "paper" &&
    playerMove !== "scissors"
  ) {
    playerMove = prompt(
      "Invalid move! Please enter Rock, Paper, or Scissors"
    ).toLowerCase();
  }

  return playerMove;
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "Its a tie!";
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    return "You win this round!";
  } else {
    return "The computer wins this round!";
  }
//   playRound() no puede acceder directamente a playerSelection y 
//   computerSelection definidos dentro de la función game().
//   Sin embargo, cuando playRound() es llamado dentro de game(), 
//   se le pasan dos argumentos: playerSelection y computerSelection. 
//   Estos argumentos son valores que se obtienen al llamar a las funciones
//   getPlayerChoice() y getComputerChoice() dentro de game().
//   Esos valores son pasados como argumentos a playRound() en 
//   cada iteración del bucle while dentro de game(). Por lo tanto, 
//   aunque playRound() no puede acceder directamente a las variables 
//   definidas en game(), puede usar los valores que se le pasan como argumentos.
}

function game() {
  let round = 0;

  while (round < 5) {
    const playerSelection = getPlayerChoice();
    const computerSelection = getComputerChoice();
    const result = playRound(playerSelection, computerSelection);

    console.log(result);
    round++;
  }
}

game();
