const obj = {
    name: 'Clark Kent',
    action: function () {
        return 'Lasering Bad People ' + this.name
    },
    superPowers () {
        return `${this.action()} and Flying High !`
    }
}

obj.action();