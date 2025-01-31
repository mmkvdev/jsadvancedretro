/**
 * Promise.race([p1, p2, ...])
 * takes in an iterable of promises and returns a new promise that either fulfills or rejects as soon as there is one promise that fulfills or rejects, with the value or reason from that promise.
 */

function promiseRace(promises) {
  return new Promise((resolve, reject) => {
    if (promises.length === 0) return;
    promises.forEach((promise) =>
      Promise.resolve(promise).then(resolve, reject)
    );
  });
}

const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("p1 resolved");
    resolve(10);
  }, 1000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("p2 resolved");
    reject(10);
  }, 2000);
});

const p3 = 1;

const p4 = true;

promiseRace([p1, p2, p4]).then(console.log);
