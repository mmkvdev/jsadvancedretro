const coreArrowTesting = {
    name: 'core testing',
    testing: function () {
        console.log('main: ', this);
        const subTesting = function () {
            console.log('sub testing: ', this);
            const ssTesting = () => {
                console.log('sub sub testing: ', this);
            }
            ssTesting();
        }
        subTesting();
    }
}

coreArrowTesting.testing();
