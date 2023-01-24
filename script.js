let humanCounter = 0;
let computerCounter = 0;

while (humanCounter < 5 && computerCounter < 5) {
  let humanSelection = window.prompt("To five rounds:\nRock, Paper o Scisors?");
  console.clear();
  console.log("You chose " + humanSelection);

  let computerSelection = "";

  function getComputerSelection() {
    randomChoice = Math.floor(Math.random() * 3);

    computerSelection =
      randomChoice === 0 ? "rock" : randomChoice === 1 ? "paper" : "scisors";
    console.log("Computer chose " + computerSelection);
  }

  getComputerSelection();
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

if (humanCounter === 5) {
  alert("You Win!");
} else {
  alert("You Lose!");
}

// console.log(humanSelection === "rock");
