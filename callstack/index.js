// function to compute the max callstack size of the current runtime
function computeMaxStackSize () {
    try {
        return 1 + computeMaxStackSize();
    } catch (e) {
        return 1;
    }
}

console.log(computeMaxStackSize());