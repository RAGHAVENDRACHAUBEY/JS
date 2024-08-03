// clouser
// A closure is a feature of JavaScript that allows inner functions to access the outer scope of a function

function sayHi() {
  let name = "closure";
  function two() {
    console.log(name);
  }
  return two;
}

let myFunc = sayHi();
myFunc();

//   Lexical Scoping

function one() {
  let name = "lexical";
  function two() {
    console.log(name);
  }
  two();
}
one();
