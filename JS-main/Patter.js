let n= 5
// for(let i =1; i<=n; i++){
//     for(let j=1; j<=n; j++){
//       process.stdout.write("*")
//     }
//  console.log("")
// }
// 1st Pattern
// *******
// *******
// *******
// *******
// *******

// 2st Pattern
// *
// **
// ***
// ****
// *****


// for(let i=1; i<=n; i++){
//   for(let j=1; j<=i; j++ ){
//    process.stdout.write("*")
//   }
//   console.log()
// }

// 3rd Pattern
// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5


// for(let i=1; i<=n; i++){
//   for(let j= 1; j<=i ; j++){
//     process.stdout.write(j + " ")
//   }
//   console.log()
// }

// 4ths Pattern
// * * * * *
// * * * *
// * * *
// * *
// *

// for(let i =1; i<=n; i++){
//   for(let j=1; j<=n-i+1; j++){
//     process.stdout.write("*")
//   }
//   console.log()
// }

// 5ths Pattern
//         *
//       * *
//     * * * 
//   * * * *
// * * * * *

// for(let i=1; i<=n; i++){
//   for(let j=1; j<=n-i; j++){
//   process.stdout.write(" ")
  
// }
// for (let l=1; l<=i; l++){
//     process.stdout.write("*")
//   }
// console.log("")
// }


// 6th Pattern
//     *
//    * *
//   * * * 
//  * * * *
// * * * * *

for (let i = 1; i <= n; i++) {
  // Print spaces
  for (let j = 1; j <= n - i; j++) {
    process.stdout.write(" ");
  }

  // Print stars with space
  for (let l = 1; l <= i; l++) {
    process.stdout.write("* ");
  }

  // Move to the next line
  console.log();
}

