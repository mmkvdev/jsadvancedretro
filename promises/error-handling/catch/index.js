// capturing with `catch` method of the promise instance
// if an exception occurs inside the promise, the `catch` method of the promise instance captures it

let authorised = false;

function getUserById(id) {
  return new Promise((resolve, reject) => {
    if (!authorised) {
      // reject(`user with ${id} is not authorised`);
      throw new Error(`user with ${id} is not authorised`);
    }

    resolve({
      id,
      userName: "admin",
    });
  });
}

try {
  getUserById(1)
    .then(console.log)
    .catch((err) => console.log("captured at catch block with: ", err));
} catch (err) {
  console.log(`caught at the try/catch block: ${err}`);
}
