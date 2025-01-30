import fetch from "node-fetch";

function getPosts(url) {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then((res) => res.json())
      .then(console.log);
  });
}

const url = "https://jsonplaceholder.typicode.com/posts";

getPosts(url);
