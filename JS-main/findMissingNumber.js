function missingNumber(array) {
    let n = array.length + 1;
    let expectedSum = (n * (n + 1)) / 2;
    let actualSum = 0;
  
    for (let i = 0; i < array.length; i++) {
      actualSum += array[i];
    }
  
    return expectedSum - actualSum;
  }
  
  // Example usage:
  const arr = [1, 2, 4, 5];
  console.log(missingNumber(arr)); // Output: 3

//   2nd approch

function missingnumber(array){
    let sum = array.length;
    let total = (sum*(sum+1))/2
    let acutalsum = array.reduce((acc,current)=> acc+current,0)
    return total-acutalsum
  }
  let number = missingnumber([0,1,3])
  console.log(number)