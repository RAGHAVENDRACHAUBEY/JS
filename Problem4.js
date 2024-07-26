// first largetsNumber

let array = [20, 10, 29, 4, 5, 23];

let largetsNumber = array[0];
for (i = 0; i < array.length; i++) {
  if (array[i] > largetsNumber) {
    largetsNumber = array[i];
  }
}
console.log(largetsNumber);

// ArrayMethod
let arrmethod = array.sort((a, b) => b - a);
console.log(arrmethod[0]);

// Max ArrayMethod
let arrMax = Math.max(...array);
console.log(arrMax);
