// Memoization

function addEightyToN(n) {
  return n + 80;
}

let cache = {};

function memoisedAddEigthyToN(n) {
  if (n in cache) {
    console.log("fetched from cache");
    return cache[n];
  }

  console.log("stored in cache");
  cache[n] = n + 80;
  return cache[n];
}

// console.log(addEightyToN(5));
// console.log(addEightyToN(5));
// console.log(addEightyToN(5));
// console.log(addEightyToN(5));
// console.log(addEightyToN(5));

// console.log(memoisedAddEigthyToN(5));
// console.log(memoisedAddEigthyToN(5));
// console.log(memoisedAddEigthyToN(5));
// console.log(memoisedAddEigthyToN(5));
// console.log(memoisedAddEigthyToN(5));

// closures + memoization => Dynamic Programming
function memoizedAddToNWithClosures() {
  let cache = {};
  return function (n) {
    if (n in cache) {
      return cache[n];
    }

    console.log("stored in cache");
    cache[n] = n + 80;
    return cache[n];
  };
}

const memoisedAddEigthyToNWithClosuresFn = memoizedAddToNWithClosures();
console.log(memoisedAddEigthyToNWithClosuresFn(5));
console.log(memoisedAddEigthyToNWithClosuresFn(5));
console.log(memoisedAddEigthyToNWithClosuresFn(5));
console.log(memoisedAddEigthyToNWithClosuresFn(5));
console.log(memoisedAddEigthyToNWithClosuresFn(5));
console.log(memoisedAddEigthyToNWithClosuresFn(5));
console.log(memoisedAddEigthyToNWithClosuresFn(5));
console.log(memoisedAddEigthyToNWithClosuresFn(5));
