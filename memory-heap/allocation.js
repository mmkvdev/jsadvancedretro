// JS Engine allocates memory for this in the heap. The actual values are still primitive, which is why they're stored in the stack
const person = {
    name: 'Guts',
    age: 27
};

// arrays are objects, so they're stored in the heap.
const hobbies = ['photography', 'biking'];

let falconWarriorName = 'Griffith'; // allocates memory for a string
const age = 27; // allocates memory for a number

falconWarriorName = 'Warrior'; // allocates memory for a new string
const firstName = falconWarriorName.slice(0,4);

console.log(firstName);

/**
 * Primitive values are immutable, which means that instead of changing the original value, JS creates a new one
 */