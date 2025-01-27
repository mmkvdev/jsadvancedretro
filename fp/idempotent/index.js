// Idempotence
// the idea of function always returning some value irrespective of how many times we call it.
function randomNum(num) {
  return Math.random(num);
}

console.log(randomNum(5));
console.log(randomNum(5));
console.log(randomNum(5));
console.log(randomNum(5));
console.log(randomNum(5));
console.log(randomNum(5));

// getting an absolute value
console.log(Math.abs(Math.abs(-50)));
console.log(Math.abs(Math.abs(-150)));
console.log(Math.abs(Math.abs(-510)));
console.log(Math.abs(Math.abs(-250)));
