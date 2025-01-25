class Elf {
  constructor(name, weapon) {
    this.name = name;
    this.weapon = weapon;
  }

  attack() {
    return `attack with ${this.name}`;
  }
}

const fiona = new Elf("Fiona", "ninja stars");

// copy `fiona` using spread operator
const ogre = { ...fiona };
ogre.__proto__ = fiona;
console.log({
  fiona,
  ogre,
  prototypes: {
    fiona: fiona.__proto__,
    ogre: ogre.__proto__,
    check: ogre.__proto__ === fiona.prototype,
    check_1: fiona.__proto__ === Elf.prototype,
  },
  invoke: ogre.attack(),
});
