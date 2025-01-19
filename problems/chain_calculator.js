/**
 * How would you implement a calculator class with methods for addition, subtraction, and multiplication, supporting method chaining?
 */

// calculator.add(3).multiply(4).subtract(5).getValue()

class Calculator {
  // write code here
  constructor(initialValue = 0) {
    this.value = initialValue;
  }

  add(val) {
    console.log({
      add_test: this,
    });
    this.value += val;
    return this;
  }

  subtract(val) {
    console.log({
      sub_test: this,
    });
    this.value -= val;
    return this;
  }

  multiply(val) {
    console.log({
      mul_test: this,
    });
    this.value *= val;

    return this;
  }

  divide(val) {
    console.log({
      div_test: this,
    });
    if (val !== 0) {
      this.value /= val;
    }

    return this;
  }

  getValue() {
    console.log({
      get_test: this,
    });

    return this.value;
  }
}

const calculator = new Calculator(2);
console.log(calculator.add(3).multiply(4).subtract(5).divide(5).getValue()); // 3
