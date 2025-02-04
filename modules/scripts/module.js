//IIFE
// Module Pattern
// Revealing Module Pattern

var fightModule = (function () {
  var harry = "Harry Potter";
  var voldermort = "He who must not be named";

  function fight(player1, player2) {
    var attack1 = Math.floor(Math.random() * player1.length);
    var attack2 = Math.floor(Math.random() * player2.length);

    return attack1 > attack2 ? `${player1} wins` : `${player2} wins`;
  }

  return {
    fight,
  };
})();
