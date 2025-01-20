// type coercion happens with == operator

// == -> equality or abstract comparison
console.log(1 == "1");

// === -> identiity or strict comparison
console.log(1 === "1");

console.log(-0 === +0);

// using Object.is
console.log(Object.is(-0, +0));

// NaN
console.log(NaN === NaN);
console.log(Object.is(NaN === NaN));

// type coercion happens implicitly in javascript
if (1) {
  console.log("coerced to boolean value: true");
}

if (0) {
  console.log(
    "not reachable because the value is coerced to boolean value: false"
  );
}
