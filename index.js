
//  Predict the var hoist


console.log(nameInput); // undefined

var nameInput = "Priya";

console.log(nameInput); // Priya


// Trigger the TDZ

let city = "Jaipur";

console.log(city);


// Function declaration vs expression

sayHi();

function sayHi() {
  console.log("Hi");
}

var greet = function () {
  console.log("Hello");
};


// Trace the Call Stack

function multiply(a, b) {
  console.trace("Trace inside multiply");
  return a * b;
}

function square(n) {
  return multiply(n, n);
}

function printSquare(n) {
  console.log(square(n));
}

printSquare(5);

// typeof with var before declaration

console.log(typeof age);

var age = 25;

console.log(age);

// let access before declaration

// Three versions of same function

helloDecl();

function helloDecl() {
  console.log("Function Declaration");
}

var helloExpr = function () {
  console.log("Function Expression");
};

const helloArrow = () => {
  console.log("Arrow Function");
};


function first() {
  second();
}

function second() {
  third();
}

function third() {
  console.trace("Execution Stack");
}

first();
