var x = {};
console.log("x : ", x, typeof x);

var john = {
    name :" john",
    adress : "london",
    friend : {
        name:"jim", age: 25
    }
};

console.log("",john.adress);
console.log("", john.friend.age);

var funkyCop= {
    name : "Robocop"
};

var ennemy = {
    name :"Dick"
};

funkyCop.foe = ennemy ;
console.log("funky : ", funkyCop);
ennemy.foe = funkyCop;
funkyCop.name= "venere Robocop" ;

ennemy.dead = true ;
delete funkyCop.foe ;

console.log("funky now : ", funkyCop);
