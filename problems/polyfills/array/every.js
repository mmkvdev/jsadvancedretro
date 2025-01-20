/**
 * Array.every();
 * verifies whether all the elements in an array pass the test implemented by the provided function
 * Syntax: every(callbackFn, thisArg)
 * the user provided callback function takes in 3 parameters
 * element - current processed element
 * index - the index of current element
 * array - every() was called upon
 */

Array.prototype.customEvery = function (callbackFn) {
  if (typeof callbackFn !== "function") {
    throw new TypeError(`${callbackFn} is not a function`);
  }

  // iterate over the user input array and check if any element fails the test, in which case return `false` immediately.
  for (let i = 0; i < this.length; i++) {
    if (!callbackFn(this[i], i, this)) {
      return false;
    }
  }

  // return true by default
  return true;
};

const array = [1, 2, 3];

const checkIfAnyValueIsLessThanZero = array.customEvery(
  (currValue) => currValue > 0
);

console.log({ checkIfAnyValueIsLessThanZero });
