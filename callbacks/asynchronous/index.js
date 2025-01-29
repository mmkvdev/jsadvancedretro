// depends on the network speed and size of the image
function download(url, callback, errorCb) {
  setTimeout(() => {
    console.log(`Downloading image: ${url}`);

    // asynchronous callback
    !url ? errorCb(new Error("url is an empty string")) : callback(url);
  }, 2000);
}

function process(picture) {
  console.log(`Processing picture: ${picture}`);
}

let url = "https://www.javascripttutorial.net/pic.jpg";
let url1 = "https://www.javascripttutorial.net/pic1.jpg";
let url2 = "https://www.javascripttutorial.net/pic2.jpg";
download(url, process, (err) =>
  console.log(`Error while downloading the image: ${err}`)
);

// Error Handling
download("", process, (err) => console.log(err));
process(url);

// nesting callbacks and the pyramid of doom
// nesting many asynchronous functions inside callbacks is known as `pyramid of doom` or `callback hell`
download(url, function (url) {
  console.log(`Processing ${url}`);
  download(url1, function (url) {
    console.log(`Processing ${url}`);
    download(url2, function (url) {
      console.log(`Processing ${url}`);
    });
  });
});
