let strr1 = [3, 5, 2, 6, 8, 4];
function logic() {
  if (strr1.includes == 98) {
    return false;
  } else {
    strr1.push(98);
  }
}
logic(strr1);
console.log(strr1);

const group = "shorttermloan";
const onegroup = group.split("-").join("");
console.log(onegroup);

// const groups = "shorttermloan";
// const onegroups = groups.split("");
// console.log(onegroups);

const froms = Array.from(group);
console.log(froms);
