
console.log("Start");
setTimeout(() => {
  console.log("Timeout 1");
}, 0);

new Promise((resolve, reject) => {
  console.log("Promise 1");
  resolve("Promise Resolved");
}).then(res => console.log(res));

setTimeout(() => {
  console.log("Timeout 2");
}, 0);

new Promise((resolve, reject) => {
  console.log("Promise 2");
  resolve("Promise Resolved 2");
}).then(res => console.log(res));
console.log("End");
 