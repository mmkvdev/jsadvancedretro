// promise chaining

function generateNum() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(10);
    }, 1000);
  });
}

// execute multiple asynchronous tasks in sequence
generateNum()
  .then((num) => num * 2)
  .then((num) => num * 4)
  .then(console.log);
