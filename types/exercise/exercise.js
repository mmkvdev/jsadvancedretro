const number = 100;
const string = "cool";

let obj1 = {
  value: "a",
};

let obj2 = {
  value: "b",
};

let obj3 = obj2;

function change(number, string, obj1, obj2) {
  number = number * 10;
  string = "Reacher";
  obj1 = obj2; // only changes the local reference within the function scope
  obj2.value = "Jack";
  console.log({ obj1, obj2 });
}

// here we're sending copy of references of obj1 and obj2 to function `change`
change(number, string, obj1, obj2);
console.log({ obj1, obj2 });

console.log({ number, string, value: obj1.value, obj1, obj2 });
