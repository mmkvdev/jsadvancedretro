// write a memoization function

const memoization = (fn) => {
  let cache = new Map();
  console.log("memoized function");
  // serialize arguments to create a unique key
  const serialize = (value) => {
    console.log("value", value);
    if (typeof value === "object" && value !== null) {
      // normalize the object by sorting it's keys
      const sortedKeys = Object.keys(value).sort();
      console.log({ sortedKeys, value });
      return `{${sortedKeys
        .map((key) => `"${key}":${JSON.stringify(value[key])}`)
        .join(",")}}`;
    }

    return JSON.stringify(value);
  };

  return function (...args) {
    console.log("passed args: ", args);
    const cachedKey = args.map(serialize).join("|");

    console.log("cached key: ", { cachedKey });

    if (cache.has(cachedKey)) {
      console.log("Cache Hit: ", cachedKey);
      return cache.get(cachedKey);
    }

    console.log("Cache Miss: ", cachedKey);
    const result = fn.apply(this, args);
    console.log("result: ", result);
    cache.set(cachedKey, result);

    return result;
  };
};

const sum = (a, b) => a + b;
const objSum = ({ a, b, c }, num) => a + b + c + num;

const memoizedSum = memoization(sum);
const memoizedObjSum = memoization(objSum);

console.log(memoizedSum(2, 3)); // cache miss
console.log(memoizedSum(2, 3)); // cache hit

console.log(memoizedSum("hello", "world")); // cache miss
console.log(memoizedSum("hello", "world")); // cache hit

console.log(memoizedObjSum({ a: 1, b: 2, c: 3 }, 6)); // Cache miss
console.log(memoizedObjSum({ c: 3, b: 2, a: 1 }, 6));
// console.log(memoizedObjSum({ c: 3, b: 2, a: 1 }, { a: 2, b: 3, c: 4})); // Cache miss
// console.log(memoizedObjSum({ c: 3, b: 2, a: 1 }, { a: 2, b: 3, c: 4})); // cache hit
// Cache hit (key order normalized)
console.log(memoizedObjSum({ a: 1, b: 2, c: 3 }, 10)); // Cache miss
console.log(memoizedObjSum({ a: 1, b: 2, c: 3 }, 10)); // Cache hit
