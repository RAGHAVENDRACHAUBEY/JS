// Destructuring
// Destructuring is a javascript expression that makes it possible to unpack value from array or properties from objects into distinct 
// variables.We can extract data from arays and object and assign them to variables.
const array = [1, 2, 3, 4, 5];

const [first, second, ...rest] = array;

console.log(first);  // Output: 1
console.log(second); // Output: 2
console.log(rest);   // Output: [3, 4, 5]

// Object
const person = {
    name: 'Alice',
    address: {
        city: 'Wonderland',
        zip: '12345'
    }
};

const { name, address: { city, zip } } = person;

console.log(name); // Output: Alice
console.log(city); // Output: Wonderland
console.log(zip);  // Output: 12345