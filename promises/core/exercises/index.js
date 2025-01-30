let success = false;

function getUsers() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (success) {
        resolve([
          {
            userName: "MMK",
            email: "mmkvarma@hotmail.com",
          },
          {
            userName: "Varma",
            email: "varmammk@yahoo.com",
          },
        ]);
      } else {
        reject("Promise rejected because the operation is not successful");
      }
    }, 2000);
  });
}

const render = () => {
  console.log("rendering something");
};

const onFulfilled = (users) => {
  console.log({ users });
  //   render();
};

const onRejected = (info) => {
  console.log({ info });
  //   render();
};

getUsers().then(onFulfilled).catch(onRejected).finally(render);
