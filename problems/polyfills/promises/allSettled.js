/**
 * Promise.allSettled([promise1, promise2, ...])
 * takes in an iterable of promises and returns a promise that resolves to a value containing an array of objects
 * where each object consists of two properties: `status`: fulfilled (if the promise is fulfilled) or rejected (if the promise is rejected)
 * and `value` (if the promise is fulfilled) or `reason` ((if the promise is rejected)
 */

function promiseAllSettled(promises) {
  return new Promise((resolve) => {
    let results = new Array(promises.length),
      resolvedPromises = 0;

    promises.forEach((promise, index) => {
      Promise.resolve(promise)
        .then((res) => {
          results[index] = {
            status: "fulfilled",
            value: res,
          };
        })
        .catch((err) => {
          results[index] = {
            status: "rejected",
            reason: err,
          };
        })
        .finally(() => {
          resolvedPromises++;

          if (resolvedPromises === promises.length) {
            resolve(results);
          }
        });
    });
  });
}

const promiseObj = [
  {
    timeout: 1000,
    value: 10,
    isReject: false,
  },
  {
    timeout: 2000,
    value: 20,
    isReject: true,
  },
  {
    timeout: 3000,
    value: 30,
    isReject: false,
  },
];

const promiseFactory = ({ timeout, index, value, isReject }) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`p${index + 1} is resolved`);
      isReject ? reject(value) : resolve(value);
    }, timeout);
  });
};

// Promise.allSettled(
//   promiseObj.map((promise, index) => promiseFactory({ ...promise, index }))
// ).then((res) => console.log("native all settled"));

console.log("-------------------custom----------------");
promiseAllSettled(
  promiseObj.map((promise, index) => promiseFactory({ ...promise, index })),
  [],
  true
).then((res) => console.log("custom all settled"));
