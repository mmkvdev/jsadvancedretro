console.log('1');
setTimeout(() => {
    console.log('2');
}, 1000);
console.log('3');

// another example for zero time delay
console.log('1');
setTimeout(() => {
    console.log('2');
}, 0);
console.log('3');