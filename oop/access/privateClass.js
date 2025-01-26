class Private {
  #name;
  #age;
  constructor(name, age) {
    this.#name = name;
    this.name = name;
    this.#age = age;
  }
}

// private and public fields don't conflict, we can have both `#name` and `name` in the same class
console.log({ Private });
const person1 = new Private("MMK", 20);
console.log({ public: person1.name });
// console.log({ private: person1.#name });
