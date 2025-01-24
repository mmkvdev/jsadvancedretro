// initialise a number by invoking Number constructor
const a = new Number(5);
console.log(typeof a);

const b = 5; // syntatic sugar for new Number(5)
console.log(typeof b);

console.log(a === b);

// when we try to access a property on a primitive value, JS Engine wraps this primitive value with it's associated constructor function
const b1 = 5;

// access `toString()` on b1
b1.toString();

b1.__proto__; // => points to Number.prototype
