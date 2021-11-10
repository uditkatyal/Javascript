const gameContainer = document.getElementById("container");
const computerChoiceDisplay = document.createElement("h1");
const userChoiceDisplay = document.createElement("h1");
const resultDisplay = document.createElement("h1");
const liveScore = document.createElement("h1");

userChoiceDisplay.innerText = "User's Choice : ";
computerChoiceDisplay.innerText = "Computer's Choice : ";
resultDisplay.innerText = "Result : ";
liveScore.innerText = "Score : ";

gameContainer.append(
  computerChoiceDisplay,
  userChoiceDisplay,
  resultDisplay,
  liveScore
);

let userChoice;
let computerChoice;
let count = 0;

const arr = ["rock", "paper", "scissors"];

for (let i = 0; i < 3; i++) {
  const button = document.createElement("button");
  button.innerText = arr[i];
  gameContainer.append(button);

  button.addEventListener("click", () => {
    if (button.innerText === "rock") {
      userChoiceDisplay.innerText = `User's Choice : ${arr[0]}`;
      userChoice = arr[0];
    }
    if (button.innerText === "paper") {
      userChoiceDisplay.innerText = `User's Choice : ${arr[1]}`;
      userChoice = arr[1];
    }
    if (button.innerText === "scissors") {
      userChoiceDisplay.innerText = `User's Choice : ${arr[2]}`;
      userChoice = arr[2];
    }

    // random computer generated
    const value = Math.floor(Math.random() * 3);
    setTimeout(() => {
      computerChoiceDisplay.innerText = `Computer's Choice : ${arr[value]}`;
    }, 2000);
    computerChoice = arr[value];

    setTimeout(() => {
      switch (userChoice + computerChoice) {
        case "rockrock":
        case "paperpaper":
        case "scissorsscissors":
          resultDisplay.innerText = `Result : Draw!`;
          liveScore.innerText = `Score : ${count}`;
          break;

        case "rockpaper":
        case "paperscissors":
        case "scissorsrock":
          resultDisplay.innerText = `Result : user lost!`;
          liveScore.innerText = `Score : ${count}`;
          break;

        case "paperrock":
        case "scissorspaper":
        case "rockscissors":
          count++;
          resultDisplay.innerText = `Result : user WON!`;
          liveScore.innerText = `Score : ${count}`;
          break;
      }
    }, 2000);
  });
}
