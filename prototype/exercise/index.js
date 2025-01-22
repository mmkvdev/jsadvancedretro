// exercise - extend the functionality of a built in object

Date.prototype.lastYear = function () {
  return this.getFullYear() - 1;
};

// #1. Date Object => to have method .lastYear() which shows you last year `YYYY` format
console.log(new Date("1900-10-10").lastYear()); // 1899
console.log(new Date().lastYear()); // 2024

Array.prototype.map = function () {
  const result = [];

  for (let i = 0; i < this.length; i++) {
    result.push(`${this[i]}❤️`);
  }

  return result;
};

// #2. modify map() to print ❤️ at the end of each item
console.log([1, 2, 3].map()); // 1❤️, 2❤️, 3❤️
