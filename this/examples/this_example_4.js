// gives methods access to their object
// execute same code for multiple objects
// achieving DRY
function importantPerson () {
    console.log('contextual name: ', this.name);
}

const name = 'Seattle';
const obj1 = {
    name: 'Test Obj 1',
    importantPerson: importantPerson
}

const obj2 = {
    name: 'Test Obj 2',
    importantPerson: importantPerson
}

obj1.importantPerson();
obj2.importantPerson();