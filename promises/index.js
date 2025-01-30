const promise = new Promise((resolve, reject) => {
  if (true) {
    resolve("promises resolved");
  }
  reject("promises rejected");
});

// promise chaining
promise
  .then((res) => {
    return `${res} !`;
  })
  .then((res) => console.log(res))
  .catch((err) => console.log(err))
  .then((res) => {
    throw Error;
    console.log(res);
  });
