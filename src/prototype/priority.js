
function Dinosaurus(name){
    this.size= 12;
    this.name= name;


}

Dinosaurus.prototype.age= -65000000;
Dinosaurus.prototype.size=20; // constructeur > prototype

const denver = new Dinosaurus('denver');

const petitPied = new Dinosaurus('petit Pied');

console.log("denver size :", denver.size);
/* Denver object build from a prototype but  denver hasn't got prototype.
console.log("denver proto :", denver.prototype.size);
    */

denver.size = 150;
console.log("new denver size: ", denver.size);