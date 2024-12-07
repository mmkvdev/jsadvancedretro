const a = function () {
    console.log('a', this);

    const b = function () {
        console.log('b', this);
        const c = {
            hi: function () {
                console.log('c', this);
            }
        }
        c.hi();
    }

    b();
}

a();

// example 2
const obj = {
    name: 'Arthur',
    fights () {
        console.log('fights: ', this);
        var fight = function () {
            console.log('fight: ', this);
        }

        fight();
    }
}

obj.fights();

// using arrow functions to let the value of this object to be resolved lexically
const arrowObj = {
    name: 'Lex Luthor',
    fights () {
        console.log('fights: ', this);
        var fight = () => {
            console.log('fight: ', this);
        }

        fight();
    }
}

arrowObj.fights();

// using bind method to bind the value of this to the object maintaining the method
const heroObj = {
    name: 'Diana',
    subHeroObj: function () {
        console.log('child obj: ', this);
        const ssHeroObj = function () {
            console.log('ssHeroObj: ', this);
        }
        return ssHeroObj.bind(this);
    }
}

heroObj.subHeroObj()();

// we can also use a referencing variable
const refHeroObj = {
    name: 'reference hero obj',
    action: function () {
        console.log('action: ', this);

        const self = this;
        const refAction = function () {
            console.log('ref action: ', self);
        }

        return refAction;
    }
}

refHeroObj.action()();