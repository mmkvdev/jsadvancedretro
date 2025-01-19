/**
 * concat method joins two arrays
 * returns a new array containing the joined arrays
 * it doesn't change the existing array
 * syntax: array1.concat(array2, array3,....,arrayX)
 * it can also be used to join three arrays
 */

const a = [1,2,3];
const b = [4,5,6];

const c = a.concat(b);

console.log({ a, b, c });

const d = [7,8,9];

const e = a.concat(b,c,d);

console.log(e);