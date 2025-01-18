function multiply (factor, number) {
    return factor * number;
}

const double = multiply.bind(null, 2);

console.log(double(5));
console.log(double(7));