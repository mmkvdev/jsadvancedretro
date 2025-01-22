const obj = {
  name: "MMK",
};

obj.hasOwnProperty("name"); // true

// here `hasOwnProperty` doesn't exist as a native property for `obj` instead it exists as a property up it's scope chain at `Base Object {} constructor`
obj.hasOwnProperty("hasOwnProperty"); // false

function fn() {}

fn.hasOwnProperty("call"); // false

fn.__proto__.hasOwnProperty("call"); // true === Function.prototype

fn.__proto__ === Function.prototype; // true

Function.prototype.__proto__ === Object.prototype;

fn.prototype; // initialized to an empty object

fn.prototype.__proto__; // Base Object
