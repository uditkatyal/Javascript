let maximum = parseInt(prompt("Enter the maximum number"));

while (!maximum) {
  maximum = parseInt(prompt("Enter the valid number!"));
}
const randomNumber = Math.floor(Math.random() * maximum) + 1;
console.log(randomNumber);
let number = prompt("Enter the number");

let attempt = 1;

while (parseInt(number) !== randomNumber) {
  if (number === "q") {
    break;
  }
  attempt++;
  if (number > randomNumber) {
    number = prompt("Two high! enter a new number");
  } else if (number < randomNumber) {
    number = prompt("Too low enter a number");
  }
}
if (number === "q") {
  console.log("Quitting!");
}
if (number === randomNumber) {
  console.log(`Congrats You guessed the number after ${attempt} attempts!`);
}
