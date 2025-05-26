//  this is a str
// siht si a rts

function reverse(str) {
  str = str.split("").reverse();
  return str.join("");
}
function abc(str) {
  str = str.split(" ");
  for (let i = 0; i < str.length; i++) {
    str[i] = reverse(str[i]);
  }
  return str.join(" ");
}
console.log(abc("this is a str"));

// 2
const nums = [4, 1, 2, 1, 2];
function abcd(nums) {
  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (!map.get(nums[i])) map.set(nums[i], 1);
    else map.set(nums[i], map.get(nums[i]) + 1);
  }
  let str = 0;
  for (let pair of map) {
    if (pair[1] == 1) {
      str = pair[0];
    }
  }
  return str;
}
console.log(abcd(nums));


// 
function reverseWords(sentence) {
  const reverseWOrd = sentence.split(" ").map(ele => ele.split("").reverse().join("")).join(" ") 
 return reverseWOrd
}


module.exports = reverseWords

// Write a function to reverse a string without using built-in .reverse().


let wordString = "Hello"

let string =""
for(let i = wordString.length-1; i>=0; i--){
  string += wordString[i];

}
console.log(string)




// different question
function getInitials(name) {
  const words = name.trim().split(" ");
  let initials = '';
  for (let word of words) {
    if (word.length > 0) {
      initials += word[0].toUpperCase();
    }
  }
  return initials;
}

// Example usage:
let s = "Manish Tomar";
console.log(getInitials(s)); // Output: "MT"
