function sum(a, b) {
  return a + b;
}

// curried sum
function curry(f) {
  return function (a) {
    return function (b) {
      return f(a, b);
    };
  };
}

let curriedSum = curry(sum);
// console.log(curriedSum(2)(3));

// sum function that can take many arguments
function sum2(...args) {
  return args.reduce((acc, val) => acc + val);
}

function curryAdv(f) {
  return function curried(...args) {
    if (args.length >= f.length) {
      return f.apply(this, args);
    } else {
      return function (...args2) {
        return curried.apply(this, args.concat(args2));
      };
    }
  };
}

function curryAdv2(f) {
  return function curried(...args) {
    if (args.length >= f.length) {
      return f.apply(this, args);
    }

    curried.bind(this, ...args);
  };
}

let curriedSum2 = curryAdv2(sum2);
console.log(curriedSum2(1, 2, 3));
console.log(curriedSum2(1)(2)(3));
