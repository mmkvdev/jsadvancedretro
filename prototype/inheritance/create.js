// create our own prototypes
// avoid using `__proto__`
let human = {
  mortal: true,
};

// `socrates` can inherit from human
let socrates = Object.create(human);
socrates.age = 45;
console.log({
  socrates,
  mortal: socrates.mortal,
  prototype: human.isPrototypeOf(socrates),
  human,
});
