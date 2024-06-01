// 1.
let array = [2, -4, 5, 6];
[array[1], array[0]] = [array[0], array[1]];
console.log(array);[ -4, 2, 5, 6 ]

// 2 ==curry-function

const add = (a) => {
  return (b) => {
    return (c) => {
      return a + b + c;
    };
  };
};

console.log(add(2)(3)(4));
