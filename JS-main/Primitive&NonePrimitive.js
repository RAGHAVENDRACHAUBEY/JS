Immutability:
let str = "hello";
str[0] = "H"; // This has no effect
console.log(str); // Output: "hello"

// Stored by Value
let a = 10;
let b = a;
b = 20;
console.log(a); // Output: 10


// Non-primitive
// Mutability
let arr = [1, 2, 3];
arr[0] = 10;
console.log(arr); // Output: [10, 2, 3]

// Stored by Reference
let obj1 = { name: "Alice" };
let obj2 = obj1;
obj2.name = "Bob";
console.log(obj1.name); // Output: "Bob"