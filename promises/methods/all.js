/**
 * Promise.all([promise1, promise2, ...])
 * takes in an iterable of promises and waits until all of the promises are resolved
 * aggregate results from multiple asynchronous operations
 */

const promiseConstructor = (timeout, message) => {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, timeout, message);
  });
};

const promise = promiseConstructor(100, "Hello!");
const promise1 = promiseConstructor(1000, "Hello MMK!");
const promise2 = promiseConstructor(5000, "Hello Varma!");

// Promise.all implementation
Promise.all([promise, promise1, promise2]).then((res) => console.log(res));
