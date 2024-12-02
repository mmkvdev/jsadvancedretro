// example 1
for (var i = 1; i < 5; i++) {
    console.log(i);
}

console.log('outer value of i:', i);

// let example

for (let j = 1; j < 5; j++) {
    console.log(j);
}

console.log('outer value of letted i: ', j);


// example 2
var blockScopeName = 'name';

{
    let blockScopeName = 'another name';
}

console.log(blockScopeName);


// example 3
function blockScopeExample () {
    for (let i1 = 0; i1 < 5; i1++) {
        console.log(i1);
    }

    console.log('final value of i: ', i1);
    return i1;
}

blockScopeExample();