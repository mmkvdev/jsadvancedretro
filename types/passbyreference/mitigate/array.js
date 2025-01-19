// copying an array without modifying the original value

const a = [1,2,3];

// using concat method of an array
const b = [].concat(a);

b.push(7);

console.log({ a, b });