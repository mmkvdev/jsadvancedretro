// prototypal inheritance

///             Object {}
//               /   \
//            Array[]  Function()

// here the array is created from the base array constructor
const a = [];

// going up the prototype chain using `__proto__` to access the base array constructor
a.__proto__;

// going up to the `Base Object {}` constructor via `__proto__.__proto__`
a.__proto__.__proto__;

function a() {} // created from the Base Constructor Function ()

// accessing `Base Function()` constructor via `__proto__`
a.__proto__;

const a = {}; // created from the Base Object Constructor {}

// accessing `Base Object{}` constructor via `__proto__`
a.__proto__;
