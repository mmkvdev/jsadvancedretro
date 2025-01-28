// pipe -> left to right composability of functions

// given a number, we've to multiply it by 3 and then convert it to positive
const pipe = (f, g) => (data) => g(f(data));

const multiplyBy3 = (n) => n * 3;
const makePositive = (n) => Math.abs(n);

const multiplyBy3AndMakePositive = pipe(multiplyBy3, makePositive);
console.log("Pipe functions");
console.log(multiplyBy3AndMakePositive(-50));
console.log(multiplyBy3AndMakePositive(-150));
console.log(multiplyBy3AndMakePositive(-520));
console.log(multiplyBy3AndMakePositive(-500));
