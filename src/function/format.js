// fat arrow
var divide = (a,b)=> a/b  ;

console.log("2+3 =", add(2,3));
//console.log("4x3 =", mult(4,3) );
console.log("div", divide(10,5));

var mult = function(a,b){

    return a*b;
};

function add(a,b){
    return a+b ;
};

//bug car ne trouve pas la var, mais trouve la fonction qui est globale.