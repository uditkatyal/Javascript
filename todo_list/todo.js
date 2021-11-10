let enter = prompt("What would you like to do?");

let arr = [];

while (enter !== "quit") {
  if (enter === "new") {
    let value = prompt("Enter a new todo");
    arr.push(value);
    console.log(`${value} added to list`);
  } else if (enter === "list") {
    for (let i = 0; i < arr.length; i++) {
      console.log(`${i} : ${arr[i]}`);
    }
  } else if (enter === "delete") {
    let index = parseInt(prompt("Enter the index to delete"));
    while (!index) {
      index = prompt("Enter the correct index to delete");
    }
    arr.splice(index, 1);
  }
  enter = prompt("What would you like to do?");
}
console.log("Quit app!");
