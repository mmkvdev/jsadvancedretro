// memory leaks
let array = [];

for (let i = 5; i > 1; i++) {
    array.push(i-1);
}

// three common memory leaks

// 1. Global Variables
var a = 1;
var b = 2;
var c = 3;

// what if global variables have deeply nested objects? it keeps adding to memory but never get's cleaned up

// 2. event listeners
var element = document.getElementById("button");
element.addEventListener('click', onClick);

// 3. setInterval function
setInterval(() => {

});