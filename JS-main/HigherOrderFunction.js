// Higher-Order Function:

// A higher-order function is a function that takes one or more functions as
// arguments and/or returns a function as its result.
// Higher-order functions enable the creation of more abstract and reusable code by
// allowing the passing of behavior (functions) as data.
// Functions like map, filter, and reduce are examples of higher-order functions in JavaScript,
// as they take a function as an argument to define a specific behavior.

// Higher-order function that takes a callback function
// function operateOnArray(array, operation) {
//   return operation(array);
// }

// Callback functions used with the higher-order function
function doubleArray(arr) {
  return arr.map((num) => num * 2);
}

const numbers = [1, 2, 3, 4, 5];

// console.log(operateOnArray(numbers, doubleArray));

console.log(doubleArray(numbers));
