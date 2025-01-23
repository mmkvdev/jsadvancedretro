let dragon = {
  name: "Tanya",
  fire: true,
  fight() {
    return 5;
  },
  sing() {
    if (this.fire) {
      return `I am ${this.name}, breather of fire`;
    }
  },
};

let lizard = {
  name: "Kiki",
  fight() {
    return 1;
  },
};

const fightTest = dragon.sing.bind(lizard);
console.log(fightTest());

// use prototypal inheritance to inherit all the methods and properties from `dragon` obj
lizard.__proto__ = dragon;
console.log(lizard.fire);
console.log(lizard.sing());

// check if an object is a prototype of another
console.log(dragon.isPrototypeOf(lizard)); // true

console.log(lizard.isPrototypeOf(dragon)); // false

// iterate over lizard to see it's own properties and inherited properties
for (let prop in lizard) {
  // use `hasOwnProperty` to check the native properties of lizard and log accordingly
  if (lizard.hasOwnProperty(prop)) {
    console.log({ prop });
  }
}
