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