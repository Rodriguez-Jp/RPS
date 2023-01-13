const btns = document.querySelectorAll(".btn");
const choices = ["Rock", "Paper", "Scissors"];
let resultText = document.querySelector(".win-lose");
let computerSelection = document.querySelector(".computer-selection");
let computerChoice = "";
let result = "";

const play = (playerSelection) => {
  let rnd = Math.round(Math.random() * (choices.length - 1));
  computerChoice = "";
  computerChoice = choices[rnd];

  if (playerSelection == "Rock") {
    if (computerChoice == "Paper") {
      result = "You Lose!";
    } else if (computerChoice == "Scissors") {
      result = "You win!";
    } else if (computerChoice == playerSelection) {
      result = "It's a draw!";
    }
  } else if (playerSelection == "Paper") {
    if (computerChoice == "Rock") {
      result = "You Win!";
    } else if (computerChoice == "Scissors") {
      result = "You Lose!";
    } else if (computerChoice == playerSelection) {
      result = "It's a draw!";
    }
  } else if (playerSelection == "Scissors") {
    if (computerChoice == "Paper") {
      result = "You Win!";
    } else if (computerChoice == "Rock") {
      result = "You Lose!";
    } else if (computerChoice == playerSelection) {
      result = "It's a draw!";
    }
  }

  return result;
};

btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    play(btn.value);
    computerSelection.innerText = computerChoice;
    resultText.innerText = result;
  });
});
