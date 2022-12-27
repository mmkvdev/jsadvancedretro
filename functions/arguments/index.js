// arguments object

function checkArgs () {
  console.log(arguments);

  for (let i = 0; i < arguments.length; i++) {
    console.log(arguments[i]);
  }
}

checkArgs(1,2,3,34);

// function that accepts variable no of arguments and returns the longest one

function checkLongestString () {
  let longestString = '';

  // arguments.length -> counting how many argumeents that the function was called with.
  for (let i = 0; i < arguments.length; i++) {
    if (arguments[i].length > longestString.length) {
      longestString = arguments[i];
    };
  }

  return longestString;
}

console.log(checkLongestString('string', 'longest', 'calm'));

// counting how many params a function is declared to accept, inspect that function's length property
console.log(checkLongestString.length);