const promisify = (item, delay) =>
  new Promise((resolve) => setTimeout(() => resolve(item), delay));

// parallel (at the same time)
// sequentail (in order - relational)
// race (FIFO)

const p1 = promisify(1, 10);
const p2 = promisify(2, 100);
const p3 = promisify(3, 1000);

async function race() {
  const output = await Promise.race([p1, p2, p3]);
  console.log("race execution of promises:", { output });
}

async function sequence() {
  const output1 = await p1;
  const output2 = await p2;
  const output3 = await p3;

  console.log("sequential execution of promises: ", {
    output1,
    output2,
    output3,
  });
}

async function parallel() {
  const [output1, output2, output3] = await Promise.all([p1, p2, p3]);
  console.log("parallel execution of promises: ", {
    output1,
    output2,
    output3,
  });
}

parallel().then(console.log);
race().then(console.log);
sequence().then(console.log);
