const promisify = (item, delay) =>
  new Promise((resolve) => setTimeout(() => resolve(item), delay));

// race (FIFO)

const p1 = promisify(1, 10);
const p2 = promisify(2, 100);
const p3 = promisify(3, 1000);

async function race() {
  const output = await Promise.race([p1, p2, p3]);
  console.log({ output });
}

race().then(console.log);
