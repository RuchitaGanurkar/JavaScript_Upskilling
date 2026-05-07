// Click Counter

const counterBtn = document.getElementById("counter-btn");
const countSpan = document.getElementById("count");

let counter = 0;

counterBtn.addEventListener("click", function () {

  counter++;

  countSpan.textContent = counter;

  
  if (counter >= 10) {
    counterBtn.textContent = "Stop!";
  }
  

});


// Live Input 

const liveInput = document.getElementById("live-input");
const preview = document.getElementById("preview");

liveInput.addEventListener("input", function () {

  const currentValue = liveInput.value;

  if (currentValue === "") {
    preview.textContent = "Typing...";
  } else {
    preview.textContent = currentValue;
  }

});

// Form 

const regForm = document.getElementById("reg-form");
const nameField = document.getElementById("name-field");
const welcome = document.getElementById("welcome");

regForm.addEventListener("submit", function (event) {

  // Prevent 
  event.preventDefault();

  const name = nameField.value.trim();

  if (name === "") {
    welcome.textContent = "Please enter your name";
  } else {
    welcome.textContent = `Welcome, ${name}!`;
  }

});


const colorBtn = document.getElementById("color-btn");

colorBtn.addEventListener("click", function () {

  // Generate random RGB values
  const red = Math.floor(Math.random() * 256);

  const green = Math.floor(Math.random() * 256);

  const blue = Math.floor(Math.random() * 256);

  // Apply random color
  document.body.style.backgroundColor =
    `rgb(${red}, ${green}, ${blue})`;

});



const validateInput =
  document.getElementById("validate-input");

validateInput.addEventListener("input", function () {

  const value = validateInput.value.trim();

  // Remove old classes
  validateInput.classList.remove("valid");
  validateInput.classList.remove("invalid");

  // Check length
  if (value.length <= 3) {

    validateInput.classList.add("invalid");

  } else {

    validateInput.classList.add("valid");

  }

});



const sumForm = document.getElementById("sum-form");

const num1 = document.getElementById("num1");

const num2 = document.getElementById("num2");

const sumResult =
  document.getElementById("sum-result");

sumForm.addEventListener("submit", function (event) {

  // Prevent 
  event.preventDefault();

  // Convert string to number
  const firstNumber = Number(num1.value);

  const secondNumber = Number(num2.value);

  // Calculate sum
  const total = firstNumber + secondNumber;

  // Show result
  sumResult.textContent =
    `Sum = ${total}`;

});

const delegationList =
  document.getElementById("delegation-list");


delegationList.addEventListener("click", function (event) {

  if (event.target.tagName === "LI") {

    console.log(event.target.textContent);

  }

});
