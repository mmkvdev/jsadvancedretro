// creating a factory function that creates objects for us

const elfFunctions = {
  attack() {
    return `attack with ${this.weapon}`;
  },
};

function createElf(name, weapon) {
  return {
    name,
    weapon,
  };
}

const elf1 = createElf("Orwell", "bow");
elf1.attack = elfFunctions.attack;
console.log(elf1.attack());

const elf2 = createElf("Sally", "Sword");
elf2.attack = elfFunctions.attack;
console.log(elf2.attack());
