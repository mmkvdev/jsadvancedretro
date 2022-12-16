// interpreters vs compilers
function someCalculation (x, y) {
  return x + y;
}

for (let i = 0; i < 1000; i++) {
  someCalculation(5,4);
  console.log(i);
}