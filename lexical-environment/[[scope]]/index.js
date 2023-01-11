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