
var string = "hello World";

string +=" !";

console.log("string : ", string);

var index = string.indexOf("lo");
console.log("index of lo : ",index);

string.indexOf("jo");
console.log("index of jo : ",index);

function contains(haystack, needle){
return (haystack.indexOf(needle)>=0);
}

console.log("true ou pas true : ", contains("jack", "ack"), contains("bourde", "h"), contains("jim", "jim"));
console.log("jack is back".includes("ack"));


var hello = "hello world";
var found = hello.search(/orl/);
var alsoFound = hello.search(/world/i);
console.log("found: ", found, "also: ", alsoFound);

var x = /(.)*(world)/i.test("hello World");
console.log("x : ",x);

var strange = /(.)*(world)/i.test("hello World here");
console.log("strange : ",strange);

var moreStrict = /(.)*(world)$/i.test("hello World here");
console.log("moreStrict : ",moreStrict);


console.log("abcdef".substr(1,2)); // returns "bc" : return 2 elements (second parameter) the elements b and the one after b.
console.log("abcdef".substring(1,2)); // returns "b" : substring  takes indices. You can remember because it's the only one with an 'i' in the name.