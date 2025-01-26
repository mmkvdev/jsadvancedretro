class A {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  call() {
    return `calling with ${this.name}`;
  }
}

class B extends A {
  constructor(name, age, type) {
    super(name, age);
    this.type = type;
  }

  // method overriding
  call() {
    return `called by ${this.name} of type: ${this.type}`;
  }
}

const b1 = new B("MMK", 28, "calm");
console.log(b1.call());
