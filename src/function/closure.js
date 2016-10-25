var Denver = {
    name: 'Denver' ,
    age: 12
};

var petitPied = {
    name : 'petitPied',
    age : -65000000
};

function pure(a, b) {
    // a.age = 15 ; not pure

    return a.age + b.age ; //pure : for some input, will always return value
}

console.log("pure: ", pure(Denver, petitPied));

function unpure(){
    // console.log ou screen() : will modify a stream
    //capture the external petitPied object
    //depend on external context and not only params
    console.log("kick " +petitPied.name);
}

unpure();
