// Remove Duplicate Elements from JavaScript Array
const array = [1, 2, 2, 3, 4, 4, 5];

let uniqueArray = [];

for (let i = 0; i < array.length; i++) {
  let duplicates = false;
  for (let j = 0; j < uniqueArray.length; j++) {
    if (array[i] == uniqueArray[j]) {
      duplicates = true;
      break;
    }
  }
  if (!duplicates) {
    uniqueArray.push(array[i]);
  }
}
console.log(uniqueArray);


// Second Method using 
let uniqueArray2 = array.filter((item,index)=> array.indexOf(item)==index);