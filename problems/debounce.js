function debounce(func, wait = 0) {
  let timeOutId = null;
  return function (...args) {
    const context = this;
    setTimeout(function () {
      clearTimeout(timeOutId);

      timeOutId = setTimeout(function () {
        func.apply(context, args);
      });
    }, wait);
  };
}

let i = 0;

function increment() {
  console.log("function executed");
  i++;
}

const debouncedIncrement = debounce(increment, 100);

debouncedIncrement();

debouncedIncrement();

debouncedIncrement();

for (let i = 0; i < 15; i++) debouncedIncrement();

let a = 10;
const math = debounce((a1, b1) => {
  a += a1 * b1;
}, 10);

math(3, 4);
math(5, 6);

setTimeout(() => {
  console.log({ a });
}, 20);
console.log({ a });
