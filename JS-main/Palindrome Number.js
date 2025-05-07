// Palindrome Number
// We are going to learn about Palindrome Numbers in JavaScript. A palindrome number is a numerical sequence that reads the same 
// forwards and backward, It remains unchanged even when reversed, retaining its original identity.

// Example:

// Input : Number = 121     >>>>>>>>>>>>> true
// Output : Palindrome,121
// Input : Number = 1331
// Output : Palindrome,1331

function pelindrom(num){
    let str = num.toString().split('').reverse().join('')
    console.log(str)
    if(str == num){
       console.log("true") 
    }else{
        console.log("false") 
    }
}