// copying an object without modifying the original value - SHALLOW CLONE

let obj = {
    a: 'a',
    b: 'b',
    c: 'c'
};

// using Object.assign
let clone = Object.assign({}, obj);

// using spread operator -> allows iterables (arrays / strings / objects) to be expanded into single arguments / elements
let clone2 = {...obj};

obj.c = 5;

console.log({ obj, clone, clone2 });

// what if the original object has a property which has non-primitive / referencial values
let complexObj = {
    a: 'a',
    b: 'b',
    c: 'c',
    d: {
        deep: 'try and copy me'
    }
};

// shallow clone
let complexClone_1 = Object.assign({}, complexObj);
let complexClone_2 = {...complexObj};

// deep cloning -> JSON.parse
let superClone = JSON.parse(JSON.stringify(complexObj));

// high level change
complexObj.d = 5;

// change it at a deep level
complexObj.d.deep = 'I have surpassed you!';

console.log({ superClone, complexObj, complexClone_1, complexClone_2 });
