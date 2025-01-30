// Promise() constructor
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (true) {
      resolve("promise resolved");
    }

    reject("promise rejected");
  }, 1000);
});

// console.log(promise);

promise.then(console.log, console.error);
