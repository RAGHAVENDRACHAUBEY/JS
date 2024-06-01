let promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Operation successful");
  }, 2000);
});

promise
  .then((message) => {
    console.log(message); // Output: Operation successful
  })
  .catch((error) => {
    console.error(error);
  });
