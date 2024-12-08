const explicitThisBinding = function () {
    console.log('this is a function where explicit binding of this happens');
}

explicitThisBinding(); // this is the shorthand
explicitThisBinding.call(); // internally all functions use `call()` while invoking a function
explicitThisBinding.apply(); // call and apply do the same thing at this point