// Promise.race(iterable)

const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("p1 resolved");
    resolve(10);
  }, 1000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("p2 resolved");
    reject(10);
  }, 2000);
});

Promise.race([p1, p2, 1, true]).then(console.log);
