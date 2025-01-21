// create a generic multiply function that multiplies two numbers

const multiplyBy = (num1) => (num2) => num1 * num2;

const multiplyByTwo = multiplyBy(2);
console.log(multiplyByTwo(4));
console.log(multiplyByTwo(40));
console.log(multiplyByTwo(420));
