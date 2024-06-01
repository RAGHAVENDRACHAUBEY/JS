function getData() {
  return new Promise((resolve, reject) => {
    // Simulate an asynchronous operation
    setTimeout(() => {
      resolve("Data");
    }, 1000);
  });
}

function getMoreData(data) {
  return new Promise((resolve, reject) => {
    // Simulate another asynchronous operation
    setTimeout(() => {
      resolve(data + " More Data");
    }, 1000);
  });
}

function getEvenMoreData(data) {
  return new Promise((resolve, reject) => {
    // Simulate yet another asynchronous operation
    setTimeout(() => {
      resolve(data + " Even More Data");
    }, 1000);
  });
}

// getData()
//   .then((data) => getMoreData(data))
//   .then((moreData) => getEvenMoreData(moreData))
//   .then((result) => {
//     console.log(result); // "Data More Data Even More Data"
//   })
//   .catch((error) => {
//     console.error("An error occurred:", error);
//   });

//   Async & Await
async function main() {
  try {
    const data = await getData();
    const moreData = await getMoreData(data);
    const evenMoreData = await getEvenMoreData(moreData);
    console.log(evenMoreData); // "Data More Data Even More Data"
  } catch (error) {
    console.error("An error occurred:", error);
  }
}

main();
