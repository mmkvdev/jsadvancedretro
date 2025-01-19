const a = {
    name: 'test 1',
    say () {
        console.log(this);
    }
};

const b = {
    name: 'test 2',
    say () {
        return function () {
            console.log(this);
        }
    }
};

const c = {
    name: 'test 3',
    say () {
        return () => console.log(this);
    }
};

console.log(a.say());

console.log(b.say()());

console.log(c.say()());