// using the `new` keyword - with constructor functions
function Person(name, age) {
  this.name = name;
  this.age = age;
}

// `new` keyword allows us to assign the `this` to the object instantiated
const person1 = new Person("peter", 55);
console.log({ person1 });
