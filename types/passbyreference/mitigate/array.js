// copying an array without modifying the original value

const a = [1,2,3];

// using concat method of an array
const b = [].concat(a);

b.push(7);

console.log({ a, b });

// shallow copy of array
const arrInit = [1,2,[3]];

const shallowArrInit = [...arrInit];

shallowArrInit[0] = 5;
shallowArrInit[2][0] = 6;
console.log({ arrInit, shallowArrInit });