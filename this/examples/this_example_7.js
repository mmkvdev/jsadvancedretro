const thisExample = {
    name: 'this example',
    test: function () {
        console.log('main: ', this);
        return () => {
            console.log('child: ', this);
        }
    }
}

const refe = thisExample.test();
refe();