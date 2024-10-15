// call stack advanced example
const addOne = (v) => v + 1;
const addTwo = (v) => addOne(v + 1);
const addThree = (v) => addTwo(v + 1);
const calculate = () => {
    return addThree(1) + addTwo(2);
}

calculate();