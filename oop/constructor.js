// constructor functions

// we can only add properties to `Elf` via this keyword
function Elf(name, weapon) {
  this.name = name;
  this.weapon = weapon;
  var a = 5;
  console.log(this);
}

// attaching an `attack` obj with `Elf` constructor function
Elf.prototype.attack = function () {
  return `attack with ${this.weapon}`;
};

Elf.prototype.age = 30;

Elf.prototype.build = function () {
  function building() {
    return `${this.name} is building a house`;
  }
  return building.bind(this);
};

// `new` keyword returns the object for us, it creates the `elf` constructor i.e., it runs the code and constructs the `elf` function
const peter = new Elf("Peter", "arrow");
const sam = new Elf("Sam", "fire");
console.log(peter.attack());
console.log(peter.build()());
console.log(sam.attack());

console.log({
  peter,
  sam,
  age: [peter.age, sam.age],
  chain: Elf.prototype.isPrototypeOf(peter),
  obj: Elf.prototype,
});

// creating an object using constructor functions
const Elf1 = new Function(
  "name",
  "weapon",
  "this.name=name;this.weapon=weapon"
);

const sarah = new Elf1("Sarah", "Bow");
console.log({
  sarah,
});
