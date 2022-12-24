// example 1
var one = 1;
var one = 2; // JS Engine ignores this line completely 

console.log(one);

// example 2

// JS Engine rewrites function a's in memory
a();

function a () {
  console.log('one');
}

a(); 
function a () {
  console.log('two');
}

a();