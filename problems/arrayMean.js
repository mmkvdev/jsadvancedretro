/**
 * Implement a function mean(array) that returns the mean (also known as average) of the values inside array, which is an array of numbers.
 */

const arrayMean = (array) => {
  return array.reduce((a, b) => a + b, 0) / array.length;
};
