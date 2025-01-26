class Protected {
  _name;
  constructor(name, age) {
    this._name = name;
    this.age = age;
  }
}

const person1 = new Protected("MMK", 28);
person1._name = 5;
console.log({ person1 });
