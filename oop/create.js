const elfFunctions = {
  attack() {
    return `attack with ${this.weapon}`;
  },
};

// factory function
function createElf(name, weapon) {
  // creating a prototype chain -  prototypal inheritance
  let newElf = Object.create(elfFunctions);
  console.log({
    check: newElf.__proto__,
    test: elfFunctions.isPrototypeOf(newElf),
  });

  newElf.name = name;
  newElf.weapon = weapon;
  return newElf;
}

const elf1 = createElf("Orwell", "bow");
console.log(elf1.attack());

const elf2 = createElf("Sally", "Sword");
console.log(elf2.attack());

for (let prop in elf1) {
  console.log({ prop });
}
