function b () {
  var b = 10;
  c();
  function c () {
    console.log(b);
  }
}

b();