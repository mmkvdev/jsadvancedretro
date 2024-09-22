// call stack + memory heap

const number = 610; // allocate memory to `number` variable and let it point to `610` in memory
const string = 'some text'; // allocate memory to `string` variable and let it point to `some text` in memory

// allocate memory to `object` variable and it's properties and can be accessible anytime
const object = {
    firstName: 'Memory',
    lastName: 'Heap'
};

// so whenever we try to access string variable, it'll get `some text` from memory
console.log({ string }); 

console.log({ object }); 

