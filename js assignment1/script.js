// ====================
// Part 1: Basics
// ====================

// Function to ask user for their name and update the page
function askName() {
  let name = prompt("What is your name?");
  
  if (name) {
    // If the user types a name, display it
    document.getElementById("greeting").textContent = "Hello, " + name + "!";
  } else {
    // If no input, show a default message
    document.getElementById("greeting").textContent = "Hello, Stranger!";
  }
}

// ====================
// Part 2: Functions
// ====================

// Reusable function to calculate total price with tax
function calculateTotal(price, taxRate) {
  return price + (price * taxRate);
}

// Function that calls calculateTotal() and updates the page
function showTotal() {
  let total = calculateTotal(100, 0.16); // Example: price = 100, tax = 16%
  document.getElementById("totalOutput").textContent = "Total Price: $" + total.toFixed(2);
}

// ====================
// Part 3: Loops
// ====================

// Example 1: for loop (prints 1–5 into a list on the page)
let numberList = document.getElementById("numberList");
for (let i = 1; i <= 5; i++) {
  let li = document.createElement("li");
  li.textContent = i;
  numberList.appendChild(li);
}

// Example 2: while loop (countdown shown in console)
console.log("Countdown:");
let count = 5;
while (count > 0) {
  console.log(count);
  count--;
}

// ====================
// Part 4: DOM Manipulation
// ====================

// Example 1: Toggle a CSS class
function toggleHighlight() {
  document.getElementById("domText").classList.toggle("highlight");
}

// Example 2: Change text when clicked
document.getElementById("domText").addEventListener("click", function() {
  this.textContent = "You clicked me!";
});

// Example 3: Add a new element dynamically
let newParagraph = document.createElement("p");
newParagraph.textContent = "This paragraph was added with JavaScript!";
document.body.appendChild(newParagraph);
