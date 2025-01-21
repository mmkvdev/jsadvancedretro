/**
 * Polyfill for Function.bind() method
 * Syntax: Function.bind(thisArg, arg1, arg2)
 */

Function.prototype.customBindMethod = function (thisArg, ...bindArgs) {
  if (typeof this !== "function") {
    throw new TypeError(`provided ${this} is not a function`);
  }

  thisArg = thisArg ?? globalThis;

  let fn = this;
  return function (...args) {
    // invoke the contextual function with the provided `thisArg`
    return fn.apply(thisArg, [...bindArgs, ...args]);
  };
};

function isPerson(...args) {
  console.log(`value of person is ${this.name}`, args);
}

const customResult = isPerson.customBindMethod({ name: "mmk" });
customResult();

const customResultWithNoExplicitThis = isPerson.customBindMethod({
  name: "varma",
});
customResultWithNoExplicitThis();

const customResultWithArgs = isPerson.customBindMethod(
  { name: "coder" },
  1,
  2,
  3,
  4
);
customResultWithArgs();

const customResultWithPartialArgs = isPerson.customBindMethod(
  { name: "coder" },
  1,
  2
);
customResultWithPartialArgs(3, 4);

function multiply(factor, number) {
  return factor * number;
}

const result = multiply.customBindMethod(null, 2);

console.log(result(4));
