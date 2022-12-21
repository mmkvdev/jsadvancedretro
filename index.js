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