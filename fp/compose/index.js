// compose / composition => right to left

// given a number, we should multiply by 3 and make it positive - compose a function which takes care of these actions

const compose = (a, b) => (data) => a(b(data));
const composeWithReduce =
  (...fns) =>
  (data) =>
    fns.reduce((acc, fn) => fn(acc), data);

const multiplyBy3 = (n) => n * 3;

const makePositive = (n) => Math.abs(n);

const multiplyBy3AndMakePositive = compose(multiplyBy3, makePositive);
const multiplyBy3AndMakePositiveWithReduce = compose(multiplyBy3, makePositive);

console.log(multiplyBy3AndMakePositive(-50));
console.log(multiplyBy3AndMakePositive(-500));
console.log(multiplyBy3AndMakePositive(-150));
console.log(multiplyBy3AndMakePositive(-250));

console.log("Using Reduce");
console.log(multiplyBy3AndMakePositiveWithReduce(-50));
console.log(multiplyBy3AndMakePositiveWithReduce(-500));
console.log(multiplyBy3AndMakePositiveWithReduce(-150));
console.log(multiplyBy3AndMakePositiveWithReduce(-250));
