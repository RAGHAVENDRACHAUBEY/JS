// Hoisting is a javascript mechansim where variables and function declarations are moved to the top of their scope before code execution .
console.log(y);
var y;
y = 12;
console.log(y);

getName();
// console.log(x);
// console.log(x1);

var x = 10;
let x1 = 10;
function getName() {
  console.log("JavaScripts");
}
getName();
// console.log(x);
