/**
 * Create a compose function that takes a series of functions and executes them
 * from right to left on an input value
 */

const compose = (...fns) => {
  //code here
  return function (x) {
    return fns.reduceRight((v, f) => f(v), x);
  };
};

const add5 = (x) => x + 5;
const multiply2 = (x) => x * 2;
const subtract3 = (x) => x - 3;
const toString = (x) => `${x}`;

console.log("Compose");
const result3 = compose(add5, multiply2, subtract3)(10); // (10 - 3) * 2 + 5 = 19;
console.log(result3);
const result4 = compose(toString, add5)(5); // "10"
console.log(result4);
