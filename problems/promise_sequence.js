/**
 * how would you implement a function to execute an array of asynchronous tasks
 * sequentially, collecting both resolved values and errors?
 */
const createAsyncTask = () => {
  const randomVal = Math.floor(Math.random() * 10);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (randomVal > 5) {
        resolve(randomVal);
      } else {
        reject(randomVal);
      }
    }, randomVal * 100);
  });
};

const tasks = [
  createAsyncTask,
  createAsyncTask,
  createAsyncTask,
  createAsyncTask,
  createAsyncTask,
];

const taskRunnerIterative = async (tasks, cb) => {
  //write code here
  const result = [];
  const error = [];

  for (let task of tasks) {
    try {
      const res = await task();
      result.push(res);
    } catch (err) {
      error.push(err);
    }
  }

  cb(result, error);
};

const taskRunnerRecursion = (tasks, cb) => {
  const result = [];
  const error = [];
  const recursiveHelper = (index = 0) => {
    // if all the tasks are processed, invoke the callback with results and errors
    if (index === tasks.length) {
      cb(result, error);
      return;
    }

    tasks[index]()
      .then((num) => {
        result.push(num);
      })
      .catch((num) => {
        error.push(num);
      })
      .finally(() => {
        recursiveHelper(++index);
      });
  };
  recursiveHelper();
};

taskRunnerIterative(tasks, (result, err) =>
  console.log("iterative: ", result, err)
);
taskRunnerRecursion(tasks, (result, err) =>
  console.log("recursion: ", result, err)
);
