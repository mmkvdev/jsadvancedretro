// implicit binding
// `this` will refer to the same object
const person = {
  name: "MMK",
  age: 28,
  action() {
    console.log(`hey ${this.name}`);
  },
};

// `this` depends on how we call the `action` method
console.log({ value: person.action() });
