// using async callbacks
function getUsers(userId, callback) {
  console.log("getting user data from server");
  setTimeout(() => {
    callback({
      userId,
      userName: "MMK",
    });
  }, 1000);
}

function getServices(user, callback) {
  console.log("getting services data for the following user: ", user);
  setTimeout(() => {
    callback(["Email", "VPN", "CDN"]);
  }, 2000);
}

function getServiceCost(services, callback) {
  console.log("fetching services cost from server", services);
  setTimeout(() => callback(services.length * 100), 3000);
}

// callback hell
// getUsers(100, (user) => {
//   getServices(user, (services) => {
//     getServiceCost(services, (cost) => {
//       console.log("services cost: ", cost);
//     });
//   });
// });

// with promises
function getUsersWithPromises(userId) {
  console.log("getting user data from server");
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        userId,
        userName: "MMK",
      });
    }, 1000);
  });
}

function getServicesWithPromises(user) {
  console.log("getting services data for the following user: ", user);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(["Email", "VPN", "CDN"]);
    }, 2000);
  });
}

function getServiceCostWithPromises(services) {
  console.log("fetching services cost from server", services);
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(services.length * 100), 3000);
  });
}

// promise chaining
// getUsersWithPromises(100)
//   .then(getServicesWithPromises)
//   .then(getServiceCostWithPromises)
//   .then(console.log);

// async-await allows to write asynchronous code that looks more like a synchronous code and is more readable.
// async-await is just a syntatic sugar for promises.
// await can be used only inside the `async` functions.

// calling three asynchronous operations in sequence
async function showServicesCost() {
  let user = await getUsersWithPromises(100);
  let services = await getServicesWithPromises(user);
  let cost = await getServiceCostWithPromises(services);
  console.log(`The service cost is: ${cost}`);
}

showServicesCost();
