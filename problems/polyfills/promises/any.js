/**
 * Promise.any([p1, p2, ...])
 * takes in an iterable of promises and returns a promise that fulfills with the value (which is the result of the fulfilled promise)
 * if all of the promises are rejected, then Promise.any() method is rejected with an `AggregateError` object containing an `errors` property containing all the errors of the rejected reasons
 */

function promiseAny(promises) {
  return new Promise((resolve, reject) => {
    let rejectedPromises = {
      count: 0,
      result: new Array(promises.length),
    };

    if (promises.length === 0) {
      return new AggregateError([]);
    }

    promises.forEach((promise, promiseIndex) => {
      Promise.resolve(promise)
        .then(resolve)
        .catch((err) => {
          rejectedPromises["result"][promiseIndex] = err;
          rejectedPromises["count"] += 1;

          if (rejectedPromises["count"].length === promises.length) {
            reject(new AggregateError(rejectedPromises["result"]));
          }
        });
    });
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

promiseAny([p1, p2, true, ""]).then((res) => {
  console.log("custom promise any", res);
});

Promise.any([p1, p2, true, ""]).then((res) => {
  console.log("native promise any", res);
});
