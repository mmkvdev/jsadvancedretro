/**
 *
 * @param {number} initialValue
 * @returns a function that increments the initialValue
 * Implement a function makeCounter that accepts an optional integer value
 * and returns a function. When the returned function is called initially,
 * it returns the initial value if provided, otherwise 0.
 * The returned function can be called repeatedly to return 1
 * more than the return value of the previous invocation.
 */
const makeCounter = (initialValue = 0) => {
  return () => {
    initialValue++;
    return initialValue;
  };
};

const counter = makeCounter();
console.log(counter()); // 0
console.log(counter()); // 1
console.log(counter()); // 2

const countWith5 = makeCounter(5);
console.log(countWith5()); // 0
console.log(countWith5()); // 1
console.log(countWith5()); // 2
