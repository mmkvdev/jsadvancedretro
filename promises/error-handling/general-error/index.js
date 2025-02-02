// normal error

// if an exception occurs outside the promise, you must wrap it with a `try/catch` block

function getUserById(id) {
  // throwing an error outside of the promise
  if (typeof id !== "number" || id <= 0) {
    throw new Error("Invalid id argument");
  }

  return new Promise((resolve, reject) => {
    resolve({
      id,
      userName: "admin",
    });
  });
}

try {
  getUserById("a")
    .then(console.log)
    .catch((err) => console.log("captured at catch block", err));
} catch (err) {
  console.log("captured at try/catch: ", err);
}
