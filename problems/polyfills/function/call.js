/**
 * Polyfill for Function.call() method
 * Syntax: Function.call(thisArg, arg1, arg2, ...)
 */

Function.prototype.myCall = function (thisArg, ...args) {
  // ensure that `this` is a function
  if (typeof this !== "function") {
    throw new TypeError(`provided ${this} is not a function`);
  }

  // if thisArg is not provided, default the value to `globalThis`
  thisArg = thisArg ?? globalThis;

  // attach the contextual function to the provided and invoke it in the context of `thisArg`
  // creating a unique key because we don't know whether the custom function prop exists in the contextual function or not
  const uniqueFnKey = Symbol("fn");
  thisArg[uniqueFnKey] = this;

  const result = thisArg[uniqueFnKey](...args);

  delete thisArg[uniqueFnKey];

  return result;
};

function isPerson(...args) {
  console.log("person name: ", this.name, args);
}

const person = {
  name: "mmk",
};

isPerson.myCall(person);
isPerson.myCall({ name: "varma" });
isPerson.myCall({ name: "calm" });
isPerson.myCall();
isPerson.myCall({ name: "coder" }, 1, 2, 3);
