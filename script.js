let humanCounter = 0;
let computerCounter = 0;

while (humanCounter < 5 && computerCounter < 5) {
  let humanSelection = window.prompt("To five rounds:\nRock, Paper o Scisors?");

  let computerSelection = "";

  function getComputerSelection() {
    randomChoice = Math.floor(Math.random() * 3);

    computerSelection =
      randomChoice === 0 ? "rock" : randomChoice === 1 ? "paper" : "scisors";
  }

  getComputerSelection();

  if (
    humanSelection !== "rock" &&
    humanSelection !== "paper" &&
    humanSelection !== "scisors"
  ) {
    alert("that's not the game");
  } else {
    alert(
      "You chose " + humanSelection + "\nComputer chose " + computerSelection
    );

    if (
      (humanSelection === "rock" && computerSelection === "scisors") ||
      (humanSelection === "scisors" && computerSelection === "paper") ||
      (humanSelection === "paper" && computerSelection === "rock")
    ) {
      alert("You Win");
      humanCounter++;
    } else if (humanSelection === computerSelection) {
      alert("It's a tie");
    } else {
      alert("You Lose");
      computerCounter++;
    }
  }

  alert("You " + humanCounter + "\nCPU " + computerCounter);
}

if (humanCounter === 5) {
  alert("You Win!");
} else {
  alert("You Lose!");
}

// console.log(humanSelection === "rock");
