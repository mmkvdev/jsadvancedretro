/**
 * Promise.reject(reason) returns a `Promise` object that is rejected with a given reason.
 * it always wraps `reason` in a new `Promise` object, even when `reason` is already a promise.
 */

function customPromiseRejectMethod(reason) {
  return new Promise((_, reject) => reject(reason));
}

customPromiseRejectMethod("test rejection at custom method").catch(console.log);
Promise.reject("test rejection from reject static method").catch(console.log);
