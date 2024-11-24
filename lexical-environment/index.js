function b () {
  var b = 10;
  c();
  function c () {
    var c = 30;
    console.log(b, c);
  }
}

b();