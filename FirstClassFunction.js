// first -class function is a funtion .the function can be assigned to any other variable or pass as an argumnet
// or can be return by onther function.

// Storing a function in a variable
const greet = function (name) {
  console.log("Hello, " + name + "!");
};

// Passing a function as an argument
function sayHello(func) {
  func("Alice");
}

sayHello(greet); // Output: Hello, Alice!

// Returning a function from a function
function createGreeting() {
  return function (name) {
    console.log("Hi, " + name + "!");
  };
}

const greetingFunc = createGreeting();
greetingFunc("Bob"); // Output: Hi, Bob!
