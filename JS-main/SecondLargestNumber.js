// Find in Array Second Largest Number

let array = [10, 12, 20, 21, 4, 5, 6, 22];

let firstLargetsNumber = 0;
let secondLargestNumber = -1;

for (i = 0; i < array.length; i++) {
  if (array[i] > firstLargetsNumber) {
    firstLargetsNumber = array[i];
  }
}
// console.log(firstLargetsNumber);

for (i = 0; i < array.length; i++) {
  if (array[i] > secondLargestNumber && array[i] < firstLargetsNumber) {
    secondLargestNumber = array[i];
  }
}
console.log(
  "firstLargetsNumber:",
  firstLargetsNumber,
  ",secondLargestNumber:",
  secondLargestNumber
);
