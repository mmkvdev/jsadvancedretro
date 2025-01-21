// regular invocation
function a() {
  return 4;
}

a();

// method invocation
const obj = {
  name() {
    return "mmk";
  },
};

// since we're invoking the name method as a context of obj, the this value inside the name method is `obj`
obj.name();

// indirect invocation

function b() {
  return 4;
}

b.call();

// constructor invocation
const functionConstructor = new Function("num", "return num");
functionConstructor(4);
