function printName () {
  var c = 'c';
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
