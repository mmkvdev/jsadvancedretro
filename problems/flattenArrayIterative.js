/**
 * Write a custom function for Array.flat() using iterative approach
 */

const flattenArrayIterative = (arr) => {
  const res = [];
  const arrClone = arr.slice();

  while (arrClone.length) {
    const item = arrClone.shift();
    if (Array.isArray(item)) {
      // order preservation
      arrClone.unshift(...item);
    } else {
      res.push(item);
    }
  }

  return res;
};

// Test case for Iterative Approach
console.log(flattenArrayIterative([[[[0]], [1]], [[[2], [3]]], [[4], [5]]])); // [0, 1, 2, 3, 4, 5]
console.log(flattenArrayIterative([1, [2, [3, [4, [5]]]]])); // [1, 2, 3, 4, 5]
