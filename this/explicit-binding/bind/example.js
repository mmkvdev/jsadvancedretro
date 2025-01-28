// bind is often used in event handling to ensure that event handlers have the correct context when executed
const button = document.getElementById('test_button');

function logId () {
    console.log('log id: ', this.id);
}

button.addEventListener('click', logId.bind(button));



// using spread operator to send a variable number of arguments to the shared method of the contextual object
const wizard = {
  name: "test",
  health: 50,
  heal(...args) {
    console.log({ args })
    this.health += 100 + args[0]
  },
}

const archer = {
  name: "archer",
  health: 30,
}

const testing = wizard.heal.bind(archer, 1, 2, 3, 4)

console.log({ test: testing(5,6), archer, wizard })
