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