Array.prototype.breakableForEach = function (callbackFn, thisArg) {
  thisArg = thisArg ?? globalThis;
  for (let i = 0; i < this.length; i++) {
    let breakLoop = false;
    const breakFn = () => {
      breakLoop = true;
    };
    callbackFn.call(thisArg, this[i], i, this, breakFn);

    if (breakLoop) break;
  }
};

const arr = [1, 2, 3, 4, 5];
arr.breakableForEach((item, index, array, breakFn) => {
  if (item === 4) {
    breakFn();
    return;
  }
  console.log(item); // output 1,2,3
});
