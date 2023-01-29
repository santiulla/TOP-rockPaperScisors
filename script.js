// counters

let humanCounter = 0;
let computerCounter = 0;

let humanSelection;

function startGame(e) {
  humanSelection = this.value;
  console.log("You chose " + humanSelection);

  // computer selection
  let computerSelection = "";

  randomChoice = Math.floor(Math.random() * 3);

  computerSelection =
    randomChoice === 0 ? "rock" : randomChoice === 1 ? "paper" : "scisors";
  console.log("Computer chose " + computerSelection);

  console.log("");

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
      console.log("You Win");
      humanCounter++;
    } else if (humanSelection === computerSelection) {
      console.log("It's a tie");
    } else {
      console.log("You Lose");
      computerCounter++;
    }
  }
  console.log("");
  console.log("You " + humanCounter);
  console.log("CPU " + computerCounter);
}

// Link buttons
const buttons = document.querySelectorAll("button");
buttons.forEach((btn) => btn.addEventListener("click", startGame));
