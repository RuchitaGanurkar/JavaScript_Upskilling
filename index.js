// Task 1: Multiplication Table
console.log("Multiplication Table of 7:");

for (let i = 1; i <= 10; i++) {
    console.log(`7 x ${i} = ${7 * i}`);
}

// Only EVEN multiples of 7
console.log("\nEven Multiples of 7:");
for (let i = 1; i <= 10; i++) {
    if (i % 2 !== 0) continue;
    console.log(`7 x ${i} = ${7 * i}`);
}

// Task 2: Sum with while loop
let sum = 0;
let i = 1;

while (i <= 100) {
    sum += i;
    i++;
}

console.log("\nSum from 1 to 100:", sum);

// Sum of odd numbers
let oddSum = 0;
let j = 1;

while (j <= 100) {
    if (j % 2 !== 0) {
        oddSum += j;
    }
    j++;
}

console.log("Sum of odd numbers from 1 to 100:", oddSum);


// Task 3: for...of 
const names = ["Priya", "Aarav", "Riya", "Kabir", "Anaya"];

console.log("\nNames:");
for (const name of names) {
    console.log(name);
}

let count = 0;
for (const name of names) {
    if (name.length > 4) {
        count++;
    }
}

console.log("Names longer than 4 characters:", count);

console.log("\nCharacters in 'Jaipur':");
for (const char of "Jaipur") {
    console.log(char);
}

// for...in)

const student = {
    name: "Anaya",
    age: 21,
    city: "Pune",
    course: "MCA"
};

console.log("\nStudent Object:");
let propCount = 0;

for (const key in student) {
    console.log(`${key}: ${student[key]}`);
    propCount++;
}

console.log("Total properties:", propCount);