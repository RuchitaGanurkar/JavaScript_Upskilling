
// Student Object

const student = {
  name: "Ruchita",
  age: 25,
  city: "Pune",
  course: "MCA",
  marks: [85, 90, 78]
};

console.log("Student:", student);

// Access properties
console.log("Name:", student.name);
console.log("Age:", student.age);
console.log("First mark:", student.marks[0]);

// Modify object
student.email = "test@gmail.com"; // add
student.age = 22;                    // update
delete student.city;                 // delete

console.log("Updated Student:", student);

// Method with this

const bankAccount = {
  holder: "Bank User",
  balance: 5000,

  deposit(amount) {
    this.balance += amount;
    return this.balance;
  },

  withdraw(amount) {
    if (amount <= this.balance) {
      this.balance -= amount;
      return this.balance;
    } else {
      return "Insufficient funds";
    }
  }
};


console.log("Deposit :", bankAccount.deposit(1000));
console.log("Withdraw :", bankAccount.withdraw(2000));
console.log("Withdraw :", bankAccount.withdraw(10000));


//  Destructuring
const product = {
  id: 123,
  pName: "Mobile",
  price: 60000,
  brand: "iPhone",
  stock: 90
};

// Basic destructuring
const { pName, price } = product;
console.log("Name:", pName);
console.log("Price:", price);

// Rename during destructuring
const { brand: make } = product;
console.log("Make:", make);

// Default value
const { warranty = "1 year" } = product;
console.log("Warranty:", warranty);


// Book object
const book = {
  title: "Atomic Habits",
  author: "James Clear",
  year: 2018,
  pages: 320,

  summary() {
    return `${this.title} by ${this.author} (${this.year})`;
  }
};

// Bracket notation with variable
const key = "title";
console.log("Book title:", book[key]);

// Method usage
console.log("Summary:", book.summary());

// Print any object using entries
function printObject(obj) {
  Object.entries(obj).forEach(([k, v]) => {
    console.log(`${k}: ${v}`);
  });
}

console.log("Printing book object:");
printObject(book);


// Copy object with spread

const original = { a: 1, b: 2, c: 3 };

// Copy and modify
const copy = { ...original };
copy.b = 20;

console.log("Original object:", original);
console.log("Modified copy:", copy);