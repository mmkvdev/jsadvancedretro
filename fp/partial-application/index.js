// partial-application
function multiply(a, b, c) {
  return a * b * c;
}

// partial-function application
const partialMultiply = multiply.bind(null, 4);
console.log(partialMultiply(4, 5));

// currying implementation - expect one argument at a time
const curriedMultiply = (a) => (b) => (c) => a * b * c;
const curriedMultiplied = curriedMultiply(2);
console.log(curriedMultiplied(2)(3));
