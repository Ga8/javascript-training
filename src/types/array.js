var x =[0,3,5,6,21,5,5,2,25,5,2,2,1,338,554,36,32,666];

console.log("", x[0]);
 x[2] = -42 ; // modify array


//deviation
x[-2]= "whatttt???   ";
console.log("", x[-2]);

/*
console.log("all table", x);
x[150]=149 ;
console.log("big table now: ", x);
*/
/* let's start over and serious stuff */
x= [0,3,5,-6,21,5,5,2,31,5,2,2,1,338,554,-36,32];

x.sort();
console.log("x sorted : ", x);


x.sort(function(a,b){
    if (a<b){
        return -1;
    }else if (a>b){
    return 1;
    }
    return 0 ;
    })


console.log("x correctly sorted : ", x);

var sortFunction = (a,b) => a<b ? -1 : 1 ;
x.sort(sortFunction);
console.log("es 2015 sorted" , x);

// z.filter -> elvis operator
var filtered = x.filter (function(number){
    return number >=0 ;
});
console.log("filtered x: ", filtered);

var fatFiltered = (number) => number >=0;
filtered = x.filter(fatFiltered);
console.log("", filtered);

direct = x.filter( number => number >= 0).filter(n=> n< 10);
console.log("multi ", direct);

//add
x.push(666);
console.log("blabla", x);

//supr
x.pop();
console.log("blabla", x);

//insert
x.unshift('i am the first');
console.log("blabla", x);

console.log(typeof x);

//console.log("is array?", Array.isArray(myArray), Array.isArray{(name: "jim")});
