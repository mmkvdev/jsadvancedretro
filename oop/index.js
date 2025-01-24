const elf = {
  name: "Orwell",
  weapon: "bow",
  attack() {
    return `attach with ${this.weapon}`;
  },
};

const elf2 = {
  name: "Sally",
  weapon: "bow",
  attack() {
    return `attach with ${this.weapon}`;
  },
};

console.log(elf.attack());
console.log(elf2.attack());
