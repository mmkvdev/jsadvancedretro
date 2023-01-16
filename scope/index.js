var x = 1;
a();
b();
console.log(x);

function a () {
    var x = 10;
    console.log(x);
}

function b () {
    var x = 100;
    console.log(x);
}


var firstNum = 1;

// local scope for number - only thirdNum is local to number()    // because it was explicitly declared. secondNum is implicitly declared in the    // the global scope.
function number () {
  secondNum = 2;
  var thirdNum = 3;
  return secondNum + firstNum;
}


// what do we have access to in the global scope?number(); // 3firstNum; // 1secondNum; // 2thirdNum; // Reference Error: thirdNum is not defined

console.log(number());