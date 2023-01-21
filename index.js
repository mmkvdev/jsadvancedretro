a = 1;

var b = 2;

function outer(z) {  
  b = 3;  
  c = 4;  
  var d = 5;  
  e = 6;
  function inner() {    
    var e = 0;    
    d = 2 * d;    
    return d;  
  }  
  return inner();  
  var e;
};


outer(1);



// global - a,b -> 2 | 3, outer

// local - d, e, inner