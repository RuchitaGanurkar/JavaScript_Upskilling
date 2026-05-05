
// Cart Manipulation

const cart = ["bread", "milk", "eggs"];

// Add items
cart.push("butter");     // add at end
cart.unshift("rice");    // add at beginning
console.log("Cart after push & unshift:", cart);

// Remove last item
const removedItem = cart.pop();
console.log("Removed item (pop):", removedItem);
console.log("Cart after pop:", cart);

// Remove item at index 1
const removedSplice = cart.splice(1, 1);
console.log("Removed using splice:", removedSplice);
console.log("Cart after splice:", cart);


// Filter Passing Scores
const scores = [88, 42, 75, 60, 91, 39, 55, 70];

// Passing scores (>= 60)
const passing = scores.filter(score => score >= 60);
console.log("Passing scores:", passing);

// First failing score (< 60)
const firstFail = scores.find(score => score < 60);
console.log("First failing score:", firstFail);

// Check if ALL are passing
const allPassing = scores.every(score => score >= 60);
console.log("Are all passing?", allPassing);

// Bonus: ANY score above 90
const anyAbove90 = scores.some(score => score > 90);
console.log("Any score above 90?", anyAbove90);


// Map Prices with GST
const prices = [100, 250, 500, 1200, 80];

// Add 18% GST
const pricesWithGST = prices.map(price => price * 1.18);

// Rounded to 2 decimal places
const roundedPrices = prices.map(price => (price * 1.18).toFixed(2));

console.log("Original prices:", prices);
console.log("Prices with GST:", pricesWithGST);
console.log("Rounded prices (2 decimals):", roundedPrices);


// Greetings using map
const names = ["Priya", "Aarav", "Riya"];
const greetings = names.map(name => `Hello, ${name}`);
console.log("Greetings:", greetings);

// Even numbers + sum
const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
const evenSum = numbers
  .filter(num => num % 2 === 0)
  .reduce((sum, num) => sum + num, 0);
console.log("Sum of even numbers:", evenSum);

// Find max using Math.max and reduce
const arr = [3, 1, 4, 1, 5, 9, 2, 6];

const maxUsingMath = Math.max(...arr);
console.log("Max using Math.max:", maxUsingMath);

const maxUsingReduce = arr.reduce((max, val) => val > max ? val : max, arr[0]);
console.log("Max using reduce:", maxUsingReduce);

// Function to find average
function getAverage(array) {
  const sum = array.reduce((total, val) => total + val, 0);
  return sum / array.length;
}

console.log("Average of arr:", getAverage(arr));