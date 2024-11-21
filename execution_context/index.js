function printName () {
    return 'Berserk Guts';
}

function findName () {
    return printName();    
}

function sayMyName() {
    return findName();
}

console.log(sayMyName());