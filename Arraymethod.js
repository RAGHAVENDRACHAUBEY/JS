let strr = [2, 3, 5, 6, 8, 4];

// forEach method

let one = strr.forEach((item) => {
  console.log(item, "forEach method");
});

// map

const two = strr.map((le) => {
  return le * 2;
});
console.log(two, "map method");

// filter

const three = strr.filter((re) => {
  return re % 2 === 1;
});
console.log(three, "filter method");

// Reduce

const four = strr.reduce((accu, sum) => {
  return accu + sum;
}, 0);
console.log(four, "reduce method");

// some

const five = strr.some((li) => {
  return li % 2 === 0;
});
console.log(five, "some method");

// indexOf()
const seven = strr.indexOf(10);
console.log(seven);

// flat

const arr2 = [0, 1, [2, [3, [4, 5]]]];
let six = arr2.flat(3);
console.log(six, "flat method");

// from

console.log(Array.from("foo"));

// Splice
const eight = strr.splice(2, 3);
console.log(strr);
console.log("eight", eight);

// slice
const nine = strr.slice(2, 4);
console.log(strr, "nine");
console.log("nine", nine);

// Find
const ten = strr.find((item) => item % 2 === 0);
console.log("ten", ten);

// findIndexOf
const eleven = strr.findIndex((item) => item % 2 === 0);
console.log("eleven", eleven);
