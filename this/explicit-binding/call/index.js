const wizard = {
    name: 'Dumbledore',
    health: 50,
    heal () {
        return this.health = 100;
    }
}

const archer = {
    name: 'Batman',
    health: 30
}

wizard.heal.call()

// call application
console.log('before binding the value of this: ', archer);
wizard.heal.call(archer);
console.log('after binding the value of this: ', archer);