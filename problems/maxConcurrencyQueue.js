const maxConcurrencyQueue = (limit) => {
  let executing = 0;
  const queue = [];

  const compositionQueue = () => {
    if (queue.length > 0 && executing < limit) {
      executing++;
      const { task, callback } = queue.shift();
      callback(task()).then(() => {
        executing--;
        compositionQueue();
      });
    }
  };

  function enqueue(task, callback) {
    queue.push({ task, callback });
    compositionQueue();
  }

  return { enqueue };
};

const sleep = (ms) => {
  const startTime = Date.now();
  return new Promise((resolve) => {
    setTimeout(() => resolve(Date.now() - startTime), ms);
  });
};

const makeOnStart = (taskId) => {
  return async (taskPromise) => {
    console.log(`${taskId}: task started`);
    const runTime = await taskPromise;
    console.log(`${taskId}: task done in ${runTime.toLocaleString()} ms`);
  };
};

const asyncQueue = maxConcurrencyQueue(1);
asyncQueue.enqueue(() => sleep(3000), makeOnStart(1));
asyncQueue.enqueue(() => sleep(1000), makeOnStart(2));
asyncQueue.enqueue(() => sleep(5000), makeOnStart(3));
asyncQueue.enqueue(() => sleep(2000), makeOnStart(4));
