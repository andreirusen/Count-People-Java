// Welcome message
let welcomeEl = document.getElementById("welcome-el");
let userName = "Andrei";
let greeting = "Welcome ";
welcomeEl.textContent = greeting + userName + "!";
welcomeEl.textContent += "😁";


// Document Object Modifie - DOM
let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");
let count = 0;

// Count function
function increment() {
  count += 1;
  countEl.innerText = count;
}
// Save function
function save() {
  let countStr = count + " - ";
  saveEl.textContent += countStr;
  countEl.textContent = 0
  count = 0
}
