// example for reference-counting algorithm 
// problem: cyclic dependency problem
// solution: we can use Mark and Sweep Garbage Collection Algorithm

let son = {
  name: 'John'
};

let father = {
  name: 'Wick'
};

son.father = father;
father.son = son;

son = null;
father = null;

console.log(son, father);


// global variables
user = getUser();
var secondUser = getUser();
function getUser() {
    return 'user';
}

// out of dom reference

const element = document.getElementById('submit');
const elements = [];
elements.push(element);


function removeAllElements () {
	elements.forEach((item, index) => {
  	document.body.removeChild(document.getElementById(item.id));
    elements.splice(index, 1);
  })
}
console.log(elements[0].id);
removeAllElements();