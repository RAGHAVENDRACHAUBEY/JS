let string = "He is good boy";
// +++++++++++++++++++++++++
let newString1 = string.split("").reverse("").join("");
console.log(newString1);
// +++++++++++++++++++++++++
let newString = string.split(" ");
console.log(newString);

let toString = newString.reverse("").join(" ");
console.log(toString);
// +++++++++++++++++++++++
let array = [3, 5, 2, 4, 3, 5, 3];
console.log([...new Set(array)]);
// +++++++++++++++++++++++++
let duplicate = "Raghavendra chaubey";
let newOrignal = [...new Set(duplicate)].join("");
console.log(newOrignal);

let newOrignal1 = array.filter((element, index) => {
  return array.indexOf(element) === index;
});
console.log(newOrignal1);

// +++++++++++++++++++++++++
let inputString = "He is a good boy";
let words = inputString.split(" ");
let reversedString = words.reverse().join(" ");
console.log(reversedString);
