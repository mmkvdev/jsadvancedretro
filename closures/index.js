function familyFn() {
  let grandpa = "grandpa";
  return function fatherFn() {
    let father = "father";
    return function sonFn() {
      let son = "son";
      return `${grandpa} > ${father} > ${son}`;
    };
  };
}

console.log(familyFn()()());

const boo = (string) => (name1) => (name2) => `${string} ${name1} ${name2}`;

console.log(boo("hello")("mmk")("varma"));
