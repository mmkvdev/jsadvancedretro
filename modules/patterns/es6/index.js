// Native JS module system - ES6

// importing a module
// import module1 from "module";

// exporting a module
// export function module() {}

const harry = "Harry Potter";
const voldermort = "He who must not be named";

export function fight(player1, player2) {
  const attack1 = Math.floor(Math.random() * player1.length);
  const attack2 = Math.floor(Math.random() * player2.length);

  return attack1 > attack2 ? `${player1} wins` : `${player2} wins`;
}

export default function jump() {
  console.log("default export");
}
