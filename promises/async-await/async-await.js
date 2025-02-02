// `async` keyword allows you to define a function that handles asynchronous operations

// to define an `async` function, you place the `async` keyword infront of the function keyword.

// `async` functions always return a `Promise`
async function sayHi() {
  return "Hi";
}

// sayHi().then(console.log);

// function expressions
let sayHiFE = async function () {
  return "Hi";
};

// arrow functions
let sayHiArrow = async () => "Hi";
// sayHiArrow.then((res) => console.log("async functions with arrows", res));

// Class Methods
class Greeter {
  async sayHi() {
    return "Hi";
  }
}

async function getGreetings() {
  const fromFE = await sayHiFE();
  const fromArrow = await sayHiArrow();

  const greetAsyncWithClass = new Greeter();
  const fromClass = await greetAsyncWithClass.sayHi();

  console.log({ fromFE, fromArrow, fromClass });
}

// getGreetings();
// sayHiFE.then((res) => console.log("async functions with expressions", res));

// const greetAsync = new Greeter();
// greetAsync
//   .sayHi()
//   .then((res) => console.log("async functions with classes", res));

// error handling
async function errorHandling() {
  await Promise.reject("Promise Rejected to test error handling");
}

async function errorHandling1() {
  await Promise.reject("Promise Rejected to test error handling1");
}

async function errorHandling2() {
  await Promise.reject("Promise Rejected to test error handling2");
}

async function checkError() {
  try {
    const error = await errorHandling();
    const error1 = await errorHandling1();
    const error2 = await errorHandling2();
    console.log({ error });
  } catch (err) {
    console.log(`Captured at try/catch block: ${err}`);
  }
}

checkError();
