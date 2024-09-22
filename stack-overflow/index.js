// this recursive function causes stack overflow

// so whenever a function execution records an error, callstack generates a stack trace, which is basically state of the stack (stack frame) where the error happened or the snapshot of the code execution at a stack frame

function inception () {
    inception ();
}

inception();