const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Promise 1 resolved");
    resolve(10);
  }, 10);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Promise 2 resolved");
    resolve(10);
  }, 1000);
});

const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Promise 3 resolved");
    resolve(10);
  }, 5000);
});

const p4 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Promise 4 rejected");
    reject(10);
  }, 5000);
});

Promise.all([p1, p2, p3, p4])
  .then((results) => results.reduce((a, b) => a + b))
  .catch(console.log);
