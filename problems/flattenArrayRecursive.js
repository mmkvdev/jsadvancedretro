/**
 * Write a custom function for Array.flat() using recursive approach
 */

const flattenArrayRecursive = (arr) => {
  if (!Array.isArray(arr)) {
    throw new Error("Input is not an Array");
  }

  let result = [];

  for (let element of arr) {
    if (Array.isArray(element)) {
      result.push(...flattenArrayRecursive(element));
    } else {
      result.push(element);
    }
  }

  return result;
};

console.log(flattenArrayRecursive([[[[0]], [1]], [[[2], [3]]], [[4], [5]]])); // [0, 1, 2, 3, 4, 5]
console.log(flattenArrayRecursive([1, [2, [3, [4, [5]]]]])); // [1, 2, 3, 4, 5]
