const array = [1, 2, 3, 4];

// use let
for (let i = 0; i < array.length; i++) {
  setTimeout(function () {
    console.log("I am at index: " + i, array[i]);
  }, 3000);
}

// use an IIFE
for (var i = 0; i < array.length; i++) {
  (function (closureI) {
    setTimeout(function () {
      console.log("I am at index: " + closureI, array[closureI]);
    }, 3000);
  })(i);
}
