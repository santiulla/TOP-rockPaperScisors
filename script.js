// counters

let humanCounter = 0;
let computerCounter = 0;

// loop

let humanSelection;

function startGame(e) {
  humanSelection = this.value;

  // computer selection
  let computerSelection = "";

  randomChoice = Math.floor(Math.random() * 3);

  computerSelection =
    randomChoice === 0 ? "rock" : randomChoice === 1 ? "paper" : "scisors";

  //

  console.log("");

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

  // results

  console.log("You chose " + humanSelection);

  console.log("Computer chose " + computerSelection);
  console.log("");
  console.log("You " + humanCounter);
  console.log("CPU " + computerCounter);

  if (humanCounter === 5) {
    console.log("You Win!");
  } else {
    console.log("You Lose!");
  }
}

// Link buttons
const buttons = document.querySelectorAll("button");
buttons.forEach((btn) => btn.addEventListener("click", startGame));
