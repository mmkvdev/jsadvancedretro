import fetch from "node-fetch";

const urls = [
  "https://jsonplaceholdertypicode.com/users",
  "https://jsonplaceholder.typicode.com/posts",
  "https://jsonplaceholder.typicode.com/albums",
];

Promise.all(
  urls.map((url) => {
    // `fetch` returns us a promise
    // `promises` are like event listener
    return fetch(url).then((res) => res.json());
  })
)
  .then((results) => {
    console.log(results[0]);
    console.log(results[1]);
    console.log(results[2]);
  })
  .catch((err) => console.log(err));
