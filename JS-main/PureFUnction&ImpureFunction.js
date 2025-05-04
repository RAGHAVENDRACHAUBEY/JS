// "Impure function"
let count = 0
 
function increment(){
  count += 1
  return count
}
console.log(increment())
 console.log(increment())
  console.log(increment())


//   Pure function
function add(a, b) {
    return a + b;
}

console.log(add(2, 3)); // Output: 5
console.log(add(2, 3)); // Output: 5 (always the same result for the same inputs)
