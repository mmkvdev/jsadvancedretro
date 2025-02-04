/*
- Write method findPath
- Should take two params:
    - object
    - keys separated by dots as string
- Return value if it exists at that path inside the object, else return undefined
*/
var obj = {
  a: {
    b: {
      c: 12,
      j: false,
    },
    k: null,
  },
  f: () => ({
    a: 23,
    b: () => {},
  }),
  p: new Promise((r) => {
    r({ a: 20 });
  }),
};
// console.log(obj.a.then(res=>console.log(res)))
// if(obj.p.then){
//     console.log(obj.p.then(res=>console.log(res)))
// }
const findPath = async (object, path) => {
  // if the path is empty, return the original passed object
  if (!path) return object;

  const keys = path.split(".");

  let current = object;
  for (const key of keys) {
    // if the current level of the object is not an object / is null / if the key doesn't exist in the object, return `undefined`
    if (typeof current !== "object" || current === null || !(key in current))
      return undefined;

    current = current[key];

    if (current instanceof Promise) {
      try {
        current = await current;
      } catch (err) {
        return undefined;
      }
    }
  }

  return current;
};

findPath(obj, "a.b.c").then((result) => console.log(result)); // 12
findPath(obj, "a.b").then((result) => console.log(result)); // {c: 12, j: false}
findPath(obj, "a.b.d").then((result) => console.log(result)); // undefined
findPath(obj, "a.c").then((result) => console.log(result)); // undefined
findPath(obj, "a").then((result) => console.log(result)); // { b: { c: 12, j: false }, k: null }
findPath(obj, "").then((result) => console.log(result)); // obj
findPath(obj, "a.b.c.d").then((result) => console.log(result)); // undefined
findPath(obj, "a.b.c.d.e").then((result) => console.log(result)); // undefined
findPath(obj, "a.b.j").then((result) => console.log(result)); // false
findPath(obj, "a.b.j.k").then((result) => console.log(result)); // undefined
findPath(obj, "a.k").then((result) => console.log(result)); // null
findPath(obj, "a.k.j").then((result) => console.log(result)); // undefined
findPath(obj, "f").then((result) => console.log(result)); // [function]
findPath(obj, "f.a").then((result) => console.log(result)); // 23
findPath(obj, "f.b").then((result) => console.log(result)); // function
findPath(obj, "f.b.c").then((result) => console.log(result)); // undefined
findPath(obj, "p").then((result) => console.log(result)); // [Promise]
findPath(obj, "p.a").then((result) => console.log(result)); // 20
