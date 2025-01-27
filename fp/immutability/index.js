// Immutability
const obj = {
  name: "MMK",
};

function clone(obj) {
  return { ...obj };
}

function updateName(obj) {
  const obj2 = clone(obj);
  obj2.name = "Varma";
  return obj2;
}

const updatedObj = updateName(obj);
console.log({ obj, updatedObj });
