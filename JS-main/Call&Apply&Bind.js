// Call
// the call method call a function with given this value and arguments provided as an individually.

const sayHi = {
  name: "Raghav",
};
const greet = function (age) {
  return this.name + " " + age;
};
console.log(greet.call(sayHi, "20")); // output Raghav 20
// Apply
// the apply method call a function with given this value and argument provide as an array.


console.log(greet.apply(sayHi, ["20"])); // output Raghav 20

// Bind

// the bind method of function create a new function that when called this function with its this keyword set to the provided
// value, with a given sequence of arguments preceeding any provided value when the new function is called.
const person = {
  firstName: "John",
  lastName: "Doe",
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};

const getFullName = person.fullName;
console.log(getFullName()); // Output: undefined undefined

const boundGetFullName = person.fullName.bind(person);
console.log(boundGetFullName()); // Output: John Doe
