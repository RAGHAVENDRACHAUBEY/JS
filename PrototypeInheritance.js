const Obj = {
  name: "Raghav",
  greet: function () {
    return this.name;
  },
};

const person = {
  roll: "Developer",
  __proto__: Obj,
};

console.log(person);
console.log(person.greet());
function sayHello(name) {
  this.name = name;
}

let sayHi = new sayHello("Raghav");
console.log(sayHi);
