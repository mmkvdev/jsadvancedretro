/**
 * Polyfill for Array.filter() method
 * Syntax: filter(callbackFn, thisArg)
 * takes in a user-supplied callback function
 * executes this function on each element of the array and only elements that passed the test will be populated in the resultant array
 * parameters:
 * `callback function`
 * the callback function takes the following parameters:
 * element - current element
 * index - index of the current element
 * array - filter() was called upon
 * `thisArg`
 */

Array.prototype.customFilter = function (callback) {
  if (typeof callback !== "function") {
    throw new TypeError(`${callback} is not a function`);
  }
  // result array;
  let result = [];

  // iterate over the user supplied input array
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      result.push(this[i]);
    }
  }

  return result;
};

const array = [1, 2, 3, 4, 5, 6];
const filterEvenNumbers = array.customFilter((x) => x % 2 === 0); // [2, 4, 6]

const filterEvenNumbersException = array.customFilter(); // [2, 4, 6]

console.log({ filterEvenNumbers });
