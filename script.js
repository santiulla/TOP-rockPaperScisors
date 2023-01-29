// counters

let humanCounter = 0;
let cpuCounter = 0;
let result = "";

function startGame(e) {
  if (cpuCounter === 5 || humanCounter === 5) {
    cpuCounter = 0;
    humanCounter = 0;
  }

  let humanSelection = this.value;

  // computer selection
  let computerSelection = "";

  randomChoice = Math.floor(Math.random() * 3);

  computerSelection =
    randomChoice === 0 ? "rock" : randomChoice === 1 ? "paper" : "scisors";

  if (
    humanSelection !== "rock" &&
    humanSelection !== "paper" &&
    humanSelection !== "scisors"
  ) {
    alert("that's not the game");
  } else {
    if (
      (humanSelection === "rock" && computerSelection === "scisors") ||
      (humanSelection === "scisors" && computerSelection === "paper") ||
      (humanSelection === "paper" && computerSelection === "rock")
    ) {
      result = "You Win";
      humanCounter++;
    } else if (humanSelection === computerSelection) {
      result = "It's a tie";
    } else {
      result = "You Lose";
      cpuCounter++;
    }

    if (cpuCounter === 5 || humanCounter === 5) {
      const endGame = document.getElementById("endGame");
      endGame.innerText = result;
    }
  }

  const showHumanChoise = document.getElementById("yourChoise");
  showHumanChoise.innerText = "You chose " + humanSelection;

  const showCpuChoise = document.getElementById("cpuChoise");
  showCpuChoise.innerText = "Computer chose " + computerSelection;

  const showWinner = document.getElementById("showWinner");
  showWinner.innerText = result;

  const showHumanCounter = document.getElementById("humanCounter");
  showHumanCounter.innerText = humanCounter;

  const showCpuCounter = document.getElementById("cpuCounter");
  showCpuCounter.innerText = cpuCounter;
}

const container = document.querySelector("#container");

// Link buttons
const buttons = document.querySelectorAll("button");
buttons.forEach((btn) => btn.addEventListener("click", startGame));
