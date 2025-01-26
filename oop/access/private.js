// creating private variables using `closures` - encapsulation
function counter() {
  let counter = 0;

  function incrementCounter() {
    counter++;
  }

  function getCounter() {
    return counter;
  }
  return {
    incrementCounter,
    getCounter,
  };
}

const currentCounter = new counter();
console.log({
  test1: counter.prototype,
  test: typeof currentCounter,
  check: counter.prototype.isPrototypeOf(currentCounter),
});
currentCounter.incrementCounter();
console.log({
  count: currentCounter.getCounter(),
});
