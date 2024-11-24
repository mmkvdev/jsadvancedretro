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

// example 3
var favouriteFood = 'Sushi';

var foodThoughts = function () {
  console.log('My First food for thought is: ', favouriteFood);
  var favouriteFood = 'Chicken Salad';
  console.log('My New food for thought is: ', favouriteFood);
}

var a1 = () => {
  console.log('My First food for thought is: ', favouriteFood);
  var favouriteFood = 'Chicken Salad';
  console.log('My New food for thought is: ', favouriteFood);
}

a1();
foodThoughts();

// example 4

function bigBrother(){
  function littleBrother() {
    return 'it is me!';
  }
  return littleBrother();
  function littleBrother() {
    return 'no me!';
  }
}

// Before running this code, what do you think the output is?
console.log(bigBrother()); // no me! is the answer