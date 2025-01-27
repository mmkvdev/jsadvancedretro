// Higher Order Function
const hof = (fn) => (x) => fn(x);

console.log(
  hof(function (x) {
    return x;
  })(5)
);
