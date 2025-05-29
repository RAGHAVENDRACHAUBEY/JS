const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const k = 3;

const output = [];
for (let i = 0; i < arr.length; i += k) {
  const chunk = arr.slice(i, i + k).reverse();
  output.push(...chunk);
}

console.log(output); // [3, 2, 1, 6, 5, 4, 9, 8, 7]
