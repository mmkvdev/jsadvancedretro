var user1 = {
    name: 'nerd',
    org: 'dev'
};

var user2 = {
    name: 'nerd',
    org: 'dev'
};

var eq = user1 === user2;

alert(eq); // false

// simple approach
eq = JSON.stringify(user1) === JSON.stringify(user2);