function add(n1, n2) {
  return n1 + n2;
}

console.log(add(1, 2));

// currying
// transforming a function that takes multiple arguments into a sequence of functions that take in a single argument
const curriedAddFn = (a) => (b) => a + b; // forms a closure
console.log("-----curried-------");
console.log(curriedAddFn(2)(3));
console.log(curriedAddFn(21)(31));
console.log(curriedAddFn(12)(13));
console.log(curriedAddFn(22)(32));
console.log(curriedAddFn(25)(35));

const curriedAddFnRef = curriedAddFn(2);

// after sometime since this forms a closure, the data is preserved in memory for a long time
// Memory Efficient
console.log(curriedAddFnRef(3));
