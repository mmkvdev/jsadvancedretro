// Variable Environment

function two () {
  var isValid;
}

function one () {
  var isValid = true;
  two();
}

var isValid = false;
one();

// stack trace





// global () -> global execution context
   // memory -> one({...}), two({...}), isValid -> undefined