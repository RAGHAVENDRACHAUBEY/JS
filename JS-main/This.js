// This keyword in javaScript refers to the object that the function is a methods of.
//  the value of this depends on how the function is called.

// Global Context:
console.log(this);

// Function Context:
// Inside a regular function, this refers to the global object
//  (in non-strict mode) or undefined (in strict mode).
function showThis() {
  console.log(this);
}

showThis(); // In non-strict mode: Window object, in strict mode: undefined

// Constructor Context:
function Person(name) {
  this.name = name;
}

const person = new Person("Bob");
console.log(person.name); // Output: Bob

// Call
function greet() {
  console.log(this.name);
}

const person1 = { name: "Alice" };
greet.call(person1); // Output: Alice

// Apply
function greet(greeting) {
  console.log(greeting + ", " + this.name);
}

const person2 = { name: "Bob" };
greet.apply(person2, ["Hello"]); // Output: Hello, Bob

// Bind

function greet() {
  console.log(this.name);
}

const person3 = { name: "Charlie" };
const boundGreet = greet.bind(person3);
boundGreet(); // Output: Charlie
