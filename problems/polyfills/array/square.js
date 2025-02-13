Array.prototype.square = function () {
  let res = [];
  for (let i = 0; i < this.length; i++) {
    res.push(this[i] ** 2);
  }

  return res;
};

console.log([-2].square()); // [4]
console.log([1, 2, 3, 4].square()); // [1, 4, 9, 16]
