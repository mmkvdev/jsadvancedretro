// Blueprint for `Elf` object

// classes are just syntatic sugar for prototypal inheritance using `new` keyword
// Pseudo Classical Inheritance
class Elf {
  constructor(name, weapon) {
    this.name = name;
    this.weapon = weapon;
  }

  attack() {
    return `attack with ${this.weapon}`;
  }
}

// instance for `Elf` object
// instantiation
const peter = new Elf("Peter", "bow");
// instanceof
console.log(peter instanceof Elf);
console.log(peter.attack());

const sarah = new Elf("Sarah", "ice");
console.log(sarah instanceof Elf);
console.log(sarah.attack());
