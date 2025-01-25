const impTest = new Function("num", "return num");

console.log(impTest.__proto__ === Function.prototype); // true

const check = {};
const checkObj = Object.create(check);
console.log(checkObj.__proto__ === check); // true

const impObj = Object.create(impTest);
console.log(impObj.__proto__ === impTest); // true

const impObj1 = Object.create(impTest.prototype);
console.log(impObj1.__proto__ === impTest.prototype); // true
