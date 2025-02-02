const promisify = (item, delay) =>
  new Promise((resolve) => setTimeout(() => resolve(item), delay));

// sequentail (in order - relational)

const p1 = promisify(1, 10);
const p2 = promisify(2, 100);
const p3 = promisify(3, 1000);

async function sequence() {
  const output1 = await p1;
  const output2 = await p2;
  const output3 = await p3;

  console.log({ output1, output2, output3 });
}

sequence().then(console.log);
