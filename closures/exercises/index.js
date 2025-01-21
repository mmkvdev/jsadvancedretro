function callMeMayBe() {
  setTimeout(function () {
    console.log(callMe);
  }, 4000);

  const callMe = "Closure Example";
}

callMeMayBe();
