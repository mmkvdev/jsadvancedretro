Array.prototype.map = function () {
  const result = [];

  for (let i = 0; i < this.length; i++) {
    result.push(`${this[i]}❤️`);
  }

  return result;
};

// #2. modify map() to print ❤️ at the end of each item
console.log([1, 2, 3].map()); // 1❤️, 2❤️, 3❤️
