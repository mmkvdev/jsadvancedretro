console.log('1');
setTimeout(() => {
  console.log('2');
}, 1000);
console.log('3');


//fill array with 60000 elements

const list = new Array(60000).join('1.1').split('.');

function removeItemsFromList() {
    var item = list.pop();

    console.log(list, item);
    if (item) {
        setTimeout(removeItemsFromList, 0);
    }
};
 
removeItemsFromList();

//1
setTimeout(()=>{console.log('1', 'is the loneliest number')}, 0)
setTimeout(()=>{console.log('2', 'can be as bad as one')}, 10)

//2
Promise.resolve('hi').then((data)=> console.log('2', data))

//3
console.log('3','is a crowd')



function printHello() {
    console.log('Hello from baz');
}

function baz() {
    setTimeout(printHello, 10000);
}

function a () {
    baz();
}

function b () {
    a();
}

function c () {
    b();
}
function bar() {
    c();
}

function foo() {
    bar();
}

foo();