// Memory Efficient
const heavyDuty = (index) => {
  const bulkArray = new Array(7997).fill("1");
  console.log("called", bulkArray);
  return bulkArray[index];
};

console.log(heavyDuty(86));
console.log(heavyDuty(86));
console.log(heavyDuty(86));
console.log(heavyDuty(86));
console.log(heavyDuty(86));

const closuredHeavyDuty = () => {
  const bulkArray = new Array(7997).fill("1");
  console.log("called closure ", bulkArray);
  return function (index) {
    return bulkArray[index];
  };
};

const optimalHeavyDuty = closuredHeavyDuty();

console.log(optimalHeavyDuty(86));
console.log(optimalHeavyDuty(86));
console.log(optimalHeavyDuty(86));
console.log(optimalHeavyDuty(86));
console.log(optimalHeavyDuty(86));
console.log(optimalHeavyDuty(700));
console.log(optimalHeavyDuty(860));
