// A callback function is a function that is passed as an argument to another function.
// The callback function is then invoked or executed inside the outer function.
// Callbacks are commonly used in asynchronous programming to handle tasks that may take
// some time to complete,such as fetching data from a server, reading a file, or handling user input.
function doSomethingAsync(callback) {
  console.log("dldh sdgdj");
  setTimeout(() => {
    console.log("Async operation completed");
    callback();
  }, 2000);
}

function callbackFunction() {
  console.log("Callback function executed");
}

doSomethingAsync(callbackFunction);


