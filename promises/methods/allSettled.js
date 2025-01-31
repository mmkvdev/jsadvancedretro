/**
 * Promise.allSettled([promise1, promise2, ...])
 */

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

Promise.allSettled(
  promiseObj.map((promise, index) => promiseFactory({ ...promise, index }))
).then(console.log);

// const p1 = promiseFactory(1000, 1, 10, true);
// const p2 = promiseFactory(2000, 2, 20, false);
// const p3 = promiseFactory(3000, 3, 20, false);

// Promise.allSettled([p1, p2]).then(console.log);
