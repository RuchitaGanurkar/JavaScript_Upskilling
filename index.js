// Predict the `this`

const user = {
  name: "Priya",

  greet() {
    console.log(this.name);
  },
};

console.log("Calling user.greet()");
user.greet();

console.log("Calling function g()");
const g = user.greet;
g();

/*
When greet() is called as user.greet(), JS sets `this` to the object before the dot (user).
But when we store it in:
const g = user.greet and later call g(), there is NO object before the function call.
So `this` is no longer bound to `user`.
*/


// Fix Timer Three Ways

class Timer {
  constructor() {
    this.sec = 0;
  }

  tick() {
    this.sec++;
    console.log(this.sec);
  }
}

const t = new Timer();

//  Using .bind()

class TimerBind {
  constructor() {
    this.sec = 0;
  }

  tick() {
    this.sec++;
    console.log("bind:", this.sec);
  }
}

const tBind = new TimerBind();

setInterval(tBind.tick.bind(tBind), 1000);


// Using Arrow 
class TimerArrowWrapper {
  constructor() {
    this.sec = 0;
  }

  tick() {
    this.sec++;
    console.log("arrow wrapper:", this.sec);
  }
}

const tArrowWrapper = new TimerArrowWrapper();

setInterval(() => tArrowWrapper.tick(), 1000);


//  Using Class Field 
class TimerClassField {
  constructor() {
    this.sec = 0;
  }

  // Arrow function captures lexical `this`
  tick = () => {
    this.sec++;
    console.log("class field arrow:", this.sec);
  };
}

const tClassField = new TimerClassField();

setInterval(tClassField.tick, 1000);


// call / apply / bind
function describe(role, city) {
  console.log(`${this.name} is a ${role} from ${city}`);
}

const u = {
  name: "Ruchita",
};

// Using .call
describe.call(u, "Dev", "Pune");

// Using .apply
describe.apply(u, ["QA", "Pune"]);

// Using .bind
const boundDescribe = describe.bind(u, "PM");

boundDescribe("Pune");

// Arrow vs Regular Method
const team = {
  members: ["Priya", "Aarav", "Riya"],

  printRegular() {
    this.members.forEach(function (m) {
      console.log(this.members.length, m);
    });
  },
  printArrow() {
    this.members.forEach((m) => {
      console.log(this.members.length, m);
    });
  },
};

console.log("Running printRegular()");

try {
  team.printRegular();
} catch (error) {
  console.log("printRegular broke:", error.message);
}

console.log("Running printArrow()");
team.printArrow();

/*
Inside forEach(function () {}) the callback gets its OWN `this`.
So `this` is undefined and this.members fails.
Arrow functions DO NOT create their own `this`.
They inherit `this` from the surrounding scope.
*/
