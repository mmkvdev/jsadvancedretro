// with arrow functions, we can achieve lexical scoping of `this`
const person = {
  name: "MMK",
  type: "calm",
  action: function () {
    // here the value of `this` is determined by where the `inner` function is sitting lexically
    const inner = () => {
      console.log(`inner function: ${this.name}, ${this.setTimeout}`);
    };

    return inner();
  },
};

const callingPersonWithWindow = person.action;
console.log(callingPersonWithWindow());
