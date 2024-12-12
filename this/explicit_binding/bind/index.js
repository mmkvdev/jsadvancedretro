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