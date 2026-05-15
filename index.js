const user = { name: "Priya" };
// Every object literal's prototype is Object.prototype
console.log(Object.getPrototypeOf(user) === Object.prototype); // true
// user has no .toString() of its own — but it can call one!
console.log(user.toString());
// Why? toString lives on Object.prototype.
console.log(Object.prototype.hasOwnProperty("toString")); // true
// At the END of the chain: null
console.log(Object.getPrototypeOf(Object.prototype)); // null


const myAnimal = {
  eat() { console.log(`${this.name} is eating`); },
  sleep() { console.log(`${this.name} is sleeping`); },
};
// dog inherits from animal
const dog = Object.create(myAnimal);
dog.name = "Bruno";
dog.eat(); // "Bruno is eating" ← method found on animal (the prototype)
dog.sleep(); // "Bruno is sleeping" ← same path
// Confirm the link
console.log(Object.getPrototypeOf(dog) === myAnimal); // true
// Own properties vs inherited
console.log(dog.hasOwnProperty("name")); // true ← on dog itself
console.log(dog.hasOwnProperty("eat")); // false ← inherited from animal


const myA = { x: 1 };
const b = Object.create(myA);
b.y = 2;
console.log(b.x);
console.log(b.y);
console.log(b.hasOwnProperty("x"));

const grandparent = { lastName: "Sharma" };
const parent = Object.create(grandparent);
parent.firstName = "Priya";
const child = Object.create(parent);
child.age = 5;
// READ — walks up
console.log(child.age); // 5 ← own
console.log(child.firstName); // "Priya" ← from parent
console.log(child.lastName); // "Sharma" ← from grandparent
console.log(child.toString); // ƒ ← from Object.prototype (one more step)
// WRITE — creates an own property; the prototype is untouched
child.firstName = "Anaya";
console.log(child.firstName); // "Anaya" ← own property now shadows parent's
console.log(parent.firstName); // "Priya" ← prototype unchanged


const animal = { eat() { } };
const dog = Object.create(animal);
dog.bark = () => console.log("woof");
console.log(dog.hasOwnProperty("bark")); // true — dog has its own bark
console.log(dog.hasOwnProperty("eat")); // false — eat is inherited
console.log("bark" in dog); // true — found on dog
console.log("eat" in dog); // true — found on animal (chain)
console.log("toString" in dog); // true — found on Object.prototype
// Constructor function (capitalised by convention)
function User(name, city) {
  this.name = name; // own property on the new object
  this.city = city;
}
// Methods go on the SHARED prototype — not duplicated per instance
User.prototype.greet = function () {
  console.log(`Hi, I'm ${this.name} from ${this.city}`);
};
const a = new User("Priya", "Jaipur");
const b = new User("Aarav", "Mumbai");
a.greet(); // "Hi, I'm Priya from Jaipur"
b.greet(); // "Hi, I'm Aarav from Mumbai"
// Both share the SAME greet function reference
console.log(a.greet === b.greet); // true
console.log(Object.getPrototypeOf(a) === User.prototype); // true
// Inheritance — Admin extends User
function Admin(name, city, level) {
  User.call(this, name, city); // borrow User's constructor
  this.level = level;
}
Admin.prototype = Object.create(User.prototype); // chain Admin → User
Admin.prototype.constructor = Admin; // restore constructor pointer
Admin.prototype.power = function () {
  console.log(`${this.name} has level ${this.level}`);
};
const ad = new Admin("Riya", "Bangalore", 5);
ad.greet(); // inherited from User.prototype
ad.power(); // own to Admin.prototype


Array.prototype.last = function () {
return this[this.length - 1];
};
const fruits = ["apple", "mango", "banana"]
function last(arr) { return arr[arr.length - 1]; }
console.log(last(fruits)); // "banana

const arr = [1, 2, 3];

console.log(Object.getPrototypeOf(arr)); // shows all array methods

console.log(Object.getPrototypeOf(Object.getPrototypeOf(arr))); // base object method

console.log(Object.getPrototypeOf(Object.getPrototypeOf(Object.getPrototypeOf(arr)))); // shows null


// 1. Create object
const vehicle = {
  start() {
    console.log(`${this.name} starting`);
  }
};

// 2. Create the car object 
const car = Object.create(vehicle);
car.name = "Tata Nexon";

// 3. Create the bike object 
const bike = Object.create(vehicle);
bike.name = "Royal Enfield";

// 4. Call start() on both objects
car.start(); 
bike.start(); 


console.log(car.hasOwnProperty("name"));  
console.log("name" in car);                

console.log(car.hasOwnProperty("start")); 
console.log("start" in car);               

console.log(bike.hasOwnProperty("name")); 
console.log("start" in bike);              


function Person(name) {
  this.name = name;
}

Person.prototype.greet = function () {
  console.log("Hi, I'm " + this.name);
};


function Student(name, school) {
  // 'name' on the current instance
  Person.call(this, name);
  this.school = school;
}

Student.prototype = Object.create(Person.prototype);

Student.prototype.constructor = Student;

Student.prototype.study = function () {
  console.log(this.name + " studies at " + this.school);
};

const student = new Student("Riya", "IIT Delhi");

student.greet(); // Logs: "Hi, I'm Riya"
student.study(); // Logs: "Riya studies at IIT Delhi"


const myDog = Object.create({ species: "Canis" });
myDog.name = "Bruno";

console.log(myDog.hasOwnProperty("name"));    // true
console.log(myDog.hasOwnProperty("species")); // false
console.log("name" in myDog);                // true
console.log("species" in myDog);             // true
console.log("toString" in myDog);            // true


