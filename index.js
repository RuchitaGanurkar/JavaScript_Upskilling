const city = "Jaipur"; // lives in the OUTER (global) scope
function outer() {
    const language = "Hindi"; // lives in outer's scope
    function inner() {
        const greeting = "Namaste";
        console.log(greeting, language, city); // can see all three — looks outward
    }
    inner();
}
outer(); 


const a = "global a";
function outer() {
    const b = "outer b";
    function inner() {
        const c = "inner c";
        console.log(a); // "global a" ← walked up: inner → outer → global ✓
        console.log(b); // "outer b" ← walked up: inner → outer ✓
        console.log(c); // "inner c" ← found in current scope ✓
    }
    inner();
    // console.log(c); // ReferenceError ← outer scope cannot see inner's variables
    console.log(b);
    console.log(a);
}
outer();

function makeGreeter(name) { // outer function
    // 'name' lives in the outer EC
    return function () { // inner function — referenced after outer returns
        console.log(`Namaste, ${name}!`);
    };
}
const greetPriya = makeGreeter("Priya");
const greetAarav = makeGreeter("Aarav");
greetPriya(); // "Namaste, Priya!" ← still remembers name = "Priya"
greetAarav(); // "Namaste, Aarav!" ← independent closure, name = "Aarav"


// 1. Counter — private state
function makeCounter() {
    let count = 0; // private — cannot be reached from outside
    return function () {
        count++; // each call mutates the SAME closed-over count
        return count;
    };
}
const c = makeCounter();
console.log(c()); // 1
console.log(c()); // 2
console.log(c()); // 3
// console.log(count) // ReferenceError — count is private to the closure



// 2. Private variables — bank account
function createAccount(initial) {
    let balance = initial; // PRIVATE — no one outside can touch it
    return {
        deposit: (amt) => balance += amt,
        withdraw: (amt) => balance -= amt,
        getBalance: () => balance,
    };
}
const acc = createAccount(1000);
acc.deposit(500);
console.log(acc.getBalance()); // 1500
// acc.balance // undefined — truly private



// 3. Memoization — cache expensive results
function memoize(fn) {
    const cache = {}; // closed-over cache, lives across calls
    return function (n) {
        if (n in cache) return cache[n]; // hit → return cached
        cache[n] = fn(n); // miss → compute and store
        return cache[n];
    };
}
const slowSquare = (n) => { console.log("computing..."); return n * n; };
const fastSquare = memoize(slowSquare);
fastSquare(5); // "computing..." → 25
fastSquare(5); // 25 (no log — served from cache)


// THE BUG — using var
for (var i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 100);
}
// Logs: 3, 3, 3 
// FIX 1 — let (block-scoped: each iteration gets a FRESH i)
for (let i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 100);
}
// Logs: 0, 1, 2
// FIX 2 — IIFE creating a new scope per iteration (the classic pre-ES6 fix)
for (var i = 0; i < 3; i++) {
    (function (j) { // j is a fresh parameter each iteration
        setTimeout(() => console.log(j), 100);
    })(i);
}
// Logs: 0, 1, 2
// FIX 3 — bind the value into a function call
for (var i = 0; i < 3; i++) {
    setTimeout(console.log.bind(null, i), 100);
}
// Logs: 0, 1, 2

for (var k = 1; k <= 2; k++) {
    setTimeout(
        () => console.log(k),
        100
    )
}

(function () {
    const secret = "hidden"; // not visible outside
    console.log("IIFE ran");
})();
// IIFE with parameters
(function (city) {
    console.log(`Greetings from ${city}`);
})("Jaipur");
// Arrow IIFE (modern)
(() => {
    const x = 42;
    console.log(x);
})();

// Pre-ES6 module pattern — the most common historical use
const counterModule = (function () {
    let count = 0; // private (closure)
    return {
        inc: () => ++count,
        get: () => count,
    };
})();
counterModule.inc();
counterModule.inc();
console.log(counterModule.get()); // 2
counterModule.count // undefined — private

function makeCounter() {
  let count = 0;

  return function() {
    count++;
    return count;
  };
}

const counter1 = makeCounter();
const counter2 = makeCounter();

console.log("--- Counter 1 ---");
console.log(counter1()); 
console.log(counter1()); 
console.log(counter1());

console.log("--- Counter 2 ---");
console.log(counter2()); 
console.log(counter2()); 


console.log("Using var:");

for (var i = 1; i <= 3; i++) {
    setTimeout(() => console.log(i), 100);
}


console.log("Using let:");

for (let j = 1; j <= 3; j++) {
    setTimeout(() => console.log(j), 100);
}

// Bank Balance


function createAccount(initial) {
    let balance = initial;

    return {
        deposit(amount) {
            balance += amount;
        },

        withdraw(amount) {
            balance -= amount;
        },

        getBalance() {
            return balance;
        }
    };
}

const account = createAccount(1000);

account.deposit(500);
account.withdraw(200);

console.log("Current Balance:", account.getBalance()); // 1300

console.log(account.balance); // undefined


function memoize(fn) {
    const cache = {};

    return function (arg) {
        if (cache[arg] !== undefined) {
            console.log("Returning from cache...");
            return cache[arg];
        }

        const result = fn(arg);
        cache[arg] = result;

        return result;
    };
}

function expensiveSquare(n) {
    console.log("computing...");
    return n * n;
}

const memoizedSquare = memoize(expensiveSquare);

console.log(memoizedSquare(5));
console.log(memoizedSquare(5));
console.log(memoizedSquare(10));
console.log(memoizedSquare(5));

function multiplier(factor) {
    return function (num) {
        return num * factor;
    };
}

const double = multiplier(2);
const triple = multiplier(3);

console.log(double(5)); // 10
console.log(double(10)); // 20

console.log(triple(5)); // 15
console.log(triple(10)); // 30

console.log("for...of with let:");

for (let value of [10, 20, 30]) {
    setTimeout(() => console.log(value), 100);
}


function createAdvancedAccount(initial) {
    let balance = initial;
    let transactionCount = 0;

    return {
        deposit(amount) {
            balance += amount;
            transactionCount++;
        },

        withdraw(amount) {
            balance -= amount;
            transactionCount++;
        },

        getBalance() {
            return balance;
        },

        getTransactionCount() {
            return transactionCount;
        }
    };
}

const advancedAccount = createAdvancedAccount(1000);

advancedAccount.deposit(300);
advancedAccount.withdraw(100);
advancedAccount.deposit(200);

console.log("Advanced Balance:", advancedAccount.getBalance());
console.log(
    "Transaction Count:",
    advancedAccount.getTransactionCount()
);


function once(fn) {
    let hasRun = false;
    let cachedResult;

    return function (...args) {
        if (!hasRun) {
            cachedResult = fn(...args);
            hasRun = true;
        }

        return cachedResult;
    };
}

function greet(name) {
    console.log("Function executed!");
    return `Hello ${name}`;
}

const greetOnce = once(greet);

console.log(greetOnce("Priya"));
console.log(greetOnce("Ravi"));
console.log(greetOnce("Aman"));

