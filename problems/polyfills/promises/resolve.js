/**
 * Promise.resolve(value)
 * we can add a safe wrapper around any value such that it can be used with `then()` or `await`
 * if the value is a native `Promise`, return the value directly
 * if the value is not thenable, return a `Promise` that's fulfilled with the value. We can use `Promise` constructor that calls `resolve` with the value
 * if the value is thenable, the `then()` method will be called. The `then()` method has the same signature as that of a `Promise` constructor
 */

function promiseResolve(value) {
  if (value instanceof Promise) {
    return value;
  }

  if (typeof value.then === "function") {
    return new Promise(value.then.bind(value));
  }

  return new Promise((resolve) => resolve(value));
}

const promise = promiseResolve(42).then(console.log);
const original = new Promise((resolve) => resolve(42));
const cast = promiseResolve(original).then(console.log);

const resolveThenable = promiseResolve({
  then(resolve, reject) {
    resolve(42);
  },
}).then(console.log);
