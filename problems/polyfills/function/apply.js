/**
 * Polyfill for Function.apply() method
 * Syntax: Function.apply(thisArg, [arg1, arg2, ...])
 */

Function.prototype.customApply = function (thisArg, args) {
  // ensure that `this` is a function
  if (typeof this !== "function") {
    throw new TypeError(`provided ${thisArg} is not a function`);
  }

  if (!Array.isArray(args)) {
    throw new TypeError("provided arguments must be of type array");
  }

  // if user didn't provided the `thisArg`, default to `globalThis`
  thisArg = thisArg ?? globalThis;

  // inject the contextual function to the provided `thisArg`
  const uniqueFnKey = Symbol("fn");
  thisArg[uniqueFnKey] = this;

  const result = thisArg[uniqueFnKey](...args);

  delete thisArg[uniqueFnKey];

  return result;
};

function isPerson(args) {
  console.log(`person name is ${this.name}`, args);
}

// default case
isPerson.customApply({
  name: "mmk",
});

// when thisArg is passed as null
isPerson.customApply();

// when there are array of arguments
isPerson.customApply(
  {
    name: "mmk",
  },
  [1, 2, 3]
);
