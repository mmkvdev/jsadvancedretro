// synchronous
[1,2,3,4].forEach((ele) => {
    console.log(ele);
});

// asynchronous version
function asyncForEach (array, cb) {
    array.forEach((ele) => {
        setTimeout(() =>{
            cb(ele);
        }, 0);
    });

    // function (ele) {
    //     setTimeout(cb(ele), 0);
    // }
};

asyncForEach([1,2,3,4], (ele) => {
    console.log('async: ', ele);
});