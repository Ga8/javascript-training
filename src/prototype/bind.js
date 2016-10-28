function Dinosaurus(name) {
    this.size = 12;
    this.name = name;
}

Dinosaurus.prototype.age = -65000000;


const denver = new Dinosaurus('Denver');

function Carnivore() {
}

Carnivore.prototype.eat = function (obj) {
    console.log(this.name + ' eats ' + obj.name);
}

const trex = new Carnivore();
trex.name = 'T-Rex'
//modif
const eating = trex.eat ;
eating (trex);

boundToDenver=eating.bind(denver);
console.log("bound eating to denver");
boundToDenver(trex);

eating.bind(denver)(trex);