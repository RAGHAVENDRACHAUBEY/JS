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

// /The bind() method creates a new function that, when called, has its this keyword set to the provided value.
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

function greet(greeting, punctuation) {
  console.log(greeting + ', ' + this.name + punctuation);
}

const persons = { name: 'Mike' };
const greetMike = greet.bind(persons);

greetMike('Hey', '?'); // Output: "Hey, Mike?"

// Binding arguments example
function add(a, b) {
  return a + b;
}

const addFive = add.bind(null, 5);
console.log(addFive(3)); // Output: 8

// Comparison Table
// Method	-Invokes Immediately	-Arguments Passing	-Returns
// call   -	Yes	                 -Individual	       -Result
// apply	 -Yes	                    -Array	            -Result
// bind	   -No	                   -Individual/Array	 -Function
