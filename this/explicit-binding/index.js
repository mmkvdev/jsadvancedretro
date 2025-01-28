const explicitThisBinding = function () {
    console.log('this is a function where explicit binding of this happens');
}

// all functions when created have a property `call` that allows us to call the function
explicitThisBinding(); // this is the shorthand
explicitThisBinding.call(); // internally all functions use `call()` while invoking a function
explicitThisBinding.apply(); // call and apply do the same thing at this point