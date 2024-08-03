// Promise is an object that represent eventual completion an synchronous operation. it resulting value.
// there are three state .
//Pending, Fullfill,Reject,


// Creating a new promise
const myPromise = new Promise((resolve, reject) => {
    // Simulating an asynchronous operation, e.g., fetching data from an API
    setTimeout(() => {
      const success = true; // Simulating success or failure
      if (success) {
        resolve('Data fetched successfully!');
      } else {
        reject('Error fetching data.');
      }
    }, 2000);
  });
  
  // Consuming the promise
  myPromise
    .then((result) => {
      console.log(result); // This will run if the promise is resolved
    })
    .catch((error) => {
      console.error(error); // This will run if the promise is rejected
    });