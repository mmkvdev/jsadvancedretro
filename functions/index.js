// Function Expression - defined at run time - not hoisted
var canada = function () {
  console.log('cold');
}

// Function Declaration - hoisted - defined at parse time
function india () {
  console.log('warm');
}

// function invocation / function execution / function call
canada();
india();

function marry (person1, person2) {
  console.log(arguments, typeof arguments);

  // converting arguments to array
  console.log('converting arguments to array', Array.from(arguments));
  
  return `${person1} is now married to ${person2}`
}

console.log(marry('josh', 'mary'));

// using rest params
function marry1 (...args) {
  console.log('rest parameters: ', args);
  // converting arguments to array
  console.log('converting arguments to array', Array.from(arguments));
  
  return `${args[0]} is now married to ${args[1]}`
}

console.log(marry1('mark', 'zuck'));