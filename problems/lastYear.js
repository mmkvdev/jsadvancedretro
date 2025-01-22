Date.prototype.lastYear = function () {
  return this.getFullYear() - 1;
};

// #1. Date Object => to have method .lastYear() which shows you last year `YYYY` format
console.log(new Date("1900-10-10").lastYear()); // 1899
console.log(new Date().lastYear()); // 2024
