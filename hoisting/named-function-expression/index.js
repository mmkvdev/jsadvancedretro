const mock = {
  a: function factorial (n) {
    if (n <= 1) {
      return 1;
    }
    return n * factorial(n-1);
  }
}

console.log(mock.a(5));

// "name" property (implicit)
const a = function () {};

console.log('this will print the variable name implicitly: ', a.name)

// "name" property (explicit) - named function expression
const b = function named () {
  
}
console.log('this will print the name of the function definition name explicitly: ', b.name)

// even if the variable is assigned to a different variable, it'll show the same name as previous
const c = a;

console.log('this will still show the previous value even if its assigned to a different variable: ', c.name);

// arrow functions -> behaviour is the same
const a = () => {
  console.log('a is called');
}

const b = a.name
console.log(b);