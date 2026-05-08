function safeParse(str) {
  try {
    return JSON.parse(str);
  } catch (error) {
    console.log("Invalid JSON Message:", error.message);
    return null;
  }
}

// Valid JSON
console.log(safeParse('{"name":"Priya"}'));

// Invalid JSON
console.log(safeParse('{"name":"Priya"'));

console.log("-----------------------------------------------------------------------------")

function setAge(age) {
  if (typeof age !== "number") {
    throw new Error("Age must be a number");
  }

  if (age < 0 || age > 120) {
    throw new Error("Age must be 0–120");
  }

  return age;
}

// Try Catch Block
try {
  console.log(setAge(25));
} catch (error) {
  console.log(error.message);
}

try {
  console.log(setAge("twenty"));
} catch (error) {
  console.log(error.message);
}

try {
  console.log(setAge(200));
} catch (error) {
  console.log(error.message);
}


console.log("-----------------------------------------------------------------------------")

class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = "ValidationError";
  }
}

function validateEmail(email) {
  if (!email.includes("@")) {
    throw new ValidationError("Email must contain @");
  }

  return "Valid Email";
}

// Valid email
try {
  console.log(validateEmail("priya@example.com"));
} catch (err) {
  if (err instanceof ValidationError) {
    console.log("Validation Error:", err.message);
  } else {
    console.log("Other Error:", err.message);
  }
}

// Invalid email
try {
  console.log(validateEmail("priya-no-at"));
} catch (err) {
  if (err instanceof ValidationError) {
    console.log("Validation Error:", err.message);
  } else {
    console.log("Other Error:", err.message);
  }
}



console.log("-----------------------------------------------------------------------------")


import formatPrice, { PI, add, multiply } from "./mathUtils.js";

console.log("PI:", PI);

console.log("Add:", add(5, 3));

console.log("Multiply:", multiply(4, 6));

console.log(formatPrice(999));

function safeDivide(a, b) {
  if (b === 0) {
    throw new Error("Division by zero is not allowed");
  }

  return a / b;
}

try {
  console.log(safeDivide(10, 2));
} catch (error) {
  console.log(error.message);
}

try {
  console.log(safeDivide(5, 0));
} catch (error) {
  console.log(error.message);
}

class NotFoundError extends Error {
  constructor(message) {
    super(message);
    this.name = "NotFoundError";
  }
}


console.log("-----------------------------------------------------------------------------")


function getUserById(id) {
  const validIds = [1, 2, 3];

  if (!validIds.includes(id)) {
    throw new NotFoundError("User not found");
  }

  return `User ${id}`;
}

try {
  console.log(getUserById(2));
} catch (err) {
  if (err instanceof NotFoundError) {
    console.log("Not Found:", err.message);
  } else {
    console.log("Other Error:", err.message);
  }
}

try {
  console.log(getUserById(10));
} catch (err) {
  if (err instanceof NotFoundError) {
    console.log("Not Found:", err.message);
  } else {
    console.log("Other Error:", err.message);
  }
}