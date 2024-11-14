// it collects the objects that have no references pointing to them.
let person = {
    name: 'Guts',
    age: 27,
    hobbies: ['photography', 'biking']
};

let newPerson = person;

let hobbies = newPerson.hobbies;

person = null;

newPerson = null; 


// example of cyclic references
let son = {
    name: 'John Wick'
};

let dad = {
    name: 'Batman'
};

son.dad = dad;

dad.son = son;

son = null;
dad = null;