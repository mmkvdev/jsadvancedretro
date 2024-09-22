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

function subtractTwo (num) {
    return num - 2;
}

// JS Engine allocates memory to this function
function calculate () {
    const sumTotal = 4 + 5;
    return subtractTwo(sumTotal);
}

// so whenever we're calling this function, engine will get this from memory 
calculate();

