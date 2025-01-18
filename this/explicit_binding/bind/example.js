// bind is often used in event handling to ensure that event handlers have the correct context when executed
const button = document.getElementById('test_button');

function logId () {
    console.log('log id: ', this.id);
}

button.addEventListener('click', logId.bind(button));