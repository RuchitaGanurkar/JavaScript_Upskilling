// Template Literal Sentence Builder

const item = "Laptop";
const price = 60000;
const tax = 0.18;

// Single line
console.log(`The ${item} costs ₹${price} + ₹${price * tax} GST = ₹${price + (price * tax)}.`);

// Multiline
console.log(`The ${item} costs:
Base Price: ₹${price}
GST (18%): ₹${price * tax}
Total: ₹${price + (price * tax)}`);


//  Array + Object Destructuring

const scores = [88, 75, 92, 60, 45];

// Array destructuring
const [topScore, second, ...others] = scores;
console.log("Top:", topScore);
console.log("Second:", second);
console.log("Others:", others);

// Object destructuring
const user = {
  name: "Anaya",
  age: 21,
  address: {
    city: "Jaipur",
    pincode: "302001"
  }
};

const { name, age: userAge, address: { city } } = user;

console.log("Name:", name);
console.log("User Age:", userAge);
console.log("City:", city);

// Rest Parameters

// Sum all numbers
function sumAll(...numbers) {
  return numbers.reduce((sum, num) => sum + num, 0);
}

console.log("sumAll(1,2,3):", sumAll(1, 2, 3));
console.log("sumAll(10,20,30,40):", sumAll(10, 20, 30, 40));
console.log("sumAll():", sumAll());

// Join names
function joinNames(separator, ...names) {
  return names.join(separator);
}

console.log("Joined Names:", joinNames(", ", "Priya", "Aarav", "Riya"));

// Template literal with object
const person = { first: "Priya", last: "Sharma", city: "Jaipur" };
console.log(`${person.first} ${person.last} from ${person.city}`);

// Array destructuring 
const arr = [1, 2, 3, 4, 5, 6];
const [head, ...tail] = arr;
console.log("Head:", head);
console.log("Tail:", tail);

// Multiply using rest + reduce
function multiply(...nums) {
  return nums.reduce((product, num) => product * num, 1);
}

console.log("Multiply:", multiply(2, 3, 4)); // 24

// Update object 
const original = { a: 1, b: 2 };
const updated = { ...original, b: 20 };

console.log("Original:", original);
console.log("Updated:", updated);