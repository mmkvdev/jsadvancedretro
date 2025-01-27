function counter() {
  // closed over variable

  let counter = 1;

  //   return function incrementCounter() {
  //     counter++;
  //     return counter;
  //   };

  return function getCounter() {
    return counter;
  };
}

// const incrementCounterFn = counter();
// console.log(incrementCounterFn());
// console.log(incrementCounterFn());
// console.log(incrementCounterFn());
// console.log(incrementCounterFn());
// console.log(incrementCounterFn());
// console.log(incrementCounterFn());
// console.log(incrementCounterFn());
// console.log(incrementCounterFn());

const getCounterFn = counter();
console.log(getCounterFn());
console.log(getCounterFn());
console.log(getCounterFn());
console.log(getCounterFn());
console.log(getCounterFn());
console.log(getCounterFn());
console.log(getCounterFn());
console.log(getCounterFn());
