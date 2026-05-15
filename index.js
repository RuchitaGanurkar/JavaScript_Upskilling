class User {
  constructor(name, city) { // runs when you call `new User(...)`
    this.name = name; // instance properties — own to each user
    this.city = city;
  }
  greet() { // method — lives on User.prototype (shared)
    console.log(`Hi, I'm ${this.name} from ${this.city}`);
  }
}
const a = new User("Priya", "Jaipur");
const b = new User("Aarav", "Mumbai");
a.greet(); // "Hi, I'm Priya from Jaipur"
b.greet(); // "Hi, I'm Aarav from Mumbai"
// Proof that classes ARE functions under the hood:
console.log(typeof User); // "function"
console.log(a.greet === b.greet); // true — shared via prototype
console.log(Object.getPrototypeOf(a) === User.prototype); // true (Day 4!)


class Product {
  constructor(name, priceInPaise) {
    this.name = name;
    this._priceInPaise = priceInPaise; // convention: _ means "internal, please don't touch
  }
  // getter — called as p.priceInRupees (NO parentheses!)
  get priceInRupees() {
    return this._priceInPaise / 100;
  }
  // setter — called as p.priceInRupees = 50
  set priceInRupees(rupees) {
    if (rupees < 0) throw new Error("Price cannot be negative");
    this._priceInPaise = rupees * 100;
  }
  get priceWithGST() {
    return this.priceInRupees * 1.18; // 18% GST — derived, no storage
  }
}
const p = new Product("Notebook", 5000); // ₹50.00
console.log(p.priceInRupees); // 50 ← getter
console.log(p.priceWithGST); // 59 ← derived
p.priceInRupees = 100; // setter
console.log(p.priceInRupees); // 100
// p.priceInRupees = -10; // throws — validation in sette


class Student {
    constructor(name, marks) {
        this.name = name;
        this.marks = marks; 
    }


    showMarks() {
        console.log(`Student: ${this.name} and Marks: [${this.marks.join(', ')}] `);
    }
}

// Example usage
const studentMarks = new Student("R", [85, 90, 78]);

studentMarks.showMarks();

class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    console.log(`${this.name} makes a sound`);
  }
}
class Dog extends Animal {
  constructor(name, breed) {
    super(name); // MUST call super before using `this`
    this.breed = breed; // own to Dog instances
    // super(name)
  }
  speak() { // override
    super.speak(); // call parent's speak first (optional)
    console.log(`${this.name} barks!`);
    // super.speak();
  }
}
const d = new Dog("Bruno", "Labrador");
d.speak();
// "Bruno makes a sound" ← from Animal via super.speak()
// "Bruno barks!" ← from Dog's override
console.log(d instanceof Dog); // true
console.log(d instanceof Animal); // true — extends sets up the chain


class MathUtils {
  static gst(amount, rate = 18) {
    return amount * (rate / 100);
  }
  static format(amount) {
    return `₹${amount.toFixed(2)}`;
  }
}
console.log(MathUtils.gst(1000)); 
console.log(MathUtils.format(1180));


class User {
  constructor(name) { 
    this.name = name; 

  }

  static fromEmail(email) { 
    const name = email.split("@")[0];

    return new User(name);
  }
}
const u = User.fromEmail("priya@example.com");
console.log(u.name); 


class BankAccount {
  #balance; // declared private field
  #transactions = []; // can have a default
  constructor(initial) {
    this.#balance = initial;
  }
  deposit(amt) {
    this.#balance += amt;
    this.#transactions.push({ type: "deposit", amt });
  }
  withdraw(amt) {
    if (amt > this.#balance) throw new Error("Insufficient funds")
    this.#balance -= amt;
    this.#transactions.push({ type: "withdraw", amt });
  }
  get balance() { return this.#balance; }
  get history() { return [...this.#transactions]; } // copy — don't expose internal
  array
}
const acc = new BankAccount(1000);
acc.deposit(500);
acc.withdraw(200);
console.log(acc.balance); // 1300
console.log(acc.history); // [{ type: "deposit", ...}, { type: "withdraw", ...}]


class AppError extends Error {
  constructor(message, code) {
    super(message); // Error's own constructor handles message
    this.name = this.constructor.name; // sets to "ValidationError" or "NotFoundError"
    this.code = code;
  }
}
class ValidationError extends AppError {
  constructor(field, message) {
    super(message, "VALIDATION_FAILED");
    this.field = field;
  }
}
class NotFoundError extends AppError {
  constructor(resource) {
    super(`${resource} not found`, "NOT_FOUND");
  }
}
// Usage
function validateAge(age) {
  if (age < 0) throw new ValidationError("age", "Must be non-negative");
  if (age > 150) throw new ValidationError("age", "Must be under 150");
}
try {
  validateAge(-5);
} catch (e) {

  if (e instanceof ValidationError) {
    console.log(`[${e.code}] ${e.field}: ${e.message}`);
    // "[VALIDATION_FAILED] age: Must be non-negative"
  }
}

class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  get area() {
    return this.width * this.height;
  }

  scale(factor) {

    console.log(`this is scaling factor ${factor}`)
    
    this.width = factor * this.width;
    this.height = factor * this.height;
  }
}

const output = new Rectangle(2, 3);

console.log(`area is : ${output.area}`);

output.scale(2);

console.log(`scaling factor: ${output.area}`);