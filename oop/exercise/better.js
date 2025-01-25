class Character {
  constructor(name, weapon) {
    this.name = name;
    this.weapon = weapon;
  }

  attack() {
    return `attack with ${this.weapon}`;
  }
}

class Elf extends Character {
  constructor(name, weapon, type) {
    // invoke the base class constructor before setting any explicit properties using `this` inside of derived class
    super(name, weapon);
    this.type = type;
  }
}

class Ogre extends Character {
  constructor(name, weapon, color) {
    super(name, weapon);
    this.color = color;
  }

  makeFort() {
    return `strongest fort in the world ever made by: ${this.name}`;
  }
}

console.log({
  proto: Character.prototype,
  test: Elf.__proto__,
});

const fiona = new Elf("Fiona", "ninja stars", "flower");
console.log({ fiona });

const dolby = new Elf("Dolby", "cloth", "house");
console.log({ dolby });

const shrek = new Ogre("Shrek", "club", "green");
console.log(shrek.makeFort(), shrek.attack());
