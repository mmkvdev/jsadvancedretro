// functions are first class citizens in JS

// 1. functions can be assigned to variables as values and also as values to object properties
const variable = function () {};

const obj = {
  a: () => {},
};

// 2. functions can be passed as arguments to other functions

function fn(f) {
  f();
}

fn(function () {
  console.log("passing function as an argument");
});

// 3. return functions as values from another function
function shared() {
  return function () {
    console.log("return function as values");
  };
}

shared()();

// functions not only perform actions, but are pieces of data that can be shared.
