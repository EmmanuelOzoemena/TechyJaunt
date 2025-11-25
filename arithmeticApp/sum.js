
//Functions To Add Two Numbers
const add = (a, b) => {
  return a + b;
}

// Function To Subtract Two Numbers
const subtract = (a, b) => {
  return a - b;
}

// Function To Multiply Two Numbers
const multiply = (a, b) => {
  return a * b;
}

// Function To Divide Two Numbers
const divide = (a, b) => {
//   if (b === 0) {
//     throw new Error("Division by zero is not allowed.");
//   }
  return a / b;
}

module.exports = { add, subtract, multiply, divide };