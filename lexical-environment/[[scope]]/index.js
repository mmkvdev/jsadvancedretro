var x = 'var';

function printName () {
  var c = 'c';
  console.log(x);
  return 'Richard Hendricks';
}

function findName () {
  var b = 'b';
  return printName();
}

function sayMyName () {
  var a = 'a';
  return findName();
}

console.log(sayMyName());

function sayMyName () {
  var a = 'a';
  return function findMyName() {
    var b = 'b';
    return function printMyName() {
      var c = 'c'
      return 'Varma';
    }
  }
}

console.log(sayMyName()()());



var firstNum = 1;

function add () {
  var secondNum = 2;

  return firstNum + secondNum;
}

console.log(add());


a = 1;

var b = 2;

function outer(z) {  
  b = 3;  
  c = 4;  
  var d = 5;  
  e = 6;
  function inner() {    
    var e = 0;    
    d = 2 * d;    
    return d;  
  }  
  return inner();  
  var e;
};


outer(1);



// global - a,b -> 2 | 3, outer

// local - d, e, inner