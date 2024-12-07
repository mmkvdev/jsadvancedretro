const obj = {
    name: 'Clark Kent',
    action: function () {
        return 'Lasering Bad People ' + this.name
    }
}

obj.action();

// newer way of defining a function expression 

const objNew = {
    name: 'Bruce Wayne',
    action () {
        return 'Fighting Bad People ' + this.name
    }
}

objNew.action();