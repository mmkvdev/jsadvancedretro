// create your own myBind method using call (or) apply
Function.prototype.myBind = function (thisArg, ...boundArgs) {
  // check if the function invoking is a function type or not
  if (typeof this !== "function") {
    throw new TypeError("invoking function is not a functio type");
  }

  thisArg = thisArg ?? globalThis;
  let fn = this;
  // return a function
  return function (...args) {
    fn.apply(thisArg, [...boundArgs, ...args]);
  };
};

const isPerson = function (...args) {
  console.log(`this function is binded: ${this.name}`, args);
};

const person = {
  name: "mmk",
};

// with no args
const person1 = isPerson.myBind(person);
console.log(person1()); // this function is binded: mmk`, undefined

// with args
const person2 = isPerson.myBind({ name: "varma" }, 1, 2, 3, 4);
console.log(person2()); // this function is binded: mmk`, 1,2,3,4

// with args and partial args
const person3 = isPerson.myBind({ name: "coder" }, 1, 2);
console.log(person3(3, 4)); // this function is binded: mmk`, 1,2,3,4
