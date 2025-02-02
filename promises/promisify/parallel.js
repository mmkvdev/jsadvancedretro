const promisify = (item, delay) =>
  new Promise((resolve) => setTimeout(() => resolve(item), delay));

// parallel (at the same time)

const p1 = promisify(1, 10);
const p2 = promisify(2, 100);
const p3 = promisify(3, 1000);

async function parallel() {
  const [output1, output2, output3] = await Promise.all([p1, p2, p3]);
  console.log("parallel execution of promises: ", {
    output1,
    output2,
    output3,
  });
}

parallel().then(console.log);
