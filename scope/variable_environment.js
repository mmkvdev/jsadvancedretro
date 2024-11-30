let test = 'abc';

testing();

// `test` variable takes precedence over global `test` variable -> variable scoping or variable shadowing
function testing () {
    let test = '123';
    console.log({ function_check: test });
}

console.log({ global_check: test });