/**
 * Promise.any([p1, p2, ...])
 */

const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("p1 resolved");
    reject(10);
  }, 1000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("p2 resolved");
    reject(100);
  }, 2000);
});

const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("p3 resolved");
    reject(10);
  }, 3000);
});

// if all the promises are rejected,
// Promise.any() method is rejected with an `AggregateError` object that has the `errors` property containing all the errors of the rejected promises.

Promise.any([p1, p2, p3, []])
  .then(console.log)
  .catch((err) => console.log(Array.isArray(err.errors)));
