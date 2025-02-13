/**
 * Implement a function clamp(number, lower, upper) to restrict a number within the inclusive lower and upper bounds.
 * Arguments
 * value (number): The number to clamp.
 * lower (number): The lower bound.
 * upper (number): The upper bound.
 */

function clamp(value, lower, upper) {
  if (value < lower) {
    return lower;
  }

  if (value > upper) {
    return upper;
  }

  return value;
}

// Within the bounds, return as-is.
console.log(clamp(3, 0, 5)); // => 3

// Smaller than the lower bound.
console.log(clamp(-10, -3, 5)); // => -3

// Bigger than the upper bound.
console.log(clamp(10, -5, 5)); // => 5
