const sayHi = {
  name: "Raghav",
};
const greet = function (age) {
  return this.name + " " + age;
};
console.log(greet.call(sayHi, "20")); // output Raghav 20
console.log(greet.apply(sayHi, ["20"])); // output Raghav 20

// Bind
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
