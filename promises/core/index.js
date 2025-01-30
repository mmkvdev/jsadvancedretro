function getUsers(callback) {
  setTimeout(
    () =>
      callback([
        {
          userName: "MMK",
          email: "mmkvarma@hotmail.com",
        },
        {
          userName: "Varma",
          email: "varmammk@yahoo.com",
        },
      ]),
    1000
  );
}

function findUser(userName, logger) {
  //   return getUsers().find((user) => user.userName === userName);
  return getUsers((users) => {
    const user = users.find((user) => user.userName === userName);
    logger(user);
  });
}

console.log(findUser("MMK", console.log));

// use an asynchronous callback - leads to callback hell problem
