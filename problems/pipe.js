/**
 * Create a pipe function that takes a series of functions and executes them
 * from left to right on an input value.
 */

const pipe = (...fns) => {
  // code here
  return function (x) {
    return fns.reduce((v, f) => f(v), x);
  };
};

const add5 = (x) => x + 5;
const multiply2 = (x) => x * 2;
const subtract3 = (x) => x - 3;
const toString = (x) => `${x}`;

console.log("Pipe");

const result1 = pipe(add5, multiply2, subtract3)(10); // (10 + 5) * 2 - 3 = 27
console.log(result1);

const result2 = pipe(toString, add5)(5); // "5" + 5 = "55"
console.log(result2);
