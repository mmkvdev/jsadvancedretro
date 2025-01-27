// pure functions - no side effects

// same input -> same output

// function with side effects

// shared state
const array = [1, 2, 3];

function mutateArray(arr) {
  arr.pop();
}

function mutateArray2(arr) {
  arr.forEach(() => arr.push(1));
}

// mutateArray(array);
console.log(array);
// mutateArray2(array);
console.log(array);

// purifying the above functions
function removeLastItem() {
  const newArray = [...array];
  newArray.pop();
  return newArray;
}

function multiplyByTwo() {
  return array.map((arr) => arr * 2);
}

const array2 = removeLastItem();
const array3 = multiplyByTwo();
console.log({ array, array2, array3 });

// classic pure functions
function add(num1, num2) {
  return num1 + num2;
}

console.log(add(1, 2));
console.log(add(5, 6));
