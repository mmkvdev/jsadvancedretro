/**
 * Polyfill for Array.map() method
 * Syntax: map(callbackFn, thisArg)
 * creates a new array populated with results of applying the user-provided callback function on every element of the array
 * the user provided callback function takes in 3 parameters
 * element - current processed element
 * index - the index of current element
 * array - map() was called upon
 */

Array.prototype.customArrayMap = function (callback) {
  if (typeof callback !== "function") {
    throw new TypeError(`${callback} is not a function`);
  }

  let result = [];
  // the value of `this` is the user input array
  // for every iteration, invoke the callback and store the result in a result array
  for (let i = 0; i < this.length; i++) {
    result.push(callback(this[i], i, this));
  }

  // return the result array
  return result;
};

const array = [1, 2, 3, 4, 5];
const doubledArrayValues = array.customArrayMap((x) => x * 2); // [2, 4, 6, 8, 10]

// exception cases - when user didn't supply any callback functions
const tripleArrayValues = array.customArrayMap(); // throws a TypeError

console.log({ doubledArrayValues, tripleArrayValues });
