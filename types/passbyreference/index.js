// pass by reference 

// objects
const obj1 = {
    name: 'Yao',
    password: '123'
}

const obj2 = obj1;

obj2.password = 'check@123';

console.log({ obj1, obj2 });


// arrays
let c = [1,2,3,4];
let d = c;

d.push(23424);

console.log({ c, d });