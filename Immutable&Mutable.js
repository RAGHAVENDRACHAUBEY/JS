// Immutable
// Unchangeable State: The value of an immutable object cannot be changed after it is created.
let str = "hello";
let newStr = str.toUpperCase();
console.log(str); // Output: "hello"
console.log(newStr); // Output: "HELLO"

let num = 5;
let newNum = num + 5;
console.log(num); // Output: 5
console.log(newNum); // Output: 10

// Mutable
// Changeable State: The value of a mutable object can be changed after it is created.

let obj = { name: "Alice" };
obj.name = "Bob";
console.log(obj.name); // Output: "Bob"

let arr = [1, 2, 3];
arr[0] = 10;
console.log(arr); // Output: [10, 2, 3]
