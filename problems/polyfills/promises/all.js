/**
 * Promise.all(iterable)
 * takes in an iterable of promises and returns a promise that resolves to a value which is an array containing results of input promises
 * rejects immediately by returning a value with rejection reason if any one of the input promise is rejected (first rejected promise)
 */

function promiseAll(iterable) {
  return new Promise((resolve, reject) => {
    let results = new Array(iterable.length);
    let resolvedPromises = 0;

    if (results.length === 0) {
      resolve(results);
      return;
    }
    iterable.forEach((item, index) => {
      Promise.resolve(item)
        .then((res) => {
          results[index] = res;
          resolvedPromises++;

          if (resolvedPromises === iterable.length) {
            resolve(results);
          }
        })
        .catch(reject);
    });
  });
}

const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(10);
  }, 5000);
});

const p2 = 4;

const p3 = Promise.resolve(5);

promiseAll([p1, p2, p3, []]).then(console.log);
