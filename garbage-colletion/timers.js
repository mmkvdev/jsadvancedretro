const object = {};

const intervalId = setInterval(function () {
    // everything used in here can't be collected until the interval is cleared
    doSomething(object);
}, 2000);

clearInterval(intervalId);