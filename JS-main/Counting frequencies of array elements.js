// Counting frequencies of array elements
// Given an array which may contain duplicates, print all elements and their frequencies.
// Input :  arr[] = {10, 20, 20, 10, 10, 20, 5, 20}
// Output : 10 3
//          20 4
//          5  1

let array = [10, 20, 20, 10, 10, 20, 5, 20];
// let array="aaabbcccc"

function countOccurrences(arr) {
  let counts = {};

  for (let i = 0; i < arr.length; i++) {
    let num = arr[i];
    counts[num] = (counts[num] || 0) + 1;
  }
  for (let key in counts) {
    console.log(key + " " + counts[key]);
  }
}

countOccurrences(array);


// second method

let counts = {};
  for (let i = 0; i< arr.length; i++) {
    let num = arr[i];
    if(counts[num]){
      counts[num]++
    }else{
      counts[num]= 1
    }

  }
  for(let key in counts){
  console.log(key + " " + counts[key])

}
