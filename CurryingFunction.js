// What Is Currying in JavaScript? Currying in JavaScript transforms a
// function with multiple arguments into a nested series of functions, each taking a single argument.
function string(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}

console.log(string(2)(2)(2));
