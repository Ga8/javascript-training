function add(a,b){
    return a+b ;
};

function divide(a,b){
    return a/b;
};


function multiply(a,b){
    return a*b ;
};


function minus(a,b){
    return a-b;
};

console.log("2x6 =", multiply(2,6))


function operation( op, x, y){
    return op(x,y);
}

console.log("add", operation(multiply,56,59));

var ops = [add, divide, multiply, minus];

var random = ops[Math.floor(Math.random()*ops.length)];

console.log("add", operation (random, 56,59));

data.operation = function(op){
    return op(this[0], this[1]);
}

console.log("data.o");