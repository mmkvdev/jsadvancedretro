/**
 * Array.reduce() method
 * Syntax: reduce(callbackFn, initialValue)
 * calls the user-supplied reducer callback function on each element of the array, passing the result of previous computation on to the next.
 * allows you to accumulate values over an array and reduce it to a single output
 * the callbackFn further takes the following parameters:
 * accumulator - value accumulated from the previous computation
 * currentValue - the current array element being processed
 * currentIndex - the current array element index
 * array - the array being iterated over.
 * initialValue - initialValue of the accumulator, if not provided the first element of the array used as the initialValue, and the iteration starts from the second element.
 */

Array.prototype.customReduce = function (callbackFn, initialValue) {
  if (typeof callbackFn !== "function") {
    throw new TypeError(`${callbackFn} is not a function `);
  }
  // set the initialValue to the accumulator
  let accumulator = initialValue !== undefined ? initialValue : this[0];
  // if initialValue is not provided, start the iteration from the second element (i.e., index: 1)
  let startIndex = initialValue !== undefined ? 0 : 1;

  // iterate over each element of the array and apply the `callbackFn` and save the result into accumulator
  for (let i = startIndex; i < this.length; i++) {
    accumulator = callbackFn(accumulator, this[i], i, this);
  }

  return accumulator;
};

const array = [1, 2, 3, 4, 5];

const sumOfAllElementsOfArray = array.customReduce(
  (acc, curr) => acc + curr,
  0
); // 15

// if initialValue is not provided, the accumulator should take the first element of the array as the initialValue and the iteration should start at the second element
const multiplyAllTheElements = array.customReduce((acc, curr) => acc * curr); // 120

// const exceptionAtReduce = array.customReduce();

console.log({ sumOfAllElementsOfArray, multiplyAllTheElements });
