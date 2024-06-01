// Deep copy
// A deep copy can be achieved using JSON.parse() + JSON.stringify():
const obj1 = { name: "Version 1", additionalInfo: { version: 1 } };
console.log(obj1, "rgjoepr");
const deepCopy = JSON.parse(JSON.stringify(obj1));

deepCopy.name = "Version 2";
deepCopy.additionalInfo.version = 2;

console.log(obj1); // { name: 'Version 1', additionalInfo: { version: 1 } }
console.log(deepCopy); // { name: 'Version 2', additionalInfo: { version: 2 } }

// Shallow copy
// A shallow copy can be achieved using the spread operator (…) or using Object.assign():

const obj = { name: "Version 1", additionalInfo: { version: 1 } };

const shallowCopy1 = { ...obj };
const shallowCopy2 = Object.assign({}, obj);

shallowCopy1.name = "Version 2";
shallowCopy1.additionalInfo.version = 2;

shallowCopy2.name = "Version 2";
shallowCopy2.additionalInfo.version = 2;

console.log(obj); // { name: 'Version 1', additionalInfo: { version: 2 } }
console.log(shallowCopy1); // { name: 'Version 2', additionalInfo: { version: 2 } }
console.log(shallowCopy2); // { name: 'Version 2', additionalInfo: { version: 2 } }
