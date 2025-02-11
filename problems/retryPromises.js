const retryPromises = (fn, retries = 3, delay = 1000) => {
  console.log("promise retried");
  return new Promise((resolve, reject) => {
    const attempt = (n) => {
      console.log("attempted");
      fn()
        .then(resolve)
        .catch((err) => {
          console.log("attempts: ", n);
          if (n <= 1) {
            reject(`Retry limit reached: ${n} with ${err}`);
          } else {
            setTimeout(() => {
              attempt(n - 1);
            }, delay);
          }
        });
    };

    attempt(retries);
  });
};

// mock fetch data
const fetchData = () => {
  return new Promise((resolve, reject) => {
    let success = Math.random() > 0.5;

    if (success) {
      resolve("data fetched successfully");
    } else {
      reject("data fetch unsuccessful");
    }
  });
};

// fetchData().then(console.log).catch(console.log);
retryPromises(fetchData, 3, 1000).then(console.log).catch(console.log);
