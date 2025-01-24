/**
 * Write a custom function for Array.flat() using recursive approach with depth
 */

const flattenArrayRecursiveWithDepth = (arr, depth) => {
  // Validate input
  if (!Array.isArray(arr)) {
    throw new Error("Input must be an array");
  }

  if (depth === 0) {
    return arr;
  }

  let result = [];
  for (let element of arr) {
    if (Array.isArray(element) && depth > 0) {
      result.push(...flattenArrayRecursiveWithDepth(element, depth - 1));
    } else {
      result.push(element);
    }
  }

  return result;
};

console.log(
  flattenArrayRecursiveWithDepth([[[[0]], [1]], [[[2], [3]]], [[4], [5]]], 1)
); // [0, 1, 2, 3, 4, 5]
console.log(flattenArrayRecursiveWithDepth([1, [2, [3, [4, [5]]]]]), 10); // [1, 2, 3, 4, 5]
console.log(
  flattenArrayRecursiveWithDepth([[[[0]], [1]], [[[2], [3]]], [[4], [5]]], 4)
); // Output: [0, 1, 2, 3, 4, 5]

console.log(flattenArrayRecursiveWithDepth([1, [2, [3, [4, [5]]]]], 2)); // Output: [1, 2, 3, [4, [5]]]

console.log(flattenArrayRecursiveWithDepth([1, [2, [3, [4, [5]]]]], 3)); // Output: [1, 2, 3, 4, [5]]
