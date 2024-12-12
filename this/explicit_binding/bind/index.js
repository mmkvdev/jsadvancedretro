// `bind` returns a new function with a certain context and parameters
// usually used when we want to call a function at a later point in time with a certain context or a certain type of `this` keyword
const bindExample = {
    name: 'bind example',
    testing () {
        console.log('main: ', this);
        const subTesting = function () {
            console.log('testing: ', this);
        }
        return subTesting.bind(this);
    }
}

const { testing } = bindExample; 
testing()();

bindExample.testing()();


// example 2
const wizard = {
    name: 'Doctor Strange',
    health: 50,
    heal () {
        this.health = 100;
    }
}

const archer = {
    name: 'Wanda',
    health: 30,
}

console.log('before: ', archer);
const newHealMethod = wizard.heal.bind(archer);
newHealMethod();
console.log('after: ', archer);