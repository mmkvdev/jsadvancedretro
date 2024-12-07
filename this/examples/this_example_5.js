const test1 = {
    name: 'Ashima Kamra',
    love () {
        console.log(this);
    }
}

const test2 = {
    name: 'Madhu',
    love () {
        return function () {
            console.log(this);
        }
    }
}

const test3 = {
    name: 'Ashima - Madhu',
    love () {
        return () => console.log(this);
    }
}

test1.love();
test2.love()();
test3.love()();
