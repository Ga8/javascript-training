

function Dinosaurus(name){
    this.size= 12;
    this.name= name;


}

Dinosaurus.prototype.age= -65000000;


const denver = new Dinosaurus('Denver');


Carnivore.prototype.eat = function(obj) {
    console.log(this.name + ' eats ' + obj.name);
}

function Carnivore(){
}

const TRex = new Carnivore();
TRex.eat(denver);

TRex.name = "T Rex";
TRex.eat(denver);


denver.eat = TRex.eat;
denver.eat(TRex);

const eating = TRex.eat
eating(denver);

