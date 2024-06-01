// Rest
// The rest parameter allows a function to capture multiple arguments into a single parameter.
// It is specified as the last parameter in a function's parameter list and is preceded by
// an ellipsis (...),indicating that it should gather the remaining arguments into an array.
function sum(a, b, ...arg) {
  console.log(a); //  output 2
  console.log(b); //  output 3
  console.log(arg); //  output [5, 6, 7, 8, 9, 10]
}
sum(2, 3, 5, 6, 7, 8, 9, 10);

function add(...num) {
  return num.reduce((acc, current) => acc + current, 0);
}
console.log(add(2, 3, 5, 6, 7, 8, 9, 10)); //  output 50

// Spreade
// The spreade  operator in javaScripts expands value in arrays and string into individual elements.
const array1 = [1, 2, 3];
const array2 = [...array1, 4, 5, 6];

console.log(array2); // Output: [1, 2, 3, 4, 5, 6]

const array3 = [1, 2, 3];
const array5 = [4, 5, 6];
const array6 = [...array3, ...array5];

console.log(array6); // Output: [1, 2, 3, 4, 5, 6]

function sum(x, y, z) {
  return x + y + z;
}

const numbers = [1, 2, 3];
console.log(sum(...numbers, "d")); // Output: 6
