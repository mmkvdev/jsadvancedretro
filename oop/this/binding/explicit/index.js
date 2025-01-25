// explicit binding
// dictate exactly what the value of `this` should be

const person = {
  name: "MMK",
  type: "calm",
  action: function () {
    console.log(
      `explicitly binding window to the current this object ${this.setTimeout}`
    );
  }.bind(global),
};

// explicit binding of `this` is by using call(), apply() and bind() methods
console.log(person.action());
