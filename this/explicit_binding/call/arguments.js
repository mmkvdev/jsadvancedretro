const wizard = {
    name: 'Dumbledore',
    health: 50,
    heal (num1, num2) {
        return this.health += 100 + num1 + num2;
    }
}

const archer = {
    name: 'Batman',
    health: 30
}

wizard.heal.call()

// call application
console.log('before binding the value of this: ', archer);
// arguments can be passed as a comma separated list of arguments
wizard.heal.call(archer, 50 ,30);
console.log('after binding the value of this: ', archer);