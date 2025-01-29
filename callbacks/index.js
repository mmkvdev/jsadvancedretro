// callbacks (or) callback functions

// synchronous
const isOdd = (n) => n % 2 !== 0;

const isEven = (n) => n % 2 === 0;

function filter(numbers, fn) {
  let result = [];

  for (let num of numbers) {
    if (fn(num)) {
      result.push(num);
    }
  }

  return result;
}

const numbers = [1, 2, 3, 4, 5, 6];
console.log(filter(numbers, isOdd));
console.log(filter(numbers, isEven));
console.log(
  filter(numbers, function (num) {
    return num % 3 === 0;
  })
);
