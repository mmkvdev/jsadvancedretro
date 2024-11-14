// this creates a new object in the heap and reference to it in the stack
const person = {
    id: 1,
    name: 'Guts',
    age: 27
};

const dog = {
    name: 'Scooby',
    id: 1,
}

function getOwner (dog, persons) {
    return persons.find((person) => person.id === dog.id);
}

const name = 'Griffith';

const newPerson = person;