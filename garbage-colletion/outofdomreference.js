// occurs when storing DOM elements in JS

const elements = [];
const element = document.getElementById('button');
elements.push(element);

function removeAllElements() {
    elements.forEach((item) => {
        document.body.removeChild(document.getElementById(item.id));
    })
}


// when you remove any of these elements, you'll probably want to make sure to remove this element from the array as well
// otherwise the DOM elements won't be collected

// improved function

function removeAllElements() {
    elements.forEach((item, index) => {
        document.body.removeChild(document.getElementById(item.id));
        elements.splice(index, 1);
    })
}

// removing the element from the array keeps it in sync with the DOM